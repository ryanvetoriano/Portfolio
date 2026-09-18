import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getCaseStudies, getProject, projects } from "./projects";

const caseStudyPath = (slug: string) => join(import.meta.dirname, "projetos", `${slug}.mdx`);

describe("projects", () => {
  it("tem slugs únicos", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("usa slugs seguros para URL", () => {
    for (const p of projects) expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  // A rota /projetos/[slug] importa o .mdx pelo slug. Se a flag e o arquivo
  // divergirem, o build quebra (flag sem arquivo) ou o conteúdo fica órfão
  // (arquivo sem flag). Este teste pega os dois casos antes do deploy.
  it.each(projects)("$slug: hasCaseStudy bate com a existência do .mdx", (p) => {
    expect(existsSync(caseStudyPath(p.slug))).toBe(p.hasCaseStudy);
  });

  it("não expõe link de código para projeto privado", () => {
    for (const p of projects.filter((p) => p.privateCode)) {
      expect(p.links.filter((l) => l.href.includes("github.com"))).toEqual([]);
    }
  });

  it("getCaseStudies devolve só projetos com estudo de caso", () => {
    expect(getCaseStudies().every((p) => p.hasCaseStudy)).toBe(true);
    expect(getCaseStudies().length).toBeGreaterThan(0);
  });

  it("getProject devolve undefined para slug desconhecido", () => {
    expect(getProject("nao-existe")).toBeUndefined();
  });
});
