export async function POST(req) {
  try {
    const update = await req.json();
    console.log("🔥 UPDATE REÇUE :", JSON.stringify(update, null, 2));

    await bot.handleUpdate(update);
    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Webhook Error :", err);
    return new Response("ERROR", { status: 500 });
  }
}
