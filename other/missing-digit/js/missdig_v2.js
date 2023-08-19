//
// NOTE: This is a work in progress.
//

const log = console.log.bind(console);

function int(val) {
  return Number.parseInt(val, 10);
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

function findDig(num, str) {
  const digits = num.toString();
  return digits[str.indexOf('x')];
}

/**
 * @param {string} str
 */
function misDig(str) {
  const [a, op, b, _, r] = str.split(' ');

  if (r.includes('x')) {
    return findDig(opTbl[op](int(a), int(b)), r);
  } else if (a.includes('x')) {
    return findDig(opTbl[invOpTbl[op]](int(r), int(b)), a);
  } else {
    return findDig(opTbl[invOpTbl[op]](int(r), int(a)), b);
  }
}

log(misDig('2 + 3 = x')); // 5
log(misDig('x + 3 = 5')); // 2
log(misDig('2 + x = 5')); // 3

log(misDig('12x + 2 = 125')); // 3
//            3
log(misDig('1x3 + 2 = 125')); // 3
//           2
log(misDig('x23 + 2 = 125')); // 3
//          1

log(misDig('5 - 2 = x')); // 3
log(misDig('x - 2 = 3')); // 5
log(misDig('5 - x = 3')); // 2
