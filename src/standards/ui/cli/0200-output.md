# Output

Return zero exit code on success, non-zero on failure. Exit codes are how scripts determine whether a program succeeded or failed, so you should report this correctly. Map the non-zero exit codes to the most important failure modes.

The primary output for your command should go to `stdout`. Anything that is machine readable should also go to `stdout` — this is where piping sends things by default.

Log messages, errors, and so on should all be sent to `stderr`. This means that when commands are piped together, these messages are displayed to the user and not fed into the next command. But don't treat `stderr` like a log file, at least not by default. Don't print log level labels (`ERR`, `WARN`, etc) or extraneous contextual information, unless in verbose mode.

Streams of text is the universal interface in UNIX. Programs typically output (via `stdout`) lines of text, and programs typically expect lines of text as input. Therefore you can compose multiple programs together.

> Expect the output of every program to become the input to another, as yet unknown, program. \
> — [Doug McIlroy](//homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html)

But human-readability of the output does not necessarily need to be sacrificed, even if the output is meant to be useful as input elsewhere. If human-readable output breaks machine-readable output, use `--plain` to display output in plain, tabular text format for integration with tools like `grep` or `awk`. In some cases, you might need to output information in a different way to make it human-readable.

For example, if you are displaying a line-based table, you might choose to split a cell into multiple lines, fitting in more information while keeping it within the width of the screen. This breaks the expected behavior of there being one piece of data per line, so you should provide a `--plain` flag for scripts, which disables all such manipulation and outputs one record per line.

Display output as formatted JSON if `--json` is passed. JSON allows for more structure than plain text, so it makes it much easier to output and handle complex data structures. `jq` is a common tool for working with JSON on the command-line, and there is now a large ecosystem of tools that output and manipulate JSON. JSON is also widely used on the web, so by using JSON as the input and output of programs, you can pipe directly to and from web services using `curl`.

## Empty output

Display output on success, but keep it brief. Traditionally, when nothing is wrong, UNIX commands display no output to the user. This makes sense when they're being used in scripts, but it can make commands appear to be hanging or broken when used by humans. For example, `cp` will not print anything, even if it takes a long time. It's usually best to err on the side of less. For instances where you do want no output — for example, when used in shell scripts — to avoid clumsy redirection of `stderr` to `/dev/null`, you can provide a `-q` option to suppress all non-essential output.

## Changing state

If you change state, tell the user. When a command changes the state of a system, it's especially valuable to explain what has just happened, so the user can model the state of the system in their head — particularly if the result doesn't directly map to what the user requested.

For example, `git push` tells you exactly what it is doing, and what the new state of the remote branch is:

```txt
$ git push
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 2.09 KiB | 2.09 MiB/s, done.
Total 10 (delta 8), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (8/8), completed with 8 local objects.
```

Make it easy to see the current state of the system. If your program does a lot of complex state changes and it is not immediately visible in the filesystem, make sure you make this easy to view. For example, `git status` tells you as much information as possible about the current state of your Git repository, and some hints at how to modify the state.

Actions crossing the boundary of the program's internal world should usually be explicit. This includes things like reading or writing files tha the user didn't explicitly pass as arguments (unless those files are storing internal program state, such as a cache), or talking to a remote server, eg to download a file.

## Suggest next steps

Suggest commands the user should run. When several commands form a workflow, suggesting to the user commands they can run next helps them learn how to use your program and discover new functionality. For example, `git status` suggests commands you can run to modify the state you are viewing.

## Use color and symbols

Use color with intention. For example, you might want to highlight some text so the user notices it, or use red to indicate an error. But don't overuse color. If everything is a different color, then the color means nothing and only makes it harder to read.

[Not everyone like colorful output.](https://no-color.org/) Disable color if your program is not in a terminal or if the user requested it. These things should disable colors:

- `stdout` or `stderr` is not an interactive terminal (a TTY). It's best to individually check: if you're piping `stdout` to another program, it's still useful to get colors on `stderr`.
- The `NO_COLOR` environment variable is set.
- The `TERM` environment variable has the value `dumb`.
- The user passes the option `--no-color`.
- You may also want to add a `MYAPP_NO_COLOR` environment variable in case users want to disable color specifically for your program.

If `stdout` is not an interactive terminal, don't display any animations. This will stop progress bars turning into Christmas trees in CI log output.

Use symbols and emoji where it makes things clearer. Pictures can be better than words if you need to make several things distinct, catch the user's attention, or just add a bit of character. Be careful, though. It can be easy to overdo it and make your program look cluttered or feel like a toy.

```txt
$ yubikey-agent -setup
🔐 The PIN is up to 8 numbers, letters, or symbols. Not just numbers!
❌ The key will be lost if the PIN and PUK are locked after 3 incorrect tries.

Choose a new PIN/PUK: 
Repeat the PIN/PUK: 

🧪 Retriculating splines …

✅ Done! This YubiKey is secured and ready to go.
🤏 When the YubiKey blinks, touch it to authorize the login.

🔑 Here's your new shiny SSH public key:
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBCEJ/
UwlHnUFXgENO3ifPZd8zoSKMxESxxot4tMgvfXjmRp5G3BGrAnonncE7Aj11pn3SSYgEcrrn2sMyLGpVS0=

💭 Remember: everything breaks, have a backup plan for when this YubiKey does.
```

## Pagers

If you are outputting a lot of text, use a pager like `less`.

For example, `git diff` does this by default. Using a pager can be error-prone, so be careful with your implementation such that you don't make the experience worse for the user. You shouldn't use a pager if `stdin` or `stdout` is not an interactive terminal.

A good sensible set of options to use for `less` is `less -FIRX`. This does not page if the content fills one screen, ignores case when you search, enables color and formatting, and leaves the contents on the screen when `less` quits.
