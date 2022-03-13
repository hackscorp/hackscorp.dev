// @flow

function fn (options?: { foo: ?string }) {
  // ...
}

fn({ foo: 'bar' })
fn({ foo: undefined })
fn({ foo: null })
fn({})
fn()
