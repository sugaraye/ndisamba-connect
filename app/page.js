"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil");

  const sections = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos du Groupe" },
    { id: "iujs", label: "Institut Universitaire J. Ndi Samba" },
    { id: "polytech", label: "Ndi Samba Polytech" },
    { id: "secondaire", label: "Institut Samba Secondaire" },
    { id: "nslogistique", label: "NS Logistique Transit France" },
    { id: "tchaux", label: "La Tchaux Hotel & Resorts" },
    { id: "gnsf", label: "GNSF Avocats & Associés" },
    { id: "afam", label: "Cabinet-Conseil Afam Services" },
    { id: "rirco", label: "Centre Médical RIRCO" },
    { id: "garage", label: "Garage Samba Automobiles" },
    { id: "formations", label: "Formations & Certifications Internationales" },
    { id: "gndouane", label: "GNS Douane-Transit-Logistique Cameroun" },
    { id: "campuslatina", label: "Campus Latina Espagne" },
    { id: "actualites", label: "Actualités & Projets" },
    { id: "contact", label: "Contact & Inscriptions" },
    { id: "chatbot", label: "🤖 Chatbot" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "accueil":
        return (
          <div className="text-center mt-10">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Bienvenue sur <span className="text-blue-700">NdiSamba Connect</span> 🌍
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Le portail numérique officiel du <strong>Groupe Ndi Samba Formations</strong> :
              un écosystème qui relie l’éducation, la logistique, la santé, le droit et la technologie.
            </p>
          </div>
        );

      case "actualites":
        return (
          <div className="max-w-5xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              📰 Actualités & Projets
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="border rounded-lg p-6 shadow-sm hover:shadow-lg bg-white">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Lancement du Portail NdiSamba Connect
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Publié le 11 novembre 2025 — Par Groupe Ndi Samba
                </p>
                <p className="text-gray-700">
                  Une plateforme numérique pour centraliser les écoles, instituts et services du groupe.
                </p>
              </article>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              {sections.find((s) => s.id === activeSection)?.label}
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Informations détaillées à venir pour cette entité du Groupe Ndi Samba.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-3">
            <Image
              src="/Logo SCI 5.png"
              alt="Logo Groupe Ndi Samba"
              width={50}
              height={50}
              className="rounded-md bg-white p-1"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              Groupe Ndi Samba Formations
            </h1>
          </div>

          {/* MENU */}
          <nav className="flex flex-wrap justify-center mt-4 md:mt-0 space-x-2">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`${
                  activeSection === item.id ? "active" : "inactive"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* SECTION */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-10">{renderSection()}</section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} Groupe Ndi Samba Formations — Tous droits réservés |
        Propulsé par <strong>NdiSamba Connect</strong>
      </footer>
    </main>
  );
}
