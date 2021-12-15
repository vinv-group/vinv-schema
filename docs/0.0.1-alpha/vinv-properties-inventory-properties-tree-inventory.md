# Tree Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees
```

Tree data & history

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.min.json*](../../0.0.1-alpha/vinv.min.json "open original schema") |

## trees Type

`object` ([Tree Inventory](vinv-properties-inventory-properties-tree-inventory.md))

# trees Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data)       | `object` | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-tree-inventory-properties-treelist.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/data")           |
| [actions](#actions) | `array`  | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-tree-inventory-properties-treechangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/actions") |

## data

List of trees defined

`data`

*   is optional

*   Type: `object` ([TreeList](vinv-properties-inventory-properties-tree-inventory-properties-treelist.md))

*   cannot be null

*   defined in: [vinv](vinv-properties-inventory-properties-tree-inventory-properties-treelist.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/data")

### data Type

`object` ([TreeList](vinv-properties-inventory-properties-tree-inventory-properties-treelist.md))

## actions

List of tree data changed

`actions`

*   is optional

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Tree Id](vinv-definitions-tree-changes-items-tree-id.md "check type definition")

    2.  [Time of Change](vinv-definitions-tree-changes-items-time-of-change.md "check type definition")

    3.  [Tree](vinv-definitions-tree.md "check type definition")

    4.  [UserId](vinv-definitions-tree-changes-items-userid.md "check type definition")

*   cannot be null

*   defined in: [vinv](vinv-properties-inventory-properties-tree-inventory-properties-treechangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/actions")

### actions Type

an array where each item follows the corresponding schema in the following list:

1.  [Tree Id](vinv-definitions-tree-changes-items-tree-id.md "check type definition")

2.  [Time of Change](vinv-definitions-tree-changes-items-time-of-change.md "check type definition")

3.  [Tree](vinv-definitions-tree.md "check type definition")

4.  [UserId](vinv-definitions-tree-changes-items-userid.md "check type definition")
