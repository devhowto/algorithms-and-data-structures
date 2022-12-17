import { Stack } from './Stack.js';

describe('Stack class', () => {
  test('can create an empty stack', () => {
    var stack = new Stack();
    expect(stack.first).toEqual(null);
    expect(stack.last).toEqual(null);
    expect(stack.size).toEqual(0);
  });

  test('can push to empty stack', () => {
    var stack = new Stack();

    var size = stack.push(70);

    expect(size).toEqual(1);
    expect(stack.first.val).toEqual(70);
    expect(stack.last.val).toEqual(70);
    expect(stack.size).toEqual(1);
  });

  test('can push to non-empty stack', () => {
    var stack = new Stack();
    stack.push(70);
    stack.push(50);

    var size = stack.push(30);

    expect(size).toEqual(3);
    expect(stack.last.val).toEqual(30);
    expect(stack.first.val).toEqual(70);
    expect(stack.size).toEqual(3);
  });

  test('can pop from single-node stack', () => {
    var stack = new Stack();
    stack.push(70);

    var size = st
  });
});
