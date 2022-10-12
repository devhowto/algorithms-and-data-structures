//
// tags: typescript type-guard predicate string
//

/**
 * Type predicate to check whether `val` is a string.
 *
 * @sig Unknown -> Boolean
 */
export function isStr(val: unknown): val is string {
  return (typeof val === "string" || val instanceof String);
}
