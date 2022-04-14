# Command line interface (CLI) standards

This section covers high-level principles for the design of command line interfaces.

The focus here is on designing CLI utilities for UNIX-based environments. But many of these guidelines will be relevant to other software runtime environments, such as Node.js.

This section does not cover the design of full-screen terminal programs, things like Emacs and Vim. This is all about designing interactive command-oriented CLI utilities.

## References

- **[Command line interface guidelines](//clig.dev/)** \
  A free, open source, online guide to writing better command line programs, taking traditional UNIX principles and updating them for the modern day.

- **[GNU coding standards](//www.gnu.org/prep/standards/html_node/index.html)** \
  Coding guidelines for GNU projects. It focuses on writing programs in C, but much of this covers the command line interface and many of those rules and principles will be useful for other programming languages.

- **[The poetics of CLI command names](//smallstep.com/blog/the-poetics-of-cli-command-names/)** \
  Carl Tashian (2020)

- **[User experience, CLIs, and breaking the world](//uxdesign.cc/user-experience-clis-and-breaking-the-world-baed8709244f)** \
  John Starich (2019) — This blogpost shares lessons learnt from revamping the CLI for the IMB Cloud Kubernetes Service.

- **[Heroku CLI style guide](//devcenter.heroku.com/articles/cli-style-guide)** \
  Provides design guidelines for CLI plugins for the Heroku platform.

- **[12 factor CLI apps](//medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)** \
  Jeff Dickey (2018) — This blogpost adapts Heroku's [12 factor app](//12factor.net/) principles to CLI programs.  These design principles were codified in [Oclif](//oclif.io/), a framework for CLI apps running in Node.
