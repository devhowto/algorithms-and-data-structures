import {
  assertEquals,
} from "/deps.ts";

import { isEmpty } from "/src/tslib/index.ts";

Deno.test("isEmpty()", async (t) => {
  await t.step("should return true", () => {
    assertEquals(isEmpty([]), true);
    assertEquals(isEmpty(new Array()), true);
    assertEquals(isEmpty(new Array(0)), true);
    assertEquals(isEmpty(""), true);
    assertEquals(isEmpty(new String()), true);
  });

  await t.step("should return false", () => {
    assertEquals(isEmpty([0]), false);
    assertEquals(isEmpty(" "), false);
    assertEquals(isEmpty(new String(" ")), false);
    assertEquals(isEmpty(new Array(1)), false);
  });
});
