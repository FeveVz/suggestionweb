"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, MessageCircle, Phone, Mail, Share2, Globe, ArrowRight, Check } from "lucide-react";
import { DualReveal, usePrefersReduced } from "@/components/brand/interactive";
import CountUp from "@/components/CountUp";
import { Btn, Blot } from "@/components/brand/parts";
import { site } from "@/lib/site";
import type { Talento } from "@/content/equipo";

/**
 * Tarjeta personal digital (destino del QR de la tarjeta física).
 * Mobile-first y coreografiada: la identidad "se arma" al entrar (stagger),
 * acciones de un toque (vCard, WhatsApp, llamada, correo, compartir),
 * prueba breve de la agencia y el momento Rorschach de marca al cierre.
 * Reduced-motion: todo visible sin animación.
 */

const spring = { type: "spring" as const, stiffness: 260, damping: 26 };

export default function TarjetaPersonal({ t }: { t: Talento }) {
  const reduce = usePrefersReduced();
  const [copiado, setCopiado] = useState(false);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: reduce ? 0 : 0.15 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: spring },
  };

  const waMsg = `Hola ${t.corto}, escaneé tu tarjeta digital y quiero conversar.`;

  const compartir = async () => {
    const url = `${site.url}/equipo/${t.slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${t.nombre} · ${site.name}`, text: `${t.nombre} — ${t.rol}`, url });
        return;
      }
    } catch {
      /* cancelado por el usuario */
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      /* sin clipboard: no romper */
    }
  };

  const accion: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "15px 12px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border-on-inverse)",
    background: "var(--ink-800)",
    color: "var(--white)",
    font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)",
    textDecoration: "none",
    cursor: "pointer",
    transition: "border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
  };

  return (
    <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", position: "relative", overflow: "hidden", minHeight: "calc(100vh - 68px)" }}>
      <span className="hk-grain-layer" aria-hidden />
      {/* Mancha de marca flotando al fondo (identidad, no ruido) */}
      <motion.div
        aria-hidden
        style={{ position: "absolute", top: -70, right: -90, opacity: 0.14, pointerEvents: "none", zIndex: 0 }}
        animate={reduce ? undefined : { y: [0, 26, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Blot shape={1} dual reveal size={340} />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: "relative", zIndex: 1, maxWidth: 560, margin: "0 auto", padding: "clamp(2.5rem,6vw,4rem) var(--gutter) clamp(3rem,7vw,5rem)", display: "flex", flexDirection: "column", gap: 0 }}
      >
        {/* Kicker de marca */}
        <motion.span variants={item} style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--cyan)" }} aria-hidden />
          {site.name} · Tarjeta digital
        </motion.span>

        {/* Monograma (foto-ready) */}
        <motion.div variants={item} style={{ marginTop: 26 }}>
          <span style={{ width: 104, height: 104, borderRadius: "50%", padding: 3, background: "linear-gradient(135deg, var(--orange), var(--cyan))", display: "grid" }}>
            {t.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={t.foto} alt={`Foto de ${t.nombre}`} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
            ) : (
              <span style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--black)", display: "grid", placeItems: "center", font: "var(--fw-bold) var(--fs-2xl)/1 var(--font-display)", letterSpacing: "0.02em" }}>
                {t.iniciales}
              </span>
            )}
          </span>
        </motion.div>

        {/* Identidad */}
        <motion.h1 variants={item} style={{ font: "var(--fw-bold) var(--fs-3xl)/1.02 var(--font-display)", letterSpacing: "var(--tracking-tight)", margin: "22px 0 0", maxWidth: "12ch" }}>
          {t.nombre}
        </motion.h1>
        <motion.p variants={item} style={{ font: "var(--fw-bold) var(--fs-xs)/1.3 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--cyan)", margin: "12px 0 0" }}>
          {t.rol}
        </motion.p>
        <motion.p variants={item} style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-on-inverse-mut)", margin: "16px 0 0", maxWidth: "44ch" }}>
          {t.bio}
        </motion.p>

        {/* Especialidades */}
        <motion.div variants={item} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
          {t.especialidades.map((e) => (
            <span key={e} style={{ font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-on-inverse-mut)", border: "1px solid var(--border-on-inverse)", borderRadius: 999, padding: "7px 13px" }}>
              {e}
            </span>
          ))}
        </motion.div>

        {/* Acciones de un toque */}
        <motion.a variants={item} whileTap={reduce ? undefined : { scale: 0.98 }} href={`/api/vcard/${t.slug}`} style={{ ...accion, marginTop: 30, background: "var(--cyan)", border: "none", color: "var(--black)", font: "var(--fw-bold) var(--fs-md)/1 var(--font-body)", padding: "17px 12px" }}>
          <UserPlus size={19} strokeWidth={2.2} /> Guardar contacto
        </motion.a>
        <motion.div variants={item} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
          <motion.a whileTap={reduce ? undefined : { scale: 0.97 }} className="hk-tp-btn" href={`https://wa.me/${t.whatsapp}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer" style={accion}>
            <MessageCircle size={17} style={{ color: "#25D366" }} /> WhatsApp
          </motion.a>
          <motion.a whileTap={reduce ? undefined : { scale: 0.97 }} className="hk-tp-btn" href={`tel:${t.telefono}`} style={accion}>
            <Phone size={17} style={{ color: "var(--cyan)" }} /> Llamar
          </motion.a>
          <motion.a whileTap={reduce ? undefined : { scale: 0.97 }} className="hk-tp-btn" href={`mailto:${t.email}`} style={accion}>
            <Mail size={17} style={{ color: "var(--orange)" }} /> Correo
          </motion.a>
          <motion.button whileTap={reduce ? undefined : { scale: 0.97 }} className="hk-tp-btn" onClick={compartir} style={accion} type="button">
            {copiado ? <Check size={17} style={{ color: "var(--cyan)" }} /> : <Share2 size={17} style={{ color: "var(--white)" }} />}
            {copiado ? "¡Enlace copiado!" : "Compartir"}
          </motion.button>
        </motion.div>
        <motion.a variants={item} href="/" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, margin: "18px auto 0", font: "var(--fw-light) var(--fs-sm)/1 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>
          <Globe size={15} style={{ color: "var(--cyan)" }} /> {site.domain}
        </motion.a>

        {/* Prueba breve de la agencia */}
        <motion.div variants={item} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 38, paddingTop: 26, borderTop: "1px solid var(--hairline-inverse)" }}>
          {[
            ["7", "años"],
            ["+50", "marcas"],
            ["19", "marcas de vehículos"],
          ].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ font: "var(--fw-bold) var(--fs-xl)/1 var(--font-display)", color: "var(--white)" }}>
                <CountUp to={v} />
              </div>
              <span style={{ font: "var(--fw-light) var(--fs-micro)/1.3 var(--font-body)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>{l}</span>
            </div>
          ))}
        </motion.div>

        {/* Momento de marca: el Rorschach interactivo */}
        <motion.div variants={item} style={{ marginTop: 44, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>
            {site.tagline}
          </span>
          <DualReveal shape={1} size={300} />
        </motion.div>

        {/* CTA para el prospecto que recibió la tarjeta */}
        <motion.div variants={item} style={{ marginTop: 40, padding: "var(--space-6)", border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-md)", background: "var(--ink-800)" }}>
          <p style={{ font: "var(--fw-medium) var(--fs-lg)/1.3 var(--font-display)", letterSpacing: "var(--tracking-snug)" }}>
            ¿Tienes un negocio? Te decimos qué ve tu mercado.
          </p>
          <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>
            Auditoría gratis de tu marketing, respuesta en 48 h hábiles.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <Btn as="a" href="/auditoria-gratis" variant="insight" size="md">
              Pedir mi auditoría <ArrowRight size={16} />
            </Btn>
            <Btn as="a" href="/casos" variant="ghostDark" size="md">
              Ver resultados
            </Btn>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .hk-tp-btn:hover { border-color: var(--cyan) !important; background: var(--ink-700) !important; }
      `}</style>
    </section>
  );
}
