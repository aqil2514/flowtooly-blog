import { getAllPosts } from "@/lib/mdx";
import { BlogPostItem } from "../molecules/blog-post-item";

const POSTS = getAllPosts();

export function BlogPostList() {
  return (
    <section className="space-y-8">
      {POSTS.map((post) => (
        <BlogPostItem key={post.slug} {...post} />
      ))}
    </section>
  );
}
