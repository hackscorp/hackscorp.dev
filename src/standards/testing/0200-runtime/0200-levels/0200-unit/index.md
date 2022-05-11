# Unit tests

We treat unit tests as an aid to developers. Unit tests help developers to write code. They help us to decompose our programs into lots of small subroutines, each of which we can develop independently, so incrementally composing complex logic from lots of smaller pieces.

We write unit tests alongside our code primarily to observe the results of our development. Unit tests allow us to verify that the individual pieces are behaving exactly as we expect them to.

In unit tests, we pass input to components and make assertions on the output. We also inspect the system for state mutations — that internal state did or did not change. With this test-driven approach to development, in which code and tests are written in parallel, we can implement state mutations in an incremental fashion — which is a rather wonderful way of working.

Michael Feathers described unit tests as like the vices used in woodworking. When you're working on a piece, you don't want the other pieces to move. So you put a clamp on the other pieces, and then you go to work on the piece you want to develop. Tests are like an alarm that something in the clamp — a bit of state, for instance — has slipped.

## Scope

The term "unit" was never meant to refer to an isolated piece of code. It was meant simply to describe a piece of code that you happen to be working with. That piece of code could be a function, a class, a module, a package, or even a whole application.

A unit test can be _any level of abstraction_. Think of the word "unit" as a placeholder for the level of abstraction in which you are working. The unit might be a big chunk or code, or something incredibly tiny.

Remember, unit tests are a _developer tool_, a technique to help us write code. Write the tests at whatever mix of abstraction levels you need to be confident that your code is doing what you think it is doing.

## Style

Whatever the level of abstraction of the test, unit tests SHOULD be written in a [behavior-oriented style](/standards/testing/runtime/bdd) where practical. Use the same basic style as you do for [acceptance tests](/standards/testing/runtime/levels/acceptance). Example: 

```txt
EditTableCellValueModal
  Given the user has entered a value that is out-of-range
    When the user clicks the OK button
      √ Then the edit field is marked as invalid
    When the user clicks the Cancel button
      √ Then the modal is closed
  Given the user has entered a value that is within the accepted range
    When the user clicks the OK button
      √ Then a confirm event broadcasts the value
      √ And the modal is closed
    When the user clicks the Cancel button
      √ Then the modal is closed
```

See the section on [BDD in unit tests](/standards/testing/runtime/bdd/unit) for more guidance on this.
