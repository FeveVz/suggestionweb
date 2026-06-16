import type { Metadata } from "next";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Section, Label, Btn, Blot, TaglineStrip } from "@/components/brand/parts";
import { DualReveal, CtaForm } from "@/components/brand/interactive";
import ProofBar from "@/components/ProofBar";
import SectorCard from "@/components/SectorCard";
import ServiceGrid from "@/components/ServiceGrid";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Agencia de Marketing Digital en Ica y Perú | Suggestion",
  description:
    "Agencia de marketing de performance en Ica. Convertimos atención en ventas: leads, citas y cierres medibles. Agenda una llamada hoy.",
  path: "/",
});

const SECTORES = [
  { title: "Inmobiliario", result: "Llenamos tu sala de ventas de citas calificadas, no de curiosos.", href: "/marketing-inmobiliario", shape: 1 },
  { title: "Automotriz", result: "Del clic al test drive: leads listos para cerrar en piso.", href: "/marketing-automotriz", shape: 2 },
  { title: "Turismo", result: "Reservas reales, en temporada y fuera de ella, con costo medido.", href: "/marketing-turismo", shape: 6 },
  { title: "Marcas y consumo", result: "Demanda que se vuelve venta, no likes prestados.", href: "/marketing-marcas-consumo", shape: 5 },
  { title: "Salud", result: "Agenda llena de pacientes sin quemar tu presupuesto.", href: "/marketing-salud", shape: 4 },
];

const CATEGORIAS = [
  { title: "Estrategia y datos", description: "Consultoría e investigación de mercado.", href: "/servicios/estrategia" },
  { title: "Marketing y publicidad digital", description: "Estrategia integral, pauta y redes sociales.", href: "/servicios/marketing-digital-publicidad" },
  { title: "Web, SEO y automatización", description: "Desarrollo web, SEO y CRM.", href: "/servicios/web-seo" },
  { title: "Marca y contenido", description: "Branding y producción audiovisual.", href: "/servicios/marca-contenido" },
  { title: "Activación y medios físicos", description: "BTL, publicidad exterior, imprenta y merchandising.", href: "/servicios/btl-medios" },
];

const CASOS = [
  { tag: "Inmobiliario", title: "Inmobiliaria Ceinys", metric: "S/350K", note: "en ventas: 350 leads y 8 lotes vendidos con S/3,000 en Meta Ads.", shape: 1 },
  { tag: "Consumo", title: "Granjas Bonanza", metric: "15", note: "contratos cerrados con S/2,500 en campañas de demanda directa.", shape: 5 },
  { tag: "Turismo", title: "Hoteles Señor de Luren", metric: "75", note: "reservas generadas en una sola campaña, dentro y fuera de temporada.", shape: 6 },
];

const PASOS = [
  { n: "01", t: "Leemos", d: "Auditamos tu mercado y tu funnel. Vemos la mancha: dónde se pierde la atención antes de convertir." },
  { n: "02", t: "Moldeamos", d: "Diseñamos oferta, mensaje y embudo. Lo que tu público termina viendo lo decidimos nosotros." },
  { n: "03", t: "Convertimos", d: "Activamos campañas y citas. Lead, cita, cierre — sin pasos de vanidad." },
  { n: "04", t: "Medimos", d: "Reportamos CPL, ROAS y cierres con transparencia. Iteramos sobre lo que mueve la venta." },
];

const POR_QUE = [
  ["Performance, no vanidad", "Medimos leads, citas y cierres. Los likes no pagan la planilla."],
  ["Método propio por vertical", "Cada rubro con su playbook, no una receta genérica."],
  ["Base en Ica, alcance nacional", "Conocemos el mercado local y operamos campañas en todo el Perú."],
  ["Transparencia radical", "Ves los números reales del funnel. Sin humo, sin promesas de #1."],
];

const FAQ = [
  {
    q: "¿Qué hace una agencia de marketing y publicidad?",
    a: "Atrae a las personas correctas, las convierte en contactos y acompaña hasta el cierre. Nosotros no nos quedamos en el alcance: medimos cuántos leads, citas y ventas genera cada sol invertido.",
  },
  {
    q: "¿Atienden en todo el Perú desde Ica?",
    a: "Sí. Operamos desde Ica y manejamos campañas a nivel nacional. La distancia no cambia los resultados; los números, sí.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Con CPL (costo por lead), ROAS (retorno de la inversión publicitaria) y cierres reales. Tendrás un reporte claro, no un tablero de likes.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
        <div
          className="hk-hero"
          style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(3rem,7vw,6rem) var(--gutter) clamp(3rem,6vw,5rem)", display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)", gap: "clamp(2rem,5vw,4rem)", alignItems: "center" }}
        >
          <div style={{ minWidth: 0 }}>
            <Label>Agencia de performance · Ica, Perú</Label>
            <h1 style={{ font: "var(--fw-bold) var(--fs-4xl)/1.0 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "20px 0 0", maxWidth: "16ch" }}>
              Agencia de marketing digital que convierte atención en ventas
            </h1>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-body)", maxWidth: "48ch", margin: "22px 0 0" }}>
              <strong style={{ fontWeight: 700 }}>No es lo que ves.</strong> Trabajamos el funnel completo —
              <strong style={{ fontWeight: 700 }}>lead</strong>, <strong style={{ fontWeight: 700 }}>cita</strong>, <strong style={{ fontWeight: 700 }}>cierre</strong>—, no métricas de vanidad. Tú no necesitas más likes; necesitas más ventas.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
              <Btn as="a" href="/contacto" size="lg">Quiero más leads <ArrowRight size={18} /></Btn>
              <Btn as="a" href="/casos" variant="secondary" size="lg">Ver casos</Btn>
            </div>
            <p style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)", marginTop: 16 }}>
              Respondemos en menos de 24 h hábiles.
            </p>
          </div>
          <DualReveal shape={3} size={400} />
        </div>
        <TaglineStrip items={["No es lo que ves", "Convertimos atención en ventas", "Consigue lo posible haciendo lo imposible"]} />
      </section>

      {/* PROOF BAR */}
      <ProofBar />

      {/* SECTORES */}
      <Section id="sectores" tone="dark">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <SectionHeading level={2} kicker="Sectores" tone="dark" maxWidth="18ch">
            Cada mercado tiene su perspectiva. Nosotros la entendemos.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "34ch" }}>
            Cinco verticales donde leemos lo que otros no ven y lo convertimos en ventas medibles.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-4)" }}>
          {SECTORES.map((s, i) => (
            <SectorCard key={s.href} index={`0${i + 1}`} title={s.title} result={s.result} href={s.href} shape={s.shape} />
          ))}
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section id="servicios" tone="light">
        <div className="hk-serv" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "start" }}>
          <div>
            <SectionHeading level={2} kicker="Servicios" maxWidth="14ch">
              Todo el funnel, bajo un mismo método.
            </SectionHeading>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "36ch" }}>
              No vendemos piezas sueltas. Operamos la máquina completa que convierte mercado en ventas: desde la estrategia y la pauta hasta la web, el CRM y el material en la calle.
            </p>
            <a href="/servicios" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
              Ver todos los servicios <ArrowRight size={16} />
            </a>
          </div>
          <ServiceGrid items={CATEGORIAS} columns={2} />
        </div>
      </Section>

      {/* CASOS */}
      <Section id="casos" tone="light" style={{ background: "var(--surface-raised)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <SectionHeading level={2} kicker="Casos de éxito" maxWidth="18ch">
            Resultados de negocio, no capturas de likes.
          </SectionHeading>
          <a href="/casos" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
            Hablemos de tu caso <ArrowRight size={16} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)" }}>
          {CASOS.map((c) => (
            <article key={c.title} className="hk-case" style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: 18, transition: "border-color var(--dur-base) var(--ease-out)", background: "var(--white)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>{c.tag}</span>
                <Blot shape={c.shape} tint="orange" size={48} style={{ opacity: 0.9 }} />
              </div>
              <div style={{ font: "var(--fw-bold) var(--fs-4xl)/0.95 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)" }}>
                {c.metric}
              </div>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-body)" }}>
                <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{c.title}.</strong> {c.note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* MÉTODO */}
      <section id="metodo" style={{ background: "var(--black)", color: "var(--white)", position: "relative", overflow: "hidden", padding: "var(--section-y) 0" }}>
        <div aria-hidden style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 360, color: "var(--cyan)", opacity: 0.14, zIndex: "var(--z-art)" as unknown as number, pointerEvents: "none", display: "flex", width: "200%", animation: "hk-topo-drift 40s linear infinite" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/textures/topo.svg" alt="" style={{ width: "50%", height: "100%", objectFit: "cover" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/textures/topo.svg" alt="" style={{ width: "50%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <SectionHeading level={2} kicker="Método" tone="dark" maxWidth="22ch" style={{ marginBottom: 44 }}>
            Consigue lo posible haciendo lo imposible.
          </SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-5)" }}>
            {PASOS.map((p) => (
              <div key={p.n} style={{ borderTop: "2px solid var(--cyan)", paddingTop: 20 }}>
                <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>{p.n}</span>
                <h3 style={{ font: "var(--fw-medium) var(--fs-xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "12px 0 10px" }}>{p.t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <Section id="porque" tone="light">
        <SectionHeading level={2} kicker="Por qué Suggestion" maxWidth="24ch" style={{ marginBottom: 40 }}>
          Leemos lo que otros no ven en tu mercado.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
          {POR_QUE.map(([t, d], i) => (
            <div key={t} style={{ display: "flex", gap: 18, padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan)" }}>0{i + 1}</span>
              <div>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>{t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="light" style={{ background: "var(--surface-raised)" }}>
        <SectionHeading level={2} kicker="Preguntas frecuentes" maxWidth="20ch" style={{ marginBottom: 24 }}>
          Lo que sueles preguntarte antes de empezar.
        </SectionHeading>
        <div style={{ maxWidth: 820 }}>
          <Faq items={FAQ} />
        </div>
      </Section>

      {/* CIERRE / CONTACTO */}
      <section id="contacto" style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
        <div className="hk-cta" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
          <div>
            <SectionHeading level={2} kicker="Agenda una llamada" tone="dark" maxWidth="14ch">
              Convirtamos tu atención en ventas.
            </SectionHeading>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 20, maxWidth: "40ch" }}>
              Cuéntanos de tu negocio. Te respondemos con un diagnóstico honesto de tu funnel —sin humo, sin promesas mágicas.
            </p>
            <div style={{ display: "flex", gap: 26, marginTop: 30, flexWrap: "wrap" }}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
                <Phone size={16} style={{ color: "var(--cyan)" }} /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
                <Mail size={16} style={{ color: "var(--cyan)" }} /> {site.email}
              </a>
            </div>
          </div>
          <CtaForm />
        </div>
      </section>
    </>
  );
}
