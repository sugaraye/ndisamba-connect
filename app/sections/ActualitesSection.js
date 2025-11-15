import { getAllPosts } from "../../lib/posts";

export default async function ActualitesSection() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        📰 Actualités & Projets
      </h2>
      <p className="text-lg text-gray-700 text-center mb-10">
        Découvrez les dernières réalisations, initiatives et projets du Groupe Ndi Samba.
      </p>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          Aucun article disponible pour le moment.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Publié le {post.date} — Par {post.author}
              </p>
              <p className="text-gray-700 mb-4">
                {post.content.substring(0, 150)}...
              </p>
              <a
                href={`/actualites/${post.slug}`}
                className="text-blue-700 hover:underline font-semibold"
              >
                Lire l’article →
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
