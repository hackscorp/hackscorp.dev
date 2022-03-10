# CSS terminology

## Rule declaration

A rule declaration consists of one or more selectors plus an accompanying group of properties.

```txt
<selector> {
  <properties>
}
```

## Selectors

In a rule declaration, a selector is a string that describes a rule for selecting specific element nodes from the DOM tree.

A selector may target a specific HTML element type, a class, an `id`, or any other HTML attribute, or a combination of several of these things.

Multiple selectors may be combined in a single rule declaration, using comma-separated notation.

```css
[aria-hidden] {
  /* <properties> */
}

h1,
.heading-level-1 {
  /* <properties> */
}
```

## Properties

Properties are key-value pairs that determine the presentational effects that the rendering engines applies to the DOM elements that match a rule declaration's selectors.

```css
.selector {
  background: #f1f1f1;
  color: #333;
}
```
