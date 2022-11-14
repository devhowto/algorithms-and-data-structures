import { assertEquals } from "/deps.ts";
import { upcase } from "/src/tslib/index.ts";

Deno.test("upcase()", async (t) => {
  await t.step("empty strings", () => {
    assertEquals(upcase(""), "");
  });

  await t.step("one-char strings", () => {
    assertEquals(upcase("z"), "Z");
  });

  await t.step("two-or-more-char strings", () => {
    assertEquals(upcase("Superb!"), "SUPERB!");
  });
});
