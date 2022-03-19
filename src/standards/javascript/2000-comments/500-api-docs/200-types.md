# Types

Type information is provided via the `@type`, `@param` and `@returns` tags, with a little help from `@typedef` and `@callback`.

Types are written in curly braces. Examples:

- `{string}` - A string value.
- `{number}` - A number value.
- `{boolean}` - True or false.
- `{null}` - A null value.
- `{42}` - The literal number primitive 42.
- `{'close' | 'open'}` - One of the literal string values 'close' and 'open'.
- `{string[]}` - An array of string values.
- `{string[][]}` - A two-dimensional array of string values.
- `{...string}` - A variable number of string arguments.
- `{NirvarniaElement}` - A custom type.

JavaScript's primitive types are written full lower case:

- `boolean`
- `number`
- `string`
- `undefined`
- `null`

For functions that return `undefined`, we tend to declare the return type as `void`. This is a TypeScript-specific type that is meant to be used in the specific context of functions that have no `return` statement.

Note that `string` is a different type to `String`. But since JavaScript engines implicitly coerce primitive types to their equivalent object-oriented containers, and vice versa, the distinction is often immaterial. Prefer to declare string, number and boolean types as primitives (`string`, `number` and `boolean`) rather than as their object wrapper types (`String`, `Number`, `Boolean`).

Any built-in JavaScript object, including `Error` types, is supported. Examples:

- `Object`
- `RegExp`
- `Function`
- `Array`
- `Arguments`
- `Date`
- `Error`
- `TypeError`

And you can use any host-specific types, such as `window` or `HTMLElement` in applications that target runtime environments with access to a DOM.

```js
/** 
 * @type {HTMLElement}
 */
const el = document.querySelector(selector)
el.dataset.myData = ''
```

## Union types

Variables that may reference more than one type MUST have their full range of possible types declared using union syntax.

```js
/** 
 * @type {string | boolean}
 */
```

Union syntax is also used to declare nullable types.

```js
/**
 * @type {number | null}
 */
```

Place one space either side of the pipe `|` character, for better readability and consistency with TypeScript notation.

## Objects

Objects SHOULD be fully typed. For simple data structures, the preferred type declaration style is TypeScript syntax, like this:

```js
/** 
 * @type {{ a: string, b: number }} 
 */
```

Optional properties MAY be specified using TypeScript `?` notation.

```js
/** 
 * @type {{ a: string, b?: number }} 
 */
```

This is equivalent to:

```js
/** 
 * @type {{ a: string, b: number | undefined }} 
 */
```

Map-like objects SHOULD be declared using the following TypeScript syntax. In this example, the object would map arbitrary `string` values (the object properties) to `number` values.

```js
/** 
 * @type {{ [x: string]: number }} 
 */
```

Array-like maps, which map numbers to another value, SHOULD also be declared using the equivalent TypeScript syntax:

```js
/** 
 * @type {{ [x: number]: any }} 
 */
```

For more complex data structures, you will need to use `@typedef` [type definitions](/standards/javascript/comments/api-docs/type-defs).

## Arrays

We use the following syntax to declare arrays, since this is how arrays are most commonly declared in TypeScript itself. The alternative TypeScript syntax, `Array<string>`, is also supported.

```js
/** 
 * @type {string[]} 
 */
```

Where an array can hold values of multiple different types, use this type declaration syntax:

```js
/** 
 * @type {(string | number)[]} 
 */
```

## Promises

For promises that do not return any meaningful value, except to represent successful completion of the asynchronous procedure, they can be typed like this:

```js
/** 
 * @type {Promise}
 */
```

Wherever the resolved value is significant, its range of possible types MUST be declared, like this:

```js
/** 
 * @type {Promise<string>}
 * @type {Promise<(string | number)>} 
 */
```

We do not bother documenting rejected values, which can be expected to be of some `Error` type.

## Functions

Functions SHOULD be fully typed, which means declaring all their arguments and return types. See [/standards/javascript/comments/api-docs/functions] for more comprehensive instructions on typing functions.

```js
/** 
 * @type {(s: string, b: boolean) => number} 
 */
const fn = (s, b) => {
  // ...
}
```

## Unknown types

If a data structure is unknown — if it originates from an external, untyped source, for example — its type may be declared as any arbitrary `Object` instance. Document your reasons why the object's structure can't be typed.

```js
/**
 * An arbitrary data structure provided by an external web service.
 * 
 * @type {Object}
 */
```

Likewise, for functions with complex signatures, or if you have other sound reasons for not documenting a function's signature, you can just do this:

```js
/**
 * This function is provided by an external component, and is
 * used as a callback by that component. We only need to invoke
 * the function, we don't need to know its signature.
 * 
 * @type {Function}
 */
```

To declare a type as the equivalent of TypeScript's `any` type, use JSDoc's `*` type. As in TypeScript, non-specific "any" types SHOULD be avoided as much as possible, and you MUST always document your reasons wherever you do disable the type checker.

```js
/**
 * This variable is a return value from an external component, 
 * and could be of any type.
 * 
 * @type {*}
 */
```

The type `?` means "unknown", at least according to VS Code's intellisense system. Do not use this type. Use "any" (`*`).

```js
/**
 * @type {?}
 */
```
