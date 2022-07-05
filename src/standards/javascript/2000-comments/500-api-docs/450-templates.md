# Templates

The `@template` tag allows you to declare generic types that "flow through" functions or classes.

In the following example, the function accepts a single parameter of any type, and it will return a value of the same type as the input value.

```js
/**
 * @template T
 * @param {T} x
 * @returns {T}
 */
function id (x) {
  return x
}

// Allowed usage examples:
id('str')
id(123)
id({})
```

For type checking, this is a better option than using `any` types. But for the human reader, this syntax is not particularly expressive. Be sure to leave a comment to explain that the `T` type is a container for whatever type is passed in.

The letter `T` is commonly used as a default template identifier, but any identifier may be chosen. It is convention to use a single upper case letter.

A function or class may make use of multiple templates. Multiple templates can be declared in a comma-separated list via a single `@template` tag, or one-per-tag.

```js
/**
 * @template T,U,V
 */
```

```js
/**
 * @template T Optional description.
 * @template U Optional description.
 * @template V Optional description.
 */
```

The `@template` tag can also be used in conjunction with `@extends` where a class extends a generic base class, and you want to pass down the argument types.

```js
/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}
```
