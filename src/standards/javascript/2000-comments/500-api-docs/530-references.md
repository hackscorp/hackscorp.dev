# References

Use the `@see` tag in conjunction with `@link` to create cross-references to external documentation. `@link` is an inline tag that can be used within block-level tags like `@see`, like this:

```js
/**
 * @see {@link https://example.com/docs}
 */
```

You can include multiple `@see` blocks in the same docblock. Optionally, links can be given a human-friendly title.

```js
/**
 * @see {@link https://nirvarnia.com/}
 * @see {@link https://daneden.github.io/animate.css/|Animate.css}
 */
```

Documentation references SHOULD be included in most file-level docblocks, and in any other docblocks for which there is relevant external documentation.

Authors SHOULD NOT use the `@see` and `@link` tags, which have a different purpose in JSDoc/TSDoc.
