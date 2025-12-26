import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ToolLinkProps = {
  slug: string;
  name: string;
  description?: string;
};

export function ToolLink({
  slug,
  name,
  description,
}: ToolLinkProps) {
  const url = `https://flowtooly.com/tools/${slug}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="my-6 block rounded-lg border p-4 hover:bg-muted/50 transition"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{name}</h4>
        <ArrowRight className="h-4 w-4" />
      </div>

      {description && (
        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </Link>
  );
}
