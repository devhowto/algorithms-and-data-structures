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
function filterOdds(
  xs: number[],
  acc: number[] = [],
): number[] {
  if (xs.length === 0) return acc;
  if (xs[0] % 2 !== 0) acc.push(xs[0]);
  return filterOdds(xs.slice(1), acc);
}

export { filterOdds };
