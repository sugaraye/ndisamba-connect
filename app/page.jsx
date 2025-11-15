import EntityCard from "@/app/components/EntityCard";
import { entities } from "@/lib/entities";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="mx-auto w-40 h-auto mb-4 bg-white p-2 rounded shadow"
        />
        <h1 className="text-4xl font-bold text-blue-900">
          Groupe Ndi Samba Formation
        </h1>
        <p className="text-gray-700 mt-2">
          Portail officiel reliant éducation, logistique, santé, hôtellerie et
          services internationaux.
        </p>
      </div>

      {/* Recherche */}
      <input
        type="search"
        placeholder="Rechercher une entité…"
        className="w-full p-3 border rounded mb-8"
        onChange={(e) => {
          const q = e.target.value.toLowerCase();
          document.querySelectorAll(".entity-card").forEach((c) => {
            const t = c.dataset.name.toLowerCase();
            c.style.display = t.includes(q) ? "block" : "none";
          });
        }}
      />

      {/* Cartes des entités */}
      <div className="grid md:grid-cols-3 gap-6">
        {entities.map((ent) => (
          <EntityCard key={ent.slug} entity={ent} />
        ))}
      </div>
    </section>
  );
}
