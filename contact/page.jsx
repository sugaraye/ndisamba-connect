export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact & Inscriptions</h1>

      <p className="text-gray-700 text-lg mb-4">
        Nous sommes disponibles pour répondre à toutes vos questions.
      </p>

      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Formulaire d'inscription</h2>

        <iframe
          src="https://ih3mdhp6.forms.app/formulaire-dinscription"
          className="w-full h-[900px] rounded shadow"
          title="Formulaire d'inscription"
        />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Contacts directs</h2>
        <p>Email : <strong>infos@groupendisambaformation.com</strong></p>
        <p>WhatsApp : <strong>+237 689 18 43 39</strong></p>

        <div className="mt-6">
          <a
            href="https://t.me/SambaLearnBot"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow"
          >
            Accéder au bot Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
