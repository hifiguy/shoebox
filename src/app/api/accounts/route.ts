import { NextRequest, NextResponse } from "next/server";
import { getAllAccounts, addAccount } from "@/lib/store";

export async function GET() {
  return NextResponse.json(getAllAccounts());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, type, currency } = body;

    if (!name || !type) {
      return NextResponse.json(
        { error: "Name and type are required" },
        { status: 400 }
      );
    }

    const account = addAccount({
      name,
      type,
      currency: currency || "USD",
    });

    return NextResponse.json(account, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
