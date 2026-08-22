import { NextResponse } from "next/server";
import { getAllTaxCodes } from "@/lib/store";

export async function GET() {
  return NextResponse.json(getAllTaxCodes());
}
