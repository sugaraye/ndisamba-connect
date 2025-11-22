// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      
      {/* Hero Section AVEC image de fond */}
      <section className="relative min-h-[80vh] flex items-center hero-bg">
        {/* Overlay bleu avec transparence */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bienvenue sur <span className="text-orange-400">NdiSamba Connect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Le portail numérique du Groupe Ndi Samba Formation et Partenaires —<br />
            La Centrale de nos écoles, services et projets d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/about" 
              className="bg-orange-500 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Découvrir le Groupe
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Notre Impact en Chiffres
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-3">57+</div>
              <div className="text-blue-900 font-semibold text-lg">Années d'expérience</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-3">12</div>
              <div className="text-blue-900 font-semibold text-lg">Entités spécialisées</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-3">300K+</div>
              <div className="text-blue-900 font-semibold text-lg">Personnes formées</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-3">4</div>
              <div className="text-blue-900 font-semibold text-lg">Pays d'implantation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Entités du Groupe */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Nos Entités Spécialisées
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Éducation */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-blue-600">🎓</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Éducation & Formation</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Institut Samba Secondaire</li>
                <li>• Ndi Samba Polytech</li>
                <li>• Institut Universitaire J. Ndi Samba</li>
                <li>• Campus Latina</li>
                <li>• Ndi Samba Online</li>
              </ul>
              <Link href="/entites" className="text-orange-500 font-semibold hover:text-orange-600">
                Voir les établissements →
              </Link>
            </div>

            {/* Santé & Recherche */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-green-600">🏥</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Santé & Recherche</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Laboratoire RIRCO</li>
                <li>• Centre Médical</li>
                <li>• Recherche Scientifique</li>
                <li>• Innovations Médicales</li>
              </ul>
              <Link href="/entites" className="text-orange-500 font-semibold hover:text-orange-600">
                Découvrir nos recherches →
              </Link>
            </div>

            {/* Services & Conseil */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-purple-600">⚖️</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Services & Conseil</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• GBSF & Avocats Associés</li>
                <li>• GNS Douane-Transit-Logistique</li>
                <li>• NS Logistique Transit France</li>
              </ul>
              <Link href="/entites" className="text-orange-500 font-semibold hover:text-orange-600">
                Explorer nos services →
              </Link>
            </div>

            {/* Hôtellerie */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-red-600">🏨</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Hôtellerie & Tourisme</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Hotel la Tchaux & Resorts</li>
                <li>• Afam Services</li>
              </ul>
              <Link href="/entites" className="text-orange-500 font-semibold hover:text-orange-600">
                Voir nos établissements →
              </Link>
            </div>

            {/* International */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-yellow-600">🌍</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Présence Internationale</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cameroun</li>
                <li>• Espagne</li>
                <li>• France</li>
                <li>• Autres pays</li>
              </ul>
              <Link href="/entites" className="text-orange-500 font-semibold hover:text-orange-600">
                Voir nos implantations →
              </Link>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-indigo-600">🚀</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovation & Digital</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• NdiSamba Connect</li>
                <li>• Plateformes digitales</li>
                <li>• Innovation continue</li>
              </ul>
              <Link href="/entites" className="text-orange-500 font-semibold hover:text-orange-600">
                Découvrir l'innovation →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Rejoindre l'Excellence ?
          </h2>
          <p className="text-white text-xl mb-8">
            Que vous soyez étudiant, partenaire ou investisseur, découvrez comment collaborer avec nous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/entites" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
            >
              Explorer nos Entités
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-200"
            >
              Devenir Partenaire
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}