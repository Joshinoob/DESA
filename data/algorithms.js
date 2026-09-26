// Notfall-Algorithmen als geordnete Schrittfolgen: dienen (a) als Nachschlage-Referenz
// (Timeline-Ansicht) und (b) als interaktiver "Was ist der nächste Schritt?"-Trainer.
// Prozedurales/sequenzielles Wissen (Reanimation, schwieriger Atemweg, Notfallmanagement)
// wird durch Reihenfolge-Übung besser gefestigt als durch isolierte Karteikarten.
// Quellen: ERC Leitlinien 2021/2025 (ALS), Difficult Airway Society (DAS) Algorithmus,
// ASRA-Practice-Advisory LAST 2020, MHAUS/S1-Leitlinie Maligne Hyperthermie 2018,
// aktuelle Anaphylaxie-Leitlinien (u.a. Resuscitation Council/AAGBI).
window.ALGORITHMS = [
  {
    id: "als-schockbar",
    title: "ALS Erwachsener – schockbarer Rhythmus (VF/pVT)",
    category: "Reanimation",
    source: "ERC-Leitlinien 2021/2025 (Adult Advanced Life Support)",
    steps: [
      "Patient reagiert nicht, keine normale Atmung → Hilfe/Reanimationsteam alarmieren, Defibrillator anfordern",
      "Sofort Thoraxkompressionen beginnen (30:2 bei ungesichertem Atemweg), Frequenz 100–120/min, Tiefe 5–6cm",
      "Monitor/Defibrillator anschließen, sobald verfügbar",
      "Rhythmus analysieren → Kammerflimmern/pulslose VT (schockbar) erkannt",
      "1. Schock abgeben (biphasisch, initial ≥150J nach Hersteller)",
      "Sofort CPR für 2 Minuten fortsetzen, ohne Rhythmus-/Pulskontrolle dazwischen",
      "Rhythmus erneut prüfen → weiterhin schockbar → 2. Schock abgeben",
      "CPR 2 Minuten fortsetzen",
      "Rhythmus erneut prüfen → weiterhin schockbar → 3. Schock abgeben, danach Adrenalin 1mg i.v./i.o. UND Amiodaron 300mg i.v./i.o.",
      "CPR 2 Minuten fortsetzen, danach Zyklus fortführen: Rhythmus prüfen → ggf. Schock → CPR 2min → Adrenalin 1mg alle 3–5 Minuten",
      "Bei weiterhin schockbarem Rhythmus nach dem 5. Schock: zweite Amiodaron-Dosis 150mg i.v./i.o. (bei Amiodaron-Kontraindikation/-Unverträglichkeit alternativ Lidocain); bei anhaltend refraktärem VF/pVT Wechsel der Defibrillator-Pad-Position (anterior-posterior) oder Doppel-Sequenz-Defibrillation erwägen",
      "Parallel reversible Ursachen suchen und behandeln (4H: Hypoxie, Hypovolämie, Hypo-/Hyperkaliämie/metabolisch, Hypo-/Hyperthermie; 4T: Herzbeuteltamponade, Toxine, Thrombose koronar/pulmonal, Spannungspneumothorax)",
      "Bei ROSC: Post-Reanimationsbehandlung einleiten (Oxygenierung/Ventilation optimieren, Blutdruck sichern, 12-Kanal-EKG, Ursache gezielt behandeln)"
    ],
    // Kurzlabels für die visuelle Flowchart-Übersicht (siehe renderAlgoFlowchart in app.js) —
    // bewusst knapp gehalten, der volle Wortlaut steht weiterhin in der Timeline darunter.
    flowLabels: [
      "Alarmieren + Defi anfordern", "CPR beginnen (30:2)", "Monitor/Defi anschließen",
      "Rhythmus: VF/pVT", "1. Schock", "CPR 2 Min", "Weiter schockbar → 2. Schock",
      "CPR 2 Min", "3. Schock → Adrenalin + Amiodaron", "CPR-Zyklus fortführen",
      "Nach 5. Schock: 2. Amiodaron / Pad-Wechsel", "4H/4T behandeln", "ROSC → Post-Reanimation"
    ]
  },
  {
    id: "als-nicht-schockbar",
    title: "ALS Erwachsener – nicht-schockbarer Rhythmus (PEA/Asystolie)",
    category: "Reanimation",
    source: "ERC-Leitlinien 2021/2025 (Adult Advanced Life Support)",
    steps: [
      "Patient reagiert nicht, keine normale Atmung → Hilfe/Reanimationsteam alarmieren, Defibrillator anfordern",
      "Sofort Thoraxkompressionen beginnen (30:2), Frequenz 100–120/min, Tiefe 5–6cm",
      "Monitor/Defibrillator anschließen",
      "Rhythmus analysieren → PEA oder Asystolie (nicht schockbar)",
      "CPR sofort fortsetzen, so schnell wie möglich Adrenalin 1mg i.v./i.o. geben",
      "CPR 2 Minuten fortsetzen",
      "Rhythmus erneut prüfen → weiterhin nicht schockbar → CPR fortsetzen",
      "Adrenalin 1mg i.v./i.o. alle 3–5 Minuten wiederholen",
      "Parallel reversible Ursachen suchen und behandeln (4H: Hypoxie, Hypovolämie, Hypo-/Hyperkaliämie/metabolisch, Hypo-/Hyperthermie; 4T: Herzbeuteltamponade, Toxine, Thrombose koronar/pulmonal, Spannungspneumothorax)",
      "Bei Wechsel zu schockbarem Rhythmus (VF/pVT) → sofort in den Schockbar-Algorithmus wechseln",
      "Bei ROSC: Post-Reanimationsbehandlung einleiten"
    ],
    flowLabels: [
      "Alarmieren + Defi anfordern", "CPR beginnen (30:2)", "Monitor/Defi anschließen",
      "Rhythmus: PEA/Asystolie", "CPR + Adrenalin sofort", "CPR 2 Min",
      "Weiter nicht schockbar", "Adrenalin alle 3–5 Min", "4H/4T behandeln",
      "Wechsel zu schockbar? → Algorithmus wechseln", "ROSC → Post-Reanimation"
    ]
  },
  {
    id: "schwieriger-atemweg",
    title: "Schwieriger Atemweg / CICO-Algorithmus (Plan A–D)",
    category: "Atemwegsmanagement",
    source: "Difficult Airway Society (DAS) Unanticipated Difficult Intubation Algorithmus, aktualisiert 2025",
    steps: [
      "Plan A: Optimale Lagerung (Sniffing Position), adäquate Präoxygenierung; Videolaryngoskopie als bevorzugte Erstlinien-Technik einsetzen (DAS 2025: Videolaryngoskopie statt konventioneller direkter Laryngoskopie als Standardansatz)",
      "Intubationsversuch durchführen, Anzahl strikt begrenzen (max. 3 Versuche insgesamt + höchstens 1 weiterer Versuch durch erfahrenere/n Kollegin/Kollegen)",
      "Bei Misserfolg → zwischen Versuchen Oxygenierung sicherstellen (Maskenbeatmung), Technik/Hilfsmittel optimieren (z.B. Bougie, andere Spateltechnik), nicht unverändert wiederholen",
      "Plan B: Supraglottische Atemwegshilfe der 2. Generation einsetzen (max. 3 Insertionsversuche), Oxygenierung über SGA prüfen",
      "Oxygenierung über SGA erfolgreich → weiter mit SGA oder kontrollierte Intubation über/durch SGA (z.B. fiberoptisch) planen",
      "Oxygenierung über SGA NICHT erfolgreich → Plan C: Rückkehr zur Gesichtsmaskenbeatmung (2-Personen-Technik, Guedel-/Wendl-Tubus)",
      "Maskenbeatmung erfolgreich → Patienten aufwachen lassen oder alternative Atemwegssicherung in Ruhe planen",
      "Maskenbeatmung NICHT erfolgreich (weder Intubation noch SGA noch Maske möglich) → Team-Ansage 'CICO' (Can't Intubate, Can't Oxygenate) explizit und laut aussprechen, um sofortigen Wechsel zu Plan D auszulösen",
      "Plan D: Sofortiger chirurgischer Atemweg (Front-of-Neck-Access) ohne weitere Verzögerung – standardisierte Skalpell-Bougie-Tubus-Technik: vertikaler Hautschnitt über der Membrana cricothyroidea, horizontale Stichinzision der Membran, Bougie einführen, Tubus über Bougie vorschieben",
      "Nach Atemwegssicherung: Oxygenierung mit Kapnographie bestätigen, Ereignis dokumentieren, Patient/Team nachbesprechen (Debriefing), Atemwegs-Alertkarte für Patient/Akte ausstellen"
    ],
    flowLabels: [
      "Plan A: Lagerung + Videolaryngoskopie", "Intubation (max. 3+1 Versuche)",
      "Misserfolg → Oxygenierung + optimieren", "Plan B: SGA 2. Generation",
      "SGA erfolgreich → weiter/Intubation via SGA", "SGA erfolglos → Plan C: Maske",
      "Maske erfolgreich → aufwachen/planen", "Maske erfolglos → CICO ausrufen",
      "Plan D: Chirurgischer Atemweg (FONA)", "Sicherung bestätigen, Debriefing"
    ]
  },
  {
    id: "anaphylaxie",
    title: "Anaphylaxie-Management",
    category: "Notfallmedizin",
    source: "Resuscitation Council/AAGBI-Leitlinien perioperative Anaphylaxie",
    steps: [
      "Auslöser erkennen und sofort stoppen (z.B. verdächtiges Medikament/Blutprodukt/Kolloid stoppen)",
      "Hilfe rufen, ABCDE-Schema prüfen (Atemweg, Atmung, Kreislauf, Bewusstsein, Exposition)",
      "Perioperativ/OP-Setting mit bereits liegendem i.v.-Zugang und kontinuierlichem Monitoring (RCUK/AAGBI 2021): Adrenalin i.v. in titrierten Boli (z.B. 50µg-Schritte, ggf. Perfusor) durch geübtes Personal als bevorzugter Weg statt i.m.; AUSSERHALB dieses Settings (kein i.v.-Zugang, keine kontinuierliche Überwachung) bleibt Adrenalin 0,5mg i.m. (anterolateraler Oberschenkel) die Erstlinie",
      "Patienten flach lagern mit erhöhten Beinen (bei Atemnot ggf. sitzend), hochdosiert Sauerstoff geben",
      "i.v.-Zugang legen (falls noch nicht vorhanden), zügige Volumengabe (kristalloid, z.B. 500–1000ml Bolus)",
      "Keine Besserung nach 5 Minuten → Adrenalin-Gabe wiederholen (i.v. titriert bzw. i.m. 0,5mg, je nach Setting)",
      "Therapierefraktärer Schock → Adrenalin-Infusion i.v. titriert durch erfahrenes Personal fortführen/steigern",
      "Antihistaminikum und Kortikosteroid sind laut aktueller RCUK-Leitlinie 2021 NICHT mehr Teil der Akuttherapie der ersten Stunden (kein belegter Nutzen für Akutverlauf) – allenfalls sehr nachrangig/unterstützend nach Stabilisierung erwägen, niemals Adrenalin verzögern oder ersetzen",
      "Mastzelltryptase abnehmen (sofort, nach 1–2h, nach 24h zur Bestätigung)",
      "Nach Stabilisierung: Überwachung wegen möglicher biphasischer Reaktion, allergologische Abklärung veranlassen"
    ],
    flowLabels: [
      "Auslöser stoppen", "Hilfe + ABCDE", "Adrenalin (i.v. titriert im OP / i.m. sonst)",
      "Lagerung + O2", "i.v.-Zugang + Volumen", "Keine Besserung → Adrenalin wiederholen",
      "Refraktär → Adrenalin-Infusion", "Antihistaminikum/Steroid nur nachrangig",
      "Tryptase abnehmen", "Überwachung + Abklärung"
    ]
  },
  {
    id: "maligne-hyperthermie",
    title: "Maligne Hyperthermie – Akutmanagement",
    category: "Notfallmedizin",
    source: "S1-Leitlinie Maligne Hyperthermie 2018 / MHAUS",
    steps: [
      "Trigger sofort stoppen (volatile Anästhetika/Succinylcholin absetzen)",
      "Hilfe holen, MH-Notfallwagen/Dantrolen anfordern",
      "Hyperventilation mit 100% Sauerstoff, hoher Frischgasfluss, Atemkalk/Kreisteil wechseln falls möglich",
      "Operation so schnell wie klinisch vertretbar beenden oder unterbrechen",
      "Dantrolen 2,5mg/kg i.v. sofort geben, alle 5–10 Minuten wiederholen bis klinische Besserung",
      "Aktive Kühlung (kalte Infusionen, Oberflächenkühlung), Übertherapie/Unterkühlung vermeiden",
      "Monitoring: Körpertemperatur, EtCO2, Kalium, Blutgase, CK/Myoglobin",
      "Hyperkaliämie behandeln (Calcium, Insulin/Glukose, Hyperventilation), Arrhythmien behandeln",
      "Ausreichende Diurese sicherstellen (Rhabdomyolyse-/Myoglobinurie-Risiko)",
      "Verlegung auf Intensivstation, spätere MH-Abklärung (Muskelbiopsie/Gentest) und Familienberatung veranlassen"
    ],
    flowLabels: [
      "Trigger stoppen", "Hilfe + Dantrolen anfordern", "Hyperventilation 100% O2",
      "OP beenden/unterbrechen", "Dantrolen 2,5mg/kg", "Aktive Kühlung",
      "Monitoring (Temp, EtCO2, K+, CK)", "Hyperkaliämie/Arrhythmien behandeln",
      "Diurese sichern", "ITS + MH-Abklärung"
    ]
  },
  {
    id: "last",
    title: "LAST – Lokalanästhetika-Systemtoxizität",
    category: "Notfallmedizin",
    source: "ASRA Practice Advisory LAST 2020",
    steps: [
      "Frühzeichen erkennen (periorales Kribbeln, metallischer Geschmack, Tinnitus, Verwirrtheit) → weitere Gabe sofort stoppen",
      "Hilfe holen, Atemweg sichern, 100% Sauerstoff geben, Hyperventilation/Azidose vermeiden",
      "Krampfanfälle mit Benzodiazepin behandeln (Propofol bei hämodynamischer Instabilität vermeiden, da kardiodepressiv)",
      "Bei kardiovaskulärem Kollaps: Standard-ALS-Reanimation beginnen; falls Adrenalin nötig, REDUZIERTE Einzeldosen verwenden (ASRA 2020: ≤1µg/kg statt Standard-ALS-Dosis) – hochdosiertes Adrenalin kann die Wirksamkeit der Lipidemulsion beeinträchtigen und die Prognose verschlechtern",
      "Vasopressin, Kalziumkanalblocker, Betablocker und andere Lokalanästhetika als Antiarrhythmikum VERMEIDEN (können LAST verschlimmern)",
      "Lidocain als Antiarrhythmikum VERMEIDEN (verschlimmert LAST) – Amiodaron bevorzugen",
      "20%ige Lipidemulsion sofort geben: Bolus 1,5ml/kg über 2–3 Minuten",
      "Im Anschluss Infusion mit 0,25ml/kg/min fortführen",
      "Bei anhaltender Instabilität: Bolus nach 5 Minuten wiederholen (max. 2–3x), Infusionsrate ggf. verdoppeln",
      "Reanimation fortsetzen, ggf. deutlich länger als üblich – Erholung nach Lipidgabe kann verzögert eintreten",
      "Bei therapierefraktärem Kreislaufstillstand: kardiopulmonalen Bypass/ECMO erwägen, falls verfügbar",
      "Nach Stabilisierung: engmaschige Überwachung (Rezidivrisiko durch Rückverteilung), Dokumentation"
    ],
    flowLabels: [
      "Frühzeichen → Gabe stoppen", "Atemweg + O2", "Krampf → Benzodiazepin",
      "Kollaps → ALS (reduziertes Adrenalin)", "Vasopressin/CCB/BB vermeiden",
      "Lidocain vermeiden, Amiodaron statt", "Lipidemulsion-Bolus", "Lipid-Infusion fortführen",
      "Instabil → Bolus wiederholen", "Reanimation verlängert fortsetzen",
      "Refraktär → Bypass/ECMO", "Überwachung + Dokumentation"
    ]
  },
  {
    id: "phys-raas",
    title: "Renin-Angiotensin-Aldosteron-System (RAAS)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology",
    steps: [
      "Auslöser: Abfall des renalen Perfusionsdrucks/Blutdrucks (z.B. Hypovolämie, Blutung) und/oder verminderte NaCl-Konzentration am distalen Tubulus sowie gesteigerte sympathische Aktivierung",
      "Juxtaglomeruläre Zellen der Vas afferens setzen Renin frei (Barorezeptor-Mechanismus, Macula-densa-Signal, β1-Stimulation)",
      "Renin spaltet hepatisches Angiotensinogen zu Angiotensin I",
      "ACE (v.a. pulmonales Gefäßendothel) wandelt Angiotensin I in Angiotensin II um",
      "Angiotensin II bewirkt direkte arterioläre Vasokonstriktion und erhöht so den peripheren Widerstand",
      "Angiotensin II stimuliert die Zona glomerulosa der Nebennierenrinde zur Aldosteronausschüttung",
      "Aldosteron fördert im distalen Tubulus/Sammelrohr die Na+- und Wasserrückresorption (im Austausch gegen K+/H+-Sekretion)",
      "Ergebnis: Anstieg von intravasalem Volumen und peripherem Widerstand → Blutdruckanstieg mit Rückkopplungshemmung der weiteren Reninfreisetzung"
    ]
  },
  {
    id: "phys-barorezeptor",
    title: "Barorezeptorreflex – kurzfristige Blutdruckregulation",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology",
    steps: [
      "Auslöser: Blutdruckabfall (z.B. Hämorrhagie, Vasodilatation unter Anästhesie) → verminderte Wanddehnung in Karotissinus und Aortenbogen",
      "Verminderte Dehnung senkt die afferente Impulsfrequenz der Barorezeptoren über N. glossopharyngeus (Karotissinus) und N. vagus (Aortenbogen) zum Nucleus tractus solitarius (NTS) in der Medulla",
      "Verminderter afferenter Input hemmt die tonische NTS-Aktivität → verminderte Hemmung des sympathischen Zentrums und verminderte Erregung der vagalen Kerne (Nucleus ambiguus/dorsalis nervi vagi)",
      "Nettoeffekt: gesteigerter sympathischer Tonus und reduzierter vagaler Tonus zum Herzen und den Gefäßen",
      "Sympathisch vermittelt: Anstieg von Herzfrequenz und Kontraktilität sowie periphere Vasokonstriktion (Anstieg des Gefäßwiderstands)",
      "Verminderter Vagotonus verstärkt zusätzlich den Anstieg der Herzfrequenz",
      "Ergebnis: Anstieg von Herzzeitvolumen und peripherem Widerstand → Wiederherstellung des arteriellen Mitteldrucks (kurzfristige Pufferung; bei chronischer Druckänderung „Resetting“ der Rezeptoren)"
    ]
  },
  {
    id: "phys-autoregulation-niere",
    title: "Renale Autoregulation (myogener Mechanismus + tubuloglomeruläre Rückkopplung)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology",
    steps: [
      "Auslöser: Anstieg des arteriellen Perfusionsdrucks innerhalb des Autoregulationsbereichs (ca. MAP 80–180mmHg)",
      "Myogener Mechanismus (schnell, Sekunden): erhöhter transmuraler Druck dehnt die glatte Muskulatur der Vas afferens → druckabhängige Kontraktion (myogene Vasokonstriktion)",
      "Die myogene Vasokonstriktion begrenzt den Anstieg von renalem Blutfluss (RBF) und glomerulärem Filtrationsdruck weitgehend, aber nicht vollständig",
      "Der geringe Rest-Anstieg der GFR erhöht die tubuläre Flussrate und die NaCl-Konzentration am distalen Tubulus (Macula densa) – tubuloglomeruläre Rückkopplung (TGF), etwas langsamer als der myogene Mechanismus",
      "Macula-densa-Zellen detektieren die erhöhte NaCl-Konzentration und setzen parakrine Botenstoffe (v.a. ATP/Adenosin) frei",
      "Diese Botenstoffe bewirken über den juxtaglomerulären Apparat eine zusätzliche Konstriktion der benachbarten Vas afferens",
      "Zusammenspiel von myogenem Mechanismus und TGF hält renalen Blutfluss und GFR über den gesamten Autoregulationsbereich nahezu konstant",
      "Außerhalb des Autoregulationsbereichs (MAP <80 oder >180mmHg) versagt die Autoregulation → RBF und GFR werden direkt druckabhängig"
    ]
  },
  {
    id: "phys-saeure-basen-kompensation",
    title: "Kompensationsmechanismen bei metabolischer Azidose",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Winter-Formel",
    steps: [
      "Primäre Störung: vermehrter H+-Anfall oder HCO3--Verlust (z.B. Laktatazidose, Ketoazidose, Diarrhoe) → erniedrigtes Serum-HCO3- und erniedrigter pH",
      "Sofortpufferung (Sekunden): extrazelluläres Bicarbonat-Puffersystem bindet überschüssige H+-Ionen, zusätzlich intrazelluläre Puffer (Proteine, Phosphat, Knochen) im Austausch gegen Kalium",
      "Periphere (Glomus caroticum/aorticum) und zentrale Chemorezeptoren registrieren den erniedrigten pH/erhöhte H+-Konzentration",
      "Respiratorische Kompensation (Minuten bis Stunden): gesteigerter Atemantrieb → Hyperventilation (Kussmaul-Atmung) → Abfall des PaCO2 gemäß Winter-Formel",
      "Respiratorische Kompensation bleibt unvollständig, der pH normalisiert sich nicht vollständig; die renale Kompensation setzt langsamer ein (Stunden bis Tage)",
      "Renale Kompensation: gesteigerte H+-Sekretion durch die Schaltzellen des Sammelrohrs (H+-ATPase) mit vermehrter Ausscheidung als titrierbare Säure und Ammonium (NH4+)",
      "Renale Kompensation: gesteigerte Rückresorption und Neubildung von HCO3- im proximalen Tubulus (Ammoniogenese liefert neues Bicarbonat)",
      "Über Tage etabliert sich ein neues Fließgleichgewicht: pH nahezu normalisiert bei weiterhin erniedrigtem HCO3- und kompensatorisch erniedrigtem PaCO2 (kompensierte metabolische Azidose)"
    ]
  },
  {
    id: "phys-cushing-kaskade",
    title: "Cushing-Reflex-Kaskade bei erhöhtem Hirndruck",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Monro-Kellie-Doktrin",
    steps: [
      "Intrakranielle Volumenzunahme (z.B. Hämatom, Ödem, Tumor) → nach Monro-Kellie-Doktrin zunächst Kompensation durch Verdrängung von Liquor und venösem Blut",
      "Kompensationsreserve erschöpft → intrakranieller Druck (ICP) steigt deutlich an",
      "Zerebraler Perfusionsdruck (CPP = MAP − ICP) fällt ab → zerebrale Minderperfusion und Ischämie, insbesondere im Hirnstamm/Medulla oblongata",
      "Ischämie der vasomotorischen Zentren in der Medulla löst eine massive sympathische Aktivierung aus (Cushing-Reflex)",
      "Systemischer Blutdruckanstieg (Hypertonie) zur Wiederherstellung des zerebralen Perfusionsdrucks",
      "Barorezeptoren in Karotissinus/Aortenbogen registrieren den Blutdruckanstieg → reflektorische vagale Bradykardie",
      "Fortschreitende Ischämie/Kompression der Atemzentren im Hirnstamm → unregelmäßige, ataktische Atmung (bis Apnoe)",
      "Cushing-Trias komplett (Hypertonie, Bradykardie, unregelmäßige Atmung) → Warnzeichen einer drohenden Herniation, sofortige Intervention notwendig"
    ]
  },
  {
    id: "phys-gerinnungskaskade",
    title: "Gerinnungskaskade (klassisches Modell)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Ganong's Review of Medical Physiology",
    steps: [
      "Gefäßverletzung → subendotheliales Kollagen und Tissue Factor (Faktor III) werden exponiert, gleichzeitig lokale Vasokonstriktion",
      "Extrinsischer Weg: Tissue Factor bindet mit Ca2+ Faktor VIIa → aktiviert Faktor X zu Xa (physiologisch der schnellere Trigger)",
      "Intrinsischer Weg (Kontaktaktivierung): Faktor XII wird durch Kontakt mit negativ geladener Oberfläche zu XIIa aktiviert → aktiviert Faktor XI zu XIa → aktiviert Faktor IX zu IXa",
      "Faktor IXa bildet mit Faktor VIIIa als Kofaktor und Ca2+ auf der Thrombozytenoberfläche den Tenase-Komplex → aktiviert zusätzlich Faktor X zu Xa",
      "Gemeinsamer Weg: Faktor Xa bildet mit Faktor Va, Ca2+ und Phospholipiden den Prothrombinase-Komplex → wandelt Prothrombin (Faktor II) in Thrombin (IIa) um",
      "Thrombin spaltet Fibrinogen unter Freisetzung von Fibrinopeptiden zu Fibrinmonomeren",
      "Fibrinmonomere polymerisieren spontan zu einem löslichen Fibrinnetz",
      "Thrombin aktiviert Faktor XIII zu XIIIa, der die Fibrinfasern kovalent quervernetzt → stabiles, unlösliches Fibringerinnsel",
      "Hinweis: Klinisch genauer beschreibt heute das zellbasierte Modell (Initiierung auf TF-tragenden Zellen, Amplifikation/Propagation auf der Thrombozytenoberfläche) den tatsächlichen Ablauf in vivo; das klassische Kaskadenmodell bleibt aber die Standard-Lehr- und Prüfungsdarstellung (u.a. für die PT/aPTT-Interpretation)"
    ]
  },
  {
    id: "phys-neuromuskulaere-endplatte",
    title: "Neuromuskuläre Erregungsübertragung (motorische Endplatte)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Miller's Anesthesia",
    steps: [
      "Aktionspotential erreicht die präsynaptische Nervenendigung des Alpha-Motoneurons → spannungsabhängige Ca2+-Kanäle öffnen sich, Ca2+-Einstrom",
      "Ca2+-Einstrom löst Fusion Acetylcholin-gefüllter synaptischer Vesikel mit der präsynaptischen Membran aus → ACh-Freisetzung in den synaptischen Spalt (Exozytose)",
      "ACh diffundiert durch den Spalt und bindet an nikotinerge ACh-Rezeptoren vom Muskeltyp (N_M, Pentamer (α1)2β1δε) auf der postsynaptischen Endplattenmembran",
      "N_M-Rezeptor ist ein ligandengesteuerter, unselektiver Kationenkanal → Bindung öffnet den Kanal, Na+-Einstrom überwiegt gegenüber K+-Ausstrom → lokale Depolarisation (Endplattenpotential, EPP)",
      "Überschreitet das EPP die Schwelle, öffnen benachbarte spannungsabhängige Na+-Kanäle → fortgeleitetes Aktionspotential entlang des Sarkolemms und in die T-Tubuli",
      "Depolarisation der T-Tubuli aktiviert Dihydropyridin-Rezeptoren (DHPR), die mechanisch an Ryanodin-Rezeptoren (RyR1) des sarkoplasmatischen Retikulums gekoppelt sind → Ca2+-Freisetzung ins Zytosol",
      "Zytosolisches Ca2+ bindet Troponin C → Tropomyosin gibt die Myosin-Bindungsstellen am Aktin frei → Querbrückenzyklus (Aktin-Myosin-Interaktion unter ATP-Verbrauch) → Muskelkontraktion",
      "ACh wird durch Acetylcholinesterase im synaptischen Spalt rasch hydrolysiert → Beendigung der Rezeptorstimulation, Repolarisation – Angriffspunkt depolarisierender (Succinylcholin) und nichtdepolarisierender Muskelrelaxanzien am N_M-Rezeptor"
    ]
  },
  {
    id: "phys-sympathikus-kaskade",
    title: "Sympathische Signalkaskade – Noradrenalin und adrenerge Rezeptoren",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Ganong's Review of Medical Physiology",
    steps: [
      "Auslöser: Aktivierung sympathischer Zentren (z.B. Barorezeptorreflex, Stress, Hypovolämie) → präganglionäre cholinerge Neurone erregen über nikotinerge Rezeptoren (N_N) postganglionäre sympathische Neurone",
      "Postganglionäre sympathische Endigungen setzen Noradrenalin frei (Nebennierenmark: überwiegend Adrenalin auf humoralem Weg)",
      "α1-Rezeptoren (Gq-gekoppelt, glatte Gefäßmuskulatur) → Phospholipase C, IP3/DAG, Ca2+-Anstieg → Vasokonstriktion",
      "α2-Rezeptoren (Gi-gekoppelt, präsynaptisch an noradrenergen Endigungen sowie zentral) → Hemmung der Adenylatzyklase → negative Rückkopplung, drosselt die weitere Noradrenalin-Freisetzung",
      "β1-Rezeptoren (Gs-gekoppelt, v.a. Myokard und juxtaglomeruläre Zellen) → Adenylatzyklase-Aktivierung, cAMP-Anstieg, PKA → gesteigerte Herzfrequenz, Kontraktilität und Reninfreisetzung",
      "β2-Rezeptoren (Gs-gekoppelt, glatte Muskulatur der Bronchien und Skelettmuskelgefäße) → cAMP-vermittelte Relaxation → Bronchodilatation und Vasodilatation im Skelettmuskel",
      "Nettoeffekt: Anstieg von Herzfrequenz, Kontraktilität und peripherem Widerstand (α1 dominiert in den meisten Gefäßbetten), gleichzeitig Bronchodilatation und Umverteilung des Blutflusses zugunsten der Skelettmuskulatur",
      "Terminierung: Wiederaufnahme von Noradrenalin in die präsynaptische Endigung (Uptake-1) sowie enzymatischer Abbau durch MAO/COMT beenden die Rezeptorstimulation"
    ]
  },
  {
    id: "phys-parasympathikus-kaskade",
    title: "Parasympathische (vagale) Signalkaskade – Acetylcholin und muskarinerge Rezeptoren",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Ganong's Review of Medical Physiology",
    steps: [
      "Auslöser: Aktivierung vagaler/parasympathischer Kerne (Nucleus ambiguus, Nucleus dorsalis nervi vagi) durch afferente Signale (z.B. Barorezeptorreflex bei Blutdruckanstieg)",
      "Präganglionäre cholinerge Fasern setzen Acetylcholin frei, das an nikotinerge Rezeptoren (N_N) im Ganglion bindet und das kurze postganglionäre Neuron erregt",
      "Postganglionäre parasympathische Endigungen setzen Acetylcholin in unmittelbarer Nähe des Zielorgans frei (kurze Diffusionsstrecke)",
      "M2-Rezeptoren (Gi-gekoppelt, Sinusknoten/AV-Knoten/Vorhofmyokard) → Hemmung der Adenylatzyklase, Öffnung von GIRK-Kaliumkanälen → Hyperpolarisation → Abnahme von Herzfrequenz und Erregungsleitung",
      "M3-Rezeptoren (Gq-gekoppelt, glatte Muskulatur von Bronchien, Gastrointestinaltrakt, Blase, sowie exokrine Drüsen) → Phospholipase C, Ca2+-Anstieg → Kontraktion glatter Muskulatur (Bronchokonstriktion, gesteigerte Darmmotilität) und gesteigerte Drüsensekretion",
      "M1-Rezeptoren (Gq-gekoppelt, v.a. ZNS und Magenschleimhaut/enterisches Nervensystem) → verstärken über Gq/PLC die vagal vermittelte Magensäuresekretion",
      "Nettoeffekt: Bradykardie, Bronchokonstriktion, gesteigerte gastrointestinale Motilität und Sekretion, Miosis – funktioneller Gegenspieler der sympathischen Kaskade",
      "Terminierung: rasche Hydrolyse von Acetylcholin durch Acetylcholinesterase im synaptischen Spalt beendet die Rezeptorstimulation"
    ]
  },
  {
    id: "phys-nozizeption",
    title: "Nozizeption – vom peripheren Reiz zur zentralen Schmerzwahrnehmung",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Miller's Anesthesia",
    steps: [
      "Peripherer noxischer Reiz (mechanisch, thermisch, chemisch) aktiviert freie Nervenendigungen (Nozizeptoren) → schnell leitende, dünn myelinisierte Aδ-Fasern (scharfer Erstschmerz) und langsam leitende unmyelinisierte C-Fasern (dumpfer Zweitschmerz)",
      "Nozizeptive Afferenzen ziehen ins Hinterhorn des Rückenmarks und enden v.a. in Lamina I und II (Substantia gelatinosa)",
      "Gate-Control-Mechanismus im Hinterhorn: Aktivität dicker, schnell leitender Aβ-Fasern (Berührung/Vibration) erregt inhibitorische Interneurone der Substantia gelatinosa → präsynaptische Hemmung der nozizeptiven Übertragung („Tor“ schließt sich); überwiegende C-Faser-Aktivität öffnet das Tor",
      "Ohne ausreichende Hemmung erfolgt Umschaltung auf das zweite Neuron, dessen Axon kreuzt und im Tractus spinothalamicus lateralis aufsteigt",
      "Der Tractus spinothalamicus projiziert zum Thalamus (v.a. Nucleus ventralis posterolateralis) als Umschaltstation",
      "Thalamokortikale Projektion zum somatosensorischen Kortex (Lokalisation, Intensität) sowie zu limbischen Strukturen (Gyrus cinguli, Insula) für die affektiv-emotionale Schmerzkomponente",
      "Absteigende Hemmung: periaquäduktales Grau (PAG) aktiviert über die Formatio reticularis (Nucleus raphe magnus, serotonerg; Locus coeruleus, noradrenerg) absteigende Bahnen zum Hinterhorn",
      "Absteigende serotonerge/noradrenerge Bahnen und endogene Opioide (Enkephaline) hemmen präsynaptisch die nozizeptive Transmitterfreisetzung im Hinterhorn – Angriffspunkt von Opioiden, α2-Agonisten und SNRI"
    ]
  },
  {
    id: "phys-chemorezeption-atemantrieb",
    title: "Atemantrieb – zentrale und periphere Chemorezeption",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Ganong's Review of Medical Physiology",
    steps: [
      "Zentrale Chemorezeptoren an der ventralen Medulla oblongata werden nicht direkt durch arterielles CO2, sondern durch den pH der umgebenden Liquorflüssigkeit stimuliert",
      "CO2 diffundiert leicht durch die Blut-Hirn-Schranke ins Liquor, wird dort durch Carboanhydrase zu H2CO3 hydratisiert, das zu H+ und HCO3- dissoziiert",
      "Da die Liquor-Pufferkapazität gering ist, führt bereits ein geringer PaCO2-Anstieg zu deutlichem Liquor-pH-Abfall → starke Stimulation der zentralen Chemorezeptoren (Hauptanteil, ca. 80% des CO2-Atemantriebs)",
      "Periphere Chemorezeptoren (Glomus caroticum an der Karotisbifurkation, Glomera aortica) enthalten Typ-I-(Glomus-)Zellen, die primär den arteriellen PaO2 detektieren (relevant v.a. bei ausgeprägter Hypoxämie <60mmHg), zusätzlich PaCO2 und pH",
      "Hypoxie hemmt sauerstoffsensitive Kaliumkanäle (u.a. TASK) der Glomuszellen → Membrandepolarisation → Öffnung spannungsabhängiger Ca2+-Kanäle, Ca2+-Einstrom → Transmitterfreisetzung (v.a. Dopamin)",
      "Afferente Signale der Glomuszellen laufen über den N. glossopharyngeus (Karotiskörper) bzw. N. vagus (Aortenkörper) zum Nucleus tractus solitarius (NTS) in der Medulla",
      "Zentrale und periphere Signale konvergieren auf die medullären Atemzentren (dorsale/ventrale Atemgruppe) → Anpassung von Atemfrequenz und Atemzugvolumen",
      "Ergebnis: CO2/pH-Anstieg steigert vorrangig über die zentralen Chemorezeptoren die Ventilation, ausgeprägte Hypoxämie steigert zusätzlich über die peripheren Chemorezeptoren den Atemantrieb (einziger Mechanismus, der bei chronischer CO2-Retention den Restantrieb aufrechterhält – „hypoxic drive“)"
    ]
  },
  {
    id: "phys-insulin-glukagon",
    title: "Blutzuckerregulation – Insulin-Glukagon-Regelkreis",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; Ganong's Review of Medical Physiology",
    steps: [
      "Anstieg der Blutglukose (z.B. postprandial) → Aufnahme in pankreatische Betazellen über den insulinunabhängigen Glukosetransporter GLUT2",
      "Glukokinase phosphoryliert Glukose als geschwindigkeitsbestimmender Schritt der Glykolyse → gesteigerte ATP-Produktion, Anstieg des ATP/ADP-Verhältnisses",
      "ATP-Anstieg schließt ATP-abhängige Kaliumkanäle (K_ATP, Kir6.2/SUR1) der Betazellmembran → Membrandepolarisation",
      "Depolarisation öffnet spannungsabhängige Ca2+-Kanäle → Ca2+-Einstrom löst Exozytose insulinhaltiger Sekretgranula aus",
      "Insulin bindet an den Insulinrezeptor (Tyrosinkinase-Rezeptor) an Leber-, Muskel- und Fettzellen → Translokation von GLUT4-Transportern an die Zellmembran → gesteigerte Glukoseaufnahme, Glykogen-/Fettsynthese, Hemmung der hepatischen Glukoseproduktion",
      "Abfall der Blutglukose (z.B. Fasten, Hypoglykämie) hemmt die Insulinfreisetzung und stimuliert die pankreatischen Alphazellen zur Glukagonfreisetzung",
      "Glukagon bindet an Gs-gekoppelte Glukagonrezeptoren der Hepatozyten → Adenylatzyklase-Aktivierung, cAMP-Anstieg, PKA → gesteigerte Glykogenolyse und Glukoneogenese, gehemmte Glykogensynthese",
      "Bei ausgeprägter/anhaltender Hypoglykämie zusätzliche sympathoadrenerge Gegenregulation: Adrenalin (über β2-Rezeptoren) verstärkt Glykogenolyse und Lipolyse, Cortisol und Wachstumshormon wirken protrahiert glukoseanhebend"
    ]
  },
  {
    id: "phys-sepsis-kaskade",
    title: "Immunologisch-inflammatorische Kaskade bei Sepsis",
    category: "Physiologie-Mechanismen",
    source: "Surviving Sepsis Campaign Hintergrundliteratur; aktuelle Sepsis-Pathophysiologie-Reviews (PMC)",
    steps: [
      "Pathogen-assoziierte molekulare Muster (PAMPs, z.B. bakterielles Lipopolysaccharid) oder Damage-assoziierte Muster (DAMPs aus geschädigtem Gewebe) werden von Toll-like-Rezeptoren (v.a. TLR4 für LPS) auf Makrophagen/Monozyten erkannt",
      "TLR4-Aktivierung löst über Adapterproteine (MyD88/TRIF) eine intrazelluläre Signalkaskade aus, die den Transkriptionsfaktor NF-κB aktiviert und in den Zellkern transloziert",
      "NF-κB induziert die Transkription proinflammatorischer Zytokine, v.a. TNF-α, IL-1β und IL-6, die in die Zirkulation freigesetzt werden",
      "TNF-α und IL-6 aktivieren das Gefäßendothel → Hochregulation von Adhäsionsmolekülen (Selektine, ICAM/VCAM) → Leukozytenadhäsion und -transmigration ins Gewebe",
      "Endotheliale Aktivierung induziert vermehrte NO-Freisetzung (iNOS) sowie Störung der endothelialen Barriere (VE-Cadherin-Dissoziation) → generalisierte Vasodilatation und kapilläres Leck",
      "Parallel Aktivierung der Gerinnungskaskade durch Tissue-Factor-Expression auf aktivierten Monozyten/Endothelzellen bei gleichzeitig gehemmter Fibrinolyse → Mikrothrombosierung",
      "Kombination aus Vasodilatation, relativer und absoluter Hypovolämie (kapilläres Leck) sowie Mikrozirkulationsstörung durch Mikrothromben führt zu Gewebehypoperfusion",
      "Anhaltende Hypoperfusion und mitochondriale Dysfunktion münden in Multiorgandysfunktion (septischer Schock) – die zelluläre Grundlage der bereits klinisch behandelten Sepsis-Therapie"
    ]
  },
  {
    id: "phys-hpa-achse",
    title: "HPA-Achse (Hypothalamus-Hypophysen-Nebennierenrinden-Achse) bei chirurgischem Stress",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology; aktuelle Reviews zur perioperativen Kortisol-Stressantwort",
    steps: [
      "Chirurgisches Trauma/Stress (Schmerz, Gewebeschädigung, Hypovolämie) aktiviert afferente neurale und humorale Signale (u.a. Zytokine) zum Hypothalamus",
      "Der Nucleus paraventricularis des Hypothalamus setzt Corticotropin-Releasing-Hormon (CRH, mit Vasopressin als Kosekretagogum) ins Pfortadersystem der Hypophyse frei",
      "CRH bindet an Gs-gekoppelte CRH-Rezeptoren der kortikotropen Zellen im Hypophysenvorderlappen → cAMP-Anstieg → Freisetzung von ACTH aus Proopiomelanocortin (POMC)",
      "ACTH gelangt über die Blutbahn zur Zona fasciculata der Nebennierenrinde und bindet dort an Melanocortin-2-Rezeptoren (Gs-gekoppelt)",
      "ACTH-Bindung steigert über cAMP/PKA die Cholesterin-Verfügbarkeit (StAR-Protein) und die Steroidsynthese → gesteigerte Kortisolausschüttung",
      "Kortisol wirkt über intrazelluläre Glukokortikoidrezeptoren (zytosolisch, nach Bindung Translokation in den Zellkern) genomisch: Steigerung der Glukoneogenese, permissive Wirkung auf Katecholamine, Immunmodulation/Entzündungshemmung",
      "Kortisol hemmt im Sinne einer negativen Rückkopplung sowohl die hypothalamische CRH- als auch die hypophysäre ACTH-Freisetzung (kurzer und langer Feedback-Loop)",
      "Bei anhaltendem chirurgischem Stress überwiegt zunächst der positive Antrieb (Schmerz/Zytokine) über die Feedback-Hemmung, sodass die Kortisolspiegel postoperativ über Stunden bis Tage erhöht bleiben – Grundlage der perioperativen Stressantwort und Substitutionsindikation bei NNR-Insuffizienz"
    ]
  },
  {
    id: "phys-frank-starling",
    title: "Frank-Starling-Mechanismus und Regulation des Herzzeitvolumens (Preload, Afterload, Kontraktilität)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Herz als Pumpe; Herzzeitvolumen und venöser Rückstrom); Ganong's Review of Medical Physiology",
    steps: [
      "Auslöser: gesteigerter venöser Rückstrom (z.B. Volumengabe, Beinhochlagerung) → Zunahme des enddiastolischen Ventrikelvolumens (Preload/Vorlast)",
      "Die vermehrte Ventrikelfüllung dehnt die Myokardfasern → Sarkomerlänge nähert sich dem Optimum (ca. 2,0–2,2 µm) mit günstigerer Aktin-Myosin-Überlappung",
      "Längenabhängige Aktivierung: Dehnung erhöht die Ca2+-Empfindlichkeit der Myofilamente (u.a. über Titin und verringerten Filamentabstand) → mehr Querbrücken pro Schlag",
      "Ergebnis: kräftigere Kontraktion und größeres Schlagvolumen – das Herz wirft aus, was ihm zufließt; so wird das Auswurfvolumen von rechtem und linkem Ventrikel aufeinander abgestimmt",
      "Afterload (Nachlast = systolische Wandspannung, nach Laplace proportional zu Druck × Radius / Wanddicke): ein Anstieg senkt bei gleicher Vorlast das Schlagvolumen – besonders ausgeprägt beim insuffizienten Ventrikel",
      "Kontraktilität (Inotropie, vorlastunabhängig): Sympathikus über β1 → cAMP/PKA → gesteigerter Ca2+-Einstrom (L-Typ) und schnellere SR-Wiederaufnahme (Phospholamban/SERCA) → Frank-Starling-Kurve verschiebt sich nach oben/links",
      "Herzzeitvolumen = Herzfrequenz × Schlagvolumen; im Fließgleichgewicht entspricht es dem venösen Rückstrom, der vom Gradienten zwischen mittlerem systemischem Füllungsdruck und rechtsatrialem Druck bestimmt wird (Guyton-Modell)",
      "Grenze: auf dem flachen Teil der Kurve (z.B. Herzinsuffizienz, bereits optimale Füllung) steigert weiteres Volumen das Schlagvolumen kaum, erhöht aber die Füllungsdrücke (Stauung) – physiologische Grundlage der Volumenreagibilität (Fluid Responsiveness)"
    ]
  },
  {
    id: "phys-reizleitung-herz",
    title: "Erregungsbildung und Erregungsleitung des Herzens (SA-Knoten → AV-Knoten → His-Bündel → Purkinje-Fasern)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Rhythmische Erregung des Herzens); Ganong's Review of Medical Physiology",
    steps: [
      "Sinusknoten (Wand des rechten Vorhofs nahe der Einmündung der V. cava superior) besitzt kein stabiles Ruhepotential (ca. −55 bis −60mV): spontane diastolische Depolarisation (Phase 4) v.a. durch den Funny-Strom (If, HCN-Kanäle) und T-Typ-Ca2+-Kanäle",
      "Bei Erreichen der Schwelle (ca. −40mV) öffnen L-Typ-Ca2+-Kanäle → langsamer, Ca2+-getragener Aufstrich des Aktionspotentials; Repolarisation durch K+-Ausstrom – der Sinusknoten ist als schnellster Schrittmacher der primäre Taktgeber (Ruhefrequenz unter vagalem Grundtonus meist 60–100/min)",
      "Die Erregung breitet sich über das Vorhofmyokard (und bevorzugte internodale Leitungswege) aus → Vorhofdepolarisation (P-Welle) und Vorhofkontraktion",
      "AV-Knoten: einzige physiologische elektrische Verbindung zwischen Vorhöfen und Kammern (das bindegewebige Herzskelett isoliert sonst); sehr langsame Leitung → Verzögerung um ca. 0,1s (Hauptanteil der PQ-Zeit)",
      "Funktion der AV-Verzögerung: Vorhofkontraktion kann die Kammerfüllung vor der Ventrikelsystole abschließen; zugleich Schutz der Kammern vor sehr hohen Vorhoffrequenzen (z.B. Vorhofflimmern)",
      "His-Bündel → rechter und linker Tawara-Schenkel entlang des Kammerseptums → Purkinje-Fasern mit sehr hoher Leitungsgeschwindigkeit (ca. 1,5–4m/s)",
      "Nahezu synchrone Depolarisation der Kammermuskulatur von endokardial nach epikardial und von der Herzspitze zur Basis (QRS-Komplex) → koordinierte, effektive Kammerkontraktion",
      "Hierarchie der Automatie: fällt der Sinusknoten aus, übernehmen sekundäre (AV-Knoten/junktional, ca. 40–60/min) bzw. tertiäre Zentren (Purkinje-/Kammerersatzrhythmus, ca. 15–40/min); normalerweise werden sie durch die schnellere Sinusfrequenz unterdrückt (Overdrive-Suppression)",
      "Autonome Modulation: Sympathikus (β1) steigert If und Ca2+-Ströme → steilere Phase 4, höhere Frequenz, schnellere AV-Überleitung; Vagus (M2) öffnet K+-Kanäle (IK,ACh) und vermindert If → Hyperpolarisation, Frequenzabnahme, verlängerte AV-Überleitung"
    ]
  },
  {
    id: "phys-koronare-autoregulation",
    title: "Koronare Durchblutungsregulation (Autoregulation und metabolische Kopplung)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Koronarkreislauf); Duncker & Bache, Physiol Rev 2008 (Regulation of coronary blood flow during exercise); Goodwill et al., Compr Physiol 2017",
    steps: [
      "Ausgangslage: das Myokard extrahiert bereits in Ruhe einen sehr hohen Anteil des angebotenen Sauerstoffs (ca. 70 %, koronarvenöse Sättigung entsprechend niedrig) → ein erhöhter O2-Bedarf kann kaum über mehr Extraktion, sondern fast nur über mehr Koronarfluss gedeckt werden",
      "Auslöser: gesteigerter myokardialer O2-Verbrauch (Herzfrequenz, Kontraktilität, Wandspannung) oder Abfall des koronaren Perfusionsdrucks",
      "Metabolische Regulation (dominierend): Anfall vasodilatierender Metaboliten und Signale – Adenosin (aus ATP-Abbau), Abfall des Gewebe-PO2, Anstieg von CO2/H+, Öffnung ATP-abhängiger K+-Kanäle (K_ATP) der glatten Gefäßmuskulatur",
      "Diese Signale dilatieren die Widerstandsarteriolen → Koronarfluss steigt proportional zum O2-Bedarf (Kopplung von Angebot und Verbrauch)",
      "Druck-Autoregulation: myogene Reaktion der Arteriolen plus metabolische Faktoren halten den Koronarfluss über einen mittleren Perfusionsdruckbereich (etwa 60–140mmHg, Literaturangaben schwanken) weitgehend konstant; darunter wird der Fluss druckpassiv",
      "Endothelvermittelte, flussabhängige Dilatation (NO, Prostazyklin) vergrößert zusätzlich die vorgeschalteten Leitungsgefäße",
      "Neurale Einflüsse sind untergeordnet: α1-vermittelte Vasokonstriktion wird unter Belastung von der metabolischen Vasodilatation überspielt; indirekt steigert der Sympathikus den Fluss über den erhöhten Stoffwechsel",
      "Mechanische Besonderheit: der linke Ventrikel wird überwiegend in der Diastole perfundiert (systolische Kompression intramyokardialer Gefäße) – Koronarperfusionsdruck ≈ diastolischer Aortendruck − LVEDP; Tachykardie (verkürzte Diastole), Hypotonie und hoher LVEDP gefährden v.a. das Subendokard",
      "Bei maximaler Vasodilatation ist die Koronarreserve erschöpft (z.B. distal einer hochgradigen Stenose) → Fluss nur noch druckabhängig, Ischämie bei weiterem Druckabfall oder Bedarfsanstieg"
    ]
  },
  {
    id: "phys-hypoxische-vasokonstriktion",
    title: "Hypoxische pulmonale Vasokonstriktion (Euler-Liljestrand-Mechanismus) und V/Q-Matching",
    category: "Physiologie-Mechanismen",
    source: "Sylvester et al., Physiol Rev 2012 (Hypoxic pulmonary vasoconstriction); Lumb & Slinger, Anesthesiology 2015; Nunn's Applied Respiratory Physiology",
    steps: [
      "Auslöser: alveoläre Hypoxie in einer schlecht ventilierten Lungenregion (z.B. Atelektase, Pneumonie, nicht beatmeter Lungenflügel bei Ein-Lungen-Ventilation) – der alveoläre PO2 ist der wichtigste Reiz, der gemischtvenöse PO2 trägt weniger bei",
      "Sensor: die glatten Muskelzellen der kleinen präkapillären Pulmonalarterien selbst; die mitochondriale Atmungskette verändert bei Hypoxie die Bildung reaktiver Sauerstoffspezies/den Redoxzustand der Zelle",
      "Das veränderte Redoxsignal hemmt sauerstoffsensitive spannungsabhängige K+-Kanäle (u.a. Kv1.5, Kv2.1) → Membrandepolarisation",
      "Depolarisation öffnet L-Typ-Ca2+-Kanäle, zusätzlich Ca2+-Freisetzung aus dem SR und Ca2+-Sensitisierung (Rho-Kinase) → Kontraktion der präkapillären Widerstandsgefäße",
      "Lokale Vasokonstriktion leitet Blut aus der hypoxischen Region in gut ventilierte Lungenareale um → verbessertes Ventilations-Perfusions-Verhältnis, Verminderung des Shunts und der arteriellen Hypoxämie",
      "Zeitverlauf: erste Phase innerhalb von Sekunden mit Maximum nach etwa 15 Minuten; bei anhaltender Hypoxie zweite, langsamere Phase (etwa ab 30–60 Minuten) mit weiterer Widerstandszunahme",
      "Globale alveoläre Hypoxie (Höhe, generalisierte Hypoventilation) → HPV in der gesamten Lunge → Anstieg des pulmonalvaskulären Widerstands, pulmonale Hypertonie und Rechtsherzbelastung (Extremform: Höhenlungenödem; chronisch: Gefäßumbau)",
      "Modulation: volatile Anästhetika hemmen HPV dosisabhängig (moderne Substanzen bei ≤1 MAC nur gering), ebenso systemische Vasodilatatoren (z.B. Nitroprussid, Nitroglycerin, Ca2+-Antagonisten) und Alkalose/Hypokapnie; i.v.-Anästhetika wie Propofol beeinflussen HPV kaum – relevant für die Oxygenierung bei Ein-Lungen-Ventilation"
    ]
  },
  {
    id: "phys-o2-bindungskurve",
    title: "Sauerstoff-Hämoglobin-Bindungskurve und ihre Verschiebung (Bohr-Effekt, 2,3-BPG, Temperatur, pH)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Transport von O2 und CO2 im Blut); West's Respiratory Physiology",
    steps: [
      "Hämoglobin (HbA, α2β2) bindet an seinen vier Häm-Gruppen (Fe2+) je ein O2-Molekül; kooperative Bindung – Übergang von der T-Form (tense, niedrige Affinität) zur R-Form (relaxed, hohe Affinität) – erzeugt die sigmoidale Bindungskurve",
      "Kennpunkte (normale Bedingungen): PaO2 ca. 100mmHg → SaO2 ca. 97–98 %; PO2 ca. 60mmHg → SaO2 ca. 90 %; gemischtvenös PO2 ca. 40mmHg → SvO2 ca. 75 %; P50 (PO2 bei 50 % Sättigung) ca. 26–27mmHg",
      "Flacher oberer Kurventeil: sichere O2-Beladung in der Lunge trotz Schwankungen des alveolären PO2; steiler mittlerer Teil: große O2-Abgabe im Gewebe bei nur geringem PO2-Abfall",
      "Rechtsverschiebung (P50 ↑, Affinität ↓): Azidose/H+-Anstieg, PCO2-Anstieg, Temperaturanstieg und erhöhtes 2,3-BPG (bindet an die β-Ketten des Desoxy-Hb und stabilisiert die T-Form) → erleichterte O2-Abgabe",
      "Bohr-Effekt im Gewebe: metabolisch gebildetes CO2 und H+ verschieben die Kurve nach rechts → vermehrte O2-Abgabe; in der Lunge verschiebt die CO2-Abatmung die Kurve nach links → verbesserte O2-Aufnahme (komplementär: Haldane-Effekt – Desoxy-Hb bindet mehr CO2 und H+)",
      "Linksverschiebung (P50 ↓, Affinität ↑): Alkalose/Hypokapnie (z.B. Hyperventilation), Hypothermie, erniedrigtes 2,3-BPG (gelagerte Erythrozytenkonzentrate), fetales Hämoglobin, CO-Hb und Met-Hb → hohe Sättigung, aber erschwerte O2-Abgabe ans Gewebe",
      "Adaptation über 2,3-BPG: chronische Hypoxie (Höhe, Anämie) steigert die erythrozytäre 2,3-BPG-Bildung → Rechtsverschiebung; transfundierte Erythrozyten regenerieren ihr in der Lagerung verlorenes 2,3-BPG erst über Stunden bis wenige Tage",
      "Klinische Bedeutung: O2-Gehalt CaO2 = (Hb × SaO2 × Hüfner-Zahl ca. 1,34–1,39ml O2/g Hb) + 0,003 × PaO2 (mmHg), O2-Angebot DO2 = HZV × CaO2 – die Lage der Kurve bestimmt, wie viel des transportierten O2 im Gewebe tatsächlich abgegeben wird (z.B. CO-Vergiftung: Linksverschiebung plus verminderte Transportkapazität)"
    ]
  },
  {
    id: "phys-adh-osmoregulation",
    title: "ADH/Vasopressin-vermittelte Osmoregulation (Wasserhaushalt)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Harnkonzentrierung, Regulation von Osmolarität und Natriumkonzentration); Bankir et al., J Intern Med 2017 (Vasopressin: physiology, assessment and osmosensation)",
    steps: [
      "Auslöser: Anstieg der Plasmaosmolalität (z.B. Wasserdefizit, Hypernatriämie) – sehr empfindlicher Regelkreis: bereits ca. 1 % Änderung führt zur Anpassung; Schwelle der ADH-Freisetzung etwa 280–285mOsm/kg",
      "Sensor: Osmorezeptoren in den zirkumventrikulären Organen der Lamina terminalis (v.a. Organum vasculosum laminae terminalis, OVLT, und Subfornikalorgan) ohne Blut-Hirn-Schranke registrieren die Hyperosmolalität",
      "Die Osmorezeptoren aktivieren magnozelluläre Neurone der Nuclei supraopticus und paraventricularis im Hypothalamus, die ADH bilden, entlang des Tractus hypothalamohypophysialis transportieren und aus dem Hypophysenhinterlappen freisetzen",
      "Nicht-osmotische Stimuli: arterielle Barorezeptoren und atriale Dehnungsrezeptoren bei Hypovolämie/Hypotonie (weniger empfindlich als die Osmoregulation, relevant etwa ab ca. 10 % Volumenverlust, dann aber sehr starke ADH-Freisetzung); außerdem Übelkeit, Schmerz, chirurgischer Stress, Hypoxie, Opioide → perioperativ häufig erhöhte ADH-Spiegel",
      "ADH bindet an V2-Rezeptoren (Gs-gekoppelt) der Hauptzellen im Sammelrohr → cAMP/PKA → Einbau von Aquaporin-2-Kanälen in die apikale Membran; Wasseraustritt basolateral über Aquaporin-3/-4 entlang des Gradienten zum hypertonen Nierenmark",
      "Zusätzlich steigert ADH die Harnstoffpermeabilität des inneren medullären Sammelrohrs (UT-A) und unterstützt so den osmotischen Gradienten im Nierenmark",
      "Ergebnis: Rückresorption freien Wassers, konzentrierter Harn (maximal ca. 1200mOsm/kg) mit kleinem Volumen; parallel Durstgefühl (Osmorezeptoren, zusätzlich Angiotensin II am Subfornikalorgan; Durstschwelle etwas höher als die ADH-Schwelle) → Wasseraufnahme",
      "Negative Rückkopplung: sinkende Osmolalität hemmt die ADH-Freisetzung → Aquaporin-2 wird endozytiert → Ausscheidung verdünnten Harns (minimal ca. 50mOsm/kg)",
      "Hohe ADH-Konzentrationen wirken zusätzlich über V1a-Rezeptoren (Gq-gekoppelt, glatte Gefäßmuskulatur) vasokonstriktorisch – Grundlage des Vasopressin-Einsatzes im vasoplegischen/septischen Schock; Störungen: SIADH (Hyponatriämie) bzw. Diabetes insipidus (zentral/renal)"
    ]
  },
  {
    id: "phys-kalium-homoeostase",
    title: "Kalium-Homöostase (interne Verteilung und renale Regulation)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Renale Regulation von Kalium, Calcium, Phosphat, Magnesium); Palmer & Clegg, Am J Kidney Dis 2019 (Core Curriculum Potassium Homeostasis)",
    steps: [
      "Verteilung: ca. 98 % des Körperkaliums liegen intrazellulär (ca. 140–150mmol/l), nur ca. 2 % extrazellulär (Serum ca. 3,5–5,0mmol/l); der Gradient wird von der Na+/K+-ATPase (3 Na+ hinaus, 2 K+ hinein) aufrechterhalten und bestimmt das Ruhemembranpotential – schon kleine Änderungen des Serum-K+ verändern die Erregbarkeit von Herz und Muskulatur",
      "Auslöser: K+-Belastung (Nahrung, Infusion, Zellzerfall) → Anstieg des Serum-K+",
      "Schnelle interne Bilanz (Minuten): Insulin aktiviert die Na+/K+-ATPase (v.a. Skelettmuskel und Leber) → K+-Verschiebung nach intrazellulär; ebenso β2-adrenerge Stimulation (Adrenalin, cAMP-vermittelt) und Aldosteron – therapeutisch genutzt mit Insulin/Glukose und β2-Mimetika",
      "Weitere Verschiebungsfaktoren: Alkalose verschiebt K+ nach intrazellulär, (v.a. mineralische) Azidose nach extrazellulär; Hyperosmolalität, Zelluntergang (Rhabdomyolyse, Hämolyse, Tumorlyse) und Succinylcholin (Depolarisation; normal ca. 0,5mmol/l Anstieg, massiv bei Rezeptor-Hochregulation) erhöhen das Serum-K+",
      "Langsamere externe Bilanz (Stunden): ca. 90 % der täglichen K+-Ausscheidung erfolgt renal – K+ wird frei filtriert, der Großteil im proximalen Tubulus (ca. 2/3) und im dicken aufsteigenden Henle-Schenkel (NKCC2) relativ konstant rückresorbiert",
      "Die eigentliche Feinregulation erfolgt im distalen Nephron (spätes distales Konvolut, Verbindungstubulus, kortikales Sammelrohr): Hauptzellen nehmen K+ basolateral über die Na+/K+-ATPase auf und sezernieren es apikal über ROMK- und flussabhängige BK-Kanäle; die Na+-Rückresorption über ENaC schafft das lumennegative Potential als Triebkraft",
      "Hyperkaliämie stimuliert direkt (unabhängig vom Renin-Angiotensin-System) die Zona glomerulosa → Aldosteron steigert ENaC-Aktivität, Na+/K+-ATPase und apikale K+-Kanäle → gesteigerte K+-Sekretion (negative Rückkopplung); zusätzlich fördern hoher distaler Na+-Zufluss und hoher Tubulusfluss die Sekretion",
      "Bei K+-Mangel wird die Sekretion gedrosselt und Typ-A-Schaltzellen resorbieren K+ über die apikale H+/K+-ATPase – die Niere spart Kalium jedoch weniger effizient als Natrium, daher entwickelt sich bei fehlender Zufuhr oder Verlusten (Diuretika, Erbrechen, Diarrhoe) leicht eine Hypokaliämie"
    ]
  },
  {
    id: "phys-zerebrale-autoregulation",
    title: "Regulation der Hirndurchblutung (Druck-Autoregulation, metabolische Kopplung, CO2-/O2-Reaktivität)",
    category: "Physiologie-Mechanismen",
    source: "Claassen et al., Physiol Rev 2021 (Regulation of cerebral blood flow in humans); Miller's Anesthesia (Zerebrale Physiologie); Guyton & Hall Physiology",
    steps: [
      "Ausgangslage: Das Gehirn (ca. 2 % des Körpergewichts) erhält ca. 15 % des HZV (Hirndurchblutung ca. 50ml/100g/min, CMRO2 ca. 3–3,5ml/100g/min) und hat kaum O2-/Glukosereserven → konstante Perfusion ist essenziell; zerebraler Perfusionsdruck CPP = MAP − ICP (bzw. − ZVD, falls höher)",
      "Druck-Autoregulation (myogen, Bayliss-Effekt): steigender Perfusionsdruck dehnt die Arteriolen → reflektorische Vasokonstriktion; fallender Druck → Vasodilatation; die Anpassung erfolgt innerhalb weniger Sekunden",
      "Autoregulationsbereich: klassisch ca. 50–150mmHg MAP (Lassen); neuere Daten zeigen ein schmaleres, individuell sehr variables Plateau, bei chronischer Hypertonie nach rechts verschoben; unterhalb → druckpassive Minderperfusion/Ischämie, oberhalb → Hyperperfusion, Störung der Blut-Hirn-Schranke, Hirnödem",
      "Metabolische Kopplung (neurovaskuläre Kopplung): gesteigerte neuronale Aktivität setzt lokal vasodilatierende Signale frei (u.a. K+, H+, Adenosin, NO, Prostanoide, Astrozyten-Signale) → Hirndurchblutung folgt dem Stoffwechsel (CMRO2 sinkt z.B. unter Hypothermie um ca. 6–7 % pro °C sowie unter Propofol/Barbituraten, steigt bei Krampfanfällen)",
      "CO2-Reaktivität: CO2 diffundiert frei über die Blut-Hirn-Schranke und senkt den perivaskulären pH → Vasodilatation; zwischen PaCO2 ca. 20–80mmHg nahezu linear ca. 1–2ml/100g/min pro mmHg (grob 2–4 % pro mmHg) – Hypokapnie konstringiert, Hyperkapnie dilatiert (Anstieg von zerebralem Blutvolumen und ICP)",
      "Adaptation: bei anhaltender Hypo-/Hyperventilation normalisiert sich der Liquor-pH über Stunden durch Anpassung des Liquor-Bicarbonats → Wirkung der Hyperventilation lässt nach (Rebound-Gefahr bei zu rascher Normalisierung); ausgeprägte Hypokapnie birgt Ischämierisiko",
      "O2-Reaktivität: oberhalb eines PaO2 von ca. 60mmHg bleibt die Hirndurchblutung weitgehend konstant; darunter steiler Anstieg der Hirndurchblutung durch hypoxische Vasodilatation",
      "Störung: Schädel-Hirn-Trauma, Subarachnoidalblutung, Schlaganfall und Sepsis können die Autoregulation aufheben (druckpassiver Fluss); volatile Anästhetika dilatieren dosisabhängig direkt und schwächen die Autoregulation v.a. oberhalb von ca. 1 MAC, Propofol erhält sie weitgehend – die CO2-Reaktivität bleibt unter Narkose meist erhalten"
    ]
  },
  {
    id: "phys-schilddruesen-achse",
    title: "Hypothalamus-Hypophysen-Schilddrüsen-Achse (inkl. Low-T3-Syndrom bei kritischer Erkrankung)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Schilddrüsenhormone); Van den Berghe, Thyroid 2014 (Non-thyroidal illness in the ICU); Endotext: The Non-Thyroidal Illness Syndrome",
    steps: [
      "Der Nucleus paraventricularis des Hypothalamus setzt Thyreotropin-Releasing-Hormon (TRH) in das hypophysäre Pfortadersystem frei",
      "TRH bindet an Gq-gekoppelte TRH-Rezeptoren der thyreotropen Zellen im Hypophysenvorderlappen → Freisetzung von TSH (Thyreotropin)",
      "TSH bindet an Gs-gekoppelte TSH-Rezeptoren der Thyreozyten → cAMP-Anstieg → Stimulation von Wachstum und allen Schritten der Hormonsynthese und -freisetzung",
      "Hormonsynthese: Iodidaufnahme über den basolateralen Na+/I−-Symporter (NIS), Oxidation und Einbau in Tyrosinreste des Thyreoglobulins durch die Thyreoperoxidase (TPO) → MIT/DIT, Kopplung zu T4 (DIT+DIT) und T3 (MIT+DIT), Speicherung im Kolloid",
      "Freisetzung: Endozytose und Proteolyse des Thyreoglobulins → Sekretion überwiegend von T4 (ca. 90 %), weniger T3; im Plasma zu >99 % proteingebunden (TBG, Transthyretin, Albumin), nur die freie Fraktion ist wirksam",
      "Periphere Aktivierung: Dejodasen Typ 1 (Leber, Niere) und Typ 2 (u.a. ZNS, Hypophyse, Muskulatur) wandeln T4 in das aktive T3 um (Großteil des zirkulierenden T3 entsteht so); Typ-3-Dejodase inaktiviert T4 zu reverse T3 (rT3) und T3 zu T2",
      "T3 bindet an nukleäre Schilddrüsenhormonrezeptoren → Gentranskription: Steigerung von Grundumsatz, O2-Verbrauch und Wärmebildung, gesteigerte β-adrenerge Empfindlichkeit des Herzens (positive Chrono-/Inotropie)",
      "Negative Rückkopplung: T3 (auch lokal in Hypophyse/Hypothalamus aus T4 über Typ-2-Dejodase gebildet) hemmt die TRH- und TSH-Freisetzung",
      "Kritische Erkrankung (Non-Thyroidal-Illness-/Low-T3-Syndrom): akut verminderte Typ-1- und gesteigerte Typ-3-Dejodase-Aktivität (u.a. zytokinvermittelt) → T3 ↓, rT3 ↑ bei normalem, nicht ansteigendem TSH; bei prolongierter Erkrankung zusätzlich zentral verminderte TRH-/TSH-Sekretion mit T4-Abfall (prognostisch ungünstig) – eine routinemäßige Hormonsubstitution wird nicht empfohlen"
    ]
  },
  {
    id: "phys-calcium-phosphat",
    title: "Calcium-Phosphat-Homöostase (Parathormon, Vitamin D, Calcitonin, FGF23)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Parathormon, Calcitonin, Calcium- und Phosphatstoffwechsel, Vitamin D); Ganong's Review of Medical Physiology",
    steps: [
      "Verteilung: ca. 99 % des Calciums liegen im Knochen (Hydroxylapatit); Plasma-Gesamtcalcium ca. 2,2–2,6mmol/l, davon ca. 50 % ionisiert (biologisch aktiv, ca. 1,1–1,3mmol/l), ca. 40 % proteingebunden (v.a. Albumin), ca. 10 % komplexgebunden (z.B. Citrat, Phosphat)",
      "Auslöser/Sensor: Abfall des ionisierten Calciums wird vom Calcium-sensitiven Rezeptor (CaSR, G-Protein-gekoppelt) der Hauptzellen der Nebenschilddrüse registriert → gesteigerte Parathormon-(PTH-)Sekretion innerhalb von Minuten (ausreichend Magnesium ist für PTH-Sekretion und -Wirkung erforderlich)",
      "PTH am Knochen: rasche Mobilisation von Calcium aus der Knochenflüssigkeit, langfristig über RANKL-Expression der Osteoblasten Aktivierung der Osteoklasten → Knochenresorption mit Freisetzung von Calcium und Phosphat",
      "PTH an der Niere: gesteigerte Calcium-Rückresorption im distalen Tubulus/Verbindungstubulus; gleichzeitig Hemmung der Phosphat-Rückresorption im proximalen Tubulus (Internalisierung der Na+-Phosphat-Kotransporter) → Phosphaturie",
      "PTH stimuliert die renale 1α-Hydroxylase im proximalen Tubulus → aus 25-OH-Vitamin-D (Cholecalciferol aus Haut/Nahrung, in der Leber 25-hydroxyliert) entsteht das aktive 1,25-(OH)2-Vitamin-D3 (Calcitriol)",
      "Calcitriol steigert die intestinale Calcium- und Phosphatresorption, unterstützt die Knochenmineralisierung und hemmt die PTH-Synthese (Rückkopplung)",
      "Ergebnis: Anstieg des ionisierten Calciums → verstärkte CaSR-Aktivierung → PTH-Sekretion sinkt (negative Rückkopplung); hohes Calcium stimuliert zusätzlich Calcitonin aus den parafollikulären C-Zellen der Schilddrüse, das die Osteoklasten hemmt (beim Erwachsenen physiologisch von geringer Bedeutung)",
      "Phosphatregulation: Osteozyten sezernieren bei Phosphat- bzw. Calcitriol-Anstieg FGF23 → (mit Kofaktor Klotho) Phosphaturie und Hemmung der 1α-Hydroxylase → Calcitriol sinkt",
      "Klinische Bedeutung: Alkalose (z.B. Hyperventilation) steigert die Albuminbindung und senkt das ionisierte Calcium; Citrat aus Blutprodukten (Massivtransfusion) bindet Calcium; nach Thyreoidektomie/Parathyreoidektomie drohen Hypokalzämie und Tetanie"
    ]
  },
  {
    id: "phys-thermoregulation",
    title: "Zentrale Thermoregulation und Mechanismus der perioperativen Hypothermie",
    category: "Physiologie-Mechanismen",
    source: "Sessler, Lancet 2016 (Perioperative thermoregulation and heat balance); Sessler, Anesthesiology 2000 (Perioperative heat balance); Guyton & Hall Physiology (Regulation der Körpertemperatur)",
    steps: [
      "Afferenz: Kälte- und Wärmerezeptoren in Haut, tiefen Geweben, Rückenmark und ZNS; Kältesignale v.a. über Aδ-Fasern, Wärmesignale v.a. über C-Fasern, Aufstieg überwiegend im Tractus spinothalamicus",
      "Zentrale Integration im Hypothalamus (v.a. präoptische Region/vorderer Hypothalamus): Vergleich der integrierten Temperatur mit Schwellenwerten; der Bereich zwischen Schwitz- und Vasokonstriktionsschwelle (Interthreshold Range) beträgt normalerweise nur ca. 0,2–0,4 °C um ca. 37 °C",
      "Kälteabwehr: Verhalten (effektivste Maßnahme), dann sympathische, α1-vermittelte Vasokonstriktion v.a. der arteriovenösen Shunts in Fingern/Zehen → verminderte Wärmeabgabe",
      "Bei weiterer Abkühlung Wärmebildung: zitterfreie Thermogenese (braunes Fettgewebe, β3/UCP1 – v.a. bei Neugeborenen relevant) und Kältezittern (Shivering) mit deutlich gesteigertem O2-Verbrauch",
      "Wärmeabwehr: Schwitzen (sympathisch-cholinerge Innervation) und aktive kutane Vasodilatation → Wärmeabgabe durch Verdunstung",
      "Unter Allgemeinanästhesie: Vasokonstriktions- und Zitterschwelle sinken um ca. 2–3 °C, die Schwitzschwelle steigt leicht → Interthreshold Range erweitert sich auf ca. 2–4 °C (der Patient verhält sich innerhalb dieses Bereichs poikilotherm); auch Neuraxialverfahren senken die Schwellen und blockieren Vasokonstriktion/Zittern unterhalb des Blockniveaus",
      "Phase 1 – Umverteilung (erste Stunde): anästhesiebedingte Vasodilatation hebt den tonischen Kern-Schale-Gradienten auf → Wärme fließt vom Körperkern in die Peripherie → Kerntemperatur fällt um ca. 1–1,5 °C bei nahezu unverändertem Gesamtwärmeinhalt",
      "Phase 2 – lineare Phase (etwa 2.–4. Stunde): Wärmeverlust (v.a. Strahlung und Konvektion, zusätzlich Verdunstung/Konduktion) übersteigt die unter Narkose um ca. 20–30 % verminderte metabolische Wärmeproduktion → langsamer, stetiger Abfall",
      "Phase 3 – Plateau: Erreichen der abgesenkten Vasokonstriktionsschwelle (typischerweise Kerntemperatur um 34–35 °C) → thermoregulatorische Vasokonstriktion stellt den Kern-Schale-Gradienten wieder her → Kerntemperatur stabilisiert sich; Prävention v.a. durch Vorwärmen (vermindert die Umverteilung) und aktive Wärmung (Warmluft)"
    ]
  },
  {
    id: "phys-fibrinolyse",
    title: "Fibrinolyse-System (Plasminogen-Plasmin, tPA und ihre Hemmung)",
    category: "Physiologie-Mechanismen",
    source: "Guyton & Hall Physiology (Hämostase und Blutgerinnung); Ganong's Review of Medical Physiology; Longstaff & Kolev, J Thromb Haemost 2015 (Basic mechanisms and regulation of fibrinolysis)",
    steps: [
      "Auslöser: Fibrinbildung im Gerinnsel; Endothelzellen setzen Gewebe-Plasminogenaktivator (tPA) frei – verstärkt durch Thrombin, Bradykinin, venöse Stase, Stress/Adrenalin und Desmopressin",
      "Plasminogen (in der Leber gebildet) und tPA binden über Lysin-Bindungsstellen (Kringle-Domänen) an Fibrin; die Plasminogenaktivierung durch tPA wird in Gegenwart von Fibrin um ein Vielfaches beschleunigt → Fibrinolyse bleibt lokal auf das Gerinnsel begrenzt (zweiter Aktivator: Urokinase, uPA, v.a. im Gewebe)",
      "Das gebildete Plasmin (Serinprotease) spaltet Fibrin (sowie Fibrinogen und die Faktoren V und VIII) → Fibrin(ogen)-Spaltprodukte; aus quervernetztem (Faktor-XIIIa-)Fibrin entstehen D-Dimere als Marker von Gerinnungsaktivierung plus Fibrinolyse",
      "Positive Rückkopplung: angedautes Fibrin exponiert zusätzliche C-terminale Lysinreste → noch mehr Plasminogen- und tPA-Bindung → beschleunigte Lyse",
      "Hemmung auf Aktivatorebene: Plasminogenaktivator-Inhibitor-1 (PAI-1, aus Endothel und Thrombozyten; Akute-Phase-Protein) inaktiviert tPA und uPA",
      "Hemmung auf Plasminebene: α2-Antiplasmin inaktiviert freies Plasmin rasch (fibringebundenes Plasmin ist teilweise geschützt; α2-Antiplasmin wird durch Faktor XIIIa ins Gerinnsel eingebaut); TAFI (durch den Thrombin-Thrombomodulin-Komplex aktiviert) entfernt C-terminale Lysine vom Fibrin und bremst so die Plasminogenbindung",
      "Physiologisches Gleichgewicht: kontrollierter Umbau und Abbau des Gerinnsels mit Rekanalisierung des Gefäßes nach abgeschlossener Blutstillung",
      "Pathophysiologie: bei schwerem Trauma/Schock massive tPA-Freisetzung und PAI-1-Verbrauch (u.a. durch aktiviertes Protein C) → Hyperfibrinolyse (viskoelastisch als Lyse nachweisbar); postoperativ und in der Sepsis dagegen PAI-1-Anstieg → Fibrinolyse-Shutdown mit Thrombose-/Mikrothromboseneigung",
      "Pharmakologie: Tranexamsäure (Lysin-Analogon) blockiert die Lysin-Bindungsstellen des Plasminogens → keine Bindung an Fibrin, antifibrinolytisch (beim Trauma möglichst früh, innerhalb von 3 Stunden); rekombinanter tPA (Alteplase) wirkt umgekehrt als Thrombolytikum"
    ]
  },
  {
    id: "phys-leberdurchblutung-habr",
    title: "Regulation der Leberdurchblutung – Hepatic Arterial Buffer Response (HABR)",
    category: "Physiologie-Mechanismen",
    source: "Lautt, Hepatic Circulation: Physiology and Pathophysiology (NCBI Bookshelf, 2009); Eipel et al., World J Gastroenterol 2010 (The hepatic arterial buffer response revisited); Guyton & Hall Physiology (Leber)",
    steps: [
      "Ausgangslage: die Leber erhält ca. 25 % des HZV, davon ca. 75 % über die Pfortader (nährstoffreich, teilweise desoxygeniert, niedriger Druck) und ca. 25 % über die A. hepatica (hoher Druck); beide Zuflüsse liefern etwa je die Hälfte des Sauerstoffs",
      "Der Pfortaderfluss wird von der Leber selbst nicht reguliert, sondern entspricht dem Abstrom aus den Splanchnikusorganen (Darm, Milz, Pankreas) und hängt damit vom splanchnischen Gefäßtonus ab (z.B. vermindert bei Hypovolämie/Sympathikusaktivierung)",
      "Im Mall-Raum, der die terminalen Äste von A. hepatica und Pfortader umgibt, wird kontinuierlich Adenosin gebildet und durch den Blutfluss ausgewaschen",
      "Auslöser: Abnahme des Pfortaderflusses → geringere Auswaschung → Adenosin reichert sich im Mall-Raum an",
      "Adenosin dilatiert die hepatischen Arteriolen → Anstieg des arteriellen Leberflusses, der einen Teil des Pfortaderflussverlusts kompensiert (tierexperimentell etwa 25–60 %)",
      "Umgekehrt steigert ein erhöhter Pfortaderfluss die Adenosin-Auswaschung → Konstriktion der A. hepatica; die Reaktion ist einseitig – die Pfortader kann Änderungen des arteriellen Zuflusses nicht ausgleichen",
      "Zweck: Konstanthaltung des Gesamtleberflusses (wichtig u.a. für die flussabhängige Clearance von Hormonen und Medikamenten mit hoher Extraktionsrate, z.B. Propofol, Lidocain) – nicht primär die O2-Versorgung, die die Leber v.a. über eine gesteigerte O2-Extraktion sichert",
      "Klinische Bedeutung: HABR ist bei Endotoxinämie/Sepsis beeinträchtigt; Isofluran und Sevofluran erhalten den arteriellen Leberfluss weitgehend, Halothan reduziert ihn deutlich; nach Lebertransplantation kann ein hoher Pfortaderfluss über die HABR eine arterielle Minderperfusion begünstigen (z.B. Splenic-Artery-Steal)"
    ]
  },
  {
    id: "phys-starling-kapillaraustausch",
    title: "Kapillärer Flüssigkeitsaustausch – Starling-Prinzip und Glykokalyx-Modell",
    category: "Physiologie-Mechanismen",
    source: "Levick & Michel, Cardiovasc Res 2010 (Microvascular fluid exchange and the revised Starling principle); Woodcock & Woodcock, Br J Anaesth 2012; Guyton & Hall Physiology (Mikrozirkulation und Lymphsystem)",
    steps: [
      "Klassische Starling-Gleichung: Filtration Jv = Kf × [(Pc − Pi) − σ × (πc − πi)] – bestimmt durch hydrostatische Drücke (Kapillare Pc, Interstitium Pi), onkotische Drücke (π) und den Reflexionskoeffizienten σ für Proteine",
      "Revidiertes Modell: die semipermeable Barriere ist die endotheliale Glykokalyx; wirksam ist der onkotische Gradient zwischen Plasma und dem nahezu proteinfreien Raum unter der Glykokalyx – nicht der zum gesamten Interstitium",
      "Im Fließgleichgewicht findet in den meisten Kapillaren über die gesamte Länge eine geringe Nettofiltration statt; eine dauerhafte venöse Rückresorption, wie im klassischen Modell angenommen, gibt es dort nicht",
      "Das filtrierte Volumen wird über das Lymphsystem (mehrere Liter pro Tag) in den Kreislauf zurückgeführt; Ödemschutz durch steigenden interstitiellen Druck, gesteigerten Lymphfluss und Auswaschung interstitieller Proteine",
      "Nur vorübergehende Rückresorption: bei akutem Abfall des Kapillardrucks (z.B. Blutung) wird kurzzeitig interstitielle Flüssigkeit rückresorbiert (Autotransfusion), bis sich ein neues Gleichgewicht einstellt",
      "Kontextsensitivität (nach dem revidierten Modell): bei niedrigem Kapillardruck (Hypovolämie) verbleiben Kristalloide wie Kolloide weitgehend intravasal, bei normalem/hohem Kapillardruck steigern beide die Filtration – gilt als Erklärung für die in Studien geringer als erwartet ausgefallenen Volumeneffekt-Unterschiede zwischen Kolloiden und Kristalloiden",
      "Schädigung der Glykokalyx (Sepsis, Ischämie-Reperfusion, großer chirurgischer Eingriff, Hypervolämie mit ANP-Freisetzung, Hyperglykämie) → erhöhte Permeabilität, interstitielles Ödem und kapilläres Leck"
    ]
  }
];
