import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Suggestion | Agencia de Marketing Digital y Redes Sociales en Perú',
    template: '%s | Suggestion — Agencia de Marketing Digital',
  },
  description:
    'Agencia de marketing digital especializada en gestión de redes sociales, publicidad digital, SEO y branding. Potenciamos marcas con estrategias que generan clientes reales. Consultoría gratuita.',
  keywords: [
    'agencia de marketing digital',
    'agencia de marketing digital peru',
    'gestión de redes sociales',
    'community manager peru',
    'publicidad digital',
    'google ads peru',
    'meta ads peru',
    'seo posicionamiento web',
    'diseño web peru',
    'branding peru',
    'marketing digital lima',
    'agencia digital peru',
  ],
  authors: [{ name: 'Suggestion' }],
  creator: 'Suggestion',
  publisher: 'Suggestion',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName: 'Suggestion',
    title: 'Suggestion | Agencia de Marketing Digital y Redes Sociales en Perú',
    description:
      'Potenciamos marcas con estrategias de marketing digital, gestión de redes sociales y publicidad digital. Resultados reales, clientes reales.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Suggestion — Marketing digital que genera clientes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suggestion | Agencia de Marketing Digital',
    description: 'Gestión de redes sociales, publicidad digital y SEO en Perú. Consultoría gratuita.',
    creator: '@suggestion',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'Suggestion',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Agencia de marketing digital especializada en gestión de redes sociales, publicidad digital, SEO y branding en Perú.',
  telephone: '+51937770159',
  email: 'hola@suggestion.pe',
  areaServed: { '@type': 'Country', name: 'Perú' },
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/suggestion.mkt/',
    'https://www.facebook.com/Suggestion.mk',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Marketing Digital',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Digital' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Redes Sociales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Publicidad Digital' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO y Posicionamiento Web' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding y Diseño' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo Web' } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </MotionProvider>
        <Toaster />
      </body>
    </html>
  );
}
