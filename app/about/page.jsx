import Link from 'next/link';
import PersonImage from '../../components/PersonImage';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            À propos du <span className="text-orange-600">Groupe Ndi Samba Formation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leader dans l'éducation et les services au Cameroun et au-delà, 
            nous perpétuons l'héritage visionnaire de Joseph Ndi Samba depuis 2016.
          </p>
        </div>

        {/* Section Notre Histoire */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Fondé par <strong>Joseph Ndi Samba en 1968</strong>, le Groupe Ndi Samba Formation 
                a débuté comme une vision ambitieuse : créer un écosystème éducatif complet 
                capable de répondre aux défis du développement en Afrique.
              </p>
              
              {/* Photo Joseph Ndi Samba */}
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg my-6">
                <PersonImage
                  src="/images/joseph-ndi-samba.jpg"
                  alt="Joseph Ndi Samba - Fondateur"
                  size="small"
                />
                <div>
                  <h4 className="font-bold text-blue-900">Joseph Ndi Samba</h4>
                  <p className="text-sm text-gray-600">Fondateur Visionnaire (1968-2016)</p>
                </div>
              </div>

              <p>
                Depuis le décès de notre fondateur en 2016, le groupe est dirigé avec succès 
                par <strong>Monsieur Raymond Samba Ndi</strong>, qui a su poursuivre la vision 
                paternelle tout en modernisant et étendant notre présence.
              </p>
              <p>
                Sous sa direction, nous avons lancé plusieurs nouvelles entités stratégiques 
                et consolidé notre position de leader dans l'éducation et les services.
              </p>
              <p>
                Notre croissance repose sur une philosophie simple : 
                <em> "L'excellence n'est pas un acte, mais une habitude"</em>. 
                Cette conviction nous guide dans chaque projet que nous entreprenons.
              </p>
            </div>
          </div>
          <div className="bg-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Chiffres Clés</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span>Années d'expérience</span>
                <span className="font-bold text-blue-800">57+</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span>Entités spécialisées</span>
                <span className="font-bold text-blue-800">12</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span>Pays d'implantation</span>
                <span className="font-bold text-blue-800">4</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span>Étudiants, élèves et techniciens formés</span>
                <span className="font-bold text-blue-800">300.000+</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span>Partenaires industriels</span>
                <span className="font-bold text-blue-800">50+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Organigramme */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Notre Structure Organisationnelle</h2>
          
          {/* Photo d'illustration - Siège social */}
          <div className="mb-8 bg-white rounded-2xl p-6 border border-blue-200">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Photo du siège social du groupe</span>
            </div>
            <p className="text-center text-sm text-gray-600">Siège social du Groupe Ndi Samba Formation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Organigramme visuel */}
            <div className="bg-white rounded-2xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Organigramme du Groupe</h3>
              
              {/* Structure hiérarchique */}
              <div className="space-y-6">
                {/* PDG */}
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-lg p-4 mx-auto max-w-xs">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 text-xs">Photo PDG</span>
                    </div>
                    <h4 className="font-bold">Président Directeur Général</h4>
                    <p className="text-sm opacity-90">Raymond Samba Ndi</p>
                  </div>
                </div>

                {/* Ligne de connexion */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-blue-300"></div>
                </div>

                {/* Niveau 2 */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-100 rounded-lg p-3 text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 text-xs">Photo</span>
                    </div>
                    <h5 className="font-semibold text-blue-900 text-sm">Inspection Générale</h5>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3 text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 text-xs">Photo</span>
                    </div>
                    <h5 className="font-semibold text-blue-900 text-sm">Secrétariat Général</h5>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3 text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 text-xs">Photo</span>
                    </div>
                    <h5 className="font-semibold text-blue-900 text-sm">Cellule Coordination Internationale</h5>
                  </div>
                </div>

                {/* Ligne de connexion */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-blue-300"></div>
                </div>

                {/* Niveau 3 - Directions Fonctionnelles */}
                <div>
                  <h6 className="text-center font-semibold text-gray-600 mb-3">Directions Fonctionnelles</h6>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { name: 'Ressources Humaines', img: true },
                      { name: 'Administrative & Financière', img: true },
                      { name: 'Juridique', img: true },
                      { name: 'Communication', img: true },
                      { name: 'Systèmes d\'Information', img: true },
                      { name: 'Qualité & Innovation', img: true }
                    ].map((dept, index) => (
                      <div key={index} className="bg-green-50 rounded p-2 text-center">
                        {dept.img && (
                          <div className="w-8 h-8 bg-green-200 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-green-600 text-xs">Photo</span>
                          </div>
                        )}
                        <span className="text-xs font-medium text-green-800">{dept.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ligne de connexion */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-blue-300"></div>
                </div>

                {/* Niveau 4 - Pôles Opérationnels */}
                <div>
                  <h6 className="text-center font-semibold text-gray-600 mb-3">Pôles Opérationnels</h6>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { name: 'Éducation & Formation', color: 'purple', img: true },
                      { name: 'Juridique & Conseil', color: 'orange', img: true },
                      { name: 'Santé & Recherche', color: 'red', img: true },
                      { name: 'Logistique & Transit', color: 'blue', img: true },
                      { name: 'Hôtellerie & Services', color: 'green', img: true }
                    ].map((pole, index) => (
                      <div key={index} className={`bg-${pole.color}-50 rounded p-2 text-center`}>
                        {pole.img && (
                          <div className={`w-8 h-8 bg-${pole.color}-200 rounded-full mx-auto mb-1 flex items-center justify-center`}>
                            <span className={`text-${pole.color}-600 text-xs`}>Photo</span>
                          </div>
                        )}
                        <span className={`text-xs font-medium text-${pole.color}-800`}>{pole.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description détaillée avec photos */}
            <div className="space-y-6">
              {/* Photo équipe de direction */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">👥 Équipe de Direction</h3>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-400">Photo de l'équipe de direction réunie</span>
                </div>
                <p className="text-sm text-gray-600 text-center">L'équipe dirigeante du groupe lors d'une réunion stratégique</p>
              </div>

              {/* Photo des directeurs fonctionnels */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🏢 Directions Fonctionnelles</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">Directeur RH</span>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">Directeur DAF</span>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">Directeur Juridique</span>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">Directeur Communication</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Nos directeurs fonctionnels garantissent le bon fonctionnement transversal du groupe</p>
              </div>

              {/* Photo des pôles opérationnels */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🌍 Coordination Internationale</h3>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-400">Photo des implantations internationales</span>
                </div>
                <p className="text-sm text-gray-700">
                  Supervision des entités à l'étranger : NS Logistique Transit France, Afam Services, 
                  Hotel la Tchaux & Resorts, Campus Latina.
                </p>
              </div>
            </div>
          </div>

          {/* Galerie des pôles opérationnels */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Galerie des Pôles Opérationnels</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { name: 'Éducation', emoji: '🎓', img: true },
                { name: 'Juridique', emoji: '⚖️', img: true },
                { name: 'Santé', emoji: '🏥', img: true },
                { name: 'Logistique', emoji: '🚚', img: true },
                { name: 'Hôtellerie', emoji: '🏨', img: true }
              ].map((pole, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-4 border border-blue-200 aspect-square flex flex-col items-center justify-center">
                    <div className="text-2xl mb-2">{pole.emoji}</div>
                    {pole.img && (
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">Photo</span>
                      </div>
                    )}
                    <span className="font-medium text-blue-900 text-sm">{pole.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comités transversaux avec photos */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-orange-800 mb-3">🔄 Comité RSE</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Responsabilité Sociétale des Entreprises : développement durable, inclusion, impact social.
                  </p>
                </div>
                <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 text-xs text-center">Photo comité RSE</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-purple-800 mb-3">💡 Comité Digital & Innovation</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Transformation numérique, veille technologique, innovation des processus.
                  </p>
                </div>
                <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 text-xs text-center">Photo comité Digital</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Direction Actuelle */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Notre Direction</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Raymond Samba Ndi */}
            <div className="bg-white rounded-2xl p-8 border border-blue-200">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <PersonImage
                  src="/images/raymond-samba-ndi.jpg"
                  alt="Raymond Samba Ndi - PDG"
                  size="medium"
                />
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Raymond Samba Ndi</h3>
                  <p className="text-orange-600 font-semibold mb-3">Président Directeur Général du Groupe et PCA de la Fondation J. Ndi Samba pour l'éducation</p>
                  <p className="text-gray-700 mb-4">
                    À la tête du groupe depuis 2016, Raymond Samba Ndi a impulsé 
                    une dynamique de croissance et d'innovation remarquable.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Réalisations majeures :</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lancement de Ndi Samba Polytech (2019)</li>
                      <li>• Ouverture de Campus Latina Espagne (2019)</li>
                      <li>• Création de NS Logistique Transit France (2025)</li>
                      <li>• Développement de Samba Automobiles (2016)</li>
                      <li>• Ratifications de plusieurs partenariats nationaux et internationaux</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Marlyse Peyou Ndi */}
            <div className="bg-white rounded-2xl p-8 border border-blue-200">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <PersonImage
                  src="/images/marlyse-peyou-ndi.jpg"
                  alt="Dr. Marlyse Peyou Ndi - Directrice RIRCO"
                  size="medium"
                />
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Dr. Marlyse Peyou Ndi</h3>
                  <p className="text-orange-600 font-semibold mb-3">Directrice du Laboratoire de Recherche et Centre Médical RIRCO</p>
                  <p className="text-gray-700 mb-4">
                    Chercheuse et inventrice visionnaire, elle dirige le centre médical et laboratoire de recherche scientifique 
                    avec une approche innovante de la médecine naturelle.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Innovations médicales :</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Inventrice du <strong>Ngul Be Tara</strong></li>
                      <li>• Développement de produits médicamenteux naturels</li>
                      <li>• Recherche sur les plantes médicinales africaines</li>
                      <li>• Médecine intégrative et préventive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo de l'équipe de direction élargie */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Notre Équipe de Direction Élargie</h3>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-gray-400 text-lg">Photo de l'équipe de direction complète</span>
            </div>
            <p className="text-center text-gray-600">
              Une équipe pluridisciplinaire engagée dans l'excellence et l'innovation
            </p>
          </div>
        </div>

        {/* Le reste du code reste inchangé */}
        {/* Section Notre Mission */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Notre Mission</h3>
              <p className="text-blue-100">
                Perpétuer l'héritage de Joseph Ndi Samba en offrant une éducation 
                de qualité et des services innovants qui transforment les individus 
                et contribuent au développement économique de l'Afrique.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-4">Notre Vision</h3>
              <p className="text-blue-100">
                Devenir le leader africain de l'éducation intégrée et des 
                services multisectoriels, reconnu pour son excellence et 
                son impact social, en honorant la vision de notre fondateur.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-4">Nos Valeurs</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Excellence académique</li>
                <li>• Innovation permanente</li>
                <li>• Intégrité professionnelle</li>
                <li>• Service communautaire</li>
                <li>• Leadership éthique</li>
                <li>• Transmission du savoir</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Rejoignez notre aventure éducative
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous soyez étudiant, parent, partenaire ou investisseur, 
            découvrez comment vous pouvez contribuer à notre mission et 
            participer à cet héritage en mouvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
            >
              Nous Contacter
            </Link>
            <Link 
              href="/entites"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-center"
            >
              Découvrir nos Entités
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}