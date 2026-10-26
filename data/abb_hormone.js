// Abbildungen Spezialwissen Hormone & Stressreaktion – eigene Schemata.
(function () {
  const F = window.SWFIG;
  const t = F.t, r = F.r, c = F.c, l = F.l, a = F.a;

  // ---------- Hormonachse mit negativer Rückkopplung ----------
  const FIG_ACHSE = (function () {
    let s = "";
    s += F.box(90, 6, 200, 34, ["Hypothalamus", "CRH"], 1);
    s += a(190, 40, 190, 62, 1);
    s += F.box(90, 62, 200, 34, ["Hypophysenvorderlappen", "ACTH"], 1);
    s += a(190, 96, 190, 118, 1);
    s += F.box(90, 118, 200, 34, ["Nebennierenrinde", "Cortisol"], 3);
    s += a(190, 152, 190, 174, 3);
    s += F.box(90, 174, 200, 30, "Wirkung im Gewebe", 2);
    s += F.ac(290, 135, 350, 90, 292, 22, 5) + F.ac(290, 140, 330, 110, 292, 80, 5);
    s += t(352, 60, ["hemmt", "(−)"], "t-n", "middle", 5);
    s += t(4, 220, ["Gleiches Prinzip: TRH → TSH → T₄/T₃, GnRH → LH/FSH → Sexualsteroide.", "Exogene Glukokortikoide hemmen CRH und ACTH ebenfalls → die eigene Rinde", "bildet sich zurück (sekundäre Nebenniereninsuffizienz bei Stress)."], "t-n");
    return F.svg(380, 256, "Hypothalamus-Hypophysen-Nebennierenrinden-Achse mit negativer Rückkopplung", s);
  })();

  // ---------- Zonen der Nebenniere ----------
  const FIG_NEBENNIERE = (function () {
    let s = "";
    const zones = [
      ["Kapsel", "", "", 0, 14],
      ["Zona glomerulosa", "Aldosteron ('Salz')", "Angiotensin II, Kalium", 2, 36],
      ["Zona fasciculata", "Cortisol ('Zucker')", "ACTH", 3, 52],
      ["Zona reticularis", "Androgene ('Sex')", "ACTH", 4, 36],
      ["Mark", "Adrenalin (ca. 80 %), Noradrenalin", "Sympathikus (Acetylcholin)", 5, 56]
    ];
    let y = 6;
    zones.forEach(function (z) {
      s += r(4, y, 120, z[4], "flb", z[3], 0);
      s += t(10, y + z[4] / 2 + 4, z[0], z[4] > 20 ? "t-s" : "t-n", "start", 6);
      if (z[1]) { s += t(134, y + z[4] / 2 - 2, z[1], "t-s", "start", z[3]); s += t(134, y + z[4] / 2 + 10, "Reiz: " + z[2], "t-n"); }
      y += z[4];
    });
    s += a(4, y + 10, 124, y + 10, 0, "ln", true) + t(64, y + 24, "außen → innen", "t-n", "middle");
    s += t(134, y + 12, ["Cortisol aus der Rinde fließt durch das Mark und", "fördert dort die Umwandlung von Noradrenalin", "in Adrenalin (Enzym PNMT)."], "t-n");
    return F.svg(380, 248, "Zonen der Nebennierenrinde und das Nebennierenmark mit ihren Hormonen", s);
  })();

  // ---------- Schilddrüsenhormone ----------
  const FIG_SCHILDDRUESE = (function () {
    let s = "";
    s += F.box(4, 6, 150, 30, "Hypothalamus: TRH", 1) + a(79, 36, 79, 52, 1);
    s += F.box(4, 52, 150, 30, "Hypophyse: TSH", 1) + a(79, 82, 79, 98, 1);
    s += F.box(4, 98, 150, 44, ["Schilddrüse", "Jod + Thyreoglobulin"], 3);
    s += F.ac(154, 112, 200, 60, 156, 24, 5) + F.ac(154, 116, 186, 92, 156, 72, 5) + t(204, 60, "hemmt (−)", "t-n", "start", 5);
    s += a(154, 128, 226, 128, 3) + t(190, 122, "T₄ (80–90 %)", "t-n", "middle", 3) + a(154, 136, 226, 152, 3) + t(190, 156, "T₃", "t-n", "middle", 3);
    s += F.box(226, 108, 150, 44, ["Gewebe: Dejodasen", "T₄ → T₃ (aktiv) oder rT₃"], 2);
    s += t(4, 170, ["Halbwertszeit: T₄ ca. 7 Tage, T₃ ca. 1 Tag.", "Angriffspunkte: Thiamazol/Propylthiouracil hemmen die Thyreoperoxidase;", "Propylthiouracil, Kortikoide, Propranolol, Amiodaron hemmen T₄ → T₃."], "t-n");
    return F.svg(380, 210, "Bildung und Umwandlung der Schilddrüsenhormone", s);
  })();

  window.__addSpezialFiguren("hormone", {
    prinzipien: [{ svg: FIG_ACHSE, nach: "Hypothalamus-Hypophysen-Achsen", caption: "Hormonachse am Beispiel Cortisol: ==Das Endhormon bremst Hypothalamus und Hypophyse (negative Rückkopplung)== – deshalb unterdrücken auch von außen gegebene Glukokortikoide die eigene Bildung." }],
    nebenniere: [{ svg: FIG_NEBENNIERE, nach: "Zonen der Nebennierenrinde", caption: "Nebenniere von außen nach innen: 'Salz – Zucker – Sex' in der Rinde, Katecholamine im Mark (Schichtdicken schematisch)." }],
    schilddruese: [{ svg: FIG_SCHILDDRUESE, nach: "Synthese und Umwandlung", caption: "Die Schilddrüse gibt überwiegend T₄ ab; ==das wirksame T₃ entsteht großteils erst im Gewebe==. Die lange Halbwertszeit von T₄ erklärt, warum eine kurze Einnahmepause unkritisch ist." }]
  });
})();
