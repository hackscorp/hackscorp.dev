# Levels of runtime testing

Next Saturday morning, you plan to paint a wall of your house. Which brush will you use? You could use a fine-point brush for the whole wall. But that would take too long and the end result would not look very even. You could use a roller for everything. But that wouldn't allow you ot make a nice finish in the corners.

Of course, you would use an assortment of brushes. Different tools for different use cases.

The same is true of software testing. We use different "levels" of tests to provide complete coverage.

Depending on who you ask, there are two or three levels of runtime software testing. In XP, there are only two kinds: **unit testing** and **acceptance testing**. These are the levels of testing we find to be the most useful. Sometimes — but rarely — we find it useful to add an intermediate level: **integration testing**.

One testing level is not _better_ than another. Unit tests are not _preferred_ to end-to-end tests, or vice versa. Rather, the different levels of testing fill in different parts of the code coverage. Some of the coverage requires a fine-tipped brush. For other coverage, a roller.

Nevertheless, as a general rule-of-thumb, for most software systems there should be substantially more code devoted to unit-level tests than to acceptance tests.

A metaphor to help visualize this is the **test pyramid**. Unit tests form the base of the pyramid, end-to-end tests the tip, with integration tests somewhere in the middle.

![](<test-pyramid.png>)

This is only a rule-of-thumb. There will be plenty of exceptions to this rule. For some systems is will make sense to focus on acceptance rather than unit tests. For other systems, all that may be needed are unit tests. And so on.
