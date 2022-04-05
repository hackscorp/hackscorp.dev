# Configuration

Command-line tools have lots of different types of configuration, and lots of different ways to supply it: flags, environment variables, project-level config files.

The best way to supply each piece of configuration depends on a few factors, chief among them: specificity, stability and complexity.

Configuration generally falls into a few categories:

1.  Likely to vary from one invocation of the command to the next. Examples:

    - Setting the level of debugging output.
    - Enabling a safe mode or dry run of a program.
 
    For this type of configuration, it is RECOMMENDED to use flags. Environment variables may or may not be useful as well.

2.  Generally stable from one invocation to the next, but not always. Might vary between projects. Definitely varies between different users working on the same project. This type of configuration is often specific to an individual computer. Examples:

    - Providing a non-default path to items needed for a program to start.
    - Specifying how or whether color should appear in output.
    - Specifying an HTTP proxy server to route all requests through.
    - Recommendation: Use flags and probably environment variables too. Users may want to set the variables in their shell profile so they apply globally, or in `.env` for a particular project.

    If this configuration is sufficiently complex, it may warrant a configuration file of its own, but environment variables are usually good enough.

3.  Stable within a project, for all users. This is the type of configuration that belongs in version control. Files like `Makefile`, `package.json` and `docker-compose.yml` are all examples of this. The recommendation in this case is to use a command-specific, version-controlled configuration file.

For configuration files, it is RECOMMENDED to follow the XDG spec. In 2010 the X Desktop Group, now [freedesktop.org](//freedesktop.org/), developed a specification for the location of base directories where config files may be located. One goal was to limit the proliferation of dotfiles in a user's home directory by supporting a general-purpose `~/.config` folder. The XDG Base Directory Specification ([full spec](//specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html), [summary](//wiki.archlinux.org/index.php/XDG_Base_Directory#Specification)) is supported by `yarn`, `fish`, `wireshark`, `emacs`, `neovim`, `tmux`, and many other projects you know and love.

If you automatically modify configuration that is not your program's, ask the user for consent and tell them exactly what you're doing. Prefer creating a new config file (eg `/etc/cron.d/myapp`) rather than appending to an existing config file (eg `/etc/crontab`). If you have to append or modify to a system-wide config file, use a dated comment in that file to delineate your additions.

Apply configuration parameters in order of precedence. Here is the precedence for config parameters, from highest to lowest:

- Flags
- The running shell's environment variables
- Project-level configuration (eg `.env`)
- User-level configuration
- System wide configuration
