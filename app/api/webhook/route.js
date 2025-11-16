import { Bot } from "grammy";

export const runtime = "nodejs";

// -----------------------------
// INITIALISATION BOT
// -----------------------------
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("❌ BOT_TOKEN manquant dans Vercel !");
}

const bot = new Bot(token);

// Commande /start
bot.command("start", (ctx) => ctx.reply("🚀 NdiSamba Connect est opérationnel !"));
// Commande /help
bot.command("help", (ctx) => ctx.reply("Voici les commandes disponibles 👍"));
// Réponse générique
bot.on("message", (ctx) => ctx.reply("Message reçu ✔️"));

// -----------------------------
// HANDLER POST POUR TELEGRAM
// -----------------------------
export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 Update Telegram reçue :", update);

    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Erreur Webhook :", err);
    return new Response("ERROR", { status: 500 });
  }
}

// -----------------------------
// HANDLER GET POUR TEST
// -----------------------------
export async function GET() {
  return new Response(`
    ✔️ NdiSamba Connect Webhook actif\n
    BOT_TOKEN: ${process.env.BOT_TOKEN ? "OK" : "MISSING"}
  `);
}
