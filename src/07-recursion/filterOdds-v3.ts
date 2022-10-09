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
  let arr: number[] = [];

  if (xs.length === 0) return arr;

  if (xs[0] % 2 !== 0) arr.push(xs[0]);

  arr = arr.concat(filterOdds(xs.slice(1)));

  return arr;
}

export { filterOdds };
