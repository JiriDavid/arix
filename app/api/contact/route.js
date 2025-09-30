import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Dummy handler: in production this would forward to a CRM or email service
  return NextResponse.json({ success: true, received: body }, { status: 200 });
}

export function GET() {
  return NextResponse.json({ status: "ready" });
}
