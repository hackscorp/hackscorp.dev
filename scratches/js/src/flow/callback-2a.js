// @flow

function fn(onError: (string, string | null) => void) {
  // ...
  onError.call(this, 'warning', 'Error message...')
}

fn((type, msg) => {
  console.log(msg)
})

