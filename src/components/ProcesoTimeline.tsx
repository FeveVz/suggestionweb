"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import type { Paso } from "@/content/types";

/**
 * "Nuestro proceso": una línea vertical que se rellena de naranja a cian a
 * medida que bajas, y tarjetas que entran alternando lados. El texto siempre
 * está en el DOM (SEO) y sin JS todo queda visible.
 *
 * Sin framer-motion desde el 21-nov-2026 (auditoría TEC-03): las tarjetas se
 * revelan una vez con IntersectionObserver y una transición CSS, y la línea se
 * rellena con un scaleY escrito en rAF solo mientras la sección está en
 * pantalla. Respeta prefers-reduced-motion (estático y visible).
 */

function StepRow({ paso, index }: { paso: Paso; index: number }) {
  const even = index % 2 === 0;
  return (
    <div className="hk-proc-row" data-side={even ? "left" : "right"}>
      <span aria-hidden className="hk-proc-dot" />
      <div className="hk-proc-card">
        <span aria-hidden className="hk-proc-ghost">{paso.paso}</span>
        <span className="hk-proc-step">Paso {paso.paso}</span>
        <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--white)", margin: "6px 0 0" }}>
          {paso.titulo}
        </h3>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>
          {paso.texto}
        </p>
      </div>
    </div>
  );
}

export default function ProcesoTimeline({ pasos }: { pasos: Paso[] }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cont = lineRef.current;
    const fill = fillRef.current;
    if (!cont || !fill) return;
    const filas = Array.from(cont.querySelectorAll<HTMLElement>(".hk-proc-row"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      filas.forEach((f) => f.classList.add("is-in"));
      fill.style.transform = "scaleY(1)";
      return;
    }
    // Tarjetas: se revelan una sola vez.
    const ioFilas = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          ioFilas.unobserve(e.target);
        }
      }),
      { threshold: 0.2 },
    );
    filas.forEach((f) => ioFilas.observe(f));

    // Línea: progreso entre «arriba al 80 % de la pantalla» y «abajo al 55 %».
    let raf = 0;
    const pintar = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = cont.getBoundingClientRect();
        const vh = window.innerHeight;
        const ini = r.top - vh * 0.8;
        const fin = r.bottom - vh * 0.55;
        const p = ini >= 0 ? 0 : fin <= 0 ? 1 : -ini / (fin - ini);
        fill.style.transform = `scaleY(${Math.min(1, Math.max(0, p)).toFixed(4)})`;
      });
    };
    let escuchando = false;
    const ioLinea = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !escuchando) {
        window.addEventListener("scroll", pintar, { passive: true });
        escuchando = true;
        pintar();
      } else if (!e.isIntersecting && escuchando) {
        window.removeEventListener("scroll", pintar);
        escuchando = false;
        pintar();
      }
    });
    ioLinea.observe(cont);
    return () => {
      ioFilas.disconnect();
      ioLinea.disconnect();
      window.removeEventListener("scroll", pintar);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section style={{ background: "var(--black)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading level={2} kicker="Nuestro proceso" tone="dark" maxWidth="22ch" style={{ marginBottom: 48 }}>
          Una metodología que entrega resultados.
        </SectionHeading>

        <div ref={lineRef} className="hk-proc-timeline">
          <div className="hk-proc-line" aria-hidden>
            <div ref={fillRef} className="hk-proc-line-fill" />
          </div>
          {pasos.map((p, i) => (
            <StepRow key={i} paso={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .hk-proc-timeline { position: relative; max-width: 880px; margin: 0 auto; padding: 6px 0; }
        .hk-proc-line { position: absolute; top: 6px; bottom: 6px; left: 17px; width: 2px; background: var(--border-on-inverse); border-radius: 2px; overflow: hidden; }
        .hk-proc-line-fill { width: 100%; height: 100%; transform-origin: top center; transform: scaleY(0); background: linear-gradient(var(--orange), var(--cyan)); }
        .js .hk-proc-row .hk-proc-card { opacity: 0; transform: translate(-28px, 40px); transition: opacity 500ms var(--ease-out), transform 500ms var(--ease-out); }
        .js .hk-proc-row[data-side="right"] .hk-proc-card { transform: translate(28px, 40px); }
        .js .hk-proc-row .hk-proc-dot { transform: translateX(-50%) scale(0); transition: transform 400ms var(--ease-out) 150ms; }
        .js .hk-proc-row.is-in .hk-proc-card { opacity: 1; transform: none; }
        .js .hk-proc-row.is-in .hk-proc-dot { transform: translateX(-50%) scale(1); }
        .hk-proc-row { position: relative; padding-left: 54px; margin-bottom: clamp(20px, 3.5vw, 40px); }
        .hk-proc-row:last-child { margin-bottom: 0; }
        .hk-proc-dot { position: absolute; left: 18px; top: 8px; transform: translateX(-50%); width: 15px; height: 15px; border-radius: 50%; background: var(--cyan); border: 3px solid var(--black); box-shadow: 0 0 0 2px var(--border-on-inverse); z-index: 2; }
        .hk-proc-card { position: relative; background: var(--ink-800); border: 1px solid var(--border-on-inverse); border-radius: var(--radius-md); padding: var(--space-5) var(--space-6); overflow: hidden; }
        .hk-proc-ghost { position: absolute; right: 14px; bottom: -14px; font: var(--fw-bold) clamp(3.5rem, 7vw, 5.5rem)/1 var(--font-display); color: rgba(255,255,255,0.05); letter-spacing: -0.04em; pointer-events: none; user-select: none; }
        .hk-proc-step { display: inline-block; font: var(--fw-bold) var(--fs-micro)/1 var(--font-accent); text-transform: uppercase; letter-spacing: var(--tracking-label); color: var(--cyan); }

        @media (min-width: 760px) {
          .hk-proc-line { left: 50%; transform: translateX(-50%); }
          .hk-proc-dot { left: 50%; }
          .hk-proc-row { padding-left: 0; display: grid; grid-template-columns: 1fr 1fr; column-gap: 64px; }
          .hk-proc-row[data-side="left"] .hk-proc-card { grid-column: 1; }
          .hk-proc-row[data-side="right"] .hk-proc-card { grid-column: 2; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hk-proc-card { opacity: 1 !important; transform: none !important; transition: none !important; }
          .hk-proc-dot { transform: translateX(-50%) scale(1) !important; }
          .hk-proc-line-fill { transform: scaleY(1) !important; }
        }
      `}</style>
    </section>
  );
}
