# Area Changes Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/areas/properties/actions/items
```

Changes to the area data

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json*](../../0.0.1-alpha/vinv.min.json "open original schema") |

## items Type

an array where each item follows the corresponding schema in the following list:

1.  [Area Id](vinv-definitions-area-changes-items-area-id.md "check type definition")

2.  [Change](vinv-definitions-area-changes-items-change.md "check type definition")

3.  [Area definition](vinv-definitions-area-definition.md "check type definition")

4.  [UserId](vinv-definitions-area-changes-items-userid.md "check type definition")

## items Constraints

**maximum number of items**: the maximum number of items for this array is: `4`

**minimum number of items**: the minimum number of items for this array is: `0`
