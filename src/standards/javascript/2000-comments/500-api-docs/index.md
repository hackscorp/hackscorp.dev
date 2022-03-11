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

These comment blocks — known as **docblocks** — provide documentation on the code that immediately follows them.

```js
/**
 * Error type representing failed assertions.
 *
 * @example
 * ```
 * throw new AssertionError('Expected a number, received a string')
 * ```
 */
class AssertionError extends ValidationError {}
```

There are two main advantages to writing API documentation within source code:

1. Inline documentation is more likely to be kept-up-to-date with changes in the adjacent source code, than if the documentation were kept separately.
2. Inline documentation provides a convenient, at-a-glance reference point on how to use the the program component you have open in your code editor.

Within comment blocks, a special markup language can be used to provide structured, parsable information on the program's API. This inline structured data can be parsed by various tools and used to automatically generate API documentation from source code. For example, the API documentation for the software program could be published as a webpage. But the more common practice is to pipe this data into "intellisense" tools, which in turn provide real-time code analysis and inline documentation within development environments.

In the JavaScript ecosystem, variations on the comment syntax supported by the [JSDoc](https://jsdoc.app/) tool are used to markup comment blocks with structured API information, including type information.

For a long time, JSDoc was the _de facto_ standard tool for this purpose. Other options included [ESDoc](https://esdoc.org/), [Documentation.js](http://documentation.js.org/) and [DocumentJS](https://documentjs.com/), which all supported fairly similar JSDoc-based syntax. JSDoc itself is based on the syntax supported by Javadoc and phpDocumenter.

However, in the JavaScript space, all these tools have been supplanted by TypeScript.

The TypeScript compiler supports an [extended subset of JSDOc notation](//www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html). And there is an emerging standard called [TSDoc](//tsdoc.org/) which aims to settle on a comment notation that is interoperable with a much wider range of development tools.

Using TypeScript-compatible JSDoc/TSDoc notation is a really easy and effective way of maintaining inline type information in JavaScript modules. From these comments you can generate type definitions — `*.d.ts` files — for your libraries. And in the context of applications you get many of the other benefits of TypeScript itself — eg real-time type checking in IDEs — without needing to fully upgrade from `.js` to `.ts` files.

For these reasons, it is our policy to fully cover all our JavaScript libraries and applications with inline structured API information. We maintain our own standard for API comments, which is documented below and which is a useful subset of JSDOc/TSDoc that is implemented in the TypeScript type checker.
