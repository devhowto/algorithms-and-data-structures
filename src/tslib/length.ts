/**
 * Gets the length of an array.
 *
 * @sig Array -> Number
 */
export function length<T>(xs: T[] | string): number {
  return xs.length;
}
