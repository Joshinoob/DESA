// Spezialwissen Säure-Basen – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const CH = [];

  CH.push({
    id: "grundlagen",
    level: "Zelle",
    title: "pH, Puffer und das offene Bicarbonatsystem",
    leitfrage: "Warum ist ausgerechnet der Bicarbonatpuffer mit einem pKa von 6,1 der wichtigste Puffer bei einem Blut-pH von 7,4?",
    einfach: "Der pH-Wert sagt, wie viele Säureteilchen (H⁺) im Blut schwimmen – es sind extrem wenige, und schon kleine Änderungen stören Enzyme und Herz. Puffer fangen H⁺ ab. Der Bicarbonatpuffer ist eigentlich chemisch nicht ideal, aber er ist 'offen': Die Lunge kann CO₂ abatmen und die Niere Bicarbonat nachregeln. Dadurch ist er viel leistungsfähiger als ein geschlossener Puffer.",
    body: [
      { h: "pH und H⁺" },
      "pH = −log[H⁺]. Bei pH 7,40 sind es **40 nmol/l** H⁺ (zum Vergleich: Natrium 140.000.000 nmol/l). Zwischen pH 7,2 und 7,5 gilt grob: **pH-Abnahme um 0,1 ≈ +10 nmol/l H⁺**. Bei pH 7,0 sind es 100 nmol/l – das 2,5-Fache des Normalwerts.",
      { h: "Henderson-Hasselbalch" },
      { formel: "pH = 6,1 + log ([HCO₃⁻] / (0,03 × PaCO₂))", erkl: "HCO₃⁻ in mmol/l, PaCO₂ in mmHg, 0,03 = Löslichkeit von CO₂. Normal: 24 / (0,03 × 40) = 24 / 1,2 = 20 → log 20 = 1,3 → pH 7,4." },
      "==Der pH hängt also nur vom Verhältnis Bicarbonat (Niere) zu CO₂ (Lunge) ab.== Das erklärt die Kompensation: Ändert sich eines, kann das andere gegensteuern.",
      { h: "Puffersysteme" },
      { table: { head: ["Puffer", "Ort", "Besonderheit"], rows: [
        ["Bicarbonat/CO₂", "Extrazellulär (ca. 50–75 % der Pufferkapazität des Blutes)", "Offenes System: CO₂ über Lunge, HCO₃⁻ über Niere regulierbar"],
        ["Hämoglobin", "Erythrozyten", "Wichtigster Nicht-Bicarbonat-Puffer im Blut; desoxygeniertes Hb puffert besser (Haldane-Effekt)"],
        ["Plasmaproteine (Albumin)", "Plasma", "Histidinreste"],
        ["Phosphat", "Intrazellulär, Urin", "pKa 6,8; im Urin wichtig (titrierbare Säure)"],
        ["Knochen", "Langfristig", "Bei chronischer Azidose Calcium-/Carbonat-Freisetzung"]
      ] } },
      { kette: [
        "Säure (H⁺) fällt an",
        "H⁺ + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O (Carboanhydrase)",
        "CO₂ wird abgeatmet → das System 'verliert' die Säure in die Luft",
        "Die Niere bildet verbrauchtes HCO₃⁻ neu"
      ], titel: "Warum das offene System so stark puffert" },
      { h: "Säurebelastung des Körpers" },
      "Täglich entstehen ca. **15.000–20.000 mmol CO₂** ('flüchtige Säure', über die Lunge) und ca. **50–100 mmol nicht-flüchtige Säure** (Schwefel-/Phosphorsäure aus Eiweiß, über die Niere)."
    ],
    merke: [
      "pH 7,4 = 40 nmol/l H⁺; pH −0,1 ≈ +10 nmol/l (7,2–7,5).",
      "pH = 6,1 + log (HCO₃⁻ / 0,03 × PaCO₂); entscheidend ist das Verhältnis (normal 20:1).",
      "Bicarbonat ist stark, weil offen (Lunge + Niere).",
      "Hämoglobin ist der wichtigste Nicht-Bicarbonat-Puffer.",
      "Tägliche Säurelast: ca. 15.000–20.000 mmol CO₂, 50–100 mmol fixe Säure."
    ],
    warum: [
      { q: "Warum wirkt ein Puffer mit pKa 6,1 bei pH 7,4 trotzdem so gut?", a: "Chemisch wäre er im geschlossenen System schwach (pH weit vom pKa). Weil CO₂ aber laufend abgeatmet und HCO₃⁻ renal nachgebildet wird, verschiebt sich das Gleichgewicht nicht – die Kapazität ist praktisch durch die Lunge und Niere 'erweitert'." },
      { q: "Warum steigt der pH, wenn man hyperventiliert?", a: "PaCO₂ fällt, Bicarbonat bleibt zunächst gleich – das Verhältnis HCO₃⁻/CO₂ steigt, damit der pH." }
    ],
    klinik: [
      "Natriumbicarbonat erzeugt CO₂: Bei eingeschränkter Ventilation (z.B. Reanimation ohne ausreichende Beatmung) kann es intrazellulär sogar ansäuern.",
      "Carboanhydrasehemmer (Acetazolamid) führen zu Bicarbonatverlust → metabolische Azidose.",
      "Ein pH von 7,0 bedeutet die 2,5-fache H⁺-Konzentration – Katecholamine wirken schlechter."
    ],
    selbsttest: [
      { q: "Spezialwissen Säure-Basen: Wie hoch ist die H+-Konzentration bei pH 7,4 und bei pH 7,0?", a: "40 nmol/l bzw. 100 nmol/l." },
      { q: "Spezialwissen Säure-Basen: Henderson-Hasselbalch-Gleichung für den Bicarbonatpuffer?", a: "pH = 6,1 + log (HCO3− / (0,03 × PaCO2)); normal 24 / 1,2 = 20 → pH 7,4." },
      { q: "Spezialwissen Säure-Basen: Warum ist der Bicarbonatpuffer trotz pKa 6,1 so leistungsfähig?", a: "Er ist offen: CO2 wird über die Lunge, HCO3− über die Niere reguliert." },
      { q: "Spezialwissen Säure-Basen: Welcher Puffer ist im Blut nach Bicarbonat am wichtigsten?", a: "Hämoglobin (desoxygeniert puffert es besser – Haldane-Effekt)." },
      { q: "Spezialwissen Säure-Basen: Wie viel flüchtige und nicht-flüchtige Säure entsteht täglich?", a: "Ca. 15.000–20.000 mmol CO2 (Lunge) und 50–100 mmol fixe Säuren (Niere)." }
    ]
  });

  CH.push({
    id: "kompensation",
    level: "System",
    title: "Kompensation durch Lunge und Niere",
    leitfrage: "Wie schnell und wie weit kann der Körper eine Störung ausgleichen – und woran erkennt man, dass eine zweite Störung dahintersteckt?",
    einfach: "Bei einer Stoffwechsel-Übersäuerung atmet man schneller und tiefer, um CO₂ loszuwerden – das geht in Minuten. Bei einer Atem-Störung passt die Niere den Bicarbonatgehalt an – das dauert Tage. Der Körper gleicht fast nie vollständig aus. Ist die Antwort viel stärker oder schwächer als erwartet, liegt eine zweite Störung vor.",
    body: [
      { h: "Respiratorische Kompensation" },
      "Chemorezeptoren (vor allem zentral im Hirnstamm, dazu periphere im Glomus caroticum) registrieren den pH-Abfall → Atemminutenvolumen ↑ (bei schwerer Azidose tiefe 'Kussmaul-Atmung'). Beginn in Minuten, Maximum nach ca. 12–24 Stunden.",
      { formel: "Erwarteter PaCO₂ = 1,5 × HCO₃⁻ + 8 (± 2) mmHg", erkl: "Winter-Formel bei metabolischer Azidose. Liegt der gemessene PaCO₂ höher: zusätzliche respiratorische Azidose (z.B. Erschöpfung, Opioide). Niedriger: zusätzliche respiratorische Alkalose." },
      "Bei metabolischer Alkalose ist die Kompensation begrenzt (Hypoventilation ist durch Hypoxie limitiert): PaCO₂ steigt um ca. 0,7 mmHg pro 1 mmol/l HCO₃⁻-Anstieg.",
      { h: "Renale Kompensation" },
      { kette: [
        "Rückresorption fast des gesamten filtrierten Bicarbonats (ca. 80 % im proximalen Tubulus, über Carboanhydrase)",
        "Neubildung von Bicarbonat durch Ausscheidung von H⁺ als titrierbare Säure (v.a. Phosphat)",
        "Und als Ammonium (NH₄⁺) – der anpassungsfähigste Weg, Steigerung über Tage um ein Vielfaches",
        "Bei Alkalose: Bicarbonat-Ausscheidung durch Schaltzellen (Typ B)"
      ], titel: "Wie die Niere Säure ausscheidet" },
      { table: { head: ["Primärstörung", "Erwartete Kompensation (Faustregeln)"], rows: [
        ["Metabolische Azidose", "PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2"],
        ["Metabolische Alkalose", "PaCO₂ steigt ca. 0,7 mmHg pro mmol/l HCO₃⁻"],
        ["Respiratorische Azidose akut", "HCO₃⁻ steigt ca. 1 mmol/l pro 10 mmHg PaCO₂"],
        ["Respiratorische Azidose chronisch (Tage)", "HCO₃⁻ steigt ca. 3,5–4 mmol/l pro 10 mmHg"],
        ["Respiratorische Alkalose akut", "HCO₃⁻ sinkt ca. 2 mmol/l pro 10 mmHg"],
        ["Respiratorische Alkalose chronisch", "HCO₃⁻ sinkt ca. 4–5 mmol/l pro 10 mmHg"]
      ] } },
      "==Der Körper überkompensiert nie: Ein pH auf der 'anderen Seite' von 7,40 spricht für eine gemischte Störung.== Die akuten Werte bei respiratorischen Störungen stammen aus der chemischen Pufferung (Hämoglobin), die chronischen aus der renalen Anpassung.",
      { h: "Kalium und pH" },
      "Bei metabolischer Azidose durch **anorganische Säuren** (z.B. Hyperchlorämie) tauschen Zellen H⁺ gegen K⁺ → Serumkalium steigt (Faustregel ca. 0,6 mmol/l pro 0,1 pH, stark variabel). Bei organischen Säuren (Laktat, Ketonkörper) ist der Effekt geringer. Alkalose senkt das Kalium."
    ],
    merke: [
      "Lunge kompensiert in Minuten bis Stunden, Niere in Tagen.",
      "Winter-Formel: PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2.",
      "Akut respiratorisch: HCO₃⁻ ±1–2 pro 10 mmHg; chronisch ±3,5–5.",
      "Ammonium-Ausscheidung ist der anpassungsfähigste renale Weg.",
      "Keine Überkompensation – pH jenseits von 7,40 = gemischte Störung."
    ],
    warum: [
      { q: "Warum ist die Kompensation einer metabolischen Alkalose so begrenzt?", a: "Kompensation hieße Hypoventilation. Diese senkt aber den PaO₂; die Hypoxie treibt die Atmung wieder an. Deshalb steigt der PaCO₂ selten über ca. 55 mmHg allein durch Kompensation." },
      { q: "Warum ist ein COPD-Patient mit PaCO₂ 60 mmHg und pH 7,36 anders zu bewerten als einer mit pH 7,22?", a: "pH 7,36 bei hohem PaCO₂ zeigt eine chronische, renal kompensierte Störung (hohes Bicarbonat). pH 7,22 bedeutet akute Dekompensation – der CO₂-Anstieg ist neu oder die Kompensation fehlt." }
    ],
    klinik: [
      "Nach Extubation eines chronisch hyperkapnischen Patienten nicht auf 'normale' PaCO₂-Werte zielen – sonst entsteht eine metabolische Alkalose (hohes Bicarbonat) und die Atemantrieb sinkt.",
      "Winter-Formel bei diabetischer Ketoazidose: zeigt, ob der Patient erschöpft (zu hoher PaCO₂) und beatmungspflichtig wird.",
      "Bei Intubation einer schweren metabolischen Azidose das Atemminutenvolumen hoch einstellen – sonst fällt der pH abrupt."
    ],
    selbsttest: [
      { q: "Spezialwissen Säure-Basen: Wie lautet die Winter-Formel und wofür wird sie genutzt?", a: "Erwarteter PaCO2 = 1,5 × HCO3− + 8 ± 2 mmHg bei metabolischer Azidose; Abweichung zeigt eine zusätzliche respiratorische Störung." },
      { q: "Spezialwissen Säure-Basen: Wie stark steigt Bicarbonat bei akuter bzw. chronischer respiratorischer Azidose?", a: "Akut ca. 1 mmol/l pro 10 mmHg PaCO2, chronisch ca. 3,5–4 mmol/l pro 10 mmHg." },
      { q: "Spezialwissen Säure-Basen: Über welche Wege scheidet die Niere Säure aus?", a: "Bicarbonat-Rückresorption, Ausscheidung von H+ als titrierbare Säure (Phosphat) und als Ammonium (anpassungsfähigster Weg)." },
      { q: "Spezialwissen Säure-Basen: Was spricht für eine gemischte Säure-Basen-Störung?", a: "Kompensation weicht von den erwarteten Werten ab oder der pH liegt auf der 'falschen' Seite von 7,40 (keine Überkompensation)." },
      { q: "Spezialwissen Säure-Basen: Warum ist die Kompensation der metabolischen Alkalose begrenzt?", a: "Hypoventilation erzeugt Hypoxie, die den Atemantrieb wieder steigert." }
    ]
  });

  CH.push({
    id: "bga",
    level: "Klinik",
    title: "Blutgasanalyse Schritt für Schritt: Anionenlücke, Delta-Ratio, Base Excess",
    leitfrage: "Mit welcher festen Reihenfolge findet man auch versteckte Doppelstörungen in einer Blutgasanalyse?",
    einfach: "Eine Blutgasanalyse liest man am besten immer gleich: Ist der pH zu sauer oder zu basisch? Kommt das von der Atmung oder vom Stoffwechsel? Ist der Ausgleich passend? Bei Übersäuerung durch Stoffwechsel rechnet man die Anionenlücke aus: Sie zeigt, ob eine unbekannte Säure (z.B. Milchsäure) im Blut ist oder ob Bicarbonat verloren ging.",
    body: [
      { h: "Sechs Schritte" },
      { ul: [
        "**1. pH**: <7,35 Azidämie, >7,45 Alkalämie.",
        "**2. Primärstörung**: PaCO₂ und HCO₃⁻ – welcher Wert erklärt die pH-Richtung?",
        "**3. Kompensation** prüfen (Winter-Formel, Faustregeln).",
        "**4. Anionenlücke** bei metabolischer Azidose (albuminkorrigiert).",
        "**5. Delta-Ratio** bei erhöhter Anionenlücke: versteckte zweite metabolische Störung?",
        "**6. Klinik**: Passt das Bild? Oxygenierung (PaO₂/FiO₂), Laktat, Elektrolyte, Glukose."
      ] },
      { h: "Anionenlücke" },
      { formel: "AG = Na⁺ − (Cl⁻ + HCO₃⁻)", erkl: "Normal ca. 8–12 mmol/l ohne Kalium (geräteabhängig, moderne Analysatoren oft niedriger, ca. 3–11). Korrektur für Albumin: pro 10 g/l Albumin unter 40 g/l AG um ca. 2,5 mmol/l nach oben korrigieren." },
      "Die Lücke entsteht durch nicht gemessene Anionen (vor allem **Albumin**, dazu Phosphat, Sulfat, organische Säuren). ==Bei Hypalbuminämie (Intensivpatienten!) ist die gemessene Lücke falsch niedrig und kann eine Laktatazidose verbergen.==",
      { table: { head: ["Erhöhte Anionenlücke", "Normale Anionenlücke (hyperchlorämisch)"], rows: [
        ["Laktat (Schock, Sepsis, Metformin, Ischämie)", "Kochsalz-Infusion (Chlorid-Last)"],
        ["Ketonkörper (Diabetes, Alkohol, Hunger)", "Durchfall, Darmfisteln (Bicarbonatverlust)"],
        ["Niereninsuffizienz (Urämie)", "Renal-tubuläre Azidose"],
        ["Toxine: Methanol, Ethylenglykol, Salicylate, Paracetamol (5-Oxoprolin), Toluol", "Carboanhydrasehemmer, Ureterosigmoidostomie"],
        ["Merkhilfe GOLDMARK: Glykole, Oxoprolin, L-Laktat, D-Laktat, Methanol, Aspirin, Renal, Ketone", ""]
      ] } },
      { h: "Delta-Ratio" },
      { formel: "Δ-Ratio = (AG − 12) / (24 − HCO₃⁻)", erkl: "Ca. 1–2: reine Anionenlücken-Azidose. <1: zusätzlich hyperchlorämische (Non-Gap-)Azidose. >2: zusätzlich metabolische Alkalose (oder vorbestehend erhöhtes Bicarbonat, z.B. COPD)." },
      { h: "Base Excess und Standardbicarbonat" },
      "**Base Excess (BE)**: Menge Säure bzw. Base (mmol/l), die nötig wäre, um das Blut bei PaCO₂ 40 mmHg und 37 °C auf pH 7,40 zu titrieren – also ein **rein metabolischer** Parameter. Normal **−2 bis +2 mmol/l**. Standardbicarbonat: HCO₃⁻ unter Standardbedingungen (PaCO₂ 40 mmHg). ==Beide eliminieren den respiratorischen Anteil, sagen aber nicht, welche Säure dahintersteckt.==",
      { h: "Temperatur: Alpha-Stat vs. pH-Stat" },
      "Analysatoren messen bei 37 °C. Bei Hypothermie: **Alpha-Stat** = Werte bei 37 °C interpretieren (Ziel PaCO₂ 40 mmHg 'bei 37 °C', erhält die Autoregulation; bevorzugt bei Erwachsenen). **pH-Stat** = auf die Körpertemperatur korrigieren und dort pH 7,40 anstreben (CO₂-Zugabe, Vasodilatation, bessere Hirnkühlung; teils in der Kinderherzchirurgie)."
    ],
    merke: [
      "Reihenfolge: pH → Primärstörung → Kompensation → Anionenlücke → Delta-Ratio → Klinik.",
      "AG = Na⁺ − (Cl⁻ + HCO₃⁻), normal ca. 8–12; +2,5 je 10 g/l Albumin-Mangel.",
      "Erhöhte AG: Laktat, Ketone, Urämie, Toxine (GOLDMARK); normale AG: NaCl, Diarrhoe, RTA.",
      "Delta-Ratio <1: zusätzlich Non-Gap-Azidose; >2: zusätzlich metabolische Alkalose.",
      "BE −2 bis +2: rein metabolisch; Alpha-Stat bei Erwachsenen in Hypothermie."
    ],
    warum: [
      { q: "Warum kann ein septischer Patient mit Laktat 5 mmol/l eine 'normale' Anionenlücke haben?", a: "Albumin ist der größte Teil der nicht gemessenen Anionen. Bei schwerer Hypalbuminämie (z.B. 20 g/l) ist die Lücke um ca. 5 mmol/l kleiner – das Laktat 'füllt' sie nur bis zum scheinbaren Normalwert auf. Korrektur deckt es auf." },
      { q: "Warum erzeugt große Mengen Kochsalzlösung eine Azidose?", a: "NaCl 0,9 % enthält gleich viel Natrium und Chlorid (je 154 mmol/l); das Plasma normalerweise viel weniger Chlorid als Natrium. Das zugeführte Chlorid verkleinert die starke Ionendifferenz (SID) → Bicarbonat sinkt (→ Kapitel Stewart)." }
    ],
    klinik: [
      "Metformin-assoziierte Laktatazidose: hohe Anionenlücke, oft Nierenversagen, Dialyse wirksam.",
      "Methanol/Ethylenglykol: hohe Anionen- UND osmotische Lücke; Fomepizol, Dialyse.",
      "Euglykämische Ketoazidose unter SGLT2-Hemmern: hohe Anionenlücke trotz fast normalem Blutzucker."
    ],
    selbsttest: [
      { q: "Spezialwissen Säure-Basen: Formel und Normalwert der Anionenlücke, und wie korrigiert man für Albumin?", a: "AG = Na+ − (Cl− + HCO3−), normal ca. 8–12 mmol/l (geräteabhängig); pro 10 g/l Albumin unter 40 g/l um ca. 2,5 mmol/l erhöhen." },
      { q: "Spezialwissen Säure-Basen: Nenne Ursachen einer Azidose mit erhöhter Anionenlücke (GOLDMARK).", a: "Glykole, 5-Oxoprolin (Paracetamol), L-Laktat, D-Laktat, Methanol, Aspirin, Renal (Urämie), Ketone." },
      { q: "Spezialwissen Säure-Basen: Nenne Ursachen einer Azidose mit normaler Anionenlücke.", a: "Kochsalz-Infusion (Hyperchlorämie), Diarrhoe/Fisteln, renal-tubuläre Azidose, Carboanhydrasehemmer, Ureterosigmoidostomie." },
      { q: "Spezialwissen Säure-Basen: Wie wird die Delta-Ratio berechnet und interpretiert?", a: "(AG − 12) / (24 − HCO3−): 1–2 reine AG-Azidose; <1 zusätzlich Non-Gap-Azidose; >2 zusätzlich metabolische Alkalose." },
      { q: "Spezialwissen Säure-Basen: Was ist der Base Excess?", a: "Menge Säure/Base, die nötig wäre, um Blut bei PaCO2 40 mmHg und 37 °C auf pH 7,40 zu bringen – rein metabolischer Parameter, normal −2 bis +2 mmol/l." },
      { q: "Spezialwissen Säure-Basen: Unterschied Alpha-Stat und pH-Stat?", a: "Alpha-Stat: Werte bei 37 °C interpretieren, Autoregulation bleibt erhalten (Erwachsene). pH-Stat: auf Körpertemperatur korrigieren, pH 7,40 anstreben (CO2-Zugabe, mehr Hirndurchblutung; teils Kinderherzchirurgie)." }
    ]
  });

  CH.push({
    id: "stewart",
    level: "System",
    title: "Der physikochemische Ansatz nach Stewart",
    leitfrage: "Wenn Bicarbonat nur eine abhängige Größe ist – was bestimmt den pH dann wirklich?",
    einfach: "Stewart sagt: Bicarbonat und H⁺ ändern sich nur als Folge von drei Stellschrauben. Erstens CO₂. Zweitens der Unterschied zwischen positiven und negativen 'starken' Salzteilchen (vor allem Natrium minus Chlorid). Drittens die Menge an schwachen Säuren (vor allem Albumin und Phosphat). Damit erklärt man gut, warum Kochsalzlösung übersäuert und niedriges Albumin alkalisiert.",
    body: [
      { h: "Drei unabhängige Variablen" },
      { table: { head: ["Variable", "Bedeutung", "Wirkung"], rows: [
        ["PaCO₂", "respiratorisch", "↑ → Azidose"],
        ["Starke Ionendifferenz (SID)", "Na⁺ + K⁺ + Ca²⁺ + Mg²⁺ − Cl⁻ − Laktat (u.a.), normal ca. 40–42 mmol/l", "SID ↓ → Azidose; SID ↑ → Alkalose"],
        ["Schwache Säuren (A_tot)", "v.a. Albumin, Phosphat", "A_tot ↑ → Azidose; ↓ (Hypalbuminämie) → Alkalose"]
      ] } },
      "Wegen der **Elektroneutralität** muss eine kleinere SID (mehr Chlorid oder Laktat im Verhältnis zu Natrium) durch weniger Bicarbonat 'ausgeglichen' werden → Azidose. ==Bicarbonat ist hier Folge, nicht Ursache.==",
      { h: "Infusionslösungen" },
      { table: { head: ["Lösung", "Na⁺", "Cl⁻", "In-vivo-SID (nach Metabolisierung)", "Effekt"], rows: [
        ["NaCl 0,9 %", "154", "154", "0", "Hyperchlorämische Azidose bei großen Mengen"],
        ["Balancierte Lösungen (z.B. mit Acetat/Malat oder Laktat)", "ca. 130–140", "ca. 105–127", "ca. 25–30", "Weitgehend pH-neutral"],
        ["Natriumbicarbonat 8,4 %", "1000", "0", "hoch", "Alkalisiert"]
      ] } },
      "Die organischen Anionen (Acetat, Laktat, Malat, Gluconat) werden verstoffwechselt → zurück bleibt Natrium ohne Chlorid → SID steigt. Werte gerundet, je nach Produkt verschieden.",
      { h: "Anwendung: Hypalbuminämie und Mischbilder" },
      "Ein Intensivpatient kann eine **hypalbuminämische Alkalose** (A_tot ↓) und gleichzeitig eine **hyperchlorämische Azidose** (SID ↓) haben – pH und Base Excess wirken dann fast normal. ==Der Stewart-Ansatz zerlegt den Base Excess in seine Ursachen (z.B. Chlorid-Effekt, Albumin-Effekt, Laktat-Effekt) und macht solche verdeckten Störungen sichtbar.==",
      { h: "Vereinfachte Bedside-Schätzung" },
      { ul: [
        "Natrium-Chlorid-Effekt auf BE ≈ (Na⁺ − Cl⁻) − 38 (mmol/l)",
        "Albumin-Effekt auf BE ≈ 0,25 × (42 − Albumin in g/l)",
        "Laktat-Effekt ≈ −Laktat (mmol/l)",
        "Rest = nicht gemessene Anionen (Ketone, Toxine, Urämie)"
      ] },
      "Die Faustformeln stammen aus vereinfachten Modellen (u.a. Story et al. 2004); Konstanten variieren je nach Quelle leicht. Beide Denkweisen (Henderson-Hasselbalch/Anionenlücke und Stewart) führen klinisch meist zum gleichen Ergebnis – Stewart erklärt die Ursachen besser, die klassische ist schneller."
    ],
    merke: [
      "Unabhängige Variablen: PaCO₂, SID, schwache Säuren (Albumin, Phosphat).",
      "SID normal ca. 40–42 mmol/l; SID ↓ → Azidose.",
      "NaCl 0,9 %: SID 0 → hyperchlorämische Azidose; balancierte Lösungen SID ca. 25–30.",
      "Hypalbuminämie → Alkalose, kann Azidosen maskieren.",
      "BE lässt sich in Chlorid-, Albumin-, Laktat- und Rest-Effekt zerlegen."
    ],
    warum: [
      { q: "Warum führt Erbrechen zu einer metabolischen Alkalose im Stewart-Modell?", a: "Mit dem Magensaft geht viel Chlorid verloren. Die SID (Natrium minus Chlorid) steigt → Bicarbonat steigt → Alkalose. Darum wird sie mit Kochsalz (Chlorid) behandelt ('chloridresponsive Alkalose')." },
      { q: "Warum ist Bicarbonat im Stewart-Ansatz keine Ursache?", a: "Es stellt sich aus Elektroneutralität und dem Dissoziationsgleichgewicht ein, sobald PaCO₂, SID und schwache Säuren festliegen. Man kann es nicht unabhängig davon verändern – auch Natriumbicarbonat wirkt über das Natrium (SID ↑)." }
    ],
    klinik: [
      "Balancierte Kristalloide bevorzugen (u.a. SMART-Studie: weniger kombinierte Nierenkomplikationen als mit NaCl 0,9 %).",
      "Chloridresponsive Alkalose (Erbrechen, Diuretika): NaCl und Kalium ersetzen.",
      "Bei Hypalbuminämie ist ein 'normaler' BE kein Ausschluss einer Azidose."
    ],
    selbsttest: [
      { q: "Spezialwissen Säure-Basen: Welche drei unabhängigen Variablen bestimmen den pH nach Stewart?", a: "PaCO2, starke Ionendifferenz (SID) und Gesamtmenge schwacher Säuren (A_tot, v.a. Albumin, Phosphat)." },
      { q: "Spezialwissen Säure-Basen: Warum verursacht NaCl 0,9 % eine Azidose?", a: "Gleich viel Na+ und Cl− (154 mmol/l) → In-vivo-SID 0; große Mengen senken die Plasma-SID → Bicarbonat sinkt (hyperchlorämische Azidose)." },
      { q: "Spezialwissen Säure-Basen: Wie wirkt Hypalbuminämie auf den Säure-Basen-Haushalt?", a: "Weniger schwache Säure → metabolische Alkalose; kann Azidosen (z.B. Laktat, Hyperchlorämie) maskieren." },
      { q: "Spezialwissen Säure-Basen: Normalwert der starken Ionendifferenz?", a: "Ca. 40–42 mmol/l." },
      { q: "Spezialwissen Säure-Basen: Warum ist die Alkalose nach Erbrechen 'chloridresponsiv'?", a: "Chloridverlust erhöht die SID; Gabe von NaCl (Chlorid) senkt sie wieder und behebt die Alkalose." }
    ]
  });

  CH.push({
    id: "stoerungen",
    level: "Klinik",
    title: "Typische Störungen und ihre Therapie",
    leitfrage: "Wann hilft Natriumbicarbonat tatsächlich – und wann ist es eher schädlich?",
    einfach: "Die wichtigste Behandlung einer Säure-Basen-Störung ist fast immer, die Ursache zu beseitigen: Kreislauf wiederherstellen, Insulin bei Ketoazidose, Dialyse bei Vergiftung oder Nierenversagen. Bicarbonat ist nur in bestimmten Fällen sinnvoll, zum Beispiel bei Bicarbonatverlust oder bestimmten Vergiftungen.",
    body: [
      { h: "Metabolische Azidose" },
      { table: { head: ["Ursache", "Therapie der Ursache", "Bicarbonat?"], rows: [
        ["Laktatazidose (Schock)", "Perfusion, Sauerstoffangebot, Infektionsherd", "Meist nein; erwägen bei pH <7,2 und akutem Nierenversagen (BICAR-ICU: Vorteil nur in dieser Gruppe)"],
        ["Diabetische Ketoazidose", "Volumen, Insulin, Kalium", "Nur bei sehr schwerer Azidose (pH <6,9–7,0, Leitlinien uneinheitlich)"],
        ["Hyperchlorämisch (NaCl, Diarrhoe)", "Balancierte Lösungen, Ursache", "Bei Bicarbonatverlust sinnvoll"],
        ["Trizyklika-Intoxikation (breiter QRS)", "—", "Ja: Natriumbicarbonat (Natrium-Last + Alkalisierung)"],
        ["Salicylat-Intoxikation", "Dialyse bei schwerer Vergiftung", "Ja: Alkalisierung des Urins"],
        ["Hyperkaliämie mit Azidose", "Calcium, Insulin/Glukose", "Ergänzend erwägen"]
      ] } },
      { kette: [
        "Natriumbicarbonat i.v.",
        "HCO₃⁻ + H⁺ → H₂O + CO₂",
        "CO₂ diffundiert schneller in die Zellen als HCO₃⁻",
        "Ohne ausreichende Abatmung: paradoxe intrazelluläre Azidose, PaCO₂ ↑",
        "Weitere Nebenwirkungen: Hypernatriämie, Volumenlast, ionisiertes Calcium ↓, Hypokaliämie, Linksverschiebung der O₂-Bindungskurve"
      ], titel: "Warum Bicarbonat Grenzen hat" },
      { h: "Metabolische Alkalose" },
      { ul: [
        "**Chloridresponsiv** (Urin-Cl⁻ <20 mmol/l): Erbrechen, Magensonde, Diuretika (nach Absetzen), Posthyperkapnie → NaCl, Kalium ersetzen.",
        "**Nicht chloridresponsiv** (Urin-Cl⁻ >20): Hyperaldosteronismus, Cushing, schwerer Kaliummangel, laufende Diuretika → Ursache behandeln, Spironolacton; bei Überwässerung ggf. Acetazolamid.",
        "Folgen: Hypoventilation, Hypokaliämie, ionisiertes Calcium ↓ (Krämpfe, Arrhythmien), Linksverschiebung der O₂-Bindungskurve."
      ] },
      { h: "Respiratorische Störungen" },
      { ul: [
        "**Respiratorische Azidose**: Hypoventilation (Opioide, Restrelaxierung, COPD, neuromuskulär), erhöhte CO₂-Produktion (MH, Sepsis, Laparoskopie mit CO₂) → Ursache, Beatmung (NIV/invasiv). Chronische Hyperkapnie nur langsam senken.",
        "**Respiratorische Alkalose**: Schmerz, Angst, Hypoxämie, Sepsis (früh), Lungenembolie, Schwangerschaft, Leberzirrhose, Salicylate, Überbeatmung → Ursache, Beatmung anpassen."
      ] },
      { h: "Beispiel" },
      "pH 7,22; PaCO₂ 25 mmHg; HCO₃⁻ 10 mmol/l; Na⁺ 138; Cl⁻ 100; Albumin 40 g/l. → Metabolische Azidose. Winter: 1,5 × 10 + 8 = 23 ± 2 → passend kompensiert. AG = 138 − 110 = 28 (erhöht). Δ-Ratio = (28 − 12) / (24 − 10) = 16/14 ≈ 1,1 → reine Anionenlücken-Azidose (z.B. Ketoazidose/Laktat)."
    ],
    merke: [
      "Ursache behandeln – Bicarbonat nur in speziellen Situationen.",
      "BICAR-ICU: Vorteil nur bei pH <7,2 mit akutem Nierenversagen.",
      "Bicarbonat sinnvoll bei Trizyklika (breiter QRS), Salicylat, Bicarbonatverlust.",
      "Alkalose: Urin-Chlorid unterscheidet chloridresponsiv von nicht-responsiv.",
      "Chronische Hyperkapnie langsam senken (Posthyperkapnie-Alkalose)."
    ],
    warum: [
      { q: "Warum kann Bicarbonat bei Reanimation ohne gute Beatmung schaden?", a: "Es wird zu CO₂ umgesetzt, das nicht abgeatmet wird. CO₂ dringt schnell in die Zellen und senkt dort den pH (paradoxe intrazelluläre Azidose, auch im Myokard und Liquor); zudem Hypernatriämie und Calcium-Abfall." },
      { q: "Warum hilft Natriumbicarbonat bei Trizyklika-Vergiftung?", a: "Trizyklika blockieren schnelle Na⁺-Kanäle des Herzens (breiter QRS, Arrhythmien). Die hohe Natriumzufuhr überwindet die Blockade teilweise, die Alkalisierung senkt den freien, an die Kanäle bindenden Anteil." }
    ],
    klinik: [
      "Bei DKA Kalium vor Insulin prüfen (Insulin verschiebt Kalium in die Zellen).",
      "Laparoskopie: CO₂-Resorption → Atemminutenvolumen erhöhen.",
      "Maligne Hyperthermie: gemischte respiratorisch-metabolische Azidose."
    ],
    selbsttest: [
      { q: "Spezialwissen Säure-Basen: Was zeigte die BICAR-ICU-Studie?", a: "Bei schwerer metabolischer Azidose (pH ≤7,2) verbesserte Natriumbicarbonat das Überleben nur in der Untergruppe mit akutem Nierenversagen; weniger Dialysebedarf." },
      { q: "Spezialwissen Säure-Basen: Bei welchen Vergiftungen ist Natriumbicarbonat indiziert?", a: "Trizyklische Antidepressiva (breiter QRS, Arrhythmien) und Salicylate (Urinalkalisierung)." },
      { q: "Spezialwissen Säure-Basen: Welche Nebenwirkungen hat Natriumbicarbonat?", a: "CO2-Bildung mit paradoxer intrazellulärer Azidose, Hypernatriämie/Volumenlast, ionisiertes Calcium ↓, Hypokaliämie, Linksverschiebung der O2-Bindungskurve." },
      { q: "Spezialwissen Säure-Basen: Wie unterscheidet man chloridresponsive von nicht chloridresponsiver Alkalose?", a: "Urin-Chlorid <20 mmol/l: chloridresponsiv (Erbrechen, Magensonde, nach Diuretika); >20: nicht responsiv (Hyperaldosteronismus, Cushing, schwerer K-Mangel, laufende Diuretika)." },
      { q: "Spezialwissen Säure-Basen: Interpretiere: pH 7,22, PaCO2 25, HCO3 10, Na 138, Cl 100, Albumin normal.", a: "Metabolische Azidose, passend kompensiert (Winter 23 ± 2), Anionenlücke 28 (erhöht), Delta-Ratio ≈ 1,1 → reine Anionenlücken-Azidose (z.B. Keto-/Laktatazidose)." }
    ]
  });

  window.__addSpezialOrgan({
    id: "saeurebasen",
    title: "Säure-Basen",
    subtitle: "Puffer, Kompensation, Blutgasanalyse Schritt für Schritt, Stewart-Ansatz und Therapie",
    subtopic: "niere-saeure-basen",
    chapters: CH,
    sources: [
      "Berend K, de Vries AP, Gans RO. Physiological approach to assessment of acid-base disturbances. N Engl J Med 2014;371:1434–1445.",
      "Hamm LL, Nakhoul N, Hering-Smith KS. Acid-base homeostasis. Clin J Am Soc Nephrol 2015;10:2232–2242.",
      "Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol 2010;6:274–285.",
      "Story DA, Morimatsu H, Bellomo R. Strong ions, weak acids and base excess: a simplified Fencl-Stewart approach to clinical acid-base disorders. Br J Anaesth 2004;92:54–60.",
      "Kellum JA. Determinants of blood pH in health and disease. Crit Care 2000;4:6–14.",
      "Jaber S, Paugam C, Futier E, et al. Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the intensive care unit (BICAR-ICU). Lancet 2018;392:31–40.",
      "Semler MW, Self WH, Wanderer JP, et al. Balanced crystalloids versus saline in critically ill adults (SMART). N Engl J Med 2018;378:829–839.",
      "Mehta AN, Emmett JB, Emmett M. GOLD MARK: an anion gap mnemonic for the 21st century. Lancet 2008;372:892.",
      "Lehrbuch: Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017."
    ]
  });
})();
