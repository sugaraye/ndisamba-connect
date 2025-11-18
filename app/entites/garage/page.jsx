// app/entites/garage/page.jsx
'use client';

import Link from 'next/link';

export default function GaragePage() {
  const entity = {
    id: 10,
    name: "Garage Samba Automobiles",
    slogan: "L'excellence mécanique au service de votre véhicule",
    description: "Garage automobile spécialisé dans l'entretien, la réparation mécanique, la carrosserie et la vente de pièces détachées originales. Expertise technique et service personnalisé pour tous types de véhicules.",
    site: "Entretien et réparation",
    image: "/assets/images/garage-atelier.jpg",
    logo: "/assets/logos/logo-garage.png",
    category: "Automobile",
    locations: [
      {
        name: "Atelier Principal",
        address: "Tropicana, Yaoundé, Cameroun",
        type: "Siège & Atelier"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+237 689 18 43 39",
    urgence: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "2016",
    director: "M. Jean-Pierre Ndi",
    accreditation: "Garage Agréé - Ministère des Transports N° GAR-045/2016",
    recognition: "Membre du Réseau des Garages Agréés du Cameroun",
    
    // Services automobiles
    services: {
      "Entretien & Révision": [
        {
          name: "Vidange & Filtres",
          description: "Changement d'huile et filtres périodiques",
          duree: "1-2 heures",
          garantie: "6 mois",
          prix: "À partir de 25,000 FCFA"
        },
        {
          name: "Révision Complète", 
          description: "Contrôle complet et entretien préventif",
          duree: "3-4 heures",
          garantie: "12 mois",
          prix: "À partir de 75,000 FCFA"
        },
        {
          name: "Entretien Programmé",
          description: "Suivi selon planning constructeur",
          duree: "Variable",
          garantie: "Selon pièces",
          prix: "Forfait selon véhicule"
        }
      ],
      "Réparations Mécaniques": [
        {
          name: "Moteur & Transmission",
          description: "Diagnostic et réparation moteur, boîte vitesse",
          duree: "1-3 jours",
          garantie: "12 mois",
          prix: "Devis personnalisé"
        },
        {
          name: "Freinage & Suspension",
          description: "Système freinage, amortisseurs, direction",
          duree: "1 journée",
          garantie: "6 mois",
          prix: "À partir de 50,000 FCFA"
        },
        {
          name: "Électricité Auto",
          description: "Diagnostic électronique, batterie, alternateur",
          duree: "2-4 heures",
          garantie: "6 mois",
          prix: "À partir de 15,000 FCFA"
        }
      ],
      "Carrosserie & Peinture": [
        {
          name: "Réparation Carrosserie",
          description: "Débosselage, remplacement éléments",
          duree: "2-5 jours",
          garantie: "24 mois",
          prix: "Devis selon dommages"
        },
        {
          name: "Peinture Professionnelle", 
          description: "Cabine peinture, finition originale",
          duree: "3-7 jours",
          garantie: "36 mois",
          prix: "À partir de 100,000 FCFA"
        },
        {
          name: "Vitrage Auto",
          description: "Remplacement pare-brise et vitres",
          duree: "1 journée",
          garantie: "12 mois",
          prix: "À partir de 40,000 FCFA"
        }
      ]
    },

    // Pièces et accessoires
    pieces: {
      "Pièces Mécaniques": [
        {
          categorie: "Moteur",
          produits: ["Filtres à huile", "Bougies", "Courroies", "Pompes à eau"],
          origine: "Originales et qualité équivalente",
          garantie: "12 mois"
        },
        {
          categorie: "Freinage",
          produits: ["Plaquettes", "Disques", "Étriers", "Liquide frein"],
          origine: "Marques premium",
          garantie: "18 mois"
        },
        {
          categorie: "Suspension",
          produits: ["Amortisseurs", "Ressorts", "Rotules", "Bras de suspension"],
          origine: "Qualité OEM",
          garantie: "24 mois"
        }
      ],
      "Accessoires & Entretien": [
        {
          categorie: "Lubrifiants",
          produits: ["Huiles moteur", "Liquide refroidissement", "Graisses"],
          marques: ["Total", "Mobil", "Elf", "Castrol"],
          garantie: "Garantie constructeur"
        },
        {
          categorie: "Batteries",
          produits: ["Batteries démarrage", "Batteries gel", "Chargeurs"],
          marques: ["Varta", "Bosch", "Delkor"],
          garantie: "24 mois"
        },
        {
          categorie: "Pneus & Jantes",
          produits: ["Pneus toutes saisons", "Pneus 4x4", "Jantes alu"],
          marques: ["Michelin", "Goodyear", "Continental", "Pirelli"],
          garantie: "5 ans"
        }
      ]
    },

    // Marques spécialisées
    marques: {
      "Véhicules Particuliers": [
        "Toyota, Honda, Nissan",
        "Peugeot, Renault, Citroën",
        "Mercedes, BMW, Audi",
        "Kia, Hyundai, Suzuki"
      ],
      "Véhicules Utilitaires": [
        "Toyota Hilux, Land Cruiser",
        "Mitsubishi L200, Pajero",
        "Isuzu D-Max, NPR",
        "Nissan Navara, Patrol"
      ],
      "4x4 & Tout-Terrain": [
        "Land Rover Defender",
        "Jeep Wrangler",
        "Toyota Land Cruiser",
        "Mitsubishi Pajero"
      ]
    },

    // Équipements atelier
    equipements: {
      "Diagnostic Électronique": [
        "Valise diagnostic multimarques",
        "Oscilloscope numérique",
        "Testeurs de composants",
        "Logiciels constructeurs"
      ],
      "Outillage Spécialisé": [
        "Pont élévateur 4 colonnes",
        "Démonte-pneus automatique",
        "Equilibreuse électronique",
        "Matériel géométrie"
      ],
      "Atelier Carrosserie": [
        "Cabine de peinture professionnelle",
        "Débosseleuse hydraulique",
        "Poste à souder MIG/MAG",
        "Matériel de ponçage"
      ]
    },

    // Urgences et dépannage
    urgences: {
      "Dépannage Rapide": [
        "Dépannage 24h/24",
        "Remorquage plateau",
        "Démarrage batterie",
        "Changement roue de secours"
      ],
      "Diagnostic Express": [
        "Diagnostic gratuit",
        "Devis immédiat",
        "Conseils techniques",
        "Estimation délais"
      ],
      "Service Client": [
        "Véhicule de courtoisie",
        "Navette client",
        "Suivi SMS des réparations",
        Photos avant/après
      ]
    },

    // Promotions et forfaits
    forfaits: {
      "Forfait Entretien": [
        "Vidange complète",
        "Changement filtres",
        "Contrôle niveaux",
        "Diagnostic électronique",
        "Prix: 45,000 FCFA"
      ],
      "Forfait Freinage": [
        "Plaquettes avant",
        "Contrôle disques",
        "Niveau liquide frein",
        "Réglage frein à main",
        "Prix: 65,000 FCFA"
      ],
      "Forfait Clim": [
        "Recharge climatisation",
        "Nettoyage circuit",
        "Contrôle compresseur",
        "Test d'étanchéité",
        "Prix: 35,000 FCFA"
      ]
    },

    // Chiffres clés
    stats: {
      "Véhicules/An": "1,200+",
      "Taux de Satisfaction": "98%",
      "Techniciens Certifiés": "8 experts",
      "Années d'Expérience": "8+",
      "Marques Maîtrisées": "20+"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                🔧
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-orange-100 mb-2">{entity.slogan}</p>
              <p className="text-orange-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`tel:${entity.urgence}`}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
                >
                  🚨 Dépannage 24h/24
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  💬 Devis WhatsApp
                </a>
                <a 
                  href={`tel:${entity.phone}`}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📞 Prise de RDV
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Contacts</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Dépannage</p>
                  <a href={`tel:${entity.urgence}`} className="text-red-600 hover:text-red-700 font-bold">
                    {entity.urgence}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Atelier</p>
                  <a href={`tel:${entity.phone}`} className="text-blue-600 hover:text-blue-700">
                    {entity.phone}
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
                <div>
                  <p className="font-semibold text-gray-700">Horaires</p>
                  <p className="text-sm text-gray-600">Lun-Sam: 7h30-18h</p>
                  <p className="text-sm text-gray-600">Dépannage: 24h/24</p>
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Expertise</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-orange-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">✅ Agréments</h3>
              <p className="text-blue-700 text-sm">{entity.accreditation}</p>
              <p className="text-blue-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Dépannage Urgence */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">🚨 Dépannage 24h/24</h3>
              <p className="text-red-700 text-sm">Service urgence véhicule</p>
              <a href={`tel:${entity.urgence}`} className="text-red-600 text-sm font-bold hover:text-red-700 block mt-2">
                📞 {entity.urgence}
              </a>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Services Automobiles */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Services Automobiles</h2>
              <div className="space-y-8">
                {Object.entries(entity.services).map(([categorie, services]) => (
                  <div key={categorie}>
                    <h3 className="text-xl font-semibold text-orange-800 mb-4 border-b border-orange-100 pb-2">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="font-semibold text-orange-600">Durée:</span>
                              <p className="text-gray-600">{service.duree}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-orange-600">Garantie:</span>
                              <p className="text-gray-600">{service.garantie}</p>
                            </div>
                            <div className="col-span-2">
                              <span className="font-semibold text-orange-600">Prix:</span>
                              <p className="text-gray-600 font-semibold">{service.prix}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pièces & Accessoires */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">⚙️ Pièces & Accessoires</h2>
              <div className="space-y-6">
                {Object.entries(entity.pieces).map(([type, categories]) => (
                  <div key={type}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {type}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {categories.map((categorie, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 mb-2">{categorie.categorie}</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-semibold text-orange-600">Produits:</span>
                              <p className="text-gray-600">{categorie.produits.join(', ')}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-orange-600">Origine:</span>
                              <p className="text-gray-600">{categorie.origine || categorie.marques?.join(', ')}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-orange-600">Garantie:</span>
                              <p className="text-gray-600">{categorie.garantie}</p>
                            </div>
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
              {/* Marques Spécialisées */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🚗 Marques Spécialisées</h2>
                <div className="space-y-4">
                  {Object.entries(entity.marques).map(([type, marques]) => (
                    <div key={type}>
                      <h3 className="font-semibold text-orange-700 mb-2">{type}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {marques.map((marque, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {marque}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Équipements */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🏭 Équipements Atelier</h2>
                <div className="space-y-4">
                  {Object.entries(entity.equipements).map(([type, equipements]) => (
                    <div key={type}>
                      <h3 className="font-semibold text-blue-700 mb-2">{type}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {equipements.map((equipement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {equipement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Forfaits Promotionnels */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎁 Forfaits Entretien</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.forfaits).map(([forfait, inclusions]) => (
                  <div key={forfait} className="text-center bg-gradient-to-b from-orange-50 to-white rounded-lg p-6 border border-orange-200">
                    <h3 className="font-bold text-orange-800 text-lg mb-4">{forfait}</h3>
                    <div className="space-y-2 mb-4 text-left">
                      {inclusions.slice(0, -1).map((inclusion, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <span className="text-orange-500 mr-2">✓</span>
                          {inclusion}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-orange-200 pt-3">
                      <p className="font-bold text-orange-600 text-lg">
                        {inclusions[inclusions.length - 1].replace('Prix: ', '')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Urgences & Services */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🚨 Services Urgence</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.urgences).map(([service, details]) => (
                  <div key={service} className="text-center bg-red-50 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-4">{service}</h3>
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
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'un entretien ou d'une réparation ?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Diagnostic gratuit et devis immédiat. Service dépannage 24h/24 disponible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${entity.urgence}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              🚨 Dépannage Urgence
            </a>
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite un devis pour mon véhicule`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              💬 Devis WhatsApp
            </a>
            <a 
              href={`tel:${entity.phone}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 Prise de RDV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}