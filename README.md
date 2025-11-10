# NdiSamba Connect (Telegram + OpenAI, Next.js + Vercel)

Bot Telegram intelligent pour NDI SAMBA POLYTECH, déployé sur Vercel via Next.js (App Router).

## 🚀 Démarrage rapide

1. **Installer les dépendances**
```bash
npm install
```

2. **Configurer les variables d'environnement**
- En local, copiez `.env.example` en `.env.local` et remplissez :
```
BOT_TOKEN=ton_token_telegram
OPENAI_API_KEY=ta_cle_openai
```
- Sur **Vercel → Project → Settings → Environment Variables** : ajoutez les mêmes variables pour `Production` (+ `Preview`).

3. **Lancer en local**
```bash
npm run dev
```
Visitez: http://localhost:3000/api/webhook

4. **Déployer sur Vercel**
- Connectez ce repo à Vercel et déployez.

5. **Définir le webhook Telegram**
Remplacez `<TOKEN>` par votre token et `<APP_URL>` par votre domaine Vercel:
```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=<APP_URL>/api/webhook
```
Vérifier:
```
https://api.telegram.org/bot<TOKEN>/getWebhookInfo
```

6. **Tester**
Dans Telegram, envoyez un message à votre bot. Le bot répondra en utilisant OpenAI (`gpt-4o-mini`).

## 🧩 Tech
- Next.js 14 (App Router)
- node-telegram-bot-api
- OpenAI SDK
- Vercel (runtime nodejs pour l'API route)

## 🛠 Notes
- L'instance du bot et d'OpenAI est gérée en singleton (via `globalThis`) pour éviter la recréation à chaque appel du webhook.
- Le webhook DOIT pointer vers `/api/webhook`.
