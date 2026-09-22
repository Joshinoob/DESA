// Spaced-Repetition-Engine (vereinfachtes Leitner-System mit 6 Boxen).
// Speichert Fortschritt und Testergebnisse in localStorage (rein lokal, kein Server).
(function () {
  const PROGRESS_KEY = "desa_progress_v1";
  const RESULTS_KEY = "desa_testresults_v1";

  // Intervall in Tagen je Box (Box 0 = neu/gerade falsch beantwortet -> sofort wieder fällig)
  const BOX_INTERVALS = [0, 1, 3, 7, 16, 35];
  const MAX_BOX = BOX_INTERVALS.length - 1;

  function loadProgress() {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) { /* localStorage evtl. nicht verfügbar */ }
  }

  function loadResults() {
    try {
      const raw = localStorage.getItem(RESULTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveResults(results) {
    try {
      localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
    } catch (e) { /* ignore */ }
  }

  function todayISO() {
    return new Date().toISOString();
  }

  function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  function getCardState(progress, cardId) {
    return progress[cardId] || { box: 0, due: todayISO(), reps: 0, lapses: 0 };
  }

  function isDue(state) {
    return new Date(state.due).getTime() <= Date.now();
  }

  // rating: "again" | "hard" | "good" | "easy"
  function reviewCard(progress, cardId, rating) {
    const state = getCardState(progress, cardId);
    let box = state.box;
    let lapses = state.lapses || 0;
    let reps = (state.reps || 0) + 1;
    let dueDays;

    if (rating === "again") {
      box = 0;
      lapses += 1;
      dueDays = 0; // sofort wieder fällig (erscheint erneut in dieser Session)
    } else if (rating === "hard") {
      box = Math.max(1, box);
      dueDays = BOX_INTERVALS[box];
    } else if (rating === "good") {
      box = Math.min(MAX_BOX, box + 1);
      dueDays = BOX_INTERVALS[box];
    } else if (rating === "easy") {
      box = Math.min(MAX_BOX, box + 2);
      dueDays = Math.round(BOX_INTERVALS[box] * 1.3);
    }

    const newState = {
      box: box,
      due: addDays(new Date(), dueDays).toISOString(),
      reps: reps,
      lapses: lapses,
      lastReview: todayISO(),
      lastRating: rating
    };
    progress[cardId] = newState;
    saveProgress(progress);
    recordActivityToday();
    return newState;
  }

  function getDueCards(allCards, progress, moduleFilter) {
    return allCards.filter(function (c) {
      if (moduleFilter && moduleFilter !== "all" && c.module !== moduleFilter) return false;
      const state = getCardState(progress, c.id);
      return isDue(state);
    });
  }

  function getNewCards(allCards, progress, moduleFilter, limit) {
    const news = allCards.filter(function (c) {
      if (moduleFilter && moduleFilter !== "all" && c.module !== moduleFilter) return false;
      return !progress[c.id];
    });
    return typeof limit === "number" ? news.slice(0, limit) : news;
  }

  // Plant eine Karte für baldiges Wiederholen ein, OHNE bestehenden Fortschritt zu
  // zerstören: neue Karten werden sofort fällig (wie gewohnt), bereits gelernte
  // Karten werden nur vorgezogen (spätestens morgen fällig), ihre Box bleibt erhalten.
  // Genutzt von der Nachschlage-Funktion, wenn ein Begriff als unklar markiert wird.
  function scheduleSoon(progress, cardId) {
    const existing = progress[cardId];
    if (!existing) {
      progress[cardId] = { box: 0, due: todayISO(), reps: 0, lapses: 0, lastReview: null };
    } else {
      const tomorrow = addDays(new Date(), 1).toISOString();
      const dueSooner = new Date(existing.due) < new Date(tomorrow) ? existing.due : tomorrow;
      progress[cardId] = Object.assign({}, existing, { due: dueSooner });
    }
    saveProgress(progress);
    return progress[cardId];
  }

  const GAPS_KEY = "desa_gaps_v1";

  function loadGaps() {
    try {
      const raw = localStorage.getItem(GAPS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveGaps(gaps) {
    try {
      localStorage.setItem(GAPS_KEY, JSON.stringify(gaps));
    } catch (e) { /* ignore */ }
  }

  function addGap(term, sourceFront) {
    const gaps = loadGaps();
    const exists = gaps.some(function (g) { return g.term.toLowerCase() === term.toLowerCase(); });
    if (!exists) {
      gaps.push({ term: term, source: sourceFront, date: todayISO() });
      saveGaps(gaps);
    }
    return gaps;
  }

  function removeGap(term) {
    const gaps = loadGaps().filter(function (g) { return g.term !== term; });
    saveGaps(gaps);
    return gaps;
  }

  // Karten, deren letzte Bewertung "Nochmal" oder "Schwer" war — damit dieser
  // Lernaufwand sichtbar wird und gezielt wiederholt werden kann, statt nur in der
  // Box-Zahl zu verschwinden.
  function getDifficultCards(allCards, progress, limit) {
    const matches = [];
    allCards.forEach(function (c) {
      const state = progress[c.id];
      if (state && (state.lastRating === "again" || state.lastRating === "hard")) {
        matches.push({ card: c, state: state });
      }
    });
    matches.sort(function (a, b) {
      return new Date(b.state.lastReview) - new Date(a.state.lastReview);
    });
    const limited = typeof limit === "number" ? matches.slice(0, limit) : matches;
    return limited.map(function (m) { return m.card; });
  }

  function getModuleStats(allCards, progress, moduleId) {
    const cards = allCards.filter(function (c) { return c.module === moduleId; });
    const total = cards.length;
    let due = 0, mastered = 0, started = 0;
    cards.forEach(function (c) {
      const state = progress[c.id];
      if (!state) return;
      started += 1;
      if (isDue(state)) due += 1;
      if (state.box >= 4) mastered += 1;
    });
    return { total: total, due: due, mastered: mastered, started: started };
  }

  // Box-Verteilung nach Leitner-Lernphase statt nur einer einzelnen Mastery-Zahl —
  // zeigt, wie viel gerade in welcher Phase steckt (Neu/Lernend/Jung/Reif), macht
  // Fortschritt auch VOR dem Erreichen der Mastery-Schwelle sichtbar.
  function getBoxDistribution(allCards, progress, moduleId) {
    const cards = moduleId ? allCards.filter(function (c) { return c.module === moduleId; }) : allCards;
    const dist = { neu: 0, lernend: 0, jung: 0, reif: 0, total: cards.length };
    cards.forEach(function (c) {
      const state = progress[c.id];
      if (!state) { dist.neu++; return; }
      if (state.box <= 1) dist.lernend++;
      else if (state.box <= 3) dist.jung++;
      else dist.reif++;
    });
    return dist;
  }

  // Wie viele Karten werden an jedem der nächsten `days` Tage fällig? Macht den
  // Spacing-Effekt sichtbar ("verteiltes Lernen") statt nur den heutigen Stapel zu zeigen.
  function getDueForecast(allCards, progress, days) {
    const forecast = new Array(days).fill(0);
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const dayMs = 24 * 60 * 60 * 1000;
    allCards.forEach(function (c) {
      const state = progress[c.id];
      if (!state) return;
      const dueTime = new Date(state.due).getTime();
      const dayIndex = Math.floor((dueTime - todayStart) / dayMs);
      if (dayIndex >= 0 && dayIndex < days) forecast[dayIndex]++;
      else if (dayIndex < 0) forecast[0]++;
    });
    return forecast;
  }

  // Lern-Streak: Tage in Folge mit mindestens einer Wiederholung. Sichtbarer Fortschritt
  // und ein einfacher Habit-Anker sind evidenzbasiert motivationsfördernd.
  const ACTIVITY_KEY = "desa_activity_v1";

  function dateKey(d) {
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function recordActivityToday() {
    try {
      const raw = localStorage.getItem(ACTIVITY_KEY);
      const days = raw ? JSON.parse(raw) : [];
      const key = dateKey(new Date());
      if (days.indexOf(key) === -1) {
        days.push(key);
        localStorage.setItem(ACTIVITY_KEY, JSON.stringify(days.slice(-400)));
      }
    } catch (e) { /* localStorage evtl. nicht verfügbar */ }
  }

  function getStreak() {
    try {
      const raw = localStorage.getItem(ACTIVITY_KEY);
      const days = raw ? JSON.parse(raw) : [];
      const daySet = new Set(days);
      const today = new Date();
      let streak = 0;
      let cursor = new Date(today);
      if (!daySet.has(dateKey(cursor))) {
        cursor.setDate(cursor.getDate() - 1);
        if (!daySet.has(dateKey(cursor))) return 0;
      }
      while (daySet.has(dateKey(cursor))) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      }
      return streak;
    } catch (e) {
      return 0;
    }
  }

  window.SRS = {
    BOX_INTERVALS: BOX_INTERVALS,
    MAX_BOX: MAX_BOX,
    loadProgress: loadProgress,
    saveProgress: saveProgress,
    loadResults: loadResults,
    saveResults: saveResults,
    getCardState: getCardState,
    isDue: isDue,
    reviewCard: reviewCard,
    getDueCards: getDueCards,
    getNewCards: getNewCards,
    getModuleStats: getModuleStats,
    getDifficultCards: getDifficultCards,
    getBoxDistribution: getBoxDistribution,
    getDueForecast: getDueForecast,
    recordActivityToday: recordActivityToday,
    getStreak: getStreak,
    scheduleSoon: scheduleSoon,
    loadGaps: loadGaps,
    saveGaps: saveGaps,
    addGap: addGap,
    removeGap: removeGap
  };
})();
