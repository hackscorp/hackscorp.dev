# Decision logs

In the world of agile, decisions that dictate how software architecture evolves are being made all the time. Furthermore, in an age of microservices — or even serverless nano services — these decisions may be distributed across autonomous teams, with perhaps only a little oversight from an architect responsible for the overall system design and vision.

And with engineers onboarding, and other leaving, projects all the time, it's easy for the _context_ of why past decisions were made.

Of course, there will endure artifacts such as architecture diagrams and key design decision (KDD) documents. However, these tent to provide a point-in-time snapshot and, being disconnected from the software, don't tend to be maintained alongside the evolving system. And, as with READMEs and other such in-band materials, documentation tends to capture the here-and-now, but not the "how we got here".

Understanding what languages, databases, frameworks and design patterns are in use, and how the business domain is modelled, are crucial to being confident to change a system in any meaningful way. But equally important to understand is: why?

What we need is a means of recording decisions in a concise format that captures individual decisions, and the context around them.

We have chosen to adopt a "decision log" system, which is based on the concept of architectural decision records (ADRs).

The idea is simple. Essentially, each time any decision is made of architectural important, a new entry is added to the decision log. This is simply a plain text file, committed to the same source control repository as the software system that is the subject of the decision.

Decisions can be broad ("we elected to implement a loosely-coupled monolith because...") or more granular ("we have decided to use this ORM for DB abstraction because..."). The important point is that decisions, once logged, are treated as immutable documents. The overall log is append-only: new entries can be added to the end of the chronology.

To aid this, documents should be numbered sequentially.

We don't have a fixed template for decision logs, but each decision document should contain the following information:

- **Status**: Describes the stage in the decision's lifecycle. This is the only section of a decision document that can be updated over time. The status of a decision could be pending, accepted, rejected, deprecated, superseded, etc.

- **Context**: The context around the decision. What are the objectives, and what are the constraints that informed this decision? This can be a technical context, but it can also be a business/political context.

- **Decision**: What is the agreed solution? And what alternatives were considered, but ultimately rejected? It is useful also to keep permanent records of why some solutions were outright rejected for development, so future developers don't waste time revisiting the same options.

- **Consequences**: There will be trade-offs with any decision. These should be understood and documented.

## Related links

- [Docmenting architecture decisions](//cognitect.com/blog/2011/11/15/documenting-architecture-decisions) \
  Michael Nygard (2011)

- [Architectural decision records](//www.youtube.com/watch?v=rwfXkSjFhzc) (video) \
  David Ayers (2019)
