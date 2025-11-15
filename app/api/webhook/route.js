import { Bot } from "grammy";

export const runtime = "nodejs";

// -------------------------
// INITIALISATION BOT
// -------------------------
const bot = new Bot(process.env.BOT_TOKEN);

// Enregistrer les commandes et handlers
bot.command("start", (ctx) =>
  ctx.reply("🚀 NdiSamba Connect est opérationnel !")
);

bot.command("help", (ctx) =>
  ctx.reply("Voici les commandes disponibles 👍")
);

bot.on("message:text", (ctx) =>
  ctx.reply("Message reçu ✔️")
);

// ⭐⭐⭐ IMPORTANT : INITIALISER LE BOT ⭐⭐⭐
await bot.init();

// -------------------------
// WEBHOOK HANDLER
// -------------------------
export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 Webhook POST reçu :", JSON.stringify(update, null, 2));

    // Envoie la mise à jour à Grammy pour traitement
    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Erreur Webhook :", err);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook OK");
}
