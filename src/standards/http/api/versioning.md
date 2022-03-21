# HTTP service versioning

HTTP-based services SHOULD be versioned. This makes it possible to roll-out breaking changes to services while upgrading clients incrementally.

Version numbers MAY be passed through HTTP headers or URL query parameters. But the RECOMMENDED design is to include the major version number as the first URL path segment.

```txt
https://api.averagecompany.com/v1/health
```
