import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { Section, Btn, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappLink, absoluteUrl, ORG_ID } from "@/lib/site";
import Secciones from "@/components/Secciones";
import Faq from "@/components/Faq";
import type { Seccion, Faq as FaqItem } from "@/content/types";
import { EQUIPO } from "@/content/equipo";

export const metadata: Metadata = buildMetadata({
  // La frase exacta se reserva a la portada; aquí va en segundo plano para
  // conservar relevancia sin competir de frente con ella.
  title: "Nosotros | La Agencia de Performance de Ica | Suggestion",
  description:
    "Somos Suggestion, agencia de performance en Ica. Convertimos atención en ventas con un método propio por vertical. Conoce cómo trabajamos.",
  path: "/nosotros",
});

/**
 * Cuerpo editorial de /nosotros. La pagina tenia 428 palabras: metodo, valores
 * y equipo, todo correcto pero sin responder lo que alguien se pregunta antes
 * de contratar. Esto lo responde.
 */
const SECCIONES: Seccion[] = [
  {
    h2: "Qué somos, en datos",
    parrafo:
      "Somos una agencia de marketing de performance con base en Ica y clientes en todo el Perú. No es una descripción de folleto: significa que el trabajo se mide en leads, citas y cierres, y que el reporte del mes trae esos números aunque no favorezcan. Llevamos siete años haciéndolo, y en ese tiempo han pasado por aquí más de cincuenta marcas de sectores muy distintos.",
    tabla: {
      cabeceras: ["", ""],
      filas: [
        ["Dónde estamos", "Ica, Perú · operamos en todo el país"],
        ["Desde cuándo", "7 años trabajando marcas de Ica y del Perú"],
        ["Marcas atendidas", "Más de 50"],
        ["Sectores con estrategia propia", "7, cada uno con su método"],
        ["Automotriz", "19 marcas de vehículos, de livianos a línea amarilla"],
        ["Equipo", "7 personas, todas con nombre y cara en esta web"],
      ],
      nota: "Somos Agencia de Marketing Suggestion S.A.C. Los datos formales están en el pie de página.",
    },
  },
  {
    h2: "Digital y calle, bajo un mismo techo",
    parrafo:
      "Es la diferencia práctica más grande con la mayoría de agencias, y no es una decisión de catálogo. En Ica y en buena parte del Perú, la compra rara vez ocurre entera en la pantalla: alguien ve un anuncio, pregunta por WhatsApp, pasa por el local y decide delante del producto. Cuando la campaña la lleva una empresa y el material del punto de venta otra, el cliente nota la costura, y esa incoherencia se paga en ventas. Aquí las dos capas salen del mismo equipo.",
  },
  {
    h2: "Cómo trabajamos, sin adornos",
    parrafo:
      "Esto es lo que ocurre de verdad cuando empezamos, incluida la parte aburrida. La ponemos por escrito porque las expectativas mal puestas al principio son la causa más común de que una relación no funcione.",
    pasos: [
      { titulo: "Miramos tu proceso comercial, no solo tu marketing", texto: "de dónde llegan hoy tus clientes, cuánto te cuestan y dónde se pierden. Casi siempre hay más ventas escondidas en las fugas que en un canal nuevo." },
      { titulo: "Montamos la medición antes que la campaña", texto: "si no está claro qué cuenta como lead y cómo se registra, cualquier resultado posterior es una opinión." },
      { titulo: "Arrancamos con presupuesto de aprendizaje", texto: "no con el total. Las plataformas necesitan volumen para optimizar, y cambiar todo cada dos días reinicia ese aprendizaje y encarece el resultado." },
      { titulo: "Decidimos con datos, no por gusto", texto: "qué mensaje trae contactos que cierran, no cuál nos gusta más. Es la parte donde se deja de discutir de colores." },
      { titulo: "Reportamos con los números como son", texto: "costo por lead, por cita y por venta. También los meses en que no salen." },
    ],
  },
  {
    h2: "Lo que no vamos a hacer",
    parrafo:
      "Nos parece más útil decir esto por adelantado que descubrirlo a los tres meses. Ninguna de estas cosas es una postura moral: todas son decisiones prácticas que protegen el resultado del cliente.",
    bullets: [
      { titulo: "No prometemos el puesto número uno", texto: "nadie controla a la competencia ni el algoritmo. Prometemos medir y decirte dónde estás." },
      { titulo: "No compramos seguidores ni reseñas", texto: "las plataformas lo detectan, y el daño a una ficha dura mucho más que el beneficio." },
      { titulo: "No reportamos alcance como si fuera venta", texto: "el alcance describe la conversación; el negocio son las citas y los cierres." },
      { titulo: "No vendemos una campaña cuando el problema es otro", texto: "si en el diagnóstico vemos que la causa es el precio, el producto o la capacidad de atención, lo decimos. Es más útil que facturar algo que no iba a funcionar." },
    ],
    nota: {
      titulo: "Qué necesitamos de tu lado",
      texto: "Alguien que responda los mensajes el mismo día, claridad en precios y condiciones para que quien atiende no tenga que consultar cada duda, y acceso a tus números reales de venta. Sin esas tres cosas, buena parte de la inversión se pierde en un tramo que no controlamos.",
    },
  },
];

const FAQ_NOSOTROS: FaqItem[] = [
  {
    q: "¿Por qué una agencia de Ica y no una de Lima?",
    a: "Por dos cosas concretas, no por localismo. La primera es que conocemos el mercado de cerca: cómo se mueve la temporada, qué sectores mandan y cómo compra la gente aquí. La segunda es que producimos en la región, así que una gigantografía o una activación no dependen de coordinar a distancia. Para la parte digital la ubicación da igual, y trabajamos con marcas de todo el país.",
  },
  {
    q: "¿Con qué tamaño de empresa trabajan?",
    a: "Desde un consultorio o una bodega familiar hasta concesionarios y agroexportadoras. Lo que cambia no es el tamaño sino si hay alguien que pueda atender lo que la campaña genere: un negocio pequeño con respuesta rápida rinde más que uno grande donde los mensajes esperan tres días.",
  },
  {
    q: "¿Cuánto tardan en verse resultados?",
    a: "Depende de lo que vendas. En servicios de decisión rápida, los primeros contactos llegan en días. En inmobiliario, automotriz o agroexportación el ciclo se mide en semanas o campañas, y juzgar por las ventas de la primera quincena lleva a apagar algo que estaba funcionando. Lo que sí se puede leer pronto es el costo por lead y qué porcentaje avanza de etapa.",
  },
  {
    q: "¿Quién lleva mi cuenta?",
    a: "Un equipo pequeño y con nombre: las siete personas que trabajamos aquí están en esta misma página, con su rol y su especialidad. No hay una capa de gestores entre tú y quien hace el trabajo.",
  },
  {
    q: "¿Qué pasa si quiero dejarlo?",
    a: "Lo que hemos construido es tuyo: dominio, web, accesos, cuentas publicitarias y base de datos. Es una condición razonable que deberías exigirle a cualquier proveedor, y conviene comprobarla antes de firmar, no después.",
  },
  {
    q: "¿Trabajan con competidores directos?",
    a: "No en la misma categoría y la misma zona. Es incompatible con hacer bien el trabajo: la estrategia de uno se construye precisamente mirando lo que hace el otro.",
  },
];

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
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan-text)" }}>0{i + 1}</span>
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
              <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan-text)" }}>0{i + 1}</span>
              <div>
                <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)" }}>{t}</h3>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CUERPO EDITORIAL: qué somos, cómo trabajamos y qué no hacemos */}
      <Section tone="light">
        <div style={{ maxWidth: 880 }}>
          <Secciones secciones={SECCIONES} />
        </div>
      </Section>

      {/* PREGUNTAS */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: 880 }}>
          <SectionHeading level={2} kicker="Preguntas" maxWidth="24ch" style={{ marginBottom: 28 }}>
            Lo que suelen preguntarnos antes de empezar.
          </SectionHeading>
          <Faq items={FAQ_NOSOTROS} />
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
              <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--cyan-text-sm)" }}>0{i + 1}</span>
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
            <a key={m.slug} href={`/equipo/${m.slug}`} className="hk-lift" data-tono="claro" style={{ display: "flex", gap: 18, alignItems: "center", padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
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
                <span style={{ display: "block", font: "var(--fw-bold) var(--fs-micro)/1.2 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--cyan-text-sm)", marginTop: 6 }}>{m.rol}</span>
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
