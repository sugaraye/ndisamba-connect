import EntityCard from './components/EntityCard';
import Image from 'next/image';

export default function Home() {
  const entities = [
    {
      id: 1,
      name: "Institut Universitaire Joseph Ndi Samba",
      description: "Enseignement supérieur universitaire avec licences et masters professionnels",
      site: "universitedisamba.com",
      image: "/assets/IUT.jpg",
      link: "/entites/iujs",
      category: "Éducation"
    },
    // ... vos autres entités
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Section Hero améliorée */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
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
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-900 transition-all text-lg"
            >
              Nous Contacter
            </a>
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez l'écosystème complet du Groupe Ndi Samba Formation à travers nos différentes entités spécialisées.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {entities.map((ent) => (
            <EntityCard key={ent.id} entity={ent} />
          ))}
        </div>
      </section>
    </div>
  );
}