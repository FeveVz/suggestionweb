import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suggestion | Agencia de Marketing Digital - Consigue lo Posible Haciendo lo Imposible",
  description: "Somos una agencia de marketing digital que transforma tu presencia en resultados. SEO, redes sociales, publicidad digital. ¡Contáctanos!",
  keywords: ["marketing digital", "agencia de marketing", "agencia digital", "SEO", "redes sociales", "publicidad digital"],
  authors: [{ name: "Suggestion" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Suggestion | Agencia de Marketing Digital",
    description: "Consigue lo Posible Haciendo lo Imposible",
    type: "website",
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
        className={`${montserrat.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
