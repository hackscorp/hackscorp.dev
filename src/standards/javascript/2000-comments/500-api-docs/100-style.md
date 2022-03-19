# Style

Authors MUST use the multi-line docblock notation, not the single-line notation. This is better for readability, as docblocks are more easily distinguished from normal comments.

**Yes:**

```js
/**
 * @type {string}
 */
let s
```

**No:**

```js
/** @type {string} */
let s
```

Except for [file-level docblocks](/standards/javascript/comments/style), which start on the very first line of a file, every docblock MUST have a single empty line before it.

Except for file-level docblocks, the immediate next line after a docblock MUST be the beginning of the block of code that the docblock documents. File-level docblocks MUST be followed by a single empty line, but every subsequent docblock in a file MUST NOT.

These rules differ from `//` comments, which MAY be padded with empty lines both above and below them.

## Descriptions

Descriptions are OPTIONAL, but where included they MUST be written on the first line of the docblock and there MUST be one empty line between the description and the docblock's tags.

```js
/** 
 * A description of what the return value of this promise represents.
 * 
 * @type {Promise<string>}
 */
const promisedString
```

Descriptions MAY be written over multiple lines, and a single description MAY be composed of multiple paragraphs. But descriptions SHOULD be kept as concise as possible, and focused exclusively on conveying API information.

As with all comments, proper sentences written in [American English](/standards/javascript/comments/language) are REQUIRED for all descriptions.

## Markdown

Authors MAY use the following notations to markup docblock descriptions, and also for end-of-line descriptions for `@param`, `@returns` and `@throws` tags:

- Backticks ` for inline code
- Single asterisks for bold
- Underlines _ for italics
- Hyperlink syntax: `[Link text](http://...)`

```js
/**
 * Returns `true` for anything that can be coerced into a valid number.
 * 
 * **Important**: This is an important note that will be rendered in VS Code's
 * intellisense tooltips.
 * 
 * @param {*} test Test variable.
 * @returns {boolean} Returns `true` if numerical, else `false`.
 */
function isNumeric (test) {
  // ...
}
```

Authors MUST NOT use inline HTML markup or any other rich-text markup syntax in docblocks.

## Line lengths

While code lines and standard comments SHOULD be less than 80 characters long, docblocks MAY be longer — up to 120 characters, or even more if this is best for readability.

The aim of having longer line lengths for docblocks is to avoid having to hard-wrap long `@tag` lines. But if a tag benefits from a longer-than-normal description, hard-wrapped lines are indented by two spaces, like this:

```js
/**
 * @param {string} author The author of the book, presumably some
 *   person who writes well and does so for a living!
 */
```

## Alignment

Authors MUST NOT try to align the types, names and descriptions of a group of tags.

**Yes:**

```js
/**
 * @typedef {Object} SpecialType Creates a new type named 'SpecialType'.
 * @prop {string} prop1 A string property of SpecialType.
 * @prop {number} prop2 A number property of SpecialType.
 * @prop {number} [prop3=42] An optional number property of SpecialType with default.
 */
```

**No:**

```js
/**
 * @typedef {Object}          SpecialType Creates a new type named 'SpecialType'.
 * @prop    {string | number} prop1       A string or number property of SpecialType.
 * @prop    {number}          prop2       A number property of SpecialType.
 * @prop    {number}          [prop3=42]  An optional number property of SpecialType with default.
 */
```

Although the second example is arguably more readable, the longer line lengths can soon make things messy and you have to change all the lines when any one of them is updated. This means source control branch merges become noisier.
