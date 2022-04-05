# CLI design principles

This section covers broad, general principles for the design of all human-computer interfaces. These principles apply whether those interfaces be text-based, graphical, or any other format.

## Human-first design

Even in the context of CLI programs that will predominantly be used by other programs, all interfaces to computer programs should be designed primarily for _humans_ to understand. There will always be human users of every program, even if those users are limited to the quality assurance testers.

## Design for composability

A core tenet of [the original UNIX philosophy](//en.wikipedia.org/wiki/Unix_philosophy) is that small, simple, specialized programs can be combined together to compose larger, more complex processes.

The role of shells and pipes might have diminished with the rise of general purpose interpreted languages, but the basic principle of designing programs for their _composability_ remains as important as ever. Think of large-scale automation systems such as CI/CD systems and container orchestration and configuration management — all these sort of modern tools work by composing complex processes from lots of smaller, discrete programs.

Standard in/out/err, signals, exit codes, flags, environment variables, and other long-established conventions of the UNIX environment are the mechanisms we use to make composable CLI utilities. Wherever possible, a CLI should follow patterns that already exist and are in widespread use.

At the same time, don't be afraid to break rules and conventions when it is the best thing to do. But always do so with intention and clarity of purpose.

> Abandon a standard when it is demonstrably harmful to productivity or user satisfaction.
> — Jef Raskin, [The Humane Interface](//en.wikipedia.org/wiki/The_Humane_Interface)

## Balanced information

The terminal is an interface consisting purely of data and information. Information _is_ the interface.

_How_ much information you present is an important design decision in any CLI. A command is relaying too little information when it hangs for several minutes without giving any feedback. A command is relaying too much information when it dumps pages of debugging output by default. Getting the balance right is a crucial design choice, and the optimum balance depends on the program's utility.

## Ease of discovery

GUIs have the upper hand when it comes to making functionality _discoverable_. This is harder to get right in CLIs, but it is more important to get it right in a terminal environment.

Discoverable CLIs have comprehensive help texts, provide lots of examples, suggest what command to run next, suggest what to do when there is an error. There are lots of ideas that can be stolen from GUIs to make CLIs easier to learn and use, even for power users.

## CLIs as conversations

GUI designs have long made use of real world metaphors: desktops, files, folders, recycle bins, bookmarks. The best metaphor for CLI environments is to think of them as _conversations_.

CLI programs typically require invocation of more than one command. For example, you `git add` files before you `git commit` them.

The sequence of commands should be thought of as a conversation the user is having with the computer. This is an important consideration in the design of CLIs. For example, you can suggest possible corrections when user input is invalid, you can make the intermediate state known while the user progress through a multi-step process, and you can ask them to confirm all their input before submitting it all in the final step.

A CLI should be a pleasant exchange of of information between human and machine.

## Robustness

Software should be robust, of course. Programs should fail gracefully from unexpected input. Operations should be idempotent wherever possible. And so on.

More than this, CLI programs should _feel_ robust. They should be immediate and responsive, and not feel like they're going to fall apart. We've got a [section dedicated to designing robustness into CLI programs](/standards/ui/cli/robustness), but in more general terms this requires attention to detail and critical thinking about what could go wrong. It's lots of little things: keeping the user informed about what's happening, explaining what common errors mean, not printing scary-looking stack traces, and so on.

Above all, robustness is achieved by [keeping it simple](/principles/keep-it-simple). Complex code and lots of special/edge cases tend to make a program fragile and unpredictable.
