# Piping

In UNIX CLIs, if either the input or output is a file, support use of `-` to read from stdin or write to stdout.

This lets the output of another command be the input to your command, and vice versa, without needing to pipe through a temporary file.

For example, `tar` can extract files from stdin, like this:

```txt
$ curl https://example.com/something.tar.gz | tar xvf -
```

If your command is expecting to have something piped to it when stdin is an interactive terminal, and no input is provided, you have two options:

- Display help text and quit immediately.
- Or print a lot message to stderr.

But don't do nothing. Don't let the operation just hang, like `cat` does.
