//
// tags: search linear index
//

/**
 * Returns the index where `n` first appears in `xs`; else `-1`.
 *
 * Linear searching algorithm. Does NOT assume the input is sorted.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig [Number] -> Number
 */
export function searchNum(xs: number[], n: number): number {
  for (let idx = 0; idx < xs.length; ++idx)
    if (xs[idx] === n) return idx;

  return -1;
}

