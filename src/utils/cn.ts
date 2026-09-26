export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number) {
  return `$${amount.toLocaleString('en-US')}`;
}

export function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const inD = new Date(checkIn);
  const outD = new Date(checkOut);
  const diff = outD.getTime() - inD.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}
