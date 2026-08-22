import {
  type Expense,
  type Account,
  type TaxCode,
  type Summary,
  CATEGORIES,
  DEFAULT_TAX_CODES,
} from "./types";

const seedAccounts: Account[] = [
  { id: "acc-checking", name: "Main Checking", type: "checking", currency: "USD", createdAt: "2026-08-01T00:00:00Z" },
  { id: "acc-credit", name: "Visa Card", type: "credit", currency: "USD", createdAt: "2026-08-01T00:00:00Z" },
  { id: "acc-cash", name: "Cash", type: "cash", currency: "USD", createdAt: "2026-08-01T00:00:00Z" },
];

const seedExpenses: Expense[] = [
  {
    id: "exp-1",
    amount: 47.5,
    description: "Grocery run at Publix",
    category: "food",
    accountId: "acc-checking",
    taxCodeId: "tx-none",
    date: "2026-08-18",
    notes: "",
    receiptRef: "",
    createdAt: "2026-08-18T14:30:00Z",
  },
  {
    id: "exp-2",
    amount: 120.0,
    description: "Monthly internet bill",
    category: "utilities",
    accountId: "acc-checking",
    taxCodeId: "tx-home",
    date: "2026-08-15",
    notes: "Home office portion deductible",
    receiptRef: "",
    createdAt: "2026-08-15T09:00:00Z",
  },
  {
    id: "exp-3",
    amount: 35.0,
    description: "Uber to airport",
    category: "transport",
    accountId: "acc-credit",
    taxCodeId: "tx-bus",
    date: "2026-08-14",
    notes: "Client meeting travel",
    receiptRef: "",
    createdAt: "2026-08-14T06:45:00Z",
  },
  {
    id: "exp-4",
    amount: 89.99,
    description: "New running shoes",
    category: "shopping",
    accountId: "acc-credit",
    taxCodeId: "tx-none",
    date: "2026-08-12",
    notes: "",
    receiptRef: "",
    createdAt: "2026-08-12T16:20:00Z",
  },
  {
    id: "exp-5",
    amount: 62.0,
    description: "Team lunch meeting",
    category: "food",
    accountId: "acc-credit",
    taxCodeId: "tx-meals",
    date: "2026-08-11",
    notes: "Business meal with client",
    receiptRef: "",
    createdAt: "2026-08-11T12:30:00Z",
  },
  {
    id: "exp-6",
    amount: 15.0,
    description: "Netflix subscription",
    category: "entertainment",
    accountId: "acc-checking",
    taxCodeId: "tx-none",
    date: "2026-08-10",
    notes: "",
    receiptRef: "",
    createdAt: "2026-08-10T00:00:00Z",
  },
];

let accounts: Account[] = [...seedAccounts];
let expenses: Expense[] = [...seedExpenses];
let taxCodes: TaxCode[] = [...DEFAULT_TAX_CODES];

// --- Accounts ---

export function getAllAccounts(): Account[] {
  return [...accounts];
}

export function getAccountById(id: string): Account | undefined {
  return accounts.find((a) => a.id === id);
}

export function addAccount(data: Omit<Account, "id" | "createdAt">): Account {
  const account: Account = {
    ...data,
    id: `acc-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  accounts.push(account);
  return account;
}

// --- Tax Codes ---

export function getAllTaxCodes(): TaxCode[] {
  return [...taxCodes];
}

export function getTaxCodeById(id: string): TaxCode | undefined {
  return taxCodes.find((t) => t.id === id);
}

export function addTaxCode(data: Omit<TaxCode, "id">): TaxCode {
  const code: TaxCode = { ...data, id: `tx-${Date.now()}` };
  taxCodes.push(code);
  return code;
}

// --- Expenses ---

export function getAllExpenses(): Expense[] {
  return [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getExpenseById(id: string): Expense | undefined {
  return expenses.find((e) => e.id === id);
}

export function addExpense(data: Omit<Expense, "id" | "createdAt">): Expense {
  const expense: Expense = {
    ...data,
    id: `exp-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  expenses.push(expense);
  return expense;
}

export function deleteExpense(id: string): boolean {
  const before = expenses.length;
  expenses = expenses.filter((e) => e.id !== id);
  return expenses.length < before;
}

// --- Summary ---

export function getSummary(startDate?: string, endDate?: string): Summary {
  let filtered = getAllExpenses();

  if (startDate) {
    filtered = filtered.filter((e) => e.date >= startDate);
  }
  if (endDate) {
    filtered = filtered.filter((e) => e.date <= endDate);
  }

  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  const catMap = new Map<string, { total: number; count: number }>();
  for (const e of filtered) {
    const existing = catMap.get(e.category) || { total: 0, count: 0 };
    catMap.set(e.category, {
      total: existing.total + e.amount,
      count: existing.count + 1,
    });
  }

  const byCategory = CATEGORIES.filter((c) => catMap.has(c.value)).map((c) => ({
    category: c.value,
    label: c.label,
    color: c.color,
    ...catMap.get(c.value)!,
  })).sort((a, b) => b.total - a.total);

  const acctMap = new Map<string, { total: number; count: number }>();
  for (const e of filtered) {
    const existing = acctMap.get(e.accountId) || { total: 0, count: 0 };
    acctMap.set(e.accountId, {
      total: existing.total + e.amount,
      count: existing.count + 1,
    });
  }

  const byAccount = Array.from(acctMap.entries()).map(([accountId, data]) => ({
    accountId,
    accountName: getAccountById(accountId)?.name || accountId,
    ...data,
  })).sort((a, b) => b.total - a.total);

  let taxDeductibleTotal = 0;
  let taxExemptTotal = 0;

  for (const e of filtered) {
    const tc = getTaxCodeById(e.taxCodeId);
    if (!tc) continue;
    if (tc.status === "deductible") {
      taxDeductibleTotal += e.amount * (tc.deductionPercent / 100);
    } else if (tc.status === "partial") {
      taxDeductibleTotal += e.amount * (tc.deductionPercent / 100);
    } else if (tc.status === "exempt") {
      taxExemptTotal += e.amount;
    }
  }

  return {
    total,
    byCategory,
    byAccount,
    taxDeductibleTotal,
    taxExemptTotal,
    count: filtered.length,
  };
}
