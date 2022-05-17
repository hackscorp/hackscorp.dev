# Testing standards

This section covers our approach to software systems testing.

Broadly, there are two modes of software testing:

- Static testing
- Runtime testing

Static testing includes practices such as linting and code review. Runtime testing includes automated unit and acceptance tests, and manual exploratory testing. For most software systems, a combination of static and runtime testing, with some balance of both manual and automated testing, is desirable.

Fundamentally, software testing is the process of verifying that a system meets the requirements of its owner, and that updates to code and configuration do not unexpectedly introduced regressions in the existing operations or quality standards of the software.

But testing — particularly the automated kind — brings other benefits. For example, automated tests place constraints that help us to write better quality code. After all, the most testable code is that which is [clean and simple](/standards/programming/principes/keep-it-simple), has few [side effects](/standards/programming/principles/pure-functions), and few [dependencies](/standards/programming/principles/abstraction.md).

And, depending on their level of abstraction and how they are written, test scripts can double as a form of software requirements specification and implementation documentation.
