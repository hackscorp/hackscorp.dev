# How to create SSH key pairs

To login to a server without a password, you will need to generate a passphrase-less SSH key pair. As long as the remote server supports RSA key authentication, you will be able to get in without entering a password. Instead, you provide your private key, and your identity is verified by the corresponding public key that is pre-installed on the remote server you're connecting to.

SSH keys are useful for automated scripts — such as deployments and backups — since you will not need to hard-code passwords into the scripts.

A number of cryptographic algorithms can be used to generate SSH keys, including RSA, DSA and ECDSA. RSA keys are generally preferred and are the default key type.

Generating a new SSH public/private key pair on your local computer is the first step towards authenticating with a remote server without a password.

## Instructions for Unix-like systems

The following instructions assume your local machine is a Debian-flavoured OS such as Ubuntu. However, the instructions will be similar for all Linux distributions as well as macOS, since the `ssh-keygen` utility is installed by default on those operating systems.

The following instructions can also be followed on Windows. Windows 10+ has had an OpenSSH-compatible client available as an optional feature since the April 2018 update. The easiest option is to enable this feature and follow broadly the same steps to generate keys using the native Windows `ssh-keygen` utility. Alternatively, `ssh-keygen` — and other OpenSSH utilities — are bundled with [Git Bash for Windows](//gitforwindows.org/), or you can use the Ubuntu Bash Shell, which is another optional feature shipping with Windows Pro editions.

Using the machine that you want to connect _from_, create the directory `.ssh` in your home directory.

```sh
$ mkdir -p ~/.ssh
$ cd ~/.ssh
```

Check the contents of the directory:

```sh
$ ls -lha
```

If the files `id_rsa` and `id_rsa.pub` exist, then an RSA key for the current local system user already exists. Continue to follow the below steps only if you want to overwrite the existing public/private keys.

Otherwise, to generate an RSA key pair on your local computer, type:

```sh
$ ssh-keygen
```

This is equivalent to:

```sh
$ ssh-keygen -t rsa
```

SSH keys are 2048 bits by default. This is generally considered to be good enough for security, but you can specify a greater number of bits for a more hardened key. Use the `-b` option with the number of bits you would like. Most servers support keys with a length of 4096 bits. Longer keys may not be accepted, for DDoS protection reasons.

```sh
$ ssh-keygen -b 4096
```

You can optionally provide a comment, which will be embedded in the generated public/private keys. It is conventional to use this to provide a unique string that identifies you — or the device, if the private key will be installed on a specific client. This could be your name, a username, email address, IP address, service name, hostname or URL.

```sh
ssh-keygen -C "<comment>"
```

If you had previously created a different key, you will be asked if you wish to overwrite it:

```txt
Overwrite (y/n)?
```

If you choose "yes", your previous key will be overwritten and you will no longer be able to log into servers using that key. Overwrite keys with caution.

The response will be:

```txt
Generating public/private rsa key pair.
Enter file in which to save the key (/home/<user>/.ssh/id_rsa):
```

This prompt allows you to choose a location to store you RSA private key. Press **Enter** to leave this as the default, which will store the public/private key pair in the `.ssh` directory in your local home directory, using the standard file names `id_rsa.pub` and `id_rsa` respectively. Using the default file paths means the SSH service will find your keys automatically, with no additional configuration required.

The next prompt asks for a passphrase to secure your private key. This is optional. If you choose to protect your private key with a passphrase, that makes the key more secure — in the event of it being stolen — but you will have to input the passphrase every time you use your private key to connect to any remote service. You can improve your workflow by using a local SSH authentication agent to hold your passphrase in memory, but passphrase-protected private keys are not practical for automation tasks, or for commonly recurring tasks such as pushing and pulling to and from remote Git repositories. In general, passphrases are not needed if you are confident you can store your private key securely.

Passphrases can be any arbitrary length.

```txt
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

After creating a new key pair, the response will be something like:

```txt
Your identification has been saved in /home/<user>/.ssh/id_rsa.
Your public key has been saved in /home/<user>/.ssh/id_rsa.pub.
The key fingerprint is:
8c:e9:7c:fa:bf:c4:e5:9c:c9:b8:60:1f:fe:1c:d3:8a root@here
The key's randomart image is:
+--[ RSA 2048]----+
|                 |
|                 |
|                 |
|       +         |
|      o S   .    |
|     o   . * +   |
|      o + = O .  |
|       + = = +   |
|      ....Eo+    |
+-----------------+
```

There will now be two files in the `~/.ssh` directory:

- `id_rsa`
- `id_rsa.pub`

The file `id_rsa.pub` is your public key. You will need to install this on the remote servers that you want to connect to. `id_rsa` is your private key, which needs to be stored securely on your client machine. This must not be shared.

## Instructions for Windows using Powershell

You can follow the above instructions for Unix-like systems if you use:

- [Git Bash for Windows](//gitforwindows.org/)
- The Windows native `ssh-keygen` utility
- The Ubuntu Bash Shell, available in the Pro editions of Windows 10/11

Alternatively, you can use PowerShell or PuTTY to generate an SSH public/private key pair on Windows. Instructions for these follow.

### PowerShell

First, you need to enable the OpenSSH module for PowerShell. To do this, launch PowerShell with admin privileges and enter the following cmdlet. If this is the first time the module has been installed on the device, you may be prompted to download and install some additional tools. Type "Y" to allow the tools to be installed.

```cli
> Install-Module -Force OpenSSHUtils
```

Start the sshd service:

```cli
> Start-Service sshd
```

Run the `ssh-keygen` program. (Refer to the instructions for Unix, above, for details of this command's options.)

```cli
> ssh-keygen -b 2048|4096 -C "<comment>"
```

You will be prompted to provide a directory to store the keys. Press **Enter** to use the default location.

At the prompt, input a passphrase to protect the private key, if desired.

When the process is complete, two files will be created in a directory called `.ssh` in your user home directory, and the key's random art image will be displayed in the terminal.

### PuTTYgen

Before Windows was given its own OpenSSH-compatible client, a suite of community-made utilities revolving around a terminal emulator called PuTTY were the most popular tools for running SSH processes in Windows. PuTTY is not fully compatible with OpenSSH (the _de facto_ standard implementation of the SSH protocol) because it uses a proprietary key file format.

A companion tool called PuTTYgen is used to create PuTTY-compatible keys, and the same tool can also be used to convert keys between PuTTY's proprietary key formats and standard OpenSSH key formats.

Download PuTTYgen [from here](//www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

Open PuTTYgen. To generate new public/private key pairs from scratch, leave the defaults in place and click **Generate**. Follow the instructions about wriggling your mouse around to create some randomness. PuTTYgen will generate a strong public key, which you can see at the top of the dialog box.

In the **Key comment**, field add a comment that describes the key. This comment will be embedded within both the public and private keys. It will also be displayed to the user whenever they use the keys to login to a remote computer.

Copy the public key from the top of the PuTTYgen dialog box into a text file, and save it to your desktop. You will need it later. DO NOT use the **Save public key** option, which exports the public key string in PuTTY's proprietary key format instead of the standard PEM form. Be sure to copy the full text. The public key will look something like this:

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAklmPYUPtR8nn+pDj/LoSXG....094vw== <comment>
```

To generate the private key, optionally enter a passphrase in the **Key passphrase** text field, and enter it a second time to confirm. Click on the **Save private key** button. This will save the private key, which is passphrase protected, to your desktop as a `.ppk` (PuTTY Private Key)file.

You now have an OpenSSH-compatible public key, which can be installed as an "authorized key" on any remote server. And you have a private key that is in the non-standard PuTTY Private Key format. The private key can be loaded in the PuTTY program to connect to remote servers over SSH. Other Windows programs such as DBeaver also accept PuTTY-compatible private keys.

### PuTTY ⇄ OpenSSH

You can use PuTTYgen to transform PuTTY's proprietary public/private key formats to standard OpenSSH key formats, and vice versa.

#### OpenSSH private key ➝ PuTTY private key

Follow these instructions if you have an existing OpenSSH private key that you need to load into PuTTY or some other application that requires Putty-compatible keys.

1.  Open PuttyGen.

2.  Go to **File** > **Load Private Key**.

3.  Import your `id_rsa` private key.

4.  If the private key is successfully imported, the key's fingerprint and corresponding public key will be visible in the PuttyGen window.

    If instead you get an error that says something like "Couldn't load private key (unrecognized cipher name)", this is because when OpenSSH generated the private key, it probably used a newer cipher that is not supported by PuttyGen. To work around this, run the commands below from a terminal on a Unix-like system. This creates a version of the private key with the passphrase removed, which you will then load into PuTTYGen — starting over from step 1. (You can put the passphrase back again when you generate the Putty-compatible private key file.)

    ```sh
    $ cp ~/.ssh/id_rsa ~/.ssh/id_rsa_putty
    $ ssh-keygen -p -f ~/.ssh/id_rsa_putty
    ```

    Otherwise, if PuttyGen can handle the original private key, you'll be prompted for it's passphrase (if it has one), and then press **Enter** twice to reset the key with no passphrase.

    ```txt
    Enter old passphrase: <your passphrase>
    Enter new passphrase (empty for no passphrase): <press Enter>
    Enter same passphrase again: <press Enter>
    ```

5.  Finally, to convert the key from OpenSSH to PuTTY's proprietary key format, go to **File** > **Save Private Key** and export a copy as `id_rsa.ppk`. Remember to add the passphrase, if needed.

    (If you needed to create a copy of your original `id_rsa` key as `id_rsa_putty`, you don't need this any more, it can be deleted.)

#### PuTTY private key ➝ OpenSSH private key

If you only have a PuTTY-compatible private key, but you need the same key in the OpenSSH format to use in an OpenSSH-compliant utility, follow these instructions:

1.  Open PuttyGen.

2.  Click the **Load** button, which sits adjacent to the label "Load an existing private key file".

3.  Select your `.ppk` file.

4.  Enter your key's passphrase, if prompted.

5.  Details of the imported key will be displayed in PuTTYgen's interface. On the main menu, go to **Conversions** > **Export OpenSSH key**.

6.  Save the exported file with the name `id_rsa` in your systems user's home `.ssh` directory.

#### PuTTY public key ➝ OpenSSH public key

If you have a public key in a format like the following, then your public key is in PuTTY's proprietary format instead of the standard PEM format. This is what you get when you use PuTTYgen's **Save public key** option when generating public/private key pairs.

```txt
---- BEGIN SSH2 PUBLIC KEY ----
Comment: "rsa-key-20210513"
AAAAB3NzaC1yc2EAAAABJQAAAQEAkXNEXT164ne5wcNnrl227uCAh0RfB9qYpeqt
Ekdu4qj3fL0d0VxWUjLWvqnUGRG8VemJzBp00WgEzfbr4HLmhKsnFNkI3OMC/bvJ
vESQGEqM9Ilymv7Ulxakhz1MwEbbw4Lb7LpE0qSKmTuVHuuz9qcs5K0D6r0UOEOs
StDI5xLhZPrwFl3A3WWobX05qhFU90GzP/2G83QV8ZbbFfjXhKxai5axiPwqpNQ1
L10VwET7fy2/LqdyhJn13QafHH4JAAPwI9Phm5rbKFgMfBa14SZzk1t6dEnrvgfb
y1W4kRM1L4g7KDuYQr3gPWalp4q4jgAU2b0T/4Ftlp+XPFVkgQ==
---- END SSH2 PUBLIC KEY ----
```

To transform this to a single-line OpenSSH-compatible public key, run the following command, where `ssh2.pub` is the path to the original public key that you are converting to.

```sh
$ ssh-keygen -i -f ssh2.pub > id_rsa.pub
```
