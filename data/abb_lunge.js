// Abbildungen Spezialwissen Lunge – eigene Schemata bzw. Modellrechnungen (Formeln und Annahmen in den Bildunterschriften).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // Sauerstoffbindungskurve nach Severinghaus (1979); P50-Verschiebung durch Skalierung des Partialdrucks
  function sat(p, p50) {
    const q = p * 26.8 / (p50 || 26.8);
    return 1 / (23400 / (q * q * q + 150 * q) + 1);
  }

  // ---------- Blut-Gas-Schranke ----------
  const FIG_SCHRANKE = (function () {
    let s = "";
    function stack(y, title, layers) {
      let o = t(4, y - 8, title, "t-l");
      let x = 4;
      layers.forEach(function (L) {
        o += r(x, y, L[0], 46, L[2] ? "flb" : "s0", L[1], 0);
        if (L[3]) o += t(x + L[0] / 2, y + 27, L[3], "t-n", "middle", L[1]);
        x += L[0];
      });
      return o;
    }
    s += stack(26, "Dünne Seite: ca. 0,2–0,5 µm – hier läuft der Gasaustausch", [
      [96, 0, false, "Alveolarluft"], [8, 2, true], [16, 1, true], [10, 3, true], [16, 5, true], [92, 5, false, "Plasma"], [134, 5, true, "Erythrozyt"]
    ]);
    s += stack(118, "Dicke Seite: zusätzlich Bindegewebe (Interstitium)", [
      [96, 0, false, "Alveolarluft"], [8, 2, true], [16, 1, true], [10, 3, true], [70, 0, true, "Interstitium"], [10, 3, true], [16, 5, true], [146, 5, false, "Plasma"]
    ]);
    const lg = [[2, "Surfactant-Film"], [1, "Typ-I-Alveolarzelle"], [3, "Basalmembran"], [5, "Kapillarendothel"]];
    lg.forEach(function (e, i) { s += r(4 + (i % 2) * 190, 186 + Math.floor(i / 2) * 16, 12, 10, "flb", e[0], 1) + t(20 + (i % 2) * 190, 195 + Math.floor(i / 2) * 16, e[1], "t-s"); });
    s += t(4, 232, "Ödemflüssigkeit sammelt sich zuerst im Interstitium der dicken Seite.", "t-n", "start", 4);
    s += t(4, 244, "Typ-II-Zellen (nicht gezeigt) bilden Surfactant und ersetzen Typ-I-Zellen.", "t-n");
    return F.svg(380, 250, "Aufbau der Blut-Gas-Schranke auf der dünnen und der dicken Seite", s);
  })();

  // ---------- Druck-Volumen-Kurven Lunge, Brustkorb, gesamt ----------
  const FIG_DRUCKVOLUMEN = (function () {
    const P = F.plot({ x: 44, y: 22, w: 300, h: 190, xmin: -20, xmax: 30, ymin: 0, ymax: 1,
      xticks: [[-20, "−20"], [-10, "−10"], [0, "0"], [10, "10"], [20, "20"], [30, "30"]], xlabel: "Druck (cmH₂O)", ylabel: "Volumen", ylabelDx: 40 });
    let s = P.svg + l([[P.x(0), P.y(0)], [P.x(0), P.y(1)]], "lnd", 0);
    const pl = function (v) { return 2 + 6 * v + 20 * Math.pow(v, 4); };
    const pcw = function (v) { return 30 * (v - 0.6); };
    function curve(fn, k, cls) {
      const pts = []; for (let i = 0; i <= 100; i++) { const v = i / 100; if (fn(v) <= 30) pts.push([P.x(fn(v)), P.y(v)]); }
      return l(pts, cls || "lnb", k);
    }
    s += curve(pl, 1) + curve(pcw, 4) + curve(function (v) { return pl(v) + pcw(v); }, 2);
    let frc = 0; for (let i = 0; i <= 1000; i++) { const v = i / 1000; if (pl(v) + pcw(v) >= 0) { frc = v; break; } }
    s += l([[P.x(-20), P.y(frc)], [P.x(30), P.y(frc)]], "lnd", 2) + c(P.x(0), P.y(frc), 4, "fs", 2);
    s += t(P.x(-19), P.y(frc) - 5, "FRC", "t-s", "start", 2);
    s += t(P.x(29), P.y(0.97), "Lunge", "t-s", "end", 1) + t(P.x(29), P.y(0.8), "gesamt", "t-s", "end", 2) + t(P.x(11), P.y(0.97), "Brustkorb", "t-s", "end", 4);
    s += t(4, P.y(1) + 4, "TLC", "t-n") + t(4, P.y(0) + 3, "RV", "t-n");
    s += t(P.x(14), P.y(0.22), ["Brustkorb zieht nach außen,", "Lunge nach innen"], "t-n", "start", 0);
    return F.svg(380, 248, "Druck-Volumen-Kurven von Lunge, Brustkorb und gesamtem System", s);
  })();

  // ---------- Closing Capacity und FRC ----------
  const FIG_CLOSING = (function () {
    const P = F.plot({ x: 40, y: 22, w: 310, h: 160, xmin: 20, xmax: 80, ymin: 1, ymax: 3.6,
      xticks: [[20, "20"], [40, "40"], [45, "45"], [60, "60"], [65, "65"], [80, "80"]], yticks: [[1, "1"], [2, "2"], [3, "3"]], xlabel: "Alter (Jahre)", ylabel: "Volumen (l)", ylabelDx: 36 });
    let s = P.svg;
    const cc = function (age) { return 2.3 + (age - 45) * 0.035; };
    s += P.curve(function () { return 3.0; }, "lnb", 2) + P.curve(function () { return 2.3; }, "lnb", 1) + P.curve(function () { return 1.85; }, "lnd", 4);
    s += P.curve(cc, "lnb", 5);
    s += c(P.x(45), P.y(2.3), 4, "fs", 6) + c(P.x(65), P.y(3.0), 4, "fs", 6);
    s += t(P.x(21), P.y(3.0) - 5, "FRC im Stehen", "t-n", "start", 2) + t(P.x(21), P.y(2.3) - 5, "FRC im Liegen", "t-n", "start", 1);
    s += t(P.x(21), P.y(1.85) + 12, "FRC in Narkose (liegend)", "t-n", "start", 4);
    s += t(P.x(79), P.y(cc(79)) + 14, "Closing Capacity", "t-s", "end", 5);
    return F.svg(380, 218, "Closing Capacity im Vergleich zur FRC in Abhängigkeit vom Alter", s);
  })();

  // ---------- Spirogramm ----------
  const FIG_SPIRO = (function () {
    const Y = function (v) { return 210 - v / 6.4 * 190; };
    let s = "";
    [0, 2, 4, 6].forEach(function (v) { s += l([[30, Y(v)], [226, Y(v)]], "grid") + t(26, Y(v) + 3, v + " l", "t-n", "end"); });
    const pts = [];
    let x = 30;
    function breath(lo, hi, w) { for (let i = 0; i <= 20; i++) pts.push([x + i * w / 20, Y(lo + (hi - lo) * (1 - Math.cos(i / 20 * 2 * Math.PI)) / 2)]); x += w; }
    breath(2.6, 3.1, 24); breath(2.6, 3.1, 24);
    for (let i = 0; i <= 20; i++) pts.push([x + i * 1.5, Y(2.6 + 3.4 * (1 - Math.cos(i / 20 * Math.PI)) / 2)]); x += 30;
    for (let i = 0; i <= 20; i++) pts.push([x + i * 2, Y(6.0 - 4.6 * (1 - Math.cos(i / 20 * Math.PI)) / 2)]); x += 40;
    for (let i = 0; i <= 20; i++) pts.push([x + i * 1.5, Y(1.4 + 1.2 * (1 - Math.cos(i / 20 * Math.PI)) / 2)]); x += 30;
    breath(2.6, 3.1, 24); breath(2.6, 3.1, 24);
    s += F.sm(pts, "lnb", 1);
    function br(x0, v1, v2, label, k) {
      return l([[x0 - 3, Y(v1)], [x0, Y(v1)], [x0, Y(v2)], [x0 - 3, Y(v2)]], "ln", k) + t(x0 + 4, (Y(v1) + Y(v2)) / 2 + 3, label, "t-n", "start", k);
    }
    s += l([[30, Y(1.4)], [226, Y(1.4)]], "lnd", 0) + l([[30, Y(6.0)], [226, Y(6.0)]], "lnd", 0) + l([[30, Y(2.6)], [226, Y(2.6)]], "lnd", 0);
    s += br(234, 3.1, 6.0, "IRV ca. 3 l", 1) + br(234, 2.6, 3.1, "", 2) + t(238, Y(2.85) + 3, "Atemzug 0,5 l", "t-n", "start", 2);
    s += br(234, 1.4, 2.6, "ERV ca. 1–1,2 l", 4) + br(234, 0, 1.4, "RV ca. 1–1,5 l", 5);
    s += br(322, 1.4, 6.0, "", 1) + t(326, Y(4.2), "VK", "t-n", "start", 1) + br(344, 0, 2.6, "", 2) + t(348, Y(1.3) + 3, "FRC", "t-n", "start", 2);
    s += br(368, 0, 6.0, "", 6) + t(362, Y(3.2), "TLC", "t-n", "end", 6);
    s += t(4, 232, "VK = Vitalkapazität (4–5 l), FRC = funktionelle Residualkapazität (2,5–3 l),", "t-n");
    s += t(4, 244, "TLC = totale Lungenkapazität (ca. 6 l), IRV/ERV = inspir./exspir. Reservevolumen.", "t-n");
    return F.svg(380, 250, "Lungenvolumina und Kapazitäten im Spirogramm", s);
  })();

  // ---------- FEV1-Kurven ----------
  const FIG_FEV1 = (function () {
    const P = F.plot({ x: 40, y: 22, w: 300, h: 160, xmin: 0, xmax: 6, ymin: 0, ymax: 5,
      xticks: [[0, "0"], [1, "1"], [2, "2"], [4, "4"], [6, "6"]], yticks: [[0, "0"], [1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"]], xlabel: "Zeit (s)", ylabel: "ausgeatmetes Volumen (l)", ylabelDx: 36 });
    let s = P.svg + l([[P.x(1), P.y(0)], [P.x(1), P.y(5)]], "lnd", 0) + t(P.x(1) + 3, P.y(5) + 10, "1 s", "t-n");
    const cur = function (fvc, tau) { return function (x) { return fvc * (1 - Math.exp(-x / tau)); }; };
    s += P.curve(cur(4.6, 0.62), "lnb", 2) + P.curve(cur(3.8, 1.44), "lnb", 5) + P.curve(cur(2.8, 0.47), "lnb", 1);
    s += t(P.x(5.9), P.y(4.6) - 6, "normal: FEV1/FVC ca. 0,8", "t-n", "end", 2);
    s += t(P.x(5.9), P.y(3.6) - 6, "Obstruktion: FEV1/FVC < 0,7", "t-n", "end", 5);
    s += t(P.x(5.9), P.y(2.8) - 6, "Restriktion: alles kleiner, Quotient normal", "t-n", "end", 1);
    return F.svg(380, 218, "Forcierte Ausatmung bei Normalbefund, Obstruktion und Restriktion", s);
  })();

  // ---------- Alveoläre Ventilation und PaCO2 ----------
  const FIG_VENT = (function () {
    const P = F.plot({ x: 40, y: 22, w: 310, h: 170, xmin: 0, xmax: 10, ymin: 0, ymax: 120,
      xticks: [[0, "0"], [2, "2"], [4, "4"], [6, "6"], [8, "8"], [10, "10"]], yticks: [[0, "0"], [40, "40"], [80, "80"], [120, "120"]], xlabel: "alveoläre Ventilation (l/min)", ylabel: "PaCO₂ (mmHg)", ylabelDx: 36 });
    let s = P.svg;
    s += P.curve(function (v) { return 0.863 * 200 / v; }, "lnb", 1, 1.44, 10, 80) + P.curve(function (v) { return 0.863 * 300 / v; }, "lnd", 5, 2.16, 10, 80);
    s += c(P.x(4.3), P.y(40), 4, "fs", 6) + c(P.x(2.15), P.y(80), 4, "fs", 6);
    s += l([[P.x(4.3), P.y(40)], [P.x(4.3), P.y(0)]], "lnd", 0) + l([[P.x(2.15), P.y(80)], [P.x(2.15), P.y(0)]], "lnd", 0);
    s += t(P.x(4.5), P.y(40) - 6, "Ruhe: ca. 4,3 l/min → 40 mmHg", "t-n", "start", 6);
    s += t(P.x(2.4), P.y(80) - 4, "halbe Ventilation → 80 mmHg", "t-n", "start", 6);
    s += t(P.x(9.8), P.y(29) - 8, "CO₂-Produktion 300 ml/min (z.B. Fieber)", "t-n", "end", 5);
    s += t(P.x(9.8), P.y(17) + 14, "200 ml/min (Ruhe)", "t-n", "end", 1);
    return F.svg(380, 226, "Hyperbolische Beziehung zwischen alveolärer Ventilation und PaCO2", s);
  })();

  // ---------- Lungengefäßwiderstand und Lungenvolumen ----------
  const FIG_PVR = (function () {
    const P = F.plot({ x: 40, y: 22, w: 310, h: 150, xmin: 0, xmax: 1, ymin: 0, ymax: 2.2, xlabel: "Lungenvolumen", ylabel: "Lungengefäßwiderstand", ylabelDx: 36 });
    let s = P.svg;
    const alv = function (v) { return 0.25 + 1.6 * Math.pow(v, 3); }, ext = function (v) { return 0.25 + 1.6 * Math.pow(1 - v, 3); };
    s += P.curve(alv, "lnd", 1) + P.curve(ext, "lnd", 4) + P.curve(function (v) { return alv(v) + ext(v); }, "lnb", 2);
    [[0, "RV"], [0.45, "FRC"], [1, "TLC"]].forEach(function (m) { s += l([[P.x(m[0]), P.y(0)], [P.x(m[0]), P.y(0) + 4]], "ax") + t(P.x(m[0]), P.y(0) + 14, m[1], "t-n", "middle"); });
    s += t(P.x(0.5), P.y(0.6) - 6, "gesamt: Minimum bei FRC", "t-s", "middle", 2);
    s += t(P.x(0.99), P.y(1.85), ["Kapillaren in den Alveolar-", "wänden gedrückt (Überblähung)"], "t-n", "end", 1);
    s += t(P.x(0.01), P.y(2.05), ["größere Gefäße eng,", "Atelektasen → HPV"], "t-n", "start", 4);
    return F.svg(380, 206, "Lungengefäßwiderstand in Abhängigkeit vom Lungenvolumen", s);
  })();

  // ---------- West-Zonen ----------
  const FIG_WEST = (function () {
    let s = "";
    const umriss = "M70 20 Q30 24 26 90 L22 210 Q24 236 70 236 L130 236 Q150 236 150 214 L150 50 Q150 20 110 20 Z";
    s += '<clipPath id="sw-west-lunge"><path d="' + umriss + '"/></clipPath><g clip-path="url(#sw-west-lunge)">' +
      r(22, 20, 130, 50, "fl", 4, 0) + r(22, 70, 130, 70, "fl", 3, 0) + r(22, 140, 130, 96, "fl", 2, 0) + "</g>";
    s += F.p(umriss, "ln", 0);
    s += t(86, 50, "Zone 1", "t-l", "middle", 4) + t(86, 110, "Zone 2", "t-l", "middle", 3) + t(86, 194, "Zone 3", "t-l", "middle", 2);
    s += t(166, 40, ["PA > Pa > Pv", "keine Durchblutung (Totraum) –", "normal kaum, bei Volumenmangel,", "hohem PEEP"], "t-n", "start", 4);
    s += t(166, 100, ["Pa > PA > Pv", "Fluss nach arteriell − alveolär", "('Wasserfall')"], "t-n", "start", 3);
    s += t(166, 180, ["Pa > Pv > PA", "kontinuierlicher Fluss"], "t-n", "start", 2);
    s += a(8, 230, 8, 30, 0) + t(4, 250, "Schwerkraft: Gefäßdruck nimmt nach unten zu", "t-n");
    s += t(166, 228, ["PA = Alveolardruck, Pa = Pulmonal-", "arteriendruck, Pv = Venendruck"], "t-n", "start", 0);
    return F.svg(380, 256, "West-Zonen der Lungendurchblutung im Stehen", s);
  })();

  // ---------- Ventilation, Perfusion und V/Q von der Basis zur Spitze ----------
  const FIG_VQ = (function () {
    const P = F.plot({ x: 40, y: 24, w: 300, h: 160, xmin: 0, xmax: 1, ymin: 0, ymax: 1.5, yticks: [[0, "0"], [0.5, "0,5"], [1, "1"], [1.5, "1,5"]],
      ylabel: "l/min pro Lungeneinheit (relativ)", ylabelDx: 36 });
    let s = P.svg;
    const V = function (x) { return 0.82 - 0.57 * x; }, Q = function (x) { return 0.07 + 1.23 * Math.pow(1 - x, 1.8); };
    s += P.curve(V, "lnb", 1) + P.curve(Q, "lnb", 5);
    s += t(P.x(0.02), P.y(1.3) - 6, "Durchblutung", "t-s", "start", 5) + t(P.x(0.02), P.y(0.82) - 8, "Belüftung", "t-s", "start", 1);
    s += t(P.x(0), P.y(0) + 14, "Basis (unten)", "t-n", "start") + t(P.x(1), P.y(0) + 14, "Spitze (oben)", "t-n", "end");
    s += t(P.x(0.02), P.y(0) + 30, "V/Q ca. 0,6", "t-s", "start", 6) + t(P.x(1), P.y(0) + 30, "V/Q ca. 3", "t-s", "end", 6) + t(P.x(0.5), P.y(0) + 30, "gesamt ca. 0,8", "t-s", "middle", 6);
    return F.svg(380, 222, "Belüftung, Durchblutung und V/Q-Verhältnis von der Lungenbasis zur Spitze", s);
  })();

  // ---------- Iso-Shunt-Diagramm (Modellrechnung) ----------
  const FIG_ISOSHUNT = (function () {
    const HB = 14, AVD = 5;
    function content(p) { return 1.34 * HB * sat(p) + 0.003 * p; }
    function pFromContent(cc) { let lo = 0, hi = 700; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (content(m) < cc) lo = m; else hi = m; } return (lo + hi) / 2; }
    function pao2(fio2, shunt) { const pA = fio2 * 713 - 50; const cc = content(pA) - AVD * shunt / (1 - shunt); return pFromContent(cc); }
    const P = F.plot({ x: 44, y: 22, w: 300, h: 180, xmin: 0.2, xmax: 1, ymin: 0, ymax: 700,
      xticks: [[0.21, "0,21"], [0.4, "0,4"], [0.6, "0,6"], [0.8, "0,8"], [1, "1,0"]], yticks: [[0, "0"], [100, "100"], [200, "200"], [400, "400"], [600, "600"], [700, ""]], xlabel: "inspiratorische Sauerstofffraktion (FiO₂)", ylabel: "PaO₂ (mmHg)", ylabelDx: 40 });
    let s = P.svg;
    [[0, 2], [0.1, 1], [0.2, 3], [0.3, 4], [0.5, 5]].forEach(function (e) {
      s += P.curve(function (f) { return pao2(f, e[0]); }, "lnb", e[1], 0.21, 1, 60);
      const yEnd = pao2(1, e[0]);
      s += t(P.x(1) + 4, P.y(yEnd) + 3, Math.round(e[0] * 100) + " %", "t-n", "start", e[1]);
    });
    s += t(P.x(0.23), P.y(640), ["Zahlen rechts = Shuntanteil", "ab ca. 30 % hilft mehr O₂ kaum"], "t-n", "start", 0);
    return F.svg(380, 236, "Iso-Shunt-Diagramm: PaO2 in Abhängigkeit von FiO2 und Shuntanteil", s);
  })();

  // ---------- Sauerstoffbindungskurve ----------
  const FIG_ODC = (function () {
    const P = F.plot({ x: 40, y: 22, w: 310, h: 180, xmin: 0, xmax: 110, ymin: 0, ymax: 100,
      xticks: [[0, "0"], [19, "19"], [27, "27"], [40, "40"], [60, "60"], [100, "100"]], yticks: [[0, "0"], [50, "50"], [75, "75"], [90, "90"], [100, "100"]], xlabel: "Sauerstoffpartialdruck (mmHg)", ylabel: "Sättigung (%)", ylabelDx: 36 });
    let s = P.svg;
    s += P.curve(function (p) { return 100 * sat(p, 19); }, "lnd", 2, 0.5, 110, 110);
    s += P.curve(function (p) { return 100 * sat(p, 34); }, "lnd", 5, 0.5, 110, 110);
    s += P.curve(function (p) { return 100 * sat(p); }, "lnb", 1, 0.5, 110, 110);
    [[27, 50], [40, 75], [60, 90], [100, 97.5]].forEach(function (m) { s += c(P.x(m[0]), P.y(100 * sat(m[0])), 3.5, "fs", 6); });
    s += t(P.x(29), P.y(48), "P50 ca. 27", "t-n", "start", 6) + t(P.x(42), P.y(73), "gemischtvenös", "t-n", "start", 6);
    s += t(P.x(62), P.y(87), "60 → 90 %", "t-n", "start", 6) + t(P.x(100), P.y(97.5) + 13, "arteriell", "t-n", "middle", 6);
    s += t(P.x(56), P.y(16), ["links (grün): fester gebunden –", "Alkalose, Kälte, 2,3-BPG ↓, HbF"], "t-n", "start", 2);
    s += t(P.x(56), P.y(36), ["rechts (rot): leichtere Abgabe –", "Säure, CO₂ ↑, Wärme, 2,3-BPG ↑"], "t-n", "start", 5);
    return F.svg(380, 236, "Sauerstoffbindungskurve mit Links- und Rechtsverschiebung", s);
  })();

  // ---------- Apnoe nach Präoxygenierung ----------
  const FIG_APNOE = (function () {
    const P = F.plot({ x: 40, y: 22, w: 310, h: 160, xmin: 0, xmax: 11, ymin: 40, ymax: 100,
      xticks: [[0, "0"], [2, "2"], [4, "4"], [6, "6"], [8, "8"], [10, "10"]], yticks: [[40, "40"], [60, "60"], [80, "80"], [90, "90"], [100, "100"]], xlabel: "Apnoezeit nach Präoxygenierung (min)", ylabel: "SaO₂ (%)", ylabelDx: 36 });
    let s = P.svg;
    function curve(t90) { return function (m) { const x = m / t90; return x <= 0.55 ? 99.5 - x * 1.5 : 99.5 - 0.8 - 9 * Math.pow((x - 0.55) / 0.45, 2.2); }; }
    s += P.curve(curve(8), "lnb", 1, 0, 10.6, 100) + P.curve(curve(3), "lnd", 5, 0, 4.9, 100);
    s += l([[P.x(0), P.y(90)], [P.x(11), P.y(90)]], "lnd", 0);
    s += t(P.x(7.6), P.y(90) - 6, "gesunder Erwachsener: 90 % nach ca. 8 min", "t-n", "end", 1);
    s += t(P.x(5), P.y(58), ["z.B. Adipositas, Schwangerschaft,", "Kinder, Sepsis: viel früher (schematisch)"], "t-n", "start", 5);
    s += t(P.x(0.2), P.y(76), ["flacher Teil:", "Sättigung bleibt", "lange stabil"], "t-n", "start", 0);
    return F.svg(380, 216, "Abfall der Sauerstoffsättigung in der Apnoe nach Präoxygenierung", s);
  })();

  // ---------- Atemantwort auf CO2 und Sauerstoffmangel ----------
  const FIG_ATEMANTWORT = (function () {
    const P = F.plot({ x: 40, y: 22, w: 150, h: 150, xmin: 30, xmax: 60, ymin: 0, ymax: 40,
      xticks: [[30, "30"], [40, "40"], [50, "50"], [60, "60"]], yticks: [[0, "0"], [20, "20"], [40, "40"]], ylabel: "Atemminutenvolumen (l/min)", ylabelDx: 36 });
    let s = P.svg + t(P.x(45), P.y(0) + 26, "PaCO₂ (mmHg)", "t-s", "middle");
    s += P.curve(function (p) { return Math.max(0, 2 * (p - 37)); }, "lnb", 1, 30, 57);
    s += P.curve(function (p) { return Math.max(0, 1 * (p - 41)); }, "lnb", 5, 30, 60);
    s += c(P.x(37), P.y(0), 3.5, "fs", 1) + t(P.x(36), P.y(0) - 6, "Apnoeschwelle", "t-n", "end", 1);
    s += t(P.x(31), P.y(36), ["normal: ca.", "2 l/min pro mmHg"], "t-n", "start", 1) + t(P.x(59), P.y(9), "Opioid", "t-n", "end", 5);
    const Q = F.plot({ x: 226, y: 22, w: 140, h: 150, xmin: 30, xmax: 110, ymin: 0, ymax: 40,
      xticks: [[40, "40"], [60, "60"], [100, "100"]], yticks: [[0, ""], [20, ""], [40, ""]] });
    s += Q.svg + t(Q.x(70), Q.y(0) + 26, "PaO₂ (mmHg)", "t-s", "middle");
    s += Q.curve(function (p) { return 6 + 40000 / Math.pow(p - 20, 3); }, "lnb", 4, 36, 110, 80);
    s += t(Q.x(108), Q.y(30), ["steiler Anstieg erst", "unter ca. 60 mmHg"], "t-n", "end", 4);
    return F.svg(380, 210, "Atemantwort auf CO2 (mit Opioidwirkung) und auf Sauerstoffmangel", s);
  })();

  // ---------- Luftdruck und Sauerstoff in der Höhe ----------
  const FIG_HOEHE = (function () {
    const pb = function (h) { return 760 * Math.pow(1 - 2.25577e-5 * h, 5.25588); };
    const P = F.plot({ x: 44, y: 22, w: 300, h: 170, xmin: 0, xmax: 9000, ymin: 0, ymax: 800,
      xticks: [[0, "0"], [2400, "2400"], [5500, "5500"], [8848, "8848"]], yticks: [[0, "0"], [200, "200"], [400, "400"], [600, "600"], [800, "800"]], xlabel: "Höhe (m)", ylabel: "mmHg", ylabelDx: 40 });
    let s = P.svg;
    s += P.curve(pb, "lnb", 1, 0, 9000) + P.curve(function (h) { return 0.21 * (pb(h) - 47); }, "lnb", 5, 0, 9000);
    [[0, "760"], [2400, ""], [5500, "ca. 380"], [8848, "ca. 240"]].forEach(function (m) { s += c(P.x(m[0]), P.y(pb(m[0])), 3, "fs", 1); if (m[1]) s += t(P.x(m[0]) + 5, P.y(pb(m[0])) - 5, m[1], "t-n", "start", 1); });
    [[0, "ca. 150"], [3000, "ca. 100"], [8848, "ca. 40"]].forEach(function (m) { const v = 0.21 * (pb(m[0]) - 47); s += c(P.x(m[0]), P.y(v), 3, "fs", 5) + t(P.x(m[0]) + (m[0] > 8000 ? -4 : 5), P.y(v) - 6, m[1], "t-n", m[0] > 8000 ? "end" : "start", 5); });
    s += t(P.x(4000), P.y(560), "Luftdruck (halbiert bei ca. 5500 m)", "t-s", "start", 1);
    s += t(P.x(3500), P.y(200), "eingeatmeter O₂-Partialdruck", "t-s", "start", 5);
    s += t(P.x(2400) + 4, P.y(700), "Flugzeugkabine max. ca. 2400 m", "t-n", "start", 0) + l([[P.x(2400), P.y(0)], [P.x(2400), P.y(760)]], "lnd", 0);
    return F.svg(380, 228, "Luftdruck und inspiratorischer Sauerstoffpartialdruck in Abhängigkeit von der Höhe", s);
  })();

  window.__addSpezialFiguren("lunge", {
    struktur: [{ svg: FIG_SCHRANKE, nach: "Die Blut-Gas-Schranke", caption: "Blut-Gas-Schranke (nicht maßstabsgetreu): ==Auf der dünnen Seite liegen nur Typ-I-Zelle, gemeinsame Basalmembran und Endothel zwischen Luft und Blut==; auf der dicken Seite liegt Bindegewebe dazwischen – dort sammelt sich Ödem zuerst." }],
    mechanik: [
      { svg: FIG_DRUCKVOLUMEN, nach: "Dehnbarkeit (Compliance)", caption: "Druck-Volumen-Kurven (schematisch, Volumen vom Residualvolumen RV bis zur totalen Lungenkapazität TLC): ==Bei der FRC heben sich der Zug der Lunge nach innen und der des Brustkorbs nach außen auf== – der Gesamtdruck ist null." },
      { svg: FIG_CLOSING, nach: "Atemarbeit und Closing Capacity", caption: "Closing Capacity und FRC (schematisch, Volumina gerundet): Die Closing Capacity steigt mit dem Alter und ==übersteigt die FRC im Liegen etwa ab 45, im Stehen etwa ab 65 Jahren==. In Narkose sinkt die FRC weiter – dann schließen sich kleine Atemwege schon bei Jüngeren." }
    ],
    lungenfunktion: [
      { svg: FIG_SPIRO, nach: "Volumina und Kapazitäten (junger Erwachsener, Richtwerte)", caption: "Spirogramm mit Richtwerten eines jungen Erwachsenen: ==Residualvolumen, FRC und TLC enthalten Luft, die nie ausgeatmet wird== – sie lassen sich mit dem Spirometer nicht messen." },
      { svg: FIG_FEV1, nach: "Spirometrie: FEV1 und FVC", caption: "Forcierte Ausatmung (Modellkurven): ==Bei Obstruktion kommt die Luft in der ersten Sekunde langsam heraus – FEV1/FVC fällt==; bei Restriktion sind alle Volumina kleiner, der Quotient bleibt normal." }
    ],
    ventilation: [{ svg: FIG_VENT, nach: "Die alveoläre Ventilationsgleichung", caption: "PaCO₂ = 0,863 × CO₂-Produktion / alveoläre Ventilation: ==Halbe Ventilation verdoppelt das PaCO₂==; bei höherer CO₂-Produktion (z.B. Fieber, maligne Hyperthermie) braucht es mehr Ventilation für denselben Wert." }],
    kreislauf: [
      { svg: FIG_WEST, nach: "West-Zonen", caption: "West-Zonen im Stehen (schematisch): Mit jedem Zentimeter nach unten steigt der Gefäßdruck. ==Oben kann der Alveolardruck die Kapillaren zudrücken (Zone 1), unten fließt das Blut kontinuierlich (Zone 3).== Die Grenzen verschieben sich mit Volumenstatus, PEEP und Lagerung." },
      { svg: FIG_PVR, nach: "Lungengefäßwiderstand und Lungenvolumen", caption: "Lungengefäßwiderstand und Lungenvolumen (schematisch): Die Gefäße in den Alveolarwänden (blau) werden mit steigendem Volumen zusammengedrückt, die größeren Gefäße außerhalb (orange) werden aufgezogen – ==der Gesamtwiderstand ist bei FRC am niedrigsten==." }
    ],
    vq: [
      { svg: FIG_VQ, nach: "Das Verhältnis von Belüftung zu Durchblutung (V/Q)", caption: "Im Stehen nehmen Belüftung und Durchblutung von oben nach unten zu, die Durchblutung aber steiler (schematisch nach West): ==V/Q ist oben hoch, unten niedrig==." },
      { svg: FIG_ISOSHUNT, nach: "Shunt", caption: "Iso-Shunt-Diagramm (Modellrechnung: Hb 14 g/dl, arteriovenöse Sauerstoffgehaltsdifferenz 5 ml/dl, PaCO₂ 40 mmHg, Meereshöhe; Bindungskurve nach Severinghaus): ==Je größer der Shunt, desto weniger hebt mehr Sauerstoff den PaO₂==. Absolute Werte hängen von Hb und Herzzeitvolumen ab." }
    ],
    transport: [
      { svg: FIG_ODC, nach: "Hämoglobin und Sauerstoffbindungskurve", caption: "Sauerstoffbindungskurve (berechnet nach Severinghaus 1979) mit den Merkpunkten aus der Tabelle. Gestrichelt: Links- und Rechtsverschiebung (P50 ca. 19 bzw. ca. 34 mmHg, Beispielwerte). ==Unterhalb von ca. 60 mmHg liegt der steile Teil: kleine Druckänderungen – große Sättigungsänderungen.==" },
      { svg: FIG_APNOE, nach: "Sauerstoffvorrat und Atemstillstand", caption: "Sättigung in der Apnoe nach Präoxygenierung (schematisch; 8 min beim gesunden Erwachsenen nach Benumof et al. 1997): ==Erst bleibt die Sättigung im flachen Teil der Bindungskurve lange stabil, unter ca. 90 % stürzt sie ab.==" }
    ],
    regulation: [{ svg: FIG_ATEMANTWORT, nach: "Medikamente", caption: "Links: CO₂-Antwortkurve (schematisch; ca. 2 l/min pro mmHg, große individuelle Unterschiede). ==Opioide verschieben sie nach rechts und machen sie flacher.== Rechts: Die Antwort auf Sauerstoffmangel steigt erst unter ca. 60 mmHg steil an." }],
    umwelt: [{ svg: FIG_HOEHE, nach: "Große Höhe", caption: "Luftdruck nach der internationalen Standardatmosphäre und eingeatmeter Sauerstoffpartialdruck 0,21 × (Luftdruck − 47 mmHg). Auf dem Mount Everest wird wegen der Breitenlage ein etwas höherer Luftdruck gemessen (ca. 250 mmHg) als hier berechnet." }]
  });
  window.__addSpezialFiguren("herz", {
    rv: [{ svg: FIG_PVR, nach: "Lungengefäßwiderstand und Lungenvolumen", caption: "Lungengefäßwiderstand und Lungenvolumen (schematisch): ==Minimum bei FRC== – Atelektasen und Überblähung (hoher PEEP) belasten beide die rechte Kammer." }]
  });
  window.__addSpezialFiguren("blut", {
    sauerstofftransport: [{ svg: FIG_ODC, nach: "Sauerstoffbindungskurve", caption: "Sauerstoffbindungskurve (berechnet nach Severinghaus 1979) mit Links- und Rechtsverschiebung (Beispielwerte). Details im Kapitel Lunge 'Sauerstoff- und CO₂-Transport'." }]
  });
})();
