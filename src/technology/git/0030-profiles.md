# Git profiles

## Maintaining multiple Git profiles

If you want to use Git on the same computer for both personal and work projects, you may wish to maintain multiple Git profiles. At the very least, you will probably want to use different email addresses for commits, tags, etc. You may want to use different usernames, too.

The simplest way of doing this is to set your Git profile configuration on a per-repository basis:

```cli
$ git config (--local) user.name "username"
$ git config (--local) user.email "hello@example.com"
```

(The `--local` flags are the default.)

Alternatively, you can edit the `.git/config` file directly:

```txt
[user]
	name = username
	email = hello@example.com
```

You can still have global defaults:

```cli
$ git config --global user.name "username"
$ git config --global user.email "hello@example.com"
```

Global configurations get saved to your user-level `~/.gitconfig` file.

Alternatively, if you keep your personal and work repositories in different directories, you can maintain the dual-profile configuration globally, and configure Git to automatically load the appropriate profile based on the current working directory. You would need to add something like the following to your user-level `~/.gitconfig` file:

```txt
[include]
	path = ~/git-personal.conf
[includeIf "gitdir:~/work/"]
	path = ~/git-work.conf
```

Then each conf file can define a different user profile, eg `~/git-personal.conf`:

```txt
[user]
	name = username
	email = hello@example.com
```
