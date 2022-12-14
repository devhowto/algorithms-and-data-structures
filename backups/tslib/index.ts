export {
  englishAlphabetLower,
  englishAlphabetUpper,
} from "./alphabet.ts";

export const log: Console["log"] = console.log.bind(console);

export { add } from "./add.ts";
export { isEven } from "./isEven.ts";
export { isOdd } from "./isOdd.ts";

export const floor = Math.floor.bind(Math);

export { isStr } from "./isStr.ts";
export { isNum } from "./isNum.ts";
export const isArr = Array.isArray.bind(Array);

export { keys } from "./keys.ts";

export { upcase } from "./upcase.ts";
export { downcase } from "./downcase.ts";
export { capitalize } from "./capitalize.ts";

export { length } from "./length.ts";
export { isEmpty } from "./isEmpty.ts";
export { head } from "./head.ts";
export { tail } from "./tail.ts";
export { last } from "./last.ts";
export { concat } from "./concat.ts";
export { append } from "./append.ts";
