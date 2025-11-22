"use client";
import Link from "next/link";

export default function MenuInteractif() {
  const menus = [
    { title: "Institut Universitaire J. Ndi Samba", link: "/institut" },
    { title: "Ndi Samba Polytech", link: "/polytech" },
    { title: "Institut Samba Secondaire", link: "/secondaire" },
    { title: "NS Logistique Transit France", link: "/logistique" },
    { title: "La Tchaux Hotel & Resorts", link: "/hotel" },
    { title: "GNSF Avocats & Associés", link: "/avocats" },
    { title: "Cabinet-Conseil Afam Services", link: "/conseil" },
    { title: "Centre Médical RIRCO", link: "/medical" },
    { title: "Garage Samba Automobiles", link: "/garage" },
    { title: "Formations & Certifications Internationales", link: "/certifications" },
    { title: "GNS Douane-Transit-Logistique Cameroun", link: "/douane" },
    { title: "Campus Latina Espagne", link: "/espagne" },
    { title: "Contact & Inscriptions", link: "/contact" }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-center py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-8">🌍 Groupe Ndi Samba</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {menus.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition hover:bg-green-50 cursor-pointer">
              <h2 className="text-lg font-semibold text-gray-700">{menu.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
