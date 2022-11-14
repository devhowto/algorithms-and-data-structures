import { assertEquals } from "/deps.ts";
import { keys } from "./index.ts";

Deno.test("keys()", async (t) => {
  await t.step("should return an empty array", () => {
    assertEquals(keys({}), []);
  });

  await t.step("should return an array with the keys", () => {
    assertEquals(keys({ id: 1, name: "Yoda", skill: "The Force" }), [
      "id",
      "name",
      "skill",
    ]);
  });
});
