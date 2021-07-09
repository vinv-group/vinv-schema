# Tree Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/main/dist/0.1-alpha.min.json#/properties/trees/items/0
```

Individual Tree Details


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.min.json\*](../out/0.1-alpha.min.json "open original schema") |

## 0 Type

`object` ([Tree](0-properties-trees-items-tree.md))

# Tree Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :-------------------- | ------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `array` | Optional | cannot be null | [vinv schema](0-properties-trees-items-tree-tree-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/main/dist/0.1-alpha.min.json#/properties/trees/items/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Location](0-properties-trees-items-tree-tree-definition-items-location.md "check type definition")
    2.  [Tree species](0-properties-trees-items-tree-tree-definition-items-tree-species.md "check type definition")
    3.  [Diameter at Breast Height](0-properties-trees-items-tree-tree-definition-items-diameter-at-breast-height.md "check type definition")
    4.  [Height](0-properties-trees-items-tree-tree-definition-items-height.md "check type definition")
    5.  [Additional stem measurements](0-properties-trees-items-tree-tree-definition-items-additional-stem-measurements.md "check type definition")
    6.  [birth](0-properties-trees-items-tree-tree-definition-items-birth.md "check type definition")
    7.  [Visualization](0-properties-trees-items-tree-tree-definition-items-visualization.md "check type definition")
-   cannot be null
-   defined in: [vinv schema](0-properties-trees-items-tree-tree-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/main/dist/0.1-alpha.min.json#/properties/trees/items/0/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [Location](0-properties-trees-items-tree-tree-definition-items-location.md "check type definition")
2.  [Tree species](0-properties-trees-items-tree-tree-definition-items-tree-species.md "check type definition")
3.  [Diameter at Breast Height](0-properties-trees-items-tree-tree-definition-items-diameter-at-breast-height.md "check type definition")
4.  [Height](0-properties-trees-items-tree-tree-definition-items-height.md "check type definition")
5.  [Additional stem measurements](0-properties-trees-items-tree-tree-definition-items-additional-stem-measurements.md "check type definition")
6.  [birth](0-properties-trees-items-tree-tree-definition-items-birth.md "check type definition")
7.  [Visualization](0-properties-trees-items-tree-tree-definition-items-visualization.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `7`

**minimum number of items**: the minimum number of items for this array is: `5`
