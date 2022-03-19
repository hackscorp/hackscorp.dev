# Functions

It is possible to declare a `Function` type like this:

```js
/** 
 * @type Function
 */
const fn = (s, b) => {
  // ...
}
```

But it is far more useful for type checking if functions are fully typed, which means declaring the types of all their arguments and return values.

For functions with concise APIs, TypeScript notation MAY be used:

```js
/** 
 * @type {(s: string, b?: boolean) => number} 
 */
const fn = (s, b) => {
  // ...
}
```

For more complex function signatures, or where it is desirable to comment on individual parameters and return values, JSDoc-style notation is better. A function's signature is described using `@param`, `@returns` and `@throws` tags, which SHOULD be listed in that order.

All `@param` and `@returns` tags should be clustered together, one line per tag, with no blank lines between the tags.

```js
/**
 * Delete the contents of a directory.
 *
 * @param {string} dir Path to the target directory.
 * @returns {Promise<string>} Path to the cleaned directory.
 * 
 * @throws `TypeError` if missing  or invalid parameters.
 */
```

Both the TypeScript and JSDoc style can be used for both function declarations (where named functions are declared using the `function` keyword) and function expressions (where arrow functions or named functions are assigned to variables).

```js
/**
 * Multiplies a value by itself.
 * 
 * @param {number} x A multiplier.
 * @returns {number} A new number primitive.
 */
const multiplier = (x) => x * x
```

## Parameters

`@param` uses the same syntax as `@type`, but adds a parameter name. Parameters may be declared optional, which is done by encapsulating the parameter name in square brackets.

All parameters SHOULD have comments unless the purpose of a parameter is obvious from its name or from the description of the function.

```js
/**
 * @param {string} p1 A string parameter.
 * @param {string} [p2] An optional string parameter.
 */
```

Default values can be declared using the following syntax. This is not necessary where default values are written in the code itself, or where the default is `undefined`.

```js
/**
 * @param {string} p1
 * @param {string} [p2='default']
 */
```

Rest arguments are declared like this:

```js
/**
 * @param {...string} other
 */
```

TypeScript notation MAY be used to describe accepted object structures.

```js
/** 
 * @param {{ a: string, b?: number }} options
 */
```

Alternatively JSDoc notation MAY be used for this purpose. This is a particularly good notation for documenting options objects — a widely used design pattern in JavaScript programs in which optional input is encapsulated in a single object parameter. Nested property names are prefixed with the name of the parameter, and properties may be declared optional and given fallback values using the normal JSDoc `@param` syntax.

```js
/**
 * @param {Object} options Optional comment.
 * @param {string} options.prop1 Optional comment.
 * @param {number} [options.prop2] Optional comment.
 * @param {number} [options.prop3=42] Optional comment.
 */
```

The same TypeScript or JSDoc notation is used to document destructured parameters:

```js
/**
 * @param {Object} options
 * @param {string} options.prop1
 * @param {number} options.prop2
 */
const fn = ({ prop1, prop2 }) => {
  // ...
}
```

## Return types

Function docblocks MUST have a single `@returns` tag that declares all the possible return types. This is REQUIRED even if the function returns `undefined`, or if it is an `async` function which naturally returns a promise.

```js
/**
 * @returns {boolean | null} Returns `true`, `false` or `null`.
 */
```

Every `@returns` tag MUST have a comment. VS Code shows this comment in its intellisense tooltips.

Type checkers can infer which functions return promises from the `async` keyword, so the `@returns` tag will often be superfluous in the context of asynchronous functions. Nevertheless, you SHOULD declare the return type where the resolved value of the promise itself is significant, and you MUST declare the return type for functions that `return new Promise()` rather than use the `async` keyword.

Even if a promise does not resolve to any meaningful value, declare it so: `Promise<undefined>`. (Note: this is JavaScript, so the "void" type is `undefined`.)

```js
/**
 * @returns {Promise<string>} Returns a promise that resolves to a string value.
 */
async function ps () {
  // ...
}
```

For functions with no `return` statement, write this:

```js
/**
 * @returns {void} No return value.
 */
```

Although this is superfluous, this is fed into VS Code's intellisense tooltips and the API of the function is therefore more comprehensively documented, which is useful for code completion, for example. The `void` type is a TypeScript-specific type. It is a sub-type of `undefined` and is intended to be used in this specific context: in functions that don't return anything.

## Thrown values

A block of one or more `@throws` tags MAY be written after the block of `@param` and `@returns` tags, with a single empty line separating the two blocks.

The `@throws` tag SHOULD be used to document the types of errors that a function may throw. There MUST be one `@throws` tag per error type — do not use the union operator in this context.

For compatibility with VS Code's intellisense tooltips, the _type_ of value or object thrown MUST NOT be encapsulated in `{}`, as with other types. Instead, each `@throws` tag MUST have only a short descriptive comment, the sentence starting with the name of the thrown type (encapsulated in Markdown backticks) followed by an explanation of the scenarios in which that error type would be thrown.

```js
/**
 * @throws `TypeError` if any argument is of an unexpected type.
 */
```

```js
/**
 * @throws `DivideByZero` if argument `x` is not a non-zero value.
 */
```

This tag is for information purposes only. It does not restrict other types from being thrown since, theoretically, any function is capable of throwing an error. Error don't need to be explicitly thrown within a function's body for that to happen.

## Callbacks

`@typedef` MAY be used to declare function signatures that may be applicable to multiple different `Function` instances:

```js
/** 
 * @typedef {(path?: string) => boolean} onFileOperation 
 */

/** 
 * @type {onFileOperation} 
 */
const ok = (s) => !(s.length % 2)
```

Alternatively, you MAY use the `@callback` tag. This serves the same purpose as `@typedef`, except it is intended specifically for the definition of function types. This notation originates from JSDoc and it gives room to comment on individual parameters, return types, and thrown types.

As with `@typedef`, `@callback` declarations can be subsequently referenced from `@type`, `@param` and `@returns` tags.

```js
/**
 * @callback onFileOperation
 * 
 * @param {string} [path] Path to a source file.
 * @returns {boolean} Whether or not the file was modified.
 */
 
/** 
 * @type {onFileOperation} 
 */
function onChange (path) => {
  // ...
}

/** 
 * @type {onFileOperation} 
 */
function onDelete (path) => {
  // ...
}

/**
 * Watch for changes to a file.
 *
 * @param {string} path File path.
 * @param {onChange} [onChangeCallback] Function to run when the file changes.
 * @param {onDelete} [onDeleteCallback] Function to run when the file is deleted.
 */
function watch (path, onChangeCallback, onDeleteCallback) {
  // ...
}
```

## `@this`

The TypeScript compiler will infer the type of `this` from the context in which functions are called. If such context is not provided, you can specify the type of `this` using the `@this` tag.

```js
/**
 * @this {HTMLElement}
 * @param {*} e An `Event` instance.
 */
function callback (event) {
  // ...
}
```
