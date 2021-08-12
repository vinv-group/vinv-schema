# Tree Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition
```

Tree definition


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## definition Type

`object` ([Tree](vinv-type-definitions-tree-changes-properties-tree.md))

# Tree Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :-------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/id")                         |
| [location](#location) | `object` | Required | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-location.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/location")             |
| [species](#species)   | `string` | Required | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-tree-species.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/species")          |
| [dbh](#dbh)           | `number` | Required | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-diameter-at-breast-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/dbh") |
| [height](#height)     | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/height")                 |
| [trunk](#trunk)       | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-trunk-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/trunk")        |
| [crown](#crown)       | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-crown-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/crown")        |
| [birth](#birth)       | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-birthday.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/birth")                |
| [image](#image)       | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-images.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/image")                  |

## id




`id`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/id")

### id Type

`string`

### id Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## location




`location`

-   is required
-   Type: `object` ([Location](vinv-type-definitions-tree-changes-properties-tree-properties-location.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-location.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/location")

### location Type

`object` ([Location](vinv-type-definitions-tree-changes-properties-tree-properties-location.md))

## species

Tree Species values taken from <https://github.com/b-lack/tree-species>


`species`

-   is required
-   Type: `string` ([Tree species](vinv-type-definitions-tree-changes-properties-tree-properties-tree-species.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-tree-species.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/species")

### species Type

`string` ([Tree species](vinv-type-definitions-tree-changes-properties-tree-properties-tree-species.md))

### species Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")

## dbh

Diameter in centimeter


`dbh`

-   is required
-   Type: `number` ([Diameter at Breast Height](vinv-type-definitions-tree-changes-properties-tree-properties-diameter-at-breast-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-diameter-at-breast-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/dbh")

### dbh Type

`number` ([Diameter at Breast Height](vinv-type-definitions-tree-changes-properties-tree-properties-diameter-at-breast-height.md))

### dbh Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

## height

Height in centimeter


`height`

-   is optional
-   Type: `number` ([Height](vinv-type-definitions-tree-changes-properties-tree-properties-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/height")

### height Type

`number` ([Height](vinv-type-definitions-tree-changes-properties-tree-properties-height.md))

### height Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `10`

## trunk

Diameter per height


`trunk`

-   is optional
-   Type: `object[]` ([Diameter at height](vinv-type-definitions-tree-changes-properties-tree-properties-trunk-definition-diameter-at-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-trunk-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/trunk")

### trunk Type

`object[]` ([Diameter at height](vinv-type-definitions-tree-changes-properties-tree-properties-trunk-definition-diameter-at-height.md))

### trunk Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## crown

Diameter per height


`crown`

-   is optional
-   Type: `object[]` ([Diameter at height](vinv-type-definitions-tree-changes-properties-tree-properties-crown-definition-diameter-at-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-crown-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/crown")

### crown Type

`object[]` ([Diameter at height](vinv-type-definitions-tree-changes-properties-tree-properties-crown-definition-diameter-at-height.md))

### crown Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## birth

Birthday of the tree


`birth`

-   is optional
-   Type: `string` ([Birthday](vinv-type-definitions-tree-changes-properties-tree-properties-birthday.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-birthday.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/birth")

### birth Type

`string` ([Birthday](vinv-type-definitions-tree-changes-properties-tree-properties-birthday.md))

### birth Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## image

List of absolute or relative path to file


`image`

-   is optional
-   Type: `string[]` ([Images](vinv-type-definitions-tree-changes-properties-tree-properties-images-images.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-properties-images.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition/properties/image")

### image Type

`string[]` ([Images](vinv-type-definitions-tree-changes-properties-tree-properties-images-images.md))
