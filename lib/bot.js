// lib/bot.js
import { Bot } from "grammy";

let botInstance = null;

export function getBot() {
  if (!botInstance) {
    const BOT_TOKEN = process.env.BOT_TOKEN;
    
    if (!BOT_TOKEN) {
      console.log("⚠️ BOT_TOKEN non configuré (build time)");
      return null;
    }

    botInstance = new Bot(BOT_TOKEN, {
      botInfo: {
        id: 5107090126,
        is_bot: true,
        first_name: "SambaLearnBot",
        username: "SambaLearnBot"
      }
    });

    // LOGS DÉTAILLÉS
    botInstance.api.config.use(async (prev, method, payload, signal) => {
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

    // Error handler
    botInstance.catch((err) => {
      console.error("🔥 Erreur GrammY:", err);
    });

    // ==================== COMMANDES ====================

    botInstance.command("start", async (ctx) => {
      console.log("🔄 Commande /start reçue");
      await ctx.reply(
        `🎉 *Bienvenue sur SambaLearnBot !*\n\nTapez /help pour voir les commandes disponibles.`,
        { parse_mode: "Markdown" }
      );
    });

    botInstance.command("test", async (ctx) => {
      console.log("🔄 Commande /test reçue");
      await ctx.reply("🤖 Test réussi ! Le bot fonctionne.");
    });

    botInstance.command("ping", async (ctx) => {
      await ctx.reply("🏓 pong!");
    });

    botInstance.command("help", (ctx) => {
      ctx.reply(
        `*🆘 Commandes disponibles :*\n\n/start - Menu principal\n/test - Test du bot\n/ping - Test de réponse\n/help - Cette aide`,
        { parse_mode: "Markdown" }
      );
    });

    // Handler pour messages texte
    botInstance.on("message:text", async (ctx) => {
      const text = ctx.message.text;
      console.log("📱 Message reçu:", text);
      
      if (!text.startsWith('/')) {
        await ctx.reply(`🤖 Bonjour ! J'ai reçu votre message.\n\nTapez /help pour les commandes.`);
      }
    });
  }

  return botInstance;
}