import { Bot } from "grammy/web"; // version Web compatible Edge

export const runtime = "edge"; // obligatoire sur Vercel

const bot = new Bot(process.env.BOT_TOKEN);

// Commandes simples
bot.command("start", (ctx) =>
  ctx.reply("🚀 NdiSamba Connect est opérationnel depuis 2025!")
);

bot.on("message:text", (ctx) =>
  ctx.reply("Message reçu ✔️")
);



// Webhook Handler (compatible Edge)
export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 Update reçu :", update);

    await bot.handleUpdate(update);
    return new Response("OK");
  } catch (err) {
    console.error("❌ Erreur POST :", err);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook OK");
}
