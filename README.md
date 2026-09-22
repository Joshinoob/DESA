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

- **Dashboard**: Übersicht über alle Module, fällige Karten, Beherrschungsgrad, letzte Testergebnisse, offene Wissenslücken.
- **Lernen**: Karteikarten mit Spaced-Repetition-Algorithmus (vereinfachtes 6-Boxen-Leitner-System). Nach jeder Karte bewertest du dich selbst (Nochmal/Schwer/Gut/Leicht) – das bestimmt, wann die Karte wieder fällig wird. Das ist die didaktisch wirksamste Methode für Faktenwissen (aktives Erinnern statt passives Wiederlesen). Medikamenten-Steckbriefe werden dabei als farblich signalisiertes Definitionslisten-Layout dargestellt (Kontraindikationen/Cave rot, Antidot grün, Wirkmechanismus hervorgehoben) statt als Fließtext.
- **Begriff nachschlagen**: Während des Lernens (oder in der Testauswertung) kannst du ein unklares Wort markieren. Gibt es dazu eine Karte, wird sie sofort als Lerninhalt angezeigt und fürs baldige Wiederholen eingeplant; sonst landet der Begriff als „offene Wissenslücke" auf dem Dashboard.
- **Test**: Single-Best-Answer-Fragen im EDAIC-Prüfungsstil (5 Antwortoptionen). Zwei Modi: **Übungsmodus** mit sofortigem Feedback pro Frage (lerneffektiver für den Erwerb) und **Prüfungssimulation** mit Feedback erst am Ende (realistische Prüfungsbedingung).
- **Algorithmen**: Notfall-Abläufe (Reanimation, schwieriger Atemweg, Anaphylaxie, maligne Hyperthermie, LAST) als Nachlese-Timeline und als interaktiver „Was ist der nächste Schritt?"-Trainer – prozedurales Wissen lernt sich über Reihenfolge besser als über isolierte Fakten.
- **Tabellen**: Vergleichstabellen/Cheat-Sheets (Vasopressoren, Muskelrelaxanzien, Lokalanästhetika, Antidote, Nüchternheitszeiten, Verwechslungsgefahr MH/LAST/Anaphylaxie) – verwandte Fakten im Kontrast lernen statt isoliert.
- **Mündlich (Teil 2/SOE)**: 16 mündliche Prüfungsszenarien im Stil der EDAIC Structured Oral Examination (8 Basiswissenschaften, 8 Klinik) mit Rückfragen des Prüfers, ausführlicher Musterantwort zum laut Nachsprechen und Hinweisen, worauf der Prüfer achtet – trainiert freies mündliches Antworten statt nur Faktenwissen.
- **Fortschritt**: Lernphase je Modul (Neu/Lernend/Jung/Reif statt nur einer Mastery-Zahl), 7-Tage-Fälligkeitsvorschau, Testverlauf über Zeit.
- **Lern-Streak & Tipps**: Dashboard zeigt Tage-Streak (Motivation durch sichtbaren Fortschritt) und einen täglich wechselnden, evidenzbasierten Lerntipp (Spaced Repetition, Testing-Effekt, Interleaving u.a.).

## Struktur des Curriculums

Orientiert am offiziellen EDAIC-Syllabus:

**Teil 1 – Basiswissenschaften**: Anatomie, Physiologie, Pharmakologie (inkl. 129 Medikamenten-Steckbriefen), Physik & Messtechnik
**Teil 2 – Klinik**: Allgemeinanästhesie, Regionalanästhesie & Schmerzmedizin, Intensivmedizin, Notfallmedizin & Reanimation (inkl. Toxikologie & Verbrennungen), Spezielle Anästhesie (Geburtshilfe, Kinder, Kardio/Thorax, Neuro, HNO/Augen/ambulant, Orthopädie & Gefäßchirurgie, Transplantationsanästhesie), Perioperative Medizin/Sicherheit/Ethik

Aktuell enthalten: **427 Karteikarten** (davon 129 Medikamenten-Steckbriefe), **209 Testfragen**, **6 Notfall-Algorithmen**, **6 Vergleichstabellen** und **16 mündliche SOE-Übungsszenarien** für Teil 2, verteilt auf 42 Unterthemen in 10 Modulen.

Alle Inhalte wurden durch zwei Korrektheitsaudits gegen aktuelle Leitlinien und Fachliteratur geprüft (ERC, ESAIC, ASA, ESRA/NYSORA, KDIGO, ESPEN, Sepsis-3, Bundesärztekammer u.a.). Es gibt keine offiziellen oder frei zugänglichen echten EDAIC-Altfragen (ESAIC gibt keine frei, kursierende "Recall"-Fragen verletzen Vertraulichkeitsvereinbarungen/Urheberrecht) – alle Testfragen sind eigens verfasst und einzeln faktengeprüft, nicht aus echten Prüfungen reproduziert.

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
