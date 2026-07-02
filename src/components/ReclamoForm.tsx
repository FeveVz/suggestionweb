"use client";

import { useState } from "react";
import { Btn } from "@/components/brand/parts";

/**
 * Formulario del Libro de Reclamaciones virtual (DS 011-2011-PCM).
 * Guarda el reclamo en /api/lead (tipo "reclamo") y muestra el código
 * de registro. Respuesta al consumidor: máx. 15 días hábiles.
 */

const label: React.CSSProperties = { font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)", color: "var(--text-strong)" };
const input: React.CSSProperties = {
  font: "var(--fw-light) var(--fs-base)/1.4 var(--font-body)", color: "var(--text-strong)", background: "var(--white)",
  border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)", padding: "12px 14px", outline: "none", width: "100%",
};

function F({ l, children, span }: { l: string; children: React.ReactNode; span?: boolean }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: span ? "1 / -1" : undefined }}>
      <span style={label}>{l}</span>
      {children}
    </label>
  );
}

export default function ReclamoForm() {
  const [codigo, setCodigo] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    setError(false);
    const f = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "reclamo",
          nombre: f.get("nombre"),
          email: f.get("email"),
          telefono: f.get("telefono"),
          mensaje: f.get("detalle"),
          pagina: "/libro-de-reclamaciones",
          website: f.get("website"),
          extra: {
            clase: f.get("clase"),
            documento: f.get("documento"),
            direccion: f.get("direccion"),
            bien: f.get("bien"),
            monto: f.get("monto"),
            pedido: f.get("pedido"),
          },
        }),
      });
      const data = await r.json();
      if (data?.ok && data?.id) setCodigo(String(data.id).slice(0, 8).toUpperCase());
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setEnviando(false);
    }
  };

  if (codigo) {
    return (
      <div style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", maxWidth: 640 }}>
        <h2 style={{ font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)" }}>Reclamo registrado ✔</h2>
        <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-body)", marginTop: 10 }}>
          Tu código de registro es <strong style={{ fontWeight: 700 }}>REC-{codigo}</strong>. Te responderemos al correo o teléfono indicado en un plazo máximo de <strong style={{ fontWeight: 700 }}>15 días hábiles</strong>, conforme al Código de Protección y Defensa del Consumidor.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", maxWidth: 760 }} className="hk-form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <F l="Tipo *">
        <select name="clase" required style={input} defaultValue="Reclamo">
          <option value="Reclamo">Reclamo (disconformidad con el servicio)</option>
          <option value="Queja">Queja (malestar con la atención)</option>
        </select>
      </F>
      <F l="Nombre completo *"><input name="nombre" required placeholder="Nombres y apellidos" style={input} /></F>
      <F l="DNI / CE *"><input name="documento" required placeholder="Número de documento" style={input} /></F>
      <F l="Teléfono *"><input name="telefono" required type="tel" placeholder="+51 ..." style={input} /></F>
      <F l="Correo electrónico *"><input name="email" required type="email" placeholder="tucorreo@..." style={input} /></F>
      <F l="Dirección"><input name="direccion" placeholder="Distrito, provincia" style={input} /></F>
      <F l="Servicio o producto contratado *"><input name="bien" required placeholder="Ej. gestión de redes, campaña, imprenta…" style={input} /></F>
      <F l="Monto reclamado (opcional)"><input name="monto" placeholder="S/" style={input} /></F>
      <F l="Detalle del reclamo o queja *" span>
        <textarea name="detalle" required rows={5} placeholder="Cuéntanos qué pasó" style={{ ...input, resize: "vertical" }} />
      </F>
      <F l="Pedido del consumidor *" span>
        <textarea name="pedido" required rows={3} placeholder="¿Qué solución esperas?" style={{ ...input, resize: "vertical" }} />
      </F>
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <Btn type="submit" size="lg" disabled={enviando}>{enviando ? "Registrando…" : "Registrar reclamo"}</Btn>
        {error && <span style={{ font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "#b3261e" }}>No se pudo registrar. Inténtalo de nuevo o escríbenos a hola@suggestion.pe.</span>}
      </div>
    </form>
  );
}
