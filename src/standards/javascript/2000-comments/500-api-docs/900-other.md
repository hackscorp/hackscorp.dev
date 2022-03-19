# Other docblock syntax

The TypeScript compiler [supports a handful more tags](//www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) such such as `@override` and `@implements`, and `@public`, `@private` and `@protected`, but we have not (so far) found these to be particularly useful in the context of JavaScript programs.

In addition, there is even more syntax documented on the [JSDoc](//jsdoc.app/) and [TSDoc](//tsdoc.org/) websites. TSDoc is a superset of the docblock syntax supported by the TypeScript type checker, which itself is an extended superset of the original JSDoc.

Much of JSDoc is legacy markup for pre-ES6 JavaScript. For example, `@constructor` was used to declare functions as constructor functions. Much JSDOc notation is therefore no longer useful in post-ES6 codebases.

TSDoc a newly emerging specification. It is aiming to become a new, modern standard for docblock notation that will be useful for a range of development toolchains, beyond type checkers and API documentation generators.

You MAY use any additional docblock types and tags supported by either the TypeScript compiler or specified in JSDoc and/or TSDOc. However, additional comment markup should be used sparingly. We aim to use only a small subset of docblock notation, focusing on TypeScript-flavoured JSDoc. We think that docblocks work best where they provide _just enough_ information to be useful for type checking and to instruct on correct usage of a component's public API.

Used wisely, docblocks can help to reduce cognitive load. Misused, they can do the opposite.

Above all, docblocks MUST be readable, and they must be understandable even by developers who are not familiar with JSDoc/TSDoc markup.

Remember that JSDOc/TSDoc type notations are a only a stepping stone from JavaScript to TypeScript. They are a middle ground between the two. If a JavaScript application evolves in complexity such that you find you get much benefit from using tags such as `@enum`, then it is probably time to consider incrementally refactoring your JavaScript code to full TypeScript.

```js
/** 
 * @enum {boolean} 
 */
const ModalOpenState = {
  Closed: false,
  Open: true,
}
```
