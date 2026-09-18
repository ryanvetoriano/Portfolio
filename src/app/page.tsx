import type { CSSProperties } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ProjectCard } from "@/components/project-card";

const work = projects.filter((p) => p.kind === "trabalho");
const academic = projects.filter((p) => p.kind === "academico");

const stack = [
  { area: "Front-end", items: ["React", "TypeScript", "Vite", "Tailwind", "TanStack Query", "Electron"] },
  { area: "Back-end", items: ["Node.js", "Express", ".NET", "ASP.NET Core", "Quarkus", "Spring Boot"] },
  { area: "Dados", items: ["PostgreSQL", "Prisma", "SQLite", "Oracle", "ClickHouse", "Python", "pandas"] },
  { area: "Infra e testes", items: ["Docker", "AWS", "Vitest", "Playwright", "xUnit"] },
];

const timeline = [
  {
    period: "04/2026 — Atual",
    role: "Desenvolvedor Full Stack & Analista de Dados · GEMM",
    detail:
      "Único desenvolvedor de duas aplicações internas em uso diário — o Creative Lab e o Product Manager — e da automação dos relatórios semanais de vendas e estoque.",
    dot: "bg-primary shadow-[0_0_16px_rgba(45,212,191,.7)]",
  },
  {
    period: "03/2025 — 12/2026",
    role: "Análise e Desenvolvimento de Sistemas · FIAP",
    detail:
      "Último semestre. Projetos em .NET, Java e React, e certificação em Desenvolvimento .NET (out/2025).",
    dot: "bg-primary/50",
  },
];

const sectionTitle = "text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase";
const underlineLink =
  "text-sm text-foreground/70 underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary";

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        {/* Cartão decorativo; some para leitores de tela e em telas menores. */}
        <div aria-hidden className="pointer-events-none absolute right-0 top-10 -z-10 hidden lg:block">
          <div
            className="drift relative w-[400px] -rotate-[14deg] rounded-[28px] border border-white/10 bg-glass/40 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur-2xl"
            style={{ "--r": "-14deg" } as CSSProperties}
          >
            <div className="sheen" />
            <div className="flex gap-1.5 pb-3">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-primary/60" />
            </div>
            <pre className="font-mono text-[12px] leading-6 text-foreground/70">
              <span className="text-primary">const</span>
              {" dev = {"}
              {"\n  papel: "}
              <span className="text-primary">&quot;Full Stack&quot;</span>
              {",\n  stack: "}
              <span className="text-primary">&quot;React · Node · .NET&quot;</span>
              {",\n  regra: "}
              <span className="text-primary">&quot;ausente ≠ zero&quot;</span>
              {"\n}"}
              <span className="caret" />
            </pre>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="rise flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-primary" /> São Paulo · aberto a vagas júnior
          </p>
          <h1
            className="rise mt-5 text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl"
            style={{ animationDelay: ".08s" }}
          >
            Construo sistemas
            <br />
            que não <span className="text-primary">mentem</span>.
          </h1>
          <p
            className="rise mt-6 max-w-[52ch] text-base text-pretty text-foreground/70 md:text-lg"
            style={{ animationDelay: ".16s" }}
          >
            Sou o único desenvolvedor da GEMM, marca de joias com e-commerce e lojas físicas. Faço do
            banco à interface duas aplicações usadas todos os dias pelo marketing e pela operação — e
            cuido para que o número na tela signifique o que parece. Último semestre de ADS na FIAP.
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: ".24s" }}>
            <Link
              href="/projetos/creative-lab"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
            >
              Ler o estudo de caso →
            </Link>
            <span className="text-sm text-muted-foreground">
              ou baixe o{" "}
              <a href={site.cv} className="text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary">
                currículo
              </a>
            </span>
          </div>
        </div>
      </section>

      <section id="projetos" aria-labelledby="titulo-trabalho" className="scroll-mt-20 border-y border-border/50 bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-baseline justify-between border-b border-border/50 pb-4">
            <h2 id="titulo-trabalho" className={sectionTitle}>
              No trabalho
            </h2>
            <span className="text-sm text-muted-foreground">GEMM · 2026</span>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {work.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} featured={project.hasCaseStudy} />
            ))}
          </div>

          <div className="mt-16 flex items-baseline justify-between border-b border-border/50 pb-4">
            <h2 className={sectionTitle}>Projetos acadêmicos</h2>
            <span className="text-sm text-muted-foreground">FIAP · 2025 — 2026</span>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {academic.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={work.length + i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-stack" className="mx-auto max-w-6xl px-6 py-16">
        <h2 id="titulo-stack" className={sectionTitle}>
          Stack
        </h2>
        <dl className="mt-8 space-y-5">
          {stack.map((row) => (
            <div key={row.area} className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:items-center">
              <dt className="text-sm text-muted-foreground">{row.area}</dt>
              <dd className="flex flex-wrap gap-2">
                {row.items.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-glass/40 px-3 py-1 text-sm backdrop-blur-md">
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="trajetoria" aria-labelledby="titulo-trajetoria" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <h2 id="titulo-trajetoria" className={sectionTitle}>
          Trajetória
        </h2>
        <ol className="mt-8 border-l border-white/10 pl-8">
          {timeline.map((item, i) => (
            <li key={item.role} className={`relative ${i < timeline.length - 1 ? "pb-9" : ""}`}>
              <span aria-hidden className={`absolute -left-[37px] top-1 size-3 rounded-full ${item.dot}`} />
              <p className="text-xs tracking-widest text-muted-foreground uppercase">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
              <p className="mt-1 max-w-[60ch] text-sm text-pretty text-foreground/65">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contato" aria-labelledby="titulo-contato" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-glass/40 p-8 backdrop-blur-2xl md:p-12">
          <div className="sheen" />
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-64 rotate-12 rounded-[28px] border border-primary/20 bg-primary/10 backdrop-blur-xl" />
          <div className="relative max-w-[44ch]">
            <h2 id="titulo-contato" className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Vamos conversar.
            </h2>
            <p className="mt-3 text-sm text-pretty text-foreground/65">
              Busco uma vaga júnior em desenvolvimento de software — front-end, back-end ou full
              stack. Respondo rápido.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
              >
                {site.email}
              </a>
              <a href={site.linkedin} className={underlineLink} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
              <a href={site.github} className={underlineLink} rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a href={site.cv} className={underlineLink}>
                Currículo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
