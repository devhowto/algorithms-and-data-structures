//
// tags: algorithm sort bubble-sort
//

function swap<T>(xs: T[], idx1: number, idx2: number): void {
  [xs[idx1], xs[idx2]] = [xs[idx2], xs[idx1]];
}

/**
 * Sorts an array in ascending order using the bubble sort algorithm.
 *
 * This is the naivest approach that always loops from beginning to end
 * unnecessarily.
 *
 * - T.C: O(n²).
 * - S.C: O(1).
 *
 * @sig [Number] -> [Number]
 */
export function sortAsc<T>(xs: T[]): T[] {
  const len = xs.length;

  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len; ++j) {
      if (xs[j] > xs[j + 1])
        swap(xs, j, j + 1);
    }
  }

  return xs;
}
