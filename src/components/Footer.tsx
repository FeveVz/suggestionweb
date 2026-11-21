import Link from "next/link";
import { MapPin, Instagram, Facebook, Mail, MessageCircle, Phone, FileText } from "lucide-react";
import { Dot } from "@/components/brand/parts";
import { FOOTER_COLUMNS } from "@/content/navegacion";
import { site, whatsappLink } from "@/lib/site";
import FooterColumna from "@/components/FooterColumna";

const socials = [
  { name: "Instagram", Icon: Instagram, href: site.social.instagram },
  { name: "Facebook", Icon: Facebook, href: site.social.facebook },
];

/**
 * El número aparece dos veces a propósito, con dos destinos distintos:
 *
 * - Escrito, enlazado a WhatsApp, porque es por donde entra la mayoría del
 *   contacto (Meta cuenta 27 clics a WhatsApp frente a 4 formularios).
 * - "Llamar", con `tel:`, que es lo que una persona busca desde el móvil
 *   cuando llega por "imprenta cerca de mí" y quiere resolver ya. De paso es
 *   la forma inequívoca de decirle a Google y a los rastreadores de IA cuál
 *   es el teléfono del negocio: un `wa.me/51...` es una URL, un `tel:` es un
 *   número de teléfono declarado como tal.
 */
const contactLinks = [
  { label: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: `WhatsApp ${site.phoneDisplay}`, href: whatsappLink(), Icon: MessageCircle },
  { label: "Llamar", href: `tel:${site.phoneE164}`, Icon: Phone },
  { label: "Formulario de contacto", href: "/contacto", Icon: FileText },
];

export default function Footer() {
  return (
    <footer className="hk-site-footer" style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
        <div className="hk-foot" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: "var(--space-6)" }}>
          {/* Bloque de marca */}
          <div className="hk-foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logoWhiteImg} alt="Suggestion" width={800} height={135} loading="lazy" decoding="async" style={{ height: 24, width: "auto" }} />
            <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 18, maxWidth: "30ch" }}>
              Agencia de marketing de performance. {site.slogan}.
            </p>
            <p style={{ display: "flex", alignItems: "flex-start", gap: 10, font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 18 }}>
              <MapPin size={16} style={{ color: "var(--cyan)", marginTop: 2, flexShrink: 0 }} />
              <span>Ica, Perú · Atención a todo el país</span>
            </p>
            {/* Contacto dentro del bloque de marca, con el mismo icono cian que la
                ubicación. Antes era una sexta columna que caía sola en una segunda
                fila en escritorio y con otro estilo en el celular. */}
            <ul className="hk-foot-contact" aria-label="Contacto" style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 10 }}>
              {contactLinks.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a href={href} className="hk-tap hk-foot-contact-a" style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--white)" }}>
                    <Icon size={16} style={{ color: "var(--cyan)", flexShrink: 0 }} aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
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
            <FooterColumna key={col.title} titulo={col.title}>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} className="hk-tap" style={{ font: "var(--fw-light) var(--fs-sm)/1.3 var(--font-body)", color: "var(--white)" }}>{l.label}</Link>
              ))}
            </FooterColumna>
          ))}

        </div>

        {/* Firma editorial: wordmark fantasma */}
        <div aria-hidden className="hk-foot-ghost-wrap" style={{ overflow: "hidden", marginTop: 56 }}>
          <div className="hk-foot-ghost">Suggestion</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--hairline-inverse)", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>
            <Dot size={6} /> No es lo que ves. · <a href="/" className="hk-ulink" style={{ color: "var(--text-on-inverse-mut)" }}>Agencia de marketing en Ica</a>
          </span>
          <nav aria-label="Legal" style={{ display: "flex", gap: "8px 20px", flexWrap: "wrap" }}>
            {[
              { label: "Privacidad", href: "/privacidad" },
              { label: "Términos", href: "/terminos" },
              { label: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hk-tap" style={{ font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-on-inverse-mut)", textDecoration: "underline", textUnderlineOffset: "0.2em" }}>
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
