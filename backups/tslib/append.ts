/**
 * Appends `x` to `xs`.
 *
 * @sig a [a] -> [a]
 */
export function append<T>(x: T, xs: T[]): T[] {
  return [...xs, x];
}
