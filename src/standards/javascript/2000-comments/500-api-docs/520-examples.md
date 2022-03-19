# Examples

Code samples can be included using the `@example` tag. These are ignored by the TypeScript checker, but VS Code's intellisense system will include the examples in the editor's tooltips, eg for autocompletion.

There may be multiple `@example` blocks. Each MUST be preceded by a single empty line within the docblock. The next line MUST be the start of the code sample. There MAY be empty lines within code examples, but this is not recommended as long code examples are difficult to read and they don't look great in VS Code's tooltips. Code examples are terminated by the next `@tag` or by the end of the docblock.

Example code must be correct. Each code block must be executable in isolation and without modification. We recommend testing your code examples in a REPL like [RunJS](//runjs.app/).

```js
/**
 * Adds two numbers together.
 * 
 * @param {number} x
 * @param {number} y
 * 
 * @returns {number}
 * 
 * @example
 * // Prints `2`.
 * console.log(add(1, 1))
 * 
 * @example
 * // Prints `0`.
 * console.log(add(1, -1))
 */
function add (x, y) {
  // ...
}
```
