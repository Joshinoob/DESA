// Vertiefende Abbildungen nach Rückmeldungen („Nicht verstanden“/„Fehler melden“): eigene Schemata,
// Zahlen gerundet. Herz: Wandspannung, Ea/Ees, Druck- vs. Volumenarbeit, Diastole und Koronarperfusion,
// Dyade, Hypertrophieformen, Plateau und Tetanus, hämodynamische Ziele in der Narkose.
// Messtechnik: TN- und IT-Netz (Pflichtfrage Elektrische Sicherheit).
(function () {
  const F = window.SWFIG;
  if (!F) return;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Laplace: Wandspannung bei normaler, dilatierter und hypertropher Kammer ----------
  const FIG_LAPLACE = (function () {
    let s = t(4, 14, "Gleicher Druck (120 mmHg) – unterschiedliche Kammer", "t-h");
    const herz = [
      { x: 64, ri: 26, h: 10, titel: "normal", wert: "Wandspannung 100 %", k: 0, z: ["Radius 26 · Wand 10"] },
      { x: 190, ri: 44, h: 8, titel: "dilatiert", wert: "≈ 280 % (fast 3×)", k: 5, z: ["Radius 44 · Wand 8", "→ O₂-Bedarf stark ↑"] },
      { x: 316, ri: 22, h: 20, titel: "hypertroph", wert: "≈ 45 %", k: 2, z: ["Radius 22 · Wand 20", "→ Spannung normalisiert,", "aber steif + schlechter", "durchblutet"] }
    ];
    herz.forEach(function (hz) {
      const cy = 86;
      s += c(hz.x, cy, hz.ri + hz.h, "flb", 5) + c(hz.x, cy, hz.ri, "s0");
      s += a(hz.x, cy, hz.x + hz.ri - 2, cy, 1) + t(hz.x + hz.ri / 2, cy - 4, "r", "t-n", "middle", 1);
      s += t(hz.x, 158, hz.titel, "t-l", "middle", hz.k) + t(hz.x, 172, hz.wert, "t-s", "middle", hz.k) + t(hz.x, 186, hz.z, "t-n", "middle");
    });
    s += r(4, 236, 372, 62, "s1");
    s += t(14, 252, "Laplace: Wandspannung σ = Druck × Radius / (2 × Wanddicke)", "t-l");
    s += t(14, 268, ["Großer Radius = mehr Spannung bei gleichem Druck. Dicke Wand = Spannung verteilt sich", "auf mehr Muskel. Wandspannung ist der Hauptverbraucher von Sauerstoff im Herzen."], "t-n");
    return F.svg(380, 302, "Wandspannung nach Laplace bei normaler, dilatierter und hypertropher Kammer", s);
  })();

  // ---------- Ea und Ees: ventrikulo-arterielle Kopplung ----------
  const FIG_KOPPLUNG = (function () {
    const P = F.plot({ x: 44, y: 24, w: 300, h: 170, xmin: 0, xmax: 160, ymin: 0, ymax: 150,
      xticks: [[0, "0"], [50, "50 (ESV)"], [120, "120 (EDV)"]], yticks: [[0, "0"], [100, "100"]],
      xlabel: "Volumen in der linken Kammer (ml)", ylabel: "Druck (mmHg)", ylabelDx: 36 });
    let s = P.svg;
    // Schleife
    s += F.sm([[P.x(50), P.y(6)], [P.x(85), P.y(7)], [P.x(120), P.y(9)]], "lnb", 0);
    s += l([[P.x(120), P.y(9)], [P.x(120), P.y(80)]], "lnb", 0);
    s += F.sm([[P.x(120), P.y(80)], [P.x(100), P.y(116)], [P.x(75), P.y(116)], [P.x(50), P.y(100)]], "lnb", 0);
    s += l([[P.x(50), P.y(100)], [P.x(50), P.y(6)]], "lnb", 0);
    // ESPVR (Ees) und Ea
    s += l([[P.x(0), P.y(0)], [P.x(72), P.y(144)]], "lnd", 5) + t(P.x(56), P.y(140), "ESPVR: Steigung = Ees", "t-s", "end", 5);
    s += l([[P.x(120), P.y(0)], [P.x(36), P.y(120)]], "lnd", 1) + t(P.x(124), P.y(14), "Ea-Linie", "t-s", "start", 1);
    s += c(P.x(50), P.y(100), 4, "s5") + t(P.x(50) - 6, P.y(100) - 6, "Endsystole", "t-n", "end", 5);
    s += a(P.x(52), P.y(-7), P.x(118), P.y(-7), 2, "ln", true);
    s += t(P.x(85), P.y(-7) - 4, "Schlagvolumen 70 ml", "t-n", "middle", 2);
    s += r(4, 236, 372, 76, "s0");
    s += t(12, 251, "Ees (Kammer) = Druck ÷ Restvolumen = 100 ÷ 50 = 2,0 mmHg/ml → je steiler, desto kräftiger", "t-n", "start", 5);
    s += t(12, 265, "Ea (Arterien) = Druck ÷ Schlagvolumen = 100 ÷ 70 = 1,4 mmHg/ml → je steiler, desto mehr Nachlast", "t-n", "start", 1);
    s += t(12, 281, "Ea/Ees = 1,4 ÷ 2,0 = 0,7 ≈ Restvolumen ÷ Schlagvolumen (50 ÷ 70)", "t-s");
    s += t(12, 297, "→ 0,5 entspricht EF ≈ 67 %, 1,0 entspricht EF ≈ 50 %; höher = Kammer zu schwach für ihre Nachlast", "t-n");
    return F.svg(380, 316, "Ventrikulo-arterielle Kopplung: Ees und Ea im Druck-Volumen-Diagramm", s);
  })();

  // ---------- Druckarbeit vs. Volumenarbeit (Druck-Volumen-Fläche) ----------
  const FIG_PVA = (function () {
    let s = "";
    function panel(x0, titel, k, edv, esv, pes, pmax, text) {
      const P = F.plot({ x: x0 + 22, y: 34, w: 150, h: 130, xmin: 0, xmax: 170, ymin: 0, ymax: 170, yticks: [[0, "0"]] });
      let o = t(x0 + 2, 16, titel, "t-l", "start", k) + P.svg;
      // Referenz (normal): EDV 120, ESV 50, Pes 100
      o += l([[P.x(50), P.y(4)], [P.x(120), P.y(6)], [P.x(120), P.y(80)], [P.x(85), P.y(115)], [P.x(50), P.y(100)]], "lnd", 0, true);
      // potenzielle Energie (Dreieck links) und Schlagarbeit (Schleife)
      o += l([[P.x(0), P.y(0)], [P.x(esv), P.y(pes)], [P.x(esv), P.y(4)]], "fl", 4, true);
      o += l([[P.x(esv), P.y(4)], [P.x(edv), P.y(6)], [P.x(edv), P.y(pes - 20)], [P.x((edv + esv) / 2), P.y(pmax)], [P.x(esv), P.y(pes)]], "flb", 1, true);
      o += l([[P.x(0), P.y(0)], [P.x(84), P.y(168)]], "lnd", 5);
      o += t(x0 + 2, 186, text, "t-n");
      return o;
    }
    s += panel(0, "Druckarbeit (Nachlast ↑)", 5, 120, 70, 140, 158, ["Orange (verlorene Energie) wächst", "stark, blau (Arbeit) kaum:", "viel O₂ für wenig Pumpleistung"]);
    s += panel(192, "Volumenarbeit (Vorlast ↑)", 2, 160, 50, 100, 120, ["Blau (Arbeit) wächst, orange", "bleibt klein: die Extra-Energie", "wird zu Pumpleistung"]);
    s += r(4, 228, 372, 86, "s0");
    s += t(12, 243, "Sauerstoffverbrauch ∝ blau (Schlagarbeit) + orange (potenzielle Energie)", "t-s");
    s += t(12, 258, ["Kraft halten kostet ATP – auch ohne Bewegung (wie Gewicht stemmen).", "Hoher Druck = hohe Wandspannung die ganze Systole lang.", "Die am Ende übrige Spannung (orange) wird zu Wärme, nicht zu Auswurf.", "Gestrichelt: normale Schleife zum Vergleich."], "t-n");
    return F.svg(380, 318, "Druckarbeit und Volumenarbeit im Druck-Volumen-Diagramm", s);
  })();

  // ---------- Diastole und Koronarperfusion bei Herzfrequenz 60 und 120 ----------
  const FIG_DIASTOLE = (function () {
    let s = "";
    function panel(y0, titel, beats, sys, txt, k) {
      const P = F.plot({ x: 40, y: y0 + 20, w: 300, h: 80, xmin: 0, xmax: 1, ymin: 0, ymax: 130, yticks: [[0, "0"], [80, "80"], [120, "120"]] });
      let o = t(4, y0 + 10, titel, "t-l", "start", k) + P.svg;
      const per = 1 / beats;
      for (let b = 0; b < beats; b++) {
        const s0 = b * per, s1 = s0 + sys, e = s0 + per;
        // Fläche zwischen Aortendruck und Kammerdruck in der Diastole = treibender Druck × Zeit
        o += l([[P.x(s1), P.y(98)], [P.x(e), P.y(80)], [P.x(e), P.y(8)], [P.x(s1), P.y(8)]], "fl", 1, true);
        o += F.sm([[P.x(s0), P.y(80)], [P.x(s0 + sys * 0.45), P.y(120)], [P.x(s1), P.y(100)]], "lnb", 5);
        o += l([[P.x(s1), P.y(98)], [P.x(e), P.y(80)]], "lnb", 5);
        o += l([[P.x(s0), P.y(8)], [P.x(s0 + 0.02), P.y(82)], [P.x(s0 + sys * 0.45), P.y(121)], [P.x(s1 - 0.02), P.y(95)], [P.x(s1), P.y(10)], [P.x(e), P.y(8)]], "ln", 0);
      }
      o += t(344, y0 + 58, txt, "t-n", "end");
      return o;
    }
    s += panel(0, "Herzfrequenz 60/min: Diastole ca. 0,7 s pro Schlag", 1, 0.3, ["≈ 42 s", "Diastole", "pro Minute"], 2);
    s += panel(120, "Herzfrequenz 120/min: Diastole ca. 0,25 s pro Schlag", 2, 0.25, ["≈ 30 s", "Diastole", "pro Minute"], 5);
    s += t(4, 236, "rot = Aortendruck · grau = Kammerdruck links · blau = treibender Druck × Zeit", "t-n");
    s += r(4, 246, 372, 66, "s1");
    s += t(12, 261, "Die blaue Fläche vergrößern:", "t-l");
    s += t(12, 276, ["① breiter: Frequenz senken (Narkose vertiefen, ggf. Esmolol)", "② oben höher: diastolischen Aortendruck heben (Noradrenalin, Phenylephrin)", "③ unten tiefer: Füllungsdruck links senken (kein Volumen zu viel, ggf. Nitro)"], "t-n", "start", null, 12);
    return F.svg(380, 316, "Diastolische Koronarperfusion bei Herzfrequenz 60 und 120 pro Minute", s);
  })();

  // ---------- Dyade ----------
  const FIG_DYADE = (function () {
    let s = t(4, 14, "außen (Blut/Gewebe): viel Calcium", "t-n") + t(376, 14, "Zellmembran", "t-n", "end");
    // Zellmembran mit T-Tubulus-Einstülpung
    s += l([[0, 30], [150, 30], [150, 160], [190, 160], [190, 30], [380, 30]], "lnb", 0);
    s += t(170, 176, "T-Tubulus", "t-s", "middle") + t(170, 188, "(Einstülpung)", "t-n", "middle");
    // SR rechts vom Tubulus
    s += r(206, 70, 150, 70, "flb", 1, 14) + t(281, 98, "sarkoplasmatisches", "t-s", "middle") + t(281, 110, "Retikulum (Ca²⁺-Speicher)", "t-s", "middle");
    // L-Typ-Kanal und RyR2 gegenüber
    s += c(190, 104, 7, "s4") + c(206, 104, 7, "s5");
    s += t(186, 72, "L-Typ-Ca²⁺-Kanal", "t-n", "end", 4) + a(176, 76, 188, 96, 4);
    s += t(212, 156, "RyR2 (Freisetzungskanal)", "t-n", "start", 5) + a(222, 148, 208, 112, 5);
    s += a(170, 96, 196, 104, 4) + t(120, 92, ["① wenig Ca²⁺", "strömt ein"], "t-n", "end", 4);
    s += t(198, 128, "12–15 nm", "t-n", "middle");
    // Freisetzung und Myofilamente
    s += r(206, 200, 170, 44, "s4") + t(291, 218, "Myofilamente", "t-l", "middle", 4) + t(291, 232, "Ca²⁺ an Troponin C → Kraft", "t-n", "middle");
    s += F.ac(290, 140, 300, 170, 290, 198, 5) + t(304, 176, ["② viel Ca²⁺", "frei (×10)"], "t-n", "start", 5);
    s += F.ac(230, 200, 214, 172, 222, 142, 1) + t(160, 214, ["③ SERCA pumpt", "zurück → Erschlaffung"], "t-n", "start", 1);
    s += r(4, 256, 372, 42, "s0");
    s += t(12, 271, "Dyade = zwei Partner: T-Tubulus (Zellmembran) + sarkoplasmatisches Retikulum.", "t-s");
    s += t(12, 285, "Hier wird der elektrische Impuls in ein Calciumsignal übersetzt (Skelettmuskel: Triade).", "t-n");
    return F.svg(380, 302, "Dyade der Herzmuskelzelle: T-Tubulus und sarkoplasmatisches Retikulum", s);
  })();

  // ---------- Konzentrische und exzentrische Hypertrophie ----------
  const FIG_HYPERTROPHIE = (function () {
    let s = "";
    const sp = [
      { x: 64, titel: "normal", ri: 24, h: 10, rows: 2, cols: 3, k: 0, z: ["Ausgangslage"] },
      { x: 190, titel: "konzentrisch", ri: 18, h: 22, rows: 4, cols: 3, k: 4, z: ["Drucklast: Aortenstenose,", "Bluthochdruck", "Sarkomere parallel", "→ Wand dick, Kammer klein"] },
      { x: 316, titel: "exzentrisch", ri: 40, h: 11, rows: 2, cols: 5, k: 1, z: ["Volumenlast: Aorten-/", "Mitralinsuffizienz", "Sarkomere hintereinander", "→ Kammer groß, Wand ~normal"] }
    ];
    sp.forEach(function (o) {
      s += t(o.x, 14, o.titel, "t-l", "middle", o.k);
      s += c(o.x, 72, o.ri + o.h, "flb", 5) + c(o.x, 72, o.ri, "s0");
      // eine Zelle mit ihren Sarkomeren
      const w = 13, hgt = 9, x0 = o.x - o.cols * w / 2, y0 = 138 - o.rows * hgt / 2;
      s += r(x0 - 3, y0 - 3, o.cols * w + 6, o.rows * hgt + 6, "s" + o.k, null, 4);
      for (let i = 0; i < o.rows; i++) for (let j = 0; j < o.cols; j++) s += r(x0 + j * w + 1, y0 + i * hgt + 1, w - 2, hgt - 2, "fl", o.k, 1);
      s += t(o.x, 172, o.z, "t-n", "middle");
    });
    s += t(4, 126, "Zelle:", "t-n");
    s += r(4, 228, 372, 42, "s0");
    s += t(12, 243, "Kästchen = Sarkomere. Parallel angelagert → Zelle dicker (mehr Kraft, Wandspannung ↓).", "t-n");
    s += t(12, 257, "Hintereinander angefügt → Zelle länger, Kammer weiter (mehr Volumen pro Schlag).", "t-n");
    return F.svg(380, 274, "Konzentrische und exzentrische Hypertrophie: Kammerform und Sarkomeranordnung", s);
  })();

  // ---------- Plateau, Refraktärzeit und Tetanus ----------
  const FIG_TETANUS = (function () {
    let s = "";
    // Herzmuskel
    let P = F.plot({ x: 30, y: 26, w: 330, h: 80, xmin: 0, xmax: 600, ymin: -100, ymax: 40, xticks: [[0, "0"], [300, "300"], [600, "600 ms"]] });
    s += t(4, 14, "Herzmuskel: Aktionspotenzial (rot) dauert so lange wie die Kontraktion (blau)", "t-l", "start", 5) + P.svg;
    s += r(P.x(0), 26, P.x(270) - P.x(0), 80, "fl", 0, 0) + t(P.x(135), 36, "refraktär (nicht erregbar)", "t-n", "middle");
    s += l([[P.x(0), P.y(-90)], [P.x(5), P.y(-90)], [P.x(8), P.y(25)], [P.x(20), P.y(5)], [P.x(200), P.y(-5)], [P.x(260), P.y(-80)], [P.x(290), P.y(-90)], [P.x(600), P.y(-90)]], "lnb", 5);
    s += t(P.x(100), P.y(-5) - 6, "Plateau (Phase 2): Ca²⁺ rein ↔ K⁺ raus", "t-n", "middle", 5);
    s += P.curve(function (x) { return x < 20 ? -100 : -100 + 110 * Math.pow(Math.sin(Math.PI * Math.min(1, (x - 20) / 380)), 1.6); }, "lnb", 1, 0, 600);
    s += a(P.x(150), 128, P.x(150), 110, 4) + t(P.x(150), 140, "2. Reiz: keine Antwort", "t-n", "middle", 4);
    // Skelettmuskel
    P = F.plot({ x: 30, y: 176, w: 330, h: 70, xmin: 0, xmax: 600, ymin: 0, ymax: 120, xticks: [[0, "0"], [300, "300"], [600, "600 ms"]] });
    s += t(4, 166, "Skelettmuskel: Aktionspotenzial nur 2–5 ms → Reize addieren sich", "t-l", "start", 2) + P.svg;
    s += P.curve(function (x) { const z = Math.min(1, x / 180); return 100 * (1 - Math.exp(-4 * z)) * (x > 520 ? Math.exp(-(x - 520) / 40) : 1) + 10 * Math.sin(x / 9) * (x < 520 ? 0.3 : 0); }, "lnb", 2, 0, 600);
    [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510].forEach(function (x) { s += l([[P.x(x), P.y(0)], [P.x(x), P.y(12)]], "ln", 5); });
    s += t(P.x(300), P.y(104), "Dauerkontraktion (Tetanus)", "t-n", "middle", 2);
    s += t(4, 282, "rote Striche = Reize. Das Herz muss nach jedem Schlag erschlaffen und sich füllen.", "t-n");
    return F.svg(380, 290, "Plateau und Refraktärzeit des Herzmuskels im Vergleich zum Tetanus des Skelettmuskels", s);
  })();

  // ---------- Hämodynamische Ziele in der Narkose ----------
  const FIG_ZIELE = (function () {
    const rows = [
      ["Aortenstenose", "langsam · voll · eng", "↓", "↑", "↑", "="],
      ["Mitralstenose", "langsam, Lunge schonen", "↓", "=", "=", "="],
      ["Aorteninsuffizienz", "schnell · voll · weit", "↑", "↑", "↓", "="],
      ["Mitralinsuffizienz", "schnell · voll · weit", "↑", "=", "↓", "="],
      ["Hypertrophe obstr. KMP", "voll · langsam · eng · schwach", "↓", "↑", "↑", "↓"],
      ["Koronare Herzkrankheit", "Bedarf ↓, Diastole lang", "↓", "=", "=", "="],
      ["Herzinsuffizienz (EF ↓)", "entlasten, stützen", "=", "=", "↓", "↑"],
      ["Pulmonale Hypertonie", "Lungenwiderstand ↓", "=", "=", "↑*", "↑"],
      ["Perikardtamponade", "voll · schnell · eng", "↑", "↑", "↑", "="]
    ];
    const cols = ["Frequenz", "Vorlast", "Nachlast", "Kontrakt."];
    let s = "";
    cols.forEach(function (cn, i) { s += t(206 + i * 44, 14, cn, "t-n", "middle"); });
    rows.forEach(function (row, i) {
      const y = 22 + i * 30;
      if (i % 2 === 0) s += r(2, y, 376, 30, "fl", 0, 3);
      s += t(6, y + 13, row[0], "t-s") + t(6, y + 25, row[1], "t-n");
      row.slice(2).forEach(function (v, j) {
        const k = v.charAt(0) === "↑" ? 5 : v.charAt(0) === "↓" ? 1 : 0;
        s += t(206 + j * 44, y + 20, v, "t-h", "middle", k);
      });
    });
    const yb = 22 + rows.length * 30 + 14;
    s += t(6, yb, "↑ anheben/hoch · ↓ senken/niedrig · = normal halten (Ausgangswert)", "t-n");
    s += t(6, yb + 12, "* Pulmonale Hypertonie: Systemdruck hoch halten, Lungengefäßwiderstand senken", "t-n");
    return F.svg(380, yb + 20, "Hämodynamische Ziele in der Narkose bei Herz- und Klappenerkrankungen", s);
  })();

  // ---------- TN-Netz vs. IT-Netz ----------
  const FIG_ITNETZ = (function () {
    let s = "";
    function erde(x, y) { return l([[x, y], [x, y + 8]], "ln", 0) + l([[x - 9, y + 8], [x + 9, y + 8]], "lnb", 0) + l([[x - 6, y + 12], [x + 6, y + 12]], "ln", 0) + l([[x - 3, y + 16], [x + 3, y + 16]], "ln", 0); }
    function panel(y0, titel, k, it) {
      let o = t(4, y0 + 12, titel, "t-l", "start", k);
      o += F.box(8, y0 + 22, 70, 46, [it ? "Trenntrafo" : "Trafo", "230 V"], 0, "t-s");
      o += l([[78, y0 + 32], [250, y0 + 32]], "lnb", 4) + t(160, y0 + 28, "Leiter 1", "t-n", "middle", 4);
      o += l([[78, y0 + 58], [250, y0 + 58]], "lnb", 1) + t(160, y0 + 74, "Leiter 2", "t-n", "middle", 1);
      o += F.box(250, y0 + 22, 56, 46, ["Gerät", ""], 0, "t-s");
      // Person/Patient berührt Leiter 1
      o += c(334, y0 + 34, 7, "s0") + l([[334, y0 + 41], [334, y0 + 66]], "lnb", 0) + l([[334, y0 + 50], [316, y0 + 40]], "lnb", 0) + l([[334, y0 + 66], [334, y0 + 80]], "ln", 0);
      o += l([[316, y0 + 40], [306, y0 + 34]], "ln", 4);
      o += erde(334, y0 + 80);
      if (!it) {
        o += l([[40, y0 + 68], [40, y0 + 80]], "ln", 1) + erde(40, y0 + 80);
        o += F.ac(330, y0 + 100, 190, y0 + 118, 46, y0 + 100, 5, "lnb");
        o += t(190, y0 + 124, "Strom fließt über den Menschen zur Erde zurück → Stromschlag", "t-n", "middle", 5);
      } else {
        o += F.box(110, y0 + 84, 110, 26, ["Isolationswächter", ""], 3, "t-n");
        o += F.ac(330, y0 + 100, 280, y0 + 118, 240, y0 + 104, 0, "lnd");
        o += t(190, y0 + 124, "kein Leiter geerdet → kein Rückweg → kein nennenswerter Strom", "t-n", "middle", 2);
      }
      return o;
    }
    s += panel(0, "Normales Netz (TN): ein Leiter ist geerdet", 5, false);
    s += panel(138, "OP-Netz (IT): Trenntransformator, kein Leiter geerdet", 2, true);
    s += r(4, 274, 372, 42, "s0");
    s += t(12, 289, "Erster Fehler im IT-Netz: kein Stromschlag, keine Abschaltung – Geräte laufen weiter,", "t-n");
    s += t(12, 302, "der Isolationswächter warnt, damit der Fehler vor einem zweiten behoben wird.", "t-n");
    return F.svg(380, 320, "Normales geerdetes Netz und isoliertes IT-Netz im OP im Vergleich", s);
  })();

  // ---------- Wie der Blutdruck entsteht (Baumdiagramm) ----------
  const FIG_BLUTDRUCK = (function () {
    let s = "";
    function node(x, y, w, h, lines, k, big) {
      let o = r(x, y, w, h, "s" + k, null, 6);
      const lh = 12, y0 = y + h / 2 - (lines.length - 1) * lh / 2 + 3.5;
      o += lines.map(function (ln, i) { return t(x + w / 2, y0 + i * lh, ln, i === 0 && big ? "t-l" : "t-s", "middle", i === 0 && big ? k : null); }).join("");
      return o;
    }
    // Wurzel
    s += node(120, 8, 140, 36, ["Blutdruck (MAP)", "= HZV × Widerstand"], 1, true);
    s += a(160, 44, 110, 70, 0) + a(220, 44, 300, 70, 0);
    // Ebene 2
    s += node(44, 72, 132, 34, ["Herzzeitvolumen", "wie viel fließt"], 4, true);
    s += node(258, 72, 118, 34, ["Gefäßwiderstand", "wie eng"], 5, true);
    s += t(190, 92, "×", "t-l", "middle", 0);
    // HZV-Kinder
    s += a(80, 106, 44, 134, 0) + a(140, 106, 150, 134, 0);
    s += node(6, 136, 86, 30, ["Frequenz", "Schläge/min"], 4);
    s += node(104, 136, 110, 44, ["Schlagvolumen", "Vorlast · Kontrakt.", "· Nachlast"], 4);
    s += t(98, 152, "×", "t-s", "middle", 0);
    // SVR-Kinder
    s += a(300, 106, 270, 134, 0) + a(330, 106, 350, 134, 0);
    s += node(226, 136, 94, 44, ["Arteriolen-", "weite", "(Radius⁴!)"], 5);
    s += node(330, 136, 46, 44, ["Fül-", "lung", "Volumen"], 2);
    // Steuerung
    s += r(6, 196, 370, 100, "s0");
    s += t(14, 211, "Daran drehen Körper und Medikamente:", "t-l");
    s += t(14, 226, ["Frequenz: Sympathikus/Vagus, β-Blocker", "Schlagvolumen: Volumen, Inotropika", "Arteriolen: Sympathikus (α1), Angiotensin II, Vasopressin", "(Vasopressoren vs. Vasodilatatoren)"], "t-n");
    s += t(14, 288, "Niedriger Blutdruck: zu wenig Füllung, zu schwache Pumpe oder zu weite Gefäße.", "t-n");
    return F.svg(380, 302, "Baumdiagramm: Wie der Blutdruck aus Herzzeitvolumen und Gefäßwiderstand entsteht", s);
  })();

  window.__addSpezialFiguren("herz", {
    regulation: [{ svg: FIG_BLUTDRUCK, nach: "Wie der Blutdruck überhaupt entsteht", caption: "Baumdiagramm (schematisch): ==Der Blutdruck ist das Produkt aus Herzzeitvolumen und Gefäßwiderstand== – beide zerfallen weiter bis zu den Größen, an denen Körper und Medikamente wirklich drehen. Daraus leitet sich jede Kreislauftherapie ab." }],
    determinanten: [{ svg: FIG_LAPLACE, nach: "Wandspannung verstehen", caption: "Laplace (schematisch, gleicher Druck): ==Die dilatierte Kammer braucht bei gleichem Druck fast dreimal so viel Wandspannung wie die normale – und damit viel mehr Sauerstoff.== Die hypertrophe Kammer verteilt die Spannung auf eine dicke Wand, wird dafür aber steif und schlechter durchblutet." }],
    zyklus: [
      { svg: FIG_KOPPLUNG, nach: "Ea und Ees verständlich erklärt", caption: "Ees und Ea im Druck-Volumen-Diagramm: ==Die Schleife endet dort, wo sich die Linie der Kammer (Ees) und die Linie der Arterien (Ea) kreuzen.== Ea/Ees entspricht etwa Restvolumen ÷ Schlagvolumen und damit der Ejektionsfraktion von der anderen Seite gesehen." },
      { svg: FIG_PVA, nach: "Warum Druckarbeit teurer ist als Volumenarbeit", caption: "Druck- und Volumenarbeit (schematisch): ==Bei Drucklast wächst vor allem die orange Fläche (Spannung, die zu Wärme wird), bei Volumenlast vor allem die blaue (echte Pumparbeit).== Der Sauerstoffverbrauch folgt der Summe beider Flächen (Suga)." }
    ],
    koronar: [{ svg: FIG_DIASTOLE, nach: "So verbesserst du die Koronardurchblutung in der Narkose", caption: "Diastolische Koronarperfusion (schematisch): ==Die linke Kammer bekommt ihr Blut in der blauen Fläche – treibender Druck (Aortendruck minus Kammerdruck) mal Zeit.== Bei Frequenz 120 schrumpft die Diastolenzeit pro Minute deutlich, obwohl der Bedarf steigt." }],
    zelle: [
      { svg: FIG_DYADE, nach: "Der Zündschalter: T-Tubuli, sarkoplasmatisches Retikulum und Dyade", caption: "Die Dyade: ==Wenig Calcium von außen (①) öffnet direkt gegenüber den Freisetzungskanal des Speichers – der schüttet viel Calcium aus (②)==; zur Erschlaffung pumpt SERCA es zurück (③)." },
      { svg: FIG_HYPERTROPHIE, nach: "Hypertrophie folgt der Wandspannung", caption: "Hypertrophieformen (schematisch): ==Drucklast → Sarkomere parallel → dicke Wand, kleine Kammer (konzentrisch); Volumenlast → Sarkomere hintereinander → große Kammer (exzentrisch).==" }
    ],
    elektro: [{ svg: FIG_TETANUS, nach: "Das Aktionspotenzial des Arbeitsmyokards", caption: "Plateau und Refraktärzeit (schematisch): ==Beim Herzmuskel dauert die Unerregbarkeit fast so lange wie die Kontraktion – ein zweiter Reiz verpufft.== Beim Skelettmuskel ist das Aktionspotenzial nach wenigen Millisekunden vorbei, schnelle Reize addieren sich zur Dauerkontraktion." }],
    narkose: [{ svg: FIG_ZIELE, nach: "Alle Erkrankungen auf einen Blick", caption: "Hämodynamische Ziele (vereinfacht): ==Jede Zeile folgt aus der Pathophysiologie – nicht auswendig lernen, sondern ableiten können.== Zielwerte immer am Ausgangswert des Patienten orientieren." }]
  });

  // Pflichtfrage Elektrische Sicherheit (SOE 2): Abbildung und Kernpunkt IT-Netz
  const T2 = window.SOE_TEIL2;
  const strom = T2 && (T2.pflicht || []).find(function (q) { return q.id === "p-strom"; });
  if (strom) {
    strom.svg = FIG_ITNETZ;
    strom.kern = strom.kern.concat([
      "**IT-Netz im OP** (Räume der Gruppe 2): Ein Trenntransformator speist ein Netz, dessen Leiter nicht geerdet sind. ==Beim ersten Isolationsfehler schließt sich kein Stromkreis über den Patienten, und keine Sicherung schaltet ab – lebenswichtige Geräte laufen weiter.== Der **Isolationswächter** alarmiert, damit der Fehler vor einem zweiten behoben wird.",
      "Zusätzlich: **Potenzialausgleich** (alle leitfähigen Teile auf gleichem Potenzial) gegen Ausgleichsströme durch den Patienten."
    ]);
  }
})();
