var minCostClimbingStairs = function (cost, minCostStore = {}) {
  const costLength = cost.length;

  minCostStore[0] = cost[0];
  minCostStore[1] = cost[1];

  for (let i = 2; i < costLength; i++) {
    minCostStore[i] =
      cost[i] + Math.min(minCostStore[i - 1], minCostStore[i - 2]);
  }
  console.log("tes mini", minCostStore);

  return Math.min(minCostStore[costLength - 1], minCostStore[costLength - 2]);
};

log(minCostClimbingStairs([3, 7, 2, 4, 9, 1]));

//
// Similar problem:
// • https://leetcode.com/problems/house-robber/
//
