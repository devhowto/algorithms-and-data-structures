import { assertEquals, assertThrows } from "/deps.ts";
import { last } from "./index.ts";

Deno.test("last()", async (t) => {
  await t.step("should throw for empty array", () => {
    assertThrows(
      () => last([]),
      RangeError,
      "last(): array cannot be empty."
    );
  });

  await t.step("should return last element", () => {
    assertEquals(last([Infinity]), Infinity);
    assertEquals(last([1e1, 1e2, -1e3]), -1e3);
    assertEquals(last(["may", "the", "force"]), "force");
    assertEquals(last(["ø", "‽", "✔", "✗", "λ", "💩"]), "💩");
  });
});
