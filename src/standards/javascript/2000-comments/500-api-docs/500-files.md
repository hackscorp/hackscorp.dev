# File-level docblocks

All JavaScript/TypeScript files — throughout all our libraries and applications — MUST have a single file-level docblock.

The file-level docblocks MUST begin in line 1 of a file, and take the following format:

```js
/**
 * A short description of the file contents.
 *
 * @see       {@link https://example.com/docs}
 * @author    Hendrik Michiels
 * @copyright Hacks Ltd
 * @license   MIT
 */
```

We do not use `@file` or `@fileOverview` tags. The docblock — the block of English prose at the top of the comment — serves as the description for the module's contents.

The `@author` tag is required only if the authorship differs from the copyright owner. Most of the time it will be sufficient to include copyright information only.

For privacy reasons, contact details such as email addresses MUST NOT be embedded in the values of these or any other docblock tags.

OPTIONALLY copyright declarations may be dated, and multiple copyright holders may be listed using comma-separation.

```js
/**
 * @copyright 2020 Hacks Ltd, 2006 NeverMind Ltd
 */
```

Any of these tags MAY be repeated in other docblocks within any file. You should do this wherever the copyright or license varies from the default declared in the top file-level docblock. For example, the default license declared for a file may be MIT, but one or two functions within that file may have different authorship and have been integrated into our software under the terms of a different open source license.

Where used, these tags MUST be positioned after all other tags in a docblock.
