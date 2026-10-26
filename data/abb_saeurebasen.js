// Abbildungen Spezialwissen Säure-Basen – eigene Schemata bzw. berechnete Kurven.
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- pH und H+-Konzentration ----------
  const FIG_PH = (function () {
    const P = F.plot({ x: 44, y: 24, w: 310, h: 170, xmin: 6.8, xmax: 7.8, ymin: 0, ymax: 160,
      xticks: [[6.8, "6,8"], [7.0, "7,0"], [7.2, "7,2"], [7.4, "7,4"], [7.6, "7,6"], [7.8, "7,8"]], yticks: [[0, "0"], [40, "40"], [100, "100"], [160, "160"]],
      xlabel: "pH", ylabel: "H⁺ (nmol/l)", ylabelDx: 40 });
    let s = r(P.x(7.35), P.y(160), P.x(7.45) - P.x(7.35), P.y(0) - P.y(160), "fl", 2, 0) + P.svg;
    s += P.curve(function (ph) { return Math.pow(10, 9 - ph); }, "lnb", 1, 6.8, 7.8, 100);
    [[7.0, 100], [7.2, 63], [7.4, 40], [7.7, 20]].forEach(function (m) { s += c(P.x(m[0]), P.y(m[1]), 3.5, "fs", 6) + t(P.x(m[0]) + 6, P.y(m[1]) - 5, String(m[1]), "t-n", "start", 6); });
    s += t(P.x(7.4), P.y(150), "Normbereich", "t-n", "middle", 2);
    s += t(P.x(7.5), P.y(110), ["pH 7,4 → 7,0:", "H⁺ steigt auf das 2,5-Fache"], "t-n", "start", 1);
    s += t(P.x(7.45), P.y(70), ["zwischen 7,2 und 7,5 grob:", "−0,1 pH ≈ +10 nmol/l"], "t-n", "start", 0);
    return F.svg(380, 230, "Beziehung zwischen pH und Wasserstoffionenkonzentration", s);
  })();

  // Säulen für Kationen/Anionen (mmol/l → Pixel)
  function saeulen(x0, y0, sc, cols) {
    let s = "";
    cols.forEach(function (col, i) {
      let y = y0;
      const x = x0 + i * 34;
      col.forEach(function (seg) {
        const h = seg[0] * sc;
        s += r(x, y - h, 30, h, "flb", seg[1], 0);
        if (seg[2] && h >= 10) s += t(x + 15, y - h / 2 + 3, seg[2], "t-n", "middle", 6);
        y -= h;
      });
    });
    return s;
  }

  // ---------- Anionenlücke ----------
  const FIG_AG = (function () {
    let s = "";
    const sc = 1.2, y0 = 196;
    const cases = [
      ["normal", 24, 104, 12],
      ["Anionenlücken-Azidose", 10, 104, 26],
      ["hyperchlorämische Azidose", 10, 118, 12]
    ];
    cases.forEach(function (cs, i) {
      const x0 = 14 + i * 124;
      s += saeulen(x0, y0, sc, [[[140, 4, "Na⁺"]], [[cs[2], 1, "Cl⁻"], [cs[1], 2, "HCO₃⁻"], [cs[3], 5, "AG"]]]);
      s += t(x0 + 32, y0 + 14, cs[0].split(" ")[0], "t-n", "middle", i === 0 ? 2 : 5);
      if (cs[0].indexOf(" ") > -1) s += t(x0 + 32, y0 + 25, cs[0].split(" ").slice(1).join(" "), "t-n", "middle", 5);
      s += t(x0 + 66, y0 - 140 * sc + 10, "AG " + cs[3], "t-n", "start", 5);
      s += t(x0 + 66, y0 - 140 * sc + 22, "HCO₃⁻ " + cs[1], "t-n", "start", 2);
      s += t(x0 + 66, y0 - 140 * sc + 34, "Cl⁻ " + cs[2], "t-n", "start", 1);
    });
    s += t(4, 14, "Elektroneutralität: Kationen = Anionen (mmol/l, gerundet)", "t-l");
    return F.svg(380, 228, "Anionenlücke bei Normalbefund, Anionenlücken-Azidose und hyperchlorämischer Azidose", s);
  })();

  // ---------- Stewart: Gamblegramm ----------
  const FIG_GAMBLE = (function () {
    let s = t(4, 14, "Gamblegramm nach Stewart (mmol/l, gerundet)", "t-l");
    const sc = 1.15, y0 = 196;
    function fall(x0, title, cl, k) {
      const sid = 145 - cl - 1;
      let o = saeulen(x0, y0, sc, [[[140, 4, "Na⁺"], [5, 0]], [[cl, 1, "Cl⁻"], [1, 0], [sid - 16, 2, "HCO₃⁻"], [16, 3, "A⁻"]]]);
      o += l([[x0 + 64, y0 - (cl + 1) * sc], [x0 + 70, y0 - (cl + 1) * sc], [x0 + 70, y0 - 145 * sc], [x0 + 64, y0 - 145 * sc]], "ln", 6);
      o += t(x0 + 74, y0 - (cl + 1 + sid / 2) * sc + 3, "SID " + sid, "t-s", "start", 6);
      o += t(x0 + 32, y0 + 14, title, "t-n", "middle", k);
      return o;
    }
    s += fall(20, "normal", 104, 2) + fall(210, "viel NaCl 0,9 %", 115, 5);
    s += t(4, 228, ["SID = starke Ionendifferenz (v.a. Na⁺ − Cl⁻), A⁻ = schwache Säuren (Albumin, Phosphat).", "Mehr Chlorid → SID kleiner → Bicarbonat muss sinken: Azidose als Folge, nicht Ursache.", "Grau = übrige Kationen bzw. Laktat."], "t-n");
    return F.svg(380, 266, "Gamblegramm mit starker Ionendifferenz normal und nach Kochsalzinfusion", s);
  })();

  window.__addSpezialFiguren("saeurebasen", {
    grundlagen: [{ svg: FIG_PH, nach: "pH und H⁺", caption: "pH und H⁺-Konzentration (berechnet: H⁺ = 10^(9 − pH) nmol/l): ==Die logarithmische Skala verbirgt große Sprünge – ein pH von 7,0 bedeutet 2,5-mal so viel H⁺ wie 7,4==." }],
    bga: [{ svg: FIG_AG, nach: "Anionenlücke", caption: "Anionenlücke = Na⁺ − (Cl⁻ + HCO₃⁻): ==Ersetzt eine fremde Säure das Bicarbonat, wächst die Lücke; ersetzt Chlorid das Bicarbonat, bleibt sie normal (hyperchlorämische Azidose)==. Werte gerundet, ohne Kalium." }],
    stewart: [{ svg: FIG_GAMBLE, nach: "Drei unabhängige Variablen", caption: "Gamblegramm (schematisch, Werte gerundet): Nach großen Mengen NaCl 0,9 % steigt Chlorid stärker als Natrium, ==die SID schrumpft und Bicarbonat muss wegen der Elektroneutralität sinken==." }]
  });
})();
