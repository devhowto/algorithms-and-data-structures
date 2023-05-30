//
// tags: fibonacci sequence recursion
//

const log = console.log.bind(console);

/**
 * Generates the first n terms of the Fibonacci sequence.
 *
 * Simple implementation using the “go function” pattern.
 */
function gen_fib_seq(n) {
  return (function go(i, seq) {
    if (i === n) return seq;

    if ([0, 1].includes(i)) seq.push(i);

    if (i >= 2)
      seq.push(seq[i - 2] + seq[i - 1]);

    return go(i + 1, seq);
  })(0, []);
}

for (let i = 0; i <= 11; ++i)
  log(gen_fib_seq(i));
//=> [
//=>       0,   1,   1,   2,  3,  5,
//=>       8,  13,  21,  34, 55, 89,
//=>     144, 233, 377, 610
//=> ]
