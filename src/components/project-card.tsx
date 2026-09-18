import Link from "next/link";
import type { Project } from "@/content/projects";
import { StackList } from "@/components/stack-list";

type Props = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured = false }: Props) {
  const caseHref = `/projetos/${project.slug}`;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-6 backdrop-blur-xl transition-transform hover:-translate-y-1 ${
        featured ? "border-primary/25 bg-primary/5" : "border-white/10 bg-glass/40"
      }`}
    >
      <div className="sheen" />

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-medium tracking-widest text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
          {project.period}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-bold tracking-tight">
        {project.hasCaseStudy ? (
          // O ::after estica o link sobre o card inteiro; os outros links ficam acima dele (z-10).
          <Link href={caseHref} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>

      <p className="mt-3 max-w-[40ch] text-sm text-pretty text-foreground/65">{project.summary}</p>

      <div className="mt-5">
        <StackList items={project.stack} />
      </div>

      {/* A faixa fica acima do link esticado, mas deixa o clique passar: só os links externos o capturam. */}
      <div className="pointer-events-none relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
        {project.hasCaseStudy && (
          <span className="font-semibold text-primary">Ler o estudo de caso →</span>
        )}
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="pointer-events-auto text-foreground/70 underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label} ↗
          </a>
        ))}
        {project.privateCode && !project.hasCaseStudy && (
          <span className="text-xs text-muted-foreground">Código privado da empresa</span>
        )}
      </div>
    </article>
  );
}
