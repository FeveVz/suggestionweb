import { Check, ArrowRight } from "lucide-react";
import { Section, Btn } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import { whatsappLink } from "@/lib/site";
import type { PlanPrecio } from "@/content/types";

/**
 * Tabla de precios (AST): planes referenciales con features y CTA. El plan
 * `popular` se resalta. Siempre visible. Los precios son referenciales; el
 * alcance final se ajusta en la llamada.
 */
export default function PricingSection({ planes, nombre }: { planes?: PlanPrecio[]; nombre?: string }) {
  if (!planes || planes.length === 0) return null;
  return (
    <Section tone="light" style={{ background: "var(--surface-raised)" }}>
      <SectionHeading level={2} kicker="Planes y precios" maxWidth="22ch" style={{ marginBottom: 12 }}>
        Precios claros, sin sorpresas.
      </SectionHeading>
      <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", marginBottom: 40, maxWidth: "54ch" }}>
        Planes referenciales para que tengas una idea. El alcance final lo ajustamos a tu caso en la llamada.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)", alignItems: "stretch" }}>
        {planes.map((p) => {
          const waMsg = `Hola Suggestion, me interesa el plan ${p.nombre}${nombre ? ` de ${nombre}` : ""} (${p.precio} ${p.periodo}).`;
          return (
            <div
              key={p.nombre}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "var(--space-6)",
                background: "var(--white)",
                border: p.popular ? "2px solid var(--cyan)" : "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                position: "relative",
                boxShadow: p.popular ? "var(--shadow-md)" : "none",
              }}
            >
              {p.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 24,
                    background: "var(--cyan)",
                    color: "var(--black)",
                    font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-label)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  Más elegido
                </span>
              )}
              <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)" }}>{p.nombre}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "14px 0 20px" }}>
                <span style={{ font: "var(--fw-bold) var(--fs-3xl)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)" }}>{p.precio}</span>
                <span style={{ font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--text-muted)" }}>{p.periodo}</span>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 11, flex: 1 }}>
                {p.incluye.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Check size={16} style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 3 }} aria-hidden />
                    <span style={{ font: "var(--fw-light) var(--fs-sm)/1.45 var(--font-body)", color: "var(--text-body)" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 26 }}>
                <Btn as="a" href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer" variant={p.popular ? "primary" : "secondary"} size="md" full>
                  Solicitar este plan <ArrowRight size={16} />
                </Btn>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
