import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital y Gestión de Redes Sociales en Perú',
  description:
    'Suggestion es la agencia de marketing digital que potencia tu marca. Gestionamos tus redes sociales, creamos campañas publicitarias y posicionamos tu negocio en Google. Consultoría gratuita.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValuePropositionSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
