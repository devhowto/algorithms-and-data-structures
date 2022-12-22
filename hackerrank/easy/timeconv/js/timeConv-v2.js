import {
  pipe,
  replace,
  includes,
  test,
} from 'ramda';

var subst12With00 = replace('12', '00');

/**
 * Drop either 'AM' or 'PM' from the string `s`.
 *
 * @sig String -> String
 * @param {string} s
 * @returns {string}
 */
var dropMeridien = replace(/(AM|PM)/, '');

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

var add12toPM = replace(/([01][0-9])/, add12);

var includesAM = includes('AM');
var includesPM = includes('PM');
var startsWith12 = test(/^12/);

/**
 * Converts a 12-hour time format to a 24-hour (military) format.
 *
 * @sig String -> String
 * @param {string} time
 */
function timeConv(time) {
  if (includesAM(time))
    return pipe(subst12With00, dropMeridien)(time);

  if (includesPM(time)) {
    if (startsWith12(time))
      return dropMeridien(time);

    return pipe(add12toPM, dropMeridien)(time);
  }
}

export { timeConv };
