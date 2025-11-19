// app/api/webhook/route.js
import { Bot, webhookCallback } from "grammy";

export const runtime = "edge"; // obligatoire sur Vercel

// Vérifier que le token bot existe
const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.warn("⚠️ BOT_TOKEN non configuré");
}

const bot = new Bot(BOT_TOKEN || "dummy-token");

// Commandes simples
bot.command("start", (ctx) =>
  ctx.reply("🚀 NdiSamba Connect est opérationnel depuis 2025!")
);

bot.on("message:text", (ctx) =>
  ctx.reply("Message reçu ✔️")
);

// Gestionnaire webhook compatible Edge
export async function POST(req) {
  try {
    // Si le token n'est pas configuré, retourner une erreur
    if (!BOT_TOKEN) {
      console.error("❌ BOT_TOKEN non configuré");
      return new Response(JSON.stringify({ 
        error: "Bot token not configured" 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const update = await req.json();
    console.log("🔥 Update reçu :", update);

    // Utiliser webhookCallback pour le traitement
    const handleUpdate = webhookCallback(bot, "std/http");
    
    // Convertir la requête Next.js en requête standard
    const url = new URL(req.url);
    const mockReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(update),
    });

    return await handleUpdate(mockReq);

  } catch (err) {
    console.error("❌ Erreur POST :", err);
    return new Response(JSON.stringify({ 
      error: "Webhook processing failed" 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ 
    status: "Webhook active",
    bot: "NdiSamba Connect Bot",
    timestamp: new Date().toISOString()
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}