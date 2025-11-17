import Link from 'next/link';
import Image from 'next/image';

export default function EntityCard({ entity }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="h-48 relative overflow-hidden">
        <Image
          src={entity.image || "/assets/placeholder.jpg"}
          alt={entity.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {entity.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors">
            {entity.name}
          </h3>
          <div className="text-sm text-primary-600 mb-2 flex items-center gap-1">
            <span>🌐</span>
            {entity.site}
          </div>
          <p className="text-gray-700 leading-relaxed">{entity.description}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href={entity.link}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-md hover:shadow-lg"
          >
            Explorer ›
          </Link>
          <div className="text-2xl">→</div>
        </div>
      </div>
    </article>
  );
}