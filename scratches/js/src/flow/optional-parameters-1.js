// @flow

function fn (param: string = 'default') {
  // ...
}

fn()
fn('hello')
fn(undefined)

// @flow-ignore
fn(null)
