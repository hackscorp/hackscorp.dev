# SSH syntax

To connect to a remote machine as `<user>` on that remote:

```sh
$ ssh <user>@<hostname_or_ip_address>
```

To connect to a remote machine on a specified `<port>`:

```sh
$ ssh -p <port> <user>@<hostname_or_ip_address>
```

The first time you connect to a remote machine, the response should be something like this:

```txt
The authenticity of host "<hostname> (<ip_address>)" can't be established. RSA key fingerprint is <fingerprint>. Are you sure you want to continue?
```

Type "yes" and the response will be:

```txt
"Warning: Permanently added '<hostname>, <ip_address>' (RSA) to the list of known hosts.
```

At the prompt, enter `<user>`'s password if required. You should now be logged in, as represented by the command line prompt.

To exit and return to the command line of your local machine:

```sh
$ logout
```
