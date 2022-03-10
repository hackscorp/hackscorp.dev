# Comments

CSS files may be liberally peppered with inline comments. They can easily be removed from production artifacts using automated toolchains.

Since we write all CSS in standardised syntax, comments MUST be written in the `/* ... */` notation. The inline `//` comment notation is not supported.

All comments MUST be preceded by a single blank line. In additional, multi-line comment blocks SHOULD also be followed by a single blank line.

Write all comment son their own lines, rather than on the end of code lines.

Write detailed comments for code that is not self-documenting. Classic examples of things that need explaining include:

- Use of `z-index`
- Compatibility hacks, eg vendor-specific property prefixes like `-webkit-`

## File-level docblocks

We use a variation on [JSDoc](http://usejsdoc.org/) to annotate CSS files. All files MUST be prefixed with a docblock that conforms to the following template.

```css
/**
 * <description>
 *
 * @copyright 2020-2022 Hacks Ltd
 * @license   MIT
 */
```

Where `<description>` explains what the CSS rules in the file _do_ at a general level. Examples:

- `Resets browser default styles`
- `Utility classes for buttons`
- `Homepage layout`

-----

TODO

- [ ] Examples
