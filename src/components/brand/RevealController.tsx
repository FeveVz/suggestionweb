"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Revela una sola vez los .reveal cuando entran en pantalla.
 *
 * Antes la opacidad se calculaba en cada cuadro según el scroll: un bloque a
 * media pantalla quedaba al 70 % y los .reveal seguían ocultos hasta que la
 * página hidrataba. Ahora un IntersectionObserver añade .is-revealed al 12 %
 * de visibilidad y el CSS hace una transición de 400 ms (auditoría UX-05).
 * Vive en su propio archivo, sin framer-motion, porque se monta en el layout
 * de todas las páginas (TEC-03). Re-escanea en cada cambio de ruta.
 */
export function RevealController() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-revealed)"));
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
