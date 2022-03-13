// @flow

function stringify (value: mixed) {
  if (typeof value === 'string') {
    return '' + value
  }
  if (typeof value === 'number') {
    return '' + value
  }

  return ''
}
