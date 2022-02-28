# More SSH cheats

## Changing the passphrase for private keys

Passphrases that unlock private keys can be changed or removed from the private key at any time (as long as you know the original passphrase). The public key is unaffected, because passphrases are linked only to the private key.

To change or remove the passphrase:

```sh
$ ssh-keygen -p
```

Response:

```txt
Enter file in which the key is (/home/<user>/.ssh/id_rsa):
```

You can type the location of the key you wish to modify, or press **Enter** to accept the default path.

```txt
Enter old passphrase:
```

Enter the old passphrase that you wish to change. You will then be prompted for a new passphrase, which you can leave empty if you want to remove the passphrase entirely.

```txt
Enter new passphrase (empty for no passphrase):
Enter same passphrase again:
```

## Editing comments

The comment at the end of an SSH RSA public key can be changed at any time. Changing the comment in the public key does not affect authorization with the corresponding private key.

To change the comment in the private key as well, use the `ssh-keygen` utility:

```sh
$ ssh-keygen -c -C "new-comment-here" -f ~/.ssh/my_ssh_key
```

## Get the fingerprint

Each SSH key pair shares a single cryptographic "fingerprint" that can be used to uniquely identify the keys. This can be useful in a variety of situations. You can find out the fingerprint of an SSH key at any time, with the following command:

```sh
$ ssh-keygen -l
```

Response:

```txt
Enter file in which the key is (/home/<root>/.ssh/id_rsa):
```

Press **Enter** if the private key is stored at the default location, else type the full path to the key. You will be given a string that contains the bit-length of the key, the fingerprint, and the user and host it was created for, and the algorithm used:

```txt
4096 8e:c4:82:47:87:c2:26:4b:68:ff:96:1a:39:62:9e:4e  demo@example.com (RSA)
```

## Disabling password authentication

For ultimate security, password authentication should be fully disabled on servers, forcing all users to provide valid SSH keys to authenticate.

As root:

```sh
$ vim /etc/ssh/sshd_config
```

In that file, change the `PasswordAuthentication` parameter:

```txt
PasswordAuthentication no
```

Save the file, then restart the SSH service:

```sh
$ systemctl restart sshd
```
