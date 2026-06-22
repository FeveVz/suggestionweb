"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import type { Paso } from "@/content/types";

/**
 * "Nuestro proceso" con animación de scroll (estilo v1): una línea vertical que
 * se rellena de naranja a cian a medida que bajas, y tarjetas que entran
 * alternando lados. Client component (framer-motion). Respeta prefers-reduced-
 * motion (queda estático y visible). El texto siempre está en el DOM (SEO).
 */

function StepRow({ paso, index, reduce }: { paso: Paso; index: number; reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const even = index % 2 === 0;
  const x = useTransform(scrollYProgress, [0, 1], [even ? -36 : 36, 0]);
  const dotScale = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  const cardStyle = reduce ? {} : { opacity, y, x };
  const dotStyle = reduce ? {} : { scale: dotScale };

  return (
    <div ref={ref} className="hk-proc-row" data-side={even ? "left" : "right"}>
      <motion.span aria-hidden className="hk-proc-dot" style={dotStyle} />
      <motion.div className="hk-proc-card" style={cardStyle}>
        <span aria-hidden className="hk-proc-ghost">{paso.paso}</span>
        <span className="hk-proc-step">Paso {paso.paso}</span>
        <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--white)", margin: "6px 0 0" }}>
          {paso.titulo}
        </h3>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>
          {paso.texto}
        </p>
      </motion.div>
    </div>
  );
}

export default function ProcesoTimeline({ pasos }: { pasos: Paso[] }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.55"],
  });

  return (
    <section style={{ background: "var(--black)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading level={2} kicker="Nuestro proceso" tone="dark" maxWidth="22ch" style={{ marginBottom: 48 }}>
          Una metodología que entrega resultados.
        </SectionHeading>

        <div ref={lineRef} className="hk-proc-timeline">
          <div className="hk-proc-line" aria-hidden>
            <motion.div
              className="hk-proc-line-fill"
              style={reduce ? { transform: "scaleY(1)" } : { scaleY: scrollYProgress }}
            />
          </div>
          {pasos.map((p, i) => (
            <StepRow key={i} paso={p} index={i} reduce={reduce} />
          ))}
        </div>
      </div>

      <style>{`
        .hk-proc-timeline { position: relative; max-width: 880px; margin: 0 auto; padding: 6px 0; }
        .hk-proc-line { position: absolute; top: 6px; bottom: 6px; left: 17px; width: 2px; background: var(--border-on-inverse); border-radius: 2px; overflow: hidden; }
        .hk-proc-line-fill { width: 100%; height: 100%; transform-origin: top center; background: linear-gradient(var(--orange), var(--cyan)); }
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
          .hk-proc-card { opacity: 1 !important; transform: none !important; }
          .hk-proc-dot { transform: translateX(-50%) scale(1) !important; }
        }
      `}</style>
    </section>
  );
}
