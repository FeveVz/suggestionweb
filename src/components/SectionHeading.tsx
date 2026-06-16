import { Label } from "@/components/brand/parts";

/**
 * Encabezado de sección con control explícito del nivel (H2–H6).
 * Garantiza jerarquía semántica sin saltos (docs 04/05) — el nivel se
 * decide en el contenido, no por el tamaño.
 */

type Level = 2 | 3 | 4 | 5 | 6;

const FONT: Record<Level, string> = {
  2: "var(--fw-bold) var(--fs-2xl)/1.08 var(--font-display)",
  3: "var(--fw-medium) var(--fs-xl)/1.12 var(--font-display)",
  4: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)",
  5: "var(--fw-semibold) var(--fs-md)/1.3 var(--font-display)",
  6: "var(--fw-semibold) var(--fs-base)/1.3 var(--font-accent)",
};

export default function SectionHeading({
  level,
  children,
  kicker,
  tone = "light",
  id,
  maxWidth = "28ch",
  style,
}: {
  level: Level;
  children: React.ReactNode;
  kicker?: string;
  tone?: "light" | "dark";
  id?: string;
  maxWidth?: string;
  style?: React.CSSProperties;
}) {
  const Tag = `h${level}` as "h2" | "h3" | "h4" | "h5" | "h6";
  const color = tone === "dark" ? "var(--white)" : "var(--text-strong)";
  return (
    <div style={style}>
      {kicker && <Label tone={tone === "dark" ? "onDark" : "light"}>{kicker}</Label>}
      <Tag
        id={id}
        style={{
          font: FONT[level],
          letterSpacing: "var(--tracking-tight)",
          color,
          margin: kicker ? "14px 0 0" : 0,
          maxWidth,
        }}
      >
        {children}
      </Tag>
    </div>
  );
}
