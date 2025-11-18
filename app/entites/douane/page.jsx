// app/entites/douane/page.jsx
'use client';

import Link from 'next/link';

export default function DouanePage() {
  const entity = {
    id: 5,
    name: "GNS Douane-Transit-Logistique Cameroun",
    slogan: "Votre partenaire de confiance pour le dédouanement au Cameroun",
    description: "Société spécialisée dans le dédouanement, transit et logistique au Cameroun. Expertise en procédures douanières avec agences à Douala (siège) et Kribi. Solutions complètes pour importateurs et exportateurs.",
    site: "Siège: Douala — Agence: Kribi",
    image: "/assets/images/douane-bureau.jpg",
    logo: "/assets/logos/logo-douane.png",
    category: "Douane & Transit",
    locations: [
      {
        name: "Siège Social Douala",
        address: "Carrefour Tiff, Boulevard de la République, Douala, Cameroun",
        type: "Direction & Administration"
      },
      {
        name: "Agence de Kribi",
        address: "Face Commissariat Spécial, Kribi, Cameroun",
        type: "Agence Opérationnelle"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "2010",
    director: "M. Alain Ndi",
    accreditation: "Commissionnaire en Douane Agréé - CCA-2023-0456",
    recognition: "Membre de l'Association des Commissionnaires en Douane du Cameroun",
    
    // Services
    services: {
      "Dédouanement": [
        {
          name: "Dédouanement Import",
          description: "Prise en charge complète des marchandises à l'arrivée",
          procedures: ["Déclaration en détail", "Paiement des droits", "Levée des marchandises"]
        },
        {
          name: "Dédouanement Export", 
          description: "Accompagnement pour l'exportation des produits",
          procedures: ["Déclaration d'exportation", "Certificat d'origine", "Documentation"]
        },
        {
          name: "Transit",
          description: "Gestion du transit sous douane",
          procedures: ["Carnet TIR", "Transit interne", "Suivi des marchandises"]
        },
        {
          name: "Régularisation",
          description: "Régularisation de situations douanières",
          procedures: ["Rectifications", "Contentieux", "Règlement amiable"]
        }
      ],
      "Services Logistiques": [
        {
          name: "Logistique Portuaire",
          description: "Gestion des opérations dans les ports",
          procedures: ["Déchargement", "Stockage temporaire", "Livraison"]
        },
        {
          name: "Transport Local",
          description: "Transport national des marchandises",
          procedures: ["Camions adaptés", "Convois exceptionnels", "Livraison J+1"]
        },
        {
          name: "Entreposage",
          description: "Stockage sécurisé en zone douanière",
          procedures: ["Zone franche", "Entrepôt privé", "Gestion des stocks"]
        }
      ],
      "Conseil & Accompagnement": [
        {
          name: "Conseil Douanier",
          description: "Optimisation des opérations douanières",
          procedures: ["Classement tarifaire", "Optimisation fiscale", "Conformité"]
        },
        {
          name: "Audit Douanier", 
          description: "Vérification de la conformité douanière",
          procedures: ["Vérification documents", "Contrôle processus", "Recommandations"]
        },
        {
          name: "Formation Douane",
          description: "Formation aux procédures douanières",
          procedures: ["Séminaires", "Formation entreprise", "Mise à niveau"]
        }
      ]
    },

    // Procédures spécialisées
    procedures: {
      "Importation": [
        "Déclaration préalable à l'importation",
        "Contrôle technique et sanitaire",
        "Paiement des droits et taxes",
        "Levée des marchandises"
      ],
      "Exportation": [
        "Déclaration d'exportation",
        "Certificat d'origine et de conformité",
        "Contrôle qualité export",
        "Documentation de transport"
      ],
      "Régimes Spéciaux": [
        "Admission temporaire",
        "Perfectionnement actif",
        "Entrepôt sous douane",
        "Transit international"
      ]
    },

    // Ports et points d'entrée
    ports: {
      "Port de Douala": [
        "Terminal à conteneurs",
        "Quai général",
        "Terminal vraquier",
        "Zone de stockage"
      ],
      "Port de Kribi": [
        "Terminal gazier",
        "Terminal minéralier",
        "Zone industrielle",
        "Base logistique"
      ],
      "Frontières Terrestres": [
        "Ekondo-Titi (Guinée Équatoriale)",
        "Kye-Ossi (Gabon)",
        "Garoua-Boulai (RCA)",
        "Amchidé (Tchad)"
      ],
      "Aéroports": [
        "Aéroport de Douala",
        "Aéroport de Yaoundé-Nsimalen",
        "Aéroport de Garoua"
      ]
    },

    // Secteurs d'expertise
    expertise: {
      "Industrie": [
        "Matériel industriel et machines",
        "Pièces détachées",
        "Produits chimiques",
        "Équipements techniques"
      ],
      "Agroalimentaire": [
        "Produits alimentaires",
        "Boissons et alcools",
        "Intrants agricoles",
        "Équipements agro"
      ],
      "Pharmaceutique": [
        "Médicaments",
        "Équipements médicaux",
        "Produits de santé",
        "Consommables médicaux"
      ],
      "Automobile": [
        "Véhicules neufs et d'occasion",
        "Pièces automobiles",
        "Équipements de garage",
        "Lubrifiants"
      ]
    },

    // Avantages
    advantages: {
      "Expertise": [
        "Équipe de déclarants en douane certifiés",
        "Connaissance approfondie du code des douanes",
        "Expérience des procédures complexes",
        "Réseau avec les administrations"
      ],
      "Technologie": [
        "Déclarations électroniques SYDONIA",
        "Suivi en temps réel des opérations",
        "Base de données tarifaire",
        "Communication digitale"
      ],
      "Rapidité": [
        "Traitement express des dossiers",
        "Relations avec les services douaniers",
        "Processus optimisés",
        "Réactivité aux urgences"
      ]
    },

    // Tarification
    pricing: {
      "Dédouanement Standard": [
        "Import: 1.5% de la valeur CAF (min 150,000 FCFA)",
        "Export: 1% de la valeur FOB (min 100,000 FCFA)",
        "Transit: 200,000 FCFA par opération",
        "Régularisation: sur devis personnalisé"
      ],
      "Services Logistiques": [
        "Manutention portuaire: à partir de 50,000 FCFA",
        "Transport local: sur devis selon distance",
        "Entreposage: 5,000 FCFA/m²/mois",
        "Gardiennage: 10,000 FCFA/jour"
      ],
      "Services Conseil": [
        "Audit douanier: 500,000 FCFA",
        "Formation: 250,000 FCFA/jour",
        "Accompagnement projet: sur devis",
        "Assistance permanente: forfait mensuel"
      ]
    },

    // Documents requis
    documents: {
      "Importation": [
        "Facture commerciale",
        "Liste de colisage",
        "Certificat d'origine",
        "Certificat de conformité",
        "Connaissement ou LTA",
        "RCCM importateur"
      ],
      "Exportation": [
        "Facture commerciale",
        "Certificat d'origine",
        "Certificat de qualité",
        "Autorisations spécifiques",
        "Documents de transport"
      ]
    },

    // Chiffres clés
    stats: {
      "Opérations/Mois": "300+",
      "Clients Actifs": "150+ entreprises",
      "Taux de Résolution": "99% des dossiers",
      "Délai Moyen": "24-48h pour dédouanement",
      "Équipe": "15 experts douane"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                🛃
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-purple-100 mb-2">{entity.slogan}</p>
              <p className="text-purple-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  💬 Consultation WhatsApp
                </a>
                <a 
                  href={`mailto:${entity.email}?subject=Demande de devis dédouanement`}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📧 Devis par Email
                </a>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors">
                  📋 Checklist Documents
                </button>
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
                  <p className="font-semibold text-gray-700">Téléphone</p>
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
                  <p className="font-semibold text-gray-700">Agences</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-2">
                      <p className="text-sm font-medium text-gray-600">{location.name}</p>
                      <p className="text-xs text-gray-500">{location.address}</p>
                      <p className="text-xs text-purple-500">{location.type}</p>
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
                    <p className="font-semibold text-purple-700">{value}</p>
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

            {/* Points d'Entrée */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🌍 Points d'Entrée</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(entity.ports).map(([point, details]) => (
                  <div key={point}>
                    <p className="font-semibold text-blue-700">{point}:</p>
                    <p className="text-gray-600 text-xs">{details.slice(0, 2).join(', ')}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Services */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🛃 Services de Dédouanement</h2>
              <div className="space-y-8">
                {Object.entries(entity.services).map(([category, services]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b border-purple-100 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          <div className="space-y-1">
                            {service.procedures.map((procedure, procIndex) => (
                              <div key={procIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                {procedure}
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

            {/* Procédures */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Procédures Douanières</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.procedures).map(([procedure, etapes]) => (
                  <div key={procedure} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-700 mb-3 text-center">{procedure}</h3>
                    <ul className="space-y-2">
                      {etapes.map((etape, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                            {index + 1}
                          </span>
                          {etape}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Grille d'informations */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Expertise Secteurs */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Expertise par Secteur</h2>
                <div className="space-y-4">
                  {Object.entries(entity.expertise).map(([secteur, produits]) => (
                    <div key={secteur}>
                      <h3 className="font-semibold text-purple-700 mb-2">{secteur}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {produits.map((produit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            {produit}
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

            {/* Documents Requis */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📄 Documents Requis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(entity.documents).map(([operation, documents]) => (
                  <div key={operation} className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-700 mb-3">{operation}</h3>
                    <ul className="space-y-2">
                      {documents.map((doc, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <span className="text-yellow-500 mr-2">📋</span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Tarification */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Tarification</h2>
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
                    <p className="text-xs text-gray-500 mt-3">*Devis personnalisé selon volume</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'un expert en dédouanement ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Confiez-nous vos opérations douanières et concentrez-vous sur votre cœur de métier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite une consultation pour une opération de dédouanement`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              💬 Consultation Gratuite
            </a>
            <a 
              href={`mailto:${entity.email}?subject=Demande de devis dédouanement&body=Bonjour, je souhaite un devis pour les services suivants :`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              📧 Demande de Devis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}