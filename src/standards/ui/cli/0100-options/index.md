# Options

There are several mechanisms by which options can be passed to CLI programs. By convention, the order of precedence of those mechanisms, from highest to lowest, SHOULD be as follows:

- Arguments and flags
- Local configuration files
- Environment variables
- User-level configuration files
- System wide configuration files

Local configuration files include `Makefile`, `package.json`, `docker-compose.yml`, and `.env` files. These are directory-scoped or project-level configuration files. This class of configuration files SHOULD, typically, override environment variables, user-level configurations and system-level configurations.

But arguments and flags, which are inputted directly to commands, SHOULD take precedence over everything.

Different classes of options are suited to different mechanisms of input. When choosing whether to enable an option as an argument or flag, as an environment variable, or via a configuration file at some level, follow these guidelines:

- Options that are likely to vary between invocations SHOULD be set via **arguments and flags**. Examples include setting the level of debugging output, enabling "safe mode" or a "dry run" operation, and "forcing" destructive and dangerous operations to complete without user confirmation. It MAY be appropriate to allow some of these options to be configurable via environment variables and various configuration files, too. But it is okay to have a group of options that can never have their default settings adjusted. It may be beneficial, for example, to keep some of the default behavior of commands consistent between all environments in which they're run.

- Options that are very likely to stay consistent from one invocation to the next on the same computer SHOULD be configurable via centralized **user-level or system-level configuration files**. This is a class of options that tend to be preferences of individual users. They include things like specifying how color should be used in output, providing non-default paths to dependencies, and configuring HTTP proxy servers to route all requests through. It MAY sometimes be appropriate to allow overriding of some of these options via environment variables and/or local configuration files, and in rarer cases via flags.

- Finally, there's a class of options that users tend to want to scope to a particular directory on their local filesystem. These include project-specific configurations, which will be the same for all users working on copies of the same project files on other filesystems. Users may wnt to commit such options to source control, and this constraints means it is necessary to use **local configuration files** in this instance. Local configuration files SHOULD have default names and paths, relative to the current working directory or a parent "project root", but it is RECOMMENDED to allow individual users to provide custom file names and paths via optional flags and/or environment variables.

## Defaults

It is important in CLI design to choose good defaults. Making things configurable is good. But most users crave convenience above all.

So, the most commonly-used options SHOULD be a command's default configuration. The user works with a combination arguments, flags, environment variables and configuration files to toggle those defaults.

That said, you can't always predict how programs will be used. The UNIX utility `ls` was designed to have a terse output by default, optimized for scripting, but its most common usage pattern is probably something more like `ls -lhF`. Oops.
