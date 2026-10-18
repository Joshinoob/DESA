// Wirkketten der Medikamenten-Steckbriefe: vom Rezeptor bzw. Zielmolekül über die
// Signalschritte in der Zelle bis zur Organ- und klinischen Wirkung – plus "Was sich daraus
// erklärt" (Nebenwirkungen und Besonderheiten, die aus demselben Mechanismus folgen).
// Wird beim Laden an card.profile.wirkkette / card.profile.wirkfolgen der Steckbriefe aus
// data/drugcards.js gehängt (Schlüssel = ID ohne "fc-drug-"). Markierung ==...== = Kernschritt.
// Grundlage: Standardlehrbücher der Pharmakologie/Anästhesie (u.a. Goodman & Gilman's The
// Pharmacological Basis of Therapeutics; Stoelting's Pharmacology and Physiology in Anesthetic
// Practice; Miller's Anesthesia) und Fachinformationen. Wo der Mechanismus nicht abschließend
// geklärt ist, steht das ausdrücklich dabei.
(function () {
  const W = {};

  // ---------- Bausteine für Substanzklassen ----------
  const GABA_A_FOLGE = "Cl⁻ strömt in die Nervenzelle → ==Hyperpolarisation== → die Schwelle für Aktionspotenziale wird schwerer erreicht";
  const NETZWERK = "Gehemmt werden v.a. kortikale und thalamokortikale Netzwerke sowie die aufsteigende Weckaktivierung → Kommunikation zwischen Hirnregionen bricht zusammen";

  function opioid(erster, extraFolgen) {
    return {
      kette: [
        erster,
        "µ-Rezeptor ist G-Protein-gekoppelt (Gi/o) → Adenylatcyclase gehemmt → cAMP ↓",
        "Präsynaptisch (Hinterhorn, Endigung nozizeptiver C-/Aδ-Fasern): spannungsabhängige Ca²⁺-Kanäle schließen → ==weniger Freisetzung von Glutamat und Substanz P==",
        "Postsynaptisch: G-Protein-gekoppelte K⁺-Kanäle (GIRK) öffnen → K⁺-Ausstrom → Hyperpolarisation des Hinterhornneurons",
        "Supraspinal (periaquäduktales Grau, rostrale ventromediale Medulla): Hemmung GABAerger Interneurone → ==Enthemmung absteigender schmerzhemmender Bahnen==",
        "Weniger Schmerzsignal erreicht Thalamus und Kortex, zusätzlich veränderte affektive Schmerzbewertung → Analgesie"
      ],
      folgen: [
        "Atemdepression: µ-Rezeptoren im Atemrhythmusgenerator (Prä-Bötzinger-Komplex) und an Chemorezeptoren → langsamere Atmung, flachere CO₂-Antwortkurve.",
        "Miosis: Enthemmung des Edinger-Westphal-Kerns (Parasympathikus zum M. sphincter pupillae).",
        "Übelkeit/Erbrechen: Stimulation der Chemorezeptor-Triggerzone (Area postrema, außerhalb der Blut-Hirn-Schranke).",
        "Obstipation, Harnverhalt: µ-Rezeptoren im enterischen Nervensystem bzw. an der Blase hemmen Motilität/Entleerung.",
        "Bradykardie: Steigerung des Vagotonus im Hirnstamm; Thoraxrigidität bei schneller hoher Dosis (supraspinal vermittelt).",
        "Toleranz: Rezeptor-Phosphorylierung, β-Arrestin-vermittelte Internalisierung und Gegenregulation (u.a. NMDA-System)."
      ].concat(extraFolgen || [])
    };
  }

  function benzo(extra, extraFolgen) {
    return {
      kette: [
        "Bindung an die Benzodiazepin-Bindungsstelle zwischen α- und γ2-Untereinheit des GABA-A-Rezeptors (Chloridkanal)",
        "Positive allosterische Modulation: ==GABA bindet fester → der Kanal öffnet häufiger== (keine Öffnung ohne GABA)",
        GABA_A_FOLGE,
        "α1-haltige Rezeptoren: Sedierung, Amnesie, antikonvulsive Wirkung; α2/α3-haltige: Anxiolyse, Muskelrelaxation (spinal)"
      ].concat(extra || []),
      folgen: [
        "Deckeneffekt allein: Wirkung braucht körpereigenes GABA → in Monotherapie relativ sicher, aber mit Opioiden/Alkohol/Propofol überadditive Atemdepression.",
        "Antagonisierbar durch Flumazenil (verdrängt kompetitiv von derselben Bindungsstelle).",
        "Paradoxe Erregung (v.a. Kinder, Ältere) und Delirrisiko bei Älteren (Hemmung cholinerg-glutamaterger Netzwerke)."
      ].concat(extraFolgen || [])
    };
  }

  function lokalanaesthetikum(extraKette, extraFolgen) {
    return {
      kette: [
        "Injektion als Salz (sauer, wasserlöslich) → im Gewebe (pH 7,4) Gleichgewicht zwischen geladener Form und ungeladener Base (bestimmt durch den pKa)",
        "==Ungeladene Base diffundiert durch Nervenscheide und Zellmembran==",
        "Im Axoplasma erneut protoniert → das Kation bindet von innen an den spannungsabhängigen Na⁺-Kanal (Nav, Bindungsstelle in der Pore, bevorzugt offener/inaktivierter Zustand)",
        "Na⁺-Einstrom blockiert → Depolarisation erreicht die Schwelle nicht → ==kein Aktionspotenzial, Leitung unterbrochen==",
        "Dünne und gering myelinisierte Fasern zuerst (Sympathikus → Schmerz/Temperatur → Berührung → Motorik)"
      ].concat(extraKette || []),
      folgen: [
        "Saures (entzündetes) Gewebe → mehr geladene Form außen → schlechtere Wirkung.",
        "Systemische Toxizität (LAST): zuerst hemmende Interneurone im ZNS blockiert → Enthemmung → Krampfanfall; höhere Spiegel blockieren kardiale Na⁺-Kanäle → breiter QRS, Arrhythmien, Kontraktilität ↓.",
        "Use-Dependence: häufig feuernde Fasern/Zellen (Schmerz, Tachykardie) werden stärker blockiert."
      ].concat(extraFolgen || [])
    };
  }

  function ndmr(extraFolgen) {
    return {
      kette: [
        "Kompetitive Bindung an die α-Untereinheiten des nikotinischen Acetylcholin-Rezeptors der motorischen Endplatte (ohne ihn zu öffnen)",
        "Der Kanal öffnet nur, wenn beide α-Stellen ACh tragen → ==schon ein besetzter Platz verhindert die Öffnung==",
        "Endplattenpotenzial bleibt unter der Schwelle → kein Muskel-Aktionspotenzial → keine Calciumfreisetzung → schlaffe Lähmung",
        "Wirkung erst nach Besetzung von ca. 70–75 % der Rezeptoren sichtbar (Sicherheitsreserve), vollständig ab ca. 90–95 %"
      ],
      folgen: [
        "Fade im TOF und posttetanische Potenzierung: Blockade präsynaptischer nikotinischer Rezeptoren, die bei Serienreizen die ACh-Nachlieferung fördern.",
        "Aufhebung durch mehr ACh (Cholinesterasehemmer) – nur bei beginnender Erholung wirksam.",
        "Verstärkt durch Volatila, Magnesium (weniger ACh-Freisetzung), Aminoglykoside, Hypothermie, Azidose."
      ].concat(extraFolgen || [])
    };
  }

  function nsar(selektiv, extraFolgen) {
    return {
      kette: [
        selektiv ? "Selektive Hemmung der Cyclooxygenase-2 (induzierbar bei Entzündung; COX-1 weitgehend ausgespart)" : "Reversible Hemmung der Cyclooxygenasen COX-1 und COX-2 (kompetitiv am Arachidonsäure-Kanal des Enzyms)",
        "Arachidonsäure wird nicht zu Prostaglandin H₂ umgesetzt → ==Prostaglandin E₂ und Prostacyclin ↓==",
        "Peripher: Prostaglandine sensibilisieren Nozizeptoren normalerweise (senken die Schwelle von TRPV1/Nav-Kanälen) → Sensibilisierung entfällt → weniger Schmerz und Entzündung",
        "Spinal: weniger PGE₂ im Hinterhorn → weniger zentrale Sensibilisierung",
        "Hypothalamus: weniger PGE₂ → Sollwert der Temperatur sinkt → Fiebersenkung"
      ],
      folgen: (selektiv ? [
        "Weniger Magenschleimhaut- und Plättchenwirkung (COX-1 geschont).",
        "Gefäßendothel bildet über COX-2 Prostacyclin (hemmt Plättchen, erweitert Gefäße); Thromboxan der Plättchen (COX-1) bleibt → Gleichgewicht verschiebt sich prothrombotisch → kardiovaskuläres Risiko."
      ] : [
        "Magen-Darm: Prostaglandine schützen die Schleimhaut (Schleim, Bicarbonat, Durchblutung) → Ulkus-/Blutungsrisiko.",
        "Thrombozyten: Thromboxan A₂ ↓ (reversibel, solange Substanz da ist) → Blutungsneigung.",
        "Bronchospasmus bei Analgetika-Asthma: Arachidonsäure wird vermehrt zu Leukotrienen umgeleitet."
      ]).concat([
        "Niere: Prostaglandine erweitern das Vas afferens, besonders bei Hypovolämie/Herzinsuffizienz → unter NSAR GFR ↓, Natrium-/Wasserretention, Hyperkaliämie.",
        "Schwangerschaft: Prostaglandine halten den Ductus arteriosus offen → ab ca. 28. SSW kontraindiziert."
      ]).concat(extraFolgen || [])
    };
  }

  // ---------- Hypnotika & Sedativa ----------
  W.propofol = {
    kette: [
      "Bindung an eine eigene Bindungsstelle zwischen den Untereinheiten (v.a. β-Untereinheit) des GABA-A-Rezeptors",
      "Positive allosterische Modulation: GABA öffnet den Kanal länger; in hoher Konzentration öffnet Propofol ihn auch direkt",
      GABA_A_FOLGE,
      NETZWERK,
      "==Bewusstlosigkeit und Amnesie== – keine relevante Analgesie"
    ],
    folgen: [
      "Hypotonie: zentral verminderter Sympathikotonus + direkte Gefäßerweiterung (arteriell und venös) + leichte negative Inotropie → Vor- und Nachlast sinken; stark bei Hypovolämie und im Alter.",
      "Atemdepression bis Apnoe: Hemmung der Atemzentren, flachere CO₂-Antwort.",
      "Hirndruck ↓: Hirnstoffwechsel sinkt → über die Kopplung sinken Durchblutung und Blutvolumen im Schädel.",
      "Gedämpfte Atemwegsreflexe → gut geeignet für Larynxmaske; antiemetisch (Mechanismus nicht abschließend geklärt).",
      "Injektionsschmerz: freies Propofol in der wässrigen Phase reizt Venenendothel (Lidocain-Vorgabe lindert)."
    ]
  };
  W.thiopental = {
    kette: [
      "Bindung an den GABA-A-Rezeptor (Barbiturat-Bindungsstelle)",
      "==Verlängert die Öffnungsdauer== des Chloridkanals; in hoher Dosis direkte Öffnung ohne GABA (daher kein Deckeneffekt)",
      GABA_A_FOLGE,
      "Zusätzlich Hemmung erregender Glutamat-Rezeptoren (AMPA/Kainat)",
      NETZWERK + " → Bewusstlosigkeit innerhalb einer Kreislaufzeit"
    ],
    folgen: [
      "Hirnstoffwechsel und Hirndruck ↓, antikonvulsiv – Einsatz bei therapierefraktärem Status epilepticus und Hirndruck (Burst-Suppression).",
      "Hypotonie: Venodilatation (Vorlast ↓) und negative Inotropie.",
      "Akute Porphyrie: induziert die δ-Aminolävulinsäure-Synthase → mehr Porphyrinvorstufen → Krise.",
      "Stark alkalische Lösung (pH ca. 10,5): paravasal Nekrose, intraarteriell Kristallbildung mit Ischämie.",
      "Kurze Wirkung nach Einzeldosis durch Umverteilung (nicht Abbau) → bei wiederholter Gabe Kumulation."
    ]
  };
  W.etomidat = {
    kette: [
      "Bindung an GABA-A-Rezeptoren mit β2-/β3-Untereinheit (das R-Enantiomer ist wirksam)",
      "Positive allosterische Modulation → längere Chloridkanal-Öffnung",
      GABA_A_FOLGE,
      NETZWERK + " → Hypnose ohne Analgesie"
    ],
    folgen: [
      "Kreislaufstabil: kaum Sympatholyse, keine relevante Gefäßerweiterung oder Myokarddepression → Einleitung bei kardial instabilen Patienten.",
      "Nebennierenrinde: der Imidazolring bindet an das Häm der 11β-Hydroxylase → Cortisolsynthese bis ca. 24 h gehemmt (Bedeutung bei Sepsis umstritten).",
      "Myoklonien: Enthemmung subkortikaler Strukturen bei Wirkungsbeginn (kein Krampfanfall); Vorgabe von Opioid/Benzodiazepin mindert sie.",
      "Mehr Übelkeit/Erbrechen als Propofol; Injektionsschmerz (Lösungsmittel)."
    ]
  };
  W.ketamin = {
    kette: [
      "Gelangt durch den geöffneten NMDA-Rezeptorkanal in die Pore und ==blockiert ihn von innen== (nicht-kompetitiver 'Open-Channel'-Block an der Phencyclidin-Bindungsstelle)",
      "Glutamat kann den Kanal nicht mehr nutzen → Na⁺- und Ca²⁺-Einstrom ↓",
      "Thalamokortikale und limbische Netzwerke werden funktionell entkoppelt → 'dissoziative' Anästhesie (Augen offen, Nystagmus, keine Reaktion)",
      "Im Hinterhorn: NMDA-vermittelte Verstärkung ('Wind-up', zentrale Sensibilisierung) wird blockiert → ==starke Analgesie, anti-hyperalgetisch==",
      "Zusätzliche Wirkorte: Opioid-, HCN1-, monoaminerge Systeme (Hemmung der Noradrenalin-Wiederaufnahme)"
    ],
    folgen: [
      "Blutdruck und Herzfrequenz ↑: zentrale Sympathikusaktivierung + Hemmung der Katecholamin-Wiederaufnahme → indirekt sympathomimetisch.",
      "Direkt negativ inotrop: wird sichtbar, wenn die Katecholaminspeicher erschöpft sind (lange Schockphase) – dann kann Ketamin den Kreislauf verschlechtern.",
      "Bronchodilatation (Katecholamine) → günstig bei Asthma/Status asthmaticus.",
      "Schutzreflexe und Atmung bleiben weitgehend erhalten, aber Hypersalivation (cholinerg) und Laryngospasmus möglich.",
      "Psychomimetische Effekte (Träume, Halluzinationen): Enthemmung kortikaler Glutamat-Freisetzung durch Blockade NMDA-abhängiger hemmender Interneurone; Benzodiazepin mindert.",
      "BIS steigt eher (schnelle Gamma-Aktivität) → EEG-Indizes unterschätzen die Narkosetiefe."
    ]
  };
  W.esketamin = {
    kette: [
      "S(+)-Enantiomer bindet ca. 2–4-mal stärker an die Phencyclidin-Bindungsstelle im NMDA-Kanal als das R(−)-Enantiomer",
      "==Open-Channel-Block des NMDA-Rezeptors== → Na⁺-/Ca²⁺-Einstrom ↓",
      "Thalamokortikale Entkopplung → dissoziative Anästhesie; spinal Blockade von Wind-up → Analgesie",
      "Gleiche Wirkung mit etwa der halben Dosis des Razemats"
    ],
    folgen: [
      "Sympathomimetik, Bronchodilatation, Hypersalivation und Psychomimetik wie beim Razemat (→ Ketamin); durch niedrigere Dosis schnelleres Erwachen.",
      "Antidepressive Wirkung (Nasenspray zugelassen): rasche synaptische Plastizität nach Glutamat-Schub (AMPA-Aktivierung, BDNF) – Mechanismus nicht abschließend geklärt."
    ]
  };
  W.midazolam = benzo([
    "Kurz wirksam durch hohe Fettlöslichkeit bei physiologischem pH (Imidazolring schließt sich) → schneller Übertritt ins Gehirn"
  ], [
    "Abbau über CYP3A4 zu α-Hydroxy-Midazolam (wirksam, renal ausgeschieden) → verlängert bei CYP3A4-Hemmern (Clarithromycin, Azole, Ritonavir) und Niereninsuffizienz.",
    "Bei Langzeitsedierung Kumulation (kontextsensitive Halbwertszeit steigt)."
  ]);
  W.diazepam = benzo([
    "Lang wirksam: aktive Metaboliten (Desmethyldiazepam, Halbwertszeit bis ca. 100 h)"
  ], [
    "Venenreizung durch Lösungsmittel (Propylenglykol) bzw. Emulsionsform weniger.",
    "Bei Älteren und Leberinsuffizienz stark verlängerte Wirkung → Sturz- und Delirrisiko."
  ]);
  W.lorazepam = benzo([
    "Abbau nur durch Glucuronidierung (Phase II), keine aktiven Metaboliten"
  ], [
    "Bei Leberzirrhose günstiger als Midazolam/Diazepam (Glucuronidierung bleibt länger erhalten).",
    "Status epilepticus: lange Verweildauer am Rezeptor im Gehirn trotz geringerer Fettlöslichkeit → anhaltende antikonvulsive Wirkung."
  ]);
  W.remimazolam = benzo([
    "Esterbindung im Molekül → ==rascher Abbau durch Carboxylesterase 1 (Leber)== zu einem praktisch unwirksamen Metaboliten"
  ], [
    "Kurze, gut steuerbare Wirkung, organunabhängiger als Midazolam (keine CYP3A4-Abhängigkeit).",
    "Weniger Blutdruckabfall als Propofol (geringere Sympatholyse, keine direkte Vasodilatation)."
  ]);
  W.dexmedetomidin = {
    kette: [
      "Agonist an α2-Adrenozeptoren (α2:α1-Selektivität ca. 1600:1), v.a. α2A im Locus coeruleus",
      "α2 ist Gi-gekoppelt → cAMP ↓, K⁺-Kanäle (GIRK) öffnen, Ca²⁺-Kanäle schließen",
      "Neurone des Locus coeruleus hyperpolarisieren → ==weniger Noradrenalin-Freisetzung==",
      "Der hemmende Einfluss auf schlaffördernde Kerne (ventrolateraler präoptischer Kern) fällt weg → Zustand ähnlich dem natürlichen Non-REM-Schlaf",
      "Spinal: α2 im Hinterhorn hemmt Transmitterfreisetzung → Analgesie (opioidsparend)"
    ],
    folgen: [
      "'Kooperative' Sedierung: durch Ansprache erweckbar, kaum Atemdepression (Atemzentren nicht GABA-vermittelt gehemmt).",
      "Bradykardie und Hypotonie: zentrale Sympatholyse und präsynaptisch weniger Noradrenalin.",
      "Bei schnellem Bolus zunächst Hypertonie: periphere α2B-Rezeptoren an Gefäßmuskeln → Vasokonstriktion, bis die zentrale Wirkung überwiegt.",
      "Weniger Shivering (Senkung der Zitterschwelle) und Diurese (ADH-Freisetzung/-Wirkung ↓)."
    ]
  };
  W.clonidin = {
    kette: [
      "Agonist an α2-Adrenozeptoren (α2:α1 ca. 200:1) und Imidazolin-I1-Rezeptoren in der rostralen ventrolateralen Medulla",
      "Gi-Kopplung → cAMP ↓, Hyperpolarisation sympathoexzitatorischer Neurone in der Medulla",
      "==Sympathischer Ausstrom ↓==, präsynaptisch weniger Noradrenalin-Freisetzung",
      "Blutdruck und Herzfrequenz sinken; Sedierung und Analgesie (Locus coeruleus, spinal)"
    ],
    folgen: [
      "Prämedikation/Analgosedierung, Dämpfung von Entzugssymptomen (Opioide, Alkohol) – die Entzugssymptome sind sympathisch vermittelt.",
      "Rebound-Hypertonie bei abruptem Absetzen: hochregulierte Rezeptoren und plötzlich wieder hoher Sympathikotonus.",
      "Verlängert Regionalanästhesien (Hyperpolarisation, Hemmung von Ih-Strömen in Nerven).",
      "Mundtrockenheit, Bradykardie, Hypotonie."
    ]
  };

  // ---------- Opioide ----------
  W.fentanyl = opioid("Agonist am µ-Opioidrezeptor (hohe Affinität, ca. 80–100-fach potenter als Morphin)", [
    "Sehr fettlöslich → schneller Wirkbeginn; nach Mehrfachgabe/Infusion Speicherung im Fett → kontextsensitive Halbwertszeit steigt stark.",
    "Kaum Histaminfreisetzung → kreislaufstabil."
  ]);
  W.sufentanil = opioid("Agonist am µ-Opioidrezeptor mit sehr hoher Affinität (ca. 500–1000-fach potenter als Morphin)", [
    "Günstigere kontextsensitive Halbwertszeit als Fentanyl bei mittellangen Infusionen.",
    "Ausgeprägte Dämpfung sympathischer Reaktionen auf Intubation/Schnitt."
  ]);
  W.remifentanil = opioid("Agonist am µ-Opioidrezeptor (Potenz ähnlich Fentanyl)", [
    "Esterbindung → ==Abbau durch unspezifische Esterasen in Blut und Gewebe== → kontextsensitive Halbwertszeit ca. 3–4 min, unabhängig von Infusionsdauer, Leber und Niere.",
    "Nach Infusionsende rascher Analgesieverlust → rechtzeitig Folgeanalgesie geben; opioidinduzierte Hyperalgesie (NMDA-Aktivierung) möglich.",
    "Bradykardie/Hypotonie und Thoraxrigidität bei Bolus."
  ]);
  W.alfentanil = opioid("Agonist am µ-Opioidrezeptor (ca. 10–25-fach potenter als Morphin)", [
    "Niedriger pKa (ca. 6,5) → bei pH 7,4 überwiegend ungeladen → ==sehr schneller Wirkbeginn== (ca. 1 min) trotz geringerer Fettlöslichkeit.",
    "Abbau über CYP3A4 → stark verlängert durch CYP3A4-Hemmer."
  ]);
  W.morphin = opioid("Agonist am µ-Opioidrezeptor (Referenzsubstanz, Potenz 1)", [
    "Hydrophil → verzögerter Übertritt ins Gehirn, Wirkmaximum erst nach ca. 15–20 min (Gefahr der Überdosierung beim schnellen Nachtitrieren).",
    "Histaminfreisetzung aus Mastzellen → Vasodilatation, Hypotonie, Juckreiz, ggf. Bronchospasmus.",
    "Aktiver Metabolit Morphin-6-Glucuronid (renal) → Kumulation und Atemdepression bei Niereninsuffizienz."
  ]);
  W.piritramid = opioid("Agonist am µ-Opioidrezeptor (Potenz ca. 0,7 von Morphin)", [
    "Weniger Histaminfreisetzung und Übelkeit als Morphin; Standard in der postoperativen Titration in Deutschland.",
    "Keine relevanten aktiven Metaboliten."
  ]);
  W.oxycodon = opioid("Agonist am µ-Opioidrezeptor (Potenz ca. 1,5–2 von Morphin oral)", [
    "Hohe orale Bioverfügbarkeit (ca. 60–87 %) → gut für Retardpräparate; Abbau über CYP3A4 (Hemmer erhöhen Spiegel) und CYP2D6.",
    "Kombination mit Naloxon (oral) mindert die Obstipation: Naloxon wirkt im Darm, wird aber beim ersten Leberdurchgang fast vollständig abgebaut."
  ]);
  W.hydromorphon = opioid("Agonist am µ-Opioidrezeptor (ca. 5–7-fach potenter als Morphin i.v.)", [
    "Keine relevanten aktiven Glucuronide mit µ-Wirkung → bei Niereninsuffizienz günstiger als Morphin (Hydromorphon-3-Glucuronid kann aber neuroexzitatorisch kumulieren)."
  ]);
  W.pethidin = opioid("Agonist am µ-Opioidrezeptor (Potenz ca. 0,1 von Morphin), zusätzlich κ-Agonismus", [
    "Anti-Shivering: über κ-Rezeptoren und α2B-Wirkung (stärker als andere Opioide).",
    "Anticholinerg und lokalanästhetisch wirksam (Na⁺-Kanal-Block); Tachykardie statt Bradykardie.",
    "Metabolit Norpethidin (renal) senkt die Krampfschwelle → nicht für längere Gabe/Niereninsuffizienz.",
    "Hemmt die Serotonin-Wiederaufnahme → mit MAO-Hemmern Serotoninsyndrom (kontraindiziert)."
  ]);
  W.tramadol = {
    kette: [
      "Razemat mit zwei Wirkprinzipien: (+)-Tramadol hemmt die Serotonin-, (−)-Tramadol die Noradrenalin-Wiederaufnahme",
      "Mehr Noradrenalin und Serotonin im synaptischen Spalt der absteigenden Bahnen → im Hinterhorn α2-Rezeptoren (Gi) aktiviert → ==Hemmung der Schmerzweiterleitung==",
      "Über CYP2D6 entsteht O-Desmethyltramadol (M1) → ==wichtigster µ-Agonist== (ca. 200-fach höhere µ-Affinität als Tramadol)",
      "µ-Kette wie bei anderen Opioiden: Gi → cAMP ↓, präsynaptisch Ca²⁺-Kanäle zu, postsynaptisch K⁺-Kanäle auf → Analgesie"
    ],
    folgen: [
      "Wirkung hängt vom CYP2D6-Status ab: Langsam-Metabolisierer schwache Analgesie, Ultraschnell-Metabolisierer Atemdepressionsrisiko; CYP2D6-Hemmer (Fluoxetin, Paroxetin) schwächen.",
      "Serotonerg: mit SSRI/MAO-Hemmern Serotoninsyndrom; senkt die Krampfschwelle.",
      "Starke Übelkeit (serotonerg, 5-HT3) – häufigste Nebenwirkung.",
      "Geringere Atemdepression bei üblicher Dosis als reine µ-Agonisten."
    ]
  };
  W.tapentadol = {
    kette: [
      "Eine Substanz mit zwei Wirkprinzipien: µ-Agonist (schwächer als Morphin) UND Hemmer der Noradrenalin-Wiederaufnahme",
      "µ-Kette: Gi → cAMP ↓, Ca²⁺-Kanäle zu, K⁺-Kanäle auf → weniger Transmitterfreisetzung im Hinterhorn",
      "Mehr Noradrenalin in absteigenden Bahnen → spinale α2-Rezeptoren → ==zusätzliche Schmerzhemmung, besonders bei neuropathischem Schmerz==",
      "Beide Wirkungen addieren sich, ohne Umwandlung durch CYP2D6"
    ],
    folgen: [
      "Weniger gastrointestinale Nebenwirkungen als reine µ-Agonisten gleicher Wirkstärke (geringerer µ-Anteil).",
      "Kaum serotonerg, aber mit MAO-Hemmern kontraindiziert (Noradrenalin-Kumulation → Blutdruckkrisen)."
    ]
  };
  W.methadon = opioid("µ-Opioidrezeptor-Agonist (L-Enantiomer) plus NMDA-Rezeptor-Antagonist (beide Enantiomere)", [
    "NMDA-Antagonismus wirkt Toleranz und Hyperalgesie entgegen → nützlich bei neuropathischem Schmerz und Opioidrotation.",
    "Sehr lange, individuell stark schwankende Halbwertszeit (ca. 15–60 h, teils mehr) → Kumulation erst nach Tagen, Atemdepression verzögert.",
    "Blockiert den kardialen hERG-K⁺-Kanal → QT-Verlängerung, Torsade de pointes."
  ]);
  W.buprenorphin = {
    kette: [
      "==Partieller Agonist am µ-Rezeptor mit sehr hoher Affinität und langsamer Dissoziation==; Antagonist am κ-Rezeptor",
      "Aktiviert Gi-Signalweg nur teilweise (geringere maximale Wirkung) → cAMP ↓, Ca²⁺-Kanäle zu, K⁺-Kanäle auf",
      "Analgesie ähnlich wie bei vollen Agonisten im klinischen Dosisbereich",
      "Verdrängt andere Opioide vom Rezeptor und wird selbst schwer verdrängt"
    ],
    folgen: [
      "Deckeneffekt der Atemdepression (partieller Agonismus) – gilt nicht in Kombination mit Benzodiazepinen/Alkohol.",
      "Naloxon wirkt nur in hoher Dosis und verzögert (hohe Affinität, langsame Abdissoziation).",
      "Bei Opioidabhängigen unter vollem Agonisten: Gabe kann einen Entzug auslösen (Verdrängung durch partiellen Agonisten).",
      "Perioperativ meist fortführen; zusätzliche volle Agonisten wirken trotzdem, da nicht alle Rezeptoren besetzt sind (multimodale Analgesie)."
    ]
  };
  W.naloxon = {
    kette: [
      "Kompetitiver Antagonist an µ-, κ- und δ-Rezeptoren ohne Eigenwirkung",
      "Höhere Affinität als die meisten Agonisten → ==verdrängt das Opioid vom Rezeptor==",
      "Gi-Signal entfällt → cAMP-Bremse und K⁺-Kanal-Öffnung enden → Atemzentren und Nozizeption werden wieder normal erregbar",
      "Atmung und Bewusstsein kehren innerhalb von 1–2 min zurück (i.v.)"
    ],
    folgen: [
      "Remorphinisierung: Wirkdauer nur ca. 30–90 min, kürzer als bei vielen Opioiden → Überwachung, ggf. Infusion.",
      "Schneller hoher Bolus: abrupter Schmerz- und Sympathikus-Anstieg → Hypertonie, Tachykardie, Lungenödem, Arrhythmien; bei Abhängigen akuter Entzug → titrieren (z.B. 40 µg-Schritte).",
      "Bei Buprenorphin-Überdosis wenig wirksam (hohe Affinität des Agonisten)."
    ]
  };

  // ---------- Nicht-Opioid-Analgetika ----------
  W.paracetamol = {
    kette: [
      "Mechanismus nicht abschließend geklärt; diskutiert werden mehrere zentrale Wege:",
      "Hemmung der Peroxidase-Funktion der Cyclooxygenase vor allem im ZNS (wenig Peroxide) → zentrale Prostaglandin-Bildung ↓",
      "Im Gehirn entsteht aus dem Metaboliten p-Aminophenol über die Fettsäureamid-Hydrolase AM404 → wirkt an TRPV1- und Cannabinoid-CB1-Rezeptoren",
      "==Aktivierung absteigender serotonerger Hemmbahnen== → spinale Schmerzhemmung",
      "Hypothalamus: weniger PGE₂ → Fiebersenkung"
    ],
    folgen: [
      "Kaum antientzündlich und keine Thrombozyten-/Magenwirkung: im entzündeten Gewebe und in Plättchen hemmen hohe Peroxidspiegel die Paracetamol-Wirkung an der COX.",
      "Lebertoxizität: kleiner Anteil wird über CYP2E1 zu NAPQI → normalerweise an Glutathion gebunden; bei Überdosis/Glutathionmangel (Fasten, Alkohol, Mangelernährung) bindet NAPQI an Zellproteine → Nekrose (Zone 3) → Antidot N-Acetylcystein.",
      "Schnelle i.v.-Gabe: Blutdruckabfall bei Kritisch Kranken möglich."
    ]
  };
  W.metamizol = {
    kette: [
      "Prodrug: wird nicht-enzymatisch zu 4-Methylaminoantipyrin (4-MAA) und weiter zu 4-Aminoantipyrin hydrolysiert (wirksame Metaboliten)",
      "Hemmung der Cyclooxygenase vor allem zentral (Mechanismus im Detail nicht abschließend geklärt)",
      "Zusätzlich Aktivierung von Cannabinoid- und opioidergen Bahnen über Metaboliten (Arachidonoyl-Amide) → absteigende Schmerzhemmung",
      "Glatte Muskulatur: Hemmung der Calciumfreisetzung/Phospholipase-C-Signalwege → ==spasmolytische Wirkung==",
      "Analgesie, Fiebersenkung, Spasmolyse bei Koliken"
    ],
    folgen: [
      "Agranulozytose: immunologische (nicht dosisabhängige) Reaktion gegen Granulozyten → bei Fieber/Halsschmerzen unter Therapie Blutbild.",
      "Blutdruckabfall bei schneller i.v.-Gabe (Vasodilatation) → als Kurzinfusion geben.",
      "Geringere Magen- und Nierenwirkung als NSAR, aber nicht frei davon."
    ]
  };
  W.ibuprofen = nsar(false, ["Mit ASS: konkurriert um die COX-1-Bindung und kann die irreversible Plättchenhemmung durch ASS abschwächen (ASS vorher geben)."]);
  W.diclofenac = nsar(false, ["Relativ COX-2-betont → höheres kardiovaskuläres Risiko als Ibuprofen in niedriger Dosis; zusätzlich hepatotoxisch möglich."]);
  W.ketorolac = nsar(false, ["Sehr starke Analgesie (ähnlich niedrig dosierten Opioiden), dafür hohe Nieren- und Blutungsrisiken → Therapiedauer streng begrenzen (in Deutschland systemisch nicht mehr im Handel)."]);
  W.parecoxib = nsar(true, ["Prodrug: wird in der Leber zu Valdecoxib hydrolysiert (wirksame Form).", "Kontraindiziert nach koronarer Bypass-OP (erhöhte kardiovaskuläre Ereignisse in Studien)."]);

  // ---------- Muskelrelaxanzien & Reversierung ----------
  W.succinylcholin = {
    kette: [
      "Zwei verbundene Acetylcholin-Moleküle → Agonist am nikotinischen ACh-Rezeptor der Endplatte",
      "Kanal öffnet → Na⁺ strömt ein → Depolarisation → ==einmalige ungeordnete Kontraktionen (Faszikulationen)==",
      "Wird nicht durch die Acetylcholinesterase des synaptischen Spalts abgebaut, sondern nur langsam durch die Plasmacholinesterase → Endplatte bleibt depolarisiert",
      "Spannungsabhängige Na⁺-Kanäle um die Endplatte bleiben im inaktivierten Zustand → kein neues Aktionspotenzial → ==schlaffe Lähmung (Depolarisationsblock, Phase I)==",
      "Ende der Wirkung, wenn Succinylcholin aus dem Spalt abdiffundiert und im Plasma abgebaut ist (ca. 5–10 min)"
    ],
    folgen: [
      "Kalium-Anstieg (ca. 0,5 mmol/l): offene Kanäle lassen K⁺ austreten; massiv bei hochregulierten extrajunktionalen Rezeptoren (Verbrennung, Denervierung, Immobilisation, Muskeldystrophie) → Herzstillstand.",
      "Bradykardie (v.a. Kinder, Wiederholungsdosis): Stimulation muskarinischer M2-Rezeptoren am Sinusknoten.",
      "Trigger der malignen Hyperthermie (RYR1).",
      "Druckanstieg in Auge, Magen und Schädel (Faszikulationen, Muskeltonus), Muskelkater.",
      "Phase-II-Block nach hohen/wiederholten Dosen (Rezeptordesensibilisierung) → ähnelt nicht-depolarisierendem Block (Fade).",
      "Kein Fade und keine posttetanische Potenzierung im Phase-I-Block; Cholinesterasehemmer verstärken ihn."
    ]
  };
  W.rocuronium = ndmr([
    "Schneller Wirkbeginn wegen geringer Potenz: viele Moleküle nötig → steiles Konzentrationsgefälle zur Endplatte (Intubation nach ca. 60 s bei 1,0–1,2 mg/kg).",
    "Steroidstruktur → durch Sugammadex einkapselbar.",
    "Ausscheidung überwiegend biliär → verlängert bei Leber- und (geringer) Niereninsuffizienz."
  ]);
  W.vecuronium = ndmr([
    "Steroidstruktur, durch Sugammadex reversierbar (etwas geringere Affinität als Rocuronium).",
    "Aktiver Metabolit 3-Desacetylvecuronium → Kumulation bei Niereninsuffizienz und Langzeitgabe."
  ]);
  W.pancuronium = ndmr([
    "Blockiert zusätzlich kardiale muskarinische M2-Rezeptoren und hemmt die Noradrenalin-Wiederaufnahme → Tachykardie, Blutdruckanstieg.",
    "Lange Wirkung, renale Elimination → Restrelaxierungsrisiko."
  ]);
  W.atracurium = ndmr([
    "Abbau organunabhängig: Hofmann-Elimination (temperatur- und pH-abhängiger Zerfall) und Esterhydrolyse.",
    "Metabolit Laudanosin kann in hohen Konzentrationen die Krampfschwelle senken.",
    "Histaminfreisetzung → Hypotonie, Flush, Bronchospasmus bei schneller Gabe."
  ]);
  W.cisatracurium = ndmr([
    "Ein Isomer des Atracuriums mit ca. 4-facher Potenz → weniger Moleküle → weniger Laudanosin und praktisch keine Histaminfreisetzung.",
    "Hofmann-Elimination → geeignet bei Leber- und Niereninsuffizienz; langsamer Wirkbeginn."
  ]);
  W.mivacurium = ndmr([
    "Abbau durch die Plasmacholinesterase → kurze Wirkung; bei atypischer/verminderter Cholinesterase stark verlängert (Stunden).",
    "Histaminfreisetzung bei schneller Gabe."
  ]);
  W.sugammadex = {
    kette: [
      "Modifiziertes γ-Cyclodextrin (Ring aus 8 Zuckermolekülen) mit lipophilem Hohlraum",
      "==Kapselt Rocuronium (und Vecuronium) im Plasma 1:1 fest ein== (sehr hohe Bindungsaffinität)",
      "Freie Relaxanskonzentration im Plasma fällt → Konzentrationsgefälle zieht Relaxans aus dem synaptischen Spalt ins Plasma",
      "Acetylcholin-Rezeptoren werden frei → normale Übertragung → Muskelkraft kehrt zurück",
      "Komplex wird unverändert renal ausgeschieden"
    ],
    folgen: [
      "Unabhängig vom Acetylcholin → wirkt auch bei tiefem Block (Dosis nach Blocktiefe: 2/4/16 mg/kg); keine muskarinergen Nebenwirkungen, kein Glycopyrrolat nötig.",
      "Unwirksam bei Benzylisochinolinen (Atracurium, Cisatracurium, Mivacurium) und Succinylcholin (passen nicht in den Hohlraum).",
      "Bindet auch Gestagene → hormonelle Verhütung für 7 Tage unsicher.",
      "Selten Anaphylaxie, Bradykardie; bei schwerer Niereninsuffizienz verbleibt der Komplex lange im Körper."
    ]
  };
  W.neostigmin = {
    kette: [
      "Bindet an das aktive Zentrum der Acetylcholinesterase und ==carbamyliert sie== (reversibel, Spaltung dauert Minuten statt Millisekunden)",
      "Acetylcholin wird langsamer abgebaut → mehr ACh im synaptischen Spalt",
      "An der Endplatte: mehr ACh konkurriert mit dem nicht-depolarisierenden Relaxans → Endplattenpotenzial erreicht wieder die Schwelle",
      "Muskelkraft kehrt zurück, sofern bereits eine Spontanerholung begonnen hat"
    ],
    folgen: [
      "Deckeneffekt: Enzymhemmung ist maximal begrenzt → bei tiefem Block wirkungslos; bei fast vollständiger Erholung kann zu viel ACh selbst schwächen (Depolarisation).",
      "Muskarinerge Wirkungen überall (mehr ACh auch an M-Rezeptoren): Bradykardie bis Asystolie, Speichelfluss, Bronchokonstriktion, Darmperistaltik → immer mit Glycopyrrolat/Atropin kombinieren.",
      "Quartäres Ammonium → passiert die Blut-Hirn-Schranke nicht (keine zentralen Wirkungen).",
      "Verstärkt einen Succinylcholin-Block (Plasmacholinesterase ebenfalls gehemmt)."
    ]
  };
  W.pyridostigmin = {
    kette: [
      "Reversible Carbamylierung der Acetylcholinesterase (wie Neostigmin, längere Wirkdauer)",
      "Mehr Acetylcholin an der Endplatte → mehr Rezeptoren werden aktiviert",
      "Bei Myasthenia gravis: ==gleicht die verminderte Zahl funktionsfähiger Rezeptoren teilweise aus== → bessere Muskelkraft"
    ],
    folgen: [
      "Hemmt auch die Plasmacholinesterase → Succinylcholin- und Mivacurium-Wirkung verlängert.",
      "Überdosierung → cholinerge Krise (Schwäche plus muskarinerge Zeichen).",
      "Quartär → keine zentralen Effekte; oral gut steuerbar."
    ]
  };
  W.physostigmin = {
    kette: [
      "Reversibler Hemmer der Acetylcholinesterase, aber ==tertiäres Amin → passiert die Blut-Hirn-Schranke==",
      "Mehr Acetylcholin im ZNS und peripher",
      "Hebt die Blockade muskarinischer Rezeptoren durch Anticholinergika auf (Konkurrenz)",
      "Zentrales anticholinerges Syndrom (Delir, Agitation, Somnolenz) bildet sich zurück"
    ],
    folgen: [
      "Antidot bei anticholinergem Syndrom (Atropin, Scopolamin, Antihistaminika); Wirkung kürzer als viele Auslöser → ggf. wiederholen.",
      "Bradykardie, Bronchospasmus, Krampfanfälle bei zu schneller Gabe; Vorsicht bei Trizyklika-Vergiftung (Asystolie-Fälle)."
    ]
  };
  W.atropin = {
    kette: [
      "Kompetitiver Antagonist an allen muskarinischen ACh-Rezeptoren (M1–M5)",
      "Am Sinus- und AV-Knoten werden M2-Rezeptoren blockiert → die vagale Öffnung von K⁺-Kanälen (IK-ACh) und die cAMP-Bremse entfallen",
      "==Vagale 'Bremse' fällt weg== → Herzfrequenz steigt, AV-Überleitung schneller",
      "Drüsen (M3): Speichel-, Bronchial-, Schweißsekretion ↓; glatte Muskulatur (M3): Bronchodilatation, Darmmotilität ↓; Auge: Mydriasis, Akkommodationslähmung"
    ],
    folgen: [
      "Tertiäres Amin → passiert die Blut-Hirn-Schranke → zentrales anticholinerges Syndrom/Delir (v.a. Ältere).",
      "Niedrige Dosen können paradox bradykardisieren (zentrale Vagusstimulation, präsynaptische Effekte).",
      "Unwirksam bei denerviertem Herz (Herztransplantation) und meist beim AV-Block III. Grades unterhalb des His-Bündels.",
      "Hyperthermie bei Kindern (Schwitzen gehemmt)."
    ]
  };
  W.glycopyrrolat = {
    kette: [
      "Kompetitiver Antagonist an muskarinischen Rezeptoren",
      "Quartäres Ammonium (dauerhaft geladen) → ==passiert die Blut-Hirn-Schranke und Plazenta kaum==",
      "Peripher: M2 am Herzen → Frequenz ↑; M3 an Drüsen → starke Hemmung der Speichel- und Bronchialsekretion"
    ],
    folgen: [
      "Keine zentralen Wirkungen (kein Delir) → bevorzugt zur Kombination mit Neostigmin und als Antisialogogum.",
      "Langsamerer Wirkbeginn als Atropin → bei akuter Bradykardie Atropin bevorzugen.",
      "Wirkverlauf passt zeitlich gut zu Neostigmin (verhindert dessen muskarinerge Bradykardie)."
    ]
  };

  // ---------- Lokalanästhetika ----------
  W.lidocain = lokalanaesthetikum([
    "pKa ca. 7,8–7,9 → relativ viel ungeladene Form → schneller Wirkbeginn; mittlere Wirkdauer"
  ], [
    "Antiarrhythmikum (Klasse Ib): blockiert bevorzugt Na⁺-Kanäle schnell depolarisierter/ischämischer Kammerzellen, löst sich rasch ab → wenig Wirkung bei normaler Frequenz.",
    "Systemisch i.v. (Analgesie/Ileusprophylaxe): Blockade von Na⁺-Kanälen in sensibilisierten Nozizeptoren, Hemmung von NMDA- und Entzündungssignalen.",
    "Abbau in der Leber (hohe Extraktion) → Kumulation bei geringem Leberblutfluss (Herzinsuffizienz, Betablocker)."
  ]);
  W.bupivacain = lokalanaesthetikum([
    "pKa ca. 8,1 → weniger ungeladene Form → langsamer Wirkbeginn; hohe Fettlöslichkeit (hohe Potenz) und Proteinbindung (ca. 95 %) → lange Wirkdauer"
  ], [
    "Kardiotoxisch: bindet schnell an kardiale Na⁺-Kanäle und löst sich langsam ('fast in, slow out') → Blockade summiert sich über Herzschläge; zusätzlich Hemmung des mitochondrialen Fettsäurestoffwechsels → Lipidemulsion als Therapie.",
    "Racemat: R-Enantiomer stärker kardiotoxisch als S-Enantiomer (→ Levobupivacain, Ropivacain)."
  ]);
  W.levobupivacain = lokalanaesthetikum([
    "Reines S-Enantiomer des Bupivacains, pKa ca. 8,1, lange Wirkdauer"
  ], [
    "Geringere Affinität zu kardialen Na⁺-Kanälen und weniger ZNS-Toxizität als racemisches Bupivacain bei ähnlicher Wirkung."
  ]);
  W.ropivacain = lokalanaesthetikum([
    "Reines S-Enantiomer, pKa ca. 8,1; geringere Fettlöslichkeit als Bupivacain"
  ], [
    "Weniger kardiotoxisch als Bupivacain; dicke motorische Fasern werden bei niedriger Konzentration weniger blockiert → ausgeprägtere Trennung von Sensorik und Motorik.",
    "In niedriger Konzentration leicht vasokonstriktorisch → kein Adrenalinzusatz nötig."
  ]);
  W.prilocain = lokalanaesthetikum([
    "pKa ca. 7,9; mittlere Wirkdauer; hohes Verteilungsvolumen und schneller Abbau → geringe systemische Toxizität je mg"
  ], [
    "Methämoglobinämie: Metabolit o-Toluidin oxidiert Hämoglobin-Fe²⁺ zu Fe³⁺ (bindet kein O₂) → Zyanose, SpO₂ gegen ca. 85 % → Methylenblau; Vorsicht bei Säuglingen und Schwangeren.",
    "Hyperbar für Spinalanästhesie mit kurzer Wirkdauer (ambulant)."
  ]);
  W.mepivacain = lokalanaesthetikum([
    "pKa ca. 7,6–7,7 → schneller Wirkbeginn; mittlere Wirkdauer; kaum vasodilatierend"
  ], [
    "Abbau in der Leber; beim Neugeborenen verlängert (unreife Leber)."
  ]);
  W.tetracain = lokalanaesthetikum([
    "Ester-Typ: hohe Fettlöslichkeit und Potenz, pKa ca. 8,5 → langsamer Wirkbeginn, lange Wirkdauer"
  ], [
    "Abbau durch Plasmacholinesterase zu para-Aminobenzoesäure (PABA) → Allergien häufiger als bei Amiden.",
    "Heute v.a. topisch (Augen-/Schleimhautanästhesie); hohe systemische Toxizität."
  ]);

  // ---------- Bausteine Kreislauf ----------
  const ALPHA1 = [
    "α1-Adrenozeptor ist Gq-gekoppelt → Phospholipase C aktiviert → aus PIP₂ entstehen IP₃ und DAG",
    "IP₃ setzt Ca²⁺ aus dem sarkoplasmatischen Retikulum frei, DAG aktiviert Proteinkinase C; zusätzlich Ca²⁺-Einstrom",
    "Ca²⁺-Calmodulin aktiviert die Myosin-Leichtketten-Kinase → ==glatte Gefäßmuskulatur kontrahiert==",
    "Arteriolen: systemischer Gefäßwiderstand ↑ → Blutdruck ↑; Venen: Kapazitätsgefäße verengen sich → 'ungestresstes' Blutvolumen wird mobilisiert → venöser Rückstrom ↑"
  ];
  const BETA1 = [
    "β1-Adrenozeptor ist Gs-gekoppelt → Adenylatcyclase → cAMP ↑ → Proteinkinase A aktiviert",
    "PKA phosphoryliert L-Typ-Ca²⁺-Kanäle (mehr Ca²⁺-Einstrom) und Ryanodin-Rezeptoren → ==mehr Ca²⁺ für die Kontraktion (Inotropie)==",
    "PKA phosphoryliert Phospholamban → SERCA pumpt Ca²⁺ schneller zurück → schnellere Relaxation (Lusitropie)",
    "Sinusknoten: cAMP verstärkt den Schrittmacherstrom If → Herzfrequenz ↑; AV-Knoten: schnellere Überleitung"
  ];
  const BETA2_GLATT = "β2 (Gs → cAMP → PKA): PKA hemmt die Myosin-Leichtketten-Kinase, senkt Ca²⁺ und öffnet K⁺-Kanäle → glatte Muskulatur erschlafft (Bronchien, Gefäße der Skelettmuskulatur)";
  const NO_CGMP = [
    "NO diffundiert in die glatte Gefäßmuskelzelle und aktiviert die lösliche Guanylatcyclase",
    "cGMP ↑ → Proteinkinase G aktiviert",
    "PKG senkt das zytosolische Ca²⁺ und aktiviert die Myosin-Leichtketten-Phosphatase → ==Gefäßmuskel erschlafft=="
  ];
  function betablocker(extraKette, extraFolgen) {
    return {
      kette: [
        "Kompetitiver Antagonist am β1-Adrenozeptor (kardioselektiv; Selektivität dosisabhängig)",
        "Katecholamine können Gs nicht aktivieren → cAMP ↓ → Proteinkinase A weniger aktiv",
        "Sinusknoten: Schrittmacherstrom If und L-Typ-Ca²⁺-Strom ↓ → ==Herzfrequenz ↓==; AV-Knoten: Überleitung verlangsamt",
        "Myokard: weniger Ca²⁺-Einstrom → Kontraktilität ↓; Niere (juxtaglomerulär): Reninfreisetzung ↓",
        "Myokardialer O₂-Verbrauch ↓ und längere Diastole → bessere Koronarperfusion"
      ].concat(extraKette || []),
      folgen: [
        "Bradykardie, AV-Block, Hypotonie, akute Herzinsuffizienz bei abhängigem Sympathikotonus.",
        "In hoher Dosis auch β2-Blockade → Bronchospasmus bei Asthma/COPD möglich.",
        "Maskiert Hypoglykämie-Warnzeichen (Tachykardie, Tremor).",
        "Antidot bei Überdosis: Glukagon (eigener Gs-Rezeptor), hochdosiertes Insulin, Katecholamine."
      ].concat(extraFolgen || [])
    };
  }
  function dhp(extraKette, extraFolgen) {
    return {
      kette: [
        "Bindung an die α1-Untereinheit des L-Typ-Ca²⁺-Kanals (Cav1.2), bevorzugt im inaktivierten Zustand",
        "Gefäßmuskelzellen sind dauerhaft stärker depolarisiert als Herzzellen → ==Dihydropyridine wirken bevorzugt an den Gefäßen==",
        "Weniger Ca²⁺-Einstrom → weniger Ca²⁺-Calmodulin → Myosin-Leichtketten-Kinase weniger aktiv → arterioläre Gefäßmuskulatur erschlafft",
        "Systemischer Gefäßwiderstand ↓ → Blutdruck ↓ (Venen kaum beeinflusst → Vorlast bleibt)"
      ].concat(extraKette || []),
      folgen: [
        "Kaum Wirkung auf Sinus-/AV-Knoten und Kontraktilität → Reflextachykardie über den Barorezeptorreflex möglich.",
        "Kopfschmerz, Flush, Knöchelödeme (präkapilläre Dilatation)."
      ].concat(extraFolgen || [])
    };
  }

  // ---------- Vasopressoren, Inotropika ----------
  W.noradrenalin = {
    kette: ["Agonist an α1- (stark) und β1-Adrenozeptoren (mäßig), kaum β2"].concat(ALPHA1).concat([
      "β1-Wirkung (Gs → cAMP → PKA → Ca²⁺-Kanäle) → leichte Steigerung der Kontraktilität",
      "Nettowirkung: Blutdruck ↑ durch Widerstand und Rückstrom; Herzzeitvolumen gleich oder leicht ↑"
    ]),
    folgen: [
      "Herzfrequenz bleibt meist gleich oder sinkt: Barorezeptorreflex gleicht die β1-Chronotropie aus.",
      "Mesenteriale, renale und periphere Vasokonstriktion bei hoher Dosis → Ischämiegefahr, Laktat.",
      "Paravasat → Gewebsnekrose (Phentolamin lokal); zentraler Zugang bevorzugt, peripher in niedriger Konzentration möglich.",
      "Wirkverlust bei schwerer Azidose (Rezeptorbindung/Signalweg gestört) und bei Rezeptor-Herunterregulation im Schock."
    ]
  };
  W.adrenalin = {
    kette: [
      "Agonist an α1-, α2-, β1- und β2-Adrenozeptoren – Wirkung dosisabhängig",
      "Niedrige Dosis: β-Wirkung überwiegt"
    ].concat(BETA1).concat([
      BETA2_GLATT,
      "Höhere Dosis: α1 (Gq → IP₃/DAG → Ca²⁺ → Vasokonstriktion) überwiegt → ==Widerstand und Blutdruck ↑==",
      "β2 an Mastzellen: cAMP ↑ → stabilisiert die Membran → weniger Histamin-/Mediatorfreisetzung"
    ]),
    folgen: [
      "Anaphylaxie: α1 hebt Vasodilatation und Kapillarleck auf, β2 erweitert die Bronchien und bremst die Mastzellen, β1 stärkt das Herz – deshalb Mittel der ersten Wahl.",
      "Reanimation: α1-Vasokonstriktion erhöht den diastolischen Aortendruck → besserer koronarer Perfusionsdruck.",
      "Stoffwechsel: β2 → Glykogenolyse, Glukoneogenese, gesteigerte aerobe Glykolyse → Hyperglykämie und Laktatanstieg ohne Gewebshypoxie; α2 hemmt Insulin.",
      "β2 aktiviert die Na⁺/K⁺-ATPase → Kalium wandert in die Zellen → Hypokaliämie.",
      "Tachykardie, Arrhythmien, myokardialer O₂-Verbrauch ↑."
    ]
  };
  W.vasopressin = {
    kette: [
      "Bindung an V1a-Rezeptoren der glatten Gefäßmuskulatur (Gq-gekoppelt)",
      "Phospholipase C → IP₃ → Ca²⁺ ↑ → Ca²⁺-Calmodulin → Myosin-Leichtketten-Kinase → ==Vasokonstriktion==",
      "Zusätzlich: verschließt ATP-sensitive K⁺-Kanäle (im vasodilatatorischen Schock geöffnet) und hemmt die induzierbare NO-Synthase",
      "Wirkt unabhängig von Adrenozeptoren → auch bei Katecholamin-Resistenz (Azidose, Rezeptor-Herunterregulation)",
      "Niere: V2-Rezeptoren (Gs → cAMP) im Sammelrohr → Aquaporin-2 wird eingebaut → Wasserrückresorption"
    ],
    folgen: [
      "Spart Noradrenalin im septischen Schock (Surviving Sepsis: zusätzlich bei steigendem Bedarf).",
      "Pulmonale Gefäße werden wenig verengt (NO-vermittelt) → günstig bei pulmonaler Hypertonie/Rechtsherzbelastung.",
      "Ischämie von Haut, Fingern, Darm und Myokard bei hoher Dosis; Hyponatriämie durch V2-Wirkung.",
      "V1b in der Hypophyse → ACTH-Freisetzung; V2 am Endothel → vWF/Faktor VIII ↑."
    ]
  };
  W.terlipressin = {
    kette: [
      "Prodrug: Abspaltung der Glycylreste durch Peptidasen → Lysin-Vasopressin (langsame, anhaltende Freisetzung)",
      "Relativ selektiv für V1-Rezeptoren → Gq → IP₃/Ca²⁺ → Vasokonstriktion",
      "==Splanchnische Arteriolen verengen sich== → Zufluss zur Pfortader ↓ → Pfortaderdruck ↓",
      "Systemischer Widerstand ↑ → 'effektives' arterielles Volumen ↑ → bessere Nierendurchblutung beim hepatorenalen Syndrom"
    ],
    folgen: [
      "Indikationen: Varizenblutung, hepatorenales Syndrom (mit Albumin).",
      "Ischämie (Darm, Myokard, Haut), Bradykardie; Lungenödem/respiratorische Insuffizienz bei Volumenüberladung (besonders mit Albumin).",
      "Hyponatriämie (Rest-V2-Wirkung)."
    ]
  };
  W.dopamin = {
    kette: [
      "Dosisabhängige Wirkung an mehreren Rezeptoren plus indirekte Noradrenalin-Freisetzung aus Nervenendigungen",
      "Niedrig: D1-Rezeptoren (Gs → cAMP) an renalen und mesenterialen Gefäßen → Vasodilatation",
      "Mittel: β1 (Gs → cAMP → PKA → Ca²⁺) → Inotropie und Chronotropie",
      "Hoch: α1 (Gq → IP₃ → Ca²⁺) → Vasokonstriktion"
    ],
    folgen: [
      "Keine Nierenprotektion trotz Diuresesteigerung ('Nierendosis' ist widerlegt).",
      "Mehr Tachyarrhythmien als Noradrenalin (SOAP II) → im Schock nicht erste Wahl.",
      "Hemmt die Prolaktin- und TSH-Freisetzung (D2 in der Hypophyse) → endokrine/immunologische Effekte.",
      "Wirkung abhängig von Noradrenalin-Speichern (indirekter Anteil)."
    ]
  };
  W.dobutamin = {
    kette: [
      "Racemat: (+)-Enantiomer β1-Agonist und α1-Antagonist, (−)-Enantiomer α1-Agonist → α-Effekte heben sich weitgehend auf",
      "Netto vor allem β1 (dazu etwas β2)"
    ].concat(BETA1).concat([
      "β2 → leichte Vasodilatation → Nachlast ↓ → ==Herzzeitvolumen ↑ bei eher gleichem Blutdruck=="
    ]),
    folgen: [
      "Tachykardie und Arrhythmien, myokardialer O₂-Verbrauch ↑ (Ischämie).",
      "Blutdruckabfall bei Hypovolämie (β2-Vasodilatation ohne ausreichende Vorlast).",
      "Bei Betablockade abgeschwächt (Rezeptor besetzt) → dann PDE-3-Hemmer oder Levosimendan.",
      "Toleranz bei Infusion >72 h (Rezeptor-Herunterregulation)."
    ]
  };
  W.milrinon = {
    kette: [
      "Hemmung der Phosphodiesterase 3 (baut cAMP in Herz- und Gefäßmuskel ab)",
      "==cAMP steigt unabhängig vom β-Rezeptor==",
      "Herz: PKA → mehr Ca²⁺-Einstrom und -Freisetzung → Inotropie; Phospholamban → schnellere Ca²⁺-Wiederaufnahme → Lusitropie",
      "Gefäß: cAMP/PKA hemmt die Myosin-Leichtketten-Kinase → systemische und pulmonale Vasodilatation",
      "'Inodilatator': Herzzeitvolumen ↑, Nachlast und pulmonaler Widerstand ↓"
    ],
    folgen: [
      "Wirkt auch unter Betablockern und bei herunterregulierten β-Rezeptoren (chronische Herzinsuffizienz).",
      "Hypotonie (Vasodilatation) → oft Kombination mit Noradrenalin.",
      "Arrhythmien (cAMP/Ca²⁺-Last).",
      "Renale Elimination → Dosisreduktion bei Niereninsuffizienz."
    ]
  };
  W.levosimendan = {
    kette: [
      "Bindet calciumabhängig an Troponin C und stabilisiert dessen Ca²⁺-gebundene Form",
      "==Mehr Kontraktionskraft bei gleichem Ca²⁺-Spiegel== (Calcium-Sensitizer) – während der Diastole (niedriges Ca²⁺) keine Bindung → Relaxation bleibt erhalten",
      "Öffnet ATP-sensitive K⁺-Kanäle der glatten Gefäßmuskulatur → Hyperpolarisation → L-Typ-Ca²⁺-Kanäle schließen → Vasodilatation (systemisch, pulmonal, koronar)",
      "In höherer Dosis zusätzlich PDE-3-Hemmung",
      "Aktiver Metabolit OR-1896 (Halbwertszeit ca. 70–80 h) → Wirkung hält Tage an"
    ],
    folgen: [
      "Kaum Anstieg des intrazellulären Ca²⁺ und des O₂-Verbrauchs → weniger arrhythmogen als Katecholamine (theoretischer Vorteil).",
      "Wirkt unabhängig vom β-Rezeptor (unter Betablockern).",
      "Hypotonie durch Vasodilatation (Bolus vermeiden), Hypokaliämie, Kopfschmerz.",
      "Mitochondriale K-ATP-Öffnung wird als kardioprotektiv diskutiert."
    ]
  };
  W.phenylephrin = {
    kette: ["Direkter, selektiver Agonist am α1-Adrenozeptor (keine β-Wirkung)"].concat(ALPHA1).concat([
      "Blutdruckanstieg → Barorezeptoren melden Druck ↑ → ==Vagus ↑, Sympathikus ↓ → reflektorische Bradykardie=="
    ]),
    folgen: [
      "Ideal bei Hypotonie mit Tachykardie (z.B. Spinalanästhesie zur Sectio – hält die uteroplazentare Durchblutung besser als Ephedrin, weniger fetale Azidose).",
      "Herzzeitvolumen kann sinken (Nachlast ↑, Frequenz ↓) → ungünstig bei eingeschränkter Pumpfunktion und Bradykardie.",
      "Kurze Wirkdauer (ca. 5–10 min) → als Bolus oder Infusion."
    ]
  };
  W.ephedrin = {
    kette: [
      "Wird in sympathische Nervenendigungen aufgenommen und ==verdrängt Noradrenalin aus den Speichervesikeln== (indirekter Hauptmechanismus)",
      "Freigesetztes Noradrenalin wirkt an α1 (Gq → Vasokonstriktion) und β1 (Gs → cAMP → Inotropie/Chronotropie)",
      "Zusätzlich schwache direkte Wirkung an α- und β-Rezeptoren",
      "Blutdruck, Herzfrequenz und Herzzeitvolumen ↑"
    ],
    folgen: [
      "Tachyphylaxie: Speicher leeren sich bei wiederholter Gabe → Wirkung lässt nach.",
      "Abgeschwächt bei entleerten Speichern (Reserpin, langer Schock), verstärkt bis zur Krise unter MAO-Hemmern (mehr Noradrenalin im Speicher).",
      "Bei Phäochromozytom meiden (indirekte Katecholaminfreisetzung).",
      "Passiert die Plazenta → fetale Azidose bei hohen Dosen (stimuliert fetalen Stoffwechsel)."
    ]
  };
  W.metaraminol = {
    kette: [
      "Direkter α1-Agonist (Gq → IP₃ → Ca²⁺ → Vasokonstriktion) mit schwacher β1-Wirkung",
      "Zusätzlich indirekt: Aufnahme in die Nervenendigung → Freisetzung von Noradrenalin",
      "Wird selbst in Vesikeln gespeichert und als 'falscher Transmitter' freigesetzt",
      "==Vor allem Widerstandsanstieg== → Blutdruck ↑, reflektorisch Herzfrequenz ↓"
    ],
    folgen: [
      "Länger wirksam als Phenylephrin (ca. 20–30 min).",
      "Tachyphylaxie bei wiederholter Gabe möglich (indirekter Anteil); Reflexbradykardie."
    ]
  };

  // ---------- Antiarrhythmika, Herzglykosid ----------
  W.amiodaron = {
    kette: [
      "Blockiert vor allem repolarisierende K⁺-Kanäle (IKr, IKs) → ==Aktionspotenzial und Refraktärzeit verlängert== (Klasse III)",
      "Kreisende Erregungen (Reentry) treffen auf noch refraktäres Gewebe und erlöschen",
      "Zusätzlich Na⁺-Kanal-Blockade (Klasse I, frequenzabhängig), nicht-kompetitive β-Blockade (Klasse II) und Ca²⁺-Kanal-Blockade (Klasse IV)",
      "Sinusknoten langsamer, AV-Überleitung verzögert → Frequenzkontrolle bei Vorhofflimmern"
    ],
    folgen: [
      "QT-Verlängerung, aber Torsade de pointes selten (gleichmäßige Verlängerung über alle Wandschichten).",
      "Bradykardie, AV-Block; i.v. Hypotonie (Vasodilatation, Lösungsvermittler Polysorbat).",
      "Jodhaltig (ca. 37 % Jod) und hemmt die T4→T3-Konversion → Hypo- und Hyperthyreose.",
      "Langzeit: Lungenfibrose, Leber-, Haut- und Hornhautablagerungen; sehr lange Halbwertszeit (Wochen); hemmt CYP3A4/2C9 und P-Glykoprotein (Warfarin, Digoxin ↑)."
    ]
  };
  W.adenosin = {
    kette: [
      "Bindung an A1-Rezeptoren im Sinus- und AV-Knoten (Gi-gekoppelt)",
      "Öffnung adenosin-/acetylcholinsensitiver K⁺-Kanäle (IK-Ado/ACh) → Hyperpolarisation; cAMP ↓ → L-Typ-Ca²⁺-Strom ↓",
      "AV-Knoten-Zellen (Ca²⁺-abhängige Erregung) werden für Sekunden unerregbar → ==vorübergehender AV-Block==",
      "Reentry-Tachykardien über den AV-Knoten (AVNRT, AVRT) werden unterbrochen; bei Vorhofflattern/-flimmern wird die Vorhofaktion sichtbar (diagnostisch)"
    ],
    folgen: [
      "Halbwertszeit <10 s (Aufnahme in Erythrozyten/Endothel, Adenosin-Desaminase) → schneller Bolus, armnah, mit Nachspülen.",
      "Flush, Brustdruck, Dyspnoe (A2A-Vasodilatation, A2B/A3 an Bronchien) – Vorsicht bei Asthma.",
      "Dipyridamol und Herztransplantation verstärken (niedrigere Dosis), Theophyllin/Koffein schwächen (Rezeptorantagonisten).",
      "Kontraindiziert bei Vorhofflimmern mit Präexzitation (WPW): Blockade des AV-Knotens kann schnelle Überleitung über die akzessorische Bahn fördern."
    ]
  };
  W.esmolol = betablocker([
    "Esterbindung → Abbau durch Esterasen der Erythrozyten → Halbwertszeit ca. 9 min, gut steuerbar"
  ], [
    "Ideal zur Dämpfung kurzer Sympathikusspitzen (Intubation, Aortendissektion zur Senkung von dP/dt) und zur Frequenzkontrolle."
  ]);
  W.metoprolol = betablocker([
    "Abbau über CYP2D6 (Halbwertszeit ca. 3–4 h)"
  ], [
    "Dauertherapie perioperativ fortführen (Absetzen → Rebound-Tachykardie und Ischämie); Neubeginn hochdosiert kurz vor OP erhöhte in POISE Schlaganfall und Sterblichkeit."
  ]);
  W.labetalol = betablocker([
    "Zusätzlich Blockade von α1-Rezeptoren (Verhältnis α:β i.v. ca. 1:7) → Gefäßwiderstand ↓ ohne Reflextachykardie"
  ], [
    "Einsatz bei hypertensiver Krise und Präeklampsie (plazentagängig, aber etabliert).",
    "Orthostatische Hypotonie; Leberwerte."
  ]);
  W.verapamil = {
    kette: [
      "Blockiert L-Typ-Ca²⁺-Kanäle von der Innenseite, bevorzugt bei häufiger Öffnung (frequenzabhängig)",
      "Sinus- und AV-Knoten erregen sich über Ca²⁺-Einstrom → ==Depolarisation verlangsamt, AV-Überleitung verzögert== (Klasse IV)",
      "Myokard: weniger Ca²⁺-Einstrom → Kontraktilität ↓",
      "Arteriolen: Vasodilatation → Nachlast ↓",
      "Reentry über den AV-Knoten wird unterbrochen; Kammerfrequenz bei Vorhofflimmern sinkt"
    ],
    folgen: [
      "Nicht bei Breitkomplextachykardie/VT (Kreislaufkollaps) und nicht bei WPW mit Vorhofflimmern.",
      "Mit Betablockern: AV-Block bis Asystolie, Herzinsuffizienz.",
      "Hemmt CYP3A4 und P-Glykoprotein (Digoxin-Spiegel ↑).",
      "Überdosis: Calcium, Insulin hochdosiert, Katecholamine."
    ]
  };
  W.digoxin = {
    kette: [
      "Hemmung der Na⁺/K⁺-ATPase (bindet an deren α-Untereinheit, konkurriert mit K⁺)",
      "Intrazelluläres Na⁺ steigt → der Na⁺/Ca²⁺-Austauscher transportiert weniger Ca²⁺ hinaus",
      "Mehr Ca²⁺ wird in das sarkoplasmatische Retikulum gepumpt und bei jeder Erregung freigesetzt → ==Inotropie ↑==",
      "Zentral und über Barorezeptoren: Vagotonus ↑ → AV-Überleitung verlangsamt → Kammerfrequenz bei Vorhofflimmern ↓"
    ],
    folgen: [
      "Toxizität bei Hypokaliämie (weniger K⁺ konkurriert → mehr Digoxin bindet), Hypomagnesiämie, Hyperkalzämie, Niereninsuffizienz (renale Ausscheidung).",
      "Ca²⁺-Überladung → verzögerte Nachdepolarisationen → ventrikuläre Arrhythmien, Bigeminus; typisch auch 'atriale Tachykardie mit Block'.",
      "Xanthopsie (Gelbsehen), Übelkeit; Antidot: Digoxin-Antikörperfragmente.",
      "Schmaler therapeutischer Bereich; Amiodaron, Verapamil erhöhen den Spiegel."
    ]
  };

  // ---------- Vasodilatatoren & Antihypertensiva ----------
  W.nitroglycerin = {
    kette: [
      "Bioaktivierung in der Gefäßwand (v.a. mitochondriale Aldehyd-Dehydrogenase 2) → NO wird freigesetzt"
    ].concat(NO_CGMP).concat([
      "Niedrige Dosis: ==vor allem Venen== → venöses Pooling → Vorlast ↓ → Wandspannung und O₂-Verbrauch des Herzens ↓",
      "Höhere Dosis: auch Arteriolen (Nachlast ↓) und epikardiale Koronarien (Spasmus gelöst)"
    ]),
    folgen: [
      "Kopfschmerz: Erweiterung meningealer Gefäße.",
      "Reflextachykardie und Hypotonie; Vorsicht bei Hypovolämie, Aortenstenose, Rechtsherzinfarkt (vorlastabhängig).",
      "Toleranz nach Stunden (Erschöpfung der Bioaktivierung, oxidativer Stress) → nitratfreie Intervalle.",
      "Kontraindiziert nach PDE-5-Hemmern (Sildenafil): cGMP wird nicht abgebaut → schwere Hypotonie.",
      "Hemmt die hypoxische pulmonale Vasokonstriktion → Shunt ↑, SpO₂ kann sinken."
    ]
  };
  W.natriumnitroprussid = {
    kette: [
      "Reagiert im Blut nicht-enzymatisch (u.a. mit Hämoglobin) und ==setzt sofort NO frei=="
    ].concat(NO_CGMP).concat([
      "Arteriolen und Venen gleichermaßen → Nach- und Vorlast ↓ innerhalb von Sekunden, Wirkung endet in 1–2 min nach Stopp"
    ]),
    folgen: [
      "Zyanid: pro Molekül werden 5 Cyanid-Ionen frei → hemmen die Cytochrom-c-Oxidase → Gewebshypoxie trotz normalem PaO₂ → Laktatazidose, steigende venöse Sättigung, Tachyphylaxie (Warnzeichen). Entgiftung über Rhodanase (braucht Thiosulfat) zu Thiocyanat (renal).",
      "Lichtempfindlich (Infusion abdunkeln).",
      "Reflextachykardie, koronares Steal-Phänomen, Hirndruckanstieg (zerebrale Vasodilatation), Shunt ↑ (hypoxische Vasokonstriktion aufgehoben)."
    ]
  };
  W.urapidil = {
    kette: [
      "Peripher: Antagonist an α1-Adrenozeptoren → Gq-Signal (IP₃/Ca²⁺) der Gefäßmuskulatur bleibt aus → Vasodilatation",
      "Zentral: Agonist an Serotonin-5-HT1A-Rezeptoren im Hirnstamm → ==Sympathikusaktivität ↓==",
      "Gefäßwiderstand ↓ → Blutdruck ↓, ohne dass der Sympathikus mit Tachykardie gegensteuert"
    ],
    folgen: [
      "Kaum Reflextachykardie, kein Hirndruckanstieg (keine relevante zerebrale Vasodilatation) → geeignet bei hypertensiver Krise, auch neurochirurgisch.",
      "Gut titrierbar; Hypotonie bei Hypovolämie."
    ]
  };
  W.nicardipin = dhp([], ["Gut titrierbar als Infusion; erweitert auch Koronar- und Hirngefäße."]);
  W.clevidipin = dhp([
    "Esterbindung → Abbau durch Plasma-Esterasen → Halbwertszeit ca. 1 min, sehr gut steuerbar"
  ], [
    "Lipidemulsion: kontraindiziert bei Soja-/Ei-Allergie und Fettstoffwechselstörungen; Triglyzeride beachten."
  ]);
  W.nimodipin = dhp([
    "Sehr lipophil → passiert die Blut-Hirn-Schranke, ==bevorzugte Wirkung an Hirngefäßen=="
  ], [
    "Verbessert nach aneurysmatischer Subarachnoidalblutung das neurologische Ergebnis – ob über Vasospasmus-Verminderung oder Neuroprotektion, ist nicht abschließend geklärt.",
    "Blutdruckabfall gefährdet die Hirnperfusion → bei Hypotonie Dosis reduzieren statt den Blutdruck fallen zu lassen."
  ]);
  W.hydralazin = {
    kette: [
      "Direkte Wirkung an der glatten Muskulatur der Arteriolen; Mechanismus nicht vollständig geklärt",
      "Diskutiert: Hemmung der IP₃-vermittelten Ca²⁺-Freisetzung aus dem sarkoplasmatischen Retikulum, Öffnung von K⁺-Kanälen, NO-/Prostacyclin-Beteiligung",
      "==Arteriolen erweitern sich, Venen kaum== → Nachlast ↓, Blutdruck ↓"
    ],
    folgen: [
      "Reflextachykardie und Renin-/Wasserretention (Barorezeptorreflex) → Kombination mit Betablocker/Diuretikum in der Dauertherapie.",
      "Verzögerter Wirkbeginn (10–20 min) → Kumulation bei zu schneller Wiederholung.",
      "Lupus-ähnliches Syndrom bei Langsam-Acetylierern; Einsatz bei Präeklampsie."
    ]
  };

  // ---------- Diuretika, Volumen ----------
  W.furosemid = {
    kette: [
      "Erreicht seinen Wirkort über das Lumen: an Albumin gebunden zur Niere, ==aktive Sekretion im proximalen Tubulus (organische Anionentransporter)==",
      "Hemmt den Na⁺-K⁺-2Cl⁻-Kotransporter (NKCC2) an der luminalen Membran des dicken aufsteigenden Teils der Henle-Schleife",
      "Bis zu ca. 25 % des filtrierten Natriums werden nicht zurückgeholt; der Konzentrationsgradient im Nierenmark bricht zusammen",
      "Starke Natrium- und Wasserausscheidung (Schleifendiurese)"
    ],
    folgen: [
      "Hypokaliämie und metabolische Alkalose: mehr Na⁺ erreicht das Sammelrohr → Na⁺-Rückresorption gegen K⁺- und H⁺-Sekretion (dazu Aldosteron ↑ durch Volumenmangel).",
      "Calcium- und Magnesiumverlust: das lumenpositive Potenzial (treibt parazelluläre Ca²⁺/Mg²⁺-Rückresorption) entfällt.",
      "Wirkung ↓ bei Niereninsuffizienz und Hypalbuminämie (weniger Sekretion ins Lumen bzw. weniger Transport).",
      "Vor der Diurese i.v. Venodilatation (prostaglandinvermittelt) → frühe Entlastung beim Lungenödem; NSAR schwächen die Wirkung.",
      "Ototoxisch bei hoher, schneller Gabe (NKCC1 in der Stria vascularis des Innenohrs)."
    ]
  };
  W.mannitol = {
    kette: [
      "Zuckeralkohol, im Glomerulus frei filtriert, kaum rückresorbiert, bleibt im Extrazellulärraum",
      "Im Blut: Plasmaosmolalität ↑ → ==Wasser wandert aus Geweben mit intakter Blut-Hirn-Schranke ins Blut== → Hirnvolumen und Hirndruck ↓",
      "Rheologie: Blutviskosität ↓ → bei intakter Autoregulation Vasokonstriktion der Hirngefäße → zerebrales Blutvolumen ↓ (schneller Effekt)",
      "Im Tubulus: osmotisch gebundenes Wasser wird nicht rückresorbiert → osmotische Diurese"
    ],
    folgen: [
      "Zunächst Volumenexpansion (Lungenödem bei Herzinsuffizienz), dann Volumenverlust und Hypernatriämie.",
      "Bei gestörter Blut-Hirn-Schranke kann Mannitol ins Gewebe übertreten → Rebound-Hirnödem.",
      "Nierenschaden bei hoher Osmolalitätslücke; Osmolalität kontrollieren."
    ]
  };
  W["hypertone-kochsalzloesung"] = {
    kette: [
      "Erhöht die Natriumkonzentration und Osmolalität des Plasmas",
      "Natrium passiert die intakte Blut-Hirn-Schranke praktisch nicht (Reflexionskoeffizient ca. 1, höher als Mannitol)",
      "==Wasser strömt osmotisch aus Hirnzellen und Interstitium ins Gefäßsystem== → Hirnvolumen und Hirndruck ↓",
      "Plasmavolumen ↑ (Wasser aus dem Intrazellulärraum) → Blutdruck und Hirnperfusion stabilisiert"
    ],
    folgen: [
      "Keine osmotische Diurese → günstig bei Hypovolämie (im Gegensatz zu Mannitol).",
      "Hyperchlorämische Azidose bei chloridreicher Lösung; Hypernatriämie.",
      "Bei chronischer Hyponatriämie zu schnelle Korrektur → osmotisches Demyelinisierungssyndrom (Hirnzellen haben Osmolyte abgebaut)."
    ]
  };
  W.albumin = {
    kette: [
      "Großes, negativ geladenes Plasmaprotein, das die intakte Kapillarwand kaum passiert",
      "Erzeugt ca. 75–80 % des kolloidosmotischen Drucks des Plasmas",
      "==Hält Flüssigkeit im Gefäßsystem== (Starling-Kräfte; Glykokalyx als eigentliche Barriere) → Plasmavolumen ↑",
      "Zusätzlich Transport- und Bindungsfunktion (Bilirubin, Pharmaka, Calcium) und Radikalfänger"
    ],
    folgen: [
      "Bei Kapillarleck (Sepsis) tritt Albumin aus → Volumeneffekt geringer, Ödem kann zunehmen.",
      "Belegte Indikationen: großvolumige Parazentese, spontan bakterielle Peritonitis, hepatorenales Syndrom (mit Terlipressin).",
      "Beim Schädel-Hirn-Trauma ungünstig (SAFE-TBI: höhere Sterblichkeit) – möglicher Mechanismus: Übertritt durch geschädigte Blut-Hirn-Schranke.",
      "Teuer; Volumenüberladung."
    ]
  };

  // ---------- Antiemetika ----------
  W.ondansetron = {
    kette: [
      "Reize (Zytostatika, Darmmanipulation, Narkose) → enterochromaffine Zellen im Darm setzen Serotonin frei",
      "Serotonin aktiviert 5-HT3-Rezeptoren (ligandengesteuerte Kationenkanäle) an vagalen Afferenzen und in Area postrema/Nucleus tractus solitarii",
      "Ondansetron ==blockiert diese 5-HT3-Rezeptoren kompetitiv== → die Afferenz depolarisiert nicht",
      "Kein Signal an das Brechzentrum → weniger Übelkeit und Erbrechen"
    ],
    folgen: [
      "Gut gegen chemotherapie- und postoperativ ausgelöstes Erbrechen, schwach gegen Reisekrankheit (vestibulär, cholinerg/histaminerg vermittelt).",
      "QT-Verlängerung (hERG-Blockade), Kopfschmerz, Obstipation (5-HT3 im enterischen Nervensystem).",
      "Mit Apomorphin kontraindiziert (schwere Hypotonie); selten Serotoninsyndrom mit anderen serotonergen Substanzen."
    ]
  };
  W.dexamethason = {
    kette: [
      "Fettlöslich → tritt in die Zelle → bindet an den zytosolischen Glukokortikoid-Rezeptor (keine Mineralokortikoid-Wirkung)",
      "Rezeptor-Komplex wandert in den Zellkern",
      "Transrepression: hemmt die Transkriptionsfaktoren NF-κB und AP-1 → ==weniger Zytokine, COX-2 und induzierbare NO-Synthase==",
      "Transaktivation: z.B. Annexin-1 (hemmt Phospholipase A2 → weniger Prostaglandine/Leukotriene)",
      "Antiemetisch: genauer Mechanismus nicht geklärt (diskutiert: weniger Prostaglandine im Brechzentrum, Serotonin ↓, Endorphine)"
    ],
    folgen: [
      "Wirkt verzögert (Genexpression) → zur PONV-Prophylaxe bei Einleitung geben.",
      "Hyperglykämie für bis zu ca. 24 h (Glukoneogenese, Insulinresistenz) – bei Diabetikern relevant.",
      "Perinealer Juckreiz/Brennen bei schneller i.v.-Gabe (Phosphatester).",
      "Lange biologische Wirkung (36–54 h); Hemmung der HPA-Achse nach Einzeldosis nur kurz."
    ]
  };
  W.droperidol = {
    kette: [
      "Butyrophenon: ==Antagonist an Dopamin-D2-Rezeptoren in der Chemorezeptor-Triggerzone== (Area postrema)",
      "D2 ist Gi-gekoppelt; die Blockade verhindert die dopaminerge Aktivierung der Triggerzone",
      "Weniger Signal zum Brechzentrum → antiemetisch (bereits in niedriger Dosis 0,625–1,25 mg)",
      "Zusätzlich α1-Blockade (Gefäße) und Sedierung"
    ],
    folgen: [
      "QT-Verlängerung (hERG-Blockade) → EKG-Kontrolle bei Risikofaktoren.",
      "Extrapyramidale Symptome und Akathisie (D2-Blockade im Striatum); bei Morbus Parkinson kontraindiziert.",
      "Hypotonie (α1), Dysphorie/innere Unruhe."
    ]
  };
  W.metoclopramid = {
    kette: [
      "Zentral: Antagonist an D2-Rezeptoren in der Chemorezeptor-Triggerzone → antiemetisch",
      "Peripher: D2-Blockade im Magen-Darm-Trakt (Dopamin hemmt dort die Motilität)",
      "5-HT4-Agonismus an enterischen Neuronen → ==mehr Acetylcholin-Freisetzung== → Magenentleerung ↑, Tonus des unteren Ösophagussphinkters ↑",
      "Prokinetisch und antiemetisch"
    ],
    folgen: [
      "Extrapyramidale Störungen (akute Dystonie, v.a. junge Patienten; Spätdyskinesien bei Dauergabe) – Antidot Biperiden.",
      "Kann bei Phäochromozytom eine Katecholaminkrise auslösen; kontraindiziert bei mechanischem Ileus und Morbus Parkinson.",
      "Prokinetik nutzbar vor Notfallnarkose (Magenentleerung), Wirkung auf PONV in üblicher Dosis eher gering."
    ]
  };
  W.dimenhydrinat = {
    kette: [
      "Salz aus Diphenhydramin (wirksamer Anteil) und 8-Chlortheophyllin",
      "Diphenhydramin blockiert H1-Rezeptoren (inverser Agonist) und muskarinische Rezeptoren im Vestibularkern und Nucleus tractus solitarii",
      "==Vestibuläre und vagale Signale zum Brechzentrum werden gedämpft==",
      "Antiemetisch, besonders bei Bewegungs-/vestibulärer Übelkeit; sedierend"
    ],
    folgen: [
      "Sedierung (zentrale H1-Blockade).",
      "Anticholinerge Wirkungen (Mundtrockenheit, Harnverhalt, Tachykardie, Delir bei Älteren).",
      "Paradoxe Erregung bei Kindern."
    ]
  };
  W.scopolamin = {
    kette: [
      "Tertiäres Amin → passiert die Blut-Hirn-Schranke gut",
      "Kompetitiver Antagonist an muskarinischen Rezeptoren (v.a. zentral M1) im Vestibularsystem und Brechzentrum",
      "==Cholinerge Übertragung vestibulärer Reize wird blockiert== → antiemetisch (Reisekrankheit, PONV als Pflaster)",
      "Peripher: Sekretionshemmung, Mydriasis"
    ],
    folgen: [
      "Zentrales anticholinerges Syndrom (Verwirrtheit, Halluzinationen, Delir – v.a. Ältere) → Antidot Physostigmin.",
      "Mydriasis (auch einseitig durch Kontakt mit dem Pflaster → Verwechslung mit Hirndruckzeichen!), Akkommodationsstörung, Mundtrockenheit, Harnverhalt.",
      "Wirkbeginn des Pflasters nach Stunden → am Vorabend bzw. früh präoperativ kleben."
    ]
  };

  // ---------- Gerinnung ----------
  W.heparin = {
    kette: [
      "Eine spezifische Pentasaccharid-Sequenz bindet an Antithrombin",
      "Antithrombin ändert seine Form → ==hemmt Faktor Xa ca. 1000-fach schneller==",
      "Für Thrombin muss die Kette lang genug sein (≥18 Zuckereinheiten), um Antithrombin und Thrombin gleichzeitig zu binden ('Brücke')",
      "Thrombin und Faktor Xa werden etwa im Verhältnis 1:1 gehemmt → weniger Fibrinbildung",
      "Heparin löst sich vom Komplex und wirkt erneut (katalytisch)"
    ],
    folgen: [
      "Wirkt nur mit Antithrombin → Heparinresistenz bei Antithrombinmangel (z.B. vor Herz-Lungen-Maschine).",
      "Monitoring über aPTT/ACT bzw. Anti-Xa.",
      "Antagonisierbar durch Protamin (Ionenbindung).",
      "HIT Typ II: Heparin bildet mit Plättchenfaktor 4 einen Komplex → IgG-Antikörper → Aktivierung der Plättchen über FcγRIIa → Thrombozytopenie UND Thrombosen."
    ]
  };
  W.enoxaparin = {
    kette: [
      "Kürzere Heparinketten (mittleres Molekulargewicht ca. 4500 Da) mit Pentasaccharid-Sequenz → Bindung an Antithrombin",
      "Antithrombin-Komplex ==hemmt bevorzugt Faktor Xa==",
      "Die meisten Ketten sind zu kurz, um Thrombin zu überbrücken → Anti-Xa- zu Anti-IIa-Aktivität ca. 3–4:1",
      "Weniger Thrombin wird gebildet → antithrombotisch"
    ],
    folgen: [
      "Vorhersagbare Wirkung nach s.c.-Gabe (weniger Bindung an Plasmaproteine/Endothel) → kein Routine-Monitoring; falls nötig Anti-Xa.",
      "Renale Ausscheidung → Kumulation bei Niereninsuffizienz.",
      "Protamin hebt die Anti-Xa-Wirkung nur teilweise (ca. 60 %) auf.",
      "HIT seltener als bei unfraktioniertem Heparin; Abstände vor rückenmarknaher Punktion beachten."
    ]
  };
  W.fondaparinux = {
    kette: [
      "Synthetisches Pentasaccharid = genau die Antithrombin-Bindungssequenz des Heparins",
      "Bindet Antithrombin → Formänderung → ==selektive Hemmung von Faktor Xa==",
      "Zu kurz, um Thrombin zu überbrücken → keine direkte Thrombinhemmung"
    ],
    folgen: [
      "Bindet nicht an Plättchenfaktor 4 → praktisch kein HIT-Risiko (Einsatz bei HIT-Anamnese).",
      "Nicht durch Protamin antagonisierbar; lange Halbwertszeit (ca. 17–21 h), renale Ausscheidung."
    ]
  };
  W.argatroban = {
    kette: [
      "Kleines synthetisches Molekül, bindet direkt und reversibel an das aktive Zentrum von Thrombin",
      "==Hemmt freies und gerinnselgebundenes Thrombin== – unabhängig von Antithrombin",
      "Thrombin kann Fibrinogen nicht spalten, Faktoren V/VIII/XI und Plättchen nicht aktivieren"
    ],
    folgen: [
      "Therapie der HIT (keine Kreuzreaktion mit Heparin-Antikörpern).",
      "Hepatische Elimination → bei Leberinsuffizienz reduzieren, bei Niereninsuffizienz geeignet.",
      "Verlängert auch die INR (Testartefakt) → Umstellung auf Vitamin-K-Antagonisten erschwert.",
      "Kein spezifisches Antidot (kurze Halbwertszeit ca. 45 min)."
    ]
  };
  W.protamin = {
    kette: [
      "Stark positiv geladenes Protein (argininreich)",
      "==Bindet das stark negativ geladene Heparin elektrostatisch== zu einem stabilen, unwirksamen Salzkomplex",
      "Antithrombin wird frei; die Heparinwirkung endet innerhalb von Minuten",
      "Dosierung nach Heparinmenge (ca. 1 mg Protamin pro 100 IE Heparin, abhängig von der Zeit seit der Gabe)"
    ],
    folgen: [
      "Überschüssiges Protamin wirkt selbst gerinnungshemmend (hemmt Plättchen und Faktor V) → nicht überdosieren.",
      "Reaktionen: systemische Hypotonie (Histamin, schnelle Gabe), Anaphylaxie (Fischallergie, NPH-Insulin, Vasektomie), pulmonale Hypertonie mit Rechtsherzversagen (Heparin-Protamin-Komplexe → Komplement → Thromboxan).",
      "Bei niedermolekularem Heparin nur teilweise wirksam, bei Fondaparinux unwirksam."
    ]
  };
  W.tranexamsaeure = {
    kette: [
      "Lysin-Analogon: besetzt die Lysin-Bindungsstellen (Kringle-Domänen) des Plasminogens",
      "Plasminogen kann nicht mehr an Fibrin binden → ==tPA aktiviert es am Gerinnsel kaum noch zu Plasmin==",
      "In hoher Konzentration zusätzlich direkte Plasminhemmung",
      "Fibrin wird weniger abgebaut → Gerinnsel bleibt stabil → weniger Blutung"
    ],
    folgen: [
      "Wirksam bei Trauma (innerhalb 3 h), postpartaler Blutung, Herz- und Gelenkchirurgie; nach 3 h beim Trauma eher schädlich.",
      "Krampfanfälle in hoher Dosis (v.a. Herzchirurgie): Antagonismus an GABA-A- und Glycin-Rezeptoren.",
      "Renale Ausscheidung → Dosisreduktion bei Niereninsuffizienz.",
      "Theoretisches Thromboserisiko; in großen Studien kein relevanter Anstieg."
    ]
  };
  W.desmopressin = {
    kette: [
      "Synthetisches Vasopressin-Analogon, selektiv für V2-Rezeptoren (praktisch keine V1-Wirkung)",
      "V2 ist Gs-gekoppelt → cAMP ↑",
      "Endothel: Exozytose der Weibel-Palade-Körperchen → ==von-Willebrand-Faktor und Faktor VIII steigen auf das ca. 2–5-Fache==",
      "Bessere Plättchenadhäsion (vWF–GPIb) → Blutungsneigung ↓ bei vWS Typ 1, leichter Hämophilie A, urämischer/medikamentöser Plättchenfunktionsstörung",
      "Niere: cAMP → Aquaporin-2-Einbau im Sammelrohr → Wasserrückresorption ↑"
    ],
    folgen: [
      "Hyponatriämie (Wasserretention) → Flüssigkeitszufuhr begrenzen, besonders bei Kindern.",
      "Tachyphylaxie nach 2–3 Gaben: Speicher entleert.",
      "Unwirksam bei vWS Typ 3 und Hämophilie B; bei Typ 2B umstritten (Thrombozytopenie).",
      "Flush, Hypotonie bei schneller Gabe (Vasodilatation über endotheliale V2/NO)."
    ]
  };
  W["vitamin-k"] = {
    kette: [
      "Vitamin K (reduzierte Form) ist Kofaktor der γ-Glutamyl-Carboxylase in der Leber",
      "Glutamatreste der Faktoren II, VII, IX, X sowie Protein C und S werden carboxyliert → Gla-Domänen",
      "Gla-Domänen binden Ca²⁺ → ==Faktoren können an Phospholipidmembranen (Plättchen) andocken und werden funktionsfähig==",
      "Vitamin-K-Antagonisten blockieren das Recycling (Vitamin-K-Epoxid-Reduktase, VKORC1); hohe Vitamin-K-Dosen umgehen das über einen alternativen Reduktionsweg"
    ],
    folgen: [
      "Wirkung erst nach ca. 6–12 h (i.v.) bzw. länger oral – neue Faktoren müssen erst gebildet werden → im Notfall zusätzlich PPSB.",
      "Anaphylaktoide Reaktionen bei schneller i.v.-Gabe → langsam infundieren.",
      "Unwirksam bei Synthesestörung (schwere Leberinsuffizienz), wirksam bei Mangel (Verschlussikterus, Malabsorption, Antibiotika)."
    ]
  };
  W.ppsb = {
    kette: [
      "Konzentrat der Faktoren II, VII, IX und X (plus Protein C, S, meist etwas Heparin/Antithrombin)",
      "==Ersetzt die fehlenden Faktoren sofort== – keine Neusynthese nötig",
      "Gerinnungszeit (Quick/INR, EXTEM-CT) normalisiert sich innerhalb von Minuten",
      "Bei Faktor-Xa-Hemmern: hohe Substratmenge überspielt die Hemmung teilweise"
    ],
    folgen: [
      "Erste Wahl zur schnellen Aufhebung von Vitamin-K-Antagonisten (mit Vitamin K, da PPSB nur Stunden wirkt).",
      "Thromboembolierisiko (prothrombotisch), besonders bei wiederholter Gabe.",
      "Heparinhaltige Präparate bei HIT-Anamnese meiden."
    ]
  };
  W.fibrinogenkonzentrat = {
    kette: [
      "Fibrinogen (Faktor I) ist das Substrat des Thrombins",
      "Thrombin spaltet Fibrinopeptide ab → Fibrinmonomere lagern sich zu Fasern zusammen; Faktor XIII vernetzt sie",
      "Fibrinogen verbindet außerdem aktivierte Thrombozyten über GPIIb/IIIa (Aggregation)",
      "==Gerinnsel wird fest== (im ROTEM: FIBTEM-Festigkeit ↑)"
    ],
    folgen: [
      "Fibrinogen fällt bei Massivblutung als erster Faktor kritisch ab (Verbrauch, Verdünnung, Hyperfibrinolyse) → frühe gezielte Gabe (Zielwerte je Leitlinie ca. 1,5–2 g/l).",
      "Dosis ca. 25–50 mg/kg; Thromboserisiko bei Überdosierung."
    ]
  };
  W.idarucizumab = {
    kette: [
      "Humanisiertes Antikörperfragment (Fab)",
      "Bindet Dabigatran mit ca. 350-fach höherer Affinität als Thrombin",
      "==Freies und thrombin-gebundenes Dabigatran wird innerhalb von Minuten neutralisiert==",
      "Thrombin ist wieder aktiv → Gerinnung normalisiert sich"
    ],
    folgen: [
      "Wirkt nur gegen Dabigatran (kein Effekt auf Xa-Hemmer).",
      "Rebound nach 12–24 h möglich: Dabigatran strömt aus dem Gewebe nach → ggf. zweite Dosis.",
      "Enthält Sorbitol (hereditäre Fruktoseintoleranz beachten)."
    ]
  };
  W["andexanet-alfa"] = {
    kette: [
      "Rekombinantes, ==katalytisch inaktives Faktor-Xa-Molekül== ohne Membranbindungsdomäne ('Köder')",
      "Fängt Faktor-Xa-Hemmer (Apixaban, Rivaroxaban) im Plasma ab",
      "Körpereigener Faktor Xa wird frei → Thrombinbildung wieder möglich"
    ],
    folgen: [
      "Bindet auch TFPI und Antithrombin-Heparin-Komplexe → prothrombotisch; Heparinresistenz vor Herz-Lungen-Maschine.",
      "Erhöhte Thromboserate (ANNEXA-I) → in den USA vom Markt genommen; Einsatz kritisch, Alternative PPSB.",
      "Kurze Wirkdauer → Bolus plus Infusion."
    ]
  };

  // ---------- Glukokortikoide ----------
  W.hydrocortison = {
    kette: [
      "Tritt in die Zelle, bindet an den zytosolischen Glukokortikoid-Rezeptor (in höherer Dosis auch an Mineralokortikoid-Rezeptoren)",
      "Rezeptor-Komplex wandert in den Kern → Transaktivation (z.B. Enzyme der Glukoneogenese, Annexin-1, β-Rezeptoren) und Transrepression (NF-κB, AP-1)",
      "==Gefäße sprechen wieder auf Katecholamine an== ('permissive' Wirkung: mehr und besser gekoppelte α-/β-Rezeptoren)",
      "Entzündungsmediatoren ↓, Blutzucker ↑, Natrium-/Wasserretention (mineralokortikoid)"
    ],
    folgen: [
      "Addison-Krise und Steroid-Patient perioperativ: ersetzt das fehlende Cortisol (100 mg i.v., dann 200 mg/24 h).",
      "Septischer Schock: senkt den Vasopressorbedarf (200 mg/Tag), Überlebensvorteil nicht einheitlich.",
      "Hyperglykämie, Hypokaliämie (mineralokortikoid), Infektanfälligkeit, Wundheilungsstörung, Delir."
    ]
  };
  W.methylprednisolon = {
    kette: [
      "Bindet an den Glukokortikoid-Rezeptor (ca. 5-fache Potenz von Hydrocortison, kaum mineralokortikoid)",
      "Kerntranslokation → Transrepression von NF-κB/AP-1 → Zytokine, Adhäsionsmoleküle, COX-2 ↓",
      "Annexin-1 ↑ → Phospholipase A2 gehemmt → weniger Prostaglandine und Leukotriene",
      "==Starke entzündungs- und immunhemmende Wirkung== (z.B. Asthmaanfall, Anaphylaxie-Nachsorge, Transplantation)"
    ],
    folgen: [
      "Wirkung verzögert (Stunden) → im akuten Bronchospasmus/Anaphylaxie nicht Erstmaßnahme.",
      "Kein Ersatz für Hydrocortison bei primärer Nebenniereninsuffizienz (fehlende Mineralokortikoidwirkung).",
      "Hyperglykämie, Myopathie (v.a. mit Relaxanzien auf ICU), Infektionen."
    ]
  };

  // ---------- Inhalationsanästhetika ----------
  function volatil(extraFolgen) {
    return {
      kette: [
        "Gelangt über die Alveolen ins Blut und ins Gehirn/Rückenmark; Wirkung hängt vom Partialdruck im Gewebe ab",
        "Mehrere Zielproteine: Verstärkung von GABA-A- und Glycin-Rezeptoren, Öffnung von Zwei-Poren-K⁺-Kanälen (TREK-1, TASK), Hemmung von NMDA-Rezeptoren und präsynaptischer Transmitterfreisetzung",
        "Neurone werden hyperpolarisiert, erregende Übertragung sinkt",
        "Rückenmark: ==Unbeweglichkeit auf Schmerzreize (MAC) wird vor allem spinal vermittelt==",
        "Gehirn: Bewusstlosigkeit und Amnesie (bereits unter 1 MAC)"
      ],
      folgen: [
        "Blutdruck ↓: Vasodilatation (Ca²⁺-Einstrom ↓, K-ATP-Öffnung) und Myokarddepression.",
        "Bronchodilatation (glatte Muskulatur: Ca²⁺ ↓).",
        "Hirndurchblutung ↑ über 1 MAC (direkte Vasodilatation, Entkopplung) trotz sinkendem Hirnstoffwechsel.",
        "Verstärken nicht-depolarisierende Relaxanzien; Uterusrelaxation (Blutung bei Sectio).",
        "Trigger der malignen Hyperthermie (RYR1-Varianten).",
        "Anästhetische Präkonditionierung des Myokards (mitochondriale K-ATP-Kanäle) – klinischer Nutzen uneinheitlich."
      ].concat(extraFolgen || [])
    };
  }
  W.sevofluran = volatil([
    "Nicht atemwegsreizend, süßlicher Geruch → geeignet für Maskeneinleitung.",
    "Niedriger Blut-Gas-Verteilungskoeffizient (ca. 0,65) → schnelle An- und Abflutung.",
    "Abbau: ca. 2–5 % in der Leber (Fluorid); mit Atemkalk Compound A (Low-Flow).",
    "Klimawirkung deutlich geringer als Desfluran."
  ]);
  W.desfluran = volatil([
    "Atemwegsreizend (Husten, Laryngospasmus) → keine Maskeneinleitung.",
    "Schnelle Konzentrationssteigerung → Sympathikusaktivierung (Tachykardie, Hypertonie) über Rezeptoren in den Atemwegen/Lunge.",
    "Niedrigster Blut-Gas-Koeffizient (ca. 0,45) → schnellstes Erwachen; Siedepunkt 22,8 °C → beheizter Druckverdampfer.",
    "Mit trockenem Atemkalk Kohlenmonoxid-Bildung; sehr hohe Klimawirkung → EU-Verbot ab 2026 außer bei zwingender Indikation."
  ]);
  W.isofluran = volatil([
    "Atemwegsreizend (stechender Geruch).",
    "Starke Vasodilatation → früher diskutiertes 'koronares Steal' (klinisch nicht relevant belegt).",
    "Höherer Blut-Gas-Koeffizient (ca. 1,4) → langsamere An-/Abflutung; sehr geringer Abbau (ca. 0,2 %)."
  ]);
  W.lachgas = {
    kette: [
      "Hemmt NMDA-Rezeptoren (nicht-kompetitiv) → weniger glutamaterge Erregung",
      "Setzt im periaquäduktalen Grau endogene Opioide frei → ==Aktivierung absteigender noradrenerger Hemmbahnen== → spinale α2-vermittelte Analgesie",
      "Gute Analgesie; als alleiniges Anästhetikum zu schwach (MAC ca. 104 %)",
      "Addiert sich zu Volatila (MAC-sparend)"
    ],
    folgen: [
      "Oxidiert das Cobalt von Vitamin B12 → Methionin-Synthase inaktiviert → Myeloneuropathie, megaloblastäre Anämie, Homocystein ↑ (bei B12-Mangel schon nach kurzer Exposition).",
      "Ca. 30-mal löslicher als Stickstoff → strömt schneller in luftgefüllte Räume als N₂ hinaus → Volumen-/Druckzunahme (Pneumothorax, Ileus, Mittelohr, Cuff, intraokulare Gasblase).",
      "Diffusionshypoxie beim Abfluten (Lachgas verdünnt alveolären O₂) → am Ende 100 % O₂; Second-Gas-Effekt bei Einleitung.",
      "Mehr PONV; ozonschädigend und klimawirksam."
    ]
  };

  // ---------- Atemwege ----------
  W.salbutamol = {
    kette: [
      "Agonist am β2-Adrenozeptor der Bronchialmuskulatur",
      "Gs → Adenylatcyclase → cAMP ↑ → Proteinkinase A",
      "PKA hemmt die Myosin-Leichtketten-Kinase, senkt das zytosolische Ca²⁺ und öffnet Ca²⁺-aktivierte K⁺-Kanäle (BK) → Hyperpolarisation",
      "==Bronchialmuskel erschlafft== → Atemwegswiderstand ↓; Mastzellen stabilisiert, mukoziliäre Clearance ↑"
    ],
    folgen: [
      "Tachykardie: β1-Restwirkung und Reflex auf periphere β2-Vasodilatation.",
      "Tremor (β2 an Skelettmuskel), Hypokaliämie (β2 → Na⁺/K⁺-ATPase → K⁺ in die Zellen; therapeutisch bei Hyperkaliämie genutzt).",
      "Laktat ↑ und Hyperglykämie (β2-Stoffwechselwirkung).",
      "Über den Tubus nur ein Bruchteil wirksam → höhere Hubzahl bzw. Vernebler."
    ]
  };
  W.ipratropiumbromid = {
    kette: [
      "Kompetitiver Antagonist an muskarinischen Rezeptoren (v.a. M3) der Bronchialmuskulatur und -drüsen",
      "Vagal freigesetztes Acetylcholin kann Gq → IP₃ → Ca²⁺ nicht mehr auslösen",
      "==Bronchokonstriktion durch Vagustonus und Schleimsekretion ↓=="
    ],
    folgen: [
      "Besonders wirksam bei COPD (hoher vagaler Grundtonus) und in Kombination mit β2-Mimetika.",
      "Quartäres Ammonium → kaum systemisch resorbiert, keine zentralen Effekte; Mundtrockenheit, Glaukomgefahr bei Augenkontakt."
    ]
  };
  W.theophyllin = {
    kette: [
      "Unselektive Hemmung von Phosphodiesterasen → cAMP ↑ in Bronchialmuskel und Entzündungszellen",
      "Antagonismus an Adenosin-A1/A2-Rezeptoren (Adenosin verengt Bronchien bei Asthmatikern)",
      "Aktivierung der Histondeacetylase 2 (antientzündlich, steroidsparend)",
      "Bronchodilatation, Atemantrieb ↑, Zwerchfellkontraktilität ↑"
    ],
    folgen: [
      "Sehr schmaler therapeutischer Bereich: Übelkeit, Tachykardie/Arrhythmien und Krampfanfälle (Adenosin-Antagonismus) → Spiegelkontrolle.",
      "Abbau über CYP1A2: Rauchen beschleunigt, Ciprofloxacin/Erythromycin/Fluvoxamin verlangsamen.",
      "Schwächt die Wirkung von Adenosin."
    ]
  };
  W.magnesiumsulfat = {
    kette: [
      "Mg²⁺ wirkt als physiologischer Ca²⁺-Antagonist an mehreren Stellen",
      "Blockiert L-Typ-Ca²⁺-Kanäle und konkurriert um Ca²⁺-Bindungsstellen → glatte Muskulatur erschlafft (Bronchien, Gefäße, Uterus)",
      "Blockiert den NMDA-Kanal (Magnesium-Block verstärkt) → antikonvulsiv, analgetisch",
      "Präsynaptisch: weniger Ca²⁺-abhängige Acetylcholin-Freisetzung an der Endplatte → Muskelschwäche",
      "Myokard: hemmt frühe Nachdepolarisationen → ==beendet Torsade de pointes=="
    ],
    folgen: [
      "Eklampsieprophylaxe/-therapie (Mittel der Wahl), schwerer Asthmaanfall, Torsade de pointes, Analgesie-Adjuvans.",
      "Verstärkt und verlängert nicht-depolarisierende Relaxanzien.",
      "Überdosierung: Verlust der Patellarsehnenreflexe (Frühzeichen) → Atemdepression → Herzstillstand; Antidot Calcium.",
      "Hypotonie, Flush; Ausscheidung renal."
    ]
  };

  // ---------- Antikonvulsiva ----------
  W.levetiracetam = {
    kette: [
      "Bindung an das synaptische Vesikelprotein SV2A in präsynaptischen Endigungen",
      "Moduliert die Bereitstellung/Exozytose von Transmittervesikeln",
      "==Weniger Glutamat-Freisetzung bei hochfrequenter (epileptischer) Aktivität==; zusätzlich Hemmung von N-Typ-Ca²⁺-Kanälen",
      "Ausbreitung von Anfällen wird gehemmt"
    ],
    folgen: [
      "Keine Leberenzym-Induktion, kaum Interaktionen, renale Ausscheidung → perioperativ und auf ICU gut einsetzbar (Dosis bei Niereninsuffizienz anpassen).",
      "Verhaltensänderungen, Reizbarkeit, Somnolenz."
    ]
  };
  W.phenytoin = {
    kette: [
      "Bindet an spannungsabhängige Na⁺-Kanäle und ==stabilisiert ihren inaktivierten Zustand==",
      "Normale Frequenzen kaum betroffen, aber schnell feuernde Neurone werden blockiert (frequenzabhängig)",
      "Hochfrequente Anfallsentladungen können sich nicht ausbreiten"
    ],
    folgen: [
      "i.v.: Hypotonie und Arrhythmien bis Asystolie (kardiale Na⁺-Kanal-Blockade, Lösungsmittel Propylenglykol) → max. ca. 50 mg/min, EKG-Monitoring.",
      "Purple-Glove-Syndrom (Gewebeschaden bei Paravasat, alkalische Lösung).",
      "Sättigungskinetik: kleine Dosiserhöhungen → starke Spiegelanstiege; Enzyminduktor (CYP3A4) → schwächt viele Medikamente (auch nicht-depolarisierende Relaxanzien bei Dauertherapie).",
      "Gingivahyperplasie, Ataxie, Nystagmus."
    ]
  };
  W.valproat = {
    kette: [
      "Mehrere Mechanismen: Blockade spannungsabhängiger Na⁺-Kanäle (frequenzabhängig)",
      "Hemmung von T-Typ-Ca²⁺-Kanälen (thalamisch, Absencen)",
      "==Mehr GABA==: hemmt den GABA-Abbau (GABA-Transaminase) und fördert die Synthese",
      "Breites antikonvulsives Spektrum"
    ],
    folgen: [
      "Hepatotoxizität (v.a. Kinder, mitochondrial) und Hyperammonämie (Harnstoffzyklus gehemmt) → Enzephalopathie.",
      "Thrombozytopenie und erworbenes von-Willebrand-Syndrom → Blutungsneigung perioperativ.",
      "Carbapeneme senken den Valproatspiegel drastisch (hemmen die Rückspaltung des Glucuronids) → Krampfgefahr.",
      "Stark teratogen; Enzymhemmer (erhöht Spiegel z.B. von Lamotrigin)."
    ]
  };

  // ---------- Magen ----------
  W.pantoprazol = {
    kette: [
      "Prodrug (schwache Base) reichert sich im sauren Kanälchen der Belegzelle an",
      "Säurekatalysierte Umwandlung in das aktive Sulfenamid",
      "Sulfenamid bindet ==kovalent (Disulfidbrücke) an Cysteinreste der H⁺/K⁺-ATPase== (Protonenpumpe)",
      "Säuresekretion dieser Pumpe ist bis zur Neusynthese (ca. 24–48 h) blockiert → Magen-pH ↑"
    ],
    folgen: [
      "Wirkt nur an aktiven Pumpen → am besten vor einer Mahlzeit; volle Wirkung erst nach mehreren Tagen.",
      "Aspirationsprophylaxe: höherer pH des Magensafts mildert eine Aspirationspneumonitis (Volumen nicht sicher kleiner).",
      "Langzeit: Hypomagnesiämie, Clostridioides-difficile- und Pneumonierisiko, Vitamin-B12-Mangel."
    ]
  };

  // ---------- Antibiotika ----------
  function betalaktam(erster, extraFolgen) {
    return {
      kette: [
        erster,
        "Bindung an Penicillin-bindende Proteine (Transpeptidasen der Zellwandsynthese) → ==Quervernetzung des Peptidoglykans blockiert==",
        "Zellwand wird bei wachsenden Bakterien instabil; bakterielle Autolysine bauen weiter ab",
        "Osmotische Lyse → bakterizid"
      ],
      folgen: [
        "Zeitabhängige Wirkung (Zeit über der MHK entscheidend) → intraoperativ nachdosieren bzw. verlängerte/kontinuierliche Infusion bei schweren Infektionen.",
        "Allergie: Kreuzreaktionen hängen vor allem von ähnlichen Seitenketten ab."
      ].concat(extraFolgen || [])
    };
  }
  W.cefazolin = betalaktam("Cephalosporin der 1. Generation: gut gegen grampositive Kokken (Staphylokokken), begrenzt gramnegativ", [
    "Standard der perioperativen Prophylaxe (Hautkeime); Nachgabe nach ca. 4 h bzw. bei großem Blutverlust.",
    "Einzigartige Seitenkette → geringe Kreuzreaktivität mit Penicillinen."
  ]);
  W.cefuroxim = betalaktam("Cephalosporin der 2. Generation: erweitertes gramnegatives Spektrum, stabiler gegen manche β-Laktamasen", [
    "Prophylaxe/Therapie bei Eingriffen mit gramnegativer Flora (z.B. Thorax, HNO)."
  ]);
  W["piperacillin-tazobactam"] = {
    kette: [
      "Piperacillin bindet an Penicillin-bindende Proteine → Zellwandsynthese blockiert → Lyse (bakterizid)",
      "Viele Bakterien zerstören Penicilline mit β-Laktamasen",
      "Tazobactam ==bindet irreversibel an die β-Laktamase ('Suizidhemmer')== und schützt so Piperacillin",
      "Breites Spektrum inkl. Pseudomonas aeruginosa und Anaerobier"
    ],
    folgen: [
      "Zeitabhängig → verlängerte Infusion bei Sepsis.",
      "Hoher Natriumgehalt, Hypokaliämie; Nierenschädigung häufiger in Kombination mit Vancomycin.",
      "Penicillinallergie: echte Kreuzreaktivität (Penicillin-Derivat)."
    ]
  };
  W.meropenem = betalaktam("Carbapenem: bindet besonders an PBP2, ==stabil gegen die meisten β-Laktamasen (auch ESBL, AmpC)==", [
    "Reserve für multiresistente Gramnegative; Carbapenemasen machen unwirksam.",
    "Senkt den Valproatspiegel drastisch → Krampfgefahr; geringeres Krampfrisiko als Imipenem."
  ]);
  W.metronidazol = {
    kette: [
      "Prodrug, diffundiert in Bakterienzellen",
      "Nur in Anaerobiern/Protozoen (niedriges Redoxpotenzial, Ferredoxin) wird die Nitrogruppe reduziert",
      "Es entstehen reaktive Nitro-Radikale → ==DNA-Strangbrüche== → bakterizid",
      "Aerobe Zellen reduzieren es nicht → selektive Wirkung gegen Anaerobier"
    ],
    folgen: [
      "Alkohol-Unverträglichkeit (disulfiramähnlich) beschrieben; metallischer Geschmack.",
      "Periphere Neuropathie und Enzephalopathie bei langer/hoher Gabe.",
      "Hemmt CYP2C9 → Warfarin-Wirkung ↑."
    ]
  };
  W.vancomycin = {
    kette: [
      "Großes Glykopeptid, bindet an das D-Alanyl-D-Alanin-Ende der Zellwandbausteine",
      "Transglykosylierung und Transpeptidierung werden räumlich blockiert → ==Zellwandsynthese gehemmt==",
      "Bakterizid gegen grampositive Erreger (inkl. MRSA); zu groß für die äußere Membran gramnegativer Bakterien"
    ],
    folgen: [
      "Vancomycin-Flushing-Syndrom bei schneller Infusion: direkte Mastzell-Degranulation (MRGPRX2), keine Allergie → langsam infundieren (ca. 1 h pro g).",
      "Nephrotoxisch (v.a. hohe Spiegel, mit Piperacillin-Tazobactam) → spiegel-/AUC-gesteuert dosieren.",
      "Enterokokken mit D-Ala-D-Lac-Bausteinen sind resistent (VRE)."
    ]
  };

  // ---------- Elektrolyte, Puffer, Stoffwechsel ----------
  W.calciumchlorid = {
    kette: [
      "Erhöht das ionisierte Calcium im Extrazellulärraum",
      "Herz/Nerv: Ca²⁺ verschiebt die Schwelle der Na⁺-Kanäle zu positiveren Werten → ==Abstand zwischen Ruhepotenzial und Schwelle wird wieder größer== (Membranstabilisierung bei Hyperkaliämie)",
      "Myokard: mehr Ca²⁺-Einstrom über L-Typ-Kanäle → Kontraktilität ↑; Gefäße: Tonus ↑",
      "Gerinnung: Ca²⁺ ist Kofaktor mehrerer Schritte (Faktor IV)"
    ],
    folgen: [
      "Indikationen: Hyperkaliämie mit EKG-Veränderungen (senkt das Kalium nicht!), Hypokalzämie bei Massivtransfusion (Citrat), Calciumkanalblocker- und Magnesium-Überdosis.",
      "CaCl₂ 10 % enthält ca. 3-mal mehr Calcium pro ml als Calciumgluconat 10 % → stark venenreizend, Nekrose bei Paravasat → möglichst zentral.",
      "Nicht mit Bicarbonat mischen (Ausfällung)."
    ]
  };
  W.natriumbicarbonat = {
    kette: [
      "HCO₃⁻ bindet H⁺: H⁺ + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O",
      "==CO₂ muss abgeatmet werden==, sonst steigt der PaCO₂",
      "Extrazellulärer pH ↑; zusätzlich große Natriumlast (8,4 % = 1 mmol/ml)",
      "Bei Natriumkanal-blockierenden Vergiftungen: Natrium überwindet die Blockade, Alkalisierung senkt den freien Anteil der Substanz"
    ],
    folgen: [
      "Paradoxe intrazelluläre/liquorale Azidose: CO₂ diffundiert schneller in Zellen als HCO₃⁻.",
      "Hypernatriämie, Volumenlast, ionisiertes Calcium ↓, Hypokaliämie (K⁺ in die Zellen), Linksverschiebung der O₂-Bindungskurve.",
      "Sinnvoll bei Trizyklika-Vergiftung mit breitem QRS, Salicylat (Urinalkalisierung), Bicarbonatverlust, ggf. pH <7,2 mit AKI.",
      "Paravasat → Gewebsnekrose; nicht mit Calcium/Katecholaminen in einen Zugang."
    ]
  };
  W["glukose-40"] = {
    kette: [
      "Glukose gelangt über GLUT-Transporter in die Zellen; das Gehirn nimmt sie insulinunabhängig über GLUT1/3 auf",
      "==Energiesubstrat für Neurone== → hypoglykämische Bewusstseinsstörung bildet sich innerhalb von Minuten zurück",
      "Steigender Blutzucker stimuliert die Insulinsekretion"
    ],
    folgen: [
      "Stark hyperosmolar (ca. 2200 mosmol/l) → Venenreizung/Thrombophlebitis, Nekrose bei Paravasat → große Vene, nachspülen; bei Kindern Glukose 10 %.",
      "Bei Mangelernährung/Alkoholkrankheit vorher Thiamin (Wernicke-Gefahr).",
      "Mit Insulin zur Kaliumverschiebung bei Hyperkaliämie."
    ]
  };
  W["insulin-normalinsulin"] = {
    kette: [
      "Bindung an den Insulin-Rezeptor (Tyrosinkinase) → Autophosphorylierung",
      "Insulin-Rezeptor-Substrate → PI3-Kinase → Proteinkinase B (Akt)",
      "==GLUT4 wird in die Membran von Muskel- und Fettzellen eingebaut== → Glukoseaufnahme ↑",
      "Leber: Glykogensynthese ↑, Glukoneogenese ↓; Fettgewebe: Lipolyse ↓ (PDE3B senkt cAMP) → Ketogenese ↓",
      "Na⁺/K⁺-ATPase wird stimuliert → Kalium wandert in die Zellen"
    ],
    folgen: [
      "Hypoglykämie; Hypokaliämie und Hypophosphatämie (Verschiebung in die Zellen) – bei DKA Kalium vor Insulin prüfen.",
      "Hyperkaliämie-Therapie: z.B. 10 IE mit Glukose senkt K⁺ in ca. 15–30 min um ca. 0,6–1 mmol/l (vorübergehend).",
      "Hochdosiert bei Betablocker-/Calciumkanalblocker-Vergiftung (verbessert die Energieversorgung des Myokards)."
    ]
  };
  W.kaliumchlorid = {
    kette: [
      "Kalium ist das wichtigste intrazelluläre Kation; das Ruhemembranpotenzial liegt nahe dem K⁺-Gleichgewichtspotenzial",
      "Gabe hebt das extrazelluläre K⁺ → ==Ruhepotenzial und Repolarisation normalisieren sich== (Hypokaliämie macht Zellen hyperpolarisiert und das Herz arrhythmieanfällig)",
      "Chlorid gleicht gleichzeitig eine hypochlorämische Alkalose aus"
    ],
    folgen: [
      "Zu schnelle Gabe → Hyperkaliämie → Arrhythmien bis Herzstillstand → Infusionsgeschwindigkeit begrenzen (peripher ca. 10 mmol/h, zentral mit Monitoring mehr).",
      "Konzentrierte Lösungen venenreizend; niemals als Bolus.",
      "Hypomagnesiämie verhindert die Korrektur (renale K⁺-Verluste) → Magnesium mitbehandeln."
    ]
  };
  W.flumazenil = {
    kette: [
      "Kompetitiver Antagonist an der Benzodiazepin-Bindungsstelle des GABA-A-Rezeptors (ohne relevante Eigenwirkung)",
      "==Verdrängt Benzodiazepine== → GABA-A-Kanal öffnet wieder nur in normaler Häufigkeit",
      "Sedierung und Atemdepression durch Benzodiazepine heben sich innerhalb von 1–2 min auf"
    ],
    folgen: [
      "Halbwertszeit ca. 1 h – kürzer als viele Benzodiazepine → Resedierung, Überwachung.",
      "Krampfanfälle bei Benzodiazepin-Abhängigkeit oder Mischintoxikation mit prokonvulsiven Substanzen (z.B. Trizyklika) – die schützende Benzodiazepinwirkung fällt weg.",
      "Hebt Propofol-, Opioid- oder Barbiturat-Wirkung nicht auf (andere Bindungsstellen)."
    ]
  };
  W["n-acetylcystein"] = {
    kette: [
      "Wird zu Cystein deacetyliert → ==Baustein für die Glutathion-Synthese in der Leber==",
      "Glutathion bindet den toxischen Paracetamol-Metaboliten NAPQI zu einem ungiftigen Konjugat",
      "Zusätzlich direkte Bindung von NAPQI, Förderung der Sulfatierung und antioxidative Wirkung",
      "Leberzellnekrose wird verhindert bzw. begrenzt (am wirksamsten innerhalb von 8–10 h)"
    ],
    folgen: [
      "Auch spät noch sinnvoll (verbesserte Mikrozirkulation, antioxidativ).",
      "Anaphylaktoide Reaktionen (Histaminfreisetzung) v.a. während der Aufsättigung → langsamer infundieren, Antihistaminikum.",
      "Mukolytisch (spaltet Disulfidbrücken im Schleim)."
    ]
  };
  W.dantrolen = {
    kette: [
      "Bindet an den Ryanodin-Rezeptor RyR1 des sarkoplasmatischen Retikulums der Skelettmuskulatur",
      "Stabilisiert den geschlossenen Zustand (verstärkt die Mg²⁺-Hemmung) → ==Ca²⁺-Freisetzung ↓==",
      "Weniger zytosolisches Ca²⁺ → Dauerkontraktion und ATP-Verbrauch enden",
      "Hypermetabolismus der malignen Hyperthermie (CO₂-, Wärme-, Laktatbildung) bildet sich zurück"
    ],
    folgen: [
      "Wirkt kaum am Herzen (RyR2) → keine relevante Kardiodepression.",
      "Muskelschwäche nach der Gabe (auch Atem-/Schluckmuskulatur).",
      "Lösung stark alkalisch → Venenreizung; ältere Präparate enthalten viel Mannitol (Diurese).",
      "Mit Calciumantagonisten (Verapamil) Hyperkaliämie/Kreislaufversagen beschrieben."
    ]
  };
  W.methylenblau = {
    kette: [
      "In Erythrozyten durch die NADPH-abhängige Methämoglobin-Reduktase zu Leukomethylenblau reduziert",
      "Leukomethylenblau ==reduziert Methämoglobin (Fe³⁺) zurück zu Hämoglobin (Fe²⁺)== → Sauerstofftransport wieder möglich",
      "Zusätzlich: hemmt die NO-Synthase und die lösliche Guanylatcyclase → cGMP ↓ → Gefäßtonus ↑ (vasoplegischer Schock)"
    ],
    folgen: [
      "Bei G6PD-Mangel unwirksam (kein NADPH) und hämolytisch.",
      "Hemmt die MAO-A → mit serotonergen Medikamenten (SSRI) Serotoninsyndrom.",
      "Blaue Färbung → Pulsoxymetrie misst falsch niedrig; blauer Urin."
    ]
  };
  W.glukagon = {
    kette: [
      "Bindet an eigene Glukagon-Rezeptoren (Gs-gekoppelt) in Leber und Herz",
      "Adenylatcyclase → cAMP ↑ → Proteinkinase A",
      "Leber: Glykogenolyse und Glukoneogenese → Blutzucker ↑ (braucht Glykogenspeicher)",
      "Herz: ==cAMP steigt unabhängig vom β-Rezeptor== → Inotropie und Chronotropie bei Betablocker-Vergiftung"
    ],
    folgen: [
      "Unwirksam bei leeren Glykogenspeichern (Alkohol, Hunger, Leberinsuffizienz).",
      "Erbrechen (häufig, Aspirationsgefahr), Hyperglykämie, Hypokaliämie.",
      "Entspannt glatte Muskulatur des Magen-Darm-Trakts (Sphinkter Oddi, Bolusobstruktion im Ösophagus)."
    ]
  };
  W.hydroxocobalamin = {
    kette: [
      "Cobalt-Zentrum des Moleküls bindet Cyanid mit sehr hoher Affinität",
      "Es entsteht ==Cyanocobalamin (Vitamin B12), das ungiftig ist== und über die Niere ausgeschieden wird",
      "Cyanid wird von der Cytochrom-c-Oxidase abgezogen → Zellatmung läuft wieder → Laktatazidose bessert sich"
    ],
    folgen: [
      "Mittel der Wahl bei Rauchgasvergiftung mit Verdacht auf Cyanid (Bewusstlosigkeit, Laktat >8–10 mmol/l).",
      "Fängt auch NO ab → Blutdruckanstieg.",
      "Rote Verfärbung von Haut und Urin; stört kolorimetrische Laborwerte und Blutleck-Detektoren der Dialyse."
    ]
  };

  // ---------- An die Steckbriefe anhängen ----------
  window.WIRKKETTEN = W;
  (window.FLASHCARDS || []).forEach(function (c) {
    if (!c.profile || c.id.indexOf("fc-drug-") !== 0) return;
    const w = W[c.id.slice(8)];
    if (!w) return;
    c.profile.wirkkette = w.kette;
    c.profile.wirkfolgen = w.folgen;
  });
})();
