# Code is a liability

The product is an asset, but the code from which it is made is a liability. It should be treated as such.

The more code you have, the more it needs to be read, tested, changed and understood.

The best code is code you don't have to write.

Code should be easy to delete. Write code to be re-moveable. Often, this is the same as writing decoupled code.

Minimizing dependencies, having clear boundaries via well-defined interfaces, and having a thoughtful overall system design allows parts to be removed/changed more easily.

Someone once uses the expression "code spent" rather than "code written". Isn't that great? The implication is that removing code is reducing future cost.

If code can't be avoided, then it's quality must be good. Accidental complexity is one of the biggest cost factors. Accidental complexity is complexity that can be avoided. It occurs due to things like poor design, bad decisions, and not prioritizing and appropriate level of [simplicity](/principles/keep-it-simple) with the system.

<!--

The best engineers are at least 10x more productive than an average engineer. The best engineers do not write 10x faster. Rather, they make good decisions that save 10x the work in the long term. That's because good engineers design systems that are more robust and easier to understand by others. Other people can build upon their work much more quickly and reliably. And they will create fewer bugs and regressions. So, there is a **multiplier effect** over the lifetime of a product.

-->
