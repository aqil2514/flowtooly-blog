import { BlogFrontmatter } from "../mdx";

export function generateArticleJsonLd({
  slug,
  frontmatter,
}: {
  slug: string;
  frontmatter: BlogFrontmatter;
}) {
  const baseUrl = "https://blog.flowtooly.com";
  const url = `${baseUrl}/blog/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    image: frontmatter.image
      ? [`${baseUrl}${frontmatter.image}`]
      : undefined,
    author: {
      "@type": "Person",
      name: "Muhammad Aqil Maulana",
    },
    publisher: {
      "@type": "Organization",
      name: "Flowtooly",
      logo: {
        "@type": "ImageObject",
        url: "https://flowtooly.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
