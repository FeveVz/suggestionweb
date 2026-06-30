"use client";

import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/brand/parts";
import type { ItemTT } from "@/content/types";

/**
 * "Lo que ganas trabajando con nosotros" como secuencia PINNED (mismo efecto
 * que MetodoPinned, en tema claro): en escritorio la sección se fija y los
 * beneficios avanzan según el scroll (numeral fantasma + crossfade + nav de
 * pasos). En móvil o con prefers-reduced-motion cae a un grid apilado.
 * SEO-safe: el contenido siempre se renderiza.
 */
export default function BeneficiosPinned({
  items,
  kicker = "Por qué trabajar con nosotros",
  heading = "Lo que ganas trabajando con nosotros.",
}: {
  items: ItemTT[];
  kicker?: string;
  heading?: string;
}) {
  const [pin, setPin] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // pin/stack según breakpoint y reduced-motion (reactivo al resize)
  useEffect(() => {
    const decide = () => {
      const desktop = window.matchMedia("(min-width: 920px)").matches;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPin(desktop && !reduce);
    };
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, []);

  // beneficio activo ligado al scroll (solo cuando está pinned)
  useEffect(() => {
    if (!pin) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const span = el.offsetHeight - window.innerHeight;
        const p = span > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span)) : 0;
        setActive(Math.min(items.length - 1, Math.floor(p * items.length)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pin, items.length]);

  const num = (i: number) => `0${i + 1}`.slice(-2);

  const head = (
    <>
      <Label dot>{kicker}</Label>
      <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "14px 0 0", maxWidth: "18ch" }}>
        {heading}
      </h2>
    </>
  );

  if (!pin) {
    // Apilado (móvil / reduced-motion)
    return (
      <section style={{ background: "var(--surface-page)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
          <div style={{ marginBottom: 40 }}>{head}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
            {items.map((it, i) => (
              <div key={it.titulo} className="hk-lift" style={{ padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
                <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan)" }}>{num(i)}</span>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", marginTop: 12 }}>{it.titulo}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{it.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Pinned (escritorio)
  const it = items[active];
  return (
    <section style={{ background: "var(--surface-page)", position: "relative" }}>
      <div ref={ref} style={{ height: `${items.length * 62 + 30}vh`, position: "relative" }}>
        <div style={{ position: "sticky", top: 68, height: "calc(100vh - 68px)", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
            {/* Izquierda: heading + navegación de beneficios */}
            <div>
              {head}
              <ol style={{ listStyle: "none", margin: "40px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {items.map((p, i) => {
                  const on = i === active;
                  return (
                    <li key={p.titulo} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0", opacity: on ? 1 : 0.4, transition: "opacity var(--dur-base) var(--ease-out)" }}>
                      <span style={{ position: "relative", width: 38, height: 2, background: "var(--border-subtle)", overflow: "hidden", flexShrink: 0 }}>
                        <span style={{ position: "absolute", inset: 0, background: "var(--cyan)", transformOrigin: "left", transform: on ? "scaleX(1)" : "scaleX(0)", transition: "transform var(--dur-slow) var(--ease-out)" }} />
                      </span>
                      <span style={{ font: "var(--fw-medium) var(--fs-md)/1.15 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: on ? "var(--text-strong)" : "var(--text-muted)" }}>
                        <span style={{ color: "var(--cyan)", marginRight: 10, fontFamily: "var(--font-accent)", fontSize: "var(--fs-xs)" }}>{num(i)}</span>{p.titulo}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
            {/* Derecha: beneficio activo (crossfade) */}
            <div style={{ position: "relative", minHeight: 300 }}>
              <div key={active} className="hk-fadein" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <span className="hk-ghost" style={{ display: "block" }}>{num(active)}</span>
                <h3 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.02 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: 0 }}>{it.titulo}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-lg)/1.5 var(--font-body)", color: "var(--text-muted)", maxWidth: "40ch" }}>{it.texto}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
