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
					  <li>• Ratification de plusieurs partenariats nationaux et internationaux</li>
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
        </div>

        {/* Le reste de votre code reste inchangé */}
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

        {/* Section Héritage et Innovation */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">🏛️ Héritage Préservé</h3>
            <p className="text-gray-700 mb-4">
              Nous honorons la mémoire de <strong>Joseph Ndi Samba</strong> en maintenant 
              les standards d'excellence qu'il a établis et en perpétuant sa vision 
              éducative humaniste.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Respect des valeurs fondatrices</li>
              <li>• Maintien de la qualité académique</li>
              <li>• Engagement communautaire renforcé</li>
              <li>• Transmission intergénérationnelle</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">🚀 Innovation Continue</h3>
            <p className="text-gray-700 mb-4">
              Sous la direction de <strong>Raymond Samba Ndi</strong>, le groupe 
              s'engage dans une dynamique d'innovation et d'expansion internationale.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Nouvelles entités stratégiques</li>
              <li>• Expansion internationale</li>
              <li>• Innovation médicale avec RIRCO</li>
              <li>• Digitalisation des services</li>
            </ul>
          </div>
        </div>

        {/* Section Impact */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-100">Entités spécialisées</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-100">Pays d'implantation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">300K+</div>
              <div className="text-blue-100">Étudiants, élèves et techniciens formés</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Employés dévoués</div>
            </div>
          </div>
        </div>

        {/* Section Reconnaissances */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Reconnaissances</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-blue-900 mb-2">Prix d'Excellence</h3>
              <p className="text-gray-600 text-sm">
                Lauréat du Prix National d'Excellence Éducative 2022 reçu par Monsieur Raymond Samba Ndi
              </p>
            </div>
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-blue-900 mb-2">Accréditations</h3>
              <p className="text-gray-600 text-sm">
                Programmes accrédités par le Ministère de l'Enseignement Supérieur
              </p>
            </div>
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-blue-900 mb-2">Partenariats</h3>
              <p className="text-gray-600 text-sm">
                Réseau de 50+ partenaires industriels et académiques internationaux
              </p>
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