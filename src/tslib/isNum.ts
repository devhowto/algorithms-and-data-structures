/**
 * Checks whether the value is a number.
 *
 * @sig a -> Boolean
 */
export function isNum(val: unknown): val is number {
  return typeof val === "number" && !isNaN(val);
}
