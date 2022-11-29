//
// tags: recursion math sequence fibonacci
//

import {
  last,
  length,
} from "/src/tslib/index.ts";

/**
 * Returns the nth term of the Fibonacci sequence.
 *
 * ASSUME: `nth >= 1`.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(n)`.
 *
 * @sig Number -> Number
 */
export function fib(nth: number): number {
  const seq: number[] = [0, 1, 1];

  (function go(n: number): void {
    const len = length(seq);

    if (seq.length <= nth) {
      seq.push(seq[len - 2] + seq[len - 1]);
      go(n - 1);
    }
  })(nth);

  return last(seq);
}
