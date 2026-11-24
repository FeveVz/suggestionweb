"use client";

import { useState } from "react";
import { Btn } from "@/components/brand/parts";
import { RECLAMOS_EN_BASE } from "@/lib/cta";
import { site } from "@/lib/site";
import { DEF_QUEJA, DEF_RECLAMO, LEYENDA_INDECOPI, LEYENDA_PLAZO } from "@/lib/reclamos";
import ConstanciaReclamo, { imprimirConstancia, type DatosReclamo } from "@/components/ConstanciaReclamo";

/**
 * Formulario del Libro de Reclamaciones virtual (Ley 29571; reglamento
 * DS 011-2011-PCM, modificado por el DS 101-2022-PCM). Sigue los campos de la
 * Hoja de Reclamación oficial: consumidor (con padre, madre o apoderado si es
 * menor de edad), bien contratado, tipo, detalle y pedido.
 *
 * Mientras RECLAMOS_EN_BASE sea false (lib/cta.ts) no hay base: la hoja se arma
 * en el navegador y sale por CORREO a hola@. Antes salía por WhatsApp, donde
 * la atiende el agente de IA, que no debe tramitar reclamos (auditoría
 * MED-04, tarea 2.07). El correo enviado y la copia impresa o en PDF le
 * quedan a la persona como constancia.
 *
 * Con RECLAMOS_EN_BASE (tarea 2.08) la hoja va a /api/reclamo: se guarda con
 * número correlativo (000001-2026), la constancia llega al correo de la
 * persona con copia a hola@ y el número se muestra solo cuando se registró.
 * Si el registro falla, el formulario cae al envío por correo.
 */

const label: React.CSSProperties = { font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)", color: "var(--text-strong)" };
const input: React.CSSProperties = {
  font: "var(--fw-light) var(--fs-base)/1.4 var(--font-body)", color: "var(--text-strong)", background: "var(--white)",
  border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)", padding: "12px 14px", outline: "none", width: "100%",
};
const parrafo: React.CSSProperties = { font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-body)" };

function F({ l, children, span }: { l: string; children: React.ReactNode; span?: boolean }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: span ? "1 / -1" : undefined }}>
      <span style={label}>{l}</span>
      {children}
    </label>
  );
}

/** Título de cada parte de la hoja (1. consumidor, 2. bien, 3. reclamo). */
function Grupo({ titulo }: { titulo: string }) {
  return (
    <h2 style={{ gridColumn: "1 / -1", margin: "12px 0 0", font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>
      {titulo}
    </h2>
  );
}

type Hoja = { referencia: string; fecha: string; texto: string; mail: string };
type Registro = { numero: string; limite?: string; email: string };

export default function ReclamoForm() {
  const [hoja, setHoja] = useState<Hoja | null>(null);
  const [registro, setRegistro] = useState<Registro | null>(null);
  const [menor, setMenor] = useState(false);
  const [error, setError] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [copiado, setCopiado] = useState(false);
  // Lo que se imprime como constancia (ConstanciaReclamo) en cualquiera de los dos caminos.
  const [datos, setDatos] = useState<DatosReclamo | null>(null);
  const [fecha, setFecha] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot
    const g = (k: string) => String(f.get(k) ?? "").trim();
    const capturados: DatosReclamo = {
      nombre: g("nombre"), documento: g("documento"), direccion: g("direccion"), telefono: g("telefono"), email: g("email"),
      menor, apoderado: menor ? g("apoderado") : "", apoderadoDoc: menor ? g("apoderadoDoc") : "",
      tipoBien: g("tipoBien"), bien: g("bien"), monto: g("monto"), clase: g("clase"), detalle: g("detalle"), pedido: g("pedido"),
    };
    const ahoraLima = () =>
      new Date().toLocaleString("es-PE", { timeZone: "America/Lima", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }).replace(",", "");

    // Hoja por correo: el camino de siempre, y el respaldo si el registro falla.
    const porCorreo = () => {
      const ahora = new Date();
      const fecha = ahora.toLocaleDateString("es-PE", { timeZone: "America/Lima", day: "2-digit", month: "2-digit", year: "numeric" });
      const hora = ahora.toLocaleTimeString("es-PE", { timeZone: "America/Lima", hour: "2-digit", minute: "2-digit" });
      // Referencia para ubicar el correo; no es el correlativo oficial (tarea 2.08).
      const referencia = `REC-${ahora.toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
      const texto = [
        "HOJA DE RECLAMACIÓN · LIBRO DE RECLAMACIONES VIRTUAL",
        `Fecha: ${fecha}, ${hora} (hora de Lima) · Referencia: ${referencia}`,
        `Proveedor: ${site.legalName} · RUC ${site.ruc} · Ica, Perú`,
        "",
        "1. Consumidor reclamante",
        `Nombre: ${g("nombre")}`,
        `DNI / CE: ${g("documento")}`,
        `Domicilio: ${g("direccion")}`,
        `Teléfono: ${g("telefono")}`,
        `Correo: ${g("email")}`,
        menor ? `Menor de edad. Padre, madre o apoderado: ${g("apoderado")} · DNI / CE ${g("apoderadoDoc")}` : null,
        "",
        "2. Bien contratado",
        `${g("tipoBien")}: ${g("bien")}`,
        g("monto") ? `Monto reclamado: ${g("monto")}` : null,
        "",
        "3. Detalle de la reclamación y pedido",
        `Tipo: ${g("clase")}`,
        `Detalle: ${g("detalle")}`,
        `Pedido: ${g("pedido")}`,
        "",
        DEF_RECLAMO,
        DEF_QUEJA,
        LEYENDA_INDECOPI,
        LEYENDA_PLAZO,
      ].filter((l) => l !== null).join("\n");
      const mail = `mailto:${site.email}?subject=${encodeURIComponent(`Libro de Reclamaciones · ${g("clase")} · ${referencia}`)}&body=${encodeURIComponent(texto)}`;
      setHoja({ referencia, fecha: `${fecha}, ${hora}`, texto, mail });
      setDatos(capturados);
      setFecha(ahoraLima());
      // Abre el correo de la persona con la hoja escrita. Si no tiene uno
      // configurado, queda el botón y la opción de copiar el texto.
      window.location.href = mail;
    };

    if (!RECLAMOS_EN_BASE) {
      porCorreo();
      return;
    }

    setEnviando(true);
    try {
      const r = await fetch("/api/reclamo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: g("nombre"),
          email: g("email"),
          telefono: g("telefono"),
          detalle: g("detalle"),
          website: g("website"),
          extra: {
            clase: g("clase"),
            documento: g("documento"),
            direccion: g("direccion"),
            tipoBien: g("tipoBien"),
            bien: g("bien"),
            monto: g("monto"),
            pedido: g("pedido"),
            apoderado: menor ? g("apoderado") : "",
            apoderadoDoc: menor ? g("apoderadoDoc") : "",
          },
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (data?.ok && data?.numero) {
        setDatos(capturados);
        setFecha(ahoraLima());
        setRegistro({ numero: String(data.numero), limite: data.limite, email: g("email") });
      }
      else if (r.status === 503) porCorreo(); // registro apagado o sin hoja: por correo
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setEnviando(false);
    }
  };

  const copiar = async () => {
    if (!hoja) return;
    try {
      await navigator.clipboard.writeText(hoja.texto);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  };

  if (hoja) {
    return (
      <div className="hk-hoja" style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", maxWidth: 760 }}>
        <h2 style={{ font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)" }}>Falta un paso: envía el correo</h2>
        <p style={{ ...parrafo, marginTop: 10 }}>
          Se abrió tu correo con la hoja de reclamación escrita, dirigida a <strong style={{ fontWeight: 700 }}>{site.email}</strong>. <strong style={{ fontWeight: 700 }}>Tu reclamo nos llega cuando envías ese correo.</strong> Guarda el correo enviado o una copia en PDF: te sirve como constancia. Te responderemos en un plazo máximo de <strong style={{ fontWeight: 700 }}>15 días hábiles</strong>.
        </p>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", marginTop: 8 }}>
          Si no se abrió ningún correo, copia el texto y envíalo desde tu correo a {site.email}, con la referencia {hoja.referencia} en el asunto.
        </p>
        <div className="hk-hoja-acciones" style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <Btn as="a" href={hoja.mail} size="lg">Abrir el correo otra vez</Btn>
          <Btn type="button" variant="secondary" size="lg" onClick={copiar}>{copiado ? "Texto copiado" : "Copiar el texto"}</Btn>
          <Btn type="button" variant="secondary" size="lg" onClick={() => imprimirConstancia(`Hoja de reclamación ${hoja.referencia} - Suggestion`)}>Imprimir o guardar en PDF</Btn>
        </div>
        <pre style={{ marginTop: 24, padding: "var(--space-4)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)", whiteSpace: "pre-wrap", wordBreak: "break-word", font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-strong)" }}>
          {hoja.texto}
        </pre>
        {datos && <ConstanciaReclamo datos={datos} referencia={hoja.referencia} fecha={fecha} />}
      </div>
    );
  }

  if (registro) {
    return (
      <div style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", maxWidth: 640 }}>
        <h2 style={{ font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)" }}>Hoja de reclamación N.º {registro.numero}</h2>
        <p style={{ ...parrafo, marginTop: 10 }}>
          Quedó registrada. Te enviamos la constancia a <strong style={{ fontWeight: 700 }}>{registro.email}</strong>, con copia a {site.email}. Te responderemos en un plazo máximo de <strong style={{ fontWeight: 700 }}>15 días hábiles</strong>{registro.limite ? `, a más tardar el ${registro.limite}` : ""}.
        </p>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", marginTop: 8 }}>
          Si no ves el correo, revisa la carpeta de spam o escríbenos a {site.email} con tu número de hoja.
        </p>
        <div style={{ marginTop: 16 }}>
          <Btn type="button" variant="secondary" size="lg" onClick={() => imprimirConstancia(`Hoja de reclamación ${registro.numero} - Suggestion`)}>Imprimir o guardar en PDF</Btn>
        </div>
        {datos && <ConstanciaReclamo datos={datos} numero={registro.numero} fecha={fecha} limite={registro.limite} />}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", maxWidth: 760 }} className="hk-form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

      <Grupo titulo="1. Tus datos" />
      <F l="Nombre completo *"><input name="nombre" required autoComplete="name" placeholder="Nombres y apellidos" style={input} /></F>
      <F l="DNI / CE *"><input name="documento" required placeholder="Número de documento" style={input} /></F>
      <F l="Domicilio *"><input name="direccion" required autoComplete="street-address" placeholder="Dirección, distrito y provincia" style={input} /></F>
      <F l="Teléfono *"><input name="telefono" required type="tel" autoComplete="tel" placeholder="+51 ..." style={input} /></F>
      <F l="Correo electrónico *" span><input name="email" required type="email" autoComplete="email" placeholder="tucorreo@..." style={input} /></F>
      <label style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-strong)", cursor: "pointer" }}>
        <input type="checkbox" checked={menor} onChange={(e) => setMenor(e.target.checked)} style={{ width: 18, height: 18 }} />
        Quien reclama es menor de edad
      </label>
      {menor && (
        <>
          <F l="Nombre del padre, madre o apoderado *"><input name="apoderado" required placeholder="Nombres y apellidos" style={input} /></F>
          <F l="DNI / CE del padre, madre o apoderado *"><input name="apoderadoDoc" required placeholder="Número de documento" style={input} /></F>
        </>
      )}

      <Grupo titulo="2. Lo que contrataste" />
      <F l="¿Producto o servicio? *">
        <select name="tipoBien" required style={input} defaultValue="Servicio">
          <option value="Servicio">Servicio</option>
          <option value="Producto">Producto</option>
        </select>
      </F>
      <F l="Monto reclamado (opcional)"><input name="monto" placeholder="S/" style={input} /></F>
      <F l="Descripción *" span><input name="bien" required placeholder="Ej. gestión de redes, campaña, impresión de volantes…" style={input} /></F>

      <Grupo titulo="3. Tu reclamo o queja" />
      <F l="Tipo *" span>
        <select name="clase" required style={input} defaultValue="Reclamo">
          <option value="Reclamo">Reclamo: disconformidad con el producto o servicio</option>
          <option value="Queja">Queja: malestar con la atención</option>
        </select>
      </F>
      <F l="Detalle *" span>
        <textarea name="detalle" required rows={5} placeholder="Cuéntanos qué pasó" style={{ ...input, resize: "vertical" }} />
      </F>
      <F l="Pedido *" span>
        <textarea name="pedido" required rows={3} placeholder="¿Qué solución esperas?" style={{ ...input, resize: "vertical" }} />
      </F>

      <p style={{ gridColumn: "1 / -1", font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", margin: 0 }}>
        {RECLAMOS_EN_BASE
          ? "Al enviar, tu hoja queda registrada con su número y te llega la constancia a tu correo."
          : `Al continuar se abre tu correo con la hoja de reclamación escrita, dirigida a ${site.email}. Tu reclamo nos llega cuando lo envías.`}
      </p>
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <Btn type="submit" size="lg" disabled={enviando}>{enviando ? "Registrando…" : RECLAMOS_EN_BASE ? "Registrar mi reclamo" : "Enviar reclamo por correo"}</Btn>
        {error && <span style={{ font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "#b3261e" }}>No se pudo registrar. Inténtalo de nuevo o escríbenos a {site.email}.</span>}
      </div>
    </form>
  );
}
