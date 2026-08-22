export type Category =
  | "food"
  | "travel"
  | "housing"
  | "entertainment"
  | "shopping"
  | "utilities"
  | "health"
  | "transport"
  | "education"
  | "business"
  | "other";

export const CATEGORIES: { value: Category; label: string; color: string }[] = [
  { value: "food", label: "Food & Dining", color: "#f97316" },
  { value: "travel", label: "Travel", color: "#3b82f6" },
  { value: "housing", label: "Housing", color: "#8b5cf6" },
  { value: "entertainment", label: "Entertainment", color: "#ec4899" },
  { value: "shopping", label: "Shopping", color: "#14b8a6" },
  { value: "utilities", label: "Utilities", color: "#eab308" },
  { value: "health", label: "Health", color: "#22c55e" },
  { value: "transport", label: "Transport", color: "#06b6d4" },
  { value: "education", label: "Education", color: "#a855f7" },
  { value: "business", label: "Business", color: "#64748b" },
  { value: "other", label: "Other", color: "#6b7280" },
];

export type AccountType = "checking" | "savings" | "credit" | "cash" | "business";

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  currency: string;
  createdAt: string;
}

export const ACCOUNT_TYPES: { value: AccountType; label: string }[] = [
  { value: "checking", label: "Checking" },
  { value: "savings", label: "Savings" },
  { value: "credit", label: "Credit Card" },
  { value: "cash", label: "Cash" },
  { value: "business", label: "Business" },
];

export type TaxStatus = "deductible" | "exempt" | "taxable" | "partial" | "none";

export interface TaxCode {
  id: string;
  code: string;
  label: string;
  description: string;
  status: TaxStatus;
  deductionPercent: number;
}

export const DEFAULT_TAX_CODES: TaxCode[] = [
  { id: "tx-none", code: "NONE", label: "Not Applicable", description: "No tax implication", status: "none", deductionPercent: 0 },
  { id: "tx-ded", code: "DED", label: "Fully Deductible", description: "100% tax deductible expense", status: "deductible", deductionPercent: 100 },
  { id: "tx-part50", code: "PART50", label: "50% Deductible", description: "Partially deductible (50%)", status: "partial", deductionPercent: 50 },
  { id: "tx-exempt", code: "EXEMPT", label: "Tax Exempt", description: "Exempt from sales/use tax", status: "exempt", deductionPercent: 0 },
  { id: "tx-taxable", code: "TAXABLE", label: "Taxable", description: "Subject to standard tax rate", status: "taxable", deductionPercent: 0 },
  { id: "tx-med", code: "MED", label: "Medical Deduction", description: "Qualifies as medical expense deduction", status: "deductible", deductionPercent: 100 },
  { id: "tx-bus", code: "BUS", label: "Business Expense", description: "Deductible business operating expense", status: "deductible", deductionPercent: 100 },
  { id: "tx-char", code: "CHAR", label: "Charitable", description: "Charitable contribution deduction", status: "deductible", deductionPercent: 100 },
  { id: "tx-meals", code: "MEALS", label: "Business Meals", description: "Business meals (50% deductible)", status: "partial", deductionPercent: 50 },
  { id: "tx-home", code: "HOME", label: "Home Office", description: "Home office deduction", status: "deductible", deductionPercent: 100 },
];

export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: Category;
  accountId: string;
  taxCodeId: string;
  date: string;
  notes: string;
  receiptRef: string;
  createdAt: string;
}

export interface Summary {
  total: number;
  byCategory: { category: Category; label: string; color: string; total: number; count: number }[];
  byAccount: { accountId: string; accountName: string; total: number; count: number }[];
  taxDeductibleTotal: number;
  taxExemptTotal: number;
  count: number;
}
