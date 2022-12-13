/**
 * Counts how many times the largest integer shows up in the input.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig [Int] -> Int
 */
function birthdayCakeCandles(candles) {
  var max = -Infinity;
  var cnt = 0;

  for (var cur of candles)
    max = Math.max(cur, max);

  for (var j = 0; j < candles.length; ++j)
    if (candles[j] === max) ++cnt;

  return cnt;
}

export { birthdayCakeCandles };
