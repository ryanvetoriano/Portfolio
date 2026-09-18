import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-28">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Esta página não existe.</h1>
      <p className="mt-4 text-foreground/70">
        Se você chegou aqui por um projeto, o estudo de caso dele ainda está sendo escrito.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
      >
        ← Voltar ao início
      </Link>
    </div>
  );
}
