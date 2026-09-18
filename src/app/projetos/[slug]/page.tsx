import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudies, getProject } from "@/content/projects";
import { StackList } from "@/components/stack-list";

export function generateStaticParams() {
  return getCaseStudies().map((p) => ({ slug: p.slug }));
}

// Só existem as rotas geradas acima; qualquer outro slug é 404, inclusive projetos sem estudo de caso.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.hasCaseStudy) notFound();

  const { default: Content } = await import(`@/content/projetos/${slug}.mdx`);

  return (
    <article className="mx-auto max-w-3xl px-6 pb-16 pt-12 md:pt-16">
      <Link href="/#projetos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
        ← Todos os projetos
      </Link>

      <header className="relative mt-8 overflow-hidden rounded-[26px] border border-primary/25 bg-primary/5 p-8 backdrop-blur-2xl md:p-10">
        <div className="sheen" />
        <p className="rise flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          <span className="size-1.5 rounded-full bg-primary" /> Estudo de caso
        </p>
        <h1 className="rise mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-6xl" style={{ animationDelay: ".08s" }}>
          {project.title}
        </h1>
        <p className="rise mt-5 max-w-[56ch] text-base text-pretty text-foreground/70 md:text-lg" style={{ animationDelay: ".16s" }}>
          {project.summary}
        </p>

        <dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">Papel</dt>
            <dd className="mt-1.5">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">Período</dt>
            <dd className="mt-1.5">{project.period}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">Código</dt>
            <dd className="mt-1.5">{project.privateCode ? "Privado, da empresa" : "Público"}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <StackList items={project.stack} />
        </div>
      </header>

      <div className="prose prose-case mt-14 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-14 prose-p:leading-relaxed">
        <Content />
      </div>
    </article>
  );
}
