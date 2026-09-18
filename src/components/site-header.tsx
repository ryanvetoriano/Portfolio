import Link from "next/link";
import { site } from "@/content/site";

const linkClass = "transition-colors hover:text-foreground";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <span aria-hidden className="size-3.5 rotate-45 bg-primary shadow-[0_0_18px_rgba(45,212,191,.6)]" />
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </Link>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            <li>
              <Link href="/#projetos" className={linkClass}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/#trajetoria" className={linkClass}>
                Trajetória
              </Link>
            </li>
            <li>
              <Link href="/sobre" className={linkClass}>
                Sobre
              </Link>
            </li>
            <li>
              {/* Arquivo estático, não rota: <Link> tentaria navegação client-side. */}
              <a href={site.cv} className={linkClass}>
                Currículo
              </a>
            </li>
          </ul>
        </nav>
        <Link
          href="/#contato"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
        >
          Fale comigo
        </Link>
      </div>
    </header>
  );
}
