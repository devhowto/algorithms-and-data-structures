import { assertEquals } from "/deps.ts";
import { sumRange } from "./sumRange-v3.ts";

Deno.test("sumRange()", async (t) => {
  await t.step("should return the correct sum", () => {
    assertEquals(sumRange(0), 0);
    assertEquals(sumRange(1), 1);
    assertEquals(sumRange(2), 1 + 2);
    assertEquals(sumRange(3), 1 + 2 + 3);
    assertEquals(sumRange(4), 1 + 2 + 3 + 4);
    assertEquals(sumRange(7), 1 + 2 + 3 + 4 + 5 + 6 + 7);
  });
});
