import type { Category } from "./types";

interface ParsedExpense {
  amount: number | null;
  description: string;
  category: Category;
}

const CATEGORY_KEYWORDS: Record<string, Category> = {
  food: "food",
  lunch: "food",
  dinner: "food",
  breakfast: "food",
  groceries: "food",
  grocery: "food",
  restaurant: "food",
  coffee: "food",
  eat: "food",
  meal: "food",
  snack: "food",
  uber: "transport",
  lyft: "transport",
  taxi: "transport",
  gas: "transport",
  fuel: "transport",
  parking: "transport",
  bus: "transport",
  train: "transport",
  flight: "travel",
  hotel: "travel",
  airbnb: "travel",
  travel: "travel",
  trip: "travel",
  vacation: "travel",
  rent: "housing",
  mortgage: "housing",
  electric: "utilities",
  electricity: "utilities",
  water: "utilities",
  internet: "utilities",
  phone: "utilities",
  bill: "utilities",
  subscription: "entertainment",
  netflix: "entertainment",
  spotify: "entertainment",
  movie: "entertainment",
  concert: "entertainment",
  game: "entertainment",
  shopping: "shopping",
  clothes: "shopping",
  shoes: "shopping",
  amazon: "shopping",
  doctor: "health",
  pharmacy: "health",
  medicine: "health",
  dentist: "health",
  gym: "health",
  course: "education",
  class: "education",
  book: "education",
  tuition: "education",
  training: "education",
  client: "business",
  office: "business",
  software: "business",
  meeting: "business",
};

const WORD_NUMBERS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20,
  thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
  eighty: 80, ninety: 90, hundred: 100,
};

function extractAmount(text: string): number | null {
  // "$47.50" or "47.50 dollars" or "47 dollars"
  const dollarMatch = text.match(/\$?\s*(\d+(?:\.\d{1,2})?)\s*(?:dollars?|bucks?)?/i);
  if (dollarMatch) return parseFloat(dollarMatch[1]);

  // "forty seven fifty" → 47.50, "twenty bucks" → 20
  const words = text.toLowerCase().split(/\s+/);
  let total = 0;
  let found = false;

  for (const word of words) {
    const clean = word.replace(/[^a-z]/g, "");
    if (WORD_NUMBERS[clean] !== undefined) {
      if (clean === "hundred") {
        total = total === 0 ? 100 : total * 100;
      } else {
        total += WORD_NUMBERS[clean];
      }
      found = true;
    }
  }

  return found ? total : null;
}

function extractCategory(text: string): Category {
  const lower = text.toLowerCase();
  for (const [keyword, category] of Object.entries(CATEGORY_KEYWORDS)) {
    if (lower.includes(keyword)) return category;
  }
  return "other";
}

export function parseVoiceExpense(text: string): ParsedExpense {
  return {
    amount: extractAmount(text),
    description: text.charAt(0).toUpperCase() + text.slice(1),
    category: extractCategory(text),
  };
}
