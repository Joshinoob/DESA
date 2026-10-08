// Spezialwissen: vertiefte Organkapitel (Herz, Lunge, Niere) – von der Zelle bis zum
// Organsystem, mit klinischem Anästhesiebezug. Inhalte eigens verfasst auf Basis von
// Standardlehrbüchern und Übersichtsarbeiten (Quellen je Organ unter "sources").
//
// Didaktischer Aufbau jedes Kapitels (evidenzbasierte Lerntechniken):
// - leitfrage: Advance Organizer – aktiviert Vorwissen und lenkt die Aufmerksamkeit
// - body: kurze, nach Ebenen gegliederte Abschnitte (Chunking)
// - figure: optionales Schema (Dual Coding)
// - merke: Kernaussagen zum Wiederholen
// - warum: Warum-Fragen zum Selbsterklären (Elaborative Interrogation, Self-Explanation)
// - klinik: Transfer in die Anästhesie
// - selbsttest: Abruffragen (Retrieval Practice) – werden zusätzlich automatisch als
//   Karteikarten in die Spaced-Repetition übernommen (Feld "spezialwissen").
//
// Blockformat im body: String = Absatz (**fett** erlaubt), {h: "..."} = Zwischenüberschrift,
// {ul: [...]} = Liste, {table: {head: [...], rows: [[...]]}} = Tabelle.
// Karten-IDs sind stabil an Organ- und Kapitel-ID gebunden (fc-sw-<organ>-<kapitel>-<n>);
// Kapitel-IDs daher nie umbenennen, sonst geht der Lernfortschritt dieser Karten verloren.
(function () {
  window.SPEZIAL = window.SPEZIAL || [];
  window.SPEZIAL_METHOD = {
    intro: "Spezialwissen erklärt Herz, Lunge und Niere zusammenhängend auf Facharzt- und EDAIC-Niveau – von der Zelle über Gewebe und Organ bis zur Regulation im Gesamtorganismus und zur Bedeutung in Narkose und Intensivmedizin.",
    steps: [
      "**Leitfrage zuerst:** Versuche sie kurz selbst zu beantworten, bevor du liest. Das aktiviert Vorwissen, und Neues wird besser verankert.",
      "**Lesen in Ebenen:** Jedes Kapitel hat eine Ebene (Zelle → Gewebe → Organ → System → Klinik). Achte darauf, wie die Mechanismen einer Ebene die nächste erklären.",
      "**Warum-Fragen selbst erklären:** Erst laut oder schriftlich eine eigene Erklärung formulieren, dann aufklappen. Selbsterklären gehört zu den wirksamsten Lerntechniken (Dunlosky et al. 2013).",
      "**Selbsttest ohne Nachsehen:** Antwort zuerst im Kopf formulieren, dann aufdecken. Aktives Abrufen festigt Wissen deutlich stärker als erneutes Lesen (Roediger & Karpicke 2006).",
      "**Wiederholen mit Abstand:** Alle Selbsttest-Fragen landen automatisch als Karteikarten in der Spaced-Repetition. Lerne sie über die nächsten Tage und Wochen verteilt (Cepeda et al. 2006).",
      "**Prüfungsform üben:** Erkläre am Ende jedes Organ frei und laut von der Zelle bis zur Klinik, wie in der mündlichen Prüfung (EDAIC Teil 2 / Facharztprüfung)."
    ],
    sources: [
      "Dunlosky J, Rawson KA, Marsh EJ, Nathan MJ, Willingham DT. Improving students' learning with effective learning techniques. Psychol Sci Public Interest 2013;14:4–58.",
      "Roediger HL, Karpicke JD. Test-enhanced learning: taking memory tests improves long-term retention. Psychol Sci 2006;17:249–255.",
      "Cepeda NJ, Pashler H, Vul E, Wixted JT, Rohrer D. Distributed practice in verbal recall tasks. Psychol Bull 2006;132:354–380.",
      "Chi MTH, de Leeuw N, Chiu MH, LaVancher C. Eliciting self-explanations improves understanding. Cogn Sci 1994;18:439–477.",
      "Mayer RE. Multimedia Learning. 3. Aufl. Cambridge University Press 2020."
    ]
  };

  window.__addSpezialOrgan = function (organ) {
    window.SPEZIAL.push(organ);
    const cards = [];
    organ.chapters.forEach(function (ch) {
      (ch.selbsttest || []).forEach(function (item, i) {
        cards.push({
          id: "fc-sw-" + organ.id + "-" + ch.id + "-" + (i + 1),
          module: "physiologie",
          subtopic: organ.subtopic,
          spezialwissen: organ.id,
          kapitel: ch.id,
          front: item.q,
          back: item.a
        });
      });
    });
    window.FLASHCARDS = (window.FLASHCARDS || []).concat(cards);
  };
})();
