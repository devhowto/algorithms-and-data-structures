import {
  isStr,
} from './';

export function upcase(s) {
  if (!isStr(s))
    throw new TypeError("upcase(): input must be a string.");

  return s.toUpperCase();
}
