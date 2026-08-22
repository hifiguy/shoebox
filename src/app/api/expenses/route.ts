import { NextRequest, NextResponse } from "next/server";
import { getAllExpenses, addExpense, deleteExpense } from "@/lib/store";

export async function GET() {
  return NextResponse.json(getAllExpenses());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, description, category, accountId, taxCodeId, date, notes, receiptRef } = body;

    if (!amount || !description || !category) {
      return NextResponse.json(
        { error: "Amount, description, and category are required" },
        { status: 400 }
      );
    }

    const expense = addExpense({
      amount: Number(amount),
      description,
      category,
      accountId: accountId || "acc-cash",
      taxCodeId: taxCodeId || "tx-none",
      date: date || new Date().toISOString().split("T")[0],
      notes: notes || "",
      receiptRef: receiptRef || "",
    });

    return NextResponse.json(expense, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  const deleted = deleteExpense(id);
  if (!deleted) {
    return NextResponse.json({ error: "Expense not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
