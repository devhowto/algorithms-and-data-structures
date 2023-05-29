const log = console.log.bind(console);

/**
 * Simple implementation using the “go function” pattern.
 */
function fib(n) {
  return (function go(i, seq) {
    if (i === n) return seq;

    if (i === 0) seq.push(0);
    if (i === 1) seq.push(1);

    if (i >= 2)
      seq.push(seq[i - 2] + seq[i - 1]);

    return go(i + 1, seq);
  })(0, []);
}

for (let i = 0; i <= 16; ++i)
  log(fib(i));
//=> [
//=>       0,   1,   1,   2,  3,  5,
//=>       8,  13,  21,  34, 55, 89,
//=>     144, 233, 377, 610
//=> ]
