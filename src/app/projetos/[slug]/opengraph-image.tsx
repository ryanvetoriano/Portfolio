import { notFound } from "next/navigation";
import { ogImage, ogSize } from "@/app/og-image";
import { getCaseStudies, getProject } from "@/content/projects";

export const alt = "Estudo de caso";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getCaseStudies().map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return ogImage({
    eyebrow: "ESTUDO DE CASO",
    title: project.title,
    description: project.summary,
    footer: `${project.role} · ${project.period}`,
  });
}
