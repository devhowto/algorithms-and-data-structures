import { assertEquals } from "/deps.ts";
import { capitalizeFirst } from "./capitalizeFirst-v1.ts";

Deno.test("capitalizeFirst()", async (t) => {
  await t.step("empty array", () => {
    assertEquals(capitalizeFirst([]), []);
  });

  await t.step("single-string arrays", () => {
    assertEquals(capitalizeFirst(["z"]), ["Z"]);
    assertEquals(capitalizeFirst(["x", "y", "z"]), ["X", "Y", "Z"]);
  });
});

