# Error message guidelines

Good error messages are polite, concise and precise, and constructive. Above all, error messages must reduce the work needed to be done by the user to fix the problem.

The following rules apply for all kinds of interfaces, both graphical and text-based (eg TTYs):

- Error messages MUST be visible and **highly noticeable**. This means differentiating them visually from the rest of the interface. For accessibility reasons, you MUST NOT rely on color alone to achieve this.

- Error messages MUST explicitly indicate **what has gone wrong**. This SHOULD be reasonably **precise**. Avoid vague generalities such as "syntax error".

- Error messages MUST provide constructive advice on **how to fix the problem**. For example, if the problem is that the selected product is "out of stock", you should tell users when the product is expected to be restocked, or provide a mechanism by which users can be notified when the product becomes available again.

- Error messages MUST be written in a **conversational, human-friendly tone**.

- Obscure **error codes** MAY be included if this is beneficial, but these MUST NOT be prominent.

- If appropriate, **hypertext links** MAY be included to link to online resources that contain more detailed information about the error.

## References

- [Error message guidelines](//www.nngroup.com/articles/error-message-guidelines/) \
  Nielsen Norman Group
