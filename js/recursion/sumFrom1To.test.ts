import { assertEquals } from "/deps.ts";
import { sumFrom1To } from "./sumFrom1To-v1.ts";

Deno.test("sumFrom1To()", async (t) => {
  await t.step("should return 1 when input is 1", () => {
    assertEquals(sumFrom1To(1), 1);
  });

  await t.step("should return the correct sum from other numbers", () => {
    assertEquals(sumFrom1To(3), 3 + 2 + 1);
    assertEquals(sumFrom1To(5), 5 + 4 + 3 + 2 + 1);
  });
});
