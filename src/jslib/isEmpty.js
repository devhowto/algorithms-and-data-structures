import { isStr, isArr } from './';

/**
 * Checks whether the `xs` is an empty array or string.
 *
 * @sig [a] -> Boolean
 */
export function isEmpty(xs) {
  if (!isStr(xs) && !isArr(xs))
    throw new TypeError("isEmpty(): input must be an array or string.");

  return xs.length === 0;
}
