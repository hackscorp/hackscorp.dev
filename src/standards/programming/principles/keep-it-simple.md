# Keep it simple

Complexity is _the_ root cause of the vast majority of problems in software development today. In fact, it has always been thus.

Following Fred Brooks' model, we distinguish between _essential complexity_ and _accidental complexity_.

If simplicity is not a goal, accidental complexity is more likely to occur as the system grows, and will gradually negatively affect almost everything from changing the system to even being able to understand it.

Don't pick a solution until you've thought of at least one more. It's enticing and exciting when that thing clicks in your head and you realise you found a way to solve the problem. Perhaps with a trivial problem that's cool and there's really nothing more to do. However, if the problem is non-trivial or important, it's worth considering that there may be other solutions you simply haven't thought of yet.

To avoid getting carried away in the excitement of going from no solution to a solution, and simply going with the first thing that comes into your head, try to think of at least one more solution. Trying to find a second solution often forces you to think differently, and once you have two options you'll be forced to consider the trade-offs between the two. This can also help to frame the problem more clearly as well.

It's all about trade-offs. No bit of code can ever be perfect because it is always making a trade between contradictory ideals. The very existence of the code is a compromise!

With almost every decision you make, you're either deliberately or accidentally trading off one thing for another thing. Sometimes the trade-offs are obvious, but sometimes they are layers away from the thing we can see in front of us. Always be thinking about where the trade-offs may be if they're not immediately obvious.

A good example that comes to mind is Go. Go has a fairly poor type system (currently), and it's a tiny language. What's the trade-off? Due to its size, and limited support for fanciness, my code looks like your code and I read other people's code with less "wow, I need to rewrite this ASAP" than ever before and I feel far more productive. There's always a trade-off somewhere. Look for it and you'll be in a position to make better decisions.

Aso, writing throwaway code to explore a problem is a great idea, but it's not done often enough. It can be quicker to get it completely wrong a few times and start over than to attempt to get it right first time. Sometimes the best way to explore the problem is by screwing around very close to it and learning as much as you can.

Perhaps you don't really understand the problem space yet, but by trying a few things out you can discover stuff that high level conversations about design, or reading docs will completely miss. With the freedom to make as many mistakes as you like and throw it all away at the end, you can learn very quickly.

In their 2006 paper, [Out of the Tar Pit](//curtclifton.net/papers/MoseleyMarks06a.pdf), researchers Ben Moseley and Peter Marks say the following:

> The “software crisis” was first identified in 1968 and in the intervening decades has deepened rather than abated. The biggest problem in the development and maintenance of large-scale software systems is complexity — large systems are hard to understand. We believe that the major contributor to this complexity in many systems is the handling of _state_ and the burden that this adds when trying to analyse and reason about the system. Other closely related contributors are _code volume_, and explicit concern with the _flow of control_ through the system.

## Further reading

- [Out of the Tar Pit](//curtclifton.net/papers/MoseleyMarks06a.pdf) \
  2006 paper by Ben Moseley and Peter Marks
