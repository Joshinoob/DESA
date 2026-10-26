// Abbildungen Spezialwissen Gehirn – eigene Schemata (vereinfacht, Zahlen gerundet).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Hirndurchblutung: Blutdruck, CO2, O2 ----------
  const FIG_CBF = (function () {
    const P = F.plot({ x: 40, y: 24, w: 320, h: 180, xmin: 0, xmax: 200, ymin: 0, ymax: 110,
      xticks: [[0, "0"], [20, "20"], [40, "40"], [50, "50"], [80, "80"], [100, "100"], [150, "150"], [200, "200"]], yticks: [[0, "0"], [25, "25"], [50, "50"], [75, "75"], [100, "100"]],
      xlabel: "Druck bzw. Partialdruck (mmHg)", ylabel: "Hirndurchblutung (ml/100 g/min)", ylabelDx: 36 });
    let s = P.svg;
    const map = function (m) { if (m < 50) return 50 * Math.pow(m / 50, 1.3); if (m <= 150) return 50; return 50 + (m - 150) * 0.9; };
    const co2 = function (p) { if (p < 20) return 25; if (p > 80) return 100; return 25 + (p - 20) * 1.25; };
    const o2 = function (p) { return p >= 60 ? 50 : 50 + Math.pow((60 - p) / 30, 1.6) * 50; };
    s += P.curve(map, "lnb", 1, 0, 200, 100) + P.curve(co2, "lnb", 5, 10, 100, 90) + P.curve(o2, "lnb", 2, 30, 200, 100);
    s += t(P.x(198), P.y(50) - 6, "MAP: Plateau ca. 50–150", "t-n", "end", 1);
    s += t(P.x(198), P.y(50) + 14, "(untere Grenze oft 60–70)", "t-n", "end", 1);
    s += t(P.x(102), P.y(100) + 3, "PaCO₂: ca. 2–4 % pro mmHg", "t-n", "start", 5);
    s += t(P.x(31), P.y(106), "PaO₂: erst unter ca. 50–60", "t-n", "start", 2);
    return F.svg(380, 242, "Hirndurchblutung in Abhängigkeit von Blutdruck, PaCO2 und PaO2", s);
  })();

  // ---------- Druck-Volumen-Kurve des Schädels ----------
  const FIG_ICP = (function () {
    const P = F.plot({ x: 40, y: 24, w: 320, h: 170, xmin: 0, xmax: 100, ymin: 0, ymax: 80,
      yticks: [[0, "0"], [15, "15"], [22, "22"], [40, "40"], [80, "80"]], xlabel: "zusätzliches Volumen im Schädel", ylabel: "Hirndruck (mmHg)", ylabelDx: 36 });
    let s = r(P.x(0), P.y(15), 320, P.y(5) - P.y(15), "fl", 2, 0) + P.svg;
    const icp = function (v) { return 8 + 1.2 * Math.exp(v / 17); };
    s += P.curve(icp, "lnb", 5, 0, 74);
    s += l([[P.x(0), P.y(22)], [P.x(100), P.y(22)]], "lnd", 4) + t(P.x(99), P.y(22) - 4, "Therapieschwelle SHT ca. 22", "t-n", "end", 4);
    s += t(P.x(99), P.y(15) - 4, "normal ca. 5–15", "t-n", "end", 2);
    s += t(P.x(4), P.y(30), ["① Reserven: Liquor und", "venöses Blut weichen aus"], "t-n", "start", 0);
    s += t(P.x(47), P.y(48), ["② Knick: kleine Volumen-", "zunahme → starker Anstieg"], "t-n", "start", 0);
    s += t(P.x(72), P.y(76), "③ Perfusion ↓,", "t-n", "start", 5) + t(P.x(72), P.y(76) + 11, "Einklemmung", "t-n", "start", 5);
    s += c(P.x(52), P.y(icp(52)), 4, "fs", 6) + a(P.x(52), P.y(icp(52)), P.x(60), P.y(icp(60)) - 2, 6);
    return F.svg(380, 228, "Druck-Volumen-Kurve des Schädelinhalts", s);
  })();

  // ---------- EEG-Muster ----------
  const FIG_EEG = (function () {
    let s = "";
    const X0 = 120, W = 252;
    function trace(y, fn, k) {
      const pts = [];
      for (let i = 0; i <= 500; i++) { const tt = i / 500 * 2; pts.push([X0 + i / 500 * W, y - fn(tt)]); }
      return l(pts, "ln", k);
    }
    function noise(tt, seed) { return Math.sin(tt * 97.3 + seed) * 0.5 + Math.sin(tt * 151.7 + seed * 2) * 0.3 + Math.sin(tt * 211.1 + seed * 3) * 0.2; }
    const rows = [
      ["Wach", "Beta (+ Alpha, Augen zu)", function (tt) { return 3 * noise(tt, 1) + 2 * Math.sin(tt * 2 * Math.PI * 20); }, 1],
      ["Sedierung", "mehr Beta-Aktivität", function (tt) { return 4 * noise(tt, 2) + 4 * Math.sin(tt * 2 * Math.PI * 18); }, 1],
      ["Chirurgische Tiefe", "Delta + frontales Alpha", function (tt) { return 12 * Math.sin(tt * 2 * Math.PI * 1.5 + 0.5) + 5 * Math.sin(tt * 2 * Math.PI * 10); }, 2],
      ["Zu tief", "Burst-Suppression", function (tt) { const b = (tt > 0.25 && tt < 0.55) || (tt > 1.3 && tt < 1.55); return b ? 14 * Math.sin(tt * 2 * Math.PI * 9) * Math.sin((tt % 1) * 9) + 6 * noise(tt, 4) : 0.6 * noise(tt, 5); }, 4],
      ["Isoelektrisch", "flaches EEG", function () { return 0; }, 5]
    ];
    rows.forEach(function (rw, i) {
      const y = 34 + i * 46;
      s += t(4, y - 4, rw[0], "t-l", "start", rw[3]) + t(4, y + 9, rw[1], "t-n") + trace(y, rw[2], rw[3]);
    });
    s += l([[X0 + W - 126, 254], [X0 + W, 254]], "ln", 0) + t(X0 + W, 266, "1 s", "t-n", "end");
    s += t(4, 266, "Ketamin: schnelle Gamma-Aktivität (passt nicht in diese Reihe)", "t-n", "start", 0);
    return F.svg(380, 272, "Typische EEG-Muster vom Wachzustand bis zum isoelektrischen EEG", s);
  })();

  // ---------- Durchblutungsschwellen ----------
  const FIG_SCHWELLEN = (function () {
    let s = t(4, 14, "Hirndurchblutung (ml/100 g/min, Richtwerte)", "t-l");
    const X = function (v) { return 20 + v / 60 * 340; };
    s += r(X(0), 26, X(10) - X(0), 40, "flb", 5, 0) + r(X(10), 26, X(20) - X(10), 40, "flb", 4, 0) + r(X(20), 26, X(60) - X(20), 40, "flb", 2, 0);
    [0, 10, 20, 50].forEach(function (v) { s += l([[X(v), 66], [X(v), 72]], "ax") + t(X(v), 84, (v === 10 || v === 20 ? "ca. " : "") + v, "t-n", "middle"); });
    s += t(X(5), 50, "Zelltod", "t-n", "middle", 6) + t(X(15), 44, "Penumbra", "t-n", "middle", 6) + t(X(15), 56, "stumm", "t-n", "middle", 6);
    s += t(X(40), 50, "normal ca. 50", "t-s", "middle", 6);
    s += t(4, 104, ["Unter ca. 20: elektrische Funktion fällt aus (EEG wird flach), die Zellen leben noch.", "Unter ca. 10: Ionenpumpen versagen → Zelltod, umso schneller, je tiefer und", "länger die Durchblutung fällt. Die Penumbra lässt sich durch rasche Reperfusion", "und ausreichenden Blutdruck (Kollateralen) retten."], "t-n");
    return F.svg(380, 150, "Schwellenwerte der Hirndurchblutung für Funktionsausfall und Zelltod", s);
  })();

  window.__addSpezialFiguren("gehirn", {
    durchblutung: [{ svg: FIG_CBF, nach: "CO₂ und O₂", caption: "Hirndurchblutung (schematisch): ==Über einen weiten Blutdruckbereich konstant (Autoregulation), dagegen fast linear abhängig vom PaCO₂ (ca. 20–80 mmHg)==; Sauerstoffmangel steigert die Durchblutung erst unter ca. 50–60 mmHg. Bei chronischer Hypertonie ist das Plateau nach rechts verschoben." }],
    hirndruck: [{ svg: FIG_ICP, nach: "Druck-Volumen-Kurve", caption: "Druck-Volumen-Kurve (schematisch): ==Am Knick der Kurve steigert schon wenig zusätzliches Volumen (Husten, Pressen, Hyperkapnie) den Hirndruck stark== – obwohl der Ausgangswert noch normal sein kann." }],
    narkose: [{ svg: FIG_EEG, nach: "Typische EEG-Muster (frontal abgeleitet)", caption: "EEG-Muster vom Wachzustand bis zur Überdosierung (synthetische Schemakurven, Amplituden nicht maßstabsgetreu): ==Bei chirurgischer Narkosetiefe unter Propofol und Volatila dominieren langsame Delta-Wellen mit frontalem Alpha==; Burst-Suppression zeigt eine zu tiefe Narkose an." }],
    schutz: [{ svg: FIG_SCHWELLEN, nach: "Ischämische Kaskade", caption: "Durchblutungsschwellen (klassische Richtwerte aus Tier- und Patientenstudien, z.B. Astrup et al. 1981; die genauen Werte hängen von Dauer, Region und Narkose ab): ==Zwischen Funktionsausfall und Zelltod liegt die rettbare Penumbra.==" }]
  });
})();
