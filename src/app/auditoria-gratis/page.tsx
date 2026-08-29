import type { Metadata } from "next";
import { Search, Target, Zap } from "lucide-react";
import { Label } from "@/components/brand/parts";
import AuditForm from "@/components/AuditForm";
import Faq from "@/components/Faq";
import Secciones from "@/components/Secciones";
import type { Seccion } from "@/content/types";
import { buildMetadata } from "@/lib/seo";

const FAQ = [
  { q: "¿De verdad es gratis? ¿Cuál es el truco?", a: "Sí, es gratis y no hay truco: es la mejor forma de demostrarte cómo trabajamos. Si el diagnóstico te sirve y quieres que lo ejecutemos, hablamos de una propuesta; si no, te quedas con las 3 mejoras y listo." },
  { q: "¿Qué necesito darles acceso?", a: "Para el diagnóstico inicial, nada: trabajamos con lo público (tu web, redes y anuncios visibles) y lo que nos cuentes del negocio. Si luego avanzamos, ahí sí revisamos tus cuentas con permisos de solo lectura." },
  { q: "¿En cuánto tiempo lo recibo?", a: "En un máximo de 48 horas hábiles te contactamos con el diagnóstico: 20 minutos por videollamada o un resumen por WhatsApp, como prefieras." },
  { q: "¿Sirve si recién estoy empezando?", a: "Sí. Si aún no inviertes en publicidad, el diagnóstico se enfoca en tu oferta, tu presencia digital y por dónde te conviene empezar sin quemar presupuesto." },
];

export const metadata: Metadata = buildMetadata({
  title: "Auditoría de Marketing Gratis en Ica (48 h) | Suggestion",
  description: "Te auditamos gratis el funnel: pauta, web y seguimiento. Recibes 3 mejoras accionables en 48 horas hábiles, sin compromiso. Para negocios en Perú.",
  path: "/auditoria-gratis",
  ogImage: "/assets/og/auditoria-gratis.png",
});

/**
 * Va DESPUES del formulario a proposito: en una pagina de conversion, el
 * contenido que empuja el formulario hacia abajo cuesta leads. Esto es para
 * quien baja porque duda, no para quien ya decidio.
 */
const SECCIONES: Seccion[] = [
  {
    h2: "Qué miramos, en concreto",
    parrafo:
      "El diagnóstico no es una revisión superficial de tu Instagram. Seguimos el recorrido completo de un cliente tuyo, desde que te descubre hasta que paga, buscando dónde se pierde. Casi siempre hay más ventas escondidas en las fugas que en un canal nuevo.",
    pasos: [
      { titulo: "Cómo te encuentran hoy", texto: "qué aparece cuando alguien busca lo que vendes en tu zona, y si tu ficha de empresa está completa. Es lo más barato de arreglar y lo que más veces está descuidado." },
      { titulo: "Qué dice tu publicidad visible", texto: "a quién le habla, qué promete y si eso encaja con lo que el cliente busca. Lo revisamos con lo público: no necesitamos acceso a tus cuentas." },
      { titulo: "Qué pasa cuando llegan a tu web", texto: "si se entiende qué haces en cinco segundos, si es rápida en el móvil y si hay una forma clara de escribirte sin buscarla." },
      { titulo: "Qué ocurre después del contacto", texto: "cuánto tardas en responder y por qué canal. Es el tramo donde más se pierde y el que menos se mira." },
      { titulo: "Qué estás midiendo", texto: "si sabes cuánto te cuesta un cliente hoy. Si la respuesta es que no, ese es el primer hallazgo." },
    ],
  },
  {
    h2: "Por qué es gratis",
    parrafo:
      "Porque es la forma más honesta que conocemos de enseñar cómo trabajamos. Una propuesta comercial dice lo que prometemos; un diagnóstico dice lo que vemos, y eso se puede juzgar sin haber pagado nada. Una parte de quienes lo piden termina trabajando con nosotros y otra parte no, y las dos cosas nos parecen bien: aplicar las tres mejoras por tu cuenta también es un resultado válido.",
    nota: {
      titulo: "Lo que NO es",
      texto: "No es una propuesta comercial disfrazada ni una llamada de venta de una hora. Son veinte minutos con tres cosas concretas que puedes aplicar con nosotros o sin nosotros. Y para el diagnóstico inicial no pedimos acceso a tus cuentas publicitarias: trabajamos con lo que es público y con lo que nos cuentes.",
    },
  },
];

const ENTREGABLES = [
  { Icon: Search, t: "Leemos tu funnel completo", d: "Revisamos tu pauta, tu web/redes y tu seguimiento: dónde se está escapando la venta." },
  { Icon: Target, t: "3 mejoras accionables", d: "Te decimos las 3 cosas concretas que más moverían tus resultados — y que puedes aplicar con o sin nosotros." },
  { Icon: Zap, t: "En 48 h, sin compromiso", d: "Un diagnóstico honesto de 20 minutos por videollamada o WhatsApp. Sin letra pequeña." },
];

export default function AuditoriaGratis() {
  return (
    <>
      {/* HERO + QUÉ RECIBES */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,5vw,4rem) var(--gutter) clamp(2.5rem,5vw,3.5rem)" }}>
          <div className="hk-enter"><Label dot>Auditoría gratuita</Label></div>
          <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "17ch" }}>
            Te decimos dónde se escapa tu venta. Gratis, en 48 horas.
          </h1>
          <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "52ch" }}>
            El mismo diagnóstico con el que empezamos cada cuenta —el que llevó a Ceinys a S/350K en ventas— aplicado a tu negocio. Sin costo y sin compromiso: si te sirve, hablamos; si no, te quedas con las mejoras.
          </p>
          <div className="hk-enter-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)", marginTop: 40 }}>
            {ENTREGABLES.map(({ Icon, t, d }) => (
              <div key={t} style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
                <Icon size={22} style={{ color: "var(--cyan)" }} aria-hidden />
                <h2 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "14px 0 8px" }}>{t}</h2>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)" }}>
        <span className="hk-grain-layer" aria-hidden />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 880, margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "0 0 10px" }}>
            Pide tu auditoría
          </h2>
          <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-on-inverse-mut)", margin: "0 0 30px", maxWidth: "54ch" }}>
            2 minutos. Mientras más contexto nos des, más útil será el diagnóstico.
          </p>
          <AuditForm />
        </div>
      </section>

      {/* FAQ (maneja objeciones; emite schema FAQPage) */}
      <section style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "0 0 24px" }}>
            Lo que sueles preguntarte.
          </h2>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* DETALLE PARA QUIEN DUDA — después del formulario a propósito */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
          <Secciones secciones={SECCIONES} />
        </div>
      </section>
    </>
  );
}
