// @flow

function fn (val: ?number) {
  if (typeof val === 'number') {
    return val * 2
  }
}
