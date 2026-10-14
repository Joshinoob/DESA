// Spezialwissen Blut & Gerinnung – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const CH = [];

  CH.push({
    id: "sauerstofftransport",
    level: "Zelle",
    title: "Erythrozyt, Hämoglobin und Sauerstofftransport",
    leitfrage: "Warum reicht ein Hämoglobin von 7 g/dl beim Gesunden in Ruhe aus – und warum kann eine normale Sättigung trotzdem eine schwere Hypoxie verbergen?",
    einfach: "Rote Blutkörperchen sind kleine Säckchen voller Hämoglobin. Jedes Hämoglobin-Molekül kann vier Sauerstoffteilchen tragen. Wie viel Sauerstoff tatsächlich im Gewebe ankommt, hängt davon ab, wie viel Hämoglobin da ist, wie gut es beladen ist und wie viel Blut das Herz pumpt. Kohlenmonoxid und Methämoglobin blockieren das Hämoglobin, das Pulsoxymeter merkt das aber nicht richtig.",
    body: [
      { h: "Der Erythrozyt" },
      "Kernlos, bikonkav, ca. 7–8 µm, sehr verformbar (passiert 3 µm enge Kapillaren); Lebensdauer ca. **120 Tage**. Ohne Mitochondrien gewinnt er Energie nur aus **Glykolyse** – ein Nebenweg bildet **2,3-Bisphosphoglycerat (2,3-BPG)**.",
      { h: "Sauerstoffgehalt und -angebot" },
      { formel: "CaO₂ = (1,34 × Hb × SaO₂) + (0,003 × PaO₂)", erkl: "CaO₂ in ml O₂/dl; Hb in g/dl; SaO₂ als Anteil (0–1); PaO₂ in mmHg. 1,34 = Hüfner-Zahl (in Lehrbüchern 1,34–1,39). Normal ca. 20 ml/dl." },
      { formel: "DO₂ = HZV × CaO₂ × 10", erkl: "Sauerstoffangebot in ml/min (normal ca. 1000 ml/min); Verbrauch VO₂ ca. 250 ml/min → Ausschöpfung ca. 25 %." },
      "==Physikalisch gelöster Sauerstoff spielt normalerweise kaum eine Rolle (0,3 ml/dl bei PaO₂ 100 mmHg) – erst bei sehr hohem PaO₂ (hyperbare Therapie) wird er relevant.==",
      { h: "Sauerstoffbindungskurve" },
      "S-förmig durch **Kooperativität**: Bindet ein O₂, steigt die Affinität der übrigen Bindungsstellen. **P50** (PaO₂ bei 50 % Sättigung) normal ca. **26–27 mmHg**.",
      { table: { head: ["Rechtsverschiebung (O₂-Abgabe ↑)", "Linksverschiebung (O₂-Bindung ↑, Abgabe ↓)"], rows: [
        ["Azidose (Bohr-Effekt), Hyperkapnie", "Alkalose, Hypokapnie"],
        ["Temperatur ↑", "Hypothermie"],
        ["2,3-BPG ↑ (Anämie, Höhe)", "2,3-BPG ↓ (gelagerte Erythrozytenkonzentrate)"],
        ["Schwangerschaft (mütterlich)", "Fetales Hämoglobin, CO-Hb, Met-Hb"]
      ] } },
      { h: "Dyshämoglobine" },
      { ul: [
        "**CO-Hämoglobin**: CO bindet ca. 200–250-mal stärker als O₂, verschiebt die Kurve nach links. Pulsoxymeter zeigt falsch hohe Werte. Therapie 100 % O₂ (Halbwertszeit COHb ca. 4–6 h an Raumluft, ca. 60–90 min unter 100 % O₂), ggf. hyperbar.",
        "**Methämoglobin** (Fe³⁺ statt Fe²⁺, bindet kein O₂): durch Prilocain (o-Toluidin), Nitrate, Dapson, Benzocain. Pulsoxymeter tendiert gegen ca. 85 %. Therapie: Methylenblau 1–2 mg/kg i.v. (nicht bei G6PD-Mangel)."
      ] },
      { h: "Anämietoleranz" },
      { kette: [
        "Hb sinkt (Normovolämie vorausgesetzt)",
        "Blutviskosität ↓ → venöser Rückstrom und HZV ↑",
        "Sauerstoffausschöpfung im Gewebe ↑ (Kurve rechtsverschoben durch 2,3-BPG)",
        "Umverteilung zu Herz und Gehirn",
        "Grenze erreicht, wenn das Herz selbst (hohe Grundausschöpfung ca. 70 %) nicht mehr genug O₂ bekommt"
      ], titel: "Kompensation der Anämie" }
    ],
    merke: [
      "CaO₂ = 1,34 × Hb × SaO₂ + 0,003 × PaO₂ (normal ca. 20 ml/dl).",
      "DO₂ = HZV × CaO₂ × 10 (ca. 1000 ml/min); VO₂ ca. 250 ml/min.",
      "P50 ca. 26–27 mmHg; Azidose, Wärme, 2,3-BPG → rechts.",
      "CO-Hb: Pulsoxymeter falsch hoch; Met-Hb: gegen 85 %, Methylenblau.",
      "Anämie wird über HZV-Anstieg und mehr Ausschöpfung kompensiert; das Herz ist limitierend."
    ],
    warum: [
      { q: "Warum ist das Herz bei Anämie das kritische Organ?", a: "Das Myokard schöpft schon in Ruhe ca. 70 % des Sauerstoffs aus; es kann eine sinkende Sauerstoffmenge kaum durch mehr Ausschöpfung kompensieren, sondern nur durch mehr Koronarfluss. Bei Koronarstenosen ist diese Reserve eingeschränkt." },
      { q: "Warum schadet CO doppelt?", a: "Es besetzt Bindungsstellen (weniger Transportkapazität) und verschiebt die Kurve nach links – das restliche O₂ wird schlechter ans Gewebe abgegeben. Zusätzlich hemmt CO die mitochondriale Atmungskette." }
    ],
    klinik: [
      "Restriktive Transfusion (Hb-Schwelle ca. 7 g/dl) ist bei den meisten stabilen Patienten sicher; höhere Schwellen u.a. bei akutem Koronarsyndrom.",
      "Prilocain-Höchstdosis beachten (Methämoglobinämie), besonders bei Säuglingen.",
      "Gelagerte Erythrozytenkonzentrate haben wenig 2,3-BPG – es regeneriert sich nach Transfusion innerhalb von Stunden bis Tagen."
    ],
    selbsttest: [
      { q: "Spezialwissen Blut: Formel für den arteriellen Sauerstoffgehalt und Normalwert?", a: "CaO2 = 1,34 × Hb × SaO2 + 0,003 × PaO2; normal ca. 20 ml O2/dl." },
      { q: "Spezialwissen Blut: Was verschiebt die O2-Bindungskurve nach rechts?", a: "Azidose (Bohr), Hyperkapnie, Temperatur ↑, 2,3-BPG ↑ (Anämie, Höhe)." },
      { q: "Spezialwissen Blut: Normaler P50-Wert?", a: "Ca. 26–27 mmHg." },
      { q: "Spezialwissen Blut: Wie zeigt sich eine Methämoglobinämie im Pulsoxymeter, und was ist die Therapie?", a: "SpO2 tendiert gegen ca. 85 % unabhängig vom echten Wert; Therapie Methylenblau 1–2 mg/kg i.v. (nicht bei G6PD-Mangel), Auslöser absetzen (z.B. Prilocain)." },
      { q: "Spezialwissen Blut: Wie kompensiert der Körper eine normovoläme Anämie?", a: "HZV-Anstieg (Viskosität ↓), erhöhte O2-Ausschöpfung (2,3-BPG, Rechtsverschiebung), Umverteilung zu Herz und Gehirn." },
      { q: "Spezialwissen Blut: Halbwertszeit von CO-Hb an Raumluft und unter 100 % O2?", a: "Ca. 4–6 h an Raumluft, ca. 60–90 min unter 100 % O2; hyperbar noch kürzer." }
    ]
  });

  CH.push({
    id: "haemostase",
    level: "System",
    title: "Hämostase: Thrombozyten, zellbasierte Gerinnung und Fibrinolyse",
    leitfrage: "Warum stimmt die klassische 'Kaskade' aus intrinsischem und extrinsischem System im Körper so nicht – und warum ist sie trotzdem für die Laborwerte nützlich?",
    einfach: "Bei einer Verletzung bilden Blutplättchen zuerst einen lockeren Pfropf. Dann sorgt die Gerinnung dafür, dass ein festes Netz aus Fibrin entsteht. Das passiert auf der Oberfläche von Zellen in drei Schritten: Ein kleiner Startfunke, eine Verstärkung auf den Blutplättchen und dann eine Explosion der Thrombinbildung. Gegenspieler sorgen dafür, dass die Gerinnung auf den Ort der Verletzung begrenzt bleibt, und die Fibrinolyse löst das Gerinnsel später wieder auf.",
    body: [
      { h: "Primäre Hämostase" },
      { kette: [
        "Gefäßverletzung → Vasokonstriktion, Kollagen liegt frei",
        "Adhäsion: von-Willebrand-Faktor verbindet Kollagen mit Plättchen-GPIb (bei hoher Scherrate entscheidend)",
        "Aktivierung: Formwandel, Freisetzung von ADP, Thromboxan A₂, Serotonin; negativ geladene Phospholipide nach außen",
        "Aggregation: GPIIb/IIIa wird aktiv, Fibrinogen vernetzt Plättchen"
      ], titel: "Plättchenpfropf" },
      "Angriffspunkte: **ASS** (hemmt Cyclooxygenase-1 irreversibel → kein Thromboxan, Wirkung für die Lebensdauer der Plättchen, ca. 7–10 Tage), **P2Y12-Hemmer** (Clopidogrel, Prasugrel, Ticagrelor – ADP-Rezeptor), **GPIIb/IIIa-Antagonisten** (Tirofiban, Eptifibatid).",
      { h: "Zellbasiertes Modell der Gerinnung" },
      { table: { head: ["Phase", "Ort", "Was passiert"], rows: [
        ["Initiation", "Tissue-Factor-tragende Zellen (Fibroblasten, Monozyten)", "TF + Faktor VIIa aktiviert X und IX → kleine Menge Thrombin"],
        ["Amplifikation", "Thrombozytenoberfläche", "Thrombin aktiviert Plättchen und Faktoren V, VIII, XI; vWF gibt Faktor VIII frei"],
        ["Propagation", "Aktivierte Thrombozyten", "Tenase (IXa + VIIIa) und Prothrombinase (Xa + Va) → Thrombin-'Burst' → Fibrin"]
      ] } },
      "Calcium (Faktor IV) ist für mehrere Schritte nötig. ==Faktor XIII vernetzt das Fibrin am Ende quer und macht das Gerinnsel stabil.== Die Laborkaskade (Quick = extrinsisch + gemeinsam, aPTT = intrinsisch + gemeinsam) beschreibt Reagenzglas-Bedingungen ohne Zellen – nützlich für Tests, aber nicht für die Physiologie: Faktor-XII-Mangel verlängert die aPTT stark, verursacht aber keine Blutungen.",
      { h: "Natürliche Gerinnungshemmer" },
      { ul: [
        "**Antithrombin**: hemmt Thrombin, Xa (und andere) – Heparin beschleunigt dies ca. 1000-fach.",
        "**Protein C/S**: Thrombin + Thrombomodulin aktivieren Protein C → baut Va und VIIIa ab (Faktor-V-Leiden ist resistent → Thromboseneigung).",
        "**TFPI**: bremst die Initiation (TF-VIIa-Xa).",
        "**Endothel**: NO und Prostacyclin hemmen Plättchen, Glykokalyx wirkt antikoagulatorisch."
      ] },
      { h: "Fibrinolyse" },
      { kette: [
        "Endothel setzt tPA frei (u.a. bei Ischämie, Stress, Trauma, Operation)",
        "tPA wandelt an Fibrin gebundenes Plasminogen in Plasmin um",
        "Plasmin spaltet Fibrin → D-Dimere",
        "Bremsen: PAI-1, α₂-Antiplasmin, TAFI"
      ], titel: "Auflösung des Gerinnsels" },
      "**Tranexamsäure** blockiert die Lysin-Bindungsstellen des Plasminogens – es kann nicht mehr an Fibrin binden. Trauma kann zu überschießender Fibrinolyse führen (Hyperfibrinolyse), später zu einem 'Fibrinolyse-Shutdown'."
    ],
    merke: [
      "Primär: vWF–GPIb (Adhäsion), GPIIb/IIIa–Fibrinogen (Aggregation).",
      "Zellbasiert: Initiation (TF-VIIa) → Amplifikation (Plättchen) → Propagation (Thrombin-Burst).",
      "Faktor XIII stabilisiert Fibrin.",
      "Hemmer: Antithrombin (Heparin-Ziel), Protein C/S, TFPI.",
      "Tranexamsäure blockiert die Plasminogen-Bindung an Fibrin."
    ],
    warum: [
      { q: "Warum blutet ein Patient mit Faktor-XII-Mangel nicht, obwohl die aPTT extrem verlängert ist?", a: "Im Körper startet die Gerinnung über Tissue Factor und Faktor VII; Faktor XII ist für die Hämostase entbehrlich. Die aPTT aktiviert dagegen künstlich den Kontaktweg, der von Faktor XII abhängt." },
      { q: "Warum wirkt ASS über Tage, obwohl es eine kurze Halbwertszeit hat?", a: "Es hemmt die Cyclooxygenase der Thrombozyten irreversibel. Thrombozyten haben keinen Zellkern und können kein neues Enzym bilden – die Wirkung endet erst, wenn neue Plättchen nachgebildet sind (ca. 10 % pro Tag)." }
    ],
    klinik: [
      "Hypothermie, Azidose und Hypokalzämie bremsen die Enzymreaktionen der Gerinnung – Teil der 'letalen Trias' bei Massivblutung.",
      "Antithrombinmangel kann eine Heparinresistenz verursachen (z.B. vor Herz-Lungen-Maschine).",
      "Faktor-V-Leiden ist die häufigste erbliche Thrombophilie (APC-Resistenz)."
    ],
    selbsttest: [
      { q: "Spezialwissen Blut: Welche Rezeptoren vermitteln Thrombozytenadhäsion und -aggregation?", a: "Adhäsion: GPIb bindet vWF (an Kollagen); Aggregation: aktivierter GPIIb/IIIa bindet Fibrinogen." },
      { q: "Spezialwissen Blut: Nenne die drei Phasen des zellbasierten Gerinnungsmodells.", a: "Initiation (TF-tragende Zellen, TF-VIIa → wenig Thrombin), Amplifikation (Thrombozytenaktivierung, Aktivierung von V, VIII, XI), Propagation (Tenase/Prothrombinase auf Plättchen → Thrombin-Burst)." },
      { q: "Spezialwissen Blut: Welche natürlichen Gerinnungshemmer gibt es?", a: "Antithrombin, Protein C/S (mit Thrombomodulin), TFPI; Endothel mit NO, Prostacyclin und Glykokalyx." },
      { q: "Spezialwissen Blut: Wie wirkt Tranexamsäure?", a: "Sie blockiert die Lysin-Bindungsstellen von Plasminogen, sodass es nicht an Fibrin binden und nicht zu Plasmin aktiviert werden kann." },
      { q: "Spezialwissen Blut: Welche Aufgabe hat Faktor XIII?", a: "Er vernetzt Fibrin kovalent und stabilisiert so das Gerinnsel (Mangel: Nachblutungen bei normalen Standardtests)." }
    ]
  });

  CH.push({
    id: "gerinnungstests",
    level: "Klinik",
    title: "Gerinnungstests und viskoelastische Diagnostik",
    leitfrage: "Warum dauert ein Quick-Wert im Notfall zu lange und sagt dabei oft das Falsche – und was zeigt ein ROTEM in 10 Minuten?",
    einfach: "Die Standardtests messen im Reagenzglas mit Plasma, wie lange es dauert, bis sich die erste Fibrinfaser bildet. Das sagt wenig über die Festigkeit des Gerinnsels und gar nichts über Blutplättchen oder Auflösung. Viskoelastische Tests messen dagegen im Vollblut, wie schnell, wie fest und wie lange stabil ein Gerinnsel wird – und das direkt am OP-Tisch.",
    body: [
      { h: "Standardtests" },
      { table: { head: ["Test", "Erfasst", "Typisch verändert durch"], rows: [
        ["Quick/INR (Prothrombinzeit)", "VII, X, V, II, Fibrinogen", "Vitamin-K-Antagonisten, Leberinsuffizienz, Faktor-VII-Mangel, (Xa-Hemmer, reagenzabhängig)"],
        ["aPTT", "XII, XI, IX, VIII, X, V, II, Fibrinogen", "Unfraktioniertes Heparin, Hämophilie, Lupusantikoagulans, Dabigatran"],
        ["Thrombinzeit", "Fibrinogen → Fibrin", "Heparin, Dabigatran (sehr empfindlich), Fibrinogenmangel"],
        ["Fibrinogen (Clauss)", "Fibrinogen-Konzentration", "Verdünnung, Verbrauch, Hyperfibrinolyse; Normwert ca. 2–4 g/l"],
        ["Anti-Xa-Aktivität", "Heparine, Xa-Hemmer (substanzspezifisch kalibriert)", "Niedermolekulare Heparine, Rivaroxaban, Apixaban, Edoxaban"]
      ] } },
      "Grenzen: Messung im **Plasma bei 37 °C** (Hypothermie wird nicht erfasst), **Endpunkt = erste Fibrinbildung** (nur ca. 5 % des Thrombins), keine Aussage über Thrombozytenfunktion, Gerinnselfestigkeit oder Fibrinolyse, Laufzeit oft 30–60 min.",
      { h: "Viskoelastische Tests (ROTEM/TEG)" },
      { table: { head: ["Parameter (ROTEM)", "Bedeutung", "Verlängert/vermindert → Therapie (vereinfacht)"], rows: [
        ["CT (Clotting Time)", "Zeit bis Gerinnungsbeginn", "EXTEM-CT ↑ → Faktorenmangel → PPSB/Plasma; INTEM-CT ↑ mit HEPTEM normal → Heparin → Protamin"],
        ["A5/A10, MCF (Gerinnselfestigkeit)", "Festigkeit aus Thrombozyten + Fibrin", "FIBTEM-A5/MCF niedrig → Fibrinogen; EXTEM niedrig bei normalem FIBTEM → Thrombozyten"],
        ["ML/LI (Lyse)", "Auflösung", "Lyse ↑ (APTEM korrigiert) → Tranexamsäure"]
      ] } },
      "FIBTEM hemmt die Thrombozyten (Cytochalasin D) – übrig bleibt nur der Fibrinanteil. ==Die Differenz zwischen EXTEM- und FIBTEM-Festigkeit schätzt den Beitrag der Thrombozyten.== Grenzwerte sind gerätespezifisch und stammen aus Algorithmen der jeweiligen Zentren.",
      { h: "Thrombozytenfunktion" },
      "Aggregometrie (z.B. Multiplate, Impedanz) erfasst die Wirkung von ASS (Arachidonsäure-Test) und P2Y12-Hemmern (ADP-Test). Viskoelastische Standardtests zeigen ASS-/Clopidogrel-Effekte **nicht**, weil die starke Thrombinbildung im Test die Plättchen trotzdem aktiviert.",
      { h: "Zielorientiertes Gerinnungsmanagement" },
      { ul: [
        "Basisbedingungen herstellen: Temperatur >35 °C, pH >7,2, ionisiertes Calcium >1,0–1,15 mmol/l (je nach Leitlinie), Hb angemessen.",
        "Hyperfibrinolyse → Tranexamsäure.",
        "Fibrinogen <1,5–2 g/l bei Blutung (bzw. FIBTEM erniedrigt) → Fibrinogenkonzentrat (ca. 25–50 mg/kg).",
        "Thrombozyten <50/nl (bei Hirn-/Rückenmarksblutung <100/nl) → Konzentrat.",
        "Verlängerte Gerinnungszeit trotz ausreichendem Fibrinogen → PPSB oder Plasma.",
        "Desmopressin bei Plättchenfunktionsstörung (Urämie, vWS Typ 1, ASS)."
      ] }
    ],
    merke: [
      "Quick: VII, X, V, II, Fibrinogen; aPTT: XII, XI, IX, VIII + gemeinsamer Weg.",
      "Standardtests: Plasma, 37 °C, nur Gerinnungsbeginn, keine Plättchen/Fibrinolyse.",
      "ROTEM: CT (Faktoren/Heparin), MCF/A5 (Festigkeit), ML (Lyse); FIBTEM = Fibrinanteil.",
      "ASS/P2Y12-Hemmer nur mit Aggregometrie erkennbar.",
      "Basis: Temperatur, pH, Calcium; dann gezielt Fibrinogen, Plättchen, Faktoren, Tranexamsäure."
    ],
    warum: [
      { q: "Warum kann ein normaler Quick-Wert bei einem unterkühlten, blutenden Patienten täuschen?", a: "Das Labor wärmt die Probe auf 37 °C; die durch Kälte verlangsamten Enzymreaktionen im Patienten werden so nicht erfasst. Ähnliches gilt für Azidose." },
      { q: "Warum sieht man den ASS-Effekt im EXTEM nicht?", a: "Im Test entsteht durch Tissue Factor sehr viel Thrombin; Thrombin aktiviert Plättchen auch ohne Thromboxan maximal. Die ASS-Hemmung des Thromboxanwegs wird dadurch überspielt." }
    ],
    klinik: [
      "Viskoelastisch gesteuerte Gerinnungstherapie reduziert Transfusionen in Herzchirurgie und Trauma.",
      "DOAK-Spiegel: substanzspezifische Anti-Xa- bzw. Dabigatran-Tests; Standard-Tests nur orientierend.",
      "Heparin in der Probe (z.B. aus arteriellem Katheter) verfälscht aPTT und INTEM – HEPTEM zum Vergleich."
    ],
    selbsttest: [
      { q: "Spezialwissen Blut: Welche Faktoren erfasst der Quick-Wert, welche die aPTT?", a: "Quick: VII, X, V, II, Fibrinogen. aPTT: XII, XI, IX, VIII, X, V, II, Fibrinogen." },
      { q: "Spezialwissen Blut: Nenne drei Grenzen der Standard-Gerinnungstests.", a: "Messung im Plasma bei 37 °C (Hypothermie unerkannt), nur Zeit bis zur ersten Fibrinbildung, keine Aussage zu Plättchenfunktion, Gerinnselfestigkeit und Fibrinolyse; lange Laufzeit." },
      { q: "Spezialwissen Blut: Was zeigen CT, MCF und ML im ROTEM?", a: "CT: Zeit bis Gerinnungsbeginn (Faktoren/Heparin). MCF: maximale Gerinnselfestigkeit (Plättchen + Fibrin). ML: maximale Lyse (Fibrinolyse)." },
      { q: "Spezialwissen Blut: Was misst FIBTEM und wozu dient der Vergleich mit EXTEM?", a: "FIBTEM hemmt Thrombozyten und zeigt den Fibrinbeitrag; die Differenz zu EXTEM schätzt den Thrombozytenanteil an der Gerinnselfestigkeit." },
      { q: "Spezialwissen Blut: Welche Basisbedingungen der Gerinnung sollten vor gezielter Faktorgabe hergestellt werden?", a: "Temperatur >35 °C, pH >7,2, ionisiertes Calcium >1,0–1,15 mmol/l, angemessener Hb." }
    ]
  });

  CH.push({
    id: "transfusion",
    level: "Klinik",
    title: "Blutgruppen, Transfusion und Transfusionsreaktionen",
    leitfrage: "Warum ist eine AB0-Verwechslung lebensgefährlich, eine Rhesus-Unverträglichkeit beim ersten Mal aber meist nicht?",
    einfach: "Jeder Mensch hat von Geburt an Antikörper gegen die Blutgruppen-Merkmale A oder B, die er selbst nicht trägt. Bekommt er falsches Blut, zerstören diese Antikörper die fremden Zellen sofort. Gegen Rhesus bildet man Antikörper erst, nachdem man einmal Kontakt hatte. Deshalb sind Identitätsprüfung und Bedside-Test so wichtig.",
    body: [
      { h: "AB0 und Rhesus" },
      { table: { head: ["Blutgruppe", "Antigene auf Erythrozyten", "Antikörper im Plasma", "Erhält Erythrozyten von", "Erhält Plasma von"], rows: [
        ["0", "keine", "Anti-A, Anti-B", "0", "0, A, B, AB"],
        ["A", "A", "Anti-B", "A, 0", "A, AB"],
        ["B", "B", "Anti-A", "B, 0", "B, AB"],
        ["AB", "A und B", "keine", "AB, A, B, 0", "AB"]
      ] } },
      "AB0-Antikörper sind überwiegend **IgM**, 'natürlich' (ohne Vorkontakt gebildet), komplementaktivierend → **intravasale Hämolyse**. Rhesus-Antikörper (Anti-D) sind **IgG** und entstehen erst nach Sensibilisierung (Transfusion, Schwangerschaft) → verzögerte, meist extravasale Hämolyse; gefährlich für Feten (Morbus haemolyticus neonatorum). ==Plasma: AB ist 'Universalspender', bei Erythrozyten ist es 0 Rh negativ.==",
      { h: "Sicherheitskette" },
      { ul: [
        "Blutgruppenbestimmung und Antikörpersuchtest; Kreuzprobe (Verträglichkeitstest Spender-Erythrozyten gegen Empfängerserum).",
        "Am Bett: Identitätssicherung des Patienten und **AB0-Identitätstest (Bedside-Test)** durch den transfundierenden Arzt bzw. unter seiner Aufsicht – vor jeder Erythrozytentransfusion.",
        "Dokumentation (Chargen, Rückverfolgbarkeit) nach Transfusionsgesetz und Hämotherapie-Richtlinie."
      ] },
      { h: "Transfusionsreaktionen" },
      { table: { head: ["Reaktion", "Kern", "Vorgehen"], rows: [
        ["Akute hämolytische (meist AB0-Fehler)", "Fieber, Schüttelfrost, Hypotonie, Hämoglobinurie, DIC; in Narkose oft nur Hypotonie und Blutung", "Sofort stoppen, Kreislauf stützen, Diurese, Labor/Blutbank, Konserven prüfen"],
        ["Febrile nicht-hämolytische", "Zytokine aus Leukozyten; seit Leukozytendepletion seltener", "Stoppen, Hämolyse/Infektion ausschließen, Antipyretika"],
        ["Allergisch/anaphylaktisch", "Urtikaria bis Anaphylaxie (z.B. IgA-Mangel mit Anti-IgA)", "Stoppen, Anaphylaxie-Therapie"],
        ["TRALI", "Lungenödem (nicht kardial) innerhalb 6 h, oft durch Spender-Antikörper gegen Leukozyten", "Supportiv, lungenprotektive Beatmung; keine Diuretika-Therapie als Hauptmaßnahme"],
        ["TACO", "Volumenüberladung, kardiales Lungenödem, Hypertonie", "Stoppen, Diuretika, langsame Transfusion bei Risikopatienten"],
        ["Bakterielle Kontamination", "Fieber, Schock – v.a. Thrombozytenkonzentrate (Lagerung bei Raumtemperatur)", "Stoppen, Kulturen von Patient und Präparat, Antibiotika"]
      ] } },
      { h: "Lagerung und Massivtransfusion" },
      "Erythrozytenkonzentrate bei 2–6 °C (bis ca. 6 Wochen je nach Additivlösung), Thrombozytenkonzentrate bei 20–24 °C unter Bewegung (wenige Tage), Plasma gefroren ≤ −30 °C. Bei Massivtransfusion drohen: **Hypothermie, Hypokalzämie** (Citrat bindet Calcium – v.a. bei schneller Gabe und Leberfunktionsstörung), **Hyperkaliämie** (ältere Konserven), Dilutionskoagulopathie, Azidose. Häufig: feste Verhältnisse von Erythrozyten- zu Plasma- zu Thrombozytenkonzentraten (z.B. 1:1:1) bis zur gezielten Steuerung."
    ],
    merke: [
      "AB0-Antikörper: IgM, ohne Vorkontakt → sofortige intravasale Hämolyse.",
      "Anti-D: IgG, erst nach Sensibilisierung.",
      "Universalspender: Erythrozyten 0 Rh neg., Plasma AB.",
      "Bedside-Test vor jeder Erythrozytentransfusion.",
      "TRALI = nicht-kardiales Lungenödem ≤6 h; TACO = Volumenüberladung; Thrombozyten tragen das höchste Bakterienrisiko."
    ],
    warum: [
      { q: "Warum fällt eine akute hämolytische Transfusionsreaktion in Narkose oft spät auf?", a: "Die typischen Frühzeichen (Unruhe, Schmerzen, Schüttelfrost, Fieber) sind in Narkose maskiert. Hinweise sind unerklärte Hypotonie, Tachykardie, diffuse Blutung (DIC) und roter Urin." },
      { q: "Warum führt schnelle Transfusion vieler Konserven zu Hypokalzämie?", a: "Konserven enthalten Citrat als Gerinnungshemmer, das ionisiertes Calcium bindet. Normalerweise baut die Leber Citrat schnell ab; bei hoher Zufuhr, Hypothermie oder Leberinsuffizienz kumuliert es." }
    ],
    klinik: [
      "Ionisiertes Calcium bei Massivtransfusion regelmäßig messen und ersetzen.",
      "Erwärmte Infusion/Transfusion bei großen Mengen.",
      "Rh-negative gebärfähige Frauen: möglichst Rh-negative Erythrozyten; nach Rh-positiver Notfalltransfusion Anti-D-Prophylaxe erwägen (Absprache Transfusionsmedizin)."
    ],
    selbsttest: [
      { q: "Spezialwissen Blut: Welche Antikörper hat ein Mensch mit Blutgruppe A?", a: "Anti-B (IgM, ohne Vorkontakt gebildet)." },
      { q: "Spezialwissen Blut: Wer ist Universalspender für Erythrozyten bzw. Plasma?", a: "Erythrozyten: 0 Rh negativ; Plasma: AB." },
      { q: "Spezialwissen Blut: Warum ist AB0-Inkompatibilität sofort gefährlich, Rh-Inkompatibilität beim ersten Kontakt meist nicht?", a: "AB0-Antikörper (IgM) existieren ohne Vorkontakt und lösen sofort komplementvermittelte intravasale Hämolyse aus; Anti-D (IgG) bildet sich erst nach Sensibilisierung." },
      { q: "Spezialwissen Blut: Unterschied TRALI und TACO?", a: "TRALI: nicht-kardiales Lungenödem innerhalb 6 h (Spender-Antikörper gegen Leukozyten), meist ohne Volumenüberladung. TACO: kardiales Lungenödem durch Volumenüberladung, Hypertonie, spricht auf Diuretika an." },
      { q: "Spezialwissen Blut: Welche metabolischen Probleme drohen bei Massivtransfusion?", a: "Hypothermie, Hypokalzämie (Citrat), Hyperkaliämie, Azidose, Dilutionskoagulopathie." },
      { q: "Spezialwissen Blut: Welches Blutprodukt hat das höchste Risiko bakterieller Kontamination und warum?", a: "Thrombozytenkonzentrate – sie werden bei Raumtemperatur (20–24 °C) gelagert." }
    ]
  });

  CH.push({
    id: "anaemie-pbm",
    level: "Organ",
    title: "Blutbildung, Eisen und Patient Blood Management",
    leitfrage: "Warum ist eine präoperative Anämie mehr als ein schlechter Laborwert – und wie lange braucht der Körper, um Blut neu zu bilden?",
    einfach: "Rote Blutkörperchen werden im Knochenmark gebildet, angetrieben vom Hormon Erythropoetin aus der Niere. Dafür braucht der Körper Eisen, Vitamin B12 und Folsäure. Eine Blutarmut vor der Operation erhöht Komplikationen und das Risiko, Fremdblut zu brauchen. Patient Blood Management heißt: Blutarmut vorher behandeln, Blutverlust während der OP sparen und nur transfundieren, wenn es wirklich nötig ist.",
    body: [
      { h: "Erythropoese" },
      { kette: [
        "Niere misst Sauerstoffangebot (Hypoxie-induzierter Faktor, HIF)",
        "Erythropoetin (EPO) ↑",
        "Knochenmark: Vorläuferzellen vermehren und reifen (ca. 5–7 Tage)",
        "Retikulozyten im Blut (1–2 Tage), dann reife Erythrozyten",
        "Bei optimalem Eisenangebot steigt der Hb um ca. 1 g/dl pro 1–2 Wochen"
      ], titel: "Vom Sauerstoffsensor zur neuen Zelle" },
      { h: "Eisen" },
      "Körpereisen ca. 3–4 g, davon ca. 2/3 im Hämoglobin. Aufnahme im Duodenum (nur ca. 1–2 mg/Tag), Speicher als Ferritin. **Hepcidin** aus der Leber blockiert Aufnahme und Freisetzung von Eisen (Ferroportin) – es steigt bei **Entzündung** → funktioneller Eisenmangel trotz voller Speicher (Anämie der chronischen Erkrankung).",
      { table: { head: ["Befund", "Eisenmangel", "Entzündungsanämie"], rows: [
        ["Ferritin", "niedrig (<30 µg/l)", "normal/hoch (Akute-Phase-Protein)"],
        ["Transferrinsättigung", "niedrig (<20 %)", "niedrig"],
        ["MCV", "eher niedrig", "normal oder leicht niedrig"]
      ] } },
      "Als Eisenmangel gelten präoperativ meist Ferritin <30 µg/l, oder <100 µg/l bei Transferrinsättigung <20 % (Entzündung). ==Orales Eisen wirkt langsam und wird bei Entzündung schlecht aufgenommen; intravenöses Eisen hebt den Hb in 2–4 Wochen.==",
      { h: "Präoperative Anämie" },
      "WHO-Definition: Hb <13 g/dl (Männer), <12 g/dl (nicht schwangere Frauen). Betroffen sind je nach Kollektiv ca. 25–40 % der Patienten vor großen Operationen; sie ist mit mehr Komplikationen, Transfusionen und Sterblichkeit assoziiert.",
      { h: "Drei Säulen des Patient Blood Management" },
      { ul: [
        "**1. Eigenes Blutvolumen optimieren**: Anämie frühzeitig (idealerweise ≥3–4 Wochen vor elektiver OP) abklären und behandeln (i.v. Eisen, B12/Folsäure).",
        "**2. Blutverlust minimieren**: chirurgische Technik, Tranexamsäure, maschinelle Autotransfusion (Cell Saver), Normothermie, gezieltes Gerinnungsmanagement, kleinere/weniger Blutentnahmen.",
        "**3. Anämietoleranz nutzen**: restriktive, indikationsgerechte Transfusion (meist Hb 7–8 g/dl), Einzelkonserve und Neubeurteilung ('Single Unit Policy')."
      ] }
    ],
    merke: [
      "EPO aus der Niere (HIF-gesteuert); Reifung ca. 1 Woche; Hb-Anstieg ca. 1 g/dl pro 1–2 Wochen.",
      "Hepcidin blockiert Eisen bei Entzündung → funktioneller Eisenmangel.",
      "Eisenmangel: Ferritin <30 µg/l oder <100 µg/l bei TSAT <20 %.",
      "WHO-Anämie: Hb <13 (Männer) bzw. <12 g/dl (Frauen).",
      "PBM: Anämie behandeln – Blutverlust sparen – restriktiv transfundieren."
    ],
    warum: [
      { q: "Warum hilft orales Eisen bei Entzündungsanämie kaum?", a: "Bei Entzündung steigt Hepcidin und blockiert Ferroportin im Darm und in Makrophagen – Eisen wird kaum aufgenommen und aus Speichern nicht freigegeben. Intravenöses Eisen umgeht die Darmblockade zumindest teilweise." },
      { q: "Warum sollte eine Anämie Wochen vor einer elektiven OP behandelt werden?", a: "Die Blutbildung braucht Zeit: Nach i.v. Eisen steigt der Hb erst über 2–4 Wochen relevant an. Kurz vor der OP gegeben, hilft es vor allem postoperativ." }
    ],
    klinik: [
      "Präoperative Anämie-Sprechstunde: Hb, Ferritin, Transferrinsättigung, CRP, ggf. B12/Folsäure.",
      "Zeugen Jehovas: PBM-Maßnahmen besonders konsequent; Cell Saver nach individueller Absprache.",
      "Postoperativ: Blutentnahmen sparen (pädiatrische Röhrchen), Eisen fortsetzen."
    ],
    selbsttest: [
      { q: "Spezialwissen Blut: Wie wird die Erythropoese gesteuert?", a: "Niere misst Sauerstoffangebot über HIF → EPO → Proliferation/Reifung im Knochenmark (ca. 5–7 Tage) → Retikulozyten → Erythrozyten." },
      { q: "Spezialwissen Blut: Welche Rolle spielt Hepcidin?", a: "Leberhormon, blockiert Ferroportin (Eisenaufnahme im Darm, Freisetzung aus Makrophagen); steigt bei Entzündung → funktioneller Eisenmangel." },
      { q: "Spezialwissen Blut: Laborkriterien für präoperativen Eisenmangel?", a: "Ferritin <30 µg/l, oder <100 µg/l bei Transferrinsättigung <20 % (Entzündung)." },
      { q: "Spezialwissen Blut: WHO-Definition der Anämie?", a: "Hb <13 g/dl bei Männern, <12 g/dl bei nicht schwangeren Frauen." },
      { q: "Spezialwissen Blut: Nenne die drei Säulen des Patient Blood Management.", a: "1) Eigenes Blutvolumen optimieren (Anämie behandeln), 2) Blutverlust minimieren, 3) Anämietoleranz nutzen und restriktiv transfundieren." }
    ]
  });

  window.__addSpezialOrgan({
    id: "blut",
    title: "Blut & Gerinnung",
    subtitle: "Vom Sauerstofftransport über die zellbasierte Gerinnung bis zu Transfusion und Patient Blood Management",
    subtopic: "blut-gerinnung",
    chapters: CH,
    sources: [
      "Hoffman M, Monroe DM. A cell-based model of hemostasis. Thromb Haemost 2001;85:958–965.",
      "Kietaibl S, Ahmed A, Afshari A, et al. Management of severe peri-operative bleeding: Guidelines from the European Society of Anaesthesiology and Intensive Care: Second update 2022. Eur J Anaesthesiol 2023;40:226–304.",
      "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023;27:80.",
      "Carson JL, Stanworth SJ, Guyatt G, et al. Red blood cell transfusion: 2023 AABB international guidelines. JAMA 2023;330:1892–1902.",
      "Muñoz M, Acheson AG, Auerbach M, et al. International consensus statement on the peri-operative management of anaemia and iron deficiency. Anaesthesia 2017;72:233–247.",
      "Mueller MM, Van Remoortel H, Meybohm P, et al. Patient Blood Management: recommendations from the 2018 Frankfurt Consensus Conference. JAMA 2019;321:983–997.",
      "Bundesärztekammer. Richtlinie Hämotherapie (Gesamtnovelle 2023) und Querschnitts-Leitlinien zur Therapie mit Blutkomponenten und Plasmaderivaten (aktuelle Fassung).",
      "Ganz T. Hepcidin and iron regulation, 10 years later. Blood 2011;117:4425–4433.",
      "Lehrbücher: Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017; West JB. Respiratory Physiology (O₂-Transport)."
    ]
  });
})();
