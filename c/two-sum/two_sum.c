#include <stdio.h>

/**
 * https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/c
 * Array is not sorted.
 */

void two_sum(
  unsigned len,
  const int xs[len],
  int target,
  unsigned int *a,
  unsigned int *b
) {
  int i = 0;
  int j = len - 1;
  int sum;

  while (i < j) {
    sum = *(xs + i) + *(xs + j);

    if (sum == target && i != j) {
      *a = i;
      *b = j;
      break;
    }

    if (sum < target) ++i;
    if (sum > target) --j;
  }
}

int main(int argc, char **argv) {
  int xs[4] = { 1, 2, 4, 4 };
  unsigned int idx1;
  unsigned int idx2;

  two_sum(4, xs, 8, &idx1, &idx2);
  printf("[%d, %d]", idx1, idx2);

  int ys[4] = { 1, 2, 2, };

  return 0;
}
