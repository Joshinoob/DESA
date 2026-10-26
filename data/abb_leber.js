// Abbildungen Spezialwissen Leber – eigene Schemata (vereinfacht, Zahlen gerundet).
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Azinus nach Rappaport ----------
  const FIG_AZINUS = (function () {
    let s = "";
    s += r(70, 30, 80, 110, "fl", 5, 0) + r(150, 30, 80, 110, "fl", 3, 0) + r(230, 30, 80, 110, "fl", 1, 0);
    s += t(110, 50, "Zone 1", "t-l", "middle", 5) + t(190, 50, "Zone 2", "t-l", "middle", 3) + t(270, 50, "Zone 3", "t-l", "middle", 1);
    s += t(110, 64, "periportal", "t-n", "middle") + t(270, 64, "perizentral", "t-n", "middle");
    // Trias und Zentralvene
    s += c(40, 70, 7, "flb", 1) + c(40, 92, 5, "flb", 5) + c(40, 110, 4, "flb", 2);
    s += t(40, 136, ["Glisson-", "Trias"], "t-n", "middle");
    s += c(340, 85, 13, "flb", 0) + t(340, 116, ["Zentral-", "vene"], "t-n", "middle");
    s += a(70, 96, 310, 96, 5, "lnb") + t(190, 90, "Blutfluss (Pfortader + Arterie) → Sinusoide", "t-n", "middle", 6);
    s += a(310, 124, 70, 124, 2) + t(190, 136, "Galle fließt entgegengesetzt", "t-n", "middle", 2);
    s += t(4, 166, ["Zone 1: viel O₂ – Glukoneogenese, Harnstoffzyklus, Oxidation", "Zone 3: wenig O₂, viel CYP450 (v.a. CYP2E1) – Biotransformation;", "zuerst geschädigt bei Schock (ischämische Hepatitis) und Paracetamol"], "t-s");
    s += t(4, 214, "Trias: blau = Pfortaderast, rot = Leberarterie, grün = Gallengang", "t-n");
    return F.svg(380, 220, "Leberazinus mit den drei Zonen zwischen Glisson-Trias und Zentralvene", s);
  })();

  // ---------- Hepatische Clearance und Leberdurchblutung ----------
  const FIG_CLEARANCE = (function () {
    const P = F.plot({ x: 44, y: 24, w: 310, h: 160, xmin: 0, xmax: 2.5, ymin: 0, ymax: 2.5,
      xticks: [[0, "0"], [0.5, "0,5"], [1, "1"], [1.5, "1,5"], [2, "2"], [2.5, "2,5"]], yticks: [[0, "0"], [1, "1"], [2, "2"]],
      xlabel: "Leberblutfluss (l/min)", ylabel: "hepatische Clearance (l/min)", ylabelDx: 40 });
    let s = P.svg;
    const ws = function (cli) { return function (q) { return q * cli / (q + cli); }; };
    s += P.curve(function (q) { return q; }, "lnd", 0) + P.curve(ws(15), "lnb", 5) + P.curve(ws(0.15), "lnb", 1);
    s += l([[P.x(1.5), P.y(0)], [P.x(1.5), P.y(2.5)]], "lnd", 0) + t(P.x(1.5) + 4, P.y(2.4), "normal ca. 1,5", "t-n", "start", 0);
    s += t(P.x(0.05), P.y(2.4), ["hohe Extraktion: folgt dem Fluss", "(Propofol, Lidocain, Fentanyl)"], "t-n", "start", 5);
    s += t(P.x(2.45), P.y(0.14) - 34, ["niedrige Extraktion:", "unabhängig vom Fluss", "(Diazepam, Phenytoin)"], "t-n", "end", 1);
    s += t(P.x(0.05), P.y(1.2), "Clearance = Fluss (E = 1)", "t-n", "start", 0);
    return F.svg(380, 222, "Hepatische Clearance in Abhängigkeit vom Leberblutfluss für Stoffe mit hoher und niedriger Extraktion", s);
  })();

  // ---------- Bilirubinstoffwechsel ----------
  const FIG_BILIRUBIN = (function () {
    let s = "";
    s += F.box(4, 6, 172, 36, ["Hämoglobin-Abbau", "Milz, Makrophagen"], 5);
    s += F.box(204, 6, 172, 36, ["unkonjugiertes Bilirubin", "an Albumin, nicht im Urin"], 3);
    s += a(176, 24, 202, 24, 5);
    s += F.box(204, 70, 172, 44, ["Leberzelle", "Konjugation (UGT1A1)", "→ konjugiertes Bilirubin"], 4);
    s += a(290, 42, 290, 68, 3);
    s += F.box(204, 142, 172, 36, ["Galle", "aktiver Transport (am langsamsten)"], 2);
    s += a(290, 114, 290, 140, 4);
    s += F.box(204, 206, 172, 36, ["Darm: Bakterien", "→ Urobilinogen → Sterkobilin"], 0);
    s += a(290, 178, 290, 204, 2);
    s += F.box(4, 206, 172, 36, ["Urin: Urobilinogen", "(teilweise rückresorbiert)"], 1);
    s += a(204, 224, 178, 224, 1);
    s += t(4, 66, ["prähepatisch (Hämolyse):", "unkonjugiert ↑, kein", "Bilirubin im Urin"], "t-n", "start", 5);
    s += t(4, 116, ["intrahepatisch: beide ↑", "posthepatisch (Abfluss-", "hindernis): konjugiert ↑,", "dunkler Urin, heller Stuhl"], "t-n", "start", 4);
    s += t(290, 258, "braune Stuhlfarbe", "t-n", "middle");
    return F.svg(380, 264, "Bilirubinstoffwechsel vom Hämoglobinabbau bis zur Ausscheidung", s);
  })();

  // ---------- Portaler Druckgradient ----------
  const FIG_HVPG = (function () {
    let s = t(4, 14, "Lebervenendruckgradient (HVPG, mmHg)", "t-l");
    const X = function (v) { return 14 + v / 20 * 352; };
    s += r(X(0), 26, X(5) - X(0), 30, "flb", 2, 0) + r(X(5), 26, X(10) - X(5), 30, "flb", 3, 0) + r(X(10), 26, X(12) - X(10), 30, "flb", 4, 0) + r(X(12), 26, X(20) - X(12), 30, "flb", 5, 0);
    [0, 5, 10, 12, 20].forEach(function (v) { s += l([[X(v), 56], [X(v), 62]], "ax") + t(X(v), 74, String(v), "t-n", "middle"); });
    s += t(X(2.5), 45, "normal 1–5", "t-n", "middle", 6) + t(X(7.5), 45, "erhöht", "t-n", "middle", 6) + t(X(16), 45, "Varizenblutung droht", "t-n", "middle", 6);
    s += t(4, 94, ["Ab ca. 10 mmHg klinisch signifikant (Varizen, Aszites möglich),", "ab ca. 12 mmHg Blutungsgefahr der Varizen."], "t-n");
    return F.svg(380, 116, "Einteilung des Lebervenendruckgradienten", s);
  })();

  window.__addSpezialFiguren("leber", {
    aufbau: [{ svg: FIG_AZINUS, nach: "Leberläppchen und Azinus", caption: "Azinus nach Rappaport (schematisch): Das Blut fließt von der Glisson-Trias zur Zentralvene, ==der Sauerstoff nimmt dabei ab – Zone 3 ist am sauerstoffärmsten und enthält am meisten CYP2E1==. Deshalb wird sie bei Schock und Paracetamolvergiftung zuerst geschädigt." }],
    biotransformation: [{ svg: FIG_CLEARANCE, nach: "Hepatische Clearance", caption: "Hepatische Clearance nach dem 'well-stirred'-Modell (Cl = Q × E; Beispielwerte für hohe und niedrige intrinsische Clearance): ==Bei hoher Extraktion bestimmt der Leberblutfluss die Clearance – sinkt das HZV (Schock, Narkose), steigen die Spiegel==; bei niedriger Extraktion zählen Enzymaktivität und freier Anteil." }],
    synthese: [{ svg: FIG_BILIRUBIN, nach: "Bilirubin und Galle", caption: "Bilirubinstoffwechsel: ==Wo der Weg gestört ist, bestimmt, welches Bilirubin steigt== – vor der Leber das unkonjugierte, hinter der Konjugation das konjugierte (wasserlöslich, deshalb dunkler Urin)." }],
    leberversagen: [{ svg: FIG_HVPG, nach: "Portale Hypertension", caption: "Lebervenendruckgradient (HVPG) als Maß der portalen Hypertension, Schwellen wie im Text." }]
  });

  // ---------- Bildgeschichten (Piktogramme) ----------
  const B = F.bild;
  window.__addSpezialFiguren("leber", {
    aufbau: [{ nach: "Hepatic Arterial Buffer Response", caption: "Bildgeschichte: Die Pufferantwort der Leberarterie – ==sie gleicht einen sinkenden Pfortaderfluss teilweise aus, umgekehrt nicht==.", svg: B("Pufferantwort der Leberarterie", [
      { i: "vene:1:down", t: ["Pfortaderfluss sinkt", "(z.B. Pneumoperitoneum)"] },
      { i: "#Ado:2:up", t: ["Adenosin wird weniger aus-", "gewaschen und reichert", "sich an"] },
      { i: "weit:5", t: ["Leberarteriolen weiten sich", "→ arterieller Fluss ↑"] },
      { i: "leber:2:ok", t: ["Gesamtfluss teilweise", "ausgeglichen"], k: 2 }
    ]) }],
    stoffwechsel: [{ nach: "Eiweiß und Ammoniak", caption: "Bildgeschichte: Wie die Leber Stickstoff entgiftet – ==und warum Ammoniak bei Leberversagen das Gehirn erreicht==.", svg: B("Ammoniak-Entgiftung", [
      { i: "darm:4 + muskel:4", t: ["Aminosäurenabbau und", "Darmbakterien →", "Ammoniak"] },
      { i: "leber:2", t: ["Harnstoffzyklus (Zone 1):", "Harnstoff → Niere"] },
      { i: "leber:3", t: ["Rest-Ammoniak:", "Glutamin-Synthetase", "(Zone 3)"] },
      { i: "leber:5:x > gehirn:5", t: ["Leberversagen, Shunt:", "Ammoniak erreicht das", "Gehirn → Enzephalopathie"], k: 5 }
    ]) }],
    biotransformation: [{ nach: "Phase I und Phase II", caption: "Bildgeschichte: Biotransformation macht fettlösliche Arzneimittel wasserlöslich. ==Phase II bleibt bei Zirrhose länger erhalten== (deshalb Lorazepam günstiger als Midazolam).", svg: B("Biotransformation", [
      { i: "tablette:4", t: ["Fettlösliches", "Arzneimittel"] },
      { i: "enzym:4", t: ["Phase I (v.a. CYP):", "Oxidation, Reduktion,", "Hydrolyse"] },
      { i: "enzym:2", t: ["Phase II: Kopplung an", "Glucuronsäure, Sulfat u.a."] },
      { i: "tropfen:1 > niere:1", t: ["Wasserlöslich → Aus-", "scheidung über Niere", "oder Galle"], k: 1 }
    ]) }],
    leberversagen: [{ nach: "Portale Hypertension", caption: "Bildgeschichte: Vom Narbengewebe zum Organversagen.", svg: B("Portale Hypertension", [
      { i: "leber:4", t: ["Fibrose und Knoten →", "Widerstand ↑"] },
      { i: "weit:1", t: ["Splanchnikusgefäße weit", "→ mehr Zufluss"] },
      { i: "vene:5:up", t: ["Pfortaderdruck ↑ →", "Varizen, große Milz"] },
      { i: "manometer:4:down", t: ["Systemwiderstand ↓ →", "'zu wenig' arterielles", "Volumen"] },
      { i: "niere:4 + tropfen:1:up", t: ["RAAS, Sympathikus, ADH:", "Aszites, Hyponatriämie"] },
      { i: "niere:5:x", t: ["Starke Nierengefäß-", "verengung: hepato-", "renales Syndrom"], k: 5 }
    ]) }]
  });
})();
