const log = console.log.bind(console);

function fn(n) {
  var total = 0;

  function helper(x) {
    if (x <= 0) return 0;
    total += x;
    helper(x - 1);
  }

  helper(n);

  return total;
}

log(fn(5));
// → 15
