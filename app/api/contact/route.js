import { NextResponse } from "next/server";

export async function POST(request) {
  // This API route is kept for fallback purposes
  // The contact form now uses EmailJS for direct email sending
  return NextResponse.json(
    {
      message: "Contact form now uses EmailJS for direct email delivery",
      status: "deprecated",
    },
    { status: 200 }
  );
}

export function GET() {
  return NextResponse.json({
    status: "Contact API - EmailJS integration active",
    version: "2.0",
  });
}
