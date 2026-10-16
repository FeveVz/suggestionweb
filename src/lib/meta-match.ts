/**
 * Normalización de los datos con los que Meta empareja un evento con una
 * persona (la "calidad de coincidencias", EMQ). Vive aparte porque la usan el
 * navegador (tracking.ts) y el servidor (meta-capi.ts): si cada lado
 * normalizara a su manera, el mismo dato daría dos hashes distintos y Meta no
 * los uniría.
 */

/** Clave en localStorage del identificador anónimo del navegador. */
export const EID_KEY = "sg_eid";

/**
 * El external_id es un valor aleatorio de 64 caracteres hexadecimales, la
 * misma forma que un SHA-256. Así el Píxel lo reconoce como ya hasheado y lo
 * envía tal cual, y el servidor puede mandar exactamente el mismo valor sin
 * hashearlo otra vez. No contiene nada de la persona.
 */
export const esExternalId = (v: unknown): v is string => typeof v === "string" && /^[a-f0-9]{64}$/.test(v);

/**
 * Teléfono como lo pide Meta: solo dígitos y con el código de país delante.
 * El formulario acepta lo que la gente escribe ("987 654 321", "+51 987…",
 * "056 123456"). Sin el 51, el hash no coincide con ninguna cuenta.
 */
export function telefonoMeta(v: string): string {
  let d = v.replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  if (d.length === 9 && d.startsWith("9")) return `51${d}`; // celular peruano
  if (d.length === 9 && d.startsWith("0")) return `51${d.slice(1)}`; // fijo con prefijo de ciudad (01, 056…)
  return d;
}

/**
 * Nombre y apellido por separado, en minúsculas y sin signos. Antes se
 * mandaba el nombre completo como `fn`, que Meta compara contra el nombre de
 * pila: "juan pérez" nunca coincidía con "juan".
 */
export function nombreMeta(nombre: string): { fn?: string; ln?: string } {
  const partes = nombre
    .toLowerCase()
    .replace(/[^a-záéíóúüñàèìòùâêîôûäëïöç\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!partes.length) return {};
  return partes.length > 1 ? { fn: partes[0], ln: partes[partes.length - 1] } : { fn: partes[0] };
}
