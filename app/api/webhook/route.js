// app/api/webhook/route.js - VERSION CORRIGÉE
import { NextResponse } from "next/server";
import { bot } from "../../lib/bot.js";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// ✅ UNE SEULE DÉCLARATION openai
let openai = null;
if (OPENAI_API_KEY) {
  const { OpenAI } = await import("openai");
  openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });
  console.log("✅ OpenAI configuré");
} else {
  console.log("⚠️ OpenAI non configuré");
}

// ==================== FONCTION OPENAI ====================

async function getAIResponse(question) {
  if (!openai) {
    return `🤖 *Assistant IA*\n\nL'intelligence artificielle n'est pas configurée pour le moment.\n\n📞 Contactez-nous directement :\n• Admissions: +237 689 18 43 39\n• Urgences: +237 696 16 49 32\n• Email: infos@groupendisambaformation.com`;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: `Tu es l'assistant expert du Groupe Ndi Samba Formation. 
INFORMATIONS SUR LE GROUPE :
• Enseignement supérieur (IUJS) - Licences, Masters
• Formation polytechnique (Polytech) - BTS, Licences techno & pro, Masters techno & pro
• Centre médical RIRCO - Médecine, urgences 24h/24
• Agence internationale - Espagne, échanges
• E-learning - Formations en ligne
• Services - Logistique, conseil, juridique

TU DOIS :
• Répondre en français de manière professionnelle
• Être concis et utile (max 400 mots)
• Proposer des contacts si besoin
• Utiliser le format Markdown pour la lisibilité
• Rester dans le contexte éducation/santé/services

Si tu ne sais pas, oriente vers les contacts officiels.`
        },
        { 
          role: "user", 
          content: question 
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
    
  } catch (error) {
    console.error("❌ Erreur OpenAI:", error);
    return `🤖 *Assistant IA*\n\nDésolé, je rencontre une difficulté technique.\n\n📞 Contactez-nous directement :\n• Admissions: +237 689 18 43 39\n• Urgences médicales: +237 696 16 49 32\n• Email: infos@groupendisambaformation.com`;
  }
}

// ==================== COMMANDES PRINCIPALES ====================

// ✅ CORRECTION: Commande start avec syntaxe correcte
bot.command("start", async (ctx) => {
  console.log("🔄 Commande /start reçue");
  
  await ctx.reply(
    `🎉 *Bienvenue sur SambaLearnBot !*\n\n*Écosystème complet d'éducation et de services :*\n\n🏫 *ENSEIGNEMENT*\n• Enseignement Supérieur (IUJS)\n• Formation polytechnique (Polytech)  \n• Enseignement Secondaire\n• E-learning (Ndi Samba Online)\n\n🌍 *INTERNATIONAL*\n• Campus Latina Espagne\n• Programmes d'échanges\n• Certifications internationales\n\n🏥 *SANTÉ & BIEN-ÊTRE*\n• Centre Médical RIRCO\n• Médecine naturelle innovante\n• Produits Ngul Be Tara\n\n💼 *SERVICES*\n• Logistique & transit international\n• Conseil en management\n• Services juridiques\n• Services automobiles\n\n🤖 *ASSISTANT IA*\nTapez /ask suivi de votre question pour une assistance intelligente !`,
    { 
      parse_mode: "Markdown",
      reply_markup: {
        keyboard: [
          [{ text: "🎓 Enseignement" }, { text: "🏥 Santé RIRCO" }],
          [{ text: "🌍 International" }, { text: "💼 Services" }],
          [{ text: "🤖 Question IA" }, { text: "📞 Contact" }],
          [{ text: "🆘 Urgence Médicale" }]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    }
  );
  console.log("✅ Réponse /start envoyée");
});

// ==================== COMMANDE IA ====================

bot.command("ask", async (ctx) => {
  const question = ctx.message.text.replace("/ask", "").trim();
  
  if (!question) {
    return ctx.reply(
      `🤖 *Assistant IA*\n\nPosez-moi une question sur :\n• Les programmes de formation\n• Les admissions\n• Les services médicaux\n• Les frais de scolarité\n• Les inscriptions\n• Tout autre sujet\n\n*Exemple :* /ask Quels sont les délais d'inscription pour la rentrée ?`,
      { parse_mode: "Markdown" }
    );
  }

  if (question.length > 500) {
    return ctx.reply(
      "❌ Votre question est trop longue. Veuillez la simplifier en moins de 500 caractères.",
      { parse_mode: "Markdown" }
    );
  }

  await ctx.api.sendChatAction(ctx.chat.id, "typing");
  const thinkingMsg = await ctx.reply("🤔 *Je réfléchis...*", { parse_mode: "Markdown" });

  try {
    const response = await getAIResponse(question);
    await ctx.api.deleteMessage(ctx.chat.id, thinkingMsg.message_id);
    
    if (response.length > 4096) {
      await ctx.reply(response.substring(0, 4090) + "...", { parse_mode: "Markdown" });
      await ctx.reply("📝 *Suite de la réponse...*\n\nPour plus d'informations, contactez-nous directement.", { parse_mode: "Markdown" });
    } else {
      await ctx.reply(response, { parse_mode: "Markdown" });
    }
    
  } catch (error) {
    console.error("Erreur commande /ask:", error);
    await ctx.api.deleteMessage(ctx.chat.id, thinkingMsg.message_id);
    await ctx.reply(
      "❌ Désolé, une erreur s'est produite. Contactez-nous directement au +237 689 18 43 39",
      { parse_mode: "Markdown" }
    );
  }
});

// ==================== COMMANDES EXISTANTES ====================

bot.command("about", (ctx) => {
  ctx.reply(
    `*🏛️ Groupe Ndi Samba Formation*\n\n*Notre Histoire :*\nFondé par Joseph Ndi Samba, notre groupe perpétue une tradition d'excellence depuis plus de 50 ans dans l'éducation et les services.\n\n*Notre Mission :*\nFormer les leaders de demain et offrir des services innovants pour le développement de l'Afrique.\n\n*Notre Vision :*\nDevenir le leader africain de l'éducation intégrée et des services multisectoriels.\n\n*Chiffres Clés :*\n• 12 entités spécialisées\n• 4 pays d'implantation  \n• 57+ années d'expérience\n• 300,000+ élèves et étudiants formés\n\n*Direction :*\nRaymond Samba Ndi - Directeur Général`,
    { parse_mode: "Markdown" }
  );
});

bot.command("contact", (ctx) => {
  ctx.reply(
    `*📞 Contacts du Groupe Ndi Samba Formation*\n\n*Siège Principal :*\n📍 Mbalmayo, Cameroun\n\n*Téléphones :*\n📞 +237 689 18 43 39\n📞 +237 670 30 53 14  \n📞 +237 678 13 43 26\n\n*Email :*\n📧 infos@groupendisambaformation.com\n\n*Site Web :*\n🌐 https://groupendisambaformation.com\n\n*Réseaux :*\n💬 WhatsApp: +237 689 18 43 39\n📱 Chaîne: https://whatsapp.com/channel/0029VbB3y355kg7AC372Hb2N\n\n*Urgences Médicales RIRCO :*\n🚨 +237 696 16 49 32 (24h/24)`,
    { parse_mode: "Markdown" }
  );
});

bot.command("filieres", (ctx) => {
  ctx.reply(
    `*🎓 Filiales et Programmes disponibles :*\n\n*INSTITUT UNIVERSITAIRE JOSEPH NDI SAMBA*\n• Licences en Management\n• Licences en Informatique  \n• Licence en GRH\n• Licence en Commerce International\n• Masters Professionnels\n\n*NDI SAMBA POLYTECH*\n• BTS Maintenance Industrielle\n• BTS Informatique & Réseaux\n• BTS Electrotechnique\n• PREPA Ingenieur\n• Licences Professionnelles & Licences Technologiques\n• Masters Professionnels & Masters Technologiques\n\n*ENSEIGNEMENT SECONDAIRE*\n• Secondaire Général\n• Programme Scientifique Renforcé\n• Orientation Universitaire\n\n*E-LEARNING*\n• Formations en ligne\n• Certifications professionnelles\n• Preparations aux certifications de langues\n• Cours à distance (licences, Masters)\n\nTapez /admissions pour la procédure d'inscription`,
    { parse_mode: "Markdown" }
  );
});

bot.command("admissions", (ctx) => {
  ctx.reply(
    `*📝 Procédure d'Admission*\n\n*Documents requis :*\n• Photocopie des diplômes\n• Relevés de notes\n• Extrait d'acte de naissance\n• Photos d'identité\n• Lettre de motivation\n\n*Procédure :*\n1. Dépôt de dossier en ligne ou sur place\n2. Étude du dossier par la commission\n3. Entretien de motivation\n4. Inscription définitive\n\n*Dates importantes :*\n• Rentrée : Septembre pour le secondaire et Octobre-Novembre pour le supérieur\n• Inscriptions : Mars à Septembre\n• Tests d'entrée : Juillet-Août\n\n*Lien d'inscription :*\n🌐 https://ih3mdhp6.forms.app/formulaire-dinscription\n\n*Contact admissions :*\n📞 +237 689 18 43 39\n💬 https://wa.me/237689184339`,
    { parse_mode: "Markdown" }
  );
});

bot.command("frais", (ctx) => {
  ctx.reply(
    `*💵 Frais de Scolarité 2024*\n\n*ENSEIGNEMENT SUPÉRIEUR (IUJS)*\n• BTS: 250,000 - 300,000 FCFA/an\n• Licence: 450,000 - 500,000 FCFA/an\n• Master: 550,000 - 700,000 FCFA/an\n• Frais d'inscription: 50,000 FCFA\n\n*ENSEIGNEMENT POLYTECHNIQUE*\n• BTS: 250,000 - 300,000 FCFA/an\n• Licence Pro: 450,000 - 500,000 FCFA/an\n• Master: 600,000 - 800,000 FCFA/an\n• Frais d'inscription: 25,000 FCFA\n\n*E-LEARNING*\n• Certifications: 75,000 - 200,000 FCFA\n• Formations en ligne: tarifs variables\n\n*Options de paiement :*\n• Paiement comptant (20% réduction)\n• Échelonnement sur 3 tranches\n• Paiement mensuel possible\n• Mobile Money, virement, MAVIANCE QR\n\n*Bourses disponibles sur dossier*`,
    { parse_mode: "Markdown" }
  );
});

// ... (gardez le reste de vos commandes existantes) ...

// ==================== WEBHOOK HANDLER ====================

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📍 Webhook appelé - Update ID:", body.update_id);
    
    // 🔥 IMPORTANT: Ne pas await pour répondre rapidement à Telegram
    bot.handleUpdate(body).catch(console.error);
    
    // Répondre immédiatement à Telegram
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