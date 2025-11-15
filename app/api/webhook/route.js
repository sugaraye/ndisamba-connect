import { Bot } from "grammy";

export const runtime = "nodejs";

const bot = new Bot(process.env.BOT_TOKEN);

// Test simple
bot.command("start", (ctx) => ctx.reply("Bot opérationnel ! 🚀"));
bot.on("message", (ctx) => ctx.reply("Message reçu ✔️"));

export async function POST(req) {
  const data = await req.json();
  console.log("🔥 Webhook POST reçu :", JSON.stringify(data, null, 2));

  await bot.handleUpdate(data);
  return new Response("OK");
}

export async function GET() {
  return new Response("Webhook OK");
}
