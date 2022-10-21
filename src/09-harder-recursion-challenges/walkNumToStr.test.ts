import { assertEquals } from "/deps.ts";
import { walkNumToStr } from "./walkNumToStr-v2.ts";

Deno.test("walkNumToStr()", async (t) => {
  await t.step("empty object", () => {
    assertEquals(walkNumToStr({}), {});
  });

  await t.step("one-level-deep object", () => {
    assertEquals(
      walkNumToStr({
        a: 1,
        b: "hello",
        c: 3,
      }),
      {
        a: "1",
        b: "hello",
        c: "3",
      },
    );
  });
});
