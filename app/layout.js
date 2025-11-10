import "./globals.css";

export const metadata = {
  title: "NdiSamba Connect",
  description: "Le portail interactif du Groupe Ndi Samba Formation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
