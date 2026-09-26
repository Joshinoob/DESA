// Spaced-Repetition-Engine: SM-2-artiger Ease-Factor-Algorithmus (wie SuperMemo-2/Anki)
// statt starrer Box-Intervalle. Jede Karte hat ein individuelles Intervall (Tage) und
// einen Ease-Faktor, der sich mit jeder Bewertung anpasst — leichte Karten wachsen
// schneller über größere Intervalle, schwierige bleiben kürzer getaktet, statt pauschal
// derselben festen Stufenfolge zu folgen. Das ist die am breitesten evidenzbasierte und
// in der Praxis (u.a. Anki, über Jahrzehnte an Millionen Nutzern empirisch verfeinert)
// bewährte Variante gegenüber einem reinen Fixintervall-Leitner-System.
// Speichert Fortschritt und Testergebnisse in localStorage (rein lokal, kein Server).
(function () {
  const PROGRESS_KEY = "desa_progress_v1";
  const RESULTS_KEY = "desa_testresults_v1";

  const EASE_DEFAULT = 2.5;
  const EASE_MIN = 1.3;
  const INTERVAL_CAP_DAYS = 120; // Prüfungsvorbereitung hat einen Horizont von Monaten, kein unbegrenztes Wachstum nötig
  // Alte Fixintervalle, NUR noch zur Migration bestehender Fortschrittsdaten (Nutzer, die
  // vor dem Umstieg auf den Ease-Factor-Algorithmus schon Karten gelernt hatten) sowie zur
  // Herleitung der Lernphasen-Anzeige (Neu/Lernend/Jung/Reif) aus dem aktuellen Intervall.
  const LEGACY_BOX_INTERVALS = [0, 1, 3, 7, 16, 35];

  function stageFromInterval(days) {
    if (days >= 35) return 5;
    if (days >= 16) return 4;
    if (days >= 7) return 3;
    if (days >= 3) return 2;
    if (days >= 1) return 1;
    return 0;
  }

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
    const raw = progress[cardId];
    if (!raw) return { interval: 0, ease: EASE_DEFAULT, box: 0, due: todayISO(), reps: 0, lapses: 0 };
    // Migration: Datensätze aus der Zeit vor dem Ease-Factor-Algorithmus kennen nur
    // "box", kein "interval"/"ease" — Startintervall aus der bisherigen Box ableiten,
    // damit kein bereits erarbeiteter Fortschritt verloren geht.
    const interval = typeof raw.interval === "number" ? raw.interval :
      LEGACY_BOX_INTERVALS[Math.min(typeof raw.box === "number" ? raw.box : 0, LEGACY_BOX_INTERVALS.length - 1)];
    const ease = typeof raw.ease === "number" ? raw.ease : EASE_DEFAULT;
    return Object.assign({}, raw, { interval: interval, ease: ease, box: stageFromInterval(interval) });
  }

  function isDue(state) {
    return new Date(state.due).getTime() <= Date.now();
  }

  // rating: "again" | "hard" | "good" | "easy"
  // SM-2-artige Anpassung: "again" senkt den Ease-Faktor deutlich und setzt das Intervall
  // zurück (Karte erscheint sofort erneut); "hard" senkt Ease leicht bei nur langsamem
  // Intervallwachstum; "good" folgt der klassischen SM-2-Formel Intervall = Intervall × Ease;
  // "easy" erhöht zusätzlich den Ease-Faktor und multipliziert mit einem Easy-Bonus (1,3) —
  // dieselben Grundprinzipien wie bei Anki, das diese Parameter über Jahre an sehr großen
  // Nutzerzahlen empirisch validiert hat.
  function reviewCard(progress, cardId, rating) {
    const state = getCardState(progress, cardId);
    let ease = state.ease;
    let interval = state.interval;
    let lapses = state.lapses || 0;
    let reps = (state.reps || 0) + 1;

    if (rating === "again") {
      ease = Math.max(EASE_MIN, ease - 0.2);
      interval = 0; // sofort wieder fällig (erscheint erneut in dieser Session)
      lapses += 1;
    } else if (rating === "hard") {
      ease = Math.max(EASE_MIN, ease - 0.15);
      interval = interval > 0 ? Math.max(1, Math.round(interval * 1.2)) : 1;
    } else if (rating === "good") {
      interval = interval > 0 ? Math.round(interval * ease) : 1;
    } else if (rating === "easy") {
      ease = ease + 0.15;
      interval = interval > 0 ? Math.round(interval * ease * 1.3) : 4;
    }
    interval = Math.min(interval, INTERVAL_CAP_DAYS);

    const newState = {
      interval: interval,
      ease: ease,
      box: stageFromInterval(interval),
      due: addDays(new Date(), interval).toISOString(),
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

  // Nur Karten mit BESTEHENDEM Fortschritt gelten als "fällig" — eine nie gelernte
  // Karte ist "neu", nicht "fällig zur Wiederholung" (sonst würde sie sowohl hier
  // als auch in getNewCards auftauchen und doppelt in der Warteschlange landen).
  function getDueCards(allCards, progress, moduleFilter) {
    return allCards.filter(function (c) {
      if (moduleFilter && moduleFilter !== "all" && c.module !== moduleFilter) return false;
      const state = progress[c.id];
      if (!state) return false;
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
      progress[cardId] = { interval: 0, ease: EASE_DEFAULT, box: 0, due: todayISO(), reps: 0, lapses: 0, lastReview: null };
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

  // Manuelles "Gelernt"-Abhaken für die reinen Nachschlage-Ansichten (Medikamente,
  // Leitlinien) — bewusst getrennt vom SRS-Fortschritt (progress), da diese Ansichten
  // explizit KEINE Spaced-Repetition-Session sind, sondern ein simpler Selbstauskunfts-
  // Haken ("das kenne ich schon") für die schnelle Übersicht kurz vor der Prüfung.
  const LEARNED_DRUGS_KEY = "desa_learned_drugs_v1";
  const LEARNED_GUIDELINES_KEY = "desa_learned_guidelines_v1";

  function loadLearnedSet(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleLearnedItem(key, itemId) {
    const list = loadLearnedSet(key);
    const idx = list.indexOf(itemId);
    if (idx === -1) list.push(itemId);
    else list.splice(idx, 1);
    try {
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) { /* ignore */ }
    return list;
  }

  function loadLearnedDrugs() { return loadLearnedSet(LEARNED_DRUGS_KEY); }
  function toggleLearnedDrug(id) { return toggleLearnedItem(LEARNED_DRUGS_KEY, id); }
  function loadLearnedGuidelines() { return loadLearnedSet(LEARNED_GUIDELINES_KEY); }
  function toggleLearnedGuideline(name) { return toggleLearnedItem(LEARNED_GUIDELINES_KEY, name); }

  // Konfidenz-Kalibrierung (Judgment of Learning): erfasst, ob die eigene
  // Sicherheitseinschätzung VOR dem Umdrehen der Karte mit dem tatsächlichen
  // Ergebnis übereinstimmt. Gut belegter Effekt: Falsch beantwortete Karten, bei
  // denen man sich sicher war ("Hypercorrection-Effekt"), werden nach Korrektur
  // besonders gut behalten — und blindes Vertrauen wird sichtbar, statt unbemerkt
  // zu bleiben.
  const CALIBRATION_KEY = "desa_calibration_v1";

  function loadCalibration() {
    try {
      const raw = localStorage.getItem(CALIBRATION_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function recordCalibration(confidence, wasCorrect) {
    const cal = loadCalibration();
    if (!cal[confidence]) cal[confidence] = { correct: 0, total: 0 };
    cal[confidence].total += 1;
    if (wasCorrect) cal[confidence].correct += 1;
    try {
      localStorage.setItem(CALIBRATION_KEY, JSON.stringify(cal));
    } catch (e) { /* ignore */ }
    return cal;
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
    EASE_DEFAULT: EASE_DEFAULT,
    EASE_MIN: EASE_MIN,
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
    removeGap: removeGap,
    loadCalibration: loadCalibration,
    recordCalibration: recordCalibration,
    loadLearnedDrugs: loadLearnedDrugs,
    toggleLearnedDrug: toggleLearnedDrug,
    loadLearnedGuidelines: loadLearnedGuidelines,
    toggleLearnedGuideline: toggleLearnedGuideline
  };
})();
