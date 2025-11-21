// app/api/webhook/route.js - VERSION CORRIGÉE
import { Bot } from "grammy";
import { OpenAI } from "openai";

const BOT_TOKEN = process.env.BOT_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Validation du BOT_TOKEN
if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN non configuré");
  throw new Error("BOT_TOKEN manquant - Configurez-le dans Vercel");
}

// Configuration OpenAI (si la clé est présente)
let openai = null;
if (OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });
  console.log("✅ OpenAI configuré");
} else {
  console.log("⚠️ OpenAI non configuré - Ajoutez OPENAI_API_KEY");
}

// ✅ UNE SEULE DÉCLARATION du bot
const bot = new Bot(BOT_TOKEN, {
  botInfo: {
    id: 5107090126,
    is_bot: true,
    first_name: "SambaLearnBot",
    username: "SambaLearnBot",
    can_join_groups: true,
    can_read_all_group_messages: false,
    supports_inline_queries: false
  },
  client: {
    timeout: 10000, // 10 secondes
  }
});

// Error handler global
bot.catch((err) => {
  console.error("🔥 Erreur GrammY:", err);
});

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

bot.command("start", (ctx) => {
  ctx.reply(
    `🎓 *Bienvenue au Groupe Ndi Samba Formation* 🏥

*Écosystème complet d'éducation et de services :*

🏫 *ENSEIGNEMENT*
• Enseignement Supérieur (IUJS)
• Formation polytechnique (Polytech)  
• Enseignement Secondaire
• E-learning (Ndi Samba Online)

🌍 *INTERNATIONAL*
• Campus Latina Espagne
• Programmes d'échanges
• Certifications internationales

🏥 *SANTÉ & BIEN-ÊTRE*
• Centre Médical RIRCO
• Médecine naturelle innovante
• Produits Ngul Be Tara

💼 *SERVICES*
• Logistique & transit international
• Conseil en management
• Services juridiques
• Services automobiles

🤖 *ASSISTANT IA*
Tapez /ask suivi de votre question pour une assistance intelligente !`,
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

  // Vérifier la longueur de la question
  if (question.length > 500) {
    return ctx.reply(
      "❌ Votre question est trop longue. Veuillez la simplifier en moins de 500 caractères.",
      { parse_mode: "Markdown" }
    );
  }

  // Message "typing"
  await ctx.api.sendChatAction(ctx.chat.id, "typing");
  
  const thinkingMsg = await ctx.reply("🤔 *Je réfléchis...*", { parse_mode: "Markdown" });

  try {
    const response = await getAIResponse(question);
    
    // Supprimer le message "Je réfléchis"
    await ctx.api.deleteMessage(ctx.chat.id, thinkingMsg.message_id);
    
    // Vérifier la longueur de la réponse
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
    `*🏛️ Groupe Ndi Samba Formation*

*Notre Histoire :*
Fondé par Joseph Ndi Samba, notre groupe perpétue une tradition d'excellence depuis plus de 50 ans dans l'éducation et les services.

*Notre Mission :*
Former les leaders de demain et offrir des services innovants pour le développement de l'Afrique.

*Notre Vision :*
Devenir le leader africain de l'éducation intégrée et des services multisectoriels.

*Chiffres Clés :*
• 12 entités spécialisées
• 4 pays d'implantation  
• 57+ années d'expérience
• 300,000+ élèves et étudiants formés

*Direction :*
Raymond Samba Ndi - Directeur Général`,
    { parse_mode: "Markdown" }
  );
});

bot.command("contact", (ctx) => {
  ctx.reply(
    `*📞 Contacts du Groupe Ndi Samba Formation*

*Siège Principal :*
📍 Mbalmayo, Cameroun

*Téléphones :*
📞 +237 689 18 43 39
📞 +237 670 30 53 14  
📞 +237 678 13 43 26

*Email :*
📧 infos@groupendisambaformation.com

*Site Web :*
🌐 https://groupendisambaformation.com

*Réseaux :*
💬 WhatsApp: +237 689 18 43 39
📱 Chaîne: https://whatsapp.com/channel/0029VbB3y355kg7AC372Hb2N

*Urgences Médicales RIRCO :*
🚨 +237 696 16 49 32 (24h/24)`,
    { parse_mode: "Markdown" }
  );
});

bot.command("filieres", (ctx) => {
  ctx.reply(
    `*🎓 Filiales et Programmes disponibles :*

*INSTITUT UNIVERSITAIRE JOSEPH NDI SAMBA*
• Licences en Management
• Licences en Informatique  
• Licence en GRH
• Licence en Commerce International
• Masters Professionnels

*NDI SAMBA POLYTECH*
• BTS Maintenance Industrielle
• BTS Informatique & Réseaux
• BTS Electrotechnique
• PREPA Ingenieur
• Licences Professionnelles & Licences Technologiques
• Masters Professionnels & Masters Technologiques

*ENSEIGNEMENT SECONDAIRE*
• Secondaire Général
• Programme Scientifique Renforcé
• Orientation Universitaire

*E-LEARNING*
• Formations en ligne
• Certifications professionnelles
• Preparations aux certifications de langues
• Cours à distance (licences, Masters)

Tapez /admissions pour la procédure d'inscription`,
    { parse_mode: "Markdown" }
  );
});

bot.command("admissions", (ctx) => {
  ctx.reply(
    `*📝 Procédure d'Admission*

*Documents requis :*
• Photocopie des diplômes
• Relevés de notes
• Extrait d'acte de naissance
• Photos d'identité
• Lettre de motivation

*Procédure :*
1. Dépôt de dossier en ligne ou sur place
2. Étude du dossier par la commission
3. Entretien de motivation
4. Inscription définitive

*Dates importantes :*
• Rentrée : Septembre pour le secondaire et Octobre-Novembre pour le supérieur
• Inscriptions : Mars à Septembre
• Tests d'entrée : Juillet-Août

*Lien d'inscription :*
🌐 https://ih3mdhp6.forms.app/formulaire-dinscription

*Contact admissions :*
📞 +237 689 18 43 39
💬 https://wa.me/237689184339`,
    { parse_mode: "Markdown" }
  );
});

bot.command("frais", (ctx) => {
  ctx.reply(
    `*💵 Frais de Scolarité 2024*

*ENSEIGNEMENT SUPÉRIEUR (IUJS)*
• BTS: 250,000 - 300,000 FCFA/an
• Licence: 450,000 - 500,000 FCFA/an
• Master: 550,000 - 700,000 FCFA/an
• Frais d'inscription: 50,000 FCFA

*ENSEIGNEMENT POLYTECHNIQUE*
• BTS: 250,000 - 300,000 FCFA/an
• Licence Pro: 450,000 - 500,000 FCFA/an
• Master: 600,000 - 800,000 FCFA/an
• Frais d'inscription: 25,000 FCFA

*E-LEARNING*
• Certifications: 75,000 - 200,000 FCFA
• Formations en ligne: tarifs variables

*Options de paiement :*
• Paiement comptant (20% réduction)
• Échelonnement sur 3 tranches
• Paiement mensuel possible
• Mobile Money, virement, MAVIANCE QR

*Bourses disponibles sur dossier*`,
    { parse_mode: "Markdown" }
  );
});

bot.command("inscription", (ctx) => {
  ctx.reply(
    `*📲 Inscription en Ligne*

Accédez directement à notre formulaire d'inscription :

🌐 *Lien direct :*
https://ih3mdhp6.forms.app/formulaire-dinscription

*Assistance inscription :*
📞 +237 689 18 43 39
💬 https://wa.me/237689184339

*Documents à préparer :*
• Diplômes et relevés de notes
• Extrait de naissance
• Photos d'identité
• Lettre de motivation

*Processus rapide :*
→ Formulaire en ligne
→ Validation sous 48h
→ Paiement sécurisé
→ Confirmation immédiate`,
    { parse_mode: "Markdown" }
  );
});

bot.command("rirco", (ctx) => {
  ctx.reply(
    `*🏥 Centre Médical RIRCO*

*Services Médicaux :*
• Consultations générales et spécialisées
• Médecine naturelle intégrative
• Laboratoire d'analyses
• Imagerie médicale
• Urgences 24h/24

*Innovations :*
• Ngul Be Tara (produit phare)
• Thé Mayi
• Digest-Comfort  
• Sleep-Nature

*Coordonnées :*
🚨 Urgences: +237 696 16 49 32
📞 Rendez-vous: +237 696 16 49 32
📍 Campus Ndi Samba, Yaoundé

*Produits disponibles sur place*
Tapez /sante pour plus d'infos`,
    { parse_mode: "Markdown" }
  );
});

// Ajout de la commande /sante manquante
bot.command("sante", (ctx) => {
  ctx.reply(
    `*🏥 Services de Santé RIRCO*

*Consultations :*
• Médecine générale
• Spécialités médicales
• Médecine naturelle intégrative
• Suivi de santé personnalisé

*Examens :*
• Laboratoire d'analyses
• Imagerie médicale
• Bilans de santé complets

*Produits Naturels :*
• Ngul Be Tara (spécialité maison)
• Thé Mayi (détoxification)
• Arthro-Soulage (articulations)
• Digest-Comfort (digestion)
• Sleep-Nature (sommeil)

*Urgences :*
🚨 +237 696 16 49 32 (24h/24)

*Rendez-vous :*
📞 +237 696 16 49 32
📍 Campus Ndi Samba, Yaoundé-Tropicana`,
    { parse_mode: "Markdown" }
  );
});

bot.command("help", (ctx) => {
  ctx.reply(
    `*🆘 Aide - Commandes disponibles :*

*🎓 ENSEIGNEMENT*
/start - Menu principal
/filieres - Programmes disponibles
/admissions - Procédure d'inscription
/frais - Frais de scolarité
/inscription - Lien inscription en ligne

*🤖 ASSISTANT IA*
/ask - Posez une question à l'IA

*🏥 SANTÉ RIRCO*
/rirco - Centre Médical RIRCO
/sante - Services médicaux

*🌍 INTERNATIONAL*
/certifications - Certifications internationales
/elearning - Plateforme en ligne

*💼 SERVICES*
/contact - Coordonnées complètes
/support - Assistance technique

*Tapez une commande ou utilisez le clavier*`,
    { parse_mode: "Markdown" }
  );
});

// ==================== GESTION DES MESSAGES ====================

bot.on("message:text", async (ctx) => {
  const text = ctx.message.text.toLowerCase();
  
  if (text.includes("urgence") || text.includes("urgent") || text === "🆘 urgence médicale") {
    await ctx.reply(
      `🚨 *URGENCE MÉDICALE - CENTRE RIRCO*\n\nAppelez immédiatement :\n*+237 696 16 49 32*\n\n• Service 24h/24\n• Équipe médicale permanente\n• Plateau technique complet\n• Ambulance sur appel`,
      { parse_mode: "Markdown" }
    );
  }
  else if (text === "🎓 enseignement") {
    await ctx.reply("Tapez /filieres pour voir nos programmes ou /admissions pour vous inscrire");
  }
  else if (text === "🏥 santé rirco") {
    await ctx.reply("Tapez /rirco pour les services médicaux ou contactez le +237 696 16 49 32");
  }
  else if (text === "🌍 international") {
    await ctx.reply("Tapez /certifications pour les programmes internationaux");
  }
  else if (text === "💼 services") {
    await ctx.reply("Tapez /contact pour tous nos services");
  }
  else if (text === "🤖 question ia") {
    await ctx.reply("Tapez /ask suivi de votre question pour une assistance intelligente !\n\nExemple : /ask Quels sont les horaires d'ouverture du centre médical ?");
  }
  else if (text === "📞 contact") {
    await ctx.reply("Tapez /contact pour nos coordonnées complètes");
  }
  else {
    await ctx.reply(
      `Merci pour votre message ! 🤖\n\nJe suis l'assistant du Groupe Ndi Samba Formation.\n\nTapez /help pour voir toutes les commandes disponibles ou /ask pour une question à l'IA.`,
      { parse_mode: "Markdown" }
    );
  }
});

// ==================== WEBHOOK HANDLER ====================

async function processUpdateAsync(update) {
  try {
    console.log("🤖 Début traitement update...");
    await bot.handleUpdate(update);
    console.log("✅ Update traité avec succès");
  } catch (error) {
    console.error("❌ Erreur traitement update:", error);
  }
}

export async function POST(req) {
  console.log("📍 Webhook appelé à:", new Date().toISOString());
  
  try {
    const update = await req.json();
    console.log("📱 Message reçu:", update?.message?.text || "Pas de texte");
    console.log("👤 De:", update?.message?.from?.first_name || "Inconnu");
    
    // 🔥 RÉPONDRE IMMÉDIATEMENT à Telegram
    const response = new Response("OK");
    
    // 🔥 TRAITEMENT ASYNCHRONE (après la réponse)
    setTimeout(async () => {
      try {
        await processUpdateAsync(update);
      } catch (asyncError) {
        console.error("💥 Erreur dans le traitement async:", asyncError);
      }
    }, 0);
    
    return response;

  } catch (err) {
    console.error("💥 ERREUR CRITIQUE dans POST:", err);
    return new Response("Error", { status: 500 });
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ 
      status: "Bot en ligne - Groupe Ndi Samba Formation",
      features: "Commandes + Assistant IA OpenAI",
      timestamp: new Date().toISOString()
    }), 
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    }
  );
}