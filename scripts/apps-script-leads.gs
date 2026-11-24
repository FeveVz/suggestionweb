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
 *
 * VENTAS → META (24-nov-2026). Pestaña «Ventas»: el equipo anota cada venta
 * cerrada (fecha, cliente, teléfono, monto, servicio) y el script la manda a
 * https://suggestion.pe/api/venta, que la pasa a Meta como compra (teléfono y
 * correo en hash). Así los informes de Meta muestran qué anuncios trajeron
 * clientes y la campaña aprende de quienes compran. Si el teléfono coincide
 * con una fila de «Contactos», el script completa correo, fbclid y fecha del
 * clic solo.
 * Se instala una vez; al recargar la hoja aparece el menú «Suggestion»:
 *   1. Suggestion → Crear clave de ventas. Copiar la clave que muestra.
 *   2. Vercel → suggestionweb → Settings → Environment Variables: nombre
 *      VENTAS_CLAVE, valor la clave, entorno Production, marcar «Sensitive».
 *      Guardar y volver a desplegar.
 *   3. Suggestion → Enviar ventas a Meta, o «Activar envío diario» (lo hace
 *      solo a las 8 p. m.). Meta solo acepta ventas de los últimos 7 días:
 *      las más antiguas quedan «Fuera de plazo».
 * Permisos nuevos que pide Google: conectarse a un servicio externo
 * (UrlFetchApp) y ejecutarse en segundo plano (envío diario).
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

// ───────────────────────── Ventas → Meta ─────────────────────────

const HOJA_VENTAS = "Ventas";
const URL_VENTAS = "https://suggestion.pe/api/venta";
const COLUMNAS_VENTAS = [
  "Fecha de cierre", "Cliente", "Teléfono (WhatsApp)", "Correo", "Monto (S/)", "Servicio",
  "Origen", "fbclid", "Fecha del clic", "ID", "Enviado a Meta", "Resultado",
];
// Posición (1 = A) de cada columna, para no depender del orden al leer.
const V = {};
COLUMNAS_VENTAS.forEach(function (c, i) { V[c] = i + 1; });

function onOpen() {
  SpreadsheetApp.getUi().createMenu("Suggestion")
    .addItem("Enviar ventas a Meta", "enviarVentas")
    .addItem("Probar envío (código de Events Manager)", "probarVentas")
    .addSeparator()
    .addItem("Activar envío diario (8 p. m.)", "activarEnvioDiario")
    .addItem("Crear clave de ventas", "crearClaveVentas")
    .addToUi();
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  if (!libro.getSheetByName(HOJA_VENTAS)) crearHojaVentas_(libro);
}

/** Genera la clave que comparten esta hoja y la web. Se muestra una sola vez. */
function crearClaveVentas() {
  const ui = SpreadsheetApp.getUi();
  const props = PropertiesService.getScriptProperties();
  if (props.getProperty("VENTAS_CLAVE")) {
    const r = ui.alert("Ya existe una clave", "Si creas otra, la de Vercel deja de servir hasta que pegues la nueva. ¿Crear otra?", ui.ButtonSet.YES_NO);
    if (r !== ui.Button.YES) return;
  }
  const clave = (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, "");
  props.setProperty("VENTAS_CLAVE", clave);
  ui.alert("Clave de ventas",
    "Pégala en Vercel como VENTAS_CLAVE (Production, Sensitive) y vuelve a desplegar:\n\n" + clave +
    "\n\nNo la compartas por chat ni correo.", ui.ButtonSet.OK);
}

function activarEnvioDiario() {
  ScriptApp.getProjectTriggers().forEach(function (tr) {
    if (tr.getHandlerFunction() === "enviarVentasAuto_") ScriptApp.deleteTrigger(tr);
  });
  ScriptApp.newTrigger("enviarVentasAuto_").timeBased().everyDays(1).atHour(20).inTimezone("America/Lima").create();
  SpreadsheetApp.getUi().alert("Listo: cada día a las 8 p. m. se envían las ventas nuevas.");
}

function enviarVentas() {
  SpreadsheetApp.getUi().alert(enviarVentas_(""));
}

function probarVentas() {
  const ui = SpreadsheetApp.getUi();
  const r = ui.prompt("Probar envío", "Código de «Probar eventos» de Events Manager (empieza con TEST). Las ventas se verán ahí, no contarán en los informes y no quedarán marcadas como enviadas.", ui.ButtonSet.OK_CANCEL);
  if (r.getSelectedButton() !== ui.Button.OK) return;
  const codigo = r.getResponseText().trim();
  if (!/^TEST\w+$/.test(codigo)) { ui.alert("El código debe empezar con TEST."); return; }
  ui.alert(enviarVentas_(codigo));
}

function enviarVentasAuto_() {
  enviarVentas_("");
}

/** Manda las filas con fecha, monto y teléfono o correo que aún no se enviaron. */
function enviarVentas_(prueba) {
  const clave = PropertiesService.getScriptProperties().getProperty("VENTAS_CLAVE");
  if (!clave) return "Primero: Suggestion → Crear clave de ventas, y pégala en Vercel.";
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = libro.getSheetByName(HOJA_VENTAS) || crearHojaVentas_(libro);
  const n = hoja.getLastRow() - 1;
  if (n < 1) return "La pestaña «Ventas» está vacía.";
  const filas = hoja.getRange(2, 1, n, COLUMNAS_VENTAS.length).getValues();
  const contactos = indiceContactos_(libro);

  const lote = [];
  filas.forEach(function (f, i) {
    const get = function (c) { return f[V[c] - 1]; };
    if (get("Enviado a Meta") || !get("Fecha de cierre") || !get("Monto (S/)")) return;
    const fila = i + 2;
    const tel = String(get("Teléfono (WhatsApp)") || "");
    // Completa con lo que la web guardó de ese mismo teléfono.
    const c = contactos[ultimos9_(tel)];
    if (c) {
      if (!get("Correo") && c.correo) hoja.getRange(fila, V["Correo"]).setValue(c.correo);
      if (!get("fbclid") && c.fbclid) hoja.getRange(fila, V["fbclid"]).setValue(c.fbclid);
      if (!get("Fecha del clic") && c.fbclid && c.fecha) hoja.getRange(fila, V["Fecha del clic"]).setValue(c.fecha);
      if (!get("Origen")) hoja.getRange(fila, V["Origen"]).setValue("Formulario web");
    }
    let id = String(get("ID") || "");
    if (!id) {
      id = "V" + Utilities.getUuid().replace(/-/g, "").slice(0, 16);
      hoja.getRange(fila, V["ID"]).setValue(id);
    }
    const fecha = get("Fecha de cierre");
    const clic = get("Fecha del clic") || (c && c.fbclid ? c.fecha : "");
    lote.push({
      fila: fila,
      venta: {
        id: id,
        fecha: fecha instanceof Date ? Utilities.formatDate(fecha, "America/Lima", "yyyy-MM-dd") : String(fecha),
        nombre: String(get("Cliente") || ""),
        telefono: tel,
        correo: String(get("Correo") || (c && c.correo) || ""),
        monto: Number(String(get("Monto (S/)")).replace(/[^\d.]/g, "")),
        servicio: String(get("Servicio") || ""),
        fbclid: String(get("fbclid") || (c && c.fbclid) || ""),
        clic: clic instanceof Date ? clic.toISOString() : String(clic || ""),
      },
    });
  });
  if (!lote.length) return "No hay ventas nuevas por enviar.";

  let enviadas = 0;
  let observadas = 0;
  for (let k = 0; k < lote.length; k += 50) {
    const parte = lote.slice(k, k + 50);
    let r;
    try {
      const resp = UrlFetchApp.fetch(URL_VENTAS, {
        method: "post",
        contentType: "application/json",
        headers: { Authorization: "Bearer " + clave },
        payload: JSON.stringify({ ventas: parte.map(function (p) { return p.venta; }), prueba: prueba || undefined }),
        muteHttpExceptions: true,
      });
      try { r = JSON.parse(resp.getContentText() || "{}"); } catch (e) { r = {}; }
      if (resp.getResponseCode() === 503) r = { ok: false, error: "la web aún no tiene VENTAS_CLAVE" };
      if (resp.getResponseCode() === 401) r = { ok: false, error: "la clave no coincide con la de Vercel" };
    } catch (err) {
      r = { ok: false, error: String(err) };
    }
    const motivo = {};
    (r.rechazadas || []).forEach(function (x) { motivo[x.id] = x.motivo; });
    const ahora = new Date();
    parte.forEach(function (p) {
      const m = motivo[p.venta.id];
      if (m) {
        hoja.getRange(p.fila, V["Resultado"]).setValue(m === "fuera de plazo" ? "Fuera de plazo (más de 7 días)" : "Revisar: " + m);
        if (m === "fuera de plazo" && !prueba) hoja.getRange(p.fila, V["Enviado a Meta"]).setValue("No");
        observadas++;
      } else if (r.ok) {
        hoja.getRange(p.fila, V["Resultado"]).setValue(prueba ? "Prueba OK (" + prueba + ")" : "Recibida por Meta");
        if (!prueba) hoja.getRange(p.fila, V["Enviado a Meta"]).setValue(ahora);
        enviadas++;
      } else {
        hoja.getRange(p.fila, V["Resultado"]).setValue("Error: " + (r.error || "sin respuesta"));
        observadas++;
      }
    });
  }
  return enviadas + " venta(s) " + (prueba ? "de prueba " : "") + "enviadas a Meta" +
    (observadas ? "; " + observadas + " con observación (ver columna Resultado)." : ".");
}

/** Teléfono (últimos 9 dígitos) → correo, fbclid y fecha del contacto en «Contactos». */
function indiceContactos_(libro) {
  const h = libro.getSheetByName(HOJA);
  const idx = {};
  if (!h || h.getLastRow() < 2) return idx;
  const col = function (nombre) { return COLUMNAS.indexOf(nombre); };
  h.getRange(2, 1, h.getLastRow() - 1, COLUMNAS.length).getValues().forEach(function (f) {
    const k = ultimos9_(f[col("Teléfono")]);
    if (!k) return;
    const previo = idx[k] || {};
    idx[k] = {
      correo: f[col("Correo")] || previo.correo || "",
      fbclid: f[col("fbclid")] || previo.fbclid || "",
      fecha: f[col("fbclid")] ? f[col("Fecha (Lima)")] : previo.fecha || "",
    };
  });
  return idx;
}

function ultimos9_(tel) {
  const d = String(tel || "").replace(/\D/g, "");
  return d.length >= 9 ? d.slice(-9) : "";
}

function crearHojaVentas_(libro) {
  const h = libro.insertSheet(HOJA_VENTAS);
  h.appendRow(COLUMNAS_VENTAS);
  h.setFrozenRows(1);
  h.getRange(1, 1, 1, COLUMNAS_VENTAS.length).setFontWeight("bold");
  h.getRange("A:A").setNumberFormat("dd/mm/yyyy");
  h.getRange("C:C").setNumberFormat("@");
  h.getRange("E:E").setNumberFormat("#,##0.00");
  h.getRange("I:I").setNumberFormat("dd/mm/yyyy hh:mm");
  h.getRange("K:K").setNumberFormat("dd/mm/yyyy hh:mm");
  h.getRange("A2:A").setDataValidation(SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build());
  h.getRange("G2:G").setDataValidation(SpreadsheetApp.newDataValidation()
    .requireValueInList(["Formulario web", "WhatsApp directo", "Anuncio de Meta", "Google", "Referido", "Otro"], true).build());
  h.getRange(1, V["Monto (S/)"]).setNote("Monto de la venta en soles, sin IGV. Si es mensual, el primer mes.");
  h.getRange(1, V["Teléfono (WhatsApp)"]).setNote("Con código de país si es extranjero. Meta lo usa (en hash) para reconocer a la persona.");
  h.getRange(1, V["ID"]).setNote("Lo llena el script. No lo cambies: evita que Meta cuente dos veces la misma venta.");
  return h;
}
