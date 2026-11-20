/**
 * Contactos de suggestion.pe → esta Hoja de Google (tarea 2.01 del plan,
 * decisión 5 del dueño, 20-nov-2026).
 *
 * La web guarda aquí cada formulario ANTES de abrir WhatsApp: así ningún
 * contacto se pierde aunque la persona no llegue a enviar el mensaje, y queda
 * escrito de dónde vino (página, utm, gclid, fbclid). Quien atiende WhatsApp
 * revisa cada mañana las filas en «Nuevo» que no escribieron.
 *
 * CÓMO SE INSTALA (lo hace el dueño, unos 10 minutos):
 *   1. Crear una Hoja de Google nueva, por ejemplo «Contactos web Suggestion».
 *      Archivo → Configuración → Zona horaria: (GMT-05:00) Lima.
 *   2. Extensiones → Apps Script. Borrar lo que haya y pegar TODO este archivo.
 *      Guardar (ícono de disquete).
 *   3. Implementar → Nueva implementación → tipo «Aplicación web».
 *      Ejecutar como: Yo. Quién tiene acceso: Cualquier usuario.
 *      Implementar → Autorizar acceso con tu cuenta de Google.
 *   4. Copiar la «URL de la aplicación web» (termina en /exec).
 *   5. Vercel → proyecto suggestionweb → Settings → Environment Variables:
 *      nombre LEADS_SHEET_URL, valor la URL del paso 4, entorno Production.
 *      Guardar y volver a desplegar (Deployments → ⋯ → Redeploy).
 *
 * La URL solo la conoce el servidor de la web (nunca llega al navegador). El
 * servidor ya filtra bots (campo trampa) y envíos repetidos (5 por IP cada
 * 10 minutos) antes de llamar aquí.
 *
 * Si se cambia este código: Implementar → Administrar implementaciones →
 * editar (lápiz) → Versión: «Nueva versión». Así la URL no cambia.
 */

const HOJA = "Contactos";
const COLUMNAS = [
  "Fecha (Lima)", "Tipo", "Nombre", "Teléfono", "Correo", "Negocio", "Mensaje",
  "Página", "utm_source", "utm_medium", "utm_campaign", "utm_content",
  "gclid", "fbclid", "Página de entrada", "Referencia", "Datos del formulario",
  "Estado", "Notas",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (!d.nombre || !(d.telefono || d.email)) return json_({ ok: false, error: "faltan datos" });

    const libro = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = libro.getSheetByName(HOJA) || crearHoja_(libro);
    const a = d.attribution || {};
    const fila = [
      new Date(),
      d.tipo || "",
      d.nombre || "",
      d.telefono || "",
      d.email || "",
      d.negocio || "",
      d.mensaje || "",
      d.pagina || "",
      a.utm_source || "",
      a.utm_medium || "",
      a.utm_campaign || "",
      a.utm_content || "",
      a.gclid || "",
      a.fbclid || "",
      a.landing_page || "",
      a.referrer || "",
      d.extra ? JSON.stringify(d.extra) : "",
      "Nuevo",
      "",
    ].map(limpiar_);
    hoja.appendRow(fila);
    return json_({ ok: true, fila: hoja.getLastRow() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Texto acotado y sin fórmulas inyectadas (=, +, -, @ al inicio se guardan como texto). */
function limpiar_(v) {
  if (typeof v !== "string") return v;
  const t = v.slice(0, 3000);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

function crearHoja_(libro) {
  const h = libro.insertSheet(HOJA);
  h.appendRow(COLUMNAS);
  h.setFrozenRows(1);
  h.getRange("A:A").setNumberFormat("dd/mm/yyyy hh:mm");
  h.getRange(1, 1, 1, COLUMNAS.length).setFontWeight("bold");
  return h;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
