(function () {
  const app = document.getElementById("app");
  const CURRICULUM = window.CURRICULUM;
  const FLASHCARDS = window.FLASHCARDS;
  const MCQ = window.MCQ;
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
    else renderDashboard();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", router);

  function nav(activeRoute) {
    const items = [
      ["dashboard", "Dashboard"],
      ["learn", "Lernen"],
      ["test", "Test"],
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
        '<td><span class="part-badge">Teil ' + m.part + "</span> " + escapeHtml(m.title) + "</td>" +
        '<td>' + stats.total + "</td>" +
        '<td>' + (stats.due > 0 ? '<span class="due-badge">' + stats.due + "</span>" : "0") + "</td>" +
        '<td><div class="bar"><div class="bar-fill" style="width:' + masteryPct + '%"></div></div><span class="bar-label">' + masteryPct + "%</span></td>" +
        '<td>' + lastScore + "</td>" +
        '<td class="row-actions">' +
        '<a class="btn btn-sm" href="#/learn/' + m.id + '">Lernen</a> ' +
        '<a class="btn btn-sm btn-secondary" href="#/test-session/' + m.id + '">Testen</a>' +
        "</td></tr>"
      );
    }).join("");

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
      '<table class="module-table"><thead><tr><th>Modul</th><th>Karten</th><th>Fällig</th><th>Beherrschung</th><th>Letzter Test</th><th></th></tr></thead><tbody>' +
      moduleRows +
      "</tbody></table>" +
      "</main>";
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
    app.innerHTML =
      nav("learn") +
      '<main class="container narrow">' +
      '<div class="session-progress">Noch ' + remaining + " Karte(n) · " + escapeHtml(moduleById(card.module).title) + " – " + escapeHtml(subtopicTitle(card.module, card.subtopic)) + "</div>" +
      '<div class="flashcard" id="flashcard">' +
      '<div class="flashcard-front">' + escapeHtml(card.front) + "</div>" +
      '<div class="flashcard-back hidden" id="flashcard-back">' + escapeHtml(card.back) + "</div>" +
      "</div>" +
      '<div class="cta-row" id="reveal-row"><button class="btn btn-primary" id="reveal-btn">Antwort zeigen</button></div>' +
      '<div class="rating-row hidden" id="rating-row">' +
      '<button class="btn rating-again" data-rating="again">Nochmal</button>' +
      '<button class="btn rating-hard" data-rating="hard">Schwer</button>' +
      '<button class="btn rating-good" data-rating="good">Gut</button>' +
      '<button class="btn rating-easy" data-rating="easy">Leicht</button>' +
      "</div>" +
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
        '<div class="review-item">' +
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
      return "<tr><td>" + date + "</td><td>" + escapeHtml(modName) + "</td><td>" + r.correct + "/" + r.total + " (" + pct + "%)</td></tr>";
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
        : '<table class="module-table"><thead><tr><th>Datum</th><th>Modul</th><th>Ergebnis</th></tr></thead><tbody>' + resultRows + "</tbody></table>") +
      "</main>";
  }

  router();
})();
