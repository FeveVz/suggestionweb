import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { Section, Label, Btn, Blot, Stat, Dot, TaglineStrip } from '@/components/brand/parts';
import { DualReveal, Percepcion, CtaForm, RevealController } from '@/components/brand/interactive';

export const metadata: Metadata = {
  title: 'Convertimos atención en ventas | Agencia de performance en Ica',
  description:
    'Marketing de performance en Ica, Perú. Trabajamos el funnel completo —lead, cita, cierre— para inmobiliarias, automotrices, turismo y consumo. No métricas de vanidad.',
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe' },
};

const SECTORES = [
  { index: '01', title: 'Inmobiliario', result: 'Llenamos tu pipeline de citas calificadas, no de curiosos.', shape: 1 },
  { index: '02', title: 'Automotriz', result: 'Del clic al test drive: leads listos para el cierre en piso.', shape: 2 },
  { index: '03', title: 'Turismo', result: 'Reservas reales en temporada y fuera de ella, con costo medido.', shape: 6 },
  { index: '04', title: 'Marcas & consumo', result: 'Demanda que se convierte en venta, no en likes prestados.', shape: 5 },
];

const CASOS = [
  { tag: 'Inmobiliario', title: 'Inmobiliaria Ceinys', metric: 'S/350K', unit: '', note: 'en ventas: 350 leads y 8 lotes vendidos con S/3,000 de inversión en Meta Ads.', shape: 1 },
  { tag: 'Consumo', title: 'Granjas Bonanza', metric: '15', unit: '', note: 'contratos cerrados con S/2,500 de inversión en campañas de demanda directa.', shape: 5 },
  { tag: 'Turismo', title: 'Hoteles Señor de Luren', metric: '75', unit: '', note: 'reservas generadas con campañas de performance, en y fuera de temporada.', shape: 6 },
];

const PASOS = [
  { n: '01', t: 'Leemos', d: 'Auditamos tu mercado y tu funnel. Vemos la mancha: dónde se pierde la atención antes de convertir.' },
  { n: '02', t: 'Moldeamos', d: 'Diseñamos oferta, mensaje y embudo. Lo que el público termina viendo lo decidimos nosotros.' },
  { n: '03', t: 'Convertimos', d: 'Activamos campañas de performance y citas. Lead, cita, cierre — sin pasos de vanidad.' },
  { n: '04', t: 'Medimos', d: 'Reportamos CPL, ROAS y cierres con transparencia. Iteramos sobre lo que mueve la venta.' },
];

const SERVICIOS: [string, string][] = [
  ['Performance ads', 'Meta, Google y TikTok orientados a lead y venta, no a alcance.'],
  ['Landing & CRO', 'Páginas que convierten la atención en formularios y citas.'],
  ['Embudos & CRM', 'Automatización de lead → cita → cierre con seguimiento real.'],
  ['Citas calificadas', 'Agendamiento y prospección para tu equipo comercial.'],
  ['Creatividad de conversión', 'Mensaje y arte que mueven la aguja del negocio.'],
  ['Medición & reporting', 'Dashboards de CPL, ROAS y cierres con lectura clara.'],
];

const POR_QUE: [string, string][] = [
  ['Performance, no vanidad', 'Medimos leads, citas y cierres. Los likes no pagan la planilla.'],
  ['Método propio por vertical', 'Inmobiliario, automotriz, turismo y consumo: cada uno con su playbook.'],
  ['Base en Ica, alcance nacional', 'Conocemos el mercado local y operamos campañas en todo el Perú.'],
  ['Transparencia radical', 'Ves los números reales del funnel. Sin humo, sin promesas mágicas.'],
];

const TESTIMONIOS = [
  { q: 'Con S/3,000 en Meta Ads captamos 350 leads, concretamos 20 visitas y vendimos 8 lotes. La inversión se pagó sola.', a: 'Rosario', c: 'Jefa de Ventas, Inmobiliaria Ceinys' },
  { q: 'Invertimos S/2,500 en Meta Ads y cerramos 15 contratos. Suggestion convierte el presupuesto en clientes reales, no en promesas.', a: 'Jorge Saykon', c: 'Gerente General, Granjas Bonanza' },
  { q: 'En una sola campaña generamos 75 reservas. El equipo entiende el negocio y los resultados hablan por sí solos.', a: 'Roberto', c: 'Gerente General, Hoteles Señor de Luren' },
];

export default function Home() {
  return (
    <main>
      <RevealController />

      {/* HERO */}
      <section id="top" style={{ background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div className="hk-hero" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(3rem,7vw,6rem) var(--gutter) clamp(3rem,6vw,5rem)', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' }}>
          <div>
            <Label>Agencia de performance · Ica, Perú</Label>
            <h1 style={{ font: 'var(--fw-bold) var(--fs-5xl)/0.98 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '20px 0 0' }}>
              No es lo<br />que ves<Dot size="0.42em" style={{ marginLeft: 6, verticalAlign: 'baseline' }} />
            </h1>
            <p style={{ font: 'var(--fw-light) var(--fs-md)/1.55 var(--font-body)', color: 'var(--text-body)', maxWidth: '46ch', margin: '22px 0 0' }}>
              Convertimos atención en ventas. Trabajamos el funnel completo —
              <strong style={{ fontWeight: 700 }}>lead</strong>,{' '}
              <strong style={{ fontWeight: 700 }}>cita</strong>,{' '}
              <strong style={{ fontWeight: 700 }}>cierre</strong>—, no métricas de vanidad.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
              <Btn as="a" href="#contacto" size="lg">Quiero más leads <ArrowRight size={18} /></Btn>
              <Btn as="a" href="#casos" variant="secondary" size="lg">Ver casos</Btn>
            </div>
          </div>
          <DualReveal shape={3} size={400} />
        </div>
        <TaglineStrip items={['No es lo que ves', 'Cada vez me siento mejor', 'Consigue lo posible haciendo lo imposible']} />
      </section>

      {/* PROOF BAR */}
      <section style={{ background: 'var(--black)', color: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(2.5rem,5vw,4rem) var(--gutter)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 34, flexWrap: 'wrap' }}>
            {['Lead', 'Cita', 'Cierre'].map((s, i) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                <span style={{ font: 'var(--fw-medium) var(--fs-lg)/1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: i === 2 ? 'var(--cyan)' : 'var(--white)' }}>{s}</span>
                {i < 2 && <ArrowRight size={18} style={{ color: 'var(--ink-400)' }} />}
              </span>
            ))}
            <span style={{ marginLeft: 'auto', font: 'var(--fw-light) var(--fs-sm)/1.4 var(--font-body)', color: 'var(--text-on-inverse-mut)', maxWidth: '34ch' }}>
              Medimos cada etapa del funnel. Reportamos lo que mueve el negocio.
            </span>
          </div>
          <div className="hk-stats hk-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)', borderTop: '1px solid var(--hairline-inverse)', paddingTop: 34 }}>
            <Stat value="S/350K" label="En ventas generadas (Inmobiliaria Ceinys)" />
            <Stat value="+350" label="Leads calificados en una sola campaña" />
            <Stat value="8" label="Lotes vendidos con S/3,000 de inversión" />
            <Stat value="7" label="Años convirtiendo atención en ventas" />
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <Section id="sectores" tone="dark">
        <div className="hk-rise" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <div>
            <Label tone="onDark">Sectores ancla</Label>
            <h2 style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.05 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', margin: '14px 0 0', maxWidth: '16ch' }}>
              Cada mercado tiene su perspectiva. Nosotros la entendemos.
            </h2>
          </div>
          <p style={{ font: 'var(--fw-light) var(--fs-md)/1.55 var(--font-body)', color: 'var(--text-on-inverse-mut)', maxWidth: '34ch' }}>
            Cuatro verticales donde leemos lo que otros no ven y lo convertimos en ventas medibles.
          </p>
        </div>
        <div className="hk-sectores hk-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
          {SECTORES.map((s) => (
            <a key={s.index} href="#contacto" className="hk-sector" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320, padding: 'var(--space-6)', background: 'var(--surface-inverse-2)', color: 'var(--white)', border: '1px solid var(--border-on-inverse)', borderRadius: 'var(--radius-md)', textDecoration: 'none', overflow: 'hidden', transition: 'border-color var(--dur-base) var(--ease-out)' }}>
              <div style={{ position: 'absolute', right: 18, top: 18, zIndex: 'var(--z-art)', pointerEvents: 'none' }}>
                <Blot shape={s.shape} dual reveal size={140} />
              </div>
              <span style={{ position: 'relative', font: 'var(--fw-bold) var(--fs-micro)/1 var(--font-accent)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-on-inverse-mut)' }}>{s.index}</span>
              <div style={{ position: 'relative' }}>
                <h3 style={{ font: 'var(--fw-medium) var(--fs-xl)/1.05 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)' }}>{s.title}</h3>
                <p style={{ font: 'var(--fw-light) var(--fs-sm)/1.5 var(--font-body)', color: 'var(--text-on-inverse-mut)', marginTop: 12, maxWidth: '26ch' }}>{s.result}</p>
                <span className="hk-sector-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, font: 'var(--fw-bold) var(--fs-xs)/1 var(--font-accent)', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--cyan)' }}>
                  Ver enfoque <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CASOS */}
      <Section id="casos" tone="light">
        <div className="hk-rise" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <div>
            <Label>Casos de éxito</Label>
            <h2 style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.05 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '14px 0 0', maxWidth: '18ch' }}>
              Resultados de negocio, no capturas de likes.
            </h2>
          </div>
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--fw-bold) var(--fs-sm)/1 var(--font-accent)', color: 'var(--text-strong)' }}>
            Hablemos de tu caso <ArrowRight size={16} />
          </a>
        </div>
        <div className="hk-casos hk-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
          {CASOS.map((c, i) => (
            <article key={i} className="hk-case" style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 18, transition: 'border-color var(--dur-base) var(--ease-out)', background: 'var(--white)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ font: 'var(--fw-bold) var(--fs-micro)/1 var(--font-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)' }}>{c.tag}</span>
                <Blot shape={c.shape} tint="orange" size={48} style={{ opacity: 0.9 }} />
              </div>
              <div style={{ font: 'var(--fw-bold) var(--fs-4xl)/0.95 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>
                {c.metric}{c.unit && <span style={{ color: 'var(--cyan)', fontSize: '0.42em', marginLeft: 3 }}>{c.unit}</span>}
              </div>
              <p style={{ font: 'var(--fw-light) var(--fs-sm)/1.55 var(--font-body)', color: 'var(--text-body)' }}>
                <strong style={{ fontWeight: 700, color: 'var(--text-strong)' }}>{c.title}.</strong> {c.note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* MÉTODO */}
      <section id="metodo" style={{ background: 'var(--black)', color: 'var(--white)', position: 'relative', overflow: 'hidden', padding: 'var(--section-y) 0' }}>
        <div aria-hidden className="hk-topo" style={{ position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', height: 360, color: 'var(--cyan)', opacity: 0.16, zIndex: 'var(--z-art)', pointerEvents: 'none', display: 'flex', width: '200%', animation: 'hk-topo-drift 40s linear infinite' }}>
          <img src="/assets/textures/topo.svg" alt="" style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
          <img src="/assets/textures/topo.svg" alt="" style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <Label tone="onDark">Método</Label>
          <h2 className="hk-rise" style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.05 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', margin: '14px 0 44px', maxWidth: '20ch' }}>
            Consigue lo posible haciendo lo imposible.
          </h2>
          <div className="hk-pasos hk-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {PASOS.map((p) => (
              <div key={p.n} style={{ borderTop: '2px solid var(--cyan)', paddingTop: 20 }}>
                <span style={{ font: 'var(--fw-bold) var(--fs-micro)/1 var(--font-accent)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-on-inverse-mut)' }}>{p.n}</span>
                <h3 style={{ font: 'var(--fw-medium) var(--fs-xl)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', margin: '12px 0 10px' }}>{p.t}</h3>
                <p style={{ font: 'var(--fw-light) var(--fs-sm)/1.55 var(--font-body)', color: 'var(--text-on-inverse-mut)' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERCEPCIÓN (interactivo) */}
      <Percepcion shape={1} />

      {/* SERVICIOS */}
      <Section id="servicios" tone="light">
        <div className="hk-serv hk-rise" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'start' }}>
          <div>
            <Label>Servicios</Label>
            <h2 style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.05 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '14px 0 0', maxWidth: '14ch' }}>
              Todo el funnel, bajo un mismo método.
            </h2>
            <p style={{ font: 'var(--fw-light) var(--fs-md)/1.55 var(--font-body)', color: 'var(--text-body)', marginTop: 18, maxWidth: '34ch' }}>
              No vendemos piezas sueltas. Operamos la máquina completa que convierte mercado en ventas.
            </p>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--hairline)' }}>
            {SERVICIOS.map(([t, d], i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 18, padding: '20px 0', borderBottom: '1px solid var(--hairline)' }}>
                <Dot size={9} style={{ marginTop: 9 }} />
                <div>
                  <h3 style={{ font: 'var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)', letterSpacing: 'var(--tracking-snug)', color: 'var(--text-strong)' }}>{t}</h3>
                  <p style={{ font: 'var(--fw-light) var(--fs-sm)/1.5 var(--font-body)', color: 'var(--text-muted)', marginTop: 4 }}>{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* POR QUÉ */}
      <Section id="porque" tone="light" style={{ background: 'var(--surface-raised)' }}>
        <div className="hk-rise">
          <Label>Por qué Suggestion</Label>
          <h2 style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.05 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '14px 0 40px', maxWidth: '20ch' }}>
            Leemos lo que otros no ven en tu mercado.
          </h2>
        </div>
        <div className="hk-porque hk-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
          {POR_QUE.map(([t, d], i) => (
            <div key={i} style={{ display: 'flex', gap: 18, padding: 'var(--space-6)', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ font: 'var(--fw-bold) var(--fs-lg)/1 var(--font-accent)', color: 'var(--cyan)' }}>0{i + 1}</span>
              <div>
                <h3 style={{ font: 'var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)', letterSpacing: 'var(--tracking-snug)', color: 'var(--text-strong)' }}>{t}</h3>
                <p style={{ font: 'var(--fw-light) var(--fs-sm)/1.55 var(--font-body)', color: 'var(--text-muted)', marginTop: 6 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIOS */}
      <Section id="testimonios" tone="dark">
        <Label tone="onDark">Testimonios</Label>
        <div className="hk-test hk-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginTop: 32 }}>
          {TESTIMONIOS.map((t, i) => (
            <figure key={i} style={{ margin: 0, padding: 'var(--space-7)', border: '1px solid var(--border-on-inverse)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 24 }}>
              <Dot size={10} />
              <blockquote style={{ margin: 0, font: 'var(--fw-light) var(--fs-lg)/1.4 var(--font-display)', letterSpacing: 'var(--tracking-snug)', color: 'var(--white)' }}>“{t.q}”</blockquote>
              <figcaption style={{ font: 'var(--fw-light) var(--fs-sm)/1.4 var(--font-body)', color: 'var(--text-on-inverse-mut)' }}>
                <strong style={{ fontWeight: 700, color: 'var(--white)' }}>{t.a}</strong> · {t.c}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section id="contacto" style={{ background: 'var(--black)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/textures/particles.png)', backgroundSize: '620px', opacity: 0.5, zIndex: 'var(--z-art)', pointerEvents: 'none' }} />
        <Blot shape={4} tint="orange" size={520} style={{ position: 'absolute', left: '-160px', bottom: '-160px', opacity: 0.12, zIndex: 'var(--z-art)', pointerEvents: 'none' }} />
        <div className="hk-cta" style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,4.5rem)', alignItems: 'center' }}>
          <div>
            <Label tone="onDark">Agenda una llamada</Label>
            <h2 style={{ font: 'var(--fw-bold) var(--fs-4xl)/0.98 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', margin: '16px 0 0', maxWidth: '14ch' }}>
              Convirtamos tu atención en ventas.
            </h2>
            <p style={{ font: 'var(--fw-light) var(--fs-md)/1.55 var(--font-body)', color: 'var(--text-on-inverse-mut)', marginTop: 20, maxWidth: '40ch' }}>
              Cuéntanos de tu negocio. Te respondemos con un diagnóstico honesto de tu funnel —sin humo, sin promesas de #1.
            </p>
            <div style={{ display: 'flex', gap: 26, marginTop: 30, flexWrap: 'wrap' }}>
              <a href="https://wa.me/51937770159" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--fw-light) var(--fs-sm) var(--font-body)', color: 'var(--white)' }}><Phone size={16} style={{ color: 'var(--cyan)' }} /> +51 937 770 159</a>
              <a href="mailto:hola@suggestion.pe" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--fw-light) var(--fs-sm) var(--font-body)', color: 'var(--white)' }}><Mail size={16} style={{ color: 'var(--cyan)' }} /> hola@suggestion.pe</a>
            </div>
          </div>
          <CtaForm />
        </div>
      </section>
    </main>
  );
}
