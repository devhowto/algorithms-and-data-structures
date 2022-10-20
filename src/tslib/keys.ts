/**
 * A better-typed wrapper around `Object.keys()`.
 *
 * @sig {k: v} -> [k]
 */
export function keys<
  T extends Record<string, unknown>
>(obj: T): Array<keyof T> {
  return Object(obj) === obj
    ? (Object.keys(obj) as Array<keyof T>)
    : [];
}
