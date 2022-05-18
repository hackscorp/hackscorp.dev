# Refactoring

Refactoring is the refinement of a block of code without changing its behavior or public interface.

Software systems naturally evolve through cycles of expanding and contracting complexity. Particularly in incremental build processes, in which requirements emerge gradually, disorder naturally accumulates as we incrementally learn the consequences of past design decisions.

Refactoring requirements are often categorized as [technical debt](/standards/quality-metrics/technical-debt) or bundled with more general [maintenance](practices/maintenance) activities. But refactoring may be seen as a distinct activity, separate from these concerns. A useful mental model is to think of technical debt as a register of past shortcuts taken to "get stuff done", or of mistakes that will need to be rectified later, while refactoring is something that is entirely unavoidable and will need to be done from time-to-time no matter the quality of the prior work.

We have dedicated _refactoring sprints_, in which we allocate blocks of time in which teams are free to improve the internal quality of their code however they like. They are not closing down technical debt tickets or chasing quality metrics. All they are doing is improving the _quality_ of the implementation as they see fit.

Refactoring is also something you can do, and should do, on-the-fly when working on new operations and stories. As Uncle Bob said, "check the code in cleaner than you checked it out". If everyone did this, the code will get better and better, and in turn productivity would remain stable even as the codebase scales in scope and complexity.

<!--

At Google, most software gets rewritten from scratch every few years.

We prefer incremental changes, but sometimes a full rewrite is unavoidable or is actually the cheapest solution. But generally it should be avoided as it is hugely costly and disruptive.

Doing full rewrites is hugely costly. But sometimes it is necessary and actually the best overall option. In a period of just a few years, the requirements for a product can change significantly, and the software environment around it and other technology can also change. Changes in technology and the marketplace affect user needs, desires and expectations. Software that is a few years old was designed around an older set of requirements and is typically not designed in a way that is optimal for current requirements. Furthermore, the software system has likely accumulated a lot of complexity.

If the underlying solution design no longer fits or models the problem, it's time for a redesign.

Rewriting code cuts away all the unnecessary accumulated complexity that was addressing requirements that are no longer so important. In addition, rewriting code is a way of transferring knowledge and a sense of ownership to newer team members. This sense of ownership is crucial for productivity: engineers naturally put more effort into developing features and fixing problems in code that they feel is "theirs" - though this, of course, should be avoided!

Frequent rewrites also encourage mobility of engineers between different projects, which helps to encourage cross-pollination of ideas.

Frequent rewrites also help to ensure that code is written using modern technology and methodology.

-->
