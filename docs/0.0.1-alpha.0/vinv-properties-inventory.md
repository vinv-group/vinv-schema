# Inventory Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/inventory
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## inventory Type

`object` ([Inventory](vinv-properties-inventory.md))

# Inventory Properties

| Property                    | Type    | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------------- | ------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [treeList](#treelist)       | `array` | Required | cannot be null | [vinv](vinv-properties-inventory-properties-trees.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/inventory/properties/treeList")           |
| [treeHistory](#treehistory) | `array` | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-tree-changes.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/inventory/properties/treeHistory") |

## treeList

List of individual tree definitions


`treeList`

-   is required
-   Type: `object[]` ([Tree](vinv-definitions-tree.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-inventory-properties-trees.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/inventory/properties/treeList")

### treeList Type

`object[]` ([Tree](vinv-definitions-tree.md))

## treeHistory




`treeHistory`

-   is optional
-   Type: `object[]` ([Tree Changes](vinv-definitions-tree-changes.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-inventory-properties-tree-changes.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/inventory/properties/treeHistory")

### treeHistory Type

`object[]` ([Tree Changes](vinv-definitions-tree-changes.md))
