# Unit tests

We treat unit tests as an aid to developers. Unit tests help developers to write code. They help us to decompose our programs into lots of small subroutines, each of which we can develop independently, so incrementally composing complex logic from lots of smaller pieces.

We write unit tests alongside our code primarily to observe the results of our development. Unit tests allow us to verify that the individual pieces are behaving exactly as we expect them to.

In unit tests, we pass input to components and make assertions on the output. We also inspect the system for state mutations — that internal state did or did not change. With this test-driven approach to development, in which code and tests are written in parallel, we can implement state mutations in an incremental fashion — which is a rather wonderful way of working.

Michael Feathers described unit tests as like the vices used in woodworking. When you're working on a piece, you don't want the other pieces to move. So you put a clamp on the other pieces, and then you go to work on the piece you want to refactor or modify/extend behavior. Tests are like an alarm that something in the clamp — a bit of state, for instance — has slipped.

<!--

Unit tests MUST be written by developers as an integral part of the software development process, to ensure each section of an application (ie each unit) meets its design and behaves as intended.

Unit tests MUST be written at the same time as development code. A "test-driven development" approach is not essential, but what is REQUIRED is that code and its unit tests are merged into the mainline at the same time.

Test-first development is a particular approach to test-driven development. Writing a test ahead of the code makes the code design testable, _de facto_. But this methodology is not always practical.

The [Team Lead] will select the unit testing framework — including the test runner, assertion library, and mocking library — and will also oversee unit test quality and coverage.

Reading and writing unit tests is an essential skill for software developers.

----

All code used in production is expected to have unit tests. Code review tools SHOULD be configured to highlight if source files are added without corresponding tests.

Code reviewers usually require that any change which adds new functionality should also add new tests to cover the new functionality.

Mocking frameworks (which allow construction of lightweight unit tests even for code with dependencies on heavyweight libraries) are quite popular.

Testing MUST be enforced as part of the code review and commit/merge process.

It is also strongly RECOMMENDED to use automated tools for measuring test coverage.

-->
