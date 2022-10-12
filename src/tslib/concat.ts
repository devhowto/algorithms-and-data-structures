import { isStr } from "/src/tslib/index.ts";

/**
 * Concatenates two strings or two arrays together.
 *
 * @sig String String -> String
 * @sig [a] -> [a] -> [a]
 */
export function concat<
  XS extends unknown[],
  YS extends XS
>(xs: XS, ys: YS): [...XS, ...YS];
export function concat<
  S1 extends string,
  S2 extends string
>(xs: S1, ys: S2): `${S1}${S2}`;
export function concat<
  T1 extends string | unknown[],
  T2 extends string | unknown[]
>(xs: T1, ys: T2) {
  return (isStr(xs) && isStr(ys))
    ? xs.concat(ys)
    : [...xs, ...ys];
}
