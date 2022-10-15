/**
 * Checks whether an array or string is empty.
 *
 * @sig Array | String -> Boolean
 */
export function isEmpty<T>(xs: readonly []): boolean;
export function isEmpty(xs: ""): boolean;
export function isEmpty(xs: string): boolean;
export function isEmpty<T>(xs: readonly T[]): boolean;
export function isEmpty<T>(
  xs: readonly [] | "" | readonly T[] | string,
): boolean;
export function isEmpty<T>(
  xs: readonly [] | "" | readonly T[] | string,
): boolean {
  return xs.length === 0;
}
