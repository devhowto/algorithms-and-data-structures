import { tail } from "./index.ts";
import { assertThrows, assertEquals } from "/deps.ts";

Deno.test("tail()", async (t) => {
  await t.step("should throw exception for empty array", () => {
    assertThrows(
      () => tail([]),
      RangeError,
      "tail(): array cannot be empty."
    );
  });

  await t.step("when the array contains a single element", async (t) => {
    await t.step("should return an empty array", () => {
      assertEquals(tail([0]), []);
      assertEquals(tail(["hello"]), []);
    });
  });

  await t.step("when array contains two or more elements", async (t) => {
    await t.step("should return the the array with the first element dropped", () => {
      assertEquals(tail([0, 1]), [1]);
      assertEquals(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4]);

      assertEquals(tail(["hello", "world"]), ["world"]);
      assertEquals(
        tail(["May", "the", "force", "be", "with", "you."]),
        ["the", "force", "be", "with", "you."],
      );

      assertEquals(
        tail([[0, "zero"], [1, "one"], [2, "two"]]),
        [[1, "one"], [2, "two"]]
      );

      assertEquals(
        tail([
          { id: 1, name: "Yoda" },
          { id: 2, name: "Aayla Secura" },
        ]),
        [{ id: 2, name: "Aayla Secura" }],
      );
    });
  });
});

