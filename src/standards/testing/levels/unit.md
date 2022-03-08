# Unit tests

## Written style

Unit tests MAY be written in a behaviour-driven style, where this is practical. As a general principle, automated tests — at all levels — are ideally defined in the language of the business, and written from the perspective of the end user or client application.

At the very least, the test results are so much more readable and useful. Consider the difference between the following two examples. The first is a fairly typical test suite for a component of a web client application. The second is the same test suite re-written in a more behaviour-oriented style.

```txt
EditTableCellValueModal
  Input validation
    √ the edit field is marked as invalid when the value is outside the allowed range
    √ the edit field is marked as valid when the value is inside the allowed range
  Events
    √ the Cancel button emits an onCancel event when clicked
    √ the Ok button emits an onConfirm event when clicked
```

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

The second style is preferred. But, in the context of unit tests, taking a more integrated/functional approach to how the tests are structured and written, only gets you so far. It will often be the case that you will need to focus on low-level implementation details of individual software components.

Consider the following business requirement.

```feature
Given the discount value entered by the user is more than the product's price
 When the user clicks the Ok button
 Then an error message is displayed to notify the user of their mistake
```

If the implementation of this requirement is spread across multiple GUI components, then in the context of the unit test for one of those components, the most worthwhile test you could write might be something like this:

```txt
describe: The user clicks the Ok button
    test: The discount value is emitted via a "confirm" event
```

This is an example of a case where integration and, better still, functional tests will do a better job of verifying the end user's experience of the system.

Even where user-centric behaviours _can_ be captured within a class, object, module, package or other discrete component, there will often be scenarios where the developer, to be confident in the correctness of their code, will want to drill down and verify that individual attributes, events, methods, etc are doing what they expect them to do. Inspecting such low-level implementation details — even where the wider use case scenarios are correct — can still be beneficial, eg to be confident in the behaviour of complex pieces of inner logic, in event-driven programs and other asynchronous operations, and in many other contexts. Such tests can help us to construct individual parts of wider stories in isolation, and to subsequently refactor those sub-routines in isolation too.

**The overarching goal is to test functionality, not implementation.** But that is not the _only_ goal. Scripted tests can help us make sure our software fulfils its requirements, but scripted tests have many other benefits too, such as the support they give to incremental build processes, and to tasks such as bug identification and refactoring.

In summary, a BDD style to automated test scripts at _all_ levels of the testing pyramid is a good _default_ approach to take. But in the case of unit tests, it is perfectly fine — desirable, even — to mix together assertions on high level behaviours with inspections on the outputs of algorithms, events and other such low level implementation details.

Ultimately, the aesthetics of test scripts is a secondary concern. Their primary purpose is to build confidence in the ongoing correctness of our computer programs.
