import { assertEquals } from "/deps.ts";
import { nestedSum } from "./nestedSum-v1.ts";

Deno.test("nestedEvenSum()", async (t) => {
  await t.step("empty tree", () => {
    assertEquals(nestedSum({}), 0);
  });

  await t.step("one-level-deep tree", () => {
    assertEquals(nestedSum({ a: 1 }), 1);
    assertEquals(nestedSum({ a: 1, b: 2, c: 3 }), 6);
  });

  await t.step("two-or-more-level-deep tree", () => {
    assertEquals(nestedSum({ a: 1 }), 1);
    assertEquals(
      nestedSum({
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
      1 + 2 + 3 + 4 + 5 + 6 + 7 // 28.
    );
  });
});
