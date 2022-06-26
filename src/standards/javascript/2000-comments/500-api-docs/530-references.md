# References

Use the `@see` tag in conjunction with `@link` to create references to documentation and other related resources. Semantically, the `@see` tag [specifies a "see also" item](//github.com/microsoft/tsdoc/issues/235), while `@link` is used to created hyperlinks to other documents. `@link` is specified as an inline tag, which means it can be used within the content of block-level tags like `@see`. Like this:

```js
/**
 * @see {@link https://example.com/docs}
 */
```

You can include multiple `@see` blocks in the same docblock. Optionally, links can be given a human-friendly title.

```js
/**
 * @see {@link https://nirvarnia.com/ Project website}
 * @see {@link https://daneden.github.io/animate.css/ Animate.css}
 */
```

Documentation references SHOULD be included in most file-level docblocks, and in any other docblocks for which there is relevant external documentation.
