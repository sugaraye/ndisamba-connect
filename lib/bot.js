// lib/bot.js
import { Bot } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("❌ BOT_TOKEN manquant");
}

export const bot = new Bot(BOT_TOKEN, {
  botInfo: {
    id: 5107090126,
    is_bot: true,
    first_name: "SambaLearnBot",
    username: "SambaLearnBot"
  }
});

// 🔥 LOGS DÉTAILLÉS POUR DEBUG
bot.api.config.use(async (prev, method, payload, signal) => {
  const start = Date.now();
  console.log(`📤 [BOT] Appel API: ${method}`, {
    chat_id: payload?.chat_id || 'N/A',
    text: payload?.text ? payload.text.substring(0, 50) + '...' : 'N/A'
  });
  
  try {
    const result = await prev(method, payload, signal);
    const duration = Date.now() - start;
    console.log(`✅ [BOT] Réponse API ${method} réussie en ${duration}ms`);
    return result;
  } catch (error) {
    console.error(`❌ [BOT] Erreur API ${method}:`, error);
    throw error;
  }
});

// Error handler global
bot.catch((err) => {
  console.error("🔥 Erreur GrammY:", err);
});

// 🎯 COMMANDE TEST SIMPLE
bot.command("test", async (ctx) => {
  console.log("🔄 Commande /test reçue de:", ctx.from?.first_name);
  try {
    await ctx.reply("🤖 Test réussi ! Le bot fonctionne.");
    console.log("✅ Message test envoyé");
  } catch (error) {
    console.error("❌ Erreur envoi test:", error);
  }
});

bot.command("ping", async (ctx) => {
  await ctx.reply("🏓 pong!");
});