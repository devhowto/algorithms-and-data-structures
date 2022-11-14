import { tail } from "./index.ts";
import { assertThrows, assertEquals } from "/deps.ts";

Deno.test("tail()", async (t) => {
  await t.step("should throw exception for empty array", () => {
    assertThrows(
      () => tail([]),
      RangeError,
      "tail(): input cannot be empty."
    );

    assertThrows(
      () => tail(""),
      RangeError,
      "tail(): input cannot be empty."
    );
  });

  await t.step("should return an the unmodified empty tail", () => {
    assertEquals(tail([0]), []);
    assertEquals(tail(["hello"]), []);
    assertEquals(tail("Z"), "");
  });

  await t.step("should return the the input with the first element dropped", () => {
    assertEquals(tail([0, 1]), [1]);
    assertEquals(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4]);

    assertEquals(tail("hello"), "ello");

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

    assertEquals(tail("✔λ✗"), "λ✗");
  });
});

