//
// tags: recursion math sum range
//

/**
 * Sums all numbers from 1 to `n`, inclusive.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(1)`.
 *
 * @sig Number -> Number
 */
function sumRange(n: number): number {
  let total = 0;

  (function run(x) {
    if (x === 0) return total;
    total += x;
    run(x - 1);
  })(n);

  return total;
}

export { sumRange };
