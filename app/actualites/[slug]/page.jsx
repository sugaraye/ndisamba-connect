// lib/posts.js
// Source simple d'articles pour ton site.
// -> Facile à remplacer plus tard par des fichiers Markdown.

const posts = [
  {
    slug: "lancement-nouvelle-filiere",
    title: "Lancement d’une nouvelle filière à Ndi Samba Polytech",
    date: "2025-02-01",
    author: "Direction Générale",
    content: `
Nous sommes heureux d’annoncer l’ouverture d'une nouvelle filière professionnelle destinée à renforcer les compétences techniques de nos étudiants.
    `
  },
  {
    slug: "partenariat-international",
    title: "Signature d’un partenariat international",
    date: "2025-01-15",
    author: "Service Coopération",
    content: `
Ndi Samba Polytech a signé un important partenariat avec plusieurs universités européennes dans le cadre du programme Erasmus+.
    `
  }
];

// Retourne tous les posts triés (du plus récent au plus ancien)
export function getAllPosts() {
  return posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Alias (si ton code attend getPosts)
export function getPosts() {
  return getAllPosts();
}

// Récupère un article par son slug
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
