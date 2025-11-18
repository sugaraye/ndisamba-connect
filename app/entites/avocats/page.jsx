// app/entites/avocats/page.jsx
'use client';

import Link from 'next/link';

export default function AvocatsPage() {
  const entity = {
    id: 7,
    name: "GNSF Avocats & Associés",
    slogan: "L'excellence juridique au service de vos ambitions",
    description: "Cabinet d'avocats pluridisciplinaire spécialisé en droit des affaires, droit commercial, droit des sociétés et conseil juridique aux entreprises. Expertise et accompagnement sur mesure pour la réussite de vos projets.",
    site: "Conseil juridique",
    image: "/assets/images/avocats-bureau.jpg",
    logo: "/assets/logos/logo-avocats.png",
    category: "Services Juridiques",
    locations: [
      {
        name: "Cabinet Principal",
        address: "Carrefour des carreaux, Yaoundé, Cameroun",
        type: "Siège Social"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "2015",
    director: "Maître Paul Ndi",
    accreditation: "Barreau du Cameroun - N° Barreau 045/2015",
    recognition: "Membre de l'Association des Avocats d'Affaires du Cameroun",
    
    // Domaines d'expertise
    expertise: {
      "Droit des Affaires": [
        {
          name: "Création d'Entreprise",
          description: "Constitution et formalités juridiques",
          services: ["Choix de la structure", "Rédaction des statuts", "Immatriculation", "Conseil en optimisation"]
        },
        {
          name: "Fusions & Acquisitions", 
          description: "Opérations de croissance externe",
          services: ["Due diligence", "Négociations", "Contrats de cession", "Restructurations"]
        },
        {
          name: "Contrats Commerciaux",
          description: "Rédaction et négociation contractuelle",
          services: ["Contrats de distribution", "Partnerships", "Joint-ventures", "NDA"]
        }
      ],
      "Droit des Sociétés": [
        {
          name: "Gouvernance d'Entreprise",
          description: "Conformité et bonnes pratiques",
          services: ["Assemblées générales", "Conseil d'administration", "Règlement intérieur", "Code d'éthique"]
        },
        {
          name: "Droit Social",
          description: "Relations employeurs-employés",
          services: ["Contrats de travail", "Licenciements", "Conventions collectives", "Contentieux social"]
        },
        {
          name: "Conformité & RSE",
          description: "Respect des obligations légales",
          services: ["Audit de conformité", "Rapports RSE", "Diligence raisonnable", "Éthique des affaires"]
        }
      ],
      "Contentieux": [
        {
          name: "Contentieux Commercial",
          description: "Litiges entre entreprises",
          services: ["Procédures accélérées", "Arbitrage", "Médiation", "Exécution des jugements"]
        },
        {
          name: "Contentieux Civil", 
          description: "Litiges de droit commun",
          services: ["Responsabilité civile", "Droit de la consommation", "Litiges contractuels", "Règlement amiable"]
        },
        {
          name: "Droit de la Propriété Intellectuelle",
          description: "Protection des innovations",
          services: ["Dépôts de marques", "Brevets", "Droit d'auteur", "Contrefaçon"]
        }
      ]
    },

    // Secteurs spécialisés
    sectors: {
      "Entreprises & PME": [
        "Accompagnement global PME",
        "Conseil stratégique",
        "Optimisation juridique",
        "Croissance et développement"
      ],
      "Startups & Innovation": [
        "Levées de fonds",
        "Protection intellectuelle",
        "Contrats technologiques",
        "Scale-up juridique"
      ],
      "Investissements": [
        "Droit des investissements",
        "Zones franches",
        "Partariats public-privé",
        "Projets d'infrastructure"
      ],
      "International": [
        "Droit OHADA uniformisé",
        "Contrats internationaux",
        "Investissements étrangers",
        "Arbitrage international"
      ]
    },

    // Équipe
    team: {
      "Associés Fondateurs": [
        {
          name: "Maître Paul Ndi",
          specialite: "Droit des Affaires & Sociétés",
          experience: "15 ans",
          formation: "Docteur en Droit - Université de Yaoundé II"
        },
        {
          name: "Maître Marie-Louise Kem",
          specialite: "Contentieux Commercial",
          experience: "12 ans",
          formation: "Master en Droit des Affaires - Paris II"
        }
      ],
      "Collaborateurs": [
        {
          name: "Maître Alain Fotso",
          specialite: "Droit Social & du Travail",
          experience: "8 ans",
          formation: "Master en Droit Social - Université de Douala"
        },
        {
          name: "Maître Chantal Ngando",
          specialite: "Propriété Intellectuelle",
          experience: "6 ans",
          formation: "Spécialiste PI - OAPI"
        }
      ]
    },

    // Méthodologie
    methodology: {
      "Premier Contact": [
        "Analyse gratuite de votre situation",
        "Évaluation des besoins juridiques",
        "Proposition de stratégie adaptée",
        "Devis transparent et détaillé"
      ],
      "Accompagnement": [
        "Désignation d'un avocat référent",
        "Suivi personnalisé régulier",
        "Communication proactive",
        "Adaptation aux évolutions"
      ],
      "Résultats": [
        "Solutions juridiques efficaces",
        "Documents rédigés sur mesure",
        "Protection de vos intérêts",
        "Valorisation de votre entreprise"
      ]
    },

    // Honoraires
    fees: {
      "Consultation": [
        "Première consultation: Gratuite (30 min)",
        "Consultation standard: 50,000 FCFA/heure",
        "Consultation urgente: 75,000 FCFA/heure"
      ],
      "Dossiers Standard": [
        "Création SARL: 200,000 - 350,000 FCFA",
        "Rédaction contrat: 100,000 - 500,000 FCFA",
        "Assemblée générale: 150,000 FCFA",
        "Avis juridique: 75,000 - 200,000 FCFA"
      ],
      "Contentieux": [
        "Honoraires au forfait: sur devis",
        "Honoraires à l'heure: 75,000 FCFA",
        "Success fee: négociable",
        "Défense pénale: sur devis"
      ]
    },

    // Réalisations
    achievements: {
      "Entreprises Accompagnées": [
        "50+ créations d'entreprises",
        "15 fusions-acquisitions",
        "30 levées de fonds réussies",
        "100+ contrats commerciaux"
      ],
      "Contentieux": [
        "95% de succès en médiation",
        "80% de règlements amiables",
        "Expertise reconnue par les tribunaux",
        "Dossiers complexes résolus"
      ],
      "Reconnaissance": [
        "Cabinet recommandé par la CCIA",
        "Interventions dans les médias",
        "Conférences et formations",
        "Publications juridiques"
      ]
    },

    // Chiffres clés
    stats: {
      "Années d'Expérience": "15+",
      "Dossiers Traités": "500+",
      "Taux de Satisfaction": "98%",
      "Équipe": "8 juristes experts",
      "Langues": "Français, Anglais, Espagnol"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                ⚖️
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-slate-100 mb-2">{entity.slogan}</p>
              <p className="text-slate-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  💬 Consultation WhatsApp
                </a>
                <a 
                  href={`mailto:${entity.email}?subject=Demande de consultation juridique`}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                >
                  📧 Prendre Rendez-vous
                </a>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-slate-700 transition-colors">
                  📋 Audit Juridique Gratuit
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
                  <p className="font-semibold text-gray-700">Cabinet</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-1">
                      <p className="text-sm text-gray-600">{location.address}</p>
                      <p className="text-xs text-slate-500">{location.type}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Horaires</p>
                  <p className="text-sm text-gray-600">Lun-Ven: 8h-18h</p>
                  <p className="text-sm text-gray-600">Sam: 9h-13h (sur RDV)</p>
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
                    <p className="font-semibold text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">⚖️ Accréditation</h3>
              <p className="text-blue-700 text-sm">{entity.accreditation}</p>
              <p className="text-blue-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Urgences */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">🚨 Urgences Juridiques</h3>
              <p className="text-red-700 text-sm">Assistance 24h/24 pour les situations urgentes</p>
              <a href={`tel:${entity.phone}`} className="text-red-600 text-sm font-semibold hover:text-red-700">
                {entity.phone}
              </a>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Domaines d'Expertise */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Domaines d'Expertise</h2>
              <div className="space-y-8">
                {Object.entries(entity.expertise).map(([domaine, services]) => (
                  <div key={domaine}>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                      {domaine}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          <div className="space-y-1">
                            {service.services.map((srv, srvIndex) => (
                              <div key={srvIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>
                                {srv}
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

            {/* Équipe */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 Notre Équipe</h2>
              <div className="space-y-6">
                {Object.entries(entity.team).map(([categorie, membres]) => (
                  <div key={categorie}>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {membres.map((membre, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 mb-1">{membre.name}</h4>
                          <p className="text-sm text-blue-600 mb-2">{membre.specialite}</p>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p>📅 Expérience: {membre.experience}</p>
                            <p>🎓 {membre.formation}</p>
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
              {/* Secteurs Spécialisés */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🏢 Secteurs d'Intervention</h2>
                <div className="space-y-4">
                  {Object.entries(entity.sectors).map(([secteur, services]) => (
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

              {/* Méthodologie */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Notre Méthodologie</h2>
                <div className="space-y-4">
                  {Object.entries(entity.methodology).map(([etape, actions]) => (
                    <div key={etape}>
                      <h3 className="font-semibold text-green-700 mb-2">{etape}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {actions.map((action, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {action}
                          </li>
                        ))}
                      </ul>
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

            {/* Honoraires */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Honoraires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.fees).map(([service, tarifs]) => (
                  <div key={service} className="text-center bg-slate-50 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-800 mb-4">{service}</h3>
                    <div className="space-y-2">
                      {tarifs.map((tarif, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{tarif}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">*Devis personnalisé sur demande</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'un conseil juridique personnalisé ?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Première consultation gratuite pour analyser votre situation et vous proposer la meilleure stratégie juridique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite une consultation juridique`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              💬 Consultation Gratuite
            </a>
            <a 
              href={`mailto:${entity.email}?subject=Demande de consultation juridique&body=Bonjour, je souhaite prendre rendez-vous pour une consultation.`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📧 Prendre Rendez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}