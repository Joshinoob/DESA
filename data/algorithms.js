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
      "Parallel reversible Ursachen suchen und behandeln (4H: Hypoxie, Hypovolämie, Hypo-/Hyperkaliämie/metabolisch, Hypothermie; 4T: Herzbeuteltamponade, Toxine, Thrombose koronar/pulmonal, Spannungspneumothorax)",
      "Bei ROSC: Post-Reanimationsbehandlung einleiten (Oxygenierung/Ventilation optimieren, Blutdruck sichern, 12-Kanal-EKG, Ursache gezielt behandeln)"
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
      "Parallel reversible Ursachen suchen und behandeln (4H/4T)",
      "Bei Wechsel zu schockbarem Rhythmus (VF/pVT) → sofort in den Schockbar-Algorithmus wechseln",
      "Bei ROSC: Post-Reanimationsbehandlung einleiten"
    ]
  },
  {
    id: "schwieriger-atemweg",
    title: "Schwieriger Atemweg / CICO-Algorithmus",
    category: "Atemwegsmanagement",
    source: "Difficult Airway Society (DAS) Unanticipated Difficult Intubation Algorithmus",
    steps: [
      "Plan A: Optimale Lagerung (Sniffing Position), Präoxygenierung, Standard-Laryngoskopie/Intubation vorbereiten",
      "Intubationsversuch durchführen (Anzahl begrenzen, z.B. max. 3 Versuche + 1 durch erfahrenen Kollegen)",
      "Bei Misserfolg → Oxygenierung sicherstellen (Maskenbeatmung zwischen Versuchen), nicht wiederholt ohne Optimierung versuchen",
      "Plan B: Supraglottische Atemwegshilfe (Larynxmaske) einsetzen, Oxygenierung prüfen",
      "Oxygenierung über SGA erfolgreich → weiter mit SGA oder kontrollierte Intubation über/durch SGA (z.B. fiberoptisch) planen",
      "Oxygenierung über SGA NICHT erfolgreich → Plan C: Rückkehr zur Gesichtsmaskenbeatmung (2-Personen-Technik, Guedel-/Wendl-Tubus)",
      "Maskenbeatmung erfolgreich → Patienten aufwachen lassen oder alternative Atemwegssicherung in Ruhe planen",
      "Maskenbeatmung NICHT erfolgreich (weder Intubation noch SGA noch Maske möglich) = CICO",
      "Plan D: Sofortiger chirurgischer Atemweg (Front-of-Neck-Access / Notfall-Koniotomie) ohne weitere Verzögerung",
      "Nach Atemwegssicherung: Oxygenierung mit Kapnographie bestätigen, Ereignis dokumentieren, Patient/Team nachbesprechen"
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
      "Adrenalin 0,5mg i.m. (anterolateraler Oberschenkel) sofort bei Schock-/Atemwegszeichen/Bronchospasmus",
      "Patienten flach lagern mit erhöhten Beinen (bei Atemnot ggf. sitzend), hochdosiert Sauerstoff geben",
      "i.v.-Zugang legen, zügige Volumengabe (kristalloid, z.B. 500–1000ml Bolus)",
      "Keine Besserung nach 5 Minuten → Adrenalin 0,5mg i.m. wiederholen",
      "Therapierefraktärer Schock → Adrenalin i.v. titriert durch erfahrenes Personal (Bolus/Infusion) erwägen",
      "Zusätzlich Antihistaminikum und Kortikosteroid erwägen (unterstützend, nicht akut lebensrettend)",
      "Mastzelltryptase abnehmen (sofort, nach 1–2h, nach 24h zur Bestätigung)",
      "Nach Stabilisierung: Überwachung wegen möglicher biphasischer Reaktion, allergologische Abklärung veranlassen"
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
      "Bei kardiovaskulärem Kollaps: Standard-ALS-Reanimation beginnen",
      "Lidocain als Antiarrhythmikum VERMEIDEN (verschlimmert LAST) – Amiodaron bevorzugen",
      "20%ige Lipidemulsion sofort geben: Bolus 1,5ml/kg über 2–3 Minuten",
      "Im Anschluss Infusion mit 0,25ml/kg/min fortführen",
      "Bei anhaltender Instabilität: Bolus nach 5 Minuten wiederholen (max. 2–3x), Infusionsrate ggf. verdoppeln",
      "Reanimation fortsetzen, ggf. deutlich länger als üblich – Erholung nach Lipidgabe kann verzögert eintreten",
      "Bei therapierefraktärem Kreislaufstillstand: kardiopulmonalen Bypass/ECMO erwägen, falls verfügbar",
      "Nach Stabilisierung: engmaschige Überwachung (Rezidivrisiko durch Rückverteilung), Dokumentation"
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
  }
];
