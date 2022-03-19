# Type definitions

To document complex types, we need to turn to the `@typedef` tag.

The following example uses TypeScript syntax to declare a complex custom object. This custom object is given the identifier `SpecialType`, but note this is just a _reference_ for the type definition. The name does not need to match anything in the source code.

```js
/** 
 * @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialType 
 */
```

Alternatively, if you wanted to comment each property, you can use this alternative JSDoc-based syntax:

```js
/**
 * @typedef {Object} SpecialType Creates a new type named 'SpecialType'.
 * @prop {string} prop1 A string property of SpecialType.
 * @prop {number} prop2 A number property of SpecialType.
 * @prop {number} [prop3=42] An optional number property of SpecialType with default.
 */
```

`@typedef` blocks stand on their own, and do not necessarily provide type definitions for the code immediately below them. Instead, once a custom type is declared via a `@typedef` block, that type definition can be referenced from any subsequent `@type`, `@param` or `@returns` tag.

```js
/** 
 * @type {SpecialType}
 */
let specialTypeObject
```

Another example:

```js
/**
 * @typedef Token
 * @property {boolean} valid True if the token is valid.
 * @property {string} id The user id bound to the token.
 */

/**
 * Consume a token.
 * @param  {string} token Token string.
 * @return {Promise<Token>} A promise that resolves to the token.
 */
const consumeToken = (string) => {
  // ...
}
```

As well as defining complex data structures, `@tyepdef` can be used to bring definition to functions with complex signatures. See [/standards/javascript/comments/api-docs/functions] for more details of how `@typedef` can be used in this context.

## Imported type definitions

The TypeScript compiler also supports the importing of TypeScript-compatible type declaration files — the ones with the `d.ts` file extension — directly into JavaScript files via inline JSDoc comments.

This can be incredibly useful for defining complex data structures that cannot be neatly declared inline using docblock notation. Instead, you can declare your types in proper TypeScript.

```ts
// `types.d.ts`
export type Pet = {
  name: string
}
```

To import type information into JavaScript files from `.d.ts` files, use the special `import()` syntax. This can be used on the `@type`, `@param` and `@returns` tags.

```js
/**
 * @param { import('./types').Pet } pet
 */
function walk (pet) {
  console.log(`Walking ${pet.name}...`)
}
```

An even cleaner option is to `import()` types into `@typedef`, give the imported type an alias, and then reference the imported type via its alias in the normal way.

```js
/**
 * @typedef { import('./types').Pet } Pet
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
 * @type {typeof import('./accounts').userAccount }
 */
const x = require('./accounts').userAccount
```
