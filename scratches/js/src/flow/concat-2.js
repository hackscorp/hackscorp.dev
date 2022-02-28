// @flow

function concat (a: string, b: string): string {
  return a + b
}

concat('foo', 'bar')

// @flow-ignore
concat(1, 2)
