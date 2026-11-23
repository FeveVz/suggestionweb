import type { Metadata } from "next";
import Link from "next/link";
import { Label } from "@/components/brand/parts";
import NoMedirToggle from "@/components/NoMedirToggle";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * Política de privacidad (Ley N.º 29733 y su Reglamento, DS 003-2013-JUS).
 *
 * 23-nov-2026: se añade Metricool (proveedor, qué mide y el botón «No medir»), a pedido del owner.
 * Reescrita el 21-nov-2026 (auditoría MED-09, MED-05 y MED-08; decisión 9):
 * describe el tratamiento que de verdad ocurre hoy —formularios guardados en
 * una Hoja de Google, conversación en WhatsApp con asistente de IA, Píxel y
 * API de Conversiones con nombre y teléfono en hash, GA4 y Clarity— y añade
 * el botón «No medir mi visita». Pendiente del dueño: validarla con un abogado
 * e inscribir los bancos de datos en el RNPDP (tarea 2.16); cuando haya código
 * de inscripción, citarlo en la sección 1. No afirmar una inscripción que no
 * existe ni una «base cifrada»: Supabase está inactivo.
 */
export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad | Suggestion",
  description:
    "Qué datos tratamos, para qué, con qué proveedores y cuánto tiempo, cómo ejercer tus derechos y cómo pedir que no midamos tu visita. Ley N.º 29733.",
  path: "/privacidad",
});

const H2: React.CSSProperties = { font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "36px 0 12px" };
const P: React.CSSProperties = { font: "var(--fw-light) var(--fs-base)/1.65 var(--font-body)", color: "var(--text-body)", margin: "0 0 12px", maxWidth: "70ch" };
const UL: React.CSSProperties = { ...P, paddingLeft: "1.2em", display: "grid", gap: 6 };
const A: React.CSSProperties = { textDecoration: "underline" };

export default function Privacidad() {
  return (
    <section style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(2rem,4vw,3.5rem) var(--gutter) var(--section-y)" }}>
        <Label dot>Legal</Label>
        <h1 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 8px" }}>
          Política de Privacidad
        </h1>
        <p style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)" }}>Última actualización: 23 de noviembre de 2026</p>

        <h2 style={H2}>1. Quién trata tus datos</h2>
        <p style={P}>
          <strong>{site.legalName}</strong> · RUC {site.ruc} · Ica, Perú (en adelante, «Suggestion»). Somos responsables de los datos personales que nos das a través de este sitio, conforme a la Ley N.º 29733, Ley de Protección de Datos Personales, y su Reglamento. Para cualquier tema de datos personales escríbenos a{" "}
          <a href={`mailto:${site.email}`} style={A}>{site.email}</a>.
        </p>

        <h2 style={H2}>2. Qué datos tratamos</h2>
        <ul style={UL}>
          <li>
            <strong>Formularios de consultoría cero, contacto y auditoría gratis:</strong> tu nombre y tu número de WhatsApp; en la auditoría, además, el nombre del negocio, tu web o Instagram si lo das, la inversión aproximada y tu objetivo; y lo que escribas en el mensaje. No pedimos tu correo en estos formularios. Junto con eso guardamos la página desde la que escribiste y, si llegaste por un anuncio, sus parámetros de campaña.
          </li>
          <li>
            <strong>WhatsApp:</strong> al enviar un formulario se abre WhatsApp con tu mensaje. Lo que escribas ahí lo responde primero un asistente de inteligencia artificial y luego una persona del equipo, de lunes a sábado de 8:30 a 18:30.
          </li>
          <li>
            <strong>Libro de Reclamaciones:</strong> los datos que exige la norma (nombre, documento de identidad, domicilio, teléfono, correo, datos del padre, la madre o el apoderado si quien reclama es menor de edad, y el detalle del reclamo), que llegan a nuestro correo.
          </li>
          <li>
            <strong>Navegación:</strong> datos de uso del sitio que registran Google Analytics, el Píxel de Meta y Microsoft Clarity mediante cookies e identificadores del navegador, y Metricool, que no usa cookies (sección 5).
          </li>
        </ul>

        <h2 style={H2}>3. Para qué los usamos y con qué base</h2>
        <ul style={UL}>
          <li>Responder tu consulta, cotizar y, si nos contratas, prestar el servicio y facturarlo. Base: tu consentimiento al enviarnos tus datos y la relación precontractual o contractual que inicias.</li>
          <li>Saber qué anuncios y páginas nos traen consultas, y mejorar el sitio. Base: tu consentimiento; puedes retirarlo con el botón de la sección 8.</li>
          <li>Atender reclamos en el Libro de Reclamaciones. Base: obligación legal (Código de Protección y Defensa del Consumidor).</li>
          <li>Enviarte información comercial, solo si nos lo autorizas expresamente.</li>
        </ul>

        <h2 style={H2}>4. Con quién los compartimos</h2>
        <p style={P}>
          No vendemos ni cedemos tus datos. Los tratan, por encargo nuestro y solo para lo descrito aquí, estos proveedores tecnológicos, que procesan datos en servidores fuera del Perú (transferencia internacional):
        </p>
        <ul style={UL}>
          <li><strong>Vercel</strong> (Estados Unidos): aloja este sitio.</li>
          <li><strong>Google</strong>: Google Analytics, para las estadísticas de uso, y Hojas de cálculo de Google, donde guardamos lo que envías en los formularios.</li>
          <li><strong>Meta Platforms</strong>: el Píxel y la API de Conversiones, para medir nuestros anuncios, y WhatsApp, donde continúa la conversación.</li>
          <li><strong>Microsoft</strong>: Clarity, para entender cómo se usa el sitio.</li>
          <li><strong>Metricool</strong> (España): estadísticas de visitas del sitio.</li>
          <li><strong>Hostinger</strong>: nuestro correo electrónico, al que llegan los reclamos y los mensajes que nos envías por correo.</li>
          <li>El proveedor del <strong>asistente de IA</strong> que responde primero en WhatsApp.</li>
        </ul>

        <h2 style={H2}>5. Cómo medimos los anuncios</h2>
        <p style={P}>
          Para saber qué anuncios nos traen contactos, el Píxel de Meta guarda en tu navegador un identificador aleatorio (la cookie «_fbp») que no incluye tu nombre ni tu teléfono. Cuando envías un formulario, mandamos a Meta, por su API de Conversiones, tu nombre y tu teléfono transformados con una función hash (SHA-256): Meta no recibe el dato escrito, solo lo compara con el de sus propios usuarios para saber si llegaste desde un anuncio.
        </p>
        <p style={P}>
          Google Analytics cuenta visitas y recorridos de forma estadística. Microsoft Clarity registra cómo se usa el sitio —desplazamiento, clics y recorrido entre páginas— y enmascara por defecto lo que escribes en los formularios, así que lo que teclees en ellos no queda grabado. Metricool cuenta las visitas: recibe la página que ves, la página desde la que llegaste y el tamaño de la ventana de tu navegador, además de la dirección IP y el tipo de navegador que recibe cualquier servidor. No guarda cookies ni identificadores en tu navegador.
        </p>

        <h2 style={H2}>6. Cuánto tiempo los guardamos</h2>
        <ul style={UL}>
          <li>Consultas y conversaciones comerciales: hasta dos años desde el último contacto, salvo que nos pidas antes su cancelación.</li>
          <li>Clientes: mientras dure el servicio y después, el tiempo que exige la normativa tributaria y contable.</li>
          <li>Reclamos: al menos dos años desde su registro, como exige el reglamento del Libro de Reclamaciones.</li>
          <li>Datos de navegación: según la configuración de conservación de cada herramienta.</li>
        </ul>
        <p style={P}>
          Todo el sitio funciona con conexión cifrada (HTTPS) y el acceso a los datos de los formularios está limitado al equipo de Suggestion.
        </p>

        <h2 style={H2}>7. Tus derechos</h2>
        <p style={P}>
          Puedes pedir acceso a tus datos, su rectificación o cancelación, u oponerte a su tratamiento (derechos ARCO), y revocar tu consentimiento. Escríbenos a{" "}
          <a href={`mailto:${site.email}`} style={A}>{site.email}</a> con el asunto «Datos personales», indicando qué derecho quieres ejercer y adjuntando un documento que acredite tu identidad. Respondemos en un máximo de 20 días hábiles las solicitudes de acceso y de 10 días hábiles las de rectificación, cancelación u oposición. Si no estás conforme con nuestra respuesta, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.
        </p>

        <h2 style={H2}>8. Cookies y cómo pedir que no midamos tu visita</h2>
        <p style={P}>
          Este sitio usa cookies propias y de Google, Meta y Microsoft con fines estadísticos y publicitarios. Si prefieres que no te midamos, pulsa el botón: este navegador dejará de cargar Google Analytics, el Píxel de Meta, Microsoft Clarity y Metricool, y tus formularios no se enviarán a Meta. Es una opción para rechazar la medición en cualquier momento; el sitio funciona igual. También puedes bloquear las cookies desde la configuración de tu navegador.
        </p>
        <NoMedirToggle />

        <h2 style={H2}>9. Menores de edad</h2>
        <p style={P}>
          Este sitio está dirigido a empresas y profesionales. Si quien presenta un reclamo es menor de edad, el Libro de Reclamaciones pide los datos de su padre, su madre o su apoderado.
        </p>

        <h2 style={H2}>10. Cambios a esta política</h2>
        <p style={P}>
          Si cambiamos cómo tratamos tus datos, actualizamos esta página y su fecha. Ver también los <Link href="/terminos" style={A}>Términos y Condiciones</Link> y el <Link href="/libro-de-reclamaciones" style={A}>Libro de Reclamaciones</Link>.
        </p>
      </div>
    </section>
  );
}
