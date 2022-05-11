# Integration tests

Integration tests sit somewhere between unit tests and acceptance tests. Integration testing can refer to different things depending on context, but conceptually this level of testing involves verifying the combined behavior of a collection of software modules that are developed and maintained independently of one another.

We find integration tests to be only _occasionally_ useful. The things that integration tests cover tend to be covered perfectly well by a combination of unit tests and integration tests.

But there are some contexts where separate integration tests can be useful.

One such context is where separate teams are working on modules that are intended to ultimately interact directly with one another. Here, integration tests would help to ensure that everyone's code plays nicely together, and a test-first approach to the development would allow interfaces to be defined from the start. 

But if the modules were interacting _indirectly_ through, say, a plugin architecture of a central framework, end-to-end tests would probably be sufficient.
