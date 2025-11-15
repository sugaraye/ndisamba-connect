import TelegramBot from "node-telegram-bot-api";

export const runtime = "nodejs"; // important pour Vercel Edge Functions

export async function POST(req) {
  try {
    const body = await req.json();
    const status = body.payload?.deployment?.state;
    const url = body.payload?.deployment?.url;
    const project = body.payload?.deployment?.name;

    const botToken = process.env.BOT_TOKEN;
    const chatId = process.env.TELEGRAM_ADMIN_ID; // Ton ID Telegram personnel

    if (!botToken || !chatId) {
      console.error("⚠️ Variables BOT_TOKEN ou TELEGRAM_ADMIN_ID manquantes.");
      return new Response("Missing env vars", { status: 400 });
    }

    const bot = new TelegramBot(botToken);

    let message = "";
    if (status === "READY") {
      message = `✅ *${project}* a été déployé avec succès sur Vercel !\n🔗 [Voir le site](https://${url})`;
    } else if (status === "ERROR") {
      message = `❌ *${project}* : échec du déploiement sur Vercel.`;
    } else {
      message = `ℹ️ *${project}* : état du déploiement → ${status}`;
    }

    await bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Erreur Webhook Vercel → Telegram :", err);
    return new Response("Erreur", { status: 500 });
  }
}
