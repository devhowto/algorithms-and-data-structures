//
// tags: search loop sort multiple-pointer
//

/**
 * NOTE: The solution from the instructor with some of my own “touch” 🤣
 * (I did change some syntax, some variable names, etc.)He first sorts
 * the array in order to make it possible to move both pointers.
 *
 * @sig Number... -> Boolean
 */
function areThereDups(...args: number[]): boolean {
  ////
  // ‘>’ doesn't work in V8 anymore for this sort thing.
  //
  // args.sort((a, b) => a > b);
  //
  args.sort((a, b) => a - b);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start++] === args[next++])
      return true;
  }

  return false;
}

export { areThereDups };
