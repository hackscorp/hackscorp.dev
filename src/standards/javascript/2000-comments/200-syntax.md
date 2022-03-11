# Syntax

There are two ways to write comments in JavaScript:

```js
/* A multiline comment
is written like this. */

// A one-line or end-of-line comment
```

We use the multi-line comment syntax to provide machine-readable API documentation on our programs. See the section on inline API documentation, below, for details.

The inline comment syntax MUST be used for all other inline annotations. Any general, unstructured information that you want to document alongside the relevant parts of the source code MUST be written using the `//` comment notation. It is fine to use this notation for
longer, multi-line comments, but all comments SHOULD be on their own lines. Authors SHOULD NOT write comments on the end of lines.

```js
// Enable or disable spelling errors on compound words like
// 'errormessage' and 'builddir'.
```
