const log = console.log.bind(console);

function int(val) {
  return Number.parseInt(val, 10);
}

function str(val) {
  return String(val);
}

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => x / y;

const opTbl = {
  '+': add,
  '-': sub,
  '*': mult,
  '/': div,
};

const invOpTbl = {
  '+': '-',
  '-': '+',
  '*': '/',
  '/': '*',
};

/**
 * @param {string} expr
 * @returns {number}
 */
function misDig(expr) {
  const [a, op, b, _, r] = expr.split(' ');
  let num;
  let idx;

  if (r.includes('x')) {
    num = opTbl[op](int(a), int(b));
    idx = r.indexOf('x');
  } else if (['+', '*'].includes(op)) {
    if (a.includes('x')) {
      num = opTbl[invOpTbl[op]](int(r), int(b));
      idx = a.indexOf('x');
    } else {
      num = opTbl[invOpTbl[op]](int(r), int(a));
      idx = b.indexOf('x');
    }
  } else {
    if (a.includes('x')) {
      num = opTbl[invOpTbl[op]](int(b), int(r));
      idx = a.indexOf('x');
    } else {
      num = opTbl[op](int(a), int(r));
      idx = b.indexOf('x');
    }
  }

  return int(str(num)[idx]);
}

export { misDig };

// a op b = r
// log(misDig('2 + 3 = x')); // 5
// log(misDig('2 + x = 5')); // 3
// log(misDig('x + 3 = 5')); // 2
// log();
//
// log(misDig('5 - 4 = x')); // 1
// log(misDig('5 - x = 1')); // 4
// log(misDig('x - 4 = 1')); // 5
// log();
//
// log(misDig('2 * 4 = x')); // 8
// log(misDig('2 * x = 8')); // 4
// log(misDig('x * 4 = 8')); // 2
// log();
//
// log(misDig('8 / 4 = x')); // 2
// log(misDig('8 / x = 2')); // 4
// log(misDig('x / 4 = 2')); // 8
// log();
//
// log(misDig('12x + 2 = 125')); // 3
// //            3
// log(misDig('1x3 + 2 = 125')); // 2
// //           2
// log(misDig('x23 + 2 = 125')); // 1
// //          1

