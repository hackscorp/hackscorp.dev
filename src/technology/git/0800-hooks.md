# Git hooks

[Git hooks](//git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are a plugin system for customizing and extending the behavior of the Git source control system, by attaching scripts to operations such as commits and merges.

Hook scripts can be any executable script file, and are stored in the `hooks` subdirectory of the `.git` directory. [Husky](//typicode.github.io/husky/) is a popular abstraction that makes it easier to write Git hook scripts and have them committed to source control, so that all contributors to a repository share the same Git configuration.

The most useful Git hooks are:

- `pre-commit` is useful for undertaking static and runtime analysis on staged files before accepting them in a commit operation. The flag `--no-verify` can be used by developers to disable this hook on individual `git commit` operation.

- `prepare-commit-message` which allows you to customize the default commit message.

- `commit-msg` allows you to validate the commit message submitted by the committer.

- `pre-push` is another place in which static and runtime analysis can be undertaken on the refs to be updated by a `push` operation. The flag `--no-verify` can be used by developers to disable this hook on individual `git push` operations.

- `pre-receive` is the server-side equivalent of `pre-push`, allowing for static and runtime checks to be undertaken on pushes in CI systems instead.

See the [Git documentation](//git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for details of all the available Git hooks.
