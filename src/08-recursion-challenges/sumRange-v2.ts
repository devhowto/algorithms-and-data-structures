//
// tags: recursion math sum range
//

/**
 * Sums all numbers from 1 to `n`, inclusive.
 *
 * ASSUME: `n >= 0`.
 *
 * - T.C: `O(n)`
 * - S.C: `O(1)`.
 *
 * @sig Number -> Number
 */
function sumRange(n: number): number {
  return n === 0
    ? 0
    : n + sumRange(n - 1);
}

export { sumRange };
