// app/entites/tchaux/page.jsx
'use client';

import Link from 'next/link';

export default function TchauxPage() {
  const entity = {
    id: 6,
    name: "La Tchaux Hotel & Resorts",
    slogan: "L'excellence hôtelière au cœur de Yaoundé",
    description: "Hôtel de charme 4 étoiles avec piscine, restaurant gastronomique, salles de conférence et services de navette. Idéal pour voyages d'affaires, tourisme et événements spéciaux dans un cadre exceptionnel.",
    site: "https://latchauxhotelyaounde.com",
    image: "/assets/images/hotel-exterieur.jpg",
    logo: "/assets/logos/logo-hotel.png",
    category: "Hôtellerie",
    locations: [
      {
        name: "Complexe Principal",
        address: "Benebalot/Nsimalen, Yaoundé, Cameroun",
        type: "Hôtel & Resort"
      }
    ],
    phone: "+237 690 62 63 78",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+237 690 62 63 78",
    reservation: "+237 690 62 63 78",
    
    // Informations détaillées
    founded: "2018",
    director: "Mme. Chantal Ndi",
    gerant: "Mr Roland Junior NGUELE",
    accreditation: "Classement 3 étoiles - Ministère du Tourisme",
    recognition: "Membre des Hôtels Prestiges du Cameroun",
    
    // Hébergement
    accommodation: {
      "Chambres Standards": [
        {
          name: "Chambre Classique",
          capacity: "2 personnes",
          features: ["Lit double ou twin", "Climatisation", "TV écran plat", "Wi-Fi gratuit", "Salle de bain privée"],
          price: "45,000 FCFA/nuit"
        },
        {
          name: "Chambre Supérieure", 
          capacity: "2-3 personnes",
          features: ["Espace séjour", "Vue jardin", "Mini-bar", "Coffre-fort", "Service chambre 24h/24"],
          price: "65,000 FCFA/nuit"
        }
      ],
      "Suites": [
        {
          name: "Suite Exécutive",
          capacity: "2 personnes",
          features: ["Espace bureau", "Salon privé", "Vue piscine", "Nespresso", "Produits d'accueil"],
          price: "85,000 FCFA/nuit"
        },
        {
          name: "Suite Présidentielle",
          capacity: "2-4 personnes",
          features: ["2 chambres", "Grand salon", "Terrasse privée", "Jacuzzi", "Service majordome"],
          price: "150,000 FCFA/nuit"
        }
      ],
      "Services Hôtel": [
        {
          name: "Service de Navette",
          description: "Transferts aéroport/gare",
          horaire: "24h/24 sur réservation"
        },
        {
          name: "Conciergerie", 
          description: "Réservations et organisation",
          horaire: "7h-22h"
        },
        {
          name: "Room Service",
          description: "Restauration en chambre",
          horaire: "6h-23h"
        }
      ]
    },

    // Restauration
    restauration: {
      "Restaurant Le Jardin": [
        {
          name: "Cuisine Internationale",
          specialites: ["Plats camerounais", "Cuisine française", "Spécialités méditerranéennes"],
          horaire: "Petit-déjeuner: 6h30-10h30 | Déjeuner: 12h-15h | Dîner: 19h-23h"
        },
        {
          name: "Brasserie La Terrasse",
          specialites: ["Grillades", "Salades", "Pizzas", "Cocktails"],
          horaire: "11h-23h"
        }
      ],
      "Bar & Lounge": [
        {
          name: "Bar Piscine",
          specialites: ["Cocktails tropicaux", "Boissons fraîches", "Snacks légers"],
          horaire: "9h-20h"
        },
        {
          name: "Lounge VIP",
          specialites: ["Whisky sélection", "Vins fins", "Cigares"],
          horaire: "16h-minuit"
        }
      ],
      "Événements Spéciaux": [
        {
          name: "Buffets sur mesure",
          specialites: ["Réceptions", "Cocktails", "Dîners de gala"],
          horaire: "Sur réservation"
        }
      ]
    },

    // Équipements
    facilities: {
      "Détente & Bien-être": [
        "Piscine extérieure chauffée",
        "Jardin tropical paysager",
        "Terrasse ensoleillée",
        "Espace détente avec hamacs"
      ],
      "Business & Événements": [
        "Salle de conférence (100 personnes)",
        "3 salles de réunion (20-50 personnes)",
        "Équipement audiovisuel complet",
        "Service traiteur sur place"
      ],
      "Services": [
        "Parking sécurisé gratuit",
        "Wi-Fi haut débit gratuit",
        "Service de blanchisserie",
        "Change devise",
        "Location de voitures"
      ]
    },

    // Événements
    events: {
      "Mariages & Cérémonies": [
        "Chapelle et espace cérémonie",
        "Décoration florale sur mesure",
        "Traiteur dédié",
        "Coordination événementielle"
      ],
      "Séminaires & Conférences": [
        "Pack séminaire tout compris",
        "Équipement technique professionnel",
        "Pauses café gourmandes",
        "Restauration d'affaires"
      ],
      "Réceptions": [
        "Anniversaires",
        "Lancements produits",
        "Cocktails d'entreprise",
        "Événements privés"
      ]
    },

    // Forfaits
    packages: {
      "Affaires": [
        "1 nuit en chambre supérieure",
        "Petit-déjeuner buffet",
        "Accès salle de réunion 4h",
        "Service navette aéroport",
        "Prix: 75,000 FCFA"
      ],
      "Romantique": [
        "2 nuits en suite exécutive",
        "Dîner aux chandelles",
        "Petit-déjeuner au lit",
        "Bouquet de fleurs",
        "Bouteille de champagne",
        "Prix: 180,000 FCFA"
      ],
      "Famille": [
        "Suite communicante",
        "Petit-déjeuner enfants gratuit",
        "Activités enfants",
        "Accès piscine illimité",
        "Service garde d'enfants",
        "Prix: 120,000 FCFA/nuit"
      ]
    },

    // Galerie d'images
    gallery: [
      "Chambres élégantes et spacieuses",
      "Piscine au cadre tropical",
      "Restaurant gastronomique",
      "Salles de réception",
      "Jardins paysagers",
      "Événements de prestige"
    ],

    // Avis clients
    testimonials: [
      {
        auteur: "Pierre M., Voyageur d'affaires",
        commentaire: "Un service exceptionnel et des chambres très confortables. Parfait pour les séjours professionnels.",
        note: "5/5"
      },
      {
        auteur: "Familie Schmidt, Touristes",
        commentaire: "Cadre magnifique, personnel attentionné. Nos enfants ont adoré la piscine !",
        note: "5/5"
      },
      {
        auteur: "Sarah K., Mariage",
        commentaire: "Notre mariage était un rêve grâce à l'équipe de La Tchaux. Organisation parfaite !",
        note: "5/5"
      }
    ],

    // Chiffres clés
    stats: {
      "Chambres & Suites": "50",
      "Taux d'Occupation": "85%",
      "Satisfaction Client": "4.8/5",
      "Événements/Mois": "15+",
      "Équipe": "40 professionnels"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                🏨
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-amber-100 mb-2">{entity.slogan}</p>
              <p className="text-amber-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={entity.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  🌐 Site Officiel
                </a>
                <a 
                  href={`https://wa.me/${entity.reservation}?text=Bonjour, je souhaite faire une réservation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  💬 Réservation WhatsApp
                </a>
                <a 
                  href={`tel:${entity.reservation}`}
                  className="bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
                >
                  📞 Appel Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Informations */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Rapide */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Réservations</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Téléphone</p>
                  <a href={`tel:${entity.phone}`} className="text-blue-600 hover:text-blue-700">
                    {entity.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Réservations</p>
                  <a href={`tel:${entity.reservation}`} className="text-green-600 hover:text-green-700">
                    {entity.reservation}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <a href={`mailto:${entity.email}`} className="text-blue-600 hover:text-blue-700">
                    {entity.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Adresse</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-1">
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Excellence</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-amber-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Classement */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-lg font-bold text-amber-800 mb-2">🏆 Classement</h3>
              <p className="text-amber-700 text-sm">{entity.accreditation}</p>
              <p className="text-amber-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Avis Clients */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">💬 Avis Clients</h3>
              <div className="space-y-3">
                {entity.testimonials.slice(0, 2).map((avis, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 italic">"{avis.commentaire}"</p>
                    <p className="text-xs text-gray-500 mt-2">- {avis.auteur}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-amber-500">⭐</span>
                      <span className="text-xs text-gray-600 ml-1">{avis.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hébergement */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🛏️ Hébergement</h2>
              <div className="space-y-8">
                {Object.entries(entity.accommodation).map(([category, chambres]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4 border-b border-amber-100 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {chambres.map((chambre, index) => (
                        <div key={index} className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-gray-900">{chambre.name}</h4>
                            <span className="bg-amber-500 text-white px-2 py-1 rounded text-sm font-bold">
                              {chambre.price}
                            </span>
                          </div>
                          <p className="text-sm text-amber-600 mb-3">{chambre.capacity}</p>
                          {chambre.features ? (
                            <div className="space-y-1">
                              {chambre.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm text-gray-600 mb-2">{chambre.description}</p>
                              <p className="text-xs text-amber-600">Horaire: {chambre.horaire}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Restauration */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🍽️ Restauration & Bars</h2>
              <div className="space-y-6">
                {Object.entries(entity.restauration).map(([category, restaurants]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {restaurants.map((restaurant, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 mb-2">{restaurant.name}</h4>
                          <div className="mb-2">
                            <p className="text-sm font-semibold text-amber-600">Spécialités:</p>
                            <p className="text-sm text-gray-600">{restaurant.specialites.join(', ')}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-amber-600">Horaires:</p>
                            <p className="text-sm text-gray-600">{restaurant.horaire}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grille d'informations */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Équipements */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🏊 Équipements</h2>
                <div className="space-y-4">
                  {Object.entries(entity.facilities).map(([categorie, equipements]) => (
                    <div key={categorie}>
                      <h3 className="font-semibold text-amber-700 mb-2">{categorie}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {equipements.map((equipement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            {equipement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Événements */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🎉 Événements</h2>
                <div className="space-y-4">
                  {Object.entries(entity.events).map(([type, services]) => (
                    <div key={type}>
                      <h3 className="font-semibold text-blue-700 mb-2">{type}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Forfaits Spéciaux */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎁 Forfaits Spéciaux</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.packages).map(([forfait, inclusions]) => (
                  <div key={forfait} className="text-center bg-gradient-to-b from-amber-50 to-white rounded-lg p-6 border border-amber-200">
                    <h3 className="font-bold text-amber-800 text-lg mb-4">{forfait}</h3>
                    <div className="space-y-2 mb-4 text-left">
                      {inclusions.slice(0, -1).map((inclusion, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <span className="text-amber-500 mr-2">✓</span>
                          {inclusion}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-amber-200 pt-3">
                      <p className="font-bold text-amber-600 text-lg">
                        {inclusions[inclusions.length - 1].replace('Prix: ', '')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt pour un séjour mémorable ?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Réservez dès maintenant votre séjour dans l'hôtel 3 étoiles de référence à Yaoundé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${entity.reservation}?text=Bonjour, je souhaite réserver une chambre`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              💬 Réserver sur WhatsApp
            </a>
            <a 
              href={`tel:${entity.reservation}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
            >
              📞 Appel de Réservation
            </a>
            <a 
              href={entity.site}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
            >
              🌐 Voir les Photos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}