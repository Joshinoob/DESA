// Medikamenten-Steckbriefe: strukturierte Wirkstoffprofile als Karteikarten.
// Werden zu window.FLASHCARDS hinzugefügt (module: "pharmakologie", subtopic: "medikamenten-steckbriefe").
// Feld-Template: Substanzklasse, Wirkmechanismus (ausführlich), Indikation, Dosierung Erwachsene,
// Pharmakokinetik, Nebenwirkungen, Kontraindikationen/Vorsicht, Interaktionen, Antidot/Reversal,
// Cave/Prüfungsklassiker, Quelle. Alle Felder außer Wirkmechanismus bewusst knapp/stichwortartig,
// ohne Informationsverlust — optimiert für schnelles Wiederholen.
// Dosierungen/Kontraindikationen gegen aktuelle Fachinformationen (fachinfo.de, EMA/EU-Zulassungsdokumente)
// abgeglichen — vor klinischer Anwendung IMMER die aktuelle Fachinformation des konkreten Präparats prüfen.
(function () {
  const DRUG_CARDS = [
    {
      id: "fc-drug-propofol",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Propofol",
      back:
        "Substanzklasse: i.v. Hypnotikum (Alkylphenol)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors → verstärkte/verlängerte Cl⁻-Kanal-Öffnung → neuronale Hyperpolarisation\n" +
        "Indikation: Einleitung/Erhaltung Allgemeinanästhesie, Sedierung (Eingriffe, ICU)\n" +
        "Dosierung Erwachsene: Einleitung 1,5–2,5 mg/kg (>55J./ASA III–IV: 1 mg/kg, langsamer); Erhaltung 4–12 mg/kg/h TIVA; ICU-Sedierung niedriger\n" +
        "Pharmakokinetik: Wirkeintritt ~30s · kontextsensitive HWZ ↑ mit Infusionsdauer · hepatisch/extrahepatisch, nierenunabhängig\n" +
        "Nebenwirkungen: Hypotonie, Atemdepression, Injektionsschmerz; PRIS bei Hochdosis-Langzeitgabe (>4mg/kg/h, >48h)\n" +
        "Kontraindikationen/Vorsicht: Soja-/Erdnussallergie (Zubereitung beachten), schwere kardiale Instabilität\n" +
        "Interaktionen: ↑ZNS-/Atemdepression mit Opioiden/Sedativa\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: PRIS – seltener, potenziell letaler Notfall bei Hochdosis-Langzeitsedierung\n" +
        "Quelle: Fachinfo Propofol-Lipuro/-ratiopharm; AkdÄ PRIS-Empfehlung"
    },
    {
      id: "fc-drug-thiopental",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Thiopental",
      back:
        "Substanzklasse: i.v. Hypnotikum (Barbiturat)\n" +
        "Wirkmechanismus: Verstärkung der GABA-A-Rezeptor-vermittelten Cl⁻-Leitfähigkeit, bei hoher Dosis auch direkte Kanalaktivierung\n" +
        "Indikation: Narkoseeinleitung (heute selten), Hirndruck-/Status-epilepticus-Therapie (zerebroprotektiv)\n" +
        "Dosierung Erwachsene: Einleitung 3–5 mg/kg i.v.\n" +
        "Pharmakokinetik: Wirkeintritt <30s · kurze klin. Wirkdauer (Umverteilung), aber lange terminale HWZ (Kumulation!) · hepatisch, stark proteingebunden\n" +
        "Nebenwirkungen: Atemdepression, Hypotonie (v.a. Hypovolämie), Myokarddepression, Histaminfreisetzung (Bronchospasmus)\n" +
        "Kontraindikationen/Vorsicht: Akute intermittierende Porphyrie (absolut!), schwere Herzinsuffizienz, Hypovolämie/Schock, Asthma\n" +
        "Interaktionen: ↑Atemdepression mit anderen ZNS-Dämpfern\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Klassischer Porphyrie-Trigger – absolute KI, häufig geprüft\n" +
        "Quelle: Fachinfo Thiopental Panpharma"
    },
    {
      id: "fc-drug-etomidat",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Etomidat",
      back:
        "Substanzklasse: i.v. Hypnotikum (Imidazol-Derivat)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors, hohe Rezeptorselektivität\n" +
        "Indikation: Einleitung bei hämodynamisch instabilen/kardial vorbelasteten Patienten\n" +
        "Dosierung Erwachsene: 0,15–0,3 mg/kg i.v. (Wirkung 30–60s, Dauer 3–5min)\n" +
        "Pharmakokinetik: Sehr schneller Wirkeintritt, kurze Dauer (Umverteilung), hepatische Esterase-Hydrolyse\n" +
        "Nebenwirkungen: Myoklonien, Übelkeit/Erbrechen, Injektionsschmerz; NNR-Suppression (11β-Hydroxylase-Hemmung) 6–72h auch nach Einzeldosis\n" +
        "Kontraindikationen/Vorsicht: Nebenniereninsuffizienz; Sepsis/septischer Schock (Kortisolsuppression, umstritten); nicht zur Dauersedierung\n" +
        "Interaktionen: Keine wesentlichen\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Dauerinfusion zur ICU-Sedierung obsolet (adrenale Suppression) – Klassiker\n" +
        "Quelle: Fachinfo Etomidat-Lipuro; CMDh/BfArM-Stellungnahme"
    },
    {
      id: "fc-drug-ketamin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Ketamin",
      back:
        "Substanzklasse: i.v./i.m. Anästhetikum (Phencyclidin-Derivat, „dissoziativ“)\n" +
        "Wirkmechanismus: Nichtkompetitiver Antagonist am NMDA-Rezeptor; zusätzlich Opioid-, Monoamin- und Natriumkanal-Interaktion\n" +
        "Indikation: Einleitung/Erhaltung bei Kreislaufinstabilität, Notfallanästhesie, Analgosedierung, Bronchospasmus, Regionalanästhesie-Ergänzung\n" +
        "Dosierung Erwachsene: i.v. 0,25–0,5 mg/kg (Vollnarkose ~1–2mg/kg), i.m. 0,5–1mg/kg; Erhaltung 1–6mg/kg/h\n" +
        "Pharmakokinetik: Wirkeintritt i.v. <1min, i.m. 3–5min; hepatisch → aktiver Metabolit Norketamin (CYP3A4/2B6)\n" +
        "Nebenwirkungen: Sympathomimetisch (↑HF/RR), Hypersalivation, Emergence-Delirium/Halluzinationen (Benzodiazepin reduziert dies)\n" +
        "Kontraindikationen/Vorsicht: Unkontrollierte Hypertonie, instabile KHK/frischer MI, dekompensierte Herzinsuffizienz, Psychose\n" +
        "Interaktionen: ↑ZNS-Dämpfung mit Sedativa\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Einziges i.v.-Anästhetikum mit sympathomimetischer statt kardiodepressiver Wirkung\n" +
        "Quelle: Fachinfo Ketamin-hameln"
    },
    {
      id: "fc-drug-esketamin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Esketamin",
      back:
        "Substanzklasse: i.v./i.m. Anästhetikum, S(+)-Enantiomer von Ketamin\n" +
        "Wirkmechanismus: Wie Ketamin (NMDA-Rezeptor-Antagonismus), ca. doppelt so potent wie racemisches Ketamin\n" +
        "Indikation: Wie Ketamin (Einleitung/Erhaltung, Analgosedierung, Status asthmaticus, Regionalanästhesie-Ergänzung)\n" +
        "Dosierung Erwachsene: Einleitung 0,5–1mg/kg i.v. oder 2–4mg/kg i.m.; Erhaltung halbe Initialdosis alle 10–15min oder 0,5–3mg/kg/h; ↓Dosis bei Polytrauma\n" +
        "Pharmakokinetik: Wie Ketamin, hepatisch → Norketamin\n" +
        "Nebenwirkungen: Wie Ketamin (↑HF/RR, Hypersalivation, Emergence-Phänomene)\n" +
        "Kontraindikationen/Vorsicht: Wie Ketamin (unkontrollierte Hypertonie, instabile KHK)\n" +
        "Interaktionen: ↑ZNS-Dämpfung mit Sedativa\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Nur halbe mg-Dosis von Ketamin verwenden – doppelte Potenz, Verwechslungsgefahr!\n" +
        "Quelle: Fachinfo Ketanest S (Pfizer)"
    },
    {
      id: "fc-drug-remimazolam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Remimazolam",
      back:
        "Substanzklasse: i.v. Benzodiazepin (ultrakurzwirksam)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors (Benzodiazepin-Bindungsstelle), strukturell mit Esterase-Sollbruchstelle\n" +
        "Indikation: Prozedurale Sedierung; Ein-/Erhaltung Allgemeinanästhesie (zulassungsabhängig)\n" +
        "Dosierung Erwachsene: Individuelle Titration (Alter, ASA, Begleitmedikation) – kein fixes mg/kg-Schema, siehe Fachinfo\n" +
        "Pharmakokinetik: Sehr schneller Wirkeintritt; Abbau durch Gewebe-Carboxylesterase-1 → inaktiv (organunabhängig, kein CYP450); kontextsens. HWZ 6–7min\n" +
        "Nebenwirkungen: Hypotonie, Atemdepression, Bradykardie, Übelkeit/Erbrechen; gelegentlich Schluckauf, Hypothermie, Anaphylaxie\n" +
        "Kontraindikationen/Vorsicht: Überempfindlichkeit Benzodiazepine, instabile Myasthenia gravis, Schwangerschaft meiden\n" +
        "Interaktionen: ↑ZNS-/Atemdepression mit Opioiden/Sedativa\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Esterase-Metabolismus = organunabhängig (wie Remifentanil bei Opioiden) – zentraler Unterschied zu Midazolam\n" +
        "Quelle: EU-Zulassung/Fachinfo Byfavo (EMA)"
    },
    {
      id: "fc-drug-midazolam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Midazolam",
      back:
        "Substanzklasse: Benzodiazepin (kurzwirksam)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors an der Benzodiazepin-Bindungsstelle\n" +
        "Indikation: Prämedikation, Sedierung, Kombinationsnarkose, ICU-Sedierung, Status epilepticus\n" +
        "Dosierung Erwachsene: Prämedikation i.m. 0,07–0,1mg/kg; Sedierung i.v. 0,3–0,5mg/kg (titrieren); Kombinationsnarkose 0,03–0,1mg/kg bzw. 0,03–0,1mg/kg/h\n" +
        "Pharmakokinetik: Wirkeintritt i.v. 1–2min; hepatisch CYP3A4 → aktiver Metabolit; wasserlöslich sauer, lipophil bei physiol. pH\n" +
        "Nebenwirkungen: Atemdepression (+Opioide), Hypotonie, paradoxe Reaktion (Alte/Kinder), anterograde Amnesie\n" +
        "Kontraindikationen/Vorsicht: Myasthenia gravis, schwere Ateminsuffizienz, Schlafapnoe; Leberinsuffizienz (↑Wirkdauer)\n" +
        "Interaktionen: CYP3A4-Inhibitoren (Azol-Antimykotika) ↑Wirkung; ↑Atemdepression mit Opioiden\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Einziges wasserlösliche Benzodiazepin – wird bei physiol. pH lipophil → schneller ZNS-Eintritt\n" +
        "Quelle: Fachinfo Midazolam-ratiopharm/Accord"
    },
    {
      id: "fc-drug-diazepam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Diazepam",
      back:
        "Substanzklasse: Benzodiazepin (lang wirksam)\n" +
        "Wirkmechanismus: Wie Midazolam – GABA-A-Rezeptor-Modulation an der Benzodiazepin-Bindungsstelle\n" +
        "Indikation: Prämedikation, Anxiolyse, Status epilepticus, Alkoholentzug, Spastik\n" +
        "Dosierung Erwachsene: Prämedikation oral/rektal 10–20mg Vorabend bzw. 5–10mg rektal 1h präop\n" +
        "Pharmakokinetik: Lange HWZ (20–100h) durch aktive Metaboliten (Desmethyldiazepam) – Kumulation bei Alten/Leberinsuffizienz\n" +
        "Nebenwirkungen: Sedierung, Atemdepression (+Opioide), Sturzrisiko bei Alten\n" +
        "Kontraindikationen/Vorsicht: Schwere Ateminsuffizienz, Myasthenia gravis, Schlafapnoe, akute Intoxikation\n" +
        "Interaktionen: ↑ZNS-Dämpfung mit Opioiden/Alkohol; aktive Metaboliten verlängern Interaktionsrisiko\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Deutlich länger wirksam als Midazolam (aktive Metaboliten) – ungünstig für kurze/ambulante Eingriffe\n" +
        "Quelle: Fachinfo Diazepam-ratiopharm"
    },
    {
      id: "fc-drug-lorazepam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Lorazepam",
      back:
        "Substanzklasse: Benzodiazepin (mittellang wirksam)\n" +
        "Wirkmechanismus: Wie andere Benzodiazepine – GABA-A-Rezeptor-Modulation\n" +
        "Indikation: Prämedikation, Anxiolyse, Status epilepticus (2. Wahl), ICU-Sedierung (selten, Propylenglykol)\n" +
        "Dosierung Erwachsene: Prämedikation 1–2,5mg Vorabend und/oder 2–4mg 1–2h präop\n" +
        "Pharmakokinetik: HWZ ~12–16h, keine aktiven Metaboliten (nur Glucuronidierung) → bevorzugt bei Leberinsuffizienz\n" +
        "Nebenwirkungen: Sedierung, Atemdepression, Muskelschwäche; Propylenglykol-Toxizität bei Hochdosis-Langzeitinfusion\n" +
        "Kontraindikationen/Vorsicht: Schwere Ateminsuffizienz, Myasthenia gravis; Scopolamin parenteral kontraindiziert\n" +
        "Interaktionen: ↑ZNS-Dämpfung; Scopolamin-Kombination kontraindiziert\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Keine aktiven Metaboliten → bevorzugt bei Leberinsuffizienz; Propylenglykol als eigenes Toxizitätsrisiko\n" +
        "Quelle: Fachinfo Lorazepam-neuraxpharm/dura"
    },
    {
      id: "fc-drug-dexmedetomidin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Dexmedetomidin",
      back:
        "Substanzklasse: Selektiver α2-Adrenozeptor-Agonist\n" +
        "Wirkmechanismus: Agonismus an präsynaptischen α2-Rezeptoren im ZNS (Locus coeruleus) → ↓Noradrenalinfreisetzung → Sedierung/Anxiolyse/Analgesie ohne relevante Atemdepression\n" +
        "Indikation: ICU-Sedierung (Ziel RASS 0 bis -3, erweckbar), Adjuvans Regional-/Allgemeinanästhesie\n" +
        "Dosierung Erwachsene: Initial 0,7µg/kg/h, Titration 0,2–1,4µg/kg/h; kein Bolus bei ICU-Umstellung\n" +
        "Pharmakokinetik: Wirkeintritt ~15min bis Steady State; hepatisch (Glucuronidierung, CYP2A6), renale Ausscheidung; ↓Dosis bei Leberinsuffizienz\n" +
        "Nebenwirkungen: Bradykardie, Hypotonie (initial ggf. Hypertonie durch α2B), Mundtrockenheit\n" +
        "Kontraindikationen/Vorsicht: AV-Block II/III ohne Schrittmacher, unkontrollierte Hypotonie, akutes zerebrovaskuläres Ereignis\n" +
        "Interaktionen: ↑Sedierung/Hypotonie mit ZNS-Dämpfern/Antihypertensiva\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Einziges gängiges ICU-Sedativum ohne relevante Atemdepression – Sedierung bei Nicht-Intubierten möglich\n" +
        "Quelle: Fachinfo Dexdor"
    },
    {
      id: "fc-drug-clonidin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Clonidin",
      back:
        "Substanzklasse: Zentraler α2-Adrenozeptor-Agonist (Vorläufer von Dexmedetomidin)\n" +
        "Wirkmechanismus: Wie Dexmedetomidin – zentrale α2-Agonisierung, aber weniger selektiv (α1-Restaktivität), langsamerer An-/Abflutung\n" +
        "Indikation: Prämedikation/Adjuvans, ICU-Sedierung/Delir/Entzug (Alkohol, Opioide), Hypertonie\n" +
        "Dosierung Erwachsene: i.v. 0,5–2µg/kg/h, einschleichend unter RR-Monitoring\n" +
        "Pharmakokinetik: Renal/hepatisch gemischt eliminiert, HWZ 6–24h (länger als Dexmedetomidin)\n" +
        "Nebenwirkungen: Hypotonie, Bradykardie, Sedierung, Mundtrockenheit, Obstipation\n" +
        "Kontraindikationen/Vorsicht: Höhergradiger AV-Block, schwere Bradykardie, unkontrollierte Hypotonie\n" +
        "Interaktionen: ↑Sedierung/Hypotonie mit ZNS-Dämpfern/Antihypertensiva; abruptes Absetzen unter Betablockern riskant\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Abruptes Absetzen → Rebound-Hypertonie/-Tachykardie – nie abrupt stoppen, ausschleichen\n" +
        "Quelle: Fachinfo Clonidin-ratiopharm"
    }
  ];

  window.FLASHCARDS = (window.FLASHCARDS || []).concat(DRUG_CARDS);
})();
