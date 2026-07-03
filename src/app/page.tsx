import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowDown, Phone, Mail, Building2, Car, Luggage, ShoppingBag, Stethoscope } from "lucide-react";
import { Section, Btn, Blot, TaglineStrip } from "@/components/brand/parts";
import { CtaForm, Percepcion } from "@/components/brand/interactive";
import HeroShowcase from "@/components/HeroShowcase";
import ProofBar from "@/components/ProofBar";
import ClientLogos from "@/components/ClientLogos";
import SectorCard from "@/components/SectorCard";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";
import MetodoPinned from "@/components/MetodoPinned";
import WorkWall from "@/components/WorkWall";
import ScrollBlot from "@/components/ScrollBlot";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { SERVICE_CATEGORIES } from "@/content/navegacion";

export const metadata: Metadata = buildMetadata({
  title: "Agencia de Marketing Digital en Ica y Perú | Suggestion",
  description:
    "Agencia de marketing de performance en Ica. Convertimos atención en ventas: leads, citas y cierres medibles. Agenda una llamada hoy.",
  path: "/",
});

const SECTORES = [
  { title: "Inmobiliario", result: "Llenamos tu sala de ventas de citas calificadas, no de curiosos.", href: "/marketing-inmobiliario", icon: Building2, shape: 1 },
  { title: "Automotriz", result: "Del clic al test drive: leads listos para cerrar en piso.", href: "/marketing-automotriz", icon: Car, shape: 2 },
  { title: "Turismo", result: "Reservas reales, en temporada y fuera de ella, con costo medido.", href: "/marketing-turismo", icon: Luggage, shape: 6 },
  { title: "Marcas y consumo", result: "Demanda que se vuelve venta, no likes prestados.", href: "/marketing-marcas-consumo", icon: ShoppingBag, shape: 5 },
  { title: "Salud", result: "Agenda llena de pacientes sin quemar tu presupuesto.", href: "/marketing-salud", icon: Stethoscope, shape: 4 },
];

const CASOS = [
  { tag: "Inmobiliario", title: "Inmobiliaria Ceinys", metric: "S/350K", note: "en ventas: 350 leads y 8 lotes vendidos con S/3,000 en Meta Ads.", shape: 1 },
  { tag: "Consumo", title: "Granjas Bonanza", metric: "15", note: "contratos cerrados con S/2,500 en campañas de demanda directa.", shape: 5 },
  { tag: "Turismo", title: "Hoteles Señor de Luren", metric: "75", note: "reservas generadas en una sola campaña, dentro y fuera de temporada.", shape: 6 },
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
        {/* Rejilla editorial tenue (profundidad) */}
        <div aria-hidden className="hk-hero-grid" />
        {/* Etiqueta vertical editorial (desktop) */}
        <span className="hk-vlabel hk-nav" style={{ position: "absolute", left: 22, top: "50%", transform: "translateY(-50%) rotate(180deg)", zIndex: 2 }}>
          Marketing de performance — Ica, Perú
        </span>
        <div
          className="hk-hero"
          style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.75rem,3vw,2.75rem) var(--gutter) clamp(1.25rem,2.5vw,2rem)", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)", gap: "clamp(2rem,5vw,4rem)", alignItems: "center", minHeight: "min(calc(86vh - 68px), 680px)" }}
        >
          <div style={{ minWidth: 0 }}>
            <div className="hk-enter hk-eyebrow"><span className="live" aria-hidden />Agencia de performance · Ica → Perú</div>
            {/* maxWidth en px: el h1 hereda 16px de base, así que "ch" aquí colapsaría el ancho */}
            <h1 className="hk-enter-2 hk-display" style={{ margin: "clamp(16px,2vw,24px) 0 0", maxWidth: 680 }}>
              <span className="lead">Agencia de marketing digital</span>
              <span className="big">que convierte atención en <span style={{ color: "var(--cyan)" }}>ventas</span></span>
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-body)", maxWidth: "48ch", margin: "clamp(16px,2vw,24px) 0 0" }}>
              <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>Tu problema no es el alcance: es que los clics no se vuelven clientes.</strong> Armamos tu funnel completo —anuncios, web, WhatsApp y CRM— y lo medimos hasta el cierre: <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>leads</strong>, <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>citas</strong>, <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>ventas</strong>.
            </p>
            <div className="hk-enter-4 hk-hero-ctas" style={{ display: "flex", gap: 14, marginTop: 24, flexWrap: "wrap", alignItems: "center" }}>
              <Magnetic><Btn as="a" href="/contacto" size="lg">Quiero más leads <ArrowRight size={18} /></Btn></Magnetic>
              <Magnetic><Btn as="a" href="/auditoria-gratis" variant="secondary" size="lg">Auditoría gratis (48 h)</Btn></Magnetic>
            </div>
            <p className="hk-enter-4" style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)", marginTop: 18 }}>
              <span><strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>S/350K</strong> generados para clientes</span>
              <span><strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>+50</strong> marcas</span>
              <span>Respondemos en <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>&lt;24 h</strong></span>
            </p>
          </div>
          <div className="hk-enter-3" style={{ minWidth: 0, display: "flex", justifyContent: "center" }}>
            <HeroShowcase />
          </div>
        </div>
        <div className="hk-nav" style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter) clamp(1.25rem,2.5vw,2rem)" }}>
          <a href="#sectores" className="hk-scrollcue"><ArrowDown size={14} /> Desliza</a>
        </div>
        <TaglineStrip items={["No es lo que ves", "Convertimos atención en ventas", "Consigue lo posible haciendo lo imposible"]} />
      </section>

      {/* PROOF BAR */}
      <ProofBar />

      {/* LOGOS DE CLIENTES */}
      <ClientLogos />

      {/* SECTORES */}
      <Section id="sectores" tone="dark">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <SectionHeading level={2} kicker="Sectores" tone="dark" maxWidth="18ch" reveal>
            Cada mercado tiene su perspectiva. Nosotros la entendemos.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "34ch" }}>
            Cinco verticales donde leemos lo que otros no ven y lo convertimos en ventas medibles.
          </p>
        </div>
        <div className="hk-sector-grid reveal reveal-d2">
          {SECTORES.map((s, i) => (
            <SectorCard key={s.href} index={`0${i + 1}`} title={s.title} result={s.result} href={s.href} icon={s.icon} shape={s.shape} />
          ))}
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section id="servicios" tone="light">
        <div className="hk-serv reveal" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "start" }}>
          <div>
            <SectionHeading level={2} kicker="Servicios" maxWidth="14ch" reveal>
              Todo el funnel, bajo un mismo método.
            </SectionHeading>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "36ch" }}>
              No vendemos piezas sueltas. Operamos la máquina completa que convierte mercado en ventas: desde la estrategia y la pauta hasta la web, el CRM y el material en la calle.
            </p>
            <a href="/servicios" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
              Ver todos los servicios <ArrowRight size={16} />
            </a>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: "1px solid var(--hairline)" }}>
            {SERVICE_CATEGORIES.map((cat, i) => (
              <li key={cat.slug} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1rem,3vw,2.5rem)", padding: "22px 0", borderTop: "1px solid var(--hairline)" }}>
                <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", color: "var(--cyan)", paddingTop: 7 }}>0{i + 1}</span>
                <div>
                  <Link href={`/servicios/${cat.slug}`} className="hk-ulink" style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>
                    {cat.label}
                  </Link>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 12 }}>
                    {cat.children.map((c) => (
                      <Link key={c.href} href={c.href} className="hk-ulink" style={{ font: "var(--fw-light) var(--fs-sm)/1 var(--font-body)", color: "var(--text-muted)" }}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ¿QUÉ VES? — momento interpretable (Rorschach) */}
      <Percepcion shape={1} />

      {/* CASOS */}
      <Section id="casos" tone="light" style={{ background: "var(--surface-raised)" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <SectionHeading level={2} kicker="Casos de éxito" maxWidth="18ch" reveal>
            Resultados de negocio, no capturas de likes.
          </SectionHeading>
          <a href="/casos" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
            Hablemos de tu caso <ArrowRight size={16} />
          </a>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)" }}>
          {CASOS.map((c) => (
            <article key={c.title} className="hk-case hk-lift" style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: 18, background: "var(--white)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>{c.tag}</span>
                <Blot shape={c.shape} tint="orange" size={48} style={{ opacity: 0.9 }} />
              </div>
              <div style={{ font: "var(--fw-bold) var(--fs-4xl)/0.95 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)" }}>
                <CountUp to={c.metric} />
              </div>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-body)" }}>
                <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{c.title}.</strong> {c.note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* MURO DE TRABAJOS (+50 marcas, miniaturas flotantes) */}
      <WorkWall />

      {/* MÉTODO (pinned en desktop) */}
      <MetodoPinned />

      {/* POR QUÉ */}
      <Section id="porque" tone="light">
        <SectionHeading level={2} kicker="Por qué Suggestion" maxWidth="24ch" style={{ marginBottom: 40 }}>
          Leemos lo que otros no ven en tu mercado.
        </SectionHeading>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
          {POR_QUE.map(([t, d], i) => (
            <div key={t} className="hk-lift hk-spot" style={{ display: "flex", gap: 18, padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
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
        <div className="reveal">
          <SectionHeading level={2} kicker="Preguntas frecuentes" maxWidth="20ch" style={{ marginBottom: 24 }}>
            Lo que sueles preguntarte antes de empezar.
          </SectionHeading>
          <div style={{ maxWidth: 820 }}>
            <Faq items={FAQ} />
          </div>
        </div>
      </Section>

      {/* CIERRE / CONTACTO */}
      <section id="contacto" className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)", position: "relative", overflow: "hidden" }}>
        <span className="hk-grain-layer" aria-hidden />
        {/* Composición simétrica (Rorschach): mancha espejada que cambia naranja→cian */}
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", opacity: 0.12, zIndex: 0, pointerEvents: "none" }}>
          <ScrollBlot shape={4} size="min(34vw, 380px)" />
          <ScrollBlot shape={4} size="min(34vw, 380px)" mirror style={{ marginLeft: "-6%" }} />
        </div>
        <div className="hk-cta" style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
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
