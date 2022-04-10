# Output

## Exit codes

In UNIX-based environments, exit codes are how scripts determine whether a command succeeded or failed. You MUST report these correctly.

Return a **zero exit code** on success and any **non-zero exit code** on failure.

Map the non-zero exit codes to the various failure modes of your program. Document these.

## Standard output

In UNIX-based environments, the primary output from most CLI programs go to stdout. By default, this should be a human-readable text stream. Use flags to toggle the output to a machine-readable format. For example, use `--plain` to support piping into tools such as `grep` or `awk`, and `--json` for use with `jq`.

Something SHOULD be sent to stdout on success, even if it is just a simple confirmation message that the operation has finished successfully. Some commands such as `cp` don't print anything, which has come to be regarded as bad practice. The user SHOULD be given explicit feedback on all operations. To support commands being used in an automated way via scripts, and to avoid clumsy redirection to `/dev/null`, provide a `--quiet`/`-q` flag to suppress all non-essential output and help declutter logs.

## Pagers

If you are outputting a lot of text, use a pager like `less`. `git diff` does this.

Be careful with your implementation. Pagers can cause unexpected behaviors and, implemented badly, can make the user experience worse. You MUST NOT use a pager if stdin or stdout is not an interactive terminal. A sensible set of options for `less` is `-FIRX`, which does not page if the output fits within one screen, leaves the output on screen when the user quits `less`, ignores case when the user searches the output, and enables colors and formatting.

## Formatting

Do make use of color and symbols in your programs' output.

But don't overdo it. If _everything_ is colorful, the benefits are lost. And [not everyone likes colorful output](https://no-color.org/). You SHOULD provide a flag for the user to disable color formatting (`--no-color` is recommended), and color formatting SHOULD be disabled by default in the following circumstances:

- When stdout is not an interactive terminal (a TTY). Check these individually.
- When an environment variable named `NO_COLOR` exists.
- When an environment variable named `[APP]_NO_COLOR` exists, where `[APP]` is a prefix identifying your program.

Restrained used of symbols and emoji can be beneficial. Characters such as ✅ and ❌ can be useful to draw the user's attention to successes and failures respectively.

## Animations

If stdout is not an interactive terminal, do not display any animations. This will stop progress bars turning into Christmas trees in log files.
