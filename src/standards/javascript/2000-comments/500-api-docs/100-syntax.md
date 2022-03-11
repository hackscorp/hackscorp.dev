# Syntax

Authors MUST use the multi-line docblock notation, not the single-line notation. This is better for readability, as docblocks are more easily distinguished from normal comments.

Write this:

```js
/**
 * @type {string}
 */
let s
```

Not this:

```js
/** @type {string} */
let s
```

Descriptions are OPTIONAL, but where included they MUST be written on the first line of the comment and there MUST be one empty line between the description and the docblock's flags.

```js
/** 
 * A description of what the return value of this promise represents.
 * 
 * @type {Promise<string>} 
 */
const promisedString
```

Descriptions MAY be written over multiple lines but SHOULD be kept concise.
