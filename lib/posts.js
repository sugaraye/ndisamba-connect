import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename));
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      content,
    };
  });
}

export function getPostBySlug(slug) {
  const fileContent = fs.readFileSync(path.join(postsDirectory, slug + ".md"));
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    content,
  };
}
