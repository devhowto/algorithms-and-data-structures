import { assertEquals } from "/deps.ts";
import { revStr } from "./revStr-v2.ts";

Deno.test("revStr()", async (t) => {
  await t.step("should return empty string", () => {
    assertEquals(revStr(""), "");
  });

  await t.step("should return the single-char input string", () => {
    assertEquals(revStr("z"), "z");
    assertEquals(revStr("✔"), "✔");
  });

  await t.step("should reverse the input string", () => {
    assertEquals(revStr("yZ"), "Zy");
    assertEquals(revStr("λ✔"), "✔λ");

    // Two palindromes.
    assertEquals(revStr("ana"), "ana");
    assertEquals(revStr("racecar"), "racecar");

    assertEquals(
      revStr("May the force be with you."),
      ".uoy htiw eb ecrof eht yaM",
    );
  });
});
