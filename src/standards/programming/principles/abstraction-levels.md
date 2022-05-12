# Abstraction levels

Each component should be written at the same level of abstraction. Do not switch from calls to high-level business entities and services to low-level abstractions such as string buffers within the same function. This sort of code is just the "stream of consciousness" of the coder when they were trying to get something to work. If you see this sort of thing, it is a signal that some refactoring is needed to extract out the low-level concerns. "First, make it work. Then, make it right."

<!--

Within each component, keep a single level of abstraction. For example, do not mix business logic with lower-level technical details in the same method.

TODO: Minimal dependencies, all from the next level of abstraction down.

## Sufficient abstraction

Choose _sufficient_ abstraction levels. Don't over-abstract and don't abstract too early.

A little bit of duplication is often less costly than premature abstraction.

Until you have a high degree of confidence that your abstraction is going to pay for itself — because it solves a real, abstract problem that you really do have — don't do it. Wait and learn more. Until then, repeating code can help avoid dependency, which itself makes the code easier to change independently or delete.

A premature abstraction creates complexity through dependency and indirection, and can become a bottleneck to your ability to [respond to change](/principles/embrace-change).

-->
