import "./globals.css";

// Les composants Client doivent être importés depuis un fichier marqué "use client"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "NdiSamba Connect",
  description: "Portail officiel du Groupe Ndi Samba Formation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        {/* Le Navbar est un composant client */}
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* Le Footer est généralement server component → OK */}
        <Footer />
      </body>
    </html>
  );
}
