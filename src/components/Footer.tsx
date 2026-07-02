import Link from "next/link";
import { MapPin, Instagram, Facebook } from "lucide-react";
import { Dot } from "@/components/brand/parts";
import { FOOTER_COLUMNS } from "@/content/navegacion";
import { site, whatsappLink } from "@/lib/site";

const socials = [
  { name: "Instagram", Icon: Instagram, href: site.social.instagram },
  { name: "Facebook", Icon: Facebook, href: site.social.facebook },
];

const contactLinks = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.phoneDisplay, href: whatsappLink() },
  { label: "Agenda una llamada", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
        <div className="hk-foot" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: "var(--space-6)" }}>
          {/* Bloque de marca */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logoWhite} alt="Suggestion" style={{ height: 24, width: "auto" }} />
            <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 18, maxWidth: "30ch" }}>
              Agencia de marketing de performance. {site.slogan}.
            </p>
            <p style={{ display: "flex", alignItems: "flex-start", gap: 10, font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 18 }}>
              <MapPin size={16} style={{ color: "var(--cyan)", marginTop: 2, flexShrink: 0 }} />
              <span>Ica, Perú · Atención a todo el país</span>
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              {socials.map(({ name, Icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                  style={{ width: 38, height: 38, display: "grid", placeItems: "center", border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-sm)", color: "var(--white)" }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de navegación */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} style={{ display: "flex", flexDirection: "column", gap: 12 }} aria-label={col.title}>
              <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>{col.title}</span>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} style={{ font: "var(--fw-light) var(--fs-sm)/1.3 var(--font-body)", color: "var(--white)" }}>{l.label}</Link>
              ))}
            </nav>
          ))}

          {/* Columna de contacto */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 12 }} aria-label="Contacto">
            <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>Contacto</span>
            {contactLinks.map((l) => (
              <a key={l.href} href={l.href} style={{ font: "var(--fw-light) var(--fs-sm)/1.3 var(--font-body)", color: "var(--white)" }}>{l.label}</a>
            ))}
          </nav>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--hairline-inverse)", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>
            <Dot size={6} /> No es lo que ves.
          </span>
          <nav aria-label="Legal" style={{ display: "flex", gap: "8px 20px", flexWrap: "wrap" }}>
            {[
              { label: "Privacidad", href: "/privacidad" },
              { label: "Términos", href: "/terminos" },
              { label: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-on-inverse-mut)", textDecoration: "underline", textUnderlineOffset: "0.2em" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <span style={{ font: "var(--fw-light) var(--fs-xs)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>© {new Date().getFullYear()} {site.legalName} · RUC {site.ruc} · Ica, Perú</span>
        </div>
      </div>
    </footer>
  );
}
