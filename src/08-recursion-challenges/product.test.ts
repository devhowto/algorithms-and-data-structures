import { assertEquals } from "/deps.ts";
import { product } from './product-v2.ts';

Deno.test('product()', async (t) => {
  await t.step('should return 0 when array is empty', () => {
    assertEquals(product([]), 1);
  });

  await t.step('should return n when array has a single element n', () => {
    assertEquals(product([0]), 0);
    assertEquals(product([1]), 1);
    assertEquals(product([2e5]), 2e5);
  });

  await t.step('should add all the elements of the array', () => {
    assertEquals(product([-3, 3]), -3 * 3); // -9
    assertEquals(product([-3, 3, 1]), -3 * 3 * 1); // -9
    assertEquals(product([-3, 3, -1]), -3 * 3 * -1); // 9

    assertEquals(
      product([1, 1, 1, 1, 1]),
      (1 * 1 * 1 * 1 * 1), // 1
    );

    assertEquals(
      product([5, 1, 2]),
      (5 * 1 * 2), // 10
    );

    assertEquals(
      product([5, 1, 0, 2]),
      (5 * 1 * 0 * 2), // 0
    );
  });
});
