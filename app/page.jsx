import EntityCard from './components/EntityCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const entities = [
    {
      id: 1,
      name: "Institut Universitaire Joseph Ndi Samba",
      description: "Enseignement supérieur universitaire avec licences et masters professionnels",
      site: "universitedisamba.com",
      image: "/assets/images/iujs-campus.jpg",
      logo: "/assets/logos/logo-iujs.png",
      link: "/entites/iujs",
      category: "Éducation",
      locations: ["Douala", "Yaoundé"],
      phone: "+237 689 18 43 39"
    },
    {
      id: 2,
      name: "Ndi Samba Polytech",
      description: "École polytechnique formant des techniciens supérieurs et ingénieurs",
      site: "ndisambapolytech.com",
      image: "/assets/images/polytech-lab.jpg",
      logo: "/assets/logos/logo-polytech.png",
      link: "/entites/polytech",
      category: "Enseignement Technique",
      locations: ["Douala"],
      phone: "+237 689 18 43 39"
    },
    {
      id: 3,
      name: "Institut Samba Secondaire",
      description: "Enseignement secondaire général avec préparation aux baccalauréats",
      site: "Enseignement secondaire",
      image: "/assets/images/secondaire-campus.jpg",
      logo: "/assets/logos/logo-secondaire.png",
      link: "/entites/secondaire",
      category: "Enseignement Secondaire",
      locations: ["Douala"],
      phone: "+237 689 18 43 39"
    },
    {
      id: 4,
      name: "NS Logistique Transit France",
      description: "Services de transit international, logistique et dédouanement",
      site: "nslogistique.fr",
      image: "/assets/images/logistique-entrepot.jpg",
      logo: "/assets/logos/logo-logistique.png",
      link: "/entites/logistique-france",
      category: "Logistique",
      locations: ["Paris", "Saint-Étienne"],
      phone: "+33 1 23 45 67 89"
    },
    {
      id: 5,
      name: "GNS Douane-Transit-Logistique Cameroun",
      description: "Services de dédouanement, transit et logistique au Cameroun",
      site: "Siège: Douala — Agence: Kribi",
      image: "/assets/images/douane-bureau.jpg",
      logo: "/assets/logos/logo-douane.png",
      link: "/entites/douane",
      category: "Douane & Transit",
      locations: ["Douala", "Kribi"],
      phone: "+237 689 18 43 39"
    },
    {
      id: 6,
      name: "La Tchaux Hotel & Resorts",
      description: "Hôtel de charme avec piscine, restaurant et services de navette",
      site: "latchauxhotelyaounde.com",
      image: "/assets/images/hotel-exterieur.jpg",
      logo: "/assets/logos/logo-hotel.png",
      link: "/entites/tchaux",
      category: "Hôtellerie",
      locations: ["Yaoundé"],
      phone: "+237 689 18 43 39"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Section Hero avec image de fond et logo */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Campus Groupe Ndi Samba Formation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        
        {/* Contenu */}
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Logo principal centré */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <Image
                src="/assets/logos/logo-gnsf.png"
                alt="Groupe Ndi Samba Formation"
                width={120}
                height={120}
                className="w-auto h-20"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Bienvenue sur <span className="text-secondary-300">NdiSamba Connect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Le portail numérique du Groupe Ndi Samba Formation et Partenaires — 
            centralise nos écoles, services et projets d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#entites" 
              className="bg-white text-primary-900 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Découvrir le Groupe →
            </a>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-900 transition-all text-lg text-center"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section Recherche */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-2 border border-primary-200">
          <input 
            id="searchInput"
            placeholder="🔍 Rechercher une entité, un service..."
            aria-label="Rechercher"
            className="w-full px-6 py-4 text-lg border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Section Entités */}
      <section id="entites" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Nos <span className="text-secondary-600">Entités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez l'écosystème complet du Groupe Ndi Samba Formation
          </p>
          <Link 
            href="/entites"
            className="bg-primary-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block"
          >
            Voir Toutes les Entités →
          </Link>
        </div>
        
        {/* Grille des entités */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {entities.map((ent) => (
            <EntityCard key={ent.id} entity={ent} />
          ))}
        </div>
      </section>
    </div>
  );
}