export function Pipeline({ steps, caption }: { steps: string[]; caption?: string }) {
  return (
    <figure className="not-prose my-10">
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-1 flex-col items-center gap-2 sm:flex-row">
            <span
              className={`flex w-full flex-1 items-center justify-center self-stretch rounded-xl border px-3 py-3 text-center text-sm backdrop-blur-md ${
                i === 0 || i === steps.length - 1
                  ? "border-primary/25 bg-primary/5"
                  : "border-white/10 bg-glass/40"
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="text-primary/70">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
      {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
