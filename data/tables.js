// Vergleichstabellen / Cheat-Sheets: fassen verwandte Fakten nebeneinander zusammen,
// damit man sie im Kontrast lernt (z.B. "welcher Vasopressor wirkt wie im Vergleich zu
// den anderen") statt isoliert pro Karteikarte. Werte sind aus den bereits recherchierten
// Medikamenten-Steckbriefen (data/drugcards.js) übernommen bzw. daraus verdichtet.
window.TABLES = [
  {
    id: "vasopressoren",
    title: "Vasopressoren & Inotropika im Überblick",
    columns: ["Substanz", "Rezeptor/Mechanismus", "Signalweg (Ablauf)", "Hauptwirkung", "Standarddosis", "Hauptindikation"],
    rows: [
      ["Noradrenalin", "α1 stark, β1 gering", "α1: Gq → Phospholipase C → IP3/DAG → intrazelluläres Ca2+↑ → Kontraktion glatter Gefäßmuskulatur. β1: Gs → Adenylatzyklase → cAMP↑ → PKA → Ca2+-Kanäle/Phospholamban → Inotropie/Chronotropie", "Vasokonstriktion", "0,05–0,5 µg/kg/min", "Septischer Schock (1. Wahl)"],
      ["Adrenalin", "α1/β1/β2 dosisabhängig", "Niedrig dosiert β-betont (Gs→cAMP↑, Vasodilatation β2 + Inotropie β1), hochdosiert α1-Effekt (Gq→Ca2+↑) dominant → Vasokonstriktion überwiegt", "Vasokonstriktion + Inotropie/Chronotropie", "Reanimation 1mg/3–5min", "Reanimation, Anaphylaxie"],
      ["Vasopressin", "V1a (catecholaminunabhängig)", "Gq-gekoppelt → Phospholipase C → IP3/DAG → Ca2+↑ in glatter Gefäßmuskulatur; unabhängig von adrenergen Rezeptoren, wirkt daher auch bei Katecholamin-Tachyphylaxie", "Vasokonstriktion", "0,01–0,04 U/min fix", "Add-on bei Katecholamin-Tachyphylaxie"],
      ["Dopamin", "D1/β1/α1 dosisabhängig", "Niedrig: D1 (Gs→cAMP↑) renale/splanchnische Vasodilatation. Mittel: β1 (Gs→cAMP↑) Inotropie. Hoch: α1 (Gq→Ca2+↑) Vasokonstriktion überwiegt", "Variabel (Vasodilatation→Inotropie→Vasokonstriktion)", "2–20 µg/kg/min", "Reserve bei Bradykardie"],
      ["Dobutamin", "β1 überwiegend", "Gs → Adenylatzyklase → cAMP↑ → PKA-vermittelte Phosphorylierung von Ca2+-Kanälen/Phospholamban → gesteigerte Kontraktilität und Frequenz", "Inotropie/Chronotropie", "2,5–20 µg/kg/min", "Kardiogener Schock/Low-Output"],
      ["Milrinon", "PDE3-Hemmung (Inodilatator)", "Hemmt Phosphodiesterase-3 (baut cAMP ab) → cAMP↑ rezeptorunabhängig, sowohl im Kardiomyozyt (Inotropie) als auch in glatter Gefäßmuskulatur (Vasodilatation)", "Inotropie + Vasodilatation", "0,375–0,75 µg/kg/min", "Low-Output, pulmonale Hypertonie"],
      ["Levosimendan", "Ca2+-Sensitizer + K_ATP-Kanal-Öffner (Inodilatator)", "Bindet Ca2+-abhängig an Troponin C → erhöht dessen Ca2+-Sensitivität ohne mehr intrazelluläres Ca2+ (daher kaum erhöhter O2-Verbrauch); zusätzlich Öffnung von K_ATP-Kanälen in glatter Gefäßmuskulatur → Vasodilatation", "Inotropie + Vasodilatation, kaum erhöhter O2-Verbrauch", "0,05–0,2 µg/kg/min (meist ohne Bolus)", "Akute Herzinsuffizienz, v.a. bei Betablocker-Vorbehandlung"],
      ["Phenylephrin", "α1 rein", "Gq → Phospholipase C → IP3/DAG → Ca2+↑ in glatter Gefäßmuskulatur, keine relevante β-Aktivität → reine Vasokonstriktion, oft mit Reflexbradykardie", "Vasokonstriktion", "50–100 µg Bolus", "Spinalanästhesie-Hypotonie"],
      ["Ephedrin", "Indirekt + direkt (α/β)", "Setzt Noradrenalin aus präsynaptischen Speichervesikeln frei (indirekt) und wirkt zusätzlich schwach direkt an α-/β-Rezeptoren → kombinierte Vasokonstriktion und Inotropie/Chronotropie", "Vasokonstriktion + Inotropie", "5–10 mg Bolus", "Hypotonie unter Anästhesie"],
      ["Terlipressin", "V1-Rezeptor (lang wirksames Vasopressin-Analogon)", "Prodrug, wird durch Endopeptidasen langsam zu aktivem Lysin-Vasopressin gespalten → Gq→Ca2+↑ wie natives Vasopressin, aber verzögerter Wirkeintritt und deutlich längere Wirkdauer", "Vasokonstriktion (splanchnisch betont)", "1–2mg Bolus alle 4–6h", "Hepatorenales Syndrom, ösophageale Varizenblutung, therapierefraktärer septischer Schock (off-label)"]
    ]
  },
  {
    id: "muskelrelaxanzien",
    title: "Muskelrelaxanzien im Überblick",
    columns: ["Substanz", "Typ", "Wirkmechanismus am nAChR", "Intubationsdosis", "Wirkeintritt", "Wirkdauer", "Elimination", "Reversal"],
    rows: [
      ["Succinylcholin", "Depolarisierend", "Agonist am nikotinischen ACh-Rezeptor der motorischen Endplatte → anhaltende Depolarisation der Endplattenregion → Na+-Kanäle inaktivieren und bleiben refraktär (Depolarisationsblock, Phase I); bei sehr hoher Dosis/verlängerter Exposition Übergang in einen atypischen, kompetitiven-artigen Phase-II-Block", "1–1,5mg/kg", "30–60s", "5–10min", "Pseudocholinesterase", "Keines spezifisch"],
      ["Rocuronium", "Aminosteroid", "Kompetitiver Antagonist am nikotinischen ACh-Rezeptor → blockiert die ACh-Bindungsstelle, ohne den Rezeptor zu aktivieren → keine Depolarisation, schlaffe Lähmung", "0,6mg/kg (RSI 1,2mg/kg)", "60–90s (RSI)", "30–60min", "Hepatisch", "Sugammadex"],
      ["Vecuronium", "Aminosteroid", "Kompetitiver Antagonist am nikotinischen ACh-Rezeptor (wie Rocuronium)", "0,08–0,1mg/kg", "2,5–3min", "30–40min", "Hepatisch/renal", "Sugammadex"],
      ["Pancuronium", "Aminosteroid", "Kompetitiver Antagonist am nikotinischen ACh-Rezeptor; zusätzlich leichte vagolytische Wirkung am kardialen M2-Rezeptor (Tachykardie)", "0,08–0,1mg/kg", "2–4min", "60–120min (lang)", "Renal (~80%)", "Sugammadex/Neostigmin"],
      ["Atracurium", "Benzylisochinolin", "Kompetitiver Antagonist am nikotinischen ACh-Rezeptor; strukturbedingt Histaminfreisetzung möglich", "0,5mg/kg", "2–3min", "20–35min", "Hofmann-Elimination (organunabhängig)", "NUR Neostigmin (kein Sugammadex!)"],
      ["Cisatracurium", "Benzylisochinolin", "Kompetitiver Antagonist am nikotinischen ACh-Rezeptor; als Stereoisomer von Atracurium kaum Histaminfreisetzung", "0,15–0,2mg/kg", "~2min", "~45min", "Hofmann-Elimination (organunabhängig)", "NUR Neostigmin (kein Sugammadex!)"],
      ["Mivacurium", "Benzylisochinolin", "Kompetitiver Antagonist am nikotinischen ACh-Rezeptor", "0,15–0,2mg/kg", "2–3min", "15–20min (kürzeste)", "Pseudocholinesterase", "Neostigmin"]
    ]
  },
  {
    id: "lokalanaesthetika",
    title: "Lokalanästhetika im Überblick",
    columns: ["Substanz", "Typ", "Wirkmechanismus", "pKa (Wirkeintritt↑)", "Wirkdauer", "Max. Einzeldosis", "Besonderheit"],
    rows: [
      ["Lidocain", "Amid", "Neutrale (nicht-ionisierte) Form diffundiert durch die Nervenmembran, protoniert sich intrazellulär und blockiert von innen spannungsabhängige Na+-Kanäle → verminderte Aufstrichgeschwindigkeit des Aktionspotentials → Hemmung der Impulsfortleitung. Rasche Kanalbindung/-dissoziation ('fast-in, fast-out') → geringe Kardiotoxizität", "7,9", "1–2h", "3–4,5 mg/kg (7 mg/kg mit Adrenalin)", "Geringstes LAST-Risiko der Amide"],
      ["Bupivacain", "Amid", "Wie Lidocain Na+-Kanal-Blockade von intrazellulär, jedoch sehr langsame Dissoziation vom Kanal ('fast-in, slow-out') → Kanal bleibt zwischen Aktionspotentialen blockiert → ausgeprägte Kardiotoxizität bei systemischer Exposition", "8,1", "4–8h (lang)", "~2 mg/kg", "Höchste Kardiotoxizität ('fast-in, slow-out')"],
      ["Levobupivacain", "Amid (S-Enantiomer)", "Gleicher Na+-Kanal-Mechanismus wie Bupivacain; das reine S-Enantiomer bindet kardiale Na+-Kanäle mit geringerer Affinität als das R-Enantiomer im Racemat → geringere Kardiotoxizität", "8,1", "4–8h", "150 mg", "Geringere Kardiotoxizität als Bupivacain"],
      ["Ropivacain", "Amid (S-Enantiomer)", "Na+-Kanal-Blockade wie Bupivacain, aber geringere Lipophilie → schwächere Blockade dicker, schnell leitender motorischer Aδ/Aα-Fasern relativ zu dünnen sensorischen C-Fasern → sensomotorische Dissoziation; zusätzlich intrinsische Vasokonstriktion", "8,1", "4–6h", "2,5–3 mg/kg", "Sensomotorische Dissoziation, geringere Toxizität"],
      ["Prilocain", "Amid", "Na+-Kanal-Blockade wie Lidocain; sein hepatischer Metabolit o-Toluidin oxidiert Hämoglobin-Eisen (Fe2+→Fe3+) → Methämoglobin", "7,9", "1–2h", "8,5 mg/kg", "Methämoglobinämie-Risiko (Antidot Methylenblau)"],
      ["Mepivacain", "Amid", "Na+-Kanal-Blockade wie Lidocain, ohne dessen intrinsische vasodilatatorische Eigenwirkung → etwas längere Wirkdauer auch ohne Adrenalinzusatz", "7,6", "1,5–3h", "6–7 mg/kg", "Keine intrinsische Vasodilatation"],
      ["Tetracain", "Ester", "Na+-Kanal-Blockade wie die Amide; als Ester durch Plasma-Cholinesterase zu PABA-Derivaten hydrolysiert → allergenes Potenzial (PABA) und bei Cholinesterase-Mangel verlängerte/verstärkte Wirkung", "8,5", "2–4h (spinal)", "~20mg (Schleimhaut)", "Höchste Toxizität, PABA-Allergiepotenzial"]
    ]
  },
  {
    id: "antidote",
    title: "Antidote-Übersicht",
    columns: ["Gift/Substanz", "Antidot", "Besonderheit"],
    rows: [
      ["Opioide", "Naloxon", "HWZ oft kürzer als Opioid → Renarkotisierung möglich"],
      ["Benzodiazepine", "Flumazenil", "Kontraindiziert bei TCA-Mischintoxikation (Krampfrisiko)"],
      ["Steroidale NMBA (Rocuronium/Vecuronium)", "Sugammadex", "Wirkt NICHT bei Benzylisochinolinen"],
      ["Heparin (unfraktioniert)", "Protamin", "Vollständige Neutralisierung"],
      ["Niedermolekulares Heparin", "Protamin", "Nur partiell (~60%) wirksam"],
      ["Vitamin-K-Antagonisten", "Vitamin K + PPSB", "Vitamin K wirkt erst nach Stunden – PPSB für Soforteffekt"],
      ["Dabigatran", "Idarucizumab", "Spezifisch, sofortige vollständige Reversierung"],
      ["Faktor-Xa-Inhibitoren (Apixaban/Rivaroxaban)", "Andexanet alfa", "Rebound-Anstieg der Anti-Xa-Aktivität möglich"],
      ["Paracetamol", "N-Acetylcystein", "Am wirksamsten <8h nach Einnahme"],
      ["Betablocker", "Glukagon", "Wirkt β-Rezeptor-unabhängig"],
      ["Kalziumkanalblocker/Hyperkaliämie", "Kalzium (Chlorid/Gluconat)", "Membranstabilisierung, senkt Kalium nicht"],
      ["Lokalanästhetika-Systemtoxizität (LAST)", "Lipidemulsion 20% (Intralipid)", "Bolus 1,5 ml/kg, dann 0,25 ml/kg/min"],
      ["Maligne Hyperthermie", "Dantrolen", "Einzige spezifische Therapie, initial 2,5 mg/kg"],
      ["Methämoglobinämie", "Methylenblau", "Kontraindiziert bei G6PD-Mangel"],
      ["Cyanidvergiftung", "Hydroxocobalamin", "Verursacht harmlose Rotfärbung von Haut/Urin"],
      ["Zentrales anticholinerges Syndrom", "Physostigmin", "Einziges ZNS-gängiges Cholinesterasehemmer-Antidot"]
    ]
  },
  {
    id: "nuechternheit",
    title: "Präoperative Nüchternheitszeiten: Erwachsene vs. Kinder",
    columns: ["Nahrungsart", "Erwachsene (ESAIC)", "Kinder (APAGBI 2022)", "Besonderheit"],
    rows: [
      ["Klare Flüssigkeiten (Wasser, klarer Tee/Saft ohne Fruchtfleisch, schwarzer Kaffee)", "2 Stunden", "1 Stunde", "Gilt auch vor elektiver Sectio; Kaugummikauen/Bonbon unmittelbar vorher rechtfertigt KEINE OP-Verschiebung; letzte Stunde bei Kindern max. ca. 3ml/kg"],
      ["Muttermilch", "–", "3 Stunden", "Häufigster Grund für unnötig lange Kinder-Nüchternzeiten in der Praxis"],
      ["Säuglingsnahrung (Formula) / Kuhmilch", "6 Stunden (als feste Nahrung gewertet)", "6 Stunden", "Kuhmilch pharmakokinetisch wie feste Nahrung behandeln (Kaseingehalt)"],
      ["Leichte Mahlzeit", "6 Stunden", "6 Stunden", "–"],
      ["Fetthaltige/schwere Mahlzeit, Fleisch", "8 Stunden", "8 Stunden", "Verzögerte Magenentleerung durch hohen Fettanteil"]
    ]
  },
  {
    id: "notfall-vergleich",
    title: "Verwechslungsgefahr: MH vs. LAST vs. Anaphylaxie",
    columns: ["", "Maligne Hyperthermie", "LAST", "Anaphylaxie"],
    rows: [
      ["Trigger", "Volatile Anästhetika, Succinylcholin", "Lokalanästhetika-Überdosierung/intravasale Injektion", "Allergen (Medikament, Latex, Blutprodukt, ...)"],
      ["Leitsymptom", "Hyperkapnie, Tachykardie, Rigor, Fieber", "Periorale Parästhesie → Krampf → kardiovaskulärer Kollaps", "Bronchospasmus, Urtikaria, Hypotonie"],
      ["Sofortmaßnahme", "Trigger stoppen, 100% O2, hyperventilieren", "LA-Gabe stoppen, Atemweg sichern, Benzodiazepin bei Krampf", "Allergenexposition stoppen, Adrenalin i.m."],
      ["Spezifisches Antidot/Therapie", "Dantrolen 2,5 mg/kg", "Lipidemulsion 1,5 ml/kg Bolus + 0,25 ml/kg/min", "Adrenalin 0,5 mg i.m. (anterolateraler Oberschenkel)"]
    ]
  },
  {
    id: "organsysteme",
    title: "Organsysteme im Überblick",
    columns: ["Organsystem", "Hauptfunktion(en)", "Zentrale Normwerte", "Wichtigste Regulationsmechanismen", "Klassische Prüfungspathologien"],
    rows: [
      ["Atmung / Lunge", "Gasaustausch (O2-Aufnahme/CO2-Abgabe), CO2-Abatmung zur Säure-Basen-Regulation, Atemmechanik", "Tidalvolumen ~500ml (6–8 ml/kgKG); paO2 80–100mmHg; paCO2 35–45mmHg", "Atemzentrum (Medulla oblongata), zentrale/periphere Chemorezeptoren (CO2/pH dominant, Hypoxie-Antrieb Glomus caroticum), Hering-Breuer-Reflex", "ARDS, postoperative Atelektase/Hypoventilation, Aspirationspneumonie, obstruktive Schlafapnoe"],
      ["Kreislauf / Herz", "Aufrechterhaltung Organperfusion (Herzzeitvolumen), Blutdruckregulation, O2-Transport", "Herzzeitvolumen ~5 l/min; Ejektionsfraktion ~55–70%; MAP 70–105mmHg", "Frank-Starling-Mechanismus, Barorezeptorreflex (Karotissinus/Aortenbogen), RAAS, autonomes NS", "Kardiogener Schock, perioperative Myokardischämie, Herzinsuffizienz, Vorhofflimmern"],
      ["Niere & Säure-Basen-Haushalt", "Elimination harnpflichtiger Substanzen, Volumen-/Elektrolythomöostase, Säure-Basen-Regulation, EPO-/Vit-D-Bildung", "GFR ~120–125 ml/min (180 l/Tag); pH 7,35–7,45; HCO3– 22–26 mmol/l", "RAAS, ADH (Vasopressin), tubuloglomeruläres Feedback, renale Autoregulation (myogen)", "Akutes Nierenversagen (prä-/intra-/postrenal), Kontrastmittelnephropathie, metabolische Azidose/Alkalose"],
      ["Leber & Stoffwechsel", "Synthese (Gerinnungsfaktoren, Albumin), Biotransformation/Medikamentenmetabolismus, Glukosehomöostase", "Albumin ~35–50 g/l; Quick >70% / INR <1,2; Cholinesterase als Kurzzeit-Syntheseparameter", "Hepatische Autoregulation (Pfortader-Puffer-Effekt), Insulin/Glukagon, First-Pass-Metabolismus (CYP450)", "Leberzirrhose/-insuffizienz, Pseudocholinesterasemangel (verlängerte Succinylcholinwirkung), hepatische Enzephalopathie"],
      ["ZNS & Hirndruck", "Zerebrale Perfusion, Aufrechterhaltung Bewusstsein/Vitalfunktionen, Liquorzirkulation", "ICP 5–10(–15)mmHg (pathologisch >20–22mmHg); CPP-Ziel 60–70mmHg; zerebrale Autoregulation MAP 50–150mmHg", "Monro-Kellie-Doktrin, zerebrale Autoregulation (myogen), CO2-Reaktivität (Hyperventilation senkt ICP)", "Schädel-Hirn-Trauma mit intrakranieller Hypertension, Status epilepticus, zerebrale Ischämie/Hirnödem"],
      ["Temperatur & Endokrinium", "Thermoregulation (Wärmebalance), Stressantwort/Homöostase über Hormonachsen, Energiestoffwechsel", "Kerntemperatur 36,5–37,5°C; Cortisol-Tagesrhythmus (Morgenmaximum); TSH/fT3/fT4 im Normbereich", "Hypothalamus (präoptischer Bereich) als Thermostat; HPA-Achse (CRH-ACTH-Cortisol, negatives Feedback); Schilddrüsenachse (TRH-TSH-T3/T4)", "Perioperative Hypothermie, Maligne Hyperthermie, thyreotoxische Krise/Myxödemkoma, Addison-Krise"]
    ]
  },
  {
    id: "klassifikationssysteme",
    title: "Klassifikationssysteme & Scores im Überblick",
    columns: ["Score/Klassifikation", "Bewertet", "Bereich/Kategorien", "Klinische Bedeutung"],
    rows: [
      ["ASA-Klassifikation", "Körperlicher Allgemeinzustand präoperativ", "I (gesund) bis VI (hirntoter Organspender); Zusatz 'E' bei Notfall", "Grobe perioperative Risikoeinschätzung, keine Vorhersage im Einzelfall"],
      ["Mallampati (modifiziert)", "Sichtbare pharyngeale Strukturen bei max. Mundöffnung", "I–IV (I = weicher Gaumen/Uvula/Gaumenbögen voll sichtbar, IV = nur harter Gaumen)", "Prädiktor für schwierige Laryngoskopie, kein Einzelprädiktor ausreichend"],
      ["Cormack-Lehane", "Laryngoskopische Sicht auf die Glottis", "I (volle Sicht) bis IV (weder Epiglottis noch Glottis sichtbar)", "III–IV = schwierige Intubation"],
      ["Glasgow Coma Scale (GCS)", "Bewusstseinslage", "3–15 (Augen 1–4, verbal 1–5, motorisch 1–6)", "≤8 gilt klassisch als Indikation zur Atemwegssicherung"],
      ["RASS (Richmond Agitation-Sedation Scale)", "Sedierungs-/Agitationstiefe", "-5 (nicht erweckbar) bis +4 (aggressiv)", "PADIS-Zielbereich meist 0 bis -2 (leichte Sedierung statt tief)"],
      ["CAM-ICU", "Delir-Screening auf der Intensivstation", "Positiv/negativ (4 Kernkriterien)", "Positiv = Delir; Bestandteil des ABCDEF-Bundles"],
      ["RCRI (Revised Cardiac Risk Index)", "Perioperatives kardiales Risiko", "0 bis ≥3 von 6 Risikofaktoren", "≥2 Faktoren = deutlich erhöhtes Risiko für perioperative kardiale Komplikationen"],
      ["Aldrete-Score (modifiziert)", "Entlassfähigkeit aus dem Aufwachraum", "0–10 Punkte (Aktivität/Atmung/Kreislauf/Bewusstsein/SpO2)", "Meist ≥9 Punkte als Kriterium für PACU-Entlassung"],
      ["NYHA-Klassifikation", "Symptomatik bei Herzinsuffizienz", "I (asymptomatisch) bis IV (Ruhesymptomatik)", "III–IV = deutlich erhöhtes perioperatives Risiko"],
      ["Apfel-Score (vereinfacht)", "PONV-Risiko", "0–4 Risikofaktoren (weiblich, Nichtraucher, PONV-/Reiseanamnese, postop. Opioid)", "Steigendes Risiko ca. 10/20/40/60/80% je nach Anzahl Faktoren"],
      ["TOF-Ratio", "Neuromuskuläre Erholung", "0–1,0 (Verhältnis 4. zu 1. Reizantwort)", "≥0,9 (quantitativ gemessen) als Extubationskriterium"]
    ]
  },
  {
    id: "inhalationsanaesthetika",
    title: "Inhalationsanästhetika im Überblick",
    columns: ["Substanz", "Blut-Gas-Koeffizient", "MAC (%, junger Erwachsener)", "Metabolisierungsrate", "Besonderheit"],
    rows: [
      ["Sevofluran", "0,65 (niedrig → schnelle An-/Abflutung)", "~2,0", "~5%", "Kaum atemwegsreizend → geeignet für Maskeneinleitung bei Kindern; Compound-A-Bildung bei niedrigem Frischgasfluss mit Atemkalk"],
      ["Isofluran", "1,4 (mittel)", "~1,2 (potentester der drei)", "<0,2%", "Günstig/weit verbreitet, aber langsamere An-/Abflutung; atemwegsreizend"],
      ["Desfluran", "0,42 (sehr niedrig → schnellste An-/Abflutung)", "~6,0", "<0,1%", "Atemwegsreizend (kein Maskeneinleitung), hoher Frischgasverbrauch, hohes Treibhausgaspotenzial"],
      ["Lachgas (N2O)", "0,47", "~104 (nur in Kombination nutzbar)", "minimal", "Second-Gas-Effekt/Diffusionshypoxie, Knochenmarksuppression bei Langzeit-/wiederholter Anwendung"],
      ["Xenon", "0,115 (am niedrigsten)", "~63–71", "keine (inert, keine Biotransformation)", "Hämodynamisch sehr stabil, kein Treibhausgaseffekt, aber teuer und selten verfügbar"]
    ]
  }
];
