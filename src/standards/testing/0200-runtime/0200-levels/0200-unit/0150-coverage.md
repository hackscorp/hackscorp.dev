# Unit test coverage

<!--

TODO: Link to main section on code coverage

Here, talk in general terms about the pros and cons of chasing coverage metrics for unit tests specifically.

Especially on greenfield projects, where the internal structure and state of the system is in a state of flux and not-yet locked down, internal structures are liable to change. Therefore, there may be less benefit than normal to writing unit tests right from the start.

In general, for new projects, it is better to start by testing the outermost boundary of the code, and fill-in the details when the implementation stabilizes.

Extend code coverage at the unit level to solve specific problems. Got a bug? Extend your code coverage? Not sure how something works? Break it down with unit tests. Are you about to embark on a spot of refactoring and you want to ensure you don't introduce unintended side effects? Extend your code coverage?

Unit tests are a good idea for components that have been badly implemented, or have proven to be brittle.

Not every unit of code should be covered with tests. It may not be particularly beneficial to retrospectively cover code with tests when that code has already proven reliable in real-world production applications, and when that code is unlikely to be changed or extended in the future.

However, Engineers SHOULD retrospectively apply unit tests to components before refactoring them. This is a great way to reduce the changes of introducing regressions.

And some dependencies are just too hard to mock, in which case you may decide to skip pure unit tests and focus instead on integration and other high level tests.

-->
