# Configuration files

Configuration files can exist at three levels in the user's filesystem:

- The local level
- The user level
- The system level

Configuration files have precedence in that order, from highest to lowest. Configuration files under the user's home directory take priority over system-level configurations, and local configuration files take precedence over both system-level and user-level configs.

Local configuration files include things like `docker-compose.yml`, `package.json` and `Makefile`. These tend to exist within project directories and be committed to source control systems. 

This class of configuration file also includes `.env` files. This is a convention for declaring "environment variables" through local configuration files. These tend _not_ to be committed to source control. Where there are valid use cases for adjusting the configuration of a tool on a directory-by-directory basis (eg project-specific configurations), you SHOULD consider making the tool recognize `.env` files. Many languages have built-in libraries for reading `.env` files.

All options that can be set in a `.env` file MUST be settable via conventional environment variables, too. When a `.env` file is loaded, its settings SHOULD override actual environment variables with the same identifiers, but only within the scope of the `.env` file's directory path.

You MUST NOT use `.env` files as a substitute for proper configuration files, which are more versatile (eg supporting more types) and can be stored more securely (eg outside of source controlled-directories). The purpose of `.env` files is to give users the convenience of being able to _set environment variables on a directory-by-directory basis_. See the section on [environment variables](/standards/ui/cli/options/environment-variables) for more guidance in this area.

For system-level and user-level configuration files, it is RECOMMENDED to follow the XDG Base Directory Specification. It specifies the location of base directories where config files may be located. One goal of this specification was to limit the proliferation of dotfiles in a user's home directory by supporting a general-purpose `~/.config` folder. This specification is supported by a wide range of programs including `yarn`, `fish`, `wireshark`, `emacs`, `neovim`, `tmux`.

- [Full specifcation](//specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)
- [Summary](//wiki.archlinux.org/index.php/XDG_Base_Directory#Specification)

Finally, if your program needs to modify a configuration file that does not belong to your program, it MUST ask for the user's consent before doing this. But prefer instead to create a new config file (eg `/etc/cron.d/my-app`) rather than appending to an existing ones (eg `/etc/crontab`).
