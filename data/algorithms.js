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
  }
];
