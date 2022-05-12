# Testing

## Unit testing

The key to good unit testing is to write **testable code** in the first place. Applying simple design principles can help. In particular:

- Use a good **naming convention**
- Don't repeat yourself, ie avoid **code duplication**
- **Single responsibility**: each object/function must focus on a single task
- Keep a **single level of abstraction** in the same component. For example, do not mix business logic with lower-level technical details in the same method. 
- **Minimise dependencies** between components: encapsulate, interchange less information between components.
- **Support configurability** rather than hard-wiring. This prevents having to replicate the exact same environment when testing (eg markup)
- Apply adequate **design patterns**, especially **dependency injection**, which allows separating an object's creation responsibility from its business logic.
- Avoid global mutable state

**Write your tests in the BDD style where possible.**

### General guidelines

- Writing a test first makes the code design testable, de facto
- Writing just the amount of code needed to implement the required functionality makes the resulting codebase minimal, thus more maintainable
- The codebase can be enhanced using refactoring mechanisms, the tests given you confidence that the new code is nto modifying the existing functionalities
- Cleaning the code in each cycle makes the codebase more maintainable, it is much cheaper to change the code frequently and in small increments
- Fast feedback for the developers, you know that you don't break anything and that you are evolving the system in a good direction
- Generates confidence to add features, fix bugs, or explore new designs

### Naming tests

Test names should be concise, explicit, descriptive, and in correct English. Read the output of the spec runner and verify that it is understandable! Keep in mind that someone else will read it too.

### Best practices

- **Never commit commented/skipped tests.** Commenting-out tests is sloppy! Tests are written to ensure that a unit/component meets the criteria it was originally developed for. If you have work to change that original functionality, you should update the test before proceeding with your change.

- **Don't use coverage as a goal.** Unit test coverage is a metric, not a goal. You should aim to cover the general flow as well as the edge cases in tests, with meaningful inputs/outputs that you could expect the unit to be used for. Coverage will be used as a quality gate for our CI processes, but the relevance must be policed in the code review process.

- **Avoid testing multiple concerns in the same test.** If a method has several end results, each one should be tested separately. Whenever a bug occurs, it will help if you locate the source of the problem. `AND`s and `OR`s in your test name should be considered a code smell.

- **Dont' repeat yourself.** Just like production code, if you end up with clear duplication in your tests, consider ways of reducing it. Test factory functions are a great way of doing this.

-----

----

# TDD

Test-driven development means that tests are written at approximately the same time as the code they cover. The code and tests get checked in to the project's mainline at the same time. Test-driven development is not synonymous with test-first development, though that is a method you can use to do TDD.

(Test-first development is not always possible. It really doesn't work if you are working on a problem that you don't know how to solve, for instance. In any context where it will be beneficial to experiment with different solutions, don't write your tests first. Settle on an implementation, _then_ cover it, else the design will become too entrenched by the tests — this is the original intent of XP "spikes". On the other hand, writing something like a library or other publicly-distributed package, it can be really beneficial to write the tests first, not least because this is a great way to get a feel for what the ergonomics are like in actual use, and to spec out what the library will and will not do. ... Sketch things out first, then lock-in the design with tests.)

Appropriate coverage of automated, scripted testing yields great benefits in the long term. When people say that writing tests slows you down, they are usually thinking only about the up-front costs. They are not looking at the long term costs of maintenance of the software, or of the costs of modifying and extending the software's functionality over time, or of the challenges of diagnosing and fixing regressions. .... It is wrong to think of tests scripts as _yet more code to maintain_, and more code means more overhead.

There are many other benefits of test-driven development. TDD necessitates we apply constraints to how we write and organise our programs' code, having a positive effect on code quality. When a requirement of your code is for it to be easily testable in an automated way, this constraint pushes your code towards statelessness and immutability, nudging towards small, static components.

----


# Testing

## Benefits of automated testing

> Tests are common in software engineering because they help to document the core functionality of the code and make sure that new features do not introduce breaking changes.
>
> In the software industry, code is generally written, maintained, and refactored by many different software engineers over many years. Having comprehensive tests enables engineers to confidently change or add to existing code knowing that their changes haven't broken other features or had unintended side effects elsewhere in the app.
> 
> Getting used to reading tests and following the error messages that failed tests will log for you in the terminal is a skill that takes practice. Cultivating it now will serve you well throughout your coding journey!

----

Testing is a major component of **quality assurance**, but it is not the only component.

This is not just about testing the _functional requirements_ but also testing the _quality attributes_ of the system. Each QA procedure focuses on a particular attribute, eg unit testing verifies correctness, integration testing verifies the overall behaviour, code review verifies the coding conventions, etc.

QA ia about making sure a solution (a) meets the requirements and (b) is of sufficient quality.

Traditionally, the QA/test group acted as the final quality gate, preventing bad software from getting released. In agile environments, _testing is a way of life_. Everyone tests. Getting tests covered is the responsibility of the whole team. Testing is incorporated into the development process, running concurrently alongside it.

Thus, products are built to a high quality from the beginning.

Continuous testing provides a tight feedback loop which provides information on how well the merged product is meeting the business needs. Short feedback loops. A feedback loop is the amount of time that passes between code being written or changes, and someone or something executing that code and providing information or metrics on how it behaves and how well it works. If testing is not done until the end of the development process, that's a long feedback loop.

Automated tests are preferred because of the rapid feedback and long-term efficiency, and confidence to change code. Manual regression tests take longer to execute and are not immediate = longer feedback loop. _Some level of manual tesing, especially manual exploratory testing, is still important._

So, we need a mix of testing, manual and automated, high-level and low-level.

Employ several levels of testing to cover different types of information: automated unit tests check the behaviour of individual components; they are run often and written concurrently to the source code under test. Automated acceptance tests check the behaviour of a system end-to-end. Acceptance tests may bypass the GUI, checking only the underlying business logic. Acceptance tests usually run on "checked in" code, so the feedback loop is slightly longer.

Internal testing can produce fresh requirements. A tester should ask questions no-one has thought ot: what if the file uploaded is corrupted? What is the connection breaks? What if the file is locked? ... Every test, whether manual or automated, scripted or exploratory, represents a bundle of expectations. It is the job of testers to challenge those expectations, not just verify them. Good testers test conditions that may occur in the "real world", outside of the context of our carefully controlled software engineering environments.

## User acceptance testing (UAT)

Ultimately, changes need to be approved by the customer. The development team release the changes to a pre-release environments and the changes are reviewed by the customer before they are released to production.

Acceptance testing is manual, never automated. It is the actual customer used the updated software in a real world usage context. UAT is the final quality control gate.

The customer refers to the original business requirements and these are the ultimate "done criteria".

## End-user testing

As a project moves forward, it gets tested with successively larger groups of people to eliminate increasingly uncommon problems.

End-user testing is an optional testing phase beyond UAT. It means testing new features and improvements with actual end users, perhaps using "beta opt-ins" (aka feature toggles).

Begin with a small number of testers who will quickly spot the obvious bugs that need to be fixed. As problems are addressed, you can increasingly ope-up to a larger pool who will find more esoteric issues.

Most people only give feedback once. So, if you start by launching to a large audience, everyone will give you the same obvious feedback and you'll have nowhere to go from there.

**Even the best product ideas built by the best engineers will start out with significant issues.**

Sending bugs to production is not a failure of enginerring. It is a failure of testing.

The aim should be to repeatedly refine the output, sanding down rough edges until a good product emerges.

A problem that happens only 0.1% of the time may not be picked up during internal testing. So gradual roll-out to users is vital. You also have to fix new problems caused by new mobile devices, network outages, or security attacks... ie responding to events out in the world that are beyond your control.

You might need a seried of _secondary systems_ that continuously check the main system for any discrepencies in payments, application crashes.... ie an "immune system" that lets you avoid being overwhelmed by recurring issues.

Built-in LOTS of different feedback loops.

Small feedback loops allow for quick and easy correction, but miss out on broader issues. Large feedback loops, catch broader issues. You need both.

Building software is not about avoiding failure. It is about strategically failing as fast as possible to get the information you need.

## Test-driven development

We practice test-driven development, especially for high-level technical requirements, which become our integration tests.

As for lower-level unit tests, these MAY be written concurrently with the source code components they test, but it is a decision for each developer, which gets written first: the component or its test. You may do both: write component tests to help flesh out the component's API, but when the tests will need to evolve as the component's design evolves.

But overall the test-and-build phases are closely interlocked and overlap one another.

Our integration tests are defined with the functional requirements — they are the same thing — and these tests drive the build phase. The process of testing may yield new insights and generate fresh requirements.

-----

Writing tests first helps to design the API of the thing being built. You ask: is the API too complex? Does it make sense? Do you have to keep too much data around? Could this be broken into smaller components, then those components used together to compose the more complex functionality?

See also: [acceptance criteria]

----

It is okay to add tests retroactively. Test-driven development is more of a _design_ methodology than a construction technique. We write extensive unit tests, but mostly after development work. THe re-write work .... is then avoided.

The benefit of TSS is that the code you end up with will actually be testable. Just keep in mind that if you have to write a test for your code, that will effect how you code it.

Junior devs, who are not used to writing tests or the architectural concerns of testable code, should do TDD.

Create unit tests for shareable components that get reused a lot. Packages that are design for easy import to any application should have extensive test coverage at the function, class and package levels.

At the application level, end-to-end integration tests tend to be more useful (catch more bugs) than unit tests.

In other words, apply tests at the level of the API of the software you are writing. If the software is a package, the API is its public programmatic interface.

**The spectrum of how rigorous tests should be**: It is relative to the scale and complexity of the software under test, and the business domain of the software (eg cryptography, financial services, and "high integrity" software). And the coverage of tests varies over the lifetime of a piece of software. Tests can be extremely useful in the middle stages of a program that is rapidly developed, with multiple collaborators. But they are less useful for an MVP written by a solo developer, for example. In the early phases of a software product, time-to-market can be more important and an accumulation of a manageable level of technical debt is a pragmatic trade off. The chances of you building on the code later are not high, and if you do you are likely to drastically change the architecture anyway.

When the number of features increases, the complexity of the application increases. Tests guide you. They help you to ship faster, as you don't need to manually test the whole application again. In manual testig, there are chances of missing out a few cases. If it's automated, all such cases are executed.

As a codebase increases in size, and as the team increases in size or individual engineers are replaced, _tests_ are fundamental to how software updates continue to be shipped in a timely fashion.

Even for unit tests, err on the side of describing the tests in terms of the expected behaviour. Behaviour-driven tests double-up as a living specification of the software. These sorts of tests are doubly useful. They not only protect against bugs being release publicly, they also help developers to understand the business purpose or a software component or system. You are providing a significant part of the documentation while also providing a regression suite.

The other benefit of writing tests is that it enforces a constraint that requires you to write testable code. Writing code that is easy to test tends to be higher quality, and easier to reason about.

Testing is not the only engineering process that exists to catch bugs and mistakes. Software requirements specifications, coding standard, peers reviews -- all of these things help, too. **There are no silver bullets.** Tests are not the holy grail of software engineering. 100% test coverage will not save you from releasing bugs to production. The most obvious errors should be caught by your IDE using intelligent code completion and live static analysis and linting. For compiled languages, the compile step should catch the most obvious errors.

What is more important is having a practical, balanced approach to all aspects of the software development lifecycle.

## Mocking

Mocking tends to be a huge timesink.

It may improve the utility of tests, since you are testing against a fake system, but it means that if external components change, you also have to update their mocks and stubs.

It may be adequate to have a combination of small unit, functional tests, and end-to-end integration tests in a real environment (eg use cypress.io for automated testing of web application UIs).

The extra costs of maintaining mocks can have a low return on investment.

## Test coverage

Coverage gives an idea of how many lines of code have been run, but by itself it does not guarantee the correctness of those lines of code.

Test coverage is a useful metric to measure, but haps in coverage should not drive testing. We should not write tests specifically to "get coverage". 100% test coverage is not mandatory. Even with 100% test coverage, you can still miss issue. It is not possible to detect a double negative, for example. 100% test coverage can still miss some possible code paths.

Don't bother testing code that has a low chance of causing problems. Write tests for the code with the highest risk of errors, or the potential highest business cost, and work your way down to other code when time permits in **backlog** sprints.

However, code that you decide not to test should be clearly annotated #NOTESTS. This makes it easy for us to zero-in on section of the code that are not covered by tests in the diagnosis of issues.

Be sure to test 100% of code paths through functions that are covered by tests. Otherwise, the inclusion of tests leads to the illusion of that code being perfectly correct. Where tests are included, they should test every input/output permeatation. Good test coverage is predicated on having good tests in the first place.

Focus on coverage of the bits of that are most likely to cause problems or not work as expected.

------

# Test strategy

Testing is highly integrated into our delivery methodolgy, "shifting left" to introduce scrutiny and feedback into the software delivery process as early as possible.

Finding issues early allows them to be resolved much more quickly and easily than in a later, separate test phase, speeding overall delivery and improving quality.

Test automation is another key factor in modern software development. In today's marketplace, software testers are expected to be able to provide not only rigorous manual testing of systems, but to be able to engineer automated test procedures.

By automating tests and building them into the development process, the team will protect the software against regressions in a much more reliable, efficient and repeatable manner than manual scripted regression testing.

Visibility will be provided by a dashboard showing the current status of automated test builds. It is also crucial to minimise the amount of slow and brittle automated UI testing, so the team will instead push this down to unit test level as far as possible, in order to implement a fast, lean and focused automated testing capability.

In addition, special attention will be placed on accessibility testing to ensure the website can be accessed by as wide an audience as possible. This will also take place in-sprint during developing by the team, using a combination of automated and manual testing, and by read users using assistive technologies. All functionality will not be considered "done" until accessibility has been tested and any issues resolved.

## Functional testing

Functional tests SHOULD be created "in sprint", but do not need to be included in the same PR (as per unit tests).

Functional tests SHOULD be expressed using a behaviour-driven design (BDD) notation, preferably Gherkin.

This means that acceptance criteria can be understood by both technical and non-technical team members and stakeholders. It also means that the human-readable "given-when-then" syntax can be mapped to automated test scripts, where possible and practical, for execution in CI/CD pipelines.

Acceptance criteria SHOULD be recorded alongside the source code it applies to, and committed to the same source control repository. 

Acceptance criteria MUST be organised into discrete "stories".

All PRs (but not necessarily all commits) will require the functional test suite to successfully pass before they can be merged into mainline toward release. This helps to ensure there is no functional regression.

Although an automation-first approach will be adopted, if required manual testing will also be performed for user stories, or parts of them.

**Exploratory testing** may also take place, if appropriate. Regressions will be logged as new issues.

### Functional testing: automation principles

- **Deterministic**: Tests should not rely on any other tests (ie they are stateless) and, given the same starting condition, they must always yield the same result. This is achieved by having supporting API methods that create test data puely to support automation tests, and each test should create its own data and not share it with other tests. Test data should be deleted after the test is completed.

- **Parallel**: Tests should be able to run in parallel, which is achieved partly through implementing the Deterministic characteristics, but also by constucting a framework to explicitly allow it. This speeds up text execution and also allows early sight of potential concurrency issues.

- **Atomic**: Automated tests should attempt to test a single condition, so that when a test fails, the cause of failure is unambiguous, and does not prevent further testing.

## End-to-end testing

A *small* suite of automated end-to-end "happy path" tests will be created to ensure that the most common user journeys, covering the most important parts of the website, are continually tested. This will enable the team and stakeholders to have a high-level of confidence that the application is behaving correctly as a whole, especially from a user-centric perspective.

These tests will always be automated and will be executed at the same time as the functional tests, when developers request their user story code be "committed" to a release-candidate branch in a pull request.

As the user stories are being delivered during sprints, the end-to-end tests may also need to be adapted to keep pace. So as part of the user story delivery, potential changes to the end-to-end tests need to be considered and implemented.

A BDD approach is NOT recommended for end-to-end tests, because the user journeys can eb long and the overhead of BDD implementation too heavy. So, a straightforward JavaScript approach should be adopted. 

End-to-end tests will, generally, be written post-development by the Test Lead. They may even be created in follow-in sprints.

## API integration testing

TODO: Automation of API testing based on OpenAPI definitions.

## Non-functional (quality) testing 

### Accessibility testing

Accessibility is at the heart of everything we do. 

Testing for WCAG 2.1 Level AA conformance will be baked into every phase of our software engineering process.

During development, this will take the form of an accessibility sub-task, allocated to each user story. A user story will not be considered "done" until any accessibility requirement is resolved.

Developers should consider the accessibility aspects of the user story as part of the development process, and not as a separate "test" task to be undertaken after development is complete. To help with this requirement, tooling will be provided to allow developers to easily perform accessibility testing within their development environments, for example Chrome Dev Tools Lighthouse/Axe. If possible, we should also test the website using the most popular screen readers, such as JAWS and Dragon.

Additionally, automated accessibility testing will be included in the continuous integration pipeline to ensure there is built-in protetction against accessibility regression. Ideally, this tool should have the same core validation engine as the developer tool.

It's critical that the development team include accessibility testing from the start because retrofitting it after development is complete will almost certainly require time consuming re-coding and introduce the risk of regression. Accessibility bugs can be some of the most costly, as they generally involve re-design and can cut across the entire site/app.

Sessions with real users will also be scheduled to test the website, to ensure that our efforts to provide an accessible website are effective in real-world scenarios, with the assistive technologies they actually use. These sessions will be aligned with the sprint cycle, and occur every 2 weeks.

### Performance testing

The use of static site generation (SSG) and cloud-based content delivery network (CDN) should provide a high availability, high performance platform, de-risking performance issues.

Nevertheless, there may be value in implementing from the start a simple performance test suite in the development environment:

- If we can demonstrate that the application is sufficiently fast in a development environment with the required number of concurrent users, then this is a strong indicator that it will also work in a production environment with a higher specification.

- Unexpected performance degradation in parts of the website during development can be more readily identified and fixed.

- When a production or production-like environment is available for performance testing, then we can easily switch execution to the production environment and compare results.

### Compatibility testing

UI-related stories MUST be tested using multiple browsers and devices, including PCs, laptops, tablets and phones.

We will regularly audit the browsers and devices that are used to access our online properties, and from this we will identify a set of clients compbinations (browser, device, screen resolution, etc.) to use as a test group for compatibility compliance. eg:

Browsers:

- Chrome
- Edge
- Safari

Screen resolutions:

- Desktop: 1280x720px
- Tablet: width 768px
- Phone: width 320px

During early alpha/beta phases of a new UI, team may concentrate on simple manual testing, eg using Chrome Devtools, to confirm the UI can be used on this small subset of common screen resolutions, with no obvious defects.

Later, we can consider using cloud-based services such as BrowserStack or SauceLabs to perform automated functional testing on a larger number of devices (both real devices and emulators).

Compatibility testing should be done during each sprint as a specific sub-task to each user story (if that story requires compatibility testing) or feature.

### Security testing

Security testing should be performed before go-live, and will comprise several separate areas for investigation:

- Infrastructure testing
- Application security testing
- Secure code review
- Penetration testing (external)

An infrastructure security testing plan can only be done when the related network and solution architetcure design has been completed.

The read-only nature of the data in the alpha/beta phases of the project mitigates much of the security risk from an application security perspective. Nevertheless, applications must have a test plan to ensure they are not vulnerable to code-related weaknesses such as:

- SQL injection
- Cross-site scripting
- URL manipulation

## Test data

TODO: A test data framework will need to be built to feed mock data into the functional and end-to-end tests.

Ideally, each test should setup its own data, instead of relying on existing data or a data preload.

## Environments

Most testing -- including unit, functional, end-to-end, compatibility, performance and accessibility testing -- will be done in local development environments.

Compatibility testing and later phases would benefit from being able to test under a wider range of browsers and devices on cloud-based services such as BrowserStack and SauceLabs.

Performance testing MUST take place on production-like environments.

Secutity testing MUST be performance diretcly on the production environment.

## Defect management

Defects raised in-sprint, relating to work carried out during the sprint, may be fixed immediately by developers without  abug ticket needing to be raised, to increase development speed and reduce administrative overhead.

If in doubt whether a defect should be fixed immediately -- for example, if it is unrelated to work being delivered in the sprint, or if it looks to be low priority -- then the developer should have a quick review with an appropriate team member, for example a business analyst, product owner or the tech lead, to decide whether to fix it right away.

All defects that are not fixed immediately MUST have a bug ticket raised, with a reasonably detailed description and added either to the sprint backlog for fixing later in the sprint, or to the product backlog to be considered later.

Defects should be prioritised either when they are raised, or during backlog refinement.

During sprint planning, outstanding defects should be considered for inclusion in a sprint at the same time as user stories.

## Roles and responsibilities

- **The whole team**: Quality is the responsibility of all stakeholders in order to deliver a solution that is robust and meets the user requirements, and it is incumbent on us all to raise for discussion any potential bugs, design issues, or other defects so they can be resolved in a timely and effective manner.

- **Developers**: Initially, there will be no dedicated testers in the development team, and the project will take a T-shaped approach with testing performed by developers, supported by the Test Lead. This will include unit, manual, accessibility, end-to-end and exploratory testing.

- **Test lead**: The Test Lead will have overall responsibility for quality on the project, working closely with and supporting the development team. Responsibilities will include designing, implementing and maintaining the automation framework, selecting test automation tooling, ensuring their is sufficient test coverage, test data management, contributing to acceptance criteria specification, and defect management flow.

- **Technical lead**: The primary QA responsibilities of the technical lead will be to oversee the quality of the development code by organising and participating in code reviews, managing the solution and technical architecture of the application under development, identifying and managing technical debt.

- **Business analyst**: Responsible for helping the team analyse potential defects.

- **Product owner**: Responsible for prioritising defects alongside user stories.

## Test tech debt

Most software development projects incur technical debt during the delivery process, and quality assurance activities are no different. Typically, these might include improving tests or the underlying test framework, reactivating disabled tests, improving maintainability and increasing reliability.

It will be the responsibility of the test lead to maintain the test tech det issues in the product backlog, encourage the team to raise technical debt issues, provide visibility of the backlog to wider stakeholders, including the impact of not addressing the test technical debt and work on resolving the test tech debt backlog.

==================================

# Test ways of working

## Pre-sprint

- BA works with end users, product owners, SMEs to elaborate and document the requirements for each user story, including describing acceptance criteria in a simple, bullet-point form
- During backlog refinement, when sizing stories the team should also take into consideration any excessive complexity in testing, for example accessibility or compatibility testing might be especially time-consuming for a particular story 

## Start of sprint

During sprint planning, it should be determined if any additional testing needs to be performed outside of user story-specific testing. This might include:

- when stories are fine-grained, certain types of testing can only be done after a group of user stories are completed
- end user accessibility testing
- broad browser/device coverage cloud-based compatibility testing (Sauce Labs or BrowserStack)
- performance benchmark testing
- mini-regression testing

In these cases, separate tickets should be created to record that work that needs doing, and progress towards completion.

## Immediately before software development begins

- Before a user story is picked up by a developer, a "three amigos" session (typically 5-10 minutes) should be held between the developer, business analyst, and tester to review the user story, and for test purposes specifically the acceptance criteria.
- At this point, it should be definitely decided what testing will need to be done for the story, for example accessibility testing
- Separate tickets should be created to reflect the different test types required to be performed for the story, eg functional, accessibility, compatibility, end-to-end 
- A scenario title should be defined for each acceptance criterion (typically containing the word "should") to use in the feature files. There may be more scenarios than there were acceptance criteria. Ideally, this could be done before the three amigos sessions, in which case the three amigos can be used to verify that the scenario titles have been created and cover the acceptance criteria.

## During development

- Unit, component, and functional tests should be written before development starts, and failing 
- Functional tests should be written in Gherkin feature files, based on the list of scenario titles compiled by the tester
- During development, the developer should use the "axe DevTools" plugin for Chrome DevTools, and our [accessibility testing checklist] to verify the application is accessible
- Accessibility sign-off should be done separately by a tester using the same "axe DevTools" plugin for Chrome DevTools, and our accessibility checklist.
- Accessibility CI tests should be created or extended, as required
- End-to-end tests should be created or extended, as required
- Manual compatibility testing should be done for the designated browsers and screen resolutions (this may also be automated)
- All tests should be completed with all tests passing before a user story is considered to be "done"


## User story completion

- A user story can only be "done" when all unit, component, functional, accessibility and compatibility testing is completed and passed 
- All sub-tasks within a user story should have a status of "done" before the user story itself can be considered "done"

## Outside-of-sprint testing 

- End-to-end accessibility testing will be scheduled and perfoemd regularly, to verify that new or changed content delivered in the sprint is accessible.
- Performance testing will need to be scheduled in a production-like environment, though in-sprint performance testing should minimise risks.
- Security testing will need to be performed before go-live, including PEN testing by an external party
- An accessibility audit should be completed before go-live
- If required, manual regression for a limited number of scenarios may need to be completed, for example ensuring content is correctly rendered...
