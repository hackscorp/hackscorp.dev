# Sufficient abstraction

Choose _sufficient_ abstraction levels. Don't over-abstract and don't abstract too early.

A little bit of duplication is often less costly than premature abstraction.

Until you have a high degree of confidence that your abstraction is going to pay for itself — because it solves a real, abstract problem that you really do have — don't do it. Wait and learn more. Until then, repeating code can help avoid dependency, which itself makes the code easier to change independently or delete.

A premature abstraction creates complexity through dependency and indirection, and can become a bottleneck to your ability to [respond to change](/principles/embrace-change).
