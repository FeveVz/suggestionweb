import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { Section, Btn, Blot, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { casosReviewSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Casos de Éxito | Suggestion",
  description:
    "Resultados de negocio, no capturas de likes: S/350K en ventas, 8 lotes, 75 reservas, 15 contratos. Mira nuestros casos. Hablemos del tuyo.",
  path: "/casos",
});

const CASOS = [
  {
    tag: "Inmobiliario",
    title: "Inmobiliaria Ceinys",
    metric: "S/350K",
    note: "en ventas: 350 leads y 8 lotes vendidos con S/3,000 en Meta Ads.",
    quote: "Con S/3,000 en Meta Ads captamos 350 leads, concretamos 20 visitas y vendimos 8 lotes. La inversión se pagó sola.",
    author: "Rosario, Jefa de Ventas",
    shape: 1,
  },
  {
    tag: "Consumo",
    title: "Granjas Bonanza",
    metric: "15",
    note: "contratos cerrados con S/2,500 en campañas de demanda directa.",
    quote: "Suggestion convierte el presupuesto en clientes reales, no en promesas.",
    author: "Jorge Saykon, Gerente General",
    shape: 5,
  },
  {
    tag: "Turismo",
    title: "Hoteles Señor de Luren",
    metric: "75",
    note: "reservas generadas en una sola campaña, dentro y fuera de temporada.",
    quote: "En una sola campaña generamos 75 reservas. Los resultados hablan por sí solos.",
    author: "Roberto, Gerente General",
    shape: 6,
  },
];

export default function Casos() {
  return (
    <>
      <JsonLd data={casosReviewSchema(CASOS.map((c) => ({ quote: c.quote, author: c.author })))} />

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
        <div className="reveal" style={{ display: "grid", gap: "var(--space-6)" }}>
          {CASOS.map((c) => (
            <article key={c.title} className="hk-lift" style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "clamp(1.5rem,3vw,2.5rem)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>{c.tag}</span>
                  <Blot shape={c.shape} tint="orange" size={44} />
                </div>
                <div style={{ font: "var(--fw-bold) var(--fs-5xl)/0.9 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", marginTop: 16 }}>{c.metric}</div>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-body)", marginTop: 10 }}>
                  <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{c.title}.</strong> {c.note}
                </p>
              </div>
              <blockquote style={{ margin: 0, borderLeft: "2px solid var(--cyan)", paddingLeft: 22 }}>
                <p style={{ font: "var(--fw-light) var(--fs-lg)/1.45 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>“{c.quote}”</p>
                <footer style={{ font: "var(--fw-light) var(--fs-sm)/1 var(--font-body)", color: "var(--text-muted)", marginTop: 16 }}>— {c.author}</footer>
              </blockquote>
            </article>
          ))}
        </div>
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
