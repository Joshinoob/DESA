// Spezialwissen Lunge – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  function bar(y, label, value, mm, cls, note) {
    const w = Math.round(mm * 1.7);
    return '<text x="10" y="' + y + '" class="t-s">' + label + "</text>" +
      '<rect x="10" y="' + (y + 5) + '" width="' + w + '" height="14" class="' + cls + '"/>' +
      '<text x="' + (16 + w) + '" y="' + (y + 16) + '" class="t-l">' + value + "</text>" +
      (note ? '<text x="10" y="' + (y + 32) + '" class="t-n">' + note + "</text>" : "");
  }
  const FIG_CASCADE =
    '<svg viewBox="0 0 360 300" role="img" aria-label="Sauerstoffkaskade von der Umgebungsluft bis zu den Mitochondrien">' +
    bar(14, "Trockene Umgebungsluft (0,21 × 760)", "≈ 160 mmHg", 160, "b1", "↓ Wasserdampf (47 mmHg) in den Atemwegen") +
    bar(66, "Inspiratorisch, befeuchtet (0,21 × 713)", "≈ 150 mmHg", 150, "b1", "↓ Verdünnung durch CO₂ (PaCO₂/RQ, alveoläre Gasgleichung)") +
    bar(118, "Alveolär (PAO₂)", "≈ 100 mmHg", 100, "b2", "↓ AaDO₂: physiologischer Shunt, V/Q-Unterschiede") +
    bar(170, "Arteriell (PaO₂)", "≈ 90–100 mmHg", 95, "b2", "↓ O₂-Extraktion im Gewebe (ca. 25 %)") +
    bar(222, "Gemischtvenös (PvO₂)", "≈ 40 mmHg", 40, "b3", "↓ Diffusion über Interstitium und Zytoplasma") +
    bar(274, "Mitochondrien", "wenige mmHg", 4, "b3", "") +
    "</svg>";

  const CH = [];

  CH.push({
    id: "struktur",
    level: "Gewebe",
    title: "Funktionelle Anatomie, Blut-Gas-Schranke und Surfactant",
    leitfrage: "Wie schafft es die Lunge, auf engstem Raum eine Austauschfläche so groß wie ein halbes Tennisfeld bereitzustellen – mit einer Trennwand dünner als ein Mikrometer?",
    einfach: "Die Lunge ist ein Baum aus immer feineren Röhren, an deren Enden Hunderte Millionen winziger Bläschen (Alveolen) hängen. Zwischen Luft und Blut liegt dort nur eine hauchdünne Wand – so kann Sauerstoff blitzschnell hinüber. Ein seifenartiger Film (Surfactant) verhindert, dass die kleinen Bläschen in sich zusammenfallen.",
    body: [
      { h: "Der Atemwegsbaum" },
      "Die Atemwege verzweigen sich über ca. 23 Generationen jeweils in zwei Äste (Weibel).",
      { ul: [
        "**Generation 0–16** (Luftröhre bis Bronchioli terminales) = **leitende Zone**: kein Gasaustausch. Ihr Volumen ist der **anatomische Totraum** (ca. 150 ml bzw. ca. 2 ml/kg).",
        "**Generation 17–23** (Bronchioli respiratorii, Alveolargänge, Alveolarsäckchen) = **Austauschzone**."
      ] },
      "Knorpel gibt es nur in den Bronchien. ==Die knorpelfreien Bronchiolen werden allein durch den Zug des umgebenden Lungengewebes offengehalten== (wie Zeltschnüre; Mead et al. 1970). Deshalb verschließen sie sich zuerst, wenn das Lungenvolumen sinkt (Rückenlage, Narkose, Adipositas, Alter).",
      { h: "Alveolen und Austauschfläche" },
      "Die Lunge enthält im Mittel ca. **480 Millionen Alveolen** (Spannbreite ca. 270–790 Millionen; Ochs et al. 2004) mit je ca. 200 µm Durchmesser. Die Austauschfläche beträgt ca. **100–140 m²**. In den Lungenkapillaren befinden sich in Ruhe ca. 70 ml Blut (bei Belastung bis ca. 200 ml).",
      { kette: [
        "Ein rotes Blutkörperchen braucht in Ruhe ca. 0,75 s durch die Lungenkapillare",
        "Der Sauerstoffausgleich ist schon nach ca. 0,25 s erreicht",
        "==Es bleibt eine große Zeitreserve==",
        "Diese Reserve schrumpft bei Belastung (schnellere Passage), in großer Höhe (kleineres Druckgefälle) oder bei verdickter Trennwand (Lungenfibrose) → erst dann wird Diffusion zum Problem"
      ], titel: "Die Diffusionsreserve" },
      { h: "Die Blut-Gas-Schranke" },
      "Auf der **dünnen Seite** besteht sie nur aus der flachen Alveolarzelle (Typ I), einer gemeinsamen Basalmembran und der Kapillarwand – zusammen ca. **0,2–0,5 µm**. Hier findet der Gasaustausch statt. Auf der **dicken Seite** liegt zusätzlich Bindegewebe. ==Ödemflüssigkeit sammelt sich zuerst auf der dicken Seite== und schützt so eine Zeit lang die dünne Austauschseite.",
      { h: "Die Zellen der Alveole" },
      { ul: [
        "**Typ-I-Pneumozyten:** flache Zellen, bedecken ca. 95 % der Oberfläche; sehr empfindlich.",
        "**Typ-II-Pneumozyten:** würfelförmig, bilden den **Surfactant** und sind Ersatzzellen, aus denen nach Schädigung neue Typ-I-Zellen entstehen.",
        "**Alveolarmakrophagen:** Abwehr und Reinigung.",
        "**Kohn-Poren** zwischen benachbarten Alveolen erlauben eine Belüftung 'über Umwege' (kollaterale Ventilation)."
      ] },
      { h: "Surfactant" },
      "Surfactant besteht zu ca. 90 % aus Fetten (v.a. **Dipalmitoylphosphatidylcholin**) und zu ca. 10 % aus Eiweißen. **SP-B und SP-C** verteilen den Film an der Oberfläche (angeborener SP-B-Mangel ist ohne Lungentransplantation tödlich). **SP-A und SP-D** dienen der Immunabwehr.",
      { formel: "P = 2 × Oberflächenspannung / Radius", erkl: "Laplace-Gesetz: Ohne Surfactant hätten kleine Alveolen einen höheren Kollapsdruck als große und würden sich in diese entleeren." },
      { kette: [
        "Surfactant senkt die Oberflächenspannung – umso stärker, je kleiner die Alveole wird",
        "Kleine und große Alveolen bleiben nebeneinander stabil",
        "==Höhere Dehnbarkeit (Compliance) → weniger Atemarbeit; außerdem wird weniger Flüssigkeit in die Alveolen gezogen=="
      ], titel: "Was Surfactant bewirkt" },
      "Ausreichende Mengen bildet der Fetus erst ab ca. 34–35 Schwangerschaftswochen; Kortikosteroide vor der Geburt beschleunigen die Reifung.",
      { h: "Aufgaben jenseits der Atmung" },
      { ul: [
        "**Filter** für kleine Gerinnsel, Luftbläschen und Zellhaufen.",
        "**Stoffwechsel:** Das Angiotensin-Converting-Enzym (ACE) der Lungenkapillaren wandelt Angiotensin I in Angiotensin II um und baut Bradykinin ab; Serotonin und ein Teil des Noradrenalins werden aufgenommen.",
        "**Medikamentenspeicher:** Lipophile basische Medikamente (z.B. Fentanyl, Lidocain) werden beim ersten Durchgang in relevantem Ausmaß aufgenommen und verzögert wieder abgegeben.",
        "**Blutreservoir** (ca. 500 ml) und **Abwehr** durch die Flimmerhärchen (trockene Gase, hohe Sauerstoffkonzentration und volatile Anästhetika beeinträchtigen sie)."
      ] }
    ],
    merke: [
      "Generation 0–16 leitend (anatomischer Totraum ca. 2 ml/kg), 17–23 Austauschzone.",
      "Ca. 480 Mio. Alveolen, ca. 100–140 m², Trennwand ca. 0,2–0,5 µm.",
      "Kontaktzeit 0,75 s, Ausgleich nach ca. 0,25 s → Diffusionsreserve.",
      "Typ I = Austauschfläche (95 %), Typ II = Surfactant und Ersatzzellen.",
      "Surfactant: Phospholipide + SP-B/SP-C (Oberfläche) + SP-A/SP-D (Abwehr)."
    ],
    warum: [
      { q: "Warum verschließen sich kleine Atemwege bei niedrigem Lungenvolumen, obwohl die Alveolen Surfactant haben?", a: "Knorpelfreie Bronchiolen werden nur durch den Zug des umgebenden Lungengewebes offengehalten. Bei niedrigem Lungenvolumen sinkt dieser Zug, und in den unten liegenden Lungenabschnitten wird der Druck im Pleuraspalt weniger negativ – die Atemwege schließen sich, bevor die Alveolen kollabieren. Surfactant stabilisiert die Alveolen, ersetzt aber nicht den Zug an den Atemwegen." },
      { q: "Warum führt eine Diffusionsstörung oft erst unter Belastung zur Hypoxämie?", a: "In Ruhe ist der Sauerstoffausgleich nach etwa einem Drittel der Kontaktzeit erreicht. Eine verdickte Trennwand verlangsamt den Ausgleich zunächst nur innerhalb dieser Reserve. Bei Belastung verkürzt sich die Kontaktzeit auf ca. 0,25 s – dann reicht die Zeit nicht mehr, und das Blut verlässt die Kapillare, bevor es voll beladen ist." }
    ],
    klinik: [
      "Frühgeborene: Surfactantmangel → Atemnotsyndrom; Therapie mit Surfactant und kontinuierlichem positivem Atemwegsdruck (CPAP).",
      "Akutes Lungenversagen (ARDS): Schädigung von Typ-I-Zellen und Kapillarwand, gestörter Surfactant → eiweißreiches Ödem und Atelektasen.",
      "Nach Lungenresektion: kleinere Gefäßbahn und Austauschfläche → höhere Drücke, geringere Diffusionsreserve."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Welche Atemwegsgenerationen bilden die leitende und welche die Austauschzone?", a: "Generation 0–16 (Luftröhre bis Bronchioli terminales) = leitende Zone/anatomischer Totraum; Generation 17–23 (Bronchioli respiratorii bis Alveolarsäckchen) = Austauschzone." },
      { q: "Spezialwissen Lunge: Wie groß sind Alveolenzahl, Austauschfläche und Dicke der Blut-Gas-Schranke?", a: "Ca. 480 Mio. Alveolen (Ochs 2004, Spannbreite ca. 270–790 Mio.), ca. 100–140 m² Fläche, dünne Seite der Schranke ca. 0,2–0,5 µm." },
      { q: "Spezialwissen Lunge: Wie lange dauert die Kapillarpassage eines Erythrozyten und wann ist der Sauerstoffausgleich erreicht?", a: "Ca. 0,75 s in Ruhe; der Ausgleich ist nach ca. 0,25 s erreicht – eine Reserve, die bei Belastung, in großer Höhe oder bei verdickter Schranke schwindet." },
      { q: "Spezialwissen Lunge: Welche Funktionen haben Typ-I- und Typ-II-Pneumozyten?", a: "Typ I: flach, bedecken ca. 95 % der Oberfläche, Gasaustausch. Typ II: würfelförmig, bilden Surfactant und sind Ersatzzellen für Typ-I-Zellen." },
      { q: "Spezialwissen Lunge: Woraus besteht Surfactant und welche Aufgaben haben seine Eiweiße?", a: "Ca. 90 % Fette (v.a. Dipalmitoylphosphatidylcholin), ca. 10 % Eiweiße: SP-B und SP-C (Verteilung und Stabilität des Films), SP-A und SP-D (Immunabwehr)." },
      { q: "Spezialwissen Lunge: Welche Aufgaben hat die Lunge außer dem Gasaustausch?", a: "Filter (Gerinnsel, Luft), Stoffwechsel (ACE: Angiotensin I → II, Bradykininabbau; Aufnahme von Serotonin/Noradrenalin), First-Pass-Aufnahme lipophiler Basen (Fentanyl, Lidocain), Blutreservoir, Abwehr (Flimmerhärchen)." }
    ]
  });

  CH.push({
    id: "mechanik",
    level: "Organ",
    title: "Atemmechanik – Dehnbarkeit, Widerstand und Zeitkonstanten",
    leitfrage: "Welche Kräfte muss ein Atemzug überwinden – und wie liest man jede davon am Beatmungsgerät ab?",
    einfach: "Die Lunge ist wie ein Gummiballon, der sich zusammenziehen will, in einem Brustkorb, der sich nach außen federn will. Wo beide Kräfte gleich sind, bleibt nach dem Ausatmen eine Restluft in der Lunge – die funktionelle Residualkapazität. Beim Einatmen muss man zwei Dinge überwinden: die Rückstellkraft des Gummis (Elastizität) und die Reibung der Luft in den Röhren (Widerstand).",
    body: [
      { h: "Ruhelage und funktionelle Residualkapazität" },
      "Die **funktionelle Residualkapazität (FRC)** ist das Luftvolumen nach normaler Ausatmung. ==Hier halten sich der Zug der Lunge nach innen und der Zug des Brustkorbs nach außen genau die Waage.== Der Druck im Pleuraspalt liegt dann bei ca. −5 cmH₂O.",
      "Im Stehen ist der Pleuradruck oben negativer als unten (Gefälle ca. 0,25 cmH₂O pro cm Höhe). Obere Alveolen sind deshalb schon stärker gedehnt. ==Untere Alveolen liegen auf dem steileren Teil der Dehnungskurve und werden beim spontanen Atmen besser belüftet.==",
      "Die FRC beträgt beim Erwachsenen im Stehen ca. 2,5–3 l (ca. 30 ml/kg). Sie sinkt im Liegen um ca. 0,5–1 l und in Narkose um weitere ca. 0,4–0,5 l.",
      { h: "Dehnbarkeit (Compliance)" },
      { formel: "Compliance = Volumenänderung / Druckänderung", erkl: "Lunge ca. 200 ml/cmH₂O, Brustkorb ca. 200 ml/cmH₂O, beide zusammen (hintereinandergeschaltet: 1/C = 1/C Lunge + 1/C Brustkorb) ca. 100 ml/cmH₂O." },
      "Die **statische** Compliance wird ohne Luftfluss (Plateaudruck) gemessen, die **dynamische** während des Flusses und enthält daher auch Widerstandsanteile. ==Etwa zwei Drittel der Rückstellkraft der Lunge stammen von der Oberflächenspannung==, nur ein Drittel vom Gewebe: Eine mit Kochsalzlösung gefüllte Lunge lässt sich viel leichter dehnen (von Neergaard 1929).",
      { h: "Atemwegswiderstand" },
      { formel: "Laminarer Fluss: Widerstand ∝ Viskosität × Länge / Radius⁴", erkl: "Hagen-Poiseuille: Halbiert sich der Radius, steigt der Widerstand auf das 16-Fache." },
      { ul: [
        "**Turbulenter Fluss** (große Atemwege, hoher Fluss, Engstellen) hängt von der **Dichte** des Gases ab, und der nötige Druck steigt mit dem Quadrat des Flusses. ==Deshalb hilft das leichte Gasgemisch Heliox bei Engstellen der oberen Atemwege.==",
        "Der größte Teil des Widerstands liegt in den **großen und mittleren Bronchien**. Die kleinen Atemwege (< 2 mm) tragen wegen ihrer riesigen Gesamtquerschnittsfläche nur wenig bei → ==Erkrankungen der kleinen Atemwege bleiben lange unbemerkt ('stille Zone')=="
      ] },
      { h: "Dynamische Kompression" },
      "Bei kräftiger Ausatmung drückt der hohe Pleuradruck ab einem bestimmten Punkt die Atemwege von außen zusammen ('equal pressure point'). ==Dann lässt sich der Ausatemfluss durch mehr Anstrengung nicht weiter steigern.== Bei COPD (chronisch obstruktiver Lungenerkrankung) fehlt der Zug des Lungengewebes – die Atemwege kollabieren früher, Luft bleibt gefangen.",
      { h: "Die Bewegungsgleichung am Beatmungsgerät" },
      { formel: "Atemwegsdruck = Fluss × Widerstand + Volumen / Compliance + PEEP", erkl: "PEEP = positiver endexspiratorischer Druck. Mit einer kurzen Pause am Ende der Einatmung (Fluss = 0) lassen sich die Anteile trennen." },
      { kette: [
        "Spitzendruck − Plateaudruck = Widerstandsanteil → ==erhöht bei Bronchospasmus, abgeknicktem Tubus, Sekret==",
        "Plateaudruck − PEEP = elastischer Anteil (**Driving Pressure**) → ==erhöht bei Atelektase, Pneumothorax, einseitiger Intubation, Pneumoperitoneum, starrem Brustkorb=="
      ], titel: "Druckprobleme systematisch zuordnen" },
      { h: "Zeitkonstante" },
      { formel: "Zeitkonstante τ = Widerstand × Compliance", erkl: "Beim Gesunden ca. 0,2 s (z.B. 2 cmH₂O·s/l × 0,1 l/cmH₂O). Nach 1 τ sind 63 %, nach 3 τ 95 % ausgeatmet." },
      { kette: [
        "COPD: hoher Widerstand → lange Zeitkonstante",
        "Ausatemzeit zu kurz (hohe Atemfrequenz) → Luft bleibt zurück",
        "Intrinsischer PEEP und dynamische Überblähung",
        "==Druck im Brustkorb ↑ → venöser Rückstrom ↓ → Hypotonie; außerdem Gefahr des Barotraumas=="
      ], titel: "Warum COPD-Patienten unter Beatmung hypoton werden können" },
      "Abhilfe: niedrigere Frequenz, längere Ausatemzeit, kleineres Tidalvolumen; im Notfall kurz vom Beatmungsgerät trennen.",
      { h: "Atemarbeit und Closing Capacity" },
      "Die Atemarbeit (gegen Elastizität + Widerstand) verbraucht in Ruhe nur wenige Prozent des Sauerstoffs, bei Lungenversagen ein Vielfaches. Die **Closing Capacity** ist das Lungenvolumen, bei dem sich die unteren kleinen Atemwege zu schließen beginnen. Sie steigt mit dem Alter und ==übersteigt die FRC im Liegen etwa ab 45, im Stehen etwa ab 65 Jahren==. Dann schließen sich Atemwege schon während der normalen Atmung → Belüftungs-Durchblutungs-Missverhältnis und niedrigerer Sauerstoffpartialdruck."
    ],
    merke: [
      "FRC = Gleichgewicht Lunge (nach innen) und Brustkorb (nach außen); Pleuradruck ca. −5 cmH₂O.",
      "Compliance: Lunge ≈ Brustkorb ≈ 200, zusammen ≈ 100 ml/cmH₂O; ca. 2/3 der Rückstellkraft = Oberflächenspannung.",
      "Laminar: Widerstand ∝ 1/Radius⁴; turbulent: dichteabhängig (Heliox).",
      "Spitzen- minus Plateaudruck = Widerstand; Plateau minus PEEP = Driving Pressure.",
      "τ = Widerstand × Compliance; 3 τ = 95 % → zu kurze Ausatmung bei COPD erzeugt intrinsischen PEEP."
    ],
    warum: [
      { q: "Warum steigt bei Bronchospasmus der Spitzendruck, der Plateaudruck aber kaum?", a: "Der Spitzendruck enthält den Widerstandsanteil (Fluss × Widerstand), der bei Bronchospasmus stark zunimmt. In der Pause am Ende der Einatmung ist der Fluss null, und nur noch der elastische Anteil wirkt – solange keine Überblähung entsteht, bleibt der Plateaudruck daher fast gleich." },
      { q: "Warum werden beim spontanen Atmen im Stehen die unteren Lungenabschnitte besser belüftet als die oberen?", a: "Oben ist der Pleuradruck negativer, die Alveolen sind schon stärker gedehnt und liegen im flachen oberen Teil der Dehnungskurve. Unten sind sie weniger gedehnt, liegen im steilen Teil und nehmen bei gleicher Druckänderung mehr Volumen auf." }
    ],
    klinik: [
      "Plötzlich steigen Spitzen- UND Plateaudruck: an Pneumothorax, einseitige Intubation, Atelektase, Pneumoperitoneum oder Thoraxstarre durch Opioide denken.",
      "Nur der Spitzendruck steigt: abgeknickter Tubus, Sekret, Bronchospasmus.",
      "COPD und Asthma unter Beatmung: Ausatemzeit verlängern, intrinsischen PEEP mit einer endexspiratorischen Pause messen."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Welche Compliance-Werte haben Lunge, Brustkorb und Gesamtsystem beim Gesunden?", a: "Lunge ca. 200 ml/cmH₂O, Brustkorb ca. 200 ml/cmH₂O, Gesamtsystem (hintereinandergeschaltet) ca. 100 ml/cmH₂O." },
      { q: "Spezialwissen Lunge: Welcher Anteil der Rückstellkraft der Lunge beruht auf Oberflächenspannung und wie wurde das gezeigt?", a: "Etwa zwei Drittel; mit Kochsalzlösung gefüllte Lungen (ohne Luft-Flüssigkeits-Grenzfläche) lassen sich mit deutlich weniger Druck dehnen (von Neergaard)." },
      { q: "Spezialwissen Lunge: Wo liegt der Hauptanteil des Atemwegswiderstands und warum?", a: "In den großen und mittleren Bronchien. Die kleinen Atemwege haben einzeln einen hohen, wegen ihrer riesigen Gesamtquerschnittsfläche zusammen aber nur einen kleinen Widerstand." },
      { q: "Spezialwissen Lunge: Wie unterscheidet man am Beatmungsgerät Widerstands- von Dehnbarkeitsproblemen?", a: "Spitzendruck − Plateaudruck = Widerstandsanteil (Bronchospasmus, Tubusknick, Sekret); Plateaudruck − PEEP = elastischer Anteil/Driving Pressure (Atelektase, Pneumothorax, einseitige Intubation, Pneumoperitoneum)." },
      { q: "Spezialwissen Lunge: Was ist die Zeitkonstante des Atemsystems und welche Bedeutung hat sie?", a: "τ = Widerstand × Compliance (gesund ca. 0,2 s); nach 3 τ sind 95 % ausgeatmet. Bei langer τ (COPD) und kurzer Ausatmung entsteht intrinsischer PEEP mit Überblähung, Hypotonie und Barotraumarisiko." },
      { q: "Spezialwissen Lunge: Wann übersteigt die Closing Capacity die FRC?", a: "Im Liegen etwa ab 45 Jahren, im Stehen etwa ab 65 Jahren; früher bei Adipositas, Rauchern und in Narkose (FRC ↓)." },
      { q: "Spezialwissen Lunge: Warum hilft Heliox bei Engstellen der oberen Atemwege?", a: "Dort ist der Fluss turbulent, und turbulenter Widerstand hängt von der Gasdichte ab. Heliox ist leicht, senkt den nötigen Druck und die Atemarbeit." }
    ]
  });

  CH.push({
    id: "lungenfunktion",
    level: "Organ",
    title: "Lungenvolumina und Lungenfunktionsprüfung",
    leitfrage: "Welche Lungenvolumina gibt es, welche lassen sich mit einfacher Spirometrie messen – und wie unterscheidet man eine obstruktive von einer restriktiven Störung?",
    einfach: "Die Lunge hat 'Stockwerke': das normale Atemzugvolumen in der Mitte, darüber Reserve zum tiefen Einatmen, darunter Reserve zum kräftigen Ausatmen – und ganz unten eine Restluft, die nie herauskommt. Bei einer Obstruktion ist der Weg nach draußen eng: Die Luft kommt nur langsam heraus. Bei einer Restriktion ist die Lunge zu klein oder zu steif: Es passt insgesamt weniger hinein.",
    body: [
      { h: "Volumina und Kapazitäten (junger Erwachsener, Richtwerte)" },
      { table: { head: ["Größe", "Definition", "Richtwert (ca.)"], rows: [
        ["Tidalvolumen (Atemzugvolumen)", "normaler Atemzug", "ca. 500 ml (ca. 6–7 ml/kg)"],
        ["Inspiratorisches Reservevolumen", "maximal zusätzlich einatembar", "ca. 3 l"],
        ["Exspiratorisches Reservevolumen", "nach normaler Ausatmung zusätzlich ausatembar", "ca. 1–1,2 l"],
        ["Residualvolumen", "bleibt nach maximaler Ausatmung in der Lunge", "ca. 1–1,5 l"],
        ["Vitalkapazität", "maximal ein- und ausatembares Volumen", "ca. 4–5 l"],
        ["Funktionelle Residualkapazität (FRC)", "exspiratorisches Reservevolumen + Residualvolumen", "ca. 2,5–3 l"],
        ["Totale Lungenkapazität", "Vitalkapazität + Residualvolumen", "ca. 6 l"]
      ] } },
      "Die Werte hängen stark von Größe, Alter, Geschlecht und Herkunft ab – beurteilt wird immer gegen Sollwerte (heute als z-Wert bzw. untere Normgrenze).",
      { falle: "„FRC und Residualvolumen misst man mit der Spirometrie.“ – Nein. Das Spirometer misst nur, was ein- und ausgeatmet wird. Was immer in der Lunge bleibt (Residualvolumen und damit FRC und totale Lungenkapazität), braucht Ganzkörperplethysmographie oder Gasverdünnung (z.B. Helium)." },
      { h: "Spirometrie: FEV1 und FVC" },
      "Nach maximaler Einatmung wird so schnell und vollständig wie möglich ausgeatmet. Gemessen werden die **forcierte Vitalkapazität (FVC)** und die **Einsekundenkapazität (FEV1)** – das Volumen, das in der ersten Sekunde ausgeatmet wird.",
      { table: { head: ["Muster", "FEV1/FVC", "Totale Lungenkapazität", "Beispiele"], rows: [
        ["Obstruktion", "erniedrigt (< 0,7 bzw. unter der unteren Normgrenze)", "normal oder erhöht (Überblähung)", "Asthma, COPD"],
        ["Restriktion", "normal oder erhöht", "erniedrigt", "Lungenfibrose, Thoraxdeformität, Adipositas, neuromuskuläre Erkrankung"],
        ["Gemischt", "erniedrigt", "erniedrigt", "z.B. COPD plus Fibrose"]
      ] } },
      { kette: [
        "Obstruktion: Atemwege eng bzw. kollabieren früh",
        "Die Luft kommt in der ersten Sekunde nur langsam heraus → FEV1 sinkt stärker als FVC",
        "==FEV1/FVC fällt – das Kennzeichen der Obstruktion=="
      ] },
      { kette: [
        "Restriktion: Lunge oder Brustkorb lässt sich nicht weit genug ausdehnen",
        "Alle Volumina werden kleiner, die Atemwege sind aber frei (bei Fibrose zieht das starre Gewebe sie sogar auf)",
        "==FEV1/FVC bleibt normal oder steigt; die Diagnose sichert erst die verminderte totale Lungenkapazität=="
      ] },
      "Schweregrad der COPD nach GOLD anhand des FEV1 (in % des Sollwerts, nach Bronchodilatator, bei FEV1/FVC < 0,7): GOLD 1 ≥ 80 %, GOLD 2 50–79 %, GOLD 3 30–49 %, GOLD 4 < 30 %.",
      { h: "Fluss-Volumen-Kurve und Engstellen der großen Atemwege" },
      { table: { head: ["Engstelle", "Kurvenform", "Beispiel"], rows: [
        ["Fixiert (innen oder außen am Brustkorb)", "Einatmung UND Ausatmung abgeflacht (Plateau)", "Trachealstenose nach Langzeitintubation"],
        ["Variabel außerhalb des Brustkorbs", "nur Einatmung abgeflacht", "Stimmbandlähmung, Larynxtumor"],
        ["Variabel innerhalb des Brustkorbs", "nur Ausatmung abgeflacht", "Tumor der unteren Trachea, Mediastinaltumor"]
      ] } },
      "==Logik: Außerhalb des Brustkorbs zieht der Unterdruck beim Einatmen die Atemwege zusammen; innerhalb des Brustkorbs drückt der Überdruck beim Ausatmen sie zusammen.==",
      { h: "Diffusionskapazität (DLCO)" },
      "Gemessen mit einer kleinen Menge Kohlenmonoxid. Sie ist **vermindert** bei Emphysem (weniger Fläche), Lungenfibrose (dickere Schranke), Lungengefäßerkrankungen (weniger Kapillarblut) und Anämie; **erhöht** bei Polyglobulie und Lungenblutung (mehr Hämoglobin in der Lunge).",
      { h: "Vor Lungenresektionen" },
      { formel: "Vorhergesagter postoperativer FEV1 = präoperativer FEV1 × (1 − entfernte Segmente / 19)", erkl: "Gleiche Rechnung für die Diffusionskapazität. Die Lunge hat 19 funktionelle Segmente (rechts 10, links 9)." },
      { ul: [
        "Vorhergesagter postoperativer FEV1 und DLCO beide > 60 %: geringes Risiko.",
        "Einer < 60 %, beide > 30 %: zusätzlich Belastungstest (Treppensteigen, Shuttle-Walk).",
        "Einer < 30 %: Spiroergometrie; maximale Sauerstoffaufnahme < 10 ml/kg/min = hohes, > 20 ml/kg/min = geringes Risiko (ACCP 2013)."
      ] }
    ],
    merke: [
      "FRC = exspiratorisches Reservevolumen + Residualvolumen; nicht spirometrisch messbar.",
      "Obstruktion: FEV1/FVC ↓; Restriktion: totale Lungenkapazität ↓ bei normalem/erhöhtem FEV1/FVC.",
      "Fixe Stenose: Ein- und Ausatmung flach; variabel extrathorakal: Einatmung; variabel intrathorakal: Ausatmung.",
      "DLCO ↓: Emphysem, Fibrose, Gefäßerkrankung, Anämie; ↑: Polyglobulie, Blutung.",
      "Lungenresektion: vorhergesagter postoperativer FEV1/DLCO > 60 % geringes, < 30 % hohes Risiko."
    ],
    warum: [
      { q: "Warum ist bei Lungenfibrose das Verhältnis FEV1/FVC oft sogar erhöht?", a: "Das steife, geschrumpfte Lungengewebe zieht die Atemwege von außen auf (starker radialer Zug), und die hohe Rückstellkraft treibt die Luft schnell hinaus. Die Lunge ist klein (FVC ↓), wird aber zügig entleert – FEV1 fällt weniger stark als FVC." },
      { q: "Warum ist ein großer Mediastinaltumor bei Narkoseeinleitung so gefährlich?", a: "Er kann Trachea, Bronchien oder große Gefäße von außen einengen. Im Wachzustand halten Muskeltonus und negativer Pleuradruck die Atemwege offen. Narkose, Relaxierung und Rückenlage nehmen diesen Halt weg, das Lungenvolumen sinkt, und Überdruckbeatmung kann die Kompression verstärken – es droht ein kompletter Atemwegs- oder Kreislaufkollaps. Spontanatmung möglichst erhalten und Ausweichstrategien (z.B. Lagewechsel, starres Bronchoskop, extrakorporale Verfahren) vorbereiten." }
    ],
    klinik: [
      "Präoperativ ist eine Spirometrie nicht routinemäßig nötig, sondern bei unklarer Atemnot, vor Lungenresektion und bei schwerer Lungenerkrankung.",
      "Fluss-Volumen-Kurve vor Eingriffen bei Atemwegsengstellen hilft, Lage und Art einzuschätzen.",
      "COPD: präoperativ optimieren (Bronchodilatatoren, Infekttherapie, Rauchstopp)."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Aus welchen Volumina setzt sich die FRC zusammen und warum ist sie nicht spirometrisch messbar?", a: "FRC = exspiratorisches Reservevolumen + Residualvolumen; das Residualvolumen bleibt immer in der Lunge und wird nur mit Ganzkörperplethysmographie oder Gasverdünnung erfasst." },
      { q: "Spezialwissen Lunge: Wie unterscheiden sich obstruktive und restriktive Ventilationsstörung in der Lungenfunktion?", a: "Obstruktion: FEV1/FVC erniedrigt, totale Lungenkapazität normal oder erhöht. Restriktion: totale Lungenkapazität erniedrigt, FEV1/FVC normal oder erhöht." },
      { q: "Spezialwissen Lunge: Wie wird die COPD nach GOLD anhand des FEV1 eingeteilt?", a: "Bei FEV1/FVC < 0,7 nach Bronchodilatator: GOLD 1 ≥ 80 %, GOLD 2 50–79 %, GOLD 3 30–49 %, GOLD 4 < 30 % des Sollwerts." },
      { q: "Spezialwissen Lunge: Wie sieht die Fluss-Volumen-Kurve bei fixierter, variabler extrathorakaler und variabler intrathorakaler Stenose aus?", a: "Fixiert: Ein- und Ausatmung abgeflacht. Variabel extrathorakal: nur Einatmung abgeflacht. Variabel intrathorakal: nur Ausatmung abgeflacht." },
      { q: "Spezialwissen Lunge: Wann ist die Diffusionskapazität (DLCO) vermindert bzw. erhöht?", a: "Vermindert: Emphysem, Lungenfibrose, Lungengefäßerkrankungen, Anämie. Erhöht: Polyglobulie, Lungenblutung." },
      { q: "Spezialwissen Lunge: Wie berechnet man den vorhergesagten postoperativen FEV1 und welche Grenzwerte gelten?", a: "Präoperativer FEV1 × (1 − entfernte Segmente/19). Beide Werte (FEV1, DLCO) > 60 %: geringes Risiko; einer < 60 % (beide > 30 %): Belastungstest; einer < 30 %: Spiroergometrie (VO₂max < 10 ml/kg/min hohes Risiko)." }
    ]
  });

  CH.push({
    id: "atempumpe",
    level: "Organ",
    title: "Die Atempumpe – Zwerchfell, Atemmuskeln und obere Atemwege",
    leitfrage: "Welche Muskeln erzeugen einen Atemzug, warum ermüden sie, und weshalb sind Patienten nach Oberbaucheingriffen oder mit Restrelaxierung so gefährdet?",
    einfach: "Die Lunge kann sich nicht selbst bewegen – sie wird von Muskeln 'aufgezogen', vor allem vom Zwerchfell, das wie ein Kolben nach unten zieht. Die Ausatmung in Ruhe passiert von selbst durch die Rückstellkraft der Lunge. Damit die Luft überhaupt ankommt, müssen außerdem Muskeln im Rachen den Atemweg offen halten – genau diese erschlaffen unter Narkosemitteln und Opioiden zuerst.",
    body: [
      { h: "Einatmung" },
      { ul: [
        "**Zwerchfell** (Nerv: N. phrenicus aus C3–C5): wichtigster Einatemmuskel; leistet beim ruhigen Atmen den Großteil des Atemzugs. Es senkt sich beim ruhigen Atmen um ca. 1–2 cm, bei tiefer Atmung um bis zu ca. 10 cm.",
        "**Äußere Zwischenrippenmuskeln:** heben die Rippen an.",
        "**Atemhilfsmuskeln** (Treppenmuskeln = Mm. scaleni, Kopfnicker = M. sternocleidomastoideus): bei Atemnot – ==ihr sichtbarer Einsatz ist ein Alarmzeichen==."
      ] },
      { h: "Ausatmung" },
      "==In Ruhe ist die Ausatmung passiv== – die elastische Rückstellkraft der Lunge reicht. Aktiv wird sie bei Belastung, Husten und Obstruktion (Bauchmuskeln, innere Zwischenrippenmuskeln).",
      { h: "Ermüdung der Atemmuskulatur" },
      { kette: [
        "Last steigt (Widerstand ↑, Compliance ↓, Atemminutenvolumen ↑) oder Kraft sinkt (Überblähung flacht das Zwerchfell ab, Elektrolytstörung, Sepsis, Myopathie)",
        "Der Muskel muss einen größeren Teil seiner Maximalkraft pro Atemzug aufbringen",
        "Oberhalb einer kritischen Belastung (Spannungs-Zeit-Index des Zwerchfells > ca. 0,15; Bellemare & Grassino 1982) ermüdet er",
        "==Schnelle, flache Atmung → mehr Totraumventilation → CO₂ steigt → respiratorische Erschöpfung=="
      ], titel: "Wie Atemversagen durch Erschöpfung entsteht" },
      { h: "Die oberen Atemwege" },
      "Rachen und Zungengrund haben kein Knochengerüst. ==Offen gehalten werden sie durch Muskeln, v.a. den M. genioglossus (zieht die Zunge nach vorn).== Schlaf, Hypnotika, Opioide und Restrelaxierung senken diesen Tonus → Verlegung, besonders bei Schlafapnoe und Adipositas.",
      { h: "Restrelaxierung" },
      "Schon bei einem Train-of-Four-Quotienten (TOF-Ratio) unter 0,9 sind Schluck- und Rachenfunktion beeinträchtigt (Aspirationsgefahr), und die Atemantwort auf Sauerstoffmangel ist abgeschwächt. ==Deshalb wird vor Extubation eine quantitativ gemessene TOF-Ratio ≥ 0,9 gefordert==.",
      { h: "Nach Oberbauch- und Thoraxeingriffen" },
      { kette: [
        "Schnitt im Oberbauch oder am Brustkorb",
        "Reflektorische Hemmung des Zwerchfells (über Nervenreflexe aus dem Bauchraum), Schmerz, Schonatmung",
        "Vitalkapazität fällt am ersten Tag um ca. 40–60 % und erholt sich erst über 1–2 Wochen; FRC sinkt",
        "Schwacher Hustenstoß, Atelektasen, Sekretverhalt",
        "==Lungenentzündung und Ateminsuffizienz== – Vorbeugung: gute Schmerztherapie (z.B. Regionalanästhesie), Frühmobilisation, Atemtherapie"
      ], titel: "Postoperative pulmonale Komplikationen" },
      { h: "Zwerchfelllähmung durch Blockaden" },
      "Die **interskalenäre Plexusblockade** lähmt mit üblichen Volumina fast immer den N. phrenicus der gleichen Seite: Die Vitalkapazität sinkt um ca. 25 % (Urmey et al. 1991). ==Gesunde merken das kaum, bei schwerer Lungenerkrankung kann es zur Ateminsuffizienz führen.==",
      { h: "Husten" },
      "Ein wirksamer Hustenstoß braucht drei Phasen: tiefe Einatmung, Glottisschluss mit Druckaufbau (Bauchmuskeln) und explosionsartige Öffnung. Bei neuromuskulären Erkrankungen gilt eine Vitalkapazität unter ca. 15–20 ml/kg als Warnsignal für Beatmungsbedarf (z.B. beim Guillain-Barré-Syndrom: '20-30-40-Regel' – Vitalkapazität < 20 ml/kg, maximaler Einatemsog schwächer als −30 cmH₂O, maximaler Ausatemdruck < 40 cmH₂O)."
    ],
    merke: [
      "Zwerchfell (N. phrenicus, C3–C5) = Hauptmuskel der Einatmung; Ruheausatmung passiv.",
      "Atemhilfsmuskeln im Einsatz = Alarmzeichen.",
      "Ermüdung: schnelle, flache Atmung → Totraum ↑ → CO₂ ↑.",
      "Rachen offen durch Muskeltonus (Genioglossus) → Hypnotika, Opioide, Restrelaxierung führen zur Verlegung.",
      "Oberbauch-/Thoraxeingriff: Vitalkapazität ca. −40–60 %, Erholung 1–2 Wochen; interskalenär: Phrenicusparese, Vitalkapazität ca. −25 %."
    ],
    warum: [
      { q: "Warum führt eine schnelle, flache Atmung bei erschöpfter Atemmuskulatur zum CO₂-Anstieg, obwohl das Atemminutenvolumen gleich bleibt?", a: "Jeder Atemzug füllt zuerst den Totraum (ca. 150 ml). Bei kleinen Atemzügen macht der Totraum einen großen Teil aus, und für den Gasaustausch in den Alveolen bleibt weniger übrig. Die alveoläre Ventilation sinkt, und das CO₂ steigt." },
      { q: "Warum flacht eine Überblähung (COPD, Asthmaanfall) das Zwerchfell ab und schwächt es?", a: "Bei großem Lungenvolumen steht das Zwerchfell tief und flach. Seine Muskelfasern sind bereits verkürzt (ungünstige Länge-Kraft-Beziehung), und die flache Form kann nach Laplace weniger Druck erzeugen. Zudem fehlt die Anlagefläche an der Brustwand, über die es normalerweise die unteren Rippen hebt." }
    ],
    klinik: [
      "Vor Extubation: quantitatives neuromuskuläres Monitoring, TOF-Ratio ≥ 0,9.",
      "Interskalenäre Blockade bei schwerer COPD oder kontralateraler Zwerchfellparese kritisch abwägen (kleinere Volumina, alternative Blockaden).",
      "Patienten mit Schlafapnoe: Opioide sparen, Oberkörper hoch lagern, CPAP-Gerät postoperativ weiterverwenden."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Welcher Nerv versorgt das Zwerchfell und wie weit bewegt es sich?", a: "N. phrenicus (C3–C5); beim ruhigen Atmen ca. 1–2 cm, bei tiefer Atmung bis zu ca. 10 cm." },
      { q: "Spezialwissen Lunge: Ist die Ausatmung in Ruhe aktiv oder passiv?", a: "Passiv durch die elastische Rückstellkraft der Lunge; aktiv (Bauchmuskeln, innere Zwischenrippenmuskeln) erst bei Belastung, Husten und Obstruktion." },
      { q: "Spezialwissen Lunge: Wie entsteht eine respiratorische Erschöpfung?", a: "Missverhältnis aus Last und Kraft der Atemmuskeln; oberhalb eines Spannungs-Zeit-Index von ca. 0,15 ermüdet das Zwerchfell → schnelle, flache Atmung → mehr Totraumventilation → CO₂-Anstieg." },
      { q: "Spezialwissen Lunge: Warum ist eine Restrelaxierung auch bei normaler Atemfrequenz gefährlich?", a: "Schon bei TOF-Ratio < 0,9 sind Schluck- und Rachenfunktion gestört (Aspiration, Atemwegsverlegung) und die Atemantwort auf Hypoxie abgeschwächt." },
      { q: "Spezialwissen Lunge: Wie verändert sich die Lungenfunktion nach Oberbaucheingriffen?", a: "Vitalkapazität am ersten Tag ca. 40–60 % niedriger (reflektorische Zwerchfellhemmung, Schmerz), Erholung über 1–2 Wochen; FRC sinkt → Atelektasen, Sekretverhalt, Pneumonierisiko." },
      { q: "Spezialwissen Lunge: Welche Auswirkung hat eine interskalenäre Plexusblockade auf die Atmung?", a: "Nahezu regelhaft gleichseitige Phrenicusparese; die Vitalkapazität sinkt um ca. 25 % (Urmey 1991) – bei schwerer Lungenerkrankung relevant." }
    ]
  });

  CH.push({
    id: "ventilation",
    level: "Organ",
    title: "Ventilation, Totraum und CO₂-Abatmung",
    leitfrage: "Warum bestimmt allein die alveoläre Ventilation den arteriellen CO₂-Wert – und was verrät der Unterschied zwischen arteriellem und endtidalem CO₂?",
    einfach: "Nicht jede eingeatmete Luft erreicht die Bläschen: Ein Teil bleibt in den 'Zuleitungen' (Totraum) stecken und wird ungenutzt wieder ausgeatmet. Für das Abatmen von CO₂ zählt nur die Luft, die wirklich in den Alveolen ankommt. Halbiert man diese Menge, verdoppelt sich das CO₂ im Blut.",
    body: [
      { h: "Atemminutenvolumen und alveoläre Ventilation" },
      { formel: "Atemminutenvolumen = Tidalvolumen × Atemfrequenz  ·  Alveoläre Ventilation = (Tidalvolumen − Totraum) × Atemfrequenz", erkl: "In Ruhe ca. 6–8 l/min bzw. ca. 4–5 l/min." },
      "==Kleine Atemzüge mit hoher Frequenz verschwenden Luft im Totraum== – bei gleichem Atemminutenvolumen sinkt die alveoläre Ventilation.",
      { h: "Totraum" },
      { ul: [
        "**Anatomischer Totraum:** die leitenden Atemwege, ca. 150 ml (ca. 2 ml/kg). Ein Endotrachealtubus umgeht Mund und Rachen; Filter, Y-Stück und Winkelstück fügen **apparativen Totraum** hinzu (wichtig bei Kindern und kleinen Tidalvolumina).",
        "**Alveolärer Totraum:** belüftete, aber nicht durchblutete Alveolen (Lungenembolie, niedriges Herzzeitvolumen, hoher PEEP, Emphysem).",
        "**Physiologischer Totraum** = anatomischer + alveolärer; Anteil am Tidalvolumen normal ca. 0,25–0,35."
      ] },
      { formel: "Totraumanteil = (arterieller CO₂-Partialdruck − gemischt-exspiratorischer CO₂-Partialdruck) / arterieller CO₂-Partialdruck", erkl: "Bohr-Gleichung in der Form nach Enghoff." },
      { h: "Die alveoläre Ventilationsgleichung" },
      { formel: "PaCO₂ = 0,863 × CO₂-Produktion (ml/min) / alveoläre Ventilation (l/min)", erkl: "PaCO₂ = arterieller CO₂-Partialdruck." },
      { kette: [
        "CO₂-Produktion gleich, alveoläre Ventilation halbiert",
        "==PaCO₂ verdoppelt sich (z.B. von 40 auf 80 mmHg)=="
      ] },
      "Umgekehrt muss eine **höhere CO₂-Produktion** (Fieber, maligne Hyperthermie, Sepsis, Kohlenhydrat-Überernährung, Bicarbonat-Pufferung, CO₂-Aufnahme bei Laparoskopie) durch mehr Ventilation ausgeglichen werden.",
      { h: "Arterielles gegenüber endtidalem CO₂" },
      "Beim Lungengesunden liegt das endtidale CO₂ (etCO₂) ca. 2–5 mmHg unter dem arteriellen Wert.",
      { kette: [
        "Alveolärer Totraum ↑ (nicht durchblutete Alveolen)",
        "Diese Alveolen liefern CO₂-freies Gas und verdünnen die Ausatemluft",
        "==etCO₂ fällt, während der arterielle CO₂-Wert gleich bleibt oder steigt – die Differenz wird größer=="
      ], titel: "Warum die Differenz wächst" },
      "**Plötzlicher etCO₂-Abfall:** Lungenembolie (Gerinnsel, Luft, CO₂, Fett), starker Abfall des Herzzeitvolumens bis zum Kreislaufstillstand, Diskonnektion oder Leck. Unter Reanimation zeigt das etCO₂ die erreichte Lungendurchblutung.",
      { h: "Verteilung der Belüftung" },
      { kette: [
        "Spontanatmung: Das Zwerchfell zieht v.a. in den unten liegenden (abhängigen) Abschnitten → dort beste Belüftung, dort auch die meiste Durchblutung → gute Abstimmung",
        "Narkose mit Relaxierung und Überdruckbeatmung: Das passive Zwerchfell wird in den abhängigen Abschnitten vom Bauchinhalt nach oben gedrückt (Froese & Bryan 1974)",
        "Die Beatmungsluft geht bevorzugt in die oben liegenden Abschnitte, die Durchblutung bleibt unten",
        "==Missverhältnis zwischen Belüftung und Durchblutung → Sauerstoffaufnahme verschlechtert sich=="
      ] },
      { h: "CO₂ bei Atemstillstand" },
      "Der Körper hat große CO₂-Speicher (v.a. als Bicarbonat). In der Apnoe steigt der PaCO₂ in der ersten Minute deutlich (ca. 8–16 mmHg), danach langsamer um ca. 3–6 mmHg pro Minute. Nach einer Änderung der Beatmung stellt sich der neue Wert erst über Minuten ein – nach Hypoventilation langsamer als nach Hyperventilation."
    ],
    merke: [
      "Alveoläre Ventilation = (Tidalvolumen − Totraum) × Frequenz; nur sie bestimmt den PaCO₂.",
      "PaCO₂ = 0,863 × CO₂-Produktion / alveoläre Ventilation → halbe Ventilation = doppelter PaCO₂.",
      "Totraumanteil normal ca. 0,3 (Bohr/Enghoff).",
      "Große Differenz PaCO₂ − etCO₂ = alveolärer Totraum (Embolie, niedriges HZV, hoher PEEP).",
      "Beatmet und relaxiert: Belüftung oben, Durchblutung unten → Missverhältnis."
    ],
    warum: [
      { q: "Warum kann ein Patient mit schneller, flacher Atmung trotz normalem Atemminutenvolumen hyperkapnisch werden?", a: "Der Totraum wird bei jedem Atemzug zuerst gefüllt. Beispiel: Totraum 150 ml, Atemzug 250 ml, Frequenz 32/min (Atemminutenvolumen 8 l): Die alveoläre Ventilation beträgt nur (250 − 150) × 32 = 3,2 l/min statt ca. 5 l/min bei normalem Muster – das CO₂ steigt." },
      { q: "Warum fällt das etCO₂ bei einer Lungenembolie, obwohl das arterielle CO₂ eher steigt?", a: "Die abgeschnittenen Alveolen werden belüftet, aber nicht durchblutet und geben CO₂-freies Gas ab, das die Ausatemluft verdünnt. Gleichzeitig steigt das arterielle CO₂ leicht, weil die wirksame Ventilation sinkt. Die Differenz wächst deutlich." }
    ],
    klinik: [
      "Kapnographie: plötzlicher Abfall → Diskonnektion, Embolie, Kreislaufstillstand; langsamer Anstieg → Hypoventilation, Fieber, CO₂-Aufnahme bei Laparoskopie; rascher Anstieg mit Tachykardie und Muskelrigidität → an maligne Hyperthermie denken.",
      "Bei Kindern und lungenschonender Beatmung den apparativen Totraum klein halten.",
      "Laparoskopie: Atemminutenvolumen wegen CO₂-Aufnahme aus dem Pneumoperitoneum anpassen."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Wie berechnet man die alveoläre Ventilation?", a: "(Tidalvolumen − Totraum) × Atemfrequenz; in Ruhe ca. 4–5 l/min." },
      { q: "Spezialwissen Lunge: Wie lautet die alveoläre Ventilationsgleichung für CO₂?", a: "PaCO₂ = 0,863 × CO₂-Produktion / alveoläre Ventilation – bei gleicher CO₂-Produktion verdoppelt eine Halbierung der alveolären Ventilation den PaCO₂." },
      { q: "Spezialwissen Lunge: Wie wird der physiologische Totraumanteil berechnet und was ist normal?", a: "Bohr/Enghoff: (PaCO₂ − gemischt-exspiratorisches CO₂) / PaCO₂, normal ca. 0,25–0,35." },
      { q: "Spezialwissen Lunge: Welche Ursachen hat eine vergrößerte Differenz zwischen arteriellem und endtidalem CO₂?", a: "Zunahme des alveolären Totraums: Lungenembolie, niedriges Herzzeitvolumen/Hypotonie, hoher PEEP, Emphysem/COPD." },
      { q: "Spezialwissen Lunge: Wie verteilt sich die Belüftung bei Spontanatmung im Vergleich zur Überdruckbeatmung mit Relaxierung?", a: "Spontan: unten liegende Abschnitte besser belüftet (aktives Zwerchfell). Beatmet und relaxiert: oben liegende Abschnitte bevorzugt belüftet, die Durchblutung bleibt unten → Missverhältnis." },
      { q: "Spezialwissen Lunge: Wie schnell steigt der PaCO₂ bei Atemstillstand?", a: "In der ersten Minute ca. 8–16 mmHg, danach ca. 3–6 mmHg pro Minute (große CO₂-Speicher puffern)." }
    ]
  });

  CH.push({
    id: "kreislauf",
    level: "Organ",
    title: "Lungenkreislauf und hypoxische pulmonale Vasokonstriktion",
    leitfrage: "Wie kann die Lunge das gesamte Herzzeitvolumen bei einem Bruchteil des Systemdrucks aufnehmen – und warum verengen sich ihre Gefäße bei Sauerstoffmangel, während sich alle anderen erweitern?",
    einfach: "Der Lungenkreislauf ist ein Niederdrucksystem mit vielen Reserve-Gefäßen. Wenn mehr Blut kommt, öffnen sich einfach zusätzliche Bahnen. Schlecht belüftete Lungenabschnitte drosseln ihre Durchblutung selbst, damit das Blut dorthin fließt, wo Sauerstoff ist – ein kluger Mechanismus, solange nur ein Teil der Lunge betroffen ist.",
    body: [
      { h: "Ein Niederdrucksystem" },
      "Die Lunge nimmt das gesamte Herzzeitvolumen auf – bei einem mittleren Pulmonalarteriendruck von nur ca. **14 mmHg** (pulmonale Hypertonie: > 20 mmHg; ESC/ERS 2022) und einem Lungengefäßwiderstand von **unter 2 Wood-Einheiten** (etwa ein Zehntel des Körperkreislaufwiderstands).",
      { kette: [
        "Herzzeitvolumen steigt (z.B. bei Belastung)",
        "Bisher nicht durchblutete Kapillaren öffnen sich (Rekrutierung), offene Kapillaren weiten sich (Distension)",
        "==Der Widerstand sinkt passiv – der Druck steigt kaum=="
      ] },
      { h: "West-Zonen" },
      { table: { head: ["Zone", "Druckverhältnis", "Durchblutung"], rows: [
        ["1", "Alveolardruck > arterieller > venöser Druck", "Keine (alveolärer Totraum) – normal kaum vorhanden, aber bei Volumenmangel, hohem PEEP, Überblähung"],
        ["2", "arterieller > Alveolardruck > venöser Druck", "Fluss hängt vom Unterschied arteriell − alveolär ab ('Wasserfall')"],
        ["3", "arterieller > venöser > Alveolardruck", "Kontinuierlicher Fluss"],
        ["(4)", "erhöhter Gewebedruck ganz unten", "Fluss wieder etwas vermindert"]
      ] } },
      "(West et al. 1964). ==Die Zonen sind keine festen Orte – sie verschieben sich mit Volumenstatus, PEEP und Lagerung.==",
      { h: "Lungengefäßwiderstand und Lungenvolumen" },
      "Der Widerstand ist **bei funktioneller Residualkapazität am niedrigsten**. Bei sehr großen Volumina werden die Kapillaren in den Alveolarwänden gedehnt und zusammengedrückt. Bei kleinen Volumina verengen sich die größeren Gefäße, und Atelektasen lösen eine hypoxische Vasokonstriktion aus.",
      { h: "Hypoxische pulmonale Vasokonstriktion (HPV)" },
      { kette: [
        "Ein Lungenabschnitt wird schlecht belüftet → der Sauerstoffpartialdruck in seinen Alveolen sinkt",
        "Sauerstoff-Sensoren in den Muskelzellen der kleinen Lungenarterien (Mitochondrien, Signale über reaktive Sauerstoffspezies) hemmen spannungsabhängige Kaliumkanäle",
        "Die Zelle depolarisiert → Calcium strömt ein (L-Typ-Kanäle), zusätzlich steigt die Calciumempfindlichkeit (Rho-Kinase)",
        "Die kleinen Arterien verengen sich",
        "==Das Blut wird in gut belüftete Abschnitte umgeleitet → das Verhältnis von Belüftung zu Durchblutung verbessert sich=="
      ], titel: "HPV: die Lunge steuert ihre Durchblutung selbst (Sylvester et al. 2012)" },
      { ul: [
        "**Hauptreiz:** der Sauerstoffpartialdruck in den Alveolen, weniger der des gemischtvenösen Bluts.",
        "**Zeitverlauf:** zweiphasig – schnelle Phase in Sekunden bis Minuten, zweite anhaltende Phase über Stunden.",
        "**Abgeschwächt durch:** volatile Anästhetika (dosisabhängig, bei ≤ 1 MAC nur mäßig), Vasodilatatoren (Nitroprussid, Nitroglycerin, Calciumantagonisten), Hypokapnie/Alkalose, Sepsis, sehr hohen Pulmonalisdruck. ==Propofol hemmt die HPV praktisch nicht.==",
        "**Verstärkt durch:** Azidose; das Medikament Almitrin."
      ] },
      { falle: "„Die HPV ist immer nützlich.“ – Nur bei örtlicher Hypoxie. Bei Sauerstoffmangel der ganzen Lunge (große Höhe, Hypoventilation) verengen sich alle Gefäße: Der Lungendruck steigt, die rechte Kammer wird belastet, und ungleichmäßige Verengung kann ein Höhenlungenödem auslösen." },
      { h: "Flüssigkeit in der Lunge" },
      "Flüssigkeit tritt nach dem Starling-Prinzip aus den Kapillaren und wird über Lymphgefäße abtransportiert, deren Kapazität sich vervielfachen kann. Ein **hydrostatisches Ödem** entsteht bei zu hohem Kapillardruck (Linksherzversagen, Überwässerung, Unterdruck-Lungenödem nach Laryngospasmus) und ist eiweißarm. Ein **Permeabilitätsödem** (akutes Lungenversagen, ARDS) entsteht bei geschädigter Schranke schon bei normalem Druck und ist eiweißreich.",
      { h: "Bronchialkreislauf" },
      "Die Bronchialarterien (ca. 1–2 % des Herzzeitvolumens, aus der Aorta) versorgen Atemwege, Pleura und Gefäßwände. Ein Teil ihres venösen Bluts fließt in die Lungenvenen und trägt zum physiologischen Shunt bei."
    ],
    merke: [
      "Mittlerer Pulmonalarteriendruck ca. 14 mmHg (pulmonale Hypertonie > 20 mmHg), Widerstand < 2 Wood-Einheiten.",
      "Mehr Fluss → Rekrutierung und Distension → Widerstand ↓.",
      "Widerstand minimal bei FRC.",
      "HPV: alveolärer Sauerstoffmangel → Kaliumkanäle zu → Depolarisation → Calcium → Verengung; zweiphasig.",
      "HPV-Hemmer: volatile Anästhetika (mäßig), Vasodilatatoren, Alkalose; Propofol kaum."
    ],
    warum: [
      { q: "Warum kann eine Nitroprussid- oder Nitroglycerin-Infusion bei Pneumonie die Oxygenierung verschlechtern?", a: "Beide Vasodilatatoren heben die HPV in schlecht belüfteten Abschnitten auf. Wieder mehr Blut fließt durch nicht oder kaum belüftete Alveolen – der Shunt nimmt zu, und der arterielle Sauerstoffpartialdruck sinkt." },
      { q: "Warum steigt der Pulmonalisdruck bei Belastung kaum, obwohl sich das Herzzeitvolumen vervielfacht?", a: "Die Lunge hat viele in Ruhe kaum durchblutete Kapillaren. Steigt der Fluss, werden sie eröffnet (Rekrutierung), und offene Gefäße weiten sich (Distension). Dadurch sinkt der Widerstand ungefähr in dem Maß, in dem der Fluss steigt." }
    ],
    klinik: [
      "Ein-Lungen-Beatmung: HPV und Schwerkraft verringern den Fluss durch die kollabierte Lunge; hohe Konzentrationen volatiler Anästhetika und Vasodilatatoren schwächen das ab.",
      "Unterdruck-Lungenödem: kräftige Einatmung gegen verschlossenen Kehlkopf (Laryngospasmus) → stark negativer Druck im Brustkorb → Flüssigkeit tritt aus.",
      "Lungenembolie: plötzlicher Widerstandsanstieg → Belastung der rechten Kammer, Totraum ↑ (etCO₂ ↓)."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Welche Normalwerte gelten für mittleren Pulmonalarteriendruck und Lungengefäßwiderstand, und ab wann liegt eine pulmonale Hypertonie vor?", a: "Mittlerer Druck ca. 14 mmHg, Widerstand < 2 Wood-Einheiten; pulmonale Hypertonie bei mittlerem Druck > 20 mmHg (ESC/ERS 2022)." },
      { q: "Spezialwissen Lunge: Wie bleibt der Pulmonalisdruck bei steigendem Herzzeitvolumen fast konstant?", a: "Rekrutierung bisher nicht durchbluteter Kapillaren und Distension offener Gefäße senken den Widerstand passiv." },
      { q: "Spezialwissen Lunge: Wie sind die West-Zonen 1–3 definiert?", a: "Zone 1: Alveolardruck > arterieller > venöser Druck (keine Durchblutung); Zone 2: arteriell > alveolär > venös (Fluss abhängig von arteriell − alveolär); Zone 3: arteriell > venös > alveolär (kontinuierlicher Fluss)." },
      { q: "Spezialwissen Lunge: Welcher Mechanismus liegt der hypoxischen pulmonalen Vasokonstriktion zugrunde?", a: "Sauerstoffsensoren (Mitochondrien) in den Muskelzellen kleiner Lungenarterien hemmen spannungsabhängige Kaliumkanäle → Depolarisation → Calciumeinstrom (L-Typ) plus Calcium-Sensibilisierung (Rho-Kinase) → Verengung." },
      { q: "Spezialwissen Lunge: Welche Faktoren schwächen bzw. verstärken die HPV?", a: "Schwächend: volatile Anästhetika (dosisabhängig, bei ≤ 1 MAC mäßig), Vasodilatatoren (Nitroprussid, Nitroglycerin, Calciumantagonisten), Hypokapnie/Alkalose, Sepsis. Verstärkend: Azidose, Almitrin. Propofol hemmt praktisch nicht." },
      { q: "Spezialwissen Lunge: Wie unterscheiden sich hydrostatisches Lungenödem und Permeabilitätsödem?", a: "Hydrostatisch: zu hoher Kapillardruck (Linksherz, Überwässerung, Unterdruck), eiweißarm. Permeabilitätsödem (ARDS): geschädigte Schranke, schon bei normalem Druck, eiweißreich." }
    ]
  });

  CH.push({
    id: "vq",
    level: "Organ",
    title: "Belüftung und Durchblutung im Verhältnis – Shunt und Diffusion",
    leitfrage: "Warum führt ein Missverhältnis von Belüftung und Durchblutung fast immer zu Sauerstoffmangel, aber nur selten zu einem CO₂-Anstieg?",
    einfach: "Für einen guten Gasaustausch müssen Luft und Blut am selben Ort zusammenkommen. Kommt Blut an Alveolen vorbei, die keine Luft bekommen (Shunt), bleibt es sauerstoffarm. Gut belüftete Bereiche können das nicht ausgleichen, weil ihr Blut schon fast voll mit Sauerstoff beladen ist. Beim CO₂ ist das anders: Gesunde Bereiche können einfach mehr CO₂ abatmen.",
    body: [
      { h: "Das Verhältnis von Belüftung zu Durchblutung (V/Q)" },
      "Insgesamt gilt: alveoläre Ventilation ca. 4 l/min geteilt durch Durchblutung ca. 5 l/min ≈ **0,8**. Im Stehen nehmen Belüftung und Durchblutung von oben nach unten zu, die Durchblutung aber steiler. ==Das Verhältnis ist deshalb oben hoch (ca. 3) und unten niedrig (ca. 0,6).==",
      { table: { head: ["V/Q", "Bedeutung", "Folge"], rows: [
        ["0", "Shunt: durchblutet, nicht belüftet", "Blut verlässt die Lunge sauerstoffarm wie gemischtvenöses Blut"],
        ["< 0,8", "zu wenig Belüftung", "Niedriger Sauerstoff im Kapillarblut – bessert sich mit Sauerstoffgabe"],
        ["ca. 0,8–1", "gute Abstimmung", "Ausgeglichener Gasaustausch"],
        ["> 1", "zu wenig Durchblutung", "Hoher Sauerstoff-, niedriger CO₂-Wert, aber kaum zusätzlicher Sauerstoffgehalt"],
        ["∞", "alveolärer Totraum", "Belüftung ohne Gasaustausch"]
      ] } },
      { h: "Warum Sauerstoff und CO₂ unterschiedlich reagieren" },
      { kette: [
        "Die Sauerstoffbindungskurve ist im oberen Teil flach",
        "Gut belüftete Bereiche sind schon zu ca. 98–100 % gesättigt und können ihr Blut nicht 'überladen'",
        "==Sie gleichen den Mangel schlecht belüfteter Bereiche nicht aus → Hypoxämie=="
      ], titel: "Sauerstoff" },
      { kette: [
        "Die CO₂-Bindungskurve verläuft fast gerade",
        "Mehr Belüftung gesunder Bereiche senkt deren CO₂-Gehalt entsprechend",
        "==Das gleicht das CO₂-Defizit schlecht belüfteter Bereiche aus → PaCO₂ normal oder durch Mehratmung sogar niedrig=="
      ], titel: "CO₂" },
      "==Ein CO₂-Anstieg tritt erst auf, wenn das Atemminutenvolumen nicht mehr gesteigert werden kann== (Erschöpfung, Atemdepression, sehr schwere Lungenerkrankung).",
      { h: "Shunt" },
      { formel: "Shuntanteil = (Cc′O₂ − CaO₂) / (Cc′O₂ − Cv̄O₂)", erkl: "Sauerstoffgehalt am Ende der Kapillare (Cc′O₂), im arteriellen (CaO₂) und im gemischtvenösen Blut (Cv̄O₂)." },
      "Normal beträgt der physiologische Shunt ca. 2–5 % (Bronchialvenen und kleine Herzvenen, die direkt in die linken Herzhöhlen münden). ==Ein echter Shunt spricht kaum auf Sauerstoff an: Ab ca. 30 % Shuntanteil ändert selbst eine inspiratorische Sauerstofffraktion (FiO₂) von 1,0 den arteriellen Sauerstoffpartialdruck nur wenig== (Iso-Shunt-Diagramm). Bereiche mit niedrigem V/Q bessern sich dagegen gut mit Sauerstoff.",
      { kette: [
        "Herzzeitvolumen sinkt, Sauerstoffverbrauch steigt oder Anämie",
        "Das Gewebe schöpft mehr Sauerstoff aus → das gemischtvenöse Blut wird sauerstoffärmer",
        "Das Blut, das durch den Shunt fließt, bringt noch weniger Sauerstoff mit",
        "==Der arterielle Sauerstoff fällt, obwohl sich an der Lunge nichts geändert hat=="
      ], titel: "Warum das Herzzeitvolumen die Oxygenierung beeinflusst" },
      { h: "Diffusion" },
      { formel: "Diffusionsrate ∝ Fläche × Diffusionskonstante × Partialdruckdifferenz / Dicke", erkl: "Fick-Gesetz. CO₂ diffundiert wegen seiner viel höheren Löslichkeit ca. 20-mal schneller als Sauerstoff – eine Diffusionsstörung für CO₂ ist praktisch bedeutungslos." },
      { ul: [
        "**Durchblutungsbegrenzt:** Der Ausgleich ist früh in der Kapillare erreicht; mehr Aufnahme nur durch mehr Fluss (Lachgas; Sauerstoff in Ruhe).",
        "**Diffusionsbegrenzt:** Kein Ausgleich während der Passage (Kohlenmonoxid wegen seiner sehr hohen Bindung an Hämoglobin) – Grundlage der Messung der Diffusionskapazität.",
        "Sauerstoff wird diffusionsbegrenzt bei Belastung (kurze Kontaktzeit), in großer Höhe (kleines Druckgefälle) oder bei verdickter Schranke (Fibrose)."
      ] },
      { h: "Kennzahlen der Oxygenierung" },
      { ul: [
        "**Alveolo-arterielle Sauerstoffdifferenz (AaDO₂):** unter Raumluft altersabhängig normal ca. 5–15 mmHg (Faustregel ca. Alter/4 + 4); steigt mit der FiO₂. ==Normal bei reiner Hypoventilation, erhöht bei Missverhältnis, Shunt oder Diffusionsstörung.==",
        "**Horovitz-Quotient** (arterieller Sauerstoffpartialdruck / FiO₂): normal > ca. 400 mmHg; akutes Lungenversagen ≤ 300 mmHg bei PEEP ≥ 5 cmH₂O.",
        "**Oxygenierungsindex** = FiO₂ × mittlerer Atemwegsdruck × 100 / arterieller Sauerstoffpartialdruck."
      ] }
    ],
    merke: [
      "Gesamt-V/Q ≈ 0,8; oben ca. 3, unten ca. 0,6.",
      "Missverhältnis → Hypoxämie (flache Sauerstoffkurve), meist kein CO₂-Anstieg (gerade CO₂-Kurve).",
      "Shunt > ca. 30 % spricht kaum auf Sauerstoff an; niedriges V/Q dagegen gut.",
      "Niedriges HZV senkt bei Shunt zusätzlich den arteriellen Sauerstoff.",
      "CO₂ diffundiert ca. 20× schneller als Sauerstoff; Lachgas durchblutungs-, Kohlenmonoxid diffusionsbegrenzt."
    ],
    warum: [
      { q: "Warum kann ein Abfall des Herzzeitvolumens bei einem beatmeten Patienten mit Pneumonie den arteriellen Sauerstoff senken, obwohl sich an der Lunge nichts geändert hat?", a: "Bei sinkendem Herzzeitvolumen schöpft das Gewebe mehr Sauerstoff aus, das gemischtvenöse Blut wird sauerstoffärmer. Das Blut, das durch die nicht belüfteten Bereiche fließt, bringt nun weniger Sauerstoff in die arterielle Mischung – der arterielle Wert fällt bei gleichem Shuntanteil." },
      { q: "Warum lässt sich Sauerstoffmangel durch Mehratmung kaum, ein CO₂-Anstieg dagegen gut ausgleichen?", a: "Gesunde Bereiche sind schon unter Raumluft fast voll gesättigt (flacher oberer Teil der Sauerstoffkurve) – mehr Belüftung bringt kaum zusätzlichen Sauerstoff ins Blut. Der CO₂-Gehalt fällt dagegen fast linear mit steigender Belüftung, sodass gesunde Bereiche das CO₂ der kranken mit abatmen können." }
    ],
    klinik: [
      "Hypoxämie in Narkose: FiO₂ erhöhen hilft bei Missverhältnis; bei Shunt (Atelektase, Pneumonie, einseitige Intubation) braucht es Rekrutierung, PEEP oder Ursachenbehebung.",
      "Bei schwerer Hypoxämie auch Herzzeitvolumen, Hämoglobin und Sauerstoffverbrauch (Fieber, Zittern) optimieren.",
      "Akutes Lungenversagen: Berlin-Definition (2012) mit Horovitz ≤ 300 mmHg unter PEEP ≥ 5 cmH₂O; die neue globale Definition (Matthay et al. 2024) schließt auch Patienten unter High-Flow-Sauerstoff (≥ 30 l/min) ein und erlaubt eine pulsoxymetrische Sättigung/FiO₂ ≤ 315 (bei Sättigung ≤ 97 %)."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Wie verteilt sich das Verhältnis von Belüftung zu Durchblutung in der aufrechten Lunge?", a: "Beide nehmen nach unten zu, die Durchblutung stärker: oben ca. 3, unten ca. 0,6, insgesamt ca. 0,8." },
      { q: "Spezialwissen Lunge: Warum führt ein Belüftungs-Durchblutungs-Missverhältnis typischerweise zu Hypoxämie, aber nicht zu Hyperkapnie?", a: "Die Sauerstoffkurve ist oben flach – gut belüftete Bereiche können keinen zusätzlichen Sauerstoff aufnehmen. Die CO₂-Kurve ist nahezu gerade – Mehratmung gesunder Bereiche gleicht das CO₂-Defizit aus." },
      { q: "Spezialwissen Lunge: Wie lautet die Shuntgleichung?", a: "Shuntanteil = (Cc′O₂ − CaO₂) / (Cc′O₂ − Cv̄O₂) – Sauerstoffgehalt am Kapillarende, arteriell und gemischtvenös." },
      { q: "Spezialwissen Lunge: Ab welchem Shuntanteil spricht der arterielle Sauerstoff kaum noch auf eine FiO₂-Erhöhung an?", a: "Ab etwa 30 % (Iso-Shunt-Diagramm)." },
      { q: "Spezialwissen Lunge: Was unterscheidet durchblutungs- und diffusionsbegrenzten Gasaustausch? Nenne Beispiele.", a: "Durchblutungsbegrenzt: Ausgleich früh in der Kapillare, Aufnahme nur vom Fluss abhängig (Lachgas, Sauerstoff in Ruhe). Diffusionsbegrenzt: kein Ausgleich während der Passage (Kohlenmonoxid; Sauerstoff bei Belastung, Höhe, Fibrose)." },
      { q: "Spezialwissen Lunge: Welche Kriterien hat die Berlin-Definition des akuten Lungenversagens (ARDS)?", a: "Beginn innerhalb 1 Woche, beidseitige Verschattungen, nicht vollständig durch Herzinsuffizienz/Überwässerung erklärt, Horovitz ≤ 300 mmHg unter PEEP/CPAP ≥ 5 cmH₂O (mild 200–300, moderat 100–200, schwer ≤ 100)." }
    ]
  });

  CH.push({
    id: "transport",
    level: "System",
    title: "Sauerstoff- und CO₂-Transport – von der Alveole bis zum Mitochondrium",
    leitfrage: "Wie gelangt Sauerstoff entlang eines Druckgefälles von 160 mmHg auf wenige mmHg bis in die Mitochondrien – und wie lange reicht der Vorrat bei Atemstillstand?",
    einfach: "Sauerstoff fließt wie Wasser einen Hang hinunter: von der Luft (hoher Druck) über Alveole und Blut bis in die Zellen (niedriger Druck). Hämoglobin ist der Lastwagen: Es lädt in der Lunge auf und gibt in den Geweben ab – dort umso bereitwilliger, je saurer und wärmer es ist. Die Sauerstoffreserve des Körpers ist klein; mit 100 % Sauerstoff vor der Narkose füllt man die Lunge als zusätzlichen Tank.",
    figure: { svg: FIG_CASCADE, caption: "Sauerstoffkaskade auf Meereshöhe (gerundete Werte) mit den Ursachen der einzelnen Stufen." },
    body: [
      { h: "Hämoglobin und Sauerstoffbindungskurve" },
      "Hämoglobin (Hb) besteht aus vier Untereinheiten und bindet vier Sauerstoffmoleküle. ==Jedes gebundene Molekül erleichtert die Bindung des nächsten (kooperative Bindung) – daraus entsteht die S-förmige Kurve.== Merkpunkte:",
      { table: { head: ["Sauerstoffpartialdruck", "Sättigung (ca.)"], rows: [
        ["ca. 27 mmHg (3,5 kPa) = P50", "50 %"],
        ["ca. 40 mmHg (gemischtvenös)", "75 %"],
        ["ca. 60 mmHg", "90 %"],
        ["ca. 100 mmHg (arteriell)", "97–98 %"]
      ] } },
      { formel: "Arterieller Sauerstoffgehalt = 1,34 × Hb (g/dl) × Sättigung + 0,003 × arterieller Sauerstoffpartialdruck (mmHg)", erkl: "Ergebnis in ml O₂/dl, normal ca. 20 ml/dl. Der gelöste Anteil ist unter Normaldruck sehr klein – entscheidend sind Hämoglobin und Sättigung." },
      { table: { head: ["Rechtsverschiebung (leichtere Abgabe)", "Linksverschiebung (festere Bindung)"], rows: [
        ["Säure (H⁺) ↑, CO₂ ↑ (Bohr-Effekt)", "Alkalose, Hypokapnie"],
        ["Temperatur ↑", "Unterkühlung"],
        ["2,3-Bisphosphoglycerat ↑ (chronische Hypoxie, Anämie, Höhe)", "2,3-Bisphosphoglycerat ↓ (gelagerte Erythrozytenkonzentrate)"],
        ["", "Fetales Hämoglobin (P50 ca. 19 mmHg), Kohlenmonoxid-Hb, Methämoglobin"]
      ] } },
      "==Die Rechtsverschiebung im arbeitenden Gewebe ist sinnvoll: Wo es sauer und warm ist, wird mehr Sauerstoff abgegeben.==",
      { h: "Gefährliche Hämoglobin-Formen" },
      { ul: [
        "**Kohlenmonoxid (CO)** bindet ca. 200- bis 250-mal fester an Hämoglobin als Sauerstoff und verschiebt die Kurve des restlichen Hämoglobins nach links. ==Das normale Pulsoxymeter zeigt falsch hohe Werte== (CO-Hb wird als oxygeniertes Hb gezählt) → Diagnose mit CO-Oxymetrie in der Blutgasanalyse. Halbwertszeit des CO-Hb: ca. 4–6 h unter Raumluft, ca. 1–1,5 h unter 100 % Sauerstoff, kürzer in der Überdruckkammer.",
        "**Methämoglobin** (dreiwertiges Eisen) bindet keinen Sauerstoff. Die pulsoxymetrische Sättigung nähert sich ca. 85 %, unabhängig vom wahren Wert. Auslöser u.a. Prilocain, Benzocain, Nitrate, Dapson. Therapie: Methylenblau (nicht bei Glukose-6-Phosphat-Dehydrogenase-Mangel)."
      ] },
      { h: "Die Sauerstoffkaskade" },
      { kette: [
        "Trockene Luft: 0,21 × 760 ≈ 160 mmHg",
        "Befeuchtung in den Atemwegen (Wasserdampf 47 mmHg): ≈ 150 mmHg",
        "Verdünnung durch CO₂ in der Alveole (alveoläre Gasgleichung): ≈ 100 mmHg",
        "Beimischung von Shuntblut und unterschiedliche Belüftung: arteriell ≈ 90–100 mmHg",
        "Abgabe ans Gewebe: gemischtvenös ≈ 40 mmHg",
        "Diffusion durch Gewebe und Zelle: Mitochondrien nur wenige mmHg"
      ], titel: "Stufe für Stufe" },
      { formel: "Alveolärer Sauerstoffpartialdruck = FiO₂ × (Luftdruck − 47) − PaCO₂ / 0,8", erkl: "Alveoläre Gasgleichung; 0,8 = respiratorischer Quotient. Raumluft auf Meereshöhe: 0,21 × 713 − 40/0,8 ≈ 100 mmHg." },
      { h: "Sauerstoffvorrat und Atemstillstand" },
      { kette: [
        "Unter Raumluft hat der Erwachsene nur ca. 1,5 l Sauerstoff gespeichert, davon in der FRC nur ca. 0,3–0,4 l",
        "Präoxygenierung mit 100 % Sauerstoff bis zu einer ausgeatmeten Sauerstofffraktion von ca. 0,9",
        "Die FRC (ca. 2,5 l) enthält jetzt ca. 2 l Sauerstoff",
        "Bei einem Verbrauch von ca. 250 ml/min reicht das theoretisch für ca. 8 min",
        "==Gesunde Erwachsene erreichen eine Sättigung von 90 % nach ca. 8 min (Benumof et al. 1997) – bei Adipositas, Schwangerschaft, Kindern, Sepsis und Anämie viel früher=="
      ], titel: "Warum Präoxygenierung Zeit verschafft" },
      { falle: "„Die Sättigung fällt in der Apnoe gleichmäßig ab.“ – Nein. Solange der Sauerstoffpartialdruck hoch ist, bewegt man sich im flachen Teil der Kurve, und die Sättigung bleibt lange stabil. Unterhalb von ca. 90 % (≈ 60 mmHg) beginnt der steile Teil: Die Sättigung stürzt dann innerhalb kurzer Zeit ab." },
      { h: "CO₂-Transport" },
      { ul: [
        "ca. **70 %** als Bicarbonat (gebildet durch die Carboanhydrase im Erythrozyten; Austausch gegen Chlorid = Chlorid-Shift),",
        "ca. **20–25 %** an Hämoglobin gebunden (Carbamino-Hb),",
        "ca. **5–10 %** physikalisch gelöst."
      ] },
      "**Haldane-Effekt:** ==Hämoglobin ohne Sauerstoff bindet mehr CO₂ und Säure.== In der Lunge fördert die Sauerstoffaufnahme deshalb die CO₂-Abgabe, im Gewebe die Sauerstoffabgabe die CO₂-Aufnahme. Er ist das Gegenstück zum Bohr-Effekt."
    ],
    merke: [
      "P50 ≈ 27 mmHg; 40 mmHg ≈ 75 %, 60 mmHg ≈ 90 % Sättigung.",
      "Sauerstoffgehalt = 1,34 × Hb × Sättigung + 0,003 × Partialdruck (ca. 20 ml/dl).",
      "Rechtsverschiebung: Säure, CO₂, Wärme, 2,3-Bisphosphoglycerat; links: fetales Hb, CO-Hb, Met-Hb, Alkalose, Kälte.",
      "Kaskade: 160 → 150 → 100 → ca. 95 → 40 → wenige mmHg.",
      "Nach Präoxygenierung ca. 2 l Sauerstoff in der FRC → Sättigung 90 % nach ca. 8 min beim Gesunden."
    ],
    warum: [
      { q: "Warum misst das Pulsoxymeter bei Kohlenmonoxidvergiftung falsch hohe Werte?", a: "Das Gerät misst Licht bei nur zwei Wellenlängen. Kohlenmonoxid-Hämoglobin absorbiert dort ähnlich wie sauerstoffbeladenes Hämoglobin und wird mitgezählt. Erst die CO-Oxymetrie mit mehreren Wellenlängen trennt die Hämoglobinformen." },
      { q: "Warum geben gelagerte Erythrozytenkonzentrate Sauerstoff zunächst schlechter ab?", a: "Bei der Lagerung sinkt das 2,3-Bisphosphoglycerat in den Erythrozyten. Die Bindungskurve verschiebt sich nach links, Hämoglobin hält den Sauerstoff fester. Nach der Transfusion wird 2,3-Bisphosphoglycerat innerhalb von Stunden bis Tagen wieder aufgebaut." }
    ],
    klinik: [
      "Präoxygenierung bis zu einer ausgeatmeten Sauerstofffraktion ≥ 0,9 mit dicht sitzender Maske; zusätzlich apnoische Oxygenierung (z.B. über Nasenkanüle) verlängert die sichere Apnoezeit.",
      "Rauchgasvergiftung: Eine normale Pulsoxymetrie schließt eine Kohlenmonoxidvergiftung nicht aus → CO-Oxymetrie.",
      "Massivtransfusion: Linksverschiebung durch gelagerte Konserven, Hypothermie und Alkalose verschlechtert die Sauerstoffabgabe – Wärmen und Säure-Basen-Haushalt beachten."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Welche Merkpunkte der Sauerstoffbindungskurve sollte man kennen?", a: "P50 ca. 27 mmHg (3,5 kPa); 40 mmHg ≈ 75 % (gemischtvenös); 60 mmHg ≈ 90 %; 100 mmHg ≈ 97–98 %." },
      { q: "Spezialwissen Lunge: Welche Faktoren verschieben die Sauerstoffbindungskurve nach links?", a: "Alkalose, Hypokapnie, Unterkühlung, erniedrigtes 2,3-Bisphosphoglycerat (gelagerte Konserven), fetales Hämoglobin, Kohlenmonoxid-Hb und Methämoglobin." },
      { q: "Spezialwissen Lunge: Wie hoch ist die Halbwertszeit von Kohlenmonoxid-Hämoglobin unter Raumluft und unter 100 % Sauerstoff?", a: "Ca. 4–6 h unter Raumluft, ca. 1–1,5 h unter 100 % Sauerstoff, kürzer in der Überdruckkammer." },
      { q: "Spezialwissen Lunge: Wie viel Sauerstoff enthält die FRC nach Präoxygenierung, und wann erreicht ein gesunder Erwachsener in der Apnoe eine Sättigung von 90 %?", a: "Ca. 2 l (FRC ca. 2,5 l × ca. 0,9); bei einem Verbrauch von ca. 250 ml/min nach ca. 8 min (Benumof 1997)." },
      { q: "Spezialwissen Lunge: Beschreibe die Stufen der Sauerstoffkaskade auf Meereshöhe.", a: "Trockene Luft ca. 160 mmHg → befeuchtet ca. 150 → alveolär ca. 100 → arteriell ca. 90–100 → gemischtvenös ca. 40 → Mitochondrien wenige mmHg." },
      { q: "Spezialwissen Lunge: In welchen Formen wird CO₂ im Blut transportiert und was ist der Haldane-Effekt?", a: "Ca. 70 % Bicarbonat, 20–25 % Carbamino-Hb, 5–10 % gelöst. Haldane-Effekt: Hämoglobin ohne Sauerstoff bindet mehr CO₂ und Säure – Sauerstoffaufnahme in der Lunge fördert die CO₂-Abgabe." }
    ]
  });

  CH.push({
    id: "regulation",
    level: "System",
    title: "Atemregulation – Taktgeber, Messfühler und Medikamente",
    leitfrage: "Wer erzeugt den Atemrhythmus, wer misst CO₂ und Sauerstoff – und wo greifen Opioide, Hypnotika und volatile Anästhetika ein?",
    einfach: "Im Hirnstamm sitzt ein Taktgeber, der die Atmung startet. Die wichtigste Steuergröße ist das CO₂: Steigt es, wird das Gehirn 'sauer', und wir atmen mehr. Sauerstoffmangel wird von kleinen Messfühlern an der Halsschlagader gemeldet – aber erst, wenn er deutlich ist. Opioide und Narkosemittel bremsen beide Systeme gleichzeitig.",
    body: [
      { h: "Der Taktgeber" },
      "Der Einatemrhythmus entsteht im **Prä-Bötzinger-Komplex** im unteren Hirnstamm (Medulla oblongata). Ein weiteres Zentrum steuert die aktive Ausatmung. Zentren in der Brücke (Pons) formen den Übergang zwischen Ein- und Ausatmung.",
      { h: "CO₂-Messung im Gehirn (zentrale Chemorezeptoren)" },
      { kette: [
        "Arterielles CO₂ steigt",
        "CO₂ passiert die Blut-Hirn-Schranke frei (Bicarbonat und Säure kaum)",
        "Im Hirngewebe und Liquor entsteht Säure (H⁺)",
        "Nervenzellen im Hirnstamm (v.a. Nucleus retrotrapezoideus) und benachbarte Gliazellen messen die Säure",
        "==Mehr Atmung – das ist der wichtigste Atemantrieb== (Guyenet & Bayliss 2015)"
      ], titel: "Warum CO₂ der Hauptantrieb ist" },
      "Die **CO₂-Antwortkurve** ist annähernd gerade: Pro mmHg CO₂-Anstieg steigt das Atemminutenvolumen um ca. 2 l/min (große individuelle Unterschiede).",
      { h: "Sauerstoffmessung an der Halsschlagader (periphere Chemorezeptoren)" },
      "Die **Glomera carotica** an der Gabelung der Halsschlagader melden über den N. glossopharyngeus innerhalb von Sekunden. Ihre Zellen erkennen Sauerstoffmangel (über Signale aus den Mitochondrien und sauerstoffempfindliche Kaliumkanäle) und setzen Botenstoffe frei. ==Die Atemantwort auf Sauerstoffmangel steigt erst unterhalb eines arteriellen Sauerstoffpartialdrucks von ca. 60 mmHg steil an== und verstärkt sich zusammen mit CO₂-Anstieg und Azidose. Nach beidseitiger Karotis-Operation kann diese Antwort fehlen.",
      { h: "Dehnungs- und Reizfühler" },
      { ul: [
        "**Dehnungsfühler** der Lunge (Hering-Breuer-Reflex: starke Dehnung beendet die Einatmung) – beim Erwachsenen schwach, beim Neugeborenen wichtig.",
        "**Reizfühler** in den Atemwegen: Husten, Bronchospasmus, Laryngospasmus (Nerv u.a. N. laryngeus superior).",
        "**Fühler im Lungengewebe** (J-Rezeptoren): Ödem und Embolie → schnelle, flache Atmung, Atemnot."
      ] },
      { h: "Apnoeschwelle" },
      "Fällt das CO₂ unter die **Apnoeschwelle**, setzt die Spontanatmung aus. In Narkose liegt sie nur wenige mmHg unter dem CO₂-Wert bei Spontanatmung. ==Nach Hyperventilation atmet der Patient deshalb erst wieder, wenn das CO₂ über diese Schwelle gestiegen ist.==",
      { h: "Medikamente" },
      { table: { head: ["Substanz", "Wirkung auf die Atemsteuerung"], rows: [
        ["Opioide (μ-Rezeptoren im Prä-Bötzinger-Komplex und in der Brücke)", "Atemfrequenz ↓ (oft stärker als das Atemzugvolumen), unregelmäßige Atmung bis Apnoe; CO₂-Antwort nach rechts verschoben und flacher; Antwort auf Sauerstoffmangel ↓"],
        ["Propofol, Benzodiazepine, Barbiturate", "Flachere CO₂-Antwort, Tonus der oberen Atemwege ↓ (Verlegung); starke Wirkungsverstärkung mit Opioiden"],
        ["Volatile Anästhetika", "Atemzugvolumen ↓, Frequenz ↑, CO₂-Antwort ↓; die Antwort auf Sauerstoffmangel wird schon bei ca. 0,1 MAC gedämpft (Dahan & Teppema 2003)"],
        ["Ketamin", "Atemantrieb und Schutzreflexe relativ erhalten (in hoher Dosis trotzdem Apnoe möglich)"],
        ["Doxapram", "Stimuliert die Glomera carotica"]
      ] } },
      { h: "COPD und Sauerstoff" },
      { kette: [
        "Patient mit chronisch erhöhtem CO₂ erhält viel Sauerstoff",
        "Die hypoxische Vasokonstriktion in schlecht belüfteten Bereichen wird aufgehoben → mehr Durchblutung schlecht belüfteter Areale, mehr Totraum",
        "Zusätzlich gibt sauerstoffbeladenes Hämoglobin CO₂ ab (Haldane-Effekt)",
        "==Das CO₂ steigt – überwiegend durch diese Mechanismen, weniger durch Verlust des Sauerstoff-Atemantriebs== (Aubier et al. 1980)"
      ], titel: "Warum Sauerstoff bei COPD das CO₂ erhöhen kann" },
      "Deshalb wird Sauerstoff bei gefährdeten Patienten auf eine Sättigung von **88–92 %** eingestellt."
    ],
    merke: [
      "Taktgeber: Prä-Bötzinger-Komplex (Einatmung).",
      "Hauptantrieb = CO₂ über Säure im Hirngewebe (CO₂ passiert die Blut-Hirn-Schranke).",
      "Glomus caroticum (N. IX): Antwort auf Sauerstoffmangel steil erst unter ca. 60 mmHg.",
      "Opioide: Frequenz ↓, CO₂-Kurve rechts und flach; volatile Anästhetika dämpfen die Hypoxieantwort schon bei ca. 0,1 MAC.",
      "COPD: Sauerstoff-induzierter CO₂-Anstieg v.a. durch Aufhebung der HPV und Haldane → Ziel 88–92 %."
    ],
    warum: [
      { q: "Warum ist ein Patient im Aufwachraum mit Opioiden und Narkoseresten bei Sauerstoffmangel besonders gefährdet?", a: "Opioide und volatile Anästhetika dämpfen sowohl die CO₂- als auch die Sauerstoffmangel-Antwort, Hypnotika schwächen zusätzlich die Muskeln der oberen Atemwege. Der Schutzreflex 'Sauerstoffmangel → mehr atmen' fällt aus, und gleichzeitig verlegt sich der Atemweg leichter – der Sauerstoffmangel wird weder ausgeglichen noch bemerkt." },
      { q: "Warum sinkt bei Opioid-Atemdepression zuerst die Atemfrequenz?", a: "Opioide wirken direkt auf den rhythmusbildenden Prä-Bötzinger-Komplex und auf Zentren in der Brücke, die den Übergang zwischen Ein- und Ausatmung steuern. Die Pausen werden länger, die Frequenz fällt, während das einzelne Atemzugvolumen zunächst relativ erhalten bleibt." }
    ],
    klinik: [
      "Opioid-Atemdepression früh erkennen: Atemfrequenz und Kapnographie überwachen – die Sättigung unter Sauerstoffgabe fällt erst spät.",
      "Nach manueller Hyperventilation bei der Ausleitung setzt die Spontanatmung verzögert ein – normokapnisch ausleiten.",
      "Frühgeborene und junge Säuglinge: unreife Atemsteuerung, Apnoen nach Narkose möglich bis ca. 60 Wochen nach Empfängnis → Überwachung."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Wo wird der Einatemrhythmus erzeugt?", a: "Im Prä-Bötzinger-Komplex der Medulla oblongata; ein weiteres Zentrum steuert die aktive Ausatmung, Brückenzentren den Phasenwechsel." },
      { q: "Spezialwissen Lunge: Worauf reagieren die zentralen Chemorezeptoren und warum spiegelt das den arteriellen CO₂-Wert?", a: "Auf Säure (H⁺) im Hirngewebe/Liquor (v.a. Nucleus retrotrapezoideus). CO₂ passiert die Blut-Hirn-Schranke frei, Bicarbonat und H⁺ kaum – ein CO₂-Anstieg säuert das Hirngewebe rasch an." },
      { q: "Spezialwissen Lunge: Wie funktionieren die peripheren Chemorezeptoren und ab welchem Sauerstoffpartialdruck wird die Atemantwort steil?", a: "Zellen des Glomus caroticum erkennen Sauerstoffmangel über mitochondriale Signale und sauerstoffempfindliche Kaliumkanäle und setzen Botenstoffe frei (Nerv: N. glossopharyngeus); steiler Anstieg unter ca. 60 mmHg." },
      { q: "Spezialwissen Lunge: Wie verändern Opioide die Atmung?", a: "Über μ-Rezeptoren im Prä-Bötzinger-Komplex und in der Brücke: Frequenz ↓ (oft stärker als das Atemzugvolumen), unregelmäßige Atmung bis Apnoe, CO₂-Antwort nach rechts verschoben und flacher, Antwort auf Sauerstoffmangel ↓." },
      { q: "Spezialwissen Lunge: Ab welcher Konzentration dämpfen volatile Anästhetika die Atemantwort auf Sauerstoffmangel?", a: "Schon bei ca. 0,1 MAC (Dahan & Teppema 2003)." },
      { q: "Spezialwissen Lunge: Was ist die Apnoeschwelle?", a: "Der CO₂-Wert, unterhalb dessen die Spontanatmung aussetzt; in Narkose nur wenige mmHg unter dem Wert bei Spontanatmung." },
      { q: "Spezialwissen Lunge: Warum und auf welche Sättigung wird Sauerstoff bei COPD-Patienten mit CO₂-Retention eingestellt?", a: "Viel Sauerstoff hebt die hypoxische Vasokonstriktion auf (Missverhältnis, Totraum ↑) und setzt über den Haldane-Effekt CO₂ frei → CO₂ steigt; Ziel-Sättigung 88–92 %." }
    ]
  });

  CH.push({
    id: "umwelt",
    level: "System",
    title: "Höhe, Tauchen, Überdruck und Sauerstofftoxizität",
    leitfrage: "Was passiert mit dem Gasaustausch, wenn der Umgebungsdruck sinkt oder steigt – und warum ist auch zu viel Sauerstoff schädlich?",
    einfach: "In der Höhe ist die Luft 'dünner': Es ist zwar weiterhin 21 % Sauerstoff, aber bei weniger Gesamtdruck – also weniger Sauerstoffdruck. Beim Tauchen ist es umgekehrt: Alle 10 m Wassertiefe kommt eine Atmosphäre Druck dazu, Gase werden zusammengepresst und lösen sich stärker im Blut. Sauerstoff ist ein Medikament – zu viel und zu lange schadet er Lunge, Gehirn und Augen von Frühgeborenen.",
    body: [
      { h: "Große Höhe" },
      "Der Luftdruck halbiert sich in ca. 5500 m Höhe (ca. 380 mmHg). Der inspiratorische Sauerstoffpartialdruck sinkt entsprechend.",
      { formel: "Beispiel 3000 m: Luftdruck ca. 526 mmHg → eingeatmet 0,21 × (526 − 47) ≈ 100 mmHg → alveolär ca. 55–60 mmHg (bei leichter Hyperventilation)", erkl: "Alveoläre Gasgleichung – der Wasserdampfdruck (47 mmHg) bleibt in jeder Höhe gleich." },
      { kette: [
        "Sauerstoffmangel → Glomus caroticum → Hyperventilation (Stunden)",
        "CO₂ ↓ → respiratorische Alkalose → die Niere scheidet über Tage Bicarbonat aus (Acetazolamid beschleunigt das)",
        "2,3-Bisphosphoglycerat ↑ (Stunden bis Tage), Erythropoetin ↑ → mehr rote Blutkörperchen (Wochen)",
        "==Höhenanpassung (Akklimatisation)=="
      ], titel: "Anpassung an die Höhe" },
      "Gefahren: akute Bergkrankheit, **Höhenhirnödem** und **Höhenlungenödem** (durch ungleichmäßige hypoxische Vasokonstriktion mit örtlich sehr hohem Kapillardruck). Flugzeugkabinen sind auf höchstens ca. 2400 m Höhe (8000 ft) eingestellt; beim Gesunden fällt der arterielle Sauerstoffpartialdruck dort auf ca. 60–75 mmHg – für Lungenkranke kann das kritisch sein.",
      { h: "Tauchen und Überdruck" },
      "Alle **10 m Wassertiefe** erhöhen den Druck um ca. **1 bar**. Nach Boyle verkleinert sich ein Gasvolumen bei Druckverdopplung auf die Hälfte – und dehnt sich beim Auftauchen wieder aus.",
      { ul: [
        "**Barotrauma:** Ohr, Nasennebenhöhlen, Lunge (Auftauchen mit angehaltenem Atem → Lungenriss, arterielle Gasembolie).",
        "**Dekompressionskrankheit:** Unter Druck löst sich mehr Stickstoff im Gewebe; bei zu schnellem Auftauchen bilden sich Bläschen (Gelenkschmerz, neurologische Ausfälle). Therapie: 100 % Sauerstoff, Überdruckkammer.",
        "**Stickstoffnarkose** in größeren Tiefen."
      ] },
      { h: "Hyperbare Sauerstofftherapie" },
      { kette: [
        "Patient atmet 100 % Sauerstoff bei ca. 2,5–3 bar",
        "Der arterielle Sauerstoffpartialdruck steigt auf ca. 1500–2000 mmHg",
        "Gelöster Sauerstoff (0,003 ml/dl pro mmHg) erreicht ca. 5–6 ml/dl",
        "==Das deckt fast den Ruhebedarf des Körpers – auch ohne Hämoglobin=="
      ] },
      "Einsatz u.a. bei Dekompressionskrankheit, arterieller Gasembolie, schwerer Kohlenmonoxidvergiftung (Indikation umstritten) und bestimmten Weichteilinfektionen.",
      { h: "Lachgas und luftgefüllte Hohlräume" },
      "Lachgas ist ca. 34-mal besser im Blut löslich als Stickstoff. ==Es strömt deshalb schneller in luftgefüllte Hohlräume ein, als Stickstoff heraus kann== → Volumen bzw. Druck steigen: Pneumothorax, Mittelohr, Darm, Luftembolie, Tubus-Cuff und Augen nach Gas-Tamponade (z.B. SF₆) – dort ist Lachgas kontraindiziert.",
      { h: "Sauerstofftoxizität" },
      { ul: [
        "**Lunge (Lorrain-Smith-Effekt):** längere Gabe hoher Konzentrationen (FiO₂ über ca. 0,5–0,6 über viele Stunden bis Tage) → Entzündung der Atemwege, Schädigung wie beim akuten Lungenversagen; dazu **Resorptionsatelektasen**.",
        "**Gehirn (Paul-Bert-Effekt):** unter Überdruck (ab ca. 1,4–1,6 bar Sauerstoffpartialdruck) Krampfanfälle.",
        "**Frühgeborene:** Netzhautschädigung (Frühgeborenen-Retinopathie).",
        "Ursache sind reaktive Sauerstoffspezies. ==Grundsatz: so viel Sauerstoff wie nötig, so wenig wie möglich – Ziel ist Normoxie.=="
      ] }
    ],
    merke: [
      "Luftdruck halbiert sich in ca. 5500 m; Wasserdampfdruck bleibt 47 mmHg.",
      "Akklimatisation: Hyperventilation → Alkalose → renale Bicarbonatausscheidung; 2,3-BPG ↑, Erythropoetin ↑.",
      "Je 10 m Wassertiefe + 1 bar; Gase werden komprimiert und lösen sich stärker.",
      "Hyperbar: gelöster Sauerstoff bis ca. 5–6 ml/dl → deckt fast den Ruhebedarf.",
      "Lachgas dehnt luftgefüllte Hohlräume aus (34× löslicher als Stickstoff); Sauerstoff ist toxisch → Normoxie anstreben."
    ],
    warum: [
      { q: "Warum füllt Lachgas einen Pneumothorax schneller, als Stickstoff ihn verlassen kann?", a: "Lachgas ist im Blut ca. 34-mal besser löslich als Stickstoff. Das Blut bringt deshalb große Mengen Lachgas zum Hohlraum, während nur wenig Stickstoff abtransportiert wird. Netto strömt Gas hinein – Volumen und Druck steigen, bei einem Pneumothorax bis zum Spannungspneumothorax." },
      { q: "Warum entsteht in großer Höhe eine respiratorische Alkalose, und wie gleicht der Körper sie aus?", a: "Der niedrige Sauerstoffpartialdruck aktiviert die Glomera carotica → Hyperventilation → CO₂ fällt → pH steigt. Die Niere scheidet über einige Tage vermehrt Bicarbonat aus und normalisiert den pH; dadurch kann die Atmung noch weiter gesteigert werden. Acetazolamid beschleunigt diese Bicarbonatausscheidung." }
    ],
    klinik: [
      "Patienten nach Pneumothorax oder mit Lungenzysten: Flugtauglichkeit und Lachgasverzicht beachten.",
      "Nach Augenoperationen mit Gas-Tamponade kein Lachgas, solange das Gas im Auge ist.",
      "Intensivpatienten: Sauerstoff nach Zielbereich titrieren; Hyperoxie nach Reanimation und bei Frühgeborenen vermeiden."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: In welcher Höhe halbiert sich der Luftdruck, und wie verändert sich der eingeatmete Sauerstoffpartialdruck?", a: "In ca. 5500 m (ca. 380 mmHg); der eingeatmete Sauerstoffpartialdruck sinkt proportional (z.B. in 3000 m ca. 100 mmHg statt ca. 150 mmHg), da der Wasserdampfdruck von 47 mmHg gleich bleibt." },
      { q: "Spezialwissen Lunge: Welche Schritte umfasst die Höhenakklimatisation?", a: "Hyperventilation (Glomus caroticum) → respiratorische Alkalose → renale Bicarbonatausscheidung über Tage (Acetazolamid beschleunigt); 2,3-BPG ↑; Erythropoetin ↑ mit mehr roten Blutkörperchen über Wochen." },
      { q: "Spezialwissen Lunge: Wie viel Sauerstoff ist unter hyperbarer Sauerstofftherapie physikalisch gelöst und warum ist das bedeutsam?", a: "Bei 100 % Sauerstoff unter ca. 2,5–3 bar steigt der arterielle Partialdruck auf ca. 1500–2000 mmHg; gelöst sind dann ca. 5–6 ml/dl – das deckt fast den Ruhebedarf auch ohne Hämoglobin." },
      { q: "Spezialwissen Lunge: Warum ist Lachgas bei Pneumothorax oder nach Augenoperation mit Gas-Tamponade kontraindiziert?", a: "Es ist ca. 34-mal löslicher als Stickstoff und strömt schneller in luftgefüllte Hohlräume ein, als Stickstoff herauskommt → Volumen- bzw. Druckanstieg." },
      { q: "Spezialwissen Lunge: Welche Formen der Sauerstofftoxizität gibt es?", a: "Pulmonal (Lorrain-Smith: längere hohe FiO₂ → Entzündung/Lungenschädigung, Resorptionsatelektasen), zerebral unter Überdruck (Paul-Bert: Krampfanfälle ab ca. 1,4–1,6 bar Sauerstoffpartialdruck), Frühgeborenen-Retinopathie." },
      { q: "Spezialwissen Lunge: Auf welche Höhe sind Flugzeugkabinen eingestellt und welcher arterielle Sauerstoffpartialdruck resultiert beim Gesunden?", a: "Auf höchstens ca. 2400 m (8000 ft); arteriell ca. 60–75 mmHg." }
    ]
  });

  CH.push({
    id: "lebensalter",
    level: "System",
    title: "Atmung über die Lebensspanne: Säugling, Schwangerschaft, Alter, Adipositas",
    leitfrage: "Warum desaturieren Säuglinge, Schwangere und Adipöse so viel schneller als gesunde Erwachsene – und was verändert sich im Alter?",
    einfach: "Wie schnell jemand bei Atemstillstand Sauerstoffmangel bekommt, hängt von zwei Dingen ab: wie groß der Sauerstofftank in der Lunge ist (FRC) und wie schnell er verbraucht wird. Säuglinge, Schwangere und stark Übergewichtige haben einen kleinen Tank und einen hohen Verbrauch – bei ihnen fällt die Sättigung oft schon nach wenigen Minuten.",
    body: [
      { kette: [
        "Kleine FRC (weniger Sauerstoffspeicher) + hoher Sauerstoffverbrauch",
        "==Der Vorrat ist bei Atemstillstand schnell erschöpft=="
      ], titel: "Das gemeinsame Prinzip" },
      { h: "Neugeborene und Säuglinge" },
      { ul: [
        "**Sauerstoffverbrauch** ca. 6–8 ml/kg/min – etwa doppelt so hoch wie beim Erwachsenen (ca. 3–4 ml/kg/min).",
        "**Weicher Brustkorb** und waagerecht stehende Rippen → die FRC ist relativ klein, kleine Atemwege schließen sich schon bei normaler Atmung.",
        "**Zwerchfell** mit weniger ermüdungsresistenten Muskelfasern → ==schnellere Erschöpfung==.",
        "**Enge Atemwege:** Nach Hagen-Poiseuille steigt der Widerstand mit der 4. Potenz des Radius. ==Schon 1 mm Schleimhautschwellung in einem 4-mm-Atemweg (Radius 2 → 1 mm) erhöht den Widerstand bei laminarem Fluss auf das 16-Fache.==",
        "Atemfrequenz Neugeborener ca. 30–60/min; Atemzugvolumen und Totraum pro kg ähnlich wie beim Erwachsenen (ca. 6–7 ml/kg bzw. ca. 2 ml/kg) → apparativen Totraum klein halten.",
        "Die Alveolen vermehren sich vor allem in den ersten Lebensjahren noch stark."
      ] },
      { h: "Schwangerschaft" },
      { table: { head: ["Größe", "Veränderung (ca.)", "Folge"], rows: [
        ["Atemminutenvolumen", "+30–50 % (v.a. Atemzugvolumen; Progesteron)", "arterielles CO₂ ca. 30–32 mmHg, Bicarbonat kompensatorisch ↓"],
        ["FRC", "am Termin ca. −20 %", "kleinerer Sauerstoffspeicher"],
        ["Sauerstoffverbrauch", "↑ (am Termin um ca. 20–30 %)", "schnellere Entsättigung"],
        ["Schleimhäute", "geschwollen, gut durchblutet", "schwierigere Intubation, Blutungsneigung, kleinere Tuben"]
      ] } },
      "==Folge: kurze Apnoetoleranz, schnelleres An- und Abfluten volatiler Anästhetika, Aspirationsrisiko== – Präoxygenierung besonders sorgfältig.",
      { h: "Höheres Lebensalter" },
      { ul: [
        "Brustkorb steifer, Lunge verliert elastische Rückstellkraft ('Altersemphysem') → ==die Closing Capacity steigt und überschreitet die FRC== → Missverhältnis von Belüftung und Durchblutung.",
        "Der arterielle Sauerstoffpartialdruck sinkt mit dem Alter (Faustformel im Sitzen ca. 109 − 0,43 × Alter mmHg; Sorbini et al. 1968).",
        "Das FEV1 nimmt ab dem jungen Erwachsenenalter jährlich um ca. 20–30 ml ab.",
        "Schwächere Antwort auf Sauerstoffmangel und CO₂-Anstieg, schwächerer Husten- und Schluckreflex → ==Aspirations- und Pneumonierisiko==."
      ] },
      { h: "Adipositas" },
      { kette: [
        "Bauch- und Brustwand-Gewicht drücken auf die Lunge, besonders im Liegen und in Narkose",
        "FRC und exspiratorisches Reservevolumen ↓ → die FRC fällt unter die Closing Capacity",
        "Atelektasen, Missverhältnis von Belüftung und Durchblutung; dazu höherer Sauerstoffverbrauch und höhere CO₂-Produktion",
        "==Sehr kurze Apnoetoleranz – die Sättigung kann schon nach wenigen Minuten auf 90 % fallen=="
      ], titel: "Warum Adipöse so schnell desaturieren" },
      "Häufig begleitet von **Schlafapnoe**. Ein **Adipositas-Hypoventilationssyndrom** liegt vor bei BMI ≥ 30 kg/m² und erhöhtem CO₂ am Tag (> 45 mmHg) ohne andere Ursache.",
      "Gegenmaßnahmen: Oberkörperhochlagerung bzw. Rampenlagerung, Präoxygenierung mit CPAP bzw. PEEP, apnoische Oxygenierung, Beatmung mit PEEP, Tidalvolumen nach idealem (nicht tatsächlichem) Körpergewicht."
    ],
    merke: [
      "Schnelle Entsättigung = kleine FRC + hoher Sauerstoffverbrauch.",
      "Säugling: Sauerstoffverbrauch ca. 6–8 ml/kg/min, weicher Brustkorb, enge Atemwege (Widerstand ∝ 1/r⁴).",
      "Schwangerschaft: Atemminutenvolumen +30–50 %, CO₂ ca. 30–32 mmHg, FRC −20 %.",
      "Alter: Closing Capacity > FRC, arterieller Sauerstoff sinkt, Schutzreflexe schwächer.",
      "Adipositas: FRC ↓ (v.a. liegend), Rampenlagerung, CPAP/PEEP, Tidalvolumen nach idealem Gewicht."
    ],
    warum: [
      { q: "Warum führt eine kleine Schleimhautschwellung beim Säugling zu so viel mehr Atemarbeit als beim Erwachsenen?", a: "Der Widerstand steigt bei laminarem Fluss mit der 4. Potenz des Radius. 1 mm Schwellung halbiert bei einem 4-mm-Atemweg den Radius (2 → 1 mm) → 16-facher Widerstand. Beim Erwachsenen mit z.B. 16 mm Durchmesser (Radius 8 → 7 mm) steigt er nur um ca. 70 %." },
      { q: "Warum ist der arterielle CO₂-Wert in der Schwangerschaft niedrig?", a: "Progesteron erhöht die Empfindlichkeit des Atemzentrums für CO₂; das Atemminutenvolumen steigt um ca. 30–50 %, v.a. über größere Atemzüge. Das CO₂ sinkt auf ca. 30–32 mmHg, die Niere gleicht durch Bicarbonatausscheidung aus." }
    ],
    klinik: [
      "Kinder: Apnoezeit kurz, Hypoxie führt rasch zur Bradykardie – Präoxygenierung und zügige Atemwegssicherung.",
      "Schwangere: Präoxygenierung bis zur ausgeatmeten Sauerstofffraktion ≥ 0,9, Oberkörper leicht hoch, Ausrüstung für schwierigen Atemweg bereit.",
      "Adipöse: Rampenlagerung, PEEP, lungenschonende Beatmung nach idealem Körpergewicht, postoperativ CPAP bei Schlafapnoe."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Warum desaturieren Säuglinge in der Apnoe schneller als Erwachsene?", a: "Doppelt so hoher Sauerstoffverbrauch (ca. 6–8 vs. 3–4 ml/kg/min) bei relativ kleiner FRC (weicher Brustkorb, frühe Schließung kleiner Atemwege)." },
      { q: "Spezialwissen Lunge: Um welchen Faktor steigt der Atemwegswiderstand, wenn sich der Radius halbiert?", a: "Bei laminarem Fluss um das 16-Fache (Widerstand ∝ 1/Radius⁴)." },
      { q: "Spezialwissen Lunge: Wie verändert sich die Atmung in der Schwangerschaft?", a: "Atemminutenvolumen +30–50 % (v.a. Atemzugvolumen, Progesteron), arterielles CO₂ ca. 30–32 mmHg mit kompensatorisch niedrigem Bicarbonat, FRC am Termin ca. −20 %, Sauerstoffverbrauch ↑, geschwollene Schleimhäute." },
      { q: "Spezialwissen Lunge: Wie verändert sich der arterielle Sauerstoffpartialdruck mit dem Alter?", a: "Er sinkt, grob ca. 109 − 0,43 × Alter mmHg im Sitzen (Sorbini 1968), v.a. weil die Closing Capacity die FRC überschreitet." },
      { q: "Spezialwissen Lunge: Welche Lungenveränderungen machen Adipöse in Narkose so hypoxiegefährdet?", a: "FRC und exspiratorisches Reservevolumen ↓ (v.a. liegend, in Narkose), FRC < Closing Capacity, Atelektasen, erhöhter Sauerstoffverbrauch und CO₂-Produktion → sehr kurze Apnoetoleranz." },
      { q: "Spezialwissen Lunge: Wie ist das Adipositas-Hypoventilationssyndrom definiert?", a: "BMI ≥ 30 kg/m² und arterielles CO₂ am Tag > 45 mmHg ohne andere Ursache der Hypoventilation." }
    ]
  });

  CH.push({
    id: "narkose",
    level: "Klinik",
    title: "Die Lunge in Narkose und unter Beatmung",
    leitfrage: "Was passiert mit der Lunge in den ersten Minuten einer Allgemeinanästhesie, und wie verhindert man, dass die Beatmung selbst die Lunge schädigt?",
    einfach: "Mit der Narkose erschlaffen die Atemmuskeln, das Zwerchfell rutscht nach oben, und unten in der Lunge fallen Bläschen zusammen (Atelektasen). Durch diese Bereiche fließt Blut ohne Sauerstoffaufnahme. Bei der Beatmung muss man außerdem aufpassen, die Lunge nicht zu überdehnen oder Bläschen bei jedem Atemzug auf- und zuklappen zu lassen – beides schädigt das Gewebe.",
    body: [
      { h: "Was bei der Einleitung passiert" },
      { kette: [
        "Muskeltonus fällt weg, das Zwerchfell verlagert sich nach oben",
        "FRC sinkt innerhalb weniger Minuten um ca. 0,4–0,5 l",
        "Bei ca. 90 % aller Patienten entstehen Atelektasen in den unten liegenden Lungenabschnitten (im CT ca. 5–10 % des Lungengewebes)",
        "==Shunt von ca. 5–10 % → arterieller Sauerstoffpartialdruck sinkt== (Hedenstierna & Edmark 2010)"
      ], titel: "Atelektasen in Narkose" },
      { ul: [
        "**Kompression** durch Zwerchfell, Bauchinhalt und Herz.",
        "**Resorption:** Hinter verschlossenen Atemwegen wird Sauerstoff schnell ins Blut aufgenommen – je höher die Sauerstoffkonzentration, desto schneller kollabiert die Alveole. Präoxygenierung mit 100 % Sauerstoff erzeugt mehr Atelektasen als mit 80 % (Edmark et al. 2003), ==bleibt aber wegen der Sicherheit bei der Einleitung Standard==.",
        "**Surfactantbeeinträchtigung.**"
      ] },
      "Zusätzlich gehen Belüftung (oben) und Durchblutung (unten) auseinander, und die hypoxische pulmonale Vasokonstriktion ist teilweise abgeschwächt. Atelektasen können bis in die Zeit nach der Operation bestehen.",
      { h: "Beatmungsbedingte Lungenschädigung" },
      { ul: [
        "**Volutrauma:** Überdehnung (zu großes Atemzugvolumen im Verhältnis zur belüftbaren Lunge).",
        "**Barotrauma:** zu hoher Druck über der Lunge, Luftlecks, Pneumothorax.",
        "**Atelektrauma:** wiederholtes Öffnen und Schließen instabiler Alveolen mit Scherkräften.",
        "**Biotrauma:** Entzündungsbotenstoffe gelangen in den Körper → Schädigung anderer Organe."
      ] },
      "Beim akuten Lungenversagen ist der belüftbare Teil der Lunge klein ('Baby Lung'). ==Deshalb wird das Atemzugvolumen auf das ideale Körpergewicht bezogen, nicht auf das tatsächliche.==",
      { formel: "Ideales Körpergewicht Männer = 50 + 0,91 × (Größe in cm − 152,4) kg  ·  Frauen = 45,5 + 0,91 × (Größe in cm − 152,4) kg", erkl: "Die Lungengröße hängt von Körpergröße und Geschlecht ab, nicht vom Fettanteil." },
      { h: "Steuergrößen der lungenschonenden Beatmung" },
      { ul: [
        "**Atemzugvolumen 6 ml/kg** ideales Körpergewicht und **Plateaudruck ≤ 30 cmH₂O** senkten beim akuten Lungenversagen die Sterblichkeit (ARDS Network 2000).",
        "**Driving Pressure** (Plateaudruck − PEEP = Atemzugvolumen / Compliance): ==der Beatmungswert, der beim akuten Lungenversagen am stärksten mit dem Überleben zusammenhing== (Amato et al. 2015); angestrebt werden < ca. 15 cmH₂O.",
        "**Mechanical Power:** die pro Minute auf die Lunge übertragene Energie (Atemzugvolumen, Driving Pressure, Fluss, Frequenz, PEEP) – fasst alle Schädigungsfaktoren zusammen (Gattinoni et al. 2016).",
        "**In der Narkose:** Atemzugvolumen ca. 6–8 ml/kg ideales Körpergewicht, PEEP (meist ca. 5 cmH₂O, individuell angepasst), Rekrutierung bei Bedarf. Ein routinemäßig hoher PEEP mit Rekrutierungsmanövern brachte in der PROVHILO-Studie (2014) keinen Vorteil, aber mehr Blutdruckabfälle."
      ] },
      { h: "Ein-Lungen-Beatmung" },
      "In Seitenlage wird die obere Lunge kollabiert. Schwerkraft und hypoxische pulmonale Vasokonstriktion lenken den Blutfluss in die beatmete untere Lunge – ein relevanter Shunt bleibt trotzdem. ==Vorgehen bei Sauerstoffmangel:== FiO₂ 1,0 → Tubuslage bronchoskopisch prüfen → beatmete Lunge rekrutieren und PEEP optimieren → CPAP oder Sauerstoffinsufflation auf die nicht beatmete Lunge → ggf. kurz beidseits beatmen. Lungenschonend: kleines Atemzugvolumen (ca. 4–6 ml/kg ideales Körpergewicht) mit PEEP auf der beatmeten Seite (Lohser & Slinger 2015).",
      { h: "Nach der Operation" },
      "Nach Oberbauch- und Thoraxeingriffen sind Vitalkapazität und FRC über Tage vermindert. Das Risiko für Lungenkomplikationen lässt sich z.B. mit dem **ARISCAT-Score** abschätzen (Alter, präoperative Sauerstoffsättigung, Atemwegsinfekt im letzten Monat, Anämie, Oberbauch- oder Thoraxschnitt, OP-Dauer, Notfalleingriff). Vorbeugung: Regionalanästhesie, keine Restrelaxierung, Frühmobilisation, Atemtherapie."
    ],
    merke: [
      "Einleitung: FRC ca. −0,4–0,5 l, Atelektasen bei ca. 90 %, Shunt ca. 5–10 %.",
      "Atelektasen durch Kompression, Resorption (hohe FiO₂) und Surfactantstörung.",
      "Beatmungsschaden = Volu-, Baro-, Atelekt-, Biotrauma.",
      "Akutes Lungenversagen: 6 ml/kg ideales Körpergewicht, Plateau ≤ 30, Driving Pressure < ca. 15 cmH₂O.",
      "Ein-Lungen-Beatmung bei Hypoxämie: FiO₂ 1,0 → Tubuslage → Rekrutierung/PEEP → CPAP auf die nicht beatmete Seite."
    ],
    warum: [
      { q: "Warum wird das Atemzugvolumen auf das ideale und nicht auf das tatsächliche Körpergewicht bezogen?", a: "Die Lungengröße hängt von Körpergröße und Geschlecht ab, nicht vom Fettgewebe. Ein adipöser Patient hat keine größere Lunge – ein auf das tatsächliche Gewicht bezogenes Atemzugvolumen würde sie überdehnen." },
      { q: "Warum ist der Driving Pressure aussagekräftiger als das Atemzugvolumen allein?", a: "Driving Pressure = Atemzugvolumen / Compliance. Er setzt das Volumen ins Verhältnis zur tatsächlich belüftbaren Lunge, die beim akuten Lungenversagen sehr klein sein kann. Das gleiche Volumen kann eine kleine 'Baby Lung' gefährlich dehnen, eine große belüftbare Lunge nicht – der Driving Pressure bildet diese Dehnung ab." }
    ],
    klinik: [
      "Intraoperativ: Atemzugvolumen 6–8 ml/kg ideales Körpergewicht, individueller PEEP, Driving Pressure im Blick, FiO₂ so niedrig wie für eine sichere Sättigung nötig.",
      "Sauerstoffmangel in Narkose systematisch prüfen: FiO₂, Tubuslage, Atelektase, Bronchospasmus, Pneumothorax, Herzzeitvolumen, Embolie.",
      "Vor der Extubation: vollständige Aufhebung der Relaxierung (TOF-Ratio ≥ 0,9), ggf. Rekrutierung; keine unnötig hohe FiO₂ über längere Zeit."
    ],
    selbsttest: [
      { q: "Spezialwissen Lunge: Wie verändern sich FRC, Atelektasen und Shunt bei Narkoseeinleitung?", a: "FRC sinkt um ca. 0,4–0,5 l; bei ca. 90 % der Patienten entstehen Atelektasen in den unten liegenden Abschnitten (ca. 5–10 % des Lungengewebes) mit einem Shunt von ca. 5–10 %." },
      { q: "Spezialwissen Lunge: Welche drei Mechanismen verursachen Atelektasen in Narkose?", a: "Kompression (Zwerchfell, Bauchinhalt, Herz), Resorption (v.a. bei hoher Sauerstoffkonzentration) und Surfactantbeeinträchtigung." },
      { q: "Spezialwissen Lunge: Welche vier Formen der beatmungsbedingten Lungenschädigung unterscheidet man?", a: "Volutrauma (Überdehnung), Barotrauma (zu hoher Druck), Atelektrauma (wiederholtes Öffnen/Schließen), Biotrauma (Entzündungsbotenstoffe)." },
      { q: "Spezialwissen Lunge: Wie berechnet man das ideale Körpergewicht für die Beatmung?", a: "Männer: 50 + 0,91 × (Größe in cm − 152,4) kg; Frauen: 45,5 + 0,91 × (Größe in cm − 152,4) kg." },
      { q: "Spezialwissen Lunge: Was ist der Driving Pressure und warum ist er wichtig?", a: "Plateaudruck − PEEP = Atemzugvolumen/Compliance; er bildet die Dehnung der belüftbaren Lunge ab und hing beim akuten Lungenversagen am stärksten mit dem Überleben zusammen (Amato 2015); Ziel < ca. 15 cmH₂O." },
      { q: "Spezialwissen Lunge: Wie geht man bei Sauerstoffmangel während der Ein-Lungen-Beatmung vor?", a: "FiO₂ 1,0, Tubuslage bronchoskopisch prüfen, beatmete Lunge rekrutieren und PEEP optimieren, CPAP/Sauerstoffinsufflation auf die nicht beatmete Lunge, ggf. kurz beidseits beatmen." },
      { q: "Spezialwissen Lunge: Was zeigte die PROVHILO-Studie?", a: "Ein routinemäßig hoher PEEP mit Rekrutierungsmanövern in der offenen Bauchchirurgie senkte die Lungenkomplikationen nicht, führte aber zu mehr Blutdruckabfällen." }
    ]
  });

  window.__addSpezialOrgan({
    id: "lunge",
    title: "Lunge",
    subtopic: "atmung",
    subtitle: "Von der Blut-Gas-Schranke bis zur lungenschonenden Beatmung",
    chapters: CH,
    sources: [
      "Weibel ER. Morphometry of the Human Lung. Springer 1963; Weibel ER. Lung morphometry: the link between structure and function. Cell Tissue Res 2017;367:413–426.",
      "Ochs M, Nyengaard JR, Jung A, et al. The number of alveoli in the human lung. Am J Respir Crit Care Med 2004;169:120–124.",
      "Mead J, Takishima T, Leith D. Stress distribution in lungs: a model of pulmonary elasticity. J Appl Physiol 1970;28:596–608.",
      "West JB, Dollery CT, Naimark A. Distribution of blood flow in isolated lung; relation to vascular and alveolar pressures. J Appl Physiol 1964;19:713–724.",
      "Froese AB, Bryan AC. Effects of anesthesia and paralysis on diaphragmatic mechanics in man. Anesthesiology 1974;41:242–255.",
      "Sylvester JT, Shimoda LA, Aaronson PI, Ward JPT. Hypoxic pulmonary vasoconstriction. Physiol Rev 2012;92:367–520.",
      "Guyenet PG, Bayliss DA. Neural control of breathing and CO₂ homeostasis. Neuron 2015;87:946–961.",
      "Dahan A, Teppema LJ. Influence of anaesthesia and analgesia on the control of breathing. Br J Anaesth 2003;91:40–55.",
      "Aubier M, Murciano D, Milic-Emili J, et al. Effects of the administration of O₂ on ventilation and blood gases in patients with chronic obstructive pulmonary disease during acute respiratory failure. Am Rev Respir Dis 1980;122:747–754.",
      "Benumof JL, Dagg R, Benumof R. Critical hemoglobin desaturation will occur before return to an unparalyzed state following 1 mg/kg intravenous succinylcholine. Anesthesiology 1997;87:979–982.",
      "Bellemare F, Grassino A. Effect of pressure and timing of contraction on human diaphragm fatigue. J Appl Physiol 1982;53:1190–1195.",
      "Urmey WF, Talts KH, Sharrock NE. One hundred percent incidence of hemidiaphragmatic paresis associated with interscalene brachial plexus anesthesia as diagnosed by ultrasonography. Anesth Analg 1991;72:498–503.",
      "Brunelli A, Kim AW, Berger KI, Addrizzo-Harris DJ. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: ACCP evidence-based clinical practice guidelines. Chest 2013;143(5 Suppl):e166S–e190S.",
      "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Diagnosis, Management and Prevention of COPD, aktuelle Fassung.",
      "Sorbini CA, Grassi V, Solinas E, Muiesan G. Arterial oxygen tension in relation to age in healthy subjects. Respiration 1968;25:3–13.",
      "Hedenstierna G, Edmark L. Mechanisms of atelectasis in the perioperative period. Best Pract Res Clin Anaesthesiol 2010;24:157–169.",
      "Edmark L, Kostova-Aherdan K, Enlund M, Hedenstierna G. Optimal oxygen concentration during induction of general anesthesia. Anesthesiology 2003;98:28–33.",
      "The Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med 2000;342:1301–1308.",
      "Amato MBP, Meade MO, Slutsky AS, et al. Driving pressure and survival in the acute respiratory distress syndrome. N Engl J Med 2015;372:747–755.",
      "Gattinoni L, Tonetti T, Cressoni M, et al. Ventilator-related causes of lung injury: the mechanical power. Intensive Care Med 2016;42:1567–1575.",
      "PROVE Network Investigators. High versus low positive end-expiratory pressure during general anaesthesia for open abdominal surgery (PROVHILO trial). Lancet 2014;384:495–503.",
      "Lohser J, Slinger P. Lung injury after one-lung ventilation: a review of the pathophysiologic mechanisms affecting the ventilated and the collapsed lung. Anesth Analg 2015;121:302–318.",
      "Canet J, Gallart L, Gomar C, et al. Prediction of postoperative pulmonary complications in a population-based surgical cohort (ARISCAT). Anesthesiology 2010;113:1338–1350.",
      "ARDS Definition Task Force. Acute respiratory distress syndrome: the Berlin Definition. JAMA 2012;307:2526–2533; Matthay MA, Arabi Y, Arroliga AC, et al. A new global definition of acute respiratory distress syndrome. Am J Respir Crit Care Med 2024;209:37–47.",
      "Humbert M, Kovacs G, Hoeper MM, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J 2022;43:3618–3731.",
      "Lehrbücher: Lumb AB, Thomas CR. Nunn and Lumb's Applied Respiratory Physiology, 9. Aufl. 2020; West JB, Luks AM. West's Respiratory Physiology: The Essentials, 11. Aufl. 2020."
    ]
  });
})();
