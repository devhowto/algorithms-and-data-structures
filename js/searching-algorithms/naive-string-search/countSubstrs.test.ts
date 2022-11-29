import { assertEquals } from "/deps.ts";
import { countSubstrs } from "./countSubstrs-v1.ts";

Deno.test("countSubstrs()", async (t) => {
  await t.step("empty strings", () => {
    assertEquals(countSubstrs("", ""), 0);
    assertEquals(countSubstrs("haha", ""), 0);
    assertEquals(countSubstrs("", "haha"), 0);
  });

  await t.step("sub not found in str", () => {
    assertEquals(countSubstrs("hello world", "jedi"), 0);
  });

  await t.step("sub found once in str", () => {
    assertEquals(countSubstrs("may the force", "may"), 1);
    assertEquals(countSubstrs("be with you", "with"), 1);
    assertEquals(
      countSubstrs("the force is strong with this one", "one"),
      1
    );
  });

  await t.step("sub found twice or more in str", () => {
    assertEquals(
      countSubstrs("harold said haha in hamburg", "ha"),
      4,
    );

    assertEquals(
      countSubstrs("omgwtfomg", "omg"),
      2,
    );
  });
});
