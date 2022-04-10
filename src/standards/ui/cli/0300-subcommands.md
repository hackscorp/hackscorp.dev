# Subcommands

If you have several tools that are closely related, you can make them easier to use by combining them under a single command.

It means you have a single program that can share configuration, storage, flags and arguments, and help text. Therefore, overall complexity is greatly reduced.

This is what Git and many other programs do very well.

Be consistent. Use the same arguments and flags across all the subcommands. Have similar output formatting and error handling. Prompt for input in the same way. And so on.

Avoid ambiguous subcommands, and avoid having two subcommands that have similar names. Avoid, for example, having both `update` and `upgrade` subcommands. This is quite confusing. Disambiguate with extra words, eg `update-dependencies`, `upgrade-latest`.

In complex programs with lots of objects, and lots of operations that can be performed on each of those objects, it is a common pattern to use two levels of subcommand, where one is a noun (referring to the object) and one is a verb (referring to the operation). You can use the `noun verb` or the `verb noun` pattern. The first seems to be the more common pattern — eg `docker container create` — but either is fine as long as you are consistent.

Where subcommands are used in combination with flags, the positioning of flags within the subcommand structure SHOULD NOT be significant. By way of example, the following two commands SHOULD be equivalent. However, it is acknowledged that this is not always possible. You may be constrained by the runtime environment or the capabilities of your argument parser.

```txt
$ my-tool --flag subcmd
$ my-tool subcmd --flag
```
