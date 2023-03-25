/**
 * Returns the nth number of the Fibonacci sequence.
 *
 * This solution is optimized by using the “tabulation” approach.
 *
 * ASSUME: `n` is >= 1.
 *
 * • T.C: O(n).
 * • S.C: O(n).
 *
 * @param {number} n
 * @param {Array<number>} [memo=[]]
 * @return {number}
 */
function fib(n, memo = []) {
  var fibs = [0, 1, 1],
      i;

  if (n <= 2) return 1;

  for (i = 3; i <= n; ++i)
    fibs[i] = fibs[i - 1] + fibs[i - 2];

  return fibs[n];
}

console.log(fib(144));

export { fib };
