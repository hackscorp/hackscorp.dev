# SSH agents

If you have set a passphrase on your private SSH key, you will be prompted to enter it every time you connect to a remote host. This is best practice when connecting to critical production systems, but it can be quite a nuisance when regularly pushing and pulling to and from Git repositories over SSH, for example.

To make it easier to regularly open SSH connections, you can either:

- Use a second public/private key pair, with a non-passphrase-protected private key, to connect to non-production such as Git servers.
- Use an SSH authentication agent to store your passphrases in memory for the duration of your session.

This documentation covers use of two SSH agents: then OpenSSH-compatible `ssh-agent` utility, and the Pageant tool for Windows which can be used to manage PuTTY-compatible private keys.

## `ssh-agent`

`ssh-agent` is a Unix program that runs in the background to store in memory passphrases for SSH private keys. The passphrases are persisted for the duration of a session, so the user does not need to keep re-entering their passphrase every time they use their private key to authenticate with a remote computer.

To start the `ssh-agent` utility in the background, run the following command. This works for all Unix-like systems, including Git Bash for Windows:

```sh
$ eval $(ssh-agent)
```

For Windows PowerShell, run the following commands:

```cli
> Set-Service ssh-agent -StartupType Automatic
> Start-Service ssh-agent
```

The output will be the process ID (PID) in which the agent is running. Example:

```sh
Agent pid 10899
```

Optionally, before running the `ssh-add` command, you may wish to clear all keys previously added to the SSH agent's cache, which you can do with the following command:

```sh
$ ssh-add -D
```

Next, add your SSH private key to the SSH agent:

```sh
$ ssh-add
```

This assumes that your private key is in the default location, `~/.ssh/id_rsa`. To load a different private key, specify the key's path as the first parameter:

```sh
$ ssh-add ~/.ssh/id_rsa_work
```

macOS users may need to use on of the following commands to custom private key path:

```sh
# macOS >= 12.0 Monterey:
$ ssh-add --apple-use-keychain ~/.ssh/id_rsa_work
```

```sh
# macOS < 12.0 Monterey:
$ ssh-add -K ~/.ssh/id_rsa_work
```

The `ssh-add` command will prompt you for the private key's passphrase, if it has one. Once you enter the passphrase, the `ssh-agent` program holds it in memory, so you will not be prompted for it when subsequently using SSH or SCP to connect to hosts with the same private key.

If you have multiple private keys, you can add other by repeating the above steps. Example:

```sh
$ ssh-add ~/.ssh/id_rsa_personal
$ ssh-add ~/.ssh/id_rsa_work
```

To check which keys are currently cached by the SSH agent:

```sh
$ ssh-add -l
```

### SSH2

The versions of these programs for SSH2, `ssh-agent2` and `ssh-add2`, work in the same way. The SSH2 versions work only if _both_ your computer and the remote host are running SSH2.

### Loading keys automatically

The above steps need to be repeated every time you start a new session. On Unix systems, this means every time you login to your local user account. On Git Bash for Windows, you may need to repeat the above steps every time you restart your terminal.

To have keys loaded into `ssh-agent` automatically, simply add the following script to `~/.ssh/config`:

```txt
Host *
	AddKeysToAgent yes
	IdentityFile ~/.ssh/id_rsa
```

For passphrase-protected private keys, you also need to add the `UseKeychain` option, if you would like to the passphrase to be stored by the SSH agent after you enter it for the first time in a session:

```txt
Host *
	AddKeysToAgent yes
	UseKeychain yes
	IdentityFile ~/.ssh/id_rsa
```

If you have multiple private keys, they can all be loaded using additional `IdentityFile` lines:

```txt
Host *
	AddKeysToAgent yes
	UseKeychain yes
	IdentityFile ~/.ssh/id_rsa_personal
	IdentityFile ~/.ssh/id_rsa_work
```

(Note, macOS prior to Sierra 10.12.2 automatically re-instated private key caches, created by `ssh-add`, from previous sessions. This was non-standard OpenSSH behaviour, and so since Sierra the above configuration has been required.)

## Pageant

On Windows, if you intend to connect to remote servers from local applications other than your terminal, you may also need to use Pageant, an SSH agent GUI for Windows.

Pageant is part of the [PuTTY](//www.chiark.greenend.org.uk/~sgtatham/putty/) suite of SSH utilities for Windows. These were popular on Windows before it had a built-in OpenSSH-compatible client, which was introduced to Windows 10 in the April 2018 update. Some legacy Windows applications still depend on these utilities to delegate SSH behaviours. And there are still some edge cases where Pageant is needed to get SSH to work with modern Windows applications. For example, VS Code still does not work easily with passphrase-encrypted SSH keys, and it expects private keys to be located at `~/.ssh/id_rsa`. To get VS Code to work with passphrase-protected private keys, or to use private keys at other filesystem locations, the simplest solution is still to load those keys into Pageant.

To load your private key(s) into Pageant, the keys will need to be in the PuTTY-compatible `*.ppk` file format. See the instructions about [creating SSH key pairs](./technology/ssh/create-ssh-key-pairs) for help generating PuTTY Private Keys.

Run Pageant and load the `*.ppk` version of your private key. Enter the key's passphrase at the prompt, if required. The key is now available to use by any PuTTY-compatible application, and it will remain available until you logout of Windows or close Pageant.

The first time you connect to a server over SSH with a new key, you will be asked to verify that the server's fingerprint is correct. The fingerprint is a short cryptographic string that identifies the server, protecting against man-in-the-middle attacks. With Pageant being used to provide your private key, this can cause some Git GUI clients (including Git Bash) to fail silently. So it is important to make an initial connection to your remote servers via the command line. Open PowerShell and type commands similar to the following, depending on which remote servers you want to subscribe to:

```cli
PS C:\Users\Username> & 'C:\Program Files\PuTTY\plink.exe' git@github.com
PS C:\Users\Username> & 'C:\Program Files\PuTTY\plink.exe' git@gitlab.com
PS C:\Users\Username> & 'C:\Program Files\PuTTY\plink.exe' git@bitbucket.org
```

You'll be prompted to add the remote server's fingerprint to the Windows registry. If you're confident that your network traffic is not being intercepted, go ahead and type "y" at the prompt. You might get an error if the remote service does not allow logins over SSH, but that's OK because the purpose of this step is only to cache the remote server's fingerprint. Run the above command again, and you should _not_ be prompted to cache the remote's fingerprint a second time.

If the terminal just hangs when you select to store the server's key in your local cache, try instead to connect using Putty:

1. Open Putty.
2. Type the hostname, eg "github.com", "bitbucket.org".
3. Click **Open**.
4. Click **Yes** in the popup to cache the host key.
5. Close Putty immediately thereafter.

The final step is to add an environment variable called `GIT_SSH` to your Windows user, and to set its value to the path to the Plink executable on your machine, eg `C:\Program Files\PuTTY\plink.exe`. VSCode and other applications will pick up on this variable and use the reference program to connect to remote Git repositories over SSH. Restart VSCode, so that is reads the new environment variable, and try synchronising with a remote repository that was cloned using SSH. It should synchronise successfully, without a "permission denied" error.

Git Bash on Windows will also pay attention to the `GIT_SSH` environment variable, using the designated SSH client instead of its built-in SSH agent. This means you don't need to also load your SSH private keys into Git Bash using `ssh-agent`/`ssh-add`. Just load them into Pageant.

### Automatically load SSH keys into Pageant on Windows startup

You don't need to start Pageant and load your SSH keys every time you restart Windows. You can have this done automatically:

1.  Go to `C:\Users\[User]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs`.
2.  Open the context menu for that directory, and select **New** > **Shortcut**.
3.  Browse to `C:\Program Files\PuTTY` and select `pageant.exe`.
4.  Name the Shortcut `Pageant with Preloaded Keys`.
5.  Open the context menu for the newly-created shortcut and select **Properties**.
6.  Change the value of the **Start in** field to the path of the directory that contains your private keys, eg:

    ```txt
    "C:\Users\Kieran\.ssh"
    ```

7.  After the **Target`**path, list all the names of the Putty-compatible private keys that you want to preload, eg:

    ```txt
    "C:\Program Files\PuTTY\pageant.exe" id_rsa.ppk id_rsa_2.ppk id_rsa_3.ppk
    ```

8.  Finally, to have Pageant with Preloaded Keys run at startup, simply copy the shortcut to `C:\Users\[User]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`.
