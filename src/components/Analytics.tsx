"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { GA_ID, META_PIXEL_ID, GADS_ID, CLARITY_ID, NO_MEDIR_JS, captureAttribution, track, newEventId, metaServidor } from "@/lib/tracking";
import { decorarWhatsApp } from "@/lib/whatsapp-ref";
import { EID_KEY } from "@/lib/meta-match";

/**
 * GA4 + Meta Pixel (solo si hay ID configurado en lib/tracking.ts).
 * Emite page_view/PageView también en navegación SPA (usePathname).
 * Además: captura la atribución de campaña en la primera visita y mide TODO clic
 * a WhatsApp / teléfono / correo con un listener delegado (un solo sitio cubre los
 * ~40 enlaces del sitio, presentes y futuros) — el canal principal de leads.
 * Activos en prod (2026-07-04): GA4 G-RVE3CLTNW3 + Meta Pixel 2487100898472593.
 *
 * Los tres arranques empiezan por NO_MEDIR_JS: en un navegador marcado como
 * interno no cargan (ver tracking.ts).
 *
 * El Píxel arranca con un external_id: un identificador anónimo y aleatorio
 * que se guarda en este navegador y acompaña a cada evento. Antes solo
 * viajaban IP, navegador y fbp, y la calidad de coincidencias del PageView se
 * quedaba en 6,1/10 (diagnóstico del 15-oct-2026).
 *
 * API de Conversiones: la pasarela de Stape (capig.stape.pm) fue una prueba
 * de 7 días (4 al 11-jul-2026) y murió ahí. Desde el 16-nov-2026 los eventos
 * que importan (Contact y Lead) se copian desde nuestro propio servidor
 * (/api/evento, ver metaServidor en tracking.ts), con el mismo event_id que
 * el Píxel. El PageView queda solo en el Píxel. Si en Events Manager sigue
 * conectada la pasarela de Stape, se puede desconectar: no hace nada.
 * (20-nov-2026: la configuración pública del Píxel ya no tiene pasarela; nada que desconectar.)
 *
 * Sin eventos automáticos (20-nov-2026, auditoría MED-01): autoConfig en false
 * antes del init apaga los clics que el Píxel registraba solo (SubscribedButtonClick)
 * y los metadatos de página. La configuración pública del dataset seguía con
 * InferredEvents activo aunque Events Manager lo mostrara apagado, y esos clics
 * ya habían fabricado conversiones falsas. La coincidencia automática se apagó
 * el mismo día en Events Manager: tomaba el correo y el teléfono de la agencia
 * del pie de la web. El external_id manual sigue igual.
 *
 * ⚠️ No llamar a fbq('init') por segunda vez para añadir datos (teléfono al
 * enviar un formulario, etc.): el Píxel solo acepta un segundo init si el
 * primero no llevaba datos, y como este lleva el external_id lo rechazaría
 * con "Duplicate Pixel ID". El teléfono del lead viaja por /api/lead.
 *
 * Las tres librerías se piden tarde (DIFERIR_JS): con la primera interacción o
 * a los 3,5 s de cargar. Pesan 451 KB y Lighthouse midió la home con LCP de
 * 11,6 s con ellas y 6,3 s sin ellas (2026-11-01). Mientras tanto gtag y fbq ya
 * existen como colas, así que ningún evento se pierde: se envían al llegar la
 * librería. El coste: quien se va antes sin tocar nada no se cuenta.
 */
const DIFERIR_JS = `function(fn){var h=0,ev=['pointerdown','keydown','scroll','touchstart'];function go(){if(h)return;h=1;ev.forEach(function(e){removeEventListener(e,go)});fn()}ev.forEach(function(e){addEventListener(e,go,{passive:true})});function t(){setTimeout(go,3500)}if(document.readyState==='complete')t();else addEventListener('load',t)}`;

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
      // Antes de que se abra WhatsApp: línea «Ref» con página, botón y fuente (lib/whatsapp-ref.ts).
      let cta: string | null = null;
      try {
        cta = method === "whatsapp" ? decorarWhatsApp(a) : null;
      } catch {
        /* si falla, el enlace se abre tal cual */
      }
      // Mismo id para el Píxel y para la copia del servidor: Meta los une.
      const id = newEventId();
      track("contact", { method, page_path: window.location.pathname, ...(cta ? { cta } : {}) }, id);
      metaServidor("Contact", id, { method });
    };

    // Clic con la rueda o «abrir en otra pestaña» con el botón del medio: solo la línea «Ref».
    const onAuxClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || e.button !== 1) return;
      try {
        decorarWhatsApp(a);
      } catch {
        /* el enlace se abre tal cual */
      }
    };

    // Captura: dispara aunque un hijo del <a> (icono/span) sea el objetivo real.
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("auxclick", onAuxClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("auxclick", onAuxClick, { capture: true });
    };
  }, []);

  if (!GA_ID && !META_PIXEL_ID && !CLARITY_ID) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script id="ga4-init" strategy="afterInteractive">
            {`if (!${NO_MEDIR_JS}) {
              window.dataLayer = window.dataLayer || [];
              var gtag = function(){ window.dataLayer.push(arguments); };
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });${GADS_ID ? `\n              gtag('config', '${GADS_ID}');` : ""}
              (${DIFERIR_JS})(function(){
                var s = document.createElement('script'); s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
                document.head.appendChild(s);
              });
            }`}
          </Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`if (!${NO_MEDIR_JS}) {
            !function(f,b,e,v,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            (${DIFERIR_JS})(function(){var t=b.createElement(e);t.async=!0;t.src=v;b.head.appendChild(t)})}(window,
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
            fbq('set', 'autoConfig', false, '${META_PIXEL_ID}');
            if (eid) fbq('init', '${META_PIXEL_ID}', { external_id: eid });
            else fbq('init', '${META_PIXEL_ID}');
          }`}
        </Script>
      )}
      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`if (!${NO_MEDIR_JS}) (function(c,l,a,r,i){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              (${DIFERIR_JS})(function(){
                var t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                l.head.appendChild(t);
              });
            })(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
}
