/* ============================================================
   Siber Farkındalık Akademisi — uygulama mantığı
   ============================================================ */
(function () {
  "use strict";

  var D = window.APP_DATA;
  var TRAININGS = D.TRAININGS;
  var CATEGORIES = D.CATEGORIES;
  var CATEGORY_KEYS = D.CATEGORY_KEYS;
  var CATEGORY_TOTALS = D.CATEGORY_TOTALS;
  var LEVELS = D.LEVELS;
  var LEVEL_KEYS = D.LEVEL_KEYS;
  var LEVEL_LABELS = D.LEVEL_LABELS;
  var BADGES = D.BADGES;
  var LESSON_COPY = D.LESSON_COPY;
  var UI = D.UI;
  var PACKS = window.I18N || {};

  var LANGS = [
    { code: "tr", label: "Türkçe" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "ar", label: "العربية" },
    { code: "ru", label: "Русский" }
  ];
  var LANG_CODES = LANGS.map(function (l) { return l.code; });

  // Dil paketlerini mevcut veri yapısına işle: UI, kategori, seviye, rozet ve eğitimler.
  function ingestPacks() {
    LANG_CODES.forEach(function (code) {
      var pack = PACKS[code];
      if (!pack) return;
      if (pack.UI) UI[code] = Object.assign({}, UI.en, pack.UI);
      if (pack.CATEGORIES) {
        Object.keys(pack.CATEGORIES).forEach(function (c) {
          if (CATEGORIES[c]) CATEGORIES[c][code] = pack.CATEGORIES[c];
        });
      }
      if (pack.LEVELS && pack.LEVELS.length === LEVELS.length) {
        pack.LEVELS.forEach(function (name, i) { LEVELS[i][code] = name; });
      }
      if (pack.LEVEL_LABELS) {
        Object.keys(pack.LEVEL_LABELS).forEach(function (k) {
          if (LEVEL_LABELS[k]) LEVEL_LABELS[k][code] = pack.LEVEL_LABELS[k];
        });
      }
      if (pack.BADGES) {
        Object.keys(pack.BADGES).forEach(function (id) {
          for (var i = 0; i < BADGES.length; i++) {
            if (BADGES[i].id === id) BADGES[i][code] = pack.BADGES[id];
          }
        });
      }
      if (pack.TRAININGS) {
        Object.keys(pack.TRAININGS).forEach(function (id) {
          var tr = byId(id);
          if (tr) tr[code] = pack.TRAININGS[id];
        });
      }
    });
  }

  var STORAGE_KEY = "siber-farkindalik.v2";
  var SEARCH_KEY = "siber-farkindalik.lang";

  /* ---------------- yardımcılar ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function t(key, vars) {
    var dict = UI[lang] || UI.en;
    var s = dict[key];
    if (s == null) s = UI.en[key];
    if (s == null) return key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      });
    }
    return s;
  }
  function loc(obj) { return obj[lang] || obj.en; }
  function byId(id) { for (var i = 0; i < TRAININGS.length; i++) if (TRAININGS[i].id === id) return TRAININGS[i]; return null; }
  function trainingXp(tr) { return 50 + tr.min * 5; }
  function totalMinutes() { return TRAININGS.reduce(function (s, x) { return s + x.min; }, 0); }
  function formatDuration(total) {
    var h = Math.floor(total / 60), m = total % 60;
    var uh = t("unitHour"), um = t("unitMinute");
    return h > 0 ? h + uh + m + um : m + um;
  }
  function detectLang() {
    var n = String(navigator.language || "tr").toLowerCase().slice(0, 2);
    return LANG_CODES.indexOf(n) !== -1 ? n : "en";
  }
  function initials(name) {
    var parts = String(name || "").trim().split(/\s+/);
    return ((parts[0] || "")[0] || "?").toUpperCase() + ((parts[1] || "")[0] || "").toUpperCase();
  }
  function hexA(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }
  function catColor(key) {
    var cat = CATEGORIES[key];
    if (!cat) return "var(--accent)";
    return theme === "light" && cat.light ? cat.light : cat.color;
  }
  var LEVEL_COLORS = {
    beginner: { dark: "#3dbd9c", light: "#0f7a52" },
    intermediate: { dark: "#ffb829", light: "#8a5a00" },
    advanced: { dark: "#ff6b6b", light: "#c62828" }
  };
  function lvlColor(key) {
    var set = LEVEL_COLORS[key] || LEVEL_COLORS.beginner;
    return theme === "light" ? set.light : set.dark;
  }
  function hashStr(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return Math.abs(h);
  }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function yesterdayStr() {
    var d = new Date(Date.now() - 86400000);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  /* ---------------- durum ---------------- */
  var lang = "tr";
  var theme = "dark";
  var store = { lang: "tr", theme: "dark", active: null, profiles: {} };
  var filters = { q: "", cat: "all", lvl: "all", dur: "all", sort: "default" };
  var EMPTY_PROFILE = { name: "", completed: [], xp: 0, quiz: {}, badges: [], streak: { count: 0, last: null } };
  var quizState = { id: null, i: 0, correct: 0, answered: false, chosen: -1, result: null };

  function P() { return store.profiles[store.active] || EMPTY_PROFILE; }
  function hasProfile() { return !!(store.active && store.profiles[store.active]); }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (e) { /* yoksay */ }
  }

  function loadStore() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); } catch (e) { s = null; }
    if (s && s.profiles && typeof s.profiles === "object") {
      s.profiles = s.profiles || {};
      Object.keys(s.profiles).forEach(function (id) {
        var p = s.profiles[id];
        p.completed = Array.isArray(p.completed) ? p.completed.filter(function (x) { return !!byId(x); }) : [];
        p.quiz = p.quiz && typeof p.quiz === "object" ? p.quiz : {};
        p.badges = Array.isArray(p.badges) ? p.badges : [];
        p.streak = p.streak && typeof p.streak === "object" ? p.streak : { count: 0, last: null };
        p.xp = typeof p.xp === "number" ? p.xp : 0;
      });
      if (!s.profiles[s.active]) s.active = Object.keys(s.profiles)[0] || null;
      return s;
    }
    var detected = detectLang();
    var prefersDark = !window.matchMedia || !window.matchMedia("(prefers-color-scheme: light)").matches;
    return { lang: detected, theme: prefersDark ? "dark" : "light", active: null, profiles: {} };
  }

  /* ---------------- tema / dil ---------------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("pageTitle");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("metaDescription"));
    $all("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $all("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $all(".lang-select").forEach(function (s) { s.value = lang; });
  }

  function setLang(next) {
    if (LANG_CODES.indexOf(next) === -1) return;
    lang = next;
    store.lang = lang;
    save();
    closeAuxDialogs();
    applyI18n();
    buildChips();
    renderAll();
    if (detail.open && detail.dataset.id) renderDetail(detail.dataset.id);
  }

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    store.theme = theme;
    save();
    applyTheme();
    buildChips();
    renderAll();
    if (detail.open && detail.dataset.id) renderDetail(detail.dataset.id);
    drawConstellation(heroCanvas, 720);
    if (welcome.open) drawConstellation(welcomeCanvas, 180);
  }

  /* ---------------- profil ---------------- */
  function setProfileDefaults(p) {
    p.completed = p.completed || [];
    p.quiz = p.quiz || {};
    p.badges = p.badges || [];
    p.streak = p.streak || { count: 0, last: null };
    p.xp = p.xp || 0;
  }

  function createProfile(name) {
    var clean = String(name || "").trim().slice(0, 24);
    if (!clean) clean = t("guestName");
    var id = "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    store.profiles[id] = {
      name: clean, completed: [], xp: 0, quiz: {}, badges: [],
      streak: { count: 0, last: null }, createdAt: Date.now()
    };
    store.active = id;
    save();
    applyWelcomeLock(false);
    if (welcome.open) welcome.close();
    if (profileDialog.open) profileDialog.close();
    renderAll();
    showToast(t("toastProfileCreated", { name: clean }), "✓");
    if (name !== clean) { /* ad kısaltıldı */ }
    return id;
  }

  function switchProfile(id) {
    if (!store.profiles[id]) return;
    store.active = id;
    save();
    renderAll();
    showToast(t("toastProfileSwitched", { name: store.profiles[id].name }), "✓");
  }

  function deleteProfile(id) {
    var p = store.profiles[id];
    if (!p) return;
    if (!window.confirm(t("profileDeleteConfirm", { name: p.name }))) return;
    delete store.profiles[id];
    if (store.active === id) {
      var keys = Object.keys(store.profiles);
      store.active = keys.length ? keys[0] : null;
    }
    save();
    renderAll();
    renderProfileList();
    showToast(t("toastProfileDeleted"), "✓");
    if (!hasProfile()) {
      if (profileDialog.open) profileDialog.close();
      openWelcome();
    }
  }

  function touchStreak(p) {
    var today = todayStr();
    if (p.streak.last === today) return;
    p.streak.count = p.streak.last === yesterdayStr() ? (p.streak.count || 0) + 1 : 1;
    p.streak.last = today;
  }

  function levelInfo(xp) {
    var idx = 0;
    for (var i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) idx = i;
    var cur = LEVELS[idx];
    var next = LEVELS[idx + 1] || null;
    var pct = next ? Math.min(100, Math.round(((xp - cur.min) / (next.min - cur.min)) * 100)) : 100;
    return { idx: idx, cur: cur, next: next, pct: pct };
  }

  function evaluateBadges(p, silentToast) {
    var newly = [];
    BADGES.forEach(function (b) {
      var earned = false;
      try { earned = !!b.test(p); } catch (e) { earned = false; }
      if (earned && p.badges.indexOf(b.id) === -1) {
        p.badges.push(b.id);
        if (!silentToast) newly.push(b);
      }
    });
    return newly;
  }

  function perfectCount(p) {
    return Object.keys(p.quiz).filter(function (id) {
      var q = p.quiz[id];
      return q && q.total > 0 && q.best === q.total;
    }).length;
  }

  /* ---------------- rozetler ---------------- */
  function badgeById(id) {
    for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === id) return BADGES[i];
    return null;
  }

  function renderBadges() {
    var p = P();
    var strip = $("#badge-strip");
    strip.innerHTML = BADGES.map(function (b) {
      var earned = p.badges.indexOf(b.id) !== -1;
      var meta = b[lang] || b.en;
      return '<button type="button" class="badge' + (earned ? " earned" : "") + '" data-badge="' + b.id + '"' +
        ' title="' + esc(meta.n + " — " + meta.d) + '" aria-label="' + esc(meta.n + " — " + meta.d) + '">' +
        '<span aria-hidden="true">' + b.icon + "</span></button>";
    }).join("");
    $("#badges-count").textContent = p.badges.length + " / " + BADGES.length;
  }

  /* ---------------- oyuncu kartı ---------------- */
  function renderPlayer() {
    var p = P();
    var lvl = levelInfo(p.xp || 0);
    var name = p.name || t("guestName");
    var initial = initials(name);

    $("#avatar").textContent = initial;
    $("#hero-avatar").textContent = initial;
    $("#profile-name").textContent = name;
    $("#profile-level").textContent = t("levelPrefix") + " " + (lvl.idx + 1);
    $("#hero-name").textContent = name;
    $("#hero-level").textContent = t("levelPrefix") + " " + (lvl.idx + 1) + t("levelSeparator") + lvl.cur[lang];

    $("#xp-current").textContent = (p.xp || 0) + " XP";
    $("#xp-next").textContent = lvl.next ? t("xpNext", { xp: lvl.next.min }) : t("maxLevel");
    $("#xp-bar").style.width = lvl.pct + "%";
    $("#xp-track").setAttribute("aria-valuenow", String(lvl.pct));

    $("#pc-done").textContent = p.completed.length;
    $("#pc-quiz").textContent = Object.keys(p.quiz).length;
    $("#pc-badges").textContent = p.badges.length;
    var streakCount = p.streak.count || 0;
    $("#streak-count").textContent = streakCount;
    $("#streak-chip small").textContent = t(streakCount === 1 ? "streakUnitOne" : "streakUnit");

    $("#stat-count").textContent = TRAININGS.length;
    $("#stat-time").textContent = formatDuration(totalMinutes());
    $("#stat-done").textContent = p.completed.length;
  }

  /* ---------------- filtre çipleri ---------------- */
  function countBy(field) {
    var map = {};
    TRAININGS.forEach(function (tr) { map[tr[field]] = (map[tr[field]] || 0) + 1; });
    return map;
  }

  function buildChips() {
    var catCounts = countBy("cat");
    var lvlCounts = countBy("lvl");

    var catHtml = ['<button type="button" class="chip" data-cat="all" aria-pressed="true">' +
      esc(t("filterAll")) + ' <span class="n">' + TRAININGS.length + "</span></button>"];
    CATEGORY_KEYS.forEach(function (c) {
      catHtml.push('<button type="button" class="chip" data-cat="' + c + '" aria-pressed="false">' +
        '<span class="swatch" style="background:' + catColor(c) + '"></span>' +
        esc(CATEGORIES[c][lang]) + ' <span class="n">' + (catCounts[c] || 0) + "</span></button>");
    });
    $("#category-chips").innerHTML = catHtml.join("");

    var lvlHtml = ['<button type="button" class="chip" data-lvl="all" aria-pressed="true">' +
      esc(t("filterAllLevels")) + ' <span class="n">' + TRAININGS.length + "</span></button>"];
    LEVEL_KEYS.forEach(function (k) {
      lvlHtml.push('<button type="button" class="chip" data-lvl="' + k + '" aria-pressed="false">' +
        '<span class="lvl-dot" style="background:' + lvlColor(k) + '"></span>' +
        esc(LEVEL_LABELS[k][lang]) + ' <span class="n">' + (lvlCounts[k] || 0) + "</span></button>");
    });
    $("#level-chips").innerHTML = lvlHtml.join("");
    syncChips();
  }

  function syncChips() {
    $all("[data-cat]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === filters.cat)); });
    $all("[data-lvl]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lvl") === filters.lvl)); });
  }

  /* ---------------- görsel üretimi ---------------- */
  var COLORS = ["#8052ff", "#ffb829", "#3dbd9c", "#c084fc", "#7da2ff", "#f472b6"];

  function particles(id, w, h) {
    var seed = hashStr(id);
    var out = "";
    for (var i = 0; i < 13; i++) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var x = 12 + (seed % (w - 24));
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var y = 10 + (seed % (h - 20));
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var s = 1.2 + (seed % 100) / 100 * 2;
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var rot = (seed % 360);
      var c = COLORS[i % COLORS.length];
      var filled = i % 3 !== 0;
      out += '<path d="M0 ' + (-s) + " L" + (s * 0.87) + " " + (s * 0.5) + " L" + (-s * 0.87) + " " + (s * 0.5) + ' Z" ' +
        'transform="translate(' + x + " " + y + ") rotate(" + rot + ')" ' +
        (filled ? 'fill="' + c + '" opacity=".62"' : 'fill="none" stroke="' + c + '" stroke-width="1" opacity=".85"') + "/>";
    }
    return '<svg class="thumb-particles" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none" aria-hidden="true">' + out + "</svg>";
  }

  function thumbArt(tr) {
    var color = catColor(tr.cat);
    return '<svg class="thumb-art" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" ' +
      'stroke-linecap="round" stroke-linejoin="round" style="color:' + color + '" aria-hidden="true">' +
      (ART[tr.art] || ART.shield) + "</svg>";
  }

  var ART = {
    mail: '<rect x="10" y="18" width="44" height="28" rx="4"/><path d="m11 21 21 15 21-15"/><path d="M45 40v4a4 4 0 0 0 8 0v-2"/>',
    target: '<circle cx="32" cy="32" r="17"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="2" fill="currentColor"/><path d="M32 7v7M32 50v7M7 32h7M50 32h7"/>',
    sms: '<rect x="14" y="9" width="24" height="42" rx="5"/><path d="M22 45h8"/><path d="M32 17h16a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-4l-5 5v-5h-7a5 5 0 0 1-5-5v-8a5 5 0 0 1 5-5Z"/>',
    voice: '<rect x="25" y="9" width="14" height="26" rx="7"/><path d="M18 29a14 14 0 0 0 28 0"/><path d="M32 43v10M25 53h14"/>',
    qr: '<rect x="10" y="10" width="16" height="16" rx="2"/><rect x="38" y="10" width="16" height="16" rx="2"/><rect x="10" y="38" width="16" height="16" rx="2"/><path d="M16 16h4v4h-4zM44 16h4v4h-4zM16 44h4v4h-4z"/><path d="M38 38h6v6h-6zM50 38h4M50 44v10M38 50h6M44 56h6"/>',
    key: '<circle cx="20" cy="42" r="9"/><path d="m27 35 22-22M41 21l6 6M35 27l6 6"/><path d="M17 42h6"/>',
    shield: '<path d="M32 8 52 15v13c0 12-8 21-20 25-12-4-20-13-20-25V15L32 8Z"/><path d="m24 31 6 6 12-13"/>',
    bell: '<path d="M32 10a14 14 0 0 0-14 14v9l-5 9h38l-5-9v-9A14 14 0 0 0 32 10Z"/><path d="M26 50a6 6 0 0 0 12 0"/><path d="M32 26v9M32 41h.01"/>',
    drop: '<path d="M32 9c8 10 14 17 14 24a14 14 0 0 1-28 0c0-7 6-14 14-24Z"/><path d="M32 26v14M27 35l5 5 5-5"/>',
    fingerprint: '<path d="M22 20a14 14 0 0 1 20 0"/><path d="M18 27a19 19 0 0 1 28 0"/><path d="M24 34a9 9 0 0 1 16 0c0 8-3 14-4 18"/><path d="M32 34v12"/><path d="M18 34c0 8 2 13 5 18"/><path d="M24 45c1 3 3 5 5 7"/>',
    masks: '<circle cx="25" cy="29" r="11"/><circle cx="40" cy="34" r="11"/><path d="M20 27h.01M30 27h.01M36 33h.01M45 33h.01"/><path d="M21 34c2 2 5 2 7 0M36 41c2 2 5 2 7 0"/><path d="M32 20c3 2 5 5 6 9"/>',
    phone: '<path d="M15 13c2-3 7-2 8 2l2 7c.4 2-1 3-3 4l-3 2c3 7 7 11 14 14l2-3c1-2 2-3 4-3l6 2c4 1 5 6 2 8-4 4-11 4-20-1S12 33 11 21c-.2-3 1-6 4-8Z"/><path d="M44 12a12 12 0 0 1 8 8M43 20a6 6 0 0 1 4 4"/>',
    idcard: '<rect x="8" y="16" width="48" height="32" rx="4"/><circle cx="22" cy="30" r="6"/><path d="M13 40c2-5 5-7 9-7s7 2 9 7"/><path d="M37 25h12M37 32h12M37 39h8"/>',
    invoice: '<path d="M16 8h24l10 10v38H16V8Z"/><path d="M40 8v10h10"/><path d="M23 26h16M23 33h16M23 40h9"/><circle cx="41" cy="45" r="7"/><path d="M41 41v8M38 43h6M38 47h6"/>',
    insider: '<circle cx="26" cy="22" r="8"/><path d="M12 54c1-10 6-16 14-16 4 0 7 1 9 4"/><path d="M46 28 58 50H34l12-22Z"/><path d="M46 36v6M46 46h.01"/>',
    document: '<path d="M15 8h22l11 11v18"/><path d="M37 8v11h11"/><path d="M15 8v48h20"/><path d="M22 26h13M22 33h13M22 40h8"/><path d="M44 36 55 41v6c0 6-4 10-11 12-7-2-11-6-11-12v-6l11-5Z"/><path d="m40 47 3 3 6-7"/>',
    tags: '<path d="M10 26 26 10h18a2 2 0 0 1 2 2v18L30 46a4 4 0 0 1-5.7 0L10 31.7a4 4 0 0 1 0-5.7Z"/><circle cx="39" cy="22" r="3"/><path d="m26 42 6 6M34 44l6 6"/>',
    cloud: '<path d="M20 46a11 11 0 0 1-1-22 15 15 0 0 1 29-3 10 10 0 0 1 1 20"/><path d="M32 53V33M25 40l7-7 7 7"/>',
    siren: '<ellipse cx="32" cy="15" rx="14" ry="5"/><path d="M18 15v30c0 3 6 6 14 6s14-3 14-6V15"/><path d="M18 30c0 3 6 6 14 6s14-3 14-6"/><path d="M42 8 50 2M22 8 14 2"/><path d="M32 24v8M32 38h.01"/>',
    laptop: '<rect x="12" y="14" width="40" height="26" rx="3"/><path d="M6 46h52l-3 6H9l-3-6Z"/><path d="M27 22h10l4 6H23l4-6Z"/><path d="M23 22v-3h18v3"/>',
    wifi: '<path d="M9 24a34 34 0 0 1 46 0M17 32a23 23 0 0 1 30 0M24 40a12 12 0 0 1 16 0"/><circle cx="32" cy="48" r="2" fill="currentColor"/><rect x="38" y="42" width="12" height="10" rx="2" fill="var(--thumb)"/><path d="M41 42v-3a3 3 0 0 1 6 0v3"/>',
    usb: '<rect x="22" y="24" width="20" height="30" rx="3"/><path d="M26 24v-6h12v6"/><path d="M28 12v6M36 12v6"/><rect x="27" y="12" width="4" height="4"/><rect x="33" y="12" width="4" height="4"/><path d="M32 34v10M28 39l4 4 4-4"/>',
    refresh: '<path d="M52 32a20 20 0 0 1-34 14"/><path d="M12 32a20 20 0 0 1 34-14"/><path d="M46 8v10H36M18 56V46h10"/>',
    lock: '<rect x="14" y="27" width="36" height="28" rx="4"/><path d="M22 27v-8a10 10 0 0 1 20 0v8"/><path d="M32 37v8M32 49h.01"/>',
    ai: '<rect x="14" y="14" width="36" height="36" rx="6"/><path d="M24 24h16v16H24z"/><circle cx="32" cy="32" r="2.5" fill="currentColor"/><path d="M24 14V7M40 14V7M24 50v7M40 50v7M14 24H7M14 40H7M50 24h7M50 40h7"/>',
    megaphone: '<path d="M10 28v10a4 4 0 0 0 4 4h5l17 10V14L19 24h-5a4 4 0 0 0-4 4Z"/><path d="M20 42v9a3 3 0 0 0 6 0v-6"/><path d="M43 25a8 8 0 0 1 0 14M47 19a15 15 0 0 1 0 26"/>',
    plane: '<path d="M8 34 56 12 39 52l-7-16-12-6Z"/><path d="m39 52-7-16"/><rect x="10" y="44" width="12" height="12" rx="2"/><path d="M10 48h12"/>',
    clock: '<circle cx="32" cy="32" r="22"/><path d="M32 18v14l9 6"/><path d="M50 10 58 2M14 10 6 2"/>'
  };

  /* ---------------- kartlar ---------------- */
  function visibleTrainings() {
    var q = filters.q.trim().toLocaleLowerCase(lang === "tr" ? "tr" : "en");
    var list = TRAININGS.filter(function (tr) {
      if (filters.cat !== "all" && tr.cat !== filters.cat) return false;
      if (filters.lvl !== "all" && tr.lvl !== filters.lvl) return false;
      if (filters.dur === "short" && tr.min > 10) return false;
      if (filters.dur === "medium" && (tr.min <= 10 || tr.min > 20)) return false;
      if (filters.dur === "long" && tr.min <= 20) return false;
      if (!q) return true;
      var trl = loc(tr);
      var catNames = Object.keys(CATEGORIES).map(function (c) { return CATEGORIES[c][lang] || ""; }).join(" ");
      var hay = [trl.t, trl.s, trl.g.join(" "), catNames, CATEGORIES[tr.cat].en].join(" ");
      return hay.toLocaleLowerCase(lang === "tr" ? "tr" : "en").indexOf(q) !== -1;
    });

    var lvlOrder = { beginner: 0, intermediate: 1, advanced: 2 };
    if (filters.sort === "short-first") list.sort(function (a, b) { return a.min - b.min; });
    else if (filters.sort === "long-first") list.sort(function (a, b) { return b.min - a.min; });
    else if (filters.sort === "level") list.sort(function (a, b) { return lvlOrder[a.lvl] - lvlOrder[b.lvl]; });
    else if (filters.sort === "done-first") {
      list.sort(function (a, b) {
        var da = P().completed.indexOf(a.id) !== -1 ? 1 : 0;
        var db = P().completed.indexOf(b.id) !== -1 ? 1 : 0;
        return db - da;
      });
    }
    return list;
  }

  var clockIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  var checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>';

  function cardHtml(tr) {
    var p = P();
    var done = p.completed.indexOf(tr.id) !== -1;
    var color = catColor(tr.cat);
    var l = loc(tr);
    return '<article class="card' + (done ? " is-done" : "") + '" data-id="' + tr.id + '">' +
      '<div class="thumb" style="--c:' + color + '">' +
        particles(tr.id, 320, 156) +
        thumbArt(tr) +
        '<span class="thumb-xp">+' + trainingXp(tr) + " XP</span>" +
        (done ? '<span class="thumb-done" aria-hidden="true">✓</span>' : "") +
      "</div>" +
      '<div class="card-body">' +
        '<div class="card-top">' +
          '<span class="cat"><i style="background:' + color + '"></i>' + esc(CATEGORIES[tr.cat][lang]) + "</span>" +
          '<span class="lvl lvl-' + tr.lvl + '">' + esc(LEVEL_LABELS[tr.lvl][lang]) + "</span>" +
        "</div>" +
        "<h2><button type=\"button\" class=\"card-open\" data-open=\"" + tr.id + "\">" + esc(l.t) + "</button></h2>" +
        '<p class="summary">' + esc(l.s) + "</p>" +
      "</div>" +
      '<div class="card-foot">' +
        '<span class="meta">' + clockIcon + tr.min + " " + esc(t("minutesShort")) + "</span>" +
        '<button type="button" class="done-toggle" data-done="' + tr.id + '" aria-pressed="' + done + '">' +
          checkIcon + "<span>" + esc(done ? t("cardDone") : t("cardComplete")) + "</span>" +
          '<span class="sr-only">— ' + esc(l.t) + "</span>" +
        "</button>" +
      "</div>" +
    "</article>";
  }

  function renderGrid() {
    var list = visibleTrainings();
    var p = P();
    var activeCount = (filters.cat !== "all" ? 1 : 0) + (filters.lvl !== "all" ? 1 : 0) +
      (filters.dur !== "all" ? 1 : 0) + (filters.q.trim() ? 1 : 0);

    if (!list.length) {
      $("#grid").innerHTML = '<div class="empty"><h3>' + esc(t("emptyTitle")) + "</h3><p>" + esc(t("emptyText")) +
        '</p><button type="button" class="btn btn-ghost" id="empty-clear">' + esc(t("emptyClear")) + "</button></div>";
      var btn = $("#empty-clear");
      if (btn) btn.addEventListener("click", clearFilters);
    } else {
      $("#grid").innerHTML = list.map(cardHtml).join("");
    }

    var results = $("#results");
    if (activeCount) {
      results.innerHTML = t("resultsFiltered", { shown: "<b>" + list.length + "</b>", total: TRAININGS.length });
    } else {
      results.innerHTML = t("resultsAll", { n: "<b>" + TRAININGS.length + "</b>" });
    }
    $("#clear-filters").hidden = activeCount === 0;
    if (p.completed.length) { /* ilerleme ayrıca çizilir */ }
  }

  function renderAll() {
    renderPlayer();
    renderBadges();
    renderGrid();
    renderCertificateButton();
  }

  /* ---------------- detay ---------------- */
  var detail = $("#detail");
  var quizDialog = $("#quiz");

  function renderDetail(id) {
    var tr = byId(id);
    if (!tr) return;
    var p = P();
    var l = loc(tr);
    var done = p.completed.indexOf(id) !== -1;
    var color = catColor(tr.cat);
    detail.dataset.id = id;

    var cover = $("#detail-cover");
    cover.style.setProperty("--c", color);
    cover.innerHTML = particles(tr.id, 640, 150) + thumbArt(tr);

    $("#detail-badges").innerHTML =
      '<span class="cat"><i style="background:' + color + '"></i>' + esc(CATEGORIES[tr.cat][lang]) + "</span>" +
      '<span class="lvl lvl-' + tr.lvl + '">' + esc(LEVEL_LABELS[tr.lvl][lang]) + "</span>" +
      (done ? '<span class="lvl" style="color:var(--success)">✓ ' + esc(t("detailDone")) + "</span>" : "");

    $("#detail-title").textContent = l.t;
    $("#detail-summary").textContent = l.s;
    var objectives = Array.isArray(l.o) ? l.o : [];
    var modules = Array.isArray(l.m) ? l.m : [];
    var reading = LESSON_COPY[lang] || LESSON_COPY.en;
    function fillLesson(template, vars) {
      return String(template || "").replace(/\{(summary|module|objective|title)\}/g, function (_, key) {
        return vars[key] == null ? "" : vars[key];
      });
    }
    $("#detail-lesson").innerHTML = modules.map(function (m, i) {
      var objective = objectives[i] || objectives[objectives.length - 1] || l.s;
      var vars = { summary: l.s, module: m, objective: objective, title: l.t };
      return '<article class="lesson-chapter"><h4>' + esc(m) + '</h4><p>' +
        esc(fillLesson(reading.teaching, vars)) + '</p></article>';
    }).join("");
    var caseTemplate = reading.cases[tr.cat] || reading.cases.phishing;
    var caseVars = { summary: l.s, module: modules[0] || l.t, objective: objectives[0] || l.s, title: l.t };
    $("#detail-case-study").textContent = fillLesson(caseTemplate, caseVars);
    $("#detail-tags").innerHTML = l.g.map(function (g) { return '<span class="tag">#' + esc(g) + "</span>"; }).join("");
    $("#detail-meta").innerHTML = clockIcon + " " + tr.min + " " + esc(t("minutesShort")) + ' <span class="dot-sep">·</span> +' + trainingXp(tr) + " XP";

    var entry = p.quiz[id];
    var best = $("#detail-quiz-best");
    if (entry && entry.total) {
      best.hidden = false;
      best.innerHTML = "🏅 <span>" + t("detailQuizBest", { score: "<b>" + entry.best + "</b>", total: entry.total }) + "</span>";
    } else {
      best.hidden = true;
      best.innerHTML = "";
    }

    var toggle = $("#detail-toggle");
    toggle.textContent = done ? t("detailUncomplete") : t("detailComplete");
    toggle.className = done ? "btn btn-ghost btn-done" : "btn btn-primary";
  }

  function openDetail(id) {
    renderDetail(id);
    if (!detail.open) detail.showModal();
  }

  /* ---------------- quiz ---------------- */
  function openQuiz(id) {
    var tr = byId(id);
    if (!tr) return;
    quizState = { id: id, i: 0, correct: 0, answered: false, chosen: -1, result: null };
    if (detail.open) detail.close();
    renderQuiz();
    if (!quizDialog.open) quizDialog.showModal();
  }

  function renderQuiz() {
    var tr = byId(quizState.id);
    if (!tr) return;
    var qs = loc(tr).q;
    var total = qs.length;
    var stepEl = $("#quiz-step");
    var barEl = $("#quiz-bar");
    var titleEl = $("#quiz-title");
    var body = $("#quiz-body");
    var foot = $("#quiz-foot");

    titleEl.textContent = loc(tr).t;

    if (quizState.result) {
      stepEl.textContent = t("quizFinish");
      barEl.style.width = "100%";
      var pct = Math.round((quizState.correct / total) * 100);
      var headline = pct === 100 ? t("quizResultPerfect") : pct >= 66 ? t("quizResultGood") : t("quizResultLow");
      var entry = P().quiz[quizState.id] || { best: quizState.correct, total: total };
      var delta = quizState.result.delta;
      body.innerHTML = '<div class="quiz-result">' +
        '<div class="result-ring" style="--p:' + pct + '"><div><b>' + pct + "%</b><small>" +
          esc(lang === "tr" ? "PUAN" : "SCORE") + "</small></div></div>" +
        "<h3>" + esc(headline) + "</h3>" +
        "<p>" + esc(t("quizResultText", { correct: quizState.correct, total: total })) + "</p>" +
        (delta > 0 ? '<div class="xp-earned">' + esc(t("quizXp", { xp: delta })) + "</div>" : "<p>" + esc(t("quizNoXp")) + "</p>") +
        "<p>" + esc(t("quizBestLine", { score: entry.best, total: entry.total })) + "</p>" +
      "</div>";
      foot.innerHTML = '<button type="button" class="btn btn-ghost" id="quiz-retry">' + esc(t("quizRetry")) + "</button>" +
        '<button type="button" class="btn btn-primary" id="quiz-close-btn">' + esc(t("quizClose")) + "</button>";
      return;
    }

    stepEl.textContent = t("quizStep", { i: quizState.i + 1, n: total });
    barEl.style.width = (((quizState.i + (quizState.answered ? 1 : 0)) / total) * 100) + "%";

    var q = qs[quizState.i];
    var answered = quizState.answered;
    var chosen = quizState.chosen;
    var answer = q[2];

    var options = q[1].map(function (opt, idx) {
      var cls = "option";
      if (answered) {
        if (idx === answer) cls += " correct";
        else if (idx === chosen) cls += " wrong";
        else cls += " dim";
      }
      return '<button type="button" class="' + cls + '" data-opt="' + idx + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="key">' + "ABC"[idx] + "</span><span>" + esc(opt) + "</span></button>";
    }).join("");

    var explain = "";
    if (answered) {
      var ok = chosen === answer;
      explain = '<div class="quiz-explain ' + (ok ? "ok" : "no") + '">' +
        (ok
          ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m5 13 4 4L19 7"/></svg>'
          : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 8v5M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg>') +
        "<span><b>" + esc(ok ? t("quizCorrect") : t("quizWrong")) + ".</b> " + esc(q[3]) + "</span></div>";
    }

    body.innerHTML = '<p class="quiz-q">' + esc(q[0]) + "</p>" +
      '<div class="quiz-options">' + options + "</div>" + explain;

    foot.innerHTML = answered
      ? '<button type="button" class="btn btn-primary" id="quiz-next">' +
        esc(quizState.i + 1 < total ? t("quizNext") : t("quizFinish")) + "</button>"
      : "";
  }

  function answerQuiz(idx) {
    if (quizState.answered) return;
    var tr = byId(quizState.id);
    var q = loc(tr).q[quizState.i];
    quizState.answered = true;
    quizState.chosen = idx;
    if (idx === q[2]) quizState.correct++;
    renderQuiz();
  }

  function nextQuiz() {
    var tr = byId(quizState.id);
    var total = loc(tr).q.length;
    if (quizState.i + 1 < total) {
      quizState.i++;
      quizState.answered = false;
      quizState.chosen = -1;
      renderQuiz();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    var tr = byId(quizState.id);
    var total = loc(tr).q.length;
    var profile = P();
    setProfileDefaults(profile);

    var entry = profile.quiz[quizState.id] || { best: 0, total: total, xp: 0 };
    var potential = quizState.correct * 20 + (quizState.correct === total ? 30 : 0);
    var previous = entry.xp || 0;
    var delta = Math.max(0, potential - previous);

    entry.xp = Math.max(previous, potential);
    entry.best = Math.max(entry.best || 0, quizState.correct);
    entry.total = total;
    profile.quiz[quizState.id] = entry;
    profile.xp = (profile.xp || 0) + delta;
    touchStreak(profile);

    var newly = evaluateBadges(profile, false);
    quizState.result = { delta: delta };
    save();

    renderAll();
    renderQuiz();

    if (delta > 0) showToast(t("toastQuizDone", { xp: delta }), "✓");
    if (quizState.correct === total) confetti(70);
    if (newly.length) {
      var names = newly.map(function (b) { return (b[lang] || b.en).n; }).join(", ");
      showToast(t("toastBadge", { name: names }), "🏅");
      confetti(50);
    }
  }

  /* ---------------- tamamlama ---------------- */
  function toggleComplete(id) {
    if (!hasProfile()) { openWelcome(); return; }
    var tr = byId(id);
    if (!tr) return;
    var p = P();
    setProfileDefaults(p);
    var idx = p.completed.indexOf(id);
    var doneBefore = idx !== -1;

    if (doneBefore) {
      p.completed.splice(idx, 1);
      p.xp = Math.max(0, (p.xp || 0) - trainingXp(tr));
      showToast(t("toastTrainingUndo", { title: loc(tr).t }), "↺");
    } else {
      p.completed.push(id);
      p.xp = (p.xp || 0) + trainingXp(tr);
      touchStreak(p);
      showToast(t("toastTrainingDone", { xp: trainingXp(tr), title: loc(tr).t }), "✓");
    }

    var newly = doneBefore ? [] : evaluateBadges(p, false);
    save();

    if (newly.length) {
      var names = newly.map(function (b) { return (b[lang] || b.en).n; }).join(", ");
      showToast(t("toastBadge", { name: names }), "🏅");
      confetti(55);
    }

    renderAll();
    if (detail.open && detail.dataset.id === id) renderDetail(id);
  }

  /* ---------------- bildirimler ---------------- */
  var toastQueue = [];
  var toastBusy = false;
  function showToast(msg, icon) {
    toastQueue.push({ msg: msg, icon: icon || "✓" });
    if (!toastBusy) drainToasts();
  }
  function drainToasts() {
    var toast = $("#toast");
    if (!toastQueue.length) { toastBusy = false; return; }
    toastBusy = true;
    var item = toastQueue.shift();
    $("#toast-text").textContent = item.msg;
    $("#toast-icon").textContent = item.icon;
    toast.classList.add("show");
    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(drainToasts, 340);
    }, 2400);
  }

  function confetti(n) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colors = COLORS;
    for (var i = 0; i < n; i++) {
      var bit = document.createElement("span");
      bit.className = "confetti-bit";
      bit.style.background = colors[i % colors.length];
      bit.style.setProperty("--dx", ((Math.random() * 2 - 1) * 430).toFixed(0) + "px");
      bit.style.setProperty("--dy", ((Math.random() * 2 - 1) * 430).toFixed(0) + "px");
      bit.style.setProperty("--rot", ((Math.random() * 2 - 1) * 540).toFixed(0) + "deg");
      bit.style.animationDelay = (Math.random() * 0.12).toFixed(2) + "s";
      document.body.appendChild(bit);
      (function (el) { setTimeout(function () { el.remove(); }, 1500); })(bit);
    }
  }

  /* ---------------- filtreler ---------------- */
  function clearFilters() {
    filters = { q: "", cat: "all", lvl: "all", dur: "all", sort: "default" };
    $("#search").value = "";
    $("#duration").value = "all";
    $("#sort").value = "default";
    syncChips();
    renderGrid();
  }

  /* ---------------- profiller arayüzü ---------------- */
  var profileDialog = $("#profile-dialog");
  var certificate = $("#certificate");

  function renderProfileList() {
    var p = P();
    var ids = Object.keys(store.profiles);
    if (!ids.length) {
      $("#profile-list").innerHTML = '<p class="meta">' + esc(t("profileText")) + "</p>";
      return;
    }
    $("#profile-list").innerHTML = ids.map(function (id) {
      var prof = store.profiles[id];
      var active = id === store.active;
      var lvl = levelInfo(prof.xp || 0);
      return '<div class="profile-row' + (active ? " is-active" : "") + '">' +
        '<span class="avatar">' + esc(initials(prof.name)) + "</span>" +
        '<div class="p-info"><b>' + esc(prof.name) + "</b><small>" +
          esc(t("profileStats", { done: prof.completed.length, xp: prof.xp || 0 })) + " · " +
          esc(t("levelPrefix") + " " + (lvl.idx + 1)) + "</small></div>" +
        (active ? '<span class="p-badge">' + esc(t("profileActive")) + "</span>" : "") +
        '<div class="p-actions">' +
          (active ? "" : '<button type="button" class="p-switch" data-switch="' + id + '" aria-label="' +
            esc(t("profileSwitchAria", { name: prof.name })) + '">' + esc(t("profileSwitch")) + "</button>") +
          '<button type="button" class="p-del" data-del="' + id + '" aria-label="' +
            esc(t("profileDeleteAria", { name: prof.name })) + '">' + esc(t("profileDelete")) + "</button>" +
        "</div>" +
      "</div>";
    }).join("");
    if (p.name) { /* aktif profil var */ }
  }

  function allQuizzesPerfect(p) {
    if (!p || !p.quiz) return false;
    var quizIds = TRAININGS.map(function (t) { return t.id; });
    return quizIds.every(function (id) {
      var q = p.quiz[id];
      return !!q && q.total > 0 && q.best === q.total;
    });
  }

  function allTrainingsCompleted(p) {
    if (!p || !Array.isArray(p.completed)) return false;
    return TRAININGS.every(function (tr) { return p.completed.indexOf(tr.id) !== -1; });
  }

  function certificateEligible(p) {
    return allTrainingsCompleted(p) && allQuizzesPerfect(p);
  }

  function renderCertificateButton() {
    var button = $("#page-cert-btn");
    var status = $("#cert-cta-status");
    if (!button) return;
    var ready = certificateEligible(hasProfile() ? P() : null);
    button.disabled = !ready;
    button.setAttribute("aria-disabled", ready ? "false" : "true");
    if (status) status.textContent = ready ? t("certReady") : t("toastCertLocked");
  }

  function renderCertificate() {
    var p = P();
    var eligible = certificateEligible(p);
    var lockEl = $("#cert-lock");
    var contentEl = $("#cert-content");
    var lockMsg = $("#cert-lock-msg");
    if (lockEl) lockEl.style.display = eligible ? "none" : "block";
    if (contentEl) contentEl.style.display = eligible ? "block" : "none";
    if (lockMsg) lockMsg.textContent = t("toastCertLocked");

    if (!eligible) return;

    var lvl = levelInfo(p.xp || 0);
    var today = todayStr();
    var name = p.name || t("guestName");
    $("#cert-name").textContent = esc(name);
    $("#cert-level").textContent = lvl.idx + 1;
    $("#cert-xp").textContent = p.xp || 0;
    $("#cert-trainings").textContent = p.completed.length;
    $("#cert-badges").textContent = p.badges.length;
    $("#cert-date").textContent = today;
    var orgEl = document.querySelector('[data-i18n="orgName"]');
    if (orgEl) orgEl.textContent = t("orgName");
  }

  function openCertificate() {
    var p = P();
    renderCertificate();
    if (!certificate.open) certificate.showModal();
    if (!certificateEligible(p)) {
      showToast(t("toastCertLocked"), "🔒");
    }
  }

  /* ---------------- karşılama ---------------- */
  var welcome = $("#welcome");

  function openWelcome() {
    applyWelcomeLock(true);
    if (!welcome.open) welcome.showModal();
    $("#welcome-input").value = "";
    setTimeout(function () {
      drawConstellation(welcomeCanvas, 180);
      $("#welcome-input").focus();
    }, 60);
  }

  function applyWelcomeLock(on) {
    document.body.style.overflow = on ? "hidden" : "";
  }

  /* ---------------- takımyıldız ---------------- */
  var heroCanvas = $("#constellation");
  var welcomeCanvas = $("#welcome-constellation");
  var constellationRaf = null;
  var mouseX = null, mouseY = null;
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function palette() {
    return theme === "light"
      ? ["#6d3bf5", "#b8790a", "#0f7a52", "#9333ea", "#2563eb", "#db2777"]
      : ["#8052ff", "#ffb829", "#3dbd9c", "#c084fc", "#7da2ff", "#f472b6"];
  }

  function drawTriangle(ctx, x, y, s, rot, color, filled) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.87, s * 0.5);
    ctx.lineTo(-s * 0.87, s * 0.5);
    ctx.closePath();
    if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawConstellation(canvas, density) {
    if (!canvas) return;
    var rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var w = rect.width, h = rect.height;
    var cx = w / 2, cy = h / 2;
    var cols = palette();
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var N = density || 420;
    if (w < 600) N = Math.round(N * 0.72);

    // Scattered / distributed home positions (organic constellation), not a rigid grid.
    // Points live in an organic cloud around center with soft 3D-like depth variation.
    if (!canvas.__pts || canvas.__pts.length !== N) {
      canvas.__pts = [];
      for (var i = 0; i < N; i++) {
        var a = Math.random() * Math.PI * 2;
        var u = Math.sqrt(Math.random());
        var rx = Math.min(w, h) * (0.30 + 0.22 * u);
        var ry = Math.min(w, h) * (0.26 + 0.20 * u);
        var depth = 0.5 + Math.random() * 0.8; // perceived depth layer
        canvas.__pts.push({
          x: cx + Math.cos(a) * u * rx,
          y: cy + Math.sin(a) * u * ry,
          hx: cx + Math.cos(a) * u * rx,
          hy: cy + Math.sin(a) * u * ry,
          vx: 0, vy: 0,
          s: 0.9 + depth * 2.0,
          c: cols[i % cols.length],
          filled: Math.random() > 0.55,
          phase: Math.random() * Math.PI * 2,
          rot: Math.random() * Math.PI,
          depth: depth,
          floatX: Math.random() * 100,
          floatY: Math.random() * 100
        });
      }
    }
    var pts = canvas.__pts;

    var amb = [];
    for (var j = 0; j < 34; j++) {
      amb.push({
        x: Math.random() * w, y: Math.random() * h, s: 0.9 + Math.random() * 1.5,
        c: cols[Math.floor(Math.random() * cols.length)],
        o: 0.12 + Math.random() * 0.28, phase: Math.random() * 6.28
      });
    }

    var start = performance.now();
    if (canvas.__raf) { cancelAnimationFrame(canvas.__raf); canvas.__raf = null; }

    function frame(now) {
      var time = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      // mouse position relative to this canvas
      var mx = mouseX != null ? mouseX - rect.left : -99999;
      var my = mouseY != null ? mouseY - rect.top : -99999;

      ctx.globalAlpha = 1;
      for (var k = 0; k < amb.length; k++) {
        var am = amb[k];
        var ao = am.o * (reduced ? 1 : 0.65 + 0.35 * Math.sin(time * 0.9 + am.phase));
        ctx.globalAlpha = ao;
        drawTriangle(ctx, am.x, am.y, am.s, 0, am.c, false);
      }

      for (var m = 0; m < pts.length; m++) {
        var pt = pts[m];

        // gentle floating motion (3D-like depth parallax)
        var fx = Math.sin(time * 0.8 + pt.floatX) * (0.6 + pt.depth * 0.4);
        var fy = Math.cos(time * 0.6 + pt.floatY) * (0.6 + pt.depth * 0.4);
        var tx = pt.hx + fx;
        var ty = pt.hy + fy;

        // mouse attraction when close
        var ax = (tx - pt.x) * 0.015;
        var ay = (ty - pt.y) * 0.015;
        if (mouseX != null) {
          var mdx = mx - pt.x, mdy = my - pt.y;
          var md = Math.sqrt(mdx * mdx + mdy * mdy);
          if (md < 200) {
            var pull = (1 - md / 200) * 0.025;
            ax += mdx * pull;
            ay += mdy * pull;
          }
        }

        pt.vx += ax; pt.vy += ay;
        pt.vx *= 0.90; pt.vy *= 0.90;
        pt.x += pt.vx; pt.y += pt.vy;

        // depth-based alpha: farther = fainter
        var alpha = 0.35 + 0.55 * pt.depth;
        var tw = reduced ? 0.8 : 0.55 + 0.45 * Math.sin(time * 1.15 + pt.phase);
        ctx.globalAlpha = alpha * tw;
        drawTriangle(ctx, pt.x, pt.y, pt.s, pt.rot, pt.c, pt.filled);
      }
      ctx.globalAlpha = 1;
      if (!reduced) canvas.__raf = requestAnimationFrame(frame);
    }
    frame(performance.now());
  }

  /* ---------------- diyalog kapatma ---------------- */
  function closeAuxDialogs() {
    [detail, quizDialog, profileDialog].forEach(function (d) { if (d.open) d.close(); });
  }

  /* ---------------- olay bağlama ---------------- */
  function bind() {
    $("#theme-toggle").addEventListener("click", toggleTheme);

    $all(".lang-select").forEach(function (select) {
      select.addEventListener("change", function () { setLang(select.value); });
    });

    $("#profile-btn").addEventListener("click", function () {
      if (!hasProfile()) { openWelcome(); return; }
      renderProfileList();
      if (!profileDialog.open) profileDialog.showModal();
    });

    $("#close-profile").addEventListener("click", function () { profileDialog.close(); });
    $("#page-cert-btn").addEventListener("click", openCertificate);

    $("#profile-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var input = $("#profile-input");
      var name = input.value.trim();
      if (!name) return;
      createProfile(name);
      input.value = "";
      if (profileDialog.open) profileDialog.close();
    });

    $("#profile-list").addEventListener("click", function (e) {
      var sw = e.target.closest("[data-switch]");
      if (sw) { switchProfile(sw.getAttribute("data-switch")); closeAuxDialogs(); return; }
      var del = e.target.closest("[data-del]");
      if (del) deleteProfile(del.getAttribute("data-del"));
    });

    $("#category-chips").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-cat]");
      if (!btn) return;
      filters.cat = btn.getAttribute("data-cat");
      syncChips();
      renderGrid();
    });

    $("#level-chips").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-lvl]");
      if (!btn) return;
      filters.lvl = btn.getAttribute("data-lvl");
      syncChips();
      renderGrid();
    });

    var searchTimer = null;
    $("#search").addEventListener("input", function (e) {
      var v = e.target.value;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () { filters.q = v; renderGrid(); }, 120);
    });

    $("#duration").addEventListener("change", function (e) { filters.dur = e.target.value; renderGrid(); });
    $("#sort").addEventListener("change", function (e) { filters.sort = e.target.value; renderGrid(); });
    $("#clear-filters").addEventListener("click", clearFilters);

    $("#grid").addEventListener("click", function (e) {
      var doneBtn = e.target.closest("[data-done]");
      if (doneBtn) { e.preventDefault(); toggleComplete(doneBtn.getAttribute("data-done")); return; }
      var card = e.target.closest(".card");
      if (card) openDetail(card.getAttribute("data-id"));
    });

    $("#badge-strip").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-badge]");
      if (!btn) return;
      var b = badgeById(btn.getAttribute("data-badge"));
      if (!b) return;
      var meta = b[lang] || b.en;
      var earned = P().badges.indexOf(b.id) !== -1;
      showToast(meta.n + " — " + meta.d + (earned ? "" : " (" + t("badgeLocked") + ")"), earned ? "🏅" : "🔒");
    });

    $("#close-detail").addEventListener("click", function () { detail.close(); });
    $("#detail-toggle").addEventListener("click", function () {
      if (detail.dataset.id) toggleComplete(detail.dataset.id);
    });
    $("#detail-quiz").addEventListener("click", function () {
      if (detail.dataset.id) openQuiz(detail.dataset.id);
    });

    $("#close-quiz").addEventListener("click", function () { quizDialog.close(); });
    $("#quiz-body").addEventListener("click", function (e) {
      var opt = e.target.closest("[data-opt]");
      if (opt) answerQuiz(parseInt(opt.getAttribute("data-opt"), 10));
    });
    $("#quiz-foot").addEventListener("click", function (e) {
      if (e.target.closest("#quiz-next")) nextQuiz();
      else if (e.target.closest("#quiz-retry")) {
        quizState = { id: quizState.id, i: 0, correct: 0, answered: false, chosen: -1, result: null };
        renderQuiz();
      } else if (e.target.closest("#quiz-close-btn")) quizDialog.close();
    });

    [detail, quizDialog, profileDialog, certificate].forEach(function (d) {
      d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
    });

    $("#cert-print").addEventListener("click", function () { window.print(); });
    $("#close-cert").addEventListener("click", function () { certificate.close(); });
    $all(".cert-close-btn").forEach(function (button) {
      button.addEventListener("click", function () { certificate.close(); });
    });

    welcome.addEventListener("cancel", function (e) { e.preventDefault(); });
    welcome.addEventListener("click", function (e) { if (e.target === welcome) e.preventDefault(); });

    $("#welcome-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#welcome-input").value.trim();
      if (!name) return;
      createProfile(name);
    });
    $("#welcome-guest").addEventListener("click", function () { createProfile(t("guestName")); });

    quizDialog.addEventListener("toggle", function (e) {
      if (e.newState !== "closed") return;
      var id = quizState.id;
      quizState.id = null;
      if (id) openDetail(id);
    });

    certificate.addEventListener("toggle", function () {
      if (certificate.open) renderCertificate();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        $("#search").focus();
        $("#search").select();
      }
    });

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        drawConstellation(heroCanvas, 720);
        if (welcome.open) drawConstellation(welcomeCanvas, 180);
      }, 180);
    });
  }

  /* ---------------- başlat ---------------- */
  function init() {
    ingestPacks();
    store = loadStore();
    lang = LANG_CODES.indexOf(store.lang) !== -1 ? store.lang : detectLang();
    theme = store.theme === "light" ? "light" : "dark";
    applyTheme();
    applyI18n();
    buildChips();
    bind();
    renderAll();

    if (!hasProfile()) {
      openWelcome();
    } else {
      var p = P();
      setProfileDefaults(p);
      if (evaluateBadges(p, true).length) save();
      renderAll();
    }

    drawConstellation(heroCanvas, 720);

    window.addEventListener("beforeunload", save);
  }

  init();
})();

