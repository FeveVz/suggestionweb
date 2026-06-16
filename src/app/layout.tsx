import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { RevealController } from "@/components/brand/interactive";
import { site, SITE_URL } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Agencia de marketing de performance en Ica, Perú`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — ${site.slogan}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        {/* Activa animaciones solo si hay JS; sin JS el contenido queda visible (SEO-safe). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <RevealController />
        <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
          <Header />
          <main style={{ flex: 1, overflowX: "clip" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
