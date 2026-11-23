import SectionHeading from "@/components/SectionHeading";

/**
 * Sección de método (Leemos · Moldeamos · Convertimos · Medimos), siempre
 * visible. Reutilizable en cada página de servicio/sector para dar sustancia
 * y reforzar el proceso de marca (doc 06 §método).
 */

const PASOS: [string, string][] = [
  ["Leemos", "Revisamos tu mercado y tu proceso de venta para ver dónde se pierden clientes."],
  ["Moldeamos", "Diseñamos la oferta, el mensaje y el embudo."],
  ["Convertimos", "Activamos campañas y agendamos citas, hasta el cierre."],
  ["Medimos", "Reportamos el costo por contacto (CPL), el retorno de la inversión en anuncios (ROAS) y los cierres según el CRM, y ajustamos con esos números."],
];

export default function MetodoSection() {
  return (
    <section data-tono="oscuro" style={{ background: "var(--black)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading level={2} kicker="Cómo trabajamos" tone="dark" maxWidth="22ch" style={{ marginBottom: 40 }}>
          Nuestro método, en cuatro pasos.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-4)" }}>
          {PASOS.map(([t, d], i) => (
            <div key={t} style={{ padding: "var(--space-6)", border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan-text)" }}>0{i + 1}</span>
              <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--white)", marginTop: 14 }}>{t}</h3>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>{d}</p>
              {t === "Medimos" && (
                <a href="/metodo" className="hk-ulink" style={{ display: "inline-block", marginTop: 12, font: "var(--fw-medium) var(--fs-sm)/1.4 var(--font-body)", color: "var(--white)" }}>
                  Cómo medimos →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
