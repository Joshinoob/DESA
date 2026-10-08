// Spezialwissen Herz – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const FIG_AP =
    '<svg viewBox="0 0 360 406" role="img" aria-label="Aktionspotenzial Arbeitsmyokard und Sinusknoten">' +
    '<text x="10" y="14" class="t-h">Arbeitsmyokard (Ventrikel)</text>' +
    '<line x1="40" y1="20" x2="40" y2="196" class="ax"/><line x1="40" y1="196" x2="345" y2="196" class="ax"/>' +
    '<text x="4" y="38" class="t-s">+20</text><text x="12" y="66" class="t-s">0</text><text x="4" y="192" class="t-s">−90</text>' +
    '<line x1="40" y1="62" x2="345" y2="62" class="grid"/>' +
    '<path d="M40 188 L62 188 L64 34 L72 58 C110 64 180 66 212 76 C236 90 250 170 268 186 L345 188" class="c1"/>' +
    '<text x="50" y="120" class="t-l">0</text><text x="74" y="50" class="t-l">1</text><text x="140" y="56" class="t-l">2</text><text x="250" y="130" class="t-l">3</text><text x="300" y="180" class="t-l">4</text>' +
    '<text x="10" y="216" class="t-s">0: Na⁺-Einstrom (Nav1.5) · 1: Ito (transienter K⁺-Ausstrom)</text>' +
    '<text x="10" y="229" class="t-s">2: Plateau – Ca²⁺-Einstrom (L-Typ) ↔ K⁺-Ausstrom</text>' +
    '<text x="10" y="242" class="t-s">3: IKr/IKs (K⁺-Ausstrom) · 4: Ruhepotenzial ≈ −90 mV (IK1)</text>' +
    '<text x="10" y="270" class="t-h">Sinusknoten (Schrittmacher)</text>' +
    '<line x1="40" y1="276" x2="40" y2="368" class="ax"/><line x1="40" y1="368" x2="345" y2="368" class="ax"/>' +
    '<line x1="40" y1="326" x2="345" y2="326" class="grid"/><text x="4" y="330" class="t-s">−40</text><text x="4" y="362" class="t-s">−60</text>' +
    '<path d="M40 358 C80 352 120 338 134 326 L143 286 C160 300 175 340 190 358 C230 352 270 338 284 326 L293 286 C310 300 325 340 340 358" class="c2"/>' +
    '<text x="70" y="352" class="t-l">4</text><text x="146" y="284" class="t-l">0</text><text x="176" y="320" class="t-l">3</text>' +
    '<text x="10" y="386" class="t-s">4: If (HCN4), T-Typ-Ca²⁺, Ca²⁺-Uhr/NCX</text>' +
    '<text x="10" y="399" class="t-s">0: L-Typ-Ca²⁺-Einstrom · 3: K⁺-Ausstrom</text>' +
    "</svg>";

  const FIG_PV =
    '<svg viewBox="0 0 360 300" role="img" aria-label="Druck-Volumen-Schleife des linken Ventrikels">' +
    '<line x1="50" y1="20" x2="50" y2="220" class="ax"/><line x1="50" y1="220" x2="345" y2="220" class="ax"/>' +
    '<text x="6" y="14" class="t-s">Druck (mmHg)</text><text x="150" y="250" class="t-s">Volumen (ml)</text>' +
    '<text x="28" y="83" class="t-s">100</text><text x="34" y="209" class="t-s">10</text>' +
    '<text x="132" y="234" class="t-s">50</text><text x="256" y="234" class="t-s">120</text>' +
    '<path d="M68 220 L162 38" class="dash"/><text x="56" y="34" class="t-s">ESPVR (Steigung Ees)</text>' +
    '<path d="M86 217 Q200 214 266 206 Q300 200 322 178" class="dash"/><text x="324" y="174" class="t-s">EDPVR</text>' +
    '<path d="M266 220 L140 80" class="dot"/><text x="212" y="150" class="t-s">Ea</text>' +
    '<path d="M140 213 Q221 212 266 206 L266 108 Q252 50 203 49 Q160 50 140 80 Z" class="c1"/>' +
    '<circle cx="266" cy="206" r="3" class="pt"/><circle cx="266" cy="108" r="3" class="pt"/><circle cx="140" cy="80" r="3" class="pt"/><circle cx="140" cy="213" r="3" class="pt"/>' +
    '<text x="272" y="216" class="t-l">A</text><text x="272" y="106" class="t-l">B</text><text x="124" y="76" class="t-l">C</text><text x="124" y="212" class="t-l">D</text>' +
    '<text x="272" y="146" class="t-s">① isovol.</text><text x="272" y="158" class="t-s">Kontraktion</text>' +
    '<text x="176" y="40" class="t-s">② Austreibung</text>' +
    '<text x="84" y="176" class="t-s">③ isovol.</text><text x="84" y="188" class="t-s">Relaxation</text>' +
    '<text x="176" y="203" class="t-s">④ Füllung</text>' +
    '<text x="10" y="268" class="t-s">A: Mitralklappe schließt (EDV) · B: Aortenklappe öffnet</text>' +
    '<text x="10" y="281" class="t-s">C: Aortenklappe schließt (ESV) · D: Mitralklappe öffnet</text>' +
    '<text x="10" y="294" class="t-s">Breite = Schlagvolumen · Fläche = Schlagarbeit</text>' +
    "</svg>";

  window.__addSpezialOrgan({
    id: "herz",
    title: "Herz",
    subtopic: "kreislauf",
    subtitle: "Vom Kardiomyozyten bis zur Kreislaufregulation unter Narkose",
    chapters: [
      {
        id: "zelle",
        level: "Zelle",
        title: "Der Kardiomyozyt – Bauplan der Pumpe",
        leitfrage: "Wie muss eine Muskelzelle gebaut sein, damit sie rund 100.000-mal am Tag ohne Pause und ohne Ermüdung kontrahiert?",
        body: [
          { h: "Zellaufbau" },
          "Ventrikuläre Kardiomyozyten sind etwa 100 µm lang und 10–25 µm breit, verzweigt und meist ein- bis zweikernig. Anders als Skelettmuskelfasern sind sie **keine Synzytien**, sondern Einzelzellen, die über **Glanzstreifen (Disci intercalares)** End-zu-End verbunden sind.",
          { ul: [
            "**Fascia adhaerens:** verankert die Aktinfilamente benachbarter Zellen und überträgt die Kraft von Zelle zu Zelle.",
            "**Desmosomen:** mechanischer Zusammenhalt unter Zug. Mutationen der Desmosomenproteine verursachen die arrhythmogene (rechtsventrikuläre) Kardiomyopathie.",
            "**Gap Junctions:** Kanäle aus Connexinen (im Arbeitsmyokard v.a. Connexin 43) koppeln die Zellen elektrisch mit niedrigem Widerstand. Die Erregung breitet sich dadurch wie in einem **funktionellen Synzytium** aus."
          ] },
          { h: "Sarkomer und Titin" },
          "Die kontraktile Einheit ist das **Sarkomer** (Z-Scheibe zu Z-Scheibe, in Diastole ca. 1,9–2,2 µm). Dünne Filamente (Aktin mit Tropomyosin und dem Troponinkomplex C, I, T) sind an den Z-Scheiben verankert. Dicke Filamente (Myosin II) liegen in der A-Bande und sind an der M-Linie zentriert.",
          "**Titin**, das größte bekannte Protein des Menschen, spannt sich von der Z-Scheibe bis zur M-Linie. Es wirkt als molekulare Feder: Es bestimmt einen Großteil der **passiven diastolischen Steifigkeit**, zentriert das Myosin und ist an der **längenabhängigen Aktivierung** (Frank-Starling) beteiligt. Herzspezifisch gibt es eine steifere (N2B) und eine nachgiebigere (N2BA) Isoform. Verkürzende Titin-Varianten (TTN) sind die häufigste bekannte genetische Ursache der dilatativen Kardiomyopathie.",
          { h: "T-Tubuli, sarkoplasmatisches Retikulum, Dyade" },
          "Das Sarkolemm stülpt sich auf Höhe der Z-Linien als **T-Tubuli** in die Zelle ein. Dort liegen die spannungsabhängigen **L-Typ-Ca²⁺-Kanäle** (Cav1.2, Dihydropyridin-Rezeptoren) in nur wenigen Nanometern Abstand gegenüber den **Ryanodin-Rezeptoren (RyR2)** des junktionalen sarkoplasmatischen Retikulums (SR). Diese funktionelle Einheit heißt **Dyade**: Hier wird die elektrische Erregung in Ca²⁺-Freisetzung übersetzt. Im longitudinalen SR pumpt **SERCA2a** Ca²⁺ zurück; im SR bindet Calsequestrin Ca²⁺. Vorhofmyozyten haben deutlich weniger T-Tubuli.",
          { h: "Energiestoffwechsel" },
          "Mitochondrien nehmen etwa **ein Drittel des Zellvolumens** ein. Das Herz hat kaum Energiespeicher: Der ATP-Vorrat reicht nur für **wenige Sekunden** Kontraktion. Kreatinphosphat puffert über die Kreatinkinase kurzfristig. Das gesunde Erwachsenenherz gewinnt den Großteil seines ATP (ca. 60–90 %) aus der **Oxidation von Fettsäuren**, den Rest aus Glukose, Laktat und Ketonkörpern. In der Ischämie schaltet es auf anaerobe Glykolyse um, die nur einen Bruchteil des ATP liefert.",
          { h: "Regeneration" },
          "Adulte Kardiomyozyten teilen sich kaum noch: Die Erneuerungsrate liegt beim jungen Erwachsenen bei etwa 1 % pro Jahr und sinkt mit dem Alter auf unter 0,5 % (Bergmann et al. 2009). Wachstum nach der Kindheit erfolgt über **Hypertrophie**, untergegangenes Myokard wird durch Narbe ersetzt."
        ],
        merke: [
          "Glanzstreifen koppeln mechanisch (Fascia adhaerens, Desmosomen) und elektrisch (Gap Junctions) → funktionelles Synzytium.",
          "Dyade = L-Typ-Ca²⁺-Kanal (T-Tubulus) gegenüber RyR2 (SR) → Ort der elektromechanischen Kopplung.",
          "Titin = molekulare Feder: diastolische Steifigkeit und Längenabhängigkeit der Kraft.",
          "ATP-Reserve nur Sekunden, überwiegend Fettsäureoxidation → minimale Ischämietoleranz.",
          "Kaum Regeneration: Hypertrophie statt Zellteilung, Narbe statt Ersatz."
        ],
        warum: [
          { q: "Warum entsteht bei chronischer Drucklast eine dicke Wand, bei chronischer Volumenlast dagegen ein großer Ventrikel?", a: "Die Wandspannung (Laplace: σ = P × r / 2h) ist der Wachstumsreiz. Bei Drucklast (z.B. Aortenstenose, Hypertonie) werden Sarkomere parallel angelagert: Die Wand wird dicker (konzentrische Hypertrophie), h steigt und normalisiert die systolische Wandspannung. Bei Volumenlast (z.B. Aorteninsuffizienz) werden Sarkomere seriell angefügt: Die Myozyten werden länger, der Ventrikel dilatiert (exzentrische Hypertrophie), um ein größeres Schlagvolumen auszuwerfen." },
          { q: "Warum verliert ischämisches Myokard innerhalb von etwa einer Minute seine Kontraktionskraft, obwohl die Zellen noch leben?", a: "Weil kaum ATP- und Kreatinphosphat-Reserven bestehen und die O₂-Extraktion schon in Ruhe maximal ist. Anorganisches Phosphat und H⁺ häufen sich an und senken die Ca²⁺-Empfindlichkeit der Myofilamente. Das Abschalten der Kontraktion spart Energie und verzögert den Zelltod. Irreversible Nekrosen beginnen erst nach etwa 20–40 Minuten im Subendokard (Wavefront-Phänomen)." }
        ],
        klinik: [
          "Ischämie: Nach ca. 20–40 min kompletter Ischämie beginnt die Nekrose subendokardial und schreitet über Stunden Richtung Epikard fort (Reimer & Jennings 1977). Deshalb ist eine schnelle Reperfusion entscheidend.",
          "Hypertrophes Myokard (z.B. bei Aortenstenose) hat höheren O₂-Bedarf und eine schlechtere subendokardiale Perfusion: Es ist besonders empfindlich für Hypotonie und Tachykardie.",
          "Arrhythmogene Kardiomyopathie (Desmosomen) und TTN-assoziierte DCM: erhöhtes Risiko für Rhythmusstörungen und Herzinsuffizienz perioperativ."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Welche drei Verbindungstypen bilden den Glanzstreifen und welche Funktion hat jeder?", a: "Fascia adhaerens (Verankerung der Aktinfilamente, Kraftübertragung), Desmosomen (mechanischer Zusammenhalt) und Gap Junctions aus Connexin 43 (elektrische Kopplung → funktionelles Synzytium)." },
          { q: "Spezialwissen Herz: Was ist eine Dyade im Kardiomyozyten?", a: "Die funktionelle Einheit aus L-Typ-Ca²⁺-Kanälen (Cav1.2) im T-Tubulus und den gegenüberliegenden Ryanodin-Rezeptoren (RyR2) des junktionalen SR – Ort der elektromechanischen Kopplung (Ca²⁺-induzierte Ca²⁺-Freisetzung)." },
          { q: "Spezialwissen Herz: Welche Funktionen hat Titin im Myokard?", a: "Molekulare Feder von der Z-Scheibe bis zur M-Linie: Hauptdeterminante der passiven diastolischen Steifigkeit, Zentrierung des Myosins und Beteiligung an der längenabhängigen Aktivierung (Frank-Starling)." },
          { q: "Spezialwissen Herz: Aus welchen Substraten gewinnt das gesunde adulte Herz überwiegend sein ATP, und wie lange reicht der ATP-Vorrat?", a: "Überwiegend aus Fettsäureoxidation (ca. 60–90 %), daneben Glukose, Laktat und Ketonkörper. Der ATP-Vorrat reicht nur für wenige Sekunden Kontraktion, Kreatinphosphat puffert kurzfristig." },
          { q: "Spezialwissen Herz: Wie unterscheiden sich konzentrische und exzentrische Hypertrophie in Auslöser und Sarkomeranordnung?", a: "Konzentrisch: chronische Drucklast, Sarkomere werden parallel angelagert → Wandverdickung normalisiert die Wandspannung. Exzentrisch: chronische Volumenlast, Sarkomere werden seriell angefügt → Dilatation mit größerem Schlagvolumen." },
          { q: "Spezialwissen Herz: Nach welcher Ischämiedauer beginnt die irreversible Myokardnekrose und wie breitet sie sich aus?", a: "Nach etwa 20–40 min kompletter Ischämie, beginnend im Subendokard und als 'Wavefront' über Stunden Richtung Epikard fortschreitend (Reimer & Jennings 1977)." }
        ]
      },
      {
        id: "elektro",
        level: "Zelle",
        title: "Elektrophysiologie – Aktionspotenzial, Schrittmacher und Erregungsleitung",
        leitfrage: "Warum hat das Arbeitsmyokard ein stabiles Ruhepotenzial und ein langes Plateau, der Sinusknoten dagegen eine spontane Depolarisation?",
        figure: { svg: FIG_AP, caption: "Schematisches Aktionspotenzial des Arbeitsmyokards (oben) und des Sinusknotens (unten) mit den tragenden Ionenströmen." },
        body: [
          { h: "Ionengradienten und Ruhepotenzial" },
          "Intrazellulär ist K⁺ hoch (ca. 140 mmol/l) und Na⁺ niedrig (ca. 10–15 mmol/l), extrazellulär umgekehrt (K⁺ ca. 4–5, Na⁺ ca. 140 mmol/l). Freies zytosolisches Ca²⁺ liegt in der Diastole bei nur ca. 0,1 µmol/l, extrazellulär ionisiert bei ca. 1,2 mmol/l. Die elektrogene **Na⁺/K⁺-ATPase** (3 Na⁺ hinaus, 2 K⁺ hinein) hält diese Gradienten aufrecht.",
          "Das Ruhepotenzial des Arbeitsmyokards (ca. **−85 bis −90 mV**) liegt nahe am K⁺-Gleichgewichtspotenzial (Nernst: −61,5 mV × log(140/4,5) ≈ −92 mV). Es wird vom einwärtsgleichrichtenden K⁺-Strom **IK1** (Kir2.x) getragen. Deshalb bestimmt das **extrazelluläre K⁺** das Ruhepotenzial maßgeblich.",
          { h: "Aktionspotenzial des Arbeitsmyokards" },
          { table: { head: ["Phase", "Vorgang", "Hauptstrom (Kanal/Gen)", "Klinische Bezüge"], rows: [
            ["0", "Schneller Aufstrich", "INa (Nav1.5, SCN5A)", "Klasse-I-Antiarrhythmika, Lokalanästhetika-Kardiotoxizität; Brugada (Funktionsverlust), LQT3 (Funktionsgewinn)"],
            ["1", "Frühe Repolarisation", "Ito (Kv4.2/4.3)", "Ausgeprägt im Epikard (Notch), Rolle beim Brugada-Syndrom"],
            ["2", "Plateau", "ICa,L (Cav1.2) einwärts ↔ IKs, IKr auswärts", "Trigger der Kontraktion; Ca²⁺-Antagonisten"],
            ["3", "Repolarisation", "IKr (hERG, KCNH2), IKs (KCNQ1), IK1", "Medikamentös verlängertes QT fast immer über hERG-Blockade; LQT1 (KCNQ1), LQT2 (KCNH2)"],
            ["4", "Ruhepotenzial", "IK1 (Kir2.x)", "Hyper-/Hypokaliämie verändern es direkt"]
          ] } },
          "Das ventrikuläre AP dauert etwa **200–300 ms**. Durch das Plateau ist die Zelle fast während der ganzen Kontraktion **absolut refraktär**: Na⁺-Kanäle sind inaktiviert und erholen sich erst bei Repolarisation unter ca. −60 bis −50 mV. Deshalb kann das Herz **nicht tetanisch kontrahieren** und muss zwischen den Schlägen relaxieren und sich füllen.",
          { h: "Schrittmacherzellen (Sinus- und AV-Knoten)" },
          "Schrittmacherzellen haben **kein stabiles Ruhepotenzial**. Nach Repolarisation (maximales diastolisches Potenzial ca. −60 mV) depolarisieren sie spontan (Phase 4). Daran sind zwei gekoppelte 'Uhren' beteiligt (DiFrancesco 2010; Lakatta et al. 2010):",
          { ul: [
            "**Membranuhr:** Der 'funny current' **If** über HCN4-Kanäle, aktiviert durch Hyperpolarisation und direkt durch cAMP verstärkt, dazu T-Typ-Ca²⁺-Ströme und abnehmende K⁺-Leitfähigkeit.",
            "**Ca²⁺-Uhr:** Spontane lokale Ca²⁺-Freisetzungen aus dem SR erzeugen über den Na⁺/Ca²⁺-Austauscher (NCX) einen depolarisierenden Einwärtsstrom gegen Ende der Diastole."
          ] },
          "Bei ca. −40 mV wird die Schwelle erreicht. Die Phase 0 wird hier von **L-Typ-Ca²⁺-Kanälen** getragen (nicht von Na⁺-Kanälen) und ist deshalb langsam. Die **intrinsische Frequenz** des denervierten Sinusknotens liegt beim jungen Erwachsenen bei ca. 100–110/min und sinkt mit dem Alter (ca. 118 − 0,57 × Alter; Jose & Collison 1970). Die niedrigere Ruhefrequenz zeigt den überwiegenden Vagotonus in Ruhe. Untergeordnete Zentren: AV-Junktion ca. 40–60/min, Purkinje-Fasern/ventrikulär ca. 20–40/min.",
          { h: "Erregungsleitung" },
          { ul: [
            "Sinusknoten → Vorhofmyokard → **AV-Knoten**: Leitung sehr langsam (ca. 0,05 m/s) durch Ca²⁺-abhängige Aktionspotenziale und wenige Gap Junctions. Die AV-Verzögerung (Hauptanteil der PQ-Zeit) ermöglicht die Vorhofkontraktion vor der Ventrikelsystole. Die 'dekrementale' Leitung schützt die Ventrikel bei Vorhofflimmern vor zu hohen Frequenzen.",
            "**His-Bündel → Tawara-Schenkel → Purkinje-Fasern**: sehr schnell (ca. 2–4 m/s) → fast synchrone Aktivierung beider Ventrikel (schmaler QRS-Komplex).",
            "Ventrikuläres Arbeitsmyokard: ca. 0,3–1 m/s, Erregung von endokardial nach epikardial. Die Repolarisation verläuft umgekehrt (epikardiale APs sind kürzer) – deshalb ist die T-Welle normalerweise gleichsinnig zum QRS-Komplex."
          ] },
          { h: "Autonome Modulation" },
          "**Sympathikus (β1 → Gs → cAMP ↑):** If wird verstärkt, ICa,L erhöht → Frequenz ↑ (positiv chronotrop), AV-Leitung schneller (dromotrop), Kontraktion stärker (inotrop), Relaxation schneller (lusitrop). **Vagus (M2 → Gi):** cAMP ↓ und Öffnung von **IK,ACh** (GIRK-Kanäle) → Hyperpolarisation, langsamere Phase 4 und verzögerte AV-Leitung. **Adenosin** öffnet über A1-Rezeptoren dieselben GIRK-Kanäle – daher der kurze AV-Block nach Bolusgabe.",
          { h: "Elektrolyte und Membranpotenzial" },
          { ul: [
            "**Hyperkaliämie:** Das Ruhepotenzial wird weniger negativ → ein Teil der Na⁺-Kanäle bleibt inaktiviert → langsamerer Aufstrich, breiter QRS, Leitungsblöcke bis Asystolie/Kammerflimmern. Gleichzeitig steigt die IKr-Leitfähigkeit → schnellere Repolarisation → hohe, spitze T-Wellen.",
            "**Hypokaliämie:** Die IKr- und IK1-Leitfähigkeit sinken → verzögerte Repolarisation (U-Welle, scheinbar langes QT), Neigung zu Extrasystolen und Torsade de pointes; die Digitalis-Toxizität steigt.",
            "**Kalzium:** Hypokalzämie verlängert das QT (längeres ST-Segment), Hyperkalzämie verkürzt es."
          ] }
        ],
        merke: [
          "Ruhepotenzial ≈ K⁺-Gleichgewichtspotenzial (IK1) → extrazelluläres K⁺ bestimmt die Erregbarkeit.",
          "Phase 0 Arbeitsmyokard = Na⁺ (schnell), Phase 0 Sinus-/AV-Knoten = Ca²⁺ (langsam).",
          "Langes Plateau → lange Refraktärzeit → kein Tetanus.",
          "Phase 4 des Sinusknotens = If (HCN4, cAMP-sensitiv) + Ca²⁺-Uhr (NCX).",
          "Medikamentöse QT-Verlängerung = fast immer hERG-(IKr-)Blockade."
        ],
        warum: [
          { q: "Warum schützt Calcium i.v. bei Hyperkaliämie das Herz, obwohl es das Kalium nicht senkt?", a: "Hyperkaliämie hebt das Ruhepotenzial an und verkleinert den Abstand zum Schwellenpotenzial; teilweise inaktivierte Na⁺-Kanäle verlangsamen die Leitung. Erhöhtes extrazelluläres Ca²⁺ verschiebt das Schwellenpotenzial zu positiveren Werten (Stabilisierung der Membran durch Beeinflussung des Spannungssensors) und stellt den Abstand zwischen Ruhe- und Schwellenpotenzial wieder her. Die Wirkung setzt innerhalb von Minuten ein und hält nur ca. 30–60 min an, deshalb muss das K⁺ zusätzlich nach intrazellulär verschoben (Insulin/Glukose, β2-Agonisten) und eliminiert werden." },
          { q: "Warum bremst Adenosin die AV-Überleitung so stark, das Arbeitsmyokard aber kaum?", a: "AV-Knotenzellen haben Ca²⁺-getragene, langsame Aktionspotenziale und ein wenig negatives Membranpotenzial. Die über A1-Rezeptoren geöffneten GIRK-Kanäle hyperpolarisieren sie, und der cAMP-Abfall senkt den L-Typ-Ca²⁺-Strom – beides blockiert die Leitung vorübergehend. Das ventrikuläre Arbeitsmyokard hat einen schnellen Na⁺-Aufstrich, der davon kaum beeinflusst wird." }
        ],
        klinik: [
          "QT-verlängernde Pharmaka in der Anästhesie (z.B. Ondansetron, Droperidol, Haloperidol, Methadon, Makrolide) bei angeborenem Long-QT-Syndrom vermeiden bzw. kombinieren nur unter EKG-Monitoring; Magnesium und Defibrillator bereithalten, Sympathikusspitzen vermeiden.",
          "Natriumkanalblocker (z.B. Klasse-I-Antiarrhythmika, Lokalanästhetika in toxischer Dosis) können ein Brugada-Muster demaskieren; Arzneimittelliste unter brugadadrugs.org prüfen.",
          "Hyperkaliämie (z.B. Succinylcholin bei Denervierung, Massivtransfusion, Reperfusion): sofort Calcium, dann K⁺-Shift und -Elimination."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Welcher Ionenstrom bestimmt das Ruhepotenzial des Arbeitsmyokards, und wie hoch ist es?", a: "Der einwärtsgleichrichtende K⁺-Strom IK1 (Kir2.x); das Ruhepotenzial liegt bei ca. −85 bis −90 mV, nahe dem K⁺-Gleichgewichtspotenzial." },
          { q: "Spezialwissen Herz: Welche Ströme tragen die Phasen 0 bis 4 des ventrikulären Aktionspotenzials?", a: "0: INa (Nav1.5); 1: Ito (transienter K⁺-Ausstrom); 2: Plateau aus ICa,L-Einstrom und K⁺-Ausstrom (IKs/IKr); 3: Repolarisation über IKr, IKs, IK1; 4: Ruhepotenzial durch IK1." },
          { q: "Spezialwissen Herz: Warum kann das Herz nicht tetanisch kontrahieren?", a: "Das lange Plateau hält die Na⁺-Kanäle fast während der ganzen Kontraktion inaktiviert – die absolute Refraktärzeit reicht bis in die Relaxation; eine neue Erregung ist erst nach Repolarisation möglich." },
          { q: "Spezialwissen Herz: Welche Mechanismen erzeugen die spontane diastolische Depolarisation im Sinusknoten?", a: "Membranuhr: If (HCN4, durch cAMP verstärkt), T-Typ-Ca²⁺-Strom, abnehmende K⁺-Leitfähigkeit. Ca²⁺-Uhr: spontane SR-Ca²⁺-Freisetzungen erzeugen über den NCX einen Einwärtsstrom. Die Phase 0 wird vom L-Typ-Ca²⁺-Strom getragen." },
          { q: "Spezialwissen Herz: Warum ist die Leitung im AV-Knoten langsam und welchen Zweck hat das?", a: "Ca²⁺-getragene Aktionspotenziale und wenige Gap Junctions → ca. 0,05 m/s. Die Verzögerung erlaubt die Vorhofkontraktion vor der Ventrikelsystole und schützt die Ventrikel bei Vorhofflimmern vor hohen Frequenzen (dekrementale Leitung)." },
          { q: "Spezialwissen Herz: Wie entstehen QRS-Verbreiterung und spitze T-Wellen bei Hyperkaliämie?", a: "Das weniger negative Ruhepotenzial inaktiviert einen Teil der Na⁺-Kanäle → langsamer Aufstrich, breiter QRS. Die erhöhte IKr-Leitfähigkeit beschleunigt die Repolarisation → hohe, spitze T-Wellen." },
          { q: "Spezialwissen Herz: Wie hoch ist die intrinsische Herzfrequenz und was zeigt die niedrigere Ruhefrequenz?", a: "Beim jungen Erwachsenen ca. 100–110/min (ca. 118 − 0,57 × Alter, Jose & Collison). Die niedrigere Ruhefrequenz zeigt, dass in Ruhe der Vagotonus überwiegt." }
        ]
      },
      {
        id: "ekk",
        level: "Zelle",
        title: "Elektromechanische Kopplung, Kontraktion und Relaxation",
        leitfrage: "Wie wird aus einem elektrischen Signal Kraft – und warum ist die Relaxation ein aktiver, energieverbrauchender Vorgang?",
        body: [
          { h: "Ca²⁺-induzierte Ca²⁺-Freisetzung (CICR)" },
          "Während des Plateaus strömt über L-Typ-Kanäle eine kleine Menge Ca²⁺ ein. Dieses 'Trigger-Ca²⁺' öffnet die gegenüberliegenden **RyR2** und setzt eine viel größere Menge Ca²⁺ aus dem SR frei. Das zytosolische Ca²⁺ steigt von ca. 0,1 auf etwa 1 µmol/l (Bers 2002). Im Gegensatz zum Skelettmuskel (mechanische Kopplung DHPR–RyR1) ist das Herz also auf **extrazellulären Ca²⁺-Einstrom** angewiesen.",
          { h: "Querbrückenzyklus" },
          "Ca²⁺ bindet an **Troponin C**. Troponin I gibt daraufhin die Hemmung frei, und Tropomyosin gleitet aus der Myosin-Bindungsstelle am Aktin. Myosinköpfe binden, setzen Phosphat frei und führen den **Kraftschlag** aus. ATP-Bindung löst den Kopf vom Aktin, die ATP-Hydrolyse spannt ihn erneut. Da das Herz keine motorischen Einheiten rekrutieren kann, wird die Kraft über die **Menge an freigesetztem Ca²⁺** und die **Ca²⁺-Empfindlichkeit der Myofilamente** abgestuft.",
          { h: "Relaxation: Ca²⁺-Entfernung" },
          { table: { head: ["Transportweg", "Anteil (menschlicher Ventrikel, ca.)", "Regulation"], rows: [
            ["SERCA2a (Rücktransport ins SR)", "70 %", "Gehemmt durch Phospholamban; PKA-Phosphorylierung von Phospholamban hebt die Hemmung auf"],
            ["Na⁺/Ca²⁺-Austauscher (NCX, 3 Na⁺ : 1 Ca²⁺)", "28 %", "Abhängig vom Na⁺-Gradienten (→ Digoxin)"],
            ["Sarkolemmale Ca²⁺-ATPase, Mitochondrien", "ca. 2 %", "Gering"]
          ] } },
          "Werte nach Bers (2002); bei der Ratte transportiert SERCA über 90 %. Im Gleichgewicht muss pro Schlag genau so viel Ca²⁺ über NCX hinaus, wie über L-Typ-Kanäle hereinkam. Die Relaxation ist **aktiv**: SERCA braucht ATP, und das Ablösen der Querbrücken ebenfalls. In der Ischämie ist deshalb die **Relaxation früher gestört als die Kontraktion** (Ischämiekaskade: Perfusionsstörung → diastolische, dann systolische Dysfunktion → EKG-Veränderungen → Angina; Nesto & Kowalchuk 1987).",
          { h: "β-adrenerge Regulation" },
          "Über β1 → Gs → cAMP → Proteinkinase A werden phosphoryliert: L-Typ-Kanäle (mehr Trigger-Ca²⁺), RyR2, **Phospholamban** (SERCA schneller → schnellere Relaxation und mehr SR-Ca²⁺ für den nächsten Schlag), **Troponin I** (geringere Ca²⁺-Empfindlichkeit → schnelleres Ablösen) und Myosin-bindendes Protein C. Ergebnis: **stärkere UND schnellere** Kontraktion und Relaxation – entscheidend, weil bei Tachykardie die Diastole schrumpft.",
          { h: "Kraft-Frequenz-Beziehung" },
          "Im gesunden Herzen steigt die Kontraktionskraft mit der Frequenz (**Bowditch-Treppe**), weil mehr Ca²⁺ pro Zeit einströmt und im SR gespeichert wird. Im insuffizienten Herzen (verminderte SERCA-Aktivität) ist die Beziehung flach oder negativ: Tachykardie schwächt hier zusätzlich.",
          { h: "Pharmakologische Angriffspunkte" },
          { ul: [
            "**Katecholamine (β1), PDE-3-Hemmer (Milrinon):** cAMP ↑ → inotrop und lusitrop; Milrinon zusätzlich vasodilatierend ('Inodilatator').",
            "**Levosimendan:** Ca²⁺-Sensitizer (bindet Ca²⁺-abhängig an Troponin C, daher keine Relaxationsstörung) und Öffner von K-ATP-Kanälen (Vasodilatation); aktiver Metabolit mit sehr langer Halbwertszeit.",
            "**Digoxin:** Hemmung der Na⁺/K⁺-ATPase → intrazelluläres Na⁺ ↑ → weniger Ca²⁺-Export über NCX → mehr SR-Ca²⁺.",
            "**Volatile Anästhetika:** dosisabhängig negativ inotrop (verminderter Ca²⁺-Einstrom und SR-Freisetzung, geringere Myofilament-Empfindlichkeit); Propofol in geringerem Maß.",
            "**Dantrolen** hemmt RyR1 (Skelettmuskel) und hat am kardialen RyR2 kaum Wirkung – kein relevanter negativ inotroper Effekt."
          ] }
        ],
        merke: [
          "Kleiner Ca²⁺-Einstrom (L-Typ) → große SR-Freisetzung (RyR2) = CICR.",
          "Kraft wird über Ca²⁺-Menge und Ca²⁺-Empfindlichkeit abgestuft, nicht über Rekrutierung.",
          "Relaxation ist aktiv: SERCA2a (ca. 70 %) und NCX (ca. 28 %) brauchen Energie bzw. Gradienten.",
          "PKA phosphoryliert L-Typ-Kanal, RyR2, Phospholamban, Troponin I → mehr Kraft und schnellere Relaxation.",
          "Ischämie stört zuerst die Relaxation (diastolische Dysfunktion), dann die Kontraktion."
        ],
        warum: [
          { q: "Warum macht ein Ca²⁺-Sensitizer wie Levosimendan keine Relaxationsstörung, obwohl er die Kraft bei gleichem Ca²⁺ erhöht?", a: "Levosimendan stabilisiert die Ca²⁺-gebundene Konformation von Troponin C nur, solange Ca²⁺ gebunden ist. Fällt das zytosolische Ca²⁺ in der Diastole, verliert sich der Effekt. Die Kraft steigt also systolisch, die diastolische Relaxation bleibt erhalten – und weil kein cAMP-Anstieg nötig ist, steigt der O₂-Verbrauch weniger als unter Katecholaminen." },
          { q: "Warum ist die Kraft-Frequenz-Beziehung bei Herzinsuffizienz relevant für die Narkoseführung?", a: "Im gesunden Herzen steigert eine höhere Frequenz die Kraft (Bowditch). Im insuffizienten Herzen mit verminderter SERCA-Funktion bleibt das aus oder kehrt sich um. Gleichzeitig verkürzt Tachykardie die Diastole und damit Füllung und Koronarperfusion. Tachykardien sind daher bei Herzinsuffizienz doppelt ungünstig." }
        ],
        klinik: [
          "Diastolische Dysfunktion (HFpEF, Hypertrophie, Alter): Relaxation verzögert, Füllung abhängig von ausreichender Diastolendauer und Vorhofkontraktion → Tachykardie und Vorhofflimmern schlecht toleriert.",
          "Calcium i.v. steigert die Kontraktilität nur kurz und vor allem bei Hypokalzämie (z.B. nach Massivtransfusion, Citrat) relevant.",
          "Volatile Anästhetika und Propofol: negativ inotrop – bei eingeschränkter Pumpfunktion niedrig dosieren und titrieren."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Was versteht man unter Ca²⁺-induzierter Ca²⁺-Freisetzung?", a: "Der kleine Ca²⁺-Einstrom über L-Typ-Kanäle während des Plateaus öffnet die RyR2 des SR, die eine viel größere Ca²⁺-Menge freisetzen (zytosolisch von ca. 0,1 auf ca. 1 µmol/l)." },
          { q: "Spezialwissen Herz: Über welche Wege wird Ca²⁺ in der Diastole entfernt, und mit welchen Anteilen beim Menschen?", a: "SERCA2a ins SR ca. 70 %, Na⁺/Ca²⁺-Austauscher ca. 28 %, sarkolemmale Ca²⁺-ATPase und Mitochondrien ca. 2 % (Bers 2002)." },
          { q: "Spezialwissen Herz: Welche Rolle spielt Phospholamban?", a: "Es hemmt SERCA2a im dephosphorylierten Zustand. Die Phosphorylierung durch PKA (β-adrenerg) hebt die Hemmung auf → schnellere Relaxation und mehr SR-Ca²⁺ für die nächste Kontraktion." },
          { q: "Spezialwissen Herz: Welche Zielproteine phosphoryliert die PKA nach β1-Stimulation und mit welcher Folge?", a: "L-Typ-Ca²⁺-Kanäle, RyR2, Phospholamban, Troponin I und Myosin-bindendes Protein C → stärkere Kontraktion (inotrop) und schnellere Relaxation (lusitrop)." },
          { q: "Spezialwissen Herz: Warum ist in der Ischämie die Relaxation früher gestört als die Kontraktion?", a: "Weil die Relaxation aktiv ist: SERCA und das Lösen der Querbrücken verbrauchen ATP. Fällt ATP ab, bleibt Ca²⁺ länger im Zytosol und Querbrücken lösen sich langsamer – diastolische vor systolischer Dysfunktion (Ischämiekaskade)." },
          { q: "Spezialwissen Herz: Wie wirken Levosimendan und Digoxin auf die Kontraktilität?", a: "Levosimendan: Ca²⁺-abhängige Sensibilisierung von Troponin C (plus K-ATP-vermittelte Vasodilatation). Digoxin: Hemmung der Na⁺/K⁺-ATPase → weniger Ca²⁺-Export über NCX → mehr SR-Ca²⁺." }
        ]
      },
      {
        id: "zyklus",
        level: "Organ",
        title: "Herzzyklus und Druck-Volumen-Schleife",
        leitfrage: "Welche vier Phasen hat ein Herzschlag, und wie lassen sich Vorlast, Nachlast und Kontraktilität in einer einzigen Grafik ablesen?",
        figure: { svg: FIG_PV, caption: "Druck-Volumen-Schleife des linken Ventrikels mit endsystolischer (ESPVR) und enddiastolischer (EDPVR) Druck-Volumen-Beziehung und arterieller Elastance (Ea). Schematisch, Werte gerundet." },
        body: [
          { h: "Die vier Phasen" },
          { ul: [
            "**① Isovolumetrische Kontraktion:** Die Mitralklappe schließt (1. Herzton), alle Klappen sind zu. Der Druck steigt steil, bis er den aortalen diastolischen Druck (ca. 80 mmHg) übersteigt.",
            "**② Austreibung:** Die Aortenklappe öffnet; schnelle, dann langsame Austreibung. Der linksventrikuläre Druck erreicht ca. 120 mmHg.",
            "**③ Isovolumetrische Relaxation:** Die Aortenklappe schließt (2. Herzton, Inzisur der Aortendruckkurve). Der Druck fällt bei geschlossenen Klappen, bis er unter den Vorhofdruck sinkt.",
            "**④ Füllung:** Die Mitralklappe öffnet. Zuerst schnelle, überwiegend passive Füllung durch elastischen Rückstoß ('Saugwirkung', E-Welle), dann Diastase, zuletzt **Vorhofkontraktion** (A-Welle; beim Jungen ca. 15–20 % der Füllung, bei Steifigkeit und im Alter deutlich mehr)."
          ] },
          { h: "Typische Normalwerte (Erwachsener, Ruhe)" },
          { table: { head: ["Größe", "Wert (ca.)"], rows: [
            ["LV enddiastolisches Volumen (EDV)", "120 ml"],
            ["LV endsystolisches Volumen (ESV)", "50 ml"],
            ["Schlagvolumen (SV = EDV − ESV)", "70 ml"],
            ["Ejektionsfraktion (EF = SV/EDV)", "55–70 %"],
            ["LV-Druck systolisch / enddiastolisch", "120 / 6–12 mmHg"],
            ["RV-Druck systolisch / enddiastolisch", "15–30 / 0–8 mmHg"],
            ["Pulmonalarterie systolisch/diastolisch (mittel)", "15–30 / 4–12 (≤ 20) mmHg"],
            ["Rechter Vorhof (ZVD)", "2–6 mmHg"]
          ] } },
          { h: "Die Druck-Volumen-Schleife lesen" },
          "Die Schleife läuft gegen den Uhrzeigersinn: A (Enddiastole) → B (Aortenklappe öffnet) → C (Endsystole) → D (Mitralklappe öffnet) → A. Die **Breite** ist das Schlagvolumen, die **Fläche** die äußere Schlagarbeit.",
          { ul: [
            "**ESPVR** (endsystolische Druck-Volumen-Beziehung): Ihre Steigung, die endsystolische Elastance **Ees**, ist ein weitgehend lastunabhängiges Maß der **Kontraktilität** (Suga & Sagawa 1974).",
            "**EDPVR** (enddiastolische Druck-Volumen-Beziehung): nichtlinear (exponentiell), beschreibt die **passive Steifigkeit**. Ein steifer Ventrikel hat eine steile EDPVR: Kleine Volumenzunahmen erzeugen hohe Füllungsdrücke.",
            "**Arterielle Elastance Ea** ≈ endsystolischer Druck / Schlagvolumen: ein integriertes Maß der **Nachlast** (Widerstand, Compliance, Frequenz).",
            "**Ventrikulo-arterielle Kopplung Ea/Ees:** normal ca. 0,5–1. Bei ca. 0,5 ist der Wirkungsgrad maximal, bei ca. 1 die Schlagarbeit. Eine Entkopplung (z.B. hohe Ea bei niedriger Ees) senkt die Effizienz."
          ] },
          { h: "Was sich bei Laständerungen verschiebt" },
          { table: { head: ["Änderung", "Effekt auf die Schleife"], rows: [
            ["Vorlast ↑ (Volumen)", "Punkt A rückt entlang der EDPVR nach rechts → breitere Schleife, SV ↑ (Frank-Starling)"],
            ["Nachlast ↑", "Ea steiler → höherer Druck, ESV ↑, schmalere und höhere Schleife, SV ↓"],
            ["Kontraktilität ↑", "ESPVR steiler/nach links → ESV ↓, SV ↑"],
            ["Diastolische Dysfunktion", "EDPVR steiler → höherer enddiastolischer Druck bei gleichem Volumen"],
            ["Mitralinsuffizienz", "Keine echte isovolumetrische Kontraktion: Volumen fließt schon vor Aortenklappenöffnung in den Vorhof"]
          ] } },
          { h: "Energetik" },
          "Die **Druck-Volumen-Fläche (PVA)** = Schlagarbeit + potenzielle Energie (Fläche zwischen ESPVR, EDPVR und der linken Schleifenkante). Der myokardiale O₂-Verbrauch steigt **linear mit der PVA** (Suga). Druckarbeit ist deshalb energetisch teurer als Volumenarbeit: Bei gleicher Schlagarbeit verbraucht ein Ventrikel, der gegen hohen Druck auswirft, mehr O₂."
        ],
        merke: [
          "Vier Phasen: isovolumetrische Kontraktion → Austreibung → isovolumetrische Relaxation → Füllung (E-Welle, Diastase, A-Welle).",
          "Breite = SV, Fläche = Schlagarbeit; Ees = Kontraktilität, EDPVR = Steifigkeit, Ea = Nachlast.",
          "EF ist lastabhängig, Ees weitgehend lastunabhängig.",
          "O₂-Verbrauch ∝ Druck-Volumen-Fläche → Druckarbeit ist teurer als Volumenarbeit."
        ],
        warum: [
          { q: "Warum ist die Ejektionsfraktion kein reines Maß der Kontraktilität?", a: "Die EF hängt von Vor- und Nachlast ab. Bei Mitralinsuffizienz wirft der Ventrikel teilweise in den niedrigen Vorhofdruck aus: Die EF ist hoch, obwohl die Kontraktilität schon eingeschränkt sein kann. Bei akuter Nachlasterhöhung sinkt die EF ohne Änderung der Kontraktilität. Die Ees (Steigung der ESPVR) ist dagegen weitgehend lastunabhängig." },
          { q: "Warum verliert ein Patient mit steifem Ventrikel (HFpEF) bei Vorhofflimmern so viel Schlagvolumen?", a: "Bei steiler EDPVR ist die passive frühe Füllung eingeschränkt; die Vorhofkontraktion liefert einen großen Teil der Füllung. Fällt sie bei Vorhofflimmern weg und verkürzt die Tachyarrhythmie zusätzlich die Diastole, sinkt das EDV und damit nach Frank-Starling das Schlagvolumen deutlich, während Vorhof- und Lungenvenendruck steigen." }
        ],
        klinik: [
          "Aortenstenose: hohe Drucklast, steife hypertrophe Wand → Sinusrhythmus und ausreichende Vorlast erhalten, Tachykardie und Hypotonie vermeiden.",
          "Ein steiler EDPVR bedeutet: Volumengabe erhöht den Füllungsdruck stark (Lungenödem), ohne das SV wesentlich zu steigern – in kleinen Boli titrieren.",
          "TEE: E/A-Verhältnis und Gewebedoppler (E/e′) schätzen die diastolische Funktion und den Füllungsdruck ab."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: In welche vier Phasen gliedert sich der Herzzyklus und welche Klappenereignisse begrenzen sie?", a: "Isovolumetrische Kontraktion (Mitralklappe schließt bis Aortenklappe öffnet), Austreibung (bis Aortenklappe schließt), isovolumetrische Relaxation (bis Mitralklappe öffnet), Füllung (schnelle Füllung, Diastase, Vorhofkontraktion bis Mitralklappenschluss)." },
          { q: "Spezialwissen Herz: Was zeigen Breite und Fläche einer Druck-Volumen-Schleife?", a: "Die Breite ist das Schlagvolumen (EDV − ESV), die Fläche die äußere Schlagarbeit." },
          { q: "Spezialwissen Herz: Was beschreiben ESPVR, EDPVR und Ea?", a: "ESPVR: Steigung Ees = weitgehend lastunabhängige Kontraktilität. EDPVR: passive diastolische Steifigkeit. Ea ≈ endsystolischer Druck/SV: integrierte Nachlast." },
          { q: "Spezialwissen Herz: Wie verändert eine akute Nachlasterhöhung die Druck-Volumen-Schleife?", a: "Ea wird steiler: höherer Austreibungsdruck, größeres ESV, schmalere und höhere Schleife, Schlagvolumen sinkt." },
          { q: "Spezialwissen Herz: Wie hängt der myokardiale O₂-Verbrauch mit der Druck-Volumen-Schleife zusammen?", a: "Er steigt linear mit der Druck-Volumen-Fläche (PVA = Schlagarbeit + potenzielle Energie). Druckarbeit ist daher energetisch teurer als Volumenarbeit." },
          { q: "Spezialwissen Herz: Wie groß ist der Anteil der Vorhofkontraktion an der Ventrikelfüllung?", a: "Beim jungen Gesunden ca. 15–20 %, bei steifem Ventrikel und im Alter deutlich mehr – Verlust bei Vorhofflimmern daher besonders relevant." },
          { q: "Spezialwissen Herz: Welcher Wert der ventrikulo-arteriellen Kopplung Ea/Ees ist normal, und was bedeutet er?", a: "Ca. 0,5–1. Bei ca. 0,5 ist der mechanische Wirkungsgrad maximal, bei ca. 1 die Schlagarbeit; höhere Werte zeigen eine Entkopplung (z.B. hohe Nachlast bei schwacher Kontraktilität)." }
        ]
      },
      {
        id: "determinanten",
        level: "Organ",
        title: "Vorlast, Nachlast, Kontraktilität und Frequenz",
        leitfrage: "Welche vier Größen bestimmen das Schlagvolumen bzw. Herzzeitvolumen, und wie hängen sie molekular und physikalisch zusammen?",
        body: [
          { h: "Vorlast und Frank-Starling-Mechanismus" },
          "Die Vorlast ist die **enddiastolische Wandspannung** bzw. Sarkomerlänge. Klinisch wird sie am besten über das **enddiastolische Volumen** abgeschätzt. Füllungsdrücke (ZVD, PAWP) sind nur indirekte Maße: Sie hängen auch von Compliance, intrathorakalem Druck (PEEP) und Klappenfunktion ab.",
          "**Frank-Starling** (Patterson & Starling 1914): Je stärker die Füllung, desto größer das Schlagvolumen. Im physiologischen Bereich (Sarkomerlänge ca. 1,8–2,3 µm) beruht das überwiegend auf **längenabhängiger Aktivierung**: Bei Dehnung steigt die Ca²⁺-Empfindlichkeit der Myofilamente – durch engeren Filamentabstand und titinvermittelte Aktivierung des dicken Filaments. Die bloße Filamentüberlappung spielt eine untergeordnete Rolle. Titin und Extrazellulärmatrix verhindern, dass das gesunde Herz auf den absteigenden Teil der Kurve überdehnt wird.",
          "Das gesunde Herz arbeitet auf einer steilen Starling-Kurve. Das insuffiziente Herz hat eine flache Kurve: Zusätzliches Volumen erhöht vor allem den Füllungsdruck (Stauung), kaum das Schlagvolumen.",
          { h: "Nachlast und Laplace-Gesetz" },
          "Die Nachlast ist die **Wandspannung während der Austreibung**. Für eine Kugel gilt näherungsweise **σ = P × r / (2 × h)** (Druck × Radius / doppelte Wanddicke).",
          { ul: [
            "Ein dilatierter Ventrikel (r ↑) hat bei gleichem Druck eine höhere Wandspannung und damit einen höheren O₂-Verbrauch.",
            "Hypertrophie (h ↑) normalisiert die Wandspannung – auf Kosten von Steifigkeit und O₂-Versorgung.",
            "Der systemische Gefäßwiderstand (SVR) erfasst nur den resistiven Anteil der Nachlast. Compliance und Wellenreflexion (Impedanz) kommen hinzu; die arterielle Elastance Ea integriert diese Größen."
          ] },
          { h: "Kontraktilität (Inotropie)" },
          "Die Kontraktilität ist die lastunabhängige Leistungsfähigkeit des Myokards. Messgrößen: **Ees** (am besten), dP/dt max (vorlastabhängig), EF (lastabhängig). Sie wird gesteigert durch Sympathikus, Katecholamine, PDE-3-Hemmer, Levosimendan, Calcium bei Hypokalzämie und höhere Frequenz (Bowditch). Gesenkt wird sie durch Ischämie, Hypoxie, Azidose, Sepsis, Hypokalzämie, β-Blocker, Ca²⁺-Antagonisten, volatile Anästhetika und Propofol.",
          { h: "Herzfrequenz" },
          "HZV = HF × SV. Mit steigender Frequenz verkürzt sich vor allem die **Diastole** (die Systolendauer bleibt relativ konstant). Folgen: weniger Füllungszeit (besonders kritisch bei steifem Ventrikel und Mitralstenose) und weniger Zeit für die linksventrikuläre Koronarperfusion. Bradykardie kann bei fixem Schlagvolumen (z.B. Säuglinge, restriktive Physiologie) das HZV limitieren.",
          { h: "Diastolische Funktion" },
          "Zwei Komponenten: **aktive Relaxation** (energieabhängig, Zeitkonstante τ; verzögert bei Ischämie, Hypertrophie, Alter) und **passive Steifigkeit** (Titin, Kollagen, Wanddicke; EDPVR). Bei diastolischer Dysfunktion (HFpEF) sind die Füllungsdrücke erhöht. Die Patienten reagieren empfindlich auf Tachykardie, Verlust des Sinusrhythmus, Hypovolämie (SV fällt) und Volumenüberladung (Lungenödem).",
          { h: "Ventrikuläre Interdependenz" },
          "Beide Ventrikel teilen Septum und Perikard. Eine akute RV-Dilatation verschiebt das Septum nach links ('D-förmiger' LV) und behindert die LV-Füllung. Beim Perikarderguss mit Tamponade verstärkt sich das atemabhängig (Pulsus paradoxus: inspiratorischer systolischer Druckabfall > 10 mmHg)."
        ],
        merke: [
          "SV-Determinanten: Vorlast, Nachlast, Kontraktilität; HZV zusätzlich Frequenz.",
          "Frank-Starling = vor allem längenabhängige Ca²⁺-Sensibilisierung, nicht bloß Filamentüberlappung.",
          "Laplace: σ = P × r / 2h – Dilatation erhöht, Hypertrophie senkt die Wandspannung.",
          "Tachykardie verkürzt v.a. die Diastole → Füllung und LV-Koronarperfusion ↓.",
          "Füllungsdrücke ≠ Füllungsvolumen (Compliance, PEEP, Klappen)."
        ],
        warum: [
          { q: "Warum kann ein hoher ZVD bei einem Patienten mit Hypovolämie trotzdem vorkommen?", a: "Der ZVD ist ein Druck, kein Volumen: Er steigt bei verminderter Compliance (RV-Insuffizienz, Tamponade), erhöhtem intrathorakalem Druck (PEEP, Pneumothorax, Abdominalhypertension) oder Trikuspidalinsuffizienz – auch wenn das zirkulierende bzw. enddiastolische Volumen niedrig ist." },
          { q: "Warum steigt der O₂-Verbrauch eines dilatierten Ventrikels, auch wenn Blutdruck und Frequenz gleich bleiben?", a: "Nach Laplace ist die Wandspannung proportional zum Radius. Bei gleichem Druck muss die Wand eines größeren Ventrikels mehr Spannung entwickeln, und die Wandspannung ist eine Hauptdeterminante des myokardialen O₂-Verbrauchs." }
        ],
        klinik: [
          "Narkoseeinleitung bei eingeschränkter LV-Funktion: Nachlast nicht abrupt erhöhen (Laryngoskopie-Hypertonie), Kontraktilität nicht stark senken, Vorlast erhalten.",
          "Bei Mitralstenose und Aortenstenose: Frequenz niedrig-normal halten (lange Diastole), Sinusrhythmus schützen.",
          "Bei Aorten- oder Mitralinsuffizienz: eher höhere Frequenz und niedrige Nachlast, um Regurgitation zu vermindern."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Welche molekularen Mechanismen erklären den Frank-Starling-Mechanismus im physiologischen Bereich?", a: "Vor allem die längenabhängige Aktivierung: höhere Ca²⁺-Empfindlichkeit der Myofilamente bei Dehnung (engerer Filamentabstand, titinvermittelte Aktivierung des dicken Filaments); die Filamentüberlappung spielt eine untergeordnete Rolle." },
          { q: "Spezialwissen Herz: Wie lautet das Laplace-Gesetz für die Ventrikelwand und welche Konsequenzen hat es?", a: "Wandspannung σ = P × r / (2h). Dilatation (r ↑) erhöht Wandspannung und O₂-Verbrauch, Hypertrophie (h ↑) senkt die Wandspannung kompensatorisch." },
          { q: "Spezialwissen Herz: Warum ist der SVR kein vollständiges Maß der Nachlast?", a: "Er erfasst nur den resistiven Anteil. Die Nachlast umfasst zusätzlich arterielle Compliance, Wellenreflexion (Impedanz), Ventrikelgröße und -geometrie (Laplace); Ea integriert diese Größen besser." },
          { q: "Spezialwissen Herz: Welche zwei Komponenten hat die diastolische Funktion?", a: "Aktive, energieabhängige Relaxation (Zeitkonstante τ) und passive Steifigkeit (Titin, Kollagen, Wanddicke; EDPVR)." },
          { q: "Spezialwissen Herz: Wie wirkt sich Tachykardie auf Füllung und Koronarperfusion aus?", a: "Die Diastole verkürzt sich überproportional → weniger Füllungszeit (besonders bei steifem Ventrikel und Mitralstenose) und weniger Zeit für die diastolische LV-Koronarperfusion." },
          { q: "Spezialwissen Herz: Was versteht man unter ventrikulärer Interdependenz?", a: "Beide Ventrikel teilen Septum und Perikard: Eine RV-Dilatation verschiebt das Septum nach links und behindert die LV-Füllung; bei Tamponade wird das atemabhängig verstärkt (Pulsus paradoxus)." }
        ]
      },
      {
        id: "hzv",
        level: "System",
        title: "Herzzeitvolumen, venöser Rückstrom und Volumenreagibilität",
        leitfrage: "Warum kann das Herz nicht mehr auswerfen, als zu ihm zurückfließt – und was treibt eigentlich den venösen Rückstrom an?",
        body: [
          { h: "Guyton-Modell" },
          "Im Gleichgewicht sind Herzzeitvolumen und venöser Rückstrom gleich. Das HZV ergibt sich als **Schnittpunkt zweier Kurven** (Guyton 1955): der Herzfunktionskurve (Frank-Starling: HZV steigt mit dem rechtsatrialen Druck) und der venösen Rückstromkurve (Rückstrom sinkt mit steigendem rechtsatrialem Druck).",
          "**Venöser Rückstrom = (mittlerer systemischer Füllungsdruck − rechtsatrialer Druck) / Widerstand des venösen Rückstroms.**",
          "Der **mittlere systemische Füllungsdruck (Pmsf)** ist der Druck, der im Gefäßsystem bei Herzstillstand überall herrschen würde. Er liegt nur wenige mmHg über dem rechtsatrialen Druck – der treibende Gradient ist also klein, und schon geringe Änderungen von Pmsf oder RAP verändern den Rückstrom deutlich.",
          { h: "Stressed und unstressed volume" },
          "Rund 70 % des Blutvolumens befinden sich in den Venen. Der größte Teil ist **'unstressed volume'**: Er füllt die Gefäße, ohne Druck aufzubauen. Nur das **'stressed volume'** (ca. 25–30 % des Blutvolumens) dehnt die Gefäßwände und erzeugt den Pmsf. Sympathische Venokonstriktion – v.a. im **Splanchnikusgebiet**, dem größten Blutreservoir – verschiebt unstressed in stressed volume ('Autotransfusion') und erhöht den Pmsf ohne Volumengabe.",
          { h: "Was den Rückstrom verändert" },
          { table: { head: ["Faktor", "Mechanismus", "Folge"], rows: [
            ["Anästhetika, Sympathikolyse, Neuraxialblockade", "Venodilatation → stressed volume ↓ → Pmsf ↓", "Rückstrom und HZV ↓ (Haupterklärung der Einleitungshypotonie, zusammen mit arterieller Vasodilatation)"],
            ["Blutung, Dehydratation", "Gesamtvolumen ↓ → Pmsf ↓", "Kompensation über Venokonstriktion, bis Reserven erschöpft"],
            ["Noradrenalin", "Venokonstriktion → Pmsf ↑ (Persichini et al. 2012)", "Rückstrom ↑ bei vorlastabhängigen Patienten"],
            ["Überdruckbeatmung, PEEP", "RAP ↑ → Gradient ↓", "Rückstrom ↓, besonders bei Hypovolämie"],
            ["Spontane Inspiration", "Intrathorakaler Druck ↓ → RAP ↓", "Rückstrom zum rechten Herzen ↑"],
            ["Volumengabe", "Stressed volume ↑ → Pmsf ↑", "HZV ↑ nur, wenn beide Ventrikel auf dem steilen Teil der Starling-Kurve arbeiten"]
          ] } },
          { h: "Volumenreagibilität" },
          "Volumenreagibel ist, wer auf einen Volumenbolus mit einem Anstieg von SV bzw. HZV um mindestens ca. 10–15 % reagiert. Nur etwa die Hälfte instabiler Intensivpatienten ist volumenreagibel. **Statische Drücke** (ZVD, PAWP) sagen das schlecht vorher.",
          { ul: [
            "**Pulsdruckvariation (PPV) / Schlagvolumenvariation:** PPV über ca. 12–13 % spricht für Volumenreagibilität, mit einer Grauzone von ca. 9–13 % (Cannesson et al. 2011). Voraussetzungen: kontrollierte Beatmung ohne Spontanatmung, Tidalvolumen ≥ 8 ml/kg, Sinusrhythmus, geschlossener Thorax, keine Rechtsherzinsuffizienz, Verhältnis HF/AF > 3,6.",
            "**Passive Leg Raising:** mobilisiert ca. 300 ml aus den Beinen und dem Splanchnikusgebiet. Ein HZV-Anstieg ≥ 10 % (gemessen, nicht am Blutdruck geschätzt) zeigt Volumenreagibilität an, unabhängig von Rhythmus und Beatmung (Monnet et al. 2016).",
            "**Mini-Fluid-Challenge** (z.B. 100–250 ml) mit SV-Messung."
          ] },
          { h: "Verbindung zur Sauerstoffversorgung" },
          "DO₂ = HZV × CaO₂. Nach dem Fick-Prinzip gilt VO₂ = HZV × (CaO₂ − CvO₂). Bei konstantem VO₂ zeigt eine fallende gemischtvenöse bzw. zentralvenöse Sättigung, dass das O₂-Angebot im Verhältnis zum Bedarf sinkt (z.B. niedriges HZV, Anämie, Hypoxämie) oder der Bedarf steigt."
        ],
        merke: [
          "HZV = Schnittpunkt von Herzfunktions- und venöser Rückstromkurve.",
          "Rückstrom = (Pmsf − RAP) / Widerstand; der Gradient ist nur wenige mmHg groß.",
          "Nur das stressed volume erzeugt Druck; Venokonstriktion (Splanchnikus) mobilisiert unstressed volume.",
          "Einleitungshypotonie = Venodilatation (Pmsf ↓) + arterielle Dilatation ± Kardiodepression.",
          "Volumenreagibilität dynamisch prüfen (PPV mit Voraussetzungen, PLR), nicht mit dem ZVD."
        ],
        warum: [
          { q: "Warum kann Noradrenalin bei septischer Hypotonie das HZV steigern, obwohl es die Nachlast erhöht?", a: "Neben der arteriellen Konstriktion verengt Noradrenalin die Kapazitätsvenen und verschiebt unstressed in stressed volume. Dadurch steigt der mittlere systemische Füllungsdruck und mit ihm der venöse Rückstrom. Bei vorlastabhängigen Patienten überwiegt dieser Effekt den Nachlastanstieg." },
          { q: "Warum ist die Pulsdruckvariation bei Spontanatmung oder kleinem Tidalvolumen nicht verwertbar?", a: "Die PPV entsteht durch zyklische Änderungen von Vor- und Nachlast durch definierte Überdruckhübe. Bei Spontanatmung sind Druckschwankungen unregelmäßig und umgekehrt gerichtet. Bei kleinen Tidalvolumina sind die Schwankungen zu gering, um selbst bei Volumenreagibilität eine messbare Variation zu erzeugen – es entstehen falsch-negative Werte." }
        ],
        klinik: [
          "Einleitungshypotonie: Vasopressor (z.B. Noradrenalin, Akrinor, Phenylephrin) behandelt Venodilatation und Vasoplegie oft zielgerichteter als großzügige Volumengabe.",
          "Hohe PEEP-Werte bei Hypovolämie können den Rückstrom und das HZV deutlich senken.",
          "Zielgerichtete Volumentherapie: Volumen nur bei nachgewiesener Reagibilität und Bedarf geben, Überladung vermeiden."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Wie lautet die Gleichung des venösen Rückstroms nach Guyton?", a: "Venöser Rückstrom = (mittlerer systemischer Füllungsdruck − rechtsatrialer Druck) / Widerstand des venösen Rückstroms." },
          { q: "Spezialwissen Herz: Was ist der Unterschied zwischen stressed und unstressed volume?", a: "Unstressed volume füllt die Gefäße ohne Druckaufbau (größter Teil des venösen Bluts). Stressed volume (ca. 25–30 % des Blutvolumens) dehnt die Gefäßwand und erzeugt den mittleren systemischen Füllungsdruck." },
          { q: "Spezialwissen Herz: Welche Mechanismen erklären die Hypotonie nach Narkoseeinleitung?", a: "Venodilatation (stressed volume und Pmsf ↓ → venöser Rückstrom ↓), arterielle Vasodilatation (SVR ↓), Sympathikolyse und dosisabhängige Kardiodepression." },
          { q: "Spezialwissen Herz: Welche Voraussetzungen muss die Pulsdruckvariation erfüllen, um Volumenreagibilität vorherzusagen?", a: "Kontrollierte Beatmung ohne Spontanatmung, Tidalvolumen ≥ 8 ml/kg, Sinusrhythmus, geschlossener Thorax, keine Rechtsherzinsuffizienz, Verhältnis HF/AF > 3,6. Grauzone ca. 9–13 %." },
          { q: "Spezialwissen Herz: Wie wird ein Passive-Leg-Raising-Test korrekt bewertet?", a: "Er mobilisiert ca. 300 ml; ein HZV- bzw. SV-Anstieg um ≥ 10 %, gemessen mit einem HZV-Verfahren (nicht am Blutdruck), zeigt Volumenreagibilität an – auch bei Arrhythmie und Spontanatmung." },
          { q: "Spezialwissen Herz: Wie wirken Überdruckbeatmung und PEEP auf den venösen Rückstrom?", a: "Sie erhöhen den intrathorakalen und rechtsatrialen Druck, verkleinern den Gradienten Pmsf − RAP und senken so den Rückstrom, besonders bei Hypovolämie." }
        ]
      },
      {
        id: "koronar",
        level: "Organ",
        title: "Koronarkreislauf und Myokardenergetik",
        leitfrage: "Warum kann das Myokard seinen steigenden O₂-Bedarf nur über mehr Durchblutung decken, und wann kommt diese an ihre Grenze?",
        body: [
          { h: "Zahlen" },
          { ul: [
            "Koronarfluss in Ruhe ca. 250 ml/min (ca. 5 % des HZV); maximale Steigerung beim Gesunden etwa um das 3- bis 5-Fache (**koronare Flussreserve**).",
            "Myokardialer O₂-Verbrauch in Ruhe ca. 8–10 ml/100 g/min – etwa 10 % des Ganzkörper-O₂-Verbrauchs bei weniger als 0,5 % der Körpermasse.",
            "O₂-Extraktion bereits in Ruhe ca. **70–75 %** (Sättigung im Sinus coronarius ca. 25–30 %) → Mehrbedarf muss fast vollständig über **mehr Fluss** gedeckt werden."
          ] },
          { h: "Determinanten des myokardialen O₂-Verbrauchs" },
          "Hauptdeterminanten sind **Wandspannung** (Druck, Radius, Wanddicke), **Herzfrequenz** und **Kontraktilität**. Basalstoffwechsel und Erregung machen nur einen kleineren Teil aus. Das **Frequenz-Druck-Produkt** (HF × systolischer Druck) ist ein einfacher klinischer Index. Die Frequenz ist doppelt ungünstig: Sie erhöht den Bedarf und verkürzt gleichzeitig die Diastole, also die Zeit für das Angebot.",
          { h: "Regulation des Koronarflusses" },
          { ul: [
            "**Autoregulation:** konstanter Fluss über einen Perfusionsdruckbereich von etwa 60–140 mmHg (Duncker & Bache 2008).",
            "**Metabolische Kopplung:** Adenosin, Öffnung von K-ATP-Kanälen, NO, H₂O₂, CO₂, H⁺ und K⁺ dilatieren die Arteriolen proportional zum Verbrauch. Adenosin ist beteiligt, aber nicht der alleinige Mediator.",
            "**Endothel:** NO, Prostazyklin, EDHF; bei endothelialer Dysfunktion (Atherosklerose, Diabetes) gestört.",
            "**Nerval:** α-adrenerg vasokonstriktorisch, β2 dilatierend. Unter Sympathikusaktivierung überwiegt meist die metabolische Dilatation."
          ] },
          { h: "Systolische Kompression und transmuraler Gradient" },
          "Während der Systole komprimiert der intramyokardiale Druck die Gefäße, v.a. subendokardial. Der **linke Ventrikel** wird daher überwiegend **in der Diastole** durchblutet. Der koronare Perfusionsdruck des LV ≈ **diastolischer Aortendruck − LVEDP**. Das Subendokard hat die höchste Wandspannung und den höchsten Bedarf und ist am stärksten ischämiegefährdet. Der **rechte Ventrikel** wird bei normalem RV-Druck systolisch und diastolisch perfundiert – bei pulmonaler Hypertonie geht dieser Vorteil verloren.",
          "Hinter einer **hochgradigen Stenose** sind die Arteriolen bereits maximal dilatiert: Der Fluss wird **druckpassiv**. Jede Hypotonie, jeder diastolische Druckabfall und jeder LVEDP-Anstieg mindert dann direkt die Perfusion.",
          { h: "Ischämie-Phänomene" },
          { ul: [
            "**Stunning:** reversible kontraktile Dysfunktion nach Ischämie trotz wiederhergestelltem Fluss, Erholung über Stunden bis Tage.",
            "**Hibernation:** chronische Minderperfusion mit herunterreguliertem, aber vitalem Myokard; Funktionserholung nach Revaskularisation möglich.",
            "**Präkonditionierung:** Kurze Ischämie schützt vor späterer längerer Ischämie. Volatile Anästhetika imitieren das im Experiment. Klinisch zeigten jedoch weder volatile Anästhetika gegenüber TIVA in der Herzchirurgie (MYRIAD, Landoni et al. 2019) noch Remote Ischemic Preconditioning (RIPHeart, ERICCA 2015) einen Überlebensvorteil."
          ] },
          { h: "Perioperative Myokardschädigung (MINS)" },
          "Troponinanstiege nach nicht-kardialen Operationen sind häufig, meist **asymptomatisch** und mit erhöhter 30-Tage-Mortalität verbunden (VISION 2017). Häufigster Mechanismus ist ein O₂-Angebot-Bedarf-Missverhältnis (Typ-2-Infarkt: Tachykardie, Hypotonie, Anämie, Hypoxämie). Die ESC-Leitlinie 2022 empfiehlt bei Risikopatienten Troponinmessungen vor sowie 24 und 48 h nach dem Eingriff."
        ],
        merke: [
          "O₂-Extraktion schon in Ruhe ca. 70–75 % → Bedarf wird über Fluss gedeckt.",
          "LV-Perfusion v.a. diastolisch: Perfusionsdruck = diastolischer Aortendruck − LVEDP.",
          "MVO₂-Determinanten: Wandspannung, Herzfrequenz, Kontraktilität.",
          "Hinter Stenosen ist der Fluss druckpassiv → Hypotonie und Tachykardie vermeiden.",
          "MINS: meist stumm, prognostisch relevant → Troponin-Screening bei Risikopatienten."
        ],
        warum: [
          { q: "Warum ist Tachykardie für einen Patienten mit KHK gefährlicher als eine moderate Hypertonie?", a: "Tachykardie erhöht den O₂-Bedarf und verkürzt zugleich die Diastole, also die Perfusionszeit des LV – Angebot und Bedarf verschieben sich gegenläufig. Eine moderate Hypertonie erhöht zwar die Wandspannung, hebt aber auch den diastolischen Perfusionsdruck." },
          { q: "Warum ist das Subendokard bei Ischämie zuerst betroffen?", a: "Es erfährt den höchsten systolischen Gewebedruck und die höchste Wandspannung, wird fast nur diastolisch perfundiert und hat einen höheren O₂-Verbrauch. Bei sinkendem Perfusionsdruck oder kurzer Diastole fällt sein Fluss zuerst ab, und seine Vasodilatationsreserve ist früher erschöpft." }
        ],
        klinik: [
          "Ziele bei KHK: Herzfrequenz niedrig-normal, diastolischen Druck erhalten, LVEDP nicht erhöhen, Anämie und Hypoxämie vermeiden, Schmerz und Stress dämpfen.",
          "Bestehende β-Blocker perioperativ fortführen, nicht kurzfristig hochdosiert neu beginnen (POISE).",
          "RV-Ischämie bei pulmonaler Hypertonie: systemischen Blutdruck stützen (z.B. Noradrenalin, Vasopressin), weil die RV-Perfusion dann vom Aortendruck abhängt."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Wie hoch ist die myokardiale O₂-Extraktion in Ruhe, und welche Konsequenz hat das?", a: "Ca. 70–75 % (koronarvenöse Sättigung ca. 25–30 %). Mehrbedarf kann kaum über höhere Extraktion, sondern nur über mehr Koronarfluss gedeckt werden." },
          { q: "Spezialwissen Herz: Was sind die Hauptdeterminanten des myokardialen O₂-Verbrauchs?", a: "Wandspannung (Druck, Radius, Wanddicke), Herzfrequenz und Kontraktilität." },
          { q: "Spezialwissen Herz: Wie berechnet sich der koronare Perfusionsdruck des linken Ventrikels?", a: "Diastolischer Aortendruck minus linksventrikulärer enddiastolischer Druck (LVEDP)." },
          { q: "Spezialwissen Herz: Welche Mediatoren koppeln den Koronarfluss an den Stoffwechsel?", a: "Adenosin, K-ATP-Kanäle, NO, H₂O₂, CO₂, H⁺ und K⁺ – Adenosin ist beteiligt, aber nicht der alleinige Mediator." },
          { q: "Spezialwissen Herz: Was unterscheidet Stunning und Hibernation?", a: "Stunning: reversible Dysfunktion nach Ischämie trotz wiederhergestellter Perfusion. Hibernation: chronisch minderperfundiertes, vitales Myokard mit herunterregulierter Funktion, das sich nach Revaskularisation erholen kann." },
          { q: "Spezialwissen Herz: Was zeigte die MYRIAD-Studie zur anästhetischen Präkonditionierung?", a: "Volatile Anästhetika führten bei aortokoronarer Bypasschirurgie im Vergleich zu TIVA nicht zu einer niedrigeren 1-Jahres-Mortalität (Landoni et al., NEJM 2019)." },
          { q: "Spezialwissen Herz: Was ist MINS und welches Screening empfiehlt die ESC 2022?", a: "Myocardial Injury after Noncardiac Surgery: meist asymptomatischer, prognostisch relevanter Troponinanstieg. Bei Risikopatienten Troponin vor sowie 24 und 48 h nach dem Eingriff bestimmen." }
        ]
      },
      {
        id: "rv",
        level: "Organ",
        title: "Rechter Ventrikel und rechtsventrikuläres Versagen",
        leitfrage: "Warum verkraftet der rechte Ventrikel große Volumen, aber kaum einen akuten Druckanstieg – und wie entsteht die RV-Versagensspirale?",
        body: [
          { h: "Bau und Arbeitsweise" },
          "Der RV ist halbmondförmig um den LV gelegt. Seine freie Wand ist dünn (normal unter 5 mm gegenüber ca. 7–10 mm beim LV). Er kontrahiert vorwiegend durch **Längsverkürzung** (Annulus → Apex) und peristaltisch vom Einfluss- zum Ausflusstrakt, unterstützt durch die LV-Kontraktion über das Septum. Er pumpt dasselbe Schlagvolumen wie der LV gegen einen etwa fünf- bis sechsmal niedrigeren Druck in ein Niederdruck-, Niedrigwiderstands- und Hochcompliance-System (Haddad et al. 2008). Die **TAPSE** (Längsbewegung des Trikuspidalannulus) ist normal ≥ ca. 17 mm.",
          { h: "Nachlastempfindlichkeit" },
          "Der RV ist ein **Volumenpumpe**: Er toleriert Volumenzunahmen gut, reagiert aber auf einen Anstieg des pulmonalen Gefäßwiderstands mit einem steilen Abfall des Schlagvolumens – viel steiler als der LV bei steigender Nachlast. Ein nicht trainierter RV kann akut kaum einen mittleren Pulmonalisdruck über ca. 40 mmHg aufbauen. Werte darüber bei akuter Lungenembolie sprechen für eine vorbestehende, chronische Drucklast mit RV-Hypertrophie.",
          { h: "Die RV-Versagensspirale" },
          { ul: [
            "PVR ↑ (Embolie, Hypoxie, Azidose, Überdruckbeatmung, ARDS) → RV-Dilatation, Trikuspidalinsuffizienz.",
            "Septumverschiebung nach links → LV-Füllung ↓ → LV-Schlagvolumen ↓ → Hypotonie.",
            "Hoher RV-Druck macht die RV-Perfusion überwiegend diastolisch und druckabhängig; bei Hypotonie sinkt sie → RV-Ischämie → RV-Funktion ↓.",
            "Zusätzliche Volumengabe dilatiert den RV weiter und verschlechtert die Spirale."
          ] },
          { h: "PVR und Lungenvolumen" },
          "Der PVR verläuft U-förmig mit dem Lungenvolumen und ist **bei FRC minimal**. Bei hohen Volumina (Überblähung, hoher PEEP) werden die alveolären Gefäße komprimiert, bei niedrigen Volumina (Atelektase) kollabieren die extraalveolären Gefäße und die hypoxische Vasokonstriktion wird aktiviert. Weitere PVR-Erhöher: Hypoxie, Hyperkapnie, Azidose, Hypothermie, Schmerz/Sympathikus, α-Agonisten in hoher Dosis.",
          { h: "Therapieprinzipien aus der Physiologie" },
          { ul: [
            "**Systemischen Druck erhalten** (Noradrenalin; Vasopressin erhöht den PVR kaum) → RV-Koronarperfusion.",
            "**PVR senken:** O₂, Normo- bis leichte Hypokapnie, Azidose korrigieren, Normothermie, Beatmung nahe FRC (moderater PEEP, kein Plateaudruck-Exzess); inhalatives NO oder Prostazyklin.",
            "**Volumen vorsichtig:** nur bei nachgewiesenem Bedarf; ein dilatierter RV braucht eher Entlastung.",
            "**Inotropie:** Dobutamin, Milrinon, Levosimendan – unter Beachtung der Vasodilatation.",
            "Sinusrhythmus und AV-Synchronität erhalten."
          ] }
        ],
        merke: [
          "RV = dünnwandige Volumenpumpe, extrem nachlastempfindlich.",
          "Akuter RV schafft kaum mPAP > ca. 40 mmHg.",
          "Spirale: PVR ↑ → RV-Dilatation → Septumshift → LV-Füllung ↓ → Hypotonie → RV-Ischämie.",
          "PVR minimal bei FRC; Hypoxie, Hyperkapnie, Azidose, Hypothermie, Überblähung erhöhen ihn.",
          "Therapie: Systemdruck halten, PVR senken, Volumen zurückhaltend, Inotropie."
        ],
        warum: [
          { q: "Warum kann eine Volumengabe bei akutem Rechtsherzversagen den Blutdruck weiter senken?", a: "Der bereits dilatierte RV wird weiter gedehnt: Trikuspidalinsuffizienz, Wandspannung und O₂-Bedarf steigen, das Septum verschiebt sich stärker nach links und behindert die LV-Füllung (ventrikuläre Interdependenz im starren Perikard). Das LV-Schlagvolumen und damit der Blutdruck sinken." },
          { q: "Warum ist der PVR bei FRC am niedrigsten?", a: "Er setzt sich aus alveolären Gefäßen (werden bei hohen Lungenvolumina durch gedehnte Alveolen komprimiert) und extraalveolären Gefäßen (werden bei niedrigen Volumina durch fehlenden radialen Zug enger, Atelektasen aktivieren HPV) zusammen. Die Summe beider Widerstände ist bei FRC am kleinsten." }
        ],
        klinik: [
          "Lungenembolie unter Narkose: plötzlicher etCO₂-Abfall, Hypotonie, Hypoxämie, RV-Dilatation in der TEE.",
          "Pulmonale Hypertonie bei Einleitung: Hypoxie, Hyperkapnie und Hypotonie vermeiden; Vasopressor früh, ggf. inhalatives NO bereithalten.",
          "Ein-Lungen-Ventilation und hoher PEEP können den RV belasten."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Wie unterscheiden sich RV und LV in Wanddicke und Kontraktionsweise?", a: "RV-Wand normal unter 5 mm (LV ca. 7–10 mm); der RV kontrahiert v.a. durch Längsverkürzung und peristaltisch vom Einfluss- zum Ausflusstrakt, unterstützt über das Septum." },
          { q: "Spezialwissen Herz: Welchen mittleren Pulmonalisdruck kann ein nicht vorgeschädigter RV akut ungefähr aufbauen?", a: "Kaum mehr als ca. 40 mmHg; höhere Werte bei akuter Lungenembolie sprechen für eine chronische Drucklast mit RV-Hypertrophie." },
          { q: "Spezialwissen Herz: Beschreibe die Versagensspirale des rechten Ventrikels.", a: "PVR ↑ → RV-Dilatation und Trikuspidalinsuffizienz → Septumshift nach links → LV-Füllung und HZV ↓ → Hypotonie → RV-Koronarperfusion ↓ (bei hohem RV-Druck überwiegend diastolisch) → RV-Ischämie → weiter sinkende RV-Funktion." },
          { q: "Spezialwissen Herz: Welche Faktoren erhöhen den pulmonalen Gefäßwiderstand?", a: "Hypoxie (HPV), Hyperkapnie, Azidose, Hypothermie, Sympathikus/Schmerz, Lungenvolumina deutlich über oder unter der FRC (Überblähung, Atelektase), Embolie." },
          { q: "Spezialwissen Herz: Welche Therapieprinzipien folgen aus der RV-Physiologie?", a: "Systemischen Druck erhalten (Noradrenalin, Vasopressin), PVR senken (O₂, Normokapnie, Azidosekorrektur, Beatmung nahe FRC, inhalatives NO/Prostazyklin), Volumen zurückhaltend, Inotropie (Dobutamin, Milrinon, Levosimendan), Sinusrhythmus erhalten." }
        ]
      },
      {
        id: "regulation",
        level: "System",
        title: "Kreislaufregulation und ihre Beeinflussung durch Anästhesie",
        leitfrage: "Welche Regelkreise halten den Blutdruck in Sekunden, Minuten und Tagen konstant – und welche davon schaltet eine Narkose aus?",
        body: [
          { h: "Kurzfristig (Sekunden): arterieller Barorezeptorreflex" },
          "Dehnungsrezeptoren im **Karotissinus** (Afferenz über den N. glossopharyngeus) und im **Aortenbogen** (Afferenz über den N. vagus) melden an den **Nucleus tractus solitarii**. Ein Druckanstieg hemmt über die kaudale ventrolaterale Medulla die sympathischen Neurone der **rostralen ventrolateralen Medulla** und aktiviert vagale Kerne (Nucleus ambiguus, dorsaler Vaguskern) → Frequenz, Kontraktilität und Gefäßtonus sinken. Bei Druckabfall läuft es umgekehrt. Bei chronischer Hypertonie verschiebt sich der Sollwert nach oben.",
          { h: "Kardiopulmonale Rezeptoren und weitere Reflexe" },
          { ul: [
            "**Niederdruckrezeptoren** (Vorhöfe, große Venen) messen die Füllung: Dehnung → ANP-Freisetzung, ADH-Hemmung (Gauer-Henry-Reflex), Diurese. Der Bainbridge-Reflex steigert bei Vorhofdehnung die Frequenz.",
            "**Bezold-Jarisch-Reflex:** Ein kräftig kontrahierender, leerer Ventrikel löst über vagale Afferenzen Bradykardie und Vasodilatation aus.",
            "**Chemoreflex:** Hypoxie und Hyperkapnie aktivieren den Sympathikus.",
            "**Cushing-Reflex:** Ein kritisch erhöhter ICP führt zu Hypertonie, Bradykardie und unregelmäßiger Atmung."
          ] },
          { h: "Mittel- und langfristig (Minuten bis Tage): neurohumorale Achsen" },
          { ul: [
            "**Renin-Angiotensin-Aldosteron-System:** Angiotensin II wirkt vasokonstriktorisch und setzt Aldosteron (Na⁺-Retention) sowie ADH frei.",
            "**ADH (Vasopressin):** in niedriger Konzentration antidiuretisch (V2), in hoher Konzentration (Schock) vasokonstriktorisch (V1a).",
            "**Natriuretische Peptide (ANP, BNP):** Natriurese und Vasodilatation, Gegenspieler des RAAS.",
            "**Druck-Natriurese der Niere:** Steigender Druck erhöht die Na⁺- und Wasserausscheidung. Nach Guyton ist das der dominierende langfristige Regler des Blutdrucks."
          ] },
          { h: "Was die Narkose verändert" },
          { table: { head: ["Einfluss", "Mechanismus", "Konsequenz"], rows: [
            ["Volatile Anästhetika, Propofol", "Dosisabhängige Dämpfung des Barorezeptorreflexes, Sympathikolyse, Vasodilatation", "Hypotonie ohne adäquaten Frequenzanstieg"],
            ["Opioide (v.a. Remifentanil, Sufentanil)", "Vagotonus, Sympathikusdämpfung", "Bradykardie, Hypotonie bei hohem Sympathikus-Ausgangstonus"],
            ["Ketamin", "Zentrale Sympathikusaktivierung (direkt negativ inotrop)", "Meist Blutdruck ↑; bei erschöpften Katecholaminspeichern Hypotonie möglich"],
            ["Neuraxiale Blockade", "Präganglionäre Sympathikolyse; bei hoher Ausbreitung (Th1–Th4) Ausfall der kardioakzeleratorischen Fasern", "Venodilatation, Hypotonie, Bradykardie, ggf. Bezold-Jarisch"],
            ["Chronische RAAS-Blockade (ACE-Hemmer, AT1-Blocker)", "Nach Sympathikolyse ist der Druck stark von Vasopressin abhängig", "Therapierefraktäre Hypotonie → Vasopressin bzw. Terlipressin erwägen"],
            ["Autonome Neuropathie (Diabetes, Parkinson, Alter)", "Eingeschränkte Reflexkompensation", "Ausgeprägte Hypotonie bei Einleitung und Lagewechsel"]
          ] } },
          { h: "Intraoperative Hypotonie" },
          "Schon kurze Phasen mit MAP unter ca. 65 mmHg bzw. einem relevanten Abfall gegenüber dem Ausgangswert sind mit akuter Nierenschädigung und Myokardschädigung assoziiert (Salmasi et al. 2017). Eine individualisierte Blutdrucksteuerung (systolisch innerhalb von 10 % des Ausgangswerts) reduzierte in der INPRESS-Studie postoperative Organdysfunktionen (Futier et al. 2017)."
        ],
        merke: [
          "Barorezeptoren: Karotissinus (N. IX) und Aortenbogen (N. X) → NTS → RVLM/Vaguskerne.",
          "Langfristig dominiert die renale Druck-Natriurese, unterstützt durch RAAS, ADH, natriuretische Peptide.",
          "Anästhetika dämpfen Baroreflex und Sympathikus → Hypotonie ohne Reflextachykardie.",
          "RAAS-blockierte Patienten: Vasopressin-abhängiger Blutdruck nach Sympathikolyse.",
          "MAP < ca. 65 mmHg ist mit AKI und MINS assoziiert."
        ],
        warum: [
          { q: "Warum zeigen Patienten unter Propofol bei Hypotonie oft keine Reflextachykardie?", a: "Propofol dämpft die Barorezeptor-Reflexbahn zentral und senkt den Sympathikotonus. Der Regelkreis 'Druckabfall → Sympathikusaktivierung → Frequenzanstieg' ist dadurch abgeschwächt, und der Sollwert wird nach unten verstellt." },
          { q: "Warum ist bei Dauertherapie mit ACE-Hemmern nach Narkoseeinleitung Vasopressin oft wirksamer als Noradrenalin?", a: "Der Blutdruck stützt sich normalerweise auf Sympathikus, RAAS und Vasopressin. Die Narkose dämpft den Sympathikus, der ACE-Hemmer blockiert das RAAS – es bleibt im Wesentlichen das Vasopressin-System. Exogenes Vasopressin wirkt über V1a-Rezeptoren unabhängig von adrenergen Rezeptoren und Angiotensin II." }
        ],
        klinik: [
          "Einleitung titrieren, Vasopressor bereithalten, besonders bei älteren Patienten, Hypovolämie, autonomer Neuropathie und RAAS-Blockade.",
          "ACE-Hemmer/AT1-Blocker ohne Herzinsuffizienz am OP-Tag pausieren erwägen (ESC 2022).",
          "Hohe Spinal- oder Epiduralanästhesie: Bradykardie und Hypotonie früh mit Vasopressor (und ggf. Atropin) behandeln."
        ],
        selbsttest: [
          { q: "Spezialwissen Herz: Beschreibe die Reflexbahn des arteriellen Barorezeptorreflexes.", a: "Dehnungsrezeptoren in Karotissinus (N. glossopharyngeus) und Aortenbogen (N. vagus) → Nucleus tractus solitarii → Hemmung der rostralen ventrolateralen Medulla (Sympathikus ↓) über die kaudale ventrolaterale Medulla und Aktivierung vagaler Kerne (Frequenz ↓) bei Druckanstieg." },
          { q: "Spezialwissen Herz: Welcher Mechanismus regelt den Blutdruck nach Guyton langfristig?", a: "Die renale Druck-Natriurese: Steigender arterieller Druck erhöht die Na⁺- und Wasserausscheidung, bis Volumen und Druck wieder im Gleichgewicht sind; RAAS, ADH und natriuretische Peptide modulieren sie." },
          { q: "Spezialwissen Herz: Wie wirkt Vasopressin in niedriger und in hoher Konzentration?", a: "Niedrig: antidiuretisch über V2-Rezeptoren (Aquaporin-2 im Sammelrohr). Hoch (z.B. Schock): vasokonstriktorisch über V1a-Rezeptoren." },
          { q: "Spezialwissen Herz: Warum kommt es bei hoher Spinalanästhesie zu Bradykardie?", a: "Ausfall der kardioakzeleratorischen Sympathikusfasern (Th1–Th4) bei erhaltenem Vagus, verminderter venöser Rückstrom mit geringerer Vorhofdehnung und ggf. Bezold-Jarisch-Reflex." },
          { q: "Spezialwissen Herz: Ab welchem MAP ist intraoperative Hypotonie mit Organschäden assoziiert und was zeigte INPRESS?", a: "Ab MAP unter ca. 65 mmHg (bzw. relevantem Abfall vom Ausgangswert) ist sie mit AKI und Myokardschädigung assoziiert. In INPRESS senkte eine individualisierte Blutdrucksteuerung (systolisch innerhalb von 10 % des Ausgangswerts) postoperative Organdysfunktionen." }
        ]
      }
    ],
    sources: [
      "Bers DM. Cardiac excitation–contraction coupling. Nature 2002;415:198–205.",
      "Grant AO. Cardiac ion channels. Circ Arrhythm Electrophysiol 2009;2:185–194.",
      "DiFrancesco D. The role of the funny current in pacemaker activity. Circ Res 2010;106:434–446.",
      "Lakatta EG, Maltsev VA, Vinogradova TM. A coupled SYSTEM of intracellular Ca²⁺ clocks and surface membrane voltage clocks controls the timekeeping mechanism of the heart's pacemaker. Circ Res 2010;106:659–673.",
      "Jose AD, Collison D. The normal range and determinants of the intrinsic heart rate in man. Cardiovasc Res 1970;4:160–167.",
      "Patterson SW, Starling EH. On the mechanical factors which determine the output of the ventricles. J Physiol 1914;48:357–379.",
      "Suga H, Sagawa K. Instantaneous pressure-volume relationships and their ratio in the excised, supported canine left ventricle. Circ Res 1974;35:117–126.",
      "Guyton AC. Determination of cardiac output by equating venous return curves with cardiac response curves. Physiol Rev 1955;35:123–129.",
      "Persichini R, Silva S, Teboul JL, et al. Effects of norepinephrine on mean systemic pressure and venous return in human septic shock. Crit Care Med 2012;40:3146–3153.",
      "Monnet X, Marik PE, Teboul JL. Prediction of fluid responsiveness: an update. Ann Intensive Care 2016;6:111.",
      "Cannesson M, Le Manach Y, Hofer CK, et al. Assessing the diagnostic accuracy of pulse pressure variations for the prediction of fluid responsiveness: a 'gray zone' approach. Anesthesiology 2011;115:231–241.",
      "Duncker DJ, Bache RJ. Regulation of coronary blood flow during exercise. Physiol Rev 2008;88:1009–1086.",
      "Reimer KA, Lowe JE, Rasmussen MM, Jennings RB. The wavefront phenomenon of ischemic cell death. Circulation 1977;56:786–794.",
      "Nesto RW, Kowalchuk GJ. The ischemic cascade: temporal sequence of hemodynamic, electrocardiographic and symptomatic expressions of ischemia. Am J Cardiol 1987;59:23C–30C.",
      "Bergmann O, Bhardwaj RD, Bernard S, et al. Evidence for cardiomyocyte renewal in humans. Science 2009;324:98–102.",
      "Herman DS, Lam L, Taylor MR, et al. Truncations of titin causing dilated cardiomyopathy. N Engl J Med 2012;366:619–628.",
      "Landoni G, Lomivorotov VV, Nigro Neto C, et al. Volatile anesthetics versus total intravenous anesthesia for cardiac surgery (MYRIAD). N Engl J Med 2019;380:1214–1225.",
      "Hausenloy DJ, et al. Remote ischemic preconditioning and outcomes of cardiac surgery (ERICCA). N Engl J Med 2015;373:1408–1417; Meybohm P, et al. A multicenter trial of remote ischemic preconditioning for heart surgery (RIPHeart). N Engl J Med 2015;373:1397–1407.",
      "Writing Committee for the VISION Study Investigators. Association of postoperative high-sensitivity troponin levels with myocardial injury and 30-day mortality among patients undergoing noncardiac surgery. JAMA 2017;317:1642–1651.",
      "Haddad F, Hunt SA, Rosenthal DN, Murphy DJ. Right ventricular function in cardiovascular disease, part I. Circulation 2008;117:1436–1448.",
      "Salmasi V, Maheshwari K, Yang D, et al. Relationship between intraoperative hypotension, defined by either reduction from baseline or absolute thresholds, and acute kidney and myocardial injury after noncardiac surgery. Anesthesiology 2017;126:47–65.",
      "Futier E, Lefrant JY, Guinot PG, et al. Effect of individualized vs standard blood pressure management strategies on postoperative organ dysfunction (INPRESS). JAMA 2017;318:1346–1357.",
      "Halvorsen S, Mehilli J, Cassese S, et al. 2022 ESC Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery. Eur Heart J 2022;43:3826–3924.",
      "Lehrbücher: Klabunde RE. Cardiovascular Physiology Concepts, 3. Aufl. 2021; Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017; Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology, 14. Aufl. 2021."
    ]
  });
})();
