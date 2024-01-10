export function formatedDateFromTimestamp(date: Date | number): string {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "short",
    day: "numeric",
  }).format(date);
}