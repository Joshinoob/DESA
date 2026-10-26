// Abbildungen Spezialwissen Herz – eigene Schemata (vereinfachte Lehrbuchdarstellungen, Zahlen gerundet).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Sarkomer ----------
  const FIG_SARKOMER = (function () {
    let s = "";
    function sark(y, z1, z2, title) {
      let o = t(4, y - 30, title, "t-l");
      const mid = (z1 + z2) / 2;
      [z1, z2].forEach(function (z) { o += l([[z, y - 26], [z - 4, y - 13], [z + 4, y], [z - 4, y + 13], [z, y + 26]], "lnb", 6); });
      [-18, -6, 6, 18].forEach(function (dy) {
        o += l([[z1, y + dy], [z1 + 100, y + dy]], "ln", 1) + l([[z2, y + dy], [z2 - 100, y + dy]], "ln", 1);
      });
      [-12, 0, 12].forEach(function (dy) {
        o += r(mid - 60, y + dy - 2.5, 120, 5, "fs", 4, 2);
        for (let x = mid - 54; x <= mid + 54; x += 9) if (Math.abs(x - mid) > 8) o += l([[x, y + dy - 2], [x + (x < mid ? -3 : 3), y + dy - 6]], "ln", 4);
      });
      o += F.p("M" + z1 + " " + (y + 24) + " q 8 -4 16 0 t 16 0 t 16 0 t 16 0 t 16 0 L" + (mid - 60) + " " + (y + 24), "ln", 2);
      o += l([[mid, y - 22], [mid, y + 22]], "lnd", 0);
      return o;
    }
    s += sark(60, 30, 290, "Diastole: Sarkomer ca. 1,9–2,2 µm");
    s += sark(170, 60, 260, "Systole: Aktin wird zur Mitte gezogen");
    s += a(120, 170, 140, 170, 4) + a(200, 170, 180, 170, 4);
    const lg = [[6, "Z-Scheibe", "lnb"], [1, "Aktin (mit", "ln"], [4, "Myosin", "lnb"], [2, "Titin (Feder)", "ln"], [0, "M-Linie (Mitte)", "lnd"]];
    lg.forEach(function (e, i) {
      const y = 46 + i * 22;
      s += l([[300, y - 3], [314, y - 3]], e[2], e[0]) + t(318, y, e[1], "t-n");
      if (i === 1) s += t(318, y + 10, "Troponin)", "t-n");
    });
    return F.svg(380, 206, "Aufbau des Sarkomers in Diastole und Systole", s);
  })();

  // ---------- Calcium-Kreislauf der Herzmuskelzelle ----------
  const FIG_CALCIUM = (function () {
    let s = t(4, 14, "außen (Extrazellulärraum)", "t-n") + t(4, 64, "Zellinneres", "t-n");
    s += l([[0, 40], [380, 40]], "lnb", 0);
    // L-Typ-Kanal
    s += c(60, 40, 9, "s4") + a(60, 18, 60, 66, 4) + t(74, 22, ["L-Typ-Ca²⁺-Kanal:", "wenig Trigger-Ca²⁺"], "t-n", "start", 4);
    // NCX
    s += c(240, 40, 9, "s2") + a(234, 60, 234, 20, 2) + a(246, 20, 246, 60, 2);
    s += t(226, 16, "Ca²⁺ hinaus", "t-n", "end", 2) + t(254, 16, "3 Na⁺ hinein", "t-n", "start", 2) + t(228, 62, "NCX (ca. 28 %)", "t-n", "end", 2);
    // Na/K-Pumpe
    s += c(340, 40, 9, "s0") + t(340, 62, ["Na⁺/K⁺-Pumpe", "◀ Digoxin"], "t-n", "middle", 0);
    // SR
    s += r(20, 96, 170, 52, "flb", 1, 12) + t(105, 118, "sarkoplasmatisches", "t-s", "middle") + t(105, 130, "Retikulum (Speicher)", "t-s", "middle");
    s += c(60, 96, 9, "s5") + t(36, 92, "RyR2", "t-n", "end", 5);
    s += a(60, 66, 60, 85, 4) + t(66, 82, "öffnet", "t-n", "start", 4);
    s += c(150, 148, 9, "s1") + t(150, 172, "SERCA2a (ca. 70 %)", "t-n", "middle", 1) + t(150, 183, "◀ gebremst durch Phospholamban", "t-n", "middle", 0);
    // Myofilamente
    s += r(230, 96, 146, 64, "s4") + t(303, 112, "Myofilamente", "t-l", "middle", 4) + t(303, 126, ["Ca²⁺ an Troponin C", "→ Querbrücken → Kraft"], "t-n", "middle");
    s += F.ac(70, 100, 150, 70, 228, 112, 5) + t(150, 80, "viel Ca²⁺ frei", "t-n", "middle", 5);
    s += F.ac(240, 160, 205, 172, 162, 152, 1) + F.ac(262, 96, 252, 78, 246, 62, 2);
    s += t(305, 176, "Erschlaffung: Ca²⁺ zurück", "t-n", "middle", 1);
    // Sympathikus
    s += r(4, 196, 372, 70, "s2");
    s += t(12, 212, "Sympathikus (β1) → cAMP → Proteinkinase A phosphoryliert:", "t-s", "start", 2);
    s += t(12, 226, ["L-Typ-Kanal (mehr Trigger-Ca²⁺) · Phospholamban (SERCA schneller)", "· Troponin I (Ca²⁺ löst sich schneller) → kräftiger UND schneller erschlafft"], "t-n");
    s += t(12, 258, "Milrinon (PDE-3-Hemmer): cAMP ↑ · Levosimendan: Troponin C empfindlicher", "t-n", "start", 4);
    return F.svg(380, 270, "Calciumkreislauf der Herzmuskelzelle", s);
  })();

  // ---------- EKG-Komplex ----------
  const FIG_EKG = (function () {
    const X = function (sec) { return 24 + sec * 300; }, B = 150, Y = function (mv) { return B - mv * 120; };
    let s = "";
    for (let x = 0; x <= 4; x++) s += l([[X(x * 0.2), 30], [X(x * 0.2), 198]], "grid");
    for (let y = -0.5; y <= 1.0; y += 0.5) s += l([[X(0), Y(y)], [X(0.8), Y(y)]], "grid");
    function v(tm) {
      if (tm >= 0.08 && tm <= 0.18) return 0.15 * Math.sin((tm - 0.08) / 0.10 * Math.PI);
      if (tm >= 0.24 && tm < 0.255) return -0.1 * (tm - 0.24) / 0.015;
      if (tm >= 0.255 && tm < 0.28) return -0.1 + 1.2 * (tm - 0.255) / 0.025;
      if (tm >= 0.28 && tm < 0.305) return 1.1 - 1.35 * (tm - 0.28) / 0.025;
      if (tm >= 0.305 && tm < 0.33) return -0.25 + 0.25 * (tm - 0.305) / 0.025;
      if (tm >= 0.44 && tm <= 0.64) return 0.3 * Math.pow(Math.sin((tm - 0.44) / 0.20 * Math.PI), 1.3);
      return 0;
    }
    const pts = [];
    for (let i = 0; i <= 400; i++) { const tm = i / 400 * 0.8; pts.push([X(tm), Y(v(tm))]); }
    s += l(pts, "lnb", 2);
    s += t(X(0.13), Y(0.15) - 6, "P", "t-l", "middle") + t(X(0.255), Y(-0.1) + 14, "Q", "t-l", "middle") + t(X(0.28), Y(1.1) - 6, "R", "t-l", "middle");
    s += t(X(0.305), Y(-0.25) + 13, "S", "t-l", "middle") + t(X(0.54), Y(0.3) - 6, "T", "t-l", "middle") + t(X(0.385), Y(0) - 8, "ST", "t-n", "middle");
    function br(t1, t2, y, label, k) {
      return l([[X(t1), y - 4], [X(t1), y], [X(t2), y], [X(t2), y - 4]], "ln", k) + t(X(t1), y + 11, label, "t-n", "start", k);
    }
    s += br(0.08, 0.24, 206, "PQ-Zeit 120–200 ms", 1);
    s += br(0.24, 0.33, 228, "", 4) + t(X(0.33) + 4, 231, "QRS < 100–120 ms", "t-n", "start", 4);
    s += br(0.24, 0.64, 250, "QT-Zeit: frequenzkorrigiert < ca. 450–470 ms", 5);
    s += t(272, 44, ["1 Kästchen", "= 200 ms", "= 0,5 mV", "(25 mm/s,", "10 mm/mV)"], "t-n");
    s += t(272, 120, ["P: Vorhöfe", "QRS: Kammer-", "erregung", "ST: Plateau", "T: Repolarisation"], "t-n", "start", 0);
    return F.svg(380, 268, "EKG-Komplex mit Wellen, Strecken und Normalwerten", s);
  })();

  // ---------- Herzzyklus nach Wiggers ----------
  const FIG_WIGGERS = (function () {
    const X = function (sec) { return 44 + sec * 400; };
    const YP = function (p) { return 190 - p / 130 * 156; }, YV = function (v) { return 296 - (v - 40) / 90 * 64; };
    let s = "";
    [[0.02, 0.07, "①"], [0.07, 0.33, "②"], [0.33, 0.41, "③"], [0.41, 0.8, "④"]].forEach(function (p, i) {
      s += r(X(p[0]), 26, X(p[1]) - X(p[0]), 270, "fl", i % 2 ? 0 : 1, 0) + t((X(p[0]) + X(p[1])) / 2, 20, p[2], "t-l", "middle");
    });
    [0, 40, 80, 120].forEach(function (p) { s += l([[X(0), YP(p)], [X(0.8), YP(p)]], "grid") + t(X(0) - 4, YP(p) + 3, String(p), "t-n", "end"); });
    s += t(4, 32, "mmHg", "t-n");
    s += l([[X(0), 34], [X(0), 190], [X(0.8), 190]], "ax");
    const LV = [[0, 8], [0.02, 10], [0.05, 45], [0.07, 80], [0.12, 112], [0.17, 120], [0.25, 113], [0.33, 98], [0.37, 45], [0.41, 8], [0.45, 3], [0.55, 5], [0.68, 6], [0.75, 10], [0.8, 8]];
    const AO = [[0, 82], [0.07, 79], [0.12, 108], [0.17, 117], [0.25, 111], [0.33, 99], [0.345, 92], [0.36, 97], [0.45, 93], [0.6, 87], [0.8, 82]];
    const LA = [[0, 8], [0.03, 10], [0.08, 4], [0.2, 7], [0.33, 11], [0.4, 14], [0.46, 6], [0.6, 5], [0.72, 6], [0.76, 12], [0.8, 8]];
    const map = function (arr) { return arr.map(function (p) { return [X(p[0]), YP(p[1])]; }); };
    s += F.sm(map(AO), "lnb", 1) + F.sm(map(LV), "lnb", 5) + F.sm(map(LA), "lnb", 3);
    s += t(X(0.2), YP(120) - 8, "linker Ventrikel", "t-s", "start", 5) + t(X(0.5), YP(93) - 6, "Aorta (Inzisur bei ③)", "t-s", "start", 1);
    s += t(X(0.5), YP(5) - 6, "linker Vorhof (a, c, v)", "t-s", "start", 3);
    s += t(X(0.02) + 2, 203, "1. Herzton", "t-n", "start", 6) + t(X(0.33) + 2, 203, "2. Herzton", "t-n", "start", 6);
    // Volumen
    [40, 80, 120].forEach(function (v) { s += l([[X(0), YV(v)], [X(0.8), YV(v)]], "grid") + t(X(0) - 4, YV(v) + 3, String(v), "t-n", "end"); });
    s += t(4, 222, "ml", "t-n") + l([[X(0), 226], [X(0), 296], [X(0.8), 296]], "ax");
    const VOL = [[0, 120], [0.07, 120], [0.17, 82], [0.33, 50], [0.41, 50], [0.5, 94], [0.6, 103], [0.72, 106], [0.77, 120], [0.8, 120]];
    s += F.sm(VOL.map(function (p) { return [X(p[0]), YV(p[1])]; }), "lnb", 2);
    s += t(X(0.11), YV(120) - 4, "EDV ca. 120", "t-n", "start", 2) + t(X(0.33), YV(50) + 10, "ESV ca. 50", "t-n", "end", 2) + t(X(0.79), YV(106) + 14, "Vorhof", "t-n", "end", 2);
    s += t(4, 312, ["① Anspannung (Mitralklappe zu) · ② Austreibung (Aortenklappe auf)", "③ Entspannung (Aortenklappe zu) · ④ Füllung (Mitralklappe auf):", "    schnelle Füllung, Diastase, Vorhofkontraktion"], "t-n");
    return F.svg(380, 344, "Herzzyklus mit Drücken von linkem Ventrikel, Aorta und Vorhof sowie Ventrikelvolumen", s);
  })();

  // ---------- Frank-Starling ----------
  const FIG_STARLING = (function () {
    const P = F.plot({ x: 30, y: 24, w: 320, h: 170, xmin: 0, xmax: 100, ymin: 0, ymax: 110, xlabel: "Vorlast (enddiastolisches Volumen)", ylabel: "Schlagvolumen", ylabelDx: 26 });
    let s = P.svg;
    const sv = function (x, m) { return m * (1 - Math.exp(-x / 26)); };
    s += P.curve(function (x) { return sv(x, 105); }, "lnb", 2) + P.curve(function (x) { return sv(x, 85); }, "lnb", 1) + P.curve(function (x) { return sv(x, 45); }, "lnb", 5);
    function step(x1, x2, m, k) {
      return l([[P.x(x1), P.y(sv(x1, m))], [P.x(x2), P.y(sv(x1, m))], [P.x(x2), P.y(sv(x2, m))]], "lnd", k) + c(P.x(x1), P.y(sv(x1, m)), 3.5, "fs", k) + c(P.x(x2), P.y(sv(x2, m)), 3.5, "fs", k);
    }
    s += step(18, 32, 85, 1) + step(70, 84, 85, 1);
    s += t(P.x(33), P.y(sv(25, 85)) + 4, ["steiler Teil: Volumen", "→ SV deutlich ↑"], "t-n", "start", 1);
    s += t(P.x(84), P.y(sv(84, 85)) + 16, ["flacher Teil: v.a.", "Füllungsdruck ↑"], "t-n", "end", 1);
    s += t(P.x(99), P.y(sv(99, 105)) - 6, "Kontraktilität ↑ (z.B. Katecholamine)", "t-n", "end", 2);
    s += t(P.x(99), P.y(sv(99, 85)) - 6, "normal", "t-n", "end", 1);
    s += t(P.x(99), P.y(sv(99, 45)) - 6, "Herzinsuffizienz: flach", "t-n", "end", 5);
    return F.svg(380, 224, "Frank-Starling-Kurven bei normaler, gesteigerter und verminderter Kontraktilität", s);
  })();

  // ---------- Guyton-Modell ----------
  const FIG_GUYTON = (function () {
    const P = F.plot({ x: 30, y: 24, w: 320, h: 180, xmin: -4, xmax: 16, ymin: 0, ymax: 10,
      xticks: [[0, "0"]], xlabel: "Druck im rechten Vorhof", ylabel: "HZV bzw. venöser Rückstrom", ylabelDx: 26 });
    let s = P.svg;
    const vr = function (msfp) { return function (x) { return Math.max(0, Math.min(msfp, msfp - Math.max(x, 0)) * 0.62); }; };
    const co = function (m) { return function (x) { return x < -2 ? 0 : m * (1 - Math.exp(-(x + 2) / 2.6)); }; };
    s += P.curve(vr(10), "lnb", 1, -4, 10) + P.curve(vr(14), "lnd", 1, -4, 14) + P.curve(vr(7), "lnd", 4, -4, 7);
    s += P.curve(co(9.2), "lnb", 2, -2, 16) + P.curve(co(5), "lnd", 5, -2, 16);
    function cross(m, msfp) {
      let x = -2; for (let i = 0; i < 400; i++) { const xx = -2 + i * 0.04; if (co(m)(xx) >= vr(msfp)(xx)) { x = xx; break; } }
      return c(P.x(x), P.y(co(m)(x)), 4, "fs", 6);
    }
    s += cross(9.2, 10) + cross(9.2, 14) + cross(9.2, 7) + cross(5, 10);
    s += t(P.x(10), P.y(0) - 6, "MSFP", "t-n", "middle", 1) + t(P.x(14), P.y(0) - 6, "Volumen ↑", "t-n", "middle", 1) + t(P.x(6.5), P.y(0) - 6, "Narkose", "t-n", "end", 4);
    s += t(P.x(15.8), P.y(co(9.2)(16)) - 6, "Herzfunktionskurve", "t-n", "end", 2);
    s += t(P.x(15.8), P.y(co(5)(16)) - 6, "insuffizientes Herz", "t-n", "end", 5);
    s += t(P.x(-3.8), P.y(7.9), ["venöser", "Rückstrom"], "t-n", "start", 1);
    s += t(4, 240, "MSFP = mittlerer systemischer Füllungsdruck (Schnittpunkt mit der x-Achse);", "t-n");
    s += t(4, 252, "Punkte = Arbeitspunkte (HZV = Rückstrom).", "t-n");
    return F.svg(380, 258, "Guyton-Modell mit Herzfunktions- und venöser Rückstromkurve", s);
  })();

  // ---------- Koronarfluss ----------
  const FIG_KORONAR = (function () {
    const X = function (sec) { return 40 + sec * 400; };
    const P = F.plot({ x: 40, y: 30, w: 320, h: 150, xmin: 0, xmax: 0.8, ymin: -20, ymax: 100, yticks: [[0, "0"]], ylabel: "Koronarfluss (schematisch)", ylabelDx: 36 });
    let s = r(X(0.02), 30, X(0.33) - X(0.02), 150, "fl", 4, 0) + t((X(0.02) + X(0.33)) / 2, 194, "Systole", "t-s", "middle", 4) + t((X(0.33) + X(0.8)) / 2, 194, "Diastole", "t-s", "middle", 1);
    s += P.svg;
    const LCA = [[0, 35], [0.02, 30], [0.05, -10], [0.09, 15], [0.2, 22], [0.33, 20], [0.37, 88], [0.45, 80], [0.6, 62], [0.75, 52], [0.8, 45]];
    const RCA = [[0, 30], [0.03, 28], [0.08, 36], [0.17, 44], [0.28, 40], [0.33, 34], [0.4, 40], [0.55, 36], [0.7, 32], [0.8, 30]];
    s += F.sm(LCA.map(function (p) { return [P.x(p[0]), P.y(p[1])]; }), "lnb", 5) + F.sm(RCA.map(function (p) { return [P.x(p[0]), P.y(p[1])]; }), "lnb", 2);
    s += t(P.x(0.42), P.y(84) - 6, "linke Koronararterie: v.a. in der Diastole", "t-n", "start", 5);
    s += t(P.x(0.42), P.y(26) + 14, "rechte Koronararterie: Systole + Diastole", "t-n", "start", 2);
    s += t(P.x(0.06), P.y(-10) + 12, "Kompression", "t-n", "start", 4);
    s += t(4, 214, "Tachykardie verkürzt vor allem die Diastole → weniger Zeit für die Durchblutung links.", "t-n");
    return F.svg(380, 222, "Phasischer Koronarfluss links und rechts im Herzzyklus", s);
  })();

  // ---------- Nachlastempfindlichkeit RV vs. LV ----------
  const FIG_RV = (function () {
    const P = F.plot({ x: 30, y: 24, w: 320, h: 160, xmin: 0, xmax: 100, ymin: 0, ymax: 110, yticks: [[0, "0"], [50, "50"], [100, "100"]],
      xlabel: "Anstieg der Nachlast (Druck, gegen den ausgeworfen wird)", ylabel: "Schlagvolumen (% vom Ausgang)", ylabelDx: 26 });
    let s = P.svg;
    s += P.curve(function (x) { return 100 - x * 0.18; }, "lnb", 5);
    s += P.curve(function (x) { return 100 / (1 + Math.pow(x / 35, 2.2)); }, "lnb", 1);
    s += t(P.x(98), P.y(82) - 6, "linke Kammer: kaum Abfall", "t-s", "end", 5);
    s += t(P.x(42), P.y(52), "rechte Kammer: steiler Abfall", "t-s", "start", 1);
    return F.svg(380, 222, "Schlagvolumen in Abhängigkeit von der Nachlast für rechte und linke Kammer", s);
  })();

  // ---------- Perikard ----------
  const FIG_PERIKARD = (function () {
    const P = F.plot({ x: 30, y: 24, w: 320, h: 160, xmin: 0, xmax: 1200, ymin: 0, ymax: 30, xticks: [[0, "0"], [200, "200"], [600, "600"], [1000, "1000"]],
      xlabel: "Volumen im Herzbeutel (ml)", ylabel: "Druck im Herzbeutel", ylabelDx: 26 });
    let s = P.svg;
    s += P.curve(function (v) { return 1 + 1.4 * Math.exp((v - 50) / 60); }, "lnb", 5, 0, 228);
    s += P.curve(function (v) { return 1 + 1.4 * Math.exp((v - 900) / 110); }, "lnb", 2, 0, 1200);
    s += t(P.x(240), P.y(26), ["akut: 100–200 ml", "→ Tamponade möglich"], "t-s", "start", 5);
    s += t(P.x(1180), P.y(12), ["langsam wachsend:", "> 1 l toleriert"], "t-s", "end", 2);
    s += t(P.x(10), P.y(3) - 6, "Reserve", "t-n", "start", 0);
    return F.svg(380, 222, "Druck-Volumen-Kurve des Herzbeutels bei akutem und chronischem Erguss", s);
  })();

  // ---------- Barorezeptorreflex ----------
  const FIG_BARO = (function () {
    let s = "";
    s += F.box(120, 6, 140, 30, "Blutdruck ↓", 5);
    s += a(190, 36, 190, 56, 5);
    s += F.box(20, 56, 340, 42, ["Barorezeptoren feuern weniger", "Karotissinus (Glossopharyngeus), Aortenbogen (Vagus)"], 0);
    s += a(190, 98, 190, 116, 0);
    s += F.box(80, 116, 220, 30, "Nucleus tractus solitarii (Hirnstamm)", 0);
    s += a(150, 146, 90, 170, 4) + a(230, 146, 290, 170, 1);
    s += F.box(4, 170, 172, 42, ["Sympathikus ↑", "Gefäße eng, Kraft ↑, Frequenz ↑"], 4);
    s += F.box(204, 170, 172, 42, ["Vagus ↓", "Herzfrequenz ↑"], 1);
    s += a(90, 212, 160, 236, 2) + a(290, 212, 220, 236, 2);
    s += F.box(120, 236, 140, 30, "Blutdruck ↑", 2);
    s += t(190, 286, "Narkose (volatile Anästhetika, Propofol) dämpft den Reflex dosisabhängig", "t-n", "middle", 5);
    return F.svg(380, 294, "Barorezeptorreflex bei Blutdruckabfall", s);
  })();

  // ---------- Fetaler Kreislauf ----------
  const FIG_FETUS = (function () {
    let s = "";
    s += F.box(4, 6, 120, 30, "Plazenta", 5);
    s += F.box(4, 64, 120, 30, "Nabelvene", 5) + a(64, 36, 64, 62, 5);
    s += F.box(160, 64, 102, 30, "Leber", 0);
    s += a(124, 72, 158, 72, 5) + t(141, 60, "teils", "t-n", "middle");
    s += F.box(4, 120, 120, 30, ["Ductus venosus"], 3) + a(64, 94, 64, 118, 5);
    s += F.box(4, 176, 120, 30, "untere Hohlvene", 5) + a(64, 150, 64, 174, 5) + a(170, 94, 120, 174, 0);
    s += F.box(150, 176, 112, 30, "rechter Vorhof", 0) + a(124, 191, 148, 191, 5);
    s += F.box(162, 120, 100, 30, "obere Hohlvene", 1) + a(212, 150, 212, 174, 1);
    s += F.box(288, 176, 88, 30, "linker Vorhof", 5) + a(262, 186, 286, 186, 5) + t(274, 172, "Foramen ovale", "t-n", "middle", 3);
    s += F.box(288, 232, 88, 30, "linke Kammer", 5) + a(332, 206, 332, 230, 5);
    s += F.box(150, 232, 112, 30, "rechte Kammer", 1) + a(206, 206, 206, 230, 1);
    s += F.box(288, 290, 88, 30, ["Aorta: Herz", "und Gehirn"], 5) + a(332, 262, 332, 288, 5);
    s += F.box(150, 290, 112, 30, "Pulmonalarterie", 1) + a(206, 262, 206, 288, 1);
    s += F.box(4, 290, 120, 30, ["Lunge (hoher", "Widerstand)"], 0) + a(150, 305, 126, 305, 0) + t(138, 284, "10–25 %", "t-n", "middle", 0);
    s += F.box(150, 346, 226, 30, ["Ductus arteriosus → absteigende", "Aorta → Nabelarterien → Plazenta"], 3) + a(240, 320, 240, 344, 1);
    s += t(4, 396, "rot = sauerstoffreicher, blau = sauerstoffärmer, gelb = Kurzschlüsse (schematisch)", "t-n");
    return F.svg(380, 404, "Fetaler Kreislauf mit Ductus venosus, Foramen ovale und Ductus arteriosus", s);
  })();

  window.__addSpezialFiguren("herz", {
    zelle: [{ svg: FIG_SARKOMER, nach: "Das Sarkomer – der Motor", caption: "Sarkomer zwischen zwei Z-Scheiben: ==Myosinköpfe ziehen die Aktinfäden zur Mitte, die Z-Scheiben rücken zusammen==. Titin spannt sich wie eine Feder von der Z-Scheibe zur Mitte und bestimmt einen Großteil der passiven Steifigkeit." }],
    ekk: [{ svg: FIG_CALCIUM, nach: "Erschlaffung: Calcium muss wieder raus", caption: "Calcium-induzierte Calciumfreisetzung und Rücktransport (Anteile beim Menschen nach Bers 2002): ==wenig Trigger-Calcium öffnet RyR2 und setzt viel gespeichertes Calcium frei==; zur Erschlaffung pumpt SERCA2a den Großteil zurück, der NCX schafft den Rest hinaus." }],
    ekg: [{ svg: FIG_EKG, nach: "Wellen, Strecken und Normalwerte (Erwachsene)", caption: "Schematischer EKG-Komplex bei 25 mm/s und 10 mm/mV mit den Normalwerten aus der Tabelle. Die QT-Zeit muss frequenzkorrigiert werden (QTc)." }],
    zyklus: [{ svg: FIG_WIGGERS, nach: "Die vier Phasen", caption: "Herzzyklus (Wiggers-Diagramm, schematisch): ==Klappen öffnen und schließen, wenn sich die Druckkurven kreuzen==. In ① und ③ sind alle Klappen zu – das Volumen bleibt gleich, nur der Druck ändert sich." }],
    determinanten: [{ svg: FIG_STARLING, nach: "Vorlast und Frank-Starling-Mechanismus", caption: "Frank-Starling-Kurven (schematisch): Die gleiche Volumenzunahme steigert das Schlagvolumen im steilen Teil deutlich, im flachen Teil kaum – ==dort steigt vor allem der Füllungsdruck (Stauung)==. Mehr Kontraktilität hebt die Kurve an, Herzinsuffizienz flacht sie ab." }],
    hzv: [{ svg: FIG_GUYTON, nach: "Das Guyton-Modell", caption: "Guyton-Modell (schematisch): Das HZV liegt im Schnittpunkt von Herzfunktions- und Rückstromkurve. ==Volumen verschiebt die Rückstromkurve nach rechts, Narkose bzw. Venenerschlaffung nach links (kleineres stressed volume) – das HZV folgt.== Bei insuffizientem Herzen bringt mehr Volumen kaum mehr HZV, aber höhere Vorhofdrücke." }],
    koronar: [{ svg: FIG_KORONAR, nach: "Systolische Kompression", caption: "Koronarfluss im Herzzyklus (schematisch): ==Links wird die Strombahn in der Systole zusammengedrückt, der Fluss findet überwiegend in der Diastole statt==; rechts bei normalem Druck in beiden Phasen." }],
    rv: [{ svg: FIG_RV, nach: "Nachlastempfindlichkeit", caption: "Nachlastempfindlichkeit (schematisch, nach klassischen Tierversuchen): ==Schon ein mäßiger Anstieg des Lungengefäßwiderstands senkt das Schlagvolumen der dünnwandigen rechten Kammer stark==, die linke Kammer hält ihr Schlagvolumen bei Nachlastanstieg weitgehend." }],
    insuffizienz: [{ svg: FIG_PERIKARD, nach: "Herzbeutel (Perikard)", caption: "Druck-Volumen-Kurve des Herzbeutels (schematisch): Nach einer kleinen Reserve steigt der Druck steil an. ==Ein akuter Erguss von 100–200 ml kann eine Tamponade verursachen==, langsam wachsende Ergüsse dehnen den Herzbeutel (Kurve nach rechts verschoben)." }],
    regulation: [{ svg: FIG_BARO, nach: "In Sekunden: der Barorezeptorreflex", caption: "Barorezeptorreflex bei Blutdruckabfall (bei Anstieg spiegelbildlich): ==weniger Dehnung → weniger Meldungen → Sympathikus ↑, Vagus ↓ → Blutdruck steigt wieder==. Narkosemittel dämpfen diesen schnellen Regler." }],
    lebensalter: [{ svg: FIG_FETUS, nach: "Fetaler Kreislauf", caption: "Fetaler Kreislauf (vereinfacht): ==Sauerstoffreiches Blut aus der Plazenta gelangt über Ductus venosus und Foramen ovale bevorzugt in die linke Kammer (Herz, Gehirn)==; Blut der oberen Hohlvene fließt über rechte Kammer und Ductus arteriosus an der Lunge vorbei, die nur ca. 10–25 % des Auswurfs erhält." }]
  });

  // ---------- Bildgeschichten (Piktogramme) ----------
  const B = F.bild;
  window.__addSpezialFiguren("herz", {
    zelle: [{ nach: "Energie: viel Verbrauch, kaum Vorrat", caption: "Bildgeschichte: Was bei Ischämie in der Herzmuskelzelle passiert – ==die Kontraktion erlischt früh und spart Energie, der Zelltod beginnt nach ca. 20–40 min==.", svg: B("Ischämie in der Herzmuskelzelle", [
      { i: "herz:5 + eng:5", t: ["Durchblutung stoppt", "(Ischämie)"] },
      { i: "#O₂:1:down > #ATP:4:down", t: ["Kein Sauerstoff:", "nur anaerobe Glykolyse,", "sehr wenig ATP"] },
      { i: "#H⁺:5:up + muskel:3:down", t: ["Säure und Phosphat steigen", "→ Myofilamente reagieren", "schlechter auf Calcium"] },
      { i: "herz:3:down + uhr:0", t: ["Kontraktion erlischt nach", "ca. 1 min – spart Energie"] },
      { i: "uhr:5 > zelle:5:x", t: ["Nach ca. 20–40 min:", "irreversibler Zelltod,", "zuerst im Subendokard"], k: 5 }
    ]) }],
    elektro: [{ nach: "Steuerung durch das vegetative Nervensystem", caption: "Bildgeschichte: Sympathikus und Vagus am Sinusknoten – ==über Gs bzw. Gi verändern sie cAMP und damit Frequenz, Leitung und Kraft==.", svg: B("Sympathikus und Vagus am Herzen", [
      { i: "blitz:4 > rezeptor:4", t: ["Sympathikus → β1-Rezeptor", "→ Gs → cAMP ↑"], k: 4 },
      { i: "#Ca²⁺:4:up", t: ["Schrittmacherstrom stärker,", "mehr Ca²⁺ durch", "L-Typ-Kanäle"] },
      { i: "herz:4:up", t: ["Frequenz, Leitung, Kraft ↑,", "schnellere Erschlaffung"], k: 4 },
      { i: "#ACh:1 > rezeptor:1", t: ["Vagus → Acetylcholin", "→ M2-Rezeptor → Gi"], k: 1 },
      { i: "#K⁺:1 > zelle:1", t: ["cAMP ↓, Kaliumkanäle", "öffnen → Zelle negativer"] },
      { i: "herz:1:down", t: ["Frequenz ↓,", "AV-Leitung langsamer"], k: 1 }
    ]) }],
    ekk: [{ nach: "Erschlaffung: Calcium muss wieder raus", caption: "Bildgeschichte: Erschlaffung ist aktiv – ==fehlt ATP, leidet zuerst die Diastole, dann die Systole== (Ischämiekaskade).", svg: B("Warum Erschlaffung Energie kostet", [
      { i: "pumpe:1", t: ["SERCA-Pumpe und Lösen", "der Querbrücken", "brauchen ATP"] },
      { i: "eng:5 > #ATP:4:down", t: ["Ischämie:", "ATP fehlt"] },
      { i: "#Ca²⁺:4:up", t: ["Calcium bleibt länger", "in der Zelle"] },
      { i: "herz:5:down", t: ["Zuerst gestörte Erschlaffung,", "dann schwächere", "Kontraktion"], k: 5 }
    ]) }],
    ekg: [{ nach: "Ischämie und Infarkt", caption: "Bildgeschichte: Vom Verletzungsstrom zur ST-Veränderung – ==ein unauffälliges EKG schließt eine Ischämie nicht aus==.", svg: B("Ischämie im EKG", [
      { i: "eng:5 > herz:5", t: ["Ischämie trifft zuerst", "das Subendokard"] },
      { i: "blitz:3", t: ["Verletzungsstrom zwischen", "ischämischem und", "gesundem Gewebe"] },
      { i: "monitor:1:down", t: ["Subendokardial:", "ST-Senkung"], k: 1 },
      { i: "monitor:5:up", t: ["Transmural: ST-Hebung", "über dem Areal"], k: 5 },
      { i: "uhr:0 > warnung:4", t: ["EKG ändert sich spät –", "normales EKG schließt", "Ischämie nicht aus"], k: 4 }
    ]) }],
    klappen: [{ nach: "Die vier wichtigsten Klappenfehler", caption: "Bildgeschichte: Die Merkregeln für Klappenfehler folgen direkt aus der Physik von Zeit und Gegendruck.", svg: B("Stenose und Insuffizienz", [
      { i: "eng:5", t: ["Stenose", "Fluss durch enge Öffnung", "braucht Zeit"], k: 5 },
      { i: "uhr:2 + tropfen:1 + eng:4", t: ["langsam · voll · eng", "Frequenz niedrig-normal,", "Vorlast und Widerstand halten"], k: 2 },
      { i: "herz:4", t: ["Insuffizienz", "Rückfluss hängt von Zeit", "und Gegendruck ab"], k: 4 },
      { i: "uhr:5:up + tropfen:1 + weit:2", t: ["schnell · voll · weit", "Frequenz normal–hoch,", "Vorlast halten, Widerstand ↓"], k: 2 }
    ]) }],
    determinanten: [{ nach: "Herzfrequenz", caption: "Bildgeschichte: Tachykardie verkürzt vor allem die Diastole – ==weniger Füllung und weniger Durchblutung der linken Kammer==.", svg: B("Wenn die Frequenz steigt", [
      { i: "herz:5:up", t: ["Herzfrequenz steigt"] },
      { i: "uhr:4", t: ["Systole bleibt fast gleich,", "Diastole wird viel kürzer"] },
      { i: "tropfen:1:down + eng:5", t: ["Weniger Füllungszeit und", "weniger Durchblutungszeit", "für die linke Kammer"] },
      { i: "herz:5:down", t: ["Ab einer Grenze sinkt das", "Schlagvolumen stärker", "→ HZV fällt"], k: 5 }
    ]) }],
    hzv: [{ nach: "'Stressed' und 'unstressed volume'", caption: "Bildgeschichte: Warum der Blutdruck nach der Narkoseeinleitung fällt – ==erschlaffte Venen verringern das 'stressed volume' und damit den Rückstrom==.", svg: B("Hypotonie nach der Einleitung", [
      { i: "spritze:4", t: ["Narkosemittel, Sympathiko-", "lyse, Spinal- oder", "Epiduralanästhesie"] },
      { i: "vene:1 > weit:1", t: ["Venen erschlaffen:", "stressed → unstressed", "volume"] },
      { i: "herz:5:down", t: ["Füllungsdruck ↓ →", "venöser Rückstrom ↓", "→ HZV ↓"] },
      { i: "weit:4 + herz:4:down", t: ["Zusätzlich: Arterien weit,", "Herzmuskel dosisabhängig", "geschwächt"] },
      { i: "manometer:5:down", t: ["Hypotonie nach", "Narkoseeinleitung"], k: 5 }
    ]) }],
    koronar: [{ nach: "Systolische Kompression", caption: "Bildgeschichte: Die linke Kammer wird vor allem in der Diastole durchblutet – ==Tachykardie, niedriger diastolischer Druck und hoher Füllungsdruck gefährden sie==.", svg: B("Durchblutung der linken Kammer", [
      { i: "herz:5 > eng:5", t: ["Systole: Wand drückt", "die Gefäße zu, innen", "am stärksten"] },
      { i: "uhr:1", t: ["Linke Kammer wird v.a.", "in der Diastole", "durchblutet"] },
      { i: "manometer:1", t: ["Perfusionsdruck ≈ diasto-", "lischer Aortendruck minus", "Füllungsdruck links"] },
      { i: "warnung:5", t: ["Gefährlich: Tachykardie,", "niedriger diastolischer", "Druck, hoher Füllungsdruck"], k: 5 }
    ]) }],
    rv: [{ nach: "Die Abwärtsspirale", caption: "Bildgeschichte: Die Abwärtsspirale des Rechtsherzversagens – ==zusätzliches Volumen dehnt die Kammer weiter und verschlimmert sie==.", svg: B("Rechtsherzversagen", [
      { i: "lunge:5 + eng:5", t: ["Lungengefäßwiderstand ↑", "(Embolie, Hypoxie,", "Azidose, Beatmung)"] },
      { i: "herz:4:up", t: ["Rechte Kammer weitet sich,", "Trikuspidalklappe", "wird undicht"] },
      { i: "herz:5:down", t: ["Septum nach links → linke", "Kammer füllt schlechter", "→ Blutdruck ↓"] },
      { i: "eng:5 > herz:5:x", t: ["Rechte Kammer schlechter", "durchblutet → Ischämie,", "Pumpleistung ↓"] },
      { i: "infusion:5:x", t: ["Kreis schließt sich –", "mehr Volumen dehnt", "die Kammer weiter"], k: 5 }
    ]) }],
    insuffizienz: [{ nach: "Das 'Notprogramm' und seine Folgen", caption: "Bildgeschichte: Das 'Notprogramm' bei Herzinsuffizienz – ==kurzfristig stützend, langfristig schädlich==; genau hier setzen die Medikamente an.", svg: B("Das Notprogramm bei Herzinsuffizienz", [
      { i: "herz:5:down", t: ["HZV sinkt → Barorezep-", "toren und Niere melden", "Minderdurchblutung"] },
      { i: "blitz:4 + niere:4", t: ["Sympathikus, RAAS", "und ADH werden aktiv"] },
      { i: "eng:5 + tropfen:1:up", t: ["Gefäße eng (Nachlast ↑),", "Salz-/Wasserrückhalt", "(Vorlast ↑, Ödeme)"] },
      { i: "manometer:2:ok", t: ["Kurzfristig: Blutdruck", "und Füllung gestützt"], k: 2 },
      { i: "herz:5:x", t: ["Langfristig: Wandspannung,", "O₂-Bedarf, Umbau, Fibrose,", "Rhythmusstörungen"], k: 5 }
    ]) }],
    lebensalter: [{ nach: "Umstellung bei der Geburt", caption: "Bildgeschichte: Vom fetalen zum Erwachsenenkreislauf – ==die Kurzschlüsse schließen sich zunächst nur funktionell==.", svg: B("Umstellung bei der Geburt", [
      { i: "baby:1 + lunge:1:up", t: ["Erster Atemzug: Lunge", "entfaltet sich, O₂ steigt"] },
      { i: "lunge:2 > weit:2", t: ["Lungengefäßwiderstand", "fällt → mehr Blut", "durch die Lunge"] },
      { i: "plazenta:5:x", t: ["Abnabelung: Plazenta", "fällt weg →", "Systemwiderstand ↑"] },
      { i: "herz:3:ok", t: ["Druck links > rechts →", "Foramen ovale wird", "angedrückt"] },
      { i: "#O₂:1:up > gefaess:3:x", t: ["O₂ ↑, Prostaglandine ↓ →", "Ductus arteriosus schließt", "sich (meist 1–3 Tage)"], k: 2 }
    ]) }]
  });
})();
