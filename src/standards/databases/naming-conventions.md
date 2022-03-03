# Naming conventions in database systems

## Column names

Column names (or attribute names, in the context of non-relational databases) MUST be used as _contracts_, or _promises_, for the data types they store. This MUST be done by using a [controlled vocabulary](//en.wikipedia.org/wiki/Controlled_vocabulary) for column names, to build a shared understanding of how each field in a dataset is intended to work.

> In information science, a **controlled vocabulary** is a carefully selected list of words and phrases that are used to tag units of information, so that the information can be more easily retrieved and comprehended. It contrasts to **natural language indexing**, which has no such constraints.
>
> An **ontology** (definitions of concepts that describe things), a **nomenclature** (a system for naming things) are similar concepts, and a **taxonomy** (a scheme of classification), are similar concepts.

Adopting a controlled vocabulary for column names is a lightweight — low cost, low tech — solution to documenting data validation, and improving the discoverability and ease-of-wrangling of data. When used consistently across all of an organisation's datasets, a controlled vocabulary can significantly scale data management, as knowledge learnt from working with one datasets easily transfers to another.

There are further advantages to having a global, controlled vocabulary for database fields:

- It can make it easier to script the generation of fake datasets.
- It can help in the automation of data validation checks, and in the setting up of safeguards in data pipelines to detect and eliminate errors, such as duplicated or corrupt data. In general, it helps us to create and maintain higher quality data.
- On the consumer side, a controlled vocabulary can help to make new data easier to explore, providing some of the utility of a proper data dictionary but in a more immediate, more accessible way.

### Types

The first task of a controlled vocabulary for data fields is to capture the generic "type" of data captured by each field. This SHOULD be at a higher level of abstraction than the primitive types commonly found in programming languages — `bool`, `double`, `float`, etc — and instead imply both the nature of the information stored and its typical usage patterns.

In our column name schema, these raw data types are defined as prefixes on the column names.

```txt
<type>_<subject>(_<modifier>)
```

All columns, across all datasets, with the same type prefix SHOULD store its data in the same format. There MAY be exceptions to this rule where the underlying data storage types vary between database systems.

This is our common library of global type prefixes:

- `id`: A unique identifier for each row/entity in an integer format, usually auto-incrementing and often used as a primary key.

- `uuid`: An alternative identifier system, adhering to the UUI system.

- `is`: Binary 0 or 1, or true or false.

- `n`: Number, or a count of quantity or occurrence.

- `dt`: Date, which SHOULD be cast in a standard data format such as YYYY-MM-DD.

- `tm`: Time. which SHOULD BE cast in a consistent, standard format such as YYYY-MM-DDTHH:MM:SS.

- `cat`: Category, encoded as a character string.

In addition to these generic types, we will define domain-specific types on a case-by-case basis. For example, we may use `loc` to hold geolocation data, or `addr` to hold address information.

## Subject

The second part of our column name schema is the subject. This will typically be a noun and will be derived from the business domain.

For example, in the context of a ride sharing app, subjects may include the rider, the driver, the start location, the destination, and the estimated journey time.

## Modifier

The final component of our column name schema is an OPTIONAL modifier. This suffix SHOULD be an adjective that describes a variant of the data in a particular state.

Examples of good modifier words include "raw" and "clean".
