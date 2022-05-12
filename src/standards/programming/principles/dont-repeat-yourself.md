# Don't repeat yourself

This is a widely misunderstood principle of programming.

It is _not_ analogous to "don't copy and paste" code (ie duplication of logic).

<!--

TODO: Do a diagram showing that complexity comes from the level of wiring between components, NOT the volume of code.

A better principle is the rule of single responsibility: that each object/functions should specialize in a single, narrowly-scoped task. There will often be duplicate snippets of logic in different components, but unless those components are somehow semantically related, the replica logic is just a  coincide and it need not be shared.

-->
