# vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json
```

Lightweight data standard for individual tree based forest management, visualisation & analytics

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [vinv.min.json](../../0.0.1-alpha/vinv.min.json "open original schema") |

## vinv Type

`object` ([vinv](vinv.md))

# vinv Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                    |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------ |
| [v](#v)                 | `string` | Required | cannot be null | [vinv](vinv-properties-version.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/v")           |
| [id](#id)               | `string` | Required | cannot be null | [vinv](vinv-properties-document-id.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/id")      |
| [created](#created)     | `string` | Required | cannot be null | [vinv](vinv-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/created")     |
| [$schema](#schema)      | `string` | Optional | cannot be null | [vinv](vinv-properties-schema.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/$schema")      |
| [inventory](#inventory) | `object` | Optional | cannot be null | [vinv](vinv-properties-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory") |

## v

Version of the used vinv schema, the file should be validated against

`v`

*   is required

*   Type: `string` ([Version](vinv-properties-version.md))

*   cannot be null

*   defined in: [vinv](vinv-properties-version.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/v")

### v Type

`string` ([Version](vinv-properties-version.md))

### v Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9]\.[0-9]\.[0-9](-alpha|-beta)?$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9%5D%5C.%5B0-9%5D%5C.%5B0-9%5D\(-alpha%7C-beta\)%3F%24 "try regular expression with regexr.com")

### v Examples

```json
"0.0.1-alpha"
```

## id

Once created, this ID should never change.

`id`

*   is required

*   Type: `string` ([Document ID](vinv-properties-document-id.md))

*   cannot be null

*   defined in: [vinv](vinv-properties-document-id.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/id")

### id Type

`string` ([Document ID](vinv-properties-document-id.md))

### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

### id Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

## created

Date and time this document was created.

`created`

*   is required

*   Type: `string` ([Created](vinv-properties-created.md))

*   cannot be null

*   defined in: [vinv](vinv-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/created")

### created Type

`string` ([Created](vinv-properties-created.md))

### created Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### created Examples

```json
"2018-11-13T20:20:39+00:00"
```

## $schema



`$schema`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [vinv](vinv-properties-schema.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/$schema")

### $schema Type

`string`

### $schema Examples

```json
"https://schema.vinv.io/0.0.1-alpha/vinv.min.json"
```

## inventory



`inventory`

*   is optional

*   Type: `object` ([Inventory](vinv-properties-inventory.md))

*   cannot be null

*   defined in: [vinv](vinv-properties-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory")

### inventory Type

`object` ([Inventory](vinv-properties-inventory.md))

# vinv Definitions

## Definitions group tree

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/tree"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group trees_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/trees_history"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group track

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/track"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group track_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/track_history"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group area

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/area"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group area_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/area_history"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group location

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/location"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group coordinates

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/coordinates"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group dbh

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/dbh"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group species

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/species"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group dimensions_trunk

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/dimensions_trunk"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group dimensions_crown

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/dimensions_crown"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group diameter_height

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/diameter_height"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group filter

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/filter"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group image

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/image"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group id

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group workOrderDef

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/workOrderDef"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group plotTypes

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/plotTypes"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group polygon

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/polygon"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group circle

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/circle"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
