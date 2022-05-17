# Encapsulation

<!--

- **Deep versus shallow modules**: This is an idea from the book A Philosophy of Software Design. Abstractions that have simple interfaces (deep modules) but hide complex functionality, help reduce the complexity of programs. They do this better than shallow modules, which may have a simple implementation but complex interfaces. **It's more important for a module to have a simple interface than a simple implementation.** This is especially true in distributed systems, such as microservice architectures.

- Layers should remove, not add, complexity to a system. Don't add layers only for the purpose of separation of concerns. That separation MUST have a noticeable positive effect on the perceived complexity of the system as a whole. Resist the urge, for example, to build services that do too much wrapping.

- Information hiding and information leakage: this, in a nutshell, is what good abstraction and encapsulation is all about. Leaking information leads to tech- and architecture-debt later on.

-->
