// app/entites/secondaire/page.jsx
'use client';

import Link from 'next/link';

export default function SecondairePage() {
  const entity = {
    id: 3,
    name: "Institut Samba Secondaire",
    slogan: "Former les leaders de demain dès aujourd'hui",
    description: "Établissement d'enseignement secondaire général d'excellence préparant aux baccalauréats avec un programme renforcé en sciences et technologies. Orientation universitaire et accompagnement personnalisé.",
    site: "Enseignement secondaire",
    image: "/assets/images/secondaire-campus.jpg",
    logo: "/assets/logos/logo-secondaire.png",
    category: "Enseignement Secondaire",
    locations: [
      {
        name: "Campus Principal",
        address: "Mvog-ada, Yaoundé, Cameroun",
        type: "Siège"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "1985",
    director: "M. Jean-Paul Ndi",
    accreditation: "Ministère des Enseignements Secondaires - Arrêté N° 012/85/MINESEC",
    recognition: "Établissement secondaire reconnu par l'État",
    
    // Cycles et programmes
    programs: {
      "Cycle Inférieur": [
        {
          name: "Classe de 6ème",
          duration: "1 an",
          specialites: ["Tronc commun", "Initiation scientifique", "Langues vivantes"]
        },
        {
          name: "Classes de 5ème & 4ème",
          duration: "2 ans", 
          specialites: ["Enseignement général", "Sciences expérimentales", "Technologie"]
        },
        {
          name: "Classe de 3ème",
          duration: "1 an",
          specialites: ["Pré-orientation", "Brevet d'Études", "Préparation 2nd"]
        }
      ],
      "Cycle Supérieur": [
        {
          name: "Seconde Générale",
          duration: "1 an",
          specialites: ["Enseignement général", "Détermination", "Orientation"]
        },
        {
          name: "Première Scientifique",
          duration: "1 an",
          specialites: ["Mathématiques", "Physique-Chimie", "Sciences de la Vie"]
        },
        {
          name: "Terminale Scientifique",
          duration: "1 an",
          specialites: ["Spécialité Maths", "Spécialité PC", "Spécialité SVT"]
        },
        {
          name: "Première & Terminale Littéraire",
          duration: "2 ans",
          specialites: ["Philosophie", "Littérature", "Langues approfondies"]
        }
      ],
      "Programmes Renforcés": [
        {
          name: "Excellence Scientifique",
          duration: "Toute l'année",
          specialites: ["Olympiades de maths", "Concours scientifiques", "Projets recherche"]
        },
        {
          name: "Programme Linguistique", 
          duration: "Toute l'année",
          specialites: ["Anglais renforcé", "Français excellence", "Espagnol optionnel"]
        },
        {
          name: "Orientation Universitaire",
          duration: "Terminale",
          specialites: ["Coaching orientation", "Simulation bac", "Préparation supérieur"]
        }
      ]
    },

    // Installations
    facilities: [
      {
        category: "Infrastructures Pédagogiques",
        items: [
          "Salles de classes spacieuses et ventilées",
          "Laboratoires de sciences équipés",
          "Salle informatique multimédia",
          "CDI (Centre de Documentation et d'Information)",
          "Salle audiovisuelle"
        ]
      },
      {
        category: "Équipements Sportifs et Culturels", 
        items: [
          "Terrain de sport multifonction",
          "Salle de gym et arts martiaux",
          "Espace culturel et artistique",
          "Laboratoire de langues",
          "Salle de musique et théâtre"
        ]
      },
      {
        category: "Cadre de Vie",
        items: [
          "Campus arboré et sécurisé",
          "Cantine scolaire",
          "Infirmerie médicale",
          "Service de transport scolaire",
          "Espace détente étudiant"
        ]
      }
    ],

    // Résultats et performance
    performance: {
      "Résultats Baccalauréat 2023": [
        "Taux de réussite: 92%",
        "Mentions Très Bien: 18%",
        "Mentions Bien: 35%",
        "Mentions Assez Bien: 39%"
      ],
      "Concours et Distinctions": [
        "Lauréats olympiades de mathématiques",
        "Prix d'excellence en sciences",
        "Concours d'éloquence",
        "Compétitions sportives régionales"
      ],
      "Orientation Post-Bac": [
        "85% en enseignement supérieur",
        "10% en formations techniques",
        "5% en projets entrepreneuriaux"
      ]
    },

    // Vie scolaire
    schoolLife: {
      "Activités Périscolaires": [
        "Club scientifique et technique",
        "Club de débat et d'éloquence",
        "Association sportive",
        "Atelier artistique et culturel"
      ],
      "Encadrement Pédagogique": [
        "Suivi individualisé des élèves",
        "Heures de soutien scolaire",
        "Préparation aux examens",
        "Orientation professionnelle"
      ],
      "Règlement Intérieur": [
        "Tenue scolaire obligatoire",
        "Respect des horaires",
        "Assiduité exigée",
        "Éthique et discipline"
      ]
    },

    // Admission
    admission: {
      "Conditions d'Admission": [
        "Test d'entrée selon le niveau",
        "Dossier scolaire des années antérieures",
        "Entretien avec la direction",
        "Certificat de naissance et photos"
      ],
      "Procédure d'Inscription": [
        "Retrait du dossier d'inscription",
        "Test de niveau écrit",
        "Entretien motivation élève et parents",
        "Inscription définitive"
      ],
      "Calendrier Scolaire": [
        "Rentrée scolaire: Septembre",
        "Inscriptions: Mars à Juillet",
        "Tests d'entrée: Juillet-Août",
        "Portes ouvertes: Avril"
      ]
    },

    // Frais et Financement
    fees: {
      "Frais de Scolarité Annuels": [
        "6ème à 3ème: 250,000 - 300,000 FCFA",
        "Seconde à Terminale: 300,000 - 350,000 FCFA",
        "Frais d'inscription: 25,000 FCFA",
        "Frais de dossier: 15,000 FCFA"
      ],
      "Frais Annexes": [
        "Tenue scolaire: 45,000 FCFA",
        "Manuels scolaires: 50,000 FCFA",
        "Transport scolaire: Optionnel",
        "Cantine: 75,000 FCFA/mois"
      ],
      "Aides et Réductions": [
        "Réduction fratrie (10% dès le 2ème enfant)",
        "Bourse d'excellence sur dossier",
        "Paiement échelonné possible",
        "Aide aux familles nombreuses"
      ]
    },

    // Chiffres clés
    stats: {
      "Effectifs": "600+ élèves",
      "Taux de Réussite Bac": "92%",
      "Enseignants": "35+ professeurs qualifiés",
      "Promotions": "30+ promotions diplômées",
      "Surface Campus": "2 hectares"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                📚
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-green-100 mb-2">{entity.slogan}</p>
              <p className="text-green-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="https://ih3mdhp6.forms.app/formulaire-dinscription"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📝 Pré-inscription
                </a>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors">
                  🗓️ Journée Portes Ouvertes
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
                  <p className="font-semibold text-gray-700">Campus</p>
                  {entity.locations.map((location, index) => (
                    <div key={index} className="mt-1">
                      <p className="text-sm font-medium text-gray-600">{location.name}</p>
                      <p className="text-xs text-gray-500">{location.address}</p>
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
                    <p className="font-semibold text-green-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats Bac */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">🏆 Résultats 2023</h3>
              <div className="space-y-2">
                {entity.performance["Résultats Baccalauréat 2023"].map((result, index) => (
                  <p key={index} className="text-green-700 text-sm">{result}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Cycles et Programmes */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Cycles d'Enseignement</h2>
              <div className="space-y-8">
                {Object.entries(entity.programs).map(([category, programs]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-100 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {programs.map((program, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-2">{program.name}</h4>
                          <p className="text-sm text-green-600 mb-3">Durée: {program.duration}</p>
                          <div className="space-y-1">
                            {program.specialites.map((spec, specIndex) => (
                              <div key={specIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                                {spec}
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

            {/* Installations Scolaires */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏫 Cadre Scolaire</h2>
              <div className="space-y-6">
                {entity.facilities.map((facilityCategory, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {facilityCategory.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {facilityCategory.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center p-2 bg-green-50 rounded-lg">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grille d'informations */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vie Scolaire */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🌟 Vie Scolaire</h2>
                <div className="space-y-4">
                  {Object.entries(entity.schoolLife).map(([section, items]) => (
                    <div key={section}>
                      <h3 className="font-semibold text-green-700 mb-2">{section}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Performance */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">📈 Résultats</h2>
                <div className="space-y-4">
                  {Object.entries(entity.performance).map(([section, items]) => (
                    <div key={section}>
                      <h3 className="font-semibold text-blue-700 mb-2">{section}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Admission et Frais */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Admission */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Admission</h2>
                <div className="space-y-4">
                  {Object.entries(entity.admission).map(([section, items]) => (
                    <div key={section}>
                      <h3 className="font-semibold text-green-700 mb-2">{section}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frais Scolaires */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">💰 Frais Scolaires</h2>
                <div className="space-y-4">
                  {Object.entries(entity.fees).map(([section, items]) => (
                    <div key={section}>
                      <h3 className="font-semibold text-orange-700 mb-2">{section}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à rejoindre l'excellence scolaire ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Inscrivez votre enfant dans un établissement qui allie tradition d'excellence et innovation pédagogique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ih3mdhp6.forms.app/formulaire-dinscription"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📝 Pré-inscrire mon enfant
            </a>
            <a 
              href={`https://wa.me/${entity.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              🗓️ Visiter le collège
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}