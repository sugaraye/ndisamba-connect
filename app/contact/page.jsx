// app/contact/page.jsx
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-700 transition-colors">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour répondre à toutes vos questions 
            et vous accompagner dans vos projets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Nos Coordonnées</h2>
              
              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:infos@groupendisambaformation.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    infos@groupendisambaformation.com
                  </a>
                </div>
              </div>

              {/* Téléphones */}
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-green-600 text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Téléphones</h3>
                  <div className="space-y-1">
                    <a href="tel:+237689184339" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      +237 689 18 43 39
                    </a>
                    <a href="tel:+237670305314" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      +237 670 30 53 14
                    </a>
                    <a href="tel:+237678134326" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      +237 678 13 43 26
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-green-600 text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Chaîne WhatsApp</h3>
                  <a 
                    href="https://whatsapp.com/channel/0029VbB3y355kg7AC372Hb2N" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                  >
                    Rejoindre notre chaîne
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <span className="text-purple-600 text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Horaires d'ouverture</h3>
                  <p className="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                  <p className="text-gray-600">Sam: 8h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire d'inscription */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 h-full">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Formulaire d'Inscription</h2>
              <p className="text-gray-600 mb-6">
                Prêt à nous rejoindre ? Remplissez notre formulaire d'inscription en ligne 
                pour démarrer votre parcours avec le Groupe Ndi Samba Formation.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Formulaire d'Inscription en Ligne
                </h3>
                <p className="text-gray-600 mb-6">
                  Accédez à notre plateforme d'inscription sécurisée
                </p>
                <a 
                  href="https://ih3mdhp6.forms.app/formulaire-dinscription" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg"
                >
                  S'inscrire Maintenant
                </a>
              </div>

              {/* Informations supplémentaires */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">📋 Documents requis</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Photocopie des diplômes</li>
                    <li>• Extrait d'acte de naissance</li>
                    <li>• Photos d'identité</li>
                    <li>• Relevés de notes</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">⚡ Processus rapide</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Formulaire en ligne</li>
                    <li>• Validation sous 48h</li>
                    <li>• Paiement sécurisé</li>
                    <li>• Confirmation immédiate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section entités */}
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Vous ne savez pas par où commencer ?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Découvrez nos 12 entités spécialisées et trouvez celle qui correspond le mieux à vos aspirations.
          </p>
          <Link 
            href="/entites"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Explorer nos Entités
          </Link>
        </div>

        {/* FAQ rapide */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-blue-800 mb-2">Quels sont les délais de réponse ?</h3>
              <p className="text-gray-600 text-sm">
                Nous répondons à tous les emails sous 24 heures et aux appels téléphoniques pendant nos heures d'ouverture.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-blue-800 mb-2">Puis-je visiter les campus ?</h3>
              <p className="text-gray-600 text-sm">
                Oui, nous organisons des visites sur rendez-vous. Contactez-nous pour planifier votre visite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}