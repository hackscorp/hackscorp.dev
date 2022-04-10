# Arguments and flags

The most commonly-used options SHOULD be inputted via arguments or flags:

- **Arguments** or **args** are positioned parameters to a command. For example, the file paths you provide to `cp` are arguments. Their order is significant: `cp foo bar` is not equivalent to `cp bar foo`. Arguments look similar to, but are distinct from, [subcommands](/standards/ui/cli/subcommands).

- **Flags** are named parameters. Generally, the order of flags does not affect program behavior. In UNIX-like systems, flags take one of these two formats:

  - `--[name]`, where `[name]` is a multi-letter word, eg `--recursive`
  - `-[x]`, where `[x]` is a single-letter abbreviation, eg `-r`

  Optionally, flags may be given a value. In UNIX, the syntax is `--flag value` or `--flag=value`. 

As a general rule, arguments SHOULD be used for required options and flags for optional ones. But there are plenty of legitimate exceptions to this rule. It is perfectly okay to have optional arguments and mandatory flags, if that makes for a better API overall.

Flags SHOULD be preferred to arguments in most cases. They take more typing, but the purpose of named parameters is clearer. Flags also afford us more flexibility. Users can input them in any order, and we can more easily add new flags in a backwards compatible manner.

Arguments SHOULD be used only for tightly-scoped, primary operations that are likely to be frequently run by your users, and which will unlikely ever change in the lifetime of the tool. Good examples include `cp [source] [destination]` and `rm [file1] [file2] ...` from UNIX.

## Flags

All flags MUST have long-form versions, eg `--help`. Err on the side of clarity over brevity every time.

The most useful flags MAY be aliased with short-form flags, eg `-h`. There SHOULD NOT be too many of these. There is a finite number of one-letter flags you can add to a program, so be wary of polluting this particular namespace.

Follow existing patterns and choose standard and conventional names for flags. Here's a list of common flags used in UNIX programs:

| Flag         | Abbr. | Description                                                     | Examples          |
|--------------|-------|-----------------------------------------------------------------|-------------------|
| `--all`      | `-a`  | All                                                             | `ps`, `fetchmail` |
| `--debug`    | `-d`  | Show debugging output                                           |                   |
| `--force`    | `-f`  | Force a destructive or dangerous operation without confirmation | `rm`              |
| `--json`     |       | Display JSON output                                             |                   |
| `--help`     | `-h`  | Show help text                                                  |                   |
| `--no-input` |       | Non-interactive mode                                            |                   |
| `--output`   | `-o`  | Output file                                                     | `sort`, `gcc`     |
| `--port`     | `-p`  | Port                                                            | `psql`, `ssh`     |
| `--quiet`    | `-q`  | Quiet mode (display less output or none at all)                 |                   |
| `--user`     | `-u`  | User                                                            | `ps`, `ssh`       |
| `--version`  |       | Version                                                         |                   |
| `--verbose`  |       | Verbose output                                                  |                   |

Note that `-v` is varyingly used as an abbreviation for "version" and "verbose". To avoid confusion, it is best to not use this flag at all. Ideally, when this flagged is used, suggest what other flags the user can try instead.

```txt
$ my-tool -v
The flag "-v" is not recognized. Did you mean "--version"?
```

It is RECOMMENDED that commands that print to stdin/stderr have a "quiet mode". This is useful in scripts to avoid cluttering log files. Likewise, "force mode" is useful to allow interactive commands — which prompt users for input or confirmation — to work in automation scripts. See the section on [interactivity](/standards/ui/cli/interactivity) for more guidance in this area.

## Secrets

You SHOULD NOT read secrets from flags such as `--password`.

In UNIX, secrets passed as arguments and flags will leak into the output of the `ps` command, and potentially the shell history too. And, in UNIX and indeed most software runtime environments, this design encourages use of insecure [environment variables](/standards/ui/cli/options/environment-variables) to hold sensitive data.

Best practice is to accept secrets only via files or stdin.

So, a `--password-file` flag is better than `--password`. In Bash, although it's possible to pass a file's contents into an argument — eg `--password $(< password.txt)` — this actually has the same security concerns as typing the password directly into the command. A `--password-file` flag, or equivalent, would allow passwords to be passed in securely, via files with appropriate permissions, in a wide variety of contexts.

It is safe also to prompt users for passwords and other secrets, but you SHOULD provide a means for these to be inputted non-interactively via files and/or stdin.

## Optional values

For flags that accept optional values, consider allowing a special word like "none" to refer to no value at all.

For example, `ssh -F` accepts an optional filename (an alternative path to `ssh_config`) but `ssh -F none` runs SSH with no config file at all.
