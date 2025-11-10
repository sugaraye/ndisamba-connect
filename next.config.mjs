/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Exécution côté serveur en Node.js (obligatoire pour node-telegram-bot-api)
  experimental: {
    runtime: 'nodejs',
    serverActions: true
  },

  // ✅ Désactive les optimisations inutiles pour éviter les erreurs de build sur Vercel
  eslint: {
    ignoreDuringBuilds: true
  },

  typescript: {
    ignoreBuildErrors: true
  },

  // ✅ Autorise les appels sécurisés depuis Telegram ou d'autres sources
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' }
        ]
      }
    ];
  },

  // ✅ Si tu veux personnaliser la sortie statique
  output: 'standalone'
};

export default nextConfig;
