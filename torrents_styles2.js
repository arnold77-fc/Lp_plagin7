(function () {
  'use strict';

  Lampa.Platform.tv();

  const config = {
    version: '2.0.5',
    name: 'Torrent Styles MOD',
    pluginId: 'torrent_styles_mod'
  };

  const TH = {
    seeds: { low: 5, good: 10, high: 20 },
    bitrate: { high: 50, veryHigh: 100 },
    size: { mid: 50, high: 100, top: 200 },
    debounce: 30
  };

  const styles = {
    '.torrent-item__bitrate > span, .torrent-item__seeds > span, .torrent-item__grabs > span, .torrent-item__size': {
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'min-height': '1.7em',
      'padding': '0.15em 0.45em',
      'border-radius': '0.5em',
      'font-weight': '700',
      'font-size': '0.9em',
      'white-space': 'nowrap',
      'font-variant-numeric': 'tabular-nums',
      'box-sizing': 'border-box'
    },
    '.torrent-item__bitrate, .torrent-item__grabs, .torrent-item__seeds': {
      'margin-right': '0.55em'
    },

    /* Сиды */
    '.torrent-item__seeds > span': {
      'color': '#5cd4b0',
      'background-color': 'rgba(92,212,176,0.14)',
      'border': '0.15em solid rgba(92,212,176,0.9)',
      'box-shadow': '0 0 0.75em rgba(92,212,176,0.28)'
    },
    '.torrent-item__seeds > span.low-seeds': {
      'color': '#ff5f6d',
      'background-color': 'rgba(255,95,109,0.14)',
      'border': '0.15em solid rgba(255,95,109,0.82)',
      'box-shadow': '0 0 0.65em rgba(255,95,109,0.26)',
      'text-shadow': '0 0 0.25em rgba(255,95,109,0.25)'
    },
    '.torrent-item__seeds > span.good-seeds': {
      'color': '#43cea2',
      'background-color': 'rgba(67,206,162,0.16)',
      'border': '0.15em solid rgba(67,206,162,0.92)',
      'box-shadow': '0 0 0.9em rgba(67,206,162,0.34)'
    },
    '.torrent-item__seeds > span.high-seeds': {
      'color': '#ffc371',
      'background': 'linear-gradient(135deg, rgba(255,195,113,0.28), rgba(67,206,162,0.10))',
      'border': '0.15em solid rgba(255,195,113,0.92)',
      'box-shadow': '0 0 0.95em rgba(255,195,113,0.38)',
      'text-shadow': '0 0 0.25em rgba(255,195,113,0.25)'
    },

    /* Личеры */
    '.torrent-item__grabs > span': {
      'color': '#4db6ff',
      'background-color': 'rgba(77,182,255,0.12)',
      'border': '0.15em solid rgba(77,182,255,0.82)',
      'box-shadow': '0 0 0.35em rgba(77,182,255,0.16)'
    },
    '.torrent-item__grabs > span.high-grabs': {
      'color': '#4db6ff',
      'background': 'linear-gradient(135deg, rgba(77,182,255,0.18), rgba(52,152,219,0.10))',
      'border': '0.15em solid rgba(77,182,255,0.92)',
      'box-shadow': '0 0 0.55em rgba(77,182,255,0.22)'
    },

    /* Битрейт */
    '.torrent-item__bitrate > span': {
      'color': '#5cd4b0',
      'background-color': 'rgba(67,206,162,0.10)',
      'border': '0.15em solid rgba(92,212,176,0.78)',
      'box-shadow': '0 0 0.45em rgba(92,212,176,0.20)'
    },
    '.torrent-item__bitrate > span.high-bitrate': {
      'color': '#ffc371',
      'background': 'linear-gradient(135deg, rgba(255,195,113,0.28), rgba(67,206,162,0.10))',
      'border': '0.15em solid rgba(255,195,113,0.92)',
      'box-shadow': '0 0 0.95em rgba(255,195,113,0.38)',
      'text-shadow': '0 0 0.25em rgba(255,195,113,0.25)'
    },
    '.torrent-item__bitrate > span.very-high-bitrate': {
      'color': '#ff5f6d',
      'background': 'linear-gradient(135deg, rgba(255,95,109,0.28), rgba(67,206,162,0.08))',
      'border': '0.15em solid rgba(255,95,109,0.92)',
      'box-shadow': '0 0 1.05em rgba(255,95,109,0.40)',
      'text-shadow': '0 0 0.25em rgba(255,95,109,0.25)'
    },

    /* Размер */
    '.torrent-item__size': {
      'color': '#5cd4b0',
      'background-color': 'rgba(92,212,176,0.12)',
      'border': '0.15em solid rgba(92,212,176,0.82)',
      'box-shadow': '0 0 0.7em rgba(92,212,176,0.26)',
      'font-weight': '700'
    },
    '.torrent-item__size.mid-size': {
      'color': '#43cea2',
      'background-color': 'rgba(67,206,162,0.16)',
      'border': '0.15em solid rgba(67,206,162,0.92)',
      'box-shadow': '0 0 0.9em rgba(67,206,162,0.34)'
    },
    '.torrent-item__size.high-size': {
      'color': '#ffc371',
      'background': 'linear-gradient(135deg, rgba(255,195,113,0.28), rgba(67,206,162,0.10))',
      'border': '0.15em solid rgba(255,195,113,0.95)',
      'box-shadow': '0 0 1.05em rgba(255,195,113,0.40)',
      'text-shadow': '0 0 0.25em rgba(255,195,113,0.22)'
    },
    '.torrent-item__size.top-size': {
      'color': '#ff5f6d',
      'background': 'linear-gradient(135deg, rgba(255,95,109,0.28), rgba(67,206,162,0.08))',
      'border': '0.15em solid rgba(255,95,109,0.95)',
      'box-shadow': '0 0 1.1em rgba(255,95,109,0.42)',
      'text-shadow': '0 0 0.25em rgba(255,95,109,0.22)'
    },

  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .torrent-item__bitrate > span,
      .torrent-item__seeds > span,
      .torrent-item__grabs > span,
      .torrent-item__size {
        min-height: 1.5em !important;
        padding: 0.1em 0.35em !important;
        font-size: 0.85em !important;
      }
      .torrent-item__bitrate,
      .torrent-item__grabs,
      .torrent-item__seeds {
        margin-right: 0.4em !important;
      }
    }
  `;

  function injectStyles() {
    const style = document.createElement('style');
    style.setAttribute('data-' + config.pluginId, 'true');
    style.textContent = Object.entries(styles)
      .map(([selector, rules]) => 
        `${selector} { ${Object.entries(rules).map(([k, v]) => `${k}: ${v} !important`).join('; ')} }`
      )
      .join('\n') + mobileStyles;
    document.head.appendChild(style);
  }

  let updateTimer = null;
  function scheduleUpdate() {
    clearTimeout(updateTimer);
    updateTimer = setTimeout(updateTorrentStyles, TH.debounce);
  }

  function parseIntVal(text) {
    return parseInt(text || '', 10) || 0;
  }

  function parseFloatVal(text) {
    return parseFloat((text || '').replace(',', '.')) || 0;
  }

  function parseSizeGB(text) {
    const normalized = (text || '').replace(/\u00A0/g, ' ').trim();
    const match = normalized.match(/(\d+(?:[.,]\d+)?)\s*(kb|mb|gb|tb|кб|мб|гб|тб)/i);
    if (!match) return null;

    const num = parseFloat(match[1].replace(',', '.'));
    const unit = match[2].toLowerCase();

    if (unit === 'tb' || unit === 'тб') return num * 1024;
    if (unit === 'gb' || unit === 'гб') return num;
    if (unit === 'mb' || unit === 'мб') return num / 1024;
    if (unit === 'kb' || unit === 'кб') return num / (1024 * 1024);
    return 0;
  }

  function setTier(el, tiers, tier) {
    tiers.forEach(c => el.classList.remove(c));
    if (tier) el.classList.add(tier);
  }

  function updateTorrentStyles() {
    document.querySelectorAll('.torrent-item__seeds > span').forEach(span => {
      const val = parseIntVal(span.textContent);
      let tier = '';
      if (val < TH.seeds.low) tier = 'low-seeds';
      else if (val >= TH.seeds.high) tier = 'high-seeds';
      else if (val >= TH.seeds.good) tier = 'good-seeds';
      setTier(span, ['low-seeds', 'good-seeds', 'high-seeds'], tier);
    });

    document.querySelectorAll('.torrent-item__bitrate > span').forEach(span => {
      const val = parseFloatVal(span.textContent);
      let tier = '';
      if (val > TH.bitrate.veryHigh) tier = 'very-high-bitrate';
      else if (val >= TH.bitrate.high) tier = 'high-bitrate';
      setTier(span, ['high-bitrate', 'very-high-bitrate'], tier);
    });

    document.querySelectorAll('.torrent-item__grabs > span').forEach(span => {
      const val = parseIntVal(span.textContent);
      setTier(span, ['high-grabs'], val > 10 ? 'high-grabs' : '');
    });

    document.querySelectorAll('.torrent-item__size').forEach(el => {
      const gb = parseSizeGB(el.textContent);
      if (gb === null) {
        setTier(el, ['mid-size', 'high-size', 'top-size'], '');
        return;
      }
      let tier = '';
      if (gb > TH.size.top) tier = 'top-size';
      else if (gb >= TH.size.high) tier = 'high-size';
      else if (gb >= TH.size.mid) tier = 'mid-size';
      setTier(el, ['mid-size', 'high-size', 'top-size'], tier);
    });
  }

  function observe() {
    const observer = new MutationObserver(() => scheduleUpdate());

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    updateTorrentStyles();
  }

  function register() {
    if (typeof Lampa !== 'undefined') {
      Lampa.Manifest.plugins = Lampa.Manifest.plugins || {};
      Lampa.Manifest.plugins[config.pluginId] = {
        type: 'other',
        name: config.name,
        version: config.version,
        description: 'Цветовая индикация торрентов.'
      };
    }
    window['plugin_' + config.pluginId + '_ready'] = true;
  }

  function init() {
    injectStyles();
    updateTorrentStyles();
    observe();

    if (window.appready) {
      register();
    } else if (Lampa?.Listener?.follow) {
      Lampa.Listener.follow('app', e => {
        if (e.type === 'ready') {
          register();
          updateTorrentStyles();
        }
      });
    } else {
      setTimeout(register, 500);
    }
  }

  init();
})();
(function(){
    // Список текстових замін
    const REPLACEMENTS = {
        'Дублированный': 'Дубльований',
        'Ukr': 'Українською',
        'Дубляж': 'Дубльований',
        'Оригинальный': 'Оригінальний',
        'Субтитры': 'Субтитри',
        'Многоголосый': 'Багатоголосий',
        'Неофициальный': 'Неофіційний',
        'Украинский': 'Українською',
        'Профессиональный многоголосый': 'Професійний багатоголосий',
        'Zetvideo': 'UaFlix',
        'Нет истории просмотра': 'Історія перегляду відсутня'
    };

    // Конфігурація стилів
    const STYLES = {
        '.torrent-item__seeds span.high-seeds': {
            color: '#00ff00',
            'font-weight': 'bold'
        },
        '.torrent-item__bitrate span.high-bitrate': {
            color: '#ff0000',
            'font-weight': 'bold'
        },
        '.torrent-item__tracker.utopia': {
            color: '#9b59b6',
            'font-weight': 'bold'
        },
        '.torrent-item__tracker.toloka': {
            color: '#2ecc71',
            'font-weight': 'bold'
        },
        // Нові стилі для обводки залежно від кількості seeds
        '.torrent-item.low-seeds': {
            border: '2px solid #ff0000',
            'border-radius': '8px'
        },
        '.torrent-item.medium-seeds': {
            border: '2px solid #0000ff',
            'border-radius': '8px'
        },
        '.torrent-item.high-seeds': {
            border: '2px solid #ffff00',
            'border-radius': '8px'
        },
        '.torrent-item.very-high-seeds': {
            border: '2px solid #006400',
            'border-radius': '8px'
        },
        '.torrent-item.low-seeds .torrent-item__seeds span': {
            color: '#ff0000',
            'font-weight': 'bold'
        },
        '.torrent-item.medium-seeds .torrent-item__seeds span': {
            color: '#0000ff',
            'font-weight': 'bold'
        },
        '.torrent-item.high-seeds .torrent-item__seeds span': {
            color: '#ffff00',
            'font-weight': 'bold'
        },
        '.torrent-item.very-high-seeds .torrent-item__seeds span': {
            color: '#006400',
            'font-weight': 'bold'
        }
    };

    // Додаємо CSS-стилі
    let style = document.createElement('style');
    style.innerHTML = Object.entries(STYLES).map(([selector, props]) => {
        return `${selector} { ${Object.entries(props).map(([prop, val]) => `${prop}: ${val} !important`).join('; ')} }`;
    }).join('\n');
    document.head.appendChild(style);

    // Функція для заміни текстів у вказаних контейнерах
    function replaceTexts() {
        // Список селекторів, де потрібно шукати тексти для заміни
        const containers = [
            '.online-prestige-watched__body',
            '.online-prestige--full .online-prestige__title',
            '.online-prestige--full .online-prestige__info'
        ];

        containers.forEach(selector => {
            document.querySelectorAll(selector).forEach(container => {
                // Заміняємо текст у всіх вузлах-нащадках
                const walker = document.createTreeWalker(
                    container,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );

                let node;
                while (node = walker.nextNode()) {
                    let text = node.nodeValue;
                    Object.entries(REPLACEMENTS).forEach(([original, replacement]) => {
                        if (text.includes(original)) {
                            text = text.replace(new RegExp(original, 'g'), replacement);
                        }
                    });
                    node.nodeValue = text;
                }
            });
        });
    }

    // Функція для оновлення стилів торентів
    function updateTorrentStyles() {
        // Seeds > 19
        document.querySelectorAll('.torrent-item__seeds span').forEach(span => {
            span.classList.toggle('high-seeds', (parseInt(span.textContent) || 0) > 19);
        });

        // Бітрейт > 50
        document.querySelectorAll('.torrent-item__bitrate span').forEach(span => {
            span.classList.toggle('high-bitrate', (parseFloat(span.textContent) || 0) > 50);
        });

        // Трекери
        document.querySelectorAll('.torrent-item__tracker').forEach(tracker => {
            const text = tracker.textContent.trim();
            tracker.classList.remove('utopia', 'toloka');
            
            if (text.includes('UTOPIA (API)')) tracker.classList.add('utopia');
            else if (text.includes('Toloka')) tracker.classList.add('toloka');
        });

        // Нова логіка для обводки залежно від кількості seeds
        document.querySelectorAll('.torrent-item').forEach(torrentItem => {
            const seedsSpan = torrentItem.querySelector('.torrent-item__seeds span');
            if (!seedsSpan) return;

            const seedsCount = parseInt(seedsSpan.textContent) || 0;
            
            // Видаляємо всі попередні класи
            torrentItem.classList.remove('low-seeds', 'medium-seeds', 'high-seeds', 'very-high-seeds');
            
            // Додаємо відповідний клас залежно від кількості seeds
            if (seedsCount >= 0 && seedsCount <= 10) {
                torrentItem.classList.add('low-seeds');
            } else if (seedsCount >= 11 && seedsCount <= 25) {
                torrentItem.classList.add('medium-seeds');
            } else if (seedsCount >= 26 && seedsCount <= 50) {
                torrentItem.classList.add('high-seeds');
            } else if (seedsCount > 50) {
                torrentItem.classList.add('very-high-seeds');
            }
        });
    }

    // Основна функція оновлення
    function updateAll() {
        replaceTexts();
        updateTorrentStyles();
    }

    // Оптимізований спостерігач
    const observer = new MutationObserver(mutations => {
        if (mutations.some(m => m.addedNodes.length)) {
            updateAll();
        }
    });

    // Ініціалізація
    observer.observe(document.body, { childList: true, subtree: true });
    updateAll();
})();

Lampa.Platform.tv();
