// @flow

function fn (callback: Function): void {
  // ...
}

fn(() => {
  // ...
})

fn(function () {
  // ...
})
