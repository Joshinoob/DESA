// Berechnungstrainer: Aufgaben-Generatoren mit zufälligen, klinisch plausiblen Werten.
// Jeder Generator liefert {frage, antwort (Zahl), einheit, toleranz (relativ, z.B. 0.05 = ±5 %),
// loesung (Rechenweg), hinweis}. Formeln und Konstanten wie in den Karten der App (Quellen dort).
// Ergebnisse dienen dem Üben von Rechenwegen – im klinischen Alltag gelten Fachinformation,
// lokale Standards und Gegenprüfung.
(function () {
  function r(min, max, step) {
    const n = Math.round((max - min) / step);
    return +(min + Math.floor(Math.random() * (n + 1)) * step).toFixed(4);
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function fmt(x, d) { return (+x.toFixed(d === undefined ? 1 : d)).toLocaleString("de-DE"); }

  window.RECHNEN = [
    { id: "mgkg-ml", titel: "Dosis in ml (mg/kg)", gen: function () {
      const d = pick([
        { name: "Propofol 1 %", konz: 10, dosis: [1.5, 2, 2.5], einh: "mg/kg" },
        { name: "Rocuronium (10 mg/ml)", konz: 10, dosis: [0.6, 0.9, 1.2], einh: "mg/kg" },
        { name: "Ketamin (10 mg/ml, verdünnt)", konz: 10, dosis: [1, 1.5, 2], einh: "mg/kg" },
        { name: "Succinylcholin (20 mg/ml)", konz: 20, dosis: [1, 1.5], einh: "mg/kg" },
        { name: "Sugammadex (100 mg/ml)", konz: 100, dosis: [2, 4, 16], einh: "mg/kg" }
      ]);
      const kg = r(50, 110, 5), dos = pick(d.dosis);
      const mg = dos * kg, ml = mg / d.konz;
      return { frage: "Patient " + kg + " kg. Gewünschte Dosis " + d.name + ": " + fmt(dos, 1) + " " + d.einh + ". Wie viele ml ziehen Sie auf?", antwort: ml, einheit: "ml", toleranz: 0.03,
        loesung: fmt(dos, 1) + " mg/kg × " + kg + " kg = " + fmt(mg, 0) + " mg; " + fmt(mg, 0) + " mg ÷ " + d.konz + " mg/ml = " + fmt(ml, 1) + " ml.",
        hinweis: "Erst Gesamtmenge in mg, dann durch die Konzentration teilen. 1 % = 10 mg/ml." };
    } },
    { id: "perfusor", titel: "Perfusor-Laufrate (µg/kg/min → ml/h)", gen: function () {
      const d = pick([
        { name: "Noradrenalin 5 mg/50 ml", konzUg: 100, dosis: [0.05, 0.1, 0.15, 0.2, 0.3] },
        { name: "Noradrenalin 10 mg/50 ml", konzUg: 200, dosis: [0.1, 0.2, 0.3, 0.4] },
        { name: "Adrenalin 5 mg/50 ml", konzUg: 100, dosis: [0.05, 0.1, 0.2] },
        { name: "Dobutamin 250 mg/50 ml", konzUg: 5000, dosis: [2.5, 5, 7.5, 10] }
      ]);
      const kg = r(50, 100, 5), dos = pick(d.dosis);
      const ugmin = dos * kg, mlh = ugmin * 60 / d.konzUg;
      return { frage: d.name + ", Patient " + kg + " kg, Zieldosis " + fmt(dos, 2) + " µg/kg/min. Laufrate in ml/h?", antwort: mlh, einheit: "ml/h", toleranz: 0.05,
        loesung: "Konzentration " + d.konzUg + " µg/ml. " + fmt(dos, 2) + " × " + kg + " = " + fmt(ugmin, 1) + " µg/min × 60 = " + fmt(ugmin * 60, 0) + " µg/h ÷ " + d.konzUg + " µg/ml = " + fmt(mlh, 1) + " ml/h.",
        hinweis: "ml/h = Dosis (µg/kg/min) × kg × 60 ÷ Konzentration (µg/ml)." };
    } },
    { id: "parkland", titel: "Verbrennung: Parkland-Formel", gen: function () {
      const kg = r(50, 100, 5), vkof = r(20, 60, 5);
      const total = 4 * kg * vkof, first8 = total / 2 / 8;
      return { frage: "Erwachsener " + kg + " kg, " + vkof + " % VKOF zweit-/drittgradig verbrannt (Unfall vor 0 h). Laufrate in ml/h für die ersten 8 Stunden nach Parkland (4 ml/kg/% VKOF)?", antwort: first8, einheit: "ml/h", toleranz: 0.05,
        loesung: "4 × " + kg + " × " + vkof + " = " + fmt(total, 0) + " ml in 24 h; Hälfte (" + fmt(total / 2, 0) + " ml) in den ersten 8 h ab Unfallzeitpunkt → " + fmt(first8, 0) + " ml/h.",
        hinweis: "Die Formel ist nur Startwert – Steuerung nach Urinausscheidung (Erwachsene ca. 0,5–1 ml/kg/h); moderne Empfehlungen starten oft mit 2–4 ml/kg/% VKOF, um Überinfusion zu vermeiden." };
    } },
    { id: "421", titel: "Erhaltungsbedarf Kind (4-2-1-Regel)", gen: function () {
      const kg = r(6, 40, 1);
      let mlh = kg <= 10 ? 4 * kg : (kg <= 20 ? 40 + 2 * (kg - 10) : 60 + (kg - 20));
      return { frage: "Kind " + kg + " kg. Stündlicher Erhaltungsbedarf nach der 4-2-1-Regel?", antwort: mlh, einheit: "ml/h", toleranz: 0.02,
        loesung: kg <= 10 ? "4 ml/kg/h × " + kg + " = " + mlh + " ml/h." : (kg <= 20 ? "40 ml (erste 10 kg) + 2 × " + (kg - 10) + " = " + mlh + " ml/h." : "40 + 20 (zweite 10 kg) + 1 × " + (kg - 20) + " = " + mlh + " ml/h."),
        hinweis: "Erste 10 kg: 4 ml/kg/h, zweite 10 kg: 2 ml/kg/h, jedes weitere kg: 1 ml/kg/h. Isotone Lösungen verwenden (Hyponatriämie-Gefahr)." };
    } },
    { id: "pbw", titel: "Tidalvolumen nach Sollgewicht", gen: function () {
      const mann = Math.random() < 0.5, cm = r(150, 195, 1), mlkg = pick([6, 8]);
      const pbw = (mann ? 50 : 45.5) + 0.91 * (cm - 152.4), vt = pbw * mlkg;
      return { frage: (mann ? "Mann" : "Frau") + ", " + cm + " cm. Tidalvolumen bei " + mlkg + " ml/kg Sollgewicht (Predicted Body Weight)?", antwort: vt, einheit: "ml", toleranz: 0.04,
        loesung: "PBW = " + (mann ? "50" : "45,5") + " + 0,91 × (" + cm + " − 152,4) = " + fmt(pbw, 1) + " kg; × " + mlkg + " ml/kg = " + fmt(vt, 0) + " ml.",
        hinweis: "Das tatsächliche Körpergewicht spielt keine Rolle – die Lungengröße hängt von Körpergröße und Geschlecht ab." };
    } },
    { id: "tubus", titel: "Tubusgröße Kind (mit Cuff)", gen: function () {
      const alter = r(2, 10, 1), id = alter / 4 + 3.5;
      return { frage: "Kind, " + alter + " Jahre. Innendurchmesser eines blockbaren Tubus nach Faustformel (mm)?", antwort: id, einheit: "mm", toleranz: 0.08,
        loesung: alter + "/4 + 3,5 = " + fmt(id, 2) + " mm → nächste verfügbare Größe (halbe Millimeterschritte), eine Nummer größer und kleiner bereitlegen.",
        hinweis: "Ohne Cuff: Alter/4 + 4. Formeln sind Anhalt, längenbasierte Bänder gleichwertig." };
    } },
    { id: "kindgewicht", titel: "Gewichtsschätzung Kind und Reanimationsdosen", gen: function () {
      const alter = r(1, 5, 1), kg = (alter + 4) * 2;
      const typ = pick(["adr", "defi", "amio"]);
      const map = {
        adr: { f: "Adrenalin (10 µg/kg) in µg", a: kg * 10, e: "µg", l: kg + " kg × 10 µg/kg = " + kg * 10 + " µg (max. 1 mg)." },
        defi: { f: "Defibrillationsenergie (4 J/kg) in J", a: kg * 4, e: "J", l: kg + " kg × 4 J/kg = " + kg * 4 + " J (nächste verfügbare Stufe)." },
        amio: { f: "Amiodaron (5 mg/kg) in mg", a: kg * 5, e: "mg", l: kg + " kg × 5 mg/kg = " + kg * 5 + " mg (max. 300 mg)." }
      }[typ];
      return { frage: "Kind, " + alter + " Jahre, Gewicht unbekannt. Schätzen Sie das Gewicht nach (Alter + 4) × 2 und berechnen Sie: " + map.f + ".", antwort: map.a, einheit: map.e, toleranz: 0.03,
        loesung: "(" + alter + " + 4) × 2 = " + kg + " kg; " + map.l, hinweis: "ERC: Adrenalin 10 µg/kg, Defibrillation 4 J/kg, Amiodaron 5 mg/kg." };
    } },
    { id: "bicarb", titel: "Natriumbicarbonat-Bedarf", gen: function () {
      const kg = r(50, 100, 5), be = r(-20, -8, 1), mmol = Math.abs(be) * kg * 0.3;
      return { frage: "Patient " + kg + " kg, BE " + be + " mmol/l. Rechnerischer Gesamtbedarf an Natriumbicarbonat (mmol) nach BE × kg × 0,3?", antwort: mmol, einheit: "mmol", toleranz: 0.03,
        loesung: fmt(Math.abs(be), 0) + " × " + kg + " × 0,3 = " + fmt(mmol, 0) + " mmol (= ml NaHCO₃ 8,4 %, 1 mmol/ml).",
        hinweis: "In der Praxis allenfalls die Hälfte geben und kontrollieren; Bicarbonat nur bei klarer Indikation (z.B. Bicarbonatverlust, Trizyklika, pH <7,2 mit AKI) und ausreichender Ventilation." };
    } },
    { id: "anionen", titel: "Anionenlücke (albuminkorrigiert)", gen: function () {
      let na, hco3, agZiel, cl;
      do { na = r(132, 146, 1); hco3 = r(8, 26, 1); agZiel = r(4, 28, 1); cl = na - hco3 - agZiel; } while (cl < 92 || cl > 118);
      const alb = r(20, 42, 2);
      const ag = na - (cl + hco3), korr = ag + 0.25 * (40 - alb);
      return { frage: "Na⁺ " + na + ", Cl⁻ " + cl + ", HCO₃⁻ " + hco3 + " mmol/l, Albumin " + alb + " g/l. Albuminkorrigierte Anionenlücke?", antwort: korr, einheit: "mmol/l", toleranz: 0.06,
        loesung: "AG = " + na + " − (" + cl + " + " + hco3 + ") = " + ag + "; Korrektur + 0,25 × (40 − " + alb + ") = " + fmt(0.25 * (40 - alb), 1) + " → " + fmt(korr, 1) + " mmol/l (normal ca. 8–12, geräteabhängig).",
        hinweis: "Pro 10 g/l Albumin unter 40 g/l ca. 2,5 mmol/l addieren." };
    } },
    { id: "cpp", titel: "MAP und zerebraler Perfusionsdruck", gen: function () {
      const sys = r(90, 160, 5), dia = r(45, 90, 5), icp = r(5, 35, 1);
      const map = dia + (sys - dia) / 3, cpp = map - icp;
      return { frage: "Blutdruck " + sys + "/" + dia + " mmHg, ICP " + icp + " mmHg. Zerebraler Perfusionsdruck (MAP nach Faustformel)?", antwort: cpp, einheit: "mmHg", toleranz: 0.05,
        loesung: "MAP ≈ " + dia + " + (" + sys + " − " + dia + ")/3 = " + fmt(map, 0) + "; CPP = MAP − ICP = " + fmt(cpp, 0) + " mmHg (SHT-Ziel ca. 60–70).",
        hinweis: "Monitor-MAP ist genauer als die Faustformel (gemessen als Kurvenintegral)." };
    } },
    { id: "cao2", titel: "Arterieller Sauerstoffgehalt", gen: function () {
      const hb = r(6, 16, 0.5), sat = r(85, 100, 1), pao2 = r(55, 400, 5);
      const ca = 1.34 * hb * sat / 100 + 0.003 * pao2;
      return { frage: "Hb " + fmt(hb, 1) + " g/dl, SaO₂ " + sat + " %, PaO₂ " + pao2 + " mmHg. CaO₂ in ml/dl?", antwort: ca, einheit: "ml/dl", toleranz: 0.04,
        loesung: "1,34 × " + fmt(hb, 1) + " × " + fmt(sat / 100, 2) + " + 0,003 × " + pao2 + " = " + fmt(ca, 1) + " ml/dl.",
        hinweis: "Hüfner-Zahl in Lehrbüchern 1,34–1,39; gelöster Anteil nur bei hohem PaO₂ relevant." };
    } },
    { id: "abl", titel: "Tolerabler Blutverlust", gen: function () {
      const kg = r(50, 100, 5), hkt0 = r(36, 46, 1), hktz = r(24, 30, 1), ebvKg = 70;
      const ebv = kg * ebvKg, abl = ebv * (hkt0 - hktz) / hkt0;
      return { frage: "Erwachsener " + kg + " kg (Blutvolumen ca. 70 ml/kg), Ausgangs-Hkt " + hkt0 + " %, tolerierter Hkt " + hktz + " %. Tolerabler Blutverlust (vereinfachte Formel)?", antwort: abl, einheit: "ml", toleranz: 0.04,
        loesung: "EBV = " + kg + " × 70 = " + fmt(ebv, 0) + " ml; ABL = EBV × (Hkt₀ − Hkt_Ziel) / Hkt₀ = " + fmt(ebv, 0) + " × " + (hkt0 - hktz) + "/" + hkt0 + " = " + fmt(abl, 0) + " ml.",
        hinweis: "Blutvolumen: Mann ca. 70–75, Frau ca. 65, Säugling ca. 80, Neugeborenes ca. 85–90 ml/kg (Angaben variieren). Die vereinfachte Formel überschätzt etwas; exakter ist eine logarithmische Formel." };
    } },
    { id: "o2flasche", titel: "Reichweite einer Sauerstoffflasche", gen: function () {
      const l = pick([2, 5, 10]), bar = r(50, 200, 10), flow = pick([2, 4, 6, 10, 15]);
      const min = l * bar / flow;
      return { frage: "Sauerstoffflasche " + l + " Liter, Druck " + bar + " bar, Flow " + flow + " l/min. Wie viele Minuten reicht der Vorrat (ohne Reserve)?", antwort: min, einheit: "min", toleranz: 0.03,
        loesung: l + " l × " + bar + " bar = " + fmt(l * bar, 0) + " l Gas; ÷ " + flow + " l/min = " + fmt(min, 0) + " min.",
        hinweis: "Boyle-Mariotte; in der Praxis Reserve einplanen (z.B. nicht unter ca. 50 bar)." };
    } },
    { id: "faktor8", titel: "Faktor-VIII-Dosis bei Hämophilie A", gen: function () {
      const kg = r(40, 100, 5), anstieg = pick([30, 50, 80, 100]);
      const ie = kg * anstieg * 0.5;
      return { frage: "Hämophilie A, " + kg + " kg, Faktor-VIII-Aktivität soll um " + anstieg + " % angehoben werden. Dosis in IE?", antwort: ie, einheit: "IE", toleranz: 0.03,
        loesung: kg + " × " + anstieg + " × 0,5 = " + fmt(ie, 0) + " IE (1 IE/kg hebt um ca. 2 %).",
        hinweis: "Faktor IX: kg × Anstieg × 1. Spiegel kontrollieren, Planung mit Hämophiliezentrum." };
    } },
    { id: "kaliumperf", titel: "Konzentration einer Perfusorlösung", gen: function () {
      const mg = pick([50, 100, 250, 500]), ml = pick([50]), dosisMgH = pick([2, 5, 10, 20]);
      const konz = mg / ml, mlh = dosisMgH / konz;
      return { frage: "Sie ziehen " + mg + " mg eines Wirkstoffs auf " + ml + " ml auf. Gewünschte Dosis " + dosisMgH + " mg/h. Laufrate in ml/h?", antwort: mlh, einheit: "ml/h", toleranz: 0.03,
        loesung: "Konzentration " + mg + "/" + ml + " = " + fmt(konz, 2) + " mg/ml; " + dosisMgH + " ÷ " + fmt(konz, 2) + " = " + fmt(mlh, 1) + " ml/h.",
        hinweis: "Immer: Konzentration ausrechnen, dann Dosis ÷ Konzentration." };
    } }
  ];
})();
