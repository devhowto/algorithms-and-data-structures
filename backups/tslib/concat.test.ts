import {
  assertEquals,
} from "/deps.ts";

import { concat } from "./index.ts";

Deno.test("concat()", async (t) => {
  await t.step("should concat empty arrays", () => {
    assertEquals(concat([], []), []);
  });

  await t.step("should concat empty strings", () => {
    assertEquals(concat("", ""), "");
  });

  await t.step("should concat arrays", () => {
    assertEquals(concat([1], [2]), [1, 2]);
    assertEquals(concat([[1, 2]], [[3, 4]]), [[1, 2], [3, 4]]);
    assertEquals(
      concat([{ id: 1 }], [{ id: 2 }]),
      [{ id: 1 }, { id: 2 }],
    );
  });

  await t.step("should concat strings", () => {
    assertEquals(
      concat("Tomb Rider I", ", 1996"),
      "Tomb Rider I, 1996",
    );
  });
});
