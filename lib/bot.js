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

// Activez les logs détaillés
bot.api.config.use(async (prev, method, payload) => {
  console.log(`📤 Appel API: ${method}`, payload ? JSON.stringify(payload).substring(0, 100) + "..." : "sans payload");
  try {
    const result = await prev(method, payload);
    console.log(`✅ Réponse API: ${method} réussie`);
    return result;
  } catch (error) {
    console.error(`❌ Erreur API: ${method}`, error);
    throw error;
  }
});

// Error handler global
bot.catch((err) => {
  console.error("🔥 Erreur GrammY:", err);
});