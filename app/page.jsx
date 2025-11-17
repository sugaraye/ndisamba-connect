import EntityCard from './components/EntityCard';

export default function Home() {
  const entities = [
    {
      id: 1,
      name: "Institut Universitaire Joseph Ndi Samba",
      description: "Université, licences, masters",
      site: "universitedisamba.com",
      image: "/assets/IUT.jpg",
      link: "/entites/iut"
    },
    {
      id: 2,
      name: "Ndi Samba Polytech",
      description: "BTS, licences, cycle ingénieur",
      site: "ndisambapolytech.com — Douala",
      image: "/assets/Polytech.jpg",
      link: "/entites/polytech"
    },
    {
      id: 3,
      name: "Institut Samba Secondaire",
      description: "Collège, lycée",
      site: "Enseignement secondaire",
      image: "/assets/Secondaire.jpg",
      link: "/entites/secondaire"
    },
    {
      id: 4,
      name: "NS Logistique Transit France",
      description: "Transit et logistique international",
      site: "nslogistique.fr — Paris / Saint-Étienne",
      image: "/assets/Logistique-France.jpg",
      link: "/entites/logistique-france"
    },
    {
      id: 5,
      name: "GNS Douane-Transit-Logistique Cameroun",
      description: "Dédouanement et transit",
      site: "Siège: Douala — Agence: Kribi",
      image: "/assets/Douane-Cameroun.jpg",
      link: "/entites/douane"
    },
    {
      id: 6,
      name: "La Tchaux Hotel & Resorts",
      description: "Hôtellerie, piscine, navette",
      site: "Ekoko II, Nsimalen — latchauxhotelyaounde.com",
      image: "/assets/Hotel-Tchaux.jpg",
      link: "/entites/tchaux"
    },
    {
      id: 7,
      name: "GNSF Avocats & Associés",
      description: "Droit des affaires",
      site: "Conseil juridique",
      image: "/assets/Avocats.jpg",
      link: "/entites/avocats"
    },
    {
      id: 8,
      name: "Cabinet-Conseil Afam Services",
      description: "Conseil en gestion",
      site: "afam-services.com — Yaoundé",
      image: "/assets/Afam.jpg",
      link: "/entites/afam"
    },
    {
      id: 9,
      name: "Centre Médical RIRCO",
      description: "Santé et diagnostics",
      site: "Soins médicaux et analyses",
      image: "/assets/RIRCO.jpg",
      link: "/entites/rirco"
    },
    {
      id: 10,
      name: "Garage Samba Automobiles",
      description: "Mécanique et services",
      site: "Entretien et réparation",
      image: "/assets/Garage.jpg",
      link: "/entites/garage"
    },
    {
      id: 11,
      name: "Ndi Samba Online",
      description: "Cours en ligne et certifications",
      site: "elearningsamba.com — e-learning",
      image: "/assets/Online.jpg",
      link: "/entites/online"
    },
    {
      id: 12,
      name: "Campus Latina Espagne",
      description: "Programmes internationaux",
      site: "Logroño — campuslatina.es",
      image: "/assets/Campus-Espagne.jpg",
      link: "/entites/campus-espagne"
    }
  ];

  return (
    <div>
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bienvenue sur NdiSamba Connect
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Le portail numérique du Groupe Ndi Samba Formation et Partenaires — centralise nos écoles, services et projets.
          </p>
          <a 
            href="#entites" 
            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors inline-block"
          >
            Découvrir le Groupe →
          </a>
        </div>
      </section>

      {/* Section Recherche */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <input 
            id="searchInput"
            placeholder="Rechercher une entité..."
            aria-label="Rechercher"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Section Entités */}
      <section id="entites" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Entités du Groupe
        </h2>
        
        {/* Cartes des entités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entities.map((ent) => (
            <EntityCard key={ent.id} entity={ent} />
          ))}
        </div>
      </section>
    </div>
  );
}