// Zeichentraining für die mündliche Prüfung: Kurven, Strukturen und Schemata, die man im SOE bzw.
// im Fachgespräch selbst zeichnen und dabei erklären können sollte (die ESAIC empfiehlt das Zeichnen
// ausdrücklich, z.B. die Sauerstoffbindungskurve oder PK/PD-Graphen). Aufgaben eigens formuliert.
// Schema: {id, titel, bereich, aufgabe, checkliste:[...], erklaeren:[...], modelle:[{abb|kurve|svg, text?}], kapitel?}
//   abb: aria-label einer Spezialwissen-Abbildung, kurve: id aus KURVEN, svg: eigene Zeichnung (unten).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Lokalanästhetika: Grundstruktur, Lidocain (Amid), Procain (Ester) ----------
  function ring(cx, cy, rr, k) {
    const pts = [];
    for (let i = 0; i < 6; i++) { const w = i * Math.PI / 3; pts.push([cx + rr * Math.cos(w), cy + rr * Math.sin(w)]); }
    return l(pts, "flb", k, true) + c(cx, cy, rr * 0.55, "ln", k);
  }
  const SVG_LA = (function () {
    let s = t(4, 14, "Grundbauplan eines Lokalanästhetikums", "t-l");
    s += r(4, 24, 112, 46, "s3") + t(60, 42, "aromatischer Ring", "t-s", "middle", 3) + t(60, 56, "lipophil", "t-n", "middle");
    s += r(134, 24, 112, 46, "s2") + t(190, 42, "Zwischenkette", "t-s", "middle", 2) + t(190, 56, "Ester oder Amid", "t-n", "middle");
    s += r(264, 24, 112, 46, "s1") + t(320, 42, "tertiäres Amin", "t-s", "middle", 1) + t(320, 56, "hydrophil, protonierbar", "t-n", "middle");
    s += l([[116, 47], [134, 47]], "lnb", 0) + l([[246, 47], [264, 47]], "lnb", 0);
    // Lidocain
    s += t(130, 104, "Lidocain – Amid", "t-l", "start", 2);
    s += ring(60, 132, 20, 3);
    s += l([[70, 114.7], [76, 104]], "ln", 3) + t(80, 102, "CH₃", "t-n", "start", 3);
    s += l([[70, 149.3], [76, 160]], "ln", 3) + t(80, 168, "CH₃", "t-n", "start", 3);
    s += l([[80, 132], [96, 132]], "ln", 0);
    s += r(96, 120, 70, 24, "fl", 2, 4) + t(131, 136, "NH–CO", "t-s", "middle", 2);
    s += l([[166, 132], [176, 132]], "ln", 0) + t(178, 136, "CH₂", "t-s", "start");
    s += l([[200, 132], [212, 132]], "ln", 0);
    s += r(212, 120, 70, 24, "fl", 1, 4) + t(247, 136, "N(C₂H₅)₂", "t-s", "middle", 1);
    s += t(292, 128, ["2,6-Dimethyl-", "phenyl"], "t-n", "start", 3);
    // Procain
    s += t(4, 194, "Procain – Ester", "t-l", "start", 4);
    s += ring(70, 232, 20, 3);
    s += l([[50, 232], [40, 232]], "ln", 3) + t(36, 236, "H₂N", "t-n", "end", 3);
    s += l([[90, 232], [102, 232]], "ln", 0);
    s += r(102, 220, 60, 24, "fl", 4, 4) + t(132, 236, "CO–O", "t-s", "middle", 4);
    s += l([[162, 232], [170, 232]], "ln", 0) + t(172, 236, "CH₂–CH₂", "t-s", "start");
    s += l([[224, 232], [234, 232]], "ln", 0);
    s += r(234, 220, 70, 24, "fl", 1, 4) + t(269, 236, "N(C₂H₅)₂", "t-s", "middle", 1);
    s += t(4, 272, ["Amide: Abbau in der Leber (Lidocain, Prilocain, Mepivacain, Bupivacain, Ropivacain).", "Ester: Spaltung durch Plasmacholinesterase → para-Aminobenzoesäure (Allergie)", "(Procain, Chloroprocain, Tetracain, Benzocain, Cocain)."], "t-n");
    return F.svg(380, 304, "Grundstruktur der Lokalanästhetika mit Lidocain als Amid und Procain als Ester", s);
  })();

  // ---------- Plexus brachialis ----------
  const SVG_PLEXUS = (function () {
    let s = "";
    const W = { C5: 40, C6: 70, C7: 100, C8: 130, Th1: 160 };
    s += t(8, 14, "Wurzeln", "t-n", "start", 0) + t(96, 14, "Trunci", "t-n", "middle", 0) + t(176, 14, "Divisionen", "t-n", "middle", 0) + t(252, 14, "Faszikel", "t-n", "middle", 0) + t(330, 14, "Endäste", "t-n", "middle", 0);
    Object.keys(W).forEach(function (k) { s += t(8, W[k] + 4, k, "t-s", "start", 6); });
    const TR = { sup: 55, med: 100, inf: 145 };
    s += l([[34, W.C5], [86, TR.sup]], "lnb", 3) + l([[34, W.C6], [86, TR.sup]], "lnb", 3);
    s += l([[34, W.C7], [86, TR.med]], "lnb", 3);
    s += l([[34, W.C8], [86, TR.inf]], "lnb", 3) + l([[34, W.Th1], [86, TR.inf]], "lnb", 3);
    s += t(96, TR.sup - 8, "superior", "t-n", "middle", 3) + t(96, TR.med - 8, "medius", "t-n", "middle", 3) + t(96, TR.inf - 8, "inferior", "t-n", "middle", 3);
    s += l([[86, TR.sup], [110, TR.sup]], "lnb", 3) + l([[86, TR.med], [110, TR.med]], "lnb", 3) + l([[86, TR.inf], [110, TR.inf]], "lnb", 3);
    const CO = { lat: 70, post: 110, med: 150 };
    // vordere Divisionen (durchgezogen) und hintere (gestrichelt)
    s += l([[110, TR.sup], [240, CO.lat]], "lnb", 2) + l([[110, TR.med], [240, CO.lat]], "lnb", 2) + l([[110, TR.inf], [240, CO.med]], "lnb", 2);
    s += l([[110, TR.sup], [240, CO.post]], "lnd", 4) + l([[110, TR.med], [240, CO.post]], "lnd", 4) + l([[110, TR.inf], [240, CO.post]], "lnd", 4);
    s += t(252, CO.lat - 8, "lateralis", "t-n", "middle", 2) + t(252, CO.post - 8, "posterior", "t-n", "middle", 4) + t(252, CO.med + 16, "medialis", "t-n", "middle", 2);
    s += l([[240, CO.lat], [264, CO.lat]], "lnb", 2) + l([[240, CO.post], [264, CO.post]], "lnb", 4) + l([[240, CO.med], [264, CO.med]], "lnb", 2);
    const EN = { mc: 40, med: 76, ax: 104, rad: 126, uln: 160 };
    s += l([[264, CO.lat], [300, EN.mc]], "ln", 2) + l([[264, CO.lat], [300, EN.med]], "ln", 2) + l([[264, CO.med], [300, EN.med]], "ln", 2) + l([[264, CO.med], [300, EN.uln]], "ln", 2);
    s += l([[264, CO.post], [300, EN.ax]], "ln", 4) + l([[264, CO.post], [300, EN.rad]], "ln", 4);
    s += t(304, EN.mc + 3, "musculocutaneus", "t-n", "start", 6) + t(304, EN.med + 3, "medianus", "t-n", "start", 6) + t(304, EN.ax + 3, "axillaris", "t-n", "start", 6);
    s += t(304, EN.rad + 3, "radialis", "t-n", "start", 6) + t(304, EN.uln + 3, "ulnaris", "t-n", "start", 6);
    // Blockadehöhen
    const B = [[60, "interskalenär"], [150, "supraklavikulär"], [252, "infraklavikulär"], [330, "axillär"]];
    s += l([[20, 186], [370, 186]], "ax");
    B.forEach(function (b) { s += a(b[0], 200, b[0], 188, 5) + t(b[0], 212, b[1], "t-n", "middle", 5); });
    s += t(4, 232, ["Durchgezogen: vordere Divisionen (Beuger), gestrichelt: hintere Divisionen (Strecker).", "Interskalenär liegt der N. phrenicus (C3–5) nahe → Zwerchfellparese."], "t-n");
    return F.svg(380, 254, "Schema des Plexus brachialis von den Wurzeln bis zu den Endästen mit Blockadehöhen", s);
  })();

  // ---------- Schichten bei rückenmarksnaher Punktion ----------
  const SVG_RUECKEN = (function () {
    let s = t(4, 14, "Medianer Zugang – Schichten von außen nach innen", "t-l");
    const L = [
      ["Haut, Subkutis", 0], ["Lig. supraspinale", 0], ["Lig. interspinale", 0], ["Lig. flavum", 3],
      ["Epiduralraum (Fett, Venen)", 2], ["Dura mater", 4], ["Arachnoidea", 4], ["Subarachnoidalraum (Liquor)", 1], ["Rückenmark bzw. Cauda equina", 5]
    ];
    L.forEach(function (e, i) {
      const y = 26 + i * 24;
      s += r(150, y, 40, 22, "flb", e[1], 2) + t(198, y + 15, e[0], "t-s", "start", e[1] === 0 ? 6 : e[1]);
    });
    s += a(120, 30, 120, 118, 0, "lnb") + t(112, 74, ["Nadel"], "t-n", "end");
    s += t(4, 128, ["Widerstands-", "verlust nach dem", "Lig. flavum →", "Epiduralraum"], "t-n", "start", 2);
    s += t(4, 196, ["Liquor nach", "Dura und", "Arachnoidea →", "spinal"], "t-n", "start", 1);
    s += t(4, 254, ["Rückenmark endet beim Erwachsenen meist auf Höhe L1/L2 (Conus)", "→ Spinalanästhesie unterhalb, z.B. L3/4."], "t-n");
    return F.svg(380, 276, "Schichten beim medianen Zugang zum Epidural- und Spinalraum", s);
  })();

  // ---------- Pulsoxymetrie ----------
  const SVG_PULSOX = (function () {
    const P = F.plot({ x: 40, y: 24, w: 320, h: 150, xmin: 600, xmax: 1000, ymin: 0, ymax: 8,
      xticks: [[600, "600"], [660, "660"], [805, "805"], [940, "940"], [1000, "1000"]], xlabel: "Wellenlänge (nm)", ylabel: "Absorption (log, schematisch)", ylabelDx: 36 });
    let s = P.svg;
    s += l([[P.x(660), P.y(0)], [P.x(660), P.y(8)]], "lnd", 5) + l([[P.x(940), P.y(0)], [P.x(940), P.y(8)]], "lnd", 4) + l([[P.x(805), P.y(0)], [P.x(805), P.y(8)]], "lnd", 0);
    const hb = [[600, 7.5], [660, 6.5], [700, 4.6], [760, 4.9], [805, 3.0], [900, 2.5], [940, 2.4], [1000, 2.2]];
    const hbo = [[600, 5.0], [640, 1.6], [660, 1.3], [700, 1.6], [760, 2.3], [805, 3.0], [900, 4.0], [940, 4.1], [1000, 3.8]];
    s += F.sm(hb.map(function (p) { return [P.x(p[0]), P.y(p[1])]; }), "lnb", 1) + F.sm(hbo.map(function (p) { return [P.x(p[0]), P.y(p[1])]; }), "lnb", 5);
    s += t(P.x(700) + 4, P.y(5.4), "Desoxy-Hb", "t-s", "start", 1) + t(P.x(900), P.y(4.5) - 4, "Oxy-Hb", "t-s", "middle", 5);
    s += t(P.x(660) + 4, P.y(3.4), "rot", "t-n", "start", 5) + t(P.x(940), P.y(8) - 4, "infrarot", "t-n", "middle", 4) + t(P.x(805) + 3, P.y(7.2), ["isosbes-", "tischer Punkt"], "t-n", "start", 0);
    s += t(4, 212, ["R = (AC/DC bei 660 nm) / (AC/DC bei 940 nm) → empirische Eichkurve → SpO₂", "(R ≈ 0,4 ≈ 100 %, R = 1 ≈ 85 %). Nur der pulsierende Anteil (AC) wird ausgewertet."], "t-n");
    return F.svg(380, 238, "Absorptionsspektren von Oxy- und Desoxyhämoglobin bei der Pulsoxymetrie", s);
  })();

  window.ZEICHNEN = [
    {
      id: "z-la-struktur", titel: "Struktur der Lokalanästhetika: Ester gegen Amid", bereich: "SOE 2 – Pharmakologie",
      aufgabe: "Zeichnen Sie den Grundbauplan eines Lokalanästhetikums und als Beispiele Lidocain und Procain. Woran erkennen Sie Ester und Amid, und was folgt daraus?",
      checkliste: [
        "Drei Teile: aromatischer Ring (lipophil) – Zwischenkette – tertiäres Amin (hydrophil)",
        "Amid: –NH–CO– ; Ester: –CO–O–",
        "Lidocain: Ring mit zwei Methylgruppen in 2,6-Stellung, Amidbindung, Diethylamin",
        "Procain: para-Aminobenzoesäure-Ester mit Diethylaminoethyl-Rest",
        "Merkhilfe: Amide haben ein 'i' vor '-cain' (Lidocain, Prilocain, Bupivacain, Ropivacain)",
        "Abbau: Ester durch Plasmacholinesterase (PABA → Allergie), Amide in der Leber"
      ],
      erklaeren: [
        "Das tertiäre Amin ist die schwache Base: ungeladen durch die Membran, geladen am Natriumkanal – je näher der pKa an 7,4, desto schneller der Wirkeintritt.",
        "Längere Kohlenstoffketten am Ring oder Amin erhöhen Fettlöslichkeit, Potenz, Wirkdauer – und Toxizität.",
        "Bupivacain und Ropivacain sind chiral; Ropivacain und Levobupivacain sind reine S-Enantiomere mit geringerer Kardiotoxizität."
      ],
      modelle: [{ svg: SVG_LA }, { abb: "Weg des Lokalanästhetikums durch die Nervenmembran zum Natriumkanal" }],
      kapitel: ["nervmuskel", "lokalanaesthetika"]
    },
    {
      id: "z-odc", titel: "Sauerstoffbindungskurve mit Verschiebungen", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die Sauerstoffbindungskurve mit den wichtigsten Wertepaaren und erklären Sie Links- und Rechtsverschiebung.",
      checkliste: [
        "Achsen: PO₂ (mmHg bzw. kPa) gegen Sättigung (%)",
        "S-Form durch kooperative Bindung",
        "Wertepaare: P50 ca. 27 mmHg → 50 %; 40 → 75 % (gemischtvenös); 60 → 90 %; 100 → ca. 97–98 %",
        "Rechtsverschiebung: H⁺ ↑, CO₂ ↑ (Bohr), Temperatur ↑, 2,3-BPG ↑",
        "Linksverschiebung: Alkalose, Kälte, 2,3-BPG ↓, HbF, CO-Hb, Met-Hb"
      ],
      erklaeren: [
        "Flacher oberer Teil: Sicherheitsreserve bei sinkendem alveolärem PO₂; steiler Teil: große Abgabe bei kleinem Druckabfall im Gewebe.",
        "Unter ca. 90 % (60 mmHg) befindet man sich im steilen Teil – deshalb stürzt die Sättigung in der Apnoe plötzlich ab.",
        "Sauerstoffgehalt = 1,34 × Hb × SaO₂ + 0,003 × PaO₂."
      ],
      modelle: [{ abb: "Sauerstoffbindungskurve mit Links- und Rechtsverschiebung" }],
      kapitel: ["lunge", "transport"]
    },
    {
      id: "z-capno", titel: "Normales Kapnogramm mit Phasen", bereich: "SOE 2 – Messtechnik",
      aufgabe: "Zeichnen Sie ein normales Zeit-Kapnogramm eines beatmeten Patienten, benennen Sie die Phasen und erklären Sie das Messprinzip.",
      checkliste: [
        "Phase I: Totraumgas ohne CO₂ (Grundlinie bei 0)",
        "Phase II: steiler Anstieg (Mischung aus Totraum- und Alveolargas)",
        "Phase III: alveoläres Plateau, leicht ansteigend; Ende = endtidales CO₂ (normal ca. 35–45 mmHg)",
        "Phase 0: Inspiration – steiler Abfall auf 0 (ein später Anstieg am Plateauende wird teils Phase IV genannt)",
        "Messprinzip: Infrarotabsorption von CO₂ (Haupt- oder Nebenstrom)"
      ],
      erklaeren: [
        "Das endtidale CO₂ liegt normalerweise einige mmHg unter dem arteriellen; die Differenz wächst mit dem alveolären Totraum (Embolie, niedriges HZV).",
        "Haifischflosse = Obstruktion, fehlende Rückkehr auf 0 = Rückatmung, flache Linie = Diskonnektion, Fehlintubation oder Kreislaufstillstand."
      ],
      modelle: [{ kurve: "kv-capno-normal", text: "Normales Kapnogramm" }, { kurve: "kv-capno-bronchospasmus", text: "Obstruktion ('Haifischflosse')" }],
      kapitel: ["lunge", "ventilation"]
    },
    {
      id: "z-arterie", titel: "Arterielle Druckkurve und Dämpfung", bereich: "SOE 2 – Messtechnik",
      aufgabe: "Zeichnen Sie eine normale arterielle Druckkurve sowie eine über- und eine unterdämpfte Kurve. Wie prüfen Sie die Dämpfung?",
      checkliste: [
        "Normale Kurve: steiler Anstieg, systolischer Gipfel, dikrote Inzisur (Aortenklappenschluss), diastolischer Abfall",
        "Überdämpft: verrundet, Inzisur fehlt, systolisch zu niedrig, diastolisch zu hoch",
        "Unterdämpft: spitze, überhöhte Gipfel mit Nachschwingen, systolisch zu hoch",
        "Mitteldruck bleibt bei Fehldämpfung relativ verlässlich",
        "Spültest (Rechteckimpuls): optimal ca. 1–2 Nachschwingungen"
      ],
      erklaeren: [
        "Das System aus Katheter, Schlauch und Transducer schwingt mit einer Eigenfrequenz; ist sie zu niedrig oder die Dämpfung falsch, wird die Kurve verzerrt.",
        "Ursachen der Überdämpfung: Luftblasen, Gerinnsel, abgeknickter Katheter, zu weiche oder zu lange Schläuche."
      ],
      modelle: [{ kurve: "kv-art-normal", text: "Normale arterielle Kurve" }, { kurve: "kv-art-ueberdaempft", text: "Überdämpft" }, { kurve: "kv-art-unterdaempft", text: "Unterdämpft" }],
      kapitel: ["herz", "zyklus"]
    },
    {
      id: "z-pulsox", titel: "Prinzip der Pulsoxymetrie", bereich: "SOE 2 – Messtechnik",
      aufgabe: "Zeichnen Sie die Absorptionsspektren von Oxy- und Desoxyhämoglobin und erklären Sie, wie das Pulsoxymeter daraus die Sättigung berechnet. Wo liegen die Grenzen?",
      checkliste: [
        "Zwei Wellenlängen: rot (660 nm) und infrarot (940 nm)",
        "Bei 660 nm absorbiert Desoxy-Hb mehr, bei 940 nm Oxy-Hb",
        "Isosbestischer Punkt um ca. 805 nm",
        "Nur der pulsierende Anteil (AC) wird ausgewertet, Verhältnis R → Eichkurve aus Probandendaten",
        "Grenzen: CO-Hb (falsch hoch), Met-Hb (Richtung ca. 85 %), schlechte Perfusion, Bewegung, Nagellack, Farbstoffe (z.B. Methylenblau), Ungenauigkeit bei niedriger Sättigung und dunkler Hautfarbe"
      ],
      erklaeren: [
        "Das Pulsoxymeter misst die funktionelle Sättigung; Dyshämoglobine erkennt nur die Mehrwellen-CO-Oxymetrie in der Blutgasanalyse.",
        "Die Anzeige hinkt bei Desaturation je nach Messort um Sekunden hinterher (Ohr schneller als Finger)."
      ],
      modelle: [{ svg: SVG_PULSOX }],
      kapitel: ["blut", "sauerstofftransport"]
    },
    {
      id: "z-pv-loop", titel: "Druck-Volumen-Schleife des linken Ventrikels", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die Druck-Volumen-Schleife des linken Ventrikels, benennen Sie Punkte und Phasen und zeigen Sie die Wirkung einer höheren Vorlast, Nachlast und Kontraktilität.",
      checkliste: [
        "Achsen: Volumen (ml) gegen Druck (mmHg), Lauf gegen den Uhrzeigersinn",
        "Punkte: Mitralklappe zu (EDV ca. 120 ml), Aortenklappe auf (ca. 80 mmHg), Aortenklappe zu, Mitralklappe auf (ESV ca. 50 ml)",
        "Phasen: isovolumetrische Kontraktion, Austreibung, isovolumetrische Relaxation, Füllung",
        "ESPVR (Steigung = Kontraktilität), EDPVR (Steifigkeit), Ea (Nachlast)",
        "Breite = Schlagvolumen, Fläche = Schlagarbeit"
      ],
      erklaeren: [
        "Vorlast ↑: Endpunkt wandert entlang der EDPVR nach rechts → breitere Schleife.",
        "Nachlast ↑: Ea steiler → höherer Druck, ESV ↑, Schlagvolumen ↓.",
        "Kontraktilität ↑: ESPVR steiler → ESV ↓, Schlagvolumen ↑."
      ],
      modelle: [{ abb: "Druck-Volumen-Schleife des linken Ventrikels" }],
      kapitel: ["herz", "zyklus"]
    },
    {
      id: "z-wiggers", titel: "Herzzyklus (Wiggers-Diagramm)", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie Druckverläufe von linkem Ventrikel, Aorta und linkem Vorhof sowie das Ventrikelvolumen über einen Herzzyklus und markieren Sie Klappenereignisse und Herztöne.",
      checkliste: [
        "LV-Druck: Diastole ca. 5–12, Systole ca. 120 mmHg; Aorta ca. 120/80 mit Inzisur",
        "Klappen öffnen und schließen, wo sich die Druckkurven kreuzen",
        "Vier Phasen mit isovolumetrischen Abschnitten (Volumen konstant)",
        "1. Herzton bei Mitralklappenschluss, 2. Herzton bei Aortenklappenschluss",
        "Vorhofkurve mit a-, c-, v-Welle; Volumen: EDV ca. 120, ESV ca. 50 ml"
      ],
      erklaeren: ["Bei steigender Frequenz verkürzt sich vor allem die Diastole – Füllung und Koronardurchblutung links leiden."],
      modelle: [{ abb: "Herzzyklus mit Drücken von linkem Ventrikel, Aorta und Vorhof sowie Ventrikelvolumen" }],
      kapitel: ["herz", "zyklus"]
    },
    {
      id: "z-ap-herz", titel: "Aktionspotenzial von Arbeitsmyokard und Sinusknoten", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie das Aktionspotenzial einer Kammermyokardzelle und einer Sinusknotenzelle, benennen Sie die Phasen und die tragenden Ionenströme.",
      checkliste: [
        "Arbeitsmyokard: Ruhepotenzial ca. −90 mV, Phase 0 schneller Na⁺-Einstrom, Phase 1 kurze Repolarisation, Phase 2 Plateau (Ca²⁺ ein, K⁺ aus), Phase 3 Repolarisation (K⁺), Phase 4 Ruhe",
        "Sinusknoten: kein stabiles Ruhepotenzial, langsame diastolische Depolarisation (Phase 4, 'funny current' If), Phase 0 durch Ca²⁺",
        "Lange Refraktärzeit durch das Plateau",
        "Sympathikus steiler, Vagus flacher Phase 4"
      ],
      erklaeren: ["Das Plateau verhindert einen Dauerkrampf (Tetanus): Die Zelle ist fast während der ganzen Kontraktion nicht erneut erregbar."],
      modelle: [{ abb: "Aktionspotenzial Arbeitsmyokard und Sinusknoten" }],
      kapitel: ["herz", "elektro"]
    },
    {
      id: "z-ap-nerv", titel: "Aktionspotenzial der Nervenzelle mit Leitfähigkeiten", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie ein Nervenaktionspotenzial und darunter den Verlauf der Natrium- und Kaliumleitfähigkeit. Erklären Sie Schwelle und Refraktärzeit.",
      checkliste: [
        "Ruhe ca. −70 mV, Schwelle ca. −55 mV, Spitze ca. +30 mV, Dauer ca. 1–2 ms",
        "Na⁺-Leitfähigkeit steigt schnell und inaktiviert",
        "K⁺-Leitfähigkeit steigt verzögert → Repolarisation, Nachhyperpolarisation",
        "Na⁺-Kanal: ruhend → offen → inaktiviert → ruhend (Refraktärzeit)"
      ],
      erklaeren: ["Lokalanästhetika blockieren den Na⁺-Kanal von innen, bevorzugt im offenen bzw. inaktivierten Zustand (Use-Dependence)."],
      modelle: [{ abb: "Aktionspotenzial der Nervenzelle mit Natrium- und Kaliumleitfähigkeit" }, { abb: "Zustände des spannungsabhängigen Natriumkanals" }],
      kapitel: ["nervmuskel", "membran"]
    },
    {
      id: "z-ekg", titel: "EKG-Komplex mit Normalwerten", bereich: "SOE 4 – Bildbefund",
      aufgabe: "Zeichnen Sie einen EKG-Komplex, benennen Sie Wellen und Strecken und nennen Sie die Normalwerte bei 25 mm/s.",
      checkliste: [
        "P-Welle < 120 ms, PQ-Zeit 120–200 ms, QRS < 100–120 ms, ST isoelektrisch",
        "QT frequenzkorrigiert (QTc) < ca. 450 ms (Männer) bzw. 460–470 ms (Frauen)",
        "1 mm = 40 ms, 5 mm = 200 ms; Eichung 10 mm = 1 mV",
        "Zuordnung: P = Vorhoferregung, QRS = Kammererregung, T = Repolarisation"
      ],
      erklaeren: ["Für die Rhythmusbefundung ein festes Schema vortragen: Frequenz, Rhythmus, P-Wellen, PQ, QRS-Breite, ST/T, QT, Lagetyp."],
      modelle: [{ abb: "EKG-Komplex mit Wellen, Strecken und Normalwerten" }],
      kapitel: ["herz", "ekg"]
    },
    {
      id: "z-ekg-infarkt", titel: "EKG-Ableitungen und Koronarversorgung", bereich: "SOE 1 – Anatomie",
      aufgabe: "Zeichnen Sie die Extremitätenableitungen im Kreis (Frontalebene) und die Brustwandableitungen um einen Herzquerschnitt. Ordnen Sie Wandabschnitte und Koronargefäße zu.",
      checkliste: [
        "Frontalebene: I 0°, II +60°, III +120°, aVF +90°, aVL −30°, aVR −150°",
        "Horizontalebene: V1–V2 Septum, V3–V4 Vorderwand, V5–V6 Seitenwand, V7–V9 posterior, V4R rechter Ventrikel",
        "RIVA: V1–V4 (Septum, Vorderwand, Spitze); RCX: I, aVL, V5–V6",
        "II, III, aVF: RCA (ca. 80 %, Rechtsversorgung) oder RCX; V4R: proximale RCA",
        "Spiegelbild: ST-Senkung in den gegenüberliegenden Ableitungen"
      ],
      erklaeren: [
        "Inferior: III > II mit Senkung in I spricht für die RCA; immer V4R schreiben.",
        "Komplikationen aus der Anatomie: inferior AV-Knoten-Block und posteromedialer Papillarmuskel, anterior infranodaler Block und Pumpversagen."
      ],
      modelle: [{ abb: "EKG-Ableitungen in Frontal- und Horizontalebene mit den Versorgungsgebieten der Koronararterien" }],
      kapitel: ["herz", "ekg-infarkt"]
    },
    {
      id: "z-starling", titel: "Frank-Starling-Kurven", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie Frank-Starling-Kurven für ein normales, ein inotrop stimuliertes und ein insuffizientes Herz. Was bedeutet Volumenreagibilität?",
      checkliste: [
        "Achsen: Vorlast (enddiastolisches Volumen bzw. Füllungsdruck) gegen Schlagvolumen",
        "Steiler Teil: Volumen steigert das Schlagvolumen deutlich",
        "Flacher Teil: v.a. Anstieg des Füllungsdrucks",
        "Inotropie verschiebt nach oben, Insuffizienz flacht ab",
        "Mechanismus: längenabhängige Calciumsensibilisierung"
      ],
      erklaeren: ["Volumenreagibel ist, wer auf einen Bolus mit ≥ ca. 10–15 % mehr Schlagvolumen reagiert – also auf dem steilen Teil arbeitet."],
      modelle: [{ abb: "Frank-Starling-Kurven bei normaler, gesteigerter und verminderter Kontraktilität" }],
      kapitel: ["herz", "determinanten"]
    },
    {
      id: "z-guyton", titel: "Venöser Rückstrom nach Guyton", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die venöse Rückstromkurve und die Herzfunktionskurve. Wie verändern Volumengabe und Narkoseeinleitung den Arbeitspunkt?",
      checkliste: [
        "x-Achse: Druck im rechten Vorhof, y-Achse: HZV bzw. Rückstrom",
        "Rückstromkurve schneidet die x-Achse beim mittleren systemischen Füllungsdruck",
        "Arbeitspunkt = Schnittpunkt beider Kurven",
        "Volumen: Rückstromkurve parallel nach rechts; Venodilatation/Narkose: nach links",
        "Plateau links: Kollaps der großen Venen bei negativem Vorhofdruck"
      ],
      erklaeren: ["Rückstrom = (mittlerer Füllungsdruck − Vorhofdruck) / venöser Widerstand; nur das 'stressed volume' erzeugt den Füllungsdruck."],
      modelle: [{ abb: "Guyton-Modell mit Herzfunktions- und venöser Rückstromkurve" }],
      kapitel: ["herz", "hzv"]
    },
    {
      id: "z-spiro", titel: "Lungenvolumina und Kapazitäten", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie ein Spirogramm mit Ruheatmung, maximaler Ein- und Ausatmung und benennen Sie alle Volumina und Kapazitäten mit Richtwerten.",
      checkliste: [
        "Tidalvolumen ca. 500 ml, inspiratorisches Reservevolumen ca. 3 l, exspiratorisches ca. 1–1,2 l, Residualvolumen ca. 1–1,5 l",
        "Vitalkapazität ca. 4–5 l, FRC ca. 2,5–3 l, totale Lungenkapazität ca. 6 l",
        "Residualvolumen, FRC und TLC sind spirometrisch nicht messbar (Bodyplethysmographie, Gasverdünnung)"
      ],
      erklaeren: ["Die FRC ist der Sauerstoffspeicher bei der Präoxygenierung; sie sinkt im Liegen, in Narkose, bei Adipositas und in der Schwangerschaft."],
      modelle: [{ abb: "Lungenvolumina und Kapazitäten im Spirogramm" }],
      kapitel: ["lunge", "lungenfunktion"]
    },
    {
      id: "z-compliance", titel: "Druck-Volumen-Kurven von Lunge und Brustkorb", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die Druck-Volumen-Kurven von Lunge, Brustkorb und Gesamtsystem. Wo liegt die FRC und warum?",
      checkliste: [
        "Lunge zieht nach innen, Brustkorb (unterhalb ca. 60–70 % VK) nach außen",
        "Gesamtsystem = Summe; Druck null bei der FRC",
        "Compliance Lunge ≈ Brustkorb ≈ 200, gesamt ≈ 100 ml/cmH₂O",
        "Kurven flachen bei hohen Volumina ab (Überdehnung)"
      ],
      erklaeren: ["In Narkose verschiebt sich das Gleichgewicht: Der Muskeltonus fehlt, die FRC sinkt um ca. 0,4–0,5 l – Atelektasen entstehen."],
      modelle: [{ abb: "Druck-Volumen-Kurven von Lunge, Brustkorb und gesamtem System" }, { abb: "Closing Capacity im Vergleich zur FRC in Abhängigkeit vom Alter" }],
      kapitel: ["lunge", "mechanik"]
    },
    {
      id: "z-west", titel: "West-Zonen und Belüftung/Durchblutung", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die West-Zonen der aufrechten Lunge mit den Druckverhältnissen und den Verlauf von Belüftung, Durchblutung und V/Q von unten nach oben.",
      checkliste: [
        "Zone 1: PA > Pa > Pv (kein Fluss), Zone 2: Pa > PA > Pv ('Wasserfall'), Zone 3: Pa > Pv > PA",
        "Durchblutung nimmt nach unten steiler zu als die Belüftung",
        "V/Q oben ca. 3, unten ca. 0,6, gesamt ca. 0,8"
      ],
      erklaeren: ["Zone 1 entsteht bei Volumenmangel oder hohem PEEP – sie vergrößert den alveolären Totraum."],
      modelle: [{ abb: "West-Zonen der Lungendurchblutung im Stehen" }, { abb: "Belüftung, Durchblutung und V/Q-Verhältnis von der Lungenbasis zur Spitze" }],
      kapitel: ["lunge", "kreislauf"]
    },
    {
      id: "z-isoshunt", titel: "Iso-Shunt-Diagramm", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie, wie der arterielle Sauerstoffpartialdruck mit der inspiratorischen Sauerstofffraktion bei verschiedenen Shuntanteilen ansteigt.",
      checkliste: [
        "x-Achse FiO₂, y-Achse PaO₂, Kurvenschar für verschiedene Shuntanteile",
        "Ohne Shunt fast linearer Anstieg",
        "Ab ca. 30 % Shunt hebt mehr Sauerstoff den PaO₂ kaum",
        "Niedrige V/Q-Bereiche sprechen dagegen gut auf Sauerstoff an"
      ],
      erklaeren: ["Shuntblut kommt nie mit Alveolargas in Kontakt – mehr Sauerstoff erreicht es nicht; Abhilfe: Rekrutierung, PEEP, Bauchlage."],
      modelle: [{ abb: "Iso-Shunt-Diagramm: PaO2 in Abhängigkeit von FiO2 und Shuntanteil" }],
      kapitel: ["lunge", "vq"]
    },
    {
      id: "z-paco2", titel: "PaCO₂ und alveoläre Ventilation", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die Beziehung zwischen alveolärer Ventilation und PaCO₂ sowie die CO₂-Antwortkurve mit Opioideinfluss.",
      checkliste: [
        "Hyperbel: PaCO₂ = 0,863 × CO₂-Produktion / alveoläre Ventilation",
        "Halbe Ventilation → doppeltes PaCO₂",
        "CO₂-Antwort ca. 2 l/min pro mmHg, Apnoeschwelle wenige mmHg unter dem Ruhewert",
        "Opioide: Kurve nach rechts und flacher"
      ],
      erklaeren: ["Mehr CO₂-Produktion (Fieber, maligne Hyperthermie, Laparoskopie) verschiebt die Hyperbel nach oben."],
      modelle: [{ abb: "Hyperbolische Beziehung zwischen alveolärer Ventilation und PaCO2" }, { abb: "Atemantwort auf CO2 (mit Opioidwirkung) und auf Sauerstoffmangel" }],
      kapitel: ["lunge", "ventilation"]
    },
    {
      id: "z-cbf", titel: "Hirndurchblutung: Blutdruck, CO₂, O₂", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie in einem Diagramm die Abhängigkeit der Hirndurchblutung vom mittleren arteriellen Druck, vom PaCO₂ und vom PaO₂.",
      checkliste: [
        "Normal ca. 50 ml/100 g/min",
        "Autoregulation: Plateau klassisch ca. 50–150 mmHg (untere Grenze oft 60–70), bei Hypertonie nach rechts",
        "PaCO₂: fast linear zwischen ca. 20 und 80 mmHg (ca. 2–4 % pro mmHg)",
        "PaO₂: Anstieg erst unter ca. 50–60 mmHg"
      ],
      erklaeren: ["Hyperventilation senkt den Hirndruck über Gefäßverengung, wirkt aber nur Stunden und riskiert Ischämie."],
      modelle: [{ abb: "Hirndurchblutung in Abhängigkeit von Blutdruck, PaCO2 und PaO2" }],
      kapitel: ["gehirn", "durchblutung"]
    },
    {
      id: "z-icp", titel: "Druck-Volumen-Kurve des Schädels", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die intrakranielle Druck-Volumen-Kurve und erklären Sie die Phasen. Wie berechnen Sie den zerebralen Perfusionsdruck?",
      checkliste: [
        "Exponentieller Verlauf: Kompensation → Knick → steiler Anstieg",
        "Normaler ICP ca. 5–15 mmHg; Therapie beim SHT ab ca. > 22 mmHg",
        "CPP = MAP − ICP (bzw. − ZVD, wenn höher); Ziel beim SHT ca. 60–70 mmHg",
        "Monro-Kellie: Hirn ca. 80 %, Blut ca. 10 %, Liquor ca. 10 %"
      ],
      erklaeren: ["Am Knick der Kurve lösen Husten, Pressen oder Hyperkapnie schon große Druckanstiege aus."],
      modelle: [{ abb: "Druck-Volumen-Kurve des Schädelinhalts" }],
      kapitel: ["gehirn", "hirndruck"]
    },
    {
      id: "z-autoreg-niere", titel: "Autoregulation der Niere und Arteriolen", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die Autoregulation von Nierendurchblutung und GFR und erklären Sie die Wirkung von Vas-afferens- und Vas-efferens-Verengung.",
      checkliste: [
        "Plateau ca. 80–180 mmHg, darunter fallen Fluss und GFR",
        "Mechanismen: myogen (Bayliss) und tubuloglomerulärer Feedback",
        "Afferente Verengung: Kapillardruck und GFR ↓; efferente Verengung: Kapillardruck und GFR ↑, Fluss ↓",
        "Prostaglandine (afferent weit) und Angiotensin II (efferent eng) schützen die GFR – NSAR und ACE-Hemmer stören das"
      ],
      erklaeren: ["Darum ist die Kombination aus NSAR, ACE-Hemmer bzw. Sartan und Diuretikum ('Triple Whammy') bei Volumenmangel gefährlich."],
      modelle: [{ abb: "Autoregulation von Nierendurchblutung und GFR" }, { abb: "Wirkung von Verengung und Erweiterung der zu- und abführenden Arteriole" }],
      kapitel: ["niere", "perfusion"]
    },
    {
      id: "z-gegenstrom", titel: "Gegenstromprinzip der Niere", bereich: "SOE 1 – Physiologie",
      aufgabe: "Zeichnen Sie die Henle-Schleife mit Sammelrohr und den Osmolalitäten im Mark. Erklären Sie Gegenstrommultiplikation und Wirkung von ADH.",
      checkliste: [
        "Gradient von ca. 300 (Rinde) bis ca. 1200 mosmol/kg (Papille)",
        "Absteigender Teil wasserdurchlässig, aufsteigender wasserdicht und salzpumpend (NKCC2)",
        "Verdünnung auf ca. 100 mosmol/kg am Ende des dicken aufsteigenden Teils",
        "ADH: Aquaporin-2 im Sammelrohr, Harnstoff-Recycling im Innenmark",
        "Vasa recta als Gegenstromaustauscher"
      ],
      erklaeren: ["Schleifendiuretika zerstören den Gradienten – Urin kann weder konzentriert noch maximal verdünnt werden."],
      modelle: [{ abb: "Gegenstromprinzip: Osmolalität in Henle-Schleife, Sammelrohr und Nierenmark" }],
      kapitel: ["niere", "konzentrierung"]
    },
    {
      id: "z-dosis", titel: "Dosis-Wirkungs-Kurven", bereich: "SOE 2 – Pharmakologie",
      aufgabe: "Zeichnen Sie log-Dosis-Wirkungs-Kurven für einen vollen Agonisten, einen partiellen Agonisten sowie den vollen Agonisten mit kompetitivem und mit nicht-kompetitivem Antagonisten.",
      checkliste: [
        "x-Achse logarithmisch, y-Achse Wirkung in % von Emax; sigmoider Verlauf",
        "EC50 = Potenz, Emax = Wirksamkeit (intrinsische Aktivität)",
        "Partieller Agonist: niedrigeres Emax",
        "Kompetitiver Antagonist: Parallelverschiebung nach rechts, Emax gleich",
        "Nicht-kompetitiver Antagonist: Emax sinkt"
      ],
      erklaeren: ["Bei Rezeptorreserve verschiebt auch ein irreversibler Antagonist die Kurve zunächst nur nach rechts – Beispiel Endplatte."],
      modelle: [{ abb: "Dosis-Wirkungs-Kurven von vollem und partiellem Agonisten mit Antagonisten" }],
      kapitel: ["pharmakologie", "pharmakodynamik"]
    },
    {
      id: "z-pk", titel: "Plasmakonzentration nach Bolus und kontextsensitive Halbwertszeit", bereich: "SOE 2 – Pharmakologie",
      aufgabe: "Zeichnen Sie den Konzentrationsverlauf nach einem i.v.-Bolus (logarithmisch) und erklären Sie Umverteilung, Elimination und die kontextsensitive Halbwertszeit.",
      checkliste: [
        "Semilogarithmisch: steile Verteilungsphase, flache Eliminationsphase",
        "t½ = 0,693 × Vd / Clearance; Steady State nach ca. 4–5 Halbwertszeiten",
        "Kontextsensitive HWZ: Zeit bis 50 % Abfall nach Infusion bestimmter Dauer",
        "Fentanyl steigt stark an, Propofol mäßig, Remifentanil praktisch nicht"
      ],
      erklaeren: ["Nach einem Bolus erwacht der Patient durch Umverteilung, nach langer Infusion bestimmt die Elimination das Erwachen."],
      modelle: [{ abb: "Plasmakonzentration nach Bolus und kontextsensitive Halbwertszeit" }],
      kapitel: ["pharmakologie", "pharmakokinetik"]
    },
    {
      id: "z-gpcr", titel: "G-Protein-Signalwege", bereich: "SOE 2 – Pharmakologie",
      aufgabe: "Zeichnen Sie die Signalwege von Gs, Gi und Gq mit je einem Beispielrezeptor aus der Anästhesie.",
      checkliste: [
        "Gs: Adenylatcyclase ↑ → cAMP ↑ → Proteinkinase A (z.B. β1)",
        "Gi: Adenylatcyclase ↓, K⁺-Kanäle öffnen (z.B. α2, µ-Opioid, M2)",
        "Gq: Phospholipase C → IP₃ (Ca²⁺) und DAG (z.B. α1, V1, AT1)",
        "Desensibilisierung: GRK, β-Arrestin, Internalisierung"
      ],
      erklaeren: ["Noradrenalin wirkt an α1 (Gq) gefäßverengend, an α2 (Gi) präsynaptisch hemmend und an β1 (Gs) inotrop."],
      modelle: [{ abb: "Die drei wichtigsten G-Protein-Signalwege Gs, Gi und Gq" }],
      kapitel: ["pharmakologie", "gpcr"]
    },
    {
      id: "z-tof", titel: "Neuromuskuläres Monitoring (TOF)", bereich: "SOE 2 – Messtechnik",
      aufgabe: "Zeichnen Sie die TOF-Antworten ohne Block, bei nicht-depolarisierendem und bei depolarisierendem Block. Wann darf extubiert werden?",
      checkliste: [
        "TOF: 4 Reize mit 2 Hz",
        "Nicht-depolarisierend: Fade (T4 < T1), posttetanische Potenzierung",
        "Depolarisierend (Phase I): alle gleich vermindert, kein Fade",
        "Extubation erst bei quantitativ gemessener TOF-Ratio ≥ 0,9",
        "Sicherheitsreserve: Schwäche erst ab ca. 70–75 % Rezeptorbesetzung"
      ],
      erklaeren: ["Ab einer TOF-Ratio von ca. 0,4 ist der Fade weder fühl- noch sichtbar – deshalb quantitativ messen."],
      modelle: [{ abb: "Train-of-Four-Antworten ohne Block, bei nicht-depolarisierendem und depolarisierendem Block" }, { abb: "Sicherheitsreserve der neuromuskulären Übertragung" }],
      kapitel: ["nervmuskel", "relaxometrie"]
    },
    {
      id: "z-rotem", titel: "ROTEM-Kurve", bereich: "SOE 4 – Befund",
      aufgabe: "Zeichnen Sie eine ROTEM-Kurve und beschriften Sie die Parameter. Welche Therapie leiten Sie aus welchem Befund ab?",
      checkliste: [
        "CT: Zeit bis Gerinnungsbeginn → verlängert: Faktoren (PPSB/Plasma) bzw. Heparin (INTEM vs. HEPTEM → Protamin)",
        "CFT und α-Winkel: Geschwindigkeit der Festigung",
        "A10/MCF: Festigkeit; FIBTEM niedrig → Fibrinogen, EXTEM niedrig bei normalem FIBTEM → Thrombozyten",
        "ML/Lyse ↑ (APTEM korrigiert) → Tranexamsäure",
        "Grenzwerte gerätespezifisch"
      ],
      erklaeren: ["Vor jeder Faktorgabe die Basis herstellen: Temperatur, pH, ionisiertes Calcium."],
      modelle: [{ abb: "ROTEM-Kurve mit Gerinnungszeit, Gerinnselbildung und maximaler Festigkeit" }],
      kapitel: ["blut", "gerinnungstests"]
    },
    {
      id: "z-plexus", titel: "Plexus brachialis", bereich: "SOE 1 – Anatomie",
      aufgabe: "Zeichnen Sie den Plexus brachialis von den Wurzeln bis zu den Endästen und markieren Sie die Höhen der gängigen Blockaden.",
      checkliste: [
        "Wurzeln C5–Th1 (Rami ventrales)",
        "Trunci: superior (C5/6), medius (C7), inferior (C8/Th1)",
        "Jeder Truncus teilt sich in vordere und hintere Divisionen",
        "Fasciculus lateralis (vordere Div. sup. + med.), posterior (alle hinteren), medialis (vordere Div. inf.)",
        "Endäste: N. musculocutaneus (lateral), N. medianus (lateral + medial), N. ulnaris (medial), N. axillaris und N. radialis (posterior)",
        "Blockaden: interskalenär (Wurzeln/Trunci), supraklavikulär (Trunci/Divisionen), infraklavikulär (Faszikel), axillär (Endäste)"
      ],
      erklaeren: ["Interskalenär wird der N. phrenicus fast immer mitblockiert – Vorsicht bei eingeschränkter Lungenfunktion."],
      modelle: [{ svg: SVG_PLEXUS }],
      kapitel: null
    },
    {
      id: "z-ruecken", titel: "Rückenmarksnahe Punktion: Schichten", bereich: "SOE 1 – Anatomie",
      aufgabe: "Zeichnen Sie die Schichten, die die Nadel beim medianen Zugang zum Epidural- und Spinalraum durchquert, und erklären Sie, woran Sie den Epiduralraum erkennen.",
      checkliste: [
        "Haut, Subkutis, Lig. supraspinale, Lig. interspinale, Lig. flavum",
        "Epiduralraum (Fett, Venenplexus) – Widerstandsverlust nach dem Lig. flavum",
        "Dura mater, Arachnoidea, Subarachnoidalraum mit Liquor",
        "Conus medullaris beim Erwachsenen meist L1/L2 → Spinalanästhesie unterhalb (z.B. L3/4)",
        "Tuffier-Linie (Verbindung der Beckenkämme) ca. L4 bzw. L4/5"
      ],
      erklaeren: ["Beim paramedianen Zugang entfallen die Ligg. supra- und interspinalia; die Nadel erreicht das Lig. flavum seitlich."],
      modelle: [{ svg: SVG_RUECKEN }],
      kapitel: null
    }
  ];
  // Grundstruktur der Lokalanästhetika auch im Spezialwissen zeigen
  window.__addSpezialFiguren("nervmuskel", {
    lokalanaesthetika: [{ svg: SVG_LA, nach: "Eigenschaften und klinische Wirkung", caption: "Bauplan der Lokalanästhetika: ==Die Zwischenkette entscheidet über Ester oder Amid und damit über den Abbau==; das tertiäre Amin macht sie zu schwachen Basen (pKa bestimmt den Wirkeintritt). Diese Struktur wird in mündlichen Prüfungen gern zum Zeichnen verlangt." }]
  });
})();
