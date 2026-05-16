'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { 
  TrendingUp, Share2, Target, Search, Palette, Code, 
  Lightbulb, Zap, Video, BarChart3, ShoppingBag, Printer, 
  PanelTop, Truck, Sparkles as SparklesIcon, Package,
  Users, Briefcase, BookOpen, Home
} from 'lucide-react';

const serviciosPrincipales = [
  { name: 'Marketing Digital', href: '/servicios/marketing-digital', icon: TrendingUp, color: '#FF6600' },
  { name: 'Redes Sociales', href: '/servicios/marketing-redes-sociales', icon: Share2, color: '#00BFFF' },
  { name: 'Publicidad Digital', href: '/servicios/publicidad-digital', icon: Target, color: '#FF6600' },
  { name: 'SEO', href: '/servicios/seo-posicionamiento', icon: Search, color: '#00BFFF' },
  { name: 'Branding', href: '/servicios/branding-diseno', icon: Palette, color: '#FF6600' },
  { name: 'Desarrollo Web', href: '/servicios/desarrollo-web', icon: Code, color: '#00BFFF' },
];

const serviciosAdicionales = [
  { name: 'Consultoría', href: '/servicios/consultoria-marketing', icon: Lightbulb },
  { name: 'CRM', href: '/servicios/crm-automatizacion', icon: Zap },
  { name: 'Audiovisual', href: '/servicios/produccion-audiovisual', icon: Video },
  { name: 'Investigación', href: '/servicios/investigacion-mercado', icon: BarChart3 },
];

const serviciosComplementarios = [
  { name: 'Merchandising', href: '/servicios/merchandising', icon: ShoppingBag },
  { name: 'Imprenta', href: '/servicios/imprenta-corporativa', icon: Printer },
  { name: 'Estructuras', href: '/servicios/estructuras-publicitarias', icon: PanelTop },
  { name: 'Publicidad Móvil', href: '/servicios/publicidad-movil', icon: Truck },
  { name: 'BTL', href: '/servicios/btl-activaciones', icon: SparklesIcon },
  { name: 'POP', href: '/servicios/material-pop', icon: Package },
];

const navigation = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Nosotros', href: '/nosotros', icon: Users },
  { name: 'Portafolio', href: '/portafolio', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: BookOpen },
];

export default function FloatingMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  // Calcular posición basada en drag
  const handleDragEnd = useCallback(() => {
    const screenWidth = window.innerWidth;
    const centerX = screenWidth / 2;
    
    if (touchCurrentX.current < centerX) {
      setPosition('left');
    } else {
      setPosition('right');
    }
    setCurrentX(0);
    setIsDragging(false);
  }, []);

  // Touch handlers para drag
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMenuOpen) return;
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = e.touches[0].clientX - dragStartX;
    setCurrentX(diff);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const whatsappNumber = '15551234567';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');

  return (
    <div 
      ref={containerRef}
      className="lg:hidden fixed bottom-6 z-50"
      style={{
        left: position === 'left' ? '1rem' : 'auto',
        right: position === 'right' ? '1rem' : 'auto',
        transform: `translateX(${currentX}px)`,
        transition: isDragging ? 'none' : 'all 0.3s ease-out',
      }}
    >
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="absolute bottom-full mb-4 w-[88vw] max-w-[340px] max-h-[78vh] bg-black rounded-3xl shadow-2xl overflow-hidden z-50 border border-white/10"
            style={{
              left: position === 'left' ? '0' : 'auto',
              right: position === 'right' ? '0' : 'auto',
            }}
          >
            {/* Menu Header - Compact Navigation */}
            <div className="p-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center justify-between mb-2">
                <Link 
                  href="/" 
                  className="text-base font-bold"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-white">Suggest</span>
                  <span className="relative inline-block align-top">
                    <span className="text-white">i</span>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                  </span>
                  <span className="text-white">on</span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              
              {/* Compact Navigation Pills */}
              <div className="flex gap-1.5 flex-wrap">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-[11px] text-white/80 hover:text-white"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <item.icon className="w-3 h-3" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu Content */}
            <div className="overflow-y-auto max-h-[calc(78vh-140px)] p-4 pb-3">
              {/* Featured Services Section */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF6600' }}>
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Servicios Destacados
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {serviciosPrincipales.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group"
                      >
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <service.icon className="w-5 h-5" style={{ color: service.color }} />
                        </div>
                        <span 
                          className="text-[11px] text-white/80 group-hover:text-white text-center leading-tight font-medium"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {service.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Services - Horizontal Scroll */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2 px-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Más Servicios
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                  {serviciosAdicionales.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all flex-shrink-0"
                    >
                      <service.icon className="w-4 h-4 text-white/60" />
                      <span className="text-xs text-white/70 whitespace-nowrap" style={{ fontFamily: 'var(--font-inter)' }}>
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Complementary Services - Compact Grid */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2 px-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Complementarios
                </h3>
                <div className="grid grid-cols-3 gap-1.5">
                  {serviciosComplementarios.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-white/50" />
                      <span className="text-[10px] text-white/60 text-center leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with CTAs */}
            <div className="p-4 pt-2 border-t border-white/10 bg-white/5 space-y-2">
              <Link
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#FF6600', fontFamily: 'var(--font-inter)' }}
              >
                Hablemos
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-white/90 font-medium text-sm bg-[#25D366] hover:bg-[#20BD5A] transition-all"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons Container - Hidden when menu is open */}
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.div 
            className="flex flex-col gap-3 items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg min-h-[56px]"
              style={{ backgroundColor: '#25D366' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 text-white" fill="white" />
            </motion.a>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg min-h-[56px]"
              style={{ backgroundColor: '#FF6600' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6 text-white" />
            </motion.button>

            {/* Drag Indicator */}
            <motion.div
              className="flex items-center gap-1 mt-1 opacity-50"
              animate={{ x: [0, position === 'left' ? 5 : -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
