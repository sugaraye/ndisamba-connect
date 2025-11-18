// app/entites/online/page.jsx
'use client';

import Link from 'next/link';

export default function OnlinePage() {
  const entity = {
    id: 11,
    name: "Ndi Samba Online",
    slogan: "L'éducation innovante sans frontières",
    description: "Plateforme de e-learning innovante proposant des cours en ligne, certifications professionnelles et formations à distance interactives. Accès 24h/24 à des contenus pédagogiques de qualité avec accompagnement personnalisé.",
    site: "https://elearningsamba.com",
    image: "/assets/images/online-platform.jpg",
    logo: "/assets/logos/logo-online.png",
    category: "E-learning",
    locations: [
      {
        name: "Plateforme Digitale",
        address: "En ligne - Accessible mondialement",
        type: "Plateforme Web & Mobile"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "contact@universitendisamba.com",
    whatsapp: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "2020",
    director: "Dr. Raymond Samba Ndi",
    accreditation: "Plateforme de Formation à Distance Agréée - Ministère de l'Enseignement Supérieur",
    recognition: "Certifications reconnues internationalement",
    
    // Plateforme technologique
    plateforme: {
      "Fonctionnalités Principales": [
        {
          name: "Cours Multimédias",
          description: "Vidéos, présentations, quiz interactifs",
          avantages: ["HD qualité", "Téléchargement offline", "Sous-titres multilingues"]
        },
        {
          name: "Classes Virtuelles", 
          description: "Sessions en direct avec formateurs",
          avantages: ["Interaction en temps réel", "Partage d'écran", "Enregistrement des sessions"]
        },
        {
          name: "Espace Apprenant",
          description: "Tableau de bord personnalisé",
          avantages: ["Progression visuelle", "Certifications", "Réseau d'anciens"]
        }
      ],
      "Support Technique": [
        {
          name: "Assistance 24h/24",
          description: "Support technique permanent",
          disponibilite: "Chat, email, téléphone",
          delai: "Réponse sous 2 heures"
        },
        {
          name: "Tutorat Personnalisé",
          description: "Accompagnement individuel",
          disponibilite: "Formateurs dédiés",
          delai: "Feedback sous 24h"
        },
        {
          name: "Communauté d'Entraide",
          description: "Réseau d'apprenants actifs",
          disponibilite: "Forums, groupes WhatsApp",
          delai: "Interaction immédiate"
        }
      ],
      "Accessibilité": [
        {
          name: "Multi-Devices",
          description: "Accessible sur tous supports",
          compatibilite: ["Web", "Mobile Android/iOS", "Tablette"],
          performance: "Optimisé 4G"
        },
        {
          name: "Multi-Langues", 
          description: "Contenus multilingues",
          langues: ["Français", "Anglais", "Espagnol"],
          accessibilite: "Sous-titres inclus"
        },
        {
          name: "Adaptatif",
          description: "Adapté aux handicaps",
          fonctionnalites: ["Voice-over", "Contrastes élevés", "Navigation clavier"],
          conformite: "Normes WCAG 2.1"
        }
      ]
    },

    // Formations disponibles
    formations: {
      "Formations Académiques": [
        {
          nom: "Licences en Ligne",
          duree: "3 ans",
          matieres: ["Management", "Informatique", "Commerce International"],
          certification: "Diplôme reconnu par l'État"
        },
        {
          nom: "Masters Professionnels",
          duree: "2 ans",
          matieres: ["MBA Digital", "Data Science", "Marketing Digital"],
          certification: "Master professionnel"
        },
        {
          nom: "Certifications Universitaires",
          duree: "6-12 mois",
          matieres: ["Comptabilité", "Ressources Humaines", "Gestion de Projet"],
          certification: "Attestation d'études universitaires"
        }
      ],
      "Formations Professionnelles": [
        {
          nom: "Digital & Technologies",
          duree: "3-6 mois",
          matieres: ["Développement Web", "Marketing Digital", "Cybersécurité"],
          certification: "Certificat professionnel"
        },
        {
          nom: "Management & Entrepreneuriat",
          duree: "4-8 mois",
          matieres: ["Leadership", "Création d'entreprise", "Finance"],
          certification: "Certificat de compétences"
        },
        {
          nom: "Compétences Transversales",
          duree: "1-3 mois",
          matieres: ["Communication", "Anglais des affaires", "Soft Skills"],
          certification: "Badge numérique"
        }
      ],
      "Formations Sur Mesure": [
        {
          nom: "Entreprises & Organisations",
          duree: "Personnalisée",
          matieres: ["Formations intra-entreprise", "Plans de développement"],
          certification: "Certificat organisationnel"
        },
        {
          nom: "Formations Accélérées",
          duree: "Intensives",
          matieres: ["Bootcamps", "Workshops", "Séminaires"],
          certification: "Attestation de participation"
        }
      ]
    },

    // Méthodologie pédagogique
    pedagogie: {
      "Approche Innovante": [
        "Apprentissage par projets concrets",
        "Évaluations continues et compétences",
        "Classes inversées interactives",
        "Micro-learning et granularité"
      ],
      "Technologies Educatives": [
        "Reconnaissance vocale et AI",
        "Analytics de progression",
        "Gamification et badges",
        "Réalité virtuelle immersive"
      ],
      "Accompagnement": [
        "Mentorat individuel personnalisé",
        "Communautés d'apprentissage",
        "Career coaching intégré",
        "Suivi post-formation"
      ]
    },

    // Tarification et financement
    tarification: {
      "Formations Diplômantes": [
        "Licence en ligne: 300,000 FCFA/an",
        "Master en ligne: 400,000 FCFA/an",
        "Frais d'inscription: 25,000 FCFA",
        "Frais de dossier: 15,000 FCFA"
      ],
      "Certifications Professionnelles": [
        "Certificats 3 mois: 75,000 FCFA",
        "Certificats 6 mois: 120,000 FCFA",
        "Formations intensives: 150,000 FCFA",
        "Bootcamps: 200,000 FCFA"
      ],
      "Options de Paiement": [
        "Paiement échelonné sans frais",
        "Paiement mensuel possible",
        "Bourses d'excellence disponibles",
        "Financement entreprise"
      ]
    },

    // Reconnaissance et partenariats
    partenariats: {
      "Partenaires Académiques": [
        "Universités internationales",
        "Écoles de commerce partenaires",
        "Organismes de certification",
        "Instituts de recherche"
      ],
      "Partenaires Technologiques": [
        "Plateformes LMS leaders",
        "Éditeurs de contenus digitaux",
        "Solutions de vidéoconférence",
        "Outils d'évaluation en ligne"
      ],
      "Partenaires Entreprises": [
        "Recruteurs et headhunters",
        "Entreprises formatrices",
        "Incubateurs et accélérateurs",
        "Associations professionnelles"
      ]
    },

    // Témoignages
    temoignages: [
      {
        auteur: "Marie K., Étudiante MBA",
        commentaire: "La flexibilité des cours en ligne m'a permis de travailler tout en poursuivant mes études. L'accompagnement des formateurs est exceptionnel !",
        formation: "MBA Management Digital",
        note: "5/5"
      },
      {
        auteur: "Jean-Paul T., Entrepreneur",
        commentaire: "Les formations en développement web m'ont donné les compétences pour lancer ma startup. Plateforme très intuitive.",
        formation: "Développement Full-Stack",
        note: "5/5"
      },
      {
        auteur: "Sarah M., Cadre RH",
        commentaire: "Excellente alternative aux formations présentielles. Contenus à jour et communauté d'apprenants très active.",
        formation: "Certification Ressources Humaines",
        note: "4.5/5"
      }
    ],

    // Chiffres clés
    stats: {
      "Apprenants Actifs": "2,500+",
      "Formations Disponibles": "50+",
      "Taux de Réussite": "92%",
      "Formateurs Experts": "30+",
      "Pays Desservis": "15+"
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
                💻
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
                  href={entity.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  🌐 Accéder à la Plateforme
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  💬 Demo Gratuite
                </a>
                <a 
                  href="https://ih3mdhp6.forms.app/formulaire-dinscription"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📝 S'inscrire Maintenant
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Support</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Support Technique</p>
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
                  <p className="font-semibold text-gray-700">Plateforme</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-1">
                      <p className="text-sm text-gray-600">{location.address}</p>
                      <p className="text-xs text-purple-500">{location.type}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Support</p>
                  <p className="text-sm text-gray-600">Assistance 24h/24</p>
                  <p className="text-sm text-gray-600">Chat en direct</p>
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Impact</h3>
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

            {/* Demo Gratuite */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">🎯 Demo Gratuite</h3>
              <p className="text-orange-700 text-sm">Découvrez la plateforme gratuitement</p>
              <a 
                href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite une démo de la plateforme Ndi Samba Online`}
                className="text-orange-600 text-sm font-semibold hover:text-orange-700 block mt-2"
              >
                💬 Demander une Demo
              </a>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Plateforme Technologique */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 Plateforme Innovante</h2>
              <div className="space-y-8">
                {Object.entries(entity.plateforme).map(([categorie, fonctionnalites]) => (
                  <div key={categorie}>
                    <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b border-purple-100 pb-2">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {fonctionnalites.map((fonctionnalite, index) => (
                        <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-2">{fonctionnalite.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{fonctionnalite.description}</p>
                          
                          {fonctionnalite.avantages && (
                            <div className="space-y-1">
                              {fonctionnalite.avantages.map((avantage, avIndex) => (
                                <div key={avIndex} className="flex items-center text-sm text-gray-700">
                                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                  {avantage}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {fonctionnalite.disponibilite && (
                            <div className="mt-2">
                              <p className="text-xs font-semibold text-purple-600">Disponibilité:</p>
                              <p className="text-xs text-gray-600">{fonctionnalite.disponibilite}</p>
                            </div>
                          )}
                          
                          {fonctionnalite.compatibilite && (
                            <div className="mt-2">
                              <p className="text-xs font-semibold text-purple-600">Compatibilité:</p>
                              <p className="text-xs text-gray-600">{fonctionnalite.compatibilite.join(', ')}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Formations Disponibles */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Catalogue de Formations</h2>
              <div className="space-y-8">
                {Object.entries(entity.formations).map(([categorie, formations]) => (
                  <div key={categorie}>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {formations.map((formation, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-2">{formation.nom}</h4>
                          <p className="text-sm text-blue-600 mb-2">Durée: {formation.duree}</p>
                          <div className="mb-2">
                            <p className="text-xs font-semibold text-blue-600">Matières:</p>
                            <p className="text-xs text-gray-600">{formation.matieres.join(', ')}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-blue-600">Certification:</p>
                            <p className="text-xs text-gray-600">{formation.certification}</p>
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
              {/* Méthodologie Pédagogique */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Méthodologie Innovante</h2>
                <div className="space-y-4">
                  {Object.entries(entity.pedagogie).map(([aspect, points]) => (
                    <div key={aspect}>
                      <h3 className="font-semibold text-purple-700 mb-2">{aspect}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {points.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Témoignages */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">💬 Témoignages</h2>
                <div className="space-y-4">
                  {entity.temoignages.map((temoignage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 italic mb-2">"{temoignage.commentaire}"</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{temoignage.auteur}</p>
                          <p className="text-xs text-gray-500">{temoignage.formation}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-xs text-gray-600 ml-1">{temoignage.note}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Partenariats */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🤝 Partenariats Stratégiques</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.partenariats).map(([type, partenaires]) => (
                  <div key={type} className="text-center bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-4">{type}</h3>
                    <div className="space-y-2">
                      {partenaires.map((partenaire, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{partenaire}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tarification */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Tarifs & Financement</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.tarification).map(([categorie, tarifs]) => (
                  <div key={categorie} className="text-center bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-4">{categorie}</h3>
                    <div className="space-y-2">
                      {tarifs.map((tarif, index) => (
                        <div key={index} className="bg-white rounded p-2">
                          <p className="text-sm text-gray-700">{tarif}</p>
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
          <h2 className="text-2xl font-bold mb-4">Prêt à révolutionner votre apprentissage ?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers d'apprenants et développez vos compétences avec notre plateforme innovante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ih3mdhp6.forms.app/formulaire-dinscription"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📝 S'inscrire Maintenant
            </a>
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite une démonstration de la plateforme Ndi Samba Online`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              💬 Demo Gratuite
            </a>
            <a 
              href={entity.site}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visiter la Plateforme
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}