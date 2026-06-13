import React from 'react';

/* ============================================================
   Primitivas de marca Suggestion (presentacionales)
   ============================================================ */

const BLOT = (shape: number, tint: 'orange' | 'cyan') =>
  `/assets/blots/blot-${shape}-${tint}.png`;

export function Dot({ size = 8, color = 'var(--orange)', style }: { size?: number | string; color?: string; style?: React.CSSProperties }) {
  return <span aria-hidden style={{ display: 'inline-block', width: size, height: size, borderRadius: '50%', background: color, ...style }} />;
}

export function Label({ children, tone = 'light', dot = false, style }: { children: React.ReactNode; tone?: 'light' | 'onDark'; dot?: boolean; style?: React.CSSProperties }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--type-label)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: tone === 'onDark' ? 'var(--text-on-inverse-mut)' : 'var(--text-muted)', ...style }}>
      {dot && <Dot size={6} color="var(--cyan)" />}
      {children}
    </span>
  );
}

type BtnVariant = 'primary' | 'secondary' | 'onDark' | 'insight' | 'ghostDark';
type BtnSize = 'sm' | 'md' | 'lg';

const btnPad: Record<BtnSize, string> = { sm: '10px 16px', md: '13px 22px', lg: '16px 28px' };
const btnFs: Record<BtnSize, string> = { sm: 'var(--fs-xs)', md: 'var(--fs-sm)', lg: 'var(--fs-base)' };

export function Btn({
  children, variant = 'primary', size = 'md', as = 'button', href, full = false, style, ...rest
}: {
  children: React.ReactNode; variant?: BtnVariant; size?: BtnSize; as?: 'a' | 'button'; href?: string; full?: boolean; style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    width: full ? '100%' : undefined,
    fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: btnFs[size], lineHeight: 1,
    letterSpacing: 'var(--tracking-snug)', whiteSpace: 'nowrap',
    padding: btnPad[size], borderRadius: 'var(--radius-md)', textDecoration: 'none',
    cursor: 'pointer', border: '1px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
  };
  const variants: Record<BtnVariant, React.CSSProperties> = {
    primary: { background: 'var(--black)', color: 'var(--white)', borderColor: 'var(--black)' },
    secondary: { background: 'transparent', color: 'var(--text-strong)', borderColor: 'var(--border-strong)' },
    onDark: { background: 'var(--white)', color: 'var(--black)', borderColor: 'var(--white)' },
    insight: { background: 'var(--cyan)', color: 'var(--black)', borderColor: 'var(--cyan)' },
    ghostDark: { background: 'transparent', color: 'var(--white)', borderColor: 'var(--border-on-inverse)' },
  };
  const cls = `hk-btn hk-btn--${variant}`;
  const finalStyle = { ...base, ...variants[variant], ...style };
  if (as === 'a') {
    return <a className={cls} href={href} style={finalStyle} {...rest}>{children}</a>;
  }
  return <button className={cls} style={finalStyle} {...rest}>{children}</button>;
}

export function Blot({
  shape = 1, tint = 'orange', dual = false, reveal = false, size = 160, className = '', style,
}: { shape?: number; tint?: 'orange' | 'cyan'; dual?: boolean; reveal?: boolean; size?: number | string; className?: string; style?: React.CSSProperties }) {
  if (!dual) {
    return (
      <span className={className} style={{ display: 'inline-block', width: size, lineHeight: 0, ...style }}>
        <img src={BLOT(shape, tint)} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </span>
    );
  }
  return (
    <span className={className} aria-hidden="true" style={{ position: 'relative', display: 'inline-block', width: size, lineHeight: 0, ...style }}>
      <img src={BLOT(shape, 'orange')} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <img
        src={BLOT(shape, 'cyan')} alt="" data-reveal={reveal ? '' : undefined}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', display: 'block', clipPath: 'inset(0 0 0 50%)', opacity: reveal ? 0 : 1, transition: 'opacity var(--dur-slow) var(--ease-out)' }}
      />
    </span>
  );
}

export function Stat({ value, unit = '', label, tone = 'onDark' }: { value: string; unit?: string; label: string; tone?: 'onDark' | 'light' }) {
  const dark = tone === 'onDark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ font: 'var(--fw-bold) var(--fs-4xl)/0.95 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: dark ? 'var(--white)' : 'var(--text-strong)' }}>
        {value}{unit && <span style={{ color: 'var(--cyan)', fontSize: '0.5em', marginLeft: 2 }}>{unit}</span>}
      </div>
      <div style={{ font: 'var(--fw-light) var(--fs-sm)/1.45 var(--font-body)', color: dark ? 'var(--text-on-inverse-mut)' : 'var(--text-muted)', maxWidth: '20ch' }}>{label}</div>
    </div>
  );
}

export function Section({ id, tone = 'light', children, style }: { id?: string; tone?: 'light' | 'dark'; children: React.ReactNode; style?: React.CSSProperties }) {
  const dark = tone === 'dark';
  return (
    <section id={id} style={{ background: dark ? 'var(--black)' : 'var(--white)', color: dark ? 'var(--white)' : 'var(--text-body)', padding: 'var(--section-y) 0', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>{children}</div>
    </section>
  );
}

export function TaglineStrip({ items, tone = 'dark', duration = 30 }: { items: string[]; tone?: 'dark' | 'light'; duration?: number }) {
  const dark = tone === 'dark';
  const doubled = [...items, ...items];
  const line = dark ? 'var(--hairline-inverse)' : 'var(--hairline)';
  return (
    <div style={{ overflow: 'hidden', background: dark ? 'var(--black)' : 'var(--white)', borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
      <div className="hk-marquee" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-6)', whiteSpace: 'nowrap', padding: '16px 0', animation: `hk-marquee ${duration}s linear infinite`, willChange: 'transform' }}>
        {doubled.map((t, k) => (
          <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            <span style={{ font: 'var(--fw-medium) var(--fs-lg)/1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: dark ? 'var(--white)' : 'var(--text-strong)' }}>{t}</span>
            <Dot size={9} />
          </span>
        ))}
      </div>
    </div>
  );
}
