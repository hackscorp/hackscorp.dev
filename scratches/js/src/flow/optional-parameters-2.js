// @flow

function fn (param?: string) {
  // ...
}

fn()
fn('hello')
fn(undefined)

// @flow-ignore
fn(null)
