import { assertEquals } from '/deps.ts';
import { filterOdds } from './filterOdds-v3.ts';

Deno.test('filterOdds()', async (t) => {
  await t.step('when input is empty', async (t) => {
    await t.step('should return empty array', () => {
      assertEquals(filterOdds([]), []);
    });
  });

  await t.step('when input contains no odds', async (t) => {
    await t.step('should return empty array', () => {
      assertEquals(filterOdds([2]), []);
      assertEquals(filterOdds([2, 8, -4]), []);
    });
  });

  await t.step('when array contains only odds', async (t) => {
    await t.step('should return an array with the same values as input', () => {
      assertEquals(filterOdds([3]), [3]);
      assertEquals(filterOdds([-5, -7, 9]), [-5, -7, 9]);
    });
  });
});
