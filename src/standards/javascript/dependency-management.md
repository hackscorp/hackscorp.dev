# Dependency management in JavaScript applications

## Package management

As a general rule, we use package managers for installation of development dependencies, but we prefer NOT to use package managers for management of production dependencies in JavaScript applications.

Wherever practical, all dependencies of application software SHOULD be committed to source control, rather than be configured in package manifests and so relying on package managers to fetch and install production dependencies from remote package registries.

There are two reasons for this practice.

The first reason is that, with everything that an application needs to run having been committed to its source code repository, we can guarantee to be able to recompile a software application at any point in its history and get _exactly_ the same build artifact as we made originally.

We could achieve this aim with package managers, for example by storing all dependencies in our own centralised package registry, or using tools such as Yarn's [zero installs](//yarnpkg.com/features/zero-installs) feature. But there is a second reason to entirely avoid using package managers to install production dependencies. It means that engineers are required to install all dependencies manually, and this really makes you think twice about what you're adding to your application. You fully understand your application's dependency tree when you have to manage the whole thing yourself.
