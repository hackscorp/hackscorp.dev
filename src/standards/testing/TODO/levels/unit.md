# Unit tests

-----

A good way of checking if your tests have good coverage is to deliberately change the behavior of a component. At least one expectation _should_ fail somewhere.

-----

It is true that in modern typed languages there is less value in unit tests than there used to be. But they are certainly not obsolete. They are an incredibly _developer tool_.

But it is important to remember the limitations of unit tests. It is NOT about code coverage. It is possible to write an app that passes 100% of unit tests and has every line of code covered, and perhaps even every possible code path (branch), yet for the app to be broken for the user.

-----

Likewise, especially on greenfield projects where the internal structure and state of the system is in a state of flux and yet to be locked down, internal structures are liable to change. Therefore there may less benefit than normal to writing unit tests right from the start. Better to test at the outermost boundary of the code, and fill-in later. eg a CLI invocation.

----

Some things are difficult to test: things with lots of setup, configuration with an external system, etc. With tests you can automate that setup and run through a scenario. You can mock external systems. This gives you a way of setting up a scaffold into which your implementation will fall.

----

Get a bug? Extend your test coverage.


-----

Integration tests tend to be part of our unit test suites — since "units" tend to be individual packages of code, which may be composed of multiple modules, classes, functions, and so on.
