import Link from "next/link";
import { TocItem } from "@/lib/toc";

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav className="rounded-lg border bg-muted/30 p-4">
      <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
        Daftar Isi
      </h2>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-4" : ""}
          >
            <Link
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
