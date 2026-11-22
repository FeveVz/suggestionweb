"""Aligera las fuentes de la web: deja solo los caracteres que usa un sitio en español.

Las fuentes completas (vietnamita, griego, latín extendido, variantes
estilísticas que el CSS nunca activa) están en `fuentes/originales/`, fuera de
`public/`, así que no se publican. Este script genera desde ellas las versiones
ligeras `public/fonts/<nombre>-lat.woff2`, que son las que carga el sitio.

Qué se conserva:
- Latín básico y Latín-1 (todas las tildes, ñ, ü, ¿, ¡, «», º, ª, ², ×, ·),
  más Œ œ ı y los acentos sueltos que traen los textos pegados de Word.
- Puntuación general (— – " " ' ' … •), superíndices, monedas (€, $),
  ™ y №, flechas (→ ↗ ↔), signos matemáticos (≤ ≥ − ≈) y figuras geométricas.
- Las funciones tipográficas que el navegador aplica solo: kerning, ligaduras
  (fi, fl), formas locales y composición de acentos.
- El hinting, para que el texto se vea igual de nítido en Windows.

Si algún día un texto usa un carácter que no está aquí (otro idioma, un
símbolo raro), el navegador lo dibuja con la fuente de respaldo y el resto sigue
igual. Para incluirlo: agregarlo a UNICODES y volver a correr el script. El
chequeo del final avisa si en src/ hay caracteres que la fuente original tenía
y la ligera no.

Uso (desde la raíz del repo; requiere `pip install fonttools brotli`):
    python scripts/fuentes-subset.py

Si cambias los archivos generados, cámbiales el nombre (p. ej. -lat2): /fonts/
se sirve con caché `immutable` de un año (next.config.ts).
"""

import os
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEN = os.path.join(RAIZ, "fuentes", "originales")
DESTINO = os.path.join(RAIZ, "public", "fonts")
SUFIJO = "-lat"

UNICODES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+0300-0301,U+0303-0304,U+0308,U+0327,"
    "U+2000-206F,U+2070-209F,U+20A0-20CF,U+2100-214F,U+2190-21FF,"
    "U+2200-22FF,U+25A0-25FF,U+2713,U+FEFF,U+FFFD"
)

# Métricas que no pueden cambiar: de ellas salen las fuentes de respaldo
# («Geomanist Fallback», «Space Grotesk Fallback») de globals.css.
METRICAS = [
    ("head", "unitsPerEm"),
    ("hhea", "ascent"), ("hhea", "descent"), ("hhea", "lineGap"),
    ("OS/2", "sTypoAscender"), ("OS/2", "sTypoDescender"), ("OS/2", "sTypoLineGap"),
    ("OS/2", "usWinAscent"), ("OS/2", "usWinDescent"), ("OS/2", "xAvgCharWidth"),
    ("OS/2", "sxHeight"), ("OS/2", "sCapHeight"),
]


def opciones():
    o = subset.Options()
    o.flavor = "woff2"
    o.desubroutinize = True  # CFF sin subrutinas: comprime mejor en woff2
    o.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14]  # nombre, versión y licencia
    o.notdef_outline = True
    return o


def caracteres_del_sitio():
    usados = set()
    for raiz, _, archivos in os.walk(os.path.join(RAIZ, "src")):
        for a in archivos:
            if a.endswith((".ts", ".tsx", ".css", ".md", ".mdx", ".json")):
                with open(os.path.join(raiz, a), encoding="utf-8") as f:
                    usados.update(ord(c) for c in f.read() if ord(c) > 0x20)
    return usados


def main():
    usados = caracteres_del_sitio()
    total_antes = total_despues = 0
    problemas = []
    for nombre in sorted(os.listdir(ORIGEN)):
        if not nombre.endswith(".woff2"):
            continue
        base = nombre[: -len(".woff2")]
        origen = os.path.join(ORIGEN, nombre)
        destino = os.path.join(DESTINO, base + SUFIJO + ".woff2")

        # load_font respeta recalc_bounds=False: conserva las cajas de los
        # glifos compuestos (comillas, «·», letras con tilde) tal como vienen.
        # Si fontTools las recalcula, difieren en 1 unidad y, con el hinting,
        # el «·» se corre un píxel en Space Grotesk a 40 px.
        fuente = subset.load_font(origen, opciones())
        s = subset.Subsetter(options=opciones())
        s.populate(unicodes=subset.parse_unicodes(UNICODES))
        s.subset(fuente)
        subset.save_font(fuente, destino, opciones())

        a, d = TTFont(origen), TTFont(destino)
        for tabla, campo in METRICAS:
            if getattr(a[tabla], campo) != getattr(d[tabla], campo):
                problemas.append(f"{nombre}: cambió {tabla}.{campo}")
        cmap_a, cmap_d = a.getBestCmap(), d.getBestCmap()
        for cp in sorted(cmap_d):
            if a["hmtx"][cmap_a[cp]][0] != d["hmtx"][cmap_d[cp]][0]:
                problemas.append(f"{nombre}: cambió el ancho de U+{cp:04X}")
                break
        faltan = sorted(cp for cp in usados if cp in cmap_a and cp not in cmap_d)
        if faltan:
            problemas.append(f"{nombre}: el sitio usa {', '.join(f'U+{cp:04X}' for cp in faltan)} y la versión ligera no lo trae")

        ta, td = os.path.getsize(origen), os.path.getsize(destino)
        total_antes += ta
        total_despues += td
        print(f"{base:24} {len(cmap_a):4} → {len(cmap_d):3} caracteres   {ta / 1024:5.1f} KB → {td / 1024:5.1f} KB  (-{100 - 100 * td / ta:.0f} %)")

    print(f"{'Total':24} {'':22} {total_antes / 1024:5.1f} KB → {total_despues / 1024:5.1f} KB  (-{100 - 100 * total_despues / total_antes:.0f} %)")
    if problemas:
        print("\nREVISAR:\n- " + "\n- ".join(problemas))
        sys.exit(1)
    print("Métricas, anchos y caracteres del sitio: OK")


if __name__ == "__main__":
    main()
