/**
 * Count unique values in the input array of numbers.
 *
 * ASSUME: The input is sorted and does not contain empty slots.
 *
 * @sig [Number] -> Number
 */
function countUniqVals(nums: number[]): number {
  if (nums.length === 0) return 0;

  // <1>
  let i = 0, count = 1;

  for (; i < nums.length - 1; ++i) {
    if (nums[i] !== nums[i + 1])
      ++count; // <2>
  }

  return count;
}

export { countUniqVals };
