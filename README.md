# DESA-Trainer

Eine lokale, offline-fähige Lern-App zur Vorbereitung auf das **European Diploma in Anaesthesiology and Intensive Care (EDAIC/DESA)**.

## Nutzung

Kein Build, keine Installation nötig – reines HTML/CSS/JavaScript.

```bash
# im Projektordner:
python3 -m http.server 8000
# dann im Browser öffnen:
http://localhost:8000
```

(Ein einfacher lokaler Server ist wegen Browser-Sicherheitsrichtlinien nötig; `index.html` direkt per Doppelklick öffnen funktioniert nicht zuverlässig.)

Der gesamte Fortschritt (Karteikarten-Status, Testergebnisse) wird ausschließlich lokal im Browser gespeichert (`localStorage`) – nichts wird irgendwohin gesendet.

## Funktionsprinzip

- **Dashboard**: Übersicht über alle Module, Beherrschungsgrad, letzte Testergebnisse, offene Wissenslücken.
- **Lernen**: Karteikarten mit Spaced-Repetition-Algorithmus (vereinfachtes 6-Boxen-Leitner-System). Modul UND Unterthema wählbar (z.B. gezielt nur "Medikamenten-Steckbriefe" innerhalb Pharmakologie). Die Warteschlange wird unterthemenübergreifend durchmischt (Interleaving – nachweislich besser für Transfer/Langzeitbehalten als blockweises Üben). Vor dem Aufdecken schätzt du kurz deine Sicherheit ein (Weiß ich sicher/Unsicher/Keine Ahnung – Konfidenz-Rating, verbessert nachweislich die Selbsteinschätzung und das Behalten korrigierter Fehler), danach bewertest du dich selbst (Nochmal/Schwer/Gut/Leicht) – das bestimmt, wann die Karte wieder fällig wird. Beide Schritte laufen nacheinander ab (nie mehr als 3 bzw. 4 Buttons gleichzeitig sichtbar), mit Tastenkürzeln (1-3 bzw. 1-4) für die schnelle Bedienung am PC. Medikamenten-Steckbriefe werden dabei als farblich signalisiertes Definitionslisten-Layout dargestellt (Kontraindikationen/Cave rot, Antidot grün, Wirkmechanismus hervorgehoben) statt als Fließtext.
- **Begriff nachschlagen**: Während des Lernens (oder in der Testauswertung) kannst du ein unklares Wort markieren. Gibt es dazu eine Karte, wird sie sofort als Lerninhalt angezeigt und fürs baldige Wiederholen eingeplant; sonst landet der Begriff als „offene Wissenslücke" auf dem Dashboard.
- **Test**: Single-Best-Answer-Fragen im EDAIC-Prüfungsstil (5 Antwortoptionen). Zwei Modi: **Übungsmodus** mit sofortigem Feedback pro Frage (lerneffektiver für den Erwerb) und **Prüfungssimulation** mit Feedback erst am Ende (realistische Prüfungsbedingung). Testfragen laufen durch dieselbe Spaced-Repetition-Logik wie Karteikarten ("Successive Relearning") – falsch beantwortete Fragen werden bald wieder fällig, richtig beantwortete seltener; eine eigene Option "Fällige Testfragen" holt genau diese gezielt zurück.
- **Algorithmen**: Notfall-Abläufe (Reanimation, schwieriger Atemweg, Anaphylaxie, maligne Hyperthermie, LAST) als Nachlese-Timeline und als interaktiver „Was ist der nächste Schritt?"-Trainer – prozedurales Wissen lernt sich über Reihenfolge besser als über isolierte Fakten.
- **Physiologie**: Eigene Rubrik (getrennt von den Notfall-Algorithmen) mit 28 physiologischen Regelkreisen/Kaskaden im selben Nachlese-/Trainer-Format, systematisch nach Organsystem – Kardiovaskulär (Frank-Starling-Mechanismus/HZV-Regulation, Erregungsbildung/-leitung des Herzens, koronare Autoregulation), Respiratorisch (Atemantrieb/Chemorezeption, hypoxische pulmonale Vasokonstriktion, O2-Hämoglobin-Bindungskurve), Renal (RAAS, renale Autoregulation, ADH/Osmoregulation, Kalium-Homöostase), Neuro/ZNS (Cushing-Reflex, zerebrale Autoregulation), Endokrin (Insulin-Glukagon, HPA-Achse, Schilddrüsenachse, Calcium-Phosphat-Homöostase), Hämostase (Gerinnungskaskade, Fibrinolyse), Autonomes NS (Barorezeptorreflex, sympathische/parasympathische Signalkaskade inkl. Rezeptor-Subtypen α1/α2/β1/β2, M1-M3), Temperatur (perioperative Thermoregulation), GI/Hepatisch (hepatische Blutflussregulation), Mikrozirkulation (Starling-Prinzip/Glykokalyx), Neuromuskulär, Nozizeption, Säure-Basen-Kompensation und Sepsis-Kaskade – auch Regelkreise lernen sich über die richtige Reihenfolge der Teilschritte besser als über reine Merksätze.
- **Tabellen**: 9 Vergleichstabellen/Cheat-Sheets (Vasopressoren & Inotropika inkl. Levosimendan/Terlipressin, Muskelrelaxanzien mit Intubationsdosis, Lokalanästhetika mit pKa-Wert, Antidote, Nüchternheitszeiten Erwachsene vs. Kinder (ESAIC/APAGBI), Verwechslungsgefahr MH/LAST/Anaphylaxie, Organsysteme im Überblick, Klassifikationssysteme & Scores (ASA, Mallampati, Cormack-Lehane, GCS, RASS, CAM-ICU, RCRI, Aldrete, NYHA, Apfel, TOF-Ratio), Inhalationsanästhetika (Blut-Gas-Koeffizient, MAC, Metabolisierung)) – verwandte Fakten im Kontrast lernen statt isoliert.
- **Medikamente**: Nachschlage-Ansicht aller 129 Wirkstoffprofile mit Suchfeld und manuellem "Gelernt"-Abhaken (Fortschritt sichtbar: „X von 129") – ohne Lernkarten-Ablauf, für den schnellen Blick zwischendurch (getrennt von "Lernen", wo dieselben Steckbriefe per Spaced Repetition geübt werden).
- **Leitlinien**: Nachschlage-Ansicht aller 427 expliziten Leitlinien-Empfehlungskarten, gruppiert nach 42 konkreten Einzelleitlinien (jede Leitlinie mit mindestens 5, meist 9-16 Karten) (z.B. alle Empfehlungen der Surviving Sepsis Campaign zusammen, auch wenn sie ursprünglich aus unterschiedlichen Modulen stammen) – jede Leitlinie mit mehreren vertiefenden Karten statt nur einer Randnotiz (u.a. ERC, ESAIC, ASA (Obstetric/Awareness/NMB-Reversal), ESRA/ASRA (neuraxial/peripher), KDIGO, ESPEN, PADIS, Surviving Sepsis Campaign, DAS (Atemweg/Extubation), ATLS, europäische Trauma-Koagulopathie-Leitlinie, ISBI, Brain Trauma Foundation, ASH, EHRA, NICE, WHO (Surgical Safety Checklist/SSI/PPH), NAP6, Resuscitation Council UK, APAGBI, AABB, CPOC/JBDS, ESC/ESAIC, ERAS-Cardiac, AORN, Aggarwal-Kriterien, DBD-Organspende u.a.). Pro Leitlinie: alle Empfehlungen sequenziell "durchgehen", sich mit den passenden Testfragen "testen" oder die Leitlinie als "gelernt" abhaken.
- **Mündlich (Teil 2/SOE)**: 16 mündliche Prüfungsszenarien im Stil der EDAIC Structured Oral Examination (8 Basiswissenschaften, 8 Klinik) mit Rückfragen des Prüfers, ausführlicher Musterantwort zum laut Nachsprechen und Hinweisen, worauf der Prüfer achtet – trainiert freies mündliches Antworten statt nur Faktenwissen.
- **Fortschritt**: Lernphase je Modul (Neu/Lernend/Jung/Reif statt nur einer Mastery-Zahl), 7-Tage-Fälligkeitsvorschau, Kalibrierungsauswertung (stimmt die eigene Sicherheitseinschätzung mit dem tatsächlichen Ergebnis überein?), Testverlauf über Zeit.
- **Lern-Streak**: Dashboard zeigt die Tage-Streak (Tage in Folge mit mindestens einer Wiederholung) als sichtbaren Fortschritts-/Motivationsanker.
- **Kurzanleitung**: Beim ersten Öffnen erklärt eine kurze Onboarding-Tour (6 Folien) knapp jede Hauptfunktion; jederzeit über den Link unten im Dashboard erneut aufrufbar.

## Struktur des Curriculums

Orientiert am offiziellen EDAIC-Syllabus:

**Teil 1 – Basiswissenschaften**: Anatomie, Physiologie, Pharmakologie (inkl. 129 Medikamenten-Steckbriefen), Physik & Messtechnik
**Teil 2 – Klinik**: Allgemeinanästhesie, Regionalanästhesie & Schmerzmedizin, Intensivmedizin, Notfallmedizin & Reanimation (inkl. Toxikologie & Verbrennungen), Spezielle Anästhesie (Geburtshilfe, Kinder, Kardio/Thorax, Neuro, HNO/Augen/ambulant, Orthopädie & Gefäßchirurgie, Transplantationsanästhesie), Perioperative Medizin/Sicherheit/Ethik

Aktuell enthalten: **961 Karteikarten** (davon 129 Medikamenten-Steckbriefe, 427 explizite Leitlinien-Empfehlungskarten gruppiert nach 42 Einzelleitlinien mit jeweils mindestens 5, meist 9-16 vertiefenden Karten statt nur einer Randnotiz), **503 Testfragen**, **6 Notfall-Algorithmen**, **28 Physiologie-Mechanismen** (eigene Rubrik, alle Organsysteme), **9 Vergleichstabellen** (inkl. Klassifikationssysteme/Scores und Inhalationsanästhetika) und **16 mündliche SOE-Übungsszenarien** für Teil 2, verteilt auf 42 Unterthemen in 10 Modulen.

Alle Inhalte wurden durch mehrere Korrektheitsaudits gegen aktuelle Leitlinien und Fachliteratur geprüft (ERC, ESAIC, ASA, ESRA/NYSORA, KDIGO, ESPEN, Surviving Sepsis Campaign, PADIS, Bundesärztekammer u.a.). Es gibt keine offiziellen oder frei zugänglichen echten EDAIC-Altfragen (ESAIC gibt keine frei, kursierende "Recall"-Fragen verletzen Vertraulichkeitsvereinbarungen/Urheberrecht) – alle Testfragen sind eigens verfasst und einzeln faktengeprüft, nicht aus echten Prüfungen reproduziert.

## Wichtiger Hinweis zur inhaltlichen Korrektheit

Die Inhalte wurden mit großer Sorgfalt nach Standardlehrmeinung (u.a. Miller's Anesthesia, Morgan & Mikhail, gängige ESAIC/ERC-Leitlinien) erstellt. Trotzdem gilt:

- **Medikamentendosierungen, Grenzwerte und Leitlinienempfehlungen ändern sich.** Vor der Prüfung unbedingt gegen aktuelle Fachinformationen (SmPC) und die jeweils gültigen Leitlinien (ESAIC, ERC, Surviving Sepsis Campaign etc.) sowie den aktuellen offiziellen EDAIC-Syllabus gegenprüfen.
- Diese App ersetzt **keine** Lehrbücher, keinen offiziellen Kurs und keine klinische Erfahrung – sie ist ein Werkzeug zur **Wiederholung und Selbstkontrolle**, nicht die Primärquelle.
- Bei Unsicherheit oder Widerspruch zu deinem Lehrbuch/Kurs: Lehrbuch/aktuelle Leitlinie hat Vorrang.

## Inhalte erweitern

Alle Inhalte liegen als einfache JavaScript-Arrays vor und lassen sich leicht ergänzen:

- `data/curriculum.js` – Module und Unterthemen (IDs müssen zu den Karten/Fragen passen)
- `data/flashcards.js` – Karteikarten: `{ id, module, subtopic, front, back }`
- `data/drugcards.js` – Medikamenten-Steckbriefe: `{ id, module, subtopic, front, profile: { klasse, mechanismus, indikation, dosierung, pharmakokinetik, nebenwirkungen, kontraindikationen, interaktionen, antidot, cave, quelle } }`
- `data/mcq.js` – Testfragen: `{ id, module, subtopic, question, options: [5 Strings], correct: Index (0-4), explanation }`
- `data/algorithms.js` – Notfall-Algorithmen: `{ id, title, category, source, steps: [String, ...] }`
- `data/tables.js` – Vergleichstabellen: `{ id, title, columns: [String, ...], rows: [[String, ...], ...] }`
- `data/soe.js` – Mündliche Prüfungsszenarien (Teil 2/SOE): `{ id, category, title, scenario, followups: [String, ...], modelAnswer, examTips }`

Einfach neue Objekte mit eindeutiger `id` in die jeweilige Datei einfügen; `module`/`subtopic` müssen mit den IDs aus `curriculum.js` übereinstimmen.
