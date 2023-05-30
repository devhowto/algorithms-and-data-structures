/**
 * Returns the nth number of the Fibonacci sequence.
 *
 * Non-optimized solution.
 *
 * ASSUME: `n` is >= 1.
 *
 * • T.C: O(n²).
 *
 * @param {number} n
 * @return n.
 */
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 2) + fib(n - 1);
}

const log = console.log.bind(console);

log(fib(45));

export { fib };
