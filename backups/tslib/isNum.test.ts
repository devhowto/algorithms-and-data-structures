import { assertEquals } from "/deps.ts";
import { isNum } from "/src/tslib/index.ts";

Deno.test("isNum()", async (t) => {
  await t.step("non-number values", () => {
    assertEquals(isNum(NaN), false);
    assertEquals(isNum("0"), false);
    assertEquals(isNum("1"), false);
  });

  await t.step("number values", () => {
    assertEquals(isNum(1), true);
    assertEquals(isNum(-0), true);
    assertEquals(isNum(1e-4), true);
  });
});
