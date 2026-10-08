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

  window.__addSpezialOrgan({
    id: "lunge",
    title: "Lunge",
    subtopic: "atmung",
    subtitle: "Von der Blut-Gas-Schranke bis zur protektiven Beatmung",
    chapters: [
      {
        id: "struktur",
        level: "Gewebe",
        title: "Funktionelle Anatomie, Blut-Gas-Schranke und Surfactant",
        leitfrage: "Wie schafft es die Lunge, auf engstem Raum eine Austauschfläche so groß wie ein halbes Tennisfeld bereitzustellen – mit einer Barriere dünner als ein Mikrometer?",
        body: [
          { h: "Atemwegsbaum (Weibel)" },
          "Der Atemwegsbaum verzweigt sich dichotom über ca. 23 Generationen. Die **Generationen 0–16** (Trachea bis Bronchioli terminales) bilden die **konduktive Zone** ohne Gasaustausch: Das ist der **anatomische Totraum** (ca. 150 ml bzw. ca. 2 ml/kg). Die **Generationen 17–23** (Bronchioli respiratorii, Ductus und Sacculi alveolares) bilden die **respiratorische Zone**. Knorpel findet sich nur in den Bronchien; die knorpelfreien Bronchiolen werden durch den **radialen Zug** des umgebenden Lungengewebes offengehalten (Interdependenz; Mead et al. 1970) – bei niedrigen Lungenvolumina kollabieren sie deshalb zuerst.",
          { h: "Alveolen und Austauschfläche" },
          "Die menschliche Lunge enthält im Mittel ca. **480 Millionen Alveolen** (Spannbreite ca. 270–790 Mio.; Ochs et al. 2004) mit einem Durchmesser von ca. 200 µm. Die Gasaustauschfläche beträgt ca. **100–140 m²**. Das Kapillarblutvolumen liegt in Ruhe bei ca. 70 ml (bei Belastung bis ca. 200 ml). Ein Erythrozyt braucht für die Passage ca. **0,75 s**. Der O₂-Ausgleich ist bereits nach ca. **0,25 s** erreicht – eine große Diffusionsreserve, die bei Belastung, in großer Höhe oder bei verdickter Barriere aufgebraucht werden kann.",
          { h: "Blut-Gas-Schranke" },
          "Auf der **dünnen Seite** besteht die Barriere nur aus Typ-I-Pneumozyt, verschmolzener Basalmembran und Kapillarendothel – insgesamt ca. **0,2–0,5 µm**. Hier findet der Gasaustausch statt. Auf der **dicken Seite** liegt zusätzlich Interstitium (Kollagen, Fibroblasten). Dort sammelt sich Ödemflüssigkeit zuerst an, was die dünne Seite eine Zeit lang schützt.",
          { h: "Zellen der Alveole" },
          { ul: [
            "**Typ-I-Pneumozyten:** flache Zellen, die ca. 95 % der Alveolaroberfläche bedecken – zahlenmäßig aber in der Minderheit; sehr empfindlich gegenüber Schädigung.",
            "**Typ-II-Pneumozyten:** kubisch, bilden in Lamellarkörperchen den **Surfactant** und sind Vorläuferzellen für Typ-I-Zellen (Reparatur nach Schädigung).",
            "**Alveolarmakrophagen:** Abwehr und Clearance.",
            "**Kohn-Poren** zwischen Alveolen und **Lambert-Kanäle** ermöglichen kollaterale Ventilation."
          ] },
          { h: "Surfactant" },
          "Surfactant besteht zu ca. 90 % aus Lipiden (v.a. **Dipalmitoylphosphatidylcholin**, DPPC) und zu ca. 10 % aus Proteinen. **SP-B und SP-C** sind hydrophob und für die Ausbreitung des Films an der Grenzfläche unverzichtbar (angeborener SP-B-Mangel ist ohne Transplantation tödlich). **SP-A und SP-D** sind Kollektine der angeborenen Immunabwehr. Surfactant senkt die Oberflächenspannung – umso stärker, je kleiner die Alveole wird. Das stabilisiert die Alveolen (Laplace: P = 2T/r), erhöht die Compliance, mindert die Atemarbeit und wirkt einem Flüssigkeitseinstrom ins Alveolarlumen entgegen. Ausreichende Mengen werden erst ab ca. 34–35 SSW gebildet; antenatale Kortikosteroide beschleunigen die Reifung.",
          { h: "Nicht-respiratorische Funktionen" },
          { ul: [
            "**Filter** für Mikroemboli, Luft und Zellaggregate.",
            "**Metabolismus:** ACE am Kapillarendothel wandelt Angiotensin I in Angiotensin II um und baut Bradykinin ab; Serotonin und ein Teil des Noradrenalins werden aufgenommen und abgebaut.",
            "**Pharmakokinetik:** Die Lunge nimmt lipophile basische Pharmaka (z.B. Fentanyl, Lidocain) beim ersten Durchgang in relevantem Ausmaß auf und gibt sie verzögert wieder ab.",
            "**Blutreservoir** von ca. 500 ml und Abwehr (mukoziliäre Clearance; trockene Gase, hohe FiO₂ und volatile Anästhetika beeinträchtigen die Zilienfunktion)."
          ] }
        ],
        merke: [
          "Generation 0–16 konduktiv (anatomischer Totraum ca. 2 ml/kg), 17–23 respiratorisch.",
          "Ca. 480 Mio. Alveolen, ca. 100–140 m² Austauschfläche, Barriere ca. 0,2–0,5 µm.",
          "Kontaktzeit 0,75 s, O₂-Ausgleich nach ca. 0,25 s → Diffusionsreserve.",
          "Typ I = Austauschfläche (95 %), Typ II = Surfactant und Regeneration.",
          "Surfactant: DPPC + SP-B/SP-C (Oberflächenaktivität) + SP-A/SP-D (Immunabwehr)."
        ],
        warum: [
          { q: "Warum kollabieren kleine Atemwege bei niedrigen Lungenvolumina, obwohl Alveolen mit Surfactant ausgekleidet sind?", a: "Knorpelfreie Bronchiolen werden nur durch den radialen Zug des umgebenden elastischen Lungengewebes offengehalten. Bei niedrigem Lungenvolumen (Rückenlage, Narkose, Adipositas, Alter) sinkt dieser Zug und der Pleuradruck wird in abhängigen Regionen weniger negativ – die Atemwege schließen sich (Closing Volume), bevor die Alveolen kollabieren. Surfactant stabilisiert die Alveolen, ersetzt aber nicht die radiale Traktion der Atemwege." },
          { q: "Warum führt eine Diffusionsstörung oft erst unter Belastung zur Hypoxämie?", a: "In Ruhe ist der O₂-Ausgleich nach ca. einem Drittel der Kapillarpassagezeit erreicht. Eine verdickte Barriere verzögert den Ausgleich zunächst nur innerhalb dieser Reserve. Bei Belastung verkürzt sich die Passagezeit (höheres HZV) auf ca. 0,25 s – dann reicht die Zeit nicht mehr aus, und der end-kapilläre PO₂ bleibt unter dem alveolären." }
        ],
        klinik: [
          "Frühgeborene: Surfactantmangel → Atemnotsyndrom; Therapie mit exogenem Surfactant und CPAP.",
          "ARDS: Schädigung von Typ-I-Zellen und Endothel, Surfactantdysfunktion → Permeabilitätsödem und Atelektasen.",
          "Nach Lungenresektion: Verkleinerung des Gefäßbetts → höhere Drücke, Filterfunktion und Diffusionsreserve ↓."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Welche Atemwegsgenerationen bilden die konduktive und welche die respiratorische Zone?", a: "Generation 0–16 (Trachea bis Bronchioli terminales) = konduktive Zone/anatomischer Totraum; Generation 17–23 (Bronchioli respiratorii bis Sacculi alveolares) = respiratorische Zone." },
          { q: "Spezialwissen Lunge: Wie groß sind Alveolenzahl, Austauschfläche und Dicke der Blut-Gas-Schranke?", a: "Ca. 480 Mio. Alveolen (Ochs 2004), ca. 100–140 m² Fläche, dünne Seite der Barriere ca. 0,2–0,5 µm." },
          { q: "Spezialwissen Lunge: Wie lange dauert die Kapillarpassage eines Erythrozyten und wann ist der O₂-Ausgleich erreicht?", a: "Ca. 0,75 s in Ruhe; der O₂-Ausgleich ist nach ca. 0,25 s erreicht – eine Diffusionsreserve, die bei Belastung, Höhe oder verdickter Barriere schwindet." },
          { q: "Spezialwissen Lunge: Welche Funktionen haben Typ-I- und Typ-II-Pneumozyten?", a: "Typ I: flach, bedecken ca. 95 % der Alveolaroberfläche, Gasaustausch. Typ II: kubisch, produzieren Surfactant (Lamellarkörperchen) und sind Vorläuferzellen für Typ-I-Zellen." },
          { q: "Spezialwissen Lunge: Woraus besteht Surfactant und welche Aufgaben haben seine Proteine?", a: "Ca. 90 % Lipide (v.a. DPPC), ca. 10 % Proteine: SP-B und SP-C (hydrophob, Ausbreitung und Stabilität des Films), SP-A und SP-D (Kollektine der Immunabwehr)." },
          { q: "Spezialwissen Lunge: Welche nicht-respiratorischen Funktionen hat die Lunge?", a: "Filter (Mikroemboli, Luft), Metabolismus (ACE: Angiotensin I → II, Bradykininabbau; Aufnahme von Serotonin/Noradrenalin), First-Pass-Aufnahme lipophiler Basen (Fentanyl, Lidocain), Blutreservoir, Abwehr (mukoziliäre Clearance)." }
        ]
      },
      {
        id: "mechanik",
        level: "Organ",
        title: "Atemmechanik – Compliance, Widerstand und Zeitkonstanten",
        leitfrage: "Welche Kräfte muss ein Atemzug überwinden, und wie lässt sich jede davon am Beatmungsgerät ablesen?",
        body: [
          { h: "Druckverhältnisse und FRC" },
          "Die **funktionelle Residualkapazität (FRC)** ist das Ruhegleichgewicht: Die Lunge zieht nach innen (elastischer Rückstoß), die Thoraxwand nach außen. Der Pleuradruck liegt bei FRC bei ca. −5 cmH₂O. Im Stehen ist er apikal negativer als basal (Gradient ca. 0,25 cmH₂O pro cm Höhe). Apikale Alveolen sind deshalb stärker vorgedehnt; basale liegen auf dem steileren Teil der Druck-Volumen-Kurve und werden bei Spontanatmung **besser belüftet**. Die FRC beträgt beim Erwachsenen im Stehen ca. 2,5–3 l (ca. 30 ml/kg), sinkt in Rückenlage um ca. 0,5–1 l und in Allgemeinanästhesie um weitere ca. 0,4–0,5 l.",
          { h: "Compliance" },
          "Compliance = ΔV/ΔP. Lunge und Thoraxwand haben beim Gesunden jeweils ca. 200 ml/cmH₂O, das Gesamtsystem (in Serie: 1/C = 1/C_Lunge + 1/C_Thorax) ca. 100 ml/cmH₂O. **Statische** Compliance wird ohne Fluss (Plateaudruck) bestimmt, **dynamische** unter Fluss und enthält damit Widerstandsanteile. Etwa zwei Drittel des elastischen Rückstoßes der Lunge beruhen auf **Oberflächenspannung**: Eine mit Kochsalz gefüllte Lunge lässt sich mit viel weniger Druck dehnen (von Neergaard 1929). Die Hysterese der Druck-Volumen-Kurve geht v.a. auf Surfactant und Rekrutierung zurück.",
          { h: "Atemwegswiderstand" },
          "Laminarer Fluss (Hagen-Poiseuille): **R ∝ η × L / r⁴** – eine Halbierung des Radius erhöht den Widerstand 16-fach. Turbulenter Fluss (hohe Reynolds-Zahl: große Atemwege, hoher Fluss, Stenosen) hängt von der **Dichte** des Gases ab, der Druckbedarf steigt mit dem Quadrat des Flusses – deshalb hilft **Heliox** bei Obstruktionen der oberen Atemwege. Den größten Anteil am Widerstand haben die großen und mittleren Bronchien. Die kleinen Atemwege (< 2 mm) tragen wegen ihrer enormen Gesamtquerschnittsfläche nur wenig bei: Erkrankungen dort bleiben lange 'stumm'.",
          { h: "Dynamische Kompression" },
          "Bei forcierter Exspiration übersteigt der Pleuradruck an einem 'equal pressure point' den Atemwegsdruck: Die Atemwege werden komprimiert, und der Fluss wird **anstrengungsunabhängig** begrenzt. Bei COPD (Verlust der radialen Traktion) liegt dieser Punkt weiter peripher, die Atemwege kollabieren früh → Air Trapping.",
          { h: "Bewegungsgleichung und Beatmungsdrücke" },
          "**Paw = Fluss × R + V/C + PEEP (gesamt).** Am volumenkontrolliert beatmeten Patienten mit endinspiratorischer Pause gilt: **Spitzendruck − Plateaudruck** = resistiver Anteil (Widerstand, z.B. Bronchospasmus, Tubusknick, Sekret). **Plateaudruck − PEEP** = elastischer Anteil (**Driving Pressure** = VT/C; z.B. Atelektase, Pneumothorax, Intubation in einen Hauptbronchus, Thoraxwandsteifigkeit, Pneumoperitoneum).",
          { h: "Zeitkonstante" },
          "**τ = R × C.** Beim Gesunden ca. 0,2 s (z.B. 2 cmH₂O·s/l × 0,1 l/cmH₂O). Nach 1 τ sind 63 %, nach 3 τ 95 % des Volumens ausgeatmet. Bei COPD ist τ lang: Ist die Exspirationszeit zu kurz, bleibt Volumen zurück → **intrinsischer PEEP** und dynamische Überblähung mit Hypotonie (intrathorakaler Druck ↑) und Barotraumarisiko. Abhilfe: niedrigere Frequenz, längere Exspiration, kleineres Tidalvolumen, im Notfall kurz diskonnektieren.",
          { h: "Atemarbeit und Closing Capacity" },
          "Die Atemarbeit (elastisch + resistiv) verbraucht in Ruhe nur wenige Prozent des O₂-Verbrauchs, bei respiratorischer Insuffizienz ein Vielfaches. Die **Closing Capacity** (Volumen, bei dem abhängige Atemwege schließen) steigt mit dem Alter. Sie übersteigt die FRC im Liegen etwa ab 45 Jahren, im Stehen etwa ab 65 Jahren. Liegt die FRC unter der Closing Capacity, schließen sich Atemwege während der normalen Atmung → V/Q-Mismatch und Hypoxämie."
        ],
        merke: [
          "FRC = Gleichgewicht Lunge (nach innen) vs. Thorax (nach außen); Pleuradruck ca. −5 cmH₂O.",
          "C_Lunge ≈ C_Thorax ≈ 200, C_gesamt ≈ 100 ml/cmH₂O; ca. 2/3 des Rückstoßes = Oberflächenspannung.",
          "Laminar R ∝ 1/r⁴; turbulent dichteabhängig (Heliox).",
          "Spitzen- minus Plateaudruck = Widerstand; Plateau minus PEEP = Driving Pressure (Elastance).",
          "τ = R × C; 3 τ = 95 % → kurze Exspiration bei COPD erzeugt intrinsischen PEEP."
        ],
        warum: [
          { q: "Warum steigt bei einem Bronchospasmus der Spitzendruck, der Plateaudruck aber kaum?", a: "Der Spitzendruck enthält den resistiven Anteil (Fluss × Widerstand), der bei Bronchospasmus stark zunimmt. In der endinspiratorischen Pause ist der Fluss null, sodass nur noch der elastische Anteil wirkt – solange keine relevante Überblähung entsteht, bleibt der Plateaudruck daher fast unverändert." },
          { q: "Warum werden bei Spontanatmung im Stehen die basalen Lungenabschnitte besser belüftet als die apikalen?", a: "Der Pleuradruck ist apikal negativer, apikale Alveolen sind bereits stärker gedehnt und liegen auf dem flachen oberen Teil der Druck-Volumen-Kurve. Basale Alveolen sind weniger gedehnt, liegen auf dem steilen Teil und nehmen bei gleicher Druckänderung mehr Volumen auf." }
        ],
        klinik: [
          "Plötzlicher Anstieg von Spitzen- UND Plateaudruck: an Pneumothorax, einseitige Intubation, Atelektase, Pneumoperitoneum, Thoraxwandsteifigkeit (Opioidrigidität) denken.",
          "Nur der Spitzendruck steigt: Tubusknick, Sekret, Bronchospasmus.",
          "COPD/Asthma unter Beatmung: Exspirationszeit verlängern, auto-PEEP über endexspiratorische Okklusion messen."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Welche Compliance-Werte haben Lunge, Thoraxwand und Gesamtsystem beim Gesunden?", a: "Lunge ca. 200 ml/cmH₂O, Thoraxwand ca. 200 ml/cmH₂O, Gesamtsystem (in Serie) ca. 100 ml/cmH₂O." },
          { q: "Spezialwissen Lunge: Welcher Anteil des elastischen Rückstoßes der Lunge beruht auf Oberflächenspannung und wie wurde das gezeigt?", a: "Etwa zwei Drittel; mit Kochsalz gefüllte Lungen (keine Luft-Flüssigkeits-Grenzfläche) lassen sich mit deutlich weniger Druck dehnen (von Neergaard)." },
          { q: "Spezialwissen Lunge: Wo liegt der Hauptanteil des Atemwegswiderstands und warum?", a: "In den großen und mittleren Bronchien. Die kleinen Atemwege haben einzeln einen hohen, wegen ihrer riesigen Gesamtquerschnittsfläche zusammen aber nur einen kleinen Widerstand." },
          { q: "Spezialwissen Lunge: Wie unterscheidet man am Beatmungsgerät resistive von elastischen Problemen?", a: "Spitzendruck − Plateaudruck = resistiver Anteil (Bronchospasmus, Tubusknick, Sekret); Plateaudruck − PEEP = elastischer Anteil/Driving Pressure (Atelektase, Pneumothorax, einseitige Intubation, Pneumoperitoneum)." },
          { q: "Spezialwissen Lunge: Was ist die Zeitkonstante des respiratorischen Systems und welche klinische Bedeutung hat sie?", a: "τ = R × C (gesund ca. 0,2 s); nach 3 τ sind 95 % ausgeatmet. Bei langer τ (COPD) und kurzer Exspiration entsteht intrinsischer PEEP mit dynamischer Überblähung, Hypotonie und Barotraumarisiko." },
          { q: "Spezialwissen Lunge: Wann übersteigt die Closing Capacity die FRC?", a: "Im Liegen etwa ab 45 Jahren, im Stehen etwa ab 65 Jahren; früher bei Adipositas, Rauchern und in Narkose (FRC ↓)." },
          { q: "Spezialwissen Lunge: Warum hilft Heliox bei oberer Atemwegsobstruktion?", a: "In Stenosen und großen Atemwegen ist der Fluss turbulent; turbulenter Widerstand hängt von der Gasdichte ab. Heliox hat eine geringe Dichte, senkt den Druckbedarf und die Atemarbeit." }
        ]
      },
      {
        id: "ventilation",
        level: "Organ",
        title: "Ventilation, Totraum und CO₂-Elimination",
        leitfrage: "Warum bestimmt allein die alveoläre Ventilation den PaCO₂ – und was verrät die Differenz zwischen PaCO₂ und endtidalem CO₂?",
        body: [
          { h: "Minuten- und alveoläre Ventilation" },
          "**Atemminutenvolumen** = VT × AF (in Ruhe ca. 6–8 l/min). Am Gasaustausch nimmt nur die **alveoläre Ventilation** teil: V̇A = (VT − VD) × AF (ca. 4–5 l/min). Kleine Tidalvolumina mit hoher Frequenz erhöhen den Totraumanteil – bei gleichem Minutenvolumen sinkt die alveoläre Ventilation.",
          { h: "Totraum" },
          { ul: [
            "**Anatomischer Totraum:** konduktive Atemwege, ca. 150 ml (ca. 2 ml/kg). Ein Endotrachealtubus umgeht den oberen Atemweg, HME-Filter, Y-Stück und Winkelstück fügen apparativen Totraum hinzu (relevant bei Kindern und kleinen Tidalvolumina).",
            "**Alveolärer Totraum:** belüftete, nicht perfundierte Alveolen (Lungenembolie, niedriges HZV, hoher PEEP mit West-Zone 1, Emphysem).",
            "**Physiologischer Totraum** = anatomischer + alveolärer; VD/VT normal ca. 0,25–0,35."
          ] },
          "Berechnung nach **Bohr/Enghoff**: **VD/VT = (PaCO₂ − PĒCO₂) / PaCO₂** (PĒCO₂ = gemischt-exspiratorischer CO₂-Partialdruck).",
          { h: "Die alveoläre Ventilationsgleichung" },
          "**PaCO₂ = 0,863 × V̇CO₂ / V̇A** (V̇CO₂ in ml/min, V̇A in l/min). Bei konstanter CO₂-Produktion verdoppelt eine Halbierung der alveolären Ventilation den PaCO₂. Eine erhöhte CO₂-Produktion (Fieber, maligne Hyperthermie, Sepsis, Hyperalimentation mit Kohlenhydraten, Bicarbonat-Pufferung) muss durch mehr Ventilation ausgeglichen werden.",
          { h: "PaCO₂–etCO₂-Differenz" },
          "Beim Lungengesunden liegt das endtidale CO₂ ca. 2–5 mmHg unter dem PaCO₂. Die Differenz steigt mit dem **alveolären Totraum**: Diese Alveolen liefern CO₂-freies Gas und verdünnen die Exspirationsluft. Ein **plötzlicher etCO₂-Abfall** spricht für Lungenembolie (Thrombus, Luft, CO₂, Fett), Abfall des HZV bis zum Kreislaufstillstand, Diskonnektion oder Leckage. Unter Reanimation spiegelt das etCO₂ die erzielte Lungenperfusion wider.",
          { h: "Verteilung der Ventilation" },
          "Bei **Spontanatmung** werden abhängige (basale bzw. dorsale) Regionen besser belüftet, weil das Zwerchfell dort aktiv am stärksten kontrahiert und die Alveolen auf dem steilen Teil der Druck-Volumen-Kurve liegen. Bei **Überdruckbeatmung mit Relaxierung** verlagert sich die Ventilation in **nicht-abhängige** Regionen: Das passive Zwerchfell wird abhängig vom Bauchinhalt nach kranial gedrückt (Froese & Bryan 1974). Die Perfusion folgt weiterhin der Schwerkraft → V/Q-Mismatch.",
          { h: "CO₂ in der Apnoe" },
          "Der Körper hat große CO₂-Speicher (vor allem als Bicarbonat). In der Apnoe steigt der PaCO₂ in der ersten Minute deutlich (ca. 8–16 mmHg), danach langsamer um ca. 3–6 mmHg pro Minute. Nach einer Änderung der Ventilation stellt sich der neue PaCO₂ erst über Minuten ein – bei Hypoventilation langsamer als bei Hyperventilation."
        ],
        merke: [
          "V̇A = (VT − VD) × AF; nur V̇A bestimmt den PaCO₂.",
          "PaCO₂ = 0,863 × V̇CO₂ / V̇A → halbe V̇A = doppelter PaCO₂.",
          "VD/VT = (PaCO₂ − PĒCO₂)/PaCO₂, normal ca. 0,3.",
          "Große PaCO₂–etCO₂-Differenz = alveolärer Totraum (Embolie, niedriges HZV, hoher PEEP).",
          "Beatmung + Relaxierung: Ventilation nicht-abhängig, Perfusion abhängig → V/Q-Mismatch."
        ],
        warum: [
          { q: "Warum kann ein Patient mit hoher Atemfrequenz und kleinem Tidalvolumen trotz normalem Atemminutenvolumen hyperkapnisch werden?", a: "Der Totraum wird bei jedem Atemzug zuerst gefüllt. Bei kleinem VT macht er einen großen Anteil aus: Bei 150 ml Totraum, VT 250 ml und AF 32/min (Minutenvolumen 8 l) beträgt die alveoläre Ventilation nur (250 − 150) × 32 = 3,2 l/min statt ca. 5 l/min bei normalem Atemmuster – der PaCO₂ steigt." },
          { q: "Warum fällt das etCO₂ bei einer Lungenembolie, obwohl der PaCO₂ eher steigt?", a: "Die embolisierten Alveolen werden belüftet, aber nicht perfundiert – sie geben CO₂-freies Gas ab und verdünnen das gemischte exspiratorische Gas. Gleichzeitig steigt der PaCO₂ leicht, weil die effektive alveoläre Ventilation sinkt. Die Differenz zwischen beiden nimmt deutlich zu." }
        ],
        klinik: [
          "Kapnographie: plötzlicher Abfall → Diskonnektion, Embolie, Kreislaufstillstand; langsamer Anstieg → Hypoventilation, Fieber, Resorption bei Laparoskopie; steiler Anstieg mit Tachykardie → an maligne Hyperthermie denken.",
          "Kinder und protektive Beatmung: apparativen Totraum minimieren.",
          "Laparoskopie: CO₂-Aufnahme aus dem Pneumoperitoneum erfordert mehr Ventilation."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Wie berechnet man die alveoläre Ventilation?", a: "V̇A = (VT − VD) × Atemfrequenz, in Ruhe ca. 4–5 l/min." },
          { q: "Spezialwissen Lunge: Wie lautet die alveoläre Ventilationsgleichung für CO₂?", a: "PaCO₂ = 0,863 × V̇CO₂ / V̇A – bei konstanter CO₂-Produktion verdoppelt eine Halbierung der alveolären Ventilation den PaCO₂." },
          { q: "Spezialwissen Lunge: Wie wird der physiologische Totraumanteil nach Bohr/Enghoff berechnet und was ist normal?", a: "VD/VT = (PaCO₂ − PĒCO₂)/PaCO₂, normal ca. 0,25–0,35." },
          { q: "Spezialwissen Lunge: Welche Ursachen hat eine vergrößerte PaCO₂–etCO₂-Differenz?", a: "Zunahme des alveolären Totraums: Lungenembolie, niedriges HZV/Hypotonie, hoher PEEP (West-Zone 1), Emphysem/COPD." },
          { q: "Spezialwissen Lunge: Wie verteilt sich die Ventilation bei Spontanatmung im Vergleich zur Überdruckbeatmung mit Relaxierung?", a: "Spontan: abhängige Regionen besser belüftet (aktive Zwerchfellkontraktion, steiler Teil der Compliancekurve). Beatmet und relaxiert: nicht-abhängige Regionen bevorzugt, während die Perfusion abhängig bleibt → V/Q-Mismatch." },
          { q: "Spezialwissen Lunge: Wie schnell steigt der PaCO₂ in der Apnoe?", a: "In der ersten Minute ca. 8–16 mmHg, danach ca. 3–6 mmHg pro Minute (große CO₂-Speicher puffern)." }
        ]
      },
      {
        id: "kreislauf",
        level: "Organ",
        title: "Lungenkreislauf und hypoxische pulmonale Vasokonstriktion",
        leitfrage: "Wie kann die Lunge das gesamte Herzzeitvolumen bei einem Bruchteil des Systemdrucks aufnehmen – und warum verengen sich ihre Gefäße bei Hypoxie, während sich alle anderen erweitern?",
        body: [
          { h: "Ein Niederdrucksystem" },
          "Der Lungenkreislauf nimmt das gesamte HZV auf, bei einem mittleren Pulmonalarteriendruck von ca. **14 mmHg** (pulmonale Hypertonie: > 20 mmHg) und einem PVR von **unter 2 Wood-Einheiten**, also etwa einem Zehntel des systemischen Widerstands. Steigt das HZV, sinkt der PVR passiv durch **Rekrutierung** bisher nicht perfundierter Kapillaren und **Distension** bereits perfundierter. Der Druck steigt deshalb bei Belastung nur wenig.",
          { h: "West-Zonen" },
          { table: { head: ["Zone", "Druckverhältnis", "Perfusion"], rows: [
            ["1", "PA > Pa > Pv", "Keine (alveolärer Totraum) – physiologisch kaum, aber bei Hypovolämie, hohem PEEP, Überblähung"],
            ["2", "Pa > PA > Pv", "Fluss abhängig von Pa − PA ('Wasserfall')"],
            ["3", "Pa > Pv > PA", "Kontinuierlicher Fluss, abhängig von Pa − Pv"],
            ["(4)", "Erhöhter interstitieller Druck", "Basal reduzierter Fluss durch Kompression extraalveolärer Gefäße"]
          ] } },
          "Pa = pulmonalarterieller, PA = alveolärer, Pv = pulmonalvenöser Druck (West et al. 1964). Die Zonen sind keine festen anatomischen Bereiche, sondern verschieben sich mit Volumenstatus, PEEP und Lage.",
          { h: "PVR und Lungenvolumen" },
          "Der PVR ist bei **FRC minimal**. Bei hohen Volumina werden die alveolären Kapillaren gedehnt und komprimiert. Bei niedrigen Volumina verengen sich die extraalveolären Gefäße durch fehlenden radialen Zug, und Atelektasen lösen eine HPV aus.",
          { h: "Hypoxische pulmonale Vasokonstriktion (HPV)" },
          "Alveoläre Hypoxie verengt die kleinen präkapillären Pulmonalarterien und leitet Blut in besser belüftete Areale um – ein **intrinsischer Mechanismus zur V/Q-Optimierung**, unabhängig von Nerven und Endothel (Sylvester et al. 2012).",
          { ul: [
            "**Reiz:** v.a. der **alveoläre PO₂**, in geringerem Maß der gemischtvenöse PO₂.",
            "**Mechanismus:** O₂-Sensoren in den glatten Muskelzellen (mitochondriale Redox-/ROS-Signale) hemmen spannungsabhängige K⁺-Kanäle (Kv) → Depolarisation → Ca²⁺-Einstrom über L-Typ-Kanäle, zusätzlich Ca²⁺-Sensibilisierung (Rho-Kinase).",
            "**Zeitverlauf:** biphasisch – schnelle Phase innerhalb von Sekunden bis Minuten, zweite, anhaltende Phase über Stunden.",
            "**Hemmend:** volatile Anästhetika (dosisabhängig, in klinischen Konzentrationen ≤ 1 MAC nur mäßig), Vasodilatatoren (Nitroprussid, Nitroglycerin, Ca²⁺-Antagonisten), Hypokapnie/Alkalose, Sepsis, sehr hoher Pulmonalisdruck. Propofol hemmt die HPV praktisch nicht.",
            "**Verstärkend:** Azidose; pharmakologisch Almitrin."
          ] },
          "Bei **globaler** alveolärer Hypoxie (Höhe, Hypoventilation) wird die HPV schädlich: Sie erhöht den PVR insgesamt und kann zu pulmonaler Hypertonie bzw. Höhenlungenödem führen.",
          { h: "Flüssigkeitshaushalt der Lunge" },
          "Filtration über die Kapillarwand folgt dem Starling-Prinzip; das Filtrat wird über Lymphgefäße abtransportiert, deren Kapazität sich um ein Vielfaches steigern kann. Ein **hydrostatisches Ödem** entsteht bei steigendem Kapillardruck (Linksherzversagen, Volumenüberladung, Unterdrucklungenödem nach Laryngospasmus). Ein **Permeabilitätsödem** (ARDS) entsteht bei geschädigter Schranke – schon bei normalen Drücken, mit eiweißreichem Ödem.",
          { h: "Bronchialkreislauf" },
          "Die Bronchialarterien (ca. 1–2 % des HZV, aus der Aorta) versorgen Atemwege, Pleura und Gefäßwände. Ein Teil ihres venösen Bluts fließt in die Lungenvenen und trägt zum physiologischen Shunt bei."
        ],
        merke: [
          "mPAP ca. 14 mmHg (PH > 20 mmHg), PVR < 2 WE ≈ 1/10 SVR.",
          "HZV ↑ → PVR ↓ durch Rekrutierung und Distension.",
          "PVR minimal bei FRC (U-förmig zum Lungenvolumen).",
          "HPV: alveolärer PO₂ → Kv-Hemmung → Depolarisation → Ca²⁺-Einstrom; biphasisch.",
          "HPV-Hemmer: Volatile (mäßig), Vasodilatatoren, Alkalose; Propofol kaum."
        ],
        warum: [
          { q: "Warum kann eine Nitroprussid- oder Nitroglycerin-Infusion bei Pneumonie die Oxygenierung verschlechtern?", a: "Beide Vasodilatatoren heben die HPV in schlecht belüfteten Arealen auf. Dadurch fließt wieder mehr Blut durch nicht oder kaum belüftete Alveolen – der Shunt und die venöse Beimischung nehmen zu, der PaO₂ sinkt." },
          { q: "Warum ist die HPV bei lokaler Hypoxie nützlich, bei globaler Hypoxie dagegen schädlich?", a: "Lokal verteilt sie den Blutfluss in gut belüftete Bereiche um und verbessert so das V/Q-Verhältnis. Global gibt es keine besser belüfteten Bereiche: Alle Gefäße verengen sich, der PVR steigt, der rechte Ventrikel wird belastet, und eine ungleichmäßige Konstriktion kann ein Höhenlungenödem begünstigen." }
        ],
        klinik: [
          "Ein-Lungen-Ventilation: HPV und Schwerkraft reduzieren den Fluss in die kollabierte Lunge und begrenzen den Shunt; hohe Konzentrationen volatiler Anästhetika und Vasodilatatoren schwächen das ab.",
          "Unterdrucklungenödem: kräftige Inspiration gegen geschlossene Glottis (Laryngospasmus) → stark negativer intrathorakaler Druck → transkapillärer Gradient ↑.",
          "Lungenembolie: plötzlicher PVR-Anstieg → akute RV-Belastung, Totraumventilation (etCO₂ ↓)."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Welche Normalwerte gelten für mPAP und PVR, und ab wann liegt eine pulmonale Hypertonie vor?", a: "mPAP ca. 14 mmHg, PVR < 2 Wood-Einheiten; pulmonale Hypertonie bei mPAP > 20 mmHg (ESC/ERS 2022)." },
          { q: "Spezialwissen Lunge: Wie bleibt der Pulmonalisdruck bei steigendem HZV fast konstant?", a: "Durch Rekrutierung bisher nicht perfundierter Kapillaren und Distension perfundierter Gefäße sinkt der PVR passiv." },
          { q: "Spezialwissen Lunge: Wie sind die West-Zonen 1–3 definiert?", a: "Zone 1: PA > Pa > Pv (keine Perfusion, alveolärer Totraum); Zone 2: Pa > PA > Pv (Fluss abhängig von Pa − PA); Zone 3: Pa > Pv > PA (kontinuierlicher Fluss)." },
          { q: "Spezialwissen Lunge: Welcher zelluläre Mechanismus liegt der hypoxischen pulmonalen Vasokonstriktion zugrunde?", a: "Mitochondriale O₂-Sensoren in den glatten Muskelzellen kleiner Pulmonalarterien hemmen über Redox-/ROS-Signale Kv-Kanäle → Depolarisation → Ca²⁺-Einstrom über L-Typ-Kanäle plus Ca²⁺-Sensibilisierung (Rho-Kinase)." },
          { q: "Spezialwissen Lunge: Welche Faktoren hemmen bzw. verstärken die HPV?", a: "Hemmend: volatile Anästhetika (dosisabhängig, bei ≤ 1 MAC mäßig), Vasodilatatoren (Nitroprussid, Nitroglycerin, Ca²⁺-Antagonisten), Hypokapnie/Alkalose, Sepsis. Verstärkend: Azidose, Almitrin. Propofol hemmt praktisch nicht." },
          { q: "Spezialwissen Lunge: Wie unterscheiden sich hydrostatisches Lungenödem und Permeabilitätsödem?", a: "Hydrostatisch: erhöhter Kapillardruck (Linksherz, Volumenüberladung, Unterdruck), eiweißarm. Permeabilitätsödem (ARDS): geschädigte Schranke, schon bei normalem Druck, eiweißreich." }
        ]
      },
      {
        id: "vq",
        level: "Organ",
        title: "Ventilations-Perfusions-Verhältnis, Shunt und Diffusion",
        leitfrage: "Warum führt ein V/Q-Mismatch fast immer zur Hypoxämie, aber nur selten zur Hyperkapnie?",
        body: [
          { h: "Das V/Q-Spektrum" },
          "Global gilt V̇A/Q̇ ≈ 4 l/min / 5 l/min ≈ **0,8**. In der aufrechten Lunge nehmen Ventilation und Perfusion von apikal nach basal zu, die Perfusion aber steiler. V/Q ist deshalb **apikal hoch** (ca. 3) und **basal niedrig** (ca. 0,6).",
          { table: { head: ["V/Q", "Einheit", "Folge"], rows: [
            ["0", "Shunt (perfundiert, nicht belüftet)", "Blut verlässt die Lunge mit gemischtvenösem Gehalt"],
            ["< 0,8", "Niedriges V/Q", "Niedriger end-kapillärer PO₂, spricht auf O₂ an"],
            ["≈ 0,8–1", "Ideal", "Ausgeglichener Gasaustausch"],
            ["> 1", "Hohes V/Q", "Hoher PO₂, niedriger PCO₂, wenig zusätzlicher O₂-Gehalt"],
            ["∞", "Alveolärer Totraum", "Ventilation ohne Gasaustausch"]
          ] } },
          { h: "Warum O₂ und CO₂ unterschiedlich reagieren" },
          "Die **O₂-Bindungskurve ist im oberen Bereich flach**: Gut belüftete Einheiten können ihr Blut kaum über ca. 98–100 % Sättigung hinaus anreichern. Sie gleichen das Defizit schlecht belüfteter Einheiten nicht aus → Hypoxämie. Die **CO₂-Dissoziationskurve ist annähernd linear**: Mehr Ventilation in gesunden Einheiten senkt deren CO₂-Gehalt proportional und kompensiert das Defizit. Deshalb ist der PaCO₂ bei V/Q-Mismatch meist normal oder durch Hyperventilation sogar niedrig. Eine Hyperkapnie tritt erst auf, wenn das Atemminutenvolumen nicht mehr gesteigert werden kann.",
          { h: "Shunt und venöse Beimischung" },
          "**Shuntgleichung:** Q̇s/Q̇t = (Cc′O₂ − CaO₂) / (Cc′O₂ − Cv̄O₂), mit Cc′O₂ = end-kapillärer, CaO₂ = arterieller, Cv̄O₂ = gemischtvenöser O₂-Gehalt. Normal beträgt der physiologische Shunt ca. 2–5 % (Bronchialvenen, Thebesius-Venen). Ein **echter Shunt** spricht kaum auf O₂ an: Ab ca. 30 % Shuntanteil ändert selbst eine FiO₂ von 1,0 den PaO₂ nur wenig (Iso-Shunt-Diagramm). Niedrige V/Q-Areale bessern sich dagegen gut mit O₂.",
          "Bei gegebenem Shunt senkt ein **niedriger gemischtvenöser O₂-Gehalt** (niedriges HZV, hoher O₂-Verbrauch, Anämie) den PaO₂ zusätzlich – das Shuntblut bringt dann noch weniger O₂ mit.",
          { h: "Diffusion" },
          "Diffusionsrate ∝ Fläche × Diffusionskonstante × Partialdruckdifferenz / Dicke (Fick). CO₂ diffundiert wegen seiner höheren Löslichkeit etwa 20-mal schneller als O₂; eine Diffusionsstörung für CO₂ ist klinisch praktisch bedeutungslos.",
          { ul: [
            "**Perfusionslimitiert:** Der Partialdruck gleicht sich früh in der Kapillare aus, die Aufnahme hängt nur vom Blutfluss ab (z.B. N₂O, unter Ruhebedingungen auch O₂).",
            "**Diffusionslimitiert:** Kein Ausgleich während der Passage (z.B. CO wegen der hohen Hb-Affinität) – Grundlage der DLCO-Messung.",
            "O₂ kann diffusionslimitiert werden bei Belastung (kurze Kontaktzeit), in großer Höhe (kleiner Gradient) oder bei verdickter Barriere (Lungenfibrose)."
          ] },
          { h: "Oxygenierungsindizes" },
          "**AaDO₂** (normal altersabhängig ca. 5–15 mmHg unter Raumluft; steigt mit der FiO₂), **Horovitz-Quotient** PaO₂/FiO₂ (normal > 400 mmHg; ARDS ≤ 300 mmHg unter PEEP ≥ 5 cmH₂O) und Oxygenierungsindex (FiO₂ × mittlerer Atemwegsdruck × 100 / PaO₂)."
        ],
        merke: [
          "Globales V/Q ≈ 0,8; apikal hoch (ca. 3), basal niedrig (ca. 0,6).",
          "V/Q-Mismatch → Hypoxämie (flache O₂-Kurve), meist kein Hyperkapnie (lineare CO₂-Kurve).",
          "Shunt > 30 % spricht kaum auf FiO₂-Erhöhung an; niedriges V/Q dagegen gut.",
          "Niedriger Cv̄O₂ verschlechtert bei Shunt zusätzlich den PaO₂.",
          "CO₂ diffundiert ca. 20× schneller als O₂; N₂O perfusions-, CO diffusionslimitiert."
        ],
        warum: [
          { q: "Warum kann ein Abfall des Herzzeitvolumens bei einem beatmeten Patienten mit Pneumonie den PaO₂ senken, obwohl sich an der Lunge nichts geändert hat?", a: "Bei sinkendem HZV steigt die O₂-Extraktion im Gewebe, der gemischtvenöse O₂-Gehalt fällt. Das Blut, das durch die geshunteten (nicht belüfteten) Areale fließt, bringt nun weniger O₂ in die arterielle Mischung – der PaO₂ sinkt, obwohl der Shuntanteil gleich bleibt." },
          { q: "Warum lässt sich eine Hypoxämie durch Hyperventilation kaum, eine Hyperkapnie dagegen gut ausgleichen?", a: "Gesunde Einheiten sind bei Raumluft schon nahezu voll gesättigt (flacher oberer Teil der O₂-Bindungskurve); mehr Ventilation erhöht ihren O₂-Gehalt kaum. Der CO₂-Gehalt fällt dagegen fast linear mit steigender Ventilation, sodass gesunde Einheiten das CO₂-Defizit schlecht belüfteter Einheiten kompensieren können." }
        ],
        klinik: [
          "Hypoxämie unter Narkose: FiO₂ erhöhen hilft bei V/Q-Mismatch, bei Shunt (Atelektase, Pneumonie, einseitige Intubation) braucht es Rekrutierung, PEEP oder Ursachenbehebung.",
          "Bei schwerer Hypoxämie auch HZV, Hb und O₂-Verbrauch (Fieber, Zittern) optimieren – sie beeinflussen den Cv̄O₂.",
          "ARDS nach Berlin-Definition (2012): PaO₂/FiO₂ ≤ 300 mmHg unter PEEP ≥ 5 cmH₂O, Beginn ≤ 1 Woche, bilaterale Verschattungen, nicht vollständig kardial erklärbar. Die neue globale Definition (Matthay et al. 2024) schließt zusätzlich nicht intubierte Patienten unter High-Flow-O₂ (≥ 30 l/min) ein und erlaubt SpO₂/FiO₂ ≤ 315 (bei SpO₂ ≤ 97 %)."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Wie verteilt sich das V/Q-Verhältnis in der aufrechten Lunge?", a: "Ventilation und Perfusion nehmen nach basal zu, die Perfusion steiler: V/Q apikal hoch (ca. 3), basal niedrig (ca. 0,6), global ca. 0,8." },
          { q: "Spezialwissen Lunge: Warum führt V/Q-Mismatch typischerweise zu Hypoxämie, aber nicht zu Hyperkapnie?", a: "Die O₂-Bindungskurve ist oben flach – gut belüftete Einheiten können kein zusätzliches O₂ aufnehmen. Die CO₂-Dissoziationskurve ist annähernd linear – Hyperventilation gesunder Einheiten kompensiert das CO₂-Defizit." },
          { q: "Spezialwissen Lunge: Wie lautet die Shuntgleichung?", a: "Q̇s/Q̇t = (Cc′O₂ − CaO₂)/(Cc′O₂ − Cv̄O₂) – end-kapillärer, arterieller und gemischtvenöser O₂-Gehalt." },
          { q: "Spezialwissen Lunge: Ab welchem Shuntanteil spricht der PaO₂ kaum noch auf eine FiO₂-Erhöhung an?", a: "Ab etwa 30 % Shunt (Iso-Shunt-Diagramm)." },
          { q: "Spezialwissen Lunge: Was unterscheidet perfusions- und diffusionslimitierten Gasaustausch? Nenne Beispiele.", a: "Perfusionslimitiert: Ausgleich früh in der Kapillare, Aufnahme nur vom Fluss abhängig (N₂O, O₂ in Ruhe). Diffusionslimitiert: kein Ausgleich während der Passage (CO; O₂ bei Belastung, Höhe, Fibrose)." },
          { q: "Spezialwissen Lunge: Welche Kriterien hat die Berlin-Definition des ARDS?", a: "Beginn innerhalb 1 Woche, bilaterale Verschattungen, nicht vollständig durch Herzinsuffizienz/Überwässerung erklärbar, PaO₂/FiO₂ ≤ 300 mmHg unter PEEP/CPAP ≥ 5 cmH₂O (mild 200–300, moderat 100–200, schwer ≤ 100)." }
        ]
      },
      {
        id: "transport",
        level: "System",
        title: "O₂- und CO₂-Transport – von der Alveole bis zum Mitochondrium",
        leitfrage: "Wie gelangt Sauerstoff entlang eines Druckgefälles von 160 mmHg auf wenige mmHg bis in die Mitochondrien – und wie lange reicht der Vorrat bei Apnoe?",
        figure: { svg: FIG_CASCADE, caption: "Sauerstoffkaskade auf Meereshöhe (gerundete Werte) mit den Ursachen der einzelnen Partialdruckstufen." },
        body: [
          { h: "Hämoglobin und O₂-Bindungskurve" },
          "Hämoglobin ist ein Tetramer, das vier O₂-Moleküle bindet. Die **kooperative Bindung** (Übergang vom T- in den R-Zustand) erzeugt die **sigmoide** Bindungskurve. Merkpunkte: **P50 ca. 26,7 mmHg** (3,5 kPa); SaO₂ 90 % bei PaO₂ ca. 60 mmHg; SvO₂ 75 % bei PvO₂ ca. 40 mmHg. Ein Gramm Hb bindet maximal ca. 1,34 ml O₂ (Hüfner-Zahl).",
          { table: { head: ["Rechtsverschiebung (P50 ↑, O₂-Abgabe ↑)", "Linksverschiebung (P50 ↓, O₂-Bindung ↑)"], rows: [
            ["H⁺ ↑ (Azidose), CO₂ ↑ (Bohr-Effekt)", "Alkalose, Hypokapnie"],
            ["Temperatur ↑", "Hypothermie"],
            ["2,3-BPG ↑ (chronische Hypoxie, Anämie, Höhe)", "2,3-BPG ↓ (gelagerte Erythrozytenkonzentrate)"],
            ["", "Fetales Hb (P50 ca. 19 mmHg), CO-Hb, Met-Hb"]
          ] } },
          { h: "Dyshämoglobine" },
          { ul: [
            "**Kohlenmonoxid** bindet mit ca. 200- bis 250-facher Affinität an Hb, blockiert Bindungsstellen und verschiebt die Kurve der übrigen nach links. Das Standard-Pulsoximeter misst falsch hoch (CO-Hb wird als O₂-Hb gewertet). Halbwertszeit von CO-Hb: ca. 4–6 h unter Raumluft, ca. 1–1,5 h unter 100 % O₂, kürzer unter hyperbarem O₂.",
            "**Methämoglobin** (Fe³⁺) bindet kein O₂ und verschiebt die Kurve nach links. Die SpO₂ nähert sich unabhängig vom wahren Wert ca. 85 %. Auslöser: Prilocain, Benzocain, Nitrate/NO, Dapson. Therapie: Methylenblau (nicht bei G6PD-Mangel)."
          ] },
          { h: "Sauerstoffkaskade" },
          "Trockene Luft (ca. 160 mmHg) → Befeuchtung → inspiratorisch ca. 150 mmHg → Verdünnung durch CO₂ → **alveolär ca. 100 mmHg** → venöse Beimischung → **arteriell ca. 90–100 mmHg** → O₂-Extraktion → **gemischtvenös ca. 40 mmHg** → Diffusion durch Interstitium und Zelle → **Mitochondrien wenige mmHg**. Myoglobin (P50 ca. 2–3 mmHg) speichert O₂ im Muskel und erleichtert die intrazelluläre Diffusion. Die Mitochondrien arbeiten bis zu sehr niedrigen PO₂-Werten im Bereich weniger mmHg.",
          { h: "O₂-Speicher und Apnoe-Toleranz" },
          "Unter Raumluft hat der Erwachsene nur ca. **1,5 l O₂** gespeichert, überwiegend an Hb gebunden; in der FRC befinden sich nur ca. 0,3–0,4 l. Nach **Präoxygenierung** (endexspiratorische O₂-Fraktion ca. 0,9) enthält die FRC (ca. 2,5 l) etwa **2 l O₂**. Bei einem Verbrauch von ca. 250 ml/min reicht das theoretisch für ca. 8 min. Gesunde präoxygenierte Erwachsene erreichen eine SaO₂ von 90 % nach ca. 8 min (Benumof et al. 1997). Bei Adipositas (FRC ↓, VO₂ ↑), Schwangerschaft, Kindern, Sepsis und Anämie verkürzt sich die Zeit erheblich, und unterhalb von ca. 90 % fällt die Sättigung wegen der steilen Kurve sehr schnell.",
          { h: "CO₂-Transport" },
          "Ca. **70 %** als Bicarbonat (Bildung über die Carboanhydrase im Erythrozyten, Chlorid-Shift), ca. **20–25 %** als Carbamino-Verbindung an Hb, ca. **5–10 %** physikalisch gelöst. **Haldane-Effekt:** Desoxygeniertes Hb bindet mehr CO₂ und H⁺. In der Lunge fördert die Oxygenierung die CO₂-Abgabe, im Gewebe die O₂-Abgabe die CO₂-Aufnahme. Die CO₂-Dissoziationskurve ist im physiologischen Bereich nahezu linear und viel steiler als die O₂-Kurve."
        ],
        merke: [
          "P50 ≈ 26,7 mmHg; 60 mmHg ≈ 90 %, 40 mmHg ≈ 75 % Sättigung.",
          "Rechtsverschiebung: H⁺, CO₂, Temperatur, 2,3-BPG; links: HbF, CO-Hb, Met-Hb, Alkalose, Kälte.",
          "Kaskade: 160 → 150 → 100 → 95 → 40 → wenige mmHg.",
          "Nach Präoxygenierung ca. 2 l O₂ in der FRC → SaO₂ 90 % nach ca. 8 min beim Gesunden.",
          "CO₂: 70 % HCO₃⁻, 20–25 % Carbamino, 5–10 % gelöst; Haldane-Effekt."
        ],
        warum: [
          { q: "Warum fällt die SpO₂ in der Apnoe zunächst langsam und unterhalb von ca. 90 % plötzlich sehr schnell?", a: "Solange der PaO₂ hoch ist, liegt man im flachen oberen Teil der Bindungskurve – selbst starke PaO₂-Abfälle ändern die Sättigung kaum. Unterhalb von ca. 60 mmHg (≈ 90 %) beginnt der steile Teil: Kleine PaO₂-Abfälle führen zu großen Sättigungsverlusten, und der Abfall beschleunigt sich." },
          { q: "Warum ist die Rechtsverschiebung der Bindungskurve im arbeitenden Muskel vorteilhaft?", a: "Azidose, CO₂, Wärme und 2,3-BPG senken die O₂-Affinität dort, wo O₂ gebraucht wird. Bei gleichem Kapillar-PO₂ wird mehr O₂ abgegeben, während die Beladung in der Lunge im flachen Kurventeil kaum leidet." }
        ],
        klinik: [
          "Präoxygenierung bis FeO₂ ≥ 0,9 (dicht sitzende Maske) und ggf. apnoische Oxygenierung verlängern die sichere Apnoezeit.",
          "Rauchgasintoxikation: normale SpO₂ schließt eine CO-Vergiftung nicht aus → CO-Oxymetrie (BGA).",
          "Massivtransfusion gelagerter EK: 2,3-BPG ↓ → Linksverschiebung, vorübergehend schlechtere O₂-Abgabe."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Welche Merkpunkte der O₂-Bindungskurve sollte man kennen?", a: "P50 ca. 26,7 mmHg (3,5 kPa); PaO₂ 60 mmHg ≈ 90 % Sättigung; PvO₂ 40 mmHg ≈ 75 %." },
          { q: "Spezialwissen Lunge: Welche Faktoren verschieben die O₂-Bindungskurve nach links?", a: "Alkalose, Hypokapnie, Hypothermie, erniedrigtes 2,3-BPG (gelagerte EK), fetales Hb, CO-Hb und Met-Hb." },
          { q: "Spezialwissen Lunge: Warum misst das Pulsoximeter bei Kohlenmonoxidvergiftung falsch hohe Werte?", a: "CO-Hb absorbiert bei den verwendeten Wellenlängen ähnlich wie O₂-Hb und wird als oxygeniert gewertet; nur die CO-Oxymetrie misst den wahren O₂-Hb-Anteil." },
          { q: "Spezialwissen Lunge: Welche Halbwertszeit hat CO-Hb unter Raumluft und unter 100 % O₂?", a: "Ca. 4–6 h unter Raumluft, ca. 1–1,5 h unter 100 % O₂, kürzer unter hyperbarem O₂." },
          { q: "Spezialwissen Lunge: Wie viel O₂ enthält die FRC nach Präoxygenierung, und wie lange dauert es beim Gesunden bis zur SaO₂ von 90 %?", a: "Ca. 2 l (FRC ca. 2,5 l × FeO₂ ca. 0,9); bei VO₂ ca. 250 ml/min fällt die SaO₂ beim gesunden Erwachsenen nach ca. 8 min auf 90 % (Benumof 1997)." },
          { q: "Spezialwissen Lunge: Beschreibe die Stufen der O₂-Kaskade auf Meereshöhe.", a: "Trockene Luft ca. 160 mmHg → befeuchtet ca. 150 → alveolär ca. 100 → arteriell ca. 90–100 → gemischtvenös ca. 40 → Mitochondrien wenige mmHg." },
          { q: "Spezialwissen Lunge: In welchen Formen wird CO₂ im Blut transportiert?", a: "Ca. 70 % als Bicarbonat (Carboanhydrase, Chlorid-Shift), ca. 20–25 % als Carbamino-Hb, ca. 5–10 % gelöst." }
        ]
      },
      {
        id: "regulation",
        level: "System",
        title: "Atemregulation – Rhythmus, Chemorezeptoren und Pharmaka",
        leitfrage: "Wer erzeugt den Atemrhythmus, wer misst CO₂ und O₂ – und an welchen Stellen greifen Opioide, Hypnotika und volatile Anästhetika ein?",
        body: [
          { h: "Rhythmusgenerator" },
          "Der inspiratorische Rhythmus entsteht im **Prä-Bötzinger-Komplex** der ventrolateralen Medulla. Ein parafazialer Oszillator steuert die aktive Exspiration. Die dorsale respiratorische Gruppe (Nucleus tractus solitarii) integriert Afferenzen, die pontinen Zentren (Kölliker-Fuse, parabrachial) formen den Phasenwechsel.",
          { h: "Zentrale Chemorezeption" },
          "Zentrale Chemorezeptoren – v.a. Neurone des **Nucleus retrotrapezoideus** und benachbarte Astrozyten – reagieren auf **H⁺** in ihrer Umgebung (Guyenet & Bayliss 2015). CO₂ passiert die Blut-Hirn-Schranke frei, HCO₃⁻ und H⁺ kaum. Ein PaCO₂-Anstieg senkt deshalb rasch den pH im Liquor bzw. Interstitium. Der zentrale Anteil macht den größeren Teil der CO₂-Antwort aus. Die **CO₂-Antwortkurve** ist annähernd linear (ca. 2 l/min pro mmHg, große individuelle Streuung).",
          { h: "Periphere Chemorezeptoren" },
          "Die **Glomera carotica** (Afferenz über den N. glossopharyngeus) reagieren innerhalb von Sekunden. Glomuszellen (Typ I) erkennen Hypoxie über mitochondriale Signale und O₂-sensitive K⁺-Kanäle → Depolarisation → Ca²⁺-Einstrom → Transmitterfreisetzung. Die **hypoxische Atemantwort** ist hyperbolisch und nimmt unterhalb eines PaO₂ von ca. 60 mmHg steil zu. Sie wirkt synergistisch mit Hyperkapnie und Azidose. Die Glomera aortica spielen beim Menschen v.a. für den Kreislauf eine Rolle. Nach beidseitiger Karotis-Endarteriektomie kann die hypoxische Atemantwort fehlen.",
          { h: "Mechanorezeptoren" },
          { ul: [
            "**Dehnungsrezeptoren** (Hering-Breuer-Reflex: Lungendehnung beendet die Inspiration) – beim Erwachsenen bei normalem VT schwach, beim Neugeborenen bedeutsam.",
            "**Irritansrezeptoren:** Husten, Bronchokonstriktion, Laryngospasmus (Afferenz u.a. über den N. laryngeus superior).",
            "**C-Fasern/J-Rezeptoren:** Ödem, Embolie → schnelle, flache Atmung, Dyspnoe."
          ] },
          { h: "Apnoeschwelle" },
          "Fällt der PaCO₂ unter die **Apnoeschwelle**, setzt die Spontanatmung aus. Unter Narkose liegt sie nur wenige mmHg unter dem PaCO₂ bei Spontanatmung. Nach Hyperventilation atmet der Patient deshalb erst wieder, wenn der PaCO₂ über diese Schwelle gestiegen ist.",
          { h: "Pharmaka" },
          { table: { head: ["Substanz", "Wirkung auf die Atemregulation"], rows: [
            ["Opioide (μ-Rezeptoren im Prä-Bötzinger-Komplex und pontin)", "Atemfrequenz ↓ (oft stärker als VT), unregelmäßige Atmung bis Apnoe; CO₂-Antwortkurve nach rechts verschoben und abgeflacht; hypoxische Antwort ↓"],
            ["Propofol, Benzodiazepine, Barbiturate", "Flachere CO₂-Antwort, Atemwegstonus ↓ (Obstruktion); ausgeprägte Synergie mit Opioiden"],
            ["Volatile Anästhetika", "Dosisabhängig: VT ↓, Frequenz ↑, CO₂-Antwort ↓; die hypoxische Atemantwort wird schon in subanästhetischer Konzentration (ca. 0,1 MAC) gedämpft (Dahan & Teppema 2003)"],
            ["Ketamin", "Atemantrieb und Atemwegsreflexe relativ erhalten (dosisabhängig dennoch Apnoe möglich)"],
            ["Doxapram", "Stimuliert periphere Chemorezeptoren"]
          ] } },
          { h: "COPD und Sauerstoff" },
          "Bei Patienten mit chronischer Hyperkapnie kann eine hohe FiO₂ den PaCO₂ steigen lassen. Ursache sind überwiegend die **Aufhebung der HPV** (mehr V/Q-Mismatch, mehr Totraum) und der **Haldane-Effekt**, weniger der Verlust des 'hypoxischen Atemantriebs' (Aubier et al. 1980). Deshalb wird O₂ bei gefährdeten Patienten auf eine SpO₂ von **88–92 %** titriert."
        ],
        merke: [
          "Rhythmus: Prä-Bötzinger-Komplex (Inspiration), parafazial (aktive Exspiration).",
          "Zentrale Chemorezeption = H⁺ (CO₂ passiert die BHS) – Hauptantrieb.",
          "Glomus caroticum (N. IX): Hypoxie < ca. 60 mmHg, schnell, synergistisch mit CO₂.",
          "Opioide: Frequenz ↓, CO₂-Kurve rechts/flach; Volatile dämpfen die hypoxische Antwort schon bei ca. 0,1 MAC.",
          "COPD: O₂-induzierte Hyperkapnie v.a. durch V/Q (HPV) und Haldane → SpO₂ 88–92 %."
        ],
        warum: [
          { q: "Warum ist ein Patient im Aufwachraum mit Opioid- und Restnarkose bei Hypoxämie besonders gefährdet?", a: "Opioide und volatile Anästhetika dämpfen sowohl die CO₂- als auch die hypoxische Atemantwort, Hypnotika senken zusätzlich den Tonus der oberen Atemwege. Der Schutzreflex 'Hypoxie → mehr Atmung' fällt aus, gleichzeitig steigt die Obstruktionsneigung – Hypoxämie wird nicht kompensiert und nicht bemerkt." },
          { q: "Warum steigt der PaCO₂ bei manchen COPD-Patienten unter hoher FiO₂?", a: "Hohe FiO₂ hebt die hypoxische Vasokonstriktion in schlecht belüfteten Arealen auf: Mehr Blut fließt durch schlecht belüftete Regionen, gut belüftete werden relativ zum Totraum – der CO₂-Austausch verschlechtert sich. Zusätzlich bindet oxygeniertes Hb weniger CO₂ (Haldane), das in Lösung geht. Der Verlust des hypoxischen Antriebs spielt eine geringere Rolle." }
        ],
        klinik: [
          "Opioid-Atemdepression: zuerst Frequenzabfall – Atemfrequenz und Kapnographie überwachen, SpO₂ unter O₂-Gabe ist ein später Indikator.",
          "Nach Hyperventilation (z.B. manuelle Beatmung bei Ausleitung) setzt die Spontanatmung verzögert ein – normokapnisch ausleiten.",
          "Säuglinge, besonders Frühgeborene: unreife Atemregulation, postoperative Apnoen bis ca. 60 Wochen postkonzeptionell."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Wo wird der inspiratorische Atemrhythmus erzeugt?", a: "Im Prä-Bötzinger-Komplex der ventrolateralen Medulla; ein parafazialer Oszillator steuert die aktive Exspiration." },
          { q: "Spezialwissen Lunge: Worauf reagieren die zentralen Chemorezeptoren und warum spiegelt das den PaCO₂ wider?", a: "Auf H⁺ (v.a. Nucleus retrotrapezoideus). CO₂ passiert die Blut-Hirn-Schranke frei, HCO₃⁻ und H⁺ kaum – ein PaCO₂-Anstieg senkt rasch den pH im Hirninterstitium/Liquor." },
          { q: "Spezialwissen Lunge: Wie funktionieren die peripheren Chemorezeptoren und ab welchem PaO₂ wird die hypoxische Atemantwort steil?", a: "Glomuszellen des Glomus caroticum erkennen Hypoxie über mitochondriale Signale und O₂-sensitive K⁺-Kanäle → Depolarisation, Ca²⁺-Einstrom, Transmitterfreisetzung; Afferenz über N. IX. Die Antwort steigt unter ca. 60 mmHg steil an." },
          { q: "Spezialwissen Lunge: Wie verändern Opioide die Atmung?", a: "Über μ-Rezeptoren im Prä-Bötzinger-Komplex und pontin: Frequenz ↓ (oft stärker als VT), unregelmäßige Atmung bis Apnoe, CO₂-Antwortkurve nach rechts verschoben und abgeflacht, hypoxische Antwort ↓." },
          { q: "Spezialwissen Lunge: Ab welcher Konzentration dämpfen volatile Anästhetika die hypoxische Atemantwort?", a: "Schon in subanästhetischer Konzentration von ca. 0,1 MAC (Dahan & Teppema 2003)." },
          { q: "Spezialwissen Lunge: Was ist die Apnoeschwelle?", a: "Der PaCO₂, unterhalb dessen die Spontanatmung aussetzt; unter Narkose nur wenige mmHg unter dem PaCO₂ bei Spontanatmung." },
          { q: "Spezialwissen Lunge: Warum und auf welchen Zielwert wird O₂ bei COPD-Patienten mit Hyperkapnierisiko titriert?", a: "Hohe FiO₂ verschlechtert über Aufhebung der HPV (V/Q-Mismatch) und den Haldane-Effekt die CO₂-Elimination; Ziel-SpO₂ 88–92 %." }
        ]
      },
      {
        id: "narkose",
        level: "Klinik",
        title: "Die Lunge in Narkose und unter Beatmung",
        leitfrage: "Was passiert mit der Lunge in den ersten Minuten einer Allgemeinanästhesie, und wie verhindert man, dass die Beatmung selbst die Lunge schädigt?",
        body: [
          { h: "Veränderungen bei Narkoseeinleitung" },
          "Innerhalb weniger Minuten sinkt die FRC um ca. 0,4–0,5 l (Verlust des Muskeltonus, Kranialverlagerung des Zwerchfells). Bei ca. **90 % aller Patienten** entstehen **Atelektasen** in den abhängigen Lungenabschnitten, typischerweise in der CT ca. 5–10 % des Lungengewebes, mit einem **Shunt von ca. 5–10 %** (Hedenstierna & Edmark 2010). Mechanismen:",
          { ul: [
            "**Kompression** durch Zwerchfell, Bauchinhalt und Herz.",
            "**Resorption:** Hinter verschlossenen Atemwegen wird O₂ schnell resorbiert – je höher die FiO₂, desto schneller. Präoxygenierung mit 100 % O₂ erzeugt mehr Atelektasen als mit 80 % (Edmark et al. 2003), ist aber für die Sicherheit der Einleitung trotzdem Standard.",
            "**Surfactantbeeinträchtigung.**"
          ] },
          "Zusätzlich verschieben sich Ventilation (nicht-abhängig) und Perfusion (abhängig), und die HPV ist teilweise abgeschwächt. Die Atelektasen können bis in die postoperative Phase bestehen bleiben.",
          { h: "Beatmungsassoziierte Lungenschädigung (VILI)" },
          { ul: [
            "**Volutrauma:** Überdehnung (zu hoher Strain = Tidalvolumen bezogen auf das endexspiratorische Lungenvolumen).",
            "**Barotrauma:** zu hoher transpulmonaler Druck (Stress), Luftleck, Pneumothorax.",
            "**Atelektrauma:** zyklisches Öffnen und Schließen instabiler Alveolen mit Scherkräften.",
            "**Biotrauma:** Freisetzung von Entzündungsmediatoren mit systemischen Folgen (Multiorganversagen)."
          ] },
          "Bei ARDS ist die belüftbare Lunge klein ('Baby Lung'). Das Tidalvolumen muss daher auf das **ideale Körpergewicht** bezogen werden: Männer 50 + 0,91 × (Größe in cm − 152,4) kg, Frauen 45,5 + 0,91 × (Größe in cm − 152,4) kg.",
          { h: "Steuergrößen der protektiven Beatmung" },
          { ul: [
            "**Tidalvolumen 6 ml/kg** ideales Körpergewicht und **Plateaudruck ≤ 30 cmH₂O** senkten bei ARDS die Mortalität (ARDS Network 2000).",
            "**Driving Pressure** (Plateau − PEEP = VT/C): stärkster mit dem Überleben assoziierter Beatmungsparameter bei ARDS (Amato et al. 2015); angestrebt werden < ca. 15 cmH₂O.",
            "**Mechanical Power:** Energie pro Zeit, die auf die Lunge übertragen wird (Tidalvolumen, Driving Pressure, Fluss, Frequenz, PEEP) – integriert alle VILI-Faktoren (Gattinoni et al. 2016).",
            "**Intraoperativ:** VT ca. 6–8 ml/kg ideales Körpergewicht, PEEP (meist ca. 5 cmH₂O, individualisiert), Rekrutierung bei Bedarf. Ein routinemäßig hoher PEEP mit Rekrutierungsmanövern bot in PROVHILO keinen Vorteil, verursachte aber mehr Hypotonien (2014)."
          ] },
          { h: "Ein-Lungen-Ventilation" },
          "In Seitenlage wird die obere Lunge kollabiert. Schwerkraft und HPV lenken den Fluss in die belüftete untere Lunge. Trotzdem entsteht ein relevanter Shunt. Vorgehen bei Hypoxämie: FiO₂ 1,0, Tubuslage bronchoskopisch prüfen, belüftete Lunge rekrutieren und PEEP optimieren, CPAP bzw. O₂-Insufflation auf die nicht belüftete Lunge, ggf. intermittierend beidseits beatmen. Protektiv: kleines Tidalvolumen (ca. 4–6 ml/kg ideales Körpergewicht) auf der belüfteten Seite mit PEEP (Lohser & Slinger 2015).",
          { h: "Postoperative Lungenfunktion" },
          "Nach Oberbauch- und Thoraxeingriffen sinken Vitalkapazität und FRC über mehrere Tage (Zwerchfelldysfunktion, Schmerz, Hustenschwäche). Risikoabschätzung z.B. mit dem **ARISCAT-Score** (Alter, präoperative SpO₂, Atemwegsinfekt im letzten Monat, Anämie, Oberbauch-/Thoraxschnitt, OP-Dauer, Notfalleingriff). Prävention: Regionalanästhesie, keine Restrelaxierung, Frühmobilisation, Atemtherapie.",
          { h: "Adipositas" },
          "Die FRC ist bei Adipositas stark vermindert und kann unter die Closing Capacity fallen. Der O₂-Verbrauch ist erhöht → sehr kurze Apnoetoleranz. Hilfreich: Oberkörperhochlagerung bzw. Rampenposition, Präoxygenierung mit PEEP/CPAP, Beatmung mit PEEP, VT nach idealem (nicht tatsächlichem) Körpergewicht."
        ],
        merke: [
          "Einleitung: FRC ↓ ca. 0,4–0,5 l, Atelektasen bei ca. 90 %, Shunt ca. 5–10 %.",
          "Atelektase-Mechanismen: Kompression, Resorption (hohe FiO₂), Surfactantstörung.",
          "VILI = Volu-, Baro-, Atelekt-, Biotrauma.",
          "ARDS: VT 6 ml/kg ideales Körpergewicht, Pplat ≤ 30, Driving Pressure < ca. 15 cmH₂O.",
          "OLV-Hypoxämie: FiO₂ 1,0 → Tubuslage → Rekrutierung/PEEP → CPAP auf die nicht belüftete Seite."
        ],
        warum: [
          { q: "Warum wird das Tidalvolumen auf das ideale und nicht auf das tatsächliche Körpergewicht bezogen?", a: "Die Lungengröße hängt von Körpergröße und Geschlecht ab, nicht vom Körperfett. Ein adipöser Patient hat keine größere Lunge – ein auf das tatsächliche Gewicht bezogenes Tidalvolumen würde sie überdehnen." },
          { q: "Warum ist der Driving Pressure aussagekräftiger als das Tidalvolumen allein?", a: "Driving Pressure = VT/Compliance. Er setzt das Tidalvolumen ins Verhältnis zur tatsächlich belüftbaren Lunge (die bei ARDS sehr klein ist). Ein gleiches Tidalvolumen kann bei kleiner 'Baby Lung' eine gefährliche Dehnung erzeugen, bei großer belüftbarer Lunge nicht. Der Driving Pressure bildet diese Dehnung (Strain) besser ab." }
        ],
        klinik: [
          "Protektive Beatmung intraoperativ: VT 6–8 ml/kg ideales Körpergewicht, individualisierter PEEP, Driving Pressure im Blick behalten, FiO₂ so niedrig wie für eine sichere SpO₂ nötig.",
          "Bei Hypoxämie unter Narkose systematisch prüfen: FiO₂, Tubuslage, Atelektase, Bronchospasmus, Pneumothorax, HZV, Embolie.",
          "Bei Ausleitung Atelektasen-Prophylaxe: kein unnötig hohes FiO₂-Plateau, ggf. Rekrutierung vor Extubation; vollständige Reversierung der Relaxierung (TOF-Ratio ≥ 0,9)."
        ],
        selbsttest: [
          { q: "Spezialwissen Lunge: Wie verändern sich FRC, Atelektasen und Shunt bei Narkoseeinleitung?", a: "FRC sinkt um ca. 0,4–0,5 l; bei ca. 90 % der Patienten entstehen Atelektasen in abhängigen Regionen (ca. 5–10 % des Lungengewebes) mit einem Shunt von ca. 5–10 %." },
          { q: "Spezialwissen Lunge: Welche drei Mechanismen verursachen Atelektasen in Narkose?", a: "Kompression (Zwerchfell, Bauchinhalt, Herz), Resorption (v.a. bei hoher FiO₂) und Surfactantbeeinträchtigung." },
          { q: "Spezialwissen Lunge: Welche vier Komponenten der beatmungsassoziierten Lungenschädigung unterscheidet man?", a: "Volutrauma (Überdehnung/Strain), Barotrauma (hoher transpulmonaler Druck/Stress), Atelektrauma (zyklisches Öffnen/Schließen) und Biotrauma (Entzündungsmediatoren)." },
          { q: "Spezialwissen Lunge: Wie berechnet man das ideale Körpergewicht für die Beatmung?", a: "Männer: 50 + 0,91 × (Größe in cm − 152,4) kg; Frauen: 45,5 + 0,91 × (Größe in cm − 152,4) kg." },
          { q: "Spezialwissen Lunge: Was ist der Driving Pressure und warum ist er wichtig?", a: "Plateaudruck − PEEP = VT/Compliance; er bildet die Dehnung der belüftbaren Lunge ab und war bei ARDS der stärkste mit dem Überleben assoziierte Beatmungsparameter (Amato 2015); Ziel < ca. 15 cmH₂O." },
          { q: "Spezialwissen Lunge: Wie geht man bei Hypoxämie während der Ein-Lungen-Ventilation vor?", a: "FiO₂ 1,0, Tubuslage bronchoskopisch prüfen, belüftete Lunge rekrutieren und PEEP optimieren, CPAP/O₂-Insufflation auf die nicht belüftete Lunge, ggf. intermittierend beidseits beatmen." },
          { q: "Spezialwissen Lunge: Was zeigte die PROVHILO-Studie?", a: "Ein intraoperativ routinemäßig hoher PEEP mit Rekrutierungsmanövern senkte die postoperativen pulmonalen Komplikationen nicht, führte aber zu mehr Hypotonien." }
        ]
      }
    ],
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
