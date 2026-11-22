import { randomInt } from "node:crypto";

/**
 * Envío a GA4 desde el servidor (Measurement Protocol). Solo lo usa
 * /api/evento para el contacto que GA4 habría perdido en el navegador: el
 * porqué y la regla para no contar dos veces están en GA_MP (lib/tracking.ts).
 *
 * Necesita GA4_MP_SECRET en Vercel (Production). Sin ella no hace nada.
 * GA4_MEASUREMENT_ID es opcional: por defecto, el ID del flujo web.
 *
 * Cómo comprobarlo sin ensuciar los datos: GA4 → Administrar → DebugView no
 * sirve aquí (el evento no lleva debug_mode). Lo práctico es Tiempo real →
 * «Recuento de eventos por nombre» → contact, mientras alguien hace clic en
 * WhatsApp con un bloqueador de anuncios encendido.
 */
const MEDICION = process.env.GA4_MEASUREMENT_ID || "G-RVE3CLTNW3";
const ENDPOINT = "https://www.google-analytics.com/mp/collect";

export type DatosGa4 = {
  clientId: string;
  sessionId: string;
  params: Record<string, string>;
};

/** client_id con el formato de la cookie _ga: «número aleatorio.segundos». */
function clientIdNuevo(): string {
  return `${randomInt(1_000_000_000, 2_147_483_647)}.${Math.floor(Date.now() / 1000)}`;
}

/** Manda un evento a GA4. Devuelve true si Google lo recibió (el Measurement Protocol no valida el contenido). */
export async function enviarGa4(evento: "contact", d: DatosGa4): Promise<boolean> {
  const secreto = process.env.GA4_MP_SECRET;
  if (!secreto) return false;
  const clientId = /^\d{1,20}\.\d{1,12}$/.test(d.clientId) ? d.clientId : clientIdNuevo();
  const params: Record<string, string | number> = {
    ...d.params,
    // Sin tiempo de interacción, GA4 no asocia el evento a una sesión activa.
    engagement_time_msec: 1,
    // Para distinguir estas copias si algún día se registra como dimensión.
    via: "servidor",
  };
  if (/^\d{1,20}$/.test(d.sessionId)) params.session_id = d.sessionId;
  try {
    const r = await fetch(
      `${ENDPOINT}?measurement_id=${encodeURIComponent(MEDICION)}&api_secret=${encodeURIComponent(secreto)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: clientId, events: [{ name: evento, params }] }),
        signal: AbortSignal.timeout(4000),
      },
    );
    return r.ok;
  } catch {
    return false;
  }
}
