//
// tags: string substring loop find search
//

import {
  length,
} from "/src/tslib/index.ts";

/**
 * Count the number of times `sub` is found in `str`.
 *
 * If either string is empty, or if `sub` is longer than `str`, return 0.
 *
 * ASSUME: The inputs are lowercase strings.
 *
 * @sig String String -> Number
 */
export function countSubstrs(str: string, sub: string): number {
  let cnt = 0;

  for (let i = 0; i < length(str); ++i) {
    for (let j = 0; j < length(sub); ++j) {
      if (sub[j] !== str[i + j]) break; // <1>
      if (j === length(sub) - 1) ++cnt;
    }
  }

  return cnt;
}
