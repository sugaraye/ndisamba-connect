import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Publié le {post.date} — Par {post.author}
      </p>
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
