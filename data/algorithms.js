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
  }
];
