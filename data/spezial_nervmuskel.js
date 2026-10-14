// Spezialwissen Nerv & Muskel – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const CH = [];

  CH.push({
    id: "membran",
    level: "Zelle",
    title: "Ruhemembranpotenzial, Aktionspotenzial und Nervenleitung",
    leitfrage: "Warum macht ein hohes Kalium die Zelle zuerst übererregbar und dann unerregbar?",
    einfach: "Jede Nervenzelle ist innen leicht negativ geladen, weil Pumpen Natrium hinaus und Kalium hinein befördern und Kalium leicht wieder hinaussickert. Ein Reiz öffnet kurz Natrium-Kanäle: Natrium strömt ein, die Zelle wird kurz positiv – das ist das Aktionspotenzial. Es springt bei Nerven mit Isolierschicht (Myelin) von Lücke zu Lücke und ist dadurch sehr schnell.",
    body: [
      { h: "Ruhemembranpotenzial" },
      "Typisch **ca. −70 bis −90 mV** (Nerv ca. −70, Skelett- und Herzmuskel ca. −90). Grundlagen: Die **Na⁺/K⁺-ATPase** transportiert 3 Na⁺ hinaus und 2 K⁺ hinein; in Ruhe ist die Membran vor allem für **Kalium** durchlässig. Kalium strömt dem Konzentrationsgefälle folgend aus, bis die entstehende negative Ladung innen es zurückhält.",
      { formel: "E(K) = 61 mV × log([K⁺]außen / [K⁺]innen)", erkl: "Nernst-Gleichung bei 37 °C. Mit [K⁺] außen 4, innen 140 mmol/l ≈ −94 mV. Das Ruhepotenzial liegt nahe E(K), weil die Kalium-Leitfähigkeit dominiert." },
      { kette: [
        "Extrazelluläres Kalium steigt",
        "Konzentrationsgefälle für K⁺ kleiner → Ruhepotenzial weniger negativ (näher an der Schwelle)",
        "Zunächst: leichter erregbar",
        "Bei anhaltender Depolarisation bleiben Na⁺-Kanäle inaktiviert → Zelle wird unerregbar (Lähmung, Asystolie)"
      ], titel: "Hyperkaliämie" },
      { h: "Aktionspotenzial" },
      { ul: [
        "**Schwelle** (ca. −55 mV) erreicht → spannungsabhängige Na⁺-Kanäle öffnen schlagartig.",
        "**Depolarisation** bis ca. +30 mV.",
        "Na⁺-Kanäle **inaktivieren** (Inaktivierungstor schließt), spannungsabhängige K⁺-Kanäle öffnen → **Repolarisation**.",
        "Na⁺-Kanal-Zustände: geschlossen (ruhend, aktivierbar) → offen → inaktiviert (nicht aktivierbar) → nach Repolarisation wieder ruhend. Die Inaktivierung erklärt die **Refraktärzeit**."
      ] },
      { h: "Leitung und Faserklassen" },
      "Leitungsgeschwindigkeit steigt mit **Durchmesser** und **Myelinisierung**. Myelin isoliert; das Aktionspotenzial entsteht nur an den **Ranvier-Schnürringen** (saltatorische Leitung).",
      { table: { head: ["Faser", "Myelin", "Durchmesser", "Geschwindigkeit", "Funktion"], rows: [
        ["Aα", "dick", "12–20 µm", "70–120 m/s", "Motorik, Muskelspindel"],
        ["Aβ", "dick", "5–12 µm", "30–70 m/s", "Berührung, Druck"],
        ["Aγ", "mittel", "3–6 µm", "15–30 m/s", "Muskelspindel-Efferenzen"],
        ["Aδ", "dünn", "2–5 µm", "12–30 m/s", "Scharfer, gut lokalisierter Schmerz, Kälte"],
        ["B", "dünn", "<3 µm", "3–15 m/s", "Präganglionär sympathisch"],
        ["C", "keine", "0,4–1,2 µm", "0,5–2 m/s", "Dumpfer Schmerz, Wärme, postganglionär sympathisch"]
      ] } }
    ],
    merke: [
      "Ruhepotenzial ca. −70 (Nerv) bis −90 mV (Muskel), nahe E(K).",
      "Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein.",
      "Na⁺-Kanal: ruhend → offen → inaktiviert → Refraktärzeit.",
      "Hyperkaliämie: erst übererregbar, dann unerregbar (Na⁺-Kanäle inaktiviert).",
      "Dicke, myelinisierte Fasern leiten schnell (saltatorisch); C-Fasern langsam, unmyelinisiert."
    ],
    warum: [
      { q: "Warum lähmt eine ausgeprägte Hyperkaliämie, obwohl die Zelle näher an der Schwelle liegt?", a: "Die anhaltende Depolarisation hält die Na⁺-Kanäle im inaktivierten Zustand. Ohne aktivierbare Na⁺-Kanäle kann kein Aktionspotenzial entstehen – das Prinzip ähnelt dem Depolarisationsblock durch Succinylcholin." },
      { q: "Warum stabilisiert Calcium bei Hyperkaliämie das Herz?", a: "Mehr extrazelluläres Calcium verschiebt die Schwelle der Na⁺-Kanäle zu positiveren Werten; der Abstand zwischen Ruhepotenzial und Schwelle wird wieder größer. Am Kaliumspiegel ändert es nichts." }
    ],
    klinik: [
      "Hyperkaliämie: Calcium (Membranstabilisierung), Insulin/Glukose und β₂-Mimetika (Verschiebung in die Zelle), Elimination (Diuretika, Dialyse, Kationenaustauscher).",
      "Demyelinisierende Erkrankungen (z.B. Guillain-Barré, MS) verlangsamen die Leitung.",
      "Fasertypen erklären die Reihenfolge der Blockade durch Lokalanästhetika (→ nächstes Kapitel)."
    ],
    selbsttest: [
      { q: "Spezialwissen Nerv & Muskel: Wie entsteht das Ruhemembranpotenzial?", a: "Na/K-ATPase (3 Na+ raus, 2 K+ rein) erzeugt Gradienten; in Ruhe dominiert die K+-Leitfähigkeit, K+-Ausstrom bis zum Gleichgewicht → ca. −70 bis −90 mV, nahe dem Kalium-Gleichgewichtspotenzial." },
      { q: "Spezialwissen Nerv & Muskel: Welche Zustände durchläuft der spannungsabhängige Natriumkanal?", a: "Geschlossen-ruhend (aktivierbar) → offen → inaktiviert (nicht aktivierbar) → nach Repolarisation wieder ruhend; die Inaktivierung bedingt die Refraktärzeit." },
      { q: "Spezialwissen Nerv & Muskel: Warum wirkt eine schwere Hyperkaliämie lähmend?", a: "Dauerhafte Depolarisation hält Na+-Kanäle inaktiviert → keine Aktionspotenziale mehr." },
      { q: "Spezialwissen Nerv & Muskel: Wovon hängt die Leitungsgeschwindigkeit ab?", a: "Vom Faserdurchmesser und der Myelinisierung (saltatorische Leitung an den Ranvier-Schnürringen)." },
      { q: "Spezialwissen Nerv & Muskel: Welche Fasern leiten scharfen bzw. dumpfen Schmerz?", a: "Scharfer Schmerz: Aδ (dünn myelinisiert, 12–30 m/s); dumpfer Schmerz: C (unmyelinisiert, 0,5–2 m/s)." }
    ]
  });

  CH.push({
    id: "lokalanaesthetika",
    level: "Zelle",
    title: "Lokalanästhetika am Nerv: Wirkort, Differenzialblock und Toxizität",
    leitfrage: "Warum wirkt ein Lokalanästhetikum im entzündeten Gewebe schlecht, und warum fällt die Temperaturempfindung vor der Motorik aus?",
    einfach: "Lokalanästhetika verstopfen die Natrium-Kanäle von innen. Dazu müssen sie erst als ungeladene Form durch die Zellhülle, innen werden sie wieder geladen und blockieren den Kanal. In saurem, entzündetem Gewebe bleibt mehr in der geladenen Form außen hängen. Dünne Fasern werden schneller blockiert als dicke – deshalb verschwinden Kälte- und Schmerzempfinden vor der Muskelkraft.",
    body: [
      { h: "Wirkmechanismus" },
      { kette: [
        "Lokalanästhetikum (schwache Base) liegt im Gewebe als geladene (BH⁺) und ungeladene (B) Form vor",
        "Ungeladene Form diffundiert durch die Nervenmembran",
        "Innen erneut protoniert (BH⁺)",
        "BH⁺ bindet von innen an den Na⁺-Kanal (bevorzugt offener/inaktivierter Zustand)",
        "Kein Na⁺-Einstrom → kein Aktionspotenzial"
      ], titel: "Vom Gewebe in den Kanal" },
      { formel: "pH = pKa + log ([B] / [BH⁺])", erkl: "Henderson-Hasselbalch. Je näher der pKa am Gewebe-pH (7,4), desto mehr ungeladene Form → schnellerer Wirkeintritt (z.B. Lidocain pKa ca. 7,8–7,9; Bupivacain ca. 8,1)." },
      "**Use-Dependence** (Frequenzabhängigkeit): Häufig feuernde Nerven/Zellen haben öfter offene/inaktivierte Kanäle → stärkere Blockade. Das erklärt auch die Wirkung von Lidocain als Antiarrhythmikum bei Tachykardien.",
      { h: "Eigenschaften und klinische Wirkung" },
      { table: { head: ["Eigenschaft", "bestimmt", "Beispiel"], rows: [
        ["pKa", "Anschlagzeit", "Chloroprocain trotz hohem pKa schnell (hohe Konzentration), Bupivacain langsamer"],
        ["Fettlöslichkeit", "Potenz (und Kardiotoxizität)", "Bupivacain > Ropivacain > Lidocain"],
        ["Proteinbindung", "Wirkdauer", "Bupivacain/Ropivacain ca. 95 %, Lidocain ca. 65 %"],
        ["Ester vs. Amid", "Abbau", "Ester: Plasmacholinesterase (Allergie über PABA); Amide: Leber"]
      ] } },
      { h: "Differenzialblock" },
      "Klinische Reihenfolge des Ausfalls typischerweise: **sympathische Fasern (B) → Temperatur/Schmerz (C, Aδ) → Berührung/Druck (Aβ) → Motorik (Aα)**. Ursachen: Faserdurchmesser, Myelin (Zahl der blockierten Schnürringe pro Strecke – etwa drei aufeinanderfolgende müssen blockiert sein) und Lage im Nervenstamm (außen liegende Fasern zuerst). ==Der Sympathikusblock reicht bei Spinalanästhesie meist 2–6 Segmente höher als der sensible Block, der motorische liegt tiefer.==",
      { h: "Lokalanästhetika-Intoxikation (LAST)" },
      { kette: [
        "Hoher Plasmaspiegel (intravasale Injektion, Resorption aus gut durchbluteten Arealen)",
        "ZNS zuerst (hemmende Neurone werden zuerst blockiert): periorale Taubheit, Metallgeschmack, Tinnitus, Unruhe → Krampfanfall → Koma",
        "Herz: Leitungsverzögerung (QRS breit), Bradykardie, ventrikuläre Arrhythmien, Kontraktilität ↓ → Kreislaufstillstand",
        "Bupivacain: kardiotoxisch schon bei niedrigeren Spiegeln ('fast-in, slow-out' am Na⁺-Kanal)"
      ], titel: "Ablauf der Toxizität" },
      "Systemische Resorption nach Injektionsort (absteigend): **interkostal > kaudal > epidural > Plexus brachialis > subkutan**. Therapie: Injektion stoppen, Hilfe, Atemweg/Sauerstoff, Krampfanfall mit Benzodiazepin, **Lipidemulsion 20 %** (1,5 ml/kg Bolus, dann 0,25 ml/kg/min), Reanimation mit reduzierten Adrenalindosen (≤1 µg/kg), keine Lidocain-Gabe als Antiarrhythmikum, lange Reanimation/ECLS."
    ],
    merke: [
      "Ungeladene Form durchquert die Membran, geladene blockiert von innen.",
      "pKa nahe 7,4 → schneller Wirkeintritt; Azidose (Entzündung) → schlechte Wirkung.",
      "Fettlöslichkeit → Potenz; Proteinbindung → Dauer.",
      "Differenzialblock: Sympathikus → Schmerz/Temperatur → Berührung → Motorik.",
      "Resorption: interkostal > kaudal > epidural > Plexus > subkutan; LAST → Lipidemulsion 20 %."
    ],
    warum: [
      { q: "Warum wirkt ein Lokalanästhetikum im Abszess schlecht?", a: "Das saure Gewebe verschiebt das Gleichgewicht zur geladenen Form; weniger ungeladenes Lokalanästhetikum kann die Membran durchqueren und den Wirkort erreichen. Zusätzlich wird es durch die Mehrdurchblutung schneller abtransportiert." },
      { q: "Warum treten bei LAST zuerst Krampfanfälle und erst später Herzprobleme auf?", a: "Die hemmenden Neuronen im ZNS werden zuerst blockiert → Enthemmung, Krämpfe. Für die Blockade der kardialen Na⁺-Kanäle sind (außer bei Bupivacain) höhere Spiegel nötig." }
    ],
    klinik: [
      "Testdosis mit Adrenalin und fraktionierte, aspirierte Injektion unter Ultraschall senken das LAST-Risiko.",
      "Ropivacain/Levobupivacain sind weniger kardiotoxisch als racemisches Bupivacain.",
      "Lipidemulsion an jedem Ort bereithalten, an dem Regionalanästhesie gemacht wird."
    ],
    selbsttest: [
      { q: "Spezialwissen Nerv & Muskel: Wie gelangt ein Lokalanästhetikum an seinen Wirkort?", a: "Die ungeladene Base durchquert die Membran, wird innen protoniert und blockiert als Kation den Na+-Kanal von innen (bevorzugt offen/inaktiviert)." },
      { q: "Spezialwissen Nerv & Muskel: Welche Eigenschaften bestimmen Anschlag, Potenz und Dauer eines Lokalanästhetikums?", a: "pKa (Anschlag), Fettlöslichkeit (Potenz, Toxizität), Proteinbindung (Wirkdauer)." },
      { q: "Spezialwissen Nerv & Muskel: Reihenfolge des Differenzialblocks?", a: "Sympathikus (B) → Temperatur/Schmerz (C, Aδ) → Berührung/Druck (Aβ) → Motorik (Aα)." },
      { q: "Spezialwissen Nerv & Muskel: Reihenfolge der systemischen Resorption nach Injektionsort?", a: "Interkostal > kaudal > epidural > Plexus brachialis > subkutan." },
      { q: "Spezialwissen Nerv & Muskel: Dosierung der Lipidemulsion bei LAST?", a: "20 %: 1,5 ml/kg Bolus über ca. 1 min, dann 0,25 ml/kg/min; Bolus ggf. wiederholen, Infusion verdoppeln; Höchstdosis ca. 12 ml/kg." },
      { q: "Spezialwissen Nerv & Muskel: Was bedeutet Use-Dependence?", a: "Häufig aktivierte Kanäle sind öfter offen/inaktiviert und werden stärker blockiert – Grundlage z.B. der antiarrhythmischen Wirkung von Lidocain." }
    ]
  });

  CH.push({
    id: "endplatte",
    level: "Gewebe",
    title: "Neuromuskuläre Übertragung und Muskelrelaxanzien",
    leitfrage: "Warum kann man drei Viertel der Acetylcholin-Rezeptoren blockieren, ohne dass der Patient schwächer wird?",
    einfach: "Am Ende eines motorischen Nervs wird Acetylcholin ausgeschüttet. Es dockt an Rezeptoren auf dem Muskel an, diese öffnen sich, der Muskel wird erregt und zieht sich zusammen. Normalerweise wird viel mehr Acetylcholin freigesetzt und gibt es viel mehr Rezeptoren als nötig – eine große Sicherheitsreserve. Muskelrelaxanzien müssen erst diese Reserve aufbrauchen, bevor man eine Schwäche sieht.",
    body: [
      { h: "Ablauf an der Endplatte" },
      { kette: [
        "Aktionspotenzial erreicht die Nervenendigung",
        "Spannungsabhängige Calciumkanäle (P/Q-Typ) öffnen, Ca²⁺ strömt ein",
        "Vesikel mit Acetylcholin verschmelzen (SNARE-Proteine) – Botulinumtoxin spaltet diese",
        "ACh bindet an nikotinische Rezeptoren (je Rezeptor 2 ACh an die α-Untereinheiten)",
        "Kationenkanal öffnet → Endplattenpotenzial → Muskel-Aktionspotenzial",
        "Acetylcholinesterase spaltet ACh in Millisekunden → Cholin wird wieder aufgenommen"
      ], titel: "Neuromuskuläre Übertragung" },
      { h: "Sicherheitsreserve (Margin of Safety)" },
      "Ein Muskel zeigt erst eine abgeschwächte Einzelzuckung, wenn ca. **70–75 %** der Rezeptoren besetzt sind; bei ca. **90–95 %** fehlt die Antwort. ==Daher bedeutet eine klinisch 'normale' Kraft nicht, dass keine Restrelaxierung besteht – erst eine TOF-Ratio ≥0,9 (quantitativ gemessen) schließt sie aus.==",
      { h: "Rezeptortypen" },
      { ul: [
        "**Reifer (junktionaler)** Rezeptor: α₂βδε, nur an der Endplatte.",
        "**Unreifer (extrajunktionaler)** Rezeptor: α₂βγδ (fetaler Typ) und α₇-Rezeptoren – über die ganze Muskelfaser verteilt, länger geöffnet. Hochreguliert nach Denervierung (Querschnitt, Schlaganfall, Guillain-Barré), Verbrennungen, langer Immobilisation, Sepsis/Critical-Illness – beginnend nach ca. 24–72 h.",
        "Folge: **Succinylcholin** löst massiven Kaliumausstrom aus (Hyperkaliämie, Herzstillstand); nicht-depolarisierende Relaxanzien wirken schwächer (Resistenz)."
      ] },
      { h: "Depolarisierender vs. nicht-depolarisierender Block" },
      { table: { head: ["Merkmal", "Succinylcholin (depolarisierend, Phase I)", "Nicht-depolarisierend (Rocuronium u.a.)"], rows: [
        ["Mechanismus", "Agonist, Dauerdepolarisation → Na⁺-Kanäle der Umgebung inaktiviert", "Kompetitiver Antagonist"],
        ["Faszikulationen", "ja", "nein"],
        ["TOF", "Gleichmäßig reduziert, kein Fade", "Fade (Abnahme T4/T1)"],
        ["Posttetanische Potenzierung", "nein", "ja"],
        ["Cholinesterasehemmer", "verstärken/verlängern", "antagonisieren"],
        ["Abbau", "Plasmacholinesterase (Minuten)", "Leber/Niere, Hofmann (Cisatracurium), Plasmacholinesterase (Mivacurium)"]
      ] } },
      "Ein **Phase-II-Block** nach hohen/repetitiven Succinylcholin-Dosen ähnelt dem nicht-depolarisierenden (Fade). Der **Fade** entsteht, weil nicht-depolarisierende Relaxanzien auch präsynaptische Rezeptoren blockieren, die bei hoher Reizfrequenz die ACh-Nachlieferung fördern.",
      { h: "Reversierung" },
      { ul: [
        "**Neostigmin** (+ Glycopyrronium/Atropin gegen muskarinerge Effekte): hemmt Acetylcholinesterase → mehr ACh konkurriert. Wirkt erst, wenn schon Erholung begonnen hat (TOF-Count ≥2–4); Deckeneffekt; zu hohe Dosis bei fast erholtem Block kann schwächen.",
        "**Sugammadex**: Cyclodextrin, umhüllt Rocuronium (und Vecuronium) im Plasma 1:1 → Konzentrationsgefälle zieht Relaxans von der Endplatte. Dosis nach Blocktiefe (2 mg/kg bei TOF-Count ≥2, 4 mg/kg bei PTC 1–2, 16 mg/kg sofortige Aufhebung nach 1,2 mg/kg Rocuronium)."
      ] }
    ],
    merke: [
      "Ca²⁺ setzt ACh frei; nikotinische Rezeptoren brauchen 2 ACh; Esterase beendet in ms.",
      "Sicherheitsreserve: Schwäche erst ab ca. 70–75 % Rezeptorbesetzung.",
      "Extrajunktionale Rezeptoren (Denervierung, Verbrennung, Immobilisation) → Succinylcholin-Hyperkaliämie.",
      "Depolarisierend: kein Fade, keine PTP; nicht-depolarisierend: Fade, PTP.",
      "Neostigmin braucht beginnende Erholung; Sugammadex kapselt Rocuronium/Vecuronium ein."
    ],
    warum: [
      { q: "Warum führt Succinylcholin nach einer Querschnittlähmung zu lebensgefährlicher Hyperkaliämie?", a: "Nach Denervierung bilden sich unreife Rezeptoren über die gesamte Muskelfaser. Succinylcholin öffnet sie alle gleichzeitig und lange → massiver Kaliumausstrom aus der ganzen Muskelmasse statt nur an der Endplatte." },
      { q: "Warum kann Neostigmin einen tiefen Block nicht aufheben?", a: "Es erhöht die ACh-Menge nur begrenzt (die Esterase-Hemmung hat ein Maximum). Ist der Großteil der Rezeptoren noch durch Relaxans besetzt, reicht das zusätzliche ACh nicht, um die Sicherheitsreserve zu überwinden." }
    ],
    klinik: [
      "Quantitatives neuromuskuläres Monitoring (TOF-Ratio ≥0,9 vor Extubation) wird von ASA (2023) und ESAIC empfohlen.",
      "Succinylcholin-Kontraindikationen: Hyperkaliämie, Verbrennung/Denervierung/Immobilisation nach ca. 24–72 h, Muskeldystrophien, MH-Disposition.",
      "Myasthenie: weniger Rezeptoren → empfindlich für nicht-depolarisierende, relativ resistent gegen Succinylcholin."
    ],
    selbsttest: [
      { q: "Spezialwissen Nerv & Muskel: Beschreibe die neuromuskuläre Übertragung in Stichworten.", a: "AP → präsynaptische P/Q-Ca2+-Kanäle → Ca2+-Einstrom → SNARE-vermittelte ACh-Freisetzung → 2 ACh an nikotinischen Rezeptor → Kationeneinstrom → Endplattenpotenzial → Muskel-AP; Abbau durch Acetylcholinesterase." },
      { q: "Spezialwissen Nerv & Muskel: Was bedeutet Margin of Safety?", a: "Eine Schwächung der Einzelzuckung tritt erst bei ca. 70–75 % Rezeptorbesetzung auf, komplette Blockade bei ca. 90–95 %; klinische Kraft schließt Restrelaxierung nicht aus." },
      { q: "Spezialwissen Nerv & Muskel: Wann und warum entstehen extrajunktionale Rezeptoren?", a: "Nach Denervierung, Verbrennung, Immobilisation, kritischer Krankheit (ab ca. 24–72 h): unreife α2βγδ- und α7-Rezeptoren über die ganze Faser → Succinylcholin-Hyperkaliämie, Resistenz gegen nicht-depolarisierende Relaxanzien." },
      { q: "Spezialwissen Nerv & Muskel: Wie unterscheidet sich ein depolarisierender von einem nicht-depolarisierenden Block im TOF?", a: "Depolarisierend (Phase I): gleichmäßig verminderte Antworten ohne Fade, keine posttetanische Potenzierung. Nicht-depolarisierend: Fade und posttetanische Potenzierung." },
      { q: "Spezialwissen Nerv & Muskel: Sugammadex-Dosierung nach Blocktiefe?", a: "2 mg/kg bei TOF-Count ≥2, 4 mg/kg bei PTC 1–2, 16 mg/kg zur sofortigen Aufhebung nach 1,2 mg/kg Rocuronium." },
      { q: "Spezialwissen Nerv & Muskel: Woher kommt der Fade beim nicht-depolarisierenden Block?", a: "Blockade präsynaptischer nikotinischer Rezeptoren, die bei hoher Reizfrequenz die ACh-Mobilisierung fördern → abnehmende Freisetzung bei Serienreizen." }
    ]
  });

  CH.push({
    id: "kontraktion",
    level: "Zelle",
    title: "Muskelkontraktion, Calcium und maligne Hyperthermie",
    leitfrage: "Wie wird aus einem elektrischen Signal an der Muskelzelle eine Kraft – und was geht bei der malignen Hyperthermie schief?",
    einfach: "Das elektrische Signal läuft in kleine Röhrchen tief in die Muskelfaser. Dort öffnet ein Sensor einen Kanal im Calcium-Speicher. Calcium gibt die Bindungsstellen frei, an denen die Muskeleiweiße aneinander ziehen. Bei der malignen Hyperthermie ist dieser Calcium-Kanal defekt: Bestimmte Narkosegase lassen ihn offen stehen, der Muskel verbraucht ungebremst Energie und überhitzt.",
    body: [
      { h: "Elektromechanische Kopplung im Skelettmuskel" },
      { kette: [
        "Muskel-Aktionspotenzial läuft in die T-Tubuli",
        "Dihydropyridin-Rezeptor (spannungsabhängiger L-Typ-Ca²⁺-Kanal) ändert seine Form",
        "Mechanische Kopplung öffnet den Ryanodin-Rezeptor (RyR1) im sarkoplasmatischen Retikulum",
        "Ca²⁺ strömt ins Zytoplasma, bindet an Troponin C",
        "Tropomyosin gibt Myosin-Bindungsstellen am Aktin frei → Querbrückenzyklus (ATP-verbrauchend)",
        "Erschlaffung: SERCA-Pumpe pumpt Ca²⁺ zurück (ebenfalls ATP)"
      ], titel: "Vom Aktionspotenzial zur Kraft" },
      "Im Skelettmuskel braucht die Kopplung **kein** einströmendes Calcium von außen (mechanische Kopplung DHPR–RyR1). ==Im Herzmuskel dagegen löst einströmendes Calcium über RyR2 die Freisetzung aus ('calciuminduzierte Calciumfreisetzung') – deshalb wirken Calciumantagonisten am Herzen, nicht am Skelettmuskel.==",
      { h: "Glatte Muskulatur" },
      "Ca²⁺ bindet an **Calmodulin** → aktiviert die Myosin-Leichtketten-Kinase. Steuerung zusätzlich über Phosphatasen (NO → cGMP → Erschlaffung; Grundlage von Nitraten und Sildenafil). Tonus kann mit wenig Energie lange gehalten werden ('Latch'-Zustand).",
      { h: "Maligne Hyperthermie" },
      { kette: [
        "Genetische Disposition (meist RYR1-, seltener CACNA1S-/STAC3-Varianten; autosomal-dominant)",
        "Trigger: alle volatilen Anästhetika, Succinylcholin",
        "RyR1 bleibt offen → unkontrollierter Ca²⁺-Ausstrom",
        "Dauerkontraktion + Pumpenarbeit → ATP-Verbrauch, O₂-Verbrauch und CO₂-Produktion ↑↑",
        "Frühzeichen: Anstieg des endtidalen CO₂ trotz erhöhter Ventilation, Tachykardie, Masseterspasmus/Rigor",
        "Später: Hyperthermie, Azidose (respiratorisch + metabolisch), Hyperkaliämie, Rhabdomyolyse, Arrhythmien, DIC"
      ], titel: "Pathophysiologie der malignen Hyperthermie" },
      "**Dantrolen** hemmt den RyR1 und senkt die Calciumfreisetzung. Initial **2,5 mg/kg i.v.**, Wiederholung bis zur Symptomkontrolle (oft insgesamt bis ca. 10 mg/kg, ggf. mehr). Daneben: Trigger stoppen, mit 100 % O₂ und hohem Frischgasfluss hyperventilieren (Aktivkohlefilter), Kühlen, Hyperkaliämie und Arrhythmien behandeln, Diurese. ==Hyperthermie ist ein spätes Zeichen – das früheste ist meist der unerklärte CO₂-Anstieg.=="
    ],
    merke: [
      "Skelettmuskel: DHPR mechanisch an RyR1 gekoppelt; Herz: Ca²⁺-induzierte Ca²⁺-Freisetzung (RyR2).",
      "Ca²⁺ bindet an Troponin C → Querbrückenzyklus; Erschlaffung durch SERCA (ATP).",
      "Glatter Muskel: Calmodulin/MLCK; NO → cGMP → Erschlaffung.",
      "MH: RYR1, Trigger Volatila + Succinylcholin; frühestes Zeichen etCO₂ ↑.",
      "Dantrolen 2,5 mg/kg, wiederholen bis Kontrolle."
    ],
    warum: [
      { q: "Warum braucht auch die Muskelerschlaffung Energie?", a: "Die SERCA-Pumpe muss Calcium aktiv gegen das Gefälle zurück ins sarkoplasmatische Retikulum pumpen, und ATP wird benötigt, um Myosin vom Aktin zu lösen. Fehlt ATP (z.B. nach dem Tod), bleibt der Muskel starr (Totenstarre)." },
      { q: "Warum steigt bei der MH das CO₂ vor der Temperatur?", a: "Der gesteigerte Stoffwechsel produziert sofort mehr CO₂, das über die Lunge sichtbar wird. Die Wärme verteilt sich dagegen erst im großen Wärmespeicher des Körpers (viel Wasser mit hoher Wärmekapazität) – die Temperatur steigt verzögert." }
    ],
    klinik: [
      "MH-Notfallausrüstung und ausreichend Dantrolen (bzw. Ryanodex-Äquivalent) vorhalten.",
      "MH-disponierte Patienten: triggerfreie Narkose (TIVA), vorbereitetes Gerät (Spülen bzw. Aktivkohlefilter).",
      "Abklärung nach Verdacht: In-vitro-Kontrakturtest bzw. Genetik in einem MH-Zentrum."
    ],
    selbsttest: [
      { q: "Spezialwissen Nerv & Muskel: Wie läuft die elektromechanische Kopplung im Skelettmuskel?", a: "AP in T-Tubuli → DHPR-Konformationsänderung → mechanische Öffnung von RyR1 → Ca2+ aus dem SR → Troponin C → Querbrückenzyklus; Erschlaffung über SERCA." },
      { q: "Spezialwissen Nerv & Muskel: Unterschied der Calciumfreisetzung zwischen Skelett- und Herzmuskel?", a: "Skelett: mechanische Kopplung DHPR–RyR1, kein externes Ca2+ nötig. Herz: einströmendes Ca2+ (L-Typ) löst über RyR2 die Freisetzung aus." },
      { q: "Spezialwissen Nerv & Muskel: Was ist das früheste Zeichen der malignen Hyperthermie?", a: "Unerklärter Anstieg des endtidalen CO2 trotz gesteigerter Ventilation, oft mit Tachykardie und Rigor; Hyperthermie ist spät." },
      { q: "Spezialwissen Nerv & Muskel: Wie wirkt Dantrolen und wie wird es dosiert?", a: "Hemmt RyR1 → weniger Ca2+-Freisetzung; initial 2,5 mg/kg i.v., wiederholen bis Symptomkontrolle (oft bis ca. 10 mg/kg)." },
      { q: "Spezialwissen Nerv & Muskel: Wie wird glatte Muskulatur aktiviert und entspannt?", a: "Ca2+-Calmodulin aktiviert die Myosin-Leichtketten-Kinase; NO → cGMP aktiviert die Myosin-Phosphatase → Erschlaffung." }
    ]
  });

  CH.push({
    id: "relaxometrie",
    level: "Klinik",
    title: "Neuromuskuläres Monitoring in der Praxis",
    leitfrage: "Warum täuscht ein Blick auf die Augenmuskeln über die Erholung des Kehlkopfs – und warum reicht 'Kopf heben' nicht?",
    einfach: "Muskeln reagieren unterschiedlich schnell und stark auf Muskelrelaxanzien. Das Zwerchfell erholt sich früh, die Schlundmuskulatur spät. Am Daumen misst man einen Muskel, der etwa so empfindlich ist wie die Schluckmuskeln. Klinische Tests wie Kopfheben sind zu ungenau – nur eine gemessene TOF-Ratio von mindestens 0,9 zeigt sicher eine ausreichende Erholung.",
    body: [
      { h: "Reizmuster" },
      { table: { head: ["Muster", "Was", "Aussage"], rows: [
        ["Einzelreiz", "0,1–1 Hz", "Nur mit Ausgangswert vergleichbar"],
        ["Train-of-Four (TOF)", "4 Reize bei 2 Hz", "TOF-Count (0–4) und TOF-Ratio T4/T1"],
        ["Post-Tetanic Count (PTC)", "Tetanus 50 Hz für 5 s, dann Einzelreize", "Tiefer Block, wenn TOF-Count = 0"],
        ["Double-Burst (DBS)", "zwei kurze Salven", "Fade fühlbar besser als bei TOF, aber nicht sicher <0,9"]
      ] } },
      "Visuell oder taktil sind TOF-Ratios über ca. **0,4** kaum vom Normalwert zu unterscheiden. ==Darum: quantitative (akzelero-, kinemyo- oder elektromyographische) Messung, Ziel TOF-Ratio ≥0,9 vor Extubation.== Bei Akzeleromyographie wird oft auf den Ausgangswert normalisiert (Werte bis ca. 1,1–1,2 möglich).",
      { h: "Unterschiedliche Muskeln" },
      { ul: [
        "**Zwerchfell, Larynxmuskeln**: relativ resistent – Wirkung tritt schneller ein, erholt sich früher (Husten/Atmen trotz Restblock am Daumen möglich).",
        "**M. adductor pollicis** (N. ulnaris, Daumen): empfindlich, langsam – repräsentativ für die Erholung der oberen Atemwegs- und Schluckmuskulatur.",
        "**M. corrugator supercilii** (Augenbraue, N. facialis): ähnelt Zwerchfell/Larynx → gut für den Zeitpunkt der Intubation, aber ==überschätzt die Erholung== bei der Ausleitung.",
        "**M. orbicularis oculi**: zu empfindlich/unzuverlässig, Gefahr direkter Muskelreizung."
      ] },
      { h: "Restrelaxierung" },
      "Eine TOF-Ratio <0,9 ist mit Schluckstörungen, Aspiration, Hypoxämie, eingeschränkter Atemwegsoffenheit und abgeschwächter hypoxischer Atemantwort assoziiert. Klinische Zeichen (Kopf 5 s heben, Händedruck, Tidalvolumen) können schon bei TOF-Ratio ca. 0,5 positiv sein.",
      { h: "Faktoren, die die Relaxanswirkung verstärken" },
      { ul: [
        "Volatile Anästhetika (Verstärkung nicht-depolarisierender Relaxanzien)",
        "Magnesium, Aminoglykoside, Clindamycin, Lithium, Lokalanästhetika (hohe Spiegel)",
        "Hypothermie, Azidose, Hypokaliämie, Hypokalzämie",
        "Leber-/Niereninsuffizienz (Kumulation), hohes Alter",
        "Myasthenie, Lambert-Eaton"
      ] }
    ],
    merke: [
      "TOF: 4 Reize/2 Hz; PTC bei tiefem Block; DBS taktil besser, aber unzureichend.",
      "Nur quantitative Messung zuverlässig; Ziel TOF-Ratio ≥0,9.",
      "Adductor pollicis ≈ Schluckmuskeln; Corrugator ≈ Larynx/Zwerchfell (überschätzt Erholung).",
      "Klinische Tests positiv schon bei TOF-Ratio ca. 0,5.",
      "Verstärker: Volatila, Magnesium, Aminoglykoside, Hypothermie, Azidose, Elektrolytstörungen."
    ],
    warum: [
      { q: "Warum kann ein Patient mit Restrelaxierung gut atmen, aber trotzdem aspirieren?", a: "Das Zwerchfell ist gegenüber Relaxanzien resistent und erholt sich früh; die Pharynx- und Schluckmuskulatur ist empfindlich und erholt sich spät. Die Atemarbeit ist ausreichend, Atemwegsschutz und Schlucken aber nicht." },
      { q: "Warum misst man zur Intubation an der Augenbraue, zur Extubation am Daumen?", a: "Der M. corrugator reagiert ähnlich schnell wie die Kehlkopfmuskeln – er zeigt, wann Intubationsbedingungen erreicht sind. Für die Erholung der Schluckmuskeln ist der langsamere Adductor pollicis repräsentativ." }
    ],
    klinik: [
      "ASA-Leitlinie 2023: quantitatives Monitoring statt klinischer Tests, Reversierung mit Sugammadex bei tiefem/mäßigem Rocuronium-Block bevorzugt, Neostigmin nur bei minimalem Block.",
      "Magnesiumgabe (z.B. Präeklampsie) verlängert die Relaxanswirkung deutlich.",
      "Hypotherme Patienten erst nach Wiedererwärmung und gemessener Erholung extubieren."
    ],
    selbsttest: [
      { q: "Spezialwissen Nerv & Muskel: Was ist ein Post-Tetanic Count und wann wird er gebraucht?", a: "Nach einem 50-Hz-Tetanus (5 s) werden Einzelreize gezählt; zur Beurteilung eines tiefen Blocks, wenn der TOF-Count 0 ist." },
      { q: "Spezialwissen Nerv & Muskel: Ab welcher TOF-Ratio gilt die Erholung als ausreichend?", a: "≥0,9, gemessen mit einem quantitativen Verfahren." },
      { q: "Spezialwissen Nerv & Muskel: Warum überschätzt der M. corrugator supercilii die Erholung?", a: "Er ist wie Zwerchfell und Larynx relativ resistent und erholt sich früher als die Schluckmuskulatur (repräsentiert durch den Adductor pollicis)." },
      { q: "Spezialwissen Nerv & Muskel: Nenne Faktoren, die nicht-depolarisierende Relaxanzien verstärken.", a: "Volatila, Magnesium, Aminoglykoside, Clindamycin, Lithium, Hypothermie, Azidose, Hypokaliämie, Hypokalzämie, Leber-/Niereninsuffizienz, Myasthenie." },
      { q: "Spezialwissen Nerv & Muskel: Warum reichen taktile TOF-Beurteilung und Kopfheben nicht aus?", a: "Fade ist taktil ab TOF-Ratio ca. 0,4 kaum noch spürbar; klinische Tests sind schon bei TOF-Ratio ca. 0,5 positiv." }
    ]
  });

  window.__addSpezialOrgan({
    id: "nervmuskel",
    title: "Nerv & Muskel",
    subtitle: "Von Membranpotenzial und Lokalanästhetika bis zur Endplatte, Muskelkontraktion und Relaxometrie",
    subtopic: "nerv-muskel",
    chapters: CH,
    sources: [
      "Hille B. Ion Channels of Excitable Membranes. 3. Aufl. Sinauer 2001.",
      "Becker DE, Reed KL. Local anesthetics: review of pharmacological considerations. Anesth Prog 2012;59:90–101.",
      "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine Local Anesthetic Systemic Toxicity checklist: 2020 version. Reg Anesth Pain Med 2021;46:81–82.",
      "Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia in acquired pathologic states. Anesthesiology 2006;104:158–169.",
      "Naguib M, Brull SJ, Johnson KB. Conceptual and technical insights into the basis of neuromuscular monitoring. Anaesthesia 2017;72 Suppl 1:16–37.",
      "Thilen SR, Weigel WA, Todd MM, et al. 2023 American Society of Anesthesiologists Practice Guidelines for Monitoring and Antagonism of Neuromuscular Blockade. Anesthesiology 2023;138:13–41.",
      "Fuchs-Buder T, Romero CS, Lewald H, et al. Peri-operative management of neuromuscular blockade: a guideline from the European Society of Anaesthesiology and Intensive Care. Eur J Anaesthesiol 2023;40:82–94.",
      "Hopkins PM, Girard T, Dalay S, et al. Malignant hyperthermia 2020: Guideline from the Association of Anaesthetists. Anaesthesia 2021;76:655–664.",
      "Lehrbücher: Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017; Miller's Anesthesia, 10. Aufl. (Kapitel Neuromuskuläre Physiologie und Pharmakologie)."
    ]
  });
})();
