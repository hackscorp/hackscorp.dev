# Releasing

TODO: Define "release" or "integration" versus "launch" or "distribute" - the latter are user-focused changes.

Releases are done frequently for most software. Weekly for fortnightly releases are a common goal, and some teams even release daily. This is made possible by automating most of the normal release engineering tasks.

Releasing frequently helps to keep engineers motivated. It's harder to get excited about something if it won't be released until many months or even years in the future. It also increases overall velocity by allowing more iterations, and thus more opportunities for feedback and more chances to respond to feedback, in a given time.

A release typically starts with a fresh workspace, by syncing to the change number of the latest "green" build (ie the last change for which all the automated tests passed) and making a release branch from that point. The release engineer MAY select additional changes to be "cherry-picked", ie merged from the main branch onto the release branch. Then the software will be rebuilt from scratch and the tests are run. If any tests fail, additional changes are introduced to the main branch to fix the failures, and those additional changes are cherry-picked onto the release branch. When all the tests pass, the built executables and data files are packaged up. All of these steps are automated so the release engineer need only run some simple commands.

Once a candidate build has been packaged, it is typically loaded onto a staging server for further integration/end-to-end testing by a small set of users (sometimes just the development team).

A useful technique involves sending a copy (or a subset of) the requests from production traffic to the staging server, but also sending those same requests to the current production servers for actual processing. The responses from the staging server are discarded, and the responses from the live production servers are sent back to the users. This helps ensure that any issues that might cause serious problems (eg server crashes) can be detected before putting the server into production.

The next step is usually to roll out to one or more "canary" servers that are processing a subset of the live production traffic. Unlike the "staging" servers, these are processing and responding to real users.

Finally, the release cna be rolled out to all servers in all data centres. For very high traffic, high reliability services, this is done with a gradual roll-out over a period of a couple of days, to help reduce the impact of any outages due to newly introduced bugs not caught by any of the previous steps.
