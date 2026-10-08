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

  const CH = [];

  CH.push({
    id: "zelle",
    level: "Zelle",
    title: "Der Kardiomyozyt – Bauplan der Pumpe",
    leitfrage: "Wie muss eine Muskelzelle gebaut sein, damit sie rund 100.000-mal am Tag ohne Pause und ohne Ermüdung kontrahiert?",
    einfach: "Das Herz besteht aus Milliarden kleiner Muskelzellen, die wie Glieder einer Kette fest miteinander verbunden sind – mechanisch (damit die Kraft weitergegeben wird) und elektrisch (damit alle fast gleichzeitig anspringen). In jeder Zelle liegen winzige 'Motoren' (Sarkomere), ein Calcium-Speicher als Zündschalter und sehr viele Kraftwerke (Mitochondrien). Weil die Zelle fast keine Energievorräte hat, ist sie auf ununterbrochene Durchblutung angewiesen.",
    body: [
      { h: "Zellaufbau" },
      "Herzmuskelzellen (**Kardiomyozyten**) der Kammern sind etwa 100–150 µm lang und 10–25 µm breit, verzweigt und haben meist einen, manchmal zwei Kerne. Anders als Skelettmuskelfasern sind sie **Einzelzellen**. Sie sind an ihren Enden über **Glanzstreifen** (Disci intercalares) miteinander verbunden.",
      { h: "Glanzstreifen: drei Verbindungstypen" },
      { ul: [
        "**Fascia adhaerens:** verankert die Aktinfäden benachbarter Zellen → ==die Kraft wird von Zelle zu Zelle weitergegeben==.",
        "**Desmosomen:** halten die Zellen unter Zug zusammen. Defekte Desmosomen-Proteine verursachen die arrhythmogene (rechtsventrikuläre) Kardiomyopathie.",
        "**Gap Junctions** (Kanäle aus Connexin-Proteinen, im Arbeitsmyokard v.a. Connexin 43): verbinden das Zellinnere benachbarter Zellen elektrisch → ==die Erregung springt fast ohne Widerstand weiter, das Myokard verhält sich wie eine einzige Zelle (funktionelles Synzytium)==."
      ] },
      { h: "Das Sarkomer – der Motor" },
      "Die kleinste kontraktile Einheit ist das **Sarkomer** (von einer Z-Scheibe zur nächsten; in der Diastole ca. 1,9–2,2 µm lang). Dünne Fäden aus **Aktin** (mit den Regulatorproteinen Tropomyosin und Troponin C, I und T) sind an den Z-Scheiben befestigt. Dicke Fäden aus **Myosin** liegen in der Mitte. Bei der Kontraktion ziehen die Myosinköpfe die Aktinfäden zur Mitte – das Sarkomer verkürzt sich.",
      "**Titin** ist das größte bekannte Protein des Menschen. Es spannt sich von der Z-Scheibe bis zur Sarkomermitte und wirkt wie eine **molekulare Feder**: ==Es bestimmt einen Großteil der passiven Steifigkeit in der Diastole== und trägt zum Frank-Starling-Mechanismus bei (Kapitel 'Vorlast, Nachlast'). Im Herzen gibt es eine steifere (N2B) und eine dehnbarere (N2BA) Variante. Verkürzende Mutationen im Titin-Gen (TTN) sind die häufigste bekannte genetische Ursache der dilatativen Kardiomyopathie.",
      { h: "Der Zündschalter: T-Tubuli, sarkoplasmatisches Retikulum und Dyade" },
      "Die Zellmembran stülpt sich in Höhe der Z-Scheiben schlauchförmig ins Zellinnere ein (**T-Tubuli**). Dadurch erreicht die elektrische Erregung auch das Zellinnere. Im T-Tubulus sitzen spannungsabhängige **L-Typ-Calciumkanäle**. Nur ca. 12–15 nm gegenüber liegen die Calcium-Freisetzungskanäle (**Ryanodin-Rezeptoren Typ 2, RyR2**) des **sarkoplasmatischen Retikulums** (des inneren Calciumspeichers der Zelle). Diese Kontaktstelle heißt **Dyade**. ==Hier wird das elektrische Signal in ein Calciumsignal übersetzt== (Kapitel 'Elektromechanische Kopplung'). Vorhofzellen haben deutlich weniger T-Tubuli.",
      { h: "Energie: viel Verbrauch, kaum Vorrat" },
      "Mitochondrien machen etwa ein Viertel bis ein Drittel des Zellvolumens aus. Trotzdem hat die Zelle **kaum Energiereserven**: Ihr Vorrat an Adenosintriphosphat (ATP) reicht nur für **wenige Sekunden** Kontraktion. Kreatinphosphat puffert kurzfristig. Das gesunde Erwachsenenherz gewinnt ca. 60–90 % seines ATP aus der **Verbrennung von Fettsäuren**, den Rest aus Glukose, Laktat und Ketonkörpern.",
      { kette: [
        "Durchblutung stoppt (Ischämie)",
        "Sauerstoff fehlt → nur noch anaerobe Glykolyse mit sehr wenig ATP",
        "Phosphat und Säure häufen sich an → die Myofilamente reagieren schlechter auf Calcium",
        "==Die Kontraktion erlischt innerhalb von etwa einer Minute== – das spart Energie, die Zelle lebt noch",
        "Nach ca. 20–40 min beginnt der irreversible Zelltod, zuerst innen (Subendokard), dann über Stunden nach außen (Reimer & Jennings 1977)"
      ], titel: "Was bei Ischämie in der Zelle passiert" },
      { h: "Regeneration" },
      "Erwachsene Herzmuskelzellen teilen sich kaum noch: Die Erneuerungsrate liegt mit 25 Jahren bei etwa 1 % pro Jahr und sinkt im Alter auf unter 0,5 % (Bergmann et al. 2009). ==Deshalb wächst das Herz nach der Kindheit nur durch Zellvergrößerung (Hypertrophie), und abgestorbenes Myokard wird durch eine Narbe ersetzt.==",
      { h: "Hypertrophie folgt der Wandspannung" },
      { ul: [
        "**Chronische Drucklast** (z.B. Aortenstenose, Hypertonie) → neue Sarkomere werden **parallel** angelagert → die Wand wird dicker (**konzentrische Hypertrophie**) → ==die Wandspannung normalisiert sich, aber die Wand wird steifer und schlechter durchblutet==.",
        "**Chronische Volumenlast** (z.B. Aorten- oder Mitralinsuffizienz) → Sarkomere werden **hintereinander** angefügt → die Zellen werden länger, die Kammer weiter (**exzentrische Hypertrophie**) → größeres Schlagvolumen möglich."
      ] },
      { falle: "„Hypertrophie macht das Herz stärker.“ – Nur kurzfristig: Sie normalisiert die Wandspannung, erhöht aber den Sauerstoffbedarf, verschlechtert die Durchblutung des Subendokards und macht die Kammer steif. Langfristig ist sie ein eigenständiger Risikofaktor für Herzinsuffizienz und Rhythmusstörungen." }
    ],
    merke: [
      "Glanzstreifen = mechanische (Fascia adhaerens, Desmosomen) + elektrische (Gap Junctions) Kopplung → funktionelles Synzytium.",
      "Dyade = L-Typ-Calciumkanal (T-Tubulus) gegenüber RyR2 (sarkoplasmatisches Retikulum) → Ort der elektromechanischen Kopplung.",
      "Titin = molekulare Feder → diastolische Steifigkeit und Frank-Starling.",
      "ATP-Vorrat nur Sekunden, Energie v.a. aus Fettsäuren → minimale Ischämietoleranz.",
      "Kaum Zellteilung → Hypertrophie statt Neubildung, Narbe statt Ersatz."
    ],
    warum: [
      { q: "Warum führt Drucklast zu einer dicken Wand, Volumenlast dagegen zu einer großen Kammer?", a: "Der Wachstumsreiz ist die Wandspannung (Laplace: σ = P × r / 2h). Bei Drucklast ist vor allem P erhöht: Werden Sarkomere parallel angelagert, steigt die Wanddicke h – das senkt die Spannung wieder. Bei Volumenlast muss mehr Blut pro Schlag ausgeworfen werden: Werden Sarkomere hintereinander angefügt, wird die Kammer größer und kann ein größeres Volumen aufnehmen und auswerfen." },
      { q: "Warum hört ischämisches Myokard schon nach etwa einer Minute auf zu kontrahieren, obwohl die Zellen noch leben?", a: "Es gibt kaum ATP- und Kreatinphosphat-Reserven, und die Sauerstoffausschöpfung ist schon in Ruhe fast maximal. Anorganisches Phosphat und Säure häufen sich an und senken die Calcium-Empfindlichkeit der Myofilamente. Das Abschalten der Kontraktion spart Energie und verzögert den Zelltod, der erst nach etwa 20–40 Minuten beginnt." }
    ],
    klinik: [
      "Je schneller die Reperfusion, desto mehr Myokard überlebt – der Zelltod schreitet über Stunden von innen nach außen fort.",
      "Hypertrophes Myokard (z.B. bei Aortenstenose) ist besonders empfindlich gegenüber Hypotonie und Tachykardie – auch ohne Koronarstenosen.",
      "Arrhythmogene Kardiomyopathie und Titin-bedingte dilatative Kardiomyopathie: erhöhtes perioperatives Risiko für Rhythmusstörungen und Herzinsuffizienz."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Welche drei Verbindungstypen bilden den Glanzstreifen und welche Funktion hat jeder?", a: "Fascia adhaerens (Verankerung der Aktinfäden, Kraftübertragung), Desmosomen (mechanischer Zusammenhalt) und Gap Junctions aus Connexin 43 (elektrische Kopplung → funktionelles Synzytium)." },
      { q: "Spezialwissen Herz: Was ist eine Dyade im Kardiomyozyten?", a: "Die Kontaktstelle aus L-Typ-Calciumkanälen im T-Tubulus und den gegenüberliegenden Ryanodin-Rezeptoren (RyR2) des sarkoplasmatischen Retikulums – hier wird die elektrische Erregung in Calciumfreisetzung übersetzt." },
      { q: "Spezialwissen Herz: Welche Funktionen hat Titin im Myokard?", a: "Molekulare Feder von der Z-Scheibe bis zur Sarkomermitte: bestimmt einen Großteil der passiven diastolischen Steifigkeit, zentriert das Myosin und trägt zur längenabhängigen Aktivierung (Frank-Starling) bei." },
      { q: "Spezialwissen Herz: Woraus gewinnt das gesunde adulte Herz überwiegend sein ATP, und wie lange reicht der ATP-Vorrat?", a: "Zu ca. 60–90 % aus Fettsäureoxidation, daneben Glukose, Laktat und Ketonkörper. Der ATP-Vorrat reicht nur für wenige Sekunden Kontraktion; Kreatinphosphat puffert kurzfristig." },
      { q: "Spezialwissen Herz: Wie unterscheiden sich konzentrische und exzentrische Hypertrophie in Auslöser und Sarkomeranordnung?", a: "Konzentrisch: chronische Drucklast, Sarkomere parallel → Wandverdickung normalisiert die Wandspannung. Exzentrisch: chronische Volumenlast, Sarkomere hintereinander → größere Kammer mit größerem Schlagvolumen." },
      { q: "Spezialwissen Herz: Nach welcher Ischämiedauer beginnt die irreversible Myokardnekrose und wie breitet sie sich aus?", a: "Nach etwa 20–40 min kompletter Ischämie, beginnend im Subendokard und über Stunden Richtung Epikard fortschreitend (Wavefront-Phänomen, Reimer & Jennings 1977)." }
    ]
  });

  CH.push({
    id: "elektro",
    level: "Zelle",
    title: "Elektrophysiologie – Aktionspotenzial, Schrittmacher und Erregungsleitung",
    leitfrage: "Warum hat das Arbeitsmyokard ein stabiles Ruhepotenzial und ein langes Plateau, der Sinusknoten dagegen eine spontane Depolarisation?",
    einfach: "Jede Herzzelle ist wie eine kleine Batterie: Innen ist sie negativ geladen. Öffnen sich Ionenkanäle, strömen Ionen hinein oder hinaus, und die Spannung kippt kurz ins Positive – das ist das Aktionspotenzial. Die Arbeitszellen warten geduldig auf einen Anstoß von außen. Die Schrittmacherzellen im Sinusknoten 'laden sich dagegen von selbst auf' und zünden regelmäßig – sie sind der Taktgeber.",
    figure: { svg: FIG_AP, caption: "Schematisches Aktionspotenzial des Arbeitsmyokards (oben) und des Sinusknotens (unten) mit den tragenden Ionenströmen." },
    body: [
      { h: "Ionengradienten und Ruhepotenzial" },
      { table: { head: ["Ion", "Innen (ca.)", "Außen (ca.)"], rows: [
        ["Kalium (K⁺)", "140 mmol/l", "3,5–5 mmol/l"],
        ["Natrium (Na⁺)", "10–15 mmol/l", "135–145 mmol/l"],
        ["Calcium (Ca²⁺, frei/ionisiert)", "ca. 0,1 µmol/l in der Diastole", "ca. 1,1–1,3 mmol/l"]
      ] } },
      "Die **Natrium-Kalium-Pumpe** (Na⁺/K⁺-ATPase) baut diese Gradienten unter ATP-Verbrauch auf: 3 Na⁺ hinaus, 2 K⁺ hinein. In Ruhe sind fast nur Kaliumkanäle offen (der Strom heißt **IK1**). Kalium strömt aus, bis die negative Ladung innen es zurückhält. ==Deshalb liegt das Ruhepotenzial (ca. −85 bis −90 mV) nahe am Kalium-Gleichgewichtspotenzial und wird vom extrazellulären Kalium bestimmt.==",
      { formel: "E(K⁺) = −61,5 mV × log ([K⁺]innen / [K⁺]außen) ≈ −61,5 × log (140 / 4,5) ≈ −92 mV", erkl: "Nernst-Gleichung bei Körpertemperatur: Je höher das Kalium außen, desto weniger negativ wird das Ruhepotenzial." },
      { h: "Das Aktionspotenzial des Arbeitsmyokards" },
      { table: { head: ["Phase", "Was passiert", "Hauptstrom (Kanal, Gen)", "Klinische Bezüge"], rows: [
        ["0", "Schneller Aufstrich", "Natriumeinstrom (Nav1.5, Gen SCN5A)", "Angriffspunkt von Klasse-I-Antiarrhythmika und toxischen Lokalanästhetika; Brugada-Syndrom (Kanal zu schwach), Long-QT-Syndrom Typ 3 (Kanal zu aktiv)"],
        ["1", "Kurze frühe Repolarisation", "transienter Kaliumausstrom (Ito)", "Ausgeprägt im Epikard ('Notch'); Rolle beim Brugada-Syndrom"],
        ["2", "Plateau", "Calciumeinstrom (L-Typ) hält dem Kaliumausstrom die Waage", "Calcium ist der Auslöser der Kontraktion; Angriffspunkt der Calciumantagonisten"],
        ["3", "Repolarisation", "Kaliumausstrom: IKr (Kanal hERG, Gen KCNH2), IKs (KCNQ1), IK1", "Fast alle Medikamente, die das QT verlängern, blockieren hERG; Long-QT Typ 1 (KCNQ1), Typ 2 (KCNH2)"],
        ["4", "Ruhepotenzial", "IK1", "Hyper- und Hypokaliämie wirken hier direkt"]
      ] } },
      "Ein ventrikuläres Aktionspotenzial dauert ca. **200–300 ms**. Während des Plateaus sind die Natriumkanäle inaktiviert. Sie erholen sich erst, wenn die Zelle in Phase 3 wieder unter etwa −60 bis −50 mV repolarisiert ist.",
      { kette: [
        "Langes Plateau (Calciumeinstrom)",
        "Natriumkanäle bleiben während fast der ganzen Kontraktion inaktiviert",
        "Die Zelle ist so lange nicht neu erregbar (lange Refraktärzeit)",
        "==Das Herz kann nicht wie ein Skelettmuskel in einen Dauerkrampf (Tetanus) geraten== – es muss zwischen zwei Schlägen erschlaffen und sich füllen"
      ], titel: "Warum das Plateau lebenswichtig ist" },
      { h: "Schrittmacherzellen (Sinus- und AV-Knoten)" },
      "Schrittmacherzellen haben **kein stabiles Ruhepotenzial**. Nach jedem Aktionspotenzial (tiefster Wert ca. −60 mV) wandert ihr Potenzial langsam von selbst nach oben (spontane diastolische Depolarisation, Phase 4). Zwei gekoppelte 'Uhren' treiben das an (DiFrancesco 2010; Lakatta et al. 2010):",
      { ul: [
        "**Membranuhr:** Der 'funny current' **If** fließt durch HCN4-Kanäle. Er wird ungewöhnlicherweise durch Hyperpolarisation geöffnet und direkt durch das Botenmolekül cAMP (zyklisches Adenosinmonophosphat) verstärkt. Dazu kommen T-Typ-Calciumströme und eine abnehmende Kaliumleitfähigkeit.",
        "**Calcium-Uhr:** Kleine spontane Calciumfreisetzungen aus dem sarkoplasmatischen Retikulum werden über den Natrium-Calcium-Austauscher (NCX) hinausbefördert. Dieser Austausch erzeugt einen depolarisierenden Einwärtsstrom."
      ] },
      "Bei ca. −40 mV ist die Schwelle erreicht. ==Der Aufstrich (Phase 0) wird hier von Calcium- statt Natriumkanälen getragen und ist deshalb langsam – das erklärt die langsame Leitung im AV-Knoten.==",
      "Der Sinusknoten ohne Nerveneinfluss schlägt beim jungen Erwachsenen mit ca. 100–110/min (**intrinsische Herzfrequenz**, sinkt mit dem Alter: ca. 118 − 0,57 × Alter; Jose & Collison 1970). ==Die niedrigere Ruhefrequenz zeigt, dass in Ruhe der Vagus überwiegt.== Fällt der Sinusknoten aus, übernehmen langsamere Zentren: AV-Übergang ca. 40–60/min, Kammer ca. 20–40/min.",
      { h: "Erregungsleitung" },
      { ul: [
        "Sinusknoten → Vorhofmyokard → **AV-Knoten** (atrioventrikulärer Knoten): ==sehr langsame Leitung (ca. 0,01–0,05 m/s) durch calciumgetragene Aktionspotenziale und wenige Gap Junctions== → die Vorhöfe können sich vor den Kammern kontrahieren; bei Vorhofflimmern werden nicht alle Impulse durchgelassen (Schutz der Kammern).",
        "**His-Bündel → Tawara-Schenkel → Purkinje-Fasern:** sehr schnell (ca. 2–4 m/s) → beide Kammern werden fast gleichzeitig erregt (schmaler QRS-Komplex im EKG).",
        "Arbeitsmyokard der Kammern: ca. 0,3–1 m/s, Erregung von innen (Endokard) nach außen (Epikard). Die Rückbildung (Repolarisation) läuft umgekehrt, weil die äußeren Zellen kürzere Aktionspotenziale haben → ==deshalb zeigt die T-Welle normalerweise in dieselbe Richtung wie der QRS-Komplex==."
      ] },
      { h: "Steuerung durch das vegetative Nervensystem" },
      { kette: [
        "Sympathikus → β1-Rezeptor → Gs-Protein → cAMP ↑",
        "If wird verstärkt, mehr Calcium strömt durch L-Typ-Kanäle",
        "==Frequenz ↑ (chronotrop), AV-Leitung schneller (dromotrop), Kraft ↑ (inotrop), Erschlaffung schneller (lusitrop)=="
      ], titel: "Sympathikus" },
      { kette: [
        "Vagus → Acetylcholin → M2-Rezeptor → Gi-Protein",
        "cAMP ↓ und Öffnung acetylcholinabhängiger Kaliumkanäle (GIRK, Strom IK,ACh)",
        "Zelle wird negativer (Hyperpolarisation), Phase 4 flacher",
        "==Frequenz ↓, AV-Leitung langsamer=="
      ], titel: "Vagus" },
      "**Adenosin** öffnet über A1-Rezeptoren dieselben GIRK-Kanäle → kurzer AV-Block nach schneller Bolusgabe (Therapie von AV-Knoten-Reentry-Tachykardien).",
      { h: "Elektrolyte verändern das Membranpotenzial" },
      { kette: [
        "Hyperkaliämie: Kalium außen ↑",
        "Ruhepotenzial weniger negativ",
        "Ein Teil der Natriumkanäle bleibt inaktiviert → langsamerer Aufstrich → breiter QRS, Leitungsblöcke",
        "Gleichzeitig mehr Kaliumleitfähigkeit (IKr) → schnellere Repolarisation → hohe, spitze T-Wellen",
        "==Endstrecke: Sinuswellen-Muster, Kammerflimmern oder Asystolie=="
      ], titel: "Hyperkaliämie" },
      { ul: [
        "**Hypokaliämie:** weniger Kaliumleitfähigkeit → verzögerte Repolarisation (U-Welle, scheinbar langes QT) → Extrasystolen, Torsade de pointes; Digitalis wird toxischer.",
        "**Hypokalzämie** verlängert das QT (längere ST-Strecke), **Hyperkalzämie** verkürzt es."
      ] }
    ],
    merke: [
      "Ruhepotenzial ≈ Kalium-Gleichgewichtspotenzial (IK1) → das Kalium außen bestimmt die Erregbarkeit.",
      "Aufstrich Arbeitsmyokard = Natrium (schnell); Sinus- und AV-Knoten = Calcium (langsam).",
      "Langes Plateau → lange Refraktärzeit → kein Tetanus.",
      "Phase 4 im Sinusknoten = If (HCN4, cAMP-verstärkt) + Calcium-Uhr (NCX).",
      "Medikamentöse QT-Verlängerung = fast immer Blockade des hERG-Kanals (IKr)."
    ],
    warum: [
      { q: "Warum schützt Calcium i.v. bei Hyperkaliämie das Herz, obwohl es das Kalium nicht senkt?", a: "Hyperkaliämie verschiebt das Ruhepotenzial näher an das Schwellenpotenzial, und teilweise inaktivierte Natriumkanäle verlangsamen die Leitung. Erhöhtes Calcium außen verschiebt das Schwellenpotenzial zu positiveren Werten und stellt den Abstand zwischen Ruhe- und Schwellenpotenzial wieder her (Membranstabilisierung; der genaue Mechanismus wird noch diskutiert). Die Wirkung beginnt innerhalb von Minuten und hält nur etwa 30–60 Minuten – deshalb muss Kalium zusätzlich in die Zellen verschoben (Insulin/Glukose, β2-Agonisten) und ausgeschieden werden." },
      { q: "Warum bremst Adenosin die AV-Überleitung so stark, das Arbeitsmyokard aber kaum?", a: "AV-Knotenzellen arbeiten mit langsamen, calciumgetragenen Aktionspotenzialen. Die über A1-Rezeptoren geöffneten GIRK-Kanäle hyperpolarisieren sie, und der cAMP-Abfall senkt den Calciumeinstrom – beides blockiert die Leitung kurz. Das Arbeitsmyokard hat einen schnellen Natrium-Aufstrich, der davon kaum beeinflusst wird." }
    ],
    klinik: [
      "QT-verlängernde Medikamente in der Anästhesie (z.B. Ondansetron, Droperidol, Haloperidol, Methadon, Makrolide): bei angeborenem Long-QT-Syndrom vermeiden bzw. nur unter EKG-Kontrolle; Magnesium und Defibrillator bereithalten, Sympathikusspitzen vermeiden.",
      "Natriumkanalblocker (Klasse-I-Antiarrhythmika, Lokalanästhetika in toxischer Dosis) können ein Brugada-Muster demaskieren – Arzneimittelliste unter brugadadrugs.org prüfen.",
      "Hyperkaliämie (z.B. Succinylcholin bei Denervierung, Massivtransfusion, Reperfusion): sofort Calcium, dann Kalium nach intrazellulär verschieben und ausscheiden."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Welcher Ionenstrom bestimmt das Ruhepotenzial des Arbeitsmyokards, und wie hoch ist es?", a: "Der einwärtsgleichrichtende Kaliumstrom IK1 (Kanäle Kir2.x); das Ruhepotenzial liegt bei ca. −85 bis −90 mV, nahe dem Kalium-Gleichgewichtspotenzial." },
      { q: "Spezialwissen Herz: Welche Ströme tragen die Phasen 0 bis 4 des ventrikulären Aktionspotenzials?", a: "0: Natriumeinstrom (Nav1.5); 1: transienter Kaliumausstrom (Ito); 2: Plateau aus Calciumeinstrom (L-Typ) und Kaliumausstrom (IKs/IKr); 3: Repolarisation über IKr, IKs, IK1; 4: Ruhepotenzial durch IK1." },
      { q: "Spezialwissen Herz: Warum kann das Herz nicht tetanisch kontrahieren?", a: "Das lange Plateau hält die Natriumkanäle fast während der ganzen Kontraktion inaktiviert – die Refraktärzeit reicht bis in die Erschlaffung; eine neue Erregung ist erst nach der Repolarisation möglich." },
      { q: "Spezialwissen Herz: Welche Mechanismen erzeugen die spontane diastolische Depolarisation im Sinusknoten?", a: "Membranuhr: If über HCN4-Kanäle (durch cAMP verstärkt), T-Typ-Calciumstrom, abnehmende Kaliumleitfähigkeit. Calcium-Uhr: spontane Calciumfreisetzungen aus dem SR erzeugen über den Natrium-Calcium-Austauscher einen Einwärtsstrom. Der Aufstrich wird vom L-Typ-Calciumstrom getragen." },
      { q: "Spezialwissen Herz: Warum ist die Leitung im AV-Knoten langsam und welchen Zweck hat das?", a: "Calciumgetragene Aktionspotenziale und wenige Gap Junctions → ca. 0,01–0,05 m/s. Die Verzögerung erlaubt die Vorhofkontraktion vor der Kammersystole und schützt die Kammern bei Vorhofflimmern vor zu hohen Frequenzen." },
      { q: "Spezialwissen Herz: Wie entstehen QRS-Verbreiterung und spitze T-Wellen bei Hyperkaliämie?", a: "Das weniger negative Ruhepotenzial inaktiviert einen Teil der Natriumkanäle → langsamer Aufstrich, breiter QRS. Die erhöhte Kaliumleitfähigkeit (IKr) beschleunigt die Repolarisation → hohe, spitze T-Wellen." },
      { q: "Spezialwissen Herz: Wie hoch ist die intrinsische Herzfrequenz und was zeigt die niedrigere Ruhefrequenz?", a: "Beim jungen Erwachsenen ca. 100–110/min (ca. 118 − 0,57 × Alter, Jose & Collison 1970). Die niedrigere Ruhefrequenz zeigt, dass in Ruhe der Vagus überwiegt." }
    ]
  });

  CH.push({
    id: "ekk",
    level: "Zelle",
    title: "Elektromechanische Kopplung, Kontraktion und Erschlaffung",
    leitfrage: "Wie wird aus einem elektrischen Signal Kraft – und warum kostet sogar das Erschlaffen Energie?",
    einfach: "Calcium ist der Schalter der Kontraktion: Strömt es in die Zelle, greifen die Myosinköpfe nach dem Aktin und ziehen. Damit das Herz danach wieder erschlafft, muss das Calcium aktiv zurückgepumpt werden – das kostet Energie. Deshalb leidet bei Sauerstoffmangel zuerst die Erschlaffung und erst danach die Kraft.",
    body: [
      { h: "Calcium-induzierte Calciumfreisetzung" },
      { kette: [
        "Aktionspotenzial erreicht über die T-Tubuli das Zellinnere",
        "L-Typ-Calciumkanäle öffnen → eine kleine Menge 'Trigger-Calcium' strömt ein",
        "Trigger-Calcium öffnet die Ryanodin-Rezeptoren (RyR2) des sarkoplasmatischen Retikulums",
        "==Eine viel größere Calciummenge wird aus dem Speicher freigesetzt== (Calcium-induzierte Calciumfreisetzung)",
        "Das freie Calcium in der Zelle steigt von ca. 0,1 auf etwa 1 µmol/l (Bers 2002) → Kontraktion"
      ], titel: "Vom Signal zum Calcium" },
      "==Im Unterschied zum Skelettmuskel braucht das Herz dafür Calcium von außen==: Beim Skelettmuskel sind Spannungssensor und Freisetzungskanal (RyR1) mechanisch gekoppelt, beim Herzen öffnet erst das einströmende Calcium den RyR2.",
      { h: "Der Querbrückenzyklus" },
      { kette: [
        "Calcium bindet an Troponin C",
        "Troponin I gibt seine Hemmung frei, Tropomyosin gleitet zur Seite → die Bindungsstellen am Aktin liegen frei",
        "Myosinköpfe binden an Aktin, geben Phosphat ab und kippen: **Kraftschlag**",
        "ATP bindet → der Kopf löst sich; die Spaltung von ATP spannt ihn für den nächsten Zyklus"
      ] },
      "Das Herz kann – anders als der Skelettmuskel – keine zusätzlichen Muskelfasern dazuschalten. ==Die Kraft wird deshalb über die freigesetzte Calciummenge und über die Calciumempfindlichkeit der Myofilamente abgestuft.==",
      { h: "Erschlaffung: Calcium muss wieder raus" },
      { table: { head: ["Transportweg", "Anteil beim Menschen (ca.)", "Regulation"], rows: [
        ["SERCA2a: pumpt zurück ins sarkoplasmatische Retikulum", "70 %", "Wird durch Phospholamban gebremst; Phosphorylierung von Phospholamban (z.B. durch Sympathikus) löst die Bremse"],
        ["Natrium-Calcium-Austauscher (NCX): 3 Na⁺ hinein, 1 Ca²⁺ hinaus", "28 %", "Angetrieben vom Natriumgradienten (→ Digoxin)"],
        ["Calciumpumpe der Zellmembran, Mitochondrien", "ca. 2 %", "Gering"]
      ] } },
      "Werte nach Bers (2002), gemessen an Kaninchen- und Menschenmyokard; bei der Ratte übernimmt SERCA über 90 %. Pro Herzschlag muss genau so viel Calcium über den NCX hinaus, wie über die L-Typ-Kanäle hereingekommen ist.",
      { kette: [
        "SERCA-Pumpe und Lösen der Querbrücken brauchen ATP",
        "Bei Ischämie fehlt ATP",
        "Calcium bleibt länger in der Zelle, Querbrücken lösen sich langsamer",
        "==Zuerst ist die Erschlaffung gestört (diastolische Dysfunktion), erst danach die Kontraktion=="
      ], titel: "Warum Erschlaffung aktiv ist" },
      "Das entspricht der **Ischämiekaskade** (Nesto & Kowalchuk 1987): Durchblutungsstörung → diastolische Dysfunktion → systolische Dysfunktion → EKG-Veränderungen → Angina pectoris. ==Die Angina kommt also zuletzt.==",
      { h: "Was der Sympathikus in der Zelle verändert" },
      "Über β1-Rezeptoren, cAMP und die **Proteinkinase A** werden phosphoryliert: L-Typ-Kanäle (mehr Trigger-Calcium), RyR2, **Phospholamban** (SERCA arbeitet schneller → schnellere Erschlaffung und mehr gespeichertes Calcium für den nächsten Schlag) und **Troponin I** (Calcium löst sich schneller → schnellere Erschlaffung). ==Ergebnis: Das Herz schlägt kräftiger UND erschlafft schneller== – wichtig, weil bei hoher Frequenz die Diastole schrumpft.",
      { h: "Kraft-Frequenz-Beziehung" },
      "Im gesunden Herzen steigt die Kraft mit der Frequenz (**Bowditch-Treppe**), weil pro Minute mehr Calcium einströmt und gespeichert wird. ==Im insuffizienten Herzen (verminderte SERCA-Aktivität) bleibt dieser Effekt aus oder kehrt sich um – Tachykardie schwächt dieses Herz zusätzlich.==",
      { h: "Medikamente an der Kontraktionsmaschine" },
      { ul: [
        "**Katecholamine (β1) und PDE-3-Hemmer (Milrinon):** erhöhen cAMP → mehr Kraft, schnellere Erschlaffung; Milrinon erweitert zusätzlich die Gefäße ('Inodilatator').",
        "**Levosimendan:** erhöht die Calciumempfindlichkeit von Troponin C nur, solange Calcium gebunden ist → ==mehr Kraft ohne Erschlaffungsstörung==; öffnet zusätzlich ATP-abhängige Kaliumkanäle (Gefäßerweiterung); aktiver Metabolit mit sehr langer Halbwertszeit.",
        "**Digoxin:** hemmt die Na⁺/K⁺-ATPase → Natrium innen ↑ → der NCX schafft weniger Calcium hinaus → mehr Calcium im Speicher.",
        "**Volatile Anästhetika:** dosisabhängig negativ inotrop (weniger Calciumeinstrom und -freisetzung, geringere Empfindlichkeit der Myofilamente); Propofol in geringerem Maß.",
        "**Dantrolen** hemmt RyR1 im Skelettmuskel, am Herz-RyR2 kaum → kein relevanter negativ inotroper Effekt."
      ] }
    ],
    merke: [
      "Kleiner Calciumeinstrom (L-Typ) → große Freisetzung aus dem Speicher (RyR2) = Calcium-induzierte Calciumfreisetzung.",
      "Kraft wird über Calciummenge und Calciumempfindlichkeit abgestuft, nicht über das Dazuschalten von Fasern.",
      "Erschlaffung ist aktiv: SERCA2a (ca. 70 %) und NCX (ca. 28 %).",
      "Sympathikus (Proteinkinase A) → mehr Kraft UND schnellere Erschlaffung.",
      "Ischämie stört zuerst die Erschlaffung, dann die Kontraktion; Angina kommt zuletzt."
    ],
    warum: [
      { q: "Warum macht Levosimendan keine Erschlaffungsstörung, obwohl es die Kraft bei gleichem Calcium erhöht?", a: "Es stabilisiert die calciumgebundene Form von Troponin C nur, solange Calcium gebunden ist. Fällt das Calcium in der Diastole ab, verliert sich der Effekt. Die Kraft steigt also in der Systole, die Erschlaffung bleibt erhalten – und weil kein cAMP-Anstieg nötig ist, steigt der Sauerstoffverbrauch weniger als unter Katecholaminen." },
      { q: "Warum ist die Kraft-Frequenz-Beziehung bei Herzinsuffizienz für die Narkoseführung wichtig?", a: "Im gesunden Herzen steigert eine höhere Frequenz die Kraft. Im insuffizienten Herzen mit schwacher SERCA bleibt das aus oder kehrt sich um. Gleichzeitig verkürzt die Tachykardie die Diastole, also die Füllungs- und Durchblutungszeit. Tachykardien sind daher bei Herzinsuffizienz doppelt ungünstig." }
    ],
    klinik: [
      "Diastolische Dysfunktion (Hypertrophie, Alter, Herzinsuffizienz mit erhaltener Ejektionsfraktion): Die Füllung hängt von ausreichender Diastolendauer und der Vorhofkontraktion ab → Tachykardie und Vorhofflimmern werden schlecht vertragen.",
      "Calcium i.v. steigert die Kraft nur kurz und vor allem bei niedrigem ionisiertem Calcium (z.B. nach Massivtransfusion durch Citrat).",
      "Volatile Anästhetika und Propofol wirken negativ inotrop – bei eingeschränkter Pumpfunktion vorsichtig titrieren."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Was versteht man unter Calcium-induzierter Calciumfreisetzung?", a: "Der kleine Calciumeinstrom über L-Typ-Kanäle während des Plateaus öffnet die RyR2 des sarkoplasmatischen Retikulums, die eine viel größere Calciummenge freisetzen (frei zytosolisch von ca. 0,1 auf ca. 1 µmol/l)." },
      { q: "Spezialwissen Herz: Über welche Wege wird Calcium in der Diastole entfernt, und mit welchen Anteilen beim Menschen?", a: "SERCA2a ins sarkoplasmatische Retikulum ca. 70 %, Natrium-Calcium-Austauscher ca. 28 %, Calciumpumpe der Zellmembran und Mitochondrien ca. 2 % (Bers 2002)." },
      { q: "Spezialwissen Herz: Welche Rolle spielt Phospholamban?", a: "Es bremst die SERCA2a im dephosphorylierten Zustand. Die Phosphorylierung durch die Proteinkinase A (Sympathikus) löst die Bremse → schnellere Erschlaffung und mehr gespeichertes Calcium für die nächste Kontraktion." },
      { q: "Spezialwissen Herz: Welche Zielproteine phosphoryliert die Proteinkinase A nach β1-Stimulation, und mit welcher Folge?", a: "L-Typ-Calciumkanäle, RyR2, Phospholamban, Troponin I und Myosin-bindendes Protein C → stärkere Kontraktion (inotrop) und schnellere Erschlaffung (lusitrop)." },
      { q: "Spezialwissen Herz: Warum ist in der Ischämie die Erschlaffung früher gestört als die Kontraktion?", a: "Weil Erschlaffung aktiv ist: Die SERCA-Pumpe und das Lösen der Querbrücken verbrauchen ATP. Fehlt ATP, bleibt Calcium länger in der Zelle – diastolische vor systolischer Dysfunktion (Ischämiekaskade)." },
      { q: "Spezialwissen Herz: Wie wirken Levosimendan und Digoxin auf die Kontraktilität?", a: "Levosimendan: calciumabhängige Sensibilisierung von Troponin C (plus Gefäßerweiterung über ATP-abhängige Kaliumkanäle). Digoxin: Hemmung der Na⁺/K⁺-ATPase → weniger Calciumausstrom über den NCX → mehr Calcium im Speicher." }
    ]
  });

  CH.push({
    id: "ekg",
    level: "Organ",
    title: "Das EKG – die elektrische Herzaktion von außen gesehen",
    leitfrage: "Was genau zeichnet das Elektrokardiogramm (EKG) auf, und wie liest man aus Wellen und Strecken die Vorgänge im Herzen ab?",
    einfach: "Das EKG misst auf der Haut die Summe aller elektrischen Ströme der Herzzellen. Läuft die Erregung auf eine Elektrode zu, schlägt die Kurve nach oben aus, läuft sie weg, nach unten. Jede Welle entspricht einem Schritt: P = Vorhöfe erregen, QRS = Kammern erregen, T = Kammern erholen sich. Die Abstände dazwischen verraten, wie schnell die Erregung weitergeleitet wird.",
    body: [
      { h: "Grundprinzip" },
      "Während der Erregung ist ein Teil des Herzens schon depolarisiert (außen negativ), der Rest noch nicht. Diese Ladungstrennung wirkt wie ein elektrischer **Dipol**, dessen Summenvektor die Elektroden messen. ==Bewegt sich die Erregungsfront auf die messende Elektrode zu, entsteht ein positiver Ausschlag, bewegt sie sich weg, ein negativer.== Ist das ganze Herz gleichmäßig erregt (Plateau) oder in Ruhe, fließt kein Summenstrom → die Linie ist isoelektrisch.",
      { h: "Ableitungen" },
      { ul: [
        "**Extremitätenableitungen nach Einthoven** (bipolar): I (rechter Arm → linker Arm), II (rechter Arm → linkes Bein), III (linker Arm → linkes Bein).",
        "**Nach Goldberger** (verstärkte unipolare Extremitätenableitungen): aVR, aVL, aVF.",
        "**Brustwandableitungen nach Wilson** (unipolar): V1–V6, bilden die Horizontalebene ab.",
        "Zuordnung zu Wandabschnitten: ==II, III, aVF = Hinterwand (inferior); I, aVL, V5–V6 = Seitenwand (lateral); V1–V4 = Septum und Vorderwand=="
      ] },
      { h: "Wellen, Strecken und Normalwerte (Erwachsene)" },
      { table: { head: ["Abschnitt", "Entspricht", "Normal (ca.)"], rows: [
        ["P-Welle", "Erregung der Vorhöfe", "Dauer < 120 ms"],
        ["PQ-Zeit", "Vorhoferregung + Verzögerung im AV-Knoten und His-Purkinje-System", "120–200 ms"],
        ["QRS-Komplex", "Erregung der Kammern", "< 100–120 ms (≥ 120 ms = kompletter Schenkelblock)"],
        ["ST-Strecke", "Plateau – alle Kammerzellen erregt", "isoelektrisch"],
        ["T-Welle", "Repolarisation der Kammern", "meist gleichsinnig zum QRS"],
        ["QT-Zeit", "gesamte elektrische Kammeraktion", "frequenzkorrigiert (QTc) < ca. 450 ms (Männer) bzw. < ca. 460–470 ms (Frauen); > 500 ms hohes Risiko"]
      ] } },
      "Bei 25 mm/s Papiervorschub entspricht 1 mm = 40 ms und 5 mm = 200 ms; die Eichung beträgt meist 10 mm = 1 mV.",
      { formel: "QTc (Bazett) = QT / √RR-Abstand (in s)  ·  QTc (Fridericia) = QT / ∛RR-Abstand", erkl: "Die QT-Zeit wird mit steigender Frequenz kürzer und muss deshalb korrigiert werden. Die Bazett-Formel überkorrigiert bei hoher und unterkorrigiert bei niedriger Frequenz; Fridericia ist bei Tachykardie genauer." },
      { h: "Elektrische Herzachse" },
      "Die Hauptrichtung der Kammererregung in der Frontalebene liegt normal bei ca. **−30° bis +90°**. Eine Linksabweichung (z.B. linksanteriorer Hemiblock, linksventrikuläre Hypertrophie) oder Rechtsabweichung (z.B. Rechtsherzbelastung, Lungenembolie) gibt Hinweise auf Leitungsstörungen und Belastung.",
      { h: "Ischämie und Infarkt" },
      "ST-Hebungs-Infarkt nach der 4. universellen Infarktdefinition (2018): neue ST-Hebung am J-Punkt in mindestens zwei benachbarten Ableitungen von **≥ 1 mm** – in V2–V3 gelten höhere Grenzen: **≥ 2 mm** bei Männern ab 40 Jahren, **≥ 2,5 mm** bei Männern unter 40 Jahren, **≥ 1,5 mm** bei Frauen. ST-Senkungen und T-Negativierungen sprechen eher für subendokardiale Ischämie.",
      { kette: [
        "Ischämie betrifft zuerst das Subendokard",
        "Verletzungsstrom zwischen ischämischem und gesundem Gewebe",
        "Subendokardiale Ischämie → ST-Senkung; transmurale Ischämie → ST-Hebung über dem betroffenen Areal",
        "==Das EKG verändert sich erst nach diastolischer und systolischer Funktionsstörung (Ischämiekaskade) – ein unauffälliges EKG schließt Ischämie nicht aus=="
      ] },
      { h: "Leitungsstörungen" },
      { ul: [
        "**AV-Block I°:** PQ > 200 ms, jede Erregung wird übergeleitet.",
        "**AV-Block II° Typ Wenckebach (Mobitz I):** PQ wird von Schlag zu Schlag länger, bis eine Überleitung ausfällt – meist im AV-Knoten, eher harmlos.",
        "**AV-Block II° Typ Mobitz II:** plötzlicher Ausfall ohne vorherige PQ-Verlängerung – meist unterhalb des AV-Knotens, ==Gefahr des Übergangs in einen totalen Block → Schrittmacherbereitschaft==.",
        "**AV-Block III°:** Vorhöfe und Kammern schlagen unabhängig; ein Ersatzrhythmus übernimmt (AV-Übergang ca. 40–60/min mit schmalem, Kammer ca. 20–40/min mit breitem QRS).",
        "**Schenkelblock:** QRS ≥ 120 ms; ein neuer Linksschenkelblock erschwert die Ischämiediagnostik."
      ] },
      { h: "Weitere typische Befunde" },
      { ul: [
        "Hyperkaliämie: spitze T-Wellen → PQ-Verlängerung, P-Abflachung → breiter QRS → Sinuswellen.",
        "Hypokaliämie: ST-Senkung, flaches T, U-Welle.",
        "Hypothermie: Bradykardie, Osborn-Welle (J-Welle) am Ende des QRS.",
        "Lungenembolie: Sinustachykardie (häufigster Befund), Rechtsbelastungszeichen (z.B. S1Q3-Typ, Rechtsschenkelblock, T-Negativierung V1–V3) – unspezifisch und oft fehlend."
      ] }
    ],
    merke: [
      "Ausschlag nach oben = Erregung läuft auf die Elektrode zu.",
      "P = Vorhöfe, PQ 120–200 ms = Überleitung, QRS < 120 ms = Kammererregung, T = Repolarisation.",
      "II, III, aVF = inferior; I, aVL, V5–V6 = lateral; V1–V4 = anterior/septal.",
      "QT frequenzabhängig → QTc; > 500 ms = hohes Torsade-Risiko.",
      "Mobitz II und AV-Block III° → Schrittmacherbereitschaft."
    ],
    warum: [
      { q: "Warum ist die ST-Strecke normalerweise isoelektrisch?", a: "Während des Plateaus sind alle Kammerzellen gleichmäßig erregt. Es gibt dann kein Spannungsgefälle zwischen erregtem und nicht erregtem Gewebe und damit keinen Summenvektor. Erst bei Ischämie entsteht zwischen geschädigtem und gesundem Gewebe ein Verletzungsstrom, der die ST-Strecke anhebt oder senkt." },
      { q: "Warum werden intraoperativ meist die Ableitungen II und V5 überwacht?", a: "II zeigt die P-Welle gut (Rhythmusanalyse) und erfasst die Hinterwand, V5 erfasst die Seitenwand, in der Ischämien häufig auftreten. Zusammen erkannten sie in einer klassischen Studie ca. 80 % der intraoperativen Ischämien, mit zusätzlich V4 ca. 96 % (London et al. 1988)." }
    ],
    klinik: [
      "Intraoperatives Monitoring: Ableitung II (Rhythmus, inferior) + V5 (lateral); bei Risikopatienten ST-Trendanalyse.",
      "Vor Gabe QT-verlängernder Medikamente (z.B. Ondansetron, Droperidol) bei Risikopatienten QTc prüfen und Elektrolyte (Kalium, Magnesium) ausgleichen.",
      "Herzschrittmacher: Ein aufgelegter Magnet schaltet die meisten Schrittmacher auf starre (asynchrone) Stimulation um; bei Defibrillatoren (ICD) setzt er die Schocktherapie aus, ändert aber nicht die Schrittmacherfunktion (herstellerabhängig, Ausweis prüfen)."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Was bedeutet ein positiver Ausschlag im EKG?", a: "Die Erregungsfront (Summenvektor) bewegt sich auf die messende Elektrode zu; bewegt sie sich weg, entsteht ein negativer Ausschlag." },
      { q: "Spezialwissen Herz: Welche Normalwerte gelten für PQ-Zeit, QRS-Dauer und QTc?", a: "PQ 120–200 ms; QRS < 100–120 ms (≥ 120 ms = kompletter Schenkelblock); QTc < ca. 450 ms (Männer) bzw. < ca. 460–470 ms (Frauen), > 500 ms hohes Risiko." },
      { q: "Spezialwissen Herz: Welche EKG-Ableitungen bilden welche Wandabschnitte ab?", a: "II, III, aVF = inferior (Hinterwand); I, aVL, V5–V6 = lateral; V1–V4 = Septum und Vorderwand." },
      { q: "Spezialwissen Herz: Welche ST-Hebungs-Kriterien definieren einen ST-Hebungs-Infarkt?", a: "Neue ST-Hebung am J-Punkt in ≥ 2 benachbarten Ableitungen ≥ 1 mm; in V2–V3 ≥ 2 mm (Männer ≥ 40 J.), ≥ 2,5 mm (Männer < 40 J.), ≥ 1,5 mm (Frauen) (4. universelle Infarktdefinition 2018)." },
      { q: "Spezialwissen Herz: Wie unterscheiden sich AV-Block II° Typ Wenckebach und Typ Mobitz II?", a: "Wenckebach: zunehmende PQ-Verlängerung bis zum Ausfall, meist im AV-Knoten, eher harmlos. Mobitz II: plötzlicher Ausfall ohne PQ-Verlängerung, meist unterhalb des AV-Knotens, Gefahr des totalen Blocks → Schrittmacherbereitschaft." },
      { q: "Spezialwissen Herz: Welche Ableitungskombination erkennt intraoperativ die meisten Ischämien?", a: "II + V5 ca. 80 %, zusätzlich mit V4 ca. 96 % (London et al. 1988)." },
      { q: "Spezialwissen Herz: Wie wirkt ein Magnet auf Schrittmacher bzw. ICD?", a: "Schrittmacher: meist Umschaltung auf asynchrone Stimulation. ICD: Aussetzen der Schocktherapie bei unveränderter Schrittmacherfunktion (herstellerabhängig)." }
    ]
  });

  CH.push({
    id: "zyklus",
    level: "Organ",
    title: "Herzzyklus und Druck-Volumen-Schleife",
    leitfrage: "Welche vier Phasen hat ein Herzschlag, und wie lassen sich Vorlast, Nachlast und Kontraktilität in einer einzigen Grafik ablesen?",
    einfach: "Ein Herzschlag ist wie das Pumpen mit einer Spritze mit zwei Ventilen: erst alle Ventile zu und Druck aufbauen, dann Auslassventil auf und auswerfen, dann alle Ventile zu und entspannen, dann Einlassventil auf und füllen. Zeichnet man dabei Druck gegen Volumen, entsteht eine Schleife. An ihrer Form sieht man sofort, wie viel ausgeworfen wird und wie schwer die Arbeit war.",
    figure: { svg: FIG_PV, caption: "Druck-Volumen-Schleife des linken Ventrikels mit endsystolischer (ESPVR) und enddiastolischer (EDPVR) Druck-Volumen-Beziehung und arterieller Elastance (Ea). Schematisch, Werte gerundet." },
    body: [
      { h: "Die vier Phasen" },
      { ul: [
        "**① Anspannungsphase (isovolumetrische Kontraktion):** Die Mitralklappe schließt (**1. Herzton**), alle Klappen sind zu. Der Druck steigt steil, das Volumen bleibt gleich – bis der Kammerdruck den diastolischen Aortendruck (ca. 80 mmHg) übersteigt.",
        "**② Austreibungsphase:** Die Aortenklappe öffnet, erst schnelle, dann langsame Austreibung. Der linksventrikuläre Druck erreicht ca. 120 mmHg.",
        "**③ Entspannungsphase (isovolumetrische Relaxation):** Die Aortenklappe schließt (**2. Herzton**, Inzisur der Aortendruckkurve). Der Druck fällt bei geschlossenen Klappen, bis er unter den Vorhofdruck sinkt.",
        "**④ Füllungsphase:** Die Mitralklappe öffnet. Zuerst **schnelle, überwiegend passive Füllung** – der Ventrikel 'saugt' durch seinen elastischen Rückstoß (E-Welle im Doppler). Dann ruhige Phase (Diastase), zuletzt die **Vorhofkontraktion** (A-Welle)."
      ] },
      "==Die Vorhofkontraktion liefert beim jungen Gesunden nur ca. 15–20 % der Füllung, bei steifem Ventrikel und im Alter aber deutlich mehr== – deshalb verlieren diese Patienten bei Vorhofflimmern viel Schlagvolumen.",
      { h: "Typische Normalwerte (Erwachsene in Ruhe)" },
      { table: { head: ["Größe", "Wert (ca.)"], rows: [
        ["Enddiastolisches Volumen (EDV) linker Ventrikel", "ca. 120 ml (abhängig von Körpergröße und Geschlecht)"],
        ["Endsystolisches Volumen (ESV)", "ca. 50 ml"],
        ["Schlagvolumen (SV = EDV − ESV)", "ca. 70 ml"],
        ["Ejektionsfraktion (EF = SV / EDV)", "ca. 55–70 % (untere Normgrenze je nach Leitlinie 50–55 %)"],
        ["Linker Ventrikel systolisch / enddiastolisch", "ca. 120 / 5–12 mmHg"],
        ["Rechter Ventrikel systolisch / enddiastolisch", "ca. 15–30 / 0–8 mmHg"],
        ["Pulmonalarterie systolisch / diastolisch; Mitteldruck", "ca. 15–30 / 4–12 mmHg; Mitteldruck ca. 14 mmHg (≤ 20 mmHg)"],
        ["Rechter Vorhof (zentraler Venendruck)", "ca. 2–8 mmHg"]
      ] } },
      { h: "Die Druck-Volumen-Schleife lesen" },
      "Die Schleife läuft gegen den Uhrzeigersinn: A (Ende der Diastole) → B (Aortenklappe öffnet) → C (Ende der Systole) → D (Mitralklappe öffnet) → A. ==Die Breite ist das Schlagvolumen, die Fläche die äußere Herzarbeit (Schlagarbeit).==",
      { ul: [
        "**Endsystolische Druck-Volumen-Beziehung (ESPVR):** die Linie, auf der jede Schleife endet. ==Ihre Steigung (endsystolische Elastance, Ees) misst die Kontraktilität weitgehend unabhängig von der Beladung== (Suga & Sagawa 1974).",
        "**Enddiastolische Druck-Volumen-Beziehung (EDPVR):** gekrümmte Linie, beschreibt die **passive Steifigkeit**. Ein steifer Ventrikel hat eine steile EDPVR → ==schon kleine Volumenzunahmen erzeugen hohe Füllungsdrücke (Lungenstauung)==.",
        "**Arterielle Elastance (Ea)** ≈ endsystolischer Druck / Schlagvolumen: ein zusammenfassendes Maß der **Nachlast** (Gefäßwiderstand, Gefäßsteifigkeit, Frequenz).",
        "**Kopplung Ea/Ees:** beim Gesunden ca. 0,5–1. Bei ca. 0,5 arbeitet das Herz am effizientesten, bei ca. 1 leistet es die größte Schlagarbeit."
      ] },
      { h: "Was sich bei Änderungen verschiebt" },
      { table: { head: ["Änderung", "Effekt auf die Schleife"], rows: [
        ["Vorlast ↑ (mehr Volumen)", "Punkt A rückt entlang der EDPVR nach rechts → breitere Schleife, Schlagvolumen ↑ (Frank-Starling)"],
        ["Nachlast ↑", "Ea steiler → höherer Druck, ESV ↑, Schleife schmaler und höher, Schlagvolumen ↓"],
        ["Kontraktilität ↑", "ESPVR steiler bzw. nach links → ESV ↓, Schlagvolumen ↑"],
        ["Diastolische Dysfunktion", "EDPVR steiler → höherer Füllungsdruck bei gleichem Volumen"],
        ["Mitralinsuffizienz", "Keine echte Anspannungsphase: Blut fließt schon vor Öffnen der Aortenklappe zurück in den Vorhof"]
      ] } },
      { h: "Energieverbrauch" },
      "Die **Druck-Volumen-Fläche (PVA)** = Schlagarbeit + potenzielle Energie (Fläche zwischen ESPVR, EDPVR und linker Schleifenkante). ==Der Sauerstoffverbrauch des Myokards steigt linear mit dieser Fläche== (Suga). Daraus folgt: Druckarbeit ist teurer als Volumenarbeit.",
      { falle: "„Eine normale Ejektionsfraktion bedeutet eine normale Pumpfunktion.“ – Falsch. Die EF hängt von Vor- und Nachlast ab. Bei Mitralinsuffizienz wirft der Ventrikel einen Teil in den drucklosen Vorhof aus – die EF wirkt hoch, obwohl die Kontraktilität schon eingeschränkt sein kann. Ein weitgehend lastunabhängiges Maß ist die Steigung der ESPVR." }
    ],
    merke: [
      "Vier Phasen: Anspannung → Austreibung → Entspannung → Füllung (schnelle Füllung, Diastase, Vorhofkontraktion).",
      "Breite = Schlagvolumen, Fläche = Schlagarbeit; ESPVR-Steigung = Kontraktilität, EDPVR = Steifigkeit, Ea = Nachlast.",
      "EF ist lastabhängig, die ESPVR-Steigung weitgehend nicht.",
      "Sauerstoffverbrauch ∝ Druck-Volumen-Fläche → Druckarbeit ist teurer als Volumenarbeit."
    ],
    warum: [
      { q: "Warum verliert ein Patient mit steifem Ventrikel bei Vorhofflimmern so viel Schlagvolumen?", a: "Bei steiler EDPVR ist die passive frühe Füllung eingeschränkt, und die Vorhofkontraktion liefert einen großen Teil der Füllung. Fällt sie bei Vorhofflimmern weg und verkürzt die schnelle Überleitung zusätzlich die Diastole, sinkt das enddiastolische Volumen und damit nach Frank-Starling das Schlagvolumen – während Vorhof- und Lungenvenendruck steigen." },
      { q: "Warum steigt bei akuter Nachlasterhöhung das endsystolische Volumen?", a: "Der Ventrikel muss einen höheren Druck aufbauen, bevor die Aortenklappe öffnet. Bei gleicher Kontraktilität (gleiche ESPVR) endet die Austreibung früher auf der ESPVR, also bei größerem Restvolumen – das Schlagvolumen sinkt." }
    ],
    klinik: [
      "Aortenstenose: hohe Drucklast, steife hypertrophe Wand → Sinusrhythmus und Vorlast erhalten, Tachykardie und Hypotonie vermeiden.",
      "Steile EDPVR: Volumengabe erhöht den Füllungsdruck stark (Lungenödem), ohne das Schlagvolumen wesentlich zu steigern → in kleinen Boli titrieren.",
      "Echokardiographie: Die diastolische Funktion wird u.a. über das Verhältnis der frühen zur späten Füllung (E/A) und die Bewegung des Mitralrings (E/e′) abgeschätzt."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: In welche vier Phasen gliedert sich der Herzzyklus und welche Klappenereignisse begrenzen sie?", a: "Anspannung/isovolumetrische Kontraktion (Mitralklappenschluss bis Aortenklappenöffnung), Austreibung (bis Aortenklappenschluss), Entspannung/isovolumetrische Relaxation (bis Mitralklappenöffnung), Füllung (schnelle Füllung, Diastase, Vorhofkontraktion bis Mitralklappenschluss)." },
      { q: "Spezialwissen Herz: Was zeigen Breite und Fläche einer Druck-Volumen-Schleife?", a: "Die Breite ist das Schlagvolumen (EDV − ESV), die Fläche die äußere Schlagarbeit." },
      { q: "Spezialwissen Herz: Was beschreiben ESPVR, EDPVR und Ea?", a: "ESPVR: Steigung Ees = weitgehend lastunabhängige Kontraktilität. EDPVR: passive diastolische Steifigkeit. Ea ≈ endsystolischer Druck/Schlagvolumen: zusammenfassende Nachlast." },
      { q: "Spezialwissen Herz: Wie verändert eine akute Nachlasterhöhung die Druck-Volumen-Schleife?", a: "Ea wird steiler: höherer Austreibungsdruck, größeres endsystolisches Volumen, schmalere und höhere Schleife, Schlagvolumen sinkt." },
      { q: "Spezialwissen Herz: Wie hängt der myokardiale Sauerstoffverbrauch mit der Druck-Volumen-Schleife zusammen?", a: "Er steigt linear mit der Druck-Volumen-Fläche (Schlagarbeit + potenzielle Energie). Druckarbeit ist daher energetisch teurer als Volumenarbeit." },
      { q: "Spezialwissen Herz: Wie groß ist der Anteil der Vorhofkontraktion an der Kammerfüllung?", a: "Beim jungen Gesunden ca. 15–20 %, bei steifem Ventrikel und im Alter deutlich mehr – deshalb ist der Verlust bei Vorhofflimmern dort besonders relevant." },
      { q: "Spezialwissen Herz: Welcher Wert der ventrikulo-arteriellen Kopplung Ea/Ees ist normal?", a: "Beim Gesunden ca. 0,5–1: bei ca. 0,5 maximaler Wirkungsgrad, bei ca. 1 maximale Schlagarbeit; höhere Werte zeigen eine Entkopplung (z.B. hohe Nachlast bei schwacher Kontraktilität)." }
    ]
  });

  CH.push({
    id: "klappen",
    level: "Organ",
    title: "Herzklappen, Herztöne und Klappenfehler",
    leitfrage: "Warum gilt für Stenosen 'langsam, voll, eng' und für Insuffizienzen 'schnell, voll, weit' – und was bedeutet das für die Narkose?",
    einfach: "Herzklappen sind Rückschlagventile: Sie öffnen und schließen sich nur durch den Druckunterschied. Eine verengte Klappe (Stenose) ist wie ein enger Flaschenhals – das Blut braucht Zeit und Druck, um durchzukommen. Eine undichte Klappe (Insuffizienz) lässt Blut zurückfließen – je länger die Pause und je höher der Gegendruck, desto mehr fließt zurück.",
    body: [
      { h: "Aufbau" },
      { ul: [
        "**Segelklappen (AV-Klappen):** Mitralklappe (2 Segel) und Trikuspidalklappe (3 Segel). Sehnenfäden (Chordae tendineae) und Papillarmuskeln verhindern, dass die Segel in der Systole in den Vorhof durchschlagen.",
        "**Taschenklappen:** Aorten- und Pulmonalklappe mit je 3 Taschen.",
        "Normale Öffnungsfläche: Aortenklappe ca. 3–4 cm², Mitralklappe ca. 4–6 cm²."
      ] },
      "Der **posteromediale Papillarmuskel** wird meist nur aus einem Gefäß versorgt – ==er reißt beim Hinterwandinfarkt häufiger als der anterolaterale (doppelt versorgte) und verursacht eine akute schwere Mitralinsuffizienz==.",
      { h: "Herztöne" },
      { table: { head: ["Ton", "Entstehung", "Bedeutung"], rows: [
        ["1. Herzton", "Schluss von Mitral- und Trikuspidalklappe", "Beginn der Systole"],
        ["2. Herzton", "Schluss von Aorten- und Pulmonalklappe", "Ende der Systole; physiologische Spaltung bei Inspiration (Pulmonalklappe schließt später)"],
        ["3. Herzton", "Frühdiastolische schnelle Füllung", "Bei Kindern, Jugendlichen und Schwangeren normal; sonst Zeichen von Volumenüberlastung/Herzinsuffizienz"],
        ["4. Herzton", "Vorhofkontraktion gegen steifen Ventrikel", "Diastolische Dysfunktion; fehlt bei Vorhofflimmern"]
      ] } },
      { h: "Die vier wichtigsten Klappenfehler" },
      { table: { head: ["Fehler", "Belastung des Herzens", "Schweregrad 'schwer' (ESC/EACTS 2021)", "Hämodynamische Ziele"], rows: [
        ["Aortenstenose", "Drucklast → konzentrische Hypertrophie, steifer Ventrikel, subendokardiale Ischämie", "Öffnungsfläche < 1,0 cm², mittlerer Gradient ≥ 40 mmHg, Maximalgeschwindigkeit ≥ 4 m/s", "Sinusrhythmus, Frequenz niedrig-normal, Vorlast erhalten, Gefäßwiderstand und Blutdruck halten"],
        ["Mitralstenose", "Vorhofdruck ↑ → Lungenstauung, Vorhofflimmern, pulmonale Hypertonie", "Klinisch relevant ab Öffnungsfläche ≤ 1,5 cm²", "Frequenz niedrig (lange Diastole), Sinusrhythmus, Anstieg des Lungengefäßwiderstands vermeiden"],
        ["Aorteninsuffizienz", "Volumenlast → exzentrische Hypertrophie", "z.B. Regurgitationsvolumen ≥ 60 ml", "Frequenz normal bis hoch, Nachlast niedrig, Vorlast erhalten; Bradykardie vermeiden"],
        ["Mitralinsuffizienz", "Volumenlast von Vorhof und Kammer", "z.B. Regurgitationsvolumen ≥ 60 ml (primäre Form)", "Frequenz normal bis hoch, Nachlast niedrig, Vorlast erhalten"]
      ] } },
      { kette: [
        "Stenose: Fluss durch eine enge Öffnung braucht Zeit",
        "Tachykardie verkürzt v.a. die Diastole (Mitralstenose) bzw. erhöht den Bedarf eines hypertrophen, schlecht durchbluteten Ventrikels (Aortenstenose)",
        "==Deshalb: langsam (Frequenz niedrig-normal), voll (Vorlast erhalten), eng (Gefäßwiderstand halten)=="
      ], titel: "Merkregel Stenose" },
      { kette: [
        "Insuffizienz: Rückfluss hängt von der Zeit (Diastole bei Aorteninsuffizienz) und vom Gegendruck (Nachlast) ab",
        "Höhere Frequenz verkürzt die Rückflusszeit, niedrigere Nachlast fördert den Vorwärtsfluss",
        "==Deshalb: schnell (Frequenz normal bis hoch), voll (Vorlast erhalten), weit (niedriger Gefäßwiderstand)=="
      ], titel: "Merkregel Insuffizienz" },
      { h: "Besonderheiten" },
      { ul: [
        "**Aortenstenose:** Das Schlagvolumen ist weitgehend fixiert → ==ein Blutdruckabfall wird kaum durch mehr Auswurf kompensiert und senkt sofort die Koronarperfusion des hypertrophen Ventrikels== → Abwärtsspirale. Hypotonie früh mit Vasopressor (z.B. Phenylephrin, Noradrenalin) behandeln.",
        "**Mitralinsuffizienz:** Die EF wird durch den Rückfluss in den Vorhof geschönt – ==eine EF ≤ 60 % gilt bei schwerer Mitralinsuffizienz bereits als Zeichen beginnender Ventrikeldysfunktion== (OP-Indikation nach ESC/EACTS 2021).",
        "**Hypertrophe obstruktive Kardiomyopathie:** dynamische Ausflussbahnobstruktion – sie wird durch Hypovolämie, Tachykardie, Inotropika und Vasodilatatoren schlimmer, durch Volumen, β-Blocker und reine Vasokonstriktoren (Phenylephrin) besser."
      ] }
    ],
    merke: [
      "1. Herzton = AV-Klappenschluss, 2. = Taschenklappenschluss; 3. = schnelle Füllung, 4. = Vorhof gegen steifen Ventrikel.",
      "Schwere Aortenstenose: < 1,0 cm², ≥ 40 mmHg mittlerer Gradient, ≥ 4 m/s.",
      "Stenose: langsam, voll, eng. Insuffizienz: schnell, voll, weit.",
      "Aortenstenose: fixes Schlagvolumen → Hypotonie sofort mit Vasopressor behandeln.",
      "Hypertrophe obstruktive Kardiomyopathie: Volumen, β-Blocker, Phenylephrin – keine Inotropika, keine Vasodilatatoren."
    ],
    warum: [
      { q: "Warum ist eine Spinalanästhesie bei schwerer Aortenstenose problematisch?", a: "Die plötzliche Sympathikolyse senkt Gefäßwiderstand und Vorlast. Bei fixem Schlagvolumen kann das Herz den Druckabfall nicht durch mehr Auswurf kompensieren. Der Blutdruck und damit der koronare Perfusionsdruck des hypertrophen, ischämiegefährdeten Ventrikels fallen stark – es droht eine Ischämie-Hypotonie-Spirale. Langsam titrierte Verfahren (z.B. Katheter-Epiduralanästhesie) oder eine sorgfältig geführte Allgemeinanästhesie sind kontrollierbarer." },
      { q: "Warum verschlechtert eine Bradykardie die Aorteninsuffizienz?", a: "Das Blut fließt in der Diastole aus der Aorta zurück in die Kammer. Eine lange Diastole verlängert die Rückflusszeit, das Regurgitationsvolumen steigt, der diastolische Aortendruck fällt und der Ventrikel wird überdehnt." }
    ],
    klinik: [
      "Vor elektiven Eingriffen: schwere symptomatische Klappenfehler (v.a. Aortenstenose) kardiologisch abklären und ggf. vorher behandeln (ESC 2022).",
      "Endokarditisprophylaxe nur bei Hochrisikopatienten (z.B. Klappenprothese, frühere Endokarditis) und bestimmten Eingriffen.",
      "Antikoagulation bei mechanischen Klappen: Überbrückung perioperativ nach Klappenposition und Thromboserisiko planen."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Wodurch entstehen der 1. bis 4. Herzton?", a: "1. Schluss der AV-Klappen; 2. Schluss der Taschenklappen (physiologisch inspiratorisch gespalten); 3. frühdiastolische schnelle Füllung (beim Jungen normal, sonst Volumenüberlastung); 4. Vorhofkontraktion gegen steifen Ventrikel (fehlt bei Vorhofflimmern)." },
      { q: "Spezialwissen Herz: Welche Kriterien definieren eine schwere Aortenstenose?", a: "Öffnungsfläche < 1,0 cm², mittlerer Gradient ≥ 40 mmHg, maximale Flussgeschwindigkeit ≥ 4 m/s (ESC/EACTS 2021)." },
      { q: "Spezialwissen Herz: Welche hämodynamischen Ziele gelten bei Aortenstenose bzw. Mitralstenose?", a: "'Langsam, voll, eng': Frequenz niedrig-normal, Sinusrhythmus, Vorlast erhalten, Gefäßwiderstand/Blutdruck halten; bei Mitralstenose zusätzlich Anstieg des Lungengefäßwiderstands vermeiden." },
      { q: "Spezialwissen Herz: Welche hämodynamischen Ziele gelten bei Aorten- bzw. Mitralinsuffizienz?", a: "'Schnell, voll, weit': Frequenz normal bis hoch, Vorlast erhalten, Nachlast niedrig; Bradykardie und Vasokonstriktion vermeiden." },
      { q: "Spezialwissen Herz: Warum ist der posteromediale Papillarmuskel rupturgefährdeter?", a: "Er wird meist nur aus einem Gefäß versorgt (der anterolaterale doppelt); beim Hinterwandinfarkt kann er reißen und eine akute schwere Mitralinsuffizienz verursachen." },
      { q: "Spezialwissen Herz: Was verschlechtert bzw. bessert die Obstruktion bei hypertropher obstruktiver Kardiomyopathie?", a: "Verschlechtert: Hypovolämie, Tachykardie, Inotropika, Vasodilatatoren. Bessert: Volumen, β-Blocker, reine Vasokonstriktoren (Phenylephrin)." }
    ]
  });

  CH.push({
    id: "determinanten",
    level: "Organ",
    title: "Vorlast, Nachlast, Kontraktilität und Herzfrequenz",
    leitfrage: "Welche vier Größen bestimmen, wie viel Blut das Herz pro Minute pumpt – und wie hängen sie physikalisch und molekular zusammen?",
    einfach: "Wie viel eine Pumpe fördert, hängt von vier Dingen ab: wie gut sie gefüllt wird (Vorlast), wie stark der Gegendruck ist (Nachlast), wie kräftig der Motor ist (Kontraktilität) und wie oft sie pumpt (Frequenz). Eine gut gefüllte Herzkammer pumpt kräftiger – bis zu einer Grenze. Eine große, dünnwandige Kammer muss dagegen mehr Spannung aufbringen als eine kleine, dicke.",
    body: [
      { formel: "HZV = Herzfrequenz × Schlagvolumen", erkl: "Herzzeitvolumen (HZV) in Ruhe ca. 4–6 l/min. Das Schlagvolumen hängt von Vorlast, Nachlast und Kontraktilität ab." },
      { h: "Vorlast und Frank-Starling-Mechanismus" },
      "Die **Vorlast** ist die Dehnung der Herzmuskelfasern am Ende der Diastole. ==Am besten wird sie über das enddiastolische Volumen abgeschätzt.== Füllungsdrücke (zentraler Venendruck, pulmonalarterieller Verschlussdruck) sind nur indirekte Maße – sie hängen auch von der Steifigkeit der Kammer, vom Druck im Brustkorb (z.B. PEEP = positiver endexspiratorischer Druck) und von den Klappen ab.",
      { kette: [
        "Mehr Füllung → Sarkomere werden gedehnt (im Bereich ca. 1,8–2,3 µm)",
        "Die Myofilamente reagieren empfindlicher auf Calcium (längenabhängige Aktivierung; engerer Abstand der Filamente, Zug am Titin aktiviert das Myosin)",
        "==Mehr Kraft bei gleicher Calciummenge → größeres Schlagvolumen== (Frank-Starling-Mechanismus; Patterson & Starling 1914)"
      ], titel: "Frank-Starling" },
      { falle: "„Frank-Starling beruht auf besserer Überlappung von Aktin und Myosin.“ – Im physiologischen Bereich ist das nur ein kleiner Teil. Entscheidend ist die längenabhängige Calcium-Sensibilisierung. Titin und Bindegewebe verhindern, dass das gesunde Herz so stark überdehnt wird, dass die Kraft wieder abnimmt." },
      "Das gesunde Herz arbeitet auf einer **steilen** Starling-Kurve. ==Das insuffiziente Herz hat eine flache Kurve: Mehr Volumen erhöht dort vor allem den Füllungsdruck (Stauung), kaum das Schlagvolumen.==",
      { h: "Nachlast und Laplace-Gesetz" },
      "Die **Nachlast** ist die Spannung, die die Kammerwand während der Austreibung aufbringen muss.",
      { formel: "Wandspannung σ = Druck × Radius / (2 × Wanddicke)", erkl: "Laplace-Gesetz (vereinfacht für eine Kugel)." },
      { ul: [
        "Dilatierte Kammer (Radius ↑) → ==höhere Wandspannung bei gleichem Druck → höherer Sauerstoffverbrauch==.",
        "Hypertrophie (Wanddicke ↑) → senkt die Wandspannung wieder – auf Kosten von Steifigkeit und Durchblutung.",
        "Der systemische Gefäßwiderstand (SVR) erfasst nur den 'Widerstandsanteil' der Nachlast. Gefäßsteifigkeit und Wellenreflexion kommen hinzu; die arterielle Elastance (Ea) fasst alles zusammen."
      ] },
      { formel: "SVR = 80 × (MAP − ZVD) / HZV", erkl: "Systemischer Gefäßwiderstand in dyn·s·cm⁻⁵, normal ca. 800–1200 (MAP = mittlerer arterieller Druck, ZVD = zentraler Venendruck)." },
      { h: "Kontraktilität (Inotropie)" },
      "Die **Kontraktilität** ist die Leistungsfähigkeit des Muskels unabhängig von der Beladung. Am besten misst sie die Steigung der endsystolischen Druck-Volumen-Beziehung; die Ejektionsfraktion ist lastabhängig.",
      { ul: [
        "**Steigernd:** Sympathikus, Katecholamine, PDE-3-Hemmer, Levosimendan, Calcium bei niedrigem Calcium, höhere Frequenz (beim Gesunden).",
        "**Senkend:** Ischämie, Hypoxie, Azidose, Sepsis, niedriges ionisiertes Calcium, β-Blocker, Calciumantagonisten, volatile Anästhetika, Propofol."
      ] },
      { h: "Herzfrequenz" },
      { kette: [
        "Herzfrequenz steigt",
        "Die Systole bleibt fast gleich lang, ==die Diastole wird überproportional kürzer==",
        "Weniger Füllungszeit (kritisch bei steifer Kammer und Mitralstenose) und weniger Durchblutungszeit für den linken Ventrikel",
        "Ab einer gewissen Frequenz sinkt das Schlagvolumen stärker, als die Frequenz steigt → HZV fällt"
      ] },
      "Bei Säuglingen und bei restriktiver Füllung ist das Schlagvolumen kaum steigerbar → ==das HZV hängt dort stark von der Frequenz ab; Bradykardie senkt es direkt==.",
      { h: "Diastolische Funktion" },
      "Zwei Bausteine: **aktive Relaxation** (energieabhängig; verzögert bei Ischämie, Hypertrophie, Alter) und **passive Steifigkeit** (Titin, Kollagen, Wanddicke). Bei diastolischer Dysfunktion (Herzinsuffizienz mit erhaltener Ejektionsfraktion, HFpEF) sind die Füllungsdrücke erhöht. ==Diese Patienten vertragen Tachykardie, Vorhofflimmern, Volumenmangel (Schlagvolumen fällt) und Volumenüberladung (Lungenödem) gleichermaßen schlecht – das therapeutische Fenster ist schmal.==",
      { h: "Ventrikuläre Interdependenz" },
      "Beide Kammern teilen sich Septum und Herzbeutel. ==Eine akute Dilatation der rechten Kammer drückt das Septum nach links und behindert die Füllung der linken Kammer.== Bei Herzbeuteltamponade wird das atemabhängig verstärkt (Pulsus paradoxus: systolischer Druckabfall > 10 mmHg bei Einatmung)."
    ],
    merke: [
      "HZV = Frequenz × Schlagvolumen; Schlagvolumen = f(Vorlast, Nachlast, Kontraktilität).",
      "Frank-Starling = v.a. längenabhängige Calcium-Sensibilisierung.",
      "Laplace: σ = P × r / 2h – Dilatation erhöht, Hypertrophie senkt die Wandspannung.",
      "Tachykardie verkürzt v.a. die Diastole → Füllung und linksventrikuläre Durchblutung ↓.",
      "Füllungsdruck ≠ Füllungsvolumen (Steifigkeit, PEEP, Klappen)."
    ],
    warum: [
      { q: "Warum kann ein hoher zentraler Venendruck trotz Volumenmangel vorkommen?", a: "Der ZVD ist ein Druck, kein Volumen. Er steigt bei steifer oder versagender rechter Kammer, Tamponade, erhöhtem Brustkorbdruck (PEEP, Spannungspneumothorax, erhöhter Bauchdruck) oder Trikuspidalinsuffizienz – auch wenn das zirkulierende Volumen niedrig ist." },
      { q: "Warum steigt der Sauerstoffverbrauch einer dilatierten Kammer, auch wenn Blutdruck und Frequenz gleich bleiben?", a: "Nach Laplace ist die Wandspannung proportional zum Radius. Eine größere Kammer muss bei gleichem Druck mehr Spannung aufbringen, und die Wandspannung ist eine Hauptdeterminante des myokardialen Sauerstoffverbrauchs." }
    ],
    klinik: [
      "Narkoseeinleitung bei schwacher linker Kammer: Nachlast nicht abrupt erhöhen (Blutdruckspitze bei Laryngoskopie), Kontraktilität nicht stark senken, Vorlast erhalten.",
      "Mitral- und Aortenstenose: Frequenz niedrig-normal (lange Diastole), Sinusrhythmus schützen.",
      "Aorten- und Mitralinsuffizienz: eher höhere Frequenz und niedrige Nachlast."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Welche molekularen Mechanismen erklären den Frank-Starling-Mechanismus im physiologischen Bereich?", a: "Vor allem die längenabhängige Aktivierung: höhere Calciumempfindlichkeit der Myofilamente bei Dehnung (engerer Filamentabstand, titinvermittelte Aktivierung des Myosins); die Filamentüberlappung spielt eine untergeordnete Rolle." },
      { q: "Spezialwissen Herz: Wie lautet das Laplace-Gesetz für die Kammerwand und welche Konsequenzen hat es?", a: "Wandspannung σ = Druck × Radius / (2 × Wanddicke). Dilatation erhöht Wandspannung und Sauerstoffverbrauch, Hypertrophie senkt die Wandspannung kompensatorisch." },
      { q: "Spezialwissen Herz: Warum ist der systemische Gefäßwiderstand kein vollständiges Maß der Nachlast?", a: "Er erfasst nur den Widerstandsanteil. Zur Nachlast gehören auch Gefäßsteifigkeit, Wellenreflexion, Kammergröße und -geometrie (Laplace); die arterielle Elastance fasst diese Größen besser zusammen." },
      { q: "Spezialwissen Herz: Welche zwei Komponenten hat die diastolische Funktion?", a: "Aktive, energieabhängige Relaxation und passive Steifigkeit (Titin, Kollagen, Wanddicke)." },
      { q: "Spezialwissen Herz: Wie wirkt sich Tachykardie auf Füllung und Koronardurchblutung aus?", a: "Die Diastole verkürzt sich überproportional → weniger Füllungszeit (besonders bei steifer Kammer und Mitralstenose) und weniger Zeit für die diastolische Durchblutung des linken Ventrikels." },
      { q: "Spezialwissen Herz: Was versteht man unter ventrikulärer Interdependenz?", a: "Beide Kammern teilen Septum und Herzbeutel: Eine Dilatation der rechten Kammer verschiebt das Septum nach links und behindert die Füllung der linken Kammer; bei Tamponade atemabhängig verstärkt (Pulsus paradoxus)." }
    ]
  });

  CH.push({
    id: "hzv",
    level: "System",
    title: "Herzzeitvolumen, venöser Rückstrom und Volumenreagibilität",
    leitfrage: "Warum kann das Herz nicht mehr auswerfen, als zu ihm zurückfließt – und was treibt eigentlich das Blut zum Herzen zurück?",
    einfach: "Das Herz ist nur so gut wie sein Nachschub. Das Blut fließt aus den Venen zum Herzen, weil in den Venen ein etwas höherer Druck herrscht als im rechten Vorhof – ähnlich wie Wasser aus einem leicht erhöhten Tank in ein Becken läuft. Die meisten Venen sind dabei nur 'locker gefüllt'. Ziehen sie sich zusammen, wird aus diesem Reservevolumen plötzlich wirksamer Druck. Narkosemittel machen das Gegenteil: Die Venen erschlaffen, der Nachschub sinkt.",
    body: [
      { h: "Das Guyton-Modell" },
      "Im Gleichgewicht sind Herzzeitvolumen (HZV) und venöser Rückstrom gleich. Das HZV ergibt sich als **Schnittpunkt zweier Kurven** (Guyton 1955): der Herzfunktionskurve (das HZV steigt mit dem Druck im rechten Vorhof) und der venösen Rückstromkurve (der Rückstrom sinkt, je höher der Druck im rechten Vorhof ist).",
      { formel: "Venöser Rückstrom = (mittlerer systemischer Füllungsdruck − rechtsatrialer Druck) / Widerstand des venösen Rückstroms", erkl: "Der mittlere systemische Füllungsdruck ist der Druck, der bei Herzstillstand im ganzen Gefäßsystem herrschen würde." },
      "==Der treibende Druckunterschied beträgt nur wenige mmHg== – deshalb verändern schon kleine Änderungen des Füllungsdrucks oder des Vorhofdrucks den Rückstrom deutlich.",
      { h: "'Stressed' und 'unstressed volume'" },
      "Etwa zwei Drittel des Blutvolumens befinden sich in den Venen. Der größte Teil davon ist **'unstressed volume'**: Es füllt die Gefäße, ohne Druck aufzubauen. Nur das **'stressed volume'** (ca. 25–30 % des Blutvolumens) dehnt die Gefäßwände und erzeugt den mittleren Füllungsdruck.",
      { kette: [
        "Sympathikus verengt die Venen, v.a. im Bauchraum (Splanchnikusgebiet, größtes Blutreservoir)",
        "Unstressed volume wird zu stressed volume ('Autotransfusion')",
        "Mittlerer Füllungsdruck ↑ → venöser Rückstrom ↑",
        "==HZV steigt – ohne dass Volumen zugeführt wurde=="
      ], titel: "Wie der Körper sein Reservevolumen mobilisiert" },
      { kette: [
        "Narkosemittel, Sympathikolyse oder Spinal-/Epiduralanästhesie",
        "Venen erschlaffen → stressed volume wird zu unstressed volume",
        "Mittlerer Füllungsdruck ↓ → venöser Rückstrom ↓ → HZV ↓",
        "Zusätzlich erweitern sich die Arterien (Gefäßwiderstand ↓) und der Herzmuskel wird dosisabhängig geschwächt",
        "==Hypotonie nach Narkoseeinleitung=="
      ], titel: "Warum der Blutdruck nach der Einleitung fällt" },
      { h: "Was den Rückstrom sonst verändert" },
      { table: { head: ["Faktor", "Mechanismus", "Folge"], rows: [
        ["Blutung, Dehydratation", "Gesamtvolumen ↓ → Füllungsdruck ↓", "Kompensation über Venenverengung, bis die Reserve erschöpft ist"],
        ["Noradrenalin", "Venenverengung → Füllungsdruck ↑ (Persichini et al. 2012)", "Rückstrom ↑ bei volumenabhängigen Patienten"],
        ["Überdruckbeatmung, PEEP", "Druck im rechten Vorhof ↑ → Druckunterschied ↓", "Rückstrom ↓, besonders bei Volumenmangel"],
        ["Spontane Einatmung", "Druck im Brustkorb ↓ → Vorhofdruck ↓", "Rückstrom zum rechten Herzen ↑"],
        ["Volumengabe", "stressed volume ↑ → Füllungsdruck ↑", "HZV ↑ nur, wenn beide Kammern auf dem steilen Teil der Starling-Kurve arbeiten"]
      ] } },
      { h: "Volumenreagibilität" },
      "**Volumenreagibel** ist, wer auf einen Volumenbolus mit einem Anstieg von Schlagvolumen bzw. HZV um mindestens ca. 10–15 % reagiert. ==Nur etwa die Hälfte instabiler Intensivpatienten ist volumenreagibel.== Statische Drücke wie der zentrale Venendruck sagen das schlecht vorher.",
      { ul: [
        "**Pulsdruckvariation (PPV):** Werte über ca. 12–13 % sprechen für Volumenreagibilität, Grauzone ca. 9–13 % (Cannesson et al. 2011). Nur verwertbar bei kontrollierter Beatmung ohne Eigenatmung, Tidalvolumen ≥ 8 ml/kg, Sinusrhythmus, geschlossenem Thorax, ohne Rechtsherzversagen und bei einem Verhältnis Herzfrequenz/Atemfrequenz > 3,6.",
        "**Passives Beinheben:** verlagert ca. 300 ml Blut aus Beinen und Bauchraum. Ein HZV-Anstieg ≥ 10 % (mit einem HZV-Messverfahren, nicht am Blutdruck abgelesen) zeigt Volumenreagibilität an – auch bei Arrhythmie und Spontanatmung (Monnet et al. 2016).",
        "**Mini-Volumenbolus** (z.B. 100–250 ml) mit Messung des Schlagvolumens."
      ] },
      { falle: "„Ein niedriger ZVD heißt Volumenmangel, ein hoher ZVD heißt genug Volumen.“ – Der ZVD sagt die Reaktion auf Volumen kaum vorher. Er hängt von Herzfunktion, Gefäßtonus, Brustkorbdruck und Klappen ab." },
      { h: "Verbindung zur Sauerstoffversorgung" },
      { formel: "Sauerstoffangebot DO₂ = HZV × arterieller O₂-Gehalt;  Sauerstoffverbrauch VO₂ = HZV × (arterieller − gemischtvenöser O₂-Gehalt)", erkl: "Fick-Prinzip: Bleibt der Verbrauch gleich und fällt das HZV, muss das Gewebe mehr Sauerstoff ausschöpfen – die gemischtvenöse bzw. zentralvenöse Sättigung fällt." }
    ],
    merke: [
      "HZV = Schnittpunkt von Herzfunktions- und venöser Rückstromkurve.",
      "Rückstrom = (mittlerer Füllungsdruck − Vorhofdruck) / Widerstand; der Druckunterschied ist nur wenige mmHg.",
      "Nur das stressed volume erzeugt Druck; Venenverengung im Bauchraum mobilisiert Reservevolumen.",
      "Einleitungshypotonie = Venenerschlaffung + Arterienerweiterung ± Herzmuskelschwächung.",
      "Volumenreagibilität dynamisch prüfen (PPV mit Voraussetzungen, passives Beinheben), nicht mit dem ZVD."
    ],
    warum: [
      { q: "Warum kann Noradrenalin bei septischer Hypotonie das HZV steigern, obwohl es die Nachlast erhöht?", a: "Neben den Arterien verengt es die Venen und verwandelt unstressed in stressed volume. Der mittlere Füllungsdruck und damit der venöse Rückstrom steigen. Bei volumenabhängigen Patienten überwiegt dieser Effekt den Nachlastanstieg." },
      { q: "Warum ist die Pulsdruckvariation bei Spontanatmung oder kleinem Tidalvolumen nicht verwertbar?", a: "Die PPV entsteht durch regelmäßige Änderungen von Vor- und Nachlast durch gleichmäßige Beatmungshübe. Bei Spontanatmung sind die Druckschwankungen unregelmäßig und umgekehrt gerichtet. Bei kleinen Tidalvolumina sind sie zu gering, um selbst bei Volumenreagibilität eine messbare Variation zu erzeugen – es entstehen falsch-negative Werte." }
    ],
    klinik: [
      "Einleitungshypotonie: Ein Vasopressor (z.B. Noradrenalin, Cafedrin/Theodrenalin, Phenylephrin) behandelt Venenerschlaffung und Gefäßweitstellung oft gezielter als großzügige Volumengabe.",
      "Hoher PEEP bei Volumenmangel kann Rückstrom und HZV deutlich senken.",
      "Zielgerichtete Volumentherapie: Volumen nur bei nachgewiesener Reagibilität und Bedarf geben, Überladung vermeiden."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Wie lautet die Gleichung des venösen Rückstroms nach Guyton?", a: "Venöser Rückstrom = (mittlerer systemischer Füllungsdruck − rechtsatrialer Druck) / Widerstand des venösen Rückstroms." },
      { q: "Spezialwissen Herz: Was ist der Unterschied zwischen stressed und unstressed volume?", a: "Unstressed volume füllt die Gefäße ohne Druckaufbau (größter Teil des venösen Bluts). Stressed volume (ca. 25–30 % des Blutvolumens) dehnt die Gefäßwand und erzeugt den mittleren systemischen Füllungsdruck." },
      { q: "Spezialwissen Herz: Welche Mechanismen erklären die Hypotonie nach Narkoseeinleitung?", a: "Venenerschlaffung (stressed volume und Füllungsdruck ↓ → Rückstrom ↓), Arterienerweiterung (Gefäßwiderstand ↓), Sympathikolyse und dosisabhängige Schwächung des Herzmuskels." },
      { q: "Spezialwissen Herz: Welche Voraussetzungen muss die Pulsdruckvariation erfüllen, um Volumenreagibilität vorherzusagen?", a: "Kontrollierte Beatmung ohne Eigenatmung, Tidalvolumen ≥ 8 ml/kg, Sinusrhythmus, geschlossener Thorax, kein Rechtsherzversagen, Herzfrequenz/Atemfrequenz > 3,6; Grauzone ca. 9–13 %." },
      { q: "Spezialwissen Herz: Wie wird ein Test mit passivem Beinheben korrekt bewertet?", a: "Er verlagert ca. 300 ml Blut; ein Anstieg von HZV bzw. Schlagvolumen um ≥ 10 %, gemessen mit einem HZV-Verfahren (nicht am Blutdruck), zeigt Volumenreagibilität an – auch bei Arrhythmie und Spontanatmung." },
      { q: "Spezialwissen Herz: Wie wirken Überdruckbeatmung und PEEP auf den venösen Rückstrom?", a: "Sie erhöhen den Druck im Brustkorb und im rechten Vorhof, verkleinern den Druckunterschied zum mittleren Füllungsdruck und senken so den Rückstrom, besonders bei Volumenmangel." }
    ]
  });

  CH.push({
    id: "koronar",
    level: "Organ",
    title: "Koronardurchblutung und Energiebedarf des Herzens",
    leitfrage: "Warum kann das Herz seinen steigenden Sauerstoffbedarf nur über mehr Durchblutung decken, und wann stößt diese an ihre Grenze?",
    einfach: "Das Herz nimmt schon in Ruhe fast allen Sauerstoff aus seinem Blut. Braucht es mehr, muss mehr Blut fließen. Die linke Kammer wird vor allem in der Erschlaffungsphase durchblutet, weil der Herzmuskel beim Zusammenziehen seine eigenen Gefäße zudrückt. Deshalb ist ein schneller Puls doppelt schlecht: Er erhöht den Bedarf und verkürzt die Zeit, in der Blut fließen kann.",
    body: [
      { h: "Zahlen" },
      { table: { head: ["Größe", "Wert (ca.)"], rows: [
        ["Koronarfluss in Ruhe", "ca. 225–250 ml/min (ca. 4–5 % des HZV)"],
        ["Steigerbarkeit (koronare Flussreserve)", "beim Gesunden ca. 3- bis 5-fach"],
        ["Sauerstoffverbrauch des Myokards in Ruhe", "ca. 8–10 ml O₂ pro 100 g Gewebe pro Minute (ca. 10 % des Ganzkörperverbrauchs bei < 0,5 % der Körpermasse)"],
        ["Sauerstoffausschöpfung", "ca. 70–80 % (Sättigung im Koronarsinus ca. 20–30 %)"]
      ] } },
      { kette: [
        "Ausschöpfung schon in Ruhe ca. 70–80 %",
        "Kaum Reserve, noch mehr Sauerstoff aus dem Blut zu ziehen",
        "==Mehrbedarf muss fast vollständig über mehr Durchblutung gedeckt werden=="
      ] },
      { h: "Wovon der Sauerstoffverbrauch abhängt" },
      "Hauptfaktoren sind die **Wandspannung** (Druck, Radius, Wanddicke), die **Herzfrequenz** und die **Kontraktilität**. Grundumsatz und Erregungsbildung machen nur einen kleineren Teil aus. Ein einfacher klinischer Index ist das **Frequenz-Druck-Produkt** (Herzfrequenz × systolischer Blutdruck).",
      { h: "Regulation des Koronarflusses" },
      { ul: [
        "**Autoregulation:** Der Fluss bleibt über einen Perfusionsdruck von etwa 60–140 mmHg weitgehend konstant (Duncker & Bache 2008).",
        "**Stoffwechselkopplung:** Adenosin, Öffnung ATP-abhängiger Kaliumkanäle, Stickstoffmonoxid, Wasserstoffperoxid, CO₂, Säure und Kalium erweitern die kleinen Arterien passend zum Verbrauch. Adenosin ist beteiligt, aber nicht der alleinige Vermittler.",
        "**Endothel:** Stickstoffmonoxid, Prostazyklin – bei Atherosklerose und Diabetes gestört.",
        "**Nerven:** α-Rezeptoren verengen, β2-Rezeptoren erweitern; unter Sympathikusaktivierung überwiegt meist die stoffwechselbedingte Erweiterung."
      ] },
      { h: "Systolische Kompression" },
      { kette: [
        "Während der Systole drückt die kontrahierende Wand die Gefäße zu – am stärksten innen (Subendokard)",
        "Der linke Ventrikel wird überwiegend in der Diastole durchblutet",
        "Koronarer Perfusionsdruck links ≈ diastolischer Aortendruck − linksventrikulärer enddiastolischer Druck (LVEDP)",
        "==Gefährlich sind deshalb: Tachykardie (kurze Diastole), niedriger diastolischer Blutdruck und hoher LVEDP=="
      ], titel: "Warum die linke Kammer in der Diastole durchblutet wird" },
      "Das **Subendokard** hat die höchste Wandspannung, den höchsten Bedarf und die stärkste Kompression – ==es ist zuerst von Ischämie betroffen==. Die **rechte Kammer** wird bei normalem Druck in Systole und Diastole durchblutet; bei pulmonaler Hypertonie geht dieser Vorteil verloren.",
      "Hinter einer **hochgradigen Stenose** sind die kleinen Gefäße bereits maximal erweitert. ==Der Fluss hängt dann direkt vom Druck ab== – jede Hypotonie mindert sofort die Durchblutung.",
      { h: "Ischämie-Phänomene" },
      { ul: [
        "**Stunning ('betäubtes Myokard'):** vorübergehende Funktionsstörung nach Ischämie trotz wiederhergestellter Durchblutung, Erholung über Stunden bis Tage.",
        "**Hibernation ('Winterschlaf'):** chronisch minderdurchblutetes, aber lebendes Myokard mit gedrosselter Funktion – kann sich nach Revaskularisation erholen.",
        "**Präkonditionierung:** Kurze Ischämien schützen vor späteren längeren. Volatile Anästhetika ahmen das im Experiment nach. ==Klinisch zeigten aber weder volatile Anästhetika gegenüber totaler intravenöser Anästhesie in der Bypasschirurgie (MYRIAD 2019) noch die 'ferne' Präkonditionierung mit Blutdruckmanschette (RIPHeart, ERICCA 2015) einen Überlebensvorteil.=="
      ] },
      { h: "Myokardschädigung nach nicht-kardialen Operationen (MINS)" },
      "Troponinanstiege nach Operationen sind häufig, meist **ohne Beschwerden** und mit einer erhöhten 30-Tage-Sterblichkeit verbunden (VISION 2017). Häufigster Mechanismus ist ein Missverhältnis zwischen Sauerstoffangebot und -bedarf (Tachykardie, Hypotonie, Anämie, Hypoxämie) – also ein Typ-2-Infarkt. Die ESC-Leitlinie 2022 empfiehlt bei Risikopatienten Troponin vor sowie 24 und 48 Stunden nach dem Eingriff."
    ],
    merke: [
      "Ausschöpfung schon in Ruhe ca. 70–80 % → Mehrbedarf = mehr Durchblutung.",
      "Linke Kammer wird v.a. diastolisch durchblutet: Perfusionsdruck = diastolischer Aortendruck − LVEDP.",
      "Sauerstoffverbrauch: Wandspannung, Herzfrequenz, Kontraktilität.",
      "Hinter Stenosen ist der Fluss druckabhängig → Hypotonie und Tachykardie vermeiden.",
      "MINS: meist stumm, prognostisch relevant → Troponin bei Risikopatienten."
    ],
    warum: [
      { q: "Warum ist Tachykardie für einen Patienten mit koronarer Herzkrankheit gefährlicher als eine mäßige Hypertonie?", a: "Tachykardie erhöht den Bedarf und verkürzt gleichzeitig die Diastole, also die Durchblutungszeit der linken Kammer – Angebot und Bedarf verschieben sich gegenläufig. Eine mäßige Hypertonie erhöht zwar die Wandspannung, hebt aber auch den diastolischen Perfusionsdruck." },
      { q: "Warum ist das Subendokard bei Ischämie zuerst betroffen?", a: "Es erfährt den höchsten Gewebedruck in der Systole und die höchste Wandspannung, wird fast nur diastolisch durchblutet und hat einen höheren Sauerstoffverbrauch. Sinkt der Perfusionsdruck oder wird die Diastole kurz, fällt hier der Fluss zuerst ab." }
    ],
    klinik: [
      "Ziele bei koronarer Herzkrankheit: Herzfrequenz niedrig-normal, diastolischen Druck erhalten, LVEDP nicht erhöhen, Anämie und Hypoxämie vermeiden, Schmerz und Stress dämpfen.",
      "Bestehende β-Blocker perioperativ weitergeben, nicht kurzfristig hochdosiert neu beginnen (POISE 2008).",
      "Pulmonale Hypertonie: Systemdruck stützen (z.B. Noradrenalin, Vasopressin), weil die Durchblutung der rechten Kammer dann vom Aortendruck abhängt."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Wie hoch ist die myokardiale Sauerstoffausschöpfung in Ruhe, und welche Konsequenz hat das?", a: "Ca. 70–80 % (Sättigung im Koronarsinus ca. 20–30 %). Mehrbedarf kann kaum über höhere Ausschöpfung, sondern nur über mehr Koronarfluss gedeckt werden." },
      { q: "Spezialwissen Herz: Was sind die Hauptdeterminanten des myokardialen Sauerstoffverbrauchs?", a: "Wandspannung (Druck, Radius, Wanddicke), Herzfrequenz und Kontraktilität." },
      { q: "Spezialwissen Herz: Wie berechnet sich der koronare Perfusionsdruck der linken Kammer?", a: "Diastolischer Aortendruck minus linksventrikulärer enddiastolischer Druck (LVEDP)." },
      { q: "Spezialwissen Herz: Welche Mediatoren koppeln den Koronarfluss an den Stoffwechsel?", a: "Adenosin, ATP-abhängige Kaliumkanäle, Stickstoffmonoxid, Wasserstoffperoxid, CO₂, Säure und Kalium – Adenosin ist beteiligt, aber nicht der alleinige Vermittler." },
      { q: "Spezialwissen Herz: Was unterscheidet Stunning und Hibernation?", a: "Stunning: vorübergehende Funktionsstörung nach Ischämie trotz wiederhergestellter Durchblutung. Hibernation: chronisch minderdurchblutetes, lebendes Myokard mit gedrosselter Funktion, das sich nach Revaskularisation erholen kann." },
      { q: "Spezialwissen Herz: Was zeigte die MYRIAD-Studie?", a: "Volatile Anästhetika senkten in der aortokoronaren Bypasschirurgie im Vergleich zu totaler intravenöser Anästhesie die 1-Jahres-Sterblichkeit nicht (Landoni et al., NEJM 2019)." },
      { q: "Spezialwissen Herz: Was ist MINS und welches Screening empfiehlt die ESC 2022?", a: "Myokardschädigung nach nicht-kardialer Operation: meist beschwerdefreier, prognostisch relevanter Troponinanstieg; bei Risikopatienten Troponin vor sowie 24 und 48 h nach dem Eingriff." }
    ]
  });

  CH.push({
    id: "rv",
    level: "Organ",
    title: "Die rechte Kammer und das Rechtsherzversagen",
    leitfrage: "Warum verkraftet die rechte Kammer große Volumen, aber kaum einen plötzlichen Druckanstieg – und wie entsteht die Abwärtsspirale des Rechtsherzversagens?",
    einfach: "Die rechte Kammer ist ein dünnwandiger Blasebalg, gebaut für viel Volumen bei wenig Druck. Muss sie plötzlich gegen einen hohen Widerstand in der Lunge pumpen (z.B. bei einer Lungenembolie), gibt sie schnell auf: Sie weitet sich, drückt die linke Kammer zusammen, der Blutdruck fällt – und damit sinkt auch ihre eigene Durchblutung. So entsteht ein Teufelskreis.",
    body: [
      { h: "Bau und Arbeitsweise" },
      "Die rechte Kammer (RV) liegt halbmondförmig um die linke Kammer (LV). Ihre freie Wand ist dünn (normal unter 5 mm gegenüber ca. 6–10 mm links). Sie pumpt vor allem durch **Längsverkürzung** (vom Klappenring zur Spitze) und wellenartig vom Einfluss- zum Ausflusstrakt, unterstützt durch die Kontraktion der linken Kammer über das Septum. Sie wirft dasselbe Schlagvolumen aus wie die linke Kammer, aber gegen einen etwa fünf- bis sechsmal niedrigeren Druck in ein Niederdruck-System (Haddad et al. 2008). Die **TAPSE** (systolische Längsbewegung des Trikuspidalklappenrings) ist normal ≥ ca. 17 mm.",
      { h: "Nachlastempfindlichkeit" },
      "==Die rechte Kammer verträgt Volumen gut, reagiert aber auf einen steigenden Lungengefäßwiderstand (PVR) mit einem steilen Abfall des Schlagvolumens== – viel steiler als die linke Kammer auf eine Nachlasterhöhung. Eine nicht trainierte rechte Kammer kann akut kaum einen mittleren Pulmonalarteriendruck über ca. 40 mmHg aufbauen. ==Höhere Werte bei einer akuten Lungenembolie sprechen für eine vorbestehende chronische Druckbelastung mit verdickter rechter Kammer.==",
      { h: "Die Abwärtsspirale" },
      { kette: [
        "Lungengefäßwiderstand ↑ (Embolie, Hypoxie, Azidose, Überdruckbeatmung, ARDS = akutes Lungenversagen)",
        "Rechte Kammer weitet sich, Trikuspidalklappe wird undicht",
        "Septum verschiebt sich nach links → linke Kammer füllt sich schlechter → Schlagvolumen links ↓ → Blutdruck ↓",
        "Durch den hohen Druck in der rechten Kammer wird sie nur noch in der Diastole durchblutet – und dieser Fluss hängt vom Aortendruck ab",
        "Blutdruck ↓ → Durchblutung der rechten Kammer ↓ → Ischämie → Pumpfunktion ↓",
        "==Der Kreis schließt sich – zusätzliche Volumengabe dehnt die Kammer weiter und verschlimmert die Spirale=="
      ], titel: "Rechtsherzversagen" },
      { h: "Lungengefäßwiderstand und Lungenvolumen" },
      "Der Lungengefäßwiderstand ist **bei funktioneller Residualkapazität (FRC) am niedrigsten** und steigt U-förmig zu hohen und niedrigen Lungenvolumina an. Bei hohen Volumina (Überblähung, hoher PEEP) werden die Kapillaren in den Alveolarwänden zusammengedrückt. Bei niedrigen Volumina (Atelektasen) verengen sich die größeren Gefäße, und die hypoxische pulmonale Vasokonstriktion springt an. Weitere Auslöser: Hypoxie, Hyperkapnie, Azidose, Unterkühlung, Schmerz bzw. Sympathikus.",
      { h: "Therapieprinzipien – direkt aus der Physiologie abgeleitet" },
      { ul: [
        "**Systemdruck halten** (Noradrenalin; Vasopressin erhöht den Lungengefäßwiderstand kaum) → ==sichert die Durchblutung der rechten Kammer==.",
        "**Lungengefäßwiderstand senken:** Sauerstoff, Normokapnie, Azidose ausgleichen, normale Temperatur, Beatmung nahe der FRC (moderater PEEP, keine Überblähung), ggf. inhalatives Stickstoffmonoxid (NO) oder Prostazyklin.",
        "**Volumen vorsichtig:** nur bei nachgewiesenem Bedarf – eine erweiterte rechte Kammer braucht eher Entlastung.",
        "**Kontraktilität stützen:** Dobutamin, Milrinon, Levosimendan (Achtung: Gefäßerweiterung).",
        "**Sinusrhythmus** erhalten."
      ] }
    ],
    merke: [
      "Rechte Kammer = dünnwandige Volumenpumpe, extrem nachlastempfindlich.",
      "Akut kaum mittlerer Pulmonalarteriendruck > ca. 40 mmHg möglich.",
      "Spirale: Widerstand ↑ → Dilatation → Septumverschiebung → Blutdruck ↓ → Ischämie der rechten Kammer.",
      "Lungengefäßwiderstand minimal bei FRC; Hypoxie, Hyperkapnie, Azidose, Kälte, Überblähung erhöhen ihn.",
      "Therapie: Systemdruck halten, Widerstand senken, Volumen zurückhaltend, Kontraktilität stützen."
    ],
    warum: [
      { q: "Warum kann eine Volumengabe bei akutem Rechtsherzversagen den Blutdruck weiter senken?", a: "Die bereits erweiterte rechte Kammer wird weiter gedehnt: Trikuspidalinsuffizienz, Wandspannung und Sauerstoffbedarf steigen, das Septum verschiebt sich stärker nach links und behindert die Füllung der linken Kammer im starren Herzbeutel. Das Schlagvolumen links und damit der Blutdruck sinken." },
      { q: "Warum ist der Lungengefäßwiderstand bei FRC am niedrigsten?", a: "Er setzt sich aus Gefäßen in den Alveolarwänden (bei großen Lungenvolumina zusammengedrückt) und größeren Gefäßen außerhalb der Alveolen (bei kleinen Volumina enger, Atelektasen lösen hypoxische Vasokonstriktion aus) zusammen. Die Summe beider Widerstände ist bei FRC am kleinsten." }
    ],
    klinik: [
      "Lungenembolie in Narkose: plötzlicher Abfall des endtidalen CO₂, Hypotonie, Hypoxämie, erweiterte rechte Kammer in der transösophagealen Echokardiographie.",
      "Pulmonale Hypertonie bei Einleitung: Hypoxie, Hyperkapnie und Hypotonie vermeiden, Vasopressor früh einsetzen, inhalatives NO bereithalten.",
      "Ein-Lungen-Beatmung und hoher PEEP können die rechte Kammer belasten."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Wie unterscheiden sich rechte und linke Kammer in Wanddicke und Pumpweise?", a: "Rechts normal unter 5 mm (links ca. 6–10 mm); die rechte Kammer pumpt v.a. durch Längsverkürzung und wellenartig vom Einfluss- zum Ausflusstrakt, unterstützt über das Septum." },
      { q: "Spezialwissen Herz: Welchen mittleren Pulmonalarteriendruck kann eine nicht vorgeschädigte rechte Kammer akut ungefähr aufbauen?", a: "Kaum mehr als ca. 40 mmHg; höhere Werte bei akuter Lungenembolie sprechen für eine chronische Druckbelastung mit verdickter rechter Kammer." },
      { q: "Spezialwissen Herz: Beschreibe die Abwärtsspirale des Rechtsherzversagens.", a: "Lungengefäßwiderstand ↑ → Dilatation der rechten Kammer und Trikuspidalinsuffizienz → Septumverschiebung nach links → Füllung links und HZV ↓ → Hypotonie → Durchblutung der rechten Kammer (bei hohem Druck nur diastolisch) ↓ → Ischämie → Pumpfunktion rechts weiter ↓." },
      { q: "Spezialwissen Herz: Welche Faktoren erhöhen den Lungengefäßwiderstand?", a: "Hypoxie (hypoxische pulmonale Vasokonstriktion), Hyperkapnie, Azidose, Unterkühlung, Sympathikus/Schmerz, Lungenvolumina deutlich über oder unter der FRC (Überblähung, Atelektase), Embolie." },
      { q: "Spezialwissen Herz: Welche Therapieprinzipien folgen aus der Physiologie der rechten Kammer?", a: "Systemdruck halten (Noradrenalin, Vasopressin), Lungengefäßwiderstand senken (O₂, Normokapnie, Azidose ausgleichen, Beatmung nahe FRC, inhalatives NO/Prostazyklin), Volumen zurückhaltend, Kontraktilität stützen (Dobutamin, Milrinon, Levosimendan), Sinusrhythmus erhalten." }
    ]
  });

  CH.push({
    id: "insuffizienz",
    level: "Klinik",
    title: "Herzinsuffizienz, Herzbeutel und Tamponade",
    leitfrage: "Warum verschlimmern die Ausgleichsmechanismen des Körpers eine Herzinsuffizienz langfristig – und warum kann eine Narkoseeinleitung bei Herzbeuteltamponade tödlich sein?",
    einfach: "Wenn das Herz schwächer wird, schaltet der Körper auf Notprogramm: Er verengt die Gefäße und hält Salz und Wasser zurück, um den Blutdruck zu halten. Kurzfristig hilft das, langfristig überlastet es das schwache Herz noch mehr. Moderne Medikamente unterbrechen genau dieses Notprogramm. Bei einer Herzbeuteltamponade drückt Flüssigkeit von außen auf das Herz – es kann sich nicht mehr füllen.",
    body: [
      { h: "Einteilung nach der Ejektionsfraktion (ESC 2021)" },
      { table: { head: ["Form", "Linksventrikuläre Ejektionsfraktion"], rows: [
        ["Herzinsuffizienz mit reduzierter EF (HFrEF)", "≤ 40 %"],
        ["Herzinsuffizienz mit leicht reduzierter EF (HFmrEF)", "41–49 %"],
        ["Herzinsuffizienz mit erhaltener EF (HFpEF)", "≥ 50 % + Nachweis struktureller/funktioneller Herzveränderungen bzw. erhöhter natriuretischer Peptide"]
      ] } },
      "Natriuretische Peptide helfen bei der Diagnose: Bei nicht akuten Beschwerden macht ein NT-proBNP < 125 pg/ml (bzw. BNP < 35 pg/ml) eine Herzinsuffizienz unwahrscheinlich, bei akuter Atemnot liegen die Grenzwerte höher (NT-proBNP < 300 pg/ml, BNP < 100 pg/ml).",
      { h: "Das 'Notprogramm' und seine Folgen" },
      { kette: [
        "Herzzeitvolumen ↓ → Druckfühler (Barorezeptoren) und Niere melden Minderdurchblutung",
        "Sympathikus ↑, Renin-Angiotensin-Aldosteron-System ↑, antidiuretisches Hormon (ADH) ↑",
        "Gefäßverengung (Nachlast ↑) sowie Salz- und Wasserrückhalt (Vorlast ↑, Ödeme)",
        "Kurzfristig: Blutdruck und Füllung gestützt",
        "==Langfristig: mehr Wandspannung, Sauerstoffbedarf, Umbau (Remodeling), Fibrose und Rhythmusstörungen → das Herz wird weiter geschwächt=="
      ], titel: "Warum die Kompensation schadet" },
      "Gegenspieler sind die **natriuretischen Peptide** (ANP aus dem Vorhof, BNP aus der Kammer): Sie fördern die Salzausscheidung und erweitern Gefäße.",
      { h: "Die vier Säulen der Therapie bei HFrEF (ESC 2021)" },
      { ul: [
        "**ACE-Hemmer bzw. Angiotensin-Rezeptor-Neprilysin-Inhibitor (Sacubitril/Valsartan)** – bremsen das RAAS, Neprilysin-Hemmung verstärkt die natriuretischen Peptide.",
        "**β-Blocker** – bremsen den Sympathikus, senken Frequenz und Sauerstoffbedarf.",
        "**Mineralokortikoid-Rezeptor-Antagonisten (Spironolacton, Eplerenon)** – bremsen Aldosteron.",
        "**SGLT2-Hemmer (Dapagliflozin, Empagliflozin)** – Salzausscheidung, Entlastung."
      ] },
      "==Alle vier unterbrechen das schädliche Notprogramm – sie senken nachweislich Sterblichkeit und Krankenhausaufnahmen.== Schleifendiuretika lindern die Stauung, verbessern aber nicht die Prognose.",
      { h: "Perioperativ" },
      { ul: [
        "Herzinsuffizienz ist ein wichtiger Risikofaktor für perioperative Komplikationen (z.B. im Revised Cardiac Risk Index).",
        "β-Blocker weitergeben; SGLT2-Hemmer mindestens 3 Tage vorher pausieren (Risiko einer Ketoazidose mit nur leicht erhöhtem Blutzucker).",
        "Bei stabiler Herzinsuffizienz kann die RAAS-Hemmung weitergeführt werden (ESC 2022); Diuretika am OP-Tag oft pausiert.",
        "Narkoseführung: Kontraktilität nicht stark senken, Nachlast nicht abrupt erhöhen, Vorlast vorsichtig, Tachykardie und Rhythmusstörungen vermeiden."
      ] },
      { h: "Herzbeutel (Perikard)" },
      "Der Herzbeutel besteht aus einem festen äußeren Blatt (Pericardium fibrosum) und einem serösen Blatt mit zwei Schichten. Dazwischen liegen normal ca. 15–50 ml Flüssigkeit. ==Seine Druck-Volumen-Kurve ist steil: Langsam wachsende Ergüsse von über einem Liter werden toleriert, weil sich der Herzbeutel dehnt – ein akuter Erguss von 100–200 ml kann dagegen schon eine Tamponade verursachen.==",
      { kette: [
        "Druck im Herzbeutel ↑",
        "Die dünnwandigen Vorhöfe und die rechte Kammer werden in der Diastole zusammengedrückt (im Ultraschall: Kollaps von rechtem Vorhof bzw. rechter Kammer)",
        "Füllung ↓ → Schlagvolumen ↓; die diastolischen Drücke aller Herzhöhlen gleichen sich an",
        "Beim Einatmen füllt sich die rechte Kammer etwas mehr und drückt das Septum nach links → Schlagvolumen links ↓ → Pulsus paradoxus (systolischer Druckabfall > 10 mmHg)",
        "==Klinisch: Beck-Trias (Hypotonie, gestaute Halsvenen, leise Herztöne), Tachykardie=="
      ], titel: "Tamponade" },
      { falle: "„Bei Tamponade erst intubieren, dann punktieren.“ – Gefährlich: Narkoseeinleitung (Venenerschlaffung, Kardiodepression) und Überdruckbeatmung (Druck im Brustkorb ↑) senken die ohnehin kritische Füllung – Kreislaufstillstand droht. Wenn möglich zuerst in Lokalanästhesie entlasten; sonst Einleitung erst bei steril abgedecktem, OP-bereitem Team, unter Spontanatmung, mit Vorlast und Frequenz erhalten." }
    ],
    merke: [
      "HFrEF ≤ 40 %, HFmrEF 41–49 %, HFpEF ≥ 50 % (ESC 2021).",
      "Sympathikus, RAAS und ADH stützen kurzfristig, schaden langfristig (Remodeling).",
      "HFrEF-Säulen: ACE-Hemmer/Sacubitril-Valsartan, β-Blocker, Mineralokortikoid-Antagonist, SGLT2-Hemmer.",
      "Tamponade: akut schon 100–200 ml; Angleichung der diastolischen Drücke, Pulsus paradoxus, Beck-Trias.",
      "Tamponade: wenn möglich vor der Narkose entlasten; Spontanatmung, Vorlast und Frequenz erhalten."
    ],
    warum: [
      { q: "Warum verbessern β-Blocker die Prognose bei Herzinsuffizienz, obwohl sie negativ inotrop wirken?", a: "Die chronische Sympathikusaktivierung erhöht Herzfrequenz, Sauerstoffbedarf und Arrhythmieneigung, fördert den Zelltod und den Umbau des Herzens. β-Blocker (langsam aufdosiert) unterbrechen diese schädliche Dauerbelastung; langfristig verbessern sich Pumpfunktion und Überleben, obwohl sie akut die Kontraktilität senken." },
      { q: "Warum kann ein langsam wachsender Perikarderguss von einem Liter harmlos sein, ein akuter von 150 ml aber tödlich?", a: "Der Herzbeutel ist kurzfristig kaum dehnbar (steile Druck-Volumen-Kurve). Wächst der Erguss langsam, dehnt er sich über Wochen, und der Druck bleibt niedrig. Bei schneller Füllung steigt der Druck schon bei kleinen Mengen steil an und behindert die Füllung des Herzens." }
    ],
    klinik: [
      "Vor elektiven Eingriffen: dekompensierte Herzinsuffizienz zuerst rekompensieren.",
      "Bei akuter Dekompensation intraoperativ: Ursache suchen (Ischämie, Rhythmus, Volumen, Klappe), Inotropika und Vasodilatatoren gezielt, transösophageale Echokardiographie.",
      "Nach Herzoperationen: Tamponade auch durch lokale Hämatome möglich – atypische Echobefunde."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Wie wird die Herzinsuffizienz nach ESC 2021 anhand der Ejektionsfraktion eingeteilt?", a: "HFrEF ≤ 40 %, HFmrEF 41–49 %, HFpEF ≥ 50 % mit Nachweis struktureller/funktioneller Veränderungen bzw. erhöhter natriuretischer Peptide." },
      { q: "Spezialwissen Herz: Welche neurohumoralen Systeme werden bei Herzinsuffizienz aktiviert und warum schaden sie langfristig?", a: "Sympathikus, Renin-Angiotensin-Aldosteron-System und ADH: Gefäßverengung und Salz-/Wasserrückhalt stützen kurzfristig Druck und Füllung, erhöhen aber langfristig Wandspannung, Sauerstoffbedarf, Umbau, Fibrose und Arrhythmien." },
      { q: "Spezialwissen Herz: Welche vier Medikamentengruppen bilden die Basistherapie der HFrEF?", a: "ACE-Hemmer bzw. Sacubitril/Valsartan, β-Blocker, Mineralokortikoid-Rezeptor-Antagonisten und SGLT2-Hemmer (ESC 2021)." },
      { q: "Spezialwissen Herz: Ab welchen NT-proBNP- bzw. BNP-Werten ist eine Herzinsuffizienz bei nicht akuten Beschwerden unwahrscheinlich?", a: "NT-proBNP < 125 pg/ml bzw. BNP < 35 pg/ml (bei akuter Atemnot: NT-proBNP < 300 pg/ml, BNP < 100 pg/ml)." },
      { q: "Spezialwissen Herz: Welche hämodynamischen Zeichen kennzeichnen eine Herzbeuteltamponade?", a: "Kollaps von rechtem Vorhof/rechter Kammer in der Diastole, Angleichung der diastolischen Drücke, Pulsus paradoxus (> 10 mmHg), Beck-Trias (Hypotonie, gestaute Halsvenen, leise Herztöne), Tachykardie." },
      { q: "Spezialwissen Herz: Worauf ist bei der Narkose eines Patienten mit Herzbeuteltamponade zu achten?", a: "Wenn möglich vorher in Lokalanästhesie entlasten; sonst Einleitung erst bei OP-bereitem Team, Spontanatmung möglichst erhalten, Vorlast, Frequenz und Kontraktilität erhalten – Überdruckbeatmung und Venenerschlaffung können zum Kreislaufstillstand führen." }
    ]
  });

  CH.push({
    id: "regulation",
    level: "System",
    title: "Kreislaufregulation und ihre Beeinflussung durch die Narkose",
    leitfrage: "Welche Regelkreise halten den Blutdruck in Sekunden, Minuten und Tagen konstant – und welche davon schaltet eine Narkose aus?",
    einfach: "Der Körper hat für den Blutdruck mehrere 'Thermostate' mit unterschiedlicher Geschwindigkeit: Druckfühler in Halsschlagader und Aorta reagieren in Sekunden über die Nerven, Hormone in Minuten bis Stunden, die Niere über Tage, indem sie mehr oder weniger Salz und Wasser ausscheidet. Narkosemittel drehen vor allem am schnellen Thermostat – deshalb fällt der Blutdruck bei der Einleitung, ohne dass der Puls gegensteuert.",
    body: [
      { h: "In Sekunden: der Barorezeptorreflex" },
      { kette: [
        "Blutdruck steigt → Dehnungsfühler (Barorezeptoren) im Karotissinus (Nerv: Glossopharyngeus) und im Aortenbogen (Nerv: Vagus) feuern mehr",
        "Meldung an den Nucleus tractus solitarii im Hirnstamm",
        "Hemmung der sympathischen Zentren (rostrale ventrolaterale Medulla) und Aktivierung des Vagus",
        "==Herzfrequenz, Kontraktilität und Gefäßtonus sinken → der Blutdruck fällt zurück== (bei Druckabfall genau umgekehrt)"
      ], titel: "Barorezeptorreflex" },
      "Bei chronischer Hypertonie verschiebt sich der Sollwert nach oben – ==deshalb wird ein für Gesunde normaler Blutdruck von Hypertonikern oft schlechter vertragen==.",
      { h: "Weitere Reflexe" },
      { ul: [
        "**Niederdruck-Fühler** in Vorhöfen und großen Venen messen die Füllung: Dehnung → Freisetzung von atrialem natriuretischem Peptid (ANP), Hemmung des antidiuretischen Hormons (ADH; Gauer-Henry-Reflex) → mehr Urin. Der Bainbridge-Reflex steigert bei Vorhofdehnung die Frequenz.",
        "**Bezold-Jarisch-Reflex:** Ein kräftig schlagender, leerer Ventrikel löst über den Vagus Bradykardie und Gefäßerweiterung aus (z.B. bei Volumenmangel mit hoher Spinalanästhesie, sitzender Lagerung).",
        "**Chemoreflex:** Sauerstoffmangel und CO₂-Anstieg aktivieren den Sympathikus.",
        "**Cushing-Reflex:** Bei kritisch erhöhtem Hirndruck steigt der Blutdruck bei langsamem Puls und unregelmäßiger Atmung – ein Warnzeichen der Einklemmung."
      ] },
      { h: "In Minuten bis Tagen: Hormone und Niere" },
      { ul: [
        "**Renin-Angiotensin-Aldosteron-System (RAAS):** Angiotensin II verengt Gefäße und setzt Aldosteron (Salzrückhalt) und ADH frei.",
        "**ADH (Vasopressin):** in niedriger Konzentration Wasserrückhalt über V2-Rezeptoren der Niere, in hoher Konzentration (Schock) Gefäßverengung über V1a-Rezeptoren.",
        "**Natriuretische Peptide (ANP, BNP):** fördern Salzausscheidung, erweitern Gefäße – Gegenspieler des RAAS.",
        "**Druck-Natriurese der Niere:** Steigt der Druck, scheidet die Niere mehr Salz und Wasser aus, bis Volumen und Druck wieder stimmen. ==Nach Guyton ist das der entscheidende Langzeitregler des Blutdrucks.=="
      ] },
      { h: "Was die Narkose verändert" },
      { table: { head: ["Einfluss", "Mechanismus", "Folge"], rows: [
        ["Volatile Anästhetika, Propofol", "Dämpfen den Barorezeptorreflex und den Sympathikus, erweitern Gefäße", "Hypotonie ohne passenden Frequenzanstieg"],
        ["Opioide (v.a. Remifentanil, Sufentanil)", "Vagotonus ↑, Sympathikus ↓", "Bradykardie, Hypotonie bei hohem Stress-Ausgangsniveau"],
        ["Ketamin", "Zentrale Sympathikusaktivierung (am Herzmuskel selbst negativ inotrop)", "Meist Blutdruck ↑; bei erschöpften Katecholaminreserven auch Hypotonie"],
        ["Spinal- und Epiduralanästhesie", "Sympathikusblockade; bei hoher Ausbreitung (Th1–Th4) Ausfall der herzbeschleunigenden Fasern", "Venenerschlaffung, Hypotonie, Bradykardie, ggf. Bezold-Jarisch"],
        ["Dauertherapie mit ACE-Hemmern oder Angiotensin-Rezeptorblockern", "Nach Ausschalten des Sympathikus hängt der Blutdruck stark vom Vasopressin ab", "Schwer behandelbare Hypotonie → Vasopressin bzw. Terlipressin erwägen"],
        ["Autonome Neuropathie (Diabetes, Parkinson, Alter)", "Reflexe eingeschränkt", "Ausgeprägte Hypotonie bei Einleitung und Lagewechsel"]
      ] } },
      { h: "Intraoperative Hypotonie" },
      "Schon kurze Phasen mit einem mittleren arteriellen Druck (MAP) unter ca. 65 mmHg bzw. einem relevanten Abfall gegenüber dem Ausgangswert sind mit akuter Nierenschädigung und Myokardschädigung verbunden (Salmasi et al. 2017). ==Eine am Ausgangsdruck orientierte Steuerung (systolisch innerhalb von 10 % des Ausgangswerts) reduzierte in der INPRESS-Studie Organkomplikationen== (Futier et al. 2017)."
    ],
    merke: [
      "Barorezeptoren: Karotissinus (Glossopharyngeus) und Aortenbogen (Vagus) → Hirnstamm → Sympathikus/Vagus.",
      "Langzeitregler = Druck-Natriurese der Niere, moduliert durch RAAS, ADH und natriuretische Peptide.",
      "Narkosemittel dämpfen Baroreflex und Sympathikus → Hypotonie ohne Reflextachykardie.",
      "Unter RAAS-Hemmung ist der Blutdruck nach Sympathikolyse vasopressinabhängig.",
      "MAP < ca. 65 mmHg ist mit Nieren- und Myokardschädigung verbunden."
    ],
    warum: [
      { q: "Warum zeigen Patienten unter Propofol bei Hypotonie oft keine Reflextachykardie?", a: "Propofol dämpft den Barorezeptorreflex zentral und senkt den Sympathikus. Der Regelkreis 'Druckabfall → Sympathikus → schnellerer Puls' ist abgeschwächt, und der Sollwert wird nach unten verstellt." },
      { q: "Warum ist bei Dauertherapie mit ACE-Hemmern nach Narkoseeinleitung Vasopressin oft wirksamer als Noradrenalin?", a: "Der Blutdruck ruht auf drei Säulen: Sympathikus, RAAS und Vasopressin. Die Narkose dämpft den Sympathikus, der ACE-Hemmer blockiert das RAAS – es bleibt im Wesentlichen das Vasopressin-System. Zugeführtes Vasopressin wirkt über V1a-Rezeptoren unabhängig von adrenergen Rezeptoren und Angiotensin II." }
    ],
    klinik: [
      "Einleitung titrieren und Vasopressor bereithalten – besonders bei Älteren, Volumenmangel, autonomer Neuropathie und RAAS-Hemmung.",
      "ACE-Hemmer/Angiotensin-Rezeptorblocker bei Patienten ohne Herzinsuffizienz am OP-Tag pausieren erwägen (ESC 2022).",
      "Hohe Spinal- oder Epiduralanästhesie: Bradykardie und Hypotonie früh mit Vasopressor (und ggf. Atropin) behandeln."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Beschreibe die Reflexbahn des arteriellen Barorezeptorreflexes.", a: "Dehnungsfühler in Karotissinus (N. glossopharyngeus) und Aortenbogen (N. vagus) → Nucleus tractus solitarii → Hemmung der sympathischen Zentren (rostrale ventrolaterale Medulla) und Aktivierung des Vagus bei Druckanstieg; umgekehrt bei Druckabfall." },
      { q: "Spezialwissen Herz: Welcher Mechanismus regelt den Blutdruck nach Guyton langfristig?", a: "Die renale Druck-Natriurese: Steigender Druck erhöht die Salz- und Wasserausscheidung, bis Volumen und Druck wieder im Gleichgewicht sind; RAAS, ADH und natriuretische Peptide modulieren sie." },
      { q: "Spezialwissen Herz: Wie wirkt Vasopressin in niedriger und in hoher Konzentration?", a: "Niedrig: Wasserrückhalt über V2-Rezeptoren (Aquaporin-2 im Sammelrohr). Hoch (z.B. Schock): Gefäßverengung über V1a-Rezeptoren." },
      { q: "Spezialwissen Herz: Warum kommt es bei hoher Spinalanästhesie zu Bradykardie?", a: "Ausfall der herzbeschleunigenden Sympathikusfasern (Th1–Th4) bei erhaltenem Vagus, verminderter venöser Rückstrom mit weniger Vorhofdehnung und ggf. Bezold-Jarisch-Reflex." },
      { q: "Spezialwissen Herz: Ab welchem MAP ist intraoperative Hypotonie mit Organschäden verbunden und was zeigte INPRESS?", a: "Ab MAP unter ca. 65 mmHg (bzw. relevantem Abfall vom Ausgangswert) ist sie mit Nieren- und Myokardschädigung assoziiert. In INPRESS senkte eine individualisierte Steuerung (systolisch innerhalb von 10 % des Ausgangswerts) postoperative Organdysfunktionen." }
    ]
  });

  CH.push({
    id: "lebensalter",
    level: "System",
    title: "Herz und Kreislauf über die Lebensspanne: Fetus, Neugeborenes, Schwangerschaft, Alter",
    leitfrage: "Wie stellt sich der Kreislauf bei der Geburt in Sekunden von 'Plazenta' auf 'Lunge' um – und was verändert sich in Schwangerschaft und Alter?",
    einfach: "Vor der Geburt atmet das Kind über die Plazenta. Die Lunge ist mit Flüssigkeit gefüllt und wird über Kurzschlüsse (Foramen ovale, Ductus arteriosus) fast umgangen. Mit dem ersten Atemzug öffnet sich die Lunge, der Druck in ihr fällt, und die Kurzschlüsse schließen sich. Im Alter werden die Gefäße steifer und das Herz reagiert träger – Reserven schrumpfen.",
    body: [
      { h: "Fetaler Kreislauf" },
      { kette: [
        "Sauerstoffreiches Blut aus der Plazenta kommt über die Nabelvene (PO₂ nur ca. 30–35 mmHg, Sättigung ca. 70–80 %)",
        "Ein Teil umgeht über den Ductus venosus die Leber und gelangt in die untere Hohlvene",
        "Im rechten Vorhof wird dieses Blut bevorzugt durch das Foramen ovale in den linken Vorhof gelenkt → linke Kammer → Herzkranzgefäße und Gehirn erhalten das sauerstoffreichste Blut",
        "Blut aus der oberen Hohlvene → rechte Kammer → Pulmonalarterie",
        "Weil der Lungengefäßwiderstand sehr hoch ist, fließt der größte Teil über den Ductus arteriosus in die absteigende Aorta → ==die Lunge erhält nur ca. 10–25 % des gesamten Auswurfs=="
      ], titel: "Wie der Fetus die Lunge umgeht" },
      "==Fetales Hämoglobin (HbF) bindet Sauerstoff fester als Erwachsenen-Hämoglobin== (Halbsättigungsdruck ca. 19 statt ca. 27 mmHg) – so kann der Fetus bei niedrigem PO₂ genug Sauerstoff aufnehmen.",
      { h: "Umstellung bei der Geburt" },
      { kette: [
        "Erster Atemzug: Lunge entfaltet sich, Sauerstoff steigt",
        "Lungengefäßwiderstand fällt stark → mehr Blut durch die Lunge → mehr Rückfluss in den linken Vorhof",
        "Abnabelung: Plazenta fällt weg → systemischer Widerstand steigt",
        "Druck links > rechts → die Klappe des Foramen ovale wird angedrückt (funktioneller Verschluss)",
        "Sauerstoffanstieg und Abfall der Prostaglandine → der Ductus arteriosus verschließt sich funktionell, bei reifen Neugeborenen meist innerhalb von 1–3 Tagen"
      ], titel: "Vom fetalen zum Erwachsenenkreislauf" },
      { falle: "„Nach der Geburt sind die Kurzschlüsse sofort dauerhaft zu.“ – Sie sind zunächst nur funktionell verschlossen. Hypoxie, Azidose, Hyperkapnie und Unterkühlung können den Lungengefäßwiderstand wieder anheben und die Kurzschlüsse öffnen (persistierende pulmonale Hypertonie des Neugeborenen). Ein offenes Foramen ovale bleibt bei ca. einem Viertel der Erwachsenen bestehen." },
      { h: "Neugeborene und Säuglinge" },
      { ul: [
        "Unreifer Herzmuskel: weniger kontraktile Elemente, unreifes sarkoplasmatisches Retikulum → ==stärker auf Calcium von außen angewiesen==, empfindlich gegenüber Calciumantagonisten (Verapamil im 1. Lebensjahr kontraindiziert) und volatilen Anästhetika.",
        "Steife Kammer, Schlagvolumen kaum steigerbar → ==HZV hängt von der Herzfrequenz ab; Bradykardie bedeutet niedriges HZV==.",
        "Überwiegender Vagotonus: Hypoxie führt beim Neugeborenen zu Bradykardie (nicht Tachykardie).",
        "Richtwerte: Herzfrequenz Neugeborene ca. 110–160/min; mittlerer arterieller Druck in den ersten Lebenstagen grob ≈ Gestationsalter in Wochen; Blutvolumen ca. 80–90 ml/kg."
      ] },
      { h: "Schwangerschaft" },
      { table: { head: ["Größe", "Veränderung (ca.)"], rows: [
        ["Plasmavolumen", "+40–50 %"],
        ["Erythrozytenmasse", "+20–30 % → Verdünnungsanämie"],
        ["Herzzeitvolumen", "+30–50 % (Frequenz und Schlagvolumen ↑)"],
        ["Systemischer Gefäßwiderstand", "↓"],
        ["Direkt nach der Entbindung", "HZV steigt nochmals deutlich (Autotransfusion aus dem Uterus) – kritisch bei Herzfehlern"]
      ] } },
      "==Ab etwa der 20. Schwangerschaftswoche drückt der Uterus in Rückenlage auf Hohlvene und Aorta (aortokavale Kompression)== → venöser Rückstrom ↓ → Hypotonie. Deshalb Linksseitenlage bzw. Uterusverlagerung, auch bei Reanimation.",
      { h: "Höheres Lebensalter" },
      { ul: [
        "Steifere Arterien → systolischer Druck und Pulsdruck ↑, Nachlast ↑ → linksventrikuläre Hypertrophie und diastolische Dysfunktion → ==Abhängigkeit von Vorhofkontraktion und ausreichender Füllung==.",
        "Geringeres Ansprechen auf β-Stimulation, niedrigere maximale Herzfrequenz, abgeschwächter Barorezeptorreflex → ==Blutdruckabfälle werden schlechter kompensiert==.",
        "Fibrose des Leitungssystems → Sinusknotenerkrankung, AV-Blockierungen, Vorhofflimmern häufiger.",
        "Langsamere Kreislaufzeit → intravenöse Einleitungsmittel wirken verzögert – ==Geduld statt Nachdosieren==, sonst Überdosierung mit Hypotonie."
      ] }
    ],
    merke: [
      "Fetus: Ductus venosus, Foramen ovale, Ductus arteriosus; Lunge erhält nur ca. 10–25 % des Auswurfs.",
      "Geburt: Lungenwiderstand ↓, systemischer Widerstand ↑ → funktioneller Verschluss von Foramen ovale und (in 1–3 Tagen) Ductus.",
      "Neugeborenes: HZV frequenzabhängig, Hypoxie → Bradykardie, calciumabhängiger Herzmuskel.",
      "Schwangerschaft: Plasmavolumen +40–50 %, HZV +30–50 %, aortokavale Kompression ab ca. 20. SSW.",
      "Alter: steife Gefäße, diastolische Dysfunktion, schwacher Baroreflex, langsame Kreislaufzeit."
    ],
    warum: [
      { q: "Warum kann ein Neugeborenes nach einer Hypoxie wieder in den fetalen Kreislauf zurückfallen?", a: "Foramen ovale und Ductus arteriosus sind anfangs nur funktionell verschlossen. Hypoxie, Azidose, Hyperkapnie und Kälte erhöhen den Lungengefäßwiderstand. Steigt der Druck rechts über links, öffnen sich die Kurzschlüsse wieder, sauerstoffarmes Blut umgeht die Lunge – die Hypoxie verschlimmert sich (Teufelskreis)." },
      { q: "Warum ist Bradykardie beim Säugling so gefährlich?", a: "Die steife, unreife Kammer kann ihr Schlagvolumen kaum steigern. Das Herzzeitvolumen hängt deshalb fast direkt von der Frequenz ab – sinkt die Frequenz, sinkt das HZV proportional." }
    ],
    klinik: [
      "Kinderanästhesie: Bradykardie zuerst als Hypoxie behandeln (Oxygenierung sichern), dann ggf. Atropin bzw. Adrenalin.",
      "Schwangere: Uterusverlagerung nach links ab ca. 20. SSW, bei Reanimation manuelle Uterusverlagerung.",
      "Ältere Patienten: Induktionsdosen reduzieren und langsam titrieren, Vasopressor bereithalten."
    ],
    selbsttest: [
      { q: "Spezialwissen Herz: Welche drei Kurzschlüsse hat der fetale Kreislauf und welche Funktion haben sie?", a: "Ductus venosus (umgeht teilweise die Leber), Foramen ovale (leitet sauerstoffreiches Blut vom rechten in den linken Vorhof zu Herz und Gehirn), Ductus arteriosus (leitet Blut aus der Pulmonalarterie an der Lunge vorbei in die Aorta)." },
      { q: "Spezialwissen Herz: Was führt nach der Geburt zum Verschluss von Foramen ovale und Ductus arteriosus?", a: "Lungengefäßwiderstand ↓ und systemischer Widerstand ↑ → Druck links > rechts verschließt das Foramen ovale funktionell; Sauerstoffanstieg und Prostaglandinabfall verschließen den Ductus funktionell, bei Reifgeborenen meist innerhalb von 1–3 Tagen." },
      { q: "Spezialwissen Herz: Wodurch unterscheidet sich das Herz des Neugeborenen funktionell vom Erwachsenenherz?", a: "Weniger kontraktile Elemente, unreifes SR (stärker von Calcium außen abhängig), steife Kammer mit kaum steigerbarem Schlagvolumen (HZV frequenzabhängig), überwiegender Vagotonus (Hypoxie → Bradykardie)." },
      { q: "Spezialwissen Herz: Wie verändern sich Plasmavolumen, Erythrozytenmasse und HZV in der Schwangerschaft?", a: "Plasmavolumen +40–50 %, Erythrozytenmasse +20–30 % (Verdünnungsanämie), HZV +30–50 %; systemischer Gefäßwiderstand sinkt." },
      { q: "Spezialwissen Herz: Ab wann droht in der Schwangerschaft die aortokavale Kompression?", a: "Ab etwa der 20. Schwangerschaftswoche in Rückenlage → Linksseitenlage bzw. Uterusverlagerung." },
      { q: "Spezialwissen Herz: Welche kardiovaskulären Altersveränderungen sind für die Narkose relevant?", a: "Steife Arterien (Nachlast ↑), Hypertrophie und diastolische Dysfunktion, geringeres β-Ansprechen und schwacher Baroreflex (schlechte Kompensation von Hypotonie), Leitungsstörungen/Vorhofflimmern, langsamere Kreislaufzeit (verzögerte Wirkung intravenöser Medikamente)." }
    ]
  });

  window.__addSpezialOrgan({
    id: "herz",
    title: "Herz",
    subtopic: "kreislauf",
    subtitle: "Vom Kardiomyozyten bis zur Kreislaufregulation unter Narkose",
    chapters: CH,
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
      "Thygesen K, Alpert JS, Jaffe AS, et al. Fourth universal definition of myocardial infarction (2018). Eur Heart J 2019;40:237–269.",
      "London MJ, Hollenberg M, Wong MG, et al. Intraoperative myocardial ischemia: localization by continuous 12-lead electrocardiography. Anesthesiology 1988;69:232–241.",
      "Vahanian A, Beyersdorf F, Praz F, et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2022;43:561–632.",
      "McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2021;42:3599–3726.",
      "Landoni G, Lomivorotov VV, Nigro Neto C, et al. Volatile anesthetics versus total intravenous anesthesia for cardiac surgery (MYRIAD). N Engl J Med 2019;380:1214–1225.",
      "Hausenloy DJ, et al. Remote ischemic preconditioning and outcomes of cardiac surgery (ERICCA). N Engl J Med 2015;373:1408–1417; Meybohm P, et al. A multicenter trial of remote ischemic preconditioning for heart surgery (RIPHeart). N Engl J Med 2015;373:1397–1407.",
      "Writing Committee for the VISION Study Investigators. Association of postoperative high-sensitivity troponin levels with myocardial injury and 30-day mortality among patients undergoing noncardiac surgery. JAMA 2017;317:1642–1651.",
      "Haddad F, Hunt SA, Rosenthal DN, Murphy DJ. Right ventricular function in cardiovascular disease, part I. Circulation 2008;117:1436–1448.",
      "Salmasi V, Maheshwari K, Yang D, et al. Relationship between intraoperative hypotension, defined by either reduction from baseline or absolute thresholds, and acute kidney and myocardial injury after noncardiac surgery. Anesthesiology 2017;126:47–65.",
      "Futier E, Lefrant JY, Guinot PG, et al. Effect of individualized vs standard blood pressure management strategies on postoperative organ dysfunction (INPRESS). JAMA 2017;318:1346–1357.",
      "Halvorsen S, Mehilli J, Cassese S, et al. 2022 ESC Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery. Eur Heart J 2022;43:3826–3924.",
      "Rasanen J, Wood DC, Weiner S, Ludomirski A, Huhta JC. Role of the pulmonary circulation in the distribution of human fetal cardiac output during the second half of pregnancy. Circulation 1996;94:1068–1073.",
      "Lehrbücher: Klabunde RE. Cardiovascular Physiology Concepts, 3. Aufl. 2021; Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017; Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology, 14. Aufl. 2021."
    ]
  });
})();
