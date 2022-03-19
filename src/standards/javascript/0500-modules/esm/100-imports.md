# Imports

## `node:` imports

```js
import fs from 'node:fs/promises';
```

Use the `node:` URL scheme to import Node built-in modules. This helps to distinguish built-in modules for vendor and local modules.

This syntax is available from Node versions 12.20.0 and 14.13.1. It can also be used in `require()` from Node 14.18.0 and 16.0.0.

- [Reference docs](//nodejs.org/api/esm.html#esm_node_imports)
