import { Bot } from "grammy";

export const runtime = "edge"; // IMPORTANT POUR VERCEL

// Initialisation du bot
const bot = new Bot(process.env.BOT_TOKEN);

// Commandes
bot.command("start", (ctx) => ctx.reply("🚀 Bot opérationnel !"));
bot.on("message:text", (ctx) => ctx.reply("Message reçu ✔️"));

// Handler webhook
export async function POST(req) {
  const update = await req.json();
  await bot.handleUpdate(update);
  return new Response("OK");
}

export function GET() {
  return new Response("Webhook OK");
}
