// app/entites/logistique-france/page.jsx
'use client';

import Link from 'next/link';

export default function LogistiqueFrancePage() {
  const entity = {
    id: 4,
    name: "NS Logistique Transit France",
    slogan: "Votre pont logistique entre l'Europe et l'Afrique",
    description: "Société spécialisée dans le transit international, la logistique et le dédouanement entre la France et l'Afrique. Solutions sur mesure pour entreprises et particuliers avec suivi personnalisé.",
    site: "https://nslogistique.fr",
    image: "/assets/images/logistique-entrepot.jpg",
    logo: "/assets/logos/logo-logistique.png",
    category: "Logistique",
    locations: [
      {
        name: "Siège Social",
        address: "60, rue François 1er, 75008 Paris, France",
        type: "Direction & Administration"
      },
      {
        name: "Plateforme Logistique",
        address: "56, rue des Alliés, 42000 Saint-Étienne, France",
        type: "Centre Opérationnel"
      }
    ],
    phone: "+33 7 59 44 54 03",
    email: "contact@nslogistique.fr",
    whatsapp: "+33 7 59 44 54 03",
    
    // Informations détaillées
    founded: "2025",
    director: "Raymond Samba Ndi",
    accreditation: "Commissionnaire en Douane Agréé - Certifié ISO 9001",
    recognition: "Membre de la Fédération des Entreprises de Logistique",
    
    // Services
    services: {
      "Transit International": [
        {
          name: "Transport Maritime",
          description: "Conteneurs FCL et LCL vers l'Afrique",
          avantages: ["Dédouanement inclus", "Assurance cargo", "Suivi en temps réel"]
        },
        {
          name: "Transport Aérien", 
          description: "Urgences et marchandises sensibles",
          avantages: ["Délais express", "Emballage spécialisé", "Contrôle température"]
        },
        {
          name: "Transport Terrestre",
          description: "Groupage et messagerie Europe",
          avantages: ["Livraison porte à porte", "Optimisation des coûts", "Flexibilité"]
        },
        {
          name: "Multimodal",
          description: "Solutions combinées mer-air-route",
          avantages: ["Optimisation des délais", "Réduction des coûts", "Solution clé en main"]
        }
      ],
      "Services Logistiques": [
        {
          name: "Stockage & Entreposage",
          description: "Plateformes sécurisées en France",
          avantages: ["Zone douanière", "Contrôle d'humidité", "Sécurité 24h/24"]
        },
        {
          name: "Préparation de Commandes",
          description: "Conditionnement et reconditionnement",
          avantages: ["Emballage sur mesure", "Étiquetage", "Contrôle qualité"]
        },
        {
          name: "Gestion d'Entrepôt",
          description: "WMS et traçabilité complète",
          avantages: ["Inventaire temps réel", "Gestion des stocks", "Rapports automatisés"]
        }
      ],
      "Dédouanement & Conseil": [
        {
          name: "Dédouanement Import/Export",
          description: "Procédures douanières France et UE",
          avantages: ["Expertise réglementaire", "Optimisation fiscale", "Déclaration électronique"]
        },
        {
          name: "Conseil en Logistique", 
          description: "Audit et optimisation de la supply chain",
          avantages: ["Analyse des coûts", "Solutions sur mesure", "Accompagnement"]
        },
        {
          name: "Certifications & Normes",
          description: "Accompagnement aux certifications",
          avantages: ["OEA (Opérateur Économique Agréé)", "ISO", "Réglementations spécifiques"]
        }
      ]
    },

    // Zones d'intervention
    coverage: {
      "Europe": [
        "France (toute la métropole)",
        "Union Européenne",
        "Suisse",
        "Royaume-Uni"
      ],
      "Afrique": [
        "Cameroun (Douala, Yaoundé)",
        "Côte d'Ivoire (Abidjan)",
        "Sénégal (Dakar)",
        "Gabon (Libreville)",
        "RDC (Kinshasa)",
        "Bénin, Togo, Ghana"
      ],
      "Destinations Spéciales": [
        "Caraïbes (Martinique, Guadeloupe)",
        "Océan Indien (Réunion, Maurice)",
        "Amérique du Nord"
      ]
    },

    // Secteurs d'expertise
    expertise: {
      "Particuliers": [
        "Déménagement international",
        "Envoi de colis personnels",
        "Véhicules personnels",
        "Effets personnels"
      ],
      "Entreprises": [
        "Matériel industriel et machines",
        "Produits pharmaceutiques",
        "Équipements informatiques",
        "Matériaux de construction"
      ],
      "Commerçants": [
        "Marchandises diverses",
        "Produits de grande consommation",
        "Textile et habillement",
        "Produits alimentaires"
      ]
    },

    // Processus
    process: {
      "Étape 1 - Devis & Conseil": [
        "Analyse de vos besoins",
        "Étude de faisabilité",
        "Devis détaillé et transparent",
        "Conseil sur les solutions optimales"
      ],
      "Étape 2 - Préparation": [
        "Préparation des documents",
        "Conditionnement professionnel",
        "Assurance des marchandises",
        "Planification logistique"
      ],
      "Étape 3 - Transport": [
        "Chargement sécurisé",
        "Suivi GPS et traçabilité",
        "Gestion des formalités",
        "Communication régulière"
      ],
      "Étape 4 - Livraison": [
        "Dédouanement à destination",
        "Livraison finale",
        "Réception et signature",
        "Satisfaction client"
      ]
    },

    // Avantages
    advantages: {
      "Expertise": [
        "Équipe franco-africaine bilingue",
        "Connaissance des marchés",
        "Expertise douanière",
        "Réseau de partenaires fiables"
      ],
      "Technologie": [
        "Plateforme de suivi en ligne",
        "Communication multicanale",
        "Documentation digitale",
        "Alertes proactives"
      ],
      "Flexibilité": [
        "Solutions sur mesure",
        "Départs réguliers",
        "Capacité d'adaptation",
        "Réactivité aux urgences"
      ]
    },

    // Tarification
    pricing: {
      "Transport Maritime": [
        "Conteneur 20': à partir de 2,500€",
        "Conteneur 40': à partir de 3,800€",
        "Groupage (LCL): au volume",
        "Dédouanement inclus"
      ],
      "Transport Aérien": [
        "Urgences: sur devis personnalisé",
        "Colis express: à partir de 150€",
        "Marchandises sensibles: tarifs spécifiques"
      ],
      "Services Annexes": [
        "Entreposage: 15€/m²/mois",
        "Assurance: 1.5% de la valeur CAF",
        "Emballage: sur devis",
        "Dédouanement seul: à partir de 150€"
      ]
    },

    // Chiffres clés
    stats: {
      "Expéditions/Mois": "200+",
      "Taux de Satisfaction": "98%",
      "Pays Desservis": "15+",
      "Délai Moyen": "25-35 jours maritime",
      "Équipe": "Experts logistique"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                🚚
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-blue-100 mb-2">{entity.slogan}</p>
              <p className="text-blue-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={entity.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  🌐 Site Officiel
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  💬 Devis WhatsApp
                </a>
                <a 
                  href={`mailto:${entity.email}?subject=Demande de devis logistique`}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📧 Demande de Devis
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Téléphone France</p>
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
                  <p className="font-semibold text-gray-700">Implantations</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-2">
                      <p className="text-sm font-medium text-gray-600">{location.name}</p>
                      <p className="text-xs text-gray-500">{location.address}</p>
                      <p className="text-xs text-blue-500">{location.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Performance</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-blue-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">✅ Accréditations</h3>
              <p className="text-green-700 text-sm">{entity.accreditation}</p>
              <p className="text-green-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Zones d'Intervention */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🌍 Zones d'Intervention</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(entity.coverage).map(([zone, pays]) => (
                  <div key={zone}>
                    <p className="font-semibold text-blue-700">{zone}:</p>
                    <p className="text-gray-600">{pays.slice(0, 2).join(', ')}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Services */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🚚 Nos Services Logistiques</h2>
              <div className="space-y-8">
                {Object.entries(entity.services).map(([category, services]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          <div className="space-y-1">
                            {service.avantages.map((avantage, avIndex) => (
                              <div key={avIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                {avantage}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Processus */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Processus Logistique</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(entity.process).map(([etape, details], index) => (
                  <div key={etape} className="text-center">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-blue-800 mb-3">{etape}</h3>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Grille d'informations */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Expertise Métiers */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Expertise par Métier</h2>
                <div className="space-y-4">
                  {Object.entries(entity.expertise).map(([secteur, services]) => (
                    <div key={secteur}>
                      <h3 className="font-semibold text-blue-700 mb-2">{secteur}</h3>
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

              {/* Avantages */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">⭐ Nos Avantages</h2>
                <div className="space-y-4">
                  {Object.entries(entity.advantages).map(([categorie, avantages]) => (
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

            {/* Tarification */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Tarifs Indicatifs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.pricing).map(([service, tarifs]) => (
                  <div key={service} className="text-center bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-4">{service}</h3>
                    <div className="space-y-2">
                      {tarifs.map((tarif, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{tarif}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">*Devis personnalisé gratuit</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à expédier en toute sérénité ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Obtenez votre devis personnalisé gratuitement et découvrez notre solution logistique sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite un devis pour une expédition`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              💬 Devis Immédiat WhatsApp
            </a>
            <a 
              href={`mailto:${entity.email}?subject=Demande de devis logistique&body=Bonjour, je suis intéressé par vos services logistiques.`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              📧 Demande par Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}