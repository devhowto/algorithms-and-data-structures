/**
 * Return pair of ints that sum to 0.
 *
 * ASSUME: The array is sorted.
 *
 * This solution uses the multiple pointers approach.
 *
 * @param ints An array of SORTED integers.
 * @returns The pair first pair that sum to 0 or undefined.
 */
function sumToZero(ints: number[]): [number, number] | undefined {
  if (ints.length < 2) return undefined;

  let l = 0;
  let r = ints.length - 1;
  let sum;

  //
  // Could be ‘l < r’ as well.
  //
  while (l !== r) { // <1>
    sum = ints[l] + ints[r];

    if (sum === 0) {
      return [ints[l], ints[r]]; // <2>
    }

    if (sum < 0)
      ++l;
    else
      --r;
  }
}

export  { sumToZero };
