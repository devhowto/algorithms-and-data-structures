//
// tags: search loop sum window
//

/**
 * Finds the minimum subarray length that when summed is `>= n`.
 *
 * - T.C: `O(n²)`
 * - S.C: `O(1)`.
 *
 * @sig [Integer] Integer -> Integer
 */
function minSubArrLen(nums: number[], n: number): number {
  let l = 0;
  let r = 1;
  let subArrLen = 1;
  let sum = nums[0];

  while (l < nums.length) {
    if (sum >= n) return subArrLen;

    if (r === nums.length) {
      ++subArrLen;
      l = 0;
      r = subArrLen;

      sum = nums.slice(0, subArrLen).reduce((acc, x) => acc + x, 0);
      if (sum >= n) return subArrLen;

      if (subArrLen >= nums.length) return 0;

      continue;
    }

    ++l;

    sum = sum - nums[l - 1] + nums[r];

    ++r;
  }

  return 0;
}

export { minSubArrLen };
