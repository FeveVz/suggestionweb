'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  TrendingUp, Share2, Target, Search, Palette, Code,
  Lightbulb, Zap, Video, BarChart3,
  ShoppingBag, Printer, PanelTop, Truck, Sparkles, Package
} from 'lucide-react';

const RorschachMini = ({ className, color = '#FF8C00' }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" fill={color}>
    <path d="M200 40 C185 50, 160 55, 145 75 C130 95, 125 120, 130 145 C135 170, 150 185, 140 205 C130 225, 110 230, 105 250 C100 265, 115 275, 130 270 C145 265, 155 250, 165 240 C175 230, 185 225, 195 230 C198 231, 199 235, 200 238"/>
    <path d="M200 40 C215 50, 240 55, 255 75 C270 95, 275 120, 270 145 C265 170, 250 185, 260 205 C270 225, 290 230, 295 250 C300 265, 285 275, 270 270 C255 265, 245 250, 235 240 C225 230, 215 225, 205 230 C202 231, 201 235, 200 238"/>
    <ellipse cx="200" cy="155" rx="18" ry="35"/>
    <path d="M200 70 C190 60, 170 58, 158 65 C148 72, 145 85, 150 95 C155 105, 168 108, 178 105 C188 102, 195 92, 200 85"/>
    <path d="M200 70 C210 60, 230 58, 242 65 C252 72, 255 85, 250 95 C245 105, 232 108, 222 105 C212 102, 205 92, 200 85"/>
    <circle cx="170" cy="200" r="8"/><circle cx="230" cy="200" r="8"/>
  </svg>
);

const serviciosPrincipales = [
  { icon: TrendingUp, title: 'Marketing Digital', description: 'Estrategias que transforman presencia en resultados.', href: '/servicios/marketing-digital' },
  { icon: Share2, title: 'Redes Sociales', description: 'Conexión auténtica con tu audiencia.', href: '/servicios/marketing-redes-sociales' },
  { icon: Target, title: 'Publicidad Digital', description: 'Campañas con ROI medible y optimización continua.', href: '/servicios/publicidad-digital' },
  { icon: Search, title: 'SEO', description: 'Visibilidad orgánica cuando te buscan.', href: '/servicios/seo-posicionamiento' },
  { icon: Palette, title: 'Branding', description: 'Identidad que deja huella en tu audiencia.', href: '/servicios/branding-diseno' },
  { icon: Code, title: 'Desarrollo Web', description: 'Sitios que convierten visitantes en clientes.', href: '/servicios/desarrollo-web' },
  { icon: Lightbulb, title: 'Consultoría', description: 'Asesoría estratégica personalizada.', href: '/servicios/consultoria-marketing' },
  { icon: Zap, title: 'CRM y Automatización', description: 'Automatiza y escala tu negocio.', href: '/servicios/crm-automatizacion' },
  { icon: Video, title: 'Producción Audiovisual', description: 'Contenido visual de alto impacto.', href: '/servicios/produccion-audiovisual' },
  { icon: BarChart3, title: 'Investigación de Mercado', description: 'Datos que guían decisiones clave.', href: '/servicios/investigacion-mercado' },
];

const serviciosComplementarios = [
  { icon: ShoppingBag, title: 'Merchandising', href: '/servicios/merchandising' },
  { icon: Printer, title: 'Imprenta Corporativa', href: '/servicios/imprenta-corporativa' },
  { icon: PanelTop, title: 'Estructuras Publicitarias', href: '/servicios/estructuras-publicitarias' },
  { icon: Truck, title: 'Publicidad Móvil', href: '/servicios/publicidad-movil' },
  { icon: Sparkles, title: 'BTL y Activaciones', href: '/servicios/btl-activaciones' },
  { icon: Package, title: 'Material POP', href: '/servicios/material-pop' },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="bg-white relative overflow-hidden" ref={ref}>
      {/* Rorschach decorativo — esquina derecha */}
      <div className="absolute right-0 top-0 w-[320px] h-[260px] opacity-[0.04] pointer-events-none">
        <RorschachMini color="#000000" className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">
        {/* Header editorial */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-black" />
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-black/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Nuestros Servicios
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-black max-w-2xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Soluciones que{' '}
              <span style={{ color: '#FF8C00' }}>transforman.</span>
            </motion.h2>

            <motion.p
              className="text-base text-black/50 max-w-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Un ecosistema completo de marketing digital diseñado para impulsar tu negocio.
            </motion.p>
          </div>
        </div>

        {/* Grid servicios principales */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/8">
            {serviciosPrincipales.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={service.href} className="block group bg-white hover:bg-black transition-colors duration-300 p-6 h-full">
                  <div className="flex flex-col h-full min-h-[160px]">
                    {/* Número editorial */}
                    <span
                      className="text-[10px] tracking-[0.2em] text-black/20 group-hover:text-white/20 transition-colors mb-4 font-mono"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="mb-4">
                      <service.icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: index % 2 === 0 ? '#FF8C00' : '#00BFFF' }}
                      />
                    </div>

                    {/* Texto */}
                    <div className="mt-auto">
                      <h3
                        className="text-sm font-bold text-black group-hover:text-white transition-colors mb-2 leading-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-xs text-black/50 group-hover:text-white/50 transition-colors leading-relaxed"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separador con label */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-black/30 font-medium" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Servicios Complementarios
          </span>
          <div className="h-px flex-1 bg-black/10" />
        </motion.div>

        {/* Servicios complementarios — lista horizontal */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          {serviciosComplementarios.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex items-center gap-2.5 p-3 border border-black/8 hover:border-black/30 hover:bg-black/2 transition-all group"
            >
              <service.icon className="w-4 h-4 text-black/30 group-hover:text-black/60 transition-colors flex-shrink-0" />
              <span
                className="text-xs font-medium text-black/50 group-hover:text-black transition-colors"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {service.title}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 pt-10 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-black/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            ¿No sabes qué necesitas? Hablemos.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-[#FF8C00] group"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Consultoría gratuita
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
