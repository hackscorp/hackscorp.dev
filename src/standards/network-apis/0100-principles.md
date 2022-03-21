# Design principles for network APIs

This section sets out some high level principles for the design of network APIs. Although these principles are intended to be generic — relevant to all kinds of client-server interfaces — the examples given tend to focus on HTTP APIs.

## Be consistent

The best APIs are, above all, _predictable_.

When a consumer uses and understands one endpoint, they should expect other similar endpoints to work in the same way.

In practical terms, in the context of HTTP interfacess, this means:

- Using the same letter case for resources, URL parameters, HTTP header fields, etc.
- Consistent use of singular and plural names.
- Global system of authentication and authorization.
- Consistent use of HTTP methods.
- Consistent use of HTTP headers.
- Consistent use of HTTP status codes.

## Versioning

Network APIs SHOULD be versioned. This makes it possible to roll-out breaking changes to services while upgrading clients incrementally.

See also [HTTP service versioning](/standards/http/api/versioning).
