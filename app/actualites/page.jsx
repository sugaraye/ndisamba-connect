import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function ActualitesPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Actualités & Projets</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white rounded shadow p-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              Publié le {post.date} — {post.author}
            </p>

            <Link
              href={`/actualites/${post.slug}`}
              className="text-blue-700 underline mt-4 inline-block"
            >
              Lire l’article →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
