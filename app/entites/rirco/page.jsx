// app/entites/rirco/page.jsx
'use client';

import Link from 'next/link';

export default function RircoPage() {
  const entity = {
    id: 9,
    name: "Centre Médical RIRCO",
    slogan: "L'excellence médicale au service de votre bien-être",
    description: "Centre de soins médicaux complets avec consultations générales et spécialisées, analyses biologiques et imagerie médicale. Créateur du Ngul Be Tara et autres produits médicamenteux innovants à base de plantes et substances naturelles.",
    site: "Soins médicaux et analyses",
    image: "/assets/images/medical-centre.jpg",
    logo: "/assets/logos/logo-rirco.png",
    category: "Santé",
    locations: [
      {
        name: "Centre Principal",
        address: "Campus Ndi Samba, Tropicana, Yaoundé, Cameroun",
        type: "Siège Médical"
      }
    ],
    phone: "+237 696 16 49 32",
    email: "infos@groupendisambaformation.com",
    whatsapp: "+237 696 16 49 32",
    urgence: "+237 696 16 49 32",
    
    // Informations détaillées
    founded: "2017",
    director: "Dr. Marlyse Peyou Ndi",
    accreditation: "Agrément Ministère de la Santé Publique - N° 045/2017/MINSANTE",
    recognition: "Centre de Recherche en Médecine Naturelle Agréé",
    
    // Services médicaux
    services: {
      "Consultations Médicales": [
        {
          name: "Médecine Générale",
          description: "Consultations et suivi médical général",
          horaire: "Lun-Sam: 7h30-18h | Urgences: 24h/24",
          medecins: ["Dr. Alain Ngo", "Dr. Marie Kem"]
        },
        {
          name: "Spécialités Médicales", 
          description: "Consultations avec des spécialistes",
          horaire: "Sur rendez-vous",
          medecins: ["Cardiologie", "Pédiatrie", "Gynécologie", "Dermatologie"]
        },
        {
          name: "Médecine Naturelle",
          description: "Approche intégrative et phytothérapie",
          horaire: "Lun-Ven: 8h-17h",
          medecins: ["Dr. Marlyse Peyou Ndi", "Pr. Jean Mbarga"]
        }
      ],
      "Diagnostic & Analyses": [
        {
          name: "Laboratoire d'Analyses",
          description: "Biologie médicale complète",
          examens: ["Hématologie", "Biochimie", "Bactériologie", "Hormonologie"],
          delai: "Résultats sous 24h"
        },
        {
          name: "Imagerie Médicale",
          description: "Explorations diagnostiques avancées",
          examens: ["Échographie", "Radiologie", "Échocardiographie", "Doppler"],
          delai: "Comptes-rendus immédiats"
        },
        {
          name: "Bilan de Santé",
          description: "Check-up complet personnalisé",
          examens: ["Bilan sanguin complet", "Imagerie", "Consultations spécialisées"],
          delai: "Rapport détaillé sous 48h"
        }
      ],
      "Soins & Traitements": [
        {
          name: "Soins d'Urgence",
          description: "Prise en charge des urgences médicales",
          services: ["Traumatologie", "Intoxications", "Détresses vitales", "Premiers secours"],
          disponibilite: "24h/24"
        },
        {
          name: "Traitements Spécialisés", 
          description: "Protocoles thérapeutiques innovants",
          services: ["Cures naturelles", "Médecine intégrative", "Suivi chronique", "Éducation thérapeutique"],
          disponibilite: "Sur programme"
        },
        {
          name: "Suivi des Patients Chroniques",
          description: "Accompagnement des maladies chroniques",
          services: ["Diabétologie", "Hypertension", "Asthme", "Arthrose"],
          disponibilite: "Programme personnalisé"
        }
      ]
    },

    // Innovation - Ngul Be Tara
    innovations: {
      "Ngul Be Tara": [
        {
          nom: "Ngul Be Tara Original",
          composition: "Extraits naturels de plantes médicinales africaines",
          indications: ["Renforcement immunitaire", "Tonique général", "Anti-fatigue"],
          posologie: "2 gélules matin et soir",
          recherche: "5 années de recherche clinique"
        },
        {
          nom: "Ngul Be Tara Plus",
          composition: "Formule enrichie en antioxydants naturels",
          indications: ["Vitalité seniors", "Convalescence", "Stress oxydatif"],
          posologie: "1 gélule 3 fois par jour",
          recherche: "Brevet en cours"
        }
      ],
      "Autres Produits Innovants": [
        {
          nom: "RIRCO Arthro-Soulage",
          composition: "Complexe anti-inflammatoire naturel",
          indications: ["Douleurs articulaires", "Arthrose", "Rhumatismes"],
          posologie: "Application locale 2-3 fois/jour"
        },
        {
          nom: "RIRCO Digest-Comfort",
          composition: "Mélange de plantes digestives",
          indications: ["Troubles digestifs", "Ballonnements", "Constipation"],
          posologie: "Infusion après repas"
        },
        {
          nom: "RIRCO Sleep-Nature",
          composition: "Complexe apaisant pour le sommeil",
          indications: ["Insomnies", "Anxiété", "Troubles du sommeil"],
          posologie: "1 comprimé le soir"
        }
      ]
    },

    // Recherche & Développement
    recherche: {
      "Domaines de Recherche": [
        "Pharmacopée traditionnelle africaine",
        "Validation scientifique des remèdes ancestraux",
        "Développement de phytomédicaments",
        "Médecine intégrative"
      ],
      "Partenariats Scientifiques": [
        "Université de Yaoundé I - Faculté de Médecine",
        "Institut de Recherche Médicale",
        "Laboratoires pharmaceutiques internationaux",
        "Organisations de santé traditionnelle"
      ],
      "Publications & Reconnaissance": [
        "Publications dans revues scientifiques",
        "Brevet Ngul Be Tara déposé",
        "Prix d'innovation médicale 2022",
        "Conférences internationales"
      ]
    },

    // Équipe médicale
    equipe: {
      "Direction Médicale": [
        {
          nom: "Dr. Marlyse Peyou Ndi",
          specialite: "Médecine Naturelle & Recherche",
          experience: "25 ans",
          formation: "Docteur en Médecine - Spécialiste Pharmacopée",
          innovation: "Inventrice du Ngul Be Tara"
        }
      ],
      "Médecins Spécialistes": [
        {
          nom: "Dr. Paul Ngo",
          specialite: "Médecine Générale & Urgences",
          experience: "15 ans",
          formation: "DES Médecine Générale"
        },
        {
          nom: "Dr. Chantal Mbio",
          specialite: "Pédiatrie & Vaccination",
          experience: "12 ans",
          formation: "DES Pédiatrie"
        },
        {
          nom: "Dr. Alain Fotso",
          specialite: "Cardiologie & Médecine Interne",
          experience: "18 ans",
          formation: "DES Cardiologie"
        }
      ],
      "Personnel Paramédical": [
        {
          nom: "Infirmiers Diplômés d'État",
          specialite: "Soins & Accueil",
          effectif: "8 professionnels"
        },
        {
          nom: "Techniciens de Laboratoire",
          specialite: "Analyses & Diagnostic",
          effectif: "5 spécialistes"
        }
      ]
    },

    // Tarifs & Remboursement
    tarification: {
      "Consultations": [
        "Médecine générale: 5,000 FCFA",
        "Spécialistes: 8,000 - 15,000 FCFA",
        "Urgences: 10,000 FCFA",
        "Médecine naturelle: 12,000 FCFA"
      ],
      "Examens & Analyses": [
        "Bilan sanguin complet: 25,000 FCFA",
        "Échographie: 15,000 FCFA",
        "Radiographie: 8,000 FCFA",
        "ECG: 5,000 FCFA"
      ],
      "Produits RIRCO": [
        "Ngul Be Tara (30 gélules): 15,000 FCFA",
        "Arthro-Soulage (100ml): 8,000 FCFA",
        "Digest-Comfort (20 sachets): 6,000 FCFA",
        "Sleep-Nature (30 comprimés): 10,000 FCFA"
      ]
    },

    // Urgences & Rendez-vous
    servicesUrgence: {
      "Urgences Médicales": [
        "Service d'urgence 24h/24",
        "Équipe médicale permanente",
        "Plateau technique complet",
        "Ambulance sur appel"
      ],
      "Prise de Rendez-vous": [
        "Par téléphone: 696 16 49 32",
        "WhatsApp: réservation rapide",
        "Sur place: accueil permanent",
        "En ligne: formulaire web"
      ],
      "Conseils Médicaux": [
        "Téléconsultation possible",
        "Conseils par WhatsApp",
        "Suivi des traitements",
        "Éducation thérapeutique"
      ]
    },

    // Chiffres clés
    stats: {
      "Patients/An": "10,000+",
      "Taux de Satisfaction": "96%",
      "Produits Développés": "15+",
      "Recherches en Cours": "8 projets",
      "Équipe Médicale": "20+ professionnels"
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
                🏥
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
                  href={`tel:${entity.urgence}`}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
                >
                  🚨 Urgences 24h/24
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  💬 Rendez-vous WhatsApp
                </a>
                <a 
                  href={`tel:${entity.phone}`}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  📞 Consultation
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
                  <p className="font-semibold text-gray-700">Urgences</p>
                  <a href={`tel:${entity.urgence}`} className="text-red-600 hover:text-red-700 font-bold">
                    {entity.urgence}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Rendez-vous</p>
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
                  <p className="text-sm text-gray-600">Consultations: 7h30-18h</p>
                  <p className="text-sm text-gray-600">Urgences: 24h/24</p>
                </div>
              </div>
            </div>

            {/* Chiffres Clés */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Centre d'Excellence</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-green-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">🏥 Agréments</h3>
              <p className="text-blue-700 text-sm">{entity.accreditation}</p>
              <p className="text-blue-600 text-xs mt-2">{entity.recognition}</p>
            </div>

            {/* Urgences */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">🚨 Urgences 24h/24</h3>
              <p className="text-red-700 text-sm">Service d'urgence permanent</p>
              <a href={`tel:${entity.urgence}`} className="text-red-600 text-sm font-bold hover:text-red-700 block mt-2">
                📞 {entity.urgence}
              </a>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Services Médicaux */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏥 Services Médicaux</h2>
              <div className="space-y-8">
                {Object.entries(entity.servicesUrgence).map(([categorie, services]) => (
                  <div key={categorie}>
                    <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-100 pb-2">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          
                          {service.horaire && (
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-green-600">Horaires:</p>
                              <p className="text-xs text-gray-600">{service.horaire}</p>
                            </div>
                          )}
                          
                          {service.medecins && (
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-green-600">Médecins:</p>
                              <p className="text-xs text-gray-600">{Array.isArray(service.medecins) ? service.medecins.join(', ') : service.medecins}</p>
                            </div>
                          )}
                          
                          {service.examens && (
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-green-600">Examens:</p>
                              <p className="text-xs text-gray-600">{service.examens.join(', ')}</p>
                            </div>
                          )}
                          
                          {service.delai && (
                            <div>
                              <p className="text-xs font-semibold text-green-600">Délai résultats:</p>
                              <p className="text-xs text-gray-600">{service.delai}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Innovation - Ngul Be Tara */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💊 Innovations Médicales</h2>
              <div className="space-y-8">
                {Object.entries(entity.innovations).map(([categorie, produits]) => (
                  <div key={categorie}>
                    <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b border-purple-100 pb-2">
                      {categorie}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {produits.map((produit, index) => (
                        <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-2">{produit.nom}</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-semibold text-purple-600">Composition:</span>
                              <p className="text-gray-700">{produit.composition}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-purple-600">Indications:</span>
                              <p className="text-gray-700">{produit.indications}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-purple-600">Posologie:</span>
                              <p className="text-gray-700">{produit.posologie}</p>
                            </div>
                            {produit.recherche && (
                              <div>
                                <span className="font-semibold text-purple-600">Recherche:</span>
                                <p className="text-gray-700 text-xs">{produit.recherche}</p>
                              </div>
                            )}
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
              {/* Équipe Médicale */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">👨‍⚕️ Notre Équipe</h2>
                <div className="space-y-4">
                  {Object.entries(entity.equipe).map(([categorie, membres]) => (
                    <div key={categorie}>
                      <h3 className="font-semibold text-green-700 mb-2">{categorie}</h3>
                      <div className="space-y-2">
                        {membres.map((membre, index) => (
                          <div key={index} className="bg-green-50 rounded p-3">
                            <p className="font-semibold text-sm text-gray-900">{membre.nom}</p>
                            <p className="text-xs text-green-600">{membre.specialite}</p>
                            <p className="text-xs text-gray-500">Exp: {membre.experience}</p>
                            {membre.innovation && (
                              <p className="text-xs text-purple-600 font-semibold mt-1">{membre.innovation}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recherche & Développement */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">🔬 Recherche & Innovation</h2>
                <div className="space-y-4">
                  {Object.entries(entity.recherche).map(([domaine, activites]) => (
                    <div key={domaine}>
                      <h3 className="font-semibold text-blue-700 mb-2">{domaine}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {activites.map((activite, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {activite}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Tarifs & Produits</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.tarification).map(([categorie, tarifs]) => (
                  <div key={categorie} className="text-center bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-4">{categorie}</h3>
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

            {/* Urgences & Rendez-vous */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Accès aux Soins</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Section Urgences Médicales */}
                  <div className="text-center bg-red-50 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-4">🚨 Urgences Médicales</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Service d'urgence 24h/24</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Équipe médicale permanente</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Plateau technique complet</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Ambulance sur appel</p>
                      </div>
                    </div>
                  </div>

                  {/* Section Prise de Rendez-vous */}
                  <div className="text-center bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-4">📞 Prise de Rendez-vous</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Par téléphone: {entity.phone}</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">WhatsApp: réservation rapide</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Sur place: accueil permanent</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">En ligne: formulaire web</p>
                      </div>
                    </div>
                  </div>

                  {/* Section Conseils Médicaux */}
                  <div className="text-center bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-4">💬 Conseils Médicaux</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Téléconsultation possible</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Conseils par WhatsApp</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Suivi des traitements</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-700">Éducation thérapeutique</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin de soins médicaux de qualité ?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Prenez rendez-vous dès maintenant ou contactez-nous pour les urgences 24h/24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${entity.urgence}`}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              🚨 Urgences 24h/24
            </a>
            <a 
              href={`https://wa.me/${entity.whatsapp}?text=Bonjour, je souhaite prendre rendez-vous pour une consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
            >
              💬 Rendez-vous WhatsApp
            </a>
            <a 
              href={`tel:${entity.phone}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
            >
              📞 Consultation Standard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}