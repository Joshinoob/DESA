// Spezialwissen Hormone & Stressreaktion – siehe data/spezial.js für Aufbau und Didaktik.
(function () {
  const CH = [];

  CH.push({
    id: "prinzipien",
    level: "Zelle",
    title: "Wie Hormone wirken: Rezeptoren, Achsen und Rückkopplung",
    leitfrage: "Warum wirkt Adrenalin in Sekunden, Cortisol aber erst nach Stunden – obwohl beide Stresshormone sind?",
    einfach: "Hormone sind Botenstoffe im Blut. Wasserlösliche Hormone (z.B. Adrenalin, Insulin) docken außen an der Zelle an und lösen innen eine schnelle Signalkette aus. Fettlösliche Hormone (Cortisol, Schilddrüsenhormon) gehen in die Zelle hinein und verändern, welche Gene abgelesen werden – das dauert länger, hält aber auch länger an. Die meisten Hormone werden über Rückkopplung gebremst: Ist genug da, wird weniger nachproduziert.",
    body: [
      { h: "Rezeptortypen" },
      { table: { head: ["Rezeptor", "Beispiele", "Signalweg", "Zeitverlauf"], rows: [
        ["G-Protein-gekoppelt", "Katecholamine, ADH, Glukagon, PTH, ACTH", "cAMP, IP₃/Ca²⁺", "Sekunden–Minuten"],
        ["Tyrosinkinase", "Insulin, Wachstumsfaktoren", "Phosphorylierungskaskaden (z.B. PI3K → GLUT4 in die Membran)", "Minuten"],
        ["Zytokin-Rezeptoren (JAK/STAT)", "Wachstumshormon, EPO, Leptin", "JAK-STAT", "Minuten–Stunden"],
        ["Intrazellulär (Kernrezeptor)", "Cortisol, Aldosteron, Sexualsteroide, T₃, Vitamin D", "Gentranskription", "Stunden–Tage"]
      ] } },
      "Steroide und Schilddrüsenhormone sind im Blut überwiegend **proteingebunden** (Cortisol an CBG und Albumin, T₄ an TBG); nur der freie Anteil wirkt. ==Medikamente oder Zustände, die Bindungsproteine verändern (Östrogene, Schwangerschaft, Hypalbuminämie), verfälschen Gesamtspiegel, nicht aber unbedingt die Wirkung.==",
      { h: "Hypothalamus-Hypophysen-Achsen" },
      { table: { head: ["Hypothalamus", "Hypophyse", "Zielorgan", "Hormon"], rows: [
        ["CRH", "ACTH", "Nebennierenrinde", "Cortisol (Androgene)"],
        ["TRH", "TSH", "Schilddrüse", "T₄/T₃"],
        ["GnRH", "LH/FSH", "Gonaden", "Sexualsteroide"],
        ["GHRH/Somatostatin", "GH", "Leber u.a.", "IGF-1"],
        ["(ADH und Oxytocin werden im Hypothalamus gebildet und im Hypophysenhinterlappen freigesetzt)", "", "", ""]
      ] } },
      { kette: [
        "Hormonspiegel im Blut steigt",
        "Hypothalamus und Hypophyse registrieren dies",
        "Freisetzung von Releasing-Hormon und Steuerhormon sinkt",
        "Zielorgan produziert weniger"
      ], titel: "Negative Rückkopplung" },
      "Folge für die Diagnostik: **primäre** Störung (Zielorgan) → Steuerhormon hoch (z.B. Morbus Addison: ACTH ↑); **sekundäre** Störung (Hypophyse) → Steuerhormon niedrig (z.B. nach Langzeit-Kortikoidtherapie: ACTH ↓, Cortisol ↓)."
    ],
    merke: [
      "Wasserlösliche Hormone: Membranrezeptoren, schnell (cAMP, Ca²⁺, Kinasen).",
      "Steroide/T₃: Kernrezeptoren, Gentranskription, langsam.",
      "Nur freier Hormonanteil wirkt; Bindungsproteine verfälschen Gesamtspiegel.",
      "Achsen: CRH–ACTH–Cortisol, TRH–TSH–T₄/T₃.",
      "Primär: Steuerhormon hoch; sekundär: Steuerhormon niedrig."
    ],
    warum: [
      { q: "Warum wirkt Hydrocortison bei Addison-Krise nicht sofort voll, obwohl man es i.v. gibt?", a: "Ein Teil der Wirkung läuft über Gentranskription und Proteinsynthese (Stunden). Schneller sind nicht-genomische Effekte und die 'permissive' Wiederherstellung der Gefäßantwort auf Katecholamine, die innerhalb von Minuten bis Stunden einsetzt." },
      { q: "Warum ist ACTH beim Morbus Addison erhöht, nach langer Kortikoidtherapie aber erniedrigt?", a: "Beim Addison ist die Nebenniere zerstört; das fehlende Cortisol enthemmt Hypothalamus/Hypophyse → ACTH ↑. Unter Kortikoidtherapie unterdrückt das zugeführte Steroid CRH und ACTH; die Nebenniere atrophiert (sekundäre Insuffizienz)." }
    ],
    klinik: [
      "Etomidat hemmt die 11β-Hydroxylase → Cortisolsynthese bis ca. 24 h vermindert (relevant v.a. bei Sepsis, Studienlage uneinheitlich).",
      "Amiodaron (jodreich, hemmt Dejodasen) kann Hypo- und Hyperthyreose auslösen.",
      "Vor Hypophysenchirurgie: Achsen prüfen, perioperativ Hydrocortison, postoperativ Diabetes insipidus/SIADH beachten."
    ],
    selbsttest: [
      { q: "Spezialwissen Hormone: Welche Rezeptortypen gibt es und wie schnell wirken sie?", a: "G-Protein-gekoppelt (Sekunden–Minuten), Tyrosinkinase (Minuten), JAK/STAT (Minuten–Stunden), Kernrezeptoren für Steroide/T3 (Stunden–Tage)." },
      { q: "Spezialwissen Hormone: Unterschied primäre vs. sekundäre Nebennierenrindeninsuffizienz im Labor?", a: "Primär (Addison): Cortisol ↓, ACTH ↑ (oft Hyperkaliämie durch Aldosteronmangel). Sekundär (z.B. Kortikoidtherapie): Cortisol ↓, ACTH ↓, Aldosteron meist erhalten." },
      { q: "Spezialwissen Hormone: Welche Hormone werden im Hypophysenhinterlappen freigesetzt?", a: "ADH (Vasopressin) und Oxytocin – gebildet im Hypothalamus." },
      { q: "Spezialwissen Hormone: Wie beeinflusst Etomidat die Nebennierenrinde?", a: "Hemmt die 11β-Hydroxylase → verminderte Cortisolsynthese für bis zu ca. 24 h nach Einzeldosis." },
      { q: "Spezialwissen Hormone: Warum wirkt nur der freie Hormonanteil?", a: "Nur ungebundenes Hormon gelangt zu den Rezeptoren; gebundenes (CBG, TBG, Albumin) dient als Reservoir." }
    ]
  });

  CH.push({
    id: "stressantwort",
    level: "System",
    title: "Die Stressantwort auf Operation und Trauma",
    leitfrage: "Warum steigt nach einer großen Operation der Blutzucker, der Körper hält Wasser zurück und baut Muskeln ab – und kann die Anästhesie das verhindern?",
    einfach: "Eine Operation ist für den Körper wie eine Verletzung im Kampf. Er schaltet auf Überleben: Stresshormone treiben Herz und Kreislauf an, Zucker wird ins Blut geschüttet, Salz und Wasser werden zurückgehalten, Eiweiß aus den Muskeln wird für Reparatur und Abwehr abgebaut. Kurzfristig sinnvoll, wird das bei großen Eingriffen zum Problem. Regionalanästhesie kann einen Teil der Signale aus dem OP-Gebiet blockieren.",
    body: [
      { h: "Auslöser" },
      "**Nervale** Signale aus dem Wundgebiet (afferente Nozizeption → Hypothalamus) und **humorale** Signale (Zytokine wie IL-6, TNF-α aus dem verletzten Gewebe). Dazu Hypovolämie, Hypothermie, Schmerz, Angst.",
      { h: "Hormonelle Antwort" },
      { table: { head: ["Hormon", "Richtung", "Wichtigste Folge"], rows: [
        ["Katecholamine (Sympathikus, Nebennierenmark)", "↑↑", "Tachykardie, Hypertonie, Glykogenolyse, Lipolyse, Insulinsekretion gehemmt"],
        ["ACTH/Cortisol", "↑↑ (Cortisol bis ca. 4–5-fach, Stunden bis Tage)", "Glukoneogenese, Proteinabbau, entzündungshemmend, Insulinresistenz"],
        ["ADH (Vasopressin)", "↑↑", "Wasserretention (postoperative Hyponatriämie bei hypotonen Infusionen), Vasokonstriktion"],
        ["Renin/Angiotensin/Aldosteron", "↑", "Natrium- und Wasserretention, Kaliumverlust"],
        ["Glukagon, Wachstumshormon", "↑", "Hyperglykämie, Lipolyse"],
        ["Insulin", "↓ bzw. relativ ↓ + Resistenz", "Hyperglykämie"],
        ["T₃", "↓ ('Low-T₃-Syndrom')", "Adaptation, keine Substitution nötig"]
      ] } },
      { kette: [
        "Gewebetrauma",
        "Nozizeption + Zytokine (IL-6)",
        "Hypothalamus → Sympathikus + CRH/ACTH + ADH",
        "Katecholamine, Cortisol, Glukagon ↑; Insulinwirkung ↓",
        "Hyperglykämie, Lipolyse, Proteinabbau (negative Stickstoffbilanz), Salz-/Wasserretention",
        "Akute-Phase-Reaktion in der Leber (CRP ↑, Albumin ↓), Fieber, Immunsuppression"
      ], titel: "Ablauf der Stressreaktion" },
      { h: "Modulation durch die Anästhesie" },
      { ul: [
        "**Neuraxiale Blockade** (thorakale Epidurale) unterbindet die afferenten Signale bei Eingriffen an Unterbauch und unterer Extremität weitgehend → Cortisol-, Glukose- und Katecholaminanstieg deutlich geringer; bei Oberbauch-/Thoraxeingriffen nur teilweise. Auf die Zytokinantwort hat sie kaum Einfluss.",
        "**Hochdosierte Opioide** dämpfen Hypothalamus-Achse und Sympathikus dosisabhängig.",
        "**Etomidat** hemmt die Cortisolsynthese (unerwünscht), **Dexmedetomidin/Clonidin** senken den Sympathikotonus.",
        "**Minimalinvasive Chirurgie** reduziert die Zytokinantwort.",
        "ERAS-Elemente (kohlenhydrathaltige Trinklösung bis 2 h präoperativ, frühe Ernährung und Mobilisation, Normothermie) senken die Insulinresistenz."
      ] }
    ],
    merke: [
      "Auslöser: Nozizeption + Zytokine (IL-6).",
      "Katecholamine, Cortisol, ADH, Aldosteron, Glukagon ↑; Insulinwirkung ↓; T₃ ↓.",
      "Folgen: Hyperglykämie, Proteinkatabolismus, Salz-/Wasserretention, Immunsuppression.",
      "Epidurale dämpft die neuroendokrine (nicht die Zytokin-)Antwort, v.a. bei Unterbauch-/Beineingriffen.",
      "Präoperative Kohlenhydrat-Trinklösung senkt die postoperative Insulinresistenz."
    ],
    warum: [
      { q: "Warum sind postoperativ hypotone Infusionen gefährlich?", a: "Die Stressreaktion erhöht ADH stark – unabhängig von der Osmolalität. Freies Wasser aus hypotonen Lösungen wird zurückgehalten → Hyponatriämie, bei Kindern und jungen Frauen bis zum Hirnödem." },
      { q: "Warum blockiert eine Epiduralanästhesie bei Oberbauchoperationen die Stressantwort weniger gut?", a: "Afferente Signale laufen dort teils über den N. vagus (nicht blockiert) und über hohe thorakale Segmente; außerdem wirkt die Zytokinantwort humoral – sie wird durch Nervenblockade nicht verhindert." }
    ],
    klinik: [
      "Perioperativer Blutzucker: Ziel meist ca. 110–180 mg/dl (6–10 mmol/l); strenge Normoglykämie erhöht das Hypoglykämierisiko (NICE-SUGAR).",
      "Muskelabbau postoperativ: Eiweißzufuhr und frühe Mobilisation (ESPEN).",
      "Kortikoid-Dauertherapie: Stressdosis Hydrocortison je nach Eingriffsgröße (→ Kapitel Nebenniere)."
    ],
    selbsttest: [
      { q: "Spezialwissen Hormone: Welche Hormone steigen in der chirurgischen Stressantwort, welche sinken?", a: "Steigen: Katecholamine, ACTH/Cortisol, ADH, Renin/Aldosteron, Glukagon, Wachstumshormon. Sinken/weniger wirksam: Insulin (Resistenz), T3 (Low-T3)." },
      { q: "Spezialwissen Hormone: Welche metabolischen Folgen hat die Stressantwort?", a: "Hyperglykämie, Lipolyse, Proteinkatabolismus mit negativer Stickstoffbilanz, Natrium-/Wasserretention, Akute-Phase-Reaktion, Immunsuppression." },
      { q: "Spezialwissen Hormone: Wie beeinflusst eine Epiduralanästhesie die Stressantwort?", a: "Blockiert afferente Nozizeption → neuroendokrine Antwort (Cortisol, Glukose, Katecholamine) deutlich gedämpft, v.a. bei Unterbauch-/Beineingriffen; Zytokinantwort kaum beeinflusst." },
      { q: "Spezialwissen Hormone: Welche ERAS-Maßnahme reduziert die postoperative Insulinresistenz?", a: "Kohlenhydrathaltige Trinklösung bis ca. 2 h präoperativ (statt langer Nüchternheit), dazu frühe Ernährung und Mobilisation." },
      { q: "Spezialwissen Hormone: Warum droht postoperativ eine Hyponatriämie?", a: "Stressbedingt hohes ADH hält freies Wasser zurück; hypotone Infusionen verstärken dies." }
    ]
  });

  CH.push({
    id: "nebenniere",
    level: "Organ",
    title: "Nebenniere: Cortisol, Aldosteron und perioperative Substitution",
    leitfrage: "Welcher Patient braucht vor der Operation zusätzliches Hydrocortison – und wie viel?",
    einfach: "Die Nebenniere hat außen eine Rinde, die Cortisol (Stress, Zucker, Kreislauf) und Aldosteron (Salz, Kalium) bildet, und innen ein Mark, das Adrenalin bildet. Wer längere Zeit Kortison-Tabletten nimmt, dessen eigene Produktion schläft ein. Unter dem Stress einer Operation fehlt dann Cortisol – der Kreislauf kann versagen. Deshalb bekommen diese Patienten zusätzlich Hydrocortison.",
    body: [
      { h: "Zonen der Nebennierenrinde" },
      { table: { head: ["Zone", "Hormon", "Steuerung"], rows: [
        ["Zona glomerulosa (außen)", "Aldosteron", "Angiotensin II, Kalium (ACTH nur gering)"],
        ["Zona fasciculata", "Cortisol", "ACTH"],
        ["Zona reticularis", "Androgene (DHEA)", "ACTH"],
        ["Mark", "Adrenalin (ca. 80 %), Noradrenalin", "Sympathische präganglionäre Fasern (ACh)"]
      ] } },
      "Merkhilfe 'Salz – Zucker – Sex' von außen nach innen. Das Mark braucht hohe Cortisolkonzentrationen aus der Rinde für das Enzym, das Noradrenalin in Adrenalin umwandelt (PNMT).",
      { h: "Cortisol" },
      "Tagesproduktion in Ruhe ca. **10–20 mg** (entspricht ca. 5–7 mg Prednisolon), unter maximalem Stress bis ca. **100–200 mg/Tag**. Wirkungen: Glukoneogenese, Insulinantagonismus, Proteinabbau, Entzündungshemmung, =='permissive' Wirkung: Katecholamine wirken an den Gefäßen nur mit ausreichend Cortisol==.",
      { h: "Steroid-Äquivalenzen (ungefähr)" },
      { table: { head: ["Substanz", "Äquivalenzdosis", "Glukokortikoid-Potenz", "Mineralokortikoid", "Wirkdauer"], rows: [
        ["Hydrocortison", "20 mg", "1", "1", "8–12 h"],
        ["Prednisolon", "5 mg", "4", "0,8", "12–36 h"],
        ["Methylprednisolon", "4 mg", "5", "~0", "12–36 h"],
        ["Dexamethason", "0,75 mg", "25–30", "0", "36–54 h"],
        ["Fludrocortison", "—", "10", "125–250", "12–36 h"]
      ] } },
      { h: "Wer ist gefährdet?" },
      "Eine Suppression der Achse ist wahrscheinlich bei **≥ ca. 5 mg Prednisolon-Äquivalent täglich über ≥4 Wochen** (bzw. Glukokortikoiden in höheren Dosen über kürzere Zeit, auch inhalativ/topisch in hohen Dosen) bis ca. 3 Monate (teils länger) nach Ende der Therapie. ==Die Dauertherapie wird am OP-Tag fortgeführt.==",
      { h: "Perioperative Stressdosis (Leitlinie Association of Anaesthetists/RCP/Society for Endocrinology 2020, vereinfacht)" },
      { ul: [
        "Kleine Eingriffe/Endoskopie: übliche Dosis; ggf. Hydrocortison 100 mg bei Einleitung (Empfehlungen je nach Leitlinie unterschiedlich).",
        "Mittlere/große Eingriffe: Hydrocortison 100 mg i.v. bei Einleitung, dann 200 mg/24 h (kontinuierlich oder 50 mg alle 6 h), solange nüchtern/kritisch; danach Doppelte der Normaldosis für ca. 48 h bzw. bis zu einer Woche, dann zurück auf Normaldosis.",
        "Bei Dexamethason-Dauertherapie: Dexamethason hat keine Mineralokortikoidwirkung – Hydrocortison als Stressdosis."
      ] },
      { h: "Addison-Krise" },
      { kette: [
        "Cortisolmangel (+ bei primärer Form Aldosteronmangel)",
        "Katecholamin-refraktäre Hypotonie, Hypoglykämie, Hyponatriämie, (Hyperkaliämie), Bauchschmerz, Bewusstseinsstörung",
        "Therapie: Hydrocortison 100 mg i.v. sofort, dann 200 mg/24 h; Volumen (NaCl 0,9 %), Glukose",
        "Nicht auf Laborergebnis warten – Blutprobe für Cortisol/ACTH vor der Gabe abnehmen, wenn ohne Verzögerung möglich"
      ], titel: "Erkennen und behandeln" }
    ],
    merke: [
      "Rinde: glomerulosa (Aldosteron), fasciculata (Cortisol), reticularis (Androgene); Mark: Adrenalin.",
      "Cortisol in Ruhe ca. 10–20 mg/Tag, Stress bis 100–200 mg/Tag; permissiv für Katecholamine.",
      "Äquivalenz: Hydrocortison 20 = Prednisolon 5 = Methylprednisolon 4 = Dexamethason 0,75 mg.",
      "Suppression wahrscheinlich ab ca. 5 mg Prednisolon über ≥4 Wochen.",
      "Große OP: Hydrocortison 100 mg bei Einleitung, dann 200 mg/24 h."
    ],
    warum: [
      { q: "Warum ist die Hypotonie bei Addison-Krise oft katecholaminrefraktär?", a: "Cortisol ist für die Expression und Funktion adrenerger Rezeptoren an den Gefäßen nötig (permissive Wirkung). Ohne Cortisol sprechen die Gefäße kaum auf Noradrenalin an; erst Hydrocortison stellt die Antwort wieder her." },
      { q: "Warum ist Hyperkaliämie typisch für die primäre, nicht für die sekundäre Nebenniereninsuffizienz?", a: "Bei der primären Form ist die ganze Rinde zerstört, also fehlt auch Aldosteron. Bei der sekundären fehlt nur ACTH; Aldosteron wird weiter über Angiotensin II und Kalium gesteuert." }
    ],
    klinik: [
      "Unerklärte, vasopressorrefraktäre Hypotonie bei Patienten mit Kortikoid-Anamnese: Hydrocortison 100 mg i.v.",
      "Septischer Schock mit steigendem Vasopressorbedarf: Hydrocortison 200 mg/Tag (Surviving Sepsis Campaign).",
      "Nach Adrenalektomie wegen Cushing: postoperativ Substitution (die Gegenseite ist supprimiert)."
    ],
    selbsttest: [
      { q: "Spezialwissen Hormone: Welche Hormone bildet welche Zone der Nebenniere?", a: "Glomerulosa: Aldosteron; fasciculata: Cortisol; reticularis: Androgene; Mark: Adrenalin (ca. 80 %) und Noradrenalin." },
      { q: "Spezialwissen Hormone: Wie viel Cortisol produziert der Körper in Ruhe und unter maximalem Stress?", a: "Ca. 10–20 mg/Tag in Ruhe, bis ca. 100–200 mg/Tag unter maximalem Stress." },
      { q: "Spezialwissen Hormone: Äquivalenzdosen der wichtigsten Glukokortikoide?", a: "Hydrocortison 20 mg = Prednisolon 5 mg = Methylprednisolon 4 mg = Dexamethason 0,75 mg." },
      { q: "Spezialwissen Hormone: Ab welcher Kortikoiddosis ist eine HPA-Achsen-Suppression wahrscheinlich?", a: "Ab ca. 5 mg Prednisolon-Äquivalent täglich über ≥4 Wochen (bis ca. 3 Monate nach Therapieende)." },
      { q: "Spezialwissen Hormone: Stressdosis Hydrocortison bei großer Operation?", a: "100 mg i.v. bei Einleitung, dann 200 mg/24 h (kontinuierlich oder 50 mg alle 6 h), danach doppelte Normaldosis für ca. 48 h, dann Normaldosis." },
      { q: "Spezialwissen Hormone: Therapie der Addison-Krise?", a: "Sofort Hydrocortison 100 mg i.v., dann 200 mg/24 h; Volumen (NaCl 0,9 %), Glukose, Elektrolytkontrolle – nicht auf Laborwerte warten." }
    ]
  });

  CH.push({
    id: "schilddruese",
    level: "Organ",
    title: "Schilddrüse: Bildung, Wirkung und Krisen",
    leitfrage: "Warum kann eine Kontrastmittelgabe einen Patienten in die thyreotoxische Krise treiben – und warum ist ein Myxödemkoma unter Narkose so gefährlich?",
    einfach: "Die Schilddrüse baut Jod in ihre Hormone ein. Das wirksame Hormon T₃ entsteht großteils erst im Gewebe aus T₄. Schilddrüsenhormone stellen den 'Gang' des Stoffwechsels ein: zu viel bedeutet Herzrasen, Hitze und Unruhe, zu wenig bedeutet Kälte, langsames Herz und Müdigkeit. Viel Jod (z.B. aus Kontrastmittel) kann eine überaktive Schilddrüse plötzlich entgleisen lassen.",
    body: [
      { h: "Synthese und Umwandlung" },
      { kette: [
        "Jodid-Aufnahme über den Natrium-Jodid-Symporter",
        "Thyreoperoxidase oxidiert Jod, baut es in Thyreoglobulin ein (Angriffspunkt: Thiamazol, Propylthiouracil)",
        "Kopplung zu T₄ (ca. 80–90 % der Abgabe) und T₃",
        "Im Gewebe: Dejodasen wandeln T₄ in aktives T₃ (oder inaktives rT₃) um – gehemmt durch PTU, Kortikoide, Propranolol, Amiodaron, schwere Krankheit"
      ], titel: "Vom Jod zum wirksamen Hormon" },
      "Halbwertszeit: T₄ ca. **7 Tage**, T₃ ca. **1 Tag**. ==Darum kann eine L-Thyroxin-Gabe bei kurzer Nüchternphase (1–2 Tage) einfach ausfallen.==",
      { h: "Wirkungen" },
      "Steigerung von Grundumsatz, Sauerstoffverbrauch, Wärmebildung (Na⁺/K⁺-ATPase), mehr kardiale **β-Rezeptoren** und Empfindlichkeit für Katecholamine (Tachykardie, Vorhofflimmern), gesteigerte Atemantwort auf Hypoxie/Hyperkapnie; Hemmung bei Unterfunktion.",
      { h: "Hyperthyreose und thyreotoxische Krise" },
      { ul: [
        "Auslöser: Operation, Infektion, Trauma, Jodexposition (Kontrastmittel, Amiodaron), Absetzen der Thyreostatika.",
        "Zeichen: Fieber, Tachykardie/Vorhofflimmern, Herzinsuffizienz, Unruhe/Delir, Durchfall – Differenzialdiagnosen MH, Phäochromozytom, Sepsis, Serotonin-Syndrom.",
        "Therapie: Beta-Blockade (Propranolol, Esmolol), Thyreostatika (Thiamazol bzw. Propylthiouracil, das auch die Konversion hemmt), Hydrocortison, Kühlung, Volumen; Jod erst 1 h nach Thyreostatikum (sonst Substrat); bei Therapieversagen Plasmapherese/Thyreoidektomie.",
        "Elektive Eingriffe erst in euthyreoter Stoffwechsellage."
      ] },
      { h: "Hypothyreose und Myxödemkoma" },
      { ul: [
        "Narkoserelevant: Bradykardie, eingeschränkte Kontraktilität, verminderte Barorezeptorantwort, Hypovolämie, Hypothermie, Hyponatriämie, Hypoglykämie, verzögerte Medikamentenelimination, abgeschwächter Atemantrieb, Makroglossie.",
        "Myxödemkoma (Notfall): Bewusstseinsstörung, Hypothermie, Hypoventilation, Hyponatriämie, Kreislaufversagen → Levothyroxin i.v. (Aufsättigung, z.B. 200–400 µg, bei alten/kardial Kranken vorsichtiger), **zuerst bzw. gleichzeitig Hydrocortison** (begleitende NNR-Insuffizienz möglich), passive Erwärmung, Beatmung."
      ] },
      { h: "Struma und Atemweg" },
      "Große Struma: Trachealverlagerung/-kompression (CT, Flussvolumenkurve), mögliche Atemwegsobstruktion bei Narkoseeinleitung, retrosternale Anteile. Postoperativ nach Thyreoidektomie: Nachblutung mit Atemwegskompression (sofort Wunde eröffnen), Rekurrensparese (beidseits → Stridor), Hypokalzämie (Nebenschilddrüsen)."
    ],
    merke: [
      "T₄ Halbwertszeit ca. 7 Tage, T₃ ca. 1 Tag; Umwandlung im Gewebe.",
      "Thyreostatika hemmen die Thyreoperoxidase; PTU, Kortikoide, Propranolol hemmen die Konversion.",
      "Krise: Beta-Blocker, Thyreostatikum, Hydrocortison, Kühlung; Jod erst nach Thyreostatikum.",
      "Myxödemkoma: Levothyroxin i.v. + Hydrocortison, Erwärmung, Beatmung.",
      "Nach Thyreoidektomie: Nachblutung, Rekurrensparese, Hypokalzämie."
    ],
    warum: [
      { q: "Warum gibt man beim Myxödemkoma Hydrocortison vor bzw. zusammen mit Levothyroxin?", a: "Schilddrüsenhormon steigert den Stoffwechsel und den Cortisolabbau. Besteht gleichzeitig eine (oft unerkannte) Nebennierenrindeninsuffizienz, kann es eine Addison-Krise auslösen." },
      { q: "Warum wird Jod bei der thyreotoxischen Krise erst nach dem Thyreostatikum gegeben?", a: "Jod hemmt zwar kurzfristig die Hormonfreisetzung (Wolff-Chaikoff), liefert aber auch Substrat für neue Hormonsynthese. Ist die Synthese vorher durch Thiamazol/PTU blockiert, überwiegt die hemmende Wirkung." }
    ],
    klinik: [
      "Jodhaltiges Kontrastmittel bei latenter Hyperthyreose: ggf. Prophylaxe mit Perchlorat/Thiamazol nach Rücksprache.",
      "Amiodaron: Hypo- und Hyperthyreose möglich – vor Einleitung Schilddrüsenwerte prüfen, wenn klinisch auffällig.",
      "Low-T₃ bei Intensivpatienten ist meist Anpassung – keine Substitution."
    ],
    selbsttest: [
      { q: "Spezialwissen Hormone: Halbwertszeiten von T4 und T3 und klinische Konsequenz?", a: "T4 ca. 7 Tage, T3 ca. 1 Tag; eine L-Thyroxin-Dosis kann bei kurzer Nüchternphase entfallen." },
      { q: "Spezialwissen Hormone: Welche Substanzen hemmen die periphere Umwandlung von T4 zu T3?", a: "Propylthiouracil, Kortikoide, Propranolol, Amiodaron (auch schwere Krankheit)." },
      { q: "Spezialwissen Hormone: Therapie der thyreotoxischen Krise?", a: "Beta-Blocker (Propranolol/Esmolol), Thyreostatikum (Thiamazol/PTU), Hydrocortison, Kühlung, Volumen; Jod frühestens ca. 1 h nach Thyreostatikum; ggf. Plasmapherese/OP." },
      { q: "Spezialwissen Hormone: Welche Probleme drohen nach Thyreoidektomie?", a: "Nachblutung mit Atemwegskompression, Rekurrensparese (beidseitig: Stridor), Hypokalzämie durch Nebenschilddrüsen-Schädigung." },
      { q: "Spezialwissen Hormone: Therapie des Myxödemkomas?", a: "Levothyroxin i.v. (Aufsättigung, bei Kardiopathie vorsichtig), Hydrocortison, passive Erwärmung, Beatmung bei Hypoventilation, Hyponatriämie/Hypoglykämie behandeln." }
    ]
  });

  CH.push({
    id: "glukose",
    level: "System",
    title: "Glukose, Insulin und diabetische Notfälle",
    leitfrage: "Warum kann ein Patient mit Typ-2-Diabetes unter einem SGLT2-Hemmer eine lebensgefährliche Ketoazidose bei fast normalem Blutzucker entwickeln?",
    einfach: "Insulin ist das einzige Hormon, das den Blutzucker senkt; es schleust Zucker in Muskel und Fett und bremst Fettabbau. Fehlt Insulin fast ganz, verbrennt der Körper Fett und bildet Ketonsäuren – das Blut wird sauer (Ketoazidose). SGLT2-Hemmer lassen Zucker über den Urin verloren gehen; der Blutzucker bleibt dann niedrig, obwohl Insulin fehlt und Ketone entstehen. Deshalb übersieht man diese Ketoazidose leicht.",
    body: [
      { h: "Gegenspieler" },
      { table: { head: ["Hormon", "Wirkung auf Glukose", "Weitere Wirkungen"], rows: [
        ["Insulin", "↓ (GLUT4-Einbau in Muskel/Fett, Glykogen, Hemmung der Glukoneogenese)", "Hemmt Lipolyse und Ketogenese, Kalium in die Zellen, anabol"],
        ["Glukagon", "↑ (Glykogenolyse, Glukoneogenese)", "Ketogenese ↑"],
        ["Adrenalin", "↑", "Lipolyse, Insulinsekretion ↓ (α₂)"],
        ["Cortisol, Wachstumshormon", "↑ (verzögert)", "Insulinresistenz"]
      ] } },
      "==Schon geringe Insulinmengen hemmen die Lipolyse und Ketogenese – daher entsteht eine Ketoazidose v.a. bei (fast) absolutem Insulinmangel (Typ 1) oder bei stark erhöhten Gegenspielern.==",
      { h: "Diabetische Ketoazidose (DKA) vs. hyperosmolares hyperglykämisches Syndrom (HHS)" },
      { table: { head: ["Merkmal", "DKA", "HHS"], rows: [
        ["Typ", "meist Typ 1 (auch Typ 2, SGLT2)", "meist Typ 2, ältere Patienten"],
        ["Glukose", "≥200 mg/dl (Konsens 2024, früher 250) oder bekannter Diabetes; euglykämisch möglich", "sehr hoch, oft >600 mg/dl"],
        ["pH/Bicarbonat", "<7,3 / <18 mmol/l, Anionenlücke ↑", "meist >7,3 / >15"],
        ["Ketone", "deutlich ↑", "allenfalls gering"],
        ["Osmolalität", "variabel", ">320 mosmol/kg"],
        ["Flüssigkeitsdefizit", "ca. 5–7 l", "oft ca. 8–10 l"],
        ["Verlauf", "Stunden", "Tage"]
      ] } },
      { kette: [
        "1. Volumen: balancierte Kristalloide bzw. NaCl 0,9 %, zügig",
        "2. Kalium prüfen: <3,3 mmol/l → erst Kalium ersetzen, dann Insulin (Insulin senkt K⁺)",
        "3. Insulin i.v. (z.B. 0,1 IE/kg/h, ohne Bolus oder nach lokalem Protokoll)",
        "4. Wenn Glukose ca. 250 mg/dl erreicht: Glukose zusetzen, Insulin weiterführen, bis Ketoazidose beseitigt",
        "5. Bicarbonat nur bei sehr schwerer Azidose (pH <6,9–7,0); Phosphat/Magnesium kontrollieren",
        "HHS: vorsichtiger – Osmolalität langsam senken (Hirnödem), Insulin niedriger dosiert und erst nach Volumen"
      ], titel: "Behandlungsreihenfolge" },
      { h: "SGLT2-Hemmer perioperativ" },
      "Hemmen die Glukoserückresorption im proximalen Tubulus (Glukosurie). Risiko der **euglykämischen Ketoazidose** bei Nüchternheit, Stress, reduzierter Insulindosis. Empfehlung: **3 Tage vor dem Eingriff absetzen** (Ertugliflozin 4 Tage; FDA/viele Leitlinien), am OP-Tag nicht nehmen; postoperativ erst bei normaler Ernährung wieder beginnen. Bei Übelkeit/Bauchschmerz/Tachypnoe: BGA mit Ketonen – auch bei normalem Blutzucker.",
      { h: "Perioperatives Blutzucker-Management" },
      { ul: [
        "Ziel meist 6–10 mmol/l (ca. 110–180 mg/dl); Hypoglykämien <4 mmol/l (72 mg/dl) vermeiden.",
        "Präoperativ HbA1c: >8,5 % (69 mmol/mol) → elektive OP ggf. verschieben/optimieren (CPOC 2021).",
        "Typ-1-Diabetes: nie ganz ohne Basalinsulin (sonst Ketoazidose in Stunden).",
        "Dexamethason gegen PONV hebt den Blutzucker für bis zu ca. 24 h."
      ] }
    ],
    merke: [
      "Insulin: einziges blutzuckersenkendes Hormon, hemmt Lipolyse/Ketogenese, senkt K⁺.",
      "DKA: Azidose + Ketone; HHS: extreme Hyperglykämie und Osmolalität, kaum Ketone.",
      "Reihenfolge: Volumen → Kalium prüfen (<3,3 erst ersetzen) → Insulin → Glukose bei ca. 250 mg/dl.",
      "SGLT2-Hemmer: euglykämische Ketoazidose; 3 Tage (Ertugliflozin 4) vorher absetzen.",
      "Perioperativ Ziel 6–10 mmol/l; Typ 1 nie ohne Basalinsulin."
    ],
    warum: [
      { q: "Warum muss bei der DKA das Kalium vor dem Insulin geprüft werden, obwohl es oft hoch gemessen wird?", a: "Das Gesamtkörperkalium ist durch Diurese stark vermindert; der Serumwert ist nur durch Azidose und Insulinmangel nach außen verschoben. Insulin verschiebt Kalium schnell in die Zellen – bei schon niedrigem Ausgangswert droht eine lebensgefährliche Hypokaliämie." },
      { q: "Warum fehlt beim HHS meist die Ketoazidose?", a: "Typ-2-Diabetiker haben noch etwas Insulin. Diese kleine Menge reicht, um Lipolyse und Ketogenese zu bremsen, aber nicht, um die Glukose zu kontrollieren." }
    ],
    klinik: [
      "Unklare metabolische Azidose mit hoher Anionenlücke bei SGLT2-Hemmer-Patient: Ketone messen.",
      "Insulinpumpe/Typ 1: perioperativ mit Diabetesteam planen, Basalrate erhalten.",
      "Bei Notfall-OP mit DKA: wenn möglich erst metabolisch stabilisieren (Volumen, Kalium)."
    ],
    selbsttest: [
      { q: "Spezialwissen Hormone: Wie unterscheiden sich DKA und HHS?", a: "DKA: pH <7,3, Bicarbonat <18, Ketone ↑, Anionenlücke ↑, meist Typ 1, rasch. HHS: Glukose meist >600 mg/dl, Osmolalität >320, kaum Ketone, größeres Volumendefizit, meist ältere Typ-2-Diabetiker." },
      { q: "Spezialwissen Hormone: Behandlungsreihenfolge bei DKA?", a: "Volumen; Kalium prüfen (<3,3 mmol/l erst ersetzen); Insulin i.v. ca. 0,1 IE/kg/h; Glukose zusetzen ab ca. 250 mg/dl; Bicarbonat nur bei pH <6,9–7,0." },
      { q: "Spezialwissen Hormone: Warum verursachen SGLT2-Hemmer eine euglykämische Ketoazidose und wann absetzen?", a: "Glukosurie hält den Blutzucker niedrig, während Insulinmangel/Stress Ketogenese antreibt; 3 Tage vor der OP absetzen (Ertugliflozin 4 Tage)." },
      { q: "Spezialwissen Hormone: Perioperatives Blutzuckerziel?", a: "Ca. 6–10 mmol/l (110–180 mg/dl), Hypoglykämie <4 mmol/l vermeiden." },
      { q: "Spezialwissen Hormone: Warum darf ein Typ-1-Diabetiker perioperativ nie ganz ohne Basalinsulin sein?", a: "Ohne Insulin setzt ungebremste Lipolyse und Ketogenese ein – Ketoazidose innerhalb weniger Stunden." }
    ]
  });

  window.__addSpezialOrgan({
    id: "hormone",
    title: "Hormone & Stressreaktion",
    subtitle: "Rezeptoren und Achsen, chirurgische Stressantwort, Nebenniere, Schilddrüse und Glukosestoffwechsel",
    subtopic: "temperatur-endokrin",
    chapters: CH,
    sources: [
      "Desborough JP. The stress response to trauma and surgery. Br J Anaesth 2000;85:109–117.",
      "Finnerty CC, Mabvuure NT, Ali A, Kozar RA, Herndon DN. The surgically induced stress response. JPEN J Parenter Enteral Nutr 2013;37(5 Suppl):21S–29S.",
      "Woodcock T, Barker P, Daniel S, et al. Guidelines for the management of glucocorticoids during the peri-operative period for patients with adrenal insufficiency. Anaesthesia 2020;75:654–663.",
      "Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab 2016;101:364–389.",
      "Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid 2016;26:1343–1421.",
      "Umpierrez GE, Davis GM, ElSayed NA, et al. Hyperglycemic crises in adults with diabetes: a consensus report. Diabetes Care 2024;47:1257–1275.",
      "Centre for Perioperative Care. Guideline for perioperative care for people with diabetes mellitus undergoing elective and emergency surgery. CPOC 2021 (Update 2026).",
      "U.S. Food and Drug Administration. FDA revises labels of SGLT2 inhibitors for diabetes to include warnings about too much acid in the blood (2020).",
      "NICE-SUGAR Study Investigators. Intensive versus conventional glucose control in critically ill patients. N Engl J Med 2009;360:1283–1297.",
      "Lehrbücher: Boron WF, Boulpaep EL. Medical Physiology, 3. Aufl. 2017; Miller's Anesthesia, 10. Aufl. (Kapitel Endokrine Erkrankungen)."
    ]
  });
})();
