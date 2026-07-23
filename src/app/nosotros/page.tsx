import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { Section, Btn, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappLink, absoluteUrl, ORG_ID } from "@/lib/site";
import { EQUIPO } from "@/content/equipo";

export const metadata: Metadata = buildMetadata({
  // La frase exacta se reserva a la portada; aquí va en segundo plano para
  // conservar relevancia sin competir de frente con ella.
  title: "Nosotros | La Agencia de Performance de Ica | Suggestion",
  description:
    "Somos Suggestion, agencia de performance en Ica. Convertimos atención en ventas con un método propio por vertical. Conoce cómo trabajamos.",
  path: "/nosotros",
});

const METODO = [
  ["Leemos", "Auditamos tu mercado y tu proceso de venta. Vemos dónde se pierde la atención antes de convertir."],
  ["Moldeamos", "Diseñamos oferta, mensaje y embudo. Lo que tu público termina viendo lo decidimos nosotros."],
  ["Convertimos", "Activamos campañas y agendamos citas, hasta el cierre."],
  ["Medimos", "Reportamos CPL, ROAS y cierres con transparencia. Iteramos sobre lo que mueve la venta."],
];

const POR_QUE = [
  ["Performance, no vanidad", "Medimos leads, citas y cierres. Los likes no pagan la planilla."],
  ["Método propio por vertical", "Cada rubro con su playbook, no una receta genérica."],
  ["Base en Ica, alcance nacional", "Conocemos el mercado local y operamos campañas en todo el Perú."],
  ["Transparencia radical", "Ves los números reales del funnel. Sin humo, sin promesas de #1."],
];

const VALORES = [
  ["Humanidad", "Detrás de cada negocio hay personas. Priorizamos relaciones genuinas, no contratos fríos."],
  ["Transparencia", "Comunicación clara en cada propuesta y reporte. Sin letras pequeñas ni promesas vacías."],
  ["Autenticidad", "Mostramos la verdad de cada marca. Contenido real y resultados medibles, no postureo."],
  ["Empatía", "Entendemos tu necesidad antes de proponer. Partimos de tu negocio, no de una plantilla."],
  ["Adaptabilidad", "Flexibles en la propuesta, ágiles en la ejecución. Nos movemos a la velocidad de tu mercado."],
];

// Única fuente de verdad del equipo (fotos incluidas): content/equipo.ts

export default function Nosotros() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Nosotros | Suggestion",
    url: absoluteUrl("/nosotros"),
    about: { "@id": ORG_ID },
  };
  return (
    <>
      <JsonLd data={aboutSchema} />

      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2.5rem,5vw,4rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/nosotros" }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 760 }}>
            <Label dot>Nosotros</Label>
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "16ch" }}>
              La agencia de performance de Ica
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "54ch" }}>
              Nacimos para una cosa: convertir la atención de tu mercado en ventas. Mostramos números reales y trabajamos todo el proceso, de la estrategia al cierre.
            </p>
            <div className="hk-enter-4" style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
              <Btn as="a" href="/contacto" size="lg">Agenda una llamada <ArrowRight size={18} /></Btn>
              <Btn as="a" href="/casos" variant="secondary" size="lg">Ver casos</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <Section tone="dark">
        <SectionHeading level={2} kicker="Nuestro método" tone="dark" maxWidth="20ch" style={{ marginBottom: 40 }}>
          Un método claro, del primer clic al cierre.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-4)" }}>
          {METODO.map(([t, d], i) => (
            <div key={t} style={{ padding: "var(--space-6)", border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan)" }}>0{i + 1}</span>
              <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--white)", marginTop: 14 }}>{t}</h3>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POR QUÉ */}
      <Section tone="light">
        <SectionHeading level={2} kicker="Por qué Suggestion" maxWidth="22ch" style={{ marginBottom: 40 }}>
          Lo que nos hace distintos.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
          {POR_QUE.map(([t, d], i) => (
            <div key={t} className="hk-lift" style={{ display: "flex", gap: 18, padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan)" }}>0{i + 1}</span>
              <div>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)" }}>{t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VALORES */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <SectionHeading level={2} kicker="Nuestros valores" maxWidth="24ch" style={{ marginBottom: 40 }}>
          Cinco principios que no negociamos.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-4)" }}>
          {VALORES.map(([t, d], i) => (
            <div key={t} style={{ padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--cyan)" }}>0{i + 1}</span>
              <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "12px 0 8px" }}>{t}</h3>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)" }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EQUIPO */}
      <Section tone="light">
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <SectionHeading level={2} kicker="Nuestro equipo" maxWidth="20ch" style={{ marginBottom: 18 }}>
            Las personas detrás de Suggestion.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)" }}>
            Estrategia, performance, creatividad y producción bajo un mismo techo. Por eso todo funciona conectado: nadie le pasa la pelota a un tercero.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)" }}>
          {EQUIPO.map((m) => (
            <a key={m.slug} href={`/equipo/${m.slug}`} className="hk-lift" style={{ display: "flex", gap: 18, alignItems: "center", padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              <span aria-hidden style={{ width: 60, height: 60, flexShrink: 0, borderRadius: "50%", padding: 2.5, background: "linear-gradient(135deg, var(--orange), var(--cyan))", display: "grid" }}>
                {m.foto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.foto} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                ) : (
                  <span style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--black)", color: "var(--white)", display: "grid", placeItems: "center", font: "var(--fw-bold) var(--fs-md)/1 var(--font-display)", letterSpacing: "0.03em" }}>{m.iniciales}</span>
                )}
              </span>
              <div>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)" }}>{m.nombre}</h3>
                <span style={{ display: "block", font: "var(--fw-bold) var(--fs-micro)/1.2 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--cyan)", marginTop: 6 }}>{m.rol}</span>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", marginTop: 8 }}>{m.bio}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CIERRE */}
      <section style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
          <SectionHeading level={2} tone="dark" maxWidth="16ch">Trabajemos juntos.</SectionHeading>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <Btn as="a" href="/contacto" variant="onDark" size="lg">Agenda una llamada <ArrowRight size={18} /></Btn>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
              <Phone size={16} style={{ color: "var(--cyan)" }} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
