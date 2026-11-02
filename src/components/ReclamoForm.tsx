"use client";

import { useState } from "react";
import { Btn } from "@/components/brand/parts";
import { GUARDAR_EN_BASE } from "@/lib/cta";
import { site, whatsappLink } from "@/lib/site";

/**
 * Formulario del Libro de Reclamaciones virtual (DS 011-2011-PCM).
 * Guarda el reclamo en /api/lead (tipo "reclamo") y muestra el código
 * de registro. Respuesta al consumidor: máx. 15 días hábiles.
 *
 * Mientras GUARDAR_EN_BASE sea false (lib/cta.ts) no hay base: el reclamo sale por
 * WhatsApp o correo y solo queda constancia si la persona lo envía.
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
  const [salida, setSalida] = useState<{ wa: string; mail: string } | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    setError(false);
    const f = new FormData(e.currentTarget);
    if (!GUARDAR_EN_BASE) {
      if (f.get("website")) return; // honeypot
      const cod = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 4)}`.slice(-8).toUpperCase();
      const texto = [
        `Libro de Reclamaciones · Código REC-${cod}`,
        `Tipo: ${f.get("clase")}`,
        `Nombre: ${f.get("nombre")}`,
        `DNI / CE: ${f.get("documento")}`,
        `Teléfono: ${f.get("telefono")}`,
        `Correo: ${f.get("email")}`,
        f.get("direccion") ? `Dirección: ${f.get("direccion")}` : null,
        `Servicio o producto: ${f.get("bien")}`,
        f.get("monto") ? `Monto reclamado: ${f.get("monto")}` : null,
        `Detalle: ${f.get("detalle")}`,
        `Pedido: ${f.get("pedido")}`,
      ].filter(Boolean).join("\n");
      const wa = whatsappLink(texto);
      setSalida({ wa, mail: `mailto:${site.email}?subject=${encodeURIComponent(`Libro de Reclamaciones REC-${cod}`)}&body=${encodeURIComponent(texto)}` });
      setCodigo(cod);
      setEnviando(false);
      window.open(wa, "_blank", "noopener,noreferrer");
      return;
    }
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

  if (codigo && salida) {
    return (
      <div style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", maxWidth: 640 }}>
        <h2 style={{ font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)" }}>Falta un paso: envía tu reclamo</h2>
        <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-body)", marginTop: 10 }}>
          Tu código es <strong style={{ fontWeight: 700 }}>REC-{codigo}</strong>. Tu reclamo ya está escrito en WhatsApp. <strong style={{ fontWeight: 700 }}>Hasta que lo envíes no nos llega.</strong> Si prefieres, envíalo por correo. Te responderemos al correo o teléfono indicado en un plazo máximo de <strong style={{ fontWeight: 700 }}>15 días hábiles</strong>, conforme al Código de Protección y Defensa del Consumidor.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
          <Btn as="a" href={salida.wa} target="_blank" rel="noopener noreferrer" size="lg">Abrir WhatsApp</Btn>
          <Btn as="a" href={salida.mail} variant="secondary" size="lg">Enviarlo por correo</Btn>
        </div>
      </div>
    );
  }

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
