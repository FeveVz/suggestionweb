"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cuenta un número al entrar en viewport (comunica resultados/performance).
 * Acepta el string final (ej. "S/350K", "+350", "75") y anima la parte
 * numérica conservando prefijo/sufijo. SEO-safe: el SSR y el render inicial
 * muestran el valor final; respeta prefers-reduced-motion.
 */

function parse(s: string) {
  const m = s.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return { prefix: "", raw: null as string | null, suffix: s };
  return { prefix: m[1], raw: m[2], suffix: m[3] };
}

export default function CountUp({ to, duration = 1600, locale = "es-PE" }: { to: string; duration?: number; locale?: string }) {
  const { prefix, raw, suffix } = parse(to);
  const target = raw != null ? parseFloat(raw.replace(/,/g, "")) : null;
  const decimals = raw && raw.includes(".") ? raw.split(".")[1].length : 0;
  const [val, setVal] = useState(target ?? 0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target == null) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }
    setVal(0);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(target * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setVal(target);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  if (target == null) return <span>{to}</span>;

  // Math.max + 0 evita el "-0" fugaz que es-PE formatea con signo durante la animación
  const formatted = (Math.max(0, val) + 0).toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
