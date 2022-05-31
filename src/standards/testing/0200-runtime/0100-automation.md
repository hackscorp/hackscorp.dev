# Automated runtime testing

In broad terms, runtime testing falls into two categories: manual and automated.

It was once the case that software houses had to employ whole departments of software testers. But as the tools and techniques we use to make software matured, much of this work became automated. Not all of it. Some runtime testing techniques are still manual — see [exploratory testing](/standards/testing/runtime/exploratory), for example. But most of the work of a software tester today is to write and maintain code that can be run over-and-over to test the software in a fully automated way.

The benefits of automated over manual testing are profound. For example, by automating our runtime tests we can know when our software is broken in a matter of seconds and minutes, rather than days or weeks, and far fewer bugs hit production. Without automated runtime testing, the tight feedback loops that are a prerequisite of modern agile engineering operations would not exist.

Automated runtime testing allows us to move fast with confidence. Tests help us to be confident that new changes introduced to the code or configuration of a software system do not introduce unexpected regressions in the existing operations of the software.

As well as helping us to write _correct_ code, automated runtime tests also place constraints that help us to write _quality_ code.  After all, the most testable code is that which is [clean and simple](/standards/programming/principes/keep-it-simple), has few [side effects](/standards/programming/principles/pure-functions), and few [dependencies](/standards/programming/principles/abstraction.md).

In addition, automated tests can double up as a form of documentation, defining (for example) all the possible input and output, and all the possible states and error scenarios, of a whole software system and of its individual component parts. Tests can also serve as documentation on how software components are meant to be used, acting as API documentation and giving us working examples of executable code.

The benefits of good test coverage grow with the scale and complexity of the software system.

For these reasons, it is our policy to maintain high levels of automated runtime test coverage of our computer programs. (The same [principles of good programming](/standards/programming/principles) are applicable for automated test code as for production code.)

Nevertheless, there are scenarios when the writing of tests does not give much value.

One such scenario is in the prototyping of proof-of-concept applications and features. In such contexts, code is liable to change rapidly, and ultimately it may be discarded altogether. In this case, it is okay for tests to come later, if and when a final solution is approved for proper implementation.

Tests add value, sure. But, like everything that adds value, there is a cost. Mature engineers will know when to take a step back and evaluate whether the costs exceed the value, rather than stubbornly chasing quality metrics (in this case, test coverage).

The value derived from automated tests SHOULD be proportional to their costs of initial development and long-term upkeep.
