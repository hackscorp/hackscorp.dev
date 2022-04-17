# Git customizations

This section is a series of tutorials for customizing Git's user interface.

## Aliases

TODO - Examples:

```txt
alias ll="ls -ltra"
alias gd="git diff"
alias gcmsg="git commit -m"
alias gitc="git checkout"
alias gitm="git checkout master"
```

## Prompt customization

You can customize how your terminal's prompt line displays information about the Git repository of the current working directory. All shells are configurable to some extent, and a number of tools are available to make their configuration easier, for example by enabling a pluggable framework for theming and customization. Popular tools include Oh My Zsh (for the Z Shell) and Oh My Posh (originally for PowerShell but now supporting multiple shells). We cover a few of the most popular tools below.

### Oh My Posh

**[Oh My Posh](//ohmyposh.dev/)** is a framework, written in Go, for customizing the prompt line of _any shell_. It started out at a PowerShell module, but has evolved into a cross-platform framework for customizing the prompt line of PowerShell, Cmd, Bash, Zsh, Fish and Nu.

The following instructions cover installation and configuration of Oh My Posh for PowerShell and Git Bash on Windows. For WSL follow the instructions for [Linux](//ohmyposh.dev/docs/linux), and for macOS see [here](//ohmyposh.dev/docs/macos).

Except for the minimalist themes that don't render any icons, you will need to install a [Nerd Font](//ohmyposh.dev/docs/config-fonts). These fonts are extended with additional characters that are used in the prompt lint. Meslo LGN NF is recommended for use with Oh My Posh. Cascadia Code is another popular option. This font ships with Windows Terminal, but you will need to download and install [Cascadia Code PL](//github.com/microsoft/cascadia-code/releases), a version of the font that Microsoft has made with support for the Powerline glyphs.

When you've installed the Nerd Font of your choice, set Windows Terminal to use it via the program's normal settings.

Now follow the below instructions to install and configure Oh My Posh:

1.  In PowerShell run:

      Install-Module oh-my-posh -Scope CurrentUser

     Or run `Update-Module oh-my-posh` if Oh My Posh was previously installed.

2.  With elevated privileges run:

      Add-MpPreference -ExclusionProcess oh-my-posh.exe

    This stops Oh My Posh being blocked by Windows Defender.

3.  Open your PowerShell profile script in Notepad or VS Code:

      notepad $PROFILE
      code $PROFILE

4.  Add the following lines to your profile script:

      Import-Module oh-my-posh
      oh-my-posh init pwsh | Invoke-Expression

5.  Reload your profile for the changes to take effect:

      . $PROFILE

The default theme is pretty good. You can browse other available themes [here](//ohmyposh.dev/docs/themes). To download all available themes to your machine, run:

  Get-PoshThemes
  
Then enable a theme in your $PROFILE script, eg to use the "aliens" theme:

  Import-Module oh-my-posh
  Set-PoshPrompt -Theme aliens

Other popular themes include "agnoster" and "paradox" (the two are very similar).

To get Oh My Posh working in Git Bash for Windows, you need to follow a separate process:

1. Download the latest [Windows executable](//github.com/JanDeDobbeleer/oh-my-posh/releases) of Oh My Posh — it will be named something like `posh-windows-amd64.exe`
2. Save this file to `C:\Program Files\Git\usr\bin`, renaming it `oh-my-posh.exe`
3. Type the `oh-my-posh` command into Git Bash to check it works
4. Run the following to enable Oh My Posh:

```sh
$ eval "$(oh-my-posh init bash)"
```

To download the Oh My Posh themes, run through the following commands. These will download the configuration files for all available themes to your user's home directory. (Note, `wget` is not pre-installed in Git Bash. Download the [binary from here](//eternallybored.org/misc/wget/) then add the `wget.exe` file to `C:\Program Files\Git\usr\bin`.)

```sh
$ mkdir ~/.poshthemes
$ wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip
$ unzip ~/.poshthemes/themes.zip -d ~/.poshthemes
$ chmod u+rw ~/.poshthemes/*.json
$ rm ~/.poshthemes/themes.zip
```

Now you need to change the `oh-my-posh init` command to reference your desired theme, eg:

```sh
eval "$(oh-my-posh init bash --config ~/.poshthemes/agnoster.omp.json)"
```

As with PowerShell, you will need to use a Nerd Font in the Git Bash terminal to see some of the special characters used by Oh My Posh.

Oh My Posh is highly customizable — see the website for more options. What is great about Oh My Posh is that, as a consistent cross-platform framework, configurations can be shared between shells. Thus, you can expose your Powershell, Git Bash and WSL environments to the same configuration that is loaded for PowerShell, for example.

### Posh Git

**[Posh Git](//github.com/dahlbyk/posh-git)** is a PowerShell module that adds information about the current working Git repository to PowerShell's prompt line. If the only shell you use is PowerShell, and if all you want to do is decorate its prompt line with metadata from local Git repositories, then this will be a lighter option than Oh My Posh. You DO NOT need to install both Oh My Posh _and_ Posh Git — Oh My Posh does everything that Posh Git does. Choose one or the other.

To install, run this PowerShell command with elevated privileges:

```txt
Install-Module posh-git -Scope CurrentUser -Force
```

Or to update a previous installation:

```txt
Update-Module posh-git
```

Then add the following line to the top of your `$PROFILE`. This will save you from needing to manually import the module every time your restart a PowerShell session.

```txt
Import-Module posh-git
```

(To remove Posh Git, run `Uninstall-Module posh-git` and be sure to remove the import line from your `$PROFILE`.)

There's also a project called **[posh-git-bash](//github.com/lyze/posh-git-sh)**, which replicates Posh Git's functionality in a standalone Bash script, for easy import into Bash, Zsh and other Unix shells.

### Oh My Zsh

If you use the Zsh shell, you can use **[Oh My Zsh](//ohmyz.sh/)** to customize its prompt line. This is similar in concept to Oh My Posh, but it is a framework for customizing Zsh specifically, and can be used to theme the whole look-and-feel of Zsh, not only its prompt line.

If you have not yet installed Zsh, follow these instructions. These instructions are correct for Ubuntu, and should work for Ubuntu on Windows, too.

- `sudo apt update` to fetch updates for installed packages
- `sudo apt upgrade` to install available updates
- `sudo apt install zsh` to install Zsh

To install Oh My Zsh:

- `sudo apt install wget` to install `wget` (though it is often installed by default)
- `sudo apt install git` to install `git`, which is a dependency of the Oh My Zsh installer
- `sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"` to download and run the installer for Oh My Zsh

The installation script will ask if you want to change your default shell to Zsh. Type "y". When complete, the terminal prompt will look like this:

```txt
➜  ~
```

(Note, to change your login shell back to Bash again, type `chsh`, then your password at the prompt, and input "/usr/bin/bash". You can switch between Bash and Zsh at any time by typing the commands `bash` and `zsh` respectively.)

You configure Zsh through the Zsh run command file, `~/.zshrc`. Open that in your text editor. The first thing to do is change the theme. "Agnoster" is a popular choice, but there are [many other themes](//github.com/ohmyzsh/ohmyzsh/wiki/Themes) you can choose from.

```txt
ZSH_THEME="agnoster"
```

For themes like Agnoster you will also need to install the Powerline Fonts (these are not the same as the Nerd Fonts used by Oh My Posh):

```sh
$ sudo apt-get install fonts-powerline
```

(If you are using Zsh in Ubuntu running in WSL, you will need to install the Powerline fonts on Windows, as it is the parent OS that is rendering the characters from the terminal. Go to the [GitHub repository](https://github.com/powerline/fonts) and download an archive of the whole Powerline Fonts repo as a Zip file. Choose a font family, such as Hack or Fira Code, and install the TTF or OTF files in the normal way. Then set that font as the display font in Windows Terminal's settings.)

Optionally, you can add your custom Git aliases to the bottom of your `~/.zshrc` file.

Restart the Zsh shell to capture the changes you made to the shell's config:

```sh
$ source ~/.zshrc
```

## Other options

Oh My Zsh — and probably other shell configuration frameworks — are based on [Powerline](//github.com/powerline/powerline). This was [originally a Vim plugin](//github.com/Lokaltog/vim-powerline) for customizing the status line at the bottom of Vim's screen, but it was subsequently rewritten in Python to provide a more general purpose configuration framework for all kinds of status lines and prompt lines.

Inevitably, there are other forks and derivatives of Powerline. [Powerline Shell](//github.com/b-ryan/powerline-shell) is another Python program that focuses on modifying the prompt line in Bash, Zsh and Fish. Powerline Shell has not been updated for quite a few years now, but it has been ported to Go in the [Powerline Go](//github.com/justjanne/powerline-go), which is still actively maintained.

Finally, **[Spaceship](//spaceship-prompt.sh/)** is an alternative to Oh My Zsh for configuring the prompt in the Zsh shell specifically.
