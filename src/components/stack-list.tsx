export function StackList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 text-[11px] text-muted-foreground" aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-white/10 px-2 py-0.5">
          {item}
        </li>
      ))}
    </ul>
  );
}
