# Git aliases

There are two ways to create aliases for Git commands:

- Git aliases
- Shell aliases

## Git aliases

Git itself provides functionality for creating custom Git commands. [Git aliases](//git-scm.com/book/en/v2/Git-Basics-Git-Aliases) are a way of mapping custom commands to built-in commands and arguments.

Aliases may be defined on a per-repository basis, but it will probably be more useful to define your aliases globally via your user-level `~/.gitconfig` file. Example:

```txt
[alias]
  wip = for-each-ref --sort='authordate:iso8601' --format=' %(color:green)%(authordate:relative)%09%(color:white)%(refname:short)' refs/heads
```

You can also define aliases via the command line:

```sh
$ git config --global alias.co checkout
$ git config --global alias.br branch
```

This is a good technique for adding Git commands that you think should exist. Example:

```sh
$ git config --global alias.unstage 'reset HEAD --'
```

This makes the following two commands equivalent:

```sh
$ git unstage fileA
$ git reset HEAD -- fileA
```

More examples can be found in the [Git documentation](//git-scm.com/book/en/v2/Git-Basics-Git-Aliases).

## Shell aliases

An alternative approach is to define aliases for Git commands within your shell environment. For Bash, for example, you would define these in your `.bashrc` or `.profile` files, using the following syntax:

```txt
alias alias_name="command_to_run"
```

Example:

```txt
# Add `git log` alias that produces a clean, colorful commit and branching history.
# Can be combined with other `git log` options, eg `git-log -n 5` to output only the
# previous 5 commits in the current branch's history.
# Source: https://stackoverflow.com/a/13542327
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

The advantage of this approach is that you do not overload the `git` command with new user-defined subcommands, but instead your define your own top-level commands. Here are some other examples:

```txt
alias gdf="git diff"
alias gcm="git commit -m"
alias gco="git checkout"
alias gsw="git switch"
```
