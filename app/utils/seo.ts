/**
 * Truncate meta content to a maximum length.
 */
export function ensureLength(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text
}
