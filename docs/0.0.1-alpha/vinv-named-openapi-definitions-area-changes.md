# Area Changes Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history
```

Changes to the area data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## area_history Type

`object` ([Area Changes](vinv-named-openapi-definitions-area-changes.md))

## area_history Constraints

**maximum number of items**: the maximum number of items for this array is: `4`

**minimum number of items**: the minimum number of items for this array is: `3`

# area_history Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `string` | Optional | cannot be null | [vinv](vinv-named-openapi-definitions-area-changes-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/id")                 |
| [changedAt](#changedat)   | `string` | Optional | cannot be null | [vinv](vinv-named-openapi-definitions-area-changes-properties-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/changedAt")           |
| [definition](#definition) | `object` | Optional | cannot be null | [vinv](vinv-named-openapi-definitions-area-changes-properties-area-definition.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/definition") |
| [uId](#uid)               | `string` | Optional | cannot be null | [vinv](vinv-named-openapi-definitions-area-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/uId")                 |

## id

URL-friendly id

`id`

*   is optional

*   Type: `string` ([Area Id](vinv-named-openapi-definitions-area-changes-properties-area-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-area-changes-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/id")

### id Type

`string` ([Area Id](vinv-named-openapi-definitions-area-changes-properties-area-id.md))

### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D\*%24 "try regular expression with regexr.com")

## changedAt

Date and time when change happened.

`changedAt`

*   is optional

*   Type: `string` ([Change](vinv-named-openapi-definitions-area-changes-properties-change.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-area-changes-properties-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/changedAt")

### changedAt Type

`string` ([Change](vinv-named-openapi-definitions-area-changes-properties-change.md))

### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## definition

Area definition

`definition`

*   is optional

*   Type: `object` ([Area definition](vinv-named-openapi-definitions-area-changes-properties-area-definition.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-area-changes-properties-area-definition.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/definition")

### definition Type

`object` ([Area definition](vinv-named-openapi-definitions-area-changes-properties-area-definition.md))

## uId



`uId`

*   is optional

*   Type: `string` ([UserId](vinv-named-openapi-definitions-area-changes-properties-userid.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-area-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/area_history/properties/uId")

### uId Type

`string` ([UserId](vinv-named-openapi-definitions-area-changes-properties-userid.md))

### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")
