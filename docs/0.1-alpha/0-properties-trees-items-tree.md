# Tree Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/trees/items/0
```

Individual Tree Details


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.min.json\*](../../dist/0.1-alpha.schema.min.json "open original schema") |

## 0 Type

`object` ([Tree](0-properties-trees-items-tree.md))

# Tree Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :-------------------- | ------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `array` | Optional | cannot be null | [vinv](0-definitions-tree-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/trees/items/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Location](0-definitions-location.md "check type definition")
    2.  [Tree species](0-definitions-tree-species.md "check type definition")
    3.  [Diameter at Breast Height](0-definitions-tree-definition-items-diameter-at-breast-height.md "check type definition")
    4.  [Height](0-definitions-tree-definition-items-height.md "check type definition")
    5.  [Additional trunk measurements](0-definitions-additional-trunk-measurements.md "check type definition")
    6.  [Additional crown measurements](0-definitions-additional-crown-measurements.md "check type definition")
    7.  [birth](0-definitions-tree-definition-items-birth.md "check type definition")
    8.  [Images](0-definitions-tree-definition-items-images.md "check type definition")
-   cannot be null
-   defined in: [vinv](0-definitions-tree-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/trees/items/0/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [Location](0-definitions-location.md "check type definition")
2.  [Tree species](0-definitions-tree-species.md "check type definition")
3.  [Diameter at Breast Height](0-definitions-tree-definition-items-diameter-at-breast-height.md "check type definition")
4.  [Height](0-definitions-tree-definition-items-height.md "check type definition")
5.  [Additional trunk measurements](0-definitions-additional-trunk-measurements.md "check type definition")
6.  [Additional crown measurements](0-definitions-additional-crown-measurements.md "check type definition")
7.  [birth](0-definitions-tree-definition-items-birth.md "check type definition")
8.  [Images](0-definitions-tree-definition-items-images.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `8`

**minimum number of items**: the minimum number of items for this array is: `4`
