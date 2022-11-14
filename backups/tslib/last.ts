import {
  isEmpty,
} from "/src/tslib/index.ts";

/**
 * Returns the last element of an array. Throws an exception if the
 * array is empty.
 *
 * @sig Array<T> -> T | Never
 */
export function last(xs: ""): never;
export function last(xs: readonly []): never;
export function last(xs: string): string;
export function last<T>(xs: readonly T[]): T;
export function last<T>(
  xs: "" | readonly [] | string | readonly T[]
): T | string | never {
  if (isEmpty(xs))
    throw new RangeError("last(): input cannot be empty.");

  return xs[xs.length - 1];
}
