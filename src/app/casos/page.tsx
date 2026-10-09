import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Section, Btn, Blot, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { casosReviewSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";
import { PORTAFOLIO } from "@/content/portafolio";
import CountUp from "@/components/CountUp";
import Grafico from "@/components/Grafico";

export const metadata: Metadata = buildMetadata({
  title: "Casos de Éxito de Marketing en Ica | Suggestion",
  description:
    "Resultados de negocio, no capturas de likes: 18 lotes a S/230.51 de pauta, S/350K en ventas, 75 reservas, 15 contratos. Mira nuestros casos.",
  path: "/casos",
  ogImage: "/assets/og/casos.png",
});

// Cada tarjeta lleva su período. Son campañas distintas, medidas con criterios
// distintos, y la fecha evita que dos casos del mismo cliente se lean como una
// progresión. Por eso tampoco van seguidos en la lista.
const CASOS: {
  tag: string;
  href: string;
  title: string;
  periodo?: string;
  metric: string;
  note: string;
  quote: string;
  author: string;
  shape: number;
  /**
   * Foto del caso. Hoteles Señor de Luren no tiene una propia y se queda sin
   * ella a propósito: antes que un banco de imágenes, la mancha de marca.
   */
  img?: string;
  alt?: string;
}[] = [
  {
    tag: "Inmobiliario",
    href: "/casos/ceinys-septiembre-2026",
    title: "Grupo Inmobiliario Ceinys",
    periodo: "Del 26 de agosto al 29 de septiembre de 2026",
    metric: "18",
    note: "lotes cerrados a S/230.51 de publicidad por lote, con S/4,149.21 en Meta Ads. Ya descontados los que cerró cartera anterior al período.",
    quote: "",
    author: "",
    shape: 1,
    img: "/assets/casos/ceinys-campana-1.webp",
    alt: "Creatividad de la campaña de lotes de Grupo Inmobiliario Ceinys en Meta Ads",
  },
  {
    tag: "Consumo",
    href: "/casos/granjas-bonanza",
    title: "Granjas Bonanza",
    metric: "15",
    note: "contratos cerrados con S/2,500 en campañas de demanda directa.",
    quote: "Suggestion convierte el presupuesto en clientes reales, no en promesas.",
    author: "Jorge Saykon, Gerente General",
    shape: 5,
    img: "/assets/casos/bonanza-granja.webp",
    alt: "Galón de Granjas Bonanza en operación, en Ica",
  },
  {
    tag: "Turismo",
    href: "/casos/hoteles-senor-de-luren",
    title: "Hoteles Señor de Luren",
    metric: "75",
    note: "reservas generadas en una sola campaña, dentro y fuera de temporada.",
    quote: "En una sola campaña generamos 75 reservas. Los resultados hablan por sí solos.",
    author: "Roberto, Gerente General",
    shape: 6,
  },
  {
    tag: "Automotriz",
    href: "/casos/autoniza-eventos",
    title: "Autoniza",
    periodo: "Eventos del 22 de mayo y el 25 de junio",
    metric: "8",
    note: "autos vendidos en 2 eventos con convocatoria segmentada, activación y cierre en piso.",
    quote: "",
    author: "",
    shape: 2,
    img: "/assets/casos/autoniza-evento.webp",
    alt: "Activación de Autoniza con una camioneta Mitsubishi en la Plaza de Armas de Ica",
  },
  {
    tag: "Inmobiliario",
    href: "/casos/inmobiliaria-ceinys",
    title: "Inmobiliaria Ceinys",
    periodo: "Caso publicado en julio de 2026",
    metric: "S/350.000",
    note: "en ventas: 350 leads y 8 lotes vendidos con S/3,000 en Meta Ads.",
    quote: "Con S/3,000 en Meta Ads captamos 350 leads, concretamos 20 visitas y vendimos 8 lotes. La inversión se pagó sola.",
    author: "Rosario, Jefa de Ventas",
    shape: 1,
    img: "/assets/casos/ceinys-render.webp",
    alt: "Render del proyecto inmobiliario de Inmobiliaria Ceinys",
  },
];

const GALERIA = [
  { src: "/assets/casos/ceinys-campana-1.webp", alt: "Campaña de lotes de Inmobiliaria Ceinys en Meta Ads", cap: "Ceinys — campaña de lotes (Meta Ads)" },
  { src: "/assets/casos/ceinys-campana-2.webp", alt: "Campaña de bono por WhatsApp de Ceinys", cap: "Ceinys — bono de cierre por WhatsApp" },
  { src: "/assets/casos/ceinys-render.webp", alt: "Render del proyecto inmobiliario de Ceinys", cap: "Ceinys — render del proyecto" },
  { src: "/assets/casos/ceinys-campana-3.webp", alt: "Campaña del proyecto Casa de Playa de Ceinys", cap: "Ceinys — proyecto Casa de Playa" },
  { src: "/assets/casos/pacifico-campana.webp", alt: "Campaña de concesionario para Pacífico Motors", cap: "Pacífico Motors — campaña de concesionario" },
];

export default function Casos() {
  return (
    <>
      <JsonLd data={casosReviewSchema(CASOS.filter((c) => c.quote && c.author).map((c) => ({ quote: c.quote, author: c.author })))} />

      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2.5rem,5vw,3.5rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Casos", href: "/casos" }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 760 }}>
            <Label dot>Casos de éxito</Label>
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "16ch" }}>
              Resultados de negocio, no capturas de likes
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "48ch" }}>
              Esto es lo que pasa cuando el marketing se mide en ventas, no en alcance.
            </p>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          {CASOS.map((c) => (
            <article key={c.title} className={`hk-lift hk-caso${c.img ? " hk-caso-foto" : ""}`}>
              {c.img && (
                <div className="hk-caso-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.alt ?? ""} loading="lazy" decoding="async" />
                </div>
              )}
              <div className="hk-caso-txt">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>{c.tag}</span>
                  <Blot shape={c.shape} tint="orange" size={44} />
                </div>
                {c.periodo && (
                  <p style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)", marginTop: 12 }}>{c.periodo}</p>
                )}
                <div style={{ font: "var(--fw-bold) var(--fs-5xl)/0.9 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", marginTop: c.periodo ? 8 : 16 }}>
                  <CountUp to={c.metric} locale={c.metric.includes(".") ? "es-ES" : undefined} />
                </div>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-body)", marginTop: 10, maxWidth: "58ch" }}>
                  <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{c.title}.</strong> {c.note}
                </p>
                {c.quote && (
                  <blockquote style={{ margin: "22px 0 0", borderLeft: "2px solid var(--cyan)", paddingLeft: 20 }}>
                    <p style={{ font: "var(--fw-light) var(--fs-md)/1.5 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>“{c.quote}”</p>
                    <footer style={{ font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-muted)", marginTop: 12 }}>— {c.author}</footer>
                  </blockquote>
                )}
                <a href={c.href} className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
                  Ver el caso completo <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <style>{`
          .hk-caso {
            background: var(--white); border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md); overflow: hidden;
            display: grid; grid-template-columns: minmax(0, 1fr);
          }
          .hk-caso-img { background: var(--surface-raised); }
          .hk-caso-img img {
            width: 100%; height: 100%; min-height: 200px; max-height: 320px;
            object-fit: cover; display: block;
          }
          .hk-caso-txt { padding: clamp(1.5rem, 3vw, 2.5rem); }

          @media (min-width: 860px) {
            /* La foto ocupa su columna entera y el texto respira al lado. */
            .hk-caso-foto { grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr); }
            .hk-caso-img img { max-height: none; }
          }
        `}</style>
      </Section>

      {/* CÓMO CONTAMOS — el gráfico que hace el argumento */}
      <Section tone="light">
        <div style={{ maxWidth: 760, marginBottom: 8 }}>
          <SectionHeading level={2} kicker="Cómo contamos" maxWidth="24ch" style={{ marginBottom: 16 }}>
            La cifra que publicamos no es la más alta que podríamos publicar.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)", color: "var(--text-body)", maxWidth: "62ch" }}>
            Con los mismos datos de una campaña se pueden titular tres cifras distintas, y las tres son ciertas. Esto es lo que pasó con Ceinys entre agosto y septiembre de 2026.
          </p>
        </div>
        <Grafico
          titulo="Tres formas de contar los mismos lotes"
          unidad="lotes"
          datos={[
            { etiqueta: "Cerrados durante el período", valor: 25, texto: "25", nota: "S/165.97 de publicidad por lote" },
            { etiqueta: "Cerrados por leads que entraron durante el período de pauta", valor: 18, texto: "18", nota: "S/230.51 por lote · es la cifra que publicamos", destacada: true },
            { etiqueta: "De ese grupo, los que además tienen origen de anuncio en el CRM", valor: 12, texto: "12", nota: "S/345.77 por lote" },
          ]}
          pie="Cuanto más estricto es el criterio, menos lotes quedan y más caro sale cada uno. Elegimos el del medio: lotes cerrados por leads que entraron durante el período, sin exigir que el CRM confirme el origen."
        />
        <Link href="/casos/ceinys-septiembre-2026" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 26, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
          La resta completa, en el caso de Ceinys <ArrowRight size={15} />
        </Link>
      </Section>

      {/* TRABAJO REAL — galería de piezas de campaña */}
      <Section tone="light">
        <SectionHeading level={2} kicker="El trabajo detrás de los números" maxWidth="22ch" style={{ marginBottom: 16 }}>
          Las piezas que hicieron el resultado.
        </SectionHeading>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.6 var(--font-body)", color: "var(--text-body)", maxWidth: "60ch", marginBottom: 28 }}>
          Producir el evento y vender con él son dos trabajos distintos. Las activaciones, lanzamientos y auspicios que montamos están en el{" "}
          <Link href="/portafolio" className="hk-ulink" style={{ color: "var(--text-strong)", fontWeight: 500 }}>portafolio de activaciones</Link>: {PORTAFOLIO.length} piezas con lo que resolvía cada una y cómo se montó.
        </p>
        <div className="hk-casos-gal">
          {GALERIA.map((g) => (
            <figure key={g.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} loading="lazy" style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", display: "block" }} />
              <figcaption style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)", marginTop: 8 }}>{g.cap}</figcaption>
            </figure>
          ))}
        </div>
        <style>{`
          .hk-casos-gal { columns: 1; column-gap: var(--space-4); }
          @media (min-width: 600px) { .hk-casos-gal { columns: 2; } }
          @media (min-width: 980px) { .hk-casos-gal { columns: 3; } }
          .hk-casos-gal figure { break-inside: avoid; margin: 0 0 var(--space-4); }
        `}</style>
      </Section>

      {/* CIERRE */}
      <section style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
          <SectionHeading level={2} tone="dark" maxWidth="16ch">Hablemos de tu caso.</SectionHeading>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <Btn as="a" href="/contacto" variant="onDark" size="lg">Hablemos de tu caso <ArrowRight size={18} /></Btn>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
              <Phone size={16} style={{ color: "var(--cyan)" }} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
