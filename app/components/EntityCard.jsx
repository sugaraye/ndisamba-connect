import Link from 'next/link';
import Image from 'next/image';

export default function EntityCard({ entity }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="h-48 relative">
        <Image
          src={entity.image}
          alt={entity.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-blue-900 mb-2">{entity.name}</h3>
          <div className="text-sm text-gray-600 mb-2">{entity.site}</div>
          <p className="text-gray-700">{entity.description}</p>
        </div>
        
        <div>
          <Link 
            href={entity.link}
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors inline-block"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </article>
  );
}