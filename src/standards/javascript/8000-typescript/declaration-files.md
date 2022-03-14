# Declaration files

TypeScript applications commonly consume untyped JavaScript libraries.

To improve the coverage of static type checking, the untyped APIs of JavaScript libraries can be defined in separate type declaration files — which have the `.d.ts` file extension. Thus, where a TypeScript application imports a JavaScript module, the type checker can gain knowledge of its API and types from that module's type declaration file.

A public repository of more than 3,000 TypeScript type declaration files exists for popular open source JavaScript libraries such as jQuery. This is an important part of the TypeScript ecosystem.

However, these type declaration files are written and maintained separately to the development of the libraries themselves. This raises the challenge of checking that the declaration files are correct.

Research has shown that mismatches between type declarations and the libraries they represent are frequent. Inaccuracies in type declarations cause TypeScript's type checker to misguide programmers, by rejecting correct applications and accepting incorrect ones.

For this reason, it has become best practice for library authors to maintain TypeScript type declarations in parallel with development of the libraries themselves. This reduces the odds of incorrect type information being documented.

Where libraries are written in TypeScript, the type declaration files are generated automatically by the TypeScript compiler when the code is packaged into shareable JavaScript modules. But where libraries are written in JavaScript, authors can either write the `d.ts` files manually, or they can embed JSDoc/TSDoc-compatible API documentation within inline source code comments. The TypeScript compiler has extensive support for JSDoc-style annotations, and can generate `.d.ts` type declarations from this.

See [/standards/javascript/comments/api-docs] for instructions to use  JSDoc/TSDoc within JavaScript modules for this purpose.
