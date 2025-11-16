import { Bot } from "grammy";

export const runtime = "edge"; // OBLIGATOIRE sur Vercel

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("🚀 Bot opérationnel !"));
bot.on("message:text", (ctx) => ctx.reply("Message reçu ✔️"));

export async function POST(req) {
  const update = await req.json();
  await bot.handleUpdate(update);
  return new Response("OK", { status: 200 });
}

export function GET() {
  return new Response("Webhook OK", { status: 200 });
}
