import { NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "crypto";
import { enviarVentasCapi, type VentaCapi } from "@/lib/meta-capi";

/**
 * Ventas cerradas → Meta (24-nov-2026, punto 3 del owner).
 *
 * Lo llama SOLO el Apps Script de la hoja «Contactos web Suggestion» (menú
 * Suggestion → Enviar ventas a Meta, o el envío diario). Cada venta va como
 * evento Purchase por la API de conversiones, con teléfono/correo/nombre en
 * hash: Meta la cruza con quien vio o tocó un anuncio.
 *
 * Seguridad: exige la cabecera «Authorization: Bearer <VENTAS_CLAVE>». La clave
 * la genera el Apps Script (menú Suggestion → Crear clave), queda guardada en
 * sus propiedades y el owner la pega en Vercel como variable «Sensitive». Sin
 * VENTAS_CLAVE en Vercel, responde 503 y no hace nada.
 *
 * Meta rechaza el lote entero si un evento tiene más de 7 días: por eso solo
 * pasan cierres de hoy y de los 6 días anteriores (hora de Lima). Las demás
 * vuelven con motivo y el Apps Script las marca «Fuera de plazo».
 */

const MAX_VENTAS = 50;
const DIAS = 6;
const VENTANA_MS = 10 * 60 * 1000;
const MAX_LLAMADAS = 20;
const llamadas = new Map<string, number[]>();

const ipDe = (req: Request) =>
  (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "";

function pasaLimite(ip: string): boolean {
  const ahora = Date.now();
  const recientes = (llamadas.get(ip) || []).filter((t) => ahora - t < VENTANA_MS);
  recientes.push(ahora);
  llamadas.set(ip, recientes);
  return recientes.length <= MAX_LLAMADAS;
}

const huella = (v: string) => createHash("sha256").update(v).digest();

function claveValida(req: Request, clave: string): boolean {
  const dada = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  return dada.length > 0 && timingSafeEqual(huella(dada), huella(clave));
}

/** AAAA-MM-DD de hoy en Lima (UTC−5, sin horario de verano). */
const hoyLima = () => new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);

const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

type Rechazo = { id: string; motivo: string };

function validar(x: Record<string, unknown>, hoy: string, desde: string): VentaCapi | Rechazo {
  const id = s(x.id, 64);
  if (!/^[A-Za-z0-9_-]{6,64}$/.test(id)) return { id: id || "?", motivo: "id inválido" };
  const fecha = s(x.fecha, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha) || Number.isNaN(Date.parse(fecha))) return { id, motivo: "fecha inválida" };
  if (fecha > hoy) return { id, motivo: "fecha futura" };
  if (fecha < desde) return { id, motivo: "fuera de plazo" };
  const monto = typeof x.monto === "number" ? x.monto : Number(String(x.monto ?? "").replace(/[^\d.]/g, ""));
  if (!Number.isFinite(monto) || monto <= 0 || monto > 1_000_000) return { id, motivo: "monto inválido" };
  const telefono = s(x.telefono, 40);
  const correo = s(x.correo, 200);
  if (!/\d{6,}/.test(telefono.replace(/\D/g, "")) && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
    return { id, motivo: "falta teléfono o correo" };
  }
  const fbclid = s(x.fbclid, 500);
  return {
    id,
    fecha,
    monto: Math.round(monto * 100) / 100,
    telefono: telefono || undefined,
    correo: correo || undefined,
    nombre: s(x.nombre, 200) || undefined,
    servicio: s(x.servicio, 120) || undefined,
    fbclid: /^[A-Za-z0-9_-]{10,}$/.test(fbclid) ? fbclid : undefined,
    clic: s(x.clic, 40) || undefined,
  };
}

export async function POST(req: Request) {
  const clave = process.env.VENTAS_CLAVE;
  if (!clave || clave.length < 32) {
    return NextResponse.json({ ok: false, error: "inactivo" }, { status: 503 });
  }
  if (!pasaLimite(ipDe(req))) {
    return NextResponse.json({ ok: false, error: "demasiadas-llamadas" }, { status: 429 });
  }
  if (!claveValida(req, clave)) {
    return NextResponse.json({ ok: false, error: "clave" }, { status: 401 });
  }

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }
  const lista = Array.isArray(b.ventas) ? (b.ventas as Record<string, unknown>[]) : [];
  if (!lista.length) return NextResponse.json({ ok: false, error: "sin-ventas" }, { status: 400 });
  if (lista.length > MAX_VENTAS) return NextResponse.json({ ok: false, error: `máximo ${MAX_VENTAS} por envío` }, { status: 400 });

  const hoy = hoyLima();
  const desde = new Date(Date.parse(hoy) - DIAS * 86400 * 1000).toISOString().slice(0, 10);
  const validas: VentaCapi[] = [];
  const rechazadas: Rechazo[] = [];
  for (const x of lista) {
    const v = validar(x && typeof x === "object" ? x : {}, hoy, desde);
    if ("motivo" in v) rechazadas.push(v);
    else validas.push(v);
  }

  // Código de «Probar eventos» de Events Manager: la venta se ve ahí y no cuenta en los informes.
  const prueba = s(b.prueba, 40);
  const r = validas.length ? await enviarVentasCapi(validas, /^TEST\w+$/.test(prueba) ? prueba : undefined) : { recibidos: 0 };
  return NextResponse.json({
    ok: !("error" in r && r.error),
    recibidos: r.recibidos,
    enviadas: validas.map((v) => v.id),
    rechazadas,
    ...("error" in r && r.error ? { error: r.error } : {}),
  });
}
