//
// tags: recursion math sequence fibonacci
//

import {
 length,
} from "/src/tslib/index.ts";

/**
 * Returns the nth term of the Fibonacci sequence.
 *
 * ASSUME: `nth >= 1`.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(1)`.
 *
 * @sig Number -> Number
 */
export function fib(nth: number): number {
  if ([0, 1, 2].includes(nth)) return 1;
  return fib(nth - 1) + fib(nth - 2);
}
//
// Change the condition to `nth <= 2` to automatically
// handle numbers less than 0 and avoid an infinite loop.
//
