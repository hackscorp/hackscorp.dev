# Errors

One of the most common reasons to consult documentation is to fix errors. All errors MUST be documented. This will save your users loads of time.

Catch all errors and rewrite them for humans. Refer to our [error message guidelines](/standards/text/errors). Think of it like a conversation, where the user has done something wrong and the program is guiding them in the right direction. Example: 

```txt
Can't write to file.txt. You might need to make it writable by running 'chmod +w file.txt'.
```

Signal-to-noise ratio is crucial. The more irrelevant output you produce, the longer it's going to take the user to figure out what they did wrong. If your program produces multiple errors of the same type, consider grouping them under a single explanatory header instead of printing many similar-looking lines.

Consider where the user will look first. Put the most important information at the _end_ of the output, not the start. The eye will be drawn to red text, so use it intentionally and sparingly.

If there is an unexpected or unexplainable error, provide debug and traceback information, and instructions on how to submit a bug. That said, don't forget about the signal-to-noise ratio: you don't want to overwhelm the user with information they don't understand. Not all users are developers like you! Consider writing the debug log to a file instead of printing it to the terminal.

Make it effortless to submit bug reports. One nice thing you can do is provide a URL and have the bug submission form pre-populated with as much information as possible.
