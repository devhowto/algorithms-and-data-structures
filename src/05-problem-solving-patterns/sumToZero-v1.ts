/**
 * Return pair of ints that sum to 0.
 *
 * NOTE: The array must be sorted.
 *
 * @param ints An array of SORTED integers.
 * @returns
 */
function sumToZero(ints: number[]): number[] | undefined {
  for (let i = 0; i < ints.length / 2; ++i) {
    for (let j = i + 1; j < ints.length; ++j) {
      if (ints[i] + ints[j] === 0) {
        return [ints[i], ints[j]];
      }
    }
  }
}

export { sumToZero };
