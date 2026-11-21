"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Btn } from "@/components/brand/parts";
import {
  SERVICE_CATEGORIES,
  SECTORS,
  MAIN_NAV,
  CTA_PRIMARY,
  CTA_COTIZA,
  COTIZA_PRODUCCION,
  mensajeCotiza,
} from "@/content/navegacion";
import { whatsappLink } from "@/lib/site";

type OpenMenu = "servicios" | "sectores" | null;

/** Una línea por categoría para el mega-menú (tono de venta, no de índice). */
const CAT_DESC: Record<string, string> = {
  estrategia: "Pensar antes de gastar",
  "marketing-digital-publicidad": "Leads y ventas medibles",
  "web-seo": "Tu activo digital 24/7",
  "marca-contenido": "Que te elijan y paguen más",
  "btl-medios": "Presencia física que convence",
};

export default function Header() {
  const [open, setOpen] = useState<OpenMenu>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  useEffect(() => {
    const alCambiar = (e: Event) => setMenuAbierto(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener("hk:menu-estado", alCambiar);
    return () => window.removeEventListener("hk:menu-estado", alCambiar);
  }, []);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Elevación del header al scrollear (profundidad).
  useEffect(() => {
    // Con histéresis: se compacta pasados 24 px y vuelve por debajo de 4. Con un
    // solo umbral de 10 px, el borde alternaba al hacer scroll fino (PERF-07).
    const onScroll = () => setScrolled((s) => (s ? window.scrollY > 4 : window.scrollY > 24));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menús al cambiar de ruta.
  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  // Escape cierra todo.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const linkStyle: React.CSSProperties = {
    font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)",
    color: "var(--text-strong)",
  };

  const triggerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    ...linkStyle,
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setOpen(null)}
      className={scrolled ? "hk-header hk-header-solid" : "hk-header"}
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-nav)" as unknown as number,
        // Fondo y desenfoque en globals.css (.hk-header): en el celular, fondo
        // sólido sin blur (auditoría PERF-07); el estilo en línea no se podía
        // anular desde la media query.
        borderBottom: scrolled ? "1px solid transparent" : "1px solid var(--hairline)",
        transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        className="hk-header-bar"
        style={{
          maxWidth: "var(--container-wide)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          height: scrolled ? 58 : 68,
          transition: "height var(--dur-base) var(--ease-out)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" aria-label="Suggestion — inicio" style={{ display: "flex", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/suggestion-logo-black-400.webp" alt="Suggestion" width={400} height={68} style={{ height: 22, width: "auto" }} />
        </Link>

        {/* Nav desktop */}
        <nav className="hk-nav" style={{ display: "flex", gap: 28, alignItems: "center" }} aria-label="Principal">
          {/* Servicios ▾ */}
          <div style={{ position: "static" }} onMouseEnter={() => setOpen("servicios")}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open === "servicios"}
              onClick={(e) => {
                const abrir = open !== "servicios";
                setOpen(abrir ? "servicios" : null);
                if (abrir && e.detail === 0) enfocarPanel();
              }}
              style={triggerStyle}
            >
              Servicios
              <ChevronDown size={15} style={{ transform: open === "servicios" ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast)" }} />
            </button>
          </div>

          {/* Sectores ▾ */}
          <div style={{ position: "static" }} onMouseEnter={() => setOpen("sectores")}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open === "sectores"}
              onClick={(e) => {
                const abrir = open !== "sectores";
                setOpen(abrir ? "sectores" : null);
                if (abrir && e.detail === 0) enfocarPanel();
              }}
              style={triggerStyle}
            >
              Sectores
              <ChevronDown size={15} style={{ transform: open === "sectores" ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast)" }} />
            </button>
          </div>

          {MAIN_NAV.filter((l) => l.href !== "/servicios" && l.href !== "/sectores").map((l) => (
            <Link key={l.href} href={l.href} style={linkStyle}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <span className="hk-head-cta" style={{ display: "flex" }}>
            {COTIZA_PRODUCCION[pathname] ? (
              <Btn as="a" href={whatsappLink(mensajeCotiza(COTIZA_PRODUCCION[pathname]))} target="_blank" rel="noopener noreferrer" size="sm">
                <span className="hk-cta-largo">{CTA_COTIZA}</span>
                <span className="hk-cta-corto">Cotizar</span>
              </Btn>
            ) : (
              <Btn as="a" href={CTA_PRIMARY.href} size="sm">
                {CTA_PRIMARY.label}
              </Btn>
            )}
          </span>
          {/* Menú del celular y de pantallas de hasta 1000 px (auditoría UX-03 y
              UX-07, tarea 2.06). Antes era un botón negro flotante que se perdía
              sobre las secciones negras y tapaba texto; ahora vive aquí, a la
              vista, y abre el mismo panel de FloatingMenu por un evento. */}
          <button
            type="button"
            className="hk-menu-btn"
            aria-label="Abrir menú"
            aria-haspopup="dialog"
            aria-expanded={menuAbierto}
            onClick={() => window.dispatchEvent(new Event("hk:menu"))}
          >
            <Menu size={22} aria-hidden />
          </button>
        </div>
      </div>

      {/* Panel mega-menú Servicios (full-width) */}
      {open === "servicios" && (
        <MegaPanel onClose={() => setOpen(null)}>
          <div style={{ display: "flex", gap: "var(--space-7)", alignItems: "stretch" }}>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-6)" }}>
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/servicios/${cat.slug}`}
                    onClick={() => setOpen(null)}
                    style={{ font: "var(--fw-bold) var(--fs-micro)/1.3 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)", display: "block" }}
                  >
                    {cat.label}
                  </Link>
                  <p style={{ font: "var(--fw-light) var(--fs-xs)/1.35 var(--font-body)", color: "var(--text-muted)", margin: "6px 0 12px" }}>
                    {CAT_DESC[cat.slug]}
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {cat.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={() => setOpen(null)} style={{ font: "var(--fw-medium) var(--fs-sm)/1.3 var(--font-body)", color: "var(--text-strong)" }}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Caso destacado (prueba dentro del menú) */}
            <Link
              href="/casos/autoniza-eventos"
              onClick={() => setOpen(null)}
              className="hk-lift"
              style={{ width: 250, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 18, padding: "var(--space-5)", background: "var(--black)", color: "var(--white)", borderRadius: "var(--radius-md)", textDecoration: "none" }}
            >
              <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>
                Resultado reciente
              </span>
              <span style={{ font: "var(--fw-bold) var(--fs-2xl)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--cyan)" }}>8 autos</span>
              <span style={{ font: "var(--fw-light) var(--fs-xs)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>
                vendidos por Autoniza en 2 eventos con convocatoria y activación. Ver el caso →
              </span>
            </Link>
          </div>
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hairline)", display: "flex", gap: 28, flexWrap: "wrap" }}>
            <Link href="/servicios" onClick={() => setOpen(null)} style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--cyan-text-sm)" }}>
              Ver todos los servicios →
            </Link>
            <Link href="/portafolio" onClick={() => setOpen(null)} style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-muted)" }}>
              Ver el portafolio →
            </Link>
          </div>
        </MegaPanel>
      )}

      {/* Panel Sectores */}
      {open === "sectores" && (
        <MegaPanel onClose={() => setOpen(null)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-5)" }}>
            {SECTORS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(null)}
                style={{ font: "var(--fw-medium) var(--fs-md)/1.2 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}
              >
                {s.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hairline)", display: "flex", gap: 28, flexWrap: "wrap" }}>
            <Link href="/sectores" onClick={() => setOpen(null)} style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--cyan-text-sm)" }}>
              Ver todos los sectores →
            </Link>
            <Link href="/portafolio" onClick={() => setOpen(null)} style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-muted)" }}>
              Ver el portafolio →
            </Link>
          </div>
        </MegaPanel>
      )}

    </header>
  );
}

/**
 * Con teclado (auditoría UX-13, tarea 3.16): Enter en «Servicios» o «Sectores»
 * lleva el foco al primer enlace del panel, y el panel se cierra cuando el
 * foco sale de él.
 */
function enfocarPanel() {
  window.setTimeout(() => document.querySelector<HTMLElement>("[data-mega] a")?.focus(), 40);
}

function MegaPanel({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="hk-nav"
      data-mega=""
      onMouseLeave={onClose}
      onBlur={(e) => {
        const siguiente = e.relatedTarget as Node | null;
        if (siguiente && !e.currentTarget.contains(siguiente)) onClose();
      }}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "100%",
        background: "var(--white)",
        borderBottom: "1px solid var(--hairline)",
        boxShadow: "var(--shadow-md)",
        animation: "hk-fadein var(--dur-base) var(--ease-out) both",
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-7) var(--gutter)" }}>
        {children}
      </div>
    </div>
  );
}

