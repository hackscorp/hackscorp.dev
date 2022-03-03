# Hacks Engineering Guide (hackscorp.dev)

The Hacks Engineering Guide documents the engineering process we follow, the technology and tools we use, and the standards we adhere to, to build and deliver software systems.

## Filesystem structure

Currently, this is internal documentation, but we intend to make our engineering guide publicly available in the future, probably to be served from the domain hackscorp.dev. For this reason, the structure of the `src` directory is intended to form the basis of a static website, and will be used as input for a static site compiler. The following rules apply:

- Markdown (`.md`) files will be transformed to HTML.
- Images and other multimedia files will be copied verbatim.
- Markdown files prefixed with an underscore (`_`) will be treated as drafts and will be ignored by the site compiler.
- Files called `TEMPLATE.md`, within any `src` subpath, will also be ignored.

Within directory indexes, resources will be listed in alphabetical order. To control the rendered order, both subdirectories and Markdown files may be prefixed with digits. Numbered prefixes files will be removed from the eventual path name.

Numbered prefixes can also be used to create nested lists. In the following example, the second and third resources will be rendered as subsections of the first. Any other files with prefixes within the range 7001-7099 will also fall into the same subsection.

```txt
7000-typescript.md
7010-interfaces.md
7020-enums.md
```

## Styleguide

External links MUST exclude the `http(s):` prefix from URLs:

```md
[Link text](//gitlab.com/username)
```

Internal links MUST be relative to the `src` directory and MUST be prefixed with a single forward-slash character (`/`). Internal URLs MUST NOT be suffixed with neither a slash nor file extension.

Reference lists MUST be formatted like this:

```md
- **[Popups: 10 problematic trends and alternatives](//www.nngroup.com/articles/popups/)** \
  Anna Kaley, Nielsen Norman Group (2019)

- **[The cult of the complex](//alistapart.com/article/cult-of-the-complex/)** \
  by Jeffrey Zeldman (2018)
```

The Hacks Engineering Guide is a perpetual work-in-progress. At any one time, many sections will be incomplete or out-of-date. Authors may leave `TODO` lists at the bottom of any Markdown file, which MUST be formatted as follows:

```md
-----

## TODO

- [ ] Provide guidance on writing issues for different purposes (eg features vs bugs)
- [ ] Document how issues should be tagged
```

## Credits

The following resources were influential in the design of our engineering process. Other reference resources are linked throughout the Hacks Engineering Guide.

- **Software engineering at Google** \
  Fergus Henderson — A leaked internal document about how Google does software engineering. Google it to read it!

- **[Scaling agile at Spotify](//blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)** \
  Henrik Kniberg and Anders Ivarsson (2012) — Spotify's internal structure of "tribes", "squads", "chapters" and "guilds". Atlassian has published a [summary](//www.atlassian.com/agile/agile-at-scale/spotify).

- **[Shape up](//basecamp.com/shapeup)** \
  How the [Basecamp](//basecamp.com/) team learnt to "stop running in circles and ship work that matters".

- **[Enterprise agile](//www.bjss.com/enterprise-agile/)** \
  BJSS (2019)

-----

Copyright © 2020-2022 Hacks Ltd \
All rights reserved
