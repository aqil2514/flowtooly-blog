import { MDXRemote } from "next-mdx-remote/rsc";
import * as mdxComponents from "@/components/mdx";

export function BlogArticleContent({ source }: { source: string }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={mdxComponents} />
    </article>
  );
}
