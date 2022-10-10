import { assertEquals } from "/deps.ts";
import { isOdd } from "./isOdd.ts";

Deno.test("isOdd()", async (t) => {
  await t.step("should return true for 1, 3, -41, 1e3 - 1", () => {
    assertEquals(isOdd(1), true);
    assertEquals(isOdd(3), true);
    assertEquals(isOdd(-41), true);
    assertEquals(isOdd(1e3 - 1), true);
  });

  await t.step("should return false for 0, 2, -42, 1e3", () => {
    assertEquals(isOdd(0), false);
    assertEquals(isOdd(2), false);
    assertEquals(isOdd(-42), false);
    assertEquals(isOdd(1e3), false);
  });
});
