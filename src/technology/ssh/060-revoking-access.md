# Revoking SSH access

To revoke a client's access to a machine, simply delete their public key line from the `authorized_keys` file.

```sh
$ vim ~/.ssh/authorized_keys
```
