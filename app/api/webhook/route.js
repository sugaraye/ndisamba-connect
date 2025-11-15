// ---------------------------------------------------------
// 🚀 NDISAMBA CONNECT — WEBHOOK TELEGRAM (grammY + Vercel)
// Version complète avec menu Telegram et commandes avancées
// ---------------------------------------------------------

export const runtime = "nodejs";

import { Bot } from "grammy";
import OpenAI from "openai";
import { entities } from "@/lib/entities";
import { getAllPosts } from "@/lib/posts";

// ---------------------------------------------------------
// 📌 SINGLETON BOT — Obligatoire sur Vercel
// ---------------------------------------------------------
const globalForBot = globalThis;

async function createBot() {
  const bot = new Bot(process.env.BOT_TOKEN);

  // Initialisation grammY (OBLIGATOIRE)
  await bot.init();

  // OpenAI optionnel
  let openai = null;
  if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  // ---------------------------------------------------------
  // 🟦 COMMANDES SYSTEM
  // ---------------------------------------------------------

  bot.command("start", async (ctx) => {
    await ctx.reply(
      `👋 *Bienvenue dans NdiSamba Connect !*\n\n` +
        `Je suis votre assistant virtuel du *Groupe Ndi Samba Formation*.\n\n` +
        `Voici ce que je peux faire :\n` +
        `➡️ Informations sur les filières\n` +
        `➡️ Admissions & frais\n` +
        `➡️ Plateforme e-learning\n` +
        `➡️ Certifications internationales\n` +
        `➡️ Orientation\n` +
        `➡️ Assistance & documents scolaires\n\n` +
        `📌 Tapez /help pour voir toutes les commandes.`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(
      `📖 *Liste des commandes disponibles :*\n\n` +
        `/start – Démarrer le bot\n` +
        `/help – Aide et assistance\n` +
        `/about – En savoir plus sur le Groupe\n` +
        `/contact – Coordonnées officielles\n` +
        `/admissions – Procédure d'admission\n` +
        `/filieres – Liste des filières\n` +
        `/inscription – Formulaire en ligne\n` +
        `/frais – Frais de scolarité\n` +
        `/orientation – Aide à l’orientation\n` +
        `/elearning – Plateforme e-learning\n` +
        `/cours – Liste des cours disponibles\n` +
        `/certifications – Certifications internationales\n` +
        `/support – Assistance technique\n` +
        `/releve – Demander un relevé de notes\n` +
        `/attestations – Demandes de documents\n` +
        `/paiement – Modes de paiement\n` +
        `/polytech – Parcours Polytech\n` +
        `/licence – Licences professionnelles et technologiques\n` +
        `/master – Masters professionnels et technologiques\n` +
        `/ingenieur – Cycle ingénieur\n` +
        `/jobs – Opportunités & stages\n` +
        `/ia – Poser une question libre à l’IA`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("about", async (ctx) => {
    await ctx.reply(
      `🏫 *Groupe Ndi Samba Formation*\n\n` +
        `Un réseau d’instituts offrant :\n` +
        `- Formations professionnelles\n` +
        `- Licences & Masters\n` +
        `- Cycle ingénieur\n` +
        `- Certifications internationales (IELTS, TOSA, SIELE…)\n` +
        `- Plateforme e-learning moderne\n\n` +
        `🌍 https://groupendisambaformation.com`,
      { parse_mode: "Markdown" }
    );
  });

  // ---------------------------------------------------------
  // 🟩 COMMANDES "INFORMATIONS"
  // ---------------------------------------------------------

  bot.command("contact", async (ctx) => {
    await ctx.reply(
      `☎️ *Contact officiel :*\n\n` +
        `📧 infos@groupendisambaformation.com\n` +
        `📞 +237 689 18 43 39\n` +
        `🌍 https://groupendisambaformation.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("admissions", async (ctx) => {
    await ctx.reply(
      `📝 *Procédure d’admission :*\n\n` +
        `1️⃣ Photocopie CNI / Carte scolaire\n` +
        `2️⃣ Dernier diplôme ou relevé\n` +
        `3️⃣ 2 photos 4x4\n` +
        `4️⃣ Frais d'inscription\n\n` +
        `☎️ Assistance : +237 689 18 43 39`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("filieres", async (ctx) => {
    await ctx.reply(
      `🎓 *Filières disponibles :*\n\n` +
        `- TIC / Informatique\n` +
        `- Gestion / Commerce\n` +
        `- Transport & Logistique\n` +
        `- Métiers juridiques / Notariat\n` +
        `- Génie (Polytech)\n\n` +
        `Détails : https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("inscription", async (ctx) => {
    await ctx.reply(
      `📝 *Inscription en ligne :*\n➡️ https://ih3mdhp6.forms.app/formulaire-dinscription`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("frais", async (ctx) => {
    await ctx.reply(
      `💰 *Frais de scolarité*\n\n` +
        `Licence : 300 000 - 350 000 FCFA\n` +
        `Master : 400 000 - 450 000 FCFA\n` +
        `Inscriptions : 25 000 FCFA`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("orientation", async (ctx) => {
    await ctx.reply(
      `🧭 *Besoin d’aide pour choisir une filière ?*\n\n` +
        `Indiquez-moi :\n` +
        `- Votre niveau actuel\n` +
        `- Vos matières préférées\n` +
        `- Vos objectifs\n\n` +
        `Je vous propose une orientation adaptée.`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("elearning", async (ctx) => {
    await ctx.reply(
      `💻 *Plateforme e-learning* :\n➡️ https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("cours", async (ctx) => {
    await ctx.reply(
      `📚 *Liste des cours disponibles* sur e-learning.\n\n` +
        `Connectez-vous : https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("certifications", async (ctx) => {
    await ctx.reply(
      `🌍 *Certifications internationales :*\n\n` +
        `- IELTS\n` +
        `- SIELE\n` +
        `- TOSA\n` +
        `- Skills4All\n\n` +
        `Infos : https://elearningsamba.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("support", async (ctx) => {
    await ctx.reply(
      `🛠 *Assistance technique e-learning*\n\n` +
        `WhatsApp : +237 689 18 43 39`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("releve", async (ctx) => {
    await ctx.reply(
      `📄 *Demande de relevé de notes*\n\n` +
        `Envoyez votre nom + filière + niveau à :\n` +
        `📧 scolarite@groupendisambaformation.com`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("attestations", async (ctx) => {
    await ctx.reply(
      `📜 *Demande d'attestation ou certificat :*\n\n` +
        `Rendez-vous à la scolarité avec votre CNI.`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("paiement", async (ctx) => {
    await ctx.reply(
      `💳 *Modes de paiement :*\n\n` +
        `- Mobile Money (MTN / Orange)\n` +
        `- Virement bancaire\n` +
        `- Paiement QR Maviance\n`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("polytech", async (ctx) => {
    await ctx.reply(
      `🔧 *Cycle Polytech :*\n\n` +
        `Classes préparatoires + spécialités ingénieur.`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("licence", async (ctx) => {
    await ctx.reply(
      `🎓 *Licences professionnelles & technologiques disponibles.*`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("master", async (ctx) => {
    await ctx.reply(`🎓 *Masters professionnels & technologiques.*`, {
      parse_mode: "Markdown",
    });
  });

  bot.command("ingenieur", async (ctx) => {
    await ctx.reply(
      `⚙️ *Cycle Ingénieur* : 2 ans préparatoire + 3 ans spécialité.`,
      { parse_mode: "Markdown" }
    );
  });

  bot.command("jobs", async (ctx) => {
    await ctx.reply(
      `💼 *Offres de stages et opportunités bientôt disponibles.*`,
      { parse_mode: "Markdown" }
    );
  });

  // ---------------------------------------------------------
  // ✨ IA (/ia)
  // ---------------------------------------------------------
  bot.command("ia", async (ctx) => {
    if (!openai) return ctx.reply("⚠ IA indisponible.");

    const prompt = ctx.message.text.replace("/ia", "").trim();
    if (!prompt) return ctx.reply("Posez une question 🙂");

    try {
      const answer = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Assistant officiel Ndi Samba." },
          { role: "user", content: prompt },
        ],
        max_tokens: 200,
      });

      await ctx.reply(answer.choices[0].message.content);
    } catch (e) {
      console.error(e);
      ctx.reply("Erreur IA.");
    }
  });

  // ---------------------------------------------------------
  // 🧠 MESSAGE PAR DÉFAUT
  // ---------------------------------------------------------
  bot.on("message", async (ctx) => {
    const text = ctx.message.text?.toLowerCase() || "";

    // Détection entités
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

if (!globalForBot._sambaBot) {
  globalForBot._sambaBot = await createBot();
}

const bot = globalForBot._sambaBot;

// ---------------------------------------------------------
// 🌐 HANDLERS POUR NEXT.JS WEBHOOK
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
      `🟩 NdiSamba Connect Webhook actif\nCommands: OK\nOpenAI: loaded`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }
  return new Response("Webhook OK");
}
