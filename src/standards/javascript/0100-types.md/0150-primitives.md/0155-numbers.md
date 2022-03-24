# Numbers

## Floating point arithmetic

In Mozilla's database, the most commonly reported class of bug in JavaScript has to do with errors in decimal arithmetic. It all comes down to this fact: in JavaScript, 0.1 plus 0.2 does not _exactly_ equal 0.3.

```js
0.1 + 0.2 !== 0.3
```

The underlying problem is that binary floating point numbers cannot accurately represent decimal numbers (fractions). This is due to the binary nature of their encoding. The problem is analogous to how the fraction 1/3 cannot be accurately represented by a decimal number with a finite number of digits.

In short, if you type a number with a decimal point into a JavaScript program, you have just introduced a potential bug! That's because the number held in memory does not perfectly represent the value you typed in.

This "bug" — if you want to call it that — originates not from ECMAScript but from a standard called [IEEE 754](//en.wikipedia.org/wiki/IEEE_754), an age-old specification that in its day significantly improved the uniformity of floating point number systems across different CPUs. Prior to IEEE 754, every computer manufacturer (and there used to be very many more of them) supplied several machine architectures, and each architecture had a different scheme for doing floating point. IEEE 754 was a huge step forward by making, for the first time, floating point systems work consistently everywhere.

The IEEE 754 standard is actually very well suited to applications that have very large and very small numbers interact with one another — applications used in astronomy, chemistry and physics, for example. But the IEEE 754 floating point system is not well suited to the business applications that use smaller numbers — the sort of applications that tend to be programmed in JavaScript!

Binary floating point is particularly ill-suited for computations involving monetary values — a common use case in JavaScript programs. It has been said that binary floating point can handle arithmetic involving dollars and quarters, but it accumulates errors when adding and multiplying pennies, nickels and dimes.

In hindsight, binary floating point was the wrong choice of number type for the language. But JavaScript is not alone in having this problem. Almost every programming language designed in the 1990s and 2000s adopted the IEEE 754 standard for floating point arithmetic.

There have been several attempts over the years by the ECMAScript standards committees to rectify the problems with representations of decimal fractions. One of the difficulties has been to find a way to introduce a more accurate system of decimal arithmetic to the language in a way that does not break compatibility with existing programs. There are many applications in existence the correct functioning of which _depend_ upon JavaScript's numbering system to work as it always has done. A key tenet of the standards process for JavaScript is to improve the language in a way that never breaks existing programs.

An early solution was pitched by IBM for inclusion in ECMAScript Third Edition in 1999. IBM proposed a revised IEEE 754r standard. But this proposal was ultimately rejected because, while it improved accuracy, it did so with a very significant hit to performance.

Other options considered have included introducing a "use decimal" mode, which was intended to work similarly to "use strict", allowing users to opt-in to a stricter decimal arithmetic system. Another idea was to introduce a decimal library ot the language's API, which would have methods like `add()` and `subtract()`, but this approach was unpopular due to its verbosity. Naturally, users prefer operators like `+` and `-`.

The ultimate solution will probably involve adding a whole new number type to JavaScript. Similarly to how the `bigint` primitive was added to handle numbers that are too large to be stored by the `number` type, the language may get a new decimal-safe number type in the future. But this would add a whole lot of complexity to the language and that is why the standardization process has not yet resolved this issue.

In the meantime, to avoid the inherent problems with floating point logic and arithmetic, it is best practice to avoid using decimal numbers completely, and instead scale-up decimal values to whole numbers. For example, monetary values SHOULD be represented as `2550` cents instead of `25.50` dollars.

Even where the decimal point is included in whole numbers, the floating point system produces correct results.

```js
1.0 + 2.0 === 3.0 // → true
0.1 + 0.2 === 0.3 // → false
```

So, the general rule in JavaScript is that you SHOULD scale numerical values by the number of decimal digits for which you want to retain precision. Thus, if you need precision to two decimal places, scale by 100. if you need four, scale by 10,000.

This does not solve all problems. Division of integers and multiplication by decimals may still produce inexact values. But basic integer addition, subtraction and multiplication will be accurate — at least until you hit JavaScript's upper limit for the `number` type, in which case you can upgrade to `bigint` if your target runtime environments support it.

An alternative approach is to develop custom value types, for example a `Money` class which stores dollar and cents values as separate integers. But custom value objects cannot, of course, be used with JavaScript's arithmetic operators, so you will also need to develop custom APIs to perform arithmetic. You don't need to reinvent the wheel here — there are a large number of vendor libraries dedicated to solving the problem of floating point precision this way.

## BigInt

TODO: This cannot be perfectly polyfilled, so bigints MUST be used only in programs that target runtime environments that support this number type natively.
