// app/entites/page.jsx
'use client';

import EntityCard from '../components/EntityCard';
import Link from 'next/link';
import { useState, useMemo } from 'react';

export default function EntitesPage() {
  const allEntities = [
    {
      id: 1,
      name: "Institut Universitaire Joseph Ndi Samba",
      description: "Enseignement supérieur universitaire avec licences et masters professionnels dans les domaines du management, informatique et génie civil. Formation continue et alternance disponibles.",
      site: "universitedisamba.com",
      image: "/assets/images/iujs-campus.jpg",
      logo: "/assets/logos/logo-iujs.png",
      link: "/entites/iujs",
      category: "Enseignement Supérieur",
      locations: ["Mvan-Tropicana, Yaoundé", "Face Chapelle EEC, Beedi-Marché, Douala"],
      phone: "+237 689 18 43 39",
      email: "contact@universitedisamba.com"
    },
    {
      id: 2,
      name: "Ndi Samba Polytech",
      description: "École polytechnique formant des techniciens supérieurs (BTS) et ingénieurs dans les domaines industriels, technologiques et du génie civil. Partenariats industriels forts.",
      site: "ndisambapolytech.com",
      image: "/assets/images/polytech-lab.jpg",
      logo: "/assets/logos/logo-polytech.png",
      link: "/entites/polytech",
      category: "Enseignement Supérieur",
      locations: ["Face Chapelle EEC, Beedi-Marché, Douala"],
      phone: "+237 689 18 43 39",
      email: "contact@universitendisamba.com"
    },
    {
      id: 3,
      name: "Institut Samba Secondaire",
      description: "Enseignement secondaire général avec préparation aux baccalauréats et orientation universitaire. Programme renforcé en sciences et technologies.",
      site: "Enseignement secondaire",
      image: "/assets/images/secondaire-campus.jpg",
      logo: "/assets/logos/logo-secondaire.png",
      link: "/entites/secondaire",
      category: "Enseignement Secondaire",
      locations: ["Mvog-ada, Yaoundé"],
      phone: "+237 689 18 43 39",
      email: "infos@groupendisambaformation.com"
    },
    {
      id: 4,
      name: "NS Logistique Transit France",
      description: "Services complets de transit international, logistique et dédouanement entre l'Europe et l'Afrique. Solutions sur mesure pour entreprises et particuliers.",
      site: "nslogistique.fr",
      image: "/assets/images/logistique-entrepot.jpg",
      logo: "/assets/logos/logo-logistique.png",
      link: "/entites/logistique-france",
      category: "Logistique, Groupage",
      locations: ["Siège: 60, rue Fracçois 1er, 75008 Paris", "Logistique: 56, rue des Alliés, 42000 Saint-Étienne. FRANCE"],
      phone: "+33 7 59 44 54 03",
      email: "contact@nslogistique.fr"
    },
    {
      id: 5,
      name: "GNS Douane-Transit-Logistique Cameroun",
      description: "Services de dédouanement, transit et logistique au Cameroun. Agences à Douala (siège) et Kribi. Expertise en procédures douanières.",
      site: "Siège: Douala — Agence: Kribi",
      image: "/assets/images/douane-bureau.jpg",
      logo: "/assets/logos/logo-douane.png",
      link: "/entites/douane",
      category: "Douane & Transit",
      locations: ["Carrefour Tiff, bvld de la Republique, Douala", "Face Commissariat Spécial, Kribi"],
      phone: "+237 689 18 43 39",
      email: "infos@groupendisambaformation.com"
    },
    {
      id: 6,
      name: "La Tchaux Hotel & Resorts",
      description: "Hôtel de charme 4 étoiles avec piscine, restaurant gastronomique, salles de conférence et services de navette. Idéal pour voyages d'affaires et tourisme.",
      site: "latchauxhotelyaounde.com",
      image: "/assets/images/hotel-exterieur.jpg",
      logo: "/assets/logos/logo-hotel.png",
      link: "/entites/tchaux",
      category: "Hôtellerie",
      locations: ["Benebalot/Nsimalen, Yaoundé. CAMEROUN"],
      phone: "+237 690 62 63 78",
      email: "infos@groupendisambaformation.com"
    },
    {
      id: 7,
      name: "GNSF Avocats & Associés",
      description: "Cabinet d'avocats spécialisé en droit des affaires, droit commercial, droit des sociétés et conseil juridique aux entreprises.",
      site: "Conseil juridique",
      image: "/assets/images/avocats-bureau.jpg",
      logo: "/assets/logos/logo-avocats.png",
      link: "/entites/avocats",
      category: "Services Juridiques",
      locations: ["Carrefour des carreaux, Yaoundé. CAMEROUN"],
      phone: "+237 689 18 43 39",
      email: "infos@groupendisambaformation.com"
    },
    {
      id: 8,
      name: "Cabinet-Conseil Afam Services",
      description: "Cabinet de conseil en gestion, audit organisationnel, accompagnement stratégique et formation professionnelle pour les entreprises.",
      site: "afam-services.com",
      image: "/assets/images/afam-bureau.jpg",
      logo: "/assets/logos/logo-afam.png",
      link: "/entites/afam",
      category: "Conseil Entreprises",
      locations: ["Face Gazolent-Ekounou, Yaoundé. CAMEROUN"],
      phone: "+237 690 62 63 78",
      email: "contact@afam-services.com"
    },
    {
      id: 9,
      name: "Centre Médical RIRCO",
      description: "Centre de soins médicaux complets avec consultations générales et spécialisées, analyses biologiques et imagerie médicale. Créateur du Ngul Be Tara",
      site: "Soins médicaux et analyses",
      image: "/assets/images/medical-centre.jpg",
      logo: "/assets/logos/logo-rirco.png",
      link: "/entites/rirco",
      category: "Santé & Recherche Médicale",
      locations: ["Campus Ndi Samba, Tropicana, Yaoundé. CAMEROUN"],
      phone: "+237 696 16 49 32",
      email: "infos@groupendisambaformation.com"
    },
    {
      id: 10,
      name: "Garage Samba Automobiles",
      description: "Garage automobile spécialisé dans l'entretien, la réparation mécanique, la carrosserie et la vente de pièces détachées originales.",
      site: "Entretien et réparation",
      image: "/assets/images/garage-atelier.jpg",
      logo: "/assets/logos/logo-garage.png",
      link: "/entites/garage",
      category: "Mécanique Automobile",
      locations: ["Tropicana, Yaoundé. CAMEROUN"],
      phone: "+237 689 18 43 39",
      email: "infos@groupendisambaformation.com"
    },
    {
      id: 11,
      name: "Ndi Samba Online",
      description: "Plateforme de e-learning innovante proposant des cours en ligne, certifications professionnelles et formations à distance interactives.",
      site: "elearningsamba.com",
      image: "/assets/images/online-platform.jpg",
      logo: "/assets/logos/logo-online.png",
      link: "/entites/online",
      category: "E-learning",
      locations: ["En ligne"],
      phone: "+237 689 18 43 39",
      email: "contact@universitendisamba.com"
    },
    {
      id: 12,
      name: "Campus Latina Espagne",
      description: "Agence internationale située en Espagne proposant des programmes d'études, échanges universitaires et formations interculturelles en Europe.",
      site: "campuslatina.es",
      image: "/assets/images/campus-espagne.jpg",
      logo: "/assets/logos/logo-campus.png",
      link: "/entites/campus-espagne",
      category: "Mobilité académique",
      locations: ["Calle Albia de Castro, 4, Piso 1, Puerta A, 26004 Logroño La Rioja, ESPAÑA"],
      phone: "+34 631 314 723",
      email: "infos@groupendisambaformation.com"
    }
  ];

  // États pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  // Extraire les catégories uniques
  const categories = ['Toutes', ...new Set(allEntities.map(entity => entity.category))];

  // Filtrer les entités
  const filteredEntities = useMemo(() => {
    return allEntities.filter(entity => {
      const matchesSearch = searchTerm === '' || 
        entity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entity.locations.some(location => 
          location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesCategory = selectedCategory === 'Toutes' || 
        entity.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Statistiques mises à jour
  const entitiesCount = filteredEntities.length;
  const categoriesCount = new Set(filteredEntities.map(entity => entity.category)).size;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête de page */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-6 text-primary-600 hover:text-primary-700 transition-colors">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Toutes nos <span className="text-secondary-600">Entités</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez l'écosystème complet du Groupe Ndi Samba Formation à travers nos entités spécialisées.
          </p>
          
          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une entité, une catégorie, une localisation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary-600">{entitiesCount}</div>
              <div className="text-sm text-gray-600">Entités</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-secondary-600">{categoriesCount}</div>
              <div className="text-sm text-gray-600">Secteurs</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Pays</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50'
                }`}
              >
                {category}
                {category !== 'Toutes' && (
                  <span className="ml-1 text-xs opacity-70">
                    ({allEntities.filter(e => e.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Indicateur de résultats */}
          {(searchTerm || selectedCategory !== 'Toutes') && (
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                {filteredEntities.length === 0 ? (
                  "Aucun résultat trouvé"
                ) : (
                  `${filteredEntities.length} résultat${filteredEntities.length > 1 ? 's' : ''} trouvé${filteredEntities.length > 1 ? 's' : ''}`
                )}
                {searchTerm && (
                  <span> pour <span className="font-semibold text-primary-700">"{searchTerm}"</span></span>
                )}
                {selectedCategory !== 'Toutes' && (
                  <span> dans <span className="font-semibold text-secondary-600">{selectedCategory}</span></span>
                )}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Toutes');
                }}
                className="mt-2 text-sm text-primary-600 hover:text-primary-700 underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>

        {/* Grille des entités filtrées */}
        {filteredEntities.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEntities.map((entity) => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Aucune entité trouvée</h3>
            <p className="text-gray-600 mb-6">
              Aucune entité ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Toutes');
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Voir toutes les entités
            </button>
          </div>
        )}

        {/* Section CTA */}
        <div className="text-center mt-16 p-8 bg-primary-900 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p className="mb-6">Notre équipe est à votre disposition pour vous orienter vers la bonne entité</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </Link>
            <a 
              href="https://t.me/SambaLearnBot"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-900 transition-colors"
            >
              🤖 Chatbot Assistant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}