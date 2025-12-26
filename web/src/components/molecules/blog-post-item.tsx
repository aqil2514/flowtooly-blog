import Link from "next/link";
import Image from "next/image";

export type BlogPostItemProps = {
  title: string;
  description: string;
  slug: string;
  date?: string;
  image?: string;
};

export function BlogPostItem({
  title,
  description,
  slug,
  date,
  image,
}: BlogPostItemProps) {
  return (
    <article className="flex gap-4">
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
        <h2 className="text-lg font-semibold">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>

        {date && (
          <p className="text-xs text-muted-foreground">{date}</p>
        )}

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
