(function () {
  const app = document.getElementById("app");
  const CURRICULUM = window.CURRICULUM;
  const FLASHCARDS = window.FLASHCARDS;
  const MCQ = window.MCQ;
  const ALGORITHMS = window.ALGORITHMS || [];
  const TABLES = window.TABLES || [];
  const SOE_SCENARIOS = window.SOE_SCENARIOS || [];
  let progress = window.SRS.loadProgress();

  // Prüft, ob localStorage tatsächlich funktioniert (nicht nur vorhanden ist) —
  // in Safari im privaten Modus oder mit "Cookies blockieren" wirft setItem einen
  // Fehler, oder Werte werden gar nicht erst persistiert. srs.js schluckt solche
  // Fehler bewusst (kein Absturz), damit hier sichtbar wird, dass NICHTS gespeichert
  // wird, statt dass es unbemerkt bleibt.
  function storageWorks() {
    try {
      const key = "__desa_storage_test__";
      localStorage.setItem(key, "1");
      const ok = localStorage.getItem(key) === "1";
      localStorage.removeItem(key);
      return ok;
    } catch (e) {
      return false;
    }
  }
  const STORAGE_OK = storageWorks();

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

  // Frühere Version nutzte Text-Selektion (Ziehen mit dem Finger) + Popover-Button.
  // Auf dem Handy ist Selektieren fummelig und kollidiert mit der nativen
  // Kopieren/Nachschlagen-Leiste des Browsers, daher jetzt direkt: jedes Wort ist ein
  // eigenes antippbares/klickbares Element, ein Tap/Klick löst die Suche sofort aus.
  function wrapLookupWords(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim()) textNodes.push(node);
    }
    textNodes.forEach(function (textNode) {
      const parts = textNode.nodeValue.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach(function (part) {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement("span");
          span.className = "lookup-word";
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function wrapAllLookupSources() {
    document.querySelectorAll(".lookup-source").forEach(wrapLookupWords);
    removeLookupConfirm();
  }

  // Ein Tap/Klick auf ein Wort löst nicht sofort die Suche aus, sondern zeigt erst
  // eine kurze Bestätigung direkt neben dem Wort — vermeidet versehentliche Treffer
  // beim normalen Lesen und macht explizit, dass die Karte bald wiederholt wird.
  let lookupConfirmEl = null;
  function removeLookupConfirm() {
    if (lookupConfirmEl) { lookupConfirmEl.remove(); lookupConfirmEl = null; }
  }

  function showLookupConfirm(span, word, sourceEl) {
    removeLookupConfirm();
    const rect = span.getBoundingClientRect();
    const btn = document.createElement("button");
    btn.className = "lookup-confirm";
    btn.innerHTML = '🔖 „' + word + '" nachschlagen<br><span class="lookup-confirm-sub">und bald zum Wiederholen vorschlagen</span>';
    btn.style.visibility = "hidden";
    document.body.appendChild(btn);
    const w = btn.offsetWidth || 220;
    const h = btn.offsetHeight || 50;
    const spaceBelow = window.innerHeight - rect.bottom;
    const top = spaceBelow > h + 16 ? rect.bottom + 8 : Math.max(8, rect.top - h - 8);
    const left = Math.max(8, Math.min(rect.left, window.innerWidth - w - 8));
    btn.style.top = top + "px";
    btn.style.left = left + "px";
    btn.style.visibility = "visible";
    btn.addEventListener("click", function (ev) {
      ev.stopPropagation();
      handleLookup(word, sourceEl);
      removeLookupConfirm();
    });
    lookupConfirmEl = btn;
  }

  document.addEventListener("click", function (e) {
    const span = e.target.closest && e.target.closest(".lookup-word");
    if (span) {
      const sourceEl = span.closest(".lookup-source");
      if (!sourceEl) return;
      const word = span.textContent.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
      if (word.length < 2) return;
      span.classList.add("lookup-word-active");
      setTimeout(function () { span.classList.remove("lookup-word-active"); }, 400);
      showLookupConfirm(span, word, sourceEl);
      return;
    }
    if (lookupConfirmEl && !(e.target.closest && e.target.closest(".lookup-confirm"))) {
      removeLookupConfirm();
    }
  });

  // Tastenkürzel für den Lernmodus: reduziert die Karteikarten-Session auf reine
  // Zifferntasten (wie in Anki/anderen SRS-Tools üblich) statt jedes Mal die Maus/den
  // Finger zum Button bewegen zu müssen — bei zig Karten pro Session macht das einen
  // spürbaren Unterschied. Ein einziger, dauerhafter Listener statt pro Karte neu
  // registriert: er prüft bei jedem Tastendruck nur, ob die passende Zeile gerade
  // sichtbar ist, und ist sonst ein No-op (kein Aufräumen beim Seitenwechsel nötig).
  document.addEventListener("keydown", function (e) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    const revealRow = document.getElementById("reveal-row");
    if (revealRow && !revealRow.classList.contains("hidden")) {
      const sel = { "1": ".confidence-sicher", "2": ".confidence-unsicher" }[e.key];
      if (sel) { e.preventDefault(); const btn = document.querySelector(sel); if (btn) btn.click(); }
      return;
    }
    const ratingRow = document.getElementById("rating-row");
    if (ratingRow && !ratingRow.classList.contains("hidden")) {
      const sel = { "1": ".rating-again", "2": ".rating-hard", "3": ".rating-good", "4": ".rating-easy" }[e.key];
      if (sel) { e.preventDefault(); const btn = document.querySelector(sel); if (btn) btn.click(); }
    }
  });

  // ---------- Routing ----------
  function router() {
    const hash = location.hash || "#/dashboard";
    const parts = hash.replace(/^#\//, "").split("/");
    const route = parts[0] || "dashboard";
    const arg = parts[1];
    if (route !== "test-session") clearExamTimer();
    if (route === "learn") renderLearnSetup(arg);
    else if (route === "learn-session") startLearnSession(arg, parts[2]);
    else if (route === "test") renderTestSetup();
    else if (route === "test-session") startTestSession(arg);
    else if (route === "progress") renderProgress();
    else if (route === "algorithms") renderAlgorithmList();
    else if (route === "physiologie") renderPhysiologyList();
    else if (route === "algorithm") renderAlgorithmReference(arg);
    else if (route === "algorithm-quiz") startAlgorithmQuiz(arg);
    else if (route === "tables") renderTableList();
    else if (route === "table") renderTable(arg);
    else if (route === "drugs") renderDrugList();
    else if (route === "drug") renderDrugDetail(arg);
    else if (route === "leitlinien") renderGuidelineList();
    else if (route === "leitlinie") renderGuidelineDetail(arg);
    else if (route === "leitlinien-durchgehen") startGuidelineWalkthrough(parseInt(arg, 10));
    else if (route === "leitlinien-test") startGuidelineQuiz(parseInt(arg, 10));
    else if (route === "soe") renderSOEList();
    else if (route === "soe-case") renderSOEDetail(arg);
    else renderDashboard();
    wrapAllLookupSources();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", router);

  function nav(activeRoute) {
    const items = [
      ["dashboard", "Dashboard"],
      ["learn", "Lernen"],
      ["test", "Test"],
      ["algorithms", "Algorithmen"],
      ["physiologie", "Physiologie"],
      ["tables", "Tabellen"],
      ["drugs", "Medikamente"],
      ["leitlinien", "Leitlinien"],
      ["soe", "Mündlich"],
      ["progress", "Fortschritt"]
    ];
    const warning = STORAGE_OK ? "" :
      '<div class="storage-warning">⚠️ Dein Browser blockiert lokalen Speicher – dein Fortschritt wird NICHT gespeichert! Meist wegen privatem/Inkognito-Modus oder „Cookies blockieren" in den Browser-Einstellungen. Bitte deaktivieren und Seite neu laden.</div>';
    return (
      warning +
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
    let totalNew = window.SRS.getNewCards(FLASHCARDS, progress, "all").length;
    let sessionSize = totalDue + Math.min(totalNew, 15);
    let totalMastered = 0;
    let totalStarted = 0;
    FLASHCARDS.forEach(function (c) {
      const st = progress[c.id];
      if (!st) return;
      totalStarted++;
      if (st.box >= 4) totalMastered++;
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
        '<td data-label="Begonnen">' + stats.started + "</td>" +
        '<td data-label="Beherrschung"><div class="bar"><div class="bar-fill" style="width:' + masteryPct + '%"></div></div><span class="bar-label">' + masteryPct + "%</span></td>" +
        '<td data-label="Letzter Test">' + lastScore + "</td>" +
        '<td data-label="Aktionen" class="row-actions">' +
        '<a class="btn btn-sm" href="#/learn/' + m.id + '">Lernen</a> ' +
        '<a class="btn btn-sm btn-secondary" href="#/test-session/' + m.id + '">Testen</a>' +
        "</td></tr>"
      );
    }).join("");

    // Schwierige Karten und Wissenslücken sind jetzt IMMER sichtbar (mit
    // Leerzustand-Text statt komplett zu verschwinden) und stehen ganz oben im
    // Dashboard als EIN gemeinsamer, einklappbarer Reiter (statt zwei
    // dauerhaft sichtbaren Tabs, die oben zu viel Platz beanspruchen) — vorher
    // waren sie weiter unten und bei leerem Zustand komplett unauffindbar.
    const difficultCards = window.SRS.getDifficultCards(FLASHCARDS, progress, 12);
    const difficultPanelHtml =
      (difficultCards.length === 0 ?
        '<p class="muted">Aktuell keine Karte mit „Nochmal" oder „Schwer" bewertet — guter Stand!</p>' :
        '<p class="muted">Zuletzt mit „Nochmal" oder „Schwer" bewertet.</p>' +
        '<ul class="gap-list">' +
        difficultCards.slice(0, 6).map(function (c) {
          return '<li class="gap-item"><span>' + escapeHtml(c.front) + '<span class="gap-source"> — ' + escapeHtml(moduleById(c.module).title) + "</span></span></li>";
        }).join("") +
        "</ul>" +
        (difficultCards.length > 6 ? '<p class="muted">… und ' + (difficultCards.length - 6) + ' weitere.</p>' : "") +
        '<div class="cta-row"><a class="btn btn-sm btn-secondary" href="#/learn-session/difficult">Schwierige Karten üben</a></div>');

    const gaps = window.SRS.loadGaps();
    const gapsPanelHtml =
      (gaps.length === 0 ?
        '<p class="muted">Noch keine offenen Wissenslücken. Tippe/klicke beim Lernen ein unbekanntes Wort an — findet sich dazu keine Karte, landet der Begriff hier.</p>' :
        '<p class="muted">Begriffe, die du markiert hast, zu denen es aber noch keine Karteikarte gibt.</p>' +
        '<ul class="gap-list">' +
        gaps.map(function (g) {
          return (
            '<li class="gap-item"><span>' + escapeHtml(g.term) + (g.source ? '<span class="gap-source"> — aus: ' + escapeHtml(g.source) + "</span>" : "") + "</span>" +
            '<button class="btn btn-sm btn-secondary" data-remove-gap="' + escapeHtml(g.term) + '">Erledigt</button></li>'
          );
        }).join("") +
        "</ul>");

    // Nur aufgeklappt, wenn es tatsächlich etwas zu review'n gibt — sonst bleibt
    // der Reiter geschlossen und beansprucht ganz oben nur eine Zeile.
    const hasFocusItems = difficultCards.length > 0 || gaps.length > 0;
    const focusTabsHtml =
      '<details class="focus-tabs"' + (hasFocusItems ? " open" : "") + '>' +
      '<summary>Schwierige Karten (' + difficultCards.length + ') &amp; Wissenslücken (' + gaps.length + ')</summary>' +
      '<div class="focus-tab-panel">' +
      "<h3>Schwierige Karten</h3>" + difficultPanelHtml +
      "<h3>Wissenslücken</h3>" + gapsPanelHtml +
      "</div>" +
      "</details>";

    const streak = window.SRS.getStreak();
    app.innerHTML =
      nav("dashboard") +
      '<main class="container">' +
      '<h1>Dein DESA-Lernstand</h1>' +
      focusTabsHtml +
      '<div class="stat-cards">' +
      '<div class="stat-card"><div class="stat-value">' + (streak > 0 ? "🔥 " + streak : streak) + '</div><div class="stat-label">Tage-Streak</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + totalStarted + " / " + totalCards + '</div><div class="stat-label">Karten begonnen</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + totalMastered + " / " + totalCards + '</div><div class="stat-label">Karten gemeistert</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + MCQ.length + '</div><div class="stat-label">Testfragen verfügbar</div></div>' +
      "</div>" +
      '<div class="cta-row">' +
      '<a class="btn btn-primary" href="#/learn-session/all">Jetzt lernen (' + sessionSize + ")</a>" +
      '<a class="btn btn-secondary" href="#/test-session/mixed">Prüfungssimulation starten</a>' +
      "</div>" +
      '<details class="module-details" open>' +
      '<summary><h2>Module im Detail (' + CURRICULUM.length + ')</h2></summary>' +
      '<div class="table-scroll"><table class="module-table"><thead><tr><th>Modul</th><th>Karten</th><th>Begonnen</th><th>Beherrschung</th><th>Letzter Test</th><th></th></tr></thead><tbody>' +
      moduleRows +
      "</tbody></table></div>" +
      "</details>" +
      '<p class="muted"><a href="#" id="show-onboarding-link">Kurzanleitung erneut anzeigen</a></p>' +
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
      '<label for="learn-subtopic">Unterthema</label>' +
      '<select id="learn-subtopic"><option value="all">Alle Unterthemen</option></select>' +
      '<div class="cta-row"><button class="btn btn-primary" id="start-learn">Lernsession starten</button></div>' +
      "</main>";

    function refreshSubtopics() {
      const modId = document.getElementById("learn-module").value;
      const subSelect = document.getElementById("learn-subtopic");
      const mod = moduleById(modId);
      if (!mod) {
        subSelect.innerHTML = '<option value="all">Alle Unterthemen</option>';
        subSelect.disabled = true;
      } else {
        subSelect.disabled = false;
        subSelect.innerHTML = '<option value="all">Alle Unterthemen</option>' +
          mod.subtopics.map(function (st) { return '<option value="' + st.id + '">' + escapeHtml(st.title) + "</option>"; }).join("");
      }
    }
    document.getElementById("learn-module").addEventListener("change", refreshSubtopics);
    refreshSubtopics();

    document.getElementById("start-learn").addEventListener("click", function () {
      const mod = document.getElementById("learn-module").value;
      const sub = document.getElementById("learn-subtopic").value;
      location.hash = "#/learn-session/" + mod + (sub !== "all" ? "/" + sub : "");
    });
  }

  let learnQueue = [];
  let learnStats = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };

  function startLearnSession(moduleId, subtopicId) {
    learnStats = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    if (moduleId === "difficult") {
      learnQueue = window.SRS.getDifficultCards(FLASHCARDS, progress);
      if (learnQueue.length === 0) {
        app.innerHTML =
          nav("learn") +
          '<main class="container narrow"><h1>Keine schwierigen Karten</h1>' +
          '<p>Aktuell ist keine Karte mit „Nochmal" oder „Schwer" bewertet.</p>' +
          '<a class="btn btn-secondary" href="#/dashboard">Zurück zum Dashboard</a></main>';
        return;
      }
      renderLearnCard();
      return;
    }
    let due = window.SRS.getDueCards(FLASHCARDS, progress, moduleId);
    let fresh = window.SRS.getNewCards(FLASHCARDS, progress, moduleId);
    if (subtopicId && subtopicId !== "all") {
      due = due.filter(function (c) { return c.subtopic === subtopicId; });
      fresh = fresh.filter(function (c) { return c.subtopic === subtopicId; });
    }
    fresh = fresh.slice(0, 15);
    // Durchmischt statt blockweise nach Unterthema abzuarbeiten (Interleaving) —
    // gemischte statt geblockte Praxis verbessert nachweislich Transfer und
    // langfristiges Behalten, auch wenn es sich beim Lernen schwerer anfühlt.
    learnQueue = shuffle(due.concat(fresh));
    if (learnQueue.length === 0) {
      app.innerHTML =
        nav("learn") +
        '<main class="container narrow"><h1>Keine Karten fällig</h1>' +
        '<p>Für diese Auswahl sind aktuell keine Karten fällig und keine neuen Karten verfügbar. Komm später wieder oder wähle eine andere Auswahl.</p>' +
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
      '<div class="flashcard-front lookup-source" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + escapeHtml(card.front) + "</div>" +
      '<div class="' + backClass + '" id="flashcard-back" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + backContent + "</div>" +
      "</div>" +
      // Bewusst nur 2 statt 3 Konfidenzstufen: die Hypercorrection-Forschung, auf der
      // dieser Schritt beruht (siehe srs.js), unterscheidet selbst nur zwischen
      // "confident errors" und "low-confidence errors" — eine binäre Einschätzung
      // deckt den belegten Effekt also vollständig ab, ist aber schneller getroffen
      // als eine 3-Wege-Entscheidung, und zusammen mit den 4 Bewertungs-Buttons
      // bleibt die Karten-Session insgesamt überschaubarer.
      '<p class="step-label muted" id="reveal-step-label">Wie sicher bist du?</p>' +
      '<div class="cta-row confidence-row" id="reveal-row">' +
      '<button class="btn confidence-sicher" data-confidence="sicher"><kbd>1</kbd> Weiß ich</button>' +
      '<button class="btn confidence-unsicher" data-confidence="unsicher"><kbd>2</kbd> Bin unsicher</button>' +
      "</div>" +
      '<p class="step-label muted hidden" id="rating-step-label">Wie lief es wirklich?</p>' +
      '<div class="rating-row hidden" id="rating-row">' +
      '<button class="btn rating-again" data-rating="again"><kbd>1</kbd> Nochmal</button>' +
      '<button class="btn rating-hard" data-rating="hard"><kbd>2</kbd> Schwer</button>' +
      '<button class="btn rating-good" data-rating="good"><kbd>3</kbd> Gut</button>' +
      '<button class="btn rating-easy" data-rating="easy"><kbd>4</kbd> Leicht</button>' +
      "</div>" +
      '<p class="lookup-hint muted">Tipp: tippe/klicke ein unklares Wort (z.B. „PRIS“) an, um es nachzuschlagen. Am PC gehen auch die Zifferntasten.</p>' +
      "</main>";
    wrapAllLookupSources();

    // Konfidenz-Auswahl deckt die Karte sofort auf (kein zusätzlicher Klick) —
    // erfasst aber vorab die Selbsteinschätzung, um sie später mit dem
    // tatsächlichen Ergebnis (Nochmal/Schwer vs. Gut/Leicht) zu vergleichen.
    let cardConfidence = null;
    document.querySelectorAll(".confidence-row button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        cardConfidence = btn.getAttribute("data-confidence");
        document.getElementById("flashcard-back").classList.remove("hidden");
        document.getElementById("reveal-row").classList.add("hidden");
        document.getElementById("reveal-step-label").classList.add("hidden");
        document.getElementById("rating-row").classList.remove("hidden");
        document.getElementById("rating-step-label").classList.remove("hidden");
      });
    });
    document.querySelectorAll("#rating-row button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const rating = btn.getAttribute("data-rating");
        window.SRS.reviewCard(progress, card.id, rating);
        if (cardConfidence) {
          window.SRS.recordCalibration(cardConfidence, rating === "good" || rating === "easy");
        }
        learnStats.reviewed++;
        learnStats[rating]++;
        learnQueue.shift();
        if (rating === "again") learnQueue.splice(Math.min(3, learnQueue.length), 0, card);
        renderLearnCard();
      });
    });
  }

  // ---------- Test ----------
  // Zwei Modi: Übungsmodus mit sofortigem Feedback pro Frage (lerneffektiver für
  // Übung — sofortiges Feedback verstärkt aktives Abrufen) und Prüfungssimulation
  // mit verzögertem Feedback erst am Ende (realistische Prüfungsbedingung).
  let pendingTestMode = "practice";

  function renderTestSetup() {
    const options = CURRICULUM.map(function (m) {
      return '<option value="' + m.id + '">' + escapeHtml(m.title) + " (" + MCQ.filter(function(q){return q.module===m.id;}).length + " Fragen)</option>";
    }).join("");
    const dueMcqCount = window.SRS.getDueCards(MCQ, progress, "all").length;
    app.innerHTML =
      nav("test") +
      '<main class="container narrow">' +
      "<h1>Testmodus</h1>" +
      '<p class="muted">Single-Best-Answer-Fragen im EDAIC-Stil. Jede Testfrage wird wie eine Karteikarte per Spaced Repetition eingeplant.</p>' +
      '<label for="test-mode">Modus</label>' +
      '<select id="test-mode">' +
      '<option value="practice">Übungsmodus (sofortiges Feedback pro Frage)</option>' +
      '<option value="exam">Prüfungssimulation (Zeitlimit, Feedback erst am Ende, wie in der echten Prüfung)</option>' +
      "</select>" +
      '<p class="muted">Die echte EDAIC-Part-1-Prüfung gibt ca. 90 Sekunden pro Frage vor (2 Papiere à 60 Fragen). Die Prüfungssimulation übernimmt dieses Zeitlimit – unter realistischem Zeitdruck zu üben verbessert nachweislich den Transfer aufs echte Prüfungsergebnis und deckt Selbstüberschätzung durch unbegrenztes Nachdenken beim Üben auf.</p>' +
      '<label for="test-module">Modul</label>' +
      '<select id="test-module">' +
      (dueMcqCount > 0 ? '<option value="due">Fällige Testfragen (' + dueMcqCount + ")</option>" : "") +
      '<option value="mixed">Gemischt (empfohlen)</option>' + options + "</select>" +
      '<label for="test-count">Anzahl Fragen</label>' +
      '<select id="test-count">' +
      '<option value="10">10</option>' +
      '<option value="20">20</option>' +
      '<option value="40">40</option>' +
      '<option value="60">60 (EDAIC-Papierformat)</option>' +
      '<option value="all">Alle verfügbaren</option>' +
      "</select>" +
      '<div class="cta-row"><button class="btn btn-primary" id="start-test">Test starten</button></div>' +
      "</main>";
    document.getElementById("start-test").addEventListener("click", function () {
      const mod = document.getElementById("test-module").value;
      const count = document.getElementById("test-count").value;
      pendingTestMode = document.getElementById("test-mode").value;
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
  let examTimerInterval = null;
  const EXAM_SECONDS_PER_QUESTION = 90; // ~90s/Frage entspricht dem realen EDAIC-Part-1-Zeitbudget (Online-Format: 90min/60 Fragen)

  function clearExamTimer() {
    if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
  }

  function tickExamTimer() {
    if (!testState || !testState.deadline) { clearExamTimer(); return; }
    const remainingMs = testState.deadline - Date.now();
    const el = document.getElementById("exam-timer");
    if (remainingMs <= 0) {
      clearExamTimer();
      finishTest();
      return;
    }
    if (el) {
      const totalSec = Math.floor(remainingMs / 1000);
      const mm = Math.floor(totalSec / 60);
      const ss = totalSec % 60;
      el.textContent = "⏱ " + mm + ":" + (ss < 10 ? "0" : "") + ss;
      el.classList.toggle("exam-timer-warn", remainingMs < 60000);
    }
  }

  function startExamTimer() {
    clearExamTimer();
    tickExamTimer();
    examTimerInterval = setInterval(tickExamTimer, 1000);
  }

  function startTestSession(arg) {
    clearExamTimer();
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

    let pool;
    if (moduleId === "due") {
      pool = window.SRS.getDueCards(MCQ, progress, "all");
    } else {
      pool = moduleId === "mixed" ? MCQ.slice() : MCQ.filter(function (q) { return q.module === moduleId; });
    }
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
      moduleId: moduleId,
      mode: pendingTestMode,
      deadline: pendingTestMode === "exam" ? Date.now() + pool.length * EXAM_SECONDS_PER_QUESTION * 1000 : null
    };
    renderTestQuestion();
    if (testState.mode === "exam") startExamTimer();
  }

  function renderTestQuestion() {
    const q = testState.questions[testState.index];
    const total = testState.questions.length;
    const isPractice = testState.mode === "practice";
    const selected = testState.answers[testState.index];
    const answered = selected !== null;
    const showFeedback = isPractice && answered;

    const optionsHtml = q.options.map(function (opt, i) {
      let cls = "option-row";
      if (showFeedback) {
        if (i === q.correct) cls += " option-correct";
        else if (i === selected) cls += " option-wrong-selected";
        else cls += " option-wrong-disabled";
      }
      return (
        '<label class="' + cls + '">' +
        '<input type="radio" name="option" value="' + i + '"' + (selected === i ? " checked" : "") + (showFeedback ? " disabled" : "") + ">" +
        '<span>' + String.fromCharCode(65 + i) + ") " + escapeHtml(opt) + "</span>" +
        "</label>"
      );
    }).join("");

    const feedbackHtml = !showFeedback ? "" :
      '<div class="' + (selected === q.correct ? "correct-answer" : "wrong-answer") + '">' +
      (selected === q.correct ? "Richtig! " : "Leider falsch. Richtig wäre: " + String.fromCharCode(65 + q.correct) + ") " + escapeHtml(q.options[q.correct])) +
      "</div>" +
      '<p class="explanation">' + escapeHtml(q.explanation) + "</p>";

    const timerHtml = testState.mode === "exam" ? '<span class="exam-timer" id="exam-timer">⏱ --:--</span>' : "";
    app.innerHTML =
      nav("test") +
      '<main class="container narrow">' +
      '<div class="session-progress">' + (isPractice ? "Übungsmodus" : "Prüfungssimulation") + " · Frage " + (testState.index + 1) + " / " + total + " · " + escapeHtml(moduleById(q.module).title) + timerHtml + "</div>" +
      '<div class="question-box"><p class="question-text lookup-source" data-card-id="' + escapeHtml(q.id) + '" data-card-front="' + escapeHtml(q.question) + '">' + escapeHtml(q.question) + "</p>" +
      '<div class="options">' + optionsHtml + "</div>" +
      feedbackHtml +
      "</div>" +
      '<div class="cta-row">' +
      (testState.index > 0 ? '<button class="btn btn-secondary" id="prev-btn">Zurück</button>' : "") +
      '<button class="btn btn-primary" id="next-btn">' + (testState.index === total - 1 ? "Test abschließen" : "Weiter") + "</button>" +
      "</div>" +
      "</main>";
    wrapAllLookupSources();
    if (testState.mode === "exam") tickExamTimer();

    document.querySelectorAll('input[name="option"]').forEach(function (input) {
      input.addEventListener("change", function () {
        testState.answers[testState.index] = parseInt(input.value, 10);
        if (isPractice) renderTestQuestion();
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
    clearExamTimer();
    let correct = 0;
    const wrong = [];
    testState.questions.forEach(function (q, i) {
      const isCorrect = testState.answers[i] === q.correct;
      if (isCorrect) correct++;
      else wrong.push({ q: q, given: testState.answers[i] });
      // Testfragen laufen durch dieselbe Spaced-Repetition-Logik wie Karteikarten
      // ("Successive Relearning") — richtig beantwortete Fragen werden seltener
      // fällig, falsch beantwortete kommen bald wieder.
      window.SRS.reviewCard(progress, q.id, isCorrect ? "good" : "again");
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
    window.SRS.recordActivityToday();

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
    wrapAllLookupSources();
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

    // Box-Verteilung statt einer einzelnen Mastery-Zahl: zeigt auch Fortschritt VOR
    // dem Erreichen der Mastery-Schwelle (Neu -> Lernend -> Jung -> Reif).
    function pct(n, total) { return total ? Math.round((n / total) * 100) : 0; }
    const moduleBars = CURRICULUM.map(function (m) {
      const dist = window.SRS.getBoxDistribution(FLASHCARDS, progress, m.id);
      return (
        '<div class="progress-module">' +
        '<div class="progress-module-title">' + escapeHtml(m.title) + "</div>" +
        '<div class="box-dist-bar">' +
        '<div class="box-seg box-seg--neu" style="width:' + pct(dist.neu, dist.total) + '%"></div>' +
        '<div class="box-seg box-seg--lernend" style="width:' + pct(dist.lernend, dist.total) + '%"></div>' +
        '<div class="box-seg box-seg--jung" style="width:' + pct(dist.jung, dist.total) + '%"></div>' +
        '<div class="box-seg box-seg--reif" style="width:' + pct(dist.reif, dist.total) + '%"></div>' +
        "</div>" +
        '<div class="box-dist-legend muted">Neu ' + dist.neu + " · Lernend " + dist.lernend + " · Jung " + dist.jung + " · Reif " + dist.reif + " (von " + dist.total + ")</div>" +
        "</div>"
      );
    }).join("");

    // 7-Tage-Fälligkeitsvorschau: macht den Spacing-Effekt sichtbar (verteilte statt
    // gebündelte Wiederholungen) und hilft, den täglichen Lernaufwand einzuschätzen.
    const forecast = window.SRS.getDueForecast(FLASHCARDS, progress, 7);
    const maxForecast = Math.max(1, Math.max.apply(null, forecast));
    const forecastHtml = '<div class="forecast-chart">' + forecast.map(function (n, i) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const label = i === 0 ? "Heute" : d.toLocaleDateString("de-DE", { weekday: "short" });
      const h = Math.round((n / maxForecast) * 100);
      return (
        '<div class="forecast-bar-wrap">' +
        '<div class="forecast-bar" style="height:' + Math.max(h, n > 0 ? 6 : 2) + '%"><span class="forecast-count">' + n + "</span></div>" +
        '<div class="forecast-label muted">' + escapeHtml(label) + "</div>" +
        "</div>"
      );
    }).join("") + "</div>";

    // Kalibrierung: stimmt die eigene Sicherheitseinschätzung mit dem tatsächlichen
    // Ergebnis überein? Karten, bei denen "Weiß ich sicher" gewählt wurde, aber die
    // Bewertung Nochmal/Schwer war, sind Kandidaten für Überschätzung — genau die
    // Fälle, die nach Korrektur am besten hängen bleiben (Hypercorrection-Effekt).
    const cal = window.SRS.loadCalibration();
    const calLabels = { sicher: "Weiß ich", unsicher: "Bin unsicher" };
    const calOrder = ["sicher", "unsicher"];
    const calRows = calOrder.filter(function (k) { return cal[k] && cal[k].total > 0; }).map(function (k) {
      const c = cal[k];
      const p = Math.round((c.correct / c.total) * 100);
      return (
        '<div class="progress-module">' +
        '<div class="progress-module-title">' + calLabels[k] + " – " + p + "% davon tatsächlich richtig erinnert (" + c.correct + "/" + c.total + ")</div>" +
        '<div class="bar"><div class="bar-fill" style="width:' + p + '%"></div></div>' +
        "</div>"
      );
    }).join("");
    const calHtml = calRows === "" ? "" :
      "<h2>Kalibrierung: Selbsteinschätzung vs. Ergebnis</h2>" +
      '<p class="muted">Niedriger Prozentsatz bei „Weiß ich" heißt: hier wird Wissen öfter überschätzt — genau diese Karten lohnt es, genauer anzuschauen.</p>' +
      calRows;

    app.innerHTML =
      nav("progress") +
      '<main class="container">' +
      "<h1>Fortschritt</h1>" +
      "<h2>Lernphase je Modul</h2>" +
      '<div class="box-dist-key muted"><span class="key-dot key-dot--neu"></span>Neu <span class="key-dot key-dot--lernend"></span>Lernend <span class="key-dot key-dot--jung"></span>Jung <span class="key-dot key-dot--reif"></span>Reif (gemeistert)</div>' +
      moduleBars +
      "<h2>Fällige Karten – nächste 7 Tage</h2>" +
      forecastHtml +
      calHtml +
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

  // Physiologie-Mechanismen (Regelkreise/Kaskaden) sind fachlich etwas anderes als
  // prozedurale Notfall-Algorithmen und bekommen daher eine eigene Rubrik/Nav-Punkt,
  // nutzen aber denselben Nachlese-/Trainer-Mechanismus (identisches Datenschema).
  const PHYSIOLOGY_CATEGORY = "Physiologie-Mechanismen";
  function algoHomeRoute(algo) {
    return algo.category === PHYSIOLOGY_CATEGORY ? "physiologie" : "algorithms";
  }

  function renderAlgoGrid(items, activeRoute, heading, intro) {
    const groups = {};
    items.forEach(function (a) {
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
      nav(activeRoute) +
      '<main class="container">' +
      "<h1>" + escapeHtml(heading) + "</h1>" +
      '<p class="muted">' + escapeHtml(intro) + "</p>" +
      groupsHtml +
      "</main>";
  }

  function renderAlgorithmList() {
    renderAlgoGrid(
      ALGORITHMS.filter(function (a) { return a.category !== PHYSIOLOGY_CATEGORY; }),
      "algorithms",
      "Notfall-Algorithmen",
      "Reihenfolge und Handlungsschritte üben – prozedurales Wissen statt reiner Fakten."
    );
  }

  function renderPhysiologyList() {
    renderAlgoGrid(
      ALGORITHMS.filter(function (a) { return a.category === PHYSIOLOGY_CATEGORY; }),
      "physiologie",
      "Physiologie-Mechanismen",
      "Regelkreise und Kaskaden (Rezeptoren, Second Messenger, Organfunktionen) als Nachlese-Übersicht und Reihenfolge-Trainer üben."
    );
  }

  function renderAlgorithmReference(id) {
    const algo = algorithmById(id);
    if (!algo) { renderAlgorithmList(); return; }
    const homeRoute = algoHomeRoute(algo);
    const stepsHtml = algo.steps.map(function (s, i) {
      return (
        '<li class="algo-step">' +
        '<span class="algo-step-num">' + (i + 1) + "</span>" +
        '<span class="algo-step-text lookup-source" data-card-id="algo-' + algo.id + '-' + i + '" data-card-front="' + escapeHtml(algo.title) + '">' + escapeHtml(s) + "</span>" +
        "</li>"
      );
    }).join("");
    app.innerHTML =
      nav(homeRoute) +
      '<main class="container narrow">' +
      '<a class="back-link" href="#/' + homeRoute + '">← ' + (homeRoute === "physiologie" ? "Alle Physiologie-Mechanismen" : "Alle Algorithmen") + '</a>' +
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
    const homeRoute = algoHomeRoute(algo);
    const revealedHtml = state.revealed.map(function (s, i) {
      return '<li class="algo-step done"><span class="algo-step-num">' + (i + 1) + "</span><span class=\"algo-step-text\">" + escapeHtml(s) + "</span></li>";
    }).join("");

    if (state.index >= algo.steps.length) {
      app.innerHTML =
        nav(homeRoute) +
        '<main class="container narrow">' +
        "<h1>" + escapeHtml(algo.title) + " – fertig</h1>" +
        '<div class="score-circle">' + state.correct + "/" + state.total + "</div>" +
        "<p>Richtige Schritte in korrekter Reihenfolge erkannt.</p>" +
        '<div class="cta-row"><a class="btn btn-primary" href="#/algorithm/' + algo.id + '">Ablauf nachlesen</a> <a class="btn btn-secondary" href="#/' + homeRoute + '">Zurück</a></div>' +
        "</main>";
      return;
    }

    const correctStep = algo.steps[state.index];
    const pool = algo.steps.filter(function (s, i) { return i !== state.index && state.revealed.indexOf(s) === -1; });
    const distractors = shuffle(pool).slice(0, Math.min(2, pool.length));
    const options = shuffle([correctStep].concat(distractors));

    app.innerHTML =
      nav(homeRoute) +
      '<main class="container narrow">' +
      '<a class="back-link" href="#/' + homeRoute + '">← Trainer verlassen</a>' +
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
    let chosenRow = null;
    document.querySelectorAll('input[name="algo-option"]').forEach(function (input) {
      input.addEventListener("change", function () {
        document.getElementById("algo-check-btn").disabled = false;
        chosenRow = input.closest(".option-row");
        chosenCorrect = chosenRow.getAttribute("data-correct") === "1";
      });
    });
    // { once: true } ist hier entscheidend: der Button wird nach "Prüfen" per
    // btn.onclick auf "Weiter" umfunktioniert (gleiches DOM-Element) — ohne
    // once:true bliebe dieser Listener zusätzlich aktiv und würde beim zweiten
    // Klick ("Weiter") nochmal mitfeuern (State doppelt gepusht, Punktzahl doppelt
    // gezählt, Schritt erscheint 2x in der Timeline).
    document.getElementById("algo-check-btn").addEventListener("click", function () {
      document.querySelectorAll(".option-row").forEach(function (row) {
        if (row.getAttribute("data-correct") === "1") row.classList.add("option-correct");
        else if (row === chosenRow) row.classList.add("option-wrong-selected");
        else row.classList.add("option-wrong-disabled");
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
    }, { once: true });
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

  // ---------- Medikamente (Nachschlagen) ----------
  // Reine Referenz-/Nachschlagefunktion für die Medikamenten-Steckbriefe, getrennt
  // vom Lernen-Karteikarten-Ablauf (kein Aufdecken/Bewerten) — für den Moment, in
  // dem man einfach schnell einen Wirkstoff nachschlagen will, ohne eine SRS-Session
  // zu starten. Ein manuelles "Gelernt"-Abhaken (getrennt vom SRS-Fortschritt) macht
  // den Überblick sichtbar, welche Wirkstoffe schon sitzen.
  function drugCards() {
    return FLASHCARDS.filter(function (c) { return c.subtopic === "medikamenten-steckbriefe"; });
  }

  function renderDrugList() {
    const cards = drugCards().slice().sort(function (a, b) { return a.front.localeCompare(b.front, "de"); });
    const learned = window.SRS.loadLearnedDrugs();
    const itemsHtml = cards.map(function (c) {
      const name = c.front.replace(/^Steckbrief:\s*/, "");
      const isLearned = learned.indexOf(c.id) !== -1;
      return '<a class="drug-item' + (isLearned ? " drug-item--learned" : "") + '" href="#/drug/' + c.id + '" data-name="' + escapeHtml(name.toLowerCase()) + '">' + (isLearned ? '<span class="learned-check">✓</span> ' : "") + escapeHtml(name) + "</a>";
    }).join("");
    app.innerHTML =
      nav("drugs") +
      '<main class="container">' +
      "<h1>Medikamente nachschlagen</h1>" +
      '<p class="muted">' + cards.length + ' Wirkstoffprofile zum schnellen Nachschlagen — ohne Lernkarten-Ablauf. <strong>' + learned.length + ' von ' + cards.length + '</strong> als gelernt markiert.</p>' +
      '<input type="text" id="drug-search" placeholder="Wirkstoff suchen…" autocomplete="off">' +
      '<div class="drug-grid" id="drug-grid">' + itemsHtml + "</div>" +
      "</main>";
    document.getElementById("drug-search").addEventListener("input", function (e) {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll(".drug-item").forEach(function (el) {
        el.classList.toggle("hidden", q !== "" && el.getAttribute("data-name").indexOf(q) === -1);
      });
    });
  }

  function renderDrugDetail(id) {
    const card = drugCards().find(function (c) { return c.id === id; });
    if (!card) { renderDrugList(); return; }
    const isLearned = window.SRS.loadLearnedDrugs().indexOf(id) !== -1;
    app.innerHTML =
      nav("drugs") +
      '<main class="container narrow">' +
      '<a class="back-link" href="#/drugs">← Alle Medikamente</a>' +
      "<h1>" + escapeHtml(card.front.replace(/^Steckbrief:\s*/, "")) + "</h1>" +
      '<div class="cta-row"><button class="btn ' + (isLearned ? "btn-primary" : "btn-secondary") + '" id="toggle-learned-drug">' + (isLearned ? "✓ Gelernt (entfernen)" : "Als gelernt markieren") + "</button></div>" +
      '<div class="flashcard flashcard-profile" style="text-align:left">' +
      '<div class="flashcard-back profile-back lookup-source" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + renderProfile(card.profile) + "</div>" +
      "</div>" +
      "</main>";
    wrapAllLookupSources();
    document.getElementById("toggle-learned-drug").addEventListener("click", function () {
      window.SRS.toggleLearnedDrug(id);
      renderDrugDetail(id);
    });
  }

  // ---------- Leitlinien (Nachschlagen) ----------
  // Reine Referenz-/Nachschlagefunktion für alle expliziten Leitlinien-Empfehlungskarten
  // (fc-ll-*), gruppiert nach der KONKRETEN Leitlinie (Feld "guideline"), nicht nur nach
  // Modul — damit z.B. alle Empfehlungen der Surviving Sepsis Campaign zusammen
  // durchgegangen werden können, auch wenn eine Leitlinie (wie die PONV-Konsensus-
  // Leitlinie) über mehrere Module verteilt zitiert wird. Drei Ebenen: (1) Liste
  // durchsuchen/nachschlagen, (2) eine Leitlinie komplett "durchgehen" (sequenzielle
  // Wiederholung aller ihrer Karten), (3) sich mit den passenden Testfragen selbst
  // abfragen ("Testen"). Manuelles "Diese Leitlinie kann ich"-Abhaken pro Leitlinie,
  // getrennt vom SRS-Fortschritt.
  function guidelineCards() {
    return FLASHCARDS.filter(function (c) { return c.id.indexOf("fc-ll-") === 0; });
  }

  function guidelineGroups() {
    const groups = {};
    guidelineCards().forEach(function (c) { (groups[c.guideline] = groups[c.guideline] || []).push(c); });
    return Object.keys(groups).sort(function (a, b) { return a.localeCompare(b, "de"); })
      .map(function (name) { return { name: name, cards: groups[name] }; });
  }

  function mcqForGuideline(name) {
    return MCQ.filter(function (q) { return q.guideline === name; });
  }

  function renderGuidelineList() {
    const groups = guidelineGroups();
    const cards = guidelineCards();
    const learned = window.SRS.loadLearnedGuidelines();
    const groupsHtml = groups.map(function (g, idx) {
      const isLearned = learned.indexOf(g.name) !== -1;
      const quizCount = mcqForGuideline(g.name).length;
      const itemsHtml = g.cards.map(function (c) {
        return '<a class="drug-item guideline-item" href="#/leitlinie/' + c.id + '" data-name="' + escapeHtml((c.front + " " + g.name).toLowerCase()) + '">' + escapeHtml(c.front) + "</a>";
      }).join("");
      return (
        '<div class="guideline-group' + (isLearned ? " guideline-group--learned" : "") + '">' +
        '<h2>' + (isLearned ? '<span class="learned-check">✓</span> ' : "") + escapeHtml(g.name) + '<span class="muted"> · ' + g.cards.length + (g.cards.length === 1 ? " Karte" : " Karten") + "</span></h2>" +
        '<div class="cta-row">' +
        '<a class="btn btn-sm btn-primary" href="#/leitlinien-durchgehen/' + idx + '">Durchgehen</a>' +
        (quizCount > 0 ? '<a class="btn btn-sm btn-secondary" href="#/leitlinien-test/' + idx + '">Testen (' + quizCount + ")</a>" : "") +
        '<button class="btn btn-sm btn-secondary toggle-learned-guideline" data-guideline="' + escapeHtml(g.name) + '">' + (isLearned ? "✓ Gelernt" : "Als gelernt markieren") + "</button>" +
        "</div>" +
        '<div class="drug-grid guideline-grid">' + itemsHtml + "</div>" +
        "</div>"
      );
    }).join("");
    app.innerHTML =
      nav("leitlinien") +
      '<main class="container">' +
      "<h1>Leitlinien nachschlagen</h1>" +
      '<p class="muted">' + cards.length + ' Empfehlungen aus ' + groups.length + ' Leitlinien (ERC, ESAIC, ESRA, KDIGO, ESPEN, PADIS, SSC u.a.) — <strong>' + learned.length + ' von ' + groups.length + '</strong> Leitlinien als gelernt markiert. Pro Leitlinie: alle Empfehlungen durchgehen oder dich mit passenden Testfragen abfragen.</p>' +
      '<input type="text" id="guideline-search" placeholder="Leitlinie oder Stichwort suchen…" autocomplete="off">' +
      groupsHtml +
      "</main>";
    document.getElementById("guideline-search").addEventListener("input", function (e) {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll(".guideline-group").forEach(function (groupEl) {
        const items = groupEl.querySelectorAll(".guideline-item");
        let anyVisible = false;
        items.forEach(function (el) {
          const match = q === "" || el.getAttribute("data-name").indexOf(q) !== -1;
          el.classList.toggle("hidden", !match);
          if (match) anyVisible = true;
        });
        groupEl.classList.toggle("hidden", !anyVisible);
      });
    });
    document.querySelectorAll(".toggle-learned-guideline").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.SRS.toggleLearnedGuideline(btn.getAttribute("data-guideline"));
        renderGuidelineList();
      });
    });
  }

  function renderGuidelineDetail(id) {
    const card = guidelineCards().find(function (c) { return c.id === id; });
    if (!card) { renderGuidelineList(); return; }
    app.innerHTML =
      nav("leitlinien") +
      '<main class="container narrow">' +
      '<a class="back-link" href="#/leitlinien">← Alle Leitlinien</a>' +
      '<div class="session-progress">' + escapeHtml(card.guideline) + "</div>" +
      "<h1>" + escapeHtml(card.front) + "</h1>" +
      '<div class="flashcard" style="text-align:left">' +
      '<div class="flashcard-back lookup-source" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + escapeHtml(card.back) + "</div>" +
      "</div>" +
      "</main>";
    wrapAllLookupSources();
  }

  // ---------- Leitlinie durchgehen (sequenzielle Wiederholung aller Empfehlungen) ----------
  let guidelineWalkState = null;

  function startGuidelineWalkthrough(idx) {
    const groups = guidelineGroups();
    const group = groups[idx];
    if (!group) { renderGuidelineList(); return; }
    guidelineWalkState = { group: group, index: 0 };
    renderGuidelineWalkStep();
  }

  function renderGuidelineWalkStep() {
    const state = guidelineWalkState;
    const group = state.group;
    if (state.index >= group.cards.length) {
      const isLearned = window.SRS.loadLearnedGuidelines().indexOf(group.name) !== -1;
      app.innerHTML =
        nav("leitlinien") +
        '<main class="container narrow">' +
        "<h1>" + escapeHtml(group.name) + " – fertig 🎉</h1>" +
        "<p>Alle " + group.cards.length + " Empfehlungen dieser Leitlinie durchgegangen.</p>" +
        '<div class="cta-row">' +
        '<button class="btn ' + (isLearned ? "btn-primary" : "btn-secondary") + '" id="finish-mark-learned">' + (isLearned ? "✓ Gelernt" : "Diese Leitlinie kann ich") + "</button>" +
        (mcqForGuideline(group.name).length > 0 ? '<a class="btn btn-secondary" href="#/leitlinien-test/' + guidelineGroups().findIndex(function (g) { return g.name === group.name; }) + '">Jetzt testen</a>' : "") +
        '<a class="btn btn-secondary" href="#/leitlinien">Zurück zur Übersicht</a>' +
        "</div></main>";
      document.getElementById("finish-mark-learned").addEventListener("click", function () {
        window.SRS.toggleLearnedGuideline(group.name);
        renderGuidelineWalkStep();
      });
      return;
    }
    const card = group.cards[state.index];
    app.innerHTML =
      nav("leitlinien") +
      '<main class="container narrow">' +
      '<div class="session-progress">' + escapeHtml(group.name) + " · Empfehlung " + (state.index + 1) + " / " + group.cards.length + "</div>" +
      '<div class="flashcard">' +
      '<div class="flashcard-front lookup-source" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + escapeHtml(card.front) + "</div>" +
      '<div class="flashcard-back hidden lookup-source" id="walk-back" data-card-id="' + escapeHtml(card.id) + '" data-card-front="' + escapeHtml(card.front) + '">' + escapeHtml(card.back) + "</div>" +
      "</div>" +
      '<div class="cta-row" id="walk-reveal-row"><button class="btn btn-primary" id="walk-reveal-btn">Antwort zeigen</button></div>' +
      '<div class="cta-row hidden" id="walk-next-row"><button class="btn btn-primary" id="walk-next-btn">Weiter</button></div>' +
      "</main>";
    wrapAllLookupSources();
    document.getElementById("walk-reveal-btn").addEventListener("click", function () {
      document.getElementById("walk-back").classList.remove("hidden");
      document.getElementById("walk-reveal-row").classList.add("hidden");
      document.getElementById("walk-next-row").classList.remove("hidden");
    });
    document.getElementById("walk-next-btn").addEventListener("click", function () {
      state.index++;
      renderGuidelineWalkStep();
    });
  }

  // ---------- Leitlinie testen (Mini-Abfrage nur mit Fragen dieser Leitlinie) ----------
  let guidelineQuizState = null;

  function startGuidelineQuiz(idx) {
    const groups = guidelineGroups();
    const group = groups[idx];
    const pool = group ? mcqForGuideline(group.name) : [];
    if (!group || pool.length === 0) { renderGuidelineList(); return; }
    guidelineQuizState = { group: group, questions: shuffle(pool), index: 0, correct: 0, answered: null };
    renderGuidelineQuizStep();
  }

  function renderGuidelineQuizStep() {
    const state = guidelineQuizState;
    const total = state.questions.length;
    if (state.index >= total) {
      const isLearned = window.SRS.loadLearnedGuidelines().indexOf(state.group.name) !== -1;
      app.innerHTML =
        nav("leitlinien") +
        '<main class="container narrow">' +
        "<h1>" + escapeHtml(state.group.name) + " – Test fertig</h1>" +
        '<div class="score-circle">' + state.correct + "/" + total + "</div>" +
        '<div class="cta-row">' +
        '<button class="btn ' + (isLearned ? "btn-primary" : "btn-secondary") + '" id="quiz-mark-learned">' + (isLearned ? "✓ Gelernt" : "Diese Leitlinie kann ich") + "</button>" +
        '<a class="btn btn-secondary" href="#/leitlinien">Zurück zur Übersicht</a>' +
        "</div></main>";
      document.getElementById("quiz-mark-learned").addEventListener("click", function () {
        window.SRS.toggleLearnedGuideline(state.group.name);
        renderGuidelineQuizStep();
      });
      return;
    }
    const q = state.questions[state.index];
    const answered = state.answered !== null;
    const optionsHtml = q.options.map(function (opt, i) {
      let cls = "option-row";
      if (answered) {
        if (i === q.correct) cls += " option-correct";
        else if (i === state.answered) cls += " option-wrong-selected";
        else cls += " option-wrong-disabled";
      }
      return (
        '<label class="' + cls + '">' +
        '<input type="radio" name="gl-option" value="' + i + '"' + (answered ? " disabled" : "") + ">" +
        '<span>' + String.fromCharCode(65 + i) + ") " + escapeHtml(opt) + "</span>" +
        "</label>"
      );
    }).join("");
    const feedbackHtml = !answered ? "" :
      '<div class="' + (state.answered === q.correct ? "correct-answer" : "wrong-answer") + '">' +
      (state.answered === q.correct ? "Richtig! " : "Leider falsch. Richtig wäre: " + String.fromCharCode(65 + q.correct) + ") " + escapeHtml(q.options[q.correct])) +
      "</div>" +
      '<p class="explanation">' + escapeHtml(q.explanation) + "</p>";
    app.innerHTML =
      nav("leitlinien") +
      '<main class="container narrow">' +
      '<div class="session-progress">' + escapeHtml(state.group.name) + " · Frage " + (state.index + 1) + " / " + total + "</div>" +
      '<div class="question-box"><p class="question-text">' + escapeHtml(q.question) + "</p>" +
      '<div class="options">' + optionsHtml + "</div>" +
      feedbackHtml +
      "</div>" +
      '<div class="cta-row"><button class="btn btn-primary" id="gl-next-btn">' + (state.index === total - 1 ? "Fertig" : "Weiter") + "</button></div>" +
      "</main>";
    document.querySelectorAll('input[name="gl-option"]').forEach(function (input) {
      input.addEventListener("change", function () {
        state.answered = parseInt(input.value, 10);
        if (state.answered === q.correct) state.correct++;
        renderGuidelineQuizStep();
      });
    });
    document.getElementById("gl-next-btn").addEventListener("click", function () {
      if (!answered) return;
      state.index++;
      state.answered = null;
      renderGuidelineQuizStep();
    });
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

  // ---------- Kurzanleitung (Onboarding) ----------
  // Ersetzt echte Screenshots (die bei jeder UI-Änderung veralten würden) durch ein
  // kurzes, immer aktuelles In-App-Tutorial: je ein Icon + knapper Erklärtext pro
  // Hauptfunktion, einmal beim ersten Öffnen gezeigt, jederzeit über das Dashboard erneut aufrufbar.
  const ONBOARDING_KEY = "desa_onboarding_seen_v1";
  const ONBOARDING_SLIDES = [
    { icon: "🎯", title: "Willkommen beim DESA-Trainer", text: "Eine Lern-App für die EDAIC-Prüfung mit Spaced Repetition: fällige Karten kommen automatisch zur richtigen Zeit wieder dran. Aller Fortschritt bleibt nur lokal in deinem Browser gespeichert." },
    { icon: "🗂️", title: "Lernen", text: "Karteikarten nach dem Leitner-Prinzip. Vor dem Aufdecken schätzt du kurz deine Sicherheit ein (Konfidenz-Rating) – das verbessert nachweislich die Selbsteinschätzung und das Behalten." },
    { icon: "📝", title: "Test", text: "Single-Best-Answer-Fragen wie im EDAIC-Stil. Übungsmodus mit sofortigem Feedback oder Prüfungssimulation mit Zeitlimit (90 Sek./Frage) – wie in der echten Prüfung." },
    { icon: "🚨", title: "Algorithmen & Physiologie", text: "Notfall-Abläufe und physiologische Regelkreise als Nachlese-Timeline oder als Trainer: an jedem Punkt den richtigen nächsten Schritt auswählen." },
    { icon: "💊", title: "Tabellen, Medikamente & Leitlinien", text: "Vergleichstabellen zum Kontrastieren verwandter Fakten sowie Nachschlage-Ansichten für Medikamente und Leitlinien – jeweils mit \"Gelernt\"-Abhaken. Leitlinien lassen sich zusätzlich thematisch komplett durchgehen oder mit passenden Testfragen abfragen, ganz ohne SRS-Ablauf." },
    { icon: "🎙️", title: "Mündlich & Fortschritt", text: "SOE-Szenarien zum lauten Selbst-Antworten für Teil 2. Im Fortschrittsbereich siehst du Lernphasen, Fälligkeitsvorschau und Kalibrierung deiner Selbsteinschätzung." }
  ];

  function renderOnboarding() {
    let slideIndex = 0;
    const backdrop = document.createElement("div");
    backdrop.className = "lookup-modal-backdrop onboarding-backdrop";

    function close() {
      try { localStorage.setItem(ONBOARDING_KEY, "1"); } catch (e) { /* ignore */ }
      backdrop.remove();
    }

    function renderSlide() {
      const slide = ONBOARDING_SLIDES[slideIndex];
      const isLast = slideIndex === ONBOARDING_SLIDES.length - 1;
      const dots = ONBOARDING_SLIDES.map(function (_, i) {
        return '<span class="onboarding-dot' + (i === slideIndex ? " onboarding-dot--active" : "") + '"></span>';
      }).join("");
      backdrop.innerHTML =
        '<div class="lookup-modal onboarding-modal">' +
        '<button class="lookup-modal-close" aria-label="Schließen" id="onboarding-close">×</button>' +
        '<div class="onboarding-icon">' + slide.icon + "</div>" +
        "<h2>" + escapeHtml(slide.title) + "</h2>" +
        "<p>" + escapeHtml(slide.text) + "</p>" +
        '<div class="onboarding-dots">' + dots + "</div>" +
        '<div class="cta-row onboarding-actions">' +
        (slideIndex > 0 ? '<button class="btn btn-secondary" id="onboarding-back">Zurück</button>' : '<button class="btn btn-secondary" id="onboarding-skip">Überspringen</button>') +
        '<button class="btn btn-primary" id="onboarding-next">' + (isLast ? "Los geht's!" : "Weiter") + "</button>" +
        "</div></div>";
      document.getElementById("onboarding-close").addEventListener("click", close);
      const skipBtn = document.getElementById("onboarding-skip");
      if (skipBtn) skipBtn.addEventListener("click", close);
      const backBtn = document.getElementById("onboarding-back");
      if (backBtn) backBtn.addEventListener("click", function () { slideIndex--; renderSlide(); });
      document.getElementById("onboarding-next").addEventListener("click", function () {
        if (isLast) { close(); return; }
        slideIndex++;
        renderSlide();
      });
    }

    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) close(); });
    document.body.appendChild(backdrop);
    renderSlide();
  }

  function maybeShowOnboarding() {
    let seen = false;
    try { seen = localStorage.getItem(ONBOARDING_KEY) === "1"; } catch (e) { /* ignore */ }
    if (!seen) renderOnboarding();
  }

  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "show-onboarding-link") {
      e.preventDefault();
      renderOnboarding();
    }
  });

  router();
  maybeShowOnboarding();
})();
