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
  return e === 0
    ? 1
    : b * power(b, e - 1);
}

