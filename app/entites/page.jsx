import EntityCard from '../components/EntityCard';
import Link from 'next/link';

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
      category: "Enseignement Technique",
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
      category: "Logistique",
      locations: ["Siège: 60, rue Fracçois 1er, 75008 Paris", "Logistique: 56, rue des Alliés, 42000 Saint-Étienne. FRANCE"],
      phone: "+33 7  59 44 54 03",
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
      category: "Conseil",
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
      category: "Santé",
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
      category: "Automobile",
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
      category: "International",
      locations: ["Calle Albia de Castro, 4, Piso 1, Puerta A, 26004 Logroño La Rioja, ESPAÑA"],
      phone: "+34 631 314 723",
      email: "infos@groupendisambaformation.com"
    }
  ];

  // Grouper les entités par catégorie
  const entitiesByCategory = allEntities.reduce((acc, entity) => {
    if (!acc[entity.category]) {
      acc[entity.category] = [];
    }
    acc[entity.category].push(entity);
    return acc;
  }, {});

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
          
          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary-600">{allEntities.length}</div>
              <div className="text-sm text-gray-600">Entités</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-secondary-600">{Object.keys(entitiesByCategory).length}</div>
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
            <button className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Toutes
            </button>
            {Object.keys(entitiesByCategory).map(category => (
              <button 
                key={category}
                className="bg-white text-primary-600 border border-primary-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de toutes les entités */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {allEntities.map((entity) => (
            <EntityCard key={entity.id} entity={entity} />
          ))}
        </div>

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