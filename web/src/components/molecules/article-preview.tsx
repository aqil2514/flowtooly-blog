import Link from "next/link";
import Image from "next/image";

type ArticlePreviewProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
};

export function ArticlePreview({
  title,
  description,
  href,
  image,
}: ArticlePreviewProps) {
  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-lg border p-4 hover:bg-muted/50 transition"
    >
      {/* Thumbnail */}
      {image && (
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-medium leading-snug group-hover:underline">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
