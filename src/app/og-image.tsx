import { ImageResponse } from "next/og";
import { ogColors as c } from "./og";

export const ogSize = { width: 1200, height: 630 };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  footer: string;
};

/**
 * Cartão de compartilhamento, usado pela home e por cada estudo de caso.
 *
 * Tudo aqui é desenhado pelo satori, que só entende um subconjunto de CSS:
 * todo elemento com mais de um filho precisa de `display: flex` explícito,
 * e as cores vêm em hexadecimal (ver `og.ts`).
 */
export function ogImage({ eyebrow, title, description, footer }: Props) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: c.background,
          backgroundImage: `radial-gradient(900px 500px at 88% 0%, ${c.glass} 0%, transparent 60%)`,
          padding: 72,
          color: c.foreground,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 22, height: 22, background: c.primary, transform: "rotate(45deg)" }} />
          <div style={{ fontSize: 26, color: c.muted, letterSpacing: 2 }}>{eyebrow}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {title}
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: c.muted, lineHeight: 1.35, maxWidth: 900 }}>
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${c.glass}`,
            paddingTop: 26,
            fontSize: 24,
            color: c.muted,
          }}
        >
          <div style={{ display: "flex" }}>{footer}</div>
          <div style={{ display: "flex", color: c.primary }}>ryanvetoriano</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
