# Area definition Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/definition
```

Area definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## definition Type

`object` ([Area definition](vinv-named-definitions-area-definition.md))

# definition Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)           | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/id")           |
| [polygon](#polygon) | `array`  | Required | cannot be null | [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/polygon") |

## id

Unique identifying ID String

`id`

*   is optional

*   Type: `string` ([Area Id](vinv-named-definitions-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/id")

### id Type

`string` ([Area Id](vinv-named-definitions-id.md))

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

## polygon



`polygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/polygon")

### polygon Type

`object[][]` ([Location](vinv-named-definitions-location.md))

### polygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
