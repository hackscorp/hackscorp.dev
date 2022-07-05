# Release stages

The following tags MAY be used to declare the release stage of software components:

- `@experimental`
- `@alpha`
- `@beta`
- `@deprecated`

Users ought to be aware of using software components that in any of these development stages. These tags are a means of communicating that information.

Where used, these tags SHOULD be positioned prominently near the top of a docblock, preferably immediately after the description.

```js
/**
 * Returns the average of two numbers.
 *
 * @beta
 *
 * @param x The first input number.
 * @param y The second input number.
 * 
 * @returns The mean of `x` and `y`.
 */
```

For experimental and deprecated components, it is strongly RECOMMENDED you include comments with these tags, to further draw the user's attention to the perils of using the tagged component. Tools such as the TypeScript compiler and VS Code intellisense system MAY use these tags to, too. For example, VS Code renders documentation for deprecated APIs in strike through text.

```js
/**
 * @deprecated This export will be removed in the next major release.
 */
```

Authors MUST NOT use the `@since` or `@version` tags. Instead, versioning MUST be defined in `package.json` files, and API changes MUST be recorded in changelogs.

```js
/**
 * @since 10.2.0
 */
```
