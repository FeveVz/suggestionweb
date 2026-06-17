"use client";

import { useEffect, useRef } from "react";

/**
 * Mancha que cambia de percepción NARANJA → CIAN ligada al scroll:
 * "lo que el mercado ve" se transforma en "lo que vemos nosotros" conforme
 * la pieza sube hacia el centro. Decorativa (aria-hidden). `mirror` la voltea
 * para composiciones simétricas tipo Rorschach. Respeta reduced-motion.
 */
export default function ScrollBlot({
  shape = 1,
  size = 400,
  mirror = false,
  className,
  style,
}: {
  shape?: number;
  size?: number | string;
  mirror?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cyan = el.querySelector<HTMLImageElement>("[data-cyan]");
    if (!cyan) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cyan.style.opacity = "1";
      return;
    }
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.95;
        const end = vh * 0.4;
        let p = (start - r.top) / (start - end);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        cyan.style.opacity = String(p);
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
      className={className}
      aria-hidden
      style={{ position: "relative", display: "inline-block", width: size, lineHeight: 0, transform: mirror ? "scaleX(-1)" : undefined, ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/assets/blots/blot-${shape}-orange.png`} alt="" style={{ width: "100%", display: "block" }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img data-cyan src={`/assets/blots/blot-${shape}-cyan.png`} alt="" style={{ position: "absolute", inset: 0, width: "100%", opacity: 0, transition: "opacity 0.15s linear" }} />
    </div>
  );
}
