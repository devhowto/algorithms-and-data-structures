import { assertEquals } from "/deps.ts";
import { indexOf } from "./indexOf-v2.ts";

Deno.test("indexOf()", async (t) => {
  await t.step("empty array", () => {
    assertEquals(indexOf([], 7), -1);
  });

  await t.step("array not containing the element sought for", () => {
    assertEquals(indexOf([1, 3, 5, 7, 9, 11, 14], 6), -1);
  });

  await t.step("array containing the element sought for", () => {
    assertEquals(indexOf([2, 3, 5, 7, 9, 11, 13], 2), 0);
    assertEquals(indexOf([2, 3, 5, 7, 9, 11, 13], 3), 1);
    assertEquals(indexOf([2, 3, 5, 7, 9, 11, 13], 7), 3);
    assertEquals(indexOf([2, 3, 5, 7, 9, 11, 13], 11), 5);
  });
});
