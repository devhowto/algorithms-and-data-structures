/**
 * Returns the last element of an array. Throws an exception if the
 * array is empty.
 *
 * @sig Array<T> -> T | Never
 */
export function last<T>(xs: T[]): T | never {
  if (xs.length === 0)
    throw new RangeError("last(): array cannot be empty.");

  return xs[xs.length - 1];
}
