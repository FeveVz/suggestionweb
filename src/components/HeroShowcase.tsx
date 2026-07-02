"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CalendarCheck, CheckCircle2, TrendingUp } from "lucide-react";
import CountUp from "@/components/CountUp";
import { usePrefersReduced } from "@/components/brand/interactive";

/**
 * Pieza del hero: "así se ve tu funnel con nosotros".
 * (1) Feed de notificaciones estilo WhatsApp que se va llenando de leads,
 * citas y ventas (ilustrativo). (2) Panel con las métricas REALES del caso
 * Ceinys (CountUp) + sparkline que se dibuja sola. Decorativo para SEO
 * (aria-hidden en lo animado); el mensaje vive en el texto del hero.
 * Reduced-motion: todo estático y visible.
 */

type Item = { Icon: typeof MessageCircle; iconBg: string; titulo: string; detalle: string };

const FEED: Item[] = [
  { Icon: MessageCircle, iconBg: "#25D366", titulo: "Nuevo lead por WhatsApp", detalle: "María · “Quiero cotizar el proyecto”" },
  { Icon: CalendarCheck, iconBg: "var(--orange)", titulo: "Cita agendada", detalle: "Mañana 10:30 · sala de ventas" },
  { Icon: CheckCircle2, iconBg: "var(--cyan)", titulo: "Venta cerrada", detalle: "S/12,500 · lote 14" },
  { Icon: MessageCircle, iconBg: "#25D366", titulo: "Nuevo lead por WhatsApp", detalle: "Junior · “Info del plan de redes”" },
  { Icon: TrendingUp, iconBg: "var(--cyan)", titulo: "CPL bajó a S/9.80", detalle: "Meta Ads · esta semana" },
  { Icon: CalendarCheck, iconBg: "var(--orange)", titulo: "Cita agendada", detalle: "Hoy 4:15 p.m. · showroom" },
  { Icon: MessageCircle, iconBg: "#25D366", titulo: "Nuevo lead por WhatsApp", detalle: "Carla · “¿Atienden clínicas?”" },
  { Icon: CheckCircle2, iconBg: "var(--cyan)", titulo: "Venta cerrada", detalle: "S/8,900 · campaña de temporada" },
];

const VISIBLE = 4;

export default function HeroShowcase() {
  const reduce = usePrefersReduced();
  const [head, setHead] = useState(VISIBLE); // cuántos items "han llegado"

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setHead((h) => h + 1), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  // Ventana de los últimos VISIBLE items (loop infinito sobre FEED)
  const window_ = Array.from({ length: VISIBLE }, (_, k) => {
    const idx = head - VISIBLE + k;
    return { key: idx, item: FEED[((idx % FEED.length) + FEED.length) % FEED.length] };
  });

  return (
    <div style={{ width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Feed de notificaciones */}
      <div aria-hidden style={{ background: "var(--black)", border: "1px solid var(--ink-600)", borderRadius: "var(--radius-md)", padding: "16px 16px 10px", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 0 0 rgba(0,191,255,0.5)", animation: reduce ? undefined : "hk-pulse 2.4s var(--ease-out) infinite" }} />
          <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>
            Así se ve tu funnel con nosotros
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, minHeight: VISIBLE * 62 - 8 }}>
          <AnimatePresence initial={false} mode="popLayout">
            {window_.map(({ key, item }) => (
              <motion.div
                key={key}
                layout
                initial={reduce ? false : { opacity: 0, y: -16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: 18, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--ink-800)", border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-sm)", padding: "10px 14px" }}
              >
                <span style={{ width: 34, height: 34, borderRadius: "50%", background: item.iconBg, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <item.Icon size={17} color="#000" strokeWidth={2.4} />
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", font: "var(--fw-medium) var(--fs-sm)/1.2 var(--font-body)", color: "var(--white)" }}>{item.titulo}</span>
                  <span style={{ display: "block", font: "var(--fw-light) var(--fs-xs)/1.3 var(--font-body)", color: "var(--text-on-inverse-mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.detalle}</span>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Panel de métricas reales (caso Ceinys) */}
      <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "16px 18px", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
          <div>
            <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>
              Caso real · Inmobiliaria Ceinys
            </span>
            <div style={{ font: "var(--fw-bold) var(--fs-2xl)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", marginTop: 8 }}>
              <CountUp to="S/350K" /> <span style={{ font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-muted)" }}>en ventas con S/3,000</span>
            </div>
          </div>
          {/* Sparkline que se dibuja */}
          <svg width="120" height="44" viewBox="0 0 120 44" fill="none" aria-hidden style={{ flexShrink: 0 }}>
            <polyline
              points="2,40 22,34 38,36 56,26 74,22 92,12 118,4"
              stroke="var(--cyan)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              style={reduce ? undefined : { strokeDasharray: 1, strokeDashoffset: 1, animation: "hk-draw 2.2s var(--ease-out) 0.4s forwards" }}
            />
            <circle cx="118" cy="4" r="3.5" fill="var(--orange)" style={reduce ? undefined : { opacity: 0, animation: "hk-fadein 0.4s var(--ease-out) 2.5s forwards" }} />
          </svg>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--hairline)" }}>
          {[
            { v: "350", l: "leads" },
            { v: "20", l: "citas" },
            { v: "8", l: "cierres" },
          ].map((s, i) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-display)", color: i === 2 ? "var(--cyan)" : "var(--text-strong)" }}>
                <CountUp to={s.v} />
              </div>
              <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes hk-draw { to { stroke-dashoffset: 0; } }`}</style>
    </div>
  );
}
