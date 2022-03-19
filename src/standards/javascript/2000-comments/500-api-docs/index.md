# Inline API documentation

There is a convention to extend JavaScript's block-level comment syntax to demarcate comments that are intended to be machine-parsable as well as human-readable, for the purpose of generating API documentation.

The convention is to add an extra asterisk immediately after the opening `/*`, like this:

```js
/** A single-line API comment */
```

Or like this:

```js
/**
 * A multi-line API comment block.
 */
```

These comment blocks — which we will call **docblocks** — provide documentation on the code that immediately follows them.

```js
/**
 * Error type representing failed assertions.
 *
 * @example
 * throw new AssertionError('Expected a number, received a string')
 */
class AssertionError extends ValidationError {}
```

There are two main advantages to writing API documentation within source code:

1. Inline documentation is more likely to be kept-up-to-date with changes in the adjacent source code, than if the documentation were maintained separately.

2. Inline documentation provides a convenient at-a-glance reference point on how to use the software component you've got open in your code editor. It is far easier to read a well-annotated comment block than it is to mentally reverse engineer a complex unit of code in order to understand what it does and how to use it.

And if you were to write the inline documentation in a machine-readable format, using special markup, you would get even more benefits:

- You would be able to use tools to automate the generation of API documentation from source code.

- You will be able to pipe the API schema into "intellisense" tools in code editors, which in turn will improve the developer experience by enabling code completion and static code analysis, including static type checking.

In the JavaScript ecosystem, variations on the syntax supported by the [JSDoc](https://jsdoc.app/) tool are widely used to embed structured API information, including type information, into source code comments. JSDoc-style comments have become something of a quasi-standard of the JavaScript language itself. Other tools in this domain include [ESDoc](https://esdoc.org/), [Documentation.js](http://documentation.js.org/) and [DocumentJS](https://documentjs.com/), all of which support JSDoc-style comments. JSDoc itself is similar to JavaDoc and phpDocumentor.

However, in the JavaScript space, all these tools have now been supplanted by TypeScript.

The TypeScript compiler supports an [extended subset of JSDoc notation](//www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html). And there is an emerging specification called [TSDoc](//tsdoc.org/) that further extends TypeScript-flavoured JSDoc, with the intention of making docblocks useful to a wider range of development tools besides type checkers and documentation generators.

Using TypeScript-compatible JSDoc/TSDoc notation is a really easy and effective way of maintaining API documentation for JavaScript modules. It is also a great way to bring some of TypeScript's excellent typing system to plain old JavaScript files. For application development you get many of the benefits of TypeScript itself — eg real-time type checking in IDEs such as VS Code — without needing to fully upgrade from `.js` to `.ts` files. For library development you can use the TypeScript compiler to generate type declaration files — the ones with the `*.d.ts` extension — from comments embedded in plain `.js` files, and so distribute "typed" versions of your JS libraries.

For these reasons, it is our policy to _fully cover_ the source code for all our JavaScript libraries and applications with inline structured API information. We've adopted our own subset of JSDoc/TSDOc, which is documented in the remainder of this section. Our objectives are to:

- Use a minimal set of docblock syntax that is easy for developers to write and to maintain, and that improves the overall developer experience by conveying information that is not readily understood from the source code on its own.

- Improve the type safety of our JavaScript programs, by using only the docblock notations that work well with VS Code's intellisense tool _and_ from which TypeScript-compatible type declaration files can be generated in an automated way.
