// Medikamenten-Steckbriefe: strukturierte Wirkstoffprofile als Karteikarten.
// Werden zu window.FLASHCARDS hinzugefügt (module: "pharmakologie", subtopic: "medikamenten-steckbriefe").
// Jede Karte folgt dem Feld-Template: Substanzklasse, Wirkmechanismus, Indikation,
// Dosierung Erwachsene, Pharmakokinetik, Nebenwirkungen, Kontraindikationen/Vorsicht,
// Interaktionen, Antidot/Reversal, Cave/Prüfungsklassiker, Quelle.
// Dosierungen/Kontraindikationen wurden gegen aktuelle Fachinformationen (fachinfo.de, EMA/EU-Zulassungsdokumente)
// abgeglichen — vor klinischer Anwendung IMMER die aktuelle Fachinformation des konkreten Präparats prüfen.
(function () {
  const DRUG_CARDS = [
    {
      id: "fc-drug-propofol",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Propofol",
      back:
        "Substanzklasse: i.v. Hypnotikum (Alkylphenol-Derivat)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors → verstärkte/verlängerte Cl⁻-Kanal-Öffnung → neuronale Hyperpolarisation\n" +
        "Indikation: Einleitung/Aufrechterhaltung der Allgemeinanästhesie, Sedierung bei Eingriffen, ICU-Langzeitsedierung\n" +
        "Dosierung Erwachsene: Einleitung 1,5–2,5 mg/kg i.v. (>55J./ASA III-IV oft nur 1 mg/kg, langsamer injizieren); Erhaltung TIVA 4–12 mg/kg/h; ICU-Sedierung deutlich niedriger\n" +
        "Pharmakokinetik: Wirkeintritt ~30s; kurze Aufwachzeit durch Umverteilung; kontextsensitive HWZ steigt mit Infusionsdauer; hepatische (Glucuronidierung) + extrahepatische Clearance, weitgehend organunabhängig\n" +
        "Nebenwirkungen: Dosisabhängige Hypotonie und Atemdepression, Injektionsschmerz; bei Hochdosis-Langzeitinfusion (>4 mg/kg/h, >48h) Propofol-Infusionssyndrom (PRIS: Rhabdomyolyse, metabolische Azidose, Herzversagen)\n" +
        "Kontraindikationen/Vorsicht: Überempfindlichkeit gegen Propofol/Emulsionsbestandteile (Soja-/Erdnussallergie je nach Zubereitung beachten); schwere kardiale Instabilität\n" +
        "Interaktionen: Verstärkte ZNS-/Atemdepression mit Opioiden/anderen Sedativa\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: PRIS ist ein seltener, aber potenziell letaler Notfall bei Hochdosis-Langzeitsedierung – nicht mit normaler Kurzzeitanwendung verwechseln\n" +
        "Quelle: Fachinformation Propofol-Lipuro/Propofol-ratiopharm (fachinfo.de); AkdÄ-Empfehlung Propofolinfusionssyndrom"
    },
    {
      id: "fc-drug-thiopental",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Thiopental",
      back:
        "Substanzklasse: i.v. Hypnotikum (Barbiturat)\n" +
        "Wirkmechanismus: Verstärkung der GABA-A-Rezeptor-vermittelten Cl⁻-Leitfähigkeit, bei hoher Dosis auch direkte Kanalaktivierung\n" +
        "Indikation: Narkoseeinleitung (heute seltener), Hirndruck-/Status-epilepticus-Therapie (zerebroprotektiv durch gesenkten zerebralen Stoffwechsel)\n" +
        "Dosierung Erwachsene: Einleitung 3–5 mg/kg i.v.\n" +
        "Pharmakokinetik: Sehr schneller Wirkeintritt (<30s), kurze klinische Wirkdauer durch Umverteilung, aber lange terminale HWZ (Kumulationsgefahr bei wiederholter Gabe); hepatischer Abbau; stark proteingebunden\n" +
        "Nebenwirkungen: Dosisabhängige Atemdepression und Hypotonie (v.a. bei Hypovolämie), Myokarddepression, Histaminfreisetzung (Bronchospasmus-Risiko)\n" +
        "Kontraindikationen/Vorsicht: Akute intermittierende Porphyrie (absolute KI!), schwere Herzinsuffizienz, schwere Hypovolämie/Schock, schwere Ateminsuffizienz/Asthma\n" +
        "Interaktionen: Verstärkte Atemdepression mit anderen ZNS-Dämpfern\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Klassischer Trigger einer akuten Porphyrie-Krise – absolute Kontraindikation, häufig geprüft\n" +
        "Quelle: Fachinformation Thiopental Panpharma (fachinfo.de)"
    },
    {
      id: "fc-drug-etomidat",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Etomidat",
      back:
        "Substanzklasse: i.v. Hypnotikum (Imidazol-Derivat)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors, hohe Rezeptorselektivität\n" +
        "Indikation: Narkoseeinleitung bei hämodynamisch instabilen/kardial vorbelasteten Patienten (ausgeprägte kardiovaskuläre Stabilität)\n" +
        "Dosierung Erwachsene: 0,15–0,3 mg/kg i.v. (Bewusstlosigkeit nach 30–60s, Wirkdauer 3–5 min)\n" +
        "Pharmakokinetik: Sehr schneller Wirkeintritt, kurze Wirkdauer durch Umverteilung, hepatische Hydrolyse durch Esterasen\n" +
        "Nebenwirkungen: Myoklonien bei Injektion (häufig), Übelkeit/Erbrechen, Injektionsschmerz; Suppression der Nebennierenrinden-Steroidsynthese (11β-Hydroxylase-Hemmung) bereits nach Einzeldosis für ca. 6–72h\n" +
        "Kontraindikationen/Vorsicht: Bekannte Nebenniereninsuffizienz; Sepsis/septischer Schock (kontroverse Datenlage zur Mortalität wegen Kortisolsuppression); nicht zur kontinuierlichen Sedierung geeignet\n" +
        "Interaktionen: Keine wesentlichen spezifischen\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Kontinuierliche Etomidat-Infusion zur ICU-Sedierung ist wegen adrenaler Suppression obsolet – klassische Prüfungsfrage\n" +
        "Quelle: Fachinformation Etomidat-Lipuro; CMDh-Stellungnahme/BfArM zu Etomidat"
    },
    {
      id: "fc-drug-ketamin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Ketamin",
      back:
        "Substanzklasse: i.v./i.m. Anästhetikum (Phencyclidin-Derivat, „dissoziative Anästhesie“)\n" +
        "Wirkmechanismus: Nichtkompetitiver Antagonist am NMDA-Rezeptor; zusätzlich Interaktion mit Opioid-, Monoamin- und Natriumkanälen\n" +
        "Indikation: Narkoseeinleitung/-aufrechterhaltung bei hämodynamischer Instabilität, präklinische/Notfallanästhesie, Analgosedierung, Bronchospasmus-Therapie, Ergänzung Regionalanästhesie\n" +
        "Dosierung Erwachsene: i.v. Notfall-/Einleitungsdosis 0,25–0,5 mg/kg (Vollnarkose ~1–2 mg/kg), i.m. 0,5–1 mg/kg; Erhaltung als Dauerinfusion 1–6 mg/kg/h je nach Kombination\n" +
        "Pharmakokinetik: Wirkeintritt i.v. <1 min, i.m. 3–5 min; hepatischer Abbau zu aktivem Metaboliten Norketamin (v.a. CYP3A4/2B6)\n" +
        "Nebenwirkungen: Sympathomimetisch (Tachykardie, Hypertonie), vermehrter Speichelfluss, Aufwach-Halluzinationen/Emergence-Delirium (durch Benzodiazepine reduzierbar)\n" +
        "Kontraindikationen/Vorsicht: Unkontrollierte Hypertonie, instabile Angina pectoris/frischer Myokardinfarkt, dekompensierte Herzinsuffizienz, bekannte Psychose (relative KI)\n" +
        "Interaktionen: Verstärkte ZNS-Dämpfung mit anderen Sedativa\n" +
        "Antidot/Reversal: Keines spezifisches\n" +
        "Cave/Prüfungsklassiker: Einziges i.v.-Anästhetikum mit sympathomimetischer statt kardiodepressiver Wirkung\n" +
        "Quelle: Fachinformation Ketamin-hameln (fachinfo.de)"
    },
    {
      id: "fc-drug-esketamin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Esketamin",
      back:
        "Substanzklasse: i.v./i.m. Anästhetikum, S(+)-Enantiomer von Ketamin\n" +
        "Wirkmechanismus: Wie Ketamin (NMDA-Rezeptor-Antagonismus), ca. doppelt so potent wie racemisches Ketamin\n" +
        "Indikation: Wie Ketamin – Narkoseeinleitung/-aufrechterhaltung, Analgosedierung, Status asthmaticus, Ergänzung Regionalanästhesie\n" +
        "Dosierung Erwachsene: Einleitung 0,5–1 mg/kg i.v. oder 2–4 mg/kg i.m.; Erhaltung halbe Initialdosis alle 10–15 min oder Dauerinfusion 0,5–3 mg/kg/h; Dosisreduktion bei Polytrauma/reduziertem AZ\n" +
        "Pharmakokinetik: Wie Ketamin, schneller Wirkeintritt, hepatischer Metabolismus zu Norketamin\n" +
        "Nebenwirkungen: Wie Ketamin (Tachykardie, Hypertonie, Hypersalivation, Emergence-Phänomene)\n" +
        "Kontraindikationen/Vorsicht: Wie Ketamin (unkontrollierte Hypertonie, instabile KHK)\n" +
        "Interaktionen: Verstärkte ZNS-Dämpfung mit anderen Sedativa\n" +
        "Antidot/Reversal: Keines\n" +
        "Cave/Prüfungsklassiker: Nur die halbe mg-Dosis von racemischem Ketamin verwenden – doppelte Potenz nicht vergessen (Verwechslungsgefahr!)\n" +
        "Quelle: Fachinformation Ketanest S (Pfizer, fachinfo.de)"
    },
    {
      id: "fc-drug-remimazolam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Remimazolam",
      back:
        "Substanzklasse: i.v. Benzodiazepin (ultrakurzwirksam)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors (Benzodiazepin-Bindungsstelle) – strukturell mit Esterase-Sollbruchstelle\n" +
        "Indikation: Prozedurale Sedierung; Einleitung/Aufrechterhaltung der Allgemeinanästhesie (zulassungsabhängig je nach Land)\n" +
        "Dosierung Erwachsene: Individuelle Titration nach gewünschter Sedierungs-/Narkosetiefe, Alter, ASA-Status, Begleitmedikation (kein fixes mg/kg-Schema – aktuelle Fachinformation für exakte Titrationsschritte prüfen)\n" +
        "Pharmakokinetik: Sehr schneller Wirkeintritt; Metabolisierung durch ubiquitäre Gewebe-Carboxylesterase-1 zu inaktivem Metaboliten (organunabhängig, kein CYP450); kontextsensitive HWZ ca. 6–7 min\n" +
        "Nebenwirkungen: Sehr häufig Hypotonie, Atemdepression, Bradykardie, Übelkeit/Erbrechen; gelegentlich Schluckauf, Hypothermie, anaphylaktische Reaktionen\n" +
        "Kontraindikationen/Vorsicht: Überempfindlichkeit gegen Remimazolam/Benzodiazepine, instabile Myasthenia gravis; Schwangerschaft meiden (limitierte Daten)\n" +
        "Interaktionen: Verstärkte ZNS-/Atemdepression mit Opioiden/anderen Sedativa\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Esterase-Metabolismus macht es (analog zu Remifentanil bei Opioiden) weitgehend unabhängig von Leber-/Nierenfunktion – zentraler Unterschied zu Midazolam\n" +
        "Quelle: EU-Zulassungsdokumente/Fachinformation Byfavo (EMA)"
    },
    {
      id: "fc-drug-midazolam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Midazolam",
      back:
        "Substanzklasse: Benzodiazepin (kurzwirksam)\n" +
        "Wirkmechanismus: Positiv allosterischer Modulator des GABA-A-Rezeptors an der Benzodiazepin-Bindungsstelle\n" +
        "Indikation: Prämedikation (Anxiolyse/Amnesie), Sedierung bei Eingriffen, Kombinationsnarkose, ICU-Sedierung, Status epilepticus\n" +
        "Dosierung Erwachsene: Prämedikation i.m. 0,07–0,1 mg/kg; Sedierung i.v. 0,3–0,5 mg/kg (Titration in kleinen Boli); Kombinationsnarkose Boli 0,03–0,1 mg/kg bzw. Infusion 0,03–0,1 mg/kg/h\n" +
        "Pharmakokinetik: Wirkeintritt i.v. 1–2 min; hepatischer Abbau über CYP3A4, aktiver Metabolit (α-Hydroxymidazolam); wasserlöslich bei saurem pH, im Blut (physiologischer pH) lipophil\n" +
        "Nebenwirkungen: Atemdepression (v.a. mit Opioiden), Hypotonie, paradoxe Reaktionen (v.a. ältere Patienten/Kinder), anterograde Amnesie (teils erwünscht)\n" +
        "Kontraindikationen/Vorsicht: Myasthenia gravis, schwere Ateminsuffizienz, Schlafapnoe-Syndrom; Vorsicht bei Leberinsuffizienz (verlängerte Wirkung)\n" +
        "Interaktionen: CYP3A4-Inhibitoren (z.B. Azol-Antimykotika) verlängern Wirkung deutlich; additive Atemdepression mit Opioiden\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Einziges wasserlösliches Benzodiazepin bei saurem pH – wird im Blut (physiologischer pH) lipophil, dadurch schneller ZNS-Wirkeintritt\n" +
        "Quelle: Fachinformation Midazolam-ratiopharm/Accord (fachinfo.de)"
    },
    {
      id: "fc-drug-diazepam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Diazepam",
      back:
        "Substanzklasse: Benzodiazepin (lang wirksam)\n" +
        "Wirkmechanismus: Wie Midazolam – GABA-A-Rezeptor-Modulation an der Benzodiazepin-Bindungsstelle\n" +
        "Indikation: Prämedikation, Anxiolyse, Status epilepticus, Alkoholentzugssyndrom, Muskelrelaxation bei Spastik\n" +
        "Dosierung Erwachsene: Prämedikation oral/rektal 10–20 mg am Vorabend bzw. 5–10 mg rektal ca. 1h vor Narkose\n" +
        "Pharmakokinetik: Lange Halbwertszeit (ca. 20–100h) durch aktive Metaboliten (u.a. Desmethyldiazepam) – Kumulationsgefahr bei wiederholter Gabe, v.a. bei älteren/leberinsuffizienten Patienten\n" +
        "Nebenwirkungen: Sedierung, Atemdepression (v.a. mit Opioiden), Muskelschwäche/Sturzrisiko bei älteren Patienten\n" +
        "Kontraindikationen/Vorsicht: Schwere Ateminsuffizienz, Myasthenia gravis, Schlafapnoe-Syndrom, akute Alkohol-/Medikamentenintoxikation\n" +
        "Interaktionen: Additive ZNS-Dämpfung mit Opioiden/Alkohol; aktive Metaboliten verlängern Interaktionsrisiko gegenüber Midazolam\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Deutlich längere Wirkdauer als Midazolam durch aktive Metaboliten – ungünstig für ambulante/kurze Eingriffe\n" +
        "Quelle: Fachinformation Diazepam-ratiopharm (fachinfo.de)"
    },
    {
      id: "fc-drug-lorazepam",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Lorazepam",
      back:
        "Substanzklasse: Benzodiazepin (mittellang wirksam)\n" +
        "Wirkmechanismus: Wie andere Benzodiazepine – GABA-A-Rezeptor-Modulation\n" +
        "Indikation: Prämedikation, Anxiolyse, Status epilepticus (Zweitlinie), ICU-Sedierung (historisch, heute seltener wegen Propylenglykol)\n" +
        "Dosierung Erwachsene: Prämedikation 1–2,5 mg am Vorabend und/oder 2–4 mg ca. 1–2h vor Eingriff\n" +
        "Pharmakokinetik: Mittlere Halbwertszeit (~12–16h), keine aktiven Metaboliten (im Gegensatz zu Diazepam) – nur Glucuronidierung nötig, daher bei Leberinsuffizienz oft bevorzugt\n" +
        "Nebenwirkungen: Sedierung, Atemdepression, Muskelschwäche; bei Hochdosis-Langzeitinfusion Propylenglykol-Toxizität (metabolische Azidose, Niereninsuffizienz) möglich\n" +
        "Kontraindikationen/Vorsicht: Schwere Ateminsuffizienz, Myasthenia gravis; gleichzeitige parenterale Gabe von Scopolamin kontraindiziert (verstärkte Sedierung/Halluzinationen)\n" +
        "Interaktionen: Additive ZNS-Dämpfung; Kombination mit Scopolamin kontraindiziert\n" +
        "Antidot/Reversal: Flumazenil\n" +
        "Cave/Prüfungsklassiker: Keine aktiven Metaboliten – bevorzugtes Benzodiazepin bei Leberinsuffizienz; Propylenglykol-Träger als eigenständiges Toxizitätsrisiko bei Hochdosis-Infusion\n" +
        "Quelle: Fachinformation Lorazepam-neuraxpharm/dura (fachinfo.de)"
    },
    {
      id: "fc-drug-dexmedetomidin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Dexmedetomidin",
      back:
        "Substanzklasse: Selektiver α2-Adrenozeptor-Agonist\n" +
        "Wirkmechanismus: Agonismus an präsynaptischen α2-Rezeptoren im ZNS (Locus coeruleus) → verminderte Noradrenalinfreisetzung → Sedierung/Anxiolyse/Analgesie ohne relevante Atemdepression\n" +
        "Indikation: Sedierung erwachsener Intensivpatienten (Ziel RASS 0 bis -3, erweckbar), Adjuvans bei Regional-/Allgemeinanästhesie\n" +
        "Dosierung Erwachsene: ICU-Sedierung initial 0,7 µg/kg/h, Titration 0,2–1,4 µg/kg/h; bei bereits intubierten/sedierten Patienten Umstellung ohne Bolus empfohlen\n" +
        "Pharmakokinetik: Wirkeintritt ~15 min bis Steady-State-Effekt; hepatischer Metabolismus (v.a. Glucuronidierung, CYP2A6), renale Ausscheidung der Metaboliten – Dosisreduktion bei schwerer Leberinsuffizienz\n" +
        "Nebenwirkungen: Bradykardie, Hypotonie (initiale Hypertonie durch periphere α2B-Aktivierung möglich), Mundtrockenheit\n" +
        "Kontraindikationen/Vorsicht: Fortgeschrittener AV-Block (Grad II/III) ohne Schrittmacher, unkontrollierte Hypotonie, akute zerebrovaskuläre Ereignisse\n" +
        "Interaktionen: Verstärkte Sedierung/Hypotonie mit anderen ZNS-Dämpfern/Antihypertensiva\n" +
        "Antidot/Reversal: Keines spezifisches\n" +
        "Cave/Prüfungsklassiker: Einziges gängiges ICU-Sedativum ohne relevante Atemdepression – ermöglicht Sedierung bei nicht-intubierten Patienten\n" +
        "Quelle: Fachinformation Dexdor (fachinfo.de)"
    },
    {
      id: "fc-drug-clonidin",
      module: "pharmakologie",
      subtopic: "medikamenten-steckbriefe",
      front: "Steckbrief: Clonidin",
      back:
        "Substanzklasse: Zentraler α2-Adrenozeptor-Agonist (älterer Vertreter, Vorläufer von Dexmedetomidin)\n" +
        "Wirkmechanismus: Wie Dexmedetomidin – zentrale α2-Agonisierung, aber weniger α2-selektiv (mehr α1-Restaktivität), langsamerer Wirkeintritt/-abfall\n" +
        "Indikation: Prämedikation/Adjuvans (Sedierung, Analgesieverstärkung), ICU-Sedierung/Delir-/Entzugsbehandlung (Alkohol, Opioide), arterielle Hypertonie\n" +
        "Dosierung Erwachsene: Kontinuierliche i.v. Gabe 0,5–2 µg/kg/h, einschleichend unter engmaschigem Blutdruckmonitoring\n" +
        "Pharmakokinetik: Gemischt renale/hepatische Elimination, Halbwertszeit ca. 6–24h (deutlich länger als Dexmedetomidin)\n" +
        "Nebenwirkungen: Hypotonie, Bradykardie, Sedierung, Mundtrockenheit, Obstipation\n" +
        "Kontraindikationen/Vorsicht: Höhergradiger AV-Block, schwere Bradykardie, unkontrollierte Hypotonie\n" +
        "Interaktionen: Verstärkte Sedierung/Hypotonie mit anderen ZNS-Dämpfern/Antihypertensiva; abruptes Absetzen unter Betablocker-Therapie besonders risikoreich\n" +
        "Antidot/Reversal: Keines spezifisches\n" +
        "Cave/Prüfungsklassiker: Abruptes Absetzen kann Rebound-Hypertonie/-Tachykardie auslösen – niemals abrupt stoppen, sondern ausschleichen\n" +
        "Quelle: Fachinformation Clonidin-ratiopharm (fachinfo.de)"
    }
  ];

  window.FLASHCARDS = (window.FLASHCARDS || []).concat(DRUG_CARDS);
})();
