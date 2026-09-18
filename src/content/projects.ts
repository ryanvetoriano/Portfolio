export type ProjectKind = "trabalho" | "academico";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Uma frase: o que é e para quem. Aparece nos cards e na meta description. */
  summary: string;
  kind: ProjectKind;
  role: string;
  period: string;
  stack: string[];
  links: ProjectLink[];
  /**
   * Só marque `true` quando existir `src/content/projetos/<slug>.mdx`.
   * Um teste garante que as duas coisas andam juntas.
   */
  hasCaseStudy: boolean;
  /** Projetos da GEMM têm código privado — o card precisa dizer isso. */
  privateCode?: boolean;
};

export const projects: Project[] = [
  {
    slug: "creative-lab",
    title: "GEMM Creative Lab",
    summary:
      "Plataforma que o time de marketing usa para decidir quais criativos de mídia paga funcionam — comparando só anúncios que são de fato comparáveis.",
    kind: "trabalho",
    role: "Único desenvolvedor, do banco à interface",
    period: "2026 — atual",
    stack: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    links: [],
    hasCaseStudy: true,
    privateCode: true,
  },
  {
    slug: "product-manager",
    title: "GEMM Product Manager",
    summary:
      "Aplicativo desktop para preparar o catálogo da loja com calma e publicar no Shopify só depois de revisado.",
    kind: "trabalho",
    role: "Único desenvolvedor",
    period: "2026 — atual",
    stack: ["Electron", "React", "TypeScript", "Shopify Polaris", "SQLite", "Prisma", "Zod"],
    links: [],
    hasCaseStudy: false,
    privateCode: true,
  },
  {
    slug: "futurevet",
    title: "FutureVet",
    summary:
      "API de gestão veterinária preparada para produção: autenticação, erros padronizados, observabilidade e testes.",
    kind: "academico",
    role: "Projeto acadêmico — FIAP",
    period: "2026",
    stack: [".NET 10", "ASP.NET Core", "EF Core", "Oracle", "OpenTelemetry", "xUnit"],
    links: [{ label: "Código", href: "https://github.com/ryanvetoriano/FutureVet" }],
    hasCaseStudy: false,
  },
  {
    slug: "saude-mais",
    title: "Saúde+",
    summary:
      "Portal de consultas, exames e receitas médicas pensado para usuários com baixo letramento digital.",
    kind: "academico",
    role: "Projeto acadêmico — FIAP",
    period: "2025",
    stack: ["React", "TypeScript", "Java", "Quarkus", "Oracle"],
    links: [
      { label: "Front-end", href: "https://github.com/ryanvetoriano/front-sprint-4" },
      { label: "Back-end", href: "https://github.com/ryanvetoriano/java-sprint-4" },
    ],
    hasCaseStudy: false,
  },
  {
    slug: "central-do-saber",
    title: "Central do Saber",
    summary: "API de catálogo, avaliação e comentários de livros, mangás, HQs e revistas.",
    kind: "academico",
    role: "Projeto acadêmico — FIAP",
    period: "2026",
    stack: [".NET 10", "ASP.NET Core", "EF Core", "Oracle", "DDD"],
    links: [{ label: "Código", href: "https://github.com/ryanvetoriano/CentralDoSaber" }],
    hasCaseStudy: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudies(): Project[] {
  return projects.filter((p) => p.hasCaseStudy);
}
