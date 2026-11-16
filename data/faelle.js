// Ausführliche Fälle zur Selbstprüfung für EDAIC Teil 2 (SOE): schrittweise Verläufe mit neuen Befunden,
// Frage, erwarteten Kernpunkten zum Abhaken und Erklärung mit Kausalketten. Eigene Fälle (keine echten
// Patienten, keine Prüfungsfragen), Themen gegliedert wie die großen Lehrbücher (u.a. Miller's Anesthesia),
// Inhalte aus Fachwissen und aktuellen Leitlinien – kein Lehrbuchtext.
// Format: { id, soe, titel, kurz, themen:[...], lernziele:[...], ausgang, schritte:[{ info, frage, punkte:[...], erklaerung }],
//           fallstricke:[...], links:[[href, label]] }
window.FAELLE = [
  // ===================================================================== 1
  {
    id: "fall-gefaess-ischaemie", soe: 3, titel: "Myokardischämie bei offener Aortenchirurgie",
    kurz: "KHK mit Stent, aortobifemoraler Bypass, ST-Senkung nach Abklemmen, Kreislaufeinbruch nach Freigabe, Troponinanstieg",
    themen: ["Kardiale Risikoevaluation", "Gefäßchirurgie", "Myokardiale O₂-Bilanz", "Perioperativer Myokardschaden"],
    lernziele: ["Präoperative Risikoeinschätzung und Medikamentenmanagement bei KHK mit Stent", "Hämodynamik beim Ab- und Freigeben der Aorta erklären und steuern", "Myokardschaden nach nicht-kardialer OP erkennen und einordnen"],
    ausgang: "68-jähriger Mann, 82 kg, pAVK Stadium III, geplant: aortobifemoraler Bypass. Vorerkrankungen: KHK mit medikamentenfreisetzendem Stent im RIVA vor 14 Monaten, arterielle Hypertonie, Diabetes Typ 2 (Metformin), Ex-Raucher. Medikation: ASS 100 mg, Clopidogrel 75 mg, Bisoprolol 5 mg, Atorvastatin 40 mg, Ramipril 5 mg. Belastbarkeit: 1 Stockwerk, dann Wadenschmerz (nicht kardial limitiert). EKG: Sinusrhythmus 62/min, alte Q-Zacken nicht vorhanden.",
    schritte: [
      {
        info: "Prämedikationsvisite am Vortag. Der Patient fragt, welche Tabletten er weiter nehmen soll. Geplant ist Allgemeinanästhesie mit thorakalem Periduralkatheter.",
        frage: "Wie schätzen Sie das kardiale Risiko ein, und wie gehen Sie mit seiner Medikation und dem Periduralkatheter um?",
        punkte: [
          "Gefäßchirurgie an der Aorta = **Hochrisiko-Eingriff** (kardiales Risiko > 5 %)",
          "Risikofaktoren (z.B. revidierter kardialer Risikoindex): KHK, Diabetes, Hochrisiko-Eingriff; Belastbarkeit wegen Claudicatio nicht beurteilbar",
          "Stent vor 14 Monaten: elektive OP nach DES frühestens nach etwa 6 Monaten sinnvoll → **Zeitpunkt in Ordnung**",
          "**ASS weiter**, Clopidogrel pausieren (meist 5 Tage; für den Periduralkatheter nach Fachgesellschaft 5–7 Tage)",
          "**Betablocker und Statin weiter**; ACE-Hemmer am OP-Morgen meist pausieren (Hypotonie nach Einleitung)",
          "Metformin am OP-Tag pausieren; Blutzucker kontrollieren",
          "**Troponin vor der OP und an Tag 1–2 danach**; Echokardiographie nur bei neuen Symptomen, Geräusch oder unklarer Funktion"
        ],
        erklaerung: "==OP-Stress → Katecholamine → Herzfrequenz und Blutdruck ↑ → O₂-Bedarf ↑ hinter einer fixen Stenose → Ischämie==. Deshalb zählt nicht nur die Diagnostik, sondern die Fortführung schützender Medikamente. ASS weglassen erhöht das Stentthromboserisiko, beide Plättchenhemmer weiterführen verbietet den Periduralkatheter."
      },
      {
        info: "Intraoperativ unter Allgemeinanästhesie und Periduralanalgesie. Nach Abklemmen der infrarenalen Aorta: Blutdruck 185/100 mmHg, Herzfrequenz 95/min, ST-Senkung 1,5 mm in Ableitung V5, etCO₂ 36 mmHg, Hb 11 g/dl.",
        frage: "Was passiert pathophysiologisch, und wie behandeln Sie?",
        punkte: [
          "Abklemmen → **Nachlast ↑** → Wandspannung des linken Ventrikels ↑ → O₂-Bedarf ↑",
          "Ischämiezeichen: ST-Senkung, früher noch neue Wandbewegungsstörung in der transösophagealen Echokardiographie",
          "Narkose und Analgesie prüfen und vertiefen (Periduralkatheter bestücken)",
          "**Nachlast senken**: Nitroglycerin, Urapidil oder Clevidipin",
          "**Herzfrequenz senken**: Esmolol, wenn Volumenstatus ausreichend",
          "O₂-Angebot sichern: SpO₂, Hb, diastolischer Druck; Chirurgen informieren"
        ],
        erklaerung: "Myokardiale O₂-Bilanz: **Bedarf** = Herzfrequenz, Kontraktilität, Wandspannung (Laplace: Druck × Radius / 2 × Wanddicke); **Angebot** = koronarer Perfusionsdruck (diastolischer Aortendruck − LVEDP), Diastolendauer, O₂-Gehalt. ==Tachykardie verkürzt die Diastole → weniger Durchblutung bei gleichzeitig mehr Bedarf== – deshalb ist die Frequenz der wichtigste Hebel."
      },
      {
        info: "Nach 50 min wird die Aorta freigegeben. Blutdruck fällt auf 70/40 mmHg, Herzfrequenz 110/min, etCO₂ steigt kurz auf 48 mmHg. BGA: pH 7,25, Laktat 4,5 mmol/l, Kalium 5,4 mmol/l.",
        frage: "Wie erklären Sie den Blutdruckabfall, und was hätten Sie vorbeugend tun können?",
        punkte: [
          "**Freigabe → Nachlast fällt schlagartig** + reaktive Hyperämie der Beine (Blut versackt)",
          "Ausschwemmen saurer Metabolite (Laktat, CO₂, Kalium) → Vasodilatation und Myokarddepression",
          "Vorbeugen: **Volumen vor Freigabe** auffüllen, Narkose leicht reduzieren, Vasopressor vorbereiten",
          "**Schrittweise Freigabe** durch den Chirurgen; bei Bedarf erneut kurz abklemmen",
          "Beatmung steigern (CO₂), Calcium bei Hyperkaliämie, BGA-Kontrolle"
        ],
        erklaerung: "==Ischämie der Beine → Laktat, CO₂, Kalium sammeln sich → Freigabe → plötzlicher Einstrom → Gefäße weit, Herz geschwächt → Blutdruck fällt==. Die Zusammenarbeit mit dem Operateur (Ankündigen, langsam freigeben) ist hier die wichtigste Maßnahme."
      },
      {
        info: "Tag 1 nach der OP: Patient beschwerdefrei. Hochsensitives Troponin T präoperativ 15 ng/l, jetzt 120 ng/l. EKG unverändert. Hb 9,8 g/dl, nachts zwei hypotone Phasen mit Herzfrequenz um 100/min.",
        frage: "Wie bewerten Sie den Troponinanstieg, und was folgt daraus?",
        punkte: [
          "**Myokardschaden nach nicht-kardialer OP**: Troponinanstieg über die Norm durch Ischämie, meist ohne Symptome",
          "Mit erhöhter 30-Tage-Sterblichkeit verbunden – **kein harmloser Laborwert**",
          "Meist **Typ-2-Infarkt** (Missverhältnis Angebot/Bedarf: Hypotonie, Tachykardie, Anämie), seltener Typ 1 (Plaqueruptur)",
          "Auslöser behandeln: Blutdruck, Frequenz, Hb, Schmerz",
          "Kardiologie einbinden, Echokardiographie, ASS und Statin sicher fortführen, weitere Koronardiagnostik je nach Befund"
        ],
        erklaerung: "Ohne routinemäßige Messung bleiben die meisten Fälle unentdeckt, weil Patienten unter Analgesie keine Brustschmerzen äußern. ==Hypotonie + Tachykardie + Anämie → O₂-Angebot ↓, Bedarf ↑ → Myozyten gehen zugrunde → Troponin ↑==."
      },
      {
        info: "Der Assistenzarzt schlägt vor, bei künftigen Patienten am OP-Morgen Metoprolol neu und hochdosiert zu beginnen und zusätzlich Clonidin zu geben, um Infarkte zu verhindern.",
        frage: "Was sagt die Evidenz zu diesen und anderen Präventionsmaßnahmen?",
        punkte: [
          "**Betablocker nicht kurz vor der OP neu und hochdosiert beginnen**: in einer großen Studie (POISE) weniger Infarkte, aber mehr Schlaganfälle und höhere Sterblichkeit (Hypotonie, Bradykardie)",
          "Bestehende Betablocker weiterführen",
          "Clonidin oder ASS neu begonnen (POISE-2): kein Nutzen, mehr Hypotonie bzw. Blutungen",
          "Intraoperative Hypotonie ist mit Myokard- und Nierenschaden verbunden → Mitteldruck etwa ≥ 65 mmHg bzw. nahe am Ausgangswert halten",
          "Statine weiterführen, Anämie und Hypothermie vermeiden, gute Analgesie"
        ],
        erklaerung: "Der Gedanke „Frequenz senken schützt das Herz“ stimmt physiologisch – aber ==zu viel Betablockade → Hypotonie → Hirn und Herz minderdurchblutet → Schlaganfall==. Deshalb zählt die Titration über Wochen, nicht eine Dosis am OP-Tag."
      }
    ],
    fallstricke: ["Alle Plättchenhemmer absetzen (Stentthrombose)", "Freigabe der Aorta nicht vorbereitet", "Troponin nicht gemessen oder als „Laborrauschen“ abgetan"],
    links: [["#/soe-case/soe-khk-noncardiac", "SOE: KHK und duale Plättchenhemmung"], ["#/zeichnen-aufgabe/z-wiggers", "Herzzyklus zeichnen"], ["#/zeichnen-aufgabe/z-pv-loop", "Druck-Volumen-Schleife zeichnen"]]
  },

  // ===================================================================== 2
  {
    id: "fall-polytrauma", soe: 4, titel: "Polytrauma mit Massivblutung",
    kurz: "Beckenfraktur und Milzruptur, Schockraum, Gerinnungsmanagement nach ROTEM, Narkoseeinleitung im Schock",
    themen: ["Traumaversorgung", "Massivtransfusion", "Gerinnung und Viskoelastik", "Narkose im Schock"],
    lernziele: ["Strukturierte Erstversorgung mit Blutungskontrolle", "Gerinnungsstörung beim Trauma verstehen und gezielt behandeln", "Narkoseeinleitung bei hämorrhagischem Schock"],
    ausgang: "35-jähriger Motorradfahrer, Frontalkollision. Ankunft im Schockraum: Herzfrequenz 130/min, Blutdruck 80/50 mmHg, Atemfrequenz 28/min, SpO₂ 94 % unter O₂, GCS 14, Haut kalt und blass, Körpertemperatur 34,8 °C. Instabiles Becken, Abwehrspannung im linken Oberbauch.",
    schritte: [
      {
        info: "Sie übernehmen die Versorgung. Zwei periphere Zugänge 18 G liegen, 1 Liter Kristalloid läuft.",
        frage: "Wie gehen Sie in den ersten Minuten strukturiert vor?",
        punkte: [
          "**<C>ABCDE**: kritische Blutung zuerst (Beckengurt, Kompression äußerer Blutungen, Tourniquet)",
          "Großlumige Zugänge bzw. intraossär; Blutentnahme mit Blutgruppe, Gerinnung, BGA, Laktat",
          "**Tranexamsäure 1 g** über 10 min innerhalb von 3 h nach Trauma, danach 1 g über 8 h",
          "**Permissive Hypotension**: systolisch etwa 80–90 mmHg bis zur Blutungskontrolle (nicht bei Schädel-Hirn-Trauma)",
          "Kristalloide begrenzen, früh **Blutprodukte** über ein Massivtransfusionsprotokoll",
          "**Wärmeerhalt** (Wärmedecke, erwärmte Infusionen), eFAST, schnelle Entscheidung: OP, Angiographie, Beckenstabilisierung (Damage Control)"
        ],
        erklaerung: "**Letale Trias**: ==Blutverlust → Hypothermie + Azidose → Gerinnungsenzyme arbeiten schlechter → mehr Blutung== – zusätzlich Verdünnung durch Kristalloide. Jede Minute bis zur Blutungskontrolle zählt."
      },
      {
        info: "Labor nach 20 min: Hb 7,2 g/dl, Fibrinogen 1,1 g/l, INR 1,6, Thrombozyten 95/nl, ionisiertes Calcium 0,90 mmol/l, pH 7,18, Laktat 6 mmol/l. ROTEM: FIBTEM A5 5 mm (erniedrigt), EXTEM-Gerinnungszeit (CT) verlängert, EXTEM A5 erniedrigt, keine Hyperfibrinolyse.",
        frage: "Interpretieren Sie die Befunde und leiten Sie die Gerinnungstherapie ab.",
        punkte: [
          "**Fibrinogen ist als Erstes kritisch** erniedrigt → Fibrinogenkonzentrat (z.B. 3–4 g beim Erwachsenen) oder Kryopräzipitat; Ziel etwa 1,5–2 g/l",
          "FIBTEM niedrig = Fibrinogenmangel; EXTEM-Gerinnungszeit (CT) verlängert = Mangel an Gerinnungsfaktoren → nach Fibrinogen Plasma oder Prothrombinkomplex",
          "Thrombozyten über 50/nl halten (bei Schädel-Hirn-Trauma bzw. anhaltender Blutung über 100/nl)",
          "**Calcium substituieren** (Ziel Normbereich): Citrat aus Blutprodukten bindet Calcium",
          "Azidose und Hypothermie mitbehandeln – Gerinnung funktioniert bei pH < 7,2 und < 35 °C schlecht"
        ],
        erklaerung: "==Blutung + Verdünnung → Fibrinogen fällt als erster Faktor kritisch ab → Gerinnsel bleibt instabil==. ==Citrat bindet Calcium → ionisiertes Calcium ↓ → Gerinnung und Herzkraft ↓==."
      },
      {
        info: "Das Massivtransfusionsprotokoll läuft. Die Pflegekraft fragt, in welchem Verhältnis Erythrozytenkonzentrate, Plasma und Thrombozyten gegeben werden sollen, und was bei so vielen Konserven droht.",
        frage: "Welches Verhältnis wählen Sie, und welche Komplikationen der Massivtransfusion kennen Sie?",
        punkte: [
          "Anfangs **ausgewogen, etwa 1:1:1** (Erythrozyten : Plasma : Thrombozyten), dann **zielgerichtet nach Labor und Viskoelastik**",
          "Studienlage (PROPPR): 1:1:1 gegenüber 1:1:2 ohne Unterschied der Gesamtsterblichkeit, aber weniger Verbluten in den ersten 24 h",
          "Komplikationen: **Hypothermie, Hypokalzämie (Citrat), Hyperkaliämie**, Azidose, Verdünnungskoagulopathie",
          "Transfusionsreaktionen: TRALI, TACO, hämolytische Reaktion (Verwechslung), Infektionen",
          "Wärmegerät und Schnellinfusionssystem verwenden"
        ],
        erklaerung: "==Gelagerte Erythrozyten verlieren Kalium aus den Zellen → schnelle Gabe großer Mengen → Hyperkaliämie, besonders bei Azidose und Hypothermie==."
      },
      {
        info: "Notfall-Laparotomie. Blutdruck 82/48 mmHg unter laufender Transfusion, Herzfrequenz 128/min. Patient wach, hat vor 2 h gegessen.",
        frage: "Wie leiten Sie die Narkose ein?",
        punkte: [
          "**Blitzeinleitung** im OP, Chirurgen steril und bereit („Schnitt nach Intubation“)",
          "Präoxygenierung, Videolaryngoskop, Absaugung",
          "**Hypnotikum stark reduziert**: z.B. Ketamin 0,5–1 mg/kg oder Etomidat reduziert; Propofol nur sehr vorsichtig",
          "Rocuronium 1–1,2 mg/kg (bzw. Succinylcholin)",
          "**Vasopressor bereit** bzw. laufend (Noradrenalin), Transfusion parallel; arterieller Zugang darf die Einleitung nicht verzögern"
        ],
        erklaerung: "==Im Schock hält nur noch der Sympathikus den Blutdruck → Hypnotikum nimmt den Sympathikotonus weg → Gefäße weit, Herz schwächer → Kreislaufstillstand==. Zusätzlich: kleineres zentrales Volumen → höhere Spiegel im Gehirn → weniger Dosis nötig."
      },
      {
        info: "Nach Damage-Control-Laparotomie (Splenektomie, Bauchtücher) Übernahme auf die Intensivstation. Blutdruck stabil mit wenig Noradrenalin, Temperatur 35,5 °C, Laktat 3,8 mmol/l.",
        frage: "Welche Ziele verfolgen Sie in den nächsten 24 Stunden, und worauf achten Sie?",
        punkte: [
          "Endpunkte: **Laktat fällt**, Basendefizit normalisiert sich, Diurese ≥ 0,5 ml/kg/h",
          "Normothermie, Gerinnung normalisieren, Hb etwa 7–9 g/dl",
          "**Abdominelles Kompartmentsyndrom** (Blasendruck > 20 mmHg mit neuem Organversagen) erkennen",
          "Tertiärer Untersuchungsgang (übersehene Verletzungen), geplante Re-Laparotomie",
          "Thromboseprophylaxe beginnen, sobald die Blutung kontrolliert ist (Kompression sofort, Medikamente meist innerhalb 24 h)"
        ],
        erklaerung: "Damage Control heißt: erst Physiologie (Wärme, Gerinnung, Azidose), dann Anatomie. ==Bauchtücher + Ödem → Bauchdruck ↑ → Nieren- und Lungenfunktion ↓, venöser Rückstrom ↓==."
      }
    ],
    fallstricke: ["Viel Kristalloid statt Blutprodukte", "Calcium vergessen", "Volle Einleitungsdosis im Schock"],
    links: [["#/zeichnen-aufgabe/z-rotem", "ROTEM zeichnen"], ["#/soe-case/soe-rotem", "SOE: Viskoelastisch gesteuerte Therapie"], ["#/soe-themen/4", "eFAST und Bildbefund"]]
  },

  // ===================================================================== 3
  {
    id: "fall-aortenstenose-huefte", soe: 3, titel: "Schwere Aortenstenose und Hüftfraktur",
    kurz: "Hochbetagte Patientin, schwere Aortenstenose, Spinal- oder Allgemeinanästhesie, neues Vorhofflimmern, Delir",
    themen: ["Herzklappenerkrankungen", "Geriatrische Anästhesie", "Regionalanästhesie", "Postoperatives Delir"],
    lernziele: ["Pathophysiologie der Aortenstenose und hämodynamische Ziele", "Verfahrenswahl begründen", "Delir vorbeugen und erkennen"],
    ausgang: "84-jährige Frau, 58 kg, Sturz zu Hause, Schenkelhalsfraktur links. Seit Monaten Belastungsdyspnoe, zweimal kurze Bewusstlosigkeit beim Treppensteigen. Lautes Systolikum mit Fortleitung in die Karotiden. Leichte Demenz. Medikation: Ramipril, Torasemid, Apixaban (letzte Einnahme gestern Abend).",
    schritte: [
      {
        info: "Notfall-Echokardiographie: Aortenklappenöffnungsfläche 0,7 cm², mittlerer Gradient 48 mmHg, maximale Flussgeschwindigkeit 4,4 m/s, Ejektionsfraktion 55 %, konzentrische Hypertrophie.",
        frage: "Wie stufen Sie den Befund ein, und wann operieren Sie?",
        punkte: [
          "**Schwere Aortenstenose**: Öffnungsfläche < 1 cm², mittlerer Gradient ≥ 40 mmHg, Geschwindigkeit ≥ 4 m/s – symptomatisch (Dyspnoe, Synkopen)",
          "Hüftfraktur möglichst **innerhalb von 24–48 h** operieren – Verzögerung erhöht Komplikationen und Sterblichkeit",
          "Klappeneingriff (TAVI) vorab im Akutfall meist nicht sinnvoll; interdisziplinär (Kardiologie) besprechen",
          "Apixaban: letzte Einnahme > 24–48 h je nach Nierenfunktion vor neuroaxialem Verfahren abwarten bzw. Spiegel bestimmen",
          "Präoperativ **Analgesie mit Fascia-iliaca-Block**"
        ],
        erklaerung: "Die Hüftfraktur ist der Notfall – die Aortenstenose bestimmt, **wie** man narkotisiert, nicht **ob**. ==Liegen und Schmerz → Delir, Pneumonie, Thrombose → Sterblichkeit ↑ mit jedem Tag Verzögerung==."
      },
      {
        info: "Der Oberarzt bittet Sie, die Pathophysiologie zu erklären, bevor Sie das Verfahren festlegen.",
        frage: "Warum ist eine schwere Aortenstenose in Narkose gefährlich, und welche hämodynamischen Ziele haben Sie?",
        punkte: [
          "Fixe Ausflussbehinderung → **konzentrische Hypertrophie** → steifer Ventrikel → abhängig von **Vorlast** und **Vorhofkontraktion**",
          "Hypertrophie → O₂-Bedarf ↑; hoher Füllungsdruck → subendokardiale Durchblutung ↓",
          "Herzzeitvolumen kann kaum steigen → **Vasodilatation führt direkt zu Hypotonie**",
          "Ziele: **Sinusrhythmus**, Frequenz niedrig-normal (etwa 60–80/min), Vorlast erhalten, **Gefäßwiderstand erhalten** (Phenylephrin, Noradrenalin), Kontraktilität erhalten"
        ],
        erklaerung: "==Vasodilatation → Blutdruck ↓ → koronarer Perfusionsdruck ↓ → Ischämie des hypertrophen Ventrikels → Pumpleistung ↓ → Blutdruck ↓ (Teufelskreis)==. Deshalb wird der Abfall vorbeugend mit einem Vasokonstriktor abgefangen."
      },
      {
        info: "Die Patientin ist kooperativ, Gerinnung unauffällig, Apixaban seit 40 h pausiert bei normaler Nierenfunktion.",
        frage: "Spinal- oder Allgemeinanästhesie – wie entscheiden und wie führen Sie das Verfahren durch?",
        punkte: [
          "Kein Sterblichkeitsunterschied zwischen Spinal- und Allgemeinanästhesie bei Hüftfraktur (z.B. REGAIN-Studie)",
          "Schwere Aortenstenose ist **keine absolute Kontraindikation** für eine Spinalanästhesie – aber schnelle, ausgedehnte Sympathikolyse vermeiden",
          "Spinal: **niedrige Dosis**, einseitig, langsam, ggf. kontinuierlich über Katheter; Noradrenalin bzw. Phenylephrin vorbeugend",
          "Allgemein: **arterieller Zugang vor Einleitung**, langsame Titration, Vasopressor laufend",
          "In beiden Fällen: Defibrillator bereit, Volumen vorsichtig, Normothermie"
        ],
        erklaerung: "Entscheidend ist nicht das Verfahren, sondern die **Langsamkeit**: ==langsame Blockade bzw. Einleitung → Zeit für Gegenregulation und Vasopressor → stabiler Druck==."
      },
      {
        info: "Während der Implantation einer zementierten Hemiprothese: neues Vorhofflimmern mit 125/min, Blutdruck 65/35 mmHg, SpO₂ 93 %.",
        frage: "Was tun Sie?",
        punkte: [
          "Ursachen bedenken: **Knochenzement-Implantationssyndrom**, Blutung, Ischämie, Elektrolyte",
          "Vorhofflimmern → **Verlust der Vorhofkontraktion** (beim steifen Ventrikel großer Anteil der Füllung) und kurze Diastole",
          "Instabil → **synchronisierte Kardioversion**",
          "Sofort Vasopressor (Noradrenalin/Phenylephrin), FiO₂ 1,0, Volumen vorsichtig",
          "Danach Amiodaron erwägen, Elektrolyte (Kalium, Magnesium) ausgleichen"
        ],
        erklaerung: "==Vorhofflimmern → keine Vorhofkontraktion + Tachykardie → Füllung des steifen Ventrikels ↓ → Schlagvolumen ↓ → Blutdruck ↓ → Ischämie==. Bei Aortenstenose wird hämodynamisch instabiles Vorhofflimmern sofort elektrisch behandelt."
      },
      {
        info: "Nacht nach der OP: Die Patientin ist unruhig, zupft an Kabeln, nicht orientiert, tagsüber war sie klar.",
        frage: "Wie erkennen, behandeln und verhindern Sie ein postoperatives Delir?",
        punkte: [
          "Akuter Beginn, schwankender Verlauf, Aufmerksamkeitsstörung → **Delir**; Screening z.B. mit 4AT oder CAM",
          "**Ursachen suchen**: Schmerz, Hypoxie, Harnverhalt, Infektion, Elektrolyte, Hypoglykämie, Medikamente (Anticholinergika, Benzodiazepine)",
          "Nicht-medikamentös: Orientierung, Brille und Hörgerät, Tag-Nacht-Rhythmus, frühe Mobilisation, Angehörige",
          "Opioide sparen durch **Regionalanästhesie**, Benzodiazepine vermeiden",
          "Medikamente nur bei Eigen- oder Fremdgefährdung (z.B. niedrig dosiert Haloperidol)"
        ],
        erklaerung: "Das Delir ist eine akute Hirnfunktionsstörung und kein „normales Altern“: ==Alter + Demenz + Schmerz + Medikamente → Neurotransmitter-Ungleichgewicht → Delir → Sterblichkeit und Pflegebedürftigkeit ↑==."
      }
    ],
    fallstricke: ["Hochdosierte Single-Shot-Spinalanästhesie ohne Vasopressor", "Vorhofflimmern bei Aortenstenose medikamentös „abwarten“", "Delir mit Benzodiazepinen behandeln"],
    links: [["#/soe-case/soe-hueftfraktur", "SOE: Hüftfraktur mit DOAK"], ["#/zeichnen-aufgabe/z-pv-loop", "Druck-Volumen-Schleife zeichnen"], ["#/fall/fall-zementsyndrom", "Fall: Knochenzement-Implantationssyndrom"]]
  },

  // ===================================================================== 4
  {
    id: "fall-hellp-sectio", soe: 3, titel: "HELLP-Syndrom mit Notsectio",
    kurz: "Schwere Präeklampsie, fallende Thrombozyten, Allgemeinanästhesie zur Sectio, Atonie, Magnesium",
    themen: ["Geburtshilfliche Anästhesie", "Präeklampsie", "Atemweg in der Schwangerschaft", "Peripartale Blutung"],
    lernziele: ["Akuttherapie der schweren Präeklampsie", "Grenzen der neuroaxialen Anästhesie bei Thrombozytopenie", "Sichere Allgemeinanästhesie bei Präeklampsie", "Atonie medikamentös richtig behandeln"],
    ausgang: "32-jährige Erstgebärende, 34. Schwangerschaftswoche, 78 kg. Blutdruck 170/112 mmHg, starke Kopfschmerzen, Augenflimmern, Oberbauchschmerz rechts. Labor: Thrombozyten 68/nl (vor 6 h 95/nl), ALT und AST deutlich erhöht, LDH erhöht, Haptoglobin erniedrigt. Proteinurie.",
    schritte: [
      {
        info: "Die Geburtshelfer planen eine Entbindung in den nächsten Stunden. Sie werden zur Stabilisierung gerufen.",
        frage: "Welche Diagnose stellen Sie, und wie behandeln Sie akut?",
        punkte: [
          "**Schwere Präeklampsie mit HELLP-Syndrom** (Hämolyse, erhöhte Leberwerte, niedrige Thrombozyten)",
          "**Blutdrucksenkung** bei ≥ 160/110 mmHg: z.B. Urapidil i.v., Nifedipin oral oder Dihydralazin; Ziel etwa 140–150/90–100 mmHg, nicht zu tief (Plazentaperfusion)",
          "**Magnesium** zur Eklampsieprophylaxe: 4–6 g i.v. über 15–20 min, dann 1–2 g/h",
          "Überwachung unter Magnesium: Patellarsehnenreflex, Atemfrequenz, Diurese, ggf. Spiegel; **Antidot Calcium**",
          "Flüssigkeit restriktiv (Lungenödemgefahr), Gerinnung und Thrombozyten engmaschig"
        ],
        erklaerung: "==Gestörte Plazentation → Gefäßfaktoren aus der Plazenta → Endothelschaden in der Mutter → Vasokonstriktion, Kapillarleck, Thrombozytenverbrauch==. Hoher Blutdruck gefährdet vor allem das Gehirn (Blutung, Eklampsie)."
      },
      {
        info: "Das CTG wird pathologisch, Notsectio innerhalb von 20 min. Thrombozyten jetzt 61/nl.",
        frage: "Ist eine Spinalanästhesie möglich?",
        punkte: [
          "Grenzwert nicht absolut; Thrombozyten **≥ 70/nl** gelten bei stabilem Verlauf meist als vertretbar (Konsens geburtshilflicher Fachgesellschaften)",
          "**Rasch fallender Verlauf** und HELLP (auch Funktionsstörung der Plättchen) sprechen dagegen",
          "Hier 61/nl und fallend → **Allgemeinanästhesie** wahrscheinlich sicherer",
          "Abwägen gegen die Atemwegsrisiken – Entscheidung gemeinsam und dokumentiert",
          "Bei liegendem Periduralkatheter: Entfernung erst, wenn Thrombozyten wieder ausreichend"
        ],
        erklaerung: "==Thrombozyten ↓ + Punktion → Blutung in den Spinal- bzw. Periduralraum → Kompression des Rückenmarks → bleibende Lähmung==. Das Risiko ist selten, aber katastrophal – der Trend zählt mehr als eine einzelne Zahl."
      },
      {
        info: "Sie führen eine Allgemeinanästhesie durch. Mallampati III, Gesichtsödem.",
        frage: "Welche Risiken hat die Allgemeinanästhesie hier, und wie leiten Sie ein?",
        punkte: [
          "**Schwieriger Atemweg** (Schleimhautödem), schnelle Entsättigung (FRC ↓, O₂-Verbrauch ↑), **Aspiration**",
          "**Blutdruckspitze bei der Laryngoskopie** → Hirnblutung → abmildern z.B. mit Remifentanil (etwa 1 µg/kg) – Neonatologie informieren",
          "Präoxygenierung (auch nasale High-Flow-Sauerstoffgabe), Oberkörper erhöht, Videolaryngoskop, **kleinere Tuben** (6,0–7,0)",
          "Blitzeinleitung mit Propofol und Rocuronium; **Magnesium verstärkt Muskelrelaxanzien** → quantitativ überwachen, Sugammadex verfügbar",
          "Plan für fehlgeschlagene Intubation (geburtshilflicher Algorithmus) besprechen"
        ],
        erklaerung: "==Präeklampsie → gestörte zerebrale Autoregulation → Blutdruckspitze überträgt sich ungebremst ins Gehirn → Blutung==. Die Hirnblutung ist eine Hauptursache mütterlicher Todesfälle bei Präeklampsie."
      },
      {
        info: "Nach Entwicklung des Kindes: Uterus schlaff, Blutverlust bereits 1200 ml, Blutdruck 95/55 mmHg.",
        frage: "Wie behandeln Sie die Atonie medikamentös, und was dürfen Sie hier nicht geben?",
        punkte: [
          "**Oxytocin** langsam (z.B. 3–5 IE) und als Infusion bzw. Carbetocin; zu schnelle Bolusgabe → Hypotonie",
          "Bei Versagen **Sulproston** als Infusion",
          "**Methylergometrin bei Präeklampsie kontraindiziert** (Vasokonstriktion → Blutdruckkrise)",
          "**Tranexamsäure 1 g**, Fibrinogen früh (Ziel in der Geburtshilfe > 2 g/l), Massivtransfusion vorbereiten",
          "Mechanisch: Uteruskompression, Ballontamponade, chirurgische Maßnahmen"
        ],
        erklaerung: "==Niedriges Fibrinogen ist der früheste Vorhersagewert für eine schwere peripartale Blutung== – in der Schwangerschaft ist der Normwert höher (etwa 4–6 g/l), daher sind 2 g/l bereits deutlich erniedrigt."
      },
      {
        info: "Übernahme auf die Intensivstation nach der OP. Die Hebamme fragt, ob das Magnesium jetzt gestoppt werden kann.",
        frage: "Worauf achten Sie in den ersten 24–48 Stunden nach der Entbindung?",
        punkte: [
          "**Magnesium etwa 24 h** nach Entbindung fortführen – Eklampsie auch postpartal möglich",
          "Blutdruck weiter senken, oral umstellen",
          "**Lungenödem**: restriktive Flüssigkeit, Bilanz, Sauerstoffbedarf",
          "HELLP-Labor kontrollieren (Thrombozyten, Leberwerte, Hämolyse), Niere",
          "Thromboseprophylaxe, sobald Blutung und Thrombozyten es erlauben; NSAR mit Vorsicht (Niere, Thrombozyten)"
        ],
        erklaerung: "Die Entbindung beseitigt die Ursache, aber ==das Endothel erholt sich erst über Tage → Kapillarleck und Hypertonie bestehen fort → Lungenödem und Eklampsie bleiben möglich==."
      }
    ],
    fallstricke: ["Methylergometrin bei Präeklampsie", "Laryngoskopie ohne Abmilderung der Blutdruckspitze", "Magnesium-Überdosierung übersehen (Reflexe, Atmung)"],
    links: [["#/soe-case/soe-pph", "SOE: Peripartale Atonieblutung"], ["#/fall/fall-polytrauma", "Fall: Massivblutung und Gerinnung"]]
  },

  // ===================================================================== 5
  {
    id: "fall-tonsillennachblutung", soe: 3, titel: "Nachblutung nach Tonsillektomie beim Kind",
    kurz: "Fünfjähriges Kind, geschlucktes Blut, Hypovolämie, Blitzeinleitung beim Kind, Ausleitung",
    themen: ["Kinderanästhesie", "Atemweg und Aspiration", "Volumentherapie beim Kind", "Analgesie nach Tonsillektomie"],
    lernziele: ["Hypovolämie beim Kind erkennen", "Blitzeinleitung beim Kind sicher durchführen", "Dosierungen und Formeln beim Kind anwenden"],
    ausgang: "5-jähriges Mädchen, 20 kg, Tag 6 nach Tonsillektomie. Seit 2 h Blutung aus dem Mund, mehrfach Blut erbrochen. Blass, Herzfrequenz 150/min, Blutdruck 90/55 mmHg, Rekapillarisierungszeit 3 s, ängstlich.",
    schritte: [
      {
        info: "Die HNO-Ärztin möchte sofort in den OP. Ein Zugang liegt noch nicht.",
        frage: "Wie schätzen Sie die Lage ein, und was bereiten Sie vor?",
        punkte: [
          "**Hypovolämie** wird unterschätzt: Blut wird geschluckt, Kinder halten den Blutdruck lange über die Herzfrequenz – **Hypotonie ist ein Spätzeichen**",
          "**Voller Magen** mit Blut → Aspirationsgefahr; Sicht bei der Laryngoskopie durch Blut erschwert",
          "Zugang (ggf. intraossär), **Volumenbolus 10–20 ml/kg** balancierte Kristalloidlösung, Blutgruppe, Hb, Gerinnung, Erythrozytenkonzentrate bereit",
          "Erfahrenes Team, zwei großlumige Sauger, HNO im Saal, Tuben in mehreren Größen"
        ],
        erklaerung: "==Blutverlust → Sympathikus → Herzfrequenz ↑, Gefäße eng → Blutdruck bleibt lange normal → dann plötzlicher Zusammenbruch==. Blutvolumen beim Kind etwa 70–80 ml/kg, hier also rund 1,5 l – 300 ml sind bereits 20 %."
      },
      {
        info: "Zugang liegt, 300 ml Kristalloid sind gelaufen, Herzfrequenz 135/min. Sie leiten ein.",
        frage: "Wie führen Sie die Narkoseeinleitung durch?",
        punkte: [
          "Präoxygenierung, Kopf tief bzw. Seitenlage möglich, laufende Absaugung",
          "**Blitzeinleitung**: Hypnotikum reduziert (z.B. Ketamin oder Propofol vorsichtig), **Rocuronium 1–1,2 mg/kg**",
          "Beim Kind ist **sanfte Maskenbeatmung** vor der Intubation erlaubt – Kinder entsättigen sehr schnell",
          "Krikoiddruck umstritten, behindert eher die Sicht",
          "Tubus mit Cuff, eine Nummer kleiner bereit; Magen nach Intubation absaugen"
        ],
        erklaerung: "==Hoher O₂-Verbrauch pro kg + kleine FRC → Apnoe → Sättigung fällt beim Kind in Sekunden== – deshalb ist die „kontrollierte“ Blitzeinleitung mit vorsichtiger Beatmung Standard."
      },
      {
        info: "Der Assistent fragt nach den passenden Größen und Dosen für dieses Kind.",
        frage: "Nennen Sie Tubusgröße, Einführtiefe, Blutvolumen und Notfalldosen.",
        punkte: [
          "Tubus mit Cuff: Innendurchmesser ≈ Alter/4 + 3,5 → **etwa 4,5–5,0 mm**",
          "Einführtiefe oral etwa Alter/2 + 12 → **etwa 14–15 cm**",
          "Blutvolumen **70–80 ml/kg → etwa 1,4–1,6 l**",
          "Adrenalin bei Reanimation **10 µg/kg → 200 µg**; Defibrillation 4 J/kg",
          "Flüssigkeitsbolus 10–20 ml/kg; Erythrozyten etwa 10–15 ml/kg heben Hb um etwa 2–3 g/dl"
        ],
        erklaerung: "Formeln sind Startwerte – ==zu großer Tubus → Druck auf die Schleimhaut am Ringknorpel → Ödem → Stridor nach Extubation==. Cuffdruck messen und begrenzen."
      },
      {
        info: "Die Blutung ist chirurgisch gestillt. Hb 7,8 g/dl, Kreislauf stabil.",
        frage: "Wie leiten Sie aus, und worauf achten Sie danach?",
        punkte: [
          "Magen und Rachen gründlich absaugen",
          "**Wach extubieren** (Schutzreflexe), Seitenlage",
          "**Laryngospasmus** möglich → 100 % O₂ mit CPAP, Kiefer vorziehen, ggf. Propofol bzw. Relaxans",
          "Transfusion meist erst unter etwa 7 g/dl bzw. nach Klinik; weiter überwachen (erneute Blutung)",
          "Ursache klären: Sekundärblutung typisch Tag 5–10 (Schorf löst sich)"
        ],
        erklaerung: "==Blut im Rachen + flache Narkose → Stimmbänder schließen reflektorisch → Laryngospasmus → Hypoxie== – deshalb erst wach oder sicher tief extubieren, nicht dazwischen."
      },
      {
        info: "Die Mutter fragt, ob das Ibuprofen schuld war und was ihr Kind gegen Schmerzen bekommen darf.",
        frage: "Wie gestalten Sie die Analgesie nach Tonsillektomie beim Kind?",
        punkte: [
          "**Ibuprofen** erhöht nach aktueller Evidenz das Risiko einer operationspflichtigen Nachblutung nicht wesentlich – bleibt Basis zusammen mit Paracetamol",
          "**Codein bei Kindern unter 12 Jahren kontraindiziert** (ultraschnelle Verstoffwechsler → zu viel Morphin → Atemstillstand, Todesfälle nach Tonsillektomie)",
          "Opioide nur vorsichtig und überwacht, besonders bei obstruktiver Schlafapnoe",
          "Dexamethason einmalig gegen Übelkeit und Schwellung",
          "Eltern über Warnzeichen einer Nachblutung aufklären"
        ],
        erklaerung: "==Genetisch schnelle CYP2D6-Aktivität → Codein wird rasch zu Morphin → Atemdepression, besonders bei Schlafapnoe==."
      }
    ],
    fallstricke: ["Normaler Blutdruck als Zeichen ausreichenden Volumens gewertet", "Kein Plan für Blut im Rachen", "Codein beim Kind"],
    links: [["#/soe-case/soe-laryngospasm", "SOE: Laryngospasmus beim Kind"], ["#/algorithm/pls", "Kinderreanimation"]]
  },

  // ===================================================================== 6
  {
    id: "fall-ards-beatmung", soe: 4, titel: "Schweres ARDS bei Pneumonie",
    kurz: "Horovitz-Quotient 80 mmHg, Beatmung neu einstellen, Bauchlage, ECMO-Kriterien, Kreislauf unter PEEP",
    themen: ["Beatmung", "ARDS", "Atemmechanik", "Herz-Lungen-Interaktion"],
    lernziele: ["ARDS einteilen", "Lungenprotektive Beatmung berechnen und einstellen", "Eskalation bis zur ECMO begründen", "Wirkung von PEEP auf den Kreislauf erklären"],
    ausgang: "58-jähriger Mann, 175 cm, 95 kg, ambulant erworbene Pneumonie, seit gestern intubiert. Beatmung: volumenkontrolliert, Tidalvolumen 600 ml, PEEP 8 cmH₂O, FiO₂ 0,8, Atemfrequenz 16/min. Plateaudruck 34 cmH₂O. BGA: PaO₂ 64 mmHg, PaCO₂ 52 mmHg, pH 7,29. Röntgen: beidseitige Verschattungen. Echo: normale linksventrikuläre Funktion.",
    schritte: [
      {
        info: "Sie übernehmen den Patienten bei der Visite.",
        frage: "Wie ordnen Sie die Situation ein?",
        punkte: [
          "Horovitz-Quotient PaO₂/FiO₂ = 64/0,8 = **80 mmHg → schweres ARDS** (≤ 100 mmHg)",
          "Berlin-Kriterien: Beginn innerhalb 1 Woche, beidseitige Verschattungen, nicht allein kardial erklärt (Echo normal), PEEP ≥ 5",
          "Aktuelle Beatmung **nicht lungenprotektiv**: Tidalvolumen bezogen auf das Standardkörpergewicht zu hoch, Plateaudruck > 30",
          "Driving Pressure = Plateau − PEEP = **26 cmH₂O** (Ziel ≤ 15)"
        ],
        erklaerung: "==Entzündung → Kapillarleck → Alveolen voll Flüssigkeit, Surfactant gestört → kleine „Babylunge“== – nur ein Teil der Lunge ist belüftet, und der bekommt das ganze Volumen ab."
      },
      {
        info: "Sie stellen die Beatmung neu ein.",
        frage: "Berechnen Sie das Tidalvolumen und nennen Sie Ihre Zielwerte.",
        punkte: [
          "Standardkörpergewicht Mann = 50 + 0,91 × (Größe in cm − 152,4) = **etwa 71 kg**",
          "Tidalvolumen **6 ml/kg → etwa 430 ml** (Bereich 4–8 ml/kg)",
          "**Plateaudruck ≤ 30 cmH₂O**, Driving Pressure möglichst ≤ 15 cmH₂O",
          "**PEEP höher** nach Oxygenierung (z.B. PEEP/FiO₂-Tabelle, beim schweren ARDS eher hoch)",
          "Atemfrequenz erhöhen (bis etwa 30–35/min); **permissive Hyperkapnie** mit pH ≥ 7,20 tolerieren",
          "Ziel SpO₂ etwa 88–95 % bzw. PaO₂ 55–80 mmHg"
        ],
        erklaerung: "Das Volumen wird an der Körpergröße, nicht am Gewicht bemessen – ==die Lungengröße wächst mit der Körpergröße, nicht mit dem Bauch==. Zu große Atemzüge überdehnen die gesunden Alveolen (Volutrauma)."
      },
      {
        info: "Nach 6 h: PaO₂/FiO₂ 95 mmHg unter PEEP 14 und FiO₂ 0,8.",
        frage: "Wie eskalieren Sie die Therapie?",
        punkte: [
          "**Bauchlage** bei PaO₂/FiO₂ < 150 mmHg: früh, **mindestens 16 h pro Tag** (PROSEVA: deutlich geringere Sterblichkeit)",
          "Komplikationen der Bauchlage: Tubusdislokation, Druckstellen, Augen, Zugänge – Team und Checkliste",
          "Neuromuskuläre Blockade nicht routinemäßig, kurzzeitig bei schwerer Asynchronie bzw. Hypoxämie erwägen",
          "Restriktive Flüssigkeitstherapie, sobald der Kreislauf stabil ist",
          "Rekrutierungsmanöver mit hohen Drücken nicht routinemäßig (in Studien eher schädlich)"
        ],
        erklaerung: "==Bauchlage → Gewicht von Herz und Bauch drückt weniger auf die dorsalen Abschnitte → gleichmäßigere Belüftung bei unveränderter Durchblutung → bessere Ventilation-Perfusion und weniger Überdehnung==."
      },
      {
        info: "Trotz 16 h Bauchlage: PaO₂/FiO₂ 70 mmHg seit 7 h, pH 7,21 bei PaCO₂ 68 mmHg, Plateaudruck 30 cmH₂O.",
        frage: "Wann ist eine extrakorporale Membranoxygenierung (ECMO) zu erwägen?",
        punkte: [
          "Kriterien (EOLIA-Studie): PaO₂/FiO₂ **< 50 mmHg über 3 h** oder **< 80 mmHg über 6 h** oder **pH < 7,25 mit PaCO₂ ≥ 60 mmHg über 6 h** trotz optimaler Therapie",
          "Hier erfüllt → **frühzeitig Kontakt mit ECMO-Zentrum**",
          "Venovenöse ECMO übernimmt die Oxygenierung → Beatmung dann sehr schonend („Lungenruhe“)",
          "Risiken: Blutung (Antikoagulation), Thrombosen, Infektion; Voraussetzung: reversible Ursache"
        ],
        erklaerung: "ECMO heilt die Lunge nicht – ==sie ersetzt den Gasaustausch → Beatmung kann reduziert werden → kein weiterer beatmungsbedingter Schaden → Zeit für die Heilung==."
      },
      {
        info: "Beim Erhöhen des PEEP von 10 auf 16 cmH₂O fällt der Blutdruck von 105/60 auf 80/45 mmHg, Herzfrequenz steigt.",
        frage: "Erklären Sie den Mechanismus und Ihr Vorgehen.",
        punkte: [
          "Intrathorakaler Druck ↑ → **venöser Rückstrom ↓** → Vorlast ↓",
          "Überblähung → Lungengefäßwiderstand ↑ → **Nachlast des rechten Ventrikels ↑** → Rechtsherzbelastung",
          "Linker Ventrikel profitiert eher (Nachlast ↓) – Netto hängt vom Volumenstatus ab",
          "Volumenreagibilität prüfen, Noradrenalin, **Echokardiographie des rechten Ventrikels** (akutes Cor pulmonale?)",
          "Bei Rechtsherzbelastung: PEEP und Plateaudruck begrenzen, PaCO₂ senken, Bauchlage entlastet den rechten Ventrikel"
        ],
        erklaerung: "==PEEP ↑ → Druck im Thorax ↑ → weniger Blut fließt zum Herzen + rechter Ventrikel pumpt gegen höheren Widerstand → Herzzeitvolumen ↓ → Blutdruck ↓==."
      }
    ],
    fallstricke: ["Tidalvolumen nach tatsächlichem Gewicht", "Bauchlage zu spät oder zu kurz", "ECMO-Zentrum erst bei Kreislaufversagen kontaktiert"],
    links: [["#/soe-case/soe-ards-physio", "SOE: Lungenprotektive Beatmung"], ["#/zeichnen-aufgabe/z-compliance", "Compliance-Kurven zeichnen"], ["#/soe-themen/4", "Lungenultraschall und Röntgen"]]
  },

  // ===================================================================== 7
  {
    id: "fall-sht-hirndruck", soe: 4, titel: "Schädel-Hirn-Trauma mit Einklemmungszeichen",
    kurz: "GCS 7, weite Pupille, Subduralhämatom, Narkose zur Kraniotomie, Hirndrucktherapie auf der Intensivstation",
    themen: ["Neuroanästhesie", "Hirndruck und zerebrale Perfusion", "Traumaversorgung", "Neurointensivmedizin"],
    lernziele: ["Sekundäre Hirnschäden vermeiden", "Akute Einklemmung behandeln", "Hirndruck stufenweise behandeln"],
    ausgang: "24-jähriger Radfahrer ohne Helm, Sturz auf den Kopf. Präklinisch GCS 7, rechte Pupille weit und lichtstarr, Blutdruck 150/90 mmHg, Herzfrequenz 58/min, SpO₂ 91 % unter O₂.",
    schritte: [
      {
        info: "Ankunft im Schockraum, der Patient wurde noch nicht intubiert.",
        frage: "Was sind Ihre Prioritäten?",
        punkte: [
          "**Intubation** (GCS ≤ 8), mit Stabilisierung der Halswirbelsäule",
          "**Hypoxie vermeiden** (SpO₂ ≥ 94 %, PaO₂ > 60 mmHg) und **Hypotonie vermeiden** (systolisch etwa ≥ 100–110 mmHg je nach Alter)",
          "**Normokapnie** (PaCO₂ 35–40 mmHg) mit Kapnographie",
          "Oberkörper 30° hoch, Kopf gerade, keine enge Tubusfixierung am Hals (venöser Abfluss)",
          "Sofort CT; Gerinnung, Blutzucker, Natrium"
        ],
        erklaerung: "Der Primärschaden ist geschehen – behandelbar ist der **Sekundärschaden**: ==eine einzige Hypotonie oder Hypoxie → zerebrale Ischämie im geschwollenen Gehirn → deutlich schlechteres Ergebnis==."
      },
      {
        info: "CT: akutes Subduralhämatom rechts, 12 mm breit, Mittellinienverlagerung 8 mm. Blutdruck jetzt 185/95 mmHg, Herzfrequenz 48/min, unregelmäßige Atmung vor der Intubation.",
        frage: "Wie deuten Sie Kreislauf und Pupille, und was tun Sie bis zur OP?",
        punkte: [
          "**Cushing-Reaktion** (Hypertonie, Bradykardie, Atemstörung) + weite Pupille → **drohende Einklemmung**",
          "**Osmotherapie**: Mannitol 0,25–1 g/kg oder hypertone Kochsalzlösung",
          "**Kurzfristige Hyperventilation** (PaCO₂ etwa 30–35 mmHg) nur als Brücke zur OP",
          "Blutdruck nicht aggressiv senken – er sichert die Hirndurchblutung",
          "**Sofort Neurochirurgie** (Kraniotomie); Gerinnung korrigieren"
        ],
        erklaerung: "==Hirndruck ↑ → Hirndurchblutung ↓ → Hirnstamm reagiert mit Blutdruckanstieg → Barorezeptoren senken die Herzfrequenz==. ==Hyperventilation → PaCO₂ ↓ → Hirngefäße eng → Blutvolumen ↓ → Druck ↓, aber auch Durchblutung ↓== – daher nur kurz."
      },
      {
        info: "Kraniotomie in Allgemeinanästhesie.",
        frage: "Wie führen Sie die Narkose, und welche Zielwerte haben Sie?",
        punkte: [
          "**Zerebraler Perfusionsdruck** = Mitteldruck − Hirndruck; Ziel etwa **60–70 mmHg**",
          "TIVA mit Propofol und Opioid oder Volatilum unter etwa 1 MAC (höhere Konzentrationen erweitern Hirngefäße)",
          "Normokapnie, Normoxie, Normoglykämie, **Fieber vermeiden**",
          "Natrium im Normbereich bzw. hochnormal; keine hypotonen Lösungen (z.B. Glukose 5 %)",
          "Arterieller Druckaufnehmer auf Höhe des äußeren Gehörgangs nullen (Bezug Hirn)"
        ],
        erklaerung: "==Hypotone Infusion → Wasser strömt ins Gehirn (Blut-Hirn-Schranke lässt Natrium nicht durch) → Hirnödem ↑==. Deshalb nur isotone Lösungen."
      },
      {
        info: "Postoperativ auf der Intensivstation: Hirndruck über Sonde 28 mmHg trotz Sedierung, Oberkörperhochlage und Normokapnie. Mitteldruck 85 mmHg.",
        frage: "Wie behandeln Sie den erhöhten Hirndruck stufenweise?",
        punkte: [
          "Ziel Hirndruck **< 22 mmHg** (Leitlinie der Brain Trauma Foundation), CPP 60–70 mmHg",
          "Stufe 1: Sedierung und Analgesie vertiefen, Liquordrainage über externe Ventrikeldrainage, Osmotherapie",
          "Stufe 2: Muskelrelaxierung, milde Hypokapnie (PaCO₂ 32–35 mmHg) mit Überwachung der Hirnoxygenierung",
          "Stufe 3: Barbiturat-Koma, **dekompressive Kraniektomie**",
          "Prophylaktische Hypothermie nicht empfohlen (Studien zeigen keinen Nutzen bzw. Schaden)"
        ],
        erklaerung: "Hirndruck wird von unten nach oben eskaliert, weil ==jede stärkere Maßnahme eigene Risiken hat (Barbiturate → Hypotonie, Hyperventilation → Ischämie)==."
      },
      {
        info: "Der Oberarzt bittet Sie, die Druck-Volumen-Beziehung des Schädels zu zeichnen und die Autoregulation zu erklären.",
        frage: "Erklären Sie Monro-Kellie, Druck-Volumen-Kurve und zerebrale Autoregulation.",
        punkte: [
          "**Monro-Kellie**: Schädel = feste Hülle mit Hirn, Blut, Liquor – nimmt eines zu, müssen andere ausweichen",
          "Kurve: lange flach (Kompensation durch Liquor- und Blutverschiebung), dann **steiler Anstieg** – kleine Volumenzunahme → großer Druckanstieg",
          "**Autoregulation**: Hirndurchblutung bleibt etwa zwischen Mitteldruck 60 und 150 mmHg konstant (individuell verschieden)",
          "Nach Trauma oft **gestört** → Durchblutung folgt passiv dem Blutdruck",
          "**CO₂-Reaktivität**: Durchblutung ändert sich um etwa 2–4 % je mmHg PaCO₂"
        ],
        erklaerung: "==Kompensation erschöpft → steiler Teil der Kurve → schon Husten oder Kopfdrehung lassen den Druck stark steigen==."
      }
    ],
    fallstricke: ["Lange Hyperventilation als Dauertherapie", "Blutdruck senken bei Cushing-Reaktion", "Glukose 5 % als Infusion"],
    links: [["#/soe-case/soe-icp-physio", "SOE: Hirndruck und CPP"], ["#/zeichnen-aufgabe/z-icp", "Druck-Volumen-Kurve zeichnen"], ["#/zeichnen-aufgabe/z-cbf", "Hirndurchblutung zeichnen"], ["#/soe-themen/4", "Schädel-CT befunden"]]
  },

  // ===================================================================== 8
  {
    id: "fall-copd-hyperkapnie", soe: 1, titel: "COPD-Patient mit Hyperkapnie im Aufwachraum",
    kurz: "Somnolenz nach Laparotomie, akute auf chronische respiratorische Azidose, Sauerstoff, nichtinvasive Beatmung, Auto-PEEP",
    themen: ["Atemphysiologie", "Säure-Basen-Haushalt", "Postoperative pulmonale Komplikationen", "Nichtinvasive Beatmung"],
    lernziele: ["Blutgas bei COPD interpretieren", "Sauerstoff-induzierte Hyperkapnie erklären", "Indikation und Durchführung der nichtinvasiven Beatmung", "Auto-PEEP verstehen"],
    ausgang: "72-jähriger Mann, schwere COPD (FEV₁ 38 % des Sollwerts), Heimsauerstoff nachts. Offene Hemikolektomie in Allgemeinanästhesie mit thorakalem Periduralkatheter, intraoperativ Sufentanil, Rocuronium (Antagonisierung mit Neostigmin).",
    schritte: [
      {
        info: "Aufwachraum nach 40 min: schläfrig, Atemfrequenz 28/min, flach. SpO₂ 96 % unter 6 l/min O₂ über Maske. BGA: pH 7,24, PaCO₂ 72 mmHg, HCO₃⁻ 30 mmol/l, PaO₂ 112 mmHg.",
        frage: "Interpretieren Sie die Blutgasanalyse.",
        punkte: [
          "**Respiratorische Azidose** (pH ↓, PaCO₂ ↑)",
          "HCO₃⁻ 30 mmol/l → bereits **metabolisch kompensiert** = chronischer Anteil",
          "pH für eine rein chronische Hyperkapnie zu niedrig → **akut auf chronisch**",
          "PaO₂ 112 mmHg bei COPD **zu hoch** – Ziel-SpO₂ etwa 88–92 %",
          "Somnolenz = CO₂-Narkose droht"
        ],
        erklaerung: "Faustregel: akut steigt HCO₃⁻ etwa 1 mmol/l je 10 mmHg PaCO₂, chronisch etwa 3–4 mmol/l. ==Niere hält über Tage Bicarbonat zurück → pH wird teilweise ausgeglichen== – ein akuter Anstieg überfordert diese Kompensation."
      },
      {
        info: "Die Pflegekraft hat den Sauerstoff erhöht, weil die Sättigung zuvor bei 88 % lag.",
        frage: "Warum kann zu viel Sauerstoff hier die Hyperkapnie verstärken?",
        punkte: [
          "**Aufhebung der hypoxischen pulmonalen Vasokonstriktion** → Durchblutung schlecht belüfteter Areale ↑ → Totraum-Effekt ↑, Ventilation-Perfusion schlechter",
          "**Haldane-Effekt**: oxygeniertes Hämoglobin bindet weniger CO₂ → mehr gelöstes CO₂",
          "Verminderter hypoxischer Atemantrieb spielt nur eine **kleinere Rolle**",
          "Konsequenz: **Sauerstoff titrieren** auf SpO₂ 88–92 %, z.B. über Venturi-Maske"
        ],
        erklaerung: "==Viel O₂ → Gefäße in schlecht belüfteten Arealen öffnen sich → Blut fließt dorthin, wo kein CO₂ abgeatmet wird → PaCO₂ ↑==."
      },
      {
        info: "Sie überlegen weitere Ursachen.",
        frage: "Welche Differenzialdiagnosen der postoperativen Hypoventilation prüfen Sie?",
        punkte: [
          "**Opioidüberhang** (Miosis, langsame Atmung)",
          "**Restrelaxierung** → quantitativ messen (TOF-Ratio); Neostigmin wirkt nur begrenzt",
          "Narkosemittelüberhang, hohe Ausbreitung des Periduralkatheters (Atemhilfsmuskulatur)",
          "Schmerz mit Schonatmung, Bronchospasmus, Pneumothorax, Atelektasen, Sekret",
          "Hypothermie, Elektrolyte (Phosphat, Kalium, Magnesium)"
        ],
        erklaerung: "Bei COPD verschiebt jede zusätzliche Belastung das Gleichgewicht: ==Atemarbeit ↑ bei geschwächter Atemmuskulatur → Ermüdung → flache Atmung → Totraumanteil ↑ → CO₂ ↑==."
      },
      {
        info: "Opioid- und Relaxansüberhang sind ausgeschlossen. pH 7,23, Patient weckbar, kooperativ.",
        frage: "Wie behandeln Sie, und wann intubieren Sie?",
        punkte: [
          "**Nichtinvasive Beatmung** (NIV) bei pH < 7,35 und PaCO₂ > 45 mmHg – starke Empfehlung bei COPD",
          "Einstellung z.B. inspiratorisch 12–20, exspiratorisch 4–6 cmH₂O, titrieren nach Atemfrequenz und PaCO₂",
          "Bronchodilatatoren, Sekretmanagement, Oberkörper hoch, Analgesie über Periduralkatheter",
          "**BGA-Kontrolle nach 1–2 h**: keine Besserung → Intubation",
          "Intubation bei: Bewusstlosigkeit, fehlenden Schutzreflexen, Kreislaufinstabilität, Erschöpfung, NIV-Versagen"
        ],
        erklaerung: "==NIV unterstützt die Inspiration → Atemarbeit ↓, Tidalvolumen ↑ → alveoläre Ventilation ↑ → PaCO₂ ↓==; der exspiratorische Druck hilft gegen den intrinsischen PEEP."
      },
      {
        info: "Er wird doch intubiert. Unter Beatmung mit Frequenz 20/min fällt der Blutdruck, die Flusskurve erreicht am Ende der Exspiration nicht die Nulllinie.",
        frage: "Was ist Auto-PEEP, und wie behandeln Sie ihn?",
        punkte: [
          "**Auto-PEEP** (intrinsischer PEEP): Ausatmung unvollständig → Luft bleibt gefangen → dynamische Überblähung",
          "Folgen: intrathorakaler Druck ↑ → venöser Rückstrom ↓ → Hypotonie; Barotrauma; erschwertes Triggern",
          "Messen mit endexspiratorischem Halt",
          "Therapie: **Atemfrequenz senken, Exspirationszeit verlängern**, Tidalvolumen begrenzen, Bronchodilatation",
          "Bei Kreislaufeinbruch kurz **diskonnektieren**"
        ],
        erklaerung: "==Enge Bronchien + kurze Ausatemzeit → nächster Atemzug beginnt vor vollständiger Ausatmung → Volumen stapelt sich → Druck im Thorax ↑ → Kreislauf ↓==."
      }
    ],
    fallstricke: ["Hohe O₂-Gabe als „Sicherheit“", "Restrelaxierung nach Neostigmin nicht gemessen", "Hohe Atemfrequenz bei obstruktiver Lunge"],
    links: [["#/zeichnen-aufgabe/z-paco2", "PaCO₂ und Ventilation zeichnen"], ["#/zeichnen-aufgabe/z-spiro", "Lungenvolumina zeichnen"], ["#/soe-themen/4", "Blutgasanalyse befunden"]]
  },

  // ===================================================================== 9
  {
    id: "fall-aki-hyperkaliaemie", soe: 1, titel: "Akute Nierenschädigung mit Hyperkaliämie",
    kurz: "Oligurie nach Hüft-TEP, KDIGO-Stadium, Hyperkaliämie mit EKG-Veränderungen, Medikamente, Autoregulation",
    themen: ["Nierenphysiologie", "Akute Nierenschädigung", "Elektrolytstörungen", "Pharmakologie bei Niereninsuffizienz"],
    lernziele: ["Akute Nierenschädigung einstufen und Ursachen suchen", "Hyperkaliämie akut behandeln", "Medikamente anpassen", "Renale Autoregulation erklären"],
    ausgang: "67-jähriger Mann, 80 kg, Diabetes Typ 2, Hypertonie. Medikation: Ramipril, Metformin, Hydrochlorothiazid. Tag 2 nach Hüft-TEP, Schmerztherapie mit Ibuprofen 3 × 600 mg und Oxycodon. Intraoperativ längere Hypotonie (Mitteldruck um 55 mmHg).",
    schritte: [
      {
        info: "Diurese in den letzten 8 h: 120 ml. Kreatinin präoperativ 1,0 mg/dl, jetzt 2,3 mg/dl.",
        frage: "Wie stufen Sie die Nierenschädigung ein, und welche Ursachen suchen Sie?",
        punkte: [
          "Diurese 15 ml/h = **0,19 ml/kg/h**; Kreatinin auf das **2,3-Fache** → **KDIGO-Stadium 2**",
          "**Postrenal ausschließen**: Blasenkatheter bzw. Blasenultraschall (Harnverhalt nach Spinalanästhesie, Opioide)",
          "Prärenal: Hypovolämie, Hypotonie, Blutverlust",
          "Renal: **nephrotoxische Medikamente** (NSAR, ACE-Hemmer, Diuretika – „triple whammy“), Kontrastmittel, Rhabdomyolyse, Sepsis",
          "Urinstatus, Natrium im Urin, Ultraschall der Nieren"
        ],
        erklaerung: "==NSAR hemmen die vasodilatierenden Prostaglandine am Vas afferens + ACE-Hemmer erweitern das Vas efferens + Diuretika verringern das Volumen → glomerulärer Druck bricht ein → GFR ↓== – besonders nach intraoperativer Hypotonie."
      },
      {
        info: "Labor: Kalium 6,8 mmol/l, pH 7,22, HCO₃⁻ 14 mmol/l. EKG: spitze, hohe T-Wellen, QRS 100 ms.",
        frage: "Wie behandeln Sie die Hyperkaliämie?",
        punkte: [
          "Monitor, Kaliumzufuhr stoppen, kaliumsteigernde Medikamente absetzen",
          "**Calcium i.v.** (z.B. 10 ml Calciumchlorid 10 % bzw. 30 ml Calciumgluconat 10 %) zur Membranstabilisierung",
          "**Insulin 10 IE + Glukose 25 g** i.v., Blutzucker kontrollieren",
          "**Salbutamol** vernebelt (10–20 mg); Natriumbicarbonat bei metabolischer Azidose",
          "Elimination: Diuretika bei ausreichender Diurese, Kaliumbinder, **Dialyse** bei Therapieversagen"
        ],
        erklaerung: "==Calcium hebt die Schwelle für das Aktionspotenzial → Herz wird stabilisiert, Kalium bleibt gleich==; ==Insulin und β₂-Agonisten aktivieren die Na⁺/K⁺-ATPase → Kalium wandert in die Zellen== – beides wirkt nur vorübergehend."
      },
      {
        info: "Der Patient erhält seine Hausmedikation weiter, die Stationsärztin fragt nach Anpassungen.",
        frage: "Welche Medikamente pausieren oder ändern Sie?",
        punkte: [
          "**Metformin pausieren** (Laktatazidose-Risiko bei GFR ↓)",
          "**ACE-Hemmer, Diuretika, NSAR pausieren**",
          "Analgesie: Paracetamol, Opioide mit Vorsicht; **Morphin meiden** (aktiver Metabolit Morphin-6-Glucuronid kumuliert)",
          "Antibiotika und andere renal eliminierte Medikamente nach GFR dosieren",
          "Kontrastmittel vermeiden bzw. kritisch indizieren"
        ],
        erklaerung: "==Niere scheidet aktive Metaboliten nicht mehr aus → Metaboliten kumulieren → Atemdepression bzw. Sedierung noch Tage später=="
      },
      {
        info: "Die Kollegin möchte „die Niere mit Flüssigkeit durchspülen“ und 3 l Kochsalz 0,9 % anhängen.",
        frage: "Wie gestalten Sie die Flüssigkeitstherapie?",
        punkte: [
          "Flüssigkeit nur bei **nachgewiesenem Volumenmangel** bzw. Volumenreagibilität",
          "**Balancierte Kristalloide** bevorzugen – Kochsalz 0,9 % kann eine hyperchlorämische Azidose verursachen",
          "**Überwässerung vermeiden** (Ödem in der Niere, Lunge)",
          "Mitteldruck mindestens etwa 65 mmHg, bei chronischer Hypertonie eher höher",
          "Diuretika nicht zur Behandlung der Nierenschädigung, nur bei Überwässerung"
        ],
        erklaerung: "==Viel Chlorid → hyperchlorämische Azidose + Chlorid an der Macula densa → Vasokonstriktion des Vas afferens → GFR ↓==; ==Ödem in der Niere (Kapsel ist eng) → Gewebedruck ↑ → Durchblutung ↓==."
      },
      {
        info: "Im SOE werden Sie gebeten, die renale Autoregulation zu erklären.",
        frage: "Erklären Sie die Autoregulation der Niere und warum sie hier versagt hat.",
        punkte: [
          "Durchblutung und GFR bleiben etwa zwischen **Mitteldruck 80 und 180 mmHg** konstant",
          "**Myogener Mechanismus**: Dehnung → Kontraktion des Vas afferens",
          "**Tubuloglomeruläres Feedback**: viel NaCl an der Macula densa → Vas afferens eng",
          "Unter der Autoregulationsgrenze (und bei chronischer Hypertonie nach rechts verschoben) wird die Durchblutung **druckpassiv**",
          "Nierenmark hat physiologisch niedrigen O₂-Partialdruck → besonders empfindlich für Ischämie"
        ],
        erklaerung: "==Hypotonie unter der (verschobenen) Grenze + Medikamente, die die Gegenregulation blockieren → GFR fällt → Tubulusschaden im O₂-armen Mark==."
      }
    ],
    fallstricke: ["Harnverhalt nicht ausgeschlossen", "Morphin bei Niereninsuffizienz", "„Durchspülen“ mit viel NaCl 0,9 %"],
    links: [["#/zeichnen-aufgabe/z-autoreg-niere", "Autoregulation der Niere zeichnen"], ["#/soe-themen/4", "EKG bei Hyperkaliämie"], ["#/spezial-organ/niere", "Spezialwissen Niere"]]
  },

  // ===================================================================== 10
  {
    id: "fall-zirrhose-notfall", soe: 2, titel: "Leberzirrhose und Notfall-Operation",
    kurz: "Child-Pugh B, inkarzerierte Nabelhernie, Gerinnung, Pharmakologie, Aszites, Hyponatriämie",
    themen: ["Leberphysiologie", "Pharmakokinetik bei Leberinsuffizienz", "Gerinnung", "Elektrolyte"],
    lernziele: ["Perioperatives Risiko bei Zirrhose einschätzen", "Gerinnungstests bei Zirrhose richtig deuten", "Pharmakokinetik und Medikamentenwahl begründen", "Hyponatriämie sicher korrigieren"],
    ausgang: "55-jähriger Mann, alkoholische Leberzirrhose, inkarzerierte Nabelhernie, Notfall-OP. Bilirubin 3,1 mg/dl, Albumin 28 g/l, INR 1,7, mäßiger Aszites, keine Enzephalopathie (Child-Pugh B, 8 Punkte). Thrombozyten 70/nl, Natrium 129 mmol/l, Kreatinin 1,2 mg/dl. Letzter Alkohol vor 2 Tagen.",
    schritte: [
      {
        info: "Der Chirurg fragt nach dem Risiko für die Aufklärung.",
        frage: "Wie schätzen Sie das perioperative Risiko ein?",
        punkte: [
          "Klassische Daten für Bauchchirurgie: Sterblichkeit etwa **10 % (Child A), 30 % (B), bis 80 % (C)** – heute etwas niedriger, aber Größenordnung gilt",
          "**MELD-Score** (Bilirubin, INR, Kreatinin, ggf. Natrium) ergänzt die Einschätzung",
          "Notfall-Eingriff, Aszites, Bauchoperation erhöhen das Risiko zusätzlich",
          "Interdisziplinär planen, Intensivbett, Angehörige aufklären"
        ],
        erklaerung: "==Zirrhose → Synthese ↓, portale Hypertonie, Kreislauf hyperdynam mit niedrigem Gefäßwiderstand → wenig Reserve für Blutung, Infektion und Hypotonie==."
      },
      {
        info: "Der Assistent möchte vor der OP 4 Plasmakonserven geben, um den INR zu korrigieren.",
        frage: "Wie bewerten Sie die Gerinnung, und was tun Sie?",
        punkte: [
          "**„Rebalancierte Hämostase“**: pro- und antikoagulatorische Faktoren sind beide vermindert – INR bildet das Blutungsrisiko **nicht** ab",
          "**Keine prophylaktische Plasmagabe** allein wegen des INR (Volumenbelastung, portaler Druck ↑)",
          "**Viskoelastische Tests** zur Steuerung; Fibrinogen und Thrombozyten bei Blutung gezielt",
          "Vitamin K bei Mangelernährung oder Cholestase",
          "Thromboserisiko bleibt erhöht (Pfortaderthrombose, Thromboembolie)"
        ],
        erklaerung: "==Leber bildet weniger Gerinnungsfaktoren, aber auch weniger Protein C, S und Antithrombin → Gleichgewicht auf niedrigerem Niveau → leicht nach beiden Seiten kippbar==."
      },
      {
        info: "Sie planen die Narkose.",
        frage: "Wie verändert die Zirrhose die Pharmakokinetik, und welche Medikamente wählen Sie?",
        punkte: [
          "**Albumin ↓** → mehr freier Wirkstoff bei stark gebundenen Medikamenten → stärkere Wirkung",
          "**Verteilungsvolumen ↑** (Aszites, Ödeme) → Initialdosis z.B. von Rocuronium eher höher, Wirkdauer verlängert",
          "Clearance ↓: Medikamente mit hoher hepatischer Extraktion hängen von der Leberdurchblutung ab, mit niedriger von Enzymen und Eiweißbindung",
          "Günstig: **Remifentanil** (Plasmaesterasen), **Cisatracurium** (Hofmann-Elimination), Propofol, Sevo- oder Desfluran",
          "**Benzodiazepine meiden** (Enzephalopathie); Blitzeinleitung wegen Aszites (Aspiration)"
        ],
        erklaerung: "==Weniger Albumin + weniger Abbau + größeres Verteilungsvolumen → erste Dosis wirkt schwächer bzw. verzögert, Folgedosen kumulieren==."
      },
      {
        info: "Intraoperativ werden 6 l Aszites abgelassen. Danach fällt der Blutdruck auf 75/40 mmHg.",
        frage: "Was passiert, und wie vermeiden bzw. behandeln Sie es?",
        punkte: [
          "**Kreislaufdysfunktion nach großvolumiger Parazentese**: Flüssigkeit verschiebt sich wieder in den Bauchraum, Vasodilatation",
          "**Albumin etwa 6–8 g pro abgelassenem Liter** (bei mehr als 5 l)",
          "Vasopressor (Noradrenalin), Volumen gezielt",
          "Positiv: Zwerchfell entlastet → Lungenvolumen ↑, Beatmung leichter",
          "Risiko für hepatorenales Syndrom im Verlauf"
        ],
        erklaerung: "==Bauchdruck fällt → Splanchnikusgefäße erweitern sich → effektives Blutvolumen ↓ → RAAS und Sympathikus aktiv → Niere minderdurchblutet==."
      },
      {
        info: "Am Tag 1: verwirrt, Natrium 124 mmol/l, Zittern, Schwitzen, Herzfrequenz 115/min.",
        frage: "Woran denken Sie, und wie behandeln Sie?",
        punkte: [
          "**Hepatische Enzephalopathie** (Auslöser: Blutung, Infektion, Medikamente, Elektrolyte) → Lactulose, Rifaximin, Auslöser behandeln",
          "**Alkoholentzug** (Tag 2–3 nach letztem Konsum) → Skalen-gesteuerte Behandlung; Benzodiazepine vorsichtig, kurz wirksame bevorzugen; Thiamin vor Glukose",
          "**Hyponatriämie langsam korrigieren**: höchstens etwa 8–10 mmol/l in 24 h (bei Zirrhose und Alkohol eher weniger)",
          "Zu schnelle Korrektur → **osmotisches Demyelinisierungssyndrom**",
          "Infektion suchen (spontan bakterielle Peritonitis: Aszitespunktion)"
        ],
        erklaerung: "==Chronische Hyponatriämie → Hirnzellen geben Osmolyte ab, um nicht anzuschwellen → schnelle Natriumanhebung → Zellen schrumpfen → Myelinschaden (Pons)==."
      }
    ],
    fallstricke: ["INR mit Plasma „korrigieren“", "Benzodiazepine großzügig", "Natrium zu schnell anheben"],
    links: [["#/soe-case/soe-zirrhose", "SOE: Pharmakologie bei Zirrhose"], ["#/spezial-organ/leber", "Spezialwissen Leber"], ["#/zeichnen-aufgabe/z-pk", "Pharmakokinetik zeichnen"]]
  },

  // ===================================================================== 11
  {
    id: "fall-tur-syndrom", soe: 3, titel: "TUR-Syndrom in Spinalanästhesie",
    kurz: "Monopolare Prostataresektion mit Glycin, Unruhe, Sehstörung, Hyponatriämie, Korrektur, Prävention",
    themen: ["Urologische Anästhesie", "Wasser- und Natriumhaushalt", "Osmolalität", "Spinalanästhesie"],
    lernziele: ["TUR-Syndrom erkennen", "Akutbehandlung der symptomatischen Hyponatriämie", "Osmolalität und Hirnödem erklären", "Prävention kennen"],
    ausgang: "78-jähriger Mann, 75 kg, transurethrale Prostataresektion in Spinalanästhesie (Th10), monopolare Technik mit Glycin-1,5 %-Spüllösung. Resektionszeit bereits 75 min, große Prostata.",
    schritte: [
      {
        info: "Der Patient wird unruhig, klagt über Übelkeit und verschwommenes Sehen. Blutdruck 185/100 mmHg, Herzfrequenz 52/min, SpO₂ 90 %.",
        frage: "Welche Diagnose vermuten Sie, und was ist der Mechanismus?",
        punkte: [
          "**TUR-Syndrom**: Einschwemmung hypotoner Spüllösung über eröffnete Venen",
          "**Hypervolämie** (Hypertonie, Bradykardie, Lungenödem → Hypoxie) und **Verdünnungshyponatriämie** (Unruhe, Übelkeit, Krampf, Koma)",
          "**Glycin-Toxizität**: Sehstörungen bis vorübergehende Blindheit, Ammoniakanstieg",
          "Risikofaktoren: Resektionszeit > 60 min, hoher Spüldruck, große Prostata, eröffnete Kapsel",
          "Vorteil der Spinalanästhesie: wacher Patient → **frühe Symptome erkennbar**"
        ],
        erklaerung: "==Druck der Spülflüssigkeit > Venendruck → Liter Wasser ohne Natrium gelangen ins Blut → Volumen ↑ + Natrium ↓ → Wasser strömt ins Gehirn → Hirnödem==."
      },
      {
        info: "Natrium im Blutgas 117 mmol/l. Der Patient krampft kurz.",
        frage: "Wie behandeln Sie akut?",
        punkte: [
          "**OP beenden** bzw. Blutstillung, Chirurgen informieren",
          "O₂, Atemweg sichern bei Bewusstseinsstörung; Krampf mit Benzodiazepin",
          "**Hypertone Kochsalzlösung 3 %** bei schweren Symptomen: z.B. 150 ml (bzw. etwa 2 ml/kg) über 10–20 min, ggf. wiederholen, bis Natrium um **4–6 mmol/l** gestiegen ist bzw. Symptome sistieren",
          "Danach langsam: insgesamt höchstens etwa **8–10 mmol/l in 24 h**",
          "Bei Hypervolämie und Lungenödem **Schleifendiuretikum**; engmaschige Natriumkontrollen"
        ],
        erklaerung: "Schon ein kleiner Natriumanstieg von 4–6 mmol/l senkt den Hirndruck deutlich: ==Natrium ↑ → Osmolalität im Blut ↑ → Wasser verlässt das Gehirn → Ödem ↓==."
      },
      {
        info: "Die Oberärztin fragt, warum die gemessene Serumosmolalität nur auf 265 mosmol/kg gefallen ist, obwohl das Natrium so niedrig ist.",
        frage: "Erklären Sie Osmolalität, Glycin und die osmotische Lücke.",
        punkte: [
          "Glycin-Lösung 1,5 % ist **hypoosmolar** (etwa 200 mosmol/kg), um Hämolyse zu begrenzen und elektrisch nicht leitend zu sein",
          "Glycin selbst ist osmotisch wirksam → **Osmolalität sinkt weniger als das Natrium** → osmotische Lücke (gemessen > berechnet)",
          "Glycin wird verstoffwechselt bzw. dringt in Zellen ein → Wasser folgt verzögert → Hirnödem kann sich **nachträglich** entwickeln",
          "Für das Hirnödem ist die **wirksame Osmolalität** entscheidend, nicht der Natriumwert allein"
        ],
        erklaerung: "Berechnete Osmolalität ≈ 2 × Natrium + Glukose + Harnstoff (in mmol/l). ==Glycin wird abgebaut → osmotischer Schutz fällt weg → Wasser wandert ins Gehirn== – deshalb Verläufe beobachten."
      },
      {
        info: "Der Patient ist stabil, Natrium nach 6 h 124 mmol/l.",
        frage: "Wie geht es weiter, und welches Risiko besteht bei der Korrektur?",
        punkte: [
          "Natrium alle 2–4 h kontrollieren, Bilanz",
          "Ziel: Symptomfreiheit, **nicht mehr als etwa 8–10 mmol/l in 24 h** anheben",
          "Akute Hyponatriämie (< 48 h, wie hier) hat ein geringeres Risiko für osmotische Demyelinisierung als die chronische – Grenze trotzdem einhalten",
          "Bei Überkorrektur: freies Wasser bzw. Desmopressin zur Re-Senkung",
          "Überwachung auf Intensiv- bzw. Überwachungsstation"
        ],
        erklaerung: "==Chronisch → Gehirn hat sich angepasst (Osmolyte abgegeben) → schnelle Korrektur → Zellen schrumpfen → Demyelinisierung==. Bei akuter Hyponatriämie fehlt diese Anpassung weitgehend."
      },
      {
        info: "Das Qualitätsteam fragt, wie man solche Ereignisse künftig verhindert.",
        frage: "Welche Präventionsmaßnahmen kennen Sie?",
        punkte: [
          "**Bipolare Resektion mit Kochsalz 0,9 %** (heute Standard) → keine Verdünnungshyponatriämie, aber Volumenüberladung bleibt möglich",
          "Resektionszeit begrenzen, **niedriger Spüldruck** (Beutelhöhe etwa ≤ 60–70 cm über dem Patienten)",
          "Spüllösungsbilanz (Ein- und Ausfuhr) dokumentieren",
          "Bei langen Eingriffen Natrium kontrollieren",
          "Regionalanästhesie erlaubt Früherkennung (Bewusstsein, Übelkeit)"
        ],
        erklaerung: "==Elektrolytlösung als Spülung → eingeschwemmtes Volumen hat normales Natrium → kein Verdünnungseffekt auf das Natrium==."
      }
    ],
    fallstricke: ["Symptome als „Unruhe bei Spinalanästhesie“ sediert", "Zu schnelle Natriumkorrektur", "Lungenödem ohne Diuretikum"],
    links: [["#/zeichnen-aufgabe/z-gegenstrom", "Gegenstromprinzip zeichnen"], ["#/spezial-organ/niere", "Spezialwissen Wasserhaushalt"]]
  },

  // ===================================================================== 12
  {
    id: "fall-zementsyndrom", soe: 3, titel: "Knochenzement-Implantationssyndrom",
    kurz: "Zementierte Hemiprothese bei 88-Jähriger mit pulmonaler Hypertonie, Sättigungs- und Druckabfall, Rechtsherzversagen",
    themen: ["Orthopädische Anästhesie", "Rechtsherzphysiologie", "Embolie", "Patientensicherheit"],
    lernziele: ["Knochenzement-Implantationssyndrom einteilen", "Pathophysiologie des Rechtsherzversagens erklären", "Akuttherapie und Prävention beherrschen"],
    ausgang: "88-jährige Frau, 52 kg, Schenkelhalsfraktur, zementierte Hemiendoprothese in Allgemeinanästhesie. Vorerkrankungen: Herzinsuffizienz mit erhaltener Ejektionsfraktion, pulmonale Hypertonie (systolischer Pulmonalisdruck geschätzt 55 mmHg), Osteoporose. Blutdruck vor dem Zementieren 125/65 mmHg.",
    schritte: [
      {
        info: "Beim Einbringen des Zements und des Prothesenschafts: SpO₂ fällt von 96 auf 82 %, etCO₂ von 36 auf 22 mmHg, Blutdruck 70/40 mmHg, Herzfrequenz 118/min.",
        frage: "Welche Diagnose stellen Sie, und wie schwer ist sie?",
        punkte: [
          "**Knochenzement-Implantationssyndrom** (zeitlicher Zusammenhang mit Zementieren bzw. Schaft einbringen)",
          "Einteilung: **Grad 1** SpO₂ < 94 % oder Blutdruckabfall > 20 %; **Grad 2** SpO₂ < 88 % oder Abfall > 40 % oder Bewusstseinsverlust; **Grad 3** Reanimation",
          "Hier SpO₂ 82 % und Abfall > 40 % → **Grad 2**",
          "Differenzialdiagnosen: Anaphylaxie, Blutung, Myokardischämie, Luftembolie"
        ],
        erklaerung: "Der etCO₂-Abfall ist der Schlüssel: ==Embolie in die Lungenstrombahn → belüftete, aber nicht durchblutete Alveolen → Totraum ↑ → etCO₂ ↓==."
      },
      {
        info: "Sie erklären dem Team den Mechanismus.",
        frage: "Was passiert pathophysiologisch?",
        punkte: [
          "Druck im Markraum ↑ beim Zementieren und Einschlagen → **Embolie von Fett, Knochenmark, Luft, Zementpartikeln**",
          "Zusätzlich **Mediatorfreisetzung** (Histamin, Komplement) → Vasodilatation, Vasokonstriktion der Lungengefäße",
          "**Lungengefäßwiderstand ↑** → rechter Ventrikel dilatiert → Septum verschiebt sich nach links → linker Ventrikel unterfüllt",
          "Herzzeitvolumen ↓ → Blutdruck ↓ → Durchblutung des rechten Ventrikels ↓ → Rechtsherzversagen"
        ],
        erklaerung: "==Nachlast rechts ↑ → RV dilatiert, Wandspannung ↑ + Blutdruck ↓ → Koronarperfusion des RV ↓ → RV-Ischämie → noch weniger Auswurf (Teufelskreis)==."
      },
      {
        info: "Der Zustand verschlechtert sich, Blutdruck 60/35 mmHg.",
        frage: "Wie behandeln Sie?",
        punkte: [
          "Chirurgen informieren, Hilfe, **FiO₂ 1,0**",
          "**Vasopressor** (Noradrenalin, bei Bedarf Adrenalin) – hält den Druck für die Durchblutung des rechten Ventrikels",
          "Inotropie bei Rechtsherzversagen (z.B. Adrenalin, Dobutamin; ggf. inhalative Pulmonalisvasodilatatoren)",
          "**Volumen vorsichtig** – ein dilatierter rechter Ventrikel verträgt keine großen Mengen",
          "Echokardiographie zur Bestätigung; Reanimation bei Kreislaufstillstand"
        ],
        erklaerung: "Beim Rechtsherzversagen ist der **Vasopressor** zentral: ==Systemischer Druck ↑ → Durchblutung des rechten Ventrikels ↑ → Kontraktion ↑ → Teufelskreis wird durchbrochen==."
      },
      {
        info: "Die Patientin stabilisiert sich. Bei der Nachbesprechung fragt das Team, wie man das hätte verhindern können.",
        frage: "Welche Präventionsmaßnahmen kennen Sie?",
        punkte: [
          "**Risikopatienten erkennen**: hohes Alter, ASA III–IV, pulmonale Hypertonie, schwere Herzerkrankung, Osteoporose, pathologische Fraktur bzw. Metastasen",
          "**Team-Absprache** vor dem Zementieren: Chirurg kündigt an, Anästhesie bereit, Rollen klar",
          "Chirurgisch: **Markraum spülen**, Zement retrograd mit Zementpistole, Entlüftung, schonendes Einbringen",
          "Anästhesie: Euvolämie vor dem Zementieren, FiO₂ erhöhen, invasive Blutdruckmessung bei Risiko, Vasopressor bereit",
          "Bei sehr hohem Risiko **unzementierte Prothese** erwägen"
        ],
        erklaerung: "Eine gemeinsame Sicherheitsempfehlung von Anästhesie, Orthopädie und Geriatrie betont die Rollenverteilung: ==Ankündigung → alle aufmerksam → Abfall wird sofort erkannt und behandelt==."
      },
      {
        info: "Nach der OP soll die Patientin auf die Normalstation verlegt werden.",
        frage: "Wie geht es postoperativ weiter?",
        punkte: [
          "**Überwachung** auf Intensiv- oder Überwachungsstation (Grad 2)",
          "Troponin und Echokardiographie (Rechtsherzbelastung, Myokardschaden)",
          "Oxygenierung, Diurese, Delir-Screening",
          "Ereignis **dokumentieren**, Angehörige informieren, ggf. Meldung im Fehlerberichtssystem",
          "Bei weiteren Eingriffen: Information an alle Behandelnden"
        ],
        erklaerung: "Fettembolien können sich **verzögert** zeigen (Fettemboliesyndrom mit Hypoxie, Verwirrtheit, Petechien innerhalb von 1–3 Tagen) – deshalb weiter überwachen."
      }
    ],
    fallstricke: ["Großzügige Volumengabe bei dilatiertem rechtem Ventrikel", "Zementieren ohne Ankündigung", "Grad-2-Ereignis auf die Normalstation verlegt"],
    links: [["#/fall/fall-aortenstenose-huefte", "Fall: Aortenstenose und Hüftfraktur"], ["#/soe-case/soe-hueftfraktur", "SOE: Hüftfraktur"]]
  }
];
