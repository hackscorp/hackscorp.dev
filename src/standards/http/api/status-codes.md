# HTTP API status codes

Use conventional HTTP status codes to indicate the success or failure of a request.

Don't use too many status codes, and use the same status code for the same outcomes.

Some examples:

- `200` for general success
- `201` for successful creation
- `400` for bad requests from the client
- `401` for unauthorized requests
- `403` for missing permissions
- `404` for missing resources
- `429` for too many requests
- `5xx` for internal errors
