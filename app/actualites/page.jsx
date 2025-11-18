// app/actualites/page.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState('Toutes');

  // Données des actualités
  const actualites = [
    {
      id: 1,
      titre: "Lancement de NS Logistique Transit France en 2025",
      resume: "Le Groupe Ndi Samba Formation étend son réseau logistique en Europe avec l'ouverture de NS Logistique Transit France, spécialisée dans le transit international entre l'Europe et l'Afrique.",
      contenu: "Après plusieurs mois de préparation, le Groupe Ndi Samba Formation annonce le lancement officiel de NS Logistique Transit France au premier trimestre 2025. Cette nouvelle entité viendra renforcer notre présence internationale et offrira des solutions logistiques complètes entre la France et l'Afrique.",
      date: "15 Décembre 2024",
      auteur: "Raymond Samba Ndi",
      categorie: "Expansion Internationale",
      image: "/assets/images/actualites/logistique-france.jpg",
      entite: "NS Logistique Transit France",
      tags: ["logistique", "international", "france", "expansion"]
    },
    {
      id: 2,
      titre: "Le Ngul Be Tara reçoit le Prix d'Innovation Médicale 2024",
      resume: "Le produit phare du Centre Médical RIRCO, inventé par le Dr. Marlyse Peyou Ndi, est récompensé pour son innovation dans la médecine naturelle.",
      contenu: "Le Ngul Be Tara, produit innovant à base de plantes médicinales africaines, a reçu le Prix d'Innovation Médicale 2024 lors de la Conférence Internationale de Médecine Traditionnelle à Genève. Cette reconnaissance consacre des années de recherche et développement menées par le Dr. Marlyse Peyou Ndi.",
      date: "10 Novembre 2024",
      auteur: "Dr. Marlyse Peyou Ndi",
      categorie: "Innovation Médicale",
      image: "/assets/images/actualites/ngul-be-tara-prix.jpg",
      entite: "Centre Médical RIRCO",
      tags: ["médecine naturelle", "innovation", "recherche", "prix"]
    },
    {
      id: 3,
      titre: "Ndi Samba Polytech signe un partenariat avec 10 entreprises industrielles",
      resume: "L'école polytechnique renforce son réseau d'entreprises partenaires pour l'insertion professionnelle de ses étudiants en génie industriel et informatique.",
      contenu: "Dans le cadre de son développement stratégique, Ndi Samba Polytech a signé des conventions de partenariat avec 10 entreprises leaders dans les secteurs de l'industrie, de la technologie et du BTP. Ces partenariats permettront aux étudiants de bénéficier de stages garantis et d'opportunités d'emploi privilégiées.",
      date: "25 Octobre 2024",
      auteur: "Jean-Pierre Ndi",
      categorie: "Partenariats",
      image: "/assets/images/actualites/partenariat-polytech.jpg",
      entite: "Ndi Samba Polytech",
      tags: ["partenariat", "industrie", "emploi", "formation"]
    },
    {
      id: 4,
      titre: "Campus Latina Espagne : 500 étudiants placés en Europe",
      resume: "L'agence internationale célèbre un cap important avec plus de 500 étudiants africains accompagnés vers des universités européennes.",
      contenu: "Campus Latina Espagne atteint un jalon significatif avec plus de 500 étudiants africains ayant bénéficié de ses services d'accompagnement vers des universités européennes. Avec un taux de réussite aux visas de 98%, l'agence confirme son expertise dans les mobilités étudiantes internationales.",
      date: "15 Octobre 2024",
      auteur: "Carlos Rodriguez",
      categorie: "Réussite Internationale",
      image: "/assets/images/actualites/campus-latina-success.jpg",
      entite: "Campus Latina Espagne",
      tags: ["international", "étudiants", "europe", "réussite"]
    },
    {
      id: 5,
      titre: "La Tchaux Hotel & Resorts obtient sa 4ème étoile",
      resume: "L'hôtel de charme de Yaoundé est officiellement classé 4 étoiles, reconnaissant ainsi son excellence en matière de service et d'infrastructures.",
      contenu: "Après un audit rigoureux du Ministère du Tourisme, La Tchaux Hotel & Resorts a obtenu sa classification 4 étoiles. Cette reconnaissance officialise le positionnement premium de l'établissement qui dispose désormais de 50 chambres et suites, d'un restaurant gastronomique et de salles de conférence ultramodernes.",
      date: "30 Septembre 2024",
      auteur: "Chantal Ndi",
      categorie: "Reconnaissance",
      image: "/assets/images/actualites/hotel-4-etoiles.jpg",
      entite: "La Tchaux Hotel & Resorts",
      tags: ["hôtellerie", "classification", "excellence", "yaoundé"]
    },
    {
      id: 6,
      titre: "Ndi Samba Online dépasse les 2,500 apprenants actifs",
      resume: "La plateforme de e-learning connaît une croissance exponentielle avec plus de 2,500 apprenants actifs sur ses formations en ligne.",
      contenu: "La digitalisation de l'éducation continue son essor au sein du Groupe Ndi Samba Formation. La plateforme Ndi Samba Online enregistre plus de 2,500 apprenants actifs, confirmant le succès de son modèle d'apprentissage innovant combinant flexibilité et qualité pédagogique.",
      date: "20 Septembre 2024",
      auteur: "Raymond Samba Ndi",
      categorie: "Croissance Digitale",
      image: "/assets/images/actualites/elearning-croissance.jpg",
      entite: "Ndi Samba Online",
      tags: ["digital", "croissance", "formation", "innovation"]
    }
  ];

  // Catégories uniques
  const categories = ['Toutes', ...new Set(actualites.map(article => article.categorie))];

  // Filtrer les actualités par catégorie
  const filteredActualites = activeCategory === 'Toutes' 
    ? actualites 
    : actualites.filter(article => article.categorie === activeCategory);

  // Articles les plus récents (pour la sidebar)
  const articlesRecents = actualites.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* En-tête de page */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Actualités du <span className="text-orange-600">Groupe</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles, innovations et développements de notre écosystème
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Filtres par catégorie */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📂 Catégories</h3>
              <div className="space-y-2">
                {categories.map(categorie => (
                  <button
                    key={categorie}
                    onClick={() => setActiveCategory(categorie)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeCategory === categorie
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {categorie}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles récents */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🆕 Dernières Actualités</h3>
              <div className="space-y-4">
                {articlesRecents.map(article => (
                  <Link 
                    key={article.id} 
                    href={`/actualites/${article.id}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <p className="font-semibold text-gray-900 text-sm mb-1">{article.titre}</p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {article.entite}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">📧 Restez Informé</h3>
              <p className="text-blue-100 text-sm mb-4">
                Recevez nos actualités directement dans votre boîte email
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm"
                />
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Chiffres Clés</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Actualités publiées</span>
                  <span className="font-bold text-blue-600">{actualites.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Entités couvertes</span>
                  <span className="font-bold text-green-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mois d'archives</span>
                  <span className="font-bold text-purple-600">6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* En-tête des résultats */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeCategory === 'Toutes' ? 'Toutes les actualités' : `Actualités : ${activeCategory}`}
                </h2>
                <p className="text-gray-600">
                  {filteredActualites.length} article{filteredActualites.length > 1 ? 's' : ''} trouvé{filteredActualites.length > 1 ? 's' : ''}
                </p>
              </div>
              
              {/* Recherche (optionnel pour plus tard) */}
              <div className="mt-4 sm:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher une actualité..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>
            </div>

            {/* Grille des articles */}
            {filteredActualites.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredActualites.map(article => (
                  <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Image de l'article */}
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl">
                      📰
                    </div>
                    
                    <div className="p-6">
                      {/* En-tête de l'article */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {article.entite}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>

                      {/* Titre et résumé */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.titre}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.resume}
                      </p>

                      {/* Auteur et catégorie */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600">
                            {article.auteur.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{article.auteur}</span>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {article.categorie}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between items-center">
                        <Link 
                          href={`/actualites/${article.id}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                        >
                          Lire la suite →
                        </Link>
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-blue-500 transition-colors">
                            ♡
                          </button>
                          <button className="text-gray-400 hover:text-blue-500 transition-colors">
                            ↷
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Aucune actualité trouvée</h3>
                <p className="text-gray-600 mb-6">
                  Aucune actualité ne correspond à la catégorie sélectionnée.
                </p>
                <button
                  onClick={() => setActiveCategory('Toutes')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Voir toutes les actualités
                </button>
              </div>
            )}

            {/* Pagination (pour plus tard) */}
            {filteredActualites.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
                    Suivant →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section newsletter globale */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ne manquez aucune actualité</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter et soyez les premiers informés des développements de notre écosystème.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
          <p className="text-orange-200 text-sm mt-4">
            📧 Désabonnement possible à tout moment • Respect de votre vie privée
          </p>
        </div>
      </div>
    </div>
  );
}