// Fragen im Format von EDAIC Teil 1: ein Stamm mit 5 Aussagen, jede einzeln richtig oder falsch
// (Mehrfach-Richtig/Falsch, keine Minuspunkte). Eigens formuliert – keine Prüfungsfragen.
// Paper A = Basiswissenschaften, Paper B = Klinik.
// Schema: {id, paper: "A"|"B", thema, stamm, aussagen: [[Text, richtig?, Erklärung], …5]}
window.MTF = [
  // ===== PAPER A – BASISWISSENSCHAFTEN =====
  { id: "mtf-a-01", paper: "A", thema: "Lokalanästhetika", stamm: "Lokalanästhetika:", aussagen: [
    ["Lidocain ist ein Amid-Lokalanästhetikum.", true, "Lidocain enthält eine Amidbindung (–NH–CO–) zwischen Ring und Zwischenkette."],
    ["Ester-Lokalanästhetika werden überwiegend in der Leber abgebaut.", false, "Ester werden durch die Plasmacholinesterase gespalten; Amide in der Leber."],
    ["Ein pKa nahe dem Gewebe-pH beschleunigt den Wirkeintritt.", true, "Dann liegt mehr ungeladene Base vor, die durch die Nervenmembran diffundieren kann."],
    ["Eine hohe Proteinbindung geht typischerweise mit einer längeren Wirkdauer einher.", true, "Z.B. Bupivacain und Ropivacain (ca. 95 %) wirken länger als Lidocain (ca. 65 %)."],
    ["Im entzündeten, sauren Gewebe wirken Lokalanästhetika stärker.", false, "Im sauren Milieu liegt mehr geladene Form vor, die die Membran schlecht passiert – die Wirkung ist schwächer."]
  ] },
  { id: "mtf-a-02", paper: "A", thema: "Sauerstofftransport", stamm: "Eine Rechtsverschiebung der Sauerstoffbindungskurve:", aussagen: [
    ["wird durch eine Erhöhung der Körpertemperatur verursacht.", true, "Wärme senkt die Affinität des Hämoglobins für Sauerstoff."],
    ["geht mit einer höheren P50 einher.", true, "Rechtsverschiebung bedeutet: 50 % Sättigung werden erst bei höherem PO₂ erreicht."],
    ["tritt durch den niedrigen 2,3-BPG-Gehalt gelagerter Erythrozytenkonzentrate auf.", false, "Wenig 2,3-BPG verschiebt die Kurve nach links."],
    ["erleichtert die Sauerstoffabgabe im Gewebe.", true, "Das ist der Sinn des Bohr-Effekts im arbeitenden, sauren und warmen Gewebe."],
    ["wird durch Kohlenmonoxid-Hämoglobin verursacht.", false, "CO-Hb verschiebt die Kurve nach links und blockiert zusätzlich Bindungsstellen."]
  ] },
  { id: "mtf-a-03", paper: "A", thema: "Pharmakokinetik", stamm: "Pharmakokinetik:", aussagen: [
    ["Die Eliminationshalbwertszeit steigt mit dem Verteilungsvolumen und sinkt mit der Clearance.", true, "t½ = 0,693 × Vd / Clearance."],
    ["Ein Steady State wird nach ca. 4–5 Halbwertszeiten erreicht.", true, "Unabhängig von der Dosis; mit einer Aufsättigungsdosis schneller."],
    ["Die Aufsättigungsdosis hängt vor allem von der Clearance ab.", false, "Die Aufsättigungsdosis richtet sich nach dem Verteilungsvolumen, die Erhaltungsrate nach der Clearance."],
    ["Bei Kinetik 0. Ordnung wird pro Zeiteinheit ein konstanter Anteil eliminiert.", false, "Bei 0. Ordnung wird eine konstante Menge eliminiert (Enzyme gesättigt, z.B. Ethanol)."],
    ["Die kontextsensitive Halbwertszeit von Remifentanil ist weitgehend unabhängig von der Infusionsdauer.", true, "Abbau durch unspezifische Esterasen, keine relevante Anreicherung."]
  ] },
  { id: "mtf-a-04", paper: "A", thema: "Muskelrelaxanzien", stamm: "Succinylcholin:", aussagen: [
    ["ist ein depolarisierendes Muskelrelaxans.", true, "Es wirkt als Agonist am nikotinischen Rezeptor und erzeugt eine Dauerdepolarisation."],
    ["wird im synaptischen Spalt durch die Acetylcholinesterase rasch gespalten.", false, "Abgebaut wird es durch die Plasmacholinesterase (Butyrylcholinesterase); im Spalt endet die Wirkung durch Wegdiffusion."],
    ["kann nach großflächigen Verbrennungen eine lebensbedrohliche Hyperkaliämie auslösen.", true, "Durch hochregulierte extrajunktionale Rezeptoren, beginnend nach ca. 24–72 h."],
    ["ist ein Trigger der malignen Hyperthermie.", true, "Zusammen mit allen volatilen Anästhetika."],
    ["führt im Phase-I-Block zu einem deutlichen Fade im TOF.", false, "Phase-I-Block: alle vier Antworten gleich vermindert, kein Fade."]
  ] },
  { id: "mtf-a-05", paper: "A", thema: "Muskelrelaxanzien", stamm: "Nicht-depolarisierende Muskelrelaxanzien und ihre Antagonisierung:", aussagen: [
    ["Rocuronium ist ein Aminosteroid.", true, "Wie Vecuronium und Pancuronium."],
    ["Sugammadex wirkt durch Hemmung der Acetylcholinesterase.", false, "Sugammadex kapselt Rocuronium bzw. Vecuronium ein (Cyclodextrin)."],
    ["Sugammadex 16 mg/kg ermöglicht die sofortige Reversierung nach einer hohen Rocuroniumdosis.", true, "Dosis für die sofortige Aufhebung, z.B. in der Atemwegsnotsituation."],
    ["Neostigmin hebt einen tiefen Block (TOF-Count 0) zuverlässig auf.", false, "Cholinesterasehemmer wirken nur bei bereits begonnener Erholung; bei tiefem Block unzureichend."],
    ["Cisatracurium wird überwiegend organunabhängig durch Hofmann-Elimination abgebaut.", true, "Temperatur- und pH-abhängiger spontaner Zerfall."]
  ] },
  { id: "mtf-a-06", paper: "A", thema: "Inhalationsanästhetika", stamm: "Inhalationsanästhetika:", aussagen: [
    ["Ein niedriger Blut/Gas-Verteilungskoeffizient bedeutet schnelle An- und Abflutung.", true, "Wenig löst sich im Blut, der alveoläre Partialdruck steigt rasch."],
    ["Desfluran hat einen niedrigeren Blut/Gas-Verteilungskoeffizienten als Sevofluran.", true, "Ca. 0,42 gegenüber ca. 0,65."],
    ["Die MAC steigt mit zunehmendem Lebensalter.", false, "Die MAC sinkt im Alter (ca. 6 % pro Lebensjahrzehnt nach dem 40. Lebensjahr)."],
    ["MAC-Werte verschiedener Inhalationsanästhetika addieren sich annähernd.", true, "Z.B. 0,5 MAC Sevofluran + 0,5 MAC Lachgas ≈ 1 MAC."],
    ["Die MAC von Lachgas beträgt ca. 50 %.", false, "Sie liegt bei ca. 104 % und ist unter Normaldruck allein nicht erreichbar."]
  ] },
  { id: "mtf-a-07", paper: "A", thema: "Hypnotika", stamm: "Propofol:", aussagen: [
    ["wirkt vor allem als positiver allosterischer Modulator am GABA-A-Rezeptor.", true, "Es verstärkt den Chlorideinstrom und wirkt in hoher Dosis auch direkt."],
    ["ist gut wasserlöslich.", false, "Propofol ist lipophil und wird als Lipidemulsion angeboten."],
    ["hat eine antiemetische Wirkung.", true, "Propofol-TIVA senkt das PONV-Risiko gegenüber volatilen Anästhetika."],
    ["ist ein Trigger der malignen Hyperthermie.", false, "Propofol ist triggerfrei."],
    ["kann bei hoher Dosis über längere Zeit ein Propofol-Infusionssyndrom auslösen.", true, "Mit Azidose, Rhabdomyolyse, Hyperkaliämie und Herzversagen."]
  ] },
  { id: "mtf-a-08", paper: "A", thema: "Hypnotika", stamm: "Ketamin:", aussagen: [
    ["ist ein Antagonist am NMDA-Rezeptor.", true, "Nicht-kompetitive Blockade im Kanal."],
    ["steigert beim kreislaufgesunden Patienten typischerweise Blutdruck und Herzfrequenz.", true, "Durch zentrale Sympathikusaktivierung und Hemmung der Noradrenalin-Wiederaufnahme."],
    ["wirkt direkt negativ inotrop, was bei erschöpften Katecholaminspeichern sichtbar werden kann.", true, "Bei kritisch Kranken mit maximalem Sympathikotonus kann der Blutdruck fallen."],
    ["dämpft die Schutzreflexe der Atemwege stärker als Propofol.", false, "Atemantrieb und Schutzreflexe bleiben unter Ketamin relativ erhalten."],
    ["senkt den BIS-Wert zuverlässig proportional zur Narkosetiefe.", false, "Ketamin erzeugt schnelle Gamma-Aktivität; der BIS steigt eher und unterschätzt die Narkosetiefe."]
  ] },
  { id: "mtf-a-09", paper: "A", thema: "Opioide", stamm: "Opioide:", aussagen: [
    ["wirken über G-Protein-gekoppelte Rezeptoren, die überwiegend an Gi koppeln.", true, "µ-, κ- und δ-Rezeptoren hemmen die Adenylatcyclase und öffnen Kaliumkanäle."],
    ["Morphin-6-Glucuronid ist ein wirksamer Metabolit, der sich bei Niereninsuffizienz anhäuft.", true, "Gefahr verzögerter Atemdepression."],
    ["Remifentanil wird durch unspezifische Gewebe- und Plasmaesterasen abgebaut.", true, "Daher organunabhängige, kurze Wirkdauer."],
    ["verschieben die CO₂-Antwortkurve nach links.", false, "Sie verschieben sie nach rechts und machen sie flacher."],
    ["Naloxon ist ein partieller Agonist am µ-Rezeptor.", false, "Naloxon ist ein kompetitiver Antagonist; Buprenorphin ist ein partieller Agonist."]
  ] },
  { id: "mtf-a-10", paper: "A", thema: "Atemmechanik", stamm: "Atemmechanik:", aussagen: [
    ["Bei der FRC halten sich die elastischen Kräfte von Lunge und Brustkorb die Waage.", true, "Lunge zieht nach innen, Brustkorb nach außen."],
    ["Die FRC nimmt beim Wechsel vom Stehen in die Rückenlage zu.", false, "Sie sinkt im Liegen um ca. 0,5–1 l."],
    ["Die Compliance von Lunge und Brustkorb zusammen ist kleiner als die der Lunge allein.", true, "Hintereinanderschaltung: ca. 100 gegenüber ca. 200 ml/cmH₂O."],
    ["Der größte Teil des Atemwegswiderstands liegt in den kleinen Atemwegen unter 2 mm.", false, "Er liegt in den großen und mittleren Bronchien; die kleinen haben eine riesige Gesamtquerschnittsfläche."],
    ["Die Zeitkonstante ist das Produkt aus Widerstand und Compliance.", true, "Nach 3 Zeitkonstanten sind ca. 95 % ausgeatmet."]
  ] },
  { id: "mtf-a-11", paper: "A", thema: "Ventilation", stamm: "Ventilation und Totraum:", aussagen: [
    ["Halbiert sich die alveoläre Ventilation bei gleicher CO₂-Produktion, verdoppelt sich der PaCO₂.", true, "Alveoläre Ventilationsgleichung: PaCO₂ ∝ CO₂-Produktion / alveoläre Ventilation."],
    ["Der anatomische Totraum beträgt beim Erwachsenen ca. 2 ml/kg.", true, "Ca. 150 ml."],
    ["Eine Lungenembolie vergrößert den alveolären Totraum.", true, "Belüftete, aber nicht durchblutete Alveolen."],
    ["Je größer der alveoläre Totraum, desto näher liegt das endtidale CO₂ am arteriellen.", false, "Die Differenz wächst, weil CO₂-freies Gas aus Totraumalveolen die Ausatemluft verdünnt."],
    ["Kleine Atemzüge mit hoher Frequenz verbessern bei gleichem Atemminutenvolumen die alveoläre Ventilation.", false, "Ein größerer Anteil jedes Atemzugs füllt nur den Totraum."]
  ] },
  { id: "mtf-a-12", paper: "A", thema: "Herz", stamm: "Herzzyklus und Herzfunktion:", aussagen: [
    ["Die Steigung der endsystolischen Druck-Volumen-Beziehung ist ein weitgehend lastunabhängiges Maß der Kontraktilität.", true, "Endsystolische Elastance (Ees)."],
    ["Eine Nachlasterhöhung verkleinert das endsystolische Volumen.", false, "Das endsystolische Volumen steigt, das Schlagvolumen sinkt."],
    ["Mit steigender Herzfrequenz verkürzt sich vor allem die Diastole.", true, "Die Systole bleibt fast gleich lang."],
    ["Die Vorhofkontraktion trägt beim jungen Gesunden etwa 15–20 % zur Kammerfüllung bei.", true, "Bei steifem Ventrikel und im Alter deutlich mehr."],
    ["Der 2. Herzton entsteht beim Schluss der Mitralklappe.", false, "Der 2. Herzton entsteht beim Schluss der Aorten- und Pulmonalklappe; der 1. beim Schluss der AV-Klappen."]
  ] },
  { id: "mtf-a-13", paper: "A", thema: "Koronardurchblutung", stamm: "Koronardurchblutung:", aussagen: [
    ["Die linke Kammer wird überwiegend in der Diastole durchblutet.", true, "In der Systole drückt die Wand die Gefäße zusammen."],
    ["Die myokardiale Sauerstoffausschöpfung beträgt in Ruhe nur ca. 25 %.", false, "Sie liegt bei ca. 70–80 %; Mehrbedarf muss über mehr Fluss gedeckt werden."],
    ["Das Subendokard ist bei Ischämie zuerst betroffen.", true, "Höchste Wandspannung und stärkste Kompression."],
    ["Ein hoher linksventrikulärer enddiastolischer Druck verbessert die koronare Perfusion.", false, "Perfusionsdruck ≈ diastolischer Aortendruck minus LVEDP – ein hoher LVEDP verschlechtert sie."],
    ["Adenosin trägt zur stoffwechselabhängigen Koronardilatation bei.", true, "Neben NO, ATP-abhängigen Kaliumkanälen und anderen Faktoren."]
  ] },
  { id: "mtf-a-14", paper: "A", thema: "Niere", stamm: "Nierenphysiologie:", aussagen: [
    ["Der proximale Tubulus resorbiert ca. 65 % des filtrierten Natriums.", true, "Isoosmotisch, angetrieben von der basolateralen Natrium-Kalium-Pumpe."],
    ["Der dicke aufsteigende Teil der Henle-Schleife ist gut wasserdurchlässig.", false, "Er ist wasserdicht – darum wird die Tubulusflüssigkeit dort verdünnt."],
    ["Angiotensin II verengt bevorzugt das Vas efferens.", true, "Das erhält den glomerulären Kapillardruck bei Minderdurchblutung."],
    ["Die Autoregulation der Nierendurchblutung reicht etwa von 80 bis 180 mmHg mittlerem arteriellen Druck.", true, "Myogener Mechanismus und tubuloglomerulärer Feedback."],
    ["Nach einem akuten GFR-Abfall steigt das Serumkreatinin sofort auf seinen neuen Gleichgewichtswert.", false, "Der Anstieg dauert Stunden bis Tage – Kreatinin ist ein später Marker."]
  ] },
  { id: "mtf-a-15", paper: "A", thema: "Säure-Basen", stamm: "Säure-Basen-Haushalt:", aussagen: [
    ["Bei pH 7,40 beträgt die H⁺-Konzentration ca. 40 nmol/l.", true, "Bei pH 7,0 sind es ca. 100 nmol/l."],
    ["Nach Henderson-Hasselbalch hängt der pH vom Verhältnis Bicarbonat zu CO₂ ab.", true, "pH = 6,1 + log(HCO₃⁻ / (0,03 × PaCO₂))."],
    ["Große Mengen NaCl 0,9 % können eine hyperchlorämische metabolische Azidose verursachen.", true, "Die starke Ionendifferenz sinkt."],
    ["Eine Hypalbuminämie verursacht nach Stewart eine metabolische Azidose.", false, "Weniger schwache Säuren (Albumin) wirken alkalisierend."],
    ["Die typische Ursache einer Azidose mit normaler Anionenlücke ist eine Laktatazidose.", false, "Laktat erhöht die Anionenlücke; normale Lücke: z.B. Chloridlast, Durchfall, renal-tubuläre Azidose."]
  ] },
  { id: "mtf-a-16", paper: "A", thema: "Gerinnung", stamm: "Hämostase:", aussagen: [
    ["Im zellbasierten Modell beginnt die Gerinnung mit Tissue Factor und Faktor VIIa.", true, "Initiation auf TF-tragenden Zellen."],
    ["Faktor XIII vernetzt Fibrin und stabilisiert das Gerinnsel.", true, "Quervernetzung am Ende der Kaskade."],
    ["Ein Faktor-XII-Mangel verursacht typischerweise schwere Blutungen.", false, "Er verlängert die aPTT stark, verursacht aber keine Blutungsneigung."],
    ["ASS hemmt die Cyclooxygenase-1 der Thrombozyten irreversibel.", true, "Wirkung für die Lebensdauer der Plättchen (ca. 7–10 Tage)."],
    ["Quick und aPTT erfassen die Thrombozytenfunktion.", false, "Sie werden im Plasma gemessen und erfassen weder Thrombozytenfunktion noch Gerinnselfestigkeit."]
  ] },
  { id: "mtf-a-17", paper: "A", thema: "Physik", stamm: "Physik der Gase:", aussagen: [
    ["Bei konstanter Temperatur ist das Volumen eines Gases umgekehrt proportional zum Druck.", true, "Gesetz von Boyle-Mariotte."],
    ["Die kritische Temperatur von Lachgas liegt oberhalb der Raumtemperatur.", true, "Ca. 36,4 °C – deshalb liegt es in der Flasche flüssig vor."],
    ["Sauerstoff liegt in der Gasflasche bei Raumtemperatur flüssig vor.", false, "Seine kritische Temperatur liegt bei ca. −118 °C; er ist bei Raumtemperatur nicht verflüssigbar."],
    ["Der Füllstand einer Lachgasflasche lässt sich am Manometerdruck ablesen, solange noch Flüssigkeit vorhanden ist.", false, "Der Druck bleibt bis zum Aufbrauchen der Flüssigkeit nahezu konstant – der Füllstand wird durch Wiegen bestimmt."],
    ["Laminarer Fluss hängt von der Viskosität, turbulenter Fluss von der Dichte des Gases ab.", true, "Deshalb hilft das leichte Heliox bei turbulentem Fluss an Engstellen."]
  ] },
  { id: "mtf-a-18", paper: "A", thema: "Messtechnik", stamm: "Pulsoxymetrie:", aussagen: [
    ["nutzt Licht im roten und infraroten Bereich.", true, "Typisch ca. 660 und ca. 940 nm."],
    ["zeigt bei Kohlenmonoxidvergiftung falsch niedrige Werte.", false, "CO-Hb wird wie Oxy-Hb gewertet – die Anzeige ist falsch hoch."],
    ["Bei Methämoglobinämie tendiert die Anzeige gegen ca. 85 %.", true, "Met-Hb absorbiert bei beiden Wellenlängen ähnlich (R nahe 1)."],
    ["wertet nur den pulsierenden Anteil der Lichtabsorption aus.", true, "So werden Gewebe und venöses Blut herausgerechnet."],
    ["misst direkt den arteriellen Sauerstoffpartialdruck.", false, "Sie misst die funktionelle Sättigung; der PaO₂ folgt aus der Bindungskurve nur indirekt."]
  ] },
  { id: "mtf-a-19", paper: "A", thema: "Statistik", stamm: "Statistik und Testgüte:", aussagen: [
    ["Die Sensitivität ist der Anteil der Kranken mit positivem Test.", true, "Richtig-positive / alle Kranken."],
    ["Der positive prädiktive Wert hängt von der Prävalenz ab.", true, "Bei seltener Erkrankung sind viele positive Tests falsch-positiv."],
    ["Die Spezifität ist der Anteil der Testpositiven, die tatsächlich krank sind.", false, "Das ist der positive prädiktive Wert; die Spezifität ist der Anteil der Gesunden mit negativem Test."],
    ["Die Number Needed to Treat ist der Kehrwert der absoluten Risikoreduktion.", true, "NNT = 1 / ARR."],
    ["Ein p-Wert von 0,03 bedeutet, dass die Nullhypothese mit 97 % Wahrscheinlichkeit falsch ist.", false, "Er gibt die Wahrscheinlichkeit eines mindestens so extremen Ergebnisses an, falls die Nullhypothese stimmt."]
  ] },
  { id: "mtf-a-20", paper: "A", thema: "Anatomie", stamm: "Angewandte Anatomie:", aussagen: [
    ["Das Rückenmark endet beim Erwachsenen meist auf Höhe L1/L2.", true, "Darum Spinalanästhesie unterhalb, z.B. L3/4."],
    ["Beim medianen Zugang durchquert die Nadel das Lig. flavum, bevor sie den Epiduralraum erreicht.", true, "Der Widerstandsverlust nach dem Lig. flavum zeigt den Epiduralraum an."],
    ["Der N. radialis geht aus dem Fasciculus medialis hervor.", false, "Er stammt wie der N. axillaris aus dem Fasciculus posterior."],
    ["Bei der interskalenären Plexusblockade wird häufig der N. phrenicus mitblockiert.", true, "Folge: ipsilaterale Zwerchfellparese."],
    ["Der Truncus superior entsteht aus der Wurzel C7.", false, "Er entsteht aus C5 und C6; C7 bildet den Truncus medius."]
  ] },

  // ===== PAPER B – KLINIK =====
  { id: "mtf-b-01", paper: "B", thema: "Maligne Hyperthermie", stamm: "Maligne Hyperthermie:", aussagen: [
    ["Ein früher Hinweis ist ein Anstieg des endtidalen CO₂ trotz gesteigerter Ventilation.", true, "Hypermetabolismus der Muskulatur."],
    ["Dantrolen wird initial mit 2,5 mg/kg i.v. gegeben.", true, "Wiederholen bis zur Symptomkontrolle."],
    ["Lachgas ist ein Auslöser.", false, "Lachgas ist kein Trigger; Auslöser sind alle volatilen Anästhetika und Succinylcholin."],
    ["Propofol und Opioide können bei disponierten Patienten verwendet werden.", true, "Triggerfreie Anästhesie, z.B. TIVA."],
    ["Die Hyperthermie ist meist das früheste Zeichen.", false, "Sie tritt oft erst spät auf; früh sind CO₂-Anstieg, Tachykardie und Rigor."]
  ] },
  { id: "mtf-b-02", paper: "B", thema: "Regionalanästhesie", stamm: "Lokalanästhetika-Intoxikation (LAST):", aussagen: [
    ["Zentralnervöse Symptome wie periorale Taubheit und Metallgeschmack gehen den kardialen oft voraus.", true, "Hemmende Neurone werden zuerst blockiert."],
    ["Lipidemulsion 20 % wird initial mit ca. 1,5 ml/kg als Bolus gegeben.", true, "Danach Infusion ca. 0,25 ml/kg/min."],
    ["Bei der Reanimation werden die Adrenalindosen erhöht.", false, "Empfohlen sind reduzierte Einzeldosen (≤ 1 µg/kg)."],
    ["Lidocain ist bei LAST das Antiarrhythmikum der Wahl.", false, "Lidocain soll gerade nicht gegeben werden."],
    ["Nach Interkostalblockaden ist die systemische Resorption höher als nach subkutaner Infiltration.", true, "Reihenfolge: interkostal > kaudal > epidural > Plexus > subkutan."]
  ] },
  { id: "mtf-b-03", paper: "B", thema: "Anaphylaxie", stamm: "Perioperative Anaphylaxie:", aussagen: [
    ["Adrenalin ist das Medikament der ersten Wahl.", true, "Titriert nach Schweregrad, bei Kreislaufstillstand nach Reanimationsalgorithmus."],
    ["Muskelrelaxanzien gehören zu den häufigen Auslösern.", true, "Neben Antibiotika und Chlorhexidin."],
    ["Eine normale Serumtryptase schließt eine Anaphylaxie aus.", false, "Eine erhöhte Tryptase stützt die Diagnose, eine normale schließt sie nicht aus; Proben früh und nach einigen Stunden abnehmen."],
    ["Antihistaminika können bei Kreislaufinstabilität das Adrenalin ersetzen.", false, "Antihistaminika und Kortikosteroide sind nur Ergänzung."],
    ["Ein Bronchospasmus kann das führende oder einzige Zeichen sein.", true, "Hautzeichen können in Narkose fehlen; Hypotonie ist am häufigsten."]
  ] },
  { id: "mtf-b-04", paper: "B", thema: "Atemweg", stamm: "Unerwartet schwieriger Atemweg (DAS):", aussagen: [
    ["Es sind höchstens 3 Intubationsversuche vorgesehen, dazu 1 durch einen erfahreneren Anwender.", true, "Eine Obergrenze, kein Kontingent."],
    ["In der CICO-Situation ist die Skalpell-Bougie-Tubus-Krikothyreotomie das empfohlene Verfahren.", true, "Kanülenbasierte Verfahren sind dafür nicht die Methode der Wahl."],
    ["Gelingt die Oxygenierung über eine supraglottische Atemwegshilfe, wird innegehalten und über das weitere Vorgehen entschieden.", true, "Z.B. Aufwachen lassen oder vorsichtig fortfahren."],
    ["Die Tubuslage kann durch Auskultation allein sicher bestätigt werden.", false, "Standard ist die Kurvenkapnographie."],
    ["Bei Erwachsenen ist die kanülenbasierte Krikothyreotomie das bevorzugte Notfallverfahren.", false, "Empfohlen ist die chirurgische Technik mit Skalpell, Bougie und Tubus."]
  ] },
  { id: "mtf-b-05", paper: "B", thema: "Reanimation", stamm: "Erweiterte Reanimation beim Erwachsenen (ERC):", aussagen: [
    ["Bei nicht schockbaren Rhythmen wird Adrenalin 1 mg so früh wie möglich gegeben.", true, "Danach alle 3–5 min."],
    ["Bei Kammerflimmern wird Adrenalin schon vor dem ersten Schock gegeben.", false, "Adrenalin erst nach dem 3. erfolglosen Schock, dann alle 3–5 min."],
    ["Amiodaron 300 mg wird nach dem 3. erfolglosen Schock gegeben.", true, "Weitere 150 mg nach dem 5. Schock."],
    ["Die Thoraxkompressionen erfolgen mit einer Frequenz von 60–80/min.", false, "Empfohlen sind 100–120/min mit 5–6 cm Tiefe."],
    ["Ein plötzlicher Anstieg des endtidalen CO₂ kann einen Spontankreislauf anzeigen.", true, "Kapnographie unter Reanimation."]
  ] },
  { id: "mtf-b-06", paper: "B", thema: "Geburtshilfe", stamm: "Präeklampsie:", aussagen: [
    ["Magnesiumsulfat ist Mittel der Wahl zur Vorbeugung und Behandlung eklamptischer Anfälle.", true, "Spiegel- und Reflexkontrolle."],
    ["Bei Magnesiumüberdosierung ist Naloxon das Antidot.", false, "Antidot ist Calcium (Calciumgluconat bzw. -chlorid i.v.)."],
    ["Magnesium verstärkt die Wirkung nicht-depolarisierender Muskelrelaxanzien.", true, "Weniger Acetylcholinfreisetzung – relaxometrisch überwachen."],
    ["Eine Thrombozytopenie ist beim HELLP-Syndrom untypisch.", false, "HELLP = Hämolyse, erhöhte Leberwerte, niedrige Thrombozyten."],
    ["Sie ist durch eine neu auftretende Hypertonie nach der 20. Schwangerschaftswoche mit Proteinurie oder Organbeteiligung gekennzeichnet.", true, "Definition nach gängigen Leitlinien."]
  ] },
  { id: "mtf-b-07", paper: "B", thema: "Geburtshilfe", stamm: "Postpartale Blutung:", aussagen: [
    ["Die häufigste Ursache ist eine Uterusatonie.", true, "Merkhilfe 4 T: Tonus, Trauma, Tissue (Gewebe), Thrombin."],
    ["Oxytocin ist das Uterotonikum der ersten Wahl.", true, "Carbetocin ist ein länger wirksames Analogon."],
    ["Tranexamsäure 1 g soll möglichst früh gegeben werden.", true, "WOMAN-Studie: Nutzen bei Gabe innerhalb von 3 h."],
    ["Fibrinogen fällt bei der postpartalen Blutung typischerweise erst spät ab.", false, "Ein früh niedriges Fibrinogen sagt einen schweren Verlauf voraus."],
    ["Ein normaler Hb-Wert schließt bei frischer Blutung einen großen Blutverlust aus.", false, "Das Hb fällt erst nach Umverteilung bzw. Volumenersatz – anfangs kann es trotz großem Verlust normal sein."]
  ] },
  { id: "mtf-b-08", paper: "B", thema: "Sepsis", stamm: "Septischer Schock (Surviving Sepsis Campaign):", aussagen: [
    ["Dopamin ist der Vasopressor der ersten Wahl.", false, "Erste Wahl ist Noradrenalin; Dopamin verursacht mehr Rhythmusstörungen."],
    ["Der initiale Ziel-Mitteldruck liegt bei ca. 65 mmHg.", true, "Danach individuell anpassen."],
    ["Bei septischem Schock sollen Antibiotika möglichst innerhalb von 1 h gegeben werden.", true, "Nach Abnahme von Blutkulturen, ohne Verzögerung."],
    ["Hydroxyethylstärke wird zur Volumentherapie empfohlen.", false, "Wegen Nierenschäden und höherer Sterblichkeit nicht verwenden."],
    ["Reicht der Mitteldruck unter Noradrenalin nicht aus, wird Vasopressin ergänzt.", true, "Statt Noradrenalin immer weiter zu erhöhen."]
  ] },
  { id: "mtf-b-09", paper: "B", thema: "Beatmung", stamm: "ARDS (Berlin-Definition) und Beatmung:", aussagen: [
    ["Für die Diagnose muss ein Herzversagen als Ursache der Lungenödeme nachgewiesen sein.", false, "Umgekehrt: Das Ödem darf nicht allein durch Herzversagen oder Überwässerung erklärt sein; Beginn innerhalb einer Woche nach einem Auslöser."],
    ["Ein PaO₂/FiO₂ ≤ 100 mmHg unter PEEP ≥ 5 cmH₂O entspricht einem schweren ARDS.", true, "Mild 200–300, moderat 100–200, schwer ≤ 100."],
    ["Lungenprotektiv wird mit ca. 6 ml/kg idealem Körpergewicht beatmet.", true, "Bezogen auf das ideale, nicht das tatsächliche Gewicht."],
    ["Der Plateaudruck soll ≤ 30 cmH₂O bleiben.", true, "Zusätzlich niedriger Driving Pressure anstreben."],
    ["Bauchlage wird erst ab einem PaO₂/FiO₂ < 50 mmHg empfohlen.", false, "Empfohlen bei moderatem bis schwerem ARDS (PaO₂/FiO₂ < 150) für mindestens 12–16 h täglich."]
  ] },
  { id: "mtf-b-10", paper: "B", thema: "Elektrolyte", stamm: "Akutbehandlung der Hyperkaliämie:", aussagen: [
    ["Calcium i.v. stabilisiert die Membran, senkt das Kalium aber nicht.", true, "Wirkt in Minuten, für einige Zeit."],
    ["Insulin mit Glukose verschiebt Kalium in die Zellen.", true, "Über die Natrium-Kalium-Pumpe; Blutzucker kontrollieren."],
    ["β2-Agonisten senken das Serumkalium.", true, "Ebenfalls durch Umverteilung."],
    ["Natriumbicarbonat ist bei normalem pH die wirksamste Akutmaßnahme.", false, "Ohne Azidose ist der Effekt gering."],
    ["Bei einem Kalium von 6,5 mmol/l ist Succinylcholin unbedenklich.", false, "Es erhöht das Kalium um ca. 0,5 mmol/l – bei Hyperkaliämie vermeiden."]
  ] },
  { id: "mtf-b-11", paper: "B", thema: "Elektrolyte", stamm: "Hyponatriämie:", aussagen: [
    ["Bei schweren Symptomen werden 150 ml NaCl 3 % über 20 min gegeben.", true, "Ggf. wiederholen bis zum Anstieg um ca. 5 mmol/l."],
    ["In den ersten 24 h soll das Natrium um höchstens 10 mmol/l angehoben werden.", true, "Danach höchstens 8 mmol/l pro 24 h."],
    ["Eine zu schnelle Korrektur kann ein osmotisches Demyelinisierungssyndrom auslösen.", true, "Besonders bei Alkoholkrankheit, Mangelernährung, Hypokaliämie."],
    ["Für Erhaltungsinfusionen bei Kindern werden hypotone Lösungen empfohlen.", false, "Empfohlen sind isotone Lösungen."],
    ["Patienten mit SIADH sind typischerweise hypovoläm.", false, "Sie sind euvoläm; Hypovolämie spricht eher für Salzverlust."]
  ] },
  { id: "mtf-b-12", paper: "B", thema: "Diabetes", stamm: "Diabetische Ketoazidose:", aussagen: [
    ["Vor Beginn der Insulintherapie wird das Kalium bestimmt; liegt es unter 3,3 mmol/l, wird zuerst Kalium ersetzt.", true, "Insulin senkt das Kalium weiter."],
    ["Die Therapie beginnt mit Volumengabe.", true, "Balancierte Kristalloide bzw. NaCl 0,9 %."],
    ["Bicarbonat wird routinemäßig ab einem pH < 7,3 gegeben.", false, "Nur bei sehr schwerer Azidose (pH < ca. 6,9–7,0)."],
    ["SGLT2-Hemmer können eine Ketoazidose bei nur leicht erhöhtem Blutzucker auslösen.", true, "Euglykämische Ketoazidose; perioperativ pausieren."],
    ["Erreicht der Blutzucker ca. 250 mg/dl, wird Glukose zugesetzt und Insulin fortgeführt.", true, "Bis die Ketoazidose behoben ist."]
  ] },
  { id: "mtf-b-13", paper: "B", thema: "Präoperativ", stamm: "Präoperative Nüchternheit (Elektiveingriff):", aussagen: [
    ["Klare Flüssigkeiten sind bei Erwachsenen bis 2 h vor der Narkose erlaubt.", true, "Unnötig lange Nüchternheit vermeiden."],
    ["Milch zählt zu den klaren Flüssigkeiten.", false, "Milch gilt nicht als klare Flüssigkeit; feste Nahrung und Milch in der Regel bis 6 h vorher."],
    ["Muttermilch wird bei Säuglingen bis 3 h vorher erlaubt.", true, "ESAIC 2022 ('6-4-3-1')."],
    ["Klare Flüssigkeiten sind bei Kindern bis 1 h vorher erlaubt.", true, "ESAIC 2022."],
    ["Schwangere ab dem 2. Trimenon gelten unabhängig von der Nüchternzeit als nüchtern.", false, "Sie gelten als nicht nüchtern (verzögerte Magenentleerung, niedriger Sphinktertonus)."]
  ] },
  { id: "mtf-b-14", paper: "B", thema: "Regionalanästhesie", stamm: "Spinalanästhesie:", aussagen: [
    ["Eine Hypotonie entsteht vor allem durch die Sympathikusblockade.", true, "Venöses Pooling und Gefäßweitstellung."],
    ["Der postpunktionelle Kopfschmerz bessert sich typischerweise im Liegen.", true, "Lageabhängigkeit ist das Leitsymptom."],
    ["Atraumatische Nadeln (Pencil-Point) senken das Risiko eines postpunktionellen Kopfschmerzes.", true, "Gegenüber schneidenden Nadeln."],
    ["Der postpunktionelle Kopfschmerz beginnt typischerweise schon während der Punktion.", false, "Er beginnt meist Stunden bis wenige Tage danach; bei anhaltenden Beschwerden ist ein epiduraler Blutpatch eine Option."],
    ["Die sensible Blockade reicht meist höher als die Sympathikusblockade.", false, "Der Sympathikusblock reicht meist 2–6 Segmente höher, der motorische Block liegt tiefer."]
  ] },
  { id: "mtf-b-15", paper: "B", thema: "Kinderanästhesie", stamm: "Neugeborene und Säuglinge:", aussagen: [
    ["Ein Laryngospasmus wird zuerst mit CPAP und 100 % Sauerstoff behandelt.", true, "Bei Persistenz Vertiefung der Narkose bzw. Relaxierung."],
    ["Neugeborene reagieren auf Hypoxie typischerweise mit Bradykardie.", true, "Überwiegender Vagotonus."],
    ["Das Herzzeitvolumen hängt stark von der Herzfrequenz ab.", true, "Das Schlagvolumen ist kaum steigerbar."],
    ["Verapamil ist im ersten Lebensjahr ein bevorzugtes Antiarrhythmikum.", false, "Es ist im ersten Lebensjahr kontraindiziert (Kreislaufversagen)."],
    ["Das Blutvolumen beträgt beim Neugeborenen ca. 80–90 ml/kg.", true, "Höher als beim Erwachsenen."]
  ] },
  { id: "mtf-b-16", paper: "B", thema: "Neurotrauma", stamm: "Schweres Schädel-Hirn-Trauma:", aussagen: [
    ["Eine Hirndrucktherapie wird ab einem ICP von ca. > 22 mmHg empfohlen.", true, "Brain Trauma Foundation, 4. Auflage."],
    ["Der zerebrale Perfusionsdruck soll bei ca. 60–70 mmHg liegen.", true, "Höher erzwungen steigt das Risiko eines Lungenversagens."],
    ["Eine prophylaktische Hyperventilation auf einen PaCO₂ < 25 mmHg wird empfohlen.", false, "Sie verursacht Ischämie und wird nicht empfohlen."],
    ["Schon kurze Hypotonie- und Hypoxiephasen verschlechtern das Ergebnis.", true, "Sekundäre Hirnschädigung."],
    ["Kortikosteroide werden zur Senkung des Hirndrucks empfohlen.", false, "Beim SHT nicht empfohlen (CRASH-Studie: höhere Sterblichkeit)."]
  ] },
  { id: "mtf-b-17", paper: "B", thema: "Trauma", stamm: "Massive Blutung und Massivtransfusion:", aussagen: [
    ["Tranexamsäure soll beim blutenden Traumapatienten möglichst innerhalb von 3 h gegeben werden.", true, "CRASH-2; später gegeben ohne Nutzen."],
    ["Citrat aus Blutprodukten kann das ionisierte Calcium senken.", true, "Calcium messen und ersetzen."],
    ["Hypothermie verschlechtert die Gerinnung.", true, "Enzymaktivität und Thrombozytenfunktion sinken."],
    ["Eine permissive Hypotension wird auch bei schwerem Schädel-Hirn-Trauma empfohlen.", false, "Beim SHT muss der Perfusionsdruck gehalten werden."],
    ["Bei relevanter Blutung wird ein Fibrinogenspiegel von ca. 1,5–2 g/l angestrebt.", true, "Ggf. mit Fibrinogenkonzentrat."]
  ] },
  { id: "mtf-b-18", paper: "B", thema: "PONV", stamm: "Postoperative Übelkeit und Erbrechen (PONV):", aussagen: [
    ["Weibliches Geschlecht ist ein Risikofaktor im Apfel-Score.", true, "Daneben Nichtraucher, PONV oder Reisekrankheit in der Vorgeschichte, postoperative Opioide."],
    ["Raucher haben ein höheres PONV-Risiko als Nichtraucher.", false, "Nichtrauchen ist der Risikofaktor."],
    ["Eine Propofol-TIVA senkt das Risiko gegenüber volatilen Anästhetika.", true, "Volatile Anästhetika sind ein wichtiger Auslöser."],
    ["Dexamethason wirkt antiemetisch.", true, "Am besten zur Einleitung gegeben."],
    ["Die Kombination verschiedener Wirkprinzipien wirkt besser als die Dosissteigerung eines einzelnen Mittels.", true, "Multimodale Prophylaxe nach Risiko."]
  ] },
  { id: "mtf-b-19", paper: "B", thema: "Niere", stamm: "Akute Nierenschädigung (KDIGO):", aussagen: [
    ["Ein Kreatininanstieg um ≥ 0,3 mg/dl innerhalb von 48 h erfüllt die Definition.", true, "Alternativ ≥ 1,5-facher Anstieg in 7 Tagen."],
    ["Eine Urinmenge < 0,5 ml/kg/h über 6 h erfüllt die Definition.", true, "Urinkriterium."],
    ["Furosemid wird zur Vorbeugung empfohlen.", false, "Schleifendiuretika schützen nicht; nur zur Behandlung einer Überwässerung."],
    ["Niedrig dosiertes Dopamin schützt die Niere.", false, "Nicht wirksam zur Vorbeugung."],
    ["Bei großen Infusionsmengen werden balancierte Lösungen statt NaCl 0,9 % bevorzugt.", true, "Weniger Chloridlast."]
  ] },
  { id: "mtf-b-20", paper: "B", thema: "Schmerztherapie", stamm: "Analgetika:", aussagen: [
    ["Metamizol kann eine Agranulozytose auslösen.", true, "Selten, aber potenziell lebensbedrohlich."],
    ["Paracetamol ist in Überdosierung lebertoxisch.", true, "Toxischer Metabolit NAPQI; Antidot Acetylcystein."],
    ["NSAR sind bei Volumenmangel und Niereninsuffizienz unproblematisch.", false, "Sie hemmen die schützenden Prostaglandine am Vas afferens."],
    ["Bei Niereninsuffizienz häufen sich wirksame Morphinmetaboliten an.", true, "Morphin-6-Glucuronid."],
    ["Pethidin ist bei Niereninsuffizienz das Opioid der Wahl.", false, "Norpethidin häuft sich an und kann Krampfanfälle auslösen."]
  ] }
];
