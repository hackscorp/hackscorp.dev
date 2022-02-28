// @flow

function fn(onError: (type: string, msg: string | null) => void) {
  // ...
  onError.call(this, 'warning', 'Error message...')
}

fn((type, message) => {
  // ...
})

