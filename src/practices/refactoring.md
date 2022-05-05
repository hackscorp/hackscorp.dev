# Refactoring

Refactoring is the refinement of a block of code without changing its behavior or public interface.

Software systems naturally evolve through cycles of expanding and contracting complexity. Particularly in incremental build processes, in which requirements emerge gradually, disorder naturally accumulates as we incrementally learn the consequences of past design decisions.

Refactoring requirements are often categorized as [technical debt](/standards/quality-metrics/technical-debt) or bundled with more general [maintenance](practices/maintenance) activities. But refactoring may be seen as a distinct activity, separate from these concerns. A useful mental model is to think of technical debt as a register of past shortcuts taken to "get stuff done", or of mistakes that will need to be rectified later, while refactoring is something that is entirely unavoidable and will need to be done from time-to-time no matter the quality of the prior work.

We have dedicated _refactoring sprints_, in which we allocate blocks of time in which teams are free to improve the internal quality of their code however they like. They are not closing down technical debt tickets or chasing quality metrics. All they are doing is improving the _quality_ of the implementation as they see fit.
