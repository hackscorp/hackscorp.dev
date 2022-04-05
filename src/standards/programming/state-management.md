# State management

Manage state carefully.

Every program has state, but how that state is managed can make a world of difference. Poor management of state is a huge contributing factor to overall system complexity, and often occurs because it hasn't been thought about early enough, before it grew into a much worse version of the problem.

There are lots of different strategies to help, from particular approaches to handling state in a given environment, to using functional languages and/or approaches to create tighter constraints around how state can change. Whatever you do, be deliberate about how state in your system changes.

In their 2006 paper, [Out of the Tar Pit](//curtclifton.net/papers/MoseleyMarks06a.pdf), researchers Ben Moseley and Peter Marks find that the handling of state is one of the biggest causes of complexity in large-scale software systems. State adds a huge burden when trying to analyse and reason about a system.
