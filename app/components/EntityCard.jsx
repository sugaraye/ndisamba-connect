import Link from "next/link";

export default function EntityCard({ entity }) {
  return (
    <div
      className="entity-card bg-white rounded shadow overflow-hidden"
      data-name={entity.name}
    >
      <Link href={`/entites/${entity.slug}`}>
        <img
          src={entity.image}
          alt={entity.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{entity.name}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {entity.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
