// @flow

function fn (obj: {| foo: string |}) {
  // ...
}

// @flow-ignore
fn({
  foo: 'life',
  bar: 42
})
