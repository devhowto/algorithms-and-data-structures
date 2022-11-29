//
// tags: recursion sum range
//

/**
 * Sum all integers from 1 to x, inclusive.
 *
 * ASSUME: `x >= 1`.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(1)`.
 *
 * @sig Number -> Number
 */
function sumFrom1To(x: number): number {
  if (x === 1) return 1; // <1>
  return x + sumFrom1To(x - 1); // <2>
}

export { sumFrom1To };
