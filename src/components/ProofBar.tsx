import { ArrowRight } from "lucide-react";
import { Stat } from "@/components/brand/parts";
import CountUp from "@/components/CountUp";

/**
 * Barra de prueba social (doc 16 §5). Banda oscura con la línea del funnel
 * (Lead → Cita → Cierre) y 3–4 métricas reales en grande.
 * Por defecto: S/350K · +350 leads · 8 lotes · 7 años (doc 06 §1).
 */

export type ProofStat = { value: string; label: string };

const DEFAULT_STATS: ProofStat[] = [
  { value: "S/350K", label: "En ventas generadas (Inmobiliaria Ceinys)" },
  { value: "+350", label: "Leads calificados en una sola campaña" },
  { value: "8", label: "Lotes vendidos con S/3,000 de inversión" },
  { value: "7", label: "Años convirtiendo atención en ventas" },
];

const FUNNEL = ["Lead", "Cita", "Cierre"];

export default function ProofBar({
  stats = DEFAULT_STATS,
  funnel = true,
}: {
  stats?: ProofStat[];
  funnel?: boolean;
}) {
  return (
    <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)" }} aria-label="Resultados">
      <span className="hk-grain-layer" aria-hidden />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,5vw,4rem) var(--gutter)" }}>
        {funnel && (
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34, flexWrap: "wrap" }}>
            {FUNNEL.map((s, i) => (
              <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
                <span style={{ font: "var(--fw-medium) var(--fs-lg)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: i === FUNNEL.length - 1 ? "var(--cyan)" : "var(--white)" }}>{s}</span>
                {i < FUNNEL.length - 1 && <ArrowRight size={18} style={{ color: "var(--ink-400)" }} aria-hidden />}
              </span>
            ))}
            <span style={{ marginLeft: "auto", font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "34ch" }}>
              Medimos cada etapa del funnel. Reportamos lo que mueve el negocio.
            </span>
          </div>
        )}
        <div
          className="hk-proof-stats reveal reveal-d2"
          style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`, gap: "var(--space-6)", borderTop: funnel ? "1px solid var(--hairline-inverse)" : "none", paddingTop: funnel ? 34 : 0 }}
        >
          {stats.map((s) => (
            <Stat key={s.label} value={<CountUp to={s.value} />} label={s.label} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .hk-proof-stats { grid-template-columns: 1fr 1fr !important; gap: var(--space-5) !important; }
        }
      `}</style>
    </section>
  );
}
