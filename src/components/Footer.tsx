'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const servicios = [
  { name: 'Marketing Digital', href: '/servicios/marketing-digital' },
  { name: 'Redes Sociales', href: '/servicios/marketing-redes-sociales' },
  { name: 'Publicidad Digital', href: '/servicios/publicidad-digital' },
  { name: 'SEO', href: '/servicios/seo-posicionamiento' },
  { name: 'Branding', href: '/servicios/branding-diseno' },
  { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
];

const empresa = [
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '#contacto' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="bg-black text-white relative overflow-hidden" ref={ref}>
      {/* Línea superior */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #FF8C00 40%, #00BFFF 60%, transparent)' }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Main content */}
        <div className="py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span className="text-white">Suggest</span>
                <span className="relative inline-block">
                  <span className="text-white">i</span>
                  <span
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#00BFFF' }}
                  />
                </span>
                <span className="text-white">on</span>
              </span>
            </Link>

            <p
              className="text-sm text-white/30 leading-relaxed max-w-xs mb-8"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Agencia de marketing digital que transforma tu presencia en resultados. Consigue lo posible haciendo lo imposible.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-white/40 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  aria-label={s.name}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-5 font-medium"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Servicios
            </h4>
            <ul className="space-y-3">
              {servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4
              className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-5 font-medium"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Empresa
            </h4>
            <ul className="space-y-3">
              {empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-5 font-medium"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                <a href="mailto:hola@suggestion.pe" className="text-sm text-white/40 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  hola@suggestion.pe
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                <a href="tel:+51937770159" className="text-sm text-white/40 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  +51 937 770 159
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Lima, Perú
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p
            className="text-xs text-white/20 text-center sm:text-left"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            © {new Date().getFullYear()} Suggestion. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Privacidad
            </Link>
            <Link
              href="#"
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Términos
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
