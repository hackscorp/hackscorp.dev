# Resources

In HTTP APIs, most endpoints reference discrete resources, and they should be named that way.

Don't add unnecessary information to resource names that can't be inferred from elsewhere.

- **Good:**
  - `GET /users`
  - `DELETE /users/{id}`
  - `POST /users/{id}/notifications`

- **Bad:**
  - `GET /getUsers`
  - `DELETE /deleteUser`
  - `POST /notification/user`

## Expanding resources

It is good practice to allow consumers to request "expanded" versions of resources. This means provide additional resources that are related to the resource being requested. This is especially useful for avoiding round-trips to the server.

```json
{
  "id": "T9hoBuuTL4",
  "email": "jdoe@averagecompany.com",
  "name": "John Doe",
  "orders": [
    {
      "id": "Hy3SSXU1PF",
      "items": [
        {
          "name": "API course"
        },
        {
          "name": "iPhone 13"
        }
      ]
    },
    {
      "id": "bx1zKmJLI6",
      "items": [
        {
          "name": "SaaS subscription"
        }
      ]
    }
  ]
}
```
