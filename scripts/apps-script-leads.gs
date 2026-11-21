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
 *
 * LIBRO DE RECLAMACIONES (tarea 2.08, auditoría MED-04). Mismo script y misma
 * URL: cuando llega tipo «reclamo», lo guarda en la pestaña «Reclamaciones»
 * con número correlativo por año (000001-2026), calcula la fecha límite de
 * respuesta (15 días hábiles) y envía la constancia al correo del consumidor
 * con copia a COPIA_RECLAMOS. La web solo lo llama cuando en Vercel existe
 * NEXT_PUBLIC_RECLAMOS_ACTIVO=1, y eso se activa DESPUÉS de que un abogado
 * valide el texto de la constancia y el domicilio del proveedor (decisión 10).
 * Al pegar esta versión, Google pedirá un permiso nuevo: «Enviar correo en tu
 * nombre» (MailApp). OJO: la constancia sale desde la cuenta de Google que
 * implementa el script; si esa cuenta es personal, el consumidor verá esa
 * dirección como remitente (responder va a COPIA_RECLAMOS). Conviene
 * implementarlo desde una cuenta de la empresa.
 */

const HOJA_RECLAMOS = "Reclamaciones";
const COPIA_RECLAMOS = "hola@suggestion.pe";
const PROVEEDOR = "Agencia de Marketing Suggestion S.A.C. · RUC 20615266753 · Ica, Perú";
const COLUMNAS_RECLAMOS = [
  "Número", "Fecha (Lima)", "Tipo", "Nombre", "DNI / CE", "Domicilio", "Teléfono", "Correo",
  "Padre, madre o apoderado", "DNI / CE del apoderado", "Producto o servicio", "Descripción",
  "Monto reclamado", "Detalle", "Pedido", "Responder a más tardar", "Estado", "Respuesta", "Fecha de respuesta",
];

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
    if (d.tipo === "reclamo") return json_(registrarReclamo_(d));
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

/**
 * Guarda el reclamo con su correlativo y envía la constancia. Corre dentro del
 * LockService de doPost, así dos reclamos simultáneos no reciben el mismo número.
 */
function registrarReclamo_(d) {
  const x = d.extra || {};
  const faltan = ["nombre", "email", "telefono"].filter(function (k) { return !d[k]; })
    .concat(["documento", "direccion", "bien", "clase", "pedido"].filter(function (k) { return !x[k]; }));
  if (!d.mensaje) faltan.push("detalle");
  if (faltan.length) return { ok: false, error: "faltan datos: " + faltan.join(", ") };

  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = libro.getSheetByName(HOJA_RECLAMOS) || crearHojaReclamos_(libro);
  const ahora = new Date();
  const anio = Utilities.formatDate(ahora, "America/Lima", "yyyy");
  const numeros = hoja.getLastRow() > 1 ? hoja.getRange(2, 1, hoja.getLastRow() - 1, 1).getValues() : [];
  const delAnio = numeros.filter(function (r) { return String(r[0]).slice(-4) === anio; }).length;
  const numero = ("00000" + (delAnio + 1)).slice(-6) + "-" + anio;
  const limite = sumarDiasHabiles_(ahora, 15);
  const fecha = Utilities.formatDate(ahora, "America/Lima", "dd/MM/yyyy HH:mm");
  const limiteTxt = Utilities.formatDate(limite, "America/Lima", "dd/MM/yyyy");

  hoja.appendRow([
    numero, ahora, x.clase, d.nombre, x.documento, x.direccion, d.telefono, d.email,
    x.apoderado || "", x.apoderadoDoc || "", x.tipoBien || "", x.bien, x.monto || "",
    d.mensaje, x.pedido, limite, "Recibido", "", "",
  ].map(limpiar_));

  const texto = [
    "HOJA DE RECLAMACIÓN N.º " + numero,
    "Libro de Reclamaciones virtual",
    "Fecha: " + fecha + " (hora de Lima)",
    "Proveedor: " + PROVEEDOR,
    "",
    "1. Consumidor reclamante",
    "Nombre: " + d.nombre,
    "DNI / CE: " + x.documento,
    "Domicilio: " + x.direccion,
    "Teléfono: " + d.telefono,
    "Correo: " + d.email,
    x.apoderado ? "Menor de edad. Padre, madre o apoderado: " + x.apoderado + " · DNI / CE " + x.apoderadoDoc : null,
    "",
    "2. Bien contratado",
    (x.tipoBien || "Servicio") + ": " + x.bien,
    x.monto ? "Monto reclamado: " + x.monto : null,
    "",
    "3. Detalle de la reclamación y pedido",
    "Tipo: " + x.clase,
    "Detalle: " + d.mensaje,
    "Pedido: " + x.pedido,
    "",
    "Responderemos a más tardar el " + limiteTxt + ".",
    "Reclamo: disconformidad relacionada a los productos o servicios.",
    "Queja: disconformidad no relacionada a los productos o servicios, o malestar o descontento respecto a la atención al público.",
    "La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el Indecopi.",
    "El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles improrrogables.",
  ].filter(function (l) { return l !== null; }).join("\n");

  MailApp.sendEmail({
    to: d.email,
    cc: COPIA_RECLAMOS,
    replyTo: COPIA_RECLAMOS,
    name: "Suggestion · Libro de Reclamaciones",
    subject: "Constancia de tu " + String(x.clase).toLowerCase() + " N.º " + numero,
    body: texto,
  });
  return { ok: true, numero: numero, limite: limiteTxt };
}

/** Suma días hábiles (lunes a viernes). Los feriados no se descuentan: el plazo real puede ser algo mayor. */
function sumarDiasHabiles_(desde, dias) {
  const f = new Date(desde.getTime());
  let n = 0;
  while (n < dias) {
    f.setDate(f.getDate() + 1);
    const dia = f.getDay();
    if (dia !== 0 && dia !== 6) n++;
  }
  return f;
}

function crearHojaReclamos_(libro) {
  const h = libro.insertSheet(HOJA_RECLAMOS);
  h.appendRow(COLUMNAS_RECLAMOS);
  h.setFrozenRows(1);
  h.getRange("A:A").setNumberFormat("@");
  h.getRange("B:B").setNumberFormat("dd/mm/yyyy hh:mm");
  h.getRange("P:P").setNumberFormat("dd/mm/yyyy");
  h.getRange(1, 1, 1, COLUMNAS_RECLAMOS.length).setFontWeight("bold");
  return h;
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
