import { assertEquals } from "/deps.ts";
import { isStr } from "./index.ts";

Deno.test("isStr()", async (t) => {
  await t.step("should return false", () => {
    assertEquals(isStr([]), false);
    assertEquals(isStr(/[a-z]/), false);
  });

  await t.step("should return true", () => {
    assertEquals(isStr(""), true);
    assertEquals(isStr(new String("")), true);
    assertEquals(
      isStr("There is no better time like the present."),
      true,
    );
  });
});

