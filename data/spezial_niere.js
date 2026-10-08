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

  window.__addSpezialOrgan({
    id: "niere",
    title: "Niere",
    subtopic: "niere-saeure-basen",
    subtitle: "Vom Filtrationsspalt bis zur perioperativen Nierenprotektion",
    chapters: [
      {
        id: "filtration",
        level: "Gewebe",
        title: "Aufbau, Nephron und glomeruläre Filtration",
        leitfrage: "Wie filtert ein Knäuel aus Kapillaren täglich ca. 180 Liter Plasma, ohne dabei Albumin zu verlieren?",
        figure: { svg: FIG_NEPHRON, caption: "Nephronsegmente mit ungefährem Anteil an der Na⁺-Resorption, wichtigsten Transportern und Angriffspunkten der Diuretika (◀)." },
        body: [
          { h: "Nephrone" },
          "Jede Niere enthält im Mittel etwa **1 Million Nephrone**, mit enormer Streuung (ca. 200.000 bis über 2,5 Millionen; Bertram et al. 2011). Niedriges Geburtsgewicht geht mit weniger Nephronen einher – ein Risiko für Hypertonie und chronische Nierenerkrankung. Ca. 85 % sind **kortikale** Nephrone mit kurzer Henle-Schleife, ca. 15 % **juxtamedulläre** mit langer Schleife bis in die Papille und begleitenden Vasa recta. Diese sind für die Harnkonzentrierung entscheidend.",
          { h: "Gefäßversorgung" },
          "A. renalis → Aa. interlobares → Aa. arcuatae → Aa. corticales radiatae → **Vas afferens → Glomeruluskapillaren → Vas efferens** → peritubuläre Kapillaren bzw. (juxtamedullär) Vasa recta. Zwei Kapillarbetten liegen **in Serie** zwischen zwei Arteriolen. So kann der glomeruläre Kapillardruck über den Tonus von afferenter und efferenter Arteriole fein reguliert werden – und er ist deutlich höher als in anderen Kapillaren.",
          { h: "Filtrationsbarriere" },
          { ul: [
            "**Gefenestriertes Endothel** mit Glykokalyx.",
            "**Glomeruläre Basalmembran** aus Kollagen IV (α3/α4/α5), Laminin und negativ geladenen Heparansulfat-Proteoglykanen. Mutationen der Kollagen-IV-Ketten verursachen das Alport-Syndrom.",
            "**Podozyten** mit interdigitierenden Fußfortsätzen; dazwischen die **Schlitzmembran** (Nephrin, Podocin). Mutationen von NPHS1 (Nephrin) bzw. NPHS2 (Podocin) verursachen angeborene bzw. steroidresistente nephrotische Syndrome (Pollak et al. 2014)."
          ] },
          "Die Barriere ist **größen- und ladungsselektiv**. Kleine Moleküle (Radius unter ca. 2 nm, z.B. Inulin, Kreatinin, Glukose, Elektrolyte) werden frei filtriert. Albumin (ca. 3,6 nm, negativ geladen) wird fast vollständig zurückgehalten. Myoglobin (17 kDa) wird filtriert – relevant bei Rhabdomyolyse. Freies Hämoglobin wird filtriert, sobald das Haptoglobin gesättigt ist.",
          { h: "Starling-Kräfte am Glomerulus" },
          "**GFR = Kf × [(P_GC − P_Bowman) − (π_GC − π_Bowman)]**. Der hydrostatische Druck in der Glomeruluskapillare (P_GC) treibt die Filtration. Ihm wirken der Druck im Bowman-Raum und der onkotische Druck entgegen. Der onkotische Druck steigt entlang der Kapillare an, weil eiweißfreies Filtrat abgepresst wird. Kf (Fläche × Permeabilität) ist sehr hoch. Mesangiumzellen können durch Kontraktion die Filtrationsfläche verändern.",
          { h: "Kenngrößen" },
          { table: { head: ["Größe", "Wert (ca.)"], rows: [
            ["Renaler Blutfluss", "1–1,2 l/min (20–25 % des HZV)"],
            ["Renaler Plasmafluss", "600–700 ml/min"],
            ["GFR", "120 ml/min/1,73 m² (ca. 180 l/Tag)"],
            ["Filtrationsfraktion (GFR/RPF)", "ca. 20 %"],
            ["Resorbierter Anteil des Filtrats", "> 99 %"]
          ] } },
          { h: "GFR-Messung" },
          "Goldstandard ist die Inulin-Clearance (frei filtriert, weder resorbiert noch sezerniert). **Kreatinin** wird frei filtriert, aber zusätzlich tubulär sezerniert (bei normaler GFR ca. 10–20 %, bei niedriger GFR mehr). Die Kreatinin-Clearance überschätzt die GFR daher, und das Serumkreatinin hängt von der Muskelmasse ab. **eGFR-Formeln** (z.B. CKD-EPI) gelten nur im Steady State, nicht bei akut wechselnder Nierenfunktion. Cystatin C ist muskelmassenunabhängig.",
          { h: "Juxtaglomerulärer Apparat" },
          "Die **Macula densa** (Ende des dicken aufsteigenden Teils) liegt am Gefäßpol des eigenen Glomerulus. Sie misst die NaCl-Konzentration der Tubulusflüssigkeit. Die **granulären (juxtaglomerulären) Zellen** in der Wand des Vas afferens setzen Renin frei. Dazu gehört das extraglomeruläre Mesangium. Diese Struktur verbindet Tubulus und Gefäß: tubuloglomerulärer Feedback und Reninfreisetzung."
        ],
        merke: [
          "Ca. 1 Mio. Nephrone pro Niere (große Streuung); 15 % juxtamedullär für die Konzentrierung.",
          "Zwei Arteriolen in Serie → feine Regulation des glomerulären Drucks.",
          "Barriere: Endothel – GBM (Kollagen IV) – Podozyten/Schlitzmembran (Nephrin, Podocin).",
          "GFR ca. 120 ml/min (180 l/Tag), RBF 20–25 % HZV, Filtrationsfraktion 20 %.",
          "Kreatinin wird zusätzlich sezerniert; eGFR nur im Steady State gültig."
        ],
        warum: [
          { q: "Warum wird Albumin trotz seines eher kleinen Radius praktisch nicht filtriert?", a: "Sein Radius von ca. 3,6 nm liegt bereits nahe der Größengrenze, und es ist stark negativ geladen. Glykokalyx, GBM (Heparansulfat) und Schlitzmembran tragen negative Ladungen und stoßen es ab. Zusätzlich wird filtriertes Albumin im proximalen Tubulus endozytotisch rückresorbiert. Erst eine Schädigung von Podozyten oder Schlitzmembran führt zu relevanter Albuminurie." },
          { q: "Warum kann das Serumkreatinin nach einer massiven Volumengabe normal bleiben, obwohl die GFR akut gefallen ist?", a: "Kreatinin reichert sich erst über Stunden bis Tage an, bis ein neuer Steady State erreicht ist. Gleichzeitig verdünnt die Volumengabe das Serumkreatinin. Ein unveränderter Wert in den ersten 24–48 h schließt einen akuten GFR-Verlust daher nicht aus." }
        ],
        klinik: [
          "Rhabdomyolyse: filtriertes Myoglobin schädigt die Tubuli (Obstruktion, oxidativer Stress) → frühe, großzügige Volumengabe.",
          "Sarkopene, ältere Patienten: 'normales' Kreatinin bei deutlich reduzierter GFR möglich → Dosierung nach geschätzter Clearance.",
          "Trimethoprim und Cimetidin hemmen die tubuläre Kreatininsekretion: Das Kreatinin steigt, ohne dass die GFR fällt."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Wie viele Nephrone hat eine Niere, und welchen Anteil haben juxtamedulläre Nephrone?", a: "Im Mittel ca. 1 Million (Streuung ca. 200.000 bis > 2,5 Millionen); ca. 15 % sind juxtamedullär mit langer Henle-Schleife und Vasa recta." },
          { q: "Spezialwissen Niere: Aus welchen drei Schichten besteht die glomeruläre Filtrationsbarriere?", a: "Gefenestriertes Endothel mit Glykokalyx, glomeruläre Basalmembran (Kollagen IV, negativ geladene Proteoglykane) und Podozyten mit Schlitzmembran (Nephrin, Podocin)." },
          { q: "Spezialwissen Niere: Welche Kräfte bestimmen die glomeruläre Filtration?", a: "GFR = Kf × [(P_GC − P_Bowman) − (π_GC − π_Bowman)]: der hohe glomeruläre Kapillardruck treibt, Bowman-Druck und der entlang der Kapillare steigende onkotische Druck wirken entgegen." },
          { q: "Spezialwissen Niere: Welche Normalwerte gelten für RBF, GFR und Filtrationsfraktion?", a: "RBF ca. 1–1,2 l/min (20–25 % des HZV), GFR ca. 120 ml/min/1,73 m² (ca. 180 l/Tag), Filtrationsfraktion ca. 20 %." },
          { q: "Spezialwissen Niere: Warum überschätzt die Kreatinin-Clearance die GFR?", a: "Kreatinin wird zusätzlich tubulär sezerniert (bei normaler GFR ca. 10–20 %, bei eingeschränkter GFR mehr)." },
          { q: "Spezialwissen Niere: Woraus besteht der juxtaglomeruläre Apparat und welche Funktion hat er?", a: "Macula densa (misst NaCl am Ende des dicken aufsteigenden Teils), reninbildende granuläre Zellen des Vas afferens und extraglomeruläres Mesangium; er vermittelt den tubuloglomerulären Feedback und die Reninfreisetzung." }
        ]
      },
      {
        id: "perfusion",
        level: "Organ",
        title: "Nierendurchblutung, Autoregulation und renaler Sauerstoffhaushalt",
        leitfrage: "Warum ist die Niere mit einem Fünftel des HZV überdurchblutet – und trotzdem eines der hypoxieempfindlichsten Organe?",
        body: [
          { h: "Verteilung der Durchblutung" },
          "Die Nieren machen weniger als 0,5 % der Körpermasse aus, erhalten aber 20–25 % des HZV. Ca. **90 % des Flusses gehen in die Rinde**, nur ca. 10 % ins Mark. Der hohe Fluss dient der **Filtration**, nicht dem O₂-Bedarf: Die O₂-Extraktion ist niedrig (ca. 10 %), das Nierenvenenblut ist hoch gesättigt.",
          { h: "Sauerstoffbedarf: an die Natriumresorption gekoppelt" },
          "Die Nieren verbrauchen ca. 7–10 % des Ganzkörper-O₂. Der größte Teil geht in den aktiven **Na⁺-Transport** (Na⁺/K⁺-ATPase). Daraus folgt eine Besonderheit: Steigt die GFR, steigt die filtrierte Na⁺-Menge und damit der O₂-**Bedarf** – Angebot (Fluss) und Bedarf wachsen gemeinsam.",
          "Im **Nierenmark** ist der PO₂ sehr niedrig (ca. 10–20 mmHg; Brezis & Rosen 1995). Ursachen sind der geringe Markfluss, der Gegenstrom-Austausch von O₂ zwischen absteigenden und aufsteigenden Vasa recta und der hohe Verbrauch des **dicken aufsteigenden Teils** (mTAL). Die mTAL und das S3-Segment des proximalen Tubulus im äußeren Mark sind daher die Orte der ischämischen Tubulusschädigung.",
          { h: "Autoregulation" },
          "Renaler Blutfluss und GFR bleiben bei einem MAP von ca. **80–180 mmHg** weitgehend konstant (Carlström et al. 2015). Bei chronischer Hypertonie verschiebt sich der Bereich nach rechts. Zwei Mechanismen:",
          { ul: [
            "**Myogener Mechanismus** (Bayliss-Effekt): Dehnung des Vas afferens → Kontraktion; reagiert innerhalb von Sekunden.",
            "**Tubuloglomerulärer Feedback (TGF):** Steigt die NaCl-Konzentration an der Macula densa (über NKCC2 gemessen), wird ATP bzw. Adenosin freigesetzt → A1-Rezeptoren verengen das Vas afferens → GFR sinkt. Bei niedriger NaCl-Konzentration erweitert sich das Vas afferens, und Renin wird freigesetzt (u.a. über COX-2/PGE₂ und NO)."
          ] },
          { h: "Steuerung über die Arteriolen" },
          { table: { head: ["Ort", "Konstriktion", "Dilatation"], rows: [
            ["Vas afferens", "Sympathikus (α1), Adenosin (A1), Endothelin, Angiotensin II", "Prostaglandine (PGE₂, PGI₂), NO, Dopamin (D1)"],
            ["Vas efferens", "Angiotensin II (empfindlicher als afferent)", "Fehlen von Angiotensin II (ACE-Hemmer, AT1-Blocker)"]
          ] } },
          "Bei sinkendem Perfusionsdruck erhalten **Prostaglandine** (afferente Dilatation) und **Angiotensin II** (efferente Konstriktion) die GFR. **NSAR** nehmen die erste, **ACE-Hemmer/AT1-Blocker** die zweite Schutzmaßnahme. Zusammen mit einem Diuretikum ('Triple Whammy') droht eine akute Nierenschädigung. **SGLT2-Hemmer** erhöhen die NaCl-Anflutung an der Macula densa → TGF → afferente Konstriktion → niedrigerer glomerulärer Druck. Das erklärt den initialen eGFR-Abfall und die langfristige Nephroprotektion (Vallon & Thomson 2017).",
          { h: "Perfusionsdruck: arteriell UND venös" },
          "Der effektive renale Perfusionsdruck ≈ **MAP − ZVD** bzw. MAP − intraabdomineller Druck, wenn dieser höher ist. Die Niere liegt in einer festen Kapsel: Venöse Stauung (Rechtsherzinsuffizienz, Volumenüberladung) und **intraabdominelle Hypertension** (≥ 12 mmHg; abdominelles Kompartmentsyndrom > 20 mmHg mit neuem Organversagen; WSACS 2013) erhöhen den interstitiellen Druck und mindern GFR und Mikrozirkulation.",
          { h: "Narkose und OP-Stress" },
          "Sympathikus, RAAS und ADH senken in der Regel intraoperativ RBF, GFR und Urinfluss. Intraoperative Diuresewerte unter 0,5 ml/kg/h sind daher häufig und für sich allein nur begrenzt aussagekräftig; deutlich niedrigere Werte (unter ca. 0,3 ml/kg/h) gingen in einer großen Kohorte nach Bauchchirurgie mit einem erhöhten AKI-Risiko einher (Mizota et al. 2017; explorativ ermittelter Grenzwert). Hypotonie mit MAP unter ca. 65 mmHg ist mit AKI assoziiert."
        ],
        merke: [
          "20–25 % des HZV, 90 % in die Rinde; O₂-Extraktion niedrig (ca. 10 %).",
          "O₂-Bedarf ∝ resorbiertes Na⁺ → GFR ↑ = Bedarf ↑.",
          "Mark-PO₂ ca. 10–20 mmHg → mTAL und S3-Segment ischämieempfindlich.",
          "Autoregulation ca. 80–180 mmHg: myogen + tubuloglomerulärer Feedback (Adenosin/A1).",
          "GFR-Schutz bei Hypoperfusion: Prostaglandine afferent (NSAR!), Angiotensin II efferent (ACE-Hemmer!)."
        ],
        warum: [
          { q: "Warum ist das Nierenmark trotz der enormen Gesamtdurchblutung der Niere chronisch hypoxisch?", a: "Nur ca. 10 % des Flusses erreichen das Mark, und O₂ diffundiert in den haarnadelförmigen Vasa recta von den absteigenden direkt in die aufsteigenden Schenkel (Gegenstrom-Shunt), bevor es die tiefen Abschnitte erreicht. Gleichzeitig verbraucht der dicke aufsteigende Teil durch NKCC2-getriebenen Transport viel O₂. Der niedrige Markfluss ist für die Harnkonzentrierung nötig (kein Auswaschen des Gradienten), erkauft das aber mit Hypoxie." },
          { q: "Warum kann ein NSAR bei einem hypovolämen Patienten eine akute Nierenschädigung auslösen, bei einem Gesunden aber kaum?", a: "Beim Gesunden spielen Prostaglandine für die Nierendurchblutung kaum eine Rolle. Bei Hypovolämie, Herzinsuffizienz oder Zirrhose sind Sympathikus und Angiotensin II aktiviert und verengen das Vas afferens; vasodilatierende Prostaglandine halten Fluss und GFR dann aufrecht. NSAR blockieren diesen Gegenspieler – die afferente Konstriktion wirkt ungebremst, GFR und Markperfusion fallen." }
        ],
        klinik: [
          "Perioperativ NSAR bei Hypovolämie, CKD, Herzinsuffizienz und gleichzeitiger ACE-Hemmer-/Diuretikatherapie vermeiden.",
          "Venöse Stauung ist ein eigenständiger AKI-Faktor: Volumenüberladung und hoher ZVD vermeiden.",
          "Laparoskopie und intraabdominelle Hypertension mindern Urinfluss und Nierenperfusion – Pneumoperitoneum-Druck so niedrig wie möglich."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Wie verteilt sich der renale Blutfluss zwischen Rinde und Mark und wie hoch ist die O₂-Extraktion?", a: "Ca. 90 % in die Rinde, ca. 10 % ins Mark; die O₂-Extraktion der Niere ist niedrig (ca. 10 %), weil der Fluss primär der Filtration dient." },
          { q: "Spezialwissen Niere: Warum steigt der renale O₂-Bedarf mit der GFR?", a: "Der O₂-Verbrauch dient überwiegend dem aktiven Na⁺-Transport; eine höhere GFR erhöht die filtrierte und zu resorbierende Na⁺-Menge." },
          { q: "Spezialwissen Niere: Welche Nephronabschnitte sind besonders ischämieempfindlich und warum?", a: "Der dicke aufsteigende Teil im Mark (mTAL) und das S3-Segment des proximalen Tubulus im äußeren Mark – hoher Transport-O₂-Verbrauch bei niedrigem Mark-PO₂ (ca. 10–20 mmHg)." },
          { q: "Spezialwissen Niere: Wie funktioniert der tubuloglomeruläre Feedback?", a: "Die Macula densa misst über NKCC2 die NaCl-Konzentration; bei Anstieg wird ATP/Adenosin freigesetzt, A1-Rezeptoren verengen das Vas afferens und senken die GFR; bei niedriger NaCl-Konzentration Dilatation und Reninfreisetzung." },
          { q: "Spezialwissen Niere: Wie erhalten Prostaglandine und Angiotensin II die GFR bei Hypoperfusion, und welche Pharmaka stören das?", a: "Prostaglandine dilatieren das Vas afferens (gestört durch NSAR), Angiotensin II verengt das Vas efferens (gestört durch ACE-Hemmer/AT1-Blocker) – Kombination mit Diuretikum = 'Triple Whammy'." },
          { q: "Spezialwissen Niere: Wie berechnet sich der effektive renale Perfusionsdruck?", a: "Ca. MAP − ZVD bzw. MAP − intraabdomineller Druck, wenn dieser höher ist; venöse Stauung und intraabdominelle Hypertension mindern die Nierenperfusion." },
          { q: "Spezialwissen Niere: Wie erklären SGLT2-Hemmer ihren initialen eGFR-Abfall und ihre Nephroprotektion?", a: "Mehr NaCl erreicht die Macula densa → tubuloglomerulärer Feedback → afferente Vasokonstriktion → niedrigerer glomerulärer Druck (Hyperfiltration ↓)." }
        ]
      },
      {
        id: "proximal",
        level: "Zelle",
        title: "Proximaler Tubulus – das Arbeitspferd des Nephrons",
        leitfrage: "Wie resorbiert der proximale Tubulus zwei Drittel des Filtrats – und warum müssen Schleifendiuretika hier erst sezerniert werden, bevor sie wirken?",
        body: [
          { h: "Resorptionsleistung" },
          "Der proximale Tubulus resorbiert ca. **65 %** des filtrierten Na⁺, Wassers und K⁺, nahezu **100 %** der Glukose und Aminosäuren, ca. **80 %** des Bicarbonats und den Großteil des Phosphats. Die Resorption ist **isoosmotisch**: Wasser folgt über Aquaporin-1 und parazellulär.",
          { h: "Zellulärer Motor" },
          "Die basolaterale **Na⁺/K⁺-ATPase** hält das intrazelluläre Na⁺ niedrig. Der Na⁺-Gradient treibt alle apikalen Transporter an (sekundär aktiver Transport):",
          { ul: [
            "**NHE3** (Na⁺-Aufnahme gegen H⁺-Sekretion) – Grundlage der HCO₃⁻-Resorption.",
            "**SGLT2** (S1/S2, ca. 90 % der Glukoseresorption) und **SGLT1** (S3, Rest). Die Nierenschwelle für Glukose liegt bei ca. 180 mg/dl (10 mmol/l).",
            "Na⁺-gekoppelte Transporter für Aminosäuren und Phosphat (NaPi-IIa; Parathormon senkt die Phosphatresorption)."
          ] },
          { h: "Bicarbonatresorption Schritt für Schritt" },
          { ul: [
            "Sezerniertes H⁺ (NHE3, H⁺-ATPase) reagiert im Lumen mit filtriertem HCO₃⁻ zu H₂CO₃.",
            "Die luminale **Carboanhydrase IV** spaltet es zu CO₂ + H₂O, CO₂ diffundiert in die Zelle.",
            "Intrazellulär bildet die **Carboanhydrase II** wieder H⁺ + HCO₃⁻.",
            "HCO₃⁻ verlässt die Zelle basolateral über **NBCe1** (Na⁺-3HCO₃⁻-Cotransport), H⁺ wird erneut sezerniert.",
            "Ergebnis: Für jedes sezernierte H⁺ wird ein filtriertes HCO₃⁻ zurückgewonnen. **Acetazolamid** hemmt die Carboanhydrase → Bicarbonaturie und metabolische Azidose."
          ] },
          { h: "Sekretion" },
          "Der proximale Tubulus sezerniert proteingebundene Substanzen, die kaum filtriert werden: **organische Anionen** über OAT1/OAT3 (Penicilline, Schleifendiuretika, Thiazide, NSAR, Harnsäure) und **organische Kationen** über OCT2/MATE (Kreatinin, Metformin). Schleifendiuretika wirken von luminal und müssen deshalb erst sezerniert werden: Bei Hypalbuminämie (mehr Verteilung, weniger Anlieferung) und bei Urämie (Konkurrenz durch organische Anionen) braucht es höhere Dosen.",
          { h: "Weitere Leistungen" },
          { ul: [
            "**Ammoniagenese** aus Glutamin: NH₄⁺ wird ausgeschieden, neues HCO₃⁻ entsteht (gesteigert bei Azidose und Hypokaliämie).",
            "**Glomerulotubuläres Gleichgewicht:** Bei steigender GFR wird proportional mehr resorbiert, der resorbierte Anteil bleibt annähernd konstant.",
            "**Endokrin:** 1α-Hydroxylierung von Vitamin D zu Calcitriol.",
            "**Endozytose** filtrierter kleiner Proteine (Megalin/Cubilin) – Weg der Aminoglykosid-Nephrotoxizität."
          ] },
          "Ein generalisierter proximaler Transportdefekt (**Fanconi-Syndrom**) führt zu Glukosurie bei normalem Blutzucker, Aminoazidurie, Phosphaturie und proximaler renal-tubulärer Azidose."
        ],
        merke: [
          "Ca. 65 % Na⁺/H₂O isoosmotisch, ~100 % Glukose/Aminosäuren, ca. 80 % HCO₃⁻.",
          "Motor: basolaterale Na⁺/K⁺-ATPase; apikal NHE3, SGLT2 (90 % Glukose), SGLT1.",
          "HCO₃⁻-Resorption: H⁺-Sekretion + Carboanhydrase IV/II + NBCe1 (→ Acetazolamid).",
          "Sekretion organischer Anionen (OAT: Diuretika, Penicilline) und Kationen (OCT2: Kreatinin, Metformin).",
          "Ammoniagenese aus Glutamin = Quelle neuen Bicarbonats."
        ],
        warum: [
          { q: "Warum scheiden Patienten unter SGLT2-Hemmern 'nur' etwa die Hälfte der filtrierten Glukose aus und nicht alles?", a: "SGLT2 übernimmt normalerweise ca. 90 % der Glukoseresorption in S1/S2. Wird es gehemmt, erreicht mehr Glukose das S3-Segment, wo SGLT1 seine Reservekapazität nutzt und einen erheblichen Teil zurückholt." },
          { q: "Warum braucht ein Patient mit nephrotischem Syndrom oder fortgeschrittener Niereninsuffizienz höhere Furosemid-Dosen?", a: "Furosemid ist stark proteingebunden, wird kaum filtriert und muss über OAT im proximalen Tubulus ins Lumen sezerniert werden, um an NKCC2 zu wirken. Bei Hypalbuminämie verteilt es sich stärker extravasal und erreicht weniger die Niere; bei Urämie konkurrieren organische Anionen um die Sekretion. Zudem gibt es weniger funktionierende Nephrone." }
        ],
        klinik: [
          "Acetazolamid kann eine metabolische Alkalose (z.B. nach Diuretikatherapie oder bei Hyperkapnie-Kompensation) senken.",
          "Metformin wird tubulär sezerniert und kumuliert bei eingeschränkter Nierenfunktion – Laktatazidose-Risiko; perioperativ nach Leitlinie pausieren.",
          "Aminoglykoside reichern sich über Megalin in proximalen Tubuluszellen an – Spiegelkontrollen und Einmaldosierung."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Welche Anteile des Filtrats resorbiert der proximale Tubulus?", a: "Ca. 65 % von Na⁺, Wasser und K⁺ (isoosmotisch), ~100 % von Glukose und Aminosäuren, ca. 80 % des Bicarbonats und den Großteil des Phosphats." },
          { q: "Spezialwissen Niere: Beschreibe die Bicarbonatresorption im proximalen Tubulus.", a: "Sezerniertes H⁺ (NHE3) bildet mit filtriertem HCO₃⁻ H₂CO₃ → luminale Carboanhydrase IV → CO₂ + H₂O → CO₂ diffundiert in die Zelle → Carboanhydrase II bildet H⁺ + HCO₃⁻ → HCO₃⁻ basolateral über NBCe1 ins Blut." },
          { q: "Spezialwissen Niere: Wie verteilt sich die Glukoseresorption auf SGLT2 und SGLT1, und wo liegt die Nierenschwelle?", a: "SGLT2 (S1/S2) ca. 90 %, SGLT1 (S3) den Rest; Nierenschwelle ca. 180 mg/dl (10 mmol/l)." },
          { q: "Spezialwissen Niere: Warum müssen Schleifendiuretika im proximalen Tubulus sezerniert werden?", a: "Sie sind proteingebunden, werden kaum filtriert und wirken luminal an NKCC2 – sie gelangen über organische Anionentransporter (OAT1/3) ins Lumen." },
          { q: "Spezialwissen Niere: Welche Bedeutung hat die Ammoniagenese im proximalen Tubulus?", a: "Aus Glutamin entstehen NH₄⁺ (wird ausgeschieden) und neues HCO₃⁻ – der wichtigste anpassungsfähige Weg der Säureausscheidung, gesteigert bei Azidose und Hypokaliämie." },
          { q: "Spezialwissen Niere: Was kennzeichnet ein Fanconi-Syndrom?", a: "Generalisierte proximale Tubulusfunktionsstörung: Glukosurie bei normalem Blutzucker, Aminoazidurie, Phosphaturie, Bicarbonatverlust (proximale RTA)." }
        ]
      },
      {
        id: "konzentrierung",
        level: "Gewebe",
        title: "Henle-Schleife, Gegenstromprinzip und Harnkonzentrierung",
        leitfrage: "Wie baut die Niere einen osmotischen Gradienten bis ca. 1200 mosmol/kg auf – und warum zerstören Schleifendiuretika sowohl die Konzentrierung als auch die Verdünnung?",
        body: [
          { h: "Segmente der Henle-Schleife" },
          { table: { head: ["Segment", "Wasser", "NaCl", "Folge"], rows: [
            ["Dünner absteigender Teil", "durchlässig (AQP1)", "kaum durchlässig", "Wasser tritt ins hypertone Interstitium aus → Tubulusflüssigkeit wird konzentriert"],
            ["Dünner aufsteigender Teil", "undurchlässig", "passiver Austritt", "Verdünnung beginnt (innere Medulla)"],
            ["Dicker aufsteigender Teil (TAL)", "undurchlässig", "aktiv über NKCC2", "'Verdünnungssegment': Flüssigkeit verlässt ihn hypoton (ca. 100 mosmol/kg)"]
          ] } },
          { h: "Der dicke aufsteigende Teil" },
          "Der **NKCC2** transportiert 1 Na⁺, 1 K⁺ und 2 Cl⁻ in die Zelle. K⁺ wird über **ROMK** ins Lumen recycelt. Dadurch entsteht ein **lumenpositives transepitheliales Potenzial**, das Na⁺, **Ca²⁺ und Mg²⁺ parazellulär** (Claudin-16/-19) resorbiert. Hier werden ca. 25 % des filtrierten Na⁺ resorbiert (Mount 2014). Schleifendiuretika blockieren NKCC2 und vermindern dadurch auch die Ca²⁺- und Mg²⁺-Resorption → Hyperkalziurie und Hypomagnesiämie. Das Bartter-Syndrom (Mutationen u.a. von NKCC2 oder ROMK) entspricht einer 'angeborenen Schleifendiuretika-Wirkung'.",
          { h: "Gegenstrommultiplikation" },
          "Der TAL pumpt NaCl ins Interstitium, ohne dass Wasser folgen kann ('Einzeleffekt' von ca. 200 mosmol/kg zwischen auf- und absteigendem Schenkel). Durch den Gegenstrom wird dieser Effekt entlang der Schleife **vervielfacht** – vom kortikomedullären Übergang (ca. 300 mosmol/kg) bis zur Papille. In der **äußeren Medulla** trägt v.a. NaCl den Gradienten, in der **inneren Medulla** zusätzlich **Harnstoff**.",
          { h: "Harnstoff-Recycling" },
          "ADH erhöht im inneren medullären Sammelrohr die Harnstoffpermeabilität (UT-A1/UT-A3). Harnstoff, der im Sammelrohr durch Wasserentzug konzentriert wurde, strömt ins Interstitium und trägt etwa die Hälfte der Osmolalität der inneren Medulla bei (Sands & Layton 2009). Eiweißarme Ernährung (wenig Harnstoff) schwächt die Konzentrierungsfähigkeit.",
          { h: "Vasa recta – Gegenstromaustausch" },
          "Die haarnadelförmigen Vasa recta versorgen das Mark, **ohne den Gradienten auszuwaschen**: Absteigend nehmen sie gelöste Stoffe auf und geben Wasser ab, aufsteigend umgekehrt. Ein hoher Markfluss (z.B. Vasodilatation, osmotische Diurese) wäscht den Gradienten aus und mindert die Konzentrierung.",
          { h: "Grenzen der Konzentrierung und Verdünnung" },
          "Maximale Urinosmolalität beim Erwachsenen ca. **1200 mosmol/kg**, minimale ca. **50 mosmol/kg**. Mit der täglichen Ausscheidung gelöster Teilchen (ca. 600–900 mosmol) ergibt sich ein **minimales Urinvolumen** von ca. 0,5 l/Tag (600 / 1200). Umgekehrt begrenzt eine sehr geringe Zufuhr gelöster Stoffe ('Tea and Toast', Bierpotomanie) die maximale Wasserausscheidung: Bei 250 mosmol/Tag und 50 mosmol/kg können höchstens ca. 5 l freies Wasser ausgeschieden werden – darüber droht eine Hyponatriämie."
        ],
        merke: [
          "Absteigend: wasser-, nicht salzdurchlässig; aufsteigend: salz-, nicht wasserdurchlässig.",
          "TAL: NKCC2 + ROMK → lumenpositives Potenzial → parazelluläre Ca²⁺/Mg²⁺-Resorption; ca. 25 % Na⁺.",
          "Gegenstrommultiplikation (NaCl) + Harnstoff-Recycling (ADH, UT-A) → bis ca. 1200 mosmol/kg.",
          "Vasa recta = Gegenstromaustauscher; hoher Markfluss wäscht den Gradienten aus.",
          "Minimales Urinvolumen ca. 0,5 l/Tag; minimale Osmolalität ca. 50 mosmol/kg."
        ],
        warum: [
          { q: "Warum kann ein Patient unter Furosemid weder maximal konzentrieren noch maximal verdünnen?", a: "Der TAL erzeugt durch NKCC2 sowohl den hypertonen Markgradienten (Voraussetzung für die Konzentrierung im Sammelrohr unter ADH) als auch die hypotone Tubulusflüssigkeit (Voraussetzung für die Ausscheidung freien Wassers). Furosemid blockiert NKCC2 und hebt beide Funktionen auf – der Urin nähert sich der Plasmaosmolalität an." },
          { q: "Warum sind Thiazide häufiger Ursache einer Hyponatriämie als Schleifendiuretika?", a: "Thiazide wirken im distalen Konvolut, also nach der Henle-Schleife. Der Markgradient bleibt erhalten, und unter ADH kann das Sammelrohr weiter maximal Wasser resorbieren, während Na⁺ verloren geht. Schleifendiuretika zerstören den Gradienten und begrenzen so die Wasserrückresorption." }
        ],
        klinik: [
          "Schleifendiuretika bei Hyperkalzämie (nach Volumengabe) nutzen die verminderte parazelluläre Ca²⁺-Resorption; Thiazide senken dagegen die Ca²⁺-Ausscheidung.",
          "Furosemid senkt den O₂-Verbrauch des mTAL, verhindert aber laut KDIGO kein AKI und soll dafür nicht eingesetzt werden.",
          "Osmotische Diurese (Hyperglykämie, Mannitol) wäscht den Markgradienten aus → hohe Urinmengen trotz Volumenmangel."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Wie unterscheiden sich absteigender und aufsteigender Teil der Henle-Schleife in ihrer Permeabilität?", a: "Dünner absteigender Teil: wasserdurchlässig (AQP1), kaum salzdurchlässig. Aufsteigender Teil: wasserundurchlässig; dünn passiver, dick aktiver NaCl-Austritt (NKCC2)." },
          { q: "Spezialwissen Niere: Warum resorbiert der dicke aufsteigende Teil auch Ca²⁺ und Mg²⁺?", a: "K⁺-Recycling über ROMK erzeugt ein lumenpositives Potenzial, das Ca²⁺ und Mg²⁺ parazellulär (Claudin-16/-19) treibt; Schleifendiuretika vermindern das → Hyperkalziurie, Hypomagnesiämie." },
          { q: "Spezialwissen Niere: Welche Rolle spielt Harnstoff bei der Harnkonzentrierung?", a: "ADH erhöht über UT-A1/UT-A3 die Harnstoffpermeabilität des inneren medullären Sammelrohrs; Harnstoff strömt ins Interstitium und trägt etwa die Hälfte der Osmolalität der inneren Medulla bei." },
          { q: "Spezialwissen Niere: Warum waschen die Vasa recta den medullären Gradienten nicht aus?", a: "Sie verlaufen haarnadelförmig als Gegenstromaustauscher: Absteigend nehmen sie Solute auf und geben Wasser ab, aufsteigend umgekehrt, und ihr Fluss ist gering." },
          { q: "Spezialwissen Niere: Welche Grenzen hat die Konzentrierungs- und Verdünnungsfähigkeit der Niere?", a: "Urinosmolalität ca. 50–1200 mosmol/kg; minimales Urinvolumen ca. 0,5 l/Tag bei ca. 600 mosmol Soluteausscheidung; bei sehr geringer Solutezufuhr ist die maximale Wasserausscheidung begrenzt (z.B. 250 mosmol/50 = ca. 5 l)." },
          { q: "Spezialwissen Niere: Warum verursachen Thiazide häufiger Hyponatriämien als Schleifendiuretika?", a: "Sie wirken distal der Schleife: Der Markgradient bleibt erhalten, unter ADH wird weiter Wasser resorbiert, während Na⁺ verloren geht." }
        ]
      },
      {
        id: "distal",
        level: "Zelle",
        title: "Distales Nephron, Sammelrohr und Kaliumhaushalt",
        leitfrage: "Wie entscheidet das letzte Stück des Nephrons über die Feinabstimmung von Natrium, Kalium, Wasser und Säure – und warum ist Kalium vor allem eine Frage der Sekretion?",
        body: [
          { h: "Distales Konvolut (DCT)" },
          "Der **NaCl-Cotransporter (NCC)** resorbiert ca. 5 % des Na⁺; er ist Ziel der **Thiazide**. Die Aktivität wird über WNK-Kinasen gesteuert (Gain-of-Function → familiäre hyperkaliämische Hypertonie/Gordon-Syndrom; NCC-Verlust → Gitelman-Syndrom). Ca²⁺ wird **transzellulär** über TRPV5 resorbiert (gefördert durch Parathormon und Calcitriol), Mg²⁺ über TRPM6 (Subramanya & Ellison 2014).",
          { h: "Verbindungstubulus und Sammelrohr: Hauptzellen" },
          { ul: [
            "**ENaC** (epithelialer Na⁺-Kanal) resorbiert Na⁺; **Aldosteron** steigert über den Mineralokortikoidrezeptor Zahl und Aktivität von ENaC und Na⁺/K⁺-ATPase.",
            "Die Na⁺-Resorption ohne begleitendes Anion erzeugt ein **lumennegatives Potenzial**, das die **K⁺-Sekretion** über ROMK und flussabhängige BK-Kanäle antreibt.",
            "Blockade: Amilorid und Triamteren (ENaC), Spironolacton/Eplerenon (MR). Auch **Trimethoprim** blockiert ENaC → Hyperkaliämie.",
            "**Wasser:** ADH → V2-Rezeptor → cAMP → Einbau von **Aquaporin-2** in die apikale Membran; basolateral verlassen Wasser über AQP3/AQP4 die Zelle (Pearce et al. 2015)."
          ] },
          { h: "Schaltzellen" },
          "**Typ-A-(α-)Schaltzellen** sezernieren H⁺ über die apikale H⁺-ATPase und H⁺/K⁺-ATPase und geben HCO₃⁻ basolateral über AE1 ab (Säureausscheidung). **Typ-B-(β-)Schaltzellen** sezernieren HCO₃⁻ über **Pendrin** (Cl⁻/HCO₃⁻-Austauscher) bei Alkalose (Roy et al. 2015).",
          { h: "Aldosteron" },
          "Stimuli: **Angiotensin II** und **Hyperkaliämie** (direkt an der Zona glomerulosa), in geringerem Maß ACTH. Wirkung: Na⁺-Retention, K⁺- und H⁺-Sekretion. Mit diesem Doppelreiz reguliert Aldosteron sowohl Volumen als auch Kalium.",
          { h: "Kaliumhaushalt" },
          "Gesamtkörperkalium ca. **3500 mmol** (ca. 50 mmol/kg), davon ca. **98 % intrazellulär**. Schon kleine Verschiebungen verändern das Plasmakalium stark.",
          { table: { head: ["Ebene", "Nach intrazellulär (K⁺ ↓)", "Nach extrazellulär (K⁺ ↑)"], rows: [
            ["Interne Bilanz (Minuten)", "Insulin, β2-Agonisten (Na⁺/K⁺-ATPase), Alkalose", "Insulinmangel, β-Blocker, mineralische Azidose, Hyperosmolalität, Zelllyse (Hämolyse, Rhabdomyolyse, Tumorlyse), Succinylcholin bei Rezeptor-Hochregulation"],
            ["Externe Bilanz (Stunden bis Tage)", "Renale Ausscheidung ↑: Aldosteron, hohe distale Na⁺-Anflutung und hoher Fluss (Diuretika), nicht resorbierbare Anionen, Magnesiummangel", "Ausscheidung ↓: Niereninsuffizienz, Hypoaldosteronismus, ACE-Hemmer/AT1-Blocker, MR-Antagonisten, Amilorid, Trimethoprim, NSAR, Heparin, Calcineurin-Inhibitoren"]
          ] } },
          "Filtriertes K⁺ wird zum größten Teil proximal (ca. 65 %) und in der Henle-Schleife (ca. 25 %) resorbiert. Die **Ausscheidung wird distal über die Sekretion** reguliert (Palmer & Clegg 2016). Ca. 90 % der täglichen Zufuhr werden renal, ca. 10 % über den Darm ausgeschieden. **Magnesiummangel** steigert die K⁺-Sekretion über ROMK → Hypokaliämie, die ohne Mg²⁺-Substitution therapierefraktär bleibt."
        ],
        merke: [
          "DCT: NCC (Thiazide), Ca²⁺ über TRPV5 (PTH), Mg²⁺ über TRPM6.",
          "Hauptzelle: ENaC (Aldosteron) → lumennegativ → K⁺-Sekretion (ROMK/BK); AQP2 (ADH/V2).",
          "Schaltzellen: Typ A H⁺-Sekretion, Typ B HCO₃⁻-Sekretion (Pendrin).",
          "Aldosteron-Reize: Angiotensin II und Hyperkaliämie.",
          "K⁺: 98 % intrazellulär; Ausscheidung = distale Sekretion; Mg²⁺-Mangel → refraktäre Hypokaliämie."
        ],
        warum: [
          { q: "Warum verursachen Schleifen- und Thiaziddiuretika eine Hypokaliämie?", a: "Sie erhöhen die Na⁺- und Flüssigkeitsanflutung im Sammelrohr. Mehr Na⁺-Resorption über ENaC macht das Lumen negativer, der höhere Fluss aktiviert BK-Kanäle und spült sezerniertes K⁺ fort. Zusätzlich aktiviert die Volumenkontraktion das RAAS (Aldosteron) – alle drei Faktoren steigern die K⁺-Sekretion." },
          { q: "Warum kann Trimethoprim eine Hyperkaliämie auslösen?", a: "Trimethoprim ähnelt strukturell Amilorid und blockiert ENaC in den Hauptzellen. Damit fehlt das lumennegative Potenzial, das die K⁺-Sekretion antreibt. Zusätzlich hemmt es die tubuläre Kreatininsekretion, sodass das Kreatinin ansteigt, ohne dass die GFR fällt." }
        ],
        klinik: [
          "Perioperative Hyperkaliämie: an ACE-Hemmer/AT1-Blocker, MR-Antagonisten, Trimethoprim, Heparin, NSAR, Niereninsuffizienz, Gewebszerfall und Succinylcholin denken.",
          "Hypokaliämie: immer auch Mg²⁺ prüfen und substituieren.",
          "Zentraler vs. nephrogener Diabetes insipidus: Desmopressin wirkt nur, wenn V2-Rezeptor und AQP2 intakt sind (zentraler DI)."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Welche Transporter und Pharmaka sind im distalen Konvolut relevant?", a: "NaCl-Cotransporter NCC (Thiazide), Ca²⁺-Resorption über TRPV5 (PTH, Calcitriol), Mg²⁺ über TRPM6; reguliert über WNK-Kinasen." },
          { q: "Spezialwissen Niere: Wie hängen Na⁺-Resorption und K⁺-Sekretion in der Hauptzelle zusammen?", a: "Na⁺-Resorption über ENaC (aldosteronabhängig) erzeugt ein lumennegatives Potenzial, das die K⁺-Sekretion über ROMK und flussabhängige BK-Kanäle antreibt." },
          { q: "Spezialwissen Niere: Wie wirkt ADH im Sammelrohr?", a: "V2-Rezeptor → cAMP → Einbau von Aquaporin-2 in die apikale Membran (Wasseraustritt basolateral über AQP3/4); zusätzlich erhöhte Harnstoffpermeabilität im inneren Sammelrohr." },
          { q: "Spezialwissen Niere: Welche Aufgaben haben Typ-A- und Typ-B-Schaltzellen?", a: "Typ A: H⁺-Sekretion (H⁺-ATPase, H⁺/K⁺-ATPase), HCO₃⁻ basolateral über AE1. Typ B: HCO₃⁻-Sekretion über Pendrin bei Alkalose." },
          { q: "Spezialwissen Niere: Wie ist das Gesamtkörperkalium verteilt und wo wird die renale Ausscheidung reguliert?", a: "Ca. 3500 mmol, ca. 98 % intrazellulär; filtriertes K⁺ wird proximal und in der Schleife größtenteils resorbiert, die Ausscheidung wird distal über Sekretion (Aldosteron, Fluss, Na⁺-Anflutung) reguliert." },
          { q: "Spezialwissen Niere: Warum ist eine Hypokaliämie bei Magnesiummangel therapierefraktär?", a: "Intrazelluläres Mg²⁺ hemmt normalerweise die K⁺-Sekretion über ROMK; bei Mg²⁺-Mangel fällt diese Hemmung weg und K⁺ geht renal verloren, bis Mg²⁺ ersetzt ist." },
          { q: "Spezialwissen Niere: Welche Faktoren verschieben Kalium nach intrazellulär?", a: "Insulin, β2-Agonisten (Na⁺/K⁺-ATPase-Aktivierung) und Alkalose." }
        ]
      },
      {
        id: "wasser",
        level: "System",
        title: "Wasser- und Natriumhaushalt",
        leitfrage: "Warum ist eine Hyponatriämie fast immer ein Wasserproblem – und warum ist das gerade nach Operationen so gefährlich?",
        body: [
          { h: "Flüssigkeitskompartimente" },
          "Das Gesamtkörperwasser beträgt ca. **60 %** des Körpergewichts beim Mann, ca. 50–55 % bei der Frau und ca. 75–80 % beim Neugeborenen. Davon sind ca. **2/3 intrazellulär**, 1/3 extrazellulär. Der Extrazellulärraum besteht zu ca. 3/4 aus interstitieller Flüssigkeit und zu ca. 1/4 aus Plasma.",
          { h: "Zwei getrennte Regelkreise" },
          { table: { head: ["", "Osmoregulation", "Volumenregulation"], rows: [
            ["Regelgröße", "Plasmaosmolalität (≈ Na⁺-Konzentration)", "Effektives zirkulierendes Volumen"],
            ["Sensor", "Osmorezeptoren im Hypothalamus", "Barorezeptoren, Vorhofrezeptoren, Vas afferens, Macula densa"],
            ["Effektor", "ADH und Durst → Wasserbilanz", "RAAS, Sympathikus, natriuretische Peptide, Druck-Natriurese → Na⁺-Bilanz"],
            ["Störung zeigt sich als", "Hypo-/Hypernatriämie", "Hypo-/Hypervolämie (Ödeme)"]
          ] } },
          "Die **Natriumkonzentration** spiegelt also das Verhältnis von Na⁺ zu Wasser, nicht den Na⁺-Bestand. Der **Na⁺-Bestand** bestimmt das Extrazellulärvolumen.",
          { h: "ADH-Regulation" },
          "Die osmotische ADH-Freisetzung setzt bei ca. **280–285 mosmol/kg** ein und reagiert schon auf Änderungen von 1–2 %. **Nicht-osmotische Reize** können sie übersteuern: relevante Hypovolämie oder Hypotonie, Übelkeit, Schmerz, Stress, Operation, Hypoxie, Hyperkapnie und Medikamente (z.B. Carbamazepin, SSRI, Cyclophosphamid). Nach Operationen ist ADH deshalb oft unabhängig von der Osmolalität erhöht.",
          { h: "Postoperative Hyponatriämie" },
          "Nicht-osmotisch erhöhtes ADH + hypotone Infusionen → Retention freien Wassers → **hyponatriämische Enzephalopathie** (Kinder und junge Frauen besonders gefährdet). Deshalb werden zur Erhaltungsinfusion bei Kindern **isotone Lösungen** empfohlen (AAP 2018, NICE). Ringer-Laktat ist leicht hypoton (Na⁺ ca. 130 mmol/l) – bei erhöhtem Hirndruck relevant.",
          { h: "Korrekturregeln (Europäische Hyponatriämie-Leitlinie 2014)" },
          { ul: [
            "**Schwere Symptome** (Krampfanfall, Koma, Erbrechen): 150 ml NaCl 3 % über 20 min, ggf. wiederholen, bis das Na⁺ um 5 mmol/l gestiegen ist.",
            "**Obergrenze:** höchstens 10 mmol/l in den ersten 24 h und 8 mmol/l in jedem weiteren 24-h-Intervall – sonst droht das **osmotische Demyelinisierungssyndrom**. Risikofaktoren: Alkoholabhängigkeit, Mangelernährung, Hypokaliämie, Lebererkrankung.",
            "Bei zu schneller Korrektur: Gegenregulation mit freiem Wasser bzw. Desmopressin erwägen."
          ] },
          { h: "Hypernatriämie" },
          "Sie bedeutet ein **Wasserdefizit** im Verhältnis zum Na⁺ (fehlender Durst bzw. Zugang zu Wasser, Diabetes insipidus, osmotische Diurese, NaCl- oder Bicarbonat-Zufuhr). Chronische Hypernatriämie langsam korrigieren (ca. ≤ 10–12 mmol/l pro 24 h), um ein Hirnödem zu vermeiden.",
          { h: "Freies Wasser und Infusionslösungen" },
          "Die **Elektrolyt-freie Wasserclearance** zeigt, ob die Niere netto freies Wasser ausscheidet: Ist (Urin-Na⁺ + Urin-K⁺) höher als das Plasma-Na⁺, wird netto freies Wasser zurückgehalten, und jede hypotone Zufuhr senkt das Na⁺ weiter. NaCl 0,9 % enthält 154 mmol/l Na⁺ und Cl⁻. Bei SIADH mit hoher Urinosmolalität kann eine isotone Kochsalzinfusion das Na⁺ sogar senken: Das Na⁺ wird ausgeschieden, das Wasser in konzentriertem Urin zurückgehalten ('Desalination')."
        ],
        merke: [
          "Gesamtkörperwasser 60 % (Mann); 2/3 intrazellulär; Extrazellulär 3/4 interstitiell, 1/4 Plasma.",
          "Na⁺-Konzentration = Wasserfrage (ADH, Durst); Na⁺-Bestand = Volumenfrage (RAAS u.a.).",
          "Postoperativ nicht-osmotisch erhöhtes ADH → hypotone Infusionen vermeiden (Kinder isoton).",
          "Hyponatriämie-Korrektur max. 10 mmol/l (erste 24 h), dann 8 mmol/l pro 24 h.",
          "Schwer symptomatisch: 150 ml NaCl 3 % über 20 min, Ziel +5 mmol/l."
        ],
        warum: [
          { q: "Warum kann eine Infusion von NaCl 0,9 % bei SIADH das Serumnatrium weiter senken?", a: "Bei SIADH ist die Urinosmolalität fixiert hoch (z.B. 600 mosmol/kg). 1 l NaCl 0,9 % enthält ca. 308 mosmol. Die Niere scheidet diese Osmole in nur ca. 0,5 l Urin aus und behält etwa 0,5 l elektrolytfreies Wasser zurück – das verdünnt das Plasma weiter." },
          { q: "Warum ist die Natriumkonzentration kein Maß für den Volumenstatus?", a: "Die Konzentration entsteht aus dem Verhältnis von Na⁺ zu Wasser und wird über ADH und Durst geregelt. Der Volumenstatus hängt vom Gesamtbestand an Na⁺ ab, der über RAAS, Sympathikus und natriuretische Peptide geregelt wird. Hyponatriämie kommt deshalb bei Hypo-, Eu- und Hypervolämie vor (z.B. Diuretika, SIADH, Herzinsuffizienz)." }
        ],
        klinik: [
          "Postoperativ Na⁺ kontrollieren bei Kindern, nach großen Eingriffen, nach TUR-Prostata (Spülflüssigkeit) und bei Hypophysenchirurgie (DI oder SIADH möglich).",
          "Akute Hyponatriämie mit Symptomen ist ein Notfall – hypertone Kochsalzlösung nicht aus Angst vor Demyelinisierung vorenthalten; die Obergrenzen gelten für 24 h.",
          "SIADH vs. zerebrales Salzverlustsyndrom: entscheidend ist der Volumenstatus (Euvolämie vs. Hypovolämie)."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Wie verteilt sich das Gesamtkörperwasser auf die Kompartimente?", a: "Ca. 60 % des Körpergewichts (Mann), davon 2/3 intrazellulär und 1/3 extrazellulär; extrazellulär ca. 3/4 interstitiell und 1/4 Plasma." },
          { q: "Spezialwissen Niere: Welche Regelkreise steuern Natriumkonzentration und Natriumbestand?", a: "Konzentration = Osmoregulation (Osmorezeptoren, ADH, Durst → Wasserbilanz). Bestand = Volumenregulation (RAAS, Sympathikus, natriuretische Peptide, Druck-Natriurese → Na⁺-Bilanz)." },
          { q: "Spezialwissen Niere: Welche nicht-osmotischen Reize steigern die ADH-Freisetzung?", a: "Relevante Hypovolämie/Hypotonie, Übelkeit, Schmerz, Stress/Operation, Hypoxie, Hyperkapnie und Medikamente (z.B. Carbamazepin, SSRI)." },
          { q: "Spezialwissen Niere: Wie schnell darf eine Hyponatriämie maximal korrigiert werden?", a: "Höchstens 10 mmol/l in den ersten 24 h und 8 mmol/l in jedem weiteren 24-h-Intervall (Europäische Leitlinie 2014), sonst droht ein osmotisches Demyelinisierungssyndrom." },
          { q: "Spezialwissen Niere: Wie wird eine schwer symptomatische Hyponatriämie akut behandelt?", a: "150 ml NaCl 3 % über 20 min, ggf. wiederholen, bis das Serumnatrium um 5 mmol/l gestiegen ist." },
          { q: "Spezialwissen Niere: Warum werden bei Kindern isotone Erhaltungsinfusionen empfohlen?", a: "Perioperativ ist ADH nicht-osmotisch erhöht; hypotone Lösungen führen zur Retention freien Wassers und zu potenziell tödlicher hyponatriämischer Enzephalopathie (AAP 2018, NICE)." }
        ]
      },
      {
        id: "saeurebasen",
        level: "System",
        title: "Renale Säure-Basen-Regulation",
        leitfrage: "Wie scheidet die Niere täglich die nicht flüchtigen Säuren aus, und wie erkennt man an Urin und Blut, wo eine Störung liegt?",
        body: [
          { h: "Die tägliche Säurelast" },
          "Der Stoffwechsel erzeugt täglich ca. **50–100 mmol nicht flüchtige Säure** (ca. 1 mmol/kg/Tag), v.a. aus schwefelhaltigen Aminosäuren. Diese Säuren werden zunächst durch Bicarbonat gepuffert. Die Niere muss deshalb (1) das gesamte filtrierte Bicarbonat zurückgewinnen und (2) das verbrauchte Bicarbonat **neu bilden** (Hamm et al. 2015).",
          { h: "1. Rückgewinnung des filtrierten Bicarbonats" },
          "Täglich werden ca. **4300 mmol HCO₃⁻** filtriert (180 l × 24 mmol/l). Davon werden ca. 80 % proximal, ca. 15 % in der Henle-Schleife und der Rest distal resorbiert – praktisch vollständig.",
          { h: "2. Neubildung von Bicarbonat" },
          { ul: [
            "**Titrierbare Säure:** Sezerniertes H⁺ wird v.a. an Phosphat (HPO₄²⁻ → H₂PO₄⁻) gebunden. Die Menge ist durch die Phosphatausscheidung begrenzt.",
            "**Ammonium:** Proximal entstehen aus Glutamin NH₄⁺ und neues HCO₃⁻. Im Sammelrohr wird NH₃ mit sezerniertem H⁺ als NH₄⁺ 'gefangen'. Die Ammoniumausscheidung ist der **anpassungsfähige** Weg und kann bei chronischer Azidose um ein Vielfaches gesteigert werden.",
            "**Netto-Säureausscheidung** = NH₄⁺ + titrierbare Säure − ausgeschiedenes HCO₃⁻. Der minimale Urin-pH liegt bei ca. 4,5."
          ] },
          { h: "Urin-Anionenlücke" },
          "**Urin-AL = Na⁺ + K⁺ − Cl⁻** (im Urin). NH₄⁺ wird mit Cl⁻ ausgeschieden. Ist die Urin-AL **negativ**, wird viel NH₄⁺ ausgeschieden: Die Niere reagiert angemessen, die Ursache einer hyperchlorämischen Azidose liegt extrarenal (z.B. Diarrhö). Ist sie **positiv**, ist die NH₄⁺-Ausscheidung gestört (z.B. distale RTA, Niereninsuffizienz).",
          { h: "Renal-tubuläre Azidosen" },
          { table: { head: ["Typ", "Defekt", "Urin-pH", "Kalium"], rows: [
            ["1 (distal)", "H⁺-Sekretion der Typ-A-Schaltzellen gestört", "> 5,5 trotz Azidose", "erniedrigt; Nephrokalzinose"],
            ["2 (proximal)", "HCO₃⁻-Rückgewinnung gestört (oft Fanconi)", "< 5,5, sobald Plasma-HCO₃⁻ niedrig ist", "erniedrigt"],
            ["4", "Hypoaldosteronismus bzw. Aldosteronresistenz → NH₄⁺-Bildung ↓", "meist < 5,5", "erhöht"]
          ] } },
          { h: "Metabolische Alkalose: Entstehung und Aufrechterhaltung" },
          "Entstehung durch H⁺-Verlust (Erbrechen, Magensonde), Diuretika, Bicarbonatzufuhr oder Hypokaliämie. Normalerweise würde die Niere überschüssiges HCO₃⁻ schnell ausscheiden. **Aufrechterhalten** wird die Alkalose durch Volumen- und **Chloridmangel**, Hypokaliämie und Aldosteron. **Chloridsensitive** Formen (Urin-Cl⁻ < ca. 20 mmol/l) bessern sich durch NaCl- und KCl-Gabe.",
          { h: "Zeitliche Dimension und Stewart-Sicht" },
          "Die renale Kompensation einer respiratorischen Störung dauert **3–5 Tage** – deshalb unterscheiden sich die Kompensationsregeln für akute und chronische respiratorische Störungen. Aus Sicht des Stewart-Ansatzes steuert die Niere den pH vor allem über die **Chloridausscheidung**, also über die Strong Ion Difference. NH₄⁺ dient dabei als Vehikel für Cl⁻. Große Mengen NaCl 0,9 % (SID 0) senken die Plasma-SID und erzeugen eine hyperchlorämische Azidose. Balancierte Kristalloide verringerten in der SMART-Studie den kombinierten Endpunkt aus Tod, Nierenersatztherapie und persistierender Nierenfunktionsstörung (Semler et al. 2018)."
        ],
        merke: [
          "Säurelast ca. 1 mmol/kg/Tag; HCO₃⁻-Filtration ca. 4300 mmol/Tag – fast vollständig zurückgewonnen.",
          "Neues HCO₃⁻ über titrierbare Säure (Phosphat) und NH₄⁺ (anpassungsfähig, aus Glutamin).",
          "Urin-AL negativ = NH₄⁺-Ausscheidung intakt (extrarenale Ursache); positiv = renale Störung.",
          "RTA 1: Urin-pH > 5,5, K⁺ ↓; RTA 2: HCO₃⁻-Verlust; RTA 4: K⁺ ↑ (Aldosteron).",
          "Alkalose wird durch Volumen-/Cl⁻-Mangel, Hypokaliämie und Aldosteron aufrechterhalten."
        ],
        warum: [
          { q: "Warum korrigiert sich eine metabolische Alkalose nach Erbrechen nicht von selbst, solange der Patient keine Kochsalzlösung erhält?", a: "Volumenmangel aktiviert RAAS und steigert die proximale Na⁺- und HCO₃⁻-Resorption. Chloridmangel begrenzt die HCO₃⁻-Sekretion der Typ-B-Schaltzellen (Pendrin braucht luminales Cl⁻). Aldosteron und Hypokaliämie fördern die distale H⁺-Sekretion. Erst NaCl- und KCl-Gabe beseitigt diese Faktoren, und die Niere kann das überschüssige Bicarbonat ausscheiden." },
          { q: "Warum spricht eine negative Urin-Anionenlücke bei hyperchlorämischer Azidose für Diarrhö statt für eine distale RTA?", a: "Eine gesunde Niere beantwortet eine Azidose mit hoher NH₄⁺-Ausscheidung. NH₄⁺ wird als NH₄Cl ausgeschieden: Das Urin-Cl⁻ übersteigt Na⁺ + K⁺, die Urin-AL wird negativ. Bei distaler RTA ist die H⁺-Sekretion und damit die NH₄⁺-Ausscheidung gestört, die Urin-AL bleibt positiv." }
        ],
        klinik: [
          "Große Volumenmengen bevorzugt mit balancierten Kristalloiden statt NaCl 0,9 % geben.",
          "Chronische Hyperkapnie (COPD): kompensatorisch hohes HCO₃⁻ – bei Beatmung den PaCO₂ nicht schlagartig normalisieren (Posthyperkapnie-Alkalose).",
          "Metabolische Alkalose hemmt den Atemantrieb (Hypoventilation) und kann das Weaning erschweren."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Wie groß ist die tägliche nicht flüchtige Säurelast und wie viel Bicarbonat wird täglich filtriert?", a: "Ca. 50–100 mmol (ca. 1 mmol/kg/Tag); filtriert werden ca. 4300 mmol HCO₃⁻ pro Tag (180 l × 24 mmol/l)." },
          { q: "Spezialwissen Niere: Über welche zwei Wege bildet die Niere neues Bicarbonat?", a: "Ausscheidung titrierbarer Säure (v.a. H₂PO₄⁻) und Ammoniumausscheidung (NH₄⁺ aus Glutamin, der anpassungsfähige Weg)." },
          { q: "Spezialwissen Niere: Wie wird die Netto-Säureausscheidung berechnet?", a: "NH₄⁺ + titrierbare Säure − ausgeschiedenes HCO₃⁻." },
          { q: "Spezialwissen Niere: Was zeigt eine negative bzw. positive Urin-Anionenlücke?", a: "Urin-AL = Na⁺ + K⁺ − Cl⁻. Negativ: hohe NH₄⁺(Cl)-Ausscheidung, renale Antwort intakt (z.B. Diarrhö). Positiv: gestörte NH₄⁺-Ausscheidung (z.B. distale RTA, Niereninsuffizienz)." },
          { q: "Spezialwissen Niere: Wie unterscheiden sich die renal-tubulären Azidosen Typ 1, 2 und 4?", a: "Typ 1 (distal): H⁺-Sekretion gestört, Urin-pH > 5,5, Hypokaliämie. Typ 2 (proximal): HCO₃⁻-Verlust, Urin-pH < 5,5 bei niedrigem Plasma-HCO₃⁻, Hypokaliämie. Typ 4: Hypoaldosteronismus/-resistenz, Hyperkaliämie, NH₄⁺-Bildung ↓." },
          { q: "Spezialwissen Niere: Welche Faktoren halten eine metabolische Alkalose aufrecht?", a: "Volumen- und Chloridmangel, Hypokaliämie und Aldosteron; chloridsensitive Formen (Urin-Cl⁻ < ca. 20 mmol/l) bessern sich durch NaCl/KCl." },
          { q: "Spezialwissen Niere: Wie lange dauert die renale Kompensation einer respiratorischen Störung?", a: "Etwa 3–5 Tage." }
        ]
      },
      {
        id: "aki",
        level: "Klinik",
        title: "Die Niere perioperativ – akute Nierenschädigung und Pharmakologie",
        leitfrage: "Wie entsteht eine perioperative akute Nierenschädigung, warum erkennt man sie so spät – und welche Narkosemedikamente muss man anpassen?",
        body: [
          { h: "Definition (KDIGO 2012)" },
          "AKI liegt vor bei einem Kreatininanstieg um **≥ 0,3 mg/dl innerhalb von 48 h**, auf das **≥ 1,5-Fache** des Ausgangswerts innerhalb von 7 Tagen oder bei einer Urinausscheidung **< 0,5 ml/kg/h über 6 h**. Stadien 1–3 nach Ausmaß des Kreatininanstiegs bzw. Dauer und Ausmaß der Oligurie; Stadium 3 auch bei Beginn einer Nierenersatztherapie.",
          { h: "Warum Kreatinin ein später Marker ist" },
          { ul: [
            "Kreatinin steigt erst nach Stunden bis Tagen an, bis sich ein neuer Steady State einstellt.",
            "Bei guter Nierenreserve steigt es oft erst, wenn ein erheblicher Teil der GFR verloren ist.",
            "Volumengabe verdünnt es, geringe Muskelmasse senkt den Ausgangswert.",
            "**Biomarker** für Tubulusstress (z.B. TIMP-2 × IGFBP7) können früher anschlagen. In der PrevAKI-Studie senkte ein biomarkergesteuertes KDIGO-Maßnahmenbündel nach Herzchirurgie die AKI-Rate (Meersch et al. 2017)."
          ] },
          { h: "Pathophysiologie perioperativ" },
          { table: { head: ["Mechanismus", "Beispiele"], rows: [
            ["Hypoperfusion/Ischämie", "Hypotonie, Hypovolämie, niedriges HZV, Aortenklemmung → Schädigung von mTAL und S3-Segment"],
            ["Entzündung/Sepsis", "Mikrozirkulationsstörung und Tubulusstress, auch bei normalem oder erhöhtem globalem Nierenfluss"],
            ["Venöse Stauung", "Hoher ZVD, Volumenüberladung, Rechtsherzinsuffizienz"],
            ["Intraabdominelle Hypertension", "≥ 12 mmHg; abdominelles Kompartmentsyndrom > 20 mmHg mit neuem Organversagen"],
            ["Nephrotoxine", "Kontrastmittel, Aminoglykoside, Vancomycin (v.a. mit Piperacillin/Tazobactam), NSAR, Calcineurin-Inhibitoren, HES"],
            ["Pigmente", "Myoglobin (Rhabdomyolyse), freies Hämoglobin (Hämolyse, Herz-Lungen-Maschine)"],
            ["Postrenal", "Obstruktion (Katheter, Prostata, Ureterverletzung)"]
          ] } },
          { h: "Was schützt die Niere – und was nicht" },
          { ul: [
            "**Blutdruck halten:** MAP ≥ ca. 65 mmHg bzw. individualisiert am Ausgangswert.",
            "**Euvolämie:** Hypovolämie und Volumenüberladung vermeiden; dynamische Parameter nutzen.",
            "**Balancierte Kristalloide** statt großer Mengen NaCl 0,9 % (SMART 2018); **keine Hydroxyethylstärke** – die EU-Zulassungen wurden 2022 auf Empfehlung der EMA ausgesetzt.",
            "**Nephrotoxine vermeiden**, Dosierungen anpassen, Blutzucker kontrollieren.",
            "**Nicht wirksam zur Prävention:** Schleifendiuretika, niedrig dosiertes Dopamin, Fenoldopam (KDIGO)."
          ] },
          { h: "Pharmakologie bei Niereninsuffizienz" },
          { table: { head: ["Substanz", "Problem", "Konsequenz"], rows: [
            ["Morphin", "Aktive Metaboliten M6G (Atemdepression) und M3G (Neuroexzitation) kumulieren", "Meiden bzw. stark reduzieren; Alternativen z.B. Fentanyl, Hydromorphon (vorsichtig)"],
            ["Pethidin", "Norpethidin kumuliert → Krampfanfälle", "Vermeiden"],
            ["Gabapentin, Pregabalin", "Renale Elimination → Sedierung, Atemdepression", "Dosis an Clearance anpassen"],
            ["Niedermolekulare Heparine", "Renale Elimination → Blutungsrisiko", "Bei CrCl < 30 ml/min Dosis reduzieren bzw. Anti-Xa-Spiegel, ggf. UFH"],
            ["Sugammadex", "Sugammadex-Rocuronium-Komplex wird renal eliminiert", "Bei CrCl < 30 ml/min nicht empfohlen"],
            ["Rocuronium, Vecuronium", "Etwas verlängerte Wirkung", "Neuromuskuläres Monitoring"],
            ["Cisatracurium, Remifentanil", "Organunabhängiger Abbau (Hofmann-Elimination bzw. Esterasen)", "Geeignet"],
            ["Succinylcholin", "K⁺-Anstieg ca. 0,5 mmol/l wie bei Nierengesunden", "Bei normalem K⁺ einsetzbar, bei Hyperkaliämie nicht"],
            ["Metformin", "Kumulation → Laktatazidose", "Nach Leitlinie pausieren"]
          ] } },
          "Urämie verändert zusätzlich die **Proteinbindung** (höhere freie Fraktion saurer Pharmaka, z.B. Phenytoin) und verursacht eine **Thrombozytenfunktionsstörung**. Desmopressin verbessert sie kurzfristig. Dialysepatienten werden idealerweise am Vortag dialysiert. Vor dem Eingriff Kalium, Volumenstatus und Shuntarm (keine Manschette, keine Punktion) beachten."
        ],
        merke: [
          "KDIGO: Kreatinin +0,3 mg/dl in 48 h, ≥ 1,5× in 7 Tagen oder Urin < 0,5 ml/kg/h über 6 h.",
          "Kreatinin = später, verdünnbarer Marker; eGFR nur im Steady State.",
          "Mechanismen: Hypoperfusion, Entzündung, venöse Stauung, IAH, Nephrotoxine, Pigmente.",
          "Prävention: MAP, Euvolämie, balancierte Kristalloide, keine HES, Nephrotoxine meiden; Diuretika/Dopamin wirkungslos.",
          "Meiden: Morphin, Pethidin; anpassen: Gabapentinoide, NMH, Sugammadex (CrCl < 30); geeignet: Cisatracurium, Remifentanil."
        ],
        warum: [
          { q: "Warum kann ein septischer Patient eine AKI entwickeln, obwohl sein globaler Nierenblutfluss normal oder sogar erhöht ist?", a: "Bei Sepsis stehen Mikrozirkulationsstörungen (heterogene Perfusion, Shunts), Entzündungsmediatoren und metabolischer Tubulusstress im Vordergrund – nicht nur der globale Fluss. Zusätzlich kann die intrarenale Verteilung (Rinde vs. Mark) gestört sein. Die Tubuluszellen werden geschädigt, obwohl die Gesamtdurchblutung normal erscheint." },
          { q: "Warum ist Morphin bei Niereninsuffizienz problematischer als Fentanyl?", a: "Morphin wird hepatisch zu den aktiven Glucuroniden M6G (stark μ-agonistisch) und M3G (neuroexzitatorisch) metabolisiert, die renal ausgeschieden werden und bei Niereninsuffizienz kumulieren – verzögerte, langanhaltende Atemdepression. Fentanyl wird hepatisch zu inaktiven Metaboliten abgebaut und kumuliert renal kaum." }
        ],
        klinik: [
          "Risikopatienten (CKD, Diabetes, Herzinsuffizienz, große Gefäß- und Herzchirurgie): Nephrotoxine pausieren, MAP individualisiert halten, balancierte Lösungen, Kreatinin und Diurese postoperativ überwachen.",
          "Rhabdomyolyse: frühe aggressive Volumengabe, K⁺ und CK kontrollieren.",
          "Postoperative Analgesie bei Niereninsuffizienz: Regionalanästhesie, Paracetamol, Opioide ohne aktive renal eliminierte Metaboliten, keine NSAR."
        ],
        selbsttest: [
          { q: "Spezialwissen Niere: Wie definiert KDIGO eine akute Nierenschädigung?", a: "Kreatininanstieg ≥ 0,3 mg/dl innerhalb 48 h, auf ≥ 1,5-fachen Ausgangswert innerhalb 7 Tagen oder Urinausscheidung < 0,5 ml/kg/h über 6 h." },
          { q: "Spezialwissen Niere: Warum ist Serumkreatinin ein später Marker einer AKI?", a: "Anstieg erst nach Stunden bis Tagen bis zum neuen Steady State, oft erst nach erheblichem GFR-Verlust, Verdünnung durch Volumengabe, Abhängigkeit von der Muskelmasse." },
          { q: "Spezialwissen Niere: Welche Mechanismen führen perioperativ zu einer akuten Nierenschädigung?", a: "Hypoperfusion/Ischämie, Entzündung/Sepsis, venöse Stauung, intraabdominelle Hypertension, Nephrotoxine (Kontrastmittel, Aminoglykoside, NSAR, HES), Pigmente (Myoglobin, Hämoglobin) und Obstruktion." },
          { q: "Spezialwissen Niere: Welche Maßnahmen schützen die Niere perioperativ und welche sind unwirksam?", a: "Schützend: MAP ≥ ca. 65 mmHg bzw. individualisiert, Euvolämie, balancierte Kristalloide, keine HES, Nephrotoxine meiden, Blutzuckerkontrolle. Unwirksam zur Prävention: Schleifendiuretika, niedrig dosiertes Dopamin, Fenoldopam." },
          { q: "Spezialwissen Niere: Warum ist Morphin bei Niereninsuffizienz problematisch?", a: "Die aktiven Metaboliten M6G (Atemdepression) und M3G (Neuroexzitation) werden renal eliminiert und kumulieren." },
          { q: "Spezialwissen Niere: Welche Muskelrelaxanzien bzw. Antagonisten sind bei schwerer Niereninsuffizienz problematisch oder geeignet?", a: "Geeignet: Cisatracurium (Hofmann-Elimination). Rocuronium/Vecuronium wirken etwas länger (Monitoring). Sugammadex wird bei CrCl < 30 ml/min nicht empfohlen, da der Komplex renal eliminiert wird. Succinylcholin bei normalem K⁺ einsetzbar." },
          { q: "Spezialwissen Niere: Was zeigte die SMART-Studie?", a: "Balancierte Kristalloide statt NaCl 0,9 % senkten bei kritisch Kranken den kombinierten Endpunkt aus Tod, Nierenersatztherapie und persistierender Nierenfunktionsstörung innerhalb von 30 Tagen (Semler et al. 2018)." }
        ]
      }
    ],
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
      "Kellum JA, Romagnani P, Ashuntantang G, et al. Acute kidney injury. Nat Rev Dis Primers 2021;7:52.",
      "Lehrbücher: Eaton DC, Pooler JP. Vander's Renal Physiology, 9. Aufl. 2018; Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017."
    ]
  });
})();
