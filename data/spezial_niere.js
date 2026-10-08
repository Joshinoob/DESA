// Spezialwissen Niere – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const NEPHRON_SEGMENTS = [
    ["Glomerulus", ["Filtration ca. 180 l/Tag (GFR ca. 120 ml/min)", "Filtrationsfraktion ca. 20 %"], "s0"],
    ["Proximaler Tubulus – ca. 65 % Na⁺/H₂O", ["Isoosmotisch; NHE3, SGLT2/SGLT1, Carboanhydrase", "~100 % Glukose/Aminosäuren, ca. 80 % HCO₃⁻", "Sekretion org. Anionen/Kationen; NH₄⁺-Bildung", "◀ Acetazolamid, SGLT2-Hemmer"], "s1"],
    ["Dünner absteigender Teil", ["Wasser wird resorbiert (AQP1), NaCl kaum", "→ Tubulusflüssigkeit wird hyperton"], "s2"],
    ["Dicker aufsteigender Teil – ca. 25 % Na⁺", ["NKCC2 + ROMK, wasserundurchlässig", "→ Verdünnung auf ca. 100 mosmol/kg", "Lumenpositiv → Ca²⁺/Mg²⁺ parazellulär; Macula densa", "◀ Schleifendiuretika"], "s3"],
    ["Distales Konvolut – ca. 5 % Na⁺", ["NCC; Ca²⁺ über TRPV5 (PTH), Mg²⁺ über TRPM6", "◀ Thiazide"], "s4"],
    ["Sammelrohr – ca. 2–5 % Na⁺", ["Hauptzellen (inkl. Verbindungstubulus): ENaC", "(Aldosteron), K⁺-Sekretion (ROMK/BK), AQP2 (ADH)", "Schaltzellen: H⁺- bzw. HCO₃⁻-Sekretion", "◀ Amilorid, Triamteren, Spironolacton/Eplerenon"], "s5"],
    ["Endharn", ["Osmolalität ca. 50–1200 mosmol/kg", "Volumen je nach ADH ca. 0,5 bis > 10 l/Tag", "Fraktionelle Na⁺-Ausscheidung normal < 1 %"], "s0"]
  ];
  const FIG_NEPHRON = (function () {
    let y = 4, s = "";
    NEPHRON_SEGMENTS.forEach(function (seg, i) {
      const h = 22 + seg[1].length * 13;
      s += '<rect x="6" y="' + y + '" width="348" height="' + h + '" rx="6" class="' + seg[2] + '"/>' +
        '<text x="14" y="' + (y + 16) + '" class="t-h">' + seg[0] + "</text>";
      seg[1].forEach(function (l, j) { s += '<text x="14" y="' + (y + 31 + j * 13) + '" class="t-s">' + l + "</text>"; });
      y += h;
      if (i < NEPHRON_SEGMENTS.length - 1) {
        s += '<path d="M180 ' + (y + 2) + " L180 " + (y + 12) + '" class="ar"/><path d="M175 ' + (y + 7) + " L180 " + (y + 13) + " L185 " + (y + 7) + '" class="ar"/>';
        y += 16;
      }
    });
    return '<svg viewBox="0 0 360 ' + (y + 4) + '" role="img" aria-label="Nephronsegmente mit Natriumresorption, Transportern und Diuretika-Angriffspunkten">' + s + "</svg>";
  })();

  const CH = [];

  CH.push({
    id: "filtration",
    level: "Gewebe",
    title: "Aufbau, Nephron und glomeruläre Filtration",
    leitfrage: "Wie filtert ein Knäuel aus Kapillaren täglich ca. 180 Liter Plasma, ohne dabei Eiweiß zu verlieren?",
    einfach: "Jede Niere besteht aus rund einer Million Filtereinheiten (Nephronen). Vorne sitzt ein feines Sieb (Glomerulus), das Wasser und kleine Teilchen durchlässt, große Eiweiße aber zurückhält. Dahinter folgt ein langes Röhrchen (Tubulus), das fast alles Wertvolle wieder zurückholt. Von 180 Litern Filtrat pro Tag bleiben am Ende nur etwa 1,5 Liter Urin übrig.",
    figure: { svg: FIG_NEPHRON, caption: "Nephronabschnitte mit ungefährem Anteil an der Natriumrückresorption, wichtigsten Transportern und Angriffspunkten der Diuretika (◀)." },
    body: [
      { h: "Nephrone" },
      "Jede Niere enthält im Mittel etwa **1 Million Nephrone**, mit enormer Streuung (ca. 200.000 bis über 2,5 Millionen; Bertram et al. 2011). Niedriges Geburtsgewicht geht mit weniger Nephronen einher – ein Risikofaktor für Bluthochdruck und chronische Nierenerkrankung. Ca. 85 % sind **kortikale** Nephrone mit kurzer Henle-Schleife, ca. 15 % **juxtamedulläre** mit langer Schleife bis tief ins Mark und begleitenden Gefäßschleifen (Vasa recta). ==Die juxtamedullären Nephrone sind für die Harnkonzentrierung entscheidend.==",
      { h: "Gefäße: zwei Kapillarnetze hintereinander" },
      "Nierenarterie → Zwischenlappenarterien → Bogenarterien → Rindenarterien → **zuführende Arteriole (Vas afferens) → Glomeruluskapillaren → abführende Arteriole (Vas efferens)** → zweites Kapillarnetz um die Tubuli bzw. (bei juxtamedullären Nephronen) Vasa recta. ==Weil der Glomerulus zwischen zwei Arteriolen liegt, kann der Filtrationsdruck über deren Weite fein eingestellt werden.==",
      { h: "Die Filterschicht" },
      { ul: [
        "**Gefenestriertes Endothel** mit einer Zuckerschicht (Glykokalyx).",
        "**Glomeruläre Basalmembran** aus Kollagen IV und negativ geladenen Proteoglykanen. Defekte Kollagen-IV-Ketten verursachen das Alport-Syndrom.",
        "**Podozyten** mit ineinandergreifenden Füßchen; dazwischen die **Schlitzmembran** (Eiweiße Nephrin und Podocin). Mutationen von Nephrin bzw. Podocin verursachen angeborene bzw. steroidresistente nephrotische Syndrome (Pollak et al. 2014)."
      ] },
      { kette: [
        "Kleine Teilchen (Radius unter ca. 2 nm: Wasser, Salze, Glukose, Harnstoff, Kreatinin) → frei filtriert",
        "Mittelgroße Teilchen → zunehmend zurückgehalten; Myoglobin (17 kDa) wird filtriert (Gefahr bei Rhabdomyolyse), freies Hämoglobin, sobald Haptoglobin erschöpft ist",
        "Albumin (Radius ca. 3,6 nm, negativ geladen) → ==wird durch Größe UND Ladung fast vollständig zurückgehalten=="
      ], titel: "Was durch den Filter kommt" },
      { h: "Die Kräfte der Filtration" },
      { formel: "GFR = Kf × [(Kapillardruck − Druck im Bowman-Raum) − (onkotischer Druck in der Kapillare − onkotischer Druck im Bowman-Raum)]", erkl: "Kf = Filtrationskoeffizient (Fläche × Durchlässigkeit). GFR = glomeruläre Filtrationsrate." },
      "Der Kapillardruck im Glomerulus ist deutlich höher als in anderen Kapillaren. ==Entlang der Kapillare steigt der onkotische Druck, weil eiweißfreie Flüssigkeit abgepresst wird – die Filtration nimmt zum Ende hin ab.== Mesangiumzellen zwischen den Kapillarschlingen können durch Kontraktion die Filterfläche verändern.",
      { h: "Kenngrößen" },
      { table: { head: ["Größe", "Wert (ca.)"], rows: [
        ["Nierendurchblutung", "1–1,2 l/min (20–25 % des Herzzeitvolumens)"],
        ["Nierenplasmafluss", "600–700 ml/min"],
        ["Glomeruläre Filtrationsrate (GFR)", "ca. 120 ml/min/1,73 m² (ca. 180 l/Tag)"],
        ["Filtrationsfraktion (GFR / Plasmafluss)", "ca. 20 %"],
        ["Zurückgeholter Anteil des Filtrats", "> 99 %"]
      ] } },
      { h: "Der juxtaglomeruläre Apparat" },
      "Die **Macula densa** (am Ende des dicken aufsteigenden Teils der Henle-Schleife) liegt direkt am Gefäßpol des eigenen Glomerulus und misst die Kochsalzkonzentration im Tubulus. Die **granulären Zellen** in der Wand des Vas afferens setzen **Renin** frei. ==Hier sind Tubulus und Gefäß direkt gekoppelt: Grundlage des tubuloglomerulären Feedbacks und der Reninfreisetzung.=="
    ],
    merke: [
      "Ca. 1 Mio. Nephrone pro Niere (große Streuung); 15 % juxtamedullär für die Konzentrierung.",
      "Zwei Arteriolen hintereinander → feine Einstellung des Filtrationsdrucks.",
      "Filter: Endothel – Basalmembran (Kollagen IV) – Podozyten/Schlitzmembran (Nephrin, Podocin).",
      "GFR ca. 120 ml/min (180 l/Tag), Nierendurchblutung 20–25 % des HZV, Filtrationsfraktion 20 %.",
      "Albumin wird durch Größe und Ladung zurückgehalten."
    ],
    warum: [
      { q: "Warum wird Albumin trotz seines eher kleinen Radius praktisch nicht filtriert?", a: "Sein Radius (ca. 3,6 nm) liegt nahe der Größengrenze, und es ist stark negativ geladen. Glykokalyx, Basalmembran und Schlitzmembran tragen negative Ladungen und stoßen es ab. Zusätzlich holt der proximale Tubulus kleine filtrierte Albuminmengen zurück. Erst eine Schädigung der Podozyten führt zu relevanter Albuminurie." },
      { q: "Warum nimmt die Filtration entlang der Glomeruluskapillare ab?", a: "Es wird eiweißfreie Flüssigkeit abgepresst, die Eiweiße bleiben in der Kapillare zurück. Ihr onkotischer Druck steigt deshalb zum Ende der Kapillare an und wirkt dem Filtrationsdruck immer stärker entgegen." }
    ],
    klinik: [
      "Rhabdomyolyse: filtriertes Myoglobin schädigt die Tubuli → früh großzügig Volumen geben.",
      "Nephrotisches Syndrom: Podozytenschaden → große Eiweißverluste, Hypalbuminämie, Ödeme, Thromboseneigung.",
      "Niedriges Geburtsgewicht → weniger Nephrone → im späteren Leben höheres Risiko für Hypertonie und Niereninsuffizienz."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie viele Nephrone hat eine Niere, und welchen Anteil haben juxtamedulläre Nephrone?", a: "Im Mittel ca. 1 Million (Streuung ca. 200.000 bis > 2,5 Millionen); ca. 15 % sind juxtamedullär mit langer Henle-Schleife und Vasa recta." },
      { q: "Spezialwissen Niere: Aus welchen drei Schichten besteht der glomeruläre Filter?", a: "Gefenestriertes Endothel mit Glykokalyx, glomeruläre Basalmembran (Kollagen IV, negativ geladen) und Podozyten mit Schlitzmembran (Nephrin, Podocin)." },
      { q: "Spezialwissen Niere: Welche Kräfte bestimmen die glomeruläre Filtration?", a: "GFR = Kf × [(Kapillardruck − Bowman-Druck) − (onkotischer Druck Kapillare − Bowman-Raum)]: der hohe Kapillardruck treibt, Bowman-Druck und der entlang der Kapillare steigende onkotische Druck wirken entgegen." },
      { q: "Spezialwissen Niere: Welche Normalwerte gelten für Nierendurchblutung, GFR und Filtrationsfraktion?", a: "Nierendurchblutung ca. 1–1,2 l/min (20–25 % des HZV), GFR ca. 120 ml/min/1,73 m² (ca. 180 l/Tag), Filtrationsfraktion ca. 20 %." },
      { q: "Spezialwissen Niere: Woraus besteht der juxtaglomeruläre Apparat und welche Aufgabe hat er?", a: "Macula densa (misst Kochsalz am Ende des dicken aufsteigenden Teils), reninbildende granuläre Zellen im Vas afferens und extraglomeruläres Mesangium; er vermittelt den tubuloglomerulären Feedback und die Reninfreisetzung." },
      { q: "Spezialwissen Niere: Warum wird Myoglobin, aber kaum Albumin filtriert?", a: "Myoglobin ist klein (17 kDa) und passiert den Filter; Albumin (Radius ca. 3,6 nm, negativ geladen) wird durch Größe und Ladung fast vollständig zurückgehalten." }
    ]
  });

  CH.push({
    id: "perfusion",
    level: "Organ",
    title: "Nierendurchblutung, Autoregulation und Sauerstoffhaushalt",
    leitfrage: "Warum ist die Niere mit einem Fünftel des Herzzeitvolumens überdurchblutet – und trotzdem eines der empfindlichsten Organe bei Sauerstoffmangel?",
    einfach: "Die Niere bekommt so viel Blut, weil sie es filtern muss – nicht, weil sie so viel Sauerstoff braucht. Fast alles Blut fließt durch die Rinde. Das Nierenmark bekommt absichtlich wenig, damit der dort aufgebaute Salzgradient nicht weggespült wird. Der Preis: Im Mark herrscht dauerhaft Sauerstoffknappheit – dort entstehen die ersten Schäden bei Minderdurchblutung.",
    body: [
      { h: "Verteilung der Durchblutung" },
      "Die Nieren machen weniger als 0,5 % der Körpermasse aus, erhalten aber 20–25 % des Herzzeitvolumens. ==Ca. 90 % davon fließen durch die Rinde, nur ca. 10 % durch das Mark.== Der hohe Fluss dient der Filtration: Die Sauerstoffausschöpfung ist gering (ca. 10 %), das Blut in der Nierenvene noch hoch gesättigt.",
      { h: "Der Sauerstoffbedarf hängt am Natrium" },
      { kette: [
        "Die Nieren verbrauchen ca. 7–10 % des Körpersauerstoffs",
        "Der größte Teil wird für den aktiven Natriumtransport (Natrium-Kalium-Pumpe) benötigt",
        "Steigt die GFR, wird mehr Natrium filtriert und muss zurückgeholt werden",
        "==Mehr Filtration = mehr Sauerstoffbedarf – Angebot und Bedarf steigen gemeinsam (eine Besonderheit der Niere)=="
      ] },
      "Im **Nierenmark** liegt der Sauerstoffpartialdruck nur bei ca. 10–20 mmHg (Brezis & Rosen 1995). Gründe: geringer Markfluss, Sauerstoff 'springt' in den haarnadelförmigen Vasa recta vom absteigenden direkt in den aufsteigenden Schenkel über, und der **dicke aufsteigende Teil der Henle-Schleife** verbraucht viel Sauerstoff. ==Deshalb werden bei Minderdurchblutung zuerst dieser Abschnitt und das Ende des proximalen Tubulus (S3-Segment) geschädigt.==",
      { h: "Autoregulation" },
      "Durchblutung und GFR bleiben bei einem mittleren arteriellen Druck (MAP) von ca. **80–180 mmHg** weitgehend konstant (Carlström et al. 2015); bei chronischem Bluthochdruck verschiebt sich der Bereich nach oben.",
      { ul: [
        "**Myogener Mechanismus** (Bayliss-Effekt): Wird das Vas afferens gedehnt, zieht es sich zusammen – innerhalb von Sekunden.",
        "**Tubuloglomerulärer Feedback:** Erreicht viel Kochsalz die Macula densa, wird das Vas afferens verengt und die GFR sinkt; bei wenig Kochsalz weitet es sich, und Renin wird freigesetzt."
      ] },
      { kette: [
        "GFR zu hoch → viel Kochsalz erreicht die Macula densa (gemessen über den Na-K-2Cl-Cotransporter NKCC2)",
        "Freisetzung von ATP bzw. Adenosin → A1-Rezeptoren am Vas afferens",
        "Vas afferens verengt sich",
        "==GFR sinkt wieder – das Nephron schützt sich vor Überfiltration=="
      ], titel: "Tubuloglomerulärer Feedback" },
      { h: "Die Stellschrauben an den Arteriolen" },
      { table: { head: ["Ort", "Verengung durch", "Erweiterung durch"], rows: [
        ["Vas afferens (zuführend)", "Sympathikus (α1), Adenosin (A1), Endothelin, Angiotensin II", "Prostaglandine (PGE₂, PGI₂), Stickstoffmonoxid, Dopamin"],
        ["Vas efferens (abführend)", "Angiotensin II (empfindlicher als afferent)", "Wegfall von Angiotensin II (ACE-Hemmer, Angiotensin-Rezeptorblocker)"]
      ] } },
      { kette: [
        "Blutdruck bzw. Volumen sinkt",
        "Prostaglandine weiten das Vas afferens (mehr Zufluss), Angiotensin II verengt das Vas efferens (Druck im Glomerulus bleibt erhalten)",
        "==Die GFR bleibt trotz Minderdurchblutung erhalten=="
      ], titel: "Wie die Niere bei Minderdurchblutung die Filtration rettet" },
      "**Nichtsteroidale Antirheumatika (NSAR)** nehmen die erste, **ACE-Hemmer und Angiotensin-Rezeptorblocker** die zweite Schutzmaßnahme. ==Zusammen mit einem Diuretikum ('Triple Whammy') droht ein akutes Nierenversagen.== **SGLT2-Hemmer** erhöhen die Kochsalzmenge an der Macula densa → tubuloglomerulärer Feedback → Vas afferens enger → niedrigerer Druck im Glomerulus. Das erklärt den anfänglichen leichten GFR-Abfall und den langfristigen Nierenschutz (Vallon & Thomson 2017).",
      { h: "Perfusionsdruck: arteriell UND venös" },
      { formel: "Effektiver Nierenperfusionsdruck ≈ MAP − zentraler Venendruck (bzw. − intraabdomineller Druck, wenn dieser höher ist)", erkl: "Die Niere liegt in einer festen Kapsel – Stau von außen oder innen erhöht den Gewebedruck." },
      "**Venöse Stauung** (Rechtsherzversagen, Überwässerung) und **intraabdominelle Hypertension** (≥ 12 mmHg; abdominelles Kompartmentsyndrom > 20 mmHg mit neuem Organversagen; WSACS 2013) mindern Filtration und Mikrozirkulation.",
      { h: "Narkose und Operationsstress" },
      "Sympathikus, RAAS (Renin-Angiotensin-Aldosteron-System) und antidiuretisches Hormon (ADH) senken intraoperativ meist Durchblutung, GFR und Urinmenge. ==Eine Urinmenge unter 0,5 ml/kg/h ist intraoperativ deshalb häufig und allein nur begrenzt aussagekräftig==; erst Werte unter ca. 0,3 ml/kg/h gingen in einer großen Kohorte nach Bauchchirurgie mit einem erhöhten Risiko für akute Nierenschädigung einher (Mizota et al. 2017; explorativ ermittelter Grenzwert). Ein MAP unter ca. 65 mmHg ist mit akuter Nierenschädigung assoziiert."
    ],
    merke: [
      "20–25 % des HZV, 90 % durch die Rinde; Sauerstoffausschöpfung nur ca. 10 %.",
      "Sauerstoffbedarf ∝ zurückgeholtes Natrium → mehr GFR = mehr Bedarf.",
      "Mark: Sauerstoffpartialdruck ca. 10–20 mmHg → dicker aufsteigender Teil und S3-Segment empfindlich.",
      "Autoregulation ca. 80–180 mmHg: myogen + tubuloglomerulärer Feedback (Adenosin/A1).",
      "Schutz bei Minderdurchblutung: Prostaglandine afferent (NSAR!), Angiotensin II efferent (ACE-Hemmer!)."
    ],
    warum: [
      { q: "Warum ist das Nierenmark trotz der enormen Gesamtdurchblutung chronisch sauerstoffarm?", a: "Nur ca. 10 % des Flusses erreichen das Mark, und Sauerstoff diffundiert in den Vasa recta vom absteigenden direkt in den aufsteigenden Schenkel, bevor er die Tiefe erreicht. Gleichzeitig verbraucht der dicke aufsteigende Teil durch den Kochsalztransport viel Sauerstoff. Der niedrige Markfluss ist für die Harnkonzentrierung nötig – sonst würde der Salzgradient weggespült –, erkauft das aber mit Sauerstoffmangel." },
      { q: "Warum kann ein NSAR bei einem Patienten mit Volumenmangel ein akutes Nierenversagen auslösen, beim Gesunden aber kaum?", a: "Beim Gesunden spielen Prostaglandine für die Nierendurchblutung kaum eine Rolle. Bei Volumenmangel, Herzinsuffizienz oder Leberzirrhose sind Sympathikus und Angiotensin II aktiv und verengen das Vas afferens; Prostaglandine halten dann Fluss und GFR aufrecht. NSAR nehmen diesen Gegenspieler weg – die Verengung wirkt ungebremst." }
    ],
    klinik: [
      "Perioperativ NSAR vermeiden bei Volumenmangel, chronischer Nierenerkrankung, Herzinsuffizienz und gleichzeitiger Therapie mit ACE-Hemmer und Diuretikum.",
      "Venöse Stauung ist ein eigenständiger Schadfaktor: Überwässerung und hohen zentralen Venendruck vermeiden.",
      "Laparoskopie: Pneumoperitoneumdruck so niedrig wie möglich; die Urinmenge sinkt dabei oft vorübergehend."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie verteilt sich die Nierendurchblutung zwischen Rinde und Mark und wie hoch ist die Sauerstoffausschöpfung?", a: "Ca. 90 % Rinde, ca. 10 % Mark; die Sauerstoffausschöpfung ist gering (ca. 10 %), weil der Fluss vor allem der Filtration dient." },
      { q: "Spezialwissen Niere: Warum steigt der Sauerstoffbedarf der Niere mit der GFR?", a: "Der Verbrauch dient überwiegend dem aktiven Natriumtransport; mehr Filtration bedeutet mehr Natrium, das zurückgeholt werden muss." },
      { q: "Spezialwissen Niere: Welche Nephronabschnitte sind bei Minderdurchblutung besonders gefährdet und warum?", a: "Der dicke aufsteigende Teil der Henle-Schleife im Mark und das S3-Segment des proximalen Tubulus – hoher Sauerstoffverbrauch bei niedrigem Mark-Sauerstoff (ca. 10–20 mmHg)." },
      { q: "Spezialwissen Niere: Wie funktioniert der tubuloglomeruläre Feedback?", a: "Die Macula densa misst über NKCC2 die Kochsalzkonzentration; bei Anstieg wird ATP/Adenosin frei, A1-Rezeptoren verengen das Vas afferens, die GFR sinkt; bei wenig Kochsalz Erweiterung und Reninfreisetzung." },
      { q: "Spezialwissen Niere: Wie erhalten Prostaglandine und Angiotensin II die GFR bei Minderdurchblutung, und welche Medikamente stören das?", a: "Prostaglandine weiten das Vas afferens (gestört durch NSAR), Angiotensin II verengt das Vas efferens (gestört durch ACE-Hemmer/Angiotensin-Rezeptorblocker); mit Diuretikum = 'Triple Whammy'." },
      { q: "Spezialwissen Niere: Wie berechnet sich der effektive Nierenperfusionsdruck?", a: "Ca. MAP − zentraler Venendruck bzw. − intraabdomineller Druck, wenn dieser höher ist; Stauung und erhöhter Bauchdruck mindern die Nierendurchblutung." },
      { q: "Spezialwissen Niere: Wie erklären SGLT2-Hemmer ihren anfänglichen GFR-Abfall und ihren Nierenschutz?", a: "Mehr Kochsalz erreicht die Macula densa → tubuloglomerulärer Feedback → Vas afferens enger → niedrigerer Druck im Glomerulus (weniger Überfiltration)." }
    ]
  });

  CH.push({
    id: "clearance",
    level: "Organ",
    title: "Clearance, GFR-Schätzung und Rechnen mit Urinwerten",
    leitfrage: "Was bedeutet 'Clearance' genau, warum ist Kreatinin ein so träger Marker – und wie unterscheidet man mit Urinwerten zwischen 'zu wenig Durchblutung' und 'Nierenschaden'?",
    einfach: "Clearance ist das Plasmavolumen, das die Niere pro Minute vollständig von einem Stoff 'reinigt'. Wird ein Stoff nur filtriert und weder zurückgeholt noch zusätzlich ausgeschieden, entspricht seine Clearance genau der Filtrationsleistung (GFR). Kreatinin kommt dem nahe – aber es steigt erst mit Verzögerung an, wenn die Niere plötzlich schlechter arbeitet.",
    body: [
      { h: "Das Clearance-Prinzip" },
      { formel: "Clearance = Urinkonzentration × Urinzeitvolumen / Plasmakonzentration", erkl: "Ergebnis in ml/min. Beispiel: Kreatinin im Urin 100 mg/dl, Urin 1 ml/min, Plasma 1 mg/dl → Clearance 100 ml/min." },
      { table: { head: ["Stoff", "Verhalten", "Clearance entspricht"], rows: [
        ["Inulin", "nur filtriert", "genau der GFR (Goldstandard)"],
        ["Kreatinin", "filtriert + etwas sezerniert (ca. 10–20 %, bei niedriger GFR mehr)", "überschätzt die GFR"],
        ["Para-Aminohippursäure", "filtriert + fast vollständig sezerniert", "ungefähr dem Nierenplasmafluss"],
        ["Glukose", "filtriert + vollständig zurückgeholt (unter der Nierenschwelle)", "null"]
      ] } },
      { h: "Kreatinin und GFR – eine gekrümmte Beziehung" },
      { kette: [
        "Kreatinin entsteht gleichmäßig aus Muskeln und wird über die Niere ausgeschieden",
        "Im Gleichgewicht gilt: Kreatinin im Serum ∝ 1 / GFR",
        "Halbiert sich die GFR, verdoppelt sich das Kreatinin – ==aber erst nach Stunden bis Tagen, bis sich das neue Gleichgewicht eingestellt hat==",
        "Bei normalem Ausgangswert bedeutet schon ein kleiner Anstieg (z.B. 0,7 → 1,0 mg/dl) einen großen GFR-Verlust"
      ], titel: "Warum Kreatinin ein später Marker ist" },
      { ul: [
        "**eGFR-Formeln** (z.B. CKD-EPI 2021 ohne Ethnie-Faktor) gelten nur im **Gleichgewicht** – bei akuter Nierenschädigung sind sie falsch.",
        "**Wenig Muskelmasse** (Alter, Kachexie, Amputation, Querschnitt) → niedriges Kreatinin trotz eingeschränkter GFR.",
        "**Cystatin C** hängt nicht von der Muskelmasse ab.",
        "**Erhöhte renale Clearance** bei jungen Intensivpatienten (Kreatinin-Clearance > 130 ml/min/1,73 m²) → Gefahr der Unterdosierung renal ausgeschiedener Antibiotika.",
        "Trimethoprim und Cimetidin hemmen die Kreatininsekretion → ==Kreatinin steigt, ohne dass die GFR fällt=="
      ] },
      { h: "Fraktionelle Ausscheidung" },
      { formel: "Fraktionelle Natriumausscheidung (%) = (Urin-Natrium × Plasma-Kreatinin) / (Plasma-Natrium × Urin-Kreatinin) × 100", erkl: "Anteil des filtrierten Natriums, der im Urin landet; normal < 1 %." },
      { table: { head: ["", "Minderdurchblutung ('prärenal')", "Tubulusschaden (z.B. akute Tubulusnekrose)"], rows: [
        ["Logik", "Tubuli intakt → holen maximal Natrium und Wasser zurück", "Tubuli geschädigt → können nicht mehr zurückholen"],
        ["Fraktionelle Natriumausscheidung", "< 1 %", "meist > 2 %"],
        ["Urin-Osmolalität", "hoch (> ca. 500 mosmol/kg)", "nahe Plasma (ca. 300–350)"],
        ["Grenzen", "Unter Diuretika falsch hoch → fraktionelle Harnstoffausscheidung < 35 % spricht dann für 'prärenal'", "Bei Kontrastmittel, Sepsis, Myoglobin teils auch niedrig"]
      ] } },
      { h: "Freies Wasser" },
      { formel: "Freiwasser-Clearance = Urinzeitvolumen − osmolare Clearance  (osmolare Clearance = Urin-Osmolalität × Urinzeitvolumen / Plasma-Osmolalität)", erkl: "Positiv = die Niere scheidet netto freies Wasser aus (verdünnter Urin), negativ = sie hält freies Wasser zurück (konzentrierter Urin)." },
      "Für die Natriumkonzentration im Blut ist die **elektrolytfreie Wasserclearance** aussagekräftiger: ==Ist (Urin-Natrium + Urin-Kalium) höher als das Plasma-Natrium, hält die Niere netto Wasser zurück – das Serumnatrium wird weiter sinken.=="
    ],
    merke: [
      "Clearance = Urinkonzentration × Urinvolumen / Plasmakonzentration.",
      "Inulin = GFR; Kreatinin überschätzt (Sekretion); Para-Aminohippursäure ≈ Nierenplasmafluss.",
      "Kreatinin ∝ 1/GFR, aber verzögert; eGFR nur im Gleichgewicht gültig.",
      "Fraktionelle Natriumausscheidung < 1 % = Tubuli halten fest ('prärenal'); > 2 % = Tubulusschaden; unter Diuretika fraktionelle Harnstoffausscheidung nutzen.",
      "Urin-Natrium + Urin-Kalium > Plasma-Natrium → Niere hält Wasser zurück."
    ],
    warum: [
      { q: "Warum bedeutet ein Kreatininanstieg von 0,7 auf 1,0 mg/dl bei einem jungen Patienten einen erheblichen Funktionsverlust?", a: "Kreatinin verhält sich umgekehrt proportional zur GFR. Ein Anstieg um ca. 40 % entspricht im Gleichgewicht einem GFR-Verlust von ca. 30 %. Weil der Ausgangswert niedrig war, liegt der neue Wert noch im 'Normbereich' – der Verlust wird leicht übersehen." },
      { q: "Warum ist die fraktionelle Natriumausscheidung unter Furosemid nicht verwertbar?", a: "Furosemid blockiert die Natriumrückresorption im dicken aufsteigenden Teil. Auch bei intakten Tubuli und Minderdurchblutung wird dann viel Natrium ausgeschieden – der Wert ist falsch hoch. Harnstoff wird überwiegend im proximalen Tubulus zurückgeholt und ist von Schleifendiuretika weniger betroffen; deshalb nutzt man dann die fraktionelle Harnstoffausscheidung." }
    ],
    klinik: [
      "Medikamente nach geschätzter Clearance dosieren – bei akuter Nierenschädigung ist die eGFR unzuverlässig, oft muss man vorsichtig schätzen und Spiegel messen.",
      "Sarkopene, ältere Patienten: 'normales' Kreatinin bei deutlich verminderter GFR möglich.",
      "Junge Polytrauma- und Sepsispatienten: erhöhte Clearance → β-Laktam-Spiegel messen bzw. höher oder als Dauerinfusion dosieren."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie wird die Clearance eines Stoffes berechnet?", a: "Clearance = Urinkonzentration × Urinzeitvolumen / Plasmakonzentration (in ml/min)." },
      { q: "Spezialwissen Niere: Welcher Stoff misst die GFR exakt, welcher den Nierenplasmafluss, und warum überschätzt Kreatinin die GFR?", a: "Inulin = GFR (nur filtriert); Para-Aminohippursäure ≈ Nierenplasmafluss (fast vollständig sezerniert); Kreatinin wird zusätzlich sezerniert (ca. 10–20 %, bei niedriger GFR mehr)." },
      { q: "Spezialwissen Niere: Warum ist die eGFR bei akuter Nierenschädigung unzuverlässig?", a: "Kreatinin braucht Stunden bis Tage bis zum neuen Gleichgewicht; eGFR-Formeln setzen ein Gleichgewicht voraus. Zusätzlich verdünnt Volumengabe das Kreatinin." },
      { q: "Spezialwissen Niere: Wie wird die fraktionelle Natriumausscheidung berechnet und interpretiert?", a: "(Urin-Na × Plasma-Kreatinin) / (Plasma-Na × Urin-Kreatinin) × 100; < 1 % spricht für Minderdurchblutung mit intakten Tubuli, > 2 % für Tubulusschaden; unter Diuretika fraktionelle Harnstoffausscheidung (< 35 % = prärenal) nutzen." },
      { q: "Spezialwissen Niere: Woran erkennt man an Urinwerten, dass die Niere netto freies Wasser zurückhält?", a: "Wenn (Urin-Natrium + Urin-Kalium) höher ist als das Plasma-Natrium (negative elektrolytfreie Wasserclearance) – das Serumnatrium wird weiter sinken." },
      { q: "Spezialwissen Niere: Was ist die erhöhte renale Clearance und warum ist sie relevant?", a: "Eine Kreatinin-Clearance > 130 ml/min/1,73 m² bei (oft jungen) Intensivpatienten; renal ausgeschiedene Antibiotika werden dann leicht unterdosiert." }
    ]
  });

  CH.push({
    id: "proximal",
    level: "Zelle",
    title: "Der proximale Tubulus – das Arbeitstier des Nephrons",
    leitfrage: "Wie holt der proximale Tubulus zwei Drittel des Filtrats zurück – und warum müssen Schleifendiuretika hier erst ausgeschieden werden, bevor sie wirken?",
    einfach: "Der proximale Tubulus ist wie ein großer Sortierbetrieb direkt hinter dem Filter: Er holt zwei Drittel von Salz und Wasser und praktisch allen Zucker und alle Eiweißbausteine zurück. Angetrieben wird alles von einer einzigen Pumpe auf der Blutseite, die Natrium aus der Zelle wirft – alle anderen Transporter 'reiten' auf dem dadurch entstehenden Natriumgefälle.",
    body: [
      { h: "Was zurückgeholt wird" },
      { table: { head: ["Stoff", "Anteil des Filtrats (ca.)"], rows: [
        ["Natrium, Wasser, Kalium", "ca. 65 %"],
        ["Glukose, Aminosäuren", "ca. 100 %"],
        ["Bicarbonat", "ca. 80 %"],
        ["Phosphat", "Großteil (ca. 80 %)"]
      ] } },
      "==Die Rückresorption ist isoosmotisch: Wasser folgt dem Salz sofort== (über Aquaporin-1 und zwischen den Zellen); die Tubulusflüssigkeit bleibt so konzentriert wie Plasma.",
      { h: "Der Motor" },
      { kette: [
        "Die Natrium-Kalium-Pumpe auf der Blutseite befördert Natrium aus der Zelle (ATP-Verbrauch)",
        "Das Natrium in der Zelle bleibt niedrig → starkes Natriumgefälle vom Tubulus in die Zelle",
        "Transporter auf der Tubulusseite nutzen dieses Gefälle, um andere Stoffe mitzunehmen (sekundär aktiver Transport)",
        "==Eine einzige Energiequelle treibt fast den gesamten Transport an=="
      ] },
      { ul: [
        "**Natrium-Protonen-Austauscher (NHE3):** Natrium hinein, Säure (H⁺) hinaus – Grundlage der Bicarbonatrückgewinnung.",
        "**Natrium-Glukose-Cotransporter SGLT2** (erster Abschnitt, ca. 90 % der Glukose) und **SGLT1** (letzter Abschnitt, Rest). Die Nierenschwelle für Glukose liegt bei ca. 180 mg/dl (10 mmol/l).",
        "Natriumgekoppelte Transporter für Aminosäuren und Phosphat (Parathormon senkt die Phosphatrückresorption)."
      ] },
      { h: "Bicarbonat zurückholen – Schritt für Schritt" },
      { kette: [
        "Die Zelle gibt Säure (H⁺) ins Tubuluslumen ab",
        "H⁺ + filtriertes Bicarbonat → Kohlensäure",
        "Das Enzym Carboanhydrase IV am Bürstensaum spaltet sie in CO₂ + Wasser; CO₂ wandert in die Zelle",
        "In der Zelle bildet die Carboanhydrase II wieder H⁺ + Bicarbonat",
        "Bicarbonat verlässt die Zelle zum Blut (Natrium-Bicarbonat-Cotransporter NBCe1), H⁺ wird erneut abgegeben",
        "==Für jedes abgegebene H⁺ wird ein filtriertes Bicarbonat zurückgewonnen=="
      ] },
      "==Acetazolamid hemmt die Carboanhydrase → Bicarbonat geht im Urin verloren → metabolische Azidose== (therapeutisch genutzt bei metabolischer Alkalose und Höhenkrankheit).",
      { h: "Ausscheidung (Sekretion)" },
      "Der proximale Tubulus scheidet aktiv an Eiweiß gebundene Stoffe aus, die kaum filtriert werden: **organische Anionen** (Transporter OAT1/OAT3: Penicilline, Schleifendiuretika, Thiazide, NSAR, Harnsäure) und **organische Kationen** (OCT2/MATE: Kreatinin, Metformin).",
      { kette: [
        "Furosemid ist stark eiweißgebunden und wird kaum filtriert",
        "Es wirkt aber von der Tubulusseite (am NKCC2 der Henle-Schleife)",
        "==Es muss erst im proximalen Tubulus über organische Anionentransporter ins Lumen ausgeschieden werden==",
        "Bei Hypalbuminämie (verteilt sich mehr außerhalb der Gefäße) und Urämie (Konkurrenz durch andere Anionen) kommt weniger an → höhere Dosen nötig"
      ], titel: "Warum Schleifendiuretika manchmal schlecht wirken" },
      { h: "Weitere Aufgaben" },
      { ul: [
        "**Ammoniakbildung** aus Glutamin: Ammonium wird ausgeschieden, und dabei entsteht **neues Bicarbonat** (gesteigert bei Azidose und Hypokaliämie).",
        "**Glomerulotubuläres Gleichgewicht:** Steigt die GFR, wird proportional mehr zurückgeholt.",
        "**Hormon:** Aktivierung von Vitamin D (1α-Hydroxylase) zu Calcitriol.",
        "**Aufnahme kleiner filtrierter Eiweiße** (Rezeptoren Megalin/Cubilin) – über diesen Weg reichern sich auch Aminoglykoside an (Nierenschaden)."
      ] },
      "Ein Ausfall vieler proximaler Funktionen (**Fanconi-Syndrom**) zeigt sich als Zucker im Urin bei normalem Blutzucker, Aminosäuren-, Phosphat- und Bicarbonatverlust (proximale renal-tubuläre Azidose)."
    ],
    merke: [
      "Ca. 65 % Natrium/Wasser isoosmotisch, ~100 % Glukose/Aminosäuren, ca. 80 % Bicarbonat.",
      "Motor: Natrium-Kalium-Pumpe auf der Blutseite; Tubulusseite: NHE3, SGLT2 (90 % Glukose), SGLT1.",
      "Bicarbonat-Rückgewinnung über H⁺-Abgabe + Carboanhydrase IV/II + NBCe1 (→ Acetazolamid).",
      "Sekretion organischer Anionen (Diuretika, Penicilline) und Kationen (Kreatinin, Metformin).",
      "Ammoniakbildung aus Glutamin = Quelle neuen Bicarbonats."
    ],
    warum: [
      { q: "Warum scheiden Patienten unter SGLT2-Hemmern nur etwa die Hälfte der filtrierten Glukose aus und nicht alles?", a: "SGLT2 übernimmt normalerweise ca. 90 % der Glukoserückresorption im vorderen Abschnitt. Wird er gehemmt, erreicht mehr Glukose den hinteren Abschnitt, wo SGLT1 seine Reserve nutzt und einen erheblichen Teil zurückholt." },
      { q: "Warum führt Acetazolamid zu einer metabolischen Azidose?", a: "Ohne Carboanhydrase kann filtriertes Bicarbonat im proximalen Tubulus nicht mehr zurückgewonnen werden. Es geht mit dem Urin verloren (alkalischer Urin), das Bicarbonat im Blut sinkt – metabolische Azidose mit normaler Anionenlücke." }
    ],
    klinik: [
      "Metformin wird tubulär ausgeschieden und häuft sich bei eingeschränkter Nierenfunktion an (Laktatazidose-Risiko) → perioperativ nach Leitlinie pausieren.",
      "Aminoglykoside reichern sich über Megalin in den Tubuluszellen an → Spiegel messen, Einmaldosierung pro Tag.",
      "SGLT2-Hemmer: Zucker im Urin ist gewollt; Ketoazidose bei nur leicht erhöhtem Blutzucker möglich → mindestens 3 Tage vor elektiven Eingriffen pausieren."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Welche Anteile des Filtrats holt der proximale Tubulus zurück?", a: "Ca. 65 % von Natrium, Wasser und Kalium (isoosmotisch), ca. 100 % von Glukose und Aminosäuren, ca. 80 % des Bicarbonats und den Großteil des Phosphats." },
      { q: "Spezialwissen Niere: Beschreibe die Bicarbonatrückgewinnung im proximalen Tubulus.", a: "Abgegebenes H⁺ (NHE3) bildet mit filtriertem Bicarbonat Kohlensäure → Carboanhydrase IV spaltet in CO₂ + Wasser → CO₂ in die Zelle → Carboanhydrase II bildet H⁺ + Bicarbonat → Bicarbonat über NBCe1 ins Blut." },
      { q: "Spezialwissen Niere: Wie verteilt sich die Glukoserückresorption auf SGLT2 und SGLT1, und wo liegt die Nierenschwelle?", a: "SGLT2 ca. 90 %, SGLT1 den Rest; Nierenschwelle ca. 180 mg/dl (10 mmol/l)." },
      { q: "Spezialwissen Niere: Warum müssen Schleifendiuretika im proximalen Tubulus ausgeschieden werden?", a: "Sie sind eiweißgebunden, werden kaum filtriert und wirken von der Tubulusseite am NKCC2 – ins Lumen gelangen sie über organische Anionentransporter (OAT1/3)." },
      { q: "Spezialwissen Niere: Welche Bedeutung hat die Ammoniakbildung im proximalen Tubulus?", a: "Aus Glutamin entstehen Ammonium (wird ausgeschieden) und neues Bicarbonat – der wichtigste anpassungsfähige Weg der Säureausscheidung, gesteigert bei Azidose und Hypokaliämie." },
      { q: "Spezialwissen Niere: Was kennzeichnet ein Fanconi-Syndrom?", a: "Ausfall vieler proximaler Funktionen: Zucker im Urin bei normalem Blutzucker, Aminosäuren-, Phosphat- und Bicarbonatverlust (proximale renal-tubuläre Azidose)." }
    ]
  });

  CH.push({
    id: "konzentrierung",
    level: "Gewebe",
    title: "Henle-Schleife, Gegenstromprinzip und Harnkonzentrierung",
    leitfrage: "Wie baut die Niere ein Salzgefälle bis ca. 1200 mosmol/kg auf – und warum zerstören Schleifendiuretika sowohl das Konzentrieren als auch das Verdünnen des Urins?",
    einfach: "Die Henle-Schleife ist eine Haarnadel: Im aufsteigenden Schenkel wird Salz ins umliegende Gewebe gepumpt, Wasser kann aber nicht folgen. So wird das Nierenmark immer salziger, je tiefer man kommt. Am Ende läuft das Sammelrohr durch dieses salzige Gewebe – und wenn das Hormon ADH 'Wasserkanäle öffnen' befiehlt, wird dem Urin Wasser entzogen. So kann die Niere je nach Bedarf sehr konzentrierten oder sehr verdünnten Urin bilden.",
    body: [
      { h: "Die Abschnitte der Henle-Schleife" },
      { table: { head: ["Abschnitt", "Wasser", "Kochsalz", "Folge"], rows: [
        ["Dünner absteigender Teil", "durchlässig (Aquaporin-1)", "kaum durchlässig", "Wasser strömt ins salzige Mark → Tubulusflüssigkeit wird konzentrierter"],
        ["Dünner aufsteigender Teil", "undurchlässig", "tritt passiv aus", "Verdünnung beginnt"],
        ["Dicker aufsteigender Teil", "undurchlässig", "wird aktiv hinausgepumpt (NKCC2)", "'Verdünnungsabschnitt': die Flüssigkeit verlässt ihn mit ca. 100 mosmol/kg"]
      ] } },
      { h: "Der dicke aufsteigende Teil – Motor des Gradienten" },
      { kette: [
        "Der Na-K-2Cl-Cotransporter (NKCC2) nimmt 1 Natrium, 1 Kalium und 2 Chlorid in die Zelle auf",
        "Kalium fließt über den Kaliumkanal ROMK zurück ins Lumen (Recycling)",
        "Dadurch wird das Lumen elektrisch positiv",
        "==Diese Spannung treibt Natrium, Calcium und Magnesium zwischen den Zellen hindurch ins Blut (Kanäle aus Claudin-16/-19)=="
      ] },
      "Hier werden ca. **25 %** des filtrierten Natriums zurückgeholt (Mount 2014). ==Schleifendiuretika blockieren NKCC2 → weniger Spannung → auch Calcium und Magnesium gehen verloren (Hyperkalziurie, Hypomagnesiämie).== Das Bartter-Syndrom (Mutationen u.a. von NKCC2 oder ROMK) wirkt wie eine angeborene Schleifendiuretika-Gabe.",
      { h: "Gegenstrom-Multiplikation" },
      { kette: [
        "Der aufsteigende Schenkel pumpt Salz hinaus, Wasser bleibt drin → an jeder Stelle ca. 200 mosmol/kg Unterschied zum absteigenden Schenkel ('Einzeleffekt')",
        "Der absteigende Schenkel gibt Wasser an das salzige Gewebe ab, seine Flüssigkeit wird konzentrierter und fließt tiefer",
        "Dieser Effekt wiederholt und addiert sich entlang der ganzen Schleife",
        "==Vom Übergang Rinde/Mark (ca. 300 mosmol/kg) bis zur Papillenspitze entsteht ein Gefälle bis ca. 1200 mosmol/kg=="
      ], titel: "Wie der Salzgradient entsteht" },
      "Im **äußeren Mark** besteht der Gradient vor allem aus Kochsalz, im **inneren Mark** zusätzlich aus **Harnstoff**.",
      { h: "Harnstoff-Recycling" },
      "ADH öffnet im inneren Sammelrohr Harnstoff-Transporter (UT-A1/UT-A3). Harnstoff, der im Sammelrohr durch Wasserentzug konzentriert wurde, strömt ins Mark und ==liefert etwa die Hälfte der Osmolalität im inneren Mark== (Sands & Layton 2009). Sehr eiweißarme Ernährung (wenig Harnstoff) schwächt deshalb die Konzentrierungsfähigkeit.",
      { h: "Vasa recta – Versorgung ohne Auswaschen" },
      "Die haarnadelförmigen Gefäße des Marks laufen gegensinnig: Absteigend nehmen sie Salz auf und geben Wasser ab, aufsteigend umgekehrt. ==So wird das Mark versorgt, ohne den Gradienten wegzuspülen.== Ein hoher Markfluss (Gefäßerweiterung, osmotische Diurese) wäscht den Gradienten aus.",
      { h: "Grenzen" },
      { ul: [
        "Urin-Osmolalität beim Erwachsenen ca. **50–1200 mosmol/kg**.",
        "Täglich müssen ca. 600–900 mosmol gelöste Teilchen ausgeschieden werden → ==minimales Urinvolumen ca. 0,5 l/Tag== (600 / 1200).",
        "Umgekehrt begrenzt eine sehr geringe Teilchenzufuhr ('Tea and Toast', Bierpotomanie) die Wasserausscheidung: Bei 250 mosmol/Tag und minimal 50 mosmol/kg können höchstens ca. 5 l freies Wasser ausgeschieden werden – trinkt der Patient mehr, sinkt das Natrium."
      ] }
    ],
    merke: [
      "Absteigend: wasser-, nicht salzdurchlässig; aufsteigend: salz-, nicht wasserdurchlässig.",
      "Dicker aufsteigender Teil: NKCC2 + ROMK → Lumen positiv → Calcium/Magnesium zwischen den Zellen; ca. 25 % des Natriums.",
      "Gegenstrom-Multiplikation (Kochsalz) + Harnstoff-Recycling (ADH) → bis ca. 1200 mosmol/kg.",
      "Vasa recta = Gegenstrom-Austauscher; hoher Markfluss wäscht den Gradienten aus.",
      "Minimales Urinvolumen ca. 0,5 l/Tag; minimale Osmolalität ca. 50 mosmol/kg."
    ],
    warum: [
      { q: "Warum kann ein Patient unter Furosemid weder maximal konzentrieren noch maximal verdünnen?", a: "Der dicke aufsteigende Teil erzeugt mit NKCC2 sowohl das salzige Mark (Voraussetzung zum Konzentrieren im Sammelrohr unter ADH) als auch die verdünnte Tubulusflüssigkeit (Voraussetzung zur Ausscheidung freien Wassers). Furosemid blockiert NKCC2 und hebt beides auf – der Urin nähert sich der Plasmaosmolalität." },
      { q: "Warum verursachen Thiazide häufiger eine Hyponatriämie als Schleifendiuretika?", a: "Thiazide wirken erst im distalen Tubulus, also nach der Henle-Schleife. Das salzige Mark bleibt erhalten, und unter ADH kann das Sammelrohr weiter Wasser zurückholen, während Natrium verloren geht. Schleifendiuretika zerstören den Gradienten und begrenzen so die Wasserrückholung." }
    ],
    klinik: [
      "Schleifendiuretika bei Hyperkalzämie (nach ausreichender Volumengabe) nutzen den Calciumverlust; Thiazide senken dagegen die Calciumausscheidung.",
      "Furosemid verhindert laut KDIGO keine akute Nierenschädigung und soll dafür nicht eingesetzt werden.",
      "Osmotische Diurese (sehr hoher Blutzucker, Mannitol) wäscht den Markgradienten aus → viel Urin trotz Volumenmangel."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie unterscheiden sich absteigender und aufsteigender Teil der Henle-Schleife in ihrer Durchlässigkeit?", a: "Dünner absteigender Teil: wasserdurchlässig (Aquaporin-1), kaum salzdurchlässig. Aufsteigender Teil: wasserundurchlässig; dünn passiver, dick aktiver Kochsalzaustritt (NKCC2)." },
      { q: "Spezialwissen Niere: Warum holt der dicke aufsteigende Teil auch Calcium und Magnesium zurück?", a: "Kalium-Recycling über ROMK macht das Lumen positiv; diese Spannung treibt Calcium und Magnesium zwischen den Zellen hindurch (Claudin-16/-19). Schleifendiuretika vermindern das → Hyperkalziurie, Hypomagnesiämie." },
      { q: "Spezialwissen Niere: Welche Rolle spielt Harnstoff bei der Harnkonzentrierung?", a: "ADH öffnet im inneren Sammelrohr Harnstoff-Transporter (UT-A1/UT-A3); Harnstoff strömt ins Mark und liefert etwa die Hälfte der Osmolalität des inneren Marks." },
      { q: "Spezialwissen Niere: Warum spülen die Vasa recta den Salzgradienten nicht weg?", a: "Sie verlaufen haarnadelförmig als Gegenstrom-Austauscher (absteigend Salzaufnahme/Wasserabgabe, aufsteigend umgekehrt) und haben einen geringen Fluss." },
      { q: "Spezialwissen Niere: Welche Grenzen hat die Konzentrierungs- und Verdünnungsfähigkeit der Niere?", a: "Urin-Osmolalität ca. 50–1200 mosmol/kg; minimales Urinvolumen ca. 0,5 l/Tag bei ca. 600 mosmol Teilchenausscheidung; bei sehr geringer Teilchenzufuhr ist die maximale Wasserausscheidung begrenzt (z.B. 250/50 = ca. 5 l)." },
      { q: "Spezialwissen Niere: Warum verursachen Thiazide häufiger Hyponatriämien als Schleifendiuretika?", a: "Sie wirken nach der Schleife: Der Markgradient bleibt, unter ADH wird weiter Wasser zurückgeholt, während Natrium verloren geht." }
    ]
  });

  CH.push({
    id: "distal",
    level: "Zelle",
    title: "Distaler Tubulus, Sammelrohr und Kaliumhaushalt",
    leitfrage: "Wie stimmt der letzte Abschnitt des Nephrons Natrium, Kalium, Wasser und Säure fein ab – und warum ist Kalium vor allem eine Frage der Ausscheidung?",
    einfach: "Am Ende des Nephrons sitzen die 'Feinjustierer'. Hormone entscheiden hier, wie viel Salz und Wasser der Körper behält: Aldosteron holt Natrium zurück und gibt dafür Kalium ab, ADH baut Wasserkanäle ein. Kalium wird vorne fast komplett zurückgeholt – wie viel ausgeschieden wird, entscheidet sich erst hier am Ende.",
    body: [
      { h: "Distaler Tubulus" },
      "Der **Natrium-Chlorid-Cotransporter (NCC)** holt ca. 5 % des Natriums zurück und ist das Ziel der **Thiazide**. Gesteuert wird er über WNK-Kinasen (Überaktivität → familiäre hyperkaliämische Hypertonie; Ausfall des NCC → Gitelman-Syndrom). Calcium wird hier **durch die Zelle** zurückgeholt (Kanal TRPV5, gefördert durch Parathormon und Calcitriol), Magnesium über den Kanal TRPM6 (Subramanya & Ellison 2014).",
      { h: "Sammelrohr: Hauptzellen" },
      { kette: [
        "Aldosteron aktiviert den Mineralokortikoidrezeptor",
        "Mehr epitheliale Natriumkanäle (ENaC) und Natrium-Kalium-Pumpen",
        "Natrium wird ohne begleitendes Anion zurückgeholt → das Lumen wird negativ",
        "==Diese Spannung treibt Kalium über die Kanäle ROMK und BK ins Lumen → Kaliumausscheidung=="
      ], titel: "Natrium hinein, Kalium hinaus" },
      { ul: [
        "Blockiert wird das durch Amilorid, Triamteren (ENaC) und Spironolacton/Eplerenon (Mineralokortikoidrezeptor) – ==und durch das Antibiotikum Trimethoprim (wirkt wie Amilorid) → Hyperkaliämie==.",
        "**Wasser:** ADH → V2-Rezeptor → cAMP → **Aquaporin-2**-Kanäle werden in die Lumenseite eingebaut; auf der Blutseite verlässt das Wasser die Zelle über Aquaporin-3/-4 (Pearce et al. 2015)."
      ] },
      { h: "Sammelrohr: Schaltzellen" },
      "**Typ-A-Schaltzellen** geben Säure ab (Protonenpumpe, H⁺/K⁺-ATPase) und Bicarbonat ins Blut (bei Azidose). **Typ-B-Schaltzellen** geben Bicarbonat ins Lumen ab (Austauscher Pendrin) – bei Alkalose (Roy et al. 2015).",
      { h: "Aldosteron" },
      "==Zwei Hauptreize: Angiotensin II (Volumenmangel) und Hyperkaliämie== (direkt an der Nebennierenrinde), ACTH spielt eine Nebenrolle. Wirkung: Natriumrückhalt sowie Kalium- und Säureausscheidung. So reguliert ein Hormon gleichzeitig Volumen und Kalium.",
      { h: "Kaliumhaushalt" },
      "Der Körper enthält ca. **3500 mmol Kalium** (ca. 50 mmol/kg), davon ca. **98 % in den Zellen**. ==Schon kleine Verschiebungen zwischen innen und außen verändern das Serumkalium stark.==",
      { table: { head: ["Ebene", "Kalium in die Zelle (Serum ↓)", "Kalium aus der Zelle bzw. weniger Ausscheidung (Serum ↑)"], rows: [
        ["Verteilung (Minuten)", "Insulin, β2-Agonisten (aktivieren die Natrium-Kalium-Pumpe), Alkalose", "Insulinmangel, β-Blocker, mineralische Azidose, Hyperosmolalität, Zellzerfall (Hämolyse, Rhabdomyolyse, Tumorlyse), Succinylcholin bei vermehrten Rezeptoren"],
        ["Ausscheidung (Stunden bis Tage)", "Aldosteron, viel Natrium und hoher Fluss im Sammelrohr (Diuretika), nicht resorbierbare Anionen, Magnesiummangel", "Niereninsuffizienz, Aldosteronmangel, ACE-Hemmer/Angiotensin-Rezeptorblocker, Mineralokortikoid-Antagonisten, Amilorid, Trimethoprim, NSAR, Heparin, Calcineurin-Inhibitoren"]
      ] } },
      "Filtriertes Kalium wird größtenteils im proximalen Tubulus (ca. 65 %) und in der Henle-Schleife (ca. 25 %) zurückgeholt. ==Wie viel ausgeschieden wird, entscheidet die Kaliumabgabe im Sammelrohr== (Palmer & Clegg 2016). Ca. 90 % der täglichen Kaliumzufuhr verlassen den Körper über die Niere, ca. 10 % über den Darm.",
      { kette: [
        "Magnesium in der Zelle bremst normalerweise den Kaliumkanal ROMK",
        "Magnesiummangel → die Bremse fällt weg",
        "Kalium geht über die Niere verloren",
        "==Die Hypokaliämie lässt sich erst ausgleichen, wenn auch Magnesium ersetzt wird=="
      ], titel: "Warum Magnesium beim Kalium mitzählt" }
    ],
    merke: [
      "Distaler Tubulus: NCC (Thiazide), Calcium über TRPV5 (Parathormon), Magnesium über TRPM6.",
      "Hauptzelle: ENaC (Aldosteron) → Lumen negativ → Kaliumabgabe (ROMK/BK); Aquaporin-2 (ADH/V2).",
      "Schaltzellen: Typ A Säureabgabe, Typ B Bicarbonatabgabe (Pendrin).",
      "Aldosteron-Reize: Angiotensin II und Hyperkaliämie.",
      "Kalium: 98 % in den Zellen; Ausscheidung = Abgabe im Sammelrohr; Magnesiummangel → hartnäckige Hypokaliämie."
    ],
    warum: [
      { q: "Warum verursachen Schleifen- und Thiaziddiuretika eine Hypokaliämie?", a: "Sie bringen mehr Natrium und Flüssigkeit ins Sammelrohr. Mehr Natriumrückholung über ENaC macht das Lumen negativer, der höhere Fluss öffnet BK-Kanäle und spült abgegebenes Kalium fort. Zusätzlich aktiviert der Volumenverlust das RAAS (Aldosteron) – alle drei Faktoren steigern die Kaliumausscheidung." },
      { q: "Warum kann Trimethoprim eine Hyperkaliämie auslösen?", a: "Trimethoprim ähnelt Amilorid und blockiert ENaC in den Hauptzellen. Ohne Natriumrückholung fehlt die negative Spannung im Lumen, die die Kaliumabgabe antreibt. Zusätzlich hemmt es die Kreatininausscheidung – das Kreatinin steigt, ohne dass die GFR fällt." }
    ],
    klinik: [
      "Perioperative Hyperkaliämie: an ACE-Hemmer/Angiotensin-Rezeptorblocker, Mineralokortikoid-Antagonisten, Trimethoprim, Heparin, NSAR, Niereninsuffizienz, Zellzerfall und Succinylcholin denken.",
      "Bei Hypokaliämie immer Magnesium prüfen und ausgleichen.",
      "Zentraler gegenüber nephrogenem Diabetes insipidus: Desmopressin wirkt nur, wenn V2-Rezeptor und Aquaporin-2 intakt sind (zentrale Form)."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Welche Transporter und Medikamente sind im distalen Tubulus relevant?", a: "Natrium-Chlorid-Cotransporter NCC (Thiazide), Calcium über TRPV5 (Parathormon, Calcitriol), Magnesium über TRPM6; Steuerung über WNK-Kinasen." },
      { q: "Spezialwissen Niere: Wie hängen Natriumrückholung und Kaliumabgabe in der Hauptzelle zusammen?", a: "Natriumrückholung über ENaC (aldosteronabhängig) macht das Lumen negativ; diese Spannung treibt die Kaliumabgabe über ROMK und flussabhängige BK-Kanäle." },
      { q: "Spezialwissen Niere: Wie wirkt ADH im Sammelrohr?", a: "V2-Rezeptor → cAMP → Einbau von Aquaporin-2 in die Lumenseite (Austritt über Aquaporin-3/-4 zum Blut); zusätzlich mehr Harnstoffdurchlässigkeit im inneren Sammelrohr." },
      { q: "Spezialwissen Niere: Welche Aufgaben haben Typ-A- und Typ-B-Schaltzellen?", a: "Typ A: Säureabgabe (Protonenpumpe, H⁺/K⁺-ATPase), Bicarbonat ins Blut. Typ B: Bicarbonatabgabe ins Lumen über Pendrin bei Alkalose." },
      { q: "Spezialwissen Niere: Wie ist das Körperkalium verteilt und wo wird die Kaliumausscheidung reguliert?", a: "Ca. 3500 mmol, ca. 98 % in den Zellen; filtriertes Kalium wird vorne größtenteils zurückgeholt, die Ausscheidung entscheidet die Abgabe im Sammelrohr (Aldosteron, Fluss, Natriumangebot)." },
      { q: "Spezialwissen Niere: Warum ist eine Hypokaliämie bei Magnesiummangel schwer auszugleichen?", a: "Magnesium bremst in der Zelle den Kaliumkanal ROMK; bei Mangel fällt die Bremse weg, und Kalium geht über die Niere verloren, bis Magnesium ersetzt ist." },
      { q: "Spezialwissen Niere: Welche Faktoren verschieben Kalium in die Zellen?", a: "Insulin, β2-Agonisten (Aktivierung der Natrium-Kalium-Pumpe) und Alkalose." }
    ]
  });

  CH.push({
    id: "wasser",
    level: "System",
    title: "Wasser- und Natriumhaushalt",
    leitfrage: "Warum ist eine Hyponatriämie fast immer ein Wasserproblem – und warum ist das gerade nach Operationen so gefährlich?",
    einfach: "Der Körper hat zwei getrennte Regler: Einer achtet darauf, wie 'salzig' das Blut ist (Konzentration) und steuert dafür das Wasser über Durst und das Hormon ADH. Der andere achtet darauf, wie voll die Gefäße sind (Volumen) und steuert dafür die Salzmenge. Ein niedriges Natrium bedeutet deshalb meist: zu viel Wasser – nicht zu wenig Salz.",
    body: [
      { h: "Flüssigkeitsräume" },
      "Das Körperwasser macht ca. **60 %** des Körpergewichts beim Mann, ca. 50–55 % bei der Frau und ca. 75–80 % beim Neugeborenen aus. ==Ca. 2/3 liegen in den Zellen, 1/3 außerhalb== – davon ca. 3/4 im Gewebe zwischen den Zellen und ca. 1/4 im Blutplasma.",
      { h: "Zwei getrennte Regelkreise" },
      { table: { head: ["", "Osmoregulation", "Volumenregulation"], rows: [
        ["Regelt", "Osmolalität (≈ Natriumkonzentration)", "Effektiv zirkulierendes Volumen"],
        ["Fühler", "Osmorezeptoren im Hypothalamus", "Druckfühler in Gefäßen und Vorhöfen, Vas afferens, Macula densa"],
        ["Stellgröße", "ADH und Durst → Wasserbilanz", "RAAS, Sympathikus, natriuretische Peptide, Druck-Natriurese → Natriumbilanz"],
        ["Störung zeigt sich als", "Hypo- oder Hypernatriämie", "Volumenmangel oder Ödeme"]
      ] } },
      "==Die Natriumkonzentration zeigt also das Verhältnis von Natrium zu Wasser, nicht die Natriummenge. Die Natriummenge bestimmt das Volumen außerhalb der Zellen.==",
      { h: "Steuerung des antidiuretischen Hormons (ADH)" },
      "ADH wird ab einer Osmolalität von ca. **280–285 mosmol/kg** ausgeschüttet und reagiert schon auf Änderungen von 1–2 %. **Andere Reize können das übersteuern:** relevanter Volumenmangel oder Blutdruckabfall, Übelkeit, Schmerz, Stress, Operation, Hypoxie, Hyperkapnie sowie Medikamente (z.B. Carbamazepin, Serotonin-Wiederaufnahmehemmer, Cyclophosphamid).",
      { kette: [
        "Operation, Schmerz, Übelkeit → ADH steigt unabhängig von der Osmolalität",
        "Die Niere hält freies Wasser zurück",
        "Gleichzeitig werden natriumarme (hypotone) Infusionen gegeben",
        "Wasser verdünnt das Blut → Natrium fällt → Wasser strömt in die Hirnzellen",
        "==Hirnödem: hyponatriämische Enzephalopathie (Kinder und junge Frauen besonders gefährdet)=="
      ], titel: "Postoperative Hyponatriämie" },
      "==Deshalb werden für Erhaltungsinfusionen bei Kindern isotone Lösungen empfohlen== (Amerikanische Akademie für Kinderheilkunde 2018, NICE). Ringer-Laktat ist mit ca. 130 mmol/l Natrium leicht hypoton – wichtig bei erhöhtem Hirndruck.",
      { h: "Behandlung der Hyponatriämie (Europäische Leitlinie 2014)" },
      { ul: [
        "**Schwere Symptome** (Krampfanfall, Koma, Erbrechen): 150 ml Kochsalzlösung 3 % über 20 min, ggf. wiederholen, bis das Natrium um 5 mmol/l gestiegen ist.",
        "**Obergrenze der Korrektur:** höchstens 10 mmol/l in den ersten 24 h und 8 mmol/l in jedem weiteren 24-h-Abschnitt – ==sonst droht das osmotische Demyelinisierungssyndrom== (Risiko besonders bei Alkoholkrankheit, Mangelernährung, Hypokaliämie, Lebererkrankung).",
        "Bei zu schneller Korrektur: Gegensteuern mit freiem Wasser bzw. Desmopressin erwägen."
      ] },
      { falle: "„Aus Angst vor Demyelinisierung gebe ich bei akuter symptomatischer Hyponatriämie keine hypertone Kochsalzlösung.“ – Falsch. Eine akute, schwer symptomatische Hyponatriämie ist ein Notfall: Der Anstieg um ca. 5 mmol/l ist lebensrettend. Die Obergrenzen gelten für die Gesamtkorrektur über 24 h." },
      { h: "Hypernatriämie" },
      "Sie bedeutet ein **Wasserdefizit** im Verhältnis zum Natrium (fehlender Durst oder kein Zugang zu Wasser, Diabetes insipidus, osmotische Diurese, Kochsalz- oder Bicarbonatzufuhr). ==Eine chronische Hypernatriämie langsam ausgleichen (ca. ≤ 10–12 mmol/l pro 24 h)==, sonst droht ein Hirnödem.",
      { h: "Infusionen und Urin" },
      "Kochsalzlösung 0,9 % enthält je 154 mmol/l Natrium und Chlorid. ==Beim Syndrom der inadäquaten ADH-Sekretion (SIADH) mit sehr konzentriertem Urin kann sie das Natrium sogar weiter senken==: Die Niere scheidet das Salz in wenig Urin aus und behält das Wasser."
    ],
    merke: [
      "Körperwasser 60 % (Mann); 2/3 in den Zellen; außerhalb 3/4 Gewebe, 1/4 Plasma.",
      "Natriumkonzentration = Wasserfrage (ADH, Durst); Natriummenge = Volumenfrage (RAAS u.a.).",
      "Postoperativ nicht-osmotisches ADH → keine hypotonen Infusionen (Kinder isoton).",
      "Hyponatriämie-Korrektur max. 10 mmol/l (erste 24 h), dann max. 8 mmol/l pro 24 h.",
      "Schwer symptomatisch: 150 ml NaCl 3 % über 20 min, Ziel +5 mmol/l."
    ],
    warum: [
      { q: "Warum kann Kochsalzlösung 0,9 % beim SIADH das Serumnatrium weiter senken?", a: "Beim SIADH ist der Urin fest hoch konzentriert (z.B. 600 mosmol/kg). 1 l NaCl 0,9 % enthält ca. 308 mosmol. Die Niere scheidet diese Teilchen in nur ca. 0,5 l Urin aus und behält ca. 0,5 l freies Wasser – das verdünnt das Blut weiter." },
      { q: "Warum ist die Natriumkonzentration kein Maß für den Volumenstatus?", a: "Die Konzentration ergibt sich aus dem Verhältnis von Natrium zu Wasser und wird über ADH und Durst geregelt. Das Volumen hängt von der Natriummenge ab, geregelt über RAAS, Sympathikus und natriuretische Peptide. Eine Hyponatriämie kommt deshalb bei Volumenmangel, normalem Volumen und Überwässerung vor (z.B. Diuretika, SIADH, Herzinsuffizienz)." }
    ],
    klinik: [
      "Postoperativ Natrium kontrollieren: bei Kindern, nach großen Eingriffen, nach transurethraler Prostataresektion (Spülflüssigkeit) und nach Hypophysenchirurgie (Diabetes insipidus oder SIADH möglich).",
      "SIADH und zerebrales Salzverlustsyndrom unterscheiden sich im Volumenstatus (normal gegenüber vermindert) – die Therapie ist gegensätzlich (Wasserrestriktion gegenüber Volumen- und Salzgabe).",
      "Hypernatriämie bei Intensivpatienten: oft durch Wasserverlust plus Kochsalzinfusionen – freies Wasser einplanen."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie verteilt sich das Körperwasser auf die Räume?", a: "Ca. 60 % des Körpergewichts (Mann), davon 2/3 in den Zellen und 1/3 außerhalb; außerhalb ca. 3/4 im Gewebe und 1/4 im Plasma." },
      { q: "Spezialwissen Niere: Welche Regelkreise steuern Natriumkonzentration und Natriummenge?", a: "Konzentration = Osmoregulation (Osmorezeptoren, ADH, Durst → Wasserbilanz). Menge = Volumenregulation (RAAS, Sympathikus, natriuretische Peptide, Druck-Natriurese → Natriumbilanz)." },
      { q: "Spezialwissen Niere: Welche nicht-osmotischen Reize steigern die ADH-Freisetzung?", a: "Relevanter Volumenmangel/Blutdruckabfall, Übelkeit, Schmerz, Stress/Operation, Hypoxie, Hyperkapnie und Medikamente (z.B. Carbamazepin, Serotonin-Wiederaufnahmehemmer)." },
      { q: "Spezialwissen Niere: Wie schnell darf eine Hyponatriämie maximal korrigiert werden?", a: "Höchstens 10 mmol/l in den ersten 24 h und 8 mmol/l in jedem weiteren 24-h-Abschnitt (Europäische Leitlinie 2014), sonst osmotisches Demyelinisierungssyndrom." },
      { q: "Spezialwissen Niere: Wie wird eine schwer symptomatische Hyponatriämie akut behandelt?", a: "150 ml NaCl 3 % über 20 min, ggf. wiederholen, bis das Natrium um 5 mmol/l gestiegen ist." },
      { q: "Spezialwissen Niere: Warum werden bei Kindern isotone Erhaltungsinfusionen empfohlen?", a: "Perioperativ ist ADH nicht-osmotisch erhöht; hypotone Lösungen führen zum Rückhalt freien Wassers und zur potenziell tödlichen hyponatriämischen Enzephalopathie (AAP 2018, NICE)." }
    ]
  });

  CH.push({
    id: "saeurebasen",
    level: "System",
    title: "Säure-Basen-Regulation durch die Niere",
    leitfrage: "Wie scheidet die Niere die täglich anfallende Säure aus, und wie erkennt man an Urin und Blut, wo eine Störung liegt?",
    einfach: "Der Stoffwechsel produziert jeden Tag Säure. Puffer im Blut (v.a. Bicarbonat) fangen sie ab, werden dabei aber verbraucht. Die Niere hat deshalb zwei Aufgaben: das gefilterte Bicarbonat nicht zu verlieren und das verbrauchte Bicarbonat neu herzustellen. Dabei scheidet sie die Säure im Urin aus – vor allem gebunden an Ammoniak.",
    body: [
      { h: "Die tägliche Säurelast" },
      "Der Stoffwechsel erzeugt täglich ca. **50–100 mmol nicht-flüchtige Säure** (ca. 1 mmol/kg/Tag), v.a. aus schwefelhaltigen Aminosäuren. ==Diese Säure wird zunächst durch Bicarbonat abgepuffert – die Niere muss es danach neu bilden== (Hamm et al. 2015).",
      { h: "Aufgabe 1: gefiltertes Bicarbonat zurückholen" },
      "Täglich werden ca. **4300 mmol Bicarbonat** filtriert (180 l × 24 mmol/l). Ca. 80 % holt der proximale Tubulus zurück, ca. 15 % die Henle-Schleife, den Rest das Sammelrohr – praktisch vollständig.",
      { h: "Aufgabe 2: neues Bicarbonat bilden" },
      { ul: [
        "**Titrierbare Säure:** Abgegebene Säure wird im Urin v.a. an Phosphat gebunden. Die Menge ist durch die Phosphatausscheidung begrenzt.",
        "**Ammonium:** Im proximalen Tubulus entstehen aus Glutamin Ammonium und ein neues Bicarbonat. Im Sammelrohr wird Ammoniak mit abgegebener Säure als Ammonium im Urin 'gefangen'. ==Dieser Weg ist anpassungsfähig und kann bei chronischer Azidose um ein Vielfaches gesteigert werden.=="
      ] },
      { formel: "Netto-Säureausscheidung = Ammonium + titrierbare Säure − ausgeschiedenes Bicarbonat", erkl: "Der Urin-pH kann bis auf ca. 4,5 sinken." },
      { h: "Urin-Anionenlücke" },
      { formel: "Urin-Anionenlücke = Urin-Natrium + Urin-Kalium − Urin-Chlorid", erkl: "Ammonium wird zusammen mit Chlorid ausgeschieden und wird selbst nicht gemessen." },
      { kette: [
        "Hyperchlorämische Azidose (normale Anionenlücke im Blut)",
        "Gesunde Niere → scheidet viel Ammoniumchlorid aus → viel Chlorid im Urin",
        "==Urin-Anionenlücke negativ → Niere arbeitet richtig, Ursache außerhalb (z.B. Durchfall)==",
        "Urin-Anionenlücke positiv → Ammoniumausscheidung gestört → Ursache in der Niere (z.B. distale renal-tubuläre Azidose, Niereninsuffizienz)"
      ] },
      { h: "Renal-tubuläre Azidosen" },
      { table: { head: ["Typ", "Störung", "Urin-pH", "Kalium"], rows: [
        ["1 (distal)", "Säureabgabe der Typ-A-Schaltzellen gestört", "> 5,5 trotz Azidose", "niedrig; Nierenverkalkung"],
        ["2 (proximal)", "Bicarbonat-Rückgewinnung gestört (oft Fanconi-Syndrom)", "< 5,5, sobald das Blut-Bicarbonat niedrig ist", "niedrig"],
        ["4", "Aldosteronmangel bzw. -resistenz → weniger Ammoniakbildung", "meist < 5,5", "hoch"]
      ] } },
      { h: "Metabolische Alkalose: Entstehung und Aufrechterhaltung" },
      "Sie entsteht durch Säureverlust (Erbrechen, Magensonde), Diuretika, Bicarbonatzufuhr oder Hypokaliämie. ==Normalerweise würde die Niere überschüssiges Bicarbonat schnell ausscheiden – dass die Alkalose bestehen bleibt, braucht einen zweiten Grund:==",
      { kette: [
        "Volumen- und Chloridmangel → RAAS aktiv → proximal mehr Natrium- und Bicarbonatrückholung",
        "Chloridmangel → Typ-B-Schaltzellen können kein Bicarbonat abgeben (Pendrin braucht Chlorid im Lumen)",
        "Aldosteron und Hypokaliämie → mehr Säureabgabe im Sammelrohr",
        "==Die Alkalose bleibt, bis Kochsalz und Kaliumchlorid ersetzt werden== ('chloridsensitive' Alkalose: Urin-Chlorid < ca. 20 mmol/l)"
      ], titel: "Warum die Alkalose nach Erbrechen bestehen bleibt" },
      { h: "Zeitlicher Ablauf und Stewart-Sicht" },
      "Die Ausgleichsreaktion der Niere auf eine Atemstörung dauert **3–5 Tage** – deshalb gelten für akute und chronische respiratorische Störungen unterschiedliche Regeln. Nach Stewart steuert die Niere den pH vor allem über die **Chloridausscheidung** (also die Differenz starker Ionen, SID); Ammonium dient als 'Transportmittel' für Chlorid. ==Große Mengen Kochsalzlösung 0,9 % (SID 0) senken die SID im Blut → hyperchlorämische Azidose.== Balancierte Infusionslösungen verringerten in der SMART-Studie den kombinierten Endpunkt aus Tod, Nierenersatztherapie und bleibender Nierenfunktionsstörung (Semler et al. 2018)."
    ],
    merke: [
      "Säurelast ca. 1 mmol/kg/Tag; Bicarbonatfiltration ca. 4300 mmol/Tag – fast vollständig zurückgeholt.",
      "Neues Bicarbonat über titrierbare Säure (Phosphat) und Ammonium (anpassungsfähig, aus Glutamin).",
      "Urin-Anionenlücke negativ = Ammoniumausscheidung intakt (Ursache außerhalb); positiv = Nierenstörung.",
      "Renal-tubuläre Azidose 1: Urin-pH > 5,5, Kalium ↓; Typ 2: Bicarbonatverlust; Typ 4: Kalium ↑.",
      "Alkalose bleibt durch Volumen-/Chloridmangel, Hypokaliämie und Aldosteron bestehen."
    ],
    warum: [
      { q: "Warum korrigiert sich eine metabolische Alkalose nach Erbrechen ohne Kochsalzgabe nicht von selbst?", a: "Volumenmangel aktiviert das RAAS und steigert die Bicarbonatrückholung. Chloridmangel verhindert die Bicarbonatabgabe der Typ-B-Schaltzellen. Aldosteron und Hypokaliämie fördern die Säureabgabe. Erst Kochsalz und Kaliumchlorid beseitigen diese Faktoren, und die Niere kann das überschüssige Bicarbonat ausscheiden." },
      { q: "Warum spricht eine negative Urin-Anionenlücke bei hyperchlorämischer Azidose für Durchfall statt für eine distale renal-tubuläre Azidose?", a: "Eine gesunde Niere antwortet auf Azidose mit viel Ammoniumausscheidung. Ammonium geht als Ammoniumchlorid in den Urin: Das Urin-Chlorid übersteigt Natrium + Kalium, die Lücke wird negativ. Bei distaler renal-tubulärer Azidose ist die Säure- und damit Ammoniumausscheidung gestört – die Lücke bleibt positiv." }
    ],
    klinik: [
      "Große Infusionsmengen bevorzugt mit balancierten Lösungen statt NaCl 0,9 %.",
      "Chronische Hyperkapnie (COPD): kompensatorisch hohes Bicarbonat – bei Beatmung das CO₂ nicht schlagartig normalisieren (Posthyperkapnie-Alkalose).",
      "Metabolische Alkalose dämpft den Atemantrieb und kann die Entwöhnung vom Beatmungsgerät erschweren."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie groß ist die tägliche nicht-flüchtige Säurelast und wie viel Bicarbonat wird täglich filtriert?", a: "Ca. 50–100 mmol (ca. 1 mmol/kg/Tag); filtriert werden ca. 4300 mmol Bicarbonat pro Tag (180 l × 24 mmol/l)." },
      { q: "Spezialwissen Niere: Über welche zwei Wege bildet die Niere neues Bicarbonat?", a: "Ausscheidung titrierbarer Säure (v.a. an Phosphat gebunden) und Ammoniumausscheidung (Ammonium aus Glutamin, der anpassungsfähige Weg)." },
      { q: "Spezialwissen Niere: Wie wird die Netto-Säureausscheidung berechnet?", a: "Ammonium + titrierbare Säure − ausgeschiedenes Bicarbonat." },
      { q: "Spezialwissen Niere: Was zeigt eine negative bzw. positive Urin-Anionenlücke?", a: "Urin-Na + Urin-K − Urin-Cl. Negativ: viel Ammoniumchlorid im Urin, Niere antwortet richtig (z.B. Durchfall). Positiv: gestörte Ammoniumausscheidung (z.B. distale renal-tubuläre Azidose, Niereninsuffizienz)." },
      { q: "Spezialwissen Niere: Wie unterscheiden sich die renal-tubulären Azidosen Typ 1, 2 und 4?", a: "Typ 1 (distal): Säureabgabe gestört, Urin-pH > 5,5, Hypokaliämie. Typ 2 (proximal): Bicarbonatverlust, Urin-pH < 5,5 bei niedrigem Blut-Bicarbonat, Hypokaliämie. Typ 4: Aldosteronmangel/-resistenz, Hyperkaliämie." },
      { q: "Spezialwissen Niere: Welche Faktoren halten eine metabolische Alkalose aufrecht?", a: "Volumen- und Chloridmangel, Hypokaliämie und Aldosteron; chloridsensitive Formen (Urin-Chlorid < ca. 20 mmol/l) bessern sich durch NaCl/KCl." },
      { q: "Spezialwissen Niere: Wie lange dauert die Ausgleichsreaktion der Niere auf eine Atemstörung?", a: "Etwa 3–5 Tage." }
    ]
  });

  CH.push({
    id: "mineral",
    level: "System",
    title: "Calcium, Phosphat und Magnesium",
    leitfrage: "Wie regeln Niere, Knochen und Hormone Calcium, Phosphat und Magnesium – und warum sind diese Ionen für Herz, Muskeln und Gerinnung in der Anästhesie so wichtig?",
    einfach: "Calcium ist Schalter für Herz, Muskeln, Nerven und Gerinnung – nur das freie (ionisierte) Calcium wirkt. Das Hormon Parathormon hebt das Calcium, wenn es fällt: Es holt Calcium aus dem Knochen, hält es in der Niere zurück und wirft dafür Phosphat hinaus. Magnesium wird vor allem in der Henle-Schleife zurückgeholt – Schleifendiuretika lassen es deshalb schnell sinken.",
    body: [
      { h: "Calcium im Blut" },
      { table: { head: ["Form", "Anteil (ca.)", "Bedeutung"], rows: [
        ["Ionisiert (frei)", "ca. 45–50 % (normal ca. 1,1–1,3 mmol/l)", "biologisch wirksam"],
        ["An Eiweiß gebunden (v.a. Albumin)", "ca. 40 %", "abhängig von Albumin und pH"],
        ["An Anionen gebunden (z.B. Citrat, Phosphat)", "ca. 10 %", "steigt bei Citratgabe"]
      ] } },
      "Gesamtcalcium normal ca. 2,2–2,6 mmol/l. ==Bei niedrigem Albumin ist das Gesamtcalcium erniedrigt, obwohl das freie Calcium normal sein kann – deshalb in der Anästhesie und Intensivmedizin das ionisierte Calcium messen.== Eine Alkalose (z.B. Hyperventilation) erhöht die Bindung an Albumin → freies Calcium sinkt.",
      { kette: [
        "Viele Blutkonserven bzw. Plasma mit Citrat als Gerinnungshemmer",
        "Citrat bindet freies Calcium (v.a. wenn die Leber es nicht schnell genug abbaut: Schock, Unterkühlung, Lebererkrankung)",
        "Ionisiertes Calcium fällt",
        "==Herzmuskelschwäche, Gefäßweitstellung und schlechtere Gerinnung – Calcium ersetzen=="
      ], titel: "Hypokalzämie bei Massivtransfusion" },
      { h: "Calcium in der Niere" },
      "Ca. 60 % des Gesamtcalciums werden filtriert. Zurückgeholt werden davon ca. 65 % im proximalen Tubulus (zwischen den Zellen), ca. 20–25 % im dicken aufsteigenden Teil (zwischen den Zellen, durch die positive Lumenspannung) und ca. 10–15 % im distalen Tubulus (durch die Zelle, gesteuert durch Parathormon). ==Feinregulation also im distalen Tubulus – Thiazide senken hier die Calciumausscheidung, Schleifendiuretika steigern sie in der Schleife.==",
      { h: "Die Hormone" },
      { table: { head: ["Hormon", "Bildungsort und Reiz", "Wirkung"], rows: [
        ["Parathormon (PTH)", "Nebenschilddrüsen, bei niedrigem Calcium (Calcium-Sensor-Rezeptor)", "Calcium ↑: Knochenabbau, distale Calciumrückholung, Calcitriolbildung; Phosphat ↓ (Ausscheidung)"],
        ["Calcitriol (aktives Vitamin D)", "proximaler Tubulus (1α-Hydroxylase), angeregt durch PTH und niedriges Phosphat", "Calcium- und Phosphataufnahme im Darm ↑"],
        ["FGF23", "Knochenzellen, bei hohem Phosphat", "Phosphatausscheidung ↑, Calcitriolbildung ↓"]
      ] } },
      { h: "Phosphat" },
      "Normal ca. 0,8–1,5 mmol/l; ca. 80–90 % des filtrierten Phosphats werden im proximalen Tubulus zurückgeholt (Natrium-Phosphat-Cotransporter, gehemmt durch PTH und FGF23).",
      { kette: [
        "Mangelernährter Patient erhält wieder Nahrung bzw. Glukose (Refeeding)",
        "Insulin treibt Phosphat (und Kalium, Magnesium) in die Zellen",
        "Schwere Hypophosphatämie: zu wenig ATP und 2,3-Bisphosphoglycerat",
        "==Muskelschwäche bis Ateminsuffizienz, Herzschwäche, Hämolyse, Verwirrtheit (Refeeding-Syndrom)=="
      ] },
      { h: "Magnesium" },
      "Normal ca. 0,7–1,0 mmol/l. ==Anders als bei den meisten Stoffen wird Magnesium nur zu ca. 10–25 % im proximalen Tubulus, aber zu ca. 50–70 % im dicken aufsteigenden Teil zurückgeholt== (zwischen den Zellen) und im distalen Tubulus (TRPM6) fein eingestellt. Deshalb verursachen Schleifendiuretika (und auch Thiazide) Magnesiumverluste; Protonenpumpenhemmer können die Aufnahme im Darm stören.",
      { ul: [
        "Magnesiummangel → hartnäckige **Hypokaliämie** (Kalium geht über ROMK verloren) und **Hypokalzämie** (PTH-Freisetzung und -Wirkung gestört) → ==ohne Magnesiumersatz bessern sich Kalium und Calcium nicht==.",
        "Magnesiummangel begünstigt Rhythmusstörungen (Torsade de pointes – Therapie: Magnesium i.v.)."
      ] },
      { h: "Hyperkalzämie" },
      "Ein hohes Calcium aktiviert den Calcium-Sensor-Rezeptor im dicken aufsteigenden Teil und bremst dort die Salzrückholung → ==viel Urin und Volumenmangel==. Weitere Folgen: kurzes QT, Muskelschwäche, Verwirrtheit, Nierensteine. Therapie: Volumen, dann ggf. Schleifendiuretikum, Bisphosphonate, Calcitonin, bei Bedarf Dialyse."
    ],
    merke: [
      "Nur ionisiertes Calcium (ca. 1,1–1,3 mmol/l) wirkt; bei niedrigem Albumin ionisiert messen.",
      "Citrat aus Konserven senkt das ionisierte Calcium → Herzschwäche, Gefäßweitstellung, Gerinnung ↓.",
      "PTH: Calcium ↑, Phosphat ↓; Calcitriol im proximalen Tubulus; FGF23 senkt Phosphat.",
      "Magnesium wird v.a. im dicken aufsteigenden Teil zurückgeholt → Schleifendiuretika → Mangel.",
      "Magnesiummangel → Hypokaliämie und Hypokalzämie, die sich erst mit Magnesium bessern."
    ],
    warum: [
      { q: "Warum sinkt das ionisierte Calcium bei Hyperventilation?", a: "In der Alkalose geben Eiweiße (v.a. Albumin) Wasserstoffionen ab und haben mehr negativ geladene Bindungsstellen frei. Sie binden mehr Calcium – das freie, wirksame Calcium sinkt (Kribbeln, Muskelkrämpfe), obwohl das Gesamtcalcium gleich bleibt." },
      { q: "Warum verursacht eine Hyperkalzämie viel Urin und Volumenmangel?", a: "Calcium aktiviert im dicken aufsteigenden Teil den Calcium-Sensor-Rezeptor, der die Salzrückholung bremst (ähnlich wie ein Schleifendiuretikum) und den Markgradienten schwächt. Zusätzlich wirkt ADH schlechter. Die Niere verliert Salz und Wasser." }
    ],
    klinik: [
      "Massivtransfusion: ionisiertes Calcium regelmäßig messen und im Normbereich halten (Calcium i.v.).",
      "Nach Schilddrüsen- und Nebenschilddrüsenoperation: auf Hypokalzämie achten (Kribbeln, Krämpfe, Laryngospasmus).",
      "Refeeding-Syndrom bei mangelernährten Intensivpatienten: Phosphat, Kalium und Magnesium vor und während der Ernährung kontrollieren und ersetzen."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: In welchen Formen liegt Calcium im Blut vor und welche ist wirksam?", a: "Ionisiert ca. 45–50 % (wirksam, ca. 1,1–1,3 mmol/l), an Eiweiß gebunden ca. 40 %, an Anionen gebunden ca. 10 %." },
      { q: "Spezialwissen Niere: Warum sinkt das ionisierte Calcium bei Massivtransfusion?", a: "Citrat aus den Konserven bindet freies Calcium, besonders wenn die Leber es bei Schock, Unterkühlung oder Lebererkrankung nicht schnell genug abbaut." },
      { q: "Spezialwissen Niere: Welche Wirkungen haben Parathormon, Calcitriol und FGF23?", a: "Parathormon: Calcium ↑ (Knochen, distale Rückholung, Calcitriolbildung), Phosphatausscheidung ↑. Calcitriol: Calcium- und Phosphataufnahme im Darm ↑. FGF23: Phosphatausscheidung ↑, Calcitriolbildung ↓." },
      { q: "Spezialwissen Niere: Wo wird Magnesium in der Niere hauptsächlich zurückgeholt und welche Folge hat das?", a: "Zu ca. 50–70 % im dicken aufsteigenden Teil der Henle-Schleife (nur ca. 10–25 % proximal); Schleifendiuretika verursachen daher Magnesiumverluste." },
      { q: "Spezialwissen Niere: Welche Folgen hat ein Magnesiummangel für Kalium und Calcium?", a: "Hartnäckige Hypokaliämie (Kaliumverlust über ROMK) und Hypokalzämie (PTH-Freisetzung und -Wirkung gestört) – beide bessern sich erst mit Magnesiumersatz." },
      { q: "Spezialwissen Niere: Was ist das Refeeding-Syndrom?", a: "Bei Wiederernährung Mangelernährter treibt Insulin Phosphat, Kalium und Magnesium in die Zellen; schwere Hypophosphatämie führt zu ATP-Mangel mit Muskel- und Atemschwäche, Herzschwäche, Hämolyse und Verwirrtheit." }
    ]
  });

  CH.push({
    id: "endokrin",
    level: "Organ",
    title: "Die Niere als Hormondrüse und Stoffwechselorgan",
    leitfrage: "Welche Hormone bildet oder aktiviert die Niere – und welche Folgen hat ihr Ausfall bei chronischer Niereninsuffizienz?",
    einfach: "Die Niere ist nicht nur Filter, sondern auch Hormonfabrik: Sie misst den Sauerstoff im Blut und bestellt bei Mangel neue rote Blutkörperchen (Erythropoetin), sie aktiviert Vitamin D, und sie steuert über Renin den Blutdruck. Fällt sie aus, fehlen diese Signale – es entstehen Blutarmut, Knochenstörungen und Bluthochdruck.",
    body: [
      { h: "Erythropoetin (EPO)" },
      { kette: [
        "Sauerstoffgehalt des Blutes sinkt (Anämie, Hypoxie)",
        "Spezialisierte Bindegewebszellen zwischen den Tubuli in Rinde und äußerem Mark registrieren den Sauerstoffmangel",
        "Der Hypoxie-induzierbare Faktor (HIF-2α) wird nicht mehr abgebaut und schaltet das EPO-Gen an",
        "EPO regt im Knochenmark die Bildung roter Blutkörperchen an",
        "==Sauerstoffgehalt normalisiert sich – ein Regelkreis über den Sauerstoffgehalt, nicht über die Durchblutung=="
      ], titel: "Wie die Niere Blutarmut erkennt" },
      "==Weil der Sauerstoffverbrauch der Niere mit der Filtration steigt und fällt, misst sie eher den Sauerstoffgehalt des Bluts als die Durchblutung – ein idealer Fühler für Anämie.== Bei chronischer Niereninsuffizienz fehlt EPO → **renale Anämie**. Behandlung mit EPO-Präparaten bzw. HIF-Prolylhydroxylase-Hemmern (z.B. Roxadustat), dazu Eisen.",
      { h: "Vitamin D und Calcium-Phosphat-Stoffwechsel" },
      "Der proximale Tubulus aktiviert Vitamin D (1α-Hydroxylase) zu **Calcitriol** – angeregt durch Parathormon und niedriges Phosphat, gebremst durch FGF23. ==Bei chronischer Niereninsuffizienz fehlen Calcitriol und Phosphatausscheidung → Phosphat steigt, Calcium fällt, Parathormon steigt (sekundärer Hyperparathyreoidismus) → Knochenveränderungen und Gefäßverkalkung.==",
      { h: "Renin und lokale Botenstoffe" },
      { ul: [
        "**Renin** (granuläre Zellen im Vas afferens) startet das Renin-Angiotensin-Aldosteron-System (Reize: niedriger Druck im Vas afferens, wenig Kochsalz an der Macula densa, Sympathikus über β1).",
        "**Prostaglandine** erweitern die Nierengefäße und fördern die Salzausscheidung – wichtig bei Minderdurchblutung (Kapitel 'Nierendurchblutung').",
        "**Dopamin** wird im proximalen Tubulus gebildet und fördert die Natriumausscheidung.",
        "Das Kallikrein-Kinin-System wirkt gefäßerweiternd."
      ] },
      { h: "Stoffwechsel" },
      { ul: [
        "**Glukoseneubildung:** Die Niere liefert nach dem Fasten über Nacht ca. 20–25 % der ins Blut abgegebenen Glukose, bei längerem Fasten mehr.",
        "**Insulinabbau:** Die Niere baut einen relevanten Teil des Insulins ab. ==Bei Niereninsuffizienz sinkt daher der Insulinbedarf – Gefahr der Unterzuckerung.==",
        "Abbau kleiner Eiweiße und Peptidhormone, Ausscheidung von Medikamenten."
      ] },
      { h: "Folgen der chronischen Niereninsuffizienz – Überblick" },
      { table: { head: ["Störung", "Mechanismus", "Bedeutung für die Narkose"], rows: [
        ["Renale Anämie", "EPO-Mangel", "geringere Sauerstoffreserve"],
        ["Hyperkaliämie, metabolische Azidose", "verminderte Ausscheidung", "Rhythmusstörungen; Vorsicht mit Succinylcholin bei erhöhtem Kalium"],
        ["Sekundärer Hyperparathyreoidismus, Gefäßverkalkung", "Calcitriolmangel, Phosphatstau", "Gefäßerkrankung, Herzrisiko"],
        ["Urämische Blutungsneigung", "Thrombozytenfunktionsstörung", "Desmopressin hilft kurzfristig"],
        ["Bluthochdruck, Überwässerung", "Salzrückhalt, Renin", "Herzinsuffizienz, Lungenödem"],
        ["Verzögerte Magenentleerung, Neuropathie", "Urämie, Diabetes", "Aspirationsrisiko, Kreislaufinstabilität"]
      ] } }
    ],
    merke: [
      "EPO aus Bindegewebszellen der Niere über HIF-2α bei Sauerstoffmangel → renale Anämie bei Niereninsuffizienz.",
      "Calcitriol wird im proximalen Tubulus gebildet; Niereninsuffizienz → Phosphat ↑, Calcium ↓, PTH ↑.",
      "Renin startet das RAAS; Prostaglandine und Dopamin wirken lokal gefäßerweiternd bzw. natriuretisch.",
      "Die Niere bildet Glukose und baut Insulin ab → bei Niereninsuffizienz Unterzuckerungsgefahr.",
      "Niereninsuffizienz: Anämie, Hyperkaliämie, Azidose, Blutungsneigung, Hypertonie, Gefäßverkalkung."
    ],
    warum: [
      { q: "Warum ist die Niere ein guter Ort, um Anämie zu erkennen?", a: "Ihr Sauerstoffverbrauch hängt an der Filtration und steigt mit dem Blutfluss mit. Ändert sich nur die Durchblutung, bleiben Angebot und Bedarf im Gleichgewicht. Sinkt dagegen der Sauerstoffgehalt des Bluts (Anämie, Hypoxie), fällt der Gewebesauerstoff – genau dieses Signal steuert die EPO-Bildung." },
      { q: "Warum brauchen Diabetiker mit fortschreitender Niereninsuffizienz oft weniger Insulin?", a: "Die Niere baut einen relevanten Teil des Insulins ab und trägt zur Glukoseneubildung bei. Fällt ihre Funktion, wirkt Insulin länger, und weniger Glukose wird gebildet – die Dosis muss gesenkt werden, sonst drohen Unterzuckerungen." }
    ],
    klinik: [
      "Dialysepatienten: Hämoglobin, Kalium, Säure-Basen-Status und Volumen präoperativ prüfen.",
      "Urämische Blutungsneigung: Desmopressin (ca. 0,3 µg/kg) verbessert die Thrombozytenfunktion für einige Stunden.",
      "Insulin und renal ausgeschiedene Medikamente bei Niereninsuffizienz anpassen."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wo und wie wird Erythropoetin gebildet?", a: "In spezialisierten Bindegewebszellen zwischen den Tubuli in Rinde und äußerem Mark; bei Sauerstoffmangel wird HIF-2α stabilisiert und schaltet das EPO-Gen an." },
      { q: "Spezialwissen Niere: Wie entsteht der sekundäre Hyperparathyreoidismus bei chronischer Niereninsuffizienz?", a: "Weniger Calcitriolbildung und Phosphatausscheidung → Phosphat steigt, Calcium fällt → Parathormon steigt; Folgen: Knochenveränderungen und Gefäßverkalkung." },
      { q: "Spezialwissen Niere: Welche Stoffwechselleistungen hat die Niere außer der Ausscheidung?", a: "Glukoseneubildung (ca. 20–25 % der Glukoseabgabe nach nächtlichem Fasten), Insulinabbau, Abbau kleiner Eiweiße/Peptidhormone, Hormonbildung (EPO, Calcitriol, Renin)." },
      { q: "Spezialwissen Niere: Welche Folgen der chronischen Niereninsuffizienz sind für die Narkose wichtig?", a: "Renale Anämie, Hyperkaliämie und Azidose, urämische Blutungsneigung, Hypertonie/Überwässerung, Gefäßverkalkung, verzögerte Magenentleerung und Neuropathie." }
    ]
  });

  CH.push({
    id: "diuretika",
    level: "Klinik",
    title: "Diuretika – Wirkort, Wirkung, Nebenwirkung",
    leitfrage: "Warum wirken Schleifendiuretika so viel stärker als Thiazide, und wie lassen sich alle Nebenwirkungen aus dem Wirkort ableiten?",
    einfach: "Jedes Diuretikum blockiert einen bestimmten Salztransporter an einem bestimmten Ort im Nephron. Je mehr Salz an diesem Ort normalerweise zurückgeholt wird und je weniger die nachfolgenden Abschnitte ausgleichen können, desto stärker wirkt das Mittel. Die Nebenwirkungen folgen logisch daraus, was an diesem Ort sonst noch transportiert wird.",
    body: [
      { h: "Übersicht" },
      { table: { head: ["Gruppe", "Wirkort und Ziel", "Max. Natriumausscheidung (ca.)", "Typische Folgen"], rows: [
        ["Carboanhydrasehemmer (Acetazolamid)", "proximaler Tubulus, Carboanhydrase", "3–5 %", "metabolische Azidose, Kaliumverlust"],
        ["Schleifendiuretika (Furosemid, Torasemid, Bumetanid)", "dicker aufsteigender Teil, NKCC2", "bis 20–25 %", "Kalium-, Magnesium-, Calciumverlust; metabolische Alkalose; Hyperurikämie; Ohrschädigung bei hohen, schnellen Dosen"],
        ["Thiazide (Hydrochlorothiazid, Chlortalidon)", "distaler Tubulus, NCC", "ca. 5–8 %", "Hyponatriämie, Kalium- und Magnesiumverlust, weniger Calciumausscheidung, Hyperglykämie, Hyperurikämie"],
        ["Kaliumsparende: ENaC-Blocker (Amilorid, Triamteren)", "Sammelrohr, ENaC", "ca. 2–3 %", "Hyperkaliämie, metabolische Azidose"],
        ["Kaliumsparende: Mineralokortikoid-Antagonisten (Spironolacton, Eplerenon)", "Sammelrohr, Aldosteronrezeptor", "ca. 2–3 %", "Hyperkaliämie; Spironolacton: Gynäkomastie"],
        ["Osmotische Diuretika (Mannitol)", "filtriert, nicht zurückgeholt; v.a. proximal und Henle-Schleife", "–", "anfangs Volumenzunahme, Natriumverschiebungen; bei hohen Dosen Nierenschaden"]
      ] } },
      { kette: [
        "Je weiter vorn ein Diuretikum wirkt, desto mehr können nachfolgende Abschnitte ausgleichen (Acetazolamid wirkt deshalb schwach)",
        "Der dicke aufsteigende Teil holt ca. 25 % des Natriums zurück, und danach kann nur noch wenig kompensiert werden",
        "==Schleifendiuretika sind deshalb die stärksten=="
      ], titel: "Warum die Wirkstärke vom Wirkort abhängt" },
      { kette: [
        "Schleifen- und Thiaziddiuretika bringen mehr Natrium und Flüssigkeit ins Sammelrohr",
        "Mehr Natriumrückholung über ENaC + hoher Fluss + RAAS-Aktivierung durch Volumenverlust",
        "==Kalium- und Säureverlust → Hypokaliämie und metabolische Alkalose=="
      ], titel: "Warum die meisten Diuretika Kalium verlieren lassen" },
      { h: "Pharmakokinetik der Schleifendiuretika" },
      { ul: [
        "Furosemid oral: stark schwankende Aufnahme (Bioverfügbarkeit grob ca. 50 %) → ==intravenös wirkt etwa die halbe orale Dosis gleich stark==.",
        "Torasemid wird oral fast vollständig aufgenommen; Bumetanid 1 mg entspricht etwa Furosemid 40 mg.",
        "Alle Schleifendiuretika müssen im proximalen Tubulus ins Lumen ausgeschieden werden (Kapitel 'Proximaler Tubulus') → bei Hypalbuminämie und Urämie höhere Dosen nötig."
      ] },
      { h: "Diuretikaresistenz" },
      "Nach jeder Dosis hält die Niere vermehrt Natrium zurück ('Bremsphänomen'), und der distale Tubulus wächst unter Dauertherapie und holt mehr zurück. ==Abhilfe ist die sequenzielle Nephronblockade: Schleifendiuretikum plus Thiazid oder plus Acetazolamid==. Acetazolamid zusätzlich zum Schleifendiuretikum verbesserte bei akuter Herzinsuffizienz die Entstauung (ADVOR 2022). Thiazide galten bei stark eingeschränkter Nierenfunktion als wenig wirksam, Chlortalidon senkte aber in der CLICK-Studie (2021) auch bei fortgeschrittener chronischer Nierenerkrankung den Blutdruck.",
      { h: "Perioperativ" },
      { ul: [
        "Diuretika werden am OP-Tag meist pausiert (Volumenmangel, Hypotonie); Kalium und Magnesium vorher prüfen.",
        "Furosemid schützt nicht vor akuter Nierenschädigung und soll dafür nicht gegeben werden (KDIGO); es dient der Behandlung einer Überwässerung.",
        "Mannitol senkt den Hirndruck über einen osmotischen Gradienten; Serum-Osmolalität und Natrium überwachen."
      ] }
    ],
    merke: [
      "Wirkstärke: Schleifendiuretika (bis 20–25 %) > Thiazide (5–8 %) > Acetazolamid (3–5 %) ≈ kaliumsparende (2–3 %).",
      "Schleife: Kalium-, Magnesium-, Calciumverlust; Thiazid: Hyponatriämie, weniger Calciumausscheidung.",
      "Kaliumsparende: Hyperkaliämie (wie Trimethoprim).",
      "Furosemid i.v. ≈ halbe orale Dosis; muss proximal ausgeschieden werden.",
      "Resistenz → sequenzielle Nephronblockade (plus Thiazid oder Acetazolamid)."
    ],
    warum: [
      { q: "Warum wirkt Acetazolamid trotz seines Angriffs im proximalen Tubulus, der zwei Drittel des Natriums zurückholt, nur schwach?", a: "Es hemmt nur den Teil der Natriumrückholung, der an die Bicarbonatrückgewinnung gekoppelt ist, und die nachfolgenden Abschnitte – vor allem der dicke aufsteigende Teil – holen das zusätzlich ankommende Natrium größtenteils zurück. Außerdem verliert es mit sinkendem Blut-Bicarbonat an Wirkung." },
      { q: "Warum senken Thiazide die Calciumausscheidung, Schleifendiuretika steigern sie aber?", a: "Schleifendiuretika heben die positive Lumenspannung im dicken aufsteigenden Teil auf, die Calcium zwischen den Zellen zurücktreibt → mehr Calcium im Urin. Thiazide senken das Natrium in der distalen Tubuluszelle; dadurch wird Calcium auf der Blutseite leichter gegen Natrium ausgetauscht, und der Volumenverlust steigert zusätzlich die proximale Rückholung → weniger Calcium im Urin." }
    ],
    klinik: [
      "Hypokaliämie unter Diuretika: Kalium UND Magnesium ersetzen; bei Bedarf kaliumsparendes Diuretikum ergänzen.",
      "Thiazid-Hyponatriämie besonders bei älteren Frauen – Natrium kontrollieren.",
      "Kaliumsparende Diuretika mit ACE-Hemmern/Angiotensin-Rezeptorblockern, NSAR oder Trimethoprim: Hyperkaliämiegefahr."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wo und an welchem Transporter wirken Schleifendiuretika, Thiazide und kaliumsparende Diuretika?", a: "Schleifendiuretika: dicker aufsteigender Teil, NKCC2. Thiazide: distaler Tubulus, NCC. Kaliumsparende: Sammelrohr, ENaC (Amilorid, Triamteren) bzw. Aldosteronrezeptor (Spironolacton, Eplerenon)." },
      { q: "Spezialwissen Niere: Warum sind Schleifendiuretika die stärksten Diuretika?", a: "Der dicke aufsteigende Teil holt ca. 25 % des Natriums zurück, und die nachfolgenden Abschnitte können nur wenig ausgleichen (max. Natriumausscheidung bis 20–25 %)." },
      { q: "Spezialwissen Niere: Wie unterscheiden sich Schleifendiuretika und Thiazide in ihrer Wirkung auf Calcium?", a: "Schleifendiuretika steigern die Calciumausscheidung (Wegfall der positiven Lumenspannung), Thiazide senken sie (mehr Calciumrückholung im distalen Tubulus und proximal)." },
      { q: "Spezialwissen Niere: Wie verhalten sich orale und intravenöse Furosemid-Dosis zueinander?", a: "Die orale Aufnahme schwankt stark (grob ca. 50 %); intravenös wirkt etwa die halbe orale Dosis gleich stark." },
      { q: "Spezialwissen Niere: Was versteht man unter sequenzieller Nephronblockade?", a: "Kombination von Diuretika mit verschiedenen Wirkorten (z.B. Schleifendiuretikum plus Thiazid oder plus Acetazolamid), um die Ausgleichsreaktion nachfolgender Abschnitte bei Diuretikaresistenz zu überwinden." },
      { q: "Spezialwissen Niere: Schützt Furosemid vor einer akuten Nierenschädigung?", a: "Nein – laut KDIGO soll es nicht zur Vorbeugung oder Behandlung einer akuten Nierenschädigung eingesetzt werden, sondern nur zur Behandlung einer Überwässerung." }
    ]
  });

  CH.push({
    id: "aki",
    level: "Klinik",
    title: "Die Niere perioperativ – akute Nierenschädigung und Medikamente",
    leitfrage: "Wie entsteht eine perioperative akute Nierenschädigung, warum erkennt man sie so spät – und welche Narkosemedikamente muss man anpassen?",
    einfach: "Eine akute Nierenschädigung entsteht selten aus einem einzigen Grund: meist kommen Minderdurchblutung, Entzündung, Stau und nierenschädliche Medikamente zusammen. Weil das Kreatinin erst Tage später ansteigt, sieht man den Schaden spät. Die beste Therapie ist deshalb Vorbeugung.",
    body: [
      { h: "Definition (KDIGO 2012)" },
      "Akute Nierenschädigung (AKI) liegt vor bei einem Kreatininanstieg um **≥ 0,3 mg/dl innerhalb von 48 h**, auf das **≥ 1,5-Fache** des Ausgangswerts innerhalb von 7 Tagen oder bei einer Urinmenge **< 0,5 ml/kg/h über 6 h**. Stadien 1–3 nach dem Ausmaß von Kreatininanstieg bzw. Oligurie; Stadium 3 auch bei Beginn einer Nierenersatztherapie.",
      { h: "Warum Kreatinin spät reagiert" },
      { ul: [
        "Es steigt erst über Stunden bis Tage bis zum neuen Gleichgewicht.",
        "Bei guter Nierenreserve steigt es oft erst, wenn ein erheblicher Teil der Filtration verloren ist.",
        "Infusionen verdünnen es, wenig Muskelmasse senkt den Ausgangswert.",
        "**Biomarker** für Tubulusstress (z.B. TIMP-2 × IGFBP7) schlagen früher an. In der PrevAKI-Studie senkte ein biomarkergesteuertes KDIGO-Maßnahmenbündel nach Herzchirurgie die Häufigkeit akuter Nierenschädigung (Meersch et al. 2017)."
      ] },
      { h: "Wie die Schädigung entsteht" },
      { table: { head: ["Mechanismus", "Beispiele"], rows: [
        ["Minderdurchblutung", "Hypotonie, Volumenmangel, niedriges Herzzeitvolumen, Aortenklemmung → Schaden v.a. im dicken aufsteigenden Teil und im S3-Segment"],
        ["Entzündung/Sepsis", "Störung der Mikrozirkulation und Tubulusstress – auch bei normaler oder erhöhter Gesamtdurchblutung"],
        ["Venöser Stau", "hoher zentraler Venendruck, Überwässerung, Rechtsherzversagen"],
        ["Erhöhter Bauchdruck", "≥ 12 mmHg; abdominelles Kompartmentsyndrom > 20 mmHg mit neuem Organversagen"],
        ["Nierenschädliche Stoffe", "Kontrastmittel, Aminoglykoside, Vancomycin (v.a. mit Piperacillin/Tazobactam), NSAR, Calcineurin-Inhibitoren, Hydroxyethylstärke"],
        ["Farbstoffe", "Myoglobin (Rhabdomyolyse), freies Hämoglobin (Hämolyse, Herz-Lungen-Maschine)"],
        ["Abflussbehinderung", "Katheterproblem, Prostata, Harnleiterverletzung"]
      ] } },
      { h: "Was schützt – und was nicht" },
      { ul: [
        "**Blutdruck halten:** MAP ≥ ca. 65 mmHg bzw. am Ausgangswert orientiert.",
        "**Normales Volumen:** Volumenmangel UND Überwässerung vermeiden; dynamische Parameter nutzen.",
        "**Balancierte Infusionslösungen** statt großer Mengen NaCl 0,9 % (SMART 2018); ==keine Hydroxyethylstärke – die EU-Zulassungen wurden 2022 auf Empfehlung der EMA ausgesetzt==.",
        "**Nierenschädliche Stoffe meiden**, Dosierungen anpassen, Blutzucker kontrollieren.",
        "**Nicht wirksam zur Vorbeugung:** Schleifendiuretika, niedrig dosiertes Dopamin, Fenoldopam (KDIGO)."
      ] },
      { h: "Medikamente bei Niereninsuffizienz" },
      { table: { head: ["Substanz", "Problem", "Konsequenz"], rows: [
        ["Morphin", "Aktive Abbauprodukte (Morphin-6-Glucuronid: Atemdepression; Morphin-3-Glucuronid: Erregung) häufen sich an", "Meiden bzw. stark reduzieren; Alternativen z.B. Fentanyl, Hydromorphon (vorsichtig)"],
        ["Pethidin", "Norpethidin häuft sich an → Krampfanfälle", "Vermeiden"],
        ["Gabapentin, Pregabalin", "Renale Ausscheidung → Sedierung, Atemdepression", "Dosis an die Clearance anpassen"],
        ["Niedermolekulare Heparine", "Renale Ausscheidung → Blutungsgefahr", "Bei Kreatinin-Clearance < 30 ml/min Dosis reduzieren bzw. Anti-Xa-Spiegel, ggf. unfraktioniertes Heparin"],
        ["Sugammadex", "Der Sugammadex-Rocuronium-Komplex wird renal ausgeschieden", "Bei Kreatinin-Clearance < 30 ml/min nicht empfohlen"],
        ["Rocuronium, Vecuronium", "Etwas verlängerte Wirkung", "Neuromuskuläres Monitoring"],
        ["Cisatracurium, Remifentanil", "Organunabhängiger Abbau (Hofmann-Elimination bzw. Esterasen)", "Gut geeignet"],
        ["Succinylcholin", "Kaliumanstieg ca. 0,5 mmol/l wie bei Nierengesunden", "Bei normalem Kalium einsetzbar, bei Hyperkaliämie nicht"],
        ["Metformin", "Anhäufung → Laktatazidose", "Nach Leitlinie pausieren"]
      ] } },
      "Urämie verändert außerdem die **Eiweißbindung** (mehr freier Anteil saurer Medikamente, z.B. Phenytoin) und verursacht eine **Thrombozytenfunktionsstörung**."
    ],
    merke: [
      "KDIGO: Kreatinin +0,3 mg/dl in 48 h, ≥ 1,5× in 7 Tagen oder Urin < 0,5 ml/kg/h über 6 h.",
      "Kreatinin = später, verdünnbarer Marker; eGFR nur im Gleichgewicht gültig.",
      "Ursachen: Minderdurchblutung, Entzündung, Stau, erhöhter Bauchdruck, nierenschädliche Stoffe, Farbstoffe.",
      "Vorbeugung: MAP, normales Volumen, balancierte Lösungen, keine Hydroxyethylstärke, Nephrotoxine meiden; Diuretika und Dopamin schützen nicht.",
      "Meiden: Morphin, Pethidin; anpassen: Gabapentinoide, niedermolekulare Heparine, Sugammadex (< 30 ml/min); geeignet: Cisatracurium, Remifentanil."
    ],
    warum: [
      { q: "Warum kann ein septischer Patient eine akute Nierenschädigung entwickeln, obwohl seine Nieren insgesamt normal oder sogar stark durchblutet sind?", a: "Bei Sepsis stehen Störungen der Mikrozirkulation (ungleichmäßige Durchblutung, Kurzschlüsse), Entzündungsbotenstoffe und Stoffwechselstress der Tubuluszellen im Vordergrund. Auch die Verteilung zwischen Rinde und Mark kann gestört sein. Die Tubuluszellen werden geschädigt, obwohl die Gesamtdurchblutung normal wirkt." },
      { q: "Warum ist Morphin bei Niereninsuffizienz problematischer als Fentanyl?", a: "Morphin wird in der Leber zu wirksamen Glucuroniden abgebaut (Morphin-6-Glucuronid wirkt stark atemdepressiv), die über die Niere ausgeschieden werden und sich bei Niereninsuffizienz anhäufen – verzögerte, lange Atemdepression. Fentanyl wird in der Leber zu unwirksamen Abbauprodukten verstoffwechselt." }
    ],
    klinik: [
      "Risikopatienten (chronische Nierenerkrankung, Diabetes, Herzinsuffizienz, große Gefäß- und Herzchirurgie): Nephrotoxine pausieren, Blutdruck individuell halten, balancierte Lösungen, Kreatinin und Urin postoperativ überwachen.",
      "Rhabdomyolyse: früh und großzügig Volumen, Kalium und Kreatinkinase kontrollieren.",
      "Schmerztherapie bei Niereninsuffizienz: Regionalanästhesie, Paracetamol, Opioide ohne wirksame renal ausgeschiedene Abbauprodukte, keine NSAR."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wie definiert KDIGO eine akute Nierenschädigung?", a: "Kreatininanstieg ≥ 0,3 mg/dl innerhalb 48 h, auf ≥ 1,5-fachen Ausgangswert innerhalb 7 Tagen oder Urinmenge < 0,5 ml/kg/h über 6 h." },
      { q: "Spezialwissen Niere: Warum ist das Serumkreatinin ein später Marker einer akuten Nierenschädigung?", a: "Anstieg erst nach Stunden bis Tagen bis zum neuen Gleichgewicht, oft erst nach erheblichem Funktionsverlust, Verdünnung durch Infusionen, Abhängigkeit von der Muskelmasse." },
      { q: "Spezialwissen Niere: Welche Mechanismen führen perioperativ zur akuten Nierenschädigung?", a: "Minderdurchblutung, Entzündung/Sepsis, venöser Stau, erhöhter Bauchdruck, nierenschädliche Stoffe (Kontrastmittel, Aminoglykoside, NSAR, Hydroxyethylstärke), Farbstoffe (Myoglobin, Hämoglobin) und Abflussbehinderung." },
      { q: "Spezialwissen Niere: Welche Maßnahmen schützen die Niere perioperativ und welche nicht?", a: "Schützend: MAP ≥ ca. 65 mmHg bzw. individuell, normales Volumen, balancierte Lösungen, keine Hydroxyethylstärke, Nephrotoxine meiden, Blutzuckerkontrolle. Nicht wirksam: Schleifendiuretika, niedrig dosiertes Dopamin, Fenoldopam." },
      { q: "Spezialwissen Niere: Warum ist Morphin bei Niereninsuffizienz problematisch?", a: "Die wirksamen Abbauprodukte Morphin-6-Glucuronid (Atemdepression) und Morphin-3-Glucuronid (Erregung) werden renal ausgeschieden und häufen sich an." },
      { q: "Spezialwissen Niere: Welche Muskelrelaxanzien bzw. Antagonisten sind bei schwerer Niereninsuffizienz problematisch oder geeignet?", a: "Gut geeignet: Cisatracurium (Hofmann-Elimination). Rocuronium/Vecuronium wirken etwas länger (Monitoring). Sugammadex bei Kreatinin-Clearance < 30 ml/min nicht empfohlen. Succinylcholin bei normalem Kalium einsetzbar." },
      { q: "Spezialwissen Niere: Was zeigte die SMART-Studie?", a: "Balancierte Lösungen statt NaCl 0,9 % senkten bei kritisch Kranken den kombinierten Endpunkt aus Tod, Nierenersatztherapie und bleibender Nierenfunktionsstörung innerhalb von 30 Tagen (Semler et al. 2018)." }
    ]
  });

  CH.push({
    id: "nierenersatz",
    level: "Klinik",
    title: "Nierenersatzverfahren – Prinzipien und Narkose bei Dialysepatienten",
    leitfrage: "Wie entfernen Dialyse und Hämofiltration Stoffe und Wasser aus dem Blut, wann braucht man sie – und worauf achtet man bei der Narkose eines Dialysepatienten?",
    einfach: "Bei der Dialyse fließt das Blut an einer Membran vorbei, auf deren anderer Seite eine Spülflüssigkeit strömt: Kleine Teilchen wandern vom hohen zum niedrigen Konzentrationsbereich – wie Tee, der aus dem Beutel ins Wasser zieht. Bei der Hämofiltration wird Plasmawasser durch die Membran gepresst und reißt gelöste Teilchen mit. Wasser entfernt man, indem man mehr abpresst, als man ersetzt.",
    body: [
      { h: "Drei physikalische Prinzipien" },
      { table: { head: ["Prinzip", "Wie es funktioniert", "Entfernt bevorzugt"], rows: [
        ["Diffusion (Hämodialyse)", "Teilchen wandern entlang des Konzentrationsgefälles durch die Membran", "kleine Moleküle (Kalium, Harnstoff) – sehr effektiv"],
        ["Konvektion (Hämofiltration)", "Druck presst Plasmawasser durch die Membran, gelöste Teilchen werden mitgerissen; ersetzt durch Substitutionslösung", "auch mittelgroße Moleküle"],
        ["Ultrafiltration", "Netto-Wasserentzug durch Druck", "Wasser (Volumenentzug)"]
      ] } },
      { h: "Intermittierend oder kontinuierlich?" },
      "Die **intermittierende Hämodialyse** (wenige Stunden) entfernt schnell Kalium und Gifte, verschiebt aber rasch Volumen und Teilchen. **Kontinuierliche Verfahren** (über 24 h) verlaufen sanfter. ==Für die Sterblichkeit ist das Verfahren gleichwertig; kontinuierliche Verfahren werden bei instabilem Kreislauf und bei Hirnschädigung mit erhöhtem Hirndruck bevorzugt== (KDIGO 2012).",
      { h: "Wann beginnen?" },
      { kette: [
        "Klassische Notfallindikationen (Merkwort AEIOU):",
        "A – schwere, therapierefraktäre Azidose",
        "E – Elektrolyte, v.a. lebensbedrohliche Hyperkaliämie",
        "I – Intoxikation mit dialysierbaren Giften (z.B. Lithium, Methanol, Ethylenglykol, Salicylate, Metformin mit Laktatazidose)",
        "O – Overload: therapierefraktäre Überwässerung (Lungenödem)",
        "U – Urämie mit Folgen (Perikarditis, Enzephalopathie, Blutung)"
      ] },
      "==Ohne solche Indikation brachte ein früherer, 'vorsorglicher' Beginn keinen Überlebensvorteil== (STARRT-AKI 2020).",
      { h: "Dosis und Gerinnungshemmung" },
      { ul: [
        "Kontinuierliche Verfahren: abgegebene Effluent-Dosis ca. **20–25 ml/kg/h** (KDIGO); höhere Dosen brachten keinen Vorteil.",
        "Gerinnungshemmung bevorzugt mit **regionalem Citrat** (bindet Calcium im Kreislauf des Geräts), sofern keine Gegenanzeige besteht.",
        "Citrat wird in der Leber abgebaut. ==Bei schwerem Leberversagen oder Schock kann es sich anhäufen== – Zeichen: Verhältnis Gesamtcalcium/ionisiertes Calcium > ca. 2,5 und steigender Calciumbedarf."
      ] },
      { h: "Medikamente unter Nierenersatz" },
      "Gut entfernt werden kleine, wenig eiweißgebundene Medikamente mit kleinem Verteilungsvolumen (z.B. viele β-Laktam-Antibiotika, Aminoglykoside, Vancomycin). ==Unter kontinuierlichen Verfahren werden Antibiotika eher unter- als überdosiert== → Spiegelbestimmung, wo möglich.",
      { h: "Narkose bei Dialysepatienten" },
      { ul: [
        "Dialyse möglichst am **Vortag** (ca. 24 h vorher) – Volumen und Elektrolyte haben sich dann eingestellt; unmittelbar nach Dialyse oft Volumenmangel.",
        "**Kalium** präoperativ prüfen; bei Hyperkaliämie kein Succinylcholin.",
        "**Shuntarm** schützen: keine Blutdruckmanschette, keine Punktion, gut polstern.",
        "Restwirkung von Heparin aus der Dialyse und **urämische Blutungsneigung** beachten (Desmopressin).",
        "Medikamente nach Ausscheidungsweg wählen (Kapitel 'Akute Nierenschädigung'); verzögerte Magenentleerung → Aspirationsrisiko."
      ] }
    ],
    merke: [
      "Diffusion (Dialyse, kleine Moleküle), Konvektion (Filtration, auch mittlere Moleküle), Ultrafiltration (Wasser).",
      "Kontinuierlich gleichwertig für das Überleben, bevorzugt bei instabilem Kreislauf und erhöhtem Hirndruck.",
      "Notfallindikationen AEIOU; früher Beginn ohne Indikation ohne Vorteil (STARRT-AKI).",
      "Dosis ca. 20–25 ml/kg/h; regionales Citrat bevorzugt; Citratanhäufung bei Leberversagen (Gesamt-/ionisiertes Calcium > ca. 2,5).",
      "Dialysepatient: Dialyse am Vortag, Kalium prüfen, Shuntarm schützen, Blutungsneigung beachten."
    ],
    warum: [
      { q: "Warum senkt die intermittierende Hämodialyse Kalium schneller als die Hämofiltration?", a: "Kalium ist ein kleines Molekül. Bei der Dialyse treibt ein großes Konzentrationsgefälle (kaliumarmes Dialysat) die Diffusion – das ist für kleine Moleküle sehr effektiv. Die Konvektion entfernt Kalium nur in dem Maß, in dem Plasmawasser abgepresst wird." },
      { q: "Warum zeigt ein Verhältnis von Gesamtcalcium zu ionisiertem Calcium über ca. 2,5 eine Citratanhäufung an?", a: "Citrat bindet Calcium. Wird es nicht abgebaut, steigt das an Citrat gebundene Calcium und damit das Gesamtcalcium, während das freie, ionisierte Calcium sinkt. Das Verhältnis beider Werte steigt deshalb an." }
    ],
    klinik: [
      "Lebensbedrohliche Hyperkaliämie: Calcium, Insulin/Glukose, β2-Agonist überbrücken – die Dialyse entfernt Kalium endgültig.",
      "Vergiftungen: Bei dialysierbaren Giften (z.B. Lithium, toxische Alkohole) frühzeitig an Hämodialyse denken.",
      "Nach Dialyse: Volumenstatus kritisch prüfen, bevor eine Narkose eingeleitet wird."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Welche drei physikalischen Prinzipien nutzen Nierenersatzverfahren?", a: "Diffusion (Hämodialyse, v.a. kleine Moleküle), Konvektion (Hämofiltration, auch mittelgroße Moleküle) und Ultrafiltration (Wasserentzug)." },
      { q: "Spezialwissen Niere: Wann werden kontinuierliche Nierenersatzverfahren bevorzugt?", a: "Bei instabilem Kreislauf und bei Hirnschädigung mit erhöhtem Hirndruck (für das Überleben gleichwertig mit intermittierenden Verfahren)." },
      { q: "Spezialwissen Niere: Welche Notfallindikationen für eine Nierenersatztherapie gibt es?", a: "AEIOU: therapierefraktäre Azidose, lebensbedrohliche Elektrolytstörung (Hyperkaliämie), Intoxikation mit dialysierbaren Giften, therapierefraktäre Überwässerung, Urämie mit Folgen (Perikarditis, Enzephalopathie, Blutung)." },
      { q: "Spezialwissen Niere: Welche Dosis und welche Gerinnungshemmung empfiehlt KDIGO für kontinuierliche Verfahren?", a: "Abgegebene Effluent-Dosis ca. 20–25 ml/kg/h; bevorzugt regionales Citrat, sofern keine Gegenanzeige besteht." },
      { q: "Spezialwissen Niere: Woran erkennt man eine Citratanhäufung?", a: "Verhältnis Gesamtcalcium/ionisiertes Calcium > ca. 2,5 und steigender Calciumbedarf, typischerweise bei schwerem Leberversagen oder Schock." },
      { q: "Spezialwissen Niere: Worauf achtet man bei der Narkose eines Dialysepatienten?", a: "Dialyse am Vortag, Kalium prüfen (kein Succinylcholin bei Hyperkaliämie), Shuntarm schützen, Heparinrest und urämische Blutungsneigung beachten, Medikamente nach Ausscheidungsweg wählen, Aspirationsrisiko." }
    ]
  });

  CH.push({
    id: "lebensalter",
    level: "System",
    title: "Die Niere über die Lebensspanne: Neugeborenes, Schwangerschaft, Alter",
    leitfrage: "Warum scheiden Neugeborene Medikamente so langsam aus, warum ist ein Kreatinin von 1,0 mg/dl bei einer Schwangeren schon auffällig – und was verändert sich im Alter?",
    einfach: "Die Nieren eines Neugeborenen arbeiten noch auf Sparflamme und brauchen etwa ein bis zwei Jahre, um 'erwachsen' zu werden. In der Schwangerschaft laufen die Nieren auf Hochtouren – deshalb ist ein für andere normales Kreatinin hier schon zu hoch. Im Alter nimmt die Filterleistung langsam ab, ohne dass das Kreatinin unbedingt steigt.",
    body: [
      { h: "Neugeborene und Säuglinge" },
      { ul: [
        "Die Bildung neuer Nephrone ist um ca. die 34.–36. Schwangerschaftswoche abgeschlossen – ==Frühgeborene haben oft dauerhaft weniger Nephrone==.",
        "Die GFR ist bei Geburt niedrig (beim Reifgeborenen ca. 10–20 ml/min/1,73 m²), steigt in den ersten Wochen deutlich und erreicht – auf die Körperoberfläche bezogen – mit ca. 1–2 Jahren Erwachsenenwerte.",
        "Die Konzentrierungsfähigkeit ist begrenzt (maximal ca. 600–700 mosmol/kg), Frühgeborene verlieren leicht Natrium.",
        "==Folge: Renal ausgeschiedene Medikamente (z.B. Aminoglykoside) wirken länger → größere Dosierungsabstände==; Neugeborene vertragen weder Volumenmangel noch Überwässerung gut."
      ] },
      { h: "Schwangerschaft" },
      { kette: [
        "Mehr Blutvolumen und Herzzeitvolumen, Gefäße weiten sich",
        "Nierendurchblutung und GFR steigen um ca. 40–50 %",
        "Kreatinin und Harnstoff sinken (Kreatinin oft ca. 0,4–0,8 mg/dl)",
        "==Ein Kreatinin von ca. 1,0 mg/dl ist bei einer Schwangeren schon auffällig=="
      ] },
      "Weitere Veränderungen: leichte Glukoseausscheidung ist normal (mehr Filtration, Nierenschwelle sinkt), die Harnleiter weiten sich (v.a. rechts) → höheres Risiko für Harnwegsinfekte. Bei Präeklampsie: Eiweiß im Urin, steigendes Kreatinin.",
      { h: "Höheres Lebensalter" },
      { ul: [
        "Die GFR sinkt im Mittel um ca. 1 ml/min/1,73 m² pro Jahr ab dem mittleren Lebensalter (große individuelle Unterschiede).",
        "==Weniger Muskelmasse → das Kreatinin bleibt trotz niedrigerer GFR oft 'normal'== → Dosierung nach geschätzter Clearance.",
        "Konzentrierungs- und Verdünnungsfähigkeit sowie Durstgefühl nehmen ab → Austrocknung und Hyponatriämie häufiger.",
        "Weniger Renin und Aldosteron → Hyperkaliämiegefahr unter ACE-Hemmern, NSAR und kaliumsparenden Diuretika.",
        "Kleinere Nierenreserve → höheres Risiko einer akuten Nierenschädigung bei Hypotonie und Nephrotoxinen."
      ] }
    ],
    merke: [
      "Nephronbildung bis ca. 34.–36. SSW; GFR erreicht mit ca. 1–2 Jahren Erwachsenenwerte.",
      "Neugeborene: begrenzte Konzentrierung, langsame Ausscheidung renaler Medikamente.",
      "Schwangerschaft: GFR +40–50 %, Kreatinin niedrig → 1,0 mg/dl schon auffällig.",
      "Alter: GFR ↓ ca. 1 ml/min/Jahr, Kreatinin trotzdem oft normal (Muskelmasse).",
      "Alter: Durst und Konzentrierung ↓, Hyperkaliämierisiko unter RAAS-Hemmern und NSAR."
    ],
    warum: [
      { q: "Warum bleibt das Kreatinin bei älteren Menschen trotz sinkender GFR oft normal?", a: "Kreatinin stammt aus den Muskeln. Mit dem Alter sinkt die Muskelmasse und damit die Kreatininbildung. Gleichzeitig sinkt die Ausscheidung – beides gleicht sich teilweise aus, sodass das Serumkreatinin 'normal' bleibt, obwohl die Filterleistung deutlich geringer ist." },
      { q: "Warum ist ein Kreatinin von 1,0 mg/dl in der Schwangerschaft auffällig?", a: "In der Schwangerschaft steigt die GFR um ca. 40–50 %, das Kreatinin sinkt entsprechend auf oft 0,4–0,8 mg/dl. Ein Wert von 1,0 mg/dl bedeutet deshalb im Verhältnis eine deutlich eingeschränkte Filtration." }
    ],
    klinik: [
      "Kinder: Dosierung renal ausgeschiedener Medikamente nach Alter und Reife (Neugeborene längere Intervalle).",
      "Schwangere: Kreatininwerte an die Schwangerschaft angepasst beurteilen; bei Präeklampsie Nierenfunktion engmaschig kontrollieren.",
      "Ältere: Dosierung nach geschätzter Clearance, Nephrotoxine und NSAR meiden, Flüssigkeitshaushalt aufmerksam führen."
    ],
    selbsttest: [
      { q: "Spezialwissen Niere: Wann ist die Nephronbildung abgeschlossen und wann erreicht die GFR Erwachsenenwerte?", a: "Nephronbildung um ca. die 34.–36. SSW; die GFR erreicht (bezogen auf die Körperoberfläche) mit ca. 1–2 Jahren Erwachsenenwerte." },
      { q: "Spezialwissen Niere: Warum wirken renal ausgeschiedene Medikamente bei Neugeborenen länger?", a: "Die GFR ist bei Geburt niedrig (ca. 10–20 ml/min/1,73 m² beim Reifgeborenen) und die Tubulusfunktion unreif – die Ausscheidung ist verlangsamt, Dosierungsabstände müssen verlängert werden." },
      { q: "Spezialwissen Niere: Wie verändern sich GFR und Kreatinin in der Schwangerschaft?", a: "GFR +40–50 %, Kreatinin sinkt (oft ca. 0,4–0,8 mg/dl); ein Kreatinin um 1,0 mg/dl ist bereits auffällig." },
      { q: "Spezialwissen Niere: Welche Nierenveränderungen im Alter sind für die Narkose wichtig?", a: "GFR sinkt (ca. 1 ml/min/1,73 m² pro Jahr), Kreatinin oft trotzdem normal; Durst und Konzentrierung ↓; weniger Renin/Aldosteron → Hyperkaliämierisiko; kleinere Reserve → höheres AKI-Risiko." }
    ]
  });

  window.__addSpezialOrgan({
    id: "niere",
    title: "Niere",
    subtopic: "niere-saeure-basen",
    subtitle: "Vom Filter bis zur perioperativen Nierenprotektion",
    chapters: CH,
    sources: [
      "Bertram JF, Douglas-Denton RN, Diouf B, Hughson MD, Hoy WE. Human nephron number: implications for health and disease. Pediatr Nephrol 2011;26:1529–1533.",
      "Pollak MR, Quaggin SE, Hoenig MP, Dworkin LD. The glomerulus: the sphere of influence. Clin J Am Soc Nephrol 2014;9:1461–1469.",
      "Curthoys NP, Moe OW. Proximal tubule function and response to acidosis. Clin J Am Soc Nephrol 2014;9:1627–1638.",
      "Mount DB. Thick ascending limb of the loop of Henle. Clin J Am Soc Nephrol 2014;9:1974–1986.",
      "Subramanya AR, Ellison DH. Distal convoluted tubule. Clin J Am Soc Nephrol 2014;9:2147–2163.",
      "Pearce D, Soundararajan R, Trimpert C, et al. Collecting duct principal cell transport processes and their regulation. Clin J Am Soc Nephrol 2015;10:135–146.",
      "Roy A, Al-bataineh MM, Pastor-Soler NM. Collecting duct intercalated cell function and regulation. Clin J Am Soc Nephrol 2015;10:305–324.",
      "Hamm LL, Nakhoul N, Hering-Smith KS. Acid-base homeostasis. Clin J Am Soc Nephrol 2015;10:2232–2242.",
      "Sands JM, Layton HE. The physiology of urinary concentration: an update. Semin Nephrol 2009;29:178–195.",
      "Carlström M, Wilcox CS, Arendshorst WJ. Renal autoregulation in health and disease. Physiol Rev 2015;95:405–511.",
      "Brezis M, Rosen S. Hypoxia of the renal medulla – its implications for disease. N Engl J Med 1995;332:647–655.",
      "Vallon V, Thomson SC. Targeting renal glucose reabsorption to treat hyperglycaemia: the pleiotropic effects of SGLT2 inhibition. Diabetologia 2017;60:215–225.",
      "Palmer BF, Clegg DJ. Physiology and pathophysiology of potassium homeostasis. Adv Physiol Educ 2016;40:480–490.",
      "Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol 2014;170:G1–G47.",
      "Feld LG, Neuspiel DR, Foster BA, et al. Clinical practice guideline: maintenance intravenous fluids in children. Pediatrics 2018;142:e20183083.",
      "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl 2012;2:1–138.",
      "Meersch M, Schmidt C, Hoffmeier A, et al. Prevention of cardiac surgery-associated AKI by implementing the KDIGO guidelines in high risk patients identified by biomarkers: the PrevAKI randomized controlled trial. Intensive Care Med 2017;43:1551–1561.",
      "Semler MW, Self WH, Wanderer JP, et al. Balanced crystalloids versus saline in critically ill adults (SMART). N Engl J Med 2018;378:829–839.",
      "Kirkpatrick AW, Roberts DJ, De Waele J, et al. Intra-abdominal hypertension and the abdominal compartment syndrome: updated consensus definitions and clinical practice guidelines from the World Society of the Abdominal Compartment Syndrome. Intensive Care Med 2013;39:1190–1206.",
      "Mizota T, Yamamoto Y, Hamada M, et al. Intraoperative oliguria predicts acute kidney injury after major abdominal surgery. Br J Anaesth 2017;119:1127–1134.",
      "STARRT-AKI Investigators. Timing of initiation of renal-replacement therapy in acute kidney injury. N Engl J Med 2020;383:240–251.",
      "Mullens W, Dauw J, Martens P, et al. Acetazolamide in acute decompensated heart failure with volume overload (ADVOR). N Engl J Med 2022;387:1185–1195.",
      "Agarwal R, Sinha AD, Cramer AE, et al. Chlorthalidone for hypertension in advanced chronic kidney disease (CLICK). N Engl J Med 2021;385:2507–2519.",
      "European Medicines Agency. Hydroxyethyl-starch solutions for infusion recommended for suspension from the market (2022).",
      "Kellum JA, Romagnani P, Ashuntantang G, et al. Acute kidney injury. Nat Rev Dis Primers 2021;7:52.",
      "Lehrbücher: Eaton DC, Pooler JP. Vander's Renal Physiology, 9. Aufl. 2018; Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017."
    ]
  });
})();
