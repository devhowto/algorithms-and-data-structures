//
// tags: recursion array concat
//

/**
 * Flattens an array.
 *
 * This is a solution from Colt Steele.
 *
 * - T.C: O(n).
 * - S.C: O(n).
 *
 * @sig Array -> Array
 */
export function flatten<T>(xs: T[]): T[] {
  let flattened: T[] = [];

  for (let i = 0; i < xs.length; ++i) {
    const currX = xs[i];

    if (Array.isArray(currX))
      flattened = flattened.concat(flatten(currX)); // <1>
    else
      flattened.push(currX); // <2>
  }

  return flattened;
}
