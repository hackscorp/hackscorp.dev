# Errors

Aside from using standard HTTP status codes to indicate the general outcome of a request, when returning errors always use a consistent error object as the response message payload.

The purpose of the error payload is to provide more granular information on what went wrong.

Consumers can always expect the same structure and act accordingly.

```json
{
  "code": "user/not_found",
  "message": "A user with the ID 4TL011ax could not be found."
}
```

```json
// Response <= 400 Bad Request
{
  "code": "user/email_required",
  "message": "The parameter [email] is required."
}
```
