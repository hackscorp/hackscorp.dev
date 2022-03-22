# Components

## Naming

Components MUST be named with **at least two words** using the TitleCase convention. Examples:

- `AbstractButton`
- `GenericButton`
- `LikeButton`
- `SearchForm`
- `NewsArticleCard`

Components that are developed for a specific application, and which are not shared between applications via library packages, SHOULD be namespaced. Use an abbreviation of the application name as a prefix. Examples:

- `InformWirePostButton`
- `InformWireSearchBar`
- `InformWireGlobalFooter`

## Composition

Components are composed of elements.

TODO: Prefix component-specific elements with the name of their encapsulating component.

## Files

In source code, each component MUST be defined in its own CSS file.

## Nested components

Sometimes it is necessary to nest components, and to vary the styling of the nested components based on the parent component in which they're encapsulated.

Rather than create tight coupling between components, individual components SHOULD have modifiers that allow their styling to be varied, irrespective of the context in which the components are used.

```html
<div class='article-header'>
  <div class='vote-box -highlight'>
    <!-- ... -->
  </div>
  <!-- ... -->
</div>
```

Be extra careful about nested components with elements sharing the same name as elements in its container. This can result in a unexpected cascade of styles through nested components.

## Components and layout

Components MUST be made in a way that they're reusable in different contexts. This means avoiding putting properties such as:

- Positioning: `position`, `top`, `left`, `right`, `bottom`
- Floats: `float`, `clear`
- Margins: `margin`
- Dimensions: `width`, `height`

There will be some valid exceptions to this rule. For example, some components such as avatars and logos will have fixed dimensions.

The positioning of components in a UI is determined by [layout classes](/standards/css/architecture/layout).

