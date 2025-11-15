export const metadata = {
  title: "À propos du Groupe Ndi Samba",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">À propos du Groupe Ndi Samba</h1>

      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        Le <strong>Groupe Ndi Samba Formation</strong> est un écosystème pluridisciplinaire 
        regroupant des établissements d’enseignement supérieur, des centres de formation, 
        des services juridiques, logistiques, hôteliers, médicaux et des plateformes internationales.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-3">Notre Vision</h2>
      <p className="text-gray-700 leading-relaxed">
        Former des leaders compétents en Afrique et à l’international, capables d’innover, 
        entreprendre et créer de la valeur dans leurs communautés.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-3">Notre Mission</h2>
      <p className="text-gray-700 leading-relaxed">
        Offrir des formations de qualité, accessibles, certifiées et alignées sur les standards 
        internationaux, tout en renforçant l’employabilité et l’entrepreneuriat.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-3">Présence Internationale</h2>
      <p className="text-gray-700 leading-relaxed">
        Le Groupe exerce au <strong>Cameroun</strong>, en <strong>France</strong> et en 
        <strong> Espagne</strong> via plusieurs établissements, centres de formation 
        et plateformes pédagogiques.
      </p>

      <div className="bg-blue-50 p-5 rounded-lg mt-10 shadow-sm">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Contacts officiels</h3>
        <p>Email : <strong>infos@groupendisambaformation.com</strong></p>
        <p>Téléphone WhatsApp : <strong>+237 689 18 43 39</strong></p>
        <p>Site officiel : <a href="https://groupendisambaformation.com" className="text-blue-700 underline">groupendisambaformation.com</a></p>
      </div>
    </div>
  );
}
