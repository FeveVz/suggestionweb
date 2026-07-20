import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

/**
 * Lista editorial de sectores (home). Filas numeradas 01, 02… con separadores
 * finos: comunica las verticales de un vistazo y se siente premium. Reemplaza
 * a las 5 tarjetas apretadas donde "se perdía" la sectorización. Fondo oscuro,
 * acento cian que crece al hover. Cada fila enlaza a su página de sector.
 */

type Item = { title: string; result: string; href: string; icon: LucideIcon };

export default function SectorList({ items }: { items: Item[] }) {
  return (
    <div className="hk-sectorlist reveal reveal-d2">
      {items.map((s, i) => (
        <Link key={s.href} href={s.href} className="hk-sectorrow">
          <span className="hk-sectorrow-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
          <span className="hk-sectorrow-head">
            <span className="hk-sectorrow-ico" aria-hidden><s.icon size={20} strokeWidth={1.6} /></span>
            <span className="hk-sectorrow-title">{s.title}</span>
          </span>
          <span className="hk-sectorrow-result">{s.result}</span>
          <span className="hk-sectorrow-cta" aria-hidden>
            <span className="hk-sectorrow-cta-txt">Ver enfoque</span> <ArrowUpRight size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}
