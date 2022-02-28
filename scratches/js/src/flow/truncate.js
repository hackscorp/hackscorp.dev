// @flow

function truncate (str: string, maxLen: number, cont: string = '…'): string {
  return (str.length > maxLen) ?
    str.slice(0, maxLen) + cont : str
}

truncate('hello', 3)
