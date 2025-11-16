import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "actualites");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContent);

      return {
        slug: filename.replace(".md", "").replace(".mdx", ""),
        title: data.title || "Sans titre",
        date: data.date || null,
        excerpt: data.excerpt || content.substring(0, 150) + "...",
        content,
      };
    });
}

export function getPostBySlug(slug) {
  const fullPathMd = path.join(postsDirectory, `${slug}.md`);
  const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`);

  const realPath = fs.existsSync(fullPathMd)
    ? fullPathMd
    : fs.existsSync(fullPathMdx)
    ? fullPathMdx
    : null;

  if (!realPath) return null;

  const fileContent = fs.readFileSync(realPath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Sans titre",
    date: data.date || null,
    content,
  };
}
