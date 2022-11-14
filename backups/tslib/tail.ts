/**
 * Returns the input without its first element. Throws an exception if
 * the input is empty.
 *
 * Lisps and Schemes name this function `cdr`. Some other languages
 * call it `rest`.
 *
 * @sig Array<T> -> T | Never
 */
export function tail(xs: ""): never;
export function tail(xs: readonly []): never;
export function tail(xs: string): string;
export function tail<T>(xs: T[]): T[];
export function tail<T>(
  xs: "" | readonly T[] | T[] | string,
): T | string | never;
export function tail<T>(
  xs: "" | [] | readonly T[] | string,
): T[] | string | never {
  if (xs.length === 0)
    throw new RangeError("tail(): input cannot be empty.");

  return xs.slice(1);
}
