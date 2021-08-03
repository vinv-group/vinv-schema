# Tree Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/trees/items/0
```

Individual Tree Details


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## 0 Type

`object` ([Tree](vinv-properties-trees-items-tree.md))

# Tree Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                        |
| :-------------------- | ------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | `array` | Optional | cannot be null | [vinv](vinv-definitions-tree-definition.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/trees/items/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Location](vinv-definitions-location.md "check type definition")
    2.  [Tree species](vinv-definitions-tree-species.md "check type definition")
    3.  [Diameter at Breast Height](vinv-definitions-tree-definition-items-diameter-at-breast-height.md "check type definition")
    4.  [Height](vinv-definitions-tree-definition-items-height.md "check type definition")
    5.  [Additional trunk measurements](vinv-definitions-additional-trunk-measurements.md "check type definition")
    6.  [Additional crown measurements](vinv-definitions-additional-crown-measurements.md "check type definition")
    7.  [birth](vinv-definitions-tree-definition-items-birth.md "check type definition")
    8.  [Images](vinv-definitions-tree-definition-items-images.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-definitions-tree-definition.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/trees/items/0/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [Location](vinv-definitions-location.md "check type definition")
2.  [Tree species](vinv-definitions-tree-species.md "check type definition")
3.  [Diameter at Breast Height](vinv-definitions-tree-definition-items-diameter-at-breast-height.md "check type definition")
4.  [Height](vinv-definitions-tree-definition-items-height.md "check type definition")
5.  [Additional trunk measurements](vinv-definitions-additional-trunk-measurements.md "check type definition")
6.  [Additional crown measurements](vinv-definitions-additional-crown-measurements.md "check type definition")
7.  [birth](vinv-definitions-tree-definition-items-birth.md "check type definition")
8.  [Images](vinv-definitions-tree-definition-items-images.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `8`

**minimum number of items**: the minimum number of items for this array is: `4`
