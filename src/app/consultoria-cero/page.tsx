import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Route } from "lucide-react";
import { Label } from "@/components/brand/parts";
import AuditForm, { WaConsultoria } from "@/components/AuditForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientLogos from "@/components/ClientLogos";
import Faq from "@/components/Faq";
import ProofBar from "@/components/ProofBar";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, servicioId, paginaId } from "@/lib/schema";
import { ORG_ID, absoluteUrl } from "@/lib/site";

/**
 * /consultoria-cero — la puerta de entrada de todo el sitio.
 *
 * Definición del owner (2026-10-15): "una consultoría de 30 minutos, donde el
 * cliente habla de su problema o lo que quiere mejorar, para nosotros entender
 * de forma personalizada su necesidad y así plantear los mejores caminos y
 * servicios de Suggestion adaptados al objetivo particular de su necesidad o
 * deseo."
 *
 * No es la auditoría de /auditoria-gratis, que es otra oferta: allí nosotros
 * revisamos y entregamos tres mejoras en 20 minutos. Aquí el que habla es el
 * cliente y lo que se lleva es un camino. Por eso esta página no promete
 * revisiones previas, plazos de entrega ni mejoras concretas: no forman parte
 * de lo que el owner describió.
 *
 * El formulario va en la primera sección y la prueba justo después. En móvil
 * antes medía 6 pantallas, con el botón de enviar en la 2,9 y sin una sola
 * marca ni cifra que respaldara la oferta (auditoría del 2026-11-01).
 */

export const metadata: Metadata = buildMetadata({
  title: "Consultoría Cero: 30 Minutos Gratis | Suggestion",
  description:
    "30 minutos para contarnos tu problema o lo que quieres mejorar. Entendemos tu caso y te proponemos el camino y los servicios que encajan contigo. Gratis.",
  path: "/consultoria-cero",
  ogImage: "/assets/og/consultoria-cero.png",
});

const COMO = [
  { Icon: MessageCircle, t: "Nos cuentas tu caso", d: "Tu problema o lo que quieres mejorar, con tus palabras. No hace falta saber de marketing." },
  { Icon: Compass, t: "Entendemos lo que necesitas", d: "Preguntamos lo justo para entender tu negocio, tu cliente y tu objetivo." },
  { Icon: Route, t: "Te proponemos el camino", d: "Qué conviene hacer y con qué servicios, según tu objetivo." },
];

const FAQ = [
  { q: "¿Cuánto cuesta?", a: "Nada. La consultoría cero es gratis y no te compromete a contratar nada." },
  { q: "¿Cuánto dura?", a: "30 minutos." },
  { q: "¿Necesito saber de marketing?", a: "No. Basta con que nos cuentes qué te pasa o qué quieres lograr." },
  { q: "¿Qué me llevo?", a: "Qué conviene hacer, en qué orden y con qué servicios. Si decides seguir con nosotros, preparamos la propuesta; si no, te quedas con la orientación." },
  { q: "¿Cómo la agendo?", a: "Por WhatsApp o con el formulario de esta página. Nuestro agente de IA te responde al momento, y una persona te confirma el día y la hora de lunes a sábado, de 8:30 a 18:30." },
];

/**
 * La consultoría cero como servicio con oferta de precio 0: así queda escrito
 * para buscadores y asistentes que es gratis, sin depender de que lean el texto.
 */
const SCHEMA = [
  webPageSchema({
    url: "/consultoria-cero",
    name: "Consultoría Cero: 30 Minutos Gratis",
    description: "30 minutos para contarnos tu problema o lo que quieres mejorar. Te decimos qué hacer y con qué servicios. Gratis.",
    mainEntity: servicioId("/consultoria-cero"),
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": servicioId("/consultoria-cero"),
    name: "Consultoría cero",
    serviceType: "Consultoría de marketing",
    description: "Conversación de 30 minutos en la que nos cuentas tu problema o lo que quieres mejorar, y te proponemos qué hacer y con qué servicios.",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Perú" },
    url: absoluteUrl("/consultoria-cero"),
    mainEntityOfPage: { "@id": paginaId("/consultoria-cero") },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PEN",
      url: absoluteUrl("/consultoria-cero"),
      description: "Gratis y sin compromiso",
    },
  },
];

export default function ConsultoriaCero() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2.5rem,5vw,3.5rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Consultoría cero", href: "/consultoria-cero" }]} />
          <div className="hk-cta" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(2rem,5vw,4rem)", alignItems: "start", marginTop: "clamp(1.25rem,3vw,2rem)" }}>
            <div>
              <div className="hk-enter"><Label dot>Consultoría cero · gratis</Label></div>
              <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "18ch" }}>
                30 minutos para entender tu negocio y proponerte el camino.
              </h1>
              <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "54ch" }}>
                Nos cuentas tu problema o lo que quieres mejorar y te decimos qué hacer y con qué servicios. Gratis y sin compromiso.
              </p>
              <div className="hk-enter-4" style={{ marginTop: 26 }}>
                <WaConsultoria>Agenda tu consultoría cero <ArrowRight size={18} /></WaConsultoria>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-muted)", margin: "10px 0 0" }}>Se abre WhatsApp con tu mensaje listo.</p>
              </div>
            </div>

            <div id="agendar" className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", borderRadius: "var(--radius-md)", padding: "clamp(1.25rem,3vw,2rem)", scrollMarginTop: 80, overflow: "hidden" }}>
              <span className="hk-grain-layer" aria-hidden />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ font: "var(--fw-bold) var(--fs-xl)/1.15 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "0 0 8px" }}>
                  O déjanos tus datos
                </h2>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", margin: "0 0 22px" }}>
                  Un minuto. Te escribimos para elegir el día y la hora.
                </p>
                <AuditForm variante="consultoria" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA PRUEBA: quién está detrás de la oferta */}
      <ProofBar funnel={false} />
      <ClientLogos />

      {/* CÓMO ES */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: 0 }}>
            Cómo es la consultoría
          </h2>
          <ol style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-4)", margin: "24px 0 0" }}>
            {COMO.map(({ Icon, t, d }, i) => (
              <li key={t} style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span aria-hidden style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--cyan)", color: "#04121a", display: "grid", placeItems: "center" }}><Icon size={19} /></span>
                  <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>Paso {i + 1}</span>
                </span>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "14px 0 8px" }}>{t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-body)" }}>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PREGUNTAS */}
      <section style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "0 0 24px" }}>
            Lo que sueles preguntarte.
          </h2>
          <Faq items={FAQ} />
          <div style={{ display: "flex", gap: "14px 22px", flexWrap: "wrap", alignItems: "center", marginTop: 28 }}>
            <WaConsultoria>Agenda tu consultoría cero <ArrowRight size={18} /></WaConsultoria>
            {/* La otra oferta sigue viva y este es su enlace de entrada. */}
            <Link href="/auditoria-gratis" className="hk-ulink" style={{ font: "var(--fw-medium) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-muted)" }}>
              ¿Prefieres que revisemos primero tu marketing? Pide la auditoría
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
