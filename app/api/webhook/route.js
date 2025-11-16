import { Bot } from "grammy";

export const runtime = "nodejs";

const bot = new Bot(process.env.BOT_TOKEN);

// Commandes
bot.command("start", ctx => ctx.reply("🚀 NdiSamba Connect est opérationnel !"));
bot.command("help", ctx => ctx.reply("Voici les commandes disponibles 👍"));
bot.on("message:text", ctx => ctx.reply("Message reçu ✔️"));

// Webhook
export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 UPDATE REÇUE :", JSON.stringify(update, null, 2));

    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ ERREUR WEBHOOK :", err);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook OK");
}
