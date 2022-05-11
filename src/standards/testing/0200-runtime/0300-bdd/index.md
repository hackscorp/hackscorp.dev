# Behavior-driven development (BDD)

One of the reasons the term behavior-driven development was invented was that many people thought the term test-driven development (TDD) to be misleading.

Originally, the term BDD was not meant to refer to the writing of test scripts. It was intended to refer to the demonstration of the _behavior_ of code. The tests were _expectations_ on the behavior. It's a subtle but important distinction.

The term BDD was subsequently adopted by "behavioral testing" frameworks like Cucumber, and so BDD has come to be thought of as a particular approach to TDD.

BDD is an approach to structuring test scripts around the expected high-level behavior of the system under tests.

By structuring our tests around the behavior of the system, our tests start to serve another purpose. As well as verifying the correct behavior of the code (ie verifying that actual behavior matches our expectations), the tests also serve as a form of _documentation_ of that behavior.

BDD is mostly widely used in end-to-end tests, but there is no reason not to adopt this style for [unit-level tests](/standards/testing/runtime/bdd/unit) too, where it is practical and beneficial to do so.
