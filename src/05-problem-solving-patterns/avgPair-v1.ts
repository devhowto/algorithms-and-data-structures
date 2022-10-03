//
// tags: search average loop
//

/**
 * Checks if a pair of values in arr equals the given average.
 *
 * Solution using the multiple pointers approach.
 *
 * - Time complexity: `O(n)`.
 * - Space complexity: `O(1)`.
 *
 * @sig [Number] Number -> Boolean
 */
function avgPair(arr: number[], targetAvg: number): boolean {
  if (arr.length === 0) return false;

  let l: number = 0,
      r: number = arr.length - 1,
      avg: number;

  while (l < r) {
    avg = (arr[l] + arr[r]) / 2;

    if (avg === targetAvg) return true;
    if (avg < targetAvg) ++l;
    else --r;
  }

  return false;
}

export { avgPair };
