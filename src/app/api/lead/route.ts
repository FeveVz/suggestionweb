import { NextResponse } from "next/server";

/**
 * Captura de leads → tabla `leads` en Supabase (la misma BD del dashboard
 * admin). Tipos: contacto | auditoria | reclamo. Honeypot `website` contra
 * spam. Nunca expone la service key (solo server-side).
 */

const TIPOS = new Set(["contacto", "auditoria", "reclamo"]);
const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }

  // Honeypot: los bots lo rellenan; respondemos ok sin guardar.
  if (s(b.website, 10)) return NextResponse.json({ ok: true });

  const nombre = s(b.nombre, 200);
  const email = s(b.email, 200);
  const telefono = s(b.telefono, 50);
  if (!nombre || (!email && !telefono)) {
    return NextResponse.json({ ok: false, error: "faltan datos" }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ ok: false, error: "config" }, { status: 500 });

  const row = {
    tipo: TIPOS.has(s(b.tipo, 20)) ? s(b.tipo, 20) : "contacto",
    nombre,
    negocio: s(b.negocio, 200) || null,
    email: email || null,
    telefono: telefono || null,
    mensaje: s(b.mensaje, 3000) || null,
    pagina: s(b.pagina, 300) || null,
    extra: b.extra && typeof b.extra === "object" ? b.extra : null,
  };

  const r = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!r.ok) return NextResponse.json({ ok: false, error: "db" }, { status: 502 });
  const data = (await r.json()) as { id?: string }[];
  return NextResponse.json({ ok: true, id: data[0]?.id ?? null });
}
