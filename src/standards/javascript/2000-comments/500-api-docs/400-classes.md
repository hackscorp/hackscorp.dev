# Classes

Example:

```js
class C {

  /**
   * @param {number} data
   */
  constructor(data) {

    // Property types can be left to be inferred...
    this.name = 'foo'
 
    // ... or set explicitly...
    /** 
     * @type {string | null} 
     */
    this.title = null
 
    // ... or simply annotated, if they're set elsewhere.
    /** 
     * @type {number} 
     */
    this.size
 
    // This should error, since initialize() expects a string.
    this.initialize(data)
  }

  /**
   * @param {string} s
   */
  initialize = function (s) {
    this.size = s.length
  }

}
 
let c = new C(0)
```

Watch out for the following gotcha. Our `C` class is intended to be called with `new`, but because this is JavaScript, the following invocation is allowed, and the resulting value is treated by JavaScript as an "any" type.

```js
let result = C(1)
```
