// Abbildungen Spezialwissen Blut & Gerinnung – eigene Schemata (vereinfacht).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Zellbasiertes Modell der Gerinnung ----------
  const FIG_GERINNUNG = (function () {
    let s = "";
    const rows = [
      ["Initiation", "Zelle mit Tissue Factor", ["TF + VIIa aktiviert X und IX", "Xa + Va → wenig Thrombin"], 1],
      ["Amplifikation", "Thrombozytenoberfläche", ["Thrombin aktiviert Plättchen und", "V → Va, VIII → VIIIa (vWF gibt VIII frei), XI → XIa"], 3],
      ["Propagation", "aktivierter Thrombozyt", ["Tenase (IXa + VIIIa) → viel Xa", "Prothrombinase (Xa + Va) → Thrombin-Burst"], 5]
    ];
    rows.forEach(function (rw, i) {
      const y = 6 + i * 74;
      s += r(4, y, 372, 56, "s" + rw[3]);
      s += t(12, y + 18, rw[0], "t-l", "start", rw[3]) + t(12, y + 32, rw[1], "t-n");
      s += t(130, y + 22, rw[2], "t-s", "start", null, 13);
      if (i < 2) s += a(190, y + 56, 190, y + 72, rw[3]) + t(198, y + 68, i === 0 ? "wenig Thrombin, IXa" : "aktivierte Kofaktoren", "t-n", "start", rw[3]);
    });
    s += a(190, 210, 190, 226, 5);
    s += r(4, 228, 372, 30, "s2") + t(190, 247, "Fibrinogen → Fibrin; Faktor XIIIa vernetzt → stabiles Gerinnsel", "t-s", "middle", 2);
    s += t(4, 276, "Bremsen: TFPI (Initiation), Antithrombin (Thrombin, Xa), Protein C/S (Va, VIIIa).", "t-n", "start", 0);
    s += t(4, 288, "Calcium ist für mehrere Schritte nötig.", "t-n", "start", 0);
    return F.svg(380, 294, "Zellbasiertes Modell der Gerinnung mit Initiation, Amplifikation und Propagation", s);
  })();

  // ---------- ROTEM-Kurve ----------
  const FIG_ROTEM = (function () {
    const X = function (min) { return 40 + min / 40 * 320; }, B = 112, S = 1.6;
    let s = "";
    function trace(ct, mcf, k, lyse, kk, cls) {
      const up = [], dn = [];
      for (let i = 0; i <= 200; i++) {
        const m = i / 200 * 40, sec = m * 60;
        let amp = sec < ct ? 0 : mcf * (1 - Math.exp(-(sec - ct) / k));
        if (lyse && m > 22) amp *= Math.max(0.2, 1 - (m - 22) * 0.04);
        up.push([X(m), B - amp * S / 2 * 1.0]); dn.push([X(m), B + amp * S / 2 * 1.0]);
      }
      return l(up, cls || "lnb", kk) + l(dn, cls || "lnb", kk);
    }
    s += l([[X(0), B], [X(40), B]], "ax");
    [0, 10, 20, 30, 40].forEach(function (m) { s += l([[X(m), B + 60], [X(m), B + 64]], "ax") + t(X(m), B + 76, String(m), "t-n", "middle"); });
    s += t(X(40), B + 90, "Zeit (min)", "t-s", "end");
    s += trace(60, 62, 230, false, 1) + trace(60, 15, 120, false, 2, "lnd");
    // Anmerkungen
    s += l([[X(1), B - 6], [X(1), B + 6]], "ln", 4) + t(X(1) + 3, B + 22, "CT", "t-s", "start", 4);
    const tCFT = 60 + 230 * Math.log(62 / (62 - 20));
    s += l([[X(1), B + 54], [X(tCFT / 60), B + 54]], "ln", 6) + t(X(tCFT / 60) + 4, B + 57, "CFT (2 → 20 mm)", "t-n", "start");
    s += t(X(4.2), B - 30, "α", "t-l", "start", 6);
    const a10 = 62 * (1 - Math.exp(-600 / 230));
    s += l([[X(11), B - a10 * S / 2], [X(11), B + a10 * S / 2]], "lnd", 3) + t(X(11) + 3, B - a10 * S / 2 - 6, "A10", "t-s", "start", 3);
    s += l([[X(30), B - 62 * S / 2], [X(30), B + 62 * S / 2]], "lnd", 5) + t(X(30) + 3, B - 62 * S / 2 - 6, "MCF", "t-s", "start", 5);
    s += t(X(39.5), B + 4, "EXTEM", "t-n", "end", 1) + t(X(39.5), B - 16, "FIBTEM", "t-n", "end", 2);
    s += t(4, 224, ["CT = Zeit bis Gerinnungsbeginn (Faktoren) · CFT/α = Geschwindigkeit der Festigung", "A10/MCF = Festigkeit (Thrombozyten + Fibrin) · ML = Lyse (hier nicht gezeigt)", "FIBTEM hemmt die Thrombozyten → zeigt nur den Fibrinanteil"], "t-n");
    return F.svg(380, 260, "ROTEM-Kurve mit Gerinnungszeit, Gerinnselbildung und maximaler Festigkeit", s);
  })();

  // ---------- AB0-Verträglichkeit ----------
  const FIG_AB0 = (function () {
    const G = ["0", "A", "B", "AB"];
    const ant = { "0": [], A: ["A"], B: ["B"], AB: ["A", "B"] };
    function sub(x, y) { return ant[x].every(function (q) { return ant[y].indexOf(q) !== -1; }); }
    let s = "";
    function grid(x0, title, ok) {
      let o = t(x0 + 64, 14, title, "t-l", "middle");
      o += t(x0 + 64, 30, "Spender →", "t-n", "middle");
      G.forEach(function (g, j) { o += t(x0 + 26 + j * 28 + 14, 46, g, "t-s", "middle"); });
      G.forEach(function (rg, i) {
        o += t(x0 + 20, 68 + i * 28, rg, "t-s", "end");
        G.forEach(function (dg, j) {
          const yes = ok(rg, dg);
          o += r(x0 + 26 + j * 28, 52 + i * 28, 26, 26, yes ? "flb" : "s0", yes ? 2 : null, 3);
          if (yes) o += t(x0 + 26 + j * 28 + 13, 69 + i * 28, "✓", "t-l", "middle", 2);
        });
      });
      return o;
    }
    s += grid(20, "Erythrozyten", function (empf, spend) { return sub(spend, empf); });
    s += grid(210, "Plasma", function (empf, spend) { return sub(empf, spend); });
    s += t(4, 30, "Empfänger ↓", "t-n", "start");
    s += t(4, 182, ["Erythrozyten: Der Spender darf kein Antigen tragen, das dem", "Empfänger fehlt (0 = Universalspender). Plasma: umgekehrt –", "keine Antikörper gegen Empfänger-Antigene (AB = Universalspender)."], "t-n");
    return F.svg(380, 214, "AB0-Verträglichkeit für Erythrozytenkonzentrate und Plasma", s);
  })();

  window.__addSpezialFiguren("blut", {
    haemostase: [{ svg: FIG_GERINNUNG, nach: "Zellbasiertes Modell der Gerinnung", caption: "Zellbasiertes Modell (nach Hoffman & Monroe): ==Eine kleine Thrombinmenge aus der Initiation schaltet auf den Thrombozyten die Verstärker ein – erst dann entsteht der Thrombin-Burst== für ein stabiles Fibringerinnsel." }],
    gerinnungstests: [{ svg: FIG_ROTEM, nach: "Viskoelastische Tests (ROTEM/TEG)", caption: "ROTEM-Kurve (schematisch, keine Normwerte – diese sind gerätespezifisch): ==Die Breite der Kurve ist die Gerinnselfestigkeit==; der Unterschied zwischen EXTEM und FIBTEM zeigt den Beitrag der Thrombozyten." }],
    transfusion: [{ svg: FIG_AB0, nach: "AB0 und Rhesus", caption: "AB0-Verträglichkeit (Empfänger in den Zeilen, Spender in den Spalten): ==Bei Erythrozyten zählt das Antigen des Spenders, bei Plasma der Antikörper des Spenders== – darum sind die Matrizen spiegelbildlich. Zusätzlich Rhesus beachten." }]
  });

  // ---------- Bildgeschichten (Piktogramme) ----------
  const B = F.bild;
  window.__addSpezialFiguren("blut", {
    sauerstofftransport: [{ nach: "Anämietoleranz", caption: "Bildgeschichte: Wie der Körper eine Anämie ausgleicht – ==die Grenze setzt meist das Herz selbst==.", svg: B("Kompensation der Anämie", [
      { i: "erythrozyt:5:down", t: ["Hb sinkt", "(Normovolämie)"] },
      { i: "herz:2:up", t: ["Viskosität ↓ → Rückstrom", "und HZV ↑"] },
      { i: "muskel:4", t: ["Gewebe schöpft mehr", "O₂ aus (2,3-BPG ↑)"] },
      { i: "gehirn:1 + herz:1", t: ["Umverteilung zu Herz", "und Gehirn"] },
      { i: "herz:5:x", t: ["Grenze: das Herz selbst", "bekommt nicht mehr", "genug Sauerstoff"], k: 5 }
    ]) }],
    haemostase: [
      { nach: "Primäre Hämostase", caption: "Bildgeschichte: Der Plättchenpfropf in vier Schritten – mit den Angriffspunkten ASS, P2Y12- und GPIIb/IIIa-Hemmer.", svg: B("Primäre Hämostase", [
        { i: "eng:5", t: ["Verletzung: Gefäß verengt", "sich, Kollagen liegt frei"] },
        { i: "thrombozyt:3", t: ["Adhäsion: von-Willebrand-", "Faktor verbindet Kollagen", "und Plättchen"] },
        { i: "thrombozyt:4:up", t: ["Aktivierung: ADP und", "Thromboxan A₂ frei", "(◀ P2Y12-Hemmer, ASS)"] },
        { i: "gerinnsel:5", t: ["Aggregation: Fibrinogen", "vernetzt die Plättchen", "(◀ GPIIb/IIIa-Hemmer)"], k: 5 }
      ]) },
      { nach: "Fibrinolyse", caption: "Bildgeschichte: Auflösung des Gerinnsels – Tranexamsäure hemmt diesen Weg.", svg: B("Fibrinolyse", [
        { i: "gefaess:1", t: ["Endothel setzt tPA frei", "(Ischämie, Stress, Trauma,", "Operation)"] },
        { i: "enzym:1", t: ["tPA: Plasminogen", "→ Plasmin"] },
        { i: "gerinnsel:5:x", t: ["Plasmin spaltet Fibrin", "→ D-Dimere"] },
        { i: "enzym:2:x", t: ["Bremsen: PAI-1,", "α₂-Antiplasmin, TAFI"], k: 2 }
      ]) }
    ],
    gerinnungstests: [{ nach: "Zielorientiertes Gerinnungsmanagement", caption: "Bildgeschichte: Zielorientiertes Gerinnungsmanagement – erst die Basis, dann gezielt nach Befund (Grenzwerte je nach Leitlinie und Gerät).", svg: B("Gerinnung gezielt behandeln", [
      { i: "thermometer:4 + #Ca²⁺:4", t: ["Basis: Temperatur > 35 °C,", "pH > 7,2, ionisiertes", "Calcium normal"] },
      { i: "gerinnsel:5:x > spritze:2", t: ["Hyperfibrinolyse", "→ Tranexamsäure"] },
      { i: "infusion:3", t: ["Fibrinogen < 1,5–2 g/l", "→ Fibrinogenkonzentrat"] },
      { i: "thrombozyt:4:down", t: ["Thrombozyten < 50/nl", "→ Konzentrat"] },
      { i: "uhr:1:up > infusion:1", t: ["Gerinnungszeit verlängert", "→ PPSB oder Plasma"] }
    ]) }],
    transfusion: [{ nach: "Transfusionsreaktionen", caption: "Bildgeschichte: Die akute hämolytische Transfusionsreaktion – ==in Narkose oft nur an Hypotonie und Blutung erkennbar==.", svg: B("AB0-Fehltransfusion", [
      { i: "infusion:5 + erythrozyt:5", t: ["Falsche Konserve", "(meist AB0-Verwechslung)"] },
      { i: "erythrozyt:5:x", t: ["Anti-A/Anti-B (IgM) zer-", "stören die Spender-", "erythrozyten im Gefäß"] },
      { i: "thermometer:5 + manometer:5:down", t: ["Fieber, Schüttelfrost,", "Hypotonie, Hämoglobin-", "urie, DIC"] },
      { i: "bett:4 + gerinnsel:4", t: ["In Narkose oft nur", "Hypotonie und Blutung"] },
      { i: "warnung:2", t: ["Sofort stoppen, Kreislauf", "stützen, Blutbank,", "Konserven prüfen"], k: 2 }
    ]) }],
    "anaemie-pbm": [{ nach: "Erythropoese", caption: "Bildgeschichte: Vom Sauerstoffsensor zur neuen Zelle – ==Anämie vor elektiven Eingriffen braucht Wochen Vorlauf==.", svg: B("Erythropoese", [
      { i: "niere:4 + #O₂:1:down", t: ["Die Niere misst das", "O₂-Angebot (HIF)"] },
      { i: "#EPO:4:up", t: ["Erythropoetin steigt"] },
      { i: "knochen:3", t: ["Knochenmark: Vorläufer", "vermehren sich und reifen", "(ca. 5–7 Tage)"] },
      { i: "erythrozyt:5", t: ["Retikulozyten (1–2 Tage),", "dann reife Erythrozyten"] },
      { i: "uhr:2 + erythrozyt:2:up", t: ["Mit genug Eisen: Hb", "+1 g/dl pro 1–2 Wochen"], k: 2 }
    ]) }]
  });
})();
