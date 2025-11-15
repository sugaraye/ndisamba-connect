import { getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

export default function ArticlePage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-3 text-blue-900">{post.title}</h1>
      <p className="text-gray-500 mb-8">
        Publié le {post.date} — {post.author}
      </p>

      <article
        className="prose prose-blue"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  );
}
