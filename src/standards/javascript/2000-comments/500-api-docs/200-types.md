# Types

The data types held by variables are declared using the `@type` flag.

```js
/** 
 * @type {string}
 */
let s
```

Anything that gets exported from a module MUST have its type(s) defined using the `@type` tag. In addition, it is RECOMMENDED that authors declare types for all variables that are used only internally within a module. Doing so will improve the accuracy with which type checking tools can verify the correctness of a component's internal logic.

Authors SHOULD include descriptions of variables where their purpose is not immediately obvious.

As well as JavaScript primitives (`string`, `number`, etc), types can also be host-specific built-in objects, such as `window` or `HTMLElement` in web browsers.

```js
/** 
 * @type {HTMLElement}
 */
const el = document.querySelector(selector)
el.dataset.myData = ''
```

Union types are defined like this:

```js
/** 
 * @type {string | boolean}
 */
```

Array types can be specified using a variety of syntaxes. We choose the following syntax, because it is the syntax most commonly used to define arrays in TypeScript itself.

```js
/** 
 * @type {string[]} 
 */
```

```js
/** 
 * @type {(string | number)[]} 
 */
```

Promises MUST be defined with the type(s) of the values they resolve to.

```js
/** 
 * @type {Promise<string>} 
 */
const promisedString
```

Objects SHOULD be fully typed. For simple data structures, the preferred type definition style is TypeScript syntax, like this:

```js
/** 
 * @type {{ a: string, b: number }} 
 */
```

Map-like objects SHOULD be defined using the following TyepScript syntax. In this example, the object would map arbitrary `string` values (the object properties) to `number` values.

```js
/** 
 * @type {{ [x: string]: number }} 
 */
```

Array-like maps, which map numbers to another value, SHOULD also be defined using the equivalent TypeScript syntax:

```js
/** 
 * @type {{ [x: number]: any }} 
 */
```

Where variables reference `Function` instances, the signatures of those functions MUST be defined. For functions with concise APIs, this is best done using TypeScript syntax:

```js
/** 
 * @type {(s: string, b: boolean) => number} 
 */
const fn = (s, b) => {
  // ...
}
```

## Optional and nullable types

Optional properties may be specified using the standard JavaScript syntax.

```js
/** 
 * @type {{ a: string, b?: number }} 
 */
```

Use the following syntax to define nullable types.

```js
/**
 * @type {number | null}
 */
```

## Enums

The `@enum` tag will get the TypeScript compiler to treat an otherwise plain JavaScript object literal a _bit_ more like a TypeScript enum type. All members of the object MUST be of the specified type and, unlike normal object literals, new members cannot be dynamically added after initialisation.

```js
/** 
 * @enum {number} 
 */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
}

JSDocState.SawAsterisk
```

## Unknown types

If a data structure is unknown — if it originates from an external, untyped source, for example — it's type may be defined as any arbitrary `Object` instance. Document your reasons why the object's structure can't be typed.

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

To define a type as the equivalent of TypeScript's `any` type, use JSDoc's `*` type. As in TypeScript, non-specific "any" types SHOULD be avoided as much as possible, and you MUST always document your reasons wherever you do disable the type checker.

```js
/**
 * This variable is a return value from an external component, 
 * and could be of any type.
 * 
 * @type {*}
 */
```

## Type casts

TypeScript borrows cast syntax from Google Closure. This lets you cast types to other types by adding an `@type` tag before any parenthesised expression.

This is the only place we use single-line JSDoc comment notation.

```js
/** 
 * @type {number | string} 
 */
let numberOrString = Math.random() < 0.5 ? "hello" : 100
let typeAssertedNumber = /** @type {number} */ (numberOrString)
```

## `@this`

The TypeScript compiler will infer the type of `this` from the context in which functions are called. If such context is not provided, you can specify the type of `this` using the `@this` flag.

```js
/**
 * @this {HTMLElement}
 * @param {*} e
 */
function callback(event) {
  this.clientHeight = 100
  // ...
}
```

## Complex types

The type syntax documented above is suitable for simple types. To document complex types, we need to turn to the `@typedef` flag.

The following example uses TypeScript syntax to define a complex type.

```js
/** 
 * @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialType 
 */
```

Alternatively, if you wanted to comment each property, you could use this alternative JSDoc-based syntax:

```js
/**
 * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
 * @prop {string} prop1          - a string property of SpecialType
 * @prop {number} prop2          - a number property of SpecialType
 * @prop {number} [prop3=42]     - an optional number property of SpecialType with default
 */
```

`@typedef` blocks stand on their own, and do not necessarily provide type definitions for the code immediately below them. Instead, once a custom type is defined via an `@typedef` block, that type definition can be referenced from any subsequent `@type`, `@param` or `@returns` flag.

```js
/** 
 * @type {SpecialType} 
 */
let specialTypeObject
```

As well as defining complex data structures, `@tyepdef` can also be used to define functions with complex signatures. See [/standards/javascript/comments/api-docs/functions].

Another option is to import types from TypeScript declaration files, which have the `.d.ts` extension. This can be incredibly useful for defining complex data structures that cannot be neatly defined inline in docblock notation. This way, you can define your types in TypeScript proper.

```ts
// `types.d.ts`
export type Pet = {
  name: string
}
```

To import type information from `.d.ts` files, use this special `import()` syntax. This can be used on the `@type`, `@param` and `@returns` flags.

```js
/**
 * @param { import("./types").Pet } pet
 */
function walk (pet) {
  console.log(`Walking ${pet.name}...`)
}
```

An even cleaner option is to `import()` types into `@typedef`, give the imported type an alias, and then reference the imported type via its alias in the normal way in `@type`, `@param` and `@returns` flags.

```js
/**
 * @typedef { import("./types").Pet } Pet
 */
 
/**
 * @type {Pet}
 */
let myPet

/**
 * @param {Pet} pet
 */
function walk (pet) {
  console.log(`Walking ${pet.name}...`)
}
```

The `import()` syntax can also be combined with `typeof` to automatically discover the type of a value from a JavaScript module. This can be useful if you don't know the type, or it has a large type that is annoying to describe.

```js
/**
 * @type {typeof import("./accounts").userAccount }
 */
const x = require("./accounts").userAccount
```
