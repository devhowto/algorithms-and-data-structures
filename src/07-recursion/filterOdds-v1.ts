//
// tags: recursion list filter
//

/**
 * Returns only the odd numbers from xs.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(n)`.
 *
 * @sig [Number] -> [Number]
 */
function filterOdds(xs: number[]): number[] {
  const odds: number[] = [];

  (function go(nums: number[]): void {
    if (nums.length === 0) return;
    if (nums[0] % 2 !== 0) {
      odds.push(nums[0]);
      go(nums.slice(1));
    }
  })(xs);

  return odds;
}

export { filterOdds };
