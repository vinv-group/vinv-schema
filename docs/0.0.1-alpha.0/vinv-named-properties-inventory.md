# Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/inventory
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json\*](../../0.0.1-alpha.0/named/vinv-named.min.json "open original schema") |

## inventory Type

`object` ([Inventory](vinv-named-properties-inventory.md))

# Inventory Properties

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                                            |
| :---------------------------- | ------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [tree_status](#tree_status)   | `array` | Optional | cannot be null | [vinv](vinv-named-properties-inventory-properties-tree-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/inventory/properties/tree_status")          |
| [tree_history](#tree_history) | `array` | Optional | cannot be null | [vinv](vinv-named-properties-inventory-properties-tree-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/inventory/properties/tree_history") |

## tree_status

Individual Tree Details


`tree_status`

-   is optional
-   Type: `object[]` ([Tree](vinv-named-definitions-tree.md))
-   cannot be null
-   defined in: [vinv](vinv-named-properties-inventory-properties-tree-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/inventory/properties/tree_status")

### tree_status Type

`object[]` ([Tree](vinv-named-definitions-tree.md))

## tree_history




`tree_history`

-   is optional
-   Type: `object[]` ([Tree Changes](vinv-named-definitions-tree-changes.md))
-   cannot be null
-   defined in: [vinv](vinv-named-properties-inventory-properties-tree-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/inventory/properties/tree_history")

### tree_history Type

`object[]` ([Tree Changes](vinv-named-definitions-tree-changes.md))
