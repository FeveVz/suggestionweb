"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

/**
 * Accordion de FAQ accesible (button + aria-expanded/aria-controls) que
 * además emite FAQPage JSON-LD (doc 12 §2.4). Las respuestas del JSON son
 * idénticas a las visibles (política de Google). Emite el schema solo si
 * `emitSchema` (evita duplicar cuando el caller ya lo inyecta).
 */

export type FaqItem = { q: string; a: string };

export default function Faq({
  items,
  tone = "light",
  emitSchema = true,
}: {
  items: FaqItem[];
  tone?: "light" | "dark";
  emitSchema?: boolean;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const baseId = useId();
  const border = tone === "dark" ? "var(--border-on-inverse)" : "var(--border-subtle)";
  const strong = tone === "dark" ? "var(--white)" : "var(--text-strong)";
  const body = tone === "dark" ? "var(--text-on-inverse-mut)" : "var(--text-body)";

  return (
    <div>
      {emitSchema && <JsonLd data={faqPageSchema(items)} />}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: `1px solid ${border}` }}>
        {items.map((item, i) => {
          const open = openIdx === i;
          const btnId = `${baseId}-q-${i}`;
          const panelId = `${baseId}-a-${i}`;
          return (
            <li key={i} style={{ borderBottom: `1px solid ${border}` }}>
              <h3 style={{ margin: 0 }}>
                <button
                  id={btnId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIdx(open ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "20px 0",
                    font: "var(--fw-medium) var(--fs-md)/1.35 var(--font-display)",
                    letterSpacing: "var(--tracking-snug)",
                    color: strong,
                  }}
                >
                  <span>{item.q}</span>
                  <span aria-hidden style={{ color: "var(--cyan)", flexShrink: 0 }}>
                    {open ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                hidden={!open}
                style={{ padding: open ? "0 0 22px" : 0 }}
              >
                <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: body, maxWidth: "70ch" }}>
                  {item.a}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
