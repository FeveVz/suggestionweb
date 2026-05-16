'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  servicios: [
    { name: 'Marketing Digital', href: '#servicios' },
    { name: 'Redes Sociales', href: '#servicios' },
    { name: 'Publicidad Digital', href: '#servicios' },
    { name: 'SEO', href: '#servicios' },
    { name: 'Branding', href: '#servicios' },
    { name: 'Desarrollo Web', href: '#servicios' },
  ],
  empresa: [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ],
  recursos: [
    { name: 'Guías de Marketing', href: '#blog' },
    { name: 'Casos de Éxito', href: '#portafolio' },
    { name: 'Tendencias', href: '#blog' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
];

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
    }
  }
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-black text-white relative overflow-hidden" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 102, 0, 0.05) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.03) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Main Footer Content */}
        <motion.div 
          className="py-10 sm:py-12 md:py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand Section */}
          <motion.div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href="/" className="inline-flex items-center mb-4 sm:mb-6">
                <span className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  <span className="text-white">Suggest</span>
                  <span className="relative inline-block align-top">
                    <span className="text-white">i</span>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                  </span>
                  <span className="text-white">on</span>
                </span>
              </Link>
            </motion.div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base leading-relaxed">
              Agencia de marketing digital que transforma tu presencia en resultados. 
              Consigue lo posible haciendo lo imposible.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h3 
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              whileHover={{ x: 5 }}
            >
              Servicios
            </motion.h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00BFFF] transition-colors text-sm inline-flex items-center gap-2 group py-1.5 min-h-[36px]"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-[#00BFFF] group-hover:w-2 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h3 
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              whileHover={{ x: 5 }}
            >
              Empresa
            </motion.h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00BFFF] transition-colors text-sm inline-flex items-center gap-2 group py-1.5 min-h-[36px]"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-[#00BFFF] group-hover:w-2 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <motion.h3 
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              whileHover={{ x: 5 }}
            >
              Contacto
            </motion.h3>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li 
                className="flex items-center gap-3 text-gray-400 text-sm"
                whileHover={{ x: 5, color: '#00BFFF' }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF] flex-shrink-0" />
                <span className="break-all">hola@suggestion.com</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 text-gray-400 text-sm"
                whileHover={{ x: 5, color: '#00BFFF' }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 text-gray-400 text-sm"
                whileHover={{ x: 5, color: '#00BFFF' }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                <span>123 Marketing St, Suite 100<br />New York, NY 10001</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Suggestion. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6 order-1 sm:order-2">
            <Link href="#" className="text-gray-500 hover:text-[#00BFFF] text-xs sm:text-sm transition-colors py-2 min-h-[36px]">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#00BFFF] text-xs sm:text-sm transition-colors py-2 min-h-[36px]">
              Términos de Servicio
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
