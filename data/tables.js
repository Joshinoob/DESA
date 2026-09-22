// Vergleichstabellen / Cheat-Sheets: fassen verwandte Fakten nebeneinander zusammen,
// damit man sie im Kontrast lernt (z.B. "welcher Vasopressor wirkt wie im Vergleich zu
// den anderen") statt isoliert pro Karteikarte. Werte sind aus den bereits recherchierten
// Medikamenten-Steckbriefen (data/drugcards.js) übernommen bzw. daraus verdichtet.
window.TABLES = [
  {
    id: "vasopressoren",
    title: "Vasopressoren & Inotropika im Überblick",
    columns: ["Substanz", "Rezeptor/Mechanismus", "Hauptwirkung", "Standarddosis", "Hauptindikation"],
    rows: [
      ["Noradrenalin", "α1 stark, β1 gering", "Vasokonstriktion", "0,05–0,5 µg/kg/min", "Septischer Schock (1. Wahl)"],
      ["Adrenalin", "α1/β1/β2 dosisabhängig", "Vasokonstriktion + Inotropie/Chronotropie", "Reanimation 1mg/3–5min", "Reanimation, Anaphylaxie"],
      ["Vasopressin", "V1a (catecholaminunabhängig)", "Vasokonstriktion", "0,01–0,04 U/min fix", "Add-on bei Katecholamin-Tachyphylaxie"],
      ["Dopamin", "D1/β1/α1 dosisabhängig", "Variabel (Vasodilatation→Inotropie→Vasokonstriktion)", "2–20 µg/kg/min", "Reserve bei Bradykardie"],
      ["Dobutamin", "β1 überwiegend", "Inotropie/Chronotropie", "2,5–20 µg/kg/min", "Kardiogener Schock/Low-Output"],
      ["Milrinon", "PDE3-Hemmung (Inodilatator)", "Inotropie + Vasodilatation", "0,375–0,75 µg/kg/min", "Low-Output, pulmonale Hypertonie"],
      ["Phenylephrin", "α1 rein", "Vasokonstriktion", "50–100 µg Bolus", "Spinalanästhesie-Hypotonie"],
      ["Ephedrin", "Indirekt + direkt (α/β)", "Vasokonstriktion + Inotropie", "5–10 mg Bolus", "Hypotonie unter Anästhesie"]
    ]
  },
  {
    id: "muskelrelaxanzien",
    title: "Muskelrelaxanzien im Überblick",
    columns: ["Substanz", "Typ", "Wirkeintritt", "Wirkdauer", "Elimination", "Reversal"],
    rows: [
      ["Succinylcholin", "Depolarisierend", "30–60s", "5–10min", "Pseudocholinesterase", "Keines spezifisch"],
      ["Rocuronium", "Aminosteroid", "60–90s (RSI)", "30–60min", "Hepatisch", "Sugammadex"],
      ["Vecuronium", "Aminosteroid", "2,5–3min", "30–40min", "Hepatisch/renal", "Sugammadex"],
      ["Pancuronium", "Aminosteroid", "2–4min", "60–120min (lang)", "Renal (~80%)", "Sugammadex/Neostigmin"],
      ["Atracurium", "Benzylisochinolin", "2–3min", "20–35min", "Hofmann-Elimination (organunabhängig)", "NUR Neostigmin (kein Sugammadex!)"],
      ["Cisatracurium", "Benzylisochinolin", "~2min", "~45min", "Hofmann-Elimination (organunabhängig)", "NUR Neostigmin (kein Sugammadex!)"],
      ["Mivacurium", "Benzylisochinolin", "2–3min", "15–20min (kürzeste)", "Pseudocholinesterase", "Neostigmin"]
    ]
  },
  {
    id: "lokalanaesthetika",
    title: "Lokalanästhetika im Überblick",
    columns: ["Substanz", "Typ", "Wirkdauer", "Max. Einzeldosis", "Besonderheit"],
    rows: [
      ["Lidocain", "Amid", "1–2h", "3–4,5 mg/kg (7 mg/kg mit Adrenalin)", "Geringstes LAST-Risiko der Amide"],
      ["Bupivacain", "Amid", "4–8h (lang)", "~2 mg/kg", "Höchste Kardiotoxizität ('fast-in, slow-out')"],
      ["Levobupivacain", "Amid (S-Enantiomer)", "4–8h", "150 mg", "Geringere Kardiotoxizität als Bupivacain"],
      ["Ropivacain", "Amid (S-Enantiomer)", "4–6h", "2,5–3 mg/kg", "Sensomotorische Dissoziation, geringere Toxizität"],
      ["Prilocain", "Amid", "1–2h", "8,5 mg/kg", "Methämoglobinämie-Risiko (Antidot Methylenblau)"],
      ["Mepivacain", "Amid", "1,5–3h", "6–7 mg/kg", "Keine intrinsische Vasodilatation"],
      ["Tetracain", "Ester", "2–4h (spinal)", "~20mg (Schleimhaut)", "Höchste Toxizität, PABA-Allergiepotenzial"]
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
    title: "Präoperative Nüchternheitszeiten (2-4-6-8-Regel)",
    columns: ["Nahrungsart", "Karenzzeit"],
    rows: [
      ["Klare Flüssigkeiten (Wasser, klarer Tee/Saft ohne Fruchtfleisch, schwarzer Kaffee)", "2 Stunden"],
      ["Muttermilch", "4 Stunden"],
      ["Formulanahrung / leichte Mahlzeit", "6 Stunden"],
      ["Fetthaltige/schwere Mahlzeit, Fleisch", "8 Stunden"]
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
  }
];
