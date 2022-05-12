# Code coverage

Code coverage is one of the most useful metrics to gather from automated software testing.

Code coverage refers to the **amount of code that will get executed when automated test scripts are run**. (Code coverage is sometimes called test coverage, but some people consider this term to mean the proportion of automated tests that got run. So, if only 500 of 1,000 unit tests are run before the test runner times out, that is 50% test coverage, and the code coverage will be a different number.)

Code coverage tends to be applied in the context of [unit testing](/standards/testing/runtime/levels/unit), but in fact it is useful to generate this data from all automated test scripts at all levels.

The "amount of code" covered tends to be declared as a percentage of a program's overall level of code. But there are different ways to calculate the amount of code and the amount of coverage, and so "code coverage" is actually a catch-all term for several types of metrics.

## Methodologies

Code coverage methodologies include:

- Statement coverage
- Function coverage
- Condition coverage
- Branch coverage

Most code coverage generation tools, including [Istanbul](//istanbul.js.org/) for JavaScript, provide metrics using all four methodologies, for a complete view.

### Statement coverage

The easiest methodology to generate code coverage metrics is to divide the program's total number of executable lines of code by the number of lines of code that actually get executed during the course of a test run.

```txt
coverage = ( total LoC / executed LoC ) * 100  
```

### Function coverage

This is another simple way to calculate test coverage. Function coverage is simply a count of the number of functions that gets executed by the test scripts, as a percentage of the program's total number of functions and methods.

### Condition coverage

Condition coverage aims to establish if tests cover both the possible `true` and `false` results across all conditional statements within a program.

### Branch coverage

Branch coverage is similar to condition coverage. It also aims to ensure that every branch of every conditional structure gets tested. Branch coverage is a more _complete_ metric, because it also covers `else` statements

## Target coverage levels

The main benefit of generating code coverage metrics is that it helps us to identify areas of code that are vulnerable to regressions, because they lack tests. Other benefits include the identification of unused "dead" code, and keeping a general focus on quality.

There are not really any disadvantages to generating code coverage metrics, only that the metrics themselves need to be interpreted with a degree of caution. 100% code coverage — across all coverage methodologies — does _not_ necessarily mean that a program is defect-free, and it certainly does not mean that the program meets its requirements.

It is a case of diminishing returns. 100% coverage across-the-board rarely adds much more value than, say, 90%.

Furthermore, some types of tests are more fragile than others. Low-level unit tests are often the most susceptible to breakages when implementations change, so as a general rule code coverage is more valuable at the higher levels of integration and end-to-end testing. On the other hand, in projects where the requirements are in a state of flux, in early-stage greenfield projects for instance, the costs of maintaining ever-changing system tests may be prohibitively high. If the time spent to fix/update broken tests starts to approach the time it would take to test the same stuff manually, then the value of automating the tests has been lost.

The goal is to achieve a _reasonable level_ of code coverage at each testing level. Achieving 100% code coverage SHOULD NOT be the goal. As a general rule, a coverage target of about 75% to 80% is good practice.

This level of code coverage gives us the flexibility to make more nuanced decisions about which areas of code we cover with tests, and _how_ the code gets covered. It means we can focus on ensuring coverage of the most critical user journeys, and the most fragile and error-prone units of code, and not waste time writing tests where there is little benefit gained from doing so. 

It is also important to focus on the _quality_ of tests as much as their _quantity_. When we're chasing coverage metrics, it is easy to lose sight of this. It is incredibly easy to gamify coverage: to achieve high coverage with low quality tests. Think about it: test scripts could execute every line of code and every possible code path, but never make a single assertion!
