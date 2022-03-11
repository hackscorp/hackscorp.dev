# Templates

The TypeScript type checker supports function parameter type declarations with the `@template` tag. This lets you define generic types that "flow through" functions or classes.

```js
/**
 * @template T
 * @param {T} x - a generic value that flow through to the return type
 * @returns {T}
 */
function id (x) {
  return x
}

const a = id('str')
const b = id(123)
const c = id({})
```

For type checking, this is a better option than using `any` types. But for the human reader, this syntax is not particularly expressive. Be sure to leave a comment to explain that the `T` type is a container for whatever type is passed in.

Templates may be comma-separated...

```js
/**
 * @template T,U,V
 */
```

... or declared one at a time, which is better for commenting:

```js
/**
 * @template T - optional description
 * @template U - optional description
 * @template V - optional description
 */
```

Finally, `@template` can be used in conjunction with `@extends` when a JavaScript class extends a generic base class, and you want to pass down a type argument.

```js
/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}
```
