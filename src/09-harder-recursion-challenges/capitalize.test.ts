import { assertEquals } from "/deps.ts";

Deno.test("capitalize()", async (t) => {
  await t.step("single-letter strings", () => {
    assertEquals(capitalize("z"), "Z");
  });
});
