/**
 * Returns the nth number of the Fibonacci sequence.
 *
 * This solution uses memoization performance optimization. In this
 * case, we create a property `cache` on the `fib` function itself.
 *
 * ASSUME: `n` is >= 1.
 *
 * • T.C: O(n).
 * • S.C: O(n).
 *
 * @param {number} n
 * @return n.
 */
function fib(n) {
  fib.cache = fib.cache || {};
  var res;

  if (n === 1 || n === 2) return 1;

  if (fib.cache[n]) return fib.cache[n];

  res = fib(n - 2) + fib(n - 1);

  fib.cache[n] = res;

  return res;
}

console.log(fib(144));

export { fib };
