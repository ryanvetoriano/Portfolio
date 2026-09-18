import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-6">
      <div className="flex flex-col gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {site.name}</span>
        {/* No celular o menu do cabeçalho some; estes links garantem acesso a todas as páginas. */}
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/sobre" className="hover:text-foreground">
              Sobre
            </Link>
          </li>
          <li>
            <a href={site.cv} className="hover:text-foreground">
              Currículo
            </a>
          </li>
          <li>
            <a href={site.github} className="hover:text-foreground" rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.linkedin} className="hover:text-foreground" rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
