(function(){var s=document.createElement("style");s.id="pwr-style";s.textContent="#pw-dock,#pw-win{--card:rgba(255,220,232,.055);--card2:rgba(255,220,232,.1);--ln:rgba(255,200,220,.1);--ln2:rgba(255,200,220,.2);--tx:rgba(255,244,248,.95);--tx2:rgba(238,212,224,.72);--tx3:rgba(226,196,210,.5);--acc:#a64d73;--acc2:#d07a9d;--gold:#e3b070;--grn:#60a080;--red:#f06a6a}\n@keyframes pw-pulse{0%,100%{filter:drop-shadow(0 1px 2px rgba(0,0,0,.8)) drop-shadow(0 0 0 rgba(232,128,160,0))}50%{filter:drop-shadow(0 1px 2px rgba(0,0,0,.8)) drop-shadow(0 0 7px rgba(232,128,160,.95))}}\n@media (prefers-reduced-motion:reduce){#pw-dock svg{animation:none!important}}\n#pw-dock{position:fixed;z-index:2147483000;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;background:none;border:0;box-shadow:none;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;box-sizing:border-box}\n#pw-dock.armed svg{animation:pw-pulse 1.4s ease-in-out infinite}\n#pw-dock.armed::after{content:\"\";position:absolute;bottom:4px;right:4px;width:13px;height:13px;border-radius:50%;background:var(--gold);border:2px solid rgba(30,14,20,.9)}\n#pw-back{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;background:rgba(0,0,0,.18);z-index:2147483640;display:none}\n#pw-back.on{display:block}\n#pw-win{position:fixed;z-index:2147483641;left:50vw;top:calc(100vh - var(--tavo-inset-bottom-input,0px) - 10px);top:calc(100dvh - var(--tavo-inset-bottom-input,0px) - 10px);transform:translate(-50%,-100%);width:min(360px,calc(100vw - 16px));max-height:min(76vh,calc(100vh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px));max-height:min(76dvh,calc(100dvh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px));display:none;flex-direction:column;border-radius:24px;overflow:hidden;border:1px solid var(--ln2);background:linear-gradient(160deg,rgba(50,24,38,.95) 0%,rgba(33,16,27,.96) 55%,rgba(22,10,18,.97) 100%);-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);box-shadow:0 24px 70px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.06);font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;color:var(--tx);-webkit-tap-highlight-color:transparent;text-align:left;line-height:1.35}\n#pw-win *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\n#pw-win.tall{height:min(76vh,calc(100vh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px));height:min(76dvh,calc(100dvh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px))}\n#pw-win.on{display:flex;animation:pw-pop .22s ease}\n@keyframes pw-pop{from{opacity:0;transform:translate(-50%,calc(-100% + 12px)) scale(.97)}to{opacity:1;transform:translate(-50%,-100%)}}\n@media (prefers-reduced-motion:reduce){#pw-win.on{animation:none}}\n.pw-hd{display:flex;align-items:center;gap:8px;padding:12px 12px 6px 14px;flex-shrink:0}\n.pw-hd b{flex:1;min-width:0;font-size:10px;letter-spacing:.18em;color:var(--tx2);text-transform:uppercase;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0;background:var(--grn);box-shadow:0 0 8px var(--grn)}\n.pw-dot.off{background:var(--tx3);box-shadow:none}\n.pw-ibtn{width:30px;height:30px;border-radius:50%;border:1px solid var(--ln2);background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;flex-shrink:0;color:var(--tx);user-select:none;position:relative;touch-action:manipulation}\n.pw-ibtn::after{content:\"\";position:absolute;top:-7px;right:-7px;bottom:-7px;left:-7px}\n.pw-ibtn:active{transform:scale(.93)}\n.pw-body{flex:1;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:6px 12px 8px;display:flex;flex-direction:column;gap:8px}\n.pw-body>*{flex-shrink:0}\n.pw-foot{text-align:center;font-size:8.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--tx3);padding:4px 0 8px;flex-shrink:0}\n.pw-status{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:16px;background:var(--card);border:1px solid var(--ln);font-size:11.5px;line-height:1.35;min-height:34px;color:var(--tx2)}\n.pw-status.armed{background:rgba(166,77,115,.2);border-color:var(--acc2);color:var(--tx)}\n.pw-sec{display:flex;flex-direction:column;gap:8px}\n.pw-h5,.pw-sub{margin:2px 4px 0;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.2em;color:var(--tx3)}\n.pw-hint{font-size:11px;line-height:1.45;color:var(--tx2);margin:0 4px}\n.pw-hl{outline:2px solid var(--gold);outline-offset:2px;border-radius:16px}\n.pw-tour{padding:10px 12px;border-radius:16px;background:rgba(227,176,112,.12);border:1px solid rgba(227,176,112,.5);display:flex;flex-direction:column;gap:4px}\n.pw-tour small{font-size:10px;color:var(--gold);font-weight:700}\n.pw-tour b{font-size:13px}\n.pw-tour p{margin:0 0 4px;font-size:11.5px;line-height:1.45;color:var(--tx2)}\n.pw-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:7px}\n.pw-ev{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:16px;border:1px solid var(--ln);background:var(--card);cursor:pointer;user-select:none;min-width:0}\n.pw-ev:active{transform:scale(.97);background:var(--card2)}\n.pw-ev.on{background:rgba(166,77,115,.4);border-color:var(--acc2)}\n.pw-ev i{font-style:normal;font-size:18px;line-height:1;flex-shrink:0}\n.pw-ev>span{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}\n.pw-ev b{font-size:12.5px;font-weight:700;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-ev small{font-size:10px;color:var(--tx2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-card{border-radius:16px;background:var(--card);border:1px solid var(--ln);overflow:hidden}\n.pw-row{display:flex;align-items:center;gap:9px;padding:8px 11px;min-height:40px;cursor:pointer;user-select:none;min-width:0}\n.pw-row+.pw-row{border-top:1px solid var(--ln)}\n.pw-lb{flex:1;min-width:0;font-size:12.5px;line-height:1.3;word-break:break-word}\n.pw-lb small{display:block;font-size:10.5px;color:var(--tx2);margin-top:1px}\n.pw-lb small.pw-one{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-lb.bad{color:#ffc4c4}\n.pw-ic{font-size:16px;width:22px;text-align:center;flex-shrink:0}\n.pw-cnt{font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;background:var(--card2);color:var(--tx2);flex-shrink:0;white-space:nowrap}\n.pw-off{width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:11px;color:var(--tx2);flex-shrink:0;cursor:pointer}\n.pw-sw{position:relative;width:38px;height:22px;border-radius:11px;background:rgba(255,255,255,.14);flex-shrink:0;transition:background .15s ease}\n.pw-sw::after{content:\"\";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#f4e6ec;transition:left .15s ease}\n.pw-sw.on{background:var(--acc)}\n.pw-sw.on::after{left:18px;background:#fff}\n.pw-fw{display:flex;flex-direction:column}\n.pw-fold{display:flex;align-items:center;gap:9px;padding:9px 12px;min-height:42px;cursor:pointer;user-select:none;border-radius:16px;background:var(--card);border:1px solid var(--ln);min-width:0}\n.pw-fold.open{border-radius:16px 16px 0 0}\n.pw-fold b{flex:1;min-width:0;font-size:12.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-fold em{font-style:normal;font-size:10px;font-weight:700;padding:3px 9px;border-radius:999px;background:var(--card2);color:var(--tx2);flex-shrink:0;max-width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-fold em.on{background:rgba(96,160,128,.28);color:#c4f0da}\n.pw-fold i{font-style:normal;font-size:11px;color:var(--tx3);transition:transform .15s ease;flex-shrink:0}\n.pw-fold.open i{transform:rotate(180deg)}\n.pw-foldb{border:1px solid var(--ln);border-top:none;border-radius:0 0 16px 16px;background:rgba(0,0,0,.14);padding:8px;display:flex;flex-direction:column;gap:7px}\n.pw-tip{font-size:12px;line-height:1.5;color:var(--tx);padding:2px 4px;white-space:pre-line}\n.pw-chips{display:flex;flex-wrap:wrap;gap:6px}\n.pw-chip{font-size:10.5px;font-weight:700;padding:6px 11px;border-radius:999px;border:1px solid transparent;background:var(--card2);color:var(--tx2);cursor:pointer;flex-shrink:0;user-select:none;white-space:nowrap}\n.pw-chip.on{color:#fff;background:var(--acc);border-color:var(--acc2)}\n.pw-row2{display:flex;gap:7px}\n.pw-col{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}\n.pw-btn{flex:1;min-width:0;padding:10px 10px;border-radius:999px;border:1px solid var(--ln2);background:var(--card2);color:var(--tx);font-size:12px;font-weight:600;text-align:center;cursor:pointer;user-select:none}\n.pw-btn:active{transform:scale(.97)}\n.pw-btn.main{background:var(--acc);color:#fff;border-color:transparent;font-weight:700}\n.pw-btn.danger{background:rgba(240,106,106,.25);border-color:rgba(240,106,106,.45);color:#ffd6d6}\n.pw-empty{padding:16px 14px;border-radius:16px;background:var(--card);border:1px dashed var(--ln2);font-size:12px;line-height:1.5;color:var(--tx2);text-align:center}\n.pw-warn{padding:9px 12px;border-radius:14px;background:rgba(240,106,106,.13);border:1px solid rgba(240,106,106,.4);font-size:12px;line-height:1.4;color:#ffd0d0}\n.pw-busy{padding:9px 12px;border-radius:14px;background:var(--card2);font-size:12px;color:#f0a8c0;text-align:center}\n.pw-tiles{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}\n.pw-tile{display:flex;flex-direction:column;gap:3px;cursor:pointer;min-width:0}\n.pw-tile:active{transform:scale(.97)}\n.pw-tim{position:relative;display:block;aspect-ratio:3/4;border-radius:10px;overflow:hidden;background:var(--card2)}\n.pw-tim img{width:100%;height:100%;object-fit:cover;display:block}\n.pw-tim em{position:absolute;right:3px;top:3px;font-style:normal;font-size:9px;padding:1px 4px;border-radius:999px;background:rgba(20,8,14,.78)}\n.pw-tile b{font-size:9.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\nimg.gone{visibility:hidden}\n.pw-noimg{font-size:18px;color:var(--tx3);display:flex;align-items:center;justify-content:center;width:100%;height:100%}\n.pw-rthumb{width:36px;height:36px;border-radius:9px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--card2)}\n.pw-rthumb img{width:100%;height:100%;object-fit:cover;display:block}\n.pw-l{display:block;font-size:11px;color:var(--tx2);margin:2px 4px -3px}\n#pw-win input,#pw-win textarea,#pw-win select{display:block;width:100%;background:rgba(0,0,0,.26);border:1px solid var(--ln2);border-radius:14px;color:var(--tx);padding:9px 12px;font:12.5px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;outline:none;-webkit-appearance:none;appearance:none}\n#pw-win select option{background:#2a1220;color:#fff}\n#pw-win textarea{resize:none}\n#pw-win input:focus,#pw-win textarea:focus,#pw-win select:focus{border-color:var(--acc2)}\n#pw-win ::placeholder{color:var(--tx3)}\n.pw-prev{border-radius:14px;background:var(--card);border:1px solid var(--ln);padding:9px 12px;font-size:12px}\n.pw-prev summary{cursor:pointer;color:var(--tx2)}\n.pw-prev pre{margin:8px 0 0;white-space:pre-wrap;word-break:break-word;font:11px/1.45 ui-monospace,Menlo,Consolas,monospace;color:var(--tx2);max-height:200px;overflow:auto}\n.pw-info{border-radius:14px;background:var(--card);border:1px solid var(--ln);padding:3px 12px;font-size:11px;line-height:1.5;color:var(--tx2)}\n.pw-info p{margin:7px 0}\n#pw-sheet{display:none;position:absolute;left:0;right:0;top:0;bottom:0;z-index:5;background:rgba(14,6,11,.72)}\n#pw-sheet.on{display:flex;align-items:flex-end}\n.pw-sh{width:100%;max-height:100%;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;background:linear-gradient(170deg,#38182a,#231019);border-radius:22px 22px 0 0;border-top:1px solid var(--ln2);padding:12px 14px 14px;display:flex;flex-direction:column;gap:8px}\n.pw-sh>*{flex-shrink:0}\n.pw-shhd{display:flex;align-items:center;gap:8px}\n.pw-shhd b{flex:1;min-width:0;font-size:14px}\n.pw-pic{height:120px;border-radius:14px;overflow:hidden;background:rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center}\n.pw-pic img{max-width:100%;max-height:100%;object-fit:contain;display:block}\n.pw-asktx{font-size:13px;line-height:1.5;padding:2px 2px 4px}\n.pw-choice{padding:11px 12px;border-radius:16px;border:1px solid var(--ln2);background:var(--card2);cursor:pointer;user-select:none}\n.pw-choice:active{transform:scale(.98)}\n.pw-chh{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px}\n.pw-chh em{font-style:normal;font-size:10px;font-weight:700;padding:3px 9px;border-radius:999px;background:rgba(0,0,0,.28);color:var(--tx2);flex-shrink:0}\n.pw-choice p{margin:5px 0 0;font-size:11.5px;line-height:1.45;color:var(--tx2)}\n#pw-dock{color:#f6cbdb}\n#pw-dock svg{width:36px;height:36px;fill:none;stroke:currentColor;stroke-width:1.6;filter:drop-shadow(0 1px 2px rgba(0,0,0,.8)) drop-shadow(0 0 1px rgba(0,0,0,.6));stroke-linecap:round;stroke-linejoin:round;pointer-events:none}\n.pw-tile.far .pw-tim{opacity:.42}\n.pw-tile small{font-size:8.5px;color:var(--gold);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pw-tim em.fav{right:auto;left:3px;color:var(--gold)}\n.pw-ibtn.fav{color:var(--gold)}\n.pw-cnt[data-act]{cursor:pointer}\n.pw-cnt.g{background:rgba(96,160,128,.28);color:#c4f0da}\n.pw-cnt.y{background:rgba(227,176,112,.2);color:var(--gold)}\n.pw-ck{width:20px;height:20px;border-radius:6px;border:1px solid var(--ln2);background:rgba(0,0,0,.25);flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff}\n.pw-ck.on{background:var(--acc);border-color:var(--acc2)}\n.pw-ck.on::before{content:\"✓\"}\n.pw-status[data-act]{cursor:pointer}\n#pw-res{min-height:0}\n#pw-win.st-win #pw-hd{cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}\n#pw-win.st-win #pw-hd:active{cursor:grabbing}\n#pw-win.moved{transform:none}\n#pw-win.moved.on{animation:none}\n#pw-win.zoomed #pw-hd,#pw-win.zoomed #pw-body,#pw-win.zoomed #pw-foot{zoom:var(--pw-z,1)}\n#pw-win.zoomed .pw-sh{zoom:var(--pw-z,1)}\n#pw-grip{position:absolute;right:3px;bottom:3px;width:20px;height:20px;z-index:7;cursor:nwse-resize;touch-action:none;border-right:2px solid var(--acc2);border-bottom:2px solid var(--acc2);border-radius:0 0 18px 0;opacity:.5}\n#pw-grip:hover{opacity:1}\n#pw-grip[hidden]{display:none}\n";document.head.appendChild(s);})();
window.__PWR_I18N={"ru":{"plugin.name":"PUSYA WARDROBE 🪞","plugin.description":"Гардероб и дом, которые персонаж не забудет. Загружай фото одежды, причёсок, макияжа, украшений и комнат: отдельная модель опишет их текстом, а плагин будет напоминать модели чата, кто во что одет и где находится.\n\n**👗 Шкаф**\n- Одежда, причёски, макияж, украшения и аксессуары отдельно.\n- У героев свои полки в каждом чате, плюс общая полка.\n- Из вещей собираются образы, которые надеваются одной кнопкой.\n\n**🧵 Каталог**\n- Готовая коллекция нарядов Mooxsy с фильтрами по стилю и полу.\n\n**🏠 Дома**\n- Дом каждого героя, общий дом и любые другие места, внутри комнаты.\n- Переключатель «живут раздельно / вместе».\n\n**🏷 Скрытые метки**\n- Модель сама отмечает, если кто-то переоделся или сцена сменила место. История с номерами сообщений.\n\nДля описания фото нужна своя модель с поддержкой изображений. Данные и ключ хранятся на вашем устройстве, фото уходят только выбранной вами модели.","releaseNotes.1_1_2":"Ключ модели больше не теряется при запуске, список моделей загружается как в Сошле и Дневнике, ошибки объясняют причину.","actions.open":"Гардероб 🪞","settings.info.open":"Окно открывается кнопкой 🪞 над чатом, из меню у поля ввода или из бокового меню.","settings.info.vision":"Чтобы описывать фото, в окне 🪞 открой ⚙️ и укажи адрес, ключ и модель с поддержкой изображений. Каталог и описания вручную работают без этого.","settings.privacy":"Гардероб, настройки и ключ хранятся только в Tavo на этом устройстве. Автору ничего не отправляется. Подробности в ⚙️ окна 🪞.","ui.title":"Гардероб","ui.head.catalog":"🧵 Каталог","ui.head.looks":"✨ Образы","ui.head.history":"🕘 Надето ранее","ui.head.homes":"🏠 Дома","ui.head.set":"⚙️ Настройки","ui.head.guide":"❓ Как пользоваться","ui.loading":"Загружаю…","ui.n.items":"{n} шт.","ui.side.user":"Юзер","ui.side.char":"Персонаж","ui.side.send":"Напоминать модели об этом герое","ui.owner.common":"Общее","ui.kind.outfit":"Одежда","ui.kind.hair":"Причёска","ui.kind.makeup":"Макияж","ui.kind.jewelry":"Украшения","ui.kind.accessory":"Аксессуары","ui.kind.look":"Образ","ui.kind.home":"Дом","ui.sec.outfit":"Одежда","ui.sec.hair":"Причёски","ui.sec.makeup":"Макияж","ui.sec.jewelry":"Украшения","ui.sec.accessory":"Аксессуары","ui.sec.looks":"Образы","ui.sec.catalog":"Каталог","ui.sec.catalogHint":"готовые наряды","ui.sec.history":"Надето ранее","ui.sec.home":"Дом","ui.sec.shelf":"Шкаф","ui.slot.none":"Не выбрано","ui.slot.mark":"🏷 сообщение #{n}","ui.st.mark":"🏷 Модель заметила: {name} · сообщение #{n}","ui.st.none":"Переодевания появятся здесь, когда модель их заметит","ui.tour.step":"Шаг {n} из {m}","ui.tour.skip":"Пропустить","ui.tour.next":"Дальше","ui.tour.done":"Готово","ui.tour.status.t":"Что заметила модель","ui.tour.status.d":"Здесь видно последнее переодевание, которое модель отметила сама.","ui.tour.folds.t":"Что надето на героях","ui.tour.folds.d":"Разверни строку героя: там его одежда, причёска, макияж, украшения и аксессуары. Крестик снимает вещь.","ui.tour.home.t":"Где вы находитесь","ui.tour.home.d":"Выбери дом и комнату. Обычно модель сама отмечает, где идёт сцена, а если не поймёт, плагин спросит.","ui.tour.shelf.t":"Шкаф","ui.tour.shelf.d":"Загружай вещи по разделам. В каждом разделе модель описывает только свой тип вещи. Образы собираются из готовых вещей.","ui.tour.catalog.t":"Каталог и история","ui.tour.catalog.d":"В каталоге готовые наряды, они надеваются целиком. В «Надето ранее» все смены с номерами сообщений.","ui.tour.gear.t":"Настройки","ui.tour.gear.d":"Здесь модель для описания фото, язык, частота напоминаний и перенос данных через JSON.","ui.room.where":"Где сейчас","ui.room.title":"Комната","ui.room.none":"Без комнаты","ui.room.all":"Все комнаты","ui.place.out":"Не дома","ui.ask.place.toast":"🏠 Отметь в плагине, в каком доме находятся персонажи","ui.ask.place.t":"Где сейчас персонажи?","ui.ask.place.d":"Модель не смогла понять это по сцене. Выбери место, и плагин запомнит его для следующих ответов.","ui.btn.setHomes":"Настроить дома","ui.btn.photo":"＋ По фото","ui.btn.text":"＋ Текстом","ui.btn.newLook":"＋ Собрать образ","ui.btn.wearOn":"На: {name}","ui.btn.edit":"Изменить","ui.btn.more":"Показать ещё","ui.btn.retry":"Повторить","ui.btn.roomPhoto":"＋ Комната по фото","ui.btn.newPlace":"＋ Добавить дом","ui.btn.models":"Загрузить список моделей","ui.btn.exportJson":"📤 Выгрузить JSON","ui.btn.importJson":"📥 Загрузить JSON","ui.btn.textCopy":"Выгрузить текстом, если файл не сохраняется","ui.btn.attach":"Подключить шкаф другого чата","ui.btn.auto":"Вернуть пропавшее","ui.btn.wipe":"Стереть данные расширения","ui.btn.wipeYes":"Да, стереть всё","ui.btn.toLook":"✨ В образ","ui.btn.save":"Сохранить","ui.btn.describe":"🔍 Описать по фото","ui.btn.addPhoto":"📷 Добавить фото","ui.btn.delete":"Удалить","ui.btn.toChat":"В шкаф этого чата","ui.btn.toCommon":"В общее","ui.btn.newPhoto":"📷 Другое фото","ui.btn.homePhoto":"📷 Фото дома снаружи или планировки","ui.btn.done":"Готово","ui.btn.cancel":"Отмена","ui.btn.remember":"Запомнить","ui.btn.later":"Спросить позже","ui.btn.importText":"Загрузить этот текст","ui.btn.merge":"Добавить к моим","ui.btn.replace":"Заменить","ui.empty.home":"Настрой дома героев, и здесь можно будет выбрать, где идёт сцена.","ui.empty.shelf":"Здесь пока пусто. Загрузи фото или добавь описание текстом.","ui.empty.looks":"Образов пока нет. Собери комплект из вещей шкафа.","ui.cat.all":"Все","ui.cat.female":"♀ Женское","ui.cat.male":"♂ Мужское","ui.cat.none":"В этой подборке ничего нет.","ui.cat.nostyle":"Без стиля","ui.cat.common":"Общий","ui.cat.chat":"Этого чата","ui.cat.hintCommon":"Доступен во всех чатах. Наряд надевается целиком.","ui.cat.hintChat":"Только этот чат. В другом чате с тем же персонажем подборка своя.","ui.cat.for":"Для: {name}","ui.cat.stale":"Показана сохранённая версия каталога.","ui.cat.credit":"Коллекция нарядов by Mooxsy","ui.cat.item":"Наряд из каталога","cat.modern":"Повседневное","cat.spring":"Весна","cat.summer":"Лето","cat.osen":"Осень","cat.postapoc":"Зима","cat.ofis":"Офис","cat.elegant":"Вечер","cat.sport":"Спортивное","cat.pyjamas":"Пижама","cat.dacha":"Дача","cat.slavic":"Славянское","cat.folk":"Историческое","cat.fantasy":"Разное","cat.scifi":"Фантастика","cat.other":"Наряд","ui.look.missing":"Вещь удалена из шкафа","ui.look.pick":"Нажми, чтобы выбрать","ui.log.empty":"Здесь появятся смены с номерами сообщений: те, что сделаны в окне, и те, что заметила модель.","ui.log.after":"после #{n}","ui.log.start":"начало","ui.log.now":"сейчас","ui.home.common":"Общий дом","ui.home.of":"Дом: {name}","ui.home.apart":"Живут раздельно","ui.home.together":"Живут вместе","ui.home.togetherHint":"Основным стал общий дом. В запрос уходит он и текущая комната.","ui.home.apartHint":"У каждого свой основной дом. Модель сама отмечает, где идёт сцена, а если не поймёт, плагин спросит тебя.","ui.home.main":"основной","ui.home.rooms":"комнат: {n}","ui.home.others":"Другие дома","ui.guide.tourT":"Тур по окну","ui.guide.tourD":"Плагин по шагам покажет, что где находится. Запускается сам при первом открытии.","ui.guide.tourBtn":"Показать тур · шагов: {n}","ui.guide.how.t":"Как это работает","ui.guide.how.d":"Ты выбираешь, что надето и где находятся герои. Перед ответом плагин тихо напоминает об этом модели. В чате эту заметку не видно.","ui.guide.start.t":"С чего начать","ui.guide.start.d":"1. В ⚙️ укажи модель, которая видит картинки.\n2. Загрузи вещи или возьми наряд из каталога.\n3. Нажми кнопку с именем героя, чтобы надеть вещь.\n4. Отправь сообщение.","ui.guide.add.t":"Как добавить свою вещь","ui.guide.add.d":"Открой нужный раздел и загрузи фото. Модель опишет только этот тип вещи, поэтому одно фото можно загрузить в разные разделы. Название и описание можно написать самой.","ui.guide.look.t":"Как собрать образ","ui.guide.look.d":"Образы → «Собрать образ». Выбери одежду, причёску, макияж, украшения и аксессуары. Потом всё надевается одной кнопкой.","ui.guide.store.t":"Где что хранится","ui.guide.store.d":"Полки с именами героев живут только в этом чате. «Общее» и каталог доступны в любом чате.","ui.guide.home.t":"Дома и переезд","ui.guide.home.d":"Есть дом каждого героя, общий дом и любые другие места. Когда герои съезжаются, переключи «Живут вместе», и основным станет общий дом. Где идёт сцена, модель отмечает сама. Если не поймёт, появится сообщение и кнопка 🪞 начнёт пульсировать: нажми её и выбери место.","ui.guide.marks.t":"Если герой переоделся в сцене","ui.guide.marks.d":"Модель оставит скрытую метку, и плагин сам обновит наряд. Смена появится в «Надето ранее» с номером сообщения. Такой наряд можно сохранить в шкаф.","ui.guide.move.t":"Перенос на другое устройство","ui.guide.move.d":"⚙️ → Данные → «Выгрузить JSON» и выбери: с фото (полный перенос, большой файл) или без фото (лёгкий файл, твои фото не перенесутся). На новом устройстве нажми «Загрузить JSON». Если у чатов сменились номера, открой нужный чат и нажми «Подключить шкаф другого чата». Ключ модели в файл не попадает.","ui.set.send":"Напоминание модели","ui.set.off":"Выключено","ui.set.on":"Напоминать модели","ui.set.onHint":"Заметка уходит только в запрос, в чате её не видно","ui.set.track":"Замечать переодевания","ui.set.trackHint":"Модель оставляет скрытую метку, если кто-то переоделся или сцена сменила место. Около 450 токенов на запрос","ui.set.mode":"Как часто","ui.set.every":"Раз во сколько ответов","ui.set.note":"Своя фраза в начале заметки","ui.set.notePh":"Пусто: стандартная фраза (детали для справки, без лишних описаний)","ui.set.vision":"Модель для фото","ui.set.ready":"Настроена","ui.set.notSet":"Не задана","ui.set.visionHint":"Подойдёт любой OpenAI-совместимый адрес и модель, которая видит картинки.","ui.set.base":"Адрес","ui.set.key":"Ключ","ui.set.model":"Модель","ui.set.pickModel":"Выбрать из списка…","ui.set.lang":"Язык и вид","ui.set.dock":"Кнопка 🪞 над чатом","ui.set.data":"Данные и перенос","ui.lang.auto":"Авто","ui.mode.always":"Каждый ответ","ui.mode.every":"Раз в несколько","ui.mode.change":"После смены","ui.mode.changeHint":"В истории заметка не остаётся, поэтому через пару ответов модель может снова забыть детали.","ui.preview":"Что уйдёт модели (≈{n} токенов)","ui.data.hint":"В JSON попадают все вещи, образы, дома, история и шкафы чатов. Ключа модели там нет.","ui.privacy.where":"Где ваши данные. Гардероб, фото, настройки и ключ хранятся только на этом устройстве. Автору ничего не отправляется.","ui.privacy.net":"Куда расширение обращается. К модели, которую вы указали: туда уходит фото, когда вы просите его описать, и ваш ключ. К сайтам каталога на github.io: загружаются список, картинки и описания нарядов.","ui.privacy.move":"Как перенести или удалить. «Выгрузить JSON» создаёт файл без ключа. «Стереть данные» удаляет всё; состояние других чатов остаётся, пока вы не нажмёте кнопку в них. Удаление самого расширения данные не стирает.","ui.new.item":"Новая вещь","ui.new.look":"Новый образ","ui.new.home":"Новый дом","ui.new.room":"Новая комната","ui.edit.item":"Вещь","ui.edit.look":"Образ","ui.edit.home":"Дом","ui.edit.room":"Комната","ui.vision.busy":"Модель рассматривает фото…","ui.f.what":"Что описать","ui.f.name":"Название · можно своё","ui.f.desc":"Описание · можно поправить","ui.f.owner":"Чьё","ui.f.none":"Не указан","ui.f.gender":"Пол","ui.f.style":"Стиль","ui.f.homePh":"Например, дом бабушки","ui.f.homeDesc":"Общее описание","ui.f.roomPh":"Например, кухня","ui.ask.title":"Подтверждение","ui.ask.delete":"Удалить «{name}»?","ui.ask.restore":"В файле записей: {file}. У вас сейчас: {have}. Что сделать?","ui.ask.auto":"Выберите день. Вернутся только записи, которых сейчас нет.","ui.ask.wipe":"Удалить весь гардероб, фото, настройки и ключ? Отменить это нельзя. Состояние других чатов исчезнет только вместе с чатами или после нажатия этой кнопки в них.","ui.exp.full":"🖼 С фото","ui.exp.fullD":"Полный перенос всего, что есть. Твои фото уменьшатся до 512 px. Файл большой: сохраняется дольше, а на слабом телефоне может не открыться.","ui.exp.lite":"📝 Без фото","ui.exp.liteD":"Лёгкий файл: описания, образы, дома, история и настройки. Твои фото не перенесутся, в шкафу вместо них будут заглушки, и вернуть их из этого файла нельзя. Напоминания модели работают по текстам и не пострадают.","ui.exp.note":"В обоих случаях наряды из каталога остаются ссылками, а ключ модели в файл не попадает.","ui.size.kb":"{n} КБ","ui.size.mb":"{n} МБ","ui.text.hint":"Скопируй этот текст и вставь его сюда же на другом устройстве. Фото в него не входят.","ui.attach.hint":"После переноса номера чатов могут измениться. Выбери старый чат, и его вещи и дома перейдут в этот.","ui.attach.none":"Других чатов с вещами нет.","ui.toast.models":"Моделей: {n}","ui.toast.worn":"{who}: {name}","ui.toast.saved":"Сохранено","ui.toast.restored":"Восстановлено","ui.toast.noAuto":"Автокопий пока нет","ui.toast.wiped":"Данные стёрты","ui.err.notReady":"Гардероб ещё не прочитан. Подожди немного и попробуй снова.","ui.err.save":"Не удалось сохранить. Данные не потеряны, попробуй ещё раз.","ui.err.chat":"Чат ещё не готов, попробуй ещё раз.","ui.err.noVision":"Модель не настроена. Укажи её в ⚙️ или напиши описание сама.","ui.err.empty":"Модель вернула пустой ответ. Возможно, она не поддерживает картинки или отказалась отвечать.","ui.err.badImage":"Не получилось открыть эту картинку.","ui.err.timeout":"Модель не ответила вовремя.","ui.err.key":"Ключ не подошёл.","ui.err.address":"По этому адресу модель не найдена. Проверь адрес и название модели.","ui.err.limit":"Лимит запросов исчерпан, попробуй позже.","ui.err.http":"Ошибка сервера: {code}","ui.err.network":"Сервис не ответил или отказал без объяснения. Проверь адрес, ключ и название модели.","ui.err.noKey":"Ключ не указан или ещё не прочитан. Проверь его в ⚙️ и попробуй снова.","ui.err.noModels":"Сервис не вернул ни одной модели. Название можно вписать вручную.","ui.err.noBase":"Сначала укажи адрес.","ui.err.catalog":"Не удалось загрузить каталог. Проверь интернет.","ui.err.catText":"Описание не загрузилось. Можно вписать его вручную.","ui.err.needDesc":"Нужно описание: без него модели нечего запоминать.","ui.err.needRoom":"Нужны название и описание комнаты.","ui.err.needPart":"Добавь в образ хотя бы одну вещь.","ui.err.badCopy":"Это не копия гардероба.","releaseNotes.1_1_3":"Окно снова открывается на телефоне и в узком окне Таверны: раньше оно уходило за верх экрана.","ui.head.find":"🔍 Поиск","ui.btn.house":"Обустройство","ui.sec.split":"Разобрать фото","ui.sec.splitHint":"всё с одного снимка","ui.sec.find":"Поиск","ui.sec.findHint":"избранное и теги","ui.find.ph":"Найти: платье, шёлк, вечеринка…","ui.find.fav":"Избранное","ui.gift.toast":"Подарок для дома от {from}: {name}","ui.gift.t":"Подарок для дома","ui.place.toast":"Сцена сменила место. Открой гардероб, чтобы переодеться.","ui.place.q":"{who}: надеть «{look}»?","ui.place.ask2":"Спрашивать","ui.place.auto":"Переодевать сам","ui.where.ask":"{name}: лежит в месте «{place}». Перенести сюда?","ui.where.take":"Взять с собой и надеть","ui.where.move":"Перенести и надеть","ui.where.anyway":"Надеть, не перенося","ui.where.bag":"С собой","ui.where.here":"здесь","ui.where.t":"Где лежит","ui.where.none":"Не указано","ui.thing.furniture":"Мебель","ui.thing.decor":"Декор","ui.thing.flower":"Цветы","ui.thing.gift":"Подарок","ui.thing.from":"Подарок от {name}","ui.thing.msg":"сообщение {n}","ui.thing.stored":"в кладовке","ui.house.wear":"Здесь носят","ui.house.inRoom":"В комнате","ui.house.inHome":"Во всём доме","ui.house.empty":"Пока ничего нет. Добавь мебель, декор или цветы.","ui.house.stored":"Кладовка","ui.house.pick":"Образ для {name}","ui.btn.change":"изменить","ui.btn.choose":"выбрать","ui.btn.putAway":"Убрать","ui.btn.takeOut":"Вернуть из кладовки","ui.btn.fresh":"Поставить свежие","ui.btn.refuse":"Отказаться","ui.btn.putThere":"Поставить","ui.btn.keep":"Оставить как есть","ui.btn.changeClothes":"Переодеть","ui.btn.saveN":"Сохранить {n}","ui.room.wholeHome":"Весь дом","ui.new.thing":"Новое для дома","ui.edit.thing":"Вещь в доме","ui.f.from":"От кого","ui.f.tags":"Теги","ui.f.tagPh":"Новый тег","ui.tags.def":"лето,вечеринка,дом,работа","ui.taste.t":"Как относится {name}","ui.taste.love":"Любит","ui.taste.none":"Всё равно","ui.taste.hate":"Не любит","ui.split.t":"Разбор фото","ui.split.none":"Модель не нашла на фото ни одной вещи. Попробуй другой снимок.","ui.split.look":"Сразу собрать в образ","ui.split.saved":"Сохранено вещей: {n}","ui.set.house":"Дом и вещи","ui.set.homeItems":"Вещи лежат в конкретном доме","ui.set.homeItemsHint":"Вещь из другого дома бледнее. Надеть можно всегда, плагин только предложит перенести её.","ui.set.placeAutoHint":"Иначе при смене места плагин спросит","ui.set.flowers":"Цветы подсыхают через столько сообщений","ui.set.social":"Связь с PUSYA SOCIAL","ui.social.ok":"работает","ui.social.wait":"не подтверждена","ui.social.okHint":"PUSYA SOCIAL уже использовал одежду и дом из гардероба в этом чате.","ui.social.waitHint":"Нарисуй картинку в PUSYA SOCIAL в этом чате и открой настройки снова. Если статус не изменится, Tavo разделяет данные плагинов, и PUSYA SOCIAL увидит только переодевания из скрытых меток.","ui.social.clothes":"Одежда в картинках","ui.social.clothesHint":"PUSYA SOCIAL рисует героев в том, что надето","ui.social.home":"Дом в картинках","ui.social.homeHint":"Комната, мебель, декор, цветы","ui.err.needName":"Нужно название.","ui.flower.fresh":"свежие","ui.flower.drying":"подсыхают","ui.flower.wilted":"завяли","ui.guide.split.t":"📸 Одно фото на всё","ui.guide.split.d":"На главном экране нажми «Разобрать фото». Модель найдёт одежду, причёску, макияж, украшения и аксессуары. Лишнее сними галочкой, нажатие на строку открывает правку. Можно сразу собрать образ.","ui.guide.find.t":"🔍 Поиск, теги, избранное","ui.guide.find.d":"В шкафу, образах и каталоге есть строка поиска и фильтр ★. Звезда в карточке поднимает вещь наверх. Теги задаются в карточке и появляются фильтрами. Плитка «Поиск» ищет по всем разделам сразу.","ui.guide.taste.t":"♥ Вкусы персонажа","ui.guide.taste.d":"В карточке вещи отметь, любит её персонаж или нет. Модель узнает об этом, только когда вещь надета.","ui.guide.placelook.t":"🚪 Образы для мест","ui.guide.placelook.d":"В «Обустройстве» привяжи образы к дому или комнате. Комната важнее дома. Когда сцена переходит туда, плагин спросит, переодеть ли героев, или переоденет сам, если так выбрано.","ui.guide.house.t":"🛋️ Обустройство дома","ui.guide.house.d":"В каждой комнате своя мебель, декор, цветы и подарки. При замене мебель уходит в кладовку. Цветы подсыхают со временем, букет можно обновить. Если в истории дарят что-то дому, появится предложение поставить это. Модель получает только вещи текущей комнаты.","ui.guide.kept.t":"🧳 Вещи в домах","ui.guide.kept.d":"Режим включается в ⚙️. У вещи появляется место: дом или «С собой». Вещь из другого дома в шкафу бледнее. Надеть её можно всегда, плагин только предложит перенести.","ui.guide.social.t":"📱 PUSYA SOCIAL","ui.guide.social.d":"PUSYA SOCIAL рисует героев в том, что надето сейчас, и может показать комнату с мебелью и цветами. Что передавать, выбирается в ⚙️. Там же видно, работает ли связь.","releaseNotes.1_2_0":"Новый значок-зеркало. Разбор одного фото на все вещи, поиск, теги и избранное, вкусы персонажа, образы для мест. Мебель, декор, цветы и подарки для дома, вещи по домам. Связь с PUSYA Social для картинок.","ui.btn.netCheck":"Проверить связь","ui.net.control":"Сайт, обычный запрос","ui.net.list":"Сервис, без ключа","ui.net.auth":"Сервис, с ключом","ui.net.post":"Запрос к модели","ui.net.v.phone":"Ни окно, ни сам Tavo не вышли в интернет. Проверь VPN и подключение телефона.","ui.net.v.host":"Интернет есть, но до этого сервиса телефон не достаёт. Попробуй включить или выключить VPN.","ui.net.v.nokey":"Сервис доступен, но ключ не указан или ещё не прочитан.","ui.net.v.auth":"Без ключа сервис отвечает, а запрос с ключом обрывается. Пришли этот экран разработчику.","ui.net.v.post":"Список доступен, а запрос к модели обрывается. Пришли этот экран разработчику.","ui.net.v.badkey":"Связь есть, но сервис не принял ключ. Проверь его.","ui.net.v.ok":"Связь в порядке. Код 400 здесь нормален: проверка отправляет пустой запрос. Осталось выбрать модель.","releaseNotes.1_2_1":"Кнопка «Проверить связь» показывает, на каком шаге обрывается запрос к модели. Список моделей теперь можно получить и через сам Tavo.","ui.net.xhr":"Сайт, запасной запрос","ui.net.native":"Сайт, через сам Tavo","ui.net.v.window":"Сам Tavo выходит в интернет, а окну гардероба запросы закрыты. Открой этот плагин в настройках Tavo, проверь разрешение на сеть и пришли этот экран.","ui.net.v.blocked":"Приложение само не пускает этот плагин в сеть. Его ответ: «{why}». Так устроен Glaze: интернет у плагина сначала выключен, а после включения открыты только адреса из списка, и он пуст. Открой Плагины → PUSYA WARDROBE → Разрешения → Интернет → Доступ и выбери «Любые адреса». Либо оставь «Только разрешённые» и разреши в разделе «Сеть» адрес своего сервиса и mooxsy72-oss.github.io.","releaseNotes.1_2_2":"Запасной способ отправки запросов и подробная проверка связи.","releaseNotes.1_2_3":"В подписях теперь полное название PUSYA SOCIAL.","ui.set.winZoom":"Размер текста в окне","ui.set.winHint":"Окно двигается за шапку, размер меняется за уголок внизу справа. Двойной щелчок по шапке возвращает всё как было.","ui.set.winHintPhone":"Окно можно двигать за шапку.","ui.btn.winReset":"Вернуть окно на место","releaseNotes.1_2_4":"Гардероб лучше замечает одежду персонажа. В Таверне окно можно двигать, а на компьютере ещё растягивать и менять размер текста.","releaseNotes.1_2_5":"Модель больше не пересказывает одежду в каждом ответе: заметка теперь справка, а не просьба описывать, метки стали короче.","releaseNotes.1_2_6":"Каталог больше не оставляет пустые места на месте нарядов без картинки. Проверка связи показывает, если сеть плагину запретило само приложение.","ui.hm.toast":"🏠 Модель описала дом: {name}. Открой гардероб, чтобы добавить","ui.hm.roomToast":"🚪 Модель описала комнату: {name} ({home}). Открой гардероб, чтобы добавить","ui.hm.t":"Новый дом","ui.hm.roomT":"Новая комната","ui.hm.q":"Модель описала это в ответе #{n}. Проверь текст и реши, добавлять ли.","ui.hm.inHome":"Дом: {home}","ui.hm.whose":"Чей это дом","ui.hm.other":"Другой дом","ui.hm.no":"Не добавлять","ui.hm.yes":"Добавить","ui.set.homeMarks":"Модель предлагает дома и комнаты","ui.set.homeMarksHint":"Если сцена идёт в месте, которого нет в списке, модель опишет его скрытой меткой, а плагин спросит, добавлять ли. Около 150 токенов на запрос","releaseNotes.1_2_7":"Дома теперь может заносить сама модель: она описывает дом или комнату, а плагин спрашивает, добавлять ли. Место сцены отмечается и при одном доме.","releaseNotes.1_2_8":"Клавиатура больше не закрывается сама, когда печатаешь в настройках или пока модель пишет ответ.","ui.net.alt_gemini":"Модель, запасной путь Gemini","ui.net.alt_resp":"Модель, запасной путь Responses","ui.net.v.alt":"Обычный адрес для запросов к модели этот сервис закрыл для плагинов, но запасной путь открыт. Описание по фото пойдёт через него. Код 400 здесь нормален: проверка отправляет пустой запрос.","releaseNotes.1_2_9":"Описание по фото работает и с сервисами, которые закрывают плагинам обычный адрес модели (например, ddtnew.com): плагин сам переходит на запасной путь Gemini или Responses.","ui.home.noRooms":"Комнат пока нет. Каждую комнату этого дома можно добавить по фото или текстом.","releaseNotes.1_2_10":"«Другие места» стали «Другими домами»: это такие же дома, как у героев, со своим видом снаружи и комнатами внутри. Новый дом сразу открывается с кнопками для комнат.","releaseNotes.1_2_11":"Плавающая кнопка теперь просто зеркальце, без круга и обводки.","ui.gift.where":"Куда поставить","ui.gift.away":"Сейчас вы не дома. Выбери, в какой дом поставить подарок.","releaseNotes.1_2_12":"Подарок для дома больше не пишет «Где сейчас», когда вы не дома: теперь там «Куда поставить», и по умолчанию выбран дом того, кому дарят.","releaseNotes.1_2_13":"У плагина появилась обложка."},"en":{"plugin.name":"PUSYA WARDROBE 🪞","plugin.description":"A wardrobe and a home your character won't forget. Upload photos of clothes, hairstyles, makeup, jewelry and rooms: a separate model describes them in text, and the plugin keeps reminding the chat model who is wearing what and where they are.\n\n**👗 Closet**\n- Clothes, hairstyles, makeup, jewelry and accessories are kept apart.\n- Each hero has their own shelf in every chat, plus a shared shelf.\n- Combine items into looks you can put on with one tap.\n\n**🧵 Catalog**\n- The ready-made Mooxsy outfit collection with filters by style and gender.\n\n**🏠 Homes**\n- A home for each hero, a shared home and any other places, with rooms inside.\n- A switch for living apart or together.\n\n**🏷 Hidden marks**\n- The model notes by itself when somebody changes clothes or the scene moves. History with message numbers.\n\nDescribing photos needs your own vision-capable model. Your data and key stay on your device, and photos go only to the model you chose.","releaseNotes.1_1_2":"The model key is no longer lost at startup, the model list loads as in Social and Diary, errors explain the cause.","actions.open":"Wardrobe 🪞","settings.info.open":"Open the window with the 🪞 button above the chat, from the input menu or from the sidebar.","settings.info.vision":"To describe photos, open ⚙️ in the 🪞 window and enter an address, key and vision-capable model. The catalog and hand-written descriptions work without it.","settings.privacy":"Your wardrobe, settings and key are stored only in Tavo on this device. Nothing is sent to the author. Details are under ⚙️ in the 🪞 window.","ui.title":"Wardrobe","ui.head.catalog":"🧵 Catalog","ui.head.looks":"✨ Looks","ui.head.history":"🕘 Worn earlier","ui.head.homes":"🏠 Homes","ui.head.set":"⚙️ Settings","ui.head.guide":"❓ How to use","ui.loading":"Loading…","ui.n.items":"{n} pcs","ui.side.user":"User","ui.side.char":"Character","ui.side.send":"Remind the model about this hero","ui.owner.common":"Shared","ui.kind.outfit":"Clothes","ui.kind.hair":"Hairstyle","ui.kind.makeup":"Makeup","ui.kind.jewelry":"Jewelry","ui.kind.accessory":"Accessories","ui.kind.look":"Look","ui.kind.home":"Home","ui.sec.outfit":"Clothes","ui.sec.hair":"Hairstyles","ui.sec.makeup":"Makeup","ui.sec.jewelry":"Jewelry","ui.sec.accessory":"Accessories","ui.sec.looks":"Looks","ui.sec.catalog":"Catalog","ui.sec.catalogHint":"ready outfits","ui.sec.history":"Worn earlier","ui.sec.home":"Home","ui.sec.shelf":"Closet","ui.slot.none":"Not selected","ui.slot.mark":"🏷 message #{n}","ui.st.mark":"🏷 The model noticed: {name} · message #{n}","ui.st.none":"Changes of clothes appear here when the model notices them","ui.tour.step":"Step {n} of {m}","ui.tour.skip":"Skip","ui.tour.next":"Next","ui.tour.done":"Done","ui.tour.status.t":"What the model noticed","ui.tour.status.d":"Shows the latest change of clothes the model marked by itself.","ui.tour.folds.t":"What the heroes wear","ui.tour.folds.d":"Expand a hero to see their clothes, hairstyle, makeup, jewelry and accessories. The cross takes an item off.","ui.tour.home.t":"Where you are","ui.tour.home.d":"Pick a home and a room. Usually the model marks the place itself, and if it can't tell, the plugin asks you.","ui.tour.shelf.t":"Closet","ui.tour.shelf.d":"Upload items by section. In each section the model describes only that type of item. Looks are built from ready items.","ui.tour.catalog.t":"Catalog and history","ui.tour.catalog.d":"The catalog has ready outfits that are worn whole. Worn earlier lists every change with message numbers.","ui.tour.gear.t":"Settings","ui.tour.gear.d":"The photo model, language, reminder frequency and JSON transfer live here.","ui.room.where":"Where now","ui.room.title":"Room","ui.room.none":"No room","ui.room.all":"All rooms","ui.place.out":"Not at home","ui.ask.place.toast":"🏠 Mark in the plugin which home the characters are in","ui.ask.place.t":"Where are the characters now?","ui.ask.place.d":"The model could not tell from the scene. Pick a place and the plugin will remember it for the next replies.","ui.btn.setHomes":"Set up homes","ui.btn.photo":"＋ From photo","ui.btn.text":"＋ As text","ui.btn.newLook":"＋ Build a look","ui.btn.wearOn":"On: {name}","ui.btn.edit":"Edit","ui.btn.more":"Show more","ui.btn.retry":"Retry","ui.btn.roomPhoto":"＋ Room from photo","ui.btn.newPlace":"＋ Add a home","ui.btn.models":"Load model list","ui.btn.exportJson":"📤 Export JSON","ui.btn.importJson":"📥 Import JSON","ui.btn.textCopy":"Export as text if the file won't save","ui.btn.attach":"Connect another chat's closet","ui.btn.auto":"Bring back missing items","ui.btn.wipe":"Erase extension data","ui.btn.wipeYes":"Yes, erase everything","ui.btn.toLook":"✨ To a look","ui.btn.save":"Save","ui.btn.describe":"🔍 Describe from photo","ui.btn.addPhoto":"📷 Add a photo","ui.btn.delete":"Delete","ui.btn.toChat":"To this chat's closet","ui.btn.toCommon":"To shared","ui.btn.newPhoto":"📷 Another photo","ui.btn.homePhoto":"📷 Photo of the outside or floor plan","ui.btn.done":"Done","ui.btn.cancel":"Cancel","ui.btn.remember":"Remember","ui.btn.later":"Ask later","ui.btn.importText":"Load this text","ui.btn.merge":"Add to mine","ui.btn.replace":"Replace","ui.empty.home":"Set up the heroes' homes, then you can pick where the scene happens here.","ui.empty.shelf":"Nothing here yet. Upload a photo or add a description as text.","ui.empty.looks":"No looks yet. Build a set from your closet items.","ui.cat.all":"All","ui.cat.female":"♀ Women","ui.cat.male":"♂ Men","ui.cat.none":"Nothing in this selection.","ui.cat.nostyle":"No style","ui.cat.common":"Shared","ui.cat.chat":"This chat","ui.cat.hintCommon":"Available in every chat. An outfit is worn whole.","ui.cat.hintChat":"This chat only. Another chat with the same character has its own selection.","ui.cat.for":"For: {name}","ui.cat.stale":"Showing the saved version of the catalog.","ui.cat.credit":"Outfit collection by Mooxsy","ui.cat.item":"Catalog outfit","cat.modern":"Casual","cat.spring":"Spring","cat.summer":"Summer","cat.osen":"Autumn","cat.postapoc":"Winter","cat.ofis":"Office","cat.elegant":"Evening","cat.sport":"Sport","cat.pyjamas":"Pyjamas","cat.dacha":"Country","cat.slavic":"Slavic","cat.folk":"Historical","cat.fantasy":"Assorted","cat.scifi":"Sci-fi","cat.other":"Outfit","ui.look.missing":"Item was removed from the closet","ui.look.pick":"Tap to choose","ui.log.empty":"Changes with message numbers will appear here: those made in this window and those the model noticed.","ui.log.after":"after #{n}","ui.log.start":"start","ui.log.now":"now","ui.home.common":"Shared home","ui.home.of":"Home: {name}","ui.home.apart":"Live apart","ui.home.together":"Live together","ui.home.togetherHint":"The shared home is now the main one. It goes into the request with the current room.","ui.home.apartHint":"Each has their own main home. The model marks where the scene is, and if it can't tell, the plugin asks you.","ui.home.main":"main","ui.home.rooms":"rooms: {n}","ui.home.others":"Other homes","ui.guide.tourT":"Window tour","ui.guide.tourD":"The plugin shows step by step what is where. It starts by itself the first time.","ui.guide.tourBtn":"Show the tour · steps: {n}","ui.guide.how.t":"How it works","ui.guide.how.d":"You choose what is worn and where the heroes are. Before each reply the plugin quietly reminds the model. This note is not visible in the chat.","ui.guide.start.t":"Where to start","ui.guide.start.d":"1. In ⚙️ enter a model that can see images.\n2. Upload items or take an outfit from the catalog.\n3. Tap the button with a hero's name to put an item on.\n4. Send a message.","ui.guide.add.t":"How to add your own item","ui.guide.add.d":"Open the section you need and upload a photo. The model describes only that type of item, so one photo can go into several sections. You can write the name and description yourself.","ui.guide.look.t":"How to build a look","ui.guide.look.d":"Looks → Build a look. Choose clothes, hairstyle, makeup, jewelry and accessories. Then it all goes on with one tap.","ui.guide.store.t":"What is stored where","ui.guide.store.d":"Shelves named after the heroes exist only in this chat. Shared and the catalog are available in any chat.","ui.guide.home.t":"Homes and moving in","ui.guide.home.d":"There is a home for each hero, a shared home and any other places. When the heroes move in together, switch to Live together and the shared home becomes the main one. The model marks where the scene is. If it can't tell, a message appears and the 🪞 button pulses: tap it and pick the place.","ui.guide.marks.t":"If a hero changes in the scene","ui.guide.marks.d":"The model leaves a hidden mark and the plugin updates the outfit by itself. The change appears in Worn earlier with the message number. You can save that outfit to the closet.","ui.guide.move.t":"Moving to another device","ui.guide.move.d":"⚙️ → Data → Export JSON, then choose: with photos (full transfer, big file) or without photos (light file, your photos are not transferred). On the new device tap Import JSON. If chat numbers changed, open the chat and tap Connect another chat's closet. The model key never goes into the file.","ui.set.send":"Reminding the model","ui.set.off":"Off","ui.set.on":"Remind the model","ui.set.onHint":"The note goes into the request only, it is not visible in the chat","ui.set.track":"Notice changes","ui.set.trackHint":"The model leaves a hidden mark when somebody changes clothes or the scene moves. About 450 tokens per request","ui.set.mode":"How often","ui.set.every":"Every how many replies","ui.set.note":"Your own opening line","ui.set.notePh":"Empty: the standard phrase (details for reference, no extra descriptions)","ui.set.vision":"Photo model","ui.set.ready":"Ready","ui.set.notSet":"Not set","ui.set.visionHint":"Any OpenAI-compatible address and a model that can see images will do.","ui.set.base":"Address","ui.set.key":"Key","ui.set.model":"Model","ui.set.pickModel":"Pick from the list…","ui.set.lang":"Language and view","ui.set.dock":"🪞 button above the chat","ui.set.data":"Data and transfer","ui.lang.auto":"Auto","ui.mode.always":"Every reply","ui.mode.every":"Every few","ui.mode.change":"After a change","ui.mode.changeHint":"The note does not stay in the history, so the model may forget the details again after a couple of replies.","ui.preview":"What the model gets (≈{n} tokens)","ui.data.hint":"The JSON holds all items, looks, homes, history and chat closets. The model key is not included.","ui.privacy.where":"Where your data is. Your wardrobe, photos, settings and key are stored only on this device. Nothing is sent to the author.","ui.privacy.net":"Where the extension connects. To the model you entered: it receives a photo when you ask to describe it, and your key. To the catalog sites on github.io: the list, pictures and descriptions of outfits are loaded from there.","ui.privacy.move":"How to move or delete. Export JSON creates a file without the key. Erase data removes everything; the state of other chats stays until you press the button there. Removing the extension itself does not erase the data.","ui.new.item":"New item","ui.new.look":"New look","ui.new.home":"New home","ui.new.room":"New room","ui.edit.item":"Item","ui.edit.look":"Look","ui.edit.home":"Home","ui.edit.room":"Room","ui.vision.busy":"The model is looking at the photo…","ui.f.what":"What to describe","ui.f.name":"Name · your own is fine","ui.f.desc":"Description · can be edited","ui.f.owner":"Whose","ui.f.none":"Not set","ui.f.gender":"Gender","ui.f.style":"Style","ui.f.homePh":"For example, grandma's house","ui.f.homeDesc":"General description","ui.f.roomPh":"For example, kitchen","ui.ask.title":"Confirm","ui.ask.delete":"Delete \"{name}\"?","ui.ask.restore":"Entries in the file: {file}. You have now: {have}. What should happen?","ui.ask.auto":"Pick a day. Only entries that are missing now will come back.","ui.ask.wipe":"Delete the whole wardrobe, photos, settings and key? This cannot be undone. The state of other chats goes away only with those chats or after pressing this button in them.","ui.exp.full":"🖼 With photos","ui.exp.fullD":"Full transfer of everything. Your photos are reduced to 512 px. The file is big: it takes longer to save and may not open on a weak phone.","ui.exp.lite":"📝 Without photos","ui.exp.liteD":"A light file: descriptions, looks, homes, history and settings. Your photos are not transferred, placeholders appear in the closet, and they can't be restored from this file. Model reminders work from text and are not affected.","ui.exp.note":"Either way catalog outfits stay as links and the model key is not included.","ui.size.kb":"{n} KB","ui.size.mb":"{n} MB","ui.text.hint":"Copy this text and paste it here on the other device. Photos are not included.","ui.attach.hint":"After a transfer chat numbers may change. Pick the old chat and its items and homes move to this one.","ui.attach.none":"No other chats with items.","ui.toast.models":"Models: {n}","ui.toast.worn":"{who}: {name}","ui.toast.saved":"Saved","ui.toast.restored":"Restored","ui.toast.noAuto":"No automatic copies yet","ui.toast.wiped":"Data erased","ui.err.notReady":"The wardrobe has not been read yet. Wait a moment and try again.","ui.err.save":"Could not save. Nothing was lost, try again.","ui.err.chat":"The chat is not ready yet, try again.","ui.err.noVision":"No model is set up. Add one in ⚙️ or write the description yourself.","ui.err.empty":"The model returned nothing. It may not support images or it refused to answer.","ui.err.badImage":"Could not open this picture.","ui.err.timeout":"The model did not answer in time.","ui.err.key":"The key was rejected.","ui.err.address":"No model found at this address. Check the address and the model name.","ui.err.limit":"Rate limit reached, try later.","ui.err.http":"Server error: {code}","ui.err.network":"The service did not answer or refused without a reason. Check the address, key and model name.","ui.err.noKey":"The key is missing or has not been read yet. Check it in ⚙️ and try again.","ui.err.noModels":"The service returned no models. You can type the name by hand.","ui.err.noBase":"Enter the address first.","ui.err.catalog":"Could not load the catalog. Check your connection.","ui.err.catText":"The description did not load. You can type it in by hand.","ui.err.needDesc":"A description is required: otherwise the model has nothing to remember.","ui.err.needRoom":"A room needs a name and a description.","ui.err.needPart":"Add at least one item to the look.","ui.err.badCopy":"This is not a wardrobe copy.","releaseNotes.1_1_3":"The window opens again on phones and in a narrow SillyTavern window: it used to land above the screen.","ui.head.find":"🔍 Search","ui.btn.house":"Furnish","ui.sec.split":"Split a photo","ui.sec.splitHint":"all from one shot","ui.sec.find":"Search","ui.sec.findHint":"favorites and tags","ui.find.ph":"Find: dress, silk, party…","ui.find.fav":"Favorites","ui.gift.toast":"A gift for the home from {from}: {name}","ui.gift.t":"Gift for the home","ui.place.toast":"The scene moved. Open the wardrobe to change clothes.","ui.place.q":"{who}: put on “{look}”?","ui.place.ask2":"Ask first","ui.place.auto":"Change automatically","ui.where.ask":"{name} is at “{place}”. Bring it here?","ui.where.take":"Take it along and wear","ui.where.move":"Move and wear","ui.where.anyway":"Wear without moving","ui.where.bag":"Carrying","ui.where.here":"here","ui.where.t":"Kept at","ui.where.none":"Not set","ui.thing.furniture":"Furniture","ui.thing.decor":"Decor","ui.thing.flower":"Flowers","ui.thing.gift":"Gift","ui.thing.from":"Gift from {name}","ui.thing.msg":"message {n}","ui.thing.stored":"stored","ui.house.wear":"Worn here","ui.house.inRoom":"In the room","ui.house.inHome":"In the whole home","ui.house.empty":"Nothing here yet. Add furniture, decor or flowers.","ui.house.stored":"Storage","ui.house.pick":"Look for {name}","ui.btn.change":"change","ui.btn.choose":"choose","ui.btn.putAway":"Put away","ui.btn.takeOut":"Take out of storage","ui.btn.fresh":"Fresh flowers","ui.btn.refuse":"Decline","ui.btn.putThere":"Place it","ui.btn.keep":"Keep as is","ui.btn.changeClothes":"Change clothes","ui.btn.saveN":"Save {n}","ui.room.wholeHome":"Whole home","ui.new.thing":"New for the home","ui.edit.thing":"Item in the home","ui.f.from":"From","ui.f.tags":"Tags","ui.f.tagPh":"New tag","ui.tags.def":"summer,party,home,work","ui.taste.t":"What {name} thinks","ui.taste.love":"Loves it","ui.taste.none":"No opinion","ui.taste.hate":"Dislikes it","ui.split.t":"Split a photo","ui.split.none":"The model found nothing in this photo. Try another one.","ui.split.look":"Also save as a look","ui.split.saved":"Items saved: {n}","ui.set.house":"Home and items","ui.set.homeItems":"Items are kept in a specific home","ui.set.homeItemsHint":"Items from another home look faded. You can always wear them, the plugin only offers to move them.","ui.set.placeAutoHint":"Otherwise the plugin asks when the place changes","ui.set.flowers":"Flowers start drying after this many messages","ui.set.social":"PUSYA SOCIAL link","ui.social.ok":"works","ui.social.wait":"not confirmed","ui.social.okHint":"PUSYA SOCIAL has already used the clothes and home from this wardrobe in this chat.","ui.social.waitHint":"Draw a picture in PUSYA SOCIAL in this chat and reopen settings. If the status stays the same, Tavo keeps plugin data apart and PUSYA SOCIAL only sees changes from the hidden marks.","ui.social.clothes":"Clothes in pictures","ui.social.clothesHint":"PUSYA SOCIAL draws characters in what they wear now","ui.social.home":"Home in pictures","ui.social.homeHint":"Room, furniture, decor, flowers","ui.err.needName":"A name is required.","ui.flower.fresh":"fresh","ui.flower.drying":"drying","ui.flower.wilted":"wilted","ui.guide.split.t":"📸 One photo for everything","ui.guide.split.d":"Tap “Split a photo” on the main screen. The model finds clothes, hair, makeup, jewelry and accessories. Untick what you do not need, tap a line to edit it. You can save it all as a look right away.","ui.guide.find.t":"🔍 Search, tags, favorites","ui.guide.find.d":"The shelves, looks and catalog have a search line and a ★ filter. The star on a card moves an item to the top. Tags are set on the card and become filters. The Search tile looks through every section.","ui.guide.taste.t":"♥ Character tastes","ui.guide.taste.d":"Mark on the item card whether the character loves or dislikes it. The model is told only while the item is worn.","ui.guide.placelook.t":"🚪 Looks for places","ui.guide.placelook.d":"In Furnish, attach looks to a home or a room. A room comes before its home. When the scene moves there, the plugin asks whether to change clothes, or does it itself if you chose that.","ui.guide.house.t":"🛋️ Furnishing the home","ui.guide.house.d":"Each room has its own furniture, decor, flowers and gifts. Replaced furniture goes to storage. Flowers dry over time and can be renewed. When someone gives the home a present in the story, you are offered to place it. The model only gets items of the current room.","ui.guide.kept.t":"🧳 Items in homes","ui.guide.kept.d":"Turn this on in ⚙️. An item gets a place: a home or “Carrying”. Items from another home look faded. You can always wear them, the plugin only offers to move them.","ui.guide.social.t":"📱 PUSYA SOCIAL","ui.guide.social.d":"PUSYA SOCIAL draws characters in what they wear now and can show the room with its furniture and flowers. Choose what to share in ⚙️, where you can also see whether the link works.","releaseNotes.1_2_0":"New mirror icon. One photo split into items, search, tags and favorites, character tastes, looks for places. Furniture, decor, flowers and gifts for the home, items kept in homes. Link with PUSYA Social for pictures.","ui.btn.netCheck":"Check connection","ui.net.control":"A website, normal request","ui.net.list":"The service, no key","ui.net.auth":"The service, with key","ui.net.post":"Model request","ui.net.v.phone":"Neither the window nor Tavo itself reached the internet. Check your VPN and connection.","ui.net.v.host":"The internet works, but this phone cannot reach the service. Try turning a VPN on or off.","ui.net.v.nokey":"The service is reachable, but the key is missing or not read yet.","ui.net.v.auth":"The service answers without a key, but a request with the key is cut off. Send this screen to the developer.","ui.net.v.post":"The list works, but the model request is cut off. Send this screen to the developer.","ui.net.v.badkey":"The connection works, but the service rejected the key. Check it.","ui.net.v.ok":"The connection is fine. Code 400 is normal here because the check sends an empty request. Now pick a model.","releaseNotes.1_2_1":"The Check connection button shows at which step a model request fails. The model list can now also be loaded through Tavo itself.","ui.net.xhr":"A website, backup request","ui.net.native":"A website, through Tavo itself","ui.net.v.window":"Tavo itself can reach the internet, but requests from the wardrobe window are blocked. Open this plugin in Tavo settings, check its network permission, and send this screen.","ui.net.v.blocked":"The app itself keeps this plugin off the network. Its answer: \"{why}\". This is how Glaze works: a plugin's internet starts switched off, and once it is on only listed addresses are open, and the list is empty. Open Plugins → PUSYA WARDROBE → Permissions → Internet → Access and choose \"Any host\". Or keep \"Listed hosts\" and allow your service's address and mooxsy72-oss.github.io under \"Network\".","releaseNotes.1_2_2":"A backup way to send requests and a more detailed connection check.","releaseNotes.1_2_3":"Labels now use the full name PUSYA SOCIAL.","ui.set.winZoom":"Text size in the window","ui.set.winHint":"Drag the header to move the window and the bottom right corner to resize it. Double-click the header to reset.","ui.set.winHintPhone":"Drag the header to move the window.","ui.btn.winReset":"Put the window back","releaseNotes.1_2_4":"The wardrobe notices the character's clothes better. In SillyTavern the window can be moved, and on a computer also resized with a text size setting.","releaseNotes.1_2_5":"The model no longer retells the clothes in every reply: the note is now a reference, not a request to describe, and the marks are shorter.","releaseNotes.1_2_6":"The catalog no longer leaves gaps where an outfit has no picture. The connection check now tells when the app itself blocks the plugin's network.","ui.hm.toast":"🏠 The model described a home: {name}. Open the wardrobe to add it","ui.hm.roomToast":"🚪 The model described a room: {name} ({home}). Open the wardrobe to add it","ui.hm.t":"New home","ui.hm.roomT":"New room","ui.hm.q":"The model described this in reply #{n}. Check the text and decide whether to add it.","ui.hm.inHome":"Home: {home}","ui.hm.whose":"Whose home it is","ui.hm.other":"Another home","ui.hm.no":"Do not add","ui.hm.yes":"Add","ui.set.homeMarks":"The model suggests homes and rooms","ui.set.homeMarksHint":"When the scene is at a place that is not on the list, the model describes it in a hidden mark and the plugin asks whether to add it. About 150 tokens per request","releaseNotes.1_2_7":"The model can now fill in homes: it describes a home or a room and the plugin asks whether to add it. The scene location is marked even with a single home.","releaseNotes.1_2_8":"The keyboard no longer closes by itself while you type in the settings or while the model is replying.","ui.net.alt_gemini":"Model, Gemini backup route","ui.net.alt_resp":"Model, Responses backup route","ui.net.v.alt":"This service blocks plugins from its usual model address, but a backup route is open. Photo descriptions will go through it. Code 400 is normal here because the check sends an empty request.","releaseNotes.1_2_9":"Photo descriptions now work with services that block plugins from the usual model address (such as ddtnew.com): the plugin switches to a Gemini or Responses backup route by itself.","ui.home.noRooms":"No rooms yet. Add each room of this home from a photo or as text.","releaseNotes.1_2_10":"\"Other places\" are now \"Other homes\": they work like the characters' homes, with an outside look and rooms inside. A new home opens right away with the room buttons.","releaseNotes.1_2_11":"The floating button is now just a mirror, with no circle or outline.","ui.gift.where":"Where to put it","ui.gift.away":"You are not at home right now. Choose which home the gift goes to.","releaseNotes.1_2_12":"A home gift no longer says \"Where now\" while you are away: it now says \"Where to put it\" and picks the home of the person receiving it.","releaseNotes.1_2_13":"The plugin now has a cover."},"zh-CN":{"plugin.name":"PUSYA WARDROBE 🪞","plugin.description":"让角色记住的衣橱和住所。上传服装、发型、妆容、首饰和房间的照片：由单独的模型转成文字描述，插件会持续提醒聊天模型谁穿着什么、身在何处。\n\n**👗 衣橱**\n- 服装、发型、妆容、首饰和配饰分开管理。\n- 每个聊天中双方各有自己的衣柜，另有公共衣柜。\n- 把单品组合成造型，一键穿上。\n\n**🧵 目录**\n- Mooxsy 的现成服装合集，可按风格和性别筛选。\n\n**🏠 住所**\n- 各自的家、共同的家和其他任意地点，内部可分房间。\n- 可切换“分开住 / 住在一起”。\n\n**🏷 隐藏标记**\n- 有人换装或场景转移时，模型会自行标记。历史记录带消息编号。\n\n描述照片需要你自己的支持图像的模型。数据和密钥保存在你的设备上，照片只发送给你选择的模型。","releaseNotes.1_1_2":"启动时不再丢失模型密钥，模型列表的加载方式与 Social 和 Diary 相同，错误会说明原因。","actions.open":"衣橱 🪞","settings.info.open":"可通过聊天上方的 🪞 按钮、输入框菜单或侧边栏打开窗口。","settings.info.vision":"要描述照片，请在 🪞 窗口的 ⚙️ 中填写地址、密钥和支持图像的模型。目录和手写描述不需要这些。","settings.privacy":"衣橱、设置和密钥只保存在本设备的 Tavo 中，不会发送给作者。详情见 🪞 窗口的 ⚙️。","ui.title":"衣橱","ui.head.catalog":"🧵 目录","ui.head.looks":"✨ 造型","ui.head.history":"🕘 穿过的","ui.head.homes":"🏠 住所","ui.head.set":"⚙️ 设置","ui.head.guide":"❓ 使用说明","ui.loading":"加载中…","ui.n.items":"{n} 件","ui.side.user":"用户","ui.side.char":"角色","ui.side.send":"向模型提醒此人","ui.owner.common":"公共","ui.kind.outfit":"服装","ui.kind.hair":"发型","ui.kind.makeup":"妆容","ui.kind.jewelry":"首饰","ui.kind.accessory":"配饰","ui.kind.look":"造型","ui.kind.home":"住所","ui.sec.outfit":"服装","ui.sec.hair":"发型","ui.sec.makeup":"妆容","ui.sec.jewelry":"首饰","ui.sec.accessory":"配饰","ui.sec.looks":"造型","ui.sec.catalog":"目录","ui.sec.catalogHint":"现成服装","ui.sec.history":"穿过的","ui.sec.home":"住所","ui.sec.shelf":"衣柜","ui.slot.none":"未选择","ui.slot.mark":"🏷 消息 #{n}","ui.st.mark":"🏷 模型发现：{name} · 消息 #{n}","ui.st.none":"模型发现换装时会显示在这里","ui.tour.step":"第 {n} 步，共 {m} 步","ui.tour.skip":"跳过","ui.tour.next":"下一步","ui.tour.done":"完成","ui.tour.status.t":"模型发现了什么","ui.tour.status.d":"这里显示模型自行标记的最近一次换装。","ui.tour.folds.t":"双方穿着","ui.tour.folds.d":"展开某人可查看服装、发型、妆容、首饰和配饰。点叉号可脱下。","ui.tour.home.t":"你们在哪里","ui.tour.home.d":"选择住所和房间。通常模型会自行标记场景位置，判断不出时插件会询问你。","ui.tour.shelf.t":"衣柜","ui.tour.shelf.d":"按分类上传单品。每个分类中模型只描述该类单品。造型由现有单品组成。","ui.tour.catalog.t":"目录和历史","ui.tour.catalog.d":"目录中是现成服装，整套穿上。“穿过的”中列出每次更换及消息编号。","ui.tour.gear.t":"设置","ui.tour.gear.d":"这里有描述照片的模型、语言、提醒频率和 JSON 迁移。","ui.room.where":"当前位置","ui.room.title":"房间","ui.room.none":"不指定房间","ui.room.all":"所有房间","ui.place.out":"不在家","ui.ask.place.toast":"🏠 请在插件中标记角色们在哪个住所","ui.ask.place.t":"角色们现在在哪里？","ui.ask.place.d":"模型无法从场景中判断。选择地点后，插件会在后续回复中记住。","ui.btn.setHomes":"设置住所","ui.btn.photo":"＋ 从照片","ui.btn.text":"＋ 文字","ui.btn.newLook":"＋ 组合造型","ui.btn.wearOn":"穿给：{name}","ui.btn.edit":"编辑","ui.btn.more":"显示更多","ui.btn.retry":"重试","ui.btn.roomPhoto":"＋ 从照片添加房间","ui.btn.newPlace":"＋ 添加住所","ui.btn.models":"加载模型列表","ui.btn.exportJson":"📤 导出 JSON","ui.btn.importJson":"📥 导入 JSON","ui.btn.textCopy":"文件无法保存时导出为文本","ui.btn.attach":"连接其他聊天的衣柜","ui.btn.auto":"找回丢失的内容","ui.btn.wipe":"清除扩展数据","ui.btn.wipeYes":"是的，全部清除","ui.btn.toLook":"✨ 加入造型","ui.btn.save":"保存","ui.btn.describe":"🔍 根据照片描述","ui.btn.addPhoto":"📷 添加照片","ui.btn.delete":"删除","ui.btn.toChat":"放入此聊天的衣柜","ui.btn.toCommon":"放入公共","ui.btn.newPhoto":"📷 换一张照片","ui.btn.homePhoto":"📷 住所外观或平面图照片","ui.btn.done":"完成","ui.btn.cancel":"取消","ui.btn.remember":"记住","ui.btn.later":"稍后询问","ui.btn.importText":"导入此文本","ui.btn.merge":"添加到我的","ui.btn.replace":"替换","ui.empty.home":"设置好双方的住所后，即可在这里选择场景位置。","ui.empty.shelf":"这里还没有内容。上传照片或用文字添加描述。","ui.empty.looks":"还没有造型。用衣柜中的单品组合一套吧。","ui.cat.all":"全部","ui.cat.female":"♀ 女装","ui.cat.male":"♂ 男装","ui.cat.none":"此分类中没有内容。","ui.cat.nostyle":"无风格","ui.cat.common":"公共","ui.cat.chat":"此聊天","ui.cat.hintCommon":"所有聊天可用。服装整套穿上。","ui.cat.hintChat":"仅此聊天。与同一角色的其他聊天有各自的选择。","ui.cat.for":"给：{name}","ui.cat.stale":"显示的是已保存的目录版本。","ui.cat.credit":"服装合集 by Mooxsy","ui.cat.item":"目录服装","cat.modern":"日常","cat.spring":"春季","cat.summer":"夏季","cat.osen":"秋季","cat.postapoc":"冬季","cat.ofis":"办公","cat.elegant":"晚装","cat.sport":"运动","cat.pyjamas":"睡衣","cat.dacha":"乡村","cat.slavic":"斯拉夫","cat.folk":"历史","cat.fantasy":"其他","cat.scifi":"科幻","cat.other":"服装","ui.look.missing":"单品已从衣柜删除","ui.look.pick":"点击选择","ui.log.empty":"这里会显示带消息编号的更换记录，包括在此窗口的操作和模型发现的更换。","ui.log.after":"#{n} 之后","ui.log.start":"开头","ui.log.now":"当前","ui.home.common":"共同的家","ui.home.of":"住所：{name}","ui.home.apart":"分开住","ui.home.together":"住在一起","ui.home.togetherHint":"共同的家已成为主要住所，它和当前房间会进入请求。","ui.home.apartHint":"各有各的主要住所。模型会标记场景位置，判断不出时插件会询问你。","ui.home.main":"主要","ui.home.rooms":"房间：{n}","ui.home.others":"其他住所","ui.guide.tourT":"窗口导览","ui.guide.tourD":"插件会逐步展示各功能的位置。首次打开时自动开始。","ui.guide.tourBtn":"开始导览 · 步骤：{n}","ui.guide.how.t":"工作原理","ui.guide.how.d":"你选择穿着和双方所在的位置。每次回复前，插件都会悄悄提醒模型。聊天中看不到这条提示。","ui.guide.start.t":"从哪里开始","ui.guide.start.d":"1. 在 ⚙️ 中填写能识别图片的模型。\n2. 上传单品或从目录中选择服装。\n3. 点击带名字的按钮穿上单品。\n4. 发送消息。","ui.guide.add.t":"如何添加自己的单品","ui.guide.add.d":"打开所需分类并上传照片。模型只描述该类单品，因此同一张照片可上传到不同分类。名称和描述也可以自己写。","ui.guide.look.t":"如何组合造型","ui.guide.look.d":"造型 → 组合造型。选择服装、发型、妆容、首饰和配饰，之后一键全部穿上。","ui.guide.store.t":"内容保存在哪里","ui.guide.store.d":"以双方名字命名的衣柜只存在于此聊天。“公共”和目录在任何聊天中都可用。","ui.guide.home.t":"住所和搬家","ui.guide.home.d":"可以设置各自的家、共同的家和其他地点。两人搬到一起后，切换到“住在一起”，共同的家就成为主要住所。场景位置由模型自行标记。判断不出时会弹出提示，🪞 按钮也会闪烁：点击并选择地点。","ui.guide.marks.t":"如果有人在场景中换装","ui.guide.marks.d":"模型会留下隐藏标记，插件自动更新穿着。更换会带消息编号显示在“穿过的”中，也可以把该服装保存到衣柜。","ui.guide.move.t":"迁移到其他设备","ui.guide.move.d":"⚙️ → 数据 → 导出 JSON，然后选择：含照片（完整迁移，文件大）或不含照片（文件小，你的照片不会迁移）。在新设备上点击导入 JSON。如果聊天编号变了，打开该聊天并点击“连接其他聊天的衣柜”。模型密钥不会写入文件。","ui.set.send":"提醒模型","ui.set.off":"已关闭","ui.set.on":"提醒模型","ui.set.onHint":"提示只进入请求，聊天中不可见","ui.set.track":"发现换装","ui.set.trackHint":"有人换装或场景转移时，模型会留下隐藏标记。每次请求约 450 令牌","ui.set.mode":"频率","ui.set.every":"每隔几次回复","ui.set.note":"提示开头的自定义语句","ui.set.notePh":"留空：使用标准说明（细节仅供参考，不多加描写）","ui.set.vision":"照片模型","ui.set.ready":"已设置","ui.set.notSet":"未设置","ui.set.visionHint":"任何兼容 OpenAI 的地址和能识别图片的模型都可以。","ui.set.base":"地址","ui.set.key":"密钥","ui.set.model":"模型","ui.set.pickModel":"从列表选择…","ui.set.lang":"语言和外观","ui.set.dock":"聊天上方的 🪞 按钮","ui.set.data":"数据和迁移","ui.lang.auto":"自动","ui.mode.always":"每次回复","ui.mode.every":"每隔几次","ui.mode.change":"更换之后","ui.mode.changeHint":"提示不会留在历史中，因此几次回复后模型可能再次忘记细节。","ui.preview":"发送给模型的内容（≈{n} 令牌）","ui.data.hint":"JSON 包含所有单品、造型、住所、历史和各聊天的衣柜，不含模型密钥。","ui.privacy.where":"数据在哪里。衣橱、照片、设置和密钥只保存在本设备，不会发送给作者。","ui.privacy.net":"扩展连接到哪里。连接到你填写的模型：请求描述时发送照片和你的密钥。连接到 github.io 上的目录网站：加载服装列表、图片和描述。","ui.privacy.move":"如何迁移或删除。“导出 JSON”生成不含密钥的文件。“清除数据”删除全部内容；其他聊天的状态会保留，直到你在其中点击该按钮。卸载扩展不会清除数据。","ui.new.item":"新单品","ui.new.look":"新造型","ui.new.home":"新住所","ui.new.room":"新房间","ui.edit.item":"单品","ui.edit.look":"造型","ui.edit.home":"住所","ui.edit.room":"房间","ui.vision.busy":"模型正在查看照片…","ui.f.what":"描述什么","ui.f.name":"名称 · 可自定义","ui.f.desc":"描述 · 可修改","ui.f.owner":"属于","ui.f.none":"未指定","ui.f.gender":"性别","ui.f.style":"风格","ui.f.homePh":"例如：奶奶家","ui.f.homeDesc":"总体描述","ui.f.roomPh":"例如：厨房","ui.ask.title":"确认","ui.ask.delete":"删除“{name}”？","ui.ask.restore":"文件中的记录：{file}。你现有：{have}。要怎么做？","ui.ask.auto":"选择日期。只会恢复当前缺失的记录。","ui.ask.wipe":"删除整个衣橱、照片、设置和密钥？此操作无法撤销。其他聊天的状态只有在聊天被删除或在其中点击此按钮后才会消失。","ui.exp.full":"🖼 含照片","ui.exp.fullD":"完整迁移全部内容。你的照片会缩小到 512 像素。文件较大：保存较慢，在性能较弱的手机上可能打不开。","ui.exp.lite":"📝 不含照片","ui.exp.liteD":"轻量文件：描述、造型、住所、历史和设置。你的照片不会迁移，衣柜中显示占位图，且无法从此文件恢复照片。模型提醒基于文字，不受影响。","ui.exp.note":"两种方式下，目录服装都保留为链接，模型密钥不会写入文件。","ui.size.kb":"{n} KB","ui.size.mb":"{n} MB","ui.text.hint":"复制此文本，并在另一台设备的此处粘贴。不包含照片。","ui.attach.hint":"迁移后聊天编号可能改变。选择旧聊天，其单品和住所会转到此聊天。","ui.attach.none":"没有其他包含单品的聊天。","ui.toast.models":"模型：{n}","ui.toast.worn":"{who}：{name}","ui.toast.saved":"已保存","ui.toast.restored":"已恢复","ui.toast.noAuto":"还没有自动备份","ui.toast.wiped":"数据已清除","ui.err.notReady":"衣橱尚未读取。请稍候再试。","ui.err.save":"保存失败。数据没有丢失，请重试。","ui.err.chat":"聊天尚未就绪，请重试。","ui.err.noVision":"尚未设置模型。请在 ⚙️ 中填写，或自己写描述。","ui.err.empty":"模型返回了空内容。它可能不支持图片或拒绝了回答。","ui.err.badImage":"无法打开此图片。","ui.err.timeout":"模型未及时响应。","ui.err.key":"密钥无效。","ui.err.address":"此地址找不到模型。请检查地址和模型名称。","ui.err.limit":"已达到请求限制，请稍后再试。","ui.err.http":"服务器错误：{code}","ui.err.network":"服务未响应或未说明原因就拒绝了请求。请检查地址、密钥和模型名称。","ui.err.noKey":"密钥未填写或尚未读取。请在 ⚙️ 中检查后重试。","ui.err.noModels":"服务没有返回任何模型。可以手动填写名称。","ui.err.noBase":"请先填写地址。","ui.err.catalog":"无法加载目录。请检查网络。","ui.err.catText":"描述未加载。可以手动填写。","ui.err.needDesc":"需要描述：否则模型没有可记住的内容。","ui.err.needRoom":"房间需要名称和描述。","ui.err.needPart":"请至少添加一件单品到造型。","ui.err.badCopy":"这不是衣橱备份。","releaseNotes.1_1_3":"修复手机和窄窗口的 SillyTavern 中窗口跑到屏幕上方、看不见的问题。","ui.head.find":"🔍 搜索","ui.btn.house":"布置","ui.sec.split":"拆解照片","ui.sec.splitHint":"一张照片全搞定","ui.sec.find":"搜索","ui.sec.findHint":"收藏和标签","ui.find.ph":"查找：连衣裙、丝绸、派对…","ui.find.fav":"收藏","ui.gift.toast":"{from} 送给家里的礼物：{name}","ui.gift.t":"家居礼物","ui.place.toast":"场景换了地方。打开衣橱换装。","ui.place.q":"{who}：换上“{look}”？","ui.place.ask2":"先询问","ui.place.auto":"自动换装","ui.where.ask":"{name} 在“{place}”。要拿到这里吗？","ui.where.take":"随身带上并穿戴","ui.where.move":"拿来并穿戴","ui.where.anyway":"不移动直接穿戴","ui.where.bag":"随身","ui.where.here":"在这里","ui.where.t":"存放位置","ui.where.none":"未设置","ui.thing.furniture":"家具","ui.thing.decor":"装饰","ui.thing.flower":"鲜花","ui.thing.gift":"礼物","ui.thing.from":"来自 {name} 的礼物","ui.thing.msg":"第 {n} 条消息","ui.thing.stored":"已收起","ui.house.wear":"在这里穿","ui.house.inRoom":"房间里","ui.house.inHome":"整个家里","ui.house.empty":"这里还没有东西。添加家具、装饰或鲜花吧。","ui.house.stored":"储藏室","ui.house.pick":"{name} 的造型","ui.btn.change":"更改","ui.btn.choose":"选择","ui.btn.putAway":"收起","ui.btn.takeOut":"从储藏室取出","ui.btn.fresh":"换上鲜花","ui.btn.refuse":"拒绝","ui.btn.putThere":"摆放","ui.btn.keep":"保持不变","ui.btn.changeClothes":"换装","ui.btn.saveN":"保存 {n} 件","ui.room.wholeHome":"整个家","ui.new.thing":"添加到家里","ui.edit.thing":"家中物品","ui.f.from":"来自","ui.f.tags":"标签","ui.f.tagPh":"新标签","ui.tags.def":"夏天,派对,居家,工作","ui.taste.t":"{name} 的态度","ui.taste.love":"喜欢","ui.taste.none":"无所谓","ui.taste.hate":"不喜欢","ui.split.t":"拆解照片","ui.split.none":"模型在这张照片中没有找到物品。换一张试试。","ui.split.look":"同时保存为造型","ui.split.saved":"已保存 {n} 件","ui.set.house":"家与物品","ui.set.homeItems":"物品存放在特定的家中","ui.set.homeItemsHint":"其他家中的物品会变淡。随时可以穿戴，插件只会询问是否移动。","ui.set.placeAutoHint":"否则换地点时插件会询问","ui.set.flowers":"鲜花在这么多条消息后开始枯萎","ui.set.social":"PUSYA SOCIAL 联动","ui.social.ok":"正常","ui.social.wait":"未确认","ui.social.okHint":"PUSYA SOCIAL 已在此聊天中使用过衣橱的服装和家居。","ui.social.waitHint":"在此聊天中用 PUSYA SOCIAL 生成一张图片后重新打开设置。如果状态不变，说明 Tavo 隔离了插件数据，PUSYA SOCIAL 只能看到隐藏标记中的换装。","ui.social.clothes":"图片中的服装","ui.social.clothesHint":"PUSYA SOCIAL 按当前穿着绘制角色","ui.social.home":"图片中的家","ui.social.homeHint":"房间、家具、装饰、鲜花","ui.err.needName":"需要名称。","ui.flower.fresh":"新鲜","ui.flower.drying":"开始枯萎","ui.flower.wilted":"已枯萎","ui.guide.split.t":"📸 一张照片全搞定","ui.guide.split.d":"在主界面点击“拆解照片”。模型会找出服装、发型、妆容、首饰和配饰。取消不需要的项目，点击条目可编辑，还能直接保存为造型。","ui.guide.find.t":"🔍 搜索、标签、收藏","ui.guide.find.d":"衣柜、造型和目录都有搜索框和 ★ 筛选。卡片上的星标会把物品置顶。标签在卡片中设置并成为筛选项。“搜索”方块可跨所有分区查找。","ui.guide.taste.t":"♥ 角色喜好","ui.guide.taste.d":"在物品卡片上标记角色喜欢或不喜欢。只有穿戴时模型才会知道。","ui.guide.placelook.t":"🚪 地点造型","ui.guide.placelook.d":"在“布置”中把造型绑定到家或房间，房间优先。场景转到那里时，插件会询问是否换装，或按设置自动换装。","ui.guide.house.t":"🛋️ 布置家","ui.guide.house.d":"每个房间都有自己的家具、装饰、鲜花和礼物。被替换的家具进入储藏室。鲜花会随时间枯萎，可以更换。剧情中有人送礼物给家时，会询问是否摆放。模型只会收到当前房间的物品。","ui.guide.kept.t":"🧳 家中的物品","ui.guide.kept.d":"在 ⚙️ 中开启。物品会有存放位置：某个家或“随身”。其他家中的物品会变淡，但随时可以穿戴，插件只会询问是否移动。","ui.guide.social.t":"📱 PUSYA SOCIAL","ui.guide.social.d":"PUSYA SOCIAL 会按当前穿着绘制角色，并可展示房间、家具和鲜花。在 ⚙️ 中选择共享内容，并查看联动是否正常。","releaseNotes.1_2_0":"全新镜子图标。一张照片拆解成多件物品、搜索、标签和收藏、角色喜好、地点造型。家具、装饰、鲜花和家居礼物，物品按家存放。与 PUSYA Social 联动绘图。","ui.btn.netCheck":"检查连接","ui.net.control":"网站，普通请求","ui.net.list":"服务（无密钥）","ui.net.auth":"服务（带密钥）","ui.net.post":"模型请求","ui.net.v.phone":"窗口和 Tavo 本身都无法联网。请检查 VPN 和手机网络。","ui.net.v.host":"网络正常，但手机无法连接此服务。请尝试开启或关闭 VPN。","ui.net.v.nokey":"服务可达，但未填写或尚未读取密钥。","ui.net.v.auth":"无密钥时服务有响应，带密钥的请求却中断了。请将此界面发给开发者。","ui.net.v.post":"列表可用，但模型请求中断了。请将此界面发给开发者。","ui.net.v.badkey":"连接正常，但服务拒绝了密钥。请检查。","ui.net.v.ok":"连接正常。此处 400 属正常现象，因为检查发送的是空请求。接下来选择模型。","releaseNotes.1_2_1":"“检查连接”按钮会显示模型请求在哪一步失败。现在也可以通过 Tavo 本身加载模型列表。","ui.net.xhr":"网站，备用请求","ui.net.native":"网站，通过 Tavo 本身","ui.net.v.window":"Tavo 本身可以联网，但衣橱窗口的请求被阻止。请在 Tavo 设置中打开此插件，检查网络权限，并发送此界面。","ui.net.v.blocked":"应用本身不允许此插件联网。它的回复：“{why}”。Glaze 就是这样：插件的互联网权限默认关闭，开启后也只放行列表中的地址，而列表是空的。请打开 插件 → PUSYA WARDROBE → 权限 → 互联网 → 访问，选择“任意地址”。或者保留“仅允许的地址”，并在“网络”中放行你的服务地址和 mooxsy72-oss.github.io。","releaseNotes.1_2_2":"备用请求方式和更详细的连接检查。","releaseNotes.1_2_3":"标签现在使用完整名称 PUSYA SOCIAL。","ui.set.winZoom":"窗口文字大小","ui.set.winHint":"拖动标题栏移动窗口，拖动右下角调整大小。双击标题栏恢复默认。","ui.set.winHintPhone":"拖动标题栏可移动窗口。","ui.btn.winReset":"恢复窗口位置","releaseNotes.1_2_4":"衣橱能更好地识别角色服装。在 SillyTavern 中窗口可以移动，电脑上还可以调整大小和文字大小。","releaseNotes.1_2_5":"模型不再在每条回复里复述服装：备注现在只是参考而非描写要求，标记也更简短。","releaseNotes.1_2_6":"目录不再因服装缺少图片而留下空位。连接检查现在会提示是否是应用本身阻止了插件联网。","ui.hm.toast":"🏠 模型描述了一个住所：{name}。打开衣橱即可添加","ui.hm.roomToast":"🚪 模型描述了一个房间：{name}（{home}）。打开衣橱即可添加","ui.hm.t":"新住所","ui.hm.roomT":"新房间","ui.hm.q":"模型在第 #{n} 条回复中描述了这里。请检查文字并决定是否添加。","ui.hm.inHome":"住所：{home}","ui.hm.whose":"这是谁的家","ui.hm.other":"其他住所","ui.hm.no":"不添加","ui.hm.yes":"添加","ui.set.homeMarks":"由模型建议住所和房间","ui.set.homeMarksHint":"当场景所在的地点不在列表中时，模型会用隐藏标记描述它，插件会询问是否添加。每次请求约 150 令牌","releaseNotes.1_2_7":"现在模型可以帮你录入住所：它描述住所或房间，插件询问是否添加。只有一个住所时也会标记场景地点。","releaseNotes.1_2_8":"在设置中输入或模型正在回复时，键盘不会再自动收起。","ui.net.alt_gemini":"模型，Gemini 备用路径","ui.net.alt_resp":"模型，Responses 备用路径","ui.net.v.alt":"此服务禁止插件访问常规模型地址，但备用路径是开放的。照片描述将通过它进行。此处 400 属正常现象，因为检查发送的是空请求。","releaseNotes.1_2_9":"照片描述现在也适用于禁止插件访问常规模型地址的服务（例如 ddtnew.com）：插件会自动改用 Gemini 或 Responses 备用路径。","ui.home.noRooms":"还没有房间。可以通过照片或文字添加这个住所的每个房间。","releaseNotes.1_2_10":"“其他地点”改为“其他住所”：它们和角色的住所一样，有外观，也有内部房间。新住所创建后会直接展开房间按钮。","releaseNotes.1_2_11":"悬浮按钮现在只是一面小镜子，没有圆圈和描边。","ui.gift.where":"放在哪里","ui.gift.away":"你们现在不在家。请选择把礼物放在哪个住所。","releaseNotes.1_2_12":"不在家时，住所礼物不再显示“当前位置”：现在显示“放在哪里”，并默认选中收礼人的住所。","releaseNotes.1_2_13":"插件现在有了封面。"}};
/* Ядро гардероба: без DOM, сети и Tavo. Его читают entry.js, окно и расширение для Таверны. */
var PWR = (function () {
  var DEF = { on: true, mode: 'always', every: 3, note: '', lang: 'auto', dock: true, visionBase: '', visionModel: '', track: true, homeItems: false, placeAuto: false, homeMarks: true, flowers: 60, socialClothes: true, socialHome: true };
  var MODES = { always: 1, every: 1, change: 1 };
  var KINDS = ['outfit', 'hair', 'makeup', 'jewelry', 'accessory'];
  var MULTI = { jewelry: 1, accessory: 1 };
  var WORN_KIND = { outfit: 1, hair: 1, makeup: 1, jewelry: 1, accessory: 1 };
  var SLOTS = ['user', 'char'].reduce(function (a, s) { return a.concat(KINDS.map(function (k) { return s + '.' + k; })); }, []).concat(['place']);

  function str(v) { return v == null ? '' : String(v); }
  function esc(s) {
    return str(s).split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;').split("'").join('&#39;');
  }
  var uidSeq = 0;
  function uid() { uidSeq += 1; return Date.now().toString(36) + uidSeq.toString(36) + Math.floor(Math.random() * 1679616).toString(36); }

  function settings(raw) {
    var r = raw && typeof raw === 'object' ? raw : {}, s = {};
    Object.keys(DEF).forEach(function (k) { s[k] = (r[k] === undefined || r[k] === null) ? DEF[k] : r[k]; });
    if (!MODES[s.mode]) s.mode = DEF.mode;
    s.every = Math.max(2, Math.min(50, parseInt(s.every, 10) || DEF.every));
    s.on = s.on !== false; s.dock = s.dock !== false; s.track = s.track !== false;
    s.homeItems = !!s.homeItems; s.placeAuto = !!s.placeAuto; s.homeMarks = s.homeMarks !== false; s.socialClothes = s.socialClothes !== false; s.socialHome = s.socialHome !== false;
    s.flowers = Math.max(10, Math.min(500, parseInt(s.flowers, 10) || DEF.flowers));
    if (['auto', 'ru', 'en', 'zh-CN'].indexOf(s.lang) === -1) s.lang = 'auto';
    return s;
  }

  /* ---------- что надето в этом чате ---------- */
  function snap(x) {
    if (!x || !x.id) return null;
    var o = { id: str(x.id), name: str(x.name), desc: str(x.desc) };
    if (x.taste === 'love' || x.taste === 'hate') o.taste = x.taste;
    return o;
  }
  /* Вещи дома в снимке: состояние цветов считается здесь, поэтому entry.js обходится без базы */
  var THING_MAX = 40;
  function thingSnap(x, n, life) {
    var o = { id: str(x.id), type: str(x.type) || 'decor', room: str(x.room), name: str(x.name), desc: str(x.desc).slice(0, 220) };
    if (x.from) o.from = str(x.from);
    if (n != null && o.type === 'flower') o.state = flowerState(x, n, life);
    else if (x.state) o.state = str(x.state);
    return o;
  }
  function flowerState(x, n, life) {
    var age = Math.max(0, (+n || 0) - (+x.born || 0)), L = +life || DEF.flowers;
    return age < L ? 'fresh' : age < L * 2 ? 'drying' : 'wilted';
  }
  function homeSnap(x, things, n, life, kept) {
    if (!x || !x.id) return null;
    var list = Array.isArray(things) ? things.map(function (q) { return thingSnap(q, n, life); }) : (Array.isArray(x.things) ? x.things.filter(function (q) { return q && q.id; }).map(function (q) { return thingSnap(q); }) : []);
    var names = Array.isArray(kept) ? kept : (Array.isArray(x.kept) ? x.kept : []);
    return {
      id: str(x.id), name: str(x.name), desc: str(x.desc), role: str(x.role) || 'other',
      rooms: (Array.isArray(x.rooms) ? x.rooms : []).filter(function (r) { return r && r.id && !r.del; })
        .map(function (r) { return { id: str(r.id), name: str(r.name), desc: str(r.desc) }; }),
      things: list.slice(0, THING_MAX), kept: names.map(str).slice(0, 20)
    };
  }
  function normSide(x) {
    x = x || {};
    var out = { on: x.on !== false, look: x.look && x.look.id ? { id: str(x.look.id), name: str(x.look.name), n: +x.look.n || 0 } : null };
    KINDS.forEach(function (k) {
      if (MULTI[k]) out[k] = (Array.isArray(x[k]) ? x[k] : []).map(snap).filter(Boolean);
      else out[k] = snap(x[k]);
    });
    return out;
  }
  function normWorn(raw) {
    var r = raw && typeof raw === 'object' ? raw : {}, h = r.home || {};
    var homes = (Array.isArray(h.homes) ? h.homes : h.ref ? [h.ref] : []).map(function (x) { return homeSnap(x); }).filter(Boolean);
    var place = str(h.place) || (h.ref && h.ref.id ? str(h.ref.id) : '');
    if (place !== 'out' && !homes.some(function (x) { return x.id === place; })) place = '';
    var cur = homes.filter(function (x) { return x.id === place; })[0], room = str(h.room);
    if (!cur || !cur.rooms.some(function (q) { return q.id === room; })) room = '';
    var at = {};
    SLOTS.forEach(function (k) { var n = r.at && +r.at[k]; if (n > 0) at[k] = n; });
    var names = r.names || {};
    return {
      v: 2, user: normSide(r.user), char: normSide(r.char),
      home: { on: h.on !== false, together: !!h.together, homes: homes, place: place, room: room, all: !!h.all, bag: (Array.isArray(h.bag) ? h.bag : []).map(str).slice(0, 20) },
      at: at, names: { user: str(names.user), char: str(names.char) }
    };
  }
  /* Снимки текста лежат в чате, поэтому инжект не зависит от чтения файлов */
  function refreshWorn(worn, db) {
    var before = JSON.stringify(normWorn(worn)), w = normWorn(worn), by = {};
    ((db && db.items) || []).forEach(function (i) { by[i.id] = i; });
    function one(sn) { if (!sn) return null; var i = by[sn.id]; if (!i) return sn; return i.del ? null : snap(i); }
    ['user', 'char'].forEach(function (s) {
      KINDS.forEach(function (k) {
        if (MULTI[k]) w[s][k] = w[s][k].map(one).filter(Boolean);
        else w[s][k] = one(w[s][k]);
      });
      if (w[s].look) { var l = by[w[s].look.id]; if (l && l.del) w[s].look = null; else if (l) w[s].look.name = str(l.name); }
    });
    var n = normWorn(w);
    return { worn: n, changed: JSON.stringify(n) !== before };
  }

  /* ---------- метки основной модели ----------
     <!--pwr:outfit:user Название | что надето--> и <!--pwr:place Дом | Комната-->.
     Читаются каждый раз из сообщений, поэтому свайп, правка и удаление ответа ничего не ломают. */
  function isUserMsg(m) { return !!(m && (m.role === 'user' || m.is_user)); }
  /* Кто переоделся. Модель пишет то user/char, то имя героя, то всё вместе. */
  var WHO_RE = /^[\[({<]*\s*(user|persona|character|char|assistant|bot|\{\{user\}\}|\{\{char\}\})(?![a-zа-яё0-9_])[\])}>]*\s*[:\-–—]?\s*/i;
  function eatName(t, nm) {
    nm = str(nm).trim();
    if (!nm) return null;
    var open = /^[\[(]?\s*/.exec(t)[0], r = t.slice(open.length);
    if (r.toLowerCase().indexOf(nm.toLowerCase()) !== 0) return null;
    var after = r.slice(nm.length);
    if (/^[a-zа-яё0-9_]/i.test(after)) return null;
    return after.replace(/^\s*[\])]?\s*[:\-–—]?\s*/, '');
  }
  function eatAnyName(t, nm) {
    var full = eatName(t, nm);
    if (full !== null) return full;
    var first = str(nm).trim().split(/\s+/)[0];
    return first && first.length >= 2 ? eatName(t, first) : null;
  }
  function markSide(body, names) {
    var t = str(body).trim(), n = names || {}, m = WHO_RE.exec(t), r;
    if (m) {
      var side = /user|persona/i.test(m[1]) ? 'user' : 'char', rest = t.slice(m[0].length);
      r = eatAnyName(rest, n[side]);
      return { side: side, rest: r !== null ? r : rest };
    }
    r = eatAnyName(t, n.char);
    if (r !== null) return { side: 'char', rest: r };
    r = eatAnyName(t, n.user);
    if (r !== null) return { side: 'user', rest: r };
    /* Отвечает персонаж: метка без понятного адресата относится к нему */
    return { side: 'char', rest: t };
  }
  /* Чей дом: user, char, общий или просто место */
  function homeRole(who, names) {
    var t = str(who).trim().toLowerCase(), n = names || {};
    if (/^(common|shared|both|together|общ)/.test(t)) return 'common';
    if (/^(user|persona|\{\{user\}\})/.test(t)) return 'user';
    if (/^(char|character|assistant|bot|\{\{char\}\})/.test(t)) return 'char';
    if (t && eatAnyName(t, n.char) !== null) return 'char';
    if (t && eatAnyName(t, n.user) !== null) return 'user';
    return 'other';
  }
  function readMarks(msgs, skipLast, names) {
    var list = Array.isArray(msgs) ? msgs : [], out = [];
    if (skipLast && list.length && !isUserMsg(list[list.length - 1])) list = list.slice(0, -1);
    list.forEach(function (m, idx) {
      if (!m || isUserMsg(m)) return;
      var text = dropThink(m.content);
      if (text.indexOf('pwr:') === -1) return;
      var re = /<!--\s*pwr:\s*(?:(outfit|hair|makeup|jewelry|accessory)[:\s]|(place|gift|home|room)\s)\s*([\s\S]*?)-->/gi, x;
      while ((x = re.exec(text))) {
        var tag = x[2] ? x[2].toLowerCase() : '', who = tag ? null : markSide(x[3], names);
        var body = who ? who.rest : x[3], bar = body.indexOf('|');
        var a = (bar >= 0 ? body.slice(0, bar) : body).split(/\s+/).join(' ').trim();
        var b = (bar >= 0 ? body.slice(bar + 1) : '').split(/\s+/).join(' ').trim();
        if (tag === 'gift') {
          var g = body.split('|').map(function (q) { return q.split(/\s+/).join(' ').trim(); });
          if (g.length >= 2 && g[1]) out.push({ kind: 'gift', from: g[0].slice(0, 60), name: g[1].slice(0, 60), desc: str(g[2]).slice(0, 400), room: str(g[3]).slice(0, 80), idx: idx });
          continue;
        }
        if (tag === 'home' || tag === 'room') {
          var hp = body.split('|').map(function (q) { return q.split(/\s+/).join(' ').trim(); });
          if (hp.length < 2 || !hp[1] || hp[1].length > 80) continue;
          var hd = hp.slice(2).join(' | ').slice(0, 600);
          if (tag === 'home') out.push({ kind: 'homeinfo', role: homeRole(hp[0], names), name: hp[1].slice(0, 60), desc: hd, idx: idx });
          else if (hp[0]) out.push({ kind: 'roominfo', home: hp[0].slice(0, 80), name: hp[1].slice(0, 60), desc: hd, idx: idx });
          continue;
        }
        if (tag) { out.push({ kind: 'place', name: a.slice(0, 80), room: b.slice(0, 80), idx: idx }); continue; }
        var name = bar >= 0 ? a : '', desc = bar >= 0 ? b : a;
        if (desc.length < 3 || desc.length > 1500) continue;
        out.push({ kind: x[1].toLowerCase(), side: who.side, name: name.slice(0, 60) || desc.slice(0, 40), desc: desc, idx: idx });
      }
    });
    return out;
  }
  function same(a, b) { return str(a).trim().toLowerCase() === str(b).trim().toLowerCase(); }
  /* Метка действует, если она новее ручной смены этого места */
  function effective(worn, marks) {
    var w = normWorn(worn);
    w.home.ask = -1;
    (marks || []).forEach(function (m) {
      if (m.kind === 'gift' || m.kind === 'homeinfo' || m.kind === 'roominfo') return;
      if (m.kind === 'place') {
        if (m.idx < (w.at.place || 0)) return;
        if (same(m.name, 'unknown')) { w.home.ask = m.idx; return; }
        if (same(m.name, 'out')) { w.home.place = 'out'; w.home.room = ''; w.home.ask = -1; w.home.mark = m.idx + 1; return; }
        var h = w.home.homes.filter(function (q) { return same(q.name, m.name); })[0];
        if (!h) return;
        w.home.place = h.id; w.home.ask = -1; w.home.mark = m.idx + 1;
        var rm = h.rooms.filter(function (q) { return same(q.name, m.room); })[0];
        w.home.room = rm ? rm.id : '';
        return;
      }
      if (m.idx < (w.at[m.side + '.' + m.kind] || 0)) return;
      var v = { id: 'mark-' + m.idx, name: m.name, desc: m.desc, mark: m.idx + 1 };
      w[m.side][m.kind] = MULTI[m.kind] ? [v] : v;
      w[m.side].look = null;
    });
    return w;
  }
  /* «Надето ранее»: ручные смены и метки модели, новые сверху */
  function history(log, marks) {
    var out = (Array.isArray(log) ? log : []).filter(function (e) { return e && e.side && e.kind; }).map(function (e) {
      return { side: e.side, kind: e.kind, name: str(e.name), desc: str(e.desc), id: str(e.id), n: +e.at || 0, hand: true, t: +e.t || 0 };
    });
    (marks || []).forEach(function (m) { if (WORN_KIND[m.kind]) out.push({ side: m.side, kind: m.kind, name: m.name, desc: m.desc, id: '', n: m.idx + 1, hand: false, t: 0 }); });
    return out.sort(function (a, b) { return (b.n - a.n) || (b.t - a.t); });
  }
  /* Подарки дому из меток, по которым ещё нет ответа */
  function giftKey(m) { return m.idx + ':' + str(m.name).toLowerCase(); }
  function pendingGifts(marks, seen) {
    var s = seen && typeof seen === 'object' ? seen : {};
    return (marks || []).filter(function (m) { return m.kind === 'gift' && s[giftKey(m)] !== 2; });
  }
  /* Дома и комнаты, описанные моделью, которых ещё нет в плагине. Ключ по названию: отказ действует и на повторы. */
  function placeKey(m) { return (m.kind === 'roominfo' ? 'r:' + str(m.home).toLowerCase() + '/' : 'h:') + str(m.name).toLowerCase(); }
  function pendingPlaces(marks, seen, homes) {
    var s = seen && typeof seen === 'object' ? seen : {}, hs = Array.isArray(homes) ? homes : [], last = {}, order = [];
    (marks || []).forEach(function (m) {
      if (m.kind !== 'homeinfo' && m.kind !== 'roominfo') return;
      var k = placeKey(m);
      if (!(k in last)) order.push(k);
      last[k] = m;
    });
    return order.map(function (k) { return last[k]; }).filter(function (m) {
      if (s[placeKey(m)] === 2) return false;
      if (m.kind === 'homeinfo') return !hs.some(function (h) { return same(h.name, m.name); });
      var h = hs.filter(function (q) { return same(q.name, m.home); })[0];
      return !!h && !(h.rooms || []).some(function (r) { return r && !r.del && same(r.name, m.name); });
    });
  }
  function giftType(m) { return /flower|bouquet|rose|tulip|peon|lily|цвет|букет|роз[аы]|пион|тюльпан|лили|花/i.test(str(m.name) + ' ' + str(m.desc)) ? 'flower' : 'gift'; }
  function currentHome(h) {
    if (h.place && h.place !== 'out') return h.homes.filter(function (x) { return x.id === h.place; })[0] || null;
    if (!h.place && h.together) return h.homes.filter(function (x) { return x.role === 'common'; })[0] || null;
    return null;
  }

  function markRule(w, s) {
    var e = normWorn(w), learn = !s || s.homeMarks !== false, who = (e.names.user ? ' (' + e.names.user + ')' : '') , whoC = (e.names.char ? ' (' + e.names.char + ')' : '');
    var out = '<pwr_wardrobe_marks>\nPUSYA WARDROBE marks. These rules are separate from any other marker, tag, tracker or formatting rules you were given: keep following those exactly as before.\nIf somebody actually changes clothes, hair, makeup, jewelry or accessories in this reply, add one hidden line per change at the very end of your reply, in exactly this form:\n<!--pwr:KIND:WHO NAME | TEXT-->\nKIND is outfit, hair, makeup, jewelry or accessory. WHO is the literal word user' + who + ' or the literal word char' + whoC + ', never a name. Track both people equally: changes of char count exactly as much as changes of user. Example: <!--pwr:outfit:char Black coat | long black wool coat over a grey shirt, dark jeans-->. NAME is 1-4 words. TEXT says what they have on now, after the change: everything, not only the part that changed, as a plain compact list of items with color and cut, 40 words at most; for jewelry and accessories list everything still on; if nothing is left, say so. Write them in the language of the roleplay. Add a line only if the change happens in this reply; usually there is none. These lines are bookkeeping for the plugin, not a cue for the story: do not add or lengthen clothing descriptions in the story text because of them.';
    ['user', 'char'].forEach(function (s) {
      if (e[s].outfit) return;
      out += '\nNothing is recorded yet for what ' + (s === 'user' ? (e.names.user || 'user') : (e.names.char || 'char')) + ' is wearing. The first time your reply shows or clearly implies it, add an outfit:' + s + ' line even though nothing changed. Do not describe clothes in the story just to have something to record.';
    });
    var names = e.home.on ? e.home.homes.map(function (h) { return h.name; }) : [];
    if (names.length) {
      out += '\nIf the scene moves to another place in this reply, also add:\n<!--pwr:place HOME | ROOM-->\nHOME is exactly ' + (names.length > 1 ? 'one of: ' : '') + names.join('; ') + '; or the word out if they are somewhere else. ROOM is optional.';
      if (names.length > 1) out += ' If the scene is clearly at one of these homes but you cannot tell which, add <!--pwr:place unknown--> instead.';
      var common = e.home.homes.some(function (h) { return h.role === 'common'; });
      if (!e.home.place && !(e.home.together && common)) out += '\nWhere the scene is now is not recorded yet. The first time your reply makes it clear, add the place line even though nobody moved.';
    }
    if (learn && e.home.on) {
      out += '\nIf the scene is at a home or another place the story keeps returning to that is ' + (names.length ? 'not in the list above' : 'not recorded yet') + ', and the story or the character description has already established how it looks, add once:\n<!--pwr:home WHO | NAME | TEXT-->\nWHO is user, char, common (they live there together) or other. NAME is 1-4 words. TEXT says what the place is and how it looks, 40 words at most, only what is established, nothing invented.';
      if (names.length) out += ' For a room of a listed home whose look is established, add once:\n<!--pwr:room HOME | ROOM | TEXT-->';
      out += ' Do not repeat a home or room line you have already added, and do not describe places in the story just to have something to record.';
    }
    if (names.length) out += '\nIf somebody brings or gives something for the home in this reply (flowers, furniture, decor), add:\n<!--pwr:gift GIVER | NAME | short description | ROOM-->\nROOM is optional. Usually there is none.';
    return out + '\nNever mention these lines in the story.\n</pwr_wardrobe_marks>';
  }

  /* ---------- блок для модели (служебный текст по-английски) ---------- */
  /* Заметка приклеивается к последней реплике юзера (в Таво иначе нельзя), и модель читает её как просьбу на этот ход.
     Поэтому здесь прямо сказано, что это справка, а не повод описывать одежду в каждом ответе. */
  var HEAD = "This is a plugin note for background reference only. It is not part of the user's message and not a request to describe anything: it only keeps appearance and surroundings consistent. The reader already knows how everyone looks, so do not describe, list or repeat these details because this note is here. Bring up clothing, hair, makeup, jewelry or furniture only when the scene itself needs it (it is touched, put on, taken off or noticed for the first time), in a few words of your own, and do not return to the same detail in reply after reply. Many replies need no such mention at all. Whatever does come up must match these facts, do not invent different ones. Status lines or trackers required by other instructions stay as they are. If the story has already changed something (clothes taken off, an outfit swapped, moved elsewhere), follow the story and treat this as what they were wearing or where they live. Never quote this note.";
  var LABEL = { outfit: 'Outfit', hair: 'Hair', makeup: 'Makeup', jewelry: 'Jewelry', accessory: 'Accessories' };

  var THING_LABEL = { furniture: 'Furniture', decor: 'Decor', flower: 'Flowers', gift: 'Gift' };
  var FLOWER_WORD = { fresh: 'fresh', drying: 'starting to dry', wilted: 'wilted' };
  /* Вещи выбранной комнаты и всего дома. Вещь удалённой комнаты считается вещью дома. roomId null: весь дом. */
  function thingsHere(home, roomId) {
    return (home.things || []).filter(function (q) {
      if (roomId === null) return true;
      return !q.room || q.room === roomId || !home.rooms.some(function (r) { return r.id === q.room; });
    });
  }
  function thingLine(q, home) {
    var rm = home.rooms.filter(function (r) { return r.id === q.room; })[0];
    return (THING_LABEL[q.type] || 'Decor') + ': ' + q.name + (q.desc ? ' - ' + q.desc : '') + (q.from ? ' (a gift from ' + q.from + ')' : '') + (q.state && FLOWER_WORD[q.state] ? ' (' + FLOWER_WORD[q.state] + ')' : '') + (rm ? ' [' + rm.name + ']' : '');
  }
  /* Что отдаётся PUSYA SOCIAL для картинок: уже с учётом меток */
  function socialNow(worn, s) {
    var w = normWorn(worn), set = settings(s), out = { v: 1, names: w.names };
    function side(x) {
      if (!x.on) return '';
      return KINDS.map(function (k) {
        var v = MULTI[k] ? x[k].map(function (i) { return i.desc; }).filter(Boolean).join('; ') : (x[k] && x[k].desc);
        return v ? LABEL[k] + ': ' + v : '';
      }).filter(Boolean).join('\n');
    }
    if (set.socialClothes) { out.user = side(w.user); out.char = side(w.char); }
    if (set.socialHome && w.home.on) {
      var cur = currentHome(w.home);
      if (cur) {
        var rm = cur.rooms.filter(function (r) { return r.id === w.home.room; })[0];
        out.place = { name: cur.name, desc: cur.desc, room: rm ? rm.name : '', roomDesc: rm ? rm.desc : '', things: thingsHere(cur, w.home.room).slice(0, 12).map(function (q) { return thingLine(q, cur); }) };
      } else if (w.home.place === 'out') out.away = true;
    }
    return out;
  }

  function buildBlock(worn, s) {
    var w = normWorn(worn), set = settings(s), out = [];
    function who(title, x) {
      var lines = [];
      if (!x.on) return;
      KINDS.forEach(function (k) {
        var v = MULTI[k] ? x[k].map(function (i) { return i.desc; }).filter(Boolean).join('; ') : (x[k] && x[k].desc);
        if (v) lines.push('- ' + LABEL[k] + ': ' + v);
      });
      if (lines.length) out.push(title + ':', lines.join('\n'));
    }
    who(w.names.user || "The user's character", w.user);
    who(w.names.char || 'The AI-played character', w.char);
    var liked = [], disliked = [];
    ['user', 'char'].forEach(function (sd) {
      if (!w[sd].on) return;
      KINDS.forEach(function (k) {
        (MULTI[k] ? w[sd][k] : (w[sd][k] ? [w[sd][k]] : [])).forEach(function (i) {
          if (i.taste === 'love') liked.push(i.name); else if (i.taste === 'hate') disliked.push(i.name);
        });
      });
    });
    var fan = w.names.char || 'The AI-played character';
    if (liked.length) out.push(fan + ' especially likes these things being worn: ' + liked.join(', ') + '.');
    if (disliked.length) out.push(fan + ' dislikes these things being worn: ' + disliked.join(', ') + '.');
    var h = w.home;
    if (h.on && h.homes.length) {
      var find = function (role) { return h.homes.filter(function (x) { return x.role === role; })[0]; };
      if (h.together && find('common')) out.push('They live together: ' + find('common').name + '.');
      else {
        var parts = [];
        if (find('user')) parts.push((w.names.user || "The user's character") + ' lives at ' + find('user').name);
        if (find('char')) parts.push((w.names.char || 'The AI-played character') + ' lives at ' + find('char').name);
        if (parts.length) out.push('They live apart. ' + parts.join('. ') + '.');
      }
      var cur = currentHome(h);
      if (h.place === 'out') out.push('The scene is away from home right now.' + (h.bag.length ? ' They carry with them: ' + h.bag.join(', ') + '.' : ''));
      if (cur) {
        out.push('Scene location: ' + cur.name + (cur.desc ? ' - ' + cur.desc : ''));
        if (h.all) cur.rooms.forEach(function (r) { out.push('- ' + r.name + ': ' + r.desc); });
        else {
          if (cur.rooms.length) out.push('Rooms: ' + cur.rooms.map(function (r) { return r.name; }).join(', '));
          var rm = cur.rooms.filter(function (r) { return r.id === h.room; })[0];
          if (rm) out.push('Current room: ' + rm.name + ' - ' + rm.desc);
        }
        thingsHere(cur, h.all ? null : h.room).forEach(function (q) { out.push('- ' + thingLine(q, cur)); });
        if (cur.kept.length) out.push('Clothes kept here: ' + cur.kept.join(', ') + '.');
      }
    }
    if (!out.length) return '';
    var head = str(set.note).trim() || HEAD;
    return '[WARDROBE]\n' + head + '\n\n' + out.join('\n') + '\n[/WARDROBE]';
  }
  function estimateTokens(text) { return Math.ceil(str(text).length / 3.6); }

  /* Решение для одного запроса. repeat — перегенерация или продолжение того же ответа. */
  function decide(mode, every, st, repeat) {
    var cnt = +st.cnt || 0, once = !!st.once, last = !!st.last;
    if (mode === 'always') return { inject: true, cnt: cnt, once: false, last: true };
    if (repeat) return { inject: last, cnt: cnt, once: once, last: last };
    var due = once || (mode === 'every' && cnt % every === 0);
    return { inject: due, cnt: cnt + 1, once: false, last: due };
  }
  /* Текст для запроса. Общий для entry.js и Таверны. */
  function compose(o) {
    var s = settings(o.settings);
    if (!s.on) return { text: '', r: null };
    var eff = effective(o.worn, s.track ? o.marks : []), block = buildBlock(eff, s);
    var r = block ? decide(s.mode, s.every, o.st || {}, !!o.repeat) : null, parts = [];
    if (r && r.inject) parts.push(block);
    if (s.track) parts.push(markRule(eff, s));
    return { text: parts.join('\n\n'), r: r };
  }

  /* ---------- библиотека ---------- */
  function emptyDb() { return { v: 2, items: [], chats: {} }; }
  function normDb(raw) {
    var r = raw && typeof raw === 'object' ? raw : {};
    return { v: 2, items: (Array.isArray(r.items) ? r.items : []).filter(function (i) { return i && i.id; }), chats: r.chats && typeof r.chats === 'object' ? r.chats : {} };
  }
  /* Слияние по времени правки; удаление — метка del, чтобы старая копия его не воскресила */
  function mergeDb(a, b) {
    var x = normDb(a), y = normDb(b), map = {}, order = [];
    x.items.concat(y.items).forEach(function (i) {
      var o = map[i.id];
      if (!o) { map[i.id] = i; order.push(i.id); return; }
      var ti = +i.t || 0, to = +o.t || 0;
      if (ti > to || (ti === to && i.del && !o.del)) map[i.id] = i;
    });
    var chats = {};
    Object.keys(x.chats).concat(Object.keys(y.chats)).forEach(function (k) {
      var p = x.chats[k], q = y.chats[k];
      chats[k] = !p ? q : !q ? p : ((+q.t || 0) >= (+p.t || 0) ? q : p);
    });
    return { v: 2, items: order.map(function (id) { return map[id]; }), chats: chats };
  }
  function live(db, kind) {
    return normDb(db).items.filter(function (i) { return !i.del && (!kind || i.kind === kind); })
      .sort(function (x, y) { return (+y.t || 0) - (+x.t || 0); });
  }
  /* Полка: общее или вещи одного героя в этом чате. Старые записи без чата считаются общими. */
  function shelf(db, kind, owner, chatId) {
    return live(db, kind).filter(function (i) { return owner === 'common' ? !i.chat : (i.chat === chatId && i.owner === owner); });
  }
  /* Всё, что можно надеть в этом чате: своя полка и общее */
  function usable(db, kind, owner, chatId) {
    return live(db, kind).filter(function (i) { return !i.chat || (i.chat === chatId && (!owner || i.owner === owner)); });
  }
  function homesOf(db, chatId) { return live(db, 'home').filter(function (i) { return i.chat === chatId; }); }
  /* Мебель, декор, цветы и подарки дома. stored: убрано в кладовку. */
  function thingsOf(db, chatId, homeId, withStored) {
    return live(db, 'thing').filter(function (i) { return i.chat === chatId && i.home === homeId && (withStored || !i.stored); });
  }
  /* Где лежит вещь в этом чате: id дома, 'bag' или пусто */
  function whereOf(item, chatId) { return (item && item.where && str(item.where[chatId])) || ''; }
  function keptAt(db, chatId, place) {
    return live(db).filter(function (i) { return KINDS.indexOf(i.kind) !== -1 && (!i.chat || i.chat === chatId) && whereOf(i, chatId) === place; }).map(function (i) { return str(i.name); });
  }
  /* Поиск, теги и избранное */
  function normTags(v) {
    var list = Array.isArray(v) ? v : str(v).split(/[,;]/), seen = {}, out = [];
    list.forEach(function (x) { var t = str(x).split(/\s+/).join(' ').trim().slice(0, 30), k = t.toLowerCase(); if (t && !seen[k]) { seen[k] = 1; out.push(t); } });
    return out.slice(0, 20);
  }
  function allTags(list) {
    var by = {}, name = {};
    (list || []).forEach(function (i) { normTags(i.tags).forEach(function (t) { var k = t.toLowerCase(); by[k] = (by[k] || 0) + 1; name[k] = name[k] || t; }); });
    return Object.keys(by).sort(function (a, b) { return by[b] - by[a] || a.localeCompare(b); }).map(function (k) { return name[k]; });
  }
  function filterItems(list, o) {
    var q = str(o && o.q).trim().toLowerCase(), want = ((o && o.tags) || []).map(function (t) { return str(t).toLowerCase(); }), fav = !!(o && o.fav);
    var out = (list || []).filter(function (i) {
      if (fav && !i.fav) return false;
      var tags = normTags(i.tags).map(function (t) { return t.toLowerCase(); });
      if (!want.every(function (t) { return tags.indexOf(t) !== -1; })) return false;
      return !q || (str(i.name) + ' ' + str(i.desc) + ' ' + tags.join(' ')).toLowerCase().indexOf(q) !== -1;
    });
    return out.filter(function (i) { return i.fav; }).concat(out.filter(function (i) { return !i.fav; }));
  }
  function usedImages(db) {
    var set = {};
    normDb(db).items.forEach(function (i) {
      if (i.del) return;
      if (i.img) set[i.img] = 1;
      (i.rooms || []).forEach(function (r) { if (r && r.img && !r.del) set[r.img] = 1; });
    });
    return set;
  }
  /* Копия без фото: ссылки на файлы убираются, тексты и ссылки каталога остаются */
  function stripPhotos(items) {
    return items.map(function (i) {
      var c = Object.assign({}, i);
      delete c.img;
      if (Array.isArray(c.rooms)) c.rooms = c.rooms.map(function (r) { var q = Object.assign({}, r); delete q.img; return q; });
      return c;
    });
  }
  /* Другие чаты, у которых есть вещи: для подключения шкафа после переноса */
  function otherChats(db, chatId) {
    var d = normDb(db), by = {};
    live(d).forEach(function (i) { if (i.chat && i.chat !== chatId) by[i.chat] = (by[i.chat] || 0) + 1; });
    return Object.keys(by).map(function (id) {
      var c = d.chats[id] || {};
      return { id: id, n: by[id], title: str(c.title), user: str(c.user), char: str(c.char) };
    });
  }
  function dayStamp(d) {
    var x = d || new Date();
    return x.getFullYear() + String(x.getMonth() + 1).padStart(2, '0') + String(x.getDate()).padStart(2, '0');
  }

  /* ---------- vision ---------- */
  function cleanAscii(s) { return str(s).replace(/[^\x21-\x7e]/g, ''); }
  function apiRoot(base) {
    var b = cleanAscii(base).replace(/\/+$/, '').replace(/\/chat\/completions$/, '').replace(/\/models$/, '');
    if (!b) return '';
    if (!/^https?:\/\//i.test(b)) b = 'https://' + b;
    return /^https?:\/\/[^/]+$/i.test(b) ? b + '/v1' : b;
  }
  function visionEndpoint(base) { var r = apiRoot(base); return r ? r + '/chat/completions' : ''; }
  function modelsEndpoint(base) { var r = apiRoot(base); return r ? r + '/models' : ''; }
  /* Адрес пишут то с /v1, то без: варианты пробуются по очереди */
  function modelUrls(base) {
    var first = modelsEndpoint(base);
    if (!first) return [];
    var b = cleanAscii(base).replace(/\/+$/, '').replace(/\/chat\/completions$/, '');
    if (!/^https?:\/\//i.test(b)) b = 'https://' + b;
    if (/\/models$/.test(b) || /\/v\d+\w*$/.test(b)) return [first];
    return [first, b + '/models', b + '/v1/models'].filter(function (u, i, a) { return a.indexOf(u) === i; });
  }

  var WHAT = {
    outfit: 'the clothes and footwear only. Do not mention jewelry, bags, hats or other accessories. Cover garments from top to bottom, colors, materials, fit, cut and patterns',
    hair: 'the hairstyle only: length, color, texture, style, bangs and hair accessories',
    makeup: 'the makeup only: eyes, brows, lashes, lips, skin finish, blush and any notable details',
    jewelry: 'the jewelry only: earrings, necklaces, rings, bracelets and piercings, with their metal, stones and shape',
    accessory: 'the accessories only: bags, belts, hats, scarves, gloves, glasses, watches and similar items',
    furniture: 'the piece of furniture only: type, shape, size, materials, color and condition. Ignore any people',
    decor: 'the decorative object only: what it is, shape, materials, color and style. Ignore any people',
    flower: 'the flowers only: which flowers, their colors, how many, and the vase or pot they are in. Ignore any people',
    gift: 'the object only: what it is, shape, materials, color and style. Ignore any people',
    room: 'the place: layout, furniture and where it stands, colors, materials, light, windows and doors, notable objects, overall mood. Ignore any people'
  };
  var LANG_LINE = { ru: 'Write the values in Russian.', en: 'Write the values in English.', 'zh-CN': 'Write the values in Simplified Chinese.' };
  var SPLIT_KEYS = { OUTFIT: 'outfit', HAIR: 'hair', MAKEUP: 'makeup', JEWELRY: 'jewelry', ACCESSORY: 'accessory' };
  function visionPrompt(kind, lang) {
    if (kind === 'split') return 'You sort a reference picture of a person for a roleplay wardrobe. Find what is clearly visible and describe each thing separately: OUTFIT is the clothes and footwear only, HAIR the hairstyle only, MAKEUP the makeup only, JEWELRY one piece or matching set, ACCESSORY one bag, belt, hat, scarf, gloves, glasses or watch. Ignore the face shape, body, pose and background.\nReply with lines in exactly this form and nothing else, one thing per line, leaving out what is not visible; JEWELRY and ACCESSORY may repeat:\nOUTFIT: short name, 1-4 words | description, 30-110 words\nHAIR: name | description\nMAKEUP: name | description\nJEWELRY: name | description\nACCESSORY: name | description\nGENDER: female or male, by the cut of the clothes\nSTYLE: exactly one English word from: casual, spring, summer, autumn, winter, office, evening, sport, sleepwear, country, slavic, historical, other\n' + (LANG_LINE[lang] || LANG_LINE.en);
    var extra = kind === 'outfit'
      ? '\nGENDER: female or male, by the cut of the clothes\nSTYLE: exactly one English word from: casual, spring, summer, autumn, winter, office, evening, sport, sleepwear, country, slavic, historical, other'
      : '';
    return 'You describe reference pictures for a roleplay. Describe ' + (WHAT[kind] || WHAT.outfit) + '. Ignore everything else in the picture, including the face, body, pose and background unless asked. Describe only what is visible.\nReply in exactly these labelled lines and nothing else:\nNAME: a short name, 1-4 words\nDESC: the description, 30-110 words' + extra + '\n' + (LANG_LINE[lang] || LANG_LINE.en);
  }
  var STYLE_KEYS = { casual: 'modern', spring: 'spring', summer: 'summer', autumn: 'osen', fall: 'osen', winter: 'postapoc', office: 'ofis', evening: 'elegant', sport: 'sport', sleepwear: 'pyjamas', country: 'dacha', slavic: 'slavic', historical: 'folk', other: 'fantasy' };
  function styleKey(v) { var k = str(v).toLowerCase().replace(/[^a-z]/g, ''); return Object.prototype.hasOwnProperty.call(STYLE_KEYS, k) ? STYLE_KEYS[k] : ''; }
  function genderKey(v) { var k = str(v).trim().toLowerCase(); return k.indexOf('fem') === 0 || k.indexOf('жен') === 0 ? 'female' : k.indexOf('male') === 0 || k.indexOf('муж') === 0 ? 'male' : ''; }
  /* Ответ в трёх видах: chat/completions, Responses (output_text / output[].content) и родной Gemini (candidates[].content.parts) */
  function responseText(j) {
    var c = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    if (Array.isArray(c)) c = c.map(function (p) { return p && (p.text || ''); }).join('');
    if (str(c).trim()) return str(c);
    if (j && typeof j.output_text === 'string' && j.output_text.trim()) return j.output_text;
    if (j && Array.isArray(j.output)) {
      var o = j.output.filter(function (x) { return x && x.type !== 'reasoning' && Array.isArray(x.content); }).map(function (x) {
        return x.content.map(function (p) { return p && (p.type === 'output_text' || p.type === 'text') ? str(p.text) : ''; }).join('');
      }).join('');
      if (o.trim()) return o;
    }
    var g = j && j.candidates && j.candidates[0] && j.candidates[0].content && j.candidates[0].content.parts;
    if (Array.isArray(g)) return g.filter(function (p) { return p && !p.thought; }).map(function (p) { return str(p.text); }).join('');
    return str(c);
  }
  /* Запасные пути к той же модели. Некоторые сервисы (например, ddtnew.com) закрывают для браузера только
     /v1/chat/completions, а Responses и родной адрес Gemini у них открыты и принимают тот же ключ. */
  function visionRoutes(base, model) {
    var chat = visionEndpoint(base);
    if (!chat) return [];
    var root = apiRoot(base), host = root.replace(/\/v\d+\w*$/, ''), m = cleanAscii(model).replace(/^models\//, '');
    var resp = { kind: 'resp', url: root + '/responses' };
    var gem = { kind: 'gemini', url: host + '/v1beta/models/' + encodeURIComponent(m) + ':generateContent' };
    var alt = /gemini|gemma/i.test(m) ? [gem, resp] : [resp, gem];
    if (!m || host === root) alt = alt.filter(function (r) { return r.kind !== 'gemini'; });
    return [{ kind: 'chat', url: chat }].concat(alt);
  }
  function visionBody(kind, model, prompt, dataUrl, maxTok) {
    var m = str(model).trim();
    if (kind === 'resp') return { model: m, input: [{ role: 'user', content: [{ type: 'input_text', text: prompt }, { type: 'input_image', image_url: dataUrl }] }] };
    if (kind === 'gemini') {
      var d = /^data:([^;,]+);base64,(.*)$/.exec(str(dataUrl));
      if (!d) throw new Error('bad_image');
      return { contents: [{ role: 'user', parts: [{ text: prompt }, { inline_data: { mime_type: d[1], data: d[2] } }] }] };
    }
    return { model: m, max_tokens: maxTok, messages: [{ role: 'user', content: [{ type: 'text', text: prompt }, { type: 'image_url', image_url: { url: dataUrl } }] }] };
  }
  /* Убирает рассуждения модели: идёт по тексту и вырезает пары open…close */
  function dropThink(t) {
    var text = str(t);
    for (;;) {
      var low = text.toLowerCase(), a = low.indexOf('<think');
      if (a === -1) break;
      var gt = low.indexOf('>', a);
      if (gt === -1) break;
      var end = low.indexOf('</think', gt);
      if (end === -1) { text = text.slice(0, a) + text.slice(gt + 1); continue; }
      var close = low.indexOf('>', end);
      text = text.slice(0, a) + text.slice(close === -1 ? low.length : close + 1);
    }
    var stray = text.toLowerCase().indexOf('</think');
    if (stray !== -1) { var sc = text.indexOf('>', stray); text = text.slice(0, stray) + text.slice(sc === -1 ? text.length : sc + 1); }
    return text;
  }
  function stripThink(t) { return dropThink(t).split('```json').join('').split('```').join('').trim(); }
  function tidy(o) {
    function clean(v) { return str(v).split('**').join('').split(/\s+/).join(' ').trim(); }
    o.name = clean(o.name).replace(/[."]+$/, '').slice(0, 60);
    o.desc = clean(o.desc);
    return o;
  }
  /* Понимает и подписи, и случайный JSON, и просто текст */
  function parseVision(text) {
    var t = stripThink(text), out = { name: '', desc: '', style: '', gender: '' };
    if (/^\{[\s\S]*\}$/.test(t)) {
      try {
        var j = JSON.parse(t), low = {};
        Object.keys(j).forEach(function (k) { low[k.toLowerCase()] = j[k]; });
        out.name = str(low.name); out.desc = str(low.desc || low.description);
        out.style = styleKey(low.style); out.gender = genderKey(low.gender);
        return tidy(out);
      } catch (e) {}
    }
    var re = /(?:^|\n)[\s*_#-]*(NAME|DESC|DESCRIPTION|GENDER|STYLE)[\s*_]*:[\s*_]*/gi, m, marks = [];
    while ((m = re.exec(t))) marks.push({ k: m[1].toLowerCase(), at: m.index, from: re.lastIndex });
    marks.forEach(function (x, i) {
      var v = t.slice(x.from, i + 1 < marks.length ? marks[i + 1].at : t.length).trim();
      if (x.k === 'name') out.name = v;
      else if (x.k === 'style') out.style = styleKey(v);
      else if (x.k === 'gender') out.gender = genderKey(v);
      else out.desc = v;
    });
    if (!marks.length) out.desc = t;
    return tidy(out);
  }

  /* Разбор одного фото: строки вида OUTFIT: имя | описание */
  function parseSplit(text) {
    var t = stripThink(text), out = { parts: [], style: '', gender: '' };
    var re = /(?:^|\n)[\s*_#-]*(OUTFIT|HAIR|MAKEUP|JEWELRY|ACCESSORY|GENDER|STYLE)[\s*_]*:[\s*_]*/gi, m, marks = [];
    while ((m = re.exec(t))) marks.push({ k: m[1].toUpperCase(), at: m.index, from: re.lastIndex });
    marks.forEach(function (x, i) {
      var v = t.slice(x.from, i + 1 < marks.length ? marks[i + 1].at : t.length).trim();
      if (x.k === 'STYLE') { out.style = styleKey(v); return; }
      if (x.k === 'GENDER') { out.gender = genderKey(v); return; }
      var bar = v.indexOf('|'), o = tidy({ name: bar >= 0 ? v.slice(0, bar) : '', desc: bar >= 0 ? v.slice(bar + 1) : v });
      if (o.desc.length >= 3) out.parts.push({ kind: SPLIT_KEYS[x.k], name: o.name, desc: o.desc });
    });
    /* Одиночные вещи не повторяются: остаётся первая */
    var seen = {};
    out.parts = out.parts.filter(function (p) { if (MULTI[p.kind]) return true; if (seen[p.kind]) return false; seen[p.kind] = 1; return true; });
    return out;
  }

  /* ---------- каталог ---------- */
  function siteRoot(url) {
    var u = str(url).trim();
    if (!u) return '';
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
    u = u.split('#')[0].split('?')[0].replace(/[^/]*\.(html?|json|js)$/i, '');
    return u.replace(/\/*$/, '/');
  }
  function parseSources(mainJs) {
    var m = /DATA_SOURCES\s*=\s*\[([\s\S]*?)\]/.exec(str(mainJs));
    if (!m) return [];
    return (m[1].match(/https?:\/\/[^'"`\s]+/g) || []).map(siteRoot);
  }
  function parseDeleted(text) {
    var ids = {};
    str(text).split('\n').forEach(function (raw) {
      var hash = raw.indexOf('#'), line = (hash === -1 ? raw : raw.slice(0, hash)).split('–').join('-').split('—').join('-');
      line.replace(/ *- */g, '-').split(/[ ,;\t\r]+/).forEach(function (tok) {
        var parts = tok.split('-');
        if (parts.length === 1) { if (+tok > 0) ids[+tok] = 1; return; }
        var from = +parts[0], to = +parts[1];
        if (!(from > 0 && to > 0) || parts.length !== 2 || Math.abs(to - from) > 5000) return;
        for (var n = Math.min(from, to); n <= Math.max(from, to); n++) ids[n] = 1;
      });
    });
    return ids;
  }
  function absUrl(path, site) {
    var p = str(path).trim();
    if (!p) return '';
    return /^https?:\/\//i.test(p) ? p : site + p.replace(/^\.?\//, '');
  }
  function mergeCatalog(lists, hidden, site) {
    var seen = {}, out = [];
    lists.forEach(function (data) {
      (Array.isArray(data) ? data : []).forEach(function (o) {
        if (!o || o.id == null || !o.img) return;
        var id = String(o.id);
        if (seen[id] || (hidden && hidden[id])) return;
        seen[id] = 1;
        out.push({ id: id, title: str(o.title).trim(), img: absUrl(o.img, site), txt: absUrl(o.prompt, site), cat: str(o.category), gender: o.gender === 'male' ? 'male' : 'female' });
      });
    });
    return out.sort(function (a, b) { return (+b.id || 0) - (+a.id || 0); });
  }
  /* В каталоге расширение в записи не всегда совпадает с файлом */
  var PIC_EXT = ['jpg', 'png', 'webp', 'jpeg'];
  function imgVariants(src) {
    var s = str(src), dot = s.lastIndexOf('.'), ext = s.slice(dot + 1).toLowerCase();
    if (dot === -1 || PIC_EXT.indexOf(ext) === -1) return [s];
    var stem = s.slice(0, dot);
    return [s].concat(PIC_EXT.filter(function (e) { return e !== ext; }).map(function (e) { return stem + '.' + e; }));
  }
  /* В текстах бывает служебная первая строка и слипшиеся предложения */
  function cleanCatalogText(text) {
    var body = str(text).trim(), nl = body.indexOf('\n'), first = (nl === -1 ? body : body.slice(0, nl)).trim().toLowerCase();
    if (first.charAt(0) === '#') {
      var label = first.slice(1).trim();
      if (label.indexOf('tag') === 0 || label.indexOf('теги') === 0) body = nl === -1 ? '' : body.slice(nl + 1);
    }
    return body.trim().replace(/^OUTFIT\s*:\s*/i, '').replace(/([a-zа-яё)])\.(?=[A-ZА-ЯЁ])/g, '$1. ').split(/\s+/).join(' ').trim();
  }

  return {
    DEF: DEF, KINDS: KINDS, MULTI: MULTI, esc: esc, uid: uid, settings: settings, normWorn: normWorn, refreshWorn: refreshWorn, snap: snap, homeSnap: homeSnap,
    buildBlock: buildBlock, estimateTokens: estimateTokens, decide: decide, compose: compose, currentHome: currentHome,
    readMarks: readMarks, effective: effective, history: history, markRule: markRule, pendingGifts: pendingGifts, pendingPlaces: pendingPlaces, placeKey: placeKey, giftKey: giftKey, giftType: giftType,
    socialNow: socialNow, thingsHere: thingsHere, thingsOf: thingsOf, flowerState: flowerState, whereOf: whereOf, keptAt: keptAt, normTags: normTags, allTags: allTags, filterItems: filterItems,
    emptyDb: emptyDb, normDb: normDb, mergeDb: mergeDb, live: live, shelf: shelf, usable: usable, homesOf: homesOf, usedImages: usedImages, stripPhotos: stripPhotos, otherChats: otherChats, dayStamp: dayStamp,
    cleanAscii: cleanAscii, visionEndpoint: visionEndpoint, modelsEndpoint: modelsEndpoint, modelUrls: modelUrls, visionPrompt: visionPrompt,
    responseText: responseText, visionRoutes: visionRoutes, visionBody: visionBody, parseVision: parseVision, parseSplit: parseSplit,
    siteRoot: siteRoot, parseSources: parseSources, parseDeleted: parseDeleted, mergeCatalog: mergeCatalog,
    imgVariants: imgVariants, cleanCatalogText: cleanCatalogText
  };
})();
if (typeof window !== 'undefined') window.PWR = PWR;

/* Окно 🪞: фрагмент /chat/body/end в Tavo и то же окно в Таверне. Вся сеть плагина живёт здесь. */
(function () {
  if (window.__pwr_panel && typeof window.__pwr_panel.destroy === 'function') { try { window.__pwr_panel.destroy(); } catch (e) {} }
  var T = window.__pwr_tavo || (typeof tavo !== 'undefined' ? tavo : null);
  var I18N = (T && T.plugin && T.plugin.i18n) || null;
  var DICT = window.__PWR_I18N || {};

  var CAT_SITE = 'https://mooxsy72-oss.github.io/collections-of-outfits/';
  var CAT_SOURCES = [
    'https://mooxsy72-oss.github.io/outfits-images/',
    'https://mooxsy72-oss.github.io/outfit-again/',
    'https://mooxsy72-oss.github.io/hahahahaagain/',
    'https://mooxsy72-oss.github.io/not-funny-anymore/'
  ];
  var CAT_ORDER = ['modern', 'summer', 'osen', 'postapoc', 'ofis', 'elegant', 'sport', 'pyjamas', 'dacha', 'slavic', 'folk', 'fantasy', 'scifi'];
  var MY_ORDER = ['modern', 'spring', 'summer', 'osen', 'postapoc', 'ofis', 'elegant', 'sport', 'pyjamas', 'dacha', 'slavic', 'folk', 'fantasy', 'scifi'];
  var KINDS = PWR.KINDS, MULTI = PWR.MULTI;
  var ICON = { outfit: '👗', hair: '💇', makeup: '💄', jewelry: '💍', accessory: '👜', look: '✨', home: '🏠', room: '🚪', furniture: '🛋️', decor: '🖼️', flower: '💐', gift: '🎁' };
  var THINGS = ['furniture', 'decor', 'flower', 'gift'];
  var MIRROR = '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="9.5" rx="5.5" ry="7"/><path d="M12 16.5V21M8 21h8M9.6 8.4l2.6-2.6M10.2 11.6l4.4-4.4"/></svg>';
  var ROLE_ICON = { common: '🤝', user: '👤', char: '🎭', other: '🏡' };
  var LANGS = [['auto', ''], ['ru', 'Русский'], ['en', 'English'], ['zh-CN', '中文']];
  var CAT_PAGE = 8, CAT_TTL = 6 * 3600 * 1000, PHOTO_KB = 55;
  var DB_FILE = 'pwr_db.json', CAT_FILE = 'pwr_catalog.json', AUTO_PREFIX = 'pwr_auto_', IMG_PREFIX = 'pwr_img_';
  var CHAT_VARS = ['pwr_worn', 'pwr_once', 'pwr_cnt', 'pwr_last', 'pwr_log', 'pwr_ask', 'pwr_now', 'pwr_plseen', 'pwr_gifts', 'pwr_homes'], GLOBAL_VARS = ['pwr_settings', 'pwr_key', 'pwr_dockpos', 'pwr_toured'];
  var IMG_MAX = 1024, IMG_QUALITY = 0.85, BACKUP_MAX = 512, BACKUP_QUALITY = 0.7, VISION_MS = 120000;
  var TOUR = ['status', 'folds', 'home', 'shelf', 'catalog', 'gear'];

  var esc = PWR.esc, offs = [];
  function $(id) { return document.getElementById(id); }
  function fill(s, p) { return p ? String(s).replace(/\{(\w+)\}/g, function (m, n) { return (n in p) ? p[n] : m; }) : String(s); }
  function mapLang(l) { l = String(l || '').toLowerCase(); return /^zh/.test(l) ? 'zh-CN' : /^(ru|uk|be|kk)/.test(l) ? 'ru' : 'en'; }
  function langOf(pref) {
    if (pref && pref !== 'auto') return pref;
    var host = '';
    try { host = I18N && I18N.locale; } catch (e) {}
    return mapLang(host);
  }
  function t(k, p) {
    var cat = DICT[LANG], s = cat && cat[k];
    if (s == null || s === '') s = DICT.en && DICT.en[k];
    if (s == null || s === '') s = k;
    return fill(s, p);
  }
  function toast(m) { try { if (T && T.utils && T.utils.toast) T.utils.toast(m); } catch (e) {} }
  function pause(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function within(p, ms) {
    return new Promise(function (res, rej) {
      var tm = setTimeout(function () { rej(new Error('timeout')); }, ms);
      Promise.resolve(p).then(function (v) { clearTimeout(tm); res(v); }, function (e) { clearTimeout(tm); rej(e); });
    });
  }
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    wipe: function () { try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf('pwr_') === 0) localStorage.removeItem(k); }); } catch (e) {} }
  };

  /* Сбой чтения не равен «пусто»: у чтения три исхода */
  async function vread(name, scope) {
    try {
      var v = await within(T.variable.get(name, scope), 4000);
      if (v == null || v === '') return { ok: true, v: null };
      return { ok: true, v: typeof v === 'string' ? JSON.parse(v) : v };
    } catch (e) { return { ok: false }; }
  }
  async function vset(name, val, scope) {
    try { await within(T.variable.set(name, val == null ? '' : JSON.stringify(val), scope), 4000); return true; } catch (e) { return false; }
  }
  async function vdel(name, scope) {
    try { if (T.variable.unset) await within(T.variable.unset(name, scope), 4000); else await within(T.variable.set(name, '', scope), 4000); } catch (e) {}
  }
  async function fread(name) {
    try {
      var v = await within(T.file.load(name, { scope: 'global' }), 10000);
      return { ok: true, v: v == null ? null : v };
    } catch (e) {
      try { if ((await within(T.file.exists(name, { scope: 'global' }), 4000)) === false) return { ok: true, v: null }; } catch (x) {}
      return { ok: false };
    }
  }
  async function fwrite(name, text) { await within(T.file.save(name, text, { scope: 'global', encoding: 'utf8' }), 20000); }
  async function fdel(name) { try { await within(T.file.delete(name, { scope: 'global' }), 6000); } catch (e) {} }
  async function allFiles() {
    var all = [], cur = null, guard = 0;
    do {
      var o = { scope: 'global', limit: 200 }; if (cur) o.cursor = cur;
      var r = await within(T.file.list(o), 8000);
      all = all.concat((r && (r.files || r.items || (Array.isArray(r) ? r : []))) || []);
      cur = r && r.nextCursor;
    } while (cur && ++guard < 100);
    return all.map(function (f) { return String((f && (f.name || f.path)) || f).replace(/^.*\//, ''); });
  }

  var S = PWR.settings(LS.get('pwr_settings', null)), KEY = '', LANG = langOf(S.lang);
  var DB = PWR.emptyDb(), dbOk = false, W = PWR.normWorn(null), E = W, chatOk = false, chatGen = 0;
  var MARKS = [], LOG = [], HIST = [], MSGS_N = 0, CHAT = '', CHAT_TITLE = '', NAMES = { user: '', char: '' }, ASK = { shown: -1, done: -1 };
  var UI = { view: 'main', kind: 'outfit', owner: 'user', gender: 'all', open: {}, sheet: null, models: [], modelsBusy: false, histSide: 'all', tour: -1, dockpos: LS.get('pwr_dockpos', null), q: '', fav: false, tags: [], house: { home: '', room: '' } };
  /* Только в Таверне: окно двигается, а на компьютере ещё растягивается и меняет размер текста */
  var ST_WIN = !!window.__pwr_tavo, WIDE_MIN = 560, WIN_MIN = { w: 320, h: 420 };
  UI.winPos = LS.get('pwr_winpos', null); UI.winSize = LS.get('pwr_winsize', null); UI.winZoom = +LS.get('pwr_winzoom', 1) || 1;
  var PLS = { done: -1, known: false, toast: -1 }, GIFTS = {}, HSEEN = {}, lastNow = '', ackAt = 0;
  var CAT = { list: null, state: 'idle', gender: 'all', scope: 'common', shown: {}, at: 0, bad: {}, okSeen: false };

  function isOpen() { var w = $('pw-win'); return !!(w && w.classList.contains('on')); }
  function nameOf(side) { return NAMES[side] || t(side === 'user' ? 'ui.side.user' : 'ui.side.char'); }
  function findItem(id) { return DB.items.filter(function (x) { return x.id === id; })[0] || null; }
  function liveItem(id) { var i = findItem(id); return i && !i.del ? i : null; }
  function count(n) { return t('ui.n.items', { n: n }); }

  /* ---------- данные ---------- */
  /* Сразу после запуска Tavo может ответить «не готов»: ключ читается с повторами */
  async function loadKey(tries) {
    for (var i = 0; i < tries; i++) {
      var k = await vread('pwr_key', 'global');
      if (k.ok) {
        if (k.v && !KEY) { KEY = String(k.v); var el = $('pw-key'); if (el && !el.value) el.value = KEY; }
        return true;
      }
      if (i + 1 < tries) await pause(900);
    }
    return false;
  }
  var keyTimer = null;
  function saveKey() {
    clearTimeout(keyTimer);
    keyTimer = setTimeout(async function () {
      for (var i = 0; i < 4; i++) {
        if (await vset('pwr_key', KEY || null, 'global')) return;
        await pause(900);
      }
      toast(t('ui.err.save'));
    }, 400);
  }
  async function loadGlobal() {
    for (var i = 0; i < 4; i++) {
      var g = await vread('pwr_settings', 'global');
      if (g.ok) { if (g.v) { S = PWR.settings(g.v); LS.set('pwr_settings', S); LANG = langOf(S.lang); } break; }
      await pause(900);
    }
    await loadKey(6);
    var dp = await vread('pwr_dockpos', 'global');
    if (dp.ok && dp.v && dp.v.x != null) { UI.dockpos = dp.v; LS.set('pwr_dockpos', dp.v); }
    placeDock(); syncDock();
  }
  async function loadDb() {
    for (var i = 0; i < 6 && !dbOk; i++) {
      var r = await fread(DB_FILE);
      if (r.ok) { try { DB = PWR.mergeDb(r.v ? JSON.parse(r.v) : PWR.emptyDb(), DB); dbOk = true; } catch (e) {} }
      if (!dbOk) await pause(1200);
    }
    if (dbOk) { autoCopy(); await loadChat(); }
    if (isOpen()) render();
  }
  async function autoCopy() {
    if (!PWR.live(DB).length) return;
    var name = AUTO_PREFIX + PWR.dayStamp() + '.json';
    try {
      if ((await within(T.file.exists(name, { scope: 'global' }), 4000)) !== false) return;
      await fwrite(name, JSON.stringify(DB));
      var old = (await allFiles()).filter(function (n) { return n.indexOf(AUTO_PREFIX) === 0; }).sort().reverse().slice(3);
      for (var i = 0; i < old.length; i++) await fdel(old[i]);
    } catch (e) {}
  }
  var saving = Promise.resolve();
  async function doSave() {
    if (!dbOk) { toast(t('ui.err.notReady')); return false; }
    var r = await fread(DB_FILE);
    if (!r.ok) { toast(t('ui.err.save')); return false; }
    try {
      if (r.v) DB = PWR.mergeDb(JSON.parse(r.v), DB);
      await fwrite(DB_FILE, JSON.stringify(DB));
      return true;
    } catch (e) { toast(t('ui.err.save')); return false; }
  }
  function dbSave() { saving = saving.then(doSave, doSave); return saving; }
  async function putItem(item) {
    item.t = Date.now();
    var i = DB.items.findIndex(function (x) { return x.id === item.id; });
    if (i >= 0) DB.items[i] = item; else DB.items.push(item);
    var ok = await dbSave();
    await reconcile();
    return ok;
  }
  async function dropImageIfUnused(name) {
    if (name && !PWR.usedImages(DB)[name]) { await fdel(name); delete imgCache[name]; }
  }
  async function dropItem(item) {
    var imgs = [item.img].concat((item.rooms || []).map(function (r) { return r.img; })).filter(Boolean);
    var i = DB.items.findIndex(function (x) { return x.id === item.id; });
    if (i >= 0) DB.items[i] = { id: item.id, kind: item.kind, del: true, t: Date.now() };
    await dbSave();
    for (var n = 0; n < imgs.length; n++) await dropImageIfUnused(imgs[n]);
    await reconcile();
  }
  /* Номер чата, имена героев и сообщения берутся из самого чата */
  async function readChatInfo() {
    var c = await within(T.chat.current(), 5000);
    if (!c || c.id == null) return false;
    CHAT = String(c.id); CHAT_TITLE = String(c.name || '');
    NAMES.user = String((c.persona && c.persona.name) || '');
    NAMES.char = String((c.characters && c.characters[0] && c.characters[0].name) || '');
    return true;
  }
  async function readMsgs() {
    var a = null;
    try { a = await within(T.message.find({ limit: 99999 }), 6000); } catch (e) {}
    if (!a || a.length === undefined) { try { a = await within(T.message.find(), 6000); } catch (e) { a = null; } }
    if (a && a.length !== undefined) { MSGS_N = a.length; MARKS = PWR.readMarks(a, false, NAMES); }
  }
  function recompute() { E = PWR.effective(W, S.track ? MARKS : []); }
  async function loadChat() {
    var gen = ++chatGen, r = { ok: false }, known = false;
    for (var i = 0; i < 4 && !r.ok; i++) {
      try { known = await readChatInfo(); } catch (e) { known = false; }
      if (gen !== chatGen) return;
      if (known) r = await vread('pwr_worn', 'chat');
      if (gen !== chatGen) return;
      if (!r.ok) await pause(900);
    }
    chatOk = !!(r.ok && known);
    if (chatOk) {
      var st = (dbOk && DB.chats[CHAT] && DB.chats[CHAT].state) || null;
      W = PWR.normWorn(r.v || (st && st.worn));
      var lg = await vread('pwr_log', 'chat');
      if (lg.ok) LOG = Array.isArray(lg.v) ? lg.v : (st && st.log) || [];
      var ak = await vread('pwr_ask', 'chat');
      if (ak.ok && ak.v) ASK = { shown: +ak.v.shown, done: +ak.v.done }; else if (ak.ok) ASK = { shown: -1, done: -1 };
      var pl = await vread('pwr_plseen', 'chat');
      PLS = { done: pl.ok && pl.v != null ? +pl.v : -1, known: pl.ok, fresh: pl.ok && pl.v == null, toast: PLS.toast };
      var gf = await vread('pwr_gifts', 'chat');
      if (gf.ok) GIFTS = gf.v && typeof gf.v === 'object' ? gf.v : {};
      var hsn = await vread('pwr_homes', 'chat');
      if (hsn.ok) HSEEN = hsn.v && typeof hsn.v === 'object' ? hsn.v : {};
      await readMsgs();
      if (gen !== chatGen) return;
      recompute();
      await reconcile();
      checkAsk();
      checkGifts();
      checkPlaces();
      await checkPlaceLook();
    }
    syncDock();
    if (isOpen()) render(true);
  }
  /* Сверяет снимки надетого и список домов этого чата */
  async function reconcile() {
    if (!dbOk || !chatOk) return;
    var res = PWR.refreshWorn(W, DB), homes = homesNow(), bag = S.homeItems ? PWR.keptAt(DB, CHAT, 'bag').slice(0, 20) : [];
    var changed = res.changed || JSON.stringify(res.worn.home.homes) !== JSON.stringify(homes) || JSON.stringify(res.worn.home.bag) !== JSON.stringify(bag) || res.worn.names.user !== NAMES.user || res.worn.names.char !== NAMES.char;
    if (changed) {
      W = res.worn; W.home.homes = homes; W.home.bag = bag; W.names = { user: NAMES.user, char: NAMES.char };
      W = PWR.normWorn(W);
      await saveWorn(res.changed);
    } else { recompute(); syncNow(); }
  }
  function homesNow() {
    return PWR.homesOf(DB, CHAT).map(function (h) { return PWR.homeSnap(h, PWR.thingsOf(DB, CHAT, h.id), MSGS_N, S.flowers, S.homeItems ? PWR.keptAt(DB, CHAT, h.id) : []); });
  }
  /* Для PUSYA SOCIAL: что надето и где сцена, с учётом меток. В Таверне Сошла нет. */
  function syncNow() {
    if (!chatOk || !CHAT || window.__pwr_tavo) return;
    var o = PWR.socialNow(E, S), k = CHAT + JSON.stringify(o);
    if (k === lastNow) return;
    lastNow = k;
    vset('pwr_now', o, 'chat');
  }
  var stateTimer = null;
  function rememberChat() {
    if (!CHAT) return;
    DB.chats[CHAT] = { title: CHAT_TITLE, user: NAMES.user, char: NAMES.char, t: Date.now(), state: { worn: W, log: LOG } };
    clearTimeout(stateTimer);
    stateTimer = setTimeout(function () { if (dbOk) dbSave(); }, 1500);
  }
  async function saveWorn(notify) {
    recompute();
    if (!chatOk) { toast(t('ui.err.chat')); return false; }
    var ok = await vset('pwr_worn', W, 'chat');
    if (ok && notify !== false) await vset('pwr_once', 1, 'chat');
    if (!ok) toast(t('ui.err.chat')); else { rememberChat(); syncNow(); }
    return ok;
  }
  async function addLog(side, entry) {
    var last = LOG[LOG.length - 1];
    if (last && last.side === side && last.kind === entry.kind && last.id === entry.id && last.at === MSGS_N) return;
    LOG = LOG.concat([Object.assign({ side: side, at: MSGS_N, t: Date.now() }, entry)]).slice(-150);
    await vset('pwr_log', LOG, 'chat');
    rememberChat();
  }
  var setTimer = null;
  function saveSettings() {
    LS.set('pwr_settings', S);
    clearTimeout(setTimer);
    setTimer = setTimeout(function () { vset('pwr_settings', S, 'global'); }, 350);
  }

  /* Модель не поняла, где сцена: сообщение один раз и пульс на кнопке */
  function askPending() { return E.home.ask >= 0 && E.home.homes.length >= 2 && E.home.ask > ASK.done; }
  /* Подарки дому из меток */
  function giftsNow() { return S.track && E.home.homes.length ? PWR.pendingGifts(MARKS, GIFTS) : []; }
  function checkGifts() {
    var ch = false;
    giftsNow().forEach(function (m) { var k = PWR.giftKey(m); if (!GIFTS[k]) { GIFTS[k] = 1; ch = true; toast(t('ui.gift.toast', { from: m.from, name: m.name })); } });
    if (ch) vset('pwr_gifts', GIFTS, 'chat');
  }
  /* Дома и комнаты, которые описала модель: плагин спрашивает, добавлять ли */
  function placesNow() { return S.track && S.homeMarks && dbOk && E.home.on ? PWR.pendingPlaces(MARKS, HSEEN, PWR.homesOf(DB, CHAT)) : []; }
  function placeMarkText(m) { return m.kind === 'roominfo' ? t('ui.hm.roomToast', { home: m.home, name: m.name }) : t('ui.hm.toast', { name: m.name }); }
  function checkPlaces() {
    var ch = false;
    placesNow().forEach(function (m) { var k = PWR.placeKey(m); if (!HSEEN[k]) { HSEEN[k] = 1; ch = true; toast(placeMarkText(m)); } });
    if (ch) vset('pwr_homes', HSEEN, 'chat');
  }
  /* Образы, привязанные к текущему месту. Комната важнее дома. */
  function placeLooks() {
    var cur = PWR.currentHome(E.home), hm = cur && liveItem(cur.id), out = {};
    if (!hm) return null;
    var rm = (hm.rooms || []).filter(function (r) { return r.id === E.home.room; })[0];
    ['user', 'char'].forEach(function (s) {
      var id = (rm && rm.looks && rm.looks[s]) || (hm.looks && hm.looks[s]), l = id && liveItem(id);
      if (l && !(E[s].look && E[s].look.id === l.id)) out[s] = l;
    });
    return Object.keys(out).length ? out : null;
  }
  function placePending() { return !!(PLS.known && E.home.mark && E.home.mark > PLS.done && placeLooks()); }
  function placeDone() { if (E.home.mark) { PLS.done = E.home.mark; vset('pwr_plseen', PLS.done, 'chat'); } }
  async function wearPlace(ls) { for (var s in ls) await wearLook(s, ls[s]); }
  async function checkPlaceLook() {
    if (!PLS.known) return;
    /* Первый запуск в чате: метки, поставленные раньше, переодевать не должны */
    if (PLS.fresh) { PLS.fresh = false; PLS.done = E.home.mark || 0; vset('pwr_plseen', PLS.done, 'chat'); return; }
    if (!E.home.mark || E.home.mark <= PLS.done) return;
    var ls = placeLooks();
    if (!ls) { placeDone(); return; }
    if (S.placeAuto) { placeDone(); await wearPlace(ls); return; }
    if (PLS.toast !== E.home.mark) { PLS.toast = E.home.mark; toast(t('ui.place.toast')); }
  }
  /* Место выбрали вручную */
  async function placeChanged() {
    var ls = placeLooks();
    if (!ls) return;
    if (S.placeAuto) { await wearPlace(ls); render(); return; }
    openSheet({ type: 'plook', looks: ls });
  }
  function anyPending() { return askPending() || giftsNow().length > 0 || placesNow().length > 0 || placePending(); }
  function checkAsk() {
    if (askPending() && E.home.ask > ASK.shown) {
      ASK.shown = E.home.ask;
      vset('pwr_ask', ASK, 'chat');
      toast(t('ui.ask.place.toast'));
    }
  }

  /* ---------- картинки ---------- */
  function isIOS() {
    try { var n = navigator; return /iPhone|iPad|iPod/i.test(n.userAgent || '') || (n.platform === 'MacIntel' && n.maxTouchPoints > 1); } catch (e) { return false; }
  }
  function blobToData(blob) {
    return new Promise(function (res, rej) { var fr = new FileReader(); fr.onload = function () { res(String(fr.result)); }; fr.onerror = function () { rej(new Error('bad_image')); }; fr.readAsDataURL(blob); });
  }
  /* iPhone: системное окно с галереей. Вызывать прямо из нажатия, иначе iOS его не покажет */
  function readFileInput() {
    return new Promise(function (res) {
      var i = document.createElement('input');
      i.type = 'file'; i.accept = 'image/*'; i.style.display = 'none';
      function drop() { try { i.remove(); } catch (e) {} }
      i.onchange = function () {
        var f = i.files && i.files[0];
        drop();
        if (!f) return res(null);
        blobToData(f).then(res, function () { res(null); });
      };
      i.addEventListener('cancel', function () { drop(); res(null); });
      document.body.appendChild(i);
      i.click();
    });
  }
  /* Android: файл уже скопирован в Tavo, берём его по пути, а если не вышло, через tavo.file.load */
  async function importedData(f) {
    var p = String(f.path || '');
    try {
      var r = await within(fetch(p), 15000);
      if (!r.ok) throw new Error('http_' + r.status);
      var b = await within(r.blob(), 15000);
      if (!b || b.size < 100 || /^text\//.test(b.type || '')) throw new Error('empty');
      return await blobToData(b);
    } catch (e) {
      var m = p.match(/^files\/(chat|global|tmp)\/(.+)$/);
      var v = await within(T.file.load(m ? m[2] : (f.name || p), { scope: m ? m[1] : 'chat', encoding: 'base64' }), 15000);
      var b64 = String(v || '').replace(/^data:[^,]*,/, '').replace(/\s+/g, '');
      if (!b64) throw new Error('bad_image');
      return 'data:image/jpeg;base64,' + b64;
    }
  }
  async function pickImage() {
    var raw = null;
    if (!window.__pwr_tavo && T && T.file && typeof T.file.import === 'function' && !isIOS()) {
      var r = await T.file.import();
      var f = r && (r[0] || (r.files && r.files[0]) || (r.path ? r : null));
      if (!f || !f.path) return null;
      if (f.mimeType && !/^image\//.test(f.mimeType)) throw new Error('bad_image');
      raw = await importedData(f);
      var m = String(f.path).match(/^files\/(chat|global|tmp)\//);
      if (f.name) { try { Promise.resolve(T.file.delete(f.name, { scope: m ? m[1] : 'chat' })).catch(function () {}); } catch (e) {} }
    } else raw = await readFileInput();
    return raw ? shrink(raw) : null;
  }
  function shrink(dataUrl, max, quality) {
    return new Promise(function (res, rej) {
      var im = new Image();
      im.onload = function () {
        var k = Math.min(1, (max || IMG_MAX) / Math.max(im.naturalWidth, im.naturalHeight));
        var c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(im.naturalWidth * k)); c.height = Math.max(1, Math.round(im.naturalHeight * k));
        var g = c.getContext('2d');
        g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(im, 0, 0, c.width, c.height);
        res(c.toDataURL('image/jpeg', quality || IMG_QUALITY));
      };
      im.onerror = function () { rej(new Error('bad_image')); };
      im.src = dataUrl;
    });
  }
  var imgCache = {}, imgOrder = [];
  function remember(name, url) { imgCache[name] = url; imgOrder.push(name); while (imgOrder.length > 80) delete imgCache[imgOrder.shift()]; }
  async function storeImage(dataUrl) {
    var name = IMG_PREFIX + PWR.uid() + '.jpg';
    await within(T.file.save(name, dataUrl.split(',')[1], { scope: 'global', encoding: 'base64' }), 20000);
    remember(name, dataUrl);
    return name;
  }
  async function imageData(name) {
    if (imgCache[name]) return imgCache[name];
    var v = await within(T.file.load(name, { scope: 'global', encoding: 'dataUrl' }), 10000);
    if (v) remember(name, v);
    return v;
  }
  var hydrating = false;
  async function hydrate() {
    if (hydrating) return;
    hydrating = true;
    try {
      for (;;) {
        var todo = Array.prototype.slice.call(document.querySelectorAll('#pw-win img[data-f]:not([src])'));
        if (!todo.length) break;
        for (var i = 0; i < todo.length; i++) {
          var name = todo[i].getAttribute('data-f'), v = null;
          try { v = await imageData(name); } catch (e) {}
          document.querySelectorAll('#pw-win img[data-f="' + name + '"]').forEach(function (n) {
            if (v) n.src = v; else { n.removeAttribute('data-f'); n.classList.add('gone'); }
          });
        }
      }
    } finally { hydrating = false; }
  }
  function onImgError(e) {
    var im = e.target;
    if (!im || im.tagName !== 'IMG' || !im.closest || !im.closest('#pw-win') || !im.hasAttribute('data-u')) return;
    var list = PWR.imgVariants(im.getAttribute('data-u')), n = (+im.getAttribute('data-try') || 0) + 1;
    if (n < list.length) { im.setAttribute('data-try', n); im.src = list[n]; return; }
    var card = im.closest('.pw-cat');
    if (!card) { im.classList.add('gone'); return; }
    card.style.display = 'none';
    /* У части нарядов на сайте нет картинки. Такая плитка убирается из списка, и ряд добирается следующими.
       Пока не загрузилась ни одна картинка, это похоже на отсутствие сети: тогда список не трогаем. */
    var id = card.getAttribute('data-id');
    if (!id || !CAT.okSeen) return;
    CAT.bad[id] = 1;
    clearTimeout(badTimer);
    badTimer = setTimeout(function () { if (isOpen() && UI.view === 'catalog') render(); }, 250);
  }
  var badTimer = null;
  function onImgLoad(e) {
    var im = e.target;
    if (!CAT.okSeen && im && im.tagName === 'IMG' && im.hasAttribute('data-u') && im.closest && im.closest('#pw-win .pw-cat')) CAT.okSeen = true;
  }
  document.addEventListener('error', onImgError, true);
  document.addEventListener('load', onImgLoad, true);
  offs.push(function () { clearTimeout(badTimer); document.removeEventListener('error', onImgError, true); document.removeEventListener('load', onImgLoad, true); });
  function thumb(i, kind) {
    if (i && i.dataUrl) return '<img src="' + esc(i.dataUrl) + '" alt="">';
    if (i && i.img) return '<img data-f="' + esc(i.img) + '" alt="">';
    if (i && i.url) return '<img src="' + esc(i.url) + '" data-u="' + esc(i.url) + '" loading="lazy" alt="">';
    return '<span class="pw-noimg">' + (ICON[(i && i.kind) || kind] || '👗') + '</span>';
  }

  /* ---------- сеть ---------- */
  /* Если fetch упал не по таймауту, тот же запрос повторяется через XMLHttpRequest */
  function xhrFetch(url, opt, orig) {
    return new Promise(function (res, rej) {
      var x = new XMLHttpRequest(), o = opt || {}, h = o.headers || {};
      try {
        x.open(o.method || 'GET', url);
        x.responseType = 'blob';
        Object.keys(h).forEach(function (k) { x.setRequestHeader(k, h[k]); });
      } catch (e) { rej(orig || e); return; }
      if (o.signal) o.signal.addEventListener('abort', function () { x.abort(); });
      x.onload = function () {
        var b = x.response;
        res({ ok: x.status >= 200 && x.status < 300, status: x.status, blob: function () { return Promise.resolve(b); }, text: function () { return blobText(b); } });
      };
      x.onerror = function () { rej(orig || new TypeError('XHR failed')); };
      x.onabort = function () { var a = new Error('aborted'); a.name = 'AbortError'; rej(a); };
      x.send(o.body || null);
    });
  }
  function blobText(b) {
    if (b && b.text) return b.text();
    return new Promise(function (res, rej) { var fr = new FileReader(); fr.onload = function () { res(String(fr.result)); }; fr.onerror = function () { rej(new Error('bad_text')); }; fr.readAsText(b); });
  }
  async function netFetch(url, opt) {
    try { return await fetch(url, opt); }
    catch (e) { if (e && e.name === 'AbortError') throw e; return xhrFetch(url, opt, e); }
  }

  /* ---------- модель ---------- */
  function visionReady() { return !!(PWR.visionEndpoint(S.visionBase) && String(S.visionModel).trim()); }
  function authHeaders(h) { if (KEY) h.Authorization = 'Bearer ' + PWR.cleanAscii(KEY); return h; }
  function isNetError(e) { return !!e && e.name !== 'AbortError' && e.name !== 'SyntaxError' && !/^(http_|empty$|not_json$|no_cfg$|bad_image$)/.test(String(e.message || e)); }
  /* Ответ с ошибкой несёт объяснение сервиса: оно показывается человеку */
  async function readJson(res) {
    var txt = await res.text();
    if (!res.ok) {
      var err = new Error('http_' + res.status), why = '';
      try { var o = JSON.parse(txt); why = (o.error && (o.error.message || o.error)) || o.message || ''; } catch (x) {}
      err.detail = String(why).replace(/\s+/g, ' ').slice(0, 140);
      throw err;
    }
    try { return JSON.parse(txt); } catch (x) { throw new Error('not_json'); }
  }
  /* Путь, который сработал, запоминается для этого адреса и модели и пробуется первым */
  function routeKey() { return PWR.cleanAscii(S.visionBase) + '|' + String(S.visionModel).trim(); }
  function orderedRoutes() {
    var list = PWR.visionRoutes(S.visionBase, S.visionModel), saved = LS.get('pwr_vroute', null), k = saved && saved.key === routeKey() ? saved.kind : '';
    return k ? list.filter(function (r) { return r.kind === k; }).concat(list.filter(function (r) { return r.kind !== k; })) : list;
  }
  async function askVision(kind, dataUrl) {
    var ctl = new AbortController(), timer = setTimeout(function () { ctl.abort(); }, VISION_MS);
    var routes = orderedRoutes(), prompt = PWR.visionPrompt(kind, LANG), maxTok = kind === 'split' ? 3000 : 1500, first = null;
    try {
      for (var i = 0; i < routes.length; i++) {
        var r = routes[i], res;
        try {
          res = await netFetch(r.url, { method: 'POST', headers: authHeaders({ 'Content-Type': 'application/json' }), signal: ctl.signal, body: JSON.stringify(PWR.visionBody(r.kind, S.visionModel, prompt, dataUrl, maxTok)) });
        } catch (e) {
          /* Обрыв связи на этом пути: пробуется следующий. Ответ с кодом ошибки значит, что путь рабочий, и он показывается человеку */
          if (!isNetError(e)) throw e;
          first = first || e;
          continue;
        }
        var text = PWR.responseText(await readJson(res));
        if (!text.trim()) throw new Error('empty');
        LS.set('pwr_vroute', { key: routeKey(), kind: r.kind });
        return kind === 'split' ? PWR.parseSplit(text) : PWR.parseVision(text);
      }
      throw first || new TypeError('Failed to fetch');
    } finally { clearTimeout(timer); }
  }
  async function callVision(kind, dataUrl) {
    if (!visionReady()) throw new Error('no_cfg');
    if (!KEY) await loadKey(3);
    try { return await askVision(kind, dataUrl); }
    catch (e) {
      if (!isNetError(e)) throw e;
      await pause(1200);
      return askVision(kind, dataUrl);
    }
  }
  function visionError(e) {
    var m = String((e && e.message) || e), detail = (e && e.detail) || '';
    if (m === 'no_cfg') return t('ui.err.noVision');
    if (m === 'empty') return t('ui.err.empty');
    if (m === 'bad_image') return t('ui.err.badImage');
    if (m === 'not_json') return t('ui.err.address');
    if (e && e.name === 'AbortError') return t('ui.err.timeout');
    if (/^http_401|^http_403/.test(m)) return t('ui.err.key') + (detail ? ' ' + detail : '');
    if (/^http_404/.test(m)) return t('ui.err.address') + (detail ? ' ' + detail : '');
    if (/^http_429/.test(m)) return t('ui.err.limit');
    if (/^http_/.test(m)) return t('ui.err.http', { code: m.slice(5) + (detail ? ': ' + detail : '') });
    if (!KEY) return t('ui.err.noKey');
    return t('ui.err.network') + ' (' + m.slice(0, 60) + ')';
  }
  async function fetchModelList(url) {
    var ctl = new AbortController(), timer = setTimeout(function () { ctl.abort(); }, 15000);
    try { return await readJson(await netFetch(url, { headers: authHeaders({}), signal: ctl.signal })); }
    finally { clearTimeout(timer); }
  }
  async function nativeModels(url) {
    if (window.__pwr_tavo || !T.file || !T.file.save) return null;
    var n = 'pwr_models_' + Date.now() + '.json';
    try {
      await within(T.file.save(n, url, { scope: 'tmp' }), 20000);
      var o = JSON.parse(await within(T.file.load(n, { scope: 'tmp' }), 8000));
      try { Promise.resolve(T.file.delete(n, { scope: 'tmp' })).catch(function () {}); } catch (e) {}
      return o && typeof o === 'object' ? o : null;
    } catch (e) { return null; }
  }
  /* Проверка связи по шагам: показывает, на каком из них обрывается запрос. Ключ на экран не выводится. */
  function report(p, ctl, tm) {
    return p.then(function (r) { return { ok: true, code: r.status }; }, function (e) { return { ok: false, why: e && e.name === 'AbortError' ? 'timeout' : String((e && e.message) || e).slice(0, 40) }; })
      .then(function (x) { clearTimeout(tm); return x; });
  }
  function probe(fn, url, opt) {
    var ctl = new AbortController(), tm = setTimeout(function () { ctl.abort(); }, 12000);
    return report(fn(url, Object.assign({ signal: ctl.signal }, opt)), ctl, tm);
  }
  /* Tavo скачивает файл сам, без окна: так видно, закрыта сеть только окну или всему приложению */
  async function probeNative(url) {
    if (window.__pwr_tavo) return { ok: false, why: 'n/a' };
    var n = 'pwr_probe_' + Date.now() + '.txt';
    try {
      await within(T.file.save(n, url, { scope: 'tmp' }), 15000);
      var v = await within(T.file.load(n, { scope: 'tmp' }), 8000);
      try { Promise.resolve(T.file.delete(n, { scope: 'tmp' })).catch(function () {}); } catch (e) {}
      return v ? { ok: true, code: 'OK' } : { ok: false, why: 'empty' };
    } catch (e) { var full = String((e && e.message) || e); return { ok: false, why: full.slice(0, 40), full: full.replace(/\s+/g, ' ').slice(0, 160) }; }
  }
  /* Приложение само отказало плагину в сети: в Tavo у загрузки по адресу запретов нет */
  var HOST_DENY = /may not reach|not allowed|not permitted|forbidden|denied|permission|blocked|whitelist|allowlist/i;
  async function netCheck() {
    var list = PWR.modelUrls(S.visionBase)[0], post = PWR.visionEndpoint(S.visionBase), control = CAT_SITE + 'main.js';
    if (!list) { toast(t('ui.err.noBase')); return; }
    if (!KEY) await loadKey(3);
    var n = UI.net = { busy: true, rows: [], verdict: '', info: '' }, csp = [];
    function onCsp(ev) { csp.push(ev.violatedDirective + ' ' + String(ev.blockedURI).slice(0, 40)); }
    document.addEventListener('securitypolicyviolation', onCsp);
    render();
    function add(id, r) { n.rows.push({ id: id, r: r }); render(); return r; }
    function plain(u, o) { return fetch(u, o); }
    function viaXhr(u, o) { return xhrFetch(u, o); }
    var a = add('control', await probe(plain, control));
    var ax = add('xhr', await probe(viaXhr, control));
    var nv = add('native', await probeNative(control));
    var b = add('list', await probe(netFetch, list));
    var d = null, g = null, alt = null;
    if (KEY) {
      d = add('auth', await probe(netFetch, list, { headers: authHeaders({}) }));
      g = add('post', await probe(netFetch, post, { method: 'POST', headers: authHeaders({ 'Content-Type': 'application/json' }), body: '{}' }));
      /* Обычный адрес закрыт: проверяются запасные пути, по которым пойдёт описание фото */
      if (!g.ok) PWR.visionRoutes(S.visionBase, S.visionModel).slice(1).forEach(function (r) { n.rows.push({ id: 'alt_' + r.kind, url: r.url }); });
      for (var ri = 0; ri < n.rows.length; ri++) {
        var row = n.rows[ri];
        if (!row.url) continue;
        row.r = await probe(netFetch, row.url, { method: 'POST', headers: authHeaders({ 'Content-Type': 'application/json' }), body: '{}' });
        delete row.url; render();
        if (row.r.ok && !alt) alt = row.r;
      }
    }
    await pause(150);
    document.removeEventListener('securitypolicyviolation', onCsp);
    var inFrame = false;
    try { inFrame = window !== window.top; } catch (x) { inFrame = true; }
    n.info = ['origin: ' + location.origin, 'frame: ' + (inFrame ? 'yes' : 'no'), 'online: ' + navigator.onLine, 'fetch: ' + (/native code/.test(String(fetch)) ? 'native' : 'wrapped')].concat(csp.length ? ['CSP: ' + csp[0]] : []).join(' · ');
    n.busy = false;
    n.why = nv.full || '';
    n.verdict = (!a.ok && !ax.ok) ? (nv.ok ? 'window' : HOST_DENY.test(n.why) ? 'blocked' : 'phone') : !b.ok ? 'host' : !KEY ? 'nokey' : !d.ok ? 'auth' : !g.ok ? (!alt ? 'post' : (alt.code === 401 || alt.code === 403) ? 'badkey' : 'alt') : (g.code === 401 || g.code === 403) ? 'badkey' : 'ok';
    render();
  }
  function netRows() {
    var n = UI.net;
    if (!n) return '';
    var h = n.rows.length ? '<div class="pw-card">' + n.rows.filter(function (x) { return x.r; }).map(function (x) { return '<div class="pw-row"><div class="pw-lb">' + esc(t('ui.net.' + x.id)) + '</div><span class="pw-cnt ' + (x.r.ok ? 'g' : 'y') + '">' + esc(x.r.ok ? (x.r.code === 'OK' ? 'OK' : 'HTTP ' + x.r.code) : x.r.why) + '</span></div>'; }).join('') + '</div>' : '';
    if (n.busy) h += '<div class="pw-busy">' + esc(t('ui.loading')) + '</div>';
    if (n.verdict) h += '<div class="pw-hint">' + esc(n.verdict === 'blocked' ? t('ui.net.v.blocked', { why: n.why }) : t('ui.net.v.' + n.verdict)) + '</div>';
    if (n.info) h += '<div class="pw-hint"><small>' + esc(n.info) + '</small></div>';
    return h;
  }
  async function loadModels() {
    if (UI.modelsBusy) return;
    var urls = PWR.modelUrls(S.visionBase);
    if (!urls.length) { toast(t('ui.err.noBase')); return; }
    UI.modelsBusy = true; render();
    if (!KEY) await loadKey(3);
    var j = null, fail = null;
    /* Второй круг нужен для разовых сбоев связи */
    for (var round = 0; round < 2 && !j; round++) {
      fail = null;
      for (var i = 0; i < urls.length && !j; i++) { try { j = await fetchModelList(urls[i]); } catch (e) { fail = fail || e; } }
      if (!j && !isNetError(fail)) break;
      if (!j && round === 0) await pause(1000);
    }
    /* Окно не достучалось: список просит сам Tavo, ему правила браузера не мешают */
    if (!j && isNetError(fail)) j = await nativeModels(urls[0]);
    if (j) {
      var data = j.data || j.models || j, ids = [];
      if (Array.isArray(data)) data.forEach(function (m) {
        var id = (m && typeof m === 'object') ? (m.id || m.name) : m;
        if (typeof id === 'string' && id && ids.indexOf(id) < 0) ids.push(id);
      });
      UI.models = ids.sort();
      toast(ids.length ? t('ui.toast.models', { n: ids.length }) : t('ui.err.noModels'));
    } else toast(visionError(fail));
    UI.modelsBusy = false; render();
  }

  /* ---------- каталог ---------- */
  async function getText(url, ms) {
    var r = await within(netFetch(url), ms || 12000);
    if (!r.ok) throw new Error('http_' + r.status);
    return within(r.text(), ms || 12000);
  }
  /* Списки грузятся сразу и параллельно: main.js только дополняет встроенные адреса */
  async function catFetch() {
    var why = '';
    function one(b) { return getText(b + 'outfits.json').then(JSON.parse).catch(function (e) { why = why || String((e && e.message) || e); return null; }); }
    var known = CAT_SOURCES.map(one);
    var parsed = await getText(CAT_SITE + 'main.js', 6000).then(PWR.parseSources).catch(function () { return []; });
    var extra = parsed.filter(function (b) { return CAT_SOURCES.indexOf(b) < 0; });
    var lists = (await Promise.all(known.concat(extra.map(one)))).filter(Array.isArray);
    if (!lists.some(function (l) { return l.length; })) throw new Error(why || 'empty');
    var hidden = {};
    (await Promise.all(CAT_SOURCES.concat(extra, CAT_SITE).map(function (b) { return getText(b + 'deleted.txt', 6000).catch(function () { return ''; }); })))
      .forEach(function (txt) { Object.assign(hidden, PWR.parseDeleted(txt)); });
    var list = PWR.mergeCatalog(lists, hidden, CAT_SITE);
    if (!list.length) throw new Error(why || 'empty');
    return list;
  }
  async function catEnsure(force) {
    if (CAT.state === 'loading') return;
    if (!force && CAT.list && Date.now() - CAT.at < CAT_TTL) return;
    CAT.state = 'loading'; CAT.why = ''; if (isOpen()) render();
    if (!CAT.list) {
      var c = await within(fread(CAT_FILE), 3000).catch(function () { return { ok: false }; });
      if (c.ok && c.v) { try { var j = JSON.parse(c.v); if (Array.isArray(j.list) && j.list.length) { CAT.list = j.list; CAT.at = +j.at || 0; } } catch (e) {} }
      if (isOpen()) render();
      if (!force && CAT.list && Date.now() - CAT.at < CAT_TTL) { CAT.state = 'idle'; if (isOpen()) render(); return; }
    }
    try {
      var list = await catFetch();
      CAT.list = list; CAT.at = Date.now(); CAT.state = 'idle'; CAT.bad = {};
      within(fwrite(CAT_FILE, JSON.stringify({ at: CAT.at, list: list })), 20000).catch(function () {});
    } catch (e) {
      CAT.state = CAT.list ? 'stale' : 'error';
      CAT.why = String((e && e.message) || e).replace(/^http_/, 'HTTP ').slice(0, 80);
    }
    if (isOpen()) render();
  }
  function catName(c) {
    if (c.title && !/^\d+$/.test(c.title)) return c.title;
    return t('cat.' + (CAT_ORDER.indexOf(c.cat) >= 0 ? c.cat : 'other')) + ' #' + c.id;
  }
  function libByCatalog(c, owner) {
    return PWR.live(DB, 'outfit').filter(function (i) {
      return i.cid === c.id && (owner === 'common' ? !i.chat : (i.chat === CHAT && i.owner === owner));
    })[0] || null;
  }
  async function catOpen(id) {
    var c = (CAT.list || []).filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    var own = libByCatalog(c, 'user') || libByCatalog(c, 'char') || libByCatalog(c, 'common');
    var f = { type: 'cat', c: c, name: own ? own.name : catName(c), desc: own ? own.desc : '', busy: !own, err: '' };
    openSheet(f);
    if (own) return;
    try {
      var txt = PWR.cleanCatalogText(await getText(c.txt));
      if (UI.sheet === f) { f.desc = txt; f.busy = false; renderSheet(); }
    } catch (e) { if (UI.sheet === f) { f.busy = false; f.err = t('ui.err.catText'); renderSheet(); } }
  }
  async function catToItem(f, owner) {
    var desc = String(f.desc).trim();
    if (!desc) { toast(t('ui.err.needDesc')); return null; }
    var it = libByCatalog(f.c, owner) || { id: PWR.uid(), kind: 'outfit', cid: f.c.id, url: f.c.img, cat: f.c.cat, gender: f.c.gender, owner: owner === 'common' ? '' : owner, chat: owner === 'common' ? '' : CHAT };
    it.name = String(f.name).trim() || catName(f.c); it.desc = desc;
    return (await putItem(it)) ? it : null;
  }

  /* ---------- надеть и снять ---------- */
  async function wear(side, item) {
    if (!chatOk) { toast(t('ui.err.chat')); return; }
    await readMsgs();
    var k = item.kind, sn = PWR.snap(item);
    if (MULTI[k]) { if (!W[side][k].some(function (x) { return x.id === item.id; })) W[side][k].push(sn); }
    else W[side][k] = sn;
    W[side].look = null;
    W.at[side + '.' + k] = MSGS_N;
    if (await saveWorn()) {
      await addLog(side, { kind: k, id: item.id, name: item.name, desc: item.desc });
      toast(t('ui.toast.worn', { who: nameOf(side), name: item.name }));
    }
  }
  function lookPartIds(l) {
    var p = l.parts || {}, out = [];
    KINDS.forEach(function (k) { (MULTI[k] ? (p[k] || []) : (p[k] ? [p[k]] : [])).forEach(function (id) { out.push({ kind: k, id: id }); }); });
    return out;
  }
  async function wearLook(side, l) {
    if (!chatOk) { toast(t('ui.err.chat')); return; }
    await readMsgs();
    var n = 0;
    KINDS.forEach(function (k) {
      W.at[side + '.' + k] = MSGS_N;
      var p = l.parts || {};
      if (MULTI[k]) { W[side][k] = (p[k] || []).map(liveItem).filter(Boolean).map(PWR.snap); n += W[side][k].length; }
      else { var i = p[k] ? liveItem(p[k]) : null; W[side][k] = i ? PWR.snap(i) : null; if (i) n++; }
    });
    W[side].look = { id: l.id, name: l.name, n: n };
    if (await saveWorn()) {
      await addLog(side, { kind: 'look', id: l.id, name: l.name, desc: '' });
      toast(t('ui.toast.worn', { who: nameOf(side), name: l.name }));
    }
  }
  /* Где лежит вещь */
  function herePlace() { var c = PWR.currentHome(E.home); return c ? c.id : (E.home.place === 'out' ? 'bag' : ''); }
  function placeName(id) { if (id === 'bag') return t('ui.where.bag'); var h = E.home.homes.filter(function (x) { return x.id === id; })[0]; return h ? h.name : ''; }
  function isFar(i) {
    if (!S.homeItems) return false;
    var w = PWR.whereOf(i, CHAT), here = herePlace();
    return !!(w && w !== 'bag' && here && w !== here && placeName(w));
  }
  function setWhereOn(i, place) { i.where = Object.assign({}, i.where); if (place) i.where[CHAT] = place; else delete i.where[CHAT]; i.t = Date.now(); }
  /* Надеть можно всегда: плагин только предлагает перенести вещь сюда */
  function wearGuard(items, go) {
    var far = items.filter(isFar);
    if (!far.length) return go();
    var here = herePlace();
    ask(t('ui.where.ask', { name: far.map(function (i) { return i.name; }).join(', '), place: placeName(PWR.whereOf(far[0], CHAT)) }), [
      { label: t(here === 'bag' ? 'ui.where.take' : 'ui.where.move'), cls: 'main', fn: async function () { far.map(function (i) { return liveItem(i.id); }).filter(Boolean).forEach(function (i) { setWhereOn(i, here); }); await dbSave(); await reconcile(); await go(); } },
      { label: t('ui.where.anyway'), fn: go }
    ]);
  }
  function lookItems(l) { return lookPartIds(l).map(function (p) { return liveItem(p.id); }).filter(Boolean); }
  async function takeOff(side, kind, id) {
    await readMsgs();
    if (MULTI[kind]) W[side][kind] = id && id.indexOf('mark-') !== 0 ? W[side][kind].filter(function (x) { return x.id !== id; }) : [];
    else W[side][kind] = null;
    W.at[side + '.' + kind] = MSGS_N;
    W[side].look = null;
    await saveWorn();
  }
  async function setPlace(place, room) {
    await readMsgs();
    W.home.place = place; W.home.room = room || ''; W.home.all = false;
    W.at.place = MSGS_N;
    if (E.home.ask >= 0) { ASK.done = E.home.ask; vset('pwr_ask', ASK, 'chat'); }
    await saveWorn();
  }

  /* ---------- листы вещей ---------- */
  function itemSheet(i) {
    return { type: 'item', isNew: false, id: i.id, kind: i.kind, name: i.name, desc: i.desc, gender: i.gender || '', cat: i.cat || '', owner: i.chat ? i.owner : 'common', img: i.img || '', url: i.url || '', cid: i.cid || '', status: '', err: '', fav: !!i.fav, tags: PWR.normTags(i.tags), taste: i.taste || '', where: PWR.whereOf(i, CHAT), tagNew: '' };
  }
  function newItemSheet(kind, dataUrl) {
    return { type: 'item', isNew: true, id: PWR.uid(), kind: kind, name: '', desc: '', gender: UI.gender !== 'all' ? UI.gender : '', cat: '', owner: UI.owner, img: '', url: '', dataUrl: dataUrl || '', status: '', err: '', fav: false, tags: [], taste: '', where: S.homeItems ? herePlace() : '', tagNew: '' };
  }
  async function describeItem(f, dataUrl) {
    f.status = 'busy'; f.err = ''; renderSheet();
    try {
      var r = await callVision(f.kind, dataUrl);
      if (UI.sheet !== f) return;
      f.desc = r.desc; if (!f.name) f.name = r.name;
      if (f.kind === 'outfit') { if (r.style) f.cat = r.style; if (r.gender) f.gender = r.gender; }
    } catch (e) { if (UI.sheet !== f) return; f.err = visionError(e); }
    f.status = ''; renderSheet();
  }
  async function urlToData(url) {
    var r = await within(netFetch(url), 20000);
    if (!r.ok) throw new Error('http_' + r.status);
    var blob = await within(r.blob(), 20000);
    return shrink(await blobToData(blob));
  }
  function copyMeta(it, f) {
    it.fav = !!f.fav; it.tags = PWR.normTags(f.tags);
    if (f.type !== 'item') return;
    if (f.taste) it.taste = f.taste; else delete it.taste;
    if (f.where || PWR.whereOf(it, CHAT)) setWhereOn(it, f.where);
  }
  /* Звезда, теги, вкус и место у готовой вещи сохраняются сразу */
  async function syncMeta(f) { if (f.isNew) return; var it = liveItem(f.id); if (it) { copyMeta(it, f); await putItem(it); } }
  async function saveItemSheet(f) {
    var desc = String(f.desc).trim();
    if (!desc) { toast(t('ui.err.needDesc')); return null; }
    var it = liveItem(f.id) || { id: f.id };
    it.kind = f.kind;
    it.name = String(f.name).trim() || t('ui.kind.' + f.kind);
    it.desc = desc;
    it.owner = f.owner === 'common' ? '' : f.owner;
    it.chat = f.owner === 'common' ? '' : CHAT;
    try { if (f.dataUrl && !f.img) f.img = await storeImage(f.dataUrl); } catch (e) { toast(t('ui.err.save')); return null; }
    if (f.img) it.img = f.img;
    if (f.url) it.url = f.url;
    if (f.cid) it.cid = f.cid;
    if (f.kind === 'outfit') { it.gender = f.gender || ''; it.cat = f.cat || ''; }
    copyMeta(it, f);
    if (!(await putItem(it))) return null;
    f.isNew = false;
    return it;
  }

  /* ---------- образы ---------- */
  function emptyParts() { var p = {}; KINDS.forEach(function (k) { p[k] = MULTI[k] ? [] : ''; }); return p; }
  function lookSheet(l) {
    if (l) return { type: 'look', isNew: false, id: l.id, name: l.name, owner: l.chat ? l.owner : 'common', parts: JSON.parse(JSON.stringify(Object.assign(emptyParts(), l.parts || {}))), err: '', fav: !!l.fav, tags: PWR.normTags(l.tags), tagNew: '' };
    return { type: 'look', isNew: true, id: PWR.uid(), name: '', owner: UI.owner, parts: emptyParts(), err: '', fav: false, tags: [], tagNew: '' };
  }
  function addToLook(f, item) { if (MULTI[item.kind]) { if (f.parts[item.kind].indexOf(item.id) === -1) f.parts[item.kind].push(item.id); } else f.parts[item.kind] = item.id; }
  async function saveLook(f) {
    if (!lookPartIds(f).length) { toast(t('ui.err.needPart')); return null; }
    var l = liveItem(f.id) || { id: f.id, kind: 'look' };
    l.name = String(f.name).trim() || t('ui.kind.look');
    l.parts = f.parts; l.owner = f.owner === 'common' ? '' : f.owner; l.chat = f.owner === 'common' ? '' : CHAT;
    copyMeta(l, f);
    return (await putItem(l)) ? l : null;
  }

  /* ---------- дома ---------- */
  var BASE_ROLES = ['common', 'user', 'char'];
  function homeByRole(r) { return PWR.homesOf(DB, CHAT).filter(function (h) { return h.role === r; })[0] || null; }
  function roleName(r) { return r === 'common' ? t('ui.home.common') : t('ui.home.of', { name: nameOf(r) }); }
  function homeSheet(item, role) {
    var d = item ? JSON.parse(JSON.stringify(item)) : { id: PWR.uid(), kind: 'home', name: role && role !== 'other' ? roleName(role) : '', desc: '', img: '', rooms: [], role: role || 'other', chat: CHAT };
    return { type: 'home', isNew: !item, d: d, added: [], removed: [], status: '', err: '' };
  }
  function homeFromKey(key) {
    var i = liveItem(key);
    if (i) return homeSheet(i);
    return homeSheet(null, key.indexOf('role-') === 0 ? key.slice(5) : 'other');
  }
  async function describeInto(f, dataUrl, apply, kind) {
    f.status = 'busy'; f.err = ''; renderSheet();
    try {
      var r = await callVision(kind || 'room', dataUrl);
      if (UI.sheet !== f) return;
      apply(r);
    } catch (e) { if (UI.sheet !== f) return; f.err = visionError(e); }
    f.status = ''; renderSheet();
  }
  async function commitHome(f) {
    var d = f.d;
    d.name = String(d.name).trim() || (d.role !== 'other' ? roleName(d.role) : t('ui.kind.home'));
    d.desc = String(d.desc).trim();
    if (!(await putItem(d))) return false;
    f.isNew = false; f.added = [];
    for (var i = 0; i < f.removed.length; i++) await dropImageIfUnused(f.removed[i]);
    f.removed = [];
    return true;
  }
  async function cancelHome(f) { for (var i = 0; i < f.added.length; i++) await fdel(f.added[i]); f.added = []; }

  /* ---------- окно: положение и размер (Таверна) ---------- */
  function winWide() { return ST_WIN && (window.innerWidth || 0) >= WIDE_MIN; }
  function placeWin() {
    var w = $('pw-win');
    if (!w || !ST_WIN) return;
    var vw = window.innerWidth || 800, vh = window.innerHeight || 600, wide = winWide(), sz = wide ? UI.winSize : null, z = wide ? UI.winZoom : 1, g = $('pw-grip');
    if (g) g.hidden = !wide;
    w.style.width = sz ? Math.round(Math.min(Math.max(+sz.w || 0, WIN_MIN.w), vw - 8)) + 'px' : '';
    w.style.height = sz ? Math.round(Math.min(Math.max(+sz.h || 0, WIN_MIN.h), vh - 8)) + 'px' : '';
    w.style.maxHeight = sz ? 'none' : '';
    w.style.setProperty('--pw-z', String(z));
    w.classList.toggle('zoomed', z !== 1);
    var p = UI.winPos;
    w.classList.toggle('moved', !!p);
    if (!p) { w.style.left = ''; w.style.top = ''; return; }
    if (!w.classList.contains('on')) return;
    var r = w.getBoundingClientRect();
    w.style.left = Math.round(Math.max(4, Math.min(+p.x || 0, vw - r.width - 4))) + 'px';
    w.style.top = Math.round(Math.max(4, Math.min(+p.y || 0, vh - r.height - 4))) + 'px';
  }
  function saveWin() { LS.set('pwr_winpos', UI.winPos); LS.set('pwr_winsize', UI.winSize); LS.set('pwr_winzoom', UI.winZoom); }
  function resetWin() { UI.winPos = null; UI.winSize = null; UI.winZoom = 1; saveWin(); placeWin(); if (isOpen() && UI.view === 'set') render(); }
  function pinWin(w) { if (!UI.winPos) { var r = w.getBoundingClientRect(); UI.winPos = { x: Math.round(r.left), y: Math.round(r.top) }; placeWin(); } }
  function wireWin(w) {
    var hd = w.querySelector('#pw-hd'), g = w.querySelector('#pw-grip'), mv = null, rs = null;
    hd.addEventListener('pointerdown', function (e) {
      if (e.button > 0 || (e.target.closest && e.target.closest('[data-act]'))) return;
      pinWin(w);
      mv = { sx: e.clientX, sy: e.clientY, x: UI.winPos.x, y: UI.winPos.y };
      try { hd.setPointerCapture(e.pointerId); } catch (x) {}
      e.preventDefault();
    });
    hd.addEventListener('pointermove', function (e) {
      if (!mv) return;
      var r = w.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight;
      UI.winPos = { x: Math.max(4, Math.min(mv.x + e.clientX - mv.sx, vw - r.width - 4)), y: Math.max(4, Math.min(mv.y + e.clientY - mv.sy, vh - r.height - 4)) };
      placeWin();
    });
    function endMove() { if (mv) { mv = null; saveWin(); } }
    hd.addEventListener('pointerup', endMove);
    hd.addEventListener('pointercancel', endMove);
    hd.addEventListener('dblclick', function (e) { if (!(e.target.closest && e.target.closest('[data-act]'))) resetWin(); });
    g.addEventListener('pointerdown', function (e) {
      if (e.button > 0 || !winWide()) return;
      pinWin(w);
      var r = w.getBoundingClientRect();
      rs = { sx: e.clientX, sy: e.clientY, w: r.width, h: r.height };
      try { g.setPointerCapture(e.pointerId); } catch (x) {}
      e.preventDefault(); e.stopPropagation();
    });
    g.addEventListener('pointermove', function (e) {
      if (!rs) return;
      UI.winSize = { w: rs.w + e.clientX - rs.sx, h: rs.h + e.clientY - rs.sy };
      placeWin();
    });
    function endSize() {
      if (!rs) return;
      rs = null;
      var r = w.getBoundingClientRect();
      UI.winSize = { w: Math.round(r.width), h: Math.round(r.height) };
      saveWin();
    }
    g.addEventListener('pointerup', endSize);
    g.addEventListener('pointercancel', endSize);
    g.addEventListener('dblclick', function (e) { e.stopPropagation(); UI.winSize = null; saveWin(); placeWin(); });
  }

  /* ---------- окно ---------- */
  function ensureUi() {
    if ($('pw-win')) return;
    var bk = document.createElement('div'); bk.id = 'pw-back'; bk.onclick = function () { close(); };
    var w = document.createElement('div'); w.id = 'pw-win';
    w.innerHTML = '<div class="pw-hd" id="pw-hd"></div><div class="pw-body" id="pw-body"></div><div class="pw-foot" id="pw-foot"></div><div id="pw-sheet"></div>' + (ST_WIN ? '<div id="pw-grip" hidden></div>' : '');
    if (ST_WIN) { w.classList.add('st-win'); wireWin(w); }
    document.body.appendChild(bk); document.body.appendChild(w);
    w.addEventListener('click', onClick);
    w.addEventListener('input', onInput);
    w.addEventListener('change', onInput);
    ['touchstart', 'touchmove', 'mousedown', 'wheel'].forEach(function (n) { w.addEventListener(n, function (e) { e.stopPropagation(); }, { passive: true }); });
    /* Крестик закрывает прямо по касанию и не зависит от click */
    w.addEventListener('touchend', function (e) {
      if (!e.target.closest || !e.target.closest('[data-act="close"]')) return;
      if (e.cancelable) e.preventDefault();
      close();
    });
    offs.push(function () { [bk, w].forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); });
  }
  function open() {
    ensureUi(); render(); $('pw-back').classList.add('on'); $('pw-win').classList.add('on'); placeWin(); syncDock(); loadChat();
    if (UI.view === 'catalog') catEnsure(false);
    if (askPending()) { openSheet(placeSheet()); return; }
    if (giftsNow().length) { openSheet(giftSheet()); return; }
    if (placesNow().length) { openSheet(hmSheet()); return; }
    if (placePending()) { openSheet({ type: 'plook', looks: placeLooks() }); return; }
    if (UI.tour < 0 && UI.view === 'main' && !LS.get('pwr_toured', false)) maybeTour();
  }
  async function maybeTour() {
    var v = await vread('pwr_toured', 'global');
    if (v.ok && !v.v && isOpen() && !UI.sheet) { UI.tour = 0; render(); }
    else if (v.ok && v.v) LS.set('pwr_toured', true);
  }
  function endTour() { UI.tour = -1; LS.set('pwr_toured', true); vset('pwr_toured', 1, 'global'); render(); }
  function close() { var w = $('pw-win'); if (!w) return; closeSheet(); w.classList.remove('on'); $('pw-back').classList.remove('on'); syncDock(); }
  function go(view) { UI.view = view; UI.q = ''; UI.fav = false; UI.tags = []; if (view === 'set') loadAck(); render(); var b = $('pw-body'); if (b) b.scrollTop = 0; if (view === 'catalog') catEnsure(false); }

  function sw(on) { return '<span class="pw-sw' + (on ? ' on' : '') + '"></span>'; }
  function opt(act, label, small, on, extra) { return '<div class="pw-row" data-act="' + act + '"' + (extra || '') + '><div class="pw-lb">' + esc(label) + (small ? '<small>' + esc(small) + '</small>' : '') + '</div>' + sw(on) + '</div>'; }
  function chip(act, val, label, on) { return '<span class="pw-chip' + (on ? ' on' : '') + '" data-act="' + act + '" data-v="' + esc(val) + '">' + esc(label) + '</span>'; }
  function btn(act, label, cls, extra) { return '<span class="pw-btn' + (cls ? ' ' + cls : '') + '" data-act="' + act + '"' + (extra || '') + '>' + esc(label) + '</span>'; }
  function foldOpen(id) { return !!UI.open[UI.view + ':' + id]; }
  function fold(id, title, em, body, emCls) {
    var o = foldOpen(id);
    return '<div class="pw-fw"><div class="pw-fold' + (o ? ' open' : '') + '" data-act="fold" data-v="' + esc(id) + '"><b>' + esc(title) + '</b>' + (em !== '' && em != null ? '<em class="' + (emCls || '') + '">' + esc(em) + '</em>' : '') + '<i>▼</i></div>' + (o ? '<div class="pw-foldb">' + body() + '</div>' : '') + '</div>';
  }
  var TITLE = { find: 'ui.head.find', main: 'ui.title', catalog: 'ui.head.catalog', looks: 'ui.head.looks', history: 'ui.head.history', homes: 'ui.head.homes', set: 'ui.head.set', guide: 'ui.head.guide' };
  /* Фоновая перерисовка не должна отбирать поле: на телефоне от этого закрывается клавиатура, а её закрытие снова меняет размер экрана */
  function holdField(root) {
    var ae = document.activeElement, sel = '';
    if (!ae || !root || !root.contains(ae) || !/^(INPUT|TEXTAREA)$/.test(ae.tagName) || /^(file|checkbox|radio)$/.test(ae.type)) return null;
    if (ae.id) sel = '#' + ae.id;
    else ['data-q', 'data-s', 'data-f', 'data-h', 'data-sp'].some(function (a) { if (!ae.hasAttribute(a)) return false; sel = '[' + a + '="' + ae.getAttribute(a).replace(/["\\]/g, '\\$&') + '"]'; return true; });
    if (!sel) return null;
    var val = ae.value, s = null, e = null;
    try { s = ae.selectionStart; e = ae.selectionEnd; } catch (x) {}
    return function () {
      var n = root.querySelector(sel);
      if (!n || n === document.activeElement || n.tagName !== ae.tagName) return;
      if (n.value !== val) n.value = val;
      n.focus();
      try { if (s != null) n.setSelectionRange(s, e); } catch (x) {}
    };
  }
  function render(quiet) {
    if (!$('pw-win')) return;
    var v = UI.view, head, back = quiet ? holdField($('pw-win')) : null;
    if (v === 'main') {
      head = '<span class="pw-dot' + (S.on ? '' : ' off') + '"></span><b>' + esc(t('ui.title')) + '</b><span class="pw-ibtn" data-act="go" data-v="guide">❓</span><span class="pw-ibtn" data-act="go" data-v="set" data-tour="gear">⚙️</span><span class="pw-ibtn" data-act="close">✕</span>';
    } else {
      var ttl = v === 'shelf' ? ICON[UI.kind] + ' ' + t('ui.sec.' + UI.kind) : v === 'house' ? houseTitle() : t(TITLE[v]);
      head = '<span class="pw-ibtn" data-act="go" data-v="' + (v === 'house' ? 'homes' : 'main') + '">‹</span><b>' + esc(ttl) + '</b><span class="pw-ibtn" data-act="close">✕</span>';
    }
    /* Шапка не пересоздаётся без нужды, иначе нажатие на крестик может потеряться */
    var hd = $('pw-hd');
    if (hd.__html !== head) { hd.innerHTML = head; hd.__html = head; }
    $('pw-foot').textContent = v === 'catalog' ? t('ui.cat.credit') : 'PUSYA WARDROBE';
    var body = $('pw-body'), top = body.scrollTop, ae = document.activeElement, typing = !!(ae && ae.hasAttribute && ae.hasAttribute('data-q'));
    body.innerHTML = ({ find: viewFind, house: viewHouse, main: viewMain, shelf: viewShelf, looks: viewLooks, history: viewHistory, catalog: viewCatalog, homes: viewHomes, set: viewSet, guide: viewGuide }[v] || viewMain)();
    body.scrollTop = top;
    placeWin();
    if (typing) { var qi = body.querySelector('[data-q]'); if (qi) { qi.focus(); try { qi.setSelectionRange(qi.value.length, qi.value.length); } catch (e) {} } }
    applyTour();
    renderSheet();
    if (back) back();
    hydrate();
  }

  /* ---------- главное окно ---------- */
  function wornCount(side) {
    var x = E[side], n = 0;
    KINDS.forEach(function (k) { if (MULTI[k]) n += x[k].length; else if (x[k]) n++; });
    return n;
  }
  function slotRow(side, kind, x) {
    var sub = t('ui.kind.' + kind) + (x && x.mark ? ' · ' + t('ui.slot.mark', { n: x.mark }) : '');
    return '<div class="pw-row" data-act="slot" data-side="' + side + '" data-kind="' + kind + '"><span class="pw-ic">' + ICON[kind] + '</span><div class="pw-lb">' + esc(x ? x.name : t('ui.slot.none')) + '<small>' + esc(sub) + '</small></div>'
      + (x ? '<span class="pw-off" data-act="takeoff" data-side="' + side + '" data-kind="' + kind + '" data-v="' + esc(x.id) + '">✕</span>' : '') + '</div>';
  }
  function sideBody(side) {
    return function () {
      var x = E[side], h = '<div class="pw-card">';
      if (x.look) h += '<div class="pw-row" data-act="go" data-v="looks"><span class="pw-ic">✨</span><div class="pw-lb">' + esc(x.look.name) + '<small>' + esc(t('ui.kind.look')) + '</small></div></div>';
      KINDS.forEach(function (k) {
        if (MULTI[k] && x[k].length) x[k].forEach(function (i) { h += slotRow(side, k, i); });
        else if (MULTI[k]) h += slotRow(side, k, null);
        else h += slotRow(side, k, x[k]);
      });
      return h + opt('side-on', t('ui.side.send'), '', x.on, ' data-side="' + side + '"') + '</div>';
    };
  }
  function placeLabel() {
    var h = E.home;
    if (h.place === 'out') return t('ui.place.out');
    var cur = PWR.currentHome(h);
    if (!cur) return t('ui.slot.none');
    var rm = cur.rooms.filter(function (r) { return r.id === h.room; })[0];
    return cur.name + (rm ? ' · ' + rm.name : '');
  }
  function homeBody() {
    var h = E.home, out = '';
    if (!h.homes.length) return '<div class="pw-hint">' + esc(t('ui.empty.home')) + '</div><div class="pw-row2">' + btn('go', t('ui.btn.setHomes'), 'main', ' data-v="homes"') + '</div>';
    out += '<div class="pw-sub">' + esc(t('ui.room.where')) + '</div><div class="pw-chips">';
    var cur = PWR.currentHome(h);
    h.homes.forEach(function (x) { out += chip('place', x.id, x.name, !!cur && cur.id === x.id); });
    out += chip('place', 'out', t('ui.place.out'), h.place === 'out') + '</div>';
    if (cur && cur.rooms.length) {
      out += '<div class="pw-sub">' + esc(t('ui.room.title')) + '</div><div class="pw-chips">' + chip('room', '', t('ui.room.none'), !h.room && !h.all);
      cur.rooms.forEach(function (r) { out += chip('room', r.id, r.name, !h.all && h.room === r.id); });
      out += chip('room-all', '', t('ui.room.all'), h.all) + '</div>';
    }
    return out + '<div class="pw-row2">' + btn('go', t('ui.btn.setHomes'), '', ' data-v="homes"') + (cur ? btn('house', t('ui.btn.house'), '', ' data-v="' + esc(cur.id) + '"') : '') + '</div>';
  }
  function tile(act, v, ic, name, small, tour) {
    return '<div class="pw-ev" data-act="' + act + '" data-v="' + esc(v) + '"' + (tour ? ' data-tour="' + tour + '"' : '') + '><i>' + ic + '</i><span><b>' + esc(name) + '</b><small>' + esc(small) + '</small></span></div>';
  }
  function kindCount(k) { return PWR.live(DB, k).filter(function (i) { return !i.chat || i.chat === CHAT; }).length; }
  function statusLine() {
    var ms = MARKS.filter(function (m) { return m.kind !== 'place' && m.kind !== 'homeinfo' && m.kind !== 'roominfo'; }), m = S.track ? ms[ms.length - 1] : null;
    if (m) return t('ui.st.mark', { name: m.name, n: m.idx + 1 });
    return dbOk ? t('ui.st.none') : t('ui.err.notReady');
  }
  function viewMain() {
    var h = '';
    if (UI.tour >= 0) {
      var n = UI.tour, key = TOUR[n];
      h += '<div class="pw-tour"><small>' + esc(t('ui.tour.step', { n: n + 1, m: TOUR.length })) + '</small><b>' + esc(t('ui.tour.' + key + '.t')) + '</b><p>' + esc(t('ui.tour.' + key + '.d')) + '</p><div class="pw-row2">' + btn('tour-skip', t('ui.tour.skip')) + btn('tour-next', t(n + 1 < TOUR.length ? 'ui.tour.next' : 'ui.tour.done'), 'main') + '</div></div>';
    }
    h += '<div class="pw-status" data-tour="status">' + esc(statusLine()) + '</div>';
    var gp = giftsNow()[0];
    if (gp) h += '<div class="pw-status armed" data-act="gift-open">🎁 ' + esc(t('ui.gift.toast', { from: gp.from, name: gp.name })) + '</div>';
    h += placeBanner();
    h += '<div data-tour="folds" class="pw-sec">';
    ['user', 'char'].forEach(function (s) {
      var x = E[s], n = wornCount(s);
      h += fold(s, (s === 'user' ? '👤 ' : '🎭 ') + nameOf(s), x.look ? x.look.name + ' · ' + count(n) : (n ? count(n) : t('ui.slot.none')), sideBody(s));
    });
    h += '</div>';
    h += '<div data-tour="home" class="pw-sec">' + fold('home', '🏠 ' + t('ui.sec.home'), placeLabel(), homeBody) + '</div>';
    h += '<div class="pw-h5">' + esc(t('ui.sec.shelf')) + '</div><div class="pw-grid" data-tour="shelf">';
    KINDS.forEach(function (k) { h += tile('shelf', k, ICON[k], t('ui.sec.' + k), count(kindCount(k))); });
    h += tile('go', 'looks', '✨', t('ui.sec.looks'), count(PWR.live(DB, 'look').filter(function (l) { return !l.chat || l.chat === CHAT; }).length));
    h += tile('go', 'catalog', '🧵', t('ui.sec.catalog'), CAT.list ? count(CAT.list.length) : t('ui.sec.catalogHint'), 'catalog');
    h += tile('go', 'history', '🕘', t('ui.sec.history'), count(PWR.history(LOG, S.track ? MARKS : []).length));
    h += tile('split-photo', '', '📸', t('ui.sec.split'), t('ui.sec.splitHint'));
    h += tile('go', 'find', '🔍', t('ui.sec.find'), t('ui.sec.findHint'));
    h += '</div>';
    return h;
  }
  function applyTour() {
    document.querySelectorAll('#pw-win .pw-hl').forEach(function (n) { n.classList.remove('pw-hl'); });
    if (UI.tour < 0 || UI.view !== 'main') return;
    var el = document.querySelector('#pw-win [data-tour="' + TOUR[UI.tour] + '"]');
    if (el) { el.classList.add('pw-hl'); if (el.scrollIntoView) el.scrollIntoView({ block: 'nearest' }); }
  }

  /* ---------- шкаф ---------- */
  function ownerChips(act, cur) {
    return '<div class="pw-chips">' + chip(act, 'user', nameOf('user'), cur === 'user') + chip(act, 'char', nameOf('char'), cur === 'char') + chip(act, 'common', t('ui.owner.common'), cur === 'common') + '</div>';
  }
  function genderChips(act, cur) {
    return '<div class="pw-chips">' + chip(act, 'all', t('ui.cat.all'), cur === 'all') + chip(act, 'female', t('ui.cat.female'), cur === 'female') + chip(act, 'male', t('ui.cat.male'), cur === 'male') + '</div>';
  }
  function wornMark(i) {
    var marks = [];
    ['user', 'char'].forEach(function (s) {
      var v = E[s][i.kind];
      if (MULTI[i.kind] ? v.some(function (x) { return x.id === i.id; }) : (v && v.id === i.id)) marks.push(s === 'user' ? '👤' : '🎭');
    });
    return marks.join('');
  }
  function grid(items) {
    return '<div class="pw-tiles">' + items.map(function (i) {
      var m = wornMark(i), w = S.homeItems && i.kind !== 'look' ? PWR.whereOf(i, CHAT) : '', far = isFar(i);
      var sub = w && placeName(w) ? '<small>' + esc(far || w === 'bag' ? placeName(w) : t('ui.where.here')) + '</small>' : '';
      return '<div class="pw-tile' + (far ? ' far' : '') + '" data-act="' + (i.kind === 'look' ? 'look-edit' : 'item') + '" data-id="' + esc(i.id) + '"><span class="pw-tim">' + thumb(i) + (i.fav ? '<em class="fav">★</em>' : '') + (m ? '<em>' + m + '</em>' : '') + '</span><b>' + esc(i.name) + '</b>' + sub + '</div>';
    }).join('') + '</div>';
  }
  function flt() { return { q: UI.q, fav: UI.fav, tags: UI.tags }; }
  function filtering() { return !!(String(UI.q).trim() || UI.fav || UI.tags.length); }
  function filterBar(list, noTags) {
    var h = '<input data-q autocomplete="off" placeholder="' + esc(t('ui.find.ph')) + '" value="' + esc(UI.q) + '"><div class="pw-chips">' + chip('flt-fav', '', '★ ' + t('ui.find.fav'), UI.fav);
    if (!noTags) PWR.allTags(list).slice(0, 12).forEach(function (x) { h += chip('flt-tag', x, x, UI.tags.indexOf(x) !== -1); });
    return h + '</div>';
  }
  function resBox(html) { return '<div id="pw-res" class="pw-sec">' + html + '</div>'; }
  function empty(key) { return '<div class="pw-empty">' + esc(t(key)) + '</div>'; }
  function refreshResults() {
    var box = $('pw-res'), fn = { shelf: shelfRes, looks: looksRes, find: findRes, catalog: catRes }[UI.view];
    if (box && fn) { box.innerHTML = fn(); hydrate(); }
  }
  function viewShelf() {
    var k = UI.kind, h = ownerChips('owner', UI.owner);
    if (k === 'outfit') h += genderChips('gender', UI.gender);
    h += '<div class="pw-row2">' + btn('new-photo', t('ui.btn.photo'), 'main') + btn('new-text', t('ui.btn.text')) + '</div>';
    h += '<div class="pw-row2">' + btn('split-photo', '📸 ' + t('ui.sec.split')) + '</div>';
    return h + filterBar(PWR.shelf(DB, k, UI.owner, CHAT)) + resBox(shelfRes());
  }
  function shelfRes() {
    var k = UI.kind, list = PWR.shelf(DB, k, UI.owner, CHAT), h = '';
    var vis = PWR.filterItems(k === 'outfit' ? list.filter(function (i) { return UI.gender === 'all' || i.gender === UI.gender; }) : list, flt());
    if (!vis.length) return empty(list.length ? 'ui.cat.none' : 'ui.empty.shelf');
    if (k !== 'outfit' || filtering()) return grid(vis);
    MY_ORDER.concat(['']).forEach(function (c) {
      var part = vis.filter(function (i) { return c ? i.cat === c : (!i.cat || MY_ORDER.indexOf(i.cat) === -1); });
      if (part.length) h += fold('st-' + c, t(c ? 'cat.' + c : 'ui.cat.nostyle'), part.length, function () { return grid(part); });
    });
    return h;
  }
  function findAll() { return PWR.live(DB).filter(function (i) { return (KINDS.indexOf(i.kind) !== -1 || i.kind === 'look') && (!i.chat || i.chat === CHAT); }); }
  function viewFind() { return filterBar(findAll()) + resBox(findRes()); }
  function findRes() { var v = PWR.filterItems(findAll(), flt()); return v.length ? grid(v) : empty(findAll().length ? 'ui.cat.none' : 'ui.empty.shelf'); }

  /* ---------- образы ---------- */
  function viewLooks() {
    var h = ownerChips('owner', UI.owner) + '<div class="pw-row2">' + btn('look-new', t('ui.btn.newLook'), 'main') + '</div>';
    return h + filterBar(PWR.shelf(DB, 'look', UI.owner, CHAT)) + resBox(looksRes());
  }
  function looksRes() {
    var all = PWR.shelf(DB, 'look', UI.owner, CHAT), list = PWR.filterItems(all, flt()), h = '';
    if (!list.length) return empty(all.length ? 'ui.cat.none' : 'ui.empty.looks');
    list.forEach(function (l) {
      var parts = lookPartIds(l);
      h += fold('l-' + l.id, (l.fav ? '★ ' : '') + l.name, parts.length, function () {
        var b = '<div class="pw-card">' + parts.map(function (p) {
          var i = liveItem(p.id);
          return '<div class="pw-row"><span class="pw-ic">' + ICON[p.kind] + '</span><div class="pw-lb' + (i ? '' : ' bad') + '">' + esc(i ? i.name : t('ui.look.missing')) + '<small>' + esc(t('ui.kind.' + p.kind)) + '</small></div></div>';
        }).join('') + '</div>';
        return b + '<div class="pw-row2">' + btn('look-wear', t('ui.btn.wearOn', { name: nameOf('user') }), 'main', ' data-side="user" data-id="' + esc(l.id) + '"') + btn('look-wear', t('ui.btn.wearOn', { name: nameOf('char') }), 'main', ' data-side="char" data-id="' + esc(l.id) + '"') + '</div><div class="pw-row2">' + btn('look-edit', t('ui.btn.edit'), '', ' data-id="' + esc(l.id) + '"') + '</div>';
      });
    });
    return h;
  }

  /* ---------- история ---------- */
  function viewHistory() {
    HIST = PWR.history(LOG, S.track ? MARKS : []).filter(function (e) { return UI.histSide === 'all' || e.side === UI.histSide; });
    var h = '<div class="pw-chips">' + chip('hist-side', 'all', t('ui.cat.all'), UI.histSide === 'all') + chip('hist-side', 'user', nameOf('user'), UI.histSide === 'user') + chip('hist-side', 'char', nameOf('char'), UI.histSide === 'char') + '</div>';
    if (!HIST.length) return h + '<div class="pw-empty">' + esc(t('ui.log.empty')) + '</div>';
    return h + '<div class="pw-card">' + HIST.map(function (e, i) {
      var cur = e.kind !== 'look' && E[e.side][e.kind], list = MULTI[e.kind] ? (cur || []) : (cur ? [cur] : []);
      var now = list.some(function (c) { return e.hand ? c.id === e.id : c.mark === e.n; });
      var where = e.hand ? (e.n ? t('ui.log.after', { n: e.n }) : t('ui.log.start')) : '🏷 #' + e.n;
      return '<div class="pw-row" data-act="hist-open" data-i="' + i + '"><span class="pw-ic">' + ICON[e.kind] + '</span><div class="pw-lb">' + esc(e.name) + (now ? ' · ' + esc(t('ui.log.now')) : '') + '<small>' + esc(nameOf(e.side)) + '</small></div><span class="pw-cnt">' + esc(where) + '</span></div>';
    }).join('') + '</div>';
  }

  /* ---------- каталог ---------- */
  function catGrid(c) {
    var list = c.items, shown = CAT.shown[c.key] || CAT_PAGE;
    var h = '<div class="pw-tiles">' + list.slice(0, shown).map(function (x) {
      return '<div class="pw-tile pw-cat" data-act="cat-open" data-id="' + esc(x.id) + '"><span class="pw-tim">' + thumb({ url: x.img }) + (catFav(x.id) ? '<em class="fav">★</em>' : '') + '</span></div>';
    }).join('') + '</div>';
    if (list.length > shown) h += '<div class="pw-row2">' + btn('cat-more', t('ui.btn.more'), '', ' data-v="' + esc(c.key) + '"') + '</div>';
    return h;
  }
  function catFav(cid) { return liveItem('cf-' + cid); }
  function catRes() {
    if (!CAT.list) {
      if (CAT.state === 'error') return '<div class="pw-empty">' + esc(t('ui.err.catalog')) + (CAT.why ? '<br><small>' + esc(CAT.why) + '</small>' : '') + '</div><div class="pw-row2">' + btn('cat-reload', t('ui.btn.retry'), 'main') + '</div>';
      return empty('ui.loading');
    }
    var h = CAT.state === 'stale' ? '<div class="pw-hint">' + esc(t('ui.cat.stale')) + '</div>' : '';
    var q = String(UI.q).trim().toLowerCase();
    var vis = CAT.list.filter(function (c) {
      if (CAT.bad[c.id]) return false;
      if (CAT.gender !== 'all' && c.gender !== CAT.gender) return false;
      if (UI.fav && !catFav(c.id)) return false;
      return !q || (catName(c) + ' ' + t('cat.' + (CAT_ORDER.indexOf(c.cat) >= 0 ? c.cat : 'other'))).toLowerCase().indexOf(q) !== -1;
    });
    if (q || UI.fav) return vis.length ? h + catGrid({ key: 'find', items: vis }) : h + empty('ui.cat.none');
    CAT_ORDER.forEach(function (c) {
      var items = vis.filter(function (x) { return x.cat === c; });
      if (items.length) h += fold('c-' + c, t('cat.' + c), items.length, function () { return catGrid({ key: c, items: items }); });
    });
    return h;
  }
  function viewCatalog() {
    var h = '<div class="pw-chips">' + chip('cat-scope', 'common', t('ui.cat.common'), CAT.scope === 'common') + chip('cat-scope', 'chat', t('ui.cat.chat'), CAT.scope === 'chat') + '</div>';
    h += '<div class="pw-hint">' + esc(t(CAT.scope === 'common' ? 'ui.cat.hintCommon' : 'ui.cat.hintChat')) + '</div>';
    if (CAT.scope === 'chat') {
      ['user', 'char'].forEach(function (s) {
        var items = PWR.shelf(DB, 'outfit', s, CHAT).filter(function (i) { return i.cid; });
        h += fold('ch-' + s, t('ui.cat.for', { name: nameOf(s) }), items.length, function () { return items.length ? grid(items) : '<div class="pw-hint">' + esc(t('ui.cat.none')) + '</div>'; });
      });
      return h;
    }
    return h + genderChips('cat-g', CAT.gender) + filterBar([], true) + resBox(catRes());
  }

  /* ---------- дома ---------- */
  function homeFold(key, title, it, em, emCls) {
    return fold('h-' + key, title, em, function () {
      var b = '';
      if (it && it.desc) b += '<div class="pw-hint">' + esc(it.desc) + '</div>';
      var rooms = (it && it.rooms) || [];
      if (rooms.length) b += '<div class="pw-card">' + rooms.map(function (r, i) {
        return '<div class="pw-row" data-act="hroom-edit" data-v="' + esc(key) + '" data-i="' + i + '"><span class="pw-rthumb">' + thumb({ img: r.img, kind: 'room' }) + '</span><div class="pw-lb">' + esc(r.name) + '<small class="pw-one">' + esc(r.desc) + '</small></div></div>';
      }).join('') + '</div>';
      else if (it) b += '<div class="pw-hint">' + esc(t('ui.home.noRooms')) + '</div>';
      b += '<div class="pw-row2">' + btn('hroom-photo', t('ui.btn.roomPhoto'), 'main', ' data-v="' + esc(key) + '"') + btn('hroom-text', t('ui.btn.text'), '', ' data-v="' + esc(key) + '"') + '</div>';
      b += '<div class="pw-row2">' + btn('home-edit', t('ui.btn.edit'), '', ' data-v="' + esc(key) + '"') + (it ? btn('house', t('ui.btn.house'), 'main', ' data-v="' + esc(it.id) + '"') : '') + '</div>';
      return b;
    }, emCls);
  }
  function viewHomes() {
    var H = E.home, h = '<div class="pw-chips">' + chip('live', '0', t('ui.home.apart'), !H.together) + chip('live', '1', t('ui.home.together'), H.together) + '</div>';
    h += '<div class="pw-hint">' + esc(t(H.together ? 'ui.home.togetherHint' : 'ui.home.apartHint')) + '</div>';
    h += placeBanner();
    BASE_ROLES.forEach(function (r) {
      var it = homeByRole(r), isMain = r === 'common' ? H.together : !H.together;
      h += homeFold(it ? it.id : 'role-' + r, ROLE_ICON[r] + ' ' + (it ? it.name : roleName(r)), it, isMain ? t('ui.home.main') : t('ui.home.rooms', { n: ((it && it.rooms) || []).length }), isMain ? 'on' : '');
    });
    h += '<div class="pw-h5">' + esc(t('ui.home.others')) + '</div>';
    PWR.homesOf(DB, CHAT).filter(function (x) { return BASE_ROLES.indexOf(x.role) === -1; }).forEach(function (it) {
      h += homeFold(it.id, ROLE_ICON.other + ' ' + it.name, it, t('ui.home.rooms', { n: (it.rooms || []).length }));
    });
    return h + '<div class="pw-row2">' + btn('home-new', t('ui.btn.newPlace'), 'main') + '</div>';
  }

  /* ---------- обустройство дома ---------- */
  function houseRoom(hm) { var r = UI.house.room; return r && (hm.rooms || []).some(function (q) { return q.id === r; }) ? r : ''; }
  function houseTitle() { var hm = liveItem(UI.house.home); if (!hm) return t('ui.head.homes'); var rid = houseRoom(hm), rm = (hm.rooms || []).filter(function (q) { return q.id === rid; })[0]; return hm.name + (rm ? ' · ' + rm.name : ''); }
  function thingSub(q) {
    var s = t('ui.thing.' + q.type);
    if (q.from) s = t('ui.thing.from', { name: q.from });
    return s + (q.n ? ' · ' + t('ui.thing.msg', { n: q.n }) : '');
  }
  function thingRow(q) {
    var end = '';
    if (q.stored) end = '<span class="pw-cnt">' + esc(t('ui.thing.stored')) + '</span>';
    else if (q.type === 'furniture') end = '<span class="pw-cnt" data-act="thing-replace" data-id="' + esc(q.id) + '">' + esc(t('ui.btn.replace')) + '</span>';
    else if (q.type === 'decor') end = '<span class="pw-cnt" data-act="thing-store" data-id="' + esc(q.id) + '">' + esc(t('ui.btn.putAway')) + '</span>';
    else if (q.type === 'flower') { var st = PWR.flowerState(q, MSGS_N, S.flowers); end = '<span class="pw-cnt ' + (st === 'fresh' ? 'g' : 'y') + '">' + esc(t('ui.flower.' + st)) + '</span>'; }
    else end = '<span class="pw-cnt g">' + esc(t('ui.thing.gift')) + '</span>';
    return '<div class="pw-row" data-act="thing-open" data-id="' + esc(q.id) + '"><span class="pw-rthumb">' + thumb({ img: q.img, kind: q.type }) + '</span><div class="pw-lb">' + esc(q.name) + '<small class="pw-one">' + esc(thingSub(q)) + '</small></div>' + end + '</div>';
  }
  function viewHouse() {
    var hm = liveItem(UI.house.home);
    if (!hm) return empty('ui.empty.home');
    var rooms = hm.rooms || [], rid = houseRoom(hm), rm = rooms.filter(function (q) { return q.id === rid; })[0], src = rm || hm, h = '';
    var gp = giftsNow()[0];
    if (gp) h += '<div class="pw-status armed" data-act="gift-open">🎁 ' + esc(t('ui.gift.toast', { from: gp.from, name: gp.name })) + '</div>';
    if (rooms.length) h += '<div class="pw-chips">' + chip('house-room', '', t('ui.room.wholeHome'), !rid) + rooms.map(function (r) { return chip('house-room', r.id, r.name, r.id === rid); }).join('') + '</div>';
    h += '<div class="pw-h5">' + esc(t('ui.house.wear')) + '</div><div class="pw-card">';
    ['user', 'char'].forEach(function (s) {
      var id = src.looks && src.looks[s], l = id && liveItem(id);
      h += '<div class="pw-row" data-act="hlook" data-side="' + s + '"><span class="pw-ic">' + (s === 'user' ? '👤' : '🎭') + '</span><div class="pw-lb">' + esc(nameOf(s)) + '<small>' + esc(l ? l.name : t('ui.slot.none')) + '</small></div><span class="pw-cnt">' + esc(t(l ? 'ui.btn.change' : 'ui.btn.choose')) + '</span></div>';
    });
    h += '</div><div class="pw-chips">' + chip('place-mode', '0', t('ui.place.ask2'), !S.placeAuto) + chip('place-mode', '1', t('ui.place.auto'), S.placeAuto) + '</div>';
    var all = PWR.thingsOf(DB, CHAT, hm.id, true), here = all.filter(function (q) { return !q.stored && (rid ? q.room === rid : (!q.room || !rooms.some(function (r) { return r.id === q.room; }))); });
    h += '<div class="pw-h5">' + esc(t(rid ? 'ui.house.inRoom' : 'ui.house.inHome')) + '</div>';
    h += here.length ? '<div class="pw-card">' + here.map(thingRow).join('') + '</div>' : empty('ui.house.empty');
    h += '<div class="pw-chips">' + THINGS.map(function (k) { return chip('thing-new', k, '＋ ' + ICON[k] + ' ' + t('ui.thing.' + k), false); }).join('') + '</div>';
    var kept = all.filter(function (q) { return q.stored; });
    if (kept.length) h += fold('stored', '📦 ' + t('ui.house.stored'), kept.length, function () { return '<div class="pw-card">' + kept.map(thingRow).join('') + '</div>'; });
    return h;
  }
  function thingSheet(q) { return { type: 'thing', isNew: false, id: q.id, ttype: q.type, home: q.home, room: q.room || '', name: q.name, desc: q.desc, from: q.from || '', img: q.img || '', born: +q.born || 0, stored: !!q.stored, status: '', err: '' }; }
  function newThing(type, room, replaces) { return { type: 'thing', isNew: true, id: PWR.uid(), ttype: type, home: UI.house.home, room: room || '', name: '', desc: '', from: '', img: '', dataUrl: '', born: MSGS_N, stored: false, replaces: replaces || '', status: '', err: '' }; }
  function describeThing(f, d) { return describeInto(f, d, function (r) { f.desc = r.desc; if (!f.name) f.name = r.name; }, f.ttype); }
  async function saveThing(f) {
    var name = String(f.name).trim(), desc = String(f.desc).trim();
    if (!name) { toast(t('ui.err.needName')); return false; }
    try { if (f.dataUrl && !f.img) f.img = await storeImage(f.dataUrl); } catch (e) { toast(t('ui.err.save')); return false; }
    var it = liveItem(f.id) || { id: f.id, kind: 'thing', chat: CHAT };
    Object.assign(it, { type: f.ttype, home: f.home, room: f.room, name: name, desc: desc, born: f.born, stored: !!f.stored });
    if (f.img) it.img = f.img;
    if (f.from) it.from = String(f.from).trim(); else delete it.from;
    if (!(await putItem(it))) return false;
    if (f.replaces) { var old = liveItem(f.replaces); if (old) { old.stored = true; await putItem(old); } }
    f.isNew = false;
    return true;
  }
  function roomOfHome(id) { var h = liveItem(id); return (h && h.rooms) || []; }
  function roomChips(act, homeId, cur) {
    var rooms = roomOfHome(homeId);
    return rooms.length ? '<div class="pw-sub">' + esc(t('ui.room.title')) + '</div><div class="pw-chips">' + chip(act, '', t('ui.room.wholeHome'), !cur) + rooms.map(function (r) { return chip(act, r.id, r.name, r.id === cur); }).join('') + '</div>' : '';
  }
  function sheetThing(f) {
    var h = sheetHead(t(f.isNew ? 'ui.new.thing' : 'ui.edit.thing'));
    if (f.dataUrl || f.img) h += '<div class="pw-pic">' + thumb(f) + '</div>';
    h += statusHtml(f);
    if (f.isNew && !f.replaces) h += '<div class="pw-chips">' + THINGS.map(function (k) { return chip('thing-type', k, ICON[k] + ' ' + t('ui.thing.' + k), f.ttype === k); }).join('') + '</div>';
    h += field(t('ui.f.name'), '<input data-f="name" value="' + esc(f.name) + '">');
    h += field(t('ui.f.desc'), '<textarea rows="4" data-f="desc">' + esc(f.desc) + '</textarea>');
    if (f.ttype === 'gift' || f.ttype === 'flower') h += field(t('ui.f.from'), '<input data-f="from" value="' + esc(f.from) + '">');
    h += roomChips('thing-room', f.home, f.room);
    h += '<div class="pw-row2">' + btn('thing-save', t('ui.btn.save'), 'main') + ((f.dataUrl || f.img) ? btn('thing-describe', t('ui.btn.describe')) : btn('thing-photo', t('ui.btn.addPhoto'))) + '</div>';
    if (f.isNew) return h;
    var row = '';
    if (f.ttype === 'flower') row += btn('thing-fresh', t('ui.btn.fresh'));
    if (f.stored) row += btn('thing-unstore', t('ui.btn.takeOut')); else { row += f.ttype === 'furniture' ? btn('thing-replace', t('ui.btn.replace'), '', ' data-id="' + esc(f.id) + '"') : ''; row += btn('thing-store', t('ui.btn.putAway'), '', ' data-id="' + esc(f.id) + '"'); }
    h += '<div class="pw-row2">' + row + '</div><div class="pw-row2">' + btn('thing-del', t('ui.btn.delete'), 'danger') + '</div>';
    return h;
  }
  function giftSheet() {
    /* Сейчас не дома: подарок предлагается поставить в дом того, кому дарят, а не в первый попавшийся */
    var m = giftsNow()[0], here = PWR.currentHome(E.home), cur = here || giftHome(m);
    if (!m || !cur) return null;
    var r = cur.rooms.filter(function (q) { return q.name.toLowerCase() === m.room.toLowerCase(); })[0];
    return { type: 'gift', m: m, away: !here, home: cur.id, room: r ? r.id : here ? E.home.room : '', name: m.name, desc: m.desc };
  }
  function giftHome(m) {
    var hs = E.home.homes, by = function (role) { return hs.filter(function (x) { return x.role === role; })[0]; };
    if (!m) return hs[0];
    var from = String(m.from || '').trim().toLowerCase(), role = E.home.together ? 'common' : from && from === nameOf('user').toLowerCase() ? 'char' : 'user';
    return by(role) || by('common') || hs[0];
  }
  function sheetGift(f) {
    var h = sheetHead('🎁 ' + t('ui.gift.t')) + '<div class="pw-asktx">' + esc(t('ui.gift.toast', { from: f.m.from, name: f.m.name })) + '</div>';
    h += field(t('ui.f.name'), '<input data-f="name" value="' + esc(f.name) + '">') + field(t('ui.f.desc'), '<textarea rows="3" data-f="desc">' + esc(f.desc) + '</textarea>');
    if (f.away) h += '<div class="pw-hint">' + esc(t('ui.gift.away')) + '</div>';
    h += '<div class="pw-sub">' + esc(t('ui.gift.where')) + '</div><div class="pw-chips">' + E.home.homes.map(function (x) { return chip('gift-home', x.id, x.name, f.home === x.id); }).join('') + '</div>';
    h += roomChips('gift-room', f.home, f.room);
    return h + '<div class="pw-row2">' + btn('gift-no', t('ui.btn.refuse')) + btn('gift-yes', t('ui.btn.putThere'), 'main') + '</div>';
  }
  function placeBanner() {
    var m = placesNow()[0];
    return m ? '<div class="pw-status armed" data-act="hm-open">' + esc(placeMarkText(m)) + '</div>' : '';
  }
  function freeRoles() { return BASE_ROLES.filter(function (r) { return !homeByRole(r); }); }
  function hmSheet() {
    var m = placesNow()[0];
    if (!m) return null;
    return { type: 'hmark', m: m, name: m.name, desc: m.desc, role: m.kind === 'homeinfo' && freeRoles().indexOf(m.role) !== -1 ? m.role : 'other' };
  }
  function sheetHmark(f) {
    var room = f.m.kind === 'roominfo', h = sheetHead('🏠 ' + t(room ? 'ui.hm.roomT' : 'ui.hm.t')) + '<div class="pw-asktx">' + esc(t('ui.hm.q', { n: f.m.idx + 1 })) + '</div>';
    h += field(t('ui.f.name'), '<input data-f="name" value="' + esc(f.name) + '">') + field(t('ui.f.desc'), '<textarea rows="4" data-f="desc">' + esc(f.desc) + '</textarea>');
    if (room) h += '<div class="pw-sub">' + esc(t('ui.hm.inHome', { home: f.m.home })) + '</div>';
    else h += '<div class="pw-sub">' + esc(t('ui.hm.whose')) + '</div><div class="pw-chips">' + freeRoles().concat(['other']).map(function (r) { return chip('hm-role', r, r === 'other' ? t('ui.hm.other') : roleName(r), f.role === r); }).join('') + '</div>';
    return h + '<div class="pw-row2">' + btn('hm-no', t('ui.hm.no')) + btn('hm-yes', t('ui.hm.yes'), 'main') + '</div>';
  }
  function sheetPlook(f) {
    var h = sheetHead('🏠 ' + placeLabel());
    Object.keys(f.looks).forEach(function (s) { h += '<div class="pw-asktx">' + esc(t('ui.place.q', { who: nameOf(s), look: f.looks[s].name })) + '</div>'; });
    return h + '<div class="pw-row2">' + btn('plook-no', t('ui.btn.keep')) + btn('plook-yes', t('ui.btn.changeClothes'), 'main') + '</div>';
  }
  function sheetHlook(f) {
    var list = PWR.usable(DB, 'look', f.side, CHAT), cur = f.src.looks && f.src.looks[f.side];
    var h = sheetHead(t('ui.house.pick', { name: nameOf(f.side) }));
    if (!list.length) return h + empty('ui.empty.looks');
    return h + '<div class="pw-card"><div class="pw-row" data-act="hlook-set" data-id=""><span class="pw-ic">✕</span><div class="pw-lb">' + esc(t('ui.slot.none')) + '</div></div>' + list.map(function (l) { return '<div class="pw-row" data-act="hlook-set" data-id="' + esc(l.id) + '"><span class="pw-ic">' + (l.id === cur ? '✓' : '✨') + '</span><div class="pw-lb">' + esc(l.name) + '</div></div>'; }).join('') + '</div>';
  }
  /* Разбор одного фото */
  function startSplit(dataUrl) { return { type: 'split', dataUrl: dataUrl, parts: [], owner: UI.owner, look: true, lookName: '', style: '', gender: '', edit: -1, status: '', err: '', done: false }; }
  async function runSplit(f) {
    f.status = 'busy'; f.err = ''; renderSheet();
    try {
      var r = await callVision('split', f.dataUrl);
      if (UI.sheet !== f) return;
      f.parts = r.parts.map(function (p) { return Object.assign({ on: true }, p); });
      f.style = r.style; f.gender = r.gender; f.done = true;
      var o = r.parts.filter(function (p) { return p.kind === 'outfit'; })[0];
      f.lookName = o ? o.name : '';
      if (!f.parts.length) f.err = t('ui.split.none');
    } catch (e) { if (UI.sheet !== f) return; f.err = visionError(e); }
    f.status = ''; renderSheet();
  }
  function sheetSplit(f) {
    var h = sheetHead(t('ui.split.t')) + '<div class="pw-pic">' + thumb(f) + '</div>' + statusHtml(f);
    if (f.status === 'busy') return h;
    if (!f.parts.length) return h + '<div class="pw-row2">' + btn('split-retry', t('ui.btn.retry'), 'main') + '</div>';
    h += '<div class="pw-card">' + f.parts.map(function (p, i) {
      var row = '<div class="pw-row"><span class="pw-ck' + (p.on ? ' on' : '') + '" data-act="split-on" data-i="' + i + '"></span><span class="pw-ic">' + ICON[p.kind] + '</span><div class="pw-lb" data-act="split-edit" data-i="' + i + '">' + esc(p.name || t('ui.kind.' + p.kind)) + '<small class="pw-one">' + esc(p.desc) + '</small></div></div>';
      if (f.edit === i) row += '<div class="pw-foldb"><input data-sp="' + i + ':name" value="' + esc(p.name) + '"><textarea rows="4" data-sp="' + i + ':desc">' + esc(p.desc) + '</textarea></div>';
      return row;
    }).join('') + opt('split-look', t('ui.split.look'), '', f.look) + '</div>';
    if (f.look) h += '<input data-f="lookName" placeholder="' + esc(t('ui.kind.look')) + '" value="' + esc(f.lookName) + '">';
    h += '<div class="pw-sub">' + esc(t('ui.f.owner')) + '</div>' + ownerChips('f-owner', f.owner);
    return h + '<div class="pw-row2">' + btn('sheet-close', t('ui.btn.cancel')) + btn('split-save', t('ui.btn.saveN', { n: f.parts.filter(function (p) { return p.on; }).length }), 'main') + '</div>';
  }
  async function saveSplit(f) {
    var on = f.parts.filter(function (p) { return p.on; });
    if (!on.length) { toast(t('ui.err.needPart')); return; }
    var pic = await storeImage(f.dataUrl), own = f.owner === 'common' ? '' : f.owner, chat = f.owner === 'common' ? '' : CHAT, now = Date.now(), ids = emptyParts();
    on.forEach(function (p) {
      var it = { id: PWR.uid(), kind: p.kind, name: String(p.name).trim() || t('ui.kind.' + p.kind), desc: String(p.desc).trim(), owner: own, chat: chat, img: pic, t: now, fav: false, tags: [] };
      if (p.kind === 'outfit') { it.gender = f.gender || ''; it.cat = f.style || ''; }
      if (S.homeItems && herePlace()) setWhereOn(it, herePlace());
      DB.items.push(it);
      if (MULTI[p.kind]) ids[p.kind].push(it.id); else ids[p.kind] = it.id;
    });
    if (f.look) DB.items.push({ id: PWR.uid(), kind: 'look', name: String(f.lookName).trim() || on[0].name, parts: ids, owner: own, chat: chat, t: now, fav: false, tags: [] });
    if (!(await dbSave())) return;
    await reconcile();
    toast(t('ui.split.saved', { n: on.length }));
    UI.sheet = null; render();
  }
  async function loadAck() { if (window.__pwr_tavo) return; var a = await vread('pmg_wr_ack', 'chat'); ackAt = a.ok && a.v ? +a.v : 0; if (isOpen() && UI.view === 'set') render(true); }

  /* ---------- инструкция ---------- */
  var GUIDE = ['how', 'start', 'add', 'split', 'find', 'taste', 'look', 'store', 'home', 'placelook', 'house', 'kept', 'social', 'marks', 'move'];
  function viewGuide() {
    var h = '<div class="pw-status armed"><span><b>' + esc(t('ui.guide.tourT')) + '</b><br>' + esc(t('ui.guide.tourD')) + '</span></div><div class="pw-row2">' + btn('tour-start', t('ui.guide.tourBtn', { n: TOUR.length }), 'main') + '</div>';
    GUIDE.forEach(function (k) { h += fold('g-' + k, t('ui.guide.' + k + '.t'), '', function () { return '<div class="pw-tip">' + esc(t('ui.guide.' + k + '.d')) + '</div>'; }); });
    return h;
  }

  /* ---------- настройки ---------- */
  function field(label, html) { return '<label class="pw-l">' + esc(label) + '</label>' + html; }
  function viewSet() {
    var h = '';
    h += fold('remind', '📣 ' + t('ui.set.send'), S.on ? t('ui.mode.' + S.mode) : t('ui.set.off'), function () {
      var b = '<div class="pw-card">' + opt('on', t('ui.set.on'), t('ui.set.onHint'), S.on) + opt('track', t('ui.set.track'), t('ui.set.trackHint'), S.track) + '</div>';
      b += field(t('ui.set.mode'), '<select data-s="mode">' + ['always', 'every', 'change'].map(function (m) { return '<option value="' + m + '"' + (S.mode === m ? ' selected' : '') + '>' + esc(t('ui.mode.' + m)) + '</option>'; }).join('') + '</select>');
      if (S.mode === 'every') b += field(t('ui.set.every'), '<input type="number" min="2" max="50" data-s="every" value="' + S.every + '">');
      if (S.mode === 'change') b += '<div class="pw-hint">' + esc(t('ui.mode.changeHint')) + '</div>';
      b += field(t('ui.set.note'), '<input data-s="note" placeholder="' + esc(t('ui.set.notePh')) + '" value="' + esc(S.note) + '">');
      var req = S.on ? [PWR.buildBlock(E, S), S.track ? PWR.markRule(E, S) : ''].filter(Boolean).join('\n\n') : '';
      if (req) b += '<details class="pw-prev"><summary>' + esc(t('ui.preview', { n: PWR.estimateTokens(req) })) + '</summary><pre>' + esc(req) + '</pre></details>';
      return b;
    });
    h += fold('model', '🔑 ' + t('ui.set.vision'), visionReady() ? t('ui.set.ready') : t('ui.set.notSet'), function () {
      var b = '<div class="pw-hint">' + esc(t('ui.set.visionHint')) + '</div>';
      b += field(t('ui.set.base'), '<input data-s="visionBase" autocapitalize="off" spellcheck="false" placeholder="https://openrouter.ai/api/v1" value="' + esc(S.visionBase) + '">');
      b += field(t('ui.set.key'), '<input type="password" id="pw-key" autocomplete="off" value="' + esc(KEY) + '">');
      b += field(t('ui.set.model'), '<input data-s="visionModel" id="pw-model" autocapitalize="off" spellcheck="false" value="' + esc(S.visionModel) + '">');
      if (UI.models.length) b += '<select id="pw-models"><option value="">' + esc(t('ui.set.pickModel')) + '</option>' + UI.models.map(function (m) { return '<option' + (m === S.visionModel ? ' selected' : '') + '>' + esc(m) + '</option>'; }).join('') + '</select>';
      return b + '<div class="pw-row2">' + btn('models', UI.modelsBusy ? t('ui.loading') : t('ui.btn.models')) + '</div><div class="pw-row2">' + btn('net-check', t('ui.btn.netCheck')) + '</div>' + netRows();
    });
    h += fold('house', '🏠 ' + t('ui.set.house'), S.homeItems ? t('ui.set.ready') : '', function () {
      var b = '<div class="pw-card">' + opt('homeMarks', t('ui.set.homeMarks'), t('ui.set.homeMarksHint'), S.homeMarks) + opt('homeItems', t('ui.set.homeItems'), t('ui.set.homeItemsHint'), S.homeItems) + opt('placeAuto', t('ui.place.auto'), t('ui.set.placeAutoHint'), S.placeAuto) + '</div>';
      return b + field(t('ui.set.flowers'), '<input type="number" min="10" max="500" data-s="flowers" value="' + S.flowers + '">');
    });
    if (!window.__pwr_tavo) h += fold('social', '📱 ' + t('ui.set.social'), ackAt ? t('ui.social.ok') : t('ui.social.wait'), function () {
      return '<div class="pw-hint">' + esc(t(ackAt ? 'ui.social.okHint' : 'ui.social.waitHint')) + '</div><div class="pw-card">' + opt('socialClothes', t('ui.social.clothes'), t('ui.social.clothesHint'), S.socialClothes) + opt('socialHome', t('ui.social.home'), t('ui.social.homeHint'), S.socialHome) + '</div>';
    });
    h += fold('lang', '🌐 ' + t('ui.set.lang'), S.lang === 'auto' ? t('ui.lang.auto') : LANGS.filter(function (x) { return x[0] === S.lang; })[0][1], function () {
      var b = '<div class="pw-chips">' + LANGS.map(function (x) { return chip('lang', x[0], x[1] || t('ui.lang.auto'), S.lang === x[0]); }).join('') + '</div>';
      b += '<div class="pw-card">' + opt('dock', t('ui.set.dock'), '', S.dock) + '</div>';
      if (!ST_WIN) return b;
      if (winWide()) b += '<div class="pw-sub">' + esc(t('ui.set.winZoom')) + '</div><div class="pw-chips">' + [0.9, 1, 1.1, 1.2, 1.3, 1.4].map(function (z) { return chip('win-zoom', String(z), Math.round(z * 100) + '%', UI.winZoom === z); }).join('') + '</div>';
      return b + '<div class="pw-hint">' + esc(t(winWide() ? 'ui.set.winHint' : 'ui.set.winHintPhone')) + '</div><div class="pw-row2">' + btn('win-reset', t('ui.btn.winReset')) + '</div>';
    });
    h += fold('data', '💾 ' + t('ui.set.data'), '', function () {
      var b = '<div class="pw-hint">' + esc(t('ui.data.hint')) + '</div>';
      b += '<div class="pw-row2">' + btn('export', t('ui.btn.exportJson')) + btn('restore', t('ui.btn.importJson')) + '</div>';
      b += '<div class="pw-row2">' + btn('text-open', t('ui.btn.textCopy')) + '</div>';
      b += '<div class="pw-row2">' + btn('attach', t('ui.btn.attach')) + '</div>';
      b += '<div class="pw-row2">' + btn('auto', t('ui.btn.auto')) + '</div>';
      b += '<div class="pw-info"><p>' + esc(t('ui.privacy.where')) + '</p><p>' + esc(t('ui.privacy.net')) + '</p><p>' + esc(t('ui.privacy.move')) + '</p></div>';
      return b + '<div class="pw-row2">' + btn('wipe', t('ui.btn.wipe'), 'danger') + '</div>';
    });
    return h;
  }

  /* ---------- листы поверх окна ---------- */
  function openSheet(f) { UI.sheet = f; renderSheet(); }
  function closeSheet() {
    var f = UI.sheet;
    if (f && f.type === 'home' && f.added && f.added.length) cancelHome(f);
    UI.sheet = null; renderSheet();
  }
  function statusHtml(f) { return (f.status === 'busy' ? '<div class="pw-busy">' + esc(t('ui.vision.busy')) + '</div>' : '') + (f.err ? '<div class="pw-warn">' + esc(f.err) + '</div>' : ''); }
  function renderSheet() {
    var box = $('pw-sheet');
    if (!box) return;
    var f = UI.sheet;
    box.className = f ? 'on' : '';
    $('pw-win').classList.toggle('tall', !!f);
    placeWin();
    if (!f) { box.innerHTML = ''; return; }
    var top = box.firstChild && box.firstChild.scrollTop;
    box.innerHTML = '<div class="pw-sh">' + ({ split: sheetSplit, thing: sheetThing, gift: sheetGift, hmark: sheetHmark, plook: sheetPlook, hlook: sheetHlook, item: sheetItem, cat: sheetCat, look: sheetLook, pick: sheetPick, home: sheetHome, room: sheetRoom, ask: sheetAsk, place: sheetPlace, export: sheetExport, text: sheetText, attach: sheetAttach }[f.type])(f) + '</div>';
    if (top) box.firstChild.scrollTop = top;
    hydrate();
  }
  function sheetHead(title, back, extra) { return '<div class="pw-shhd"><b>' + esc(title) + '</b>' + (extra || '') + '<span class="pw-ibtn" data-act="' + (back || 'sheet-close') + '">✕</span></div>'; }
  function star(on, act) { return '<span class="pw-ibtn' + (on ? ' fav' : '') + '" data-act="' + (act || 'f-fav') + '">' + (on ? '★' : '☆') + '</span>'; }
  function tagBlock(f) {
    var pool = PWR.normTags(f.tags.concat(PWR.allTags(findAll()), String(t('ui.tags.def')).split(',')));
    return '<div class="pw-sub">' + esc(t('ui.f.tags')) + '</div><div class="pw-chips">' + pool.slice(0, 16).map(function (x) { return chip('f-tag', x, x, f.tags.indexOf(x) !== -1); }).join('') + '</div><div class="pw-row2"><div class="pw-col"><input data-f="tagNew" placeholder="' + esc(t('ui.f.tagPh')) + '" value="' + esc(f.tagNew) + '"></div>' + btn('f-tagadd', '＋') + '</div>';
  }
  function wearButtons(act) {
    return '<div class="pw-row2">' + btn(act, t('ui.btn.wearOn', { name: nameOf('user') }), 'main', ' data-side="user"') + btn(act, t('ui.btn.wearOn', { name: nameOf('char') }), 'main', ' data-side="char"') + '</div>';
  }
  function sheetItem(f) {
    var h = sheetHead(t(f.isNew ? 'ui.new.item' : 'ui.edit.item'), '', star(f.fav));
    if (f.dataUrl || f.img || f.url) h += '<div class="pw-pic">' + thumb(f) + '</div>';
    h += statusHtml(f);
    if (f.isNew) h += '<div class="pw-sub">' + esc(t('ui.f.what')) + '</div><div class="pw-chips">' + KINDS.map(function (k) { return chip('f-kind', k, ICON[k] + ' ' + t('ui.kind.' + k), f.kind === k); }).join('') + '</div>';
    h += field(t('ui.f.name'), '<input data-f="name" value="' + esc(f.name) + '">');
    h += field(t('ui.f.desc'), '<textarea rows="5" data-f="desc">' + esc(f.desc) + '</textarea>');
    h += '<div class="pw-sub">' + esc(t('ui.f.owner')) + '</div>' + ownerChips('f-owner', f.owner);
    if (f.kind === 'outfit') {
      var pick = function (key, val, opts) { return '<select data-f="' + key + '"><option value="">' + esc(t('ui.f.none')) + '</option>' + opts.map(function (o) { return '<option value="' + o[0] + '"' + (val === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select>'; };
      h += '<div class="pw-row2"><div class="pw-col">' + field(t('ui.f.gender'), pick('gender', f.gender, [['female', t('ui.cat.female')], ['male', t('ui.cat.male')]])) + '</div><div class="pw-col">' + field(t('ui.f.style'), pick('cat', f.cat, MY_ORDER.map(function (c) { return [c, t('cat.' + c)]; }))) + '</div></div>';
    }
    h += '<div class="pw-sub">' + esc(t('ui.taste.t', { name: nameOf('char') })) + '</div><div class="pw-chips">' + chip('f-taste', 'love', '♥ ' + t('ui.taste.love'), f.taste === 'love') + chip('f-taste', '', t('ui.taste.none'), !f.taste) + chip('f-taste', 'hate', '✕ ' + t('ui.taste.hate'), f.taste === 'hate') + '</div>';
    h += tagBlock(f);
    if (S.homeItems && E.home.homes.length) h += '<div class="pw-sub">' + esc(t('ui.where.t')) + '</div><div class="pw-chips">' + chip('f-where', '', t('ui.where.none'), !f.where) + E.home.homes.map(function (x) { return chip('f-where', x.id, x.name, f.where === x.id); }).join('') + chip('f-where', 'bag', t('ui.where.bag'), f.where === 'bag') + '</div>';
    h += wearButtons('item-wear');
    h += '<div class="pw-row2">' + btn('item-save', t('ui.btn.save')) + btn('item-tolook', t('ui.btn.toLook')) + '</div>';
    h += '<div class="pw-row2">' + ((f.dataUrl || f.img || f.url) ? btn('item-describe', t('ui.btn.describe')) : btn('item-photo', t('ui.btn.addPhoto'))) + (f.isNew ? '' : btn('item-del', t('ui.btn.delete'), 'danger')) + '</div>';
    return h;
  }
  function sheetCat(f) {
    var h = sheetHead(t('ui.cat.item'), '', star(!!catFav(f.c.id), 'cat-fav')) + '<div class="pw-pic">' + thumb({ url: f.c.img }) + '</div>';
    if (f.busy) h += '<div class="pw-busy">' + esc(t('ui.loading')) + '</div>';
    if (f.err) h += '<div class="pw-warn">' + esc(f.err) + '</div>';
    h += field(t('ui.f.name'), '<input data-f="name" value="' + esc(f.name) + '">');
    h += field(t('ui.f.desc'), '<textarea rows="5" data-f="desc">' + esc(f.desc) + '</textarea>');
    h += wearButtons('cat-wear');
    return h + '<div class="pw-row2">' + btn('cat-save', t('ui.btn.toChat'), '', ' data-v="' + (UI.owner === 'char' ? 'char' : 'user') + '"') + btn('cat-save', t('ui.btn.toCommon'), '', ' data-v="common"') + '</div>';
  }
  function sheetLook(f) {
    var h = sheetHead(t(f.isNew ? 'ui.new.look' : 'ui.edit.look'), '', star(f.fav)) + (f.err ? '<div class="pw-warn">' + esc(f.err) + '</div>' : '');
    h += field(t('ui.f.name'), '<input data-f="name" value="' + esc(f.name) + '">');
    h += '<div class="pw-sub">' + esc(t('ui.f.owner')) + '</div>' + ownerChips('f-owner', f.owner) + '<div class="pw-card">';
    KINDS.forEach(function (k) {
      var ids = MULTI[k] ? f.parts[k] : (f.parts[k] ? [f.parts[k]] : []);
      ids.forEach(function (id) {
        var i = liveItem(id);
        h += '<div class="pw-row"><span class="pw-ic">' + ICON[k] + '</span><div class="pw-lb' + (i ? '' : ' bad') + '">' + esc(i ? i.name : t('ui.look.missing')) + '<small>' + esc(t('ui.kind.' + k)) + '</small></div><span class="pw-off" data-act="part-del" data-kind="' + k + '" data-v="' + esc(id) + '">✕</span></div>';
      });
      if (MULTI[k] || !ids.length) h += '<div class="pw-row" data-act="part-add" data-kind="' + k + '"><span class="pw-ic">＋</span><div class="pw-lb">' + esc(t('ui.kind.' + k)) + '<small>' + esc(t('ui.look.pick')) + '</small></div></div>';
    });
    h += '</div>' + tagBlock(f) + wearButtons('look-sheet-wear') + '<div class="pw-row2">' + btn('look-save', t('ui.btn.save')) + (f.isNew ? '' : btn('look-del', t('ui.btn.delete'), 'danger')) + '</div>';
    return h;
  }
  function sheetPick(f) {
    var list = PWR.usable(DB, f.kind, f.parent.owner === 'common' ? '' : f.parent.owner, CHAT);
    var h = sheetHead(t('ui.sec.' + f.kind), 'pick-back');
    if (!list.length) return h + '<div class="pw-empty">' + esc(t('ui.empty.shelf')) + '</div>';
    return h + '<div class="pw-tiles">' + list.map(function (i) { return '<div class="pw-tile" data-act="pick-item" data-id="' + esc(i.id) + '"><span class="pw-tim">' + thumb(i) + '</span><b>' + esc(i.name) + '</b></div>'; }).join('') + '</div>';
  }
  function sheetHome(f) {
    var d = f.d, h = sheetHead(t(f.isNew ? 'ui.new.home' : 'ui.edit.home'));
    if (d.img) h += '<div class="pw-pic">' + thumb(d) + '</div>';
    h += statusHtml(f);
    h += field(t('ui.f.name'), '<input data-h="name" placeholder="' + esc(t('ui.f.homePh')) + '" value="' + esc(d.name) + '">');
    h += field(t('ui.f.homeDesc'), '<textarea rows="3" data-h="desc">' + esc(d.desc) + '</textarea>');
    h += '<div class="pw-row2">' + btn('home-photo', t(d.img ? 'ui.btn.newPhoto' : 'ui.btn.homePhoto')) + '</div>';
    h += '<div class="pw-row2">' + btn('home-save', t('ui.btn.save'), 'main') + (f.isNew || BASE_ROLES.indexOf(d.role) !== -1 ? '' : btn('home-del', t('ui.btn.delete'), 'danger')) + '</div>';
    return h;
  }
  function sheetRoom(f) {
    var h = sheetHead(t(f.isNew ? 'ui.new.room' : 'ui.edit.room'), 'room-back');
    if (f.dataUrl || f.img) h += '<div class="pw-pic">' + thumb(f) + '</div>';
    h += statusHtml(f);
    h += field(t('ui.f.name'), '<input data-f="name" placeholder="' + esc(t('ui.f.roomPh')) + '" value="' + esc(f.name) + '">');
    h += field(t('ui.f.desc'), '<textarea rows="5" data-f="desc">' + esc(f.desc) + '</textarea>');
    h += '<div class="pw-row2">' + btn('room-done', t('ui.btn.done'), 'main') + ((f.dataUrl || f.img) ? btn('room-describe', t('ui.btn.describe')) : btn('room-addphoto', t('ui.btn.addPhoto'))) + '</div>';
    if (!f.isNew) h += '<div class="pw-row2">' + btn('room-del', t('ui.btn.delete'), 'danger') + '</div>';
    return h;
  }
  function sheetAsk(f) {
    return sheetHead(f.title || t('ui.ask.title'), 'ask-no') + '<div class="pw-asktx">' + esc(f.text) + '</div>'
      + f.btns.map(function (b, i) { return '<div class="pw-row2">' + btn('ask-do', b.label, b.cls || '', ' data-i="' + i + '"') + '</div>'; }).join('')
      + '<div class="pw-row2">' + btn('ask-no', t('ui.btn.cancel')) + '</div>';
  }
  function ask(text, btns, title) { var prev = UI.sheet; openSheet({ type: 'ask', text: text, btns: btns, title: title, prev: prev }); }
  function placeSheet() { var c = PWR.currentHome(E.home); return { type: 'place', home: E.home.place === 'out' ? 'out' : (c ? c.id : ''), room: E.home.room }; }
  function sheetPlace(f) {
    var homes = E.home.homes, h = sheetHead('🏠 ' + t('ui.ask.place.t')) + '<div class="pw-hint">' + esc(t('ui.ask.place.d')) + '</div><div class="pw-grid">';
    homes.forEach(function (x) { h += '<div class="pw-ev' + (f.home === x.id ? ' on' : '') + '" data-act="pl-home" data-v="' + esc(x.id) + '"><i>' + (ROLE_ICON[x.role] || ROLE_ICON.other) + '</i><span><b>' + esc(x.name) + '</b></span></div>'; });
    h += '<div class="pw-ev' + (f.home === 'out' ? ' on' : '') + '" data-act="pl-home" data-v="out"><i>🚶</i><span><b>' + esc(t('ui.place.out')) + '</b></span></div></div>';
    var cur = homes.filter(function (x) { return x.id === f.home; })[0];
    if (cur && cur.rooms.length) h += '<div class="pw-sub">' + esc(t('ui.room.title')) + '</div><div class="pw-chips">' + cur.rooms.map(function (r) { return chip('pl-room', r.id, r.name, f.room === r.id); }).join('') + '</div>';
    return h + '<div class="pw-row2">' + btn('pl-save', t('ui.btn.remember'), f.home ? 'main' : '') + btn('pl-later', t('ui.btn.later')) + '</div>';
  }
  function backupBase() { return { app: 'pusya-wardrobe', v: 2, chats: DB.chats, settings: S }; }
  function exportSizes() {
    var items = PWR.live(DB), json = JSON.stringify(Object.assign(backupBase(), { items: PWR.stripPhotos(items) })).length;
    var photos = Object.keys(PWR.usedImages(DB)).length, kb = Math.ceil(json / 1024);
    return { photos: photos, none: kb, full: kb + photos * PHOTO_KB };
  }
  function sizeLabel(kb) { return kb >= 1024 ? t('ui.size.mb', { n: (kb / 1024).toFixed(1) }) : t('ui.size.kb', { n: kb }); }
  function sheetExport() {
    var s = exportSizes(), row = function (act, title, size, text) { return '<div class="pw-choice" data-act="' + act + '"><div class="pw-chh"><b>' + esc(title) + '</b><em>≈ ' + esc(sizeLabel(size)) + '</em></div><p>' + esc(text) + '</p></div>'; };
    return sheetHead(t('ui.btn.exportJson')) + row('exp-full', t('ui.exp.full'), s.full, t('ui.exp.fullD')) + row('exp-lite', t('ui.exp.lite'), s.none, t('ui.exp.liteD')) + '<div class="pw-hint">' + esc(t('ui.exp.note')) + '</div>';
  }
  function sheetText(f) {
    return sheetHead(t('ui.btn.textCopy')) + '<div class="pw-hint">' + esc(t('ui.text.hint')) + '</div><textarea rows="9" data-f="text">' + esc(f.text) + '</textarea><div class="pw-row2">' + btn('text-import', t('ui.btn.importText'), 'main') + '</div>';
  }
  function sheetAttach(f) {
    var h = sheetHead(t('ui.btn.attach')) + '<div class="pw-hint">' + esc(t('ui.attach.hint')) + '</div>';
    if (!f.list.length) return h + '<div class="pw-empty">' + esc(t('ui.attach.none')) + '</div>';
    return h + '<div class="pw-card">' + f.list.map(function (c, i) {
      return '<div class="pw-row" data-act="attach-do" data-i="' + i + '"><div class="pw-lb">' + esc(c.title || c.char || c.id) + '<small>' + esc([c.user, c.char].filter(Boolean).join(' · ')) + '</small></div><span class="pw-cnt">' + esc(count(c.n)) + '</span></div>';
    }).join('') + '</div>';
  }

  /* ---------- копии ---------- */
  async function doExport(withPhotos) {
    if (!dbOk) { toast(t('ui.err.notReady')); return; }
    var items = PWR.live(DB), copy = backupBase();
    if (withPhotos) {
      var images = {}, names = Object.keys(PWR.usedImages(DB));
      for (var i = 0; i < names.length; i++) { try { var d = await imageData(names[i]); if (d) images[names[i]] = await shrink(d, BACKUP_MAX, BACKUP_QUALITY); } catch (e) {} }
      copy.items = items; copy.images = images;
    } else copy.items = PWR.stripPhotos(items);
    await T.file.export('pusya-wardrobe-' + PWR.dayStamp() + (withPhotos ? '' : '-text') + '.json', JSON.stringify(copy));
  }
  async function restoreImages(copy) {
    var imgs = copy.images || {}, names = Object.keys(imgs);
    for (var i = 0; i < names.length; i++) {
      if (names[i].indexOf(IMG_PREFIX) !== 0 || !/^data:image\//.test(String(imgs[names[i]]))) continue;
      try { await T.file.save(names[i], String(imgs[names[i]]).split(',')[1], { scope: 'global', encoding: 'base64' }); } catch (e) {}
    }
  }
  function offerCopy(copy) {
    if (!copy || copy.app !== 'pusya-wardrobe' || !Array.isArray(copy.items)) { toast(t('ui.err.badCopy')); return; }
    var done = async function () { await dbSave(); await loadChat(); toast(t('ui.toast.restored')); render(); };
    ask(t('ui.ask.restore', { file: copy.items.length, have: PWR.live(DB).length }), [
      { label: t('ui.btn.merge'), cls: 'main', fn: async function () { await restoreImages(copy); DB = PWR.mergeDb(DB, { items: copy.items, chats: copy.chats }); await done(); } },
      { label: t('ui.btn.replace'), cls: 'danger', fn: async function () {
        await restoreImages(copy);
        var now = Date.now(), inFile = {};
        copy.items.forEach(function (i) { inFile[i.id] = 1; });
        var gone = PWR.live(DB).filter(function (i) { return !inFile[i.id]; }).map(function (i) { return { id: i.id, kind: i.kind, del: true, t: now }; });
        DB = PWR.mergeDb(DB, { items: gone.concat(copy.items.map(function (i) { return Object.assign({}, i, { t: now }); })), chats: copy.chats });
        if (copy.settings) { S = PWR.settings(copy.settings); LANG = langOf(S.lang); saveSettings(); }
        await done();
      } }
    ]);
  }
  async function restoreCopy() {
    if (!dbOk) { toast(t('ui.err.notReady')); return; }
    var r = await T.file.import({ extensions: ['json'], scope: 'tmp' });
    if (!r || !r.length) return;
    var copy;
    try { copy = JSON.parse(await T.file.load(r[0].path)); } catch (e) { toast(t('ui.err.badCopy')); return; }
    offerCopy(copy);
  }
  async function restoreAuto() {
    if (!dbOk) { toast(t('ui.err.notReady')); return; }
    var names = [];
    try { names = (await allFiles()).filter(function (n) { return n.indexOf(AUTO_PREFIX) === 0; }).sort().reverse(); } catch (e) { toast(t('ui.err.save')); return; }
    if (!names.length) { toast(t('ui.toast.noAuto')); return; }
    ask(t('ui.ask.auto'), names.map(function (n) {
      return { label: n.replace(AUTO_PREFIX, '').replace('.json', '').replace(/^(\d{4})(\d\d)(\d\d)$/, '$3.$2.$1'), fn: async function () {
        var r = await fread(n);
        if (!r.ok || !r.v) { toast(t('ui.err.save')); return; }
        var old = PWR.normDb(JSON.parse(r.v)), have = {};
        DB.items.forEach(function (i) { have[i.id] = 1; });
        DB = PWR.mergeDb(DB, { items: old.items.filter(function (i) { return !have[i.id]; }) });
        await dbSave(); await reconcile(); toast(t('ui.toast.restored')); render();
      } };
    }));
  }
  async function attachChat(c) {
    var now = Date.now();
    DB.items.forEach(function (i) {
      if (!i.del && i.chat === c.id) { i.chat = CHAT; i.t = now; }
      if (!i.del && i.where && i.where[c.id]) { i.where[CHAT] = i.where[c.id]; delete i.where[c.id]; i.t = now; }
    });
    var from = DB.chats[c.id];
    if (from && from.state) {
      var worn = PWR.normWorn(from.state.worn);
      worn.at = {}; W = worn; LOG = from.state.log || [];
      await vset('pwr_log', LOG, 'chat');
    }
    await dbSave(); await reconcile(); await saveWorn(); toast(t('ui.toast.restored'));
  }
  function wipeAll() {
    ask(t('ui.ask.wipe'), [{ label: t('ui.btn.wipeYes'), cls: 'danger', fn: async function () {
      try {
        var names = (await allFiles()).filter(function (n) { return n.indexOf('pwr_') === 0; });
        for (var i = 0; i < names.length; i++) await fdel(names[i]);
      } catch (e) { toast(t('ui.err.save')); return; }
      for (var a = 0; a < GLOBAL_VARS.length; a++) await vdel(GLOBAL_VARS[a], 'global');
      for (var b = 0; b < CHAT_VARS.length; b++) await vdel(CHAT_VARS[b], 'chat');
      clearTimeout(stateTimer);
      LS.wipe(); imgCache = {}; imgOrder = []; UI.winPos = null; UI.winSize = null; UI.winZoom = 1; placeWin(); KEY = ''; CAT.list = null; LOG = []; ASK = { shown: -1, done: -1 }; PLS = { done: -1, known: false, toast: -1 }; GIFTS = {}; HSEEN = {}; lastNow = '';
      DB = PWR.emptyDb(); W = PWR.normWorn(null); S = PWR.settings(null); LANG = langOf(S.lang); UI.models = []; recompute();
      toast(t('ui.toast.wiped')); render();
    } }]);
  }

  /* ---------- ввод и нажатия ---------- */
  function onInput(e) {
    var el = e.target, f = UI.sheet;
    if (el.hasAttribute('data-q')) { UI.q = el.value; delete CAT.shown.find; refreshResults(); return; }
    if (f && f.type === 'split' && el.hasAttribute('data-sp')) { var sp = el.getAttribute('data-sp').split(':'); f.parts[+sp[0]][sp[1]] = el.value; return; }
    if (el.id === 'pw-key') { KEY = el.value.trim(); saveKey(); return; }
    if (el.id === 'pw-models') { if (el.value) { S.visionModel = el.value; saveSettings(); var m = $('pw-model'); if (m) m.value = el.value; } return; }
    if (el.hasAttribute('data-s')) {
      var k = el.getAttribute('data-s'), old = S[k];
      S[k] = el.value;
      if (k === 'every') S.every = PWR.settings(S).every;
      if (k === 'flowers') S.flowers = PWR.settings(S).flowers;
      saveSettings();
      if (k === 'mode' && old !== el.value) render();
      return;
    }
    if (f && el.hasAttribute('data-f')) { f[el.getAttribute('data-f')] = el.value; return; }
    if (f && f.type === 'home' && el.hasAttribute('data-h')) f.d[el.getAttribute('data-h')] = el.value;
  }
  var busyAct = false, FREE_ACT = { close: 1, go: 1, fold: 1, 'sheet-close': 1 };
  /* act стартует прямо в нажатии: без этого iOS не откроет галерею */
  function onClick(e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    e.stopPropagation();
    var a = el.getAttribute('data-act'), free = !!FREE_ACT[a];
    if (busyAct && !free) return;
    if (!free) busyAct = true;
    act(a, el)
      .catch(function (err) { var f = UI.sheet; if (f && f.type !== 'ask') { f.err = visionError(err); f.status = ''; renderSheet(); } else toast(t('ui.err.save')); })
      .then(function () { if (!free) busyAct = false; });
  }
  function startRoom(parent, dataUrl) { return { type: 'room', isNew: true, parent: parent, id: PWR.uid(), name: '', desc: '', img: '', dataUrl: dataUrl || '', status: '', err: '' }; }
  function describeRoom(f, d) { return describeInto(f, d, function (r) { f.desc = r.desc; if (!f.name) f.name = r.name; }); }
  async function act(a, el) {
    var f = UI.sheet, side = el.getAttribute('data-side'), kind = el.getAttribute('data-kind'), v = el.getAttribute('data-v'), id = el.getAttribute('data-id'), it;
    switch (a) {
      case 'close': close(); return;
      case 'go': go(v); return;
      case 'fold': { var key = UI.view + ':' + v; UI.open[key] = !UI.open[key]; render(); return; }
      case 'shelf': UI.kind = v; go('shelf'); return;
      case 'owner': UI.owner = v; render(); return;
      case 'gender': UI.gender = v; render(); return;
      case 'on': S.on = !S.on; saveSettings(); render(); return;
      case 'win-zoom': UI.winZoom = +v || 1; saveWin(); render(); return;
      case 'win-reset': resetWin(); return;
      case 'homeItems': S.homeItems = !S.homeItems; saveSettings(); await reconcile(); render(); return;
      case 'placeAuto': S.placeAuto = !S.placeAuto; saveSettings(); render(); return;
      case 'homeMarks': S.homeMarks = !S.homeMarks; saveSettings(); syncDock(); render(); return;
      case 'socialClothes': S.socialClothes = !S.socialClothes; saveSettings(); syncNow(); render(); return;
      case 'socialHome': S.socialHome = !S.socialHome; saveSettings(); syncNow(); render(); return;
      case 'track': S.track = !S.track; saveSettings(); recompute(); render(); return;
      case 'dock': S.dock = !S.dock; saveSettings(); syncDock(); render(); return;
      case 'lang': S.lang = v; LANG = langOf(v); saveSettings(); syncDock(); render(); return;
      case 'side-on': W[side].on = !W[side].on; await saveWorn(); render(); return;
      case 'slot': UI.owner = side; UI.kind = kind; go('shelf'); return;
      case 'takeoff': await takeOff(side, kind, v); render(); return;
      case 'place': await setPlace(v, ''); render(); await placeChanged(); return;
      case 'room': await setPlace(PWR.currentHome(E.home).id, v); render(); await placeChanged(); return;
      case 'room-all': W.home.all = !W.home.all; await saveWorn(); render(); return;
      case 'tour-next': if (UI.tour + 1 < TOUR.length) { UI.tour++; render(); } else endTour(); return;
      case 'tour-skip': endTour(); return;
      case 'tour-start': UI.view = 'main'; UI.tour = 0; UI.open = {}; render(); return;
      /* вещи */
      case 'new-photo': {
        busyAct = false;
        var pic = await pickImage();
        if (!pic) return;
        var fn = newItemSheet(UI.kind, pic); openSheet(fn); describeItem(fn, pic); return;
      }
      case 'new-text': openSheet(newItemSheet(UI.kind, '')); return;
      case 'item': it = findItem(id); if (it) openSheet(itemSheet(it)); return;
      case 'f-kind': {
        f.kind = v; f.desc = ''; f.name = '';
        renderSheet();
        if (f.dataUrl) describeItem(f, f.dataUrl);
        return;
      }
      case 'f-owner': f.owner = v; renderSheet(); return;
      case 'item-photo': { busyAct = false; var p = await pickImage(); if (!p) return; f.dataUrl = p; describeItem(f, p); return; }
      case 'item-describe': { var src = f.dataUrl || (f.img ? await imageData(f.img) : await urlToData(f.url)); describeItem(f, src); return; }
      case 'item-save': if (await saveItemSheet(f)) { toast(t('ui.toast.saved')); closeSheet(); render(); } return;
      case 'item-wear': { var sv = await saveItemSheet(f); if (sv) await wearGuard([sv], async function () { await wear(side, sv); UI.sheet = null; render(); }); return; }
      case 'item-tolook': {
        var sl = await saveItemSheet(f);
        if (sl) { var nl = lookSheet(null); nl.owner = f.owner; addToLook(nl, sl); UI.view = 'looks'; render(); openSheet(nl); }
        return;
      }
      case 'item-del': {
        var target = findItem(f.id);
        ask(t('ui.ask.delete', { name: target ? target.name : '' }), [{ label: t('ui.btn.delete'), cls: 'danger', fn: async function () { if (target) await dropItem(target); UI.sheet = null; render(); } }]);
        return;
      }
      case 'sheet-close': closeSheet(); render(); return;
      /* образы */
      case 'look-new': openSheet(lookSheet(null)); return;
      case 'look-edit': it = findItem(id); if (it) openSheet(lookSheet(it)); return;
      case 'look-wear': { var lw = findItem(id); if (lw) await wearGuard(lookItems(lw), async function () { await wearLook(side, lw); render(); }); return; }
      case 'look-save': if (await saveLook(f)) { toast(t('ui.toast.saved')); closeSheet(); render(); } return;
      case 'look-sheet-wear': { var ls = await saveLook(f); if (ls) await wearGuard(lookItems(ls), async function () { await wearLook(side, ls); UI.sheet = null; render(); }); return; }
      case 'look-del': {
        var lk = findItem(f.id);
        ask(t('ui.ask.delete', { name: f.name }), [{ label: t('ui.btn.delete'), cls: 'danger', fn: async function () { if (lk) await dropItem(lk); UI.sheet = null; render(); } }]);
        return;
      }
      case 'part-add': openSheet({ type: 'pick', kind: kind, parent: f }); return;
      case 'part-del': if (MULTI[kind]) f.parts[kind] = f.parts[kind].filter(function (x) { return x !== v; }); else f.parts[kind] = ''; renderSheet(); return;
      case 'pick-item': it = liveItem(id); if (it) addToLook(f.parent, it); UI.sheet = f.parent; renderSheet(); return;
      case 'pick-back': UI.sheet = f.parent; renderSheet(); return;
      /* история */
      case 'hist-side': UI.histSide = v; render(); return;
      case 'hist-open': {
        var he = HIST[+el.getAttribute('data-i')];
        if (!he) return;
        var known = he.id ? liveItem(he.id) : null;
        if (known) { openSheet(known.kind === 'look' ? lookSheet(known) : itemSheet(known)); return; }
        if (he.kind === 'look') return;
        var nf = newItemSheet(he.kind, ''); nf.name = he.name; nf.desc = he.desc; nf.owner = he.side; nf.gender = '';
        openSheet(nf); return;
      }
      /* каталог */
      case 'cat-g': CAT.gender = v; CAT.shown = {}; render(); return;
      case 'cat-scope': CAT.scope = v; render(); return;
      case 'cat-more': CAT.shown[v] = (CAT.shown[v] || CAT_PAGE) + CAT_PAGE * 2; render(); return;
      case 'cat-reload': CAT.state = 'idle'; await catEnsure(true); return;
      case 'cat-open': await catOpen(id); return;
      case 'cat-fav': { var cf = catFav(f.c.id); if (cf) await dropItem(cf); else await putItem({ id: 'cf-' + f.c.id, kind: 'catfav', cid: f.c.id }); renderSheet(); refreshResults(); return; }
      /* поиск и метаданные */
      case 'flt-fav': UI.fav = !UI.fav; render(); return;
      case 'flt-tag': { var ti = UI.tags.indexOf(v); if (ti >= 0) UI.tags.splice(ti, 1); else UI.tags.push(v); render(); return; }
      case 'f-fav': f.fav = !f.fav; await syncMeta(f); renderSheet(); return;
      case 'f-taste': f.taste = v; await syncMeta(f); renderSheet(); return;
      case 'f-where': f.where = v; await syncMeta(f); renderSheet(); return;
      case 'f-tag': { var fi = f.tags.indexOf(v); if (fi >= 0) f.tags.splice(fi, 1); else f.tags.push(v); await syncMeta(f); renderSheet(); return; }
      case 'f-tagadd': { var nt = String(f.tagNew || '').trim(); if (!nt) return; f.tags = PWR.normTags(f.tags.concat(nt.split(','))); f.tagNew = ''; await syncMeta(f); renderSheet(); return; }
      /* разбор фото */
      case 'split-photo': {
        busyAct = false;
        var sp0 = await pickImage();
        if (!sp0) return;
        var sf = startSplit(sp0); openSheet(sf); runSplit(sf); return;
      }
      case 'split-retry': runSplit(f); return;
      case 'split-on': { var so = f.parts[+el.getAttribute('data-i')]; so.on = !so.on; renderSheet(); return; }
      case 'split-edit': { var se = +el.getAttribute('data-i'); f.edit = f.edit === se ? -1 : se; renderSheet(); return; }
      case 'split-look': f.look = !f.look; renderSheet(); return;
      case 'split-save': await saveSplit(f); return;
      /* обустройство */
      case 'house': UI.house = { home: v, room: E.home.place === v ? E.home.room : '' }; go('house'); return;
      case 'house-room': UI.house.room = v; render(); return;
      case 'place-mode': S.placeAuto = v === '1'; saveSettings(); render(); return;
      case 'hlook': {
        var hh = liveItem(UI.house.home), hrid = hh ? houseRoom(hh) : '';
        if (hh) openSheet({ type: 'hlook', side: side, src: (hrid && hh.rooms.filter(function (q) { return q.id === hrid; })[0]) || hh });
        return;
      }
      case 'hlook-set': {
        var hs = liveItem(UI.house.home);
        if (hs) { var hrd = houseRoom(hs), tg = (hrd && hs.rooms.filter(function (q) { return q.id === hrd; })[0]) || hs; tg.looks = Object.assign({}, tg.looks); if (id) tg.looks[f.side] = id; else delete tg.looks[f.side]; await putItem(hs); }
        UI.sheet = null; render(); return;
      }
      case 'thing-new': openSheet(newThing(v, UI.house.room)); return;
      case 'thing-open': it = findItem(id); if (it) openSheet(thingSheet(it)); return;
      case 'thing-type': f.ttype = v; renderSheet(); return;
      case 'thing-room': f.room = v; renderSheet(); return;
      case 'thing-photo': { busyAct = false; var tp = await pickImage(); if (!tp) return; f.dataUrl = tp; describeThing(f, tp); return; }
      case 'thing-describe': describeThing(f, f.dataUrl || await imageData(f.img)); return;
      case 'thing-save': if (await saveThing(f)) { toast(t('ui.toast.saved')); UI.sheet = null; render(); } return;
      case 'thing-replace': it = liveItem(id); if (it) openSheet(newThing(it.type, it.room, it.id)); return;
      case 'thing-store': it = liveItem(id); if (it) { it.stored = true; await putItem(it); UI.sheet = null; render(); } return;
      case 'thing-unstore': f.stored = false; if (await saveThing(f)) { UI.sheet = null; render(); } return;
      case 'thing-fresh': f.born = MSGS_N; if (await saveThing(f)) { toast(t('ui.toast.saved')); UI.sheet = null; render(); } return;
      case 'thing-del': {
        var td = findItem(f.id);
        ask(t('ui.ask.delete', { name: f.name }), [{ label: t('ui.btn.delete'), cls: 'danger', fn: async function () { if (td) await dropItem(td); UI.sheet = null; render(); } }]);
        return;
      }
      case 'gift-open': { var gs = giftSheet(); if (gs) openSheet(gs); return; }
      case 'gift-home': f.home = v; f.room = ''; renderSheet(); return;
      case 'gift-room': f.room = v; renderSheet(); return;
      case 'gift-yes': case 'gift-no': {
        if (a === 'gift-yes') {
          var gn = String(f.name).trim() || f.m.name;
          await putItem({ id: PWR.uid(), kind: 'thing', type: PWR.giftType(f.m), chat: CHAT, home: f.home, room: f.room, name: gn, desc: String(f.desc).trim(), from: f.m.from, born: MSGS_N, n: f.m.idx + 1, stored: false });
          toast(t('ui.toast.saved'));
        }
        GIFTS[PWR.giftKey(f.m)] = 2;
        await vset('pwr_gifts', GIFTS, 'chat');
        UI.sheet = giftsNow().length ? giftSheet() : placesNow().length ? hmSheet() : placePending() ? { type: 'plook', looks: placeLooks() } : null;
        syncDock(); render(); return;
      }
      case 'hm-open': { var hs0 = hmSheet(); if (hs0) openSheet(hs0); return; }
      case 'hm-role': f.role = v; renderSheet(); return;
      case 'hm-yes': case 'hm-no': {
        if (a === 'hm-yes') {
          var hn = String(f.name).trim() || f.m.name, hd = String(f.desc).trim(), newHome = '', newRoom = '', okH = false;
          /* Свежая метка значит, что сцена сейчас там */
          var fresh = f.m.idx >= MSGS_N - 4;
          if (f.m.kind === 'roominfo') {
            var host = PWR.homesOf(DB, CHAT).filter(function (x) { return String(x.name).toLowerCase() === f.m.home.toLowerCase(); })[0];
            if (host) {
              var cp = JSON.parse(JSON.stringify(host));
              newHome = cp.id; newRoom = PWR.uid();
              cp.rooms = (cp.rooms || []).concat([{ id: newRoom, name: hn, desc: hd, img: '' }]);
              okH = await putItem(cp);
            }
          } else {
            newHome = PWR.uid();
            okH = await putItem({ id: newHome, kind: 'home', name: hn, desc: hd, img: '', rooms: [], role: freeRoles().indexOf(f.role) !== -1 ? f.role : 'other', chat: CHAT });
          }
          if (!okH) return;
          toast(t('ui.toast.saved'));
          if (fresh && (f.m.kind === 'homeinfo' || !E.home.place || E.home.place === newHome)) await setPlace(newHome, newRoom);
        }
        HSEEN[PWR.placeKey(f.m)] = 2;
        await vset('pwr_homes', HSEEN, 'chat');
        UI.sheet = placesNow().length ? hmSheet() : giftsNow().length ? giftSheet() : placePending() ? { type: 'plook', looks: placeLooks() } : null;
        syncDock(); render(); return;
      }
      case 'plook-yes': { var pk = f.looks; placeDone(); UI.sheet = null; await wearPlace(pk); syncDock(); render(); return; }
      case 'plook-no': placeDone(); UI.sheet = null; syncDock(); render(); return;
      case 'cat-save': if (await catToItem(f, v)) { toast(t('ui.toast.saved')); closeSheet(); render(); } return;
      case 'cat-wear': { var ci = await catToItem(f, side); if (ci) { await wear(side, ci); closeSheet(); render(); } return; }
      /* дома */
      case 'live': await readMsgs(); W.home.together = v === '1'; W.home.place = ''; W.home.room = ''; W.at.place = MSGS_N; await saveWorn(); render(); return;
      case 'home-new': openSheet(homeSheet(null, 'other')); return;
      case 'home-edit': openSheet(homeFromKey(v)); return;
      case 'hroom-text': { var h1 = homeFromKey(v); h1.quick = true; openSheet(startRoom(h1, '')); return; }
      case 'hroom-photo': {
        busyAct = false;
        var hp0 = await pickImage();
        if (!hp0) return;
        var h2 = homeFromKey(v); h2.quick = true;
        var rf0 = startRoom(h2, hp0); openSheet(rf0); describeRoom(rf0, hp0); return;
      }
      case 'hroom-edit': {
        var h3 = homeFromKey(v), r0 = h3.d.rooms[+el.getAttribute('data-i')];
        h3.quick = true;
        if (r0) openSheet({ type: 'room', isNew: false, parent: h3, id: r0.id, name: r0.name, desc: r0.desc, img: r0.img || '', status: '', err: '' });
        return;
      }
      case 'home-photo': {
        busyAct = false;
        var hp = await pickImage();
        if (!hp) return;
        var nm = await storeImage(hp);
        if (f.d.img) f.removed.push(f.d.img);
        f.d.img = nm; f.added.push(nm);
        describeInto(f, hp, function (r) { f.d.desc = r.desc; if (!f.d.name) f.d.name = r.name; });
        return;
      }
      case 'home-save': {
        var wasNew = f.isNew;
        if (await commitHome(f)) {
          /* Новый дом сразу раскрыт: под описанием видны кнопки для комнат */
          if (wasNew && UI.view === 'homes') UI.open['homes:h-' + f.d.id] = true;
          toast(t('ui.toast.saved')); UI.sheet = null; render();
        }
        return;
      }
      case 'home-del': {
        var hd = findItem(f.d.id);
        ask(t('ui.ask.delete', { name: f.d.name }), [{ label: t('ui.btn.delete'), cls: 'danger', fn: async function () { var stuff = PWR.thingsOf(DB, CHAT, f.d.id, true); for (var si = 0; si < stuff.length; si++) await dropItem(stuff[si]); if (hd) await dropItem(hd); await cancelHome(f); UI.sheet = null; render(); } }]);
        return;
      }
      case 'room-addphoto': { busyAct = false; var ap = await pickImage(); if (!ap) return; f.dataUrl = ap; describeRoom(f, ap); return; }
      case 'room-describe': describeRoom(f, f.dataUrl || await imageData(f.img)); return;
      case 'room-back': { if (f.parent.quick) { UI.sheet = null; render(); } else { UI.sheet = f.parent; renderSheet(); } return; }
      case 'room-done': {
        var nameR = String(f.name).trim(), descR = String(f.desc).trim();
        if (!nameR || !descR) { toast(t('ui.err.needRoom')); return; }
        if (f.dataUrl && !f.img) { f.img = await storeImage(f.dataUrl); f.parent.added.push(f.img); }
        var room = { id: f.id, name: nameR, desc: descR, img: f.img || '' }, ix = f.parent.d.rooms.findIndex(function (q) { return q.id === f.id; });
        if (ix >= 0) f.parent.d.rooms[ix] = Object.assign({}, f.parent.d.rooms[ix], room); else f.parent.d.rooms.push(room);
        if (f.parent.quick) { await commitHome(f.parent); UI.sheet = null; render(); } else { UI.sheet = f.parent; renderSheet(); }
        return;
      }
      case 'room-del': {
        var pr = f.parent, ri = pr.d.rooms.findIndex(function (q) { return q.id === f.id; });
        if (ri >= 0) { if (pr.d.rooms[ri].img) pr.removed.push(pr.d.rooms[ri].img); pr.d.rooms.splice(ri, 1); }
        if (pr.quick) { await commitHome(pr); UI.sheet = null; render(); } else { UI.sheet = pr; renderSheet(); }
        return;
      }
      /* вопрос о месте */
      case 'pl-home': f.home = v; f.room = ''; renderSheet(); return;
      case 'pl-room': f.room = v; renderSheet(); return;
      case 'pl-save': if (!f.home) return; await setPlace(f.home, f.room); UI.sheet = null; syncDock(); render(); await placeChanged(); return;
      case 'pl-later': ASK.done = E.home.ask; vset('pwr_ask', ASK, 'chat'); UI.sheet = null; syncDock(); render(); return;
      /* общие */
      case 'ask-no': UI.sheet = f.prev || null; renderSheet(); return;
      case 'ask-do': { var b = f.btns[+el.getAttribute('data-i')]; UI.sheet = f.prev || null; renderSheet(); await b.fn(); return; }
      case 'models': await loadModels(); return;
      case 'net-check': await netCheck(); return;
      case 'export': openSheet({ type: 'export' }); return;
      case 'exp-full': closeSheet(); await doExport(true); return;
      case 'exp-lite': closeSheet(); await doExport(false); return;
      case 'restore': await restoreCopy(); return;
      case 'text-open': openSheet({ type: 'text', text: JSON.stringify(Object.assign(backupBase(), { items: PWR.stripPhotos(PWR.live(DB)) })) }); return;
      case 'text-import': { var cp; try { cp = JSON.parse(f.text); } catch (e) { toast(t('ui.err.badCopy')); return; } UI.sheet = null; renderSheet(); offerCopy(cp); return; }
      case 'attach': openSheet({ type: 'attach', list: PWR.otherChats(DB, CHAT) }); return;
      case 'attach-do': { var ct = f.list[+el.getAttribute('data-i')]; UI.sheet = null; await attachChat(ct); render(); return; }
      case 'auto': await restoreAuto(); return;
      case 'wipe': wipeAll(); return;
    }
  }

  /* ---------- плавающая кнопка ---------- */
  function cssInset(n) { try { var v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(n)); return isFinite(v) ? v : 0; } catch (e) { return 0; } }
  function insets() {
    var z = { topBar: 0, topSafe: 0, bottomInput: 0, bottomSafe: 0 };
    try { if (T && T.ui && typeof T.ui.getInsets === 'function') { var i = T.ui.getInsets() || {}; Object.keys(z).forEach(function (k) { if (+i[k] > 0) z[k] = +i[k]; }); } } catch (e) {}
    if (!z.topBar) z.topBar = cssInset('--tavo-inset-top-bar');
    if (!z.topSafe) z.topSafe = cssInset('--tavo-inset-top-safe');
    if (!z.bottomInput) z.bottomInput = cssInset('--tavo-inset-bottom-input');
    if (!z.bottomSafe) z.bottomSafe = cssInset('--tavo-inset-bottom-safe');
    return z;
  }
  var DOCK = 48;
  function bounds() {
    var vw = window.innerWidth || 360, vh = window.innerHeight || 640, ins = insets();
    var top = Math.max(ins.topBar, ins.topSafe) + 6, bottom = vh - Math.max(ins.bottomInput, ins.bottomSafe) - DOCK - 12;
    if (bottom < top) bottom = top;
    return { minX: 4, maxX: Math.max(4, vw - DOCK - 4), minY: top, maxY: bottom };
  }
  function clamp(x, y) { var b = bounds(); return { x: Math.max(b.minX, Math.min(b.maxX, x)), y: Math.max(b.minY, Math.min(b.maxY, y)) }; }
  function placeDock() {
    var ic = $('pw-dock'); if (!ic) return;
    var b = bounds(), p = UI.dockpos;
    var q = (p && p.x != null && p.y != null) ? clamp(+p.x, +p.y) : clamp(b.maxX - 6, b.maxY - 240);
    ic.style.left = q.x + 'px'; ic.style.top = q.y + 'px';
  }
  function syncDock() {
    var ic = $('pw-dock'); if (!ic) return;
    ic.style.display = (S.dock && !isOpen()) ? 'flex' : 'none';
    ic.classList.toggle('armed', anyPending());
    ic.title = t('ui.title');
  }
  function ensureDock() {
    if ($('pw-dock')) return;
    var ic = document.createElement('div'); ic.id = 'pw-dock'; ic.innerHTML = MIRROR;
    document.body.appendChild(ic);
    var drag = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;
    function savePos() { var r = ic.getBoundingClientRect(); UI.dockpos = { x: Math.round(r.left), y: Math.round(r.top) }; LS.set('pwr_dockpos', UI.dockpos); vset('pwr_dockpos', UI.dockpos, 'global'); }
    function down(e) { drag = true; moved = false; var p = e.touches ? e.touches[0] : e; var r = ic.getBoundingClientRect(); ox = r.left; oy = r.top; sx = p.clientX; sy = p.clientY; ic.style.cursor = 'grabbing'; }
    function move(e) {
      if (!drag) return;
      var p = e.touches ? e.touches[0] : e, dx = p.clientX - sx, dy = p.clientY - sy;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
      if (moved) { var q = clamp(ox + dx, oy + dy); ic.style.left = q.x + 'px'; ic.style.top = q.y + 'px'; }
      if (e.cancelable) e.preventDefault();
    }
    function up(e) { if (!drag) return; drag = false; ic.style.cursor = 'grab'; if (e && e.type === 'touchend' && e.cancelable) e.preventDefault(); if (moved) savePos(); else open(); }
    ic.addEventListener('touchstart', down, { passive: true });
    ic.addEventListener('touchmove', move, { passive: false });
    ic.addEventListener('touchend', up);
    ic.addEventListener('mousedown', function (e) { if (!e.touches) down(e); });
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    offs.push(function () { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); if (ic.parentNode) ic.parentNode.removeChild(ic); });
    placeDock(); syncDock();
  }

  /* ---------- связь с entry.js ---------- */
  var seen = {};
  function onHost(name, fn) {
    var h = function (d) { var at = d && d.at; if (at) { if (seen[at]) return; seen[at] = 1; } fn(d); };
    try { if (T && T.plugin && typeof T.plugin.on === 'function') { var off = T.plugin.on(name, h); if (typeof off === 'function') offs.push(off); } } catch (e) {}
    var wh = function (e) { h(e && e.detail); };
    window.addEventListener(name, wh);
    offs.push(function () { window.removeEventListener(name, wh); });
  }
  var rt = null;
  function soon() { clearTimeout(rt); rt = setTimeout(loadChat, 250); }
  onHost('pusya-wr:open', function () { if (isOpen()) close(); else open(); });
  onHost('pusya-wr:refresh', soon);
  if (I18N && typeof I18N.onChange === 'function') { try { var oi = I18N.onChange(function () { LANG = langOf(S.lang); syncDock(); if (isOpen()) render(true); }); if (typeof oi === 'function') offs.push(oi); } catch (e) {} }
  try { if (T && T.ui && typeof T.ui.onInsetsChanged === 'function') { var oc = T.ui.onInsetsChanged(function () { placeDock(); }); if (typeof oc === 'function') offs.push(oc); } } catch (e) {}
  /* Настройки зависят только от того, широкое ли окно Таверны. Клавиатура телефона тоже меняет размер экрана, перерисовывать на каждое изменение нельзя */
  var wasWide = winWide();
  var onRs = function () { placeDock(); placeWin(); var wd = winWide(); if (wd === wasWide) return; wasWide = wd; if (isOpen() && UI.view === 'set') render(true); };
  window.addEventListener('resize', onRs);
  offs.push(function () { window.removeEventListener('resize', onRs); });
  var onVis = function () { if (!document.hidden) loadChat(); };
  document.addEventListener('visibilitychange', onVis);
  offs.push(function () { document.removeEventListener('visibilitychange', onVis); });
  window.addEventListener('pagehide', function () { destroy(); });

  function destroy() { offs.forEach(function (f) { try { f(); } catch (e) {} }); offs = []; }
  window.__pwr_panel = {
    destroy: destroy, open: open, close: close, refresh: soon,
    resetWin: resetWin,
    resetDock: function () { UI.dockpos = null; LS.set('pwr_dockpos', null); vset('pwr_dockpos', null, 'global'); placeDock(); }
  };

  function boot() { ensureDock(); setTimeout(placeDock, 300); setTimeout(placeDock, 1200); }
  if (document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
  (async function () {
    if (!T) return;
    try { await loadGlobal(); } catch (e) {}
    try { await loadChat(); } catch (e) {}
    try { await loadDb(); } catch (e) {}
  })();
})();
