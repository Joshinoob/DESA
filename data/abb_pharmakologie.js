// Abbildungen Spezialwissen Pharmakologie-Grundlagen – eigene Schemata bzw. Modellkurven.
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Vier Rezeptorfamilien ----------
  const FIG_FAMILIEN = (function () {
    let s = l([[0, 50], [380, 50]], "lnb", 0) + l([[0, 58], [380, 58]], "lnb", 0) + t(284, 74, "Zellmembran", "t-n", "middle");
    const fam = [
      ["Ionenkanal", "Millisekunden", 1],
      ["G-Protein-gekoppelt", "Sekunden–Minuten", 2],
      ["Enzym-gekoppelt", "Minuten–Stunden", 3],
      ["Kernrezeptor", "Stunden–Tage", 5]
    ];
    fam.forEach(function (f, i) {
      const x = 48 + i * 94;
      s += t(x, 14, f[0], "t-s", "middle", f[2]) + t(x, 26, f[1], "t-n", "middle");
      if (i === 0) { s += r(x - 14, 36, 10, 36, "flb", 1, 2) + r(x + 4, 36, 10, 36, "flb", 1, 2) + a(x, 34, x, 92, 1) + t(x, 106, "Ionen strömen", "t-n", "middle", 1); }
      if (i === 1) {
        for (let k = 0; k < 7; k++) s += r(x - 24 + k * 7, 40, 5, 28, "flb", 2, 2);
        s += c(x - 6, 80, 6, "flb", 2) + c(x + 6, 82, 4, "flb", 2) + a(x, 88, x, 100, 2) + t(x, 112, ["G-Protein →", "2. Botenstoff"], "t-n", "middle", 2);
      }
      if (i === 2) { s += r(x - 5, 34, 10, 40, "flb", 3, 2) + r(x - 12, 74, 24, 12, "flb", 3, 3) + t(x, 106, ["Kinase u.a.", "(z.B. Insulin)"], "t-n", "middle", 3); }
      if (i === 3) { s += c(x, 40, 5, "fs", 5) + a(x, 46, x, 72, 5) + c(x, 82, 8, "flb", 5) + r(x - 36, 98, 72, 18, "flb", 0, 4) + t(x, 110, "Zellkern: Gene", "t-n", "middle"); }
    });
    s += t(4, 140, ["Je mehr Zwischenschritte zwischen Bindung und Wirkung, desto langsamer,", "aber stärker verstärkt und länger anhaltend ist die Antwort."], "t-n");
    return F.svg(380, 160, "Die vier Rezeptorfamilien mit typischer Zeitskala", s);
  })();

  // ---------- G-Protein-Signalwege ----------
  const FIG_GPCR = (function () {
    let s = "";
    const cols = [
      ["Gs", ["β1, β2, D1, H2, V2"], "Adenylatcyclase ↑", "cAMP ↑ → PKA", ["Herz: Kraft und", "Frequenz ↑; glatte", "Muskulatur erschlafft"], 2],
      ["Gi/o", ["α2, µ-Opioid, M2,", "D2, A1, GABA-B"], "Adenylatcyclase ↓", "cAMP ↓; K⁺-Kanäle auf", ["Hyperpolarisation,", "weniger Transmitter,", "Herzfrequenz ↓"], 1],
      ["Gq", ["α1, M3, H1, V1, AT1"], "Phospholipase C ↑", "IP₃ → Ca²⁺; DAG → PKC", ["glatte Muskulatur", "kontrahiert;", "Drüsen sezernieren"], 4]
    ];
    cols.forEach(function (cl, i) {
      const x = 4 + i * 126, w = 120, cx = x + w / 2;
      s += r(x, 4, w, 30, "s" + cl[5]) + t(cx, 18, cl[0], "t-l", "middle", cl[5]) + t(cx, 29, cl[1][0], "t-n", "middle");
      if (cl[1][1]) s += t(cx, 44, cl[1][1], "t-n", "middle");
      s += a(cx, 48, cx, 64, cl[5]);
      s += r(x, 64, w, 26, "flb", cl[5], 4) + t(cx, 81, cl[2], "t-n", "middle", 6);
      s += a(cx, 90, cx, 106, cl[5]);
      s += r(x, 106, w, 26, "s0", null, 4) + t(cx, 123, cl[3], "t-n", "middle", 6);
      s += a(cx, 132, cx, 148, cl[5]);
      s += t(cx, 160, cl[4], "t-n", "middle", cl[5]);
    });
    s += t(4, 200, ["PKA/PKC = Proteinkinase A/C, DAG = Diacylglycerol,", "IP₃ = Inositoltrisphosphat"], "t-n");
    return F.svg(380, 218, "Die drei wichtigsten G-Protein-Signalwege Gs, Gi und Gq", s);
  })();

  // ---------- Zustände des Natriumkanals ----------
  const FIG_NAKANAL = (function () {
    let s = "";
    function kanal(x, y, zustand, k) {
      let o = r(x - 20, y, 12, 50, "flb", k, 3) + r(x + 8, y, 12, 50, "flb", k, 3);
      if (zustand === "zu") o += l([[x - 8, y + 4], [x + 8, y + 4]], "lnb", k);
      if (zustand === "inaktiv") o += c(x, y + 46, 6, "fs", k);
      if (zustand === "offen") o += a(x, y - 10, x, y + 62, 4);
      return o;
    }
    s += kanal(60, 30, "zu", 0) + kanal(190, 30, "offen", 2) + kanal(320, 30, "inaktiv", 5);
    s += t(60, 104, "ruhend", "t-l", "middle", 6) + t(60, 116, "geschlossen,", "t-n", "middle") + t(60, 127, "aktivierbar", "t-n", "middle");
    s += t(190, 104, "offen", "t-l", "middle", 2) + t(190, 116, "Na⁺ strömt ein", "t-n", "middle");
    s += t(320, 104, "inaktiviert", "t-l", "middle", 5) + t(320, 116, "geschlossen,", "t-n", "middle") + t(320, 127, "nicht aktivierbar", "t-n", "middle");
    s += a(92, 50, 158, 50, 6) + t(125, 44, "Depolarisation", "t-n", "middle");
    s += a(222, 50, 288, 50, 6) + t(255, 44, "ms später", "t-n", "middle");
    s += F.ac(320, 140, 190, 176, 64, 140, 6) + t(190, 172, "Repolarisation (Refraktärzeit)", "t-n", "middle");
    s += r(150, 182, 210, 24, "s5") + t(255, 198, "Blocker binden bevorzugt hier", "t-n", "middle", 5);
    s += a(200, 182, 194, 132, 5) + a(300, 182, 316, 132, 5);
    s += t(4, 222, "→ Use-Dependence: häufig aktivierte Zellen werden stärker blockiert.", "t-n");
    return F.svg(380, 228, "Zustände des spannungsabhängigen Natriumkanals", s);
  })();

  // ---------- Dosis-Wirkungs-Kurven ----------
  const FIG_DOSIS = (function () {
    const P = F.plot({ x: 40, y: 24, w: 320, h: 160, xmin: -2, xmax: 3, ymin: 0, ymax: 110,
      xticks: [[-2, "0,01"], [-1, "0,1"], [0, "1"], [1, "10"], [2, "100"], [3, "1000"]], yticks: [[0, "0"], [50, "50"], [100, "100"]],
      xlabel: "Dosis bzw. Konzentration (logarithmisch, relativ)", ylabel: "Wirkung (% von Emax)", ylabelDx: 36 });
    let s = P.svg;
    const hill = function (emax, ec50log, n) { return function (x) { return emax / (1 + Math.pow(10, (ec50log - x) * (n || 1))); }; };
    s += P.curve(hill(100, 0), "lnb", 2) + P.curve(hill(100, 1), "lnd", 1) + P.curve(hill(50, 0), "lnb", 3) + P.curve(hill(60, 0), "lnd", 5);
    s += l([[P.x(0), P.y(50)], [P.x(0), P.y(0)]], "lnd", 2) + t(P.x(0) + 3, P.y(0) - 4, "EC50", "t-n", "start", 2);
    s += t(P.x(-1.95), P.y(100) - 4, "voller Agonist", "t-n", "start", 2);
    s += t(P.x(2.95), P.y(92), ["+ kompetitiver Antagonist:", "nach rechts, Emax gleich"], "t-n", "end", 1);
    s += t(P.x(2.95), P.y(62) - 4, "+ nicht-kompetitiver Antagonist: Emax ↓", "t-n", "end", 5);
    s += t(P.x(2.95), P.y(50) + 12, "partieller Agonist", "t-n", "end", 3);
    return F.svg(380, 222, "Dosis-Wirkungs-Kurven von vollem und partiellem Agonisten mit Antagonisten", s);
  })();

  // ---------- Pharmakokinetik nach Bolus und kontextsensitive Halbwertszeit ----------
  const FIG_PK = (function () {
    let s = "";
    const P = F.plot({ x: 36, y: 26, w: 150, h: 140, xmin: 0, xmax: 120, ymin: -1.3, ymax: 2,
      xticks: [[0, "0"], [60, "60"], [120, "120"]], yticks: [[2, "100"], [1, "10"], [0, "1"], [-1, "0,1"]], ylabel: "Plasmakonz. (log)", ylabelDx: 32 });
    s += P.svg + t(P.x(60), P.y(-1.3) + 26, "Zeit nach Bolus (min)", "t-n", "middle");
    const cp = function (m) { return Math.log10(80 * Math.exp(-m / 3) + 15 * Math.exp(-m / 30) + 3 * Math.exp(-m / 300)); };
    s += P.curve(cp, "lnb", 1, 0, 120, 120);
    s += t(P.x(8), P.y(1.7), "Umverteilung", "t-n", "start", 1) + t(P.x(60), P.y(0.2) + 18, "Elimination", "t-n", "middle", 1);
    const Q = F.plot({ x: 226, y: 26, w: 140, h: 140, xmin: 0, xmax: 8, ymin: 0, ymax: 1,
      xticks: [[0, "0"], [2, "2"], [4, "4"], [6, "6"], [8, "8"]], ylabel: "kontextsens. HWZ", ylabelDx: 30 });
    s += Q.svg + t(Q.x(4), Q.y(0) + 26, "Infusionsdauer (h)", "t-n", "middle");
    s += Q.curve(function (h) { return 0.95 / (1 + Math.exp(-(h - 2.6) * 1.6)); }, "lnb", 5, 0, 8);
    s += Q.curve(function (h) { return 0.04 + 0.2 * (1 - Math.exp(-h / 3)); }, "lnb", 2, 0, 8);
    s += Q.curve(function () { return 0.02; }, "lnb", 1, 0, 8);
    s += t(Q.x(7.9), Q.y(0.9) + 14, "Fentanyl", "t-n", "end", 5) + t(Q.x(7.9), Q.y(0.24) - 4, "Propofol", "t-n", "end", 2) + t(Q.x(7.9), Q.y(0.02) - 4, "Remifentanil", "t-n", "end", 1);
    s += t(4, 214, ["Links: nach einem Bolus fällt der Spiegel zuerst durch Umverteilung, dann langsamer", "durch Elimination. Rechts: nach langer Infusion bestimmt die Elimination das Erwachen."], "t-n");
    return F.svg(380, 238, "Plasmakonzentration nach Bolus und kontextsensitive Halbwertszeit", s);
  })();

  window.__addSpezialFiguren("pharmakologie", {
    zielstrukturen: [{ svg: FIG_FAMILIEN, nach: "Die vier Rezeptor-Superfamilien", caption: "Die vier Rezeptorfamilien (schematisch): von der direkten Kanalöffnung in Millisekunden bis zur Genregulation über Stunden bis Tage." }],
    gpcr: [{ svg: FIG_GPCR, nach: "Die drei wichtigsten Signalwege", caption: "Die drei G-Protein-Signalwege mit Beispielrezeptoren: ==Gs hebt cAMP, Gi senkt cAMP, Gq setzt über IP₃ Calcium frei==. Derselbe Botenstoff (z.B. Noradrenalin) wirkt so je nach Rezeptor gegensätzlich." }],
    ionenkanaele: [{ svg: FIG_NAKANAL, nach: "Spannungsabhängige Ionenkanäle", caption: "Zustände des spannungsabhängigen Na⁺-Kanals (schematisch): Nach dem Öffnen inaktiviert der Kanal und ist erst nach der Repolarisation wieder aktivierbar. ==Lokalanästhetika und Klasse-I-Antiarrhythmika binden bevorzugt an offene und inaktivierte Kanäle.==" }],
    pharmakodynamik: [{ svg: FIG_DOSIS, nach: "Dosis-Wirkungs-Kurven", caption: "Dosis-Wirkungs-Kurven (Modellkurven): ==Ein kompetitiver Antagonist verschiebt die Kurve nach rechts (mehr Agonist überwindet ihn), ein nicht-kompetitiver senkt Emax==; ein partieller Agonist erreicht auch bei voller Besetzung nicht Emax." }],
    pharmakokinetik: [{ svg: FIG_PK, nach: "Kompartimente und Umverteilung", caption: "Links: Plasmakonzentration nach Bolus (Modellkurve, logarithmisch). Rechts: kontextsensitive Halbwertszeit (schematisch, qualitativ nach Hughes et al. 1992): ==bei Fentanyl starker Anstieg mit der Infusionsdauer, bei Remifentanil praktisch keiner==." }]
  });
})();
