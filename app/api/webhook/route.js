// app/api/webhook/route.js - VERSION ULTRA SIMPLE
import { NextResponse } from "next/server";

// 🔥 NE JAMAIS importer ou initialiser pendant le build
let bot = null;

async function initializeBot() {
  if (!bot && process.env.BOT_TOKEN) {
    // Import dynamique pour éviter les erreurs de build
    const { Bot } = await import('grammy');
    bot = new Bot(process.env.BOT_TOKEN);
    
    // Commandes minimales
    bot.command("start", async (ctx) => {
      await ctx.reply("🎉 Bienvenue sur SambaLearnBot !");
    });
    
    bot.command("test", async (ctx) => {
      await ctx.reply("🤖 Bot opérationnel !");
    });
    
    bot.catch((err) => console.error("Bot error:", err));
  }
  return bot;
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📍 Webhook reçu - Update ID:", body.update_id);
    
    const botInstance = await initializeBot();
    
    if (botInstance) {
      // Traiter sans attendre
      botInstance.handleUpdate(body).catch(console.error);
    } else {
      console.error("❌ Bot non initialisé");
    }
    
    return NextResponse.json({ status: "ok" });
    
  } catch (error) {
    console.error("❌ Erreur webhook:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
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