import {
    eventSource,
    event_types,
    extension_prompt_types,
    extension_prompt_roles,
    saveSettingsDebounced,
    setExtensionPrompt,
} from '../../../../script.js';
import { extension_settings } from '../../../extensions.js';

const MODULE = 'pusyawr';
const PROMPT_TAG = 'pusya_wardrobe';
const BASE = (() => {
    try { return new URL('.', import.meta.url).pathname; } catch { return '/scripts/extensions/third-party/SillyTavern-PusyaWardrobe/'; }
})();
const ctx = () => SillyTavern.getContext();

function store() {
    if (!extension_settings[MODULE]) extension_settings[MODULE] = {};
    const s = extension_settings[MODULE];
    if (!s.vars) s.vars = {};
    return s;
}

function locale() {
    let l = '';
    try { l = String(localStorage.getItem('language') || navigator.language || ''); } catch {}
    return /^zh/i.test(l) ? 'zh-CN' : /^(ru|uk|be|kk)/i.test(l) ? 'ru' : 'en';
}
function t(k, p) {
    const D = window.__PWR_I18N || {};
    let s = (D[locale()] && D[locale()][k]) || (D.en && D.en[k]) || k;
    if (p) s = String(s).replace(/\{(\w+)\}/g, (m, n) => (n in p ? p[n] : m));
    return s;
}

const insetWatchers = [];
function insets() {
    const top = document.getElementById('top-bar');
    const form = document.getElementById('form_sheld');
    const H = window.innerHeight;
    return {
        topBar: top ? Math.round(top.getBoundingClientRect().bottom) : 40,
        bottomInput: form ? Math.max(0, Math.round(H - form.getBoundingClientRect().top)) : 70,
    };
}
function applyInsets() {
    const i = insets();
    document.documentElement.style.setProperty('--tavo-inset-top-bar', i.topBar + 'px');
    document.documentElement.style.setProperty('--tavo-inset-bottom-input', i.bottomInput + 'px');
    for (const f of insetWatchers) { try { f(i); } catch {} }
}

function stMessages(arr) {
    return (arr || []).map((m, i) => ({
        id: i,
        role: m.is_user ? 'user' : (m.is_system ? 'system' : 'assistant'),
        content: String(m.mes || ''),
        hidden: !!m.is_system,
    }));
}
function fire(name, detail) {
    const d = Object.assign({ at: Date.now() + ':' + Math.random().toString(36).slice(2, 7) }, detail || {});
    try { window.dispatchEvent(new CustomEvent(name, { detail: d })); } catch {}
}

let dbPromise = null;
function idb() {
    if (!dbPromise) {
        dbPromise = new Promise((res, rej) => {
            const r = indexedDB.open('pusya_wardrobe', 1);
            r.onupgradeneeded = () => r.result.createObjectStore('files');
            r.onsuccess = () => res(r.result);
            r.onerror = () => rej(r.error);
        });
    }
    return dbPromise;
}
async function tx(mode, fn) {
    const d = await idb();
    return new Promise((res, rej) => {
        const st = d.transaction('files', mode).objectStore('files');
        const r = fn(st);
        r.onsuccess = () => res(r.result);
        r.onerror = () => rej(r.error);
    });
}
const tmp = new Map();
const isTmp = (name) => String(name).startsWith('tmp/');
async function rawGet(name) {
    if (isTmp(name)) return tmp.get(name) || null;
    return (await tx('readonly', (s) => s.get(name))) || null;
}
function pickFile(accept) {
    return new Promise((res) => {
        const i = document.createElement('input');
        i.type = 'file';
        i.accept = accept;
        let done = false;
        i.onchange = () => { done = true; res(i.files && i.files[0] ? i.files[0] : null); };
        window.addEventListener('focus', () => setTimeout(() => { if (!done) res(null); }, 1200), { once: true });
        i.click();
    });
}
function readAs(file, how) {
    return new Promise((res, rej) => {
        const fr = new FileReader();
        fr.onload = () => res(String(fr.result));
        fr.onerror = () => rej(fr.error);
        if (how === 'text') fr.readAsText(file); else fr.readAsDataURL(file);
    });
}

const tavoLike = {
    plugin: {
        i18n: { get locale() { return locale(); }, t },
        on: () => null,
        emit: (name, d) => { try { window.dispatchEvent(new CustomEvent(name, { detail: d })); } catch {} },
    },
    chat: {
        current: async () => {
            const c = ctx();
            const id = c.chatId || (c.getCurrentChatId && c.getCurrentChatId());
            if (!id) return null;
            return { id: String(id), name: String(id), persona: { name: c.name1 || '' }, characters: [{ name: c.name2 || '' }] };
        },
    },
    message: { find: async () => stMessages(ctx().chat) },
    variable: {
        get: async (name, scope) => {
            if (scope === 'chat') return ctx().chatMetadata?.[MODULE + ':' + name];
            return store().vars[name];
        },
        set: async (name, value, scope) => {
            if (scope === 'chat') {
                const c = ctx();
                if (!c.chatMetadata || !c.chatId) return;
                c.chatMetadata[MODULE + ':' + name] = value;
                (c.saveMetadataDebounced || c.saveMetadata)?.();
                return;
            }
            store().vars[name] = value;
            saveSettingsDebounced();
        },
        unset: async (name, scope) => {
            if (scope === 'chat') {
                const c = ctx();
                if (c.chatMetadata) { delete c.chatMetadata[MODULE + ':' + name]; (c.saveMetadataDebounced || c.saveMetadata)?.(); }
                return;
            }
            delete store().vars[name];
            saveSettingsDebounced();
        },
    },
    file: {
        save: async (name, content, o) => {
            await tx('readwrite', (s) => s.put({ c: content, e: (o && o.encoding) || 'utf8' }, name));
            return name;
        },
        load: async (name, o) => {
            const x = await rawGet(name);
            if (!x) return null;
            const want = (o && o.encoding) || 'utf8';
            if (want === 'dataUrl') return x.e === 'dataUrl' ? x.c : 'data:image/jpeg;base64,' + x.c;
            if (want === 'base64') return x.e === 'dataUrl' ? String(x.c).split(',')[1] : x.c;
            return x.c;
        },
        exists: async (name) => !!(await rawGet(name)),
        delete: async (name) => { await tx('readwrite', (s) => s.delete(name)); },
        list: async () => ({ files: (await tx('readonly', (s) => s.getAllKeys())).map((n) => ({ name: String(n) })) }),
        import: async (o) => {
            const json = (o.extensions || [])[0] === 'json';
            const f = await pickFile(json ? '.json,application/json' : 'image/*');
            if (!f) return [];
            const path = 'tmp/' + Date.now() + '-' + f.name;
            tmp.set(path, json ? { c: await readAs(f, 'text'), e: 'utf8' } : { c: await readAs(f, 'url'), e: 'dataUrl' });
            return [{ path, name: f.name }];
        },
        export: async (name, text) => {
            const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 5000);
        },
    },
    utils: { toast: (m) => toastr.info(String(m), 'PUSYA WARDROBE') },
    ui: {
        getInsets: () => insets(),
        onInsetsChanged: (f) => { if (typeof f === 'function') insetWatchers.push(f); },
    },
};

async function vget(name, scope) {
    const v = await tavoLike.variable.get(name, scope);
    if (v == null || v === '') return null;
    try { return typeof v === 'string' ? JSON.parse(v) : v; } catch { return null; }
}
async function vset(name, val, scope) { await tavoLike.variable.set(name, val == null ? '' : JSON.stringify(val), scope); }

globalThis.pusyaWardrobeBeforeGenerate = async (chat, contextSize, abort, type) => {
    const P = window.PWR;
    if (!P) return;
    if (type === 'quiet') { setExtensionPrompt(PROMPT_TAG, '', extension_prompt_types.IN_CHAT, 0); return; }
    const s = P.settings(await vget('pwr_settings', 'global'));
    const st = { cnt: 0, once: false, last: false };
    if (s.mode !== 'always') {
        st.cnt = (await vget('pwr_cnt', 'chat')) || 0;
        st.once = !!(await vget('pwr_once', 'chat'));
        st.last = !!(await vget('pwr_last', 'chat'));
    }
    const res = P.compose({
        settings: s,
        worn: await vget('pwr_worn', 'chat'),
        marks: s.track ? P.readMarks(stMessages(chat), false, { user: ctx().name1, char: ctx().name2 }) : [],
        st,
        repeat: type === 'regenerate' || type === 'swipe' || type === 'continue',
    });
    if (res.r && s.mode !== 'always') {
        if (res.r.cnt !== st.cnt) await vset('pwr_cnt', res.r.cnt, 'chat');
        if (res.r.once !== st.once) await vset('pwr_once', res.r.once ? 1 : null, 'chat');
        if (res.r.last !== st.last) await vset('pwr_last', res.r.last ? 1 : null, 'chat');
    }
    setExtensionPrompt(PROMPT_TAG, res.text, extension_prompt_types.IN_CHAT, 0, false, extension_prompt_roles.SYSTEM);
};

function hideMarks() {
    document.querySelectorAll('#chat .mes .mes_text').forEach((el) => {
        if (!el.innerHTML.includes('pwr:')) return;
        const out = el.innerHTML.replace(/&lt;!--\s*pwr:[\s\S]*?--&gt;/g, '');
        if (out !== el.innerHTML) el.innerHTML = out;
    });
}
let renderTimer = null;
function soon() {
    clearTimeout(renderTimer);
    renderTimer = setTimeout(() => { hideMarks(); fire('pusya-wr:refresh'); }, 60);
}

function mountDrawer() {
    const target = $('#extensions_settings2').length ? '#extensions_settings2' : '#extensions_settings';
    const html = `
<div class="inline-drawer" id="pwr_root">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b>🪞 PUSYA WARDROBE</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content">
    <div class="pwrx">
      <div class="pwrx-note">${t('settings.info.open')}</div>
      <div class="pwrx-row">
        <button class="pwrx-b" id="pwrx_open">${t('actions.open')}</button>
        <button class="pwrx-b pwrx-ghost" id="pwrx_dock">↺ 🪞</button>
      </div>
      <div class="pwrx-row"><button class="pwrx-b pwrx-ghost" id="pwrx_win">${t('ui.btn.winReset')}</button></div>
      <div class="pwrx-note">${t('settings.info.vision')}</div>
    </div>
  </div>
</div>`;
    $(target).append(html);
    $('#pwrx_open').on('click', () => fire('pusya-wr:open'));
    $('#pwrx_dock').on('click', () => { try { window.__pwr_panel?.resetDock?.(); } catch {} });
    $('#pwrx_win').on('click', () => { try { window.__pwr_panel?.resetWin?.(); } catch {} });
}

function loadPanel() {
    return new Promise((resolve, reject) => {
        const sc = document.createElement('script');
        sc.src = BASE + 'panel.js';
        sc.onload = resolve;
        sc.onerror = () => reject(new Error('panel.js not found at ' + BASE));
        document.head.appendChild(sc);
    });
}

jQuery(async () => {
    store();
    window.__pwr_tavo = tavoLike;
    applyInsets();
    window.addEventListener('resize', applyInsets);
    try {
        const ro = new ResizeObserver(applyInsets);
        for (const id of ['top-bar', 'form_sheld']) { const n = document.getElementById(id); if (n) ro.observe(n); }
    } catch {}

    try { await loadPanel(); } catch (e) {
        console.error('[PUSYA WARDROBE]', e);
        toastr.error(locale() === 'ru' ? 'Не нашла файлы окна. Переустанови расширение.' : 'Window files not found. Reinstall the extension.', 'PUSYA WARDROBE');
        return;
    }
    mountDrawer();

    for (const ev of ['CHARACTER_MESSAGE_RENDERED', 'USER_MESSAGE_RENDERED', 'MESSAGE_UPDATED', 'MESSAGE_EDITED', 'MESSAGE_SWIPED',
        'MESSAGE_DELETED', 'GENERATION_ENDED', 'GENERATION_STOPPED', 'MORE_MESSAGES_LOADED', 'CHAT_CHANGED']) {
        if (event_types[ev]) eventSource.on(event_types[ev], soon);
    }
    soon();
    console.log('[PUSYA WARDROBE] loaded');
});
