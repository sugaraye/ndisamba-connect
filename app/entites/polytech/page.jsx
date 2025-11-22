// app/entites/polytech/page.jsx
'use client';

import Link from 'next/link';

export default function PolytechPage() {
  const entity = {
    id: 2,
    name: "Ndi Samba Polytech",
    slogan: "L'excellence technologique au service de l'industrie",
    description: "École polytechnique d'excellence, sous la tutelle de l'Ecole Nationale Polytechnique de Douala, formant des techniciens supérieurs et ingénieurs dans les domaines industriels, technologiques et du génie civil. Partenariats industriels forts pour une insertion professionnelle garantie.",
    site: "https://ndisambapolytech.com",
    image: "/assets/images/polytech-lab.jpg",
    logo: "/assets/logos/logo-polytech.png",
    category: "Enseignement supérieur polytechnique",
    locations: [
      {
        name: "Campus Principal Douala",
        address: "Face Chapelle EEC, Beedi-Marché, Douala, Cameroun",
        type: "Siège"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "contact@universitendisamba.com",
    whatsapp: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "2019",
    director: "Raymond Samba Ndi",
    accreditation: "Ministère de l'Enseignement Supérieur - Arrêté N° 078/19/MINESUP",
    recognition: "École technique reconnue par l'État",
    
    // Programmes académiques
    programs: {
      "BTS - Brevet de Technicien Supérieur": [
        {
          name: "BTS en Maintenance Industrielle",
          duration: "2 ans",
          specialites: ["Maintenance des systèmes", "Automatisme", "Électromécanique"]
        },
        {
          name: "BTS en Informatique et Réseaux",
          duration: "2 ans", 
          specialites: ["Développement", "Réseaux informatiques", "Cybersécurité"]
        },
        {
          name: "BTS en Génie Civil",
          duration: "2 ans",
          specialites: ["BTP", "Topographie", "Dessin technique"]
        },
        {
          name: "BTS en Électronique",
          duration: "2 ans",
          specialites: ["Électronique analogique", "Électronique numérique", "Télécoms"]
        }
      ],
      "Licences Professionnelles": [
        {
          name: "Licence en Génie Industriel",
          duration: "3 ans",
          specialites: ["Production industrielle", "Qualité", "Logistique"]
        },
        {
          name: "Licence en Informatique Industrielle",
          duration: "3 ans",
          specialites: ["Automatisme", "Robotique", "Informatique embarquée"]
        },
        {
          name: "Licence en Génie Civil et BTP",
          duration: "3 ans",
          specialites: ["Bâtiment", "Travaux publics", "Gestion de chantier"]
        }
      ],
      "Formations Spécialisées": [
        {
          name: "Formations Courtes Professionnelles",
          duration: "3-6 mois",
          specialites: ["Soudage", "Électricité bâtiment", "Plomberie"]
        },
        {
          name: "Certifications Techniques", 
          duration: "1-3 mois",
          specialites: ["Autocad", "Programmation PLC", "Réseaux"]
        },
        {
          name: "Alternance en Entreprise",
          duration: "2-3 ans",
          specialites: ["Contrats d'apprentissage", "Stages industriels"]
        }
      ]
    },

    // Installations
    facilities: [
      {
        category: "Ateliers Techniques",
        items: [
          "Atelier de maintenance industrielle",
          "Laboratoire d'électronique avancée",
          "Atelier de génie civil et topographie",
          "Salle de dessin technique CAD/CAM",
          "Laboratoire de robotique"
        ]
      },
      {
        category: "Équipements Technologiques", 
        items: [
          "Machines-outils conventionnelles et CNC",
          "Équipements de soudage professionnels",
          "Stations de travail informatiques haut de gamme",
          "Équipements de mesure et contrôle",
          "Logiciels professionnels (SolidWorks, AutoCAD, MATLAB)"
        ]
      },
      {
        category: "Services aux Étudiants",
        items: [
          "Centre de ressources techniques",
          "Service placement en entreprise",
          "Laboratoires de langues",
          "Espace projet étudiant",
          "Résidences techniques"
        ]
      }
    ],

    // Partenariats
    partnerships: {
      "Partenaires Industriels": [
        "Entreprises du secteur industriel camerounais",
        "Sociétés de BTP et génie civil",
        "Entreprises de télécommunications",
        "Sociétés d'ingénierie"
      ],
      "Partenaires Académiques": [
        "Universités techniques européennes",
        "Écoles d'ingénieurs partenaires",
        "Programmes de mobilité technique"
      ],
      "Partenaires Institutionnels": [
        "Ministère de l'Emploi et de la Formation Professionnelle",
        "Chambre de Commerce et d'Industrie",
        "Ordre des Ingénieurs du Cameroun"
      ]
    },

    // Admission
    admission: {
      "Conditions d'Admission": [
        "Baccalauréat C, D, E, F ou technique pour le BTS",
        "BTS ou équivalent pour la Licence",
        "Test technique et entretien de motivation",
        "Dossier académique complet"
      ],
      "Procédure d'Inscription": [
        "Dépôt de dossier en ligne",
        "Test d'aptitude technique",
        "Entretien avec le directeur technique",
        "Inscription définitive"
      ],
      "Qualités Requises": [
        "Sens technique et manuel",
        "Esprit d'analyse et de synthèse",
        "Capacité à travailler en équipe",
        "Intérêt pour l'innovation technologique"
      ]
    },

    // Frais et Financement
    fees: {
      "Frais de Formation": [
        "BTS: 400,000 - 550,000 FCFA/an",
        "Licence: 500,000 - 650,000 FCFA/an",
        "Frais d'atelier: 50,000 FCFA/an",
        "Frais d'inscription: 25,000 FCFA"
      ],
      "Options de Paiement": [
        "Paiement comptant (réduction 5%)",
        "Échelonnement sur 3 tranches",
        "Paiement mensuel possible"
      ],
      "Aides et Financements": [
        "Bourses techniques sur dossier",
        "Conventions entreprises",
        "Financement par apprentissage"
      ]
    },

    // Chiffres clés
    stats: {
      "Effectifs": "800+ étudiants techniciens",
      "Taux d'Insertion": "92% dans les 3 mois",
      "Partenaires Entreprises": "45+ entreprises",
      "Enseignants": "35+ ingénieurs et techniciens",
      "Ateliers": "8 ateliers spécialisés"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/entites" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
            ← Retour à toutes les entités
          </Link>
        </nav>

        {/* En-tête Hero */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl text-white p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <div className="flex-shrink-0">
              <div className="w-21 h-21 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-2">
                <img 
                  src={entity.logo} 
                  alt={`Logo ${entity.name}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback si le logo n'existe pas
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center text-2xl">
                  ⚙️
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {entity.name}
              </h1>
              <p className="text-xl text-gray-100 mb-2">{entity.slogan}</p>
              <p className="text-gray-100 opacity-90 mb-6">
                {entity.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={entity.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  🌐 Site Officiel
                </a>
                <a 
                  href={`https://wa.me/${entity.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="https://ih3mdhp6.forms.app/formulaire-dinscription"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  📝 S'inscrire
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Contact Rapide</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Chiffres Clés</h3>
              <div className="space-y-3">
                {Object.entries(entity.stats).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="font-semibold text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accréditation */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">✅ Accréditation</h3>
              <p className="text-green-700 text-sm">{entity.accreditation}</p>
              <p className="text-green-600 text-xs mt-2">{entity.recognition}</p>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Programmes Techniques */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Programmes Techniques</h2>
              <div className="space-y-8">
                {Object.entries(entity.programs).map(([category, programs]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {programs.map((program, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2">{program.name}</h4>
                          <p className="text-sm text-blue-600 mb-3">Durée: {program.duration}</p>
                          <div className="space-y-1">
                            {program.specialites.map((spec, specIndex) => (
                              <div key={specIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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

            {/* Ateliers & Équipements */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏭 Ateliers & Équipements</h2>
              <div className="space-y-6">
                {entity.facilities.map((facilityCategory, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {facilityCategory.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {facilityCategory.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center p-2 bg-blue-50 rounded-lg">
                          <span className="text-blue-500 mr-3">⚙️</span>
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
              {/* Admission */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Admission Technique</h2>
                <div className="space-y-4">
                  {Object.entries(entity.admission).map(([section, items]) => (
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

              {/* Frais & Financement */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">💰 Frais & Financement</h2>
                <div className="space-y-4">
                  {Object.entries(entity.fees).map(([section, items]) => (
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
            </div>

            {/* Partenariats Industriels */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏭 Partenariats Industriels</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(entity.partnerships).map(([type, partners]) => (
                  <div key={type} className="text-center">
                    <h3 className="font-semibold text-gray-800 mb-4">{type}</h3>
                    <div className="space-y-2">
                      {partners.map((partner, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-700">{partner}</p>
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
          <h2 className="text-2xl font-bold mb-4">Prêt à devenir un expert technique ?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Rejoignez la nouvelle génération de techniciens et ingénieurs formés par Ndi Samba Polytech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ih3mdhp6.forms.app/formulaire-dinscription"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📝 Postuler Maintenant
            </a>
            <a 
              href={`https://wa.me/${entity.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              💬 Visite Technique
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}