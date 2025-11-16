export function getPosts() {
  return [
    {
      slug: "exemple-article",
      title: "Titre d’exemple",
      content: "Contenu de test...",
      date: "2025-01-01"
    }
  ];
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug);
}
