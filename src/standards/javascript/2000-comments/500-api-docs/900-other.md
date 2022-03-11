# Other docblock syntax

## `@experimental`, `@alpha`, `@beta`, and `@deprecated`

The `@experimental`, `@alpha` and `@beta` are from the emerging TSDoc standard. Though these tags are not widely supported, they will be useful to indicate the stage of a software component in its development lifecycle. Users ought to be aware of using any APIs that are marked with any of these flags.

When a function, method or property is deprecated, you can let your users know by flagging it as such. It is RECOMMENDED you leave a comment explaining when the component will be removed entirely.

```js
/**
 * @deprecated - this export is scheduled to be removed in v2
 */
const api = { /* ... */ }
```

The TypeScript compiler may issue warnings when deprecated APIs are used. VS Code and other code editors with intellisense tools will typically display deprecated APIs in a strike-through style.

## @example

We've adopted the syntax of the `@example` flag as documented in the TSDoc standard. Each `@example` block MUST be preceded by a single empty line within the docblock. Text that is placed between the `@example` flag and the opening of the code block (which is demarcated using Markdown syntax) is meant to be interpreted as a title for the example.

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
 * ```
 * // Prints "2"
 * console.log(add(1, 1))
 * ```
 * 
 * @example
 * Example with negative numbers
 * ```
 * // Prints "0"
 * console.log(add(1, -1))
 * ```
 */
function add (x, y) {
  // ...
}
```

## `@see` and `@link`

TypeScript uses these flags to link to other parts of a program.

TODO: But we use `@see` for documentation links! We use `@ref` instead, which is non-standard.

## `@author`

TODO: This is supported by the TypeScript compiler.

```js
/**
 * Welcome to awesome.ts
 * @author Hacks Ltd <hello@hackscorp.dev>
 */
```

## Even more

The TypeScript compiler supports a handful more flags such such as `@override` and `@implements`, and `@public`, `@private` and `@protected`, but we have not found these useful in the context of JavaScript programs. [Here's the documentation](//www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) covering all docblock syntax that is supported by the TypeScript compiler.

In addition, there is even more syntax documented on the [TSDoc website](//tsdoc.org/). TSDoc is a superset of the docblock syntax supported by the TypeScript type checker, and it is aiming to become a new standard for docblock notation that will be useful for a range of development toolchains, beyond type checkers and API documentation generators.

If additional docblock syntax is adopted, it MUST be documented in this section of our engineering guide. We aim to use only a small subset, just the most useful parts, of TypeScript-flavour JSDoc + TSDoc.
