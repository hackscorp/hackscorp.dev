# Git cheats

A list of the most useful Git commands.

## `git checkout`

Checkout a particular commit, or a ref (branch or tag) to a commit.

```sh
# Checkout the last commit of a branch
git checkout <branch>

# Checkout a tagged commit
git checkout <tag>

# Checkout any commit
git checkout <commit>
```

## `git mv`

If you manually move or rename a project file, Git will record this change as being two separate files: one file is deleted, and another entirely new file is created. If the contents of the moved file were modified, the changes would be lost in the commit history, because the _full contents_ of the file would be recorded as entirely new.

Using `git mv` instead to move or rename files will mean that Git treats the new file as the same as the old one, simply updating its index to point to the file's new path. As so any changes made to the contents of the file _will_ be recorded properly.

## `git diff` and `git status`

Generally, to view the status of your current working changes since the last commit, use `git status`. To show changes between commits, use `git diff`.

```sh
# xxx
git status

# Shows changes in current working directory that are not
# yet staged for inclusion in the next commit.
git diff
```

## `git add` and `git commit`

```sh
# Add everything that has been changed or modified, 
# recursively through the project directories:
git add .

# Add all modified files, but not new files:
git add -a
```

## `git log`

`git log` opens a scrollable interface in which you can browse the commit history, from the current HEAD backwards. Use the up/down arrow keys to scroll, and press Q to exit.

```sh
# See the commits that changed a particular file:
git log -p <file>
```
