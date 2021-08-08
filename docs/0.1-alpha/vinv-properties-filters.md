# Untitled array in vinv Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/filters
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## filters Type

an array where each item follows the corresponding schema in the following list:

1.  [Location radius](vinv-definitions-filter-definition-items-location-radius.md "check type definition")
2.  [Tree Species](vinv-definitions-filter-definition-items-tree-species.md "check type definition")
3.  [DBH range](vinv-definitions-filter-definition-items-dbh-range.md "check type definition")
4.  [Height range](vinv-definitions-filter-definition-items-height-range.md "check type definition")
5.  [Birthday range](vinv-definitions-filter-definition-items-birthday-range.md "check type definition")

## filters Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `1`
