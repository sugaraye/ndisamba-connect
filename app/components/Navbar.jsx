"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO + NOM */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Groupe Ndi Samba"
            className="h-14 w-auto bg-white p-1 rounded-md"
          />
          <h1 className="text-xl font-bold leading-tight hidden sm:block">
            Groupe Ndi Samba Formation
          </h1>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-300">Accueil</Link>
          <Link href="/about" className="hover:text-yellow-300">À propos</Link>
          <Link href="/entites/iujs" className="hover:text-yellow-300">Entités</Link>
          <Link href="/actualites" className="hover:text-yellow-300">Actualités</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
          <a
            href="https://t.me/SambaLearnBot"
            target="_blank"
            className="bg-white text-blue-900 font-semibold px-4 py-1 rounded"
          >
            Chatbot
          </a>
        </nav>

        {/* MENU MOBILE */}
        <button
          className="md:hidden bg-white text-blue-900 p-2 rounded shadow"
          onClick={toggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* OVERLAY MENU */}
      {open && (
        <div className="md:hidden bg-blue-800/95 px-4 py-4 space-y-4">
          <Link href="/" onClick={toggle}>Accueil</Link>
          <Link href="/about" onClick={toggle}>À propos</Link>
          <Link href="/entites/iujs" onClick={toggle}>Entités</Link>
          <Link href="/actualites" onClick={toggle}>Actualités</Link>
          <Link href="/contact" onClick={toggle}>Contact</Link>
          <a
            href="https://t.me/SambaLearnBot"
            target="_blank"
            className="bg-white text-blue-900 block w-full text-center py-2 rounded font-semibold"
          >
            Chatbot
          </a>
        </div>
      )}
    </header>
  );
}
