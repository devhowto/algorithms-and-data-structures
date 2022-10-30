import { assertEquals } from "/deps.ts";
import { sortAsc } from "./sortAsc-v3.ts";

Deno.test("sortAsc()", async (t) => {
  await t.step("empty array", () => {
    assertEquals(sortAsc([]), []);
  });

  await t.step("single element array", () => {
    assertEquals(sortAsc([1]), [1]);
    assertEquals(sortAsc([-3]), [-3]);
  });

  await t.step("two element array", () => {
    assertEquals(sortAsc([1, 2]), [1, 2]);
    assertEquals(sortAsc([-3, -1]), [-3, -1]);

    assertEquals(sortAsc([2, 1]), [1, 2]);
    assertEquals(sortAsc([-1, -3]), [-3, -1]);
  });

  await t.step("two or more element array", () => {
    assertEquals(sortAsc([1, 3, 5, 6, 9]), [1, 3, 5, 6, 9]);
    assertEquals(sortAsc([6, 9, 5, 1, 3]), [1, 3, 5, 6, 9]);
  });
});
