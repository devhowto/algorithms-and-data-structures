//
// tags: search loop sum window
//

/**
 * Finds the minimum subarray length that when summed is `>= n`.
 *
 * Solution from the instructor.
 *
 * - T.C: `O(n²)`
 * - S.C: `O(1)`.
 *
 * @sig [Integer] Integer -> Integer
 */
function minSubArrLen(nums: number[], n: number): number {
  let sum = 0;
  let l = 0;
  let r = 0;
  let minLen = Infinity;

  while (l < nums.length) {
    if (sum < n && r < nums.length) { // <1>
      sum += nums[r];
      r++;
    }
    else if (sum >= n) { // <2>
      minLen = Math.min(minLen, r - l);
      sum -= nums[l];
      l++;
    }
    else break; // <3>
  }

  return minLen === Infinity ? 0 : minLen;
}

export { minSubArrLen };
