// Abbildungen für das Spezialwissen: kleine Zeichenhilfen für eigene, schematische SVG-Abbildungen
// und die Registrierung zusätzlicher Abbildungen je Kapitel. Die Abbildungen werden in den Dateien
// data/abb_<organ>.js gezeichnet (eigene Schemata, keine fremden Grafiken).
//
// Format einer Abbildung: { svg, caption, nach?, quelle? }
//   nach:   Zwischenüberschrift im Kapitel ({h: "..."}), hinter deren Abschnitt die Abbildung steht;
//           ohne "nach" erscheint sie am Ende des Kapiteltextes.
//   quelle: Herkunft/Lizenz – nötig, wenn eine fremde Abbildung eingebunden wird:
//           { text: "Autor, Titel", lizenz: "CC BY 4.0", url: "https://…" }.
// Bilddateien statt SVG: { src: "img/spezial/…", alt: "…", caption, quelle } (lokal ablegen, offline-fähig).
//
// Farben über Farbklassen (currentColor): k0 grau, k1 blau, k2 grün, k3 gelb, k4 orange, k5 rot, k6 Text.
(function () {
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function n(v) { return Math.round(v * 10) / 10; }

  const F = {
    svg: function (w, h, label, inner) {
      return '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + esc(label) + '">' + inner + "</svg>";
    },
    // Text; str als Array = mehrere Zeilen (Zeilenabstand lh). anchor: "start" | "middle" | "end".
    t: function (x, y, str, cls, anchor, k, lh) {
      const lines = Array.isArray(str) ? str : [str];
      const c = (cls || "t-s") + (k !== undefined && k !== null ? " k" + k + " kt" : "");
      const a = anchor && anchor !== "start" ? ' text-anchor="' + anchor + '"' : "";
      lh = lh || (/t-h|t-l/.test(cls || "") ? 13 : 12);
      return lines.map(function (l, i) {
        return '<text x="' + n(x) + '" y="' + n(y + i * lh) + '" class="' + c + '"' + a + ">" + esc(l) + "</text>";
      }).join("");
    },
    // Rechteck: cls z.B. "s1" (Rahmen) oder "fl" mit Farbe k
    r: function (x, y, w, h, cls, k, rx) {
      return '<rect x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) + '" height="' + n(h) + '" rx="' + (rx === undefined ? 5 : rx) + '" class="' + (cls || "s0") + (k !== undefined && k !== null ? " k" + k : "") + '"/>';
    },
    c: function (x, y, r, cls, k) {
      return '<circle cx="' + n(x) + '" cy="' + n(y) + '" r="' + n(r) + '" class="' + (cls || "s0") + (k !== undefined && k !== null ? " k" + k : "") + '"/>';
    },
    // Linienzug aus Punkten [[x,y],…]; cls "ln" (dünn), "lnb" (kräftig), "lnd" (gestrichelt)
    l: function (pts, cls, k, close) {
      return '<path d="' + pts.map(function (p, i) { return (i ? "L" : "M") + n(p[0]) + " " + n(p[1]); }).join(" ") + (close ? " Z" : "") +
        '" class="' + (cls || "ln") + (k !== undefined && k !== null ? " k" + k : "") + '"/>';
    },
    // geglätteter Linienzug durch die Punkte (Catmull-Rom → kubische Bézierkurven)
    sm: function (pts, cls, k) {
      let d = "M" + n(pts[0][0]) + " " + n(pts[0][1]);
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
        d += " C" + n(p1[0] + (p2[0] - p0[0]) / 6) + " " + n(p1[1] + (p2[1] - p0[1]) / 6) + " " +
          n(p2[0] - (p3[0] - p1[0]) / 6) + " " + n(p2[1] - (p3[1] - p1[1]) / 6) + " " + n(p2[0]) + " " + n(p2[1]);
      }
      return '<path d="' + d + '" class="' + (cls || "lnb") + (k !== undefined && k !== null ? " k" + k : "") + '"/>';
    },
    p: function (d, cls, k) {
      return '<path d="' + d + '" class="' + (cls || "ln") + (k !== undefined && k !== null ? " k" + k : "") + '"/>';
    },
    // Pfeil (gerade) von (x1,y1) nach (x2,y2); both = Doppelpfeil
    a: function (x1, y1, x2, y2, k, cls, both) {
      const ang = Math.atan2(y2 - y1, x2 - x1), s = 6;
      function head(x, y, an) {
        return '<path class="ah" d="M' + n(x) + " " + n(y) + " L" + n(x - s * Math.cos(an - 0.45)) + " " + n(y - s * Math.sin(an - 0.45)) +
          " L" + n(x - s * Math.cos(an + 0.45)) + " " + n(y - s * Math.sin(an + 0.45)) + ' Z"/>';
      }
      const ex = x2 - 3 * Math.cos(ang), ey = y2 - 3 * Math.sin(ang);
      const sx = both ? x1 + 3 * Math.cos(ang) : x1, sy = both ? y1 + 3 * Math.sin(ang) : y1;
      return '<g class="k' + (k === undefined || k === null ? 0 : k) + '"><path class="' + (cls || "ln") + '" d="M' + n(sx) + " " + n(sy) + " L" + n(ex) + " " + n(ey) + '"/>' +
        head(x2, y2, ang) + (both ? head(x1, y1, ang + Math.PI) : "") + "</g>";
    },
    // gebogener Pfeil über Kontrollpunkt (cx,cy)
    ac: function (x1, y1, cx, cy, x2, y2, k, cls) {
      const ang = Math.atan2(y2 - cy, x2 - cx), s = 6;
      return '<g class="k' + (k === undefined || k === null ? 0 : k) + '"><path class="' + (cls || "ln") + '" d="M' + n(x1) + " " + n(y1) + " Q" + n(cx) + " " + n(cy) + " " + n(x2 - 2 * Math.cos(ang)) + " " + n(y2 - 2 * Math.sin(ang)) + '"/>' +
        '<path class="ah" d="M' + n(x2) + " " + n(y2) + " L" + n(x2 - s * Math.cos(ang - 0.45)) + " " + n(y2 - s * Math.sin(ang - 0.45)) +
        " L" + n(x2 - s * Math.cos(ang + 0.45)) + " " + n(y2 - s * Math.sin(ang + 0.45)) + ' Z"/></g>';
    },
    // Kasten mit zentriertem (mehrzeiligem) Text
    box: function (x, y, w, h, lines, k, cls) {
      const ls = Array.isArray(lines) ? lines : [lines];
      const lh = 12, y0 = y + h / 2 - (ls.length - 1) * lh / 2 + 3.5;
      return F.r(x, y, w, h, "s" + (k === undefined ? 0 : k)) +
        ls.map(function (l, i) { return F.t(x + w / 2, y0 + i * lh, l, i === 0 ? (cls || "t-l") : "t-s", "middle"); }).join("");
    },
    // Transporter als Kreis auf einer Membran mit kurzer Beschriftung
    tr: function (x, y, k, label, r) {
      r = r || 9;
      return F.c(x, y, r, "s" + k) + (label ? F.t(x, y + 3, label, "t-n", "middle") : "");
    },
    // Diagramm-Rahmen: liefert {svg, x(v), y(v), curve(pts|fn, cls, k)}
    plot: function (o) {
      const X = function (v) { return o.x + (v - o.xmin) / (o.xmax - o.xmin) * o.w; };
      const Y = function (v) { return o.y + o.h - (v - o.ymin) / (o.ymax - o.ymin) * o.h; };
      let s = "";
      (o.yticks || []).forEach(function (tk) {
        s += F.l([[o.x, Y(tk[0])], [o.x + o.w, Y(tk[0])]], "grid") + F.t(o.x - 4, Y(tk[0]) + 3, tk[1], "t-n", "end");
      });
      (o.xticks || []).forEach(function (tk) {
        s += F.l([[X(tk[0]), o.y + o.h], [X(tk[0]), o.y + o.h + 3]], "ax") + F.t(X(tk[0]), o.y + o.h + 13, tk[1], "t-n", "middle");
      });
      s += F.l([[o.x, o.y], [o.x, o.y + o.h], [o.x + o.w, o.y + o.h]], "ax");
      if (o.xlabel) s += F.t(o.x + o.w, o.y + o.h + 25, o.xlabel, "t-s", "end");
      if (o.ylabel) s += F.t(o.x - (o.ylabelDx || 0), o.y - 7, o.ylabel, "t-s", "start");
      return {
        svg: s, x: X, y: Y,
        curve: function (src, cls, k, from, to, steps) {
          let pts = src;
          if (typeof src === "function") {
            pts = [];
            from = from === undefined ? o.xmin : from; to = to === undefined ? o.xmax : to; steps = steps || 60;
            for (let i = 0; i <= steps; i++) { const v = from + (to - from) * i / steps; pts.push([v, src(v)]); }
          }
          return F.l(pts.map(function (p) { return [X(p[0]), Y(p[1])]; }), cls || "lnb", k);
        }
      };
    }
  };
  // Zellmodell (Epithel): Lumen links, Zelle Mitte (x 118–262), Blut rechts. items:
  // { s: "a" (Lumenseite) | "b" (Blutseite), y, k, n: Name, io: [["in"|"out", Beschriftung], …], drug: "◀ …" }
  F.zelle = function (y0, h, title, k, items, opt) {
    opt = opt || {};
    const AX = 118, BX = 262;
    let s = F.t(4, y0 + 12, title, "t-l", "start", k);
    s += F.t(4, y0 + 27, opt.lumen || "Lumen", "t-n") + F.t(376, y0 + 27, opt.blut || "Blut", "t-n", "end");
    s += F.r(AX, y0 + 18, BX - AX, h - 22, "s0", null, 10);
    items.forEach(function (it) {
      const ap = it.s === "a", x = ap ? AX : BX, y = y0 + it.y, io = it.io || [], kk = it.k === undefined ? 0 : it.k;
      io.forEach(function (e, j) {
        const yy = y + (j - (io.length - 1) / 2) * 12;
        const outer = ap ? 76 : 304, inner = ap ? AX - 10 : BX + 10;
        const into = e[0] === "in";
        s += into ? F.a(outer, yy, inner, yy, kk) : F.a(inner, yy, outer, yy, kk);
        s += F.t(ap ? 73 : 307, yy + 3.5, e[1], "t-s", ap ? "end" : "start", kk);
      });
      s += F.c(x, y, 9, "s" + kk);
      if (it.n) s += F.t(ap ? x + 13 : x - 13, y + 3.5, it.n, "t-n", ap ? "start" : "end");
      if (it.drug) s += F.t(ap ? 73 : 307, y + ((io.length || 1) - 1) / 2 * 12 + 15.5, it.drug, "t-n", ap ? "end" : "start", 5);
    });
    return s;
  };
  window.SWFIG = F;

  // Zusätzliche Abbildungen an Kapitel hängen: __addSpezialFiguren("niere", { filtration: [fig, …], … })
  window.__addSpezialFiguren = function (organId, map) {
    const organ = (window.SPEZIAL || []).find(function (o) { return o.id === organId; });
    if (!organ) { console.warn("Spezialwissen-Abbildungen: Organ fehlt", organId); return; }
    Object.keys(map).forEach(function (chId) {
      const ch = organ.chapters.find(function (c) { return c.id === chId; });
      if (!ch) { console.warn("Spezialwissen-Abbildungen: Kapitel fehlt", organId, chId); return; }
      ch.figures = (ch.figures || []).concat(map[chId]);
    });
  };
})();
