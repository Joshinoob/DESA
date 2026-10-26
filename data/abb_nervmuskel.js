// Abbildungen Spezialwissen Nerv & Muskel – eigene Schemata (vereinfacht, Zahlen gerundet).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Aktionspotenzial mit Leitfähigkeiten ----------
  const FIG_AP = (function () {
    const P = F.plot({ x: 44, y: 24, w: 310, h: 150, xmin: 0, xmax: 5, ymin: -90, ymax: 40,
      xticks: [[0, "0"], [1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"]], yticks: [[-90, "−90"], [-70, "−70"], [-55, "−55"], [0, "0"], [30, "+30"]],
      xlabel: "Zeit (ms)", ylabel: "Membranpotenzial (mV)", ylabelDx: 40 });
    let s = P.svg + l([[P.x(0), P.y(-55)], [P.x(5), P.y(-55)]], "lnd", 3) + t(P.x(4.95), P.y(-55) - 4, "Schwelle", "t-n", "end", 3);
    const vm = [[0, -70], [0.6, -70], [0.8, -62], [0.95, -55], [1.1, -20], [1.3, 28], [1.42, 30], [1.6, 5], [1.9, -40], [2.2, -72], [2.5, -80], [3.2, -76], [4, -71], [5, -70]];
    s += F.sm(vm.map(function (p) { return [P.x(p[0]), P.y(p[1])]; }), "lnb", 6);
    // Leitfähigkeiten (relativ, eigene Skala unten)
    const G = function (g) { return 252 - g * 50; };
    s += t(4, 206, "Leitfähigkeit (relativ)", "t-n");
    s += l([[P.x(0), G(0)], [P.x(5), G(0)]], "ax");
    const gna = [[0, 0], [0.8, 0], [0.95, 0.03], [1.05, 0.2], [1.15, 0.6], [1.3, 1], [1.42, 0.85], [1.55, 0.45], [1.7, 0.15], [1.85, 0.04], [2.05, 0], [3, 0], [5, 0]];
    const gk = [[0, 0.05], [1.2, 0.06], [1.5, 0.3], [1.9, 0.7], [2.3, 0.6], [2.8, 0.3], [3.6, 0.1], [5, 0.05]];
    s += F.sm(gna.map(function (p) { return [P.x(p[0]), G(p[1])]; }), "lnb", 4) + F.sm(gk.map(function (p) { return [P.x(p[0]), G(p[1])]; }), "lnb", 1);
    s += t(P.x(1.4), G(1) - 4, "Na⁺: öffnet schnell, inaktiviert", "t-n", "start", 4) + t(P.x(2.3), G(0.6) - 4, "K⁺: öffnet langsamer", "t-n", "start", 1);
    s += t(P.x(1.1), P.y(30) + 4, "Depolarisation", "t-n", "end", 6) + t(P.x(1.75), P.y(0), "Repolarisation", "t-n", "start", 6);
    s += t(P.x(2.6), P.y(-80) + 12, "Nachhyperpolarisation", "t-n", "start", 6);
    return F.svg(380, 262, "Aktionspotenzial der Nervenzelle mit Natrium- und Kaliumleitfähigkeit", s);
  })();

  // ---------- Lokalanästhetika: Weg zum Natriumkanal ----------
  const FIG_LA = (function () {
    let s = "";
    s += t(4, 16, "außen (Gewebe, pH ca. 7,4)", "t-s") + t(4, 172, "innen (Axoplasma)", "t-s");
    s += r(0, 70, 380, 50, "fl", 3, 0) + t(250, 100, "Nervenmembran", "t-n", "end", 3);
    s += c(70, 44, 14, "s2") + t(70, 48, "B", "t-l", "middle", 2) + c(150, 44, 14, "s5") + t(150, 48, "BH⁺", "t-n", "middle", 5);
    s += a(86, 40, 134, 40, 0) + a(134, 50, 86, 50, 0);
    s += c(70, 146, 14, "s2") + t(70, 150, "B", "t-l", "middle", 2) + c(150, 146, 14, "s5") + t(150, 150, "BH⁺", "t-n", "middle", 5);
    s += a(86, 142, 134, 142, 0) + a(134, 152, 86, 152, 0);
    s += a(70, 60, 70, 130, 2, "lnb") + t(78, 98, "nur B passiert", "t-n", "start", 2);
    // Kanal
    s += r(270, 66, 20, 58, "flb", 4, 3) + r(310, 66, 20, 58, "flb", 4, 3) + t(300, 60, "Na⁺-Kanal", "t-n", "middle", 4);
    s += F.ac(166, 146, 240, 150, 296, 122, 5) + t(240, 166, "bindet von innen", "t-n", "middle", 5);
    s += l([[294, 22], [306, 34]], "lnb", 5) + l([[306, 22], [294, 34]], "lnb", 5) + t(312, 32, "Na⁺", "t-s", "start", 4);
    s += t(4, 194, ["Ungeladene Base (B) durchdringt die Membran, innen wird sie wieder protoniert;", "die geladene Form (BH⁺) blockiert den Kanal – bevorzugt offen/inaktiviert", "(Use-Dependence). Je näher der pKa an 7,4, desto mehr B → schnellerer Wirkeintritt.", "Saures Gewebe (Entzündung): mehr BH⁺ außen → schlechtere Wirkung."], "t-n");
    return F.svg(380, 244, "Weg des Lokalanästhetikums durch die Nervenmembran zum Natriumkanal", s);
  })();

  // ---------- Neuromuskuläre Endplatte ----------
  const FIG_ENDPLATTE = (function () {
    let s = "";
    s += F.p("M60 10 L60 70 Q60 96 100 96 L280 96 Q320 96 320 70 L320 10", "flb", 1);
    s += t(190, 24, "Nervenendigung", "t-l", "middle", 1);
    [[110, 60], [140, 74], [170, 58], [200, 76], [230, 62], [260, 72]].forEach(function (v) { s += c(v[0], v[1], 7, "flb", 2) + c(v[0] - 2, v[1] - 1, 1.2, "fs", 2) + c(v[0] + 2, v[1] + 1.5, 1.2, "fs", 2); });
    s += t(118, 44, "Vesikel mit ACh", "t-n", "middle", 2);
    s += r(296, 84, 16, 12, "flb", 4, 2) + a(330, 74, 306, 86, 4) + t(334, 72, "Ca²⁺", "t-n", "start", 4);
    s += t(190, 112, "synaptischer Spalt: Acetylcholinesterase spaltet ACh", "t-n", "middle", 5);
    // postsynaptisch mit Falten
    let d = "M20 126 ";
    for (let x = 60; x <= 320; x += 40) d += "L" + (x - 10) + " 126 L" + (x - 10) + " 156 L" + (x + 10) + " 156 L" + (x + 10) + " 126 ";
    d += "L360 126 L360 190 L20 190 Z";
    s += F.p(d, "flb", 4);
    [70, 110, 150, 190, 230, 270, 310].forEach(function (x) { s += r(x - 25, 121, 10, 7, "fs", 3, 2); });
    s += t(190, 178, "Muskelfaser (Endplatte mit Falten)", "t-l", "middle", 4);
    s += t(4, 206, ["① AP öffnet Ca²⁺-Kanäle → ② Vesikel setzen ACh frei → ③ je 2 ACh öffnen", "einen nikotinischen Rezeptor (gelb) → ④ Endplattenpotenzial → Muskel-AP", "⑤ Acetylcholinesterase spaltet ACh in Millisekunden"], "t-n");
    return F.svg(380, 244, "Neuromuskuläre Endplatte mit Acetylcholinfreisetzung und Rezeptoren", s);
  })();

  // ---------- Sicherheitsreserve ----------
  const FIG_RESERVE = (function () {
    let s = t(4, 14, "Anteil der blockierten Acetylcholinrezeptoren", "t-l");
    const X = function (v) { return 14 + v / 100 * 352; };
    s += r(X(0), 26, X(70) - X(0), 30, "flb", 2, 0) + r(X(70), 26, X(92) - X(70), 30, "flb", 4, 0) + r(X(92), 26, X(100) - X(92), 30, "flb", 5, 0);
    [0, 25, 50, 70, 75, 90, 95, 100].forEach(function (v) { s += l([[X(v), 56], [X(v), 62]], "ax") + t(X(v), 74, v + "", "t-n", "middle"); });
    s += t(X(35), 45, "Zuckung noch normal", "t-n", "middle", 6) + t(X(81), 45, "abgeschwächt", "t-n", "middle", 6) + t(X(96), 45, "0", "t-n", "middle", 6);
    s += t(4, 94, ["Erst ab ca. 70–75 % blockierter Rezeptoren wird die Zuckung schwächer,", "bei ca. 90–95 % fehlt sie. Normale klinische Kraft schließt eine", "Restblockade deshalb nicht aus."], "t-n");
    return F.svg(380, 128, "Sicherheitsreserve der neuromuskulären Übertragung", s);
  })();

  // ---------- TOF-Muster ----------
  const FIG_TOF = (function () {
    let s = "";
    const cases = [
      ["kein Block", [1, 1, 1, 1], "TOF-Ratio: ca. 1,0", 2],
      ["nicht-depolarisierend", [0.8, 0.65, 0.5, 0.4], "Fade: T4/T1 = 0,5", 4],
      ["depolarisierend (Phase I)", [0.5, 0.5, 0.5, 0.5], "gleichmäßig: kein Fade", 1],
      ["tiefer Block", [0, 0, 0, 0], "TOF-Count 0: PTC messen", 5]
    ];
    cases.forEach(function (cs, i) {
      const x0 = 8 + i * 93;
      s += t(x0 + 42, 16, cs[0].length > 14 ? cs[0].split(" ")[0] : cs[0], "t-s", "middle", cs[3]);
      if (cs[0].length > 14) s += t(x0 + 42, 28, cs[0].split(" ").slice(1).join(" "), "t-s", "middle", cs[3]);
      s += l([[x0, 120], [x0 + 84, 120]], "ax");
      cs[1].forEach(function (h, j) { if (h > 0) s += r(x0 + 6 + j * 20, 120 - h * 80, 12, h * 80, "flb", cs[3], 1); else s += l([[x0 + 6 + j * 20, 119], [x0 + 18 + j * 20, 119]], "lnb", cs[3]); });
      s += t(x0 + 42, 136, cs[2].split(": ")[0] + (cs[2].indexOf(": ") > -1 ? ":" : ""), "t-n", "middle");
      if (cs[2].indexOf(": ") > -1) s += t(x0 + 42, 147, cs[2].split(": ")[1], "t-n", "middle");
    });
    s += t(4, 168, ["Train-of-Four: 4 Reize bei 2 Hz (Höhe = Zuckungsantwort). Vor Extubation", "quantitativ gemessene TOF-Ratio ≥ 0,9 – Fade ab ca. 0,4 ist kaum fühl- oder sichtbar."], "t-n");
    return F.svg(380, 192, "Train-of-Four-Antworten ohne Block, bei nicht-depolarisierendem und depolarisierendem Block", s);
  })();

  window.__addSpezialFiguren("nervmuskel", {
    membran: [{ svg: FIG_AP, nach: "Aktionspotenzial", caption: "Aktionspotenzial der Nervenzelle (schematisch): ==Na⁺-Kanäle öffnen an der Schwelle schlagartig und inaktivieren nach Bruchteilen einer Millisekunde, K⁺-Kanäle öffnen verzögert und repolarisieren==. Solange die Na⁺-Kanäle inaktiviert sind, ist die Zelle refraktär." }],
    lokalanaesthetika: [{ svg: FIG_LA, nach: "Wirkmechanismus", caption: "Lokalanästhetika (schwache Basen): ==Nur die ungeladene Form gelangt durch die Membran, nur die geladene blockiert den Kanal von innen.== Das erklärt, warum pKa und Gewebe-pH den Wirkeintritt bestimmen." }],
    endplatte: [
      { svg: FIG_ENDPLATTE, nach: "Ablauf an der Endplatte", caption: "Neuromuskuläre Endplatte (schematisch): Die Rezeptoren sitzen dicht auf den Faltenkämmen gegenüber den Freisetzungsstellen. ==Sugammadex, Cholinesterasehemmer und Relaxanzien greifen an verschiedenen Stellen dieses Ablaufs an.==" },
      { svg: FIG_RESERVE, nach: "Sicherheitsreserve (Margin of Safety)", caption: "Sicherheitsreserve: Ein großer Teil der Rezeptoren kann blockiert sein, ohne dass die Einzelzuckung schwächer wird – ==Restblockaden bleiben klinisch leicht unbemerkt==." }
    ],
    relaxometrie: [{ svg: FIG_TOF, nach: "Reizmuster", caption: "Typische TOF-Antworten (schematisch): ==Fade spricht für einen nicht-depolarisierenden Block (bzw. einen Phase-II-Block nach Succinylcholin)==; beim depolarisierenden Phase-I-Block sind alle vier Antworten gleich stark vermindert." }]
  });
})();
