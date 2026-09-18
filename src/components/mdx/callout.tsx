import type { ReactNode } from "react";

export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="not-prose relative my-10 overflow-hidden rounded-[22px] border border-primary/25 bg-primary/5 px-6 py-5 backdrop-blur-xl">
      <div className="sheen" />
      {title && (
        <p className="mb-2 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">{title}</p>
      )}
      <div className="text-lg leading-relaxed text-foreground/85 [&_p+p]:mt-3">{children}</div>
    </aside>
  );
}
