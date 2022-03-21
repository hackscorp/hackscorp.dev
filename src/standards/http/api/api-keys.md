# API keys

API keys are a common design pattern in HTTP APIs. They allow third parties to authenticate with a static private key. They are primarily used for authentication from other client _applications_ rather than users.

Where implemented, API keys SHOULD be passed using a custom HTTP header. Our preference is for a header field called `X-Api-Key`.

API keys MUST have expiration days, and it MUST be possible to revoke active keys, in case they are compromised.

When _using_ API keys to interact with external services, the keys MUST NOT be checked in to source control. Store them in environment variables instead.
