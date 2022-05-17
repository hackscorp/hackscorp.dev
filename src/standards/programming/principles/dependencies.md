# Dependencies

<!--

Detox from external dependencies!

It will improve the robustness and resilience, etc of the overall system.

This doesn't mean code everything from scratch. It only means by _judicious_ in your choice of external dependencies. Use them intelligently. Do proper cost/benefit analysis. Document your decisions.

Using external dependencies carries the following risks:

- The dependencies may become outdated, under-maintained, or have hidden security flaws and performance bottlenecks. _You need to understand all the code_ that gets shipped to production. Every time you `yarn update` you would need to inspect all the code of the upgraded packages. This is how some attacks sneak in malicious code: they develop a package that has useful features, let it gather in popularity, then release a patch with malicious code. This is called social engineering,

- Libraries can significantly increase the size and compilation times of your code.

- Libraries hide from you many of the trade-offs, design decisions, and potential points of failure in your solution. When you design and implement all the base code of your system, it is easier to identify potential attack vectors.

- NOT using vendor components is challenging and fun! You will learn more, and progress further in your craft. How refreshing it is to be completely in control and  clearly understand what your system is doing under the hood at all times.

-->
