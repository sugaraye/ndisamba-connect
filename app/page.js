"use client";
import { useState } from "react";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          🎓 NdiSamba Connect
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          Bienvenue sur la plateforme officielle de{" "}
          <strong>NDI SAMBA POLYTECH</strong> — votre passerelle vers les
          formations supérieures, les certifications internationales et
          l’innovation numérique.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://elearningsamba.com/index.php/filieres-de-formation/"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            📘 Formations
          </a>
          <a
            href="https://elearningsamba.com/index.php/certifications-internationales/"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            🌍 Certifications
          </a>
          <a
            href="https://ih3mdhp6.forms.app/formulaire-dinscription"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            📝 Inscription
          </a>
          <a
            href="https://t.me/SambaLearnBot"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            🤖 Chat Telegram
          </a>
        </div>

        <button
          onClick={() => setShowChat(!showChat)}
          className="mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition"
        >
          {showChat ? "Fermer le Chatbot" : "💬 Ouvrir le Chatbot intégré"}
        </button>

        {showChat && (
          <div className="mt-6 w-full max-w-md">
            <Chatbot />
          </div>
        )}
      </main>

      <footer className="bg-blue-900 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Groupe NDI SAMBA Formation — Tous droits réservés.
      </footer>
    </div>
  );
}
