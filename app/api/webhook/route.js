// app/api/webhook/route.js - VERSION CORRIGÉE
import { NextResponse } from "next/server";

let bot = null;

async function initializeBot() {
  if (!bot && process.env.BOT_TOKEN) {
    const { Bot } = await import('grammy');
    
    bot = new Bot(process.env.BOT_TOKEN, {
      botInfo: {
        id: 5107090126,
        is_bot: true,
        first_name: "SambaLearnBot",
        username: "SambaLearnBot"
      }
    });

    // === COMMANDES DE BASE ===
    bot.command("start", async (ctx) => {
      console.log("🔄 Commande /start reçue");
      await ctx.reply(
        `🎉 *Bienvenue sur SambaLearnBot !*\n\nTapez /help pour voir les commandes disponibles.`,
        { parse_mode: "Markdown" }
      );
    });
    
    bot.command("help", (ctx) => {
      ctx.reply(
        `*🆘 Commandes disponibles :*\n\n/start - Menu principal\n/test - Test du bot\n/ping - Test de réponse\n/help - Cette aide`,
        { parse_mode: "Markdown" }
      );
    });
    
    bot.command("test", async (ctx) => {
      await ctx.reply("🤖 Bot opérationnel !");
    });
    
    bot.command("ping", async (ctx) => {
      await ctx.reply("🏓 pong!");
    });
    
    // Handler pour messages simples
    bot.on("message:text", async (ctx) => {
      const text = ctx.message.text;
      console.log("📱 Message reçu:", text);
      
      if (!text.startsWith('/')) {
        await ctx.reply("🤖 Bonjour ! Tapez /help pour les commandes.");
      }
    });
    
    // Gestion des erreurs
    bot.catch((err) => {
      console.error("🔥 Erreur bot:", err);
    });

    // 🔥 IMPORTANT: Initialiser le bot
    await bot.init();
    console.log("✅ Bot initialisé avec succès");
  }
  return bot;
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📍 Webhook reçu - Update ID:", body.update_id);
    
    const botInstance = await initializeBot();
    
    if (!botInstance) {
      console.error("❌ Bot non initialisé - BOT_TOKEN manquant");
      return NextResponse.json({ error: "Bot non configuré" }, { status: 500 });
    }
    
    // Traiter l'update
    await botInstance.handleUpdate(body);
    console.log("✅ Update traité avec succès");
    
    return NextResponse.json({ status: "ok" });
    
  } catch (error) {
    console.error("❌ Erreur webhook:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "Webhook running",
    timestamp: new Date().toISOString()
  });
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';