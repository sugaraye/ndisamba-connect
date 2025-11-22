// components/MainNavbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-blue-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
              NS
            </div>
            <span className="text-blue-900 font-bold text-lg">NdiSamba Connect</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-900 hover:text-orange-600 font-medium transition-colors duration-200">
              Accueil
            </Link>
            <Link href="/about" className="text-blue-900 hover:text-orange-600 font-medium transition-colors duration-200">
              À propos
            </Link>
            <Link href="/entites" className="text-blue-900 hover:text-orange-600 font-medium transition-colors duration-200">
              Nos entités
            </Link>
            <Link href="/contact" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Bouton Hamburger */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                href="/" 
                className="text-blue-900 hover:text-orange-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Accueil
              </Link>
              <Link 
                href="/about" 
                className="text-blue-900 hover:text-orange-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🏢 À propos
              </Link>
              <Link 
                href="/entites" 
                className="text-blue-900 hover:text-orange-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🎓 Nos entités
              </Link>
              <Link 
                href="/contact" 
                className="bg-orange-500 text-white text-center py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                📞 Nous contacter
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}