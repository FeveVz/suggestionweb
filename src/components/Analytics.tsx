"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { GA_ID, META_PIXEL_ID, GADS_ID, CLARITY_ID, ES_INTERNO_JS, captureAttribution, track } from "@/lib/tracking";
import { EID_KEY } from "@/lib/meta-match";

/**
 * GA4 + Meta Pixel (solo si hay ID configurado en lib/tracking.ts).
 * Emite page_view/PageView también en navegación SPA (usePathname).
 * Además: captura la atribución de campaña en la primera visita y mide TODO clic
 * a WhatsApp / teléfono / correo con un listener delegado (un solo sitio cubre los
 * ~40 enlaces del sitio, presentes y futuros) — el canal principal de leads.
 * Activos en prod (2026-07-04): GA4 G-RVE3CLTNW3 + Meta Pixel 2487100898472593.
 *
 * Los tres arranques empiezan por ES_INTERNO_JS: en un navegador marcado como
 * interno no cargan (ver tracking.ts).
 *
 * El Píxel arranca con un external_id: un identificador anónimo y aleatorio
 * que se guarda en este navegador y acompaña a cada evento. La pasarela de
 * Stape (capig.stape.pm) copia cada evento del Píxel a la API de
 * Conversiones con los datos que el Píxel tenga, así que lo que se pase aquí
 * llega por las dos vías. Antes solo viajaban IP, navegador y fbp, y la
 * calidad de coincidencias del PageView se quedaba en 6,1/10 (diagnóstico del
 * 15-oct-2026).
 *
 * ⚠️ No llamar a fbq('init') por segunda vez para añadir datos (teléfono al
 * enviar un formulario, etc.): el Píxel solo acepta un segundo init si el
 * primero no llevaba datos, y como este lleva el external_id lo rechazaría
 * con "Duplicate Pixel ID". El teléfono del lead viaja por /api/lead.
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

  if (!GA_ID && !META_PIXEL_ID && !CLARITY_ID) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`if (!${ES_INTERNO_JS}) {
              window.dataLayer = window.dataLayer || [];
              var gtag = function(){ window.dataLayer.push(arguments); };
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });${GADS_ID ? `\n              gtag('config', '${GADS_ID}');` : ""}
            }`}
          </Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`if (!${ES_INTERNO_JS}) {
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            var eid = '';
            try {
              eid = localStorage.getItem('${EID_KEY}') || '';
              if (!/^[a-f0-9]{64}$/.test(eid)) {
                var r = new Uint8Array(32); crypto.getRandomValues(r); eid = '';
                for (var k = 0; k < r.length; k++) eid += ('0' + r[k].toString(16)).slice(-2);
                localStorage.setItem('${EID_KEY}', eid);
              }
            } catch (x) { eid = ''; }
            if (eid) fbq('init', '${META_PIXEL_ID}', { external_id: eid });
            else fbq('init', '${META_PIXEL_ID}');
          }`}
        </Script>
      )}
      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`if (!${ES_INTERNO_JS}) (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
}
