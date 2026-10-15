import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ArrowDown, Phone, Mail, Building2, Car, Luggage, ShoppingBag, Stethoscope, Sprout, Wine,
  SearchX, UserX, Hourglass, BadgeDollarSign, MonitorX, EyeOff, MessageCircle, Video, ClipboardCheck,
} from "lucide-react";
import { Section, Btn, TaglineStrip } from "@/components/brand/parts";
import { CtaForm, Percepcion } from "@/components/brand/interactive";
import HeroShowcase from "@/components/HeroShowcase";
import FunnelVivo from "@/components/FunnelVivo";
import ProofBar from "@/components/ProofBar";
import ClientLogos from "@/components/ClientLogos";
import SectorList from "@/components/SectorList";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";
import MetodoPinned from "@/components/MetodoPinned";
import WorkWall from "@/components/WorkWall";
import ScrollBlot from "@/components/ScrollBlot";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";
import { SERVICE_CATEGORIES } from "@/content/navegacion";
import { desdeCategoria } from "@/content/precios";
import { fotoPortafolio } from "@/content/portafolio-fotos";

/**
 * ── Orden de la home (octubre de 2026) ────────────────────────────────────
 * El orden sigue las preguntas que se hace quien llega, en el orden en que se
 * las hace, y todo termina en un solo paso: agendar la consultoría cero.
 *
 *   1. ¿Qué hacen y para quién?            → hero, con el botón ya visible
 *   2. ¿Son de verdad? ¿Quiénes son?       → cifras, equipo y logos
 *   3. ¿Me resuelven MI problema?          → seis problemas, cada uno con su solución
 *   4. ¿Lo han hecho antes?                → casos con cifras reales
 *   5. ¿Cómo empiezo y qué me cuesta?      → la consultoría cero, en tres pasos
 *   6. ¿Trabajan con mi rubro?             → rubros (y el test por rubro)
 *   7. ¿Qué venden exactamente y cuánto?   → servicios con precio "desde"
 *   8. ¿Cómo trabajan? ¿Por qué ustedes?   → portafolio, método, razones
 *   9. Mis dudas                           → preguntas frecuentes
 *  10. Agendar                             → cierre con formulario
 *
 * Antes, los casos estaban en la pantalla 6,5 del celular y la forma de empezar
 * no estaba explicada en ningún sitio de la home: había dos ofertas gratuitas
 * distintas (llamada y auditoría) compitiendo entre sí.
 */

/** La acción de toda la página. WhatsApp porque es el canal que la gente usa
 *  (Meta cuenta 27 clics a WhatsApp por cada 4 formularios), y el mensaje
 *  nombra la consultoría para que en la bandeja se sepa de dónde vino. */
const WA_CONSULTORIA = whatsappLink("Hola Suggestion, quiero agendar mi consultoría cero.");

/**
 * Entrada por el problema, no por el servicio.
 *
 * Sale de la tabla de /servicios ("Lo que te pasa · Dónde suele estar la causa
 * · Por dónde empezar"), la pieza más clara que hay escrita en el sitio. Aquí
 * va en la voz del cliente —"no me llegan clientes", no "no llegan
 * contactos"— y cada solución lleva a la página del servicio.
 */
const PROBLEMAS: { problema: string; causa: string; Icono: typeof Car; lleva: { label: string; href: string }[] }[] = [
  { problema: "No me llegan clientes nuevos", causa: "Nadie sabe que existes, o no te encuentran cuando te buscan.", Icono: SearchX, lleva: [{ label: "Publicidad digital", href: "/servicios/publicidad-digital" }, { label: "SEO", href: "/servicios/seo" }] },
  { problema: "Me escriben, pero no compran", causa: "Le hablas al público equivocado o nadie filtra quién está listo para comprar.", Icono: UserX, lleva: [{ label: "Estrategia", href: "/servicios/estrategia" }, { label: "CRM", href: "/servicios/crm-automatizacion" }] },
  { problema: "Preguntan y después desaparecen", causa: "Nadie les responde a tiempo: el interés dura menos de lo que crees.", Icono: Hourglass, lleva: [{ label: "CRM y automatización", href: "/servicios/crm-automatizacion" }] },
  { problema: "Solo me comparan por precio", causa: "No hay una razón visible para elegirte a ti y no al de al lado.", Icono: BadgeDollarSign, lleva: [{ label: "Branding", href: "/servicios/branding" }, { label: "Contenido", href: "/servicios/marca-contenido" }] },
  { problema: "Mi web no vende", causa: "La página tarda en cargar o no guía a nadie a escribirte; casi nunca es el diseño.", Icono: MonitorX, lleva: [{ label: "Desarrollo web", href: "/servicios/desarrollo-web" }] },
  { problema: "En la calle nadie me ve", causa: "Toda tu inversión está en la pantalla y tu local no se nota.", Icono: EyeOff, lleva: [{ label: "BTL y activaciones", href: "/servicios/btl" }, { label: "Imprenta", href: "/servicios/imprenta" }] },
];

/** La consultoría cero, en tres pasos. Los datos son los que ya promete
 *  /auditoria-gratis: 20 minutos, en 48 horas hábiles, por videollamada o
 *  WhatsApp, sin accesos y con tres mejoras que son del cliente. */
const PASOS_CONSULTORIA = [
  { Icono: MessageCircle, t: "Nos escribes", d: "Por WhatsApp o con un formulario de dos minutos. Te respondemos en menos de 24 horas hábiles para elegir el día." },
  { Icono: Video, t: "Conversamos 20 minutos", d: "Por videollamada o WhatsApp, dentro de 48 horas hábiles. Antes ya habremos mirado tu web, tus redes y tus anuncios." },
  { Icono: ClipboardCheck, t: "Te llevas 3 mejoras concretas", d: "Las tres que más moverían tus ventas. Las aplicas con nosotros o por tu cuenta: son tuyas." },
];

export const metadata: Metadata = buildMetadata({
  // Frase exacta al inicio: la portada es la única que debe competir por
  // "agencia de marketing en Ica" (keyword comercial nº1). Se quita "Digital"
  // —que rompía la coincidencia exacta— y se cede ese término a
  // /servicios/marketing-digital, su dueña natural.
  title: "Agencia de Marketing en Ica y Perú | Suggestion",
  description:
    "Suggestion es la agencia de marketing en Ica que convierte atención en ventas: clientes, citas y cierres medibles, en Ica y todo el Perú. Agenda tu consultoría gratis.",
  path: "/",
});

const SECTORES = [
  { title: "Inmobiliario", result: "Llenamos tu sala de ventas de citas calificadas, no de curiosos.", href: "/marketing-inmobiliario", icon: Building2, shape: 1 },
  { title: "Automotriz", result: "Del clic al test drive: leads listos para cerrar en piso.", href: "/marketing-automotriz", icon: Car, shape: 2 },
  { title: "Turismo", result: "Reservas reales, en temporada y fuera de ella, con costo medido.", href: "/marketing-turismo", icon: Luggage, shape: 6 },
  { title: "Marcas y consumo", result: "Demanda que se vuelve venta, no likes prestados.", href: "/marketing-marcas-consumo", icon: ShoppingBag, shape: 5 },
  { title: "Salud", result: "Agenda llena de pacientes sin quemar tu presupuesto.", href: "/marketing-salud", icon: Stethoscope, shape: 4 },
  { title: "Agroexportación", result: "Presencia B2B que te pone frente al importador correcto.", href: "/marketing-agroexportacion", icon: Sprout, shape: 3 },
  { title: "Pisco y vino", result: "Tu tradición, contada para vender dentro y fuera de Ica.", href: "/marketing-pisco-vino", icon: Wine, shape: 7 },
];

// Cada caso enlaza a su página: antes las tarjetas no llevaban a ningún sitio
// y la única salida era un "Hablemos de tu caso" que abría el índice. Las
// frases van sin jerga: "leads", "Meta Ads" o "cierre en piso" se entienden en
// una agencia, no en la cabeza de quien busca una.
const CASOS: { tag: string; title: string; metric: string; metricLocale?: string; note: string; img: string; alt: string; href: string }[] = [
  { tag: "Inmobiliario", title: "Inmobiliaria Ceinys", metric: "S/350,000", metricLocale: "es-ES", note: "en ventas: 350 personas interesadas y 8 lotes vendidos, con S/3,000 en anuncios de Facebook e Instagram.", img: "/assets/casos/ceinys-campana-2.webp", alt: "Anuncio del bono por WhatsApp de Ceinys, la pieza que captaba a los interesados de la campaña", href: "/casos/inmobiliaria-ceinys" },
  { tag: "Consumo", title: "Granjas Bonanza", metric: "15", note: "contratos cerrados con S/2,500 invertidos en publicidad.", img: "/assets/casos/bonanza-granja.webp", alt: "Galpón de Granjas Bonanza en operación", href: "/casos/granjas-bonanza" },
  { tag: "Turismo", title: "Hoteles Señor de Luren", metric: "75", note: "reservas en una sola campaña, dentro y fuera de temporada.", img: "/assets/sectores/turismo.webp", alt: "Destino turístico en Ica (sector turismo)", href: "/casos/hoteles-senor-de-luren" },
  { tag: "Automotriz", title: "Autoniza", metric: "8", note: "autos vendidos en 2 eventos: invitamos a los compradores, montamos el evento y se vendió el mismo día.", img: fotoPortafolio("relanzamiento-mitsubishi-autoniza", 18), alt: "Unidad Mitsubishi con moño en el evento de Autoniza, en Ica", href: "/casos/autoniza-eventos" },
];

const FAQ = [
  // Las dos primeras son las que frenan a quien está por escribir: qué es la
  // consultoría y cuánto cuesta. Van arriba por eso.
  {
    q: "¿Qué es la consultoría cero y cuánto cuesta?",
    a: "No cuesta nada. Es una conversación de 20 minutos, por videollamada o WhatsApp, en la que revisamos cómo te llegan hoy los clientes y dónde se pierden las ventas. Te llevas tres mejoras concretas que puedes aplicar con nosotros o por tu cuenta. No necesitas darnos acceso a tus cuentas: trabajamos con lo que es público y con lo que nos cuentes.",
  },
  {
    q: "¿Cuánto cuesta trabajar con ustedes?",
    a: "Depende de lo que necesites. Cada servicio tiene sus precios publicados en su página, desde planes mensuales hasta proyectos de una sola vez. En la consultoría cero te decimos qué conviene hacer primero y cuánto tiene sentido invertir, para que no gastes en lo que todavía no necesitas.",
  },
  {
    q: "¿Qué hace una agencia de marketing y publicidad?",
    a: "Atrae a las personas correctas, las convierte en contactos y acompaña hasta el cierre. Nosotros no nos quedamos en el alcance: medimos cuántos leads, citas y ventas genera cada sol invertido.",
  },
  {
    q: "¿Por qué elegir una agencia de marketing en Ica y no una de Lima?",
    a: "Porque conocemos este mercado de primera mano: cómo compra la gente en Ica, qué medios funcionan y qué precios se manejan. Una agencia de marketing en Ica te da esa lectura local con el mismo nivel técnico que una de Lima — y con resultados medibles en ventas, no en promesas.",
  },
  {
    q: "¿Atienden en todo el Perú desde Ica?",
    a: "Sí. Operamos desde Ica y manejamos campañas a nivel nacional. La distancia no cambia los resultados; los números, sí.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Con lo que le importa a tu negocio: cuánto te cuesta cada persona interesada, cuántas citas salen de ahí y cuántas ventas se cierran. Recibes un reporte claro con esos números, no un tablero de “me gusta”.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ)} />
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
            <div className="hk-enter hk-eyebrow"><span className="live" aria-hidden />Marketing de performance</div>
            {/* Jerarquía tipográfica: el claim grande es AUTOSUFICIENTE (se lee primero); el matiz va debajo con menos peso. maxWidth en px: el h1 hereda 16px, "ch" colapsaría */}
            <h1 className="hk-enter-2 hk-display" style={{ margin: "clamp(16px,2vw,24px) 0 0", maxWidth: 680 }}>
              <span className="big">Convertimos atención en <span style={{ color: "var(--cyan-text)" }}>ventas</span>.</span>
              <span className="sub">Agencia de marketing en Ica, para marcas de todo el Perú.</span>
            </h1>
            {/* "El funnel vivo": el mensaje del párrafo, mostrado en vez de leído (texto completo queda visually-hidden dentro) */}
            <div className="hk-enter-3">
              <FunnelVivo />
            </div>
            {/* Una sola acción: la consultoría cero, por WhatsApp (el canal
                que la gente usa: 27 clics a WhatsApp por cada 4 formularios).
                Antes había dos botones con dos ofertas gratis distintas
                —"escríbenos" y "auditoría"—, y quien duda entre dos puertas
                suele no abrir ninguna. El segundo botón ya no vende otra cosa:
                explica esta, porque "consultoría cero" es un nombre nuevo y
                hay que poder saber qué es antes de pedirla. */}
            <div className="hk-enter-4 hk-hero-ctas" style={{ display: "flex", gap: 14, marginTop: 24, flexWrap: "wrap", alignItems: "center" }}>
              <Magnetic>
                <Btn as="a" href={WA_CONSULTORIA} size="lg">
                  Agenda tu consultoría cero <ArrowRight size={18} />
                </Btn>
              </Magnetic>
              <Magnetic><Btn as="a" href="#consultoria" variant="secondary" size="lg">¿Qué es la consultoría cero?</Btn></Magnetic>
            </div>
            {/* Lo que quita el miedo a tocar el botón, pegado al botón. */}
            <p className="hk-enter-4 hk-hero-garantia">
              <span><strong>Gratis</strong> · 20 minutos · sin compromiso</span>
              <Link href="/casos">
                <strong>Más de 50 marcas</strong> ya trabajaron con nosotros
              </Link>
            </p>
          </div>
          <div className="hk-enter-3" style={{ minWidth: 0, display: "flex", justifyContent: "center" }}>
            <HeroShowcase />
          </div>
        </div>
        <div className="hk-nav" style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter) clamp(1.25rem,2.5vw,2rem)" }}>
          <a href="#problemas" className="hk-scrollcue"><ArrowDown size={14} /> Desliza</a>
        </div>
        <TaglineStrip items={["Marketing que se mide en ventas", "Resultados que puedes contar", "Una estrategia para cada rubro"]} />
      </section>

      {/* PROOF BAR (sin la fila del funnel: ya aparece en el panel del hero).
          Con el equipo: las cifras dicen cuánto, las siete personas dicen quién. */}
      <ProofBar funnel={false} equipo />

      {/* LOGOS DE CLIENTES */}
      <ClientLogos />

      {/* PROBLEMAS — la primera pregunta de quien llega no es "¿qué
          servicios tienen?", es "¿me pueden ayudar con lo que me pasa?". */}
      <Section id="problemas" tone="light">
        <div className="reveal" style={{ maxWidth: 760, marginBottom: "clamp(1.75rem,3vw,2.5rem)" }}>
          <SectionHeading level={2} kicker="¿Qué te está pasando?" maxWidth="20ch">
            Elige tu problema. Te decimos por dónde empezar.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "52ch" }}>
            Casi nadie llega pidiendo «una campaña de publicidad digital»: se llega porque el teléfono no suena. Por eso empezamos por ahí.
          </p>
        </div>
        <ul className="hk-prob reveal">
          {PROBLEMAS.map(({ problema, causa, Icono, lleva }) => (
            <li key={problema} className="hk-prob-c">
              <div className="hk-prob-cab">
                <span className="hk-prob-ico" aria-hidden><Icono size={20} strokeWidth={2} /></span>
                <h3>{problema}</h3>
              </div>
              <p className="hk-prob-causa"><span>Suele pasar porque</span> {causa.charAt(0).toLowerCase() + causa.slice(1)}</p>
              <p className="hk-prob-sol">
                <span aria-hidden>→</span>
                {lleva.map((s, i) => (
                  <span key={s.href}>
                    {i > 0 && " · "}
                    <Link href={s.href}>{s.label}</Link>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
        <p className="hk-prob-cta reveal">
          ¿No sabes cuál es el tuyo? <a href={WA_CONSULTORIA}>Lo vemos juntos en la consultoría cero, gratis <ArrowRight size={15} aria-hidden /></a>
        </p>
      </Section>

      {/* CASOS — subidos de la pantalla 6,5 a justo después de los
          problemas: "¿lo han resuelto antes?" es la pregunta siguiente. */}
      <Section id="casos" tone="light" style={{ background: "var(--surface-raised)" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
          <SectionHeading level={2} kicker="Casos reales de Suggestion" maxWidth="18ch" reveal>
            Así lo resolvimos para otros negocios.
          </SectionHeading>
          <a href="/casos" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
            Ver todos los casos <ArrowRight size={16} />
          </a>
        </div>
        {/* En el celular se desliza de lado: cuatro tarjetas con foto apiladas
            eran tres pantallas y media de scroll. La siguiente asoma por el
            borde para que se entienda que hay más. */}
        <div className="reveal hk-casos-fila">
          {CASOS.map((c) => (
            <a key={c.title} href={c.href} className="hk-case hk-lift" style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", display: "flex", flexDirection: "column", background: "var(--white)", color: "inherit", textDecoration: "none" }}>
              {/* Imagen real del caso (relaciona el dato con una prueba visual) */}
              <div style={{ position: "relative", aspectRatio: "16 / 10", background: "var(--surface-raised)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, left: 12, font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--white)", background: "rgba(8,8,8,0.6)", backdropFilter: "blur(4px)", padding: "6px 10px", borderRadius: "var(--radius-sm)" }}>{c.tag}</span>
              </div>
              <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ font: "var(--fw-bold) var(--fs-4xl)/0.95 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)" }}>
                  <CountUp to={c.metric} locale={c.metricLocale} />
                </div>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-body)" }}>
                  <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{c.title}.</strong> {c.note}
                </p>
                <span className="hk-case-ver">Ver el caso <ArrowRight size={14} aria-hidden /></span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONSULTORÍA CERO — justo después de los casos: es el momento en
          que el visitante ya vio que resolvemos su problema y que lo hemos
          hecho antes, y la siguiente pregunta es "¿y cómo empiezo?". */}
      <Section id="consultoria" tone="light">
        <div className="hk-cons reveal">
          <div className="hk-cons-intro">
            <SectionHeading level={2} kicker="Consultoría cero · gratis" maxWidth="16ch">
              Empieza por una conversación de 20 minutos.
            </SectionHeading>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "44ch" }}>
              Antes de proponerte nada, miramos cómo te llegan hoy los clientes y dónde se te escapan las ventas.
            </p>
            <ul className="hk-cons-gar">
              <li>Sin costo</li>
              <li>Sin compromiso</li>
              <li>Sin darnos accesos a tus cuentas</li>
            </ul>
          </div>
          <ol className="hk-cons-pasos">
            {PASOS_CONSULTORIA.map(({ Icono, t, d }, i) => (
              <li key={t}>
                <span className="hk-cons-n" aria-hidden><Icono size={19} strokeWidth={2} /></span>
                <div>
                  <span className="hk-cons-paso">Paso {i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="hk-cons-ctas">
            <Magnetic>
              <Btn as="a" href={WA_CONSULTORIA} size="lg">
                Agenda tu consultoría cero <ArrowRight size={18} />
              </Btn>
            </Magnetic>
            <Link href="/auditoria-gratis" className="hk-ulink">Prefiero dejar mis datos en un formulario</Link>
          </div>
        </div>
      </Section>

      {/* SECTORES */}
      <Section id="sectores" tone="dark">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <SectionHeading level={2} kicker="¿Trabajan con mi rubro?" tone="dark" maxWidth="18ch" reveal>
            Cada mercado compra distinto. Estos los conocemos a fondo.
          </SectionHeading>
          {/* Decía "Cinco verticales" con siete en la lista, y "vertical" es
              palabra de agencia. El número sale de la propia lista. */}
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "34ch" }}>
            {SECTORES.length} rubros, cada uno con su propia forma de vender. Si el tuyo no está, igual conversemos.
          </p>
        </div>
        <SectorList items={SECTORES} />
      </Section>

      {/* ¿QUÉ VES? — momento interpretable (Rorschach) */}
      <Percepcion shape={1} />

      {/* SERVICIOS */}
      <Section id="servicios" tone="light">
        <div className="hk-serv reveal" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "start" }}>
          <div>
            <SectionHeading level={2} kicker="Servicios y precios" maxWidth="15ch" reveal>
              Todo lo que hace falta para vender, en un solo equipo.
            </SectionHeading>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "36ch" }}>
              No vendemos piezas sueltas: de la estrategia a los anuncios, la web y el material en la calle. Cada servicio tiene sus precios publicados.
            </p>
            {/* Para el que llega hasta aquí sin saber qué elegir, que es lo
                normal: el catálogo no tiene por qué entenderlo el cliente. */}
            <p className="hk-serv-duda">
              ¿No sabes cuál necesitas? <a href={WA_CONSULTORIA}>Te lo decimos en la consultoría cero <ArrowRight size={14} aria-hidden /></a>
            </p>
            <a href="/servicios" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
              Ver todos los servicios <ArrowRight size={16} />
            </a>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: "1px solid var(--hairline)" }}>
            {SERVICE_CATEGORIES.map((cat, i) => (
              <li key={cat.slug} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1rem,3vw,2.5rem)", padding: "22px 0", borderTop: "1px solid var(--hairline)" }}>
                <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", color: "var(--cyan-text-sm)", paddingTop: 7 }}>0{i + 1}</span>
                <div>
                  <Link href={`/servicios/${cat.slug}`} className="hk-ulink" style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>
                    {cat.label}
                  </Link>
                  {/* Cuántos servicios y desde cuánto. Dos preguntas que el
                      visitante se hace y que la lista de nombres no contestaba:
                      "¿qué incluye esto?" y "¿me alcanza?". El precio sale de
                      PRECIOS, así que no se desincroniza. */}
                  <p className="hk-serv-meta">
                    {cat.children.length} servicios
                    {(() => {
                      const desde = desdeCategoria(cat.children.map((c) => c.href.replace("/servicios/", "")));
                      return desde ? <> · desde <strong>{desde}</strong></> : <> · a cotizar</>;
                    })()}
                  </p>
                  <div className="hk-serv-chips">
                    {cat.children.map((c) => (
                      <Link key={c.href} href={c.href} className="hk-serv-chip">
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

      {/* MURO DE TRABAJOS (+50 marcas, miniaturas flotantes) */}
      <WorkWall />

      {/* MÉTODO (pinned en desktop) */}
      <MetodoPinned />

      {/* "Por qué Suggestion" ya no va en la home: sus cuatro razones son las
          mismas de /nosotros, adonde lleva la banda del equipo, y era el
          bloque que menos ayudaba a decidir. La home ahora termina antes. */}

      {/* FAQ */}
      <Section id="faq" tone="light" style={{ background: "var(--surface-raised)" }}>
        <div className="reveal">
          <SectionHeading level={2} kicker="Preguntas frecuentes" maxWidth="20ch" style={{ marginBottom: 24 }}>
            Lo que sueles preguntarte antes de empezar.
          </SectionHeading>
          <div style={{ maxWidth: 820 }}>
            <Faq items={FAQ} emitSchema={false} />
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
            <SectionHeading level={2} kicker="Consultoría cero · gratis" tone="dark" maxWidth="14ch">
              ¿Hablamos 20 minutos?
            </SectionHeading>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 20, maxWidth: "40ch" }}>
              Cuéntanos de tu negocio y agenda tu consultoría cero: vemos dónde se te escapan las ventas y te llevas tres mejoras concretas. Sin costo y sin compromiso.
            </p>
            <div style={{ display: "flex", gap: 26, marginTop: 30, flexWrap: "wrap" }}>
              <a href={WA_CONSULTORIA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
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
