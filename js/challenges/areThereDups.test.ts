import { assertEquals } from "/deps.ts";
import { areThereDups } from "./areThereDups-v4.ts";

Deno.test("areThereDups()", async (t) => {
  await t.step("should return false when there are no dups", () => {
    assertEquals(areThereDups(1, 2, 3), false);
  });

  await t.step("should return true when there are duplicates", () => {
    assertEquals(areThereDups(1, 2, 1), true);
    assertEquals(areThereDups(1, 2, 3, -1, -3 + 2), true);
  });
});
