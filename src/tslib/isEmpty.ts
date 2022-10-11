/**
 * Checks whether an array or string is empty.
 *
 * @sig Array | String -> Boolean
 */
export function isEmpty(xs: unknown[] | string | String): boolean {
  return xs.length === 0;
}
