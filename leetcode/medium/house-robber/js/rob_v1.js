const log = console.log.bind(console);
const max = Math.max.bind(Math);

function rob(nums) {
  const len = nums.length,
       memo = [];
  let curMaxIdx;

  if (len === 0) return 0;
  if (len === 1) return nums[0];
  if (len === 2) return max(nums[0], nums[1]);

  memo[0] = nums[0];
  memo[1] = max(nums[0], nums[1]);

  for (curMaxIdx = 2; curMaxIdx < len; ++curMaxIdx)
    memo[curMaxIdx] = max(
      memo[curMaxIdx - 1],
      nums[curMaxIdx] + memo[curMaxIdx - 2],
    );

  return memo[curMaxIdx - 1];
}

log(rob([3]));
//=> 3

log(rob([3, 1]));
//=> 3

log(rob([3, 4]));
//=> 4

log(rob([2, 5, 4]));
//=> 6

log(rob([1, 2, 3, 1]));
//=> 4

log(rob([2, 7, 9, 3, 1]));
