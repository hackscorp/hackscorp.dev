// @flow

function fn (options?: { foo?: string }) {
  // ...
}

fn({ foo: 'bar' })
fn({ foo: undefined })
fn({})
fn()

// @flow-ignore
fn({ foo: null })
