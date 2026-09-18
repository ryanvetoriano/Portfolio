import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem sou, o que construo e o que estou procurando.",
};

const underlineLink =
  "text-sm text-foreground/70 underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary";

export default function SobrePage() {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-16 pt-16 md:pt-24">
      <p className="rise flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        <span className="size-1.5 rounded-full bg-primary" /> Sobre
      </p>
      <h1 className="rise mt-5 text-4xl font-extrabold tracking-tight text-balance md:text-6xl" style={{ animationDelay: ".08s" }}>
        Do banco à <span className="text-primary">interface</span>.
      </h1>

      <div className="rise mt-10 space-y-6 text-lg leading-relaxed text-pretty text-foreground/70" style={{ animationDelay: ".16s" }}>
        <p>
          Sou desenvolvedor full stack e estou no último semestre de Análise e Desenvolvimento de
          Sistemas na FIAP.
        </p>
        <p>
          Hoje sou o único responsável técnico por duas aplicações internas da GEMM, marca de joias
          que opera e-commerce no Shopify e varejo físico. Uma é a plataforma que o marketing usa
          para decidir onde colocar verba de mídia paga; a outra é o aplicativo em que a equipe
          prepara o catálogo antes de publicar na loja.
        </p>
        <p>
          Três coisas que esses projetos me ensinaram e que levo para qualquer código: dado ausente
          não é zero, média de taxas não é agregação, e segredo nenhum deveria existir no cliente.
        </p>
        <p>
          Trabalhar sozinho me deu autonomia e também me mostrou o limite dela: dá para passar
          semanas defendendo uma escolha ruim sem ninguém para discordar. Por isso busco uma vaga
          júnior em um time — front-end, back-end ou full stack — onde meu código seja revisado por
          gente mais experiente do que eu.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
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
    </article>
  );
}
