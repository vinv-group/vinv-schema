# TreeList Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/data
```

List of trees defined

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json*](../../0.0.1-alpha/vinv.min.json "open original schema") |

## data Type

`object` ([TreeList](vinv-properties-inventory-properties-tree-inventory-properties-treelist.md))

# data Properties

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                                         |
| :---------------------- | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `^[A-Za-z0-9_-]{1,36}$` | `array` | Optional | cannot be null | [vinv](vinv-definitions-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/data/patternProperties/^[A-Za-z0-9_-]{1,36}$") |

## Pattern: `^[A-Za-z0-9_-]{1,36}$`

Tree definition

`^[A-Za-z0-9_-]{1,36}$`

*   is optional

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Location](vinv-definitions-location.md "check type definition")

    2.  [Tree species](vinv-definitions-tree-species.md "check type definition")

    3.  [Diameter at Breast Height](vinv-definitions-tree-items-diameter-at-breast-height.md "check type definition")

    4.  [Height](vinv-definitions-tree-items-height.md "check type definition")

    5.  [Additional trunk measurements](vinv-definitions-additional-trunk-measurements.md "check type definition")

    6.  [Additional crown measurements](vinv-definitions-additional-crown-measurements.md "check type definition")

    7.  [Birthday](vinv-definitions-tree-items-birthday.md "check type definition")

    8.  [Images](vinv-definitions-tree-items-images.md "check type definition")

*   cannot be null

*   defined in: [vinv](vinv-definitions-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/data/patternProperties/^\[A-Za-z0-9\_-]{1,36}$")

### ^\[A-Za-z0-9\_-]{1,36}$ Type

an array where each item follows the corresponding schema in the following list:

1.  [Location](vinv-definitions-location.md "check type definition")

2.  [Tree species](vinv-definitions-tree-species.md "check type definition")

3.  [Diameter at Breast Height](vinv-definitions-tree-items-diameter-at-breast-height.md "check type definition")

4.  [Height](vinv-definitions-tree-items-height.md "check type definition")

5.  [Additional trunk measurements](vinv-definitions-additional-trunk-measurements.md "check type definition")

6.  [Additional crown measurements](vinv-definitions-additional-crown-measurements.md "check type definition")

7.  [Birthday](vinv-definitions-tree-items-birthday.md "check type definition")

8.  [Images](vinv-definitions-tree-items-images.md "check type definition")

### ^\[A-Za-z0-9\_-]{1,36}$ Constraints

**maximum number of items**: the maximum number of items for this array is: `9`

**minimum number of items**: the minimum number of items for this array is: `3`
