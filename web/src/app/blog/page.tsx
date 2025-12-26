import { BlogHeader } from "@/components/organisms/blog-header";
import { BlogPostList } from "@/components/organisms/blog-post-list";
import { FlowtoolyCTA } from "@/components/organisms/flowtooly-cta";

export default function BlogPage() {

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-16">
      <BlogHeader />

      <BlogPostList />

      <FlowtoolyCTA />
    </main>
  );
}
