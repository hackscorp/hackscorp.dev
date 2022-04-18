# Errors

Errors and other log messages SHOULD go to stderr. This means that, when commands are piped together, the error messages will get displayed to the user but the standard output will get piped into the next command.

But do not treat stderr like a log file. Don't print log-level labels here — "ERROR", "WARN", etc. — or any other extraneous contextual information, unless in verbose mode.

It is RECOMMENDED to use only a limited amount of color in stderr output, or no color at all. Prefer to use only indentation and other plain-text formatting to give the output structure. However, it can be beneficial to use some color — the convention for errors is to use red — to draw the user's attention to the important bits of information in verbose outputs. The same rules apply as for stdout — disable colors in the stderr output in these circumstances:

- When stderr is not an interactive terminal (a TTY).
- When an environment variable named `NO_COLOR` exists.
- When an environment variable named `[APP]_NO_COLOR` exists, where `[APP]` is a prefix identifying your program. 

Non-zero exit codes MUST be used to reported failed operations, and the exit codes MUST be mapped to all the different failure modes of your program. Each error type and failure scenario — identified by a unique non-zero exit code — MUST be fastidiously documented. One of the most common reasons to consult documentation is to fix errors. That is why all types of error from a program MUST be documented. This will save your users loads of time.

Catch all errors and rewrite them for humans. Refer to our [error message guidelines](/standards/text/errors). Think of it like a conversation, where the user has done something wrong and the program is guiding them in the right direction. Example: 

```txt
Can't write to file.txt. You might need to make it writable. Try running 'chmod +w file.txt'.
```

Signal-to-noise ratio is crucial. The more irrelevant output you produce, the longer it's going to take the user to figure out what went wrong. If your program produces multiple errors of the same type, consider grouping them under a single explanatory header instead of printing many similar-looking lines.

Consider where the user will look first. Put the most important information at the _end_ of the error output, not the start. The eye will be drawn to red text, so use it intentionally and sparingly.

If there is an unexpected or unexplainable error, provide debug and traceback information, and instructions on how to submit a bug. That said, don't forget about the signal-to-noise ratio: you don't want to overwhelm the user with information they don't understand. Not all users are developers like you! Consider, for example, writing scary-looking stack traces to a debug log fiel, instead of printing it to the terminal.

Make it effortless to submit bug reports. One nice thing you can do is provide a URL and have the bug submission form pre-populated with as much information as possible.

## Further reading

- **[Formatting error messages](//www.gnu.org/prep/standards/html_node/Errors.html)** \
  The relevant section from the GNU coding standards.
