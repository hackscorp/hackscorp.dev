# Character sets

One of the more esoteric and often forgotten features of a CSS stylesheet is its character set.

Normally, the character set of documents is declared in the HTTP response message that transfers the documents over the network. But in case a CSS stylesheet is loaded directly from the local file system or a local cache, it is good practice to also embed the character encoding information in CSS files themselves.

Ideally, this should be done on the very first line of the stylesheet, so the browser understands the character encoding before parsing the rest of the document.

```css
@charset "utf-8";

/* ... */
```

The `@charset` value MUST be encapsulated in double quotes. Single quotes are invalid.
