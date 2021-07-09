# Filter Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/main/dist/0.1-alpha.min.json#/properties/fallbacks/items/items/0
```

Define Trees to be replaced by Fallback tree data.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.min.json\*](../out/0.1-alpha.min.json "open original schema") |

## 0 Type

an array where each item follows the corresponding schema in the following list:

1.  [Tree Species](0-properties-trees-inherit-from-fallback-detail-fallbacks-items-filter-items-tree-species.md "check type definition")
2.  [Diameter range](0-properties-trees-inherit-from-fallback-detail-fallbacks-items-filter-items-diameter-range.md "check type definition")
3.  [Height range](0-properties-trees-inherit-from-fallback-detail-fallbacks-items-filter-items-height-range.md "check type definition")
4.  [Birthday range](0-properties-trees-inherit-from-fallback-detail-fallbacks-items-filter-items-birthday-range.md "check type definition")
5.  [Coordinates](0-properties-trees-items-tree-tree-definition-items-location-items-coordinates.md "check type definition")
6.  [3D representation of tree](0-properties-trees-inherit-from-fallback-detail-fallbacks-items-filter-items-3d-representation-of-tree.md "check type definition")

## 0 Constraints

**minimum number of items**: the minimum number of items for this array is: `2`
