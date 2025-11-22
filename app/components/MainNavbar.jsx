"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <header className="bg-primary-900 text-white shadow-lg sticky top-0 z-50 border-b-4 border-secondary-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO + NOM */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <Image
              src="/assets/logos/logo-gnsf.png"
              alt="Groupe Ndi Samba Formation"
              width={60}
              height={60}
              className="w-auto h-12"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Groupe Ndi Samba Formation</h1>
            <p className="text-primary-200 text-sm">Excellence & Innovation</p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex gap-8 items-center">
          <Link href="/" className="hover:text-secondary-300 font-medium transition-colors">Accueil</Link>
          <Link href="/about" className="hover:text-secondary-300 font-medium transition-colors">À propos</Link>
          <Link href="/entites" className="hover:text-secondary-300 font-medium transition-colors">Entités</Link>
          <Link href="/actualites" className="hover:text-secondary-300 font-medium transition-colors">Actualités</Link>
          <Link href="/contact" className="hover:text-secondary-300 font-medium transition-colors">Contact</Link>
          <a
            href="https://t.me/SambaLearnBot"
            target="_blank"
            className="bg-secondary-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
          >
            🤖 Chatbot
          </a>
        </nav>

        {/* BOUTON MENU MOBILE */}
        <button
          className="lg:hidden bg-white text-primary-900 p-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          onClick={toggle}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="lg:hidden bg-primary-800/95 backdrop-blur-sm px-6 py-6 space-y-4 animate-in slide-in-from-top">
          <Link href="/" onClick={toggle} className="block py-3 hover:text-secondary-300 border-b border-primary-700">Accueil</Link>
          <Link href="/about" onClick={toggle} className="block py-3 hover:text-secondary-300 border-b border-primary-700">À propos</Link>
          <Link href="/entites" onClick={toggle} className="block py-3 hover:text-secondary-300 border-b border-primary-700">Entités</Link>
          <Link href="/actualites" onClick={toggle} className="block py-3 hover:text-secondary-300 border-b border-primary-700">Actualités</Link>
          <Link href="/contact" onClick={toggle} className="block py-3 hover:text-secondary-300 border-b border-primary-700">Contact</Link>
          <a
            href="https://t.me/SambaLearnBot"
            target="_blank"
            className="bg-secondary-600 text-white block w-full text-center py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors mt-4"
          >
            🤖 Accéder au Chatbot
          </a>
        </div>
      )}
    </header>
  );
}