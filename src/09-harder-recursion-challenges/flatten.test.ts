import { assertEquals } from "/deps.ts";
import { flatten } from "./flatten-v3.ts";

Deno.test("flatten()", async (t) => {
  await t.step("input is already flat", () => {
    assertEquals(
      flatten([1, 2, 3]),
      [1, 2, 3],
    );

    assertEquals(
      flatten(["The", "force", "is", "strong", "with", "this", "one", "."]),
      ["The", "force", "is", "strong", "with", "this", "one", "."],
    );

    assertEquals(
      flatten([{ id: 1 }, { id: 2 }]),
      [{ id: 1 }, { id: 2 }],
    );
  });

  await t.step("input has one level of nesting", () => {
    assertEquals(
      flatten([1, [2, 3]]),
      [1, 2, 3],
    );

    assertEquals(
      flatten([{ id: 1 }, [ { id: 2 }]]),
      [{ id: 1 }, { id: 2 }],
    );
  });

  await t.step("input has two or more levels of nesting", () => {
    assertEquals(
      flatten([1, [2, [3]]]),
      [1, 2, 3],
    );

    assertEquals(
      flatten([{ id: 1 }, [ { id: 2 }, [ { id: 3 } ]]]),
      [{ id: 1 }, { id: 2 }, { id: 3 }],
    );
  });
});
