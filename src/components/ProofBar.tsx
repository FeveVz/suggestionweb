import { Stat } from "@/components/brand/parts";

/**
 * Barra de prueba social (doc 16 §5). Banda oscura con 3–4 métricas reales.
 * Por defecto: S/350K · +350 leads · 8 lotes · 7 años (doc 06 §1).
 */

export type ProofStat = { value: string; label: string };

const DEFAULT_STATS: ProofStat[] = [
  { value: "S/350K", label: "En ventas generadas (Inmobiliaria Ceinys)" },
  { value: "+350", label: "Leads calificados en una sola campaña" },
  { value: "8", label: "Lotes vendidos con S/3,000 de inversión" },
  { value: "7", label: "Años convirtiendo atención en ventas" },
];

export default function ProofBar({ stats = DEFAULT_STATS }: { stats?: ProofStat[] }) {
  return (
    <section style={{ background: "var(--black)", color: "var(--white)" }} aria-label="Resultados">
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,5vw,4rem) var(--gutter)" }}>
        <div
          className="hk-stats"
          style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: "var(--space-6)" }}
        >
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
