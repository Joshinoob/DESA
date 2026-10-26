// Spezialwissen Pharmakologie-Grundlagen – siehe data/spezial.js für Aufbau und Didaktik.
// Systematik der Zielstrukturen (Rezeptorfamilien, G-Protein-Signalwege, Ionenkanäle, Enzyme,
// Transporter), Pharmakodynamik und Pharmakokinetik mit Anästhesiebezug.
(function () {
  const CH = [];

  CH.push({
    id: "zielstrukturen",
    level: "Zelle",
    title: "Wo Arzneimittel angreifen: die vier Rezeptorfamilien und andere Zielstrukturen",
    leitfrage: "Warum wirkt Rocuronium in Sekunden, Noradrenalin in Sekunden bis Minuten, Insulin in Minuten und Dexamethason erst nach Stunden?",
    einfach: "Die meisten Medikamente docken an ein bestimmtes Eiweiß an: einen Rezeptor, einen Ionenkanal, ein Enzym oder einen Transporter. Bei Rezeptoren gibt es vier große Familien. Sie unterscheiden sich darin, wie das Signal ins Zellinnere gelangt – und das bestimmt, wie schnell und wie lange ein Medikament wirkt: Ein Kanal, der sich direkt öffnet, wirkt in Millisekunden; ein Rezeptor, der Gene an- oder abschaltet, braucht Stunden.",
    body: [
      { h: "Die vier Rezeptor-Superfamilien" },
      { table: { head: ["Familie", "Signalweg", "Zeitskala", "Beispiele aus der Anästhesie"], rows: [
        ["1. Ligandengesteuerte Ionenkanäle", "Bindung öffnet direkt einen Kanal in der Membran", "Millisekunden", "Nikotinischer ACh-Rezeptor (Relaxanzien), GABA-A (Propofol, Benzodiazepine), NMDA (Ketamin), 5-HT3 (Ondansetron)"],
        ["2. G-Protein-gekoppelte Rezeptoren (GPCR)", "Rezeptor aktiviert ein G-Protein → Enzym/Kanal → 'zweiter Botenstoff'", "Sekunden bis Minuten", "Adreno-, Muskarin-, Opioid-, Dopamin-, Histamin-, Vasopressin-, Adenosin-Rezeptoren"],
        ["3. Enzym-gekoppelte Rezeptoren", "Rezeptor ist selbst ein Enzym (z.B. Tyrosinkinase) oder koppelt an eines", "Minuten bis Stunden", "Insulin-Rezeptor, Zytokin-/EPO-Rezeptoren (JAK-STAT), ANP/BNP (Guanylatcyclase)"],
        ["4. Kernrezeptoren (intrazellulär)", "Ligand tritt in die Zelle, Rezeptor reguliert Gene", "Stunden bis Tage", "Glukokortikoide (Dexamethason, Hydrocortison), Schilddrüsenhormon, Vitamin D"]
      ] } },
      "==Je mehr Zwischenschritte zwischen Bindung und Wirkung liegen, desto langsamer, aber auch desto stärker verstärkt und länger anhaltend ist die Antwort.== Ein GPCR kann über seine Kaskade aus einem Molekül Hormon Tausende Moleküle zweiten Botenstoff erzeugen.",
      { h: "Weitere Zielstrukturen" },
      { ul: [
        "**Spannungsabhängige Ionenkanäle** (keine Rezeptoren im engeren Sinn): Na⁺-Kanäle (Lokalanästhetika, Antiarrhythmika Klasse I, Phenytoin), Ca²⁺-Kanäle (Dihydropyridine, Verapamil), K⁺-Kanäle (Amiodaron).",
        "**Enzyme**: Cyclooxygenase (NSAR), Acetylcholinesterase (Neostigmin), Phosphodiesterase 3 (Milrinon), Monoaminoxidase, Vitamin-K-Epoxid-Reduktase (Phenprocoumon), Gerinnungsfaktoren Xa/IIa (DOAK), Carboanhydrase (Acetazolamid).",
        "**Transporter/Pumpen**: Na⁺/K⁺-ATPase (Digoxin), H⁺/K⁺-ATPase (Protonenpumpenhemmer), NKCC2 (Furosemid), Serotonin-/Noradrenalin-Wiederaufnahme (Tramadol, Tapentadol, Antidepressiva), SGLT2.",
        "**Physikochemische Wirkungen ohne Rezeptor**: Einkapseln (Sugammadex), Ionenbindung (Protamin–Heparin), Osmose (Mannitol), Neutralisation (Natriumcitrat), Antikörperbindung (Idarucizumab)."
      ] },
      { h: "Spezifität ist relativ" },
      "Kaum ein Medikament bindet nur an eine einzige Struktur. Mit steigender Dosis werden weitere Ziele erreicht – Beispiele: Metoprolol blockiert in hoher Dosis auch β2 (Bronchospasmus), Dopamin wirkt dosisabhängig an D1, β1 und α1, Droperidol neben D2 auch an α1 und hERG-Kanälen (QT). ==Viele Nebenwirkungen sind also die 'richtige' Wirkung am 'falschen' Ort oder an einer zweiten Zielstruktur.=="
    ],
    merke: [
      "Vier Rezeptorfamilien: ligandengesteuerte Ionenkanäle (ms), GPCR (s–min), enzymgekoppelte (min–h), Kernrezeptoren (h–Tage).",
      "Weitere Ziele: spannungsabhängige Kanäle, Enzyme, Transporter, physikochemische Wirkungen.",
      "Mehr Zwischenschritte = langsamer, aber stärker verstärkt und länger anhaltend.",
      "Selektivität ist dosisabhängig – Nebenwirkungen oft über Zweitziele."
    ],
    warum: [
      { q: "Warum wird Dexamethason zur PONV-Prophylaxe schon bei der Einleitung gegeben?", a: "Es wirkt über einen Kernrezeptor: Der Rezeptor muss in den Zellkern wandern und Gene an- oder abschalten, bevor sich Proteinmengen ändern. Das dauert Stunden – bei Gabe erst am OP-Ende käme die Wirkung zu spät." },
      { q: "Warum ist Sugammadex kein Rezeptor-Antagonist?", a: "Es bindet keinen Rezeptor, sondern kapselt das Relaxans im Plasma ein (physikochemische Wirkung). Dadurch entsteht ein Konzentrationsgefälle, das Rocuronium von der Endplatte abzieht – der Rezeptor selbst wird nicht beeinflusst." }
    ],
    klinik: [
      "Wirkbeginn und -dauer lassen sich oft schon aus der Zielstruktur ableiten (Kanal schnell, Kernrezeptor langsam).",
      "Bei unerwarteten Nebenwirkungen nach Zweitzielen fragen (hERG → QT, α1 → Hypotonie, muskarinisch → Tachykardie/Delir)."
    ],
    selbsttest: [
      { q: "Spezialwissen Pharmakologie: Nenne die vier Rezeptor-Superfamilien mit ihrer typischen Zeitskala.", a: "Ligandengesteuerte Ionenkanäle (Millisekunden), G-Protein-gekoppelte Rezeptoren (Sekunden–Minuten), enzymgekoppelte Rezeptoren (Minuten–Stunden), Kernrezeptoren (Stunden–Tage)." },
      { q: "Spezialwissen Pharmakologie: Ordne zu: Ondansetron, Insulin, Noradrenalin, Hydrocortison – welche Rezeptorfamilie?", a: "Ondansetron: ligandengesteuerter Ionenkanal (5-HT3). Insulin: enzymgekoppelt (Tyrosinkinase). Noradrenalin: GPCR (α1/β1). Hydrocortison: Kernrezeptor (Glukokortikoid-Rezeptor)." },
      { q: "Spezialwissen Pharmakologie: Nenne Arzneimittel mit Enzymen bzw. Transportern als Zielstruktur.", a: "Enzyme: NSAR (COX), Neostigmin (Acetylcholinesterase), Milrinon (PDE3), DOAK (Xa/IIa). Transporter/Pumpen: Digoxin (Na/K-ATPase), Pantoprazol (H/K-ATPase), Furosemid (NKCC2), Tramadol (Wiederaufnahme)." },
      { q: "Spezialwissen Pharmakologie: Nenne Arzneimittel mit physikochemischer Wirkung ohne Rezeptor.", a: "Sugammadex (Einkapselung), Protamin (Ionenbindung an Heparin), Mannitol (Osmose), Natriumcitrat (Neutralisation), Idarucizumab (Antikörperbindung)." }
    ]
  });

  CH.push({
    id: "gpcr",
    level: "Zelle",
    title: "G-Protein-gekoppelte Rezeptoren: Gs, Gi und Gq systematisch",
    leitfrage: "Wie kann derselbe Botenstoff Noradrenalin Gefäße verengen (α1), die Freisetzung von Noradrenalin bremsen (α2) und das Herz stärken (β1)?",
    einfach: "G-Protein-gekoppelte Rezeptoren sitzen in der Zellhülle und haben innen einen 'Schalter', das G-Protein. Dockt ein Botenstoff außen an, legt der Rezeptor den Schalter um. Es gibt drei Hauptsorten von Schaltern: Gs gibt Gas (mehr cAMP), Gi bremst (weniger cAMP, Zelle wird ruhiger) und Gq setzt Calcium frei. Welcher Schalter an einem Rezeptor hängt, bestimmt die Wirkung – nicht der Botenstoff selbst.",
    body: [
      { h: "Aufbau und Aktivierungszyklus" },
      "Ein GPCR ist ein Eiweiß, das **7-mal die Membran durchquert** (7-Transmembran-Rezeptor). Innen koppelt ein **heterotrimeres G-Protein** aus α-, β- und γ-Untereinheit.",
      { kette: [
        "Ruhe: Gα trägt GDP und ist mit βγ verbunden",
        "Agonist bindet → Rezeptor ändert seine Form → Gα tauscht GDP gegen GTP",
        "Gα-GTP und βγ trennen sich und ==aktivieren bzw. hemmen jeweils eigene Zielproteine== (Enzyme, Ionenkanäle)",
        "Gα spaltet GTP selbst zu GDP (GTPase, beschleunigt durch RGS-Proteine) → Signal endet, Untereinheiten verbinden sich wieder",
        "Ein Rezeptor kann nacheinander viele G-Proteine aktivieren → Verstärkung"
      ], titel: "G-Protein-Zyklus" },
      { h: "Die drei wichtigsten Signalwege" },
      { table: { head: ["G-Protein", "Zielenzym/-kanal", "Zweiter Botenstoff", "Typische Wirkung"], rows: [
        ["Gs (stimulierend)", "Adenylatcyclase ↑", "cAMP ↑ → Proteinkinase A", "Herz: Inotropie/Chronotropie ↑; glatte Muskulatur: Erschlaffung; Leber: Glykogenolyse"],
        ["Gi/o (inhibierend)", "Adenylatcyclase ↓; βγ öffnet K⁺-Kanäle (GIRK), schließt Ca²⁺-Kanäle", "cAMP ↓", "Hyperpolarisation, weniger Transmitterfreisetzung, Herzfrequenz ↓"],
        ["Gq", "Phospholipase C ↑ → spaltet PIP₂", "IP₃ (Ca²⁺ aus dem Speicher) und DAG (Proteinkinase C)", "Glatte Muskulatur: Kontraktion; Drüsen: Sekretion"]
      ] } },
      "Merkhilfe: ==Gs = 'stimulates' cAMP, Gi = 'inhibits' cAMP, Gq = 'Quelle' für Calcium (IP₃)==.",
      { h: "Wichtige Rezeptoren und ihre G-Proteine" },
      { table: { head: ["Gs", "Gi/o", "Gq"], rows: [
        ["β1, β2, β3", "α2", "α1"],
        ["D1", "D2", "M1, M3, M5"],
        ["H2", "M2, M4", "H1"],
        ["V2 (Niere), A2A", "µ-, κ-, δ-Opioid; Nozizeptin (ORL1)", "V1 (Gefäß)"],
        ["5-HT4, Glukagon-Rezeptor", "A1 (AV-Knoten), GABA-B, 5-HT1, CB1", "5-HT2, AT1 (Angiotensin II)"]
      ] } },
      "Damit wird die Leitfrage beantwortet: Noradrenalin aktiviert an α1 Gq (Ca²⁺ → Vasokonstriktion), an α2 Gi (präsynaptisch weniger Ausschüttung) und an β1 Gs (cAMP → mehr Ca²⁺ im Herzmuskel).",
      { h: "Abschalten, Desensibilisierung und Regulation" },
      { kette: [
        "Dauerreiz: G-Protein-gekoppelte Rezeptorkinasen (GRK) phosphorylieren den aktivierten Rezeptor",
        "β-Arrestin bindet → Rezeptor kann kein G-Protein mehr aktivieren (Desensibilisierung, Minuten)",
        "Rezeptor wird in die Zelle aufgenommen (Internalisierung) und recycelt oder abgebaut",
        "Bei anhaltender Stimulation werden weniger Rezeptoren gebildet (Herunterregulation, Stunden bis Tage)",
        "Umgekehrt: Dauerhafte Blockade → mehr Rezeptoren (Hochregulation) → Überempfindlichkeit nach Absetzen"
      ], titel: "Vom Signal zur Toleranz" },
      "Zusätzlich beenden **Phosphodiesterasen** das cAMP/cGMP-Signal und Phosphatasen machen Phosphorylierungen rückgängig."
    ],
    merke: [
      "GPCR: 7 Transmembranhelices, heterotrimeres G-Protein (α, βγ), GDP→GTP-Austausch, eigene GTPase beendet.",
      "Gs → cAMP ↑ (PKA); Gi → cAMP ↓ + GIRK auf, Ca²⁺-Kanäle zu; Gq → PLC → IP₃ (Ca²⁺) + DAG (PKC).",
      "β = Gs; α2, M2, µ/κ/δ, D2, A1, GABA-B = Gi; α1, M1/M3, H1, V1, AT1 = Gq.",
      "Dauerreiz → GRK + β-Arrestin → Desensibilisierung, Internalisierung, Herunterregulation.",
      "Dauerblockade → Hochregulation → Rebound nach Absetzen."
    ],
    warum: [
      { q: "Warum wirkt Milrinon auch, wenn die β-Rezeptoren blockiert oder herunterreguliert sind?", a: "Milrinon greift hinter dem Rezeptor an: Es hemmt die Phosphodiesterase 3, die cAMP abbaut. cAMP steigt also, ohne dass Rezeptor und Gs gebraucht werden. Dasselbe Prinzip nutzt Glukagon über einen eigenen Gs-gekoppelten Rezeptor." },
      { q: "Warum darf ein Betablocker perioperativ nicht abrupt abgesetzt werden?", a: "Unter Dauerblockade bildet die Zelle mehr β-Rezeptoren (Hochregulation). Fällt der Blocker weg, treffen die körpereigenen Katecholamine auf viele freie Rezeptoren → überschießende Tachykardie, Hypertonie und Ischämie." },
      { q: "Warum sprechen Patienten im septischen Schock zunehmend schlechter auf Noradrenalin an?", a: "Hohe endogene und exogene Katecholaminspiegel führen zu Desensibilisierung und Herunterregulation der Adrenozeptoren; dazu stören Azidose und NO die Signalkette. Vasopressin wirkt über einen anderen Rezeptor (V1, ebenfalls Gq) und hilft deshalb zusätzlich." }
    ],
    klinik: [
      "Opioide, α2-Agonisten (Dexmedetomidin, Clonidin) und Adenosin wirken alle über Gi – daher ähnliche Effekte: Hyperpolarisation, weniger Transmitterfreisetzung, Bradykardie.",
      "Vasopressoren mit unterschiedlichen Rezeptoren (α1 und V1) addieren sich, weil sie zwar beide über Gq laufen, aber nicht um denselben Rezeptor konkurrieren.",
      "Toleranz gegenüber Opioiden und Katecholaminen ist zum großen Teil Rezeptor-Desensibilisierung."
    ],
    selbsttest: [
      { q: "Spezialwissen Pharmakologie: Beschreibe den Aktivierungszyklus eines G-Proteins.", a: "Ruhe: Gα-GDP mit βγ. Agonist → Rezeptor tauscht GDP gegen GTP an Gα → Gα-GTP und βγ trennen sich und beeinflussen Zielproteine → Gα hydrolysiert GTP (GTPase, RGS beschleunigt) → Rückkehr in Ruhe." },
      { q: "Spezialwissen Pharmakologie: Welche Signalkette läuft über Gs, Gi und Gq?", a: "Gs: Adenylatcyclase ↑ → cAMP ↑ → PKA. Gi: Adenylatcyclase ↓ → cAMP ↓, βγ öffnet GIRK-K⁺-Kanäle und schließt Ca²⁺-Kanäle. Gq: Phospholipase C → IP₃ (Ca²⁺-Freisetzung) und DAG (PKC)." },
      { q: "Spezialwissen Pharmakologie: Ordne die G-Proteine zu: α1, α2, β1, M2, M3, µ, V1, V2, D2, H1.", a: "Gq: α1, M3, V1, H1. Gi: α2, M2, µ, D2. Gs: β1, V2." },
      { q: "Spezialwissen Pharmakologie: Wie entsteht Desensibilisierung an GPCR?", a: "GRK phosphorylieren den aktivierten Rezeptor, β-Arrestin bindet und entkoppelt ihn vom G-Protein; dann Internalisierung, bei Dauerreiz Herunterregulation (weniger Rezeptoren)." },
      { q: "Spezialwissen Pharmakologie: Wie umgehen Milrinon und Glukagon eine β-Blockade?", a: "Milrinon hemmt die PDE3 (cAMP-Abbau ↓), Glukagon aktiviert einen eigenen Gs-gekoppelten Rezeptor – beide erhöhen cAMP unabhängig vom β-Rezeptor." }
    ]
  });

  CH.push({
    id: "ionenkanaele",
    level: "Zelle",
    title: "Ionenkanäle: ligandengesteuert und spannungsabhängig",
    leitfrage: "Was haben Propofol, Rocuronium, Ketamin, Lidocain und Amlodipin gemeinsam – und worin unterscheiden sie sich grundlegend?",
    einfach: "Ionenkanäle sind Poren in der Zellhülle, durch die geladene Teilchen strömen. Manche öffnen sich, wenn ein Botenstoff andockt (ligandengesteuert), andere, wenn sich die Spannung an der Membran ändert (spannungsabhängig). Strömen positive Teilchen hinein, wird die Zelle erregt; strömt Chlorid hinein oder Kalium hinaus, wird sie gebremst. Viele Narkosemittel verstärken die bremsenden Kanäle oder blockieren die erregenden.",
    body: [
      { h: "Ligandengesteuerte Ionenkanäle" },
      { table: { head: ["Kanal", "Ionen", "Effekt", "Arzneimittel"], rows: [
        ["Nikotinischer ACh-Rezeptor (Muskel)", "Na⁺ (K⁺)", "Erregung → Kontraktion", "Succinylcholin (Agonist), Rocuronium u.a. (kompetitive Antagonisten)"],
        ["GABA-A-Rezeptor", "Cl⁻", "Hemmung (Hyperpolarisation)", "Propofol, Etomidat, Barbiturate, Benzodiazepine, Volatila (positive allosterische Modulatoren)"],
        ["Glycin-Rezeptor (Rückenmark)", "Cl⁻", "Hemmung", "Volatila verstärken; Strychnin blockiert"],
        ["NMDA-Rezeptor (Glutamat)", "Na⁺, Ca²⁺", "Erregung, Plastizität, Sensibilisierung", "Ketamin (Kanalblock), Magnesium, Lachgas, Xenon, Methadon"],
        ["AMPA-Rezeptor (Glutamat)", "Na⁺", "Schnelle Erregung", "(Perampanel – Antiepileptikum)"],
        ["5-HT3-Rezeptor", "Na⁺, K⁺", "Erregung vagaler Afferenzen/Brechzentrum", "Ondansetron, Granisetron (Antagonisten)"]
      ] } },
      "Die meisten Hypnotika sind **allosterische Modulatoren**: Sie binden an einer anderen Stelle als der körpereigene Transmitter und verändern, wie stark oder lange der Kanal auf ihn reagiert. ==Benzodiazepine erhöhen die Öffnungshäufigkeit, Barbiturate die Öffnungsdauer; Propofol und Barbiturate öffnen in hoher Dosis auch ohne GABA== – deshalb haben Benzodiazepine allein einen Deckeneffekt, Barbiturate und Propofol nicht.",
      { h: "Spannungsabhängige Ionenkanäle" },
      { table: { head: ["Kanal", "Funktion", "Arzneimittel"], rows: [
        ["Na⁺-Kanäle (Nav)", "Aufstrich des Aktionspotenzials in Nerv und Herz", "Lokalanästhetika, Lidocain/Klasse-I-Antiarrhythmika, Phenytoin, Carbamazepin"],
        ["L-Typ-Ca²⁺-Kanäle (Cav1.2)", "Kontraktion von Herz und Gefäßmuskel, Erregung von Sinus-/AV-Knoten", "Dihydropyridine (Nicardipin, Clevidipin, Nimodipin), Verapamil, Diltiazem"],
        ["N-/P/Q-Typ-Ca²⁺-Kanäle", "Transmitterfreisetzung an Synapsen", "Gabapentin/Pregabalin (α2δ-Untereinheit), Ziconotid; Ziel der Lambert-Eaton-Antikörper"],
        ["Spannungsabhängige K⁺-Kanäle (hERG u.a.)", "Repolarisation", "Amiodaron, Sotalol (gewollt); QT-Verlängerung als Nebenwirkung vieler Substanzen (Ondansetron, Droperidol, Methadon)"],
        ["HCN-Kanäle (If)", "Schrittmacherstrom des Sinusknotens", "Ivabradin; Ketamin wirkt u.a. an HCN1"]
      ] } },
      { kette: [
        "Ruhezustand (geschlossen, aktivierbar)",
        "Depolarisation → Kanal öffnet",
        "Kurz danach inaktiviert (geschlossen, NICHT aktivierbar)",
        "Erst nach Repolarisation wieder ruhend"
      ], titel: "Zustände spannungsabhängiger Na⁺-Kanäle" },
      "Viele Blocker binden bevorzugt im offenen oder inaktivierten Zustand → ==Use-Dependence: häufig aktivierte Zellen (Schmerzfasern, tachykardes Myokard, epileptischer Herd) werden stärker blockiert==.",
      { h: "Weitere Kanäle mit Anästhesiebezug" },
      { ul: [
        "**ATP-sensitive K⁺-Kanäle (K-ATP)**: schließen bei viel ATP; Öffnung → Hyperpolarisation → Gefäßerweiterung. Levosimendan öffnet sie; Sulfonylharnstoffe schließen sie (Insulinfreisetzung); im vasodilatatorischen Schock pathologisch offen (Vasopressin schließt sie).",
        "**Zwei-Poren-K⁺-Kanäle (TREK, TASK)**: werden von Volatila geöffnet → Hyperpolarisation, Beitrag zur Narkose.",
        "**Ryanodin-Rezeptor (RyR1)**: Ca²⁺-Kanal des sarkoplasmatischen Retikulums – defekt bei maligner Hyperthermie, Ziel von Dantrolen."
      ] }
    ],
    merke: [
      "Ligandengesteuert: nAChR, GABA-A, Glycin, NMDA/AMPA, 5-HT3.",
      "Kationenkanäle erregen, Chloridkanäle (GABA-A, Glycin) hemmen.",
      "Benzodiazepine: Öffnungshäufigkeit ↑ (Decke), Barbiturate/Propofol: Öffnungsdauer ↑, in hoher Dosis direkte Öffnung.",
      "Spannungsabhängig: Nav (Lokalanästhetika), Cav-L (Calciumantagonisten), K⁺ (Amiodaron, hERG/QT), HCN (If).",
      "Use-Dependence: Blocker binden bevorzugt offene/inaktivierte Kanäle."
    ],
    warum: [
      { q: "Warum führt eine Überdosis Benzodiazepine allein selten zum Atemstillstand, eine Überdosis Propofol aber schon?", a: "Benzodiazepine verstärken nur die Wirkung von körpereigenem GABA (Deckeneffekt). Propofol öffnet den GABA-A-Kanal in hoher Konzentration auch ohne GABA – die Hemmung kann unbegrenzt zunehmen." },
      { q: "Warum verlängern so viele unterschiedliche Medikamente das QT-Intervall?", a: "Der kardiale hERG-K⁺-Kanal hat eine große, leicht zugängliche Pore, in der viele Substanzen hängen bleiben. Ist er blockiert, dauert die Repolarisation länger." }
    ],
    klinik: [
      "Kombinationen mit verschiedenen Bindungsstellen am GABA-A-Rezeptor (Propofol + Benzodiazepin) wirken überadditiv.",
      "QT-verlängernde Substanzen nicht stapeln (Ondansetron + Droperidol + Methadon + Amiodaron), Elektrolyte (K⁺, Mg²⁺) normalisieren.",
      "Magnesium blockiert den NMDA-Kanal und Ca²⁺-Kanäle – Grundlage für Analgesie, Antikonvulsion und verstärkte Relaxierung."
    ],
    selbsttest: [
      { q: "Spezialwissen Pharmakologie: Nenne die wichtigsten ligandengesteuerten Ionenkanäle und ihre Ionen.", a: "Nikotinischer ACh-Rezeptor (Na⁺/K⁺), GABA-A (Cl⁻), Glycin (Cl⁻), NMDA (Na⁺/Ca²⁺), AMPA (Na⁺), 5-HT3 (Na⁺/K⁺)." },
      { q: "Spezialwissen Pharmakologie: Wie unterscheiden sich Benzodiazepine und Barbiturate am GABA-A-Rezeptor?", a: "Benzodiazepine erhöhen die Öffnungshäufigkeit und brauchen GABA (Deckeneffekt); Barbiturate verlängern die Öffnungsdauer und öffnen in hoher Dosis direkt (kein Deckeneffekt)." },
      { q: "Spezialwissen Pharmakologie: Welche Zustände hat ein spannungsabhängiger Na⁺-Kanal, und was ist Use-Dependence?", a: "Ruhend (aktivierbar) → offen → inaktiviert → nach Repolarisation wieder ruhend. Use-Dependence: Blocker binden bevorzugt offene/inaktivierte Kanäle, daher stärkere Wirkung bei häufig feuernden Zellen." },
      { q: "Spezialwissen Pharmakologie: Welche Rolle spielen K-ATP-Kanäle in der Anästhesie?", a: "Öffnung hyperpolarisiert Gefäßmuskeln → Vasodilatation (Levosimendan); im vasodilatatorischen Schock pathologisch offen (Vasopressin schließt sie); Sulfonylharnstoffe schließen sie in Betazellen (Insulinfreisetzung)." }
    ]
  });

  CH.push({
    id: "enzym-kernrezeptoren",
    level: "Zelle",
    title: "Enzym-gekoppelte Rezeptoren, Kernrezeptoren, Enzyme und Transporter",
    leitfrage: "Warum senkt Insulin Kalium in Minuten, während Hydrocortison bei der Addison-Krise erst über Stunden voll wirkt?",
    einfach: "Manche Rezeptoren sind selbst Enzyme: Dockt der Botenstoff an, hängen sie Phosphatgruppen an andere Eiweiße und setzen so eine Kette in Gang – das dauert Minuten. Kernrezeptoren sitzen im Zellinneren; der Wirkstoff muss erst hinein, dann schaltet der Rezeptor im Zellkern Gene an oder ab. Bis neue Eiweiße gebildet sind, vergehen Stunden. Andere Medikamente hemmen direkt ein Enzym oder eine Transportpumpe.",
    body: [
      { h: "Enzym-gekoppelte Rezeptoren" },
      { table: { head: ["Typ", "Prinzip", "Beispiele"], rows: [
        ["Rezeptor-Tyrosinkinase", "Ligand → Dimerisierung → Autophosphorylierung → Signalproteine (PI3K/Akt, MAP-Kinasen)", "Insulin (GLUT4-Einbau, Na⁺/K⁺-ATPase ↑), Wachstumsfaktoren"],
        ["Zytokin-Rezeptor + JAK-Kinase", "Rezeptor aktiviert assoziierte JAK → STAT-Proteine wandern in den Kern", "Erythropoetin, Interleukine, Wachstumshormon, Leptin"],
        ["Rezeptor-Guanylatcyclase", "Rezeptor bildet selbst cGMP", "ANP/BNP (Natriurese, Vasodilatation)"],
        ["Lösliche Guanylatcyclase (kein Membranrezeptor)", "NO aktiviert sie im Zytosol → cGMP", "Nitroglycerin, Nitroprussid, inhalatives NO; Methylenblau hemmt sie"]
      ] } },
      { h: "Kernrezeptoren" },
      { kette: [
        "Fettlöslicher Ligand (Steroid, Schilddrüsenhormon, Vitamin D) diffundiert in die Zelle",
        "Bindung an den Rezeptor im Zytoplasma (Glukokortikoid-Rezeptor) oder im Kern (Schilddrüsenhormon-Rezeptor)",
        "Rezeptor-Ligand-Komplex bindet an Erkennungssequenzen der DNA",
        "Transaktivation (Gene an) bzw. Transrepression (z.B. NF-κB, AP-1 aus)",
        "Veränderte Proteinmengen → ==Wirkung nach Stunden, hält über den Plasmaspiegel hinaus an=="
      ], titel: "Wie Steroide wirken" },
      "Daneben gibt es **schnelle, nicht-genomische Effekte** von Steroiden (Membranwirkungen, Minuten) – die permissive Gefäßwirkung von Cortisol beginnt teils rasch, die volle antiinflammatorische Wirkung braucht Stunden.",
      { h: "Enzyme als Zielstruktur" },
      { table: { head: ["Hemmung", "Art", "Beispiele"], rows: [
        ["Reversibel kompetitiv", "konkurriert mit dem Substrat", "Ibuprofen (COX), Edrophonium (AChE)"],
        ["Reversibel kovalent (langsam spaltbar)", "Enzym für Minuten blockiert", "Neostigmin, Pyridostigmin (Carbamylierung der AChE)"],
        ["Irreversibel", "Wirkung endet erst mit Neusynthese des Enzyms bzw. neuen Zellen", "ASS (COX-1 der Plättchen, 7–10 Tage), Protonenpumpenhemmer, Organophosphate (AChE), Tazobactam (β-Laktamase)"]
      ] } },
      "==Bei irreversiblen Hemmern bestimmt nicht die Halbwertszeit des Medikaments, sondern die Neubildung des Enzyms die Wirkdauer.==",
      { h: "Transporter" },
      { ul: [
        "**Primär aktiv (ATP)**: Na⁺/K⁺-ATPase (Digoxin hemmt; Insulin und β2-Mimetika stimulieren → Kalium in die Zelle), H⁺/K⁺-ATPase (Protonenpumpenhemmer).",
        "**Sekundär aktiv (Kotransporter)**: NKCC2 (Schleifendiuretika), NCC (Thiazide), SGLT2 (Gliflozine).",
        "**Wiederaufnahme-Transporter**: SERT/NET (Antidepressiva, Tramadol, Tapentadol, Kokain) → mehr Transmitter im Spalt.",
        "**Effluxpumpe P-Glykoprotein**: transportiert Medikamente aus Darm, Hirn und Niere hinaus; Hemmung (Verapamil, Amiodaron, Clarithromycin) erhöht Spiegel z.B. von Digoxin und Dabigatran."
      ] }
    ],
    merke: [
      "Tyrosinkinase-Rezeptor: Insulin (Minuten); JAK-STAT: EPO/Zytokine; Guanylatcyclase: ANP/BNP; lösliche GC: NO.",
      "Kernrezeptoren: Steroide, Schilddrüse, Vitamin D – Genexpression, Wirkung nach Stunden, überdauert den Spiegel.",
      "Irreversible Enzymhemmung: Wirkdauer = Zeit bis zur Enzymneubildung (ASS, PPI).",
      "Transporter: Na/K-ATPase, H/K-ATPase, NKCC2, SGLT2, SERT/NET, P-Glykoprotein (Interaktionen)."
    ],
    warum: [
      { q: "Warum wirkt ASS trotz einer Plasmahalbwertszeit von nur ca. 15–20 Minuten tagelang?", a: "Es acetyliert die Cyclooxygenase der Thrombozyten irreversibel. Plättchen haben keinen Kern und können kein neues Enzym bilden; die Wirkung endet erst, wenn neue Plättchen nachgebildet sind (ca. 10 % pro Tag)." },
      { q: "Warum erhöht Amiodaron den Dabigatran- und Digoxinspiegel?", a: "Amiodaron hemmt das P-Glykoprotein, das beide Substanzen aus Darmzellen zurück ins Lumen und in der Niere in den Urin pumpt. Mehr wird aufgenommen und weniger ausgeschieden." }
    ],
    klinik: [
      "Insulin + Glukose und β2-Mimetika senken Kalium über die Na⁺/K⁺-ATPase innerhalb von Minuten (Hyperkaliämie-Therapie).",
      "Thrombozytenhemmer-Pausen vor OP richten sich nach der Plättchenneubildung, nicht nach der Halbwertszeit.",
      "P-Glykoprotein- und CYP3A4-Hemmer gemeinsam prüfen (viele Substanzen hemmen beide)."
    ],
    selbsttest: [
      { q: "Spezialwissen Pharmakologie: Wie wirkt der Insulin-Rezeptor und wie schnell?", a: "Rezeptor-Tyrosinkinase: Autophosphorylierung → IRS → PI3K/Akt → GLUT4-Einbau, Na⁺/K⁺-ATPase ↑; Wirkung innerhalb von Minuten." },
      { q: "Spezialwissen Pharmakologie: Beschreibe die Wirkkette eines Kernrezeptor-Liganden.", a: "Diffusion in die Zelle → Bindung an zytoplasmatischen/nukleären Rezeptor → Bindung an DNA-Erkennungssequenzen → Trans-aktivierung/-repression → veränderte Proteinmengen nach Stunden, Wirkung überdauert den Plasmaspiegel." },
      { q: "Spezialwissen Pharmakologie: Was bestimmt die Wirkdauer irreversibler Enzymhemmer? Nenne Beispiele.", a: "Die Neusynthese des Enzyms bzw. Neubildung der Zellen: ASS (Plättchen 7–10 Tage), Protonenpumpenhemmer (neue Pumpen), Organophosphate (AChE)." },
      { q: "Spezialwissen Pharmakologie: Welche Rolle spielt das P-Glykoprotein für Interaktionen?", a: "Effluxpumpe in Darm, Blut-Hirn-Schranke und Niere; Hemmer (Verapamil, Amiodaron, Clarithromycin) erhöhen die Spiegel von Substraten wie Digoxin und Dabigatran." }
    ]
  });

  CH.push({
    id: "pharmakodynamik",
    level: "System",
    title: "Pharmakodynamik: Affinität, intrinsische Aktivität, Dosis-Wirkungs-Kurven",
    leitfrage: "Warum kann Buprenorphin die Wirkung von Fentanyl abschwächen, obwohl beide Opioid-Agonisten sind?",
    einfach: "Wie fest ein Medikament am Rezeptor haftet, heißt Affinität. Wie stark es den Rezeptor dann 'anschaltet', heißt intrinsische Aktivität. Ein voller Agonist schaltet ganz an, ein partieller Agonist nur teilweise, ein Antagonist gar nicht – er blockiert nur den Platz. Haftet ein partieller Agonist sehr fest, verdrängt er einen vollen Agonisten und die Gesamtwirkung sinkt.",
    body: [
      { h: "Grundbegriffe" },
      { table: { head: ["Begriff", "Bedeutung", "Maß/Beispiel"], rows: [
        ["Affinität", "Wie fest bindet der Wirkstoff?", "Dissoziationskonstante Kd (Konzentration bei 50 % Besetzung) – kleiner Kd = hohe Affinität"],
        ["Intrinsische Aktivität (Efficacy)", "Wie stark aktiviert der gebundene Wirkstoff den Rezeptor?", "Voller Agonist 1, partieller Agonist 0–1, Antagonist 0, inverser Agonist <0"],
        ["Potenz", "Welche Dosis/Konzentration braucht man für einen bestimmten Effekt?", "EC50 bzw. ED50 – Sufentanil potenter als Morphin"],
        ["Wirksamkeit (maximale Wirkung)", "Wie groß ist der größtmögliche Effekt?", "Emax – Morphin und Fentanyl gleich hoch, Buprenorphin niedriger"]
      ] } },
      "==Potenz und Wirksamkeit sind verschiedene Dinge==: Ein potentes Medikament braucht wenig Substanz, ist aber deshalb nicht automatisch stärker in der maximalen Wirkung.",
      { h: "Agonisten und Antagonisten" },
      { ul: [
        "**Voller Agonist**: maximale Rezeptoraktivierung (Fentanyl, Noradrenalin).",
        "**Partieller Agonist**: geringere maximale Wirkung, auch bei voller Besetzung; neben einem vollen Agonisten wirkt er teils antagonistisch (Buprenorphin).",
        "**Inverser Agonist**: senkt die spontane Grundaktivität eines Rezeptors (viele H1-Antihistaminika).",
        "**Kompetitiver (reversibler) Antagonist**: besetzt den Platz ohne Aktivierung; durch mehr Agonist verdrängbar → Kurve nach rechts verschoben, Emax gleich (Rocuronium vs. ACh, Naloxon vs. Morphin).",
        "**Nicht-kompetitiver/irreversibler Antagonist**: durch mehr Agonist nicht überwindbar → Emax sinkt (Phenoxybenzamin an α-Rezeptoren).",
        "**Allosterische Modulatoren**: binden an anderer Stelle und verstärken (PAM, z.B. Benzodiazepine) oder schwächen (NAM) die Wirkung des Agonisten.",
        "**Funktioneller Antagonismus**: Gegenwirkung über einen anderen Rezeptor (Adrenalin gegen Histamin bei Anaphylaxie). **Chemischer Antagonismus**: direkte Bindung (Protamin–Heparin, Sugammadex–Rocuronium)."
      ] },
      { h: "Dosis-Wirkungs-Kurven" },
      "Gegen den Logarithmus der Dosis aufgetragen ergibt sich eine **S-förmige Kurve**. Die Lage auf der x-Achse zeigt die Potenz (EC50), die Höhe des Plateaus die Wirksamkeit (Emax), die Steilheit, wie schnell der Effekt mit der Dosis zunimmt. **Quantale** Kurven zeigen den Anteil der Patienten mit einem Ja/Nein-Effekt – darauf beruht die MAC (Konzentration, bei der 50 % nicht auf den Hautschnitt reagieren).",
      { formel: "Therapeutischer Index = TD50 / ED50 (bzw. LD50 / ED50)", erkl: "Je größer, desto sicherer. Klinisch wichtiger ist die therapeutische Breite zwischen wirksamen und toxischen Spiegeln (eng z.B. bei Digoxin, Theophyllin, Lithium, Phenytoin)." },
      { h: "Rezeptorreserve" },
      "Wenn schon ein Teil der Rezeptoren den maximalen Effekt auslöst, liegt eine **Rezeptorreserve** vor ('spare receptors'). Folge: Ein irreversibler Antagonist verschiebt die Kurve zunächst nur nach rechts, erst wenn die Reserve aufgebraucht ist, sinkt Emax. ==Die neuromuskuläre Endplatte ist das klassische Beispiel: Schwäche erst bei ca. 70–75 % Rezeptorbesetzung.==",
      { h: "Kombinationen und Gewöhnung" },
      { ul: [
        "**Additiv**: Wirkung = Summe (zwei Volatila; MAC-Anteile addieren sich).",
        "**Synergistisch (überadditiv)**: Propofol + Opioid, Propofol + Midazolam – schon geringe Opioidmengen senken den Hypnotikabedarf deutlich.",
        "**Toleranz**: langsam abnehmende Wirkung (Opioide über Tage); **Tachyphylaxie**: rascher Wirkverlust nach wenigen Gaben (Ephedrin, Desmopressin – Speicher leer).",
        "Rezeptorregulation (→ Kapitel GPCR) erklärt Toleranz und Rebound."
      ] }
    ],
    merke: [
      "Affinität (Kd) ≠ intrinsische Aktivität; Potenz (EC50) ≠ Wirksamkeit (Emax).",
      "Kompetitiver Antagonist: Rechtsverschiebung, Emax gleich, überwindbar; nicht-kompetitiv: Emax ↓.",
      "Partieller Agonist mit hoher Affinität kann volle Agonisten verdrängen (Buprenorphin).",
      "Rezeptorreserve: volle Wirkung bei Teilbesetzung (Endplatte).",
      "Synergismus (Propofol + Opioid), Toleranz, Tachyphylaxie (Ephedrin, Desmopressin)."
    ],
    warum: [
      { q: "Warum schwächt Buprenorphin die Wirkung von zusätzlich gegebenem Fentanyl ab?", a: "Buprenorphin hat eine sehr hohe Affinität (bindet fester als Fentanyl) und dissoziiert langsam, aktiviert den µ-Rezeptor aber nur teilweise. Es besetzt Rezeptoren, die Fentanyl voll aktivieren könnte – die Gesamtwirkung bleibt unter der eines reinen vollen Agonisten. In der Praxis wirken zusätzliche Opioide trotzdem, weil nicht alle Rezeptoren besetzt sind." },
      { q: "Warum ist die Wirkung von Neostigmin begrenzt, die von Naloxon aber nicht im gleichen Sinn?", a: "Naloxon ist ein kompetitiver Antagonist mit höherer Affinität als viele Opioide – mit genug Naloxon wird jedes Opioid verdrängt. Neostigmin erhöht nur die Acetylcholinmenge; die Enzymhemmung hat ein Maximum, mehr ACh ist nicht erzielbar (Deckeneffekt)." }
    ],
    klinik: [
      "MAC als quantale Dosis-Wirkungs-Größe: MAC-awake < MAC < MAC-BAR (Unterdrückung der Kreislaufreaktion).",
      "Synergismus nutzen (Opioid reduziert Propofol-/Volatilabedarf), aber Atemdepression addiert sich ebenso.",
      "Substanzen mit enger therapeutischer Breite perioperativ besonders überwachen (Digoxin, Theophyllin, Lithium, Phenytoin)."
    ],
    selbsttest: [
      { q: "Spezialwissen Pharmakologie: Unterscheide Affinität, intrinsische Aktivität, Potenz und Wirksamkeit.", a: "Affinität: Bindungsstärke (Kd). Intrinsische Aktivität: Ausmaß der Aktivierung (voll 1, partiell 0–1, Antagonist 0, invers <0). Potenz: benötigte Dosis (EC50). Wirksamkeit: maximaler Effekt (Emax)." },
      { q: "Spezialwissen Pharmakologie: Wie verändert ein kompetitiver bzw. nicht-kompetitiver Antagonist die Dosis-Wirkungs-Kurve?", a: "Kompetitiv: parallele Rechtsverschiebung, Emax unverändert (überwindbar). Nicht-kompetitiv/irreversibel: Emax sinkt (nicht überwindbar), bei Rezeptorreserve zunächst Rechtsverschiebung." },
      { q: "Spezialwissen Pharmakologie: Was ist ein inverser Agonist, was ein allosterischer Modulator?", a: "Inverser Agonist: senkt die spontane Grundaktivität eines Rezeptors (viele H1-Antihistaminika). Allosterischer Modulator: bindet an anderer Stelle und verstärkt (PAM, Benzodiazepine) oder schwächt (NAM) die Agonistwirkung." },
      { q: "Spezialwissen Pharmakologie: Was ist eine Rezeptorreserve? Beispiel?", a: "Maximaler Effekt schon bei Besetzung eines Teils der Rezeptoren; Beispiel neuromuskuläre Endplatte (Schwäche erst ab ca. 70–75 % Besetzung)." },
      { q: "Spezialwissen Pharmakologie: Unterscheide funktionellen und chemischen Antagonismus.", a: "Funktionell: Gegenwirkung über einen anderen Rezeptor/Weg (Adrenalin gegen Histaminwirkung). Chemisch: direkte Bindung und Inaktivierung (Protamin–Heparin, Sugammadex–Rocuronium)." }
    ]
  });

  CH.push({
    id: "pharmakokinetik",
    level: "System",
    title: "Pharmakokinetik: Verteilung, Clearance, Halbwertszeit und Wirkort",
    leitfrage: "Warum wacht ein Patient nach einer Einzeldosis Propofol nach Minuten auf, obwohl die Eliminationshalbwertszeit Stunden beträgt?",
    einfach: "Pharmakokinetik beschreibt, was der Körper mit dem Medikament macht: aufnehmen, verteilen, abbauen, ausscheiden. Nach einer Einzeldosis eines fettlöslichen Narkosemittels sinkt die Konzentration im Gehirn vor allem deshalb, weil sich das Mittel in Muskel und Fett verteilt – nicht, weil es schon abgebaut ist. Erst wenn diese Speicher voll sind (lange Infusion), bestimmt der Abbau das Aufwachen.",
    body: [
      { h: "Die Grundgrößen" },
      { formel: "Vd = Dosis / Anfangskonzentration (C₀)", erkl: "Verteilungsvolumen: fiktives Volumen, in dem sich die Dosis verteilen müsste. Lipophile oder gewebsgebundene Stoffe haben ein Vd weit über dem Körpervolumen (Fentanyl ca. 4 l/kg)." },
      { formel: "Clearance = Eliminationsrate / Plasmakonzentration", erkl: "Plasmavolumen, das pro Zeit vollständig von Wirkstoff befreit wird (ml/min) – Summe aus Leber-, Nieren- und anderer Clearance." },
      { formel: "t½ = 0,693 × Vd / Clearance", erkl: "Halbwertszeit hängt von Verteilung UND Clearance ab: großes Vd oder kleine Clearance → lange Halbwertszeit." },
      { table: { head: ["Konsequenz", "Formel/Regel"], rows: [
        ["Steady State", "nach ca. 4–5 Halbwertszeiten (unabhängig von der Dosis)"],
        ["Aufsättigungsdosis", "Vd × Zielkonzentration (hängt vom Verteilungsvolumen ab)"],
        ["Erhaltungsdosis/-rate", "Clearance × Zielkonzentration (hängt von der Clearance ab)"],
        ["Kinetik 1. Ordnung", "pro Zeit wird ein konstanter ANTEIL eliminiert (die meisten Medikamente)"],
        ["Kinetik 0. Ordnung", "pro Zeit wird eine konstante MENGE eliminiert, Enzyme gesättigt (Ethanol, Phenytoin, hochdosiert Thiopental/ASS) → kleine Dosiserhöhung, großer Spiegelanstieg"]
      ] } },
      { h: "Aufnahme und Verteilung" },
      { ul: [
        "**Bioverfügbarkeit**: Anteil, der unverändert den Kreislauf erreicht (i.v. 100 %); oral vermindert durch Resorption und **First-Pass-Effekt** in Darm und Leber.",
        "**Proteinbindung**: Nur der freie Anteil wirkt und wird filtriert; saure Pharmaka binden v.a. an Albumin, basische an saures α1-Glykoprotein (steigt nach OP/Trauma).",
        "**Ionisation**: Nur die ungeladene Form passiert Membranen (Henderson-Hasselbalch, pKa). ==Ion Trapping==: In saurer Umgebung werden Basen geladen und 'gefangen' – Lokalanästhetika im entzündeten Gewebe, Lokalanästhetika und Opioide im azidotischen Fetus, Alkalisierung des Urins bei Salicylatvergiftung.",
        "**Blut-Hirn-Schranke**: Lipophilie und geringe Ladung erleichtern den Übertritt; P-Glykoprotein pumpt manche Stoffe zurück."
      ] },
      { h: "Kompartimente und Umverteilung" },
      { kette: [
        "Bolus i.v. → hohe Konzentration im zentralen Kompartiment (Blut, gut durchblutete Organe: Gehirn, Herz)",
        "Schnelle Anflutung im Gehirn → Wirkbeginn",
        "Umverteilung in Muskel und später Fett → Plasmaspiegel fällt rasch",
        "Konzentration im Gehirn folgt → ==Erwachen durch Umverteilung, nicht durch Abbau==",
        "Nach langer Infusion sind die peripheren Speicher gefüllt → sie geben Wirkstoff zurück → Erwachen hängt von der Elimination ab"
      ], titel: "Warum Einzeldosis und Dauerinfusion verschieden enden" },
      "Die **kontextsensitive Halbwertszeit** beschreibt genau das: die Zeit bis zum Abfall der Plasmakonzentration um 50 % nach Ende einer Infusion bestimmter Dauer. Sie steigt bei Fentanyl mit der Infusionsdauer stark an, bei Propofol mäßig, bei Remifentanil praktisch nicht (Abbau durch Esterasen).",
      { h: "Wirkort (Effektkompartiment)" },
      "Zwischen Plasma und Wirkort (Gehirn) gibt es eine Zeitverzögerung, beschrieben durch die Konstante **ke0**. Zeit bis zum Wirkmaximum nach Bolus etwa: Remifentanil und Alfentanil ca. 1–1,5 min, Fentanyl ca. 3–5 min, Morphin ca. 15–20 min. Zielgesteuerte Infusionssysteme (TCI) nutzen Kompartimentmodelle (z.B. Marsh, Schnider, Eleveld für Propofol; Minto für Remifentanil), um eine Zielkonzentration im Plasma oder am Wirkort einzustellen.",
      { h: "Besondere Patientengruppen" },
      { ul: [
        "**Alter**: mehr Fett, weniger Wasser und Muskel, geringere Clearance → längere Wirkung lipophiler Stoffe, höhere Spitzenspiegel hydrophiler.",
        "**Adipositas**: Dosisbezug je nach Lipophilie (fettfreie Masse, ideales, adaptiertes oder tatsächliches Gewicht).",
        "**Säuglinge**: größeres Extrazellulärvolumen (größeres Vd hydrophiler Stoffe), unreife Leber- und Nierenfunktion.",
        "**Leber-/Niereninsuffizienz, Hypalbuminämie, Schock**: veränderte Clearance, Verteilung und freier Anteil."
      ] }
    ],
    merke: [
      "Vd = Dosis/C₀; Clearance = Elimination/Konzentration; t½ = 0,693 × Vd/CL.",
      "Steady State nach 4–5 Halbwertszeiten; Aufsättigung über Vd, Erhaltung über Clearance.",
      "1. Ordnung: konstanter Anteil; 0. Ordnung: konstante Menge (Ethanol, Phenytoin).",
      "Nur freie, ungeladene Form passiert Membranen; Ion Trapping in saurem Milieu.",
      "Einzeldosis endet durch Umverteilung; kontextsensitive Halbwertszeit; ke0 = Verzögerung zum Wirkort."
    ],
    warum: [
      { q: "Warum braucht ein Patient mit großem Verteilungsvolumen eine höhere Aufsättigungsdosis, aber nicht automatisch eine höhere Erhaltungsdosis?", a: "Die Aufsättigungsdosis muss das ganze Verteilungsvolumen auffüllen (Vd × Zielkonzentration). Im Steady State muss pro Zeit nur so viel nachgeführt werden, wie eliminiert wird – das bestimmt die Clearance, nicht das Vd." },
      { q: "Warum dauert es nach einer mehrstündigen Fentanyl-Infusion so lange bis zur Spontanatmung, nach Remifentanil nicht?", a: "Fentanyl hat sich in Muskel und Fett angereichert und strömt nach Infusionsende zurück ins Blut (hohe kontextsensitive Halbwertszeit). Remifentanil wird unabhängig von der Infusionsdauer sofort durch Esterasen abgebaut." },
      { q: "Warum ist eine fetale Azidose bei Lokalanästhetika-Exposition gefährlich?", a: "Lokalanästhetika sind schwache Basen. Im sauren fetalen Blut wird mehr Substanz protoniert und kann nicht zurück über die Plazenta – sie reichert sich im Fetus an (Ion Trapping)." }
    ],
    klinik: [
      "Wirkmaximum abwarten, bevor nachdosiert wird (ke0): bei Morphin 15–20 min, bei Fentanyl wenige Minuten.",
      "Bei Langzeitsedierung Substanzen mit stabiler kontextsensitiver Halbwertszeit bevorzugen.",
      "Hypalbuminämie erhöht den freien Anteil stark gebundener Stoffe (Phenytoin-Toxizität trotz 'normalem' Gesamtspiegel)."
    ],
    selbsttest: [
      { q: "Spezialwissen Pharmakologie: Nenne die Beziehung zwischen Halbwertszeit, Verteilungsvolumen und Clearance.", a: "t½ = 0,693 × Vd / Clearance." },
      { q: "Spezialwissen Pharmakologie: Wovon hängen Aufsättigungs- und Erhaltungsdosis ab?", a: "Aufsättigungsdosis = Vd × Zielkonzentration; Erhaltungsrate = Clearance × Zielkonzentration. Steady State nach 4–5 Halbwertszeiten." },
      { q: "Spezialwissen Pharmakologie: Was ist Ion Trapping? Nenne Beispiele.", a: "In einem Kompartiment mit anderem pH wird ein Wirkstoff ionisiert und kann die Membran nicht mehr passieren: Lokalanästhetika im entzündeten Gewebe, Lokalanästhetika/Opioide beim azidotischen Fetus, Alkalisierung des Urins bei Salicylaten." },
      { q: "Spezialwissen Pharmakologie: Warum endet die Wirkung einer Propofol-Einzeldosis rasch?", a: "Durch Umverteilung aus dem zentralen Kompartiment (Gehirn) in Muskel und Fett, nicht durch Elimination." },
      { q: "Spezialwissen Pharmakologie: Was beschreibt ke0 und wie lange dauert es bis zum Wirkmaximum gängiger Opioide?", a: "Geschwindigkeitskonstante des Übergangs Plasma → Wirkort; Wirkmaximum ca. 1–1,5 min (Remifentanil, Alfentanil), 3–5 min (Fentanyl), 15–20 min (Morphin)." }
    ]
  });

  // Testfragen zu den Grundlagen (Modul Pharmakologie, Unterthema PK/PD)
  const M = "pharmakologie", U = "pk-pd";
  Array.prototype.push.apply(window.MCQ, [
    { id: "mcq-pg-001", module: M, subtopic: U,
      question: "Welcher Rezeptor ist an ein Gq-Protein gekoppelt?",
      options: ["β1-Adrenozeptor", "α2-Adrenozeptor", "µ-Opioidrezeptor", "α1-Adrenozeptor", "Muskarinischer M2-Rezeptor"],
      correct: 3,
      explanation: "α1 → Gq → Phospholipase C → IP₃/DAG → Ca²⁺ ↑ (Vasokonstriktion). β1 ist Gs-, α2, µ und M2 sind Gi-gekoppelt." },
    { id: "mcq-pg-002", module: M, subtopic: U,
      question: "Welcher zweite Botenstoff vermittelt die Freisetzung von Calcium aus dem endoplasmatischen/sarkoplasmatischen Retikulum nach Gq-Aktivierung?",
      options: ["cAMP", "cGMP", "IP₃", "DAG", "NO"],
      correct: 2,
      explanation: "Phospholipase C spaltet PIP₂ in IP₃ (öffnet IP₃-Rezeptoren → Ca²⁺-Freisetzung) und DAG (aktiviert Proteinkinase C)." },
    { id: "mcq-pg-003", module: M, subtopic: U,
      question: "Über welchen Mechanismus hemmen Opioide präsynaptisch die Freisetzung von Glutamat und Substanz P?",
      options: ["Öffnung von Chloridkanälen", "Gi-vermittelte Schließung spannungsabhängiger Ca²⁺-Kanäle", "Blockade von Na⁺-Kanälen", "Gs-vermittelter cAMP-Anstieg", "Hemmung der Acetylcholinesterase"],
      correct: 1,
      explanation: "µ-Rezeptoren sind Gi/o-gekoppelt: βγ-Untereinheiten schließen präsynaptische Ca²⁺-Kanäle (weniger Transmitterfreisetzung) und öffnen postsynaptisch GIRK-K⁺-Kanäle (Hyperpolarisation)." },
    { id: "mcq-pg-004", module: M, subtopic: U,
      question: "Ein Patient unter langjähriger Betablocker-Therapie entwickelt nach abruptem Absetzen eine ausgeprägte Tachykardie und Angina. Welcher Mechanismus erklärt das am besten?",
      options: ["Desensibilisierung durch β-Arrestin", "Hochregulation der β-Rezeptoren unter Dauerblockade", "Enzyminduktion", "Bildung aktiver Metaboliten", "Kompetitiver Antagonismus"],
      correct: 1,
      explanation: "Dauerhafte Blockade führt zu mehr Rezeptoren; nach dem Absetzen treffen Katecholamine auf eine erhöhte Rezeptorzahl → Rebound." },
    { id: "mcq-pg-005", module: M, subtopic: U,
      question: "Wie verändert ein kompetitiver, reversibler Antagonist die Dosis-Wirkungs-Kurve eines Agonisten?",
      options: ["Senkt die maximale Wirkung, keine Verschiebung", "Parallele Rechtsverschiebung, maximale Wirkung unverändert", "Linksverschiebung", "Macht die Kurve flacher ohne Verschiebung", "Keine Veränderung"],
      correct: 1,
      explanation: "Mehr Agonist verdrängt den Antagonisten (überwindbar): EC50 steigt, Emax bleibt. Nicht-kompetitive/irreversible Antagonisten senken Emax." },
    { id: "mcq-pg-006", module: M, subtopic: U,
      question: "Welche Aussage zu Benzodiazepinen am GABA-A-Rezeptor ist richtig?",
      options: ["Sie verlängern die Öffnungsdauer und öffnen den Kanal auch ohne GABA", "Sie erhöhen die Öffnungshäufigkeit und benötigen GABA (Deckeneffekt)", "Sie blockieren den Chloridkanal", "Sie wirken über ein Gi-Protein", "Sie binden an die GABA-Bindungsstelle selbst"],
      correct: 1,
      explanation: "Benzodiazepine sind positive allosterische Modulatoren an der α/γ2-Grenzfläche; ohne GABA keine Öffnung – daher Deckeneffekt. Barbiturate und Propofol verlängern die Öffnung und öffnen hochdosiert direkt." },
    { id: "mcq-pg-007", module: M, subtopic: U,
      question: "Warum wirkt ASS trotz kurzer Plasmahalbwertszeit mehrere Tage auf die Thrombozytenfunktion?",
      options: ["Speicherung im Fettgewebe", "Aktive Metaboliten mit langer Halbwertszeit", "Irreversible Acetylierung der COX-1 in kernlosen Thrombozyten", "Enterohepatischer Kreislauf", "Hohe Proteinbindung"],
      correct: 2,
      explanation: "Bei irreversiblen Hemmern bestimmt die Neubildung des Enzyms bzw. der Zellen die Wirkdauer (Plättchen ca. 7–10 Tage)." },
    { id: "mcq-pg-008", module: M, subtopic: U,
      question: "Wovon hängt die Erhaltungsdosisrate zur Aufrechterhaltung einer Zielkonzentration im Steady State ab?",
      options: ["Vom Verteilungsvolumen", "Von der Clearance", "Von der Bioverfügbarkeit allein", "Von der ke0", "Von der Proteinbindung allein"],
      correct: 1,
      explanation: "Erhaltungsrate = Clearance × Zielkonzentration; die Aufsättigungsdosis hängt vom Verteilungsvolumen ab (Vd × Zielkonzentration)." },
    { id: "mcq-pg-009", module: M, subtopic: U,
      question: "Über welchen Rezeptortyp wirken Glukokortikoide wie Dexamethason hauptsächlich, und was folgt daraus?",
      options: ["Ligandengesteuerter Ionenkanal – Wirkung in Millisekunden", "Gs-gekoppelter Rezeptor – Wirkung in Sekunden", "Kernrezeptor – Wirkung nach Stunden über Genexpression", "Tyrosinkinase – Wirkung in Minuten", "Kein Rezeptor, physikochemische Wirkung"],
      correct: 2,
      explanation: "Der Glukokortikoid-Rezeptor reguliert nach Kerntranslokation Gene (Transaktivation/-repression); daher verzögerter Wirkbeginn – PONV-Prophylaxe bei Einleitung geben." },
    { id: "mcq-pg-010", module: M, subtopic: U,
      question: "Welches Medikament erhöht cAMP im Herzmuskel unabhängig vom β-Adrenozeptor über einen eigenen Gs-gekoppelten Rezeptor?",
      options: ["Milrinon", "Glukagon", "Digoxin", "Levosimendan", "Dobutamin"],
      correct: 1,
      explanation: "Glukagon aktiviert den Glukagon-Rezeptor (Gs) → cAMP ↑ – Antidot bei Betablocker-Vergiftung. Milrinon erhöht cAMP ebenfalls rezeptorunabhängig, aber durch PDE3-Hemmung, nicht über einen Rezeptor." }
  ]);

  window.__addSpezialOrgan({
    id: "pharmakologie",
    title: "Pharmakologie-Grundlagen",
    subtitle: "Rezeptorfamilien, G-Protein-Signalwege, Ionenkanäle, Enzyme und Transporter, Pharmakodynamik und Pharmakokinetik",
    module: "pharmakologie",
    subtopic: "pk-pd",
    chapters: CH,
    sources: [
      "Brunton LL, Knollmann BC (Hrsg.). Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14. Aufl. McGraw Hill 2023 (Kapitel Pharmakodynamik, Pharmakokinetik).",
      "Rang HP, Ritter JM, Flower RJ, Henderson G. Rang & Dale's Pharmacology, 10. Aufl. Elsevier 2023.",
      "Flood P, Rathmell JP, Urman RD (Hrsg.). Stoelting's Pharmacology and Physiology in Anesthetic Practice, 6. Aufl. 2021.",
      "Rosenbaum DM, Rasmussen SG, Kobilka BK. The structure and function of G-protein-coupled receptors. Nature 2009;459:356–363.",
      "Alexander SPH, et al. The Concise Guide to PHARMACOLOGY 2023/24: G protein-coupled receptors; Ion channels. Br J Pharmacol 2023;180 Suppl 2.",
      "Hughes MA, Glass PS, Jacobs JR. Context-sensitive half-time in multicompartment pharmacokinetic models for intravenous anesthetic drugs. Anesthesiology 1992;76:334–341.",
      "Hemmings HC Jr, Riegelhaupt PM, Kelz MB, et al. Towards a comprehensive understanding of anesthetic mechanisms of action: a decade of discovery. Trends Pharmacol Sci 2019;40:464–481."
    ]
  });
})();
