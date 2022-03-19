# TypeScript docblocks

Docblocks SHOULD be included in TypeScript files, too. The only difference is that you do not need to duplicate types that are declared in the code.

```ts
/**
 * Returns the average of two numbers.
 *
 * @param x The first number.
 * @param y The second number.
 * @returns The mean of `x` and `y`.
 */
function getAverage (x: number, y: number): number {
  return (x + y) / 2.0
}
```
