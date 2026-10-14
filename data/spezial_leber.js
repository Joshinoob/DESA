// Spezialwissen Leber – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const CH = [];

  CH.push({
    id: "aufbau",
    level: "Organ",
    title: "Aufbau, doppelte Blutversorgung und Zonen",
    leitfrage: "Warum wird die Leber zu drei Vierteln mit sauerstoffarmem Blut versorgt – und warum stirbt bei Schock zuerst das Gewebe um die Zentralvene?",
    einfach: "Die Leber bekommt Blut aus zwei Quellen: aus der Pfortader (Blut aus dem Darm mit Nährstoffen, aber wenig Sauerstoff) und aus der Leberarterie (sauerstoffreich). Das Blut fließt durch feine Kanäle an den Leberzellen vorbei zur Zentralvene. Die Zellen am Ende dieses Weges bekommen den geringsten Sauerstoff – sie leiden bei Kreislaufschock zuerst.",
    body: [
      { h: "Kenngrößen" },
      { table: { head: ["Größe", "Wert (ca.)"], rows: [
        ["Gewicht", "1,5 kg (ca. 2 % des Körpergewichts)"],
        ["Leberdurchblutung", "ca. 1,5 l/min (ca. 25 % des HZV)"],
        ["Anteil Pfortader am Blutfluss", "ca. 70–75 %"],
        ["Anteil A. hepatica am Blutfluss", "ca. 25–30 %"],
        ["Anteil an der O₂-Versorgung", "je ca. 50 % (Pfortaderblut sauerstoffärmer)"],
        ["Blutreservoir", "ca. 10–15 % des Blutvolumens, mobilisierbar"]
      ] } },
      { h: "Leberläppchen und Azinus" },
      "Klassisch sechseckige **Leberläppchen** mit Zentralvene; an den Ecken liegen die **Glisson-Trias** (Ast der Pfortader, der Leberarterie und Gallengang). Blut aus beiden Gefäßen mischt sich in den **Sinusoiden** und fließt zur Zentralvene; Galle fließt in Gegenrichtung zu den Gallengängen. Funktionell beschreibt der **Azinus** (nach Rappaport) drei Zonen entlang dieses Blutstroms:",
      { table: { head: ["Zone", "Lage", "Besonderheit"], rows: [
        ["1 (periportal)", "nahe Trias", "O₂-reich: Glukoneogenese, Harnstoffzyklus, Oxidation; geschädigt v.a. durch direkt toxische Stoffe im Zustrom"],
        ["2", "Mitte", "Übergang"],
        ["3 (perizentral)", "nahe Zentralvene", "O₂-arm, viel CYP450 (v.a. CYP2E1): Biotransformation; ==zuerst geschädigt bei Hypoxie/Schock (ischämische Hepatitis) und Paracetamol-Vergiftung=="]
      ] } },
      { h: "Zellen" },
      { ul: [
        "**Hepatozyten** (ca. 80 % des Volumens): Stoffwechsel, Synthese, Entgiftung, Galle.",
        "**Sinusoidale Endothelzellen** mit offenen Poren (Fenestrae), keine Basalmembran → Plasma kommt direkt an die Hepatozyten (Disse-Raum).",
        "**Kupffer-Zellen**: ortsständige Fresszellen – filtern Bakterien und Endotoxin aus dem Pfortaderblut.",
        "**Sternzellen (Ito-Zellen)**: speichern Vitamin A; bei Schädigung werden sie zu kollagenbildenden Zellen → **Fibrose/Zirrhose**."
      ] },
      { h: "Hepatic Arterial Buffer Response" },
      { kette: [
        "Pfortaderfluss sinkt (z.B. Pneumoperitoneum, Splanchnikus-Vasokonstriktion)",
        "Adenosin wird weniger ausgewaschen und reichert sich um die Arteriolen an",
        "Arteriolen erweitern sich → arterieller Fluss steigt",
        "Gesamtfluss wird teilweise kompensiert (nicht umgekehrt: die Pfortader kann einen arteriellen Abfall nicht ausgleichen)"
      ], titel: "Pufferantwort der Leberarterie" },
      "Die Pfortader selbst hat keine Autoregulation; ihr Fluss hängt von der Durchblutung von Darm und Milz ab. ==Narkose, Beatmung mit hohem Druck (venöser Rückstau), Vasopressoren und Pneumoperitoneum senken die Leberdurchblutung.=="
    ],
    merke: [
      "Leber: ca. 25 % HZV; Pfortader 70–75 % des Flusses, aber nur ca. 50 % des O₂.",
      "Zone 3 (perizentral): wenig O₂, viel CYP → zuerst geschädigt bei Schock und Paracetamol.",
      "Kupffer-Zellen filtern Endotoxin; Sternzellen machen Fibrose.",
      "Arterielle Pufferantwort (Adenosin) gleicht Abfall des Pfortaderflusses teilweise aus.",
      "Pfortader ohne Autoregulation."
    ],
    warum: [
      { q: "Warum ist eine 'Schockleber' im Zentrum des Läppchens am stärksten geschädigt?", a: "Das Blut gibt auf dem Weg von der Trias zur Zentralvene schrittweise Sauerstoff ab. Zone 3 bekommt das sauerstoffärmste Blut – sinkt die Durchblutung, fällt dort die Versorgung zuerst unter die kritische Schwelle." },
      { q: "Warum kann die Pfortader einen Abfall des arteriellen Flusses nicht ausgleichen?", a: "Die Pfortader hat keine eigene Regulation; ihr Fluss wird von Darm und Milz bestimmt. Nur die Arterie kann über Adenosin aktiv reagieren – die Pufferantwort funktioniert daher nur in eine Richtung." }
    ],
    klinik: [
      "Ischämische Hepatitis (Schockleber): Transaminasen steigen nach Kreislaufversagen rasch auf das Vielfache und fallen nach Stabilisierung schnell ab.",
      "Hoher PEEP und Rechtsherzversagen stauen die Lebervenen → Leberfunktion ↓ ('Stauungsleber').",
      "Bei Leberresektion wird der Zustrom zeitweise abgeklemmt (Pringle-Manöver); niedriger ZVD reduziert den Blutverlust aus den Lebervenen."
    ],
    selbsttest: [
      { q: "Spezialwissen Leber: Wie verteilt sich die Leberdurchblutung auf Pfortader und A. hepatica?", a: "Ca. 70–75 % Pfortader, 25–30 % A. hepatica (Fluss); Sauerstoffversorgung je ca. 50 %. Gesamtfluss ca. 1,5 l/min (25 % HZV)." },
      { q: "Spezialwissen Leber: Welche Azinuszone ist bei Schock und Paracetamol-Vergiftung zuerst geschädigt und warum?", a: "Zone 3 (perizentral): geringster Sauerstoffgehalt und höchste CYP450-Aktivität (toxischer Paracetamol-Metabolit entsteht dort)." },
      { q: "Spezialwissen Leber: Was ist die Hepatic Arterial Buffer Response?", a: "Sinkt der Pfortaderfluss, reichert sich Adenosin an und erweitert die Leberarteriolen → arterieller Fluss steigt kompensatorisch; umgekehrt gibt es keine Kompensation." },
      { q: "Spezialwissen Leber: Welche Aufgaben haben Kupffer- und Sternzellen?", a: "Kupffer-Zellen: Makrophagen, filtern Bakterien/Endotoxin aus dem Pfortaderblut. Sternzellen: speichern Vitamin A, werden bei Schädigung zu Fibroblasten-ähnlichen Zellen → Fibrose." },
      { q: "Spezialwissen Leber: Welche perioperativen Faktoren senken die Leberdurchblutung?", a: "Hypotonie/Hypovolämie, Vasopressoren (Splanchnikus), Pneumoperitoneum, hohe Beatmungsdrücke/PEEP und Rechtsherzversagen (venöser Rückstau), Narkosemittel." }
    ]
  });

  CH.push({
    id: "stoffwechsel",
    level: "Zelle",
    title: "Zucker, Fett, Eiweiß und Ammoniak",
    leitfrage: "Wie hält die Leber den Blutzucker während einer langen Nüchternphase stabil – und was passiert mit dem Stickstoff aus abgebautem Eiweiß?",
    einfach: "Nach dem Essen speichert die Leber Zucker als Glykogen. In Nüchternphasen gibt sie ihn wieder ab und stellt, wenn der Speicher leer ist, aus Milchsäure, Eiweißbausteinen und Fett-Bestandteilen neuen Zucker her. Beim Eiweißabbau entsteht giftiges Ammoniak; die Leber baut es zu Harnstoff um, der über die Niere ausgeschieden wird.",
    body: [
      { h: "Glukose" },
      { kette: [
        "Nach dem Essen (Insulin ↑): Glukose → Glykogen (Speicher ca. 70–100 g) und Fett",
        "Nüchtern (Glukagon, Cortisol, Adrenalin ↑): Glykogenabbau → Glukose ins Blut",
        "Nach ca. 12–24 h: Glykogen weitgehend erschöpft → Glukoneogenese aus Laktat (Cori-Zyklus), Alanin, Glycerin",
        "Längeres Fasten: Ketonkörper aus Fettsäuren → Gehirn deckt einen Teil seines Bedarfs damit, Muskeleiweiß wird geschont"
      ], titel: "Blutzucker über die Zeit" },
      "Nur Leber (und Niere) besitzen **Glukose-6-Phosphatase** und können freie Glukose ins Blut abgeben. Muskelglykogen dient nur dem Muskel selbst.",
      { h: "Laktat" },
      "Die Leber verstoffwechselt den Großteil des Laktats (ca. 50–70 %) zu Glukose oder CO₂. ==Bei Minderdurchblutung oder Leberversagen sinkt die Laktat-Clearance – ein erhöhtes Laktat entsteht dann nicht nur durch Mehrproduktion.== Ringer-Laktat ist auch bei Leberinsuffizienz meist unproblematisch, Laktatwerte sind aber schwerer zu interpretieren.",
      { h: "Fett" },
      "Die Leber bildet Fettsäuren, Triglyceride, Cholesterin und Lipoproteine (VLDL), oxidiert Fettsäuren und bildet **Ketonkörper** (Acetoacetat, β-Hydroxybutyrat), die sie selbst nicht nutzen kann. Insulinmangel + Glukagon → ungebremste Ketogenese → diabetische Ketoazidose.",
      { h: "Eiweiß und Ammoniak" },
      { kette: [
        "Aminosäure-Abbau (und Bakterien im Darm) → Ammoniak (NH₃)",
        "Leber: Harnstoffzyklus (periportal) bindet NH₃ zu Harnstoff → Ausscheidung über die Niere",
        "Perizentral: Glutamin-Synthetase bindet Rest-NH₃ an Glutamat (Glutamin)",
        "Leberversagen/portosystemischer Shunt → NH₃ gelangt ins Gehirn → Astrozyten bilden Glutamin → Schwellung → hepatische Enzephalopathie"
      ], titel: "Entgiftung des Stickstoffs" },
      "Auslöser einer Enzephalopathie: gastrointestinale Blutung (Eiweißlast), Infektion, Hypokaliämie/Alkalose (mehr NH₃ statt NH₄⁺ – NH₃ passiert die Blut-Hirn-Schranke), Benzodiazepine, Opioide, Dehydratation, Obstipation.",
      { h: "Weitere Aufgaben" },
      { ul: [
        "Speicher für Vitamin A, D, B12, Eisen, Kupfer.",
        "Abbau von Hormonen (Insulin, Aldosteron, Östrogene) – bei Zirrhose Gynäkomastie, Spider naevi.",
        "Bildung von Albumin, Gerinnungsfaktoren, Akute-Phase-Proteinen, Pseudocholinesterase (→ Kapitel Synthese)."
      ] }
    ],
    merke: [
      "Glykogen reicht ca. 12–24 h; danach Glukoneogenese (Laktat, Alanin, Glycerin).",
      "Nur Leber und Niere geben freie Glukose ab (Glukose-6-Phosphatase).",
      "Leber klärt ca. 50–70 % des Laktats.",
      "NH₃ → Harnstoff (periportal) bzw. Glutamin (perizentral).",
      "Alkalose und Hypokaliämie verschlimmern die hepatische Enzephalopathie."
    ],
    warum: [
      { q: "Warum fördert eine Alkalose die hepatische Enzephalopathie?", a: "NH₄⁺ steht im Gleichgewicht mit NH₃. Bei höherem pH liegt mehr ungeladenes NH₃ vor; dieses passiert die Blut-Hirn-Schranke leicht. Hypokaliämie steigert zudem die renale Ammoniakbildung." },
      { q: "Warum kann ein Patient mit schwerer Leberinsuffizienz perioperativ hypoglykämisch werden?", a: "Glykogenspeicher sind klein und die Glukoneogenese ist eingeschränkt; zugleich wird Insulin schlechter abgebaut. In Nüchternphasen sinkt der Blutzucker daher schneller." }
    ],
    klinik: [
      "Bei Leberversagen Blutzucker engmaschig messen; Glukosezufuhr einplanen.",
      "Gastrointestinale Blutung bei Zirrhose: Laktulose/Rifaximin, Infektionsprophylaxe, Enzephalopathie erwarten.",
      "Steigendes Laktat trotz stabilen Kreislaufs kann Ausdruck einer eingeschränkten Leberfunktion sein."
    ],
    selbsttest: [
      { q: "Spezialwissen Leber: Wie lange reichen die Glykogenspeicher, und woraus bildet die Leber danach Glukose?", a: "Ca. 12–24 h; danach Glukoneogenese aus Laktat (Cori-Zyklus), Alanin und Glycerin." },
      { q: "Spezialwissen Leber: Warum kann Muskelglykogen den Blutzucker nicht anheben?", a: "Dem Muskel fehlt die Glukose-6-Phosphatase; er kann Glukose nicht frei ins Blut abgeben." },
      { q: "Spezialwissen Leber: Welche Wege entgiften Ammoniak in der Leber?", a: "Periportal Harnstoffzyklus (Harnstoff → Niere), perizentral Glutamin-Synthetase (Bindung an Glutamat)." },
      { q: "Spezialwissen Leber: Nenne Auslöser einer hepatischen Enzephalopathie.", a: "GI-Blutung, Infektion, Hypokaliämie/Alkalose, Benzodiazepine/Opioide, Dehydratation, Obstipation, TIPS/portosystemischer Shunt." },
      { q: "Spezialwissen Leber: Welchen Anteil des Laktats klärt die Leber?", a: "Ca. 50–70 %; Minderdurchblutung oder Leberversagen senken die Laktat-Clearance." }
    ]
  });

  CH.push({
    id: "biotransformation",
    level: "Zelle",
    title: "Biotransformation und hepatische Clearance",
    leitfrage: "Warum hängt die Wirkdauer von Propofol vor allem von der Leberdurchblutung ab, die von Diazepam aber von der Enzymaktivität?",
    einfach: "Die Leber macht fettlösliche Medikamente wasserlöslich, damit Niere oder Galle sie ausscheiden können. Für manche Stoffe ist sie so effizient, dass praktisch alles, was ankommt, sofort abgebaut wird – dann bestimmt der Blutfluss, wie schnell es geht. Für andere arbeitet sie langsam – dann bestimmen die Enzyme und der freie (nicht eiweißgebundene) Anteil das Tempo.",
    body: [
      { h: "Phase I und Phase II" },
      { table: { head: ["Phase", "Reaktion", "Beispiele"], rows: [
        ["I (Funktionalisierung)", "Oxidation, Reduktion, Hydrolyse – v.a. Cytochrom-P450-Enzyme (CYP)", "Fentanyl, Sufentanil, Alfentanil, Midazolam, Lidocain (CYP3A4); Codein → Morphin (CYP2D6)"],
        ["II (Konjugation)", "Kopplung an Glucuronsäure, Sulfat, Glutathion, Acetyl", "Morphin → Morphin-3-/-6-Glucuronid; Propofol-Glucuronid; Paracetamol (Glucuronid/Sulfat)"]
      ] } },
      "Phase-II-Reaktionen bleiben bei Leberzirrhose länger erhalten als Phase I (Oxidation). Lorazepam (nur Glucuronidierung) ist daher bei Leberkranken günstiger als Midazolam oder Diazepam.",
      { h: "Hepatische Clearance" },
      { formel: "Cl(hep) = Q × E", erkl: "Q = Leberblutfluss, E = Extraktionsrate (Anteil, der bei einer Passage entfernt wird, 0–1)." },
      { table: { head: ["Extraktion", "Clearance hängt ab von", "Beispiele"], rows: [
        ["Hoch (E >0,7)", "Leberblutfluss ('flusslimitiert')", "Propofol, Lidocain, Morphin, Fentanyl, Ketamin, Metoprolol"],
        ["Niedrig (E <0,3)", "Enzymaktivität und freiem Anteil ('kapazitätslimitiert')", "Diazepam, Phenytoin, Warfarin, Theophyllin, Methadon"]
      ] } },
      "Für **oral** gegebene Stoffe mit hoher Extraktion ist der **First-Pass-Effekt** groß (geringe Bioverfügbarkeit) – bei Zirrhose mit portosystemischen Shunts steigt die Bioverfügbarkeit deutlich.",
      { h: "Induktion und Hemmung" },
      { ul: [
        "**Induktoren** (mehr Enzym, Wirkung nach Tagen): Rifampicin, Carbamazepin, Phenytoin, Phenobarbital, Johanniskraut, chronischer Alkohol.",
        "**Hemmer** (sofort): Azol-Antimykotika, Makrolide (Clarithromycin, Erythromycin), HIV-Proteasehemmer (Ritonavir), Grapefruit, Amiodaron, Diltiazem/Verapamil.",
        "Klinisch: Midazolam- oder Fentanyl-Wirkung unter CYP3A4-Hemmern stark verlängert; Codein/Tramadol unter CYP2D6-Hemmern (z.B. Fluoxetin, Paroxetin) schwächer wirksam."
      ] },
      { h: "Genetische Varianten" },
      "CYP2D6-Ultraschnell-Metabolisierer bilden aus Codein rasch viel Morphin (Todesfälle bei Kindern nach Tonsillektomie) → Codein bei Kindern <12 Jahren kontraindiziert. **Pseudocholinesterase-Varianten** (Plasma-Enzym, in der Leber gebildet) verlängern die Wirkung von Succinylcholin und Mivacurium (homozygot atypisch: Stunden)."
    ],
    merke: [
      "Phase I: CYP450 (v.a. CYP3A4); Phase II: Konjugation (Glucuronidierung) – bei Zirrhose länger erhalten.",
      "Cl = Q × E: hohe Extraktion → flussabhängig, niedrige → enzym-/proteinbindungsabhängig.",
      "Induktoren wirken nach Tagen, Hemmer sofort.",
      "CYP3A4-Hemmer verlängern Midazolam/Fentanyl; CYP2D6 aktiviert Codein/Tramadol.",
      "Codein bei Kindern <12 Jahren kontraindiziert (Ultraschnell-Metabolisierer)."
    ],
    warum: [
      { q: "Warum wirkt eine Hypoalbuminämie bei Stoffen mit niedriger Extraktion anders als bei hoher?", a: "Bei niedriger Extraktion wird nur der freie Anteil abgebaut; steigt er (wenig Albumin), steigt auch die Clearance – die Gesamtkonzentration sinkt, der freie Spiegel bleibt oft ähnlich. Bei hoher Extraktion entzieht die Leber auch gebundenes Pharmakon; Eiweißbindung spielt kaum eine Rolle, der Fluss entscheidet." },
      { q: "Warum ist Remifentanil bei Leberversagen günstig?", a: "Es wird durch unspezifische Esterasen in Blut und Gewebe abgebaut – unabhängig von Leberdurchblutung und CYP-Enzymen." }
    ],
    klinik: [
      "Bei Patienten unter Clarithromycin/Ritonavir Midazolam vermeiden oder stark reduzieren.",
      "Bei Zirrhose: Cis-/Atracurium, Remifentanil; Benzodiazepine meiden.",
      "Paracetamol bei chronischem Alkoholkonsum/Mangelernährung vorsichtig dosieren (Glutathion ↓, CYP2E1 ↑)."
    ],
    selbsttest: [
      { q: "Spezialwissen Leber: Formel der hepatischen Clearance und Bedeutung der Extraktionsrate?", a: "Cl = Q × E. Hohe Extraktion (>0,7): Clearance flussabhängig (Propofol, Lidocain, Morphin). Niedrige (<0,3): abhängig von Enzymaktivität und freiem Anteil (Diazepam, Phenytoin)." },
      { q: "Spezialwissen Leber: Warum ist Lorazepam bei Leberzirrhose günstiger als Midazolam?", a: "Lorazepam wird nur glucuronidiert (Phase II, bei Zirrhose länger erhalten), Midazolam über CYP3A4 oxidiert (Phase I, früh eingeschränkt)." },
      { q: "Spezialwissen Leber: Nenne CYP3A4-Hemmer mit Anästhesierelevanz.", a: "Clarithromycin/Erythromycin, Azol-Antimykotika, Ritonavir, Diltiazem/Verapamil, Amiodaron, Grapefruit – verlängern Midazolam, Fentanyl, Alfentanil." },
      { q: "Spezialwissen Leber: Warum ist Codein bei Kindern unter 12 Jahren kontraindiziert?", a: "CYP2D6-Ultraschnell-Metabolisierer bilden rasch viel Morphin → Atemdepression bis Tod (v.a. nach Tonsillektomie bei OSAS)." },
      { q: "Spezialwissen Leber: Wie wirken Enzyminduktoren zeitlich und welche sind wichtig?", a: "Wirkung nach Tagen (Enzymneubildung): Rifampicin, Carbamazepin, Phenytoin, Phenobarbital, Johanniskraut, chronischer Alkohol." }
    ]
  });

  CH.push({
    id: "synthese",
    level: "System",
    title: "Synthese: Albumin, Gerinnung, Galle und Bilirubin",
    leitfrage: "Welche Laborwerte zeigen, wie gut die Leber arbeitet – und welche zeigen nur, dass Leberzellen kaputtgehen?",
    einfach: "Transaminasen (ALT, AST) im Blut bedeuten: Leberzellen gehen zugrunde. Wie gut die Leber noch arbeitet, sieht man an dem, was sie herstellt: Albumin (langsam), Gerinnungsfaktoren (schnell), und daran, ob sie Bilirubin noch ausscheidet.",
    body: [
      { h: "Schaden vs. Funktion" },
      { table: { head: ["Parameter", "Aussage", "Zeitverhalten"], rows: [
        ["ALT/AST (Transaminasen)", "Zellschaden (nicht Funktion)", "Anstieg in Stunden"],
        ["Alkalische Phosphatase, GGT", "Cholestase, Gallenwege", "Tage"],
        ["Quick/INR, Faktor V/VII", "Synthese – schnell (Halbwertszeit Faktor VII ca. 4–6 h)", "Stunden"],
        ["Albumin", "Synthese – langsam (Halbwertszeit ca. 20 Tage)", "Wochen; auch durch Entzündung/Verlust gesenkt"],
        ["Bilirubin", "Ausscheidung/Konjugation", "Tage"],
        ["Ammoniak, Laktat, Glukose", "Entgiftung/Stoffwechsel", "Spät beim Leberversagen auffällig"]
      ] } },
      { h: "Albumin" },
      "Ca. **10–15 g/Tag** gebildet; Plasmaspiegel 35–50 g/l. Albumin erzeugt ca. **75–80 % des kolloidosmotischen Drucks**, transportiert Bilirubin, Fettsäuren, Calcium und saure Pharmaka. Niedriges Albumin im Akutfall spiegelt meist Entzündung (Umverteilung, verminderte Synthese als 'negatives Akute-Phase-Protein') und Verdünnung wider, nicht nur Leberfunktion.",
      { h: "Gerinnung" },
      "Die Leber bildet fast alle Gerinnungsfaktoren (Ausnahme: **von-Willebrand-Faktor** aus Endothel/Megakaryozyten; Faktor VIII wird überwiegend in sinusoidalen Endothelzellen gebildet → bei Lebererkrankung normal oder erhöht) sowie die Inhibitoren Antithrombin, Protein C und S und Plasminogen. Vitamin-K-abhängig: **II, VII, IX, X, Protein C und S**. ==Weil Pro- und Antikoagulation gleichermaßen sinken, ist die Gerinnung bei Zirrhose 'rebalanciert' – die INR allein überschätzt das Blutungsrisiko.==",
      { h: "Bilirubin und Galle" },
      { kette: [
        "Abbau von Hämoglobin in Milz/Makrophagen → unkonjugiertes (indirektes) Bilirubin, an Albumin gebunden",
        "Aufnahme in Hepatozyten, Konjugation mit Glucuronsäure (UGT1A1) → konjugiertes (direktes) Bilirubin",
        "Ausscheidung in die Galle (aktiver Transport, geschwindigkeitsbestimmend)",
        "Darm: Bakterien → Urobilinogen (teilweise rückresorbiert, über Urin ausgeschieden), Sterkobilin (braune Stuhlfarbe)"
      ], titel: "Bilirubinstoffwechsel" },
      { ul: [
        "**Prähepatisch** (Hämolyse): unkonjugiertes Bilirubin ↑, Urin ohne Bilirubin.",
        "**Intrahepatisch**: beide Fraktionen ↑ (z.B. Hepatitis, Sepsis-Cholestase); Gilbert-Syndrom: harmlose Konjugationsschwäche (unkonjugiert ↑, v.a. bei Fasten/Stress – häufig perioperativ!).",
        "**Posthepatisch** (Verschluss): konjugiertes Bilirubin ↑, dunkler Urin, heller Stuhl, Juckreiz; Vitamin-K-Mangel durch fehlende Gallensäuren (Fettresorption ↓) → INR ↑, korrigierbar mit Vitamin K i.v."
      ] },
      "Galle (ca. 500–1000 ml/Tag) enthält Gallensäuren zur Fettverdauung. **Opioide** können den Sphinkter Oddi kontrahieren (Druck im Gallengang ↑) – klinisch meist ohne Relevanz, aber bei intraoperativer Cholangiographie zu beachten."
    ],
    merke: [
      "Transaminasen = Zellschaden; INR/Faktor V/VII = schnelle Synthese; Albumin = langsame Synthese.",
      "Albumin: 10–15 g/Tag, Halbwertszeit ca. 20 Tage, 75–80 % des kolloidosmotischen Drucks.",
      "Vitamin-K-abhängig: II, VII, IX, X, Protein C/S; vWF und Faktor VIII nicht aus Hepatozyten.",
      "Gerinnung bei Zirrhose rebalanciert; INR überschätzt das Blutungsrisiko.",
      "Verschlussikterus → Vitamin-K-Mangel, durch Vitamin K i.v. korrigierbar."
    ],
    warum: [
      { q: "Warum ist ein Faktor-VIII-Mangel bei Leberinsuffizienz untypisch?", a: "Faktor VIII wird vorwiegend in sinusoidalen Endothelzellen und anderen Endothelien gebildet, nicht in Hepatozyten; zudem ist sein Trägerprotein vWF bei Zirrhose erhöht. Faktor VIII ist deshalb normal oder hoch." },
      { q: "Warum normalisiert Vitamin K die INR bei Verschlussikterus, aber nicht bei schwerer Zirrhose?", a: "Beim Verschluss fehlt nur das Vitamin (Fettresorption ohne Gallensäuren gestört), die Leberzellen können noch synthetisieren. Bei Zirrhose fehlt die Synthesekapazität selbst." }
    ],
    klinik: [
      "Präoperativer Ikterus: Ursache klären (Hämolyse? Gilbert? Verschluss?) – Konsequenz völlig unterschiedlich.",
      "Faktor V (nicht Vitamin-K-abhängig) und Faktor VII helfen bei akutem Leberversagen zur Prognose (z.B. Clichy-Kriterien).",
      "Albumin-Gabe ist bei Zirrhose mit großvolumiger Parazentese und hepatorenalem Syndrom belegt."
    ],
    selbsttest: [
      { q: "Spezialwissen Leber: Welche Laborwerte zeigen Leberzellschaden, welche Lebersynthese?", a: "Schaden: Transaminasen (ALT/AST). Synthese: Quick/INR, Faktor V/VII (schnell), Albumin (langsam), dazu Bilirubin (Ausscheidung)." },
      { q: "Spezialwissen Leber: Welche Gerinnungsfaktoren sind Vitamin-K-abhängig?", a: "II, VII, IX, X sowie Protein C und S." },
      { q: "Spezialwissen Leber: Was bedeutet 'rebalancierte Hämostase' bei Zirrhose?", a: "Pro- und antikoagulatorische Faktoren sind gleichermaßen vermindert (Faktor VIII/vWF erhöht); Blutungs- und Thromboseneigung koexistieren, die INR überschätzt das Blutungsrisiko." },
      { q: "Spezialwissen Leber: Beschreibe den Bilirubinstoffwechsel.", a: "Häm → unkonjugiertes Bilirubin (an Albumin) → Aufnahme und Glucuronidierung (UGT1A1) in der Leber → Ausscheidung in die Galle → im Darm Urobilinogen/Sterkobilin." },
      { q: "Spezialwissen Leber: Was ist das Gilbert-Syndrom und warum ist es perioperativ relevant?", a: "Harmlose, häufige Konjugationsschwäche (UGT1A1 ↓) mit leicht erhöhtem unkonjugiertem Bilirubin, verstärkt durch Fasten/Stress – kann perioperativ einen Ikterus vortäuschen." }
    ]
  });

  CH.push({
    id: "leberversagen",
    level: "Klinik",
    title: "Zirrhose, portale Hypertension und Leberversagen",
    leitfrage: "Wie führt eine vernarbte Leber zu Blutungen aus der Speiseröhre, Wasser im Bauch und Nierenversagen?",
    einfach: "Wenn die Leber vernarbt, kommt das Blut aus dem Darm schlechter durch. Es staut sich zurück und sucht Umwege – zum Beispiel über Venen an der Speiseröhre, die zu Krampfadern werden und bluten können. Gleichzeitig weiten sich die Gefäße im Bauchraum, der Körper 'denkt', er habe zu wenig Blut, hält Salz und Wasser zurück (Bauchwasser) und drosselt die Nierendurchblutung.",
    body: [
      { h: "Portale Hypertension" },
      "Lebervenendruckgradient (HVPG) normal ca. 1–5 mmHg; **ab ca. 10 mmHg klinisch signifikant** (Varizen, Aszites möglich), ab ca. 12 mmHg Blutungsgefahr der Varizen.",
      { kette: [
        "Fibrose/Knoten + intrahepatische Vasokonstriktion → Widerstand ↑",
        "Splanchnische Vasodilatation (NO u.a.) → mehr Zufluss in die Pfortader",
        "Druck ↑ → Kollateralen (Ösophagus-/Fundusvarizen, Caput medusae, Rektum) und Milzvergrößerung (Thrombozytopenie)",
        "Systemischer Widerstand ↓ → 'effektiv' zu wenig arterielles Volumen",
        "RAAS, Sympathikus, ADH ↑ → Natrium- und Wasserretention → Aszites, Verdünnungshyponatriämie",
        "Starke renale Vasokonstriktion → hepatorenales Syndrom"
      ], titel: "Vom Narbengewebe zum Organversagen" },
      { h: "Komplikationen und Therapieprinzipien" },
      { table: { head: ["Komplikation", "Kern"], rows: [
        ["Varizenblutung", "Restriktive Transfusion (Hb-Ziel ca. 7–8 g/dl), Terlipressin/Somatostatin, Antibiotika-Prophylaxe (Ceftriaxon), Endoskopie mit Gummibandligatur innerhalb 12 h, ggf. früher TIPS"],
        ["Aszites", "Natriumrestriktion, Spironolacton ± Furosemid; Parazentese >5 l → Albumin ca. 6–8 g pro Liter"],
        ["Spontan bakterielle Peritonitis", ">250 neutrophile Granulozyten/µl im Aszites; Antibiotika + Albumin"],
        ["Hepatorenales Syndrom", "Funktionelles Nierenversagen; Terlipressin + Albumin, Lebertransplantation"],
        ["Hepatopulmonales Syndrom", "Intrapulmonale Vasodilatation → Hypoxämie, Platypnoe/Orthodeoxie"],
        ["Portopulmonale Hypertonie", "Pulmonal-arterielle Hypertonie; schwere Formen erhöhen das Transplantationsrisiko stark"]
      ] } },
      { h: "Akutes Leberversagen" },
      "Definition: Gerinnungsstörung (INR ≥1,5) **und** Enzephalopathie bei vorher Lebergesunden innerhalb von <26 Wochen. Häufige Ursachen: Paracetamol, Virushepatitis, andere Medikamente, Autoimmunhepatitis, Ischämie. Hauptgefahren: **Hirnödem** (Ammoniak > ca. 150–200 µmol/l), Infektionen, Hypoglykämie, Kreislaufversagen, Nierenversagen. Paracetamol: N-Acetylcystein; Transplantationszentrum früh kontaktieren (King's-College-Kriterien).",
      { h: "Narkose beim Leberkranken" },
      { ul: [
        "Risiko einschätzen: Child-Pugh, MELD; elektive Eingriffe bei Child C bzw. hohem MELD möglichst vermeiden.",
        "Kreislauf: niedriger Systemwiderstand → Vasopressoren (Noradrenalin, ggf. Vasopressin) früh.",
        "Gerinnung: viskoelastisch steuern, Fibrinogen und Thrombozyten gezielt; kein Plasma 'nach INR'.",
        "Medikamente: Cis-/Atracurium, Remifentanil, Propofol (titriert); Benzodiazepine meiden.",
        "Aszites: erhöhter Bauchdruck, Aspirationsgefahr (RSI), FRC ↓.",
        "Nierenschutz: Hypotonie und Nephrotoxine vermeiden, Albumin nach Indikation."
      ] }
    ],
    merke: [
      "HVPG ≥10 mmHg = klinisch signifikante portale Hypertension.",
      "Splanchnische Vasodilatation → 'effektive' Hypovolämie → RAAS/ADH → Aszites, Hyponatriämie, HRS.",
      "Varizenblutung: Terlipressin, Antibiotika, Ligatur, restriktive Transfusion.",
      "Akutes Leberversagen: INR ≥1,5 + Enzephalopathie <26 Wochen; Hirnödem-Gefahr.",
      "Narkose: Vasopressoren früh, Gerinnung viskoelastisch, organunabhängige Substanzen."
    ],
    warum: [
      { q: "Warum führt eine Überflutung mit Volumen bei Varizenblutung zu mehr Blutung?", a: "Mehr Volumen erhöht den Pfortaderdruck und damit den Druck in den Varizen. Daher restriktive Transfusion (Hb-Ziel ca. 7–8 g/dl) – sie senkte in Studien Nachblutung und Sterblichkeit." },
      { q: "Warum ist das hepatorenale Syndrom ein 'funktionelles' Nierenversagen?", a: "Die Nieren sind strukturell gesund; sie sind nur extrem vasokonstringiert als Folge der systemischen Vasodilatation und Gegenregulation. Nach Lebertransplantation erholt sich die Nierenfunktion meist." }
    ],
    klinik: [
      "Lebertransplantation: drei Phasen (präanhepatisch, anhepatisch, Reperfusion) – Postreperfusionssyndrom beachten.",
      "Paracetamol-Intoxikation: Nomogramm, N-Acetylcystein auch noch spät sinnvoll.",
      "TIPS senkt den Pfortaderdruck, kann aber eine Enzephalopathie verschlechtern."
    ],
    selbsttest: [
      { q: "Spezialwissen Leber: Ab welchem Lebervenendruckgradienten spricht man von klinisch signifikanter portaler Hypertension?", a: "Ab ca. 10 mmHg (normal 1–5 mmHg); Varizenblutungen ab ca. 12 mmHg." },
      { q: "Spezialwissen Leber: Wie entsteht Aszites bei Zirrhose?", a: "Portale Hypertension + splanchnische Vasodilatation → effektive arterielle Hypovolämie → RAAS, Sympathikus, ADH → Natrium-/Wasserretention; dazu Hypalbuminämie." },
      { q: "Spezialwissen Leber: Erstmaßnahmen bei Ösophagusvarizenblutung?", a: "Kreislauf stabilisieren mit restriktiver Transfusion (Hb ca. 7–8 g/dl), Terlipressin oder Somatostatin, Antibiotika-Prophylaxe, Atemwegsschutz, Endoskopie mit Ligatur innerhalb 12 h, ggf. früher TIPS." },
      { q: "Spezialwissen Leber: Definition des akuten Leberversagens?", a: "INR ≥1,5 und hepatische Enzephalopathie bei zuvor Lebergesunden innerhalb von <26 Wochen." },
      { q: "Spezialwissen Leber: Wie viel Albumin nach großvolumiger Parazentese?", a: "Bei >5 l ca. 6–8 g Albumin pro entferntem Liter (Vorbeugung der zirkulatorischen Dysfunktion)." },
      { q: "Spezialwissen Leber: Worauf achtet man bei der Narkose eines Zirrhotikers?", a: "Niedriger Systemwiderstand (Vasopressoren früh), Gerinnung viskoelastisch steuern, Cis-/Atracurium und Remifentanil, Benzodiazepine meiden, Aszites/Aspiration, Nierenschutz, Hypoglykämie." }
    ]
  });

  window.__addSpezialOrgan({
    id: "leber",
    title: "Leber",
    subtitle: "Von Durchblutung und Stoffwechsel über Biotransformation bis zum Leberversagen",
    subtopic: "leber-stoffwechsel",
    chapters: CH,
    sources: [
      "Eipel C, Abshagen K, Vollmar B. Regulation of hepatic blood flow: the hepatic arterial buffer response revisited. World J Gastroenterol 2010;16:6046–6057.",
      "Lautt WW. Hepatic Circulation: Physiology and Pathophysiology. Morgan & Claypool Life Sciences 2009.",
      "Tripodi A, Mannucci PM. The coagulopathy of chronic liver disease. N Engl J Med 2011;365:147–156.",
      "European Association for the Study of the Liver. EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol 2018;69:406–460.",
      "de Franchis R, Bosch J, Garcia-Tsao G, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol 2022;76:959–974.",
      "Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med 2013;368:11–21.",
      "European Association for the Study of the Liver. EASL Clinical Practical Guidelines on the management of acute (fulminant) liver failure. J Hepatol 2017;66:1047–1081.",
      "Mansour A, Watson W, Shayani V, Pickleman J. Abdominal operations in patients with cirrhosis: still a major surgical challenge. Surgery 1997;122:730–735.",
      "Lehrbücher: Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017; Miller's Anesthesia, 10. Aufl. (Kapitel Leberphysiologie und Anästhesie bei Lebererkrankungen)."
    ]
  });
})();
