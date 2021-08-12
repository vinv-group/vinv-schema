# Area Changes Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items
```

Changes to the track data


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## items Type

`object` ([Area Changes](vinv-type-properties-areas-properties-area-changes-list-area-changes.md))

## items Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `3`

# Area Changes Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                      |
| :------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `string` | Optional | cannot be null | [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-track-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/id")                |
| [changedAt](#changedat)   | `string` | Optional | cannot be null | [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-change.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/changedAt")           |
| [definition](#definition) | `array`  | Optional | cannot be null | [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-area-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/definition") |
| [uId](#uid)               | `string` | Optional | cannot be null | [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-userid.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/uId")                 |

## id

URL-friendly id


`id`

-   is optional
-   Type: `string` ([Track Id](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-track-id.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-track-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/id")

### id Type

`string` ([Track Id](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-track-id.md))

### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D*%24 "try regular expression with regexr.com")

## changedAt

Date and time when change happened.


`changedAt`

-   is optional
-   Type: `string` ([Change](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-change.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-change.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/changedAt")

### changedAt Type

`string` ([Change](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-change.md))

### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### changedAt Examples

```json
"2018-11-13T20:20:39+00:00"
```

## definition




`definition`

-   is optional
-   Type: `object[][][]` ([Location](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-area-definition-polygon-coordinates-polygon-coordinates-location.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-area-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/definition")

### definition Type

`object[][][]` ([Location](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-area-definition-polygon-coordinates-polygon-coordinates-location.md))

### definition Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## uId




`uId`

-   is optional
-   Type: `string` ([UserId](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-userid.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-userid.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas/properties/area_history/items/properties/uId")

### uId Type

`string` ([UserId](vinv-type-properties-areas-properties-area-changes-list-area-changes-properties-userid.md))

### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")
