# Defensive programming

Never trust the users of your program. Validate all user input.

Everywhere your program accepts data from the user, it will eventually be given bad data. Check early and bail out before anything bad happens.

Differentiate user errors from internal logic errors, and let the user know what went wrong and what they need to do to fix it. 

## See also

- [CLI design principles](/standards/ui/cli/principles)
