import {
  isEmpty,
} from "/src/tslib/index.ts";

/**
 * Returns the first element of an array or string. Throws an exception
 * if the input is empty.
 *
 * Lisps and Schemes name this function `car`. Some other languages call
 * it `first`.
 *
 * @sig [a] -> a | Never
 * @sig String -> String
 */
export function head(str: ""): never;
export function head(xs: readonly []): never;
export function head(str: string): string;
export function head<T>(xs: T[]): T;
export function head<T>(
  xs: readonly [] | "" | readonly T[] | string,
): T | string | never;
export function head<T>(
  xs: readonly [] | "" | readonly T[] | string,
): T | string | never {
  if (isEmpty(xs))
    throw new RangeError("head(): input cannot be empty.");

  return xs[0];
}

