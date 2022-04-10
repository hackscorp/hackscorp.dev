# Environment variables

Environment variables SHOULD be used to vary behavior of commands based on the _context_ in which they are run. In the case of UNIX CLI programs, the "environment" is the terminal session.

For maximum portability, environment variable identifiers MUST contain only upper case ASCII letters, with underscores delimiting words. Numbers MAY be included, but identifiers MUST start with a letter.

Environment variables have only one data type: string. Aim for single-line string values. Multi-line strings create interoperability problems (with some `.env` file parsers, for example) and usability issues (with the `env` command, for example).

Prefix your environment variables to avoid conflicts with other applications. In particular, avoid clashes with POSIX standard environment variables, [listed here](//pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap08.html).

Repurpose standard, general purpose environment variables where appropriate. The following are useful to know about:

| Name               | Description                                                                        |
|--------------------|------------------------------------------------------------------------------------|
| `NO_COLOR`         | Disable colorful output                                                            |
| `DEBUG`            | Enable more verbose output                                                         |
| `EDITOR`           | The user's preferred program for editing files or inputting multiple lines of text |
| `HTTP(S)_PROXY`, `ALL_PROXY`, `NO_PROXY` | Check these when performing network operations               |
| `SHELL`            | Open interactive sessions in the user's preferred shell                            |
| `TMPDIR`           | Use this directory to store temporary files                                        |
| `HOME`             | The user's home directory, used to locate user-level configuration files           |
| `PAGER`            | The default tool to enable paged output                                            |
| `LINES`, `COLUMNS` | Use these to adjust output based on screen size                                    |

## Secrets

We MUST NOT design CLI programs to read secrets from environment variables. This will encourage users to store sensitive information in environment variables, which are prone to leakage:

- Exported environment variables are sent to every process, and from there can easily leak into logs
- Shell substitutions like `curl -H "Authorization: Bearer $BEARER_TOKEN"` will leak into globally-readable process state.
- Docker container environment variables can be viewed by anyone with Docker daemon access, via `docker inspect`.
- And environment variables in systemd units are globally readable via `systemctl show`.

As explained in the section on [arguments and flags](/standards/ui/cli/options/arguments-flags), best practice is to accept secrets only via files and stdin.
