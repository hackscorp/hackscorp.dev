# Arguments and flags

First, a note on terminology:

- _Arguments_, or _args_, are positional parameters to a command. For example, the file paths you provide to `cp` are args. The order of args is often important: `cp foo bar` means something different from `cp bar foo`.

- _Flags_ are named parameters, denoted with either a hyphen and a single-letter name (eg `-r`) or a double hyphen and a multiple-letter name (eg `--recursive`). They may or may not also include a user-specified value (`--file foo.txt` or `--file=foo.txt`). The order of flags, generally speaking, does not affect program semantics.

If possible, the order of arguments, flags and subcommands should be made not to matter. A lot of CLIs, especially those with subcommands, have unspoken rules on where you can put various arguments. For example a command might have a `--foo` flag that only works if you put it before the subcommand:

```txt
$ mycmd --foo=1 subcmd
works

$ mycmd subcmd --foo=1
unknown flag: --foo
```

This can be very confusing for the user, especially given that one of the most common things users do when trying to get a command to work is to hit the up arrow to get the last invocation, stick another option on the end, and run it again. If possible, try to make both forms equivalent, although you might run up against the limitations of your argument parser.

## Flags

Prefer flags to args. It's a bit more typing, but it makes it much clearer what is going on. It also makes it easier to make changes to how you accept input in the future. Sometimes when using args, it's impossible to add new input without breaking existing behavior or creating ambiguity.

Have full-length versions of all flags. For example, have both `-h` and `--help`. Having the full version is useful in scripts where you want to be verbose and descriptive, and you don't have to look up the meaning of flags everywhere.

Only use one-letter flags for commonly used flags, particularly at the top-level when using subcommands. That way you don't pollute your namespace of short flags, forcing you to use convoluted letters and cases for flags you add in the future.

Use standard names for flags, if there is a standard. If another commonly used command uses a flag name, it's best to follow that existing pattern. That way, a user doesn't have to remember two different options (and which command it applies to), and users can even guess an option without having to look at the help text. Here's a list of commonly used options:

- `-a`, `--all`: All. For example, `ps`, `fetchmail`.
- `-d`, `--debug`: Show debugging output.
- `-f`, `--force`: Force. For example, `rm -f` will force the removal of files, even if it thinks it does not have permission to do it. This is also useful for commands which are doing something destructive that usually require user confirmation, but you want to force it to do that destructive action in a script.
- `--json`: Display JSON output.
- `-h`, `--help`: Help.
- `--no-input`: Non-interactive mode.
- `-o`, `--output`: Output file. For example, `sort`, `gcc`.
- `-p`, `--port`: Port. For example, `psql`, `ssh`.
- `-q`, `--quiet`: Quiet. Display less output, or none at all. This is particularly useful when displaying output for humans that you might want to hide when running in a script.
- `-u`, `--user`: User. For example, `ps`, `ssh`.
- `--version`: Version.
- `--verbose`: Verbose output.
- `-v`: Can mean version or verbose. Best not use this at all, instead returning suggestions if the user inputs this flag.

It's important to design good defaults. Making things configurable is good, but most users are not going to find the right flag and remember to use it all the time (or alias it). If a commonly-used option is not the default, you're making the experience worse for many of your users. For example, `ls` has terse default output to optimize for scripts and other historical reasons, but if it were designed today, it would probably default to `ls -lhF`.

### Optional values

If a flag can accept an optional value, allow a special word like "none". For example, `ssh -F` takes an optional filename of an alternative `ssh_config` file, but `ssh -F none` runs SSH with no config file. Don't just use a blank value, as this can make it ambiguous whether arguments are flag values or arguments.

### Secrets

Do not read secrets directly from flags. When a command accepts a secret, eg. via a `--password` argument, the argument value will leak the secret into `ps` output and potentially shell history. And, this sort of flag encourages the use of insecure environment variables for secrets.

Consider accepting sensitive data only via files, eg with a `--password-file` argument, or via `stdin`. A `--password-file` argument allows a secret to be passed in discreetly, in a wide variety of contexts.

Note, although it's possible to pass a file's contents into an argument in Bash by using `--password $(< password.txt)`, this approach has the same security issue of leaking the file's contents into the output of `ps`. It's best avoided.

## Arguments

Multiple arguments are fine for simple actions against multiple files. For example, `rm file1.txt file2.txt file3.txt`. This also makes it work with globbing: `rm *.txt`.

If you've got two or more arguments for different things, you're probably doing something wrong. The exception is a common, primary action, where the brevity is worth memorizing. For example, `cp <source> <destination>`.

## Piping

If either the input or output is a file, support `-` to read from `stdin` or write to `stdout`. This lets the output of another command be the input of your command and vice versa, without using a temporary file. For example, `tar` can extract files from `stdin`:

```txt
$ curl https://example.com/something.tar.gz | tar xvf -
```

## Prompts

Prompt for user input. If a user doesn't pass a required argument or flag, prompt for it. 

But never _require_ a prompt. Always provide a way of passing input with flags or arguments. If `stdin` is not an interactive terminal, skip prompting and just require those flags/args.

However, always prompt for a confirmation before doing anything dangerous or highly destructive. A common convention is to prompt for the user to type `y` or `yes` if running interactively, or requiring them to pass `-f` or `--force` otherwise. "Dangerous" is a subjective term, and there are differing levels of danger:

- **Mild**: A small, local change such as deleting a file. You might want to prompt for confirmation, you might not. For example, if the user is explicitly running a command called something like `delete`, you probably don't need to ask.

- **Moderate**: A bigger local change like deleting a directory, a remote change like deleting a resource of some kind, or a complex bulk modification that can't be easily undone. You usually want to prompt for confirmation here. Consider giving the user a way to "dry run" the operation so they can see what'll happen before they commit to it.

- **Severe**: Deleting something complex, like an entire remote application or server. You don't just want to prompt for confirmation here, you want to make it hard to confirm by accident. Consider asking them to type something non-trivial such as the name of the thing they're deleting. Let them alternatively pass a flag such as `--confirm="name-of-thing"`, so it's still scriptable.

Consider whether there are non-obvious ways to accidentally destroy things. For example, imagine a situation where changing a number in a configuration file from 10 to 1 means that 9 things will be implicitly deleted, this should be considered a severe risk, and should be difficult to do by accident.

See the section on [interactivity](/standards/ui/cli/interactivity) for more guidance in this area.

## Argument parsing 

Use a command line argument parsing library wherever practical.

Many language's have these built-in. Else use a good third party one. The best of these will handle not only arguments and flags, but also help text (man pages) and even spelling suggestions.
