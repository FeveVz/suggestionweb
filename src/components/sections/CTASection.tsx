'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255, 102, 0, 0.1)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(0, 191, 255, 0.08)' }}
          animate={{ 
            scale: [1.3, 1, 1.3],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px sm:[40px_40px]'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div className="text-white px-2 sm:px-0" variants={itemVariants}>
            <motion.span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF6600', fontFamily: 'var(--font-inter)' }}
            >
              Contacto
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Hablemos de tu{' '}
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(90deg, #FF6600, #00BFFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Proyecto
              </span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ¿Listo para transformar tu presencia digital? Cuéntanos sobre tu negocio 
              y descubre cómo podemos ayudarte.
            </motion.p>

            {/* Benefits */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
            >
              {[
                'Consultoría gratuita de 30 minutos',
                'Propuesta personalizada en 48 horas',
                'Sin compromiso de permanencia',
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#00BFFF' }} />
                  </motion.div>
                  <span 
                    className="text-sm sm:text-base text-gray-300"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative element - hidden on mobile */}
            <motion.div 
              className="mt-8 sm:mt-10 lg:mt-12 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['M', 'C', 'A', '+'].map((letter, i) => (
                    <motion.div
                      key={i}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 border-black"
                      style={{ 
                        backgroundColor: i === 3 ? '#FF6600' : '#333',
                        color: 'white',
                        fontFamily: 'var(--font-montserrat)'
                      }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    >
                      {letter}
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>
                  +150 clientes satisfechos
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div variants={itemVariants} className="px-2 sm:px-0">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8 relative">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, #FF6600, #00BFFF, #FF6600)',
                    backgroundSize: '200% 100%',
                    opacity: 0.3,
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-8 sm:py-10 relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      ¡Mensaje Enviado!
                    </motion.h3>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-400"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Nos pondremos en contacto contigo muy pronto.
                    </motion.p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                      >
                        <label 
                          className="block text-xs sm:text-sm text-gray-400 mb-2"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          Nombre *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className="bg-white/5 border-white/10 text-white text-sm sm:text-base placeholder:text-gray-500 focus:border-[#FF6600] focus:ring-[#FF6600] transition-all duration-300 min-h-[44px]"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.35 }}
                      >
                        <label 
                          className="block text-xs sm:text-sm text-gray-400 mb-2"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="bg-white/5 border-white/10 text-white text-sm sm:text-base placeholder:text-gray-500 focus:border-[#FF6600] focus:ring-[#FF6600] transition-all duration-300 min-h-[44px]"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <label 
                        className="block text-xs sm:text-sm text-gray-400 mb-2"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        Empresa
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className="bg-white/5 border-white/10 text-white text-sm sm:text-base placeholder:text-gray-500 focus:border-[#FF6600] focus:ring-[#FF6600] transition-all duration-300 min-h-[44px]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.45 }}
                    >
                      <label 
                        className="block text-xs sm:text-sm text-gray-400 mb-2"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        Mensaje *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        required
                        rows={4}
                        className="bg-white/5 border-white/10 text-white text-sm sm:text-base placeholder:text-gray-500 focus:border-[#FF6600] focus:ring-[#FF6600] resize-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-white font-semibold py-5 sm:py-6 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 relative overflow-hidden group text-sm sm:text-base min-h-[52px]"
                        style={{ backgroundColor: '#FF6600' }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              >
                                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5" />
                              </motion.div>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Mensaje
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                              </motion.span>
                            </>
                          )}
                        </span>
                        <motion.span 
                          className="absolute inset-0 bg-black"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
