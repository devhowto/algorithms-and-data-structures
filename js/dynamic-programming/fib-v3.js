/**
 * Returns the nth number of the Fibonacci sequence.
 *
 * This solution uses memoization performance optimization. In this
 * case, we simply use a `memo` accumulator varaible as the second
 * parameter to the function.
 *
 * Note that `memo` is a sparse array, as we store the computed fib of a
 * number in an index for that number. It could be an object with `n`
 * as key, instead of `n` as the index array.
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
  if (n === 1 || n === 2) return 1;

  if (memo[n] !== undefined) return memo[n];

  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);

  return memo[n];
}

console.log(fib(144));

export { fib };

//
// We could replace the first condition with something simpler:
//
//   if (n <= 2) return 1;
//
// It would also prevent infinite loop if `n` is less than 1.
//
