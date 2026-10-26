// Abbildungen Spezialwissen Niere – eigene Schemata (vereinfachte Lehrbuchdarstellungen, Zahlen gerundet).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // gewellter Linienzug (gewundene Tubulusabschnitte)
  function wave(x1, y1, x2, y2, amp, per, cls, k) {
    const pts = [], dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy), nx = -dy / len, ny = dx / len;
    for (let i = 0; i <= 40; i++) {
      const f = i / 40, o = Math.sin(f * Math.PI * 2 * per) * amp;
      pts.push([x1 + dx * f + nx * o, y1 + dy * f + ny * o]);
    }
    return l(pts, cls || "lnb", k);
  }
  function glom(x, y) {
    return c(x, y, 9, "s0") + c(x - 2.5, y - 1.5, 3, "fs", 5) + c(x + 2.5, y - 1, 2.6, "fs", 5) + c(x, y + 3, 2.6, "fs", 5);
  }

  // ---------- 1. Lage der Nephrone in Rinde und Mark ----------
  const FIG_LAGE = (function () {
    let s = "";
    s += r(0, 18, 244, 104, "fl", 0, 0) + r(0, 122, 244, 85, "fl", 1, 0) + r(0, 207, 244, 96, "fl", 1, 0) + r(0, 207, 244, 96, "fl", 1, 0);
    s += t(4, 32, "Rinde", "t-l") + t(4, 136, ["Außen-", "mark"], "t-l") + t(4, 221, ["Innen-", "mark"], "t-l");
    // kortikales Nephron
    s += l([[28, 40], [47, 53]], "ln", 5);
    s += wave(64, 60, 96, 70, 4, 2, "lnb", 1) + wave(96, 70, 96, 104, 4, 2, "lnb", 1) + l([[96, 104], [96, 130]], "lnb", 1);
    s += F.p("M96 130 L96 168 Q96 178 103 178 Q110 178 110 168", "lnb", 2);
    s += l([[110, 168], [110, 44], [60, 44]], "lnb", 3);
    s += wave(60, 40, 226, 30, 3, 4, "lnb", 4);
    s += glom(55, 58) + c(60, 47, 3, "fs", 3);
    // juxtamedulläres Nephron
    s += l([[122, 100], [142, 109]], "ln", 5);
    s += wave(159, 114, 184, 118, 3, 1.5, "lnb", 1) + wave(184, 118, 184, 142, 3, 1.5, "lnb", 1);
    s += F.p("M184 142 L184 284 Q184 294 191 294 Q198 294 198 284", "lnb", 2);
    s += l([[198, 284], [198, 207]], "lnd", 2);
    s += l([[198, 207], [198, 98], [156, 98]], "lnb", 3);
    s += wave(156, 94, 226, 84, 3, 2.5, "lnb", 4);
    s += glom(150, 112) + c(155, 101, 3, "fs", 3);
    // Sammelrohr
    s += l([[230, 26], [230, 300]], "lnb", 5) + a(230, 300, 230, 316, 5);
    s += t(222, 326, "Papille → Endharn", "t-n", "end");
    s += t(30, 190, ["kortikales Nephron", "(ca. 85 %, kurze Schleife)"], "t-s");
    s += t(30, 262, ["juxtamedulläres Nephron", "(ca. 15 %, lange Schleife)"], "t-s");
    // Legende
    const L = [[1, "Proximaler Tubulus"], [2, "Dünne Schleife"], [3, "Dicker aufsteigender Teil"], [4, "Distaler Tubulus"], [5, "Sammelrohr"]];
    let y = 34;
    s += glom(259, y - 3) + t(272, y, "Glomerulus", "t-s");
    y += 22;
    L.forEach(function (e) {
      const two = e[1].length > 18;
      s += l([[250, y - 3], [266, y - 3]], "lnb", e[0]) + t(272, y, two ? ["Dicker aufsteigender", "Teil"] : e[1], "t-s");
      y += two ? 32 : 22;
    });
    s += l([[250, y - 3], [266, y - 3]], "lnd", 2) + t(272, y, ["dünner aufsteigender", "Teil (lange Schleife)"], "t-s");
    y += 32;
    s += c(258, y - 3, 3, "fs", 3) + t(272, y, ["Macula densa: berührt", "eigenen Glomerulus"], "t-s");
    y += 32;
    s += l([[250, y - 3], [266, y - 3]], "ln", 5) + t(272, y, "Vas afferens", "t-s");
    return F.svg(380, 332, "Lage von kortikalem und juxtamedullärem Nephron in Rinde und Mark", s);
  })();

  // ---------- 2. Filterschicht und Filtrationsdrücke ----------
  const FIG_FILTER = (function () {
    let s = t(8, 14, "Filterschicht (Querschnitt)", "t-h");
    s += t(12, 34, "Kapillarlumen (Blut)", "t-s");
    // Endothel mit Fenstern
    [[10, 62], [70, 122], [130, 182], [190, 230]].forEach(function (seg) { s += r(seg[0], 46, seg[1] - seg[0], 8, "flb", 1, 2); });
    s += r(10, 57, 220, 13, "flb", 3, 2);
    for (let x = 22; x < 230; x += 24) s += t(x, 67, "−", "t-n", "middle", 6);
    for (let x = 10; x < 230; x += 30) s += r(x, 73, 22, 15, "flb", 2, 5);
    for (let x = 32; x < 230; x += 30) s += l([[x, 76], [x + 8, 76]], "ln", 4);
    s += t(12, 108, "Bowman-Raum (Primärharn)", "t-s");
    s += a(66, 40, 66, 100, 2) + t(72, 98, "Wasser, Salze, Glukose", "t-n", "start", 2);
    s += c(126, 32, 6, "s5") + t(126, 35, "−", "t-n", "middle", 6) + F.ac(132, 40, 146, 44, 150, 26, 5);
    s += t(156, 30, "Albumin (−): bleibt im Blut", "t-n", "start", 5);
    s += l([[231, 50], [237, 50]], "ln") + t(240, 53, "Endothel mit Fenstern", "t-s");
    s += l([[231, 63], [237, 66]], "ln") + t(240, 69, ["Basalmembran (Kollagen IV,", "negativ geladen)"], "t-s");
    s += l([[231, 80], [237, 94]], "ln") + t(240, 97, ["Podozytenfüßchen mit", "Schlitzmembran (Nephrin,", "Podocin)"], "t-s");
    // Drücke
    s += t(8, 150, "Drücke entlang der Glomeruluskapillare", "t-h");
    const P = F.plot({ x: 40, y: 166, w: 300, h: 120, xmin: 0, xmax: 1, ymin: 0, ymax: 60,
      yticks: [[0, "0"], [20, "20"], [40, "40"], [60, "60"]], ylabel: "mmHg", ylabelDx: 30 });
    s += P.svg;
    const pgc = function (x) { return 50 - 2 * x; };
    const gegen = function (x) { return 37 + 10 * (1 - Math.pow(1 - x, 1.7)); };
    let poly = [];
    for (let i = 0; i <= 30; i++) poly.push([P.x(i / 30), P.y(pgc(i / 30))]);
    for (let i = 30; i >= 0; i--) poly.push([P.x(i / 30), P.y(gegen(i / 30))]);
    s += l(poly, "fl", 2, true);
    s += P.curve(pgc, "lnb", 5) + P.curve(gegen, "lnb", 1) + P.curve(function () { return 12; }, "lnd", 0);
    s += t(P.x(0.02), P.y(50) - 6, "Kapillardruck (ca. 45–60)", "t-s", "start", 5);
    s += t(P.x(0.98), P.y(36) + 2, ["Bowman-Druck +", "onkotischer Druck (25 → 35)"], "t-s", "end", 1);
    s += t(P.x(0.02), P.y(12) - 5, "Bowman-Druck (ca. 10–18)", "t-s", "start", 0);
    s += t(P.x(0.02), P.y(24) , "grün: effektiver Filtrationsdruck – sinkt zum Ende hin", "t-n", "start", 2);
    s += t(40, 300, "zuführendes Ende", "t-n") + t(340, 300, "abführendes Ende", "t-n", "end");
    return F.svg(380, 306, "Glomeruläre Filterschicht und Druckverlauf entlang der Glomeruluskapillare", s);
  })();

  // ---------- 3. Autoregulation ----------
  const FIG_AUTOREG = (function () {
    const P = F.plot({ x: 46, y: 26, w: 310, h: 170, xmin: 0, xmax: 220, ymin: 0, ymax: 140,
      xticks: [[0, "0"], [40, "40"], [80, "80"], [120, "120"], [160, "160"], [180, "180"], [220, "220"]],
      yticks: [[0, "0"], [50, "50"], [100, "100"], [140, "140"]], xlabel: "mittlerer arterieller Druck (mmHg)", ylabel: "% vom Normalwert", ylabelDx: 40 });
    let s = r(P.x(80), P.y(140), P.x(180) - P.x(80), P.y(0) - P.y(140), "fl", 2, 0) + P.svg;
    function rbf(m, shift) {
      const lo = 80 + (shift || 0), hi = 180 + (shift || 0);
      if (m < lo) return 100 * Math.pow(Math.max(m, 0) / lo, 1.25);
      if (m <= hi) return 100 + (m - lo) / (hi - lo) * 6;
      return 106 + (m - hi) * 0.9;
    }
    function gfr(m) {
      if (m < 80) return Math.max(0, 100 * (1 - Math.pow((80 - m) / 42, 1.4)));
      return rbf(m) - 2;
    }
    s += P.curve(function (m) { return rbf(m); }, "lnb", 1, 0, 220, 110);
    s += P.curve(gfr, "lnb", 4, 38, 220, 110);
    s += P.curve(function (m) { return rbf(m, 25); }, "lnd", 0, 0, 220, 110);
    s += t(P.x(130), P.y(140) + 14, ["Autoregulationsbereich", "ca. 80–180 mmHg"], "t-s", "middle", 2);
    s += t(P.x(90), P.y(100) + 18, "Nierendurchblutung", "t-s", "start", 1);
    s += t(P.x(90), P.y(100) + 30, "GFR", "t-s", "start", 4);
    s += t(P.x(218), P.y(72), ["gestrichelt: chronische Hypertonie –", "Plateau nach rechts verschoben"], "t-n", "end", 0);
    s += t(P.x(100), P.y(30), ["unterhalb ca. 80 mmHg folgen", "Fluss und GFR dem Druck"], "t-n", "start", 0);
    return F.svg(380, 236, "Autoregulation von Nierendurchblutung und GFR", s);
  })();

  // ---------- 4. Stellschrauben an den Arteriolen ----------
  const FIG_ARTERIOLEN = (function () {
    const rows = [
      ["Ausgangslage", 12, 9, ["Kapillardruck, GFR und Fluss", "im Normalbereich"], 0],
      ["Vas afferens eng", 5, 9, ["Fluss ↓, Kapillardruck ↓, GFR ↓", "Sympathikus, Adenosin, SGLT2-Hemmer,", "NSAR (bei Minderdurchblutung)"], 5],
      ["Vas afferens weit", 17, 9, ["Fluss ↑, Kapillardruck ↑, GFR ↑", "Prostaglandine, Stickstoffmonoxid"], 2],
      ["Vas efferens eng", 12, 4, ["Fluss ↓, Kapillardruck ↑, GFR ↑", "Angiotensin II (sehr stark: GFR ↓)"], 4],
      ["Vas efferens weit", 12, 14, ["Fluss ↑, Kapillardruck ↓, GFR ↓", "ACE-Hemmer, Angiotensin-", "Rezeptorblocker"], 1]
    ];
    let s = t(8, 14, "zuführend → Glomerulus → abführend", "t-h");
    rows.forEach(function (rw, i) {
      const y = 52 + i * 54;
      s += t(8, y - 18, rw[0], "t-l", "start", rw[4] === 0 ? 6 : rw[4]);
      s += r(8, y - rw[1] / 2, 62, rw[1], "flb", 5, 2) + c(86, y, 15, "s0") + c(82, y - 3, 5, "fs", 5) + c(90, y - 2, 4.5, "fs", 5) + c(86, y + 5, 4.5, "fs", 5);
      s += r(102, y - rw[2] / 2, 62, rw[2], "flb", 5, 2);
      s += a(14, y + 14, 50, y + 14, 0);
      s += t(176, y - 3, rw[3], "t-s", "start", null, 12);
    });
    s += t(8, 324, "Linkes Rohr = Vas afferens, rechtes Rohr = Vas efferens; Breite = Gefäßweite.", "t-n");
    return F.svg(380, 330, "Wirkung von Verengung und Erweiterung der zu- und abführenden Arteriole", s);
  })();

  // ---------- 5. Kreatinin und GFR ----------
  const FIG_KREA = (function () {
    const P = F.plot({ x: 44, y: 24, w: 312, h: 180, xmin: 0, xmax: 130, ymin: 0, ymax: 8,
      xticks: [[0, "0"], [15, "15"], [30, "30"], [60, "60"], [84, "84"], [120, "120"]],
      yticks: [[0, "0"], [1, "1"], [2, "2"], [4, "4"], [6, "6"], [8, "8"]], xlabel: "GFR (ml/min)", ylabel: "Serumkreatinin (mg/dl)", ylabelDx: 36 });
    let s = P.svg;
    const k = function (g) { return 84 / g; };
    s += P.curve(k, "lnb", 1, 10.5, 130, 120);
    function mark(g, k2) { return c(P.x(g), P.y(k(g)), 3.5, "fs", k2) + l([[P.x(g), P.y(k(g))], [P.x(g), P.y(0)]], "lnd", k2); }
    s += mark(120, 2) + mark(84, 2) + mark(30, 4) + mark(15, 4);
    s += t(P.x(126), P.y(0.7) - 10, "0,7", "t-s", "end", 2) + t(P.x(84) + 4, P.y(1.0) - 8, "1,0", "t-s", "start", 2);
    s += t(P.x(36), P.y(2.8) - 2, "2,8", "t-s", "start", 4) + t(P.x(15) + 6, P.y(5.6) + 2, "5,6", "t-s", "start", 4);
    s += t(P.x(60), P.y(4.6), ["GFR 120 → 84 (−30 %):", "Kreatinin 0,7 → 1,0 – noch 'normal'"], "t-s", "start", 2);
    s += t(P.x(60), P.y(6.6), ["GFR 30 → 15 (−15 ml/min):", "Kreatinin verdoppelt sich"], "t-s", "start", 4);
    return F.svg(380, 244, "Hyperbolische Beziehung zwischen Serumkreatinin und GFR", s);
  })();


  // ---------- 6. Proximale Tubuluszelle ----------
  const FIG_PROXIMAL = (function () {
    let s = F.zelle(0, 262, "Proximale Tubuluszelle", 1, [
      { s: "a", y: 46, k: 2, n: "SGLT2", io: [["in", "Na⁺ + Glukose"]] },
      { s: "b", y: 46, k: 2, n: "GLUT2", io: [["out", "Glukose"]] },
      { s: "b", y: 86, k: 4, n: "Na⁺/K⁺-Pumpe", io: [["out", "3 Na⁺"], ["in", "2 K⁺"]] },
      { s: "a", y: 100, k: 1, n: "NHE3", io: [["in", "Na⁺"], ["out", "H⁺"]] },
      { s: "b", y: 160, k: 1, n: "NBCe1", io: [["out", "Na⁺ + 3 HCO₃⁻"]] },
      { s: "a", y: 236, k: 0, n: "Aquaporin-1", io: [["in", "H₂O"]] },
      { s: "b", y: 236, k: 0, n: "Aquaporin-1", io: [["out", "H₂O"]] }
    ], { lumen: "Tubuluslumen" });
    s += t(4, 134, ["H⁺ + HCO₃⁻", "→ H₂CO₃", "→ CO₂ + H₂O", "(Carbo-", "anhydrase IV)"], "t-n", "start", 1);
    s += t(4, 206, "◀ Acetazolamid", "t-n", "start", 5);
    s += a(70, 160, 146, 186, 0, "lnd") + t(104, 166, "CO₂", "t-n", "middle");
    s += t(150, 196, ["CO₂ + H₂O", "→ H⁺ + HCO₃⁻", "(Carboanhydrase II)"], "t-n", "start", 1);
    s += F.ac(158, 186, 146, 140, 130, 110, 1) + F.ac(224, 200, 246, 186, 252, 168, 1);
    s += t(190, 60, "Natriumgefälle", "t-n", "middle", 4) + t(190, 71, "treibt alles an", "t-n", "middle", 4);
    return F.svg(380, 266, "Transportmodell der proximalen Tubuluszelle mit Bicarbonatrückgewinnung", s);
  })();

  // ---------- 7. Gegenstromprinzip ----------
  const FIG_GEGENSTROM = (function () {
    let s = t(4, 12, "Osmolalität (mosmol/kg)", "t-l");
    s += r(0, 22, 236, 58, "fl", 0, 0);
    for (let i = 0; i < 11; i++) {
      const y = 80 + i * 20;
      s += '<rect x="0" y="' + y + '" width="236" height="' + (i === 10 ? 20 : 20.5) + '" class="fs k3" style="fill-opacity:' + (0.04 + i * 0.04).toFixed(2) + '"/>';
    }
    s += t(4, 36, "Rinde", "t-n") + t(4, 94, "Außenmark", "t-n") + t(4, 194, "Innenmark", "t-n");
    s += l([[58, 80], [58, 300]], "ax");
    [[300, 80], [600, 153], [900, 227], [1200, 300]].forEach(function (v) { s += l([[55, v[1]], [58, v[1]]], "ax") + t(53, v[1] + 3, String(v[0]), "t-n", "end"); });
    // Schleife
    s += l([[96, 26], [96, 286]], "lnb", 2) + F.p("M96 286 Q96 298 111 298 Q126 298 126 286", "lnb", 2);
    s += l([[126, 286], [126, 180]], "lnd", 2) + l([[126, 180], [126, 30]], "lnb", 3);
    s += F.p("M126 30 Q166 10 206 30", "lnb", 4);
    s += t(90, 40, "300", "t-s", "end", 2) + t(90, 157, "600", "t-s", "end", 2) + t(90, 272, "1200", "t-s", "end", 2);
    s += t(132, 46, "100", "t-s", "start", 3);
    s += a(96, 115, 72, 115, 1) + t(70, 124, "H₂O", "t-n", "end", 1) + a(96, 205, 72, 205, 1) + t(70, 214, "H₂O", "t-n", "end", 1);
    s += a(126, 72, 150, 72, 3) + t(153, 75, "NaCl", "t-n", "start", 3) + a(126, 130, 150, 130, 3) + t(153, 133, "NaCl", "t-n", "start", 3);
    // Sammelrohr
    s += l([[206, 30], [206, 300]], "lnb", 5) + a(206, 300, 206, 318, 5);
    s += t(212, 86, "300", "t-s", "start", 5) + t(212, 157, "600", "t-s", "start", 5) + t(212, 296, "1200", "t-s", "start", 5);
    s += a(206, 104, 184, 104, 1) + t(182, 101, "H₂O", "t-n", "end", 1) + a(206, 188, 184, 188, 1) + t(182, 185, "H₂O", "t-n", "end", 1);
    s += a(206, 258, 150, 258, 2) + t(178, 252, "Harnstoff", "t-n", "middle", 2) + F.ac(146, 262, 136, 252, 129, 236, 2);
    // Erläuterungen
    s += t(246, 40, ["Dicker aufsteigender Teil:"], "t-s", "start", 3) + t(246, 52, ["pumpt NaCl, ist wasserdicht", "→ verdünnt auf ca. 100"], "t-s");
    s += t(246, 98, ["Dünner absteigender Teil:"], "t-s", "start", 2) + t(246, 110, ["wasserdurchlässig", "→ wird konzentrierter"], "t-s");
    s += t(246, 156, ["Sammelrohr mit ADH:"], "t-s", "start", 5) + t(246, 168, ["Aquaporin-2 → Wasser", "strömt ins salzige Mark", "→ Urin bis ca. 1200"], "t-s");
    s += t(246, 226, ["Harnstoff-Recycling:"], "t-s", "start", 2) + t(246, 238, ["ADH öffnet Harnstoff-", "kanäle im inneren Sammel-", "rohr → ca. die Hälfte der", "Osmolalität im Innenmark"], "t-s");
    s += t(246, 306, ["ohne ADH: Urin", "ca. 50–100 mosmol/kg"], "t-s", "start", 0);
    return F.svg(380, 326, "Gegenstromprinzip: Osmolalität in Henle-Schleife, Sammelrohr und Nierenmark", s);
  })();

  // ---------- 8. Zelle des dicken aufsteigenden Teils ----------
  const FIG_TAL = (function () {
    let s = F.zelle(0, 150, "Zelle des dicken aufsteigenden Teils", 3, [
      { s: "a", y: 50, k: 3, n: "NKCC2", io: [["in", "Na⁺, K⁺, 2 Cl⁻"]], drug: "◀ Furosemid" },
      { s: "a", y: 100, k: 4, n: "ROMK", io: [["out", "K⁺ (Recycling)"]] },
      { s: "b", y: 50, k: 4, n: "Na⁺/K⁺-Pumpe", io: [["out", "3 Na⁺"], ["in", "2 K⁺"]] },
      { s: "b", y: 100, k: 0, n: "Chloridkanal", io: [["out", "Cl⁻"]] }
    ], { lumen: "Lumen: positiv" });
    s += t(190, 130, "wasserdicht (keine Aquaporine)", "t-n", "middle");
    s += t(30, 132, "+  +  +", "t-l", "middle", 5);
    s += a(30, 160, 350, 160, 2);
    s += t(190, 176, ["Na⁺, Ca²⁺, Mg²⁺ zwischen den Zellen (Claudin-16/-19),", "angetrieben von der positiven Lumenspannung"], "t-n", "middle", 2);
    return F.svg(380, 196, "Transportmodell des dicken aufsteigenden Teils der Henle-Schleife", s);
  })();

  // ---------- 9. Distaler Tubulus, Hauptzelle, Schaltzelle ----------
  const FIG_DISTAL = (function () {
    let s = F.zelle(0, 96, "Distaler Tubulus", 4, [
      { s: "a", y: 46, k: 4, n: "NCC", io: [["in", "Na⁺, Cl⁻"]], drug: "◀ Thiazide" },
      { s: "a", y: 78, k: 2, n: "TRPV5", io: [["in", "Ca²⁺"]] },
      { s: "b", y: 46, k: 4, n: "Na⁺/K⁺-Pumpe", io: [["out", "3 Na⁺"], ["in", "2 K⁺"]] },
      { s: "b", y: 78, k: 2, n: "NCX", io: [["out", "Ca²⁺"]] }
    ]);
    s += F.zelle(104, 142, "Hauptzelle (Sammelrohr)", 5, [
      { s: "a", y: 38, k: 5, n: "ENaC", io: [["in", "Na⁺"]], drug: "◀ Amilorid" },
      { s: "a", y: 68, k: 4, n: "ROMK/BK", io: [["out", "K⁺"]] },
      { s: "a", y: 122, k: 1, n: "Aquaporin-2", io: [["in", "H₂O"]] },
      { s: "b", y: 38, k: 4, n: "Na⁺/K⁺-Pumpe", io: [["out", "3 Na⁺"], ["in", "2 K⁺"]] },
      { s: "b", y: 122, k: 1, n: "V2-Rezeptor", io: [["in", "ADH"]] }
    ], { lumen: "Lumen: negativ" });
    s += a(304, 172, 230, 172, 3) + c(222, 172, 6, "s3") + t(307, 175.5, "Aldosteron", "t-s", "start", 3) + t(307, 187.5, "◀ Spironolacton", "t-n", "start", 5);
    s += t(190, 194, ["Mineralokortikoidrezeptor", "→ mehr ENaC und Pumpen"], "t-n", "middle", 3);
    s += F.zelle(254, 112, "Typ-A-Schaltzelle (Säureabgabe)", 1, [
      { s: "a", y: 42, k: 1, n: "H⁺/K⁺-ATPase", io: [["out", "H⁺"], ["in", "K⁺"]] },
      { s: "a", y: 72, k: 1, n: "H⁺-ATPase", io: [["out", "H⁺"]] },
      { s: "b", y: 57, k: 1, n: "Cl⁻/HCO₃⁻-Austausch", io: [["out", "HCO₃⁻ (neu)"], ["in", "Cl⁻"]] }
    ]);
    s += t(190, 342, ["Carboanhydrase II:", "CO₂ + H₂O → H⁺ + HCO₃⁻"], "t-n", "middle", 1, 11);
    return F.svg(380, 368, "Transportmodelle von distalem Tubulus, Hauptzelle und Typ-A-Schaltzelle", s);
  })();


  // ---------- 10. Flüssigkeitsräume ----------
  const FIG_RAEUME = (function () {
    let s = t(4, 14, "Körperwasser ca. 60 % des Körpergewichts (70 kg → ca. 42 l)", "t-l");
    const X0 = 10, W = 360, ic = W * 2 / 3, is = W / 4, pl = W / 12;
    s += l([[X0 + ic, 30], [X0 + ic, 26], [X0 + W, 26], [X0 + W, 30]], "ln", 0) + t(X0 + ic + (W - ic) / 2, 22, "extrazellulär 1/3 (ca. 14 l)", "t-n", "middle");
    s += r(X0, 34, ic, 46, "flb", 1, 3) + r(X0 + ic, 34, is, 46, "flb", 2, 3) + r(X0 + ic + is, 34, pl, 46, "flb", 5, 3);
    s += t(X0 + ic / 2, 54, "intrazellulär 2/3", "t-l", "middle") + t(X0 + ic / 2, 68, "ca. 28 l", "t-s", "middle");
    s += t(X0 + ic + is / 2, 54, "Interstitium", "t-s", "middle") + t(X0 + ic + is / 2, 68, "ca. 10,5 l", "t-s", "middle");
    s += t(X0 + W - 2, 94, "Plasma ca. 3,5 l ↑", "t-s", "end", 5);
    s += t(4, 118, "Wo bleibt 1 Liter Infusion? (Endverteilung, vereinfacht)", "t-l");
    function row(y, name, vals, k) {
      let o = t(4, y - 4, name, "t-s", "start", k);
      const w = [ic, is, pl];
      let x = X0;
      vals.forEach(function (v, i) {
        o += r(x, y, w[i], 22, v ? "flb" : "s0", v ? [1, 2, 5][i] : null, 3);
        o += t(x + w[i] / 2, y + 15, v ? v : "0", "t-n", "middle");
        x += w[i];
      });
      return o;
    }
    s += row(138, "Glukose 5 % (wird zu freiem Wasser) → ca. 1/12 bleibt im Gefäß", ["ca. 670 ml", "250", "80"], 1);
    s += row(186, "NaCl 0,9 % / balancierte Lösung → ca. 1/4 bleibt im Gefäß", [null, "ca. 750 ml", "250"], 2);
    return F.svg(380, 214, "Flüssigkeitsräume und Verteilung von Infusionslösungen", s);
  })();

  // ---------- 11. ADH und Osmolalität ----------
  const FIG_ADH = (function () {
    const P = F.plot({ x: 30, y: 40, w: 330, h: 160, xmin: 266, xmax: 306, ymin: 0, ymax: 10,
      xticks: [[270, "270"], [280, "280"], [285, "285"], [290, "290"], [300, "300"]], xlabel: "Plasmaosmolalität (mosmol/kg)", ylabel: "ADH im Plasma (schematisch)", ylabelDx: 26 });
    let s = r(P.x(280), P.y(10), P.x(285) - P.x(280), P.y(0) - P.y(10), "fl", 3, 0) + P.svg;
    s += P.curve(function (o) { return Math.max(0, (o - 283) * 0.4); }, "lnb", 1, 266, 306, 80);
    s += P.curve(function (o) { return Math.max(0, (o - 276) * 0.62); }, "lnb", 5, 266, 292, 80);
    s += P.curve(function (o) { return Math.max(0, (o - 289) * 0.3); }, "lnd", 2, 266, 306, 80);
    s += t(P.x(282.5), 14, "Schwelle ca. 280–285", "t-n", "middle", 3) + l([[P.x(282.5), 18], [P.x(282.5), 38]], "ln", 3);
    s += t(P.x(299), P.y(7.2), "normales Volumen", "t-s", "end", 1);
    s += t(P.x(286), P.y(9), ["Volumenmangel, Hypotonie:", "Schwelle sinkt, steiler"], "t-s", "end", 5);
    s += t(P.x(305), P.y(2.6), ["Volumenüberschuss:", "Schwelle steigt"], "t-s", "end", 2);
    s += t(P.x(267), P.y(4.6), ["Übelkeit, Schmerz,", "Operation, Stress:", "ADH steigt auch ohne", "Osmolalitätsreiz"], "t-n", "start", 4);
    return F.svg(380, 234, "ADH-Ausschüttung in Abhängigkeit von Plasmaosmolalität und Volumenstatus", s);
  })();

  // ---------- 12. Neues Bicarbonat: Ammonium und titrierbare Säure ----------
  const FIG_SAEURE = (function () {
    let s = F.zelle(0, 98, "Proximaler Tubulus: Ammoniumbildung", 2, [
      { s: "a", y: 50, k: 2, n: "NHE3", io: [["out", "NH₄⁺"]] },
      { s: "b", y: 44, k: 1, n: "NBCe1", io: [["out", "HCO₃⁻ (neu)"]] },
      { s: "b", y: 76, k: 0, n: "", io: [["in", "Glutamin"]] }
    ]);
    s += t(190, 78, ["Glutamin →", "2 NH₄⁺ + 2 HCO₃⁻"], "t-n", "middle", 2);
    s += F.zelle(106, 98, "Sammelrohr: Säure wird im Urin 'gefangen'", 1, [
      { s: "a", y: 44, k: 1, n: "H⁺-ATPase", io: [["out", "H⁺"]] },
      { s: "a", y: 76, k: 0, n: "Diffusion", io: [["out", "NH₃"]] },
      { s: "b", y: 60, k: 1, n: "Cl⁻/HCO₃⁻-Tausch", io: [["out", "HCO₃⁻ (neu)"], ["in", "Cl⁻"]] }
    ]);
    s += r(4, 214, 372, 54, "s0", null, 6);
    s += t(190, 230, "Im Urin:  H⁺ + NH₃ → NH₄⁺  (Ammonium – anpassungsfähig)", "t-s", "middle", 2);
    s += t(190, 244, "H⁺ + HPO₄²⁻ → H₂PO₄⁻  (titrierbare Säure – durch Phosphat begrenzt)", "t-s", "middle", 1);
    s += t(190, 259, "Jedes so ausgeschiedene H⁺ = ein neues HCO₃⁻ im Blut", "t-s", "middle", 6);
    return F.svg(380, 272, "Neubildung von Bicarbonat über Ammonium und titrierbare Säure", s);
  })();

  // ---------- 13. Calcium-Phosphat-Regulation ----------
  const FIG_MINERAL = (function () {
    let s = "";
    s += t(8, 16, "Reiz: Ca²⁺ ↓ (und Phosphat ↑)", "t-n", "start", 4) + t(372, 16, "Reiz: Phosphat ↑", "t-n", "end", 2);
    s += F.box(8, 24, 140, 40, ["Nebenschilddrüse", "bildet PTH"], 4);
    s += F.box(232, 24, 140, 40, ["Knochen (Osteozyten)", "bilden FGF23"], 2);
    s += r(84, 100, 212, 70, "s1") + t(190, 116, "Niere", "t-l", "middle", 1);
    s += t(190, 130, ["Ca²⁺-Rückholung ↑ (PTH)", "Phosphatausscheidung ↑ (PTH, FGF23)", "Calcitriol: ↑ durch PTH, ↓ durch FGF23"], "t-s", "middle", null, 12);
    s += F.box(8, 222, 168, 42, ["Knochen", "setzt Ca²⁺ und Phosphat frei"], 0);
    s += F.box(204, 222, 168, 42, ["Darm", "nimmt Ca²⁺ und Phosphat auf"], 1);
    s += a(100, 64, 140, 100, 4) + t(114, 86, "PTH", "t-n", "end", 4);
    s += a(30, 64, 30, 222, 4) + t(36, 196, "PTH", "t-n", "start", 4);
    s += a(290, 64, 250, 100, 2) + t(276, 86, "FGF23", "t-n", "start", 2);
    s += a(250, 170, 288, 222, 1) + t(276, 196, "Calcitriol", "t-n", "start", 1);
    s += t(190, 282, "Ergebnis: Ca²⁺ steigt; Phosphat wird über die Niere ausgeglichen", "t-s", "middle", 6);
    return F.svg(380, 290, "Regelkreis von Calcium und Phosphat mit PTH, Calcitriol und FGF23", s);
  })();

  // ---------- 14. Renin-Angiotensin-Aldosteron-System ----------
  const FIG_RAAS = (function () {
    let s = r(4, 4, 372, 44, "s0") + t(190, 19, "Reize für Renin", "t-l", "middle") +
      t(190, 33, "Druck im Vas afferens ↓ · NaCl an der Macula densa ↓", "t-s", "middle") + t(190, 44, "Sympathikus (β1-Rezeptoren)", "t-s", "middle");
    s += a(190, 48, 190, 62, 0);
    s += F.box(110, 62, 160, 26, "Renin (Vas afferens)", 4) + t(276, 79, "◀ Aliskiren", "t-n", "start", 5);
    s += F.box(8, 104, 150, 26, "Angiotensinogen (Leber)", 0) + F.box(232, 104, 140, 26, "Angiotensin I", 0);
    s += a(158, 117, 230, 117, 4) + a(190, 88, 190, 112, 4);
    s += a(302, 130, 302, 178, 1) + t(296, 146, "ACE (Lunge, Endothel)", "t-n", "end", 1) + t(296, 158, "◀ ACE-Hemmer (bremsen auch den", "t-n", "end", 5) + t(296, 170, "Bradykinin-Abbau → Husten)", "t-n", "end", 5);
    s += F.box(232, 178, 140, 26, "Angiotensin II", 5);
    s += t(372, 218, "wirkt über AT1-Rezeptoren ◀ Sartane", "t-n", "end", 5);
    const eff = [
      ["→ Gefäße eng (Vas efferens > afferens), Blutdruck ↑", 5],
      ["→ Aldosteron (Nebenniere): Na⁺-Rückhalt, K⁺-Ausscheidung", 3],
      ["     ◀ Spironolacton, Eplerenon", 5],
      ["→ proximaler Tubulus: mehr Na⁺-Rückholung", 1],
      ["→ ADH und Durst ↑ · Sympathikus ↑", 2]
    ];
    eff.forEach(function (e, i) { s += t(8, 236 + i * 14, e[0], "t-s", "start", e[1]); });
    s += r(4, 306, 372, 22, "s2") + t(190, 321, "Volumen und Blutdruck steigen → Renin wird gebremst (negative Rückkopplung)", "t-n", "middle", 2);
    return F.svg(380, 332, "Renin-Angiotensin-Aldosteron-System mit Angriffspunkten der Medikamente", s);
  })();

  // ---------- 15. Diuretika: Wirkstärke ----------
  const FIG_DIURETIKA = (function () {
    let s = t(4, 14, "Maximal ausgeschiedener Anteil des filtrierten Natriums (ca.)", "t-l");
    const X = function (v) { return 196 + v / 25 * 134; };
    [0, 5, 10, 15, 20, 25].forEach(function (v) { s += l([[X(v), 26], [X(v), 196]], "grid") + t(X(v), 208, v + " %", "t-n", "middle"); });
    const rows = [
      ["Schleifendiuretika", "Henle-Schleife (NKCC2)", 20, 25, 3],
      ["Thiazide", "distaler Tubulus (NCC)", 5, 8, 4],
      ["Acetazolamid", "proximal (Carboanhydrase)", 3, 5, 1],
      ["Kaliumsparende", "Sammelrohr (ENaC/Aldosteron)", 2, 3, 5]
    ];
    rows.forEach(function (rw, i) {
      const y = 34 + i * 42;
      s += t(4, y + 12, rw[0], "t-l", "start", rw[4]) + t(4, y + 25, rw[1], "t-n");
      s += r(X(0), y + 4, X(rw[2]) - X(0), 22, "fl", rw[4], 2) + r(X(rw[2]), y + 4, X(rw[3]) - X(rw[2]), 22, "flb", rw[4], 2);
      s += t(X(rw[3]) + 4, y + 19, rw[2] + "–" + rw[3] + " %", "t-s", "start", rw[4]);
    });
    s += t(4, 226, ["Je weiter hinten der Wirkort, desto weniger kann danach ausgeglichen werden;", "der dicke aufsteigende Teil holt ca. 25 % zurück → Schleifendiuretika am stärksten."], "t-n");
    return F.svg(380, 252, "Maximale Natriurese der Diuretikagruppen", s);
  })();


  // ---------- 16. Zeitverlauf nach akutem GFR-Abfall ----------
  const FIG_AKI = (function () {
    let s = "";
    const P1 = F.plot({ x: 40, y: 22, w: 320, h: 60, xmin: -0.5, xmax: 4, ymin: 0, ymax: 100,
      yticks: [[0, "0"], [100, "100"]], ylabel: "GFR (%)", ylabelDx: 36 });
    s += P1.svg + P1.curve([[-0.5, 100], [0, 100], [0, 30], [4, 30]], "lnb", 1);
    s += t(P1.x(0.1), P1.y(30) - 6, "plötzlicher Abfall auf 30 %", "t-n", "start", 1);
    const P2 = F.plot({ x: 40, y: 112, w: 320, h: 120, xmin: -0.5, xmax: 4, ymin: 0, ymax: 3,
      xticks: [[0, "0"], [1, "1"], [2, "2"], [3, "3"], [4, "4"]], yticks: [[0, "0"], [0.8, "0,8"], [1.1, ""], [2, "2"], [2.67, ""], [3, "3"]],
      xlabel: "Tage", ylabel: "Kreatinin (mg/dl)", ylabelDx: 36 });
    s += P2.svg;
    const tau = 0.8;
    s += P2.curve(function (d) { return d < 0 ? 0.8 : 2.67 - 1.87 * Math.exp(-d / tau); }, "lnb", 4, -0.5, 4, 90);
    s += P2.curve(function () { return 2.67; }, "lnd", 0) + t(P2.x(3.95), P2.y(2.67) - 5, "neues Gleichgewicht (≈ 0,8 / 0,3)", "t-n", "end");
    s += P2.curve(function () { return 1.1; }, "lnd", 5) + t(P2.x(3.95), P2.y(1.1) + 12, "+0,3 mg/dl (KDIGO)", "t-n", "end", 5);
    s += P2.curve(function (d) { return d < 0 ? 0.25 : 0.25 + 1.5 * (d / 0.3) * Math.exp(1 - d / 0.3); }, "lnb", 2, -0.5, 4, 90);
    s += t(P2.x(0.75), P2.y(1.55), ["Tubulusstress-Biomarker:", "Anstieg nach Stunden"], "t-n", "start", 2);
    s += t(P2.x(1.5), P2.y(2.67) + 22, ["Kreatinin: erreicht das neue", "Gleichgewicht erst nach Tagen"], "t-n", "start", 4);
    return F.svg(380, 268, "Verzögerter Kreatininanstieg nach plötzlichem GFR-Abfall", s);
  })();

  // ---------- 17. Nierenersatz: Diffusion, Konvektion, Ultrafiltration ----------
  const FIG_NEV = (function () {
    let s = "";
    function membran(y) { return l([[10, y], [226, y]], "lnd", 6); }
    function dots(x0, y0, n, k, rr, dx) { let o = ""; for (let i = 0; i < n; i++) o += c(x0 + i * (dx || 14), y0 + (i % 2) * 7, rr, "fs", k); return o; }
    // Diffusion
    s += t(4, 14, "Diffusion (Hämodialyse)", "t-l", "start", 1);
    s += t(10, 30, "Blut →", "t-n") + t(226, 84, "← Dialysat", "t-n", "end");
    s += dots(54, 30, 12, 4, 2.5) + c(70, 46, 5, "fs", 1) + c(150, 46, 5, "fs", 1) + membran(56);
    s += dots(80, 66, 4, 4, 2.5, 34);
    s += a(100, 42, 100, 70, 4) + a(170, 42, 170, 70, 4);
    s += t(240, 32, ["kleine Teilchen folgen dem", "Konzentrationsgefälle (K⁺,", "Harnstoff) – sehr effektiv;", "Gegenstrom hält das", "Gefälle aufrecht"], "t-s");
    // Konvektion
    const y2 = 104;
    s += t(4, y2 + 14, "Konvektion (Hämofiltration)", "t-l", "start", 2);
    s += t(10, y2 + 30, "Blut →", "t-n") + t(226, y2 + 84, "Filtrat ↓", "t-n", "end");
    s += dots(54, y2 + 30, 12, 4, 2.5) + c(70, y2 + 46, 5, "fs", 1) + c(150, y2 + 46, 5, "fs", 1) + membran(y2 + 56);
    s += dots(70, y2 + 66, 6, 4, 2.5, 26) + c(120, y2 + 72, 5, "fs", 1);
    s += a(40, y2 + 36, 40, y2 + 78, 2, "lnb") + t(46, y2 + 82, "Druck", "t-n", "start", 2) + a(120, y2 + 52, 120, y2 + 64, 1);
    s += t(240, y2 + 32, ["Druck presst Plasmawasser", "durch die Membran; gelöste", "Teilchen werden mitgerissen,", "auch mittelgroße Moleküle;", "Ersatz durch Substitution"], "t-s");
    // Ultrafiltration
    const y3 = 208;
    s += t(4, y3 + 14, "Ultrafiltration", "t-l", "start", 0);
    s += t(10, y3 + 30, "Blut →", "t-n") + membran(y3 + 50);
    s += a(80, y3 + 34, 80, y3 + 66, 1) + a(150, y3 + 34, 150, y3 + 66, 1) + t(160, y3 + 64, "H₂O", "t-n", "start", 1);
    s += t(240, y3 + 32, ["Netto-Wasserentzug", "(Volumenentzug) – wird mit", "jedem Verfahren kombiniert"], "t-s");
    s += t(4, y3 + 88, "orange = kleine Teilchen (z.B. K⁺, Harnstoff), blau = mittelgroße Moleküle", "t-n");
    return F.svg(380, 302, "Prinzipien der Nierenersatzverfahren: Diffusion, Konvektion und Ultrafiltration", s);
  })();

  // ---------- 18. GFR über die Lebensspanne ----------
  const FIG_ALTER = (function () {
    // x: 0–2 Jahre gedehnt (0–70 px), danach 2–90 Jahre
    const X0 = 44, W = 316, Y0 = 30, H = 170;
    const X = function (age) { return age <= 2 ? X0 + age / 2 * 70 : X0 + 70 + (age - 2) / 88 * (W - 70); };
    const Y = function (g) { return Y0 + H - g / 180 * H; };
    let s = "";
    [0, 50, 100, 150].forEach(function (g) { s += l([[X0, Y(g)], [X0 + W, Y(g)]], "grid") + t(X0 - 4, Y(g) + 3, String(g), "t-n", "end"); });
    s += l([[X0, Y0], [X0, Y0 + H], [X0 + W, Y0 + H]], "ax");
    [[0, "Geburt"], [1, "1"], [2, "2"], [20, "20"], [40, "40"], [60, "60"], [80, "80"]].forEach(function (tk) {
      s += l([[X(tk[0]), Y0 + H], [X(tk[0]), Y0 + H + 3]], "ax") + t(X(tk[0]) + (tk[0] === 0 ? 8 : 0), Y0 + H + 13, tk[1], "t-n", "middle");
    });
    s += l([[X(2), Y0], [X(2), Y0 + H]], "lnd", 0);
    s += t(X0 + W, Y0 + H + 26, "Alter (Jahre; die ersten 2 Jahre gedehnt)", "t-s", "end");
    s += t(4, 16, "GFR (ml/min/1,73 m²)", "t-s");
    const pts = [[0, 15], [0.05, 25], [0.15, 40], [0.5, 65], [1, 88], [1.5, 105], [2, 115], [10, 120], [40, 118], [60, 98], [80, 78], [90, 68]];
    s += l(pts.map(function (p) { return [X(p[0]), Y(p[1])]; }), "lnb", 1);
    s += c(X(30), Y(172), 3.5, "fs", 5) + l([[X(30), Y(118)], [X(30), Y(168)]], "lnd", 5);
    s += t(X(30) + 6, Y(172) + 4, "Schwangerschaft: +40–50 %", "t-s", "start", 5);
    s += t(X(0.5), Y(25), ["Reifgeborene", "ca. 10–20"], "t-n", "start", 1);
    s += t(X0 + W, Y(118) - 12, "Abnahme ca. 1 ml/min pro Jahr", "t-n", "end", 1);
    s += t(X(54), Y(70) + 4, ["große individuelle", "Unterschiede; Kreatinin", "bleibt oft 'normal'"], "t-n", "start", 0);
    return F.svg(380, 232, "GFR von der Geburt bis ins hohe Alter", s);
  })();

  window.__addSpezialFiguren("niere", {
    filtration: [
      { svg: FIG_LAGE, nach: "Nephrone", caption: "Lage der Nephrone: kortikale Nephrone mit kurzer Schleife, juxtamedulläre mit langer Schleife bis ins Innenmark. Jeder dicke aufsteigende Teil kehrt mit der **Macula densa** zum eigenen Glomerulus zurück; mehrere Nephrone münden in ein Sammelrohr (stark vereinfacht)." },
      { svg: FIG_FILTER, nach: "Die Kräfte der Filtration", caption: "Oben: die drei Schichten des Filters; ==Größe und negative Ladung halten Albumin zurück==. Unten: Der Kapillardruck bleibt fast gleich, der onkotische Druck steigt, weil eiweißfreie Flüssigkeit abgepresst wird → ==der effektive Filtrationsdruck sinkt zum Ende der Kapillare==. Lehrbuchwerte unterscheiden sich (Kapillardruck beim Menschen nur geschätzt)." }
    ],
    perfusion: [
      { svg: FIG_AUTOREG, nach: "Autoregulation", caption: "Autoregulation (schematisch): Zwischen ca. 80 und 180 mmHg bleiben Nierendurchblutung und GFR nahezu konstant (myogener Mechanismus + tubuloglomerulärer Feedback). Unterhalb folgen beide dem Druck, die GFR fällt steiler. Bei chronischer Hypertonie ist der Bereich nach rechts verschoben." },
      { svg: FIG_ARTERIOLEN, nach: "Die Stellschrauben an den Arteriolen", caption: "Die zwei Arteriolen als Stellschrauben: ==Verengung vor dem Glomerulus senkt, Verengung dahinter erhöht den Kapillardruck== – beide verringern den Fluss. Sehr starke efferente Verengung senkt die GFR wieder, weil der onkotische Druck in der Kapillare stark steigt." }
    ],
    proximal: [
      { svg: FIG_PROXIMAL, nach: "Bicarbonat zurückholen – Schritt für Schritt", caption: "Proximale Tubuluszelle: ==Die Natrium-Kalium-Pumpe auf der Blutseite hält das Natrium in der Zelle niedrig – dieses Gefälle treibt SGLT2 und NHE3 an==. Für jedes abgegebene H⁺ wird über die Carboanhydrase IV (Lumen) und II (Zelle) ein filtriertes Bicarbonat zurückgewonnen. Wasser folgt isoosmotisch über Aquaporin-1." }
    ],
    konzentrierung: [
      { svg: FIG_TAL, nach: "Der dicke aufsteigende Teil – Motor des Gradienten", caption: "Dicker aufsteigender Teil: NKCC2 nimmt Na⁺, K⁺ und 2 Cl⁻ auf, K⁺ fließt über ROMK zurück → ==Lumen positiv → Calcium und Magnesium wandern zwischen den Zellen ins Blut==. Furosemid blockiert NKCC2 – deshalb gehen auch Calcium und Magnesium verloren." },
      { svg: FIG_GEGENSTROM, nach: "Harnstoff-Recycling", caption: "Gegenstromprinzip (gerundete Werte): Der wasserdichte aufsteigende Teil pumpt Salz ins Mark, der absteigende Teil gibt Wasser ab → Gradient von ca. 300 (Rinde) bis ca. 1200 mosmol/kg (Papille). ==Mit ADH gleicht sich der Urin im Sammelrohr dem salzigen Mark an==; ohne ADH bleibt er verdünnt." }
    ],
    distal: [
      { svg: FIG_DISTAL, nach: "Sammelrohr: Schaltzellen", caption: "Oben: distaler Tubulus (NCC, Ziel der Thiazide; Calcium über TRPV5, gesteigert durch Parathormon). Mitte: Hauptzelle – ==ENaC macht das Lumen negativ, das treibt Kalium über ROMK/BK hinaus==; Aldosteron verstärkt das, ADH baut Aquaporin-2 ein (Wasser verlässt die Zelle zum Blut über Aquaporin-3/-4). Unten: Typ-A-Schaltzelle gibt Säure ab und bildet neues Bicarbonat; Typ-B-Schaltzellen arbeiten spiegelbildlich (Bicarbonat ins Lumen über Pendrin)." }
    ],
    wasser: [
      { svg: FIG_RAEUME, nach: "Flüssigkeitsräume", caption: "Flüssigkeitsräume beim Erwachsenen (gerundet). ==Glukose 5 % wird verstoffwechselt und verteilt sich als freies Wasser im ganzen Körperwasser – nur ca. 1/12 bleibt im Gefäß==; isotone Kristalloide verteilen sich im Extrazellulärraum (ca. 1/4 intravasal). Lehrbuch-Gleichgewichtsmodell: Unmittelbar nach der Gabe und bei veränderter Glykokalyx weicht die tatsächliche Verteilung ab." },
      { svg: FIG_ADH, nach: "Steuerung des antidiuretischen Hormons (ADH)", caption: "ADH-Ausschüttung (schematisch, nach Robertson): ab ca. 280–285 mosmol/kg steigt ADH steil an. ==Volumenmangel und Blutdruckabfall verschieben die Schwelle nach links und machen die Kurve steiler==; Übelkeit, Schmerz und Operation steigern ADH unabhängig von der Osmolalität → Gefahr der postoperativen Hyponatriämie." }
    ],
    saeurebasen: [
      { svg: FIG_SAEURE, nach: "Aufgabe 2: neues Bicarbonat bilden", caption: "Neues Bicarbonat entsteht auf zwei Wegen: ==Ammonium aus Glutamin (proximal; bei chronischer Azidose stark steigerbar)== und abgegebene Säure, die im Urin an Phosphat gebunden wird (titrierbare Säure). In beiden Fällen gelangt pro ausgeschiedenem H⁺ ein neues HCO₃⁻ ins Blut." }
    ],
    mineral: [
      { svg: FIG_MINERAL, nach: "Die Hormone", caption: "Calcium-Phosphat-Regelkreis (vereinfacht): ==PTH hebt Calcium über Knochen, Niere und – via Calcitriol – Darm und senkt Phosphat über die Niere==. FGF23 aus dem Knochen steigert die Phosphatausscheidung und bremst die Calcitriolbildung." }
    ],
    endokrin: [
      { svg: FIG_RAAS, nach: "Renin und lokale Botenstoffe", caption: "Renin-Angiotensin-Aldosteron-System mit den Angriffspunkten der Medikamente (rot). ==Angiotensin II verengt das Vas efferens stärker als das Vas afferens – darum fällt die GFR unter ACE-Hemmern bzw. Sartanen (Angiotensin-Rezeptorblockern) bei Volumenmangel oder Nierenarterienstenose ab==." }
    ],
    diuretika: [
      { svg: FIG_DIURETIKA, nach: "Übersicht", caption: "Maximale Natriumausscheidung als Anteil des filtrierten Natriums (Spannen aus Lehrbüchern, gerundet; heller Balken = bis Untergrenze, kräftiger Balken = Spanne). Die Wirkorte zeigt die Nephron-Abbildung im Kapitel 'Aufbau, Nephron und glomeruläre Filtration'." }
    ],
    aki: [
      { svg: FIG_AKI, nach: "Warum Kreatinin spät reagiert", caption: "Modellrechnung (schematisch): GFR fällt plötzlich auf 30 %, Kreatininbildung konstant, Verteilung im Körperwasser. ==Das Kreatinin steigt nur allmählich und erreicht sein neues Gleichgewicht (Ausgangswert / 0,3) erst nach Tagen== – Biomarker für Tubulusstress reagieren früher. Infusionen (Verdünnung) und geringe Muskelmasse verzögern den Anstieg zusätzlich." }
    ],
    nierenersatz: [
      { svg: FIG_NEV, nach: "Drei physikalische Prinzipien", caption: "Die drei physikalischen Prinzipien: ==Diffusion entfernt vor allem kleine Teilchen, Konvektion auch mittelgroße Moleküle, Ultrafiltration entzieht Wasser==. Moderne Verfahren kombinieren sie (z.B. Hämodiafiltration)." }
    ],
    lebensalter: [
      { svg: FIG_ALTER, nach: "Höheres Lebensalter", caption: "GFR über die Lebensspanne (schematisch, auf 1,73 m² Körperoberfläche bezogen): niedrig bei Geburt, Erwachsenenwerte mit ca. 1–2 Jahren, in der Schwangerschaft ca. 40–50 % höher, ab dem mittleren Lebensalter im Mittel ca. 1 ml/min pro Jahr Abnahme – ==bei sinkender Muskelmasse bleibt das Kreatinin trotzdem oft im Normbereich==." }
    ],
    clearance: [
      { svg: FIG_KREA, nach: "Kreatinin und GFR – eine gekrümmte Beziehung", caption: "Kreatinin ∝ 1/GFR im Gleichgewicht (Beispielrechnung mit 0,7 mg/dl bei 120 ml/min, tubuläre Sekretion vernachlässigt): ==Im flachen Teil der Kurve verbirgt sich ein großer GFR-Verlust hinter einem kleinen Kreatininanstieg==, im steilen Teil verdoppelt schon ein kleiner Verlust das Kreatinin." }
    ]
  });

  // ---------- Bildgeschichten (Piktogramme) ----------
  const B = F.bild;
  window.__addSpezialFiguren("niere", {
    filtration: [{ nach: "Die Filterschicht", caption: "Bildgeschichte: Was durch den glomerulären Filter kommt – ==entscheidend sind Größe UND Ladung==.", svg: B("Was durch den Filter kommt", [
      { i: "tropfen:1 + salz:1 + glukose:1", t: ["Kleine Teilchen (< ca. 2 nm):", "Wasser, Salze, Glukose,", "Kreatinin → frei filtriert"], k: 2 },
      { i: "muskel:4 > niere:4", t: ["Mittelgroße Teilchen:", "zunehmend zurückgehalten;", "Myoglobin passiert noch"], k: 4 },
      { i: "#Albumin:5:x", t: ["Albumin (3,6 nm, negativ):", "Größe UND Ladung halten", "es zurück"], k: 5 }
    ]) }],
    perfusion: [{ nach: "Die Stellschrauben an den Arteriolen", caption: "Bildgeschichte: Wie die Niere bei Minderdurchblutung die Filtration rettet – ==und warum NSAR plus ACE-Hemmer plus Diuretikum ('Triple Whammy') gefährlich sind==.", svg: B("Filtration retten bei Minderdurchblutung", [
      { i: "manometer:5:down", t: ["Blutdruck bzw. Volumen", "sinkt"] },
      { i: "weit:2", t: ["Prostaglandine weiten", "das Vas afferens"] },
      { i: "eng:4", t: ["Angiotensin II verengt", "das Vas efferens"] },
      { i: "niere:2:ok", t: ["GFR bleibt erhalten"], k: 2 },
      { i: "tablette:5:x + niere:5:down", t: ["NSAR nehmen Schritt 2,", "ACE-Hemmer/Sartane Schritt 3", "→ akutes Nierenversagen"], k: 5 }
    ]) }],
    clearance: [{ nach: "Kreatinin und GFR – eine gekrümmte Beziehung", caption: "Bildgeschichte: Warum Kreatinin ein später und unempfindlicher Marker ist.", svg: B("Kreatinin – ein später Marker", [
      { i: "muskel:4", t: ["Muskeln bilden Kreatinin", "gleichmäßig, die Niere", "scheidet es aus"] },
      { i: "niere:5:down", t: ["GFR halbiert sich"] },
      { i: "uhr:4", t: ["Kreatinin verdoppelt sich –", "aber erst nach Stunden", "bis Tagen"] },
      { i: "warnung:5", t: ["0,7 → 1,0 mg/dl wirkt", "harmlos, bedeutet aber", "ca. 30 % GFR-Verlust"], k: 5 }
    ]) }],
    proximal: [{ nach: "Ausscheidung (Sekretion)", caption: "Bildgeschichte: Warum Schleifendiuretika manchmal schlecht wirken – ==sie müssen erst ins Tubuluslumen ausgeschieden werden==.", svg: B("Der Weg des Furosemids", [
      { i: "spritze:3", t: ["Furosemid ist stark eiweiß-", "gebunden und wird", "kaum filtriert"] },
      { i: "nephron:1", t: ["Ins Lumen gelangt es über", "organische Anionen-", "transporter (proximal)"] },
      { i: "kanal:3:x", t: ["Von der Tubulusseite", "blockiert es NKCC2 in", "der Henle-Schleife"] },
      { i: "warnung:5", t: ["Hypalbuminämie, Urämie:", "weniger kommt an →", "höhere Dosis nötig"], k: 5 }
    ]) }],
    distal: [{ nach: "Kaliumhaushalt", caption: "Bildgeschichte: Warum Magnesium beim Kalium mitzählt.", svg: B("Magnesium und Kalium", [
      { i: "#Mg²⁺:1", t: ["Magnesium in der Zelle", "bremst den Kaliumkanal", "ROMK"] },
      { i: "#Mg²⁺:5:down", t: ["Magnesiummangel:", "die Bremse fällt weg"] },
      { i: "niere:4 > #K⁺:4:down", t: ["Kalium geht über", "die Niere verloren"] },
      { i: "infusion:2 + #Mg²⁺:2:ok", t: ["Hypokaliämie bessert sich", "erst mit Magnesium-", "ersatz"], k: 2 }
    ]) }],
    wasser: [{ nach: "Steuerung des antidiuretischen Hormons (ADH)", caption: "Bildgeschichte: Die postoperative Hyponatriämie – ==darum keine hypotonen Erhaltungsinfusionen, bei Kindern isotone Lösungen==.", svg: B("Postoperative Hyponatriämie", [
      { i: "skalpell:4", t: ["Operation, Schmerz,", "Übelkeit → ADH steigt", "ohne Osmolalitätsreiz"] },
      { i: "niere:1 + tropfen:1:up", t: ["Die Niere hält freies", "Wasser zurück"] },
      { i: "infusion:4", t: ["Dazu natriumarme", "(hypotone) Infusionen"] },
      { i: "#Na⁺:5:down", t: ["Wasser verdünnt das Blut", "→ Natrium fällt"] },
      { i: "gehirn:5:up", t: ["Wasser strömt in Hirn-", "zellen: Hirnödem (Kinder,", "junge Frauen besonders)"], k: 5 }
    ]) }],
    saeurebasen: [{ nach: "Metabolische Alkalose: Entstehung und Aufrechterhaltung", caption: "Bildgeschichte: Warum die Alkalose nach Erbrechen bestehen bleibt – ==erst Kochsalz und Kaliumchlorid beenden sie==.", svg: B("Alkalose nach Erbrechen", [
      { i: "tropfen:4:down + #Cl⁻:4:down", t: ["Erbrechen: Volumen-", "und Chloridmangel"] },
      { i: "niere:1", t: ["RAAS aktiv → proximal", "mehr Na⁺ und HCO₃⁻", "zurückgeholt"] },
      { i: "zelle:1:x", t: ["Ohne Chlorid kann Pendrin", "kein HCO₃⁻ abgeben"] },
      { i: "#K⁺:4:down + #H⁺:4", t: ["Aldosteron, Hypokaliämie:", "mehr Säureabgabe"] },
      { i: "infusion:2 + #KCl:2", t: ["Alkalose endet erst mit", "NaCl- und KCl-Ersatz"], k: 2 }
    ]) }],
    mineral: [{ nach: "Calcium im Blut", caption: "Bildgeschichte: Hypokalzämie bei Massivtransfusion – ==ionisiertes Calcium messen und ersetzen==.", svg: B("Citrat und Calcium", [
      { i: "infusion:5 + infusion:5", t: ["Viele Blutkonserven bzw.", "Plasma mit Citrat"] },
      { i: "leber:4:down", t: ["Citrat bindet Calcium – v.a.", "wenn die Leber langsam", "abbaut (Schock, Kälte)"] },
      { i: "#Ca²⁺:5:down", t: ["Ionisiertes Calcium", "fällt"] },
      { i: "herz:5:down + gerinnsel:5:down", t: ["Herzschwäche, Gefäße weit,", "Gerinnung schlechter →", "Calcium ersetzen"], k: 5 }
    ]) }],
    endokrin: [{ nach: "Erythropoetin (EPO)", caption: "Bildgeschichte: Wie die Niere Blutarmut erkennt – ein Regelkreis über den Sauerstoffgehalt.", svg: B("Erythropoetin-Regelkreis", [
      { i: "#O₂:1:down", t: ["O₂-Gehalt sinkt", "(Anämie, Hypoxie)"] },
      { i: "niere:4", t: ["Die Niere misst den Mangel:", "HIF-2α schaltet das", "EPO-Gen an"] },
      { i: "knochen:3 > erythrozyt:5:up", t: ["EPO: Knochenmark bildet", "mehr Erythrozyten"] },
      { i: "#O₂:2:ok", t: ["O₂-Gehalt normalisiert", "sich"], k: 2 }
    ]) }],
    diuretika: [{ nach: "Übersicht", caption: "Bildgeschichte: Warum die meisten Diuretika Kalium verlieren lassen.", svg: B("Diuretika und Kalium", [
      { i: "tablette:3 > nephron:3", t: ["Schleifen- und Thiazid-", "diuretika bringen mehr Na⁺", "und Fluss ins Sammelrohr"] },
      { i: "#Na⁺:4:up", t: ["Mehr Na⁺-Rückholung über", "ENaC, hoher Fluss,", "RAAS ↑"] },
      { i: "#K⁺:5:down + #H⁺:5:down", t: ["Kalium- und Säureverlust:", "Hypokaliämie, metabolische", "Alkalose"], k: 5 }
    ]) }],
    aki: [{ nach: "Wie die Schädigung entsteht", caption: "Bildgeschichte: Eine perioperative akute Nierenschädigung entsteht meist aus mehreren Treffern zugleich.", svg: B("Wie die Niere Schaden nimmt", [
      { i: "manometer:5:down", t: ["Minderdurchblutung:", "Hypotonie, Volumenmangel,", "niedriges HZV"] },
      { i: "bakterium:5", t: ["Entzündung/Sepsis:", "Mikrozirkulation und", "Tubuli gestört"] },
      { i: "vene:4:up", t: ["Venöser Stau,", "erhöhter Bauchdruck"] },
      { i: "tablette:5 + spritze:5", t: ["Nephrotoxine: Kontrast-", "mittel, Aminoglykoside,", "NSAR, Vancomycin"] },
      { i: "niere:5:x", t: ["Akute Nierenschädigung –", "Kreatinin steigt", "erst später"], k: 5 }
    ]) }],
    nierenersatz: [{ nach: "Wann beginnen?", caption: "Bildgeschichte: Die Notfallindikationen der Dialyse (AEIOU) – ==ohne sie bringt ein früher Beginn keinen Vorteil==.", svg: B("Notfallindikationen: AEIOU", [
      { i: "#H⁺:5:up", t: ["A – Azidose", "(schwer, therapierefraktär)"] },
      { i: "#K⁺:5:up", t: ["E – Elektrolyte,", "v.a. Hyperkaliämie"] },
      { i: "warnung:4", t: ["I – Intoxikation", "(Lithium, Methanol,", "Ethylenglykol u.a.)"] },
      { i: "lunge:1 + tropfen:1:up", t: ["O – Overload:", "Überwässerung,", "Lungenödem"] },
      { i: "gehirn:5 + herz:5", t: ["U – Urämie mit Folgen", "(Perikarditis, Enzephalo-", "pathie, Blutung)"] }
    ]) }],
    lebensalter: [{ nach: "Schwangerschaft", caption: "Bildgeschichte: Warum ein 'normales' Kreatinin in der Schwangerschaft schon auffällig ist.", svg: B("Niere in der Schwangerschaft", [
      { i: "schwanger:3", t: ["Mehr Blutvolumen und HZV,", "Gefäße weiten sich"] },
      { i: "niere:2:up", t: ["Nierendurchblutung und", "GFR ca. +40–50 %"] },
      { i: "waage:1:down", t: ["Kreatinin sinkt (oft ca.", "0,4–0,8 mg/dl)"] },
      { i: "warnung:5", t: ["1,0 mg/dl ist bei", "Schwangeren schon", "auffällig"], k: 5 }
    ]) }]
  });
})();
