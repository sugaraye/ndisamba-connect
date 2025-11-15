export const runtime = "nodejs";

export async function POST(req) {
  console.log("🔥 WEBHOOK FONCTIONNE 🔥");
  return new Response("OK");
}


export async function GET() {
  console.log("👀 GET webhook appelé");
  return new Response("TEST GET OK");
}
