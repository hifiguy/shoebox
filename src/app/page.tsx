"use client";

import { useCallback, useEffect, useState } from "react";
import type { Expense, Account, TaxCode, Summary, Category } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";
import { useVoiceInput } from "@/lib/use-voice-input";
import { parseVoiceExpense } from "@/lib/parse-voice-expense";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [taxCodes, setTaxCodes] = useState<TaxCode[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form state
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("other");
  const [accountId, setAccountId] = useState("");
  const [taxCodeId, setTaxCodeId] = useState("tx-none");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleVoiceResult = useCallback((text: string) => {
    const parsed = parseVoiceExpense(text);
    setDescription(parsed.description);
    setCategory(parsed.category);
    if (parsed.amount) setAmount(String(parsed.amount));
    setShowForm(true);
  }, []);

  const voice = useVoiceInput(handleVoiceResult);

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    setLoading(true);
    const [expRes, acctRes, taxRes, sumRes] = await Promise.all([
      fetch("/api/expenses"),
      fetch("/api/accounts"),
      fetch("/api/tax-codes"),
      fetch("/api/summary"),
    ]);
    setExpenses(await expRes.json());
    const accts = await acctRes.json();
    setAccounts(accts);
    setTaxCodes(await taxRes.json());
    setSummary(await sumRes.json());
    if (!accountId && accts.length) setAccountId(accts[0].id);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    await fetch("/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: parseFloat(amount),
        description,
        category,
        accountId,
        taxCodeId,
        date,
        notes,
      }),
    });

    setAmount("");
    setDescription("");
    setCategory("other");
    setTaxCodeId("tx-none");
    setDate(new Date().toISOString().split("T")[0]);
    setNotes("");
    setShowForm(false);
    setSubmitting(false);
    loadAll();
  }

  async function handleDelete(id: string) {
    await fetch(`/api/expenses?id=${id}`, { method: "DELETE" });
    loadAll();
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-sm text-zinc-400">
        Loading...
      </div>
    );
  }

  const selectClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100";
  const inputClass = selectClass;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8">
      {/* Voice + Add bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Budget Tracker
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Track expenses, categorize spending, manage tax deductions
          </p>
        </div>
        <div className="flex gap-3">
          {voice.supported && (
            <button
              onClick={voice.toggle}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                voice.listening
                  ? "bg-red-600 text-white animate-pulse"
                  : "border border-zinc-300 text-zinc-600 hover:border-emerald-400 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-300"
              }`}
            >
              <MicIcon />
              {voice.listening ? "Listening..." : "Voice"}
            </button>
          )}
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            + Add Expense
          </button>
        </div>
      </div>

      {/* Voice transcript feedback */}
      {voice.transcript && (
        <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          Heard: &ldquo;{voice.transcript}&rdquo;
        </div>
      )}

      {/* Add expense form */}
      {showForm && (
        <form
          onSubmit={handleAdd}
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            New Expense
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Amount ($) *</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Description *</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What did you spend on?"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Category *</label>
              <select value={category} onChange={(e) => setCategory(e.target.value as Category)} className={selectClass}>
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Account</label>
              <select value={accountId} onChange={(e) => setAccountId(e.target.value)} className={selectClass}>
                {accounts.map((a) => (
                  <option key={a.id} value={a.id}>{a.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Tax Code</label>
              <select value={taxCodeId} onChange={(e) => setTaxCodeId(e.target.value)} className={selectClass}>
                {taxCodes.map((t) => (
                  <option key={t.id} value={t.id}>{t.code} — {t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">Notes</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Optional notes or receipt reference"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Save Expense"}
            </button>
          </div>
        </form>
      )}

      {/* Summary cards */}
      {summary && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard label="Total Spent" value={`$${summary.total.toFixed(2)}`} />
          <SummaryCard label="Expenses" value={String(summary.count)} />
          <SummaryCard label="Tax Deductible" value={`$${summary.taxDeductibleTotal.toFixed(2)}`} accent="emerald" />
          <SummaryCard label="Tax Exempt" value={`$${summary.taxExemptTotal.toFixed(2)}`} accent="blue" />
        </div>
      )}

      {/* Category breakdown */}
      {summary && summary.byCategory.length > 0 && (
        <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Spending by Category
          </h3>
          <div className="mt-3 space-y-2">
            {summary.byCategory.map((cat) => (
              <div key={cat.category} className="flex items-center gap-3">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="w-32 text-sm text-zinc-700 dark:text-zinc-300">
                  {cat.label}
                </span>
                <div className="flex-1">
                  <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        backgroundColor: cat.color,
                        width: `${(cat.total / summary.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <span className="w-20 text-right text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  ${cat.total.toFixed(2)}
                </span>
                <span className="w-12 text-right text-xs text-zinc-400">
                  {cat.count}x
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Account breakdown */}
      {summary && summary.byAccount.length > 0 && (
        <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Spending by Account
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {summary.byAccount.map((acct) => (
              <div
                key={acct.accountId}
                className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-xs text-zinc-400">{acct.accountName}</p>
                <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  ${acct.total.toFixed(2)}
                </p>
                <p className="text-xs text-zinc-400">{acct.count} expenses</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expense list */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Recent Expenses
        </h3>
        {expenses.length === 0 ? (
          <div className="mt-4 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center text-sm text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900">
            No expenses yet. Add one or use voice input!
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            {expenses.map((exp) => {
              const cat = CATEGORIES.find((c) => c.value === exp.category);
              const acct = accounts.find((a) => a.id === exp.accountId);
              const tc = taxCodes.find((t) => t.id === exp.taxCodeId);
              return (
                <div
                  key={exp.id}
                  className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: cat?.color || "#6b7280" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.description}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      {cat?.label || exp.category}
                      {acct ? ` · ${acct.name}` : ""}
                      {tc && tc.id !== "tx-none" ? ` · ${tc.code}` : ""}
                      {exp.notes ? ` · ${exp.notes}` : ""}
                    </p>
                  </div>
                  <span className="text-xs text-zinc-400">{exp.date}</span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    ${exp.amount.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    className="text-xs text-zinc-300 hover:text-red-500 dark:text-zinc-600 dark:hover:text-red-400"
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "emerald" | "blue";
}) {
  const colorMap = {
    emerald: "text-emerald-600 dark:text-emerald-400",
    blue: "text-blue-600 dark:text-blue-400",
  };
  const valueColor = accent
    ? colorMap[accent]
    : "text-zinc-900 dark:text-zinc-100";

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-xs font-medium text-zinc-400">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${valueColor}`}>{value}</p>
    </div>
  );
}

function MicIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}
