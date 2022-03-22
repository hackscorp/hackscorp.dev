# Selectors

## General style

Include one space between the selector and the opening brace.

```css
.selector {
```

Put the closing brace on its own line, at the same level of indentation as the selector.

```css
.selector {
  /* <properties> */
}
```

Avoid multiple selectors in rule declarations. But where thy are useful, write each selector on a new line.

```css
.btn,
.btn-default {
}
```

## Nesting

Nested selectors MAY be used, and are preferable to long selector strings. Where used, nested selectors MUST be written after all the property declarations. Add a single empty line between the property block and the first nested selectors, and between subsequent nested selectors.

```css
.btn {
  background: green;
  font-weight: bold;
  transition: background-color 0.5s ease;

  .icon {
    margin-right: 10px;
  }
}
```

Do not nest selector more than three levels.

```css
.page-container {
  .content {
    .profile {
      /* STOP! */
    }
  }
}
```

When selectors are more complex than this, this is a code smell that you're writing CSS that is:

- Tightly coupled to a particular HTML structure, and is therefore fragile
- Overly specific, and is therefore too powerful (high specificity)
- Not reusable

## Selector types

We SHOULD use class selectors almost exclusively.

However, class selectors may be qualified with element types in special circumstances. Attribute selectors (excluding `id` selectors) may also be used where appropriate, for example to target elements that have the current keyboard focus.

Where non-class selectors are used, authors MUST document their reasons in an adjacent comment.

ID selectors MUST NOT be used in any circumstance.
