/**
 * Count unique values in the input array of numbers.
 *
 * ASSUME: The input is sorted and does not contain empty slots.
 *
 * @sig [Number] -> Number
 */
function countUniqVals(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0, j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) // <1>
      nums[++i] = nums[j]; // <2>

    ++j;
  }

  // <3>
  return i + 1;
}

export { countUniqVals };
