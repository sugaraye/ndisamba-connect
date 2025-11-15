// ---------------------------------------------------------
// 🚀 NDISAMBA CONNECT — TELEGRAM WEBHOOK (grammY + Next.js)
// Version stable et validée pour Vercel serverless
// ---------------------------------------------------------

export const runtime = "nodejs";

import { Bot } from "grammy";
import OpenAI from "openai";
import { entities } from "@/lib/entities";
import { getAllPosts } from "@/lib/posts";

// ---------------------------------------------------------
// 📌 SINGLETON + INIT grammY (OBLIGATOIRE sur Vercel)
// ---------------------------------------------------------
const globalForBot = globalThis;

async function createBot() {
  const bot = new Bot(process.env.BOT_TOKEN);

  // Initialisation obligatoire en serverless
  await bot.init();

  // OpenAI (utilisé uniquement pour /ia)
  let openai = null;
  if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  // ---------------------------------------------------------
  // COMMANDES
  // ---------------------------------------------------------

  bot.command("start", async (ctx) => {
    await ctx.reply(
      `👋 *Bienvenue dans NdiSamba Connect !*\n\n` +
        `Votre assistant intelligent du Groupe Ndi Samba Formation.\n\n` +
        `📌 Essayez :\n` +
        `- /formations\n` +
        `- /entites\n` +
        `- /actualites\n` +
        `- /inscription\n` +
        `- /contact\n` +
        `- /ia + votre question`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("formations", async (ctx) => {
    await ctx.reply(
      `🎓 *Formations disponibles :*\n\n` +
        `- BTS / Licence / Master\n` +
        `- Cycle Ingénieur\n` +
        `- Certifications internationales\n\n` +
        `🌐 https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("entites", async (ctx) => {
    let msg = `🏢 *Les entités du Groupe Ndi Samba :*\n\n`;
    for (const e of entities) {
      msg += `🔹 *${e.name}*\n➡ ${e.website || "—"}\n\n`;
    }
    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  bot.command("actualites", async (ctx) => {
    const posts = getAllPosts();
    if (!posts.length)
      return ctx.reply("Aucune actualité disponible pour le moment.");

    let msg = `📰 *Dernières actualités :*\n\n`;
    posts.slice(0, 5).forEach((p) => {
      msg += `🔸 *${p.title}*\n📅 ${p.date}\n\n`;
    });

    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  bot.command("inscription", async (ctx) => {
    await ctx.reply(
      `📝 *Inscription en ligne :*\n➡ https://ih3mdhp6.forms.app/formulaire-dinscription`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("contact", async (ctx) => {
    await ctx.reply(
      `☎ *Contacts officiels :*\n\n` +
        `📧 infos@groupendisambaformation.com\n` +
        `📱 WhatsApp : +237 689 18 43 39\n` +
        `🌐 https://groupendisambaformation.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("ia", async (ctx) => {
    if (!openai) {
      return ctx.reply("⚠️ Le service IA est temporairement indisponible.");
    }

    const prompt = ctx.message.text.replace("/ia", "").trim();
    if (!prompt) return ctx.reply("❓ Posez une question après /ia");

    try {
      const answer = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Assistant officiel Ndi Samba." },
          { role: "user", content: prompt },
        ],
        max_tokens: 250,
      });

      await ctx.reply(answer.choices[0].message.content);
    } catch (e) {
      console.error("OpenAI ERROR:", e);
      return ctx.reply("⚠️ Erreur IA.");
    }
  });

  // ---------------------------------------------------------
  // MESSAGE PAR DÉFAUT + ENTITÉS
  // ---------------------------------------------------------
  bot.on("message", async (ctx) => {
    const text = ctx.message.text?.toLowerCase() || "";

    // Détection automatique d’entités
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

  return bot;
}

// Création du bot si non existant (Singleton)
if (!globalForBot._sambaBot) {
  globalForBot._sambaBot = await createBot();
}

const bot = globalForBot._sambaBot;

// ---------------------------------------------------------
// 🌐 HANDLER NEXT.JS — WEBHOOK
// ---------------------------------------------------------

export async function POST(req) {
  try {
    const update = await req.json();
    await bot.handleUpdate(update);
    return new Response("OK");
  } catch (e) {
    console.error("BOT ERROR:", e);
    return new Response("ERROR", { status: 500 });
  }
}

export async function GET(req) {
  const url = new URL(req.url);
  if (url.searchParams.get("_inspect")) {
    return new Response(
      `🟩 NdiSamba Connect Webhook actif\nOpenAI: configuré`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }

  return new Response("Webhook OK");
}
