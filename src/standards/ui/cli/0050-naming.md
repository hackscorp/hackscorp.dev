# Naming

What names to give a CLI program and its subcommands and options, is a critical design choice. Here are a few guidelines:

- CLI command names need to be memorable and easy to type. They should be short, but not be too generic, so as not to conflict with other programs. (Both ImageMagick and Windows used the command `convert` — oops.) The very shortest, most generic names should be reserved for standard system tools, or things people use all the time like `cd` and `ls`. The more niche the command, the longer its name should be.

- Follow the naming conventions of the target runtime system. For UNIX-based systems, convention is to use only lower case ASCII letters, delimiting word with single dashes only if you need to. The user SHOULD NOT need to press their `Shift` key to type your commands: `VirtualBox` and `easy_install` break this rule. Numbers MAY be included but they SHOULD NOT be the first character of a command name.

- Avoid including superfluous words such as tool, util and kit. Also don't name commands after any standard, protocol or file format such as `openssl` and `ffmpeg`.

- Don't pollute the global namespace with dozens of commands. If your package consists of a suite of utilities, consider implementing them as subcommands of a single program namespace. Git does this brilliantly: `git [subcmd]`. See the section on [subcommands](/standards/ui/cli/subcommands) for more guidance here.

`curl` is an example of a really great CLI command name. It's a verb, it is short and memorable and easy to type, it is pronounced similarly all over the world, and when you spell it out in English it sounds like "see URL". 
