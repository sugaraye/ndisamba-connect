// app/entites/afam/page.jsx
'use client';

import Link from 'next/link';

export default function AfamPage() {
  const entity = {
    id: 8,
    name: "Cabinet-Conseil Afam Services",
    slogan: "Transformer vos défis en opportunités de croissance",
    description: "Cabinet de conseil en gestion, audit organisationnel, accompagnement stratégique et formation professionnelle pour les entreprises. Expertise en optimisation des performances et développement durable des organisations.",
    site: "https://afam-services.com",
    image: "/assets/images/afam-bureau.jpg",
    logo: "/assets/logos/logo-afam.png",
    category: "Conseil",
    locations: [
      {
        name: "Siège Social",
        address: "Face Gazolent-Ekounou, Yaoundé, Cameroun",
        type: "Direction & Administration"
      }
    ],
    phone: "+237 690 62 63 78",
    email: "contact@afam-services.com",
    whatsapp: "+237 690 62 63 78",
    
    // Informations détaillées
    founded: "2012",
    director: "Roland Junior NGUELE",
    accreditation: "Cabinet de Conseil Certifié ISO 9001:2015",
    recognition: "Membre de l'Association des Cabinets de Conseil en Management",
    
    // Services de conseil
    services: {
      "Conseil Stratégique": [
        {
          name: "Diagnostic Stratégique",
          description: "Analyse complète de votre organisation",
          deliverables: ["Rapport de diagnostic", "Analyse SWOT", "Recommandations stratégiques", "Plan d'action"]
        },
        {
          name: "Plan Stratégique", 
          description: "Élaboration de votre feuille de route",
          deliverables: ["Vision et mission", "Objectifs stratégiques", "Plan opérationnel", "Tableau de bord"]
        },
        {
          name: "Transformation Digitale",
          description: "Accompagnement dans votre mutation digitale",
          deliverables: ["Audit digital", "Roadmap technologique", "Formation équipes", "Suivi implémentation"]
        }
      ],
      "Audit & Organisation": [
        {
          name: "Audit Organisationnel",
          description: "Évaluation de l'efficacité organisationnelle",
          deliverables: ["Cartographie processus", "Analyse des performances", "Recommandations optimisation", "Plan de restructuration"]
        },
        {
          name: "Optimisation des Processus",
          description: "Amélioration continue des opérations",
          deliverables: ["Modélisation BPMN", "Indicateurs de performance", "Procédures optimisées", "Gains mesurables"]
        },
        {
          name: "Gestion de la Qualité",
          description: "Mise en place de systèmes qualité",
          deliverables: ["Système qualité ISO", "Documentation processus", "Audits internes", "Certifications"]
        }
      ],
      "Ressources Humaines": [
        {
          name: "GPEC & Développement RH",
          description: "Gestion prévisionnelle des emplois et compétences",
          deliverables: ["Cartographie compétences", "Plans de formation", "Parcours professionnels", "Politique RH"]
        },
        {
          name: "Évaluation des Performances", 
          description: "Système d'évaluation et de rémunération",
          deliverables: ["Grilles d'évaluation", "Système de rémunération", "Entretiens professionnels", "Plans de carrière"]
        },
        {
          name: "Transformation Culturelle",
          description: "Accompagnement du changement organisationnel",
          deliverables: ["Diagnostic culturel", "Plan de changement", "Communication interne", "Leadership transformationnel"]
        }
      ]
    },

    // Domaines d'expertise
    expertise: {
      "PME & ETI": [
        "Croissance accélérée",
        "Professionalisation management",
        "Optimisation financière",
        "Développement commercial"
      ],
      "Startups & Scale-ups": [
        "Business model validation",
        "Levée de fonds preparation",
        "Scale-up organisationnel",
        "Gouvernance entrepreneuriale"
      ],
      "Secteur Public": [
        "Modernisation administrative",
        "Gestion de projets publics",
        "Réforme organisationnelle",
        "Performance service public"
      ],
      "ONG & Associations": [
        "Gestion de projets sociaux",
        "Recherche de financements",
        "Impact measurement",
        "Organizational development"
      ]
    },

    // Méthodologie
    methodology: {
      "Phase 1 - Diagnostic": [
        "Rencontre initiale et cadrage",
        "Collecte et analyse des données",
        "Entretiens avec les parties prenantes",
        "Rapport diagnostic détaillé"
      ],
      "Phase 2 - Conception": [
        "Élaboration des solutions sur mesure",
        "Validation avec le client",
        "Planification détaillée",
        "Préparation de l'implémentation"
      ],
      "Phase 3 - Implémentation": [
        "Accompagnement pas à pas",
        "Formation des équipes",
        "Suivi et ajustements",
        "Transfert de compétences"
      ],
      "Phase 4 - Pérennisation": [
        "Évaluation des résultats",
        "Capitalisation des bonnes pratiques",
        "Suivi post-projet",
        "Amélioration continue"
      ]
    },

    // Équipe de consultants
    team: {
      "Associés": [
        {
          name: "Dr. Alain Fotso",
          specialite: "Stratégie & Organisation",
          experience: "20 ans",
          certifications: ["MBA HEC Paris", "Certified Management Consultant", "Black Belt Six Sigma"]
        },
        {
          name: "Mr. Guy EONE",
          specialite: "Ressources Humaines & Transformation",
          experience: "15 ans",
          certifications: ["Master RH Paris-Dauphine", "Coach Certifiée", "Spécialiste Changement"]
        }
      ],
      "Consultants Senior": [
        {
          name: "M. Jean Mbarga",
          specialite: "Finance & Contrôle de Gestion",
          experience: "12 ans",
          certifications: ["Expert-Comptable", "Certified Financial Analyst", "Auditeur Interne"]
        },
        {
          name: "Mme. Sarah Diallo",
          specialite: "Digital Transformation",
          experience: "10 ans",
          certifications: ["Architecte SI", "Certified Scrum Master", "Data Analytics Expert"]
        }
      ]
    },

    // Réalisations
    achievements: {
      "Projets Réalisés": [
        "150+ missions de conseil",
        "80 entreprises accompagnées",
        "95% de satisfaction client",
        "30% de croissance moyenne clients"
      ],
      "Secteurs d'Intervention": [
        "Industrie et manufacturing",
        "Services et technologies",
        "Commerce et distribution",
        "Santé et éducation"
      ],
      "Impact Mesurable": [
        "Réduction coûts: 15-25% en moyenne",
        "Amélioration productivité: 20-35%",
        "Augmentation chiffre d'affaires: 30-50%",
        "Satisfaction client interne: +40%"
      ]
    },

    // Approche innovante
    innovation: {
      "Outils Propriétaires": [
        "Matrice AFAM d'analyse stratégique",
        "Plateforme de diagnostic en ligne",
        "Bibliothèque de best practices",
        "Tableaux de bord personnalisés"
      ],
      "Recherche & Développement": [
        "Veille stratégique permanente",
        "Développement méthodologies innovantes",
        "Partnerships académiques",
        "Publications sectorielles"
      ],
      "Approche Collaborative": [
        "Co-construction des solutions",
        "Implémentation participative",
        "Transfert de compétences intégral",
        "Communauté de pratiques"
      ]
    },

    // Tarification
    pricing: {
      "Diagnostic Initial": [
        "Audit rapide: 500,000 FCFA",
        "Diagnostic complet: 1,500,000 FCFA",
        "Étude de faisabilité: 750,000 FCFA"
      ],
      "Missions de Conseil": [
        "Consultant junior: 75,000 FCFA/jour",
        "Consultant senior: 125,000 FCFA/jour",
        "Expert associé: 200,000 FCFA/jour"
      ],
      "Formations": [
        "Intra-entreprise: 150,000 FCFA/jour",
        "Inter-entreprise: 75,000 FCFA/personne",
        "Coaching individuel: 50,000 FCFA/heure"
      ]
    },

    // Chiffres clés
    stats: {
      "Années d'Expérience": "12+",
      "Clients Satisfaits": "80+",
      "Taux de Réussite": "95%",
      "Consultants Experts": "15+",
      "Pays d'Intervention": "5"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                📊
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-teal-100 mb-2">{entity.slogan}</p>
              <p className="text-teal-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={entity.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  🌐 Site Officiel
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  💬 Diagnostic Gratuit
                </a>
                <a 
                  href={`mailto:${entity.email}?subject=Demande de consultation stratégique`}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📧 Devis Personnalisé
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
                  <p className="font-semibold text-gray-700">Cabinet</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-1">
                      <p className="text-sm text-gray-600">{location.address}</p>
                      <p className="text-xs text-teal-500">{location.type}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Horaires Conseil</p>
                  <p className="text-sm text-gray-600">Lun-Ven: 8h-18h</p>
                  <p className="text-sm text-gray-600">Urgences: sur RDV</p>
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📈 Performance</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-teal-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">✅ Certifications</h3>
              <p className="text-blue-700 text-sm">{entity.accreditation}</p>
              <p className="text-blue-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Diagnostic Rapide */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">🎯 Diagnostic Gratuit</h3>
              <p className="text-orange-700 text-sm">Analyse rapide de vos challenges</p>
              <a 
                href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite un diagnostic gratuit`}
                className="text-orange-600 text-sm font-semibold hover:text-orange-700 block mt-2"
              >
                📞 Prendre RDV
              </a>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Services de Conseil */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Nos Services de Conseil</h2>
              <div className="space-y-8">
                {Object.entries(entity.services).map(([domaine, services]) => (
                  <div key={domaine}>
                    <h3 className="text-xl font-semibold text-teal-800 mb-4 border-b border-teal-100 pb-2">
                      {domaine}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          <div className="space-y-1">
                            <p className="text-xs font-semibold text-teal-600 mb-1">Livrables:</p>
                            {service.deliverables.map((deliverable, delIndex) => (
                              <div key={delIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                                {deliverable}
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

            {/* Méthodologie */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🔄 Notre Méthodologie</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(entity.methodology).map(([phase, etapes], index) => (
                  <div key={phase} className="text-center">
                    <div className="bg-teal-100 text-teal-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-teal-800 mb-3">{phase}</h3>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {etapes.map((etape, etapeIndex) => (
                        <li key={etapeIndex}>{etape}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Grille d'informations */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Domaines d'Expertise */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🏢 Domaines d'Expertise</h2>
                <div className="space-y-4">
                  {Object.entries(entity.expertise).map(([secteur, services]) => (
                    <div key={secteur}>
                      <h3 className="font-semibold text-teal-700 mb-2">{secteur}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Équipe */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">👥 Notre Équipe</h2>
                <div className="space-y-4">
                  {Object.entries(entity.team).map(([categorie, membres]) => (
                    <div key={categorie}>
                      <h3 className="font-semibold text-blue-700 mb-2">{categorie}</h3>
                      <div className="space-y-2">
                        {membres.map((membre, index) => (
                          <div key={index} className="bg-blue-50 rounded p-2">
                            <p className="font-semibold text-sm text-gray-900">{membre.name}</p>
                            <p className="text-xs text-blue-600">{membre.specialite}</p>
                            <p className="text-xs text-gray-500">Exp: {membre.experience}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Réalisations */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Nos Réalisations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.achievements).map(([categorie, realisations]) => (
                  <div key={categorie} className="text-center bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-4">{categorie}</h3>
                    <div className="space-y-2">
                      {realisations.map((realisation, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{realisation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Innovation */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Notre Approche Innovante</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.innovation).map(([aspect, innovations]) => (
                  <div key={aspect} className="text-center bg-teal-50 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-800 mb-4">{aspect}</h3>
                    <div className="space-y-2">
                      {innovations.map((innovation, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{innovation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tarification */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Tarification</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.pricing).map(([service, tarifs]) => (
                  <div key={service} className="text-center bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-800 mb-4">{service}</h3>
                    <div className="space-y-2">
                      {tarifs.map((tarif, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{tarif}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">*Devis personnalisé selon mission</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à transformer votre organisation ?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Bénéficiez d'un diagnostic gratuit et découvrez comment optimiser vos performances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite un diagnostic gratuit pour mon entreprise`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              💬 Diagnostic Gratuit
            </a>
            <a 
              href={`mailto:${entity.email}?subject=Demande de consultation stratégique&body=Bonjour, je souhaite un devis pour les services suivants :`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              📧 Demande de Devis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}