# Behavior-driven development (BDD)

The term behavior-driven development (BDD) has evolved a little over time and has come to mean a particular approach to organizing and writing tests.

Tests that are written in a BDD style make assertions on the high-level _behavior_ of code over the low-level _implementation_ details.

By structuring our tests around the behavior of the system, our tests start to serve another purpose. As well as verifying the correct behavior of the code (ie verifying that actual behavior matches our expectations), the tests also serve as a form of _documentation_ of that behavior.

BDD is mostly widely used in end-to-end tests, but the style can be adopted for [unit-level tests](/standards/testing/runtime/bdd/unit) too — where it is practical and beneficial to do so.
