import SectionHeading from "@/components/SectionHeading";

/**
 * Sección "Por qué Suggestion" (4 diferenciadores), siempre visible.
 * Reutilizable en páginas de servicio/sector/hub para dar sustancia y
 * reforzar el posicionamiento (doc 06 §por qué).
 */

// Producción (imprenta, gigantografías, letreros, estructuras, POP, merch,
// publicidad móvil, BTL y eventos): el discurso de leads y funnel no aplica.
// Auditoría CON-12, tarea 2.04.
const RAZONES_PRODUCCION: [string, string][] = [
  ["Por pedido y con fecha", "Cotizamos con tus especificaciones y te decimos la fecha de entrega antes de empezar."],
  ["Material según dónde va", "Elegimos el soporte por el sol, el viento y cuánto tiene que durar, no por catálogo."],
  ["Diseño, producción e instalación", "Si no tienes el arte lo hacemos, y si la pieza lo pide, la instalamos."],
  ["Todo con factura", "Somos una empresa formal con RUC 20615266753: cada pedido sale con su comprobante."],
];

const RAZONES: [string, string][] = [
  ["Performance, no vanidad", "Medimos leads, citas y cierres. Los likes no pagan la planilla."],
  ["Método propio por vertical", "Cada rubro con su playbook, no una receta genérica."],
  ["Base en Ica, alcance nacional", "Conocemos el mercado local y operamos campañas en todo el Perú."],
  ["Transparencia radical", "Ves los números reales del funnel. Sin humo, sin promesas de #1."],
];

export default function PorQueSection({ tone = "light", produccion = false }: { tone?: "light" | "raised"; produccion?: boolean }) {
  const bg = tone === "raised" ? "var(--surface-raised)" : "var(--white)";
  const razones = produccion ? RAZONES_PRODUCCION : RAZONES;
  return (
    <section style={{ background: bg }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading level={2} kicker="Por qué Suggestion" maxWidth="24ch" style={{ marginBottom: 40 }}>
          {produccion ? "Lo que pides, como lo apruebas y en la fecha acordada." : "Leemos lo que otros no ven en tu mercado."}
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
          {razones.map(([t, d], i) => (
            <div key={t} className="hk-lift" style={{ display: "flex", gap: 18, padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan-text)" }}>0{i + 1}</span>
              <div>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)" }}>{t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
