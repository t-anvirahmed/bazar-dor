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
