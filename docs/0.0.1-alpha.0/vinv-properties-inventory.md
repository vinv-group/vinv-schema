# Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/inventory
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## inventory Type

`object` ([Inventory](vinv-properties-inventory.md))

# Inventory Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                |
| :---------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [tree_status](#tree_status)   | `object` | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-tree-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/inventory/properties/tree_status")          |
| [tree_history](#tree_history) | `array`  | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-tree-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/inventory/properties/tree_history") |

## tree_status

Individual Tree Details


`tree_status`

-   is optional
-   Type: `object` ([Tree List](vinv-properties-inventory-properties-tree-list.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-inventory-properties-tree-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/inventory/properties/tree_status")

### tree_status Type

`object` ([Tree List](vinv-properties-inventory-properties-tree-list.md))

## tree_history




`tree_history`

-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Tree Id](vinv-definitions-tree-changes-items-tree-id.md "check type definition")
    2.  [Time of Change](vinv-definitions-tree-changes-items-time-of-change.md "check type definition")
    3.  [Tree definition](vinv-definitions-tree-definition.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-properties-inventory-properties-tree-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/inventory/properties/tree_history")

### tree_history Type

an array where each item follows the corresponding schema in the following list:

1.  [Tree Id](vinv-definitions-tree-changes-items-tree-id.md "check type definition")
2.  [Time of Change](vinv-definitions-tree-changes-items-time-of-change.md "check type definition")
3.  [Tree definition](vinv-definitions-tree-definition.md "check type definition")
