# Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## inventory Type

`object` ([Inventory](vinv-type-properties-inventory.md))

# Inventory Properties

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------------- | ------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tree_status](#tree_status)   | `array` | Optional | cannot be null | [vinv](vinv-type-properties-inventory-properties-tree-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory/properties/tree_status")          |
| [tree_history](#tree_history) | `array` | Optional | cannot be null | [vinv](vinv-type-properties-inventory-properties-tree-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory/properties/tree_history") |

## tree_status

Individual Tree Details


`tree_status`

-   is optional
-   Type: `object[]` ([Tree](vinv-type-properties-inventory-properties-tree-list-tree.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-inventory-properties-tree-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory/properties/tree_status")

### tree_status Type

`object[]` ([Tree](vinv-type-properties-inventory-properties-tree-list-tree.md))

## tree_history




`tree_history`

-   is optional
-   Type: `object[]` ([Tree Changes](vinv-type-properties-inventory-properties-tree-changes-list-tree-changes.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-inventory-properties-tree-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory/properties/tree_history")

### tree_history Type

`object[]` ([Tree Changes](vinv-type-properties-inventory-properties-tree-changes-list-tree-changes.md))
