"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Pone en pausa las animaciones infinitas de los bloques .hk-anima mientras no
 * se ven (clase .is-pausado → animation-play-state: paused). En reposo, las 18
 * animaciones infinitas de la home consumían ~1,7 s de hilo principal cada 5 s
 * en un celular, aunque estuvieran fuera de pantalla (auditoría PERF-03).
 * Re-escanea en cada cambio de ruta.
 */
export default function PausaFueraDePantalla() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".hk-anima"));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle("is-pausado", !e.isIntersecting);
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
