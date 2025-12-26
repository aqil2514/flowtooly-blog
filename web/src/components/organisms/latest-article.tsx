import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticlePreview } from "../molecules/article-preview";
import { getAllPosts } from "@/lib/mdx";

export function LatestArticles() {
  const posts = getAllPosts()
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

    console.log(posts)

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Artikel Terbaru</h2>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          Lihat semua
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <ArticlePreview
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/blog/${post.slug}`}
            image={post.image}
          />
        ))}
      </div>
    </section>
  );
}
