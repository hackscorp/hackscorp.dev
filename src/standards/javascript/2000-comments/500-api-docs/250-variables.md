# Variables

The data types held by variables are declared using the `@type` tag.

```js
/** 
 * @type {string}
 */
let s
```

Anything that gets exported from a module MUST have its range of possible types declared using the `@type` tag. In addition, it is RECOMMENDED that authors declare types for variables that are used internally within a module. Doing so will improve the accuracy with which type checking tools can verify the correctness of a component's internal logic.

Authors SHOULD include descriptions for variables whose purpose is not immediately obvious, like this:

```js
/**
 * Regular expression used to contain individual keystrokes within the
 * input control. Only numbers and ASCII-range letters (upper and lower
 * case) are allowed.
 * 
 * @type {RegExp}
 */
const allowedCharactersPattern = /[A-Z0-9]/gi
```

## Type casts

TypeScript borrows cast syntax from Google Closure. This lets you cast one type to another. You do this by adding a `@type` tag before any parenthesized expression.

This is the only place we use single-line JSDoc comment notation.

```js
/** 
 * @type {number | string} 
 */
let numberOrBool = Math.random() < 0.5 ? false : 0
let assumedNumber = /** @type {number} */ (numberOrBool)
```
