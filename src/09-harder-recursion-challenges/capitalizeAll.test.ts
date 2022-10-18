import { assertEquals } from "/deps.ts";
import { capitalizeAll } from "./capitalizeAll-v3.ts";

Deno.test("capitalizeAll()", async (t) => {
  await t.step("empty array", () => {
    assertEquals(capitalizeAll([]), []);
  });

  await t.step("single-char strings", () => {
    assertEquals(capitalizeAll(["z"]), ["Z"]);
    assertEquals(capitalizeAll(["x", "y", "z"]), ["X", "Y", "Z"]);
  });

  await t.step("two-or-more-char strings", () => {
    assertEquals(capitalizeAll(["zz"]), ["Zz"]);
    assertEquals(
      capitalizeAll(["may", "the", "force"]),
      ["May", "The", "Force"]
    );
  });
});
