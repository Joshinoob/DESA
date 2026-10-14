// Spezialwissen Gehirn – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const CH = [];

  CH.push({
    id: "neuron",
    level: "Zelle",
    title: "Nervenzelle, Synapse und Energiebedarf",
    leitfrage: "Warum verbraucht ein Organ mit 2 % des Körpergewichts rund 20 % des Sauerstoffs – und hat trotzdem praktisch keine Reserve?",
    einfach: "Das Gehirn besteht aus Milliarden Nervenzellen, die ständig elektrische Signale weitergeben. Dafür müssen sie Salze gegen ein Gefälle durch ihre Hülle pumpen – das kostet sehr viel Energie. Speicher für Sauerstoff oder Zucker hat das Gehirn kaum. Fällt die Durchblutung aus, ist nach Sekunden das Bewusstsein weg und nach wenigen Minuten beginnen Zellen zu sterben.",
    body: [
      { h: "Bausteine" },
      "Das menschliche Gehirn enthält etwa **86 Milliarden Nervenzellen** (Azevedo et al. 2009) und mindestens ebenso viele **Gliazellen**: Astrozyten (Stoffwechsel, Kaliumpuffer, Glutamat-Aufnahme, Teil der Blut-Hirn-Schranke), Oligodendrozyten (Myelin), Mikroglia (Immunabwehr).",
      { h: "Energiehaushalt" },
      { table: { head: ["Größe", "Wert (ca.)"], rows: [
        ["Anteil am Körpergewicht", "2 % (ca. 1,4 kg)"],
        ["Anteil am Herzzeitvolumen", "ca. 15 % (ca. 750 ml/min)"],
        ["Anteil am O₂-Verbrauch", "ca. 20 %"],
        ["Hirndurchblutung (CBF)", "ca. 50 ml/100 g/min (graue Substanz ca. 80, weiße ca. 20)"],
        ["Sauerstoffverbrauch (CMRO₂)", "ca. 3–3,5 ml O₂/100 g/min"],
        ["Glukoseverbrauch", "ca. 5 mg/100 g/min (ca. 120 g/Tag)"]
      ] } },
      "Etwa **60 % der Energie** dient der elektrischen Arbeit (Wiederherstellung der Ionengradienten nach Aktionspotenzialen und synaptischer Übertragung), der Rest der Zellerhaltung. ==Nur der erste Anteil lässt sich durch Narkosemittel senken – maximal um etwa die Hälfte (bei isoelektrischem EEG).==",
      { kette: [
        "Durchblutungsstopp",
        "Nach ca. 10 s Bewusstlosigkeit (Sauerstoff im Gewebe verbraucht)",
        "Nach ca. 20–40 s isoelektrisches EEG",
        "Nach ca. 3–5 min (Normothermie) Ionenpumpen versagen, Zellen schwellen, irreversible Schäden beginnen"
      ], titel: "Warum das Gehirn keine Reserve hat" },
      { h: "Synapse: Erregung und Hemmung" },
      "Wichtigster **erregender** Transmitter ist **Glutamat** (Rezeptoren: AMPA für schnelle Erregung, NMDA für Plastizität und Gedächtnis – der NMDA-Kanal öffnet nur, wenn die Zelle schon depolarisiert ist und das blockierende Magnesium weicht). Wichtigster **hemmender** Transmitter ist **GABA** (GABA-A-Rezeptor = Chloridkanal → Hyperpolarisation); im Rückenmark zusätzlich Glycin.",
      { kette: [
        "Aktionspotenzial erreicht Nervenendigung",
        "Calcium strömt ein → Bläschen verschmelzen mit der Membran",
        "Transmitter diffundiert über den Spalt, bindet an Rezeptoren",
        "Ionenkanäle öffnen → Erregung (Na⁺/Ca²⁺ rein) oder Hemmung (Cl⁻ rein, K⁺ raus)",
        "Beendigung durch Wiederaufnahme (Glutamat in Astrozyten, GABA) oder Abbau"
      ], titel: "Chemische Synapse" }
    ],
    merke: [
      "2 % Körpergewicht, ca. 15 % HZV, ca. 20 % des O₂-Verbrauchs.",
      "CBF ca. 50 ml/100 g/min, CMRO₂ ca. 3–3,5 ml/100 g/min.",
      "Keine Speicher: Bewusstlosigkeit nach ca. 10 s, Schäden nach ca. 3–5 min.",
      "Anästhetika senken nur den 'Arbeits'-Anteil des Stoffwechsels (max. ca. 50–60 %).",
      "Glutamat erregt (AMPA, NMDA), GABA hemmt (GABA-A = Chloridkanal)."
    ],
    warum: [
      { q: "Warum kann eine noch so tiefe Narkose den Hirnstoffwechsel nicht auf null senken?", a: "Narkosemittel bremsen nur die elektrische Aktivität (Signalübertragung). Ist das EEG flach, ist dieser Anteil ausgeschöpft. Der Rest – Zellerhaltung, Membranpumpen für das Ruhepotenzial, Proteinsynthese – läuft weiter. Nur Kälte senkt auch diesen Grundumsatz." },
      { q: "Warum öffnet der NMDA-Kanal nur bei schon erregter Zelle?", a: "In Ruhe steckt ein Magnesium-Ion im Kanal und blockiert ihn. Erst wenn die Membran (z.B. über AMPA-Rezeptoren) depolarisiert ist, wird Magnesium herausgedrängt. Der Kanal ist damit ein 'Koinzidenzdetektor' – Grundlage von Lernen, aber auch von zentraler Schmerzsensibilisierung." }
    ],
    klinik: [
      "Ketamin blockiert den NMDA-Kanal; Magnesium wirkt am selben Kanal und ist Teil multimodaler Analgesie.",
      "Benzodiazepine, Propofol, Etomidat und Barbiturate verstärken GABA-A – deshalb addieren sich ihre Wirkungen.",
      "Hypoglykämie wirkt am Gehirn wie Ischämie: frühe Bewusstseinsstörung, Krampfanfälle."
    ],
    selbsttest: [
      { q: "Spezialwissen Gehirn: Welchen Anteil an Herzzeitvolumen und O2-Verbrauch hat das Gehirn?", a: "Ca. 15 % des HZV (ca. 750 ml/min) und ca. 20 % des Sauerstoffverbrauchs bei nur 2 % des Körpergewichts." },
      { q: "Spezialwissen Gehirn: Normalwerte von Hirndurchblutung und zerebralem O2-Verbrauch?", a: "CBF ca. 50 ml/100 g/min (graue Substanz ca. 80, weiße ca. 20), CMRO2 ca. 3–3,5 ml O2/100 g/min." },
      { q: "Spezialwissen Gehirn: Welcher Anteil des Hirnstoffwechsels lässt sich durch Anästhetika senken?", a: "Nur der Anteil für elektrische Aktivität (ca. 60 %); bei isoelektrischem EEG ist das Maximum erreicht. Der Grundumsatz für Zellerhaltung lässt sich nur durch Hypothermie senken." },
      { q: "Spezialwissen Gehirn: Zeitverlauf nach Durchblutungsstopp des Gehirns?", a: "Bewusstlosigkeit nach ca. 10 s, isoelektrisches EEG nach ca. 20–40 s, irreversible Schäden ab ca. 3–5 min bei Normothermie." },
      { q: "Spezialwissen Gehirn: Warum ist der NMDA-Rezeptor ein 'Koinzidenzdetektor'?", a: "Er braucht Glutamat UND eine bereits depolarisierte Membran, damit der Magnesium-Block gelöst wird." },
      { q: "Spezialwissen Gehirn: Wichtigster erregender und hemmender Transmitter im Gehirn?", a: "Erregend: Glutamat (AMPA-, NMDA-Rezeptoren). Hemmend: GABA (GABA-A = Chloridkanal); im Rückenmark zusätzlich Glycin." }
    ]
  });

  CH.push({
    id: "durchblutung",
    level: "Organ",
    title: "Hirndurchblutung: Kopplung, Autoregulation, CO₂ und Blut-Hirn-Schranke",
    leitfrage: "Woher 'weiß' ein Hirnareal, dass es gerade mehr Blut braucht – und warum reagiert die Hirndurchblutung so stark auf das Atemgas CO₂?",
    einfach: "Das Gehirn regelt seine Durchblutung selbst: Arbeitet ein Areal mehr, weiten sich dort die Gefäße. Schwankt der Blutdruck, halten die Gefäße die Durchblutung in einem gewissen Bereich konstant. Am stärksten reagieren die Hirngefäße auf CO₂: viel CO₂ weitet sie, wenig CO₂ verengt sie. Darum kann man durch schnelles Beatmen den Hirndruck kurzfristig senken – aber auch die Durchblutung gefährlich drosseln.",
    body: [
      { h: "Neurovaskuläre Kopplung" },
      "Durchblutung folgt dem Stoffwechsel (**Flow-Metabolism-Coupling**): Aktive Neurone und Astrozyten setzen gefäßerweiternde Signale frei (Stickstoffmonoxid, Prostaglandine, Kalium, Adenosin). ==Sinkt der Stoffwechsel (z.B. durch Propofol), sinkt auch die Durchblutung – und damit das Blutvolumen im Schädel und der Hirndruck.==",
      { h: "Autoregulation" },
      "Klassisch wird ein Plateau zwischen ca. **50 und 150 mmHg** mittlerem arteriellem Druck angegeben. Neuere Daten zeigen: Das Plateau ist individuell schmaler, die untere Grenze liegt oft höher (ca. 60–70 mmHg) und der Bereich ist bei **chronischer Hypertonie nach rechts verschoben**. Bei Schädel-Hirn-Trauma, Subarachnoidalblutung, Ischämie oder unter hohen Dosen Volatila (>1 MAC) kann die Autoregulation gestört oder aufgehoben sein → die Durchblutung folgt dann passiv dem Blutdruck.",
      { h: "CO₂ und O₂" },
      { kette: [
        "PaCO₂ steigt",
        "CO₂ diffundiert in den Liquor/die Gefäßwand → pH sinkt",
        "Glatte Gefäßmuskeln erschlaffen → Gefäße weiten sich",
        "CBF steigt um ca. 1–2 ml/100 g/min (ca. 2–4 %) pro mmHg PaCO₂ (Bereich ca. 20–80 mmHg)",
        "Mehr Blutvolumen im Schädel → Hirndruck steigt"
      ], titel: "CO₂-Reaktivität" },
      "Die Wirkung von Hyperventilation **lässt nach ca. 6–24 Stunden nach**, weil der Liquor-pH durch Bicarbonat-Anpassung normalisiert wird; abruptes Beenden führt dann zu einem Rebound. Sauerstoff spielt eine geringere Rolle: ==erst bei PaO₂ unter ca. 50–60 mmHg steigt die Durchblutung steil an.==",
      { h: "Blut-Hirn-Schranke" },
      "Gebildet aus Kapillarendothel mit **Tight Junctions**, Basalmembran, Perizyten und Astrozyten-Endfüßchen. Durchlässig für kleine **fettlösliche** Stoffe (O₂, CO₂, Anästhetika), Wasser und Glukose (über GLUT1); kaum durchlässig für Ionen, Proteine und geladene Moleküle. Folge: ==Ein schneller Abfall der Natriumkonzentration im Blut zieht Wasser ins Gehirn (Hirnödem), Albumin und Kolloide dagegen kaum.==",
      { h: "Hirnstoffwechsel und Anästhetika" },
      { table: { head: ["Substanz", "CMRO₂", "CBF", "ICP"], rows: [
        ["Propofol, Thiopental, Etomidat", "↓↓", "↓↓ (gekoppelt)", "↓"],
        ["Volatila <1 MAC", "↓", "≈/↑ (direkte Gefäßerweiterung)", "≈/↑"],
        ["Volatila >1 MAC", "↓", "↑ (Entkopplung)", "↑"],
        ["Lachgas", "↑ (leicht)", "↑", "↑"],
        ["Ketamin", "≈/↑", "↑", "≈/↑ (bei Normokapnie klinisch meist unproblematisch)"],
        ["Opioide (bei Normokapnie)", "≈", "≈", "≈"]
      ] } }
    ],
    merke: [
      "Durchblutung folgt dem Stoffwechsel (Kopplung).",
      "Autoregulation klassisch MAP 50–150 mmHg, individuell schmaler, bei Hypertonie rechtsverschoben.",
      "CO₂: ca. 2–4 % CBF-Änderung pro mmHg; Effekt der Hyperventilation hält nur Stunden.",
      "O₂ erst unter PaO₂ ca. 50–60 mmHg relevant.",
      "Blut-Hirn-Schranke: Wasser frei, Natrium nicht → Natriumabfall verursacht Hirnödem."
    ],
    warum: [
      { q: "Warum senkt Propofol den Hirndruck, Lachgas erhöht ihn eher?", a: "Propofol senkt den Hirnstoffwechsel; über die Kopplung sinken Durchblutung und Blutvolumen im Schädel. Lachgas steigert Stoffwechsel und Durchblutung leicht und erweitert die Gefäße – das intrakranielle Blutvolumen steigt." },
      { q: "Warum ist forcierte Hyperventilation beim Schädel-Hirn-Trauma gefährlich?", a: "Die Vasokonstriktion senkt zwar das Blutvolumen und den Hirndruck, aber auch die Durchblutung – in ohnehin minderdurchbluteten Arealen droht Ischämie. Deshalb nur kurzfristig als Überbrückung bei drohender Einklemmung und idealerweise mit Überwachung der zerebralen Oxygenierung." }
    ],
    klinik: [
      "Bei chronischer Hypertonie liegt die untere Autoregulationsgrenze höher – Blutdruckabfälle in Narkose werden schlechter toleriert.",
      "Beach-Chair-Position: Blutdruck auf Höhe des Gehirns beziehen (pro 10 cm Höhenunterschied ca. 7–8 mmHg weniger).",
      "Hyponatriämie (z.B. Spülflüssigkeit bei TUR, hypotone Infusionen bei Kindern) → Hirnödem."
    ],
    selbsttest: [
      { q: "Spezialwissen Gehirn: Was versteht man unter neurovaskulärer Kopplung?", a: "Die Durchblutung eines Hirnareals folgt seinem Stoffwechsel; aktive Neurone/Astrozyten setzen gefäßerweiternde Signale frei (NO, Prostaglandine, K+, Adenosin)." },
      { q: "Spezialwissen Gehirn: Klassischer Autoregulationsbereich und was ihn verschiebt?", a: "MAP ca. 50–150 mmHg (individuell schmaler, untere Grenze oft 60–70). Rechtsverschiebung bei chronischer Hypertonie; Aufhebung bei SHT, SAB, Ischämie, Volatila >1 MAC." },
      { q: "Spezialwissen Gehirn: Wie stark ändert sich der CBF mit dem PaCO2, und warum lässt der Effekt nach?", a: "Ca. 1–2 ml/100 g/min bzw. 2–4 % pro mmHg (20–80 mmHg). Nach ca. 6–24 h normalisiert sich der Liquor-pH durch Bicarbonat-Anpassung; abruptes Absetzen erzeugt einen Rebound." },
      { q: "Spezialwissen Gehirn: Ab welchem PaO2 steigt die Hirndurchblutung deutlich an?", a: "Erst unterhalb von ca. 50–60 mmHg." },
      { q: "Spezialwissen Gehirn: Welche Stoffe passieren die Blut-Hirn-Schranke leicht, welche kaum?", a: "Leicht: kleine fettlösliche Stoffe (O2, CO2, Anästhetika), Wasser, Glukose über GLUT1. Kaum: Ionen (Natrium), Proteine, geladene Moleküle." },
      { q: "Spezialwissen Gehirn: Wie wirken Volatila über 1 MAC auf CBF und CMRO2?", a: "CMRO2 sinkt, aber die direkte Gefäßerweiterung überwiegt → CBF und ICP steigen (Entkopplung), Autoregulation wird abgeschwächt." }
    ]
  });

  CH.push({
    id: "hirndruck",
    level: "System",
    title: "Hirndruck, Perfusionsdruck und Einklemmung",
    leitfrage: "Warum steigt der Hirndruck erst lange kaum und dann plötzlich steil an?",
    einfach: "Der Schädel ist eine feste Kapsel mit drei Inhalten: Hirngewebe, Blut und Hirnwasser. Wächst einer davon (Blutung, Schwellung), müssen die anderen ausweichen – zuerst das Hirnwasser und Venenblut. Sind diese Reserven aufgebraucht, reicht schon wenig zusätzliches Volumen für einen starken Druckanstieg. Dann wird das Gehirn schlechter durchblutet und kann im schlimmsten Fall durch Öffnungen gedrückt werden (Einklemmung).",
    body: [
      { h: "Monro-Kellie-Doktrin" },
      "Schädelinhalt ca. **80 % Hirngewebe, 10 % Blut, 10 % Liquor**. Das Gesamtvolumen ist (beim Erwachsenen mit geschlossenen Schädelnähten) konstant. Ausweichreserven: **Liquorverschiebung** in den Spinalkanal, vermehrte Liquorresorption, **Auspressen von venösem Blut**.",
      { h: "Druck-Volumen-Kurve" },
      { kette: [
        "Phase 1: Reserven vorhanden → zusätzliches Volumen erhöht den Druck kaum (hohe Compliance)",
        "Phase 2: Reserven erschöpft → jeder weitere Milliliter lässt den Druck steil steigen",
        "Phase 3: ICP nähert sich dem arteriellen Druck → Perfusion sinkt gegen null, Einklemmung"
      ], titel: "Exponentieller Verlauf" },
      "==Deshalb kann ein Patient mit noch normalem Hirndruck schon am 'Knick' der Kurve stehen==: eine kleine Zunahme (Husten, Pressen, Hyperkapnie, Kopftieflage) löst dann einen starken Anstieg aus.",
      { h: "Perfusionsdruck" },
      { formel: "CPP = MAP − ICP (bzw. − ZVD, wenn dieser höher ist)", erkl: "CPP = zerebraler Perfusionsdruck, MAP = mittlerer arterieller Druck, ICP = intrakranieller Druck. Normaler ICP ca. 5–15 mmHg (Rückenlage, Erwachsene)." },
      "Beim schweren Schädel-Hirn-Trauma (Brain Trauma Foundation, 4. Aufl.): ICP-Therapie ab ca. **>22 mmHg**, CPP-Ziel ca. **60–70 mmHg**; über 70 mmHg mit Flüssigkeit/Katecholaminen zu erzwingen erhöht das Risiko für ein Lungenversagen.",
      { h: "Hirnödem" },
      { ul: [
        "**Vasogen**: Schranke geschädigt, eiweißreiche Flüssigkeit tritt aus (Tumor, Abszess) – spricht auf Dexamethason an.",
        "**Zytotoxisch**: Ionenpumpen versagen, Zellen schwellen (Ischämie, Hypoxie) – Kortikoide unwirksam.",
        "**Osmotisch**: Plasma hypoton (Hyponatriämie, zu schnelle Korrektur einer Hyperglykämie).",
        "**Interstitiell**: Liquoraufstau (Hydrozephalus) drückt Liquor ins Marklager."
      ] },
      { h: "Einklemmung und Cushing-Reflex" },
      "Bei Druckunterschieden verschiebt sich Hirngewebe: unter der Falx, durch den Tentoriumschlitz (Uncus drückt N. oculomotorius → **gleichseitig weite, lichtstarre Pupille**) oder durch das Foramen magnum (Kleinhirntonsillen drücken die Medulla → Atem- und Kreislaufstillstand). **Cushing-Trias**: Hypertonie, Bradykardie, unregelmäßige Atmung – ein Spätzeichen.",
      { h: "Stufentherapie bei erhöhtem Hirndruck" },
      { ul: [
        "Basis: Oberkörper 30°, Kopf gerade (venöser Abfluss), Normokapnie, Normoxie, Normothermie, Normoglykämie, ausreichende Sedierung/Analgesie, Krampfanfälle behandeln.",
        "Osmotherapie: hypertone Kochsalzlösung oder Mannitol.",
        "Liquordrainage über externe Ventrikeldrainage.",
        "Kurzzeitig moderate Hyperventilation (PaCO₂ ca. 30–35 mmHg) als Überbrückung.",
        "Eskalation: tiefe Sedierung bis Burst-Suppression (Barbiturate), dekompressive Kraniektomie."
      ] }
    ],
    merke: [
      "Monro-Kellie: Gewebe 80 %, Blut 10 %, Liquor 10 % – Gesamtvolumen konstant.",
      "Druck-Volumen-Kurve exponentiell: Reserven erst verbraucht, dann steiler Anstieg.",
      "CPP = MAP − ICP; SHT-Ziel CPP 60–70 mmHg, Therapie ab ICP >22 mmHg.",
      "Uncus-Herniation → gleichseitige weite Pupille; Cushing-Trias als Spätzeichen.",
      "Vasogenes Ödem spricht auf Dexamethason an, zytotoxisches nicht."
    ],
    warum: [
      { q: "Warum ist Kopftieflage oder ein abgeschnürter Hals bei erhöhtem Hirndruck gefährlich?", a: "Venöses Blut kann nicht mehr abfließen; das Blutvolumen im Schädel steigt. Am steilen Teil der Druck-Volumen-Kurve bewirkt schon dieses kleine Zusatzvolumen einen starken Druckanstieg." },
      { q: "Warum ist die Cushing-Trias ein Spätzeichen?", a: "Sie entsteht erst, wenn der Hirnstamm (Medulla) bereits minderdurchblutet bzw. komprimiert ist: Der Blutdruck wird reflektorisch hochgetrieben, um die Perfusion zu retten, der Barorezeptorreflex senkt die Herzfrequenz, und das Atemzentrum versagt." }
    ],
    klinik: [
      "Narkose-Einleitung bei erhöhtem ICP: Hypotonie und Husten/Pressen vermeiden, ausreichend tiefe Narkose vor Laryngoskopie.",
      "PEEP bis ca. 10 cmH₂O ist bei normaler Lunge meist unproblematisch für den ICP, wenn der MAP erhalten bleibt.",
      "Dexamethason ist beim Schädel-Hirn-Trauma nicht indiziert (CRASH-Studie: höhere Sterblichkeit)."
    ],
    selbsttest: [
      { q: "Spezialwissen Gehirn: Was besagt die Monro-Kellie-Doktrin und welche Ausweichreserven gibt es?", a: "Gesamtvolumen im Schädel (Gewebe ca. 80 %, Blut 10 %, Liquor 10 %) ist konstant; Zunahme eines Anteils muss durch Liquorverschiebung/-resorption und Auspressen venösen Blutes kompensiert werden." },
      { q: "Spezialwissen Gehirn: Warum steigt der Hirndruck exponentiell?", a: "Solange Reserven bestehen, steigt der Druck kaum; sind sie erschöpft, erhöht jedes weitere Volumen den Druck steil (abnehmende Compliance)." },
      { q: "Spezialwissen Gehirn: Zielwerte für ICP und CPP beim schweren Schädel-Hirn-Trauma (BTF 4. Aufl.)?", a: "Therapie ab ICP >22 mmHg; CPP ca. 60–70 mmHg, CPP >70 nicht erzwingen (Lungenversagen)." },
      { q: "Spezialwissen Gehirn: Welche Hirnödemformen gibt es und welche spricht auf Dexamethason an?", a: "Vasogen (spricht an, z.B. Tumorödem), zytotoxisch, osmotisch, interstitiell." },
      { q: "Spezialwissen Gehirn: Woran erkennt man eine transtentorielle (Uncus-)Herniation?", a: "Gleichseitig weite, lichtstarre Pupille durch Kompression des N. oculomotorius, Bewusstseinsverlust, später kontralaterale Lähmung bzw. Strecksynergismen." },
      { q: "Spezialwissen Gehirn: Basismaßnahmen bei erhöhtem Hirndruck?", a: "Oberkörper 30°, Kopf gerade, Normokapnie, Normoxie, Normothermie, Normoglykämie, ausreichende Analgosedierung, Krampfanfälle behandeln; dann Osmotherapie, Liquordrainage." }
    ]
  });

  CH.push({
    id: "narkose",
    level: "Klinik",
    title: "Wie Narkosemittel das Bewusstsein ausschalten – und was das EEG zeigt",
    leitfrage: "Gibt es einen gemeinsamen 'Schalter', an dem so verschiedene Stoffe wie Propofol, Sevofluran und Ketamin ansetzen?",
    einfach: "Einen einzigen Schalter gibt es nicht. Die meisten Narkosemittel verstärken die Hemmung im Gehirn (GABA), Ketamin blockiert dagegen eine wichtige Erregung (NMDA). Gemeinsam ist ihnen: Die Zusammenarbeit weit entfernter Hirnregionen – vor allem zwischen Großhirnrinde und Thalamus – bricht zusammen. Im EEG sieht man das als langsamere, größere Wellen; bei zu tiefer Narkose als Phasen völliger Stille.",
    body: [
      { h: "Molekulare Angriffspunkte" },
      { table: { head: ["Substanz", "Hauptangriffspunkt"], rows: [
        ["Propofol, Etomidat, Barbiturate", "GABA-A-Rezeptor (positive Modulation; Barbiturate in hoher Dosis auch direkte Öffnung)"],
        ["Benzodiazepine", "GABA-A (nur mit γ-Untereinheit; erhöhen die Öffnungshäufigkeit)"],
        ["Volatile Anästhetika", "Mehrere Ziele: GABA-A, Glycin-Rezeptoren, Zwei-Poren-Kaliumkanäle (TREK), Hemmung von NMDA und präsynaptischer Freisetzung"],
        ["Ketamin, Lachgas, Xenon", "NMDA-Antagonismus (Ketamin zusätzlich HCN1-, Opioid- u.a. Effekte)"],
        ["Dexmedetomidin", "α₂-Agonist im Locus coeruleus → 'natürlicher' schlafähnlicher Zustand, erweckbar"]
      ] } },
      { h: "Bewusstsein und Netzwerke" },
      "Bewusstsein braucht **Wachheit** (Hirnstamm, aufsteigendes retikuläres System, Hypothalamus) und **integrierte Verarbeitung** (Kommunikation zwischen Rinde und Thalamus sowie zwischen frontalen und parietalen Arealen). ==GABAerge Anästhetika unterbrechen v.a. diese Kommunikation; das Gehirn verarbeitet Reize noch lokal, aber nicht mehr 'als Ganzes'.==",
      { h: "Typische EEG-Muster (frontal abgeleitet)" },
      { kette: [
        "Wach: schnelle Beta-, mit geschlossenen Augen Alpha-Wellen",
        "Sedierung/'paradoxe Erregung': mehr Beta-Aktivität",
        "Chirurgische Narkosetiefe (Propofol/Volatila): langsame Delta-Wellen + frontale Alpha-Oszillationen (ca. 8–12 Hz)",
        "Zu tief: Burst-Suppression (Ausbrüche wechseln mit isoelektrischen Phasen)",
        "Isoelektrisch: flaches EEG"
      ], titel: "Vom Wachsein zur Überdosierung" },
      "Ketamin passt nicht in dieses Muster: Es erzeugt **schnelle Gamma-Aktivität** – BIS-Werte und ähnliche Indizes steigen eher und unterschätzen die Narkosetiefe. Lachgas und Opioide verändern das EEG ebenfalls kaum proportional zur Wirkung. ==Prozessierte EEG-Indizes (z.B. BIS 40–60) sind für Propofol und Volatila validiert, nicht für jede Substanz.==",
      { h: "Alter und Gehirn" },
      "Mit dem Alter werden die frontalen Alpha-Wellen schwächer, die EEG-Amplitude kleiner, und Burst-Suppression tritt schon bei geringeren Dosen auf. Tiefe Narkose mit Burst-Suppression ist mit postoperativem Delir assoziiert (Kausalität nicht sicher belegt)."
    ],
    merke: [
      "GABA-A: Propofol, Etomidat, Barbiturate, Benzodiazepine; NMDA: Ketamin, Lachgas, Xenon.",
      "Volatila wirken an mehreren Zielen (u.a. Zwei-Poren-K⁺-Kanäle).",
      "Narkose = Zusammenbruch der Kommunikation zwischen Hirnregionen (Thalamus–Kortex, frontal–parietal).",
      "Typisches Narkose-EEG: Delta + frontale Alpha-Oszillationen; zu tief: Burst-Suppression.",
      "Ketamin erhöht schnelle EEG-Aktivität → BIS unzuverlässig."
    ],
    warum: [
      { q: "Warum zeigt der BIS unter Ketamin oft 'zu wache' Werte?", a: "Ketamin senkt die integrierte Verarbeitung über NMDA-Blockade, erzeugt dabei aber schnelle Gamma-Aktivität. Die Algorithmen werten schnelle Frequenzen als Wachheit." },
      { q: "Warum treten bei alten Patienten schneller Burst-Suppression-Muster auf?", a: "Weniger Neurone und Synapsen, veränderte Rezeptorfunktion und geringere Reserve → dieselbe Dosis hat eine stärkere Wirkung; außerdem sinkt die MAC um ca. 6 % pro Dekade." }
    ],
    klinik: [
      "EEG-geführte Narkose hilft, Überdosierung bei alten Patienten zu vermeiden.",
      "Dexmedetomidin-Sedierung ist erweckbar und weitgehend ohne Atemdepression – nützlich für Wach-Kraniotomie und Delirprophylaxe bei ausgewählten Patienten.",
      "Awareness-Risiko steigt bei TIVA mit Muskelrelaxation ohne EEG-Monitoring."
    ],
    selbsttest: [
      { q: "Spezialwissen Gehirn: An welchen Rezeptor binden Propofol, Etomidat und Benzodiazepine?", a: "Am GABA-A-Rezeptor (Chloridkanal), dessen Wirkung sie verstärken; Benzodiazepine nur bei Rezeptoren mit γ-Untereinheit." },
      { q: "Spezialwissen Gehirn: Welche Anästhetika wirken vor allem als NMDA-Antagonisten?", a: "Ketamin, Lachgas und Xenon." },
      { q: "Spezialwissen Gehirn: Welches EEG-Muster ist typisch für chirurgische Narkosetiefe mit Propofol?", a: "Langsame Delta-Wellen plus frontale Alpha-Oszillationen (ca. 8–12 Hz)." },
      { q: "Spezialwissen Gehirn: Was bedeutet Burst-Suppression?", a: "Wechsel von Aktivitätsausbrüchen und isoelektrischen Phasen – Zeichen einer sehr tiefen Narkose (oder schweren Hirnschädigung/Hypothermie)." },
      { q: "Spezialwissen Gehirn: Warum ist der BIS unter Ketamin unzuverlässig?", a: "Ketamin erzeugt schnelle Gamma-Aktivität, die der Algorithmus als Wachheit wertet – die Narkosetiefe wird unterschätzt." }
    ]
  });

  CH.push({
    id: "schutz",
    level: "Klinik",
    title: "Ischämie, Neuroprotektion und Schädel-Hirn-Trauma",
    leitfrage: "Was passiert in den Minuten nach einem Durchblutungsstopp in der Nervenzelle – und welche Maßnahmen schützen tatsächlich nachweisbar?",
    einfach: "Ohne Sauerstoff fällt die Energieversorgung aus, die Zellen können ihre Salzpumpen nicht mehr betreiben, schwellen an und schütten massenhaft Glutamat aus. Das übererregt die Nachbarzellen, Calcium strömt ein und zerstört sie. Viele Medikamente, die das im Tierversuch bremsten, haben beim Menschen nicht geholfen. Was nachweislich zählt: schnell die Durchblutung wiederherstellen und 'sekundäre' Schäden durch Sauerstoffmangel, niedrigen Blutdruck, Fieber und falschen Blutzucker vermeiden.",
    body: [
      { h: "Ischämische Kaskade" },
      { kette: [
        "O₂-Mangel → ATP-Mangel",
        "Na⁺/K⁺-Pumpe versagt → Depolarisation, Natrium und Wasser strömen in die Zelle (zytotoxisches Ödem)",
        "Massive Glutamat-Freisetzung, Wiederaufnahme versagt (Exzitotoxizität)",
        "NMDA-Kanäle öffnen → Calcium-Überladung",
        "Calcium aktiviert Enzyme (Proteasen, Lipasen), Mitochondrien versagen, Radikale entstehen",
        "Zelltod (Nekrose im Zentrum, verzögerter programmierter Zelltod in der Randzone)"
      ], titel: "Vom Sauerstoffmangel zum Zelltod" },
      "Um das Zentrum einer Ischämie liegt die **Penumbra**: Gewebe, das nicht mehr arbeitet, aber noch lebt. ==Sie ist das Ziel jeder Therapie – ihre Rettung hängt an der Zeit und an der Durchblutung über Kollateralen (Blutdruck!).==",
      { h: "Was nachweislich wirkt" },
      { ul: [
        "Schnelle Reperfusion (Thrombolyse, mechanische Thrombektomie).",
        "Vermeiden sekundärer Schäden: Hypoxie, Hypotonie, Hypo-/Hyperkapnie, Fieber, Hypo- und schwere Hyperglykämie, Krampfanfälle.",
        "Temperatur: Fieber vermeiden; gezielte Temperaturkontrolle nach Reanimation (ERC 2025: Fieber >37,7 °C mindestens 72 h vermeiden). Tiefe Hypothermie schützt bei Kreislaufstillstand in der Herzchirurgie (Stoffwechsel ↓ ca. 6–7 % pro °C).",
        "Pharmakologische Neuroprotektion (Magnesium, Barbiturate, Nimodipin außer bei SAB, Kortikoide, Xenon u.a.) hat sich beim Menschen außer in speziellen Situationen nicht durchgesetzt; Nimodipin verbessert das Ergebnis nach Subarachnoidalblutung."
      ] },
      { h: "Schädel-Hirn-Trauma: primärer und sekundärer Schaden" },
      "Der **Primärschaden** entsteht im Moment des Unfalls und ist nicht beeinflussbar. Der **Sekundärschaden** entsteht in Stunden bis Tagen danach durch Hypoxie, Hypotonie, Hirndruck, Fieber, Krampfanfälle. ==Schon eine einzige Episode mit systolischem Druck <90 mmHg oder SpO₂ <90 % verschlechtert die Prognose deutlich (Chesnut 1993).== Ziele (BTF): systolisch ≥100 mmHg (50–69 Jahre) bzw. ≥110 mmHg (15–49 und >70 Jahre).",
      { h: "Krampfanfälle" },
      "Ein Status epilepticus erhöht den Hirnstoffwechsel massiv. Stufentherapie: Benzodiazepin (z.B. Lorazepam i.v. oder Midazolam i.m./intranasal), dann Levetiracetam, Valproat oder (Fos-)Phenytoin, bei Refraktärität Narkose (Propofol, Midazolam, Thiopental) mit EEG-Kontrolle."
    ],
    merke: [
      "Ischämie: ATP ↓ → Pumpen versagen → Glutamat → Calcium-Überladung → Zelltod.",
      "Penumbra = rettbar; hängt von Zeit und Kollateraldurchblutung ab.",
      "Nachweislich: Reperfusion + Vermeiden von Hypoxie, Hypotonie, Fieber, Glukoseentgleisungen.",
      "SHT: eine einzige Hypotonie-/Hypoxie-Episode verschlechtert die Prognose.",
      "Nimodipin nur bei Subarachnoidalblutung belegt."
    ],
    warum: [
      { q: "Warum schadet beim akuten Schlaganfall ein starker Blutdruckabfall in der Narkose?", a: "In der Penumbra ist die Autoregulation aufgehoben; die Durchblutung hängt passiv vom Blutdruck ab (Kollateralen). Fällt der Druck, stirbt rettbares Gewebe." },
      { q: "Warum ist Hyperglykämie bei Hirnischämie ungünstig, Hypoglykämie aber ebenso?", a: "Hyperglykämie verstärkt die anaerobe Glykolyse in der Ischämie → mehr Laktat, Azidose, Zellschaden. Hypoglykämie entzieht dem Gehirn den einzigen Brennstoff und wirkt selbst wie eine Ischämie." }
    ],
    klinik: [
      "Narkose bei Thrombektomie: Hypotonie bis zur Rekanalisation vermeiden.",
      "Nach Reanimation: Normoxie (SpO₂ 94–98 %), Normokapnie, MAP >65 mmHg, Fieber vermeiden.",
      "Prähospital beim SHT: Kapnographie-gesteuerte Beatmung, keine prophylaktische Hyperventilation."
    ],
    selbsttest: [
      { q: "Spezialwissen Gehirn: Beschreibe die ischämische Kaskade in Stichworten.", a: "O2 ↓ → ATP ↓ → Na/K-Pumpe versagt → Depolarisation/Zellschwellung → Glutamatfreisetzung → NMDA-vermittelte Calcium-Überladung → Enzymaktivierung, Mitochondrienversagen, Radikale → Zelltod." },
      { q: "Spezialwissen Gehirn: Was ist die Penumbra?", a: "Randzone einer Ischämie: Funktion erloschen, Zellen aber noch lebensfähig – rettbar durch rasche Reperfusion und ausreichenden Perfusionsdruck." },
      { q: "Spezialwissen Gehirn: Welche Faktoren verursachen den sekundären Hirnschaden nach SHT?", a: "Hypoxie, Hypotonie, erhöhter Hirndruck, Hypo-/Hyperkapnie, Fieber, Krampfanfälle, Glukoseentgleisungen." },
      { q: "Spezialwissen Gehirn: Für welche Situation ist Nimodipin als Neuroprotektion belegt?", a: "Aneurysmatische Subarachnoidalblutung (verbessert das neurologische Ergebnis)." },
      { q: "Spezialwissen Gehirn: Um wie viel senkt Hypothermie den Hirnstoffwechsel pro Grad?", a: "Ca. 6–7 % pro °C." },
      { q: "Spezialwissen Gehirn: Systolische Blutdruckziele beim schweren SHT nach BTF?", a: "≥100 mmHg bei 50–69 Jahren, ≥110 mmHg bei 15–49 und über 70 Jahren." }
    ]
  });

  window.__addSpezialOrgan({
    id: "gehirn",
    title: "Gehirn",
    subtopic: "zns",
    subtitle: "Von der Synapse über Hirndurchblutung und Hirndruck bis zur Narkose und Neuroprotektion",
    chapters: CH,
    sources: [
      "Azevedo FA, Carvalho LR, Grinberg LT, et al. Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain. J Comp Neurol 2009;513:532–541.",
      "Willie CK, Tzeng YC, Fisher JA, Ainslie PN. Integrative regulation of human brain blood flow. J Physiol 2014;592:841–859.",
      "Meng L, Gelb AW. Regulation of cerebral autoregulation by carbon dioxide. Anesthesiology 2015;122:196–205.",
      "Brown EN, Lydic R, Schiff ND. General anesthesia, sleep, and coma. N Engl J Med 2010;363:2638–2650.",
      "Purdon PL, Sampson A, Pavone KJ, Brown EN. Clinical electroencephalography for anesthesiologists. Anesthesiology 2015;123:937–960.",
      "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition. Neurosurgery 2017;80:6–15.",
      "Chesnut RM, Marshall LF, Klauber MR, et al. The role of secondary brain injury in determining outcome from severe head injury. J Trauma 1993;34:216–222.",
      "CRASH trial collaborators. Effect of intravenous corticosteroids on death within 14 days in 10008 adults with clinically significant head injury. Lancet 2004;364:1321–1328.",
      "Nolan JP, et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2025: Post-resuscitation care. Resuscitation 2025.",
      "Lehrbücher: Cottrell and Patel's Neuroanesthesia (aktuelle Auflage); Miller's Anesthesia, 10. Aufl. (Kapitel Zerebrale Physiologie)."
    ]
  });
})();
