import Link from 'next/link';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import { Dot } from '@/components/brand/parts';

const cols: [string, [string, string][]][] = [
  ['Agencia', [['Sectores', '/#sectores'], ['Casos', '/#casos'], ['Método', '/#metodo'], ['Servicios', '/#servicios']]],
  ['Sectores', [['Inmobiliario', '/#sectores'], ['Automotriz', '/#sectores'], ['Turismo', '/#sectores'], ['Marcas & consumo', '/#sectores']]],
  ['Contacto', [['hola@suggestion.pe', 'mailto:hola@suggestion.pe'], ['+51 937 770 159', 'https://wa.me/51937770159'], ['Agenda una llamada', '/#contacto']]],
];

const socials: [string, typeof Instagram, string][] = [
  ['Instagram', Instagram, 'https://www.instagram.com/suggestion.mkt/'],
  ['Facebook', Facebook, 'https://www.facebook.com/Suggestion.mk'],
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', color: 'var(--white)', borderTop: '1px solid var(--hairline-inverse)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y-tight) var(--gutter)' }}>
        <div className="hk-foot" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 'var(--space-6)' }}>
          <div>
            <img src="/assets/logos/suggestion-logo-white.png" alt="Suggestion" style={{ height: 24, width: 'auto' }} />
            <p style={{ font: 'var(--fw-light) var(--fs-sm)/1.55 var(--font-body)', color: 'var(--text-on-inverse-mut)', marginTop: 18, maxWidth: '30ch' }}>
              Agencia de marketing de performance. Convertimos atención en ventas.
            </p>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: 10, font: 'var(--fw-light) var(--fs-sm)/1.5 var(--font-body)', color: 'var(--text-on-inverse-mut)', marginTop: 18 }}>
              <MapPin size={16} style={{ color: 'var(--cyan)', marginTop: 2, flexShrink: 0 }} />
              <span>Ica, Perú · Atención a todo el país</span>
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
              {socials.map(([name, Icon, href]) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                  style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', border: '1px solid var(--border-on-inverse)', borderRadius: 'var(--radius-sm)', color: 'var(--white)' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <nav key={h} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ font: 'var(--fw-bold) var(--fs-micro)/1 var(--font-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-on-inverse-mut)' }}>{h}</span>
              {items.map(([t, href]) => (
                <Link key={t} href={href} style={{ font: 'var(--fw-light) var(--fs-sm)/1.3 var(--font-body)', color: 'var(--white)' }}>{t}</Link>
              ))}
            </nav>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--hairline-inverse)', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--fw-light) var(--fs-xs)/1 var(--font-body)', color: 'var(--text-on-inverse-mut)' }}>
            <Dot size={6} /> No es lo que ves.
          </span>
          <span style={{ font: 'var(--fw-light) var(--fs-xs)/1 var(--font-body)', color: 'var(--text-on-inverse-mut)' }}>© {new Date().getFullYear()} Suggestion · Marketing de performance en Ica, Perú</span>
        </div>
      </div>
    </footer>
  );
}
