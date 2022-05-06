# Defensive programming

Never trust the users of your program. Validate all user input.

Everywhere your program accepts data from the user, it will eventually be given bad data. Check early and bail out before anything bad happens.

Differentiate user errors from internal logic errors, and let the user know what went wrong and what they need to do to fix it. 

-----

Some would say that if you have good test coverage, then defensive programming does not buy you much more, because your tests plug all the holes.

But defensive programming really serves a different purpose. It acts as an "early warning system" for developers when they are interacting with your APIs. They should not need to run tests to learn that they have passed an invalid type to your function.

-----

## See also

- [CLI design principles](/standards/ui/cli/principles)
