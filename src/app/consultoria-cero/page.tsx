import type { Metadata } from "next";
import { ArrowRight, Compass, MessageCircle, Route } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import AuditForm from "@/components/AuditForm";
import Faq from "@/components/Faq";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

/**
 * /consultoria-cero — la puerta de entrada de la home.
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
 */

export const metadata: Metadata = buildMetadata({
  title: "Consultoría Cero: 30 Minutos Gratis | Suggestion",
  description:
    "30 minutos para contarnos tu problema o lo que quieres mejorar. Entendemos tu caso y te proponemos el camino y los servicios que encajan con tu objetivo. Gratis.",
  path: "/consultoria-cero",
});

const WA = whatsappLink("Hola Suggestion, quiero agendar mi consultoría cero.");

const COMO = [
  { Icon: MessageCircle, t: "Nos cuentas tu caso", d: "Tu problema o lo que quieres mejorar, con tus palabras. No hace falta que sepas de marketing: para eso estamos nosotros." },
  { Icon: Compass, t: "Entendemos lo que necesitas", d: "Preguntamos lo justo para entender tu negocio, tu cliente y tu objetivo. Cada caso es distinto y lo tratamos así." },
  { Icon: Route, t: "Te proponemos el camino", d: "Los caminos y los servicios de Suggestion que mejor encajan con tu objetivo, adaptados a ti, no sacados de un paquete." },
];

const FAQ = [
  { q: "¿Cuánto cuesta?", a: "Nada. La consultoría cero es gratis y no te compromete a contratar nada." },
  { q: "¿Cuánto dura?", a: "30 minutos. Es tiempo suficiente para que nos cuentes tu caso y para proponerte por dónde ir." },
  { q: "¿Necesito saber de marketing?", a: "No. Basta con que nos cuentes qué te pasa o qué quieres lograr, con tus palabras. Entender eso y traducirlo en un plan es nuestro trabajo." },
  { q: "¿Qué me llevo?", a: "Un camino claro para tu objetivo: qué conviene hacer, en qué orden y qué servicios de Suggestion encajan con tu caso. Si decides seguir con nosotros, preparamos la propuesta; si no, te quedas con la orientación." },
  { q: "¿Cómo la agendo?", a: "Por WhatsApp o con el formulario de esta página. Te respondemos en menos de 24 horas hábiles para elegir el día y la hora." },
];

export default function ConsultoriaCero() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,5vw,4rem) var(--gutter) clamp(2.5rem,5vw,3.5rem)" }}>
          <div className="hk-enter"><Label dot>Consultoría cero · gratis</Label></div>
          <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "18ch" }}>
            30 minutos para entender tu negocio y proponerte el camino.
          </h1>
          <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "54ch" }}>
            Nos cuentas tu problema o lo que quieres mejorar. Con eso entendemos lo que necesitas y te proponemos los caminos y los servicios de Suggestion que mejor encajan con tu objetivo. Sin costo y sin compromiso.
          </p>
          <div className="hk-enter-4" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginTop: 28 }}>
            <Btn as="a" href={WA} size="lg">Agendar por WhatsApp <ArrowRight size={18} /></Btn>
            <Btn as="a" href="#agendar" variant="secondary" size="lg">Prefiero el formulario</Btn>
          </div>

          <h2 className="hk-enter-4" style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)", margin: "48px 0 0" }}>
            Cómo es la consultoría
          </h2>
          <ol className="hk-enter-4" style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-4)", margin: "18px 0 0" }}>
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

      {/* FORMULARIO */}
      <section id="agendar" className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", scrollMarginTop: 80 }}>
        <span className="hk-grain-layer" aria-hidden />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 880, margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "0 0 10px" }}>
            Agenda tu consultoría cero
          </h2>
          <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-on-inverse-mut)", margin: "0 0 30px", maxWidth: "54ch" }}>
            Dos minutos. Te escribimos por WhatsApp para elegir el día y la hora.
          </p>
          <AuditForm variante="consultoria" />
        </div>
      </section>

      {/* PREGUNTAS */}
      <section style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "0 0 24px" }}>
            Lo que sueles preguntarte.
          </h2>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}
