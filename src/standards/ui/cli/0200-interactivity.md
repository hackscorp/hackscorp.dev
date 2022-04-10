# Interactivity

## Prompts

Never build CLI commands that _require_ the user be prompted for input. It MUST be possible to run CLIs non-interactively. This means it MUST be possible to input all invocation-specific parameters via arguments or flags.

Prompts and other interactive elements MUST be enabled only if stdin is an interactive terminal (a TTY). In UNIX-based systems, this is a pretty reliable way to tell whether you're piping data into a command or whether it's being run in a script. If the program is not being run in an interactive terminal, prompts MUST NOT be used. Instead, the program MUST return errors when required input parameters are missing.

Consider designing in the `--no-input` flag to disable prompts. This MUST force the program to run in non-interactive mode.

In interactive mode, when a user does not pass a required argument or flag, the program SHOULD prompt for the missing input, if possible. This is a better experience for the user than receiving an error.

In interactive mode, always prompt for confirmation before doing anything dangerous or highly destructive. A common convention is to require the user to type `y` or `yes`. In non-interactive environments, confirmation SHOULD be done by passing the `--force`/`-f` flag.

For dangerous and destructive operations, consider also offering users a `--dry-run` mode, which will show them the consequences of their action before they commit to it.

When prompting for passwords, don't print the password as the user types. In UNIX, this is done by turning off echo in the terminal. Most other systems will have helpers for this.

## Signals

Let users escape from operations by typing `Ctrl`+`C` (the INT signal).

Exit as soon as possible, and return a confirmation of the exit before you start clean-up.

Remember to add a timeout to any clean-up operation, so it can't hang forever. If the user types `Ctrl`+`C` again during the clean-up operation, cancel the clean-up.

Design your programs to start in situations where clean-up of prior operations has not been completed.
