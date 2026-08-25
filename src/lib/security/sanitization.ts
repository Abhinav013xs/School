/* eslint-disable no-control-regex */
/**
 * Sanitizes user input string by stripping null bytes and dangerous control characters
 * while preserving legitimate unicode names, punctuation, and multi-line message formats.
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/\0/g, "") // Remove null bytes
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove ASCII control characters
    .trim();
}
