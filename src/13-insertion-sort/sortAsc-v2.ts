//
// tags: algorithm sort insertion-sort
//

/**
 * Sorts an array in ascending order using the insertion sort algorithm.
 *
 * - T.C: (n²).
 * - S.C: O(1).
 *
 * @sig [Number] -> [Number]
 */
export function sortAsc(xs: number[]): number[] {
  let i, j;

  for (i = 1; i <= xs.length - 1; ++i) {
    const curr = xs[i];

    for (j = i - 1; j >= 0 && xs[j] > curr; --j)
      xs[j + 1] = xs[j];

    xs[j + 1] = curr;
  }

  return xs;
}
