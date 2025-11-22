import { entities } from "@/lib/entities";

export default function EntitePage({ params }) {
  const ent = entities.find((x) => x.slug === params.slug);

  if (!ent)
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-red-600">Entité non trouvée</h2>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={ent.image}
        alt={ent.name}
        className="w-full h-64 object-cover rounded shadow"
      />

      <h1 className="text-3xl font-bold mt-6">{ent.name}</h1>

      <p className="mt-4 text-gray-700 text-lg">{ent.description}</p>

      <div className="mt-6 space-y-2">
        {ent.website && (
          <p>
            🌍 Site web :{" "}
            <a
              href={ent.website}
              className="text-blue-700 underline"
              target="_blank"
            >
              {ent.website}
            </a>
          </p>
        )}

        {ent.phone && <p>📞 Téléphone : {ent.phone}</p>}
        {ent.address && <p>📍 Adresse : {ent.address}</p>}
      </div>
    </div>
  );
}
