import { assertEquals } from "/deps.ts";
import { searchNum } from "./searchNum-v2.ts";

Deno.test("searchNum()", async (t) => {
  await t.step("should return -1 for empty input", () => {
    assertEquals(searchNum([], 3), -1);
  });

  await t.step("should return -1 when not found", () => {
    assertEquals(searchNum([1, 2, 3, 5, 7, 9], 4), -1);
  });

  await t.step("should return 0 when found is first element", () => {
    assertEquals(searchNum([3, 7, 9], 3), 0);
  });

  await t.step("should return length - 1 when found is last element", () => {
    const xs = [3, 7, 9];
    assertEquals(searchNum(xs, 9), xs.length - 1);
  });

  await t.step("should return index of first occurrence", () => {
    assertEquals(searchNum([1, 2, 3, 3, 4, 5], 3), 2);
  });
});
