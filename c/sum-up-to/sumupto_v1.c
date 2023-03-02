#include <stdio.h>
#include <stdlib.h>

/**
 * Sum from 1 up to `n`.
 *
 * Recursive, slow approach (we can use n * (n + 1) / 2 instead).
 */
int sum_up_to(int n, int acc) {
  if (n == 1) return acc + n;
  return sum_up_to(n - 1, acc + n);
}

int main() {
  printf("It works: %p\n", (void *) __builtin_frame_address(0));

  printf("Sum: %d\n", sum_up_to(5, 0));

  return EXIT_SUCCESS;
}
