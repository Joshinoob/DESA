// EDAIC Teil 2: Profile der vier SOEs (nach ESAIC "How to prepare for the EDAIC", 2022),
// Zuordnung der Szenarien zu den SOEs und Pflichtfragen, die in jeder SOE vorkommen müssen
// (SOE 1 Anatomie, SOE 2 Messtechnik, SOE 3 Zwischenfall, SOE 4 Bildbefund). Eigene Formulierungen,
// keine echten Prüfungsfragen. Schematische Abbildungen selbst gezeichnet.
// Pflichtfrage: { id, soe, thema, frage, kern:[...], link?:[href, label], nicht?:[Szenario-ids], svg? }
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a, p = F.p;

  // ---------- Lungenultraschall: A-Linien, B-Linien, M-Mode ----------
  function panel(x, y, w, h, titel) {
    return r(x, y, w, h, "fl", 0, 4) + r(x, y, w, h, "s0", null, 4) + t(x + w / 2, y + h + 13, titel, "t-s", "middle");
  }
  function rippen(x, y, w) {
    // zwei Rippenanschnitte mit Schallschatten, Pleuralinie dazwischen
    const schatten = function (sx) { return '<rect x="' + sx + '" y="' + (y + 24) + '" width="16" height="72" fill="#000" fill-opacity="0.35"/>'; };
    return schatten(x + 6) + schatten(x + w - 22) + c(x + 14, y + 16, 8, "fs", 0) + c(x + w - 14, y + 16, 8, "fs", 0) +
      l([[x + 22, y + 26], [x + w - 22, y + 26]], "lnb", 6);
  }
  const SVG_LUS = (function () {
    let s = "";
    const W = 176, H = 96;
    // A-Linien
    s += panel(8, 8, W, H, "A-Linien: Wiederholung der Pleuralinie");
    s += rippen(8, 8, W);
    [52, 78].forEach(function (yy) { s += l([[30, 8 + yy], [8 + W - 22, 8 + yy]], "ln", 6); });
    s += t(8 + W / 2, 8 + 46, "A", "t-n", "middle", 1) + t(8 + W / 2, 8 + 72, "A", "t-n", "middle", 1);
    // B-Linien
    s += panel(196, 8, W, H, "B-Linien: senkrecht bis zum Rand");
    s += rippen(196, 8, W);
    [250, 280, 312].forEach(function (xx) { s += l([[xx, 34], [xx, 104]], "lnb", 1); });
    // M-Mode Seashore
    s += panel(8, 132, W, H, "Seashore: Lungengleiten vorhanden");
    for (let i = 0; i < 4; i++) s += l([[14, 140 + i * 6], [8 + W - 6, 140 + i * 6]], "ln", 0);
    s += l([[14, 164], [8 + W - 6, 164]], "lnb", 6);
    for (let yy = 172; yy < 224; yy += 6) for (let xx = 16 + (yy % 12 === 0 ? 3 : 0); xx < 8 + W - 40; xx += 7) s += c(xx, yy, 1, "fs", 6);
    s += t(8 + W - 10, 156, "Wellen", "t-n", "end") + t(8 + W - 10, 220, "Sand", "t-n", "end");
    // M-Mode Barcode
    s += panel(196, 132, W, H, "Barcode: kein Gleiten → Pneumothorax?");
    for (let i = 0; i < 15; i++) s += l([[202, 140 + i * 6], [196 + W - 6, 140 + i * 6]], i === 4 ? "lnb" : "ln", i === 4 ? 6 : 0);
    s += t(8, 262, ["Pleuralinie = helle Linie zwischen den Rippenschatten. Lungengleiten oder", "B-Linien an der Sonde schließen dort einen Pneumothorax aus; beweisend ist", "der Lungenpunkt (Übergang Gleiten/kein Gleiten). ≥ 3 B-Linien je Zwischen-", "rippenraum = interstitielles Syndrom (Ödem, ARDS, Pneumonie, Fibrose)."], "t-n");
    return F.svg(380, 310, "Lungenultraschall schematisch: A-Linien, B-Linien, Seashore- und Barcode-Zeichen", s);
  })();

  // ---------- CCT: Epidural-, Subduralhämatom, Subarachnoidalblutung ----------
  const SVG_CCT = (function () {
    let s = "";
    function schaedel(cx, cy) {
      return c(cx, cy, 52, "lnb", 0) + c(cx, cy, 47, "fl", 0);
    }
    // Epidural
    const x1 = 66, y = 74;
    s += schaedel(x1, y) + l([[x1, y - 47], [x1, y + 47]], "lnd", 0);
    s += p("M" + (x1 - 33) + " " + (y - 33) + " A47 47 0 0 0 " + (x1 - 33) + " " + (y + 33) + " Q" + (x1 - 18) + " " + y + " " + (x1 - 33) + " " + (y - 33) + " Z", "flb", 5);
    s += t(x1, y + 70, "Epidural", "t-l", "middle", 5) + t(x1, y + 84, ["bikonvex (Linse)", "nicht über Schädelnähte", "meist arteriell"], "t-n", "middle");
    // Subdural
    const x2 = 190;
    s += schaedel(x2, y) + l([[x2 + 7, y - 47], [x2 + 7, y + 47]], "lnd", 0);
    s += p("M" + (x2 - 20) + " " + (y - 43) + " A47 47 0 0 0 " + (x2 - 20) + " " + (y + 43) + " A44 44 0 0 1 " + (x2 - 20) + " " + (y - 43) + " Z", "flb", 5);
    s += t(x2, y + 70, "Subdural", "t-l", "middle", 5) + t(x2, y + 84, ["sichelförmig, lang, über Nähte,", "nicht über die Falx; Brückenvenen", "Mittellinie verschoben (Pfeil)"], "t-n", "middle");
    s += l([[x2, y - 47], [x2, y + 47]], "ln", 0).replace('class="ln k0"', 'class="ln k0" stroke-opacity="0.35"') + a(x2 + 1, y - 6, x2 + 7, y - 6, 4, "ln");
    // SAB
    const x3 = 314;
    s += schaedel(x3, y) + l([[x3, y - 47], [x3, y + 47]], "lnd", 0);
    s += p("M" + (x3 - 16) + " " + (y + 6) + " L" + x3 + " " + (y - 4) + " L" + (x3 + 16) + " " + (y + 6) + " L" + (x3 + 10) + " " + (y + 18) + " L" + (x3 - 10) + " " + (y + 18) + " Z", "flb", 5);
    s += l([[x3 - 16, y + 6], [x3 - 34, y - 6]], "lnb", 5) + l([[x3 + 16, y + 6], [x3 + 34, y - 6]], "lnb", 5);
    s += t(x3, y + 70, "Subarachnoidal", "t-l", "middle", 5) + t(x3, y + 84, ["Blut in basalen Zisternen", "und Sylvischer Fissur", "Aneurysma, Trauma"], "t-n", "middle");
    s += t(4, 206, ["Frisches Blut ist in der Computertomographie hell (hyperdens). Hirndruckzeichen:", "verstrichene Furchen, enge basale Zisternen, Mittellinienverlagerung, aufgestaute", "Ventrikel (Liquoraufstau) oder verkleinerte Ventrikel (Schwellung)."], "t-n");
    return F.svg(380, 244, "Schädel-CT schematisch: Epiduralhämatom, Subduralhämatom und Subarachnoidalblutung", s);
  })();

  // ---------- Röntgen-Thorax: Lage von Tubus, ZVK, Magensonde ----------
  const SVG_RXT = (function () {
    let s = "";
    // Thoraxumriss
    s += p("M60 40 Q40 120 50 214 L150 214 Q130 140 128 70 Z", "flb", 0) + p("M260 40 Q280 120 270 214 L170 214 Q190 140 192 70 Z", "flb", 0);
    s += p("M50 214 Q100 186 150 202", "lnb", 6) + p("M170 206 Q220 182 270 214", "lnb", 6);
    // Trachea und Carina
    s += l([[154, 20], [154, 104]], "lnb", 6) + l([[166, 20], [166, 104]], "lnb", 6);
    s += l([[154, 104], [130, 136]], "lnb", 6) + l([[166, 104], [192, 136]], "lnb", 6);
    s += c(160, 106, 3, "fs", 6);
    // Tubus
    s += l([[160, 6], [160, 76]], "lnb", 1) + l([[156, 76], [164, 76]], "lnb", 1);
    s += a(176, 76, 176, 104, 1, "ln", true) + t(180, 94, "ca. 5 ± 2 cm", "t-n", "start", 1);
    // ZVK von rechts (Bildlinks) über V. jugularis interna in V. cava superior
    s += F.sm([[120, 8], [132, 40], [140, 70], [142, 106]], "lnb", 2) + c(142, 106, 3, "fs", 2);
    // Magensonde
    s += F.sm([[163, 8], [162, 110], [168, 190], [196, 214], [214, 226]], "ln", 4) + c(214, 226, 3, "fs", 4);
    s += t(286, 30, "Tubus", "t-s", "start", 1) + t(286, 42, ["Spitze Mitte Trachea,", "ca. 5 ± 2 cm über", "der Carina"], "t-n", "start");
    s += t(286, 92, "ZVK", "t-s", "start", 2) + t(286, 104, ["Spitze in der unteren", "V. cava superior,", "etwa Höhe Carina"], "t-n", "start");
    s += t(286, 156, "Magensonde", "t-s", "start", 4) + t(286, 168, ["mittig an der Carina", "vorbei, Spitze deutlich", "unter dem linken", "Zwerchfell"], "t-n", "start");
    s += t(4, 246, ["Liegend (a.-p.) wirkt das Herz größer, ein Erguss zeigt sich als Schleier,", "ein Pneumothorax vorn als tiefer, heller Sinus („deep sulcus“)."], "t-n");
    return F.svg(380, 270, "Röntgen-Thorax schematisch: Lage von Tubus, zentralem Venenkatheter und Magensonde", s);
  })();

  // ---------- eFAST-Schallfenster ----------
  const SVG_FAST = (function () {
    let s = "";
    s += p("M110 20 Q90 24 84 60 L76 210 Q120 226 164 210 L156 60 Q150 24 130 20 Z", "flb", 0);
    s += c(120, 10, 10, "flb", 0);
    s += p("M86 140 Q120 128 154 140", "lnd", 0);
    const pos = [[1, 98, 66, 1], [2, 142, 66, 1], [3, 92, 128, 4], [4, 150, 120, 4], [5, 120, 104, 5], [6, 120, 192, 2]];
    pos.forEach(function (q) { s += c(q[1], q[2], 9, "fs", q[3]) + t(q[1], q[2] + 3.5, String(q[0]), "t-s", "middle").replace('class="t-s"', 'class="t-s pikto-z"'); });
    s += t(186, 30, ["1 + 2  Thorax vorn beidseits:", "Lungengleiten → Pneumothorax?"], "t-s", "start", 1);
    s += t(186, 70, ["3  rechts oben: Leber-Niere", "(Morison-Raum), rechter Pleuraspalt"], "t-s", "start", 4);
    s += t(186, 110, ["4  links oben: Milz-Niere,", "linker Pleuraspalt"], "t-s", "start", 4);
    s += t(186, 150, ["5  unter dem Xiphoid:", "Perikarderguss?"], "t-s", "start", 5);
    s += t(186, 190, ["6  Becken: hinter der Blase", "(Douglas-Raum)"], "t-s", "start", 2);
    s += t(4, 236, ["Freie Flüssigkeit ist schwarz (echofrei). Positiv und instabil → Blutungskontrolle", "im OP. Negativ schließt Retroperitoneum- und Hohlorganverletzung nicht aus –", "Untersuchung wiederholen."], "t-n");
    return F.svg(380, 272, "Schallfenster der erweiterten Notfallsonografie beim Trauma (eFAST)", s);
  })();

  // ---------- EKG bei Hyperkaliämie ----------
  const SVG_HYPERK = (function () {
    let s = "";
    function kurve(x0, y0, pts, k) { return F.sm(pts.map(function (q) { return [x0 + q[0], y0 - q[1]]; }), "lnb", k); }
    const stufen = [
      [["normal"], [[0, 0], [10, 0], [14, 5], [18, 0], [26, 0], [28, -4], [31, 34], [34, -8], [37, 0], [48, 0], [56, 9], [64, 0], [84, 0]], 0],
      [["spitzes, hohes T"], [[0, 0], [10, 0], [14, 4], [18, 0], [26, 0], [28, -4], [31, 32], [34, -8], [37, 0], [46, 0], [54, 28], [60, 0], [84, 0]], 3],
      [["P flach, PQ lang,", "QRS breit"], [[0, 0], [8, 0], [12, 1.5], [18, 0], [30, 0], [34, -4], [39, 24], [45, -10], [51, 0], [58, 0], [66, 26], [72, 0], [84, 0]], 4],
      [["Sinuswelle →", "Flimmern, Asystolie"], [[0, 0], [12, 20], [26, 0], [40, -20], [54, 0], [68, 20], [84, 0]], 5]
    ];
    stufen.forEach(function (st, i) {
      const x0 = 8 + i * 93, y0 = 70;
      s += l([[x0, y0], [x0 + 84, y0]], "lnd", 0) + kurve(x0, y0, st[1], st[2]);
      s += t(x0 + 42, 100, st[0], "t-n", "middle");
      if (i < 3) s += a(x0 + 86, 40, x0 + 92, 40, 0, "ln");
    });
    s += t(4, 14, "steigendes Kalium →", "t-l");
    s += t(4, 136, ["Die Reihenfolge ist nicht zuverlässig: Ein normales EKG schließt eine gefährliche", "Hyperkaliämie nicht aus. Bei EKG-Veränderungen sofort Calcium i.v. zur Membran-", "stabilisierung, dann Kalium in die Zellen verschieben."], "t-n");
    return F.svg(380, 172, "EKG-Veränderungen bei steigendem Kalium schematisch", s);
  })();

  window.SOE_TEIL2 = {
    profile: [
      { nr: 1, titel: "SOE 1 – Physiologie und Anatomie", zeit: "vormittags", inhalt: "Beginnt mit der Physiologie-Frage aus der Vorbereitung; alle Bereiche der Physiologie und Pathophysiologie.", pflicht: "mindestens eine Frage zur angewandten Anatomie", pflichtKurz: "Anatomie" },
      { nr: 2, titel: "SOE 2 – Pharmakologie und Messtechnik", zeit: "vormittags", inhalt: "Beginnt mit der Pharmakologie-Frage aus der Vorbereitung; angewandte Pharmakologie inkl. Statistik und Studienbewertung.", pflicht: "mindestens eine Frage zur klinischen Messtechnik", pflichtKurz: "Messtechnik" },
      { nr: 3, titel: "SOE 3 – Anästhesie und Zwischenfälle", zeit: "nachmittags", inhalt: "Beginnt mit dem Anästhesie-Szenario; danach z.B. Regionalanästhesie und spezielle Anästhesie (Kinder, Neuro, Herz, Geburtshilfe).", pflicht: "mindestens eine Frage zum Management eines Zwischenfalls", pflichtKurz: "Zwischenfall" },
      { nr: 4, titel: "SOE 4 – Intensiv- und Notfallmedizin", zeit: "nachmittags", inhalt: "Beginnt mit dem Intensiv-Szenario; dazu Innere Medizin, Notfallmedizin (Reanimation nach ERC, ABCDE) und allgemeine Themen.", pflicht: "Bildbefundung (Röntgen, Computertomographie, MRT, Ultraschall) sowie Befunde wie EKG oder Blutgasanalyse", pflichtKurz: "Bildbefund" }
    ],
    // Szenario → SOE, in der es im Prüfungstag als Einstiegsszenario dient
    slot: {
      "soe-ards-physio": 1, "soe-plexus-anat": 1, "soe-abg": 1, "soe-o2-angebot": 1, "soe-icp-physio": 1, "soe-hyperchlor": 1, "soe-mh-patho": 1,
      "soe-tiva-pk": 2, "soe-kapno-physik": 2, "soe-ebm-studie": 2, "soe-nmb-pharm": 2, "soe-restrelax": 2, "soe-zirrhose": 2, "soe-lowflow": 2, "soe-rotem": 2, "soe-addison-op": 2,
      "soe-khk-noncardiac": 3, "soe-difficult-airway": 3, "soe-pph": 3, "soe-last": 3, "soe-laryngospasm": 3, "soe-medication-error": 3, "soe-olv-hypoxie": 3,
      "soe-awake-craniotomy": 3, "soe-ltx-reperfusion": 3, "soe-phaeo": 3, "soe-myasthenie": 3, "soe-hueftfraktur": 3, "soe-schwangere-appendix": 3,
      "soe-adipositas": 3, "soe-mrt-kind": 3, "soe-haemophilie": 3, "soe-icd": 3, "soe-anaphylaxie": 3,
      "soe-septic-shock": 4, "soe-ethik": 4, "soe-kinder-ertrinken": 4, "soe-neugeborenes": 4, "soe-manv": 4, "soe-sglt2-dka": 4, "soe-lus-awr": 4
    },
    pflicht: [
      // ===== SOE 1: Anatomie =====
      { id: "p-interskalen", soe: 1, thema: "Interskalenäre Blockade", nicht: ["soe-plexus-anat"],
        frage: "Beschreiben Sie die Anatomie für eine interskalenäre Plexusblockade und die typischen Nebenwirkungen.",
        kern: [
          "Wurzeln bzw. Trunci C5–C7 liegen zwischen **M. scalenus anterior und medius**, im Ultraschall als „Ampelzeichen“ (hypoechogene Kreise).",
          "**N. phrenicus** (C3–5) läuft auf dem M. scalenus anterior → ==Lokalanästhetikum breitet sich aus → Phrenicus blockiert → ipsilaterale Zwerchfellparese== bei üblichen Volumina fast regelhaft; Vorsicht bei eingeschränkter Lungenfunktion.",
          "Weitere: Horner-Syndrom (Ganglion stellatum), Heiserkeit (N. laryngeus recurrens), intravasale Injektion (A. vertebralis), selten epidurale/spinale Ausbreitung, Pneumothorax.",
          "Gute Wirkung für Schulter und proximalen Oberarm; C8/Th1 (N. ulnaris) werden oft ausgespart."
        ], link: ["#/zeichnen-aufgabe/z-plexus", "Plexus brachialis zeichnen"] },
      { id: "p-ruecken", soe: 1, thema: "Rückenmarknahe Punktion",
        frage: "Welche Strukturen durchquert die Nadel beim medianen Zugang, und wie wählen Sie die Punktionshöhe für eine Spinalanästhesie?",
        kern: [
          "Haut, Subkutis → Lig. supraspinale → Lig. interspinale → **Lig. flavum** (Widerstandsverlust) → Epiduralraum → Dura → Arachnoidea → Subarachnoidalraum mit Liquor.",
          "**Conus medullaris** beim Erwachsenen meist L1/L2 (Spannweite etwa Th12–L3), beim Neugeborenen tiefer (etwa L3) → ==Punktion unterhalb des Conus, z.B. L3/4, vermeidet Rückenmarksverletzung==.",
          "Duralsack endet beim Erwachsenen etwa auf Höhe S2.",
          "Die Tuffier-Linie (Verbindung der Beckenkämme) schneidet etwa L4 oder L4/5 – sie wird oft um ein Segment zu hoch geschätzt; Ultraschall verbessert die Höhenbestimmung."
        ], link: ["#/zeichnen-aufgabe/z-ruecken", "Rückenschichten zeichnen"] },
      { id: "p-larynx", soe: 1, thema: "Kehlkopf und Innervation",
        frage: "Wie ist der Kehlkopf innerviert, und welche Folgen hat eine Verletzung des N. laryngeus recurrens?",
        kern: [
          "**N. laryngeus superior** (aus N. vagus): Ramus internus sensibel oberhalb der Stimmlippen; Ramus externus motorisch für den M. cricothyroideus (Stimmlippenspannung).",
          "**N. laryngeus recurrens**: alle übrigen inneren Kehlkopfmuskeln und Sensibilität unterhalb der Stimmlippen; links um den Aortenbogen, rechts um die A. subclavia.",
          "Einseitige Recurrensparese → Heiserkeit; ==beidseitige Parese → Stimmlippen in Paramedianstellung → enge Stimmritze → inspiratorischer Stridor, Atemnot== (z.B. nach Schilddrüsenoperation).",
          "N. glossopharyngeus: hinteres Zungendrittel und Vallecula (Würgereflex) – wichtig für die Oberflächenanästhesie bei wacher Intubation.",
          "Die **Membrana cricothyroidea** zwischen Schild- und Ringknorpel ist der Zugang für die Notfall-Koniotomie."
        ] },
      { id: "p-zvk-anatomie", soe: 1, thema: "V. jugularis interna",
        frage: "Beschreiben Sie die Anatomie der V. jugularis interna für die Anlage eines ZVK und wo die Katheterspitze liegen soll.",
        kern: [
          "Liegt in der Karotisscheide **lateral bzw. anterolateral der A. carotis communis**, mit dem N. vagus dahinter; Lage variiert → ultraschallgesteuerte Punktion.",
          "Rechts bevorzugt: kurzer, gerader Weg zur V. cava superior; links verläuft der Ductus thoracicus, Pleurakuppel beachten.",
          "Spitze in der unteren V. cava superior, oberhalb des rechten Vorhofs; im Röntgen ist die **Carina eine gute Landmarke** (Spitze etwa auf Carinahöhe).",
          "Komplikationen: arterielle Punktion, Pneumothorax, ==Luft gelangt bei Unterdruck in die Vene → Luftembolie== (Kopftieflage, Atemphasen), Rhythmusstörungen durch den Draht, Infektion, Thrombose."
        ] },
      { id: "p-koronar", soe: 1, thema: "Koronaranatomie",
        frage: "Beschreiben Sie die Versorgungsgebiete der Koronararterien und die passenden EKG-Ableitungen.",
        kern: [
          "**Linke Koronararterie** → RIVA (Vorderwand, vordere zwei Drittel des Septums; EKG V1–V4) und R. circumflexus (Seiten- und Hinterwand; I, aVL, V5–V6).",
          "**Rechte Koronararterie** → rechter Ventrikel, Hinterwand (inferior: II, III, aVF), Sinusknoten (etwa 60 %), AV-Knoten (bei Rechtsversorgung etwa 80–90 %) → ==RCA-Verschluss → AV-Knoten minderversorgt → Bradykardie, AV-Block==.",
          "Linker Ventrikel wird überwiegend in der **Diastole** durchblutet: koronarer Perfusionsdruck = diastolischer Aortendruck − LVEDP → Tachykardie und Hypotonie verschlechtern die Versorgung."
        ], link: ["#/zeichnen-aufgabe/z-wiggers", "Herzzyklus zeichnen"] },
      { id: "p-bronchien", soe: 1, thema: "Bronchialbaum und Doppellumentubus",
        frage: "Welche anatomischen Unterschiede zwischen rechtem und linkem Hauptbronchus sind für Intubation und Einlungenventilation wichtig?",
        kern: [
          "Rechter Hauptbronchus: **kürzer (etwa 2–2,5 cm), weiter und steiler** (etwa 25° zur Längsachse) → einseitige Intubation und Aspiration häufiger rechts.",
          "Rechter Oberlappenbronchus geht kurz nach der Carina ab (selten direkt aus der Trachea) → ==rechtsseitiger Doppellumentubus kann den Oberlappen leicht verlegen==.",
          "Linker Hauptbronchus: etwa 4,5–5 cm lang, Winkel etwa 45° → **linksseitiger Doppellumentubus bevorzugt** (größere Sicherheitsstrecke), auch für die meisten rechtsseitigen Eingriffe.",
          "Lage immer bronchoskopisch kontrollieren, auch nach Umlagerung."
        ] },
      { id: "p-leiste", soe: 1, thema: "Leiste und Femoralisblock",
        frage: "Beschreiben Sie die Anatomie der Leiste für eine Femoralis- oder Fascia-iliaca-Blockade bei Hüftfraktur.",
        kern: [
          "Von lateral nach medial: **N. femoralis – A. femoralis – V. femoralis** (Merkhilfe „NAVY“, Y = Lymphe/Leerraum).",
          "Der Nerv liegt **unter der Fascia iliaca** auf dem M. iliopsoas, außerhalb der Gefäßscheide → ==Lokalanästhetikum unter der Fascia iliaca breitet sich zu N. femoralis und N. cutaneus femoris lateralis aus==.",
          "Versorgt Oberschenkelvorderseite, Kniestrecker (Sturzgefahr bei Mobilisation) und über den N. saphenus die Innenseite des Unterschenkels.",
          "Hüftgelenkkapsel wird zusätzlich vom N. obturatorius versorgt (Grund für den perikapsulären Block)."
        ] },
      { id: "p-interkostal", soe: 1, thema: "Zwischenrippenraum und Thoraxdrainage",
        frage: "Wo legen Sie eine Thoraxdrainage an, und welche Anatomie schützt dabei die Gefäße und Nerven?",
        kern: [
          "Interkostalvene, -arterie und -nerv verlaufen von oben nach unten (**VAN**) im Sulcus am **Unterrand der Rippe** → ==am Oberrand der unteren Rippe eingehen → Gefäß-Nerven-Bündel wird geschont==.",
          "**Sicheres Dreieck**: vorderer Rand des M. latissimus dorsi, seitlicher Rand des M. pectoralis major, Linie auf Höhe der Mamille (etwa 5. Zwischenrippenraum), Spitze unter der Achsel.",
          "Stumpfe Präparation, Finger-Exploration, keine Trokar-Gewalt; Lagekontrolle klinisch und im Röntgen.",
          "Auch Interkostal- und Paravertebralblockaden nutzen diese Anatomie."
        ] },

      // ===== SOE 2: Messtechnik =====
      { id: "p-kapno", soe: 2, thema: "Kapnographie", nicht: ["soe-kapno-physik", "soe-lowflow"],
        frage: "Erklären Sie das Messprinzip der Kapnographie und was Sie aus der Kurve ablesen.",
        kern: [
          "**Infrarotabsorption** von CO₂ (um 4,3 µm) nach Lambert-Beer; Hauptstrom (Küvette am Tubus, schnell) oder Nebenstrom (Absaugung etwa 50–200 ml/min, Verzögerung, Wasserfalle).",
          "Phasen: Totraumgas ohne CO₂ → steiler Anstieg → alveoläres Plateau (Ende = etCO₂) → Inspiration.",
          "etCO₂ liegt normal wenige mmHg unter dem PaCO₂ (etwa 2–5 mmHg); ==mehr Totraum (Embolie, niedriges Herzzeitvolumen) → mehr Alveolen ohne Durchblutung → größere Differenz==.",
          "Plötzlich null: Diskonnektion, Fehlintubation (Ösophagus), Stillstand; schräges Plateau (Haifischflosse): Obstruktion; Basislinie hoch: Rückatmung (Atemkalk erschöpft, Ventil defekt)."
        ], link: ["#/zeichnen-aufgabe/z-capno", "Kapnogramm zeichnen"] },
      { id: "p-art", soe: 2, thema: "Invasive Blutdruckmessung",
        frage: "Wie funktioniert die invasive Blutdruckmessung, und wie erkennen Sie Fehler im System?",
        kern: [
          "Flüssigkeitssäule überträgt den Druck auf einen **Druckaufnehmer** (Dehnungsmessstreifen in Wheatstone-Brücke) → elektrisches Signal.",
          "**Nullabgleich** gegen Atmosphärendruck und Referenzhöhe auf **Vorhofniveau** (phlebostatische Achse: 4. Zwischenrippenraum, mittlere Axillarlinie); 10 cm Höhenfehler ≈ 7,5 mmHg.",
          "**Spültest** (Rechtecktest): optimal etwa 1,5–2 Nachschwingungen. ==Unterdämpfung → Überschwingen → systolischer Druck zu hoch==; Überdämpfung (Luftblasen, Knick, Gerinnsel) → systolischer Druck zu niedrig; Mitteldruck bleibt am stabilsten.",
          "Hohe Eigenfrequenz durch kurze, steife Leitungen ohne Luft."
        ], link: ["#/zeichnen-aufgabe/z-arterie", "Arterienkurve zeichnen"] },
      { id: "p-pulsox", soe: 2, thema: "Pulsoxymetrie",
        frage: "Wie misst ein Pulsoxymeter, und welche Fehlerquellen kennen Sie?",
        kern: [
          "Rotes (660 nm) und infrarotes (940 nm) Licht; Oxy-Hb absorbiert mehr Infrarot, Desoxy-Hb mehr Rot. Ausgewertet wird nur der **pulsierende Anteil**; das Verhältnis R wird über eine empirische Eichkurve in SpO₂ umgerechnet.",
          "**CO-Hb** → falsch hoch (wird wie Oxy-Hb gelesen); **Met-Hb** → Werte gegen etwa 85 %; Methylenblau → falsch niedrig.",
          "Schlechte Perfusion, Bewegung, Umgebungslicht, Nagellack stören; ==dunkle Hautpigmentierung → Sättigung wird überschätzt → verdeckte Hypoxämie==.",
          "Unter Sauerstoffgabe kein Maß für die Ventilation: Hypoventilation fällt spät auf."
        ], link: ["#/zeichnen-aufgabe/z-pulsox", "Pulsoxymetrie zeichnen"] },
      { id: "p-tof", soe: 2, thema: "Neuromuskuläres Monitoring", nicht: ["soe-restrelax", "soe-nmb-pharm"],
        frage: "Wie überwachen Sie die neuromuskuläre Blockade, und wann ist eine Extubation sicher?",
        kern: [
          "**TOF**: 4 Reize mit 2 Hz am N. ulnaris (M. adductor pollicis); TOF-Ratio = 4./1. Antwort.",
          "Extubation erst bei **quantitativ gemessener TOF-Ratio ≥ 0,9**; taktile Beurteilung erkennt Restblockaden nicht zuverlässig.",
          "Nicht depolarisierende Relaxanzien → Ermüdung (Fade); Succinylcholin (Phase I) → gleichmäßig verminderte Antworten ohne Fade.",
          "Tiefe Blockade: **Post-Tetanic Count** (Tetanus 50 Hz, dann Einzelreize).",
          "Zwerchfell und Kehlkopfmuskeln sind resistenter als der Daumen (früherer Wirkeintritt und frühere Erholung) → ==Erholung am Daumen bedeutet meist auch Erholung des Zwerchfells; die Rachenmuskeln bleiben aber empfindlich → Aspirationsgefahr bei Restblockade==."
        ], link: ["#/zeichnen-aufgabe/z-tof", "TOF zeichnen"] },
      { id: "p-temp", soe: 2, thema: "Temperaturmessung",
        frage: "Wie messen Sie die Körperkerntemperatur, und welche Messprinzipien gibt es?",
        kern: [
          "Kernorte: **Pulmonalarterie** (Referenz), distaler Ösophagus, Nasopharynx, Harnblase (träge bei wenig Urin), Trommelfell.",
          "**Thermistor**: Halbleiter, Widerstand ändert sich stark und nicht linear mit der Temperatur; **Thermoelement**: Spannung an der Verbindung zweier Metalle (Seebeck-Effekt); Platin-Widerstandsthermometer: linear; Infrarot: Wärmestrahlung.",
          "Hypothermie < 36 °C → ==Gerinnung und Thrombozytenfunktion ↓, Wundinfektionen ↑, Medikamentenwirkung verlängert, Kältezittern steigert den O₂-Verbrauch==.",
          "Größter Abfall in der ersten Stunde durch **Umverteilung** von Kern zu Peripherie → aktiv vorwärmen."
        ] },
      { id: "p-hzv", soe: 2, thema: "Herzzeitvolumen messen",
        frage: "Welche Methoden zur Messung des Herzzeitvolumens kennen Sie, und worauf beruhen sie?",
        kern: [
          "**Fick-Prinzip**: HZV = O₂-Verbrauch / (arterieller − gemischtvenöser O₂-Gehalt).",
          "**Thermodilution** (Stewart-Hamilton): kalter Bolus, Temperaturkurve stromabwärts; ==großes HZV → Kälte schnell verdünnt → kleine Fläche unter der Kurve==. Fehler: Trikuspidalinsuffizienz, intrakardiale Shunts, falsches Volumen oder Temperatur des Injektats.",
          "**Pulskonturanalyse**: Schlagvolumen aus der Arterienkurve; kalibriert (z.B. transpulmonale Thermodilution) zuverlässiger.",
          "**Doppler-Echokardiographie**: Schlagvolumen = Geschwindigkeits-Zeit-Integral × Fläche des linksventrikulären Ausflusstrakts."
        ] },
      { id: "p-verdampfer", soe: 2, thema: "Verdampfer",
        frage: "Wie funktioniert ein Verdampfer, und warum braucht Desfluran einen besonderen?",
        kern: [
          "**Bypass-Verdampfer**: Frischgas teilt sich in Bypass und Verdampferkammer (gesättigter Dampf); das Einstellrad regelt das Teilungsverhältnis; Temperaturkompensation über Bimetall bzw. Dehnelement.",
          "Desfluran siedet bei etwa **23 °C** → bei Raumtemperatur instabil → ==beheizter, unter Druck stehender Verdampfer (39 °C, etwa 2 bar) dosiert das Gas direkt==.",
          "Bypass-Verdampfer liefern einen konstanten **Partialdruck** – in der Höhe passt die Wirkung; der Desfluranverdampfer liefert konstante Vol.-% → ==in der Höhe niedrigerer Partialdruck → Einstellung erhöhen==.",
          "Sicherheit: substanzspezifische Füllsysteme, Verriegelung (nur ein Verdampfer offen), Gasanalyse."
        ] },
      { id: "p-strom", soe: 2, thema: "Elektrische Sicherheit",
        frage: "Was unterscheidet Makro- und Mikroschock, und wie schützt die Gerätetechnik den Patienten?",
        kern: [
          "**Makroschock** über die Haut: ab etwa 1 mA spürbar, etwa 100 mA können Kammerflimmern auslösen.",
          "**Mikroschock** direkt am Herzen (Schrittmacherdraht, flüssigkeitsgefüllter Katheter): schon etwa 100 µA (Literatur 50–100 µA) können Kammerflimmern auslösen.",
          "Schutzklasse I: Schutzleiter; II: doppelte Isolierung. Anwendungsteile B (Body), BF (Body Floating), **CF** (Cardiac Floating, für direkten Herzkontakt, Patientenableitstrom höchstens 10 µA, im ersten Fehlerfall 50 µA).",
          "Monopolare Diathermie: ==schlechter Kontakt der Neutralelektrode → hohe Stromdichte → Verbrennung==; bei Schrittmacher/ICD bipolar, ICD-Therapie vorher anpassen."
        ] },

      // ===== SOE 3: Zwischenfälle =====
      { id: "p-anaphylaxie", soe: 3, thema: "Anaphylaxie", nicht: ["soe-anaphylaxie"],
        frage: "Nach Antibiotikagabe fallen Blutdruck und Sättigung, die Beatmungsdrücke steigen. Wie gehen Sie vor?",
        kern: [
          "Hilfe rufen, Auslöser stoppen, **100 % O₂**, Atemweg sichern, Beine hoch.",
          "**Adrenalin**: bei Monitoring i.v. in Boli von 50 µg (Erwachsene) titrieren; ohne Zugang 0,5 mg i.m.; bei Bedarf als Infusion.",
          "Volumen großzügig (etwa 20 ml/kg Kristalloid, wiederholt); bei Kreislaufstillstand Reanimation nach dem ALS-Algorithmus (Advanced Life Support).",
          "Antihistaminika und Steroide sind nachrangig. Unter β-Blocker: Glukagon erwägen.",
          "**Tryptase**: so früh wie möglich, nach 1–2 h und nach ≥ 24 h (Ausgangswert); allergologische Abklärung, Meldung, Patient informieren."
        ], link: ["#/algorithm/anaphylaxie", "Algorithmus Anaphylaxie"] },
      { id: "p-mh", soe: 3, thema: "Maligne Hyperthermie",
        frage: "Unter Sevofluran steigen etCO₂ und Herzfrequenz unerklärt an. Ihr Vorgehen?",
        kern: [
          "Verdacht aussprechen, Hilfe holen, **Trigger stoppen** (Volatilum aus, Aktivkohlefilter, Frischgas O₂ ≥ 10 l/min), TIVA weiter.",
          "**Dantrolen 2,5 mg/kg i.v.**, wiederholen bis die Zeichen abklingen (meist bis 10 mg/kg, ggf. mehr).",
          "==Ungehemmte Calciumfreisetzung im Muskel → Hypermetabolismus → CO₂ ↑, Azidose, Hyperkaliämie, Fieber, Rhabdomyolyse==.",
          "Kühlen, Hyperkaliämie behandeln (Insulin-Glukose, Calcium), Rhythmusstörungen ohne Calciumkanalblocker, Diurese fördern; Intensivstation, Testung der Familie."
        ], link: ["#/algorithm/maligne-hyperthermie", "Algorithmus MH"] },
      { id: "p-last", soe: 3, thema: "LAST", nicht: ["soe-last"],
        frage: "Kurz nach einer Plexusblockade krampft der Patient und wird bradykard. Wie behandeln Sie?",
        kern: [
          "Injektion stoppen, Hilfe, Atemweg und **100 % O₂**, Krampf mit Benzodiazepin (alternativ kleine Dosen Propofol oder Thiopental).",
          "**Lipidemulsion 20 %**: 1,5 ml/kg Bolus über etwa 1 min, dann 15 ml/kg/h; bis zu 2 weitere Boli im Abstand von 5 min, Infusion auf 30 ml/kg/h steigern; Höchstdosis 12 ml/kg.",
          "Reanimation ggf. lange fortführen; **Adrenalin in kleinen Dosen** (≤ 1 µg/kg); kein Vasopressin, keine Calciumkanal- oder β-Blocker, kein weiteres Lokalanästhetikum.",
          "==Lipid bindet das fettlösliche Lokalanästhetikum → weniger freies Medikament am Herzen== (zusätzlich Stoffwechsel- und Kreislaufeffekte)."
        ], link: ["#/algorithm/last", "Algorithmus LAST"] },
      { id: "p-cico", soe: 3, thema: "Kann nicht intubieren, kann nicht oxygenieren", nicht: ["soe-difficult-airway"],
        frage: "Nach Narkoseeinleitung gelingt weder Intubation noch Maskenbeatmung noch Larynxmaske. Was tun Sie?",
        kern: [
          "Lage laut benennen („kann nicht intubieren, kann nicht oxygenieren“), Hilfe, 100 % O₂ über obere Atemwege weiter.",
          "**Vollständige Relaxierung** sicherstellen, Kopf überstrecken.",
          "**Koniotomie mit Skalpell, Bougie und Tubus** (6,0 mm mit Cuff) durch die Membrana cricothyroidea; nicht tastbar → senkrechter Hautschnitt, stumpf präparieren.",
          "==Jeder weitere Intubationsversuch kostet Zeit → Hypoxie → Bradykardie und Stillstand== – Entscheidung früh treffen.",
          "Danach Lagekontrolle mit Kapnographie, Dokumentation, Nachbesprechung."
        ], link: ["#/algorithm/schwieriger-atemweg", "Algorithmus schwieriger Atemweg"] },
      { id: "p-hohe-spinale", soe: 3, thema: "Hohe Spinalanästhesie",
        frage: "Nach einer Spinalanästhesie zur Sectio klagt die Patientin über Atemnot und kribbelnde Hände, der Blutdruck fällt. Ihr Vorgehen?",
        kern: [
          "Zeichen einer hohen Ausbreitung: Hypotonie, Bradykardie (Th1–4, kardioakzelerierende Fasern), Armschwäche, Atemnot, Sprechschwäche, Bewusstseinsverlust.",
          "Atemweg, Atmung, Kreislauf: O₂, **Uterus nach links verlagern**, Vasopressor (Phenylephrin, Noradrenalin bzw. Ephedrin), Atropin bei Bradykardie, bei Stillstand Adrenalin.",
          "Ateminsuffizienz oder Bewusstlosigkeit → **Intubation** (Aspirationsschutz), Beatmung bis die Blockade abklingt.",
          "Kind entwickeln, wenn die Mutter nicht stabilisiert werden kann; Neonatologie informieren."
        ] },
      { id: "p-bronchospasmus", soe: 3, thema: "Bronchospasmus",
        frage: "Nach der Intubation steigen die Beatmungsdrücke, das Kapnogramm wird schräg, die Sättigung fällt. Ihr Vorgehen?",
        kern: [
          "Differenzialdiagnosen: Tubusfehllage oder -knick, zu flache Narkose, Anaphylaxie, Aspiration, Pneumothorax.",
          "**FiO₂ 1,0**, Narkose vertiefen (Volatilum, Propofol, Ketamin), **Salbutamol** inhalativ über den Tubus.",
          "Schwer: Adrenalin (titriert), Magnesium (etwa 2 g i.v. über 20 min beim Erwachsenen).",
          "Beatmung: niedrige Frequenz, **lange Exspiration**, Hyperkapnie tolerieren; ==zu kurze Ausatmung → Luft bleibt gefangen → Auto-PEEP → Kreislauf bricht ein== → kurz diskonnektieren."
        ] },
      { id: "p-luftembolie", soe: 3, thema: "Venöse Luftembolie",
        frage: "Bei einer Operation in sitzender Position fallen plötzlich etCO₂ und Blutdruck ab. Woran denken Sie, und was tun Sie?",
        kern: [
          "Verdacht: **Luftembolie** – OP-Gebiet liegt über dem Herzen, offene Venen saugen Luft an.",
          "Chirurg informieren: **Gebiet fluten bzw. abdecken**, Wachs auf Knochen; OP-Gebiet tiefer lagern.",
          "FiO₂ 1,0, Lachgas stoppen, **Luft über den ZVK aspirieren** (Spitze am Übergang V. cava superior/Vorhof); Kreislauf mit Volumen und Vasopressoren, ggf. Reanimation.",
          "==Luft im rechten Herzen bzw. in der Lungenstrombahn → Totraum ↑ → etCO₂ fällt; Druck im Lungenkreislauf ↑ → Rechtsherzversagen==; bei offenem Foramen ovale paradoxe Embolie."
        ] },
      { id: "p-hypoxie-op", soe: 3, thema: "Hypoxämie unter Beatmung",
        frage: "Unter Allgemeinanästhesie fällt die Sättigung auf 85 %. Wie gehen Sie strukturiert vor?",
        kern: [
          "**FiO₂ 1,0**, Hilfe, Handbeatmung mit dem Beutel (schließt Gerätefehler aus, gibt Gefühl für die Compliance).",
          "Merkhilfe **DOPES**: Dislokation des Tubus, Obstruktion (Sekret, Knick), Pneumothorax, Equipment (Gerät, Schläuche, O₂-Versorgung), Stacking (Auto-PEEP).",
          "Kapnographie, Auskultation, Beatmungsdrücke; Absaugen, Bronchoskopie.",
          "Weitere Ursachen: Atelektasen (Rekrutierung, PEEP), Bronchospasmus, Aspiration, Lungenödem, Lungenembolie, niedriges Herzzeitvolumen.",
          "==Sauerstoffreserve der Lunge (FRC) ist in Narkose kleiner → Sättigung fällt schnell==."
        ] },

      // ===== SOE 4: Bildbefund =====
      { id: "p-roe-thorax", soe: 4, thema: "Röntgen-Thorax auf der Intensivstation", svg: SVG_RXT,
        frage: "Befunden Sie systematisch ein Röntgenbild des Thorax eines beatmeten Patienten.",
        kern: [
          "Rahmen: Patient, Datum, Aufnahmeart (liegend a.-p.), Qualität (Rotation, Inspiration, Belichtung).",
          "**Fremdmaterial zuerst**: Tubusspitze etwa 5 ± 2 cm über der Carina; ZVK-Spitze in der unteren V. cava superior (Carina als Landmarke); Magensonde mittig, Spitze unter dem linken Zwerchfell; Drainagen, Elektroden.",
          "Dann **ABCDE**: Atemweg (Trachea mittig?), Lunge (Infiltrat, Erguss, Pneumothorax), Herz und Mediastinum, Zwerchfell (freie Luft?), alles Übrige (Knochen, Weichteile).",
          "Liegend: ==Luft steigt nach vorn → Pneumothorax als tiefer, heller Sinus statt Spalt an der Spitze==; Erguss als homogener Schleier.",
          "Befund immer mit Vorbild und Klinik vergleichen."
        ] },
      { id: "p-lus-ptx", soe: 4, thema: "Lungenultraschall: Pneumothorax", svg: SVG_LUS, nicht: ["soe-lus-awr"],
        frage: "Wie schließen Sie mit Ultraschall einen Pneumothorax aus oder weisen ihn nach?",
        kern: [
          "Linearer oder Konvex-Schallkopf vorn, höchster Punkt des Thorax beim liegenden Patienten.",
          "**Lungengleiten** (im M-Mode „Seashore“) oder **B-Linien** an der Sonde → dort kein Pneumothorax.",
          "Kein Gleiten + nur A-Linien (M-Mode „Barcode“) → Verdacht; ==Lungenpunkt (Übergang von Gleiten zu Nichtgleiten) → beweisend==.",
          "Fehlendes Gleiten auch bei Intubation eines Hauptbronchus, Pleuraverklebung, Apnoe.",
          "**Spannungspneumothorax** ist eine klinische Diagnose → sofort entlasten, nicht auf Bildgebung warten."
        ] },
      { id: "p-lus-blinien", soe: 4, thema: "Lungenultraschall: B-Linien und Erguss", svg: SVG_LUS, nicht: ["soe-lus-awr"],
        frage: "Ein beatmeter Patient wird hypoxisch. Was können Ihnen B-Linien, Konsolidierungen und Erguss im Ultraschall sagen?",
        kern: [
          "**≥ 3 B-Linien je Zwischenrippenraum** = interstitielles Syndrom (mehr Wasser im Interstitium).",
          "Beidseits gleichmäßig, glatte Pleuralinie → eher **kardiales Lungenödem**; fleckig, unregelmäßige Pleura, ausgesparte Areale, Konsolidierungen → eher **ARDS oder Pneumonie**.",
          "Konsolidierung: leberähnliches Gewebe, bewegliches Luftbronchogramm spricht für Pneumonie.",
          "Erguss: echofreier Raum über dem Zwerchfell, Lunge bewegt sich darin; Menge abschätzbar.",
          "==Ursache erkannt → gezielte Therapie== (Diuretika, PEEP, Drainage, Antibiotika)."
        ] },
      { id: "p-cct", soe: 4, thema: "Schädel-CT beim Trauma", svg: SVG_CCT,
        frage: "Beschreiben Sie, wie Sie Epiduralhämatom, Subduralhämatom und Subarachnoidalblutung in der Computertomographie (CT) unterscheiden, und was daraus folgt.",
        kern: [
          "**Epidural**: bikonvex, scharf begrenzt, überschreitet keine Schädelnähte, meist arteriell (A. meningea media) mit Fraktur; klassisch freies Intervall.",
          "**Subdural**: sichelförmig, kann Nähte überschreiten, nicht die Falx; Brückenvenen, ältere Patienten unter Antikoagulation.",
          "**Subarachnoidal**: Blut in basalen Zisternen, Sylvischer Fissur, Furchen; Aneurysma oder Trauma.",
          "Hirndruckzeichen: Mittellinienverlagerung, verstrichene Furchen, enge Zisternen → ==Raumforderung → Hirndruck ↑ → zerebraler Perfusionsdruck ↓== → Neurochirurgie, Ziel-CPP, Normokapnie.",
          "Raumfordernde Hämatome → dringliche Entlastung."
        ], link: ["#/zeichnen-aufgabe/z-icp", "Druck-Volumen-Kurve des Schädels"] },
      { id: "p-efast", soe: 4, thema: "eFAST beim Polytrauma", svg: SVG_FAST,
        frage: "Welche Schallfenster untersuchen Sie bei der eFAST, und welche Konsequenz hat ein positiver Befund?",
        kern: [
          "Rechter Oberbauch (Leber-Niere, Morison-Raum), linker Oberbauch (Milz-Niere), Becken (hinter der Blase), unter dem Xiphoid (Perikard), Thorax vorn beidseits (Pneumothorax) und Pleuraspalten (Hämatothorax).",
          "Freie Flüssigkeit ist **echofrei (schwarz)**.",
          "==Positiv + hämodynamisch instabil → Blutungsquelle gefunden → direkt in den OP bzw. zur Blutungskontrolle==.",
          "Negativ schließt retroperitoneale Blutung und Hohlorganverletzung nicht aus → wiederholen, CT bei Stabilität."
        ] },
      { id: "p-ekg-k", soe: 4, thema: "EKG bei Hyperkaliämie", svg: SVG_HYPERK,
        frage: "Ein Dialysepatient hat ein auffälliges EKG. Beschreiben Sie typische Veränderungen bei Hyperkaliämie und die Therapie.",
        kern: [
          "Mit steigendem Kalium: **hohe, spitze T-Wellen** → PQ-Verlängerung, P flach oder fehlend → **QRS-Verbreiterung** → Sinuswellen → Kammerflimmern, Asystolie oder Bradykardie.",
          "Reihenfolge nicht zuverlässig; normales EKG schließt Gefahr nicht aus.",
          "**Calcium i.v.** (z.B. 10 ml Calciumchlorid 10 %) bei EKG-Veränderungen → ==stabilisiert die Membran sofort, senkt Kalium aber nicht==.",
          "Kalium in die Zelle: Insulin (10 IE) mit Glukose (25 g), Salbutamol inhalativ; Natriumbicarbonat bei Azidose.",
          "Entfernen: Dialyse, Diuretika, Kaliumbinder; Ursache und Auslöser stoppen."
        ], link: ["#/zeichnen-aufgabe/z-ekg", "EKG-Komplex zeichnen"] },
      { id: "p-bga", soe: 4, thema: "Blutgasanalyse befunden", nicht: ["soe-abg", "soe-hyperchlor"],
        frage: "Interpretieren Sie eine Blutgasanalyse systematisch.",
        kern: [
          "1. **pH**: Azidose oder Alkalose? 2. **Primärstörung**: passt PaCO₂ (respiratorisch) oder HCO₃⁻ (metabolisch) zur Richtung?",
          "3. **Kompensation**: bei metabolischer Azidose erwarteter PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2 mmHg (Winters); weicht er ab → zusätzliche respiratorische Störung.",
          "4. **Anionenlücke** = Na⁺ − (Cl⁻ + HCO₃⁻), normal etwa 8–12 mmol/l; für niedriges Albumin korrigieren (etwa +2,5 je 10 g/l unter 40 g/l).",
          "5. **Delta-Verhältnis** (Anstieg der Lücke / Abfall des HCO₃⁻): < 1 zusätzlich hyperchlorämische Azidose, > 2 zusätzlich metabolische Alkalose.",
          "6. **Oxygenierung**: PaO₂/FiO₂ (ARDS ≤ 300 mmHg unter PEEP ≥ 5); dazu Laktat, Elektrolyte, Glukose."
        ], link: ["#/rechnen", "Rechenaufgaben"] },
      { id: "p-focus", soe: 4, thema: "Notfall-Echokardiographie im Schock",
        frage: "Ein Patient ist im Schock. Was kann Ihnen eine fokussierte Echokardiographie zeigen?",
        kern: [
          "**Perikardtamponade**: Erguss, diastolischer Kollaps des rechten Ventrikels bzw. systolischer Kollaps des rechten Vorhofs, gestaute V. cava inferior ohne Atemvariabilität.",
          "**Rechtsherzbelastung** (z.B. Lungenembolie): RV größer als LV, abgeflachtes Septum (D-Form), eingeschränkte RV-Funktion.",
          "**Linksherzversagen**: großer, schlecht kontrahierender LV.",
          "**Hypovolämie**: kleiner, hyperdynamer LV (Wände berühren sich in der Systole), kleine V. cava inferior, die beim spontan atmenden Patienten kollabiert.",
          "==Schockform erkannt → gezielte Therapie== (Punktion, Lyse, Inotropika, Volumen)."
        ] }
    ]
  };
})();
