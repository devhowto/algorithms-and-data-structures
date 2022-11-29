const log = console.log.bind(console);

function filter(xs, predicate) {
  return (function helper(list, f, acc) {
    if (list.length === 0) return acc;

    var [head, ...rest] = list;

    if (f(head)) return helper(rest, f, [...acc, head]);

    return helper(rest, f, acc);
  })(xs, predicate, []);
}

function isEven(n) {
  return n % 2 === 0;
}

log(filter([0, 1, 2, 3, 4, 5], isEven));
// → [1, 2, 4]
