# Terminals

## WSL

It is NOT recommended to use WSL — not even WSL2 — for interacting with Git repositories that are mounted on other filesystems. It is fine for source code that is under `~/` in Ubuntu, but if source code is under `/mnt` the Git commands are horribly slow.
