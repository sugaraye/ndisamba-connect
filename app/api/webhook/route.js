// Exécute le code côté serveur Node.js (nécessaire pour node-telegram-bot-api)
export const runtime = "nodejs";

import TelegramBot from "node-telegram-bot-api";
import OpenAI from "openai";

// --- CONFIGURATION GLOBALE (singleton pour éviter recréation à chaque appel) ---
let _bot = globalThis._ndisambaTelegramBot;
let _openai = globalThis._ndisambaOpenAI;

if (!_bot) {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.error("❌ BOT_TOKEN manquant. Ajoutez-le dans les variables d'environnement Vercel.");
    throw new Error("BOT_TOKEN missing");
  }
  _bot = new TelegramBot(token);
  globalThis._ndisambaTelegramBot = _bot;
}

if (!_openai) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("⚠️ OPENAI_API_KEY manquant. Le bot répondra sans IA.");
  } else {
    _openai = new OpenAI({ apiKey });
    globalThis._ndisambaOpenAI = _openai;
  }
}

// --- HANDLERS TELEGRAM ---
function registerHandlers() {
  if (_bot._ndisamba_handlers_registered) return;

  _bot.on("message", async (msg) => {
    try {
      const chatId = msg.chat.id;
      const text = (msg.text || "").trim();

      // 🚀 Ignorer les messages vides ou trop courts
      if (text.length < 3) {
        await _bot.sendMessage(chatId, "❓ Peux-tu préciser ta question ?");
        return;
      }

      // 🧭 Commande /start
      if (text === "/start") {
        const welcome = `👋 Bonjour ${msg.from.first_name || ""} !
Je suis *NdiSamba Connect*, l'assistant intelligent de NDI SAMBA POLYTECH 🎓
Je peux t’aider à :
- découvrir les **filières** 🎯  
- connaître les **conditions d’inscription** 📝  
- comprendre les **certifications internationales** 🌐  
- ou simplement discuter avec moi 🤖  

Essaye par exemple :
👉 "Quels sont les BTS disponibles ?"`;
        await _bot.sendMessage(chatId, welcome, { parse_mode: "Markdown" });
        return;
      }

      // 🆘 Commande /help
      if (text === "/help") {
        await _bot.sendMessage(
          chatId,
          "Je peux répondre à tes questions sur : les formations, inscriptions, programmes, certifications, et services de NDI SAMBA POLYTECH."
        );
        return;
      }

      // 🧩 Commande /inscription
      if (text === "/inscription") {
        await _bot.sendMessage(
          chatId,
          "📥 Pour t’inscrire à NDI SAMBA POLYTECH :\n➡️ Remplis le formulaire en ligne ici : https://ih3mdhp6.forms.app/formulaire-dinscription\n☎️ Contact : +237 689 18 43 39\n📧 Email : contact@universitendisamba.com"
        );
        return;
      }

      // 🌍 Commande /filières
      if (text === "/filières" || text.toLowerCase().includes("filières")) {
        await _bot.sendMessage(
          chatId,
          "🎓 Nous proposons :\n- BTS & Licences professionnelles (TIC, Gestion, Réseaux, Sécurité...)\n- Masters & Cycle Ingénieur\n\n📚 Détails sur : https://elearningsamba.com/index.php/filieres-de-formation/"
        );
        return;
      }

      // 🌐 Commande /certifications
      if (text === "/certifications" || text.toLowerCase().includes("certification")) {
        await _bot.sendMessage(
          chatId,
          "🌐 Nous offrons des certifications internationales reconnues :\n- TOSA (bureautique, programmation)\n- Skills4All (cybersécurité, cloud)\n- IELTS / SIELE / EF SET (langues)\n\n📘 Plus d’infos : https://elearningsamba.com/index.php/certifications-internationales/"
        );
        return;
      }

      // 💡 Si OpenAI n’est pas configuré
      if (!_openai) {
        await _bot.sendMessage(
          chatId,
          "⚠️ Le service d’intelligence artificielle n’est pas encore configuré. Contacte l’administrateur pour l’activer."
        );
        return;
      }

      // 🤖 Requête OpenAI avec économie de tokens
      const completion = await _openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Tu es l’assistant du Groupe Ndi Samba Formation. Réponds toujours en français, de manière claire, concise et professionnelle."
          },
          { role: "user", content: text },
        ],
        temperature: 0.3,
        max_tokens: 250, // 💸 limite de longueur pour contrôler le coût
      });

      const reply =
        completion.choices?.[0]?.message?.content?.trim() ||
        "🤔 Désolé, je n’ai pas bien compris ta question.";
      await _bot.sendMessage(chatId, reply);
    } catch (err) {
      console.error("❌ Erreur dans le handler :", err);
      await _bot.sendMessage(
        msg.chat.id,
        "⚠️ Une erreur s’est produite. Réessaie dans un instant."
      );
    }
  });

  _bot._ndisamba_handlers_registered = true;
}

registerHandlers();

// --- ROUTES API (Webhook) ---
export async function POST(req) {
  try {
    const body = await req.json();
    _bot.processUpdate(body);
    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error("POST /api/webhook error:", e);
    return new Response("Bad Request", { status: 400 });
  }
}

export async function GET() {
  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  return new Response(
    `✅ NdiSamba Connect Webhook actif
OpenAI: ${hasOpenAI ? "configuré" : "non configuré"}`,
    { status: 200 }
  );
}
