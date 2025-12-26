import fs from "fs";
import matter from "gray-matter";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "src/content/blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date?: string;
  image?: string;
};

export function getAllPosts() {
  const files = fs.readdirSync(CONTENT_PATH);

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(CONTENT_PATH, file);
    const source = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(source);

    return {
      slug,
      ...(data as BlogFrontmatter),
    };
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(CONTENT_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(source);

  return {
    frontmatter: data as BlogFrontmatter,
    content,
  };
}
