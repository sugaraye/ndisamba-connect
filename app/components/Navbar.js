export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h2 className="text-2xl font-bold">NdiSamba Connect</h2>
      <div className="space-x-4">
        <a href="/" className="hover:underline">
          Accueil
        </a>
        <a
          href="https://elearningsamba.com/index.php/filieres-de-formation/"
          className="hover:underline"
        >
          Formations
        </a>
        <a
          href="https://elearningsamba.com/index.php/certifications-internationales/"
          className="hover:underline"
        >
          Certifications
        </a>
        <a
          href="https://ih3mdhp6.forms.app/formulaire-dinscription"
          className="hover:underline"
        >
          Inscription
        </a>
      </div>
    </nav>
  );
}
