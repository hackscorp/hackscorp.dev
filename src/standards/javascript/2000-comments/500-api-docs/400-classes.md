# Classes

All classes SHOULD be described via a docblock.

```js
/**
 * Description of this class goes here.
 */
class ExampleClass {
  // ...
}
```

Construction parameters, if any, MUST be declared in a docblock attached to the `constructor` method.

```js
/**
 * @param {number} data - Optional description.
 */
constructor (data) {
  // ...
}
```

**Important note**: Even the TypeScript type checker will allow invocation of classes without the `new` keyword. This mistake will be allowed to pass:

```js
let result = ExampleClass(1)
```

This is JavaScript, after all! The type of resulting value will be treated by TypeScript as an `any` type.

## Class fields

It is not necessary to declare the types for class fields, if their types can be inferred from the values assigned to them. But where a field is declared and its value set elsewhere, it is RECOMMENDED to declare the expected type with the field declaration.

```js
/** 
 * @type {number} 
 */
size
```

## Class methods

The signatures of class methods are declared using identical JSDoc syntax as for [standalone functions](/standards/javascript/comments/api-docs/functions).
