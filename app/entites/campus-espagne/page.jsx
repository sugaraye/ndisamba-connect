// app/entites/campus-espagne/page.jsx
'use client';

import Link from 'next/link';

export default function CampusEspagnePage() {
  const entity = {
    id: 12,
    name: "Campus Latina Espagne",
    slogan: "Votre passerelle vers l'Europe et l'international",
    description: "Agence internationale située en Espagne proposant des programmes d'études, échanges universitaires, formations interculturelles et services d'accompagnement pour étudiants et professionnels vers l'Europe.",
    site: "https://campuslatina.es",
    image: "/assets/images/campus-espagne.jpg",
    logo: "/assets/logos/logo-campus.png",
    category: "International",
    locations: [
      {
        name: "Siège Espagne",
        address: "Calle Albia de Castro, 4, Piso 1, Puerta A, 26004 Logroño La Rioja, ESPAÑA",
        type: "Siège Européen"
      },
      {
        name: "Bureau Cameroun",
        address: "Campus Ndi Samba, Yaoundé, Cameroun",
        type: "Antenne Afrique"
      }
    ],
    phone: "+34 631 314 723",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+34 631 314 723",
    
    // Informations détaillées
    founded: "2019",
    director: "M. Carlos Rodriguez",
    accreditation: "Agence Éducative Internationale - Registre Mercantil de La Rioja",
    recognition: "Membre de l'Association des Centres Éducatifs d'Espagne",
    
    // Services internationaux
    services: {
      "Programmes d'Études": [
        {
          name: "Échanges Universitaires",
          description: "Programmes d'échange avec universités européennes",
          destinations: ["Espagne", "France", "Italie", "Allemagne", "Portugal"],
          duree: "1 semestre à 1 an"
        },
        {
          name: "Double Diplômation", 
          description: "Formations bi-diplômantes Europe-Afrique",
          programmes: ["Licences doubles", "Masters conjoints", "MBA internationaux"],
          partenaires: "15 universités européennes"
        },
        {
          name: "Années Préparatoires",
          description: "Préparation aux études en Europe",
          cours: ["Espagnol intensif", "Culture européenne", "Méthodologie universitaire"],
          duree: "6-12 mois"
        }
      ],
      "Services aux Étudiants": [
        {
          name: "Accompagnement Visa",
          description: "Assistance complète procedures visa étudiant",
          services: ["Dossier visa", "Assurance santé", "Justificatifs financiers", "Entretien ambassade"],
          tauxReussite: "95%"
        },
        {
          name: "Hébergement & Logement",
          description: "Solutions de logement en Espagne",
          options: ["Résidences étudiantes", "Familles d'accueil", "Colocations", "Appartements"],
          localisation: "Proximité universités"
        },
        {
          name: "Intégration Culturelle",
          description: "Programme d'adaptation et d'intégration",
          activites: ["Cours de civilisation", "Activités sociales", "Réseau d'anciens", "Support linguistique"]
        }
      ],
      "Formations Professionnelles": [
        {
          name: "Stages en Entreprise",
          description: "Stages professionnels en Europe",
          secteurs: ["Tourisme", "Commerce", "Technologie", "Santé", "Ingénierie"],
          duree: "3-12 mois"
        },
        {
          name: "Formations Linguistiques", 
          description: "Cours de langues en immersion",
          langues: ["Espagnol", "Anglais", "Français", "Allemand"],
          certifications: "DELE, Cambridge, DELF"
        },
        {
          name: "Séjours Culturels",
          description: "Programmes courts découverte Europe",
          themes: ["Art et histoire", "Gastronomie", "Business européen", "Innovation"],
          duree: "2-4 semaines"
        }
      ]
    },

    // Universités partenaires
    universites: {
      "Espagne": [
        "Universidad de La Rioja",
        "Universidad Complutense de Madrid",
        "Universidad de Barcelona",
        "Universidad de Sevilla",
        "Universidad de Valencia"
      ],
      "France": [
        "Université Paris-Sorbonne",
        "Université de Lyon",
        "Université de Montpellier",
        "Sciences Po Paris",
        "HEC Paris"
      ],
      "Europe": [
        "Université de Genève (Suisse)",
        "Université de Lisbonne (Portugal)",
        "Université de Rome (Italie)",
        "Université de Cologne (Allemagne)",
        "Université de Varsovie (Pologne)"
      ]
    },

    // Processus d'admission
    admission: {
      "Étape 1 - Orientation": [
        "Consultation initiale gratuite",
        "Évaluation du profil académique",
        "Définition des objectifs",
        "Choix du programme adapté"
      ],
      "Étape 2 - Candidature": [
        "Préparation du dossier complet",
        "Lettres de motivation",
        "Recommandations académiques",
        "Tests linguistiques"
      ],
      "Étape 3 - Administrative": [
        "Inscription université partenaire",
        "Démarches visa étudiant",
        "Réservation hébergement",
        "Organisation voyage"
      ],
      "Étape 4 - Pré-départ": [
        "Briefing pré-départ",
        "Assurance santé internationale",
        "Informations pratiques",
        "Contact avec la communauté"
      ]
    },

    // Avantages exclusifs
    avantages: {
      "Expertise Internationale": [
        "Équipe bilingue français-espagnol",
        "Connaissance des systèmes éducatifs européens",
        "Réseau étendu d'universités partenaires",
        "Expérience des procédures administratives"
      ],
      "Accompagnement Personnalisé": [
        "Conseiller dédié pour chaque étudiant",
        "Support 24h/7 en Europe",
        "Suivi régulier pendant le séjour",
        "Assistance urgences"
      ],
      "Réseau & Communauté": [
        "Réseau d'anciens étudiants internationaux",
        "Événements networking",
        "Plateforme d'échanges",
        "Opportunités professionnelles"
      ]
    },

    // Coûts et financement
    couts: {
      "Frais d'Accompagnement": [
        "Accompagnement complet: 1,500€",
        "Assistance visa seule: 500€",
        "Recherche logement: 300€",
        "Orientation universitaire: 400€"
      ],
      "Coûts des Études": [
        "Universités publiques espagnoles: 750-2,500€/an",
        "Universités privées: 3,000-12,000€/an",
        "Formations linguistiques: 200-600€/mois",
        "Stages en entreprise: Gratuits ou rémunérés"
      ],
      "Frais de Vie": [
        "Logement: 300-600€/mois",
        "Nourriture: 200-300€/mois",
        "Transport: 40-60€/mois",
        "Assurance santé: 50-100€/mois"
      ]
    },

    // Témoignages
    temoignages: [
      {
        auteur: "Kevin T., Étudiant en Commerce",
        commentaire: "Grâce à Campus Latina, j'ai pu intégrer une université à Madrid. L'accompagnement pour le visa a été impeccable !",
        programme: "Échange universitaire à l'UC3M",
        destination: "Madrid, Espagne"
      },
      {
        auteur: "Amina S., Étudiante en Médecine",
        commentaire: "Double diplôme France-Cameroun réalisé sans stress. L'équipe m'a guidée à chaque étape.",
        programme: "Double diplôme médecine",
        destination: "Lyon, France"
      },
      {
        auteur: "Marc D., Professionnel Tourisme",
        commentaire: "Stage de 6 mois en hôtellerie à Barcelone. Expérience professionnelle incroyable !",
        programme: "Stage professionnel",
        destination: "Barcelone, Espagne"
      }
    ],

    // Chiffres clés
    stats: {
      "Étudiants Placés": "500+",
      "Pays Destinations": "8",
      "Taux de Réussite Visa": "98%",
      "Universités Partenaires": "25+",
      "Années d'Expérience": "5+"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                🇪🇸
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-red-100 mb-2">{entity.slogan}</p>
              <p className="text-red-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={entity.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  🌐 Site Officiel Espagne
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  💬 Consultation Gratuite
                </a>
                <a 
                  href={`mailto:${entity.email}?subject=Demande d'information études en Europe`}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  📧 Devenir Partenaire
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Informations */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact International */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Contacts</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Espagne</p>
                  <a href={`tel:${entity.phone}`} className="text-blue-600 hover:text-blue-700">
                    {entity.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email International</p>
                  <a href={`mailto:${entity.email}`} className="text-blue-600 hover:text-blue-700">
                    {entity.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Implantations</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-2">
                      <p className="text-sm font-medium text-gray-600">{location.name}</p>
                      <p className="text-xs text-gray-500">{location.address}</p>
                      <p className="text-xs text-red-500">{location.type}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Fuseaux Horaires</p>
                  <p className="text-sm text-gray-600">Espagne: UTC+1</p>
                  <p className="text-sm text-gray-600">Cameroun: UTC+1</p>
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Performance Internationale</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-red-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">✅ Accréditations</h3>
              <p className="text-blue-700 text-sm">{entity.accreditation}</p>
              <p className="text-blue-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Consultation Gratuite */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">🎯 Consultation Gratuite</h3>
              <p className="text-green-700 text-sm">Évaluation de votre projet d'études</p>
              <a 
                href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite une consultation pour étudier en Europe`}
                className="text-green-600 text-sm font-semibold hover:text-green-700 block mt-2"
              >
                💬 Consultation WhatsApp
              </a>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Services Internationaux */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 Services Internationaux</h2>
              <div className="space-y-8">
                {Object.entries(entity.services).map(([categorie, services]) => (
                  <div key={categorie}>
                    <h3 className="text-xl font-semibold text-red-800 mb-4 border-b border-red-100 pb-2">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          
                          {service.destinations && (
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-red-600">Destinations:</p>
                              <p className="text-xs text-gray-600">{service.destinations.join(', ')}</p>
                            </div>
                          )}
                          
                          {service.duree && (
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-red-600">Durée:</p>
                              <p className="text-xs text-gray-600">{service.duree}</p>
                            </div>
                          )}
                          
                          {service.tauxReussite && (
                            <div>
                              <p className="text-xs font-semibold text-red-600">Taux de réussite:</p>
                              <p className="text-xs text-gray-600">{service.tauxReussite}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Universités Partenaires */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Universités Partenaires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.universites).map(([pays, universites]) => (
                  <div key={pays} className="text-center bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-4">🇪🇺 {pays}</h3>
                    <div className="space-y-2">
                      {universites.map((universite, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{universite}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grille d'informations */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Processus d'Admission */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Processus d'Admission</h2>
                <div className="space-y-4">
                  {Object.entries(entity.admission).map(([etape, actions]) => (
                    <div key={etape}>
                      <h3 className="font-semibold text-red-700 mb-2">{etape}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {actions.map((action, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Avantages Exclusifs */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">⭐ Avantages Exclusifs</h2>
                <div className="space-y-4">
                  {Object.entries(entity.avantages).map(([categorie, avantages]) => (
                    <div key={categorie}>
                      <h3 className="font-semibold text-green-700 mb-2">{categorie}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {avantages.map((avantage, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {avantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Coûts et Financement */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Coûts & Financement</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.couts).map(([categorie, details]) => (
                  <div key={categorie} className="text-center bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-4">{categorie}</h3>
                    <div className="space-y-2">
                      {details.map((detail, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Témoignages */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">✈️ Témoignages d'Étudiants</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {entity.temoignages.map((temoignage, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 italic mb-3">"{temoignage.commentaire}"</p>
                    <div className="border-t border-gray-200 pt-3">
                      <p className="font-semibold text-gray-900 text-sm">{temoignage.auteur}</p>
                      <p className="text-xs text-red-600">{temoignage.programme}</p>
                      <p className="text-xs text-gray-500">{temoignage.destination}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à vivre l'aventure européenne ?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Rejoignez nos étudiants internationaux et ouvrez-vous les portes de l'Europe avec Campus Latina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite une consultation pour étudier en Europe`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              💬 Consultation Gratuite
            </a>
            <a 
              href={`mailto:${entity.email}?subject=Demande d'information études en Europe`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              📧 Demande d'Info
            </a>
            <a 
              href={entity.site}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              🌐 Site Espagnol
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}