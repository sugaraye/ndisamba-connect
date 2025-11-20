import { Bot } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;

// Validation plus stricte
if (!BOT_TOKEN || BOT_TOKEN === "dummy-token") {
  console.error("❌ BOT_TOKEN non configuré dans les variables d'environnement");
  // Ne pas créer le bot si le token est invalide
  throw new Error("BOT_TOKEN manquant - Configurez-le dans Vercel");
}

const bot = new Bot(BOT_TOKEN, {
  // Timeout plus long pour les requêtes Telegram
  client: {
    timeout: 10000, // 10 secondes
    baseFetchConfig: {
      // Options supplémentaires pour fetch
    }
  }
});

// ==================== COMMANDES PRINCIPALES ====================

bot.command("start", (ctx) => {
  ctx.reply(
    `🎓 *Bienvenue au Groupe Ndi Samba Formation* 🏥

*Écosystème complet d'éducation et de services :*

🏫 *ENSEIGNEMENT*
• Enseignement Supérieur (IUJS)
• Formation Technique (Polytech)  
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
• Logistique internationale
• Conseil en management
• Services juridiques
• Services automobiles

Tapez une commande ou utilisez le menu pour explorer nos services !`,
    { 
      parse_mode: "Markdown",
      reply_markup: {
        keyboard: [
          [{ text: "🎓 Enseignement" }, { text: "🏥 Santé RIRCO" }],
          [{ text: "🌍 International" }, { text: "💼 Services" }],
          [{ text: "📞 Contact" }, { text: "🆘 Urgence Médicale" }]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    }
  );
});

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
• 50+ années d'expérience
• 10,000+ étudiants formés

*Direction :*
Raymond Samba Ndi - Directeur Général`,
    { parse_mode: "Markdown" }
  );
});

bot.command("contact", (ctx) => {
  ctx.reply(
    `*📞 Contacts du Groupe Ndi Samba Formation*

*Siège Principal :*
📍 Yaoundé, Cameroun

*Téléphones :*
📞 +237 689 18 43 39
📞 +237 670 30 53 14  
📞 +237 678 13 43 26

*Email :*
📧 infos@groupendisambaformation.com

*Site Web :*
🌐 https://ndisamba-connect.vercel.app

*Réseaux :*
💬 WhatsApp: +237 689 18 43 39
📱 Chaîne: https://whatsapp.com/channel/0029VbB3y355kg7AC372Hb2N

*Urgences Médicales RIRCO :*
🚨 +237 696 16 49 32 (24h/24)`,
    { parse_mode: "Markdown" }
  );
});

// ==================== SECTION ENSEIGNEMENT ====================

bot.command("filieres", (ctx) => {
  ctx.reply(
    `*🎓 Filiales et Programmes disponibles :*

*INSTITUT UNIVERSITAIRE JOSEPH NDI SAMBA*
• Licence en Management
• Licence en Informatique  
• Licence en Génie Civil
• Licence en Commerce International
• Masters Professionnels
• MBA Management

*NDI SAMBA POLYTECH*
• BTS Maintenance Industrielle
• BTS Informatique & Réseaux
• BTS Génie Civil
• BTS Électronique
• Licences Professionnelles

*ENSEIGNEMENT SECONDAIRE*
• Secondaire Général
• Programme Scientifique Renforcé
• Orientation Universitaire

*E-LEARNING*
• Formations en ligne
• Certifications professionnelles
• Cours à distance

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
• Rentrée : Septembre
• Inscriptions : Mars à Juillet
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

*ENSEIGNEMENT SUPÉRIEUR*
• Licence: 450,000 - 600,000 FCFA/an
• Master: 550,000 - 700,000 FCFA/an
• Frais d'inscription: 50,000 FCFA

*ENSEIGNEMENT TECHNIQUE*
• BTS: 400,000 - 550,000 FCFA/an
• Licence Pro: 500,000 - 650,000 FCFA/an

*E-LEARNING*
• Certifications: 75,000 - 200,000 FCFA
• Formations en ligne: tarifs variables

*Options de paiement :*
• Paiement comptant (5% réduction)
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

// ==================== SECTION SANTÉ RIRCO ====================

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
• Arthro-Soulage
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

// ==================== COMMANDES RAPIDES ====================

bot.command("help", (ctx) => {
  ctx.reply(
    `*🆘 Aide - Commandes disponibles :*

*🎓 ENSEIGNEMENT*
/start - Menu principal
/filieres - Programmes disponibles
/admissions - Procédure d'inscription
/frais - Frais de scolarité
/inscription - Lien inscription en ligne

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
      `🚨 *URGENCE MÉDICALE - CENTRE RIRCO*\n\nAppelez immédiatement :\n*${process.env.URGENCY_PHONE || "+237 696 16 49 32"}*\n\n• Service 24h/24\n• Équipe médicale permanente\n• Plateau technique complet\n• Ambulance sur appel`,
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
  else if (text === "📞 contact") {
    await ctx.reply("Tapez /contact pour nos coordonnées complètes");
  }
  else {
    await ctx.reply(
      `Merci pour votre message ! 🤖\n\nJe suis l'assistant du Groupe Ndi Samba Formation.\n\nTapez /help pour voir toutes les commandes disponibles ou utilisez le clavier pour naviguer.`,
      { parse_mode: "Markdown" }
    );
  }
});

// ==================== WEBHOOK HANDLER ====================

async function processUpdateAsync(update) {
  try {
    console.log("🤖 Début traitement update...");
    
    // Vérifier que le bot est initialisé
    if (!bot || !BOT_TOKEN || BOT_TOKEN === "dummy-token") {
      console.error("❌ Bot non initialisé - BOT_TOKEN manquant");
      return;
    }
    
    await bot.handleUpdate(update);
    console.log("✅ Update traité avec succès");
    
  } catch (error) {
    console.error("❌ Erreur traitement update:", error);
    console.error("Détails:", error.message);
  }
}

export async function POST(req) {
  console.log("📍 Webhook appelé à:", new Date().toISOString());
  
  // Vérifier rapidement le token
  if (!BOT_TOKEN || BOT_TOKEN === "dummy-token") {
    console.error("💥 BOT_TOKEN non configuré");
    return new Response("Server Error", { status: 500 });
  }
  
  try {
    const update = await req.json();
    console.log("📱 Message reçu:", update?.message?.text || "Pas de texte");
    console.log("👤 De:", update?.message?.from?.first_name || "Inconnu");
    
    // 🔥 RÉPONDRE IMMÉDIATEMENT à Telegram (dans les 3 secondes)
    const response = new Response("OK");
    
    // 🔥 TRAITEMENT ASYNCHRONE (après la réponse)
    // Utiliser setTimeout pour être sûr que la réponse parte d'abord
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
      timestamp: new Date().toISOString()
    }), 
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    }
  );
}