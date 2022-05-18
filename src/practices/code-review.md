# Code reviews

<!--

Study after study has shown that static code reviews actually beat runtime testing for finding bugs!

Good code needs to meet two requirements. First, it should be correct. When executing, it should produce the result that is expected. Second, it should be easy to read and understand and reason with.

Code review is the process we use to evaluate the second quality. Testing handles the first requirement.

**Coding is a social activity.** Code does not exist in a vacuum. It is read more than it is written.

Unreadable code can go unnoticed for a long time. Incorrect code will soon be noticed — even if it gets through testing. So, in a sense, code review is a really critical part of any process, to keep technical debt under control.

None-readable code is a large contributor to technical debt.

"Readable" code means different things to different people. That is why code review should be **peer review**. The best people to judge the static quality of your code are the people who are most likely to need to understand it, in order to modify or extend it in the future.

Readable code starts with code that you find easy to read. When you've finished coding, take a break to clear your mind. Better yet, come back the next day, or after the weekend. Then re-read it. Ask yourself:

- Does the code make sense?
- Are there comments where the code is not enough on its own?

Then submit to your peers for code review.

## Principles of readable code

There are the things to check in code review:

- Single responsibility: all building blocks do one thing
- Well structured: all the components are easy to navigate and follow a logical structure
- Consistent code style and formatting
- Thoughtful naming
- Simple and concise, but clarity over brevity
- Comments explain the "why" not the "how"

-----

The author is free to choose reviewer(s) as they see fit. But reviewers are also free to re-assign to alternative (less busy) people, as they see fit.

The review process is really about team ownership of the code. Once checked in, the whole team owns the code, not just the author.

One potential issue with code review is that if the reviewers are too slow to respond or are overly reluctant to approve changes, this could potentially slow down development. That is why we are pretty flexible over who gets assigned to be a reviewer.

Also, anyone is free to comment on any change, regardless of whether they were named as a reviewer of that change, both before and after the change is committed. If a bug is discovered, it's common to track down the change that introduced it and to comment on the original code review thread to point out the mistake, so that the original author and reviewers are aware of it.

It is also possible to send code reviews to several reviewers, and then merge the change as soon as one of them has approved. Any subsequent comments may need to be dealt-with in follow-up changes. This can also help to reduce the turnaround time for reviews.

Once an issue is closed, it should not be reopened. Better to open a new issue / PR.

-->
