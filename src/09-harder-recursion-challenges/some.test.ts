import { assertEquals } from "/deps.ts";
import { isEven } from "/src/tslib/index.ts";
import { some } from "./some-v1.ts";

Deno.test("some()", async (t) => {
  await t.step("no element satisfy the predicate", () => {
    assertEquals(some([1, 3, 5], isEven), false);
  });

  await t.step("one element satisfy the predicate", () => {
    assertEquals(some([1, 3, 4, 5], isEven), true);
  });

  await t.step("two or more elements satisfy the predicate", () => {
    assertEquals(some([1, 3, 4, 5, 6], isEven), true);
  });
});
