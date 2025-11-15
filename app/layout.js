import "./globals.css";

export const metadata = {
  title: "NdiSamba Connect",
  description: "Portail numérique du Groupe Ndi Samba Formations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
