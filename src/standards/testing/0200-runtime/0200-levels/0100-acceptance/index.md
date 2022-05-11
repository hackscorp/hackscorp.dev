# Acceptance tests

In XP, acceptance tests are used to verify that a software system meets the owner's requirements. They can also serve the purpose of regression tests.

Acceptance tests SHOULD be end-to-end tests (aka system tests or functional tests). They SHOULD run the entire system, perhaps even both the frontend and backend systems in a client-server model, and the test agent SHOULD interact with the system much like a typical end user would. If the system is an application or framework, the acceptance tests SHOULD be driven from the UI.

Unlike unit tests, acceptance tests are "black box" interactions in which we do not inspect the internal state of the system. We only verify its eventual output, given a known initial state followed by a particular sequence of input operations and parameters.

As a business, Hacks put a lot of expectations on the quality and coverage of our acceptance tests. We don't necessarily write the tests first, but we definitely define up-front the acceptance criteria, which will subsequently be used as a basis for the structure of the test scripts that will automate acceptance testing.

Acceptance tests tend to be developed and maintained by dedicated software testing teams, aka Quality Assurance (QA) or Quality Control (QC), whereas unit tests tend to be written by software developers.
