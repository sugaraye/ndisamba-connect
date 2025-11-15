export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-10">
        <div>
          <h3 className="font-bold text-lg">Groupe Ndi Samba Formation</h3>
          <p className="text-sm mt-2">
            Site officiel :{" "}
            <a href="https://groupendisambaformation.com" className="underline">
              groupendisambaformation.com
            </a>
          </p>
          <p>Email : infos@groupendisambaformation.com</p>
          <p>
            WhatsApp :{" "}
            <a href="https://wa.me/237689184339" className="underline">
              +237 689 18 43 39
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Liens rapides</h4>
          <ul className="space-y-2">
            <li><a href="/actualites" className="hover:underline">Actualités</a></li>
            <li><a href="/entites/iujs" className="hover:underline">Entités</a></li>
            <li><a href="https://elearningsamba.com" className="hover:underline">E-learning</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contacts</h4>
          <p>Douala — Yaoundé — Kribi — Saint Etienne — Paris — Logroño</p>
          <p>Tél : +237 689 18 43 39</p>
        </div>
      </div>
      
      <div className="bg-blue-950 text-center py-3 text-sm">
        © {new Date().getFullYear()} Groupe Ndi Samba — Tous droits réservés
      </div>
    </footer>
  );
}
