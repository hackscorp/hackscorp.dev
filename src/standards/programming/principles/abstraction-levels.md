# Abstraction levels

Each component should be written at the same level of abstraction. Do not switch from calls to high-level business entities and services to low-level abstractions such as string buffers within the same function. This sort of code is just the "stream of consciousness" of the coder when they were trying to get something to work. If you see this sort of thing, it is a signal that some refactoring is needed to extract out the low-level concerns. "First, make it work. Then, make it right."
