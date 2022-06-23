# VS Code configuration

To benefit from inline type checking of JavaScript files in VS Code, you need to make a couple of configuration changes.

The first thing to do is check that JavaScript validation is enabled in your settings. This is enabled by default, so you can simply exclude this option from your settings.

```json
{
  "javascript.validate.enable": true
}
```

Even with JavaScript validation enabled, by default VS Code's intellisense tool does not parse docblocks in JS files to discover additional type information. To enable this, you have two options. The first option is to enable JSDoc-based type checking on a file-by-file basis. This is done by adding the following comment to the very first line of each JavaScript file.

```js
// @ts-check
```

The second option is to enable type checking for all JavaScript files. This is done by adding the following option to your VS Code settings.

```json
{
  "js/ts.implicitProjectConfig.checkJs": true
}
```

Both of these turn on the TypeScript type checker for JavaScript files. The type checker will parse [compatible docblocks](/www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) in each file, in search of additional type information that can't be inferred from the code.

If you enable the type checker globally, you can still disable it for some files by including the following comment near the top of each file:

```js
// @ts-nocheck
```

The comment `@ts-ignore` can also be used to suppress type errors on the _next_ line of a file.

To enforce a more consistent developer experience between environments, it is strongly RECOMMENDED to do both these things:

1. Enable `js/ts.implicitProjectConfig.checkJs` at the repository level, and commit the `.vscode/settings.json` file to source control. However, this setting will be ignored if the repository folder is opened within a broader VS Code workspace. Therefore, we SHOULD also:

2. Add either the `@ts-check` or `@ts-nocheck` annotation to the top of _every_ JavaScript file within each project repository.
