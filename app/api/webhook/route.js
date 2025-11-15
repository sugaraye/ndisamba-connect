import { Bot, webhookCallback } from "grammy";

export const runtime = "nodejs";

// -------------------------
// INITIALISATION DU BOT
// -------------------------
const bot = new Bot(process.env.BOT_TOKEN);

// Commandes
bot.command("start", (ctx) =>
  ctx.reply("🚀 NdiSamba Connect est opérationnel !")
);

bot.command("help", (ctx) =>
  ctx.reply("Voici les commandes disponibles 👍")
);

bot.on("message:text", (ctx) =>
  ctx.reply("Message reçu ✔️")
);

// Callback spécial pour Vercel/Next.js
const handleUpdate = webhookCallback(bot, "std/http");

// -------------------------
// HANDLER POST
// -------------------------
export async function POST(req) {
  try {
    const body = await req.json();
    return await handleUpdate({
      request: req,
      respondWith: (response) => response,
    });
  } catch (e) {
    console.error("❌ Erreur Webhook :", e);
    return new Response("ERROR", { status: 500 });
  }
}

// -------------------------
// TEST GET
// -------------------------
export function GET() {
  return new Response("Webhook OK", { status: 200 });
}
