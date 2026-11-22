import { EID_KEY, esExternalId } from "@/lib/meta-match";

/**
 * IDs de medición — ÚNICO lugar donde pegarlos.
 *
 * GA_ID: tiene que ser un ID que Google SIRVA como etiqueta, no cualquier ID que
 * aparezca en el panel. Es la distinción que nos costó un mes de datos:
 *
 *   - ID de etiqueta ("GT-…" o el "G-…" dueño de la etiqueta) → googletagmanager
 *     lo sirve (200) y enruta a todos sus destinos. ESTE es el que va aquí.
 *   - ID de DESTINO (un "G-…" que solo figura como destino de otra etiqueta)
 *     → `gtag/js?id=…` devuelve **404** y la librería nunca se ejecuta.
 *
 * Hasta 2026-08-25 aquí había `G-RVE3CLTNW3`, que es el ID de medición del flujo
 * pero solo existe como DESTINO de la etiqueta `GT-NNQW6GPS`. Resultado: el script
 * daba 404, `window.google_tag_data` quedaba undefined y no salía ni un `/g/collect`.
 * Meta y Clarity seguían bien, así que no se notó.
 *
 * Cómo comprobarlo antes de dar por bueno un ID (30 segundos):
 *   curl -o /dev/null -w "%{http_code}" "https://www.googletagmanager.com/gtag/js?id=EL-ID"
 *   200 → sirve. 404 → es un destino, no vale.
 *   OJO: un ID inventado también devuelve 200 (tag genérico). Para confirmar que
 *   enruta a tu propiedad, busca tu ID de medición dentro del JS que devuelve.
 *
 * Y en el navegador: `typeof window.gtag` NO prueba nada (es el shim de
 * Analytics.tsx, existe siempre). Lo concluyente es `window.google_tag_data`
 * definido y una petición real a `/g/collect` con tu `tid=`.
 *
 * META_PIXEL_ID: Events Manager → Conectar datos → Web (número de ~15 dígitos).
 * Con los IDs vacíos no se inyecta ningún script (cero peso).
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

/**
 * Google Ads (opcional). GADS_ID = "AW-XXXXXXXXXX"; GADS_LEAD_LABEL = etiqueta
 * de la acción de conversión "Lead" (la parte tras la barra en send_to).
 * Con ambos vacíos no se dispara ninguna conversión de Ads (no-op), igual que
 * GA/Pixel. Al configurarlos en Vercel, cada generate_lead cuenta como conversión
 * de Ads y las campañas de Search dejan de correr a ciegas.
 */
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";
export const GADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || "";

/**
 * Microsoft Clarity: grabaciones de sesión y mapas de calor. Con el tráfico
 * actual (decenas de visitas al mes) las estadísticas no dicen nada, pero ver
 * sesiones reales sí: enseña dónde se atasca quien llega buscando "imprenta en
 * Ica". Enmascara el contenido de los formularios por defecto — no tocar eso.
 * Vacío = no se inyecta nada. El ID vive en Vercel (NEXT_PUBLIC_CLARITY_ID, solo
 * Production) y no escrito aquí, para poder apagarlo sin tocar el código
 * (auditoría MED-14, tarea 3.12).
 */
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

/**
 * Tráfico interno. Abrir cualquier página con `?interno=1` marca ese
 * navegador y desde entonces no carga GA4, el Píxel ni Clarity; `?interno=0`
 * lo desmarca. Se hace dentro de los propios scripts de arranque, antes de
 * que midan nada.
 *
 * Por qué: en los 28 días al 15-oct-2026, cerca de un tercio de los PageView
 * de Meta llegaron en cuatro ráfagas de 14 a 46 páginas en una hora: con toda
 * probabilidad, revisiones nuestras del sitio. Inflaban las visitas, hundían la tasa de
 * contacto que sirve de línea base para la pauta y metían al equipo en los
 * públicos de retargeting.
 */
export const INTERNO_KEY = "sg_interno";
/**
 * «No medir mi visita» (botón de /privacidad, decisión 9 de la auditoría,
 * MED-08): clave aparte de sg_interno porque la decide el visitante, no el
 * equipo. Mientras valga "1", ese navegador no carga GA4, el Píxel ni Clarity
 * ni manda copias a la API de Conversiones. No equivale a pedir consentimiento
 * previo: es la opción de rechazar la medición en cualquier momento.
 */
export const OPTOUT_KEY = "sg_optout";
/**
 * Solo se mide en el dominio real. Las vistas previas de Vercel (*.vercel.app)
 * y localhost no cargan GA4, Píxel ni Clarity ni mandan copias a la API de
 * Conversiones (auditoría MED-15, tarea 3.12).
 */
export const DOMINIOS_MEDIBLES = ["suggestion.pe", "www.suggestion.pe"];
const HOST_AJENO_JS = `(${JSON.stringify(DOMINIOS_MEDIBLES)}.indexOf(location.hostname)<0)`;

export const ES_INTERNO_JS = `(function(){try{var q=new URLSearchParams(location.search).get('interno');if(q==='1')localStorage.setItem('${INTERNO_KEY}','1');if(q==='0')localStorage.removeItem('${INTERNO_KEY}');return localStorage.getItem('${INTERNO_KEY}')==='1'||localStorage.getItem('${OPTOUT_KEY}')==='1'}catch(e){return false}})()`;
/**
 * Navegadores automatizados (robots que ejecutan JavaScript). Chrome sin
 * pantalla, Puppeteer, Playwright y Selenium marcan `navigator.webdriver`, y
 * con eso no cargan GA4, el Píxel ni Clarity ni mandan copias al servidor.
 * Es el mismo filtro que usa Plausible.
 *
 * Por qué (22-nov-2026): en los 28 días al 21-nov, GA4 contó 60 «usuarios» de
 * Huaral (2 sesiones con interacción, 3 s de media) y 23 de Ashburn, un centro
 * de datos de Amazon (0 con interacción): casi un tercio de los usuarios. En
 * Meta se vieron como ráfagas de 38 y 67 PageView en una o dos horas.
 *
 * Solo atrapa a los que se declaran. Los que se disfrazan siguen entrando; para
 * esos está la comparación «Sin robots» guardada en GA4.
 * Efecto secundario: Lighthouse y PageSpeed también se declaran, así que miden
 * la página sin GA4 ni el Píxel. Como ambos cargan tarde (DIFERIR_JS en
 * Analytics.tsx), el LCP no cambia.
 */
const AUTOMATIZADO_JS = `(navigator.webdriver===true)`;
/** Arranque de las etiquetas: no medir si el navegador es interno o automatizado, o si el dominio no es el real. */
export const NO_MEDIR_JS = `(${ES_INTERNO_JS}||${AUTOMATIZADO_JS}||${HOST_AJENO_JS})`;

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

/** Evento de conversión con nombre GA4; se mapea también al Pixel.
 *  eventId (opcional): deduplica el evento del Pixel con el de la CAPI (servidor).
 *  sinGa: el evento va a GA4 por el servidor (ver GA_MP), así que no se encola en gtag. */
export function track(
  event: "generate_lead" | "contact" | "view_item",
  params?: Record<string, unknown>,
  eventId?: string,
  opciones?: { sinGa?: boolean },
) {
  try {
    if (!opciones?.sinGa) window.gtag?.("event", event, params);
    // Conversión de Google Ads (solo el lead real, y solo si está configurado).
    if (event === "generate_lead" && GADS_ID && GADS_LEAD_LABEL) {
      window.gtag?.("event", "conversion", { send_to: `${GADS_ID}/${GADS_LEAD_LABEL}` });
    }
    if (window.fbq) {
      const meta = event === "generate_lead" ? "Lead" : event === "contact" ? "Contact" : "ViewContent";
      if (eventId) window.fbq("track", meta, params, { eventID: eventId });
      else window.fbq("track", meta, params);
    }
  } catch {
    /* la medición nunca debe romper la UX */
  }
}

/** event_id único para deduplicar el mismo evento entre Pixel (navegador) y CAPI (servidor). */
export function newEventId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    /* fallback abajo */
  }
  return `ev_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Atribución de campaña. Guardamos los parámetros de la URL de ENTRADA en la
 * primera visita de la sesión (first-touch): así el lead conserva de qué anuncio
 * vino aunque después navegue y la URL pierda los parámetros. Sin esto, el CRM
 * no sabe qué campaña generó cada lead y no se puede medir el retorno por canal.
 */
const ATTRIBUTION_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "fbclid", "ttclid", "msclkid",
] as const;
const ATTR_STORE = "sg_attribution";

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(ATTR_STORE)) return; // first-touch: no se pisa
    const sp = new URLSearchParams(window.location.search);
    const record: Record<string, string> = {};
    for (const k of ATTRIBUTION_KEYS) {
      const v = sp.get(k);
      if (v) record[k] = v.slice(0, 200);
    }
    // Momento del clic en el anuncio: Meta lo pide dentro del fbc (ver leadDedup).
    if (record.fbclid) record.fbclid_ts = String(Date.now());
    record.landing_page = window.location.pathname;
    record.referrer = (document.referrer || "").slice(0, 300);
    sessionStorage.setItem(ATTR_STORE, JSON.stringify(record));
  } catch {
    /* sessionStorage puede fallar en modo incógnito/bloqueado; la medición nunca rompe la UX */
  }
}

/** Lee la atribución guardada para adjuntarla al lead. {} si no hay o si falla. */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTR_STORE);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/** El identificador anónimo de este navegador (lo crea el arranque del Píxel en Analytics.tsx). */
export function externalId(): string {
  try {
    const v = localStorage.getItem(EID_KEY);
    return esExternalId(v) ? v : "";
  } catch {
    return "";
  }
}

/**
 * Datos de deduplicación/enriquecimiento del Lead; se hace spread al body del POST a /api/lead.
 *
 * fbc: lo normal es que lo deje el Píxel en la cookie `_fbc` al llegar desde
 * un anuncio. Si el Píxel cargó tarde o lo bloquearon, se reconstruye con el
 * fbclid guardado en la atribución, en el formato de Meta
 * `fb.1.<ms del clic>.<fbclid>`. Sin fbc, Meta no puede atribuir el lead al
 * anuncio que lo trajo.
 */
export function leadDedup(): { event_id: string; event_source_url: string; fbp: string; fbc: string; external_id: string } {
  const cookie = (name: string) => {
    if (typeof document === "undefined") return "";
    const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  };
  const attr = getAttribution();
  const fbc = cookie("_fbc") || (attr.fbclid ? `fb.1.${attr.fbclid_ts || Date.now()}.${attr.fbclid}` : "");
  return {
    event_id: newEventId(),
    event_source_url: typeof location !== "undefined" ? location.href : "",
    fbp: cookie("_fbp"),
    fbc,
    external_id: externalId(),
  };
}

/**
 * ¿Navegador marcado como interno (`?interno=1`)? Entonces no se mide nada.
 * Solo el equipo: AuditForm lo usa además para guardar sus pruebas marcadas,
 * así que el «No medir mi visita» de un visitante va aparte (pidioNoMedir).
 */
export function esInterno(): boolean {
  try {
    return localStorage.getItem(INTERNO_KEY) === "1";
  } catch {
    return false;
  }
}

/** ¿El visitante pulsó «No medir mi visita» en /privacidad? */
export function pidioNoMedir(): boolean {
  try {
    return localStorage.getItem(OPTOUT_KEY) === "1";
  } catch {
    return false;
  }
}

/** ¿No hay que medir esta visita? Navegador interno o automatizado, o dominio que no es el real. */
export function noMedir(): boolean {
  if (typeof window === "undefined") return true;
  return (
    esInterno() ||
    pidioNoMedir() ||
    navigator.webdriver === true ||
    !DOMINIOS_MEDIBLES.includes(window.location.hostname)
  );
}

/**
 * Copia de GA4 desde el servidor (Measurement Protocol).
 *
 * El problema (22-nov-2026): del 15 al 21-nov GA4 contó 7 contactos y Meta 12.
 * Meta recibe una copia desde nuestro servidor; GA4 no. GA4 pierde el clic
 * cuando su librería no llegó a correr: un bloqueador de anuncios, o un clic a
 * WhatsApp antes de que cargue (carga tarde a propósito, ver DIFERIR_JS en
 * Analytics.tsx) y el celular salta a la app.
 *
 * La solución: si la librería NO corrió al momento del clic, el contacto no se
 * deja en la cola de gtag y viaja por /api/evento, que lo manda a GA4. Si sí
 * corrió, va por gtag como siempre. Así nunca se cuenta dos veces: GA4, a
 * diferencia de Meta, no une eventos repetidos.
 *
 * Se enciende solo: cuando GA4_MP_SECRET existe en Vercel, next.config.ts pone
 * NEXT_PUBLIC_GA_MP = "1" al compilar (sin exponer la clave). Mientras no
 * exista, todo funciona como antes. La clave la crea el dueño de la cuenta:
 * GA4 → Administrar → Flujos de datos → el flujo web → Secretos de la API de
 * Measurement Protocol → Crear. Se pega en Vercel como GA4_MP_SECRET
 * (Production) y hay que volver a publicar.
 */
export const GA_MP = process.env.NEXT_PUBLIC_GA_MP === "1";
/** ID de medición del flujo web (va en la cookie _ga_<sufijo> y en la petición al Measurement Protocol). */
export const GA_MEDICION = "G-RVE3CLTNW3";

declare global {
  interface Window {
    google_tag_data?: unknown;
  }
}

/** ¿Ya corrió gtag.js? `window.gtag` no prueba nada: es la cola que crea Analytics.tsx. */
export function gaCargado(): boolean {
  try {
    return typeof window !== "undefined" && window.google_tag_data !== undefined;
  } catch {
    return false;
  }
}

/**
 * client_id y session_id que GA4 dejó en sus cookies en esta visita o en una
 * anterior. Con ellos, GA4 suma el contacto a la sesión y a la fuente de esa
 * persona. Sin cookies (bloqueador), el servidor inventa un client_id y el
 * contacto cuenta igual, pero con fuente «(not set)».
 */
export function gaIds(): { client_id: string; session_id: string } {
  try {
    const c = document.cookie;
    const ga = c.match(/(?:^|; )_ga=GA\d\.\d\.(\d+\.\d+)/);
    // _ga_<sufijo>: formato antiguo GS1.1.<session_id>.… y nuevo GS2.1.s<session_id>$o…
    const gs = c.match(new RegExp(`(?:^|; )_ga_${GA_MEDICION.slice(2)}=GS\\d\\.\\d\\.s?(\\d+)`));
    return { client_id: ga ? ga[1] : "", session_id: gs ? gs[1] : "" };
  } catch {
    return { client_id: "", session_id: "" };
  }
}

/** ¿Este contacto tiene que ir a GA4 por el servidor? Ver GA_MP. */
export function gaPorServidor(): boolean {
  return GA_MP && !noMedir() && !gaCargado();
}

/**
 * Copia server-side (API de Conversiones) del evento que el Píxel acaba de
 * mandar con `eventId`: Meta une los dos por ese id. Va por sendBeacon para
 * que sobreviva aunque la página se vaya a WhatsApp en ese mismo instante.
 * `datos`: method/origen y, solo en el Lead del formulario, nombre y teléfono
 * (el servidor los hashea antes de enviarlos a Meta).
 * `ga`: solo en un contacto que tiene que llegar a GA4 por el servidor (ver
 * GA_MP); viaja en la misma petición con las cookies de GA4.
 */
export function metaServidor(
  evento: "Contact" | "Lead",
  eventId: string,
  datos?: Record<string, string>,
  ga?: Record<string, string>,
): void {
  if ((!META_PIXEL_ID && !ga) || noMedir()) return;
  try {
    const base = leadDedup();
    const body = JSON.stringify({
      ...base,
      ...datos,
      event_name: evento,
      event_id: eventId,
      ...(ga ? { ga: { ...gaIds(), ...ga } } : {}),
    });
    const blob = new Blob([body], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/evento", blob)) {
      fetch("/api/evento", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
    }
  } catch {
    /* la medición nunca rompe la UX */
  }
}
