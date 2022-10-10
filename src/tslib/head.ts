/**
 * Returns the first element of an array. Throws an exception if the
 * array is empty.
 *
 * Lisps and Schemes name this function `car`. Some other languages call
 * it `first`.
 *
 * @sig Array<T> -> T | Never
 */
export function head<T>(xs: T[]): T | never {
  if (xs.length === 0)
    throw new RangeError("head(): array cannot be empty.");

  return xs[0];
}

