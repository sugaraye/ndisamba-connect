// app/entites/iujs/page.jsx
'use client';

import Link from 'next/link';

export default function IUJSPage() {
  const entity = {
    id: 1,
    name: "Institut Universitaire Joseph Ndi Samba",
    slogan: "L'excellence académique au service du développement",
    description: "Établissement d'enseignement supérieur de référence offrant des formations professionnelles de qualité dans les domaines du management, de l'informatique et du génie civil. Notre pédagogie innovante combine théorie et pratique pour former les leaders de demain.",
    site: "https://universitedisamba.com",
    image: "/assets/images/iujs-campus.jpg",
    logo: "/assets/logos/logo-iujs.png",
    category: "Enseignement Supérieur",
    locations: [
      {
        name: "Campus Principal Yaoundé",
        address: "Mvan-Tropicana, Yaoundé, Cameroun",
        type: "Siège"
      },
      {
        name: "Campus Douala",
        address: "Face Chapelle EEC, Beedi-Marché, Douala, Cameroun",
        type: "Annexe"
      }
    ],
    phone: "+237 689 18 43 39",
    email: "contact@universitedisamba.com",
    whatsapp: "+237 689 18 43 39",
    
    // Informations détaillées
    founded: "2005",
    director: "Dr. Raymond Samba Ndi",
    accreditation: "Ministère de l'Enseignement Supérieur - Arrêté N° 045/05/MINESUP",
    recognition: "Reconnu par l'État Camerounais",
    
    // Programmes académiques
    programs: {
      "Licences Professionnelles": [
        {
          name: "Licence en Management des Organisations",
          duration: "3 ans",
          specialites: ["Gestion d'Entreprise", "Marketing", "Finance"]
        },
        {
          name: "Licence en Informatique",
          duration: "3 ans", 
          specialites: ["Développement Web", "Réseaux & Télécoms", "Base de Données"]
        },
        {
          name: "Licence en Génie Civil",
          duration: "3 ans",
          specialites: ["Bâtiment", "Travaux Publics", "Topographie"]
        },
        {
          name: "Licence en Commerce International",
          duration: "3 ans",
          specialites: ["Logistique", "Douane", "Marketing International"]
        }
      ],
      "Masters Professionnels": [
        {
          name: "Master en Management (MBA)",
          duration: "2 ans",
          specialites: ["Stratégie d'Entreprise", "Management des RH", "Contrôle de Gestion"]
        },
        {
          name: "Master en Informatique",
          duration: "2 ans",
          specialites: ["Ingénierie des Systèmes", "Cybersécurité", "Intelligence Artificielle"]
        },
        {
          name: "Master en Génie Civil",
          duration: "2 ans",
          specialites: ["Gestion de Projets", "Structures & Bâtiments", "Routes & Ouvrages d'Art"]
        }
      ],
      "Formations Spécialisées": [
        {
          name: "Formations Continues",
          duration: "3-6 mois",
          specialites: ["Comptabilité", "Marketing Digital", "Gestion de Projets"]
        },
        {
          name: "Certifications Professionnelles",
          duration: "1-3 mois", 
          specialites: ["Bureautique", "Langues", "Soft Skills"]
        },
        {
          name: "Formation en Alternance",
          duration: "Flexible",
          specialites: ["Contrats de professionnalisation", "Stages rémunérés"]
        }
      ]
    },

    // Installations
    facilities: [
      {
        category: "Infrastructures Académiques",
        items: [
          "Salles de cours climatisées et équipées",
          "Bibliothèque numérique avec 10,000+ ouvrages",
          "Laboratoires informatiques haut débit",
          "Salles de TP spécialisées",
          "Amphithéâtres modernes"
        ]
      },
      {
        category: "Équipements Technologiques", 
        items: [
          "Parc informatique dernière génération",
          "Accès Internet haut débit",
          "Plateforme e-learning Moodle",
          "Logiciels professionnels (AutoCAD, SPSS, Suite Adobe)",
          "Réseau Wi-Fi campus entier"
        ]
      },
      {
        category: "Services Étudiants",
        items: [
          "Résidences universitaires",
          "Restauration sur place",
          "Centre de santé universitaire",
          "Service d'orientation professionnelle",
          "Club étudiant et associations"
        ]
      }
    ],

    // Partenariats
    partnerships: {
      "Partenaires Académiques": [
        "Universités européennes (France, Belgique, Espagne)",
        "Programmes d'échanges internationaux",
        "Double diplômations possibles"
      ],
      "Partenaires Industriels": [
        "Entreprises locales et multinationales",
        "Conventions de stages garanties",
        "Recrutement direct des diplômés"
      ],
      "Partenaires Institutionnels": [
        "Ministère de l'Enseignement Supérieur",
        "Chambre de Commerce et d'Industrie",
        "Associations professionnelles"
      ]
    },

    // Admission
    admission: {
      "Conditions d'Admission": [
        "Baccalauréat ou équivalent pour la Licence",
        "Licence ou équivalent pour le Master",
        "Dossier académique complet",
        "Entretien de motivation"
      ],
      "Procédure d'Inscription": [
        "Dépôt de dossier en ligne ou sur place",
        "Étude du dossier par la commission",
        "Entretien de sélection",
        "Inscription définitive et paiement"
      ],
      "Documents Requis": [
        "Copie certifiée du Bac ou diplôme",
        "Relevés de notes des années antérieures",
        "Extrait d'acte de naissance",
        "4 photos d'identité",
        "Certificat médical",
        "Lettre de motivation"
      ]
    },

    // Frais et Financement
    fees: {
      "Frais de Scolarité": [
        "Licence: 450,000 - 600,000 FCFA/an",
        "Master: 550,000 - 700,000 FCFA/an",
        "Frais d'inscription: 50,000 FCFA (non remboursables)"
      ],
      "Options de Paiement": [
        "Paiement comptant (5% de réduction)",
        "Paiement échelonné (3 tranches)",
        "Paiement mensuel possible"
      ],
      "Bourses et Aides": [
        "Bourses d'excellence sur dossier",
        "Aides aux étudiants méritants",
        "Conventions entreprises"
      ]
    },

    // Chiffres clés
    stats: {
      "Effectifs": "1,200+ étudiants",
      "Taux de Réussite": "85% en moyenne",
      "Insertion Professionnelle": "78% dans les 6 mois",
      "Enseignants": "50+ professeurs et professionnels",
      "Promotions": "15+ promotions diplômées"
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
                🎓
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
                  <p className="font-semibold text-gray-700">Campuses</p>
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
                    <p className="font-semibold text-blue-700">{value}</p>
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
            {/* Programmes Académiques */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Programmes Académiques</h2>
              <div className="space-y-8">
                {Object.entries(entity.programs).map(([category, programs]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {programs.map((program, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4">
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

            {/* Installation & Équipements */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏫 Campus & Équipements</h2>
              <div className="space-y-6">
                {entity.facilities.map((facilityCategory, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {facilityCategory.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {facilityCategory.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center p-2 bg-gray-50 rounded-lg">
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
              {/* Admission */}
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Admission</h2>
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

            {/* Partenariats */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🤝 Partenariats Stratégiques</h2>
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
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à rejoindre l'excellence ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Rejoignez les milliers d'étudiants qui ont choisi l'IUJS pour leur réussite professionnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ih3mdhp6.forms.app/formulaire-dinscription"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📝 Postuler Maintenant
            </a>
            <a 
              href={`https://wa.me/${entity.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              💬 Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}