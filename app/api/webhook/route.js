let botInstance = null;

async function loadBot() {
  if (!botInstance) {
    console.log("🚀 Initialisation du bot…");

    const bot = new Bot(process.env.BOT_TOKEN);
    await bot.init();

    bot.command("start", (ctx) => ctx.reply("Bot opérationnel 🎉"));
    bot.command("jobs", (ctx) => ctx.reply("Offres à venir."));
    bot.on("message", (ctx) => ctx.reply("Message reçu ✔️"));

    botInstance = bot;

    console.log("✅ Bot prêt !");
  }
  return botInstance;
}

export async function POST(req) {
  console.log("🔥 Webhook appelé !");
  const bot = await loadBot();   // <-- CHARGEMENT FORCÉ ICI

  try {
    const update = await req.json();
    console.log("📩 Update :", update);
    await bot.handleUpdate(update);
    return new Response("OK");
  } catch (e) {
    console.error("BOT ERROR:", e);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook OK");
}
