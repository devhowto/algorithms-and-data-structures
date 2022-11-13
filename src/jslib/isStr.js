import { isNil } from './';

export function isStr(val) {
  return !isNil(val)
    && typeof val === "string"
    || (typeof val === Object && val instanceof String);
}
