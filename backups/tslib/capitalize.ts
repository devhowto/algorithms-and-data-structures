import {
  head,
  tail,
  upcase,
} from "/src/tslib/index.ts";

/**
 * Uppercases the first char of the given string.
 *
 * @sig String -> String
 */
export function capitalize(s: string): string {
  return upcase(head(s)) + tail(s);
}
