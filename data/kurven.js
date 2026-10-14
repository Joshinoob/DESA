// Kurven-Quiz: schematische, eigens generierte SVG-Kurven (Kapnographie, arterielle Druckkurve,
// EKG, Beatmungs-/Spirometriekurven). Schemata zur Mustererkennung – keine echten Patientendaten,
// Amplituden und Zeitachsen vereinfacht. Darstellung nutzt die .sw-fig-Klassen aus style.css.
(function () {
  const W = 600, H = 170, L = 34, R = 590, T = 12, B = 150;

  function frame(inner, yLabels, xLabel) {
    let g = "";
    for (let i = 0; i <= 4; i++) {
      const y = T + (B - T) * i / 4;
      g += '<path class="grid" d="M' + L + " " + y.toFixed(1) + " L" + R + " " + y.toFixed(1) + '"/>';
    }
    let lab = "";
    (yLabels || []).forEach(function (t, i, arr) {
      const y = T + (B - T) * i / (arr.length - 1);
      lab += '<text class="t-s" x="2" y="' + (y + 3).toFixed(1) + '">' + t + "</text>";
    });
    if (xLabel) lab += '<text class="t-s" text-anchor="end" x="' + R + '" y="' + (H - 2) + '">' + xLabel + "</text>";
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Schematische Kurve">' + g +
      '<path class="ax" d="M' + L + " " + T + " L" + L + " " + B + " L" + R + " " + B + '"/>' + inner + lab + "</svg>";
  }
  function path(pts, cls) {
    return '<path class="' + (cls || "c1") + '" d="' + pts.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ") + '"/>';
  }
  // Wert (min..max) → y-Koordinate
  function sy(v, min, max) { return B - (v - min) / (max - min) * (B - T); }

  // ---------- Kapnographie ----------
  // Atemzug: {base, peak, slow (Haifischflosse), cleft (Curare-Kerbe), len}
  function capno(breaths, opts) {
    opts = opts || {};
    const max = 60, pts = [];
    let x = L + 4;
    const unit = (R - L - 8) / breaths.reduce(function (s, b) { return s + (b.len || 1); }, 0);
    breaths.forEach(function (b) {
      const w = unit * (b.len || 1), base = b.base || 0, pk = b.peak;
      const insp = w * 0.38, rise = b.slow ? w * 0.5 : w * 0.06;
      pts.push([x, sy(base, 0, max)]);
      pts.push([x + insp, sy(base, 0, max)]);
      if (pk <= base) { x += w; return; }
      if (b.slow) {
        for (let i = 1; i <= 10; i++) {
          const f = i / 10;
          pts.push([x + insp + rise * f, sy(base + (pk - base) * (1 - Math.pow(1 - f, 2.2)), 0, max)]);
        }
      } else {
        pts.push([x + insp + rise, sy(base + (pk - base) * 0.92, 0, max)]);
      }
      const plStart = x + insp + rise, plEnd = x + w * 0.94;
      if (b.cleft) {
        const mid = (plStart + plEnd) / 2;
        pts.push([mid - 10, sy(pk * 0.96, 0, max)]);
        pts.push([mid, sy(pk * 0.7, 0, max)]);
        pts.push([mid + 10, sy(pk * 0.97, 0, max)]);
      }
      if (!b.slow) pts.push([plEnd, sy(pk, 0, max)]);
      else pts.push([plEnd, sy(pk, 0, max)]);
      pts.push([x + w, sy(base, 0, max)]);
      x += w;
    });
    return frame(path(pts), ["60", "45", "30", "15", "0"], "Zeit → (CO₂ mmHg)");
  }
  function rep(n, b) { const a = []; for (let i = 0; i < n; i++) a.push(Object.assign({}, b)); return a; }

  // ---------- Arterielle Kurve ----------
  function art(beats) {
    const min = 0, max = 200, pts = [];
    let x = L + 4;
    const unit = (R - L - 8) / beats.length;
    beats.forEach(function (b) {
      const w = unit, s = b.sys, d = b.dia;
      const up = b.slowUp ? w * 0.32 : w * 0.1;
      pts.push([x, sy(d, min, max)]);
      if (b.slowUp) {
        pts.push([x + up * 0.4, sy(d + (s - d) * 0.6, min, max)]);
        pts.push([x + up * 0.5, sy(d + (s - d) * 0.55, min, max)]); // anakrote Kerbe
        pts.push([x + up, sy(s, min, max)]);
        pts.push([x + w * 0.55, sy(d + (s - d) * 0.55, min, max)]);
      } else if (b.ring) {
        pts.push([x + up, sy(s, min, max)]);
        pts.push([x + up + 6, sy(s - (s - d) * 0.55, min, max)]);
        pts.push([x + up + 12, sy(s - (s - d) * 0.2, min, max)]);
        pts.push([x + up + 18, sy(s - (s - d) * 0.6, min, max)]);
        pts.push([x + up + 24, sy(s - (s - d) * 0.42, min, max)]);
        pts.push([x + w * 0.5, sy(d + (s - d) * 0.45, min, max)]);
      } else if (b.damped) {
        for (let i = 1; i <= 8; i++) {
          const f = i / 8;
          pts.push([x + w * 0.35 * f, sy(d + (s - d) * Math.sin(f * Math.PI / 2), min, max)]);
        }
      } else {
        pts.push([x + up, sy(s, min, max)]);
        pts.push([x + w * 0.3, sy(d + (s - d) * 0.75, min, max)]);
        pts.push([x + w * 0.38, sy(d + (s - d) * 0.5, min, max)]);   // dikrote Inzisur
        pts.push([x + w * 0.42, sy(d + (s - d) * 0.58, min, max)]);
      }
      pts.push([x + w, sy(d, min, max)]);
      x += w;
    });
    return frame(path(pts), ["200", "150", "100", "50", "0"], "Zeit → (mmHg)");
  }

  // ---------- EKG ----------
  // Schlag-Template ab Position x mit Breite w (Pixel). Optionen: p, qrsW (Anteil), rAmp, sAmp, tAmp, st, pOnly
  function beat(pts, x, w, o) {
    const base = 0, mV = function (v) { return sy(v, -1.5, 2.5); };
    o = o || {};
    const pW = w * 0.09, pr = w * 0.07, qrs = w * (o.qrsW || 0.08), st = w * 0.1, tW = w * (o.tW || 0.16);
    let cx = x;
    pts.push([cx, mV(base)]);
    if (o.p !== false) {
      for (let i = 1; i <= 6; i++) pts.push([cx + pW * i / 6, mV(0.15 * Math.sin(Math.PI * i / 6))]);
      cx += pW;
      pts.push([cx + pr, mV(0)]);
      cx += pr;
    } else { cx += pW + pr; pts.push([cx, mV(0)]); }
    if (o.pOnly) return;
    pts.push([cx + qrs * 0.15, mV(-0.15)]);
    pts.push([cx + qrs * 0.45, mV(o.rAmp || 1.6)]);
    pts.push([cx + qrs * 0.8, mV(-(o.sAmp || 0.35))]);
    pts.push([cx + qrs, mV(o.st || 0)]);
    cx += qrs;
    pts.push([cx + st, mV(o.st || 0)]);
    cx += st;
    const tA = o.tAmp === undefined ? 0.35 : o.tAmp;
    for (let i = 1; i <= 8; i++) {
      const f = i / 8;
      const shape = o.peakedT ? (f < 0.5 ? f * 2 : (1 - f) * 2) : Math.sin(Math.PI * f);
      pts.push([cx + tW * f, mV((o.st || 0) * (1 - f) + tA * shape)]);
    }
  }
  function ekgRegular(n, o, extra) {
    const pts = [];
    const w = (R - L - 8) / n;
    for (let i = 0; i < n; i++) beat(pts, L + 4 + i * w, w, Object.assign({}, o, extra ? extra(i) : {}));
    pts.push([R - 2, sy(0, -1.5, 2.5)]);
    return frame(path(pts), ["", "", "", "", ""], "Zeit →");
  }
  function ekgFunc(f, samples) {
    const pts = [];
    const n = samples || 300;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      pts.push([L + 4 + t * (R - L - 8), sy(f(t), -1.5, 2.5)]);
    }
    return frame(path(pts), ["", "", "", "", ""], "Zeit →");
  }
  function seeded(seed) { let s = seed; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

  function ekgAF() {
    const rnd = seeded(7), pts = [];
    let x = L + 4;
    const gaps = [0.7, 1.15, 0.8, 1.35, 0.9, 0.65, 1.2];
    const unit = (R - L - 8) / gaps.reduce(function (a, b) { return a + b; }, 0);
    gaps.forEach(function (g) {
      const w = unit * g;
      // Flimmerwellen statt P
      for (let i = 0; i < 6; i++) pts.push([x + w * 0.15 * i / 6, sy(0.08 * Math.sin(i * 2.3) + (rnd() - 0.5) * 0.06, -1.5, 2.5)]);
      const sub = [];
      beat(sub, x, Math.min(w, unit * 1.0), { p: false });
      sub.forEach(function (p) { pts.push(p); });
      const end = x + w;
      for (let xx = sub[sub.length - 1][0]; xx < end; xx += 6) pts.push([xx, sy(0.07 * Math.sin(xx / 3.1) + (rnd() - 0.5) * 0.05, -1.5, 2.5)]);
      x = end;
    });
    return frame(path(pts), ["", "", "", "", ""], "Zeit →");
  }
  function ekgFlutter() {
    // Sägezahn ca. 300/min, Überleitung 4:1
    return ekgFunc(function (t) {
      const saw = -0.25 * ((t * 20) % 1) + 0.12;
      const ph = (t * 5) % 1;
      const qrs = ph > 0.1 && ph < 0.14 ? (ph < 0.12 ? 1.5 * (ph - 0.1) / 0.02 : 1.5 - 1.8 * (ph - 0.12) / 0.02) : 0;
      return saw + qrs;
    }, 600);
  }
  function ekgAVB3() {
    // Vorhöfe (P, ca. 90/min) und Kammer-Ersatzrhythmus (breite QRS, ca. 35/min) laufen
    // unabhängig; als Summe glatter Teilfunktionen gezeichnet, damit sich überlagernde
    // Wellen nicht zu einem Zickzack verknoten.
    function g(t, c, w, a) { return a * Math.exp(-Math.pow((t - c) / w, 2)); }
    return ekgFunc(function (t) {
      let v = 0;
      for (let k = 0; k < 10; k++) v += g(t, 0.03 + k * 0.105, 0.011, 0.28);
      for (let k = 0; k < 4; k++) {
        const c = 0.1 + k * 0.27;
        v += g(t, c - 0.018, 0.01, -0.3) + g(t, c, 0.02, 1.3) + g(t, c + 0.03, 0.016, -0.6) + g(t, c + 0.1, 0.035, -0.35);
      }
      return v;
    }, 900);
  }

  // ---------- Beatmung / Spirometrie ----------
  function flowTime(autoPeep) {
    const pts = [], min = -60, max = 60;
    let x = L + 4;
    const n = 4, w = (R - L - 8) / n;
    for (let i = 0; i < n; i++) {
      pts.push([x, sy(0, min, max)]);
      pts.push([x + 2, sy(40, min, max)]);
      pts.push([x + w * 0.3, sy(40, min, max)]);
      pts.push([x + w * 0.3 + 2, sy(-50, min, max)]);
      const endFlow = autoPeep ? -18 : 0;
      for (let k = 1; k <= 10; k++) {
        const f = k / 10;
        const v = autoPeep ? -50 + (50 + endFlow) * (1 - Math.exp(-f * 1.6)) / (1 - Math.exp(-1.6)) : -50 * Math.exp(-f * 5);
        pts.push([x + w * 0.3 + 2 + (w * 0.7 - 2) * f, sy(v, min, max)]);
      }
      if (autoPeep) pts.push([x + w, sy(0, min, max)]);
      x += w;
    }
    return frame(path(pts), ["+60", "+30", "0", "−30", "−60"], "Zeit → (Flow l/min)");
  }
  function pawTime(peak, plateau) {
    const pts = [], min = 0, max = 45;
    let x = L + 4;
    const n = 3, w = (R - L - 8) / n;
    for (let i = 0; i < n; i++) {
      pts.push([x, sy(5, min, max)]);
      pts.push([x + w * 0.04, sy(5 + (peak - 5) * 0.35, min, max)]);
      pts.push([x + w * 0.25, sy(peak, min, max)]);
      pts.push([x + w * 0.27, sy(plateau + 1, min, max)]);
      pts.push([x + w * 0.36, sy(plateau, min, max)]);
      pts.push([x + w * 0.4, sy(5, min, max)]);
      pts.push([x + w, sy(5, min, max)]);
      x += w;
    }
    return frame(path(pts) + '<text class="t-s" x="' + (L + 6) + '" y="' + (sy(peak, min, max) - 4).toFixed(1) + '">Spitze ' + peak + '</text><text class="t-s" x="' + (L + (R - L) / 3 * 0.37) + '" y="' + (sy(plateau, min, max) - 4).toFixed(1) + '">Plateau ' + plateau + "</text>", ["45", "", "", "", "0"], "Zeit → (cmH₂O)");
  }
  // Fluss-Volumen-Kurve: x = Volumen (0..6 l), y = Fluss (−8..+10 l/s); Exspiration oben
  function fvLoop(type) {
    const pts = [], vx = function (v) { return L + 20 + v / 6 * (R - L - 60); }, fy = function (f) { return sy(f, -8, 10); };
    let fvc = 5, pef = 9, scoop = 0, flatE = null, flatI = null;
    if (type === "obstruktiv") { fvc = 4.2; pef = 5; scoop = 1; }
    if (type === "restriktiv") { fvc = 2.4; pef = 7; }
    if (type === "fix") { flatE = 3; flatI = -3; }
    for (let i = 0; i <= 30; i++) {
      const f = i / 30, v = fvc * f;
      let fl;
      if (f < 0.12) fl = pef * f / 0.12;
      else {
        const g = (f - 0.12) / 0.88;
        fl = scoop ? pef * Math.pow(1 - g, 2.4) : pef * (1 - g);
      }
      if (flatE !== null) fl = Math.min(fl, flatE);
      pts.push([vx(v), fy(fl)]);
    }
    for (let i = 0; i <= 30; i++) {
      const f = i / 30, v = fvc * (1 - f);
      let fl = -6 * Math.sin(Math.PI * f) * (type === "restriktiv" ? 0.8 : 1);
      if (flatI !== null) fl = Math.max(fl, flatI);
      pts.push([vx(v), fy(fl)]);
    }
    return frame(path(pts) + '<path class="dash" d="M' + L + " " + fy(0).toFixed(1) + " L" + R + " " + fy(0).toFixed(1) + '"/>', ["+10", "", "", "", "−8"], "Volumen → (Fluss l/s, Exspiration oben)");
  }

  const K = [];
  function add(id, kat, svgFn, frage, options, correct, erklaerung) {
    K.push({ id: id, kategorie: kat, svg: svgFn, frage: frage, options: options, correct: correct, erklaerung: erklaerung });
  }

  // Kapnographie
  const capnoOpts = ["Normales Kapnogramm", "Obstruktion/Bronchospasmus", "Rückatmung von CO₂", "Ösophageale Intubation", "Kreislaufstillstand bzw. massive Lungenembolie"];
  add("kv-capno-normal", "Kapnographie", function () { return capno(rep(4, { peak: 38 })); }, "Wie ist dieses Kapnogramm eines beatmeten Patienten zu bewerten?", capnoOpts, 0,
    "Rechteckige Form: Nulllinie in der Inspiration, steiler Anstieg, flaches alveoläres Plateau mit leichtem Anstieg, endtidal ca. 35–40 mmHg.");
  add("kv-capno-bronchospasmus", "Kapnographie", function () { return capno(rep(4, { peak: 40, slow: true })); }, "Welche Diagnose passt zu dieser Kurvenform?", capnoOpts, 1,
    "Haifischflossen-Form: Der Anstieg ist verzögert, weil Lungenabschnitte mit unterschiedlich verengten Atemwegen nacheinander entleeren; ein Plateau wird nicht erreicht. Typisch für Bronchospasmus, COPD, Sekret oder abgeknickten Tubus.");
  add("kv-capno-rueckatmung", "Kapnographie", function () { return capno(rep(4, { base: 9, peak: 46 })); }, "Was zeigt dieses Kapnogramm?", capnoOpts, 2,
    "Die Kurve kehrt in der Inspiration nicht auf null zurück – inspiratorisches CO₂ bedeutet Rückatmung: erschöpfter Atemkalk, defektes Richtungsventil oder zu geringer Frischgasfluss im Nicht-Rückatemsystem.");
  add("kv-capno-oesophagus", "Kapnographie", function () { return capno([{ peak: 22 }, { peak: 12 }, { peak: 5 }, { peak: 0 }, { peak: 0 }]); }, "Unmittelbar nach Intubation zeigt sich dieses Bild. Was ist am wahrscheinlichsten?", capnoOpts, 3,
    "Wenige, rasch kleiner werdende Ausschläge (CO₂ aus dem Magen, z.B. nach Maskenbeatmung) und dann eine Nulllinie: ösophageale Lage. 'No trace = wrong place' – Tubus sofort überprüfen.");
  add("kv-capno-kreislauf", "Kapnographie", function () { return capno([{ peak: 38 }, { peak: 30 }, { peak: 22 }, { peak: 16 }, { peak: 12 }, { peak: 10 }]); }, "Bei unveränderter Beatmung fällt das endtidale CO₂ über mehrere Atemzüge ab, die Kurvenform bleibt erhalten. Wichtigste Differenzialdiagnose?", capnoOpts, 4,
    "Erhaltene Form mit abfallender Höhe: Es wird weiter ventiliert, aber weniger CO₂ zur Lunge transportiert – Abfall des Herzzeitvolumens (Kreislaufstillstand, schwere Hypotonie) oder Lungenembolie (Totraum ↑). Sofort Kreislauf prüfen.");
  add("kv-capno-curare", "Kapnographie", function () { return capno(rep(4, { peak: 38, cleft: true })); }, "Was bedeutet die Kerbe im Plateau?", ["Bronchospasmus", "Spontane Atemanstrengung des Patienten (nachlassende Relaxierung, 'Curare-Kerbe')", "Ösophageale Intubation", "Leck im Cuff", "Kardiogene Oszillationen ohne Bedeutung"], 1,
    "Eine Einkerbung im Plateau entsteht, wenn der Patient während der Exspiration selbst einatmet – Zeichen nachlassender Relaxierung bzw. flacher Narkose.");
  add("kv-capno-anstieg", "Kapnographie", function () { return capno([{ peak: 38 }, { peak: 42 }, { peak: 46 }, { peak: 50 }, { peak: 54 }, { peak: 58 }]); }, "Bei unveränderter Beatmung und ohne inspiratorisches CO₂ steigt das endtidale CO₂ kontinuierlich. Welche Ursache ist am dringlichsten auszuschließen?", ["Diskonnektion", "Maligne Hyperthermie (erhöhte CO₂-Produktion)", "Ösophageale Intubation", "Lungenembolie", "Hyperventilation"], 1,
    "Steigende CO₂-Produktion (MH, Sepsis, Thyreotoxikose, Wärmen nach Hypothermie) oder CO₂-Resorption bei Laparoskopie; auch Hypoventilation (Leck). Bei gleichzeitiger Tachykardie und Rigor an maligne Hyperthermie denken.");
  add("kv-capno-rosc", "Kapnographie", function () { return capno([{ peak: 12, len: 0.6 }, { peak: 13, len: 0.6 }, { peak: 12, len: 0.6 }, { peak: 13, len: 0.6 }, { peak: 36 }, { peak: 40 }]); }, "Unter Reanimation mit gesichertem Atemweg zeigt sich plötzlich dieser Anstieg. Was bedeutet das am ehesten?", ["Tubusdislokation", "Wiedereinsetzen eines Spontankreislaufs (ROSC)", "Erschöpfter Atemkalk", "Bronchospasmus", "Hyperventilation"], 1,
    "Ein abrupter, deutlicher Anstieg des endtidalen CO₂ während der CPR ist ein frühes Zeichen für ROSC – mehr Blutfluss bringt das angestaute CO₂ zur Lunge.");
  add("kv-capno-diskonnektion", "Kapnographie", function () { return capno([{ peak: 38 }, { peak: 38 }, { peak: 0 }, { peak: 0 }, { peak: 0 }]); }, "Plötzlich ist die Kurve flach auf null. Was prüfen Sie zuerst?", ["Pulmonalembolie – Lyse", "Diskonnektion/Apnoe/Totalverlegung bzw. Probenleitung – Patient sofort manuell beatmen und Verbindung prüfen", "Atemkalk wechseln", "Narkose vertiefen", "Erhöhte CO₂-Produktion"], 1,
    "Ein abrupter Abfall auf null bedeutet: kein CO₂ erreicht den Sensor – Diskonnektion, Apnoe/Beatmungsausfall, komplette Verlegung, Extubation oder Defekt der Probenleitung. Ein Kreislaufstillstand lässt das CO₂ eher über mehrere Atemzüge abfallen.");

  // Arterielle Druckkurve
  const artOpts = ["Normale arterielle Kurve", "Überdämpfung (z.B. Luftblase, Gerinnsel)", "Unterdämpfung (Resonanz, Überschwingen)", "Aortenstenose (Pulsus parvus et tardus)", "Aorteninsuffizienz"];
  add("kv-art-normal", "Arterielle Druckkurve", function () { return art(rep(5, { sys: 120, dia: 70 })); }, "Wie bewerten Sie diese arterielle Kurve?", artOpts, 0,
    "Steiler Anstieg, gerundeter Gipfel, gut erkennbare dikrote Inzisur (Aortenklappenschluss), diastolischer Abfall.");
  add("kv-art-ueberdaempft", "Arterielle Druckkurve", function () { return art(rep(5, { sys: 102, dia: 78, damped: true })); }, "Die Kurve wirkt verrundet, ohne Inzisur, mit kleiner Amplitude. Was liegt vor?", artOpts, 1,
    "Überdämpfung: Luftblasen, Gerinnsel, Knick, weiche/zu lange Leitung. Systolisch zu niedrig, diastolisch zu hoch, MAP annähernd korrekt. Spültest zeigt langsames Zurückkehren ohne Nachschwingen.");
  add("kv-art-unterdaempft", "Arterielle Druckkurve", function () { return art(rep(5, { sys: 160, dia: 66, ring: true })); }, "Spitze, überhöhte Gipfel mit Nachschwingen. Was liegt vor?", artOpts, 2,
    "Unterdämpfung/Resonanz: systolischer Druck wird überschätzt, diastolischer leicht unterschätzt. Ursachen: steife, lange Leitung, Resonanzfrequenz nahe der Herzfrequenz. MAP bleibt annähernd korrekt.");
  add("kv-art-as", "Arterielle Druckkurve", function () { return art(rep(5, { sys: 105, dia: 70, slowUp: true })); }, "Langsamer, verzögerter Anstieg mit kleiner Amplitude und Kerbe im Anstieg. Welcher Befund passt?", artOpts, 3,
    "Pulsus parvus et tardus mit anakroter Kerbe – typisch für eine höhergradige Aortenstenose.");
  add("kv-art-ai", "Arterielle Druckkurve", function () { return art(rep(5, { sys: 160, dia: 40 })); }, "Sehr große Blutdruckamplitude mit niedrigem diastolischem Druck. Welcher Befund passt am ehesten?", artOpts, 4,
    "Große Pulsdruckamplitude und niedriger diastolischer Druck ('Wasserhammerpuls') bei Aorteninsuffizienz (auch Sepsis, Hyperthyreose, AV-Fistel). Niedriger Diastolendruck gefährdet die Koronarperfusion.");
  add("kv-art-svv", "Arterielle Druckkurve", function () { return art([{ sys: 125, dia: 70 }, { sys: 112, dia: 66 }, { sys: 96, dia: 60 }, { sys: 110, dia: 65 }, { sys: 126, dia: 70 }, { sys: 98, dia: 61 }]); }, "Beim kontrolliert beatmeten Patienten im Sinusrhythmus schwankt der systolische Druck atemabhängig deutlich. Was legt das nahe?", ["Überdämpfung", "Wahrscheinliche Volumenreagibilität (hohe Pulsdruckvariation)", "Aortenstenose", "Kammerflimmern", "Messfehler durch falsche Nullung"], 1,
    "Atemabhängige Schwankung (Pulsdruckvariation über ca. 12–13 %) bei kontrollierter Beatmung mit ausreichendem Tidalvolumen und Sinusrhythmus spricht für Volumenreagibilität – nicht verwertbar bei Spontanatmung, Arrhythmie, kleinen Tidalvolumina oder offenem Thorax.");

  // EKG
  function opts5(correctLabel, others) { const o = [correctLabel].concat(others); return o; }
  add("kv-ekg-sinus", "EKG", function () { return ekgRegular(5, {}); }, "Welcher Rhythmus liegt vor (Herzfrequenz ca. 75/min)?", opts5("Sinusrhythmus", ["Vorhofflimmern", "AV-Block III. Grades", "Vorhofflattern", "Monomorphe ventrikuläre Tachykardie"]), 0,
    "Regelmäßige P-Wellen vor jedem schmalen QRS-Komplex, konstante PQ-Zeit.");
  add("kv-ekg-brady", "EKG", function () { return ekgRegular(2, {}); }, "Regelmäßiger Rhythmus mit P vor jedem schmalen QRS, Frequenz ca. 35–40/min. Diagnose?", opts5("Sinusbradykardie", ["AV-Block III. Grades", "Asystolie", "Vorhofflimmern", "Kammerflimmern"]), 0,
    "P-Wellen regelmäßig übergeleitet, nur langsam: Sinusbradykardie (z.B. Vagusreiz, Beta-Blocker, Hypothermie, Hypoxie, hohe Spinalanästhesie). Bei Instabilität: Ursache, Atropin, ggf. Adrenalin/Pacing.");
  add("kv-ekg-vf", "EKG", function () { const rnd = seeded(3); const ph = [rnd(), rnd(), rnd()]; return ekgFunc(function (t) { return 0.55 * Math.sin(t * 52 + ph[0] * 6) + 0.35 * Math.sin(t * 83 + ph[1] * 6) + 0.25 * Math.sin(t * 31 + ph[2] * 6); }, 500); }, "Ein bewusstloser Patient ohne Puls. Welcher Rhythmus?", opts5("Kammerflimmern", ["Asystolie", "Monomorphe ventrikuläre Tachykardie", "Vorhofflimmern", "Vorhofflattern"]), 0,
    "Chaotische, unregelmäßige Wellen ohne erkennbare QRS-Komplexe: Kammerflimmern → sofort defibrillieren (ALS schockbar).");
  add("kv-ekg-vt", "EKG", function () { return ekgFunc(function (t) { const ph = (t * 9) % 1; return 1.4 * Math.sin(ph * Math.PI * 2) * (ph < 0.6 ? 1 : 0.5); }, 500); }, "Regelmäßige, breite, gleichförmige Komplexe mit ca. 180/min. Diagnose?", opts5("Monomorphe ventrikuläre Tachykardie", ["Kammerflimmern", "Torsade de pointes", "Vorhofflattern", "Sinusrhythmus"]), 0,
    "Breitkomplextachykardie mit gleichförmigen Komplexen: bis zum Beweis des Gegenteils VT. Pulslos → Defibrillation; mit Puls und instabil → synchronisierte Kardioversion; stabil → Amiodaron.");
  add("kv-ekg-tdp", "EKG", function () { return ekgFunc(function (t) { return 1.3 * Math.sin(t * 2 * Math.PI * 3) * Math.sin(t * 2 * Math.PI * 22); }, 600); }, "Polymorphe Kammertachykardie, deren Amplitude um die Grundlinie 'schraubt'. Diagnose und Erstmedikament?", opts5("Torsade de pointes – Magnesium i.v.", ["Kammerflimmern – Lidocain", "Vorhofflattern – Adenosin", "VT – Verapamil", "Sinustachykardie – Beta-Blocker"]), 0,
    "Torsade de pointes bei verlängertem QT (Medikamente, Hypokaliämie, Hypomagnesiämie): Magnesium 2 g i.v., QT-verlängernde Medikamente stoppen, Kalium korrigieren; pulslos → defibrillieren.");
  add("kv-ekg-asystolie", "EKG", function () { return ekgFunc(function (t) { return 0.04 * Math.sin(t * 5); }); }, "Patient ohne Puls, Monitor zeigt dieses Bild in zwei Ableitungen, Amplitude maximal. Diagnose?", opts5("Asystolie", ["Feines Kammerflimmern sicher", "Sinusbradykardie", "AV-Block III. Grades", "Elektrodendiskonnektion ist ausgeschlossen"]), 0,
    "Nulllinie: Elektroden/Verstärkung/Ableitung prüfen (feines Kammerflimmern ausschließen), dann nicht-schockbarer Algorithmus mit sofortigem Adrenalin.");
  add("kv-ekg-af", "EKG", ekgAF, "Unregelmäßige RR-Abstände, keine P-Wellen, unruhige Grundlinie. Diagnose?", opts5("Vorhofflimmern", ["Vorhofflattern", "Sinusarrhythmie", "AV-Block III. Grades", "Kammerflimmern"]), 0,
    "Absolute Arrhythmie ohne P-Wellen. Perioperativ: Auslöser (Hypovolämie, Elektrolyte, Schmerz, Sepsis) behandeln; instabil → synchronisierte Kardioversion, stabil → Frequenzkontrolle; Antikoagulation bedenken.");
  add("kv-ekg-flattern", "EKG", ekgFlutter, "Regelmäßige Sägezahn-Wellen der Grundlinie, QRS regelmäßig nach jeder 4. Welle. Diagnose?", opts5("Vorhofflattern", ["Vorhofflimmern", "Sinustachykardie", "AV-Block III. Grades", "Kammerflimmern"]), 0,
    "Typisches Vorhofflattern mit ca. 300/min Vorhofaktion und fester Überleitung (hier 4:1). Bei 2:1-Überleitung Kammerfrequenz ca. 150/min – häufig übersehen.");
  add("kv-ekg-avb3", "EKG", ekgAVB3, "P-Wellen regelmäßig, breite QRS-Komplexe langsam und ohne festen Bezug zu den P-Wellen. Diagnose?", opts5("AV-Block III. Grades", ["AV-Block I. Grades", "Vorhofflimmern", "Sinusbradykardie", "Vorhofflattern"]), 0,
    "Komplette AV-Dissoziation mit ventrikulärem Ersatzrhythmus (breit, ca. 30–40/min). Atropin wirkt meist nicht → Adrenalin/Isoprenalin, transkutanes bzw. transvenöses Pacing.");
  add("kv-ekg-hyperk", "EKG", function () { return ekgRegular(5, { tAmp: 1.4, peakedT: true, qrsW: 0.14, p: false, tW: 0.12 }); }, "Hohe, spitze, schmalbasige T-Wellen, verbreiterte QRS-Komplexe, P-Wellen kaum sichtbar. Welche Störung?", opts5("Hyperkaliämie", ["Hypokaliämie", "Hyperkalzämie", "Hypothermie", "Myokardischämie"]), 0,
    "Typische Abfolge bei steigendem Kalium: zeltförmige T-Wellen → P-Abflachung/PQ-Verlängerung → QRS-Verbreiterung → Sinuswellenmuster → Kammerflimmern/Asystolie. Sofort Calcium i.v., dann Insulin/Glukose, β₂-Mimetika, Elimination.");
  add("kv-ekg-stemi", "EKG", function () { return ekgRegular(5, { st: 0.55, tAmp: 0.5 }); }, "Deutliche Hebung der ST-Strecke. Was ist die wichtigste Konsequenz intraoperativ?", opts5("Myokardischämie bis Infarkt – Ursache suchen, O₂-Angebot/-Bedarf optimieren, Kardiologie/Koronarangiographie", ["Normalbefund", "Hyperkaliämie – Calcium", "Perikarditis immer harmlos", "Elektrodenfehler – ignorieren"]), 0,
    "Neue ST-Hebungen: Ischämie (Spasmus, Thrombose, Luftembolie in Koronarien), aber auch Artefakt/Elektrodenlage prüfen. Herzfrequenz senken, Blutdruck stabilisieren, Hb/Oxygenierung, 12-Kanal-EKG, Troponin, Kardiologie.");

  // Beatmung / Spirometrie
  add("kv-flow-autopeep", "Beatmung & Spirometrie", function () { return flowTime(true); }, "Flow-Zeit-Kurve unter kontrollierter Beatmung. Was zeigt sie?", ["Normale Beatmung", "Intrinsischer PEEP (Auto-PEEP): exspiratorischer Fluss erreicht vor dem nächsten Atemzug die Nulllinie nicht", "Leck am Tubus", "Patient-Ventilator-Asynchronie durch Autotriggerung", "Restriktive Lungenerkrankung"], 1,
    "Gefangene Luft (Air Trapping) bei Obstruktion oder zu kurzer Exspiration. Maßnahmen: Atemfrequenz senken, Exspirationszeit verlängern, Bronchodilatation; bei Hypotonie kurz diskonnektieren.");
  add("kv-flow-normal", "Beatmung & Spirometrie", function () { return flowTime(false); }, "Flow-Zeit-Kurve unter volumenkontrollierter Beatmung. Bewertung?", ["Normal: konstanter Inspirationsfluss, exspiratorischer Fluss kehrt vor dem nächsten Atemzug auf null zurück", "Auto-PEEP", "Großes Leck", "Bronchospasmus", "Druckkontrollierte Beatmung"], 0,
    "Rechteckiger Inspirationsfluss (volumenkontrolliert) und vollständige passive Exspiration bis zur Nulllinie.");
  add("kv-paw-resistance", "Beatmung & Spirometrie", function () { return pawTime(38, 18); }, "Druck-Zeit-Kurve unter volumenkontrollierter Beatmung mit endinspiratorischer Pause. Spitzendruck 38, Plateau 18 cmH₂O. Ursache?", ["Erniedrigte Compliance (z.B. Pneumothorax)", "Erhöhte Resistance (z.B. Bronchospasmus, Tubusknick, Sekret)", "Normalbefund", "Leck", "Auto-PEEP ausgeschlossen"], 1,
    "Große Differenz zwischen Spitzen- und Plateaudruck = großer resistiver Anteil. Steigen beide Drücke gemeinsam, ist die Compliance vermindert.");
  add("kv-fv-obstruktiv", "Beatmung & Spirometrie", function () { return fvLoop("obstruktiv"); }, "Fluss-Volumen-Kurve (Spirometrie). Welches Muster?", ["Normal", "Obstruktiv (konkav 'durchgebogener' exspiratorischer Schenkel)", "Restriktiv", "Fixe Stenose der oberen Atemwege", "Variable extrathorakale Stenose"], 1,
    "Rasch abfallender, nach innen gewölbter exspiratorischer Schenkel bei reduziertem Spitzenfluss: obstruktive Ventilationsstörung (Asthma, COPD); FEV₁/FVC erniedrigt.");
  add("kv-fv-fix", "Beatmung & Spirometrie", function () { return fvLoop("fix"); }, "Fluss-Volumen-Kurve mit abgeflachtem in- UND exspiratorischem Schenkel. Was legt das nahe?", ["Asthma", "Fixe Stenose der oberen Atemwege (z.B. Trachealstenose, Struma)", "Restriktive Lungenerkrankung", "Normalbefund", "Zwerchfellparese"], 1,
    "Plateaus in beiden Schenkeln: fixe zentrale Stenose. Nur inspiratorisch abgeflacht: variable extrathorakale, nur exspiratorisch: variable intrathorakale Stenose. Relevant für die Atemwegsplanung.");
  add("kv-fv-restriktiv", "Beatmung & Spirometrie", function () { return fvLoop("restriktiv"); }, "Fluss-Volumen-Kurve: Form erhalten, aber deutlich verkleinertes Volumen. Muster?", ["Obstruktiv", "Restriktiv (z.B. Lungenfibrose, Adipositas, Thoraxdeformität)", "Fixe Stenose", "Normal", "Emphysem"], 1,
    "Verminderte Vitalkapazität bei normalem oder erhöhtem FEV₁/FVC-Verhältnis – restriktive Störung; Bestätigung über die Totalkapazität (Bodyplethysmographie).");

  window.KURVEN = K;
})();
