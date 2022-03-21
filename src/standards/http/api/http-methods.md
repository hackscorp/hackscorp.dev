# HTTP methods

There are many HTTP methods, but the most reasonable ones to use in the context of HTTP APIs are:

- `POST` for creating resources
  - `POST /users`
- `GET` for reading resources
  - `GET /users`
  - `GET /users/{id}`
- `PATCH` for applying partial updates to a resource
  - `PATCH /users/{id}`
- `PUT` for applying full updates to a resource (entirely replacing the current resource)
  - `PUT /users/{id}`
- `DELETE` for deleting resources
  - `DELETE /users/{id}`

## `GET`

Pagination MUST be implemented for large collections. The system of pagination MUST be consistent across all `GET` endpoints.

## `POST`

POST requests MUST always return the created resource. Unless the resource is created asynchronously, in which case a link MUST be provided from which the new resource can be retrieved later.

## `PATCH` vs `PUT`

Prefer `PATCH` over `PUT`.

`PATCH` requests SHOULD apply partial updates to a resources, whereas `PUT` replaces an existing resource entirely. It's usually a good idea to design APIs around `PATCH` requests because:

- `PUT` requests, done properly, will be more network-intensive, because you have to transfer full entities every time.
- `PUT` requests are more error prone, because they depend on more extensive datasets.
- In practice, there are few real-world scenarios in which full updates on resources make sense.
