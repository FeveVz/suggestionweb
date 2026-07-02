"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_CATEGORIES, SECTORS, MAIN_NAV, CTA_PRIMARY } from "@/content/navegacion";
import { whatsappLink } from "@/lib/site";

/**
 * Menú móvil como botón flotante (FAB) abajo a la derecha + WhatsApp.
 * Al pulsar abre un panel oscuro con servicios, sectores, nav y CTAs.
 * Solo visible ≤920px (la nav desktop la sirve el Header). Bloquea el scroll
 * del body mientras está abierto. Cierra al navegar, al pulsar fuera o Escape.
 */
export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const otras = MAIN_NAV.filter((l) => l.href !== "/servicios" && l.href !== "/sectores");

  return (
    <div className="hk-fab-wrap">
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="ov"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", zIndex: 1000 }}
            />
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menú"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
              className="hk-fab-panel"
            >
              <div className="hk-fab-head">
                <Link href="/" onClick={() => setOpen(false)} aria-label="Suggestion — inicio" style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)" }}>
                  Suggestion
                </Link>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="hk-fab-close">
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: "18px" }}>
                <p className="hk-fab-label">Servicios</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                  {SERVICE_CATEGORIES.map((c) => (
                    <Link key={c.slug} href={`/servicios/${c.slug}`} className="hk-fab-card">
                      {c.label}
                    </Link>
                  ))}
                </div>
                <Link href="/servicios" className="hk-fab-more">Ver todos los servicios →</Link>

                <p className="hk-fab-label" style={{ marginTop: 20 }}>Sectores</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {SECTORS.map((s) => (
                    <Link key={s.href} href={s.href} className="hk-fab-pill">
                      {s.label}
                    </Link>
                  ))}
                </div>

                <div style={{ display: "grid", gap: 2, borderTop: "1px solid var(--hairline-inverse)", marginTop: 18, paddingTop: 8 }}>
                  <Link href="/auditoria-gratis" className="hk-fab-link" style={{ color: "var(--cyan)" }}>
                    Auditoría gratis (48 h)
                  </Link>
                  {otras.map((l) => (
                    <Link key={l.href} href={l.href} className="hk-fab-link">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hk-fab-foot">
                <Link href="/contacto" onClick={() => setOpen(false)} className="hk-fab-cta">
                  {CTA_PRIMARY.label} <ArrowRight size={16} />
                </Link>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hk-fab-wa">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Botones flotantes */}
      <div className="hk-fab">
        {!open && (
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp" className="hk-fab-btn" style={{ background: "#25D366" }}>
            <MessageCircle size={24} color="#fff" />
          </a>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="hk-fab-btn hk-fab-menu"
          style={{ background: open ? "var(--ink-700)" : "var(--black)" }}
        >
          {open ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>

      <style>{`
        /* WhatsApp flota SIEMPRE (desktop incluido); el botón de menú solo en móvil */
        .hk-fab { display: flex; position: fixed; right: max(16px, env(safe-area-inset-right)); bottom: max(20px, env(safe-area-inset-bottom)); z-index: 1002; flex-direction: column; gap: 12px; align-items: center; }
        .hk-fab-btn { width: 54px; height: 54px; border-radius: 50%; border: none; cursor: pointer; display: grid; place-items: center; box-shadow: var(--shadow-lg); transition: transform var(--dur-fast) var(--ease-out); }
        .hk-fab-btn:hover { transform: translateY(-2px) scale(1.04); }
        .hk-fab-btn:active { transform: scale(0.94); }
        .hk-fab-menu { display: none; }
        @media (max-width: 920px) { .hk-fab-menu { display: grid; } }
        .hk-fab-panel { position: fixed; right: max(16px, env(safe-area-inset-right)); bottom: 88px; width: min(90vw, 360px); max-height: 74vh; overflow-y: auto; background: var(--black); color: var(--white); border: 1px solid var(--border-on-inverse); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); z-index: 1001; }
        .hk-fab-head { position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; background: var(--black); border-bottom: 1px solid var(--hairline-inverse); }
        .hk-fab-close { width: 34px; height: 34px; border-radius: 50%; background: var(--ink-700); border: none; color: var(--white); display: grid; place-items: center; cursor: pointer; }
        .hk-fab-label { font: var(--fw-bold) var(--fs-micro)/1 var(--font-accent); text-transform: uppercase; letter-spacing: var(--tracking-label); color: var(--text-on-inverse-mut); margin: 0 0 10px; }
        .hk-fab-card { display: flex; align-items: center; min-height: 48px; padding: 10px 12px; border-radius: var(--radius-sm); background: var(--ink-800); border: 1px solid var(--border-on-inverse); color: var(--white); font: var(--fw-medium) var(--fs-sm)/1.2 var(--font-body); text-decoration: none; }
        .hk-fab-pill { padding: 10px 14px; border-radius: var(--radius-pill); background: var(--ink-800); border: 1px solid var(--border-on-inverse); color: var(--white); font: var(--fw-light) var(--fs-sm)/1 var(--font-body); white-space: nowrap; text-decoration: none; }
        .hk-fab-more { display: inline-block; font: var(--fw-bold) var(--fs-sm)/1 var(--font-accent); color: var(--cyan); }
        .hk-fab-link { display: block; padding: 13px 0; color: var(--white); font: var(--fw-medium) var(--fs-md)/1 var(--font-body); text-decoration: none; }
        .hk-fab-foot { position: sticky; bottom: 0; background: var(--black); border-top: 1px solid var(--hairline-inverse); padding: 14px 18px; display: grid; gap: 10px; }
        .hk-fab-cta { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 14px; border-radius: var(--radius-pill); background: var(--white); color: var(--black); font: var(--fw-bold) var(--fs-sm)/1 var(--font-accent); text-decoration: none; }
        .hk-fab-wa { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: var(--radius-pill); background: #25D366; color: #fff; font: var(--fw-bold) var(--fs-sm)/1 var(--font-accent); text-decoration: none; }
      `}</style>
    </div>
  );
}
