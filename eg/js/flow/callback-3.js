// @flow

function fn (callback: () => mixed): void {
  // ...
}

fn(() => {
  //...
})

fn(function () {
  // ...
})
