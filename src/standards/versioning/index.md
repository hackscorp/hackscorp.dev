# Versioning standards

Versioning is one of the most challenging aspects to maintaining libraries, particularly those released in the public space. A reliable versioning system is one of the most crucial ways to develop trust in your packages.

When you modify a package, you need to signal to its consumers that you've made changes.

You normally do this by incrementing the version number of the package. Most open source JavaScript and TypeScript libraries use Semantic Versioning (aka SemVer) to express the different types of changes a maintainer has made to a package.

Incremental versioning allows people to opt-in to new changes when _they_ are ready to upgrade, rather than forcing them to upgrade on _your_ timeline. It's also a way to communicate with your users what kind of changes you've made in the each new release.

Semantic Versioning is one such versioning convention. In the JavaScript/TypeScript and web ecosystems, everyone is familiar with this convention. Consumers understand that bumping a library to 1.0.1 is different from 1.1.0.

```txt
[MAJOR].[MINOR].[PATCH]
```

The rules are:

- When you make a backwards-compatible bug fix, you release a PATCH update
- When you introduce new features that do not break the backwards-compatibility of existing features, you release a MINOR update
- When you break existing functionality, you release a MAJOR version bump

It is possible also to use conventions such as Conventional Commits and tools such as Commitzen to automate the process of bumping version numbers, based on Git commit messages. Conventional Commits help to write commit messages in a machine-readable and human-readable way, so you can automate versioning of your packages. Versioning tools such as Lerna also understand Conventional Commits.

Be aware of the limitations of SemVer. SemVer helps to make sure we're communicating with our users, but is has its flaws. Most notably, it can be difficult to determine whether a change breaks backwards compatibility, because it is impossible for library authors to know every single way the individual parts of their packages are being used.
