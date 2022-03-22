# Properties

## General style

In property declarations, there MUST be a single empty space after the `:` and before the value. But there MUST NOT be any space between the property name and the colon.

## Ordering

Properties MUST be listed alphabetically.

## Shorthand properties

Prefer clarity to brevity. Generally, we avoid shorthand properties like `font` and `transition` and lean towards longer lists of self-documenting properties. This is necessary where variables are applied, anyway.

```css
/* Okay */
transition: margin 0.5s cubic-bezier(0.16, 0.68, 0.43, 0.99) 0s;

/* Better */
transition-delay: 0s;
transition-duration: .5s;
transition-property: margin;
transition-timing-function: var(--easing-function);
```
