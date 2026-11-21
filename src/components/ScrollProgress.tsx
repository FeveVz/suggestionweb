"use client";

import { useEffect, useRef } from "react";

/**
 * Barra fina de progreso de scroll (acento cian) fija arriba.
 *
 * Pasiva + rAF, y sin estado de React: escribe un transform: scaleX en el
 * propio elemento. Antes cambiaba `width` con setState en cada cuadro, lo que
 * re-renderizaba el componente y forzaba layout mientras se hacía scroll
 * (auditoría TEC-03, 21-nov-2026). scaleX lo compone la GPU.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        const p = max > 0 ? el.scrollTop / max : 0;
        if (ref.current) ref.current.style.transform = `scaleX(${p.toFixed(4)})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: "100%",
        transform: "scaleX(0)",
        transformOrigin: "0 50%",
        background: "var(--cyan)",
        zIndex: 200,
        pointerEvents: "none",
      }}
    />
  );
}
