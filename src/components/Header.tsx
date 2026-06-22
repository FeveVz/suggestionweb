"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Btn } from "@/components/brand/parts";
import {
  SERVICE_CATEGORIES,
  SECTORS,
  MAIN_NAV,
  CTA_PRIMARY,
} from "@/content/navegacion";

type OpenMenu = "servicios" | "sectores" | null;

export default function Header() {
  const [open, setOpen] = useState<OpenMenu>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

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
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-nav)" as unknown as number,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-wide)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" aria-label="Suggestion — inicio" style={{ display: "flex", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/suggestion-logo-black.png" alt="Suggestion" style={{ height: 22, width: "auto" }} />
        </Link>

        {/* Nav desktop */}
        <nav className="hk-nav" style={{ display: "flex", gap: 28, alignItems: "center" }} aria-label="Principal">
          {/* Servicios ▾ */}
          <div style={{ position: "static" }} onMouseEnter={() => setOpen("servicios")}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open === "servicios"}
              onClick={() => setOpen(open === "servicios" ? null : "servicios")}
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
              onClick={() => setOpen(open === "sectores" ? null : "sectores")}
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
          <span className="hk-nav" style={{ display: "flex" }}>
            <Btn as="a" href={CTA_PRIMARY.href} size="sm">
              {CTA_PRIMARY.label}
            </Btn>
          </span>
        </div>
      </div>

      {/* Panel mega-menú Servicios (full-width) */}
      {open === "servicios" && (
        <MegaPanel onClose={() => setOpen(null)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-6)" }}>
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.slug}>
                <Link
                  href={`/servicios/${cat.slug}`}
                  onClick={() => setOpen(null)}
                  style={{ font: "var(--fw-bold) var(--fs-micro)/1.3 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)", display: "block", marginBottom: 14 }}
                >
                  {cat.label}
                </Link>
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
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
            <Link href="/servicios" onClick={() => setOpen(null)} style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--cyan)" }}>
              Ver todos los servicios →
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
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
            <Link href="/sectores" onClick={() => setOpen(null)} style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--cyan)" }}>
              Ver todos los sectores →
            </Link>
          </div>
        </MegaPanel>
      )}

    </header>
  );
}

function MegaPanel({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="hk-nav"
      onMouseLeave={onClose}
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

