/**
 * fizzbuzz_v1.c
 *
 * Run this program as ./fizzbuzz_v1 25
 */

#include <stdio.h>
#include <stdlib.h>

void fizzbuzz_1(const int N) {
  for (int i = 1; i < N; ++i) {
    if (i % 3 == 0 && i % 5 == 0)
      fprintf(stdout, "FizzBuzz");
    else if (i % 3 == 0)
      fprintf(stdout, "Fizz");
    else if (i % 5 == 0)
      fprintf(stdout, "Buzz");
    else
      fprintf(stdout, "%d", i);

    printf("\n");
  }
}

void fizzbuzz_2(const int N) {
  for (int i = 1; i < N; ++i) {
    if (i % 15 == 0) fprintf(stdout, "FizzBuzz");
    else if (i % 3 == 0) fprintf(stdout, "Fizz");
    else if (i % 5 == 0) fprintf(stdout, "Buzz");
    else fprintf(stdout, "%d", i);

    printf("\n");
  }
}

void fizzbuzz_3(const int N) {
  for (int i = 1; i < N; ++i) {
    if (i % 3 == 0) fprintf(stdout, "Fizz!");
    if (i % 5 == 0) fprintf(stdout, "Buzz!");
    if (i % 3 != 0 && i % 5 != 0) fprintf(stdout, "%d", i);

    printf("\n");
  }
}

//
// The fizz buzz problem is cyclical. It repeats
//
const char *lktbl[] = {
  "FizzBuzz", // 0
  "%i",       // 1
  "%i",       // 2
  "Fizz",     // 3
  "%i",       // 4
  "Buzz",     // 5
  "Fizz",     // 6
  "%i",       // 7
  "%i",       // 8
  "Fizz",     // 9
  "Buzz",     // 10
  "%i",       // 11
  "Fizz",     // 12
  "%i",       // 13
  "%i"        // 14
};

const char *lut[] =

void fizzbuzz_4(const int N) {
  for (int i = 0; i < N; ++i) {
    printf(lktbl[i % 15], i);
    printf("\n");
  }
}

int main(int argc, char **argv) {
  if (argc != 2) {
    fprintf(stderr, "Usage: param must be an int greater than 1.\n");
    return 7;
  }

  int N = atoi(argv[1]);

  fizzbuzz_4(N);

  return 0;
}
