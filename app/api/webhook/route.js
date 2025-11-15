// ---------------------------------------------------------
// 🚀 NdiSamba Connect — Webhook Telegram (grammY + Next.js)
// Version stable pour Vercel serverless sans IIFE
// ---------------------------------------------------------

export const runtime = "nodejs";

import { Bot } from "grammy";
import OpenAI from "openai";
import { entities } from "@/lib/entities";
import { getAllPosts } from "@/lib/posts";

const globalForBot = globalThis;

// ---------------------------------------------------------
// 📌 Fonction qui crée le bot (sans l’exécuter immédiatement)
// ---------------------------------------------------------
async function setupBot() {
  const bot = new Bot(process.env.BOT_TOKEN);

  // Initialisation obligatore pour serverless
  await bot.init();

  // Optionnel : IA
  let openai = null;
  if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  // -----------------------------
  // COMMANDES
  // -----------------------------
  bot.command("start", async (ctx) => {
    await ctx.reply(
      `👋 *Bienvenue dans NdiSamba Connect !*` +
        `\n\n📌 Essayez : /formations, /entites, /actualites, /contact, /ia`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("formations", async (ctx) => {
    await ctx.reply(
      `🎓 *Formations :*\nBTS / Licence / Master\n\n🌐 https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("entites", async (ctx) => {
    let msg = `🏢 *Entités du Groupe :*\n\n`;
    for (const e of entities) {
      msg += `🔸 *${e.name}*\n➡ ${e.website}\n\n`;
    }
    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  bot.command("actualites", async (ctx) => {
    const posts = getAllPosts();
    if (!posts.length) return ctx.reply("Aucune actualité.");

    let msg = `📰 *Dernières actualités :*\n\n`;
    posts.slice(0, 5).forEach((p) => {
      msg += `🔹 *${p.title}*\n📅 ${p.date}\n\n`;
    });

    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  bot.command("contact", async (ctx) => {
    await ctx.reply(
      `☎ *Contacts :*\n📧 infos@groupendisambaformation.com\n📱 +237 689 18 43 39`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("inscription", (ctx) => {
    ctx.reply(
      `📝 *Inscription en ligne :*\n➡ https://ih3mdhp6.forms.app/formulaire-dinscription`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("ia", async (ctx) => {
    if (!openai) return ctx.reply("IA indisponible.");

    const prompt = ctx.message.text.replace("/ia", "").trim();
    if (!prompt) return ctx.reply("Posez une question 🙂");

    const answer = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Assistant Ndi Samba." },
        { role: "user", content: prompt },
      ],
      max_tokens: 250
    });

    return ctx.reply(answer.choices[0].message.content);
  });

  // MESSAGE PAR DÉFAUT
  bot.on("message", async (ctx) => {
    const text = ctx.message.text?.toLowerCase() || "";

    // Détection entités
    for (const e of entities) {
      if (text.includes(e.slug) || text.includes(e.name.toLowerCase())) {
        return ctx.reply(
          `🏢 *${e.name}*\n${e.description}\n\n🌍 ${e.website}\n📞 ${e.phone}`,
          { parse_mode: "Markdown" }
        );
      }
    }

    return ctx.reply("✔️ Message reçu !");
  });

  return bot;
}

// ---------------------------------------------------------
// 🟦 Lazy init : création du bot au premier update reçu
// ---------------------------------------------------------
async function getBot() {
  if (!globalForBot._sambaBot) {
    globalForBot._sambaBot = await setupBot();
  }
  return globalForBot._sambaBot;
}

// ---------------------------------------------------------
// 🌐 HANDLERS HTTP
// ---------------------------------------------------------
export async function POST(req) {
  try {
    const update = await req.json();
    const bot = await getBot();
    await bot.handleUpdate(update);
    return new Response("OK");
  } catch (err) {
    console.error("BOT ERROR:", err);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET() {
  return new Response("NdiSamba Webhook OK");
}
