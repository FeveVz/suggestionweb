"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { GA_ID, META_PIXEL_ID, GADS_ID, captureAttribution, track } from "@/lib/tracking";

/**
 * GA4 + Meta Pixel (solo si hay ID configurado en lib/tracking.ts).
 * Emite page_view/PageView también en navegación SPA (usePathname).
 * Además: captura la atribución de campaña en la primera visita y mide TODO clic
 * a WhatsApp / teléfono / correo con un listener delegado (un solo sitio cubre los
 * ~40 enlaces del sitio, presentes y futuros) — el canal principal de leads.
 * Activos en prod (2026-07-04): GA4 G-RVE3CLTNW3 + Meta Pixel 2487100898472593.
 */
export default function Analytics() {
  const pathname = usePathname();

  // Página vista en cada navegación SPA. GA4 usa page_location (URL completa);
  // page_path solo es de Universal Analytics y GA4 lo ignora, lo que colapsaba
  // los informes de páginas sobre la URL de entrada.
  useEffect(() => {
    if (!pathname) return;
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
      page_path: pathname,
    });
    window.fbq?.("track", "PageView");
  }, [pathname]);

  // Setup único (al montar): atribución + medición de contacto directo.
  useEffect(() => {
    captureAttribution();

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let method: "whatsapp" | "phone" | "email" | null = null;
      if (/(?:wa\.me\/|api\.whatsapp\.com|whatsapp:)/i.test(href)) method = "whatsapp";
      else if (href.startsWith("tel:")) method = "phone";
      else if (href.startsWith("mailto:")) method = "email";
      if (!method) return;
      track("contact", { method, page_path: window.location.pathname });
    };

    // Captura: dispara aunque un hijo del <a> (icono/span) sea el objetivo real.
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID && !META_PIXEL_ID) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });${GADS_ID ? `\n              gtag('config', '${GADS_ID}');` : ""}`}
          </Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');`}
        </Script>
      )}
    </>
  );
}
