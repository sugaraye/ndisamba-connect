import { Bot } from "grammy";
import OpenAI from "openai";
import { entities } from "@/lib/entities";
import { getAllPosts } from "@/lib/posts";

export const runtime = "nodejs";

// -----------------------------
// SINGLETON BOT (nécessaire pour Vercel)
// -----------------------------
const globalForBot = globalThis;

if (!globalForBot._sambaBot) {
  const bot = new Bot(process.env.BOT_TOKEN);

  // OpenAI sécurisé
  let openai = null;
  if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  // 🟦 /start
  bot.command("start", async (ctx) => {
    await ctx.reply(
      `👋 *Bienvenue dans NdiSamba Connect !*\n\n` +
        `Votre assistant intelligent du Groupe Ndi Samba Formation.\n\n` +
        `📌 Tapez /formations, /entites, /contact, /ia ...`,
      { parse_mode: "Markdown" }
    );
  });

  // 🟨 /formations
  bot.command("formations", async (ctx) => {
    await ctx.reply(
      `🎓 *Formations disponibles :*\n- BTS / Licence / Master\n- Cycle Ingénieur\n- Certifications\n\n🌐 https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  // 🟥 /entites
  bot.command("entites", async (ctx) => {
    let msg = `🏢 *Entités du Groupe Ndi Samba :*\n\n`;
    entities.forEach((e) => {
      msg += `🔹 *${e.name}*\n➡ ${e.website || "—"}\n\n`;
    });
    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  // 📰 /actualites
  bot.command("actualites", async (ctx) => {
    const posts = getAllPosts();
    if (!posts.length) return ctx.reply("Aucune actualité disponible.");

    let msg = `📰 *Dernières actualités :*\n\n`;
    posts.slice(0, 5).forEach((p) => {
      msg += `🔸 *${p.title}*\n📅 ${p.date}\n\n`;
    });

    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  // 📝 /inscription
  bot.command("inscription", async (ctx) => {
    await ctx.reply(
      `📝 *Inscription en ligne :*\n➡ https://ih3mdhp6.forms.app/formulaire-dinscription`,
      { parse_mode: "Markdown" }
    );
  });

  // ☎️ /contact
  bot.command("contact", async (ctx) => {
    await ctx.reply(
      `☎ *Contacts :*\n📧 infos@groupendisambaformation.com\n📱 +237 689 18 43 39`,
      { parse_mode: "Markdown" }
    );
  });

  // 🤖 /ia
  bot.command("ia", async (ctx) => {
    if (!openai) {
      return ctx.reply("⚠️ Le service IA est temporairement indisponible.");
    }

    const prompt = ctx.message.text.replace("/ia", "").trim();
    if (!prompt) return ctx.reply("Posez votre question 🙂");

    const answer = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Assistant officiel Ndi Samba." },
        { role: "user", content: prompt },
      ],
      max_tokens: 200,
    });

    await ctx.reply(answer.choices[0].message.content);
  });

  // ✨ Détection automatique d'entités
  bot.on("message", async (ctx) => {
    const text = ctx.message.text?.toLowerCase() || "";

    for (let e of entities) {
      if (text.includes(e.slug) || text.includes(e.name.toLowerCase())) {
        return ctx.reply(
          `🏢 *${e.name}*\n${e.description}\n\n🌍 ${e.website}\n📞 ${e.phone}`,
          { parse_mode: "Markdown" }
        );
      }
    }

    return ctx.reply("✔️ Message reçu !");
  });

  globalForBot._sambaBot = bot;
}

const sambaBot = globalForBot._sambaBot;

// -----------------------------
// HANDLER WEBHOOK VERCEL
// -----------------------------
export async function POST(req) {
  try {
    const update = await req.json();
    await sambaBot.handleUpdate(update);
    return new Response("OK");
  } catch (e) {
    console.error("BOT ERROR:", e);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("Webhook OK");
}
