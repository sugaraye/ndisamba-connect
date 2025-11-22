// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/assets/logos/logo-groupe.webp"
                  alt="Groupe Ndi Samba Formation"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">NdiSamba Connect</h3>
                <p className="text-blue-200 text-sm">Groupe Ndi Samba Formation</p>
              </div>
            </div>
            <p className="text-blue-200 text-lg leading-relaxed">
              Leader dans l'éducation et les services au Cameroun et au-delà, 
              nous perpétuons l'héritage visionnaire de <strong>Joseph Ndi Samba</strong> depuis 2016.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-orange-400">Navigation</h3>
            <ul className="space-y-4 text-lg text-blue-200">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2">
                  <span>🏠</span>
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2">
                  <span>🏢</span>
                  <span>À propos</span>
                </Link>
              </li>
              <li>
                <Link href="/entites" className="hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2">
                  <span>🎓</span>
                  <span>Nos entités</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2">
                  <span>📞</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-orange-400">Contact</h3>
            <ul className="space-y-4 text-lg text-blue-200">
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <span>+237 689 18 43 39</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">✉️</span>
                <span>infos@ngroupendisambaformation.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">🏢</span>
                <span>Mbalmayo, Cameroun</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">🌍</span>
                <span>4 pays d'implantation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logos des entités */}
        <div className="mt-12 pt-12 border-t border-blue-800">
          <h3 className="text-center text-xl font-bold text-orange-400 mb-8">
            Nos Entités Spécialisées
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Logos des entités */}
            <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/assets/logos/logo-polytech.webp"
                alt="Ndi Samba Polytech"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/assets/logos/logo-secondaire.webp"
                alt="Institut Samba Secondaire"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/assets/logos/logo-rirco.webp"
                alt="Laboratoire de recherche RIRCO"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/assets/logos/logo-gbsf.webp"
                alt="GBSF & Avocats associés"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/assets/logos/logo-logistique.webp"
                alt="NS Logistique Transit France"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/assets/logos/logo-hotellerie.webp"
                alt="Hotel la Tchaux & Resort"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-blue-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">57+</div>
            <div className="text-blue-200 text-sm">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">12</div>
            <div className="text-blue-200 text-sm">Entités spécialisées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">300K+</div>
            <div className="text-blue-200 text-sm">Personnes formées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">4</div>
            <div className="text-blue-200 text-sm">Pays</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-300 text-lg">
            © {new Date().getFullYear()} Groupe Ndi Samba Formation. Tous droits réservés.
          </p>
          <p className="text-blue-400 text-sm mt-2">
            Perpétuant l'héritage de <strong>Joseph Ndi Samba</strong> depuis 2016
          </p>
        </div>
      </div>
    </footer>
  );
}