import { assertEquals } from "/deps.ts";
import { downcase } from "/src/tslib/index.ts";

Deno.test("downcase()", async (t) => {
  await t.step("empty strings", () => {
    assertEquals(downcase(""), "");
  });

  await t.step("one-char strings", () => {
    assertEquals(downcase("Z"), "z");
  });

  await t.step("two-or-more-char strings", () => {
    assertEquals(downcase("SUPERB!"), "superb!");
  });
});
