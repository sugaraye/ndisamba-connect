// app/api/webhook/route.js - VERSION COMPLÈTE
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

    // ==================== COMMANDES PRINCIPALES ====================

    bot.command("start", async (ctx) => {
      console.log("🔄 Commande /start reçue");
      await ctx.reply(
        `🎉 *Bienvenue sur SambaLearnBot !*\n\n*Écosystème complet d'éducation et de services :*\n\n🏫 *ENSEIGNEMENT SUPÉRIEUR*\n• IUJS - Licences & Masters\n• Ndi Samba Polytech - BTS & Cycles ingénieurs\n• E-learning - Formations en ligne\n\n🌍 *INTERNATIONAL*\n• Campus Latina Espagne\n• Certifications internationales\n• Programmes d'échanges\n\n🏥 *SANTÉ & BIEN-ÊTRE*\n• Centre Médical RIRCO\n• Médecine naturelle innovante\n\n💼 *SERVICES*\n• Logistique & transit\n• Conseil en management\n• Services juridiques\n\nTapez /help pour voir toutes les commandes disponibles !`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command(["help", "aide"], (ctx) => {
      ctx.reply(
        `*🆘 LISTE DES COMMANDES DISPONIBLES :*\n\n*🎓 ADMISSIONS & INFORMATIONS*\n/start - Démarrer le bot\n/apropos - Informations essentielles du Groupe\n/admissions - Procédure d'admission\n/filieres - Liste des filières disponibles\n/frais - Frais de scolarité\n/inscription - Lien direct d'inscription\n/orientation - Aide pour choisir une filière\n\n*📚 PROGRAMMES & FORMATIONS*\n/bts - BTS disponibles\n/licence - Licences pro & techno\n/master - Masters pro & techno\n/ingenieur - Cycle ingénieur\n/polytech - Parcours Ndi Samba Polytech\n/certifications - Certifications internationales\n/elearning - Plateforme e-learning\n\n*📄 DOCUMENTS & SERVICES*\n/attestations - Attestations, certificats, relevés\n/paiement - Modes de paiement\n/jobs - Opportunités, stages et emplois\n/support - Assistance technique\n/entites - Organes du Groupe et contacts\n\n*🤖 ASSISTANCE*\n/ask [question] - Poser une question à l'IA`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command(["apropos", "about"], (ctx) => {
      ctx.reply(
        `*🏛️ GROUPE NDI SAMBA FORMATION*\n\n*Notre Mission :*\nFormer les leaders de demain et offrir des services innovants pour le développement de l'Afrique.\n\n*Chiffres Clés :*\n• 12 entités spécialisées\n• 4 pays d'implantation  \n• 57+ années d'expérience\n• 300,000+ élèves et étudiants formés\n\n*Domaines d'expertise :*\n🎓 Enseignement Supérieur & Secondaire\n🏥 Santé & Médecine innovante\n🌍 International & E-learning\n💼 Services & Conseil\n\n*Direction :*\nRaymond Samba Ndi - Directeur Général`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("admissions", (ctx) => {
      ctx.reply(
        `*📝 PROCÉDURE D'ADMISSION*\n\n*Documents requis :*\n• Photocopie des diplômes\n• Relevés de notes\n• Extrait d'acte de naissance\n• 4 photos d'identité\n• Lettre de motivation\n\n*Procédure :*\n1. Dépôt de dossier en ligne ou sur place\n2. Étude du dossier par la commission\n3. Entretien de motivation\n4. Inscription définitive\n\n*Dates importantes :*\n• Rentrée : Septembre/Octobre\n• Inscriptions : Mars à Septembre\n• Tests d'entrée : Juillet-Août\n\n*Contact admissions :*\n📞 +237 689 18 43 39\n💬 https://wa.me/237689184339`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("attestations", (ctx) => {
      ctx.reply(
        `*📄 ATTESTATIONS & DOCUMENTS*\n\n*Documents disponibles :*\n• Attestation de scolarité\n• Certificat de fréquentation\n• Carte d'étudiant\n• Relevés de notes\n• Attestation de réussite\n\n*Procédure :*\n1. Remplir le formulaire en ligne\n2. Paiement des frais (si applicable)\n3. Retrait sous 48-72h\n\n*Contact service administratif :*\n📞 +237 670 30 53 14\n📧 administratif@groupendisambaformation.com\n\n*Urgence documents :*\n💬 https://wa.me/237670305314`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("bts", (ctx) => {
      ctx.reply(
        `*🎓 BTS DISPONIBLES*\n\n*NDI SAMBA POLYTECH :*\n• BTS Maintenance Industrielle\n• BTS Informatique & Réseaux\n• BTS Electrotechnique\n• BTS Commerce International\n• BTS Gestion des PME\n\n*DURÉE :* 2 ans\n*ADMISSION :* Baccalauréat ou équivalent\n\n*DÉBOUCHÉS :*\n• Entrée directe dans la vie active\n• Poursuite en Licence Professionnelle\n• Cycle ingénieur (avec prépa)\n\n*Plus d'infos :*\n📞 +237 689 18 43 39\n🌐 https://groupendisambaformation.com/polytech`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("certifications", (ctx) => {
      ctx.reply(
        `*🌍 CERTIFICATIONS INTERNATIONALES*\n\n*Disponibles :*\n• IELTS - Certification anglaise\n• SIELE - Certification espagnole\n• TOSA - Certification digitale\n• TOEIC - Anglais professionnel\n• DELF/DALF - Français langue étrangère\n\n*CENTRE AGGRÉÉ :*\n• Examens officiels reconnus mondialement\n• Sessions régulières\n• Préparation intensive disponible\n\n*Inscriptions :*\n📞 +237 678 13 43 26\n📧 certifications@groupendisambaformation.com\n\n*Plus d'infos :*\n🌐 https://groupendisambaformation.com/certifications`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("entites", (ctx) => {
      ctx.reply(
        `*🏢 ORGANES DU GROUPE*\n\n*ENSEIGNEMENT :*\n• IUJS - Enseignement supérieur\n• Ndi Samba Polytech - Formation technique\n• Enseignement Secondaire\n• Ndi Samba Online - E-learning\n\n*SANTÉ :*\n• Centre Médical RIRCO\n• Pharmacie Ngul Be Tara\n\n*INTERNATIONAL :*\n• Campus Latina Espagne\n• Agence de coopération internationale\n\n*SERVICES :*\n• Logistique & Transit\n• Cabinet juridique\n• Garage automobile\n• Agence immobilière\n\n*Contacts détaillés :*\n📞 Standard: +237 689 18 43 39\n🌐 https://groupendisambaformation.com/entites`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("elearning", (ctx) => {
      ctx.reply(
        `*💻 PLATEFORME E-LEARNING*\n\n*Accédez à :*\n🌐 https://elearning.groupendisambaformation.com\n\n*Formations disponibles :*\n• Cours en ligne asynchrones\n• Certifications professionnelles\n• Préparations aux examens\n• Formations linguistiques\n\n*Support technique :*\n📞 +237 696 16 49 32\n📧 support@groupendisambaformation.com\n\n*Problèmes de connexion :*\n💬 https://wa.me/237696164932\n\n*Identifiants perdus ?*\nContactez le support technique.`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("filieres", (ctx) => {
      ctx.reply(
        `*🎓 FILIÈRES DISPONIBLES*\n\n*ENSEIGNEMENT SUPÉRIEUR (IUJS) :*\n• Management & Gestion\n• Informatique & Réseaux\n• Commerce International\n• Ressources Humaines\n• Communication\n\n*FORMATION POLYTECHNIQUE :*\n• Maintenance Industrielle\n• Electrotechnique\n• Informatique Industrielle\n• Génie Civil\n• Energies Renouvelables\n\n*CYCLES :*\n• BTS (2 ans)\n• Licence (3 ans)\n• Master (2 ans)\n• Cycle Ingénieur (5 ans)\n\n*Guide des filières :*\n📞 Orientation: +237 689 18 43 39`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("frais", (ctx) => {
      ctx.reply(
        `*💵 FRAIS DE SCOLARITÉ*\n\n*ENSEIGNEMENT SUPÉRIEUR :*\n• BTS: 250,000 - 300,000 FCFA/an\n• Licence: 450,000 - 500,000 FCFA/an\n• Master: 550,000 - 700,000 FCFA/an\n\n*FORMATION POLYTECHNIQUE :*\n• BTS: 250,000 - 300,000 FCFA/an\n• Licence Pro: 450,000 - 500,000 FCFA/an\n• Master: 600,000 - 800,000 FCFA/an\n\n*FRAIS ANNEXES :*\n• Inscription: 25,000 - 50,000 FCFA\n• Carte d'étudiant: 5,000 FCFA\n\n*Bourses et facilités de paiement disponibles*`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("ingenieur", (ctx) => {
      ctx.reply(
        `*🔧 CYCLE INGÉNIEUR*\n\n*PARCOURS :*\n• 2 ans de classes préparatoires\n• 3 ans de spécialité ingénieur\n\n*SPÉCIALITÉS :*\n• Génie Informatique\n• Génie Electrique\n• Génie Mécanique\n• Génie Civil\n• Génie des Procédés\n\n*ADMISSION :*\n• Baccalauréat scientifique\n• Concours d'entrée\n• Entretien de motivation\n\n*DÉBOUCHÉS :*\n• Ingénieur en entreprise\n• Cadre supérieur\n• Entrepreneuriat\n• Poursuite en doctorat\n\n*Info prépa ingénieur :*\n📞 +237 689 18 43 39`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("inscription", (ctx) => {
      ctx.reply(
        `*📲 INSCRIPTION EN LIGNE*\n\n*Lien direct :*\n🌐 https://inscription.groupendisambaformation.com\n\n*Avantages :*\n• Formulaire 100% en ligne\n• Validation sous 48h\n• Paiement sécurisé\n• Confirmation immédiate\n\n*Documents à numériser :*\n• Diplômes et relevés\n• Extrait de naissance\n• Photos d'identité\n• Lettre de motivation\n\n*Assistance inscription :*\n📞 +237 689 18 43 39\n💬 https://wa.me/237689184339`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("jobs", (ctx) => {
      ctx.reply(
        `*💼 OPPORTUNITÉS & EMPLOIS*\n\n*Pour les étudiants :*\n• Stages en entreprise\n• Jobs étudiants\n• Alternance possible\n\n*Pour les diplômés :*\n• Offres d'emploi partenaires\n• Service d'insertion professionnelle\n• Réseau alumni\n\n*Plateforme carrière :*\n🌐 https://carriere.groupendisambaformation.com\n\n*Dépôt CV :*\n📧 recrutement@groupendisambaformation.com\n\n*Service orientation carrière :*\n📞 +237 670 30 53 14`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("licence", (ctx) => {
      ctx.reply(
        `*🎓 LICENCES PROFESSIONNELLES*\n\n*DOMAINES :*\n• Management & Gestion\n• Informatique & Digital\n• Commerce & Marketing\n• Ressources Humaines\n• Logistique & Transport\n\n*DURÉE :* 3 ans (dont stages)\n*ADMISSION :* Bac+2 (BTS, DUT, Licence 2)\n\n*SPÉCIFICITÉ :*\nFormation alternée avec stages en entreprise\n\n*DÉBOUCHÉS :*\n• Assistant manager\n• Chef de projet junior\n• Technicien supérieur\n• Responsable d'équipe\n\n*Guide des licences :*\n📞 +237 689 18 43 39`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("master", (ctx) => {
      ctx.reply(
        `*🎓 MASTERS PROFESSIONNELS*\n\n*SPÉCIALITÉS :*\n• Management Stratégique\n• Digital Marketing\n• Finance d'Entreprise\n• GRH & Transformation digitale\n• Logistique Internationale\n\n*DURÉE :* 2 ans\n*ADMISSION :* Licence ou équivalent\n\n*PROJET PROFESSIONNEL :*\n• Mémoire de fin d'études\n• Stages longs en entreprise\n• Projets tutorés\n\n*DÉBOUCHÉS :*\n• Cadre moyen/supérieur\n• Chef de service\n• Consultant\n• Entrepreneur\n\n*Brochure masters :*\n📞 +237 689 18 43 39`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("orientation", (ctx) => {
      ctx.reply(
        `*🧭 AIDE À L'ORIENTATION*\n\n*Service d'orientation :*\n• Bilan personnalisé\n• Tests d'aptitude\n• Conseils métiers\n• Projection carrière\n\n*CRITÈRES D'ORIENTATION :*\n• Profil académique\n• Compétences personnelles\n• Marché de l'emploi\n• Aspirations personnelles\n\n*RENDEZ-VOUS ORIENTATION :*\n📞 +237 689 18 43 39\n📧 orientation@groupendisambaformation.com\n\n*Guide des métiers :*\n🌐 https://groupendisambaformation.com/orientation`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("paiement", (ctx) => {
      ctx.reply(
        `*💳 MODES DE PAIEMENT*\n\n*OPTIONS DISPONIBLES :*\n• Mobile Money (Orange, MTN)\n• Virement bancaire\n• MAVIANCE QR Code\n• Espèces (sur place)\n• Carte bancaire (en ligne)\n\n*FACILITÉS :*\n• Paiement comptant (-20%)\n• Échelonnement 3 tranches\n• Paiement mensuel\n• Bourses sur dossier\n\n*COORDONNÉES BANCAIRES :*\n📞 Service financier: +237 670 30 53 14\n\n*Paiement en ligne sécurisé :*\n🌐 https://paiement.groupendisambaformation.com`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("polytech", (ctx) => {
      ctx.reply(
        `*🔧 NDI SAMBA POLYTECH*\n\n*FORMATION TECHNOLOGIQUE D'EXCELLENCE*\n\n*PROGRAMMES :*\n• BTS Techniques Industrielles\n• Licences Professionnelles\n• Masters Technologiques\n• Cycle Ingénieur\n\n*LABORATOIRES :*\n• Ateliers de maintenance\n• Salles informatiques\n• Laboratoires d'électrotechnique\n• Espaces projets\n\n*PARTENARIATS INDUSTRIELS :*\n• Entreprises locales et internationales\n• Stages garantis\n• Insertion professionnelle\n\n*Visite virtuelle :*\n🌐 https://groupendisambaformation.com/polytech\n\n*Contact Polytech :*\n📞 +237 689 18 43 39`,
        { parse_mode: "Markdown" }
      );
    });

    bot.command("support", (ctx) => {
      ctx.reply(
        `*🛠️ ASSISTANCE TECHNIQUE*\n\n*PROBLÈMES E-LEARNING :*\n• Connexion plateforme\n• Accès aux cours\n• Problèmes de paiement\n• Support technique\n\n*CONTACTS SUPPORT :*\n📞 Technique: +237 696 16 49 32\n📧 support@groupendisambaformation.com\n💬 WhatsApp: https://wa.me/237696164932\n\n*HORAIRES :*\nLun-Ven: 8h-18h\nSam: 9h-13h\n\n*URGENCE TECHNIQUE :*\nRéponse sous 2 heures ouvrées`,
        { parse_mode: "Markdown" }
      );
    });

    // ==================== COMMANDES DE TEST ====================

    bot.command("test", async (ctx) => {
      await ctx.reply("🤖 Bot opérationnel ! Toutes les commandes sont actives.");
    });

    bot.command("ping", async (ctx) => {
      await ctx.reply("🏓 pong!");
    });

    // ==================== GESTION DES ERREURS ====================

    bot.catch((err) => {
      console.error("🔥 Erreur bot:", err);
    });

    // Initialiser le bot
    await bot.init();
    console.log("✅ Bot initialisé avec toutes les commandes");
  }
  return bot;
}

// ==================== WEBHOOK HANDLER ====================

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📍 Webhook reçu - Update ID:", body.update_id);
    
    const botInstance = await initializeBot();
    
    if (!botInstance) {
      console.error("❌ Bot non initialisé - BOT_TOKEN manquant");
      return NextResponse.json({ error: "Bot non configuré" }, { status: 500 });
    }
    
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
    message: "Bot Ndi Samba avec toutes les commandes actives"
  });
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';