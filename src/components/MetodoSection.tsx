import SectionHeading from "@/components/SectionHeading";

/**
 * Sección de método (Leemos · Moldeamos · Convertimos · Medimos), siempre
 * visible. Reutilizable en cada página de servicio/sector para dar sustancia
 * y reforzar el proceso de marca (doc 06 §método).
 */

const PASOS: [string, string][] = [
  ["Leemos", "Auditamos tu mercado y tu funnel. Vemos la mancha: dónde se pierde la atención antes de convertir."],
  ["Moldeamos", "Diseñamos oferta, mensaje y embudo. Lo que tu público termina viendo lo decidimos nosotros."],
  ["Convertimos", "Activamos campañas y citas. Lead, cita, cierre — sin pasos de vanidad."],
  ["Medimos", "Reportamos CPL, ROAS y cierres con transparencia. Iteramos sobre lo que mueve la venta."],
];

export default function MetodoSection() {
  return (
    <section style={{ background: "var(--black)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading level={2} kicker="Cómo trabajamos" tone="dark" maxWidth="22ch" style={{ marginBottom: 40 }}>
          El método que convierte atención en ventas.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-4)" }}>
          {PASOS.map(([t, d], i) => (
            <div key={t} style={{ padding: "var(--space-6)", border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan)" }}>0{i + 1}</span>
              <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--white)", marginTop: 14 }}>{t}</h3>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
