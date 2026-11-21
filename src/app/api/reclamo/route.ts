import { NextResponse } from "next/server";
import { RECLAMOS_EN_BASE } from "@/lib/cta";

/**
 * Libro de Reclamaciones con registro (tarea 2.08, auditoría MED-04).
 *
 * Reenvía la hoja al mismo Apps Script de los contactos (LEADS_SHEET_URL), que
 * la guarda en la pestaña «Reclamaciones» con número correlativo por año y
 * manda la constancia al correo del consumidor con copia a hola@.
 *
 * APAGADO hasta que en Vercel exista NEXT_PUBLIC_RECLAMOS_ACTIVO=1, y eso se
 * activa solo después de que un abogado valide la constancia y el domicilio
 * del proveedor (decisión 10) y de pegar la versión nueva del Apps Script.
 * Mientras tanto responde 503 y el formulario sigue por correo (tarea 2.07).
 */

const VENTANA_MS = 10 * 60 * 1000;
const MAX_ENVIOS = 3;
const envios = new Map<string, number[]>();

const ipDe = (req: Request) =>
  (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "";

function pasaLimite(ip: string): boolean {
  if (!ip) return true;
  const ahora = Date.now();
  const recientes = (envios.get(ip) || []).filter((t) => ahora - t < VENTANA_MS);
  if (recientes.length >= MAX_ENVIOS) {
    envios.set(ip, recientes);
    return false;
  }
  recientes.push(ahora);
  envios.set(ip, recientes);
  return true;
}

const s = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const hoja = process.env.LEADS_SHEET_URL;
  if (!RECLAMOS_EN_BASE || !hoja) {
    return NextResponse.json({ ok: false, error: "inactivo" }, { status: 503 });
  }
  if (!pasaLimite(ipDe(req))) {
    return NextResponse.json({ ok: false, error: "demasiados-envios" }, { status: 429 });
  }

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }
  if (s(b.website)) return NextResponse.json({ ok: true, numero: null }); // campo trampa

  const x = (b.extra && typeof b.extra === "object" ? b.extra : {}) as Record<string, unknown>;
  const cuerpo = {
    tipo: "reclamo",
    nombre: s(b.nombre, 200),
    email: s(b.email, 200),
    telefono: s(b.telefono, 40),
    mensaje: s(b.detalle, 3000),
    extra: {
      clase: s(x.clase, 20) === "Queja" ? "Queja" : "Reclamo",
      documento: s(x.documento, 20),
      direccion: s(x.direccion, 300),
      tipoBien: s(x.tipoBien, 20) === "Producto" ? "Producto" : "Servicio",
      bien: s(x.bien, 300),
      monto: s(x.monto, 40),
      pedido: s(x.pedido, 2000),
      apoderado: s(x.apoderado, 200),
      apoderadoDoc: s(x.apoderadoDoc, 20),
    },
  };
  const faltan = !cuerpo.nombre || !cuerpo.email || !cuerpo.telefono || !cuerpo.mensaje || !cuerpo.extra.documento || !cuerpo.extra.direccion || !cuerpo.extra.bien || !cuerpo.extra.pedido;
  if (faltan) return NextResponse.json({ ok: false, error: "faltan-datos" }, { status: 400 });

  try {
    const r = await fetch(hoja, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    const data = (await r.json().catch(() => ({}))) as { ok?: boolean; numero?: string; limite?: string; error?: string };
    if (!r.ok || !data.ok || !data.numero) {
      console.error("[reclamo] La hoja no lo registró:", r.status, data.error);
      return NextResponse.json({ ok: false, error: "hoja" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, numero: data.numero, limite: data.limite });
  } catch (e) {
    console.error("[reclamo] La hoja no responde:", e);
    return NextResponse.json({ ok: false, error: "hoja-red" }, { status: 502 });
  }
}
