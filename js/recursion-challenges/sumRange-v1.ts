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
 * @sig [Number] [Number = 0] -> Number
 */
function sumRange(n: number, acc: number = 0): number {
  if (n === 0) return acc;
  return n + sumRange(n - 1, acc);
}

export { sumRange };
