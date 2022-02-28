# Distributing public keys

There are several methodologies you can adopt for installing public keys on remote servers that you wish to connect to using SSH public/private key pairs for authentication.

## Using `ssh-copy-id`

The easiest way to install public keys on remote server sis to use a utility called `ssh-copy-id`. It pipes your key directly to the remote box (using SSH, obviously) on which you want to install it, and automatically sets the appropriate file permissions on the remote. This utility is included in most OpenSSH packages.

The syntax is:

```sh
$ ssh-copy-id <user>@<hostname_or_ip_address>
```

This will prompt you for the user's password on the remote system. After typing in the password, the contents of your `~/.ssh/id_rsa.pub` key will be appended to the end of the remote user's `~/.ssh/authorized_keys` file.

```txt
Number of key(s) added: 1
```

You can now log into the remote machine using your SSH keys instead of the remote user's password.

```sh
$ ssh <user>@<hostname_or_ip_address>
```

## Manual process

The equivalent manual process is as follows.

On your local machine, print the contents of your public key file by typing:

```sh
$ cat ~/.ssh/id_rsa.pub
```

The output will be a single line of text, and it will look something like this:

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCqql6MzstZ...+Ow9gI0x8GvaQ== <comment>
```

You need to append this as a new line to the `~/.ssh/authorized_keys` file on the remote server, under the home directory for the Unix user you want to login as.

On the remote server, create the `~/.ssh` directory if it does not already exist:

```sh
$ mkdir -p ~/.ssh
```

Make sure the file `authorized_keys` exists.

```sh
$ touch authorized_keys
```

Open the `authorized_keys` file in your favourite text editor, and paste in the public key on a new line.

Finally, you need to set appropriate permissions on the `.ssh` directory and files:

```sh
$ chmod 700 .ssh
$ chmod 640 .ssh/authorized_keys
```

## Windows systems

To pipe public keys between Windows systems, using the OpenSSH PowerShell module is your best bet.

Start by creating the `.ssh` directory within the target user's profile on the remote machine:

```cli
> ssh username@domain.com mkdir C:\Users\username\.ssh
```

Next, use the SCP utility to securely transfer the public key:

```cli
> scp C:\Users\username\.ssh\id_rsa.pub username@domain.com:C:\Users\username\.ssh\authorized_keys
```

Finally, modify the ACL on the authorized_keys file on the server:

```cli
> ssh --% username@domain.com powershell -c $ConfirmPreference = 'None'; Repair-AuthorizedKeyPermission C:\Users\username\.ssh\authorized_keys
```
