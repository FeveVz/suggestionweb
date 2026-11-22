"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Las columnas del muro de trabajos (WorkWall), con las imágenes pedidas
 * todas juntas cuando el muro está a ~1200 px de entrar en pantalla.
 *
 * Por qué (22-nov-2026): el muro está a mitad del inicio, pero sus 28
 * miniaturas (unos 190 KB) se pedían de entrada. En un celular con red lenta
 * le quitaban ancho de banda a la hoja de estilos, y el título del inicio
 * (el LCP) se pinta recién cuando llega esa hoja: medido con CPU 4x y red de
 * 1,6 Mbps, el CSS terminaba entre 1,4 y 2,7 s y el título salía entre 2,1 y
 * 3,0 s, contra 2,2 s de un artículo sin muro.
 *
 * Por qué no `loading="lazy"` en cada imagen: las columnas en reversa muestran
 * su segunda copia desde el primer instante y, con lazy, quedaban huecos hasta
 * que cargaba cada foto (lo vio el owner). Aquí se piden las 28 a la vez, y con
 * 1200 px de margen llegan antes de que el muro se vea.
 */
export default function MuroImagenes({
  cols,
  dur,
  dir,
  delay,
}: {
  cols: string[][];
  dur: number[];
  dir: string[];
  delay: number[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [cargar, setCargar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      // Navegador sin IntersectionObserver: se cargan tras el primer cuadro.
      const r = requestAnimationFrame(() => setCargar(true));
      return () => cancelAnimationFrame(r);
    }
    const io = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setCargar(true);
          io.disconnect();
        }
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="hk-wall" aria-hidden>
      {cols.map((col, i) => (
        <div
          key={i}
          className="hk-wall-col"
          style={{ animationDuration: `${dur[i]}s`, animationDirection: dir[i] as "normal" | "reverse", animationDelay: `${delay[i]}s` }}
        >
          {cargar &&
            [...col, ...col].map((src, j) => (
              // srcSet: en móvil el muro son 4 columnas de ~85 px; la variante de
              // 180 px cubre esa medida en pantallas de densidad doble y el
              // escritorio usa la de 360. Se generan con `node scripts/wall-sizes.mjs`.
              // eager + fetchPriority low: una vez pedidas, que carguen ya, pero
              // sin adelantarse a lo que esté pintando la pantalla en ese momento.
              <img
                key={j}
                src={src}
                srcSet={`${src.replace(/\.webp$/, "-180.webp")} 180w, ${src} 360w`}
                sizes="(max-width: 767px) 23vw, 150px"
                alt=""
                loading="eager"
                decoding="async"
                fetchPriority="low"
              />
            ))}
        </div>
      ))}
    </div>
  );
}
