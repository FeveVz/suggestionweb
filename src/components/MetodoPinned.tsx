"use client";

import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/brand/parts";

/**
 * Método como secuencia "pinned": en desktop la sección se fija y los 4 pasos
 * avanzan según el scroll (comunica el proceso Leemos→Moldeamos→Convertimos→
 * Medimos). En móvil o con prefers-reduced-motion cae a un layout apilado.
 */

const PASOS = [
  { n: "01", t: "Leemos", d: "Auditamos tu mercado y tu funnel. Vemos la mancha: dónde se pierde la atención antes de convertir." },
  { n: "02", t: "Moldeamos", d: "Diseñamos oferta, mensaje y embudo. Lo que tu público termina viendo lo decidimos nosotros." },
  { n: "03", t: "Convertimos", d: "Activamos campañas y citas. Lead, cita, cierre — sin pasos de vanidad." },
  { n: "04", t: "Medimos", d: "Reportamos CPL, ROAS y cierres con transparencia. Iteramos sobre lo que mueve la venta." },
];

export default function MetodoPinned() {
  const [pin, setPin] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 920px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!desktop || reduce) {
      setPin(false);
      return;
    }
    setPin(true);
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const span = el.offsetHeight - window.innerHeight;
        const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
        setActive(Math.min(PASOS.length - 1, Math.floor(p * PASOS.length)));
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
  }, []);

  const heading = (
    <>
      <Label tone="onDark">Método</Label>
      <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "14px 0 0", maxWidth: "16ch" }}>
        Consigue lo posible haciendo lo imposible.
      </h2>
    </>
  );

  const topo = (
    <div aria-hidden style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 360, color: "var(--cyan)", opacity: 0.12, zIndex: 0, pointerEvents: "none", display: "flex", width: "200%", animation: "hk-topo-drift 40s linear infinite" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/textures/topo.svg" alt="" style={{ width: "50%", height: "100%", objectFit: "cover" }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/textures/topo.svg" alt="" style={{ width: "50%", height: "100%", objectFit: "cover" }} />
    </div>
  );

  if (!pin) {
    // Apilado (móvil / reduced-motion)
    return (
      <section id="metodo" className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", position: "relative", overflow: "hidden", padding: "var(--section-y) 0" }}>
        <span className="hk-grain-layer" aria-hidden />
        {topo}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ marginBottom: 44 }}>{heading}</div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-5)" }}>
            {PASOS.map((p) => (
              <div key={p.n} style={{ borderTop: "2px solid var(--cyan)", paddingTop: 20 }}>
                <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>{p.n}</span>
                <h3 style={{ font: "var(--fw-medium) var(--fs-xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "12px 0 10px" }}>{p.t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Pinned (desktop)
  const paso = PASOS[active];
  return (
    <section id="metodo" className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", position: "relative" }}>
      <span className="hk-grain-layer" aria-hidden />
      <div ref={ref} style={{ height: `${PASOS.length * 62 + 30}vh`, position: "relative" }}>
        <div style={{ position: "sticky", top: 68, height: "calc(100vh - 68px)", display: "flex", alignItems: "center", overflow: "hidden" }}>
          {topo}
          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
            {/* Izquierda: heading + navegación de pasos */}
            <div>
              {heading}
              <ol style={{ listStyle: "none", margin: "40px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {PASOS.map((p, i) => {
                  const on = i === active;
                  return (
                    <li key={p.n} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0", opacity: on ? 1 : 0.4, transition: "opacity var(--dur-base) var(--ease-out)" }}>
                      <span style={{ position: "relative", width: 38, height: 2, background: "var(--ink-600)", overflow: "hidden", flexShrink: 0 }}>
                        <span style={{ position: "absolute", inset: 0, background: "var(--cyan)", transformOrigin: "left", transform: on ? "scaleX(1)" : "scaleX(0)", transition: "transform var(--dur-slow) var(--ease-out)" }} />
                      </span>
                      <span style={{ font: "var(--fw-medium) var(--fs-md)/1 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: on ? "var(--white)" : "var(--text-on-inverse-mut)" }}>
                        <span style={{ color: "var(--cyan)", marginRight: 10, fontFamily: "var(--font-accent)", fontSize: "var(--fs-xs)" }}>{p.n}</span>{p.t}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
            {/* Derecha: paso activo (crossfade) */}
            <div style={{ position: "relative", minHeight: 320 }}>
              <div key={active} className="hk-fadein" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <span className="hk-ghost hk-ghost--dark" style={{ display: "block" }}>{paso.n}</span>
                <h3 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.0 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: 0 }}>{paso.t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-lg)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "34ch" }}>{paso.d}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
