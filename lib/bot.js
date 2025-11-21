import { Bot } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN manquant");
}

export const bot = new Bot(BOT_TOKEN, {
  botInfo: {
    id: 5107090126,
    is_bot: true,
    first_name: "SambaLearnBot",
    username: "SambaLearnBot"
  }
});