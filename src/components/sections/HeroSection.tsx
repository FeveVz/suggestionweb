'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const RorschachBlot = ({ className, color = '#FF8C00' }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" fill={color}>
    <path d="M200 40 C185 50, 160 55, 145 75 C130 95, 125 120, 130 145 C135 170, 150 185, 140 205 C130 225, 110 230, 105 250 C100 265, 115 275, 130 270 C145 265, 155 250, 165 240 C175 230, 185 225, 195 230 C198 231, 199 235, 200 238"/>
    <path d="M200 40 C215 50, 240 55, 255 75 C270 95, 275 120, 270 145 C265 170, 250 185, 260 205 C270 225, 290 230, 295 250 C300 265, 285 275, 270 270 C255 265, 245 250, 235 240 C225 230, 215 225, 205 230 C202 231, 201 235, 200 238"/>
    <ellipse cx="200" cy="155" rx="18" ry="35"/>
    <path d="M200 70 C190 60, 170 58, 158 65 C148 72, 145 85, 150 95 C155 105, 168 108, 178 105 C188 102, 195 92, 200 85"/>
    <path d="M200 70 C210 60, 230 58, 242 65 C252 72, 255 85, 250 95 C245 105, 232 108, 222 105 C212 102, 205 92, 200 85"/>
    <circle cx="170" cy="200" r="8"/><circle cx="230" cy="200" r="8"/>
    <circle cx="155" cy="245" r="5"/><circle cx="245" cy="245" r="5"/>
    <ellipse cx="178" cy="52" rx="7" ry="5" transform="rotate(-20 178 52)"/>
    <ellipse cx="222" cy="52" rx="7" ry="5" transform="rotate(20 222 52)"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row">

      {/* LEFT: Panel negro con contenido */}
      <div className="flex-1 bg-black flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-28 lg:pt-0 pb-16 relative z-10">

        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-px w-6" style={{ backgroundColor: '#00BFFF' }} />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: '#00BFFF', fontFamily: 'var(--font-dm-sans)' }}
          >
            Agencia de Marketing Digital
          </span>
        </motion.div>

        {/* H1 — keyword principal + beneficio (SEO + conversión) */}
        <motion.h1
          className="text-[clamp(2.8rem,8vw,8rem)] font-black leading-[0.82] tracking-tight text-white uppercase"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          MARKETING<br />
          DIGITAL QUE<br />
          GENERA <span style={{ color: '#FF8C00' }}>CLIENTES.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-white/70 mt-8 max-w-md leading-relaxed"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Gestionamos tus redes sociales, diseñamos campañas publicitarias y posicionamos tu negocio en Google. <strong className="text-white font-semibold">Resultados reales, no promesas.</strong>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <Link
            href="#contacto"
            className="px-8 py-4 text-sm font-black text-black uppercase tracking-widest hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-space-grotesk)' }}
          >
            HABLEMOS
          </Link>
          <Link
            href="#servicios"
            className="px-8 py-4 text-sm text-white uppercase tracking-wider border border-white/20 hover:border-white/60 transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            VER SERVICIOS
          </Link>
        </motion.div>

        {/* Micro-señales de confianza */}
        <motion.div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-xs text-white/45"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {['Consultoría gratuita', 'Respuesta en 24 h', 'Sin permanencia'].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/25" />}
              {item}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-10 mt-16 pt-10 border-t border-white/8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          {[
            { value: '+50', label: 'Clientes' },
            { value: '7', label: 'Años' },
            { value: '+350', label: 'Leads' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl font-black text-white"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {s.value}
              </div>
              <div
                className="text-[10px] text-white/50 uppercase tracking-wider mt-1"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT: Panel naranja — la otra cara de lo posible */}
      <motion.div
        className="hidden lg:flex w-[40%] xl:w-[42%] relative overflow-hidden"
        style={{ backgroundColor: '#FF8C00' }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Rorschach — negro sobre naranja */}
        <RorschachBlot
          color="#000000"
          className="absolute w-[115%] h-[80%] top-1/2 -translate-y-1/2 -left-[10%] opacity-[0.13]"
        />

        {/* Texto vertical */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
          <span
            className="text-black/35 text-[10px] tracking-[0.35em] uppercase font-bold whitespace-nowrap"
            style={{ fontFamily: 'var(--font-space-grotesk)', writingMode: 'vertical-rl' }}
          >
            Consigue lo posible haciendo lo imposible
          </span>
        </div>

        {/* Brand mark inferior */}
        <div className="absolute bottom-10 left-10 z-10">
          <span
            className="text-black/25 text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Suggestion
          </span>
        </div>
      </motion.div>

      {/* Mobile: franja naranja inferior */}
      <motion.div
        className="lg:hidden h-3"
        style={{ backgroundColor: '#FF8C00' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: 'easeOut' }}
      />
    </section>
  );
}
