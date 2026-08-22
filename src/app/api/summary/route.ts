import { NextRequest, NextResponse } from "next/server";
import { getSummary } from "@/lib/store";

export async function GET(request: NextRequest) {
  const startDate = request.nextUrl.searchParams.get("start") || undefined;
  const endDate = request.nextUrl.searchParams.get("end") || undefined;

  return NextResponse.json(getSummary(startDate, endDate));
}
