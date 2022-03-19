// @ts-check

/**
 * Error type representing failed assertions.
 *
 * @example
 * throw new AssertionError('Expected a number, received a string')
 */
 class AssertionError extends Error {

  /**
   * @param {string} msg - Error message.
   */
  constructor (msg) {
    super(msg)
  }

}

/**
 * @throws `AssertionError` sometimes.
 */
function testError () {
  throw new AssertionError(100)
}
