/**
 * Checks whether `val` is an object.
 *
 * @remarks
 * Checks if the passed parameter is really an object and not an array
 * or null.
 *
 * @sig a -> Boolean
 * @param val - The value to check.
 * @returns A boolean indicating if `val` is an object.
 */
function isObj(val) {
  return val !== null
    && !Array.isArray(val)
    && typeof val === 'object';
}

export { isObj };
