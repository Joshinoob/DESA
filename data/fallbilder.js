// Fallbilder zum Befunden in SOE 4 – ausschließlich gemeinfreie Bilder (Public Domain bzw. CC0) von
// Wikimedia Commons, lokal abgelegt in img/faelle/ (verkleinert). Keine Patientendaten; Befunde eigens
// formuliert und an der Originalbeschreibung der Datei geprüft.
// Format: { id, pflicht, titel, src, alt, aufgabe, befund:[...], loesung?:{ src, alt, text },
//           quelle:{ autor, titel, url, lizenz, lizenzUrl?, geaendert? } }
window.FALLBILDER = [
  {
    id: "fb-ptx-apikal", pflicht: "p-lus-ptx", titel: "Röntgen-Thorax nach Portanlage",
    src: "img/faelle/pneumothorax-apikal.jpg",
    alt: "Röntgen-Thorax frontal einer jungen Frau mit Portsystem links und kleinem Pneumothorax links apikal",
    aufgabe: "31-jährige Patientin, am Vortag Portanlage links zur Chemotherapie, jetzt leichte Atemnot. Befunden Sie das Bild.",
    befund: [
      "Röntgen-Thorax frontal in Inspiration; Zustand nach beidseitiger Brustentfernung (seitengleich fehlende Brustschatten), **Portkammer links unter dem Schlüsselbein**.",
      "**Links apikal** fehlt oberhalb einer feinen Pleuralinie die Lungengefäßzeichnung → ==kleiner Spitzenpneumothorax nach Punktion der V. subclavia==. Leicht zu übersehen – gezielt die Spitzen und die Ränder absuchen.",
      "In Exspiration wird er deutlicher (laut Bildbeschreibung dann etwa die Hälfte der Thoraxhöhle); eine Exspirationsaufnahme ist aber keine Routine. Im Liegen läge die Luft vorn (tiefer Sinus).",
      "Konsequenz: Klinik und Verlauf; klein und stabil → Sauerstoff, Kontrolle; ==unter Überdruckbeatmung kann er rasch wachsen → Spannungspneumothorax== → großzügig drainieren, vor Narkose klären."
    ],
    quelle: { autor: "Mikael Häggström", titel: "X-ray subtle pneumothorax in inspiration", url: "https://commons.wikimedia.org/wiki/File:X-ray_subtle_pneumothorax_in_inspiration.jpg", lizenz: "CC0 (gemeinfrei)", lizenzUrl: "https://creativecommons.org/publicdomain/zero/1.0/", geaendert: "verkleinert" }
  },
  {
    id: "fb-kerley", pflicht: "p-roe-thorax", titel: "Atemnot nach Bypass-Operation",
    src: "img/faelle/herzinsuffizienz-kerley.jpg",
    alt: "Röntgen-Thorax eines älteren Mannes mit Sternalcerclagen, vergrößertem Herz und Kerley-B-Linien",
    aufgabe: "83-jähriger Mann, früher aortokoronare Bypass-Operation und mehrere Koronarinterventionen, jetzt zunehmende Atemnot. Befunden Sie das Röntgenbild.",
    befund: [
      "Röntgen-Thorax frontal; **Drahtcerclagen des Sternums** nach Bypass-Operation.",
      "**Herz vergrößert**, Lungengefäße erweitert; **Kerley-B-Linien**: kurze waagerechte Linien in der Peripherie der Unterfelder (verdickte, wassergefüllte Septen zwischen den Läppchen).",
      "Wenig Pleuraflüssigkeit, z.B. im rechten horizontalen Interlobärspalt; kein ausgeprägtes alveoläres Ödem.",
      "Deutung: **Linksherzinsuffizienz im interstitiellen Stadium** (laut Bildbeschreibung mittelschwer). ==Linker Ventrikel pumpt schlecht → Druck in den Lungenvenen ↑ → Umverteilung → Flüssigkeit im Interstitium (Kerley B) → später in den Alveolen==.",
      "Konsequenz: Ursache suchen (Ischämie, Rhythmus, Klappe), Echokardiographie, Diuretika und Nachlastsenkung, nichtinvasive Beatmung bei Bedarf; perioperativ Volumen vorsichtig."
    ],
    loesung: { src: "img/faelle/herzinsuffizienz-kerley-markiert.jpg", alt: "Dasselbe Röntgenbild mit Pfeilen auf Kerley-B-Linien links basal", text: "Pfeile: Kerley-B-Linien in der linken Lungenperipherie" },
    quelle: { autor: "Mikael Häggström", titel: "Chest radiograph of a lung with Kerley B lines", url: "https://commons.wikimedia.org/wiki/File:Chest_radiograph_of_a_lung_with_Kerley_B_lines.jpg", lizenz: "CC0 (gemeinfrei)", lizenzUrl: "https://creativecommons.org/publicdomain/zero/1.0/", geaendert: "verkleinert" }
  },
  {
    id: "fb-ards", pflicht: "p-lus-blinien", titel: "Hypoxämie bei schwerer Infektion",
    src: "img/faelle/ards.jpg",
    alt: "Röntgen-Thorax im Liegen mit beidseitigen fleckig-konfluierenden Verschattungen",
    aufgabe: "40-jähriger Mann mit schwerer fieberhafter Infektion, zunehmend hypoxisch, Horovitz-Quotient unter 150 mmHg trotz PEEP. Befunden Sie das Bild und nennen Sie die Diagnose.",
    befund: [
      "Aufnahme im Liegen (a.-p.), EKG-Elektroden; **beidseitige, fleckig bis flächig zusammenfließende Verschattungen**, betont in Mittel- und Unterfeldern.",
      "Im Zusammenhang mit akutem Beginn, Auslöser (hier eine Rickettsien-Infektion, murines Fleckfieber) und Oxygenierungsstörung → **ARDS** (Berlin-Definition: Beginn innerhalb 1 Woche, beidseitige Verschattungen, nicht allein kardial oder durch Überwässerung erklärt, PaO₂/FiO₂ ≤ 300 mmHg unter PEEP ≥ 5).",
      "Abgrenzen: kardiales Lungenödem (großes Herz, Kerley-Linien, Ergüsse, Echo), Pneumonie, Blutung.",
      "Konsequenz: lungenprotektive Beatmung (6 ml/kg Standardkörpergewicht, Plateaudruck ≤ 30 cmH₂O, PEEP nach FiO₂), **Bauchlage bei PaO₂/FiO₂ < 150 mmHg**, restriktive Flüssigkeit, Ursache behandeln. ==Zu große Atemzüge → Überdehnung gesunder Areale → weiterer Lungenschaden=="
    ],
    quelle: { autor: "T. W. van der Vaart et al., Emerging Infectious Diseases 2014 (US-Behörde CDC)", titel: "Chest Xray 40 yr old male acute respiratory distress syndrome as a complication of murine typhus", url: "https://commons.wikimedia.org/wiki/File:Chest_Xray_40_yr_old_male_acute_respiratory_distress_syndrome_as_a_complication_of_murine_typhus._13-1421-F1.jpg", lizenz: "gemeinfrei (Public Domain)" }
  },
  {
    id: "fb-erguss", pflicht: "p-lus-blinien", titel: "Pleuraerguss in Seitenlage",
    src: "img/faelle/erguss-seitenlage.jpg",
    alt: "Röntgen-Thorax in Seitenlage mit Flüssigkeitssaum entlang der unten liegenden Thoraxwand, Pfeile A und B",
    aufgabe: "Das Bild zeigt eine Aufnahme in Seitenlage. Was sehen Sie, und wozu dient diese Technik?",
    befund: [
      "Aufnahme in **Seitenlage** (Dekubitusaufnahme): Die Flüssigkeit im rechten Pleuraraum läuft an der unten liegenden Brustwand aus; Pfeil A = Flüssigkeitssaum, Pfeil B = Breite der Lunge.",
      "==Erguss verlagert sich mit der Schwerkraft → frei beweglich, nicht gekammert==.",
      "Ein Saum unter etwa 1 cm gilt als klein; ab etwa 1 cm ist eine Punktion meist möglich.",
      "Nachweisgrenzen: im Stehen p.-a. etwa 200 ml (Randwinkel verstrichen), seitlich etwa 50–75 ml, im Liegen deutlich mehr; **Ultraschall** erkennt schon geringe Mengen und steuert die Punktion – er hat die Seitenlage-Aufnahme heute weitgehend ersetzt."
    ],
    quelle: { autor: "InvictaHOG (englischsprachige Wikipedia)", titel: "Pleural effusion", url: "https://commons.wikimedia.org/wiki/File:Pleural_effusion.jpg", lizenz: "gemeinfrei (Public Domain)" }
  },
  {
    id: "fb-sdh", pflicht: "p-cct", titel: "Schädel-CT nach Sturz",
    src: "img/faelle/subduralhaematom.jpg",
    alt: "Axiales Schädel-CT ohne Kontrastmittel mit Blutung über der linken Hemisphäre und Mittellinienverlagerung",
    aufgabe: "Patient nach Sturz auf den Kopf, zunehmend eingetrübt. Befunden Sie das native Schädel-CT (Bildseite rechts = Patientenseite links).",
    befund: [
      "Axiales CT ohne Kontrastmittel; über der **linken Hemisphäre** (im Bild rechts) eine randständige, der Kalotte anliegende, überwiegend hyperdense Blutung → **akutes Subduralhämatom** nach Trauma.",
      "**Linker Seitenventrikel komprimiert, Mittellinie nach rechts verlagert**; Weichteilschwellung der Kopfschwarte links.",
      "==Raumforderung → Hirndruck ↑ → zerebraler Perfusionsdruck ↓ → Einklemmungsgefahr==.",
      "Konsequenz: sofort Neurochirurgie (Entlastung; nach Leitlinie der Brain Trauma Foundation bei Dicke > 10 mm oder Mittellinienverlagerung > 5 mm unabhängig vom GCS), Gerinnung normalisieren, Atemweg sichern, Hypoxie und Hypotonie vermeiden, Normokapnie, Kopf 30° hoch."
    ],
    quelle: { autor: "Glitzy queen00 (englischsprachige Wikipedia)", titel: "Trauma subdural", url: "https://commons.wikimedia.org/wiki/File:Trauma_subdural.jpg", lizenz: "gemeinfrei (Public Domain)", geaendert: "verkleinert" }
  },
  {
    id: "fb-ekg-k", pflicht: "p-ekg-k", titel: "EKG bei Dialysepatient",
    src: "img/faelle/ekg-hyperkaliaemie.jpg",
    alt: "Brustwandableitungen V1 bis V6 mit hohen, spitzen T-Wellen und kaum erkennbaren P-Wellen",
    aufgabe: "Dialysepflichtiger Patient, Dialyse ausgefallen, Muskelschwäche. Befunden Sie die Brustwandableitungen (Zeichnung nach gemittelten echten EKGs).",
    befund: [
      "**Hohe, spitze, schmalbasige T-Wellen** besonders V2–V4; **P-Wellen klein bzw. kaum erkennbar**; QRS noch schmal.",
      "Typisch für **Hyperkaliämie**; ==Kalium außen ↑ → Ruhemembranpotenzial weniger negativ → Natriumkanäle teils inaktiviert → Erregungsleitung langsamer → später breiter QRS, Sinuswelle, Kammerflimmern==.",
      "Konsequenz: Kalium sofort bestimmen (Blutgas); bei EKG-Veränderungen **Calcium i.v.**, dann Insulin-Glukose, Salbutamol, Dialyse; Monitor."
    ],
    quelle: { autor: "Mikael Häggström", titel: "ECG in hyperkalemia", url: "https://commons.wikimedia.org/wiki/File:ECG_in_hyperkalemia.png", lizenz: "gemeinfrei (Public Domain)", geaendert: "verkleinert, Hintergrund weiß" }
  }
];
