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

/** BTL: personal en la calle, con lo pactado y su informe (no producción física). */
const RAZONES_BTL: [string, string][] = [
  ["Se pacta qué cuenta como resultado", "Volantes repartidos, datos captados o ventas del día: lo decidimos antes de salir a la calle."],
  ["Personal formado en tu mecánica", "Antes de salir, el equipo aprende tu producto y lo que tiene que decir. No es personal genérico."],
  ["Informe con fotos", "Terminas con fotos de cada punto y los números de la jornada, también cuando no acompañan."],
  ["Todo con factura", "Somos una empresa formal con RUC 20615266753: cada activación sale con su comprobante."],
];

const RAZONES: [string, string][] = [
  ["Performance, no vanidad", "Medimos leads, citas y cierres. Los likes no pagan la planilla."],
  ["Estrategia propia por sector", "Cada rubro con su forma de vender, no una receta genérica."],
  ["Base en Ica, alcance nacional", "Conocemos el mercado local y operamos campañas en todo el Perú."],
  ["Transparencia radical", "Ves los números reales de cada etapa, del anuncio a la venta. Sin humo, sin promesas de #1."],
];

export default function PorQueSection({
  tone = "light",
  produccion = false,
  tipo,
}: {
  tone?: "light" | "raised";
  produccion?: boolean;
  /** Fuerza el juego de razones; si no, sale de `produccion`. */
  tipo?: "digital" | "produccion" | "btl";
}) {
  const bg = tone === "raised" ? "var(--surface-raised)" : "var(--white)";
  const t = tipo ?? (produccion ? "produccion" : "digital");
  const razones = t === "btl" ? RAZONES_BTL : t === "produccion" ? RAZONES_PRODUCCION : RAZONES;
  const titulo =
    t === "btl"
      ? "Gente en la calle, con lo pactado y su informe."
      : t === "produccion"
        ? "Lo que pides, como lo apruebas y en la fecha acordada."
        : "Leemos lo que otros no ven en tu mercado.";
  return (
    <section style={{ background: bg }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading level={2} kicker="Por qué Suggestion" maxWidth="24ch" style={{ marginBottom: 40 }}>
          {titulo}
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
