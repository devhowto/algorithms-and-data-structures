import { assertEquals } from "/deps.ts";
import { capitalize } from "/src/tslib/index.ts";

Deno.test("capitalize()", async (t) => {
  await t.step("single-letter strings", () => {
    assertEquals(capitalize("z"), "Z");
  });

  await t.step("two-or-more-letter strings", () => {
    assertEquals(capitalize("zz"), "Zz");
    assertEquals(capitalize("master yoda"), "Master yoda");
  });
});
