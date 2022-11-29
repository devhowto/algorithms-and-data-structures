import { assertEquals } from "/deps.ts";
import { isPalind } from "./isPalind-v1.ts";

Deno.test("isPalind()", async (t) => {
  await t.step("empty string", () => {
    assertEquals(isPalind(""), true);
  });

  await t.step("one-char string", () => {
    assertEquals(isPalind("z"), true);
  });

  await t.step("two-or-more-char string", () => {
    assertEquals(isPalind("ana"), true);
    assertEquals(isPalind("boob"), true);
    assertEquals(isPalind("madam"), true);
    assertEquals(isPalind("rotator"), true);
  });
});
