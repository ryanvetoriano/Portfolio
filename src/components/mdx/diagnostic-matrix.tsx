type Cell = { title: string; body: string; tone: "good" | "mixed" | "bad" };

const tones: Record<Cell["tone"], string> = {
  good: "border-primary/30 bg-primary/10",
  mixed: "border-white/10 bg-glass/40",
  bad: "border-white/10 bg-ink2/60",
};

/**
 * A matriz 2×2 do Creative Lab: CTR (linhas) contra custo (colunas),
 * ambos relativos ao grupo comparável.
 */
export function DiagnosticMatrix() {
  const rows: { label: string; cells: [Cell, Cell] }[] = [
    {
      label: "CTR alto",
      cells: [
        { title: "Vencedor visual", body: "Chama atenção, gera clique e mantém o custo aceitável.", tone: "good" },
        { title: "Chama atenção, mas não converte", body: "O problema tende a estar na oferta, na página de destino ou no público.", tone: "mixed" },
      ],
    },
    {
      label: "CTR baixo",
      cells: [
        { title: "Converte, mas atrai pouco", body: "Quem clica compra; o criativo é que gera poucos cliques.", tone: "mixed" },
        { title: "Fraco", body: "Pouco clique e conversão cara. Revisar, pausar ou substituir.", tone: "bad" },
      ],
    },
  ];

  return (
    <figure className="not-prose my-10">
      <div className="grid grid-cols-[auto_1fr_1fr] gap-2 text-sm">
        <span />
        <span className="px-1 pb-1 font-mono text-xs text-muted-foreground">Custo bom</span>
        <span className="px-1 pb-1 font-mono text-xs text-muted-foreground">Custo ruim</span>
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <span className="flex items-center pr-2 font-mono text-xs text-muted-foreground [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
              {row.label}
            </span>
            {row.cells.map((cell) => (
              <div key={cell.title} className={`rounded-xl border p-4 backdrop-blur-md ${tones[cell.tone]}`}>
                <p className="font-medium">{cell.title}</p>
                <p className="mt-1.5 leading-snug text-foreground/65">{cell.body}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        CTR alto significa CTR maior ou igual à mediana do grupo. Custo bom significa CPA dentro do
        limite definido para o grupo.
      </figcaption>
    </figure>
  );
}
