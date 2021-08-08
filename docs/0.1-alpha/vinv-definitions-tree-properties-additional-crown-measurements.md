# Additional crown measurements Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/tree/properties/crown
```

Diameter per height


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## crown Type

an array where each item follows the corresponding schema in the following list:

1.  [Height](vinv-definitions-diameter-at-height-items-height.md "check type definition")
2.  [Diameter](vinv-definitions-diameter-at-height-items-diameter.md "check type definition")

## crown Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
