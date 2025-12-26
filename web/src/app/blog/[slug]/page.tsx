import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import { BlogArticleHeader } from "@/components/organisms/blog-article-header";
import { BlogArticleContent } from "@/components/organisms/blog-article-content";
import { FlowtoolyCTA } from "@/components/organisms/flowtooly-cta";
import { generateArticleJsonLd } from "@/lib/jsonld/article";
import { generateBreadcrumbJsonLd } from "@/lib/jsonld/breadcrumb";
import { Toc } from "@/components/molecules/toc";
import { extractToc } from "@/lib/toc";
import { getReadingTime } from "@/lib/reading-time";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* =======================
   SEO METADATA
======================= */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const { title, description, image } = post.frontmatter;

  const url = `https://blog.flowtooly.com/blog/${slug}`;
  const ogImage = image
    ? `https://blog.flowtooly.com${image}`
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}


export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const jsonLd = generateArticleJsonLd({
    slug,
    frontmatter: post.frontmatter,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd({
    slug,
    title: post.frontmatter.title,
  });

  const toc = extractToc(post.content);

  const readingTime = getReadingTime(post.content);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <BlogArticleHeader {...post.frontmatter} readingTime={readingTime.text} />

      <Toc items={toc} />

      <BlogArticleContent source={post.content} />
      <FlowtoolyCTA />
    </main>
  );
}
