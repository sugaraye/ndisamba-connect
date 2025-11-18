import Link from 'next/link';
import Image from 'next/image';

export default function EntityCard({ entity }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="h-48 relative overflow-hidden">
        {/* Image principale de l'entité */}
        <Image
          src={entity.image || "/assets/images/placeholder.jpg"}
          alt={entity.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Logo de l'entité en overlay */}
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md">
            <Image
              src={entity.logo || "/assets/logos/logo-default.png"}
              alt={`Logo ${entity.name}`}
              width={40}
              height={40}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <span className="bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {entity.category}
          </span>
        </div>
      </div>
      
      {/* Contenu de la carte */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors leading-tight">
            {entity.name}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
            <span>🌐</span>
            <span className="font-medium">{entity.site}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span>📍</span>
            <span>{entity.locations?.join(', ') || 'Multiple locations'}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span>📞</span>
            <span>{entity.phone}</span>
          </div>

          <p className="text-gray-700 leading-relaxed text-sm">{entity.description}</p>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <Link 
            href={entity.link || "#"}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm shadow-md hover:shadow-lg"
          >
            Découvrir ›
          </Link>
          <div className="text-primary-600 group-hover:text-secondary-600 transition-colors">→</div>
        </div>
      </div>
    </article>
  );
}