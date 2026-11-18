// EKG-Infarktlokalisation: eigene Abbildung zum Spezialwissen-Kapitel "ekg-infarkt" (Herz) und
// fallbasierte Testfragen (Ableitung → Wandabschnitt → Gefäß → Komplikation). Grundlage: ESC-Leitlinie
// akutes Koronarsyndrom 2023 (ST-Hebungs-Kriterien), Standardwissen der Koronaranatomie. Eigene Formulierungen.
(function () {
  const F = window.SWFIG;
  const t = F.t, c = F.c, l = F.l, r = F.r;
  const rad = function (g) { return g * Math.PI / 180; };
  const pt = function (cx, cy, R, g) { return [cx + R * Math.cos(rad(g)), cy + R * Math.sin(rad(g))]; };
  function bogen(cx, cy, R, g1, g2, k) {
    const a = pt(cx, cy, R, g1), b = pt(cx, cy, R, g2);
    const d = "M" + a[0].toFixed(1) + " " + a[1].toFixed(1) + " A" + R + " " + R + " 0 0 1 " + b[0].toFixed(1) + " " + b[1].toFixed(1);
    return F.p(d, "lnb", k).replace("/>", ' style="stroke-width:9;stroke-linecap:butt"/>');
  }

  // Farben: k4 orange = RIVA, k2 grün = RCX, k1 blau = RCA, k3 gelb = posterior (RCX oder RCA), k0 grau = aVR
  const FIG_EKG_INFARKT = (function () {
    let s = "";
    // ---- Frontalebene (Extremitätenableitungen, Cabrera-Kreis) ----
    const fx = 92, fy = 128, FR = 56;
    s += t(fx, 16, "Frontalebene", "t-l", "middle");
    s += c(fx, fy, FR, "ln", 0) + c(fx, fy, 3, "fs", 6);
    [["I", 0, 2], ["II", 60, 1], ["III", 120, 1], ["aVF", 90, 1], ["aVL", -30, 2], ["aVR", -150, 0]].forEach(function (q) {
      const e = pt(fx, fy, FR, q[1]), lab = pt(fx, fy, FR + 14, q[1]);
      s += F.a(fx, fy, e[0], e[1], q[2], "lnb");
      s += t(lab[0], lab[1] + 4, q[0], "t-s", "middle", q[2]);
    });
    s += t(fx, 226, ["inferior: II, III, aVF", "lateral: I, aVL"], "t-n", "middle");

    // ---- Horizontalebene (Brustwand, Blick von unten, vorn = oben) ----
    const hx = 272, hy = 126;
    s += t(hx, 16, "Horizontalebene", "t-l", "middle");
    // linker Ventrikel als Ring: vorn/Septum RIVA, seitlich RCX, hinten-unten RCA bzw. RCX
    s += bogen(hx, hy, 30, -150, -40, 4);
    s += bogen(hx, hy, 30, -40, 40, 2);
    s += bogen(hx, hy, 30, 40, 120, 1);
    s += bogen(hx, hy, 30, 120, 210, 4);
    s += t(hx, hy + 4, "LV", "t-s", "middle", 6);
    // rechter Ventrikel als Sichel vorn rechts (Bildlinks)
    s += F.p("M" + (hx - 24) + " " + (hy - 30) + " Q" + (hx - 70) + " " + (hy - 10) + " " + (hx - 40) + " " + (hy + 26) + " Q" + (hx - 48) + " " + (hy) + " " + (hx - 24) + " " + (hy - 30) + " Z", "flb", 1);
    s += t(hx - 50, hy + 4, "RV", "t-s", "middle", 6);
    [["V1", -105, 4], ["V2", -85, 4], ["V3", -65, 4], ["V4", -45, 4], ["V5", -20, 2], ["V6", 2, 2], ["V7", 30, 3], ["V8", 55, 3], ["V9", 80, 3], ["V4R", -150, 1]].forEach(function (q) {
      const e = pt(hx, hy, 70, q[1]);
      s += c(e[0], e[1], 3.2, "fs", q[2]) + t(pt(hx, hy, 82, q[1])[0], pt(hx, hy, 82, q[1])[1] + 4, q[0], "t-s", "middle", q[2]);
    });
    s += t(hx, 232, ["vorn = oben, Patient links = Bild rechts"], "t-n", "middle");

    // ---- Legende ----
    const lg = [[4, "RIVA: V1–V4 (Septum, Vorderwand, Spitze)"], [2, "RCX: I, aVL, V5–V6 (Seitenwand)"], [1, "RCA ca. 80 % / RCX: II, III, aVF; RCA: V4R"], [3, "posterior (RCX oder RCA): V7–V9"]];
    lg.forEach(function (q, i) {
      const y = 260 + i * 15;
      s += r(14, y - 8, 10, 10, "fs", q[0], 2) + t(30, y + 1, q[1], "t-s", "start");
    });
    return F.svg(380, 320, "EKG-Ableitungen in Frontal- und Horizontalebene mit den Versorgungsgebieten der Koronararterien", s);
  })();

  window.__addSpezialFiguren("herz", {
    "ekg-infarkt": [{ svg: FIG_EKG_INFARKT, nach: "Zuordnung: Ableitungen → Wandabschnitt → Gefäß", caption: "Jede Ableitung blickt aus ihrer Richtung auf das Herz: ==ST-Hebung in einer Gruppe benachbarter Ableitungen → Schaden in dem Wandabschnitt, auf den sie blicken → Gefäß dieses Abschnitts==. Inferior hängt das Gefäß vom Versorgungstyp ab (meist RCA)." }]
  });

  // ---------- Testfragen ----------
  const M = "allgemeinanaesthesie", ST = "begleiterkrankungen";
  const Q = [
    { id: "mcq-ekg-001", question: "Brustschmerz im Aufwachraum. EKG: ST-Hebung in II, III und aVF, in III höher als in II, ST-Senkung in I und aVL. Welches Gefäß ist am wahrscheinlichsten verschlossen?",
      options: ["Proximaler RIVA", "R. circumflexus", "Rechte Koronararterie", "1. Diagonalast", "Hauptstamm"], correct: 2,
      explanation: "Inferiorer Infarkt mit ST-Hebung III > II und Spiegelbild-Senkung in I und aVL spricht für die rechte Koronararterie. Beim RCX wäre die Hebung in II ≥ III, eine Senkung in I fehlt bzw. I, aVL, V5–V6 sind mit gehoben." },
    { id: "mcq-ekg-002", question: "Inferiorer ST-Hebungs-Infarkt mit Hypotonie (75/45 mmHg), gestauten Halsvenen und klarer Lunge. Welche Zusatzableitung bestätigt die Ursache, und was ist die erste Kreislaufmaßnahme?",
      options: ["V7–V9; Nitroglycerin i.v.", "V4R; vorsichtige Volumengabe, keine Nitrate", "aVR; Furosemid i.v.", "V4R; Nitroglycerin sublingual", "V1; Betablocker i.v."], correct: 1,
      explanation: "Rechtsherzinfarkt durch proximalen RCA-Verschluss: ST-Hebung in V4R. Die rechte Kammer ist vorlastabhängig – vorsichtig Volumen, keine Nitrate oder Diuretika, bei Bedarf Inotropika; Sinusrhythmus bzw. AV-Synchronie erhalten." },
    { id: "mcq-ekg-003", question: "EKG: ST-Hebungen in V1–V6, I und aVL, ST-Senkung in II, III und aVF. Wo liegt der Verschluss?",
      options: ["Distaler RIVA nach dem letzten Diagonalast", "Proximaler RIVA vor dem 1. Diagonalast", "Rechte Koronararterie", "R. circumflexus", "R. interventricularis posterior"], correct: 1,
      explanation: "Ausgedehnter Vorderwandinfarkt mit Beteiligung der hohen Seitenwand (I, aVL) und Spiegelbild inferior → proximaler RIVA-Verschluss vor dem 1. Diagonalast; hohes Risiko für Pumpversagen." },
    { id: "mcq-ekg-004", question: "Typischer Brustschmerz. EKG: ST-Senkung in V1–V3 mit hohem, breitem R und aufrechter T-Welle, sonst unauffällig. Was tun Sie als Nächstes?",
      options: ["Als Perikarditis behandeln", "V7–V9 ableiten – Verdacht auf posterioren Infarkt", "Belastungs-EKG am Folgetag", "Nur Troponin abwarten", "Als Rechtsschenkelblock einordnen und abwarten"], correct: 1,
      explanation: "ST-Senkung in V1–V3 kann das Spiegelbild eines posterioren Infarkts sein (RCX oder RCA). ST-Hebung ≥ 0,5 mm in V7–V9 bestätigt ihn – dann Vorgehen wie beim ST-Hebungs-Infarkt." },
    { id: "mcq-ekg-005", question: "EKG: ST-Hebung in aVR und V1, ST-Senkungen ≥ 1 mm in acht weiteren Ableitungen, Patient hypoton und kaltschweißig. Woran denken Sie?",
      options: ["Harmloser Normalbefund", "Isolierter RCX-Verschluss", "Hauptstamm- oder Dreigefäßerkrankung mit diffuser subendokardialer Ischämie", "Lungenembolie ohne Herzbeteiligung", "Hyperkaliämie"], correct: 2,
      explanation: "Hebung in aVR (± V1) mit ausgedehnten ST-Senkungen spricht für eine schwere diffuse Ischämie bei Hauptstamm- oder Dreigefäßerkrankung – hohes Risiko, sofortige Koronarangiographie." },
    { id: "mcq-ekg-006", question: "Am dritten Tag nach einem inferioren Infarkt: plötzliche Atemnot, Lungenödem, neues lautes Systolikum. Welche Komplikation ist am wahrscheinlichsten, und warum?",
      options: ["Abriss des anterolateralen Papillarmuskels, weil er nur ein Gefäß hat", "Abriss des posteromedialen Papillarmuskels, weil er meist nur aus dem R. interventricularis posterior versorgt wird", "Aortendissektion", "Spitzenaneurysma durch RIVA-Verschluss", "Perikarditis"], correct: 1,
      explanation: "Der posteromediale Papillarmuskel hat meist nur ein Gefäß (R. interventricularis posterior), der anterolaterale zwei (RIVA-Diagonaläste und RCX). Der Abriss verursacht eine akute schwere Mitralinsuffizienz. Differenzialdiagnose: Ventrikelseptumdefekt (Echokardiographie)." },
    { id: "mcq-ekg-007", question: "Vorderwandinfarkt (V1–V4). Neu treten ein Rechtsschenkelblock und ein AV-Block II° Typ Mobitz II auf. Wie bewerten Sie das?",
      options: ["Harmloser vagaler Effekt, Atropin reicht", "Block im AV-Knoten, meist vorübergehend", "Block unterhalb des AV-Knotens bei großem Infarkt – Schrittmacher bereithalten", "Typisch für einen RCX-Verschluss", "Nebenwirkung von Heparin"], correct: 2,
      explanation: "Die RIVA-Septaläste versorgen rechten Tawara-Schenkel und vorderen linken Faszikel. Ein infranodaler Block zeigt einen großen Infarkt an; der Übergang in einen totalen Block mit langsamem, breitem Ersatzrhythmus droht – transkutane bzw. transvenöse Stimulation vorbereiten." },
    { id: "mcq-ekg-008", question: "Inferiorer Infarkt mit AV-Block II° Typ Wenckebach und Frequenz 48/min, Blutdruck stabil. Welche Aussage trifft zu?",
      options: ["Der Block liegt meist unterhalb des AV-Knotens", "Er beruht meist auf Ischämie der AV-Knoten-Arterie bzw. vagalen Reflexen und ist oft vorübergehend", "Sofortige Schrittmacheranlage ist immer nötig", "Atropin ist kontraindiziert", "Er spricht für einen Hauptstammverschluss"], correct: 1,
      explanation: "Die AV-Knoten-Arterie stammt bei Rechtsversorgung meist aus der RCA; dazu kommt der Bezold-Jarisch-Reflex aus der Hinterwand. Der Block sitzt im AV-Knoten, der Ersatzrhythmus ist schmal und atropinempfindlich, oft bildet er sich zurück." },
    { id: "mcq-ekg-009", question: "Welche Ableitungen und welches Gefäß gehören zur Seitenwand?",
      options: ["II, III, aVF – RCA", "V1–V2 – RIVA-Septaläste", "I, aVL, V5–V6 – R. circumflexus", "V4R – RCA", "aVR – Hauptstamm"], correct: 2,
      explanation: "Die Seitenwand zeigt sich in I, aVL, V5–V6 und wird vom R. circumflexus (Marginaläste) versorgt; die hohe Seitenwand (I, aVL) teils auch vom 1. Diagonalast des RIVA." },
    { id: "mcq-ekg-010", question: "Brustschmerz. EKG: aufsteigende ST-Senkung von 2 mm am J-Punkt in V2–V5 mit hohen, symmetrischen T-Wellen. Wie handeln Sie?",
      options: ["Als unspezifische Repolarisationsstörung werten", "Wie einen ST-Hebungs-Infarkt behandeln: akuter proximaler RIVA-Verschluss (De-Winter-Muster)", "Belastungs-EKG planen", "Kaliumgabe", "Nur Verlaufskontrolle nach 24 h"], correct: 1,
      explanation: "Das De-Winter-Muster entspricht einem akuten Verschluss des proximalen RIVA ohne klassische ST-Hebung – Vorgehen wie beim ST-Hebungs-Infarkt mit sofortiger Koronarangiographie." },
    { id: "mcq-ekg-011", question: "Ab welcher ST-Hebung in V2–V3 liegt bei einer 55-jährigen Frau nach der ESC-Leitlinie 2023 ein ST-Hebungs-Infarkt vor (in zwei benachbarten Ableitungen)?",
      options: ["≥ 0,5 mm", "≥ 1 mm", "≥ 1,5 mm", "≥ 2 mm", "≥ 2,5 mm"], correct: 2,
      explanation: "In V2–V3 gelten: Frauen ≥ 1,5 mm, Männer ≥ 40 J. ≥ 2 mm, Männer < 40 J. ≥ 2,5 mm; in allen anderen Ableitungen ≥ 1 mm; V7–V9 und V3R–V4R ≥ 0,5 mm." },
    { id: "mcq-ekg-012", question: "Unter Narkose mit Ableitung II und V5 wird eine ST-Senkung in V5 bei Herzfrequenz 120/min sichtbar. Welche Aussage ist richtig?",
      options: ["Sie zeigt sicher einen RCX-Verschluss", "Sie ist meist eine subendokardiale Ischämie durch Missverhältnis von Angebot und Bedarf – Frequenz und Blutdruck optimieren, 12-Kanal-EKG", "V5 erfasst vor allem den rechten Ventrikel", "II + V5 erkennen nur etwa 30 % der Ischämien", "ST-Senkungen sind unter Narkose bedeutungslos"], correct: 1,
      explanation: "Perioperative Ischämie zeigt sich meist als ST-Senkung (Subendokard) und lässt sich keinem Gefäß sicher zuordnen. II + V5 erkennen ca. 80 % der Episoden. Erst Ursache behandeln (Tachykardie, Hypotonie, Anämie), dann 12-Kanal-EKG, Troponin, Kardiologie." }
  ];
  window.MCQ = (window.MCQ || []).concat(Q.map(function (q) { return Object.assign({ module: M, subtopic: ST }, q); }));
})();
