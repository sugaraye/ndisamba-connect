// app/layout.tsx
import "./globals.css"; // IMPORT AJOUTÉ
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import { ReactNode } from 'react';

export const metadata = {
  title: "NdiSamba Connect",
  description: "Portail officiel du Groupe Ndi Samba Formation",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        <MainNavbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}