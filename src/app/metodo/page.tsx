import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, Btn, Label } from "@/components/brand/parts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Secciones from "@/components/Secciones";
import Faq from "@/components/Faq";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import type { Seccion, Faq as FaqItem } from "@/content/types";

/**
 * /metodo — cómo se mide una campaña.
 *
 * Nace del reporte de septiembre de 2026 de un cliente inmobiliario: el
 * expediente daba para contar el método sin publicar una sola cifra suya, y
 * ese es justamente el ángulo que no expone a nadie. Regla de esta página:
 * CERO números de clientes. Las cifras viven en los casos, con permiso y con
 * fecha de corte; aquí vive el criterio.
 */

export const metadata: Metadata = buildMetadata({
  title: "Cómo Medimos una Campaña | Método | Suggestion",
  description:
    "Cómo contamos los resultados de una campaña: medición contra el CRM, no contra el administrador de Meta; la venta se cuenta cuando cierra y se dice de dónde venía el lead.",
  path: "/metodo",
});

const SECCIONES: Seccion[] = [
  {
    h2: "Nos medimos contra tu CRM, no contra el administrador de Meta",
    parrafo:
      "El administrador de la plataforma cuenta conversaciones iniciadas. Tu CRM cuenta personas con nombre, teléfono y un asesor responsable. No son el mismo número, y casi nunca se parecen. La diferencia entre los dos es lo primero que miramos en una cuenta nueva, porque ahí suele estar escondido el verdadero costo de un lead.",
    tabla: {
      cabeceras: ["", "Qué cuenta", "Qué no dice"],
      filas: [
        ["Administrador de la plataforma", "Cuántas conversaciones pagaste y a qué precio", "Si alguna de esas conversaciones llegó a alguien capaz de atenderla"],
        ["Tu CRM", "Cuántas personas quedaron registradas y gestionables", "Cuánto costó traerlas"],
        ["El cruce de los dos", "Qué parte de lo que pagaste se convirtió en algo", "Nada: por eso es el que mandamos en el reporte"],
      ],
      nota: "Cuando esa diferencia se abre, el costo por lead real sube aunque la plataforma siga cobrando lo mismo. Es un problema que no se ve mirando solo un lado.",
    },
  },
  {
    h2: "El nombre de la campaña es un identificador, no una etiqueta",
    parrafo:
      "Casi todas las cuentas que recibimos tienen nombres de campaña escritos para que los entienda quien los creó. El problema aparece tres meses después, cuando hay que decir qué venta vino de qué campaña y nadie puede reconstruirlo. Nosotros nombramos las campañas con una estructura fija, y el mismo campo existe en el CRM: proyecto, mes y, si hace falta, responsable.",
    bullets: [
      { titulo: "Una estructura compartida", texto: "la campaña se llama PROYECTO | MES | RESPONSABLE y el CRM guarda ese mismo campo en el lead. El origen se escribe al crear el lead, no se deduce al cerrar la venta." },
      { titulo: "Se decide antes de gastar", texto: "la nomenclatura se fija al armar la cuenta, no cuando llega la hora de reportar. Reconstruir el origen después nunca sale bien." },
      { titulo: "Sirve para dos lados", texto: "la agencia sabe qué campaña funcionó y el equipo comercial sabe de dónde salió la persona que tiene al teléfono." },
    ],
  },
  {
    h2: "La venta se cuenta cuando cierra, y se dice de dónde venía el lead",
    parrafo:
      "En un negocio donde la decisión tarda semanas, mezclar cohortes es la forma más común de inflar un resultado sin mentir en ninguna cifra. Una venta que cierra en septiembre con un lead que entró en julio es una venta de septiembre, pero no la pagó la pauta de septiembre. Nuestro reporte separa las dos cosas, siempre, y publica la cifra descontada.",
    pasos: [
      { titulo: "El reporte de la plataforma", texto: "inversión y resultados a nivel campaña, en el período exacto que se va a medir." },
      { titulo: "El reporte del CRM", texto: "los leads con su fecha de creación, su estado y su campaña, incluidos los anteriores al período." },
      { titulo: "El cruce", texto: "cada venta se ata, cuando el dato está escrito en el lead, a la campaña que lo originó. La parte que no se puede atar se informa como tal, no se reparte." },
      { titulo: "La resta", texto: "se separan los cierres de leads que entraron en el período de los que venían de cartera. El costo por venta se calcula solo sobre los primeros." },
    ],
    nota: {
      tipo: "aviso",
      titulo: "El número honesto es más feo",
      texto: "Descontar la cartera siempre empeora el titular. Lo hacemos igual, porque es la resta que haría cualquiera que revise, y es mejor que la hagamos nosotros primero.",
    },
  },
  {
    h2: "Reportamos también qué tan bien estamos midiendo",
    parrafo:
      "Un reporte que solo trae buenas noticias no es un reporte, es una presentación. Además de los resultados, cada mes informamos el estado de la propia medición: cuántas conversaciones pagadas llegaron a convertirse en leads registrados, cuántas ventas quedaron atadas a una campaña concreta y qué parte del embudo no se puede explicar. Cuando ese número se deteriora, aparece en la primera página aunque incomode.",
    bullets: [
      { titulo: "Porque es accionable", texto: "una caída en el registro se arregla en días y devuelve leads sin gastar un sol más de pauta." },
      { titulo: "Porque es honesto", texto: "si no decimos qué parte no podemos explicar, el resto del reporte vale menos." },
      { titulo: "Porque es del cliente", texto: "ese diagnóstico se discute en la reunión, no se publica. Lo que sale a una página web son resultados, nunca el expediente interno de nadie." },
    ],
  },
  {
    h2: "Lo que no publicamos nunca",
    parrafo:
      "Publicamos resultados de clientes con su autorización escrita y con la lista exacta de cifras aprobadas. Fuera de eso hay una línea que no cruzamos, y conviene decirla antes de que alguien nos confíe su cuenta.",
    bullets: [
      { titulo: "Nombres de los compradores de nuestros clientes", texto: "son personas que le compraron a otro, no material nuestro." },
      { titulo: "Desempeño individual del equipo comercial", texto: "quién vende más y quién menos es una conversación interna del cliente." },
      { titulo: "Nombres de campañas y proyectos", texto: "revelan dónde pone el presupuesto, que es justo lo que su competencia querría saber." },
      { titulo: "Pantallazos del administrador", texto: "sin contexto no prueban nada y suelen enseñar más de lo que deberían." },
    ],
  },
];

const FAQ: FaqItem[] = [
  {
    q: "¿Por qué el costo por lead que muestra la plataforma no es mi costo por lead?",
    a: "Porque la plataforma cuenta conversaciones iniciadas y tú gestionas personas registradas. Entre una cosa y la otra se pierde gente: mensajes que nadie respondió, formularios que no llegaron al CRM, contactos que entraron por un canal sin responsable. Tu costo real es la inversión dividida entre los leads que tu equipo pudo trabajar, y casi siempre es más alto que el del panel.",
  },
  {
    q: "¿Necesito un CRM para que esto funcione?",
    a: "Necesitas un lugar donde quede escrito quién entró, cuándo y qué pasó con esa persona. Puede ser un CRM o una hoja ordenada con reglas claras. Lo que no funciona es medir solo con lo que dice la plataforma: ahí no existe la parte del proceso donde se gana o se pierde la venta.",
  },
  {
    q: "¿Qué pasa si mi CRM no tiene campo de campaña?",
    a: "Se crea, que suele ser un cambio de minutos, o se usa un campo existente con una convención fija. Lo importante es que el dato se escriba al crear el lead y no se complete de memoria después. Si no hay forma de hacerlo, lo decimos desde el principio y acordamos qué sí vamos a poder atribuir y qué no.",
  },
  {
    q: "¿Cada cuánto entregan el reporte?",
    a: "Mensual, con cortes intermedios cuando la campaña lo pide. El reporte trae la inversión, el resultado comercial, el embudo completo con sus caídas y el estado de la medición. No se entrega una lámina con el alcance y las impresiones.",
  },
  {
    q: "¿Publican los resultados de sus clientes?",
    a: "Solo con autorización escrita, con la lista exacta de cifras aprobadas y con fecha de corte visible. Y nunca los datos de las personas que le compraron al cliente ni el desempeño de su equipo. Puedes ver cómo queda eso en los casos publicados.",
  },
];

export default function MetodoPage() {
  const url = absoluteUrl("/metodo");
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(FAQ),
          breadcrumbSchema([
            { name: "Inicio", url: absoluteUrl("/") },
            { name: "Cómo medimos", url },
          ]),
        ]}
      />

      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2.5rem,5vw,4rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Cómo medimos", href: "/metodo" }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 760 }}>
            <Label dot>Método</Label>
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "17ch" }}>
              Cómo medimos una campaña
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "56ch" }}>
              Una campaña puede verse impecable en el administrador de la plataforma y no haber vendido nada. Esta página explica cómo contamos, qué cuenta como resultado, qué descontamos antes de reportar y qué no publicamos nunca.
            </p>
            <div className="hk-enter-4" style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
              <Btn as="a" href="/casos/ceinys-septiembre-2026" size="lg">
                Ver un reporte aplicado <ArrowRight size={18} />
              </Btn>
              <Btn as="a" href="/auditoria-gratis" variant="secondary" size="lg">Auditoría gratis (48 h)</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <Section tone="light">
        <div style={{ maxWidth: 820 }}>
          <Secciones secciones={SECCIONES} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: 820 }}>
          <Faq items={FAQ} />
        </div>
      </Section>

      {/* ENLAZADO */}
      <Section tone="light" style={{ paddingTop: "var(--section-y-tight)", paddingBottom: "var(--section-y-tight)" }}>
        <div style={{ display: "grid", gap: "var(--space-7)" }}>
          <RelatedLinks
            title="Dónde se ve aplicado"
            columns={3}
            links={[
              { label: "Caso Ceinys · septiembre 2026", href: "/casos/ceinys-septiembre-2026" },
              { label: "Caso Ceinys · agosto 2026", href: "/casos/ceinys-agosto-2026" },
              { label: "Portafolio de activaciones", href: "/portafolio" },
              { label: "Publicidad digital", href: "/servicios/publicidad-digital" },
              { label: "CRM y automatización", href: "/servicios/crm-automatizacion" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
