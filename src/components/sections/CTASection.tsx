'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const RorschachCTA = ({ className, color = '#FF8C00' }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" fill={color}>
    <path d="M200 40 C185 50, 160 55, 145 75 C130 95, 125 120, 130 145 C135 170, 150 185, 140 205 C130 225, 110 230, 105 250 C100 265, 115 275, 130 270 C145 265, 155 250, 165 240 C175 230, 185 225, 195 230 C198 231, 199 235, 200 238"/>
    <path d="M200 40 C215 50, 240 55, 255 75 C270 95, 275 120, 270 145 C265 170, 250 185, 260 205 C270 225, 290 230, 295 250 C300 265, 285 275, 270 270 C255 265, 245 250, 235 240 C225 230, 215 225, 205 230 C202 231, 201 235, 200 238"/>
    <ellipse cx="200" cy="155" rx="18" ry="35"/>
    <path d="M200 70 C190 60, 170 58, 158 65 C148 72, 145 85, 150 95 C155 105, 168 108, 178 105 C188 102, 195 92, 200 85"/>
    <path d="M200 70 C210 60, 230 58, 242 65 C252 72, 255 85, 250 95 C245 105, 232 108, 222 105 C212 102, 205 92, 200 85"/>
    <circle cx="170" cy="200" r="8"/><circle cx="230" cy="200" r="8"/>
    <circle cx="155" cy="245" r="5"/><circle cx="245" cy="245" r="5"/>
  </svg>
);

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="bg-black relative overflow-hidden" ref={ref}>
      {/* Rorschach decorativo — derecha */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[360px] h-[300px] opacity-[0.06] pointer-events-none">
        <RorschachCTA color="#FF8C00" className="w-full h-full" />
      </div>

      {/* Línea superior decorativa */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF8C00 40%, #00BFFF 60%, transparent)' }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start" ref={ref}>

          {/* Columna izquierda — texto */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-12 bg-white/20" />
              <span className="text-xs tracking-[0.25em] uppercase font-medium text-white/30" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Contacto
              </span>
            </motion.div>

            <motion.h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-white mb-8"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hablemos de tu{' '}
              <span style={{ color: '#FF8C00' }}>proyecto.</span>
            </motion.h2>

            <motion.p
              className="text-base text-white/40 mb-10 leading-relaxed max-w-sm"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              ¿Listo para transformar tu presencia digital? Cuéntanos sobre tu negocio.
            </motion.p>

            {/* Beneficios — lista limpia */}
            <motion.div
              className="space-y-4 mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {[
                { label: 'Consultoría gratuita de 30 min', accent: '#FF8C00' },
                { label: 'Propuesta personalizada en 48 h', accent: '#00BFFF' },
                { label: 'Sin compromiso de permanencia', accent: '#FF8C00' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: b.accent }} />
                  <span className="text-sm text-white/50" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Clientes */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex -space-x-2">
                {['MG', 'CR', 'AM', '+'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-white border border-black"
                    style={{ backgroundColor: i === 3 ? '#FF8C00' : '#333', fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-xs text-white/30" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                +150 clientes satisfechos
              </span>
            </motion.div>
          </div>

          {/* Columna derecha — formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-12 h-12 mb-6" style={{ color: '#FF8C00' }} />
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm text-white/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Nos pondremos en contacto contigo muy pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/30 mb-2 tracking-wider uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      Nombre *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#FF8C00] focus:ring-0 rounded-none h-12"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 mb-2 tracking-wider uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#FF8C00] focus:ring-0 rounded-none h-12"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/30 mb-2 tracking-wider uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Empresa
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#FF8C00] focus:ring-0 rounded-none h-12"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/30 mb-2 tracking-wider uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#FF8C00] focus:ring-0 rounded-none resize-none"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold text-black transition-all disabled:opacity-60 hover:opacity-90"
                  style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        <Loader2 className="w-4 h-4" />
                      </motion.div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
