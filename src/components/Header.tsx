'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Btn } from '@/components/brand/parts';

const links: [string, string][] = [
  ['Sectores', '/#sectores'],
  ['Casos', '/#casos'],
  ['Método', '/#metodo'],
  ['Servicios', '/#servicios'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.86)', backdropFilter: 'saturate(180%) blur(12px)', WebkitBackdropFilter: 'saturate(180%) blur(12px)', borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" aria-label="Suggestion — inicio" style={{ display: 'flex' }}>
          <img src="/assets/logos/suggestion-logo-black.png" alt="Suggestion" style={{ height: 22, width: 'auto' }} />
        </Link>

        <nav className="hk-nav" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(([t, href]) => (
            <Link key={href} href={href} style={{ font: 'var(--fw-medium) var(--fs-sm)/1 var(--font-body)', color: 'var(--text-strong)' }}>{t}</Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="hk-nav" style={{ display: 'flex' }}>
            <Btn as="a" href="/#contacto" size="sm">Agenda una llamada</Btn>
          </span>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            style={{ display: 'none', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-strong)' }}
            className="hk-burger"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--hairline)', background: 'var(--white)', padding: '12px var(--gutter) 20px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(([t, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} style={{ font: 'var(--fw-medium) var(--fs-md)/1 var(--font-body)', color: 'var(--text-strong)', padding: '12px 0', borderBottom: '1px solid var(--hairline)' }}>{t}</Link>
            ))}
            <Link href="/nosotros" onClick={() => setOpen(false)} style={{ font: 'var(--fw-medium) var(--fs-md)/1 var(--font-body)', color: 'var(--text-strong)', padding: '12px 0', borderBottom: '1px solid var(--hairline)' }}>Nosotros</Link>
            <div style={{ marginTop: 14 }}>
              <Btn as="a" href="/#contacto" size="md" full>Agenda una llamada</Btn>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .hk-burger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
