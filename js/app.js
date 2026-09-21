(function () {
  const app = document.getElementById("app");
  const CURRICULUM = window.CURRICULUM;
  const FLASHCARDS = window.FLASHCARDS;
  const MCQ = window.MCQ;
  const ALGORITHMS = window.ALGORITHMS || [];
  const TABLES = window.TABLES || [];
  const SOE_SCENARIOS = window.SOE_SCENARIOS || [];
  let progress = window.SRS.loadProgress();

  function moduleById(id) {
    return CURRICULUM.find(function (m) { return m.id === id; });
  }
  function subtopicTitle(moduleId, subtopicId) {
    const m = moduleById(moduleId);
    if (!m) return subtopicId;
    const s = m.subtopics.find(function (s) { return s.id === subtopicId; });
    return s ? s.title : subtopicId;
  }
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // Strukturiertes Steckbrief-Layout (Medikamenten-Karten): jedes Feld ein eigener,
  // farblich signalisierter Block statt Fließtext (Chunking + Signaling-Prinzip
  // nach Mayer, reduziert kognitive Last beim Scannen sicherheitskritischer Fakten).
  const PROFILE_FIELDS = [
    { key: "klasse", label: "Substanzklasse" },
    { key: "mechanismus", label: "Wirkmechanismus", cls: "mechanism" },
    { key: "indikation", label: "Indikation" },
    { key: "dosierung", label: "Dosierung Erwachsene" },
    { key: "pharmakokinetik", label: "Pharmakokinetik" },
    { key: "nebenwirkungen", label: "Nebenwirkungen" },
    { key: "kontraindikationen", label: "Kontraindikationen / Vorsicht", cls: "warning" },
    { key: "interaktionen", label: "Interaktionen" },
    { key: "antidot", label: "Antidot / Reversal", cls: "antidote" },
    { key: "cave", label: "Cave / Prüfungsklassiker", cls: "warning" },
    { key: "quelle", label: "Quelle", cls: "source" }
  ];

  function renderProfile(profile) {
    return PROFILE_FIELDS.map(function (f) {
      const val = profile[f.key];
      if (!val) return "";
      const cls = "db-row" + (f.cls ? " db-row--" + f.cls : "");
      return '<div class="' + cls + '"><div class="db-label">' + escapeHtml(f.label) + '</div><div class="db-value">' + escapeHtml(val) + "</div></div>";
    }).join("");
  }

  // ---------- Begriff markieren & nachschlagen ----------
  // Nutzer markiert ein unklares Wort (z.B. "PRIS") mit der Maus während des Lernens
  // oder in der Testauswertung. Gibt es dazu eine Karte, wird sie sofort auf "fällig"
  // gesetzt und in die laufende Session eingereiht. Gibt es keine, wird der Begriff
  // als "Wissenslücke" im Dashboard gemerkt, statt verloren zu gehen.
  // Bevorzugt Karten, deren Frage/Titel den Begriff direkt enthält, vor Karten, die
  // ihn nur beiläufig im Fließtext erwähnen (relevanteste Treffer zuerst, max. 3).
  function searchCards(term, excludeId) {
    const t = term.trim().toLowerCase();
    if (!t) return [];
    const scored = [];
    FLASHCARDS.forEach(function (c) {
      if (c.id === excludeId) return;
      const front = c.front.toLowerCase();
      const body = ((c.back || "") + " " + (c.profile ? JSON.stringify(c.profile) : "")).toLowerCase();
      let score = 0;
      if (front.indexOf(t) !== -1) score = 3;
      else if (c.profile && c.profile.klasse && c.profile.klasse.toLowerCase().indexOf(t) !== -1) score = 2;
      else if (body.indexOf(t) !== -1) score = 1;
      if (score > 0) scored.push({ card: c, score: score });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 3).map(function (s) { return s.card; });
  }

  function showCardModal(card) {
    const isProfile = !!card.profile;
    const content = isProfile ? renderProfile(card.profile) : '<div class="modal-plain-back">' + escapeHtml(card.back) + "</div>";
    const backdrop = document.createElement("div");
    backdrop.className = "lookup-modal-backdrop";
    backdrop.innerHTML =
      '<div class="lookup-modal">' +
      '<button class="lookup-modal-close" aria-label="Schließen">×</button>' +
      '<div class="lookup-modal-front">' + escapeHtml(card.front) + "</div>" +
      '<div class="lookup-modal-body">' + content + "</div>" +
      '<p class="lookup-modal-hint muted">Wird dir bald wieder zum Lernen vorgeschlagen.</p>' +
      "</div>";
    document.body.appendChild(backdrop);
    function close() { backdrop.remove(); }
    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) close(); });
    backdrop.querySelector(".lookup-modal-close").addEventListener("click", close);
  }

  function showToast(msg) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 3200);
  }

  function handleLookup(term, sourceEl) {
    const currentId = sourceEl.getAttribute("data-card-id") || null;
    const sourceFront = sourceEl.getAttribute("data-card-front") || "";
    const matches = searchCards(term, currentId);
    if (matches.length > 0) {
      matches.forEach(function (c) { window.SRS.scheduleSoon(progress, c.id); });
      showCardModal(matches[0]);
      if (matches.length > 1) {
        showToast((matches.length - 1) + " weitere Karte(n) zu „" + term + "“ wurden ebenfalls bald eingeplant.");
      }
    } else {
      window.SRS.addGap(term, sourceFront);
      showToast('Kein Eintrag zu „' + term + '“ gefunden – als Wissenslücke gemerkt (siehe Dashboard).');
    }
  }

  let lookupPopoverEl = null;
  function removeLookupPopover() {
    if (lookupPopoverEl) { lookupPopoverEl.remove(); lookupPopoverEl = null; }
  }

  // "selectionchange" statt "mouseup": funktioniert zuverlässig bei Touch-Auswahl
  // (Griffe ziehen auf dem Handy löst kein mouseup aus). Debounce, weil das Event
  // während des Ziehens sehr häufig feuert.
  function showLookupPopover(rect, text, sourceEl) {
    removeLookupPopover();
    const btn = document.createElement("button");
    btn.className = "lookup-popover";
    const shown = text.length > 30 ? text.slice(0, 30) + "…" : text;
    btn.textContent = '🔖 „' + shown + '“ nachschlagen';
    // Erst anhängen, dann messen (Breite unbekannt vor dem Rendern).
    btn.style.visibility = "hidden";
    document.body.appendChild(btn);
    const btnWidth = btn.offsetWidth || 200;
    const btnHeight = btn.offsetHeight || 44;
    // rect kommt aus getBoundingClientRect() und ist damit bereits Viewport-relativ —
    // genau wie position:fixed es braucht. NICHT mit scrollX/scrollY verrechnen,
    // sonst springt das Popover an die falsche Stelle, sobald die Seite gescrollt ist
    // (z.B. bei den langen Steckbrief-Karten auf dem Handy).
    // Bevorzugt unterhalb der Auswahl (auf dem Handy liegt die native Kopieren-Leiste
    // oberhalb) — passt es aber nicht mehr in den sichtbaren Bereich, klappt es nach oben.
    const spaceBelow = window.innerHeight - rect.bottom;
    const top = spaceBelow > btnHeight + 16
      ? rect.bottom + 10
      : Math.max(8, rect.top - btnHeight - 10);
    const maxLeft = window.innerWidth - btnWidth - 10;
    const left = Math.max(8, Math.min(rect.left, maxLeft));
    btn.style.top = top + "px";
    btn.style.left = left + "px";
    btn.style.visibility = "visible";
    // Nur bei Maus: verhindert kosmetisch, dass der Klick die Textauswahl vorher verwirft.
    // NICHT bei touchstart: preventDefault() dort unterdrückt in mobilen Browsern das
    // nachfolgende "click"-Event, der Tap würde sonst ins Leere gehen.
    btn.addEventListener("mousedown", function (ev) { ev.preventDefault(); });
    btn.addEventListener("click", function () {
      handleLookup(text, sourceEl);
      removeLookupPopover();
      const sel = window.getSelection();
      if (sel) sel.removeAllRanges();
    });
    lookupPopoverEl = btn;
  }

  function checkSelectionForLookup() {
    const sel = window.getSelection();
    const text = sel ? sel.toString().trim() : "";
    // Bei leerer/zu kurzer/zu langer Auswahl das evtl. offene Popover unangetastet lassen —
    // sonst verschwindet es genau in dem Moment, in dem der Finger/die Maus es antippt.
    if (!text || text.length < 2 || text.length > 60 || sel.rangeCount === 0) return;
    const anchorNode = sel.anchorNode;
    const container = anchorNode && anchorNode.nodeType === 3 ? anchorNode.parentElement : anchorNode;
    const sourceEl = container && container.closest ? container.closest(".lookup-source") : null;
    if (!sourceEl) return;
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (!rect || (rect.width === 0 && rect.height === 0)) return;
    showLookupPopover(rect, text, sourceEl);
  }

  let selectionDebounce = null;
  document.addEventListener("selectionchange", function () {
    clearTimeout(selectionDebounce);
    selectionDebounce = setTimeout(checkSelectionForLookup, 300);
  });

  // Popover schließen, wenn irgendwo anders hingetippt/-geklickt wird (Maus & Touch).
  ["mousedown", "touchstart"].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      if (lookupPopoverEl && !(e.target.closest && e.target.closest(".lookup-popover"))) {
        removeLookupPopover();
      }
    });
  });

  // ---------- Routing ----------
  function router() {
    const hash = location.hash || "#/dashboard";
    const parts = hash.replace(/^#\//, "").split("/");
    const route = parts[0] || "dashboard";
    const arg = parts[1];
    if (route === "learn") renderLearnSetup(arg);
    else if (route === "learn-session") startLearnSession(arg);
    else if (route === "test") renderTestSetup();
    else if (route === "test-session") startTestSession(arg);
    else if (route === "progress") renderProgress();
    else if (route === "algorithms") renderAlgorithmList();
    else if (route === "algorithm") renderAlgorithmReference(arg);
    else if (route === "algorithm-quiz") startAlgorithmQuiz(arg);
    else if (route === "tables") renderTableList();
    else if (route === "table") renderTable(arg);
    else if (route === "soe") renderSOEList();
    else if (route === "soe-case") renderSOEDetail(arg);
    else renderDashboard();
    removeLookupPopover();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", router);

  function nav(activeRoute) {
    const items = [
      ["dashboard", "Dashboard"],
      ["learn", "Lernen"],
      ["test", "Test"],
      ["algorithms", "Algorithmen"],
      ["tables", "Tabellen"],
      ["soe", "Mündlich"],
      ["progress", "Fortschritt"]
    ];
    return (
      '<nav class="topnav">' +
      '<div class="brand">DESA-Trainer</div>' +
      '<div class="navlinks">' +
      items.map(function (it) {
        const cls = it[0] === activeRoute ? "navlink active" : "navlink";
        return '<a class="' + cls + '" href="#/' + it[0] + '">' + it[1] + "</a>";
      }).join("") +
      "</div></nav>"
    );
  }

  // ---------- Dashboard ----------
  function renderDashboard() {
    let totalCards = FLASHCARDS.length;
    let totalDue = window.SRS.getDueCards(FLASHCARDS, progress, "all").length;
    let totalMastered = 0;
    FLASHCARDS.forEach(function (c) {
      const st = progress[c.id];
      if (st && st.box >= 4) totalMastered++;
    });
    const results = window.SRS.loadResults();
    const lastResultsByModule = {};
    results.forEach(function (r) {
      if (!lastResultsByModule[r.module] || r.date > lastResultsByModule[r.module].date) {
        lastResultsByModule[r.module] = r;
      }
    });

    let moduleRows = CURRICULUM.map(function (m) {
      const stats = window.SRS.getModuleStats(FLASHCARDS, progress, m.id);
      const masteryPct = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;
      const lastResult = lastResultsByModule[m.id];
      const lastScore = lastResult ? Math.round((lastResult.correct / lastResult.total) * 100) + "%" : "–";
      return (
        '<tr>' +
        '<td data-label="Modul"><span class="part-badge">Teil ' + m.part + "</span> " + escapeHtml(m.title) + "</td>" +
        '<td data-label="Karten">' + stats.total + "</td>" +
        '<td data-label="Fällig">' + (stats.due > 0 ? '<span class="due-badge">' + stats.due + "</span>" : "0") + "</td>" +
        '<td data-label="Beherrschung"><div class="bar"><div class="bar-fill" style="width:' + masteryPct + '%"></div></div><span class="bar-label">' + masteryPct + "%</span></td>" +
        '<td data-label="Letzter Test">' + lastScore + "</td>" +
        '<td data-label="Aktionen" class="row-actions">' +
        '<a class="btn btn-sm" href="#/learn/' + m.id + '">Lernen</a> ' +
        '<a class="btn btn-sm btn-secondary" href="#/test-session/' + m.id + '">Testen</a>' +
        "</td></tr>"
      );
    }).join("");

    const gaps = window.SRS.loadGaps();
    const gapsHtml = gaps.length === 0 ? "" :
      '<h2>Offene Wissenslücken (' + gaps.length + ')</h2>' +
      '<p class="muted">Begriffe, die du markiert hast, zu denen es aber noch keine Karteikarte gibt.</p>' +
      '<ul class="gap-list">' +
      gaps.map(function (g) {
        return (
          '<li class="gap-item"><span>' + escapeHtml(g.term) + (g.source ? '<span class="gap-source"> — aus: ' + escapeHtml(g.source) + "</span>" : "") + "</span>" +
          '<button class="btn btn-sm btn-secondary" data-remove-gap="' + escapeHtml(g.term) + '">Erledigt</button></li>'
        );
      }).join("") +
      "</ul>";

    app.innerHTML =
      nav("dashboard") +
      '<main class="container">' +
      '<h1>Dein DESA-Lernstand</h1>' +
      '<div class="stat-cards">' +
      '<div class="stat-card"><div class="stat-value">' + totalDue + '</div><div class="stat-label">Karten heute fällig</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + totalMastered + " / " + totalCards + '</div><div class="stat-label">Karten gemeistert</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + MCQ.length + '</div><div class="stat-label">Testfragen verfügbar</div></div>' +
      "</div>" +
      '<div class="cta-row">' +
      '<a class="btn btn-primary" href="#/learn-session/all">Alle fälligen Karten lernen (' + totalDue + ")</a>" +
      '<a class="btn btn-secondary" href="#/test-session/mixed">Prüfungssimulation starten</a>' +
      "</div>" +
      '<h2>Module</h2>' +
      '<div class="table-scroll"><table class="module-table"><thead><tr><th>Modul</th><th>Karten</th><th>Fällig</th><th>Beherrschung</th><th>Letzter Test</th><th></th></tr></thead><tbody>' +
      moduleRows +
      "</tbody></table></div>" +
      gapsHtml +
      "</main>";

    document.querySelectorAll("[data-remove-gap]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.SRS.removeGap(btn.getAttribute("data-remove-gap"));
        renderDashboard();
      });
    });
  }

  // ---------- Learn ----------
  function renderLearnSetup(preselect) {
    const options = CURRICULUM.map(function (m) {
      const sel = preselect === m.id ? " selected" : "";
      return '<option value="' + m.id + '"' + sel + ">" + escapeHtml(m.title) + "</option>";
    }).join("");
    app.innerHTML =
      nav("learn") +
      '<main class="container narrow">' +
      "<h1>Karteikarten lernen</h1>" +
      '<p class="muted">Spaced Repetition (Leitner-System): fällige Karten werden zuerst wiederholt, neue Karten werden nach und nach eingeführt.</p>' +
      '<label for="learn-module">Modul</label>' +
      '<select id="learn-module"><option value="all"' + (preselect === "all" || !preselect ? " selected" : "") + '>Alle Module (gemischt)</option>' + options + "</select>" +
      '<div class="cta-row"><button class="btn btn-primary" id="start-learn">Lernsession starten</button></div>' +
      "</main>";
    document.getElementById("start-learn").addEventListener("click", function () {
      const mod = document.getElementById("learn-module").value;
      location.hash = "#/learn-session/" + mod;
    });
  }

  let learnQueue = [];
  let learnStats = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };

  function startLearnSession(moduleId) {
    const due = window.SRS.getDueCards(FLASHCARDS, progress, moduleId);
    const fresh = window.SRS.getNewCards(FLASHCARDS, progress, moduleId, 15);
    learnQueue = due.concat(fresh);
    learnStats = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    if (learnQueue.length === 0) {
      app.innerHTML =
        nav("learn") +
        '<main class="container narrow"><h1>Keine Karten fällig</h1>' +
        '<p>Für dieses Modul sind aktuell keine Karten fällig und keine neuen Karten verfügbar. Komm später wieder oder wähle ein anderes Modul.</p>' +
        '<a class="btn btn-secondary" href="#/learn">Zurück</a></main>';
      return;
    }
    renderLearnCard();
  }

  function renderLearnCard() {
    if (learnQueue.length === 0) {
      app.innerHTML =
        nav("learn") +
        '<main class="container narrow"><h1>Session abgeschlossen 🎉</h1>' +
        '<p>Karten wiederholt: <strong>' + learnStats.reviewed + '</strong></p>' +
        '<p>Nochmal: ' + learnStats.again + " · Schwer: " + learnStats.hard + " · Gut: " + learnStats.good + " · Leicht: " + learnStats.easy + '</p>' +
        '<div class="cta-row"><a class="btn btn-primary" href="#/dashboard">Zum Dashboard</a> <a class="btn btn-secondary" href="#/learn">Weiter lernen</a></div>' +
        "</main>";
      return;
    }
    const card = learnQueue[0];
    const remaining = learnQueue.length;
    const isProfile = !!card.profile;
    const backContent = isProfile ? renderProfile(card.profile) : escapeHtml(card.back);
    const backClass = "flashcard-back hidden lookup-source" + (isProfile ? " profile-back" : "");
    app.innerHTML =
      nav("learn") +
      '<main class="container narrow">' +
      '<div class="session-progress">Noch ' + remaining + " Karte(n) · " + escapeHtml(moduleById(card.module).title) + " – " + escapeHtml(subtopicTitle(card.module, card.subtopic)) + "</div>" +
      '<div class="flashcard' + (isProfile ? " flashcard-profile" : "") + '" id="flashcard">' +
      '<div class="flashcard-front">' + escapeHtml(card.front) + "</div>" +
      '<div class="' + backClass + '" id="flashcard-back" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + backContent + "</div>" +
      "</div>" +
      '<div class="cta-row" id="reveal-row"><button class="btn btn-primary" id="reveal-btn">Antwort zeigen</button></div>' +
      '<div class="rating-row hidden" id="rating-row">' +
      '<button class="btn rating-again" data-rating="again">Nochmal</button>' +
      '<button class="btn rating-hard" data-rating="hard">Schwer</button>' +
      '<button class="btn rating-good" data-rating="good">Gut</button>' +
      '<button class="btn rating-easy" data-rating="easy">Leicht</button>' +
      "</div>" +
      '<p class="lookup-hint muted">Tipp: markiere ein unklares Wort (z.B. „PRIS“) mit der Maus, um es nachzuschlagen.</p>' +
      "</main>";

    document.getElementById("reveal-btn").addEventListener("click", function () {
      document.getElementById("flashcard-back").classList.remove("hidden");
      document.getElementById("reveal-row").classList.add("hidden");
      document.getElementById("rating-row").classList.remove("hidden");
    });
    document.querySelectorAll("#rating-row button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const rating = btn.getAttribute("data-rating");
        window.SRS.reviewCard(progress, card.id, rating);
        learnStats.reviewed++;
        learnStats[rating]++;
        learnQueue.shift();
        if (rating === "again") learnQueue.splice(Math.min(3, learnQueue.length), 0, card);
        renderLearnCard();
      });
    });
  }

  // ---------- Test ----------
  function renderTestSetup() {
    const options = CURRICULUM.map(function (m) {
      return '<option value="' + m.id + '">' + escapeHtml(m.title) + " (" + MCQ.filter(function(q){return q.module===m.id;}).length + " Fragen)</option>";
    }).join("");
    app.innerHTML =
      nav("test") +
      '<main class="container narrow">' +
      "<h1>Testmodus</h1>" +
      '<p class="muted">Single-Best-Answer-Fragen im EDAIC-Stil. Wähle ein Modul oder starte eine gemischte Prüfungssimulation.</p>' +
      '<label for="test-module">Modul</label>' +
      '<select id="test-module"><option value="mixed">Gemischt (Prüfungssimulation)</option>' + options + "</select>" +
      '<label for="test-count">Anzahl Fragen</label>' +
      '<select id="test-count">' +
      '<option value="10">10</option>' +
      '<option value="20">20</option>' +
      '<option value="40">40</option>' +
      '<option value="all">Alle verfügbaren</option>' +
      "</select>" +
      '<div class="cta-row"><button class="btn btn-primary" id="start-test">Test starten</button></div>' +
      "</main>";
    document.getElementById("start-test").addEventListener("click", function () {
      const mod = document.getElementById("test-module").value;
      const count = document.getElementById("test-count").value;
      location.hash = "#/test-session/" + mod + "-" + count;
    });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let testState = null;

  function startTestSession(arg) {
    let moduleId = "mixed";
    let count = "20";
    if (arg && arg !== "mixed") {
      const idx = arg.lastIndexOf("-");
      if (idx > -1 && !isNaN(parseInt(arg.slice(idx + 1), 10))) {
        moduleId = arg.slice(0, idx);
        count = arg.slice(idx + 1);
      } else if (arg.endsWith("-all")) {
        moduleId = arg.slice(0, arg.length - 4);
        count = "all";
      } else {
        moduleId = arg;
      }
    } else if (arg === "mixed") {
      moduleId = "mixed";
    }

    let pool = moduleId === "mixed" ? MCQ.slice() : MCQ.filter(function (q) { return q.module === moduleId; });
    pool = shuffle(pool);
    if (count !== "all") pool = pool.slice(0, parseInt(count, 10));

    if (pool.length === 0) {
      app.innerHTML = nav("test") + '<main class="container narrow"><h1>Keine Fragen verfügbar</h1><a class="btn btn-secondary" href="#/test">Zurück</a></main>';
      return;
    }

    testState = {
      questions: pool,
      index: 0,
      answers: new Array(pool.length).fill(null),
      moduleId: moduleId
    };
    renderTestQuestion();
  }

  function renderTestQuestion() {
    const q = testState.questions[testState.index];
    const total = testState.questions.length;
    const optionsHtml = q.options.map(function (opt, i) {
      return (
        '<label class="option-row">' +
        '<input type="radio" name="option" value="' + i + '"' + (testState.answers[testState.index] === i ? " checked" : "") + ">" +
        '<span>' + String.fromCharCode(65 + i) + ") " + escapeHtml(opt) + "</span>" +
        "</label>"
      );
    }).join("");

    app.innerHTML =
      nav("test") +
      '<main class="container narrow">' +
      '<div class="session-progress">Frage ' + (testState.index + 1) + " / " + total + " · " + escapeHtml(moduleById(q.module).title) + "</div>" +
      '<div class="question-box"><p class="question-text">' + escapeHtml(q.question) + "</p>" +
      '<div class="options">' + optionsHtml + "</div></div>" +
      '<div class="cta-row">' +
      (testState.index > 0 ? '<button class="btn btn-secondary" id="prev-btn">Zurück</button>' : "") +
      '<button class="btn btn-primary" id="next-btn">' + (testState.index === total - 1 ? "Test abschließen" : "Weiter") + "</button>" +
      "</div>" +
      "</main>";

    document.querySelectorAll('input[name="option"]').forEach(function (input) {
      input.addEventListener("change", function () {
        testState.answers[testState.index] = parseInt(input.value, 10);
      });
    });
    if (document.getElementById("prev-btn")) {
      document.getElementById("prev-btn").addEventListener("click", function () {
        testState.index--;
        renderTestQuestion();
      });
    }
    document.getElementById("next-btn").addEventListener("click", function () {
      if (testState.index === total - 1) {
        finishTest();
      } else {
        testState.index++;
        renderTestQuestion();
      }
    });
  }

  function finishTest() {
    let correct = 0;
    const wrong = [];
    testState.questions.forEach(function (q, i) {
      if (testState.answers[i] === q.correct) correct++;
      else wrong.push({ q: q, given: testState.answers[i] });
    });
    const total = testState.questions.length;
    const pct = Math.round((correct / total) * 100);

    const results = window.SRS.loadResults();
    results.push({
      date: new Date().toISOString(),
      module: testState.moduleId,
      total: total,
      correct: correct
    });
    window.SRS.saveResults(results);

    const wrongHtml = wrong.map(function (w) {
      const givenText = w.given === null ? "keine Antwort" : String.fromCharCode(65 + w.given) + ") " + escapeHtml(w.q.options[w.given]);
      const correctText = String.fromCharCode(65 + w.q.correct) + ") " + escapeHtml(w.q.options[w.q.correct]);
      return (
        '<div class="review-item lookup-source" data-card-id="' + escapeHtml(w.q.id) + '" data-card-front="' + escapeHtml(w.q.question) + '">' +
        '<p class="question-text">' + escapeHtml(w.q.question) + "</p>" +
        '<p class="wrong-answer">Deine Antwort: ' + givenText + "</p>" +
        '<p class="correct-answer">Richtig: ' + correctText + "</p>" +
        '<p class="explanation">' + escapeHtml(w.q.explanation) + "</p>" +
        "</div>"
      );
    }).join("");

    app.innerHTML =
      nav("test") +
      '<main class="container narrow">' +
      "<h1>Testergebnis</h1>" +
      '<div class="score-circle">' + pct + "%</div>" +
      '<p>' + correct + " von " + total + " Fragen richtig beantwortet.</p>" +
      '<div class="cta-row"><a class="btn btn-primary" href="#/test">Neuer Test</a> <a class="btn btn-secondary" href="#/progress">Fortschritt ansehen</a></div>' +
      (wrong.length > 0 ? "<h2>Falsch beantwortete Fragen</h2>" + wrongHtml : "<p>Alle Fragen richtig! 🎉</p>") +
      "</main>";
  }

  // ---------- Progress ----------
  function renderProgress() {
    const results = window.SRS.loadResults().slice().reverse();
    const resultRows = results.slice(0, 30).map(function (r) {
      const pct = Math.round((r.correct / r.total) * 100);
      const modName = r.module === "mixed" ? "Gemischt (Prüfungssimulation)" : (moduleById(r.module) ? moduleById(r.module).title : r.module);
      const date = new Date(r.date).toLocaleString("de-DE");
      return '<tr><td data-label="Datum">' + date + '</td><td data-label="Modul">' + escapeHtml(modName) + '</td><td data-label="Ergebnis">' + r.correct + "/" + r.total + " (" + pct + "%)</td></tr>";
    }).join("");

    const moduleBars = CURRICULUM.map(function (m) {
      const stats = window.SRS.getModuleStats(FLASHCARDS, progress, m.id);
      const boxCounts = [0, 0, 0, 0, 0, 0];
      FLASHCARDS.filter(function (c) { return c.module === m.id; }).forEach(function (c) {
        const st = progress[c.id];
        boxCounts[st ? st.box : 0]++;
      });
      const masteryPct = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;
      return (
        '<div class="progress-module">' +
        '<div class="progress-module-title">' + escapeHtml(m.title) + " – " + masteryPct + "% gemeistert (" + stats.mastered + "/" + stats.total + ")</div>" +
        '<div class="bar"><div class="bar-fill" style="width:' + masteryPct + '%"></div></div>' +
        "</div>"
      );
    }).join("");

    app.innerHTML =
      nav("progress") +
      '<main class="container">' +
      "<h1>Fortschritt</h1>" +
      "<h2>Beherrschung je Modul</h2>" +
      moduleBars +
      "<h2>Testverlauf</h2>" +
      (results.length === 0
        ? "<p>Noch keine Tests absolviert.</p>"
        : '<div class="table-scroll"><table class="module-table"><thead><tr><th>Datum</th><th>Modul</th><th>Ergebnis</th></tr></thead><tbody>' + resultRows + "</tbody></table></div>") +
      "</main>";
  }

  // ---------- Algorithmen ----------
  // Prozedurales Wissen (Reanimation, schwieriger Atemweg, Notfallmanagement) lernt
  // sich schlechter über isolierte Karteikarten als über die tatsächliche Reihenfolge.
  // Zwei Modi: (1) Referenz — die volle Schrittfolge zum Nachlesen; (2) Quiz — an
  // jedem Punkt den richtigen nächsten Schritt aus mehreren Optionen auswählen.
  function algorithmById(id) {
    return ALGORITHMS.find(function (a) { return a.id === id; });
  }

  function renderAlgorithmList() {
    const groups = {};
    ALGORITHMS.forEach(function (a) {
      (groups[a.category] = groups[a.category] || []).push(a);
    });
    const groupsHtml = Object.keys(groups).map(function (cat) {
      const cards = groups[cat].map(function (a) {
        return (
          '<div class="algo-card">' +
          '<div class="algo-card-title">' + escapeHtml(a.title) + "</div>" +
          '<div class="algo-card-meta muted">' + a.steps.length + " Schritte · " + escapeHtml(a.source) + "</div>" +
          '<div class="cta-row">' +
          '<a class="btn btn-sm btn-secondary" href="#/algorithm/' + a.id + '">Nachlesen</a>' +
          '<a class="btn btn-sm btn-primary" href="#/algorithm-quiz/' + a.id + '">Trainer starten</a>' +
          "</div></div>"
        );
      }).join("");
      return "<h2>" + escapeHtml(cat) + "</h2>" + '<div class="algo-grid">' + cards + "</div>";
    }).join("");

    app.innerHTML =
      nav("algorithms") +
      '<main class="container">' +
      "<h1>Notfall-Algorithmen</h1>" +
      '<p class="muted">Reihenfolge und Handlungsschritte üben – prozedurales Wissen statt reiner Fakten.</p>' +
      groupsHtml +
      "</main>";
  }

  function renderAlgorithmReference(id) {
    const algo = algorithmById(id);
    if (!algo) { renderAlgorithmList(); return; }
    const stepsHtml = algo.steps.map(function (s, i) {
      return (
        '<li class="algo-step">' +
        '<span class="algo-step-num">' + (i + 1) + "</span>" +
        '<span class="algo-step-text lookup-source" data-card-id="algo-' + algo.id + '-' + i + '" data-card-front="' + escapeHtml(algo.title) + '">' + escapeHtml(s) + "</span>" +
        "</li>"
      );
    }).join("");
    app.innerHTML =
      nav("algorithms") +
      '<main class="container narrow">' +
      '<a class="back-link" href="#/algorithms">← Alle Algorithmen</a>' +
      "<h1>" + escapeHtml(algo.title) + "</h1>" +
      '<p class="muted">Quelle: ' + escapeHtml(algo.source) + "</p>" +
      '<ol class="algo-timeline">' + stepsHtml + "</ol>" +
      '<div class="cta-row"><a class="btn btn-primary" href="#/algorithm-quiz/' + algo.id + '">Als Trainer üben</a></div>' +
      "</main>";
  }

  let algoQuizState = null;

  function startAlgorithmQuiz(id) {
    const algo = algorithmById(id);
    if (!algo || algo.steps.length < 2) { renderAlgorithmList(); return; }
    algoQuizState = { algo: algo, index: 1, correct: 0, total: algo.steps.length - 1, revealed: [algo.steps[0]] };
    renderAlgorithmQuizStep();
  }

  function renderAlgorithmQuizStep() {
    const state = algoQuizState;
    const algo = state.algo;
    const revealedHtml = state.revealed.map(function (s, i) {
      return '<li class="algo-step done"><span class="algo-step-num">' + (i + 1) + "</span><span class=\"algo-step-text\">" + escapeHtml(s) + "</span></li>";
    }).join("");

    if (state.index >= algo.steps.length) {
      app.innerHTML =
        nav("algorithms") +
        '<main class="container narrow">' +
        "<h1>" + escapeHtml(algo.title) + " – fertig</h1>" +
        '<div class="score-circle">' + state.correct + "/" + state.total + "</div>" +
        "<p>Richtige Schritte in korrekter Reihenfolge erkannt.</p>" +
        '<div class="cta-row"><a class="btn btn-primary" href="#/algorithm/' + algo.id + '">Ablauf nachlesen</a> <a class="btn btn-secondary" href="#/algorithms">Zurück</a></div>' +
        "</main>";
      return;
    }

    const correctStep = algo.steps[state.index];
    const pool = algo.steps.filter(function (s, i) { return i !== state.index && state.revealed.indexOf(s) === -1; });
    const distractors = shuffle(pool).slice(0, Math.min(2, pool.length));
    const options = shuffle([correctStep].concat(distractors));

    app.innerHTML =
      nav("algorithms") +
      '<main class="container narrow">' +
      '<div class="session-progress">' + escapeHtml(algo.title) + " · Schritt " + (state.index + 1) + " / " + algo.steps.length + "</div>" +
      '<ol class="algo-timeline">' + revealedHtml + "</ol>" +
      '<p class="algo-question">Was ist der nächste Schritt?</p>' +
      '<div class="options" id="algo-options">' +
      options.map(function (opt, i) {
        return '<label class="option-row" data-correct="' + (opt === correctStep ? "1" : "0") + '"><input type="radio" name="algo-option" value="' + i + '"><span>' + escapeHtml(opt) + "</span></label>";
      }).join("") +
      "</div>" +
      '<div class="cta-row"><button class="btn btn-primary" id="algo-check-btn" disabled>Prüfen</button></div>' +
      "</main>";

    let chosenCorrect = null;
    document.querySelectorAll('input[name="algo-option"]').forEach(function (input) {
      input.addEventListener("change", function () {
        document.getElementById("algo-check-btn").disabled = false;
        chosenCorrect = input.closest(".option-row").getAttribute("data-correct") === "1";
      });
    });
    document.getElementById("algo-check-btn").addEventListener("click", function () {
      document.querySelectorAll(".option-row").forEach(function (row) {
        row.classList.add(row.getAttribute("data-correct") === "1" ? "option-correct" : "option-wrong-disabled");
        row.querySelector("input").disabled = true;
      });
      if (chosenCorrect) state.correct++;
      state.revealed.push(correctStep);
      const btn = document.getElementById("algo-check-btn");
      btn.textContent = "Weiter";
      btn.disabled = false;
      btn.onclick = function () {
        state.index++;
        renderAlgorithmQuizStep();
      };
    });
  }

  // ---------- Vergleichstabellen ----------
  function renderTableList() {
    const cards = TABLES.map(function (t) {
      return (
        '<div class="algo-card">' +
        '<div class="algo-card-title">' + escapeHtml(t.title) + "</div>" +
        '<div class="algo-card-meta muted">' + t.rows.length + " Zeilen</div>" +
        '<div class="cta-row"><a class="btn btn-sm btn-primary" href="#/table/' + t.id + '">Ansehen</a></div>' +
        "</div>"
      );
    }).join("");
    app.innerHTML =
      nav("tables") +
      '<main class="container">' +
      "<h1>Vergleichstabellen</h1>" +
      '<p class="muted">Verwandte Fakten im Kontrast lernen – gut zum schnellen Wiederholen kurz vor der Prüfung.</p>' +
      '<div class="algo-grid">' + cards + "</div>" +
      "</main>";
  }

  function renderTable(id) {
    const t = TABLES.find(function (x) { return x.id === id; });
    if (!t) { renderTableList(); return; }
    const theadHtml = "<tr>" + t.columns.map(function (c) { return "<th>" + escapeHtml(c) + "</th>"; }).join("") + "</tr>";
    const tbodyHtml = t.rows.map(function (row) {
      return "<tr>" + row.map(function (cell, i) {
        return '<td data-label="' + escapeHtml(t.columns[i] || "") + '">' + escapeHtml(cell) + "</td>";
      }).join("") + "</tr>";
    }).join("");
    app.innerHTML =
      nav("tables") +
      '<main class="container">' +
      '<a class="back-link" href="#/tables">← Alle Tabellen</a>' +
      "<h1>" + escapeHtml(t.title) + "</h1>" +
      '<div class="table-scroll"><table class="module-table ref-table"><thead>' + theadHtml + "</thead><tbody>" + tbodyHtml + "</tbody></table></div>" +
      "</main>";
  }

  // ---------- Teil-2-Mündlich (SOE-Trainer) ----------
  // Kein Karteikarten-Format: SOE-Szenarien sind lange, zusammenhängende Antworten, die man
  // laut vor sich hin sprechen üben soll ("talk through"), nicht auswendig lernen wie Fakten.
  function renderSOEList() {
    const groups = {};
    SOE_SCENARIOS.forEach(function (s) {
      (groups[s.category] = groups[s.category] || []).push(s);
    });
    const groupsHtml = Object.keys(groups).map(function (cat) {
      const cards = groups[cat].map(function (s) {
        return (
          '<div class="algo-card">' +
          '<div class="algo-card-title">' + escapeHtml(s.title) + "</div>" +
          '<div class="cta-row"><a class="btn btn-sm btn-primary" href="#/soe-case/' + s.id + '">Szenario üben</a></div>' +
          "</div>"
        );
      }).join("");
      return "<h2>" + escapeHtml(cat) + "</h2>" + '<div class="algo-grid">' + cards + "</div>";
    }).join("");

    app.innerHTML =
      nav("soe") +
      '<main class="container">' +
      "<h1>Teil 2 – Mündliche Prüfung (SOE)</h1>" +
      '<p class="muted">Lies das Szenario, sprich deine Antwort laut vor dich hin ("talk through") wie beim echten SOE, bevor du die Musterantwort aufdeckst – das trainiert freies mündliches Antworten, nicht nur Faktenwissen.</p>' +
      groupsHtml +
      "</main>";
  }

  function renderSOEDetail(id) {
    const s = SOE_SCENARIOS.find(function (x) { return x.id === id; });
    if (!s) { renderSOEList(); return; }
    const followupsHtml = s.followups.map(function (f) {
      return "<li>" + escapeHtml(f) + "</li>";
    }).join("");
    app.innerHTML =
      nav("soe") +
      '<main class="container narrow">' +
      '<a class="back-link" href="#/soe">← Alle Szenarien</a>' +
      '<div class="session-progress">' + escapeHtml(s.category) + "</div>" +
      "<h1>" + escapeHtml(s.title) + "</h1>" +
      '<p class="lookup-source" data-card-id="' + escapeHtml(s.id) + '-scenario" data-card-front="' + escapeHtml(s.title) + '">' + escapeHtml(s.scenario) + "</p>" +
      "<h2>Vertiefende Rückfragen des Prüfers</h2>" +
      "<ul>" + followupsHtml + "</ul>" +
      '<div class="cta-row" id="soe-reveal-row"><button class="btn btn-primary" id="soe-reveal-btn">Musterantwort zeigen</button></div>' +
      '<div class="hidden" id="soe-answer">' +
      "<h2>Musterantwort</h2>" +
      '<p class="lookup-source" data-card-id="' + escapeHtml(s.id) + '-answer" data-card-front="' + escapeHtml(s.title) + '">' + escapeHtml(s.modelAnswer) + "</p>" +
      "<h2>Worauf der Prüfer achtet</h2>" +
      "<p>" + escapeHtml(s.examTips) + "</p>" +
      "</div>" +
      '<div class="cta-row"><a class="btn btn-secondary" href="#/soe">Zurück zur Übersicht</a></div>' +
      "</main>";

    document.getElementById("soe-reveal-btn").addEventListener("click", function () {
      document.getElementById("soe-answer").classList.remove("hidden");
      document.getElementById("soe-reveal-row").classList.add("hidden");
    });
  }

  router();
})();
