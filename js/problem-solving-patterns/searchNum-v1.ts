/**
 * Returns the index of `x`; -1 if not found.
 *
 * @sig [Number] Number -> Number
 */
function searchNum(xs: number[], x: number): number {
  for (let i = 0; i < xs.length; ++i)
    if (xs[i] === x) return i;

  return -1;
}

export { searchNum };
