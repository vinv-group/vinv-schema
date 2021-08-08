# Track Id Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/area_history/properties/id
```

URL-friendly id


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## id Type

`string` ([Track Id](vinv-definitions-area-changes-properties-track-id.md))

## id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D*%24 "try regular expression with regexr.com")
