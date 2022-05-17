# General approach

If statements are for machines, comments are for people.

Comments are annotations in the source code that are ignored by (most) parsers, but which allow developers to leave little notes for each other.

There is a tendency in the JavaScript community to err on the side of terse, tidy code, unblemished by comments. The theory goes that, if the code is sufficiently well presented, then it will be self-documenting, and so comments are superfluous.

At Hacks, we take a different view: we don't mind augmenting our code with _extensive_ commentary!

Of course, we should start by making our programs as self-documenting as possible. We can do this by using meaningful function names and descriptive identifiers, and organizing our logic in a clear structure that is easy for people to navigate.

But well-written code on its own can only document _what_ the program does. It cannot tell you _why_ the developer chose to implement a piece of logic in the way they did. Comments are how we transfer the rest of our knowledge about our programs to other developers — the missing pieces of wisdom that are not explicit in the programs themselves.

<!--

Some comments are an invitation for refactoring. Comments should describe things that aren't obvious in the code, but first challenge the code, to see if you can refactor it to make it more obvious. But this isn't always possible, and comments are sometimes required.

We would say: err on the side of more commentary rather than in less. Not sure if you should add a comment? Then add it, just in case. Comments add very little cognitive overhead, and they can be very easily refactored.

-->
