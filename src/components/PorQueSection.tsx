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
  ["Material según dónde va", "Elegimos el material según el sol, el viento y cuánto tiempo va a estar puesto."],
  ["Diseño, producción e instalación", "Si no tienes el arte lo hacemos, y si la pieza lo pide, la instalamos."],
  ["Todo con factura", "Cada pedido sale con factura. RUC 20615266753."],
];

/**
 * Producción con envío a otra región (Ayacucho): igual que producción, pero
 * sin prometer instalación, que allá no hacemos (owner, 23-nov-2026).
 */
const RAZONES_ENVIO: [string, string][] = [
  ["Por pedido y con fecha", "Cotizamos con tus especificaciones y te decimos la fecha de entrega en tu ciudad antes de empezar."],
  ["Material según dónde va", "Elegimos el material según el sol, la lluvia y cuánto tiempo va a estar puesto."],
  ["Diseño incluido si lo necesitas", "Si no tienes el arte lo hacemos, y no producimos sin tu aprobación."],
  ["Todo con factura", "Cada pedido sale con factura. RUC 20615266753."],
];

/** BTL: personal en la calle, con lo pactado y su informe (no producción física). */
const RAZONES_BTL: [string, string][] = [
  ["Se pacta qué cuenta como resultado", "Volantes repartidos, datos captados o ventas del día: lo decidimos antes de salir a la calle."],
  ["Personal formado en tu mecánica", "Antes de salir, el equipo aprende tu producto y lo que tiene que decir."],
  ["Informe con fotos", "Recibes fotos de cada punto y los números de la jornada, buenos o malos."],
  ["Todo con factura", "Cada activación sale con factura. RUC 20615266753."],
];

const RAZONES: [string, string][] = [
  ["Medimos ventas", "Leads, citas y cierres, mes a mes."],
  ["Estrategia por sector", "Una inmobiliaria no se vende como un restaurante."],
  ["Base en Ica, alcance nacional", "Conocemos el mercado local y operamos campañas en todo el Perú."],
  ["Números a la vista", "Ves cada etapa, del anuncio a la venta."],
];

export default function PorQueSection({
  tone = "light",
  produccion = false,
  tipo,
}: {
  tone?: "light" | "raised";
  produccion?: boolean;
  /** Fuerza el juego de razones; si no, sale de `produccion`. */
  tipo?: "digital" | "produccion" | "btl" | "envio";
}) {
  const bg = tone === "raised" ? "var(--surface-raised)" : "var(--white)";
  const t = tipo ?? (produccion ? "produccion" : "digital");
  const razones = t === "btl" ? RAZONES_BTL : t === "envio" ? RAZONES_ENVIO : t === "produccion" ? RAZONES_PRODUCCION : RAZONES;
  const titulo = "Por qué trabajar con nosotros.";
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
