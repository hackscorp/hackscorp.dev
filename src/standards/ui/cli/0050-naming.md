# Naming

What names to give a CLI program and its subcommands and options, is a critical design choice.

CLI command names need to be memorable and easy to type. They should be short, but not be too generic, so as not to conflict with other programs. For example, both ImageMagick and Windows used the command `convert`.

The very shortest, most generic names should be reserved for standard system tools.

Follow the conventions of the target runtime system. For UNIX-based systems:

- Use only lower case letters.
- Delimit words with single dashes, if you need to.

`curl` is a good name. `DownloadURL` is not.
