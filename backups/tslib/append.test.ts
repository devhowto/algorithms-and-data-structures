import { assertEquals } from "/deps.ts";
import { append } from "./index.ts";

Deno.test("append()", async (t) => {
  await t.step("should append to the array", () => {
    assertEquals(append(1, []), [1]);
    assertEquals(append("two", ["one"]), ["one", "two"]);
  });
});
