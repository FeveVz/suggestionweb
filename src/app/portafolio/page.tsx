import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Btn, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import CarruselFotos from "@/components/CarruselFotos";
import { CARRUSEL_CSS } from "@/components/carrusel-css";
import { PORTAFOLIO, TIPOS_PORTAFOLIO, fotosDe } from "@/content/portafolio";

/**
 * /portafolio — el trabajo de producción BTL y ATL.
 *
 * Separado de /casos a propósito. Los casos prueban RESULTADO: inversión,
 * período y cifra. Esta página prueba EJECUCIÓN: dirección, coordinación,
 * montaje y logística. Son dos servicios distintos y mezclarlos rebaja el
 * primero, porque el lector promedia: veintidós fichas sin cifras al lado de
 * «18 lotes a S/230.51» convierten el conjunto en un álbum.
 *
 * El filtro es CSS puro (radio + :checked). Sin JavaScript: si algo falla,
 * se ven todas las piezas, que es el estado correcto por defecto.
 *
 * Las fotos van en carrusel (CarruselFotos). Antes se publicaban 3 por evento
 * recortadas a 16/10 y en móvil solo se veía una: de 165 fotos del archivo
 * llegaban 60 a la web. Ahora están las 164 —una por evento era el arte de
 * una invitación, no una foto— y ninguna va recortada.
 */

export const metadata: Metadata = buildMetadata({
  title: "Portafolio de Activaciones BTL | Suggestion",
  description:
    "22 activaciones, lanzamientos y piezas de gran formato producidos entre 2024 y 2026 para marcas automotrices e inmobiliarias: qué resolvía cada uno y cómo se montó.",
  path: "/portafolio",
});

const MARCAS = 11;
const PIEZAS = PORTAFOLIO.length;

export default function PortafolioPage() {
  const url = absoluteUrl("/portafolio");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", url: absoluteUrl("/") },
            { name: "Portafolio", url },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Portafolio de activaciones BTL de Suggestion",
            description:
              "Activaciones de marca, lanzamientos de producto, auspicios y producción gráfica de Suggestion entre 2024 y 2026.",
            url,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: PIEZAS,
              itemListElement: PORTAFOLIO.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.titular,
              })),
            },
          },
        ]}
      />

      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2rem,4vw,3rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Portafolio", href: "/portafolio" }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 780 }}>
            <Label dot>Portafolio</Label>
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "18ch" }}>
              El trabajo de calle, montado y documentado
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "58ch" }}>
              Activaciones, lanzamientos, auspicios y producción gráfica entre 2024 y 2026. Cada pieza dice qué problema resolvía, cómo se montó y el dato de oficio que solo sabe quien estuvo ahí: promotores, horas de montaje, aforo, datos recogidos.
            </p>
          </div>
        </div>
      </section>

      {/* CIFRAS DEL INVENTARIO */}
      <div className="hk-grain" style={{ background: "var(--black)", color: "var(--white)" }}>
        <span className="hk-grain-layer" aria-hidden />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2rem,4vw,3rem) var(--gutter)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "var(--space-5)" }}>
          {[
            { v: String(PIEZAS), l: "Piezas producidas y documentadas" },
            { v: String(MARCAS), l: "Marcas y proyectos atendidos" },
            { v: "2024–2026", l: "Período que cubre este portafolio" },
            { v: String(TIPOS_PORTAFOLIO.length), l: "Tipos de intervención distintos" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ font: "var(--fw-bold) var(--fs-3xl)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--cyan)" }}>{s.v}</div>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PIEZAS */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <form className="hk-pf" aria-label="Filtrar el portafolio por tipo de intervención">
          <fieldset style={{ border: 0, padding: 0, margin: "0 0 var(--space-6)" }}>
            <legend className="hk-sr">Tipo de intervención</legend>
            <div className="hk-pf-chips">
              <input type="radio" name="tipo" id="pf-todos" defaultChecked />
              <label htmlFor="pf-todos">Todas ({PIEZAS})</label>
              {TIPOS_PORTAFOLIO.map((t, i) => (
                <span key={t} style={{ display: "contents" }}>
                  <input type="radio" name="tipo" id={`pf-${i}`} />
                  <label htmlFor={`pf-${i}`}>
                    {t} ({PORTAFOLIO.filter((p) => p.tipo === t).length})
                  </label>
                </span>
              ))}
            </div>
          </fieldset>

          <div className="hk-pf-lista">
            {PORTAFOLIO.map((p) => (
              <article key={p.slug} className="hk-pf-item hk-lift" data-tipo={p.tipo}>
                <CarruselFotos fotos={fotosDe(p)} titulo={p.titular} />

                <div className="hk-pf-texto">
                  <div className="hk-pf-meta">
                    <span className="hk-pf-tipo">{p.tipo}</span>
                    <span>{p.fechaLabel}</span>
                  </div>
                  <h2 className="hk-pf-h2">{p.titular}</h2>
                  <p className="hk-pf-cliente">{p.cliente}</p>

                  <p className="hk-pf-p"><strong>El reto.</strong> {p.reto}</p>
                  <p className="hk-pf-p"><strong>Lo que hicimos.</strong> {p.hicimos}</p>
                  {p.detalle && (
                    <p className="hk-pf-detalle"><strong>El detalle.</strong> {p.detalle}</p>
                  )}
                  {p.caso && (
                    <Link href={p.caso.href} className="hk-ulink hk-pf-caso">
                      {p.caso.label} <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </form>

        <style>{`
          ${CARRUSEL_CSS}
          .hk-sr { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; }
          .hk-pf-chips { display:flex; flex-wrap:wrap; gap:10px; }
          .hk-pf-chips input { position:absolute; opacity:0; width:1px; height:1px; }
          .hk-pf-chips label {
            display:inline-block; cursor:pointer; user-select:none;
            padding:8px 15px; border-radius:999px;
            border:1px solid var(--border-subtle); background:var(--white);
            font:var(--fw-medium) var(--fs-xs)/1 var(--font-accent);
            color:var(--text-muted);
          }
          .hk-pf-chips input:checked + label { background:var(--black); border-color:var(--black); color:var(--white); }
          .hk-pf-chips input:focus-visible + label { outline:2px solid var(--cyan); outline-offset:2px; }

          .hk-pf-lista { display:grid; gap:var(--space-6); }
          .hk-pf-item {
            background:var(--white); border:1px solid var(--border-subtle);
            border-radius:var(--radius-md); overflow:hidden;
          }
          .hk-pf-texto { padding:clamp(1.25rem,3vw,2rem); }
          .hk-pf-meta {
            display:flex; gap:12px; align-items:center; flex-wrap:wrap;
            font:var(--fw-bold) var(--fs-micro)/1 var(--font-accent);
            text-transform:uppercase; letter-spacing:var(--tracking-label);
            color:var(--text-muted);
          }
          .hk-pf-tipo { color:var(--cyan-text-sm); }
          .hk-pf-h2 {
            font:var(--fw-medium) var(--fs-xl)/1.22 var(--font-display);
            letter-spacing:var(--tracking-snug); color:var(--text-strong);
            margin:14px 0 6px; max-width:24ch;
          }
          .hk-pf-cliente { font:var(--fw-light) var(--fs-sm)/1.4 var(--font-body); color:var(--text-muted); margin:0 0 16px; }
          .hk-pf-p { font:var(--fw-light) var(--fs-sm)/1.6 var(--font-body); color:var(--text-body); margin:0 0 10px; max-width:62ch; }
          .hk-pf-p strong { font-weight:700; color:var(--text-strong); }
          .hk-pf-detalle {
            font:var(--fw-light) var(--fs-sm)/1.6 var(--font-body); color:var(--text-body);
            margin:14px 0 0; max-width:62ch; padding-left:16px;
            border-left:2px solid var(--cyan);
          }
          .hk-pf-detalle strong { font-weight:700; color:var(--text-strong); }
          .hk-pf-caso {
            display:inline-flex; align-items:center; gap:8px; margin-top:18px;
            font:var(--fw-bold) var(--fs-sm)/1 var(--font-accent); color:var(--text-strong);
          }

          @media (min-width: 860px) {
            /* El carrusel trae su propia altura: align-items start evita
               que la columna oscura se estire para igualar al texto. */
            .hk-pf-item { display:grid; grid-template-columns:minmax(0,1.06fr) minmax(0,1fr); align-items:start; }
          }

          /* Filtro CSS puro: el radio marcado oculta lo que no corresponde. */
          ${TIPOS_PORTAFOLIO.map(
            (t, i) =>
              `.hk-pf:has(#pf-${i}:checked) .hk-pf-item:not([data-tipo="${t}"]) { display:none; }`
          ).join("\n          ")}
        `}</style>
      </Section>

      {/* PUENTE A LOS CASOS */}
      <Section tone="light" style={{ paddingTop: "var(--section-y-tight)", paddingBottom: "var(--section-y-tight)" }}>
        <div style={{ maxWidth: 820, marginBottom: "var(--space-7)" }}>
          <SectionHeading level={2} kicker="Dos cosas distintas" maxWidth="26ch" style={{ marginBottom: 16 }}>
            Producir un evento y vender con él no son el mismo trabajo.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)", color: "var(--text-body)", maxWidth: "64ch" }}>
            Esta página enseña cómo se montan las cosas: la convocatoria, el protocolo, la logística y el criterio para que una marca entre en un espacio sin que la echen. Lo que esas activaciones vendieron, cuando hay una cifra medida y autorizada, está en los casos — con su inversión, su período y su fecha de corte al lado.
          </p>
        </div>
        <RelatedLinks
          title="Dónde está el resultado medido"
          columns={3}
          links={[
            { label: "Casos con cifras", href: "/casos" },
            { label: "Autoniza · 8 autos en 2 eventos", href: "/casos/autoniza-eventos" },
            { label: "Cómo medimos una campaña", href: "/metodo" },
          ]}
        />
        <div style={{ marginTop: "var(--space-7)" }}>
          <RelatedLinks
            title="Los servicios que esto pone a trabajar"
            columns={3}
            links={[
              { label: "BTL y activaciones", href: "/servicios/btl" },
              { label: "Estructuras y letreros", href: "/servicios/estructuras-publicitarias" },
              { label: "Material POP", href: "/servicios/material-pop" },
              { label: "Merchandising", href: "/servicios/merchandising" },
              { label: "Imprenta y gran formato", href: "/servicios/imprenta" },
              { label: "Producción audiovisual", href: "/servicios/produccion-audiovisual" },
            ]}
          />
        </div>
      </Section>

      {/* CIERRE */}
      <section style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
          <SectionHeading level={2} tone="dark" maxWidth="20ch">
            ¿Tienes un evento que producir?
          </SectionHeading>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Btn as="a" href="/contacto" variant="onDark" size="lg">
              Hablemos del tuyo <ArrowRight size={18} />
            </Btn>
            <Btn as="a" href="/servicios/btl" variant="ghostDark" size="lg">
              Ver el servicio de BTL
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
