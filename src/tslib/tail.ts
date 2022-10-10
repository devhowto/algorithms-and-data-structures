/**
 * Returns the array without its first element. Throws an exception if
 * the array is empty.
 *
 * Lisps and Schemes name this function `cdr`. Some other languages
 * call it `rest`.
 *
 * @sig Array<T> -> T | Never
 */
export function tail<T>(xs: T[]): T[] | never {
  if (xs.length === 0)
    throw new RangeError("tail(): array cannot be empty.");

  return xs.slice(1);
}
