import { assertEquals } from "/deps.ts";
import { collectStrs } from "./collectStrs-v1.ts";

Deno.test("collectStrs()", async (t) => {
  await t.step("empty object", () => {
    assertEquals(collectStrs({}), []);
  });

  await t.step("one-level-deep nesting", () => {
    assertEquals(
      collectStrs({ a: "one", "b": "two" }),
      ["one", "two"],
    );
  });

  await t.step("two-or-more-level-deep nesting", () => {
    assertEquals(
      collectStrs({
        stuff: "foo",
        data: {
          val: {
            thing: {
              info: "bar",
              moreInfo: {
                evenMoreInfo: {
                  weMadeIt: "baz",
                },
              },
            },
          },
        },
      }),
      ["foo", "bar", "baz"],
    );
  });
});
