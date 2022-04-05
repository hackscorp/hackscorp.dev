# Robustness

How to we design CLI programs to have a _feeling_ of being robust and dependable?

In general, this is about attention to detail and thinking through all the things that could possible go wrong.  It's lots of little things: keeping the user informed about what's happening, explaining what common errors mean, not printing scary-looking stack traces, and so on.

Here a few best practices that will improve the user experience of CLI programs in this regard:

- Validate user input. Everywhere your program accepts data from the user, it will eventually be given bad data. Check early and bail out before anything bad happens, and make the errors understandable.

- Responsive is more important than fast. Print something to the user in <100ms. If you're making a network request, print something before you do it so it doesn't hang and look broken.

- Show progress if something takes a long time. If your program displays no output for a while, it will look broken. A good spinner or progress indicator can make a program appear to be faster than it is. Ubuntu 20.04 has a nice progress bar that sticks to the bottom of the terminal. If the progress bar gets stuck in one place for a long time, the user won't know if stuff is still happening or if the program's crashed. So it's good to show estimated time remaining, or even just have an animated component, to reassure them that you're still working on it. There are many good libraries that can help generate progress bars.

- Do stuff in parallel where you can, but be thoughtful about it. It's already difficult to report progress in the shell. Doing it for parallel processes is ten times harder. Make sure it's robust, and that the output isn't confusingly interleaved. If you can use a library, do so — this is code you don't want to write yourself. The upside is that it can be a huge usability gain. For example, `docker pull`'s multiple progress bars offer crucial insight into what's going on.

  ```txt
  $ docker image pull ruby
  Using default tag: latest
  latest: Pulling from library/ruby
  6c33745f49b4: Pull complete 
  ef072fc32a84: Extracting [================================================>  ]  7.569MB/7.812MB
  c0afb8e68e0b: Download complete 
  d599c07d28e6: Download complete 
  f2ecc74db11a: Downloading [=======================>                           ]  89.11MB/192.3MB
  3568445c8bf2: Download complete 
  b0efebc74f25: Downloading [===========================================>       ]  19.88MB/22.88MB
  9cb1ba6838a0: Download complete 
  ```

  One thing to be aware of: hiding logs behind progress bars when things go well makes it much easier for the user to understand what's going on, but if there is an error, make sure you print out the logs. Otherwise, it will be very hard to debug.

- Make things time out. Allow network timeouts to be configured, and have a reasonable default so it doesn't hang forever.

- Make it idempotent. If the program fails for some transient reason (eg the internet connection went down) you should be able to hit `<up>` and `<enter>` and it should pick up from where it left off.

- Make it crash-only. This is the next step up from idempotence. If you can avoid needing to do any cleanup after operations, or you can defer that cleanup to the next run, your program can exit immediately on failure or interruption. This makes it both more robust and more responsive.

- People are going to misuse your program. Be prepared for that. They will wrap it in scripts, use it on bad internet connections, run many instances of it at once, and use it in environments you haven't tested in, with quirks you didn't anticipate. (Did you know macOS filesystems are case-insensitive but also case-preserving?)
