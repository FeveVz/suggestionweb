import { ArrowRight } from "lucide-react";
import { Stat } from "@/components/brand/parts";
import CountUp from "@/components/CountUp";
import { SECTORES } from "@/content/sectores";

/**
 * Barra de prueba social (doc 16 §5). Banda oscura con la línea del funnel
 * (Lead → Cita → Cierre) y 3–4 métricas reales en grande.
 * Por defecto (agregado, sin repetir los casos): 19 marcas de vehículos · +50 marcas · sectores · 7 años.
 * El conteo de sectores se deriva de SECTORES para que nunca se desincronice al añadir verticales.
 */

export type ProofStat = { value: string; label: string };

const DEFAULT_STATS: ProofStat[] = [
  { value: "19", label: "Marcas de vehículos atendidas" },
  { value: "+50", label: "Marcas que confían en nosotros" },
  { value: String(SECTORES.length), label: "Sectores con estrategia propia" },
  { value: "7", label: "Años ayudando a marcas de Ica y Perú a vender más" },
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
        @media (max-width: 900px) {
          .hk-proof-stats { grid-template-columns: 1fr 1fr !important; gap: var(--space-5) !important; }
        }
      `}</style>
    </section>
  );
}
