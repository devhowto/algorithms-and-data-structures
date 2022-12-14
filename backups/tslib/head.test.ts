import { head } from "./index.ts";
import { assertThrows, assertEquals } from "/deps.ts";

Deno.test("head()", async (t) => {
  await t.step("should throw exception for empty input", () => {
    assertThrows(
      () => head([]),
      RangeError,
      "head(): input cannot be empty."
    );

    assertThrows(
      () => head(""),
      RangeError,
      "head(): input cannot be empty."
    );
  });

  await t.step("when the input contains a single element", async (t) => {
    await t.step("should return that element", () => {
      assertEquals(head([0]), 0);
      assertEquals(head(["hello"]), "hello");
      assertEquals(head("z"), "z");
    });
  });

  await t.step("when input contains two or more elements", async (t) => {
    await t.step("should return the first element", () => {
      assertEquals(head([0, 1]), 0);
      assertEquals(head([0, 1, 2, 3, 4]), 0);

      assertEquals(head(["hello", "world"]), "hello");
      assertEquals(
        head(["May", "the", "force", "be", "with", "you."]),
        "May",
      );

      assertEquals(
        head([[0, "zero"], [1, "one"], [2, "two"]]),
        [0, "zero"],
      );

      assertEquals(
        head([
          { id: 1, name: "Yoda" },
          { id: 2, name: "Aayla Secura" },
        ]),
        { id: 1, name: "Yoda" },
      );

      assertEquals(head("λ lambda symbol"), "λ");
    });
  });
});
