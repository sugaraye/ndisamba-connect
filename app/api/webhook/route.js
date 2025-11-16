import { Bot } from "grammy";

export const runtime = "edge"; // 🔥 plus rapide et propre pour Telegram

// On initialise le bot UNE FOIS
const token = process.env.BOT_TOKEN;
if (!token) console.error("❌ BOT_TOKEN manquant dans Vercel !");
const bot = new Bot(token);

// Commands
bot.command("start", (ctx) => ctx.reply("🚀 Bot opérationnel !"));
bot.command("help", (ctx) => ctx.reply("Liste des commandes…"));
bot.on("message", (ctx) => ctx.reply("Message reçu ✔️"));

export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 Update reçue :", update);

    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error("❌ Erreur Webhook :", e);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook actif");
}
