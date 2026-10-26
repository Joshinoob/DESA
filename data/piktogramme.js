// Piktogramme für das Spezialwissen: eigene, einfache Strichzeichnungen (keine fremden Grafiken)
// und "Bildgeschichten" – Ursache-Folge-Ketten als nummerierte Bildfolge.
//
// Bildgeschichte: SWFIG.bild(titel, schritte)
//   schritt = { i: "niere:2 > tropfen:1", t: ["Zeile 1", "Zeile 2", "Zeile 3"] }
//   i: Piktogramme, durch Leerzeichen getrennt. Form: name[:farbe[:zeichen]]
//      farbe 0–6 (wie k0–k6), zeichen: up | down | x | ok (kleines Symbol rechts oben)
//      "#Text" = Molekül-/Stoffmarke mit Beschriftung (z.B. "#O₂:1", "#Na⁺:4:up")
//      ">" und "+" zwischen den Piktogrammen werden als Pfeil bzw. Plus gezeichnet.
(function () {
  const F = window.SWFIG;
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  const P = function (d, c) { return '<path d="' + d + '" class="' + (c || "flb") + '"/>'; };
  const C = function (x, y, r, c) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" class="' + (c || "flb") + '"/>'; };
  const R = function (x, y, w, h, rx, c) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + rx + '" class="' + (c || "flb") + '"/>'; };
  const T = function (x, y, s, cls) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" class="' + (cls || "t-l") + ' kt">' + esc(s) + "</text>"; };

  // Alle Piktogramme im Feld 0–48 × 0–48
  const ICON = {
    herz: function () {
      return P("M24 43 C11 33 5 25 5 17 C5 10 10 6 16 6 C20 6 22.5 8 24 11 C25.5 8 28 6 32 6 C38 6 43 10 43 17 C43 25 37 33 24 43 Z") +
        P("M17 13 C15 16 15 20 17 23", "ln");
    },
    lunge: function () {
      return P("M21 15 C13 12 6 22 6 34 C6 42 11 45 17 43 C20 42 21 38 21 33 Z") + P("M27 15 C35 12 42 22 42 34 C42 42 37 45 31 43 C28 42 27 38 27 33 Z") +
        P("M24 3 L24 19 M24 19 L19 25 M24 19 L29 25", "lnb");
    },
    alveole: function () {
      return P("M24 2 L24 14 M24 14 L14 22 M24 14 L34 22", "lnb") + C(12, 30, 8) + C(24, 36, 9) + C(36, 30, 8) + C(18, 42, 5) + C(31, 43, 5);
    },
    niere: function () {
      return P("M29 5 C39 5 44 14 44 24 C44 34 39 43 29 43 C23 43 21 38 23 33 C25 29 25 20 23 15 C21 10 23 5 29 5 Z") +
        P("M23 25 C16 26 14 33 13 46", "ln") + P("M23 21 L6 18 M23 28 L6 31", "ln");
    },
    nephron: function () {
      return C(10, 10, 6) + P("M16 10 C26 6 30 14 22 16 C14 18 20 24 26 22 L26 42 C26 46 32 46 32 42 L32 14 C32 8 40 8 40 14 L40 46", "lnb");
    },
    gehirn: function () {
      return P("M10 30 C4 28 4 18 10 15 C11 8 18 5 24 7 C29 4 37 6 39 12 C45 14 46 23 41 27 C42 33 36 37 31 35 C28 39 20 39 18 35 C13 37 9 34 10 30 Z") +
        P("M16 16 C19 18 19 22 16 24 M24 8 C23 14 27 16 26 22 M33 14 C30 18 33 22 36 22 M20 30 C23 27 28 28 30 31 M28 37 L29 45", "ln");
    },
    leber: function () {
      return P("M4 18 C10 9 31 7 44 11 C45 18 40 26 32 32 C24 38 14 40 8 36 C3 32 2 24 4 18 Z") + P("M27 31 C27 38 33 41 36 36 L33 30", "ln");
    },
    darm: function () {
      return P("M10 9 L37 9 C44 9 44 18 37 18 L12 18 C5 18 5 27 12 27 L36 27 C43 27 43 36 36 36 L14 36 C7 36 7 44 14 44 L30 44", "lnb");
    },
    knochen: function () {
      return P("M13 15 C7 11 3 19 8 22 C3 25 7 34 13 30 L35 30 C41 34 45 25 40 22 C45 19 41 11 35 15 Z");
    },
    muskel: function () {
      return P("M3 24 C11 9 37 9 45 24 C37 39 11 39 3 24 Z") + P("M8 24 L40 24 M10 18 C19 14 29 14 38 18 M10 30 C19 34 29 34 38 30", "ln");
    },
    druese: function () {
      return P("M27 18 C37 18 42 26 42 33 C42 41 37 46 29 46 C24 46 22 42 24 38 C26 35 26 29 24 26 C22 21 23 18 27 18 Z", "ln") +
        P("M14 21 C14 11 22 4 30 5 C38 6 42 13 40 20 C35 15 26 14 14 21 Z");
    },
    schilddruese: function () {
      return P("M24 18 C20 10 8 8 7 20 C6 32 15 38 21 31 L27 31 C33 38 42 32 41 20 C40 8 28 10 24 18 Z") + P("M24 2 L24 14 M24 34 L24 46", "ln");
    },
    pankreas: function () {
      return P("M4 27 C8 18 20 21 28 18 C36 15 44 18 44 24 C44 30 36 30 28 31 C18 32 10 36 4 27 Z") + P("M10 27 L40 23", "ln");
    },
    plazenta: function () {
      return C(24, 18, 15) + P("M24 33 C20 38 28 40 24 46", "lnb") + P("M15 14 C20 20 28 12 33 20", "ln");
    },
    gefaess: function () {
      return R(3, 14, 42, 20, 6) + P("M10 24 L36 24 M31 19 L37 24 L31 29", "ln");
    },
    eng: function () {
      return P("M3 12 C15 12 18 20 24 20 C30 20 33 12 45 12 L45 36 C33 36 30 28 24 28 C18 28 15 36 3 36 Z") + P("M12 24 L36 24 M31 21 L36 24 L31 27", "ln");
    },
    weit: function () {
      return R(3, 8, 42, 32, 8) + P("M10 24 L36 24 M31 19 L37 24 L31 29", "ln");
    },
    vene: function () {
      return R(3, 14, 42, 20, 6) + P("M16 14 L22 24 L16 34 M30 14 L36 24 L30 34", "ln");
    },
    zelle: function () {
      return C(24, 24, 19) + C(24, 24, 7, "fs") + C(13, 16, 2, "fs") + C(35, 31, 2.5, "fs") + C(33, 14, 2, "fs");
    },
    neuron: function () {
      return C(11, 24, 7) + P("M5 15 L9 19 M3 26 L5 25 M6 34 L9 29 M12 14 L12 17", "ln") + P("M18 24 L46 24", "lnb") +
        R(22, 21, 6, 6, 2) + R(32, 21, 6, 6, 2) + P("M44 18 L46 24 L44 30", "ln");
    },
    synapse: function () {
      return P("M4 6 L30 6 C38 6 40 12 40 18 C40 22 36 24 30 24 L4 24 Z") + C(16, 15, 3) + C(26, 14, 3) + C(22, 20, 2.5) +
        P("M4 32 L44 32 L44 44 L4 44 Z") + R(14, 29, 6, 4, 1, "fs") + R(26, 29, 6, 4, 1, "fs");
    },
    erythrozyt: function () {
      return P("M4 24 C4 13 44 13 44 24 C44 35 4 35 4 24 Z") + P("M14 24 C14 20 34 20 34 24 C34 28 14 28 14 24 Z", "ln");
    },
    thrombozyt: function () {
      return P("M12 24 C12 15 21 12 28 15 C35 12 40 20 36 26 C39 33 29 38 22 34 C15 37 9 31 12 24 Z") + C(20, 22, 1.8, "fs") + C(28, 26, 1.8, "fs") + C(24, 30, 1.6, "fs");
    },
    gerinnsel: function () {
      return P("M4 10 L44 38 M4 38 L44 10 M4 24 L44 24 M14 4 L30 44 M34 4 L18 44", "ln") + C(16, 18, 5) + C(32, 30, 5) + C(30, 14, 4);
    },
    tropfen: function () {
      return P("M24 5 C24 5 11 21 11 30 C11 38 17 43 24 43 C31 43 37 38 37 30 C37 21 24 5 24 5 Z");
    },
    salz: function () {
      return R(6, 24, 14, 14, 2) + R(26, 26, 14, 14, 2) + R(16, 8, 14, 14, 2);
    },
    glukose: function () {
      return P("M24 6 L39 15 L39 33 L24 42 L9 33 L9 15 Z") + C(24, 24, 4, "fs");
    },
    rezeptor: function () {
      return R(2, 30, 44, 8, 2, "fl") + P("M2 30 L46 30 M2 38 L46 38", "ln") + P("M24 44 L24 18 M24 18 L16 9 M24 18 L32 9", "lnb") + C(24, 6, 4, "fs");
    },
    kanal: function () {
      return R(2, 18, 44, 14, 2, "fl") + P("M2 18 L46 18 M2 32 L46 32", "ln") + R(14, 12, 8, 26, 3) + R(26, 12, 8, 26, 3) + P("M24 2 L24 46 M20 41 L24 46 L28 41", "ln");
    },
    pumpe: function () {
      return R(2, 18, 44, 14, 2, "fl") + P("M2 18 L46 18 M2 32 L46 32", "ln") + C(24, 25, 12) + T(24, 28, "ATP", "t-n");
    },
    enzym: function () {
      return P("M24 24 L43 14 A20 20 0 1 0 43 34 Z") + C(22, 14, 2.5, "fs");
    },
    spritze: function () {
      return R(10, 18, 24, 12, 2) + P("M34 24 L46 24 M2 18 L2 30 M2 24 L10 24 M16 18 L16 23 M22 18 L22 23 M28 18 L28 23", "ln");
    },
    infusion: function () {
      return P("M14 4 L34 4 L34 28 C34 33 30 35 24 35 C18 35 14 33 14 28 Z") + R(21, 35, 6, 6, 1) + P("M24 41 L24 47 M18 12 L30 12 M18 18 L26 18", "ln");
    },
    tablette: function () {
      return P("M12 17 L30 17 A7 7 0 0 1 30 31 L12 31 A7 7 0 0 1 12 17 Z") + P("M21 17 L21 31", "ln");
    },
    maske: function () {
      return P("M14 16 L34 16 L41 35 C34 41 14 41 7 35 Z") + P("M24 16 L24 6 L44 6", "lnb");
    },
    thermometer: function () {
      return P("M20 6 C20 2 28 2 28 6 L28 29 C33 32 33 43 24 43 C15 43 15 32 20 29 Z") + P("M24 12 L24 33", "lnb") + C(24, 36, 4, "fs");
    },
    uhr: function () {
      return C(24, 24, 19) + P("M24 24 L24 12 M24 24 L33 29", "lnb");
    },
    blitz: function () {
      return P("M28 3 L11 27 L22 27 L18 45 L37 19 L26 19 L31 3 Z");
    },
    manometer: function () {
      return C(24, 26, 18) + P("M24 26 L34 14", "lnb") + P("M11 30 L14 29 M13 18 L16 20 M24 11 L24 14 M35 18 L32 20 M37 30 L34 29", "ln") + C(24, 26, 2.5, "fs");
    },
    monitor: function () {
      return R(3, 7, 42, 30, 4) + P("M7 24 L15 24 L18 16 L22 31 L25 21 L28 24 L41 24 M18 42 L30 42 M24 37 L24 42", "ln");
    },
    warnung: function () {
      return P("M24 5 L44 41 L4 41 Z") + P("M24 17 L24 29", "lnb") + C(24, 35, 2, "fs");
    },
    skalpell: function () {
      return P("M4 44 L22 26 L26 30 L8 48 Z") + P("M22 26 C28 16 38 6 45 4 C44 12 36 24 26 30 Z");
    },
    person: function () {
      return C(24, 10, 7) + P("M12 46 L12 30 C12 22 17 19 24 19 C31 19 36 22 36 30 L36 46");
    },
    kind: function () {
      return C(24, 18, 7) + P("M15 46 L15 36 C15 29 19 27 24 27 C29 27 33 29 33 36 L33 46");
    },
    schwanger: function () {
      return C(22, 10, 7) + P("M12 46 L12 30 C12 22 16 19 22 19 C28 19 31 22 31 26 C40 28 40 42 31 42 L31 46");
    },
    senior: function () {
      return C(20, 10, 7) + P("M9 46 L9 30 C9 22 14 19 20 19 C27 19 31 23 31 30 L31 46") + P("M38 26 L38 46 M38 26 C38 22 34 22 34 25", "lnb");
    },
    baby: function () {
      return C(18, 18, 9) + P("M24 26 C34 24 44 28 44 36 C44 42 36 44 26 42 C20 41 18 34 24 26 Z");
    },
    fett: function () {
      return C(16, 18, 10) + C(32, 20, 9) + C(22, 34, 10) + C(37, 36, 7);
    },
    bakterium: function () {
      return R(8, 16, 32, 16, 8) + P("M8 24 L2 22 M40 24 L46 26 M16 16 L14 10 M30 32 L32 38", "ln");
    },
    dna: function () {
      return P("M14 4 C34 14 14 34 34 44 M34 4 C14 14 34 34 14 44", "lnb") + P("M18 10 L30 10 M22 17 L26 17 M22 31 L26 31 M18 38 L30 38", "ln");
    },
    waage: function () {
      return P("M24 6 L24 40 M14 44 L34 44 M8 12 L40 12", "lnb") + P("M8 12 L3 26 L13 26 Z M40 12 L35 26 L45 26 Z");
    },
    bett: function () {
      return P("M4 16 L4 42 M4 34 L44 34 L44 42 M4 28 L44 28 L44 34", "lnb") + C(12, 22, 5) + R(18, 20, 24, 8, 3);
    },
    urin: function () {
      return P("M14 8 L34 8 L32 44 L16 44 Z") + P("M15 24 L33 24", "ln") + R(16, 24, 16, 19, 1, "fl");
    },
    augen_zu: function () {
      return P("M6 20 C14 30 34 30 42 20", "lnb") + P("M12 27 L9 32 M24 30 L24 36 M36 27 L39 32", "ln");
    }
  };

  // Stoffmarke (Molekül/Ion)
  function marke(txt) {
    // Schriftgröße so wählen, dass der Text in den Kreis (Ø 34) passt
    const n = txt.replace(/[⁺⁻²³₂₃]/g, "").length + txt.replace(/[^⁺⁻²³₂₃]/g, "").length * 0.5;
    const fs = n <= 3 ? 12 : Math.max(6.5, Math.min(11, 29 / (n * 0.58)));
    return C(24, 24, 17) + '<text x="24" y="' + (24 + fs * 0.36).toFixed(1) + '" text-anchor="middle" class="t-s kt" style="font-size:' + fs.toFixed(1) + 'px">' + esc(txt) + "</text>";
  }
  const ZEICHEN = { up: "↑", down: "↓", x: "✕", ok: "✓" };
  const ZFARBE = { up: 5, down: 1, x: 5, ok: 2 };

  // Ein Piktogramm an Position (x, y) mit Kantenlänge size
  F.icon = function (spec, x, y, size) {
    const parts = spec.split(":");
    const name = parts[0], k = parts[1] === undefined || parts[1] === "" ? 6 : parts[1], z = parts[2];
    const body = name.charAt(0) === "#" ? marke(name.slice(1)) : (ICON[name] ? ICON[name]() : "");
    if (!body) console.warn("Piktogramm fehlt:", name);
    const s = size / 48;
    let o = '<g class="pikto k' + k + '" transform="translate(' + x + " " + y + ") scale(" + s.toFixed(3) + ')">' + body + "</g>";
    if (z && ZEICHEN[z]) {
      const zx = x + size - 2, zy = y + 4;
      o += '<g class="k' + ZFARBE[z] + '"><circle cx="' + zx + '" cy="' + zy + '" r="8" class="fs"/><text x="' + zx + '" y="' + (zy + 4) + '" text-anchor="middle" class="t-l pikto-z">' + ZEICHEN[z] + "</text></g>";
    }
    return o;
  };
  F.iconNamen = Object.keys(ICON);

  // Bildgeschichte in zwei Spalten
  F.bild = function (titel, schritte) {
    const PW = 180, GAP = 20, PH = 116, RG = 22, TOP = titel ? 22 : 4;
    let s = titel ? F.t(4, 14, titel, "t-l") : "";
    let maxY = 0;
    schritte.forEach(function (st, i) {
      const col = i % 2, row = Math.floor(i / 2);
      const x = col * (PW + GAP), y = TOP + row * (PH + RG);
      s += F.r(x, y, PW, PH, "s0", null, 10);
      s += '<g class="k6"><circle cx="' + (x + 12) + '" cy="' + (y + 12) + '" r="8" class="fs" style="fill-opacity:0.18"/></g>' + F.t(x + 12, y + 16, String(i + 1), "t-n", "middle", 6);
      // Piktogramme
      const toks = st.i.trim().split(/\s+/);
      const icons = toks.filter(function (q) { return q !== ">" && q !== "+"; });
      const size = icons.length === 1 ? 58 : icons.length === 2 ? 46 : 36;
      const opW = 18;
      let width = 0;
      toks.forEach(function (q) { width += (q === ">" || q === "+") ? opW : size; });
      let cx = x + (PW - width) / 2;
      const iy = y + 8 + (62 - size) / 2;
      toks.forEach(function (q) {
        if (q === ">") { s += F.a(cx + 2, iy + size / 2, cx + opW - 2, iy + size / 2, 0); cx += opW; }
        else if (q === "+") { s += F.t(cx + opW / 2, iy + size / 2 + 5, "+", "t-l", "middle", 0); cx += opW; }
        else { s += F.icon(q, cx, iy, size); cx += size; }
      });
      const lines = Array.isArray(st.t) ? st.t : [st.t];
      lines.forEach(function (ln, j) { s += F.t(x + PW / 2, y + 84 + j * 12, ln, j === 0 && st.fett !== false ? "t-s" : "t-s", "middle", j === 0 ? (st.k === undefined ? 6 : st.k) : null); });
      // Verbinder
      if (i < schritte.length - 1) {
        if (col === 0) s += F.a(x + PW + 3, y + PH / 2, x + PW + GAP - 3, y + PH / 2, 0);
        else s += F.l([[x + PW / 2, y + PH + 2], [x + PW / 2, y + PH + RG / 2], [PW / 2, y + PH + RG / 2]], "ln", 0) + F.a(PW / 2, y + PH + RG / 2, PW / 2, y + PH + RG - 2, 0);
      }
      maxY = y + PH;
    });
    return F.svg(380, maxY + 4, titel || "Bildgeschichte", s);
  };
})();
