
/**
 * Drop the 'PM' from the string `s`.
 *
 * @sig String -> String
 * @param {string} s
 * @returns {string}
 */
function dropPM(s) {
  return s.replace('PM', '');
}

/**
 * Drop the 'AM' from the string `s`.
 *
 * @sig String -> String
 * @param {string} s
 * @returns {string}
 */
function dropAM(s) {
  return s.replace('AM', '');
}

/**
 * Adds 12 to the value of the first capturing group.
 *
 * @sig Any String -> Number
 * @param {Any} _m Not used, but part of replace callback signature.
 * @param {string} g1 The first capturing group.
 * @returns {string}
 *
 * @example
 * add12('...', '11');
 * //=> 23
 */
function add12(_m, g1) {
  return Number(g1) + 12;
}

/**
 * Converts a 12-hour time format to a 24-hour (military) format.
 *
 * @sig String -> String
 * @param {string} time
 */
function timeConv(time) {
  if (time.includes('AM')) {
    return dropAM(time.replace('12', '00'));
  }

  if (time.includes('PM')) {
    if (/^12/.test(time))
      return dropPM(time);

    return dropPM(time.replace(/([01][0-9])/, add12));
  }
}

export { timeConv };
