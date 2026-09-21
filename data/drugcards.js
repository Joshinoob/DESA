// Medikamenten-Steckbriefe: strukturierte Wirkstoffprofile als Karteikarten.
// Werden zu window.FLASHCARDS hinzugefügt (module: "pharmakologie", subtopic: "medikamenten-steckbriefe").
// Jede Karte hat statt "back" ein "profile"-Objekt mit festen Feldern — wird in app.js
// als farblich signalisiertes Definitionslisten-Layout gerendert (Chunking + Signaling-
// Prinzip nach Mayer: sicherheitskritische Felder wie Kontraindikationen/Cave sind rot,
// Antidot grün, Wirkmechanismus farblich hervorgehoben — konsistentes Schema über alle
// Karten reduziert die kognitive Last beim schnellen Wiederholen).
// Felder außer Wirkmechanismus bewusst knapp/stichwortartig, ohne Informationsverlust.
// Dosierungen/Kontraindikationen gegen aktuelle Fachinformationen (fachinfo.de, EMA/EU-
// Zulassungsdokumente) abgeglichen — vor klinischer Anwendung IMMER die aktuelle
// Fachinformation des konkreten Präparats prüfen.
(function () {
  const DRUG_CARDS = [
    {
      id: "fc-drug-propofol",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Propofol",
      profile: {
        klasse: "i.v. Hypnotikum (Alkylphenol)",
        mechanismus: "Positiv allosterischer Modulator des GABA-A-Rezeptors → verstärkte/verlängerte Cl⁻-Kanal-Öffnung → neuronale Hyperpolarisation",
        indikation: "Einleitung/Erhaltung Allgemeinanästhesie, Sedierung (Eingriffe, ICU)",
        dosierung: "Einleitung 1,5–2,5 mg/kg (>55J./ASA III–IV: 1 mg/kg, langsamer); Erhaltung 4–12 mg/kg/h TIVA; ICU-Sedierung niedriger",
        pharmakokinetik: "Wirkeintritt ~30s · kontextsensitive HWZ ↑ mit Infusionsdauer · hepatisch/extrahepatisch, nierenunabhängig",
        nebenwirkungen: "Hypotonie, Atemdepression, Injektionsschmerz; PRIS bei Hochdosis-Langzeitgabe (>4mg/kg/h, >48h)",
        kontraindikationen: "Soja-/Erdnussallergie (Zubereitung beachten), schwere kardiale Instabilität",
        interaktionen: "↑ZNS-/Atemdepression mit Opioiden/Sedativa",
        antidot: "Keines",
        cave: "PRIS – seltener, potenziell letaler Notfall bei Hochdosis-Langzeitsedierung",
        quelle: "Fachinfo Propofol-Lipuro/-ratiopharm; AkdÄ PRIS-Empfehlung"
      }
    },
    {
      id: "fc-drug-thiopental",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Thiopental",
      profile: {
        klasse: "i.v. Hypnotikum (Barbiturat)",
        mechanismus: "Verstärkung der GABA-A-Rezeptor-vermittelten Cl⁻-Leitfähigkeit, bei hoher Dosis auch direkte Kanalaktivierung",
        indikation: "Narkoseeinleitung (heute selten), Hirndruck-/Status-epilepticus-Therapie (zerebroprotektiv)",
        dosierung: "Einleitung 3–5 mg/kg i.v.",
        pharmakokinetik: "Wirkeintritt <30s · kurze klin. Wirkdauer (Umverteilung), aber lange terminale HWZ (Kumulation!) · hepatisch, stark proteingebunden",
        nebenwirkungen: "Atemdepression, Hypotonie (v.a. Hypovolämie), Myokarddepression, Histaminfreisetzung (Bronchospasmus)",
        kontraindikationen: "Akute intermittierende Porphyrie (absolut!), schwere Herzinsuffizienz, Hypovolämie/Schock, Asthma",
        interaktionen: "↑Atemdepression mit anderen ZNS-Dämpfern",
        antidot: "Keines",
        cave: "Klassischer Porphyrie-Trigger – absolute KI, häufig geprüft",
        quelle: "Fachinfo Thiopental Panpharma"
      }
    },
    {
      id: "fc-drug-etomidat",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Etomidat",
      profile: {
        klasse: "i.v. Hypnotikum (Imidazol-Derivat)",
        mechanismus: "Positiv allosterischer Modulator des GABA-A-Rezeptors, hohe Rezeptorselektivität",
        indikation: "Einleitung bei hämodynamisch instabilen/kardial vorbelasteten Patienten",
        dosierung: "0,15–0,3 mg/kg i.v. (Wirkung 30–60s, Dauer 3–5min)",
        pharmakokinetik: "Sehr schneller Wirkeintritt, kurze Dauer (Umverteilung), hepatische Esterase-Hydrolyse",
        nebenwirkungen: "Myoklonien, Übelkeit/Erbrechen, Injektionsschmerz; NNR-Suppression (11β-Hydroxylase-Hemmung) 6–72h auch nach Einzeldosis",
        kontraindikationen: "Nebenniereninsuffizienz; Sepsis/septischer Schock (Kortisolsuppression, umstritten); nicht zur Dauersedierung",
        interaktionen: "Keine wesentlichen",
        antidot: "Keines",
        cave: "Dauerinfusion zur ICU-Sedierung obsolet (adrenale Suppression) – Klassiker",
        quelle: "Fachinfo Etomidat-Lipuro; CMDh/BfArM-Stellungnahme"
      }
    },
    {
      id: "fc-drug-ketamin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Ketamin",
      profile: {
        klasse: "i.v./i.m. Anästhetikum (Phencyclidin-Derivat, „dissoziativ“)",
        mechanismus: "Nichtkompetitiver Antagonist am NMDA-Rezeptor; zusätzlich Opioid-, Monoamin- und Natriumkanal-Interaktion",
        indikation: "Einleitung/Erhaltung bei Kreislaufinstabilität, Notfallanästhesie, Analgosedierung, Bronchospasmus, Regionalanästhesie-Ergänzung",
        dosierung: "i.v. 0,25–0,5 mg/kg (Vollnarkose ~1–2mg/kg), i.m. 0,5–1mg/kg; Erhaltung 1–6mg/kg/h",
        pharmakokinetik: "Wirkeintritt i.v. <1min, i.m. 3–5min; hepatisch → aktiver Metabolit Norketamin (CYP3A4/2B6)",
        nebenwirkungen: "Sympathomimetisch (↑HF/RR), Hypersalivation, Emergence-Delirium/Halluzinationen (Benzodiazepin reduziert dies)",
        kontraindikationen: "Unkontrollierte Hypertonie, instabile KHK/frischer MI, dekompensierte Herzinsuffizienz, Psychose",
        interaktionen: "↑ZNS-Dämpfung mit Sedativa",
        antidot: "Keines",
        cave: "Einziges i.v.-Anästhetikum mit sympathomimetischer statt kardiodepressiver Wirkung",
        quelle: "Fachinfo Ketamin-hameln"
      }
    },
    {
      id: "fc-drug-esketamin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Esketamin",
      profile: {
        klasse: "i.v./i.m. Anästhetikum, S(+)-Enantiomer von Ketamin",
        mechanismus: "Wie Ketamin (NMDA-Rezeptor-Antagonismus), ca. doppelt so potent wie racemisches Ketamin",
        indikation: "Wie Ketamin (Einleitung/Erhaltung, Analgosedierung, Status asthmaticus, Regionalanästhesie-Ergänzung)",
        dosierung: "Einleitung 0,5–1mg/kg i.v. oder 2–4mg/kg i.m.; Erhaltung halbe Initialdosis alle 10–15min oder 0,5–3mg/kg/h; ↓Dosis bei Polytrauma",
        pharmakokinetik: "Wie Ketamin, hepatisch → Norketamin",
        nebenwirkungen: "Wie Ketamin (↑HF/RR, Hypersalivation, Emergence-Phänomene)",
        kontraindikationen: "Wie Ketamin (unkontrollierte Hypertonie, instabile KHK)",
        interaktionen: "↑ZNS-Dämpfung mit Sedativa",
        antidot: "Keines",
        cave: "Nur halbe mg-Dosis von Ketamin verwenden – doppelte Potenz, Verwechslungsgefahr!",
        quelle: "Fachinfo Ketanest S (Pfizer)"
      }
    },
    {
      id: "fc-drug-remimazolam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Remimazolam",
      profile: {
        klasse: "i.v. Benzodiazepin (ultrakurzwirksam)",
        mechanismus: "Positiv allosterischer Modulator des GABA-A-Rezeptors (Benzodiazepin-Bindungsstelle), strukturell mit Esterase-Sollbruchstelle",
        indikation: "Prozedurale Sedierung; Ein-/Erhaltung Allgemeinanästhesie (zulassungsabhängig)",
        dosierung: "Individuelle Titration (Alter, ASA, Begleitmedikation) – kein fixes mg/kg-Schema, siehe Fachinfo",
        pharmakokinetik: "Sehr schneller Wirkeintritt; Abbau durch Gewebe-Carboxylesterase-1 → inaktiv (organunabhängig, kein CYP450); kontextsens. HWZ 6–7min",
        nebenwirkungen: "Hypotonie, Atemdepression, Bradykardie, Übelkeit/Erbrechen; gelegentlich Schluckauf, Hypothermie, Anaphylaxie",
        kontraindikationen: "Überempfindlichkeit Benzodiazepine, instabile Myasthenia gravis, Schwangerschaft meiden",
        interaktionen: "↑ZNS-/Atemdepression mit Opioiden/Sedativa",
        antidot: "Flumazenil",
        cave: "Esterase-Metabolismus = organunabhängig (wie Remifentanil bei Opioiden) – zentraler Unterschied zu Midazolam",
        quelle: "EU-Zulassung/Fachinfo Byfavo (EMA)"
      }
    },
    {
      id: "fc-drug-midazolam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Midazolam",
      profile: {
        klasse: "Benzodiazepin (kurzwirksam)",
        mechanismus: "Positiv allosterischer Modulator des GABA-A-Rezeptors an der Benzodiazepin-Bindungsstelle",
        indikation: "Prämedikation, Sedierung, Kombinationsnarkose, ICU-Sedierung, Status epilepticus",
        dosierung: "Prämedikation i.m. 0,07–0,1mg/kg; Sedierung i.v. 0,3–0,5mg/kg (titrieren); Kombinationsnarkose 0,03–0,1mg/kg bzw. 0,03–0,1mg/kg/h",
        pharmakokinetik: "Wirkeintritt i.v. 1–2min; hepatisch CYP3A4 → aktiver Metabolit; wasserlöslich sauer, lipophil bei physiol. pH",
        nebenwirkungen: "Atemdepression (+Opioide), Hypotonie, paradoxe Reaktion (Alte/Kinder), anterograde Amnesie",
        kontraindikationen: "Myasthenia gravis, schwere Ateminsuffizienz, Schlafapnoe; Leberinsuffizienz (↑Wirkdauer)",
        interaktionen: "CYP3A4-Inhibitoren (Azol-Antimykotika) ↑Wirkung; ↑Atemdepression mit Opioiden",
        antidot: "Flumazenil",
        cave: "Einziges wasserlösliche Benzodiazepin – wird bei physiol. pH lipophil → schneller ZNS-Eintritt",
        quelle: "Fachinfo Midazolam-ratiopharm/Accord"
      }
    },
    {
      id: "fc-drug-diazepam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Diazepam",
      profile: {
        klasse: "Benzodiazepin (lang wirksam)",
        mechanismus: "Wie Midazolam – GABA-A-Rezeptor-Modulation an der Benzodiazepin-Bindungsstelle",
        indikation: "Prämedikation, Anxiolyse, Status epilepticus, Alkoholentzug, Spastik",
        dosierung: "Prämedikation oral/rektal 10–20mg Vorabend bzw. 5–10mg rektal 1h präop",
        pharmakokinetik: "Lange HWZ (20–100h) durch aktive Metaboliten (Desmethyldiazepam) – Kumulation bei Alten/Leberinsuffizienz",
        nebenwirkungen: "Sedierung, Atemdepression (+Opioide), Sturzrisiko bei Alten",
        kontraindikationen: "Schwere Ateminsuffizienz, Myasthenia gravis, Schlafapnoe, akute Intoxikation",
        interaktionen: "↑ZNS-Dämpfung mit Opioiden/Alkohol; aktive Metaboliten verlängern Interaktionsrisiko",
        antidot: "Flumazenil",
        cave: "Deutlich länger wirksam als Midazolam (aktive Metaboliten) – ungünstig für kurze/ambulante Eingriffe",
        quelle: "Fachinfo Diazepam-ratiopharm"
      }
    },
    {
      id: "fc-drug-lorazepam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Lorazepam",
      profile: {
        klasse: "Benzodiazepin (mittellang wirksam)",
        mechanismus: "Wie andere Benzodiazepine – GABA-A-Rezeptor-Modulation",
        indikation: "Prämedikation, Anxiolyse, Status epilepticus (2. Wahl), ICU-Sedierung (selten, Propylenglykol)",
        dosierung: "Prämedikation 1–2,5mg Vorabend und/oder 2–4mg 1–2h präop",
        pharmakokinetik: "HWZ ~12–16h, keine aktiven Metaboliten (nur Glucuronidierung) → bevorzugt bei Leberinsuffizienz",
        nebenwirkungen: "Sedierung, Atemdepression, Muskelschwäche; Propylenglykol-Toxizität bei Hochdosis-Langzeitinfusion",
        kontraindikationen: "Schwere Ateminsuffizienz, Myasthenia gravis; Scopolamin parenteral kontraindiziert",
        interaktionen: "↑ZNS-Dämpfung; Scopolamin-Kombination kontraindiziert",
        antidot: "Flumazenil",
        cave: "Keine aktiven Metaboliten → bevorzugt bei Leberinsuffizienz; Propylenglykol als eigenes Toxizitätsrisiko",
        quelle: "Fachinfo Lorazepam-neuraxpharm/dura"
      }
    },
    {
      id: "fc-drug-dexmedetomidin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Dexmedetomidin",
      profile: {
        klasse: "Selektiver α2-Adrenozeptor-Agonist",
        mechanismus: "Agonismus an präsynaptischen α2-Rezeptoren im ZNS (Locus coeruleus) → ↓Noradrenalinfreisetzung → Sedierung/Anxiolyse/Analgesie ohne relevante Atemdepression",
        indikation: "ICU-Sedierung (Ziel RASS 0 bis -3, erweckbar), Adjuvans Regional-/Allgemeinanästhesie",
        dosierung: "Initial 0,7µg/kg/h, Titration 0,2–1,4µg/kg/h; kein Bolus bei ICU-Umstellung",
        pharmakokinetik: "Wirkeintritt ~15min bis Steady State; hepatisch (Glucuronidierung, CYP2A6), renale Ausscheidung; ↓Dosis bei Leberinsuffizienz",
        nebenwirkungen: "Bradykardie, Hypotonie (initial ggf. Hypertonie durch α2B), Mundtrockenheit",
        kontraindikationen: "AV-Block II/III ohne Schrittmacher, unkontrollierte Hypotonie, akutes zerebrovaskuläres Ereignis",
        interaktionen: "↑Sedierung/Hypotonie mit ZNS-Dämpfern/Antihypertensiva",
        antidot: "Keines",
        cave: "Einziges gängiges ICU-Sedativum ohne relevante Atemdepression – Sedierung bei Nicht-Intubierten möglich",
        quelle: "Fachinfo Dexdor"
      }
    },
    {
      id: "fc-drug-clonidin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Clonidin",
      profile: {
        klasse: "Zentraler α2-Adrenozeptor-Agonist (Vorläufer von Dexmedetomidin)",
        mechanismus: "Wie Dexmedetomidin – zentrale α2-Agonisierung, aber weniger selektiv (α1-Restaktivität), langsamerer An-/Abflutung",
        indikation: "Prämedikation/Adjuvans, ICU-Sedierung/Delir/Entzug (Alkohol, Opioide), Hypertonie",
        dosierung: "i.v. 0,5–2µg/kg/h, einschleichend unter RR-Monitoring",
        pharmakokinetik: "Renal/hepatisch gemischt eliminiert, HWZ 6–24h (länger als Dexmedetomidin)",
        nebenwirkungen: "Hypotonie, Bradykardie, Sedierung, Mundtrockenheit, Obstipation",
        kontraindikationen: "Höhergradiger AV-Block, schwere Bradykardie, unkontrollierte Hypotonie",
        interaktionen: "↑Sedierung/Hypotonie mit ZNS-Dämpfern/Antihypertensiva; abruptes Absetzen unter Betablockern riskant",
        antidot: "Keines",
        cave: "Abruptes Absetzen → Rebound-Hypertonie/-Tachykardie – nie abrupt stoppen, ausschleichen",
        quelle: "Fachinfo Clonidin-ratiopharm"
      }
    }
  ];

  window.FLASHCARDS = (window.FLASHCARDS || []).concat(DRUG_CARDS);
})();
