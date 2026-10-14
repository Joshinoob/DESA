// Curriculum-Struktur: orientiert am EDAIC/DESA-Syllabus (Teil 1: Basiswissenschaften, Teil 2: Klinik)
window.CURRICULUM = [
  {
    id: "anatomie",
    title: "Anatomie",
    part: 1,
    subtopics: [
      { id: "atemwege", title: "Atemwege" },
      { id: "wirbelsaeule", title: "Wirbelsäule & Neuraxial" },
      { id: "gefaesse-nerven", title: "Gefäßzugänge & Nervenblockaden" },
      { id: "thorax-herz", title: "Thorax & Herz" }
    ]
  },
  {
    id: "physiologie",
    title: "Physiologie",
    part: 1,
    subtopics: [
      { id: "atmung", title: "Atmung" },
      { id: "kreislauf", title: "Kreislauf" },
      { id: "niere-saeure-basen", title: "Niere & Säure-Basen" },
      { id: "leber-stoffwechsel", title: "Leber & Stoffwechsel" },
      { id: "zns", title: "ZNS & Hirndruck" },
      { id: "temperatur-endokrin", title: "Temperatur & Endokrinium" },
      { id: "blut-gerinnung", title: "Blut & Gerinnung" },
      { id: "nerv-muskel", title: "Nerv & Muskel" }
    ]
  },
  {
    id: "pharmakologie",
    title: "Pharmakologie",
    part: 1,
    subtopics: [
      { id: "pk-pd", title: "Allgemeine Pharmakokinetik/-dynamik" },
      { id: "hypnotika", title: "i.v. Hypnotika" },
      { id: "inhalationsanaesthetika", title: "Inhalationsanästhetika" },
      { id: "muskelrelaxanzien", title: "Muskelrelaxanzien & Reversal" },
      { id: "opioide", title: "Opioide" },
      { id: "lokalanaesthetika", title: "Lokalanästhetika" },
      { id: "kardiovaskulaer", title: "Kardiovaskuläre Pharmaka" },
      { id: "sonstige-pharmaka", title: "Antiemetika & Antikoagulanzien" },
      { id: "medikamenten-steckbriefe", title: "Medikamenten-Steckbriefe (Wirkstoffprofile)" }
    ]
  },
  {
    id: "physik-messtechnik",
    title: "Physik & Messtechnik",
    part: 1,
    subtopics: [
      { id: "gasgesetze", title: "Gasgesetze & Verdampfer" },
      { id: "monitoring", title: "Monitoring" },
      { id: "elektrische-sicherheit", title: "Elektrische Sicherheit" },
      { id: "statistik-ebm", title: "Statistik & EbM" },
      { id: "beatmung-narkosegeraet", title: "Beatmungsformen & Narkosegerät" },
      { id: "ultraschall-echo", title: "Ultraschall, POCUS & Echo" }
    ]
  },
  {
    id: "allgemeinanaesthesie",
    title: "Allgemeinanästhesie",
    part: 2,
    subtopics: [
      { id: "praeoperativ", title: "Prämedikation & präop. Evaluation" },
      { id: "atemwegsmanagement", title: "Atemwegsmanagement" },
      { id: "narkosefuehrung", title: "Narkoseführung & Aufwachraum" },
      { id: "begleiterkrankungen", title: "Begleiterkrankungen" },
      { id: "geriatrie", title: "Alte Patienten (Geriatrie)" },
      { id: "sedierung-ausserhalb-op", title: "Sedierung & Anästhesie außerhalb des OP" }
    ]
  },
  {
    id: "regional-schmerz",
    title: "Regionalanästhesie & Schmerzmedizin",
    part: 2,
    subtopics: [
      { id: "neuraxial-verfahren", title: "Spinal/Epidural/Kombiniert" },
      { id: "periphere-blockaden", title: "Periphere Nervenblockaden" },
      { id: "schmerztherapie", title: "Akuter & chronischer Schmerz" }
    ]
  },
  {
    id: "intensivmedizin",
    title: "Intensivmedizin",
    part: 2,
    subtopics: [
      { id: "beatmung", title: "Beatmung & ARDS" },
      { id: "sepsis-schock", title: "Sepsis & Schock" },
      { id: "sedierung-delir", title: "Sedierung & Delir" },
      { id: "nierenersatz", title: "Nierenersatzverfahren" },
      { id: "ernaehrung", title: "Ernährung & Metabolik" },
      { id: "post-intensive-care-syndrom", title: "Post-Intensive Care Syndrom (PICS)" }
    ]
  },
  {
    id: "notfall-reanimation",
    title: "Notfallmedizin & Reanimation",
    part: 2,
    subtopics: [
      { id: "als-bls", title: "ALS/BLS" },
      { id: "trauma", title: "Traumamanagement" },
      { id: "anaphylaxie-transfusion", title: "Anaphylaxie & Massentransfusion" },
      { id: "toxikologie-verbrennungen", title: "Toxikologie & Verbrennungen" },
      { id: "kinder-neugeborenen-reanimation", title: "Kinder- & Neugeborenenreanimation" },
      { id: "praeklinik-manv", title: "Präklinik, Notarzt & MANV" }
    ]
  },
  {
    id: "spezielle-anaesthesie",
    title: "Spezielle Anästhesie",
    part: 2,
    subtopics: [
      { id: "geburtshilfe", title: "Geburtshilfliche Anästhesie" },
      { id: "kinderanaesthesie", title: "Kinderanästhesie" },
      { id: "kardio-thorax", title: "Kardio-/Thoraxanästhesie" },
      { id: "neuroanaesthesie", title: "Neuroanästhesie" },
      { id: "hno-augen-ambulant", title: "HNO/Augen & ambulante Anästhesie" },
      { id: "orthopaedie-gefaesschirurgie", title: "Orthopädie & Gefäßchirurgie" },
      { id: "transplantationsanaesthesie", title: "Transplantationsanästhesie" },
      { id: "schwangerschaft-adipositas", title: "Nicht-geburtshilfliche OP in der Schwangerschaft & Adipositas" }
    ]
  },
  {
    id: "periop-sicherheit-ethik",
    title: "Perioperative Medizin, Sicherheit & Ethik",
    part: 2,
    subtopics: [
      { id: "patientensicherheit", title: "Patientensicherheit" },
      { id: "gerinnung-transfusion", title: "Gerinnungsmanagement & Transfusion" },
      { id: "ethik-recht", title: "Ethik & Recht" },
      { id: "haemostase-stoerungen", title: "Angeborene & erworbene Gerinnungsstörungen" }
    ]
  },
  {
    // Zusätzliches Modul speziell für die deutsche Facharztprüfung Anästhesiologie:
    // deutschlandspezifisches Recht/Regelwerk, das die europäische EDAIC/DESA-Prüfung
    // nicht abdeckt (dort zählen nur die klinischen Inhalte, nicht nationales Recht).
    id: "deutsches-recht",
    title: "Deutsches Recht & Facharzt-Weiterbildung",
    part: 2,
    subtopics: [
      { id: "btm-transfusionsrecht", title: "Betäubungsmittel- & Transfusionsrecht" },
      { id: "hirntod-transplantationsrecht", title: "Transplantationsgesetz & Hirntod-Feststellung" },
      { id: "medizinprodukte-arbeitsschutz", title: "Medizinprodukte- & Arbeitsschutzrecht" },
      { id: "rettungsdienstrecht", title: "Rettungsdienst- & Notarztrecht" },
      { id: "weiterbildung-qm", title: "Weiterbildungsordnung & Qualitätsmanagement" },
      { id: "patientenrechte-haftung", title: "Patientenrechte, Haftung & Betreuungsrecht" }
    ]
  }
];
