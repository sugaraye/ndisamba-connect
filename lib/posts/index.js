// lib/posts.js

// Liste des articles (tu peux en ajouter autant que tu veux)
const posts = [
  {
    slug: "lancement-nouvelle-filiere",
    title: "Lancement d’une nouvelle filière à Ndi Samba Polytech",
    date: "2025-02-01",
    author: "Direction Générale",
    content: `
      Nous sommes heureux d’annoncer l’ouverture d'une nouvelle filière professionnelle 
      destinée à renforcer les compétences techniques de nos étudiants.
    `
  },
  {
    slug: "partenariat-international",
    title: "Signature d’un partenariat international",
    date: "2025-01-15",
    author: "Service Coopération",
    content: `
      Ndi Samba Polytech a signé un important partenariat avec plusieurs universités 
      européennes dans le cadre du programme Erasmus+.
    `
  }
];

// =============================
// Récupère tous les articles
// =============================
export function getAllPosts() {
  // tri du plus récent au plus ancien
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// =============================
// Récupère un article par slug
// =============================
export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
