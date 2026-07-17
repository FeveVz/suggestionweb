import { Eye, MousePointerClick, MessageCircle, Handshake } from "lucide-react";

/**
 * "El funnel vivo" — reemplaza el párrafo del hero: atención → clic →
 * WhatsApp → venta, contado con una línea que se dibuja y un punto que viaja
 * encendiendo cada etapa (la última hace pop). CSS puro en un solo loop de 5s
 * (todas las animaciones comparten duración → sincronía perfecta), solo
 * transform/opacity/color (fluido en móvil). Server Component, cero JS.
 * Reduced-motion: estado final estático. El mensaje textual completo vive en
 * un párrafo visually-hidden (SEO/lectores de pantalla).
 */

const PASOS = [
  { Icon: Eye, label: "atención", cls: "fv-n1" },
  { Icon: MousePointerClick, label: "clic", cls: "fv-n2" },
  { Icon: MessageCircle, label: "WhatsApp", cls: "fv-n3" },
  { Icon: Handshake, label: "venta", cls: "fv-n4" },
];

const HIDDEN: React.CSSProperties = {
  position: "absolute", width: 1, height: 1, padding: 0, margin: -1,
  overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0,
};

export default function FunnelVivo() {
  return (
    <div style={{ margin: "clamp(20px,2.6vw,30px) 0 0" }}>
      <p style={HIDDEN}>
        Tu problema no es el alcance: es que los clics no se vuelven clientes. Armamos tu funnel completo —anuncios,
        web, WhatsApp y CRM— y lo medimos hasta el cierre: la atención se vuelve clic, el clic conversación por
        WhatsApp y la conversación venta.
      </p>
      <div className="fv" aria-hidden>
        <span className="fv-line" />
        <span className="fv-prog" />
        <span className="fv-dot" />
        {PASOS.map(({ Icon, label, cls }) => (
          <span key={label} className={`fv-node ${cls}`}>
            <span className="fv-ico"><Icon size={19} strokeWidth={1.9} /></span>
            <span className="fv-lbl">{label}</span>
          </span>
        ))}
      </div>

      <style>{`
        .fv {
          --fv-s: clamp(40px, 10vw, 46px);   /* diámetro del nodo */
          --fv-loop: 5s;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 460px;
        }
        .fv-line, .fv-prog {
          position: absolute;
          top: calc(var(--fv-s) / 2 - 1px);
          left: calc(var(--fv-s) / 2);
          right: calc(var(--fv-s) / 2);
          height: 2px;
          border-radius: 2px;
        }
        .fv-line { background: var(--border-subtle); }
        .fv-prog {
          background: var(--cyan);
          transform-origin: left;
          transform: scaleX(0);
          animation: fv-prog var(--fv-loop) linear infinite;
        }
        .fv-dot {
          position: absolute;
          top: calc(var(--fv-s) / 2 - 5px);
          left: calc(var(--fv-s) / 2);
          width: 10px; height: 10px;
          margin-left: -5px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 10px rgba(0,191,255,0.65);
          opacity: 0;
          animation: fv-dot var(--fv-loop) linear infinite;
        }
        .fv-node {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: var(--ink-300);
          width: var(--fv-s);
        }
        .fv-ico {
          width: var(--fv-s); height: var(--fv-s);
          border-radius: 50%;
          background: var(--white);
          border: 1.5px solid currentColor;
          display: grid; place-items: center;
          transition: none;
        }
        .fv-lbl {
          font: var(--fw-bold) var(--fs-micro)/1 var(--font-accent);
          text-transform: uppercase;
          letter-spacing: var(--tracking-label);
          white-space: nowrap;
        }
        .fv-n1 { animation: fv-n1 var(--fv-loop) ease-out infinite; }
        .fv-n2 { animation: fv-n2 var(--fv-loop) ease-out infinite; }
        .fv-n3 { animation: fv-n3 var(--fv-loop) ease-out infinite; }
        .fv-n4 { animation: fv-n4 var(--fv-loop) ease-out infinite; }
        .fv-n4 .fv-ico { animation: fv-pop var(--fv-loop) ease-out infinite; }

        /* línea de progreso: crece 4%→83%, sostiene y se desvanece */
        @keyframes fv-prog {
          0%, 4% { transform: scaleX(0); opacity: 1; }
          83%    { transform: scaleX(1); opacity: 1; }
          94%    { transform: scaleX(1); opacity: 1; }
          99%,100% { transform: scaleX(1); opacity: 0; }
        }
        /* punto viajero: mismo tramo temporal que la línea */
        @keyframes fv-dot {
          0%, 3%  { left: calc(var(--fv-s) / 2); opacity: 0; }
          5%      { opacity: 1; }
          82%     { opacity: 1; }
          83%     { left: calc(100% - var(--fv-s) / 2); opacity: 0; }
          100%    { left: calc(100% - var(--fv-s) / 2); opacity: 0; }
        }
        /* cada nodo se enciende cuando el punto le llega (4%/30%/57%/83%) */
        @keyframes fv-n1 { 0%,3% { color: var(--ink-300); } 6% { color: var(--cyan); } 94% { color: var(--cyan); } 99%,100% { color: var(--ink-300); } }
        @keyframes fv-n2 { 0%,29% { color: var(--ink-300); } 33% { color: var(--cyan); } 94% { color: var(--cyan); } 99%,100% { color: var(--ink-300); } }
        @keyframes fv-n3 { 0%,55% { color: var(--ink-300); } 59% { color: var(--cyan); } 94% { color: var(--cyan); } 99%,100% { color: var(--ink-300); } }
        @keyframes fv-n4 { 0%,81% { color: var(--ink-300); } 85% { color: var(--cyan); } 94% { color: var(--cyan); } 99%,100% { color: var(--ink-300); } }
        /* pop de "venta": escala + anillo que se expande */
        @keyframes fv-pop {
          0%, 82%  { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,191,255,0); }
          86%      { transform: scale(1.14); box-shadow: 0 0 0 0 rgba(0,191,255,0.45); }
          92%      { transform: scale(1); box-shadow: 0 0 0 14px rgba(0,191,255,0); }
          100%     { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,191,255,0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .fv-prog, .fv-dot, .fv-n1, .fv-n2, .fv-n3, .fv-n4, .fv-n4 .fv-ico { animation: none; }
          .fv-prog { transform: scaleX(1); }
          .fv-dot { opacity: 0; }
          .fv-n1, .fv-n2, .fv-n3 { color: var(--ink-700); }
          .fv-n4 { color: var(--cyan); }
        }
      `}</style>
    </div>
  );
}
