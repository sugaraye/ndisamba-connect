import { Bot } from "grammy";

export const runtime = "nodejs";

// Initialise uniquement le bot, sans OpenAI
const bot = new Bot(process.env.BOT_TOKEN);

// Commandes simples
bot.command("start", (ctx) => ctx.reply("Bot opérationnel ✔️"));
bot.on("message", (ctx) => ctx.reply("Message reçu 👍"));

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("🔥 Webhook POST reçu :", JSON.stringify(data, null, 2));

    await bot.handleUpdate(data);

    return new Response("OK");
  } catch (err) {
    console.error("❌ Webhook ERROR:", err);
    return new Response("ERROR", { status: 200 }); // IMPORTANT : toujours renvoyer 200
  }
}

export async function GET() {
  return new Response("Webhook OK");
}
