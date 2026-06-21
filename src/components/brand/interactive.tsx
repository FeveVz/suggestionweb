'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Label, Btn, Blot } from './parts';

const BLOT = (shape: number, tint: 'orange' | 'cyan') => `/assets/blots/blot-${shape}-${tint}.png`;
const WHATSAPP = '51937770159';

export function usePrefersReduced() {
  const [r, setR] = React.useState(false);
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const f = () => setR(m.matches);
    f();
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);
  return r;
}

/* Scroll-reveal: revela los .reveal según el scroll. Re-escanea en cada cambio
   de ruta (usePathname) para que la navegación SPA no deje secciones ocultas. */
export function RevealController() {
  const pathname = usePathname();
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const start = vh * 0.92; // empieza a entrar
        const end = vh * 0.5;    // completamente revelado al llegar al centro
        for (const el of els) {
          const r = el.getBoundingClientRect();
          let p = (start - r.top) / (start - end);
          p = p < 0 ? 0 : p > 1 ? 1 : p;
          const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
          el.style.opacity = String(e);
          el.style.transform = `translateY(${((1 - e) * 52).toFixed(1)}px) scale(${(0.985 + 0.015 * e).toFixed(4)})`;
        }
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);
  return null;
}

/* ============================================================
   DualReveal — la pieza estrella. La mancha es naranja
   ("lo que el mercado ve") y se revela en cian ("lo que vemos
   nosotros") al arrastrar la costura. Idle: barre sola.
   ============================================================ */
export function DualReveal({ shape = 3, size = 400 }: { shape?: number; size?: number }) {
  const [pct, setPct] = React.useState(52);
  const [touched, setTouched] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = usePrefersReduced();

  React.useEffect(() => {
    if (touched || reduce) {
      if (reduce) setPct(50);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      setPct(50 + Math.sin((t - t0) / 1100) * 24);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [touched, reduce]);

  const setFromX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(5, Math.min(95, p)));
  };

  const start = (e: React.MouseEvent | React.TouchEvent) => {
    setTouched(true);
    const move = (ev: MouseEvent | TouchEvent) => {
      const cx = 'touches' in ev ? ev.touches[0].clientX : (ev as MouseEvent).clientX;
      setFromX(cx);
    };
    const end = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', end);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', end);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('touchend', end);
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setFromX(cx);
  };

  const marketWins = pct > 55;
  const usWins = pct < 45;

  return (
    <figure className="hk-hero-art" style={{ margin: 0, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%' }}>
      <div
        ref={ref}
        onMouseDown={start}
        onTouchStart={start}
        style={{ position: 'relative', width: '100%', maxWidth: size, aspectRatio: '1.35', cursor: 'ew-resize', touchAction: 'none', userSelect: 'none' }}
      >
        <img src={BLOT(shape, 'orange')} alt="" draggable={false} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
        <img src={BLOT(shape, 'cyan')} alt="" draggable={false} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', clipPath: `inset(0 0 0 ${pct}%)` }} />
        <div style={{ position: 'absolute', top: '-6%', bottom: '-6%', left: `${pct}%`, width: 2, background: 'linear-gradient(var(--orange), var(--cyan))', transform: 'translateX(-1px)' }}>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 38, height: 38, borderRadius: '50%', background: 'var(--black)', border: '1px solid var(--white)', display: 'grid', placeItems: 'center', boxShadow: '0 4px 18px rgba(0,0,0,.45)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 7-5 5 5 5" /><path d="m15 7 5 5-5 5" /></svg>
          </span>
        </div>
      </div>
      <figcaption style={{ display: 'flex', gap: 26, font: 'var(--fw-bold) var(--fs-micro)/1 var(--font-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>
        <span style={{ color: 'var(--orange)', opacity: marketWins ? 1 : 0.45, transition: 'opacity var(--dur-base)' }}>Lo que el mercado ve</span>
        <span style={{ color: 'var(--cyan)', opacity: usWins ? 1 : 0.45, transition: 'opacity var(--dur-base)' }}>Lo que vemos nosotros</span>
      </figcaption>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--fw-light) var(--fs-xs) var(--font-body)', color: 'var(--text-muted)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 8 4 4-4 4" /><path d="M2 12h20" /><path d="m6 8-4 4 4 4" /></svg>
        {touched ? 'Esto es lo que cambia un buen marketing.' : 'Arrastra y descúbrelo.'}
      </span>
    </figure>
  );
}

/* ============================================================
   Percepcion — "¿Qué ves en esta mancha?" reencuadrado a venta
   ============================================================ */
export function Percepcion({ shape = 1 }: { shape?: number }) {
  const opciones = ['Dos figuras', 'Un rostro', 'Una mariposa', 'No estoy seguro'];
  const [pick, setPick] = React.useState<string | null>(null);
  return (
    <section id="percepcion" style={{ background: 'var(--black)', color: 'var(--white)', padding: 'var(--section-y) 0', position: 'relative', overflow: 'hidden' }}>
      <div className="hk-perc" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,4.5rem)', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'grid', placeItems: 'center', minHeight: 300 }}>
          {!pick
            ? <img src={BLOT(shape, 'orange')} alt="Símbolo de percepción" style={{ width: 300, maxWidth: '80%', gridArea: '1 / 1' }} />
            : <img src={BLOT(shape, 'cyan')} alt="" className="hk-fadein" style={{ width: 300, maxWidth: '80%', gridArea: '1 / 1' }} />}
        </div>
        <div>
          <Label tone="onDark" dot>Símbolo de percepción</Label>
          {!pick ? (
            <>
              <h2 style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.04 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', margin: '14px 0 0', maxWidth: '16ch' }}>
                ¿Qué ves en esta mancha?
              </h2>
              <p style={{ font: 'var(--fw-light) var(--fs-md)/1.55 var(--font-body)', color: 'var(--text-on-inverse-mut)', margin: '18px 0 26px', maxWidth: '38ch' }}>
                No hay respuesta correcta. Esa es justo la idea: cada persona ve algo distinto.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {opciones.map((o) => (
                  <button key={o} onClick={() => setPick(o)} className="hk-chip" style={{ font: 'var(--fw-medium) var(--fs-sm)/1 var(--font-body)', color: 'var(--white)', background: 'transparent', border: '1px solid var(--border-on-inverse)', borderRadius: 'var(--radius-md)', padding: '12px 20px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)' }}>
                    {o}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 style={{ font: 'var(--fw-bold) var(--fs-3xl)/1.04 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', margin: '14px 0 0', maxWidth: '18ch' }}>
                Tú ves <span style={{ color: 'var(--cyan)' }}>“{pick.toLowerCase()}”</span>. Tu cliente ve otra cosa.
              </h2>
              <p style={{ font: 'var(--fw-light) var(--fs-md)/1.55 var(--font-body)', color: 'var(--text-on-inverse-mut)', margin: '18px 0 26px', maxWidth: '40ch' }}>
                Ese es nuestro trabajo: leer lo que tu público percibe y moldear lo que termina viendo —hasta que decide comprarte.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Btn as="a" href="#contacto" variant="insight" size="md">Quiero esa lectura de mi mercado</Btn>
                <button onClick={() => setPick(null)} className="hk-chip" style={{ font: 'var(--fw-medium) var(--fs-sm)/1 var(--font-body)', color: 'var(--white)', background: 'transparent', border: '1px solid var(--border-on-inverse)', borderRadius: 'var(--radius-md)', padding: '12px 20px', cursor: 'pointer' }}>
                  Probar de nuevo
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Formulario de contacto → WhatsApp
   ============================================================ */
function Field({ label, name, type = 'text', textarea = false, required = false, placeholder, style }: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean; placeholder?: string; style?: React.CSSProperties }) {
  const common = {
    name, required, placeholder,
    className: 'hk-input',
    style: {
      font: 'var(--fw-light) var(--fs-base)/1.4 var(--font-body)', color: 'var(--white)', background: 'var(--ink-800)',
      border: '1px solid var(--border-on-inverse)', borderRadius: 'var(--radius-sm)', padding: '13px 16px', outline: 'none', width: '100%',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    } as React.CSSProperties,
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <span style={{ font: 'var(--fw-medium) var(--fs-sm)/1 var(--font-body)', color: 'var(--white)' }}>{label}</span>
      {textarea
        ? <textarea rows={4} {...common} style={{ ...common.style, resize: 'vertical' }} />
        : <input type={type} {...common} />}
    </label>
  );
}

export function CtaForm() {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Hola Suggestion, soy ${f.get('nombre') || ''}.`,
      f.get('negocio') ? `Negocio: ${f.get('negocio')}` : null,
      f.get('email') ? `Email: ${f.get('email')}` : null,
      '',
      (f.get('objetivo') as string) || 'Quiero más leads / citas / cierres.',
    ].filter((l) => l !== null);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return (
    <form onSubmit={onSubmit} className="hk-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
      <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
      <Field label="Negocio" name="negocio" placeholder="Empresa / rubro" />
      <Field label="Email" name="email" type="email" placeholder="hola@tunegocio.com" required style={{ gridColumn: '1 / -1' }} />
      <div style={{ gridColumn: '1 / -1' }}>
        <Field label="¿Qué quieres lograr?" name="objetivo" textarea placeholder="Vendo… y necesito más citas / leads / cierres." />
      </div>
      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <Btn type="submit" variant="insight" size="lg">{sent ? '¡Abriendo WhatsApp!' : 'Enviar por WhatsApp'}</Btn>
        <span style={{ font: 'var(--fw-light) var(--fs-xs)/1.4 var(--font-body)', color: 'var(--text-on-inverse-mut)' }}>Respondemos en menos de 24 h hábiles.</span>
      </div>
    </form>
  );
}
