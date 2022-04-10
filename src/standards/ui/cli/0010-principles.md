# CLI design principles

This section covers broad, generalized principles for the design of command line interfaces. Broader [programming principles](/standards/programming/principles), documented separately, also apply.

## Design for composability

A key tenet of [the original UNIX philosophy](//en.wikipedia.org/wiki/Unix_philosophy) is that lots of small, simple, specialized programs should be made with standardized inputs and outputs so they can be combined together to compose larger, more complex programs.

Standard in/out/err, signals, exit codes, arguments and flags, environment variables and other long-established conventions are the mechanisms we use to make composable CLI utilities for UNIX-based environments.

Different software platforms have different conventions to make commands interoperable with one another, and composable into larger applications. A CLI should follow whatever patterns are widely used in its target runtime environment.

## Design CLIs as conversations

CLI programs typically require invocation of more than one command. For example, you `git add` files before you `git commit` them.

The sequence of commands should be thought of as a conversation between the user and the computer. 

So, when the user inputs invalid data, besides informing them of the error, can your program recommend ways they can fix the mistake? And if the user types an unsupported subcommand, can you suggest an alternative command that is similarly spelt?

## Be responsive

CLI MUST respond quickly to all user input. A _responsive_ user interface is one that keeps the user informed of the progress of operations. Responsiveness is distinct from _fast_, which is a separate (though related) concern.

As a general rule, feedback SHOULD be given to the user in <100ms of them sending a new command or submitting new input via a prompt.

If you need to make a network request, print something before you do so, so the UI doesn't hang and look broken.

If an operation takes a long time, keep the user updated on its progress. A good spinner or, better still, progress bar can work well here. Show the estimated time remaining, and keep it counting down, in case the progress bar gets stuck in one position for a while.

Do stuff in parallel where you can. But only do this if it can be done reliably.

Make things time out. Allow network timeouts to be configured, but have a reasonable default so slow connections don't hang forever.

Make requests idempotent where possible. If the program fails for some transient reason — eg the network connection went down — the should be able to press `Up` and `Enter` and pick up right where they left off.

Make it "crash only". This means designing your programs in such as way that no cleanup is done immediately after operations. Instead, postpone the cleanups to a later time, which may be the at the start of the program's next run. "Crash only" programs are free to exit immediately on failure and on user interruption (`Ctrl`+`C`), making them feel more responsive and robust.

If you change state, tell the user. When a command changes the state of a system, it's especially valuable to explain what has just happened, so the user can model the state of the system in their head — particularly if the result doesn't directly map to what the user requested. Make it easy to see the current state of the system. If your program does a lot of complex state changes and it is not immediately visible in the filesystem, make sure you make this easy to view. For example, `git status` tells you as much information as possible about the current state of your Git repository, and some hints at how to modify the state.

## Design for discoverability

The functionality exposed via graphical user interfaces tends to be easy to find. GUIs are, by their nature, _discoverable_.

In CLIs, discoverability is more important but harder to get right.

Discoverable CLIs have good help texts, with lots of examples, and they make suggestions on what commands the user might like to run next and how they can fix errors. For example, `git status` is a way for users to view the current state of a Git repository. The command responds not only with a summary of the current state, but with a list of commands the user can run to modify that state.

## Find a good balance of information

CLIs are essentially interfaces of pure data and information. How _much_ information you present is an important design decision.

If a command hangs for several minutes without giving any feedback, it is presenting too little information. If a command dumps pages of debugging output by default, it is probably presenting too much information.

The optimum balance between these two extremes will vary depending on the use cases of the program.

## Programme defensively

The principle of [defensive programming](/standards/programming/principles/defensive-programming) applies to CLI programs as they do any other type of computer program.

Think through all the ways that users might misuse your program. Plan and test for these use case scenarios.

Ask yourself, how does the program perform when:

- It is used in a script.
- When the user has a bad network connection.
- When the user runs multiple instances of it at once.
- When it runs in an unsupported environment.

If the user does something wrong, like misspell a command name, if you can you SHOULD make a reasonable guess as to what they meant and _suggest_ to the user they try the alternative command. But you MUST NOT run the alternative operation without the user's explicit approval, unless it is a documented alias. Making assumptions about a user's intention can be dangerous, especially where operations may result in modified state.

## Make it _feel_ robust

All software programs should be built robustly, of course. They should be responsive. They should fail gracefully from unexpected input. Operations should be idempotent wherever possible. And so on.

But more than this, CLI programs should _feel_ robust.

How to we design CLI programs to have a feeling of being robust and dependable?

This perceived robustness comes from attention to detail. It's lots of little things. It's about keeping the user informed at all times about what's happening. It's about explaining clearly why errors happened and how they can be resolved. It's about good validation, sensible defaults, reasonable timeouts, and so on.

Above all, robustness is achieved by [keeping it simple](/standards/programming/principles/keep-it-simple). Complex code and lots of special/edge cases tend to make a program fragile and unpredictable.

This section covers a few specific examples of best design practices that can improve how users _perceive_ the quality of your CLI programs.

## Future proofing

In software of any kind, it's crucial that interfaces don't change without a lengthy and well-documented deprecation process. This is especially important in CLI programs. Subcommands, arguments, flags, configuration files, environment variables: these are all interfaces, and you're committing to keeping them working.

We use Semantic Version for our CLI utilities, the same convention we use to [version all our software](/standards/versioning). But this does not excuse too much change. We MUST aim for major versions to endure for as long as possible — preferably indefinitely.

Keep changes additive where you can. Rather than modify the behavior of a flag in a backwards-incompatible way, maybe you can add a new flag, as long as it doesn't bloat the interface too much.

Warn before you make a non-additive change. Eventually, you'll find that you can't avoid breaking an interface. Before you do, forewarn your users in the program itself: when they pass the flag you're looking to deprecate, tell them it's going to change soon. Make sure there's a way they can modify their usage today to make it future-proof, and tell them how to do it. If possible, you should detect when they've changed their usage and not show the warning any more: now they won't notice a thing when you finally roll out the change.

Changing output for humans is usually OK. The only way to make an interface easy to use is to iterate on it, and if the output is considered an interface, then you can't iterate on it. Encourage your users to use `--plain` or `--json` in scripts to keep output stable.

Don't have a catch-all subcommand. If you have a subcommand that's likely to be the most-used one, you might be tempted to let people omit it entirely for brevity's sake. For example, say you have a run command that wraps an arbitrary shell command:

  ```txt
  $ mycmd run echo "hello world"
  ```
 
  You could make it so that if the first argument to `mycmd` isn't the name of an existing subcommand, you assume the user means run, so they can just type this:

  ```txt
  $ mycmd echo "hello world"
  ```

  This has a serious drawback, though: now you can never add a subcommand named `echo` — or _anything at all_ — without risking breaking existing usages. If there's a script out there that uses `mycmd echo`, it will do something entirely different after that user upgrades to the new version of your tool. Oops.

Don't allow arbitrary abbreviations of subcommands. For example, say your tool has an `install` subcommand. When you added it, you wanted to save users some typing, so you allowed them to type any non-ambiguous prefix, like `mycmd ins`, or even just `mycmd i`, and have it be an alias for `mycmd install`. Now you're stuck: you can't add any more commands beginning with `i`, because there are scripts out there that assume `i` means `install`. There's nothing in principle wrong with aliases — saving on typing is good — but they should be explicit and remain stable.

Finally, avoid creating time bombs. Imagine it's 20 years from now. Will your command still run the same as it does today, or will it stop working because some external dependency on the internet has changed or is no longer maintained? The server most likely to not exist in 20 years is the one that you are maintaining right now. (Don't build in a blocking call to Google Analytics either.)
