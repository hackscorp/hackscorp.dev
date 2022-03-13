// @flow

function fn (x) {
  // @flow-ignore
  return x.split(' ')
}

fn(42)
