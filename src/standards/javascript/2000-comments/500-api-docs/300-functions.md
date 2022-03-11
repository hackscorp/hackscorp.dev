# Functions

The signatures of functions and methods are defined using `@param`, `@returns` and `@throws` flags. It doesn't matter whether its a function expression (using the `function` keyword) or an expression, the same docblock structure may be used.

```js
/**
 * An arrow function expression
 * 
 * @param {number} x - a multiplier
 */
let myArrow = (x) => x * x
```

## Parameters

`@param` uses the same syntax as `@type`, but adds a parameter name. The parameter may also be declared optional, which in our house style is done by surrounding the parameter name with square brackets.

```js
/**
 * @param {string}  p1  - a string parameter
 * @param {string} [p2] - an optional parameter
 * 
 * @returns {string}
 */
function stringsStringStrings(p1, p2 = 'test') {
  // ...
}
```

It is not necessary to define default values for optional parameters if the defaults are `undefined` or declared in the function declaration itself. Otherwise:

```js
/**
 * @param {string}  p1         - a string param
 * @param {string} [p2="test"] - an optional parameter with a default value
 * 
 * @returns {string}
 */
function stringsStringStrings(p1, p2) {
  // ...
}
```

Options objects are best documented using the following JSDoc-based syntax. Nested property names are prefixed with the name of the parameter. Individual properties MAY be commented.

```js
/**
 * @param {Object} options            - optional comment
 * @param {string} options.prop1      - optional comment
 * @param {number} options.prop2      - optional comment
 * @param {number} [options.prop3=42] - optional comment
 * 
 * @returns {boolean}
 */
function special (options) {
  // ...
}
```

## Return types

TODO

```js
/**
 * @returns {Promise<string>}
 */
async function ps () {
  // ...
}
```

## Thrown values

TODO

A separate `@throws` block should be used to document each exception type. This tag is for informational purposes only, and does not restrict other types from being thrown.

## Function type definitions

To document complex types that are used for function parameters, return types or thrown types, it is recommended you use `@typedef`. See [/standards/javascript/comments/api-docs/types].

`@typedef` can also be used to define entire function signatures, like this:

```js
/** 
 * @typedef {(data: string, index?: number) => boolean} Predicate 
 */

/** 
 * @type {Predicate} 
 */
const ok = (s) => !(s.length % 2)
```

If you want to add comments on each of the function parameters, you can use the `@callback` flag. This flag serves the same purpose as `@typedef`, except it is specifically intended for the definition of function types. As with `@typedef`, `@callback` declarations can be referenced from `@type`, `@param` and `@returns` flags.

```js
/**
 * @callback Predicate
 * 
 * @param {string} data - optional comment here
 * @param {number} [index] - optional comment here
 * 
 * @returns {boolean}
 */
 
/** 
 * @type {Predicate} 
 */
const ok = (s) => !(s.length % 2)
```
