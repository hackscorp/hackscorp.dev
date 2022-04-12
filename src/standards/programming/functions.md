# Functions

## Setters and getters

As a general rule, avoid setters and getters, as they often do not provide a satisfactorily high enough level of abstraction.

```js
startLoading()

get('/api/books').then((response) => {
  // ...
  stopLoading()
})
```

There is a decision choice made here: the developer has chosen two separate functions to modify "loading" state — `startLoading()` and `stopLoading()` — rather than using a single setting function, something like `setLoading()` with a single boolean argument. Having two separate functions means there is more code, but this is a case where _more_ code actually _improves_ maintainability, not lessens it. If we had a single setting function, the interface would not be abstracting anything, which means that future changes to the implementation will likely require changes to the interface. The higher abstractions of the two separate functions, `startLoading()` and `stopLoading()`, means the interfaces are more likely to stay stable, even if the implementation changes in the future.

For example, if the original implementation of `startLoading()` and `stopLoading()` looked something like this:

```js
const state = { loading: false }

const startLoading = () => {
  state.loading = true
}

const stopLoading = () => {
  state.loading = false
}
```

Now imagine that the implementation of the state object changes:

```js
const state = { loading: 0 }
```

We can easily update the implementation of `startLoading()` and `stopLoading()` without changing their interfaces:

```js
const startLoading = () => {
  state.loading += 1
}

const stopLoading = () => {
  state.loading -= 1
}
```

Had we designed a `setLoading()` function in the first place, it's more likely that its interface would have had to change with the implementation. This is not a _huge_ anti-pattern, but it is nonetheless good practice to treat mutations as a clear extra layer of abstraction. The responsibility of the layer is reduced.
