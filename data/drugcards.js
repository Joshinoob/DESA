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
    },
  {
    id: "fc-drug-fentanyl",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Fentanyl",
    profile: {
      klasse: "Opioid-Analgetikum (Phenylpiperidin-Derivat, hochpotenter µ-Agonist)",
      mechanismus: "Agonist am Gi-gekoppelten µ-Opioidrezeptor → Hemmung der Adenylatzyklase, Öffnung von K⁺-Kanälen und Hemmung spannungsabhängiger Ca²⁺-Kanäle → präsynaptische Hemmung der Transmitterfreisetzung und postsynaptische Hyperpolarisation in Hinterhorn/Hirnstamm → Analgesie und Atemdepression",
      indikation: "Analgesie im Rahmen der Allgemeinanästhesie, Analgosedierung, transdermal bei chronischen Schmerzen",
      dosierung: "Anästhesie-Bolus 1,5–3(–5) µg/kg zur Einleitung, Repetition 25–50 µg; kardiochirurgische Hochdosistechnik bis 50 µg/kg unter Beatmung; transdermal 12–100 µg/h",
      pharmakokinetik: "Wirkeintritt i.v. 1–2min · Wirkdauer 30–60min (Einzelbolus), kontextsensitive HWZ steigt mit Infusionsdauer deutlich an · hepatisch CYP3A4 · renale Elimination überwiegend inaktiver Metaboliten",
      nebenwirkungen: "Atemdepression, Muskel-/Thoraxrigidität bei rascher Bolusgabe, Bradykardie, Übelkeit/Erbrechen, Miosis, Obstipation",
      kontraindikationen: "Überempfindlichkeit, schwere Ateminsuffizienz ohne Beatmungsmöglichkeit, aktuelle/kürzliche MAO-Hemmer-Therapie, erhöhter Hirndruck bei Spontanatmung",
      interaktionen: "CYP3A4-Inhibitoren (Azol-Antimykotika, Makrolide) verstärken die Wirkung; additive ZNS-/Atemdepression mit Sedativa/Alkohol",
      antidot: "Naloxon",
      cave: "Schnelle hochdosierte Bolusgabe kann eine Thoraxrigidität (\"wooden chest\") mit Beatmungsproblemen auslösen – Prüfungsklassiker",
      quelle: "Fachinfo Fentanyl B. Braun/-hameln Injektionslösung"
    }
  },
  {
    id: "fc-drug-sufentanil",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Sufentanil",
    profile: {
      klasse: "Opioid-Analgetikum (Phenylpiperidin-Derivat), potentester klinisch gebräuchlicher µ-Agonist",
      mechanismus: "Hochaffiner Agonist am µ-Opioidrezeptor (deutlich höhere Rezeptoraffinität als Fentanyl) → Gi-vermittelte Hemmung der nozizeptiven Signalweiterleitung auf spinaler und supraspinaler Ebene",
      indikation: "Analgesie im Rahmen von Allgemeinanästhesie/TIVA, Analgosedierung auf der Intensivstation, epidurale/intrathekale Analgesie (z.B. Geburtshilfe)",
      dosierung: "Einleitung 0,2–0,5 µg/kg als langsamer Bolus; große Eingriffe (z.B. Herzchirurgie) bis 1 µg/kg; Erhaltung 0,15–0,7 µg/kg/h bzw. Nachinjektion 10–25 µg",
      pharmakokinetik: "Wirkeintritt ~2min, Maximum 3–5min · Wirkdauer Einzeldosis ~30min, kontextsensitive HWZ nimmt mit Infusionsdauer zu · hohe Proteinbindung (~90%) → geringere Kumulation als Fentanyl · hepatisch CYP3A4, renale Elimination",
      nebenwirkungen: "Atemdepression, Bradykardie, Muskelrigidität, Hypotonie, Übelkeit/Erbrechen",
      kontraindikationen: "Überempfindlichkeit, MAO-Hemmer aktuell/letzte 14 Tage, i.v.-Gabe unter der Geburt vor Abnabelung, Ateminsuffizienz ohne Beatmungsmöglichkeit",
      interaktionen: "CYP3A4-Inhibitoren verstärken die Wirkung; kombinierte Agonist-Antagonisten (Buprenorphin, Nalbuphin, Pentazocin) können Wirkung abschwächen/Entzug auslösen",
      antidot: "Naloxon",
      cave: "Höchste Rezeptoraffinität der klinisch gebräuchlichen Opioide – trotz kurzer Einzeldosis-Wirkdauer strenge Titration nötig",
      quelle: "Fachinfo Sufentanil-hameln/-ratiopharm Injektions-/Infusionslösung"
    }
  },
  {
    id: "fc-drug-remifentanil",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Remifentanil",
    profile: {
      klasse: "Opioid-Analgetikum (Piperidin-Derivat, ultrakurzwirksam)",
      mechanismus: "Agonist am µ-Opioidrezeptor wie andere Fentanyl-Analoga, trägt jedoch eine Esterbindung im Molekül, die den Abbau durch unspezifische Plasma- und Gewebe-Esterasen ermöglicht und ihn von Leber-/Nierenfunktion entkoppelt",
      indikation: "Analgesie im Rahmen der Allgemeinanästhesie (v.a. TIVA), kurzzeitige Analgosedierung bei beatmeten Intensivpatienten",
      dosierung: "Einleitung 0,5–1 µg/kg Bolus über ≥30s; Erhaltung 0,1–0,5 µg/kg/min (TIVA); Analgosedierung ICU 0,05–0,2 µg/kg/min, kein Bolus bei wachen Patienten",
      pharmakokinetik: "Wirkeintritt <1–1,5min · kontextsensitive HWZ konstant 3–4min unabhängig von Infusionsdauer (Alleinstellungsmerkmal) · Metabolismus durch unspezifische Esterasen, organ- und nierenunabhängig · inaktiver Metabolit (Remifentanilsäure)",
      nebenwirkungen: "Atemdepression/Apnoe, Bradykardie, Hypotonie, Muskelrigidität, postoperative Hyperalgesie/akute Opioidtoleranz bei abruptem Absetzen",
      kontraindikationen: "Überempfindlichkeit gegen Fentanylanaloga, epidurale/intrathekale Anwendung (glycinhaltige Formulierung), alleinige Analgesie bei wachen, unüberwachten spontan atmenden Patienten",
      interaktionen: "Verstärkte Atemdepression/Hypotonie mit Sedativa/Hypnotika; kein relevanter CYP-Metabolismus → kaum pharmakokinetische Interaktionen",
      antidot: "Naloxon",
      cave: "Organunabhängiger Esterase-Abbau → konstante kontextsensitive HWZ auch nach stundenlanger Infusion; abruptes Absetzen kann rasche Hyperalgesie/Schmerzspitzen auslösen – Prüfungsklassiker",
      quelle: "Fachinfo Remifentanil-hameln/Ultiva"
    }
  },
  {
    id: "fc-drug-alfentanil",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Alfentanil",
    profile: {
      klasse: "Opioid-Analgetikum (Phenylpiperidin-Derivat, kurzwirksam)",
      mechanismus: "Agonist am µ-Opioidrezeptor mit geringerer Rezeptoraffinität als Fentanyl, aber deutlich schnellerem ZNS-Wirkeintritt durch hohen nicht-ionisierten (lipophilen) Anteil bei physiologischem pH infolge des niedrigen pKa-Werts",
      indikation: "Analgesie bei kurzen diagnostischen/chirurgischen Eingriffen, Einleitung/Ergänzung der Allgemeinanästhesie",
      dosierung: "Einleitung 10–20(–50) µg/kg als Bolus; Nachinjektionen 5–10 µg/kg; kontinuierlich 0,5–1 µg/kg/min",
      pharmakokinetik: "Sehr schneller Wirkeintritt (~1min, schneller als Fentanyl) · kurze Wirkdauer 10–15min (Einzeldosis) · terminale HWZ 1,5–3h (bei Älteren verlängert) · hepatisch CYP3A4, hohe Proteinbindung",
      nebenwirkungen: "Atemdepression, Bradykardie, Muskelrigidität, Hypotonie, Übelkeit",
      kontraindikationen: "Überempfindlichkeit, obstruktive Atemwegserkrankung, Atemdepression ohne Beatmungsmöglichkeit, MAO-Hemmer",
      interaktionen: "CYP3A4-Inhibitoren (z.B. Azol-Antimykotika, Makrolide) verstärken und verlängern die Wirkung deutlich",
      antidot: "Naloxon",
      cave: "Schnellster ZNS-Wirkeintritt aller Fentanyl-Analoga trotz geringerer Rezeptoraffinität – Folge der hohen Lipophilie im nicht-ionisierten Zustand",
      quelle: "Fachinfo Alfentanil-hameln Injektionslösung"
    }
  },
  {
    id: "fc-drug-morphin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Morphin",
    profile: {
      klasse: "Opioid-Analgetikum (natürliches Phenanthren-Alkaloid, Referenzsubstanz)",
      mechanismus: "Agonist am µ-Opioidrezeptor (zusätzlich geringe κ-/δ-Aktivität) → präsynaptische Hemmung der Transmitterfreisetzung und postsynaptische Hyperpolarisation in Hinterhorn und Hirnstamm → Analgesie, Sedierung, Atemdepression",
      indikation: "starke bis stärkste akute und chronische Schmerzen, Tumorschmerztherapie, adjuvant bei akutem Lungenödem",
      dosierung: "i.v. Titration 2–5mg alle 5–10min; parenteral s.c./i.m. 5–10mg alle 4h; oral retardiert Beginn 10–30mg 1-0-1; Kinder ≥1J. 0,1–0,2mg/kg i.v.",
      pharmakokinetik: "Wirkeintritt i.v. 5–10min · Wirkdauer 3–4h · orale Bioverfügbarkeit ~30% (First-Pass) · hepatische Glucuronidierung zu aktivem Morphin-6-Glucuronid (kumuliert bei Niereninsuffizienz) und Morphin-3-Glucuronid · renale Elimination",
      nebenwirkungen: "Atemdepression, Histaminfreisetzung (Flush, Bronchospasmus, Hypotonie), Übelkeit/Erbrechen, Obstipation, Miosis, Sedierung",
      kontraindikationen: "Überempfindlichkeit, akutes Abdomen, schwere Ateminsuffizienz, paralytischer Ileus, akute hepatische Porphyrie, gleichzeitige MAO-Hemmer-Therapie",
      interaktionen: "Additive ZNS-/Atemdepression mit Sedativa/Alkohol; Kumulation aktiver Metaboliten bei Niereninsuffizienz",
      antidot: "Naloxon",
      cave: "Aktiver Metabolit Morphin-6-Glucuronid kumuliert bei Niereninsuffizienz → verlängerte/verstärkte Atemdepression trotz unauffälliger Morphin-Clearance",
      quelle: "Fachinfo Morphin-ratiopharm/Morphin Merck Injektionslösung"
    }
  },
  {
    id: "fc-drug-piritramid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Piritramid",
    profile: {
      klasse: "Opioid-Analgetikum (Diphenylpropylamin-Derivat), im deutschsprachigen Raum Standard für postoperative Schmerztherapie",
      mechanismus: "Agonist am µ-Opioidrezeptor mit ca. 0,7-facher Potenz von Morphin, jedoch besserer kardiovaskulärer Verträglichkeit durch fehlende relevante Histaminfreisetzung",
      indikation: "starke akute, insbesondere postoperative Schmerzen",
      dosierung: "Erwachsene i.v. Titration 7,5–22,5mg als Einzeldosis; Kinder ≥5 Jahre 0,05–0,1mg/kg i.v.",
      pharmakokinetik: "Wirkeintritt i.v. wenige Minuten, i.m. ~15min · Wirkdauer 4–6h · terminale HWZ ~4–10h (verlängert bei Kumulation/Leberinsuffizienz) · hepatische Metabolisierung",
      nebenwirkungen: "Atemdepression (bei Kumulation durch zu rasche Nachdosierung), Sedierung, Übelkeit/Erbrechen, Hypotonie",
      kontraindikationen: "Überempfindlichkeit, komatöse Zustände, Atemdepression, Kinder <5 Jahre, Hypovolämie/Hypotonie, Epilepsie",
      interaktionen: "Additive ZNS-Depression mit Sedativa/Alkohol",
      antidot: "Naloxon",
      cave: "Voller analgetischer Effekt kann sich erst nach bis zu 24h einstellen – Kumulationsgefahr bei zu schneller Nachdosierung in dieser Phase",
      quelle: "Fachinfo Dipidolor"
    }
  },
  {
    id: "fc-drug-oxycodon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Oxycodon",
    profile: {
      klasse: "Opioid-Analgetikum (halbsynthetisches Thebain-Derivat)",
      mechanismus: "Agonist am µ- und in geringerem Maß κ-Opioidrezeptor; hohe orale Bioverfügbarkeit ermöglicht zuverlässige perorale Analgesie",
      indikation: "starke bis sehr starke akute und chronische Schmerzen (Tumor- und Nicht-Tumorschmerz)",
      dosierung: "opioidnaive Erwachsene retardiert oral Start 10mg alle 12h; unretardiert 5mg alle 4–6h; parenteral i.v./s.c. ca. halbe orale Dosis; Tumorschmerz teils 80–120mg/d",
      pharmakokinetik: "orale Bioverfügbarkeit 60–87% · Wirkeintritt unretardiert oral ~30–60min · HWZ ~3–5h (retardiert Freisetzung über 8h) · hepatisch CYP3A4 (Hauptweg, inaktives Noroxycodon) und CYP2D6 (aktives Oxymorphon) · renale Elimination",
      nebenwirkungen: "Atemdepression, Obstipation, Übelkeit, Sedierung, Schwindel",
      kontraindikationen: "Überempfindlichkeit, schwere Ateminsuffizienz, paralytischer Ileus, mittelschwere bis schwere Leberinsuffizienz, akutes Abdomen, MAO-Hemmer",
      interaktionen: "CYP3A4-Inhibitoren/-Induktoren beeinflussen den Wirkspiegel deutlich; additive Atemdepression mit Sedativa",
      antidot: "Naloxon",
      cave: "Die Fixkombination Oxycodon/Naloxon nutzt den hohen First-Pass-Effekt von oralem Naloxon, um die opioidbedingte Obstipation zu reduzieren, ohne die systemische Analgesie zu mindern",
      quelle: "Fachinfo Oxycodon-HCl-ratiopharm Retardtabletten/Hartkapseln"
    }
  },
  {
    id: "fc-drug-hydromorphon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Hydromorphon",
    profile: {
      klasse: "Opioid-Analgetikum (halbsynthetisches Morphin-Derivat, ca. 7–8-fach potenter als Morphin)",
      mechanismus: "Agonist am µ-Opioidrezeptor; nahezu ausschließliche hepatische Glucuronidierung ohne relevante CYP450-Beteiligung führt zu geringem Interaktionspotenzial und wenig aktiven Metaboliten",
      indikation: "starke bis stärkste Schmerzen, insbesondere bei Niereninsuffizienz oder Polypharmazie als Alternative zu Morphin",
      dosierung: "i.v./s.c. 1–1,5mg alle 3–4h bzw. Infusion 0,15–0,45mg/h; oral retardiert Start 4mg alle 12h, individuelle Titration",
      pharmakokinetik: "Wirkeintritt i.v. <5min, oral ~30min · HWZ ~2,5–3h · hepatische Glucuronidierung zu Hydromorphon-3-Glucuronid ohne relevanten CYP450-Metabolismus · renale Elimination",
      nebenwirkungen: "Atemdepression, Obstipation, Übelkeit, Sedierung, Pruritus",
      kontraindikationen: "Überempfindlichkeit, schwere Ateminsuffizienz, paralytischer Ileus, akutes Abdomen, MAO-Hemmer",
      interaktionen: "Geringes CYP-Interaktionspotenzial (Vorteil bei Polypharmazie); additive ZNS-Depression mit Sedativa",
      antidot: "Naloxon",
      cave: "Kaum CYP450-vermittelter Metabolismus → gut vorhersagbare Kinetik bei Leberinsuffizienz und Komedikation, daher bevorzugt bei Multimorbidität/Niereninsuffizienz",
      quelle: "Fachinfo Palladon/Palladon injekt"
    }
  },
  {
    id: "fc-drug-pethidin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Pethidin",
    profile: {
      klasse: "Opioid-Analgetikum (Phenylpiperidin-Derivat), heute nur eingeschränkt eingesetzt",
      mechanismus: "Agonist am µ-Opioidrezeptor mit zusätzlicher lokalanästhetischer (Natriumkanal-blockierender) Eigenwirkung; der Hauptmetabolit Norpethidin hemmt zusätzlich die neuronale Serotonin-Wiederaufnahme",
      indikation: "postoperatives Shivering (Standardtherapie), historisch akute Schmerzen/Geburtshilfe (heute zurückhaltend eingesetzt)",
      dosierung: "Shivering 12,5–25mg i.v.; Analgesie 25–100mg i.m./i.v. alle 3–4h unter Beachtung der kumulativen Höchstdosis wegen Norpethidin-Toxizität",
      pharmakokinetik: "Wirkeintritt i.v. wenige Minuten · Wirkdauer 2–4h · hepatischer Metabolismus zu Norpethidin (lange HWZ ~15–30h, neurotoxisch/prokonvulsiv, kumuliert bei Niereninsuffizienz)",
      nebenwirkungen: "Atemdepression, Krampfanfälle durch Norpethidin-Kumulation, Tachykardie (anticholinerg), Übelkeit",
      kontraindikationen: "Überempfindlichkeit, MAO-Hemmer aktuell/<14 Tage (Risiko exzitatorischer Krise/Serotonin-Syndrom), Niereninsuffizienz (relativ), Kinder <16 Jahre parenteral",
      interaktionen: "Serotonin-Syndrom-Risiko mit SSRI/SNRI/MAO-Hemmern; additive ZNS-Depression mit Sedativa",
      antidot: "Naloxon",
      cave: "Einziges gängiges Opioid mit relevantem Serotonin-Syndrom-Risiko – Norpethidin-Kumulation bei wiederholter Gabe oder Niereninsuffizienz kann Krampfanfälle auslösen, die durch Naloxon nicht antagonisiert werden",
      quelle: "Fachinfo Pethidin-hameln/Dolantin"
    }
  },
  {
    id: "fc-drug-tramadol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Tramadol",
    profile: {
      klasse: "Nicht-BtM-pflichtiges Opioid-Analgetikum mit dualem Wirkmechanismus (schwacher µ-Agonist)",
      mechanismus: "Schwacher Agonist am µ-Opioidrezeptor kombiniert mit Hemmung der neuronalen Wiederaufnahme von Serotonin und Noradrenalin → zusätzliche Aktivierung deszendierender schmerzhemmender Bahnen",
      indikation: "mäßig starke bis starke akute und chronische Schmerzen",
      dosierung: "Erwachsene oral/i.v. 50–100mg alle 4–6h, Tageshöchstdosis 400mg",
      pharmakokinetik: "Wirkeintritt oral ~30–60min · HWZ ~6h · CYP2D6-vermittelte Bildung des aktiven Metaboliten O-Desmethyltramadol (M1, potenter µ-Agonist) · hepatisch, renale Elimination",
      nebenwirkungen: "Übelkeit/Erbrechen, Schwindel, Sedierung, dosisabhängige Krampfanfälle, Serotonin-Syndrom bei Kombination",
      kontraindikationen: "Überempfindlichkeit, akute Intoxikation mit Alkohol/Hypnotika/Analgetika/Psychopharmaka, MAO-Hemmer aktuell/<14 Tage, unkontrollierte Epilepsie",
      interaktionen: "Serotonin-Syndrom-Risiko mit SSRI/SNRI/MAO-Hemmern; CYP2D6-Poor-Metabolizer zeigen reduzierte Wirkung; Senkung der Krampfschwelle",
      antidot: "Naloxon",
      cave: "Senkt die Krampfschwelle und birgt ein relevantes Serotonin-Syndrom-Risiko – bei Kombination mit SSRI/SNRI besondere Vorsicht geboten",
      quelle: "Fachinfo Tramadol-ratiopharm Retardtabletten"
    }
  },
  {
    id: "fc-drug-tapentadol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Tapentadol",
    profile: {
      klasse: "Analgetikum mit dualem Wirkmechanismus (MOR-NRI: µ-Opioidrezeptor-Agonist plus Noradrenalin-Wiederaufnahmehemmer)",
      mechanismus: "Agonist am µ-Opioidrezeptor kombiniert mit Hemmung der neuronalen Noradrenalin-Wiederaufnahme (kaum Serotonineffekt) → synergistische Verstärkung deszendierender schmerzhemmender Bahnen bei gegenüber Tramadol reduziertem Serotonin-Syndrom-Risiko",
      indikation: "mäßig starke bis starke akute und chronische Schmerzen",
      dosierung: "unretardiert 50–100mg alle 4–6h (max. 700mg Tag 1, 600mg Folgetage); retardiert Beginn 50mg 2x/d mit Titration nach Wirkung",
      pharmakokinetik: "Wirkeintritt oral ~30min · HWZ ~4h · hepatisch überwiegend Glucuronidierung ohne relevanten CYP-Metabolismus und ohne aktiven Metaboliten · renale Elimination",
      nebenwirkungen: "Übelkeit/Erbrechen, Schwindel, Somnolenz, Obstipation (geringer als bei reinen µ-Agonisten), Kopfschmerz",
      kontraindikationen: "Überempfindlichkeit, schwere Ateminsuffizienz, akute Intoxikation mit Alkohol/Hypnotika/zentral wirksamen Analgetika, MAO-Hemmer aktuell/<14 Tage",
      interaktionen: "Serotonin-Syndrom-Risiko (geringer als Tramadol) mit Serotonergika; additive ZNS-Depression mit Sedativa",
      antidot: "Naloxon",
      cave: "Kaum CYP450-Metabolismus (überwiegend Glucuronidierung) → deutlich geringeres Interaktionspotenzial als Tramadol oder Oxycodon",
      quelle: "Fachinfo Palexia/Palexia retard"
    }
  },
  {
    id: "fc-drug-methadon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Methadon",
    profile: {
      klasse: "Opioid-Analgetikum/Substitutionsmittel (synthetisches Diphenylpropylamin-Derivat, Racemat aus R- und S-Methadon)",
      mechanismus: "Agonist am µ-Opioidrezeptor, zusätzlich NMDA-Rezeptor-Antagonismus (v.a. R-Enantiomer) und Hemmung der Monoamin-Wiederaufnahme → auch wirksam bei neuropathischer Schmerzkomponente und Opioidtoleranz",
      indikation: "Opioidsubstitutionstherapie, therapierefraktäre chronische (Tumor-)Schmerzen, Opioidrotation",
      dosierung: "Substitution individuell einschleichend (Start 10–30mg/d, Titration nach Klinik); analgetisch nur durch erfahrene Behandler, initiale Einzeldosis meist 2,5–10mg wegen unvorhersehbarer Kinetik",
      pharmakokinetik: "Wirkeintritt oral ~30–60min · sehr lange und variable terminale HWZ 8–59h (Mittel ~24h), deutlich länger als analgetische Wirkdauer (6–8h) → Kumulationsgefahr · hepatisch CYP3A4/CYP2B6/CYP2D6 · biliäre und renale Elimination",
      nebenwirkungen: "Atemdepression (verzögert bei Kumulation), QTc-Verlängerung/Torsade de pointes, Sedierung, Obstipation, Schwitzen",
      kontraindikationen: "Überempfindlichkeit, schwere Ateminsuffizienz, bekanntes langes QT-Syndrom, gleichzeitige QT-verlängernde Medikation (relativ), schwere Leberinsuffizienz",
      interaktionen: "CYP3A4-Induktoren/-Inhibitoren verändern die Spiegel stark (Entzug bzw. Überdosierung möglich); additive QTc-Verlängerung mit anderen QT-wirksamen Substanzen",
      antidot: "Naloxon",
      cave: "Analgetische Wirkdauer (6–8h) ist deutlich kürzer als die Eliminationshalbwertszeit (bis 59h) → Kumulationsrisiko bei zu schneller Aufdosierung; QTc-Monitoring (EKG vor Beginn, nach 2 Wochen, vor Dosiserhöhung, jährlich) ist Pflicht",
      quelle: "Fachinfo L-Polamidon/Methadon-Lösung; AkdÄ"
    }
  },
  {
    id: "fc-drug-buprenorphin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Buprenorphin",
    profile: {
      klasse: "Opioid-Analgetikum (Thebain-Derivat, partieller µ-Opioidrezeptor-Agonist)",
      mechanismus: "Partialagonist mit sehr hoher Rezeptoraffinität, aber niedriger intrinsischer Aktivität am µ-Opioidrezeptor (zusätzlich κ-Antagonist, ORL1-Partialagonist) → Ceiling-Effekt für Atemdepression bei erhaltener Analgesie im therapeutischen Bereich, verdrängt andere Opioide kompetitiv vom Rezeptor",
      indikation: "mäßig starke bis starke chronische Schmerzen (transdermal), Opioidsubstitutionstherapie (sublingual), akute Schmerzen (parenteral)",
      dosierung: "transdermal 5–20 µg/h, Pflasterwechsel alle 3,5–7 Tage je nach Präparat; sublingual Substitution 0,4–24mg/d individuell; parenteral 0,15–0,3mg i.v./i.m. alle 6–8h",
      pharmakokinetik: "Wirkeintritt sublingual verzögert (Tmax ~90min) · hohe Rezeptoraffinität → analgetische Wirkdauer 6–8h, lange terminale HWZ 20–25h · hepatisch CYP3A4 zu schwächer wirksamem Norbuprenorphin · biliäre Elimination",
      nebenwirkungen: "Übelkeit, Schwindel, Sedierung, Obstipation, Anwendungsstellenreaktionen (transdermal); Atemdepression selten durch Ceiling-Effekt",
      kontraindikationen: "Überempfindlichkeit, schwere Ateminsuffizienz, Myasthenia gravis, Alkoholentzugsdelir, MAO-Hemmer aktuell/<14 Tage",
      interaktionen: "Hohe Rezeptoraffinität verdrängt/blockiert reine µ-Agonisten (kann bei Vorbehandlung mit Vollagonisten Entzugssymptome oder Wirkabschwächung auslösen); CYP3A4-Inhibitoren erhöhen den Spiegel",
      antidot: "Naloxon (eingeschränkt)",
      cave: "Hohe Rezeptoraffinität macht die Antagonisierung mit Naloxon schwierig (hohe Dosen/Dauerinfusion nötig) und kann bei gleichzeitiger Gabe eines Vollagonisten dessen Wirkung kompetitiv abschwächen",
      quelle: "Fachinfo Buprenorphin-neuraxpharm/Transtec; EMA"
    }
  },
  {
    id: "fc-drug-naloxon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Naloxon",
    profile: {
      klasse: "Kompetitiver Opioidrezeptor-Antagonist (reiner Antagonist ohne intrinsische Aktivität)",
      mechanismus: "Kompetitiver Antagonist an µ- (v.a.), κ- und δ-Opioidrezeptoren ohne eigene intrinsische Aktivität → verdrängt Opioidagonisten vom Rezeptor und hebt dadurch Analgesie, Sedierung und Atemdepression auf",
      indikation: "Antagonisierung einer Opioidüberdosierung/-intoxikation mit Atemdepression, Diagnostik bei Verdacht auf Opioidintoxikation",
      dosierung: "Erwachsene i.v. Titration 0,04–0,1(–0,2)mg alle 2–3min bis ausreichende Spontanatmung; Kinder 0,01–0,02mg/kg i.v.; nach initialem Ansprechen ggf. Erhaltungsinfusion (~2/3 der wirksamen Bolusdosis/h)",
      pharmakokinetik: "Wirkeintritt i.v. 1–2min · kurze HWZ ~30–90min, deutlich kürzer als die meisten Opioide · hepatische Glucuronidierung · renale Elimination",
      nebenwirkungen: "akutes Opioidentzugssyndrom bei Abhängigkeit, Übelkeit/Erbrechen, Tachykardie/Hypertonie, selten Lungenödem/Arrhythmien bei abrupter Antagonisierung",
      kontraindikationen: "Überempfindlichkeit (relativ, im Notfall keine absolute Kontraindikation); Vorsicht bei bekannter Opioidabhängigkeit oder kardialer Vorschädigung",
      interaktionen: "Hebt die Wirkung aller Opioidagonisten auf; bei Buprenorphin wegen dessen hoher Rezeptoraffinität nur eingeschränkt wirksam",
      antidot: "Keines",
      cave: "Die Halbwertszeit von Naloxon ist oft kürzer als die des antagonisierten Opioids → Renarkotisierung mit erneuter Atemdepression nach Abklingen der Naloxon-Wirkung, daher Überwachung bzw. Perfusor erforderlich",
      quelle: "Fachinfo Naloxon-ratiopharm Injektionslösung"
    }
  },
  {
    id: "fc-drug-paracetamol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Paracetamol",
    profile: {
      klasse: "Nicht-Opioid-Analgetikum/Antipyretikum (para-Aminophenol-Derivat)",
      mechanismus: "Überwiegend zentrale Hemmung der Prostaglandinsynthese (schwache, inkonstante COX-Hemmung im ZNS) sowie Modulation des deszendierenden serotonergen Schmerzhemmsystems, bei kaum peripherer COX-Hemmung ohne relevante antiphlogistische Wirkung",
      indikation: "leichte bis mäßig starke Schmerzen, Fieber",
      dosierung: "Erwachsene 500–1000mg alle 4–6h p.o./i.v., Tageshöchstdosis 4g (bei Risikofaktoren/Leberinsuffizienz/Kachexie max. 2–3g/d); Kinder 10–15mg/kg alle 4–6h, max. 60mg/kg/d",
      pharmakokinetik: "Wirkeintritt oral ~30–60min · HWZ ~2–3h · hepatisch überwiegend Glucuronidierung/Sulfatierung, kleiner Anteil über CYP2E1 zum toxischen Metaboliten NAPQI (normalerweise durch Glutathion entgiftet) · renale Elimination",
      nebenwirkungen: "bei therapeutischer Dosis selten (vereinzelt Transaminasenanstieg); bei Überdosierung dosisabhängige Hepatotoxizität bis akutes Leberversagen",
      kontraindikationen: "schwere Leberinsuffizienz, Überempfindlichkeit; Vorsicht bei chronischem Alkoholabusus und Mangelernährung/Glutathionmangel",
      interaktionen: "Enzyminduktoren (Rifampicin, Phenytoin, Carbamazepin, Phenobarbital) erhöhen die NAPQI-Bildung und damit die Hepatotoxizität bei Überdosierung; verstärkt die Wirkung von Cumarinen",
      antidot: "N-Acetylcystein",
      cave: "Einzeldosen ≥150mg/kg (bzw. ≥6g beim Erwachsenen) sind potenziell hepatotoxisch – N-Acetylcystein muss frühzeitig, idealerweise innerhalb von 8h, gegeben werden",
      quelle: "Fachinfo Paracetamol-ratiopharm; BfArM/AkdÄ"
    }
  },
  {
    id: "fc-drug-metamizol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Metamizol",
    profile: {
      klasse: "Nicht-Opioid-Analgetikum (Pyrazolon-Derivat) mit analgetischer, antipyretischer und spasmolytischer Wirkung",
      mechanismus: "Hemmung der zentralen und peripheren Prostaglandinsynthese (schwache COX-Hemmung) sowie zusätzliche Aktivierung des endogenen Cannabinoid-/Opioidsystems, die zur ausgeprägten spasmolytischen und analgetischen Wirkung beiträgt",
      indikation: "starke akute/chronische Schmerzen, Koliken (spasmolytisch), hohes Fieber bei Versagen anderer Maßnahmen",
      dosierung: "Erwachsene/Jugendliche >53kg Einzeldosis 500–1000mg (bis 2500mg) p.o./i.v., bis 4x/d, Tageshöchstdosis 5000mg; i.v.-Injektion langsam (max. 500mg/min), besser als Kurzinfusion wegen Hypotonierisiko",
      pharmakokinetik: "Wirkeintritt i.v. rasch (~30min) · Prodrug mit rascher Hydrolyse zum aktiven Metaboliten 4-Methylaminoantipyrin (MAA) · hepatischer Metabolismus, renale Elimination",
      nebenwirkungen: "Agranulozytose (selten, potenziell lebensbedrohlich), Hypotonie v.a. bei zu schneller i.v.-Injektion, anaphylaktoide Reaktionen, geringe Thrombozytenaggregationshemmung",
      kontraindikationen: "Störungen der Knochenmarkfunktion/hämatopoetische Erkrankungen, Pyrazolon-/Pyrazolidin-Überempfindlichkeit, akute hepatische Porphyrie, Glucose-6-Phosphat-Dehydrogenase-Mangel, letztes Schwangerschaftstrimenon",
      interaktionen: "Verstärkt die Wirkung von Cumarin-Antikoagulanzien; senkt Ciclosporin-Spiegel; additive Hypotonie mit Antihypertensiva",
      antidot: "Keines",
      cave: "Agranulozytose-Risiko ist nicht dosisabhängig und auch bei kurzzeitiger Anwendung möglich – in den USA und UK deshalb nicht zugelassen; bei Fieber/Halsschmerzen unter Therapie sofort Blutbildkontrolle",
      quelle: "Fachinfo Novalgin; BfArM-Risikoinformation Agranulozytose"
    }
  },
  {
    id: "fc-drug-ibuprofen",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Ibuprofen",
    profile: {
      klasse: "Nicht-Opioid-Analgetikum (NSAR, Propionsäure-Derivat)",
      mechanismus: "Nichtselektive, reversible Hemmung der Cyclooxygenasen COX-1 und COX-2 → verminderte Prostaglandinsynthese mit analgetischer, antipyretischer und antiphlogistischer Wirkung; die COX-1-Hemmung erklärt gastrointestinale und thrombozytäre Nebenwirkungen",
      indikation: "leichte bis mäßig starke Schmerzen, Entzündungen (rheumatisch/postoperativ), Fieber",
      dosierung: "Erwachsene 400–800mg alle 6–8h p.o./i.v., Tageshöchstdosis i.d.R. 2400mg (Selbstmedikation max. 1200mg/d)",
      pharmakokinetik: "Wirkeintritt oral ~30–60min · HWZ ~2h · hepatischer Metabolismus (CYP2C9), renale Elimination · hohe Plasmaproteinbindung",
      nebenwirkungen: "gastrointestinale Ulzera/Blutungen, Nierenfunktionsstörung, Thrombozytenaggregationshemmung, erhöhtes kardiovaskuläres Risiko bei Hochdosis-Langzeitanwendung (≥2400mg/d), Bronchospasmus bei ASS-Intoleranz",
      kontraindikationen: "aktive gastrointestinale Ulzera/Blutungen, schwere Herzinsuffizienz, schwere Niereninsuffizienz (GFR<30ml/min), 3. Schwangerschaftstrimenon, ASS-/NSAR-induziertes Asthma/Urtikaria",
      interaktionen: "erhöhtes Blutungsrisiko mit Antikoagulanzien/Thrombozytenaggregationshemmern; abgeschwächte Wirkung von Diuretika/ACE-Hemmern bei erhöhter Nephrotoxizität (\"Triple Whammy\"); erhöhte Lithium-/Methotrexat-Spiegel",
      antidot: "Keines",
      cave: "\"Triple Whammy\" – die Kombination NSAR + ACE-Hemmer/Sartan + Diuretikum kann ein akutes Nierenversagen auslösen",
      quelle: "Fachinfo Ibuprofen; Gelbe Liste"
    }
  },
  {
    id: "fc-drug-diclofenac",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Diclofenac",
    profile: {
      klasse: "Nicht-Opioid-Analgetikum (NSAR, Phenylessigsäure-Derivat)",
      mechanismus: "Nichtselektive, relativ COX-2-präferentielle Hemmung von COX-1 und COX-2 → reduzierte Prostaglandinsynthese mit ausgeprägter antiphlogistischer, analgetischer und antipyretischer Wirkung",
      indikation: "mäßig starke Schmerzen, entzündlich-rheumatische Erkrankungen, postoperative Schmerzen",
      dosierung: "Erwachsene 50–150mg/d p.o. verteilt auf 2–3 Einzeldosen; parenteral i.m./i.v. 75mg/d, nur kurzfristig",
      pharmakokinetik: "Wirkeintritt oral ~30–60min · HWZ ~1–2h · hepatischer First-Pass-Metabolismus (CYP2C9), orale Bioverfügbarkeit ~50% · renale/biliäre Elimination",
      nebenwirkungen: "gastrointestinale Ulzera/Blutungen, Nierenfunktionsstörung, Thrombozytenaggregationshemmung, Transaminasenanstieg, erhöhtes kardiovaskuläres Risiko (Myokardinfarkt/Schlaganfall)",
      kontraindikationen: "bestehende Herzinsuffizienz (NYHA II–IV), ischämische Herzerkrankung, periphere arterielle Verschlusskrankheit, zerebrovaskuläre Erkrankung, aktive gastrointestinale Ulzera/Blutungen, schwere Niereninsuffizienz, 3. Trimenon",
      interaktionen: "erhöhtes Blutungsrisiko mit Antikoagulanzien; abgeschwächte antihypertensive/diuretische Wirkung bei erhöhter Nephrotoxizität mit ACE-Hemmern/Diuretika; erhöhte Lithium-/Digoxin-Spiegel",
      antidot: "Keines",
      cave: "Seit dem Rote-Hand-Brief 2013 explizite Kontraindikation bei kardiovaskulärer Vorerkrankung – höheres kardiovaskuläres Risiko als andere klassische NSAR",
      quelle: "Fachinfo Diclofenac; Rote-Hand-Brief 2013"
    }
  },
  {
    id: "fc-drug-ketorolac",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Ketorolac",
    profile: {
      klasse: "Nicht-Opioid-Analgetikum (NSAR, Pyrrolizin-Carbonsäure-Derivat) mit stark analgetischer, schwach antiphlogistischer Wirkung",
      mechanismus: "Nichtselektive, sehr potente Hemmung von COX-1 und COX-2 → ausgeprägte Reduktion der peripheren Prostaglandinsynthese mit analgetischer Potenz vergleichbar niedrigdosierten Opioiden",
      indikation: "kurzzeitige Behandlung mäßig starker bis starker akuter (postoperativer) Schmerzen",
      dosierung: "Erwachsene i.v./i.m. Einzeldosis 10–30mg alle 4–6h, Tageshöchstdosis 90mg (Risikopatienten/>65J./<50kg max. 60mg/d); Gesamtanwendungsdauer oral+parenteral max. 5 Tage",
      pharmakokinetik: "Wirkeintritt ~30min · HWZ ~5–6h, bei Älteren/Niereninsuffizienz verlängert · hepatischer Metabolismus, überwiegend renale Elimination",
      nebenwirkungen: "gastrointestinale Ulzera/Blutungen, Nierenfunktionsstörung/akutes Nierenversagen, erhöhtes Blutungsrisiko, Wundheilungsstörungen",
      kontraindikationen: "aktive peptische Ulzera/gastrointestinale Blutungen (aktuell/anamnestisch), Niereninsuffizienz, erhöhtes Blutungsrisiko, perioperative Anwendung bei hohem Blutungsrisiko, Schwangerschaft/Stillzeit, Kinder",
      interaktionen: "erhöhtes Blutungsrisiko mit Antikoagulanzien/anderen NSAR/ASS (Kombination mit anderen NSAR kontraindiziert); erhöhte Nephrotoxizität mit ACE-Hemmern/Diuretika; erhöhte Lithium-/Methotrexat-Spiegel",
      antidot: "Keines",
      cave: "Höchstes gastrointestinales und renales Nebenwirkungsrisiko unter den gängigen NSAR – daher strikt auf maximal 5 Tage Gesamtanwendungsdauer begrenzt",
      quelle: "Fachinfo Ketorolac (Tora-dol)"
    }
  },
  {
    id: "fc-drug-parecoxib",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Parecoxib",
    profile: {
      klasse: "Nicht-Opioid-Analgetikum (selektiver COX-2-Inhibitor, Coxib), Prodrug",
      mechanismus: "Prodrug, wird hepatisch rasch zum aktiven Metaboliten Valdecoxib hydrolysiert, der selektiv COX-2 hemmt → Reduktion der Prostaglandinsynthese bei weitgehender Schonung der COX-1-vermittelten gastrointestinalen und thrombozytären Funktion",
      indikation: "kurzzeitige Behandlung postoperativer Schmerzen",
      dosierung: "initial 40mg i.v./i.m., danach bei Bedarf 20–40mg alle 6–12h, Tageshöchstdosis 80mg; bei mäßiger Leberinsuffizienz Dosis halbieren (max. 40mg/d)",
      pharmakokinetik: "Wirkeintritt ~7–13min · HWZ des aktiven Metaboliten Valdecoxib ~8h · hepatische Hydrolyse (Parecoxib→Valdecoxib) und CYP3A4/CYP2C9-Metabolismus von Valdecoxib · renale Elimination",
      nebenwirkungen: "kardiovaskuläre Ereignisse (Myokardinfarkt/Schlaganfall) bei Langzeitanwendung, periphere Ödeme/Hypertonie, gastrointestinale Beschwerden (geringer als bei nichtselektiven NSAR), sehr selten schwere Hautreaktionen (Stevens-Johnson-Syndrom)",
      kontraindikationen: "Sulfonamid-Überempfindlichkeit, aktive gastrointestinale Ulzera/Blutungen, chronisch-entzündliche Darmerkrankungen, Herzinsuffizienz (NYHA II–IV), ischämische Herz-/zerebrovaskuläre/periphere arterielle Erkrankung, schwere Leberinsuffizienz, 3. Trimenon/Stillzeit",
      interaktionen: "CYP2C9-Inhibitoren (z.B. Fluconazol) erhöhen den Valdecoxib-Spiegel; abgeschwächte Wirkung von ACE-Hemmern/Diuretika bei erhöhter Nephrotoxizität; erhöhte Lithium-Spiegel",
      antidot: "Keines",
      cave: "Als COX-2-selektiver Hemmer kaum Thrombozytenaggregationshemmung, aber erhöhtes kardiovaskuläres Risiko – Kontraindikation bei ischämischer Herzerkrankung strikt beachten",
      quelle: "Fachinfo Dynastat 40mg; EMA-Zulassungsdokument Dynastat"
    }
  }
,
  {
    id: "fc-drug-succinylcholin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Succinylcholin",
    profile: {
      klasse: "Depolarisierendes Muskelrelaxans",
      mechanismus: "Agonist am nikotinergen ACh-Rezeptor der motorischen Endplatte → anhaltende Depolarisation der Muskelmembran (Phase-I-Block) → initiale Faszikulationen, dann schlaffe Lähmung durch Inaktivierung spannungsabhängiger Na⁺-Kanäle",
      indikation: "Rapid Sequence Induction/Ileuseinleitung, kurze Eingriffe mit Intubationsbedarf, Durchbrechen von Laryngospasmus",
      dosierung: "i.v. 1,0–1,5 mg/kg (RSI); Kinder ohne venösen Zugang i.m. 2–3 mg/kg",
      pharmakokinetik: "Wirkeintritt ~30–60s · Wirkdauer 5–10min · Hydrolyse durch Plasma-Pseudocholinesterase (Butyrylcholinesterase) · keine hepatische/renale Elimination nötig",
      nebenwirkungen: "Hyperkaliämie, Bradykardie/Arrhythmien, Muskelfaszikulationen, Muskelkater, Augen-/Hirn-/Magendruckanstieg, maligne Hyperthermie",
      kontraindikationen: "MH-Disposition, Hyperkaliämierisiko (Verbrennung >24h, Immobilisation, neuromuskuläre Erkrankungen, Polytrauma), Pseudocholinesterasemangel, perforierende Augenverletzung, erhöhter Hirndruck",
      interaktionen: "Verstärkte Hyperkaliämie mit anderen kaliumfreisetzenden Substanzen; Wirkverlängerung durch Cholinesterasehemmer",
      antidot: "Keines",
      cave: "Bei Überdosierung/wiederholter Gabe kann ein nichtdepolarisierend-ähnlicher Phase-II-Block entstehen; wichtigster MH-Trigger neben volatilen Anästhetika",
      quelle: "Fachinfo Succinylcholin 2% Inresa"
    }
  },
  {
    id: "fc-drug-rocuronium",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Rocuronium",
    profile: {
      klasse: "Nichtdepolarisierendes Muskelrelaxans (Aminosteroid)",
      mechanismus: "Kompetitiver Antagonist am nikotinergen ACh-Rezeptor der motorischen Endplatte → Verhinderung der ACh-induzierten Depolarisation → schlaffe Muskellähmung",
      indikation: "Muskelrelaxation zur Intubation/Beatmung, RSI (hochdosiert), Erhaltungsrelaxation intraoperativ",
      dosierung: "Intubation 0,6 mg/kg (RSI 1,0–1,2 mg/kg); Erhaltung 0,15 mg/kg; Perfusor 0,3–0,4 mg/kg/h",
      pharmakokinetik: "Wirkeintritt 60–90s (RSI-Dosis) · Wirkdauer 30–60min dosisabhängig · überwiegend hepatische Elimination · spezifisch antagonisierbar durch Sugammadex",
      nebenwirkungen: "Anaphylaxie (häufigste NMBA-assoziierte Ursache), Tachykardie, geringe Histaminfreisetzung, verlängerte Wirkung bei Leber-/Niereninsuffizienz",
      kontraindikationen: "Überempfindlichkeit gegen Rocuronium/Bromid-Ionen, bekannte Rocuronium-Anaphylaxie",
      interaktionen: "Wirkverstärkung durch volatile Anästhetika, Aminoglykoside, Magnesium; Wirkabschwächung durch chronische Antikonvulsiva",
      antidot: "Sugammadex",
      cave: "Einziges NMBA mit spezifischem Reversal – auch nach RSI-Hochdosis (1,2 mg/kg) mit Sugammadex 16 mg/kg innerhalb von ~3min antagonisierbar (CICV-Rettung)",
      quelle: "Fachinfo Rocuroniumbromid hameln"
    }
  },
  {
    id: "fc-drug-vecuronium",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Vecuronium",
    profile: {
      klasse: "Nichtdepolarisierendes Muskelrelaxans (Aminosteroid, mittellang)",
      mechanismus: "Kompetitiver Antagonist am nikotinergen ACh-Rezeptor der motorischen Endplatte → Blockade der neuromuskulären Übertragung ohne intrinsische autonome Wirkung",
      indikation: "Muskelrelaxation zur Intubation und Erhaltung während Allgemeinanästhesie",
      dosierung: "Intubation 0,08–0,1 mg/kg; Erhaltung 0,02–0,03 mg/kg alle 20–40min; Perfusor ~1–2 µg/kg/min",
      pharmakokinetik: "Wirkeintritt ~2,5–3min · Wirkdauer 30–40min · hepatische Metabolisierung (aktiver Metabolit 3-Desacetylvecuronium) + biliäre/renale Elimination · HWZ ~65–75min",
      nebenwirkungen: "Kaum Histaminfreisetzung, verlängerte Blockade bei Leberinsuffizienz, selten Anaphylaxie",
      kontraindikationen: "Überempfindlichkeit gegen Vecuronium/Bromid, schwere Leberfunktionsstörung (Vorsicht)",
      interaktionen: "Wirkverstärkung durch volatile Anästhetika, Aminoglykoside, Magnesium, Calciumantagonisten",
      antidot: "Sugammadex",
      cave: "Aktiver Metabolit (3-Desacetylvecuronium) kann bei Niereninsuffizienz kumulieren und die Wirkung deutlich verlängern",
      quelle: "Fachinfo Vecuronium Inresa; Gelbe Liste"
    }
  },
  {
    id: "fc-drug-atracurium",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Atracurium",
    profile: {
      klasse: "Nichtdepolarisierendes Muskelrelaxans (Benzylisochinolin)",
      mechanismus: "Kompetitiver Antagonist am nikotinergen ACh-Rezeptor der motorischen Endplatte; organunabhängiger Abbau durch Hofmann-Elimination (pH-/temperaturabhängige Spontanspaltung) und unspezifische Esterhydrolyse",
      indikation: "Muskelrelaxation zur Intubation/Erhaltung, v.a. bei Leber- oder Niereninsuffizienz",
      dosierung: "Intubation 0,3–0,6 mg/kg i.v.; Erhaltung/Perfusor 11–13 µg/kg/min",
      pharmakokinetik: "Wirkeintritt ~2–3min · Wirkdauer 20–35min · Hofmann-Elimination + Esterhydrolyse → organunabhängig · HWZ ~20min",
      nebenwirkungen: "Histaminfreisetzung (Flush, Hypotonie, Bronchospasmus), Tachykardie, Laudanosin-Akkumulation (ZNS-Erregung bei Hochdosis/Langzeit)",
      kontraindikationen: "Überempfindlichkeit gegen Atracurium/Benzolsulfonsäure, Asthma/Allergie-Anamnese (relativ, Histaminfreisetzung), Säuglinge <1 Monat",
      interaktionen: "Wirkverstärkung durch volatile Anästhetika, Aminoglykoside; KEINE Antagonisierung durch Sugammadex möglich",
      antidot: "Neostigmin (Sugammadex wirkungslos)",
      cave: "Organunabhängige Elimination macht es zum Mittel der Wahl bei Leber-/Niereninsuffizienz, jedoch als Benzylisochinolin NICHT durch Sugammadex antagonisierbar",
      quelle: "Fachinfo Atracurium-hameln 10 mg/ml"
    }
  },
  {
    id: "fc-drug-cisatracurium",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Cisatracurium",
    profile: {
      klasse: "Nichtdepolarisierendes Muskelrelaxans (Benzylisochinolin, Stereoisomer des Atracurium)",
      mechanismus: "Kompetitiver Antagonist am nikotinergen ACh-Rezeptor der motorischen Endplatte; Abbau überwiegend durch organunabhängige Hofmann-Elimination, kaum Esterhydrolyse",
      indikation: "Muskelrelaxation zur Intubation/Erhaltung, insbesondere ICU-Langzeitrelaxation und bei Organinsuffizienz",
      dosierung: "Intubation 0,15 mg/kg; Erhaltung 0,03 mg/kg; Perfusor initial 3 µg/kg/min, nach Stabilisierung 1–2 µg/kg/min",
      pharmakokinetik: "Wirkeintritt ~2min (langsamer als Atracurium) · Wirkdauer ~45min · Hofmann-Elimination organunabhängig · HWZ ~25min",
      nebenwirkungen: "Kaum Histaminfreisetzung (Vorteil ggü. Atracurium), Laudanosin-Akkumulation bei Langzeitinfusion (geringer als Atracurium)",
      kontraindikationen: "Überempfindlichkeit gegen Cisatracurium/Atracurium/Benzolsulfonsäure",
      interaktionen: "Wirkverstärkung durch volatile Anästhetika, Aminoglykoside, Magnesium; KEINE Antagonisierung durch Sugammadex möglich",
      antidot: "Neostigmin (Sugammadex wirkungslos)",
      cave: "Kaum Histaminfreisetzung → günstiges Profil bei kardiovaskulär instabilen/ICU-Patienten, trotzdem als Benzylisochinolin kein Sugammadex-Ansprechen",
      quelle: "Fachinfo NIMBEX 5 mg/10 mg"
    }
  },
  {
    id: "fc-drug-mivacurium",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Mivacurium",
    profile: {
      klasse: "Nichtdepolarisierendes Muskelrelaxans (Benzylisochinolin, kurzwirksam)",
      mechanismus: "Kompetitiver Antagonist am nikotinergen ACh-Rezeptor der motorischen Endplatte; Inaktivierung durch Hydrolyse via Plasma-Pseudocholinesterase (wie Succinylcholin)",
      indikation: "Muskelrelaxation für kurze Eingriffe/Intubation mit rascher Erholung",
      dosierung: "Intubation 0,15–0,2 mg/kg (Injektion über 5–30s je nach Dosis); Erhaltung/Perfusor 4–10 µg/kg/min",
      pharmakokinetik: "Wirkeintritt ~2–3min · Wirkdauer 15–20min (kürzeste unter NMBA) · Hydrolyse durch Pseudocholinesterase · nierenunabhängig bei normalem Enzym",
      nebenwirkungen: "Histaminfreisetzung (Flush, Hypotonie) bei rascher Injektion, stark verlängerte Blockade bei Pseudocholinesterasemangel",
      kontraindikationen: "Überempfindlichkeit, homozygoter atypischer Pseudocholinesterase-Genotyp",
      interaktionen: "Wirkverlängerung mit Cholinesterasehemmern/Succinylcholin (gleicher Abbauweg); Wirkverstärkung durch volatile Anästhetika",
      antidot: "Sugammadex unwirksam (Benzylisochinolin); Neostigmin möglich",
      cave: "Wie Succinylcholin bei Pseudocholinesterasemangel massiv verlängerte Blockade (Stunden) möglich – gleicher Abbauweg, gleiches Risiko",
      quelle: "Fachinfo Mivacron 10 mg/20 mg"
    }
  },
  {
    id: "fc-drug-pancuronium",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Pancuronium",
    profile: {
      klasse: "Nichtdepolarisierendes Muskelrelaxans (Aminosteroid, langwirksam)",
      mechanismus: "Kompetitiver Antagonist am nikotinergen ACh-Rezeptor der motorischen Endplatte; zusätzlich vagolytische Wirkung durch Blockade kardialer muskarinerger M2-Rezeptoren",
      indikation: "Langdauernde Muskelrelaxation (Herzchirurgie, Langzeitbeatmung), Intubation bei erwarteter langer OP-Dauer",
      dosierung: "Intubation 0,08–0,1 mg/kg; Erhaltung 0,01–0,02 mg/kg nach Bedarf",
      pharmakokinetik: "Wirkeintritt 2–4min · Wirkdauer 60–120min (lang) · überwiegend renale Elimination (~80%), hepatische Deacetylierung zu aktivem Metaboliten · HWZ ~2h",
      nebenwirkungen: "Tachykardie/Blutdruckanstieg (vagolytisch), verlängerte Blockade bei Niereninsuffizienz, kaum Histaminfreisetzung",
      kontraindikationen: "Überempfindlichkeit, schwere Niereninsuffizienz (relativ), Myasthenia gravis, fehlende Beatmungsmöglichkeit",
      interaktionen: "Wirkverstärkung durch volatile Anästhetika, Aminoglykoside; verstärkte Tachykardie mit anderen vagolytischen/sympathomimetischen Substanzen",
      antidot: "Sugammadex; Neostigmin",
      cave: "Einziges gängiges NMBA mit klinisch relevanter vagolytischer Wirkung (Tachykardie) – klassisches Prüfungsmerkmal; Kumulationsgefahr bei Niereninsuffizienz",
      quelle: "Fachinfo Pancuroniumbromid PANPHARMA 2 mg/ml"
    }
  },
  {
    id: "fc-drug-sugammadex",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Sugammadex",
    profile: {
      klasse: "Selektiver Relaxans-bindender Wirkstoff (modifiziertes γ-Cyclodextrin)",
      mechanismus: "Bildet einen festen 1:1-Einschlusskomplex mit steroidalen NMBA (hohe Affinität zu Rocuronium, geringer zu Vecuronium) im Plasma → Konzentrationsgradient entzieht der neuromuskulären Endplatte freies NMBA → rasche Wiederherstellung der neuromuskulären Übertragung",
      indikation: "Aufhebung einer durch Rocuronium oder Vecuronium induzierten neuromuskulären Blockade bei Erwachsenen und Kindern ab 2 Jahren",
      dosierung: "2 mg/kg (TOF-Count ≥2), 4 mg/kg (Post-Tetanic-Count 1–2), 16 mg/kg (sofortige Reversal ~3min nach Rocuronium-RSI-Dosis)",
      pharmakokinetik: "Wirkeintritt 1,5–3min · renale Elimination unverändert · bei schwerer Niereninsuffizienz stark verlängerte Elimination (Tage)",
      nebenwirkungen: "Dysgeusie, Kopfschmerz, Übelkeit, Überempfindlichkeit bis Anaphylaxie, Bradykardie (selten bis Asystolie), Rekurarisierung bei Unterdosierung",
      kontraindikationen: "Überempfindlichkeit gegen Sugammadex; schwere Niereninsuffizienz nur mit besonderer Vorsicht",
      interaktionen: "Interferiert mit hormonellen Kontrazeptiva (Progesteron-Komplexierung) → zusätzliche Verhütung für 7 Tage; kann Wirkspiegel von Toremifen/Fusidinsäure beeinflussen",
      antidot: "Entfällt (ist selbst Reversal-Agens)",
      cave: "Wirkt NUR bei steroidalen NMBA (Rocuronium/Vecuronium), NICHT bei Benzylisochinolinen (Atracurium/Cisatracurium/Mivacurium) – klassischer Prüfungs-Fallstrick",
      quelle: "Fachinfo Bridion; EMA-Zulassungsdokument Sugammadex"
    }
  },
  {
    id: "fc-drug-neostigmin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Neostigmin",
    profile: {
      klasse: "Indirektes Parasympathomimetikum (reversibler Cholinesterasehemmer, quartäres Amin)",
      mechanismus: "Reversible Hemmung der Acetylcholinesterase an der neuromuskulären Endplatte und peripher → Anstieg der ACh-Konzentration im synaptischen Spalt → kompetitive Verdrängung des nichtdepolarisierenden NMBA vom Rezeptor",
      indikation: "Reversal nichtdepolarisierender NMBA (v.a. Benzylisochinoline ohne Sugammadex-Option), Myasthenia gravis, postoperative Darmatonie/Harnverhalt",
      dosierung: "Reversal 0,03–0,07 mg/kg i.v. (max. 5 mg), immer in Kombination mit Glycopyrrolat (~0,2 mg pro 1 mg Neostigmin) oder Atropin",
      pharmakokinetik: "Wirkeintritt 1–5min i.v. · Wirkdauer 30–60min · hepatische Metabolisierung + renale Elimination · quartäres Amin → NICHT ZNS-gängig",
      nebenwirkungen: "Bradykardie, Hypersalivation, Bronchospasmus, Übelkeit/Erbrechen, Darmkoliken, cholinerge Krise bei Überdosierung",
      kontraindikationen: "Mechanischer Darm-/Harnwegsverschluss, bestimmte Herzrhythmusstörungen, Überempfindlichkeit, zu tiefe Blockade (TOF=0)",
      interaktionen: "Antagonisiert nichtdepolarisierende NMBA, verlängert/verstärkt paradox die Wirkung von Succinylcholin; stets mit Anticholinergikum kombinieren",
      antidot: "Atropin (bei muskarinerger Überdosierung)",
      cave: "Bei zu tiefer Blockade (TOF-Count 0) unwirksam bzw. verlängert die Blockade paradox – immer mit neuromuskulärem Monitoring und Anticholinergikum kombinieren",
      quelle: "Fachinfo Neostigmin PANPHARMA 0,5 mg/ml"
    }
  },
  {
    id: "fc-drug-pyridostigmin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Pyridostigmin",
    profile: {
      klasse: "Indirektes Parasympathomimetikum (reversibler Cholinesterasehemmer, quartäres Amin)",
      mechanismus: "Reversible Hemmung der Acetylcholinesterase → erhöhte ACh-Konzentration am nikotinergen/muskarinergen Rezeptor → verbesserte neuromuskuläre Übertragung",
      indikation: "Myasthenia gravis (Dauertherapie), postoperative Darm-/Blasenatonie, selten NMBA-Reversal",
      dosierung: "Myasthenia gravis oral 3–4× 60 mg (max. 720 mg/Tag), streng individuell titriert",
      pharmakokinetik: "Wirkeintritt oral 30–60min · Wirkdauer 3–6h (länger als Neostigmin) · überwiegend renale Elimination unverändert · quartäres Amin → NICHT ZNS-gängig",
      nebenwirkungen: "Bradykardie, Hypersalivation, gastrointestinale Krämpfe/Diarrhoe, Bronchospasmus, cholinerge Krise bei Überdosierung",
      kontraindikationen: "Mechanischer Darm-/Harnwegsverschluss, Überempfindlichkeit gegen Pyridostigmin/Bromide, Kombination mit Succinylcholin",
      interaktionen: "Verstärkte Wirkung mit anderen Cholinergika; antagonisiert nichtdepolarisierende NMBA; verlängert Succinylcholin-Wirkung",
      antidot: "Atropin (bei cholinerger Krise)",
      cave: "Längere HWZ als Neostigmin → Standardpräparat in der Dauertherapie der Myasthenia gravis; cholinerge und myasthene Krise sind klinisch oft schwer zu unterscheiden",
      quelle: "Fachinfo Kalymin 60N; Mestinon"
    }
  },
  {
    id: "fc-drug-glycopyrrolat",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Glycopyrrolat",
    profile: {
      klasse: "Anticholinergikum (quartäres Ammonium, peripheres Parasympatholytikum)",
      mechanismus: "Kompetitiver Antagonist an muskarinergen ACh-Rezeptoren (v.a. M2/M3) → Hemmung parasympathischer Effekte an Herz, Drüsen und glatter Muskulatur ohne zentrale Wirkung",
      indikation: "Kombination mit Neostigmin zum NMBA-Reversal (Vermeidung muskarinerger Nebenwirkungen), Prämedikation zur Sekretionshemmung, intraoperative Vagolyse",
      dosierung: "Reversal-Kombination ~0,2 mg pro 1 mg Neostigmin (bzw. ~4 µg/kg); präoperativ 0,1–0,2 mg i.v./i.m.",
      pharmakokinetik: "Wirkeintritt 1–2min i.v. · Wirkdauer 2–4h (länger als Atropin) · quartäres Amin → NICHT ZNS-gängig · renale Elimination",
      nebenwirkungen: "Tachykardie, Mundtrockenheit, geringe Mydriasis (kaum ZNS-/Augen-Penetration), Harnverhalt, Obstipation",
      kontraindikationen: "Engwinkelglaukom, mechanische GI-/Harnwegsobstruktion, Ileus, schwere Colitis ulcerosa/toxisches Megacolon, Myasthenia gravis",
      interaktionen: "Additive anticholinerge Effekte mit anderen Anticholinergika; hebt muskarinerge Neostigmin-Effekte auf, ohne dessen NMBA-Antagonismus zu beeinträchtigen",
      antidot: "Physostigmin wirkt nur peripher (Glycopyrrolat ist nicht ZNS-gängig)",
      cave: "Im Gegensatz zu Atropin passiert Glycopyrrolat die Blut-Hirn-Schranke NICHT → bevorzugt bei älteren Patienten/Delir-Risiko in Kombination mit Neostigmin",
      quelle: "Fachinfo Robinul; Gelbe Liste Glycopyrroniumbromid"
    }
  },
  {
    id: "fc-drug-atropin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Atropin",
    profile: {
      klasse: "Anticholinergikum (tertiäres Amin, Parasympatholytikum, Tropan-Alkaloid)",
      mechanismus: "Kompetitiver Antagonist an muskarinergen ACh-Rezeptoren (M1–M5) → Hemmung parasympathischer Effekte an Herz, Drüsen, glatter Muskulatur und im ZNS",
      indikation: "Symptomatische Bradykardie, Laryngospasmus, Organophosphat-/Cholinesterasehemmer-Vergiftung, Prämedikation (heute selten)",
      dosierung: "Bradykardie Erwachsene 0,5 mg i.v., Wiederholung bis max. 3 mg; Kinder 0,01–0,02 mg/kg (min. 0,1 mg); Organophosphat-Intoxikation deutlich höhere, titrierte Dosen",
      pharmakokinetik: "Wirkeintritt <1min i.v. · Wirkdauer kardial 30min–2h, Sekretionshemmung länger · hepatische Metabolisierung + renale Elimination · tertiäres Amin → gut ZNS-gängig",
      nebenwirkungen: "Tachykardie, Mundtrockenheit, Mydriasis/Akkommodationsstörung, Harnverhalt, zentrales anticholinerges Syndrom (Verwirrtheit, Halluzinationen), Hitzestau",
      kontraindikationen: "Engwinkelglaukom, Tachyarrhythmie/Vorhofflimmern, koronare Herzkrankheit (relativ), mechanische GI-/Harnwegsobstruktion, Megakolon",
      interaktionen: "Additive anticholinerge Effekte mit trizyklischen Antidepressiva/Antihistaminika; antagonisiert Effekte von Cholinesterasehemmern",
      antidot: "Physostigmin (bei zentralem anticholinergem Syndrom)",
      cave: "Passiert im Gegensatz zu Glycopyrrolat die Blut-Hirn-Schranke → kann zentrales anticholinerges Syndrom (postoperatives Delir) auslösen; Dosen <0,5 mg vermeiden (paradoxe Bradykardie)",
      quelle: "Gelbe Liste Atropin; ERC-Guidelines 2021"
    }
  },
  {
    id: "fc-drug-physostigmin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Physostigmin",
    profile: {
      klasse: "Indirektes Parasympathomimetikum (reversibler Cholinesterasehemmer, tertiäres Amin)",
      mechanismus: "Reversible Hemmung der Acetylcholinesterase zentral und peripher (tertiäres Amin → ZNS-gängig) → Anstieg von ACh zentral und peripher → Aufhebung zentraler und peripherer anticholinerger Symptome",
      indikation: "Zentrales anticholinerges Syndrom (diagnostisch und therapeutisch), Delir durch Anticholinergika-Intoxikation",
      dosierung: "Erwachsene 1–2 mg langsam i.v. (über ≥5min), Wiederholung nach 20–30min möglich; Kinder 0,02–0,06 mg/kg",
      pharmakokinetik: "Wirkeintritt wenige Minuten i.v. · kurze Wirkdauer 30–60min (Esterhydrolyse) · plasmatische/hepatische Hydrolyse · tertiäres Amin → ZNS-gängig",
      nebenwirkungen: "Bradykardie, Hypersalivation, Bronchospasmus, Krampfanfälle bei zu rascher Injektion, cholinerge Krise bei Überdosierung",
      kontraindikationen: "Asthma bronchiale, mechanischer Darm-/Harnwegsverschluss, AV-Block/Bradykardie, QRS-Verbreiterung >120ms (V.a. trizyklische Kardiotoxizität)",
      interaktionen: "Kontraindiziert nach trizyklischen Antidepressiva bei QRS-Verbreiterung (Asystolie-/Krampfrisiko); additive cholinerge Effekte mit anderen Cholinesterasehemmern",
      antidot: "Atropin (bei cholinerger Überdosierung von Physostigmin selbst)",
      cave: "Einziges ZNS-gängiges Cholinesterasehemmer-Antidot – Mittel der Wahl beim zentralen anticholinergen Syndrom, aber kontraindiziert bei TCA-Kardiotoxizität (QRS >120ms)",
      quelle: "ToxInfo/Antidotarium Physostigmin; Fachinfo Anticholium"
    }
  },
  {
    id: "fc-drug-lidocain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Lidocain",
    profile: {
      klasse: "Lokalanästhetikum vom Amid-Typ (mittlere Wirkdauer); auch Klasse-Ib-Antiarrhythmikum",
      mechanismus: "Reversible Blockade spannungsabhängiger Na⁺-Kanäle von intrazellulär an der Nervenmembran → Hemmung der Impulsfortleitung durch verminderte Aufstrichgeschwindigkeit des Aktionspotentials",
      indikation: "Infiltrations-/Leitungs-/Epidural-/Oberflächenanästhesie, ventrikuläre Arrhythmien, Abschwächung der Intubationsreaktion",
      dosierung: "Ohne Adrenalin max. 3–4,5 mg/kg (max. 300mg); mit Adrenalin max. 7 mg/kg (max. 500mg); i.v. Bolus bei Arrhythmie 1–1,5 mg/kg",
      pharmakokinetik: "Wirkeintritt schnell (2–5min) · Wirkdauer 1–2h (mit Adrenalin länger) · hepatische Metabolisierung (CYP3A4/1A2) mit aktiven Metaboliten · renale Elimination",
      nebenwirkungen: "ZNS-Symptome (periorale Parästhesien, Tinnitus, Krampfanfälle), Kardiotoxizität bei hohen Spiegeln (Bradykardie, Asystolie), Allergie selten (Amid-Typ)",
      kontraindikationen: "Schwere Erregungsleitungsstörungen ohne Schrittmacher, Hypovolämie/dekompensierte Herzinsuffizienz, bekannte Amid-Allergie",
      interaktionen: "Verstärkte Kardiotoxizität mit anderen Antiarrhythmika/Betablockern; CYP3A4-Inhibitoren erhöhen Plasmaspiegel",
      antidot: "Lipidemulsion (Intralipid) bei LAST",
      cave: "Geringstes LAST-Risiko unter den Amid-Lokalanästhetika, dennoch treten ZNS-Symptome (Krampf) typischerweise vor der Kardiotoxizität auf",
      quelle: "Fachinfo Lidocain-HCl B. Braun 2%"
    }
  },
  {
    id: "fc-drug-bupivacain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Bupivacain",
    profile: {
      klasse: "Lokalanästhetikum vom Amid-Typ (lange Wirkdauer)",
      mechanismus: "Blockade spannungsabhängiger Na⁺-Kanäle mit hoher Proteinbindung und langsamer Dissoziation ('fast-in, slow-out') → ausgeprägte kardiodepressive Wirkung bei systemischer Toxizität",
      indikation: "Epidural-/Spinalanästhesie, periphere Nervenblockaden, Infiltrationsanästhesie, postoperative Schmerztherapie",
      dosierung: "Max. Einzeldosis ~2 mg/kg (150mg bei 75kg), Tagesmaximaldosis 400mg; Konzentration 0,25–0,5%",
      pharmakokinetik: "Wirkeintritt 5–10min (Epidural) · Wirkdauer 4–8h (lang) · hepatische Metabolisierung (CYP3A4/CYP1A2) · hohe Proteinbindung (~95%)",
      nebenwirkungen: "Kardiotoxizität (maligne Arrhythmien, therapieresistenter Herzstillstand), ZNS-Krämpfe, Hypotonie bei rückenmarksnaher Anwendung",
      kontraindikationen: "Schwere Hypotonie/kardiogener oder hypovolämischer Schock, i.v.-Regionalanästhesie (Bier-Block), Paracervikalblock in der Geburtshilfe, bekannte Amid-Allergie",
      interaktionen: "Additive Kardiotoxizität mit Klasse-I/III-Antiarrhythmika; erhöhtes Toxizitätsrisiko bei Azidose/Hypoxie",
      antidot: "Lipidemulsion (Intralipid) bei LAST",
      cave: "Höchste Kardiotoxizität aller Lokalanästhetika ('fast-in, slow-out' am Na⁺-Kanal) – Lipid-Rescue (1,5 ml/kg Bolus, dann 0,25 ml/kg/min) als Erstlinientherapie bei LAST-Reanimation",
      quelle: "Fachinfo Bupivacain 0,5% JENAPHARM"
    }
  },
  {
    id: "fc-drug-levobupivacain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Levobupivacain",
    profile: {
      klasse: "Lokalanästhetikum vom Amid-Typ (reines S-Enantiomer des Bupivacain, lange Wirkdauer)",
      mechanismus: "Blockade spannungsabhängiger Na⁺-Kanäle wie Bupivacain, jedoch als reines S-Enantiomer geringere Affinität zu kardialen Na⁺-/K⁺-Kanälen → geringere Kardio- und ZNS-Toxizität als racemisches Bupivacain",
      indikation: "Epidural-/Spinalanästhesie, periphere Nervenblockaden, postoperative Schmerztherapie, Geburtshilfe",
      dosierung: "Max. Einzeldosis 150mg; Tagesmaximaldosis 400mg/24h; postoperative Infusion ≤18,75mg/h, Geburtshilfe ≤12,5mg/h",
      pharmakokinetik: "Wirkeintritt 5–15min · Wirkdauer 4–8h · hepatische Metabolisierung (CYP3A4/CYP1A2) · hohe Proteinbindung (~97%)",
      nebenwirkungen: "Hypotonie/Bradykardie (rückenmarksnah), ZNS-Symptome bei Überdosierung, seltener kardiotoxisch als Bupivacain",
      kontraindikationen: "Schwere Hypotonie bei kardiogenem/hypovolämischem Schock, hochkonzentrierte Anwendung (0,75%) in der Geburtshilfe, Paracervikalblock, bekannte Amid-Allergie",
      interaktionen: "Additive Kardiotoxizität mit Klasse-I/III-Antiarrhythmika; CYP1A2/3A4-Interaktionen möglich",
      antidot: "Lipidemulsion (Intralipid) bei LAST",
      cave: "Reines S-Enantiomer, entwickelt zur Reduktion der Kardiotoxizität von Bupivacain – Prüfungsklassiker zur Stereochemie der Lokalanästhetika",
      quelle: "Fachinfo Chirocaine"
    }
  },
  {
    id: "fc-drug-ropivacain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Ropivacain",
    profile: {
      klasse: "Lokalanästhetikum vom Amid-Typ (reines S-Enantiomer, lange Wirkdauer)",
      mechanismus: "Blockade spannungsabhängiger Na⁺-Kanäle; als S-Enantiomer geringere Lipophilie und Kardiotoxizität als Bupivacain sowie relative Dissoziation von sensorischer und motorischer Blockade",
      indikation: "Epidural-/Spinalanästhesie, periphere Nervenblockaden, postoperative und geburtshilfliche Schmerztherapie",
      dosierung: "Periphere Nervenblockade max. 2,5–3,0 mg/kg; kontinuierliche Blockade 0,2–0,6 mg/kg/h bis 72h; Epiduralanalgesie meist 0,2%ig",
      pharmakokinetik: "Wirkeintritt 10–15min · Wirkdauer 4–6h (Analgesie länger) · hepatische Metabolisierung überwiegend via CYP1A2 · Proteinbindung ~94%",
      nebenwirkungen: "Hypotonie/Bradykardie (rückenmarksnah), ZNS-Symptome bei Überdosierung, geringere Kardiotoxizität als Bupivacain",
      kontraindikationen: "Bekannte Amid-Allergie, i.v.-Regionalanästhesie, schwere Hypotonie/Schock",
      interaktionen: "CYP1A2-Inhibitoren (z.B. Fluvoxamin) erhöhen Plasmaspiegel; additive Toxizität mit anderen Lokalanästhetika",
      antidot: "Lipidemulsion (Intralipid) bei LAST",
      cave: "Größere therapeutische Breite als Bupivacain bei relativer sensomotorischer Dissoziation → bevorzugt in Geburtshilfe und postoperativer Analgesie",
      quelle: "Fachinfo Naropin 5 mg/ml"
    }
  },
  {
    id: "fc-drug-prilocain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Prilocain",
    profile: {
      klasse: "Lokalanästhetikum vom Amid-Typ (mittlere Wirkdauer)",
      mechanismus: "Blockade spannungsabhängiger Na⁺-Kanäle der Nervenmembran; sein Metabolit o-Toluidin oxidiert Hämoglobin-Eisen zu Methämoglobin",
      indikation: "Infiltrations-/Leitungs-/i.v.-Regionalanästhesie (Bier-Block), EMLA-Creme (mit Lidocain) zur Oberflächenanästhesie",
      dosierung: "Maximaldosis ~600mg bzw. 8,5 mg/kg KG; keine Anwendung bei Kindern <6 Monaten",
      pharmakokinetik: "Wirkeintritt schnell (~5min) · Wirkdauer 1–2h · hepatische/renale Metabolisierung zu o-Toluidin · geringste systemische Kardiotoxizität der Amide",
      nebenwirkungen: "Methämoglobinämie (dosisabhängig, klinisch relevant ab ~8 mg/kg), ZNS-Symptome bei Überdosierung, selten Allergie",
      kontraindikationen: "Angeborene/idiopathische Methämoglobinämie, Kinder <6 Monate, schwere Anämie, G6PD-Mangel (relativ)",
      interaktionen: "Verstärkte Methämoglobinbildung mit anderen Oxidantien (z.B. Sulfonamide, Nitrate)",
      antidot: "Methylenblau (bei Methämoglobinämie); Lipidemulsion bei LAST",
      cave: "Einziges Lokalanästhetikum mit klinisch relevanter Methämoglobinämie-Gefahr – Antidot Methylenblau; besondere Vorsicht bei Säuglingen und EMLA-Überdosierung",
      quelle: "Fachinfo Xylonest"
    }
  },
  {
    id: "fc-drug-mepivacain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Mepivacain",
    profile: {
      klasse: "Lokalanästhetikum vom Amid-Typ (mittlere Wirkdauer)",
      mechanismus: "Blockade spannungsabhängiger Na⁺-Kanäle der Nervenmembran → Hemmung der Impulsfortleitung, ähnlich Lidocain, jedoch ohne vasodilatatorische Eigenwirkung",
      indikation: "Infiltrations-, Leitungs-, Epidural- und Plexusanästhesie (v.a. Zahnmedizin, Regionalanästhesie ohne Adrenalinbedarf)",
      dosierung: "Erwachsene max. 400mg (6 mg/kg) bei Epidural-/peripherer Blockade, Plexusanästhesie max. 500mg (7 mg/kg); Kinder max. 5 mg/kg",
      pharmakokinetik: "Wirkeintritt schnell (3–5min) · Wirkdauer 1,5–3h (länger als Lidocain durch fehlende Vasodilatation) · hepatische Metabolisierung · renale Elimination",
      nebenwirkungen: "ZNS-Symptome (Schwindel, Krampfanfälle), Kardiotoxizität bei Überdosierung, selten Allergie",
      kontraindikationen: "Bekannte Amid-Allergie, schwere Erregungsleitungsstörungen, fehlende Zulassung bei Neugeborenen/Säuglingen, Porphyrie",
      interaktionen: "Additive ZNS-/Kardiotoxizität mit anderen Lokalanästhetika/Antiarrhythmika",
      antidot: "Lipidemulsion (Intralipid) bei LAST",
      cave: "Fehlende intrinsische Vasodilatation ergibt längere Wirkdauer als Lidocain auch ohne Adrenalinzusatz – beliebt in Geburtshilfe/Kurzeingriffen ohne Vasokonstriktor",
      quelle: "Fachinfo Scandicain"
    }
  },
  {
    id: "fc-drug-tetracain",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Tetracain",
    profile: {
      klasse: "Lokalanästhetikum vom Ester-Typ (lange Wirkdauer, hohe Toxizität)",
      mechanismus: "Blockade spannungsabhängiger Na⁺-Kanäle der Nervenmembran; als Ester hydrolysiert durch Plasma-Pseudocholinesterase, jedoch langsamer als andere Ester bei hoher Lipophilie und Wirkstärke",
      indikation: "Spinalanästhesie (hyperbare Lösung), Oberflächenanästhesie von Haut/Schleimhaut und Auge, Kombinationscreme mit Lidocain",
      dosierung: "Spinalanästhesie hyperbar ~10–20mg; Schleimhaut-Spray üblich 2 Sprühstöße (je ca. 0,7mg), zugelassene Tages-/Einzel-Maximaldosis 20mg nicht überschreiten; topische Haut-Creme Einwirkzeit 30–60min",
      pharmakokinetik: "Wirkeintritt topisch/spinal schnell · Wirkdauer spinal 2–4h · Hydrolyse durch Plasma-Pseudocholinesterase (langsamer als andere Ester) · Metabolit PABA",
      nebenwirkungen: "Hohe systemische Toxizität (ZNS-Krämpfe, Kardiotoxizität) bei Fehlinjektion, allergische Reaktionen (Ester-Typ, PABA-Kreuzallergie), Hornhautschäden bei wiederholter Augenanwendung",
      kontraindikationen: "Bekannte Ester-/PABA-Allergie, Pseudocholinesterasemangel (verlängerte Toxizität), Anwendung auf großflächig geschädigter Haut/Schleimhaut",
      interaktionen: "Verstärkte Toxizität bei Cholinesterasehemmung (z.B. Neostigmin, Organophosphate); additive Wirkung mit anderen Lokalanästhetika",
      antidot: "Lipidemulsion (Intralipid) bei LAST",
      cave: "Ester-Lokalanästhetikum mit der höchsten Toxizität pro mg der Gruppe – strenge Dosisbegrenzung bei topischer/spinaler Anwendung; PABA-Allergiepotenzial (anders als bei Amiden) beachten",
      quelle: "Gelbe Liste Tetracain; AMBOSS Lokalanästhetika"
    }
  }
,
  {
    id: "fc-drug-noradrenalin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Noradrenalin",
    profile: {
      klasse: "Kardiovaskuläres Sympathomimetikum, Katecholamin (Vasopressor)",
      mechanismus: "Direkter Agonist an α1- (stark) und β1-Adrenozeptoren (gering), kaum β2-Wirkung → Gq-vermittelte Vasokonstriktion (arteriell/venös) und geringe positive Inotropie/Chronotropie über Gs-cAMP",
      indikation: "Vasopressor 1. Wahl bei septischem/vasoplegischem Schock, andere distributive Schockformen, intraoperative Hypotonie",
      dosierung: "0,05–0,5 µg/kg/min i.v. kontinuierlich, Titration nach MAP (Ziel meist ≥65 mmHg)",
      pharmakokinetik: "Wirkeintritt sofort (Sek.) · HWZ ~2–3 min · Metabolismus durch COMT/MAO · gut steuerbar",
      nebenwirkungen: "Reflexbradykardie, periphere/viszerale Minderperfusion, Arrhythmien, Extravasationsnekrosen",
      kontraindikationen: "Phäochromozytom, Tachyarrhythmien, unkorrigierte Hypovolämie (vor Volumengabe), Engwinkelglaukom (relativ)",
      interaktionen: "Verstärkte hypertensive Wirkung mit MAO-Hemmern/trizyklischen Antidepressiva, Arrhythmiegefahr mit halogenierten Inhalationsanästhetika",
      antidot: "Phentolamin (bei Paravasat)",
      cave: "Extravasation kann ausgedehnte Hautnekrosen verursachen – zentralvenöse Gabe bevorzugen",
      quelle: "Fachinfo Arterenol/Noradrenalin-Aguettant; AMBOSS-SOP Kreislaufunterstützung"
    }
  },
  {
    id: "fc-drug-adrenalin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Adrenalin",
    profile: {
      klasse: "Kardiovaskuläres Sympathomimetikum, Katecholamin",
      mechanismus: "Nichtselektiver Agonist an α1-, β1- und β2-Adrenozeptoren dosisabhängig → niedrig dosiert β-Überwiegen (Vasodilatation, Inotropie/Chronotropie ↑), hochdosiert α1-vermittelte Vasokonstriktion",
      indikation: "Herz-Kreislauf-Stillstand (Reanimation), Anaphylaxie, kardiogener Schock/schwere Herzinsuffizienz, Bronchospasmus",
      dosierung: "Reanimation 1 mg i.v./i.o. alle 3–5 min; Anaphylaxie 0,5 mg i.m., wiederholbar nach 5 min; Perfusor Schock 0,01–0,5 µg/kg/min",
      pharmakokinetik: "Wirkeintritt sofort i.v. · HWZ ~2 min · Metabolismus COMT/MAO · nicht kumulierend",
      nebenwirkungen: "Tachyarrhythmien, Hypertonie, Myokardischämie, Angst/Tremor, Hyperglykämie, Laktatazidose",
      kontraindikationen: "In Reanimation/Anaphylaxie keine absolute KI; relativ: Phäochromozytom, Tachyarrhythmie, Engwinkelglaukom",
      interaktionen: "Arrhythmiegefahr mit halogenierten Anästhetika/Digitalis, hypertensive Krise mit nichtselektiven Betablockern oder MAO-Hemmern",
      antidot: "Keines",
      cave: "Bei Anaphylaxie IMMER i.m. (anterolateraler Oberschenkel) als Erstlinie – i.v.-Gabe nur titriert durch Geübte",
      quelle: "Fachinfo Adrenalin Ethypharm/Suprarenin; ERC-Leitlinien Reanimation/Anaphylaxie"
    }
  },
  {
    id: "fc-drug-vasopressin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Vasopressin",
    profile: {
      klasse: "Vasopressoranaloges Peptidhormon (ADH)",
      mechanismus: "Agonist an V1a-Rezeptoren glatter Gefäßmuskulatur (Gq → IP3/Ca2+ ↑ → Vasokonstriktion) und V2-Rezeptoren der Sammelrohre (Gs → cAMP → Aquaporin-Einbau → Antidiurese), catecholaminunabhängiger Wirkmechanismus",
      indikation: "Katecholamin-refraktärer septischer/vasodilatatorischer Schock (add-on zu Noradrenalin), vasoplegischer Schock nach Herzchirurgie",
      dosierung: "Fixe Infusionsrate 0,01–0,04 U/min (i.d.R. 0,03 U/min) i.v., nicht nach Wirkung titrieren",
      pharmakokinetik: "Wirkeintritt Minuten · HWZ ~10–20 min · hepatische/renale Elimination",
      nebenwirkungen: "Periphere/splanchnische/koronare Ischämie, Hyponatriämie, Abfall des Herzzeitvolumens",
      kontraindikationen: "Koronare Herzkrankheit (relativ, strenge Indikation), chronische Nephritis mit Stickstoffretention",
      interaktionen: "Verstärkte Vasokonstriktion mit anderen Vasopressoren",
      antidot: "Keines",
      cave: "Katecholamin-unabhängiger Wirkmechanismus – ideales Add-on bei Katecholamin-Tachyphylaxie/hochdosiertem Noradrenalinbedarf",
      quelle: "Fachinfo Empressin; Surviving Sepsis Campaign"
    }
  },
  {
    id: "fc-drug-terlipressin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Terlipressin",
    profile: {
      klasse: "Vasopressin-Analogon (Prodrug), V1-selektiv",
      mechanismus: "Prodrug, wird durch Endopeptidasen langsam zu Lysin-Vasopressin gespalten → selektiver V1a-Agonismus an splanchnischer/systemischer Gefäßmuskulatur → Vasokonstriktion und Senkung des portalvenösen Drucks bei nur geringer V2-Aktivität",
      indikation: "Akute Ösophagusvarizenblutung, hepatorenales Syndrom Typ 1 (HRS-1)",
      dosierung: "Varizenblutung initial 1–2 mg i.v. Bolus, dann 1 mg alle 4–6h (max. 5 Tage); HRS-1 0,85–1 mg alle 4–6h oder als Dauerinfusion",
      pharmakokinetik: "Wirkeintritt ~10 min · lange Wirkdauer 4–6h durch protrahierte Metabolisierung zu aktivem Vasopressin · hepatische/renale Elimination",
      nebenwirkungen: "Splanchnische/periphere Ischämie, Hyponatriämie, Bradykardie, Bauchschmerzen, schwere Ateminsuffizienz und Sepsis/septischer Schock bei HRS-1",
      kontraindikationen: "Septischer Schock mit geringer kardialer Leistung, Schwangerschaft, ischämische kardiovaskuläre Erkrankung in der Anamnese",
      interaktionen: "Verstärkte Bradykardie mit Betablockern, additive Wirkung mit QT-verlängernden Substanzen",
      antidot: "Keines",
      cave: "Rote-Hand-Brief 2022: erhöhtes Risiko für schwere/letale Ateminsuffizienz und Sepsis/septischen Schock bei HRS-1 – engmaschiges Monitoring",
      quelle: "Fachinfo Glycylpressin; AkdÄ Rote-Hand-Brief 2022"
    }
  },
  {
    id: "fc-drug-dopamin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Dopamin",
    profile: {
      klasse: "Kardiovaskuläres Sympathomimetikum, endogenes Katecholamin",
      mechanismus: "Dosisabhängiger Agonismus – niedrig dosiert D1-Rezeptoren (renal/mesenterial, Gs-vermittelte Vasodilatation), mittlere Dosis β1-Rezeptoren (Inotropie/Chronotropie), hohe Dosis α1-Rezeptoren (Vasokonstriktion), zusätzlich indirekte Noradrenalin-Freisetzung",
      indikation: "Kardiogener/distributiver Schock (heute nachrangig gegenüber Noradrenalin/Dobutamin), symptomatische Bradykardie",
      dosierung: "2–5 µg/kg/min (niedrig), Steigerung alle 15–30 min in 5–10 µg/kg/min-Schritten bis max. 20–50 µg/kg/min",
      pharmakokinetik: "Wirkeintritt <5 min · HWZ ~2 min · Metabolismus MAO/COMT · renale Elimination der Metaboliten",
      nebenwirkungen: "Tachyarrhythmien (häufiger als bei Noradrenalin/Dobutamin), Übelkeit/Erbrechen, periphere Ischämie, anaphylaktoide Reaktion (Sulfit)",
      kontraindikationen: "Tachyarrhythmien, Phäochromozytom, unkorrigierte Hypovolämie, Schwangerschaft (relativ)",
      interaktionen: "Ventrikuläre Arrhythmien mit halogenierten Anästhetika, hypertensive Krise mit MAO-Hemmern",
      antidot: "Phentolamin (bei Paravasat)",
      cave: "Der vermeintlich nephroprotektive 'Niereneffekt' von Low-dose-Dopamin ist widerlegt – heute nur noch Reservemedikament",
      quelle: "Fachinfo Dopamin-ratiopharm; Gelbe Liste"
    }
  },
  {
    id: "fc-drug-dobutamin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Dobutamin",
    profile: {
      klasse: "Synthetisches Katecholamin, Inotropikum",
      mechanismus: "Überwiegender β1-Agonist (racemisches Gemisch mit gegenläufiger α1-Wirkung der Isomere, die sich weitgehend aufhebt) mit geringer β2-Wirkung → Gs-cAMP-vermittelte Steigerung von Kontraktilität und Herzfrequenz bei nur mäßiger Nachlaststeigerung",
      indikation: "Akute Herzinsuffizienz/kardiogener Schock mit niedrigem HZV, Low-Output-Syndrom nach Herzchirurgie, Stressechokardiographie",
      dosierung: "Start 2,5 µg/kg/min, Steigerung alle 10–15 min, üblicher Bereich 2,5–20 µg/kg/min",
      pharmakokinetik: "Wirkeintritt 1–2 min · HWZ ~2 min · Metabolismus über COMT · renale Elimination der Metaboliten",
      nebenwirkungen: "Tachykardie, ventrikuläre Extrasystolen, Angina-pectoris-Beschwerden, Blutdruckanstieg, Tremor/Angst",
      kontraindikationen: "Hypertroph-obstruktive Kardiomyopathie, schwere Tachyarrhythmie, unkorrigierte Hypovolämie, akuter Myokardinfarkt mit hoher Ischämielast",
      interaktionen: "Arrhythmiegefahr mit halogenierten Anästhetika, abgeschwächte Wirkung unter Betablockade",
      antidot: "Keines",
      cave: "Erhöht myokardialen O2-Verbrauch – bei KHK/Myokardischämie mit Vorsicht einsetzen",
      quelle: "Fachinfo Dobutamin-Carinopharm"
    }
  },
  {
    id: "fc-drug-milrinon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Milrinon",
    profile: {
      klasse: "Phosphodiesterase-3-Hemmer (Inodilatator, Bipyridin)",
      mechanismus: "Selektive Hemmung der PDE-3 in Kardiomyozyten und glatter Gefäßmuskulatur → intrazelluläres cAMP ↑ → gesteigerter Ca2+-Einstrom (positiv inotrop) und beschleunigter Ca2+-Reuptake (Lusitropie) sowie arterielle/venöse/pulmonalarterielle Vasodilatation, katecholaminunabhängig",
      indikation: "Akute dekompensierte Herzinsuffizienz/Low-Output-Syndrom (kurzzeitig), pulmonale Hypertonie, Rechtsherzversagen",
      dosierung: "Loading 25–50 µg/kg über 10 min (wegen Hypotonierisiko oft ausgelassen), Erhaltung 0,375–0,75 µg/kg/min",
      pharmakokinetik: "Wirkeintritt Minuten · HWZ ~2–3h (↑ bei Niereninsuffizienz) · überwiegend renale Elimination unverändert",
      nebenwirkungen: "Hypotonie, ventrikuläre/supraventrikuläre Arrhythmien, Kopfschmerzen, Thrombozytopenie",
      kontraindikationen: "Schwere obstruktive Aorten-/Mitralklappenstenose, schwere Hypovolämie, hochgradige Niereninsuffizienz (Dosisanpassung)",
      interaktionen: "Additive Hypotonie mit Vasodilatatoren/anderen Inotropika",
      antidot: "Keines",
      cave: "Lange HWZ und Kumulation bei Niereninsuffizienz → prolongierte Hypotonie, Dosisreduktion nötig",
      quelle: "Fachinfo Milrinon/Corotrop; Gelbe Liste"
    }
  },
  {
    id: "fc-drug-levosimendan",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Levosimendan",
    profile: {
      klasse: "Kalzium-Sensitizer (Inodilatator)",
      mechanismus: "Bindet Ca2+-abhängig an kardiales Troponin C → Konformationsstabilisierung des Aktin-Myosin-Komplexes → verstärkte Kontraktilität ohne Anstieg des intrazellulären Ca2+ und ohne erhöhten O2-Verbrauch, zusätzlich Öffnung von KATP-Kanälen in glatter Gefäßmuskulatur → koronare/systemische/pulmonale Vasodilatation",
      indikation: "Akut dekompensierte schwere Herzinsuffizienz, kardiogener Schock, Weaning von der Herz-Lungen-Maschine",
      dosierung: "Initial 6–12 µg/kg über 10 min (Bolus bei Hypotonieneigung oft ausgelassen), Erhaltung 0,05–0,2 µg/kg/min über 24h",
      pharmakokinetik: "Wirkeintritt Minuten · aktiver Metabolit OR-1896 mit HWZ ~80h (hämodynamische Wirkung bis 7–9 Tage) · hepatische Metabolisierung",
      nebenwirkungen: "Hypotonie, Kopfschmerz, Vorhofflimmern, Hypokaliämie, ventrikuläre Tachykardie",
      kontraindikationen: "Schwere Hypotonie/Tachykardie, hochgradige mechanische Obstruktion der Ventrikelfüllung/-auswurf, schwere Nieren-/Leberinsuffizienz, Torsade de pointes in der Anamnese",
      interaktionen: "Verstärkte Hypotonie mit Vasodilatatoren/anderen Inotropika",
      antidot: "Keines",
      cave: "Lang anhaltender aktiver Metabolit – hämodynamische Wirkung bis über eine Woche nach Infusionsende",
      quelle: "Fachinfo Simdax"
    }
  },
  {
    id: "fc-drug-phenylephrin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Phenylephrin",
    profile: {
      klasse: "Direktes Sympathomimetikum, reiner α1-Agonist",
      mechanismus: "Selektiver α1-Adrenozeptor-Agonist ohne relevante β-Wirkung → Gq-vermittelte Vasokonstriktion arteriell und venös → Anstieg des systemischen Gefäßwiderstands und Preload mit reflektorischer Bradykardie (Barorezeptorreflex)",
      indikation: "Intraoperative/spinalanästhesiebedingte Hypotonie (v.a. Sectio caesarea), nasale Dekongestion",
      dosierung: "Bolus 50–100 µg i.v. (max. 100 µg/Bolus), wiederholbar; Perfusor 0,1–0,5 µg/kg/min",
      pharmakokinetik: "Wirkeintritt sofort · Wirkdauer 15–20 min · hepatischer Abbau über MAO",
      nebenwirkungen: "Reflexbradykardie, Hypertonie, verminderte HZV bei Bolusgabe, periphere Ischämie",
      kontraindikationen: "Schwere Hypertonie, periphere Gefäßerkrankung (Ischämie-/Gangrängefahr), schwere Hyperthyreose, nichtselektive MAO-Hemmer-Therapie",
      interaktionen: "Hypertensive Krise mit MAO-Hemmern/indirekten Sympathomimetika",
      antidot: "Keines",
      cave: "Bei Sectio caesarea gegenüber Ephedrin bevorzugt (weniger fetale Azidose), kann durch Bradykardie das HZV senken",
      quelle: "Fachinfo Biorphen"
    }
  },
  {
    id: "fc-drug-ephedrin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Ephedrin",
    profile: {
      klasse: "Indirektes/gemischtes Sympathomimetikum",
      mechanismus: "Fördert die präsynaptische Noradrenalin-Freisetzung (indirekt) und wirkt zusätzlich direkt agonistisch an α- und β-Adrenozeptoren → Vasokonstriktion plus positiv chronotrope/inotrope Wirkung, unterliegt Tachyphylaxie durch Entleerung der Noradrenalinspeicher",
      indikation: "Hypotonie unter Spinal-/Periduralanästhesie oder Allgemeinanästhesie",
      dosierung: "5 mg (max. 10 mg) langsam i.v., wiederholbar alle 3–4 min",
      pharmakokinetik: "Wirkeintritt 1–2 min · Wirkdauer 10–60 min · überwiegend renale Elimination unverändert",
      nebenwirkungen: "Tachykardie, Hypertonie, Nervosität/Tremor, Tachyphylaxie bei wiederholter Gabe",
      kontraindikationen: "Kombination mit anderen indirekten Sympathomimetika, MAO-Hemmer-Therapie (aktuell/<2 Wochen), Phäochromozytom, Engwinkelglaukom",
      interaktionen: "Hypertensive Krise mit MAO-Hemmern, additive Wirkung mit anderen Sympathomimetika",
      antidot: "Keines",
      cave: "Tachyphylaxie bei wiederholten Boli durch Entleerung der Katecholaminspeicher – plazentagängig mit möglicher fetaler Tachykardie",
      quelle: "Fachinfo Ephedrin Sintetica"
    }
  },
  {
    id: "fc-drug-metaraminol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Metaraminol",
    profile: {
      klasse: "Direktes/indirektes Sympathomimetikum (überwiegend α1)",
      mechanismus: "Überwiegend direkter α1-Agonist mit zusätzlicher indirekter Noradrenalin-Freisetzung → potente Vasokonstriktion, geringe positiv inotrope Wirkung, reflektorische Bradykardie",
      indikation: "Hypotonie unter Anästhesie (insb. Spinalanästhesie), akute Hypotonie/Schock als Überbrückung",
      dosierung: "Bolus 0,5–1 mg i.v. (wiederholbar); Infusion 0,5–10 mg/h nach Wirkung titriert",
      pharmakokinetik: "Wirkeintritt 1–2 min · Wirkdauer 20–60 min · hepatischer Abbau",
      nebenwirkungen: "Reflexbradykardie, Hypertonie, ventrikuläre Arrhythmien, periphere Ischämie, Sulfit-Überempfindlichkeit",
      kontraindikationen: "Schwere organische Herz-/Gefäßerkrankungen, Rhythmusstörungen, MAO-Hemmer, kardiogener Schock mit dekompensierter Mitralinsuffizienz",
      interaktionen: "Hypertensive Krise mit MAO-Hemmern, verstärkte Wirkung mit anderen Vasopressoren",
      antidot: "Keines",
      cave: "Deutlich längere Wirkdauer als Phenylephrin – Kumulationsgefahr bei wiederholter Bolusgabe",
      quelle: "SmPC/Fachinfo Metaraminol (EMC)"
    }
  },
  {
    id: "fc-drug-amiodaron",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Amiodaron",
    profile: {
      klasse: "Klasse-III-Antiarrhythmikum (Kalium-Kanal-Blocker, breites Wirkspektrum)",
      mechanismus: "Blockiert überwiegend kardiale K+-Kanäle (Verlängerung von Aktionspotenzial und QT-Zeit), zusätzlich Na+- und Ca2+-Kanal-Blockade sowie nichtkompetitiver α-/β-Rezeptor-Antagonismus → Verlangsamung von Sinusknotenfrequenz, AV-Überleitung und ventrikulärer Erregbarkeit",
      indikation: "Lebensbedrohliche ventrikuläre Tachyarrhythmien/Kammerflimmern (auch unter Reanimation), Vorhofflimmern (Rhythmuskontrolle), supraventrikuläre Tachykardien",
      dosierung: "Reanimation (VF/pulslose VT): 300 mg i.v. Bolus, ggf. 150 mg nach; sonst Aufsättigung 5 mg/kg über 20–120 min, Erhaltung 10–20 mg/kg/24h i.v. bzw. oral 600 mg/d für 8–10 Tage, dann 200 mg/d",
      pharmakokinetik: "Wirkeintritt variabel (i.v. Minuten–Stunden) · sehr lange HWZ 20–100 Tage (hohe Gewebeaffinität) · hepatisch über CYP3A4 zu aktivem Metaboliten Desethylamiodaron",
      nebenwirkungen: "Schilddrüsenfunktionsstörungen (Hyper-/Hypothyreose), Lungenfibrose/interstitielle Pneumonitis, Hornhautablagerungen, Photosensibilität, Leberschädigung, Bradykardie/AV-Block, QT-Verlängerung",
      kontraindikationen: "Sinusknotenerkrankung/AV-Block ohne Schrittmacher, Schilddrüsenfunktionsstörungen, Jodallergie, QT-Zeit-verlängernde Komedikation, Schwangerschaft/Stillzeit",
      interaktionen: "Starker CYP3A4/2C9/P-gp-Inhibitor → erhöhte Spiegel von Digoxin, Warfarin, Statinen; additive QT-Verlängerung mit anderen Klasse-I/III-Antiarrhythmika",
      antidot: "Keines",
      cave: "Sehr lange HWZ – Nebenwirkungen an Schilddrüse/Lunge können auch nach Absetzen neu auftreten, regelmäßiges Monitoring erforderlich",
      quelle: "Fachinfo Cordarex"
    }
  },
  {
    id: "fc-drug-adenosin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Adenosin",
    profile: {
      klasse: "Endogenes Purinnukleosid, Antiarrhythmikum",
      mechanismus: "Agonist an kardialen A1-Adenosinrezeptoren → Gi-vermittelte Öffnung von K+-Kanälen (IK,Ado) und Hemmung des Ca2+-Einstroms im AV-Knoten → transiente Hyperpolarisation und Leitungsblock im AV-Knoten, wodurch Reentry-Tachykardien terminiert werden",
      indikation: "Terminierung paroxysmaler supraventrikulärer Tachykardien (AV-Knoten-Reentry), Differenzialdiagnose breiter/schmaler Tachykardien",
      dosierung: "6 mg schneller i.v. Bolus (periphervenös, sofort nachspülen), bei Ausbleiben nach 1–2 min 12 mg, ggf. erneut 12 mg",
      pharmakokinetik: "Wirkeintritt <10 Sek. · HWZ <10 Sek. (zelluläre Aufnahme/Desaminierung durch Adenosin-Desaminase) · extrem kurze Wirkdauer",
      nebenwirkungen: "Kurzzeitige Asystolie/AV-Block, Flush, Brustdruck, Dyspnoe, Bronchospasmus",
      kontraindikationen: "AV-Block II./III. Grades und Sick-Sinus-Syndrom ohne Schrittmacher, Asthma bronchiale/COPD, Vorhofflimmern mit Präexzitation (WPW)",
      interaktionen: "Wirkverstärkung durch Dipyridamol, Wirkabschwächung durch Theophyllin/Koffein",
      antidot: "Theophyllin (kompetitiver Antagonist)",
      cave: "Bei WPW mit Vorhofflimmern kontraindiziert – AV-Knoten-Blockade kann Leitung über akzessorische Bahn fördern und Kammerflimmern auslösen",
      quelle: "Fachinfo Adenosin Altamedics"
    }
  },
  {
    id: "fc-drug-esmolol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Esmolol",
    profile: {
      klasse: "Kardioselektiver β1-Blocker (ultrakurz wirksam)",
      mechanismus: "Selektiver kompetitiver Antagonist an kardialen β1-Adrenozeptoren → Hemmung der Gs-cAMP-vermittelten Katecholaminwirkung → Senkung von Herzfrequenz, AV-Überleitungsgeschwindigkeit und Kontraktilität",
      indikation: "Supraventrikuläre Tachykardien, perioperative Tachykardie/Hypertonie, 'Betablocker-Test' bei unklarer Tachykardie-Genese",
      dosierung: "Loading 500 µg/kg über 1 min, Erhaltung 50–200 µg/kg/min (bis max. 300 µg/kg/min)",
      pharmakokinetik: "Wirkeintritt <2 min · Plasma-HWZ ~9 min (Hydrolyse durch Erythrozyten-Esterasen) · sehr gut steuerbar",
      nebenwirkungen: "Hypotonie, Bradykardie/AV-Block, Bronchokonstriktion, Injektionsstellenreaktion",
      kontraindikationen: "Höhergradige AV-Blockierungen, schwere Hypotonie, kardiogener Schock, dekompensierte Herzinsuffizienz, akuter schwerer Asthmaanfall",
      interaktionen: "Additive Bradykardie/AV-Block mit Kalziumantagonisten (Verapamil/Diltiazem) und Digoxin",
      antidot: "Glucagon (bei Betablocker-Intoxikation)",
      cave: "Extrem kurze HWZ durch Erythrozyten-Esterasen macht Esmolol zum idealen 'Betablocker-Belastungstest' bei unklarer Tachykardie",
      quelle: "Fachinfo Esmocard"
    }
  },
  {
    id: "fc-drug-metoprolol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Metoprolol",
    profile: {
      klasse: "Kardioselektiver β1-Blocker",
      mechanismus: "Selektiver kompetitiver β1-Adrenozeptor-Antagonist → verminderte Gs-cAMP-Signalübertragung am Sinusknoten/Myokard → Senkung von Herzfrequenz, Kontraktilität und AV-Überleitung, antiischämisch durch reduzierten myokardialen O2-Verbrauch",
      indikation: "Tachykarde Herzrhythmusstörungen, Hypertonie, akuter Myokardinfarkt, Frequenzkontrolle bei Vorhofflimmern",
      dosierung: "i.v. 5 mg langsam, wiederholbar im Abstand von 2 min bis max. 15 mg (3 Boli)",
      pharmakokinetik: "Wirkeintritt Minuten (i.v.) · HWZ ~3–4h · hepatischer Abbau über CYP2D6",
      nebenwirkungen: "Bradykardie, Hypotonie, Bronchospasmus, Müdigkeit, Verschlechterung einer Herzinsuffizienz bei zu schneller Aufdosierung",
      kontraindikationen: "AV-Block II./III. Grades, Sick-Sinus-Syndrom, kardiogener Schock, dekompensierte Herzinsuffizienz, schweres Asthma bronchiale",
      interaktionen: "Additive Bradykardie mit Kalziumantagonisten vom Verapamil-/Diltiazem-Typ, verstärkte Hypoglykämie-Maskierung bei Diabetikern",
      antidot: "Glucagon (bei Intoxikation)",
      cave: "I.v.-Kombination mit Verapamil ist kontraindiziert – Gefahr von Asystolie/schwerer Bradykardie",
      quelle: "Fachinfo Metoprolol (Beloc i.v.)"
    }
  },
  {
    id: "fc-drug-verapamil",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Verapamil",
    profile: {
      klasse: "Kalziumkanalblocker vom Phenylalkylamin-Typ (Klasse-IV-Antiarrhythmikum)",
      mechanismus: "Blockiert spannungsabhängige L-Typ-Ca2+-Kanäle in Sinus-/AV-Knoten und glatter Gefäßmuskulatur → Verlangsamung der AV-Überleitung und Sinusfrequenz sowie Vasodilatation, mit ausgeprägter negativer Inotropie",
      indikation: "Supraventrikuläre Tachykardien (AV-Knoten-Reentry), Frequenzkontrolle bei Vorhofflimmern/-flattern, Hypertonie, Angina pectoris",
      dosierung: "5–10 mg langsam i.v. unter EKG-Monitoring, ggf. Wiederholung nach 15–30 min",
      pharmakokinetik: "Wirkeintritt 1–5 min i.v. · HWZ 3–7h · hepatischer First-Pass-Metabolismus über CYP3A4",
      nebenwirkungen: "Bradykardie, AV-Block, Hypotonie, Obstipation, periphere Ödeme, negative Inotropie/Herzinsuffizienz-Verschlechterung",
      kontraindikationen: "AV-Block II./III. Grades, Sick-Sinus-Syndrom, dekompensierte Herzinsuffizienz, kardiogener Schock, Vorhofflimmern bei WPW-Syndrom, gleichzeitige i.v.-Betablockade",
      interaktionen: "Kontraindizierte Kombination mit i.v. Betablockern (Asystolie-/Bradykardierisiko), erhöhte Digoxin-Spiegel, CYP3A4-Interaktionen",
      antidot: "Kalzium (Kalziumchlorid/-glukonat), Glucagon",
      cave: "Niemals gleichzeitig mit i.v. Betablocker geben – hohes Risiko für Asystolie; kontraindiziert bei Breitkomplextachykardie unklarer Genese/WPW+Vorhofflimmern",
      quelle: "Fachinfo Verapamil AbZ"
    }
  },
  {
    id: "fc-drug-digoxin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Digoxin",
    profile: {
      klasse: "Herzglykosid",
      mechanismus: "Hemmt die Na+/K+-ATPase der Kardiomyozyten → intrazellulärer Na+-Anstieg → verminderter Na+/Ca2+-Austausch → erhöhte intrazelluläre Ca2+-Konzentration → positive Inotropie; zusätzlich vagomimetische Wirkung mit Verlangsamung der AV-Überleitung",
      indikation: "Frequenzkontrolle bei Vorhofflimmern/-flattern, chronische Herzinsuffizienz mit reduzierter Ejektionsfraktion (add-on)",
      dosierung: "Aufsättigung z.B. 0,5 mg i.v., dann 0,25 mg nach 6–8h; Erhaltung 0,0625–0,25 mg/d, Ziel-Serumspiegel 0,8–2,0 ng/ml, Dosisreduktion bei Niereninsuffizienz",
      pharmakokinetik: "Wirkeintritt 5–30 min i.v. · HWZ ~36–48h · überwiegend renale Elimination unverändert · enge therapeutische Breite",
      nebenwirkungen: "Digitalisintoxikation (gastrointestinale Beschwerden, Sehstörungen/Xanthopsie, jegliche Arrhythmieform inkl. bidirektionale VT), Hyperkaliämie bei akuter Intoxikation",
      kontraindikationen: "Verdacht auf Digitalisintoxikation, Kammertachykardie/-flimmern, AV-Block II./III. Grades ohne Schrittmacher, WPW-Syndrom mit Vorhofflimmern, hypertrophe obstruktive Kardiomyopathie",
      interaktionen: "Spiegelanstieg durch Amiodaron, Verapamil, Chinidin; Toxizität verstärkt durch Hypokaliämie/Hyperkalzämie",
      antidot: "Digoxin-spezifische Antikörper-Fab-Fragmente (Digitalis-Antitoxin)",
      cave: "Enge therapeutische Breite – Hypokaliämie sensibilisiert das Myokard trotz 'therapeutischem' Spiegel für toxische Effekte",
      quelle: "Fachinfo Digoxin; ekgecho.de Digoxin-Übersicht"
    }
  },
  {
    id: "fc-drug-nitroglycerin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Nitroglycerin",
    profile: {
      klasse: "Organisches Nitrat, NO-Donor (Vasodilatator)",
      mechanismus: "Wird enzymatisch zu NO metabolisiert → Aktivierung der löslichen Guanylatzyklase → cGMP-Anstieg → Dephosphorylierung der Myosin-Leichtketten → Relaxation glatter Gefäßmuskulatur, überwiegend venös (Preload-Senkung), in höherer Dosis auch arteriell/koronar",
      indikation: "Akutes Koronarsyndrom/Angina pectoris, akute Herzinsuffizienz/Lungenödem, kontrollierte intraoperative Hypotonie, hypertensiver Notfall",
      dosierung: "Infusion initial 10–25 µg/min, Titration alle 3–5 min bis max. ~200 µg/min (ca. 0,5–5 µg/kg/min)",
      pharmakokinetik: "Wirkeintritt 1–2 min · sehr kurze HWZ 1–4 min · hepatische Metabolisierung (Glutathion-Nitratreduktase)",
      nebenwirkungen: "Kopfschmerzen ('Nitratkopfschmerz'), Hypotonie, Reflextachykardie, Flush, Methämoglobinämie bei Hochdosis",
      kontraindikationen: "Ausgeprägte Hypotonie/Hypovolämie, PDE-5-Hemmer-Einnahme (z.B. Sildenafil), hypertrophe obstruktive Kardiomyopathie, Rechtsherzinfarkt, erhöhter Hirndruck",
      interaktionen: "Lebensbedrohlicher Blutdruckabfall mit PDE-5-Hemmern, additive Hypotonie mit anderen Vasodilatatoren/Alkohol",
      antidot: "Keines",
      cave: "Toleranzentwicklung bei kontinuierlicher Gabe >24h – nitratfreies Intervall erwägen; strikt kontraindiziert nach PDE-5-Hemmer-Einnahme",
      quelle: "Fachinfo Nitrolingual infus/Glyceroltrinitrat-Carinopharm"
    }
  },
  {
    id: "fc-drug-natriumnitroprussid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Natriumnitroprussid",
    profile: {
      klasse: "NO-Donor, direkter Vasodilatator",
      mechanismus: "Spontaner Zerfall unter Freisetzung von NO unabhängig von enzymatischer Biotransformation → Aktivierung der Guanylatzyklase → cGMP-Anstieg → Relaxation glatter Muskulatur arteriell UND venös (ausgeglichene Vor-/Nachlastsenkung); Abbauprodukt Cyanid wird hepatisch durch Rhodanase zu Thiocyanat entgiftet",
      indikation: "Hypertensiver Notfall, kontrollierte intraoperative Hypotension, akute Herzinsuffizienz mit hoher Nachlast",
      dosierung: "Start 0,3–0,5 µg/kg/min, Titration bis max. 8–10 µg/kg/min (kurzzeitig); Tagesdosis <125 mg meist unbedenklich, hohe Dosen zeitlich limitieren",
      pharmakokinetik: "Wirkeintritt Sekunden · sehr kurze HWZ (Minuten) · rascher Zerfall zu Cyanid, hepatische Umwandlung zu Thiocyanat, renale Elimination",
      nebenwirkungen: "Hypotonie, Cyanid-/Thiocyanat-Toxizität (Laktatazidose, Verwirrtheit, Krampfanfälle), reflektorische Tachykardie, Methämoglobinämie",
      kontraindikationen: "Kompensatorische Hypertonie (z.B. AV-Fistel, Aortenisthmusstenose), schwere Leber-/Niereninsuffizienz (Cyanidkumulation), Vitamin-B12-Mangel, Tabak-Amblyopie",
      interaktionen: "Additive Hypotonie mit anderen Vasodilatatoren/Antihypertensiva",
      antidot: "Natriumthiosulfat (+ ggf. 4-DMAP/Hydroxocobalamin) bei Cyanidtoxizität",
      cave: "Bei Hochdosis-/Langzeitgabe (>24–48h) Gefahr der Cyanid-/Thiocyanat-Akkumulation, besonders bei Nieren-/Leberinsuffizienz – Infusion lichtgeschützt applizieren",
      quelle: "Fachinfo Nipruss"
    }
  },
  {
    id: "fc-drug-urapidil",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Urapidil",
    profile: {
      klasse: "Antihypertensivum, peripherer α1-Blocker mit zentraler Komponente",
      mechanismus: "Peripherer selektiver α1-Adrenozeptor-Antagonist (Vasodilatation) kombiniert mit zentraler Aktivierung von 5-HT1A-Serotoninrezeptoren im Kreislaufzentrum → Dämpfung des Sympathikotonus → Blutdrucksenkung ohne wesentliche Reflextachykardie",
      indikation: "Hypertensiver Notfall/Krise, perioperative Hypertonie, kontrollierte Hypotension",
      dosierung: "Bolus 10–50 mg langsam i.v. (üblich 25 mg), wiederholbar; Erhaltungsinfusion ~9 mg/h (Bereich 4,5–15 mg/h) nach Wirkung",
      pharmakokinetik: "Wirkeintritt ~5 min · HWZ ~3–5h · hepatische Metabolisierung",
      nebenwirkungen: "Kopfschmerzen, Schwindel, Übelkeit, orthostatische Hypotonie, selten Palpitationen",
      kontraindikationen: "Aortenisthmusstenose, hämodynamisch relevanter arteriovenöser Shunt (außer Dialyseshunt), schwere Aorten-/Mitralklappenstenose, Schwangerschaft/Stillzeit",
      interaktionen: "Additive Hypotonie mit anderen Antihypertensiva/Vasodilatatoren",
      antidot: "Keines",
      cave: "Kaum Reflextachykardie im Vergleich zu reinen Vasodilatatoren – Standardmedikament beim hypertensiven Notfall in D/A/CH",
      quelle: "Fachinfo Ebrantil i.v."
    }
  },
  {
    id: "fc-drug-nicardipin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Nicardipin",
    profile: {
      klasse: "Kalziumkanalblocker vom Dihydropyridin-Typ",
      mechanismus: "Selektive Blockade spannungsabhängiger L-Typ-Ca2+-Kanäle der glatten Gefäßmuskulatur bei kaum kardialer Wirkung → arterioläre Vasodilatation und Senkung des peripheren/zerebralen Gefäßwiderstands",
      indikation: "Hypertensiver Notfall, perioperative/neurochirurgische Blutdrucksteuerung",
      dosierung: "Infusion initial 3–5 mg/h, Steigerung um 0,5–1 mg/h alle 15 min bis max. 15 mg/h, Erhaltung meist 2–4 mg/h",
      pharmakokinetik: "Wirkeintritt 5–15 min · HWZ ~8h (kürzere effektive HWZ bei Infusion) · hepatischer Abbau über CYP3A4",
      nebenwirkungen: "Reflextachykardie, Kopfschmerzen, Flush, periphere Ödeme, Hypotonie",
      kontraindikationen: "Instabile Angina pectoris, akuter Myokardinfarkt (unmittelbar), schwere Aortenstenose",
      interaktionen: "CYP3A4-Interaktionen (z.B. Azol-Antimykotika, Cyclosporin-Spiegelanstieg), additive Hypotonie mit anderen Antihypertensiva",
      antidot: "Kalzium (Kalziumchlorid/-glukonat)",
      cave: "Gut steuerbar, aber engmaschiges Blutdruckmonitoring (mind. alle 5 min) wegen potenter arterieller Vasodilatation erforderlich",
      quelle: "Fachinfo Cardene IV/Nicardipin"
    }
  },
  {
    id: "fc-drug-clevidipin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Clevidipin",
    profile: {
      klasse: "Ultrakurz wirksamer Kalziumkanalblocker vom Dihydropyridin-Typ",
      mechanismus: "Hochselektive Blockade von L-Typ-Ca2+-Kanäle der arteriellen glatten Muskulatur ohne relevante Wirkung auf Venen/Myokard → isolierte arterielle Vasodilatation und Nachlastsenkung ohne direkte Preload- oder Myokardeffekte",
      indikation: "Hypertensiver Notfall, perioperative Blutdruckkontrolle",
      dosierung: "Start 1–2 mg/h, initial Verdopplung alle 90 Sek., dann langsamere Titration, Erhaltung meist 4–6 mg/h, max. 32 mg/h",
      pharmakokinetik: "Wirkeintritt 2–4 min · sehr kurze HWZ ~1 min (Hydrolyse durch Plasma-/Gewebeesterasen) · unabhängig von Leber-/Nierenfunktion",
      nebenwirkungen: "Reflextachykardie, Kopfschmerzen, Übelkeit, Vorhofflimmern, Hypotonie",
      kontraindikationen: "Überempfindlichkeit gegen Soja/Ei (Lipidemulsion), gestörter Fettstoffwechsel, schwere Aortenstenose, akute Pankreatitis",
      interaktionen: "Additive Hypotonie mit anderen Antihypertensiva",
      antidot: "Kalzium (Kalziumchlorid/-glukonat)",
      cave: "Lipidemulsion (wie Propofol) – Kontraindikation bei Soja-/Eiallergie und striktes Fettbudget-Monitoring bei Langzeitgabe",
      quelle: "Fachinfo Cleviprex"
    }
  },
  {
    id: "fc-drug-hydralazin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Hydralazin",
    profile: {
      klasse: "Direkter arterieller Vasodilatator (Hydrazinophthalazin)",
      mechanismus: "Direkte Relaxation der glatten Gefäßmuskulatur (arteriolär > venös) über endotheliale NO-Freisetzung und Interferenz mit dem intrazellulären Ca2+-Stoffwechsel → Abnahme des peripheren Gefäßwiderstands mit reflektorischer Tachykardie und Reninfreisetzung",
      indikation: "Hypertensive Schwangerschaftserkrankungen (Präeklampsie/Eklampsie), hypertensiver Notfall (2. Wahl), chronische Herzinsuffizienz (Kombination mit Nitrat)",
      dosierung: "i.v. Bolus 5–10 mg langsam, wiederholbar nach 20–30 min, alternativ Infusion 2–20 mg/h",
      pharmakokinetik: "Wirkeintritt 10–20 min i.v. · HWZ ~3–7h (abhängig vom Acetylierer-Status) · hepatische N-Acetylierung",
      nebenwirkungen: "Reflextachykardie, Kopfschmerzen, Flush, Übelkeit, Lupus-ähnliches Syndrom bei Langzeittherapie",
      kontraindikationen: "Systemischer Lupus erythematodes, Aortenaneurysma, koronare Herzkrankheit/Angina pectoris, rheumatische Mitralklappenerkrankung",
      interaktionen: "Additive Hypotonie mit anderen Antihypertensiva, verstärkte Tachykardie ohne begleitende Betablockade",
      antidot: "Keines",
      cave: "Wegen unvorhersehbarem Wirkeintritt/-dauer und Reflextachykardie in der Schwangerschaft heute meist Mittel der 2. Wahl (nach Labetalol/Nifedipin)",
      quelle: "Fachinfo Dihydralazin/Nepresol; Gelbe Liste"
    }
  },
  {
    id: "fc-drug-labetalol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Labetalol",
    profile: {
      klasse: "Kombinierter α1-/β-Adrenozeptor-Antagonist",
      mechanismus: "Nichtselektiver β1/β2-Antagonismus plus selektiver α1-Antagonismus (i.v. Verhältnis β:α ca. 7:1) → Senkung des peripheren Gefäßwiderstands durch α1-Blockade ohne die für reine Betablocker typische Reflextachykardie, kombiniert mit Reduktion von Herzfrequenz/Kontraktilität durch β-Blockade",
      indikation: "Hypertensive Schwangerschaftserkrankungen (Präeklampsie), hypertensiver Notfall, perioperative Hypertonie, Aortendissektion",
      dosierung: "i.v. Bolus 10–20 mg über 2 min, wiederholbar/verdoppelt alle 10 min bis max. 300 mg, alternativ Infusion 0,5–2 mg/min",
      pharmakokinetik: "Wirkeintritt ~5 min i.v. · HWZ ~4–8h · hepatischer Metabolismus (Glucuronidierung)",
      nebenwirkungen: "Orthostatische Hypotonie, Bradykardie, Kopfschmerz, Schwindel, Bronchospasmus, Leberfunktionsstörungen",
      kontraindikationen: "Asthma bronchiale/schwere obstruktive Atemwegserkrankung, AV-Block II./III. Grades, kardiogener Schock, dekompensierte Herzinsuffizienz, Phäochromozytom ohne vorherige α-Blockade",
      interaktionen: "Additive Bradykardie mit Kalziumantagonisten, Maskierung einer Hypoglykämie bei Diabetikern",
      antidot: "Glucagon",
      cave: "Mittel der Wahl bei hypertensiven Schwangerschaftserkrankungen – kombiniert Nachlastsenkung mit Frequenzkontrolle ohne Reflextachykardie",
      quelle: "SmPC/Fachinfo Labetalol"
    }
  },
  {
    id: "fc-drug-nimodipin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Nimodipin",
    profile: {
      klasse: "Kalziumkanalblocker vom Dihydropyridin-Typ, zerebroselektiv",
      mechanismus: "Lipophiles Dihydropyridin mit hoher Affinität für zerebrale L-Typ-Ca2+-Kanäle und guter Passage der Blut-Hirn-Schranke → selektive Dilatation zerebraler Arteriolen mit neuroprotektivem Effekt bei nur geringer systemischer Kreislaufwirkung in empfohlener Dosis",
      indikation: "Prophylaxe/Therapie zerebraler Vasospasmen nach aneurysmatischer Subarachnoidalblutung (SAB)",
      dosierung: "i.v. initial 1 mg/h (~15 µg/kg/h) für 2h, bei Verträglichkeit Steigerung auf 2 mg/h (~30 µg/kg/h); Beginn <4 Tage nach SAB, Fortführung bis Tag 10–14, danach oral 6×60 mg alle 4h für ~7 Tage",
      pharmakokinetik: "Wirkeintritt Minuten · HWZ ~1–2h (i.v.) · hoher First-Pass-Metabolismus über CYP3A4",
      nebenwirkungen: "Hypotonie, Kopfschmerzen, Flush, Tachykardie, Übelkeit",
      kontraindikationen: "Überempfindlichkeit gegen Dihydropyridine, schwere Leberfunktionsstörung, gleichzeitige starke CYP3A4-Inhibitoren",
      interaktionen: "Erhöhte Plasmaspiegel durch CYP3A4-Inhibitoren (z.B. Azol-Antimykotika), verstärkte Hypotonie mit anderen Antihypertensiva",
      antidot: "Kalzium (Kalziumchlorid/-glukonat)",
      cave: "Indikationsspezifisch für die SAB-Vasospasmusprophylaxe – zerebroselektiv und laut Zulassung NICHT durch andere Kalziumantagonisten (z.B. Nifedipin, Nicardipin) für diese Indikation ersetzbar",
      quelle: "Fachinfo Nimotop S/Nimodipin Ethypharm"
    }
  }
,
  {
    id: "fc-drug-furosemid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Furosemid",
    profile: {
      klasse: "Schleifendiuretikum",
      mechanismus: "Hemmung des Na+-K+-2Cl−-Cotransporters (NKCC2) in der dicken aufsteigenden Henle-Schleife → verminderte Rückresorption von Na+/K+/Cl− → osmotische Diurese und Natriurese",
      indikation: "Ödeme (kardial, hepatisch, renal), akutes Lungenödem, forcierte Diurese, arterielle Hypertonie bei Niereninsuffizienz",
      dosierung: "i.v. 20–40 mg Bolus (akutes Lungenödem), bei Bedarf Wiederholung nach 30–60 min ggf. doppelte Dosis; Erhaltung oral 40–80 mg/d; Kinder 1(-2) mg/kg/d, max. 40 mg/d",
      pharmakokinetik: "Wirkeintritt i.v. <5 min, oral ~30–60 min · Wirkdauer 2–3h (i.v.) · geringe hepatische Konjugation · überwiegend unverändert renal eliminiert",
      nebenwirkungen: "Hypotonie, Hypokaliämie/Hyponatriämie, Ototoxizität (v.a. bei schneller i.v.-Gabe hoher Dosen), Exsikkose, metabolische Alkalose",
      kontraindikationen: "Anurie, schwere Hypovolämie/Exsikkose, hepatorenales Syndrom, Stillzeit",
      interaktionen: "↑Oto-/Nephrotoxizität mit Aminoglykosiden, ↑Digoxintoxizität durch Hypokaliämie, ↓Wirkung von Antidiabetika",
      antidot: "Keines",
      cave: "Schnelle i.v.-Gabe hoher Dosen kann irreversible Ototoxizität verursachen – max. Injektionsgeschwindigkeit beachten",
      quelle: "Fachinfo Lasix/Furosemid-ratiopharm Injektionslösung"
    }
  },
  {
    id: "fc-drug-mannitol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Mannitol",
    profile: {
      klasse: "Osmodiuretikum (Zuckeralkohol)",
      mechanismus: "Pharmakologisch inertes, frei filtrierbares und kaum rückresorbierbares Molekül im Tubulus → erhöht osmotischen Druck im Tubuluslumen/Gefäßsystem → Wasserverschiebung aus Zellen (inkl. Hirnödem) ins Gefäßsystem und osmotische Diurese",
      indikation: "Erhöhter intrakranieller Druck/Hirnödem, akutes Glaukom, forcierte Diurese bei Intoxikationen",
      dosierung: "0,5–1 g/kg KG (2,5–5 ml/kg 20%ige Lösung) als Kurzinfusion über 15–20 min, intermittierend nach Bedarf, nicht kontinuierlich",
      pharmakokinetik: "Wirkeintritt 15–30 min · Wirkdauer 3–8h · kaum metabolisiert · renale Elimination ohne tubuläre Rückresorption",
      nebenwirkungen: "Hypervolämie/Lungenödem, Hypernatriämie, Rebound-Hirndruckanstieg, akutes Nierenversagen bei Hypovolämie",
      kontraindikationen: "Anurie, schwere Herzinsuffizienz/Lungenödem, intrakranielle Blutung mit gestörter Blut-Hirn-Schranke, schwere Dehydratation, Hyperosmolarität",
      interaktionen: "Verstärkt Wirkung/Nebenwirkungen anderer Diuretika, Cave Elektrolytverschiebungen bei Kombination mit Digitalis",
      antidot: "Keines",
      cave: "Rebound-Effekt bei geschädigter Blut-Hirn-Schranke – Mannitol kann ins Hirngewebe übertreten und Ödem verstärken",
      quelle: "Fachinfo Mannitol-Infusionslösung 15/20 (fachinfo.de)"
    }
  },
  {
    id: "fc-drug-hypertone-kochsalzloesung",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Hypertone Kochsalzlösung (NaCl 7,5%/3%)",
    profile: {
      klasse: "Hyperosmolare Elektrolytlösung",
      mechanismus: "Erzeugt osmotischen Gradienten zwischen intravasalem Kompartiment und Hirngewebe/Liquor → Wasserverschiebung aus Interstitium/Zellen ins Gefäßsystem → Reduktion des Hirnödems sowie rascher intravasaler Volumeneffekt im hypovolämen Schock",
      indikation: "Erhöhter intrakranieller Druck/Hirnödem (Alternative/Ergänzung zu Mannitol), schwere symptomatische Hyponatriämie, hypovolämer Schock (Small-Volume-Resuscitation)",
      dosierung: "NaCl 7,5%: Bolus 2–4 ml/kg i.v. über wenige Minuten; individuelle Dosierung nach Klinikstandard/Ziel-Natrium, kein einheitlich zugelassenes deutsches Fertigarzneimittel für diese Indikation",
      pharmakokinetik: "Wirkeintritt binnen Minuten · Wirkdauer Stunden (abhängig von renaler Ausscheidung) · keine Metabolisierung · renale Elimination von Na+/Cl−",
      nebenwirkungen: "Hypernatriämie, Volumenüberladung, zentrale pontine Myelinolyse bei zu schneller Korrektur, Phlebitis bei peripherer Gabe, hyperchlorämische Azidose",
      kontraindikationen: "Schwere Hypernatriämie, Herzinsuffizienz/Volumenüberladung, unkontrollierte Hypertonie",
      interaktionen: "Cave Kombination mit weiteren natriumhaltigen Lösungen; additive osmotische Effekte mit Mannitol",
      antidot: "Keines",
      cave: "Natriumkorrektur max. 8–10(-12) mmol/l/24h – zu schnelle Korrektur erhöht Risiko der zentralen pontinen Myelinolyse",
      quelle: "Neurointensivmedizinische Leitlinien/Literatur zu hypertoner Kochsalzlösung (kein einheitliches deutsches Fertigarzneimittel-Label)"
    }
  },
  {
    id: "fc-drug-albumin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Albumin",
    profile: {
      klasse: "Kolloidale Volumenersatzlösung (humanes Plasmaprotein)",
      mechanismus: "Hauptträger des kolloidosmotischen (onkotischen) Drucks im Plasma → bindet Wasser intravasal → Volumenexpansion; zusätzlich Transportfunktion für Bilirubin/Hormone/Pharmaka und antioxidative Pufferwirkung",
      indikation: "Volumenersatz bei Hypovolämie mit nachgewiesenem Albuminmangel, spontane bakterielle Peritonitis/hepatorenales Syndrom bei Leberzirrhose, große Parazentese, schwere Verbrennungen",
      dosierung: "5%-Lösung zur Volumensubstitution, 20% bei Hypalbuminämie/onkotischem Bedarf; Dosis individuell nach hämodynamischen Zielparametern (nicht nach Serumalbumin), üblich 0,5–1 g/kg",
      pharmakokinetik: "Wirkeintritt sofort (i.v.) · Plasma-HWZ ~19 Tage · Proteinkatabolismus statt klassischer Metabolisierung · keine renale Elimination des intakten Moleküls",
      nebenwirkungen: "Allergische/anaphylaktoide Reaktionen, Volumenüberladung/Lungenödem, Verdünnungskoagulopathie bei Massengabe",
      kontraindikationen: "Überempfindlichkeit gegen Albumin, schwere Hypervolämie/Herzinsuffizienz",
      interaktionen: "Keine spezifisch relevanten Interaktionen bekannt",
      antidot: "Keines",
      cave: "Kein Überlebensvorteil ggü. Kristalloiden in der breiten Volumentherapie (SAFE-Studie) – gezielter Einsatz nach Indikation, nicht als Standard-Volumenersatz",
      quelle: "Fachinfo Humanalbin/Human-Albumin 20% Behring; Querschnitts-Leitlinien BÄK"
    }
  },
  {
    id: "fc-drug-ondansetron",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Ondansetron",
    profile: {
      klasse: "Antiemetikum, 5-HT3-Rezeptorantagonist (Setron)",
      mechanismus: "Selektive Blockade von 5-HT3-Rezeptoren peripher (vagale Afferenzen im GI-Trakt) und zentral in der Area postrema/Chemorezeptor-Triggerzone → Hemmung der serotoninvermittelten Emesis",
      indikation: "Prophylaxe/Therapie PONV, Chemotherapie-/Strahlentherapie-induzierte Emesis",
      dosierung: "PONV-Prophylaxe 4 mg i.v. (Erwachsene); max. Einzeldosis i.v. 8 mg wegen QTc-Risiko; Kinder 0,1–0,15 mg/kg",
      pharmakokinetik: "Wirkeintritt wenige Minuten (i.v.) · HWZ ~3–5h · hepatischer Metabolismus (CYP3A4, 2D6, 1A2) · renale/biliäre Elimination der Metaboliten",
      nebenwirkungen: "Kopfschmerzen, Obstipation, dosisabhängige QTc-Verlängerung, Transaminasenanstieg",
      kontraindikationen: "Kongenitales Long-QT-Syndrom, gleichzeitige Gabe von Apomorphin",
      interaktionen: "QTc-verlängernde Substanzen erhöhen Torsade-de-pointes-Risiko, CYP3A4-Induktoren senken Plasmaspiegel",
      antidot: "Keines",
      cave: "Dosisabhängige QTc-Verlängerung – i.v.-Einzeldosis auf 8 mg begrenzt, Vorsicht bei Elektrolytstörungen/vorbestehender QT-Verlängerung",
      quelle: "Fachinfo Ondansetron-ratiopharm/Accord Injektionslösung"
    }
  },
  {
    id: "fc-drug-dexamethason",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Dexamethason",
    profile: {
      klasse: "Glukokortikoid (lang wirksam, hochpotent, keine Mineralokortikoidaktivität)",
      mechanismus: "Bindung an zytosolische Glukokortikoidrezeptoren → nukleäre Translokation und Genregulation mit Hemmung proinflammatorischer Zytokine/Prostaglandine; antiemetischer Effekt über Hemmung der Prostaglandinsynthese in der Area postrema",
      indikation: "PONV-Prophylaxe, Antiemese bei Chemotherapie, tumorassoziiertes Hirnödem, entzündliche/allergische Zustände, Atemwegsödem",
      dosierung: "PONV-Prophylaxe 4–8 mg i.v. single shot nach Anästhesieeinleitung; höhere Dosen (8–10 mg) bei Hirnödem/onkologischer Antiemese",
      pharmakokinetik: "Wirkeintritt (genomisch) über Stunden · biologische HWZ 36–54h (long-acting) · hepatischer Metabolismus · renale Elimination der Metaboliten",
      nebenwirkungen: "Transiente Hyperglykämie, perianaler/perinealer Pruritus bei schneller i.v.-Gabe, Immunsuppression bei wiederholter Gabe",
      kontraindikationen: "Systemische Pilzinfektionen, Überempfindlichkeit; relative Vorsicht bei unkontrolliertem Diabetes",
      interaktionen: "Enzyminduktion vieler CYP3A4-Substrate, additive Hyperglykämie mit anderen Steroiden",
      antidot: "Keines",
      cave: "Einmaldosis zur PONV-Prophylaxe gilt als sicher, ohne relevante Beeinträchtigung von Wundheilung/Infektionsrate",
      quelle: "Fachinfo Dexamethason; Thieme AINS PONV-Prophylaxe"
    }
  },
  {
    id: "fc-drug-droperidol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Droperidol",
    profile: {
      klasse: "Antiemetikum, Butyrophenon-Neuroleptikum (D2-Antagonist)",
      mechanismus: "Antagonismus an D2-Dopaminrezeptoren in der Area postrema (Chemorezeptor-Triggerzone) → antiemetischer Effekt; zusätzlich α1-antagonistische und sedierende Wirkung",
      indikation: "PONV-Prophylaxe/-Therapie, Sedierung/Neuroleptanalgesie (in Kombination)",
      dosierung: "PONV 0,625–1,25 mg i.v.; 12-Kanal-EKG vor Gabe empfohlen",
      pharmakokinetik: "Wirkeintritt 3–10 min · antiemetische Wirkdauer 2–4h · hepatischer Metabolismus · renale/biliäre Elimination",
      nebenwirkungen: "Dosisabhängige QTc-Verlängerung/Torsade de pointes, extrapyramidale Symptome (Akathisie), Sedierung, Hypotonie",
      kontraindikationen: "QTc >440ms (Männer)/>450ms (Frauen), bekanntes Long-QT-Syndrom, Hypokaliämie/-magnesiämie",
      interaktionen: "QTc-verlängernde Substanzen streng meiden, additive ZNS-Dämpfung mit Opioiden/Sedativa",
      antidot: "Keines",
      cave: "Black-Box-Warning (FDA) wegen QTc-Verlängerung/Torsade de pointes – vor Gabe 12-Kanal-EKG, danach EKG-Monitoring über mehrere Stunden",
      quelle: "FDA Black Box Warning Droperidol; Fachliteratur/PubMed"
    }
  },
  {
    id: "fc-drug-metoclopramid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Metoclopramid",
    profile: {
      klasse: "Antiemetikum/Prokinetikum, Dopamin-D2-Antagonist",
      mechanismus: "Zentraler D2-Antagonismus in der Area postrema (antiemetisch) sowie peripherer D2-Antagonismus mit Steigerung der gastrointestinalen Motilität/des unteren Ösophagussphinktertonus; in hoher Dosis zusätzlich 5-HT3-antagonistisch",
      indikation: "PONV/Übelkeit-Erbrechen, gastrointestinale Motilitätsstörungen, Reflux, diabetische Gastroparese",
      dosierung: "10 mg i.v./oral, bis 3x/d, max. 0,5 mg/kg/d; Anwendungsdauer max. 5 Tage",
      pharmakokinetik: "Wirkeintritt i.v. 1–3 min · HWZ ~5–6h · teilweise hepatischer Metabolismus · überwiegend renale Elimination",
      nebenwirkungen: "Extrapyramidale Symptome (v.a. junge Erwachsene/Kinder, Überdosierung), Akathisie, Sedierung, Diarrhö, Hyperprolaktinämie",
      kontraindikationen: "GI-Blutung/Perforation/mechanischer Ileus, Morbus Parkinson, Kinder <1 Jahr, Epilepsie, Stillzeit",
      interaktionen: "Verstärkte extrapyramidale Effekte mit Neuroleptika, antagonisiert Levodopa/Dopaminagonisten",
      antidot: "Biperiden (bei extrapyramidaler Symptomatik)",
      cave: "Anwendungsdauer auf max. 5 Tage begrenzt (EMA-Einschränkung 2013) wegen Risikos extrapyramidaler/neurologischer Nebenwirkungen",
      quelle: "Fachinfo MCP-ratiopharm Injektionslösung; BfArM/EMA-Empfehlung"
    }
  },
  {
    id: "fc-drug-dimenhydrinat",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Dimenhydrinat",
    profile: {
      klasse: "Antiemetikum, H1-Antihistaminikum (Diphenhydramin-Theoclat-Salz)",
      mechanismus: "Kompetitiver Antagonismus an zentralen/peripheren H1-Rezeptoren im vestibulären Kern und Brechzentrum sowie zusätzliche anticholinerge Wirkung → Unterdrückung vestibulär und zentral getriggerter Übelkeit/Erbrechen",
      indikation: "Übelkeit/Erbrechen (u.a. Reisekrankheit, PONV), Schwindel/Kinetosen",
      dosierung: "Erwachsene 62–100 mg i.v. langsam bzw. 50–100 mg oral 1–4x/d, max. 400 mg/d; Kinder max. 5 mg/kg/24h",
      pharmakokinetik: "Wirkeintritt 15–30 min (oral), rascher i.v. · Wirkdauer 3–6h · hepatischer Metabolismus · renale Elimination",
      nebenwirkungen: "Sedierung, Mundtrockenheit, Tachykardie, Miktionsstörungen, anticholinerges Syndrom bei Überdosierung",
      kontraindikationen: "Engwinkelglaukom, Phäochromozytom, akuter Asthmaanfall, Prostatahyperplasie mit Restharnbildung, Epilepsie/Eklampsie, Kinder <3 Jahre",
      interaktionen: "Verstärkte anticholinerge/sedierende Effekte mit Atropin, Biperiden, trizyklischen Antidepressiva, Alkohol",
      antidot: "Physostigmin (bei zentralem anticholinergem Syndrom)",
      cave: "Ausgeprägte Sedierung und anticholinerge Wirkung – Vorsicht bei älteren Patienten (Delir-/Sturzrisiko)",
      quelle: "Fachinfo Dimenhydrinat-hameln/PANPHARMA Injektionslösung"
    }
  },
  {
    id: "fc-drug-scopolamin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Scopolamin",
    profile: {
      klasse: "Anticholinergikum (Belladonna-Alkaloid), Antiemetikum",
      mechanismus: "Kompetitiver Antagonismus an muskarinischen (M1/M3) Acetylcholinrezeptoren im vestibulären System und Brechzentrum → Unterdrückung cholinerg vermittelter Übelkeit/Kinetose; als tertiäres Amin gut ZNS-gängig",
      indikation: "Prophylaxe von Reisekrankheit/PONV, historisch präoperative Prämedikation zur Sekretionshemmung",
      dosierung: "Transdermales Pflaster 1 mg/72h (Scopoderm TTS), Applikation retroaurikulär ~4h vor erwarteter Wirkung",
      pharmakokinetik: "Wirkeintritt transdermal mehrere Stunden · Wirkdauer bis 72h · hepatischer Metabolismus · renale Elimination",
      nebenwirkungen: "Mundtrockenheit, Sedierung, Akkommodationsstörungen/Mydriasis, Miktionsstörungen, zentrales anticholinerges Syndrom (Verwirrtheit, Halluzinationen) v.a. bei älteren Patienten",
      kontraindikationen: "Engwinkelglaukom, Prostatahyperplasie mit Harnverhalt, Megakolon, Kinder",
      interaktionen: "Verstärkte anticholinerge Wirkung mit weiteren Anticholinergika/Antihistaminika/trizyklischen Antidepressiva",
      antidot: "Physostigmin",
      cave: "Zentrales anticholinerges Syndrom als Prüfungsklassiker – Physostigmin ist das spezifische Antidot",
      quelle: "Fachinfo Scopoderm TTS (Baxter)"
    }
  },
  {
    id: "fc-drug-heparin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Heparin (unfraktioniert)",
    profile: {
      klasse: "Antikoagulans, indirekter Thrombin-/Faktor-Xa-Inhibitor (Glykosaminoglykan)",
      mechanismus: "Bindung an Antithrombin III über eine Pentasaccharid-Sequenz → Konformationsänderung von AT III → massiv beschleunigte Hemmung von Thrombin (Faktor IIa) und Faktor Xa im Verhältnis ca. 1:1",
      indikation: "Therapeutische Antikoagulation (venöse Thromboembolie, Vorhofflimmern, akutes Koronarsyndrom), Antikoagulation bei extrakorporaler Zirkulation (HLM, ECMO), Thromboseprophylaxe",
      dosierung: "Vollheparinisierung Bolus 50–100 IE/kg i.v., Erhaltung 15–20 IE/kg/h (bzw. fix ~1000 IE/h), Ziel-aPTT 1,5–2,5x Ausgangswert; Prophylaxe 5000–7500 IE s.c. 2–3x/d",
      pharmakokinetik: "Wirkeintritt sofort (i.v.) · dosisabhängige HWZ ~1–2h · sättigbare Elimination über RES und renal · nicht plazentagängig",
      nebenwirkungen: "Blutungen, Heparin-induzierte Thrombozytopenie Typ II (HIT, meist Tag 5–10), Osteoporose bei Langzeitgabe, Transaminasenanstieg",
      kontraindikationen: "Akute klinisch relevante Blutung, HIT (Anamnese), schwere Thrombozytopenie, unkontrollierte Hypertonie mit Blutungsrisiko",
      interaktionen: "Verstärkte Blutungsneigung mit Thrombozytenaggregationshemmern/NSAR/anderen Antikoagulanzien",
      antidot: "Protamin",
      cave: "HIT-II als Prüfungsklassiker – Thrombozytenabfall >50% ab Tag 5–10 erfordert sofortiges Absetzen und Wechsel auf alternative Antikoagulation (z.B. Argatroban)",
      quelle: "Fachinfo Heparin-Natrium-ratiopharm"
    }
  },
  {
    id: "fc-drug-enoxaparin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Enoxaparin",
    profile: {
      klasse: "Niedermolekulares Heparin (NMH), Antikoagulans",
      mechanismus: "Bindung an Antithrombin III; aufgrund kürzerer Kettenlänge bevorzugte/selektivere Hemmung von Faktor Xa gegenüber Thrombin (Anti-Xa:Anti-IIa ca. 3–4:1) im Vergleich zu unfraktioniertem Heparin",
      indikation: "Thromboseprophylaxe (perioperativ, Immobilisation), Therapie tiefe Venenthrombose/Lungenembolie, akutes Koronarsyndrom",
      dosierung: "Prophylaxe 40 mg (4000 IE) s.c. 1x/d; Therapie 1 mg/kg s.c. 2x/d oder 1,5 mg/kg s.c. 1x/d; bei schwerer Niereninsuffizienz (CrCl 15–30 ml/min) Dosisreduktion",
      pharmakokinetik: "Wirkeintritt s.c. max. Anti-Xa-Aktivität nach ~3–5h · HWZ ~4–7h · renale Elimination (Kumulation bei Niereninsuffizienz)",
      nebenwirkungen: "Blutungen, Thrombozytopenie (HIT, seltener als bei UFH), Transaminasenanstieg, Spinal-/Epiduralhämatom bei rückenmarksnaher Punktion",
      kontraindikationen: "Akute Blutung, HIT-Anamnese, schwere Niereninsuffizienz (dosisabhängig), rückenmarksnahe Anästhesie ohne ausreichenden Zeitabstand",
      interaktionen: "Verstärkte Blutungsneigung mit anderen Antikoagulanzien/Thrombozytenaggregationshemmern, Zeitabstände zu Neuroaxialanästhesie beachten",
      antidot: "Protamin (nur partielle Neutralisierung, ca. 60% der Anti-Xa-Aktivität)",
      cave: "Anders als UFH nur partiell durch Protamin antagonisierbar – bei schwerer Niereninsuffizienz Kumulation und Anti-Xa-Monitoring erwägen",
      quelle: "Fachinfo Clexane (Sanofi)"
    }
  },
  {
    id: "fc-drug-fondaparinux",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Fondaparinux",
    profile: {
      klasse: "Synthetisches Pentasaccharid, selektiver Faktor-Xa-Inhibitor",
      mechanismus: "Bindet selektiv und reversibel an Antithrombin III → hochselektive Hemmung von Faktor Xa ohne direkte Thrombinhemmung (kein Effekt auf Faktor IIa)",
      indikation: "Thromboseprophylaxe (orthopädische/abdominalchirurgische Eingriffe), Therapie tiefe Venenthrombose/Lungenembolie, akutes Koronarsyndrom, Alternative bei HIT (off-label)",
      dosierung: "Prophylaxe 2,5 mg s.c. 1x/d; Therapie gewichtsadaptiert 5–10 mg s.c. 1x/d; bei CrCl 20–50 ml/min Dosisreduktion auf 1,5 mg/d (Prophylaxe)",
      pharmakokinetik: "Wirkeintritt s.c. max. Anti-Xa nach ~2h · HWZ 17–21h (1x/d-Gabe möglich) · keine hepatische Metabolisierung · vollständig unverändert renal eliminiert",
      nebenwirkungen: "Blutungen, Anämie, Transaminasenanstieg, sehr seltenes HIT-Risiko (meist keine Kreuzreaktion mit Heparin-PF4-Antikörpern)",
      kontraindikationen: "Schwere Niereninsuffizienz (CrCl <20 ml/min), akute bakterielle Endokarditis, klinisch relevante aktive Blutung, Körpergewicht <50 kg (Vorsicht bei therapeutischer Dosis)",
      interaktionen: "Verstärkte Blutungsneigung mit anderen Antikoagulanzien/Thrombozytenaggregationshemmern",
      antidot: "Keines etabliert (Andexanet alfa experimentell wirksam, nicht zugelassen für Fondaparinux)",
      cave: "Vollständig renal eliminiert und nicht durch Protamin antagonisierbar – strikte Kontraindikation bei CrCl <20 ml/min beachten",
      quelle: "Fachinfo Arixtra (fachinfo.de)"
    }
  },
  {
    id: "fc-drug-argatroban",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Argatroban",
    profile: {
      klasse: "Direkter Thrombininhibitor (synthetisches Argininderivat)",
      mechanismus: "Reversible, direkte Bindung an das aktive Zentrum von Thrombin (Faktor IIa), unabhängig von Antithrombin III → Hemmung von freiem und gerinnselgebundenem Thrombin",
      indikation: "Antikoagulation bei Heparin-induzierter Thrombozytopenie Typ II (HIT-II), inkl. perkutaner Koronarintervention bei HIT",
      dosierung: "Initial 2 µg/kg/min i.v. kontinuierlich (bei eingeschränkter Leberfunktion/kritisch Kranken/nach Herzchirurgie 0,5 µg/kg/min), Steuerung nach aPTT (Ziel 1,5–3x Ausgangswert, max. 100s)",
      pharmakokinetik: "Wirkeintritt sofort (i.v.) · HWZ ~45 min · hepatische Metabolisierung (CYP3A4/5) · biliäre/fäkale Elimination, nierenunabhängig",
      nebenwirkungen: "Blutungen, Hypotonie, Transaminasenanstieg",
      kontraindikationen: "Schwere Leberfunktionsstörung, akute klinisch relevante Blutung, unkontrollierte schwere Hypertonie",
      interaktionen: "Verstärkte Blutungsneigung mit anderen Antikoagulanzien/Thrombozytenaggregationshemmern; verfälscht INR-Messung (erschwert Umstellung auf Vitamin-K-Antagonisten)",
      antidot: "Keines",
      cave: "Mittel der Wahl bei HIT-II – keine Kreuzreaktivität mit Heparin-PF4-Antikörpern; hepatische statt renale Elimination erfordert Dosisanpassung bei Leberinsuffizienz",
      quelle: "Fachinfo Argatra; ÖGARI-Empfehlung HIT-II"
    }
  },
  {
    id: "fc-drug-protamin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Protamin",
    profile: {
      klasse: "Heparin-Antidot (stark basisches Protein aus Fischsperma/rekombinant)",
      mechanismus: "Stark kationisches Protamin bildet mit dem stark anionischen Heparin einen stabilen, inaktiven Ionenkomplex → Aufhebung der Bindung von Heparin an Antithrombin III und Neutralisierung der antikoagulatorischen Wirkung",
      indikation: "Antagonisierung von unfraktioniertem Heparin (vollständig) und niedermolekularem Heparin (partiell), z.B. nach Herz-Lungen-Maschine oder bei heparininduzierter Blutung",
      dosierung: "1 mg Protamin neutralisiert ca. 100 IE Heparin; bei Gabe >30–60 min nach Heparin nur reduzierte Dosis (z.B. 50%) erforderlich; langsame i.v.-Injektion/Infusion",
      pharmakokinetik: "Wirkeintritt binnen Minuten · kürzere Wirkdauer als manche Heparinpräparate (Rebound möglich) · Metabolismus/Elimination wenig charakterisiert",
      nebenwirkungen: "Hypotonie, Bradykardie, Flush, anaphylaktische/anaphylaktoide Reaktionen, pulmonale Hypertonie mit Rechtsherzversagen bei zu schneller Gabe",
      kontraindikationen: "Bekannte Überempfindlichkeit gegen Protamin/Fisch; erhöhtes Sensibilisierungsrisiko bei Fischallergie, Vasektomie, Z.n. Protamin-Insulin-Therapie",
      interaktionen: "Eigener antikoagulatorischer Effekt bei Überdosierung (Protamin-Überschuss)",
      antidot: "Keines",
      cave: "Zu schnelle i.v.-Injektion kann schwere Hypotonie/anaphylaktoide Reaktion/pulmonale Hypertonie auslösen – immer langsam injizieren",
      quelle: "Fachinfo Protamin ME 1000/5000 IE/ml"
    }
  },
  {
    id: "fc-drug-tranexamsaeure",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Tranexamsäure",
    profile: {
      klasse: "Antifibrinolytikum (synthetisches Lysin-Analogon)",
      mechanismus: "Reversible Blockade der Lysinbindungsstellen am Plasminogen → Hemmung der Bindung von Plasminogen/Plasmin an Fibrin → Hemmung der Fibrinolyse und Stabilisierung des Blutgerinnsels",
      indikation: "Schwere Blutung/Massivtransfusion (Trauma), Blutungsprophylaxe in Herz-/orthopädischer Chirurgie, Hyperfibrinolyse, Menorrhagie",
      dosierung: "1 g i.v. Kurzinfusion über 10 min (Erwachsene), ggf. gefolgt von 1 g über 8h (Trauma-Protokoll CRASH-2); Kinder 15 mg/kg; Dosisreduktion bei Niereninsuffizienz",
      pharmakokinetik: "Wirkeintritt sofort (i.v.) · HWZ ~2–3h · kaum Metabolisierung · nahezu vollständig unverändert renal eliminiert",
      nebenwirkungen: "Übelkeit/Erbrechen, dosisabhängige Krampfanfälle (v.a. bei sehr hoher Dosis/kardiochirurgischen Patienten), thromboembolische Ereignisse (kontrovers diskutiert)",
      kontraindikationen: "Aktive thromboembolische Erkrankung, Krampfanfallanamnese, Niereninsuffizienz (Dosisanpassung), subarachnoidale Blutung, intrathekale/intraventrikuläre/intrazerebrale Anwendung",
      interaktionen: "Erhöhtes Thromboserisiko in Kombination mit Faktor-IX-Komplex-Präparaten/oralen Kontrazeptiva",
      antidot: "Keines",
      cave: "Krampfanfallrisiko ist dosisabhängig – bei hoher Dosis (v.a. kardiochirurgisch) erhöhtes Risiko postoperativer Krampfanfälle, empfohlene Dosierung nicht überschreiten",
      quelle: "Fachinfo Cyklokapron; CRASH-2-Studie"
    }
  },
  {
    id: "fc-drug-desmopressin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Desmopressin",
    profile: {
      klasse: "Synthetisches Vasopressin-Analogon (selektiver V2-Rezeptor-Agonist)",
      mechanismus: "Selektive Stimulation von V2-Rezeptoren an Endothelzellen → Freisetzung von von-Willebrand-Faktor und Faktor VIII aus Weibel-Palade-Körperchen; zusätzlich renal antidiuretische Wirkung (Aquaporin-2-Einbau) ohne relevante V1-vermittelte Vasokonstriktion",
      indikation: "Leichte Hämophilie A, von-Willebrand-Syndrom Typ 1, Diabetes insipidus centralis, thrombozytäre Blutungsneigung (Urämie), Enuresis nocturna",
      dosierung: "0,3 µg/kg i.v. über 30 min (hämostatische Indikation); intranasal/oral individuell (z.B. 200–400 µg p.o. bei Diabetes insipidus)",
      pharmakokinetik: "Wirkeintritt 30–60 min (i.v.) · hämostatische Wirkdauer ~6–12h, erneuter Effekt meist erst nach 12–24h möglich (Tachyphylaxie) · renale Elimination",
      nebenwirkungen: "Hyponatriämie/Wasserretention (Risiko Hirnödem/Krampfanfall bei exzessiver Flüssigkeitszufuhr), Flush, Kopfschmerzen, Tachykardie",
      kontraindikationen: "Unbehandelte Hyponatriämie, schweres von-Willebrand-Syndrom (Typ 2B/Typ 3), Herzinsuffizienz/Flüssigkeitsüberladung, Niereninsuffizienz (CrCl <50 ml/min)",
      interaktionen: "Verstärkte Hyponatriämiegefahr mit anderen ADH-fördernden Substanzen (SSRI, Carbamazepin), NSAR verstärken antidiuretische Wirkung",
      antidot: "Keines",
      cave: "Flüssigkeitsrestriktion nach Gabe beachten – Hyponatriämie-Risiko v.a. bei Kindern und älteren Patienten mit exzessiver Trinkmenge",
      quelle: "Fachinfo Desmopressin/Minirin"
    }
  },
  {
    id: "fc-drug-vitamin-k",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Vitamin K (Phytomenadion)",
    profile: {
      klasse: "Fettlösliches Vitamin, Antagonist von Vitamin-K-Antagonisten",
      mechanismus: "Kofaktor der γ-Glutamyl-Carboxylase in der Leber → posttranslationale Carboxylierung der Gerinnungsfaktoren II, VII, IX, X (sowie Protein C/S) zur funktionsfähigen Form → Wiederherstellung der Vitamin-K-abhängigen Gerinnungsfaktorsynthese",
      indikation: "Antagonisierung von Vitamin-K-Antagonisten (Cumarinen) bei Überdosierung/Blutung, Vitamin-K-Mangel-Blutung",
      dosierung: "Erhöhter INR ohne Blutung: 0,5–1 mg i.v./oral; schwere/lebensbedrohliche Blutung: 5–10 mg langsam i.v. (max. 5 mg/min) in Kombination mit PPSB/FFP",
      pharmakokinetik: "Wirkeintritt i.v. 1–3h, oral 4–6h (voller Effekt nach ~24h) · hepatischer Metabolismus · biliäre/renale Elimination",
      nebenwirkungen: "Anaphylaktoide Reaktion bei zu schneller i.v.-Gabe, Flush, Hitzegefühl, lokale Reizung",
      kontraindikationen: "Keine absoluten bei vitaler Indikation; Vorsicht bei zu schneller i.v.-Injektion",
      interaktionen: "Antagonisiert Vitamin-K-Antagonisten (Phenprocoumon, Warfarin) vollständig – erschwert Reantikoagulation für Tage",
      antidot: "Keines",
      cave: "Wirkt erst nach Stunden (De-novo-Proteinsynthese) – bei lebensbedrohlicher Blutung zusätzlich PPSB/FFP für Soforteffekt erforderlich",
      quelle: "Fachinfo Konakion MM"
    }
  },
  {
    id: "fc-drug-ppsb",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: PPSB (Prothrombinkomplex-Konzentrat)",
    profile: {
      klasse: "Prothrombinkomplex-Konzentrat (Vitamin-K-abhängige Gerinnungsfaktoren)",
      mechanismus: "Zufuhr der Vitamin-K-abhängigen Faktoren II, VII, IX, X (sowie Protein C/S) in konzentrierter, gebrauchsfertiger Form → sofortige Normalisierung der plasmatischen Gerinnung unabhängig von hepatischer Neusynthese",
      indikation: "Akute Blutung/perioperative Prophylaxe unter Vitamin-K-Antagonisten-Therapie, Notfallreversierung erhöhter INR, angeborener Mangel an Faktor II/VII/IX/X ohne verfügbares Einzelfaktorkonzentrat",
      dosierung: "Dosierung nach Ausgangs-/Ziel-INR; Faustregel 1 IE/kg hebt Quick um ca. 1%; üblich 25–50 IE/kg (bezogen auf Faktor IX)",
      pharmakokinetik: "Wirkeintritt sofort (i.v.) · unterschiedliche HWZ der Einzelfaktoren (Faktor VII kürzeste HWZ ~4–6h) · physiologischer Abbau der Faktoren",
      nebenwirkungen: "Thromboembolische Ereignisse (Myokardinfarkt, Verbrauchskoagulopathie, Lungenembolie) v.a. bei hoher Dosis, allergische Reaktionen, Volumenüberladung",
      kontraindikationen: "Bekannte HIT (bei heparinhaltigen Präparaten), dekompensierte disseminierte intravasale Gerinnung, Überempfindlichkeit",
      interaktionen: "Kombination mit Tranexamsäure erhöht Thromboserisiko zusätzlich",
      antidot: "Keines",
      cave: "Nur Sofortkorrektur – bei fortbestehender VKA-Wirkung zusätzlich Vitamin K geben, da Wirkdauer der Faktoren (v.a. Faktor VII) begrenzt ist",
      quelle: "Fachinfo Beriplex P/N"
    }
  },
  {
    id: "fc-drug-fibrinogenkonzentrat",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Fibrinogenkonzentrat",
    profile: {
      klasse: "Gerinnungsfaktorkonzentrat (Faktor I)",
      mechanismus: "Substitution von Fibrinogen als Substrat der finalen Gerinnungskaskade → Thrombin spaltet Fibrinogen zu Fibrinmonomeren, die zum stabilen Fibrinnetz polymerisieren → Verbesserung von Gerinnselbildung und -festigkeit",
      indikation: "Akute Blutung bei erworbener Hypofibrinogenämie (Massivtransfusion, Verdünnungskoagulopathie, Hyperfibrinolyse), angeborener Fibrinogenmangel",
      dosierung: "Dosierung nach Fibrinogenspiegel/viskoelastischer Testung (ROTEM/TEG); üblich ca. 25–70 mg/kg bzw. nach Formel (Ziel-Fibrinogen − Ist-Fibrinogen) × Plasmavolumen",
      pharmakokinetik: "Wirkeintritt sofort (i.v.) · HWZ ~3–4 Tage · physiologischer Abbau durch Gerinnungs-/Fibrinolysesystem",
      nebenwirkungen: "Thromboembolische Ereignisse, allergische Reaktionen, Fieber",
      kontraindikationen: "Überempfindlichkeit; Vorsicht bei bekannter Thromboseneigung",
      interaktionen: "Keine spezifisch relevanten Interaktionen bekannt",
      antidot: "Keines",
      cave: "Substitution möglichst zielgerichtet nach viskoelastischer Gerinnungstestung (ROTEM/TEG) statt pauschal, um Über-/Untersubstitution zu vermeiden",
      quelle: "Fachinfo Haemocomplettan P"
    }
  },
  {
    id: "fc-drug-idarucizumab",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Idarucizumab",
    profile: {
      klasse: "Monoklonales Antikörperfragment (Fab), spezifisches Dabigatran-Antidot",
      mechanismus: "Humanisiertes Antikörperfragment mit ca. 350-fach höherer Affinität zu Dabigatran als Dabigatran zu Thrombin → sofortige, spezifische Bindung und Neutralisierung von freiem und thrombingebundenem Dabigatran",
      indikation: "Notfallreversierung der Dabigatran-Wirkung bei lebensbedrohlicher/unkontrollierbarer Blutung oder dringlicher Operation/Intervention",
      dosierung: "5 g i.v. (2x 2,5 g in getrennten Infusionen/Boli innerhalb von max. 15 min)",
      pharmakokinetik: "Wirkeintritt binnen Minuten (sofortige, vollständige Aufhebung der gerinnungshemmenden Wirkung) · initiale HWZ ~45 min · renale Elimination",
      nebenwirkungen: "Hypokaliämie, Kopfschmerzen, Übelkeit, thromboembolische Ereignisse nach Reversierung (Grunderkrankung beachten)",
      kontraindikationen: "Keine absoluten bekannt",
      interaktionen: "Keine relevanten pharmakokinetischen Interaktionen (hohe Spezifität für Dabigatran)",
      antidot: "Entfällt (ist selbst Antidot)",
      cave: "Nach Reversierung besteht wieder das ursprüngliche Thromboserisiko – Wiederaufnahme der Antikoagulation sobald klinisch vertretbar erwägen",
      quelle: "Fachinfo Praxbind; RE-VERSE AD-Studie"
    }
  },
  {
    id: "fc-drug-andexanet-alfa",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Andexanet alfa",
    profile: {
      klasse: "Rekombinantes modifiziertes Faktor-Xa-Molekül, spezifisches Antidot für Faktor-Xa-Inhibitoren",
      mechanismus: "Katalytisch inaktive Faktor-Xa-Variante (Serin im aktiven Zentrum durch Alanin ersetzt) fungiert als Decoy und bindet direkte/indirekte Faktor-Xa-Inhibitoren mit hoher Affinität → Freisetzung von endogenem Faktor Xa und Wiederherstellung der Gerinnung",
      indikation: "Notfallreversierung von Apixaban/Rivaroxaban bei lebensbedrohlicher/unkontrollierbarer Blutung",
      dosierung: "Niedrigdosis-Regime: Bolus 400 mg (~30 mg/min) + Infusion 4 mg/min über 120 min; Hochdosis-Regime: Bolus 800 mg + Infusion 8 mg/min über 120 min, abhängig von Substanz/Dosis/Zeit seit letzter Einnahme",
      pharmakokinetik: "Wirkeintritt binnen Minuten · kurze HWZ (~1h), Anti-Xa-Aktivität kann nach Infusionsende wieder ansteigen (Rebound) · renale/proteolytische Elimination",
      nebenwirkungen: "Erhöhtes Risiko thromboembolischer Ereignisse, Infusionsreaktionen, Fieber",
      kontraindikationen: "Keine absoluten bekannt (Nutzen-Risiko-Abwägung bei hohem Thromboserisiko)",
      interaktionen: "Reduziert Wirksamkeit einer nachfolgenden Heparingabe (Interferenz mit Anti-Xa-Assays)",
      antidot: "Entfällt (ist selbst Antidot)",
      cave: "Rebound-Anstieg der Anti-Xa-Aktivität nach Infusionsende möglich – erneutes Blutungs-/Thromboserisiko nach Therapieende beachten",
      quelle: "Fachinfo Ondexxya (EMA)"
    }
  },
  {
    id: "fc-drug-hydrocortison",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Hydrocortison",
    profile: {
      klasse: "Glukokortikoid (kurz wirksam, physiologisches Nebennierenrindenhormon = Cortisol)",
      mechanismus: "Bindung an zytosolische Glukokortikoidrezeptoren → Genregulation antiinflammatorischer/immunmodulatorischer Proteine; zusätzlich relevante mineralokortikoide Restaktivität (Bindung an Mineralokortikoidrezeptor) mit Na+-Retention/K+-Ausscheidung",
      indikation: "Nebenniereninsuffizienz (Substitution/Stressdosis), Addison-Krise, anaphylaktischer Schock (Zusatztherapie), Status asthmaticus, septischer Schock (vasopressor-refraktär)",
      dosierung: "Substitution 15–25 mg/d oral in 2–3 Dosen; Stressdosis/Notfall 100 mg i.v. Bolus, danach bis 200 mg/24h kontinuierlich oder in Einzeldosen; Addison-Krise initial 100 mg i.v.",
      pharmakokinetik: "Wirkeintritt binnen Minuten (i.v.) · biologische HWZ 8–12h (kurz wirksam) · hepatischer Metabolismus (CYP3A4) · renale Elimination",
      nebenwirkungen: "Hyperglykämie, Natrium-/Flüssigkeitsretention (Ödeme, Hypertonie), Immunsuppression, gastrointestinale Ulzera bei Langzeitgabe",
      kontraindikationen: "Systemische Pilzinfektionen (relative KI bei vitaler Indikation), Überempfindlichkeit",
      interaktionen: "Enzyminduktoren (Rifampicin, Phenytoin) senken Wirkspiegel, verstärkte Hypokaliämie mit Diuretika",
      antidot: "Keines",
      cave: "Standardsubstanz für Stressdosis bei Nebenniereninsuffizienz – einzige gängige Steroidsubstanz mit relevanter Mineralokortikoidwirkung, daher Mittel der Wahl bei Addison-Krise",
      quelle: "Fachinfo Hydrocortison Pfizer; endokrinologische Konsensusempfehlungen Addison-Krise"
    }
  },
  {
    id: "fc-drug-methylprednisolon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Methylprednisolon",
    profile: {
      klasse: "Glukokortikoid (mittellang wirksam, halbsynthetisch)",
      mechanismus: "Bindung an zytosolische Glukokortikoidrezeptoren → Genregulation mit Hemmung proinflammatorischer Zytokine, Phospholipase A2 und Zelladhäsionsmoleküle → antiinflammatorische/immunsuppressive Wirkung, deutlich geringere mineralokortikoide Restaktivität als Hydrocortison",
      indikation: "Anaphylaxie/Schock, akuter Schub Multiple Sklerose (Pulstherapie), schweres Asthma bronchiale/COPD-Exazerbation, entzündliche/allergische Zustände",
      dosierung: "Notfall/Anaphylaxie 40–250 mg i.v.; MS-Schub 500–1000 mg/d i.v. über 3–5 Tage; Asthma/COPD 40–125 mg i.v.; Kinder lebensbedrohlich 4–20 mg/kg",
      pharmakokinetik: "Wirkeintritt binnen Minuten (i.v.) · biologische HWZ 12–36h (mittellang) · hepatischer Metabolismus · renale Elimination der Metaboliten",
      nebenwirkungen: "Hyperglykämie, Immunsuppression, gastrointestinale Ulzera, psychiatrische Symptome (v.a. bei Hochdosis-Pulstherapie), Myopathie bei Langzeitgabe",
      kontraindikationen: "Systemische Pilzinfektionen, Überempfindlichkeit gegen Methylprednisolon/andere Glukokortikoide (bei vitaler Indikation keine absolute KI)",
      interaktionen: "Enzyminduktoren senken Wirkspiegel, verstärkte Hypokaliämie mit Diuretika/Amphotericin B, verstärkte Myopathie mit nichtdepolarisierenden Muskelrelaxanzien",
      antidot: "Keines",
      cave: "Äquivalenzdosis beachten – 4 mg Methylprednisolon ≈ 5 mg Prednisolon ≈ 20 mg Hydrocortison, aber deutlich geringere mineralokortikoide Potenz als Hydrocortison",
      quelle: "Fachinfo Methylprednisolon JENAPHARM; Rote Liste"
    }
  }
,
  {
    id: "fc-drug-sevofluran",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Sevofluran",
    profile: {
      klasse: "Inhalationsanästhetikum (halogenierter Ether)",
      mechanismus: "Bindung an GABA-A- und Glycin-Rezeptoren sowie Hemmung neuronaler nikotinerger ACh- und NMDA-Rezeptoren im ZNS → verstärkte inhibitorische/verminderte exzitatorische Neurotransmission → dosisabhängige Bewusstlosigkeit und Immobilität",
      indikation: "Einleitung und Aufrechterhaltung einer Allgemeinanästhesie (Erwachsene und Kinder)",
      dosierung: "MAC ~2,0–2,1 Vol% (Erwachsene, in O2); Einleitung inspiratorisch bis 8 Vol%, Erhaltung 0,5–3 Vol% je nach Kombination mit N2O/Opioid; Kombination mit Lachgas senkt Bedarf um ~50% (Erw.)/25% (Kinder)",
      pharmakokinetik: "Wirkeintritt rasch (niedriger Blut-Gas-Koeffizient ~0,65) · kurze Aufwachzeit · minimale hepatische Metabolisierung (~5%, Fluorid-Freisetzung) · überwiegend pulmonal eliminiert",
      nebenwirkungen: "Hypotonie, Atemdepression, Übelkeit/Erbrechen, Shivering, selten Agitation beim Erwachen (v.a. Kinder)",
      kontraindikationen: "Bekannte/Verdacht auf maligne Hyperthermie-Disposition, bekannte Sevofluran-Überempfindlichkeit",
      interaktionen: "Verstärkt Wirkung nicht-depolarisierender Muskelrelaxanzien; MAC-Reduktion durch Opioide/Benzodiazepine/Lachgas",
      antidot: "Keines (Dantrolen bei MH)",
      cave: "Bei Low-Flow-Anästhesie (<2 l/min) mit trockenem CO2-Absorber Reaktion zu nephrotoxischem 'Compound A' möglich – Flow-Empfehlungen beachten",
      quelle: "Fachinfo Sevorane/Sevofluran Baxter/Piramal"
    }
  },
  {
    id: "fc-drug-desfluran",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Desfluran",
    profile: {
      klasse: "Inhalationsanästhetikum (halogenierter Ether)",
      mechanismus: "Positiv modulierende Wirkung an GABA-A-/Glycin-Rezeptoren und Hemmung nikotinerger ACh-/NMDA-Rezeptoren im ZNS → verstärkte inhibitorische Neurotransmission → dosisabhängige Bewusstlosigkeit",
      indikation: "Aufrechterhaltung der Allgemeinanästhesie bei Erwachsenen; nicht zur Maskeneinleitung bei Kindern",
      dosierung: "MAC ~6,0 Vol% (Erwachsene); Einleitung (wenn genutzt) ab 3 Vol%, Steigerung um 0,5–1,0 Vol% alle 2–3 Atemzüge; Erhaltung meist 2–6 Vol%",
      pharmakokinetik: "Sehr rascher Wirkeintritt/Erwachen (niedrigster Blut-Gas-Koeffizient ~0,42 aller volatilen Anästhetika) · minimale Metabolisierung (<0,1%) · benötigt speziellen elektrisch beheizten Verdampfer (Siedepunkt ~23°C)",
      nebenwirkungen: "Atemwegsreizung (Husten, Laryngo-/Bronchospasmus), sympathikotone Reaktion bei raschem Konzentrationsanstieg (Tachykardie, Hypertonie), Hypotonie",
      kontraindikationen: "MH-Disposition, Maskeneinleitung (Atemwegsreizung, v.a. Kinder), bekannte Überempfindlichkeit",
      interaktionen: "Verstärkt nicht-depolarisierende Muskelrelaxanzien; MAC-Reduktion durch Opioide/N2O",
      antidot: "Keines (Dantrolen bei MH)",
      cave: "Ausgeprägte Schleimhaut-/Atemwegsreizung macht Desfluran ungeeignet zur Einleitung – nur Erhaltungsnarkose, erfordert speziellen beheizten Verdampfer",
      quelle: "Fachinfo Suprane (Baxter)"
    }
  },
  {
    id: "fc-drug-isofluran",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Isofluran",
    profile: {
      klasse: "Inhalationsanästhetikum (halogenierter Ether)",
      mechanismus: "Positiv modulierende Wirkung an GABA-A-/Glycin-Rezeptoren und Hemmung nikotinerger ACh-/NMDA-Rezeptoren im ZNS → verstärkte inhibitorische Neurotransmission → dosisabhängige Bewusstlosigkeit",
      indikation: "Einleitung und Aufrechterhaltung der Allgemeinanästhesie",
      dosierung: "MAC ~1,15 Vol% (in O2), ~0,65 Vol% mit 50% N2O; Einleitung 0,5–3 Vol%, Erhaltung 1–2,5 Vol% (mit N2O) bzw. 1,5–3,5 Vol% (in O2)",
      pharmakokinetik: "Mittlerer Blut-Gas-Koeffizient ~1,4 → langsamere An-/Abflutung als Sevo-/Desfluran · minimale hepatische Metabolisierung (~0,2%) · überwiegend pulmonal eliminiert",
      nebenwirkungen: "Atemwegsreizung (weniger geeignet zur Maskeneinleitung), Hypotonie durch Vasodilatation, Tachykardie",
      kontraindikationen: "MH-Disposition, bekannte Überempfindlichkeit",
      interaktionen: "Verstärkt nicht-depolarisierende Muskelrelaxanzien; MAC-Reduktion durch Opioide/N2O/Benzodiazepine",
      antidot: "Keines (Dantrolen bei MH)",
      cave: "Langsamste Steuerbarkeit der drei modernen halogenierten Ether (hoher Blut-Gas-Koeffizient) – Prüfungsklassiker beim Vergleich der volatilen Anästhetika",
      quelle: "Fachinfo Isofluran Baxter/Piramal"
    }
  },
  {
    id: "fc-drug-lachgas",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Lachgas (N2O)",
    profile: {
      klasse: "Inhalationsanästhetikum/Analgetikum (anorganisches Gas)",
      mechanismus: "NMDA-Rezeptor-Antagonismus (analgetisch) sowie Modulation von GABA-A- und nikotinergen ACh-Rezeptoren → Analgesie und schwache hypnotische Wirkung bei sehr hohem MAC-Wert",
      indikation: "Analgesie/Sedierung (z.B. Geburtshilfe, Zahnmedizin), Kombinationsnarkose zur Dosisreduktion volatiler/i.v. Anästhetika",
      dosierung: "MAC ~105 Vol% (als Monoanästhetikum praktisch nicht erreichbar); klinisch meist 50–70% N2O im O2-Gemisch",
      pharmakokinetik: "Sehr rasche An-/Abflutung (niedrigster Blut-Gas-Koeffizient ~0,47) · keine Metabolisierung · rein pulmonale Elimination",
      nebenwirkungen: "PONV, Diffusionshypoxie bei Beendigung (daher O2-Nachbeatmung 5–10 min), Knochenmark-/Vitamin-B12-Inaktivierung bei Langzeit-/wiederholter Exposition, Expansion gasgefüllter Hohlräume",
      kontraindikationen: "Pneumothorax, Ileus/Darmverschluss, Mittelohr-/Nasennebenhöhlenaffektionen, kürzliche intraokuläre Gasfüllung (Vitrektomie), Schwangerschaft (1. Trimenon), unbehandelter Vitamin-B12-Mangel, Verdacht auf Luftembolie",
      interaktionen: "Verstärkt Wirkung anderer Anästhetika (MAC-Reduktion); Diffusion in geschlossene Lufträume",
      antidot: "Keines",
      cave: "Diffundiert ca. 34x schneller als Stickstoff in Hohlräume → Volumen-/Druckanstieg (Pneumothorax, Ileus, Tubuscuff, Mittelohr) und Diffusionshypoxie am Narkoseende – klassische Prüfungsfrage",
      quelle: "Fachinfo Lachgas (Riessner); AMBOSS Inhalationsanästhetika"
    }
  },
  {
    id: "fc-drug-salbutamol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Salbutamol",
    profile: {
      klasse: "kurzwirksames Beta-2-Sympathomimetikum (SABA)",
      mechanismus: "Agonismus an bronchialen β2-Adrenozeptoren → Gs-Protein-vermittelte Adenylatzyklase-Aktivierung → cAMP-Anstieg → Relaxation der glatten Bronchialmuskulatur",
      indikation: "Akuttherapie Bronchospasmus/Asthmaanfall, COPD-Exazerbation, Bedarfstherapie obstruktiver Atemwegserkrankungen",
      dosierung: "Inhalation 1–2 Hübe (0,1mg/Hub) bei Bedarf bis 4x/Tag; Vernebler 2,5–5mg (Erw.), ggf. wiederholt alle 20 min; Kinder max. Tagesdosis 0,6mg",
      pharmakokinetik: "Wirkeintritt inhalativ innerhalb von Minuten · Wirkdauer 4–6h · hepatische Sulfatierung · renale Elimination",
      nebenwirkungen: "Tachykardie/Palpitationen, Tremor, Hypokaliämie (v.a. bei hoher/wiederholter Dosis), Unruhe/Nervosität, Kopfschmerz",
      kontraindikationen: "Überempfindlichkeit; Vorsicht bei Tachyarrhythmien, hypertropher obstruktiver Kardiomyopathie, unkontrolliertem Hyperthyreoidismus",
      interaktionen: "Additive Hypokaliämie mit Diuretika/Theophyllin/Kortikosteroiden; Wirkabschwächung durch Betablocker",
      antidot: "Keines",
      cave: "Bei Hochdosis-/wiederholter Vernebler-Gabe engmaschige Kaliumkontrolle – additive Hypokaliämie mit Theophyllin/Kortikoiden ist Prüfungsklassiker",
      quelle: "Fachinfo Salbutamol-ratiopharm"
    }
  },
  {
    id: "fc-drug-ipratropiumbromid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Ipratropiumbromid",
    profile: {
      klasse: "kurzwirksames Anticholinergikum (SAMA)",
      mechanismus: "Kompetitive Blockade muskarinischer ACh-Rezeptoren (M1–M3) der Bronchialmuskulatur → Hemmung des vagal vermittelten Bronchospasmus und der Sekretion → Bronchodilatation",
      indikation: "Bronchospasmus bei COPD/Asthma (add-on zu β2-Mimetika), akuter schwerer Asthmaanfall",
      dosierung: "Akuttherapie Erw./Jugendl. >12J: 0,5mg (20 Hübe) als Einzeldosis inhalativ bzw. Vernebler 250–500µg; Kinder 6–12J: 0,25mg",
      pharmakokinetik: "Wirkeintritt ~15 min · Wirkmaximum 1–2h · Wirkdauer 4–6h · minimale systemische Resorption (quartäres Ammonium) · renale Elimination",
      nebenwirkungen: "Mundtrockenheit, Kopfschmerz, Hustenreiz, Harnretention, Engwinkelglaukom-Provokation bei Vernebler-Fehlanwendung (Augenkontakt)",
      kontraindikationen: "Überempfindlichkeit gegen Atropin/Atropinderivate; Vorsicht bei Engwinkelglaukom, Prostatahyperplasie/Blasenauslassobstruktion",
      interaktionen: "Additiver anticholinerger Effekt mit anderen Anticholinergika; erhöhtes Glaukomrisiko bei Vernebler-Kombination mit β2-Mimetika",
      antidot: "Physostigmin (bei zentraler anticholinerger Symptomatik, off-label)",
      cave: "Bei Vernebler-Anwendung Mundstück statt Maske nutzen – Augenkontakt kann akuten Glaukomanfall auslösen",
      quelle: "Fachinfo Atrovent LS/Fertiginhalat"
    }
  },
  {
    id: "fc-drug-theophyllin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Theophyllin",
    profile: {
      klasse: "Methylxanthin/Bronchodilatator (unselektiver Phosphodiesterase-Hemmer)",
      mechanismus: "Nichtselektive Hemmung der Phosphodiesterasen (v.a. PDE3/4) → intrazellulärer cAMP/cGMP-Anstieg sowie Adenosinrezeptor-Antagonismus → Bronchodilatation und gesteigerter Atemantrieb",
      indikation: "Add-on-Therapie bei schwerem Asthma/COPD (Reservemittel), Apnoe bei Frühgeborenen",
      dosierung: "Individuelle Dosierung spiegelgesteuert (Ziel 8–20µg/ml, wirksam ab 5–12µg/ml, toxisch >20µg/ml); i.v. Aufsättigung ca. 5mg/kg über 20–30 min, danach Erhaltungsinfusion",
      pharmakokinetik: "Enge therapeutische Breite · hepatischer Abbau über CYP1A2 (auch CYP3A4) · HWZ variabel (Raucher kürzer, Kinder/Leberinsuffizienz länger) · renale Elimination der Metabolite",
      nebenwirkungen: "Tachyarrhythmien, Krampfanfälle bei Überdosierung, Übelkeit/Erbrechen, Tremor, Kopfschmerz, Hypokaliämie",
      kontraindikationen: "Unbehandelte Tachyarrhythmien, akuter Myokardinfarkt, Überempfindlichkeit; Vorsicht bei Epilepsie/Krampfneigung",
      interaktionen: "CYP1A2-Inhibitoren (Ciprofloxacin, Makrolide) erhöhen, Induktoren (Rauchen, Phenytoin, Carbamazepin) senken den Spiegel; additive Hypokaliämie mit β2-Mimetika",
      antidot: "Keines (symptomatisch, Aktivkohle bei oraler Intoxikation)",
      cave: "Enge therapeutische Breite plus zahlreiche CYP1A2-Interaktionen erfordern obligates Drug-Monitoring – Überdosierung führt zu lebensbedrohlichen Arrhythmien",
      quelle: "Fachinfo Theophyllin-ratiopharm; Gelbe Liste"
    }
  },
  {
    id: "fc-drug-magnesiumsulfat",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Magnesiumsulfat",
    profile: {
      klasse: "Elektrolyt/Antikonvulsivum/Antiarrhythmikum",
      mechanismus: "Physiologischer Kalziumantagonist – hemmt spannungsabhängige Ca2+-Kanäle und NMDA-Rezeptoren, stabilisiert neuromuskuläre Endplatte und Kardiomyozytenmembran → tokolytisch, antikonvulsiv, antiarrhythmisch, bronchodilatatorisch",
      indikation: "Eklampsie-/Präeklampsie-Prophylaxe und -Therapie, Torsade de pointes, therapierefraktäres schweres Asthma, Hypomagnesiämie",
      dosierung: "Eklampsie: initial 4–6g i.v. über 15–20 min, dann 1–2g/h Erhaltung; Torsade de pointes: 1–2g i.v. über 5–10(-60) min; Asthma: 2g i.v. über 20 min",
      pharmakokinetik: "Wirkeintritt sofort bei i.v. Gabe · Wirkdauer 30–60 min · renale Elimination (Kumulation bei Niereninsuffizienz)",
      nebenwirkungen: "Flush, Übelkeit, Hypotonie, Bradykardie, bei Überdosierung Reflexverlust/Atemdepression/Asystolie",
      kontraindikationen: "Höhergradiger AV-Block, schwere Niereninsuffizienz (relativ), Myasthenia gravis",
      interaktionen: "Verstärkt neuromuskuläre Blockade durch Muskelrelaxanzien, additive Hypotonie/Bradykardie mit Kalziumkanalblockern",
      antidot: "Calciumgluconat/-chlorid",
      cave: "Verlust des Patellarsehnenreflexes ist klinisches Frühwarnzeichen der Magnesium-Intoxikation vor Atemdepression/Asystolie",
      quelle: "Rettungsdienst FactSheets Magnesiumsulfat; Thieme AINS Magnesium-Update 2021"
    }
  },
  {
    id: "fc-drug-levetiracetam",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Levetiracetam",
    profile: {
      klasse: "Antikonvulsivum (SV2A-Ligand)",
      mechanismus: "Bindung an das synaptische Vesikelprotein SV2A → Modulation der Neurotransmitter-Freisetzung und Hemmung hochfrequenter neuronaler Entladungen, ohne klassische GABA-/Na-Kanal-Wirkung",
      indikation: "Fokale und generalisierte Epilepsie (Mono-/Zusatztherapie), Status epilepticus (2. Wahl nach Benzodiazepin)",
      dosierung: "Status epilepticus i.v.: 30–60mg/kg (max. 4500mg) über mind. 5–15 min (max. 500mg/min); Erhaltungstherapie 1000–3000mg/Tag in 2 ED",
      pharmakokinetik: "Wirkeintritt rasch bei i.v. Gabe · HWZ ~6–8h · minimale hepatische Metabolisierung, überwiegend unverändert renal eliminiert (Dosisanpassung bei Niereninsuffizienz)",
      nebenwirkungen: "Somnolenz, Schwindel, Verhaltensauffälligkeiten (Reizbarkeit, Aggressivität), Kopfschmerz",
      kontraindikationen: "Überempfindlichkeit; Dosisanpassung bei Niereninsuffizienz erforderlich",
      interaktionen: "Kaum relevante CYP-Interaktionen (Vorteil gegenüber Phenytoin/Valproat) – daher bevorzugt bei Polypharmazie/ICU",
      antidot: "Keines",
      cave: "Praktisch keine relevanten Arzneimittelinteraktionen und keine Sättigungskinetik – deshalb im ICU/perioperativ häufig Phenytoin vorgezogen",
      quelle: "Fachinfo Keppra (UCB); AWMF-Leitlinie Status epilepticus"
    }
  },
  {
    id: "fc-drug-phenytoin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Phenytoin",
    profile: {
      klasse: "Antikonvulsivum (Hydantoin, Klasse-Ib-Antiarrhythmikum)",
      mechanismus: "Spannungsabhängige Blockade neuronaler Na+-Kanäle im inaktivierten Zustand → Verlängerung der Refraktärzeit und Hemmung repetitiver neuronaler Entladungen",
      indikation: "Status epilepticus (nach Benzodiazepin), fokale/generalisierte tonisch-klonische Anfälle, ventrikuläre Arrhythmien (off-label)",
      dosierung: "Aufsättigung i.v. 15–20mg/kg (max. Injektionsgeschwindigkeit 25mg Phenytoin/min bzw. 0,5ml/min Phenhydan, langsamer bei älteren/kardialen Patienten); Erhaltung 100mg 3x/Tag, spiegelgesteuert",
      pharmakokinetik: "Nichtlineare Sättigungskinetik (Michaelis-Menten) → HWZ 20–60h dosisabhängig · hepatische Metabolisierung (CYP2C9/2C19) · enger therapeutischer Bereich",
      nebenwirkungen: "Kardiale Arrhythmien/Hypotonie bei zu rascher i.v.-Gabe, Gingivahyperplasie, Ataxie/Nystagmus, Hirsutismus, Purple-Glove-Syndrom bei Paravasat",
      kontraindikationen: "Sinusbradykardie, SA-Block, AV-Block II°/III°, Adams-Stokes-Syndrom, Überempfindlichkeit",
      interaktionen: "Zahlreiche CYP2C9/2C19-Interaktionen (senkt u.a. Wirkspiegel oraler Kontrazeptiva), beschleunigt Theophyllin-Abbau",
      antidot: "Keines",
      cave: "Sättigungskinetik: bereits kleine Dosisänderung kann zu unproportional starkem Spiegelanstieg führen; zu schnelle i.v.-Gabe verursacht Hypotonie/Arrhythmie/Purple-Glove-Syndrom",
      quelle: "Fachinfo Phenhydan Injektionslösung"
    }
  },
  {
    id: "fc-drug-valproat",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Valproat",
    profile: {
      klasse: "Antikonvulsivum (Fettsäurederivat)",
      mechanismus: "Blockade spannungsabhängiger Na+-Kanäle und T-Typ-Ca2+-Kanäle sowie Hemmung der GABA-Transaminase → erhöhte GABAerge Hemmung und verminderte neuronale Erregbarkeit",
      indikation: "Generalisierte und fokale Epilepsien, bipolare Störung, Migräneprophylaxe (je nach Zulassung)",
      dosierung: "Erwachsene 20–30mg/kg/Tag (initial niedriger, Aufdosierung), Zieldosis meist 1000–2000mg/Tag in 2 ED, spiegelgesteuert (50–100µg/ml)",
      pharmakokinetik: "Wirkeintritt über Tage · HWZ 9–18h · hepatische Metabolisierung (Glucuronidierung, β-Oxidation) · renale Elimination der Metabolite",
      nebenwirkungen: "Hepatotoxizität (bis Leberversagen), Thrombozytopenie/Gerinnungsstörung, Tremor, Gewichtszunahme, Hyperammonämie, Pankreatitis",
      kontraindikationen: "Frauen im gebärfähigen Alter ohne strenges Schwangerschaftsverhütungsprogramm (hohes teratogenes Risiko), akute/chronische Lebererkrankung, Harnstoffzyklusdefekte, Porphyrie",
      interaktionen: "Hemmt Abbau anderer Antikonvulsiva (z.B. Lamotrigin); Meropenem senkt Valproat-Spiegel drastisch (Kombination vermeiden)",
      antidot: "Keines (L-Carnitin bei Hyperammonämie/schwerer Intoxikation, Hämodialyse möglich)",
      cave: "Strenge Kontraindikation bei Frauen im gebärfähigen Alter wegen Teratogenität – zentraler Prüfungsklassiker; Kombination mit Meropenem senkt Valproat-Spiegel um bis zu 100%",
      quelle: "Fachinfo Valproat-ratiopharm chrono; BfArM-Mustertext Valproat"
    }
  },
  {
    id: "fc-drug-pantoprazol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Pantoprazol",
    profile: {
      klasse: "Protonenpumpenhemmer (PPI)",
      mechanismus: "Irreversible kovalente Bindung an die H+/K+-ATPase der Magenparietalzellen → Blockade der letzten Stufe der Säuresekretion",
      indikation: "Stressulkusprophylaxe (ICU), Refluxösophagitis, Ulkustherapie/-blutung, Zollinger-Ellison-Syndrom",
      dosierung: "Standard 40mg i.v./p.o. 1x/Tag; bei akuter GI-Blutung/rascher Säurekontrolle initial 2x80mg i.v.; max. 160mg/Tag zeitlich begrenzt",
      pharmakokinetik: "Wirkeintritt Stunden (maximaler Effekt nach mehreren Tagen) · HWZ ~1h, Wirkdauer >24h (irreversible Bindung) · hepatische Metabolisierung (CYP2C19/3A4) · renale Elimination",
      nebenwirkungen: "Kopfschmerz, Diarrhö, bei Langzeitgabe Hypomagnesiämie, erhöhtes Frakturrisiko, Clostridioides-difficile-Infektionsrisiko, Vitamin-B12-Mangel",
      kontraindikationen: "Überempfindlichkeit; Vorsicht bei gleichzeitiger Atazanavir-Therapie",
      interaktionen: "Kann Resorption pH-abhängiger Medikamente (Atazanavir, Ketoconazol) vermindern; CYP2C19-Inhibitoren (Fluvoxamin) erhöhen Spiegel",
      antidot: "Keines",
      cave: "Bei Langzeit-/Hochdosistherapie an Hypomagnesiämie und erhöhtes C.-difficile-Risiko denken",
      quelle: "Fachinfo Pantozol i.v. 40mg"
    }
  },
  {
    id: "fc-drug-cefazolin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Cefazolin",
    profile: {
      klasse: "Cephalosporin (1. Generation, β-Laktam-Antibiotikum)",
      mechanismus: "Bindung an Penicillin-Bindeproteine (PBP) → Hemmung der bakteriellen Zellwand-Transpeptidierung (Peptidoglykan-Quervernetzung) → bakterizide Wirkung, v.a. gegen grampositive Kokken",
      indikation: "Perioperative Antibiotikaprophylaxe (Standard bei vielen chirurgischen Eingriffen), Infektionen durch empfindliche grampositive Erreger",
      dosierung: "Perioperative Prophylaxe 1–2g i.v. 30–60 min präinzisional, Redosierung nach ~4h bei langer OP-Dauer/hohem Blutverlust; Therapie 1–2g alle 8h",
      pharmakokinetik: "Wirkeintritt sofort nach i.v. Gabe · HWZ ~1,8h · überwiegend renal eliminiert (unverändert)",
      nebenwirkungen: "Allergische Reaktionen (Exanthem bis Anaphylaxie), gastrointestinale Beschwerden, Thrombophlebitis, selten Eosinophilie",
      kontraindikationen: "Bekannte Überempfindlichkeit gegen Cephalosporine; Vorsicht bei schwerer Penicillinallergie (Kreuzreaktivität ~1–2%)",
      interaktionen: "Additive Nephrotoxizität mit Aminoglykosiden; falsch-positive Urin-Glukosetests möglich",
      antidot: "Keines",
      cave: "Standard-Prophylaxe-Antibiotikum – Timing (30–60 min vor Schnitt) und Redosierung bei langer OP-Dauer sind Prüfungsklassiker",
      quelle: "FDA/Fachinfo Cefazolin; Leitlinie perioperative Antibiotikaprophylaxe"
    }
  },
  {
    id: "fc-drug-cefuroxim",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Cefuroxim",
    profile: {
      klasse: "Cephalosporin (2. Generation, β-Laktam-Antibiotikum)",
      mechanismus: "Bindung an Penicillin-Bindeproteine → Hemmung der bakteriellen Zellwandsynthese, breiteres gramnegatives Spektrum durch höhere β-Laktamase-Stabilität als 1. Generation",
      indikation: "Perioperative Antibiotikaprophylaxe, Atemwegs-/HNO-/Harnwegsinfektionen, Haut-/Weichteilinfektionen",
      dosierung: "Perioperative Prophylaxe 1,5g i.v. 30–60 min präinzisional, ggf. Wiederholungsdosis bei langer OP; Therapie 750mg–1,5g alle 8h i.v.",
      pharmakokinetik: "Wirkeintritt sofort · HWZ ~1,2h · überwiegend renal eliminiert (unverändert)",
      nebenwirkungen: "Allergische Reaktionen, gastrointestinale Beschwerden, Thrombophlebitis, selten Krampfanfälle bei hoher Dosis/Niereninsuffizienz",
      kontraindikationen: "Überempfindlichkeit gegen Cephalosporine, nicht intraarteriell verabreichen; Vorsicht bei Penicillinallergie/Asthma in Anamnese",
      interaktionen: "Verminderte Resorption der oralen Form durch H2-Blocker/PPI; additive Nephrotoxizität mit Aminoglykosiden",
      antidot: "Keines",
      cave: "Darf nicht intraarteriell appliziert werden; Kreuzallergie mit Penicillinen beachten",
      quelle: "Fachinfo Cefuroxim; Leitfaden perioperative Antibiotikaprophylaxe"
    }
  },
  {
    id: "fc-drug-metronidazol",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Metronidazol",
    profile: {
      klasse: "Nitroimidazol-Antibiotikum/Antiprotozoikum",
      mechanismus: "Reduktion der Nitrogruppe durch bakterielle/protozoäre Ferredoxin-abhängige Elektronentransportproteine → zytotoxische Radikale, die bakterielle DNA schädigen (Strangbrüche) → bakterizide Wirkung gegen Anaerobier",
      indikation: "Infektionen durch Anaerobier (intraabdominell, gynäkologisch, ZNS-Abszesse), pseudomembranöse Kolitis, Trichomoniasis/Amöbiasis",
      dosierung: "i.v. 500mg alle 8–12h (bzw. 1–0–1 oder 1–1–1g/Tag je nach Indikation); max. 4g/Tag",
      pharmakokinetik: "Wirkeintritt rasch · HWZ ~8h · hepatische Metabolisierung · renale Elimination; Dosisreduktion bei schwerer Leberinsuffizienz",
      nebenwirkungen: "Metallischer Geschmack, Übelkeit, periphere Neuropathie/Krampfanfälle bei Langzeitgabe, Dunkelfärbung des Urins",
      kontraindikationen: "Schwere Alkoholintoleranz, 1. Trimenon Schwangerschaft (relativ), Überempfindlichkeit gegen Nitroimidazole",
      interaktionen: "Disulfiram-artige Reaktion mit Alkohol (mind. 48h Karenz), verstärkt Wirkung von Cumarinen/Warfarin, Lithium, Ciclosporin; psychotische Reaktionen mit Disulfiram",
      antidot: "Keines",
      cave: "Alkoholkarenz während und mind. 48h nach Therapie – Disulfiram-Effekt (Flush, Erbrechen, Tachykardie)",
      quelle: "Fachinfo Metronidazol-ratiopharm"
    }
  },
  {
    id: "fc-drug-vancomycin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Vancomycin",
    profile: {
      klasse: "Glykopeptid-Antibiotikum",
      mechanismus: "Bindung an D-Ala-D-Ala-Terminus der Peptidoglykan-Vorläufer → sterische Blockade der Transglykosylierung/Transpeptidierung → Hemmung der Zellwandsynthese grampositiver Bakterien",
      indikation: "Schwere Infektionen durch MRSA/multiresistente grampositive Erreger, perioperative Prophylaxe bei β-Laktam-Allergie/MRSA-Risiko, pseudomembranöse Kolitis (oral)",
      dosierung: "i.v. 15–20mg/kg alle 8–12h (Talspiegel-gesteuert, Ziel 15–20mg/l bzw. AUC-basiert 400–600mg·h/l); Infusion über mind. 60 min (max. 10mg/min)",
      pharmakokinetik: "Wirkeintritt Stunden · HWZ ~4–6h (verlängert bei Niereninsuffizienz) · praktisch keine hepatische Metabolisierung · fast vollständig renal eliminiert",
      nebenwirkungen: "Nephrotoxizität, Ototoxizität, Red-Man-Syndrom (histaminvermittelt bei rascher Infusion), Thrombophlebitis, Neutropenie bei Langzeittherapie",
      kontraindikationen: "Überempfindlichkeit; Vorsicht bei vorbestehender Niereninsuffizienz/Ototoxizitätsrisiko",
      interaktionen: "Additive Nephro-/Ototoxizität mit Aminoglykosiden/Schleifendiuretika; verstärkte neuromuskuläre Blockade mit Muskelrelaxanzien",
      antidot: "Keines",
      cave: "Red-Man-Syndrom ist keine Allergie, sondern histaminvermittelt durch zu schnelle Infusion – Therapie: Infusion stoppen/verlangsamen, nicht als Antibiotika-Allergie fehlinterpretieren",
      quelle: "Fachinfo Vancomycin; Helios Wissenshäppchen Vancomycin-Dosierung"
    }
  },
  {
    id: "fc-drug-piperacillin-tazobactam",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Piperacillin/Tazobactam",
    profile: {
      klasse: "Ureidopenicillin + β-Laktamase-Inhibitor",
      mechanismus: "Piperacillin bindet Penicillin-Bindeproteine → Hemmung der Zellwandsynthese; Tazobactam hemmt irreversibel bakterielle β-Laktamasen und schützt Piperacillin vor Abbau → erweitertes Spektrum inkl. Pseudomonas und β-Laktamase-Bildner",
      indikation: "Schwere nosokomiale/polymikrobielle Infektionen (Pneumonie, intraabdominell, Haut-/Weichteile, febrile Neutropenie), empirische ICU-Therapie",
      dosierung: "4,5g i.v. alle 8h (bei schweren Infektionen alle 6h bzw. als verlängerte Infusion); Dosisanpassung bei Niereninsuffizienz (GFR <40: 4,5g/8h, <20: 4,5g/12h)",
      pharmakokinetik: "Wirkeintritt rasch · HWZ ~1h · überwiegend renal eliminiert (unverändert)",
      nebenwirkungen: "Allergische Reaktionen, gastrointestinale Beschwerden, Elektrolytstörungen (Hypokaliämie), Thrombozytopenie, Leberenzymanstieg",
      kontraindikationen: "Überempfindlichkeit gegen Penicilline/β-Laktame",
      interaktionen: "Verstärkt Wirkung von Vitamin-K-Antagonisten; verminderte Ausscheidung von Methotrexat (Toxizitätsrisiko)",
      antidot: "Keines",
      cave: "Bei Penicillinallergie in der Anamnese strikte Abklärung des Reaktionstyps vor Gabe – hohe Kreuzreaktivität als Aminopenicillin-Derivat",
      quelle: "Fachinfo Piperacillin/Tazobactam Kalceks"
    }
  },
  {
    id: "fc-drug-meropenem",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Meropenem",
    profile: {
      klasse: "Carbapenem-Antibiotikum (β-Laktam, Breitspektrum)",
      mechanismus: "Hochaffine Bindung an Penicillin-Bindeproteine (v.a. PBP2/3) → Hemmung der bakteriellen Zellwandsynthese, sehr breites Spektrum inkl. ESBL-Bildner und Anaerobier",
      indikation: "Schwere nosokomiale Infektionen, febrile Neutropenie, Meningitis, Reserveantibiotikum bei multiresistenten Erregern",
      dosierung: "1g i.v. alle 8h (Standard), bei Meningitis/schweren Infektionen 2g alle 8h; Kurzinfusion über 15–30 min oder verlängerte Infusion über 3h",
      pharmakokinetik: "Wirkeintritt rasch · HWZ ~1h · minimale hepatische Metabolisierung · überwiegend renal eliminiert (Dosisanpassung bei Niereninsuffizienz)",
      nebenwirkungen: "Gastrointestinale Beschwerden, Kopfschmerz, selten Krampfanfälle (v.a. bei Niereninsuffizienz/ZNS-Vorschädigung/hoher Dosis), Exanthem",
      kontraindikationen: "Überempfindlichkeit gegen Carbapeneme; Vorsicht bei Penicillin-/Cephalosporinallergie (geringe Kreuzreaktivität)",
      interaktionen: "Senkt Valproat-Serumspiegel drastisch (60–100% Abfall binnen Tagen) – Kombination vermeiden, alternative Antikonvulsiva wählen",
      antidot: "Keines",
      cave: "Kombination mit Valproat ist kontraindiziert – Spiegelabfall lässt sich auch durch Dosiserhöhung nicht kompensieren und führt zu Anfallsdurchbruch",
      quelle: "Fachinfo Meropenem; PharmaWiki Meropenem"
    }
  },
  {
    id: "fc-drug-calciumchlorid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Calciumchlorid/Calciumgluconat",
    profile: {
      klasse: "Elektrolyt/Antidot (Kalziumsalz)",
      mechanismus: "Erhöhung des extrazellulären Ca2+ → Anhebung des Schwellenpotenzials der Myozytenmembran (Membranstabilisierung) sowie kompetitive Antagonisierung von Kalziumkanalblockern an spannungsabhängigen Ca2+-Kanälen",
      indikation: "Hyperkaliämie mit EKG-Veränderungen (Kardioprotektion), Kalziumkanalblocker-/Betablocker-Intoxikation, Hypokalzämie, Hypermagnesiämie",
      dosierung: "Hyperkaliämie: Calciumchlorid 10% 10ml über 5 min oder Calciumgluconat 10% 30ml über 10 min; CCB-Intoxikation: Calciumchlorid 10–20ml (1–2g) bzw. Calciumgluconat 30–60ml (3–6g) alle 10–20 min",
      pharmakokinetik: "Wirkeintritt 1–3 min · Wirkdauer ~30–60 min (ggf. Wiederholung/Perfusor nötig) · renale Elimination",
      nebenwirkungen: "Venenreizung/Nekrose bei Paravasat (v.a. Calciumchlorid – zentralvenös bevorzugt), Bradykardie/Arrhythmie bei rascher Injektion, Hyperkalzämie",
      kontraindikationen: "Digitalisintoxikation (verstärkt Digitalistoxizität), Hyperkalzämie, Kammerflimmern",
      interaktionen: "Digitalisglykoside (erhöhte Kardiotoxizität); Ausfällung mit bicarbonathaltigen Lösungen (nicht mischen)",
      antidot: "Keines (ist selbst Antidot)",
      cave: "Calciumgluconat senkt den Kaliumspiegel NICHT, sondern schützt nur das Myokard (Membranstabilisierung) – zusätzlich kaliumsenkende Maßnahmen (Insulin/Glukose) sind erforderlich",
      quelle: "Antidotarium (Kup.at) Calciumglukonat/Calciumchlorid; ToxInfo Kalziumkanalblocker-Intoxikation"
    }
  },
  {
    id: "fc-drug-natriumbicarbonat",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Natriumbicarbonat",
    profile: {
      klasse: "Elektrolyt/Puffersubstanz",
      mechanismus: "Dissoziation zu Na+ und HCO3-, das mit H+ zu H2CO3 reagiert (→ CO2 + H2O) → Anhebung des Blut-pH sowie Verschiebung von Kalium nach intrazellulär durch H+/K+-Austausch",
      indikation: "Schwere metabolische Azidose (pH <7,1–7,2), Hyperkaliämie mit Azidose, trizyklische Antidepressiva-Intoxikation (QRS-Verbreiterung), gezielte Reanimationsindikationen",
      dosierung: "Azidose: mmol = Basendefizit × kg × 0,3, initial Hälfte der Dosis; Reanimation: initial ~1mmol/kg (max. 100mmol), bei Fortbestehen alle 10 min 0,5mmol/kg; max. Infusionsgeschwindigkeit 1,5mmol/kg/h (8,4%-Lösung)",
      pharmakokinetik: "Wirkeintritt sofort i.v. · renale/respiratorische (CO2-Abatmung) Elimination",
      nebenwirkungen: "Hypernatriämie, Hypokaliämie, metabolische Alkalose, paradoxe intrazelluläre/zerebrale Azidose durch CO2-Diffusion, Volumenüberlastung",
      kontraindikationen: "Hypoventilation (CO2-Anstieg ohne Abatmung), Hypokaliämie, metabolische/respiratorische Alkalose, schwerer Chloridverlust",
      interaktionen: "Ausfällung mit calciumhaltigen Lösungen (nicht mischen); inaktiviert Katecholamine im selben Zugang",
      antidot: "Keines (ist selbst Antidot bei TCA-Intoxikation/Hyperkaliämie)",
      cave: "Kein Routineeinsatz bei Reanimation – nur gezielt bei Hyperkaliämie, schwerer Azidose oder TCA-Intoxikation, sonst droht paradoxe intrazelluläre/zerebrale Azidose",
      quelle: "Fachinfo Natriumhydrogencarbonat 8,4%; Kispi-Wiki Hyperkaliämie"
    }
  },
  {
    id: "fc-drug-glukose-40",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Glukose 40%",
    profile: {
      klasse: "Kohlenhydrat/Notfallmedikament bei Hypoglykämie",
      mechanismus: "Direkte Substitution von Glukose als zentralem Energiesubstrat → rasche Anhebung des Blutzuckerspiegels und der zerebralen Glukoseversorgung",
      indikation: "Akute schwere Hypoglykämie (Bewusstseinsstörung/Krampfanfall), Bestandteil der Hyperkaliämie-Therapie (mit Insulin)",
      dosierung: "8–16g i.v. (ca. 0,2g/kg), praktisch ca. 30–60ml Glukose 40% als Bolus, verdünnt (mind. 1:1) über großlumigen/zentralen Zugang; Erhaltungsinfusion max. 0,5g/kg/h",
      pharmakokinetik: "Wirkeintritt Sekunden bis Minuten bei i.v. Gabe · Metabolisierung über Glykolyse/Glukoneogenese-Wege",
      nebenwirkungen: "Venenreizung/Thrombophlebitis bis Gewebsnekrose bei Paravasat (hyperosmolar), Hyperglykämie bei Überdosierung, Hypokaliämie",
      kontraindikationen: "Hyperglykämie, Anurie mit Kaliumüberladung (relativ), umstritten bei intrakranieller/intraspinaler Blutung (hochkonzentrierte Lösungen)",
      interaktionen: "Verdünnungs-/Inkompatibilitätsprobleme mit vielen Medikamenten in derselben Leitung beachten",
      antidot: "Keines",
      cave: "Wegen hoher Osmolarität (~2000mosm/l) zwingend Verdünnung und sichere (großlumige/zentrale) Venenlage – Paravasat verursacht Gewebsnekrosen",
      quelle: "Fachinfo Glucosteril 40%; Rettungsdienst FactSheets Glukose"
    }
  },
  {
    id: "fc-drug-insulin-normalinsulin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Insulin (Normalinsulin/Actrapid)",
    profile: {
      klasse: "kurzwirksames Humaninsulin",
      mechanismus: "Bindung an den Insulinrezeptor (Tyrosinkinase-Rezeptor) → Translokation von GLUT4-Transportern an die Zellmembran → gesteigerte zelluläre Glukoseaufnahme sowie Na+/K+-ATPase-Aktivierung → intrazelluläre Kaliumverschiebung",
      indikation: "Diabetische Stoffwechselentgleisung (Hyperglykämie, DKA), Hyperkaliämie (Kombination mit Glukose zur intrazellulären Kaliumverschiebung), perioperatives Blutzuckermanagement",
      dosierung: "Hyperkaliämie: 10 IE Normalinsulin + 25g Glukose (z.B. 250ml G10%) i.v. über 15–30 min; DKA/Hyperglykämie individuell nach Blutzucker-Perfusor-Schema",
      pharmakokinetik: "Wirkeintritt ~15–30 min i.v. · Wirkmaximum 1–3h · Wirkdauer 5–8h · hepatische/renale Metabolisierung",
      nebenwirkungen: "Hypoglykämie (wichtigste NW, daher obligate Glukosegabe/-kontrolle), Hypokaliämie, allergische Reaktionen (selten)",
      kontraindikationen: "Bestehende Hypoglykämie; Vorsicht bei fehlender Möglichkeit der Blutzuckerüberwachung",
      interaktionen: "Wirkverstärkung durch Alkohol; Betablocker maskieren Hypoglykämiesymptome; Wirkabschwächung durch Kortikosteroide",
      antidot: "Glukose",
      cave: "Insulin-Glukose-Gabe senkt Kalium bei Hyperkaliämie nur passager (~1–1,5h) – wiederholte BZ-Kontrollen mind. bis 6h nach Gabe wegen Spät-Hypoglykämie-Risiko",
      quelle: "Fachinfo Actrapid (Novo Nordisk); AkdÄ Hyperkaliämie-Empfehlung"
    }
  },
  {
    id: "fc-drug-kaliumchlorid",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Kaliumchlorid",
    profile: {
      klasse: "Elektrolyt (Kaliumsalz)",
      mechanismus: "Substitution von Kalium als wichtigstem intrazellulärem Kation → Wiederherstellung des Ruhemembranpotenzials und normaler neuromuskulärer/kardialer Erregbarkeit",
      indikation: "Hypokaliämie, Kaliumsubstitution bei Diuretikatherapie/gastrointestinalem Verlust",
      dosierung: "Kaliumdefizit (mmol) = kg KG × 0,2 × 2 × (4,5 – Serum-K+); max. Infusionsgeschwindigkeit 20mmol K+/h peripher (~0,3mmol/kg/h), max. Tagesdosis 2–3mmol/kg; höhere Konzentrationen nur zentralvenös",
      pharmakokinetik: "Wirkeintritt abhängig von Infusionsgeschwindigkeit · renale Elimination/Regulation",
      nebenwirkungen: "Hyperkaliämie bei zu rascher/hoher Gabe, Herzrhythmusstörungen bis Asystolie, Venenreizung/Schmerz bei peripherer hochkonzentrierter Gabe",
      kontraindikationen: "Hyperkaliämie, schwere Niereninsuffizienz/Oligurie, unbehandelte Nebenniereninsuffizienz (Morbus Addison), schwere Gewebstraumata (Verbrennung, Crush-Syndrom)",
      interaktionen: "Additive Hyperkaliämie mit kaliumsparenden Diuretika, ACE-Hemmern/ARB, NSAR; verstärkte Digitalis-Wirkung bei Hypokaliämie",
      antidot: "Calciumgluconat/-chlorid (Kardioprotektion bei akuter Hyperkaliämie durch Überdosierung)",
      cave: "Konzentrierte Kaliumchlorid-Lösungen sind eine der häufigsten Ursachen tödlicher Medikationsfehler bei unverdünnter Bolusgabe – niemals als i.v.-Bolus applizieren",
      quelle: "Fachinfo Kaliumchlorid Braun/Fresenius; APS Sicherer Umgang mit konzentrierten Kaliumchloridlösungen"
    }
  },
  {
    id: "fc-drug-flumazenil",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Flumazenil",
    profile: {
      klasse: "Benzodiazepin-Antagonist (Antidot)",
      mechanismus: "Kompetitiver Antagonist an der Benzodiazepin-Bindungsstelle des GABA-A-Rezeptors → Verdrängung von Benzodiazepinen ohne eigene intrinsische GABAerge Wirkung → Aufhebung von Sedierung/Atemdepression",
      indikation: "Aufhebung einer Benzodiazepin-induzierten Sedierung (Narkoseausleitung), gesicherte Benzodiazepin-Monointoxikation",
      dosierung: "Initial 0,2mg i.v. über 15s, weitere Boli 0,1–0,2mg im Abstand von 1 min bis max. 1mg (bzw. Gesamtdosis 2mg möglich); bei Rebound ggf. Wiederholung/Perfusor",
      pharmakokinetik: "Wirkeintritt 1–2 min · Wirkmaximum 6–10 min · kurze HWZ ~50–60 min (kürzer als viele Benzodiazepine) · hepatische Metabolisierung",
      nebenwirkungen: "Übelkeit/Erbrechen, Angst/Agitation, Krampfanfälle (v.a. bei Epileptikern/Benzodiazepin-Langzeittherapie), Rebound-Sedierung/Atemdepression",
      kontraindikationen: "Mischintoxikation mit proconvulsiven Substanzen (v.a. trizyklische Antidepressiva), bekannte Epilepsie mit Benzodiazepin-Dauertherapie, erhöhter Hirndruck",
      interaktionen: "Kann bei TCA-Kointoxikation Krampfanfälle/Arrhythmien demaskieren",
      antidot: "(ist selbst Antidot)",
      cave: "Kurze HWZ im Vergleich zu vielen Benzodiazepinen → Rebound-Sedierung/Atemdepression nach Wirkende möglich, daher zwingende Nachüberwachung",
      quelle: "Fachinfo Flumazenil Hikma; ToxInfo Flumazenil"
    }
  },
  {
    id: "fc-drug-n-acetylcystein",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: N-Acetylcystein (NAC)",
    profile: {
      klasse: "Mukolytikum/Antidot (Glutathion-Vorstufe)",
      mechanismus: "Bereitstellung von Cystein zur hepatischen Glutathion-Synthese → Entgiftung des toxischen Paracetamol-Metaboliten NAPQI durch Konjugation, zusätzlich direkte antioxidative/radikalfangende Wirkung",
      indikation: "Paracetamol-Intoxikation (Antidot), adjuvant bei akutem Leberversagen anderer Genese, Mukolyse bei zähem Bronchialsekret (orale Form)",
      dosierung: "3-Stufen-i.v.-Schema: 150mg/kg in 200ml Glukose 5% über 60 min, dann 50mg/kg in 500ml über 4h, dann 100mg/kg in 1000ml über 16h (Gesamt 300mg/kg über ca. 20–21h)",
      pharmakokinetik: "Wirkeintritt rasch i.v. · HWZ ~5,6h · hepatische Metabolisierung · renale Elimination; am wirksamsten <8h nach Ingestion",
      nebenwirkungen: "Anaphylaktoide Reaktion (Flush, Urtikaria, Bronchospasmus – v.a. während der Initialdosis), Übelkeit/Erbrechen",
      kontraindikationen: "Bekannte schwere Überempfindlichkeit (relativ, da lebensrettend); Vorsicht bei Asthma bronchiale (Bronchospasmusrisiko)",
      interaktionen: "Keine klinisch relevanten Interaktionen bei Antidot-Anwendung bekannt",
      antidot: "(ist selbst Antidot)",
      cave: "Anaphylaktoide Reaktion während der Initialdosis ist häufig und meist histaminvermittelt (nicht IgE) – Infusion verlangsamen statt grundsätzlich abbrechen",
      quelle: "Antidotarium (Kup.at) N-Acetylcystein; MSD Manual Paracetamolvergiftungen"
    }
  },
  {
    id: "fc-drug-dantrolen",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Dantrolen",
    profile: {
      klasse: "Muskelrelaxans (peripher wirksam)/spezifisches MH-Antidot",
      mechanismus: "Bindung an den Ryanodinrezeptor (RyR1) des sarkoplasmatischen Retikulums der Skelettmuskulatur → Hemmung der Ca2+-Freisetzung → Unterbrechung der Exzitations-Kontraktions-Kopplung und des hypermetabolen MH-Kreislaufs",
      indikation: "Maligne Hyperthermie (einzige spezifische Therapie), schwere chronische Spastik (andere Darreichungsform)",
      dosierung: "Initial 2,5mg/kg i.v. rasch als Bolus, Wiederholung alle 5–15 min je nach klinischem Ansprechen bis Symptome sistieren; Gesamtdosis meist bis 10mg/kg (Einzelfälle höher)",
      pharmakokinetik: "Wirkeintritt Minuten · HWZ ~4–8h · hepatische Metabolisierung · renale Elimination der Metabolite",
      nebenwirkungen: "Muskelschwäche, Phlebitis (hohe Osmolarität), Hepatotoxizität bei Langzeitgabe, Übelkeit",
      kontraindikationen: "Keine absolute Kontraindikation bei vitaler MH-Indikation; Vorsicht bei bestehender Leberfunktionsstörung",
      interaktionen: "Verstärkte Hyperkaliämie/Herzdepression in Kombination mit Kalziumkanalblockern (Verapamil) vermeiden",
      antidot: "(ist selbst Antidot bei maligner Hyperthermie)",
      cave: "Einzige spezifische Therapie der malignen Hyperthermie – sofortige Verfügbarkeit eines Dantrolen-Vorrats ist Pflicht in jeder Einrichtung mit Triggersubstanzen; zentraler Prüfungsklassiker",
      quelle: "Fachinfo Dantrolen i.v. (Norgine); Thieme AINS Update MH-Therapie 2019"
    }
  },
  {
    id: "fc-drug-methylenblau",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Methylenblau",
    profile: {
      klasse: "Redox-Farbstoff/Antidot",
      mechanismus: "Wird durch NADPH-abhängige Methämoglobin-Reduktase zu Leukomethylenblau reduziert, das Fe3+ (Met-Hb) zu Fe2+ (funktionsfähiges Hämoglobin) reduziert; beim vasoplegischen Schock Hemmung der Guanylatzyklase → verminderte NO-vermittelte Vasodilatation",
      indikation: "Symptomatische Methämoglobinämie, therapierefraktäres vasoplegisches Syndrom (z.B. nach Herz-OP/Sepsis), chirurgischer Markierungsfarbstoff",
      dosierung: "Methämoglobinämie: 1–2mg/kg i.v. über 5 min, ggf. Wiederholung nach 1h bei erneutem Anstieg; Vasoplegie: Bolus 1–2mg/kg, ggf. Perfusor ~0,5–1mg/kg/h",
      pharmakokinetik: "Wirkeintritt <30 min · hepatische Metabolisierung · renale Elimination (blau-grüne Urinverfärbung)",
      nebenwirkungen: "Blaugrüne Haut-/Urinverfärbung, Übelkeit, Hämolyse (v.a. bei G6PD-Mangel), Serotonin-Syndrom bei Kombination mit serotonergen Substanzen",
      kontraindikationen: "G6PD-Mangel (relative KI – Hämolysegefahr), schwere Niereninsuffizienz, gleichzeitige SSRI/SNRI-Therapie (Serotonin-Syndrom-Risiko)",
      interaktionen: "MAO-Hemmer-artige Wirkung → Serotonin-Syndrom-Risiko mit SSRI/SNRI/Serotonergika; kann Pulsoxymetrie-Messwerte verfälschen",
      antidot: "(ist selbst Antidot)",
      cave: "Bei G6PD-Mangel kann Methylenblau selbst schwere Hämolyse auslösen und die Methämoglobinämie sogar verstärken statt lindern",
      quelle: "ToxInfo Methylenblau; Fachinfo Methylenblau-Injektionslösung"
    }
  },
  {
    id: "fc-drug-glukagon",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Glukagon",
    profile: {
      klasse: "Peptidhormon (Antidot/Antihypoglykämikum)",
      mechanismus: "Agonismus am hepatischen Glukagonrezeptor (Gs-gekoppelt) → cAMP-Anstieg → Glykogenolyse/Glukoneogenese; am Herzen unabhängig vom β-Rezeptor ebenfalls cAMP-Anstieg → positiv inotrope/chronotrope Wirkung, die die Betablockade umgeht",
      indikation: "Schwere Hypoglykämie (wenn kein i.v.-Zugang verfügbar), Betablocker-Intoxikation (Antidot), adjuvant bei Kalziumkanalblocker-Intoxikation",
      dosierung: "Hypoglykämie: 1mg i.m./s.c./i.v. (Kinder 0,5mg); Betablocker-Intoxikation: Bolus 50–150µg/kg i.v. über 1–2 min, danach Perfusor 2–10mg/h nach Wirkung",
      pharmakokinetik: "Wirkeintritt 5–20 min (i.m.), schneller i.v. · HWZ ~3–10 min · hepatische/renale Metabolisierung",
      nebenwirkungen: "Übelkeit/Erbrechen (häufig, v.a. bei hoher Dosis), Hyperglykämie, Tachykardie",
      kontraindikationen: "Phäochromozytom, Insulinom (paradoxe Hypoglykämie möglich); bei Hypoglykämie unwirksam bei leeren Glykogenspeichern (Hunger, Leberinsuffizienz, chronischer Alkoholismus)",
      interaktionen: "Wirkverstärkung oraler Antikoagulanzien (INR-Anstieg)",
      antidot: "(ist selbst Antidot bei Betablocker-Intoxikation)",
      cave: "Bei Betablocker-Intoxikation wirkt Glukagon über einen β-Rezeptor-unabhängigen Signalweg – daher trotz Blockade weiterhin inotrop wirksam, zentraler Prüfungsklassiker",
      quelle: "ToxInfo Glucagon Monographie; Gelbe Liste Glucagon"
    }
  },
  {
    id: "fc-drug-hydroxocobalamin",
    module: "pharmakologie",
    subtopic: "medikamenten-steckbriefe",
    front: "Steckbrief: Hydroxocobalamin",
    profile: {
      klasse: "Vitamin-B12-Analogon/Antidot",
      mechanismus: "Zentrales Kobalt-Ion bindet freies Cyanid unter Bildung von renal eliminierbarem, nicht-toxischem Cyanocobalamin (Vitamin B12) → Entzug des Cyanids von der mitochondrialen Cytochrom-c-Oxidase",
      indikation: "Bekannte oder vermutete Cyanidvergiftung (v.a. Rauchgasinhalation bei Bränden)",
      dosierung: "Erwachsene initial 5g i.v. über 15 min, ggf. zweite Dosis 5g (max. Gesamtdosis 10g); Kinder 70mg/kg (max. 5g initial, max. Gesamtdosis 140mg/kg bzw. 10g)",
      pharmakokinetik: "Wirkeintritt während der Infusion · renale Elimination (charakteristische Rotfärbung von Urin/Haut/Schleimhäuten) · HWZ ~26–31h",
      nebenwirkungen: "Rotfärbung von Haut/Schleimhäuten/Urin (harmlos, aber diagnostisch störend), Hypertonie, allergische Reaktionen, Interferenz mit kolorimetrischen Laborwerten",
      kontraindikationen: "Bekannte Überempfindlichkeit gegen Hydroxocobalamin/Vitamin B12; keine absolute KI bei vitaler Indikation",
      interaktionen: "Kann kolorimetriebasierte Labortests (z.B. Kreatinin, Bilirubin) und Dialysemembranen stören; Inkompatibilität mit Natriumthiosulfat im selben Zugang",
      antidot: "(ist selbst Antidot)",
      cave: "Verursacht ausgeprägte Rotfärbung von Haut/Urin, die nachfolgende Diagnostik/Kolorimetrie über Stunden bis Tage verfälschen kann",
      quelle: "Fachinfo Cyanokit 5g (Heyl/SERB)"
    }
  }
];

  window.FLASHCARDS = (window.FLASHCARDS || []).concat(DRUG_CARDS);
})();
