import {
  isEmpty,
  isArr,
  isStr,
} from './';

/**
 * Takes the first element of an array or string.
 *
 * ECMAScript uses UTF-16 encoding, which causes some string-related
 * operations not work as expected. For example:
 *
 *   '💩'.length
 *   // → 2
 *
 *   '💩'[0]
 *   // → '�'
 *
 * So this function works for 1 and 2-byte strings only. 3 and 4-byte
 * strings will break.
 */
export function head(xs) {
  if (!isArr(xs) && !isStr(xs) || isEmpty(xs))
    throw new TypeError("head(): input must be a non-empty array or string");

  return xs[0];
}
