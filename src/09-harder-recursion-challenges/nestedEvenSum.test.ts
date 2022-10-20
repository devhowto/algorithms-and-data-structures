import { assertEquals } from "/deps.ts";
import { nestedEvenSum } from "./nestedEvenSum-v2.ts";

Deno.test("nestedEvenSum()", async (t) => {
  await t.step("empty tree", () => {
    assertEquals(nestedEvenSum({}), 0);
  });

  await t.step("one-level-deep tree", () => {
    assertEquals(nestedEvenSum({ a: 1 }), 0);
    assertEquals(nestedEvenSum({ a: 2 }), 2);
    assertEquals(nestedEvenSum({ a: 1, b: 2, c: 3 }), 2);
    assertEquals(nestedEvenSum({ a: 1, b: 2, c: 3, d: 4 }), 2 + 4);
  });

  await t.step("two-or-more-level-deep tree", () => {
    assertEquals(
      nestedEvenSum({
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3,
            f: {
              g: 4,
            },
            h: 5,
          },
          i: 6,
        },
        j: 7,
      }),
      2 + 4 + 6 // → 10
    );
  });
});
