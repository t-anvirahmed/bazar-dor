const unitTranslations: Record<string, string> = {
  kg: "কেজি",
  g: "গ্রাম",
  liter: "লিটার",
  ml: "মিলিলিটার",
  piece: "টি",
  dozen: "ডজন",
  maund: "মণ",
  pound: "পাউন্ড",
  packet: "প্যাকেট",
};

export function toBanglaUnit(unit: string): string {
  return unitTranslations[unit.toLowerCase()] ?? unit;
}

export function toBanglaNumber(value: number | string): string {
  return new Intl.NumberFormat("bn-BD").format(Number(value));
}

export interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface PriceChange {
  dir: "up" | "down" | "stable";
  pct: number;
}

export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: PriceChange;
  markets: Market;
}
