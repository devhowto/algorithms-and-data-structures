import { assertEquals } from "/deps.ts";
import { searchNum } from "./searchNum-v1.ts";

Deno.test("searchNum()", async (t) => {
  await t.step("empty array", () => {
    assertEquals(searchNum([], 3), -1);
  });

  await t.step("non-empty array without the searched element", () => {
    assertEquals(searchNum([1, 7, 2], 3), -1);
  });

  await t.step("non-empty array containing the searched element", () => {
    assertEquals(searchNum([3, 1,  7, 5, 3], 3), 0);
    assertEquals(searchNum([9, 1,  7, 5, 3, 2, 3], 3), 4);
  });
});
