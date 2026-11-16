// Prüfung verstehen: Formate von EDAIC Teil 1/Teil 2 und der deutschen Facharztprüfung,
// Bewertungsmaßstäbe, Antwortschemata und Lernmethoden. Inhalte aus den öffentlich
// zugänglichen Unterlagen der ESAIC (Diploma Guide 2025, "How to prepare for the EDAIC" 2022,
// MCQ-Instructions 2021) und der Ärztekammern zusammengefasst – keine Prüfungsfragen.
// Blockformat wie im Spezialwissen (Strings, {h}, {ul}, {table}, {kette}, {falle}).
(function () {
  window.PRUEFUNG = {
    abschnitte: [
      {
        id: "teil1",
        titel: "EDAIC Teil 1 – schriftlich (MCQ)",
        bloecke: [
          { table: { head: ["Merkmal", "Offizielle Vorgabe"], rows: [
            ["Aufbau", "2 Papiere à 60 Fragen: **Paper A** Basiswissenschaften (Anatomie, Physiologie, Pharmakologie, Physik/Messtechnik, Statistik), **Paper B** Klinik (Innere und Notfallmedizin, Allgemein- und Regionalanästhesie, spezielle Anästhesie inkl. Schmerz, Intensivmedizin)"],
            ["Fragetyp", "Ein Stamm mit **5 Aussagen**, jede **einzeln richtig oder falsch** – alle 5 können richtig sein, alle falsch oder jede Mischung"],
            ["Zeit", "120 min pro Papier auf Papier, 90 min am Computer (also ca. 2 min bzw. 1,5 min pro Stamm mit 5 Aussagen)"],
            ["Bewertung", "+1 für jede richtige Aussage, **kein Abzug** für falsche oder leere Antworten → bis zu 300 Punkte pro Papier"],
            ["Bestehen", "Beide Papiere müssen bestanden werden; die Bestehensgrenze wird jedes Jahr anhand von Referenzfragen leicht angepasst"]
          ] } },
          { kette: [
            "Kein Punktabzug für falsche Antworten",
            "Eine leere Antwort bringt sicher 0 Punkte, eine geratene im Mittel 0,5",
            "==Jede Aussage beantworten – die ESAIC schreibt selbst: 'Candidates should answer all the questions'=="
          ], titel: "Die wichtigste Taktik" },
          { ul: [
            "**Stamm und Aussage immer zusammen lesen** und jede Aussage unabhängig von den anderen entscheiden – aus der Zahl der bisherigen 'Richtig' lässt sich nichts ableiten.",
            "**Zeitplan vorher festlegen:** z.B. 3 Blöcke à 20 Fragen in je ca. 30 min und 30 min für das Übertragen auf den Antwortbogen (Papierprüfung).",
            "**Zwei Durchgänge:** zuerst alles Sichere markieren, dann die Fragen zum Nachdenken.",
            "Absolute Wörter ('immer', 'nie', 'ausschließlich') sind oft falsch, aber nicht immer – jede Aussage inhaltlich prüfen statt nach Mustern raten."
          ] },
          { falle: "„Teil 1 sind Single-Best-Answer-Fragen.“ – Falsch. Die EDAIC verwendet Mehrfach-Richtig/Falsch-Fragen. In dieser App gibt es beides: Single-Best-Answer-Fragen trainieren das Erkennen der besten Option, die Richtig/Falsch-Fragen trainieren genau das Prüfungsformat." }
        ]
      },
      {
        id: "teil2",
        titel: "EDAIC Teil 2 – mündlich (SOE)",
        bloecke: [
          "Ein Prüfungstag mit **4 strukturierten mündlichen Prüfungen (SOE)** à **25 min**, jeweils vor 2 Prüfern (meist einer aus dem Gastland, einer von außerhalb) – insgesamt 8 Prüfer.",
          { table: { head: ["SOE", "Inhalt"], rows: [
            ["1 (vormittags)", "Angewandte Basiswissenschaft: **Physiologie** und **Anatomie** (mindestens eine Anatomiefrage)"],
            ["2 (vormittags)", "**Pharmakologie** und **klinische Messtechnik** (mindestens eine Messtechnikfrage)"],
            ["3 (nachmittags)", "Klinik: Anästhesie-Szenario, Regionalanästhesie, Subspezialitäten, mindestens ein **kritisches Ereignis**"],
            ["4 (nachmittags)", "Klinik: Intensiv- und Notfallmedizin, internistisches Thema, **Bildinterpretation** (Röntgen, CT, MRT, Ultraschall)"]
          ] } },
          { kette: [
            "Ca. 15 min vor jeder SOE: schriftliches Einstiegsszenario ('lead-in'), **10 min Vorbereitung** mit Notizen",
            "SOE beginnt mit diesem Szenario",
            "Jede SOE hat **5 geführte Fragen mit gleichem Punktwert**",
            "Nach **12,5 min wechseln die Prüfer** die Rollen (einer fragt, einer protokolliert)",
            "==Zeit gleichmäßig verteilen: wer eine Frage überzeugend beantwortet hat, gewinnt durch weiteres Reden nichts dazu=="
          ], titel: "Ablauf einer SOE" },
          { h: "Bewertung" },
          { table: { head: ["Note", "Bedeutung (offizielle Beschreibung, sinngemäß)"], rows: [
            ["2 – bestanden", "flüssig, kann Wissen anwenden, sicher in Kernthemen, gründlich mit angemessener Tiefe, korrigiert eigene Fehler"],
            ["1 – Grenzfall", "nur Faktenwissen ohne Erklärung ('Buchwissen'), lückenhaftes Verständnis, oberflächlich bei Kernthemen, unstrukturiert – aber keine gefährlichen Entscheidungen"],
            ["0 – nicht bestanden", "beantwortet die Frage trotz Hilfe nicht oder schweigt, schwere Verständnislücken, bietet mehrere Antworten zur Auswahl an, gefährliches klinisches Vorgehen"]
          ] } },
          "Jeder der 8 Prüfer vergibt für jedes der 20 Themen des Tages 0, 1 oder 2 Punkte. Bestanden ist, wer **vormittags (SOE 1 + 2) mindestens 25 von 40**, **nachmittags (SOE 3 + 4) mindestens 25 von 40** und **insgesamt mindestens 60 von 80** Punkten erreicht. ==Breites, gleichmäßiges Wissen zählt mehr als Expertise in Nischen.==",
          { h: "Warum Kandidaten durchfallen (laut ESAIC)" },
          { ul: [
            "Fakten wiedergeben ohne tieferes Verständnis",
            "Wissen nicht auf die klinische Situation anwenden können",
            "Gedanken nicht klar ordnen und ausdrücken",
            "Unsichere Entscheidungen bzw. fehlende Problemlösung",
            "Fehlendes Faktenwissen",
            "Im Notfall unsystematisch statt nach ABCDE bzw. ALS-Algorithmus (4 H und HITS) vorgehen"
          ] },
          { h: "Zeichnen, Bilder, Diagramme" },
          "Papier und Stift liegen während der Präsenzprüfung immer bereit (online: eigene schwarze, nicht zu dünne Stifte). Diagramme können vom Prüfer gezeigt, vom Kandidaten gezeichnet oder Teil des Einstiegsszenarios sein. ==Die ESAIC nennt als Beispiel: Wer zur Sauerstoffbindung gefragt wird, macht mit einer gezeichneten Bindungskurve samt Werten einen guten Eindruck und ordnet damit gleich seine Antwort.== In der Pharmakologie gilt das für Pharmakokinetik und -dynamik. Für Bilder wird eine **vortragbare Systematik** erwartet (z.B. Röntgen-Thorax: Beschriftung/Projektion → Qualität → Bereiche → Fremdmaterial → Diagnose → klinische Bedeutung).",
          { falle: "„Der Prüfer weiß doch, dass ich den Monitor anschließe.“ – Nein. Die ESAIC betont: Was Sie nicht aussprechen, kann der Prüfer nicht werten. Checks, Monitoring und Sicherheitsschritte laut nennen." }
        ]
      },
      {
        id: "facharzt",
        titel: "Deutsche Facharztprüfung Anästhesiologie",
        bloecke: [
          { ul: [
            "**Mündliches Fachgespräch** vor dem Prüfungsausschuss der Landesärztekammer; nach Angaben der Ärztekammer Westfalen-Lippe ein Vorsitzender und zwei Fachprüfer, Dauer **mindestens 30 Minuten** (in der Praxis meist 30–45 min).",
            "Geprüft werden die Inhalte der Weiterbildungsordnung – das **Logbuch** dokumentiert die Kompetenzen, die der Ausschuss erfragen kann.",
            "Typisch sind **Fallgespräche** aus der eigenen Praxis: Vorgehen, Begründung, Komplikationen, Leitlinienstand, rechtliche Aspekte (Aufklärung, Einwilligung).",
            "Details (Prüferzahl, Dauer, Ablauf) unterscheiden sich zwischen den Landesärztekammern – die Informationen der eigenen Kammer prüfen."
          ] },
          "==Die Fähigkeiten aus der EDAIC-Vorbereitung – strukturiert und laut begründen, Kurven zeichnen und erklären, Notfälle nach Algorithmus abarbeiten – sind dieselben, die im Fachgespräch überzeugen.=="
        ]
      },
      {
        id: "schemata",
        titel: "Antwortschemata zum Vortragen",
        bloecke: [
          "Prüfer werten nicht nur das Ergebnis, sondern den **Weg dorthin**. Feste Gerüste helfen, auch unter Stress geordnet und vollständig zu antworten:",
          { table: { head: ["Fragetyp", "Gerüst"], rows: [
            ["Basiswissenschaft ('Erklären Sie …')", "Definition → Einteilung → Mechanismus (Zelle → Organ → System) → Einflussfaktoren → klinische Bedeutung für die Anästhesie; dazu eine Zeichnung"],
            ["Medikament", "Gruppe und Struktur → Wirkmechanismus (Rezeptor → Wirkung) → Pharmakokinetik → Dosierung → Nebenwirkungen → Kontraindikationen und Interaktionen"],
            ["Messgerät (SOE 2)", "Messprinzip (Physik) → Aufbau → Fehlerquellen und Grenzen → Sicherheit → klinische Interpretation"],
            ["Klinischer Fall", "Problemliste → präoperativ (Anamnese, Untersuchung, Befunde, Optimierung) → intraoperativ (Technik, Monitoring, Medikamente, Risiken) → postoperativ (Überwachung, Schmerz, Komplikationen)"],
            ["Kritisches Ereignis", "Erkennen → Hilfe rufen → ABCDE und Sofortmaßnahmen nach Algorithmus → Ursachen suchen und behandeln → Nachbehandlung, Dokumentation, Aufklärung"],
            ["Bildbefund", "Art und Beschriftung → Qualität → systematisch Bereich für Bereich → Fremdmaterial → Diagnose → klinische Konsequenz"]
          ] } },
          { ul: [
            "**Mit dem Wichtigsten beginnen:** zuerst die gefährliche Diagnose bzw. die Sofortmaßnahme, dann die Details.",
            "**Laut denken und begründen** ('Ich wähle …, weil …') – die ESAIC wertet Verständnis höher als Aufzählen.",
            "**Eine Antwort, kein Menü:** mehrere Alternativen zur Auswahl anzubieten wird ausdrücklich als Fehlermerkmal genannt.",
            "**Wissenslücke offen sagen** und dann aus Prinzipien herleiten – Schweigen ist schlechter.",
            "**Unterbrechungen** durch den Prüfer sind normal und kein schlechtes Zeichen: der Prüfer muss alle 5 Fragen schaffen."
          ] }
        ]
      },
      {
        id: "lernen",
        titel: "So lernst du für diese Formate am besten",
        bloecke: [
          { table: { head: ["Methode", "Warum sie wirkt", "Hier in der App"], rows: [
            ["**Abrufen statt Wiederlesen** (Retrieval Practice)", "Aktives Erinnern festigt Wissen deutlich stärker als erneutes Lesen (Roediger & Karpicke 2006; Dunlosky et al. 2013)", "Karteikarten, Selbsttests, Richtig/Falsch-Fragen, Zeichenaufgaben ohne Vorlage"],
            ["**Verteiltes Wiederholen** (Spacing)", "Wiederholung mit wachsendem Abstand hält länger als Pauken (Cepeda et al. 2006)", "Spaced Repetition für Karten und Zeichenaufgaben"],
            ["**Selbst zeichnen** (Generative Drawing)", "Wer eine Kurve oder Struktur selbst erzeugt, muss das Wesentliche auswählen und verknüpfen; Zeichnen schneidet in Metaanalysen meist besser ab als Zusammenfassen (Fiorella & Zhang 2018) – am besten mit Anleitung und Vergleich mit einer Vorlage", "Zeichentraining mit Checkliste und Musterzeichnung"],
            ["**Selbsterklären und laut erklären**", "Erklären deckt Lücken auf und verbessert Verständnis und Transfer (Chi et al. 1994); entspricht direkt dem SOE-Format", "Warum-Fragen im Spezialwissen, SOE-Simulation"],
            ["**Mischen statt Blocken** (Interleaving)", "Gemischte Themen trainieren, die passende Strategie zu erkennen (Rohrer & Taylor 2007)", "Gewichtete Prüfungssimulation, gemischte Fragen"],
            ["**Unter Prüfungsbedingungen üben**", "Zeitdruck und Format üben verringert Überraschungen und deckt Selbstüberschätzung auf", "Teil-1-Simulation mit Zeitlimit, SOE mit 10 + 25 min"]
          ] } },
          { kette: [
            "Thema im Spezialwissen erarbeiten (Leitfrage, Warum-Fragen)",
            "Kernkurve bzw. Struktur ohne Vorlage zeichnen und laut dazu erklären",
            "Mit Checkliste und Musterzeichnung vergleichen, Lücken nachlesen",
            "Karten und Richtig/Falsch-Fragen zum Thema über Tage verteilt wiederholen",
            "==Einmal pro Woche eine SOE unter Zeitbedingungen – am besten mit einem Lernpartner, der die Rolle des Prüfers übernimmt=="
          ], titel: "Ein Lernzyklus pro Thema" },
          "Die ESAIC empfiehlt ausdrücklich, Falldiskussionen mit Ausbildern, Kollegen und Mentoren so oft wie möglich zu üben – besonders, wenn die Prüfung nicht in der Muttersprache abgelegt wird."
        ]
      }
    ],
    quellen: [
      "ESAIC. Diploma Guide 2025 (EDAIC Teil 1 und Teil 2: Aufbau, Bewertung, Bestehensregeln). esaic.org.",
      "ESAIC. How to prepare for the EDAIC (2022): SOE-Ablauf, geführte Fragen, Bewertungsbeschreibungen 0/1/2, Gründe für Nichtbestehen, Bilder, Diagramme und Graphen. esaic.org.",
      "ESAIC. EDAIC Part I – Instructions to candidates (2021): Richtig/Falsch-Format, keine Minuspunkte. esaic.org.",
      "Ärztekammer Westfalen-Lippe. Westfälisches Ärzteblatt, Serie Junge Ärzte: Ablauf der Facharztprüfung (Ausschuss, Mindestdauer 30 min).",
      "Bundesärztekammer. (Muster-)Weiterbildungsordnung 2018 und Logbuch Facharzt Anästhesiologie.",
      "Roediger HL, Karpicke JD. Psychol Sci 2006;17:249–255. – Dunlosky J et al. Psychol Sci Public Interest 2013;14:4–58. – Cepeda NJ et al. Psychol Bull 2006;132:354–380.",
      "Fiorella L, Zhang Q. Drawing boundary conditions for learning by drawing. Educ Psychol Rev 2018;30:1115–1137.",
      "Chi MTH et al. Cogn Sci 1994;18:439–477. – Rohrer D, Taylor K. Instr Sci 2007;35:481–498."
    ]
  };
})();
