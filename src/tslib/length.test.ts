import { assertEquals } from "/deps.ts";
import { length } from "./index.ts";

Deno.test("length()", async (t) => {
  await t.step("should return 0", () => {
    assertEquals(length([]), 0);
    assertEquals(length(""), 0);
  });

  await t.step("should return 1", () => {
    assertEquals(length([1e3]), 1);
    assertEquals(length("abc"), 3);
    assertEquals(length([['a', 'b', 'c']]), 1);
    assertEquals(length([[{ id: 1 }, { id: 2 } ]]), 1);
    //
    // ECMAScript uses 16-bit strings...
    // 💩 has length 2, not 1...
    //
    assertEquals(length("ç✔λ💩"), 5);
  });

  await t.step("should return any correct length", () => {
    assertEquals(length(["hello", "world", [1e3]]), 3);
    assertEquals(length([[1, 2], ['a', 'b', 'c']]), 2);
    assertEquals(length([
      [{ id: 1 }, { id: 2 }],
      { id: 3 },
      { id: 4 },
    ]), 3);
  });
});
