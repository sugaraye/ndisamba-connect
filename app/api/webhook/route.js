import { Bot } from "grammy";

export const runtime = "nodejs";

// Initialisation du bot
const bot = new Bot(process.env.BOT_TOKEN);

// Commande /start
bot.command("start", (ctx) =>
  ctx.reply("🚀 NdiSamba Connect est opérationnel !")
);

// Commande /help
bot.command("help", (ctx) =>
  ctx.reply("Voici les commandes disponibles 👍")
);

// Réponse à n’importe quel texte
bot.on("message:text", (ctx) =>
  ctx.reply("Message reçu ✔️")
);

// --- HANDLER WEBHOOK POUR VERCEL ---
export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 Update reçu :", update);

    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Erreur Webhook :", err);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook OK", { status: 200 });
}
