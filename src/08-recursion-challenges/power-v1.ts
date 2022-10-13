//
// tags: recursion math
//

/**
 * Raises `b` to the `e` power.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(1)`.
 *
 * @sig Number Number -> Number
 */
export function power(b: number, e: number): number {
  if (e === 0) return 1;
  return b * power(b, e - 1);
}
