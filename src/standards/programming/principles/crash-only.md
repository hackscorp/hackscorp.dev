# Crash-only software

The concept of crash-only software comes from a [2003 paper](//www.usenix.org/legacy/events/hotos03/tech/full_papers/candea/candea.pdf) by George Candea and Armando Fox of Stanford University.

All good software is designed to safely handle from crashes, for example by recovering with minimal data loss. Traditionally, programs achieved fault tolerance partially through having two modes of shutdown — clean shutdown and crashing — and two modes of startup — normal startup and recovery.

Crash-only software takes crash resilience to the extreme by _only_ having crash and recovery modes of shutting down and starting up. When such a program is manually stopped by the user, it demonstrates identical behavior to when it stops unexpectedly (ie crashes). It's final state is the same, either way. That's because crash-only programs have no explicit shutdown routine (nothing required to achieve _correctness_ anyway, though some shutdown code may be used to pre-optimize the next startup sequence). Crash-only programs are always in a state where they can just be stopped right away.

Crash-only software is often more robust and reliable because crash-recovery is front-and-centre of the system design. For example, faults within a crash-only system can be handled simply by abruptly stopping (crashing) and restarting the individual components that are at fault.

Crash-only software requires careful design, particularly with regard state management. But it is not necessary for crash-only programs to be stateless. Developers will need to distinguish between volatile and non-volatile state. Volatile state can be held in volatile (non-persistent) memory, since it won't be needed when the program restarts, while non-volatile state needs to be held in non-volatile storage, which is any type of computer memory system that retains stored information even after it is shutdown. And developers will also need to distinguish between "autosave" state and "final" state that is saved at the explicit request of the end user.

As with everything in computer science, there are trade-offs to be made. Committing state changes continuously improves quality attributes such as reliability and recovery time, but these benefits tend to come at the cost of reduced steady state performance. A balance needs to be found. You will need to save state _just_ often enough to give your users a reasonable balance of acceptable performance, acceptable levels of data loss, and acceptable recovery times.

The concept of crash-only software does not generate as much interest today as perhaps it deserves to. The days of word processors with no auto-save functionality are far in the past. And most online software is inherently crash-only, thanks to the necessarily stateless nature of client-server request-response cycles. But the concept is still a useful one, if only to provide a mental model for how we think about categorizing and managing application state.

## Further reading

- **[Crash-only software: more than meets the eye](//lwn.net/Articles/191059/)** \
  Valerie Henson, LWN.net (2006)
