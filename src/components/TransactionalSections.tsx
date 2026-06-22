import { Check } from "lucide-react";
import { Section } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import ProcesoTimeline from "@/components/ProcesoTimeline";
import BeneficiosGrid from "@/components/BeneficiosGrid";
import type { ItemTT, Paso } from "@/content/types";

/**
 * Bloques transaccionales (AST) para páginas que venden: "Qué incluye"
 * (checklist), "Beneficios" (por qué este servicio) y "Proceso" específico.
 * Siempre visibles. Complementan el contenido de keyword sin reemplazarlo.
 */
export default function TransactionalSections({
  incluye,
  beneficios,
  proceso,
}: {
  incluye?: ItemTT[];
  beneficios?: ItemTT[];
  proceso?: Paso[];
}) {
  return (
    <>
      {/* QUÉ INCLUYE */}
      {incluye && incluye.length > 0 && (
        <Section tone="light" style={{ background: "var(--surface-raised)" }}>
          <SectionHeading level={2} kicker="Qué incluye" maxWidth="24ch" style={{ marginBottom: 36 }}>
            Todo lo que entra en el servicio.
          </SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "var(--space-4)" }}>
            {incluye.map((it) => (
              <div key={it.titulo} style={{ display: "flex", gap: 14, padding: "var(--space-5)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
                <span aria-hidden style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "var(--cyan)", display: "grid", placeItems: "center" }}>
                  <Check size={17} style={{ color: "var(--black)" }} />
                </span>
                <div>
                  <h3 style={{ font: "var(--fw-medium) var(--fs-base)/1.25 var(--font-display)", color: "var(--text-strong)" }}>{it.titulo}</h3>
                  <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{it.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* BENEFICIOS */}
      {beneficios && beneficios.length > 0 && (
        <Section tone="light">
          <SectionHeading level={2} kicker="Por qué este servicio" maxWidth="24ch" style={{ marginBottom: 36 }}>
            Lo que ganas trabajando con nosotros.
          </SectionHeading>
          <BeneficiosGrid items={beneficios} />
        </Section>
      )}

      {/* PROCESO — timeline con animación de scroll (línea que se rellena + cards alternadas) */}
      {proceso && proceso.length > 0 && <ProcesoTimeline pasos={proceso} />}
    </>
  );
}
