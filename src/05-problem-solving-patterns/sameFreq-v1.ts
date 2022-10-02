/**
 * Returns `true` if each element in `xs` has a matching squared element
 * in `ys`; `false` otherwise. Order doesn't matter. Frequency matters.
 *
 * Time complexity: O(n²).
 * Space complexity: O(1).
 *
 * [Number] [Number] -> boolean
 */
function same(xs: number[], ys: number[]): boolean {
  if (xs.length !== ys.length) return false;

  for (let i = 0; i < xs.length; ++i) {
    const foundIndex = ys.indexOf(xs[i] ** 2);
    if (foundIndex === -1) return false;
    ys.splice(foundIndex, 1); // <1>
  }

  return true;
}

export { same };
