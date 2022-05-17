# Runtime testing

TODO: Define runtime testing versus static testing

## Manual vs automated runtime testing

In broad terms, runtime testing falls into two categories: manual and automated.

It was once the case that software houses had to employ whole departments of software testers. But as the tools and techniques we use to make software have matured, much of this work can now be automated. Not all of it, some runtime testing techniques are still manual (see [exploratory testing](/standards/testing/runtime/exploratory), for example). But most of the work of a modern software developer is to write and maintain code that can be run over-and-over to test the software in a fully automated way.

The benefits of automated over manual testing are profound. For example, by automating our runtime tests we can know when our software is broken in a matter of seconds and minutes, rather than days or weeks, and far fewer bugs hit production. Without automated runtime testing, the tight feedback loops that are a prerequisite of modern agile engineering operations would not exist. Automated testing allows us to move fast with confidence.

It goes without saying, that as much runtime testing as possible must be scripted.

The same principles of [clean code](/standards/programming/principles/keep-it-simple) apply for test code as for production code.

## Pros and cons

The primary benefit of automated runtime testing is to ensure that new changes introduced to the code or configuration of a software system do not introduce unexpected regressions in the existing operations of the software.

But automated runtime testing brings other benefits, too.

Automated tests help us to write _correct_ code, and they place constraints that help us to write code to a satisfactory level of _quality_.

In addition, automated tests can double up as a form of documentation, defining (for example) all the possible input and output, and all the possible states and error scenarios, of a whole software system and of its individual component parts. Tests can also serve as documentation on how software components are meant to be used, serving as API documentation, by giving you working executable examples of code.

The benefits of good test coverage grow with the scale and complexity of the software system.

For this reason, it is our policy to maintain very high levels of test coverage of our computer programs. Nevertheless, there are scenarios when the writing of tests does not give much value.

One such scenario is in the prototyping of proof-of-concept applications and features. In such contexts, code is liable to change rapidly, and ultimately it may be discarded altogether. In this case, it is okay for tests to come later, if and when a final solution is approved for proper implementation.

Sometimes the costs of creating automated tests outweigh the benefits. For example, [jsdom](//github.com/jsdom/jsdom) is a cheap and easy way to emulate the DOM of web browsers in the context of a Node-run test suite. But jsdom, as an emulator, has limitations. It cannot replicate every type of interaction with real DOM systems. You could upgrade to testing against real web browsers, by swapping jsdom for [Selenium WebDriver](//www.selenium.dev/documentation/webdriver/), for example. But such complex test environments are expensive to configure and maintain.

Tests add value, sure. But, like everything that adds value, there is a cost. Mature engineers will know when to take a step back and evaluate whether the costs exceed the value, rather than stubbornly chasing quality metrics (in this case, test coverage).

**The value derived from automated tests SHOULD be proportional to their costs of initial development and long-term upkeep.**
