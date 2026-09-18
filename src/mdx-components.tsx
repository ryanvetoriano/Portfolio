import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/callout";
import { DiagnosticMatrix } from "@/components/mdx/diagnostic-matrix";
import { Pipeline } from "@/components/mdx/pipeline";

// Obrigatório para o @next/mdx no App Router. Os componentes daqui ficam
// disponíveis em qualquer .mdx sem import.
const components: MDXComponents = {
  Callout,
  DiagnosticMatrix,
  Pipeline,
  table: (props) => (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-white/10 bg-glass/30 backdrop-blur-md">
      <table className="w-full text-left text-sm [&_td]:border-t [&_td]:border-border [&_td]:px-4 [&_td]:py-2.5 [&_th]:bg-white/5 [&_th]:text-foreground [&_td]:text-foreground/80 [&_th]:px-4 [&_th]:py-2.5 [&_th]:font-medium" {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
