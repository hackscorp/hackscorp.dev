# Distribution

If possible, distribute each CLI program as a single binary. If your language doesn't compile to binary executables as standard, see if it has something like `PyInstaller`. If you really can't distribute as a single binary, use the platform's native package installer so you aren't scattering things on disk that can't easily be removed. Tread lightly on the user's computer.

If you're making a language-specific tool, such as a code linter, then this rule doesn't apply. It's safe to assume the user has an interpreter for that language installed on their computer.

Make it easy to uninstall. If it needs instructions, put them at the bottom of the install instructions. One of the most common times people want to uninstall software is right after installing it!
