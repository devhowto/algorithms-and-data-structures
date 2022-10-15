import { assertEquals, assertThrows } from "/deps.ts";
import { last } from "./index.ts";

Deno.test("last()", async (t) => {
  await t.step("empty input", () => {
    assertThrows(
      () => last([]),
      RangeError,
      "last(): input cannot be empty."
    );

    assertThrows(
      () => last(""),
      RangeError,
      "last(): input cannot be empty."
    );
  });

  await t.step("non-empty input", () => {
    assertEquals(last([Infinity]), Infinity);
    assertEquals(last([1e1, 1e2, -1e3]), -1e3);
    assertEquals(last(["may", "the", "force"]), "force");
    assertEquals(last(["ø", "‽", "✔", "✗", "λ", "💩"]), "💩");
    assertEquals(last("z"), "z");
    assertEquals(last("Check ✔"), "✔");
  });
});
